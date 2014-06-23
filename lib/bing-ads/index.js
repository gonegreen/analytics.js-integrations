
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
var load = require('load-script');
var onBody = require('on-body');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Bing);
};

/**
 * HOP.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `Bing`.
 *
 * https://bingads.microsoft.com/campaign/signup
 */

var Bing = exports.Integration = integration('Bing Ads')
  .readyOnInitialize()
  .option('siteId', '')
  .option('domainId', '')
  .option('goals', {});

/**
 * Initialize.
 *
 * http://msdn.microsoft.com/en-us/library/bing-ads-campaign-management-campaign-analytics-scripts.aspx
 *
 * @param {Object} page
 */

Bing.prototype.initialize = function(page){
  if (!window.mstag) {
    window.mstag = {
      loadTag: function(){},
      time: (new Date()).getTime(),
      prefix: 'flex.msn.com', //can be anything but empty
      _write: function(s) {
        var version = s.match(/\d{6,}/);
        var url = '//flex.msn.com/mstag/mstag.' + version + '.js';
        onBody(function(){
          load(url);
        });
      }
    };
  }
  this.load();
};

/**
 * Load the Microsoft library.
 *
 * @param {Function} fn
 */

Bing.prototype.load = function(fn){
  var id = this.options.siteId;
  var url = '//flex.msn.com/mstag/site/' + id + '/mstag.js';
  load(url, fn);
};

/**
 * Track.
 *
 * @param {Track} track
 */

Bing.prototype.track = function(track){
  var goals = this.options.goals;
  var traits = track.traits();
  var event = track.event();
  if (!has.call(goals, event)) return;
  var goal = goals[event];
  var revenue = track.revenue() || 0;
  window.mstag.loadTag('analytics', {
    domainId: this.options.domainId,
    revenue: revenue,
    dedup: '1',
    type: '1',
    actionid: goal
  });
};
