
describe('BugHerd', function(){

  var analytics = require('analytics.js');
  var assert = require('assert');
  var BugHerd = require('./index')
  var equal = require('equals');
  var sinon = require('sinon');
  var test = require('analytics.js-integration-tester');

  var bugherd;
  var settings = {
    apiKey: 'r3p1ipxc65qnony5rxwckg'
  };

  beforeEach(function(){
    analytics.use(BugHerd);
    bugherd = new BugHerd.Integration(settings);
    bugherd.initialize(); // noop
  });

  afterEach(function(){
    bugherd.reset();
  });

  it('should have the right settings', function(){
    test(bugherd)
      .name('BugHerd')
      .assumesPageview()
      .readyOnLoad()
      .global('BugHerdConfig')
      .global('_bugHerd')
      .option('apiKey', '')
      .option('showFeedbackTab', true);
  });

  describe('#initialize', function(){
    beforeEach(function(){
      bugherd.load = sinon.spy();
    });

    it('should create window.BugHerdConfig', function(){
      bugherd.initialize();
      assert(equal(window.BugHerdConfig, { feedback: { hide: false }}));
    });

    it('should be able to hide the tab', function(){
      bugherd.options.showFeedbackTab = false;
      bugherd.initialize();
      assert(equal(window.BugHerdConfig, { feedback: { hide: true }}));
    });

    it('should call #load', function(){
      bugherd.initialize();
      assert(bugherd.load.called);
    });
  });

  describe('#loaded', function(){
    it('should test window._bugHerd', function(){
      assert(!bugherd.loaded());
      window._bugHerd = {};
      assert(bugherd.loaded());
    });
  });

  describe('#load', function(){
    beforeEach(function(){
      sinon.stub(bugherd, 'load');
      bugherd.initialize();
    });

    it('should change loaded state', function () {
      assert(!bugherd.loaded());
      window._bugHerd = {};
      assert(bugherd.loaded());
    });
  });

});
