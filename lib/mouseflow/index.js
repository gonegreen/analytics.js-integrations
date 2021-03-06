
/**
 * Module dependencies.
 */

var push = require('global-queue')('_mfq');
var integration = require('analytics.js-integration');
var load = require('load-script');
var each = require('each');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Mouseflow);
};

/**
 * Expose `Mouseflow`.
 */

var Mouseflow = exports.Integration = integration('Mouseflow')
  .assumesPageview()
  .readyOnLoad()
  .global('mouseflow')
  .global('_mfq')
  .option('apiKey', '')
  .option('mouseflowHtmlDelay', 0);

/**
 * Initalize.
 *
 * @param {Object} page
 */

Mouseflow.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Mouseflow.prototype.loaded = function(){
  return !! window.mouseflow;
};

/**
 * Load mouseflow.
 *
 * @param {Function} fn
 */

Mouseflow.prototype.load = function(fn){
  var apiKey = this.options.apiKey;
  var self = this;
  window.mouseflowHtmlDelay = this.options.mouseflowHtmlDelay;
  load('//cdn.mouseflow.com/projects/' + apiKey + '.js', fn);
};

/**
 * Page.
 *
 * http://mouseflow.zendesk.com/entries/22528817-Single-page-websites
 *
 * @param {Page} page
 */

Mouseflow.prototype.page = function(page){
  if (!window.mouseflow) return;
  if ('function' != typeof mouseflow.newPageView) return;
  mouseflow.newPageView();
};

/**
 * Identify.
 *
 * http://mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @param {Identify} identify
 */

Mouseflow.prototype.identify = function(identify){
  set(identify.traits());
};

/**
 * Track.
 *
 * http://mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @param {Track} track
 */

Mouseflow.prototype.track = function(track){
  var props = track.properties();
  props.event = track.event();
  set(props);
};

/**
 * Push each key and value in the given `obj` onto the queue.
 *
 * @param {Object} obj
 */

function set(obj){
  each(obj, function(key, value){
    push('setVariable', key, value);
  });
}
