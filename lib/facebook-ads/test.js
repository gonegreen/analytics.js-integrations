
describe('Facebook Ads', function(){

  var Facebook = require('./index')
  var test = require('analytics.js-integration-tester');
  var analytics = require('analytics.js');
  var assert = require('assert');
  var sinon = require('sinon');
  var facebook;

  var settings = {
    events: {
      signup: 0,
      login: 1,
      play: 2
    }
  };

  beforeEach(function(){
    analytics.use(Facebook);
    facebook = new Facebook.Integration(settings);
    facebook.initialize();
  });

  it('should have the correct settings', function(){
    test(facebook)
      .name('Facebook Ads')
      .readyOnInitialize()
      .option('currency', 'USD')
      .option('events', {});
  });

  it('should load', function(done){
    window._fbq = [];
    assert(!facebook.loaded());
    facebook.load(function(){
      assert(facebook.loaded());
      done();
    });
  });

  describe('#track', function(){
    beforeEach(function(){
      sinon.stub(window._fbq, 'push');
    });

    afterEach(function(){
      window._fbq = [];
    });

    it('should send custom event even if event is not defined', function(){
      test(facebook)
        .track('event', { x: 10 })
        .called(_fbq.push)
        .args([ 'track', 'event', { x: 10 } ]);
    });

    it('should send event if found', function(){
      test(facebook)
        .track('signup', {})
        .called(_fbq.push)
        .args([ 'track', 0, { currency: 'USD', value: '0.00' } ]);
    });

    it('should send revenue', function(){
      test(facebook)
        .track('login', { revenue: '$50' })
        .called(_fbq.push)
        .args([ 'track', 1, { value: '50.00', currency: 'USD' } ]);
    });
  });
});
