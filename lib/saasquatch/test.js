
var Analytics = require('analytics.js').constructor;
var integration = require('analytics.js-integration');
var tester = require('analytics.js-integration-tester');
var plugin = require('./');

describe('SaaSquatch', function(){
  var SaaSquatch = plugin.Integration;
  var saasquatch;
  var analytics;
  var options = {
    tenantAlias: 'baz',
    accountId: 'foo'
  };

  beforeEach(function(){
    analytics = new Analytics;
    saasquatch = new SaaSquatch(options);
    analytics.use(plugin);
    analytics.use(tester);
    analytics.add(saasquatch);
  });

  afterEach(function(){
    analytics.restore();
    analytics.reset();
  });

  after(function(){
    saasquatch.reset();
  });

  it('should have the correct settings', function(){
    var Test = integration('SaaSquatch')
      .readyOnInitialize()
      .option('tenantAlias', '')
      .global('_sqh');

    analytics.compare(SaaSquatch, Test);
  });

  describe('loading', function(){
    it('should load', function(done){
      analytics.on('ready', done);
      analytics.initialize();
      analytics.page();
      analytics.identify('my-id');
    });
  });

  describe('after loading', function(){
    beforeEach(function(done){
      analytics.once('ready', done);
      analytics.initialize();
      analytics.page();
    });

    describe('#identify', function(){
      beforeEach(function(){
        analytics.stub(window._sqh, 'push');
      });

      it('should not send if userId or email are missing', function(){
        analytics.identify();
        analytics.didNotCall(window._sqh.push);
      });

      it('should send if userId is given', function(){
        analytics.identify('id');
        analytics.called(window._sqh.push, ['init', {
          user_id: 'id',
          tenant_alias: 'baz',
          email: undefined,
          first_name: undefined,
          last_name: undefined,
          user_image: undefined
        }]);
      });

      it('should send if email is given', function(){
        analytics.identify({ email: 'self@example.com' });
        analytics.called(window._sqh.push, ['init', {
          user_id: null,
          tenant_alias: 'baz',
          email: 'self@example.com',
          first_name: undefined,
          last_name: undefined,
          user_image: undefined
        }]);
      });

      it('should pass checksum', function(){
        analytics.identify({ email: 'self@example.com' }, { SaaSquatch: { checksum: 'wee' } });
        analytics.called(window._sqh.push, ['init', {
          user_id: null,
          tenant_alias: 'baz',
          email: 'self@example.com',
          first_name: undefined,
          last_name: undefined,
          user_image: undefined,
          checksum: 'wee'
        }]);
      });

      it('should pass accountId', function(){
        analytics.identify({ email: 'self@example.com', accountId: 123 });
        analytics.called(window._sqh.push, ['init', {
          user_id: null,
          tenant_alias: 'baz',
          email: 'self@example.com',
          first_name: undefined,
          last_name: undefined,
          user_image: undefined,
          account_id: 123
        }]);
      });

      it('should pass referral image', function(){
        analytics.identify(1, { referralImage: 'img' });
        analytics.called(window._sqh.push, ['init', {
          user_id: 1,
          tenant_alias: 'baz',
          email: undefined,
          first_name: undefined,
          last_name: undefined,
          user_image: undefined,
          fb_share_image: 'img'
        }]);
      });

      it('should send only once', function(){
        analytics.identify('id');
        analytics.identify('id');
        analytics.calledOnce(window._sqh.push);
      });
    });
  });
});