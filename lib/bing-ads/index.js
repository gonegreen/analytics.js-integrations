
var integration = require('integration');
var onBody = require('on-body');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Bing);
};

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `Bing`
 */

var Bing = exports.Integration = integration('Bing Ads')
  .readyOnInitialize()
  .option('siteId', '')
  .option('domainId', '')
  .option('goals', {});

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
  this.convert(goal, track.revenue(), this.options);
};

/**
 * Load conversion.
 *
 * @param {Mixed} goal
 * @param {Number} revenue
 * @param {String} currency
 * @return {IFrame}
 * @api private
 */

Bing.prototype.convert = function(goal, revenue, options){
  var iframe = document.createElement('iframe');
  iframe.src = '//flex.msn.com/mstag/tag/' + options.siteId
    + '/analytics.html'
    + '?domainId=' + options.domainId
    + '&revenue=' + (revenue || 0)
    + '&actionid=' + goal;
    + '&dedup=1'
    + '&type=1';
  iframe.width = 1;
  iframe.height = 1;
  onBody(function(body){
    body.appendChild(iframe);
  });
};