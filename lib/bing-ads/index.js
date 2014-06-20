
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
var load = require('load-script');
var domify = require('domify');
var extend = require('extend');

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
  if (!window.mstag) window.mstag = {};
  extend(window.mstag, {
    loadTag: function(){},
    time: (new Date()).getTime(),
    // they use document.write,
    // which doesn't work when loaded async.
    // it needs to be document.appendChild.
    // they provide a way to override it.
    _write: writeToAppend
  });
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
  var script = load(url, fn);
  script.setAttribute('id', 'mstag_tops');
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

/**
 * Convert `document.write` to `document.appendChild`.
 *
 * TODO: make into a component.
 *
 * @param {String} str
 */

function writeToAppend(str, parent) {
  parent = parent || document.body;
  parent.appendChild(domify(str));
}
