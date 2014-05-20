
var integrations = require('./lib/slugs');
var each = require('each');

/**
 * Expose the integrations, using their own `name` from their `prototype`.
 */

// Customize
integrations = [
  "adroll",
  "adwords",
  "bing-ads",
  "errorception",
  "facebook-ads",
  "google-analytics",
  "google-tag-manager",
  "mixpanel",
  "perfect-audience",
  "twitter-ads"
]


each(integrations, function (slug) {
  var plugin = require('./lib/' + slug);
  var name = plugin.Integration.prototype.name;
  exports[name] = plugin;
});
