(function outer(modules, cache, entry) {var previousRequire = typeof require == "function" && require;function newRequire(name, jumped){if(!cache[name]) {if(!modules[name]) {var currentRequire = typeof require == "function" && require;if (!jumped && currentRequire) return currentRequire(name, true);if (previousRequire) return previousRequire(name, true);throw new Error('Cannot find module \'' + name + '\'');}var m = cache[name] = {exports:{}};modules[name][0].call(m.exports, function(x){var id = modules[name][1][x];return newRequire(id ? id : x);},m,m.exports,outer,modules,cache,entry);}return cache[name].exports;}for(var i=0;i<entry.length;i++) newRequire(entry[i]);return newRequire;})({
1: [function(require, module, exports) {


module.exports = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'en',
  'for',
  'from',
  'how',
  'if',
  'in',
  'neither',
  'nor',
  'of',
  'on',
  'only',
  'onto',
  'out',
  'or',
  'per',
  'so',
  'than',
  'that',
  'the',
  'to',
  'until',
  'up',
  'upon',
  'v',
  'v.',
  'versus',
  'vs',
  'vs.',
  'via',
  'when',
  'with',
  'without',
  'yet'
];
}, {}],

2: [function(require, module, exports) {


var each = require('each');


/**
 * Map an array or object.
 *
 * @param {Array|Object} obj
 * @param {Function} iterator
 * @return {Mixed}
 */

module.exports = function map (obj, iterator) {
  var arr = [];
  each(obj, function (o) {
    arr.push(iterator.apply(null, arguments));
  });
  return arr;
};
}, {"each":3}],

4: [function(require, module, exports) {


/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};
}, {}],

5: [function(require, module, exports) {


var capital = require('to-capital-case')
  , escape = require('escape-regexp')
  , map = require('map')
  , minors = require('title-case-minors');


/**
 * Expose `toTitleCase`.
 */

module.exports = toTitleCase;


/**
 * Minors.
 */

var escaped = map(minors, escape);
var minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig');
var colonMatcher = /:\s*(\w)/g;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toTitleCase (string) {
  return capital(string)
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase();
    })
    .replace(colonMatcher, function (letter) {
      return letter.toUpperCase();
    });
}
}, {"to-capital-case":6,"escape-regexp":4,"map":2,"title-case-minors":1}],

7: [function(require, module, exports) {


var clean = require('to-no-case');


/**
 * Expose `toSpaceCase`.
 */

module.exports = toSpaceCase;


/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */


function toSpaceCase (string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  });
}
}, {"to-no-case":8}],

9: [function(require, module, exports) {

var toSpace = require('to-space-case');


/**
 * Expose `toSnakeCase`.
 */

module.exports = toSnakeCase;


/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */


function toSnakeCase (string) {
  return toSpace(string).replace(/\s/g, '_');
}

}, {"to-space-case":7}],

10: [function(require, module, exports) {


var toSpace = require('to-space-case');


/**
 * Expose `toSlugCase`.
 */

module.exports = toSlugCase;


/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */


function toSlugCase (string) {
  return toSpace(string).replace(/\s/g, '-');
}
}, {"to-space-case":7}],

11: [function(require, module, exports) {


var clean = require('to-no-case');


/**
 * Expose `toSentenceCase`.
 */

module.exports = toSentenceCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toSentenceCase (string) {
  return clean(string).replace(/[a-z]/i, function (letter) {
    return letter.toUpperCase();
  });
}
}, {"to-no-case":8}],

12: [function(require, module, exports) {


var toSpace = require('to-space-case');


/**
 * Expose `toPascalCase`.
 */

module.exports = toPascalCase;


/**
 * Convert a `string` to pascal case.
 *
 * @param {String} string
 * @return {String}
 */


function toPascalCase (string) {
  return toSpace(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}
}, {"to-space-case":7}],

8: [function(require, module, exports) {


/**
 * Expose `toNoCase`.
 */

module.exports = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasCamel = /[a-z][A-Z]/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();

  if (hasSeparator.test(string)) string = unseparate(string);
  if (hasCamel.test(string)) string = uncamelize(string);
  return string.toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}
}, {}],

13: [function(require, module, exports) {


var toSpace = require('to-space-case');


/**
 * Expose `toDotCase`.
 */

module.exports = toDotCase;


/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */


function toDotCase (string) {
  return toSpace(string).replace(/\s/g, '.');
}
}, {"to-space-case":7}],

14: [function(require, module, exports) {


var snake = require('to-snake-case');


/**
 * Expose `toConstantCase`.
 */

module.exports = toConstantCase;


/**
 * Convert a `string` to constant case.
 *
 * @param {String} string
 * @return {String}
 */


function toConstantCase (string) {
  return snake(string).toUpperCase();
}
}, {"to-snake-case":9}],

6: [function(require, module, exports) {


var clean = require('to-no-case');


/**
 * Expose `toCapitalCase`.
 */

module.exports = toCapitalCase;


/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */


function toCapitalCase (string) {
  return clean(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
    return previous + letter.toUpperCase();
  });
}
}, {"to-no-case":8}],

15: [function(require, module, exports) {


var toSpace = require('to-space-case');


/**
 * Expose `toCamelCase`.
 */

module.exports = toCamelCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toCamelCase (string) {
  return toSpace(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}
}, {"to-space-case":7}],

16: [function(require, module, exports) {


/**
 * Matcher.
 */

var matcher = /\d{10}/;


/**
 * Check whether a string is a second date string.
 *
 * @param {String} string
 * @return {Boolean}
 */

exports.is = function (string) {
  return matcher.test(string);
};


/**
 * Convert a second string to a date.
 *
 * @param {String} seconds
 * @return {Date}
 */

exports.parse = function (seconds) {
  var millis = parseInt(seconds, 10) * 1000;
  return new Date(millis);
};
}, {}],

17: [function(require, module, exports) {


/**
 * Matcher.
 */

var matcher = /\d{13}/;


/**
 * Check whether a string is a millisecond date string.
 *
 * @param {String} string
 * @return {Boolean}
 */

exports.is = function (string) {
  return matcher.test(string);
};


/**
 * Convert a millisecond string to a date.
 *
 * @param {String} millis
 * @return {Date}
 */

exports.parse = function (millis) {
  millis = parseInt(millis, 10);
  return new Date(millis);
};
}, {}],

18: [function(require, module, exports) {


/**
 * Matcher, slightly modified from:
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 */

var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;


/**
 * Convert an ISO date string to a date. Fallback to native `Date.parse`.
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 *
 * @param {String} iso
 * @return {Date}
 */

exports.parse = function (iso) {
  var numericKeys = [1, 5, 6, 7, 8, 11, 12];
  var arr = matcher.exec(iso);
  var offset = 0;

  // fallback to native parsing
  if (!arr) return new Date(iso);

  // remove undefined values
  for (var i = 0, val; val = numericKeys[i]; i++) {
    arr[val] = parseInt(arr[val], 10) || 0;
  }

  // allow undefined days and months
  arr[2] = parseInt(arr[2], 10) || 1;
  arr[3] = parseInt(arr[3], 10) || 1;

  // month is 0-11
  arr[2]--;

  // allow abitrary sub-second precision
  if (arr[8]) arr[8] = (arr[8] + '00').substring(0, 3);

  // apply timezone if one exists
  if (arr[4] == ' ') {
    offset = new Date().getTimezoneOffset();
  } else if (arr[9] !== 'Z' && arr[10]) {
    offset = arr[11] * 60 + arr[12];
    if ('+' == arr[10]) offset = 0 - offset;
  }

  var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
  return new Date(millis);
};


/**
 * Checks whether a `string` is an ISO date string. `strict` mode requires that
 * the date string at least have a year, month and date.
 *
 * @param {String} string
 * @param {Boolean} strict
 * @return {Boolean}
 */

exports.is = function (string, strict) {
  if (strict && false === /^\d{4}-\d{2}-\d{2}/.test(string)) return false;
  return matcher.test(string);
};
}, {}],

19: [function(require, module, exports) {


var isEmpty = require('is-empty')
  , typeOf = require('type');


/**
 * Types.
 */

var types = [
  'arguments',
  'array',
  'boolean',
  'date',
  'element',
  'function',
  'null',
  'number',
  'object',
  'regexp',
  'string',
  'undefined'
];


/**
 * Expose type checkers.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


/**
 * Add alias for `function` for old browsers.
 */

exports.fn = exports['function'];


/**
 * Expose `empty` check.
 */

exports.empty = isEmpty;


/**
 * Expose `nan` check.
 */

exports.nan = function (val) {
  return exports.number(val) && val != val;
};


/**
 * Generate a type checker.
 *
 * @param {String} type
 * @return {Function}
 */

function generate (type) {
  return function (value) {
    return type === typeOf(value);
  };
}
}, {"is-empty":20,"type":21}],

22: [function(require, module, exports) {


var camel = require('to-camel-case')
  , capital = require('to-capital-case')
  , constant = require('to-constant-case')
  , dot = require('to-dot-case')
  , none = require('to-no-case')
  , pascal = require('to-pascal-case')
  , sentence = require('to-sentence-case')
  , slug = require('to-slug-case')
  , snake = require('to-snake-case')
  , space = require('to-space-case')
  , title = require('to-title-case');


/**
 * Camel.
 */

exports.camel = camel;


/**
 * Pascal.
 */

exports.pascal = pascal;


/**
 * Dot. Should precede lowercase.
 */

exports.dot = dot;


/**
 * Slug. Should precede lowercase.
 */

exports.slug = slug;


/**
 * Snake. Should precede lowercase.
 */

exports.snake = snake;


/**
 * Space. Should precede lowercase.
 */

exports.space = space;


/**
 * Constant. Should precede uppercase.
 */

exports.constant = constant;


/**
 * Capital. Should precede sentence and title.
 */

exports.capital = capital;


/**
 * Title.
 */

exports.title = title;


/**
 * Sentence.
 */

exports.sentence = sentence;


/**
 * Convert a `string` to lower case from camel, slug, etc. Different that the
 * usual `toLowerCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.lower = function (string) {
  return none(string).toLowerCase();
};


/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.upper = function (string) {
  return none(string).toUpperCase();
};


/**
 * Invert each character in a `string` from upper to lower and vice versa.
 *
 * @param {String} string
 * @return {String}
 */

exports.inverse = function (string) {
  for (var i = 0, char; char = string[i]; i++) {
    if (!/[a-z]/i.test(char)) continue;
    var upper = char.toUpperCase();
    var lower = char.toLowerCase();
    string[i] = char == upper ? lower : upper;
  }
  return string;
};


/**
 * None.
 */

exports.none = none;
}, {"to-camel-case":15,"to-capital-case":6,"to-constant-case":14,"to-dot-case":13,"to-no-case":8,"to-pascal-case":12,"to-sentence-case":11,"to-slug-case":10,"to-snake-case":9,"to-space-case":7,"to-title-case":5}],

23: [function(require, module, exports) {


exports = module.exports = trim;

function trim(str){
  if (str.trim) return str.trim();
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  if (str.trimLeft) return str.trimLeft();
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  if (str.trimRight) return str.trimRight();
  return str.replace(/\s*$/, '');
};

}, {}],

24: [function(require, module, exports) {


var is = require('is');
var isodate = require('isodate');
var milliseconds = require('./milliseconds');
var seconds = require('./seconds');


/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native Date constructor.
 *
 * @param {Date|String|Number} val
 */

module.exports = function newDate (val) {
  if (is.date(val)) return val;
  if (is.number(val)) return new Date(toMs(val));

  // date strings
  if (isodate.is(val)) return isodate.parse(val);
  if (milliseconds.is(val)) return milliseconds.parse(val);
  if (seconds.is(val)) return seconds.parse(val);

  // fallback to Date.parse
  return new Date(val);
};


/**
 * If the number passed val is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param {Number} num
 */

function toMs (num) {
  if (num < 31557600000) return num * 1000;
  return num;
}
}, {"is":19,"isodate":18,"./milliseconds":17,"./seconds":16}],

25: [function(require, module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
}, {}],

26: [function(require, module, exports) {


var is = require('is');
var isodate = require('isodate');
var each;

try {
  each = require('each');
} catch (err) {
  each = require('each-component');
}

/**
 * Expose `traverse`.
 */

module.exports = traverse;

/**
 * Traverse an object or array, and return a clone with all ISO strings parsed
 * into Date objects.
 *
 * @param {Object} obj
 * @return {Object}
 */

function traverse (input, strict) {
  if (strict === undefined) strict = true;

  if (is.object(input)) {
    return object(input, strict);
  } else if (is.array(input)) {
    return array(input, strict);
  }
}

/**
 * Object traverser.
 *
 * @param {Object} obj
 * @param {Boolean} strict
 * @return {Object}
 */

function object (obj, strict) {
  each(obj, function (key, val) {
    if (isodate.is(val, strict)) {
      obj[key] = isodate.parse(val);
    } else if (is.object(val) || is.array(val)) {
      traverse(val, strict);
    }
  });
  return obj;
}

/**
 * Array traverser.
 *
 * @param {Array} arr
 * @param {Boolean} strict
 * @return {Array}
 */

function array (arr, strict) {
  each(arr, function (val, x) {
    if (is.object(val)) {
      traverse(val, strict);
    } else if (isodate.is(val, strict)) {
      arr[x] = isodate.parse(val);
    }
  });
  return arr;
}

}, {"is":19,"isodate":18,"each":3}],

27: [function(require, module, exports) {


var Case = require('case');


var cases = [
  Case.upper,
  Case.lower,
  Case.snake,
  Case.pascal,
  Case.camel,
  Case.constant,
  Case.title,
  Case.capital,
  Case.sentence
];


/**
 * Module exports, export
 */

module.exports = module.exports.find = multiple(find);


/**
 * Export the replacement function, return the modified object
 */

module.exports.replace = function (obj, key, val) {
  multiple(replace).apply(this, arguments);
  return obj;
};


/**
 * Export the delete function, return the modified object
 */

module.exports.del = function (obj, key) {
  multiple(del).apply(this, arguments);
  return obj;
};


/**
 * Compose applying the function to a nested key
 */

function multiple (fn) {
  return function (obj, key, val) {
    var keys = key.split('.');
    if (keys.length === 0) return;

    while (keys.length > 1) {
      key = keys.shift();
      obj = find(obj, key);

      if (obj === null || obj === undefined) return;
    }

    key = keys.shift();
    return fn(obj, key, val);
  };
}


/**
 * Find an object by its key
 *
 * find({ first_name : 'Calvin' }, 'firstName')
 */

function find (obj, key) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) return obj[cased];
  }
}


/**
 * Delete a value for a given key
 *
 * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
 */

function del (obj, key) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) delete obj[cased];
  }
  return obj;
}


/**
 * Replace an objects existing value with a new one
 *
 * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
 */

function replace (obj, key, val) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) obj[cased] = val;
  }
  return obj;
}

}, {"case":28}],

29: [function(require, module, exports) {


/**
 * A few integrations are disabled by default. They must be explicitly
 * enabled by setting options[Provider] = true.
 */

var disabled = {
  Salesforce: true,
  Marketo: true
};

/**
 * Check whether an integration should be enabled by default.
 *
 * @param {String} integration
 * @return {Boolean}
 */

module.exports = function (integration) {
  return ! disabled[integration];
};
}, {}],

30: [function(require, module, exports) {


/**
 * Expose `events`
 */

module.exports = {
  removedProduct: /removed product/i,
  viewedProduct: /viewed product/i,
  addedProduct: /added product/i,
  completedOrder: /completed order/i
};

}, {}],

31: [function(require, module, exports) {


module.exports = function after (times, func) {
  // After 0, really?
  if (times <= 0) return func();

  // That's more like it.
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
};
}, {}],

32: [function(require, module, exports) {


/**
 * Expose `toNoCase`.
 */

module.exports = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string)) return unseparate(string).toLowerCase();
  return uncamelize(string).toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}
}, {}],

33: [function(require, module, exports) {


/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

}, {}],

34: [function(require, module, exports) {

/**
 * Module dependencies.
 */

var tty = require('tty');

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Enabled debuggers.
 */

var names = []
  , skips = [];

(process.env.DEBUG || '')
  .split(/[\s,]+/)
  .forEach(function(name){
    name = name.replace('*', '.*?');
    if (name[0] === '-') {
      skips.push(new RegExp('^' + name.substr(1) + '$'));
    } else {
      names.push(new RegExp('^' + name + '$'));
    }
  });

/**
 * Colors.
 */

var colors = [6, 2, 3, 4, 5, 1];

/**
 * Previous debug() call.
 */

var prev = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Is stdout a TTY? Colored output is disabled when `true`.
 */

var isatty = tty.isatty(2);

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function color() {
  return colors[prevColor++ % colors.length];
}

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

function humanize(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
}

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  function disabled(){}
  disabled.enabled = false;

  var match = skips.some(function(re){
    return re.test(name);
  });

  if (match) return disabled;

  match = names.some(function(re){
    return re.test(name);
  });

  if (!match) return disabled;
  var c = color();

  function colored(fmt) {
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (prev[name] || curr);
    prev[name] = curr;

    fmt = '  \u001b[9' + c + 'm' + name + ' '
      + '\u001b[3' + c + 'm\u001b[90m'
      + fmt + '\u001b[3' + c + 'm'
      + ' +' + humanize(ms) + '\u001b[0m';

    console.error.apply(this, arguments);
  }

  function plain(fmt) {
    fmt = coerce(fmt);

    fmt = new Date().toUTCString()
      + ' ' + name + ' ' + fmt;
    console.error.apply(this, arguments);
  }

  colored.enabled = plain.enabled = true;

  return isatty || process.env.DEBUG_COLORS
    ? colored
    : plain;
}

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

}, {}],

35: [function(require, module, exports) {


try {
  var bind = require('bind');
  var type = require('type');
} catch (e) {
  var bind = require('bind-component');
  var type = require('type-component');
}

module.exports = function (obj) {
  for (var key in obj) {
    var val = obj[key];
    if (type(val) === 'function') obj[key] = bind(obj, obj[key]);
  }
  return obj;
};
}, {"bind":36,"type":21}],

36: [function(require, module, exports) {


/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = [].slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

}, {}],

28: [function(require, module, exports) {


var cases = require('./cases');


/**
 * Expose `determineCase`.
 */

module.exports = exports = determineCase;


/**
 * Determine the case of a `string`.
 *
 * @param {String} string
 * @return {String|Null}
 */

function determineCase (string) {
  for (var key in cases) {
    if (key == 'none') continue;
    var convert = cases[key];
    if (convert(string) == string) return key;
  }
  return null;
}


/**
 * Define a case by `name` with a `convert` function.
 *
 * @param {String} name
 * @param {Object} convert
 */

exports.add = function (name, convert) {
  exports[name] = cases[name] = convert;
};


/**
 * Add all the `cases`.
 */

for (var key in cases) {
  exports.add(key, cases[key]);
}
}, {"./cases":22}],

37: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var index = require('indexof');

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  fn._off = on;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var i = index(callbacks, fn._off || fn);
  if (~i) callbacks.splice(i, 1);
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

}, {"indexof":38}],

39: [function(require, module, exports) {


/**
 * Expose `substitute`
 */

module.exports = substitute;

/**
 * Substitute `:prop` with the given `obj` in `str`
 *
 * @param {String} str
 * @param {Object} obj
 * @param {RegExp} expr
 * @return {String}
 * @api public
 */

function substitute(str, obj, expr){
  if (!obj) throw new TypeError('expected an object');
  expr = expr || /:(\w+)/g;
  return str.replace(expr, function(_, prop){
    return null != obj[prop]
      ? obj[prop]
      : _;
  });
}

}, {}],

40: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var encode = encodeURIComponent;
var decode = decodeURIComponent;
var trim = require('trim');
var type = require('type');

/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if ('string' != typeof str) return {};

  str = trim(str);
  if ('' == str) return {};
  if ('?' == str.charAt(0)) str = str.slice(1);

  var obj = {};
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    var key = decode(parts[0]);
    var m;

    if (m = /(\w+)\[(\d+)\]/.exec(key)) {
      obj[m[1]] = obj[m[1]] || [];
      obj[m[1]][m[2]] = decode(parts[1]);
      continue;
    }

    obj[parts[0]] = null == parts[1]
      ? ''
      : decode(parts[1]);
  }

  return obj;
};

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

exports.stringify = function(obj){
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if ('array' == type(value)) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
      }
      continue;
    }

    pairs.push(encode(key) + '=' + encode(obj[key]));
  }

  return pairs.join('&');
};

}, {"trim":23,"type":21}],

41: [function(require, module, exports) {


var inherit = require('inherit');
var Page = require('./page');
var Track = require('./track');

/**
 * Expose `Screen` facade
 */

module.exports = Screen;

/**
 * Initialize new `Screen` facade with `dictionary`.
 *
 * @param {Object} dictionary
 *   @param {String} category
 *   @param {String} name
 *   @param {Object} traits
 *   @param {Object} options
 */

function Screen(dictionary){
  Page.call(this, dictionary);
}

/**
 * Inherit from `Page`
 */

inherit(Screen, Page);

/**
 * Get the facade's action.
 *
 * @return {String}
 * @api public
 */

Screen.prototype.type =
Screen.prototype.action = function(){
  return 'screen';
};

/**
 * Get event with `name`.
 *
 * @param {String} name
 * @return {String}
 * @api public
 */

Screen.prototype.event = function(name){
  return name
    ? 'Viewed ' + name + ' Screen'
    : 'Loaded a Screen';
};

/**
 * Convert this Screen.
 *
 * @param {String} name
 * @return {Track}
 * @api public
 */

Screen.prototype.track = function(name){
  var props = this.properties();
  return new Track({
    event: this.event(name),
    properties: props
  });
};

}, {"inherit":25,"./page":42,"./track":43}],

42: [function(require, module, exports) {


var Facade = require('./facade');
var inherit = require('inherit');
var Track = require('./track');

/**
 * Expose `Page` facade
 */

module.exports = Page;

/**
 * Initialize new `Page` facade with `dictionary`.
 *
 * @param {Object} dictionary
 *   @param {String} category
 *   @param {String} name
 *   @param {Object} traits
 *   @param {Object} options
 */

function Page(dictionary){
  Facade.call(this, dictionary);
}

/**
 * Inherit from `Facade`
 */

inherit(Page, Facade);

/**
 * Get the facade's action.
 *
 * @return {String}
 */

Page.prototype.type =
Page.prototype.action = function(){
  return 'page';
};

/**
 * Proxies
 */

Page.prototype.category = Facade.field('category');
Page.prototype.name = Facade.field('name');

/**
 * Get the page properties mixing `category` and `name`.
 *
 * @return {Object}
 */

Page.prototype.properties = function(){
  var props = this.field('properties') || {};
  var category = this.category();
  var name = this.name();
  if (category) props.category = category;
  if (name) props.name = name;
  return props;
};

/**
 * Get the page fullName.
 *
 * @return {String}
 */

Page.prototype.fullName = function(){
  var category = this.category();
  var name = this.name();
  return name && category
    ? category + ' ' + name
    : name;
};

/**
 * Get event with `name`.
 *
 * @return {String}
 */

Page.prototype.event = function(name){
  return name
    ? 'Viewed ' + name + ' Page'
    : 'Loaded a Page';
};

/**
 * Convert this Page to a Track facade with `name`.
 *
 * @param {String} name
 * @return {Track}
 */

Page.prototype.track = function(name){
  var props = this.properties();
  return new Track({
    event: this.event(name),
    properties: props
  });
};

}, {"./facade":44,"inherit":25,"./track":43}],

43: [function(require, module, exports) {


var clone = require('clone');
var Facade = require('./facade');
var Identify = require('./identify');
var inherit = require('inherit');
var isEmail = require('is-email');

/**
 * Expose `Track` facade.
 */

module.exports = Track;

/**
 * Initialize a new `Track` facade with a `dictionary` of arguments.
 *
 * @param {object} dictionary
 *   @property {String} event
 *   @property {String} userId
 *   @property {String} sessionId
 *   @property {Object} properties
 *   @property {Object} options
 */

function Track (dictionary) {
  Facade.call(this, dictionary);
}

/**
 * Inherit from `Facade`.
 */

inherit(Track, Facade);

/**
 * Return the facade's action.
 *
 * @return {String}
 */

Track.prototype.type =
Track.prototype.action = function () {
  return 'track';
};

/**
 * Setup some basic proxies.
 */

Track.prototype.event = Facade.field('event');
Track.prototype.value = Facade.proxy('properties.value');

/**
 * Misc
 */

Track.prototype.category = Facade.proxy('properties.category');
Track.prototype.country = Facade.proxy('properties.country');
Track.prototype.state = Facade.proxy('properties.state');
Track.prototype.city = Facade.proxy('properties.city');
Track.prototype.zip = Facade.proxy('properties.zip');

/**
 * Ecommerce
 */

Track.prototype.id = Facade.proxy('properties.id');
Track.prototype.sku = Facade.proxy('properties.sku');
Track.prototype.tax = Facade.proxy('properties.tax');
Track.prototype.name = Facade.proxy('properties.name');
Track.prototype.price = Facade.proxy('properties.price');
Track.prototype.total = Facade.proxy('properties.total');
Track.prototype.coupon = Facade.proxy('properties.coupon');
Track.prototype.shipping = Facade.proxy('properties.shipping');

/**
 * Order id.
 *
 * @return {String}
 * @api public
 */

Track.prototype.orderId = function(){
  return this.proxy('properties.id')
    || this.proxy('properties.orderId');
};

/**
 * Get subtotal.
 *
 * @return {Number}
 */

Track.prototype.subtotal = function(){
  var subtotal = this.obj.properties.subtotal;
  var total = this.total();
  var n;

  if (subtotal) return subtotal;
  if (!total) return 0;
  if (n = this.tax()) total -= n;
  if (n = this.shipping()) total -= n;

  return total;
};

/**
 * Get products.
 *
 * @return {Array}
 */

Track.prototype.products = function(){
  var props = this.obj.properties || {};
  return props.products || [];
};

/**
 * Get quantity.
 *
 * @return {Number}
 */

Track.prototype.quantity = function(){
  var props = this.obj.properties || {};
  return props.quantity || 1;
};

/**
 * Get currency.
 *
 * @return {String}
 */

Track.prototype.currency = function(){
  var props = this.obj.properties || {};
  return props.currency || 'USD';
};

/**
 * BACKWARDS COMPATIBILITY: should probably re-examine where these come from.
 */

Track.prototype.referrer = Facade.proxy('properties.referrer');
Track.prototype.query = Facade.proxy('options.query');

/**
 * Get the call's properties.
 *
 * @param {Object} aliases
 * @return {Object}
 */

Track.prototype.properties = function (aliases) {
  var ret = this.field('properties') || {};
  aliases = aliases || {};

  for (var alias in aliases) {
    var value = null == this[alias]
      ? this.proxy('properties.' + alias)
      : this[alias]();
    if (null == value) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Get the call's "super properties" which are just traits that have been
 * passed in as if from an identify call.
 *
 * @return {Object}
 */

Track.prototype.traits = function () {
  return this.proxy('options.traits') || {};
};

/**
 * Get the call's username.
 *
 * @return {String or Undefined}
 */

Track.prototype.username = function () {
  return this.proxy('traits.username') ||
         this.proxy('properties.username') ||
         this.userId() ||
         this.sessionId();
};

/**
 * Get the call's email, using an the user ID if it's a valid email.
 *
 * @return {String or Undefined}
 */

Track.prototype.email = function () {
  var email = this.proxy('traits.email');
  email = email || this.proxy('properties.email');
  if (email) return email;

  var userId = this.userId();
  if (isEmail(userId)) return userId;
};

/**
 * Get the call's revenue, parsing it from a string with an optional leading
 * dollar sign.
 *
 * @return {String or Undefined}
 */

Track.prototype.revenue = function () {
  var revenue = this.proxy('properties.revenue');

  if (!revenue) return;
  if (typeof revenue === 'number') return revenue;
  if (typeof revenue !== 'string') return;

  revenue = revenue.replace(/\$/g, '');
  revenue = parseFloat(revenue);

  if (!isNaN(revenue)) return revenue;
};

/**
 * Get cents.
 *
 * @return {Number}
 */

Track.prototype.cents = function(){
  var revenue = this.revenue();
  return 'number' != typeof revenue
    ? this.value() || 0
    : revenue * 100;
};

/**
 * A utility to turn the pieces of a track call into an identify. Used for
 * integrations with super properties or rate limits.
 *
 * TODO: remove me.
 *
 * @return {Facade}
 */

Track.prototype.identify = function () {
  var json = this.json();
  json.traits = this.traits();
  return new Identify(json);
};

}, {"clone":45,"./facade":44,"./identify":46,"inherit":25,"is-email":47}],

46: [function(require, module, exports) {


var clone = require('clone');
var Facade = require('./facade');
var inherit = require('inherit');
var isEmail = require('is-email');
var newDate = require('new-date');
var trim = require('trim');

/**
 * Expose `Idenfity` facade.
 */

module.exports = Identify;

/**
 * Initialize a new `Identify` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @param {String} userId
 *   @param {String} sessionId
 *   @param {Object} traits
 *   @param {Object} options
 */

function Identify (dictionary) {
  Facade.call(this, dictionary);
}

/**
 * Inherit from `Facade`.
 */

inherit(Identify, Facade);

/**
 * Get the facade's action.
 */

Identify.prototype.type =
Identify.prototype.action = function () {
  return 'identify';
};

/**
 * Get the user's traits.
 *
 * @param {Object} aliases
 * @return {Object}
 */

Identify.prototype.traits = function (aliases) {
  var ret = this.field('traits') || {};
  var id = this.userId();
  aliases = aliases || {};

  if (id) ret.id = id;

  for (var alias in aliases) {
    var value = null == this[alias]
      ? this.proxy('traits.' + alias)
      : this[alias]();
    if (null == value) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Get the user's email, falling back to their user ID if it's a valid email.
 *
 * @return {String}
 */

Identify.prototype.email = function () {
  var email = this.proxy('traits.email');
  if (email) return email;

  var userId = this.userId();
  if (isEmail(userId)) return userId;
};

/**
 * Get the user's created date, optionally looking for `createdAt` since lots of
 * people do that instead.
 *
 * @return {Date or Undefined}
 */

Identify.prototype.created = function () {
  var created = this.proxy('traits.created') || this.proxy('traits.createdAt');
  if (created) return newDate(created);
};

/**
 * Get the company created date.
 *
 * @return {Date or undefined}
 */

Identify.prototype.companyCreated = function(){
  var created = this.proxy('traits.company.created')
    || this.proxy('traits.company.createdAt');

  if (created) return newDate(created);
};

/**
 * Get the user's name, optionally combining a first and last name if that's all
 * that was provided.
 *
 * @return {String or Undefined}
 */

Identify.prototype.name = function () {
  var name = this.proxy('traits.name');
  if (typeof name === 'string') return trim(name);

  var firstName = this.firstName();
  var lastName = this.lastName();
  if (firstName && lastName) return trim(firstName + ' ' + lastName);
};

/**
 * Get the user's first name, optionally splitting it out of a single name if
 * that's all that was provided.
 *
 * @return {String or Undefined}
 */

Identify.prototype.firstName = function () {
  var firstName = this.proxy('traits.firstName');
  if (typeof firstName === 'string') return trim(firstName);

  var name = this.proxy('traits.name');
  if (typeof name === 'string') return trim(name).split(' ')[0];
};

/**
 * Get the user's last name, optionally splitting it out of a single name if
 * that's all that was provided.
 *
 * @return {String or Undefined}
 */

Identify.prototype.lastName = function () {
  var lastName = this.proxy('traits.lastName');
  if (typeof lastName === 'string') return trim(lastName);

  var name = this.proxy('traits.name');
  if (typeof name !== 'string') return;

  var space = trim(name).indexOf(' ');
  if (space === -1) return;

  return trim(name.substr(space + 1));
};

/**
 * Get the user's unique id.
 *
 * @return {String or undefined}
 */

Identify.prototype.uid = function(){
  return this.userId()
    || this.username()
    || this.email();
};

/**
 * Get description.
 *
 * @return {String}
 */

Identify.prototype.description = function(){
  return this.proxy('traits.description')
    || this.proxy('traits.background');
};

/**
 * Setup sme basic "special" trait proxies.
 */

Identify.prototype.username = Facade.proxy('traits.username');
Identify.prototype.website = Facade.proxy('traits.website');
Identify.prototype.phone = Facade.proxy('traits.phone');
Identify.prototype.address = Facade.proxy('traits.address');
Identify.prototype.avatar = Facade.proxy('traits.avatar');

}, {"clone":45,"./facade":44,"inherit":25,"is-email":47,"new-date":24,"trim":23}],

48: [function(require, module, exports) {


var Facade = require('./facade');
var inherit = require('inherit');
var newDate = require('new-date');

/**
 * Expose `Group` facade.
 */

module.exports = Group;

/**
 * Initialize a new `Group` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @param {String} userId
 *   @param {String} groupId
 *   @param {Object} properties
 *   @param {Object} options
 */

function Group (dictionary) {
  Facade.call(this, dictionary);
}

/**
 * Inherit from `Facade`
 */

inherit(Group, Facade);

/**
 * Get the facade's action.
 */

Group.prototype.type =
Group.prototype.action = function () {
  return 'group';
};

/**
 * Setup some basic proxies.
 */

Group.prototype.groupId = Facade.field('groupId');

/**
 * Get created or createdAt.
 *
 * @return {Date}
 */

Group.prototype.created = function(){
  var created = this.proxy('traits.createdAt')
    || this.proxy('traits.created')
    || this.proxy('properties.createdAt')
    || this.proxy('properties.created');

  if (created) return newDate(created);
};

/**
 * Get the group's traits.
 *
 * @param {Object} aliases
 * @return {Object}
 */

Group.prototype.traits = function (aliases) {
  var ret = this.properties();
  var id = this.groupId();
  aliases = aliases || {};

  if (id) ret.id = id;

  for (var alias in aliases) {
    var value = null == this[alias]
      ? this.proxy('traits.' + alias)
      : this[alias]();
    if (null == value) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Get traits or properties.
 *
 * TODO: remove me
 *
 * @return {Object}
 */

Group.prototype.properties = function(){
  return this.field('traits')
    || this.field('properties')
    || {};
};

}, {"./facade":44,"inherit":25,"new-date":24}],

49: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var Facade = require('./facade');
var inherit = require('inherit');

/**
 * Expose `Alias` facade.
 */

module.exports = Alias;

/**
 * Initialize a new `Alias` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @property {String} from
 *   @property {String} to
 *   @property {Object} options
 */

function Alias (dictionary) {
  Facade.call(this, dictionary);
}

/**
 * Inherit from `Facade`.
 */

inherit(Alias, Facade);

/**
 * Return type of facade.
 *
 * @return {String}
 */

Alias.prototype.type =
Alias.prototype.action = function () {
  return 'alias';
};

/**
 * Get `previousId`.
 *
 * @return {Mixed}
 * @api public
 */

Alias.prototype.from =
Alias.prototype.previousId = function(){
  return this.field('previousId')
    || this.field('from');
};

/**
 * Get `userId`.
 *
 * @return {String}
 * @api public
 */

Alias.prototype.to =
Alias.prototype.userId = function(){
  return this.field('userId')
    || this.field('to');
};

}, {"./facade":44,"inherit":25}],

44: [function(require, module, exports) {


var clone = require('clone');
var isEnabled = require('./is-enabled');
var objCase = require('obj-case');
var traverse = require('isodate-traverse');

/**
 * Expose `Facade`.
 */

module.exports = Facade;

/**
 * Initialize a new `Facade` with an `obj` of arguments.
 *
 * @param {Object} obj
 */

function Facade (obj) {
  if (!obj.hasOwnProperty('timestamp')) obj.timestamp = new Date();
  else obj.timestamp = new Date(obj.timestamp);
  this.obj = obj;
}

/**
 * Return a proxy function for a `field` that will attempt to first use methods,
 * and fallback to accessing the underlying object directly. You can specify
 * deeply nested fields too like:
 *
 *   this.proxy('options.Librato');
 *
 * @param {String} field
 */

Facade.prototype.proxy = function (field) {
  var fields = field.split('.');
  field = fields.shift();

  // Call a function at the beginning to take advantage of facaded fields
  var obj = this[field] || this.field(field);
  if (!obj) return obj;
  if (typeof obj === 'function') obj = obj.call(this) || {};
  if (fields.length === 0) return transform(obj);

  obj = objCase(obj, fields.join('.'));
  return transform(obj);
};

/**
 * Directly access a specific `field` from the underlying object, returning a
 * clone so outsiders don't mess with stuff.
 *
 * @param {String} field
 * @return {Mixed}
 */

Facade.prototype.field = function (field) {
  var obj = this.obj[field];
  return transform(obj);
};

/**
 * Utility method to always proxy a particular `field`. You can specify deeply
 * nested fields too like:
 *
 *   Facade.proxy('options.Librato');
 *
 * @param {String} field
 * @return {Function}
 */

Facade.proxy = function (field) {
  return function () {
    return this.proxy(field);
  };
};

/**
 * Utility method to directly access a `field`.
 *
 * @param {String} field
 * @return {Function}
 */

Facade.field = function (field) {
  return function () {
    return this.field(field);
  };
};

/**
 * Get the basic json object of this facade.
 *
 * @return {Object}
 */

Facade.prototype.json = function () {
  return clone(this.obj);
};

/**
 * Get the options of a call (formerly called "context"). If you pass an
 * integration name, it will get the options for that specific integration, or
 * undefined if the integration is not enabled.
 *
 * @param {String} integration (optional)
 * @return {Object or Null}
 */

Facade.prototype.options = function (integration) {
  var options = clone(this.obj.options || this.obj.context) || {};
  if (!integration) return clone(options);
  if (!this.enabled(integration)) return;
  var integrations = this.integrations();
  var value = integrations[integration] || objCase(integrations, integration);
  if ('boolean' == typeof value) value = {};
  return value || {};
};

/**
 * Check whether an integration is enabled.
 *
 * @param {String} integration
 * @return {Boolean}
 */

Facade.prototype.enabled = function (integration) {
  var allEnabled = this.proxy('options.providers.all');
  if (typeof allEnabled !== 'boolean') allEnabled = this.proxy('options.all');
  if (typeof allEnabled !== 'boolean') allEnabled = true;

  var enabled = allEnabled && isEnabled(integration);
  var options = this.options();

  // If the integration is explicitly enabled or disabled, use that
  // First, check options.providers for backwards compatibility
  if (options.providers && options.providers.hasOwnProperty(integration)) {
    enabled = options.providers[integration];
  }

  // Next, check for the integration's existence in 'options' to enable it.
  // If the settings are a boolean, use that, otherwise it should be enabled.
  if (options.hasOwnProperty(integration)) {
    var settings = options[integration];
    if (typeof settings === 'boolean') {
      enabled = settings;
    } else {
      enabled = true;
    }
  }

  return enabled ? true : false;
};

/**
 * Get all `integration` options.
 *
 * @param {String} integration
 * @return {Object}
 * @api private
 */

Facade.prototype.integrations = function(){
  return this.obj.integrations
    || this.proxy('options.providers')
    || this.options();
};

/**
 * Check whether the user is active.
 *
 * @return {Boolean}
 */

Facade.prototype.active = function () {
  var active = this.proxy('options.active');
  if (active === null || active === undefined) active = true;
  return active;
};

/**
 * Get `sessionId / anonymousId`.
 *
 * @return {Mixed}
 * @api public
 */

Facade.prototype.sessionId =
Facade.prototype.anonymousId = function(){
  return this.field('anonymousId')
    || this.field('sessionId');
};

/**
 * Setup some basic proxies.
 */

Facade.prototype.userId = Facade.field('userId');
Facade.prototype.channel = Facade.field('channel');
Facade.prototype.timestamp = Facade.field('timestamp');
Facade.prototype.userAgent = Facade.proxy('options.userAgent');
Facade.prototype.ip = Facade.proxy('options.ip');

/**
 * Return the cloned and traversed object
 *
 * @param {Mixed} obj
 * @return {Mixed}
 */

function transform(obj){
  var cloned = clone(obj);
  traverse(cloned);
  return cloned;
}

}, {"clone":45,"./is-enabled":29,"obj-case":27,"isodate-traverse":26}],

50: [function(require, module, exports) {


var after = require('after');
var Emitter = require('emitter');


/**
 * Mixin emitter.
 */

Emitter(exports);


/**
 * Add a new option to the integration by `key` with default `value`.
 *
 * @param {String} key
 * @param {Mixed} value
 * @return {Integration}
 */

exports.option = function (key, value) {
  this.prototype.defaults[key] = value;
  return this;
};


/**
 * Register a new global variable `key` owned by the integration, which will be
 * used to test whether the integration is already on the page.
 *
 * @param {String} global
 * @return {Integration}
 */

exports.global = function (key) {
  this.prototype.globals.push(key);
  return this;
};


/**
 * Mark the integration as assuming an initial pageview, so to defer loading
 * the script until the first `page` call, noop the first `initialize`.
 *
 * @return {Integration}
 */

exports.assumesPageview = function () {
  this.prototype._assumesPageview = true;
  return this;
};


/**
 * Mark the integration as being "ready" once `load` is called.
 *
 * @return {Integration}
 */

exports.readyOnLoad = function () {
  this.prototype._readyOnLoad = true;
  return this;
};


/**
 * Mark the integration as being "ready" once `load` is called.
 *
 * @return {Integration}
 */

exports.readyOnInitialize = function () {
  this.prototype._readyOnInitialize = true;
  return this;
};
}, {"after":31,"emitter":37}],

51: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var normalize = require('to-no-case');
var after = require('after');
var callback = require('callback');
var Emitter = require('emitter');
var tick = require('next-tick');
var events = require('./events');
var type = require('type');


/**
 * Mixin emitter.
 */

Emitter(exports);

/**
 * Initialize.
 */

exports.initialize = function () {
  this.load();
};


/**
 * Loaded?
 *
 * @return {Boolean}
 * @api private
 */

exports.loaded = function () {
  return false;
};


/**
 * Load.
 *
 * @param {Function} cb
 */

exports.load = function (cb) {
  callback.async(cb);
};


/**
 * Page.
 *
 * @param {Page} page
 */

exports.page = function(page){};

/**
 * Track.
 *
 * @param {Track} track
 */

exports.track = function(track){};

/**
 * Get events that match `str`.
 * 
 * Examples:
 * 
 *    { my_event: 'a4991b88' }
 *    .track('My Event');
 *    // => ["a4991b88"]
 *    .track('whatever');
 *    // => []
 * 
 *    [{ key: 'my event', value: '9b5eb1fa' }]
 *    .track('my_event');
 *    // => ["9b5eb1fa"]
 *    .track('whatever');
 *    // => []
 * 
 * @param {String} str
 * @return {Array}
 * @api public
 */

exports.events = function(str){
  var events = this.options.events;
  var a = normalize(str);
  var ret = [];

  // no events
  if (!events) return ret;

  // object
  if ('object' == type(events)) {
    for (var k in events) {
      var item = events[k];
      var b = normalize(k);
      if (b == a) ret.push(item);
    }
  }

  // array
  if ('array' == type(events)) {
    if (!events.length) return ret;
    if (!events[0].key) return ret;

    for (var i = 0; i < events.length; ++i) {
      var item = events[i];
      var b = normalize(item.key);
      if (b == a) ret.push(item.value);
    }
  }

  return ret;
};

/**
 * Invoke a `method` that may or may not exist on the prototype with `args`,
 * queueing or not depending on whether the integration is "ready". Don't
 * trust the method call, since it contains integration party code.
 *
 * @param {String} method
 * @param {Mixed} args...
 * @api private
 */

exports.invoke = function (method) {
  if (!this[method]) return;
  var args = [].slice.call(arguments, 1);
  if (!this._ready) return this.queue(method, args);
  var ret;

  try {
    this.debug('%s with %o', method, args);
    ret = this[method].apply(this, args);
  } catch (e) {
    this.debug('error %o calling %s with %o', e, method, args);
  }

  return ret;
};


/**
 * Queue a `method` with `args`. If the integration assumes an initial
 * pageview, then let the first call to `page` pass through.
 *
 * @param {String} method
 * @param {Array} args
 * @api private
 */

exports.queue = function (method, args) {
  if ('page' == method && this._assumesPageview && !this._initialized) {
    return this.page.apply(this, args);
  }

  this._queue.push({ method: method, args: args });
};


/**
 * Flush the internal queue.
 *
 * @api private
 */

exports.flush = function () {
  this._ready = true;
  var call;
  while (call = this._queue.shift()) this[call.method].apply(this, call.args);
};


/**
 * Reset the integration, removing its global variables.
 *
 * @api private
 */

exports.reset = function () {
  for (var i = 0, key; key = this.globals[i]; i++) window[key] = undefined;
};


/**
 * Wrap the initialize method in an exists check, so we don't have to do it for
 * every single integration.
 *
 * @api private
 */

exports._wrapInitialize = function () {
  var initialize = this.initialize;
  this.initialize = function () {
    this.debug('initialize');
    this._initialized = true;
    var ret = initialize.apply(this, arguments);
    this.emit('initialize');

    var self = this;
    if (this._readyOnInitialize) {
      tick(function () {
        self.emit('ready');
      });
    }
    
    return ret;
  };

  if (this._assumesPageview) this.initialize = after(2, this.initialize);
};


/**
 * Wrap the load method in `debug` calls, so every integration gets them
 * automatically.
 *
 * @api private
 */

exports._wrapLoad = function () {
  var load = this.load;
  this.load = function (callback) {
    var self = this;
    this.debug('loading');

    if (this.loaded()) {
      this.debug('already loaded');
      tick(function () {
        if (self._readyOnLoad) self.emit('ready');
        callback && callback();
      });
      return;
    }

    return load.call(this, function (err, e) {
      self.debug('loaded');
      self.emit('load');
      if (self._readyOnLoad) self.emit('ready');
      callback && callback(err, e);
    });
  };
};


/**
 * Wrap the page method to call `initialize` instead if the integration assumes
 * a pageview.
 *
 * @api private
 */

exports._wrapPage = function () {
  var page = this.page;
  this.page = function () {
    if (this._assumesPageview && !this._initialized) {
      return this.initialize.apply(this, arguments);
    }
    
    return page.apply(this, arguments);
  };
};

/**
 * Wrap the track method to call other ecommerce methods if
 * available depending on the `track.event()`.
 *
 * @api private
 */

exports._wrapTrack = function(){
  var t = this.track;
  this.track = function(track){
    var event = track.event();
    var called;
    var ret;

    for (var method in events) {
      var regexp = events[method];
      if (!this[method]) continue;
      if (!regexp.test(event)) continue;
      ret = this[method].apply(this, arguments);
      called = true;
      break;
    }

    if (!called) ret = t.apply(this, arguments);
    return ret;
  };
};

}, {"to-no-case":32,"after":31,"callback":52,"emitter":37,"next-tick":53,"./events":30,"type":21}],

54: [function(require, module, exports) {

'use strict';

/**
 * Merge default values.
 *
 * @param {Object} dest
 * @param {Object} defaults
 * @return {Object}
 * @api public
 */
var defaults = function (dest, src, recursive) {
  for (var prop in src) {
    if (recursive && dest[prop] instanceof Object && src[prop] instanceof Object) {
      dest[prop] = defaults(dest[prop], src[prop], true);
    } else if (! (prop in dest)) {
      dest[prop] = src[prop];
    }
  }

  return dest;
};

/**
 * Expose `defaults`.
 */
module.exports = defaults;

}, {}],

55: [function(require, module, exports) {

if ('undefined' == typeof window) {
  module.exports = require('./lib/debug');
} else {
  module.exports = require('./debug');
}

}, {"./lib/debug":34,"./debug":33}],

56: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var type;

try {
  type = require('type');
} catch(e){
  type = require('type-component');
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj){
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}

}, {"type":21}],

57: [function(require, module, exports) {


var bind = require('bind')
  , bindAll = require('bind-all');


/**
 * Expose `bind`.
 */

module.exports = exports = bind;


/**
 * Expose `bindAll`.
 */

exports.all = bindAll;


/**
 * Expose `bindMethods`.
 */

exports.methods = bindMethods;


/**
 * Bind `methods` on `obj` to always be called with the `obj` as context.
 *
 * @param {Object} obj
 * @param {String} methods...
 */

function bindMethods (obj, methods) {
  methods = [].slice.call(arguments, 1);
  for (var i = 0, method; method = methods[i]; i++) {
    obj[method] = bind(obj, obj[method]);
  }
  return obj;
}
}, {"bind":36,"bind-all":35}],

58: [function(require, module, exports) {


/**
 * Expose `toUnixTimestamp`.
 */

module.exports = toUnixTimestamp;


/**
 * Convert a `date` into a Unix timestamp.
 *
 * @param {Date}
 * @return {Number}
 */

function toUnixTimestamp (date) {
  return Math.floor(date.getTime() / 1000);
}
}, {}],

59: [function(require, module, exports) {


/**
 * Generate a slug from the given `str`.
 *
 * example:
 *
 *        generate('foo bar');
 *        // > foo-bar
 *
 * @param {String} str
 * @param {Object} options
 * @config {String|RegExp} [replace] characters to replace, defaulted to `/[^a-z0-9]/g`
 * @config {String} [separator] separator to insert, defaulted to `-`
 * @return {String}
 */

module.exports = function (str, options) {
  options || (options = {});
  return str.toLowerCase()
    .replace(options.replace || /[^a-z0-9]/g, ' ')
    .replace(/^ +| +$/g, '')
    .replace(/ +/g, options.separator || '-')
};

}, {}],

53: [function(require, module, exports) {

"use strict"

if (typeof setImmediate == 'function') {
  module.exports = function(f){ setImmediate(f) }
}
// legacy node.js
else if (typeof process != 'undefined' && typeof process.nextTick == 'function') {
  module.exports = process.nextTick
}
// fallback for other environments / postMessage behaves badly on IE8
else if (typeof window == 'undefined' || window.ActiveXObject || !window.postMessage) {
  module.exports = function(f){ setTimeout(f) };
} else {
  var q = [];

  window.addEventListener('message', function(){
    var i = 0;
    while (i < q.length) {
      try { q[i++](); }
      catch (e) {
        q = q.slice(i);
        window.postMessage('tic!', '*');
        throw e;
      }
    }
    q.length = 0;
  }, true);

  module.exports = function(fn){
    if (!q.length) window.postMessage('tic!', '*');
    q.push(fn);
  }
}

}, {}],

60: [function(require, module, exports) {


try {
  var bind = require('bind');
} catch (e) {
  var bind = require('bind-component');
}

var bindAll = require('bind-all');


/**
 * Expose `bind`.
 */

module.exports = exports = bind;


/**
 * Expose `bindAll`.
 */

exports.all = bindAll;


/**
 * Expose `bindMethods`.
 */

exports.methods = bindMethods;


/**
 * Bind `methods` on `obj` to always be called with the `obj` as context.
 *
 * @param {Object} obj
 * @param {String} methods...
 */

function bindMethods (obj, methods) {
  methods = [].slice.call(arguments, 1);
  for (var i = 0, method; method = methods[i]; i++) {
    obj[method] = bind(obj, obj[method]);
  }
  return obj;
}
}, {"bind":36,"bind-all":35}],

61: [function(require, module, exports) {


var Case = require('case');


var cases = [
  Case.upper,
  Case.lower,
  Case.snake,
  Case.pascal,
  Case.camel,
  Case.constant,
  Case.title,
  Case.capital,
  Case.sentence
];


/**
 * Module exports, export
 */

module.exports = module.exports.find = multiple(find);


/**
 * Export the replacement function, return the modified object
 */

module.exports.replace = function (obj, key, val) {
  multiple(replace).apply(this, arguments);
  return obj;
};


/**
 * Export the delete function, return the modified object
 */

module.exports.del = function (obj, key) {
  multiple(del).apply(this, arguments);
  return obj;
};


/**
 * Compose applying the function to a nested key
 */

function multiple (fn) {
  return function (obj, key, val) {
    var keys = key.split('.');
    if (keys.length === 0) return;

    while (keys.length > 1) {
      key = keys.shift();
      obj = find(obj, key);

      if (obj === null || obj === undefined) return;
    }

    key = keys.shift();
    return fn(obj, key, val);
  };
}


/**
 * Find an object by its key
 *
 * find({ first_name : 'Calvin' }, 'firstName')
 */

function find (obj, key) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) return obj[cased];
  }
}


/**
 * Delete a value for a given key
 *
 * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
 */

function del (obj, key) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) delete obj[cased];
  }
  return obj;
}


/**
 * Replace an objects existing value with a new one
 *
 * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
 */

function replace (obj, key, val) {
  for (var i = 0; i < cases.length; i++) {
    var cased = cases[i](key);
    if (obj.hasOwnProperty(cased)) obj[cased] = val;
  }
  return obj;
}

}, {"case":28}],

38: [function(require, module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
}, {}],

62: [function(require, module, exports) {


var callback = require('callback');


/**
 * Expose `when`.
 */

module.exports = when;


/**
 * Loop on a short interval until `condition()` is true, then call `fn`.
 *
 * @param {Function} condition
 * @param {Function} fn
 * @param {Number} interval (optional)
 */

function when (condition, fn, interval) {
  if (condition()) return callback.async(fn);

  var ref = setInterval(function () {
    if (!condition()) return;
    callback(fn);
    clearInterval(ref);
  }, interval || 10);
}
}, {"callback":52}],

63: [function(require, module, exports) {

/**
 * Module dependencies.
 */

try {
  var EventEmitter = require('events').EventEmitter;
} catch (err) {
  var Emitter = require('emitter');
}

/**
 * Noop.
 */

function noop(){}

/**
 * Expose `Batch`.
 */

module.exports = Batch;

/**
 * Create a new Batch.
 */

function Batch() {
  if (!(this instanceof Batch)) return new Batch;
  this.fns = [];
  this.concurrency(Infinity);
  this.throws(true);
  for (var i = 0, len = arguments.length; i < len; ++i) {
    this.push(arguments[i]);
  }
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

if (EventEmitter) {
  Batch.prototype.__proto__ = EventEmitter.prototype;
} else {
  Emitter(Batch.prototype);
}

/**
 * Set concurrency to `n`.
 *
 * @param {Number} n
 * @return {Batch}
 * @api public
 */

Batch.prototype.concurrency = function(n){
  this.n = n;
  return this;
};

/**
 * Queue a function.
 *
 * @param {Function} fn
 * @return {Batch}
 * @api public
 */

Batch.prototype.push = function(fn){
  this.fns.push(fn);
  return this;
};

/**
 * Set wether Batch will or will not throw up.
 *
 * @param  {Boolean} throws
 * @return {Batch}
 * @api public
 */
Batch.prototype.throws = function(throws) {
  this.e = !!throws;
  return this;
};

/**
 * Execute all queued functions in parallel,
 * executing `cb(err, results)`.
 *
 * @param {Function} cb
 * @return {Batch}
 * @api public
 */

Batch.prototype.end = function(cb){
  var self = this
    , total = this.fns.length
    , pending = total
    , results = []
    , errors = []
    , cb = cb || noop
    , fns = this.fns
    , max = this.n
    , throws = this.e
    , index = 0
    , done;

  // empty
  if (!fns.length) return cb(null, results);

  // process
  function next() {
    var i = index++;
    var fn = fns[i];
    if (!fn) return;
    var start = new Date;

    try {
      fn(callback);
    } catch (err) {
      callback(err);
    }

    function callback(err, res){
      if (done) return;
      if (err && throws) return done = true, cb(err);
      var complete = total - pending + 1;
      var end = new Date;

      results[i] = res;
      errors[i] = err;

      self.emit('progress', {
        index: i,
        value: res,
        error: err,
        pending: pending,
        total: total,
        complete: complete,
        percent: complete / total * 100 | 0,
        start: start,
        end: end,
        duration: end - start
      });

      if (--pending) next()
      else if(!throws) cb(errors, results);
      else cb(null, results);
    }
  }

  // concurrency
  for (var i = 0; i < fns.length; i++) {
    if (i == max) break;
    next();
  }

  return this;
};

}, {"emitter":37}],

20: [function(require, module, exports) {


/**
 * Expose `isEmpty`.
 */

module.exports = isEmpty;


/**
 * Has.
 */

var has = Object.prototype.hasOwnProperty;


/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty (val) {
  if (null == val) return true;
  if ('number' == typeof val) return 0 === val;
  if (undefined !== val.length) return 0 === val.length;
  for (var key in val) if (has.call(val, key)) return false;
  return true;
}
}, {}],

64: [function(require, module, exports) {

/**
 * Expose `defaults`.
 */
module.exports = defaults;

function defaults (dest, defaults) {
  for (var prop in defaults) {
    if (! (prop in dest)) {
      dest[prop] = defaults[prop];
    }
  }

  return dest;
};

}, {}],

47: [function(require, module, exports) {


/**
 * Expose `isEmail`.
 */

module.exports = isEmail;


/**
 * Email address matcher.
 */

var matcher = /.+\@.+\..+/;


/**
 * Loosely validate an email address.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isEmail (string) {
  return matcher.test(string);
}
}, {}],

65: [function(require, module, exports) {


/**
 * Parse the given `url`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(url){
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    host: a.host,
    port: a.port,
    hash: a.hash,
    hostname: a.hostname,
    pathname: a.pathname,
    protocol: a.protocol,
    search: a.search,
    query: a.search.slice(1)
  }
};

/**
 * Check if `url` is absolute.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isAbsolute = function(url){
  if (0 == url.indexOf('//')) return true;
  if (~url.indexOf('://')) return true;
  return false;
};

/**
 * Check if `url` is relative.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isRelative = function(url){
  return ! exports.isAbsolute(url);
};

/**
 * Check if `url` is cross domain.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isCrossDomain = function(url){
  url = exports.parse(url);
  return url.hostname != location.hostname
    || url.port != location.port
    || url.protocol != location.protocol;
};
}, {}],

66: [function(require, module, exports) {

module.exports = function canonical () {
  var tags = document.getElementsByTagName('link');
  for (var i = 0, tag; tag = tags[i]; i++) {
    if ('canonical' == tag.getAttribute('rel')) return tag.getAttribute('href');
  }
};
}, {}],

67: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var stringify = require('querystring').stringify;
var sub = require('substitute');

/**
 * Factory function to create a pixel loader.
 *
 * @param {String} path
 * @return {Function}
 * @api public
 */

module.exports = function(path){
  return function(query, obj, fn){
    if ('function' == typeof obj) fn = obj, obj = {};
    obj = obj || {};
    fn = fn || function(){};
    var url = sub(path, obj);
    var img = new Image;
    img.onerror = error(fn, 'failed to load pixel', img);
    img.onload = function(){ fn(); };
    query = stringify(query);
    if (query) query = '?' + query;
    img.src = url + query;
    img.width = 1;
    img.height = 1;
    return img;
  };
};

/**
 * Create an error handler.
 *
 * @param {Fucntion} fn
 * @param {String} message
 * @param {Image} img
 * @return {Function}
 * @api private
 */

function error(fn, message, img){
  return function(e){
    e = e || window.event;
    var err = new Error(message);
    err.event = e;
    err.source = img;
    fn(err);
  };
}

}, {"querystring":40,"substitute":39}],

68: [function(require, module, exports) {


var is = require('is');

try {
  var clone = require('clone');
} catch (e) {
  var clone = require('clone-component');
}


/**
 * Expose `convertDates`.
 */

module.exports = convertDates;


/**
 * Recursively convert an `obj`'s dates to new values.
 *
 * @param {Object} obj
 * @param {Function} convert
 * @return {Object}
 */

function convertDates (obj, convert) {
  obj = clone(obj);
  for (var key in obj) {
    var val = obj[key];
    if (is.date(val)) obj[key] = convert(val);
    if (is.object(val)) obj[key] = convertDates(val, convert);
  }
  return obj;
}
}, {"is":69,"clone":56}],

70: [function(require, module, exports) {


var type = require('type');

try {
  var clone = require('clone');
} catch (e) {
  var clone = require('clone-component');
}


/**
 * Expose `alias`.
 */

module.exports = alias;


/**
 * Alias an `object`.
 *
 * @param {Object} obj
 * @param {Mixed} method
 */

function alias (obj, method) {
  switch (type(method)) {
    case 'object': return aliasByDictionary(clone(obj), method);
    case 'function': return aliasByFunction(clone(obj), method);
  }
}


/**
 * Convert the keys in an `obj` using a dictionary of `aliases`.
 *
 * @param {Object} obj
 * @param {Object} aliases
 */

function aliasByDictionary (obj, aliases) {
  for (var key in aliases) {
    if (undefined === obj[key]) continue;
    obj[aliases[key]] = obj[key];
    delete obj[key];
  }
  return obj;
}


/**
 * Convert the keys in an `obj` using a `convert` function.
 *
 * @param {Object} obj
 * @param {Function} convert
 */

function aliasByFunction (obj, convert) {
  // have to create another object so that ie8 won't infinite loop on keys
  var output = {};
  for (var key in obj) output[convert(key)] = obj[key];
  return output;
}
}, {"type":21,"clone":45}],

71: [function(require, module, exports) {


/**
 * Expose `toIsoString`.
 */

module.exports = toIsoString;


/**
 * Turn a `date` into an ISO string.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 *
 * @param {Date} date
 * @return {String}
 */

function toIsoString (date) {
  return date.getUTCFullYear()
    + '-' + pad(date.getUTCMonth() + 1)
    + '-' + pad(date.getUTCDate())
    + 'T' + pad(date.getUTCHours())
    + ':' + pad(date.getUTCMinutes())
    + ':' + pad(date.getUTCSeconds())
    + '.' + String((date.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5)
    + 'Z';
}


/**
 * Pad a `number` with a ten's place zero.
 *
 * @param {Number} number
 * @return {String}
 */

function pad (number) {
  var n = number.toString();
  return n.length === 1 ? '0' + n : n;
}
}, {}],

45: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var type;

try {
  type = require('type');
} catch(e){
  type = require('type-component');
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj){
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}

}, {"type":21}],

72: [function(require, module, exports) {


/**
 * Protocol.
 */

module.exports = function (url) {
  switch (arguments.length) {
    case 0: return check();
    case 1: return transform(url);
  }
};


/**
 * Transform a protocol-relative `url` to the use the proper protocol.
 *
 * @param {String} url
 * @return {String}
 */

function transform (url) {
  return check() ? 'https:' + url : 'http:' + url;
}


/**
 * Check whether `https:` be used for loading scripts.
 *
 * @return {Boolean}
 */

function check () {
  return (
    location.protocol == 'https:' ||
    location.protocol == 'chrome-extension:'
  );
}
}, {}],

73: [function(require, module, exports) {



/*
 * Load date.
 *
 * For reference: http://www.html5rocks.com/en/tutorials/webperformance/basics/
 */

var time = new Date()
  , perf = window.performance;

if (perf && perf.timing && perf.timing.responseEnd) {
  time = new Date(perf.timing.responseEnd);
}

module.exports = time;
}, {}],

74: [function(require, module, exports) {


/**
 * Expose `generate`.
 */

module.exports = generate;


/**
 * Generate a global queue pushing method with `name`.
 *
 * @param {String} name
 * @param {Object} options
 *   @property {Boolean} wrap
 * @return {Function}
 */

function generate (name, options) {
  options = options || {};

  return function (args) {
    args = [].slice.call(arguments);
    window[name] || (window[name] = []);
    options.wrap === false
      ? window[name].push.apply(window[name], args)
      : window[name].push(args);
  };
}
}, {}],

75: [function(require, module, exports) {


/**
 * Expose `onError`.
 */

module.exports = onError;


/**
 * Callbacks.
 */

var callbacks = [];


/**
 * Preserve existing handler.
 */

if ('function' == typeof window.onerror) callbacks.push(window.onerror);


/**
 * Bind to `window.onerror`.
 */

window.onerror = handler;


/**
 * Error handler.
 */

function handler () {
  for (var i = 0, fn; fn = callbacks[i]; i++) fn.apply(this, arguments);
}


/**
 * Call a `fn` on `window.onerror`.
 *
 * @param {Function} fn
 */

function onError (fn) {
  callbacks.push(fn);
  if (window.onerror != handler) {
    callbacks.push(window.onerror);
    window.onerror = handler;
  }
}
}, {}],

76: [function(require, module, exports) {


module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};
}, {}],

77: [function(require, module, exports) {


var Facade = require('./facade');

/**
 * Expose `Facade` facade.
 */

module.exports = Facade;

/**
 * Expose specific-method facades.
 */

Facade.Alias = require('./alias');
Facade.Group = require('./group');
Facade.Identify = require('./identify');
Facade.Track = require('./track');
Facade.Page = require('./page');
Facade.Screen = require('./screen');

}, {"./facade":44,"./alias":49,"./group":48,"./identify":46,"./track":43,"./page":42,"./screen":41}],

52: [function(require, module, exports) {

var next = require('next-tick');


/**
 * Expose `callback`.
 */

module.exports = callback;


/**
 * Call an `fn` back synchronously if it exists.
 *
 * @param {Function} fn
 */

function callback (fn) {
  if ('function' === typeof fn) fn();
}


/**
 * Call an `fn` back asynchronously if it exists. If `wait` is ommitted, the
 * `fn` will be called on next tick.
 *
 * @param {Function} fn
 * @param {Number} wait (optional)
 */

callback.async = function (fn, wait) {
  if ('function' !== typeof fn) return;
  if (!wait) return next(fn);
  setTimeout(fn, wait);
};


/**
 * Symmetry.
 */

callback.sync = callback;

}, {"next-tick":53}],

78: [function(require, module, exports) {


/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  _default: [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return the children.
 *
 * @param {String} html
 * @return {Array}
 * @api private
 */

function parse(html) {
  if ('string' != typeof html) throw new TypeError('String expected');

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return document.createTextNode(html);
  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = document.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = document.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = document.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

}, {}],

79: [function(require, module, exports) {

var each = require('each');


/**
 * Cache whether `<body>` exists.
 */

var body = false;


/**
 * Callbacks to call when the body exists.
 */

var callbacks = [];


/**
 * Export a way to add handlers to be invoked once the body exists.
 *
 * @param {Function} callback  A function to call when the body exists.
 */

module.exports = function onBody (callback) {
  if (body) {
    call(callback);
  } else {
    callbacks.push(callback);
  }
};


/**
 * Set an interval to check for `document.body`.
 */

var interval = setInterval(function () {
  if (!document.body) return;
  body = true;
  each(callbacks, call);
  clearInterval(interval);
}, 5);


/**
 * Call a callback, passing it the body.
 *
 * @param {Function} callback  The callback to call.
 */

function call (callback) {
  callback(document.body);
}
}, {"each":3}],

80: [function(require, module, exports) {

var type = require('type');


module.exports = function loadScript (options, callback) {
    if (!options) throw new Error('Cant load nothing...');

    // Allow for the simplest case, just passing a `src` string.
    if (type(options) === 'string') options = { src : options };

    var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

    // If you use protocol relative URLs, third-party scripts like Google
    // Analytics break when testing with `file:` so this fixes that.
    if (options.src && options.src.indexOf('//') === 0) {
        options.src = https ? 'https:' + options.src : 'http:' + options.src;
    }

    // Allow them to pass in different URLs depending on the protocol.
    if (https && options.https) options.src = options.https;
    else if (!https && options.http) options.src = options.http;

    // Make the `<script>` element and insert it before the first script on the
    // page, which is guaranteed to exist since this Javascript is running.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = options.src;

    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // If we have a callback, attach event handlers, even in IE. Based off of
    // the Third-Party Javascript script loading example:
    // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
    if (callback && type(callback) === 'function') {
        if (script.addEventListener) {
            script.addEventListener('load', function (event) {
                callback(null, event);
            }, false);
            script.addEventListener('error', function (event) {
                callback(new Error('Failed to load the script.'), event);
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function (event) {
                if (/complete|loaded/.test(script.readyState)) {
                    callback(null, event);
                }
            });
        }
    }

    // Return the script element in case they want to do anything special, like
    // give it an ID or attributes.
    return script;
};

}, {"type":21}],

69: [function(require, module, exports) {


var isEmpty = require('is-empty');

try {
  var typeOf = require('type');
} catch (e) {
  var typeOf = require('component-type');
}


/**
 * Types.
 */

var types = [
  'arguments',
  'array',
  'boolean',
  'date',
  'element',
  'function',
  'null',
  'number',
  'object',
  'regexp',
  'string',
  'undefined'
];


/**
 * Expose type checkers.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


/**
 * Add alias for `function` for old browsers.
 */

exports.fn = exports['function'];


/**
 * Expose `empty` check.
 */

exports.empty = isEmpty;


/**
 * Expose `nan` check.
 */

exports.nan = function (val) {
  return exports.number(val) && val != val;
};


/**
 * Generate a type checker.
 *
 * @param {String} type
 * @return {Function}
 */

function generate (type) {
  return function (value) {
    return type === typeOf(value);
  };
}
}, {"is-empty":20,"type":21,"component-type":21}],

81: [function(require, module, exports) {


var bind = require('bind');
var callback = require('callback');
var clone = require('clone');
var debug = require('debug');
var defaults = require('defaults');
var protos = require('./protos');
var slug = require('slug');
var statics = require('./statics');


/**
 * Expose `createIntegration`.
 */

module.exports = createIntegration;


/**
 * Create a new Integration constructor.
 *
 * @param {String} name
 */

function createIntegration (name) {

  /**
   * Initialize a new `Integration`.
   *
   * @param {Object} options
   */

  function Integration (options) {
    this.debug = debug('analytics:integration:' + slug(name));
    this.options = defaults(clone(options) || {}, this.defaults);
    this._queue = [];
    this.once('ready', bind(this, this.flush));

    Integration.emit('construct', this);
    this._wrapInitialize();
    this._wrapLoad();
    this._wrapPage();
    this._wrapTrack();
  }

  Integration.prototype.defaults = {};
  Integration.prototype.globals = [];
  Integration.prototype.name = name;
  for (var key in statics) Integration[key] = statics[key];
  for (var key in protos) Integration.prototype[key] = protos[key];
  return Integration;
}

}, {"bind":57,"callback":52,"clone":56,"debug":55,"defaults":54,"./protos":51,"slug":59,"./statics":50}],

82: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Yandex);
};

/**
 * Expose `Yandex` integration.
 */

var Yandex = exports.Integration = integration('Yandex Metrica')
  .assumesPageview()
  .readyOnInitialize()
  .global('yandex_metrika_callbacks')
  .global('Ya')
  .option('counterId', null);

/**
 * Initialize.
 *
 * http://api.yandex.com/metrika/
 * https://metrica.yandex.com/22522351?step=2#tab=code
 *
 * @param {Object} page
 */

Yandex.prototype.initialize = function(page){
  var id = this.options.counterId;

  push(function(){
    window['yaCounter' + id] = new window.Ya.Metrika({ id: id });
  });

  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Yandex.prototype.loaded = function(){
  return !! (window.Ya && window.Ya.Metrika);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Yandex.prototype.load = function(callback){
  load('//mc.yandex.ru/metrika/watch.js', callback);
};

/**
 * Push a new callback on the global Yandex queue.
 *
 * @param {Function} callback
 */

function push(callback){
  window.yandex_metrika_callbacks = window.yandex_metrika_callbacks || [];
  window.yandex_metrika_callbacks.push(callback);
}
}, {"callback":52,"integration":81,"load-script":80}],

83: [function(require, module, exports) {


var each = require('each');
var extend = require('extend');
var integration = require('integration');
var isEmail = require('is-email');
var load = require('load-script');
var type = require('type');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Woopra);
};

/**
 * Expose `Woopra` integration.
 */

var Woopra = exports.Integration = integration('Woopra')
  .readyOnLoad()
  .global('woopra')
  .option('domain', '');

/**
 * Initialize.
 *
 * http://www.woopra.com/docs/setup/javascript-tracking/
 *
 * @param {Object} page
 */

Woopra.prototype.initialize = function(page){
  (function(){var i, s, z, w = window, d = document, a = arguments, q = 'script', f = ['config', 'track', 'identify', 'visit', 'push', 'call'], c = function(){var i, self = this; self._e = []; for (i = 0; i < f.length; i++) {(function(f){self[f] = function(){self._e.push([f].concat(Array.prototype.slice.call(arguments, 0))); return self; }; })(f[i]); } }; w._w = w._w || {}; for (i = 0; i < a.length; i++) { w._w[a[i]] = w[a[i]] = w[a[i]] || new c(); } })('woopra');
  window.woopra.config({ domain: this.options.domain });
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Woopra.prototype.loaded = function(){
  return !! (window.woopra && window.woopra.loaded);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Woopra.prototype.load = function(callback){
  load('//static.woopra.com/js/w.js', callback);
};

/**
 * Page.
 *
 * @param {String} category (optional)
 */

Woopra.prototype.page = function(page){
  var props = page.properties();
  var name = page.fullName();
  if (name) props.title = name;
  window.woopra.track('pv', props);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Woopra.prototype.identify = function(identify){
  window.woopra.identify(identify.traits()).push(); // `push` sends it off async
};

/**
 * Track.
 *
 * @param {Track} track
 */

Woopra.prototype.track = function(track){
  window.woopra.track(track.event(), track.properties());
};

}, {"each":3,"extend":76,"integration":81,"is-email":47,"load-script":80,"type":21}],

84: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(WebEngage);
};

/**
 * Expose `WebEngage` integration
 */

var WebEngage = exports.Integration = integration('WebEngage')
  .assumesPageview()
  .readyOnLoad()
  .global('_weq')
  .global('webengage')
  .option('widgetVersion', '4.0')
  .option('licenseCode', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

WebEngage.prototype.initialize = function(page){
  var _weq = window._weq = window._weq || {};
  _weq['webengage.licenseCode'] = this.options.licenseCode;
  _weq['webengage.widgetVersion'] = this.options.widgetVersion;
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

WebEngage.prototype.loaded = function(){
  return !! window.webengage;
};

/**
 * Load
 *
 * @param {Function} fn
 */

WebEngage.prototype.load = function(fn){
  var path = '/js/widget/webengage-min-v-4.0.js';
  load({
    https: 'https://ssl.widgets.webengage.com' + path,
    http: 'http://cdn.widgets.webengage.com' + path
  }, fn);
};

}, {"integration":81,"load-script":80}],

85: [function(require, module, exports) {


var callback = require('callback');
var each = require('each');
var integration = require('integration');
var tick = require('next-tick');

/**
 * Analytics reference.
 */

var analytics;

/**
 * Expose plugin.
 */

module.exports = exports = function(ajs){
  ajs.addIntegration(VWO);
  analytics = ajs;
};

/**
 * Expose `VWO` integration.
 */

var VWO = exports.Integration = integration('Visual Website Optimizer')
  .readyOnInitialize()
  .option('replay', true);

/**
 * Initialize.
 *
 * http://v2.visualwebsiteoptimizer.com/tools/get_tracking_code.php
 */

VWO.prototype.initialize = function(){
  if (this.options.replay) this.replay();
};

/**
 * Replay the experiments the user has seen as traits to all other integrations.
 * Wait for the next tick to replay so that the `analytics` object and all of
 * the integrations are fully initialized.
 */

VWO.prototype.replay = function(){
  tick(function(){
    experiments(function(err, traits){
      if (traits) analytics.identify(traits);
    });
  });
};

/**
 * Get dictionary of experiment keys and variations.
 *
 * http://visualwebsiteoptimizer.com/knowledge/integration-of-vwo-with-kissmetrics/
 *
 * @param {Function} callback
 * @return {Object}
 */

function experiments(callback){
  enqueue(function(){
    var data = {};
    var ids = window._vwo_exp_ids;
    if (!ids) return callback();
    each(ids, function(id){
      var name = variation(id);
      if (name) data['Experiment: ' + id] = name;
    });
    callback(null, data);
  });
}

/**
 * Add a `fn` to the VWO queue, creating one if it doesn't exist.
 *
 * @param {Function} fn
 */

function enqueue(fn){
  window._vis_opt_queue = window._vis_opt_queue || [];
  window._vis_opt_queue.push(fn);
}

/**
 * Get the chosen variation's name from an experiment `id`.
 *
 * http://visualwebsiteoptimizer.com/knowledge/integration-of-vwo-with-kissmetrics/
 *
 * @param {String} id
 * @return {String}
 */

function variation(id){
  var experiments = window._vwo_exp;
  if (!experiments) return null;
  var experiment = experiments[id];
  var variationId = experiment.combination_chosen;
  return variationId ? experiment.comb_n[variationId] : null;
}
}, {"callback":52,"each":3,"integration":81,"next-tick":53}],

86: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_veroq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Vero);
};

/**
 * Expose `Vero` integration.
 */

var Vero = exports.Integration = integration('Vero')
  .readyOnInitialize()
  .global('_veroq')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://github.com/getvero/vero-api/blob/master/sections/js.md
 *
 * @param {Object} page
 */

Vero.prototype.initialize = function(page){
  push('init', { api_key: this.options.apiKey });
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Vero.prototype.loaded = function(){
  return !! (window._veroq && window._veroq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Vero.prototype.load = function(callback){
  load('//d3qxef4rp70elm.cloudfront.net/m.js', callback);
};

/**
 * Page.
 *
 * https://www.getvero.com/knowledge-base#/questions/71768-Does-Vero-track-pageviews
 *
 * @param {Page} page
 */

Vero.prototype.page = function(page){
  push('trackPageview');
};

/**
 * Identify.
 *
 * https://github.com/getvero/vero-api/blob/master/sections/js.md#user-identification
 *
 * @param {Identify} identify
 */

Vero.prototype.identify = function(identify){
  var traits = identify.traits();
  var email = identify.email();
  var id = identify.userId();
  if (!id || !email) return; // both required
  push('user', traits);
};

/**
 * Track.
 *
 * https://github.com/getvero/vero-api/blob/master/sections/js.md#tracking-events
 *
 * @param {Track} track
 */

Vero.prototype.track = function(track){
  push('track', track.event(), track.properties());
};

}, {"callback":52,"integration":81,"load-script":80,"global-queue":74}],

87: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var clone = require('clone');
var convertDates = require('convert-dates');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('UserVoice');
var unix = require('to-unix-timestamp');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(UserVoice);
};

/**
 * Expose `UserVoice` integration.
 */

var UserVoice = exports.Integration = integration('UserVoice')
  .assumesPageview()
  .readyOnInitialize()
  .global('UserVoice')
  .global('showClassicWidget')
  .option('apiKey', '')
  .option('classic', false)
  .option('forumId', null)
  .option('showWidget', true)
  .option('mode', 'contact')
  .option('accentColor', '#448dd6')
  .option('smartvote', true)
  .option('trigger', null)
  .option('triggerPosition', 'bottom-right')
  .option('triggerColor', '#ffffff')
  .option('triggerBackgroundColor', 'rgba(46, 49, 51, 0.6)')
  // BACKWARDS COMPATIBILITY: classic options
  .option('classicMode', 'full')
  .option('primaryColor', '#cc6d00')
  .option('linkColor', '#007dbf')
  .option('defaultMode', 'support')
  .option('tabLabel', 'Feedback & Support')
  .option('tabColor', '#cc6d00')
  .option('tabPosition', 'middle-right')
  .option('tabInverted', false);

/**
 * When in "classic" mode, on `construct` swap all of the method to point to
 * their classic counterparts.
 */

UserVoice.on('construct', function(integration){
  if (!integration.options.classic) return;
  integration.group = undefined;
  integration.identify = integration.identifyClassic;
  integration.initialize = integration.initializeClassic;
});

/**
 * Initialize.
 *
 * @param {Object} page
 */

UserVoice.prototype.initialize = function(page){
  var options = this.options;

  var opts = formatOptions(options);
  push('set', opts);
  push('autoprompt', {});
  if (options.showWidget) {
    options.trigger
      ? push('addTrigger', options.trigger, opts)
      : push('addTrigger', opts);
  }

  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

UserVoice.prototype.loaded = function(){
  return !! (window.UserVoice && window.UserVoice.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

UserVoice.prototype.load = function(callback){
  var key = this.options.apiKey;
  load('//widget.uservoice.com/' + key + '.js', callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

UserVoice.prototype.identify = function(identify){
  var traits = identify.traits({ created: 'created_at' });
  traits = convertDates(traits, unix);
  push('identify', traits);
};

/**
 * Group.
 *
 * @param {Group} group
 */

UserVoice.prototype.group = function(group){
  var traits = group.traits({ created: 'created_at' });
  traits = convertDates(traits, unix);
  push('identify', { account: traits });
};

/**
 * Initialize (classic).
 *
 * @param {Object} options
 * @param {Function} ready
 */

UserVoice.prototype.initializeClassic = function(){
  var options = this.options;
  window.showClassicWidget = showClassicWidget; // part of public api
  if (options.showWidget) showClassicWidget('showTab', formatClassicOptions(options));
  this.load();
};

/**
 * Identify (classic).
 *
 * @param {Identify} identify
 */

UserVoice.prototype.identifyClassic = function(identify){
  push('setCustomFields', identify.traits());
};

/**
 * Format the options for UserVoice.
 *
 * @param {Object} options
 * @return {Object}
 */

function formatOptions(options){
  return alias(options, {
    forumId: 'forum_id',
    accentColor: 'accent_color',
    smartvote: 'smartvote_enabled',
    triggerColor: 'trigger_color',
    triggerBackgroundColor: 'trigger_background_color',
    triggerPosition: 'trigger_position'
  });
}

/**
 * Format the classic options for UserVoice.
 *
 * @param {Object} options
 * @return {Object}
 */

function formatClassicOptions(options){
  return alias(options, {
    forumId: 'forum_id',
    classicMode: 'mode',
    primaryColor: 'primary_color',
    tabPosition: 'tab_position',
    tabColor: 'tab_color',
    linkColor: 'link_color',
    defaultMode: 'default_mode',
    tabLabel: 'tab_label',
    tabInverted: 'tab_inverted'
  });
}

/**
 * Show the classic version of the UserVoice widget. This method is usually part
 * of UserVoice classic's public API.
 *
 * @param {String} type ('showTab' or 'showLightbox')
 * @param {Object} options (optional)
 */

function showClassicWidget(type, options){
  type = type || 'showLightbox';
  push(type, 'classic_widget', options);
}

}, {"alias":70,"callback":52,"clone":45,"convert-dates":68,"integration":81,"load-script":80,"global-queue":74,"to-unix-timestamp":58}],

88: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var convertDates = require('convert-dates');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_ufq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Userfox);
};

/**
 * Expose `Userfox` integration.
 */

var Userfox = exports.Integration = integration('userfox')
  .assumesPageview()
  .readyOnInitialize()
  .global('_ufq')
  .option('clientId', '');

/**
 * Initialize.
 *
 * https://www.userfox.com/docs/
 *
 * @param {Object} page
 */

Userfox.prototype.initialize = function(page){
  window._ufq = [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Userfox.prototype.loaded = function(){
  return !! (window._ufq && window._ufq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Userfox.prototype.load = function(callback){
  load('//d2y71mjhnajxcg.cloudfront.net/js/userfox-stable.js', callback);
};

/**
 * Identify.
 *
 * https://www.userfox.com/docs/#custom-data
 *
 * @param {Identify} identify
 */

Userfox.prototype.identify = function(identify){
  var traits = identify.traits({ created: 'signup_date' });
  var email = identify.email();

  if (!email) return;

  // initialize the library with the email now that we have it
  push('init', {
    clientId: this.options.clientId,
    email: email
  });

  traits = convertDates(traits, formatDate);
  push('track', traits);
};

/**
 * Convert a `date` to a format userfox supports.
 *
 * @param {Date} date
 * @return {String}
 */

function formatDate(date){
  return Math.round(date.getTime() / 1000).toString();
}

}, {"alias":70,"callback":52,"convert-dates":68,"integration":81,"load-script":80,"global-queue":74}],

89: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_uc');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Usercycle);
};

/**
 * Expose `Usercycle` integration.
 */

var Usercycle = exports.Integration = integration('USERcycle')
  .assumesPageview()
  .readyOnInitialize()
  .global('_uc')
  .option('key', '');

/**
 * Initialize.
 *
 * http://docs.usercycle.com/javascript_api
 *
 * @param {Object} page
 */

Usercycle.prototype.initialize = function(page){
  push('_key', this.options.key);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Usercycle.prototype.loaded = function(){
  return !! (window._uc && window._uc.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Usercycle.prototype.load = function(callback){
  load('//api.usercycle.com/javascripts/track.js', callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Usercycle.prototype.identify = function(identify){
  var traits = identify.traits();
  var id = identify.userId();
  if (id) push('uid', id);
  // there's a special `came_back` event used for retention and traits
  push('action', 'came_back', traits);
};

/**
 * Track.
 *
 * @param {Track} track
 */

Usercycle.prototype.track = function(track){
  push('action', track.event(), track.properties({
    revenue: 'revenue_amount'
  }));
};

}, {"callback":52,"integration":81,"load-script":80,"global-queue":74}],

90: [function(require, module, exports) {


var pixel = require('load-pixel')('//analytics.twitter.com/i/adsct');
var integration = require('integration');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(TwitterAds);
};

/**
 * Expose `load`
 */

exports.load = pixel;

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `TwitterAds`
 */

var TwitterAds = exports.Integration = integration('Twitter Ads')
  .readyOnInitialize()
  .option('events', {});

/**
 * Track.
 *
 * @param {Track} track
 */

TwitterAds.prototype.track = function(track){
  var events = this.options.events;
  var event = track.event();
  if (!has.call(events, event)) return;
  return exports.load({
    txn_id: events[event],
    p_id: 'Twitter'
  });
};

}, {"load-pixel":67,"integration":81}],

91: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var clone = require('clone');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Trakio);
};

/**
 * Expose `Trakio` integration.
 */

var Trakio = exports.Integration = integration('trak.io')
  .assumesPageview()
  .readyOnInitialize()
  .global('trak')
  .option('token', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Options aliases.
 */

var optionsAliases = {
  initialPageview: 'auto_track_page_view'
};

/**
 * Initialize.
 *
 * https://docs.trak.io
 *
 * @param {Object} page
 */

Trakio.prototype.initialize = function(page){
  var self = this;
  var options = this.options;
  window.trak = window.trak || [];
  window.trak.io = window.trak.io || {};
  window.trak.io.load = function(e){self.load(); var r = function(e){return function(){window.trak.push([e].concat(Array.prototype.slice.call(arguments,0))); }; } ,i=["initialize","identify","track","alias","channel","source","host","protocol","page_view"]; for (var s=0;s<i.length;s++) window.trak.io[i[s]]=r(i[s]); window.trak.io.initialize.apply(window.trak.io,arguments); };
  window.trak.io.load(options.token, alias(options, optionsAliases));
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Trakio.prototype.loaded = function(){
  return !! (window.trak && window.trak.loaded);
};

/**
 * Load the trak.io library.
 *
 * @param {Function} callback
 */

Trakio.prototype.load = function(callback){
  load('//d29p64779x43zo.cloudfront.net/v1/trak.io.min.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Trakio.prototype.page = function(page){
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();

  window.trak.io.page_view(props.path, name || props.title);

  // named pages
  if (name && this.options.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Trait aliases.
 *
 * http://docs.trak.io/properties.html#special
 */

var traitAliases = {
  avatar: 'avatar_url',
  firstName: 'first_name',
  lastName: 'last_name'
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Trakio.prototype.identify = function(identify){
  var traits = identify.traits(traitAliases);
  var id = identify.userId();

  if (id) {
    window.trak.io.identify(id, traits);
  } else {
    window.trak.io.identify(traits);
  }
};

/**
 * Group.
 *
 * @param {String} id (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 *
 * TODO: add group
 * TODO: add `trait.company/organization` from trak.io docs http://docs.trak.io/properties.html#special
 */

/**
 * Track.
 *
 * @param {Track} track
 */

Trakio.prototype.track = function(track){
  window.trak.io.track(track.event(), track.properties());
};

/**
 * Alias.
 *
 * @param {Alias} alias
 */

Trakio.prototype.alias = function(alias){
  if (!window.trak.io.distinct_id) return;
  var from = alias.from();
  var to = alias.to();

  if (to === window.trak.io.distinct_id()) return;

  if (from) {
    window.trak.io.alias(from, to);
  } else {
    window.trak.io.alias(to);
  }
};

}, {"alias":70,"callback":52,"clone":45,"integration":81,"load-script":80}],

92: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var slug = require('slug');
var push = require('global-queue')('_tsq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Tapstream);
};

/**
 * Expose `Tapstream` integration.
 */

var Tapstream = exports.Integration = integration('Tapstream')
  .assumesPageview()
  .readyOnInitialize()
  .global('_tsq')
  .option('accountName', '')
  .option('trackAllPages', true)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * @param {Object} page
 */

Tapstream.prototype.initialize = function(page){
  window._tsq = window._tsq || [];
  push('setAccountName', this.options.accountName);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Tapstream.prototype.loaded = function(){
  return !! (window._tsq && window._tsq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Tapstream.prototype.load = function(callback){
  load('//cdn.tapstream.com/static/js/tapstream.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Tapstream.prototype.page = function(page){
  var category = page.category();
  var opts = this.options;
  var name = page.fullName();

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Track.
 *
 * @param {Track} track
 */

Tapstream.prototype.track = function(track){
  var props = track.properties();
  push('fireHit', slug(track.event()), [props.url]); // needs events as slugs
};

}, {"callback":52,"integration":81,"load-script":80,"slug":59,"global-queue":74}],

93: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Spinnakr);
};

/**
 * Expose `Spinnakr` integration.
 */

var Spinnakr = exports.Integration = integration('Spinnakr')
  .assumesPageview()
  .readyOnLoad()
  .global('_spinnakr_site_id')
  .global('_spinnakr')
  .option('siteId', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Spinnakr.prototype.initialize = function(page){
  window._spinnakr_site_id = this.options.siteId;
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Spinnakr.prototype.loaded = function(){
  return !! window._spinnakr;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Spinnakr.prototype.load = function(callback){
  load('//d3ojzyhbolvoi5.cloudfront.net/js/so.js', callback);
};
}, {"integration":81,"load-script":80}],

94: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(SnapEngage);
};

/**
 * Expose `SnapEngage` integration.
 */

var SnapEngage = exports.Integration = integration('SnapEngage')
  .assumesPageview()
  .readyOnLoad()
  .global('SnapABug')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * http://help.snapengage.com/installation-guide-getting-started-in-a-snap/
 *
 * @param {Object} page
 */

SnapEngage.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

SnapEngage.prototype.loaded = function(){
  return is.object(window.SnapABug);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

SnapEngage.prototype.load = function(callback){
  var key = this.options.apiKey;
  var url = '//commondatastorage.googleapis.com/code.snapengage.com/js/' + key + '.js';
  load(url, callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

SnapEngage.prototype.identify = function(identify){
  var email = identify.email();
  if (!email) return;
  window.SnapABug.setUserEmail(email);
};

}, {"integration":81,"is":69,"load-script":80}],

95: [function(require, module, exports) {

var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Sentry);
};

/**
 * Expose `Sentry` integration.
 */

var Sentry = exports.Integration = integration('Sentry')
  .readyOnLoad()
  .global('Raven')
  .option('config', '');

/**
 * Initialize.
 *
 * http://raven-js.readthedocs.org/en/latest/config/index.html
 */

Sentry.prototype.initialize = function(){
  var config = this.options.config;
  this.load(function(){
    // for now, raven basically requires `install` to be called
    // https://github.com/getsentry/raven-js/blob/master/src/raven.js#L113
    window.Raven.config(config).install();
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Sentry.prototype.loaded = function(){
  return is.object(window.Raven);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Sentry.prototype.load = function(callback){
  load('//cdn.ravenjs.com/1.1.10/native/raven.min.js', callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Sentry.prototype.identify = function(identify){
  window.Raven.setUser(identify.traits());
};

}, {"integration":81,"is":69,"load-script":80}],

96: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(SaaSquatch);
};

/**
 * Expose `SaaSquatch` integration.
 */

var SaaSquatch = exports.Integration = integration('SaaSquatch')
  .readyOnInitialize()
  .option('tenantAlias', '')
  .global('_sqh');

/**
 * Initialize
 *
 * @param {Page} page
 */

SaaSquatch.prototype.initialize = function(page){};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

SaaSquatch.prototype.loaded = function(){
  return window._sqh && window._sqh.push != [].push;
};

/**
 * Load the SaaSquatch library.
 *
 * @param {Function} fn
 */

SaaSquatch.prototype.load = function(fn){
  load('//d2rcp9ak152ke1.cloudfront.net/assets/javascripts/squatch.min.js', fn);
};

/**
 * Identify.
 *
 * @param {Facade} identify
 */

SaaSquatch.prototype.identify = function(identify){
  var sqh = window._sqh = window._sqh || [];
  var accountId = identify.proxy('traits.accountId');
  var image = identify.proxy('traits.referralImage');
  var opts = identify.options(this.name);
  var id = identify.userId();
  var email = identify.email();

  if (!(id || email)) return;
  if (this.called) return;

  var init = {
    tenant_alias: this.options.tenantAlias,
    first_name: identify.firstName(),
    last_name: identify.lastName(),
    user_image: identify.avatar(),
    email: email,
    user_id: id,
  };

  if (accountId) init.account_id = accountId;
  if (opts.checksum) init.checksum = opts.checksum;
  if (image) init.fb_share_image = image;

  sqh.push(['init', init]);
  this.called = true;
  this.load();
};

}, {"integration":81,"load-script":80}],

97: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var extend = require('extend');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(RollbarIntegration);
};

/**
 * Expose `Rollbar` integration.
 */

var RollbarIntegration = exports.Integration = integration('Rollbar')
  .readyOnInitialize()
  .global('Rollbar')
  .option('identify', true)
  .option('accessToken', '')
  .option('environment', 'unknown')
  .option('captureUncaught', true);

/**
 * Initialize.
 *
 * @param {Object} page
 */
RollbarIntegration.prototype.initialize = function(page){
  var _rollbarConfig = this.config = {
    accessToken: this.options.accessToken,
    captureUncaught: this.options.captureUncaught,
    payload: {
      environment: this.options.environment
    }
  };

  (function(a){function b(b){this.shimId=++g,this.notifier=null,this.parentShim=b,this.logger=function(){},a.console&&void 0 === a.console.shimId&&(this.logger=a.console.log)}function c(b,c,d){!d[4]&&a._rollbarWrappedError&&(d[4]=a._rollbarWrappedError,a._rollbarWrappedError=null),b.uncaughtError.apply(b,d),c&&c.apply(a,d)}function d(c){var d=b;return f(function(){if (this.notifier)return this.notifier[c].apply(this.notifier,arguments);var b=this,e="scope"===c;e&&(b=new d(this));var f=Array.prototype.slice.call(arguments,0),g={ shim:b, method:c, args:f, ts:new Date };return a._rollbarShimQueue.push(g),e?b:void 0})}function e(a,b){if (b.hasOwnProperty&&b.hasOwnProperty("addEventListener")){var c=b.addEventListener;b.addEventListener=function(b,d,e){c.call(this,b,a.wrap(d),e)};var d=b.removeEventListener;b.removeEventListener=function(a,b,c){d.call(this,a,b._wrapped||b,c)}}}function f(a,b){return b=b||this.logger,function(){try {return a.apply(this,arguments)} catch (c) {b("Rollbar internal error:",c)}}}var g=0;b.init=function(a,d){var g=d.globalAlias||"Rollbar";if ("object"==typeof a[g])return a[g];a._rollbarShimQueue=[],a._rollbarWrappedError=null,d=d||{};var h=new b;return f(function(){if (h.configure(d),d.captureUncaught){var b=a.onerror;a.onerror=function(){var a=Array.prototype.slice.call(arguments,0);c(h,b,a)};var f,i,j=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for (f=0;f<j.length;++f)i=j[f],a[i]&&a[i].prototype&&e(h,a[i].prototype)}return a[g]=h,h},h.logger)()},b.prototype.loadFull=function(a,b,c,d,e){var g=f(function(){var a=b.createElement("script"),e=b.getElementsByTagName("script")[0];a.src=d.rollbarJsUrl,a.async=!c,a.onload=h,e.parentNode.insertBefore(a,e)},this.logger),h=f(function(){var b;if (void 0===a._rollbarPayloadQueue){var c,d,f,g;for (b=new Error("rollbar.js did not load");c=a._rollbarShimQueue.shift();)for (f=c.args,g=0;g<f.length;++g)if (d=f[g],"function"==typeof d){d(b);break}}e&&e(b)},this.logger);f(function(){c?g():a.addEventListener?a.addEventListener("load",g,!1):a.attachEvent("onload",g)},this.logger)()},b.prototype.wrap=function(b){if ("function"!=typeof b)return b;if (b._isWrap)return b;if (!b._wrapped){b._wrapped=function(){try {return b.apply(this,arguments)} catch (c) {throw a._rollbarWrappedError=c,c}},b._wrapped._isWrap=!0;for (var c in b)b.hasOwnProperty(c)&&(b._wrapped[c]=b[c])}return b._wrapped};for (var h="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError".split(","),i=0;i<h.length;++i)b.prototype[h[i]]=d(h[i]);var j="//d37gvrvc0wt4s1.cloudfront.net/js/v1.0/rollbar.min.js";_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||j,b.init(a,_rollbarConfig)})(window,document);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

RollbarIntegration.prototype.loaded = function(){
  return is.object(window.Rollbar) && null == window.Rollbar.shimId;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

RollbarIntegration.prototype.load = function(callback){
  window.Rollbar.loadFull(window, document, true, this.config, callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */
RollbarIntegration.prototype.identify = function(identify){
  // do stuff with `id` or `traits`
  if (!this.options.identify) return;

  // Don't allow identify without a user id
  var uid = identify.userId();
  if (uid === null || uid === undefined) return;

  var rollbar = window.Rollbar;
  var person = { id: uid };
  extend(person, identify.traits());
  rollbar.configure({ payload: { person: person }});
};

}, {"integration":81,"is":69,"extend":76}],

98: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_qevents', { wrap: false });

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Quantcast);
  user = analytics.user(); // store for later
};

/**
 * Expose `Quantcast` integration.
 */

var Quantcast = exports.Integration = integration('Quantcast')
  .assumesPageview()
  .readyOnInitialize()
  .global('_qevents')
  .global('__qc')
  .option('pCode', null)
  .option('advertise', false);

/**
 * Initialize.
 *
 * https://www.quantcast.com/learning-center/guides/using-the-quantcast-asynchronous-tag/
 * https://www.quantcast.com/help/cross-platform-audience-measurement-guide/
 *
 * @param {Page} page
 */

Quantcast.prototype.initialize = function(page){
  window._qevents = window._qevents || [];

  var opts = this.options;
  var settings = { qacct: opts.pCode };
  if (user.id()) settings.uid = user.id();

  if (page) {
    settings.labels = this.labels('page', page.category(), page.name());
  }

  push(settings);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Quantcast.prototype.loaded = function(){
  return !! window.__qc;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Quantcast.prototype.load = function(callback){
  load({
    http: 'http://edge.quantserve.com/quant.js',
    https: 'https://secure.quantserve.com/quant.js'
  }, callback);
};

/**
 * Page.
 *
 * https://cloudup.com/cBRRFAfq6mf
 *
 * @param {Page} page
 */

Quantcast.prototype.page = function(page){
  var category = page.category();
  var name = page.name();
  var settings = {
    event: 'refresh',
    labels: this.labels('page', category, name),
    qacct: this.options.pCode,
  };
  if (user.id()) settings.uid = user.id();
  push(settings);
};

/**
 * Identify.
 *
 * https://www.quantcast.com/help/cross-platform-audience-measurement-guide/
 *
 * @param {String} id (optional)
 */

Quantcast.prototype.identify = function(identify){
  // edit the initial quantcast settings
  var id = identify.userId();
  if (id) window._qevents[0].uid = id;
};

/**
 * Track.
 *
 * https://cloudup.com/cBRRFAfq6mf
 *
 * @param {Track} track
 */

Quantcast.prototype.track = function(track){
  var name = track.event();
  var revenue = track.revenue();
  var settings = {
    event: 'click',
    labels: this.labels('event', name),
    qacct: this.options.pCode
  };
  if (null != revenue) settings.revenue = (revenue+''); // convert to string
  if (user.id()) settings.uid = user.id();
  push(settings);
};

/**
 * Completed Order.
 *
 * @param {Track} track
 * @api private
 */

Quantcast.prototype.completedOrder = function(track){
  var name = track.event();
  var revenue = track.total();
  var labels = this.labels('event', name);
  var category = track.category();

  if (this.options.advertise && category) {
    labels += ',' + this.labels('pcat', category);
  }

  var settings = {
    event: 'refresh', // the example Quantcast sent has completed order send refresh not click
    labels: labels,
    revenue: (revenue+''), // convert to string
    orderid: track.orderId(),
    qacct: this.options.pCode
  };
  push(settings);
};

/**
 * Generate quantcast labels.
 *
 * Example:
 *
 *    options.advertise = false;
 *    labels('event', 'my event');
 *    // => "event.my event"
 *
 *    options.advertise = true;
 *    labels('event', 'my event');
 *    // => "_fp.event.my event"
 *
 * @param {String} type
 * @param {String} ...
 * @return {String}
 * @api private
 */

Quantcast.prototype.labels = function(type){
  var args = [].slice.call(arguments, 1);
  var advertise = this.options.advertise;
  var ret = [];

  if (advertise && 'page' == type) type = 'event';
  if (advertise) type = '_fp.' + type;

  for (var i = 0; i < args.length; ++i) {
    if (null == args[i]) continue;
    var value = String(args[i]);
    ret.push(value.replace(/,/g, ';'));
  }

  ret = advertise ? ret.join(' ') : ret.join('.');
  return [type, ret].join('.');
};

}, {"integration":81,"load-script":80,"global-queue":74}],

99: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_kiq');
var Facade = require('facade');
var Identify = Facade.Identify;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Qualaroo);
};

/**
 * Expose `Qualaroo` integration.
 */

var Qualaroo = exports.Integration = integration('Qualaroo')
  .assumesPageview()
  .readyOnInitialize()
  .global('_kiq')
  .option('customerId', '')
  .option('siteToken', '')
  .option('track', false);

/**
 * Initialize.
 *
 * @param {Object} page
 */

Qualaroo.prototype.initialize = function(page){
  window._kiq = window._kiq || [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Qualaroo.prototype.loaded = function(){
  return !! (window._kiq && window._kiq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Qualaroo.prototype.load = function(callback){
  var token = this.options.siteToken;
  var id = this.options.customerId;
  load('//s3.amazonaws.com/ki.js/' + id + '/' + token + '.js', callback);
};

/**
 * Identify.
 *
 * http://help.qualaroo.com/customer/portal/articles/731085-identify-survey-nudge-takers
 * http://help.qualaroo.com/customer/portal/articles/731091-set-additional-user-properties
 *
 * @param {Identify} identify
 */

Qualaroo.prototype.identify = function(identify){
  var traits = identify.traits();
  var id = identify.userId();
  var email = identify.email();
  if (email) id = email;
  if (id) push('identify', id);
  if (traits) push('set', traits);
};

/**
 * Track.
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Qualaroo.prototype.track = function(track){
  if (!this.options.track) return;
  var event = track.event();
  var traits = {};
  traits['Triggered: ' + event] = true;
  this.identify(new Identify({ traits: traits }));
};

}, {"callback":52,"integration":81,"load-script":80,"global-queue":74,"facade":77}],

100: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var convertDates = require('convert-dates');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_lnq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Preact);
};

/**
 * Expose `Preact` integration.
 */

var Preact = exports.Integration = integration('Preact')
  .assumesPageview()
  .readyOnInitialize()
  .global('_lnq')
  .option('projectCode', '');

/**
 * Initialize.
 *
 * http://www.preact.io/api/javascript
 *
 * @param {Object} page
 */

Preact.prototype.initialize = function(page){
  window._lnq = window._lnq || [];
  push('_setCode', this.options.projectCode);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Preact.prototype.loaded = function(){
  return !! (window._lnq && window._lnq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Preact.prototype.load = function(callback){
  load('//d2bbvl6dq48fa6.cloudfront.net/js/ln-2.4.min.js', callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Preact.prototype.identify = function(identify){
  if (!identify.userId()) return;
  var traits = identify.traits({ created: 'created_at' });
  traits = convertDates(traits, convertDate);
  push('_setPersonData', {
    name: identify.name(),
    email: identify.email(),
    uid: identify.userId(),
    properties: traits
  });
};

/**
 * Group.
 *
 * @param {String} id
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Preact.prototype.group = function(group){
  if (!group.groupId()) return;
  push('_setAccount', group.traits());
};

/**
 * Track.
 *
 * @param {Track} track
 */

Preact.prototype.track = function(track){
  var props = track.properties();
  var revenue = track.revenue();
  var event = track.event();
  var special = { name: event };

  if (revenue) {
    special.revenue = revenue * 100;
    delete props.revenue;
  }

  if (props.note) {
    special.note = props.note;
    delete props.note;
  }

  push('_logEvent', special, props);
};

/**
 * Convert a `date` to a format Preact supports.
 *
 * @param {Date} date
 * @return {Number}
 */

function convertDate(date){
  return Math.floor(date / 1000);
}

}, {"alias":70,"callback":52,"convert-dates":68,"integration":81,"load-script":80,"global-queue":74}],

101: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_paq');

/**
 * Expose plugin
 */
module.exports = exports = function(analytics){
  analytics.addIntegration(Piwik);
};

/**
 * Expose `Piwik` integration.
 */

var Piwik = exports.Integration = integration('Piwik')
  .global('_paq')
  .option('url', null)
  .option('siteId', '')
  .assumesPageview()
  .readyOnInitialize();

/**
 * Initialize.
 *
 * http://piwik.org/docs/javascript-tracking/#toc-asynchronous-tracking
 */

Piwik.prototype.initialize = function(){
  window._paq = window._paq || [];
  push('setSiteId', this.options.siteId);
  push('setTrackerUrl', this.options.url + '/piwik.php');
  push('enableLinkTracking');
  this.load();
};

/**
 * Load the Piwik Analytics library.
 */

Piwik.prototype.load = function(callback){
  load(this.options.url + "/piwik.js", callback);
};

/**
 * Check if Piwik is loaded
 */

Piwik.prototype.loaded = function(){
  return !! (window._paq && window._paq.push != [].push);
};

/**
 * Page
 *
 * @param {Page} page
 */

Piwik.prototype.page = function(page){
  push('trackPageView');
};

}, {"integration":81,"load-script":80,"global-queue":74}],

102: [function(require, module, exports) {


var date = require('load-date');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_prum');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Pingdom);
};

/**
 * Expose `Pingdom` integration.
 */

var Pingdom = exports.Integration = integration('Pingdom')
  .assumesPageview()
  .readyOnLoad()
  .global('_prum')
  .option('id', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Pingdom.prototype.initialize = function(page){
  window._prum = window._prum || [];
  push('id', this.options.id);
  push('mark', 'firstbyte', date.getTime());
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Pingdom.prototype.loaded = function(){
  return !! (window._prum && window._prum.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Pingdom.prototype.load = function(callback){
  load('//rum-static.pingdom.net/prum.min.js', callback);
};
}, {"load-date":73,"integration":81,"load-script":80,"global-queue":74}],

103: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(PerfectAudience);
};

/**
 * Expose `PerfectAudience` integration.
 */

var PerfectAudience = exports.Integration = integration('Perfect Audience')
  .assumesPageview()
  .readyOnLoad()
  .global('_pa')
  .option('siteId', '');

/**
 * Initialize.
 *
 * https://www.perfectaudience.com/docs#javascript_api_autoopen
 *
 * @param {Object} page
 */

PerfectAudience.prototype.initialize = function(page){
  window._pa = window._pa || {};
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

PerfectAudience.prototype.loaded = function(){
  return !! (window._pa && window._pa.track);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

PerfectAudience.prototype.load = function(callback){
  var id = this.options.siteId;
  load('//tag.perfectaudience.com/serve/' + id + '.js', callback);
};

/**
 * Track.
 *
 * @param {Track} event
 */

PerfectAudience.prototype.track = function(track){
  window._pa.track(track.event(), track.properties());
};

}, {"integration":81,"load-script":80}],

104: [function(require, module, exports) {


var bind = require('bind');
var callback = require('callback');
var each = require('each');
var integration = require('integration');
var push = require('global-queue')('optimizely');
var tick = require('next-tick');

/**
 * Analytics reference.
 */

var analytics;

/**
 * Expose plugin.
 */

module.exports = exports = function(ajs){
  ajs.addIntegration(Optimizely);
  analytics = ajs; // store for later
};

/**
 * Expose `Optimizely` integration.
 */

var Optimizely = exports.Integration = integration('Optimizely')
  .readyOnInitialize()
  .option('variations', true)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * https://www.optimizely.com/docs/api#function-calls
 */

Optimizely.prototype.initialize = function(){
  if (this.options.variations) tick(this.replay);
};

/**
 * Track.
 *
 * https://www.optimizely.com/docs/api#track-event
 *
 * @param {Track} track
 */

Optimizely.prototype.track = function(track){
  var props = track.properties();
  if (props.revenue) props.revenue *= 100;
  push('trackEvent', track.event(), props);
};

/**
 * Page.
 *
 * https://www.optimizely.com/docs/api#track-event
 *
 * @param {Page} page
 */

Optimizely.prototype.page = function(page){
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Replay experiment data as traits to other enabled providers.
 *
 * https://www.optimizely.com/docs/api#data-object
 */

Optimizely.prototype.replay = function(){
  if (!window.optimizely) return; // in case the snippet isnt on the page

  var data = window.optimizely.data;
  if (!data) return;

  var experiments = data.experiments;
  var map = data.state.variationNamesMap;
  var traits = {};

  each(map, function(experimentId, variation){
    var experiment = experiments[experimentId].name;
    traits['Experiment: ' + experiment] = variation;
  });

  analytics.identify(traits);
};

}, {"bind":60,"callback":52,"each":3,"integration":81,"global-queue":74,"next-tick":53}],

105: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var https = require('use-https');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Olark);
};

/**
 * Expose `Olark` integration.
 */

var Olark = exports.Integration = integration('Olark')
  .assumesPageview()
  .readyOnInitialize()
  .global('olark')
  .option('identify', true)
  .option('page', true)
  .option('siteId', '')
  .option('track', false);

/**
 * Initialize.
 *
 * http://www.olark.com/documentation
 *
 * @param {Object} page
 */

Olark.prototype.initialize = function(page){
  window.olark||(function(c){var f=window,d=document,l=https()?"https:":"http:",z=c.name,r="load";var nt=function(){f[z]=function(){(a.s=a.s||[]).push(arguments)};var a=f[z]._={},q=c.methods.length;while (q--) {(function(n){f[z][n]=function(){f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={ 0:+new Date() };a.P=function(u){a.p[u]=new Date()-a.p[0]};function s(){a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){hd="head";return ["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if (!m) {return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if (/MSIE[ ]+6/.test(navigator.userAgent)) {b.src="javascript:false"}b.allowTransparency="true";v[j](b);try {b.contentWindow[g].open()}catch (w) {c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try {var t=b.contentWindow[g];t.write(p());t.close()}catch (x) {b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({ loader: "static.olark.com/jsclient/loader0.js", name:"olark", methods:["configure","extend","declare","identify"] });
  window.olark.identify(this.options.siteId);

  // keep track of the widget's open state
  var self = this;
  box('onExpand', function(){ self._open = true; });
  box('onShrink', function(){ self._open = false; });
};

/**
 * Page.
 *
 * @param {Page} page
 */

Olark.prototype.page = function(page){
  if (!this.options.page || !this._open) return;
  var props = page.properties();
  var name = page.fullName();

  if (!name && !props.url) return;

  var msg = name ? name.toLowerCase() + ' page' : props.url;

  chat('sendNotificationToOperator', {
    body: 'looking at ' + msg // lowercase since olark does
  });
};

/**
 * Identify.
 *
 * @param {String} id (optional)
 * @param {Object} traits (optional)
 * @param {Object} options (optional)
 */

Olark.prototype.identify = function(identify){
  if (!this.options.identify) return;

  var username = identify.username();
  var traits = identify.traits();
  var id = identify.userId();
  var email = identify.email();
  var phone = identify.phone();
  var name = identify.name()
    || identify.firstName();

  visitor('updateCustomFields', traits);
  if (email) visitor('updateEmailAddress', { emailAddress: email });
  if (phone) visitor('updatePhoneNumber', { phoneNumber: phone });

  // figure out best name
  if (name) visitor('updateFullName', { fullName: name });

  // figure out best nickname
  var nickname = name || email || username || id;
  if (name && email) nickname += ' (' + email + ')';
  if (nickname) chat('updateVisitorNickname', { snippet: nickname });
};

/**
 * Track.
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Olark.prototype.track = function(track){
  if (!this.options.track || !this._open) return;
  chat('sendNotificationToOperator', {
    body: 'visitor triggered "' + track.event() + '"' // lowercase since olark does
  });
};

/**
 * Helper method for Olark box API calls.
 *
 * @param {String} action
 * @param {Object} value
 */

function box(action, value){
  window.olark('api.box.' + action, value);
}

/**
 * Helper method for Olark visitor API calls.
 *
 * @param {String} action
 * @param {Object} value
 */

function visitor(action, value){
  window.olark('api.visitor.' + action, value);
}

/**
 * Helper method for Olark chat API calls.
 *
 * @param {String} action
 * @param {Object} value
 */

function chat(action, value){
  window.olark('api.chat.' + action, value);
}

}, {"callback":52,"integration":81,"use-https":72}],

106: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('__nls');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Navilytics);
};

/**
 * Expose `Navilytics` integration.
 */

var Navilytics = exports.Integration = integration('Navilytics')
  .assumesPageview()
  .readyOnLoad()
  .global('__nls')
  .option('memberId', '')
  .option('projectId', '');

/**
 * Initialize.
 *
 * https://www.navilytics.com/member/code_settings
 *
 * @param {Object} page
 */

Navilytics.prototype.initialize = function(page){
  window.__nls = window.__nls || [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Navilytics.prototype.loaded = function(){
  return !! (window.__nls && [].push != window.__nls.push);
};

/**
 * Load the Navilytics library.
 *
 * @param {Function} callback
 */

Navilytics.prototype.load = function(callback){
  var mid = this.options.memberId;
  var pid = this.options.projectId;
  var url = '//www.navilytics.com/nls.js?mid=' + mid + '&pid=' + pid;
  load(url, callback);
};

/**
 * Track.
 *
 * https://www.navilytics.com/docs#tags
 *
 * @param {Track} track
 */

Navilytics.prototype.track = function(track){
  push('tagRecording', track.event());
};

}, {"integration":81,"load-script":80,"global-queue":74}],

107: [function(require, module, exports) {


var each = require('each');
var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(MouseStats);
};

/**
 * Expose `MouseStats` integration.
 */

var MouseStats = exports.Integration = integration('MouseStats')
  .assumesPageview()
  .readyOnLoad()
  .global('msaa')
  .option('accountNumber', '');

/**
 * Initialize.
 *
 * http://www.mousestats.com/docs/pages/allpages
 *
 * @param {Object} page
 */

MouseStats.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

MouseStats.prototype.loaded = function(){
  return is.fn(window.msaa);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

MouseStats.prototype.load = function(callback){
  var number = this.options.accountNumber;
  var path = number.slice(0,1) + '/' + number.slice(1,2) + '/' + number;
  var cache = Math.floor(new Date().getTime() / 60000);
  var partial = '.mousestats.com/js/' + path + '.js?' + cache;
  var http = 'http://www2' + partial;
  var https = 'https://ssl' + partial;
  load({ http: http, https: https }, callback);
};

/**
 * Identify.
 *
 * http://www.mousestats.com/docs/wiki/7/how-to-add-custom-data-to-visitor-playbacks
 *
 * @param {Identify} identify
 */

MouseStats.prototype.identify = function(identify){
  each(identify.traits(), function(key, value){
    window.MouseStatsVisitorPlaybacks.customVariable(key, value);
  });
};

}, {"each":3,"integration":81,"is":69,"load-script":80}],

108: [function(require, module, exports) {


var push = require('global-queue')('_mfq');
var integration = require('integration');
var load = require('load-script');
var each = require('each');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Mouseflow);
};

/**
 * Expose `Mouseflow`
 */

var Mouseflow = exports.Integration = integration('Mouseflow')
  .assumesPageview()
  .readyOnLoad()
  .global('mouseflow')
  .global('_mfq')
  .option('apiKey', '')
  .option('mouseflowHtmlDelay', 0);

/**
 * Iniitalize
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
  return !! (window._mfq && [].push != window._mfq.push);
};

/**
 * Load mouseflow.
 *
 * @param {Function} fn
 */

Mouseflow.prototype.load = function(fn){
  var apiKey = this.options.apiKey;
  window.mouseflowHtmlDelay = this.options.mouseflowHtmlDelay;
  load('//cdn.mouseflow.com/projects/' + apiKey + '.js', fn);
};

/**
 * Page.
 *
 * //mouseflow.zendesk.com/entries/22528817-Single-page-websites
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
 * //mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @param {Identify} identify
 */

Mouseflow.prototype.identify = function(identify){
  set(identify.traits());
};

/**
 * Track.
 *
 * //mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @param {Track} track
 */

Mouseflow.prototype.track = function(track){
  var props = track.properties();
  props.event = track.event();
  set(props);
};

/**
 * Push the given `hash`.
 *
 * @param {Object} hash
 */

function set(hash){
  each(hash, function(k, v){
    push('setVariable', k, v);
  });
}

}, {"global-queue":74,"integration":81,"load-script":80,"each":3}],

109: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var integration = require('integration');
var load = require('load-script');
var is = require('is');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Mojn);
};

/**
 * Expose `Mojn`
 */

var Mojn = exports.Integration = integration('Mojn')
  .option('customerCode', '')
  .global('_mojnTrack')
  .readyOnInitialize();

/**
 * Initialize.
 *
 * @param {Object} page
 */

Mojn.prototype.initialize = function(){
  window._mojnTrack = window._mojnTrack || [];
  window._mojnTrack.push({ cid: this.options.customerCode });
  this.load();
};

/**
 * Load the Mojn script.
 *
 * @param {Function} fn
 */

Mojn.prototype.load = function(fn){
  load('https://track.idtargeting.com/' + this.options.customerCode + '/track.js', fn);
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Mojn.prototype.loaded = function(){
  return is.object(window._mojnTrack);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Mojn.prototype.identify = function(identify){
  var email = identify.email();
  if (!email) return;
  var img = new Image();
  img.src = '//matcher.idtargeting.com/analytics.gif?cid=' + this.options.customerCode + '&_mjnctid='+email;
  img.width = 1;
  img.height = 1;
  return img;
};

/**
 * Track.
 *
 * @param {Track} event
 */

Mojn.prototype.track = function(track){
  var properties = track.properties();
  var revenue = properties.revenue;
  var currency = properties.currency || '';
  var conv = currency + revenue;
  if (!revenue) return;
  window._mojnTrack.push({ conv: conv });
  return conv;
};

}, {"integration":81,"load-script":80,"is":69}],

110: [function(require, module, exports) {


var alias = require('alias');
var clone = require('clone');
var dates = require('convert-dates');
var integration = require('integration');
var iso = require('to-iso-string');
var load = require('load-script');
var indexof = require('indexof');
var del = require('obj-case').del;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Mixpanel);
};

/**
 * Expose `Mixpanel` integration.
 */

var Mixpanel = exports.Integration = integration('Mixpanel')
  .readyOnLoad()
  .global('mixpanel')
  .option('increments', [])
  .option('cookieName', '')
  .option('nameTag', true)
  .option('pageview', false)
  .option('people', false)
  .option('token', '')
  .option('trackAllPages', false)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Options aliases.
 */

var optionsAliases = {
  cookieName: 'cookie_name'
};

/**
 * Initialize.
 *
 * https://mixpanel.com/help/reference/javascript#installing
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.init
 */

Mixpanel.prototype.initialize = function(){
  (function(c, a){window.mixpanel = a; var b, d, h, e; a._i = []; a.init = function(b, c, f){function d(a, b){var c = b.split('.'); 2 == c.length && (a = a[c[0]], b = c[1]); a[b] = function(){a.push([b].concat(Array.prototype.slice.call(arguments, 0))); }; } var g = a; 'undefined' !== typeof f ? g = a[f] = [] : f = 'mixpanel'; g.people = g.people || []; h = ['disable', 'track', 'track_pageview', 'track_links', 'track_forms', 'register', 'register_once', 'unregister', 'identify', 'alias', 'name_tag', 'set_config', 'people.set', 'people.increment', 'people.track_charge', 'people.append']; for (e = 0; e < h.length; e++) d(g, h[e]); a._i.push([b, c, f]); }; a.__SV = 1.2; })(document, window.mixpanel || []);
  this.options.increments = lowercase(this.options.increments);
  var options = alias(this.options, optionsAliases);
  window.mixpanel.init(options.token, options);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Mixpanel.prototype.loaded = function(){
  return !! (window.mixpanel && window.mixpanel.config);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Mixpanel.prototype.load = function(callback){
  load('//cdn.mxpnl.com/libs/mixpanel-2.2.min.js', callback);
};

/**
 * Page.
 *
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.track_pageview
 *
 * @param {String} category (optional)
 * @param {String} name (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Mixpanel.prototype.page = function(page){
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Trait aliases.
 */

var traitAliases = {
  created: '$created',
  email: '$email',
  firstName: '$first_name',
  lastName: '$last_name',
  lastSeen: '$last_seen',
  name: '$name',
  username: '$username',
  phone: '$phone'
};

/**
 * Identify.
 *
 * https://mixpanel.com/help/reference/javascript#super-properties
 * https://mixpanel.com/help/reference/javascript#user-identity
 * https://mixpanel.com/help/reference/javascript#storing-user-profiles
 *
 * @param {Identify} identify
 */

Mixpanel.prototype.identify = function(identify){
  var username = identify.username();
  var email = identify.email();
  var id = identify.userId();

  // id
  if (id) window.mixpanel.identify(id);

  // name tag
  var nametag = email || username || id;
  if (nametag) window.mixpanel.name_tag(nametag);

  // traits
  var traits = identify.traits(traitAliases);
  if (traits.$created) del(traits, 'createdAt');
  window.mixpanel.register(traits);
  if (this.options.people) window.mixpanel.people.set(traits);
};

/**
 * Track.
 *
 * https://mixpanel.com/help/reference/javascript#sending-events
 * https://mixpanel.com/help/reference/javascript#tracking-revenue
 *
 * @param {Track} track
 */

Mixpanel.prototype.track = function(track){
  var increments = this.options.increments;
  var increment = track.event().toLowerCase();
  var people = this.options.people;
  var props = track.properties();
  var revenue = track.revenue();

  if (people && ~indexof(increments, increment)) {
    window.mixpanel.people.increment(track.event());
    window.mixpanel.people.set('Last ' + track.event(), new Date);
  }

  props = dates(props, iso);
  window.mixpanel.track(track.event(), props);

  if (revenue && people) {
    window.mixpanel.people.track_charge(revenue);
  }
};

/**
 * Alias.
 *
 * https://mixpanel.com/help/reference/javascript#user-identity
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.alias
 *
 * @param {Alias} alias
 */

Mixpanel.prototype.alias = function(alias){
  var mp = window.mixpanel;
  var to = alias.to();
  if (mp.get_distinct_id && mp.get_distinct_id() === to) return;
  // HACK: internal mixpanel API to ensure we don't overwrite
  if (mp.get_property && mp.get_property('$people_distinct_id') === to) return;
  // although undocumented, mixpanel takes an optional original id
  mp.alias(to, alias.from());
};

/**
 * Lowercase the given `arr`.
 *
 * @param {Array} arr
 * @return {Array}
 * @api private
 */

function lowercase(arr){
  var ret = new Array(arr.length);

  for (var i = 0; i < arr.length; ++i) {
    ret[i] = String(arr[i]).toLowerCase();
  }

  return ret;
}

}, {"alias":70,"clone":45,"convert-dates":68,"integration":81,"to-iso-string":71,"load-script":80,"indexof":38,"obj-case":61}],

111: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Lytics);
};

/**
 * Expose `Lytics` integration.
 */

var Lytics = exports.Integration = integration('Lytics')
  .readyOnInitialize()
  .global('jstag')
  .option('cid', '')
  .option('cookie', 'seerid')
  .option('delay', 2000)
  .option('sessionTimeout', 1800)
  .option('url', '//c.lytics.io');

/**
 * Options aliases.
 */

var aliases = {
  sessionTimeout: 'sessecs'
};

/**
 * Initialize.
 *
 * http://admin.lytics.io/doc#jstag
 *
 * @param {Object} page
 */

Lytics.prototype.initialize = function(page){
  var options = alias(this.options, aliases);
  window.jstag = (function(){var t = { _q: [], _c: options, ts: (new Date()).getTime() }; t.send = function(){this._q.push(['ready', 'send', Array.prototype.slice.call(arguments)]); return this; }; return t; })();
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Lytics.prototype.loaded = function(){
  return !! (window.jstag && window.jstag.bind);
};

/**
 * Load the Lytics library.
 *
 * @param {Function} callback
 */

Lytics.prototype.load = function(callback){
  load('//c.lytics.io/static/io.min.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Lytics.prototype.page = function(page){
  window.jstag.send(page.properties());
};

/**
 * Idenfity.
 *
 * @param {Identify} identify
 */

Lytics.prototype.identify = function(identify){
  var traits = identify.traits({ userId: '_uid' });
  window.jstag.send(traits);
};

/**
 * Track.
 *
 * @param {String} event
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

Lytics.prototype.track = function(track){
  var props = track.properties();
  props._e = track.event();
  window.jstag.send(props);
};

}, {"alias":70,"callback":52,"integration":81,"load-script":80}],

112: [function(require, module, exports) {


var Identify = require('facade').Identify;
var integration = require('integration');
var load = require('load-script');

/**
 * User ref
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(LuckyOrange);
  user = analytics.user();
};

/**
 * Expose `LuckyOrange` integration.
 */

var LuckyOrange = exports.Integration = integration('Lucky Orange')
  .assumesPageview()
  .readyOnLoad()
  .global('_loq')
  .global('__wtw_watcher_added')
  .global('__wtw_lucky_site_id')
  .global('__wtw_lucky_is_segment_io')
  .global('__wtw_custom_user_data')
  .option('siteId', null);

/**
 * Initialize.
 *
 * @param {Object} page
 */

LuckyOrange.prototype.initialize = function(page){
  window._loq || (window._loq = []);
  window.__wtw_lucky_site_id = this.options.siteId;
  this.identify(new Identify({
    traits: user.traits(),
    userId: user.id()
  }));
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

LuckyOrange.prototype.loaded = function(){
  return !! window.__wtw_watcher_added;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

LuckyOrange.prototype.load = function(callback){
  var cache = Math.floor(new Date().getTime() / 60000);
  load({
    http: 'http://www.luckyorange.com/w.js?' + cache,
    https: 'https://ssl.luckyorange.com/w.js?' + cache
  }, callback);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

LuckyOrange.prototype.identify = function(identify){
  var traits = window.__wtw_custom_user_data = identify.traits();
  var email = identify.email();
  var name = identify.name();
  if (name) traits.name = name;
  if (email) traits.email = email;
};

}, {"facade":77,"integration":81,"load-script":80}],

113: [function(require, module, exports) {


var each = require('each');
var integration = require('integration');
var load = require('load-script');
var clone = require('clone');
var when = require('when');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(LiveChat);
};

/**
 * Expose `LiveChat` integration.
 */

var LiveChat = exports.Integration = integration('LiveChat')
  .assumesPageview()
  .readyOnLoad()
  .global('__lc')
  .global('__lc_inited')
  .global('LC_API')
  .global('LC_Invite')
  .option('group', 0)
  .option('license', '');

/**
 * Initialize.
 *
 * http://www.livechatinc.com/api/javascript-api
 *
 * @param {Object} page
 */

LiveChat.prototype.initialize = function(page){
  window.__lc = clone(this.options);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

LiveChat.prototype.loaded = function(){
  return !!(window.LC_API && window.LC_Invite);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

LiveChat.prototype.load = function(callback){
  var self = this;
  load('//cdn.livechatinc.com/tracking.js', function(err){
    if (err) return callback(err);
    when(function(){
      return self.loaded();
    }, callback);
  });
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

LiveChat.prototype.identify = function(identify){
  var traits = identify.traits({ userId: 'User ID' });
  window.LC_API.set_custom_variables(convert(traits));
};

/**
 * Convert a traits object into the format LiveChat requires.
 *
 * @param {Object} traits
 * @return {Array}
 */

function convert(traits){
  var arr = [];
  each(traits, function(key, value){
    arr.push({ name: key, value: value });
  });
  return arr;
}

}, {"each":3,"integration":81,"load-script":80,"clone":45,"when":62}],

114: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(LeadLander);
};

/**
 * Expose `LeadLander` integration.
 */

var LeadLander = exports.Integration = integration('LeadLander')
  .assumesPageview()
  .readyOnLoad()
  .global('llactid')
  .global('trackalyzer')
  .option('accountId', null);

/**
 * Initialize.
 *
 * @param {Object} page
 */

LeadLander.prototype.initialize = function(page){
  window.llactid = this.options.accountId;
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

LeadLander.prototype.loaded = function(){
  return !! window.trackalyzer;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

LeadLander.prototype.load = function(callback){
  load('http://t6.trackalyzer.com/trackalyze-nodoc.js', callback);
};
}, {"integration":81,"load-script":80}],

115: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_learnq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Klaviyo);
};

/**
 * Expose `Klaviyo` integration.
 */

var Klaviyo = exports.Integration = integration('Klaviyo')
  .assumesPageview()
  .readyOnInitialize()
  .global('_learnq')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://www.klaviyo.com/docs/getting-started
 *
 * @param {Object} page
 */

Klaviyo.prototype.initialize = function(page){
  push('account', this.options.apiKey);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Klaviyo.prototype.loaded = function(){
  return !! (window._learnq && window._learnq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Klaviyo.prototype.load = function(callback){
  load('//a.klaviyo.com/media/js/learnmarklet.js', callback);
};

/**
 * Trait aliases.
 */

var aliases = {
  id: '$id',
  email: '$email',
  firstName: '$first_name',
  lastName: '$last_name',
  phone: '$phone_number',
  title: '$title'
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Klaviyo.prototype.identify = function(identify){
  var traits = identify.traits(aliases);
  if (!traits.$id && !traits.$email) return;
  push('identify', traits);
};

/**
 * Group.
 *
 * @param {Group} group
 */

Klaviyo.prototype.group = function(group){
  var props = group.properties();
  if (!props.name) return;
  push('identify', { $organization: props.name });
};

/**
 * Track.
 *
 * @param {Track} track
 */

Klaviyo.prototype.track = function(track){
  push('track', track.event(), track.properties({
    revenue: '$value'
  }));
};

}, {"alias":70,"callback":52,"integration":81,"load-script":80,"global-queue":74}],

116: [function(require, module, exports) {


var alias = require('alias');
var Batch = require('batch');
var callback = require('callback');
var integration = require('integration');
var is = require('is');
var load = require('load-script');
var push = require('global-queue')('_kmq');
var Track = require('facade').Track;
var each = require('each');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(KISSmetrics);
};

/**
 * Expose `KISSmetrics` integration.
 */

var KISSmetrics = exports.Integration = integration('KISSmetrics')
  .assumesPageview()
  .readyOnInitialize()
  .global('_kmq')
  .global('KM')
  .global('_kmil')
  .option('apiKey', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * http://support.kissmetrics.com/apis/javascript
 *
 * @param {Object} page
 */

KISSmetrics.prototype.initialize = function(page){
  window._kmq = [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

KISSmetrics.prototype.loaded = function(){
  return is.object(window.KM);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

KISSmetrics.prototype.load = function(callback){
  var key = this.options.apiKey;
  var useless = '//i.kissmetrics.com/i.js';
  var library = '//doug1izaerwt3.cloudfront.net/' + key + '.1.js';

  new Batch()
    .push(function(done){ load(useless, done); }) // :)
    .push(function(done){ load(library, done); })
    .end(callback);
};

/**
 * Page.
 *
 * @param {String} category (optional)
 * @param {String} name (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

KISSmetrics.prototype.page = function(page){
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

KISSmetrics.prototype.identify = function(identify){
  var traits = identify.traits();
  var id = identify.userId();
  if (id) push('identify', id);
  if (traits) push('set', traits);
};

/**
 * Track.
 *
 * @param {Track} track
 */

KISSmetrics.prototype.track = function(track){
  var props = track.properties({ revenue: 'Billing Amount' });
  push('record', track.event(), props);
};

/**
 * Alias.
 *
 * @param {Alias} to
 */

KISSmetrics.prototype.alias = function(alias){
  push('alias', alias.to(), alias.from());
};

/**
 * Viewed product.
 *
 * @param {Track} track
 * @api private
 */

KISSmetrics.prototype.viewedProduct = function(track){
  push('record', 'Product Viewed', toProduct(track));
};

/**
 * Product added.
 *
 * @param {Track} track
 * @api private
 */

KISSmetrics.prototype.addedProduct = function(track){
  push('record', 'Product Added', toProduct(track));
};

/**
 * Completed order.
 *
 * @param {Track} track
 * @api private
 */

KISSmetrics.prototype.completedOrder = function(track){
  var orderId = track.orderId();
  var products = track.products();

  // transaction
  push('record', 'Purchased', {
    'Order ID': track.orderId(),
    'Order Total': track.total()
  });

  // items
  window._kmq.push(function(){
    var km = window.KM;
    each(products, function(product, i){
      var track = new Track({ properties: product });
      var item = toProduct(track);
      item['Order ID'] = orderId;
      item._t = km.ts() + i;
      item._d = 1;
      km.set(item);
    });
  });
};

/**
 * Get a product from the given `track`.
 *
 * @param {Track} track
 * @return {Object}
 * @api private
 */

function toProduct(track){
  return {
    Quantity: track.quantity(),
    Price: track.price(),
    Name: track.name(),
    SKU: track.sku()
  };
}

}, {"alias":70,"batch":63,"callback":52,"integration":81,"is":69,"load-script":80,"global-queue":74,"facade":77,"each":3}],

117: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');
var is = require('is');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Kenshoo);
};

/**
 * Expose `Kenshoo` integration.
 */

var Kenshoo = exports.Integration = integration('Kenshoo')
  .readyOnLoad()
  .global('k_trackevent')
  .option('cid', '')
  .option('subdomain', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * See https://gist.github.com/justinboyle/7875832
 *
 * @param {Object} page
 */

Kenshoo.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded? (checks if the tracking function is set)
 *
 * @return {Boolean}
 */

Kenshoo.prototype.loaded = function(){
  return is.fn(window.k_trackevent);
};

/**
 * Load Kenshoo script.
 *
 * @param {Function} callback
 */

Kenshoo.prototype.load = function(callback){
  var url = '//' + this.options.subdomain + '.xg4ken.com/media/getpx.php?cid=' + this.options.cid;
  load(url, callback);
};

/**
 * Completed order.
 *
 * https://github.com/jorgegorka/the_tracker/blob/master/lib/the_tracker/trackers/kenshoo.rb
 *
 * @param {Track} track
 * @api private
 */

Kenshoo.prototype.completedOrder = function(track){
  this._track(track, { val: track.total() });
};

/**
 * Page.
 *
 * @param {Page} page
 */

Kenshoo.prototype.page = function(page){
  var category = page.category();
  var name = page.name();
  var fullName = page.fullName();
  var isNamed = (name && this.options.trackNamedPages);
  var isCategorized = (category && this.options.trackCategorizedPages);
  var track;

  if (name && ! this.options.trackNamedPages) {
    return;
  }

  if (category && ! this.options.trackCategorizedPages) {
    return;
  }

  if (isNamed && isCategorized) {
    track = page.track(fullName);
  } else if (isNamed) {
    track = page.track(name);
  } else if (isCategorized) {
    track = page.track(category);
  } else {
    track = page.track();
  }

  this._track(track);
};

/**
 * Track.
 *
 * https://github.com/jorgegorka/the_tracker/blob/master/lib/the_tracker/trackers/kenshoo.rb
 *
 * @param {Track} event
 */

Kenshoo.prototype.track = function(track){
  this._track(track);
};

/**
 * Track a Kenshoo event.
 *
 * Private method for sending an event. We use it because `completedOrder`
 * can't call track directly (would result in an infinite loop).
 *
 * @param {track} event
 * @param {options} object
 */

Kenshoo.prototype._track = function(track, options){
  options = options || { val: track.revenue() };

  var params = [
    'id=' + this.options.cid,
    'type=' + track.event(),
    'val=' + (options.val || '0.0'),
    'orderId=' + (track.orderId() || ''),
    'promoCode=' + (track.coupon() || ''),
    'valueCurrency=' + (track.currency() || ''),

    // Live tracking fields. Ignored for now (until we get documentation).
    'GCID=',
    'kw=',
    'product='
  ];

  window.k_trackevent(params, this.options.subdomain);
};

}, {"integration":81,"load-script":80,"is":69}],

118: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Keen);
};

/**
 * Expose `Keen IO` integration.
 */

var Keen = exports.Integration = integration('Keen IO')
  .readyOnInitialize()
  .global('Keen')
  .option('projectId', '')
  .option('readKey', '')
  .option('writeKey', '')
  .option('trackNamedPages', true)
  .option('trackAllPages', false)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * https://keen.io/docs/
 */

Keen.prototype.initialize = function(){
  var options = this.options;
  window.Keen = window.Keen||{ configure:function(e){this._cf=e;}, addEvent:function(e,t,n,i){this._eq=this._eq||[],this._eq.push([e,t,n,i]);}, setGlobalProperties:function(e){this._gp=e;}, onChartsReady:function(e){this._ocrq=this._ocrq||[],this._ocrq.push(e);}};
  window.Keen.configure({
    projectId: options.projectId,
    writeKey: options.writeKey,
    readKey: options.readKey
  });
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Keen.prototype.loaded = function(){
  return !! (window.Keen && window.Keen.Base64);
};

/**
 * Load the Keen IO library.
 *
 * @param {Function} callback
 */

Keen.prototype.load = function(callback){
  load('//dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Keen.prototype.page = function(page){
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var opts = this.options;

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Identify.
 *
 * TODO: migrate from old `userId` to simpler `id`
 *
 * @param {Identify} identify
 */

Keen.prototype.identify = function(identify){
  var traits = identify.traits();
  var id = identify.userId();
  var user = {};
  if (id) user.userId = id;
  if (traits) user.traits = traits;
  window.Keen.setGlobalProperties(function(){
    return { user: user };
  });
};

/**
 * Track.
 *
 * @param {Track} track
 */

Keen.prototype.track = function(track){
  window.Keen.addEvent(track.event(), track.properties());
};

}, {"callback":52,"integration":81,"load-script":80}],

119: [function(require, module, exports) {


var alias = require('alias');
var convertDates = require('convert-dates');
var integration = require('integration');
var each = require('each');
var is = require('is');
var isEmail = require('is-email');
var load = require('load-script');
var defaults = require('defaults');
var empty = require('is-empty');

/**
 * Group ref.
 */

var group;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Intercom);
  group = analytics.group();
};

/**
 * Expose `Intercom` integration.
 */

var Intercom = exports.Integration = integration('Intercom')
  .assumesPageview()
  .readyOnLoad()
  .global('Intercom')
  .option('activator', '#IntercomDefaultWidget')
  .option('appId', '')
  .option('inbox', false);

/**
 * Initialize.
 *
 * http://docs.intercom.io/
 * http://docs.intercom.io/#IntercomJS
 *
 * @param {Object} page
 */

Intercom.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Intercom.prototype.loaded = function(){
  return is.fn(window.Intercom);
};

/**
 * Load the Intercom library.
 *
 * @param {Function} callback
 */

Intercom.prototype.load = function(callback){
  load('https://static.intercomcdn.com/intercom.v1.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Intercom.prototype.page = function(page){
  window.Intercom('update');
};

/**
 * Identify.
 *
 * http://docs.intercom.io/#IntercomJS
 *
 * @param {Identify} identify
 */

Intercom.prototype.identify = function(identify){
  var traits = identify.traits({ userId: 'user_id' });
  var activator = this.options.activator;
  var opts = identify.options(this.name);
  var companyCreated = identify.companyCreated();
  var created = identify.created();
  var email = identify.email();
  var name = identify.name();
  var id = identify.userId();

  if (!id && !traits.email) return; // one is required

  traits.app_id = this.options.appId;

  // Make sure company traits are carried over (fixes #120).
  if (!empty(group.traits())) {
    traits.company = traits.company || {};
    defaults(traits.company, group.traits());
  }

  // name
  if (name) traits.name = name;

  // handle dates
  if (companyCreated) traits.company.created = companyCreated;
  if (created) traits.created = created;

  // convert dates
  traits = convertDates(traits, formatDate);
  traits = alias(traits, { created: 'created_at' });

  // company
  if (traits.company) {
    traits.company = alias(traits.company, { created: 'created_at' });
  }

  // handle options
  if (opts.increments) traits.increments = opts.increments;
  if (opts.userHash) traits.user_hash = opts.userHash;
  if (opts.user_hash) traits.user_hash = opts.user_hash;

  // Intercom, will force the widget to appear
  // if the selector is #IntercomDefaultWidget
  // so no need to check inbox, just need to check
  // that the selector isn't #IntercomDefaultWidget.
  if ('#IntercomDefaultWidget' != activator) {
    traits.widget = { activator: activator };
  }

  var method = this._id !== id ? 'boot': 'update';
  this._id = id; // cache for next time

  window.Intercom(method, traits);
};

/**
 * Group.
 *
 * @param {Group} group
 */

Intercom.prototype.group = function(group){
  var props = group.properties();
  var id = group.groupId();
  if (id) props.id = id;
  window.Intercom('update', { company: props });
};

/**
 * Track.
 *
 * @param {Track} track
 */

Intercom.prototype.track = function(track){
  window.Intercom('trackEvent', track.event(), track.properties());
};

/**
 * Format a date to Intercom's liking.
 *
 * @param {Date} date
 * @return {Number}
 */

function formatDate(date){
  return Math.floor(date / 1000);
}

}, {"alias":70,"convert-dates":68,"integration":81,"each":3,"is":69,"is-email":47,"load-script":80,"defaults":64,"is-empty":20}],

120: [function(require, module, exports) {


var integration = require('integration');
var alias = require('alias');
var clone = require('clone');
var load = require('load-script');
var push = require('global-queue')('__insp');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Inspectlet);
};

/**
 * Expose `Inspectlet` integration.
 */

var Inspectlet = exports.Integration = integration('Inspectlet')
  .assumesPageview()
  .readyOnLoad()
  .global('__insp')
  .global('__insp_')
  .option('wid', '');

/**
 * Initialize.
 *
 * https://www.inspectlet.com/dashboard/embedcode/1492461759/initial
 *
 * @param {Object} page
 */

Inspectlet.prototype.initialize = function(page){
  push('wid', this.options.wid);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Inspectlet.prototype.loaded = function(){
  return !! window.__insp_;
};

/**
 * Load the Inspectlet library.
 *
 * @param {Function} callback
 */

Inspectlet.prototype.load = function(callback){
  load('//www.inspectlet.com/inspectlet.js', callback);
};

/**
 * Track.
 *
 * http://www.inspectlet.com/docs/tags
 *
 * @param {Track} track
 */

Inspectlet.prototype.track = function(track){
  push('tagSession', track.event());
};

}, {"integration":81,"alias":70,"clone":45,"load-script":80,"global-queue":74}],

121: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Improvely);
};

/**
 * Expose `Improvely` integration.
 */

var Improvely = exports.Integration = integration('Improvely')
  .assumesPageview()
  .readyOnInitialize()
  .global('_improvely')
  .global('improvely')
  .option('domain', '')
  .option('projectId', null);

/**
 * Initialize.
 *
 * http://www.improvely.com/docs/landing-page-code
 *
 * @param {Object} page
 */

Improvely.prototype.initialize = function(page){
  window._improvely = [];
  window.improvely = { init: function(e, t){ window._improvely.push(["init", e, t]); }, goal: function(e){ window._improvely.push(["goal", e]); }, label: function(e){ window._improvely.push(["label", e]); }};

  var domain = this.options.domain;
  var id = this.options.projectId;
  window.improvely.init(domain, id);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Improvely.prototype.loaded = function(){
  return !! (window.improvely && window.improvely.identify);
};

/**
 * Load the Improvely library.
 *
 * @param {Function} callback
 */

Improvely.prototype.load = function(callback){
  var domain = this.options.domain;
  load('//' + domain + '.iljmp.com/improvely.js', callback);
};

/**
 * Identify.
 *
 * http://www.improvely.com/docs/labeling-visitors
 *
 * @param {Identify} identify
 */

Improvely.prototype.identify = function(identify){
  var id = identify.userId();
  if (id) window.improvely.label(id);
};

/**
 * Track.
 *
 * http://www.improvely.com/docs/conversion-code
 *
 * @param {Track} track
 */

Improvely.prototype.track = function(track){
  var props = track.properties({ revenue: 'amount' });
  props.type = track.event();
  window.improvely.goal(props);
};

}, {"alias":70,"callback":52,"integration":81,"load-script":80}],

122: [function(require, module, exports) {


var callback = require('callback');
var convert = require('convert-dates');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_hsq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(HubSpot);
};

/**
 * Expose `HubSpot` integration.
 */

var HubSpot = exports.Integration = integration('HubSpot')
  .assumesPageview()
  .readyOnInitialize()
  .global('_hsq')
  .option('portalId', null);

/**
 * Initialize.
 *
 * @param {Object} page
 */

HubSpot.prototype.initialize = function(page){
  window._hsq = [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

HubSpot.prototype.loaded = function(){
  return !! (window._hsq && window._hsq.push !== Array.prototype.push);
};

/**
 * Load the HubSpot library.
 *
 * @param {Function} fn
 */

HubSpot.prototype.load = function(fn){
  if (document.getElementById('hs-analytics')) return callback.async(fn);
  var id = this.options.portalId;
  var cache = Math.ceil(new Date() / 300000) * 300000;
  var url = 'https://js.hs-analytics.net/analytics/' + cache + '/' + id + '.js';
  var script = load(url, fn);
  script.id = 'hs-analytics';
};

/**
 * Page.
 *
 * @param {String} category (optional)
 * @param {String} name (optional)
 * @param {Object} properties (optional)
 * @param {Object} options (optional)
 */

HubSpot.prototype.page = function(page){
  push('_trackPageview');
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

HubSpot.prototype.identify = function(identify){
  if (!identify.email()) return;
  var traits = identify.traits();
  traits = convertDates(traits);
  push('identify', traits);
};

/**
 * Track.
 *
 * @param {Track} track
 */

HubSpot.prototype.track = function(track){
  var props = track.properties();
  props = convertDates(props);
  push('trackEvent', track.event(), props);
};

/**
 * Convert all the dates in the HubSpot properties to millisecond times
 *
 * @param {Object} properties
 */

function convertDates(properties){
  return convert(properties, function(date){ return date.getTime(); });
}

}, {"callback":52,"convert-dates":68,"integration":81,"load-script":80,"global-queue":74}],

123: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(HitTail);
};

/**
 * Expose `HitTail` integration.
 */

var HitTail = exports.Integration = integration('HitTail')
  .assumesPageview()
  .readyOnLoad()
  .global('htk')
  .option('siteId', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

HitTail.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

HitTail.prototype.loaded = function(){
  return is.fn(window.htk);
};

/**
 * Load the HitTail library.
 *
 * @param {Function} callback
 */

HitTail.prototype.load = function(callback){
  var id = this.options.siteId;
  load('//' + id + '.hittail.com/mlt.js', callback);
};
}, {"integration":81,"is":69,"load-script":80}],

124: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Hellobar);
};

/**
 * Expose `hellobar.com` integration.
 */

var Hellobar = exports.Integration = integration('Hello Bar')
  .assumesPageview()
  .readyOnInitialize()
  .global('_hbq')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://s3.amazonaws.com/scripts.hellobar.com/bb900665a3090a79ee1db98c3af21ea174bbc09f.js
 *
 * @param {Object} page
 */

Hellobar.prototype.initialize = function(page){
  window._hbq = window._hbq || [];
  this.load();
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Hellobar.prototype.load = function(callback){
  var url = '//s3.amazonaws.com/scripts.hellobar.com/' + this.options.apiKey + '.js';
  load(url, callback);
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Hellobar.prototype.loaded = function(){
  return !! (window._hbq && window._hbq.push !== Array.prototype.push);
};

}, {"integration":81,"load-script":80}],

125: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Heap);
};

/**
 * Expose `Heap` integration.
 */

var Heap = exports.Integration = integration('Heap')
  .assumesPageview()
  .readyOnInitialize()
  .global('heap')
  .global('_heapid')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://heapanalytics.com/docs#installWeb
 *
 * @param {Object} page
 */

Heap.prototype.initialize = function(page){
  window.heap=window.heap||[];window.heap.load=function(a){window._heapid=a;var d=function(a){return function(){window.heap.push([a].concat(Array.prototype.slice.call(arguments,0)));};},e=["identify","track"];for (var f=0;f<e.length;f++)window.heap[e[f]]=d(e[f]);};
  window.heap.load(this.options.apiKey);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Heap.prototype.loaded = function(){
  return (window.heap && window.heap.appid);
};

/**
 * Load the Heap library.
 *
 * @param {Function} callback
 */

Heap.prototype.load = function(callback){
  load('//d36lvucg9kzous.cloudfront.net', callback);
};

/**
 * Identify.
 *
 * https://heapanalytics.com/docs#identify
 *
 * @param {Identify} identify
 */

Heap.prototype.identify = function(identify){
  var traits = identify.traits();
  var username = identify.username();
  var id = identify.userId();
  var handle = username || id;
  if (handle) traits.handle = handle;
  delete traits.username;
  window.heap.identify(traits);
};

/**
 * Track.
 *
 * https://heapanalytics.com/docs#track
 *
 * @param {Track} track
 */

Heap.prototype.track = function(track){
  window.heap.track(track.event(), track.properties());
};

}, {"alias":70,"callback":52,"integration":81,"load-script":80}],

126: [function(require, module, exports) {


var Identify = require('facade').Identify;
var Track = require('facade').Track;
var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var onBody = require('on-body');
var each = require('each');

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(GoSquared);
  user = analytics.user(); // store reference for later
};

/**
 * Expose `GoSquared` integration.
 */

var GoSquared = exports.Integration = integration('GoSquared')
  .assumesPageview()
  .readyOnLoad()
  .global('_gs')
  .option('siteToken', '')
  .option('anonymizeIP', false)
  .option('cookieDomain', null)
  .option('useCookies', true)
  .option('trackHash', false)
  .option('trackLocal', false)
  .option('trackParams', true);

/**
 * Initialize.
 *
 * https://www.gosquared.com/developer/tracker
 * Options: https://www.gosquared.com/developer/tracker/configuration
 *
 * @param {Object} page
 */

GoSquared.prototype.initialize = function(page){
  var self = this;
  var options = this.options;
  push(options.siteToken);

  each(options, function(name, value){
    if ('siteToken' == name) return;
    if (null == value) return;
    push('set', name, value);
  });

  self.identify(new Identify({
    traits: user.traits(),
    userId: user.id()
  }));

  self.load();
};

/**
 * Loaded? (checks if the tracker version is set)
 *
 * @return {Boolean}
 */

GoSquared.prototype.loaded = function(){
  return !! (window._gs && window._gs.v);
};

/**
 * Load the GoSquared library.
 *
 * @param {Function} callback
 */

GoSquared.prototype.load = function(callback){
  load('//d1l6p2sc9645hc.cloudfront.net/tracker.js', callback);
};

/**
 * Page.
 *
 * https://www.gosquared.com/developer/tracker/pageviews
 *
 * @param {Page} page
 */

GoSquared.prototype.page = function(page){
  var props = page.properties();
  var name = page.fullName();
  push('track', props.path, name || props.title)
};

/**
 * Identify.
 *
 * https://www.gosquared.com/developer/tracker/tagging
 *
 * @param {Identify} identify
 */

GoSquared.prototype.identify = function(identify){
  var traits = identify.traits({ userId: 'userID' });
  var username = identify.username();
  var email = identify.email();
  var id = identify.userId();
  if (id) push('set', 'visitorID', id);
  var name =  email || username || id;
  if (name) push('set', 'visitorName', name);
  push('set', 'visitor', traits);
};

/**
 * Track.
 *
 * https://www.gosquared.com/developer/tracker/events
 *
 * @param {Track} track
 */

GoSquared.prototype.track = function(track){
  push('event', track.event(), track.properties());
};

/**
 * Checked out.
 *
 * @param {Track} track
 * @api private
 */

GoSquared.prototype.completedOrder = function(track){
  var products = track.products();
  var items = [];

  each(products, function(product){
    var track = new Track({ properties: product });
    items.push({
      category: track.category(),
      quantity: track.quantity(),
      price: track.price(),
      name: track.name(),
    });
  })

  push('transaction', track.orderId(), {
    revenue: track.total(),
    track: true
  }, items);
};

/**
 * Push to `_gs.q`.
 *
 * @param {...} args
 * @api private
 */

function push(){
  var _gs = window._gs = window._gs || function(){
    (_gs.q = _gs.q || []).push(arguments);
  };
  _gs.apply(null, arguments);
}

}, {"facade":77,"callback":52,"integration":81,"load-script":80,"on-body":79,"each":3}],

127: [function(require, module, exports) {


var push = require('global-queue')('dataLayer', { wrap: false });
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(GTM);
};

/**
 * Expose `GTM`
 */

var GTM = exports.Integration = integration('Google Tag Manager')
  .assumesPageview()
  .readyOnLoad()
  .global('dataLayer')
  .global('google_tag_manager')
  .option('containerId', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)

/**
 * Initialize
 *
 * https://developers.google.com/tag-manager
 *
 * @param {Object} page
 */

GTM.prototype.initialize = function(){
  this.load();
};

/**
 * Loaded
 *
 * @return {Boolean}
 */

GTM.prototype.loaded = function(){
  return !! (window.dataLayer && [].push != window.dataLayer.push);
};

/**
 * Load.
 *
 * @param {Function} fn
 */

GTM.prototype.load = function(fn){
  var id = this.options.containerId;
  push({ 'gtm.start': +new Date, event: 'gtm.js' });
  load('//www.googletagmanager.com/gtm.js?id=' + id + '&l=dataLayer', fn);
};

/**
 * Page.
 *
 * @param {Page} page
 * @api public
 */

GTM.prototype.page = function(page){
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var opts = this.options;
  var track;

  // all
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // categorized
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Track.
 *
 * https://developers.google.com/tag-manager/devguide#events
 *
 * @param {Track} track
 * @api public
 */

GTM.prototype.track = function(track){
  var props = track.properties();
  props.event = track.event();
  push(props);
};

}, {"global-queue":74,"integration":81,"load-script":80}],

128: [function(require, module, exports) {


var callback = require('callback');
var canonical = require('canonical');
var each = require('each');
var integration = require('integration');
var is = require('is');
var load = require('load-script');
var push = require('global-queue')('_gaq');
var Track = require('facade').Track;
var type = require('type');
var url = require('url');
var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(GA);
  user = analytics.user();
};

/**
 * Expose `GA` integration.
 *
 * http://support.google.com/analytics/bin/answer.py?hl=en&answer=2558867
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration#_gat.GA_Tracker_._setSiteSpeedSampleRate
 */

var GA = exports.Integration = integration('Google Analytics')
  .readyOnLoad()
  .global('ga')
  .global('gaplugins')
  .global('_gaq')
  .global('GoogleAnalyticsObject')
  .option('anonymizeIp', false)
  .option('classic', false)
  .option('domain', 'none')
  .option('doubleClick', false)
  .option('enhancedLinkAttribution', false)
  .option('ignoreReferrer', null)
  .option('includeSearch', false)
  .option('siteSpeedSampleRate', null)
  .option('trackingId', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)
  .option('sendUserId', false);

/**
 * When in "classic" mode, on `construct` swap all of the method to point to
 * their classic counterparts.
 */

GA.on('construct', function(integration){
  if (!integration.options.classic) return;
  integration.initialize = integration.initializeClassic;
  integration.load = integration.loadClassic;
  integration.loaded = integration.loadedClassic;
  integration.page = integration.pageClassic;
  integration.track = integration.trackClassic;
  integration.completedOrder = integration.completedOrderClassic;
});

/**
 * Initialize.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
 */

GA.prototype.initialize = function(){
  var opts = this.options;

  // setup the tracker globals
  window.GoogleAnalyticsObject = 'ga';
  window.ga = window.ga || function(){
    window.ga.q = window.ga.q || [];
    window.ga.q.push(arguments);
  };
  window.ga.l = new Date().getTime();

  window.ga('create', opts.trackingId, {
    cookieDomain: opts.domain || GA.prototype.defaults.domain, // to protect against empty string
    siteSpeedSampleRate: opts.siteSpeedSampleRate,
    allowLinker: true
  });

  // display advertising
  if (opts.doubleClick) {
    window.ga('require', 'displayfeatures');
  }

  // send global id
  if (opts.sendUserId && user.id()) {
    window.ga('set', '&uid', user.id());
  }

  // anonymize after initializing, otherwise a warning is shown
  // in google analytics debugger
  if (opts.anonymizeIp) window.ga('set', 'anonymizeIp', true);

  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

GA.prototype.loaded = function(){
  return !! window.gaplugins;
};

/**
 * Load the Google Analytics library.
 *
 * @param {Function} callback
 */

GA.prototype.load = function(callback){
  load('//www.google-analytics.com/analytics.js', callback);
};

/**
 * Page.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 *
 * @param {Page} page
 */

GA.prototype.page = function(page){
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var track;

  this._category = category; // store for later

  window.ga('send', 'pageview', {
    page: path(props, this.options),
    title: name || props.title,
    location: props.url
  });

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    track = page.track(category);
    this.track(track, { noninteraction: true });
  }

  // named pages
  if (name && this.options.trackNamedPages) {
    track = page.track(name);
    this.track(track, { noninteraction: true });
  }
};

/**
 * Track.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
 *
 * @param {Track} event
 */

GA.prototype.track = function(track, options){
  var opts = options || track.options(this.name);
  var props = track.properties();
  var revenue = track.revenue();
  var event = track.event();

  window.ga('send', 'event', {
    eventAction: event,
    eventCategory: this._category || props.category || 'All',
    eventLabel: props.label,
    eventValue: formatValue(props.value || revenue),
    nonInteraction: props.noninteraction || opts.noninteraction
  });
};

/**
 * Completed order.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
 *
 * @param {Track} track
 * @api private
 */

GA.prototype.completedOrder = function(track){
  var orderId = track.orderId();
  var products = track.products();
  var props = track.properties();

  // orderId is required.
  if (!orderId) return;

  // require ecommerce
  if (!this.ecommerce) {
    window.ga('require', 'ecommerce', 'ecommerce.js');
    this.ecommerce = true;
  }

  // add transaction
  window.ga('ecommerce:addTransaction', {
    affiliation: props.affiliation,
    shipping: track.shipping(),
    revenue: track.total(),
    tax: track.tax(),
    id: orderId
  });

  // add products
  each(products, function(product){
    var track = new Track({ properties: product });
    window.ga('ecommerce:addItem', {
      category: track.category(),
      quantity: track.quantity(),
      price: track.price(),
      name: track.name(),
      sku: track.sku(),
      id: orderId
    });
  });

  // send
  window.ga('ecommerce:send');
};

/**
 * Initialize (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 */

GA.prototype.initializeClassic = function(){
  var opts = this.options;
  var anonymize = opts.anonymizeIp;
  var db = opts.doubleClick;
  var domain = opts.domain;
  var enhanced = opts.enhancedLinkAttribution;
  var ignore = opts.ignoreReferrer;
  var sample = opts.siteSpeedSampleRate;

  window._gaq = window._gaq || [];
  push('_setAccount', opts.trackingId);
  push('_setAllowLinker', true);

  if (anonymize) push('_gat._anonymizeIp');
  if (domain) push('_setDomainName', domain);
  if (sample) push('_setSiteSpeedSampleRate', sample);

  if (enhanced) {
    var protocol = 'https:' === document.location.protocol ? 'https:' : 'http:';
    var pluginUrl = protocol + '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
    push('_require', 'inpage_linkid', pluginUrl);
  }

  if (ignore) {
    if (!is.array(ignore)) ignore = [ignore];
    each(ignore, function(domain){
      push('_addIgnoredRef', domain);
    });
  }

  this.load();
};

/**
 * Loaded? (classic)
 *
 * @return {Boolean}
 */

GA.prototype.loadedClassic = function(){
  return !! (window._gaq && window._gaq.push !== Array.prototype.push);
};

/**
 * Load the classic Google Analytics library.
 *
 * @param {Function} callback
 */

GA.prototype.loadClassic = function(callback){
  if (this.options.doubleClick) {
    load('//stats.g.doubleclick.net/dc.js', callback);
  } else {
    load({
      http: 'http://www.google-analytics.com/ga.js',
      https: 'https://ssl.google-analytics.com/ga.js'
    }, callback);
  }
};

/**
 * Page (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 *
 * @param {Page} page
 */

GA.prototype.pageClassic = function(page){
  var opts = page.options(this.name);
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var track;

  push('_trackPageview', path(props, this.options));

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    track = page.track(category);
    this.track(track, { noninteraction: true });
  }

  // named pages
  if (name && this.options.trackNamedPages) {
    track = page.track(name);
    this.track(track, { noninteraction: true });
  }
};

/**
 * Track (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking
 *
 * @param {Track} track
 */

GA.prototype.trackClassic = function(track, options){
  var opts = options || track.options(this.name);
  var props = track.properties();
  var revenue = track.revenue();
  var event = track.event();
  var category = this._category || props.category || 'All';
  var label = props.label;
  var value = formatValue(revenue || props.value);
  var noninteraction = props.noninteraction || opts.noninteraction;
  push('_trackEvent', category, event, label, value, noninteraction);
};

/**
 * Completed order.
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingEcommerce
 *
 * @param {Track} track
 * @api private
 */

GA.prototype.completedOrderClassic = function(track){
  var orderId = track.orderId();
  var products = track.products() || [];
  var props = track.properties();

  // required
  if (!orderId) return;

  // add transaction
  push(
    '_addTrans',
    orderId,
    props.affiliation,
    track.total(),
    track.tax(),
    track.shipping(),
    track.city(),
    track.state(),
    track.country()
  );

  // add items
  each(products, function(product){
    var track = new Track({ properties: product });
    push(
      '_addItem',
      orderId,
      track.sku(),
      track.name(),
      track.category(),
      track.price(),
      track.quantity()
    );
  });

  // send
  push('_trackTrans');
};

/**
 * Return the path based on `properties` and `options`.
 *
 * @param {Object} properties
 * @param {Object} options
 */

function path(properties, options){
  if (!properties) return;
  var str = properties.path;
  if (options.includeSearch && properties.search) str += properties.search;
  return str;
}

/**
 * Format the value property to Google's liking.
 *
 * @param {Number} value
 * @return {Number}
 */

function formatValue(value){
  if (!value || value < 0) return 0;
  return Math.round(value);
}

}, {"callback":52,"canonical":66,"each":3,"integration":81,"is":69,"load-script":80,"global-queue":74,"facade":77,"type":21,"url":65}],

129: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');
var onBody = require('on-body');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(GetSatisfaction);
};

/**
 * Expose `GetSatisfaction` integration.
 */

var GetSatisfaction = exports.Integration = integration('Get Satisfaction')
  .assumesPageview()
  .readyOnLoad()
  .global('GSFN')
  .option('widgetId', '');

/**
 * Initialize.
 *
 * https://console.getsatisfaction.com/start/101022?signup=true#engage
 *
 * @param {Object} page
 */

GetSatisfaction.prototype.initialize = function(page){
  var widget = this.options.widgetId;
  var div = document.createElement('div');
  var id = div.id = 'getsat-widget-' + widget;
  onBody(function(body){ body.appendChild(div); });

  // usually the snippet is sync, so wait for it before initializing the tab
  this.load(function(){
    window.GSFN.loadWidget(widget, { containerId: id });
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

GetSatisfaction.prototype.loaded = function(){
  return !! window.GSFN;
};

/**
 * Load the Get Satisfaction library.
 *
 * @param {Function} callback
 */

GetSatisfaction.prototype.load = function(callback){
  load('https://loader.engage.gsfn.us/loader.js', callback);
};
}, {"integration":81,"load-script":80,"on-body":79}],

130: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_gauges');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Gauges);
};

/**
 * Expose `Gauges` integration.
 */

var Gauges = exports.Integration = integration('Gauges')
  .assumesPageview()
  .readyOnInitialize()
  .global('_gauges')
  .option('siteId', '');

/**
 * Initialize Gauges.
 *
 * http://get.gaug.es/documentation/tracking/
 *
 * @param {Object} page
 */

Gauges.prototype.initialize = function(page){
  window._gauges = window._gauges || [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Gauges.prototype.loaded = function(){
  return !! (window._gauges && window._gauges.push !== Array.prototype.push);
};

/**
 * Load the Gauges library.
 *
 * @param {Function} callback
 */

Gauges.prototype.load = function(callback){
  var id = this.options.siteId;
  var script = load('//secure.gaug.es/track.js', callback);
  script.id = 'gauges-tracker';
  script.setAttribute('data-site-id', id);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Gauges.prototype.page = function(page){
  push('track');
};

}, {"callback":52,"integration":81,"load-script":80,"global-queue":74}],

131: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Frontleaf);
};

/**
 * Expose `Frontleaf` integration.
 */

var Frontleaf = exports.Integration = integration('Frontleaf')
  .assumesPageview()
  .readyOnInitialize()
  .global('_fl')
  .global('_flBaseUrl')
  .option('baseUrl', 'https://api.frontleaf.com')
  .option('token', '')
  .option('stream', '');

/**
 * Initialize.
 *
 * http://docs.frontleaf.com/#/technical-implementation/tracking-customers/tracking-beacon
 *
 * @param {Object} page
 */

Frontleaf.prototype.initialize = function(page){
  window._fl = window._fl || [];
  window._flBaseUrl = window._flBaseUrl || this.options.baseUrl;
  this._push('setApiToken', this.options.token);
  this._push('setStream', this.options.stream);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Frontleaf.prototype.loaded = function(){
  return is.array(window._fl) && window._fl.ready === true ;
};

/**
 * Load.
 *
 * @param {Function} fn
 */

Frontleaf.prototype.load = function(fn){
  if (document.getElementById('_fl')) return callback.async(fn);
  var script = load(window._flBaseUrl + '/lib/tracker.js', fn);
  script.id = '_fl';
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Frontleaf.prototype.identify = function(identify){
  var userId = identify.userId();
  if (userId) {
    this._push('setUser', {
      id: userId,
      name: identify.name() || identify.username(),
      data: clean(identify.traits())
    });
  }
};

/**
 * Group.
 *
 * @param {Group} group
 */

Frontleaf.prototype.group = function(group){
  var groupId = group.groupId();
  if (groupId) {
    this._push('setAccount', {
      id: groupId,
      name: group.proxy('traits.name'),
      data: clean(group.traits())
    });
  }
};

/**
 * Track.
 *
 * @param {Track} track
 */

Frontleaf.prototype.track = function(track){
  var event = track.event();
  this._push('event', event, clean(track.properties()));
};

/**
 * Push a command onto the global Frontleaf queue.
 *
 * @param {String} command
 * @return {Object} args
 * @api private
 */

Frontleaf.prototype._push = function(command){
  var args = [].slice.call(arguments, 1);
  window._fl.push(function(t){ t[command].apply(command, args); });
};

/**
 * Clean all nested objects and arrays.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function clean(obj){
  var ret = {};

  // Remove traits/properties that are already represented
  // outside of the data container
  var excludeKeys = ["id","name","firstName","lastName"];
  var len = excludeKeys.length;
  for (var i = 0; i < len; i++) {
    clear(obj, excludeKeys[i]);
  }

  // Flatten nested hierarchy, preserving arrays
  obj = flatten(obj);

  // Discard nulls, represent arrays as comma-separated strings
  for (var key in obj) {
    var val = obj[key];
    if (null == val) {
      continue;
    }

    if (is.array(val)) {
      ret[key] = val.toString();
      continue;
    }

    ret[key] = val;
  }

  return ret;
}

/**
 * Remove a property from an object if set.
 *
 * @param {Object} obj
 * @param {String} key
 * @api private
 */

function clear(obj, key){
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}

/**
 * Flatten a nested object into a single level space-delimited
 * hierarchy.
 *
 * Based on https://github.com/hughsk/flat
 *
 * @param {Object} source
 * @return {Object}
 * @api private
 */

function flatten(source){
  var output = {};

  function step(object, prev){
    for (var key in object) {
      var value = object[key];
      var newKey = prev ? prev + ' ' + key : key;

      if (!is.array(value) && is.object(value)) {
        return step(value, newKey);
      }

      output[newKey] = value;
    }
  }

  step(source);

  return output;
}

}, {"callback":52,"integration":81,"is":69,"load-script":80}],

132: [function(require, module, exports) {


var push = require('global-queue')('_fxm');
var integration = require('integration');
var Track = require('facade').Track;
var callback = require('callback');
var load = require('load-script');
var each = require('each');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(FoxMetrics);
};

/**
 * Expose `FoxMetrics` integration.
 */

var FoxMetrics = exports.Integration = integration('FoxMetrics')
  .assumesPageview()
  .readyOnInitialize()
  .global('_fxm')
  .option('appId', '');

/**
 * Initialize.
 *
 * http://foxmetrics.com/documentation/apijavascript
 *
 * @param {Object} page
 */

FoxMetrics.prototype.initialize = function(page){
  window._fxm = window._fxm || [];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

FoxMetrics.prototype.loaded = function(){
  return !! (window._fxm && window._fxm.appId);
};

/**
 * Load the FoxMetrics library.
 *
 * @param {Function} callback
 */

FoxMetrics.prototype.load = function(callback){
  var id = this.options.appId;
  load('//d35tca7vmefkrc.cloudfront.net/scripts/' + id + '.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

FoxMetrics.prototype.page = function(page){
  var properties = page.proxy('properties');
  var category = page.category();
  var name = page.name();
  this._category = category; // store for later

  push(
    '_fxm.pages.view',
    properties.title,   // title
    name,               // name
    category,           // category
    properties.url,     // url
    properties.referrer // referrer
  );
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

FoxMetrics.prototype.identify = function(identify){
  var id = identify.userId();

  if (!id) return;

  push(
    '_fxm.visitor.profile',
    id,                    // user id
    identify.firstName(), // first name
    identify.lastName(),  // last name
    identify.email(),     // email
    identify.address(),   // address
    undefined,            // social
    undefined,            // partners
    identify.traits()     // attributes
  );
};

/**
 * Track.
 *
 * @param {Track} track
 */

FoxMetrics.prototype.track = function(track){
  var props = track.properties();
  var category = this._category || props.category;
  push(track.event(), category, props);
};

/**
 * Viewed product.
 *
 * @param {Track} track
 * @api private
 */

FoxMetrics.prototype.viewedProduct = function(track){
  ecommerce('productview', track);
};

/**
 * Removed product.
 *
 * @param {Track} track
 * @api private
 */

FoxMetrics.prototype.removedProduct = function(track){
  ecommerce('removecartitem', track);
};

/**
 * Added product.
 *
 * @param {Track} track
 * @api private
 */

FoxMetrics.prototype.addedProduct = function(track){
  ecommerce('cartitem', track);
};

/**
 * Completed Order.
 *
 * @param {Track} track
 * @api private
 */

FoxMetrics.prototype.completedOrder = function(track){
  var orderId = track.orderId();

  // transaction
  push(
    '_fxm.ecommerce.order',
    orderId,
    track.subtotal(),
    track.shipping(),
    track.tax(),
    track.city(),
    track.state(),
    track.zip(),
    track.quantity()
  );

  // items
  each(track.products(), function(product){
    var track = new Track({ properties: product });
    ecommerce('purchaseitem', track, [
      track.quantity(),
      track.price(),
      orderId
    ]);
  });
};

/**
 * Track ecommerce `event` with `track`
 * with optional `arr` to append.
 *
 * @param {String} event
 * @param {Track} track
 * @param {Array} arr
 * @api private
 */

function ecommerce(event, track, arr){
  push.apply(null, [
    '_fxm.ecommerce.' + event,
    track.id() || track.sku(),
    track.name(),
    track.category()
  ].concat(arr || []));
}

}, {"global-queue":74,"integration":81,"facade":77,"callback":52,"load-script":80,"each":3}],

133: [function(require, module, exports) {


var load = require('load-pixel')('//www.facebook.com/offsite_event.php');
var integration = require('integration');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Facebook);
};

/**
 * Expose `load`.
 */

exports.load = load;

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `Facebook`
 */

var Facebook = exports.Integration = integration('Facebook Ads')
  .readyOnInitialize()
  .option('currency', 'USD')
  .option('events', {});

/**
 * Track.
 *
 * @param {Track} track
 */

Facebook.prototype.track = function(track){
  var events = this.options.events;
  var traits = track.traits();
  var event = track.event();
  if (!has.call(events, event)) return;
  return exports.load({
    currency: this.options.currency,
    value: track.revenue() || 0,
    id: events[event]
  });
};

}, {"load-pixel":67,"integration":81}],

134: [function(require, module, exports) {


var each = require('each');
var integration = require('integration');
var load = require('load-script');
var push = require('global-queue')('_aaq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Evergage);
};

/**
 * Expose `Evergage` integration.integration.
 */

var Evergage = exports.Integration = integration('Evergage')
  .assumesPageview()
  .readyOnInitialize()
  .global('_aaq')
  .option('account', '')
  .option('dataset', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Evergage.prototype.initialize = function(page){
  var account = this.options.account;
  var dataset = this.options.dataset;

  window._aaq = window._aaq || [];
  push('setEvergageAccount', account);
  push('setDataset', dataset);
  push('setUseSiteConfig', true);

  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Evergage.prototype.loaded = function(){
  return !! (window._aaq && window._aaq.push !== Array.prototype.push);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Evergage.prototype.load = function(callback){
  var account = this.options.account;
  var dataset = this.options.dataset;
  var url = '//cdn.evergage.com/beacon/' + account + '/' + dataset + '/scripts/evergage.min.js';
  load(url, callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Evergage.prototype.page = function(page){
  var props = page.properties();
  var name = page.name();
  if (name) push('namePage', name);

  each(props, function(key, value){
    push('setCustomField', key, value, 'page');
  });

  window.Evergage.init(true);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Evergage.prototype.identify = function(identify){
  var id = identify.userId();
  if (!id) return;

  push('setUser', id);

  var traits = identify.traits({
    email: 'userEmail',
    name: 'userName'
  });

  each(traits, function(key, value){
    push('setUserField', key, value, 'page');
  });
};

/**
 * Group.
 *
 * @param {Group} group
 */

Evergage.prototype.group = function(group){
  var props = group.traits();
  var id = group.groupId();
  if (!id) return;

  push('setCompany', id);
  each(props, function(key, value){
    push('setAccountField', key, value, 'page');
  });
};

/**
 * Track.
 *
 * @param {Track} track
 */

Evergage.prototype.track = function(track){
  push('trackAction', track.event(), track.properties());
};

}, {"each":3,"integration":81,"load-script":80,"global-queue":74}],

135: [function(require, module, exports) {


var callback = require('callback');
var extend = require('extend');
var integration = require('integration');
var load = require('load-script');
var onError = require('on-error');
var push = require('global-queue')('_errs');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Errorception);
};

/**
 * Expose `Errorception` integration.
 */

var Errorception = exports.Integration = integration('Errorception')
  .assumesPageview()
  .readyOnInitialize()
  .global('_errs')
  .option('projectId', '')
  .option('meta', true);

/**
 * Initialize.
 *
 * https://github.com/amplitude/Errorception-Javascript
 *
 * @param {Object} page
 */

Errorception.prototype.initialize = function(page){
  window._errs = window._errs || [this.options.projectId];
  onError(push);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Errorception.prototype.loaded = function(){
  return !! (window._errs && window._errs.push !== Array.prototype.push);
};

/**
 * Load the Errorception library.
 *
 * @param {Function} callback
 */

Errorception.prototype.load = function(callback){
  load('//beacon.errorception.com/' + this.options.projectId + '.js', callback);
};

/**
 * Identify.
 *
 * http://blog.errorception.com/2012/11/capture-custom-data-with-your-errors.html
 *
 * @param {Object} identify
 */

Errorception.prototype.identify = function(identify){
  if (!this.options.meta) return;
  var traits = identify.traits();
  window._errs = window._errs || [];
  window._errs.meta = window._errs.meta || {};
  extend(window._errs.meta, traits);
};

}, {"callback":52,"extend":76,"integration":81,"load-script":80,"on-error":75,"global-queue":74}],

136: [function(require, module, exports) {


var alias = require('alias');
var integration = require('integration');
var is = require('is');
var load = require('load-script');
var push = require('global-queue')('_dcq');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Drip);
};

/**
 * Expose `Drip` integration.
 */

var Drip = exports.Integration = integration('Drip')
  .assumesPageview()
  .readyOnLoad()
  .global('dc')
  .global('_dcq')
  .global('_dcs')
  .option('account', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Drip.prototype.initialize = function(page){
  window._dcq = window._dcq || [];
  window._dcs = window._dcs || {};
  window._dcs.account = this.options.account;
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Drip.prototype.loaded = function(){
  return is.object(window.dc);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Drip.prototype.load = function(callback){
  load('//tag.getdrip.com/' + this.options.account + '.js', callback);
};

/**
 * Track.
 *
 * @param {Track} track
 */

Drip.prototype.track = function(track){
  var props = track.properties();
  var cents = Math.round(track.cents());
  props.action = track.event();
  if (cents) props.value = cents;
  delete props.revenue;
  push('track', props);
};

}, {"alias":70,"integration":81,"is":69,"load-script":80,"global-queue":74}],

137: [function(require, module, exports) {


var alias = require('alias');
var callback = require('callback');
var convertDates = require('convert-dates');
var Identify = require('facade').Identify;
var integration = require('integration');
var load = require('load-script');

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Customerio);
  user = analytics.user(); // store for later
};

/**
 * Expose `Customerio` integration.
 */

var Customerio = exports.Integration = integration('Customer.io')
  .assumesPageview()
  .readyOnInitialize()
  .global('_cio')
  .option('siteId', '');

/**
 * Initialize.
 *
 * http://customer.io/docs/api/javascript.html
 *
 * @param {Object} page
 */

Customerio.prototype.initialize = function(page){
  window._cio = window._cio || [];
  (function(){var a,b,c; a = function(f){return function(){window._cio.push([f].concat(Array.prototype.slice.call(arguments,0))); }; }; b = ['identify', 'track']; for (c = 0; c < b.length; c++) {window._cio[b[c]] = a(b[c]); } })();
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Customerio.prototype.loaded = function(){
  return !! (window._cio && window._cio.pageHasLoaded);
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Customerio.prototype.load = function(callback){
  var script = load('https://assets.customer.io/assets/track.js', callback);
  script.id = 'cio-tracker';
  script.setAttribute('data-site-id', this.options.siteId);
};

/**
 * Identify.
 *
 * http://customer.io/docs/api/javascript.html#section-Identify_customers
 *
 * @param {Identify} identify
 */

Customerio.prototype.identify = function(identify){
  if (!identify.userId()) return this.debug('user id required');
  var traits = identify.traits({ created: 'created_at' });
  traits = convertDates(traits, convertDate);
  window._cio.identify(traits);
};

/**
 * Group.
 *
 * @param {Group} group
 */

Customerio.prototype.group = function(group){
  var traits = group.traits();

  traits = alias(traits, function(trait){
    return 'Group ' + trait;
  });

  this.identify(new Identify({
    userId: user.id(),
    traits: traits
  }));
};

/**
 * Track.
 *
 * http://customer.io/docs/api/javascript.html#section-Track_a_custom_event
 *
 * @param {Track} track
 */

Customerio.prototype.track = function(track){
  var properties = track.properties();
  properties = convertDates(properties, convertDate);
  window._cio.track(track.event(), properties);
};

/**
 * Convert a date to the format Customer.io supports.
 *
 * @param {Date} date
 * @return {Number}
 */

function convertDate(date){
  return Math.floor(date.getTime() / 1000);
}

}, {"alias":70,"callback":52,"convert-dates":68,"facade":77,"integration":81,"load-script":80}],

138: [function(require, module, exports) {


var clone = require('clone');
var each = require('each');
var Identify = require('facade').Identify;
var integration = require('integration');
var iso = require('to-iso-string');
var load = require('load-script');
var push = require('global-queue')('_curebitq');
var Track = require('facade').Track;

/**
 * User reference
 */

var user;

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Curebit);
  user = analytics.user();
};

/**
 * Expose `Curebit` integration
 */

var Curebit = exports.Integration = integration('Curebit')
  .readyOnInitialize()
  .global('_curebitq')
  .global('curebit')
  .option('siteId', '')
  .option('iframeWidth', '100%')
  .option('iframeHeight', '480')
  .option('iframeBorder', 0)
  .option('iframeId', '')
  .option('responsive', true)
  .option('device', '')
  .option('insertIntoId', 'curebit-frame')
  .option('campaigns', {})
  .option('server', 'https://www.curebit.com');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Curebit.prototype.initialize = function(page){
  push('init', {
    site_id: this.options.siteId,
    server: this.options.server
  });
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Curebit.prototype.loaded = function(){
  return !! window.curebit;
};

/**
 * Load Curebit's Javascript library.
 *
 * @param {Function} fn
 */

Curebit.prototype.load = function(fn){
  load('//d2jjzw81hqbuqv.cloudfront.net/integration/curebit-1.0.min.js', fn);
};

/**
 * Page.
 *
 * Call the `register_affiliate` method of the Curebit API that will load a
 * custom iframe onto the page, only if this page's path is marked as a
 * campaign.
 *
 * http://www.curebit.com/docs/affiliate/registration
 *
 * @param {String} url
 * @param {String} id
 * @param {Function} fn
 * @api private
 */

Curebit.prototype.injectIntoId = function(url, id, fn){
  var server = this.options.server;
  when(function(){
    return document.getElementById(id);
  }, function(){
    var script = document.createElement('script');
    script.src = url;
    var parent = document.getElementById(id);
    parent.appendChild(script);
    onload(script, fn);
  });
};

/**
 * Campaign tags.
 *
 * @param {Page} page
 */

Curebit.prototype.page = function(page){
  var campaigns = this.options.campaigns;
  var path = window.location.pathname;
  if (!campaigns[path]) return;

  var tags = (campaigns[path] || '').split(',');
  if (!tags.length) return;

  var settings = {
    responsive: this.options.responsive,
    device: this.options.device,
    campaign_tags: tags,
    iframe: {
      width: this.options.iframeWidth,
      height: this.options.iframeHeight,
      id: this.options.iframeId,
      frameborder: this.options.iframeBorder,
      container: this.options.insertIntoId
    }
  };

  var identify = new Identify({
    userId: user.id(),
    traits: user.traits()
  });

  // if we have an email, add any information about the user
  if (identify.email()) {
    settings.affiliate_member = {
      email: identify.email(),
      first_name: identify.firstName(),
      last_name: identify.lastName(),
      customer_id: identify.userId()
    };
  }

  push('register_affiliate', settings);
};

/**
 * Completed order.
 *
 * Fire the Curebit `register_purchase` with the order details and items.
 *
 * https://www.curebit.com/docs/ecommerce/custom
 *
 * @param {Track} track
 */

Curebit.prototype.completedOrder = function(track){
  var orderId = track.orderId();
  var products = track.products();
  var props = track.properties();
  var items = [];
  var identify = new Identify({
    traits: user.traits(),
    userId: user.id()
  });

  each(products, function(product){
    var track = new Track({ properties: product });
    items.push({
      product_id: track.id() || track.sku(),
      quantity: track.quantity(),
      image_url: product.image,
      price: track.price(),
      title: track.name(),
      url: product.url,
    });
  });

  push('register_purchase', {
    order_date: iso(props.date || new Date()),
    order_number: orderId,
    coupon_code: track.coupon(),
    subtotal: track.total(),
    customer_id: identify.userId(),
    first_name: identify.firstName(),
    last_name: identify.lastName(),
    email: identify.email(),
    items: items
  });
};

}, {"clone":45,"each":3,"facade":77,"integration":81,"to-iso-string":71,"load-script":80,"global-queue":74}],

139: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(CrazyEgg);
};

/**
 * Expose `CrazyEgg` integration.
 */

var CrazyEgg = exports.Integration = integration('Crazy Egg')
  .assumesPageview()
  .readyOnLoad()
  .global('CE2')
  .option('accountNumber', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

CrazyEgg.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

CrazyEgg.prototype.loaded = function(){
  return !! window.CE2;
};

/**
 * Load the Crazy Egg library.
 *
 * @param {Function} callback
 */

CrazyEgg.prototype.load = function(callback){
  var number = this.options.accountNumber;
  var path = number.slice(0,4) + '/' + number.slice(4);
  var cache = Math.floor(new Date().getTime()/3600000);
  var url = '//dnn506yrbagrg.cloudfront.net/pages/scripts/' + path + '.js?' + cache;
  load(url, callback);
};
}, {"integration":81,"load-script":80}],

140: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Comscore);
};

/**
 * Expose `Comscore` integration.
 */

var Comscore = exports.Integration = integration('comScore')
  .assumesPageview()
  .readyOnLoad()
  .global('_comscore')
  .global('COMSCORE')
  .option('c1', '2')
  .option('c2', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Comscore.prototype.initialize = function(page){
  window._comscore = window._comscore || [this.options];
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Comscore.prototype.loaded = function(){
  return !! window.COMSCORE;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Comscore.prototype.load = function(callback){
  load({
    http: 'http://b.scorecardresearch.com/beacon.js',
    https: 'https://sb.scorecardresearch.com/beacon.js'
  }, callback);
};
}, {"integration":81,"load-script":80}],

141: [function(require, module, exports) {


var Identify = require('facade').Identify;
var extend = require('extend');
var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Clicky);
  user = analytics.user(); // store for later
};

/**
 * Expose `Clicky` integration.
 */

var Clicky = exports.Integration = integration('Clicky')
  .assumesPageview()
  .readyOnLoad()
  .global('clicky')
  .global('clicky_site_ids')
  .global('clicky_custom')
  .option('siteId', null);

/**
 * Initialize.
 *
 * http://clicky.com/help/customization
 *
 * @param {Object} page
 */

Clicky.prototype.initialize = function(page){
  window.clicky_site_ids = window.clicky_site_ids || [this.options.siteId];
  this.identify(new Identify({
    userId: user.id(),
    traits: user.traits()
  }));
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Clicky.prototype.loaded = function(){
  return is.object(window.clicky);
};

/**
 * Load the Clicky library.
 *
 * @param {Function} callback
 */

Clicky.prototype.load = function(callback){
  load('//static.getclicky.com/js', callback);
};

/**
 * Page.
 *
 * http://clicky.com/help/customization#/help/custom/manual
 *
 * @param {Page} page
 */

Clicky.prototype.page = function(page){
  var properties = page.properties();
  var category = page.category();
  var name = page.fullName();
  window.clicky.log(properties.path, name || properties.title);
};

/**
 * Identify.
 *
 * @param {Identify} id (optional)
 */

Clicky.prototype.identify = function(identify){
  window.clicky_custom = window.clicky_custom || {};
  window.clicky_custom.session = window.clicky_custom.session || {};
  extend(window.clicky_custom.session, identify.traits());
};

/**
 * Track.
 *
 * http://clicky.com/help/customization#/help/custom/manual
 *
 * @param {Track} event
 */

Clicky.prototype.track = function(track){
  window.clicky.goal(track.event(), track.revenue());
};

}, {"facade":77,"extend":76,"integration":81,"is":69,"load-script":80}],

142: [function(require, module, exports) {


var date = require('load-date');
var domify = require('domify');
var each = require('each');
var integration = require('integration');
var is = require('is');
var useHttps = require('use-https');
var load = require('load-script');
var onBody = require('on-body');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(ClickTale);
};

/**
 * Expose `ClickTale` integration.
 */

var ClickTale = exports.Integration = integration('ClickTale')
  .assumesPageview()
  .readyOnLoad()
  .global('WRInitTime')
  .global('ClickTale')
  .global('ClickTaleSetUID')
  .global('ClickTaleField')
  .global('ClickTaleEvent')
  .option('httpCdnUrl', 'http://s.clicktale.net/WRe0.js')
  .option('httpsCdnUrl', '')
  .option('projectId', '')
  .option('recordingRatio', 0.01)
  .option('partitionId', '');

/**
 * Initialize.
 *
 * http://wiki.clicktale.com/Article/JavaScript_API
 *
 * @param {Object} page
 */

ClickTale.prototype.initialize = function(page){
  var options = this.options;
  window.WRInitTime = date.getTime();

  onBody(function(body){
    body.appendChild(domify('<div id="ClickTaleDiv" style="display: none;">'));
  });

  this.load(function(){
    window.ClickTale(options.projectId, options.recordingRatio, options.partitionId);
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

ClickTale.prototype.loaded = function(){
  return is.fn(window.ClickTale);
};

/**
 * Load the ClickTale library.
 *
 * @param {Function} callback
 */

ClickTale.prototype.load = function(callback){
  var http = this.options.httpCdnUrl;
  var https = this.options.httpsCdnUrl;
  if (useHttps() && !https) return this.debug('https option required');
  load({ http: http, https: https }, callback);
};

/**
 * Identify.
 *
 * http://wiki.clicktale.com/Article/ClickTaleTag#ClickTaleSetUID
 * http://wiki.clicktale.com/Article/ClickTaleTag#ClickTaleField
 *
 * @param {Identify} identify
 */

ClickTale.prototype.identify = function(identify){
  var id = identify.userId();
  window.ClickTaleSetUID(id);
  each(identify.traits(), function(key, value){
    window.ClickTaleField(key, value);
  });
};

/**
 * Track.
 *
 * http://wiki.clicktale.com/Article/ClickTaleTag#ClickTaleEvent
 *
 * @param {Track} track
 */

ClickTale.prototype.track = function(track){
  window.ClickTaleEvent(track.event());
};

}, {"load-date":73,"domify":78,"each":3,"integration":81,"is":69,"use-https":72,"load-script":80,"on-body":79}],

143: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var push = require('global-queue')('_cbq');
var integration = require('integration');
var load = require('load-script');

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Supported events
 */

var supported = {
  activation: true,
  changePlan: true,
  register: true,
  refund: true,
  charge: true,
  cancel: true,
  login: true
};

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(ChurnBee);
};

/**
 * Expose `ChurnBee` integration.
 */

var ChurnBee = exports.Integration = integration('ChurnBee')
  .readyOnInitialize()
  .global('_cbq')
  .global('ChurnBee')
  .option('events', {})
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://churnbee.com/docs
 *
 * @param {Object} page
 */

ChurnBee.prototype.initialize = function(page){
  push('_setApiKey', this.options.apiKey);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

ChurnBee.prototype.loaded = function(){
  return !! window.ChurnBee;
};

/**
 * Load the ChurnBee library.
 *
 * @param {Function} fn
 */

ChurnBee.prototype.load = function(fn){
  load('//api.churnbee.com/cb.js', fn);
};

/**
 * Track.
 *
 * @param {Track} event
 */

ChurnBee.prototype.track = function(track){
  var events = this.options.events;
  var event = track.event();
  if (has.call(events, event)) event = events[event];
  if (true != supported[event]) return;
  push(event, track.properties({ revenue: 'amount' }));
};

}, {"global-queue":74,"integration":81,"load-script":80}],

144: [function(require, module, exports) {


var integration = require('integration');
var onBody = require('on-body');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Chartbeat);
};

/**
 * Expose `Chartbeat` integration.
 */

var Chartbeat = exports.Integration = integration('Chartbeat')
  .assumesPageview()
  .readyOnLoad()
  .global('_sf_async_config')
  .global('_sf_endpt')
  .global('pSUPERFLY')
  .option('domain', '')
  .option('uid', null);

/**
 * Initialize.
 *
 * http://chartbeat.com/docs/configuration_variables/
 *
 * @param {Object} page
 */

Chartbeat.prototype.initialize = function(page){
  window._sf_async_config = this.options;
  onBody(function(){
    window._sf_endpt = new Date().getTime();
  });
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Chartbeat.prototype.loaded = function(){
  return !! window.pSUPERFLY;
};

/**
 * Load the Chartbeat library.
 *
 * http://chartbeat.com/docs/adding_the_code/
 *
 * @param {Function} callback
 */

Chartbeat.prototype.load = function(callback){
  load({
    https: 'https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/js/chartbeat.js',
    http: 'http://static.chartbeat.com/js/chartbeat.js'
  }, callback);
};

/**
 * Page.
 *
 * http://chartbeat.com/docs/handling_virtual_page_changes/
 *
 * @param {Page} page
 */

Chartbeat.prototype.page = function(page){
  var props = page.properties();
  var name = page.fullName();
  window.pSUPERFLY.virtualPage(props.path, name || props.title);
};

}, {"integration":81,"on-body":79,"load-script":80}],

145: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var extend = require('extend');
var load = require('load-script');
var onError = require('on-error');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Bugsnag);
};

/**
 * Expose `Bugsnag` integration.
 */

var Bugsnag = exports.Integration = integration('Bugsnag')
  .readyOnLoad()
  .global('Bugsnag')
  .option('apiKey', '');

/**
 * Initialize.
 *
 * https://bugsnag.com/docs/notifiers/js
 *
 * @param {Object} page
 */

Bugsnag.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Bugsnag.prototype.loaded = function(){
  return is.object(window.Bugsnag);
};

/**
 * Load.
 *
 * @param {Function} callback (optional)
 */

Bugsnag.prototype.load = function(callback){
  var apiKey = this.options.apiKey;
  load('//d2wy8f7a9ursnm.cloudfront.net/bugsnag-2.min.js', function(err){
    if (err) return callback(err);
    window.Bugsnag.apiKey = apiKey;
    callback();
  });
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Bugsnag.prototype.identify = function(identify){
  window.Bugsnag.metaData = window.Bugsnag.metaData || {};
  extend(window.Bugsnag.metaData, identify.traits());
};

}, {"integration":81,"is":69,"extend":76,"load-script":80,"on-error":75}],

146: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(BugHerd);
};

/**
 * Expose `BugHerd` integration.
 */

var BugHerd = exports.Integration = integration('BugHerd')
  .assumesPageview()
  .readyOnLoad()
  .global('BugHerdConfig')
  .global('_bugHerd')
  .option('apiKey', '')
  .option('showFeedbackTab', true);

/**
 * Initialize.
 *
 * http://support.bugherd.com/home
 *
 * @param {Object} page
 */

BugHerd.prototype.initialize = function(page){
  window.BugHerdConfig = { feedback: { hide: !this.options.showFeedbackTab }};
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

BugHerd.prototype.loaded = function(){
  return !! window._bugHerd;
};

/**
 * Load the BugHerd library.
 *
 * @param {Function} callback
 */

BugHerd.prototype.load = function(callback){
  load('//www.bugherd.com/sidebarv2.js?apikey=' + this.options.apiKey, callback);
};
}, {"integration":81,"load-script":80}],

147: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var integration = require('integration');
var Track = require('facade').Track;
var load = require('load-script');
var each = require('each');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Bronto);
};

/**
 * Expose `Bronto` integration.
 */

var Bronto = exports.Integration = integration('Bronto')
  .readyOnLoad()
  .global('__bta')
  .option('siteId', '')
  .option('host', '');

/**
 * Initialize.
 *
 * http://bronto.com/product-blog/features/using-conversion-tracking-private-domain#.Ut_Vk2T8KqB
 * http://bronto.com/product-blog/features/javascript-conversion-tracking-setup-and-reporting#.Ut_VhmT8KqB
 *
 * @param {Object} page
 */

Bronto.prototype.initialize = function(page){
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Bronto.prototype.loaded = function(){
  return this.bta;
};

/**
 * Load the Bronto library.
 *
 * @param {Function} fn
 */

Bronto.prototype.load = function(fn){
  var self = this;
  load('//p.bm23.com/bta.js', function(err){
    if (err) return fn(err);
    var opts = self.options;
    self.bta = new window.__bta(opts.siteId);
    if (opts.host) self.bta.setHost(opts.host);
    fn();
  });
};

/**
 * Track.
 *
 * @param {Track} event
 */

Bronto.prototype.track = function(track){
  var revenue = track.revenue();
  var event = track.event();
  var type = 'number' == typeof revenue ? '$' : 't';
  this.bta.addConversionLegacy(type, event, revenue);
};

/**
 * Completed order.
 *
 * @param {Track} track
 * @api private
 */

Bronto.prototype.completedOrder = function(track){
  var products = track.products();
  var props = track.properties();
  var items = [];

  // items
  each(products, function(product){
    var track = new Track({ properties: product });
    items.push({
      item_id: track.id() || track.sku(),
      desc: product.description || track.name(),
      quantity: track.quantity(),
      amount: track.price(),
    });
  });

  // add conversion
  this.bta.addConversion({
    order_id: track.orderId(),
    date: props.date || new Date,
    items: items
  });
};

}, {"integration":81,"facade":77,"load-script":80,"each":3}],

148: [function(require, module, exports) {


var integration = require('integration');

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
  return exports.load(goal, track.revenue(), this.options);
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

exports.load = function(goal, revenue, options){
  var iframe = document.createElement('iframe');
  iframe.src = '//flex.msn.com/mstag/tag/' + options.siteId
    + '/analytics.html'
    + '?domainId=' + options.domainId
    + '&revenue=' + revenue || 0
    + '&actionid=' + goal;
    + '&dedup=1'
    + '&type=1';
  iframe.width = 1;
  iframe.height = 1;
  return iframe;
};

}, {"integration":81}],

149: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var load = require('load-script');
var noop = function(){};
var onBody = require('on-body');

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Awesomatic);
  user = analytics.user(); // store for later
};

/**
 * Expose `Awesomatic` integration.
 */

var Awesomatic = exports.Integration = integration('Awesomatic')
  .assumesPageview()
  .global('Awesomatic')
  .global('AwesomaticSettings')
  .global('AwsmSetup')
  .global('AwsmTmp')
  .option('appId', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

Awesomatic.prototype.initialize = function(page){
  var self = this;
  var id = user.id();
  var options = user.traits();

  options.appId = this.options.appId;
  if (id) options.user_id = id;

  this.load(function(){
    window.Awesomatic.initialize(options, function(){
      self.emit('ready'); // need to wait for initialize to callback
    });
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Awesomatic.prototype.loaded = function(){
  return is.object(window.Awesomatic);
};

/**
 * Load the Awesomatic library.
 *
 * @param {Function} callback
 */

Awesomatic.prototype.load = function(callback){
  var url = 'https://1c817b7a15b6941337c0-dff9b5f4adb7ba28259631e99c3f3691.ssl.cf2.rackcdn.com/gen/embed.js';
  load(url, callback);
};
}, {"integration":81,"is":69,"load-script":80,"on-body":79}],

150: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * User reference.
 */

var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Awesm);
  user = analytics.user(); // store for later
};

/**
 * Expose `Awesm` integration.
 */

var Awesm = exports.Integration = integration('awe.sm')
  .assumesPageview()
  .readyOnLoad()
  .global('AWESM')
  .option('apiKey', '')
  .option('events', {});

/**
 * Initialize.
 *
 * http://developers.awe.sm/guides/javascript/
 *
 * @param {Object} page
 */

Awesm.prototype.initialize = function(page){
  window.AWESM = { api_key: this.options.apiKey };
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Awesm.prototype.loaded = function(){
  return !! window.AWESM._exists;
};

/**
 * Load.
 *
 * @param {Function} callback
 */

Awesm.prototype.load = function(callback){
  var key = this.options.apiKey;
  load('//widgets.awe.sm/v3/widgets.js?key=' + key + '&async=true', callback);
};

/**
 * Track.
 *
 * @param {Track} track
 */

Awesm.prototype.track = function(track){
  var event = track.event();
  var goal = this.options.events[event];
  if (!goal) return;
  window.AWESM.convert(goal, track.cents(), null, user.id());
};

}, {"integration":81,"load-script":80}],

151: [function(require, module, exports) {


var callback = require('callback');
var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Amplitude);
};

/**
 * Expose `Amplitude` integration.
 */

var Amplitude = exports.Integration = integration('Amplitude')
  .assumesPageview()
  .readyOnInitialize()
  .global('amplitude')
  .option('apiKey', '')
  .option('trackAllPages', false)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true);

/**
 * Initialize.
 *
 * https://github.com/amplitude/Amplitude-Javascript
 *
 * @param {Object} page
 */

Amplitude.prototype.initialize = function(page){
  (function(e,t){var r=e.amplitude||{}; r._q=[];function i(e){r[e]=function(){r._q.push([e].concat(Array.prototype.slice.call(arguments,0)));};} var s=["init","logEvent","setUserId","setGlobalUserProperties","setVersionName","setDomain"]; for (var c=0;c<s.length;c++){i(s[c]);}e.amplitude=r;})(window,document);
  window.amplitude.init(this.options.apiKey);
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Amplitude.prototype.loaded = function(){
  return !! (window.amplitude && window.amplitude.options);
};

/**
 * Load the Amplitude library.
 *
 * @param {Function} callback
 */

Amplitude.prototype.load = function(callback){
  load('https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-1.1-min.js', callback);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Amplitude.prototype.page = function(page){
  var properties = page.properties();
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Identify.
 *
 * @param {Facade} identify
 */

Amplitude.prototype.identify = function(identify){
  var id = identify.userId();
  var traits = identify.traits();
  if (id) window.amplitude.setUserId(id);
  if (traits) window.amplitude.setGlobalUserProperties(traits);
};

/**
 * Track.
 *
 * @param {Track} event
 */

Amplitude.prototype.track = function(track){
  var props = track.properties();
  var event = track.event();
  window.amplitude.logEvent(event, props);
};

}, {"callback":52,"integration":81,"load-script":80}],

152: [function(require, module, exports) {


var integration = require('integration');
var load = require('load-script');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Alexa);
};

/**
 * Expose Alexa integration.
 */

var Alexa = exports.Integration = integration('Alexa')
  .assumesPageview()
  .readyOnLoad()
  .global('_atrk_opts')
  .option('account', null)
  .option('domain', '')
  .option('dynamic', true);

/**
 * Initialize.
 *
 * @param {Object} page
 */

Alexa.prototype.initialize = function(page){
  window._atrk_opts = {
    atrk_acct: this.options.account,
    domain: this.options.domain,
    dynamic: this.options.dynamic
  };
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Alexa.prototype.loaded = function(){
  return !! window.atrk;
};

/**
 * Load the Alexa library.
 *
 * @param {Function} callback
 */

Alexa.prototype.load = function(callback){
  load('//d31qbv1cthcecs.cloudfront.net/atrk.js', function(err){
    if (err) return callback(err);
    window.atrk();
    callback();
  });
};

}, {"integration":81,"load-script":80}],

153: [function(require, module, exports) {


var onbody = require('on-body');
var integration = require('integration');
var load = require('load-script');
var domify = require('domify');

/**
 * Expose plugin
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(AdWords);
};

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `AdWords`
 */

var AdWords = exports.Integration = integration('AdWords')
  .readyOnLoad()
  .option('conversionId', '')
  .option('events', {});

/**
 * Load
 *
 * @param {Function} fn
 * @api public
 */

AdWords.prototype.load = function(fn){
  onbody(fn);
};

/**
 * Loaded.
 *
 * @return {Boolean}
 * @api public
 */

AdWords.prototype.loaded = function(){
  return !! document.body;
};

/**
 * Track.
 *
 * @param {Track}
 * @api public
 */

AdWords.prototype.track = function(track){
  var id = this.options.conversionId;
  var events = this.options.events;
  var event = track.event();
  if (!has.call(events, event)) return;
  return this.conversion({
    value: track.revenue() || 0,
    label: events[event],
    conversionId: id
  });
};

/**
 * Report AdWords conversion.
 *
 * @param {Object} globals
 * @api private
 */

AdWords.prototype.conversion = function(obj, fn){
  if (this.reporting) return this.wait(obj);
  this.reporting = true;
  this.debug('sending %o', obj);
  var self = this;
  var write = document.write;
  document.write = append;
  window.google_conversion_id = obj.conversionId;
  window.google_conversion_language = 'en';
  window.google_conversion_format = '3';
  window.google_conversion_color = 'ffffff';
  window.google_conversion_label = obj.label;
  window.google_conversion_value = obj.value;
  window.google_remarketing_only = false;
  load('//www.googleadservices.com/pagead/conversion.js', fn);

  function append(str){
    var el = domify(str);
    if (!el.src) return write(str);
    if (!/googleadservices/.test(el.src)) return write(str);
    self.debug('append %o', el);
    document.body.appendChild(el);
    document.write = write;
    self.reporting = null;
  }
};

/**
 * Wait until a conversion is sent with `obj`.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

AdWords.prototype.wait = function(obj){
  var self = this;
  var id = setTimeout(function(){
    clearTimeout(id);
    self.conversion(obj);
  }, 50);
};

}, {"on-body":79,"integration":81,"load-script":80,"domify":78}],

154: [function(require, module, exports) {


var integration = require('integration');
var is = require('is');
var load = require('load-script');

/**
 * User reference.
 */

var user;

/**
 * HOP
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(AdRoll);
  user = analytics.user(); // store for later
};

/**
 * Expose `AdRoll` integration.
 */

var AdRoll = exports.Integration = integration('AdRoll')
  .assumesPageview()
  .readyOnLoad()
  .global('__adroll_loaded')
  .global('adroll_adv_id')
  .global('adroll_pix_id')
  .global('adroll_custom_data')
  .option('events', {})
  .option('advId', '')
  .option('pixId', '');

/**
 * Initialize.
 *
 * http://support.adroll.com/getting-started-in-4-easy-steps/#step-one
 * http://support.adroll.com/enhanced-conversion-tracking/
 *
 * @param {Object} page
 */

AdRoll.prototype.initialize = function(page){
  window.adroll_adv_id = this.options.advId;
  window.adroll_pix_id = this.options.pixId;
  if (user.id()) window.adroll_custom_data = { USER_ID: user.id() };
  window.__adroll_loaded = true;
  this.load();
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

AdRoll.prototype.loaded = function(){
  return window.__adroll;
};

/**
 * Load the AdRoll library.
 *
 * @param {Function} callback
 */

AdRoll.prototype.load = function(callback){
  load({
    http: 'http://a.adroll.com/j/roundtrip.js',
    https: 'https://s.adroll.com/j/roundtrip.js'
  }, callback);
};

/**
 * Track.
 *
 * @param {Track} track
 */

AdRoll.prototype.track = function(track){
  var events = this.options.events;
  var total = track.revenue() || track.total();
  var event = track.event();
  if (has.call(events, event)) event = events[event];
  window.__adroll.record_user({
    adroll_conversion_value_in_dollars: total || 0,
    order_id: track.orderId() || 0,
    adroll_segments: event
  });
};

}, {"integration":81,"is":69,"load-script":80}],

21: [function(require, module, exports) {


/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Function]': return 'function';
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object String]': return 'string';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val;
};

}, {}],

155: [function(require, module, exports) {


module.exports = [
  require('./lib/adroll'),
  require('./lib/adwords'),
  require('./lib/alexa'),
  require('./lib/amplitude'),
  require('./lib/awesm'),
  require('./lib/awesomatic'),
  require('./lib/bing-ads'),
  require('./lib/bronto'),
  require('./lib/bugherd'),
  require('./lib/bugsnag'),
  require('./lib/chartbeat'),
  require('./lib/churnbee'),
  require('./lib/clicktale'),
  require('./lib/clicky'),
  require('./lib/comscore'),
  require('./lib/crazy-egg'),
  require('./lib/curebit'),
  require('./lib/customerio'),
  require('./lib/drip'),
  require('./lib/errorception'),
  require('./lib/evergage'),
  require('./lib/facebook-ads'),
  require('./lib/foxmetrics'),
  require('./lib/frontleaf'),
  require('./lib/gauges'),
  require('./lib/get-satisfaction'),
  require('./lib/google-analytics'),
  require('./lib/google-tag-manager'),
  require('./lib/gosquared'),
  require('./lib/heap'),
  require('./lib/hellobar'),
  require('./lib/hittail'),
  require('./lib/hubspot'),
  require('./lib/improvely'),
  require('./lib/inspectlet'),
  require('./lib/intercom'),
  require('./lib/keen-io'),
  require('./lib/kenshoo'),
  require('./lib/kissmetrics'),
  require('./lib/klaviyo'),
  require('./lib/leadlander'),
  require('./lib/livechat'),
  require('./lib/lucky-orange'),
  require('./lib/lytics'),
  require('./lib/mixpanel'),
  require('./lib/mojn'),
  require('./lib/mouseflow'),
  require('./lib/mousestats'),
  require('./lib/navilytics'),
  require('./lib/olark'),
  require('./lib/optimizely'),
  require('./lib/perfect-audience'),
  require('./lib/pingdom'),
  require('./lib/piwik'),
  require('./lib/preact'),
  require('./lib/qualaroo'),
  require('./lib/quantcast'),
  require('./lib/rollbar'),
  require('./lib/saasquatch'),
  require('./lib/sentry'),
  require('./lib/snapengage'),
  require('./lib/spinnakr'),
  require('./lib/tapstream'),
  require('./lib/trakio'),
  require('./lib/twitter-ads'),
  require('./lib/usercycle'),
  require('./lib/userfox'),
  require('./lib/uservoice'),
  require('./lib/vero'),
  require('./lib/visual-website-optimizer'),
  require('./lib/webengage'),
  require('./lib/woopra'),
  require('./lib/yandex-metrica')
];

}, {"./lib/adroll":154,"./lib/adwords":153,"./lib/alexa":152,"./lib/amplitude":151,"./lib/awesm":150,"./lib/awesomatic":149,"./lib/bing-ads":148,"./lib/bronto":147,"./lib/bugherd":146,"./lib/bugsnag":145,"./lib/chartbeat":144,"./lib/churnbee":143,"./lib/clicktale":142,"./lib/clicky":141,"./lib/comscore":140,"./lib/crazy-egg":139,"./lib/curebit":138,"./lib/customerio":137,"./lib/drip":136,"./lib/errorception":135,"./lib/evergage":134,"./lib/facebook-ads":133,"./lib/foxmetrics":132,"./lib/frontleaf":131,"./lib/gauges":130,"./lib/get-satisfaction":129,"./lib/google-analytics":128,"./lib/google-tag-manager":127,"./lib/gosquared":126,"./lib/heap":125,"./lib/hellobar":124,"./lib/hittail":123,"./lib/hubspot":122,"./lib/improvely":121,"./lib/inspectlet":120,"./lib/intercom":119,"./lib/keen-io":118,"./lib/kenshoo":117,"./lib/kissmetrics":116,"./lib/klaviyo":115,"./lib/leadlander":114,"./lib/livechat":113,"./lib/lucky-orange":112,"./lib/lytics":111,"./lib/mixpanel":110,"./lib/mojn":109,"./lib/mouseflow":108,"./lib/mousestats":107,"./lib/navilytics":106,"./lib/olark":105,"./lib/optimizely":104,"./lib/perfect-audience":103,"./lib/pingdom":102,"./lib/piwik":101,"./lib/preact":100,"./lib/qualaroo":99,"./lib/quantcast":98,"./lib/rollbar":97,"./lib/saasquatch":96,"./lib/sentry":95,"./lib/snapengage":94,"./lib/spinnakr":93,"./lib/tapstream":92,"./lib/trakio":91,"./lib/twitter-ads":90,"./lib/usercycle":89,"./lib/userfox":88,"./lib/uservoice":87,"./lib/vero":86,"./lib/visual-website-optimizer":85,"./lib/webengage":84,"./lib/woopra":83,"./lib/yandex-metrica":82}],

3: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var type = require('type');

/**
 * HOP reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Iterate the given `obj` and invoke `fn(val, i)`.
 *
 * @param {String|Array|Object} obj
 * @param {Function} fn
 * @api public
 */

module.exports = function(obj, fn){
  switch (type(obj)) {
    case 'array':
      return array(obj, fn);
    case 'object':
      if ('number' == typeof obj.length) return array(obj, fn);
      return object(obj, fn);
    case 'string':
      return string(obj, fn);
  }
};

/**
 * Iterate string chars.
 *
 * @param {String} obj
 * @param {Function} fn
 * @api private
 */

function string(obj, fn) {
  for (var i = 0; i < obj.length; ++i) {
    fn(obj.charAt(i), i);
  }
}

/**
 * Iterate object keys.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

function object(obj, fn) {
  for (var key in obj) {
    if (has.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

/**
 * Iterate array-ish.
 *
 * @param {Array|Object} obj
 * @param {Function} fn
 * @api private
 */

function array(obj, fn) {
  for (var i = 0; i < obj.length; ++i) {
    fn(obj[i], i);
  }
}
}, {"type":21}],

156: [function(require, module, exports) {


/**
 * Module dependencies.
 */

var each = require('each');
var plugin = require('./integrations.js');

/**
 * Expose the integrations, using their own `name` from their `prototype`.
 */

each(plugin, function(plugin){
  var name = plugin.Integration.prototype.name;
  exports[name] = plugin;
});

}, {"each":3,"./integrations.js":155}]}, {}, [156])

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvZHVvL25vZGVfbW9kdWxlcy9kdW8tYnVpbGRlci9ub2RlX21vZHVsZXMvZHVvLXBhY2svbGliL3JlcXVpcmUuanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci10aXRsZS1jYXNlLW1pbm9yc0AwLjAuMi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLW1hcEAwLjAuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbXBvbmVudC1lc2NhcGUtcmVnZXhwQDEuMC4yL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItdG8tdGl0bGUtY2FzZUAwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLXNwYWNlLWNhc2VAMC4xLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci10by1zbmFrZS1jYXNlQDAuMS4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItdG8tc2x1Zy1jYXNlQDAuMS4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItdG8tc2VudGVuY2UtY2FzZUAwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLXBhc2NhbC1jYXNlQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItdG8tbm8tY2FzZUAwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLWRvdC1jYXNlQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItdG8tY29uc3RhbnQtY2FzZUAwLjEuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLWNhcGl0YWwtY2FzZUAwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLWNhbWVsLWNhc2VAMC4xLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tbmV3LWRhdGVAMC4zLjAvbGliL3NlY29uZHMuanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tbmV3LWRhdGVAMC4zLjAvbGliL21pbGxpc2Vjb25kcy5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1pc29kYXRlQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItaXNAMC4wLjUvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci1jYXNlQDAuMS4wL2xpYi9jYXNlcy5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbXBvbmVudC10cmltQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLW5ldy1kYXRlQDAuMy4wL2xpYi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbXBvbmVudC1pbmhlcml0QDAuMC4yL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWlzb2RhdGUtdHJhdmVyc2VAMC4zLjAvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tb2JqLWNhc2VAMC4wLjYvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tZmFjYWRlQGR1by9saWIvaXMtZW5hYmxlZC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1hbmFseXRpY3MuanMtaW50ZWdyYXRpb25AMC4yLjAvbGliL2V2ZW50cy5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1hZnRlckAwLjAuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2lhbnN0b3JtdGF5bG9yLXRvLW5vLWNhc2VAMC4xLjIvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy92aXNpb25tZWRpYS1kZWJ1Z0AwLjcuMy9kZWJ1Zy5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3Zpc2lvbm1lZGlhLWRlYnVnQDAuNy4zL2xpYi9kZWJ1Zy5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1iaW5kLWFsbEAwLjAuMi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbXBvbmVudC1iaW5kQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItY2FzZUAwLjEuMC9saWIvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtZW1pdHRlckAxLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1zdWJzdGl0dXRlQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvY29tcG9uZW50LXF1ZXJ5c3RyaW5nQDEuMy4wL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL3NjcmVlbi5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1mYWNhZGVAZHVvL2xpYi9wYWdlLmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL3RyYWNrLmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL2lkZW50aWZ5LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL2dyb3VwLmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL2FsaWFzLmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL2ZhY2FkZS5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1hbmFseXRpY3MuanMtaW50ZWdyYXRpb25AMC4yLjAvbGliL3N0YXRpY3MuanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tYW5hbHl0aWNzLmpzLWludGVncmF0aW9uQDAuMi4wL2xpYi9wcm90b3MuanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9hdmV0aXNrLWRlZmF1bHRzQDAuMC40L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvdmlzaW9ubWVkaWEtZGVidWdAMC43LjMvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtY2xvbmVAMC4xLjAvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci1iaW5kQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLXRvLXVuaXgtdGltZXN0YW1wQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMveWllbGRzLXNsdWdAMS4xLjAvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy90aW1veGxleS1uZXh0LXRpY2tAMC4wLjIvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci1iaW5kQDAuMC4yL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLW9iai1jYXNlQDAuMC41L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvY29tcG9uZW50LWluZGV4b2ZAMC4wLjMvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8td2hlbkAwLjAuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3Zpc2lvbm1lZGlhLWJhdGNoQDAuNS4wL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItaXMtZW1wdHlAMC4wLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9hdmV0aXNrLWRlZmF1bHRzQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWlzLWVtYWlsQDAuMS4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvY29tcG9uZW50LXVybEAwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1jYW5vbmljYWxAMC4wLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tbG9hZC1waXhlbEAwLjEuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1jb252ZXJ0LWRhdGVzQDAuMS4wL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWFsaWFzQDAuMi4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLXRvLWlzby1zdHJpbmdAMC4wLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtY2xvbmVAMC4xLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tdXNlLWh0dHBzQDAuMS4wL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWxvYWQtZGF0ZUAwLjAuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1nbG9iYWwtcXVldWVAMC4wLjIvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tb24tZXJyb3JAMC4xLjAvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tZXh0ZW5kQDAuMC4xL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLWZhY2FkZUBkdW8vbGliL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvaWFuc3Rvcm10YXlsb3ItY2FsbGJhY2tAMC4wLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtZG9taWZ5QDEuMi4wL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvc2VnbWVudGlvLW9uLWJvZHlAMC4wLjEvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9zZWdtZW50aW8tbG9hZC1zY3JpcHRAMC4xLjAvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9pYW5zdG9ybXRheWxvci1pc0AwLjEuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9jb21wb25lbnRzL3NlZ21lbnRpby1hbmFseXRpY3MuanMtaW50ZWdyYXRpb25AMC4yLjAvbGliL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi95YW5kZXgtbWV0cmljYS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvd29vcHJhL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi93ZWJlbmdhZ2UvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL3Zpc3VhbC13ZWJzaXRlLW9wdGltaXplci9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvdmVyby9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvdXNlcnZvaWNlL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi91c2VyZm94L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi91c2VyY3ljbGUvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL3R3aXR0ZXItYWRzL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi90cmFraW8vaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL3RhcHN0cmVhbS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvc3Bpbm5ha3IvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL3NuYXBlbmdhZ2UvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL3NlbnRyeS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvc2Fhc3F1YXRjaC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvcm9sbGJhci9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvcXVhbnRjYXN0L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9xdWFsYXJvby9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvcHJlYWN0L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9waXdpay9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvcGluZ2RvbS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvcGVyZmVjdC1hdWRpZW5jZS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvb3B0aW1pemVseS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvb2xhcmsvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL25hdmlseXRpY3MvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL21vdXNlc3RhdHMvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL21vdXNlZmxvdy9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvbW9qbi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvbWl4cGFuZWwvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2x5dGljcy9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvbHVja3ktb3JhbmdlL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9saXZlY2hhdC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvbGVhZGxhbmRlci9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIva2xhdml5by9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIva2lzc21ldHJpY3MvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2tlbnNob28vaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2tlZW4taW8vaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2ludGVyY29tL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9pbnNwZWN0bGV0L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9pbXByb3ZlbHkvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2h1YnNwb3QvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2hpdHRhaWwvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2hlbGxvYmFyL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9oZWFwL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9nb3NxdWFyZWQvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2dvb2dsZS10YWctbWFuYWdlci9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvZ29vZ2xlLWFuYWx5dGljcy9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvZ2V0LXNhdGlzZmFjdGlvbi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvZ2F1Z2VzL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9mcm9udGxlYWYvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2ZveG1ldHJpY3MvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2ZhY2Vib29rLWFkcy9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvZXZlcmdhZ2UvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2Vycm9yY2VwdGlvbi9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvZHJpcC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvY3VzdG9tZXJpby9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvY3VyZWJpdC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvY3JhenktZWdnL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9jb21zY29yZS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvY2xpY2t5L2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9jbGlja3RhbGUvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2NodXJuYmVlL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9jaGFydGJlYXQvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2J1Z3NuYWcvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2J1Z2hlcmQvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2Jyb250by9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9saWIvYmluZy1hZHMvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2F3ZXNvbWF0aWMvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2F3ZXNtL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9hbXBsaXR1ZGUvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvbGliL2FsZXhhL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9hZHdvcmRzL2luZGV4LmpzIiwiL1VzZXJzL2FtaXJhYnVzaGFyZWIvZGV2L3NlZ21lbnRpby9hbmFseXRpY3MuanMtaW50ZWdyYXRpb25zL2xpYi9hZHJvbGwvaW5kZXguanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtdHlwZUAxLjAuMC9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9pbnRlZ3JhdGlvbnMuanMiLCIvVXNlcnMvYW1pcmFidXNoYXJlYi9kZXYvc2VnbWVudGlvL2FuYWx5dGljcy5qcy1pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9jb21wb25lbnQtZWFjaEAwLjAuMS9pbmRleC5qcyIsIi9Vc2Vycy9hbWlyYWJ1c2hhcmViL2Rldi9zZWdtZW50aW8vYW5hbHl0aWNzLmpzLWludGVncmF0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBQ3RCQSxBRHVCQTtBRXRDQSxBRGdCQSxBRHVCQTtBRXRDQSxBRGdCQSxBRHVCQTtBRXRDQSxBRGdCQSxBRHVCQTtBRXRDQSxBRnVDQTtBRXRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQSxBRDRCQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQ3pCQSxBRDBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBOzs7Ozs7O0FHekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUNyQkEsQURzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FGa0VBLEFFakVBO0FDVkEsQUg0RUEsQUVqRUE7QUNWQSxBSDRFQSxBRWpFQTtBQ1ZBLEFINEVBLEFFakVBO0FDVkEsQUg0RUEsQUVqRUE7QUNWQSxBSDRFQSxBRWpFQTtBQ1ZBLEFINEVBLEFFakVBO0FDVkEsQUg0RUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUEsQUVqRUE7QUZrRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FJcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBQ3hCQSxBRHlCQTtBRXhDQSxBRGdCQSxBRHlCQTtBRXhDQSxBRGdCQSxBRHlCQTtBRXhDQSxBRGdCQSxBRHlCQTtBRXhDQSxBRGdCQSxBRHlCQTtBRXhDQSxBRGdCQSxBRHlCQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBRXhDQSxBRnlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FHeERBLEFIeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSTVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQ25CQSxBRG9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FFaERBLEFGaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBR25HQSxBSG9HQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSW5KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBLEFDL0JBO0FEZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FGOEdBLEFFN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BLEFEb01BO0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBQ3hHQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQSxBRHlHQTtBRWxMQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQSxBRDBFQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQzlFQSxBRCtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkEsQUV6Q0E7QURXQSxBRCtCQSxBRXpDQTtBRFdBLEFEK0JBLEFFekNBO0FEV0EsQUQrQkEsQUV6Q0E7QURXQSxBRCtCQSxBRXpDQTtBRFdBLEFEK0JBLEFFekNBO0FEV0EsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUM5QkEsQUQrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFIeUdBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FHeEdBLEFDNUNBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBO0FJcEpBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FEdUJBLEFKcUpBLEFLM0tBO0FMNEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUEsQU12TUE7QU53TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BLEFPN09BO0FQOE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQSxBUjhSQTtBUTdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkEsQURXQTtBQ1ZBLEFEV0E7QUNWQSxBRFdBO0FDVkEsQURXQTtBQ1ZBLEFEV0E7QUNWQSxBRFdBO0FDVkEsQURXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0EsQUUzQ0E7QUY0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUc1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FDaENBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFEbUJBLEFEaUNBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FFbkRBLEFGb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBR2hGQSxBSGlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkEsQUpzSkE7QUlySkE7QUFDQSxBQ1ZBO0FEV0EsQUNWQTtBRFdBLEFDVkE7QURXQSxBQ1ZBO0FEV0EsQUNWQTtBRFdBLEFDVkE7QURXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBRWhFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBLEFEc0NBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBRDZDQSxBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBRDBDQSxBQ3pDQTtBQUNBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FDbkJBLEFEb0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUVwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUNsQkEsQURtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0EsQUYyQ0E7QUUxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBRDBEQSxBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FEMERBLEFDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUEsQURpRUE7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0EsQURvR0E7QUNuR0EsQURvR0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FDakdBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFEdUZBLEFEa0dBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBLEFGeUxBO0FFeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREEsQURvREE7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUNyR0EsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REEsQURzR0E7QUU5SkEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REEsQUR5REE7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBLEFEc0ZBO0FDckZBLEFEc0ZBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FDbEdBLEFEbUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXJNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBLEFEdUVBO0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBLEFENERBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUEsQURnRkE7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBLEFEOEZBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUMzR0EsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUQ0RkEsQUQ0R0E7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUEsQUZ3TUE7QUV2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBLEFEeURBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkEsQUR3SkE7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBLEFENkhBO0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQzFFQSxBRDJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBLEFGMktBO0FFMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQSxBRHlEQTtBQ3hEQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBLEFENkdBO0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FDakVBLEFEa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FFM0lBLEFGNElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQSxBSGlXQTtBR2hXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL01BLEFEZ05BO0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQ3REQSxBRHVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEEsQUZnTUE7QUUvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBLEFEaUZBO0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQzFEQSxBRDJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBRXZIQSxBRndIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUduTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0EsQURtR0E7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBLEFEcUZBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQSxBRDRFQTtBQzNFQSxBRDRFQTtBQzNFQSxBRDRFQTtBQzNFQSxBRDRFQTtBQzNFQSxBRDRFQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQSxBRDREQTtBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBLEFEc0VBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBLEFEbUVBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBLEFEdUdBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUNwQ0EsQURxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWxHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQSxBQ3BCQTtBRHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gb3V0ZXIobW9kdWxlcywgY2FjaGUsIGVudHJ5KSB7dmFyIHByZXZpb3VzUmVxdWlyZSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO2Z1bmN0aW9uIG5ld1JlcXVpcmUobmFtZSwganVtcGVkKXtpZighY2FjaGVbbmFtZV0pIHtpZighbW9kdWxlc1tuYW1lXSkge3ZhciBjdXJyZW50UmVxdWlyZSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO2lmICghanVtcGVkICYmIGN1cnJlbnRSZXF1aXJlKSByZXR1cm4gY3VycmVudFJlcXVpcmUobmFtZSwgdHJ1ZSk7aWYgKHByZXZpb3VzUmVxdWlyZSkgcmV0dXJuIHByZXZpb3VzUmVxdWlyZShuYW1lLCB0cnVlKTt0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcXCcnICsgbmFtZSArICdcXCcnKTt9dmFyIG0gPSBjYWNoZVtuYW1lXSA9IHtleHBvcnRzOnt9fTttb2R1bGVzW25hbWVdWzBdLmNhbGwobS5leHBvcnRzLCBmdW5jdGlvbih4KXt2YXIgaWQgPSBtb2R1bGVzW25hbWVdWzFdW3hdO3JldHVybiBuZXdSZXF1aXJlKGlkID8gaWQgOiB4KTt9LG0sbS5leHBvcnRzLG91dGVyLG1vZHVsZXMsY2FjaGUsZW50cnkpO31yZXR1cm4gY2FjaGVbbmFtZV0uZXhwb3J0czt9Zm9yKHZhciBpPTA7aTxlbnRyeS5sZW5ndGg7aSsrKSBuZXdSZXF1aXJlKGVudHJ5W2ldKTtyZXR1cm4gbmV3UmVxdWlyZTt9KSIsIlxubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdhJyxcbiAgJ2FuJyxcbiAgJ2FuZCcsXG4gICdhcycsXG4gICdhdCcsXG4gICdidXQnLFxuICAnYnknLFxuICAnZW4nLFxuICAnZm9yJyxcbiAgJ2Zyb20nLFxuICAnaG93JyxcbiAgJ2lmJyxcbiAgJ2luJyxcbiAgJ25laXRoZXInLFxuICAnbm9yJyxcbiAgJ29mJyxcbiAgJ29uJyxcbiAgJ29ubHknLFxuICAnb250bycsXG4gICdvdXQnLFxuICAnb3InLFxuICAncGVyJyxcbiAgJ3NvJyxcbiAgJ3RoYW4nLFxuICAndGhhdCcsXG4gICd0aGUnLFxuICAndG8nLFxuICAndW50aWwnLFxuICAndXAnLFxuICAndXBvbicsXG4gICd2JyxcbiAgJ3YuJyxcbiAgJ3ZlcnN1cycsXG4gICd2cycsXG4gICd2cy4nLFxuICAndmlhJyxcbiAgJ3doZW4nLFxuICAnd2l0aCcsXG4gICd3aXRob3V0JyxcbiAgJ3lldCdcbl07IiwiXG52YXIgZWFjaCA9IHJlcXVpcmUoJ2VhY2gnKTtcblxuXG4vKipcbiAqIE1hcCBhbiBhcnJheSBvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0b3JcbiAqIEByZXR1cm4ge01peGVkfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWFwIChvYmosIGl0ZXJhdG9yKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZWFjaChvYmosIGZ1bmN0aW9uIChvKSB7XG4gICAgYXJyLnB1c2goaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufTsiLCJcbi8qKlxuICogRXNjYXBlIHJlZ2V4cCBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8oWy4qKz89XiE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59OyIsIlxudmFyIGNhcGl0YWwgPSByZXF1aXJlKCd0by1jYXBpdGFsLWNhc2UnKVxuICAsIGVzY2FwZSA9IHJlcXVpcmUoJ2VzY2FwZS1yZWdleHAnKVxuICAsIG1hcCA9IHJlcXVpcmUoJ21hcCcpXG4gICwgbWlub3JzID0gcmVxdWlyZSgndGl0bGUtY2FzZS1taW5vcnMnKTtcblxuXG4vKipcbiAqIEV4cG9zZSBgdG9UaXRsZUNhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9UaXRsZUNhc2U7XG5cblxuLyoqXG4gKiBNaW5vcnMuXG4gKi9cblxudmFyIGVzY2FwZWQgPSBtYXAobWlub3JzLCBlc2NhcGUpO1xudmFyIG1pbm9yTWF0Y2hlciA9IG5ldyBSZWdFeHAoJ1teXl1cXFxcYignICsgZXNjYXBlZC5qb2luKCd8JykgKyAnKVxcXFxiJywgJ2lnJyk7XG52YXIgY29sb25NYXRjaGVyID0gLzpcXHMqKFxcdykvZztcblxuXG4vKipcbiAqIENvbnZlcnQgYSBgc3RyaW5nYCB0byBjYW1lbCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvVGl0bGVDYXNlIChzdHJpbmcpIHtcbiAgcmV0dXJuIGNhcGl0YWwoc3RyaW5nKVxuICAgIC5yZXBsYWNlKG1pbm9yTWF0Y2hlciwgZnVuY3Rpb24gKG1pbm9yKSB7XG4gICAgICByZXR1cm4gbWlub3IudG9Mb3dlckNhc2UoKTtcbiAgICB9KVxuICAgIC5yZXBsYWNlKGNvbG9uTWF0Y2hlciwgZnVuY3Rpb24gKGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufSIsIlxudmFyIGNsZWFuID0gcmVxdWlyZSgndG8tbm8tY2FzZScpO1xuXG5cbi8qKlxuICogRXhwb3NlIGB0b1NwYWNlQ2FzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NwYWNlQ2FzZTtcblxuXG4vKipcbiAqIENvbnZlcnQgYSBgc3RyaW5nYCB0byBzcGFjZSBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvU3BhY2VDYXNlIChzdHJpbmcpIHtcbiAgcmV0dXJuIGNsZWFuKHN0cmluZykucmVwbGFjZSgvW1xcV19dKygufCQpL2csIGZ1bmN0aW9uIChtYXRjaGVzLCBtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaCA/ICcgJyArIG1hdGNoIDogJyc7XG4gIH0pO1xufSIsInZhciB0b1NwYWNlID0gcmVxdWlyZSgndG8tc3BhY2UtY2FzZScpO1xuXG5cbi8qKlxuICogRXhwb3NlIGB0b1NuYWtlQ2FzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NuYWtlQ2FzZTtcblxuXG4vKipcbiAqIENvbnZlcnQgYSBgc3RyaW5nYCB0byBzbmFrZSBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvU25ha2VDYXNlIChzdHJpbmcpIHtcbiAgcmV0dXJuIHRvU3BhY2Uoc3RyaW5nKS5yZXBsYWNlKC9cXHMvZywgJ18nKTtcbn1cbiIsIlxudmFyIHRvU3BhY2UgPSByZXF1aXJlKCd0by1zcGFjZS1jYXNlJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYHRvU2x1Z0Nhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9TbHVnQ2FzZTtcblxuXG4vKipcbiAqIENvbnZlcnQgYSBgc3RyaW5nYCB0byBzbHVnIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gdG9TbHVnQ2FzZSAoc3RyaW5nKSB7XG4gIHJldHVybiB0b1NwYWNlKHN0cmluZykucmVwbGFjZSgvXFxzL2csICctJyk7XG59IiwiXG52YXIgY2xlYW4gPSByZXF1aXJlKCd0by1uby1jYXNlJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYHRvU2VudGVuY2VDYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU2VudGVuY2VDYXNlO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIGNhbWVsIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gdG9TZW50ZW5jZUNhc2UgKHN0cmluZykge1xuICByZXR1cm4gY2xlYW4oc3RyaW5nKS5yZXBsYWNlKC9bYS16XS9pLCBmdW5jdGlvbiAobGV0dGVyKSB7XG4gICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn0iLCJcbnZhciB0b1NwYWNlID0gcmVxdWlyZSgndG8tc3BhY2UtY2FzZScpO1xuXG5cbi8qKlxuICogRXhwb3NlIGB0b1Bhc2NhbENhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9QYXNjYWxDYXNlO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIHBhc2NhbCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvUGFzY2FsQ2FzZSAoc3RyaW5nKSB7XG4gIHJldHVybiB0b1NwYWNlKHN0cmluZykucmVwbGFjZSgvKD86XnxcXHMpKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZXMsIGxldHRlcikge1xuICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IiwiXG4vKipcbiAqIEV4cG9zZSBgdG9Ob0Nhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Ob0Nhc2U7XG5cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgaXMgY2FtZWwtY2FzZS5cbiAqL1xuXG52YXIgaGFzU3BhY2UgPSAvXFxzLztcbnZhciBoYXNDYW1lbCA9IC9bYS16XVtBLVpdLztcbnZhciBoYXNTZXBhcmF0b3IgPSAvW1xcV19dLztcblxuXG4vKipcbiAqIFJlbW92ZSBhbnkgc3RhcnRpbmcgY2FzZSBmcm9tIGEgYHN0cmluZ2AsIGxpa2UgY2FtZWwgb3Igc25ha2UsIGJ1dCBrZWVwXG4gKiBzcGFjZXMgYW5kIHB1bmN0dWF0aW9uIHRoYXQgbWF5IGJlIGltcG9ydGFudCBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvTm9DYXNlIChzdHJpbmcpIHtcbiAgaWYgKGhhc1NwYWNlLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChoYXNTZXBhcmF0b3IudGVzdChzdHJpbmcpKSBzdHJpbmcgPSB1bnNlcGFyYXRlKHN0cmluZyk7XG4gIGlmIChoYXNDYW1lbC50ZXN0KHN0cmluZykpIHN0cmluZyA9IHVuY2FtZWxpemUoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xufVxuXG5cbi8qKlxuICogU2VwYXJhdG9yIHNwbGl0dGVyLlxuICovXG5cbnZhciBzZXBhcmF0b3JTcGxpdHRlciA9IC9bXFxXX10rKC58JCkvZztcblxuXG4vKipcbiAqIFVuLXNlcGFyYXRlIGEgYHN0cmluZ2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHVuc2VwYXJhdGUgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uoc2VwYXJhdG9yU3BsaXR0ZXIsIGZ1bmN0aW9uIChtLCBuZXh0KSB7XG4gICAgcmV0dXJuIG5leHQgPyAnICcgKyBuZXh0IDogJyc7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogQ2FtZWxjYXNlIHNwbGl0dGVyLlxuICovXG5cbnZhciBjYW1lbFNwbGl0dGVyID0gLyguKShbQS1aXSspL2c7XG5cblxuLyoqXG4gKiBVbi1jYW1lbGNhc2UgYSBgc3RyaW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdW5jYW1lbGl6ZSAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShjYW1lbFNwbGl0dGVyLCBmdW5jdGlvbiAobSwgcHJldmlvdXMsIHVwcGVycykge1xuICAgIHJldHVybiBwcmV2aW91cyArICcgJyArIHVwcGVycy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcnKS5qb2luKCcgJyk7XG4gIH0pO1xufSIsIlxudmFyIHRvU3BhY2UgPSByZXF1aXJlKCd0by1zcGFjZS1jYXNlJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYHRvRG90Q2FzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b0RvdENhc2U7XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gc2x1ZyBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvRG90Q2FzZSAoc3RyaW5nKSB7XG4gIHJldHVybiB0b1NwYWNlKHN0cmluZykucmVwbGFjZSgvXFxzL2csICcuJyk7XG59IiwiXG52YXIgc25ha2UgPSByZXF1aXJlKCd0by1zbmFrZS1jYXNlJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYHRvQ29uc3RhbnRDYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ29uc3RhbnRDYXNlO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIGNvbnN0YW50IGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db25zdGFudENhc2UgKHN0cmluZykge1xuICByZXR1cm4gc25ha2Uoc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xufSIsIlxudmFyIGNsZWFuID0gcmVxdWlyZSgndG8tbm8tY2FzZScpO1xuXG5cbi8qKlxuICogRXhwb3NlIGB0b0NhcGl0YWxDYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ2FwaXRhbENhc2U7XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gY2FwaXRhbCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ2FwaXRhbENhc2UgKHN0cmluZykge1xuICByZXR1cm4gY2xlYW4oc3RyaW5nKS5yZXBsYWNlKC8oXnxcXHMpKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZXMsIHByZXZpb3VzLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gcHJldmlvdXMgKyBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IiwiXG52YXIgdG9TcGFjZSA9IHJlcXVpcmUoJ3RvLXNwYWNlLWNhc2UnKTtcblxuXG4vKipcbiAqIEV4cG9zZSBgdG9DYW1lbENhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9DYW1lbENhc2U7XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gY2FtZWwgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NhbWVsQ2FzZSAoc3RyaW5nKSB7XG4gIHJldHVybiB0b1NwYWNlKHN0cmluZykucmVwbGFjZSgvXFxzKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZXMsIGxldHRlcikge1xuICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IiwiXG4vKipcbiAqIE1hdGNoZXIuXG4gKi9cblxudmFyIG1hdGNoZXIgPSAvXFxkezEwfS87XG5cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgc3RyaW5nIGlzIGEgc2Vjb25kIGRhdGUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pcyA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIG1hdGNoZXIudGVzdChzdHJpbmcpO1xufTtcblxuXG4vKipcbiAqIENvbnZlcnQgYSBzZWNvbmQgc3RyaW5nIHRvIGEgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2Vjb25kc1xuICogQHJldHVybiB7RGF0ZX1cbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcbiAgdmFyIG1pbGxpcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKSAqIDEwMDA7XG4gIHJldHVybiBuZXcgRGF0ZShtaWxsaXMpO1xufTsiLCJcbi8qKlxuICogTWF0Y2hlci5cbiAqL1xuXG52YXIgbWF0Y2hlciA9IC9cXGR7MTN9LztcblxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBzdHJpbmcgaXMgYSBtaWxsaXNlY29uZCBkYXRlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMuaXMgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBtYXRjaGVyLnRlc3Qoc3RyaW5nKTtcbn07XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgbWlsbGlzZWNvbmQgc3RyaW5nIHRvIGEgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWlsbGlzXG4gKiBAcmV0dXJuIHtEYXRlfVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAobWlsbGlzKSB7XG4gIG1pbGxpcyA9IHBhcnNlSW50KG1pbGxpcywgMTApO1xuICByZXR1cm4gbmV3IERhdGUobWlsbGlzKTtcbn07IiwiXG4vKipcbiAqIE1hdGNoZXIsIHNsaWdodGx5IG1vZGlmaWVkIGZyb206XG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nzbm92ZXIvanMtaXNvODYwMS9ibG9iL2xheC9pc284NjAxLmpzXG4gKi9cblxudmFyIG1hdGNoZXIgPSAvXihcXGR7NH0pKD86LT8oXFxkezJ9KSg/Oi0/KFxcZHsyfSkpPyk/KD86KFsgVF0pKFxcZHsyfSk6PyhcXGR7Mn0pKD86Oj8oXFxkezJ9KSg/OlssXFwuXShcXGR7MSx9KSk/KT8oPzooWil8KFsrXFwtXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyk/KT8kLztcblxuXG4vKipcbiAqIENvbnZlcnQgYW4gSVNPIGRhdGUgc3RyaW5nIHRvIGEgZGF0ZS4gRmFsbGJhY2sgdG8gbmF0aXZlIGBEYXRlLnBhcnNlYC5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY3Nub3Zlci9qcy1pc284NjAxL2Jsb2IvbGF4L2lzbzg2MDEuanNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaXNvXG4gKiBAcmV0dXJuIHtEYXRlfVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoaXNvKSB7XG4gIHZhciBudW1lcmljS2V5cyA9IFsxLCA1LCA2LCA3LCA4LCAxMSwgMTJdO1xuICB2YXIgYXJyID0gbWF0Y2hlci5leGVjKGlzbyk7XG4gIHZhciBvZmZzZXQgPSAwO1xuXG4gIC8vIGZhbGxiYWNrIHRvIG5hdGl2ZSBwYXJzaW5nXG4gIGlmICghYXJyKSByZXR1cm4gbmV3IERhdGUoaXNvKTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIHZhbHVlc1xuICBmb3IgKHZhciBpID0gMCwgdmFsOyB2YWwgPSBudW1lcmljS2V5c1tpXTsgaSsrKSB7XG4gICAgYXJyW3ZhbF0gPSBwYXJzZUludChhcnJbdmFsXSwgMTApIHx8IDA7XG4gIH1cblxuICAvLyBhbGxvdyB1bmRlZmluZWQgZGF5cyBhbmQgbW9udGhzXG4gIGFyclsyXSA9IHBhcnNlSW50KGFyclsyXSwgMTApIHx8IDE7XG4gIGFyclszXSA9IHBhcnNlSW50KGFyclszXSwgMTApIHx8IDE7XG5cbiAgLy8gbW9udGggaXMgMC0xMVxuICBhcnJbMl0tLTtcblxuICAvLyBhbGxvdyBhYml0cmFyeSBzdWItc2Vjb25kIHByZWNpc2lvblxuICBpZiAoYXJyWzhdKSBhcnJbOF0gPSAoYXJyWzhdICsgJzAwJykuc3Vic3RyaW5nKDAsIDMpO1xuXG4gIC8vIGFwcGx5IHRpbWV6b25lIGlmIG9uZSBleGlzdHNcbiAgaWYgKGFycls0XSA9PSAnICcpIHtcbiAgICBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH0gZWxzZSBpZiAoYXJyWzldICE9PSAnWicgJiYgYXJyWzEwXSkge1xuICAgIG9mZnNldCA9IGFyclsxMV0gKiA2MCArIGFyclsxMl07XG4gICAgaWYgKCcrJyA9PSBhcnJbMTBdKSBvZmZzZXQgPSAwIC0gb2Zmc2V0O1xuICB9XG5cbiAgdmFyIG1pbGxpcyA9IERhdGUuVVRDKGFyclsxXSwgYXJyWzJdLCBhcnJbM10sIGFycls1XSwgYXJyWzZdICsgb2Zmc2V0LCBhcnJbN10sIGFycls4XSk7XG4gIHJldHVybiBuZXcgRGF0ZShtaWxsaXMpO1xufTtcblxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgYHN0cmluZ2AgaXMgYW4gSVNPIGRhdGUgc3RyaW5nLiBgc3RyaWN0YCBtb2RlIHJlcXVpcmVzIHRoYXRcbiAqIHRoZSBkYXRlIHN0cmluZyBhdCBsZWFzdCBoYXZlIGEgeWVhciwgbW9udGggYW5kIGRhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pcyA9IGZ1bmN0aW9uIChzdHJpbmcsIHN0cmljdCkge1xuICBpZiAoc3RyaWN0ICYmIGZhbHNlID09PSAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9Ly50ZXN0KHN0cmluZykpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIG1hdGNoZXIudGVzdChzdHJpbmcpO1xufTsiLCJcbnZhciBpc0VtcHR5ID0gcmVxdWlyZSgnaXMtZW1wdHknKVxuICAsIHR5cGVPZiA9IHJlcXVpcmUoJ3R5cGUnKTtcblxuXG4vKipcbiAqIFR5cGVzLlxuICovXG5cbnZhciB0eXBlcyA9IFtcbiAgJ2FyZ3VtZW50cycsXG4gICdhcnJheScsXG4gICdib29sZWFuJyxcbiAgJ2RhdGUnLFxuICAnZWxlbWVudCcsXG4gICdmdW5jdGlvbicsXG4gICdudWxsJyxcbiAgJ251bWJlcicsXG4gICdvYmplY3QnLFxuICAncmVnZXhwJyxcbiAgJ3N0cmluZycsXG4gICd1bmRlZmluZWQnXG5dO1xuXG5cbi8qKlxuICogRXhwb3NlIHR5cGUgY2hlY2tlcnMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZm9yICh2YXIgaSA9IDAsIHR5cGU7IHR5cGUgPSB0eXBlc1tpXTsgaSsrKSBleHBvcnRzW3R5cGVdID0gZ2VuZXJhdGUodHlwZSk7XG5cblxuLyoqXG4gKiBBZGQgYWxpYXMgZm9yIGBmdW5jdGlvbmAgZm9yIG9sZCBicm93c2Vycy5cbiAqL1xuXG5leHBvcnRzLmZuID0gZXhwb3J0c1snZnVuY3Rpb24nXTtcblxuXG4vKipcbiAqIEV4cG9zZSBgZW1wdHlgIGNoZWNrLlxuICovXG5cbmV4cG9ydHMuZW1wdHkgPSBpc0VtcHR5O1xuXG5cbi8qKlxuICogRXhwb3NlIGBuYW5gIGNoZWNrLlxuICovXG5cbmV4cG9ydHMubmFuID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gZXhwb3J0cy5udW1iZXIodmFsKSAmJiB2YWwgIT0gdmFsO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdHlwZSBjaGVja2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSAodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IHR5cGVPZih2YWx1ZSk7XG4gIH07XG59IiwiXG52YXIgY2FtZWwgPSByZXF1aXJlKCd0by1jYW1lbC1jYXNlJylcbiAgLCBjYXBpdGFsID0gcmVxdWlyZSgndG8tY2FwaXRhbC1jYXNlJylcbiAgLCBjb25zdGFudCA9IHJlcXVpcmUoJ3RvLWNvbnN0YW50LWNhc2UnKVxuICAsIGRvdCA9IHJlcXVpcmUoJ3RvLWRvdC1jYXNlJylcbiAgLCBub25lID0gcmVxdWlyZSgndG8tbm8tY2FzZScpXG4gICwgcGFzY2FsID0gcmVxdWlyZSgndG8tcGFzY2FsLWNhc2UnKVxuICAsIHNlbnRlbmNlID0gcmVxdWlyZSgndG8tc2VudGVuY2UtY2FzZScpXG4gICwgc2x1ZyA9IHJlcXVpcmUoJ3RvLXNsdWctY2FzZScpXG4gICwgc25ha2UgPSByZXF1aXJlKCd0by1zbmFrZS1jYXNlJylcbiAgLCBzcGFjZSA9IHJlcXVpcmUoJ3RvLXNwYWNlLWNhc2UnKVxuICAsIHRpdGxlID0gcmVxdWlyZSgndG8tdGl0bGUtY2FzZScpO1xuXG5cbi8qKlxuICogQ2FtZWwuXG4gKi9cblxuZXhwb3J0cy5jYW1lbCA9IGNhbWVsO1xuXG5cbi8qKlxuICogUGFzY2FsLlxuICovXG5cbmV4cG9ydHMucGFzY2FsID0gcGFzY2FsO1xuXG5cbi8qKlxuICogRG90LiBTaG91bGQgcHJlY2VkZSBsb3dlcmNhc2UuXG4gKi9cblxuZXhwb3J0cy5kb3QgPSBkb3Q7XG5cblxuLyoqXG4gKiBTbHVnLiBTaG91bGQgcHJlY2VkZSBsb3dlcmNhc2UuXG4gKi9cblxuZXhwb3J0cy5zbHVnID0gc2x1ZztcblxuXG4vKipcbiAqIFNuYWtlLiBTaG91bGQgcHJlY2VkZSBsb3dlcmNhc2UuXG4gKi9cblxuZXhwb3J0cy5zbmFrZSA9IHNuYWtlO1xuXG5cbi8qKlxuICogU3BhY2UuIFNob3VsZCBwcmVjZWRlIGxvd2VyY2FzZS5cbiAqL1xuXG5leHBvcnRzLnNwYWNlID0gc3BhY2U7XG5cblxuLyoqXG4gKiBDb25zdGFudC4gU2hvdWxkIHByZWNlZGUgdXBwZXJjYXNlLlxuICovXG5cbmV4cG9ydHMuY29uc3RhbnQgPSBjb25zdGFudDtcblxuXG4vKipcbiAqIENhcGl0YWwuIFNob3VsZCBwcmVjZWRlIHNlbnRlbmNlIGFuZCB0aXRsZS5cbiAqL1xuXG5leHBvcnRzLmNhcGl0YWwgPSBjYXBpdGFsO1xuXG5cbi8qKlxuICogVGl0bGUuXG4gKi9cblxuZXhwb3J0cy50aXRsZSA9IHRpdGxlO1xuXG5cbi8qKlxuICogU2VudGVuY2UuXG4gKi9cblxuZXhwb3J0cy5zZW50ZW5jZSA9IHNlbnRlbmNlO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIGxvd2VyIGNhc2UgZnJvbSBjYW1lbCwgc2x1ZywgZXRjLiBEaWZmZXJlbnQgdGhhdCB0aGVcbiAqIHVzdWFsIGB0b0xvd2VyQ2FzZWAgaW4gdGhhdCBpdCB3aWxsIHRyeSB0byBicmVhayBhcGFydCB0aGUgaW5wdXQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMubG93ZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBub25lKHN0cmluZykudG9Mb3dlckNhc2UoKTtcbn07XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZSBmcm9tIGNhbWVsLCBzbHVnLCBldGMuIERpZmZlcmVudCB0aGF0IHRoZVxuICogdXN1YWwgYHRvVXBwZXJDYXNlYCBpbiB0aGF0IGl0IHdpbGwgdHJ5IHRvIGJyZWFrIGFwYXJ0IHRoZSBpbnB1dCBmaXJzdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy51cHBlciA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIG5vbmUoc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xufTtcblxuXG4vKipcbiAqIEludmVydCBlYWNoIGNoYXJhY3RlciBpbiBhIGBzdHJpbmdgIGZyb20gdXBwZXIgdG8gbG93ZXIgYW5kIHZpY2UgdmVyc2EuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuaW52ZXJzZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGNoYXI7IGNoYXIgPSBzdHJpbmdbaV07IGkrKykge1xuICAgIGlmICghL1thLXpdL2kudGVzdChjaGFyKSkgY29udGludWU7XG4gICAgdmFyIHVwcGVyID0gY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBsb3dlciA9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICBzdHJpbmdbaV0gPSBjaGFyID09IHVwcGVyID8gbG93ZXIgOiB1cHBlcjtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufTtcblxuXG4vKipcbiAqIE5vbmUuXG4gKi9cblxuZXhwb3J0cy5ub25lID0gbm9uZTsiLCJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaW07XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKXtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydHMubGVmdCA9IGZ1bmN0aW9uKHN0cil7XG4gIGlmIChzdHIudHJpbUxlZnQpIHJldHVybiBzdHIudHJpbUxlZnQoKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICBpZiAoc3RyLnRyaW1SaWdodCkgcmV0dXJuIHN0ci50cmltUmlnaHQoKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn07XG4iLCJcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgaXNvZGF0ZSA9IHJlcXVpcmUoJ2lzb2RhdGUnKTtcbnZhciBtaWxsaXNlY29uZHMgPSByZXF1aXJlKCcuL21pbGxpc2Vjb25kcycpO1xudmFyIHNlY29uZHMgPSByZXF1aXJlKCcuL3NlY29uZHMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgSmF2YXNjcmlwdCBEYXRlIG9iamVjdCwgYWxsb3dpbmcgYSB2YXJpZXR5IG9mIGV4dHJhIGlucHV0IHR5cGVzXG4gKiBvdmVyIHRoZSBuYXRpdmUgRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gdmFsXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBuZXdEYXRlICh2YWwpIHtcbiAgaWYgKGlzLmRhdGUodmFsKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzLm51bWJlcih2YWwpKSByZXR1cm4gbmV3IERhdGUodG9Ncyh2YWwpKTtcblxuICAvLyBkYXRlIHN0cmluZ3NcbiAgaWYgKGlzb2RhdGUuaXModmFsKSkgcmV0dXJuIGlzb2RhdGUucGFyc2UodmFsKTtcbiAgaWYgKG1pbGxpc2Vjb25kcy5pcyh2YWwpKSByZXR1cm4gbWlsbGlzZWNvbmRzLnBhcnNlKHZhbCk7XG4gIGlmIChzZWNvbmRzLmlzKHZhbCkpIHJldHVybiBzZWNvbmRzLnBhcnNlKHZhbCk7XG5cbiAgLy8gZmFsbGJhY2sgdG8gRGF0ZS5wYXJzZVxuICByZXR1cm4gbmV3IERhdGUodmFsKTtcbn07XG5cblxuLyoqXG4gKiBJZiB0aGUgbnVtYmVyIHBhc3NlZCB2YWwgaXMgc2Vjb25kcyBmcm9tIHRoZSBlcG9jaCwgdHVybiBpdCBpbnRvIG1pbGxpc2Vjb25kcy5cbiAqIE1pbGxpc2Vjb25kcyB3b3VsZCBiZSBncmVhdGVyIHRoYW4gMzE1NTc2MDAwMDAgKERlY2VtYmVyIDMxLCAxOTcwKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtXG4gKi9cblxuZnVuY3Rpb24gdG9NcyAobnVtKSB7XG4gIGlmIChudW0gPCAzMTU1NzYwMDAwMCkgcmV0dXJuIG51bSAqIDEwMDA7XG4gIHJldHVybiBudW07XG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgZm4gPSBmdW5jdGlvbigpe307XG4gIGZuLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICBhLnByb3RvdHlwZSA9IG5ldyBmbjtcbiAgYS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBhO1xufTsiLCJcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgaXNvZGF0ZSA9IHJlcXVpcmUoJ2lzb2RhdGUnKTtcbnZhciBlYWNoO1xuXG50cnkge1xuICBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGVhY2ggPSByZXF1aXJlKCdlYWNoLWNvbXBvbmVudCcpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgdHJhdmVyc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdHJhdmVyc2U7XG5cbi8qKlxuICogVHJhdmVyc2UgYW4gb2JqZWN0IG9yIGFycmF5LCBhbmQgcmV0dXJuIGEgY2xvbmUgd2l0aCBhbGwgSVNPIHN0cmluZ3MgcGFyc2VkXG4gKiBpbnRvIERhdGUgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gdHJhdmVyc2UgKGlucHV0LCBzdHJpY3QpIHtcbiAgaWYgKHN0cmljdCA9PT0gdW5kZWZpbmVkKSBzdHJpY3QgPSB0cnVlO1xuXG4gIGlmIChpcy5vYmplY3QoaW5wdXQpKSB7XG4gICAgcmV0dXJuIG9iamVjdChpbnB1dCwgc3RyaWN0KTtcbiAgfSBlbHNlIGlmIChpcy5hcnJheShpbnB1dCkpIHtcbiAgICByZXR1cm4gYXJyYXkoaW5wdXQsIHN0cmljdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBPYmplY3QgdHJhdmVyc2VyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gb2JqZWN0IChvYmosIHN0cmljdCkge1xuICBlYWNoKG9iaiwgZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgaWYgKGlzb2RhdGUuaXModmFsLCBzdHJpY3QpKSB7XG4gICAgICBvYmpba2V5XSA9IGlzb2RhdGUucGFyc2UodmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzLm9iamVjdCh2YWwpIHx8IGlzLmFycmF5KHZhbCkpIHtcbiAgICAgIHRyYXZlcnNlKHZhbCwgc3RyaWN0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEFycmF5IHRyYXZlcnNlci5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5mdW5jdGlvbiBhcnJheSAoYXJyLCBzdHJpY3QpIHtcbiAgZWFjaChhcnIsIGZ1bmN0aW9uICh2YWwsIHgpIHtcbiAgICBpZiAoaXMub2JqZWN0KHZhbCkpIHtcbiAgICAgIHRyYXZlcnNlKHZhbCwgc3RyaWN0KTtcbiAgICB9IGVsc2UgaWYgKGlzb2RhdGUuaXModmFsLCBzdHJpY3QpKSB7XG4gICAgICBhcnJbeF0gPSBpc29kYXRlLnBhcnNlKHZhbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cbiIsIlxudmFyIENhc2UgPSByZXF1aXJlKCdjYXNlJyk7XG5cblxudmFyIGNhc2VzID0gW1xuICBDYXNlLnVwcGVyLFxuICBDYXNlLmxvd2VyLFxuICBDYXNlLnNuYWtlLFxuICBDYXNlLnBhc2NhbCxcbiAgQ2FzZS5jYW1lbCxcbiAgQ2FzZS5jb25zdGFudCxcbiAgQ2FzZS50aXRsZSxcbiAgQ2FzZS5jYXBpdGFsLFxuICBDYXNlLnNlbnRlbmNlXG5dO1xuXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMsIGV4cG9ydFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZmluZCA9IG11bHRpcGxlKGZpbmQpO1xuXG5cbi8qKlxuICogRXhwb3J0IHRoZSByZXBsYWNlbWVudCBmdW5jdGlvbiwgcmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5yZXBsYWNlID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWwpIHtcbiAgbXVsdGlwbGUocmVwbGFjZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLyoqXG4gKiBFeHBvcnQgdGhlIGRlbGV0ZSBmdW5jdGlvbiwgcmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3RcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5kZWwgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgbXVsdGlwbGUoZGVsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICByZXR1cm4gb2JqO1xufTtcblxuXG4vKipcbiAqIENvbXBvc2UgYXBwbHlpbmcgdGhlIGZ1bmN0aW9uIHRvIGEgbmVzdGVkIGtleVxuICovXG5cbmZ1bmN0aW9uIG11bHRpcGxlIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWwpIHtcbiAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgb2JqID0gZmluZChvYmosIGtleSk7XG5cbiAgICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICB9XG5cbiAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIGZuKG9iaiwga2V5LCB2YWwpO1xuICB9O1xufVxuXG5cbi8qKlxuICogRmluZCBhbiBvYmplY3QgYnkgaXRzIGtleVxuICpcbiAqIGZpbmQoeyBmaXJzdF9uYW1lIDogJ0NhbHZpbicgfSwgJ2ZpcnN0TmFtZScpXG4gKi9cblxuZnVuY3Rpb24gZmluZCAob2JqLCBrZXkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjYXNlZCA9IGNhc2VzW2ldKGtleSk7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShjYXNlZCkpIHJldHVybiBvYmpbY2FzZWRdO1xuICB9XG59XG5cblxuLyoqXG4gKiBEZWxldGUgYSB2YWx1ZSBmb3IgYSBnaXZlbiBrZXlcbiAqXG4gKiBkZWwoeyBhIDogJ2InLCB4IDogJ3knIH0sICdYJyB9KSAtPiB7IGEgOiAnYicgfVxuICovXG5cbmZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjYXNlZCA9IGNhc2VzW2ldKGtleSk7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShjYXNlZCkpIGRlbGV0ZSBvYmpbY2FzZWRdO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBSZXBsYWNlIGFuIG9iamVjdHMgZXhpc3RpbmcgdmFsdWUgd2l0aCBhIG5ldyBvbmVcbiAqXG4gKiByZXBsYWNlKHsgYSA6ICdiJyB9LCAnYScsICdjJykgLT4geyBhIDogJ2MnIH1cbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlIChvYmosIGtleSwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2FzZWQgPSBjYXNlc1tpXShrZXkpO1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoY2FzZWQpKSBvYmpbY2FzZWRdID0gdmFsO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG4iLCJcbi8qKlxuICogQSBmZXcgaW50ZWdyYXRpb25zIGFyZSBkaXNhYmxlZCBieSBkZWZhdWx0LiBUaGV5IG11c3QgYmUgZXhwbGljaXRseVxuICogZW5hYmxlZCBieSBzZXR0aW5nIG9wdGlvbnNbUHJvdmlkZXJdID0gdHJ1ZS5cbiAqL1xuXG52YXIgZGlzYWJsZWQgPSB7XG4gIFNhbGVzZm9yY2U6IHRydWUsXG4gIE1hcmtldG86IHRydWVcbn07XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBpbnRlZ3JhdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBieSBkZWZhdWx0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnRlZ3JhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnRlZ3JhdGlvbikge1xuICByZXR1cm4gISBkaXNhYmxlZFtpbnRlZ3JhdGlvbl07XG59OyIsIlxuLyoqXG4gKiBFeHBvc2UgYGV2ZW50c2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVtb3ZlZFByb2R1Y3Q6IC9yZW1vdmVkIHByb2R1Y3QvaSxcbiAgdmlld2VkUHJvZHVjdDogL3ZpZXdlZCBwcm9kdWN0L2ksXG4gIGFkZGVkUHJvZHVjdDogL2FkZGVkIHByb2R1Y3QvaSxcbiAgY29tcGxldGVkT3JkZXI6IC9jb21wbGV0ZWQgb3JkZXIvaVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhZnRlciAodGltZXMsIGZ1bmMpIHtcbiAgLy8gQWZ0ZXIgMCwgcmVhbGx5P1xuICBpZiAodGltZXMgPD0gMCkgcmV0dXJuIGZ1bmMoKTtcblxuICAvLyBUaGF0J3MgbW9yZSBsaWtlIGl0LlxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn07IiwiXG4vKipcbiAqIEV4cG9zZSBgdG9Ob0Nhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Ob0Nhc2U7XG5cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgaXMgY2FtZWwtY2FzZS5cbiAqL1xuXG52YXIgaGFzU3BhY2UgPSAvXFxzLztcbnZhciBoYXNTZXBhcmF0b3IgPSAvW1xcV19dLztcblxuXG4vKipcbiAqIFJlbW92ZSBhbnkgc3RhcnRpbmcgY2FzZSBmcm9tIGEgYHN0cmluZ2AsIGxpa2UgY2FtZWwgb3Igc25ha2UsIGJ1dCBrZWVwXG4gKiBzcGFjZXMgYW5kIHB1bmN0dWF0aW9uIHRoYXQgbWF5IGJlIGltcG9ydGFudCBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvTm9DYXNlIChzdHJpbmcpIHtcbiAgaWYgKGhhc1NwYWNlLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICBpZiAoaGFzU2VwYXJhdG9yLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHVuc2VwYXJhdGUoc3RyaW5nKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gdW5jYW1lbGl6ZShzdHJpbmcpLnRvTG93ZXJDYXNlKCk7XG59XG5cblxuLyoqXG4gKiBTZXBhcmF0b3Igc3BsaXR0ZXIuXG4gKi9cblxudmFyIHNlcGFyYXRvclNwbGl0dGVyID0gL1tcXFdfXSsoLnwkKS9nO1xuXG5cbi8qKlxuICogVW4tc2VwYXJhdGUgYSBgc3RyaW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdW5zZXBhcmF0ZSAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShzZXBhcmF0b3JTcGxpdHRlciwgZnVuY3Rpb24gKG0sIG5leHQpIHtcbiAgICByZXR1cm4gbmV4dCA/ICcgJyArIG5leHQgOiAnJztcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBDYW1lbGNhc2Ugc3BsaXR0ZXIuXG4gKi9cblxudmFyIGNhbWVsU3BsaXR0ZXIgPSAvKC4pKFtBLVpdKykvZztcblxuXG4vKipcbiAqIFVuLWNhbWVsY2FzZSBhIGBzdHJpbmdgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB1bmNhbWVsaXplIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGNhbWVsU3BsaXR0ZXIsIGZ1bmN0aW9uIChtLCBwcmV2aW91cywgdXBwZXJzKSB7XG4gICAgcmV0dXJuIHByZXZpb3VzICsgJyAnICsgdXBwZXJzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpLmpvaW4oJyAnKTtcbiAgfSk7XG59IiwiXG4vKipcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVnO1xuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7VHlwZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGVidWcobmFtZSkge1xuICBpZiAoIWRlYnVnLmVuYWJsZWQobmFtZSkpIHJldHVybiBmdW5jdGlvbigpe307XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZtdCl7XG4gICAgZm10ID0gY29lcmNlKGZtdCk7XG5cbiAgICB2YXIgY3VyciA9IG5ldyBEYXRlO1xuICAgIHZhciBtcyA9IGN1cnIgLSAoZGVidWdbbmFtZV0gfHwgY3Vycik7XG4gICAgZGVidWdbbmFtZV0gPSBjdXJyO1xuXG4gICAgZm10ID0gbmFtZVxuICAgICAgKyAnICdcbiAgICAgICsgZm10XG4gICAgICArICcgKycgKyBkZWJ1Zy5odW1hbml6ZShtcyk7XG5cbiAgICAvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOFxuICAgIC8vIHdoZXJlIGBjb25zb2xlLmxvZ2AgZG9lc24ndCBoYXZlICdhcHBseSdcbiAgICB3aW5kb3cuY29uc29sZVxuICAgICAgJiYgY29uc29sZS5sb2dcbiAgICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcy5cbiAqL1xuXG5kZWJ1Zy5uYW1lcyA9IFtdO1xuZGVidWcuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmRlYnVnLmVuYWJsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2UuZGVidWcgPSBuYW1lO1xuICB9IGNhdGNoKGUpe31cblxuICB2YXIgc3BsaXQgPSAobmFtZSB8fCAnJykuc3BsaXQoL1tcXHMsXSsvKVxuICAgICwgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuYW1lID0gc3BsaXRbaV0ucmVwbGFjZSgnKicsICcuKj8nKTtcbiAgICBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgICBkZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZS5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZSArICckJykpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmRlYnVnLmRpc2FibGUgPSBmdW5jdGlvbigpe1xuICBkZWJ1Zy5lbmFibGUoJycpO1xufTtcblxuLyoqXG4gKiBIdW1hbml6ZSB0aGUgZ2l2ZW4gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZGVidWcuaHVtYW5pemUgPSBmdW5jdGlvbihtcykge1xuICB2YXIgc2VjID0gMTAwMFxuICAgICwgbWluID0gNjAgKiAxMDAwXG4gICAgLCBob3VyID0gNjAgKiBtaW47XG5cbiAgaWYgKG1zID49IGhvdXIpIHJldHVybiAobXMgLyBob3VyKS50b0ZpeGVkKDEpICsgJ2gnO1xuICBpZiAobXMgPj0gbWluKSByZXR1cm4gKG1zIC8gbWluKS50b0ZpeGVkKDEpICsgJ20nO1xuICBpZiAobXMgPj0gc2VjKSByZXR1cm4gKG1zIC8gc2VjIHwgMCkgKyAncyc7XG4gIHJldHVybiBtcyArICdtcyc7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZGVidWcuZW5hYmxlZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGRlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGRlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuLy8gcGVyc2lzdFxuXG50cnkge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkgZGVidWcuZW5hYmxlKGxvY2FsU3RvcmFnZS5kZWJ1Zyk7XG59IGNhdGNoKGUpe31cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZGVidWc7XG5cbi8qKlxuICogRW5hYmxlZCBkZWJ1Z2dlcnMuXG4gKi9cblxudmFyIG5hbWVzID0gW11cbiAgLCBza2lwcyA9IFtdO1xuXG4ocHJvY2Vzcy5lbnYuREVCVUcgfHwgJycpXG4gIC5zcGxpdCgvW1xccyxdKy8pXG4gIC5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJyonLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVbMF0gPT09ICctJykge1xuICAgICAgc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWUuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lICsgJyQnKSk7XG4gICAgfVxuICB9KTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxudmFyIGNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxuLyoqXG4gKiBQcmV2aW91cyBkZWJ1ZygpIGNhbGwuXG4gKi9cblxudmFyIHByZXYgPSB7fTtcblxuLyoqXG4gKiBQcmV2aW91c2x5IGFzc2lnbmVkIGNvbG9yLlxuICovXG5cbnZhciBwcmV2Q29sb3IgPSAwO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZGlzYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxudmFyIGlzYXR0eSA9IHR0eS5pc2F0dHkoMik7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29sb3IoKSB7XG4gIHJldHVybiBjb2xvcnNbcHJldkNvbG9yKysgJSBjb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBIdW1hbml6ZSB0aGUgZ2l2ZW4gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaHVtYW5pemUobXMpIHtcbiAgdmFyIHNlYyA9IDEwMDBcbiAgICAsIG1pbiA9IDYwICogMTAwMFxuICAgICwgaG91ciA9IDYwICogbWluO1xuXG4gIGlmIChtcyA+PSBob3VyKSByZXR1cm4gKG1zIC8gaG91cikudG9GaXhlZCgxKSArICdoJztcbiAgaWYgKG1zID49IG1pbikgcmV0dXJuIChtcyAvIG1pbikudG9GaXhlZCgxKSArICdtJztcbiAgaWYgKG1zID49IHNlYykgcmV0dXJuIChtcyAvIHNlYyB8IDApICsgJ3MnO1xuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7VHlwZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGVidWcobmFtZSkge1xuICBmdW5jdGlvbiBkaXNhYmxlZCgpe31cbiAgZGlzYWJsZWQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBtYXRjaCA9IHNraXBzLnNvbWUoZnVuY3Rpb24ocmUpe1xuICAgIHJldHVybiByZS50ZXN0KG5hbWUpO1xuICB9KTtcblxuICBpZiAobWF0Y2gpIHJldHVybiBkaXNhYmxlZDtcblxuICBtYXRjaCA9IG5hbWVzLnNvbWUoZnVuY3Rpb24ocmUpe1xuICAgIHJldHVybiByZS50ZXN0KG5hbWUpO1xuICB9KTtcblxuICBpZiAoIW1hdGNoKSByZXR1cm4gZGlzYWJsZWQ7XG4gIHZhciBjID0gY29sb3IoKTtcblxuICBmdW5jdGlvbiBjb2xvcmVkKGZtdCkge1xuICAgIGZtdCA9IGNvZXJjZShmbXQpO1xuXG4gICAgdmFyIGN1cnIgPSBuZXcgRGF0ZTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZbbmFtZV0gfHwgY3Vycik7XG4gICAgcHJldltuYW1lXSA9IGN1cnI7XG5cbiAgICBmbXQgPSAnICBcXHUwMDFiWzknICsgYyArICdtJyArIG5hbWUgKyAnICdcbiAgICAgICsgJ1xcdTAwMWJbMycgKyBjICsgJ21cXHUwMDFiWzkwbSdcbiAgICAgICsgZm10ICsgJ1xcdTAwMWJbMycgKyBjICsgJ20nXG4gICAgICArICcgKycgKyBodW1hbml6ZShtcykgKyAnXFx1MDAxYlswbSc7XG5cbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFpbihmbXQpIHtcbiAgICBmbXQgPSBjb2VyY2UoZm10KTtcblxuICAgIGZtdCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKVxuICAgICAgKyAnICcgKyBuYW1lICsgJyAnICsgZm10O1xuICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNvbG9yZWQuZW5hYmxlZCA9IHBsYWluLmVuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBpc2F0dHkgfHwgcHJvY2Vzcy5lbnYuREVCVUdfQ09MT1JTXG4gICAgPyBjb2xvcmVkXG4gICAgOiBwbGFpbjtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCJcbnRyeSB7XG4gIHZhciBiaW5kID0gcmVxdWlyZSgnYmluZCcpO1xuICB2YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgdmFyIGJpbmQgPSByZXF1aXJlKCdiaW5kLWNvbXBvbmVudCcpO1xuICB2YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUtY29tcG9uZW50Jyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIGlmICh0eXBlKHZhbCkgPT09ICdmdW5jdGlvbicpIG9ialtrZXldID0gYmluZChvYmosIG9ialtrZXldKTtcbiAgfVxuICByZXR1cm4gb2JqO1xufTsiLCJcbi8qKlxuICogU2xpY2UgcmVmZXJlbmNlLlxuICovXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG4vKipcbiAqIEJpbmQgYG9iamAgdG8gYGZuYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gb3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIGZuKXtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBmbikgZm4gPSBvYmpbZm5dO1xuICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignYmluZCgpIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB9XG59O1xuIiwiXG52YXIgY2FzZXMgPSByZXF1aXJlKCcuL2Nhc2VzJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGRldGVybWluZUNhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGRldGVybWluZUNhc2U7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGNhc2Ugb2YgYSBgc3RyaW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVDYXNlIChzdHJpbmcpIHtcbiAgZm9yICh2YXIga2V5IGluIGNhc2VzKSB7XG4gICAgaWYgKGtleSA9PSAnbm9uZScpIGNvbnRpbnVlO1xuICAgIHZhciBjb252ZXJ0ID0gY2FzZXNba2V5XTtcbiAgICBpZiAoY29udmVydChzdHJpbmcpID09IHN0cmluZykgcmV0dXJuIGtleTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuXG4vKipcbiAqIERlZmluZSBhIGNhc2UgYnkgYG5hbWVgIHdpdGggYSBgY29udmVydGAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb252ZXJ0XG4gKi9cblxuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY29udmVydCkge1xuICBleHBvcnRzW25hbWVdID0gY2FzZXNbbmFtZV0gPSBjb252ZXJ0O1xufTtcblxuXG4vKipcbiAqIEFkZCBhbGwgdGhlIGBjYXNlc2AuXG4gKi9cblxuZm9yICh2YXIga2V5IGluIGNhc2VzKSB7XG4gIGV4cG9ydHMuYWRkKGtleSwgY2FzZXNba2V5XSk7XG59IiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xuXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZm4uX29mZiA9IG9uO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGkgPSBpbmRleChjYWxsYmFja3MsIGZuLl9vZmYgfHwgZm4pO1xuICBpZiAofmkpIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCJcbi8qKlxuICogRXhwb3NlIGBzdWJzdGl0dXRlYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gc3Vic3RpdHV0ZTtcblxuLyoqXG4gKiBTdWJzdGl0dXRlIGA6cHJvcGAgd2l0aCB0aGUgZ2l2ZW4gYG9iamAgaW4gYHN0cmBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gZXhwclxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzdWJzdGl0dXRlKHN0ciwgb2JqLCBleHByKXtcbiAgaWYgKCFvYmopIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGFuIG9iamVjdCcpO1xuICBleHByID0gZXhwciB8fCAvOihcXHcrKS9nO1xuICByZXR1cm4gc3RyLnJlcGxhY2UoZXhwciwgZnVuY3Rpb24oXywgcHJvcCl7XG4gICAgcmV0dXJuIG51bGwgIT0gb2JqW3Byb3BdXG4gICAgICA/IG9ialtwcm9wXVxuICAgICAgOiBfO1xuICB9KTtcbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gcXVlcnkgYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24oc3RyKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBzdHIpIHJldHVybiB7fTtcblxuICBzdHIgPSB0cmltKHN0cik7XG4gIGlmICgnJyA9PSBzdHIpIHJldHVybiB7fTtcbiAgaWYgKCc/JyA9PSBzdHIuY2hhckF0KDApKSBzdHIgPSBzdHIuc2xpY2UoMSk7XG5cbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0cyA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0c1swXSk7XG4gICAgdmFyIG07XG5cbiAgICBpZiAobSA9IC8oXFx3KylcXFsoXFxkKylcXF0vLmV4ZWMoa2V5KSkge1xuICAgICAgb2JqW21bMV1dID0gb2JqW21bMV1dIHx8IFtdO1xuICAgICAgb2JqW21bMV1dW21bMl1dID0gZGVjb2RlKHBhcnRzWzFdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG9ialtwYXJ0c1swXV0gPSBudWxsID09IHBhcnRzWzFdXG4gICAgICA/ICcnXG4gICAgICA6IGRlY29kZShwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBTdHJpbmdpZnkgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbihvYmope1xuICBpZiAoIW9iaikgcmV0dXJuICcnO1xuICB2YXIgcGFpcnMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICBpZiAoJ2FycmF5JyA9PSB0eXBlKHZhbHVlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBwYWlycy5wdXNoKGVuY29kZShrZXkgKyAnWycgKyBpICsgJ10nKSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcGFpcnMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZShvYmpba2V5XSkpO1xuICB9XG5cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn07XG4iLCJcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnaW5oZXJpdCcpO1xudmFyIFBhZ2UgPSByZXF1aXJlKCcuL3BhZ2UnKTtcbnZhciBUcmFjayA9IHJlcXVpcmUoJy4vdHJhY2snKTtcblxuLyoqXG4gKiBFeHBvc2UgYFNjcmVlbmAgZmFjYWRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW47XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBuZXcgYFNjcmVlbmAgZmFjYWRlIHdpdGggYGRpY3Rpb25hcnlgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaWN0aW9uYXJ5XG4gKiAgIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeVxuICogICBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogICBAcGFyYW0ge09iamVjdH0gdHJhaXRzXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gU2NyZWVuKGRpY3Rpb25hcnkpe1xuICBQYWdlLmNhbGwodGhpcywgZGljdGlvbmFyeSk7XG59XG5cbi8qKlxuICogSW5oZXJpdCBmcm9tIGBQYWdlYFxuICovXG5cbmluaGVyaXQoU2NyZWVuLCBQYWdlKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY2FkZSdzIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNjcmVlbi5wcm90b3R5cGUudHlwZSA9XG5TY3JlZW4ucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAnc2NyZWVuJztcbn07XG5cbi8qKlxuICogR2V0IGV2ZW50IHdpdGggYG5hbWVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNjcmVlbi5wcm90b3R5cGUuZXZlbnQgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIG5hbWVcbiAgICA/ICdWaWV3ZWQgJyArIG5hbWUgKyAnIFNjcmVlbidcbiAgICA6ICdMb2FkZWQgYSBTY3JlZW4nO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoaXMgU2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtUcmFja31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU2NyZWVuLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXMoKTtcbiAgcmV0dXJuIG5ldyBUcmFjayh7XG4gICAgZXZlbnQ6IHRoaXMuZXZlbnQobmFtZSksXG4gICAgcHJvcGVydGllczogcHJvcHNcbiAgfSk7XG59O1xuIiwiXG52YXIgRmFjYWRlID0gcmVxdWlyZSgnLi9mYWNhZGUnKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnaW5oZXJpdCcpO1xudmFyIFRyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuXG4vKipcbiAqIEV4cG9zZSBgUGFnZWAgZmFjYWRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgbmV3IGBQYWdlYCBmYWNhZGUgd2l0aCBgZGljdGlvbmFyeWAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRpY3Rpb25hcnlcbiAqICAgQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5XG4gKiAgIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSB0cmFpdHNcbiAqICAgQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBQYWdlKGRpY3Rpb25hcnkpe1xuICBGYWNhZGUuY2FsbCh0aGlzLCBkaWN0aW9uYXJ5KTtcbn1cblxuLyoqXG4gKiBJbmhlcml0IGZyb20gYEZhY2FkZWBcbiAqL1xuXG5pbmhlcml0KFBhZ2UsIEZhY2FkZSk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWNhZGUncyBhY3Rpb24uXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblBhZ2UucHJvdG90eXBlLnR5cGUgPVxuUGFnZS5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICdwYWdlJztcbn07XG5cbi8qKlxuICogUHJveGllc1xuICovXG5cblBhZ2UucHJvdG90eXBlLmNhdGVnb3J5ID0gRmFjYWRlLmZpZWxkKCdjYXRlZ29yeScpO1xuUGFnZS5wcm90b3R5cGUubmFtZSA9IEZhY2FkZS5maWVsZCgnbmFtZScpO1xuXG4vKipcbiAqIEdldCB0aGUgcGFnZSBwcm9wZXJ0aWVzIG1peGluZyBgY2F0ZWdvcnlgIGFuZCBgbmFtZWAuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cblBhZ2UucHJvdG90eXBlLnByb3BlcnRpZXMgPSBmdW5jdGlvbigpe1xuICB2YXIgcHJvcHMgPSB0aGlzLmZpZWxkKCdwcm9wZXJ0aWVzJykgfHwge307XG4gIHZhciBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkoKTtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWUoKTtcbiAgaWYgKGNhdGVnb3J5KSBwcm9wcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICBpZiAobmFtZSkgcHJvcHMubmFtZSA9IG5hbWU7XG4gIHJldHVybiBwcm9wcztcbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYWdlIGZ1bGxOYW1lLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5QYWdlLnByb3RvdHlwZS5mdWxsTmFtZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkoKTtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWUoKTtcbiAgcmV0dXJuIG5hbWUgJiYgY2F0ZWdvcnlcbiAgICA/IGNhdGVnb3J5ICsgJyAnICsgbmFtZVxuICAgIDogbmFtZTtcbn07XG5cbi8qKlxuICogR2V0IGV2ZW50IHdpdGggYG5hbWVgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5QYWdlLnByb3RvdHlwZS5ldmVudCA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gbmFtZVxuICAgID8gJ1ZpZXdlZCAnICsgbmFtZSArICcgUGFnZSdcbiAgICA6ICdMb2FkZWQgYSBQYWdlJztcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGlzIFBhZ2UgdG8gYSBUcmFjayBmYWNhZGUgd2l0aCBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge1RyYWNrfVxuICovXG5cblBhZ2UucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcygpO1xuICByZXR1cm4gbmV3IFRyYWNrKHtcbiAgICBldmVudDogdGhpcy5ldmVudChuYW1lKSxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICB9KTtcbn07XG4iLCJcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgRmFjYWRlID0gcmVxdWlyZSgnLi9mYWNhZGUnKTtcbnZhciBJZGVudGlmeSA9IHJlcXVpcmUoJy4vaWRlbnRpZnknKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnaW5oZXJpdCcpO1xudmFyIGlzRW1haWwgPSByZXF1aXJlKCdpcy1lbWFpbCcpO1xuXG4vKipcbiAqIEV4cG9zZSBgVHJhY2tgIGZhY2FkZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNrO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFRyYWNrYCBmYWNhZGUgd2l0aCBhIGBkaWN0aW9uYXJ5YCBvZiBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRpY3Rpb25hcnlcbiAqICAgQHByb3BlcnR5IHtTdHJpbmd9IGV2ZW50XG4gKiAgIEBwcm9wZXJ0eSB7U3RyaW5nfSB1c2VySWRcbiAqICAgQHByb3BlcnR5IHtTdHJpbmd9IHNlc3Npb25JZFxuICogICBAcHJvcGVydHkge09iamVjdH0gcHJvcGVydGllc1xuICogICBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIFRyYWNrIChkaWN0aW9uYXJ5KSB7XG4gIEZhY2FkZS5jYWxsKHRoaXMsIGRpY3Rpb25hcnkpO1xufVxuXG4vKipcbiAqIEluaGVyaXQgZnJvbSBgRmFjYWRlYC5cbiAqL1xuXG5pbmhlcml0KFRyYWNrLCBGYWNhZGUpO1xuXG4vKipcbiAqIFJldHVybiB0aGUgZmFjYWRlJ3MgYWN0aW9uLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5UcmFjay5wcm90b3R5cGUudHlwZSA9XG5UcmFjay5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ3RyYWNrJztcbn07XG5cbi8qKlxuICogU2V0dXAgc29tZSBiYXNpYyBwcm94aWVzLlxuICovXG5cblRyYWNrLnByb3RvdHlwZS5ldmVudCA9IEZhY2FkZS5maWVsZCgnZXZlbnQnKTtcblRyYWNrLnByb3RvdHlwZS52YWx1ZSA9IEZhY2FkZS5wcm94eSgncHJvcGVydGllcy52YWx1ZScpO1xuXG4vKipcbiAqIE1pc2NcbiAqL1xuXG5UcmFjay5wcm90b3R5cGUuY2F0ZWdvcnkgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuY2F0ZWdvcnknKTtcblRyYWNrLnByb3RvdHlwZS5jb3VudHJ5ID0gRmFjYWRlLnByb3h5KCdwcm9wZXJ0aWVzLmNvdW50cnknKTtcblRyYWNrLnByb3RvdHlwZS5zdGF0ZSA9IEZhY2FkZS5wcm94eSgncHJvcGVydGllcy5zdGF0ZScpO1xuVHJhY2sucHJvdG90eXBlLmNpdHkgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuY2l0eScpO1xuVHJhY2sucHJvdG90eXBlLnppcCA9IEZhY2FkZS5wcm94eSgncHJvcGVydGllcy56aXAnKTtcblxuLyoqXG4gKiBFY29tbWVyY2VcbiAqL1xuXG5UcmFjay5wcm90b3R5cGUuaWQgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuaWQnKTtcblRyYWNrLnByb3RvdHlwZS5za3UgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuc2t1Jyk7XG5UcmFjay5wcm90b3R5cGUudGF4ID0gRmFjYWRlLnByb3h5KCdwcm9wZXJ0aWVzLnRheCcpO1xuVHJhY2sucHJvdG90eXBlLm5hbWUgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMubmFtZScpO1xuVHJhY2sucHJvdG90eXBlLnByaWNlID0gRmFjYWRlLnByb3h5KCdwcm9wZXJ0aWVzLnByaWNlJyk7XG5UcmFjay5wcm90b3R5cGUudG90YWwgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMudG90YWwnKTtcblRyYWNrLnByb3RvdHlwZS5jb3Vwb24gPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuY291cG9uJyk7XG5UcmFjay5wcm90b3R5cGUuc2hpcHBpbmcgPSBGYWNhZGUucHJveHkoJ3Byb3BlcnRpZXMuc2hpcHBpbmcnKTtcblxuLyoqXG4gKiBPcmRlciBpZC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYWNrLnByb3RvdHlwZS5vcmRlcklkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMucHJveHkoJ3Byb3BlcnRpZXMuaWQnKVxuICAgIHx8IHRoaXMucHJveHkoJ3Byb3BlcnRpZXMub3JkZXJJZCcpO1xufTtcblxuLyoqXG4gKiBHZXQgc3VidG90YWwuXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cblRyYWNrLnByb3RvdHlwZS5zdWJ0b3RhbCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzdWJ0b3RhbCA9IHRoaXMub2JqLnByb3BlcnRpZXMuc3VidG90YWw7XG4gIHZhciB0b3RhbCA9IHRoaXMudG90YWwoKTtcbiAgdmFyIG47XG5cbiAgaWYgKHN1YnRvdGFsKSByZXR1cm4gc3VidG90YWw7XG4gIGlmICghdG90YWwpIHJldHVybiAwO1xuICBpZiAobiA9IHRoaXMudGF4KCkpIHRvdGFsIC09IG47XG4gIGlmIChuID0gdGhpcy5zaGlwcGluZygpKSB0b3RhbCAtPSBuO1xuXG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogR2V0IHByb2R1Y3RzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cblRyYWNrLnByb3RvdHlwZS5wcm9kdWN0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwcm9wcyA9IHRoaXMub2JqLnByb3BlcnRpZXMgfHwge307XG4gIHJldHVybiBwcm9wcy5wcm9kdWN0cyB8fCBbXTtcbn07XG5cbi8qKlxuICogR2V0IHF1YW50aXR5LlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG5UcmFjay5wcm90b3R5cGUucXVhbnRpdHkgPSBmdW5jdGlvbigpe1xuICB2YXIgcHJvcHMgPSB0aGlzLm9iai5wcm9wZXJ0aWVzIHx8IHt9O1xuICByZXR1cm4gcHJvcHMucXVhbnRpdHkgfHwgMTtcbn07XG5cbi8qKlxuICogR2V0IGN1cnJlbmN5LlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5UcmFjay5wcm90b3R5cGUuY3VycmVuY3kgPSBmdW5jdGlvbigpe1xuICB2YXIgcHJvcHMgPSB0aGlzLm9iai5wcm9wZXJ0aWVzIHx8IHt9O1xuICByZXR1cm4gcHJvcHMuY3VycmVuY3kgfHwgJ1VTRCc7XG59O1xuXG4vKipcbiAqIEJBQ0tXQVJEUyBDT01QQVRJQklMSVRZOiBzaG91bGQgcHJvYmFibHkgcmUtZXhhbWluZSB3aGVyZSB0aGVzZSBjb21lIGZyb20uXG4gKi9cblxuVHJhY2sucHJvdG90eXBlLnJlZmVycmVyID0gRmFjYWRlLnByb3h5KCdwcm9wZXJ0aWVzLnJlZmVycmVyJyk7XG5UcmFjay5wcm90b3R5cGUucXVlcnkgPSBGYWNhZGUucHJveHkoJ29wdGlvbnMucXVlcnknKTtcblxuLyoqXG4gKiBHZXQgdGhlIGNhbGwncyBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbGlhc2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuVHJhY2sucHJvdG90eXBlLnByb3BlcnRpZXMgPSBmdW5jdGlvbiAoYWxpYXNlcykge1xuICB2YXIgcmV0ID0gdGhpcy5maWVsZCgncHJvcGVydGllcycpIHx8IHt9O1xuICBhbGlhc2VzID0gYWxpYXNlcyB8fCB7fTtcblxuICBmb3IgKHZhciBhbGlhcyBpbiBhbGlhc2VzKSB7XG4gICAgdmFyIHZhbHVlID0gbnVsbCA9PSB0aGlzW2FsaWFzXVxuICAgICAgPyB0aGlzLnByb3h5KCdwcm9wZXJ0aWVzLicgKyBhbGlhcylcbiAgICAgIDogdGhpc1thbGlhc10oKTtcbiAgICBpZiAobnVsbCA9PSB2YWx1ZSkgY29udGludWU7XG4gICAgcmV0W2FsaWFzZXNbYWxpYXNdXSA9IHZhbHVlO1xuICAgIGRlbGV0ZSByZXRbYWxpYXNdO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjYWxsJ3MgXCJzdXBlciBwcm9wZXJ0aWVzXCIgd2hpY2ggYXJlIGp1c3QgdHJhaXRzIHRoYXQgaGF2ZSBiZWVuXG4gKiBwYXNzZWQgaW4gYXMgaWYgZnJvbSBhbiBpZGVudGlmeSBjYWxsLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5UcmFjay5wcm90b3R5cGUudHJhaXRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wcm94eSgnb3B0aW9ucy50cmFpdHMnKSB8fCB7fTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjYWxsJ3MgdXNlcm5hbWUuXG4gKlxuICogQHJldHVybiB7U3RyaW5nIG9yIFVuZGVmaW5lZH1cbiAqL1xuXG5UcmFjay5wcm90b3R5cGUudXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnByb3h5KCd0cmFpdHMudXNlcm5hbWUnKSB8fFxuICAgICAgICAgdGhpcy5wcm94eSgncHJvcGVydGllcy51c2VybmFtZScpIHx8XG4gICAgICAgICB0aGlzLnVzZXJJZCgpIHx8XG4gICAgICAgICB0aGlzLnNlc3Npb25JZCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNhbGwncyBlbWFpbCwgdXNpbmcgYW4gdGhlIHVzZXIgSUQgaWYgaXQncyBhIHZhbGlkIGVtYWlsLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZyBvciBVbmRlZmluZWR9XG4gKi9cblxuVHJhY2sucHJvdG90eXBlLmVtYWlsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZW1haWwgPSB0aGlzLnByb3h5KCd0cmFpdHMuZW1haWwnKTtcbiAgZW1haWwgPSBlbWFpbCB8fCB0aGlzLnByb3h5KCdwcm9wZXJ0aWVzLmVtYWlsJyk7XG4gIGlmIChlbWFpbCkgcmV0dXJuIGVtYWlsO1xuXG4gIHZhciB1c2VySWQgPSB0aGlzLnVzZXJJZCgpO1xuICBpZiAoaXNFbWFpbCh1c2VySWQpKSByZXR1cm4gdXNlcklkO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNhbGwncyByZXZlbnVlLCBwYXJzaW5nIGl0IGZyb20gYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBsZWFkaW5nXG4gKiBkb2xsYXIgc2lnbi5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmcgb3IgVW5kZWZpbmVkfVxuICovXG5cblRyYWNrLnByb3RvdHlwZS5yZXZlbnVlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmV2ZW51ZSA9IHRoaXMucHJveHkoJ3Byb3BlcnRpZXMucmV2ZW51ZScpO1xuXG4gIGlmICghcmV2ZW51ZSkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHJldmVudWUgPT09ICdudW1iZXInKSByZXR1cm4gcmV2ZW51ZTtcbiAgaWYgKHR5cGVvZiByZXZlbnVlICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuXG4gIHJldmVudWUgPSByZXZlbnVlLnJlcGxhY2UoL1xcJC9nLCAnJyk7XG4gIHJldmVudWUgPSBwYXJzZUZsb2F0KHJldmVudWUpO1xuXG4gIGlmICghaXNOYU4ocmV2ZW51ZSkpIHJldHVybiByZXZlbnVlO1xufTtcblxuLyoqXG4gKiBHZXQgY2VudHMuXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cblRyYWNrLnByb3RvdHlwZS5jZW50cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXZlbnVlID0gdGhpcy5yZXZlbnVlKCk7XG4gIHJldHVybiAnbnVtYmVyJyAhPSB0eXBlb2YgcmV2ZW51ZVxuICAgID8gdGhpcy52YWx1ZSgpIHx8IDBcbiAgICA6IHJldmVudWUgKiAxMDA7XG59O1xuXG4vKipcbiAqIEEgdXRpbGl0eSB0byB0dXJuIHRoZSBwaWVjZXMgb2YgYSB0cmFjayBjYWxsIGludG8gYW4gaWRlbnRpZnkuIFVzZWQgZm9yXG4gKiBpbnRlZ3JhdGlvbnMgd2l0aCBzdXBlciBwcm9wZXJ0aWVzIG9yIHJhdGUgbGltaXRzLlxuICpcbiAqIFRPRE86IHJlbW92ZSBtZS5cbiAqXG4gKiBAcmV0dXJuIHtGYWNhZGV9XG4gKi9cblxuVHJhY2sucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIganNvbiA9IHRoaXMuanNvbigpO1xuICBqc29uLnRyYWl0cyA9IHRoaXMudHJhaXRzKCk7XG4gIHJldHVybiBuZXcgSWRlbnRpZnkoanNvbik7XG59O1xuIiwiXG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIEZhY2FkZSA9IHJlcXVpcmUoJy4vZmFjYWRlJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2luaGVyaXQnKTtcbnZhciBpc0VtYWlsID0gcmVxdWlyZSgnaXMtZW1haWwnKTtcbnZhciBuZXdEYXRlID0gcmVxdWlyZSgnbmV3LWRhdGUnKTtcbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xuXG4vKipcbiAqIEV4cG9zZSBgSWRlbmZpdHlgIGZhY2FkZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IElkZW50aWZ5O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYElkZW50aWZ5YCBmYWNhZGUgd2l0aCBhIGBkaWN0aW9uYXJ5YCBvZiBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRpY3Rpb25hcnlcbiAqICAgQHBhcmFtIHtTdHJpbmd9IHVzZXJJZFxuICogICBAcGFyYW0ge1N0cmluZ30gc2Vzc2lvbklkXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSB0cmFpdHNcbiAqICAgQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBJZGVudGlmeSAoZGljdGlvbmFyeSkge1xuICBGYWNhZGUuY2FsbCh0aGlzLCBkaWN0aW9uYXJ5KTtcbn1cblxuLyoqXG4gKiBJbmhlcml0IGZyb20gYEZhY2FkZWAuXG4gKi9cblxuaW5oZXJpdChJZGVudGlmeSwgRmFjYWRlKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY2FkZSdzIGFjdGlvbi5cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUudHlwZSA9XG5JZGVudGlmeS5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2lkZW50aWZ5Jztcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyJ3MgdHJhaXRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbGlhc2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuSWRlbnRpZnkucHJvdG90eXBlLnRyYWl0cyA9IGZ1bmN0aW9uIChhbGlhc2VzKSB7XG4gIHZhciByZXQgPSB0aGlzLmZpZWxkKCd0cmFpdHMnKSB8fCB7fTtcbiAgdmFyIGlkID0gdGhpcy51c2VySWQoKTtcbiAgYWxpYXNlcyA9IGFsaWFzZXMgfHwge307XG5cbiAgaWYgKGlkKSByZXQuaWQgPSBpZDtcblxuICBmb3IgKHZhciBhbGlhcyBpbiBhbGlhc2VzKSB7XG4gICAgdmFyIHZhbHVlID0gbnVsbCA9PSB0aGlzW2FsaWFzXVxuICAgICAgPyB0aGlzLnByb3h5KCd0cmFpdHMuJyArIGFsaWFzKVxuICAgICAgOiB0aGlzW2FsaWFzXSgpO1xuICAgIGlmIChudWxsID09IHZhbHVlKSBjb250aW51ZTtcbiAgICByZXRbYWxpYXNlc1thbGlhc11dID0gdmFsdWU7XG4gICAgZGVsZXRlIHJldFthbGlhc107XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVzZXIncyBlbWFpbCwgZmFsbGluZyBiYWNrIHRvIHRoZWlyIHVzZXIgSUQgaWYgaXQncyBhIHZhbGlkIGVtYWlsLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUuZW1haWwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbWFpbCA9IHRoaXMucHJveHkoJ3RyYWl0cy5lbWFpbCcpO1xuICBpZiAoZW1haWwpIHJldHVybiBlbWFpbDtcblxuICB2YXIgdXNlcklkID0gdGhpcy51c2VySWQoKTtcbiAgaWYgKGlzRW1haWwodXNlcklkKSkgcmV0dXJuIHVzZXJJZDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyJ3MgY3JlYXRlZCBkYXRlLCBvcHRpb25hbGx5IGxvb2tpbmcgZm9yIGBjcmVhdGVkQXRgIHNpbmNlIGxvdHMgb2ZcbiAqIHBlb3BsZSBkbyB0aGF0IGluc3RlYWQuXG4gKlxuICogQHJldHVybiB7RGF0ZSBvciBVbmRlZmluZWR9XG4gKi9cblxuSWRlbnRpZnkucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjcmVhdGVkID0gdGhpcy5wcm94eSgndHJhaXRzLmNyZWF0ZWQnKSB8fCB0aGlzLnByb3h5KCd0cmFpdHMuY3JlYXRlZEF0Jyk7XG4gIGlmIChjcmVhdGVkKSByZXR1cm4gbmV3RGF0ZShjcmVhdGVkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb21wYW55IGNyZWF0ZWQgZGF0ZS5cbiAqXG4gKiBAcmV0dXJuIHtEYXRlIG9yIHVuZGVmaW5lZH1cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUuY29tcGFueUNyZWF0ZWQgPSBmdW5jdGlvbigpe1xuICB2YXIgY3JlYXRlZCA9IHRoaXMucHJveHkoJ3RyYWl0cy5jb21wYW55LmNyZWF0ZWQnKVxuICAgIHx8IHRoaXMucHJveHkoJ3RyYWl0cy5jb21wYW55LmNyZWF0ZWRBdCcpO1xuXG4gIGlmIChjcmVhdGVkKSByZXR1cm4gbmV3RGF0ZShjcmVhdGVkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1c2VyJ3MgbmFtZSwgb3B0aW9uYWxseSBjb21iaW5pbmcgYSBmaXJzdCBhbmQgbGFzdCBuYW1lIGlmIHRoYXQncyBhbGxcbiAqIHRoYXQgd2FzIHByb3ZpZGVkLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZyBvciBVbmRlZmluZWR9XG4gKi9cblxuSWRlbnRpZnkucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuYW1lID0gdGhpcy5wcm94eSgndHJhaXRzLm5hbWUnKTtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykgcmV0dXJuIHRyaW0obmFtZSk7XG5cbiAgdmFyIGZpcnN0TmFtZSA9IHRoaXMuZmlyc3ROYW1lKCk7XG4gIHZhciBsYXN0TmFtZSA9IHRoaXMubGFzdE5hbWUoKTtcbiAgaWYgKGZpcnN0TmFtZSAmJiBsYXN0TmFtZSkgcmV0dXJuIHRyaW0oZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVzZXIncyBmaXJzdCBuYW1lLCBvcHRpb25hbGx5IHNwbGl0dGluZyBpdCBvdXQgb2YgYSBzaW5nbGUgbmFtZSBpZlxuICogdGhhdCdzIGFsbCB0aGF0IHdhcyBwcm92aWRlZC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmcgb3IgVW5kZWZpbmVkfVxuICovXG5cbklkZW50aWZ5LnByb3RvdHlwZS5maXJzdE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaXJzdE5hbWUgPSB0aGlzLnByb3h5KCd0cmFpdHMuZmlyc3ROYW1lJyk7XG4gIGlmICh0eXBlb2YgZmlyc3ROYW1lID09PSAnc3RyaW5nJykgcmV0dXJuIHRyaW0oZmlyc3ROYW1lKTtcblxuICB2YXIgbmFtZSA9IHRoaXMucHJveHkoJ3RyYWl0cy5uYW1lJyk7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHJldHVybiB0cmltKG5hbWUpLnNwbGl0KCcgJylbMF07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXNlcidzIGxhc3QgbmFtZSwgb3B0aW9uYWxseSBzcGxpdHRpbmcgaXQgb3V0IG9mIGEgc2luZ2xlIG5hbWUgaWZcbiAqIHRoYXQncyBhbGwgdGhhdCB3YXMgcHJvdmlkZWQuXG4gKlxuICogQHJldHVybiB7U3RyaW5nIG9yIFVuZGVmaW5lZH1cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUubGFzdE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0TmFtZSA9IHRoaXMucHJveHkoJ3RyYWl0cy5sYXN0TmFtZScpO1xuICBpZiAodHlwZW9mIGxhc3ROYW1lID09PSAnc3RyaW5nJykgcmV0dXJuIHRyaW0obGFzdE5hbWUpO1xuXG4gIHZhciBuYW1lID0gdGhpcy5wcm94eSgndHJhaXRzLm5hbWUnKTtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuXG4gIHZhciBzcGFjZSA9IHRyaW0obmFtZSkuaW5kZXhPZignICcpO1xuICBpZiAoc3BhY2UgPT09IC0xKSByZXR1cm47XG5cbiAgcmV0dXJuIHRyaW0obmFtZS5zdWJzdHIoc3BhY2UgKyAxKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXNlcidzIHVuaXF1ZSBpZC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmcgb3IgdW5kZWZpbmVkfVxuICovXG5cbklkZW50aWZ5LnByb3RvdHlwZS51aWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy51c2VySWQoKVxuICAgIHx8IHRoaXMudXNlcm5hbWUoKVxuICAgIHx8IHRoaXMuZW1haWwoKTtcbn07XG5cbi8qKlxuICogR2V0IGRlc2NyaXB0aW9uLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5wcm94eSgndHJhaXRzLmRlc2NyaXB0aW9uJylcbiAgICB8fCB0aGlzLnByb3h5KCd0cmFpdHMuYmFja2dyb3VuZCcpO1xufTtcblxuLyoqXG4gKiBTZXR1cCBzbWUgYmFzaWMgXCJzcGVjaWFsXCIgdHJhaXQgcHJveGllcy5cbiAqL1xuXG5JZGVudGlmeS5wcm90b3R5cGUudXNlcm5hbWUgPSBGYWNhZGUucHJveHkoJ3RyYWl0cy51c2VybmFtZScpO1xuSWRlbnRpZnkucHJvdG90eXBlLndlYnNpdGUgPSBGYWNhZGUucHJveHkoJ3RyYWl0cy53ZWJzaXRlJyk7XG5JZGVudGlmeS5wcm90b3R5cGUucGhvbmUgPSBGYWNhZGUucHJveHkoJ3RyYWl0cy5waG9uZScpO1xuSWRlbnRpZnkucHJvdG90eXBlLmFkZHJlc3MgPSBGYWNhZGUucHJveHkoJ3RyYWl0cy5hZGRyZXNzJyk7XG5JZGVudGlmeS5wcm90b3R5cGUuYXZhdGFyID0gRmFjYWRlLnByb3h5KCd0cmFpdHMuYXZhdGFyJyk7XG4iLCJcbnZhciBGYWNhZGUgPSByZXF1aXJlKCcuL2ZhY2FkZScpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdpbmhlcml0Jyk7XG52YXIgbmV3RGF0ZSA9IHJlcXVpcmUoJ25ldy1kYXRlJyk7XG5cbi8qKlxuICogRXhwb3NlIGBHcm91cGAgZmFjYWRlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXA7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgR3JvdXBgIGZhY2FkZSB3aXRoIGEgYGRpY3Rpb25hcnlgIG9mIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGljdGlvbmFyeVxuICogICBAcGFyYW0ge1N0cmluZ30gdXNlcklkXG4gKiAgIEBwYXJhbSB7U3RyaW5nfSBncm91cElkXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gR3JvdXAgKGRpY3Rpb25hcnkpIHtcbiAgRmFjYWRlLmNhbGwodGhpcywgZGljdGlvbmFyeSk7XG59XG5cbi8qKlxuICogSW5oZXJpdCBmcm9tIGBGYWNhZGVgXG4gKi9cblxuaW5oZXJpdChHcm91cCwgRmFjYWRlKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY2FkZSdzIGFjdGlvbi5cbiAqL1xuXG5Hcm91cC5wcm90b3R5cGUudHlwZSA9XG5Hcm91cC5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2dyb3VwJztcbn07XG5cbi8qKlxuICogU2V0dXAgc29tZSBiYXNpYyBwcm94aWVzLlxuICovXG5cbkdyb3VwLnByb3RvdHlwZS5ncm91cElkID0gRmFjYWRlLmZpZWxkKCdncm91cElkJyk7XG5cbi8qKlxuICogR2V0IGNyZWF0ZWQgb3IgY3JlYXRlZEF0LlxuICpcbiAqIEByZXR1cm4ge0RhdGV9XG4gKi9cblxuR3JvdXAucHJvdG90eXBlLmNyZWF0ZWQgPSBmdW5jdGlvbigpe1xuICB2YXIgY3JlYXRlZCA9IHRoaXMucHJveHkoJ3RyYWl0cy5jcmVhdGVkQXQnKVxuICAgIHx8IHRoaXMucHJveHkoJ3RyYWl0cy5jcmVhdGVkJylcbiAgICB8fCB0aGlzLnByb3h5KCdwcm9wZXJ0aWVzLmNyZWF0ZWRBdCcpXG4gICAgfHwgdGhpcy5wcm94eSgncHJvcGVydGllcy5jcmVhdGVkJyk7XG5cbiAgaWYgKGNyZWF0ZWQpIHJldHVybiBuZXdEYXRlKGNyZWF0ZWQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGdyb3VwJ3MgdHJhaXRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbGlhc2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuR3JvdXAucHJvdG90eXBlLnRyYWl0cyA9IGZ1bmN0aW9uIChhbGlhc2VzKSB7XG4gIHZhciByZXQgPSB0aGlzLnByb3BlcnRpZXMoKTtcbiAgdmFyIGlkID0gdGhpcy5ncm91cElkKCk7XG4gIGFsaWFzZXMgPSBhbGlhc2VzIHx8IHt9O1xuXG4gIGlmIChpZCkgcmV0LmlkID0gaWQ7XG5cbiAgZm9yICh2YXIgYWxpYXMgaW4gYWxpYXNlcykge1xuICAgIHZhciB2YWx1ZSA9IG51bGwgPT0gdGhpc1thbGlhc11cbiAgICAgID8gdGhpcy5wcm94eSgndHJhaXRzLicgKyBhbGlhcylcbiAgICAgIDogdGhpc1thbGlhc10oKTtcbiAgICBpZiAobnVsbCA9PSB2YWx1ZSkgY29udGludWU7XG4gICAgcmV0W2FsaWFzZXNbYWxpYXNdXSA9IHZhbHVlO1xuICAgIGRlbGV0ZSByZXRbYWxpYXNdO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogR2V0IHRyYWl0cyBvciBwcm9wZXJ0aWVzLlxuICpcbiAqIFRPRE86IHJlbW92ZSBtZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5Hcm91cC5wcm90b3R5cGUucHJvcGVydGllcyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmZpZWxkKCd0cmFpdHMnKVxuICAgIHx8IHRoaXMuZmllbGQoJ3Byb3BlcnRpZXMnKVxuICAgIHx8IHt9O1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBGYWNhZGUgPSByZXF1aXJlKCcuL2ZhY2FkZScpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdpbmhlcml0Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBBbGlhc2AgZmFjYWRlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQWxpYXM7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgQWxpYXNgIGZhY2FkZSB3aXRoIGEgYGRpY3Rpb25hcnlgIG9mIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGljdGlvbmFyeVxuICogICBAcHJvcGVydHkge1N0cmluZ30gZnJvbVxuICogICBAcHJvcGVydHkge1N0cmluZ30gdG9cbiAqICAgQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBBbGlhcyAoZGljdGlvbmFyeSkge1xuICBGYWNhZGUuY2FsbCh0aGlzLCBkaWN0aW9uYXJ5KTtcbn1cblxuLyoqXG4gKiBJbmhlcml0IGZyb20gYEZhY2FkZWAuXG4gKi9cblxuaW5oZXJpdChBbGlhcywgRmFjYWRlKTtcblxuLyoqXG4gKiBSZXR1cm4gdHlwZSBvZiBmYWNhZGUuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbkFsaWFzLnByb3RvdHlwZS50eXBlID1cbkFsaWFzLnByb3RvdHlwZS5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnYWxpYXMnO1xufTtcblxuLyoqXG4gKiBHZXQgYHByZXZpb3VzSWRgLlxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5BbGlhcy5wcm90b3R5cGUuZnJvbSA9XG5BbGlhcy5wcm90b3R5cGUucHJldmlvdXNJZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmZpZWxkKCdwcmV2aW91c0lkJylcbiAgICB8fCB0aGlzLmZpZWxkKCdmcm9tJyk7XG59O1xuXG4vKipcbiAqIEdldCBgdXNlcklkYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkFsaWFzLnByb3RvdHlwZS50byA9XG5BbGlhcy5wcm90b3R5cGUudXNlcklkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZmllbGQoJ3VzZXJJZCcpXG4gICAgfHwgdGhpcy5maWVsZCgndG8nKTtcbn07XG4iLCJcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgaXNFbmFibGVkID0gcmVxdWlyZSgnLi9pcy1lbmFibGVkJyk7XG52YXIgb2JqQ2FzZSA9IHJlcXVpcmUoJ29iai1jYXNlJyk7XG52YXIgdHJhdmVyc2UgPSByZXF1aXJlKCdpc29kYXRlLXRyYXZlcnNlJyk7XG5cbi8qKlxuICogRXhwb3NlIGBGYWNhZGVgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRmFjYWRlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEZhY2FkZWAgd2l0aCBhbiBgb2JqYCBvZiBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmZ1bmN0aW9uIEZhY2FkZSAob2JqKSB7XG4gIGlmICghb2JqLmhhc093blByb3BlcnR5KCd0aW1lc3RhbXAnKSkgb2JqLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gIGVsc2Ugb2JqLnRpbWVzdGFtcCA9IG5ldyBEYXRlKG9iai50aW1lc3RhbXApO1xuICB0aGlzLm9iaiA9IG9iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBwcm94eSBmdW5jdGlvbiBmb3IgYSBgZmllbGRgIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGZpcnN0IHVzZSBtZXRob2RzLFxuICogYW5kIGZhbGxiYWNrIHRvIGFjY2Vzc2luZyB0aGUgdW5kZXJseWluZyBvYmplY3QgZGlyZWN0bHkuIFlvdSBjYW4gc3BlY2lmeVxuICogZGVlcGx5IG5lc3RlZCBmaWVsZHMgdG9vIGxpa2U6XG4gKlxuICogICB0aGlzLnByb3h5KCdvcHRpb25zLkxpYnJhdG8nKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqL1xuXG5GYWNhZGUucHJvdG90eXBlLnByb3h5ID0gZnVuY3Rpb24gKGZpZWxkKSB7XG4gIHZhciBmaWVsZHMgPSBmaWVsZC5zcGxpdCgnLicpO1xuICBmaWVsZCA9IGZpZWxkcy5zaGlmdCgpO1xuXG4gIC8vIENhbGwgYSBmdW5jdGlvbiBhdCB0aGUgYmVnaW5uaW5nIHRvIHRha2UgYWR2YW50YWdlIG9mIGZhY2FkZWQgZmllbGRzXG4gIHZhciBvYmogPSB0aGlzW2ZpZWxkXSB8fCB0aGlzLmZpZWxkKGZpZWxkKTtcbiAgaWYgKCFvYmopIHJldHVybiBvYmo7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSBvYmogPSBvYmouY2FsbCh0aGlzKSB8fCB7fTtcbiAgaWYgKGZpZWxkcy5sZW5ndGggPT09IDApIHJldHVybiB0cmFuc2Zvcm0ob2JqKTtcblxuICBvYmogPSBvYmpDYXNlKG9iaiwgZmllbGRzLmpvaW4oJy4nKSk7XG4gIHJldHVybiB0cmFuc2Zvcm0ob2JqKTtcbn07XG5cbi8qKlxuICogRGlyZWN0bHkgYWNjZXNzIGEgc3BlY2lmaWMgYGZpZWxkYCBmcm9tIHRoZSB1bmRlcmx5aW5nIG9iamVjdCwgcmV0dXJuaW5nIGFcbiAqIGNsb25lIHNvIG91dHNpZGVycyBkb24ndCBtZXNzIHdpdGggc3R1ZmYuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqL1xuXG5GYWNhZGUucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkKSB7XG4gIHZhciBvYmogPSB0aGlzLm9ialtmaWVsZF07XG4gIHJldHVybiB0cmFuc2Zvcm0ob2JqKTtcbn07XG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdG8gYWx3YXlzIHByb3h5IGEgcGFydGljdWxhciBgZmllbGRgLiBZb3UgY2FuIHNwZWNpZnkgZGVlcGx5XG4gKiBuZXN0ZWQgZmllbGRzIHRvbyBsaWtlOlxuICpcbiAqICAgRmFjYWRlLnByb3h5KCdvcHRpb25zLkxpYnJhdG8nKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbkZhY2FkZS5wcm94eSA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5KGZpZWxkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdG8gZGlyZWN0bHkgYWNjZXNzIGEgYGZpZWxkYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbkZhY2FkZS5maWVsZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkKGZpZWxkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBiYXNpYyBqc29uIG9iamVjdCBvZiB0aGlzIGZhY2FkZS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuRmFjYWRlLnByb3RvdHlwZS5qc29uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2xvbmUodGhpcy5vYmopO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG9wdGlvbnMgb2YgYSBjYWxsIChmb3JtZXJseSBjYWxsZWQgXCJjb250ZXh0XCIpLiBJZiB5b3UgcGFzcyBhblxuICogaW50ZWdyYXRpb24gbmFtZSwgaXQgd2lsbCBnZXQgdGhlIG9wdGlvbnMgZm9yIHRoYXQgc3BlY2lmaWMgaW50ZWdyYXRpb24sIG9yXG4gKiB1bmRlZmluZWQgaWYgdGhlIGludGVncmF0aW9uIGlzIG5vdCBlbmFibGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnRlZ3JhdGlvbiAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtPYmplY3Qgb3IgTnVsbH1cbiAqL1xuXG5GYWNhZGUucHJvdG90eXBlLm9wdGlvbnMgPSBmdW5jdGlvbiAoaW50ZWdyYXRpb24pIHtcbiAgdmFyIG9wdGlvbnMgPSBjbG9uZSh0aGlzLm9iai5vcHRpb25zIHx8IHRoaXMub2JqLmNvbnRleHQpIHx8IHt9O1xuICBpZiAoIWludGVncmF0aW9uKSByZXR1cm4gY2xvbmUob3B0aW9ucyk7XG4gIGlmICghdGhpcy5lbmFibGVkKGludGVncmF0aW9uKSkgcmV0dXJuO1xuICB2YXIgaW50ZWdyYXRpb25zID0gdGhpcy5pbnRlZ3JhdGlvbnMoKTtcbiAgdmFyIHZhbHVlID0gaW50ZWdyYXRpb25zW2ludGVncmF0aW9uXSB8fCBvYmpDYXNlKGludGVncmF0aW9ucywgaW50ZWdyYXRpb24pO1xuICBpZiAoJ2Jvb2xlYW4nID09IHR5cGVvZiB2YWx1ZSkgdmFsdWUgPSB7fTtcbiAgcmV0dXJuIHZhbHVlIHx8IHt9O1xufTtcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIGludGVncmF0aW9uIGlzIGVuYWJsZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGludGVncmF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkZhY2FkZS5wcm90b3R5cGUuZW5hYmxlZCA9IGZ1bmN0aW9uIChpbnRlZ3JhdGlvbikge1xuICB2YXIgYWxsRW5hYmxlZCA9IHRoaXMucHJveHkoJ29wdGlvbnMucHJvdmlkZXJzLmFsbCcpO1xuICBpZiAodHlwZW9mIGFsbEVuYWJsZWQgIT09ICdib29sZWFuJykgYWxsRW5hYmxlZCA9IHRoaXMucHJveHkoJ29wdGlvbnMuYWxsJyk7XG4gIGlmICh0eXBlb2YgYWxsRW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSBhbGxFbmFibGVkID0gdHJ1ZTtcblxuICB2YXIgZW5hYmxlZCA9IGFsbEVuYWJsZWQgJiYgaXNFbmFibGVkKGludGVncmF0aW9uKTtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMoKTtcblxuICAvLyBJZiB0aGUgaW50ZWdyYXRpb24gaXMgZXhwbGljaXRseSBlbmFibGVkIG9yIGRpc2FibGVkLCB1c2UgdGhhdFxuICAvLyBGaXJzdCwgY2hlY2sgb3B0aW9ucy5wcm92aWRlcnMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGlmIChvcHRpb25zLnByb3ZpZGVycyAmJiBvcHRpb25zLnByb3ZpZGVycy5oYXNPd25Qcm9wZXJ0eShpbnRlZ3JhdGlvbikpIHtcbiAgICBlbmFibGVkID0gb3B0aW9ucy5wcm92aWRlcnNbaW50ZWdyYXRpb25dO1xuICB9XG5cbiAgLy8gTmV4dCwgY2hlY2sgZm9yIHRoZSBpbnRlZ3JhdGlvbidzIGV4aXN0ZW5jZSBpbiAnb3B0aW9ucycgdG8gZW5hYmxlIGl0LlxuICAvLyBJZiB0aGUgc2V0dGluZ3MgYXJlIGEgYm9vbGVhbiwgdXNlIHRoYXQsIG90aGVyd2lzZSBpdCBzaG91bGQgYmUgZW5hYmxlZC5cbiAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoaW50ZWdyYXRpb24pKSB7XG4gICAgdmFyIHNldHRpbmdzID0gb3B0aW9uc1tpbnRlZ3JhdGlvbl07XG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBlbmFibGVkID0gc2V0dGluZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbmFibGVkID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGBpbnRlZ3JhdGlvbmAgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW50ZWdyYXRpb25cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkZhY2FkZS5wcm90b3R5cGUuaW50ZWdyYXRpb25zID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMub2JqLmludGVncmF0aW9uc1xuICAgIHx8IHRoaXMucHJveHkoJ29wdGlvbnMucHJvdmlkZXJzJylcbiAgICB8fCB0aGlzLm9wdGlvbnMoKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgdXNlciBpcyBhY3RpdmUuXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5GYWNhZGUucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFjdGl2ZSA9IHRoaXMucHJveHkoJ29wdGlvbnMuYWN0aXZlJyk7XG4gIGlmIChhY3RpdmUgPT09IG51bGwgfHwgYWN0aXZlID09PSB1bmRlZmluZWQpIGFjdGl2ZSA9IHRydWU7XG4gIHJldHVybiBhY3RpdmU7XG59O1xuXG4vKipcbiAqIEdldCBgc2Vzc2lvbklkIC8gYW5vbnltb3VzSWRgLlxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5GYWNhZGUucHJvdG90eXBlLnNlc3Npb25JZCA9XG5GYWNhZGUucHJvdG90eXBlLmFub255bW91c0lkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZmllbGQoJ2Fub255bW91c0lkJylcbiAgICB8fCB0aGlzLmZpZWxkKCdzZXNzaW9uSWQnKTtcbn07XG5cbi8qKlxuICogU2V0dXAgc29tZSBiYXNpYyBwcm94aWVzLlxuICovXG5cbkZhY2FkZS5wcm90b3R5cGUudXNlcklkID0gRmFjYWRlLmZpZWxkKCd1c2VySWQnKTtcbkZhY2FkZS5wcm90b3R5cGUuY2hhbm5lbCA9IEZhY2FkZS5maWVsZCgnY2hhbm5lbCcpO1xuRmFjYWRlLnByb3RvdHlwZS50aW1lc3RhbXAgPSBGYWNhZGUuZmllbGQoJ3RpbWVzdGFtcCcpO1xuRmFjYWRlLnByb3RvdHlwZS51c2VyQWdlbnQgPSBGYWNhZGUucHJveHkoJ29wdGlvbnMudXNlckFnZW50Jyk7XG5GYWNhZGUucHJvdG90eXBlLmlwID0gRmFjYWRlLnByb3h5KCdvcHRpb25zLmlwJyk7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjbG9uZWQgYW5kIHRyYXZlcnNlZCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBvYmpcbiAqIEByZXR1cm4ge01peGVkfVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmope1xuICB2YXIgY2xvbmVkID0gY2xvbmUob2JqKTtcbiAgdHJhdmVyc2UoY2xvbmVkKTtcbiAgcmV0dXJuIGNsb25lZDtcbn1cbiIsIlxudmFyIGFmdGVyID0gcmVxdWlyZSgnYWZ0ZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG5cbi8qKlxuICogTWl4aW4gZW1pdHRlci5cbiAqL1xuXG5FbWl0dGVyKGV4cG9ydHMpO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IG9wdGlvbiB0byB0aGUgaW50ZWdyYXRpb24gYnkgYGtleWAgd2l0aCBkZWZhdWx0IGB2YWx1ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqIEByZXR1cm4ge0ludGVncmF0aW9ufVxuICovXG5cbmV4cG9ydHMub3B0aW9uID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5wcm90b3R5cGUuZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBnbG9iYWwgdmFyaWFibGUgYGtleWAgb3duZWQgYnkgdGhlIGludGVncmF0aW9uLCB3aGljaCB3aWxsIGJlXG4gKiB1c2VkIHRvIHRlc3Qgd2hldGhlciB0aGUgaW50ZWdyYXRpb24gaXMgYWxyZWFkeSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZ2xvYmFsXG4gKiBAcmV0dXJuIHtJbnRlZ3JhdGlvbn1cbiAqL1xuXG5leHBvcnRzLmdsb2JhbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5wcm90b3R5cGUuZ2xvYmFscy5wdXNoKGtleSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIE1hcmsgdGhlIGludGVncmF0aW9uIGFzIGFzc3VtaW5nIGFuIGluaXRpYWwgcGFnZXZpZXcsIHNvIHRvIGRlZmVyIGxvYWRpbmdcbiAqIHRoZSBzY3JpcHQgdW50aWwgdGhlIGZpcnN0IGBwYWdlYCBjYWxsLCBub29wIHRoZSBmaXJzdCBgaW5pdGlhbGl6ZWAuXG4gKlxuICogQHJldHVybiB7SW50ZWdyYXRpb259XG4gKi9cblxuZXhwb3J0cy5hc3N1bWVzUGFnZXZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJvdG90eXBlLl9hc3N1bWVzUGFnZXZpZXcgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqXG4gKiBNYXJrIHRoZSBpbnRlZ3JhdGlvbiBhcyBiZWluZyBcInJlYWR5XCIgb25jZSBgbG9hZGAgaXMgY2FsbGVkLlxuICpcbiAqIEByZXR1cm4ge0ludGVncmF0aW9ufVxuICovXG5cbmV4cG9ydHMucmVhZHlPbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJvdG90eXBlLl9yZWFkeU9uTG9hZCA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIE1hcmsgdGhlIGludGVncmF0aW9uIGFzIGJlaW5nIFwicmVhZHlcIiBvbmNlIGBsb2FkYCBpcyBjYWxsZWQuXG4gKlxuICogQHJldHVybiB7SW50ZWdyYXRpb259XG4gKi9cblxuZXhwb3J0cy5yZWFkeU9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wcm90b3R5cGUuX3JlYWR5T25Jbml0aWFsaXplID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59OyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCd0by1uby1jYXNlJyk7XG52YXIgYWZ0ZXIgPSByZXF1aXJlKCdhZnRlcicpO1xudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHRpY2sgPSByZXF1aXJlKCduZXh0LXRpY2snKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cycpO1xudmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG5cblxuLyoqXG4gKiBNaXhpbiBlbWl0dGVyLlxuICovXG5cbkVtaXR0ZXIoZXhwb3J0cyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqL1xuXG5leHBvcnRzLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZXhwb3J0cy5sb2FkID0gZnVuY3Rpb24gKGNiKSB7XG4gIGNhbGxiYWNrLmFzeW5jKGNiKTtcbn07XG5cblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbmV4cG9ydHMucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe307XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5leHBvcnRzLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe307XG5cbi8qKlxuICogR2V0IGV2ZW50cyB0aGF0IG1hdGNoIGBzdHJgLlxuICogXG4gKiBFeGFtcGxlczpcbiAqIFxuICogICAgeyBteV9ldmVudDogJ2E0OTkxYjg4JyB9XG4gKiAgICAudHJhY2soJ015IEV2ZW50Jyk7XG4gKiAgICAvLyA9PiBbXCJhNDk5MWI4OFwiXVxuICogICAgLnRyYWNrKCd3aGF0ZXZlcicpO1xuICogICAgLy8gPT4gW11cbiAqIFxuICogICAgW3sga2V5OiAnbXkgZXZlbnQnLCB2YWx1ZTogJzliNWViMWZhJyB9XVxuICogICAgLnRyYWNrKCdteV9ldmVudCcpO1xuICogICAgLy8gPT4gW1wiOWI1ZWIxZmFcIl1cbiAqICAgIC50cmFjaygnd2hhdGV2ZXInKTtcbiAqICAgIC8vID0+IFtdXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmV2ZW50cyA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBldmVudHMgPSB0aGlzLm9wdGlvbnMuZXZlbnRzO1xuICB2YXIgYSA9IG5vcm1hbGl6ZShzdHIpO1xuICB2YXIgcmV0ID0gW107XG5cbiAgLy8gbm8gZXZlbnRzXG4gIGlmICghZXZlbnRzKSByZXR1cm4gcmV0O1xuXG4gIC8vIG9iamVjdFxuICBpZiAoJ29iamVjdCcgPT0gdHlwZShldmVudHMpKSB7XG4gICAgZm9yICh2YXIgayBpbiBldmVudHMpIHtcbiAgICAgIHZhciBpdGVtID0gZXZlbnRzW2tdO1xuICAgICAgdmFyIGIgPSBub3JtYWxpemUoayk7XG4gICAgICBpZiAoYiA9PSBhKSByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICAvLyBhcnJheVxuICBpZiAoJ2FycmF5JyA9PSB0eXBlKGV2ZW50cykpIHtcbiAgICBpZiAoIWV2ZW50cy5sZW5ndGgpIHJldHVybiByZXQ7XG4gICAgaWYgKCFldmVudHNbMF0ua2V5KSByZXR1cm4gcmV0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBpdGVtID0gZXZlbnRzW2ldO1xuICAgICAgdmFyIGIgPSBub3JtYWxpemUoaXRlbS5rZXkpO1xuICAgICAgaWYgKGIgPT0gYSkgcmV0LnB1c2goaXRlbS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogSW52b2tlIGEgYG1ldGhvZGAgdGhhdCBtYXkgb3IgbWF5IG5vdCBleGlzdCBvbiB0aGUgcHJvdG90eXBlIHdpdGggYGFyZ3NgLFxuICogcXVldWVpbmcgb3Igbm90IGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpbnRlZ3JhdGlvbiBpcyBcInJlYWR5XCIuIERvbid0XG4gKiB0cnVzdCB0aGUgbWV0aG9kIGNhbGwsIHNpbmNlIGl0IGNvbnRhaW5zIGludGVncmF0aW9uIHBhcnR5IGNvZGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtNaXhlZH0gYXJncy4uLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5pbnZva2UgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGlmICghdGhpc1ttZXRob2RdKSByZXR1cm47XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICBpZiAoIXRoaXMuX3JlYWR5KSByZXR1cm4gdGhpcy5xdWV1ZShtZXRob2QsIGFyZ3MpO1xuICB2YXIgcmV0O1xuXG4gIHRyeSB7XG4gICAgdGhpcy5kZWJ1ZygnJXMgd2l0aCAlbycsIG1ldGhvZCwgYXJncyk7XG4gICAgcmV0ID0gdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5kZWJ1ZygnZXJyb3IgJW8gY2FsbGluZyAlcyB3aXRoICVvJywgZSwgbWV0aG9kLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG5cbi8qKlxuICogUXVldWUgYSBgbWV0aG9kYCB3aXRoIGBhcmdzYC4gSWYgdGhlIGludGVncmF0aW9uIGFzc3VtZXMgYW4gaW5pdGlhbFxuICogcGFnZXZpZXcsIHRoZW4gbGV0IHRoZSBmaXJzdCBjYWxsIHRvIGBwYWdlYCBwYXNzIHRocm91Z2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5xdWV1ZSA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgaWYgKCdwYWdlJyA9PSBtZXRob2QgJiYgdGhpcy5fYXNzdW1lc1BhZ2V2aWV3ICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UuYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICB0aGlzLl9xdWV1ZS5wdXNoKHsgbWV0aG9kOiBtZXRob2QsIGFyZ3M6IGFyZ3MgfSk7XG59O1xuXG5cbi8qKlxuICogRmx1c2ggdGhlIGludGVybmFsIHF1ZXVlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgdmFyIGNhbGw7XG4gIHdoaWxlIChjYWxsID0gdGhpcy5fcXVldWUuc2hpZnQoKSkgdGhpc1tjYWxsLm1ldGhvZF0uYXBwbHkodGhpcywgY2FsbC5hcmdzKTtcbn07XG5cblxuLyoqXG4gKiBSZXNldCB0aGUgaW50ZWdyYXRpb24sIHJlbW92aW5nIGl0cyBnbG9iYWwgdmFyaWFibGVzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBrZXk7IGtleSA9IHRoaXMuZ2xvYmFsc1tpXTsgaSsrKSB3aW5kb3dba2V5XSA9IHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBXcmFwIHRoZSBpbml0aWFsaXplIG1ldGhvZCBpbiBhbiBleGlzdHMgY2hlY2ssIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXQgZm9yXG4gKiBldmVyeSBzaW5nbGUgaW50ZWdyYXRpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5fd3JhcEluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbml0aWFsaXplID0gdGhpcy5pbml0aWFsaXplO1xuICB0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWJ1ZygnaW5pdGlhbGl6ZScpO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgcmV0ID0gaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZW1pdCgnaW5pdGlhbGl6ZScpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9yZWFkeU9uSW5pdGlhbGl6ZSkge1xuICAgICAgdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuZW1pdCgncmVhZHknKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIGlmICh0aGlzLl9hc3N1bWVzUGFnZXZpZXcpIHRoaXMuaW5pdGlhbGl6ZSA9IGFmdGVyKDIsIHRoaXMuaW5pdGlhbGl6ZSk7XG59O1xuXG5cbi8qKlxuICogV3JhcCB0aGUgbG9hZCBtZXRob2QgaW4gYGRlYnVnYCBjYWxscywgc28gZXZlcnkgaW50ZWdyYXRpb24gZ2V0cyB0aGVtXG4gKiBhdXRvbWF0aWNhbGx5LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuX3dyYXBMb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbG9hZCA9IHRoaXMubG9hZDtcbiAgdGhpcy5sb2FkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZGVidWcoJ2xvYWRpbmcnKTtcblxuICAgIGlmICh0aGlzLmxvYWRlZCgpKSB7XG4gICAgICB0aGlzLmRlYnVnKCdhbHJlYWR5IGxvYWRlZCcpO1xuICAgICAgdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLl9yZWFkeU9uTG9hZCkgc2VsZi5lbWl0KCdyZWFkeScpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvYWQuY2FsbCh0aGlzLCBmdW5jdGlvbiAoZXJyLCBlKSB7XG4gICAgICBzZWxmLmRlYnVnKCdsb2FkZWQnKTtcbiAgICAgIHNlbGYuZW1pdCgnbG9hZCcpO1xuICAgICAgaWYgKHNlbGYuX3JlYWR5T25Mb2FkKSBzZWxmLmVtaXQoJ3JlYWR5Jyk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnIsIGUpO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4vKipcbiAqIFdyYXAgdGhlIHBhZ2UgbWV0aG9kIHRvIGNhbGwgYGluaXRpYWxpemVgIGluc3RlYWQgaWYgdGhlIGludGVncmF0aW9uIGFzc3VtZXNcbiAqIGEgcGFnZXZpZXcuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5fd3JhcFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwYWdlID0gdGhpcy5wYWdlO1xuICB0aGlzLnBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2Fzc3VtZXNQYWdldmlldyAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgdHJhY2sgbWV0aG9kIHRvIGNhbGzCoG90aGVyIGVjb21tZXJjZSBtZXRob2RzIGlmXG4gKiBhdmFpbGFibGUgZGVwZW5kaW5nIG9uIHRoZSBgdHJhY2suZXZlbnQoKWAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5fd3JhcFRyYWNrID0gZnVuY3Rpb24oKXtcbiAgdmFyIHQgPSB0aGlzLnRyYWNrO1xuICB0aGlzLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICAgIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gICAgdmFyIGNhbGxlZDtcbiAgICB2YXIgcmV0O1xuXG4gICAgZm9yICh2YXIgbWV0aG9kIGluIGV2ZW50cykge1xuICAgICAgdmFyIHJlZ2V4cCA9IGV2ZW50c1ttZXRob2RdO1xuICAgICAgaWYgKCF0aGlzW21ldGhvZF0pIGNvbnRpbnVlO1xuICAgICAgaWYgKCFyZWdleHAudGVzdChldmVudCkpIGNvbnRpbnVlO1xuICAgICAgcmV0ID0gdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsZWQpIHJldCA9IHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZXJnZSBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVzdFxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG52YXIgZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVzdCwgc3JjLCByZWN1cnNpdmUpIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBzcmMpIHtcbiAgICBpZiAocmVjdXJzaXZlICYmIGRlc3RbcHJvcF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgc3JjW3Byb3BdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBkZXN0W3Byb3BdID0gZGVmYXVsdHMoZGVzdFtwcm9wXSwgc3JjW3Byb3BdLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKCEgKHByb3AgaW4gZGVzdCkpIHtcbiAgICAgIGRlc3RbcHJvcF0gPSBzcmNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgZGVmYXVsdHNgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiB3aW5kb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9kZWJ1ZycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHlwZTtcblxudHJ5IHtcbiAgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbn0gY2F0Y2goZSl7XG4gIHR5cGUgPSByZXF1aXJlKCd0eXBlLWNvbXBvbmVudCcpO1xufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ2xvbmVzIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gYW55IG9iamVjdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZShvYmope1xuICBzd2l0Y2ggKHR5cGUob2JqKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB2YXIgY29weSA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb3B5W2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3B5O1xuXG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgdmFyIGNvcHkgPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29weVtpXSA9IGNsb25lKG9ialtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAvLyBmcm9tIG1pbGxlcm1lZGVpcm9zL2FtZC11dGlscyAtIE1JVFxuICAgICAgdmFyIGZsYWdzID0gJyc7XG4gICAgICBmbGFncyArPSBvYmoubXVsdGlsaW5lID8gJ20nIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouZ2xvYmFsID8gJ2cnIDogJyc7XG4gICAgICBmbGFncyArPSBvYmouaWdub3JlQ2FzZSA/ICdpJyA6ICcnO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAob2JqLnNvdXJjZSwgZmxhZ3MpO1xuXG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gbmV3IERhdGUob2JqLmdldFRpbWUoKSk7XG5cbiAgICBkZWZhdWx0OiAvLyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwg4oCmXG4gICAgICByZXR1cm4gb2JqO1xuICB9XG59XG4iLCJcbnZhciBiaW5kID0gcmVxdWlyZSgnYmluZCcpXG4gICwgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmQtYWxsJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGJpbmRgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGJpbmQ7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGJpbmRBbGxgLlxuICovXG5cbmV4cG9ydHMuYWxsID0gYmluZEFsbDtcblxuXG4vKipcbiAqIEV4cG9zZSBgYmluZE1ldGhvZHNgLlxuICovXG5cbmV4cG9ydHMubWV0aG9kcyA9IGJpbmRNZXRob2RzO1xuXG5cbi8qKlxuICogQmluZCBgbWV0aG9kc2Agb24gYG9iamAgdG8gYWx3YXlzIGJlIGNhbGxlZCB3aXRoIHRoZSBgb2JqYCBhcyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RzLi4uXG4gKi9cblxuZnVuY3Rpb24gYmluZE1ldGhvZHMgKG9iaiwgbWV0aG9kcykge1xuICBtZXRob2RzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICBmb3IgKHZhciBpID0gMCwgbWV0aG9kOyBtZXRob2QgPSBtZXRob2RzW2ldOyBpKyspIHtcbiAgICBvYmpbbWV0aG9kXSA9IGJpbmQob2JqLCBvYmpbbWV0aG9kXSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJcbi8qKlxuICogRXhwb3NlIGB0b1VuaXhUaW1lc3RhbXBgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Vbml4VGltZXN0YW1wO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBkYXRlYCBpbnRvIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQHBhcmFtIHtEYXRlfVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIHRvVW5peFRpbWVzdGFtcCAoZGF0ZSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xufSIsIlxuLyoqXG4gKiBHZW5lcmF0ZSBhIHNsdWcgZnJvbSB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgZ2VuZXJhdGUoJ2ZvbyBiYXInKTtcbiAqICAgICAgICAvLyA+IGZvby1iYXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbmZpZyB7U3RyaW5nfFJlZ0V4cH0gW3JlcGxhY2VdIGNoYXJhY3RlcnMgdG8gcmVwbGFjZSwgZGVmYXVsdGVkIHRvIGAvW15hLXowLTldL2dgXG4gKiBAY29uZmlnIHtTdHJpbmd9IFtzZXBhcmF0b3JdIHNlcGFyYXRvciB0byBpbnNlcnQsIGRlZmF1bHRlZCB0byBgLWBcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2Uob3B0aW9ucy5yZXBsYWNlIHx8IC9bXmEtejAtOV0vZywgJyAnKVxuICAgIC5yZXBsYWNlKC9eICt8ICskL2csICcnKVxuICAgIC5yZXBsYWNlKC8gKy9nLCBvcHRpb25zLnNlcGFyYXRvciB8fCAnLScpXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT0gJ2Z1bmN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGYpeyBzZXRJbW1lZGlhdGUoZikgfVxufVxuLy8gbGVnYWN5IG5vZGUuanNcbmVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09ICdmdW5jdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLm5leHRUaWNrXG59XG4vLyBmYWxsYmFjayBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC8gcG9zdE1lc3NhZ2UgYmVoYXZlcyBiYWRseSBvbiBJRThcbmVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QgfHwgIXdpbmRvdy5wb3N0TWVzc2FnZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGYpeyBzZXRUaW1lb3V0KGYpIH07XG59IGVsc2Uge1xuICB2YXIgcSA9IFtdO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBxLmxlbmd0aCkge1xuICAgICAgdHJ5IHsgcVtpKytdKCk7IH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHEgPSBxLnNsaWNlKGkpO1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3RpYyEnLCAnKicpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBxLmxlbmd0aCA9IDA7XG4gIH0sIHRydWUpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pe1xuICAgIGlmICghcS5sZW5ndGgpIHdpbmRvdy5wb3N0TWVzc2FnZSgndGljIScsICcqJyk7XG4gICAgcS5wdXNoKGZuKTtcbiAgfVxufVxuIiwiXG50cnkge1xuICB2YXIgYmluZCA9IHJlcXVpcmUoJ2JpbmQnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgdmFyIGJpbmQgPSByZXF1aXJlKCdiaW5kLWNvbXBvbmVudCcpO1xufVxuXG52YXIgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmQtYWxsJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGJpbmRgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGJpbmQ7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGJpbmRBbGxgLlxuICovXG5cbmV4cG9ydHMuYWxsID0gYmluZEFsbDtcblxuXG4vKipcbiAqIEV4cG9zZSBgYmluZE1ldGhvZHNgLlxuICovXG5cbmV4cG9ydHMubWV0aG9kcyA9IGJpbmRNZXRob2RzO1xuXG5cbi8qKlxuICogQmluZCBgbWV0aG9kc2Agb24gYG9iamAgdG8gYWx3YXlzIGJlIGNhbGxlZCB3aXRoIHRoZSBgb2JqYCBhcyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RzLi4uXG4gKi9cblxuZnVuY3Rpb24gYmluZE1ldGhvZHMgKG9iaiwgbWV0aG9kcykge1xuICBtZXRob2RzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICBmb3IgKHZhciBpID0gMCwgbWV0aG9kOyBtZXRob2QgPSBtZXRob2RzW2ldOyBpKyspIHtcbiAgICBvYmpbbWV0aG9kXSA9IGJpbmQob2JqLCBvYmpbbWV0aG9kXSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJcbnZhciBDYXNlID0gcmVxdWlyZSgnY2FzZScpO1xuXG5cbnZhciBjYXNlcyA9IFtcbiAgQ2FzZS51cHBlcixcbiAgQ2FzZS5sb3dlcixcbiAgQ2FzZS5zbmFrZSxcbiAgQ2FzZS5wYXNjYWwsXG4gIENhc2UuY2FtZWwsXG4gIENhc2UuY29uc3RhbnQsXG4gIENhc2UudGl0bGUsXG4gIENhc2UuY2FwaXRhbCxcbiAgQ2FzZS5zZW50ZW5jZVxuXTtcblxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLCBleHBvcnRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmZpbmQgPSBtdWx0aXBsZShmaW5kKTtcblxuXG4vKipcbiAqIEV4cG9ydCB0aGUgcmVwbGFjZW1lbnQgZnVuY3Rpb24sIHJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMucmVwbGFjZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsKSB7XG4gIG11bHRpcGxlKHJlcGxhY2UpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8qKlxuICogRXhwb3J0IHRoZSBkZWxldGUgZnVuY3Rpb24sIHJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMuZGVsID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gIG11bHRpcGxlKGRlbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLyoqXG4gKiBDb21wb3NlIGFwcGx5aW5nIHRoZSBmdW5jdGlvbiB0byBhIG5lc3RlZCBrZXlcbiAqL1xuXG5mdW5jdGlvbiBtdWx0aXBsZSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGtleSwgdmFsKSB7XG4gICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIG9iaiA9IGZpbmQob2JqLCBrZXkpO1xuXG4gICAgICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgfVxuXG4gICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgIHJldHVybiBmbihvYmosIGtleSwgdmFsKTtcbiAgfTtcbn1cblxuXG4vKipcbiAqIEZpbmQgYW4gb2JqZWN0IGJ5IGl0cyBrZXlcbiAqXG4gKiBmaW5kKHsgZmlyc3RfbmFtZSA6ICdDYWx2aW4nIH0sICdmaXJzdE5hbWUnKVxuICovXG5cbmZ1bmN0aW9uIGZpbmQgKG9iaiwga2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2FzZWQgPSBjYXNlc1tpXShrZXkpO1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoY2FzZWQpKSByZXR1cm4gb2JqW2Nhc2VkXTtcbiAgfVxufVxuXG5cbi8qKlxuICogRGVsZXRlIGEgdmFsdWUgZm9yIGEgZ2l2ZW4ga2V5XG4gKlxuICogZGVsKHsgYSA6ICdiJywgeCA6ICd5JyB9LCAnWCcgfSkgLT4geyBhIDogJ2InIH1cbiAqL1xuXG5mdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2FzZWQgPSBjYXNlc1tpXShrZXkpO1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoY2FzZWQpKSBkZWxldGUgb2JqW2Nhc2VkXTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5cbi8qKlxuICogUmVwbGFjZSBhbiBvYmplY3RzIGV4aXN0aW5nIHZhbHVlIHdpdGggYSBuZXcgb25lXG4gKlxuICogcmVwbGFjZSh7IGEgOiAnYicgfSwgJ2EnLCAnYycpIC0+IHsgYSA6ICdjJyB9XG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZSAob2JqLCBrZXksIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNhc2VkID0gY2FzZXNbaV0oa2V5KTtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGNhc2VkKSkgb2JqW2Nhc2VkXSA9IHZhbDtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcblxuXG4vKipcbiAqIEV4cG9zZSBgd2hlbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB3aGVuO1xuXG5cbi8qKlxuICogTG9vcCBvbiBhIHNob3J0IGludGVydmFsIHVudGlsIGBjb25kaXRpb24oKWAgaXMgdHJ1ZSwgdGhlbiBjYWxsIGBmbmAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZGl0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtOdW1iZXJ9IGludGVydmFsIChvcHRpb25hbClcbiAqL1xuXG5mdW5jdGlvbiB3aGVuIChjb25kaXRpb24sIGZuLCBpbnRlcnZhbCkge1xuICBpZiAoY29uZGl0aW9uKCkpIHJldHVybiBjYWxsYmFjay5hc3luYyhmbik7XG5cbiAgdmFyIHJlZiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNvbmRpdGlvbigpKSByZXR1cm47XG4gICAgY2FsbGJhY2soZm4pO1xuICAgIGNsZWFySW50ZXJ2YWwocmVmKTtcbiAgfSwgaW50ZXJ2YWwgfHwgMTApO1xufSIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xufVxuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuLyoqXG4gKiBFeHBvc2UgYEJhdGNoYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhdGNoO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBCYXRjaC5cbiAqL1xuXG5mdW5jdGlvbiBCYXRjaCgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJhdGNoKSkgcmV0dXJuIG5ldyBCYXRjaDtcbiAgdGhpcy5mbnMgPSBbXTtcbiAgdGhpcy5jb25jdXJyZW5jeShJbmZpbml0eSk7XG4gIHRoaXMudGhyb3dzKHRydWUpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdGhpcy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0IGZyb20gYEV2ZW50RW1pdHRlci5wcm90b3R5cGVgLlxuICovXG5cbmlmIChFdmVudEVtaXR0ZXIpIHtcbiAgQmF0Y2gucHJvdG90eXBlLl9fcHJvdG9fXyA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGU7XG59IGVsc2Uge1xuICBFbWl0dGVyKEJhdGNoLnByb3RvdHlwZSk7XG59XG5cbi8qKlxuICogU2V0IGNvbmN1cnJlbmN5IHRvIGBuYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7QmF0Y2h9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhdGNoLnByb3RvdHlwZS5jb25jdXJyZW5jeSA9IGZ1bmN0aW9uKG4pe1xuICB0aGlzLm4gPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7QmF0Y2h9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhdGNoLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oZm4pe1xuICB0aGlzLmZucy5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB3ZXRoZXIgQmF0Y2ggd2lsbCBvciB3aWxsIG5vdCB0aHJvdyB1cC5cbiAqXG4gKiBAcGFyYW0gIHtCb29sZWFufSB0aHJvd3NcbiAqIEByZXR1cm4ge0JhdGNofVxuICogQGFwaSBwdWJsaWNcbiAqL1xuQmF0Y2gucHJvdG90eXBlLnRocm93cyA9IGZ1bmN0aW9uKHRocm93cykge1xuICB0aGlzLmUgPSAhIXRocm93cztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGUgYWxsIHF1ZXVlZCBmdW5jdGlvbnMgaW4gcGFyYWxsZWwsXG4gKiBleGVjdXRpbmcgYGNiKGVyciwgcmVzdWx0cylgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcmV0dXJuIHtCYXRjaH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmF0Y2gucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGNiKXtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gICAgLCB0b3RhbCA9IHRoaXMuZm5zLmxlbmd0aFxuICAgICwgcGVuZGluZyA9IHRvdGFsXG4gICAgLCByZXN1bHRzID0gW11cbiAgICAsIGVycm9ycyA9IFtdXG4gICAgLCBjYiA9IGNiIHx8IG5vb3BcbiAgICAsIGZucyA9IHRoaXMuZm5zXG4gICAgLCBtYXggPSB0aGlzLm5cbiAgICAsIHRocm93cyA9IHRoaXMuZVxuICAgICwgaW5kZXggPSAwXG4gICAgLCBkb25lO1xuXG4gIC8vIGVtcHR5XG4gIGlmICghZm5zLmxlbmd0aCkgcmV0dXJuIGNiKG51bGwsIHJlc3VsdHMpO1xuXG4gIC8vIHByb2Nlc3NcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB2YXIgaSA9IGluZGV4Kys7XG4gICAgdmFyIGZuID0gZm5zW2ldO1xuICAgIGlmICghZm4pIHJldHVybjtcbiAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZTtcblxuICAgIHRyeSB7XG4gICAgICBmbihjYWxsYmFjayk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGVyciwgcmVzKXtcbiAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICBpZiAoZXJyICYmIHRocm93cykgcmV0dXJuIGRvbmUgPSB0cnVlLCBjYihlcnIpO1xuICAgICAgdmFyIGNvbXBsZXRlID0gdG90YWwgLSBwZW5kaW5nICsgMTtcbiAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZTtcblxuICAgICAgcmVzdWx0c1tpXSA9IHJlcztcbiAgICAgIGVycm9yc1tpXSA9IGVycjtcblxuICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIHtcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHZhbHVlOiByZXMsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgIHBlbmRpbmc6IHBlbmRpbmcsXG4gICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlLFxuICAgICAgICBwZXJjZW50OiBjb21wbGV0ZSAvIHRvdGFsICogMTAwIHwgMCxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgZHVyYXRpb246IGVuZCAtIHN0YXJ0XG4gICAgICB9KTtcblxuICAgICAgaWYgKC0tcGVuZGluZykgbmV4dCgpXG4gICAgICBlbHNlIGlmKCF0aHJvd3MpIGNiKGVycm9ycywgcmVzdWx0cyk7XG4gICAgICBlbHNlIGNiKG51bGwsIHJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbmN1cnJlbmN5XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gbWF4KSBicmVhaztcbiAgICBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG4iLCJcbi8qKlxuICogRXhwb3NlIGBpc0VtcHR5YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW1wdHk7XG5cblxuLyoqXG4gKiBIYXMuXG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSB2YWx1ZSBpcyBcImVtcHR5XCIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzRW1wdHkgKHZhbCkge1xuICBpZiAobnVsbCA9PSB2YWwpIHJldHVybiB0cnVlO1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIDAgPT09IHZhbDtcbiAgaWYgKHVuZGVmaW5lZCAhPT0gdmFsLmxlbmd0aCkgcmV0dXJuIDAgPT09IHZhbC5sZW5ndGg7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIGlmIChoYXMuY2FsbCh2YWwsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59IiwiLyoqXG4gKiBFeHBvc2UgYGRlZmF1bHRzYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuZnVuY3Rpb24gZGVmYXVsdHMgKGRlc3QsIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAoISAocHJvcCBpbiBkZXN0KSkge1xuICAgICAgZGVzdFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYGlzRW1haWxgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbWFpbDtcblxuXG4vKipcbiAqIEVtYWlsIGFkZHJlc3MgbWF0Y2hlci5cbiAqL1xuXG52YXIgbWF0Y2hlciA9IC8uK1xcQC4rXFwuLisvO1xuXG5cbi8qKlxuICogTG9vc2VseSB2YWxpZGF0ZSBhbiBlbWFpbCBhZGRyZXNzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNFbWFpbCAoc3RyaW5nKSB7XG4gIHJldHVybiBtYXRjaGVyLnRlc3Qoc3RyaW5nKTtcbn0iLCJcbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uKHVybCl7XG4gIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSB1cmw7XG4gIHJldHVybiB7XG4gICAgaHJlZjogYS5ocmVmLFxuICAgIGhvc3Q6IGEuaG9zdCxcbiAgICBwb3J0OiBhLnBvcnQsXG4gICAgaGFzaDogYS5oYXNoLFxuICAgIGhvc3RuYW1lOiBhLmhvc3RuYW1lLFxuICAgIHBhdGhuYW1lOiBhLnBhdGhuYW1lLFxuICAgIHByb3RvY29sOiBhLnByb3RvY29sLFxuICAgIHNlYXJjaDogYS5zZWFyY2gsXG4gICAgcXVlcnk6IGEuc2VhcmNoLnNsaWNlKDEpXG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYHVybGAgaXMgYWJzb2x1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24odXJsKXtcbiAgaWYgKDAgPT0gdXJsLmluZGV4T2YoJy8vJykpIHJldHVybiB0cnVlO1xuICBpZiAofnVybC5pbmRleE9mKCc6Ly8nKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYHVybGAgaXMgcmVsYXRpdmUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5pc1JlbGF0aXZlID0gZnVuY3Rpb24odXJsKXtcbiAgcmV0dXJuICEgZXhwb3J0cy5pc0Fic29sdXRlKHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGB1cmxgIGlzIGNyb3NzIGRvbWFpbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmlzQ3Jvc3NEb21haW4gPSBmdW5jdGlvbih1cmwpe1xuICB1cmwgPSBleHBvcnRzLnBhcnNlKHVybCk7XG4gIHJldHVybiB1cmwuaG9zdG5hbWUgIT0gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB8fCB1cmwucG9ydCAhPSBsb2NhdGlvbi5wb3J0XG4gICAgfHwgdXJsLnByb3RvY29sICE9IGxvY2F0aW9uLnByb3RvY29sO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbm9uaWNhbCAoKSB7XG4gIHZhciB0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcbiAgZm9yICh2YXIgaSA9IDAsIHRhZzsgdGFnID0gdGFnc1tpXTsgaSsrKSB7XG4gICAgaWYgKCdjYW5vbmljYWwnID09IHRhZy5nZXRBdHRyaWJ1dGUoJ3JlbCcpKSByZXR1cm4gdGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICB9XG59OyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpLnN0cmluZ2lmeTtcbnZhciBzdWIgPSByZXF1aXJlKCdzdWJzdGl0dXRlJyk7XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwaXhlbCBsb2FkZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHBhdGgpe1xuICByZXR1cm4gZnVuY3Rpb24ocXVlcnksIG9iaiwgZm4pe1xuICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBvYmopIGZuID0gb2JqLCBvYmogPSB7fTtcbiAgICBvYmogPSBvYmogfHwge307XG4gICAgZm4gPSBmbiB8fCBmdW5jdGlvbigpe307XG4gICAgdmFyIHVybCA9IHN1YihwYXRoLCBvYmopO1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgaW1nLm9uZXJyb3IgPSBlcnJvcihmbiwgJ2ZhaWxlZCB0byBsb2FkIHBpeGVsJywgaW1nKTtcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKXsgZm4oKTsgfTtcbiAgICBxdWVyeSA9IHN0cmluZ2lmeShxdWVyeSk7XG4gICAgaWYgKHF1ZXJ5KSBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICAgIGltZy5zcmMgPSB1cmwgKyBxdWVyeTtcbiAgICBpbWcud2lkdGggPSAxO1xuICAgIGltZy5oZWlnaHQgPSAxO1xuICAgIHJldHVybiBpbWc7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB7RnVjbnRpb259IGZuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHtJbWFnZX0gaW1nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVycm9yKGZuLCBtZXNzYWdlLCBpbWcpe1xuICByZXR1cm4gZnVuY3Rpb24oZSl7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyLmV2ZW50ID0gZTtcbiAgICBlcnIuc291cmNlID0gaW1nO1xuICAgIGZuKGVycik7XG4gIH07XG59XG4iLCJcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG5cbnRyeSB7XG4gIHZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG59IGNhdGNoIChlKSB7XG4gIHZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lLWNvbXBvbmVudCcpO1xufVxuXG5cbi8qKlxuICogRXhwb3NlIGBjb252ZXJ0RGF0ZXNgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydERhdGVzO1xuXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgY29udmVydCBhbiBgb2JqYCdzIGRhdGVzIHRvIG5ldyB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udmVydFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlcyAob2JqLCBjb252ZXJ0KSB7XG4gIG9iaiA9IGNsb25lKG9iaik7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgaWYgKGlzLmRhdGUodmFsKSkgb2JqW2tleV0gPSBjb252ZXJ0KHZhbCk7XG4gICAgaWYgKGlzLm9iamVjdCh2YWwpKSBvYmpba2V5XSA9IGNvbnZlcnREYXRlcyh2YWwsIGNvbnZlcnQpO1xuICB9XG4gIHJldHVybiBvYmo7XG59IiwiXG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcblxudHJ5IHtcbiAgdmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgdmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUtY29tcG9uZW50Jyk7XG59XG5cblxuLyoqXG4gKiBFeHBvc2UgYGFsaWFzYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsaWFzO1xuXG5cbi8qKlxuICogQWxpYXMgYW4gYG9iamVjdGAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtNaXhlZH0gbWV0aG9kXG4gKi9cblxuZnVuY3Rpb24gYWxpYXMgKG9iaiwgbWV0aG9kKSB7XG4gIHN3aXRjaCAodHlwZShtZXRob2QpKSB7XG4gICAgY2FzZSAnb2JqZWN0JzogcmV0dXJuIGFsaWFzQnlEaWN0aW9uYXJ5KGNsb25lKG9iaiksIG1ldGhvZCk7XG4gICAgY2FzZSAnZnVuY3Rpb24nOiByZXR1cm4gYWxpYXNCeUZ1bmN0aW9uKGNsb25lKG9iaiksIG1ldGhvZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGtleXMgaW4gYW4gYG9iamAgdXNpbmcgYSBkaWN0aW9uYXJ5IG9mIGBhbGlhc2VzYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gYWxpYXNlc1xuICovXG5cbmZ1bmN0aW9uIGFsaWFzQnlEaWN0aW9uYXJ5IChvYmosIGFsaWFzZXMpIHtcbiAgZm9yICh2YXIga2V5IGluIGFsaWFzZXMpIHtcbiAgICBpZiAodW5kZWZpbmVkID09PSBvYmpba2V5XSkgY29udGludWU7XG4gICAgb2JqW2FsaWFzZXNba2V5XV0gPSBvYmpba2V5XTtcbiAgICBkZWxldGUgb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGtleXMgaW4gYW4gYG9iamAgdXNpbmcgYSBgY29udmVydGAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udmVydFxuICovXG5cbmZ1bmN0aW9uIGFsaWFzQnlGdW5jdGlvbiAob2JqLCBjb252ZXJ0KSB7XG4gIC8vIGhhdmUgdG8gY3JlYXRlIGFub3RoZXIgb2JqZWN0IHNvIHRoYXQgaWU4IHdvbid0IGluZmluaXRlIGxvb3Agb24ga2V5c1xuICB2YXIgb3V0cHV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIG91dHB1dFtjb252ZXJ0KGtleSldID0gb2JqW2tleV07XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiXG4vKipcbiAqIEV4cG9zZSBgdG9Jc29TdHJpbmdgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Jc29TdHJpbmc7XG5cblxuLyoqXG4gKiBUdXJuIGEgYGRhdGVgIGludG8gYW4gSVNPIHN0cmluZy5cbiAqXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlL3RvSVNPU3RyaW5nXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdG9Jc29TdHJpbmcgKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuICAgICsgJy0nICsgcGFkKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpXG4gICAgKyAnLScgKyBwYWQoZGF0ZS5nZXRVVENEYXRlKCkpXG4gICAgKyAnVCcgKyBwYWQoZGF0ZS5nZXRVVENIb3VycygpKVxuICAgICsgJzonICsgcGFkKGRhdGUuZ2V0VVRDTWludXRlcygpKVxuICAgICsgJzonICsgcGFkKGRhdGUuZ2V0VVRDU2Vjb25kcygpKVxuICAgICsgJy4nICsgU3RyaW5nKChkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLzEwMDApLnRvRml4ZWQoMykpLnNsaWNlKDIsIDUpXG4gICAgKyAnWic7XG59XG5cblxuLyoqXG4gKiBQYWQgYSBgbnVtYmVyYCB3aXRoIGEgdGVuJ3MgcGxhY2UgemVyby5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcGFkIChudW1iZXIpIHtcbiAgdmFyIG4gPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG4ubGVuZ3RoID09PSAxID8gJzAnICsgbiA6IG47XG59IiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR5cGU7XG5cbnRyeSB7XG4gIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG59IGNhdGNoKGUpe1xuICB0eXBlID0gcmVxdWlyZSgndHlwZS1jb21wb25lbnQnKTtcbn1cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENsb25lcyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGFueSBvYmplY3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29weVtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29weTtcblxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHZhciBjb3B5ID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvcHlbaV0gPSBjbG9uZShvYmpbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgLy8gZnJvbSBtaWxsZXJtZWRlaXJvcy9hbWQtdXRpbHMgLSBNSVRcbiAgICAgIHZhciBmbGFncyA9ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLm11bHRpbGluZSA/ICdtJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmdsb2JhbCA/ICdnJyA6ICcnO1xuICAgICAgZmxhZ3MgKz0gb2JqLmlnbm9yZUNhc2UgPyAnaScgOiAnJztcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKG9iai5zb3VyY2UsIGZsYWdzKTtcblxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpO1xuXG4gICAgZGVmYXVsdDogLy8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIOKAplxuICAgICAgcmV0dXJuIG9iajtcbiAgfVxufVxuIiwiXG4vKipcbiAqIFByb3RvY29sLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBjaGVjaygpO1xuICAgIGNhc2UgMTogcmV0dXJuIHRyYW5zZm9ybSh1cmwpO1xuICB9XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtIGEgcHJvdG9jb2wtcmVsYXRpdmUgYHVybGAgdG8gdGhlIHVzZSB0aGUgcHJvcGVyIHByb3RvY29sLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKHVybCkge1xuICByZXR1cm4gY2hlY2soKSA/ICdodHRwczonICsgdXJsIDogJ2h0dHA6JyArIHVybDtcbn1cblxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYGh0dHBzOmAgYmUgdXNlZCBmb3IgbG9hZGluZyBzY3JpcHRzLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gY2hlY2sgKCkge1xuICByZXR1cm4gKFxuICAgIGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonIHx8XG4gICAgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2Nocm9tZS1leHRlbnNpb246J1xuICApO1xufSIsIlxuXG4vKlxuICogTG9hZCBkYXRlLlxuICpcbiAqIEZvciByZWZlcmVuY2U6IGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL3dlYnBlcmZvcm1hbmNlL2Jhc2ljcy9cbiAqL1xuXG52YXIgdGltZSA9IG5ldyBEYXRlKClcbiAgLCBwZXJmID0gd2luZG93LnBlcmZvcm1hbmNlO1xuXG5pZiAocGVyZiAmJiBwZXJmLnRpbWluZyAmJiBwZXJmLnRpbWluZy5yZXNwb25zZUVuZCkge1xuICB0aW1lID0gbmV3IERhdGUocGVyZi50aW1pbmcucmVzcG9uc2VFbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbWU7IiwiXG4vKipcbiAqIEV4cG9zZSBgZ2VuZXJhdGVgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGdsb2JhbCBxdWV1ZSBwdXNoaW5nIG1ldGhvZCB3aXRoIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgQHByb3BlcnR5IHtCb29sZWFufSB3cmFwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSAobmFtZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHdpbmRvd1tuYW1lXSB8fCAod2luZG93W25hbWVdID0gW10pO1xuICAgIG9wdGlvbnMud3JhcCA9PT0gZmFsc2VcbiAgICAgID8gd2luZG93W25hbWVdLnB1c2guYXBwbHkod2luZG93W25hbWVdLCBhcmdzKVxuICAgICAgOiB3aW5kb3dbbmFtZV0ucHVzaChhcmdzKTtcbiAgfTtcbn0iLCJcbi8qKlxuICogRXhwb3NlIGBvbkVycm9yYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uRXJyb3I7XG5cblxuLyoqXG4gKiBDYWxsYmFja3MuXG4gKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xuXG5cbi8qKlxuICogUHJlc2VydmUgZXhpc3RpbmcgaGFuZGxlci5cbiAqL1xuXG5pZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygd2luZG93Lm9uZXJyb3IpIGNhbGxiYWNrcy5wdXNoKHdpbmRvdy5vbmVycm9yKTtcblxuXG4vKipcbiAqIEJpbmQgdG8gYHdpbmRvdy5vbmVycm9yYC5cbiAqL1xuXG53aW5kb3cub25lcnJvciA9IGhhbmRsZXI7XG5cblxuLyoqXG4gKiBFcnJvciBoYW5kbGVyLlxuICovXG5cbmZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICBmb3IgKHZhciBpID0gMCwgZm47IGZuID0gY2FsbGJhY2tzW2ldOyBpKyspIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblxuLyoqXG4gKiBDYWxsIGEgYGZuYCBvbiBgd2luZG93Lm9uZXJyb3JgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZnVuY3Rpb24gb25FcnJvciAoZm4pIHtcbiAgY2FsbGJhY2tzLnB1c2goZm4pO1xuICBpZiAod2luZG93Lm9uZXJyb3IgIT0gaGFuZGxlcikge1xuICAgIGNhbGxiYWNrcy5wdXNoKHdpbmRvdy5vbmVycm9yKTtcbiAgICB3aW5kb3cub25lcnJvciA9IGhhbmRsZXI7XG4gIH1cbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kIChvYmplY3QpIHtcbiAgICAvLyBUYWtlcyBhbiB1bmxpbWl0ZWQgbnVtYmVyIG9mIGV4dGVuZGVycy5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAvLyBGb3IgZWFjaCBleHRlbmRlciwgY29weSB0aGVpciBwcm9wZXJ0aWVzIG9uIG91ciBvYmplY3QuXG4gICAgZm9yICh2YXIgaSA9IDAsIHNvdXJjZTsgc291cmNlID0gYXJnc1tpXTsgaSsrKSB7XG4gICAgICAgIGlmICghc291cmNlKSBjb250aW51ZTtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBvYmplY3RbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG59OyIsIlxudmFyIEZhY2FkZSA9IHJlcXVpcmUoJy4vZmFjYWRlJyk7XG5cbi8qKlxuICogRXhwb3NlIGBGYWNhZGVgIGZhY2FkZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2FkZTtcblxuLyoqXG4gKiBFeHBvc2Ugc3BlY2lmaWMtbWV0aG9kIGZhY2FkZXMuXG4gKi9cblxuRmFjYWRlLkFsaWFzID0gcmVxdWlyZSgnLi9hbGlhcycpO1xuRmFjYWRlLkdyb3VwID0gcmVxdWlyZSgnLi9ncm91cCcpO1xuRmFjYWRlLklkZW50aWZ5ID0gcmVxdWlyZSgnLi9pZGVudGlmeScpO1xuRmFjYWRlLlRyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuRmFjYWRlLlBhZ2UgPSByZXF1aXJlKCcuL3BhZ2UnKTtcbkZhY2FkZS5TY3JlZW4gPSByZXF1aXJlKCcuL3NjcmVlbicpO1xuIiwidmFyIG5leHQgPSByZXF1aXJlKCduZXh0LXRpY2snKTtcblxuXG4vKipcbiAqIEV4cG9zZSBgY2FsbGJhY2tgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2FsbGJhY2s7XG5cblxuLyoqXG4gKiBDYWxsIGFuIGBmbmAgYmFjayBzeW5jaHJvbm91c2x5IGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbmZ1bmN0aW9uIGNhbGxiYWNrIChmbikge1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZuKSBmbigpO1xufVxuXG5cbi8qKlxuICogQ2FsbCBhbiBgZm5gIGJhY2sgYXN5bmNocm9ub3VzbHkgaWYgaXQgZXhpc3RzLiBJZiBgd2FpdGAgaXMgb21taXR0ZWQsIHRoZVxuICogYGZuYCB3aWxsIGJlIGNhbGxlZCBvbiBuZXh0IHRpY2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0IChvcHRpb25hbClcbiAqL1xuXG5jYWxsYmFjay5hc3luYyA9IGZ1bmN0aW9uIChmbiwgd2FpdCkge1xuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGZuKSByZXR1cm47XG4gIGlmICghd2FpdCkgcmV0dXJuIG5leHQoZm4pO1xuICBzZXRUaW1lb3V0KGZuLCB3YWl0KTtcbn07XG5cblxuLyoqXG4gKiBTeW1tZXRyeS5cbiAqL1xuXG5jYWxsYmFjay5zeW5jID0gY2FsbGJhY2s7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBwYXJzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcblxuLyoqXG4gKiBXcmFwIG1hcCBmcm9tIGpxdWVyeS5cbiAqL1xuXG52YXIgbWFwID0ge1xuICBsZWdlbmQ6IFsxLCAnPGZpZWxkc2V0PicsICc8L2ZpZWxkc2V0PiddLFxuICB0cjogWzIsICc8dGFibGU+PHRib2R5PicsICc8L3Rib2R5PjwvdGFibGU+J10sXG4gIGNvbDogWzIsICc8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPicsICc8L2NvbGdyb3VwPjwvdGFibGU+J10sXG4gIF9kZWZhdWx0OiBbMCwgJycsICcnXVxufTtcblxubWFwLnRkID1cbm1hcC50aCA9IFszLCAnPHRhYmxlPjx0Ym9keT48dHI+JywgJzwvdHI+PC90Ym9keT48L3RhYmxlPiddO1xuXG5tYXAub3B0aW9uID1cbm1hcC5vcHRncm91cCA9IFsxLCAnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JywgJzwvc2VsZWN0PiddO1xuXG5tYXAudGhlYWQgPVxubWFwLnRib2R5ID1cbm1hcC5jb2xncm91cCA9XG5tYXAuY2FwdGlvbiA9XG5tYXAudGZvb3QgPSBbMSwgJzx0YWJsZT4nLCAnPC90YWJsZT4nXTtcblxubWFwLnRleHQgPVxubWFwLmNpcmNsZSA9XG5tYXAuZWxsaXBzZSA9XG5tYXAubGluZSA9XG5tYXAucGF0aCA9XG5tYXAucG9seWdvbiA9XG5tYXAucG9seWxpbmUgPVxubWFwLnJlY3QgPSBbMSwgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIj4nLCc8L3N2Zz4nXTtcblxuLyoqXG4gKiBQYXJzZSBgaHRtbGAgYW5kIHJldHVybiB0aGUgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UoaHRtbCkge1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIGh0bWwpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0cmluZyBleHBlY3RlZCcpO1xuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTsgLy8gUmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZVxuXG4gIC8vIHRhZyBuYW1lXG4gIHZhciBtID0gLzwoW1xcdzpdKykvLmV4ZWMoaHRtbCk7XG4gIGlmICghbSkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWwpO1xuICB2YXIgdGFnID0gbVsxXTtcblxuICAvLyBib2R5IHN1cHBvcnRcbiAgaWYgKHRhZyA9PSAnYm9keScpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWwucmVtb3ZlQ2hpbGQoZWwubGFzdENoaWxkKTtcbiAgfVxuXG4gIC8vIHdyYXAgbWFwXG4gIHZhciB3cmFwID0gbWFwW3RhZ10gfHwgbWFwLl9kZWZhdWx0O1xuICB2YXIgZGVwdGggPSB3cmFwWzBdO1xuICB2YXIgcHJlZml4ID0gd3JhcFsxXTtcbiAgdmFyIHN1ZmZpeCA9IHdyYXBbMl07XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbC5pbm5lckhUTUwgPSBwcmVmaXggKyBodG1sICsgc3VmZml4O1xuICB3aGlsZSAoZGVwdGgtLSkgZWwgPSBlbC5sYXN0Q2hpbGQ7XG5cbiAgLy8gb25lIGVsZW1lbnRcbiAgaWYgKGVsLmZpcnN0Q2hpbGQgPT0gZWwubGFzdENoaWxkKSB7XG4gICAgcmV0dXJuIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLy8gc2V2ZXJhbCBlbGVtZW50c1xuICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuIiwidmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG5cblxuLyoqXG4gKiBDYWNoZSB3aGV0aGVyIGA8Ym9keT5gIGV4aXN0cy5cbiAqL1xuXG52YXIgYm9keSA9IGZhbHNlO1xuXG5cbi8qKlxuICogQ2FsbGJhY2tzIHRvIGNhbGwgd2hlbiB0aGUgYm9keSBleGlzdHMuXG4gKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xuXG5cbi8qKlxuICogRXhwb3J0IGEgd2F5IHRvIGFkZCBoYW5kbGVycyB0byBiZSBpbnZva2VkIG9uY2UgdGhlIGJvZHkgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgYm9keSBleGlzdHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBvbkJvZHkgKGNhbGxiYWNrKSB7XG4gIGlmIChib2R5KSB7XG4gICAgY2FsbChjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG59O1xuXG5cbi8qKlxuICogU2V0IGFuIGludGVydmFsIHRvIGNoZWNrIGZvciBgZG9jdW1lbnQuYm9keWAuXG4gKi9cblxudmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICBpZiAoIWRvY3VtZW50LmJvZHkpIHJldHVybjtcbiAgYm9keSA9IHRydWU7XG4gIGVhY2goY2FsbGJhY2tzLCBjYWxsKTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG59LCA1KTtcblxuXG4vKipcbiAqIENhbGwgYSBjYWxsYmFjaywgcGFzc2luZyBpdCB0aGUgYm9keS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAgVGhlIGNhbGxiYWNrIHRvIGNhbGwuXG4gKi9cblxuZnVuY3Rpb24gY2FsbCAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soZG9jdW1lbnQuYm9keSk7XG59IiwidmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0IChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGlmICghb3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKCdDYW50IGxvYWQgbm90aGluZy4uLicpO1xuXG4gICAgLy8gQWxsb3cgZm9yIHRoZSBzaW1wbGVzdCBjYXNlLCBqdXN0IHBhc3NpbmcgYSBgc3JjYCBzdHJpbmcuXG4gICAgaWYgKHR5cGUob3B0aW9ucykgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyBzcmMgOiBvcHRpb25zIH07XG5cbiAgICB2YXIgaHR0cHMgPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb246JztcblxuICAgIC8vIElmIHlvdSB1c2UgcHJvdG9jb2wgcmVsYXRpdmUgVVJMcywgdGhpcmQtcGFydHkgc2NyaXB0cyBsaWtlIEdvb2dsZVxuICAgIC8vIEFuYWx5dGljcyBicmVhayB3aGVuIHRlc3Rpbmcgd2l0aCBgZmlsZTpgIHNvIHRoaXMgZml4ZXMgdGhhdC5cbiAgICBpZiAob3B0aW9ucy5zcmMgJiYgb3B0aW9ucy5zcmMuaW5kZXhPZignLy8nKSA9PT0gMCkge1xuICAgICAgICBvcHRpb25zLnNyYyA9IGh0dHBzID8gJ2h0dHBzOicgKyBvcHRpb25zLnNyYyA6ICdodHRwOicgKyBvcHRpb25zLnNyYztcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGVtIHRvIHBhc3MgaW4gZGlmZmVyZW50IFVSTHMgZGVwZW5kaW5nIG9uIHRoZSBwcm90b2NvbC5cbiAgICBpZiAoaHR0cHMgJiYgb3B0aW9ucy5odHRwcykgb3B0aW9ucy5zcmMgPSBvcHRpb25zLmh0dHBzO1xuICAgIGVsc2UgaWYgKCFodHRwcyAmJiBvcHRpb25zLmh0dHApIG9wdGlvbnMuc3JjID0gb3B0aW9ucy5odHRwO1xuXG4gICAgLy8gTWFrZSB0aGUgYDxzY3JpcHQ+YCBlbGVtZW50IGFuZCBpbnNlcnQgaXQgYmVmb3JlIHRoZSBmaXJzdCBzY3JpcHQgb24gdGhlXG4gICAgLy8gcGFnZSwgd2hpY2ggaXMgZ3VhcmFudGVlZCB0byBleGlzdCBzaW5jZSB0aGlzIEphdmFzY3JpcHQgaXMgcnVubmluZy5cbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSBvcHRpb25zLnNyYztcblxuICAgIHZhciBmaXJzdFNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBmaXJzdFNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGZpcnN0U2NyaXB0KTtcblxuICAgIC8vIElmIHdlIGhhdmUgYSBjYWxsYmFjaywgYXR0YWNoIGV2ZW50IGhhbmRsZXJzLCBldmVuIGluIElFLiBCYXNlZCBvZmYgb2ZcbiAgICAvLyB0aGUgVGhpcmQtUGFydHkgSmF2YXNjcmlwdCBzY3JpcHQgbG9hZGluZyBleGFtcGxlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aGlyZHBhcnR5anMvdGhpcmRwYXJ0eWpzLWNvZGUvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvdGVtcGxhdGVzLzAyL2xvYWRpbmctZmlsZXMvaW5kZXguaHRtbFxuICAgIGlmIChjYWxsYmFjayAmJiB0eXBlKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZXZlbnQpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCB0aGUgc2NyaXB0LicpLCBldmVudCk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2NyaXB0LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBzY3JpcHQuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgvY29tcGxldGV8bG9hZGVkLy50ZXN0KHNjcmlwdC5yZWFkeVN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHNjcmlwdCBlbGVtZW50IGluIGNhc2UgdGhleSB3YW50IHRvIGRvIGFueXRoaW5nIHNwZWNpYWwsIGxpa2VcbiAgICAvLyBnaXZlIGl0IGFuIElEIG9yIGF0dHJpYnV0ZXMuXG4gICAgcmV0dXJuIHNjcmlwdDtcbn07XG4iLCJcbnZhciBpc0VtcHR5ID0gcmVxdWlyZSgnaXMtZW1wdHknKTtcblxudHJ5IHtcbiAgdmFyIHR5cGVPZiA9IHJlcXVpcmUoJ3R5cGUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgdmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2NvbXBvbmVudC10eXBlJyk7XG59XG5cblxuLyoqXG4gKiBUeXBlcy5cbiAqL1xuXG52YXIgdHlwZXMgPSBbXG4gICdhcmd1bWVudHMnLFxuICAnYXJyYXknLFxuICAnYm9vbGVhbicsXG4gICdkYXRlJyxcbiAgJ2VsZW1lbnQnLFxuICAnZnVuY3Rpb24nLFxuICAnbnVsbCcsXG4gICdudW1iZXInLFxuICAnb2JqZWN0JyxcbiAgJ3JlZ2V4cCcsXG4gICdzdHJpbmcnLFxuICAndW5kZWZpbmVkJ1xuXTtcblxuXG4vKipcbiAqIEV4cG9zZSB0eXBlIGNoZWNrZXJzLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZvciAodmFyIGkgPSAwLCB0eXBlOyB0eXBlID0gdHlwZXNbaV07IGkrKykgZXhwb3J0c1t0eXBlXSA9IGdlbmVyYXRlKHR5cGUpO1xuXG5cbi8qKlxuICogQWRkIGFsaWFzIGZvciBgZnVuY3Rpb25gIGZvciBvbGQgYnJvd3NlcnMuXG4gKi9cblxuZXhwb3J0cy5mbiA9IGV4cG9ydHNbJ2Z1bmN0aW9uJ107XG5cblxuLyoqXG4gKiBFeHBvc2UgYGVtcHR5YCBjaGVjay5cbiAqL1xuXG5leHBvcnRzLmVtcHR5ID0gaXNFbXB0eTtcblxuXG4vKipcbiAqIEV4cG9zZSBgbmFuYCBjaGVjay5cbiAqL1xuXG5leHBvcnRzLm5hbiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIGV4cG9ydHMubnVtYmVyKHZhbCkgJiYgdmFsICE9IHZhbDtcbn07XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHR5cGUgY2hlY2tlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gZ2VuZXJhdGUgKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlID09PSB0eXBlT2YodmFsdWUpO1xuICB9O1xufSIsIlxudmFyIGJpbmQgPSByZXF1aXJlKCdiaW5kJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCdkZWZhdWx0cycpO1xudmFyIHByb3RvcyA9IHJlcXVpcmUoJy4vcHJvdG9zJyk7XG52YXIgc2x1ZyA9IHJlcXVpcmUoJ3NsdWcnKTtcbnZhciBzdGF0aWNzID0gcmVxdWlyZSgnLi9zdGF0aWNzJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYGNyZWF0ZUludGVncmF0aW9uYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUludGVncmF0aW9uO1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IEludGVncmF0aW9uIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSW50ZWdyYXRpb24gKG5hbWUpIHtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBgSW50ZWdyYXRpb25gLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cblxuICBmdW5jdGlvbiBJbnRlZ3JhdGlvbiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZygnYW5hbHl0aWNzOmludGVncmF0aW9uOicgKyBzbHVnKG5hbWUpKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBkZWZhdWx0cyhjbG9uZShvcHRpb25zKSB8fCB7fSwgdGhpcy5kZWZhdWx0cyk7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLm9uY2UoJ3JlYWR5JywgYmluZCh0aGlzLCB0aGlzLmZsdXNoKSk7XG5cbiAgICBJbnRlZ3JhdGlvbi5lbWl0KCdjb25zdHJ1Y3QnLCB0aGlzKTtcbiAgICB0aGlzLl93cmFwSW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX3dyYXBMb2FkKCk7XG4gICAgdGhpcy5fd3JhcFBhZ2UoKTtcbiAgICB0aGlzLl93cmFwVHJhY2soKTtcbiAgfVxuXG4gIEludGVncmF0aW9uLnByb3RvdHlwZS5kZWZhdWx0cyA9IHt9O1xuICBJbnRlZ3JhdGlvbi5wcm90b3R5cGUuZ2xvYmFscyA9IFtdO1xuICBJbnRlZ3JhdGlvbi5wcm90b3R5cGUubmFtZSA9IG5hbWU7XG4gIGZvciAodmFyIGtleSBpbiBzdGF0aWNzKSBJbnRlZ3JhdGlvbltrZXldID0gc3RhdGljc1trZXldO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvdG9zKSBJbnRlZ3JhdGlvbi5wcm90b3R5cGVba2V5XSA9IHByb3Rvc1trZXldO1xuICByZXR1cm4gSW50ZWdyYXRpb247XG59XG4iLCJcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFlhbmRleCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgWWFuZGV4YCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgWWFuZGV4ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdZYW5kZXggTWV0cmljYScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCd5YW5kZXhfbWV0cmlrYV9jYWxsYmFja3MnKVxuICAuZ2xvYmFsKCdZYScpXG4gIC5vcHRpb24oJ2NvdW50ZXJJZCcsIG51bGwpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2FwaS55YW5kZXguY29tL21ldHJpa2EvXG4gKiBodHRwczovL21ldHJpY2EueWFuZGV4LmNvbS8yMjUyMjM1MT9zdGVwPTIjdGFiPWNvZGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbllhbmRleC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgaWQgPSB0aGlzLm9wdGlvbnMuY291bnRlcklkO1xuXG4gIHB1c2goZnVuY3Rpb24oKXtcbiAgICB3aW5kb3dbJ3lhQ291bnRlcicgKyBpZF0gPSBuZXcgd2luZG93LllhLk1ldHJpa2EoeyBpZDogaWQgfSk7XG4gIH0pO1xuXG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5ZYW5kZXgucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93LllhICYmIHdpbmRvdy5ZYS5NZXRyaWthKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbllhbmRleC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9tYy55YW5kZXgucnUvbWV0cmlrYS93YXRjaC5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUHVzaCBhIG5ldyBjYWxsYmFjayBvbiB0aGUgZ2xvYmFsIFlhbmRleCBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbmZ1bmN0aW9uIHB1c2goY2FsbGJhY2spe1xuICB3aW5kb3cueWFuZGV4X21ldHJpa2FfY2FsbGJhY2tzID0gd2luZG93LnlhbmRleF9tZXRyaWthX2NhbGxiYWNrcyB8fCBbXTtcbiAgd2luZG93LnlhbmRleF9tZXRyaWthX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbn0iLCJcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpc0VtYWlsID0gcmVxdWlyZSgnaXMtZW1haWwnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFdvb3ByYSk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgV29vcHJhYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgV29vcHJhID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdXb29wcmEnKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCd3b29wcmEnKVxuICAub3B0aW9uKCdkb21haW4nLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vd3d3Lndvb3ByYS5jb20vZG9jcy9zZXR1cC9qYXZhc2NyaXB0LXRyYWNraW5nL1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuV29vcHJhLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIChmdW5jdGlvbigpe3ZhciBpLCBzLCB6LCB3ID0gd2luZG93LCBkID0gZG9jdW1lbnQsIGEgPSBhcmd1bWVudHMsIHEgPSAnc2NyaXB0JywgZiA9IFsnY29uZmlnJywgJ3RyYWNrJywgJ2lkZW50aWZ5JywgJ3Zpc2l0JywgJ3B1c2gnLCAnY2FsbCddLCBjID0gZnVuY3Rpb24oKXt2YXIgaSwgc2VsZiA9IHRoaXM7IHNlbGYuX2UgPSBbXTsgZm9yIChpID0gMDsgaSA8IGYubGVuZ3RoOyBpKyspIHsoZnVuY3Rpb24oZil7c2VsZltmXSA9IGZ1bmN0aW9uKCl7c2VsZi5fZS5wdXNoKFtmXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSkpOyByZXR1cm4gc2VsZjsgfTsgfSkoZltpXSk7IH0gfTsgdy5fdyA9IHcuX3cgfHwge307IGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7IHcuX3dbYVtpXV0gPSB3W2FbaV1dID0gd1thW2ldXSB8fCBuZXcgYygpOyB9IH0pKCd3b29wcmEnKTtcbiAgd2luZG93Lndvb3ByYS5jb25maWcoeyBkb21haW46IHRoaXMub3B0aW9ucy5kb21haW4gfSk7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Xb29wcmEucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Lndvb3ByYSAmJiB3aW5kb3cud29vcHJhLmxvYWRlZCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5Xb29wcmEucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vc3RhdGljLndvb3ByYS5jb20vanMvdy5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY2F0ZWdvcnkgKG9wdGlvbmFsKVxuICovXG5cbldvb3ByYS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLmZ1bGxOYW1lKCk7XG4gIGlmIChuYW1lKSBwcm9wcy50aXRsZSA9IG5hbWU7XG4gIHdpbmRvdy53b29wcmEudHJhY2soJ3B2JywgcHJvcHMpO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbldvb3ByYS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHdpbmRvdy53b29wcmEuaWRlbnRpZnkoaWRlbnRpZnkudHJhaXRzKCkpLnB1c2goKTsgLy8gYHB1c2hgIHNlbmRzIGl0IG9mZiBhc3luY1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbldvb3ByYS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHdpbmRvdy53b29wcmEudHJhY2sodHJhY2suZXZlbnQoKSwgdHJhY2sucHJvcGVydGllcygpKTtcbn07XG4iLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihXZWJFbmdhZ2UpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFdlYkVuZ2FnZWAgaW50ZWdyYXRpb25cbiAqL1xuXG52YXIgV2ViRW5nYWdlID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdXZWJFbmdhZ2UnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnX3dlcScpXG4gIC5nbG9iYWwoJ3dlYmVuZ2FnZScpXG4gIC5vcHRpb24oJ3dpZGdldFZlcnNpb24nLCAnNC4wJylcbiAgLm9wdGlvbignbGljZW5zZUNvZGUnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbldlYkVuZ2FnZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgX3dlcSA9IHdpbmRvdy5fd2VxID0gd2luZG93Ll93ZXEgfHwge307XG4gIF93ZXFbJ3dlYmVuZ2FnZS5saWNlbnNlQ29kZSddID0gdGhpcy5vcHRpb25zLmxpY2Vuc2VDb2RlO1xuICBfd2VxWyd3ZWJlbmdhZ2Uud2lkZ2V0VmVyc2lvbiddID0gdGhpcy5vcHRpb25zLndpZGdldFZlcnNpb247XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5XZWJFbmdhZ2UucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISB3aW5kb3cud2ViZW5nYWdlO1xufTtcblxuLyoqXG4gKiBMb2FkXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5XZWJFbmdhZ2UucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBwYXRoID0gJy9qcy93aWRnZXQvd2ViZW5nYWdlLW1pbi12LTQuMC5qcyc7XG4gIGxvYWQoe1xuICAgIGh0dHBzOiAnaHR0cHM6Ly9zc2wud2lkZ2V0cy53ZWJlbmdhZ2UuY29tJyArIHBhdGgsXG4gICAgaHR0cDogJ2h0dHA6Ly9jZG4ud2lkZ2V0cy53ZWJlbmdhZ2UuY29tJyArIHBhdGhcbiAgfSwgZm4pO1xufTtcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciB0aWNrID0gcmVxdWlyZSgnbmV4dC10aWNrJyk7XG5cbi8qKlxuICogQW5hbHl0aWNzIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgYW5hbHl0aWNzO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYWpzKXtcbiAgYWpzLmFkZEludGVncmF0aW9uKFZXTyk7XG4gIGFuYWx5dGljcyA9IGFqcztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBWV09gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBWV08gPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ1Zpc3VhbCBXZWJzaXRlIE9wdGltaXplcicpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXG4gIC5vcHRpb24oJ3JlcGxheScsIHRydWUpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL3YyLnZpc3VhbHdlYnNpdGVvcHRpbWl6ZXIuY29tL3Rvb2xzL2dldF90cmFja2luZ19jb2RlLnBocFxuICovXG5cblZXTy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLm9wdGlvbnMucmVwbGF5KSB0aGlzLnJlcGxheSgpO1xufTtcblxuLyoqXG4gKiBSZXBsYXkgdGhlIGV4cGVyaW1lbnRzIHRoZSB1c2VyIGhhcyBzZWVuIGFzIHRyYWl0cyB0byBhbGwgb3RoZXIgaW50ZWdyYXRpb25zLlxuICogV2FpdCBmb3IgdGhlIG5leHQgdGljayB0byByZXBsYXkgc28gdGhhdCB0aGUgYGFuYWx5dGljc2Agb2JqZWN0IGFuZCBhbGwgb2ZcbiAqIHRoZSBpbnRlZ3JhdGlvbnMgYXJlIGZ1bGx5IGluaXRpYWxpemVkLlxuICovXG5cblZXTy5wcm90b3R5cGUucmVwbGF5ID0gZnVuY3Rpb24oKXtcbiAgdGljayhmdW5jdGlvbigpe1xuICAgIGV4cGVyaW1lbnRzKGZ1bmN0aW9uKGVyciwgdHJhaXRzKXtcbiAgICAgIGlmICh0cmFpdHMpIGFuYWx5dGljcy5pZGVudGlmeSh0cmFpdHMpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2V0IGRpY3Rpb25hcnkgb2YgZXhwZXJpbWVudCBrZXlzIGFuZCB2YXJpYXRpb25zLlxuICpcbiAqIGh0dHA6Ly92aXN1YWx3ZWJzaXRlb3B0aW1pemVyLmNvbS9rbm93bGVkZ2UvaW50ZWdyYXRpb24tb2YtdndvLXdpdGgta2lzc21ldHJpY3MvXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBleHBlcmltZW50cyhjYWxsYmFjayl7XG4gIGVucXVldWUoZnVuY3Rpb24oKXtcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIHZhciBpZHMgPSB3aW5kb3cuX3Z3b19leHBfaWRzO1xuICAgIGlmICghaWRzKSByZXR1cm4gY2FsbGJhY2soKTtcbiAgICBlYWNoKGlkcywgZnVuY3Rpb24oaWQpe1xuICAgICAgdmFyIG5hbWUgPSB2YXJpYXRpb24oaWQpO1xuICAgICAgaWYgKG5hbWUpIGRhdGFbJ0V4cGVyaW1lbnQ6ICcgKyBpZF0gPSBuYW1lO1xuICAgIH0pO1xuICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgYSBgZm5gIHRvIHRoZSBWV08gcXVldWUsIGNyZWF0aW5nIG9uZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZnVuY3Rpb24gZW5xdWV1ZShmbil7XG4gIHdpbmRvdy5fdmlzX29wdF9xdWV1ZSA9IHdpbmRvdy5fdmlzX29wdF9xdWV1ZSB8fCBbXTtcbiAgd2luZG93Ll92aXNfb3B0X3F1ZXVlLnB1c2goZm4pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY2hvc2VuIHZhcmlhdGlvbidzIG5hbWUgZnJvbSBhbiBleHBlcmltZW50IGBpZGAuXG4gKlxuICogaHR0cDovL3Zpc3VhbHdlYnNpdGVvcHRpbWl6ZXIuY29tL2tub3dsZWRnZS9pbnRlZ3JhdGlvbi1vZi12d28td2l0aC1raXNzbWV0cmljcy9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB2YXJpYXRpb24oaWQpe1xuICB2YXIgZXhwZXJpbWVudHMgPSB3aW5kb3cuX3Z3b19leHA7XG4gIGlmICghZXhwZXJpbWVudHMpIHJldHVybiBudWxsO1xuICB2YXIgZXhwZXJpbWVudCA9IGV4cGVyaW1lbnRzW2lkXTtcbiAgdmFyIHZhcmlhdGlvbklkID0gZXhwZXJpbWVudC5jb21iaW5hdGlvbl9jaG9zZW47XG4gIHJldHVybiB2YXJpYXRpb25JZCA/IGV4cGVyaW1lbnQuY29tYl9uW3ZhcmlhdGlvbklkXSA6IG51bGw7XG59IiwiXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ192ZXJvcScpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFZlcm8pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFZlcm9gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBWZXJvID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdWZXJvJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX3Zlcm9xJylcbiAgLm9wdGlvbignYXBpS2V5JywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dldHZlcm8vdmVyby1hcGkvYmxvYi9tYXN0ZXIvc2VjdGlvbnMvanMubWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblZlcm8ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgcHVzaCgnaW5pdCcsIHsgYXBpX2tleTogdGhpcy5vcHRpb25zLmFwaUtleSB9KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblZlcm8ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll92ZXJvcSAmJiB3aW5kb3cuX3Zlcm9xLnB1c2ggIT09IEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cblZlcm8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vZDNxeGVmNHJwNzBlbG0uY2xvdWRmcm9udC5uZXQvbS5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBodHRwczovL3d3dy5nZXR2ZXJvLmNvbS9rbm93bGVkZ2UtYmFzZSMvcXVlc3Rpb25zLzcxNzY4LURvZXMtVmVyby10cmFjay1wYWdldmlld3NcbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5WZXJvLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHB1c2goJ3RyYWNrUGFnZXZpZXcnKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dldHZlcm8vdmVyby1hcGkvYmxvYi9tYXN0ZXIvc2VjdGlvbnMvanMubWQjdXNlci1pZGVudGlmaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuVmVyby5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG4gIGlmICghaWQgfHwgIWVtYWlsKSByZXR1cm47IC8vIGJvdGggcmVxdWlyZWRcbiAgcHVzaCgndXNlcicsIHRyYWl0cyk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXR2ZXJvL3Zlcm8tYXBpL2Jsb2IvbWFzdGVyL3NlY3Rpb25zL2pzLm1kI3RyYWNraW5nLWV2ZW50c1xuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuVmVyby5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHB1c2goJ3RyYWNrJywgdHJhY2suZXZlbnQoKSwgdHJhY2sucHJvcGVydGllcygpKTtcbn07XG4iLCJcbnZhciBhbGlhcyA9IHJlcXVpcmUoJ2FsaWFzJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBjb252ZXJ0RGF0ZXMgPSByZXF1aXJlKCdjb252ZXJ0LWRhdGVzJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnVXNlclZvaWNlJyk7XG52YXIgdW5peCA9IHJlcXVpcmUoJ3RvLXVuaXgtdGltZXN0YW1wJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oVXNlclZvaWNlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBVc2VyVm9pY2VgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBVc2VyVm9pY2UgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ1VzZXJWb2ljZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdVc2VyVm9pY2UnKVxuICAuZ2xvYmFsKCdzaG93Q2xhc3NpY1dpZGdldCcpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKVxuICAub3B0aW9uKCdjbGFzc2ljJywgZmFsc2UpXG4gIC5vcHRpb24oJ2ZvcnVtSWQnLCBudWxsKVxuICAub3B0aW9uKCdzaG93V2lkZ2V0JywgdHJ1ZSlcbiAgLm9wdGlvbignbW9kZScsICdjb250YWN0JylcbiAgLm9wdGlvbignYWNjZW50Q29sb3InLCAnIzQ0OGRkNicpXG4gIC5vcHRpb24oJ3NtYXJ0dm90ZScsIHRydWUpXG4gIC5vcHRpb24oJ3RyaWdnZXInLCBudWxsKVxuICAub3B0aW9uKCd0cmlnZ2VyUG9zaXRpb24nLCAnYm90dG9tLXJpZ2h0JylcbiAgLm9wdGlvbigndHJpZ2dlckNvbG9yJywgJyNmZmZmZmYnKVxuICAub3B0aW9uKCd0cmlnZ2VyQmFja2dyb3VuZENvbG9yJywgJ3JnYmEoNDYsIDQ5LCA1MSwgMC42KScpXG4gIC8vIEJBQ0tXQVJEUyBDT01QQVRJQklMSVRZOiBjbGFzc2ljIG9wdGlvbnNcbiAgLm9wdGlvbignY2xhc3NpY01vZGUnLCAnZnVsbCcpXG4gIC5vcHRpb24oJ3ByaW1hcnlDb2xvcicsICcjY2M2ZDAwJylcbiAgLm9wdGlvbignbGlua0NvbG9yJywgJyMwMDdkYmYnKVxuICAub3B0aW9uKCdkZWZhdWx0TW9kZScsICdzdXBwb3J0JylcbiAgLm9wdGlvbigndGFiTGFiZWwnLCAnRmVlZGJhY2sgJiBTdXBwb3J0JylcbiAgLm9wdGlvbigndGFiQ29sb3InLCAnI2NjNmQwMCcpXG4gIC5vcHRpb24oJ3RhYlBvc2l0aW9uJywgJ21pZGRsZS1yaWdodCcpXG4gIC5vcHRpb24oJ3RhYkludmVydGVkJywgZmFsc2UpO1xuXG4vKipcbiAqIFdoZW4gaW4gXCJjbGFzc2ljXCIgbW9kZSwgb24gYGNvbnN0cnVjdGAgc3dhcCBhbGwgb2YgdGhlIG1ldGhvZCB0byBwb2ludCB0b1xuICogdGhlaXIgY2xhc3NpYyBjb3VudGVycGFydHMuXG4gKi9cblxuVXNlclZvaWNlLm9uKCdjb25zdHJ1Y3QnLCBmdW5jdGlvbihpbnRlZ3JhdGlvbil7XG4gIGlmICghaW50ZWdyYXRpb24ub3B0aW9ucy5jbGFzc2ljKSByZXR1cm47XG4gIGludGVncmF0aW9uLmdyb3VwID0gdW5kZWZpbmVkO1xuICBpbnRlZ3JhdGlvbi5pZGVudGlmeSA9IGludGVncmF0aW9uLmlkZW50aWZ5Q2xhc3NpYztcbiAgaW50ZWdyYXRpb24uaW5pdGlhbGl6ZSA9IGludGVncmF0aW9uLmluaXRpYWxpemVDbGFzc2ljO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblVzZXJWb2ljZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICB2YXIgb3B0cyA9IGZvcm1hdE9wdGlvbnMob3B0aW9ucyk7XG4gIHB1c2goJ3NldCcsIG9wdHMpO1xuICBwdXNoKCdhdXRvcHJvbXB0Jywge30pO1xuICBpZiAob3B0aW9ucy5zaG93V2lkZ2V0KSB7XG4gICAgb3B0aW9ucy50cmlnZ2VyXG4gICAgICA/IHB1c2goJ2FkZFRyaWdnZXInLCBvcHRpb25zLnRyaWdnZXIsIG9wdHMpXG4gICAgICA6IHB1c2goJ2FkZFRyaWdnZXInLCBvcHRzKTtcbiAgfVxuXG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Vc2VyVm9pY2UucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93LlVzZXJWb2ljZSAmJiB3aW5kb3cuVXNlclZvaWNlLnB1c2ggIT09IEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cblVzZXJWb2ljZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIGtleSA9IHRoaXMub3B0aW9ucy5hcGlLZXk7XG4gIGxvYWQoJy8vd2lkZ2V0LnVzZXJ2b2ljZS5jb20vJyArIGtleSArICcuanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuVXNlclZvaWNlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cyh7IGNyZWF0ZWQ6ICdjcmVhdGVkX2F0JyB9KTtcbiAgdHJhaXRzID0gY29udmVydERhdGVzKHRyYWl0cywgdW5peCk7XG4gIHB1c2goJ2lkZW50aWZ5JywgdHJhaXRzKTtcbn07XG5cbi8qKlxuICogR3JvdXAuXG4gKlxuICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAqL1xuXG5Vc2VyVm9pY2UucHJvdG90eXBlLmdyb3VwID0gZnVuY3Rpb24oZ3JvdXApe1xuICB2YXIgdHJhaXRzID0gZ3JvdXAudHJhaXRzKHsgY3JlYXRlZDogJ2NyZWF0ZWRfYXQnIH0pO1xuICB0cmFpdHMgPSBjb252ZXJ0RGF0ZXModHJhaXRzLCB1bml4KTtcbiAgcHVzaCgnaWRlbnRpZnknLCB7IGFjY291bnQ6IHRyYWl0cyB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSAoY2xhc3NpYykuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlYWR5XG4gKi9cblxuVXNlclZvaWNlLnByb3RvdHlwZS5pbml0aWFsaXplQ2xhc3NpYyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB3aW5kb3cuc2hvd0NsYXNzaWNXaWRnZXQgPSBzaG93Q2xhc3NpY1dpZGdldDsgLy8gcGFydCBvZiBwdWJsaWMgYXBpXG4gIGlmIChvcHRpb25zLnNob3dXaWRnZXQpIHNob3dDbGFzc2ljV2lkZ2V0KCdzaG93VGFiJywgZm9ybWF0Q2xhc3NpY09wdGlvbnMob3B0aW9ucykpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkgKGNsYXNzaWMpLlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuVXNlclZvaWNlLnByb3RvdHlwZS5pZGVudGlmeUNsYXNzaWMgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHB1c2goJ3NldEN1c3RvbUZpZWxkcycsIGlkZW50aWZ5LnRyYWl0cygpKTtcbn07XG5cbi8qKlxuICogRm9ybWF0IHRoZSBvcHRpb25zIGZvciBVc2VyVm9pY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRPcHRpb25zKG9wdGlvbnMpe1xuICByZXR1cm4gYWxpYXMob3B0aW9ucywge1xuICAgIGZvcnVtSWQ6ICdmb3J1bV9pZCcsXG4gICAgYWNjZW50Q29sb3I6ICdhY2NlbnRfY29sb3InLFxuICAgIHNtYXJ0dm90ZTogJ3NtYXJ0dm90ZV9lbmFibGVkJyxcbiAgICB0cmlnZ2VyQ29sb3I6ICd0cmlnZ2VyX2NvbG9yJyxcbiAgICB0cmlnZ2VyQmFja2dyb3VuZENvbG9yOiAndHJpZ2dlcl9iYWNrZ3JvdW5kX2NvbG9yJyxcbiAgICB0cmlnZ2VyUG9zaXRpb246ICd0cmlnZ2VyX3Bvc2l0aW9uJ1xuICB9KTtcbn1cblxuLyoqXG4gKiBGb3JtYXQgdGhlIGNsYXNzaWMgb3B0aW9ucyBmb3IgVXNlclZvaWNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0Q2xhc3NpY09wdGlvbnMob3B0aW9ucyl7XG4gIHJldHVybiBhbGlhcyhvcHRpb25zLCB7XG4gICAgZm9ydW1JZDogJ2ZvcnVtX2lkJyxcbiAgICBjbGFzc2ljTW9kZTogJ21vZGUnLFxuICAgIHByaW1hcnlDb2xvcjogJ3ByaW1hcnlfY29sb3InLFxuICAgIHRhYlBvc2l0aW9uOiAndGFiX3Bvc2l0aW9uJyxcbiAgICB0YWJDb2xvcjogJ3RhYl9jb2xvcicsXG4gICAgbGlua0NvbG9yOiAnbGlua19jb2xvcicsXG4gICAgZGVmYXVsdE1vZGU6ICdkZWZhdWx0X21vZGUnLFxuICAgIHRhYkxhYmVsOiAndGFiX2xhYmVsJyxcbiAgICB0YWJJbnZlcnRlZDogJ3RhYl9pbnZlcnRlZCdcbiAgfSk7XG59XG5cbi8qKlxuICogU2hvdyB0aGUgY2xhc3NpYyB2ZXJzaW9uIG9mIHRoZSBVc2VyVm9pY2Ugd2lkZ2V0LiBUaGlzIG1ldGhvZCBpcyB1c3VhbGx5IHBhcnRcbiAqIG9mIFVzZXJWb2ljZSBjbGFzc2ljJ3MgcHVibGljIEFQSS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAoJ3Nob3dUYWInIG9yICdzaG93TGlnaHRib3gnKVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKVxuICovXG5cbmZ1bmN0aW9uIHNob3dDbGFzc2ljV2lkZ2V0KHR5cGUsIG9wdGlvbnMpe1xuICB0eXBlID0gdHlwZSB8fCAnc2hvd0xpZ2h0Ym94JztcbiAgcHVzaCh0eXBlLCAnY2xhc3NpY193aWRnZXQnLCBvcHRpb25zKTtcbn1cbiIsIlxudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgY29udmVydERhdGVzID0gcmVxdWlyZSgnY29udmVydC1kYXRlcycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ191ZnEnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihVc2VyZm94KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBVc2VyZm94YCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgVXNlcmZveCA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbigndXNlcmZveCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfdWZxJylcbiAgLm9wdGlvbignY2xpZW50SWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy51c2VyZm94LmNvbS9kb2NzL1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuVXNlcmZveC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX3VmcSA9IFtdO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuVXNlcmZveC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX3VmcSAmJiB3aW5kb3cuX3VmcS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5Vc2VyZm94LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL2QyeTcxbWpobmFqeGNnLmNsb3VkZnJvbnQubmV0L2pzL3VzZXJmb3gtc3RhYmxlLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBodHRwczovL3d3dy51c2VyZm94LmNvbS9kb2NzLyNjdXN0b20tZGF0YVxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuVXNlcmZveC5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoeyBjcmVhdGVkOiAnc2lnbnVwX2RhdGUnIH0pO1xuICB2YXIgZW1haWwgPSBpZGVudGlmeS5lbWFpbCgpO1xuXG4gIGlmICghZW1haWwpIHJldHVybjtcblxuICAvLyBpbml0aWFsaXplIHRoZSBsaWJyYXJ5IHdpdGggdGhlIGVtYWlsIG5vdyB0aGF0IHdlIGhhdmUgaXRcbiAgcHVzaCgnaW5pdCcsIHtcbiAgICBjbGllbnRJZDogdGhpcy5vcHRpb25zLmNsaWVudElkLFxuICAgIGVtYWlsOiBlbWFpbFxuICB9KTtcblxuICB0cmFpdHMgPSBjb252ZXJ0RGF0ZXModHJhaXRzLCBmb3JtYXREYXRlKTtcbiAgcHVzaCgndHJhY2snLCB0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgYGRhdGVgIHRvIGEgZm9ybWF0IHVzZXJmb3ggc3VwcG9ydHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKXtcbiAgcmV0dXJuIE1hdGgucm91bmQoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpO1xufVxuIiwiXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ191YycpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFVzZXJjeWNsZSk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgVXNlcmN5Y2xlYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgVXNlcmN5Y2xlID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdVU0VSY3ljbGUnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX3VjJylcbiAgLm9wdGlvbigna2V5JywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2RvY3MudXNlcmN5Y2xlLmNvbS9qYXZhc2NyaXB0X2FwaVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuVXNlcmN5Y2xlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHB1c2goJ19rZXknLCB0aGlzLm9wdGlvbnMua2V5KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblVzZXJjeWNsZS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX3VjICYmIHdpbmRvdy5fdWMucHVzaCAhPT0gQXJyYXkucHJvdG90eXBlLnB1c2gpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuVXNlcmN5Y2xlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL2FwaS51c2VyY3ljbGUuY29tL2phdmFzY3JpcHRzL3RyYWNrLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cblVzZXJjeWNsZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG4gIGlmIChpZCkgcHVzaCgndWlkJywgaWQpO1xuICAvLyB0aGVyZSdzIGEgc3BlY2lhbCBgY2FtZV9iYWNrYCBldmVudCB1c2VkIGZvciByZXRlbnRpb24gYW5kIHRyYWl0c1xuICBwdXNoKCdhY3Rpb24nLCAnY2FtZV9iYWNrJywgdHJhaXRzKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5Vc2VyY3ljbGUucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICBwdXNoKCdhY3Rpb24nLCB0cmFjay5ldmVudCgpLCB0cmFjay5wcm9wZXJ0aWVzKHtcbiAgICByZXZlbnVlOiAncmV2ZW51ZV9hbW91bnQnXG4gIH0pKTtcbn07XG4iLCJcbnZhciBwaXhlbCA9IHJlcXVpcmUoJ2xvYWQtcGl4ZWwnKSgnLy9hbmFseXRpY3MudHdpdHRlci5jb20vaS9hZHNjdCcpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFR3aXR0ZXJBZHMpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYGxvYWRgXG4gKi9cblxuZXhwb3J0cy5sb2FkID0gcGl4ZWw7XG5cbi8qKlxuICogSE9QXG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogRXhwb3NlIGBUd2l0dGVyQWRzYFxuICovXG5cbnZhciBUd2l0dGVyQWRzID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdUd2l0dGVyIEFkcycpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXG4gIC5vcHRpb24oJ2V2ZW50cycsIHt9KTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cblR3aXR0ZXJBZHMucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgZXZlbnRzID0gdGhpcy5vcHRpb25zLmV2ZW50cztcbiAgdmFyIGV2ZW50ID0gdHJhY2suZXZlbnQoKTtcbiAgaWYgKCFoYXMuY2FsbChldmVudHMsIGV2ZW50KSkgcmV0dXJuO1xuICByZXR1cm4gZXhwb3J0cy5sb2FkKHtcbiAgICB0eG5faWQ6IGV2ZW50c1tldmVudF0sXG4gICAgcF9pZDogJ1R3aXR0ZXInXG4gIH0pO1xufTtcbiIsIlxudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihUcmFraW8pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFRyYWtpb2AgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIFRyYWtpbyA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbigndHJhay5pbycpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCd0cmFrJylcbiAgLm9wdGlvbigndG9rZW4nLCAnJylcbiAgLm9wdGlvbigndHJhY2tOYW1lZFBhZ2VzJywgdHJ1ZSlcbiAgLm9wdGlvbigndHJhY2tDYXRlZ29yaXplZFBhZ2VzJywgdHJ1ZSk7XG5cbi8qKlxuICogT3B0aW9ucyBhbGlhc2VzLlxuICovXG5cbnZhciBvcHRpb25zQWxpYXNlcyA9IHtcbiAgaW5pdGlhbFBhZ2V2aWV3OiAnYXV0b190cmFja19wYWdlX3ZpZXcnXG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cHM6Ly9kb2NzLnRyYWsuaW9cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblRyYWtpby5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB3aW5kb3cudHJhayA9IHdpbmRvdy50cmFrIHx8IFtdO1xuICB3aW5kb3cudHJhay5pbyA9IHdpbmRvdy50cmFrLmlvIHx8IHt9O1xuICB3aW5kb3cudHJhay5pby5sb2FkID0gZnVuY3Rpb24oZSl7c2VsZi5sb2FkKCk7IHZhciByID0gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7d2luZG93LnRyYWsucHVzaChbZV0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSkpOyB9OyB9ICxpPVtcImluaXRpYWxpemVcIixcImlkZW50aWZ5XCIsXCJ0cmFja1wiLFwiYWxpYXNcIixcImNoYW5uZWxcIixcInNvdXJjZVwiLFwiaG9zdFwiLFwicHJvdG9jb2xcIixcInBhZ2Vfdmlld1wiXTsgZm9yICh2YXIgcz0wO3M8aS5sZW5ndGg7cysrKSB3aW5kb3cudHJhay5pb1tpW3NdXT1yKGlbc10pOyB3aW5kb3cudHJhay5pby5pbml0aWFsaXplLmFwcGx5KHdpbmRvdy50cmFrLmlvLGFyZ3VtZW50cyk7IH07XG4gIHdpbmRvdy50cmFrLmlvLmxvYWQob3B0aW9ucy50b2tlbiwgYWxpYXMob3B0aW9ucywgb3B0aW9uc0FsaWFzZXMpKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblRyYWtpby5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cudHJhayAmJiB3aW5kb3cudHJhay5sb2FkZWQpO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSB0cmFrLmlvIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5UcmFraW8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vZDI5cDY0Nzc5eDQzem8uY2xvdWRmcm9udC5uZXQvdjEvdHJhay5pby5taW4uanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuVHJha2lvLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciBjYXRlZ29yeSA9IHBhZ2UuY2F0ZWdvcnkoKTtcbiAgdmFyIHByb3BzID0gcGFnZS5wcm9wZXJ0aWVzKCk7XG4gIHZhciBuYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuXG4gIHdpbmRvdy50cmFrLmlvLnBhZ2Vfdmlldyhwcm9wcy5wYXRoLCBuYW1lIHx8IHByb3BzLnRpdGxlKTtcblxuICAvLyBuYW1lZCBwYWdlc1xuICBpZiAobmFtZSAmJiB0aGlzLm9wdGlvbnMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKG5hbWUpKTtcbiAgfVxuXG4gIC8vIGNhdGVnb3JpemVkIHBhZ2VzXG4gIGlmIChjYXRlZ29yeSAmJiB0aGlzLm9wdGlvbnMudHJhY2tDYXRlZ29yaXplZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKGNhdGVnb3J5KSk7XG4gIH1cbn07XG5cbi8qKlxuICogVHJhaXQgYWxpYXNlcy5cbiAqXG4gKiBodHRwOi8vZG9jcy50cmFrLmlvL3Byb3BlcnRpZXMuaHRtbCNzcGVjaWFsXG4gKi9cblxudmFyIHRyYWl0QWxpYXNlcyA9IHtcbiAgYXZhdGFyOiAnYXZhdGFyX3VybCcsXG4gIGZpcnN0TmFtZTogJ2ZpcnN0X25hbWUnLFxuICBsYXN0TmFtZTogJ2xhc3RfbmFtZSdcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5UcmFraW8ucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKHRyYWl0QWxpYXNlcyk7XG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuXG4gIGlmIChpZCkge1xuICAgIHdpbmRvdy50cmFrLmlvLmlkZW50aWZ5KGlkLCB0cmFpdHMpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy50cmFrLmlvLmlkZW50aWZ5KHRyYWl0cyk7XG4gIH1cbn07XG5cbi8qKlxuICogR3JvdXAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqXG4gKiBUT0RPOiBhZGQgZ3JvdXBcbiAqIFRPRE86IGFkZCBgdHJhaXQuY29tcGFueS9vcmdhbml6YXRpb25gIGZyb20gdHJhay5pbyBkb2NzIGh0dHA6Ly9kb2NzLnRyYWsuaW8vcHJvcGVydGllcy5odG1sI3NwZWNpYWxcbiAqL1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuVHJha2lvLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgd2luZG93LnRyYWsuaW8udHJhY2sodHJhY2suZXZlbnQoKSwgdHJhY2sucHJvcGVydGllcygpKTtcbn07XG5cbi8qKlxuICogQWxpYXMuXG4gKlxuICogQHBhcmFtIHtBbGlhc30gYWxpYXNcbiAqL1xuXG5UcmFraW8ucHJvdG90eXBlLmFsaWFzID0gZnVuY3Rpb24oYWxpYXMpe1xuICBpZiAoIXdpbmRvdy50cmFrLmlvLmRpc3RpbmN0X2lkKSByZXR1cm47XG4gIHZhciBmcm9tID0gYWxpYXMuZnJvbSgpO1xuICB2YXIgdG8gPSBhbGlhcy50bygpO1xuXG4gIGlmICh0byA9PT0gd2luZG93LnRyYWsuaW8uZGlzdGluY3RfaWQoKSkgcmV0dXJuO1xuXG4gIGlmIChmcm9tKSB7XG4gICAgd2luZG93LnRyYWsuaW8uYWxpYXMoZnJvbSwgdG8pO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy50cmFrLmlvLmFsaWFzKHRvKTtcbiAgfVxufTtcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgc2x1ZyA9IHJlcXVpcmUoJ3NsdWcnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ190c3EnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihUYXBzdHJlYW0pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFRhcHN0cmVhbWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIFRhcHN0cmVhbSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignVGFwc3RyZWFtJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXG4gIC5nbG9iYWwoJ190c3EnKVxuICAub3B0aW9uKCdhY2NvdW50TmFtZScsICcnKVxuICAub3B0aW9uKCd0cmFja0FsbFBhZ2VzJywgdHJ1ZSlcbiAgLm9wdGlvbigndHJhY2tOYW1lZFBhZ2VzJywgdHJ1ZSlcbiAgLm9wdGlvbigndHJhY2tDYXRlZ29yaXplZFBhZ2VzJywgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblRhcHN0cmVhbS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX3RzcSA9IHdpbmRvdy5fdHNxIHx8IFtdO1xuICBwdXNoKCdzZXRBY2NvdW50TmFtZScsIHRoaXMub3B0aW9ucy5hY2NvdW50TmFtZSk7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5UYXBzdHJlYW0ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll90c3EgJiYgd2luZG93Ll90c3EucHVzaCAhPT0gQXJyYXkucHJvdG90eXBlLnB1c2gpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuVGFwc3RyZWFtLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL2Nkbi50YXBzdHJlYW0uY29tL3N0YXRpYy9qcy90YXBzdHJlYW0uanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuVGFwc3RyZWFtLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciBjYXRlZ29yeSA9IHBhZ2UuY2F0ZWdvcnkoKTtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBuYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuXG4gIC8vIGFsbCBwYWdlc1xuICBpZiAob3B0cy50cmFja0FsbFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKCkpO1xuICB9XG5cbiAgLy8gbmFtZWQgcGFnZXNcbiAgaWYgKG5hbWUgJiYgb3B0cy50cmFja05hbWVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2sobmFtZSkpO1xuICB9XG5cbiAgLy8gY2F0ZWdvcml6ZWQgcGFnZXNcbiAgaWYgKGNhdGVnb3J5ICYmIG9wdHMudHJhY2tDYXRlZ29yaXplZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKGNhdGVnb3J5KSk7XG4gIH1cbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5UYXBzdHJlYW0ucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHB1c2goJ2ZpcmVIaXQnLCBzbHVnKHRyYWNrLmV2ZW50KCkpLCBbcHJvcHMudXJsXSk7IC8vIG5lZWRzIGV2ZW50cyBhcyBzbHVnc1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihTcGlubmFrcik7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgU3Bpbm5ha3JgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBTcGlubmFrciA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignU3Bpbm5ha3InKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnX3NwaW5uYWtyX3NpdGVfaWQnKVxuICAuZ2xvYmFsKCdfc3Bpbm5ha3InKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblNwaW5uYWtyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fc3Bpbm5ha3Jfc2l0ZV9pZCA9IHRoaXMub3B0aW9ucy5zaXRlSWQ7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5TcGlubmFrci5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhIHdpbmRvdy5fc3Bpbm5ha3I7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5TcGlubmFrci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9kM29qenloYm9sdm9pNS5jbG91ZGZyb250Lm5ldC9qcy9zby5qcycsIGNhbGxiYWNrKTtcbn07IiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihTbmFwRW5nYWdlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBTbmFwRW5nYWdlYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgU25hcEVuZ2FnZSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignU25hcEVuZ2FnZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdTbmFwQUJ1ZycpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHA6Ly9oZWxwLnNuYXBlbmdhZ2UuY29tL2luc3RhbGxhdGlvbi1ndWlkZS1nZXR0aW5nLXN0YXJ0ZWQtaW4tYS1zbmFwL1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuU25hcEVuZ2FnZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuU25hcEVuZ2FnZS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLm9iamVjdCh3aW5kb3cuU25hcEFCdWcpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuU25hcEVuZ2FnZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIGtleSA9IHRoaXMub3B0aW9ucy5hcGlLZXk7XG4gIHZhciB1cmwgPSAnLy9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jb2RlLnNuYXBlbmdhZ2UuY29tL2pzLycgKyBrZXkgKyAnLmpzJztcbiAgbG9hZCh1cmwsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5TbmFwRW5nYWdlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgaWYgKCFlbWFpbCkgcmV0dXJuO1xuICB3aW5kb3cuU25hcEFCdWcuc2V0VXNlckVtYWlsKGVtYWlsKTtcbn07XG4iLCJ2YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihTZW50cnkpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFNlbnRyeWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIFNlbnRyeSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignU2VudHJ5JylcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnUmF2ZW4nKVxuICAub3B0aW9uKCdjb25maWcnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vcmF2ZW4tanMucmVhZHRoZWRvY3Mub3JnL2VuL2xhdGVzdC9jb25maWcvaW5kZXguaHRtbFxuICovXG5cblNlbnRyeS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICB0aGlzLmxvYWQoZnVuY3Rpb24oKXtcbiAgICAvLyBmb3Igbm93LCByYXZlbiBiYXNpY2FsbHkgcmVxdWlyZXMgYGluc3RhbGxgIHRvIGJlIGNhbGxlZFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvcmF2ZW4tanMvYmxvYi9tYXN0ZXIvc3JjL3JhdmVuLmpzI0wxMTNcbiAgICB3aW5kb3cuUmF2ZW4uY29uZmlnKGNvbmZpZykuaW5zdGFsbCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuU2VudHJ5LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMub2JqZWN0KHdpbmRvdy5SYXZlbik7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5TZW50cnkucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vY2RuLnJhdmVuanMuY29tLzEuMS4xMC9uYXRpdmUvcmF2ZW4ubWluLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cblNlbnRyeS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHdpbmRvdy5SYXZlbi5zZXRVc2VyKGlkZW50aWZ5LnRyYWl0cygpKTtcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFNhYVNxdWF0Y2gpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFNhYVNxdWF0Y2hgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBTYWFTcXVhdGNoID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdTYWFTcXVhdGNoJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLm9wdGlvbigndGVuYW50QWxpYXMnLCAnJylcbiAgLmdsb2JhbCgnX3NxaCcpO1xuXG4vKipcbiAqIEluaXRpYWxpemVcbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5TYWFTcXVhdGNoLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7fTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5TYWFTcXVhdGNoLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gd2luZG93Ll9zcWggJiYgd2luZG93Ll9zcWgucHVzaCAhPSBbXS5wdXNoO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBTYWFTcXVhdGNoIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5TYWFTcXVhdGNoLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oZm4pe1xuICBsb2FkKCcvL2QycmNwOWFrMTUya2UxLmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9qYXZhc2NyaXB0cy9zcXVhdGNoLm1pbi5qcycsIGZuKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtGYWNhZGV9IGlkZW50aWZ5XG4gKi9cblxuU2FhU3F1YXRjaC5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciBzcWggPSB3aW5kb3cuX3NxaCA9IHdpbmRvdy5fc3FoIHx8IFtdO1xuICB2YXIgYWNjb3VudElkID0gaWRlbnRpZnkucHJveHkoJ3RyYWl0cy5hY2NvdW50SWQnKTtcbiAgdmFyIGltYWdlID0gaWRlbnRpZnkucHJveHkoJ3RyYWl0cy5yZWZlcnJhbEltYWdlJyk7XG4gIHZhciBvcHRzID0gaWRlbnRpZnkub3B0aW9ucyh0aGlzLm5hbWUpO1xuICB2YXIgaWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcblxuICBpZiAoIShpZCB8fCBlbWFpbCkpIHJldHVybjtcbiAgaWYgKHRoaXMuY2FsbGVkKSByZXR1cm47XG5cbiAgdmFyIGluaXQgPSB7XG4gICAgdGVuYW50X2FsaWFzOiB0aGlzLm9wdGlvbnMudGVuYW50QWxpYXMsXG4gICAgZmlyc3RfbmFtZTogaWRlbnRpZnkuZmlyc3ROYW1lKCksXG4gICAgbGFzdF9uYW1lOiBpZGVudGlmeS5sYXN0TmFtZSgpLFxuICAgIHVzZXJfaW1hZ2U6IGlkZW50aWZ5LmF2YXRhcigpLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICB1c2VyX2lkOiBpZCxcbiAgfTtcblxuICBpZiAoYWNjb3VudElkKSBpbml0LmFjY291bnRfaWQgPSBhY2NvdW50SWQ7XG4gIGlmIChvcHRzLmNoZWNrc3VtKSBpbml0LmNoZWNrc3VtID0gb3B0cy5jaGVja3N1bTtcbiAgaWYgKGltYWdlKSBpbml0LmZiX3NoYXJlX2ltYWdlID0gaW1hZ2U7XG5cbiAgc3FoLnB1c2goWydpbml0JywgaW5pdF0pO1xuICB0aGlzLmNhbGxlZCA9IHRydWU7XG4gIHRoaXMubG9hZCgpO1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oUm9sbGJhckludGVncmF0aW9uKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSb2xsYmFyYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgUm9sbGJhckludGVncmF0aW9uID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdSb2xsYmFyJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnUm9sbGJhcicpXG4gIC5vcHRpb24oJ2lkZW50aWZ5JywgdHJ1ZSlcbiAgLm9wdGlvbignYWNjZXNzVG9rZW4nLCAnJylcbiAgLm9wdGlvbignZW52aXJvbm1lbnQnLCAndW5rbm93bicpXG4gIC5vcHRpb24oJ2NhcHR1cmVVbmNhdWdodCcsIHRydWUpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuUm9sbGJhckludGVncmF0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciBfcm9sbGJhckNvbmZpZyA9IHRoaXMuY29uZmlnID0ge1xuICAgIGFjY2Vzc1Rva2VuOiB0aGlzLm9wdGlvbnMuYWNjZXNzVG9rZW4sXG4gICAgY2FwdHVyZVVuY2F1Z2h0OiB0aGlzLm9wdGlvbnMuY2FwdHVyZVVuY2F1Z2h0LFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnRcbiAgICB9XG4gIH07XG5cbiAgKGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7dGhpcy5zaGltSWQ9KytnLHRoaXMubm90aWZpZXI9bnVsbCx0aGlzLnBhcmVudFNoaW09Yix0aGlzLmxvZ2dlcj1mdW5jdGlvbigpe30sYS5jb25zb2xlJiZ2b2lkIDAgPT09IGEuY29uc29sZS5zaGltSWQmJih0aGlzLmxvZ2dlcj1hLmNvbnNvbGUubG9nKX1mdW5jdGlvbiBjKGIsYyxkKXshZFs0XSYmYS5fcm9sbGJhcldyYXBwZWRFcnJvciYmKGRbNF09YS5fcm9sbGJhcldyYXBwZWRFcnJvcixhLl9yb2xsYmFyV3JhcHBlZEVycm9yPW51bGwpLGIudW5jYXVnaHRFcnJvci5hcHBseShiLGQpLGMmJmMuYXBwbHkoYSxkKX1mdW5jdGlvbiBkKGMpe3ZhciBkPWI7cmV0dXJuIGYoZnVuY3Rpb24oKXtpZiAodGhpcy5ub3RpZmllcilyZXR1cm4gdGhpcy5ub3RpZmllcltjXS5hcHBseSh0aGlzLm5vdGlmaWVyLGFyZ3VtZW50cyk7dmFyIGI9dGhpcyxlPVwic2NvcGVcIj09PWM7ZSYmKGI9bmV3IGQodGhpcykpO3ZhciBmPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSxnPXsgc2hpbTpiLCBtZXRob2Q6YywgYXJnczpmLCB0czpuZXcgRGF0ZSB9O3JldHVybiBhLl9yb2xsYmFyU2hpbVF1ZXVlLnB1c2goZyksZT9iOnZvaWQgMH0pfWZ1bmN0aW9uIGUoYSxiKXtpZiAoYi5oYXNPd25Qcm9wZXJ0eSYmYi5oYXNPd25Qcm9wZXJ0eShcImFkZEV2ZW50TGlzdGVuZXJcIikpe3ZhciBjPWIuYWRkRXZlbnRMaXN0ZW5lcjtiLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYixkLGUpe2MuY2FsbCh0aGlzLGIsYS53cmFwKGQpLGUpfTt2YXIgZD1iLnJlbW92ZUV2ZW50TGlzdGVuZXI7Yi5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtkLmNhbGwodGhpcyxhLGIuX3dyYXBwZWR8fGIsYyl9fX1mdW5jdGlvbiBmKGEsYil7cmV0dXJuIGI9Ynx8dGhpcy5sb2dnZXIsZnVuY3Rpb24oKXt0cnkge3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0gY2F0Y2ggKGMpIHtiKFwiUm9sbGJhciBpbnRlcm5hbCBlcnJvcjpcIixjKX19fXZhciBnPTA7Yi5pbml0PWZ1bmN0aW9uKGEsZCl7dmFyIGc9ZC5nbG9iYWxBbGlhc3x8XCJSb2xsYmFyXCI7aWYgKFwib2JqZWN0XCI9PXR5cGVvZiBhW2ddKXJldHVybiBhW2ddO2EuX3JvbGxiYXJTaGltUXVldWU9W10sYS5fcm9sbGJhcldyYXBwZWRFcnJvcj1udWxsLGQ9ZHx8e307dmFyIGg9bmV3IGI7cmV0dXJuIGYoZnVuY3Rpb24oKXtpZiAoaC5jb25maWd1cmUoZCksZC5jYXB0dXJlVW5jYXVnaHQpe3ZhciBiPWEub25lcnJvcjthLm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7YyhoLGIsYSl9O3ZhciBmLGksaj1bXCJFdmVudFRhcmdldFwiLFwiV2luZG93XCIsXCJOb2RlXCIsXCJBcHBsaWNhdGlvbkNhY2hlXCIsXCJBdWRpb1RyYWNrTGlzdFwiLFwiQ2hhbm5lbE1lcmdlck5vZGVcIixcIkNyeXB0b09wZXJhdGlvblwiLFwiRXZlbnRTb3VyY2VcIixcIkZpbGVSZWFkZXJcIixcIkhUTUxVbmtub3duRWxlbWVudFwiLFwiSURCRGF0YWJhc2VcIixcIklEQlJlcXVlc3RcIixcIklEQlRyYW5zYWN0aW9uXCIsXCJLZXlPcGVyYXRpb25cIixcIk1lZGlhQ29udHJvbGxlclwiLFwiTWVzc2FnZVBvcnRcIixcIk1vZGFsV2luZG93XCIsXCJOb3RpZmljYXRpb25cIixcIlNWR0VsZW1lbnRJbnN0YW5jZVwiLFwiU2NyZWVuXCIsXCJUZXh0VHJhY2tcIixcIlRleHRUcmFja0N1ZVwiLFwiVGV4dFRyYWNrTGlzdFwiLFwiV2ViU29ja2V0XCIsXCJXZWJTb2NrZXRXb3JrZXJcIixcIldvcmtlclwiLFwiWE1MSHR0cFJlcXVlc3RcIixcIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRcIixcIlhNTEh0dHBSZXF1ZXN0VXBsb2FkXCJdO2ZvciAoZj0wO2Y8ai5sZW5ndGg7KytmKWk9altmXSxhW2ldJiZhW2ldLnByb3RvdHlwZSYmZShoLGFbaV0ucHJvdG90eXBlKX1yZXR1cm4gYVtnXT1oLGh9LGgubG9nZ2VyKSgpfSxiLnByb3RvdHlwZS5sb2FkRnVsbD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBnPWYoZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksZT1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO2Euc3JjPWQucm9sbGJhckpzVXJsLGEuYXN5bmM9IWMsYS5vbmxvYWQ9aCxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsZSl9LHRoaXMubG9nZ2VyKSxoPWYoZnVuY3Rpb24oKXt2YXIgYjtpZiAodm9pZCAwPT09YS5fcm9sbGJhclBheWxvYWRRdWV1ZSl7dmFyIGMsZCxmLGc7Zm9yIChiPW5ldyBFcnJvcihcInJvbGxiYXIuanMgZGlkIG5vdCBsb2FkXCIpO2M9YS5fcm9sbGJhclNoaW1RdWV1ZS5zaGlmdCgpOylmb3IgKGY9Yy5hcmdzLGc9MDtnPGYubGVuZ3RoOysrZylpZiAoZD1mW2ddLFwiZnVuY3Rpb25cIj09dHlwZW9mIGQpe2QoYik7YnJlYWt9fWUmJmUoYil9LHRoaXMubG9nZ2VyKTtmKGZ1bmN0aW9uKCl7Yz9nKCk6YS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixnLCExKTphLmF0dGFjaEV2ZW50KFwib25sb2FkXCIsZyl9LHRoaXMubG9nZ2VyKSgpfSxiLnByb3RvdHlwZS53cmFwPWZ1bmN0aW9uKGIpe2lmIChcImZ1bmN0aW9uXCIhPXR5cGVvZiBiKXJldHVybiBiO2lmIChiLl9pc1dyYXApcmV0dXJuIGI7aWYgKCFiLl93cmFwcGVkKXtiLl93cmFwcGVkPWZ1bmN0aW9uKCl7dHJ5IHtyZXR1cm4gYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9IGNhdGNoIChjKSB7dGhyb3cgYS5fcm9sbGJhcldyYXBwZWRFcnJvcj1jLGN9fSxiLl93cmFwcGVkLl9pc1dyYXA9ITA7Zm9yICh2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJihiLl93cmFwcGVkW2NdPWJbY10pfXJldHVybiBiLl93cmFwcGVkfTtmb3IgKHZhciBoPVwibG9nLGRlYnVnLGluZm8sd2Fybix3YXJuaW5nLGVycm9yLGNyaXRpY2FsLGdsb2JhbCxjb25maWd1cmUsc2NvcGUsdW5jYXVnaHRFcnJvclwiLnNwbGl0KFwiLFwiKSxpPTA7aTxoLmxlbmd0aDsrK2kpYi5wcm90b3R5cGVbaFtpXV09ZChoW2ldKTt2YXIgaj1cIi8vZDM3Z3ZydmMwd3Q0czEuY2xvdWRmcm9udC5uZXQvanMvdjEuMC9yb2xsYmFyLm1pbi5qc1wiO19yb2xsYmFyQ29uZmlnLnJvbGxiYXJKc1VybD1fcm9sbGJhckNvbmZpZy5yb2xsYmFySnNVcmx8fGosYi5pbml0KGEsX3JvbGxiYXJDb25maWcpfSkod2luZG93LGRvY3VtZW50KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblJvbGxiYXJJbnRlZ3JhdGlvbi5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLm9iamVjdCh3aW5kb3cuUm9sbGJhcikgJiYgbnVsbCA9PSB3aW5kb3cuUm9sbGJhci5zaGltSWQ7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5Sb2xsYmFySW50ZWdyYXRpb24ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIHdpbmRvdy5Sb2xsYmFyLmxvYWRGdWxsKHdpbmRvdywgZG9jdW1lbnQsIHRydWUsIHRoaXMuY29uZmlnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblJvbGxiYXJJbnRlZ3JhdGlvbi5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIC8vIGRvIHN0dWZmIHdpdGggYGlkYCBvciBgdHJhaXRzYFxuICBpZiAoIXRoaXMub3B0aW9ucy5pZGVudGlmeSkgcmV0dXJuO1xuXG4gIC8vIERvbid0IGFsbG93IGlkZW50aWZ5IHdpdGhvdXQgYSB1c2VyIGlkXG4gIHZhciB1aWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgaWYgKHVpZCA9PT0gbnVsbCB8fCB1aWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIHZhciByb2xsYmFyID0gd2luZG93LlJvbGxiYXI7XG4gIHZhciBwZXJzb24gPSB7IGlkOiB1aWQgfTtcbiAgZXh0ZW5kKHBlcnNvbiwgaWRlbnRpZnkudHJhaXRzKCkpO1xuICByb2xsYmFyLmNvbmZpZ3VyZSh7IHBheWxvYWQ6IHsgcGVyc29uOiBwZXJzb24gfX0pO1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19xZXZlbnRzJywgeyB3cmFwOiBmYWxzZSB9KTtcblxuLyoqXG4gKiBVc2VyIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdXNlcjtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihRdWFudGNhc3QpO1xuICB1c2VyID0gYW5hbHl0aWNzLnVzZXIoKTsgLy8gc3RvcmUgZm9yIGxhdGVyXG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUXVhbnRjYXN0YCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgUXVhbnRjYXN0ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdRdWFudGNhc3QnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX3FldmVudHMnKVxuICAuZ2xvYmFsKCdfX3FjJylcbiAgLm9wdGlvbigncENvZGUnLCBudWxsKVxuICAub3B0aW9uKCdhZHZlcnRpc2UnLCBmYWxzZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy5xdWFudGNhc3QuY29tL2xlYXJuaW5nLWNlbnRlci9ndWlkZXMvdXNpbmctdGhlLXF1YW50Y2FzdC1hc3luY2hyb25vdXMtdGFnL1xuICogaHR0cHM6Ly93d3cucXVhbnRjYXN0LmNvbS9oZWxwL2Nyb3NzLXBsYXRmb3JtLWF1ZGllbmNlLW1lYXN1cmVtZW50LWd1aWRlL1xuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cblF1YW50Y2FzdC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX3FldmVudHMgPSB3aW5kb3cuX3FldmVudHMgfHwgW107XG5cbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBzZXR0aW5ncyA9IHsgcWFjY3Q6IG9wdHMucENvZGUgfTtcbiAgaWYgKHVzZXIuaWQoKSkgc2V0dGluZ3MudWlkID0gdXNlci5pZCgpO1xuXG4gIGlmIChwYWdlKSB7XG4gICAgc2V0dGluZ3MubGFiZWxzID0gdGhpcy5sYWJlbHMoJ3BhZ2UnLCBwYWdlLmNhdGVnb3J5KCksIHBhZ2UubmFtZSgpKTtcbiAgfVxuXG4gIHB1c2goc2V0dGluZ3MpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuUXVhbnRjYXN0LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93Ll9fcWM7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5RdWFudGNhc3QucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoe1xuICAgIGh0dHA6ICdodHRwOi8vZWRnZS5xdWFudHNlcnZlLmNvbS9xdWFudC5qcycsXG4gICAgaHR0cHM6ICdodHRwczovL3NlY3VyZS5xdWFudHNlcnZlLmNvbS9xdWFudC5qcydcbiAgfSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIGh0dHBzOi8vY2xvdWR1cC5jb20vY0JSUkZBZnE2bWZcbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5RdWFudGNhc3QucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgdmFyIGNhdGVnb3J5ID0gcGFnZS5jYXRlZ29yeSgpO1xuICB2YXIgbmFtZSA9IHBhZ2UubmFtZSgpO1xuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZXZlbnQ6ICdyZWZyZXNoJyxcbiAgICBsYWJlbHM6IHRoaXMubGFiZWxzKCdwYWdlJywgY2F0ZWdvcnksIG5hbWUpLFxuICAgIHFhY2N0OiB0aGlzLm9wdGlvbnMucENvZGUsXG4gIH07XG4gIGlmICh1c2VyLmlkKCkpIHNldHRpbmdzLnVpZCA9IHVzZXIuaWQoKTtcbiAgcHVzaChzZXR0aW5ncyk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIGh0dHBzOi8vd3d3LnF1YW50Y2FzdC5jb20vaGVscC9jcm9zcy1wbGF0Zm9ybS1hdWRpZW5jZS1tZWFzdXJlbWVudC1ndWlkZS9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgKG9wdGlvbmFsKVxuICovXG5cblF1YW50Y2FzdC5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIC8vIGVkaXQgdGhlIGluaXRpYWwgcXVhbnRjYXN0IHNldHRpbmdzXG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuICBpZiAoaWQpIHdpbmRvdy5fcWV2ZW50c1swXS51aWQgPSBpZDtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogaHR0cHM6Ly9jbG91ZHVwLmNvbS9jQlJSRkFmcTZtZlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuUXVhbnRjYXN0LnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIG5hbWUgPSB0cmFjay5ldmVudCgpO1xuICB2YXIgcmV2ZW51ZSA9IHRyYWNrLnJldmVudWUoKTtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGV2ZW50OiAnY2xpY2snLFxuICAgIGxhYmVsczogdGhpcy5sYWJlbHMoJ2V2ZW50JywgbmFtZSksXG4gICAgcWFjY3Q6IHRoaXMub3B0aW9ucy5wQ29kZVxuICB9O1xuICBpZiAobnVsbCAhPSByZXZlbnVlKSBzZXR0aW5ncy5yZXZlbnVlID0gKHJldmVudWUrJycpOyAvLyBjb252ZXJ0IHRvIHN0cmluZ1xuICBpZiAodXNlci5pZCgpKSBzZXR0aW5ncy51aWQgPSB1c2VyLmlkKCk7XG4gIHB1c2goc2V0dGluZ3MpO1xufTtcblxuLyoqXG4gKiBDb21wbGV0ZWQgT3JkZXIuXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblF1YW50Y2FzdC5wcm90b3R5cGUuY29tcGxldGVkT3JkZXIgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBuYW1lID0gdHJhY2suZXZlbnQoKTtcbiAgdmFyIHJldmVudWUgPSB0cmFjay50b3RhbCgpO1xuICB2YXIgbGFiZWxzID0gdGhpcy5sYWJlbHMoJ2V2ZW50JywgbmFtZSk7XG4gIHZhciBjYXRlZ29yeSA9IHRyYWNrLmNhdGVnb3J5KCk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5hZHZlcnRpc2UgJiYgY2F0ZWdvcnkpIHtcbiAgICBsYWJlbHMgKz0gJywnICsgdGhpcy5sYWJlbHMoJ3BjYXQnLCBjYXRlZ29yeSk7XG4gIH1cblxuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZXZlbnQ6ICdyZWZyZXNoJywgLy8gdGhlIGV4YW1wbGUgUXVhbnRjYXN0IHNlbnQgaGFzIGNvbXBsZXRlZCBvcmRlciBzZW5kIHJlZnJlc2ggbm90IGNsaWNrXG4gICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgcmV2ZW51ZTogKHJldmVudWUrJycpLCAvLyBjb252ZXJ0IHRvIHN0cmluZ1xuICAgIG9yZGVyaWQ6IHRyYWNrLm9yZGVySWQoKSxcbiAgICBxYWNjdDogdGhpcy5vcHRpb25zLnBDb2RlXG4gIH07XG4gIHB1c2goc2V0dGluZ3MpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBxdWFudGNhc3QgbGFiZWxzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgb3B0aW9ucy5hZHZlcnRpc2UgPSBmYWxzZTtcbiAqICAgIGxhYmVscygnZXZlbnQnLCAnbXkgZXZlbnQnKTtcbiAqICAgIC8vID0+IFwiZXZlbnQubXkgZXZlbnRcIlxuICpcbiAqICAgIG9wdGlvbnMuYWR2ZXJ0aXNlID0gdHJ1ZTtcbiAqICAgIGxhYmVscygnZXZlbnQnLCAnbXkgZXZlbnQnKTtcbiAqICAgIC8vID0+IFwiX2ZwLmV2ZW50Lm15IGV2ZW50XCJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IC4uLlxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUXVhbnRjYXN0LnByb3RvdHlwZS5sYWJlbHMgPSBmdW5jdGlvbih0eXBlKXtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBhZHZlcnRpc2UgPSB0aGlzLm9wdGlvbnMuYWR2ZXJ0aXNlO1xuICB2YXIgcmV0ID0gW107XG5cbiAgaWYgKGFkdmVydGlzZSAmJiAncGFnZScgPT0gdHlwZSkgdHlwZSA9ICdldmVudCc7XG4gIGlmIChhZHZlcnRpc2UpIHR5cGUgPSAnX2ZwLicgKyB0eXBlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChudWxsID09IGFyZ3NbaV0pIGNvbnRpbnVlO1xuICAgIHZhciB2YWx1ZSA9IFN0cmluZyhhcmdzW2ldKTtcbiAgICByZXQucHVzaCh2YWx1ZS5yZXBsYWNlKC8sL2csICc7JykpO1xuICB9XG5cbiAgcmV0ID0gYWR2ZXJ0aXNlID8gcmV0LmpvaW4oJyAnKSA6IHJldC5qb2luKCcuJyk7XG4gIHJldHVybiBbdHlwZSwgcmV0XS5qb2luKCcuJyk7XG59O1xuIiwiXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19raXEnKTtcbnZhciBGYWNhZGUgPSByZXF1aXJlKCdmYWNhZGUnKTtcbnZhciBJZGVudGlmeSA9IEZhY2FkZS5JZGVudGlmeTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihRdWFsYXJvbyk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUXVhbGFyb29gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBRdWFsYXJvbyA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignUXVhbGFyb28nKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX2tpcScpXG4gIC5vcHRpb24oJ2N1c3RvbWVySWQnLCAnJylcbiAgLm9wdGlvbignc2l0ZVRva2VuJywgJycpXG4gIC5vcHRpb24oJ3RyYWNrJywgZmFsc2UpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5RdWFsYXJvby5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX2tpcSA9IHdpbmRvdy5fa2lxIHx8IFtdO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuUXVhbGFyb28ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll9raXEgJiYgd2luZG93Ll9raXEucHVzaCAhPT0gQXJyYXkucHJvdG90eXBlLnB1c2gpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuUXVhbGFyb28ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIHZhciB0b2tlbiA9IHRoaXMub3B0aW9ucy5zaXRlVG9rZW47XG4gIHZhciBpZCA9IHRoaXMub3B0aW9ucy5jdXN0b21lcklkO1xuICBsb2FkKCcvL3MzLmFtYXpvbmF3cy5jb20va2kuanMvJyArIGlkICsgJy8nICsgdG9rZW4gKyAnLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBodHRwOi8vaGVscC5xdWFsYXJvby5jb20vY3VzdG9tZXIvcG9ydGFsL2FydGljbGVzLzczMTA4NS1pZGVudGlmeS1zdXJ2ZXktbnVkZ2UtdGFrZXJzXG4gKiBodHRwOi8vaGVscC5xdWFsYXJvby5jb20vY3VzdG9tZXIvcG9ydGFsL2FydGljbGVzLzczMTA5MS1zZXQtYWRkaXRpb25hbC11c2VyLXByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cblF1YWxhcm9vLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cygpO1xuICB2YXIgaWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgaWYgKGVtYWlsKSBpZCA9IGVtYWlsO1xuICBpZiAoaWQpIHB1c2goJ2lkZW50aWZ5JywgaWQpO1xuICBpZiAodHJhaXRzKSBwdXNoKCdzZXQnLCB0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqL1xuXG5RdWFsYXJvby5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIGlmICghdGhpcy5vcHRpb25zLnRyYWNrKSByZXR1cm47XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIHZhciB0cmFpdHMgPSB7fTtcbiAgdHJhaXRzWydUcmlnZ2VyZWQ6ICcgKyBldmVudF0gPSB0cnVlO1xuICB0aGlzLmlkZW50aWZ5KG5ldyBJZGVudGlmeSh7IHRyYWl0czogdHJhaXRzIH0pKTtcbn07XG4iLCJcbnZhciBhbGlhcyA9IHJlcXVpcmUoJ2FsaWFzJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGNvbnZlcnREYXRlcyA9IHJlcXVpcmUoJ2NvbnZlcnQtZGF0ZXMnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfbG5xJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oUHJlYWN0KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBQcmVhY3RgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBQcmVhY3QgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ1ByZWFjdCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfbG5xJylcbiAgLm9wdGlvbigncHJvamVjdENvZGUnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vd3d3LnByZWFjdC5pby9hcGkvamF2YXNjcmlwdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuUHJlYWN0LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fbG5xID0gd2luZG93Ll9sbnEgfHwgW107XG4gIHB1c2goJ19zZXRDb2RlJywgdGhpcy5vcHRpb25zLnByb2plY3RDb2RlKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblByZWFjdC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2xucSAmJiB3aW5kb3cuX2xucS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5QcmVhY3QucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vZDJiYnZsNmRxNDhmYTYuY2xvdWRmcm9udC5uZXQvanMvbG4tMi40Lm1pbi5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5QcmVhY3QucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICBpZiAoIWlkZW50aWZ5LnVzZXJJZCgpKSByZXR1cm47XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoeyBjcmVhdGVkOiAnY3JlYXRlZF9hdCcgfSk7XG4gIHRyYWl0cyA9IGNvbnZlcnREYXRlcyh0cmFpdHMsIGNvbnZlcnREYXRlKTtcbiAgcHVzaCgnX3NldFBlcnNvbkRhdGEnLCB7XG4gICAgbmFtZTogaWRlbnRpZnkubmFtZSgpLFxuICAgIGVtYWlsOiBpZGVudGlmeS5lbWFpbCgpLFxuICAgIHVpZDogaWRlbnRpZnkudXNlcklkKCksXG4gICAgcHJvcGVydGllczogdHJhaXRzXG4gIH0pO1xufTtcblxuLyoqXG4gKiBHcm91cC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqL1xuXG5QcmVhY3QucHJvdG90eXBlLmdyb3VwID0gZnVuY3Rpb24oZ3JvdXApe1xuICBpZiAoIWdyb3VwLmdyb3VwSWQoKSkgcmV0dXJuO1xuICBwdXNoKCdfc2V0QWNjb3VudCcsIGdyb3VwLnRyYWl0cygpKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5QcmVhY3QucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHZhciByZXZlbnVlID0gdHJhY2sucmV2ZW51ZSgpO1xuICB2YXIgZXZlbnQgPSB0cmFjay5ldmVudCgpO1xuICB2YXIgc3BlY2lhbCA9IHsgbmFtZTogZXZlbnQgfTtcblxuICBpZiAocmV2ZW51ZSkge1xuICAgIHNwZWNpYWwucmV2ZW51ZSA9IHJldmVudWUgKiAxMDA7XG4gICAgZGVsZXRlIHByb3BzLnJldmVudWU7XG4gIH1cblxuICBpZiAocHJvcHMubm90ZSkge1xuICAgIHNwZWNpYWwubm90ZSA9IHByb3BzLm5vdGU7XG4gICAgZGVsZXRlIHByb3BzLm5vdGU7XG4gIH1cblxuICBwdXNoKCdfbG9nRXZlbnQnLCBzcGVjaWFsLCBwcm9wcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSBgZGF0ZWAgdG8gYSBmb3JtYXQgUHJlYWN0IHN1cHBvcnRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpe1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlIC8gMTAwMCk7XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnX3BhcScpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKFBpd2lrKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBQaXdpa2AgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIFBpd2lrID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdQaXdpaycpXG4gIC5nbG9iYWwoJ19wYXEnKVxuICAub3B0aW9uKCd1cmwnLCBudWxsKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL3Bpd2lrLm9yZy9kb2NzL2phdmFzY3JpcHQtdHJhY2tpbmcvI3RvYy1hc3luY2hyb25vdXMtdHJhY2tpbmdcbiAqL1xuXG5QaXdpay5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gIHdpbmRvdy5fcGFxID0gd2luZG93Ll9wYXEgfHwgW107XG4gIHB1c2goJ3NldFNpdGVJZCcsIHRoaXMub3B0aW9ucy5zaXRlSWQpO1xuICBwdXNoKCdzZXRUcmFja2VyVXJsJywgdGhpcy5vcHRpb25zLnVybCArICcvcGl3aWsucGhwJyk7XG4gIHB1c2goJ2VuYWJsZUxpbmtUcmFja2luZycpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgUGl3aWsgQW5hbHl0aWNzIGxpYnJhcnkuXG4gKi9cblxuUGl3aWsucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQodGhpcy5vcHRpb25zLnVybCArIFwiL3Bpd2lrLmpzXCIsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgUGl3aWsgaXMgbG9hZGVkXG4gKi9cblxuUGl3aWsucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll9wYXEgJiYgd2luZG93Ll9wYXEucHVzaCAhPSBbXS5wdXNoKTtcbn07XG5cbi8qKlxuICogUGFnZVxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cblBpd2lrLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHB1c2goJ3RyYWNrUGFnZVZpZXcnKTtcbn07XG4iLCJcbnZhciBkYXRlID0gcmVxdWlyZSgnbG9hZC1kYXRlJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnX3BydW0nKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihQaW5nZG9tKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBQaW5nZG9tYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgUGluZ2RvbSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignUGluZ2RvbScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfcHJ1bScpXG4gIC5vcHRpb24oJ2lkJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5QaW5nZG9tLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fcHJ1bSA9IHdpbmRvdy5fcHJ1bSB8fCBbXTtcbiAgcHVzaCgnaWQnLCB0aGlzLm9wdGlvbnMuaWQpO1xuICBwdXNoKCdtYXJrJywgJ2ZpcnN0Ynl0ZScsIGRhdGUuZ2V0VGltZSgpKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblBpbmdkb20ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll9wcnVtICYmIHdpbmRvdy5fcHJ1bS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5QaW5nZG9tLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL3J1bS1zdGF0aWMucGluZ2RvbS5uZXQvcHJ1bS5taW4uanMnLCBjYWxsYmFjayk7XG59OyIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihQZXJmZWN0QXVkaWVuY2UpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFBlcmZlY3RBdWRpZW5jZWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIFBlcmZlY3RBdWRpZW5jZSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignUGVyZmVjdCBBdWRpZW5jZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfcGEnKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy5wZXJmZWN0YXVkaWVuY2UuY29tL2RvY3MjamF2YXNjcmlwdF9hcGlfYXV0b29wZW5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cblBlcmZlY3RBdWRpZW5jZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX3BhID0gd2luZG93Ll9wYSB8fCB7fTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cblBlcmZlY3RBdWRpZW5jZS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX3BhICYmIHdpbmRvdy5fcGEudHJhY2spO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuUGVyZmVjdEF1ZGllbmNlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgaWQgPSB0aGlzLm9wdGlvbnMuc2l0ZUlkO1xuICBsb2FkKCcvL3RhZy5wZXJmZWN0YXVkaWVuY2UuY29tL3NlcnZlLycgKyBpZCArICcuanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IGV2ZW50XG4gKi9cblxuUGVyZmVjdEF1ZGllbmNlLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgd2luZG93Ll9wYS50cmFjayh0cmFjay5ldmVudCgpLCB0cmFjay5wcm9wZXJ0aWVzKCkpO1xufTtcbiIsIlxudmFyIGJpbmQgPSByZXF1aXJlKCdiaW5kJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnb3B0aW1pemVseScpO1xudmFyIHRpY2sgPSByZXF1aXJlKCduZXh0LXRpY2snKTtcblxuLyoqXG4gKiBBbmFseXRpY3MgcmVmZXJlbmNlLlxuICovXG5cbnZhciBhbmFseXRpY3M7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhanMpe1xuICBhanMuYWRkSW50ZWdyYXRpb24oT3B0aW1pemVseSk7XG4gIGFuYWx5dGljcyA9IGFqczsgLy8gc3RvcmUgZm9yIGxhdGVyXG59O1xuXG4vKipcbiAqIEV4cG9zZSBgT3B0aW1pemVseWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIE9wdGltaXplbHkgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ09wdGltaXplbHknKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAub3B0aW9uKCd2YXJpYXRpb25zJywgdHJ1ZSlcbiAgLm9wdGlvbigndHJhY2tOYW1lZFBhZ2VzJywgdHJ1ZSlcbiAgLm9wdGlvbigndHJhY2tDYXRlZ29yaXplZFBhZ2VzJywgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy5vcHRpbWl6ZWx5LmNvbS9kb2NzL2FwaSNmdW5jdGlvbi1jYWxsc1xuICovXG5cbk9wdGltaXplbHkucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5vcHRpb25zLnZhcmlhdGlvbnMpIHRpY2sodGhpcy5yZXBsYXkpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBodHRwczovL3d3dy5vcHRpbWl6ZWx5LmNvbS9kb2NzL2FwaSN0cmFjay1ldmVudFxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuT3B0aW1pemVseS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBwcm9wcyA9IHRyYWNrLnByb3BlcnRpZXMoKTtcbiAgaWYgKHByb3BzLnJldmVudWUpIHByb3BzLnJldmVudWUgKj0gMTAwO1xuICBwdXNoKCd0cmFja0V2ZW50JywgdHJhY2suZXZlbnQoKSwgcHJvcHMpO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIGh0dHBzOi8vd3d3Lm9wdGltaXplbHkuY29tL2RvY3MvYXBpI3RyYWNrLWV2ZW50XG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuT3B0aW1pemVseS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgY2F0ZWdvcnkgPSBwYWdlLmNhdGVnb3J5KCk7XG4gIHZhciBuYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuICB2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuICAvLyBjYXRlZ29yaXplZCBwYWdlc1xuICBpZiAoY2F0ZWdvcnkgJiYgb3B0cy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soY2F0ZWdvcnkpKTtcbiAgfVxuXG4gIC8vIG5hbWVkIHBhZ2VzXG4gIGlmIChuYW1lICYmIG9wdHMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKG5hbWUpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXBsYXkgZXhwZXJpbWVudCBkYXRhIGFzIHRyYWl0cyB0byBvdGhlciBlbmFibGVkIHByb3ZpZGVycy5cbiAqXG4gKiBodHRwczovL3d3dy5vcHRpbWl6ZWx5LmNvbS9kb2NzL2FwaSNkYXRhLW9iamVjdFxuICovXG5cbk9wdGltaXplbHkucHJvdG90eXBlLnJlcGxheSA9IGZ1bmN0aW9uKCl7XG4gIGlmICghd2luZG93Lm9wdGltaXplbHkpIHJldHVybjsgLy8gaW4gY2FzZSB0aGUgc25pcHBldCBpc250IG9uIHRoZSBwYWdlXG5cbiAgdmFyIGRhdGEgPSB3aW5kb3cub3B0aW1pemVseS5kYXRhO1xuICBpZiAoIWRhdGEpIHJldHVybjtcblxuICB2YXIgZXhwZXJpbWVudHMgPSBkYXRhLmV4cGVyaW1lbnRzO1xuICB2YXIgbWFwID0gZGF0YS5zdGF0ZS52YXJpYXRpb25OYW1lc01hcDtcbiAgdmFyIHRyYWl0cyA9IHt9O1xuXG4gIGVhY2gobWFwLCBmdW5jdGlvbihleHBlcmltZW50SWQsIHZhcmlhdGlvbil7XG4gICAgdmFyIGV4cGVyaW1lbnQgPSBleHBlcmltZW50c1tleHBlcmltZW50SWRdLm5hbWU7XG4gICAgdHJhaXRzWydFeHBlcmltZW50OiAnICsgZXhwZXJpbWVudF0gPSB2YXJpYXRpb247XG4gIH0pO1xuXG4gIGFuYWx5dGljcy5pZGVudGlmeSh0cmFpdHMpO1xufTtcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCd1c2UtaHR0cHMnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihPbGFyayk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgT2xhcmtgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBPbGFyayA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignT2xhcmsnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnb2xhcmsnKVxuICAub3B0aW9uKCdpZGVudGlmeScsIHRydWUpXG4gIC5vcHRpb24oJ3BhZ2UnLCB0cnVlKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJylcbiAgLm9wdGlvbigndHJhY2snLCBmYWxzZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vd3d3Lm9sYXJrLmNvbS9kb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5PbGFyay5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cub2xhcmt8fChmdW5jdGlvbihjKXt2YXIgZj13aW5kb3csZD1kb2N1bWVudCxsPWh0dHBzKCk/XCJodHRwczpcIjpcImh0dHA6XCIsej1jLm5hbWUscj1cImxvYWRcIjt2YXIgbnQ9ZnVuY3Rpb24oKXtmW3pdPWZ1bmN0aW9uKCl7KGEucz1hLnN8fFtdKS5wdXNoKGFyZ3VtZW50cyl9O3ZhciBhPWZbel0uXz17fSxxPWMubWV0aG9kcy5sZW5ndGg7d2hpbGUgKHEtLSkgeyhmdW5jdGlvbihuKXtmW3pdW25dPWZ1bmN0aW9uKCl7Zlt6XShcImNhbGxcIixuLGFyZ3VtZW50cyl9fSkoYy5tZXRob2RzW3FdKX1hLmw9Yy5sb2FkZXI7YS5pPW50O2EucD17IDA6K25ldyBEYXRlKCkgfTthLlA9ZnVuY3Rpb24odSl7YS5wW3VdPW5ldyBEYXRlKCktYS5wWzBdfTtmdW5jdGlvbiBzKCl7YS5QKHIpO2Zbel0ocil9Zi5hZGRFdmVudExpc3RlbmVyP2YuYWRkRXZlbnRMaXN0ZW5lcihyLHMsZmFsc2UpOmYuYXR0YWNoRXZlbnQoXCJvblwiK3Iscyk7dmFyIGxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gcChoZCl7aGQ9XCJoZWFkXCI7cmV0dXJuIFtcIjxcIixoZCxcIj48L1wiLGhkLFwiPjxcIixpLCcgb25sJyArICdvYWQ9XCJ2YXIgZD0nLGcsXCI7ZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLlwiLGosXCIoZC5cIixoLFwiKCdzY3JpcHQnKSkuXCIsayxcIj0nXCIsbCxcIi8vXCIsYS5sLFwiJ1wiLCdcIicsXCI+PC9cIixpLFwiPlwiXS5qb2luKFwiXCIpfXZhciBpPVwiYm9keVwiLG09ZFtpXTtpZiAoIW0pIHtyZXR1cm4gc2V0VGltZW91dChsZCwxMDApfWEuUCgxKTt2YXIgaj1cImFwcGVuZENoaWxkXCIsaD1cImNyZWF0ZUVsZW1lbnRcIixrPVwic3JjXCIsbj1kW2hdKFwiZGl2XCIpLHY9bltqXShkW2hdKHopKSxiPWRbaF0oXCJpZnJhbWVcIiksZz1cImRvY3VtZW50XCIsZT1cImRvbWFpblwiLG87bi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO20uaW5zZXJ0QmVmb3JlKG4sbS5maXJzdENoaWxkKS5pZD16O2IuZnJhbWVCb3JkZXI9XCIwXCI7Yi5pZD16K1wiLWxvYWRlclwiO2lmICgvTVNJRVsgXSs2Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7Yi5zcmM9XCJqYXZhc2NyaXB0OmZhbHNlXCJ9Yi5hbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIjt2W2pdKGIpO3RyeSB7Yi5jb250ZW50V2luZG93W2ddLm9wZW4oKX1jYXRjaCAodykge2NbZV09ZFtlXTtvPVwiamF2YXNjcmlwdDp2YXIgZD1cIitnK1wiLm9wZW4oKTtkLmRvbWFpbj0nXCIrZC5kb21haW4rXCInO1wiO2Jba109bytcInZvaWQoMCk7XCJ9dHJ5IHt2YXIgdD1iLmNvbnRlbnRXaW5kb3dbZ107dC53cml0ZShwKCkpO3QuY2xvc2UoKX1jYXRjaCAoeCkge2Jba109bysnZC53cml0ZShcIicrcCgpLnJlcGxhY2UoL1wiL2csU3RyaW5nLmZyb21DaGFyQ29kZSg5MikrJ1wiJykrJ1wiKTtkLmNsb3NlKCk7J31hLlAoMil9O2xkKCl9O250KCl9KSh7IGxvYWRlcjogXCJzdGF0aWMub2xhcmsuY29tL2pzY2xpZW50L2xvYWRlcjAuanNcIiwgbmFtZTpcIm9sYXJrXCIsIG1ldGhvZHM6W1wiY29uZmlndXJlXCIsXCJleHRlbmRcIixcImRlY2xhcmVcIixcImlkZW50aWZ5XCJdIH0pO1xuICB3aW5kb3cub2xhcmsuaWRlbnRpZnkodGhpcy5vcHRpb25zLnNpdGVJZCk7XG5cbiAgLy8ga2VlcCB0cmFjayBvZiB0aGUgd2lkZ2V0J3Mgb3BlbiBzdGF0ZVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGJveCgnb25FeHBhbmQnLCBmdW5jdGlvbigpeyBzZWxmLl9vcGVuID0gdHJ1ZTsgfSk7XG4gIGJveCgnb25TaHJpbmsnLCBmdW5jdGlvbigpeyBzZWxmLl9vcGVuID0gZmFsc2U7IH0pO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbk9sYXJrLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIGlmICghdGhpcy5vcHRpb25zLnBhZ2UgfHwgIXRoaXMuX29wZW4pIHJldHVybjtcbiAgdmFyIHByb3BzID0gcGFnZS5wcm9wZXJ0aWVzKCk7XG4gIHZhciBuYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuXG4gIGlmICghbmFtZSAmJiAhcHJvcHMudXJsKSByZXR1cm47XG5cbiAgdmFyIG1zZyA9IG5hbWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgKyAnIHBhZ2UnIDogcHJvcHMudXJsO1xuXG4gIGNoYXQoJ3NlbmROb3RpZmljYXRpb25Ub09wZXJhdG9yJywge1xuICAgIGJvZHk6ICdsb29raW5nIGF0ICcgKyBtc2cgLy8gbG93ZXJjYXNlIHNpbmNlIG9sYXJrIGRvZXNcbiAgfSk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gdHJhaXRzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqL1xuXG5PbGFyay5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIGlmICghdGhpcy5vcHRpb25zLmlkZW50aWZ5KSByZXR1cm47XG5cbiAgdmFyIHVzZXJuYW1lID0gaWRlbnRpZnkudXNlcm5hbWUoKTtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cygpO1xuICB2YXIgaWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgdmFyIHBob25lID0gaWRlbnRpZnkucGhvbmUoKTtcbiAgdmFyIG5hbWUgPSBpZGVudGlmeS5uYW1lKClcbiAgICB8fCBpZGVudGlmeS5maXJzdE5hbWUoKTtcblxuICB2aXNpdG9yKCd1cGRhdGVDdXN0b21GaWVsZHMnLCB0cmFpdHMpO1xuICBpZiAoZW1haWwpIHZpc2l0b3IoJ3VwZGF0ZUVtYWlsQWRkcmVzcycsIHsgZW1haWxBZGRyZXNzOiBlbWFpbCB9KTtcbiAgaWYgKHBob25lKSB2aXNpdG9yKCd1cGRhdGVQaG9uZU51bWJlcicsIHsgcGhvbmVOdW1iZXI6IHBob25lIH0pO1xuXG4gIC8vIGZpZ3VyZSBvdXQgYmVzdCBuYW1lXG4gIGlmIChuYW1lKSB2aXNpdG9yKCd1cGRhdGVGdWxsTmFtZScsIHsgZnVsbE5hbWU6IG5hbWUgfSk7XG5cbiAgLy8gZmlndXJlIG91dCBiZXN0IG5pY2tuYW1lXG4gIHZhciBuaWNrbmFtZSA9IG5hbWUgfHwgZW1haWwgfHwgdXNlcm5hbWUgfHwgaWQ7XG4gIGlmIChuYW1lICYmIGVtYWlsKSBuaWNrbmFtZSArPSAnICgnICsgZW1haWwgKyAnKSc7XG4gIGlmIChuaWNrbmFtZSkgY2hhdCgndXBkYXRlVmlzaXRvck5pY2tuYW1lJywgeyBzbmlwcGV0OiBuaWNrbmFtZSB9KTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuT2xhcmsucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICBpZiAoIXRoaXMub3B0aW9ucy50cmFjayB8fCAhdGhpcy5fb3BlbikgcmV0dXJuO1xuICBjaGF0KCdzZW5kTm90aWZpY2F0aW9uVG9PcGVyYXRvcicsIHtcbiAgICBib2R5OiAndmlzaXRvciB0cmlnZ2VyZWQgXCInICsgdHJhY2suZXZlbnQoKSArICdcIicgLy8gbG93ZXJjYXNlIHNpbmNlIG9sYXJrIGRvZXNcbiAgfSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIE9sYXJrIGJveCBBUEkgY2FsbHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gYm94KGFjdGlvbiwgdmFsdWUpe1xuICB3aW5kb3cub2xhcmsoJ2FwaS5ib3guJyArIGFjdGlvbiwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIE9sYXJrIHZpc2l0b3IgQVBJIGNhbGxzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHZpc2l0b3IoYWN0aW9uLCB2YWx1ZSl7XG4gIHdpbmRvdy5vbGFyaygnYXBpLnZpc2l0b3IuJyArIGFjdGlvbiwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIE9sYXJrIGNoYXQgQVBJIGNhbGxzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIGNoYXQoYWN0aW9uLCB2YWx1ZSl7XG4gIHdpbmRvdy5vbGFyaygnYXBpLmNoYXQuJyArIGFjdGlvbiwgdmFsdWUpO1xufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19fbmxzJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oTmF2aWx5dGljcyk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgTmF2aWx5dGljc2AgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIE5hdmlseXRpY3MgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ05hdmlseXRpY3MnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnX19ubHMnKVxuICAub3B0aW9uKCdtZW1iZXJJZCcsICcnKVxuICAub3B0aW9uKCdwcm9qZWN0SWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy5uYXZpbHl0aWNzLmNvbS9tZW1iZXIvY29kZV9zZXR0aW5nc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuTmF2aWx5dGljcy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX19ubHMgPSB3aW5kb3cuX19ubHMgfHwgW107XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5OYXZpbHl0aWNzLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgKHdpbmRvdy5fX25scyAmJiBbXS5wdXNoICE9IHdpbmRvdy5fX25scy5wdXNoKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgTmF2aWx5dGljcyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuTmF2aWx5dGljcy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIG1pZCA9IHRoaXMub3B0aW9ucy5tZW1iZXJJZDtcbiAgdmFyIHBpZCA9IHRoaXMub3B0aW9ucy5wcm9qZWN0SWQ7XG4gIHZhciB1cmwgPSAnLy93d3cubmF2aWx5dGljcy5jb20vbmxzLmpzP21pZD0nICsgbWlkICsgJyZwaWQ9JyArIHBpZDtcbiAgbG9hZCh1cmwsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogaHR0cHM6Ly93d3cubmF2aWx5dGljcy5jb20vZG9jcyN0YWdzXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5OYXZpbHl0aWNzLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgcHVzaCgndGFnUmVjb3JkaW5nJywgdHJhY2suZXZlbnQoKSk7XG59O1xuIiwiXG52YXIgZWFjaCA9IHJlcXVpcmUoJ2VhY2gnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKE1vdXNlU3RhdHMpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYE1vdXNlU3RhdHNgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBNb3VzZVN0YXRzID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdNb3VzZVN0YXRzJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ21zYWEnKVxuICAub3B0aW9uKCdhY2NvdW50TnVtYmVyJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL3d3dy5tb3VzZXN0YXRzLmNvbS9kb2NzL3BhZ2VzL2FsbHBhZ2VzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5Nb3VzZVN0YXRzLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Nb3VzZVN0YXRzLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMuZm4od2luZG93Lm1zYWEpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuTW91c2VTdGF0cy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIG51bWJlciA9IHRoaXMub3B0aW9ucy5hY2NvdW50TnVtYmVyO1xuICB2YXIgcGF0aCA9IG51bWJlci5zbGljZSgwLDEpICsgJy8nICsgbnVtYmVyLnNsaWNlKDEsMikgKyAnLycgKyBudW1iZXI7XG4gIHZhciBjYWNoZSA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyA2MDAwMCk7XG4gIHZhciBwYXJ0aWFsID0gJy5tb3VzZXN0YXRzLmNvbS9qcy8nICsgcGF0aCArICcuanM/JyArIGNhY2hlO1xuICB2YXIgaHR0cCA9ICdodHRwOi8vd3d3MicgKyBwYXJ0aWFsO1xuICB2YXIgaHR0cHMgPSAnaHR0cHM6Ly9zc2wnICsgcGFydGlhbDtcbiAgbG9hZCh7IGh0dHA6IGh0dHAsIGh0dHBzOiBodHRwcyB9LCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIGh0dHA6Ly93d3cubW91c2VzdGF0cy5jb20vZG9jcy93aWtpLzcvaG93LXRvLWFkZC1jdXN0b20tZGF0YS10by12aXNpdG9yLXBsYXliYWNrc1xuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuTW91c2VTdGF0cy5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIGVhY2goaWRlbnRpZnkudHJhaXRzKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHdpbmRvdy5Nb3VzZVN0YXRzVmlzaXRvclBsYXliYWNrcy5jdXN0b21WYXJpYWJsZShrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuIiwiXG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfbWZxJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihNb3VzZWZsb3cpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYE1vdXNlZmxvd2BcbiAqL1xuXG52YXIgTW91c2VmbG93ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdNb3VzZWZsb3cnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnbW91c2VmbG93JylcbiAgLmdsb2JhbCgnX21mcScpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKVxuICAub3B0aW9uKCdtb3VzZWZsb3dIdG1sRGVsYXknLCAwKTtcblxuLyoqXG4gKiBJbmlpdGFsaXplXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5Nb3VzZWZsb3cucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbk1vdXNlZmxvdy5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX21mcSAmJiBbXS5wdXNoICE9IHdpbmRvdy5fbWZxLnB1c2gpO1xufTtcblxuLyoqXG4gKiBMb2FkIG1vdXNlZmxvdy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbk1vdXNlZmxvdy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIGFwaUtleSA9IHRoaXMub3B0aW9ucy5hcGlLZXk7XG4gIHdpbmRvdy5tb3VzZWZsb3dIdG1sRGVsYXkgPSB0aGlzLm9wdGlvbnMubW91c2VmbG93SHRtbERlbGF5O1xuICBsb2FkKCcvL2Nkbi5tb3VzZWZsb3cuY29tL3Byb2plY3RzLycgKyBhcGlLZXkgKyAnLmpzJywgZm4pO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIC8vbW91c2VmbG93LnplbmRlc2suY29tL2VudHJpZXMvMjI1Mjg4MTctU2luZ2xlLXBhZ2Utd2Vic2l0ZXNcbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5Nb3VzZWZsb3cucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgaWYgKCF3aW5kb3cubW91c2VmbG93KSByZXR1cm47XG4gIGlmICgnZnVuY3Rpb24nICE9IHR5cGVvZiBtb3VzZWZsb3cubmV3UGFnZVZpZXcpIHJldHVybjtcbiAgbW91c2VmbG93Lm5ld1BhZ2VWaWV3KCk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIC8vbW91c2VmbG93LnplbmRlc2suY29tL2VudHJpZXMvMjQ2NDM2MDMtQ3VzdG9tLVZhcmlhYmxlcy1UYWdnaW5nXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5Nb3VzZWZsb3cucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICBzZXQoaWRlbnRpZnkudHJhaXRzKCkpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiAvL21vdXNlZmxvdy56ZW5kZXNrLmNvbS9lbnRyaWVzLzI0NjQzNjAzLUN1c3RvbS1WYXJpYWJsZXMtVGFnZ2luZ1xuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuTW91c2VmbG93LnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xuICBwcm9wcy5ldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIHNldChwcm9wcyk7XG59O1xuXG4vKipcbiAqIFB1c2ggdGhlIGdpdmVuIGBoYXNoYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaFxuICovXG5cbmZ1bmN0aW9uIHNldChoYXNoKXtcbiAgZWFjaChoYXNoLCBmdW5jdGlvbihrLCB2KXtcbiAgICBwdXNoKCdzZXRWYXJpYWJsZScsIGssIHYpO1xuICB9KTtcbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKE1vam4pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYE1vam5gXG4gKi9cblxudmFyIE1vam4gPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ01vam4nKVxuICAub3B0aW9uKCdjdXN0b21lckNvZGUnLCAnJylcbiAgLmdsb2JhbCgnX21vam5UcmFjaycpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5Nb2puLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKXtcbiAgd2luZG93Ll9tb2puVHJhY2sgPSB3aW5kb3cuX21vam5UcmFjayB8fCBbXTtcbiAgd2luZG93Ll9tb2puVHJhY2sucHVzaCh7IGNpZDogdGhpcy5vcHRpb25zLmN1c3RvbWVyQ29kZSB9KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIE1vam4gc2NyaXB0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuTW9qbi5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZuKXtcbiAgbG9hZCgnaHR0cHM6Ly90cmFjay5pZHRhcmdldGluZy5jb20vJyArIHRoaXMub3B0aW9ucy5jdXN0b21lckNvZGUgKyAnL3RyYWNrLmpzJywgZm4pO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Nb2puLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMub2JqZWN0KHdpbmRvdy5fbW9qblRyYWNrKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5Nb2puLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgaWYgKCFlbWFpbCkgcmV0dXJuO1xuICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSAnLy9tYXRjaGVyLmlkdGFyZ2V0aW5nLmNvbS9hbmFseXRpY3MuZ2lmP2NpZD0nICsgdGhpcy5vcHRpb25zLmN1c3RvbWVyQ29kZSArICcmX21qbmN0aWQ9JytlbWFpbDtcbiAgaW1nLndpZHRoID0gMTtcbiAgaW1nLmhlaWdodCA9IDE7XG4gIHJldHVybiBpbWc7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IGV2ZW50XG4gKi9cblxuTW9qbi5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBwcm9wZXJ0aWVzID0gdHJhY2sucHJvcGVydGllcygpO1xuICB2YXIgcmV2ZW51ZSA9IHByb3BlcnRpZXMucmV2ZW51ZTtcbiAgdmFyIGN1cnJlbmN5ID0gcHJvcGVydGllcy5jdXJyZW5jeSB8fCAnJztcbiAgdmFyIGNvbnYgPSBjdXJyZW5jeSArIHJldmVudWU7XG4gIGlmICghcmV2ZW51ZSkgcmV0dXJuO1xuICB3aW5kb3cuX21vam5UcmFjay5wdXNoKHsgY29udjogY29udiB9KTtcbiAgcmV0dXJuIGNvbnY7XG59O1xuIiwiXG52YXIgYWxpYXMgPSByZXF1aXJlKCdhbGlhcycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBkYXRlcyA9IHJlcXVpcmUoJ2NvbnZlcnQtZGF0ZXMnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXNvID0gcmVxdWlyZSgndG8taXNvLXN0cmluZycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIGluZGV4b2YgPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgZGVsID0gcmVxdWlyZSgnb2JqLWNhc2UnKS5kZWw7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oTWl4cGFuZWwpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYE1peHBhbmVsYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgTWl4cGFuZWwgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ01peHBhbmVsJylcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnbWl4cGFuZWwnKVxuICAub3B0aW9uKCdpbmNyZW1lbnRzJywgW10pXG4gIC5vcHRpb24oJ2Nvb2tpZU5hbWUnLCAnJylcbiAgLm9wdGlvbignbmFtZVRhZycsIHRydWUpXG4gIC5vcHRpb24oJ3BhZ2V2aWV3JywgZmFsc2UpXG4gIC5vcHRpb24oJ3Blb3BsZScsIGZhbHNlKVxuICAub3B0aW9uKCd0b2tlbicsICcnKVxuICAub3B0aW9uKCd0cmFja0FsbFBhZ2VzJywgZmFsc2UpXG4gIC5vcHRpb24oJ3RyYWNrTmFtZWRQYWdlcycsIHRydWUpXG4gIC5vcHRpb24oJ3RyYWNrQ2F0ZWdvcml6ZWRQYWdlcycsIHRydWUpO1xuXG4vKipcbiAqIE9wdGlvbnMgYWxpYXNlcy5cbiAqL1xuXG52YXIgb3B0aW9uc0FsaWFzZXMgPSB7XG4gIGNvb2tpZU5hbWU6ICdjb29raWVfbmFtZSdcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL21peHBhbmVsLmNvbS9oZWxwL3JlZmVyZW5jZS9qYXZhc2NyaXB0I2luc3RhbGxpbmdcbiAqIGh0dHBzOi8vbWl4cGFuZWwuY29tL2hlbHAvcmVmZXJlbmNlL2phdmFzY3JpcHQtZnVsbC1hcGktcmVmZXJlbmNlI21peHBhbmVsLmluaXRcbiAqL1xuXG5NaXhwYW5lbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gIChmdW5jdGlvbihjLCBhKXt3aW5kb3cubWl4cGFuZWwgPSBhOyB2YXIgYiwgZCwgaCwgZTsgYS5faSA9IFtdOyBhLmluaXQgPSBmdW5jdGlvbihiLCBjLCBmKXtmdW5jdGlvbiBkKGEsIGIpe3ZhciBjID0gYi5zcGxpdCgnLicpOyAyID09IGMubGVuZ3RoICYmIChhID0gYVtjWzBdXSwgYiA9IGNbMV0pOyBhW2JdID0gZnVuY3Rpb24oKXthLnB1c2goW2JdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKSk7IH07IH0gdmFyIGcgPSBhOyAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGYgPyBnID0gYVtmXSA9IFtdIDogZiA9ICdtaXhwYW5lbCc7IGcucGVvcGxlID0gZy5wZW9wbGUgfHwgW107IGggPSBbJ2Rpc2FibGUnLCAndHJhY2snLCAndHJhY2tfcGFnZXZpZXcnLCAndHJhY2tfbGlua3MnLCAndHJhY2tfZm9ybXMnLCAncmVnaXN0ZXInLCAncmVnaXN0ZXJfb25jZScsICd1bnJlZ2lzdGVyJywgJ2lkZW50aWZ5JywgJ2FsaWFzJywgJ25hbWVfdGFnJywgJ3NldF9jb25maWcnLCAncGVvcGxlLnNldCcsICdwZW9wbGUuaW5jcmVtZW50JywgJ3Blb3BsZS50cmFja19jaGFyZ2UnLCAncGVvcGxlLmFwcGVuZCddOyBmb3IgKGUgPSAwOyBlIDwgaC5sZW5ndGg7IGUrKykgZChnLCBoW2VdKTsgYS5faS5wdXNoKFtiLCBjLCBmXSk7IH07IGEuX19TViA9IDEuMjsgfSkoZG9jdW1lbnQsIHdpbmRvdy5taXhwYW5lbCB8fCBbXSk7XG4gIHRoaXMub3B0aW9ucy5pbmNyZW1lbnRzID0gbG93ZXJjYXNlKHRoaXMub3B0aW9ucy5pbmNyZW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBhbGlhcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnNBbGlhc2VzKTtcbiAgd2luZG93Lm1peHBhbmVsLmluaXQob3B0aW9ucy50b2tlbiwgb3B0aW9ucyk7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5NaXhwYW5lbC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cubWl4cGFuZWwgJiYgd2luZG93Lm1peHBhbmVsLmNvbmZpZyk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5NaXhwYW5lbC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9jZG4ubXhwbmwuY29tL2xpYnMvbWl4cGFuZWwtMi4yLm1pbi5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBodHRwczovL21peHBhbmVsLmNvbS9oZWxwL3JlZmVyZW5jZS9qYXZhc2NyaXB0LWZ1bGwtYXBpLXJlZmVyZW5jZSNtaXhwYW5lbC50cmFja19wYWdldmlld1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeSAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuTWl4cGFuZWwucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgdmFyIGNhdGVnb3J5ID0gcGFnZS5jYXRlZ29yeSgpO1xuICB2YXIgbmFtZSA9IHBhZ2UuZnVsbE5hbWUoKTtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gYWxsIHBhZ2VzXG4gIGlmIChvcHRzLnRyYWNrQWxsUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soKSk7XG4gIH1cblxuICAvLyBjYXRlZ29yaXplZCBwYWdlc1xuICBpZiAoY2F0ZWdvcnkgJiYgb3B0cy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soY2F0ZWdvcnkpKTtcbiAgfVxuXG4gIC8vIG5hbWVkIHBhZ2VzXG4gIGlmIChuYW1lICYmIG9wdHMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKG5hbWUpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUcmFpdCBhbGlhc2VzLlxuICovXG5cbnZhciB0cmFpdEFsaWFzZXMgPSB7XG4gIGNyZWF0ZWQ6ICckY3JlYXRlZCcsXG4gIGVtYWlsOiAnJGVtYWlsJyxcbiAgZmlyc3ROYW1lOiAnJGZpcnN0X25hbWUnLFxuICBsYXN0TmFtZTogJyRsYXN0X25hbWUnLFxuICBsYXN0U2VlbjogJyRsYXN0X3NlZW4nLFxuICBuYW1lOiAnJG5hbWUnLFxuICB1c2VybmFtZTogJyR1c2VybmFtZScsXG4gIHBob25lOiAnJHBob25lJ1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBodHRwczovL21peHBhbmVsLmNvbS9oZWxwL3JlZmVyZW5jZS9qYXZhc2NyaXB0I3N1cGVyLXByb3BlcnRpZXNcbiAqIGh0dHBzOi8vbWl4cGFuZWwuY29tL2hlbHAvcmVmZXJlbmNlL2phdmFzY3JpcHQjdXNlci1pZGVudGl0eVxuICogaHR0cHM6Ly9taXhwYW5lbC5jb20vaGVscC9yZWZlcmVuY2UvamF2YXNjcmlwdCNzdG9yaW5nLXVzZXItcHJvZmlsZXNcbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbk1peHBhbmVsLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHVzZXJuYW1lID0gaWRlbnRpZnkudXNlcm5hbWUoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG5cbiAgLy8gaWRcbiAgaWYgKGlkKSB3aW5kb3cubWl4cGFuZWwuaWRlbnRpZnkoaWQpO1xuXG4gIC8vIG5hbWUgdGFnXG4gIHZhciBuYW1ldGFnID0gZW1haWwgfHwgdXNlcm5hbWUgfHwgaWQ7XG4gIGlmIChuYW1ldGFnKSB3aW5kb3cubWl4cGFuZWwubmFtZV90YWcobmFtZXRhZyk7XG5cbiAgLy8gdHJhaXRzXG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHModHJhaXRBbGlhc2VzKTtcbiAgaWYgKHRyYWl0cy4kY3JlYXRlZCkgZGVsKHRyYWl0cywgJ2NyZWF0ZWRBdCcpO1xuICB3aW5kb3cubWl4cGFuZWwucmVnaXN0ZXIodHJhaXRzKTtcbiAgaWYgKHRoaXMub3B0aW9ucy5wZW9wbGUpIHdpbmRvdy5taXhwYW5lbC5wZW9wbGUuc2V0KHRyYWl0cyk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHBzOi8vbWl4cGFuZWwuY29tL2hlbHAvcmVmZXJlbmNlL2phdmFzY3JpcHQjc2VuZGluZy1ldmVudHNcbiAqIGh0dHBzOi8vbWl4cGFuZWwuY29tL2hlbHAvcmVmZXJlbmNlL2phdmFzY3JpcHQjdHJhY2tpbmctcmV2ZW51ZVxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuTWl4cGFuZWwucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgaW5jcmVtZW50cyA9IHRoaXMub3B0aW9ucy5pbmNyZW1lbnRzO1xuICB2YXIgaW5jcmVtZW50ID0gdHJhY2suZXZlbnQoKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgcGVvcGxlID0gdGhpcy5vcHRpb25zLnBlb3BsZTtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xuICB2YXIgcmV2ZW51ZSA9IHRyYWNrLnJldmVudWUoKTtcblxuICBpZiAocGVvcGxlICYmIH5pbmRleG9mKGluY3JlbWVudHMsIGluY3JlbWVudCkpIHtcbiAgICB3aW5kb3cubWl4cGFuZWwucGVvcGxlLmluY3JlbWVudCh0cmFjay5ldmVudCgpKTtcbiAgICB3aW5kb3cubWl4cGFuZWwucGVvcGxlLnNldCgnTGFzdCAnICsgdHJhY2suZXZlbnQoKSwgbmV3IERhdGUpO1xuICB9XG5cbiAgcHJvcHMgPSBkYXRlcyhwcm9wcywgaXNvKTtcbiAgd2luZG93Lm1peHBhbmVsLnRyYWNrKHRyYWNrLmV2ZW50KCksIHByb3BzKTtcblxuICBpZiAocmV2ZW51ZSAmJiBwZW9wbGUpIHtcbiAgICB3aW5kb3cubWl4cGFuZWwucGVvcGxlLnRyYWNrX2NoYXJnZShyZXZlbnVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbGlhcy5cbiAqXG4gKiBodHRwczovL21peHBhbmVsLmNvbS9oZWxwL3JlZmVyZW5jZS9qYXZhc2NyaXB0I3VzZXItaWRlbnRpdHlcbiAqIGh0dHBzOi8vbWl4cGFuZWwuY29tL2hlbHAvcmVmZXJlbmNlL2phdmFzY3JpcHQtZnVsbC1hcGktcmVmZXJlbmNlI21peHBhbmVsLmFsaWFzXG4gKlxuICogQHBhcmFtIHtBbGlhc30gYWxpYXNcbiAqL1xuXG5NaXhwYW5lbC5wcm90b3R5cGUuYWxpYXMgPSBmdW5jdGlvbihhbGlhcyl7XG4gIHZhciBtcCA9IHdpbmRvdy5taXhwYW5lbDtcbiAgdmFyIHRvID0gYWxpYXMudG8oKTtcbiAgaWYgKG1wLmdldF9kaXN0aW5jdF9pZCAmJiBtcC5nZXRfZGlzdGluY3RfaWQoKSA9PT0gdG8pIHJldHVybjtcbiAgLy8gSEFDSzogaW50ZXJuYWwgbWl4cGFuZWwgQVBJIHRvIGVuc3VyZSB3ZSBkb24ndCBvdmVyd3JpdGVcbiAgaWYgKG1wLmdldF9wcm9wZXJ0eSAmJiBtcC5nZXRfcHJvcGVydHkoJyRwZW9wbGVfZGlzdGluY3RfaWQnKSA9PT0gdG8pIHJldHVybjtcbiAgLy8gYWx0aG91Z2ggdW5kb2N1bWVudGVkLCBtaXhwYW5lbCB0YWtlcyBhbiBvcHRpb25hbCBvcmlnaW5hbCBpZFxuICBtcC5hbGlhcyh0bywgYWxpYXMuZnJvbSgpKTtcbn07XG5cbi8qKlxuICogTG93ZXJjYXNlIHRoZSBnaXZlbiBgYXJyYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG93ZXJjYXNlKGFycil7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBTdHJpbmcoYXJyW2ldKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlxudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEx5dGljcyk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgTHl0aWNzYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgTHl0aWNzID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdMeXRpY3MnKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdqc3RhZycpXG4gIC5vcHRpb24oJ2NpZCcsICcnKVxuICAub3B0aW9uKCdjb29raWUnLCAnc2VlcmlkJylcbiAgLm9wdGlvbignZGVsYXknLCAyMDAwKVxuICAub3B0aW9uKCdzZXNzaW9uVGltZW91dCcsIDE4MDApXG4gIC5vcHRpb24oJ3VybCcsICcvL2MubHl0aWNzLmlvJyk7XG5cbi8qKlxuICogT3B0aW9ucyBhbGlhc2VzLlxuICovXG5cbnZhciBhbGlhc2VzID0ge1xuICBzZXNzaW9uVGltZW91dDogJ3Nlc3NlY3MnXG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2FkbWluLmx5dGljcy5pby9kb2MjanN0YWdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkx5dGljcy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgb3B0aW9ucyA9IGFsaWFzKHRoaXMub3B0aW9ucywgYWxpYXNlcyk7XG4gIHdpbmRvdy5qc3RhZyA9IChmdW5jdGlvbigpe3ZhciB0ID0geyBfcTogW10sIF9jOiBvcHRpb25zLCB0czogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSB9OyB0LnNlbmQgPSBmdW5jdGlvbigpe3RoaXMuX3EucHVzaChbJ3JlYWR5JywgJ3NlbmQnLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXSk7IHJldHVybiB0aGlzOyB9OyByZXR1cm4gdDsgfSkoKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkx5dGljcy5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuanN0YWcgJiYgd2luZG93LmpzdGFnLmJpbmQpO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBMeXRpY3MgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkx5dGljcy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9jLmx5dGljcy5pby9zdGF0aWMvaW8ubWluLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkx5dGljcy5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuanN0YWcuc2VuZChwYWdlLnByb3BlcnRpZXMoKSk7XG59O1xuXG4vKipcbiAqIElkZW5maXR5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuTHl0aWNzLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cyh7IHVzZXJJZDogJ191aWQnIH0pO1xuICB3aW5kb3cuanN0YWcuc2VuZCh0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqL1xuXG5MeXRpY3MucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHByb3BzLl9lID0gdHJhY2suZXZlbnQoKTtcbiAgd2luZG93LmpzdGFnLnNlbmQocHJvcHMpO1xufTtcbiIsIlxudmFyIElkZW50aWZ5ID0gcmVxdWlyZSgnZmFjYWRlJykuSWRlbnRpZnk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIFVzZXIgcmVmXG4gKi9cblxudmFyIHVzZXI7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oTHVja3lPcmFuZ2UpO1xuICB1c2VyID0gYW5hbHl0aWNzLnVzZXIoKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBMdWNreU9yYW5nZWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEx1Y2t5T3JhbmdlID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdMdWNreSBPcmFuZ2UnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnX2xvcScpXG4gIC5nbG9iYWwoJ19fd3R3X3dhdGNoZXJfYWRkZWQnKVxuICAuZ2xvYmFsKCdfX3d0d19sdWNreV9zaXRlX2lkJylcbiAgLmdsb2JhbCgnX193dHdfbHVja3lfaXNfc2VnbWVudF9pbycpXG4gIC5nbG9iYWwoJ19fd3R3X2N1c3RvbV91c2VyX2RhdGEnKVxuICAub3B0aW9uKCdzaXRlSWQnLCBudWxsKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuTHVja3lPcmFuZ2UucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9sb3EgfHwgKHdpbmRvdy5fbG9xID0gW10pO1xuICB3aW5kb3cuX193dHdfbHVja3lfc2l0ZV9pZCA9IHRoaXMub3B0aW9ucy5zaXRlSWQ7XG4gIHRoaXMuaWRlbnRpZnkobmV3IElkZW50aWZ5KHtcbiAgICB0cmFpdHM6IHVzZXIudHJhaXRzKCksXG4gICAgdXNlcklkOiB1c2VyLmlkKClcbiAgfSkpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuTHVja3lPcmFuZ2UucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISB3aW5kb3cuX193dHdfd2F0Y2hlcl9hZGRlZDtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkx1Y2t5T3JhbmdlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgY2FjaGUgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gNjAwMDApO1xuICBsb2FkKHtcbiAgICBodHRwOiAnaHR0cDovL3d3dy5sdWNreW9yYW5nZS5jb20vdy5qcz8nICsgY2FjaGUsXG4gICAgaHR0cHM6ICdodHRwczovL3NzbC5sdWNreW9yYW5nZS5jb20vdy5qcz8nICsgY2FjaGVcbiAgfSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkx1Y2t5T3JhbmdlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IHdpbmRvdy5fX3d0d19jdXN0b21fdXNlcl9kYXRhID0gaWRlbnRpZnkudHJhaXRzKCk7XG4gIHZhciBlbWFpbCA9IGlkZW50aWZ5LmVtYWlsKCk7XG4gIHZhciBuYW1lID0gaWRlbnRpZnkubmFtZSgpO1xuICBpZiAobmFtZSkgdHJhaXRzLm5hbWUgPSBuYW1lO1xuICBpZiAoZW1haWwpIHRyYWl0cy5lbWFpbCA9IGVtYWlsO1xufTtcbiIsIlxudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciB3aGVuID0gcmVxdWlyZSgnd2hlbicpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKExpdmVDaGF0KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBMaXZlQ2hhdGAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIExpdmVDaGF0ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdMaXZlQ2hhdCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfX2xjJylcbiAgLmdsb2JhbCgnX19sY19pbml0ZWQnKVxuICAuZ2xvYmFsKCdMQ19BUEknKVxuICAuZ2xvYmFsKCdMQ19JbnZpdGUnKVxuICAub3B0aW9uKCdncm91cCcsIDApXG4gIC5vcHRpb24oJ2xpY2Vuc2UnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vd3d3LmxpdmVjaGF0aW5jLmNvbS9hcGkvamF2YXNjcmlwdC1hcGlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkxpdmVDaGF0LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fX2xjID0gY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkxpdmVDaGF0LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEod2luZG93LkxDX0FQSSAmJiB3aW5kb3cuTENfSW52aXRlKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkxpdmVDaGF0LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGxvYWQoJy8vY2RuLmxpdmVjaGF0aW5jLmNvbS90cmFja2luZy5qcycsIGZ1bmN0aW9uKGVycil7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgd2hlbihmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHNlbGYubG9hZGVkKCk7XG4gICAgfSwgY2FsbGJhY2spO1xuICB9KTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5MaXZlQ2hhdC5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoeyB1c2VySWQ6ICdVc2VyIElEJyB9KTtcbiAgd2luZG93LkxDX0FQSS5zZXRfY3VzdG9tX3ZhcmlhYmxlcyhjb252ZXJ0KHRyYWl0cykpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdHJhaXRzIG9iamVjdCBpbnRvIHRoZSBmb3JtYXQgTGl2ZUNoYXQgcmVxdWlyZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRyYWl0c1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gY29udmVydCh0cmFpdHMpe1xuICB2YXIgYXJyID0gW107XG4gIGVhY2godHJhaXRzLCBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICBhcnIucHVzaCh7IG5hbWU6IGtleSwgdmFsdWU6IHZhbHVlIH0pO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihMZWFkTGFuZGVyKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBMZWFkTGFuZGVyYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgTGVhZExhbmRlciA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignTGVhZExhbmRlcicpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdsbGFjdGlkJylcbiAgLmdsb2JhbCgndHJhY2thbHl6ZXInKVxuICAub3B0aW9uKCdhY2NvdW50SWQnLCBudWxsKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuTGVhZExhbmRlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cubGxhY3RpZCA9IHRoaXMub3B0aW9ucy5hY2NvdW50SWQ7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5MZWFkTGFuZGVyLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93LnRyYWNrYWx5emVyO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuTGVhZExhbmRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnaHR0cDovL3Q2LnRyYWNrYWx5emVyLmNvbS90cmFja2FseXplLW5vZG9jLmpzJywgY2FsbGJhY2spO1xufTsiLCJcbnZhciBhbGlhcyA9IHJlcXVpcmUoJ2FsaWFzJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19sZWFybnEnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihLbGF2aXlvKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBLbGF2aXlvYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgS2xhdml5byA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignS2xhdml5bycpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfbGVhcm5xJylcbiAgLm9wdGlvbignYXBpS2V5JywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cHM6Ly93d3cua2xhdml5by5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbktsYXZpeW8ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgcHVzaCgnYWNjb3VudCcsIHRoaXMub3B0aW9ucy5hcGlLZXkpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuS2xhdml5by5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2xlYXJucSAmJiB3aW5kb3cuX2xlYXJucS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5LbGF2aXlvLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL2Eua2xhdml5by5jb20vbWVkaWEvanMvbGVhcm5tYXJrbGV0LmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBUcmFpdCBhbGlhc2VzLlxuICovXG5cbnZhciBhbGlhc2VzID0ge1xuICBpZDogJyRpZCcsXG4gIGVtYWlsOiAnJGVtYWlsJyxcbiAgZmlyc3ROYW1lOiAnJGZpcnN0X25hbWUnLFxuICBsYXN0TmFtZTogJyRsYXN0X25hbWUnLFxuICBwaG9uZTogJyRwaG9uZV9udW1iZXInLFxuICB0aXRsZTogJyR0aXRsZSdcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5LbGF2aXlvLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cyhhbGlhc2VzKTtcbiAgaWYgKCF0cmFpdHMuJGlkICYmICF0cmFpdHMuJGVtYWlsKSByZXR1cm47XG4gIHB1c2goJ2lkZW50aWZ5JywgdHJhaXRzKTtcbn07XG5cbi8qKlxuICogR3JvdXAuXG4gKlxuICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAqL1xuXG5LbGF2aXlvLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uKGdyb3VwKXtcbiAgdmFyIHByb3BzID0gZ3JvdXAucHJvcGVydGllcygpO1xuICBpZiAoIXByb3BzLm5hbWUpIHJldHVybjtcbiAgcHVzaCgnaWRlbnRpZnknLCB7ICRvcmdhbml6YXRpb246IHByb3BzLm5hbWUgfSk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuS2xhdml5by5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHB1c2goJ3RyYWNrJywgdHJhY2suZXZlbnQoKSwgdHJhY2sucHJvcGVydGllcyh7XG4gICAgcmV2ZW51ZTogJyR2YWx1ZSdcbiAgfSkpO1xufTtcbiIsIlxudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBCYXRjaCA9IHJlcXVpcmUoJ2JhdGNoJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfa21xJyk7XG52YXIgVHJhY2sgPSByZXF1aXJlKCdmYWNhZGUnKS5UcmFjaztcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEtJU1NtZXRyaWNzKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBLSVNTbWV0cmljc2AgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEtJU1NtZXRyaWNzID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdLSVNTbWV0cmljcycpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfa21xJylcbiAgLmdsb2JhbCgnS00nKVxuICAuZ2xvYmFsKCdfa21pbCcpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKVxuICAub3B0aW9uKCd0cmFja05hbWVkUGFnZXMnLCB0cnVlKVxuICAub3B0aW9uKCd0cmFja0NhdGVnb3JpemVkUGFnZXMnLCB0cnVlKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHA6Ly9zdXBwb3J0Lmtpc3NtZXRyaWNzLmNvbS9hcGlzL2phdmFzY3JpcHRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbktJU1NtZXRyaWNzLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fa21xID0gW107XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5LSVNTbWV0cmljcy5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLm9iamVjdCh3aW5kb3cuS00pO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuS0lTU21ldHJpY3MucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIHZhciBrZXkgPSB0aGlzLm9wdGlvbnMuYXBpS2V5O1xuICB2YXIgdXNlbGVzcyA9ICcvL2kua2lzc21ldHJpY3MuY29tL2kuanMnO1xuICB2YXIgbGlicmFyeSA9ICcvL2RvdWcxaXphZXJ3dDMuY2xvdWRmcm9udC5uZXQvJyArIGtleSArICcuMS5qcyc7XG5cbiAgbmV3IEJhdGNoKClcbiAgICAucHVzaChmdW5jdGlvbihkb25lKXsgbG9hZCh1c2VsZXNzLCBkb25lKTsgfSkgLy8gOilcbiAgICAucHVzaChmdW5jdGlvbihkb25lKXsgbG9hZChsaWJyYXJ5LCBkb25lKTsgfSlcbiAgICAuZW5kKGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY2F0ZWdvcnkgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKVxuICovXG5cbktJU1NtZXRyaWNzLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciBjYXRlZ29yeSA9IHBhZ2UuY2F0ZWdvcnkoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLmZ1bGxOYW1lKCk7XG4gIHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gIC8vIG5hbWVkIHBhZ2VzXG4gIGlmIChuYW1lICYmIG9wdHMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKG5hbWUpKTtcbiAgfVxuXG4gIC8vIGNhdGVnb3JpemVkIHBhZ2VzXG4gIGlmIChjYXRlZ29yeSAmJiBvcHRzLnRyYWNrQ2F0ZWdvcml6ZWRQYWdlcykge1xuICAgIHRoaXMudHJhY2socGFnZS50cmFjayhjYXRlZ29yeSkpO1xuICB9XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuS0lTU21ldHJpY3MucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKCk7XG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuICBpZiAoaWQpIHB1c2goJ2lkZW50aWZ5JywgaWQpO1xuICBpZiAodHJhaXRzKSBwdXNoKCdzZXQnLCB0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbktJU1NtZXRyaWNzLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcyh7IHJldmVudWU6ICdCaWxsaW5nIEFtb3VudCcgfSk7XG4gIHB1c2goJ3JlY29yZCcsIHRyYWNrLmV2ZW50KCksIHByb3BzKTtcbn07XG5cbi8qKlxuICogQWxpYXMuXG4gKlxuICogQHBhcmFtIHtBbGlhc30gdG9cbiAqL1xuXG5LSVNTbWV0cmljcy5wcm90b3R5cGUuYWxpYXMgPSBmdW5jdGlvbihhbGlhcyl7XG4gIHB1c2goJ2FsaWFzJywgYWxpYXMudG8oKSwgYWxpYXMuZnJvbSgpKTtcbn07XG5cbi8qKlxuICogVmlld2VkIHByb2R1Y3QuXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbktJU1NtZXRyaWNzLnByb3RvdHlwZS52aWV3ZWRQcm9kdWN0ID0gZnVuY3Rpb24odHJhY2spe1xuICBwdXNoKCdyZWNvcmQnLCAnUHJvZHVjdCBWaWV3ZWQnLCB0b1Byb2R1Y3QodHJhY2spKTtcbn07XG5cbi8qKlxuICogUHJvZHVjdCBhZGRlZC5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuS0lTU21ldHJpY3MucHJvdG90eXBlLmFkZGVkUHJvZHVjdCA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgcHVzaCgncmVjb3JkJywgJ1Byb2R1Y3QgQWRkZWQnLCB0b1Byb2R1Y3QodHJhY2spKTtcbn07XG5cbi8qKlxuICogQ29tcGxldGVkIG9yZGVyLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5LSVNTbWV0cmljcy5wcm90b3R5cGUuY29tcGxldGVkT3JkZXIgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBvcmRlcklkID0gdHJhY2sub3JkZXJJZCgpO1xuICB2YXIgcHJvZHVjdHMgPSB0cmFjay5wcm9kdWN0cygpO1xuXG4gIC8vIHRyYW5zYWN0aW9uXG4gIHB1c2goJ3JlY29yZCcsICdQdXJjaGFzZWQnLCB7XG4gICAgJ09yZGVyIElEJzogdHJhY2sub3JkZXJJZCgpLFxuICAgICdPcmRlciBUb3RhbCc6IHRyYWNrLnRvdGFsKClcbiAgfSk7XG5cbiAgLy8gaXRlbXNcbiAgd2luZG93Ll9rbXEucHVzaChmdW5jdGlvbigpe1xuICAgIHZhciBrbSA9IHdpbmRvdy5LTTtcbiAgICBlYWNoKHByb2R1Y3RzLCBmdW5jdGlvbihwcm9kdWN0LCBpKXtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjayh7IHByb3BlcnRpZXM6IHByb2R1Y3QgfSk7XG4gICAgICB2YXIgaXRlbSA9IHRvUHJvZHVjdCh0cmFjayk7XG4gICAgICBpdGVtWydPcmRlciBJRCddID0gb3JkZXJJZDtcbiAgICAgIGl0ZW0uX3QgPSBrbS50cygpICsgaTtcbiAgICAgIGl0ZW0uX2QgPSAxO1xuICAgICAga20uc2V0KGl0ZW0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2V0IGEgcHJvZHVjdCBmcm9tIHRoZSBnaXZlbiBgdHJhY2tgLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1Byb2R1Y3QodHJhY2spe1xuICByZXR1cm4ge1xuICAgIFF1YW50aXR5OiB0cmFjay5xdWFudGl0eSgpLFxuICAgIFByaWNlOiB0cmFjay5wcmljZSgpLFxuICAgIE5hbWU6IHRyYWNrLm5hbWUoKSxcbiAgICBTS1U6IHRyYWNrLnNrdSgpXG4gIH07XG59XG4iLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEtlbnNob28pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYEtlbnNob29gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBLZW5zaG9vID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdLZW5zaG9vJylcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgna190cmFja2V2ZW50JylcbiAgLm9wdGlvbignY2lkJywgJycpXG4gIC5vcHRpb24oJ3N1YmRvbWFpbicsICcnKVxuICAub3B0aW9uKCd0cmFja05hbWVkUGFnZXMnLCB0cnVlKVxuICAub3B0aW9uKCd0cmFja0NhdGVnb3JpemVkUGFnZXMnLCB0cnVlKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIFNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qdXN0aW5ib3lsZS83ODc1ODMyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5LZW5zaG9vLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/IChjaGVja3MgaWYgdGhlIHRyYWNraW5nIGZ1bmN0aW9uIGlzIHNldClcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbktlbnNob28ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpcy5mbih3aW5kb3cua190cmFja2V2ZW50KTtcbn07XG5cbi8qKlxuICogTG9hZCBLZW5zaG9vIHNjcmlwdC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbktlbnNob28ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIHZhciB1cmwgPSAnLy8nICsgdGhpcy5vcHRpb25zLnN1YmRvbWFpbiArICcueGc0a2VuLmNvbS9tZWRpYS9nZXRweC5waHA/Y2lkPScgKyB0aGlzLm9wdGlvbnMuY2lkO1xuICBsb2FkKHVybCwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBDb21wbGV0ZWQgb3JkZXIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2pvcmdlZ29ya2EvdGhlX3RyYWNrZXIvYmxvYi9tYXN0ZXIvbGliL3RoZV90cmFja2VyL3RyYWNrZXJzL2tlbnNob28ucmJcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuS2Vuc2hvby5wcm90b3R5cGUuY29tcGxldGVkT3JkZXIgPSBmdW5jdGlvbih0cmFjayl7XG4gIHRoaXMuX3RyYWNrKHRyYWNrLCB7IHZhbDogdHJhY2sudG90YWwoKSB9KTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5LZW5zaG9vLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciBjYXRlZ29yeSA9IHBhZ2UuY2F0ZWdvcnkoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLm5hbWUoKTtcbiAgdmFyIGZ1bGxOYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuICB2YXIgaXNOYW1lZCA9IChuYW1lICYmIHRoaXMub3B0aW9ucy50cmFja05hbWVkUGFnZXMpO1xuICB2YXIgaXNDYXRlZ29yaXplZCA9IChjYXRlZ29yeSAmJiB0aGlzLm9wdGlvbnMudHJhY2tDYXRlZ29yaXplZFBhZ2VzKTtcbiAgdmFyIHRyYWNrO1xuXG4gIGlmIChuYW1lICYmICEgdGhpcy5vcHRpb25zLnRyYWNrTmFtZWRQYWdlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjYXRlZ29yeSAmJiAhIHRoaXMub3B0aW9ucy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNOYW1lZCAmJiBpc0NhdGVnb3JpemVkKSB7XG4gICAgdHJhY2sgPSBwYWdlLnRyYWNrKGZ1bGxOYW1lKTtcbiAgfSBlbHNlIGlmIChpc05hbWVkKSB7XG4gICAgdHJhY2sgPSBwYWdlLnRyYWNrKG5hbWUpO1xuICB9IGVsc2UgaWYgKGlzQ2F0ZWdvcml6ZWQpIHtcbiAgICB0cmFjayA9IHBhZ2UudHJhY2soY2F0ZWdvcnkpO1xuICB9IGVsc2Uge1xuICAgIHRyYWNrID0gcGFnZS50cmFjaygpO1xuICB9XG5cbiAgdGhpcy5fdHJhY2sodHJhY2spO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vam9yZ2Vnb3JrYS90aGVfdHJhY2tlci9ibG9iL21hc3Rlci9saWIvdGhlX3RyYWNrZXIvdHJhY2tlcnMva2Vuc2hvby5yYlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IGV2ZW50XG4gKi9cblxuS2Vuc2hvby5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHRoaXMuX3RyYWNrKHRyYWNrKTtcbn07XG5cbi8qKlxuICogVHJhY2sgYSBLZW5zaG9vIGV2ZW50LlxuICpcbiAqIFByaXZhdGUgbWV0aG9kIGZvciBzZW5kaW5nIGFuIGV2ZW50LiBXZSB1c2UgaXQgYmVjYXVzZSBgY29tcGxldGVkT3JkZXJgXG4gKiBjYW4ndCBjYWxsIHRyYWNrIGRpcmVjdGx5ICh3b3VsZCByZXN1bHQgaW4gYW4gaW5maW5pdGUgbG9vcCkuXG4gKlxuICogQHBhcmFtIHt0cmFja30gZXZlbnRcbiAqIEBwYXJhbSB7b3B0aW9uc30gb2JqZWN0XG4gKi9cblxuS2Vuc2hvby5wcm90b3R5cGUuX3RyYWNrID0gZnVuY3Rpb24odHJhY2ssIG9wdGlvbnMpe1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7IHZhbDogdHJhY2sucmV2ZW51ZSgpIH07XG5cbiAgdmFyIHBhcmFtcyA9IFtcbiAgICAnaWQ9JyArIHRoaXMub3B0aW9ucy5jaWQsXG4gICAgJ3R5cGU9JyArIHRyYWNrLmV2ZW50KCksXG4gICAgJ3ZhbD0nICsgKG9wdGlvbnMudmFsIHx8ICcwLjAnKSxcbiAgICAnb3JkZXJJZD0nICsgKHRyYWNrLm9yZGVySWQoKSB8fCAnJyksXG4gICAgJ3Byb21vQ29kZT0nICsgKHRyYWNrLmNvdXBvbigpIHx8ICcnKSxcbiAgICAndmFsdWVDdXJyZW5jeT0nICsgKHRyYWNrLmN1cnJlbmN5KCkgfHwgJycpLFxuXG4gICAgLy8gTGl2ZSB0cmFja2luZyBmaWVsZHMuIElnbm9yZWQgZm9yIG5vdyAodW50aWwgd2UgZ2V0IGRvY3VtZW50YXRpb24pLlxuICAgICdHQ0lEPScsXG4gICAgJ2t3PScsXG4gICAgJ3Byb2R1Y3Q9J1xuICBdO1xuXG4gIHdpbmRvdy5rX3RyYWNrZXZlbnQocGFyYW1zLCB0aGlzLm9wdGlvbnMuc3ViZG9tYWluKTtcbn07XG4iLCJcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEtlZW4pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYEtlZW4gSU9gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBLZWVuID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdLZWVuIElPJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnS2VlbicpXG4gIC5vcHRpb24oJ3Byb2plY3RJZCcsICcnKVxuICAub3B0aW9uKCdyZWFkS2V5JywgJycpXG4gIC5vcHRpb24oJ3dyaXRlS2V5JywgJycpXG4gIC5vcHRpb24oJ3RyYWNrTmFtZWRQYWdlcycsIHRydWUpXG4gIC5vcHRpb24oJ3RyYWNrQWxsUGFnZXMnLCBmYWxzZSlcbiAgLm9wdGlvbigndHJhY2tDYXRlZ29yaXplZFBhZ2VzJywgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL2tlZW4uaW8vZG9jcy9cbiAqL1xuXG5LZWVuLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKXtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHdpbmRvdy5LZWVuID0gd2luZG93LktlZW58fHsgY29uZmlndXJlOmZ1bmN0aW9uKGUpe3RoaXMuX2NmPWU7fSwgYWRkRXZlbnQ6ZnVuY3Rpb24oZSx0LG4saSl7dGhpcy5fZXE9dGhpcy5fZXF8fFtdLHRoaXMuX2VxLnB1c2goW2UsdCxuLGldKTt9LCBzZXRHbG9iYWxQcm9wZXJ0aWVzOmZ1bmN0aW9uKGUpe3RoaXMuX2dwPWU7fSwgb25DaGFydHNSZWFkeTpmdW5jdGlvbihlKXt0aGlzLl9vY3JxPXRoaXMuX29jcnF8fFtdLHRoaXMuX29jcnEucHVzaChlKTt9fTtcbiAgd2luZG93LktlZW4uY29uZmlndXJlKHtcbiAgICBwcm9qZWN0SWQ6IG9wdGlvbnMucHJvamVjdElkLFxuICAgIHdyaXRlS2V5OiBvcHRpb25zLndyaXRlS2V5LFxuICAgIHJlYWRLZXk6IG9wdGlvbnMucmVhZEtleVxuICB9KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbktlZW4ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93LktlZW4gJiYgd2luZG93LktlZW4uQmFzZTY0KTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgS2VlbiBJTyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuS2Vlbi5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9kYzhuYTJoeHJqMjlpLmNsb3VkZnJvbnQubmV0L2NvZGUva2Vlbi0yLjEuMC1taW4uanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuS2Vlbi5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgY2F0ZWdvcnkgPSBwYWdlLmNhdGVnb3J5KCk7XG4gIHZhciBwcm9wcyA9IHBhZ2UucHJvcGVydGllcygpO1xuICB2YXIgbmFtZSA9IHBhZ2UuZnVsbE5hbWUoKTtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gYWxsIHBhZ2VzXG4gIGlmIChvcHRzLnRyYWNrQWxsUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soKSk7XG4gIH1cblxuICAvLyBuYW1lZCBwYWdlc1xuICBpZiAobmFtZSAmJiBvcHRzLnRyYWNrTmFtZWRQYWdlcykge1xuICAgIHRoaXMudHJhY2socGFnZS50cmFjayhuYW1lKSk7XG4gIH1cblxuICAvLyBjYXRlZ29yaXplZCBwYWdlc1xuICBpZiAoY2F0ZWdvcnkgJiYgb3B0cy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soY2F0ZWdvcnkpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBUT0RPOiBtaWdyYXRlIGZyb20gb2xkIGB1c2VySWRgIHRvIHNpbXBsZXIgYGlkYFxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuS2Vlbi5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG4gIHZhciB1c2VyID0ge307XG4gIGlmIChpZCkgdXNlci51c2VySWQgPSBpZDtcbiAgaWYgKHRyYWl0cykgdXNlci50cmFpdHMgPSB0cmFpdHM7XG4gIHdpbmRvdy5LZWVuLnNldEdsb2JhbFByb3BlcnRpZXMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4geyB1c2VyOiB1c2VyIH07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbktlZW4ucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB3aW5kb3cuS2Vlbi5hZGRFdmVudCh0cmFjay5ldmVudCgpLCB0cmFjay5wcm9wZXJ0aWVzKCkpO1xufTtcbiIsIlxudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBjb252ZXJ0RGF0ZXMgPSByZXF1aXJlKCdjb252ZXJ0LWRhdGVzJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGlzRW1haWwgPSByZXF1aXJlKCdpcy1lbWFpbCcpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnZGVmYXVsdHMnKTtcbnZhciBlbXB0eSA9IHJlcXVpcmUoJ2lzLWVtcHR5Jyk7XG5cbi8qKlxuICogR3JvdXAgcmVmLlxuICovXG5cbnZhciBncm91cDtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihJbnRlcmNvbSk7XG4gIGdyb3VwID0gYW5hbHl0aWNzLmdyb3VwKCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgSW50ZXJjb21gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBJbnRlcmNvbSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignSW50ZXJjb20nKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnSW50ZXJjb20nKVxuICAub3B0aW9uKCdhY3RpdmF0b3InLCAnI0ludGVyY29tRGVmYXVsdFdpZGdldCcpXG4gIC5vcHRpb24oJ2FwcElkJywgJycpXG4gIC5vcHRpb24oJ2luYm94JywgZmFsc2UpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2RvY3MuaW50ZXJjb20uaW8vXG4gKiBodHRwOi8vZG9jcy5pbnRlcmNvbS5pby8jSW50ZXJjb21KU1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuSW50ZXJjb20ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkludGVyY29tLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMuZm4od2luZG93LkludGVyY29tKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgSW50ZXJjb20gbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkludGVyY29tLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCdodHRwczovL3N0YXRpYy5pbnRlcmNvbWNkbi5jb20vaW50ZXJjb20udjEuanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuSW50ZXJjb20ucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93LkludGVyY29tKCd1cGRhdGUnKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogaHR0cDovL2RvY3MuaW50ZXJjb20uaW8vI0ludGVyY29tSlNcbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkludGVyY29tLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cyh7IHVzZXJJZDogJ3VzZXJfaWQnIH0pO1xuICB2YXIgYWN0aXZhdG9yID0gdGhpcy5vcHRpb25zLmFjdGl2YXRvcjtcbiAgdmFyIG9wdHMgPSBpZGVudGlmeS5vcHRpb25zKHRoaXMubmFtZSk7XG4gIHZhciBjb21wYW55Q3JlYXRlZCA9IGlkZW50aWZ5LmNvbXBhbnlDcmVhdGVkKCk7XG4gIHZhciBjcmVhdGVkID0gaWRlbnRpZnkuY3JlYXRlZCgpO1xuICB2YXIgZW1haWwgPSBpZGVudGlmeS5lbWFpbCgpO1xuICB2YXIgbmFtZSA9IGlkZW50aWZ5Lm5hbWUoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG5cbiAgaWYgKCFpZCAmJiAhdHJhaXRzLmVtYWlsKSByZXR1cm47IC8vIG9uZSBpcyByZXF1aXJlZFxuXG4gIHRyYWl0cy5hcHBfaWQgPSB0aGlzLm9wdGlvbnMuYXBwSWQ7XG5cbiAgLy8gTWFrZSBzdXJlIGNvbXBhbnkgdHJhaXRzIGFyZSBjYXJyaWVkIG92ZXIgKGZpeGVzICMxMjApLlxuICBpZiAoIWVtcHR5KGdyb3VwLnRyYWl0cygpKSkge1xuICAgIHRyYWl0cy5jb21wYW55ID0gdHJhaXRzLmNvbXBhbnkgfHwge307XG4gICAgZGVmYXVsdHModHJhaXRzLmNvbXBhbnksIGdyb3VwLnRyYWl0cygpKTtcbiAgfVxuXG4gIC8vIG5hbWVcbiAgaWYgKG5hbWUpIHRyYWl0cy5uYW1lID0gbmFtZTtcblxuICAvLyBoYW5kbGUgZGF0ZXNcbiAgaWYgKGNvbXBhbnlDcmVhdGVkKSB0cmFpdHMuY29tcGFueS5jcmVhdGVkID0gY29tcGFueUNyZWF0ZWQ7XG4gIGlmIChjcmVhdGVkKSB0cmFpdHMuY3JlYXRlZCA9IGNyZWF0ZWQ7XG5cbiAgLy8gY29udmVydCBkYXRlc1xuICB0cmFpdHMgPSBjb252ZXJ0RGF0ZXModHJhaXRzLCBmb3JtYXREYXRlKTtcbiAgdHJhaXRzID0gYWxpYXModHJhaXRzLCB7IGNyZWF0ZWQ6ICdjcmVhdGVkX2F0JyB9KTtcblxuICAvLyBjb21wYW55XG4gIGlmICh0cmFpdHMuY29tcGFueSkge1xuICAgIHRyYWl0cy5jb21wYW55ID0gYWxpYXModHJhaXRzLmNvbXBhbnksIHsgY3JlYXRlZDogJ2NyZWF0ZWRfYXQnIH0pO1xuICB9XG5cbiAgLy8gaGFuZGxlIG9wdGlvbnNcbiAgaWYgKG9wdHMuaW5jcmVtZW50cykgdHJhaXRzLmluY3JlbWVudHMgPSBvcHRzLmluY3JlbWVudHM7XG4gIGlmIChvcHRzLnVzZXJIYXNoKSB0cmFpdHMudXNlcl9oYXNoID0gb3B0cy51c2VySGFzaDtcbiAgaWYgKG9wdHMudXNlcl9oYXNoKSB0cmFpdHMudXNlcl9oYXNoID0gb3B0cy51c2VyX2hhc2g7XG5cbiAgLy8gSW50ZXJjb20sIHdpbGwgZm9yY2UgdGhlIHdpZGdldCB0byBhcHBlYXJcbiAgLy8gaWYgdGhlIHNlbGVjdG9yIGlzICNJbnRlcmNvbURlZmF1bHRXaWRnZXRcbiAgLy8gc28gbm8gbmVlZCB0byBjaGVjayBpbmJveCwganVzdCBuZWVkIHRvIGNoZWNrXG4gIC8vIHRoYXQgdGhlIHNlbGVjdG9yIGlzbid0ICNJbnRlcmNvbURlZmF1bHRXaWRnZXQuXG4gIGlmICgnI0ludGVyY29tRGVmYXVsdFdpZGdldCcgIT0gYWN0aXZhdG9yKSB7XG4gICAgdHJhaXRzLndpZGdldCA9IHsgYWN0aXZhdG9yOiBhY3RpdmF0b3IgfTtcbiAgfVxuXG4gIHZhciBtZXRob2QgPSB0aGlzLl9pZCAhPT0gaWQgPyAnYm9vdCc6ICd1cGRhdGUnO1xuICB0aGlzLl9pZCA9IGlkOyAvLyBjYWNoZSBmb3IgbmV4dCB0aW1lXG5cbiAgd2luZG93LkludGVyY29tKG1ldGhvZCwgdHJhaXRzKTtcbn07XG5cbi8qKlxuICogR3JvdXAuXG4gKlxuICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAqL1xuXG5JbnRlcmNvbS5wcm90b3R5cGUuZ3JvdXAgPSBmdW5jdGlvbihncm91cCl7XG4gIHZhciBwcm9wcyA9IGdyb3VwLnByb3BlcnRpZXMoKTtcbiAgdmFyIGlkID0gZ3JvdXAuZ3JvdXBJZCgpO1xuICBpZiAoaWQpIHByb3BzLmlkID0gaWQ7XG4gIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyBjb21wYW55OiBwcm9wcyB9KTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5JbnRlcmNvbS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHdpbmRvdy5JbnRlcmNvbSgndHJhY2tFdmVudCcsIHRyYWNrLmV2ZW50KCksIHRyYWNrLnByb3BlcnRpZXMoKSk7XG59O1xuXG4vKipcbiAqIEZvcm1hdCBhIGRhdGUgdG8gSW50ZXJjb20ncyBsaWtpbmcuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKXtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZSAvIDEwMDApO1xufVxuIiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGFsaWFzID0gcmVxdWlyZSgnYWxpYXMnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfX2luc3AnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihJbnNwZWN0bGV0KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBJbnNwZWN0bGV0YCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgSW5zcGVjdGxldCA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignSW5zcGVjdGxldCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfX2luc3AnKVxuICAuZ2xvYmFsKCdfX2luc3BfJylcbiAgLm9wdGlvbignd2lkJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cHM6Ly93d3cuaW5zcGVjdGxldC5jb20vZGFzaGJvYXJkL2VtYmVkY29kZS8xNDkyNDYxNzU5L2luaXRpYWxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkluc3BlY3RsZXQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgcHVzaCgnd2lkJywgdGhpcy5vcHRpb25zLndpZCk7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5JbnNwZWN0bGV0LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93Ll9faW5zcF87XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIEluc3BlY3RsZXQgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkluc3BlY3RsZXQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vd3d3Lmluc3BlY3RsZXQuY29tL2luc3BlY3RsZXQuanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHA6Ly93d3cuaW5zcGVjdGxldC5jb20vZG9jcy90YWdzXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5JbnNwZWN0bGV0LnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgcHVzaCgndGFnU2Vzc2lvbicsIHRyYWNrLmV2ZW50KCkpO1xufTtcbiIsIlxyXG52YXIgYWxpYXMgPSByZXF1aXJlKCdhbGlhcycpO1xyXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xyXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xyXG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XHJcblxyXG4vKipcclxuICogRXhwb3NlIHBsdWdpbi5cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xyXG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihJbXByb3ZlbHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV4cG9zZSBgSW1wcm92ZWx5YCBpbnRlZ3JhdGlvbi5cclxuICovXHJcblxyXG52YXIgSW1wcm92ZWx5ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdJbXByb3ZlbHknKVxyXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxyXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXHJcbiAgLmdsb2JhbCgnX2ltcHJvdmVseScpXHJcbiAgLmdsb2JhbCgnaW1wcm92ZWx5JylcclxuICAub3B0aW9uKCdkb21haW4nLCAnJylcclxuICAub3B0aW9uKCdwcm9qZWN0SWQnLCBudWxsKTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplLlxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmltcHJvdmVseS5jb20vZG9jcy9sYW5kaW5nLXBhZ2UtY29kZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxyXG4gKi9cclxuXHJcbkltcHJvdmVseS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xyXG4gIHdpbmRvdy5faW1wcm92ZWx5ID0gW107XHJcbiAgd2luZG93LmltcHJvdmVseSA9IHsgaW5pdDogZnVuY3Rpb24oZSwgdCl7IHdpbmRvdy5faW1wcm92ZWx5LnB1c2goW1wiaW5pdFwiLCBlLCB0XSk7IH0sIGdvYWw6IGZ1bmN0aW9uKGUpeyB3aW5kb3cuX2ltcHJvdmVseS5wdXNoKFtcImdvYWxcIiwgZV0pOyB9LCBsYWJlbDogZnVuY3Rpb24oZSl7IHdpbmRvdy5faW1wcm92ZWx5LnB1c2goW1wibGFiZWxcIiwgZV0pOyB9fTtcclxuXHJcbiAgdmFyIGRvbWFpbiA9IHRoaXMub3B0aW9ucy5kb21haW47XHJcbiAgdmFyIGlkID0gdGhpcy5vcHRpb25zLnByb2plY3RJZDtcclxuICB3aW5kb3cuaW1wcm92ZWx5LmluaXQoZG9tYWluLCBpZCk7XHJcbiAgdGhpcy5sb2FkKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZGVkP1xyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuXHJcbkltcHJvdmVseS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcclxuICByZXR1cm4gISEgKHdpbmRvdy5pbXByb3ZlbHkgJiYgd2luZG93LmltcHJvdmVseS5pZGVudGlmeSk7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCB0aGUgSW1wcm92ZWx5IGxpYnJhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5cclxuSW1wcm92ZWx5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gIHZhciBkb21haW4gPSB0aGlzLm9wdGlvbnMuZG9tYWluO1xyXG4gIGxvYWQoJy8vJyArIGRvbWFpbiArICcuaWxqbXAuY29tL2ltcHJvdmVseS5qcycsIGNhbGxiYWNrKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJZGVudGlmeS5cclxuICpcclxuICogaHR0cDovL3d3dy5pbXByb3ZlbHkuY29tL2RvY3MvbGFiZWxpbmctdmlzaXRvcnNcclxuICpcclxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcclxuICovXHJcblxyXG5JbXByb3ZlbHkucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xyXG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xyXG4gIGlmIChpZCkgd2luZG93LmltcHJvdmVseS5sYWJlbChpZCk7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhY2suXHJcbiAqXHJcbiAqIGh0dHA6Ly93d3cuaW1wcm92ZWx5LmNvbS9kb2NzL2NvbnZlcnNpb24tY29kZVxyXG4gKlxyXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xyXG4gKi9cclxuXHJcbkltcHJvdmVseS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XHJcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcyh7IHJldmVudWU6ICdhbW91bnQnIH0pO1xyXG4gIHByb3BzLnR5cGUgPSB0cmFjay5ldmVudCgpO1xyXG4gIHdpbmRvdy5pbXByb3ZlbHkuZ29hbChwcm9wcyk7XHJcbn07XHJcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29udmVydC1kYXRlcycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19oc3EnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihIdWJTcG90KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBIdWJTcG90YCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgSHViU3BvdCA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignSHViU3BvdCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfaHNxJylcbiAgLm9wdGlvbigncG9ydGFsSWQnLCBudWxsKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuSHViU3BvdC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX2hzcSA9IFtdO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuSHViU3BvdC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2hzcSAmJiB3aW5kb3cuX2hzcS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIEh1YlNwb3QgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbkh1YlNwb3QucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmbil7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHMtYW5hbHl0aWNzJykpIHJldHVybiBjYWxsYmFjay5hc3luYyhmbik7XG4gIHZhciBpZCA9IHRoaXMub3B0aW9ucy5wb3J0YWxJZDtcbiAgdmFyIGNhY2hlID0gTWF0aC5jZWlsKG5ldyBEYXRlKCkgLyAzMDAwMDApICogMzAwMDAwO1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vanMuaHMtYW5hbHl0aWNzLm5ldC9hbmFseXRpY3MvJyArIGNhY2hlICsgJy8nICsgaWQgKyAnLmpzJztcbiAgdmFyIHNjcmlwdCA9IGxvYWQodXJsLCBmbik7XG4gIHNjcmlwdC5pZCA9ICdocy1hbmFseXRpY3MnO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeSAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuSHViU3BvdC5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICBwdXNoKCdfdHJhY2tQYWdldmlldycpO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkh1YlNwb3QucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICBpZiAoIWlkZW50aWZ5LmVtYWlsKCkpIHJldHVybjtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cygpO1xuICB0cmFpdHMgPSBjb252ZXJ0RGF0ZXModHJhaXRzKTtcbiAgcHVzaCgnaWRlbnRpZnknLCB0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbkh1YlNwb3QucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHByb3BzID0gY29udmVydERhdGVzKHByb3BzKTtcbiAgcHVzaCgndHJhY2tFdmVudCcsIHRyYWNrLmV2ZW50KCksIHByb3BzKTtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbGwgdGhlIGRhdGVzIGluIHRoZSBIdWJTcG90IHByb3BlcnRpZXMgdG8gbWlsbGlzZWNvbmQgdGltZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllc1xuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlcyhwcm9wZXJ0aWVzKXtcbiAgcmV0dXJuIGNvbnZlcnQocHJvcGVydGllcywgZnVuY3Rpb24oZGF0ZSl7IHJldHVybiBkYXRlLmdldFRpbWUoKTsgfSk7XG59XG4iLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEhpdFRhaWwpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYEhpdFRhaWxgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBIaXRUYWlsID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdIaXRUYWlsJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ2h0aycpXG4gIC5vcHRpb24oJ3NpdGVJZCcsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuSGl0VGFpbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuSGl0VGFpbC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLmZuKHdpbmRvdy5odGspO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBIaXRUYWlsIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5IaXRUYWlsLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgaWQgPSB0aGlzLm9wdGlvbnMuc2l0ZUlkO1xuICBsb2FkKCcvLycgKyBpZCArICcuaGl0dGFpbC5jb20vbWx0LmpzJywgY2FsbGJhY2spO1xufTsiLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oSGVsbG9iYXIpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYGhlbGxvYmFyLmNvbWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEhlbGxvYmFyID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdIZWxsbyBCYXInKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX2hicScpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9zY3JpcHRzLmhlbGxvYmFyLmNvbS9iYjkwMDY2NWEzMDkwYTc5ZWUxZGI5OGMzYWYyMWVhMTc0YmJjMDlmLmpzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5IZWxsb2Jhci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX2hicSA9IHdpbmRvdy5faGJxIHx8IFtdO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkhlbGxvYmFyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgdXJsID0gJy8vczMuYW1hem9uYXdzLmNvbS9zY3JpcHRzLmhlbGxvYmFyLmNvbS8nICsgdGhpcy5vcHRpb25zLmFwaUtleSArICcuanMnO1xuICBsb2FkKHVybCwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5IZWxsb2Jhci5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2hicSAmJiB3aW5kb3cuX2hicS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuIiwiXG52YXIgYWxpYXMgPSByZXF1aXJlKCdhbGlhcycpO1xudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oSGVhcCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgSGVhcGAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEhlYXAgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0hlYXAnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnaGVhcCcpXG4gIC5nbG9iYWwoJ19oZWFwaWQnKVxuICAub3B0aW9uKCdhcGlLZXknLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL2hlYXBhbmFseXRpY3MuY29tL2RvY3MjaW5zdGFsbFdlYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuSGVhcC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuaGVhcD13aW5kb3cuaGVhcHx8W107d2luZG93LmhlYXAubG9hZD1mdW5jdGlvbihhKXt3aW5kb3cuX2hlYXBpZD1hO3ZhciBkPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3dpbmRvdy5oZWFwLnB1c2goW2FdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpKTt9O30sZT1bXCJpZGVudGlmeVwiLFwidHJhY2tcIl07Zm9yICh2YXIgZj0wO2Y8ZS5sZW5ndGg7ZisrKXdpbmRvdy5oZWFwW2VbZl1dPWQoZVtmXSk7fTtcbiAgd2luZG93LmhlYXAubG9hZCh0aGlzLm9wdGlvbnMuYXBpS2V5KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkhlYXAucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAod2luZG93LmhlYXAgJiYgd2luZG93LmhlYXAuYXBwaWQpO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBIZWFwIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5IZWFwLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL2QzNmx2dWNnOWt6b3VzLmNsb3VkZnJvbnQubmV0JywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBodHRwczovL2hlYXBhbmFseXRpY3MuY29tL2RvY3MjaWRlbnRpZnlcbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkhlYXAucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKCk7XG4gIHZhciB1c2VybmFtZSA9IGlkZW50aWZ5LnVzZXJuYW1lKCk7XG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuICB2YXIgaGFuZGxlID0gdXNlcm5hbWUgfHwgaWQ7XG4gIGlmIChoYW5kbGUpIHRyYWl0cy5oYW5kbGUgPSBoYW5kbGU7XG4gIGRlbGV0ZSB0cmFpdHMudXNlcm5hbWU7XG4gIHdpbmRvdy5oZWFwLmlkZW50aWZ5KHRyYWl0cyk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHBzOi8vaGVhcGFuYWx5dGljcy5jb20vZG9jcyN0cmFja1xuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuSGVhcC5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHdpbmRvdy5oZWFwLnRyYWNrKHRyYWNrLmV2ZW50KCksIHRyYWNrLnByb3BlcnRpZXMoKSk7XG59O1xuIiwiXG52YXIgSWRlbnRpZnkgPSByZXF1aXJlKCdmYWNhZGUnKS5JZGVudGlmeTtcbnZhciBUcmFjayA9IHJlcXVpcmUoJ2ZhY2FkZScpLlRyYWNrO1xudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgb25Cb2R5ID0gcmVxdWlyZSgnb24tYm9keScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG5cbi8qKlxuICogVXNlciByZWZlcmVuY2UuXG4gKi9cblxudmFyIHVzZXI7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oR29TcXVhcmVkKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7IC8vIHN0b3JlIHJlZmVyZW5jZSBmb3IgbGF0ZXJcbn07XG5cbi8qKlxuICogRXhwb3NlIGBHb1NxdWFyZWRgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBHb1NxdWFyZWQgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0dvU3F1YXJlZCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfZ3MnKVxuICAub3B0aW9uKCdzaXRlVG9rZW4nLCAnJylcbiAgLm9wdGlvbignYW5vbnltaXplSVAnLCBmYWxzZSlcbiAgLm9wdGlvbignY29va2llRG9tYWluJywgbnVsbClcbiAgLm9wdGlvbigndXNlQ29va2llcycsIHRydWUpXG4gIC5vcHRpb24oJ3RyYWNrSGFzaCcsIGZhbHNlKVxuICAub3B0aW9uKCd0cmFja0xvY2FsJywgZmFsc2UpXG4gIC5vcHRpb24oJ3RyYWNrUGFyYW1zJywgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL2RldmVsb3Blci90cmFja2VyXG4gKiBPcHRpb25zOiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL2RldmVsb3Blci90cmFja2VyL2NvbmZpZ3VyYXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkdvU3F1YXJlZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICBwdXNoKG9wdGlvbnMuc2l0ZVRva2VuKTtcblxuICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICBpZiAoJ3NpdGVUb2tlbicgPT0gbmFtZSkgcmV0dXJuO1xuICAgIGlmIChudWxsID09IHZhbHVlKSByZXR1cm47XG4gICAgcHVzaCgnc2V0JywgbmFtZSwgdmFsdWUpO1xuICB9KTtcblxuICBzZWxmLmlkZW50aWZ5KG5ldyBJZGVudGlmeSh7XG4gICAgdHJhaXRzOiB1c2VyLnRyYWl0cygpLFxuICAgIHVzZXJJZDogdXNlci5pZCgpXG4gIH0pKTtcblxuICBzZWxmLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkPyAoY2hlY2tzIGlmIHRoZSB0cmFja2VyIHZlcnNpb24gaXMgc2V0KVxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuR29TcXVhcmVkLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgKHdpbmRvdy5fZ3MgJiYgd2luZG93Ll9ncy52KTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgR29TcXVhcmVkIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5Hb1NxdWFyZWQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vZDFsNnAyc2M5NjQ1aGMuY2xvdWRmcm9udC5uZXQvdHJhY2tlci5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL2RldmVsb3Blci90cmFja2VyL3BhZ2V2aWV3c1xuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkdvU3F1YXJlZC5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLmZ1bGxOYW1lKCk7XG4gIHB1c2goJ3RyYWNrJywgcHJvcHMucGF0aCwgbmFtZSB8fCBwcm9wcy50aXRsZSlcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogaHR0cHM6Ly93d3cuZ29zcXVhcmVkLmNvbS9kZXZlbG9wZXIvdHJhY2tlci90YWdnaW5nXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5Hb1NxdWFyZWQucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKHsgdXNlcklkOiAndXNlcklEJyB9KTtcbiAgdmFyIHVzZXJuYW1lID0gaWRlbnRpZnkudXNlcm5hbWUoKTtcbiAgdmFyIGVtYWlsID0gaWRlbnRpZnkuZW1haWwoKTtcbiAgdmFyIGlkID0gaWRlbnRpZnkudXNlcklkKCk7XG4gIGlmIChpZCkgcHVzaCgnc2V0JywgJ3Zpc2l0b3JJRCcsIGlkKTtcbiAgdmFyIG5hbWUgPSAgZW1haWwgfHwgdXNlcm5hbWUgfHwgaWQ7XG4gIGlmIChuYW1lKSBwdXNoKCdzZXQnLCAndmlzaXRvck5hbWUnLCBuYW1lKTtcbiAgcHVzaCgnc2V0JywgJ3Zpc2l0b3InLCB0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBodHRwczovL3d3dy5nb3NxdWFyZWQuY29tL2RldmVsb3Blci90cmFja2VyL2V2ZW50c1xuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuR29TcXVhcmVkLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgcHVzaCgnZXZlbnQnLCB0cmFjay5ldmVudCgpLCB0cmFjay5wcm9wZXJ0aWVzKCkpO1xufTtcblxuLyoqXG4gKiBDaGVja2VkIG91dC5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuR29TcXVhcmVkLnByb3RvdHlwZS5jb21wbGV0ZWRPcmRlciA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb2R1Y3RzID0gdHJhY2sucHJvZHVjdHMoKTtcbiAgdmFyIGl0ZW1zID0gW107XG5cbiAgZWFjaChwcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKHsgcHJvcGVydGllczogcHJvZHVjdCB9KTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIGNhdGVnb3J5OiB0cmFjay5jYXRlZ29yeSgpLFxuICAgICAgcXVhbnRpdHk6IHRyYWNrLnF1YW50aXR5KCksXG4gICAgICBwcmljZTogdHJhY2sucHJpY2UoKSxcbiAgICAgIG5hbWU6IHRyYWNrLm5hbWUoKSxcbiAgICB9KTtcbiAgfSlcblxuICBwdXNoKCd0cmFuc2FjdGlvbicsIHRyYWNrLm9yZGVySWQoKSwge1xuICAgIHJldmVudWU6IHRyYWNrLnRvdGFsKCksXG4gICAgdHJhY2s6IHRydWVcbiAgfSwgaXRlbXMpO1xufTtcblxuLyoqXG4gKiBQdXNoIHRvIGBfZ3MucWAuXG4gKlxuICogQHBhcmFtIHsuLi59IGFyZ3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHB1c2goKXtcbiAgdmFyIF9ncyA9IHdpbmRvdy5fZ3MgPSB3aW5kb3cuX2dzIHx8IGZ1bmN0aW9uKCl7XG4gICAgKF9ncy5xID0gX2dzLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKTtcbiAgfTtcbiAgX2dzLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG4iLCJcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ2RhdGFMYXllcicsIHsgd3JhcDogZmFsc2UgfSk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oR1RNKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBHVE1gXG4gKi9cblxudmFyIEdUTSA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignR29vZ2xlIFRhZyBNYW5hZ2VyJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ2RhdGFMYXllcicpXG4gIC5nbG9iYWwoJ2dvb2dsZV90YWdfbWFuYWdlcicpXG4gIC5vcHRpb24oJ2NvbnRhaW5lcklkJywgJycpXG4gIC5vcHRpb24oJ3RyYWNrTmFtZWRQYWdlcycsIHRydWUpXG4gIC5vcHRpb24oJ3RyYWNrQ2F0ZWdvcml6ZWRQYWdlcycsIHRydWUpXG5cbi8qKlxuICogSW5pdGlhbGl6ZVxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3RhZy1tYW5hZ2VyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5HVE0ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5HVE0ucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93LmRhdGFMYXllciAmJiBbXS5wdXNoICE9IHdpbmRvdy5kYXRhTGF5ZXIucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5HVE0ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBpZCA9IHRoaXMub3B0aW9ucy5jb250YWluZXJJZDtcbiAgcHVzaCh7ICdndG0uc3RhcnQnOiArbmV3IERhdGUsIGV2ZW50OiAnZ3RtLmpzJyB9KTtcbiAgbG9hZCgnLy93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScgKyBpZCArICcmbD1kYXRhTGF5ZXInLCBmbik7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkdUTS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgY2F0ZWdvcnkgPSBwYWdlLmNhdGVnb3J5KCk7XG4gIHZhciBwcm9wcyA9IHBhZ2UucHJvcGVydGllcygpO1xuICB2YXIgbmFtZSA9IHBhZ2UuZnVsbE5hbWUoKTtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciB0cmFjaztcblxuICAvLyBhbGxcbiAgaWYgKG9wdHMudHJhY2tBbGxQYWdlcykge1xuICAgIHRoaXMudHJhY2socGFnZS50cmFjaygpKTtcbiAgfVxuXG4gIC8vIGNhdGVnb3JpemVkXG4gIGlmIChjYXRlZ29yeSAmJiBvcHRzLnRyYWNrQ2F0ZWdvcml6ZWRQYWdlcykge1xuICAgIHRoaXMudHJhY2socGFnZS50cmFjayhjYXRlZ29yeSkpO1xuICB9XG5cbiAgLy8gbmFtZWRcbiAgaWYgKG5hbWUgJiYgb3B0cy50cmFja05hbWVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2sobmFtZSkpO1xuICB9XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3RhZy1tYW5hZ2VyL2Rldmd1aWRlI2V2ZW50c1xuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkdUTS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBwcm9wcyA9IHRyYWNrLnByb3BlcnRpZXMoKTtcbiAgcHJvcHMuZXZlbnQgPSB0cmFjay5ldmVudCgpO1xuICBwdXNoKHByb3BzKTtcbn07XG4iLCJcbnZhciBjYWxsYmFjayA9IHJlcXVpcmUoJ2NhbGxiYWNrJyk7XG52YXIgY2Fub25pY2FsID0gcmVxdWlyZSgnY2Fub25pY2FsJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJ2VhY2gnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnX2dhcScpO1xudmFyIFRyYWNrID0gcmVxdWlyZSgnZmFjYWRlJykuVHJhY2s7XG52YXIgdHlwZSA9IHJlcXVpcmUoJ3R5cGUnKTtcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciB1c2VyO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEdBKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgR0FgIGludGVncmF0aW9uLlxuICpcbiAqIGh0dHA6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYW5hbHl0aWNzL2Jpbi9hbnN3ZXIucHk/aGw9ZW4mYW5zd2VyPTI1NTg4NjdcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYWpzL21ldGhvZHMvZ2FKU0FwaUJhc2ljQ29uZmlndXJhdGlvbiNfZ2F0LkdBX1RyYWNrZXJfLl9zZXRTaXRlU3BlZWRTYW1wbGVSYXRlXG4gKi9cblxudmFyIEdBID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdHb29nbGUgQW5hbHl0aWNzJylcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnZ2EnKVxuICAuZ2xvYmFsKCdnYXBsdWdpbnMnKVxuICAuZ2xvYmFsKCdfZ2FxJylcbiAgLmdsb2JhbCgnR29vZ2xlQW5hbHl0aWNzT2JqZWN0JylcbiAgLm9wdGlvbignYW5vbnltaXplSXAnLCBmYWxzZSlcbiAgLm9wdGlvbignY2xhc3NpYycsIGZhbHNlKVxuICAub3B0aW9uKCdkb21haW4nLCAnbm9uZScpXG4gIC5vcHRpb24oJ2RvdWJsZUNsaWNrJywgZmFsc2UpXG4gIC5vcHRpb24oJ2VuaGFuY2VkTGlua0F0dHJpYnV0aW9uJywgZmFsc2UpXG4gIC5vcHRpb24oJ2lnbm9yZVJlZmVycmVyJywgbnVsbClcbiAgLm9wdGlvbignaW5jbHVkZVNlYXJjaCcsIGZhbHNlKVxuICAub3B0aW9uKCdzaXRlU3BlZWRTYW1wbGVSYXRlJywgbnVsbClcbiAgLm9wdGlvbigndHJhY2tpbmdJZCcsICcnKVxuICAub3B0aW9uKCd0cmFja05hbWVkUGFnZXMnLCB0cnVlKVxuICAub3B0aW9uKCd0cmFja0NhdGVnb3JpemVkUGFnZXMnLCB0cnVlKVxuICAub3B0aW9uKCdzZW5kVXNlcklkJywgZmFsc2UpO1xuXG4vKipcbiAqIFdoZW4gaW4gXCJjbGFzc2ljXCIgbW9kZSwgb24gYGNvbnN0cnVjdGAgc3dhcCBhbGwgb2YgdGhlIG1ldGhvZCB0byBwb2ludCB0b1xuICogdGhlaXIgY2xhc3NpYyBjb3VudGVycGFydHMuXG4gKi9cblxuR0Eub24oJ2NvbnN0cnVjdCcsIGZ1bmN0aW9uKGludGVncmF0aW9uKXtcbiAgaWYgKCFpbnRlZ3JhdGlvbi5vcHRpb25zLmNsYXNzaWMpIHJldHVybjtcbiAgaW50ZWdyYXRpb24uaW5pdGlhbGl6ZSA9IGludGVncmF0aW9uLmluaXRpYWxpemVDbGFzc2ljO1xuICBpbnRlZ3JhdGlvbi5sb2FkID0gaW50ZWdyYXRpb24ubG9hZENsYXNzaWM7XG4gIGludGVncmF0aW9uLmxvYWRlZCA9IGludGVncmF0aW9uLmxvYWRlZENsYXNzaWM7XG4gIGludGVncmF0aW9uLnBhZ2UgPSBpbnRlZ3JhdGlvbi5wYWdlQ2xhc3NpYztcbiAgaW50ZWdyYXRpb24udHJhY2sgPSBpbnRlZ3JhdGlvbi50cmFja0NsYXNzaWM7XG4gIGludGVncmF0aW9uLmNvbXBsZXRlZE9yZGVyID0gaW50ZWdyYXRpb24uY29tcGxldGVkT3JkZXJDbGFzc2ljO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvYWR2YW5jZWRcbiAqL1xuXG5HQS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gIC8vIHNldHVwIHRoZSB0cmFja2VyIGdsb2JhbHNcbiAgd2luZG93Lkdvb2dsZUFuYWx5dGljc09iamVjdCA9ICdnYSc7XG4gIHdpbmRvdy5nYSA9IHdpbmRvdy5nYSB8fCBmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5nYS5xID0gd2luZG93LmdhLnEgfHwgW107XG4gICAgd2luZG93LmdhLnEucHVzaChhcmd1bWVudHMpO1xuICB9O1xuICB3aW5kb3cuZ2EubCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHdpbmRvdy5nYSgnY3JlYXRlJywgb3B0cy50cmFja2luZ0lkLCB7XG4gICAgY29va2llRG9tYWluOiBvcHRzLmRvbWFpbiB8fCBHQS5wcm90b3R5cGUuZGVmYXVsdHMuZG9tYWluLCAvLyB0byBwcm90ZWN0IGFnYWluc3QgZW1wdHkgc3RyaW5nXG4gICAgc2l0ZVNwZWVkU2FtcGxlUmF0ZTogb3B0cy5zaXRlU3BlZWRTYW1wbGVSYXRlLFxuICAgIGFsbG93TGlua2VyOiB0cnVlXG4gIH0pO1xuXG4gIC8vIGRpc3BsYXkgYWR2ZXJ0aXNpbmdcbiAgaWYgKG9wdHMuZG91YmxlQ2xpY2spIHtcbiAgICB3aW5kb3cuZ2EoJ3JlcXVpcmUnLCAnZGlzcGxheWZlYXR1cmVzJyk7XG4gIH1cblxuICAvLyBzZW5kIGdsb2JhbCBpZFxuICBpZiAob3B0cy5zZW5kVXNlcklkICYmIHVzZXIuaWQoKSkge1xuICAgIHdpbmRvdy5nYSgnc2V0JywgJyZ1aWQnLCB1c2VyLmlkKCkpO1xuICB9XG5cbiAgLy8gYW5vbnltaXplIGFmdGVyIGluaXRpYWxpemluZywgb3RoZXJ3aXNlIGEgd2FybmluZyBpcyBzaG93blxuICAvLyBpbiBnb29nbGUgYW5hbHl0aWNzIGRlYnVnZ2VyXG4gIGlmIChvcHRzLmFub255bWl6ZUlwKSB3aW5kb3cuZ2EoJ3NldCcsICdhbm9ueW1pemVJcCcsIHRydWUpO1xuXG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5HQS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhIHdpbmRvdy5nYXBsdWdpbnM7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIEdvb2dsZSBBbmFseXRpY3MgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkdBLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL3BhZ2VzXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuR0EucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgdmFyIGNhdGVnb3J5ID0gcGFnZS5jYXRlZ29yeSgpO1xuICB2YXIgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLmZ1bGxOYW1lKCk7XG4gIHZhciB0cmFjaztcblxuICB0aGlzLl9jYXRlZ29yeSA9IGNhdGVnb3J5OyAvLyBzdG9yZSBmb3IgbGF0ZXJcblxuICB3aW5kb3cuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCB7XG4gICAgcGFnZTogcGF0aChwcm9wcywgdGhpcy5vcHRpb25zKSxcbiAgICB0aXRsZTogbmFtZSB8fCBwcm9wcy50aXRsZSxcbiAgICBsb2NhdGlvbjogcHJvcHMudXJsXG4gIH0pO1xuXG4gIC8vIGNhdGVnb3JpemVkIHBhZ2VzXG4gIGlmIChjYXRlZ29yeSAmJiB0aGlzLm9wdGlvbnMudHJhY2tDYXRlZ29yaXplZFBhZ2VzKSB7XG4gICAgdHJhY2sgPSBwYWdlLnRyYWNrKGNhdGVnb3J5KTtcbiAgICB0aGlzLnRyYWNrKHRyYWNrLCB7IG5vbmludGVyYWN0aW9uOiB0cnVlIH0pO1xuICB9XG5cbiAgLy8gbmFtZWQgcGFnZXNcbiAgaWYgKG5hbWUgJiYgdGhpcy5vcHRpb25zLnRyYWNrTmFtZWRQYWdlcykge1xuICAgIHRyYWNrID0gcGFnZS50cmFjayhuYW1lKTtcbiAgICB0aGlzLnRyYWNrKHRyYWNrLCB7IG5vbmludGVyYWN0aW9uOiB0cnVlIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9maWVsZC1yZWZlcmVuY2VcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSBldmVudFxuICovXG5cbkdBLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBvcHRpb25zKXtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHRyYWNrLm9wdGlvbnModGhpcy5uYW1lKTtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xuICB2YXIgcmV2ZW51ZSA9IHRyYWNrLnJldmVudWUoKTtcbiAgdmFyIGV2ZW50ID0gdHJhY2suZXZlbnQoKTtcblxuICB3aW5kb3cuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB7XG4gICAgZXZlbnRBY3Rpb246IGV2ZW50LFxuICAgIGV2ZW50Q2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3J5IHx8IHByb3BzLmNhdGVnb3J5IHx8ICdBbGwnLFxuICAgIGV2ZW50TGFiZWw6IHByb3BzLmxhYmVsLFxuICAgIGV2ZW50VmFsdWU6IGZvcm1hdFZhbHVlKHByb3BzLnZhbHVlIHx8IHJldmVudWUpLFxuICAgIG5vbkludGVyYWN0aW9uOiBwcm9wcy5ub25pbnRlcmFjdGlvbiB8fCBvcHRzLm5vbmludGVyYWN0aW9uXG4gIH0pO1xufTtcblxuLyoqXG4gKiBDb21wbGV0ZWQgb3JkZXIuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL2Vjb21tZXJjZVxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5HQS5wcm90b3R5cGUuY29tcGxldGVkT3JkZXIgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBvcmRlcklkID0gdHJhY2sub3JkZXJJZCgpO1xuICB2YXIgcHJvZHVjdHMgPSB0cmFjay5wcm9kdWN0cygpO1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG5cbiAgLy8gb3JkZXJJZCBpcyByZXF1aXJlZC5cbiAgaWYgKCFvcmRlcklkKSByZXR1cm47XG5cbiAgLy8gcmVxdWlyZSBlY29tbWVyY2VcbiAgaWYgKCF0aGlzLmVjb21tZXJjZSkge1xuICAgIHdpbmRvdy5nYSgncmVxdWlyZScsICdlY29tbWVyY2UnLCAnZWNvbW1lcmNlLmpzJyk7XG4gICAgdGhpcy5lY29tbWVyY2UgPSB0cnVlO1xuICB9XG5cbiAgLy8gYWRkIHRyYW5zYWN0aW9uXG4gIHdpbmRvdy5nYSgnZWNvbW1lcmNlOmFkZFRyYW5zYWN0aW9uJywge1xuICAgIGFmZmlsaWF0aW9uOiBwcm9wcy5hZmZpbGlhdGlvbixcbiAgICBzaGlwcGluZzogdHJhY2suc2hpcHBpbmcoKSxcbiAgICByZXZlbnVlOiB0cmFjay50b3RhbCgpLFxuICAgIHRheDogdHJhY2sudGF4KCksXG4gICAgaWQ6IG9yZGVySWRcbiAgfSk7XG5cbiAgLy8gYWRkIHByb2R1Y3RzXG4gIGVhY2gocHJvZHVjdHMsIGZ1bmN0aW9uKHByb2R1Y3Qpe1xuICAgIHZhciB0cmFjayA9IG5ldyBUcmFjayh7IHByb3BlcnRpZXM6IHByb2R1Y3QgfSk7XG4gICAgd2luZG93LmdhKCdlY29tbWVyY2U6YWRkSXRlbScsIHtcbiAgICAgIGNhdGVnb3J5OiB0cmFjay5jYXRlZ29yeSgpLFxuICAgICAgcXVhbnRpdHk6IHRyYWNrLnF1YW50aXR5KCksXG4gICAgICBwcmljZTogdHJhY2sucHJpY2UoKSxcbiAgICAgIG5hbWU6IHRyYWNrLm5hbWUoKSxcbiAgICAgIHNrdTogdHJhY2suc2t1KCksXG4gICAgICBpZDogb3JkZXJJZFxuICAgIH0pO1xuICB9KTtcblxuICAvLyBzZW5kXG4gIHdpbmRvdy5nYSgnZWNvbW1lcmNlOnNlbmQnKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSAoY2xhc3NpYykuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2dhanMvbWV0aG9kcy9nYUpTQXBpQmFzaWNDb25maWd1cmF0aW9uXG4gKi9cblxuR0EucHJvdG90eXBlLmluaXRpYWxpemVDbGFzc2ljID0gZnVuY3Rpb24oKXtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBhbm9ueW1pemUgPSBvcHRzLmFub255bWl6ZUlwO1xuICB2YXIgZGIgPSBvcHRzLmRvdWJsZUNsaWNrO1xuICB2YXIgZG9tYWluID0gb3B0cy5kb21haW47XG4gIHZhciBlbmhhbmNlZCA9IG9wdHMuZW5oYW5jZWRMaW5rQXR0cmlidXRpb247XG4gIHZhciBpZ25vcmUgPSBvcHRzLmlnbm9yZVJlZmVycmVyO1xuICB2YXIgc2FtcGxlID0gb3B0cy5zaXRlU3BlZWRTYW1wbGVSYXRlO1xuXG4gIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgfHwgW107XG4gIHB1c2goJ19zZXRBY2NvdW50Jywgb3B0cy50cmFja2luZ0lkKTtcbiAgcHVzaCgnX3NldEFsbG93TGlua2VyJywgdHJ1ZSk7XG5cbiAgaWYgKGFub255bWl6ZSkgcHVzaCgnX2dhdC5fYW5vbnltaXplSXAnKTtcbiAgaWYgKGRvbWFpbikgcHVzaCgnX3NldERvbWFpbk5hbWUnLCBkb21haW4pO1xuICBpZiAoc2FtcGxlKSBwdXNoKCdfc2V0U2l0ZVNwZWVkU2FtcGxlUmF0ZScsIHNhbXBsZSk7XG5cbiAgaWYgKGVuaGFuY2VkKSB7XG4gICAgdmFyIHByb3RvY29sID0gJ2h0dHBzOicgPT09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOicgOiAnaHR0cDonO1xuICAgIHZhciBwbHVnaW5VcmwgPSBwcm90b2NvbCArICcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9wbHVnaW5zL2dhL2lucGFnZV9saW5raWQuanMnO1xuICAgIHB1c2goJ19yZXF1aXJlJywgJ2lucGFnZV9saW5raWQnLCBwbHVnaW5VcmwpO1xuICB9XG5cbiAgaWYgKGlnbm9yZSkge1xuICAgIGlmICghaXMuYXJyYXkoaWdub3JlKSkgaWdub3JlID0gW2lnbm9yZV07XG4gICAgZWFjaChpZ25vcmUsIGZ1bmN0aW9uKGRvbWFpbil7XG4gICAgICBwdXNoKCdfYWRkSWdub3JlZFJlZicsIGRvbWFpbik7XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkPyAoY2xhc3NpYylcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkdBLnByb3RvdHlwZS5sb2FkZWRDbGFzc2ljID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2dhcSAmJiB3aW5kb3cuX2dhcS5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIGNsYXNzaWMgR29vZ2xlIEFuYWx5dGljcyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuR0EucHJvdG90eXBlLmxvYWRDbGFzc2ljID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBpZiAodGhpcy5vcHRpb25zLmRvdWJsZUNsaWNrKSB7XG4gICAgbG9hZCgnLy9zdGF0cy5nLmRvdWJsZWNsaWNrLm5ldC9kYy5qcycsIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkKHtcbiAgICAgIGh0dHA6ICdodHRwOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJyxcbiAgICAgIGh0dHBzOiAnaHR0cHM6Ly9zc2wuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnXG4gICAgfSwgY2FsbGJhY2spO1xuICB9XG59O1xuXG4vKipcbiAqIFBhZ2UgKGNsYXNzaWMpLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYWpzL21ldGhvZHMvZ2FKU0FwaUJhc2ljQ29uZmlndXJhdGlvblxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkdBLnByb3RvdHlwZS5wYWdlQ2xhc3NpYyA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgb3B0cyA9IHBhZ2Uub3B0aW9ucyh0aGlzLm5hbWUpO1xuICB2YXIgY2F0ZWdvcnkgPSBwYWdlLmNhdGVnb3J5KCk7XG4gIHZhciBwcm9wcyA9IHBhZ2UucHJvcGVydGllcygpO1xuICB2YXIgbmFtZSA9IHBhZ2UuZnVsbE5hbWUoKTtcbiAgdmFyIHRyYWNrO1xuXG4gIHB1c2goJ190cmFja1BhZ2V2aWV3JywgcGF0aChwcm9wcywgdGhpcy5vcHRpb25zKSk7XG5cbiAgLy8gY2F0ZWdvcml6ZWQgcGFnZXNcbiAgaWYgKGNhdGVnb3J5ICYmIHRoaXMub3B0aW9ucy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICB0cmFjayA9IHBhZ2UudHJhY2soY2F0ZWdvcnkpO1xuICAgIHRoaXMudHJhY2sodHJhY2ssIHsgbm9uaW50ZXJhY3Rpb246IHRydWUgfSk7XG4gIH1cblxuICAvLyBuYW1lZCBwYWdlc1xuICBpZiAobmFtZSAmJiB0aGlzLm9wdGlvbnMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdHJhY2sgPSBwYWdlLnRyYWNrKG5hbWUpO1xuICAgIHRoaXMudHJhY2sodHJhY2ssIHsgbm9uaW50ZXJhY3Rpb246IHRydWUgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogVHJhY2sgKGNsYXNzaWMpLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYWpzL21ldGhvZHMvZ2FKU0FwaUV2ZW50VHJhY2tpbmdcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbkdBLnByb3RvdHlwZS50cmFja0NsYXNzaWMgPSBmdW5jdGlvbih0cmFjaywgb3B0aW9ucyl7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB0cmFjay5vcHRpb25zKHRoaXMubmFtZSk7XG4gIHZhciBwcm9wcyA9IHRyYWNrLnByb3BlcnRpZXMoKTtcbiAgdmFyIHJldmVudWUgPSB0cmFjay5yZXZlbnVlKCk7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIHZhciBjYXRlZ29yeSA9IHRoaXMuX2NhdGVnb3J5IHx8IHByb3BzLmNhdGVnb3J5IHx8ICdBbGwnO1xuICB2YXIgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgdmFyIHZhbHVlID0gZm9ybWF0VmFsdWUocmV2ZW51ZSB8fCBwcm9wcy52YWx1ZSk7XG4gIHZhciBub25pbnRlcmFjdGlvbiA9IHByb3BzLm5vbmludGVyYWN0aW9uIHx8IG9wdHMubm9uaW50ZXJhY3Rpb247XG4gIHB1c2goJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGV2ZW50LCBsYWJlbCwgdmFsdWUsIG5vbmludGVyYWN0aW9uKTtcbn07XG5cbi8qKlxuICogQ29tcGxldGVkIG9yZGVyLlxuICpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYWpzL2dhVHJhY2tpbmdFY29tbWVyY2VcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuR0EucHJvdG90eXBlLmNvbXBsZXRlZE9yZGVyQ2xhc3NpYyA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIG9yZGVySWQgPSB0cmFjay5vcmRlcklkKCk7XG4gIHZhciBwcm9kdWN0cyA9IHRyYWNrLnByb2R1Y3RzKCkgfHwgW107XG4gIHZhciBwcm9wcyA9IHRyYWNrLnByb3BlcnRpZXMoKTtcblxuICAvLyByZXF1aXJlZFxuICBpZiAoIW9yZGVySWQpIHJldHVybjtcblxuICAvLyBhZGQgdHJhbnNhY3Rpb25cbiAgcHVzaChcbiAgICAnX2FkZFRyYW5zJyxcbiAgICBvcmRlcklkLFxuICAgIHByb3BzLmFmZmlsaWF0aW9uLFxuICAgIHRyYWNrLnRvdGFsKCksXG4gICAgdHJhY2sudGF4KCksXG4gICAgdHJhY2suc2hpcHBpbmcoKSxcbiAgICB0cmFjay5jaXR5KCksXG4gICAgdHJhY2suc3RhdGUoKSxcbiAgICB0cmFjay5jb3VudHJ5KClcbiAgKTtcblxuICAvLyBhZGQgaXRlbXNcbiAgZWFjaChwcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCl7XG4gICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKHsgcHJvcGVydGllczogcHJvZHVjdCB9KTtcbiAgICBwdXNoKFxuICAgICAgJ19hZGRJdGVtJyxcbiAgICAgIG9yZGVySWQsXG4gICAgICB0cmFjay5za3UoKSxcbiAgICAgIHRyYWNrLm5hbWUoKSxcbiAgICAgIHRyYWNrLmNhdGVnb3J5KCksXG4gICAgICB0cmFjay5wcmljZSgpLFxuICAgICAgdHJhY2sucXVhbnRpdHkoKVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIHNlbmRcbiAgcHVzaCgnX3RyYWNrVHJhbnMnKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwYXRoIGJhc2VkIG9uIGBwcm9wZXJ0aWVzYCBhbmQgYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHBhdGgocHJvcGVydGllcywgb3B0aW9ucyl7XG4gIGlmICghcHJvcGVydGllcykgcmV0dXJuO1xuICB2YXIgc3RyID0gcHJvcGVydGllcy5wYXRoO1xuICBpZiAob3B0aW9ucy5pbmNsdWRlU2VhcmNoICYmIHByb3BlcnRpZXMuc2VhcmNoKSBzdHIgKz0gcHJvcGVydGllcy5zZWFyY2g7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogRm9ybWF0IHRoZSB2YWx1ZSBwcm9wZXJ0eSB0byBHb29nbGUncyBsaWtpbmcuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUpe1xuICBpZiAoIXZhbHVlIHx8IHZhbHVlIDwgMCkgcmV0dXJuIDA7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbn1cbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBvbkJvZHkgPSByZXF1aXJlKCdvbi1ib2R5Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oR2V0U2F0aXNmYWN0aW9uKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBHZXRTYXRpc2ZhY3Rpb25gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBHZXRTYXRpc2ZhY3Rpb24gPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0dldCBTYXRpc2ZhY3Rpb24nKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnR1NGTicpXG4gIC5vcHRpb24oJ3dpZGdldElkJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cHM6Ly9jb25zb2xlLmdldHNhdGlzZmFjdGlvbi5jb20vc3RhcnQvMTAxMDIyP3NpZ251cD10cnVlI2VuZ2FnZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuR2V0U2F0aXNmYWN0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHZhciB3aWRnZXQgPSB0aGlzLm9wdGlvbnMud2lkZ2V0SWQ7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIGlkID0gZGl2LmlkID0gJ2dldHNhdC13aWRnZXQtJyArIHdpZGdldDtcbiAgb25Cb2R5KGZ1bmN0aW9uKGJvZHkpeyBib2R5LmFwcGVuZENoaWxkKGRpdik7IH0pO1xuXG4gIC8vIHVzdWFsbHkgdGhlIHNuaXBwZXQgaXMgc3luYywgc28gd2FpdCBmb3IgaXQgYmVmb3JlIGluaXRpYWxpemluZyB0aGUgdGFiXG4gIHRoaXMubG9hZChmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5HU0ZOLmxvYWRXaWRnZXQod2lkZ2V0LCB7IGNvbnRhaW5lcklkOiBpZCB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkdldFNhdGlzZmFjdGlvbi5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhIHdpbmRvdy5HU0ZOO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBHZXQgU2F0aXNmYWN0aW9uIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5HZXRTYXRpc2ZhY3Rpb24ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJ2h0dHBzOi8vbG9hZGVyLmVuZ2FnZS5nc2ZuLnVzL2xvYWRlci5qcycsIGNhbGxiYWNrKTtcbn07IiwiXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19nYXVnZXMnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihHYXVnZXMpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYEdhdWdlc2AgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEdhdWdlcyA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignR2F1Z2VzJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXG4gIC5nbG9iYWwoJ19nYXVnZXMnKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBHYXVnZXMuXG4gKlxuICogaHR0cDovL2dldC5nYXVnLmVzL2RvY3VtZW50YXRpb24vdHJhY2tpbmcvXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5HYXVnZXMucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9nYXVnZXMgPSB3aW5kb3cuX2dhdWdlcyB8fCBbXTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkdhdWdlcy5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2dhdWdlcyAmJiB3aW5kb3cuX2dhdWdlcy5wdXNoICE9PSBBcnJheS5wcm90b3R5cGUucHVzaCk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIEdhdWdlcyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuR2F1Z2VzLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgaWQgPSB0aGlzLm9wdGlvbnMuc2l0ZUlkO1xuICB2YXIgc2NyaXB0ID0gbG9hZCgnLy9zZWN1cmUuZ2F1Zy5lcy90cmFjay5qcycsIGNhbGxiYWNrKTtcbiAgc2NyaXB0LmlkID0gJ2dhdWdlcy10cmFja2VyJztcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1zaXRlLWlkJywgaWQpO1xufTtcblxuLyoqXG4gKiBQYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkdhdWdlcy5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICBwdXNoKCd0cmFjaycpO1xufTtcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEZyb250bGVhZik7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgRnJvbnRsZWFmYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgRnJvbnRsZWFmID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdGcm9udGxlYWYnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX2ZsJylcbiAgLmdsb2JhbCgnX2ZsQmFzZVVybCcpXG4gIC5vcHRpb24oJ2Jhc2VVcmwnLCAnaHR0cHM6Ly9hcGkuZnJvbnRsZWFmLmNvbScpXG4gIC5vcHRpb24oJ3Rva2VuJywgJycpXG4gIC5vcHRpb24oJ3N0cmVhbScsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHA6Ly9kb2NzLmZyb250bGVhZi5jb20vIy90ZWNobmljYWwtaW1wbGVtZW50YXRpb24vdHJhY2tpbmctY3VzdG9tZXJzL3RyYWNraW5nLWJlYWNvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuRnJvbnRsZWFmLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5fZmwgPSB3aW5kb3cuX2ZsIHx8IFtdO1xuICB3aW5kb3cuX2ZsQmFzZVVybCA9IHdpbmRvdy5fZmxCYXNlVXJsIHx8IHRoaXMub3B0aW9ucy5iYXNlVXJsO1xuICB0aGlzLl9wdXNoKCdzZXRBcGlUb2tlbicsIHRoaXMub3B0aW9ucy50b2tlbik7XG4gIHRoaXMuX3B1c2goJ3NldFN0cmVhbScsIHRoaXMub3B0aW9ucy5zdHJlYW0pO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuRnJvbnRsZWFmLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMuYXJyYXkod2luZG93Ll9mbCkgJiYgd2luZG93Ll9mbC5yZWFkeSA9PT0gdHJ1ZSA7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5Gcm9udGxlYWYucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmbil7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX2ZsJykpIHJldHVybiBjYWxsYmFjay5hc3luYyhmbik7XG4gIHZhciBzY3JpcHQgPSBsb2FkKHdpbmRvdy5fZmxCYXNlVXJsICsgJy9saWIvdHJhY2tlci5qcycsIGZuKTtcbiAgc2NyaXB0LmlkID0gJ19mbCc7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkZW50aWZ5XG4gKi9cblxuRnJvbnRsZWFmLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uKGlkZW50aWZ5KXtcbiAgdmFyIHVzZXJJZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuICBpZiAodXNlcklkKSB7XG4gICAgdGhpcy5fcHVzaCgnc2V0VXNlcicsIHtcbiAgICAgIGlkOiB1c2VySWQsXG4gICAgICBuYW1lOiBpZGVudGlmeS5uYW1lKCkgfHwgaWRlbnRpZnkudXNlcm5hbWUoKSxcbiAgICAgIGRhdGE6IGNsZWFuKGlkZW50aWZ5LnRyYWl0cygpKVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEdyb3VwLlxuICpcbiAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gKi9cblxuRnJvbnRsZWFmLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uKGdyb3VwKXtcbiAgdmFyIGdyb3VwSWQgPSBncm91cC5ncm91cElkKCk7XG4gIGlmIChncm91cElkKSB7XG4gICAgdGhpcy5fcHVzaCgnc2V0QWNjb3VudCcsIHtcbiAgICAgIGlkOiBncm91cElkLFxuICAgICAgbmFtZTogZ3JvdXAucHJveHkoJ3RyYWl0cy5uYW1lJyksXG4gICAgICBkYXRhOiBjbGVhbihncm91cC50cmFpdHMoKSlcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbkZyb250bGVhZi5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIHRoaXMuX3B1c2goJ2V2ZW50JywgZXZlbnQsIGNsZWFuKHRyYWNrLnByb3BlcnRpZXMoKSkpO1xufTtcblxuLyoqXG4gKiBQdXNoIGEgY29tbWFuZCBvbnRvIHRoZSBnbG9iYWwgRnJvbnRsZWFmIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFyZ3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkZyb250bGVhZi5wcm90b3R5cGUuX3B1c2ggPSBmdW5jdGlvbihjb21tYW5kKXtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHdpbmRvdy5fZmwucHVzaChmdW5jdGlvbih0KXsgdFtjb21tYW5kXS5hcHBseShjb21tYW5kLCBhcmdzKTsgfSk7XG59O1xuXG4vKipcbiAqIENsZWFuIGFsbCBuZXN0ZWQgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNsZWFuKG9iail7XG4gIHZhciByZXQgPSB7fTtcblxuICAvLyBSZW1vdmUgdHJhaXRzL3Byb3BlcnRpZXMgdGhhdCBhcmUgYWxyZWFkeSByZXByZXNlbnRlZFxuICAvLyBvdXRzaWRlIG9mIHRoZSBkYXRhIGNvbnRhaW5lclxuICB2YXIgZXhjbHVkZUtleXMgPSBbXCJpZFwiLFwibmFtZVwiLFwiZmlyc3ROYW1lXCIsXCJsYXN0TmFtZVwiXTtcbiAgdmFyIGxlbiA9IGV4Y2x1ZGVLZXlzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNsZWFyKG9iaiwgZXhjbHVkZUtleXNbaV0pO1xuICB9XG5cbiAgLy8gRmxhdHRlbiBuZXN0ZWQgaGllcmFyY2h5LCBwcmVzZXJ2aW5nIGFycmF5c1xuICBvYmogPSBmbGF0dGVuKG9iaik7XG5cbiAgLy8gRGlzY2FyZCBudWxscywgcmVwcmVzZW50IGFycmF5cyBhcyBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nc1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIGlmIChudWxsID09IHZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzLmFycmF5KHZhbCkpIHtcbiAgICAgIHJldFtrZXldID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXRba2V5XSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgcHJvcGVydHkgZnJvbSBhbiBvYmplY3QgaWYgc2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNsZWFyKG9iaiwga2V5KXtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgZGVsZXRlIG9ialtrZXldO1xuICB9XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIG5lc3RlZCBvYmplY3QgaW50byBhIHNpbmdsZSBsZXZlbCBzcGFjZS1kZWxpbWl0ZWRcbiAqIGhpZXJhcmNoeS5cbiAqXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2ZsYXRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbGF0dGVuKHNvdXJjZSl7XG4gIHZhciBvdXRwdXQgPSB7fTtcblxuICBmdW5jdGlvbiBzdGVwKG9iamVjdCwgcHJldil7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgdmFyIHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICB2YXIgbmV3S2V5ID0gcHJldiA/IHByZXYgKyAnICcgKyBrZXkgOiBrZXk7XG5cbiAgICAgIGlmICghaXMuYXJyYXkodmFsdWUpICYmIGlzLm9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHN0ZXAodmFsdWUsIG5ld0tleSk7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dFtuZXdLZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgc3RlcChzb3VyY2UpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4iLCJcclxudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnX2Z4bScpO1xyXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xyXG52YXIgVHJhY2sgPSByZXF1aXJlKCdmYWNhZGUnKS5UcmFjaztcclxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcclxudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xyXG52YXIgZWFjaCA9IHJlcXVpcmUoJ2VhY2gnKTtcclxuXHJcbi8qKlxyXG4gKiBFeHBvc2UgcGx1Z2luLlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XHJcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEZveE1ldHJpY3MpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV4cG9zZSBgRm94TWV0cmljc2AgaW50ZWdyYXRpb24uXHJcbiAqL1xyXG5cclxudmFyIEZveE1ldHJpY3MgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0ZveE1ldHJpY3MnKVxyXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxyXG4gIC5yZWFkeU9uSW5pdGlhbGl6ZSgpXHJcbiAgLmdsb2JhbCgnX2Z4bScpXHJcbiAgLm9wdGlvbignYXBwSWQnLCAnJyk7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZS5cclxuICpcclxuICogaHR0cDovL2ZveG1ldHJpY3MuY29tL2RvY3VtZW50YXRpb24vYXBpamF2YXNjcmlwdFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxyXG4gKi9cclxuXHJcbkZveE1ldHJpY3MucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcclxuICB3aW5kb3cuX2Z4bSA9IHdpbmRvdy5fZnhtIHx8IFtdO1xyXG4gIHRoaXMubG9hZCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWRlZD9cclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICovXHJcblxyXG5Gb3hNZXRyaWNzLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xyXG4gIHJldHVybiAhISAod2luZG93Ll9meG0gJiYgd2luZG93Ll9meG0uYXBwSWQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWQgdGhlIEZveE1ldHJpY3MgbGlicmFyeS5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcblxyXG5Gb3hNZXRyaWNzLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gIHZhciBpZCA9IHRoaXMub3B0aW9ucy5hcHBJZDtcclxuICBsb2FkKCcvL2QzNXRjYTd2bWVma3JjLmNsb3VkZnJvbnQubmV0L3NjcmlwdHMvJyArIGlkICsgJy5qcycsIGNhbGxiYWNrKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcclxuICovXHJcblxyXG5Gb3hNZXRyaWNzLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24ocGFnZSl7XHJcbiAgdmFyIHByb3BlcnRpZXMgPSBwYWdlLnByb3h5KCdwcm9wZXJ0aWVzJyk7XHJcbiAgdmFyIGNhdGVnb3J5ID0gcGFnZS5jYXRlZ29yeSgpO1xyXG4gIHZhciBuYW1lID0gcGFnZS5uYW1lKCk7XHJcbiAgdGhpcy5fY2F0ZWdvcnkgPSBjYXRlZ29yeTsgLy8gc3RvcmUgZm9yIGxhdGVyXHJcblxyXG4gIHB1c2goXHJcbiAgICAnX2Z4bS5wYWdlcy52aWV3JyxcclxuICAgIHByb3BlcnRpZXMudGl0bGUsICAgLy8gdGl0bGVcclxuICAgIG5hbWUsICAgICAgICAgICAgICAgLy8gbmFtZVxyXG4gICAgY2F0ZWdvcnksICAgICAgICAgICAvLyBjYXRlZ29yeVxyXG4gICAgcHJvcGVydGllcy51cmwsICAgICAvLyB1cmxcclxuICAgIHByb3BlcnRpZXMucmVmZXJyZXIgLy8gcmVmZXJyZXJcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIElkZW50aWZ5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxyXG4gKi9cclxuXHJcbkZveE1ldHJpY3MucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xyXG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xyXG5cclxuICBpZiAoIWlkKSByZXR1cm47XHJcblxyXG4gIHB1c2goXHJcbiAgICAnX2Z4bS52aXNpdG9yLnByb2ZpbGUnLFxyXG4gICAgaWQsICAgICAgICAgICAgICAgICAgICAvLyB1c2VyIGlkXHJcbiAgICBpZGVudGlmeS5maXJzdE5hbWUoKSwgLy8gZmlyc3QgbmFtZVxyXG4gICAgaWRlbnRpZnkubGFzdE5hbWUoKSwgIC8vIGxhc3QgbmFtZVxyXG4gICAgaWRlbnRpZnkuZW1haWwoKSwgICAgIC8vIGVtYWlsXHJcbiAgICBpZGVudGlmeS5hZGRyZXNzKCksICAgLy8gYWRkcmVzc1xyXG4gICAgdW5kZWZpbmVkLCAgICAgICAgICAgIC8vIHNvY2lhbFxyXG4gICAgdW5kZWZpbmVkLCAgICAgICAgICAgIC8vIHBhcnRuZXJzXHJcbiAgICBpZGVudGlmeS50cmFpdHMoKSAgICAgLy8gYXR0cmlidXRlc1xyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXHJcbiAqL1xyXG5cclxuRm94TWV0cmljcy5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XHJcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xyXG4gIHZhciBjYXRlZ29yeSA9IHRoaXMuX2NhdGVnb3J5IHx8IHByb3BzLmNhdGVnb3J5O1xyXG4gIHB1c2godHJhY2suZXZlbnQoKSwgY2F0ZWdvcnksIHByb3BzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBWaWV3ZWQgcHJvZHVjdC5cclxuICpcclxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuRm94TWV0cmljcy5wcm90b3R5cGUudmlld2VkUHJvZHVjdCA9IGZ1bmN0aW9uKHRyYWNrKXtcclxuICBlY29tbWVyY2UoJ3Byb2R1Y3R2aWV3JywgdHJhY2spO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZWQgcHJvZHVjdC5cclxuICpcclxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuRm94TWV0cmljcy5wcm90b3R5cGUucmVtb3ZlZFByb2R1Y3QgPSBmdW5jdGlvbih0cmFjayl7XHJcbiAgZWNvbW1lcmNlKCdyZW1vdmVjYXJ0aXRlbScsIHRyYWNrKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRlZCBwcm9kdWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5Gb3hNZXRyaWNzLnByb3RvdHlwZS5hZGRlZFByb2R1Y3QgPSBmdW5jdGlvbih0cmFjayl7XHJcbiAgZWNvbW1lcmNlKCdjYXJ0aXRlbScsIHRyYWNrKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb21wbGV0ZWQgT3JkZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbkZveE1ldHJpY3MucHJvdG90eXBlLmNvbXBsZXRlZE9yZGVyID0gZnVuY3Rpb24odHJhY2spe1xyXG4gIHZhciBvcmRlcklkID0gdHJhY2sub3JkZXJJZCgpO1xyXG5cclxuICAvLyB0cmFuc2FjdGlvblxyXG4gIHB1c2goXHJcbiAgICAnX2Z4bS5lY29tbWVyY2Uub3JkZXInLFxyXG4gICAgb3JkZXJJZCxcclxuICAgIHRyYWNrLnN1YnRvdGFsKCksXHJcbiAgICB0cmFjay5zaGlwcGluZygpLFxyXG4gICAgdHJhY2sudGF4KCksXHJcbiAgICB0cmFjay5jaXR5KCksXHJcbiAgICB0cmFjay5zdGF0ZSgpLFxyXG4gICAgdHJhY2suemlwKCksXHJcbiAgICB0cmFjay5xdWFudGl0eSgpXHJcbiAgKTtcclxuXHJcbiAgLy8gaXRlbXNcclxuICBlYWNoKHRyYWNrLnByb2R1Y3RzKCksIGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG4gICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKHsgcHJvcGVydGllczogcHJvZHVjdCB9KTtcclxuICAgIGVjb21tZXJjZSgncHVyY2hhc2VpdGVtJywgdHJhY2ssIFtcclxuICAgICAgdHJhY2sucXVhbnRpdHkoKSxcclxuICAgICAgdHJhY2sucHJpY2UoKSxcclxuICAgICAgb3JkZXJJZFxyXG4gICAgXSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhY2sgZWNvbW1lcmNlIGBldmVudGAgd2l0aCBgdHJhY2tgXHJcbiAqIHdpdGggb3B0aW9uYWwgYGFycmAgdG8gYXBwZW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcclxuICogQHBhcmFtIHtBcnJheX0gYXJyXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGVjb21tZXJjZShldmVudCwgdHJhY2ssIGFycil7XHJcbiAgcHVzaC5hcHBseShudWxsLCBbXHJcbiAgICAnX2Z4bS5lY29tbWVyY2UuJyArIGV2ZW50LFxyXG4gICAgdHJhY2suaWQoKSB8fCB0cmFjay5za3UoKSxcclxuICAgIHRyYWNrLm5hbWUoKSxcclxuICAgIHRyYWNrLmNhdGVnb3J5KClcclxuICBdLmNvbmNhdChhcnIgfHwgW10pKTtcclxufVxyXG4iLCJcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1waXhlbCcpKCcvL3d3dy5mYWNlYm9vay5jb20vb2Zmc2l0ZV9ldmVudC5waHAnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihGYWNlYm9vayk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgbG9hZGAuXG4gKi9cblxuZXhwb3J0cy5sb2FkID0gbG9hZDtcblxuLyoqXG4gKiBIT1BcbiAqL1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBFeHBvc2UgYEZhY2Vib29rYFxuICovXG5cbnZhciBGYWNlYm9vayA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignRmFjZWJvb2sgQWRzJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLm9wdGlvbignY3VycmVuY3knLCAnVVNEJylcbiAgLm9wdGlvbignZXZlbnRzJywge30pO1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuRmFjZWJvb2sucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgZXZlbnRzID0gdGhpcy5vcHRpb25zLmV2ZW50cztcbiAgdmFyIHRyYWl0cyA9IHRyYWNrLnRyYWl0cygpO1xuICB2YXIgZXZlbnQgPSB0cmFjay5ldmVudCgpO1xuICBpZiAoIWhhcy5jYWxsKGV2ZW50cywgZXZlbnQpKSByZXR1cm47XG4gIHJldHVybiBleHBvcnRzLmxvYWQoe1xuICAgIGN1cnJlbmN5OiB0aGlzLm9wdGlvbnMuY3VycmVuY3ksXG4gICAgdmFsdWU6IHRyYWNrLnJldmVudWUoKSB8fCAwLFxuICAgIGlkOiBldmVudHNbZXZlbnRdXG4gIH0pO1xufTtcbiIsIlxudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xudmFyIHB1c2ggPSByZXF1aXJlKCdnbG9iYWwtcXVldWUnKSgnX2FhcScpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEV2ZXJnYWdlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBFdmVyZ2FnZWAgaW50ZWdyYXRpb24uaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEV2ZXJnYWdlID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdFdmVyZ2FnZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfYWFxJylcbiAgLm9wdGlvbignYWNjb3VudCcsICcnKVxuICAub3B0aW9uKCdkYXRhc2V0JywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5FdmVyZ2FnZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgYWNjb3VudCA9IHRoaXMub3B0aW9ucy5hY2NvdW50O1xuICB2YXIgZGF0YXNldCA9IHRoaXMub3B0aW9ucy5kYXRhc2V0O1xuXG4gIHdpbmRvdy5fYWFxID0gd2luZG93Ll9hYXEgfHwgW107XG4gIHB1c2goJ3NldEV2ZXJnYWdlQWNjb3VudCcsIGFjY291bnQpO1xuICBwdXNoKCdzZXREYXRhc2V0JywgZGF0YXNldCk7XG4gIHB1c2goJ3NldFVzZVNpdGVDb25maWcnLCB0cnVlKTtcblxuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuRXZlcmdhZ2UucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISAod2luZG93Ll9hYXEgJiYgd2luZG93Ll9hYXEucHVzaCAhPT0gQXJyYXkucHJvdG90eXBlLnB1c2gpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuRXZlcmdhZ2UucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIHZhciBhY2NvdW50ID0gdGhpcy5vcHRpb25zLmFjY291bnQ7XG4gIHZhciBkYXRhc2V0ID0gdGhpcy5vcHRpb25zLmRhdGFzZXQ7XG4gIHZhciB1cmwgPSAnLy9jZG4uZXZlcmdhZ2UuY29tL2JlYWNvbi8nICsgYWNjb3VudCArICcvJyArIGRhdGFzZXQgKyAnL3NjcmlwdHMvZXZlcmdhZ2UubWluLmpzJztcbiAgbG9hZCh1cmwsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5FdmVyZ2FnZS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLm5hbWUoKTtcbiAgaWYgKG5hbWUpIHB1c2goJ25hbWVQYWdlJywgbmFtZSk7XG5cbiAgZWFjaChwcm9wcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgcHVzaCgnc2V0Q3VzdG9tRmllbGQnLCBrZXksIHZhbHVlLCAncGFnZScpO1xuICB9KTtcblxuICB3aW5kb3cuRXZlcmdhZ2UuaW5pdCh0cnVlKTtcbn07XG5cbi8qKlxuICogSWRlbnRpZnkuXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5FdmVyZ2FnZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbihpZGVudGlmeSl7XG4gIHZhciBpZCA9IGlkZW50aWZ5LnVzZXJJZCgpO1xuICBpZiAoIWlkKSByZXR1cm47XG5cbiAgcHVzaCgnc2V0VXNlcicsIGlkKTtcblxuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKHtcbiAgICBlbWFpbDogJ3VzZXJFbWFpbCcsXG4gICAgbmFtZTogJ3VzZXJOYW1lJ1xuICB9KTtcblxuICBlYWNoKHRyYWl0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgcHVzaCgnc2V0VXNlckZpZWxkJywga2V5LCB2YWx1ZSwgJ3BhZ2UnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdyb3VwLlxuICpcbiAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gKi9cblxuRXZlcmdhZ2UucHJvdG90eXBlLmdyb3VwID0gZnVuY3Rpb24oZ3JvdXApe1xuICB2YXIgcHJvcHMgPSBncm91cC50cmFpdHMoKTtcbiAgdmFyIGlkID0gZ3JvdXAuZ3JvdXBJZCgpO1xuICBpZiAoIWlkKSByZXR1cm47XG5cbiAgcHVzaCgnc2V0Q29tcGFueScsIGlkKTtcbiAgZWFjaChwcm9wcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgcHVzaCgnc2V0QWNjb3VudEZpZWxkJywga2V5LCB2YWx1ZSwgJ3BhZ2UnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuRXZlcmdhZ2UucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICBwdXNoKCd0cmFja0FjdGlvbicsIHRyYWNrLmV2ZW50KCksIHRyYWNrLnByb3BlcnRpZXMoKSk7XG59O1xuIiwiXG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBvbkVycm9yID0gcmVxdWlyZSgnb24tZXJyb3InKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19lcnJzJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oRXJyb3JjZXB0aW9uKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBFcnJvcmNlcHRpb25gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBFcnJvcmNlcHRpb24gPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0Vycm9yY2VwdGlvbicpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfZXJycycpXG4gIC5vcHRpb24oJ3Byb2plY3RJZCcsICcnKVxuICAub3B0aW9uKCdtZXRhJywgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW1wbGl0dWRlL0Vycm9yY2VwdGlvbi1KYXZhc2NyaXB0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5FcnJvcmNlcHRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9lcnJzID0gd2luZG93Ll9lcnJzIHx8IFt0aGlzLm9wdGlvbnMucHJvamVjdElkXTtcbiAgb25FcnJvcihwdXNoKTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkVycm9yY2VwdGlvbi5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhICh3aW5kb3cuX2VycnMgJiYgd2luZG93Ll9lcnJzLnB1c2ggIT09IEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgRXJyb3JjZXB0aW9uIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5FcnJvcmNlcHRpb24ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJy8vYmVhY29uLmVycm9yY2VwdGlvbi5jb20vJyArIHRoaXMub3B0aW9ucy5wcm9qZWN0SWQgKyAnLmpzJywgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBodHRwOi8vYmxvZy5lcnJvcmNlcHRpb24uY29tLzIwMTIvMTEvY2FwdHVyZS1jdXN0b20tZGF0YS13aXRoLXlvdXItZXJyb3JzLmh0bWxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaWRlbnRpZnlcbiAqL1xuXG5FcnJvcmNlcHRpb24ucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICBpZiAoIXRoaXMub3B0aW9ucy5tZXRhKSByZXR1cm47XG4gIHZhciB0cmFpdHMgPSBpZGVudGlmeS50cmFpdHMoKTtcbiAgd2luZG93Ll9lcnJzID0gd2luZG93Ll9lcnJzIHx8IFtdO1xuICB3aW5kb3cuX2VycnMubWV0YSA9IHdpbmRvdy5fZXJycy5tZXRhIHx8IHt9O1xuICBleHRlbmQod2luZG93Ll9lcnJzLm1ldGEsIHRyYWl0cyk7XG59O1xuIiwiXG52YXIgYWxpYXMgPSByZXF1aXJlKCdhbGlhcycpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfZGNxJyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oRHJpcCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgRHJpcGAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIERyaXAgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0RyaXAnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnZGMnKVxuICAuZ2xvYmFsKCdfZGNxJylcbiAgLmdsb2JhbCgnX2RjcycpXG4gIC5vcHRpb24oJ2FjY291bnQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkRyaXAucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9kY3EgPSB3aW5kb3cuX2RjcSB8fCBbXTtcbiAgd2luZG93Ll9kY3MgPSB3aW5kb3cuX2RjcyB8fCB7fTtcbiAgd2luZG93Ll9kY3MuYWNjb3VudCA9IHRoaXMub3B0aW9ucy5hY2NvdW50O1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuRHJpcC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLm9iamVjdCh3aW5kb3cuZGMpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuRHJpcC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy90YWcuZ2V0ZHJpcC5jb20vJyArIHRoaXMub3B0aW9ucy5hY2NvdW50ICsgJy5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5EcmlwLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xuICB2YXIgY2VudHMgPSBNYXRoLnJvdW5kKHRyYWNrLmNlbnRzKCkpO1xuICBwcm9wcy5hY3Rpb24gPSB0cmFjay5ldmVudCgpO1xuICBpZiAoY2VudHMpIHByb3BzLnZhbHVlID0gY2VudHM7XG4gIGRlbGV0ZSBwcm9wcy5yZXZlbnVlO1xuICBwdXNoKCd0cmFjaycsIHByb3BzKTtcbn07XG4iLCJcbnZhciBhbGlhcyA9IHJlcXVpcmUoJ2FsaWFzJyk7XG52YXIgY2FsbGJhY2sgPSByZXF1aXJlKCdjYWxsYmFjaycpO1xudmFyIGNvbnZlcnREYXRlcyA9IHJlcXVpcmUoJ2NvbnZlcnQtZGF0ZXMnKTtcbnZhciBJZGVudGlmeSA9IHJlcXVpcmUoJ2ZhY2FkZScpLklkZW50aWZ5O1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBVc2VyIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdXNlcjtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihDdXN0b21lcmlvKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7IC8vIHN0b3JlIGZvciBsYXRlclxufTtcblxuLyoqXG4gKiBFeHBvc2UgYEN1c3RvbWVyaW9gIGludGVncmF0aW9uLlxuICovXG5cbnZhciBDdXN0b21lcmlvID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdDdXN0b21lci5pbycpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdfY2lvJylcbiAgLm9wdGlvbignc2l0ZUlkJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2N1c3RvbWVyLmlvL2RvY3MvYXBpL2phdmFzY3JpcHQuaHRtbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuQ3VzdG9tZXJpby5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX2NpbyA9IHdpbmRvdy5fY2lvIHx8IFtdO1xuICAoZnVuY3Rpb24oKXt2YXIgYSxiLGM7IGEgPSBmdW5jdGlvbihmKXtyZXR1cm4gZnVuY3Rpb24oKXt3aW5kb3cuX2Npby5wdXNoKFtmXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKSk7IH07IH07IGIgPSBbJ2lkZW50aWZ5JywgJ3RyYWNrJ107IGZvciAoYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB7d2luZG93Ll9jaW9bYltjXV0gPSBhKGJbY10pOyB9IH0pKCk7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5DdXN0b21lcmlvLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgKHdpbmRvdy5fY2lvICYmIHdpbmRvdy5fY2lvLnBhZ2VIYXNMb2FkZWQpO1xufTtcblxuLyoqXG4gKiBMb2FkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuQ3VzdG9tZXJpby5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIHNjcmlwdCA9IGxvYWQoJ2h0dHBzOi8vYXNzZXRzLmN1c3RvbWVyLmlvL2Fzc2V0cy90cmFjay5qcycsIGNhbGxiYWNrKTtcbiAgc2NyaXB0LmlkID0gJ2Npby10cmFja2VyJztcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1zaXRlLWlkJywgdGhpcy5vcHRpb25zLnNpdGVJZCk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIGh0dHA6Ly9jdXN0b21lci5pby9kb2NzL2FwaS9qYXZhc2NyaXB0Lmh0bWwjc2VjdGlvbi1JZGVudGlmeV9jdXN0b21lcnNcbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkN1c3RvbWVyaW8ucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICBpZiAoIWlkZW50aWZ5LnVzZXJJZCgpKSByZXR1cm4gdGhpcy5kZWJ1ZygndXNlciBpZCByZXF1aXJlZCcpO1xuICB2YXIgdHJhaXRzID0gaWRlbnRpZnkudHJhaXRzKHsgY3JlYXRlZDogJ2NyZWF0ZWRfYXQnIH0pO1xuICB0cmFpdHMgPSBjb252ZXJ0RGF0ZXModHJhaXRzLCBjb252ZXJ0RGF0ZSk7XG4gIHdpbmRvdy5fY2lvLmlkZW50aWZ5KHRyYWl0cyk7XG59O1xuXG4vKipcbiAqIEdyb3VwLlxuICpcbiAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gKi9cblxuQ3VzdG9tZXJpby5wcm90b3R5cGUuZ3JvdXAgPSBmdW5jdGlvbihncm91cCl7XG4gIHZhciB0cmFpdHMgPSBncm91cC50cmFpdHMoKTtcblxuICB0cmFpdHMgPSBhbGlhcyh0cmFpdHMsIGZ1bmN0aW9uKHRyYWl0KXtcbiAgICByZXR1cm4gJ0dyb3VwICcgKyB0cmFpdDtcbiAgfSk7XG5cbiAgdGhpcy5pZGVudGlmeShuZXcgSWRlbnRpZnkoe1xuICAgIHVzZXJJZDogdXNlci5pZCgpLFxuICAgIHRyYWl0czogdHJhaXRzXG4gIH0pKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogaHR0cDovL2N1c3RvbWVyLmlvL2RvY3MvYXBpL2phdmFzY3JpcHQuaHRtbCNzZWN0aW9uLVRyYWNrX2FfY3VzdG9tX2V2ZW50XG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5DdXN0b21lcmlvLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb3BlcnRpZXMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHByb3BlcnRpZXMgPSBjb252ZXJ0RGF0ZXMocHJvcGVydGllcywgY29udmVydERhdGUpO1xuICB3aW5kb3cuX2Npby50cmFjayh0cmFjay5ldmVudCgpLCBwcm9wZXJ0aWVzKTtcbn07XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGUgdG8gdGhlIGZvcm1hdCBDdXN0b21lci5pbyBzdXBwb3J0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKXtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbn1cbiIsIlxudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xudmFyIElkZW50aWZ5ID0gcmVxdWlyZSgnZmFjYWRlJykuSWRlbnRpZnk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGlzbyA9IHJlcXVpcmUoJ3RvLWlzby1zdHJpbmcnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBwdXNoID0gcmVxdWlyZSgnZ2xvYmFsLXF1ZXVlJykoJ19jdXJlYml0cScpO1xudmFyIFRyYWNrID0gcmVxdWlyZSgnZmFjYWRlJykuVHJhY2s7XG5cbi8qKlxuICogVXNlciByZWZlcmVuY2VcbiAqL1xuXG52YXIgdXNlcjtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEN1cmViaXQpO1xuICB1c2VyID0gYW5hbHl0aWNzLnVzZXIoKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBDdXJlYml0YCBpbnRlZ3JhdGlvblxuICovXG5cbnZhciBDdXJlYml0ID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdDdXJlYml0JylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX2N1cmViaXRxJylcbiAgLmdsb2JhbCgnY3VyZWJpdCcpXG4gIC5vcHRpb24oJ3NpdGVJZCcsICcnKVxuICAub3B0aW9uKCdpZnJhbWVXaWR0aCcsICcxMDAlJylcbiAgLm9wdGlvbignaWZyYW1lSGVpZ2h0JywgJzQ4MCcpXG4gIC5vcHRpb24oJ2lmcmFtZUJvcmRlcicsIDApXG4gIC5vcHRpb24oJ2lmcmFtZUlkJywgJycpXG4gIC5vcHRpb24oJ3Jlc3BvbnNpdmUnLCB0cnVlKVxuICAub3B0aW9uKCdkZXZpY2UnLCAnJylcbiAgLm9wdGlvbignaW5zZXJ0SW50b0lkJywgJ2N1cmViaXQtZnJhbWUnKVxuICAub3B0aW9uKCdjYW1wYWlnbnMnLCB7fSlcbiAgLm9wdGlvbignc2VydmVyJywgJ2h0dHBzOi8vd3d3LmN1cmViaXQuY29tJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkN1cmViaXQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgcHVzaCgnaW5pdCcsIHtcbiAgICBzaXRlX2lkOiB0aGlzLm9wdGlvbnMuc2l0ZUlkLFxuICAgIHNlcnZlcjogdGhpcy5vcHRpb25zLnNlcnZlclxuICB9KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkN1cmViaXQucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISB3aW5kb3cuY3VyZWJpdDtcbn07XG5cbi8qKlxuICogTG9hZCBDdXJlYml0J3MgSmF2YXNjcmlwdCBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuQ3VyZWJpdC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZuKXtcbiAgbG9hZCgnLy9kMmpqenc4MWhxYnVxdi5jbG91ZGZyb250Lm5ldC9pbnRlZ3JhdGlvbi9jdXJlYml0LTEuMC5taW4uanMnLCBmbik7XG59O1xuXG4vKipcbiAqIFBhZ2UuXG4gKlxuICogQ2FsbCB0aGUgYHJlZ2lzdGVyX2FmZmlsaWF0ZWAgbWV0aG9kIG9mIHRoZSBDdXJlYml0IEFQSSB0aGF0IHdpbGwgbG9hZCBhXG4gKiBjdXN0b20gaWZyYW1lIG9udG8gdGhlIHBhZ2UsIG9ubHkgaWYgdGhpcyBwYWdlJ3MgcGF0aCBpcyBtYXJrZWQgYXMgYVxuICogY2FtcGFpZ24uXG4gKlxuICogaHR0cDovL3d3dy5jdXJlYml0LmNvbS9kb2NzL2FmZmlsaWF0ZS9yZWdpc3RyYXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DdXJlYml0LnByb3RvdHlwZS5pbmplY3RJbnRvSWQgPSBmdW5jdGlvbih1cmwsIGlkLCBmbil7XG4gIHZhciBzZXJ2ZXIgPSB0aGlzLm9wdGlvbnMuc2VydmVyO1xuICB3aGVuKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgfSwgZnVuY3Rpb24oKXtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIG9ubG9hZChzY3JpcHQsIGZuKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENhbXBhaWduIHRhZ3MuXG4gKlxuICogQHBhcmFtIHtQYWdlfSBwYWdlXG4gKi9cblxuQ3VyZWJpdC5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgY2FtcGFpZ25zID0gdGhpcy5vcHRpb25zLmNhbXBhaWducztcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmICghY2FtcGFpZ25zW3BhdGhdKSByZXR1cm47XG5cbiAgdmFyIHRhZ3MgPSAoY2FtcGFpZ25zW3BhdGhdIHx8ICcnKS5zcGxpdCgnLCcpO1xuICBpZiAoIXRhZ3MubGVuZ3RoKSByZXR1cm47XG5cbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIHJlc3BvbnNpdmU6IHRoaXMub3B0aW9ucy5yZXNwb25zaXZlLFxuICAgIGRldmljZTogdGhpcy5vcHRpb25zLmRldmljZSxcbiAgICBjYW1wYWlnbl90YWdzOiB0YWdzLFxuICAgIGlmcmFtZToge1xuICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5pZnJhbWVXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmlmcmFtZUhlaWdodCxcbiAgICAgIGlkOiB0aGlzLm9wdGlvbnMuaWZyYW1lSWQsXG4gICAgICBmcmFtZWJvcmRlcjogdGhpcy5vcHRpb25zLmlmcmFtZUJvcmRlcixcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5vcHRpb25zLmluc2VydEludG9JZFxuICAgIH1cbiAgfTtcblxuICB2YXIgaWRlbnRpZnkgPSBuZXcgSWRlbnRpZnkoe1xuICAgIHVzZXJJZDogdXNlci5pZCgpLFxuICAgIHRyYWl0czogdXNlci50cmFpdHMoKVxuICB9KTtcblxuICAvLyBpZiB3ZSBoYXZlIGFuIGVtYWlsLCBhZGQgYW55IGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyXG4gIGlmIChpZGVudGlmeS5lbWFpbCgpKSB7XG4gICAgc2V0dGluZ3MuYWZmaWxpYXRlX21lbWJlciA9IHtcbiAgICAgIGVtYWlsOiBpZGVudGlmeS5lbWFpbCgpLFxuICAgICAgZmlyc3RfbmFtZTogaWRlbnRpZnkuZmlyc3ROYW1lKCksXG4gICAgICBsYXN0X25hbWU6IGlkZW50aWZ5Lmxhc3ROYW1lKCksXG4gICAgICBjdXN0b21lcl9pZDogaWRlbnRpZnkudXNlcklkKClcbiAgICB9O1xuICB9XG5cbiAgcHVzaCgncmVnaXN0ZXJfYWZmaWxpYXRlJywgc2V0dGluZ3MpO1xufTtcblxuLyoqXG4gKiBDb21wbGV0ZWQgb3JkZXIuXG4gKlxuICogRmlyZSB0aGUgQ3VyZWJpdCBgcmVnaXN0ZXJfcHVyY2hhc2VgIHdpdGggdGhlIG9yZGVyIGRldGFpbHMgYW5kIGl0ZW1zLlxuICpcbiAqIGh0dHBzOi8vd3d3LmN1cmViaXQuY29tL2RvY3MvZWNvbW1lcmNlL2N1c3RvbVxuICpcbiAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gKi9cblxuQ3VyZWJpdC5wcm90b3R5cGUuY29tcGxldGVkT3JkZXIgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBvcmRlcklkID0gdHJhY2sub3JkZXJJZCgpO1xuICB2YXIgcHJvZHVjdHMgPSB0cmFjay5wcm9kdWN0cygpO1xuICB2YXIgcHJvcHMgPSB0cmFjay5wcm9wZXJ0aWVzKCk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICB2YXIgaWRlbnRpZnkgPSBuZXcgSWRlbnRpZnkoe1xuICAgIHRyYWl0czogdXNlci50cmFpdHMoKSxcbiAgICB1c2VySWQ6IHVzZXIuaWQoKVxuICB9KTtcblxuICBlYWNoKHByb2R1Y3RzLCBmdW5jdGlvbihwcm9kdWN0KXtcbiAgICB2YXIgdHJhY2sgPSBuZXcgVHJhY2soeyBwcm9wZXJ0aWVzOiBwcm9kdWN0IH0pO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgcHJvZHVjdF9pZDogdHJhY2suaWQoKSB8fCB0cmFjay5za3UoKSxcbiAgICAgIHF1YW50aXR5OiB0cmFjay5xdWFudGl0eSgpLFxuICAgICAgaW1hZ2VfdXJsOiBwcm9kdWN0LmltYWdlLFxuICAgICAgcHJpY2U6IHRyYWNrLnByaWNlKCksXG4gICAgICB0aXRsZTogdHJhY2submFtZSgpLFxuICAgICAgdXJsOiBwcm9kdWN0LnVybCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcHVzaCgncmVnaXN0ZXJfcHVyY2hhc2UnLCB7XG4gICAgb3JkZXJfZGF0ZTogaXNvKHByb3BzLmRhdGUgfHwgbmV3IERhdGUoKSksXG4gICAgb3JkZXJfbnVtYmVyOiBvcmRlcklkLFxuICAgIGNvdXBvbl9jb2RlOiB0cmFjay5jb3Vwb24oKSxcbiAgICBzdWJ0b3RhbDogdHJhY2sudG90YWwoKSxcbiAgICBjdXN0b21lcl9pZDogaWRlbnRpZnkudXNlcklkKCksXG4gICAgZmlyc3RfbmFtZTogaWRlbnRpZnkuZmlyc3ROYW1lKCksXG4gICAgbGFzdF9uYW1lOiBpZGVudGlmeS5sYXN0TmFtZSgpLFxuICAgIGVtYWlsOiBpZGVudGlmeS5lbWFpbCgpLFxuICAgIGl0ZW1zOiBpdGVtc1xuICB9KTtcbn07XG4iLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQ3JhenlFZ2cpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYENyYXp5RWdnYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQ3JhenlFZ2cgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0NyYXp5IEVnZycpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdDRTInKVxuICAub3B0aW9uKCdhY2NvdW50TnVtYmVyJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5DcmF6eUVnZy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuQ3JhenlFZ2cucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISB3aW5kb3cuQ0UyO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBDcmF6eSBFZ2cgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkNyYXp5RWdnLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB2YXIgbnVtYmVyID0gdGhpcy5vcHRpb25zLmFjY291bnROdW1iZXI7XG4gIHZhciBwYXRoID0gbnVtYmVyLnNsaWNlKDAsNCkgKyAnLycgKyBudW1iZXIuc2xpY2UoNCk7XG4gIHZhciBjYWNoZSA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkvMzYwMDAwMCk7XG4gIHZhciB1cmwgPSAnLy9kbm41MDZ5cmJhZ3JnLmNsb3VkZnJvbnQubmV0L3BhZ2VzL3NjcmlwdHMvJyArIHBhdGggKyAnLmpzPycgKyBjYWNoZTtcbiAgbG9hZCh1cmwsIGNhbGxiYWNrKTtcbn07IiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKENvbXNjb3JlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBDb21zY29yZWAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIENvbXNjb3JlID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdjb21TY29yZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfY29tc2NvcmUnKVxuICAuZ2xvYmFsKCdDT01TQ09SRScpXG4gIC5vcHRpb24oJ2MxJywgJzInKVxuICAub3B0aW9uKCdjMicsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuQ29tc2NvcmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9jb21zY29yZSA9IHdpbmRvdy5fY29tc2NvcmUgfHwgW3RoaXMub3B0aW9uc107XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Db21zY29yZS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhIHdpbmRvdy5DT01TQ09SRTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkNvbXNjb3JlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKHtcbiAgICBodHRwOiAnaHR0cDovL2Iuc2NvcmVjYXJkcmVzZWFyY2guY29tL2JlYWNvbi5qcycsXG4gICAgaHR0cHM6ICdodHRwczovL3NiLnNjb3JlY2FyZHJlc2VhcmNoLmNvbS9iZWFjb24uanMnXG4gIH0sIGNhbGxiYWNrKTtcbn07IiwiXG52YXIgSWRlbnRpZnkgPSByZXF1aXJlKCdmYWNhZGUnKS5JZGVudGlmeTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgaXMgPSByZXF1aXJlKCdpcycpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIFVzZXIgcmVmZXJlbmNlLlxuICovXG5cbnZhciB1c2VyO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKENsaWNreSk7XG4gIHVzZXIgPSBhbmFseXRpY3MudXNlcigpOyAvLyBzdG9yZSBmb3IgbGF0ZXJcbn07XG5cbi8qKlxuICogRXhwb3NlIGBDbGlja3lgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBDbGlja3kgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0NsaWNreScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdjbGlja3knKVxuICAuZ2xvYmFsKCdjbGlja3lfc2l0ZV9pZHMnKVxuICAuZ2xvYmFsKCdjbGlja3lfY3VzdG9tJylcbiAgLm9wdGlvbignc2l0ZUlkJywgbnVsbCk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vY2xpY2t5LmNvbS9oZWxwL2N1c3RvbWl6YXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkNsaWNreS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuY2xpY2t5X3NpdGVfaWRzID0gd2luZG93LmNsaWNreV9zaXRlX2lkcyB8fCBbdGhpcy5vcHRpb25zLnNpdGVJZF07XG4gIHRoaXMuaWRlbnRpZnkobmV3IElkZW50aWZ5KHtcbiAgICB1c2VySWQ6IHVzZXIuaWQoKSxcbiAgICB0cmFpdHM6IHVzZXIudHJhaXRzKClcbiAgfSkpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuQ2xpY2t5LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMub2JqZWN0KHdpbmRvdy5jbGlja3kpO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBDbGlja3kgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkNsaWNreS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9zdGF0aWMuZ2V0Y2xpY2t5LmNvbS9qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBodHRwOi8vY2xpY2t5LmNvbS9oZWxwL2N1c3RvbWl6YXRpb24jL2hlbHAvY3VzdG9tL21hbnVhbFxuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkNsaWNreS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgcHJvcGVydGllcyA9IHBhZ2UucHJvcGVydGllcygpO1xuICB2YXIgY2F0ZWdvcnkgPSBwYWdlLmNhdGVnb3J5KCk7XG4gIHZhciBuYW1lID0gcGFnZS5mdWxsTmFtZSgpO1xuICB3aW5kb3cuY2xpY2t5LmxvZyhwcm9wZXJ0aWVzLnBhdGgsIG5hbWUgfHwgcHJvcGVydGllcy50aXRsZSk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIEBwYXJhbSB7SWRlbnRpZnl9IGlkIChvcHRpb25hbClcbiAqL1xuXG5DbGlja3kucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB3aW5kb3cuY2xpY2t5X2N1c3RvbSA9IHdpbmRvdy5jbGlja3lfY3VzdG9tIHx8IHt9O1xuICB3aW5kb3cuY2xpY2t5X2N1c3RvbS5zZXNzaW9uID0gd2luZG93LmNsaWNreV9jdXN0b20uc2Vzc2lvbiB8fCB7fTtcbiAgZXh0ZW5kKHdpbmRvdy5jbGlja3lfY3VzdG9tLnNlc3Npb24sIGlkZW50aWZ5LnRyYWl0cygpKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogaHR0cDovL2NsaWNreS5jb20vaGVscC9jdXN0b21pemF0aW9uIy9oZWxwL2N1c3RvbS9tYW51YWxcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSBldmVudFxuICovXG5cbkNsaWNreS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHdpbmRvdy5jbGlja3kuZ29hbCh0cmFjay5ldmVudCgpLCB0cmFjay5yZXZlbnVlKCkpO1xufTtcbiIsIlxudmFyIGRhdGUgPSByZXF1aXJlKCdsb2FkLWRhdGUnKTtcbnZhciBkb21pZnkgPSByZXF1aXJlKCdkb21pZnknKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgdXNlSHR0cHMgPSByZXF1aXJlKCd1c2UtaHR0cHMnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBvbkJvZHkgPSByZXF1aXJlKCdvbi1ib2R5Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQ2xpY2tUYWxlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBDbGlja1RhbGVgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBDbGlja1RhbGUgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0NsaWNrVGFsZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdXUkluaXRUaW1lJylcbiAgLmdsb2JhbCgnQ2xpY2tUYWxlJylcbiAgLmdsb2JhbCgnQ2xpY2tUYWxlU2V0VUlEJylcbiAgLmdsb2JhbCgnQ2xpY2tUYWxlRmllbGQnKVxuICAuZ2xvYmFsKCdDbGlja1RhbGVFdmVudCcpXG4gIC5vcHRpb24oJ2h0dHBDZG5VcmwnLCAnaHR0cDovL3MuY2xpY2t0YWxlLm5ldC9XUmUwLmpzJylcbiAgLm9wdGlvbignaHR0cHNDZG5VcmwnLCAnJylcbiAgLm9wdGlvbigncHJvamVjdElkJywgJycpXG4gIC5vcHRpb24oJ3JlY29yZGluZ1JhdGlvJywgMC4wMSlcbiAgLm9wdGlvbigncGFydGl0aW9uSWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vd2lraS5jbGlja3RhbGUuY29tL0FydGljbGUvSmF2YVNjcmlwdF9BUElcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkNsaWNrVGFsZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgd2luZG93LldSSW5pdFRpbWUgPSBkYXRlLmdldFRpbWUoKTtcblxuICBvbkJvZHkoZnVuY3Rpb24oYm9keSl7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkb21pZnkoJzxkaXYgaWQ9XCJDbGlja1RhbGVEaXZcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JykpO1xuICB9KTtcblxuICB0aGlzLmxvYWQoZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cuQ2xpY2tUYWxlKG9wdGlvbnMucHJvamVjdElkLCBvcHRpb25zLnJlY29yZGluZ1JhdGlvLCBvcHRpb25zLnBhcnRpdGlvbklkKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkNsaWNrVGFsZS5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzLmZuKHdpbmRvdy5DbGlja1RhbGUpO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBDbGlja1RhbGUgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkNsaWNrVGFsZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIGh0dHAgPSB0aGlzLm9wdGlvbnMuaHR0cENkblVybDtcbiAgdmFyIGh0dHBzID0gdGhpcy5vcHRpb25zLmh0dHBzQ2RuVXJsO1xuICBpZiAodXNlSHR0cHMoKSAmJiAhaHR0cHMpIHJldHVybiB0aGlzLmRlYnVnKCdodHRwcyBvcHRpb24gcmVxdWlyZWQnKTtcbiAgbG9hZCh7IGh0dHA6IGh0dHAsIGh0dHBzOiBodHRwcyB9LCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIElkZW50aWZ5LlxuICpcbiAqIGh0dHA6Ly93aWtpLmNsaWNrdGFsZS5jb20vQXJ0aWNsZS9DbGlja1RhbGVUYWcjQ2xpY2tUYWxlU2V0VUlEXG4gKiBodHRwOi8vd2lraS5jbGlja3RhbGUuY29tL0FydGljbGUvQ2xpY2tUYWxlVGFnI0NsaWNrVGFsZUZpZWxkXG4gKlxuICogQHBhcmFtIHtJZGVudGlmeX0gaWRlbnRpZnlcbiAqL1xuXG5DbGlja1RhbGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgaWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgd2luZG93LkNsaWNrVGFsZVNldFVJRChpZCk7XG4gIGVhY2goaWRlbnRpZnkudHJhaXRzKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHdpbmRvdy5DbGlja1RhbGVGaWVsZChrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyYWNrLlxuICpcbiAqIGh0dHA6Ly93aWtpLmNsaWNrdGFsZS5jb20vQXJ0aWNsZS9DbGlja1RhbGVUYWcjQ2xpY2tUYWxlRXZlbnRcbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICovXG5cbkNsaWNrVGFsZS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHdpbmRvdy5DbGlja1RhbGVFdmVudCh0cmFjay5ldmVudCgpKTtcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcHVzaCA9IHJlcXVpcmUoJ2dsb2JhbC1xdWV1ZScpKCdfY2JxJyk7XG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIEhPUFxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFN1cHBvcnRlZCBldmVudHNcbiAqL1xuXG52YXIgc3VwcG9ydGVkID0ge1xuICBhY3RpdmF0aW9uOiB0cnVlLFxuICBjaGFuZ2VQbGFuOiB0cnVlLFxuICByZWdpc3RlcjogdHJ1ZSxcbiAgcmVmdW5kOiB0cnVlLFxuICBjaGFyZ2U6IHRydWUsXG4gIGNhbmNlbDogdHJ1ZSxcbiAgbG9naW46IHRydWVcbn07XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQ2h1cm5CZWUpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYENodXJuQmVlYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQ2h1cm5CZWUgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0NodXJuQmVlJylcbiAgLnJlYWR5T25Jbml0aWFsaXplKClcbiAgLmdsb2JhbCgnX2NicScpXG4gIC5nbG9iYWwoJ0NodXJuQmVlJylcbiAgLm9wdGlvbignZXZlbnRzJywge30pXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHBzOi8vY2h1cm5iZWUuY29tL2RvY3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkNodXJuQmVlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHB1c2goJ19zZXRBcGlLZXknLCB0aGlzLm9wdGlvbnMuYXBpS2V5KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkNodXJuQmVlLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93LkNodXJuQmVlO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBDaHVybkJlZSBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuQ2h1cm5CZWUucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihmbil7XG4gIGxvYWQoJy8vYXBpLmNodXJuYmVlLmNvbS9jYi5qcycsIGZuKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gZXZlbnRcbiAqL1xuXG5DaHVybkJlZS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBldmVudHMgPSB0aGlzLm9wdGlvbnMuZXZlbnRzO1xuICB2YXIgZXZlbnQgPSB0cmFjay5ldmVudCgpO1xuICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBldmVudCkpIGV2ZW50ID0gZXZlbnRzW2V2ZW50XTtcbiAgaWYgKHRydWUgIT0gc3VwcG9ydGVkW2V2ZW50XSkgcmV0dXJuO1xuICBwdXNoKGV2ZW50LCB0cmFjay5wcm9wZXJ0aWVzKHsgcmV2ZW51ZTogJ2Ftb3VudCcgfSkpO1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBvbkJvZHkgPSByZXF1aXJlKCdvbi1ib2R5Jyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQ2hhcnRiZWF0KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBDaGFydGJlYXRgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBDaGFydGJlYXQgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0NoYXJ0YmVhdCcpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfc2ZfYXN5bmNfY29uZmlnJylcbiAgLmdsb2JhbCgnX3NmX2VuZHB0JylcbiAgLmdsb2JhbCgncFNVUEVSRkxZJylcbiAgLm9wdGlvbignZG9tYWluJywgJycpXG4gIC5vcHRpb24oJ3VpZCcsIG51bGwpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2NoYXJ0YmVhdC5jb20vZG9jcy9jb25maWd1cmF0aW9uX3ZhcmlhYmxlcy9cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkNoYXJ0YmVhdC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuX3NmX2FzeW5jX2NvbmZpZyA9IHRoaXMub3B0aW9ucztcbiAgb25Cb2R5KGZ1bmN0aW9uKCl7XG4gICAgd2luZG93Ll9zZl9lbmRwdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9KTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkNoYXJ0YmVhdC5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuICEhIHdpbmRvdy5wU1VQRVJGTFk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIENoYXJ0YmVhdCBsaWJyYXJ5LlxuICpcbiAqIGh0dHA6Ly9jaGFydGJlYXQuY29tL2RvY3MvYWRkaW5nX3RoZV9jb2RlL1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuQ2hhcnRiZWF0LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKHtcbiAgICBodHRwczogJ2h0dHBzOi8vYTI0OC5lLmFrYW1haS5uZXQvY2hhcnRiZWF0LmRvd25sb2FkLmFrYW1haS5jb20vMTAyNTA4L2pzL2NoYXJ0YmVhdC5qcycsXG4gICAgaHR0cDogJ2h0dHA6Ly9zdGF0aWMuY2hhcnRiZWF0LmNvbS9qcy9jaGFydGJlYXQuanMnXG4gIH0sIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBodHRwOi8vY2hhcnRiZWF0LmNvbS9kb2NzL2hhbmRsaW5nX3ZpcnR1YWxfcGFnZV9jaGFuZ2VzL1xuICpcbiAqIEBwYXJhbSB7UGFnZX0gcGFnZVxuICovXG5cbkNoYXJ0YmVhdC5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB2YXIgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIG5hbWUgPSBwYWdlLmZ1bGxOYW1lKCk7XG4gIHdpbmRvdy5wU1VQRVJGTFkudmlydHVhbFBhZ2UocHJvcHMucGF0aCwgbmFtZSB8fCBwcm9wcy50aXRsZSk7XG59O1xuIiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBvbkVycm9yID0gcmVxdWlyZSgnb24tZXJyb3InKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihCdWdzbmFnKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBCdWdzbmFnYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQnVnc25hZyA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignQnVnc25hZycpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ0J1Z3NuYWcnKVxuICAub3B0aW9uKCdhcGlLZXknLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwczovL2J1Z3NuYWcuY29tL2RvY3Mvbm90aWZpZXJzL2pzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5CdWdzbmFnLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5CdWdzbmFnLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMub2JqZWN0KHdpbmRvdy5CdWdzbmFnKTtcbn07XG5cbi8qKlxuICogTG9hZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAob3B0aW9uYWwpXG4gKi9cblxuQnVnc25hZy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIGFwaUtleSA9IHRoaXMub3B0aW9ucy5hcGlLZXk7XG4gIGxvYWQoJy8vZDJ3eThmN2E5dXJzbm0uY2xvdWRmcm9udC5uZXQvYnVnc25hZy0yLm1pbi5qcycsIGZ1bmN0aW9uKGVycil7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgd2luZG93LkJ1Z3NuYWcuYXBpS2V5ID0gYXBpS2V5O1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0lkZW50aWZ5fSBpZGVudGlmeVxuICovXG5cbkJ1Z3NuYWcucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB3aW5kb3cuQnVnc25hZy5tZXRhRGF0YSA9IHdpbmRvdy5CdWdzbmFnLm1ldGFEYXRhIHx8IHt9O1xuICBleHRlbmQod2luZG93LkJ1Z3NuYWcubWV0YURhdGEsIGlkZW50aWZ5LnRyYWl0cygpKTtcbn07XG4iLCJcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQnVnSGVyZCk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgQnVnSGVyZGAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEJ1Z0hlcmQgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0J1Z0hlcmQnKVxuICAuYXNzdW1lc1BhZ2V2aWV3KClcbiAgLnJlYWR5T25Mb2FkKClcbiAgLmdsb2JhbCgnQnVnSGVyZENvbmZpZycpXG4gIC5nbG9iYWwoJ19idWdIZXJkJylcbiAgLm9wdGlvbignYXBpS2V5JywgJycpXG4gIC5vcHRpb24oJ3Nob3dGZWVkYmFja1RhYicsIHRydWUpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL3N1cHBvcnQuYnVnaGVyZC5jb20vaG9tZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuQnVnSGVyZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuQnVnSGVyZENvbmZpZyA9IHsgZmVlZGJhY2s6IHsgaGlkZTogIXRoaXMub3B0aW9ucy5zaG93RmVlZGJhY2tUYWIgfX07XG4gIHRoaXMubG9hZCgpO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5CdWdIZXJkLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93Ll9idWdIZXJkO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBCdWdIZXJkIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5CdWdIZXJkLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsb2FkKCcvL3d3dy5idWdoZXJkLmNvbS9zaWRlYmFydjIuanM/YXBpa2V5PScgKyB0aGlzLm9wdGlvbnMuYXBpS2V5LCBjYWxsYmFjayk7XG59OyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgVHJhY2sgPSByZXF1aXJlKCdmYWNhZGUnKS5UcmFjaztcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnZWFjaCcpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEJyb250byk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgQnJvbnRvYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQnJvbnRvID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdCcm9udG8nKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdfX2J0YScpXG4gIC5vcHRpb24oJ3NpdGVJZCcsICcnKVxuICAub3B0aW9uKCdob3N0JywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL2Jyb250by5jb20vcHJvZHVjdC1ibG9nL2ZlYXR1cmVzL3VzaW5nLWNvbnZlcnNpb24tdHJhY2tpbmctcHJpdmF0ZS1kb21haW4jLlV0X1ZrMlQ4S3FCXG4gKiBodHRwOi8vYnJvbnRvLmNvbS9wcm9kdWN0LWJsb2cvZmVhdHVyZXMvamF2YXNjcmlwdC1jb252ZXJzaW9uLXRyYWNraW5nLXNldHVwLWFuZC1yZXBvcnRpbmcjLlV0X1ZobVQ4S3FCXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5Ccm9udG8ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkJyb250by5wcm90b3R5cGUubG9hZGVkID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYnRhO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBCcm9udG8gbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbkJyb250by5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBsb2FkKCcvL3AuYm0yMy5jb20vYnRhLmpzJywgZnVuY3Rpb24oZXJyKXtcbiAgICBpZiAoZXJyKSByZXR1cm4gZm4oZXJyKTtcbiAgICB2YXIgb3B0cyA9IHNlbGYub3B0aW9ucztcbiAgICBzZWxmLmJ0YSA9IG5ldyB3aW5kb3cuX19idGEob3B0cy5zaXRlSWQpO1xuICAgIGlmIChvcHRzLmhvc3QpIHNlbGYuYnRhLnNldEhvc3Qob3B0cy5ob3N0KTtcbiAgICBmbigpO1xuICB9KTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gZXZlbnRcbiAqL1xuXG5Ccm9udG8ucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgcmV2ZW51ZSA9IHRyYWNrLnJldmVudWUoKTtcbiAgdmFyIGV2ZW50ID0gdHJhY2suZXZlbnQoKTtcbiAgdmFyIHR5cGUgPSAnbnVtYmVyJyA9PSB0eXBlb2YgcmV2ZW51ZSA/ICckJyA6ICd0JztcbiAgdGhpcy5idGEuYWRkQ29udmVyc2lvbkxlZ2FjeSh0eXBlLCBldmVudCwgcmV2ZW51ZSk7XG59O1xuXG4vKipcbiAqIENvbXBsZXRlZCBvcmRlci5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQnJvbnRvLnByb3RvdHlwZS5jb21wbGV0ZWRPcmRlciA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIHByb2R1Y3RzID0gdHJhY2sucHJvZHVjdHMoKTtcbiAgdmFyIHByb3BzID0gdHJhY2sucHJvcGVydGllcygpO1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICAvLyBpdGVtc1xuICBlYWNoKHByb2R1Y3RzLCBmdW5jdGlvbihwcm9kdWN0KXtcbiAgICB2YXIgdHJhY2sgPSBuZXcgVHJhY2soeyBwcm9wZXJ0aWVzOiBwcm9kdWN0IH0pO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgaXRlbV9pZDogdHJhY2suaWQoKSB8fCB0cmFjay5za3UoKSxcbiAgICAgIGRlc2M6IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgdHJhY2submFtZSgpLFxuICAgICAgcXVhbnRpdHk6IHRyYWNrLnF1YW50aXR5KCksXG4gICAgICBhbW91bnQ6IHRyYWNrLnByaWNlKCksXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGFkZCBjb252ZXJzaW9uXG4gIHRoaXMuYnRhLmFkZENvbnZlcnNpb24oe1xuICAgIG9yZGVyX2lkOiB0cmFjay5vcmRlcklkKCksXG4gICAgZGF0ZTogcHJvcHMuZGF0ZSB8fCBuZXcgRGF0ZSxcbiAgICBpdGVtczogaXRlbXNcbiAgfSk7XG59O1xuIiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQmluZyk7XG59O1xuXG4vKipcbiAqIEhPUFxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEV4cG9zZSBgQmluZ2BcbiAqL1xuXG52YXIgQmluZyA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignQmluZyBBZHMnKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAub3B0aW9uKCdzaXRlSWQnLCAnJylcbiAgLm9wdGlvbignZG9tYWluSWQnLCAnJylcbiAgLm9wdGlvbignZ29hbHMnLCB7fSk7XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5CaW5nLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIGdvYWxzID0gdGhpcy5vcHRpb25zLmdvYWxzO1xuICB2YXIgdHJhaXRzID0gdHJhY2sudHJhaXRzKCk7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIGlmICghaGFzLmNhbGwoZ29hbHMsIGV2ZW50KSkgcmV0dXJuO1xuICB2YXIgZ29hbCA9IGdvYWxzW2V2ZW50XTtcbiAgcmV0dXJuIGV4cG9ydHMubG9hZChnb2FsLCB0cmFjay5yZXZlbnVlKCksIHRoaXMub3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIExvYWQgY29udmVyc2lvbi5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBnb2FsXG4gKiBAcGFyYW0ge051bWJlcn0gcmV2ZW51ZVxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbmN5XG4gKiBAcmV0dXJuIHtJRnJhbWV9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmxvYWQgPSBmdW5jdGlvbihnb2FsLCByZXZlbnVlLCBvcHRpb25zKXtcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICBpZnJhbWUuc3JjID0gJy8vZmxleC5tc24uY29tL21zdGFnL3RhZy8nICsgb3B0aW9ucy5zaXRlSWRcbiAgICArICcvYW5hbHl0aWNzLmh0bWwnXG4gICAgKyAnP2RvbWFpbklkPScgKyBvcHRpb25zLmRvbWFpbklkXG4gICAgKyAnJnJldmVudWU9JyArIHJldmVudWUgfHwgMFxuICAgICsgJyZhY3Rpb25pZD0nICsgZ29hbDtcbiAgICArICcmZGVkdXA9MSdcbiAgICArICcmdHlwZT0xJztcbiAgaWZyYW1lLndpZHRoID0gMTtcbiAgaWZyYW1lLmhlaWdodCA9IDE7XG4gIHJldHVybiBpZnJhbWU7XG59O1xuIiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGlzID0gcmVxdWlyZSgnaXMnKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcbnZhciBub29wID0gZnVuY3Rpb24oKXt9O1xudmFyIG9uQm9keSA9IHJlcXVpcmUoJ29uLWJvZHknKTtcblxuLyoqXG4gKiBVc2VyIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdXNlcjtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihBd2Vzb21hdGljKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7IC8vIHN0b3JlIGZvciBsYXRlclxufTtcblxuLyoqXG4gKiBFeHBvc2UgYEF3ZXNvbWF0aWNgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBBd2Vzb21hdGljID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdBd2Vzb21hdGljJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5nbG9iYWwoJ0F3ZXNvbWF0aWMnKVxuICAuZ2xvYmFsKCdBd2Vzb21hdGljU2V0dGluZ3MnKVxuICAuZ2xvYmFsKCdBd3NtU2V0dXAnKVxuICAuZ2xvYmFsKCdBd3NtVG1wJylcbiAgLm9wdGlvbignYXBwSWQnLCAnJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkF3ZXNvbWF0aWMucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgaWQgPSB1c2VyLmlkKCk7XG4gIHZhciBvcHRpb25zID0gdXNlci50cmFpdHMoKTtcblxuICBvcHRpb25zLmFwcElkID0gdGhpcy5vcHRpb25zLmFwcElkO1xuICBpZiAoaWQpIG9wdGlvbnMudXNlcl9pZCA9IGlkO1xuXG4gIHRoaXMubG9hZChmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5Bd2Vzb21hdGljLmluaXRpYWxpemUob3B0aW9ucywgZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuZW1pdCgncmVhZHknKTsgLy8gbmVlZCB0byB3YWl0IGZvciBpbml0aWFsaXplIHRvIGNhbGxiYWNrXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkZWQ/XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5Bd2Vzb21hdGljLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gaXMub2JqZWN0KHdpbmRvdy5Bd2Vzb21hdGljKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgQXdlc29tYXRpYyBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cblxuQXdlc29tYXRpYy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIHVybCA9ICdodHRwczovLzFjODE3YjdhMTViNjk0MTMzN2MwLWRmZjliNWY0YWRiN2JhMjgyNTk2MzFlOTljM2YzNjkxLnNzbC5jZjIucmFja2Nkbi5jb20vZ2VuL2VtYmVkLmpzJztcbiAgbG9hZCh1cmwsIGNhbGxiYWNrKTtcbn07IiwiXG52YXIgaW50ZWdyYXRpb24gPSByZXF1aXJlKCdpbnRlZ3JhdGlvbicpO1xudmFyIGxvYWQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG4vKipcbiAqIFVzZXIgcmVmZXJlbmNlLlxuICovXG5cbnZhciB1c2VyO1xuXG4vKipcbiAqIEV4cG9zZSBwbHVnaW4uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZnVuY3Rpb24oYW5hbHl0aWNzKXtcbiAgYW5hbHl0aWNzLmFkZEludGVncmF0aW9uKEF3ZXNtKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7IC8vIHN0b3JlIGZvciBsYXRlclxufTtcblxuLyoqXG4gKiBFeHBvc2UgYEF3ZXNtYCBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQXdlc20gPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ2F3ZS5zbScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkxvYWQoKVxuICAuZ2xvYmFsKCdBV0VTTScpXG4gIC5vcHRpb24oJ2FwaUtleScsICcnKVxuICAub3B0aW9uKCdldmVudHMnLCB7fSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZS5cbiAqXG4gKiBodHRwOi8vZGV2ZWxvcGVycy5hd2Uuc20vZ3VpZGVzL2phdmFzY3JpcHQvXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VcbiAqL1xuXG5Bd2VzbS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICB3aW5kb3cuQVdFU00gPSB7IGFwaV9rZXk6IHRoaXMub3B0aW9ucy5hcGlLZXkgfTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkF3ZXNtLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93LkFXRVNNLl9leGlzdHM7XG59O1xuXG4vKipcbiAqIExvYWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5Bd2VzbS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgdmFyIGtleSA9IHRoaXMub3B0aW9ucy5hcGlLZXk7XG4gIGxvYWQoJy8vd2lkZ2V0cy5hd2Uuc20vdjMvd2lkZ2V0cy5qcz9rZXk9JyArIGtleSArICcmYXN5bmM9dHJ1ZScsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5Bd2VzbS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIHZhciBnb2FsID0gdGhpcy5vcHRpb25zLmV2ZW50c1tldmVudF07XG4gIGlmICghZ29hbCkgcmV0dXJuO1xuICB3aW5kb3cuQVdFU00uY29udmVydChnb2FsLCB0cmFjay5jZW50cygpLCBudWxsLCB1c2VyLmlkKCkpO1xufTtcbiIsIlxudmFyIGNhbGxiYWNrID0gcmVxdWlyZSgnY2FsbGJhY2snKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQW1wbGl0dWRlKTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBBbXBsaXR1ZGVgIGludGVncmF0aW9uLlxuICovXG5cbnZhciBBbXBsaXR1ZGUgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0FtcGxpdHVkZScpXG4gIC5hc3N1bWVzUGFnZXZpZXcoKVxuICAucmVhZHlPbkluaXRpYWxpemUoKVxuICAuZ2xvYmFsKCdhbXBsaXR1ZGUnKVxuICAub3B0aW9uKCdhcGlLZXknLCAnJylcbiAgLm9wdGlvbigndHJhY2tBbGxQYWdlcycsIGZhbHNlKVxuICAub3B0aW9uKCd0cmFja05hbWVkUGFnZXMnLCB0cnVlKVxuICAub3B0aW9uKCd0cmFja0NhdGVnb3JpemVkUGFnZXMnLCB0cnVlKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbXBsaXR1ZGUvQW1wbGl0dWRlLUphdmFzY3JpcHRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICovXG5cbkFtcGxpdHVkZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKHBhZ2Upe1xuICAoZnVuY3Rpb24oZSx0KXt2YXIgcj1lLmFtcGxpdHVkZXx8e307IHIuX3E9W107ZnVuY3Rpb24gaShlKXtyW2VdPWZ1bmN0aW9uKCl7ci5fcS5wdXNoKFtlXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKSk7fTt9IHZhciBzPVtcImluaXRcIixcImxvZ0V2ZW50XCIsXCJzZXRVc2VySWRcIixcInNldEdsb2JhbFVzZXJQcm9wZXJ0aWVzXCIsXCJzZXRWZXJzaW9uTmFtZVwiLFwic2V0RG9tYWluXCJdOyBmb3IgKHZhciBjPTA7YzxzLmxlbmd0aDtjKyspe2koc1tjXSk7fWUuYW1wbGl0dWRlPXI7fSkod2luZG93LGRvY3VtZW50KTtcbiAgd2luZG93LmFtcGxpdHVkZS5pbml0KHRoaXMub3B0aW9ucy5hcGlLZXkpO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuQW1wbGl0dWRlLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgKHdpbmRvdy5hbXBsaXR1ZGUgJiYgd2luZG93LmFtcGxpdHVkZS5vcHRpb25zKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgQW1wbGl0dWRlIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5BbXBsaXR1ZGUucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gIGxvYWQoJ2h0dHBzOi8vZDI0bjE1aG5id2h1aG4uY2xvdWRmcm9udC5uZXQvbGlicy9hbXBsaXR1ZGUtMS4xLW1pbi5qcycsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUGFnZS5cbiAqXG4gKiBAcGFyYW0ge1BhZ2V9IHBhZ2VcbiAqL1xuXG5BbXBsaXR1ZGUucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbihwYWdlKXtcbiAgdmFyIHByb3BlcnRpZXMgPSBwYWdlLnByb3BlcnRpZXMoKTtcbiAgdmFyIGNhdGVnb3J5ID0gcGFnZS5jYXRlZ29yeSgpO1xuICB2YXIgbmFtZSA9IHBhZ2UuZnVsbE5hbWUoKTtcbiAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gYWxsIHBhZ2VzXG4gIGlmIChvcHRzLnRyYWNrQWxsUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soKSk7XG4gIH1cblxuICAvLyBjYXRlZ29yaXplZCBwYWdlc1xuICBpZiAoY2F0ZWdvcnkgJiYgb3B0cy50cmFja0NhdGVnb3JpemVkUGFnZXMpIHtcbiAgICB0aGlzLnRyYWNrKHBhZ2UudHJhY2soY2F0ZWdvcnkpKTtcbiAgfVxuXG4gIC8vIG5hbWVkIHBhZ2VzXG4gIGlmIChuYW1lICYmIG9wdHMudHJhY2tOYW1lZFBhZ2VzKSB7XG4gICAgdGhpcy50cmFjayhwYWdlLnRyYWNrKG5hbWUpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZGVudGlmeS5cbiAqXG4gKiBAcGFyYW0ge0ZhY2FkZX0gaWRlbnRpZnlcbiAqL1xuXG5BbXBsaXR1ZGUucHJvdG90eXBlLmlkZW50aWZ5ID0gZnVuY3Rpb24oaWRlbnRpZnkpe1xuICB2YXIgaWQgPSBpZGVudGlmeS51c2VySWQoKTtcbiAgdmFyIHRyYWl0cyA9IGlkZW50aWZ5LnRyYWl0cygpO1xuICBpZiAoaWQpIHdpbmRvdy5hbXBsaXR1ZGUuc2V0VXNlcklkKGlkKTtcbiAgaWYgKHRyYWl0cykgd2luZG93LmFtcGxpdHVkZS5zZXRHbG9iYWxVc2VyUHJvcGVydGllcyh0cmFpdHMpO1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfSBldmVudFxuICovXG5cbkFtcGxpdHVkZS5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbih0cmFjayl7XG4gIHZhciBwcm9wcyA9IHRyYWNrLnByb3BlcnRpZXMoKTtcbiAgdmFyIGV2ZW50ID0gdHJhY2suZXZlbnQoKTtcbiAgd2luZG93LmFtcGxpdHVkZS5sb2dFdmVudChldmVudCwgcHJvcHMpO1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBsb2FkID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxuLyoqXG4gKiBFeHBvc2UgcGx1Z2luLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihBbGV4YSk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBBbGV4YSBpbnRlZ3JhdGlvbi5cbiAqL1xuXG52YXIgQWxleGEgPSBleHBvcnRzLkludGVncmF0aW9uID0gaW50ZWdyYXRpb24oJ0FsZXhhJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ19hdHJrX29wdHMnKVxuICAub3B0aW9uKCdhY2NvdW50JywgbnVsbClcbiAgLm9wdGlvbignZG9tYWluJywgJycpXG4gIC5vcHRpb24oJ2R5bmFtaWMnLCB0cnVlKTtcblxuLyoqXG4gKiBJbml0aWFsaXplLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuQWxleGEucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKXtcbiAgd2luZG93Ll9hdHJrX29wdHMgPSB7XG4gICAgYXRya19hY2N0OiB0aGlzLm9wdGlvbnMuYWNjb3VudCxcbiAgICBkb21haW46IHRoaXMub3B0aW9ucy5kb21haW4sXG4gICAgZHluYW1pYzogdGhpcy5vcHRpb25zLmR5bmFtaWNcbiAgfTtcbiAgdGhpcy5sb2FkKCk7XG59O1xuXG4vKipcbiAqIExvYWRlZD9cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkFsZXhhLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gISEgd2luZG93LmF0cms7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIEFsZXhhIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuXG5BbGV4YS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCgnLy9kMzFxYnYxY3RoY2Vjcy5jbG91ZGZyb250Lm5ldC9hdHJrLmpzJywgZnVuY3Rpb24oZXJyKXtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB3aW5kb3cuYXRyaygpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xufTtcbiIsIlxudmFyIG9uYm9keSA9IHJlcXVpcmUoJ29uLWJvZHknKTtcbnZhciBpbnRlZ3JhdGlvbiA9IHJlcXVpcmUoJ2ludGVncmF0aW9uJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG52YXIgZG9taWZ5ID0gcmVxdWlyZSgnZG9taWZ5Jyk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZ1bmN0aW9uKGFuYWx5dGljcyl7XG4gIGFuYWx5dGljcy5hZGRJbnRlZ3JhdGlvbihBZFdvcmRzKTtcbn07XG5cbi8qKlxuICogSE9QXG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogRXhwb3NlIGBBZFdvcmRzYFxuICovXG5cbnZhciBBZFdvcmRzID0gZXhwb3J0cy5JbnRlZ3JhdGlvbiA9IGludGVncmF0aW9uKCdBZFdvcmRzJylcbiAgLnJlYWR5T25Mb2FkKClcbiAgLm9wdGlvbignY29udmVyc2lvbklkJywgJycpXG4gIC5vcHRpb24oJ2V2ZW50cycsIHt9KTtcblxuLyoqXG4gKiBMb2FkXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQWRXb3Jkcy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGZuKXtcbiAgb25ib2R5KGZuKTtcbn07XG5cbi8qKlxuICogTG9hZGVkLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkFkV29yZHMucHJvdG90eXBlLmxvYWRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhISBkb2N1bWVudC5ib2R5O1xufTtcblxuLyoqXG4gKiBUcmFjay5cbiAqXG4gKiBAcGFyYW0ge1RyYWNrfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5BZFdvcmRzLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uKHRyYWNrKXtcbiAgdmFyIGlkID0gdGhpcy5vcHRpb25zLmNvbnZlcnNpb25JZDtcbiAgdmFyIGV2ZW50cyA9IHRoaXMub3B0aW9ucy5ldmVudHM7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIGlmICghaGFzLmNhbGwoZXZlbnRzLCBldmVudCkpIHJldHVybjtcbiAgcmV0dXJuIHRoaXMuY29udmVyc2lvbih7XG4gICAgdmFsdWU6IHRyYWNrLnJldmVudWUoKSB8fCAwLFxuICAgIGxhYmVsOiBldmVudHNbZXZlbnRdLFxuICAgIGNvbnZlcnNpb25JZDogaWRcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlcG9ydCBBZFdvcmRzIGNvbnZlcnNpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGdsb2JhbHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkFkV29yZHMucHJvdG90eXBlLmNvbnZlcnNpb24gPSBmdW5jdGlvbihvYmosIGZuKXtcbiAgaWYgKHRoaXMucmVwb3J0aW5nKSByZXR1cm4gdGhpcy53YWl0KG9iaik7XG4gIHRoaXMucmVwb3J0aW5nID0gdHJ1ZTtcbiAgdGhpcy5kZWJ1Zygnc2VuZGluZyAlbycsIG9iaik7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHdyaXRlID0gZG9jdW1lbnQud3JpdGU7XG4gIGRvY3VtZW50LndyaXRlID0gYXBwZW5kO1xuICB3aW5kb3cuZ29vZ2xlX2NvbnZlcnNpb25faWQgPSBvYmouY29udmVyc2lvbklkO1xuICB3aW5kb3cuZ29vZ2xlX2NvbnZlcnNpb25fbGFuZ3VhZ2UgPSAnZW4nO1xuICB3aW5kb3cuZ29vZ2xlX2NvbnZlcnNpb25fZm9ybWF0ID0gJzMnO1xuICB3aW5kb3cuZ29vZ2xlX2NvbnZlcnNpb25fY29sb3IgPSAnZmZmZmZmJztcbiAgd2luZG93Lmdvb2dsZV9jb252ZXJzaW9uX2xhYmVsID0gb2JqLmxhYmVsO1xuICB3aW5kb3cuZ29vZ2xlX2NvbnZlcnNpb25fdmFsdWUgPSBvYmoudmFsdWU7XG4gIHdpbmRvdy5nb29nbGVfcmVtYXJrZXRpbmdfb25seSA9IGZhbHNlO1xuICBsb2FkKCcvL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbS9wYWdlYWQvY29udmVyc2lvbi5qcycsIGZuKTtcblxuICBmdW5jdGlvbiBhcHBlbmQoc3RyKXtcbiAgICB2YXIgZWwgPSBkb21pZnkoc3RyKTtcbiAgICBpZiAoIWVsLnNyYykgcmV0dXJuIHdyaXRlKHN0cik7XG4gICAgaWYgKCEvZ29vZ2xlYWRzZXJ2aWNlcy8udGVzdChlbC5zcmMpKSByZXR1cm4gd3JpdGUoc3RyKTtcbiAgICBzZWxmLmRlYnVnKCdhcHBlbmQgJW8nLCBlbCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgZG9jdW1lbnQud3JpdGUgPSB3cml0ZTtcbiAgICBzZWxmLnJlcG9ydGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogV2FpdCB1bnRpbCBhIGNvbnZlcnNpb24gaXMgc2VudCB3aXRoIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5BZFdvcmRzLnByb3RvdHlwZS53YWl0ID0gZnVuY3Rpb24ob2JqKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICBzZWxmLmNvbnZlcnNpb24ob2JqKTtcbiAgfSwgNTApO1xufTtcbiIsIlxudmFyIGludGVncmF0aW9uID0gcmVxdWlyZSgnaW50ZWdyYXRpb24nKTtcbnZhciBpcyA9IHJlcXVpcmUoJ2lzJyk7XG52YXIgbG9hZCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbi8qKlxuICogVXNlciByZWZlcmVuY2UuXG4gKi9cblxudmFyIHVzZXI7XG5cbi8qKlxuICogSE9QXG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogRXhwb3NlIHBsdWdpbi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmdW5jdGlvbihhbmFseXRpY3Mpe1xuICBhbmFseXRpY3MuYWRkSW50ZWdyYXRpb24oQWRSb2xsKTtcbiAgdXNlciA9IGFuYWx5dGljcy51c2VyKCk7IC8vIHN0b3JlIGZvciBsYXRlclxufTtcblxuLyoqXG4gKiBFeHBvc2UgYEFkUm9sbGAgaW50ZWdyYXRpb24uXG4gKi9cblxudmFyIEFkUm9sbCA9IGV4cG9ydHMuSW50ZWdyYXRpb24gPSBpbnRlZ3JhdGlvbignQWRSb2xsJylcbiAgLmFzc3VtZXNQYWdldmlldygpXG4gIC5yZWFkeU9uTG9hZCgpXG4gIC5nbG9iYWwoJ19fYWRyb2xsX2xvYWRlZCcpXG4gIC5nbG9iYWwoJ2Fkcm9sbF9hZHZfaWQnKVxuICAuZ2xvYmFsKCdhZHJvbGxfcGl4X2lkJylcbiAgLmdsb2JhbCgnYWRyb2xsX2N1c3RvbV9kYXRhJylcbiAgLm9wdGlvbignZXZlbnRzJywge30pXG4gIC5vcHRpb24oJ2FkdklkJywgJycpXG4gIC5vcHRpb24oJ3BpeElkJywgJycpO1xuXG4vKipcbiAqIEluaXRpYWxpemUuXG4gKlxuICogaHR0cDovL3N1cHBvcnQuYWRyb2xsLmNvbS9nZXR0aW5nLXN0YXJ0ZWQtaW4tNC1lYXN5LXN0ZXBzLyNzdGVwLW9uZVxuICogaHR0cDovL3N1cHBvcnQuYWRyb2xsLmNvbS9lbmhhbmNlZC1jb252ZXJzaW9uLXRyYWNraW5nL1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlXG4gKi9cblxuQWRSb2xsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ocGFnZSl7XG4gIHdpbmRvdy5hZHJvbGxfYWR2X2lkID0gdGhpcy5vcHRpb25zLmFkdklkO1xuICB3aW5kb3cuYWRyb2xsX3BpeF9pZCA9IHRoaXMub3B0aW9ucy5waXhJZDtcbiAgaWYgKHVzZXIuaWQoKSkgd2luZG93LmFkcm9sbF9jdXN0b21fZGF0YSA9IHsgVVNFUl9JRDogdXNlci5pZCgpIH07XG4gIHdpbmRvdy5fX2Fkcm9sbF9sb2FkZWQgPSB0cnVlO1xuICB0aGlzLmxvYWQoKTtcbn07XG5cbi8qKlxuICogTG9hZGVkP1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuQWRSb2xsLnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gd2luZG93Ll9fYWRyb2xsO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBBZFJvbGwgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5cbkFkUm9sbC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgbG9hZCh7XG4gICAgaHR0cDogJ2h0dHA6Ly9hLmFkcm9sbC5jb20vai9yb3VuZHRyaXAuanMnLFxuICAgIGh0dHBzOiAnaHR0cHM6Ly9zLmFkcm9sbC5jb20vai9yb3VuZHRyaXAuanMnXG4gIH0sIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogVHJhY2suXG4gKlxuICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAqL1xuXG5BZFJvbGwucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24odHJhY2spe1xuICB2YXIgZXZlbnRzID0gdGhpcy5vcHRpb25zLmV2ZW50cztcbiAgdmFyIHRvdGFsID0gdHJhY2sucmV2ZW51ZSgpIHx8IHRyYWNrLnRvdGFsKCk7XG4gIHZhciBldmVudCA9IHRyYWNrLmV2ZW50KCk7XG4gIGlmIChoYXMuY2FsbChldmVudHMsIGV2ZW50KSkgZXZlbnQgPSBldmVudHNbZXZlbnRdO1xuICB3aW5kb3cuX19hZHJvbGwucmVjb3JkX3VzZXIoe1xuICAgIGFkcm9sbF9jb252ZXJzaW9uX3ZhbHVlX2luX2RvbGxhcnM6IHRvdGFsIHx8IDAsXG4gICAgb3JkZXJfaWQ6IHRyYWNrLm9yZGVySWQoKSB8fCAwLFxuICAgIGFkcm9sbF9zZWdtZW50czogZXZlbnRcbiAgfSk7XG59O1xuIiwiXG4vKipcbiAqIHRvU3RyaW5nIHJlZi5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFJldHVybiB0aGUgdHlwZSBvZiBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRnVuY3Rpb25dJzogcmV0dXJuICdmdW5jdGlvbic7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6IHJldHVybiAnYXJndW1lbnRzJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6IHJldHVybiAnc3RyaW5nJztcbiAgfVxuXG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50JztcbiAgaWYgKHZhbCA9PT0gT2JqZWN0KHZhbCkpIHJldHVybiAnb2JqZWN0JztcblxuICByZXR1cm4gdHlwZW9mIHZhbDtcbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gW1xuICByZXF1aXJlKCcuL2xpYi9hZHJvbGwnKSxcbiAgcmVxdWlyZSgnLi9saWIvYWR3b3JkcycpLFxuICByZXF1aXJlKCcuL2xpYi9hbGV4YScpLFxuICByZXF1aXJlKCcuL2xpYi9hbXBsaXR1ZGUnKSxcbiAgcmVxdWlyZSgnLi9saWIvYXdlc20nKSxcbiAgcmVxdWlyZSgnLi9saWIvYXdlc29tYXRpYycpLFxuICByZXF1aXJlKCcuL2xpYi9iaW5nLWFkcycpLFxuICByZXF1aXJlKCcuL2xpYi9icm9udG8nKSxcbiAgcmVxdWlyZSgnLi9saWIvYnVnaGVyZCcpLFxuICByZXF1aXJlKCcuL2xpYi9idWdzbmFnJyksXG4gIHJlcXVpcmUoJy4vbGliL2NoYXJ0YmVhdCcpLFxuICByZXF1aXJlKCcuL2xpYi9jaHVybmJlZScpLFxuICByZXF1aXJlKCcuL2xpYi9jbGlja3RhbGUnKSxcbiAgcmVxdWlyZSgnLi9saWIvY2xpY2t5JyksXG4gIHJlcXVpcmUoJy4vbGliL2NvbXNjb3JlJyksXG4gIHJlcXVpcmUoJy4vbGliL2NyYXp5LWVnZycpLFxuICByZXF1aXJlKCcuL2xpYi9jdXJlYml0JyksXG4gIHJlcXVpcmUoJy4vbGliL2N1c3RvbWVyaW8nKSxcbiAgcmVxdWlyZSgnLi9saWIvZHJpcCcpLFxuICByZXF1aXJlKCcuL2xpYi9lcnJvcmNlcHRpb24nKSxcbiAgcmVxdWlyZSgnLi9saWIvZXZlcmdhZ2UnKSxcbiAgcmVxdWlyZSgnLi9saWIvZmFjZWJvb2stYWRzJyksXG4gIHJlcXVpcmUoJy4vbGliL2ZveG1ldHJpY3MnKSxcbiAgcmVxdWlyZSgnLi9saWIvZnJvbnRsZWFmJyksXG4gIHJlcXVpcmUoJy4vbGliL2dhdWdlcycpLFxuICByZXF1aXJlKCcuL2xpYi9nZXQtc2F0aXNmYWN0aW9uJyksXG4gIHJlcXVpcmUoJy4vbGliL2dvb2dsZS1hbmFseXRpY3MnKSxcbiAgcmVxdWlyZSgnLi9saWIvZ29vZ2xlLXRhZy1tYW5hZ2VyJyksXG4gIHJlcXVpcmUoJy4vbGliL2dvc3F1YXJlZCcpLFxuICByZXF1aXJlKCcuL2xpYi9oZWFwJyksXG4gIHJlcXVpcmUoJy4vbGliL2hlbGxvYmFyJyksXG4gIHJlcXVpcmUoJy4vbGliL2hpdHRhaWwnKSxcbiAgcmVxdWlyZSgnLi9saWIvaHVic3BvdCcpLFxuICByZXF1aXJlKCcuL2xpYi9pbXByb3ZlbHknKSxcbiAgcmVxdWlyZSgnLi9saWIvaW5zcGVjdGxldCcpLFxuICByZXF1aXJlKCcuL2xpYi9pbnRlcmNvbScpLFxuICByZXF1aXJlKCcuL2xpYi9rZWVuLWlvJyksXG4gIHJlcXVpcmUoJy4vbGliL2tlbnNob28nKSxcbiAgcmVxdWlyZSgnLi9saWIva2lzc21ldHJpY3MnKSxcbiAgcmVxdWlyZSgnLi9saWIva2xhdml5bycpLFxuICByZXF1aXJlKCcuL2xpYi9sZWFkbGFuZGVyJyksXG4gIHJlcXVpcmUoJy4vbGliL2xpdmVjaGF0JyksXG4gIHJlcXVpcmUoJy4vbGliL2x1Y2t5LW9yYW5nZScpLFxuICByZXF1aXJlKCcuL2xpYi9seXRpY3MnKSxcbiAgcmVxdWlyZSgnLi9saWIvbWl4cGFuZWwnKSxcbiAgcmVxdWlyZSgnLi9saWIvbW9qbicpLFxuICByZXF1aXJlKCcuL2xpYi9tb3VzZWZsb3cnKSxcbiAgcmVxdWlyZSgnLi9saWIvbW91c2VzdGF0cycpLFxuICByZXF1aXJlKCcuL2xpYi9uYXZpbHl0aWNzJyksXG4gIHJlcXVpcmUoJy4vbGliL29sYXJrJyksXG4gIHJlcXVpcmUoJy4vbGliL29wdGltaXplbHknKSxcbiAgcmVxdWlyZSgnLi9saWIvcGVyZmVjdC1hdWRpZW5jZScpLFxuICByZXF1aXJlKCcuL2xpYi9waW5nZG9tJyksXG4gIHJlcXVpcmUoJy4vbGliL3Bpd2lrJyksXG4gIHJlcXVpcmUoJy4vbGliL3ByZWFjdCcpLFxuICByZXF1aXJlKCcuL2xpYi9xdWFsYXJvbycpLFxuICByZXF1aXJlKCcuL2xpYi9xdWFudGNhc3QnKSxcbiAgcmVxdWlyZSgnLi9saWIvcm9sbGJhcicpLFxuICByZXF1aXJlKCcuL2xpYi9zYWFzcXVhdGNoJyksXG4gIHJlcXVpcmUoJy4vbGliL3NlbnRyeScpLFxuICByZXF1aXJlKCcuL2xpYi9zbmFwZW5nYWdlJyksXG4gIHJlcXVpcmUoJy4vbGliL3NwaW5uYWtyJyksXG4gIHJlcXVpcmUoJy4vbGliL3RhcHN0cmVhbScpLFxuICByZXF1aXJlKCcuL2xpYi90cmFraW8nKSxcbiAgcmVxdWlyZSgnLi9saWIvdHdpdHRlci1hZHMnKSxcbiAgcmVxdWlyZSgnLi9saWIvdXNlcmN5Y2xlJyksXG4gIHJlcXVpcmUoJy4vbGliL3VzZXJmb3gnKSxcbiAgcmVxdWlyZSgnLi9saWIvdXNlcnZvaWNlJyksXG4gIHJlcXVpcmUoJy4vbGliL3Zlcm8nKSxcbiAgcmVxdWlyZSgnLi9saWIvdmlzdWFsLXdlYnNpdGUtb3B0aW1pemVyJyksXG4gIHJlcXVpcmUoJy4vbGliL3dlYmVuZ2FnZScpLFxuICByZXF1aXJlKCcuL2xpYi93b29wcmEnKSxcbiAgcmVxdWlyZSgnLi9saWIveWFuZGV4LW1ldHJpY2EnKVxuXTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0eXBlID0gcmVxdWlyZSgndHlwZScpO1xuXG4vKipcbiAqIEhPUCByZWZlcmVuY2UuXG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSXRlcmF0ZSB0aGUgZ2l2ZW4gYG9iamAgYW5kIGludm9rZSBgZm4odmFsLCBpKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBmbil7XG4gIHN3aXRjaCAodHlwZShvYmopKSB7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5KG9iaiwgZm4pO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIG9iai5sZW5ndGgpIHJldHVybiBhcnJheShvYmosIGZuKTtcbiAgICAgIHJldHVybiBvYmplY3Qob2JqLCBmbik7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmcob2JqLCBmbik7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBzdHJpbmcgY2hhcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZyhvYmosIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgZm4ob2JqLmNoYXJBdChpKSwgaSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdGVyYXRlIG9iamVjdCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3Qob2JqLCBmbikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgZm4oa2V5LCBvYmpba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSXRlcmF0ZSBhcnJheS1pc2guXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGFycmF5KG9iaiwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICBmbihvYmpbaV0sIGkpO1xuICB9XG59IiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGVhY2ggPSByZXF1aXJlKCdlYWNoJyk7XG52YXIgcGx1Z2luID0gcmVxdWlyZSgnLi9pbnRlZ3JhdGlvbnMuanMnKTtcblxuLyoqXG4gKiBFeHBvc2UgdGhlIGludGVncmF0aW9ucywgdXNpbmcgdGhlaXIgb3duIGBuYW1lYCBmcm9tIHRoZWlyIGBwcm90b3R5cGVgLlxuICovXG5cbmVhY2gocGx1Z2luLCBmdW5jdGlvbihwbHVnaW4pe1xuICB2YXIgbmFtZSA9IHBsdWdpbi5JbnRlZ3JhdGlvbi5wcm90b3R5cGUubmFtZTtcbiAgZXhwb3J0c1tuYW1lXSA9IHBsdWdpbjtcbn0pO1xuIl19