
var Analytics = require('analytics.js').constructor;
var integration = require('analytics.js-integration');
var tester = require('analytics.js-integration-tester');
var plugin = require('./');

describe('Tapstream', function(){
  var Tapstream = plugin.Integration;
  var tapstream;
  var analytics;
  var options = {
    accountName: 'tapstreamTestAccount'
  };

  beforeEach(function(){
    analytics = new Analytics;
    tapstream = new Tapstream(options);
    analytics.use(plugin);
    analytics.use(tester);
    analytics.add(tapstream);
  });

  afterEach(function(){
    analytics.restore();
    analytics.reset();
  });

  after(function(){
    tapstream.reset();
  });

  it('should store the right settings', function(){
    var Test = integration('Tapstream')
      .assumesPageview()
      .readyOnLoad()
      .global('_tsq')
      .option('accountName', '')
      .option('trackAllPages', true)
      .option('trackNamedPages', true);

    analytics.compare(Tapstream, Test);
  });

  describe('before loading', function(){
    beforeEach(function(){
      analytics.stub(tapstream, 'load');
    });

    afterEach(function(){
      tapstream.reset();
    });

    describe('#initialize', function(){
      it('should push setAccount name onto window._tsq', function(){
        analytics.initialize();
        analytics.page();
        analytics.deepEqual(window._tsq[0] , ['setAccountName', options.accountName]);
      });

      it('should call #load', function(){
        analytics.initialize();
        analytics.page();
        analytics.called(tapstream.load);
      });
    });
  });

  describe('loading', function(){
    it('should load', function(done){
      analytics.load(tapstream, done);
    });
  });

  describe('after loading', function(){
    beforeEach(function(done){
      analytics.once('ready', done);
      analytics.initialize();
      analytics.page();
    });

    describe('#page', function(){
      beforeEach(function(){
        analytics.stub(window._tsq, 'push');
      });

      it('should track all pages by default', function(){
        analytics.page();
        analytics.called(window._tsq.push, ['fireHit', 'loaded-a-page', [window.location.origin + window.location.pathname]]);
      });

      it('should track named pages by default', function(){
        analytics.page('Name');
        analytics.called(window._tsq.push, ['fireHit', 'viewed-name-page', [window.location.origin + window.location.pathname]]);
      });

      it('should track named pages with a category', function(){
        analytics.page('Category', 'Name');
        analytics.called(window._tsq.push, ['fireHit', 'viewed-category-name-page', [window.location.origin + window.location.pathname]]);
      });

      it('should track categorized pages by default', function(){
        analytics.page('Category', 'Name');
        analytics.called(window._tsq.push, ['fireHit', 'viewed-category-page', [window.location.origin + window.location.pathname]]);
      });

      it('should not track any pages if the options are off', function(){
        tapstream.options.trackAllPages = false;
        tapstream.options.trackNamedPages = false;
        tapstream.options.trackCategorizedPages = false;
        analytics.page('Name');
        analytics.page('Category', 'Name');
        analytics.didNotCall(window._tsq.push);
      });
    });

    describe('#track', function(){
      beforeEach(function(){
        analytics.stub(window._tsq, 'push');
      });

      it('should send an event as a slug', function(){
        analytics.track('Event');
        analytics.called(window._tsq.push, ['fireHit', 'event', [undefined]]);
      });
    });
  });
});