import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateSet,
  __toESM
} from "./chunk-WOOG5QLI.js";

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports, module) {
    "use strict";
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    module.exports = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var root = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root && root === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }
      };
      return channel;
    };
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }
        };
        return channel;
      }
    ) : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module.exports = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, defaultDecoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify3(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        pushToArray(keys, stringify2(
          value,
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(
              part.slice(pos + 1),
              options,
              isArray(obj[key]) ? obj[key].length : 0
            ),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf);
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify2 = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify: stringify2
    };
  }
});

// node_modules/@medusajs/js-sdk/dist/esm/admin/api-key.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ApiKey = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This methods retrieves a paginated list of API keys. It sends a request to the
   * [List API Keys](https://docs.medusajs.com/api/admin#api-keys_getapikeys) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of API keys.
   *
   * @example
   * To retrieve the list of API keys:
   *
   * ```ts
   * sdk.admin.apiKey.list()
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.apiKey.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each API key:
   *
   * ```ts
   * sdk.admin.apiKey.list({
   *   fields: "id,*sales_channels"
   * })
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method creates an API key. It sends a request to the [Create API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeys)
   * API route.
   *
   * @param body - The API key's details.
   * @param query - Configure the fields to retrieve in the created API key.
   * @param headers - Headers to pass in the request
   * @returns The created API key
   *
   * @example
   * sdk.admin.apiKey.create({
   *   title: "Development",
   *   type: "publishable"
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  create(body, query, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method revokes an API key. It sends a request to the
   * [Revoke API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysidrevoke) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.revoke("apk_123")
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  revoke(id, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}/revoke`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method retrieves an API key's details. It sends a request to the
   * [Get API key](https://docs.medusajs.com/api/admin#api-keys_getapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.retrieve("apk_123")
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  retrieve(id, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        headers
      });
    });
  }
  /**
   * This method updates an API key's details. It sends a request to the
   * [Update API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param body - The data to update in the API key.
   * @param query - Configure the fields to retrieve in the API key.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.update("apk_123", {
   *   title: "Development"
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes an API key by its ID. It sends a request to the
   * [Delete API Key](https://docs.medusajs.com/api/admin#api-keys_deleteapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.apiKey.delete("apk_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the sales channels associated with a publishable API key to either add
   * or remove associations. It sends a request to the [Manage Sales Channels](https://docs.medusajs.com/api/admin#api-keys_postapikeysidsaleschannels)
   * API route.
   *
   * @param id - The API key's ID.
   * @param body - The sales channels to add or remove from the API key.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.batchSalesChannels("apk_123", {
   *   add: ["sc_123"],
   *   remove: ["sc_321"]
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  batchSalesChannels(id, body, headers) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}/sales-channels`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/campaign.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Campaign = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a campaign by its ID. It sends a request to the
   * [Get Campaign](https://docs.medusajs.com/api/admin#campaigns_getcampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param query - Configure the fields to retrieve in the campaign.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * To retrieve a campaign by its ID:
   *
   * ```ts
   * sdk.admin.campaign.retrieve("procamp_123")
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.campaign.retrieve("procamp_123", {
   *   fields: "id,*budget"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of campaigns. It sends a request to the
   * [List Campaigns](https://docs.medusajs.com/api/admin#campaigns_getcampaigns) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of campaigns.
   *
   * @example
   * To retrieve the list of campaigns:
   *
   * ```ts
   * sdk.admin.campaign.list()
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.campaign.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each campaign:
   *
   * ```ts
   * sdk.admin.campaign.list({
   *   fields: "id,*budget"
   * })
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns`, {
        headers,
        query
      });
    });
  }
  /**
   * This method creates a campaign. It sends a request to the
   * [Create Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaigns) API route.
   *
   * @param payload - The details of the campaign to create.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * sdk.admin.campaign.create({
   *   name: "Summer Campaign"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   */
  create(payload, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method updates a campaign. It sends a request to the
   * [Update Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param payload - The data to update in the campaign.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * sdk.admin.campaign.update("procamp_123", {
   *   name: "Summer Campaign"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   */
  update(id, payload, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method deletes a campaign by its ID. It sends a request to the
   * [Delete Campaign](https://docs.medusajs.com/api/admin#campaigns_deletecampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.campaign.delete("procamp_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the promotions of a campaign to either add or remove the association between them.
   * It sends a request to the [Manage Promotions](https://docs.medusajs.com/api/admin#campaigns_postcampaignsidpromotions)
   * API route.
   *
   * @param id - The campaign's ID.
   * @param payload - The promotions to add or remove associations to them.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * sdk.admin.campaign.batchPromotions("procamp_123", {
   *   add: ["prom_123", "prom_456"],
   *   remove: ["prom_789"]
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   */
  batchPromotions(id, payload, headers) {
    return __awaiter2(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}/promotions`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/claim.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Claim = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of claims. It sends a request to the
   * [List Claims](https://docs.medusajs.com/api/admin#claims_getclaims) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of claims.
   *
   * @example
   * To retrieve the list of claims:
   *
   * ```ts
   * sdk.admin.claim.list()
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.claim.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each claim:
   *
   * ```ts
   * sdk.admin.claim.list({
   *   fields: "id,*additional_items"
   * })
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a claim. It sends a request to the
   * [Get Claim](https://docs.medusajs.com/api/admin#claims_getclaimsid) API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details.
   *
   * @example
   * To retrieve a claim by its ID:
   *
   * ```ts
   * sdk.admin.claim.retrieve("claim_123")
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.claim.retrieve("claim_123", {
   *   fields: "id,*additional_items"
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method creates a claim. It sends a request to the
   * [Create Claim](https://docs.medusajs.com/api/admin#claims_postclaims) API route.
   *
   * @param body - The claim's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim and order's details.
   *
   * @example
   * sdk.admin.claim.create({
   *   type: "refund",
   *   order_id: "order_123",
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  create(body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a claim. It sends a request to the
   * [Cancel Claim](https://docs.medusajs.com/api/admin#claims_postclaimsidcancel) API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details.
   *
   * @example
   * sdk.admin.claim.cancel("claim_123")
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method adds items to the claim. It sends a request to the
   * [Add Items](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitems) API route.
   *
   * @param id - The ID of the claim to add the items to.
   * @param body - The items' details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addItems("claim_123", {
   *   items: [
   *     {
   *       id: "orli_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addItems(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a claim item by the ID of the item's `WRITE_OFF_ITEM` action. It
   * sends a request to the [Update Claim Item](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitemsaction_id) API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateItem(id, actionId, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes a claim item from a claim by the ID of the item's `WRITE_OFF_ITEM` action.
   * It sends a request to the [Remove Claim Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidclaimitemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeItem(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  removeItem(id, actionId, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds inbound (or return) items to the claim. These inbound items will have a `RETURN_ITEM` action.
   *
   * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditems)
   * API route.
   *
   * @param id - The ID of the claim to add the inbound items to.
   * @param body - The inbound items' details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated with the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addInboundItems(
   *   "claim_123",
   *   {
   *     items: [
   *       {
   *         id: "orli_123",
   *         quantity: 1
   *       }
   *     ]
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundItems(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inbound (or return) item of a claim using the ID of the item's `RETURN_ITEM` action.
   * It sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param body - The details to update in the inbound item.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateInboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundItem(id, actionId, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an inbound (or return) item from a claim using the ID of the item's `RETURN_ITEM` action.
   * It sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The ID of the return item's `RETURN_ITEM` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeInboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  removeInboundItem(id, actionId, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an inbound (or return) shipping method to a claim.
   * The inbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethod)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addInboundShipping(
   *   "claim_123",
   *   {
   *     shipping_option_id: "so_123",
   *     custom_amount: 10
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundShipping(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update in the shipping method
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateInboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateInboundShipping(id, actionId, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.deleteInboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  deleteInboundShipping(id, actionId, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound (or new) items to a claim. These outbound items will have an `ITEM_ADD` action.
   * It sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditems)
   * API route.
   *
   * @param id - The ID of the claim to add the outbound items to.
   * @param body - The items' details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addOutboundItems(
   *   "claim_123",
   *   {
   *     items: [{
   *       id: "orli_123",
   *       quantity: 1
   *     }]
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addOutboundItems(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an outbound (or new) item of a claim using the ID of the item's `ITEM_ADD` action.
   * It sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the new claim item's `ITEM_ADD` action.
   * @param body - The item's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateOutboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateOutboundItem(id, actionId, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an outbound (or new) item from a claim using the ID of the item's `ITEM_ADD` action.
   * It sends a request to the [Remove Outbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidoutbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the new claim item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeOutboundItem(
   *   "claim_123",
   *   "ordchact_123",
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  removeOutboundItem(id, actionId, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound an outbound shipping method to a claim.
   * The outbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the
   * [Add Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethod)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addOutboundShipping(
   *   "claim_123",
   *   {
   *     shipping_option_id: "so_123",
   *     custom_amount: 10
   *   },
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addOutboundShipping(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for delivering outbound items in a claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateOutboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   },
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateOutboundShipping(id, actionId, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes the shipping method for delivering outbound items in the claim using the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.deleteOutboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  deleteOutboundShipping(id, actionId, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms a claim request, applying its changes on the associated order.
   * It sends a request to the [Confirm Claim Request](https://docs.medusajs.com/api/admin#claims_postclaimsidrequest)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The confirmation details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim and its associated return, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.request(
   *   "claim_123",
   *   {},
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  request(id, body, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a requested claim. It sends a request to the
   * [Cancel Claim Request](https://docs.medusajs.com/api/admin#claims_deleteclaimsidrequest)
   * API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The cancelation's details.
   *
   * @example
   * sdk.admin.claim.cancelRequest(
   *   "claim_123",
   * )
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/currency.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Currency = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of currencies. It sends a request to the
   * [List Currencies](https://docs.medusajs.com/api/admin#currencies_getcurrencies)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of currencies.
   *
   * @example
   * To retrieve the list of currencies:
   *
   * ```ts
   * sdk.admin.currency.list()
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.currency.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each currency:
   *
   * ```ts
   * sdk.admin.currency.list({
   *   fields: "code,symbol"
   * })
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter4(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/currencies`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a currency by its code. It sends a request to the
   * [Get Currency](https://docs.medusajs.com/api/admin#currencies_getcurrenciescode) API route.
   *
   * @param code - The currency's code.
   * @param query - Configure the fields to retrieve in the currency.
   * @param headers - Headers to pass in the request
   * @returns The currency's details.
   *
   * @example
   * To retrieve a currency by its code:
   *
   * ```ts
   * sdk.admin.currency.retrieve("usd")
   * .then(({ currency }) => {
   *   console.log(currency)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.currency.retrieve("usd", {
   *   fields: "code,symbol"
   * })
   * .then(({ currency }) => {
   *   console.log(currency)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(code, query, headers) {
    return __awaiter4(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/currencies/${code}`, {
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/customer.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Customer = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a customer. It sends a request to the
   * [Create Customer](https://docs.medusajs.com/api/admin#customers_postcustomers) API route.
   *
   * @param body - The customer's details.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * sdk.admin.customer.create({
   *   email: "customer@gmail.com"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  create(body, query, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/customers`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a customer's details. It sends a request to the
   * [Update Customer](https://docs.medusajs.com/api/admin#customers_postcustomersid) API route.
   *
   * @param id - The customer's ID.
   * @param body - The details to update of the customer.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * sdk.admin.customer.update("cus_123", {
   *   first_name: "John"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of customers. It sends a request to the
   * [List Customers](https://docs.medusajs.com/api/admin#customers_getcustomers)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of customers.
   *
   * @example
   * To retrieve the list of customers:
   *
   * ```ts
   * sdk.admin.customer.list()
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.customer.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each customer:
   *
   * ```ts
   * sdk.admin.customer.list({
   *   fields: "id,*groups"
   * })
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/customers`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a customer by its ID. It sends a request to the
   * [Get Customer](https://docs.medusajs.com/api/admin#customers_getcustomersid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * To retrieve a customer by its ID:
   *
   * ```ts
   * sdk.admin.customer.retrieve("cus_123")
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.customer.retrieve("cus_123", {
   *   fields: "id,*groups"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a customer by its ID. It sends a request to the
   * [Delete Customer](https://docs.medusajs.com/api/admin#customers_deletecustomersid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.customer.delete("cus_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages customer groups for a customer.
   * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customers_postcustomersidcustomergroups)
   * API route.
   *
   * @param id - The customer's ID.
   * @param body - The groups to add customer to or remove customer from.
   * @param headers - Headers to pass in the request
   * @returns The customers details.
   *
   * @example
   * sdk.admin.customer.batchCustomerGroups("cus_123", {
   *   add: ["cusgroup_123"],
   *   remove: ["cusgroup_321"]
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  batchCustomerGroups(id, body, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/customer-groups`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method creates a customer address. It sends a request to the
   * [Create Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddresses)
   * API route.
   *
   * @param id - The customer's ID.
   * @param body - The customer address's details.
   * @param headers - Headers to pass in the request.
   * @returns The customer address's details.
   *
   * @example
   * sdk.admin.customer.createAddress("cus_123", {
   *   address_1: "123 Main St",
   *   city: "Anytown",
   *   country_code: "US",
   *   postal_code: "12345"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  createAddress(id, body, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/addresses`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method updates a customer address. It sends a request to the
   * [Update Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddressesaddressid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param addressId - The customer address's ID.
   * @param body - The customer address's details.
   * @param headers - Headers to pass in the request.
   * @returns The customer address's details.
   *
   * @example
   * sdk.admin.customer.updateAddress("cus_123", "cus_addr_123", {
   *   address_1: "123 Main St",
   *   city: "Anytown",
   *   country_code: "US",
   *   postal_code: "12345"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  updateAddress(id, addressId, body, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method deletes a customer address. It sends a request to the
   * [Delete Customer Address](https://docs.medusajs.com/api/admin#customers_deletecustomersidaddressesaddressid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param addressId - The customer address's ID.
   * @param headers - Headers to pass in the request.
   * @returns The customer address's details.
   *
   * @example
   * sdk.admin.customer.deleteAddress("cus_123", "cus_addr_123")
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  deleteAddress(id, addressId, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a customer address by its ID. It sends a request to the
   * [Get Customer Address](https://docs.medusajs.com/api/admin#customers_getcustomersidaddressesaddressid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param addressId - The customer address's ID.
   * @param headers - Headers to pass in the request.
   * @returns The customer address's details.
   *
   * @example
   * sdk.admin.customer.retrieveAddress("cus_123", "cus_addr_123")
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  retrieveAddress(id, addressId, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
        headers
      });
    });
  }
  /**
   * This method retrieves a list of customer addresses. It sends a request to the
   * [List Customer Addresses](https://docs.medusajs.com/api/admin#customers_getcustomersidaddresses)
   * API route.
   *
   * @param id - The customer's ID.
   * @param headers - Headers to pass in the request.
   * @returns The list of customer addresses.
   *
   * @example
   * sdk.admin.customer.listAddresses("cus_123")
   * .then(({ addresses }) => {
   *   console.log(addresses)
   * })
   */
  listAddresses(id, headers) {
    return __awaiter5(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/addresses`, {
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/customer-group.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var CustomerGroup = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a customer group by its ID. It sends a request to the
   * [Get Customer Group](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroupsid) API route.
   *
   * @param id - The customer group's ID.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request
   * @returns The group's details.
   *
   * @example
   * To retrieve a customer group by its ID:
   *
   * ```ts
   * sdk.admin.customerGroup.retrieve("cusgroup_123")
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.customerGroup.retrieve("cusgroup_123", {
   *   fields: "id,*customer"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "GET",
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of customer groups. It sends a request to the
   * [List Customer Groups](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroups)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of customer groups.
   *
   * @example
   * To retrieve the list of customer groups:
   *
   * ```ts
   * sdk.admin.customerGroup.list()
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.customerGroup.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each customer group:
   *
   * ```ts
   * sdk.admin.customerGroup.list({
   *   fields: "id,*customer"
   * })
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a customer group. It sends a request to the
   * [Create Customer Group](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroups)
   * API route.
   *
   * @param body - The customer group's details.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request.
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.create({
   *   name: "VIP"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  create(body, query, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a customer group's details. It sends a request to the
   * [Update Customer](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsid)
   * API route.
   *
   * @param id - The customer group's ID.
   * @param body - The details to update in the group.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request.
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.update("cusgroup_123", {
   *   name: "VIP"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a customer group. This method sends a request to the
   * [Delete Customer Group](https://docs.medusajs.com/api/admin#customer-groups_deletecustomergroupsid)
   * API route.
   *
   * @param id - The customer group's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.customerGroup.delete("cusgroup_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages customers of a group to add or remove them from the group.
   * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsidcustomers)
   * API route.
   *
   * @param id - The group's ID.
   * @param body - The customers to add or remove from the group.
   * @param headers - Headers to pass in the request
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.batchCustomers("cusgroup_123", {
   *   add: ["cus_123"],
   *   remove: ["cus_321"]
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  batchCustomers(id, body, headers) {
    return __awaiter6(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}/customers`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/draft-order.js
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var DraftOrder = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a draft order by its ID. It sends a request to the
   * [Get Draft Order](https://docs.medusajs.com/api/admin#draft-orders_getdraftordersid)
   * API route.
   *
   * @param id - The draft order's ID.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request
   * @returns The draft order's details.
   *
   * @example
   * To retrieve a draft order by its ID:
   *
   * ```ts
   * sdk.admin.draftOrder.retrieve("order_123")
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.draftOrder.retrieve("order_123", {
   *   fields: "id,*items"
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of draft orders. It sends a request to the
   * [List Draft Orders](https://docs.medusajs.com/api/admin#draft-orders_getdraftorders) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of draft orders.
   *
   * @example
   * To retrieve the list of draft orders:
   *
   * ```ts
   * sdk.admin.draftOrder.list()
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.draftOrder.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each draft order:
   *
   * ```ts
   * sdk.admin.draftOrder.list({
   *   fields: "id,*items"
   * })
   * .then(({ draft_orders, count, limit, offset }) => {
   *   console.log(draft_orders)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method creates a draft order. It sends a request to the
   * [Create Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftorders) API route.
   *
   * @param body - The data to create the draft order.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order's details.
   *
   * @example
   * sdk.admin.draftOrder.create({
   *   email: "test@test.com",
   *   items: [
   *     {
   *       variant_id: "variant_123",
   *       quantity: 1,
   *     },
   *   ],
   *   region_id: "region_123",
   *   sales_channel_id: "sc_123",
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   */
  create(body, query, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders`, {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  /**
   * This method updates a draft order. It sends a request to the
   * [Update Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersid) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to update the draft order.
   * @param query - Configure the fields to retrieve in the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order's details.
   *
   * @example
   * sdk.admin.draftOrder.update("order_123", {
   *   email: "test@test.com",
   * })
   * .then(({ draft_order }) => {
   *   console.log(draft_order)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}`, {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  /**
   * This method converts a draft order to an order. It sends a request to the
   * [Convert Draft Order to Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidconverttoorder) API route.
   *
   * @param id - The draft order's ID.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.draftOrder.convertToOrder("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  convertToOrder(id, query, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/convert-to-order`, {
        method: "POST",
        query,
        headers
      });
    });
  }
  /**
   * This method adds items to a draft order. It sends a request to the
   * [Add Draft Order Items](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititems) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to add the items to the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.addItems("order_123", {
   *   items: [
   *     {
   *       variant_id: "variant_123",
   *       quantity: 1,
   *     },
   *   ],
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  addItems(id, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method updates an item that is part of an action in a draft order. It sends a request to the
   * [Update Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititemsaction_id) API route.
   *
   * @param id - The draft order's ID.
   * @param actionId - The action ID.
   * @param body - The data to update the item.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.updateActionItem("order_123", "action_123", {
   *   quantity: 2,
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  updateActionItem(id, actionId, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/${actionId}`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method removes an item that is part of an action in a draft order. It sends a request to the
   * [Remove Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersidedititemsaction_id) API route.
   *
   * @param id - The draft order's ID.
   * @param actionId - The action ID.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.removeActionItem("order_123", "action_123")
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  removeActionItem(id, actionId, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/${actionId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method updates an item in a draft order. It sends a request to the
   * [Update Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititemsitemitem_id) API route.
   *
   * @param id - The draft order's ID.
   * @param itemId - The item ID.
   * @param body - The data to update the item.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.updateItem("order_123", "item_123", {
   *   quantity: 2,
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  updateItem(id, itemId, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/item/${itemId}`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method adds promotions to a draft order. It sends a request to the
   * [Add Draft Order Promotions](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditpromotions) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to add the promotions to the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.addPromotions("order_123", {
   *   promo_codes: ["PROMO_CODE_1", "PROMO_CODE_2"],
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  addPromotions(id, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/promotions`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method removes promotions from a draft order. It sends a request to the
   * [Remove Draft Order Promotions](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditpromotions) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to remove the promotions from the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.removePromotions("order_123", {
   *   promo_codes: ["PROMO_CODE_1", "PROMO_CODE_2"],
   * })
   */
  removePromotions(id, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/promotions`, {
        method: "DELETE",
        body,
        headers
      });
    });
  }
  /**
   * This method adds a shipping method to a draft order. It sends a request to the
   * [Add Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethods) API route.
   *
   * @param id - The draft order's ID.
   * @param body - The data to add the shipping method to the draft order.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.addShippingMethod("order_123", {
   *   shipping_option_id: "shipping_option_123",
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  addShippingMethod(id, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method updates a shipping method in a draft order. It sends a request to the
   * [Update Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethodsaction_id) API route.
   *
   * @param id - The draft order's ID.
   * @param actionId - The action ID.
   * @param body - The data to update the shipping method.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.updateShippingMethod("order_123", "action_123", {
   *   shipping_option_id: "shipping_option_123",
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  updateActionShippingMethod(id, actionId, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/${actionId}`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method removes a shipping method from a draft order. It sends a request to the
   * [Remove Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditshippingmethodsaction_id) API route.
   *
   * @param id - The draft order's ID.
   * @param actionId - The action ID.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.removeShippingMethod("order_123", "action_123")
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  removeActionShippingMethod(id, actionId, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/${actionId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method removes a shipping method from an edited draft order. It sends a request to the
   * [Remove Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditshippingmethodsmethodmethod_id) API route.
   *
   * @param id - The draft order's ID.
   * @param shippingMethodId - The shipping method's ID.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.removeShippingMethod(
   *   "order_123",
   *   "shipping_method_123"
   * )
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  removeShippingMethod(id, shippingMethodId, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/method/${shippingMethodId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method updates a shipping method in a draft order. It sends a request to the
   * [Update Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethodsmethodmethod_id) API route.
   *
   * @param id - The draft order's ID.
   * @param methodId - The shipping method's ID.
   * @param body - The data to update the shipping method.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.updateShippingMethod("order_123", "sm_123", {
   *  shipping_option_id: "so_123",
   * })
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  updateShippingMethod(id, methodId, body, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/method/${methodId}`, {
        method: "POST",
        body,
        headers
      });
    });
  }
  /**
   * This method begins an edit to a draft order. It sends a request to the
   * [Begin Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedit) API route.
   *
   * @param id - The draft order's ID.
   * @param headers - Headers to pass in the request.
   *
   * @example
   * sdk.admin.draftOrder.beginEdit("order_123")
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  beginEdit(id, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method cancels an edit to a draft order. It sends a request to the
   * [Cancel Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersidedit) API route.
   *
   * @param id - The draft order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The cancelation's details.
   *
   * @example
   * sdk.admin.draftOrder.cancelEdit("order_123")
   * .then(({ id, object, deleted }) => {
   *   console.log(id, object, deleted)
   * })
   */
  cancelEdit(id, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method requests an edit to a draft order. It sends a request to the
   * [Request Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditrequest) API route.
   *
   * @param id - The draft order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.requestEdit("order_123")
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  requestEdit(id, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/request`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method confirms an edit to a draft order. It sends a request to the
   * [Confirm Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditconfirm) API route.
   *
   * @param id - The draft order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The draft order preview's details.
   *
   * @example
   * sdk.admin.draftOrder.confirmEdit("order_123")
   * .then(({ draft_order_preview }) => {
   *   console.log(draft_order_preview)
   * })
   */
  confirmEdit(id, headers) {
    return __awaiter7(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/draft-orders/${id}/edit/confirm`, {
        method: "POST",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/exchange.js
var __awaiter8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Exchange = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of exchanges. It sends a request to the
   * [List Exchanges](https://docs.medusajs.com/api/admin#exchanges_getexchanges)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of exchanges.
   *
   * @example
   * To retrieve the list of exchanges:
   *
   * ```ts
   * sdk.admin.exchange.list()
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.exchange.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each exchange:
   *
   * ```ts
   * sdk.admin.exchange.list({
   *   fields: "id,*order"
   * })
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves an exchange by its ID. It sends a request to the
   * [Get Exchange](https://docs.medusajs.com/api/admin#exchanges_getexchangesid)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * To retrieve an exchange by its ID:
   *
   * ```ts
   * sdk.admin.exchange.retrieve("exchange_123")
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.exchange.retrieve("exchange_123", {
   *   fields: "id,*order"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method creates an admin exchange. It sends a request to the
   * [Create Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchanges) API route.
   *
   * @param body - The exchange's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * sdk.admin.exchange.create({
   *   order_id: "order_123"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  create(body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an exchange. It sends a request to the
   * [Cancel Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidcancel) API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * sdk.admin.exchange.cancel("exchange_123")
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method adds inbound (or return) items to an exchange. These inbound items will
   * have the action `RETURN_ITEM`.
   *
   * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditems)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addInboundItems("exchange_123", {
   *   items: [{
   *     id: "orli_123",
   *     quantity: 1
   *   }]
   * })
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundItems(id, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inbound (or return) item from an exchange using the ID of
   * the item's `RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can
   * check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateInboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundItem(id, actionId, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an inbound (or return) item from an exchange using the ID of the
   * item's `RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.removeInboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  removeInboundItem(id, actionId, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an inbound (or return) shipping method to an exchange.
   * The inbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
   * API route.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addInboundShipping("exchange_123", {
   *   shipping_option_id: "so_123"
   * })
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundShipping(id, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for returning items in the exchange using the ID
   * of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateInboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   *    {
   *     custom_amount: 10
   *   }
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundShipping(id, actionId, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes the shipping method for returning items in the exchange using the ID
   * of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.deleteInboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  deleteInboundShipping(id, actionId, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound (or new) items to an exchange.
   * These outbound items will have the action `ITEM_ADD`.
   *
   * This method sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditems)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addOutboundItems("exchange_123", {
   *   items: [{
   *     id: "variant_123",
   *     quantity: 1
   *   }]
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  addOutboundItems(id, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an outbound (or new) item from an exchange using the ID
   * of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
   * @param body - The item's details to update.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateOutboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  updateOutboundItem(id, actionId, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an outbound (or new) item from an exchange using the ID
   * of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.removeOutboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  removeOutboundItem(id, actionId, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an outbound shipping method to an exchange. The outbound shipping method
   * will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethod)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addOutboundShipping("exchange_123", {
   *   shipping_option_id: "so_123"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  addOutboundShipping(id, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for delivering outbound items in the exchange using
   * the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateOutboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   }
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  updateOutboundShipping(id, actionId, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes the shipping method for delivering outbound items in the exchange using
   * the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.deleteOutboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  deleteOutboundShipping(id, actionId, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms an exchange request, applying its changes on the associated order.
   *
   * This method sends a request to the [Confirm Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidrequest)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The confirmation's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange and associated return's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.request("exchange_123", {})
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  request(id, body, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an exchange request. It sends a request to the
   * [Cancel Exchange Request](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidrequest)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The cancelation's details.
   *
   * @example
   * sdk.admin.exchange.cancel("exchange_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter8(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment.js
var __awaiter9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Fulfillment = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a fulfillment. It sends a request to the
   * [Create Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillments)
   * API route.
   *
   * @param body - The fulfillment's details.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.create({
   *   location_id: "sloc_123",
   *   provider_id: "my_fulfillment",
   *   delivery_address: {
   *     country_code: "us"
   *   },
   *   items: [
   *     {
   *       title: "Shirt",
   *       sku: "SHIRT",
   *       quantity: 1,
   *       barcode: "123"
   *     }
   *   ],
   *   labels: [],
   *   order: {},
   *   order_id: "order_123"
   * })
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  create(body, query, headers) {
    return __awaiter9(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a fulfillment. It sends a request to the
   * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidcancel)
   * API route.
   *
   * @param id - The fulfillment's ID.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.cancel("ful_123")
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter9(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillments/${id}/cancel`, {
        method: "POST",
        body: {},
        headers,
        query
      });
    });
  }
  /**
   * This method creates a shipment for a fulfillment. It sends a request to the
   * [Create Shipment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidshipment)
   * API route.
   *
   * @param id - The fulfillment's ID.
   * @param body - The shipment's details.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.createShipment("ful_123", {
   *   labels: [
   *     {
   *       tracking_number: "123",
   *       tracking_url: "example.com",
   *       label_url: "example.com"
   *     }
   *   ]
   * })
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  createShipment(id, body, query, headers) {
    return __awaiter9(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillments/${id}/shipment`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-provider.js
var __awaiter10 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FulfillmentProvider = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of fulfillment providers. It sends a request to the
   * [List Fulfillment Providers](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentproviders)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of providers.
   *
   * @example
   * To retrieve the list of fulfillment providers:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list()
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each fulfillment provider:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list({
   *   fields: "id"
   * })
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter10(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-providers`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of fulfillment options for a given fulfillment provider. It sends a request to the
   * [List Fulfillment Options](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentprovidersidoptions)
   * API route.
   *
   * @param id - The ID of the fulfillment provider.
   * @param headers - Headers to pass in the request.
   * @returns The list of fulfillment options.
   *
   * @example
   * sdk.admin.fulfillmentProvider.listFulfillmentOptions("fp_123")
   * .then(({ fulfillment_options }) => {
   *   console.log(fulfillment_options)
   * })
   */
  listFulfillmentOptions(id, headers) {
    return __awaiter10(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-providers/${id}/options`, {
        method: "GET",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-set.js
var __awaiter11 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FulfillmentSet = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method deletes a fulfillment set. It sends a request to the
   * [Delete Fulfillment Set](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsid)
   * API route.
   *
   * @param id - The fulfillment set's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.delete("fset_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter11(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method adds a service zone to a fulfillment set. It uses the
   * [Add Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezones)
   * API route.
   *
   * @param id - The fulfillment set's ID.
   * @param body - The service zone's details.
   * @param query - Configure the fields to retrieve in the fulfillment set.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment set's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.createServiceZone("fset_123", {
   *   name: "Europe Service Zone",
   *   geo_zones: [{
   *     type: "country",
   *     country_code: "us"
   *   }]
   * })
   * .then(({ fulfillment_set }) => {
   *   console.log(fulfillment_set)
   * })
   */
  createServiceZone(id, body, query, headers) {
    return __awaiter11(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${id}/service-zones`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a fulfillment set's service zone's details. It sends a request to the
   * [Get Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_getfulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfillment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param query - Configure the fields to retrieve in the service zone.
   * @param headers - Headers to pass in the request.
   * @returns The service zone's details.
   *
   * @example
   * To retrieve a fulfillment set's service zone by its ID:
   *
   * ```ts
   * sdk.admin.fulfillmentSet.retrieveServiceZone(
   *   "fset_123",
   *   "serzo_123"
   * )
   * .then(({ service_zone }) => {
   *   console.log(service_zone)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.fulfillmentSet.retrieveServiceZone(
   *   "fset_123",
   *   "serzo_123",
   *   {
   *     fields: "id,*geo_zones"
   *   }
   * )
   * .then(({ service_zone }) => {
   *   console.log(service_zone)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveServiceZone(fulfillmentSetId, serviceZoneId, query, headers) {
    return __awaiter11(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method updates a service zone in a fulfillment set. It sends a request to the
   * [Update Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfillment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param body - The data to update in the service zone.
   * @param query - Configure the fields to retrieve in the fulfillment set.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment set's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.updateServiceZone(
   *   "fset_123",
   *   "serzo_123",
   *   {
   *     name: "Europe Service Zone",
   *   }
   * )
   * .then(({ fulfillment_set }) => {
   *   console.log(fulfillment_set)
   * })
   */
  updateServiceZone(fulfillmentSetId, serviceZoneId, body, query, headers) {
    return __awaiter11(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a service zone in a fulfillment set. It sends a request to the
   * [Remove Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfullment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.deleteServiceZone(
   *   "fset_123",
   *   "serzo_123",
   * )
   * .then(({ deleted, parent: fulfillmentSet }) => {
   *   console.log(deleted, fulfillmentSet)
   * })
   */
  deleteServiceZone(fulfillmentSetId, serviceZoneId, headers) {
    return __awaiter11(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/inventory-item.js
var __awaiter12 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var InventoryItem = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates an inventory item. It sends a request to the
   * [Create Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitems)
   * API route.
   *
   * @param body - The inventory item's details.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request.
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.create({
   *   sku: "SHIRT"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  create(body, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inventory level. It sends a request to the
   * [Update Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsid)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param body - The data to update.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request.
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.update("iitem_123", {
   *   sku: "SHIRT"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of inventory items. It sends a request to the
   * [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of inventory items.
   *
   * @example
   * To retrieve the list of inventory items:
   *
   * ```ts
   * sdk.admin.inventoryItem.list()
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.inventoryItem.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each inventory item:
   *
   * ```ts
   * sdk.admin.inventoryItem.list({
   *   fields: "id,*location_levels"
   * })
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves an inventory item by its ID. It sends a request to the
   * [Get Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitemsid) API route.
   *
   * @param id - The inventory item's ID.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * To retrieve an inventory item by its ID:
   *
   * ```ts
   * sdk.admin.inventoryItem.retrieve("iitem_123")
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.inventoryItem.retrieve("iitem_123", {
   *   fields: "id,*location_levels"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes an inventory item. This sends a request to the
   * [Delete Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsid)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.inventoryItem.delete("iitem_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of inventory levels that belong to an inventory item.
   * It sends a request to the [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of inventory levels.
   *
   * @example
   * To retrieve the list of inventory levels:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123")
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each inventory level:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123", {
   *   fields: "id,*inventory_item"
   * })
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listLevels(id, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
        query,
        headers
      });
    });
  }
  /**
   * This method updates the inventory level of the specified inventory item and
   * stock location.
   *
   * This method sends a request to the
   * [Update Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelslocation_id)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param locationId - The stock location's ID.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.updateLevel(
   *   "iitem_123",
   *   "sloc_123",
   *   {
   *     stocked_quantity: 10
   *   }
   * )
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  updateLevel(id, locationId, body, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes an inventory level associated with an inventory item
   * and a stock location.
   *
   * This method sends a request to the
   * [Remove Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsidlocationlevelslocation_id)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param locationId - The stock location's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.inventoryItem.deleteLevel(
   *   "iitem_123",
   *   "sloc_123",
   * )
   * .then(({ deleted, parent: inventoryItem }) => {
   *   console.log(deleted, inventoryItem)
   * })
   */
  deleteLevel(id, locationId, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the inventory levels of an inventory item. It sends a request to the
   * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
   * API route.
   *
   * @deprecated Use `batchInventoryItemLocationLevels` instead.
   *
   * @param id - The inventory item's ID.
   * @param body - The inventory levels to create or delete.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchUpdateLevels("iitem_123", {
   *   create: [{
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchUpdateLevels(id, body, query, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method manages the inventory levels of an inventory item. It sends a request to the
   * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchInventoryItemLocationLevels("iitem_123", {
   *   create: [{
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchInventoryItemLocationLevels(id, body, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method manages the inventory levels of multiple inventory items.
   *
   * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchInventoryItemsLocationLevels({
   *   create: [{
   *     inventory_item_id: "iitem_123",
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchInventoryItemsLocationLevels(body, headers) {
    return __awaiter12(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/inventory-items/location-levels/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/invite.js
var __awaiter13 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Invite = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method accepts an invite. It requires sending a previous request to
   * the {@link Auth.register}.
   *
   * This method sends a request to the [Accept Invite]
   * (https://docs.medusajs.com/api/admin#invites_postinvitesaccept)
   * API route.
   *
   * @param input - The details of the user to create.
   * @param query - Configure the fields to retrieve in the user.
   * @param headers - Headers to pass in the request
   * @returns The user's details.
   *
   * @example
   * await sdk.auth.register("user", "emailpass", {
   *   email: "user@gmail.com",
   *   password: "supersecret"
   * })
   *
   * // all subsequent requests will use the token in the header
   * const { user } = await sdk.admin.invite.accept(
   *   {
   *     email: "user@gmail.com",
   *     first_name: "John",
   *     last_name: "Smith",
   *     invite_token: "12345..."
   *   },
   * )
   */
  accept(input, query, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      const { invite_token } = input, rest = __rest(input, ["invite_token"]);
      return yield this.client.fetch(`/admin/invites/accept?token=${input.invite_token}`, {
        method: "POST",
        headers,
        body: rest,
        query
      });
    });
  }
  /**
   * This method creates an invite. It sends a request to the
   * [Create Invite](https://docs.medusajs.com/api/admin#invites_postinvites)
   * API route.
   *
   * @param body - The invite's details.
   * @param query - Configure the fields to retrieve in the invite.
   * @param headers - Headers to pass in the request
   * @returns The invite's details.
   *
   * @example
   * sdk.admin.invite.create({
   *   email: "user@gmail.com",
   * })
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   */
  create(body, query, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/invites`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves an invite by its ID. It sends a request to the
   * [Get Invite](https://docs.medusajs.com/api/admin#invites_getinvitesid)
   * API route.
   *
   * @param id - The invite's ID.
   * @param query - Configure the fields to retrieve in the invite.
   * @param headers - Headers to pass in the request
   * @returns The invite's details.
   *
   * @example
   * To retrieve an invite its ID:
   *
   * ```ts
   * sdk.admin.invite.retrieve("invite_123")
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.invite.retrieve("invite_123", {
   *   fields: "id,email"
   * })
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/invites/${id}`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of invites. It sends a request to the
   * [List Invites](https://docs.medusajs.com/api/admin#invites_getinvites)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of invites.
   *
   * @example
   * To retrieve the list of invites:
   *
   * ```ts
   * sdk.admin.invite.list()
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.invite.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each invite:
   *
   * ```ts
   * sdk.admin.invite.list({
   *   fields: "id,email"
   * })
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/invites`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method refreshes the token of an invite. It sends a request to the
   * [Refresh Invite Token](https://docs.medusajs.com/api/admin#invites_postinvitesidresend)
   * API route.
   *
   * @param id - The invite's ID.
   * @param headers - Headers to pass in the request.
   * @returns The invite's details.
   *
   * @example
   * sdk.admin.invite.resend("invite_123")
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   */
  resend(id, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/invites/${id}/resend`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method deletes an invite. It sends a request to the
   * [Delete Invite](https://docs.medusajs.com/api/admin#invites_deleteinvitesid)
   * API route.
   *
   * @param id - The invite's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.invite.delete("invite_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter13(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/invites/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/notification.js
var __awaiter14 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Notification = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a notification's details. It sends a request to the
   * [Get Notification](https://docs.medusajs.com/api/admin#notifications_getnotificationsid)
   * API route.
   *
   * @param id - The notification's ID.
   * @param query - Configure the fields to retrieve in the notification.
   * @param headers - Headers to pass in the request
   * @returns The notification's details.
   *
   * @example
   * To retrieve a notification by its ID:
   *
   * ```ts
   * sdk.admin.notification.retrieve("notif_123")
   * .then(({ notification }) => {
   *   console.log(notification)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.notification.retrieve("notif_123", {
   *   fields: "id,to"
   * })
   * .then(({ notification }) => {
   *   console.log(notification)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter14(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/notifications/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of notifications. It sends a request to the
   * [List Notifications](https://docs.medusajs.com/api/admin#notifications_getnotifications)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of notifications.
   *
   * @example
   * To retrieve the list of notifications:
   *
   * ```ts
   * sdk.admin.notification.list()
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.notification.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each notification:
   *
   * ```ts
   * sdk.admin.notification.list({
   *   fields: "id,to"
   * })
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter14(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/notifications`, {
        method: "GET",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/order.js
var __awaiter15 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Order = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves an order by its ID. It sends a request to the
   * [Get Order](https://docs.medusajs.com/api/admin#orders_getordersid)
   * API route.
   *
   * @param id - The order's ID.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * To retrieve an order by its ID:
   *
   * ```ts
   * sdk.admin.order.retrieve("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.order.retrieve("order_123", {
   *   fields: "id,*items"
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method updates an order. It sends a request to the
   * [Update Order Email](https://docs.medusajs.com/api/admin#orders_postordersid)
   * API route.
   *
   * @param id - The order's ID.
   * @param body - The update details.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.update(
   *   "order_123",
   *   {
   *     email: "new_email@example.com",
   *     shipping_address: {
   *       first_name: "John",
   *       last_name: "Doe",
   *       address_1: "123 Main St",
   *     }
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  update(id, body, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method retrieves the preview of an order based on its last associated change. It sends a request to the
   * [Get Order Preview](https://docs.medusajs.com/api/admin#orders_getordersidpreview) API route.
   *
   * @param id - The order's ID.
   * @param query - Query parameters.
   * @param headers - Headers to pass in the request
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.order.retrievePreview("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  retrievePreview(id, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/preview`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of orders. It sends a request to the
   * [List Orders](https://docs.medusajs.com/api/admin#orders_getorders) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of orders.
   *
   * @example
   * To retrieve the list of orders:
   *
   * ```ts
   * sdk.admin.order.list()
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.order.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each order:
   *
   * ```ts
   * sdk.admin.order.list({
   *   fields: "id,*items"
   * })
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method cancels an order. It sends a request to the
   * [Cancel Order](https://docs.medusajs.com/api/admin#orders_postordersidcancel)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancel("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancel(id, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/cancel`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method requests an order transfer. It sends a request to the
   * [Request Order Transfer](https://docs.medusajs.com/api/admin#orders_postordersidrequesttransfer)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @param body - The transfer's details - the id of the next owner.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.requestTransfer("order_123", {
   *   customer_id: "cus_123",
   *   internal_note: "Internal note",
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  requestTransfer(id, body, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/transfer`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method cancels an order transfer request. It sends a request to the
   * [Cancel Order Transfer Request](https://docs.medusajs.com/api/admin#orders_postordersidcanceltransferrequest)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancelTransfer("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancelTransfer(id, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/transfer/cancel`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method creates a fulfillment for an order. It sends a request to the
   * [Create Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillments)
   * API route.
   *
   * @param id - The order's ID.
   * @param body - The fulfillment's details.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.createFulfillment("order_123", {
   *   items: [
   *     {
   *       id: "orli_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  createFulfillment(id, body, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an order's fulfillment. It sends a request to the
   * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idcancel)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The ID of the fulfillment to cancel.
   * @param body - The cancelation's details.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancelFulfillment(
   *   "order_123",
   *   "ful_123",
   *   {
   *     no_notification: false
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancelFulfillment(id, fulfillmentId, body, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/cancel`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method creates a shipment for an order's fulfillment. It sends a request to the
   * [Create Shipment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idshipments)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The ID of the fulfillment.
   * @param body - The shipment's details.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.createShipment(
   *   "order_123",
   *   "ful_123",
   *   {
   *     items: [
   *       {
   *         id: "fulit_123",
   *         quantity: 1
   *       }
   *     ]
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  createShipment(id, fulfillmentId, body, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/shipments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method marks an order's fulfillment as delivered. It sends a request to the
   * [Mark Delivered ](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idmarkasdelivered)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The fulfillment's ID.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.markAsDelivered(
   *   "order_123",
   *   "ful_123",
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  markAsDelivered(id, fulfillmentId, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/mark-as-delivered`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of changes made on an order, including returns, exchanges, etc...
   *
   * This method sends a request to the [List Changes](https://docs.medusajs.com/api/admin#orders_getordersidchanges)
   * API route.
   *
   * @param id - The order's ID.
   * @param queryParams - Configure the fields to retrieve in each order change.
   * @param headers - Headers to pass in the request
   * @returns The list of order changes.
   *
   * @example
   * sdk.admin.order.listChanges("order_123")
   * .then(({ order_changes }) => {
   *   console.log(order_changes)
   * })
   */
  listChanges(id, queryParams, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/changes`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method retrieves the order's line items. It sends a request to the
   * [List Line Items](https://docs.medusajs.com/api/admin#orders_getordersidlineitems)
   * API routes.
   *
   * @param id - The order's ID.
   * @param queryParams - Configure the fields to retrieve in each line item.
   * @param headers - Headers to pass in the request
   * @returns The list of line items.
   *
   * @example
   * sdk.admin.order.listLineItems("order_123")
   * .then(({ order_items }) => {
   *   console.log(order_items)
   * })
   */
  listLineItems(id, queryParams, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/line-items`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method creates a credit line for an order. It sends a request to the
   * [Create Credit Line](https://docs.medusajs.com/api/admin#orders_postordersidcredit-lines) API route.
   *
   * @param orderId - The order's ID.
   * @param body - The credit line's details.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.createCreditLine(
   *   "order_123",
   *   {
   *     amount: 100,
   *     reference: "order",
   *     reference_id: "order_123",
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  createCreditLine(orderId, body, query, headers) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/orders/${orderId}/credit-lines`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/order-edit.js
var __awaiter16 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var OrderEdit = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates an order edit request. It sends a HTTP request to the
   * [Create Order Edit](https://docs.medusajs.com/api/admin#order-edits_postorderedits)
   * API route.
   *
   * @param body - The order edit's details.
   * @param query - Configure the fields to retrieve in the order edit.
   * @param headers - Headers to pass in the request.
   * @returns The order edit's details.
   *
   * @example
   * sdk.admin.orderEdit.initiateRequest({
   *   order_id: "order_123"
   * })
   * .then(({ order_change }) => {
   *   console.log(order_change)
   * })
   */
  initiateRequest(body, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method changes an order edit to requested. It sends a request to the
   * [Request Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidrequest)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.request("ordch_123")
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  request(id, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/request`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms an order edit and applies it on the order. It sends a request
   * to the [Confirm Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidconfirm)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.confirm("ordch_123")
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  confirm(id, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/confirm`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method cancels a requested order edit. It sends a request to the
   * [Cancel Order Edit](https://docs.medusajs.com/api/admin#order-edits_deleteordereditsid)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Query parameters
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.orderEdit.cancelRequest("ordch_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds items to an order edit. These items will have the action `ITEM_ADD`.
   *
   * The method sends a request to the [Add Items](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditems)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.addItems("ordch_123", {
   *   items: [
   *     {
   *       variant_id: "variant_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  addItems(id, body, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the quantity and other details of an item in an order. It sends a request to the
   * [Update Item Quantity](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsitemitem_id)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param itemId - The item's ID in the order.
   * @param body - The data to edit in the item.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.updateOriginalItem(
   *   "ordch_123",
   *   "orli_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  updateOriginalItem(id, itemId, body, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/item/${itemId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an added item in the order edit by the ID of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * It sends a request
   * to the [Update Item](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsaction_id)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param actionId - The id of the new item's `ITEM_ADD` action.
   * @param body - The data to update.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.updateAddedItem(
   *   "ordch_123",
   *   "orli_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  updateAddedItem(id, actionId, body, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an added item in the order edit by the ID of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The order edit's ID.
   * @param actionId - The id of the new item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.removeAddedItem(
   *   "ordch_123",
   *   "orli_123",
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  removeAddedItem(id, actionId, query, headers) {
    return __awaiter16(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/payment.js
var __awaiter17 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Payment = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of payments. It sends a request to the
   * [List Payments](https://docs.medusajs.com/api/admin#payments_getpayments) API route.
   *
   * @param query  - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of payments.
   *
   * @example
   * To retrieve the list of payments:
   *
   * ```ts
   * sdk.admin.payment.list()
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.payment.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each payment:
   *
   * ```ts
   * sdk.admin.payment.list({
   *   fields: "id,*payment_collection"
   * })
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter17(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payments`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of payment providers. It sends a request to the
   * [List Payment Providers](https://docs.medusajs.com/api/admin#payments_getpaymentspaymentproviders) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of payment providers.
   *
   * @example
   * To retrieve the list of payment providers:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders()
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each payment provider:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders({
   *   fields: "id,is_enabled"
   * })
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listPaymentProviders(query, headers) {
    return __awaiter17(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payments/payment-providers`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a payment's details. It sends a request to the
   * [Get Payment](https://docs.medusajs.com/api/admin#payments_getpaymentsid)
   * API route.
   *
   * @param id - The payment's ID.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * To retrieve a payment by its ID:
   *
   * ```ts
   * sdk.admin.payment.retrieve("pay_123")
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.payment.retrieve("pay_123", {
   *   fields: "id,*payment_collection"
   * })
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter17(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payments/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method captures a payment. It sends a request to the
   * [Capture Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidcapture) API route.
   *
   * The API route uses the `capturePayment` method of the payment provider associated with the payment's collection.
   *
   * @param id - The payment's ID.
   * @param body - The capture's details.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * sdk.admin.payment.capture("paycol_123", {})
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   */
  capture(id, body, query, headers) {
    return __awaiter17(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payments/${id}/capture`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method refunds a payment. It sends a request to the
   * [Refund Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidrefund) API route.
   *
   * The API route uses the `refundPayment` method of the payment provider associated with the payment's collection.
   *
   * @param id - The payment's ID.
   * @param body - The refund's details.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * sdk.admin.payment.refund("paycol_123", {})
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   */
  refund(id, body, query, headers) {
    return __awaiter17(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payments/${id}/refund`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/payment-collection.js
var __awaiter18 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var PaymentCollection = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a payment collection. It sends a request to the
   * [Create Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollections)
   * API route.
   *
   * @param body - The details of the payment collection to create.
   * @param query - Configure the fields to retrieve in the payment collection.
   * @param headers - Headers to pass in the request
   * @returns The payment collection's details.
   *
   * @example
   * sdk.admin.paymentCollection.create({
   *   order_id: "order_123"
   * })
   * .then(({ payment_collection }) => {
   *   console.log(payment_collection)
   * })
   */
  create(body, query, headers) {
    return __awaiter18(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payment-collections`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a payment collection. It sends a request to the
   * [Delete Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_deletepaymentcollectionsid)
   * API route.
   *
   * @param id - The payment collection's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.paymentCollection.delete("paycol_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter18(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payment-collections/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method marks a payment collection as paid. It sends a request to the
   * [Mark as Paid](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollectionsidmarkaspaid)
   * API route.
   *
   * The API route creates and authorizes a payment session, then capture its payment,
   * using the manual payment provider.
   *
   * @param id - The payment collection to mark as paid.
   * @param body - The details to mark the payment collection as paid.
   * @param query - Configure the fields to retrieve in the payment collection.
   * @param headers - Headers to pass in the request.
   * @returns The payment collection's details.
   *
   * @example
   * sdk.admin.paymentCollection.markAsPaid("paycol_123", {
   *   order_id: "order_123"
   * })
   * .then(({ payment_collection }) => {
   *   console.log(payment_collection)
   * })
   */
  markAsPaid(id, body, query, headers) {
    return __awaiter18(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/payment-collections/${id}/mark-as-paid`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/plugin.js
var __awaiter19 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Plugin = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves the list of plugins installed in a Medusa application.
   *
   * @param headers - Headers to pass in the request.
   * @returns The list of plugins.
   *
   * @example
   * sdk.admin.plugin.list()
   * .then(({ plugins }) => {
   *   console.log(plugins)
   * })
   */
  list(headers) {
    return __awaiter19(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/plugins`, {
        headers,
        query: {}
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/price-list.js
var __awaiter20 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var PriceList = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a price list. It sends a request to the
   * [Get Price List](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * To retrieve a price list by its ID:
   *
   * ```ts
   * sdk.admin.priceList.retrieve("plist_123")
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.priceList.retrieve("plist_123", {
   *   fields: "id,*prices"
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of price lists. It sends a request to the
   * [List Price Lists](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelists) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of price lists.
   *
   * @example
   * To retrieve the list of price lists:
   *
   * ```ts
   * sdk.admin.priceList.list()
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.priceList.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each price list:
   *
   * ```ts
   * sdk.admin.priceList.list({
   *   fields: "id,*prices"
   * })
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a price list. It sends a request to the
   * [Create Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelists)
   * API route.
   *
   * @param body - The details of the price list to create.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.create({
   *   title: "My Price List",
   *   status: "active",
   *   type: "sale",
   *   prices: [
   *     {
   *       variant_id: "variant_123",
   *       amount: 10,
   *       currency_code: "usd",
   *       rules: {
   *         region_id: "reg_123"
   *       }
   *     }
   *   ]
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  create(body, query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a price list. It sends a request to the
   * [Update Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The data to update in the price list.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.update("plist_123", {
   *   title: "My Price List",
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a price list. It sends a request to the
   * [Delete Price List](https://docs.medusajs.com/v2/api/admin#price-lists_deletepricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.priceList.delete("plist_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the prices of a price list to create, update, or delete them.
   * It sends a request to the [Manage Prices](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidpricesbatch)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The prices to create, update, or delete.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.batchPrices("plist_123", {
   *   create: [{
   *     variant_id: "variant_123",
   *     currency_code: "usd",
   *     amount: 10,
   *     rules: {
   *       region_id: "reg_123"
   *     }
   *   }],
   *   update: [{
   *     id: "price_123",
   *     variant_id: "variant_123",
   *     amount: 20,
   *   }],
   *   delete: ["price_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchPrices(id, body, query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists/${id}/prices/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes products from a price list. It sends a request to the
   * [Remove Product](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidproducts)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The details of the products to remove.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.linkProducts("plist_123", {
   *   remove: ["prod_123"]
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  linkProducts(id, body, query, headers) {
    return __awaiter20(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-lists/${id}/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/price-preference.js
var __awaiter21 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var PricePreference = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a price preference. It sends a request to the
   * [Get Price Preference](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * To retrieve a price preference by its ID:
   *
   * ```ts
   * sdk.admin.pricePreference.retrieve("prpref_123")
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.pricePreference.retrieve("prpref_123", {
   *   fields: "id,is_tax_inclusive"
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter21(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of price preferences. It sends a request to the
   * [List Price Preferences](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferences) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of price preferences.
   *
   * @example
   * To retrieve the list of price preferences:
   *
   * ```ts
   * sdk.admin.pricePreference.list()
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.pricePreference.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each price preference:
   *
   * ```ts
   * sdk.admin.pricePreference.list({
   *   fields: "id,is_tax_inclusive"
   * })
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter21(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-preferences`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a price preference. It sends a request to the
   * [Create Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferences)
   * API route.
   *
   * @param body - The details of the price preference to create.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * sdk.admin.pricePreference.create({
   *   attribute: "region_id",
   *   value: "region_123",
   *   is_tax_inclusive: true
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   */
  create(body, query, headers) {
    return __awaiter21(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-preferences`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a price preference. It sends a request to the
   * [Update Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param body - The data to update in the price preference.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * sdk.admin.pricePreference.update("prpref_123", {
   *   is_tax_inclusive: true
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter21(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a price preference. It sends a request to the
   * [Delete Price Preference](https://docs.medusajs.com/api/admin#price-preferences_deletepricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.pricePreference.delete("prpref_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter21(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product.js
var __awaiter22 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Product = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product import. The products are only imported after
   * the import is confirmed using the {@link confirmImport} method.
   *
   * This method sends a request to the
   * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimport)
   * API route.
   *
   * @param body - The import's details.
   * @param query - Query parameters to pass to the request.
   * @param headers - Headers to pass in the request.
   * @returns The import's details.
   *
   * @example
   * sdk.admin.product.import({
   *   file // uploaded File instance
   * })
   * .then(({ transaction_id }) => {
   *   console.log(transaction_id)
   * })
   */
  import(body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      const form = new FormData();
      form.append("file", body.file);
      return yield this.client.fetch(`/admin/products/import`, {
        method: "POST",
        headers: Object.assign(Object.assign({}, headers), {
          // Let the browser determine the content type.
          "content-type": null
        }),
        body: form,
        query
      });
    });
  }
  /**
   * This method creates a product import. The products are only imported after
   * the import is confirmed using the {@link confirmImport} method.
   *
   * This method sends a request to the
   * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimports)
   * API route.
   *
   * @version 2.8.0
   * @ignore
   * @privateRemarks
   * The ignore tag to be removed once the feature is ready.
   * Also, the version indicates the version where the method was added.
   * Maybe we should change the version once the feature is ready.
   *
   * @param body - The import's details.
   * @param query - Query parameters to pass to the request.
   * @param headers - Headers to pass in the request.
   * @returns The import's details.
   *
   * @example
   * sdk.admin.product.createImport({
   *   file // uploaded File instance
   * })
   * .then(({ transaction_id }) => {
   *   console.log(transaction_id)
   * })
   */
  createImport(body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      const response = yield this.client.fetch("admin/uploads/presigned-urls", {
        method: "POST",
        headers,
        body: {
          originalname: body.file.name,
          mime_type: body.file.type,
          size: body.file.size
        },
        query
      });
      yield fetch(response.url, {
        method: "PUT",
        body: body.file
      });
      return yield this.client.fetch("/admin/products/imports", {
        method: "POST",
        headers: Object.assign({}, headers),
        body: {
          file_key: response.filename,
          originalname: response.originalname,
          extension: response.extension,
          size: response.size,
          mime_type: response.mime_type
        },
        query
      });
    });
  }
  /**
   * This method confirms a product import created using the method {@link import}.
   * It sends a request to the
   * [Confirm Product Import](https://docs.medusajs.com/api/admin#products_postproductsimporttransaction_idconfirm)
   * API route.
   *
   * @param transactionId - The ID of the transaction of the created product import. This is returned
   * by the API route used to create the product import.
   * @param query - Query parameters to pass in the request.
   * @param headers - Headers to pass in the request.
   *
   * @example
   * sdk.admin.product.confirmImport("transaction_123")
   * .then(() => {
   *   console.log("Import confirmed")
   * })
   */
  confirmImport(transactionId, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/import/${transactionId}/confirm`, {
        method: "POST",
        headers,
        body: {},
        query
      });
    });
  }
  /**
   * This method starts a product export process to retrieve a CSV of exported products.
   *
   * You'll receive in the response the transaction ID of the workflow generating the CSV file.
   * To check the status of the execution, send a `GET` request to
   * `/admin/workflows-executions/export-products/:transaction-id`.
   *
   * Once the execution finishes successfully, a notification is created for the export.
   * You can retrieve the notifications using the `/admin/notification` API route to
   * retrieve the file's download URL.
   *
   * This method sends a request to the [Export Product](https://docs.medusajs.com/api/admin#products_postproductsexport)
   * API route.
   *
   * @param body - The export's details.
   * @param query - Filters to specify which products to export.
   * @param headers - Headers to pass in the request.
   * @returns The export's details.
   *
   * @example
   * sdk.admin.product.export({})
   * .then(({ transaction_id }) => {
   *   console.log(transaction_id)
   * })
   */
  export(body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/export`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method manages products to create, update, or delete them. It sends a request to the
   * [Manage Products](https://docs.medusajs.com/api/admin#products_postproductsbatch)
   * API route.
   *
   * @param body - The products to create, update, or delete.
   * @param query - Configure the fields to retrieve in the products.
   * @param headers - Headers to pass in the request
   * @returns The batch operations details.
   *
   * @example
   * sdk.admin.product.batch({
   *   create: [
   *     {
   *       title: "Shirt",
   *       options: [{
   *         title: "Default",
   *         values: ["Default Option"]
   *       }],
   *       variants: [
   *         {
   *           title: "Default",
   *           options: {
   *             Default: "Default Option"
   *           },
   *           prices: []
   *         }
   *       ]
   *     }
   *   ],
   *   update: [{
   *     id: "prod_123",
   *     title: "Pants"
   *   }],
   *   delete: ["prod_321"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batch(body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates a product. It sends a request to the
   * [Create Product](https://docs.medusajs.com/api/admin#products_postproducts)
   * API route.
   *
   * @param body - The product's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.create({
   *   title: "Shirt",
   *   options: [{
   *     title: "Default",
   *     values: ["Default Option"]
   *   }],
   *   variants: [
   *     {
   *       title: "Default",
   *       options: {
   *         Default: "Default Option"
   *       },
   *       prices: []
   *     }
   *   ],
   *   shipping_profile_id: "sp_123"
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  create(body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product. It sends a request to the
   * [Update Product](https://docs.medusajs.com/api/admin#products_postproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param body - The data to update in the product.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.update("prod_123", {
   *   title: "Shirt",
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of products. It sends a request to the
   * [List Products](https://docs.medusajs.com/api/admin#products_getproducts) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of products.
   *
   * @example
   * To retrieve the list of products:
   *
   * ```ts
   * sdk.admin.product.list()
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each products:
   *
   * ```ts
   * sdk.admin.product.list({
   *   fields: "id,*variants"
   * })
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a product by its ID. It sends a request to the
   * [Get Product](https://docs.medusajs.com/api/admin#products_getproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * To retrieve a product by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieve("prod_123")
   * .then(({ product }) => {
   *   console.log(product)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieve("prod_123", {
   *   fields: "id,*variants"
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product. It sends a request to the
   * [Delete Product](https://docs.medusajs.com/api/admin#products_deleteproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.delete("prod_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the variants of a product. It sends a request to the
   * [Manage Variants](https://docs.medusajs.com/api/admin#products_postproductsidvariantsbatch)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The variants to create, update, or delete.
   * @param query - Configure the fields to retrieve in the product variants.
   * @param headers - Headers to pass in the request
   * @returns The product variants' details.
   *
   * @example
   * sdk.admin.product.batchVariants("prod_123", {
   *   create: [
   *     {
   *       title: "Blue Shirt",
   *       options: {
   *         Color: "Blue"
   *       },
   *       prices: []
   *     }
   *   ],
   *   update: [
   *     {
   *       id: "variant_123",
   *       title: "Pants"
   *     }
   *   ],
   *   delete: ["variant_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchVariants(productId, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates a variant for a product. It sends a request to the
   * [Create Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariants)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The variant's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.createVariant("prod_123", {
   *   title: "Blue Shirt",
   *   options: {
   *     Color: "Blue"
   *   },
   *   prices: [
   *     {
   *       amount: 10,
   *       currency_code: "usd"
   *     }
   *   ]
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  createVariant(productId, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a variant of a product. It sends a request to the
   * [Update Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The variant's ID.
   * @param body - The data to update in the variant.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.updateVariant(
   *   "prod_123",
   *   "variant_123",
   *     {
   *     title: "Blue Shirt",
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  updateVariant(productId, id, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of products. It sends a request to the
   * [List Products](https://docs.medusajs.com/api/admin#products_getproductsidvariants) API route.
   *
   * @param productId - The ID of the product to retrieve its variants.
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product variants.
   *
   * @example
   * To retrieve the list of product variants:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123")
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product variant:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123", {
   *   fields: "id,*product"
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listVariants(productId, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product's variant. It sends a request to the
   * [Retrieve Variant](https://docs.medusajs.com/api/admin#products_getproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The variant's ID.
   * @param query - Configure the fields to retrieve in the product variant.
   * @param headers - Headers to pass in the request
   * @returns The product variant's details.
   *
   * @example
   * To retrieve a product variant by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieveVariant(
   *   "prod_123",
   *   "variant_123"
   * )
   * .then(({ variant }) => {
   *   console.log(variant)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieveVariant(
   *   "prod_123",
   *   "variant_123",
   *   {
   *     fields: "id, *product"
   *   }
   * )
   * .then(({ variant }) => {
   *   console.log(variant)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveVariant(productId, id, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product's variant. It sends a request to the
   * [Delete Variant](https://docs.medusajs.com/api/admin#products_deleteproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The ID of the variant.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.deleteVariant("prod_123", "variant_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  deleteVariant(productId, id, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages a product's variant's inventories to associate them with inventory items,
   * update their inventory items, or delete their association with inventory items.
   *
   * It sends a request to the
   * [Manage Variant Inventory](https://docs.medusajs.com/api/admin#products_postproductsidvariantsinventoryitemsbatch)
   * API route.
   *
   * @param productId - The ID of the product that the variant belongs to.
   * @param body - The inventory items to create, update, or delete.
   * @param query - Pass query parameters in the request.
   * @param headers - Headers to pass in the request
   * @returns The details of the created, updated, or deleted inventory items.
   *
   * @example
   * sdk.admin.product.batchVariantInventoryItems(
   *   "prod_123",
   *   {
   *     create: [
   *       {
   *         inventory_item_id: "iitem_123",
   *         variant_id: "variant_123",
   *         required_quantity: 10
   *       }
   *     ],
   *     update: [
   *       {
   *         inventory_item_id: "iitem_1234",
   *         variant_id: "variant_1234",
   *         required_quantity: 20
   *       }
   *     ],
   *     delete: [
   *       {
   *         inventory_item_id: "iitem_321",
   *         variant_id: "variant_321"
   *       }
   *     ]
   *   }
   * )
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchVariantInventoryItems(productId, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/inventory-items/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates an option in a product. It sends a request to the
   * [Create Option](https://docs.medusajs.com/api/admin#products_postproductsidoptions)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The option's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.createOption(
   *   "prod_123",
   *   {
   *     title: "Color",
   *     values: ["Green", "Blue"]
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  createOption(productId, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product's option. It sends a request to the
   * [Update Option](https://docs.medusajs.com/api/admin#products_postproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The ID of the option to update.
   * @param body - The data to update in the option.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.updateOption(
   *   "prod_123",
   *   "prodopt_123",
   *   {
   *     title: "Color"
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  updateOption(productId, id, body, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product options. It sends a request to the
   * [List Options](https://docs.medusajs.com/api/admin#products_getproductsidoptions) API route.
   *
   * @param productId - The ID of the product to retrieve its options
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product options.
   *
   * @example
   * To retrieve the list of product options:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123")
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product options:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123", {
   *   fields: "id,title"
   * })
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listOptions(productId, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product's option. It sends a request to the
   * [Get Option](https://docs.medusajs.com/api/admin#products_getproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The product option's ID.
   * @param query - Configure the fields to retrieve in the product option.
   * @param headers - Headers to pass in the request
   * @returns The product option's details.
   *
   * @example
   * To retrieve a product option by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieveOption(
   *   "prod_123",
   *   "prodopt_123"
   * )
   * .then(({ product_option }) => {
   *   console.log(product_option)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieveOption(
   *   "prod_123",
   *   "prodopt_123",
   *   {
   *     fields: "id,title"
   *   }
   * )
   * .then(({ product_option }) => {
   *   console.log(product_option)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveOption(productId, id, query, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product's option. It sends a request to the
   * [Delete Option](https://docs.medusajs.com/api/admin#products_deleteproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The option's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.deleteOption("prod_123", "prodopt_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  deleteOption(productId, id, headers) {
    return __awaiter22(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product-category.js
var __awaiter23 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ProductCategory = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product category. It sends a request to the
   * [Create Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategories)
   * API route.
   *
   * @param body - The details of the category to create.
   * @param query - Configure the fields to retrieve in the category.
   * @param headers - Headers to pass in the request
   * @returns The category's details.
   *
   * @example
   * sdk.admin.productCategory.create({
   *   name: "Shirts"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  create(body, query, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product category. It sends a request to the
   * [Update Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesid)
   * API route.
   *
   * @param id - The product category's ID.
   * @param body - The data to update in the category.
   * @param query - Configure the fields to retrieve in the category.
   * @param headers - Headers to pass in the request
   * @returns The category's details.
   *
   * @example
   * sdk.admin.productCategory.update("pcat_123", {
   *   name: "Shirts"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product categories. It sends a request to the
   * [List Product Categories](https://docs.medusajs.com/api/admin#product-categories_getproductcategories) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product categories.
   *
   * @example
   * To retrieve the list of product categories:
   *
   * ```ts
   * sdk.admin.productCategory.list()
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productCategory.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product category:
   *
   * ```ts
   * sdk.admin.productCategory.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product category by its ID. It sends a request to the
   * [Get Product Category](https://docs.medusajs.com/api/admin#product-categories_getproductcategoriesid) API route.
   *
   * @param id - The category's ID.
   * @param query - Configure the fields to retrieve in the product category.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * To retrieve a product category by its ID:
   *
   * ```ts
   * sdk.admin.productCategory.retrieve("pcat_123")
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productCategory.retrieve("pcat_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product category. It sends a request to the
   * [Delete Product Category](https://docs.medusajs.com/api/admin#product-categories_deleteproductcategoriesid)
   * API route.
   *
   * @param id - The category's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productCategory.delete("pcat_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manaes the products of a category to add or remove them. It sends a request
   * to the [Manage Products](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesidproducts)
   * API route.
   *
   * @param id - The category's ID.
   * @param body - The products to create or update.
   * @param query - Configure the fields to retrieve in the product category.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * sdk.admin.productCategory.updateProducts("pcat_123", {
   *   add: ["prod_123"],
   *   remove: ["prod_321"]
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  updateProducts(id, body, query, headers) {
    return __awaiter23(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-categories/${id}/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product-collection.js
var __awaiter24 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ProductCollection = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product collection. It sends a request to the
   * [Create Collection](https://docs.medusajs.com/api/admin#collections_postcollections)
   * API route.
   *
   * @param body - The details of the product collection to create.
   * @param query - Configure the fields to retrieve in the product collection.
   * @param headers - Headers to pass in the request
   * @returns The product collection's details.
   *
   * @example
   * sdk.admin.productCollection.create({
   *   title: "Summer Collection"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  create(body, query, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a collection. It sends a request to the
   * [Update Collection](https://docs.medusajs.com/api/admin#collections_postcollectionsid)
   * API route.
   *
   * @param id - The ID of the collection.
   * @param body - The data to update in the collection.
   * @param query - Configure the fields to retrieve in the product collection.
   * @param headers - Headers to pass in the request
   * @returns The product collection's details.
   *
   * @example
   * sdk.admin.productCollection.update("pcol_123", {
   *   title: "Summer Collection"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of collections. It sends a request to the
   * [List Collections](https://docs.medusajs.com/api/admin#collections_getcollections) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of collections.
   *
   * @example
   * To retrieve the list of collections:
   *
   * ```ts
   * sdk.admin.productCollection.list()
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productCollection.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each collection:
   *
   * ```ts
   * sdk.admin.productCollection.list({
   *   fields: "id,*products"
   * })
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a collection by its ID. It sends a request to the
   * [Get Collection](https://docs.medusajs.com/api/admin#collections_getcollectionsid) API route.
   *
   * @param id - The collection's ID.
   * @param query - Configure the fields to retrieve in the collection.
   * @param headers - Headers to pass in the request
   * @returns The collection's details.
   *
   * @example
   * To retrieve a collection by its ID:
   *
   * ```ts
   * sdk.admin.productCollection.retrieve("pcol_123")
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productCollection.retrieve("pcol_123", {
   *   fields: "id,*products"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product collection. It sends a request to the
   * [Delete Collection](https://docs.medusajs.com/api/admin#collections_deletecollectionsid)
   * API route.
   *
   * @param id - The collection's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productCollection.delete("pcol_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the products of a collection to add or remove them. It sends a request
   * to the [Manage Products](https://docs.medusajs.com/api/admin#collections_postcollectionsidproducts)
   * API route.
   *
   * @param id - The collection's ID.
   * @param body - The products to add or remove.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * sdk.admin.productCollection.updateProducts("pcol_123", {
   *   add: ["prod_123"],
   *   remove: ["prod_321"]
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  updateProducts(id, body, headers) {
    return __awaiter24(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/collections/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product-tag.js
var __awaiter25 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ProductTag = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product tag. It sends a request to the
   * [Create Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttags)
   * API route.
   *
   * @param body - The details of the product tag.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * sdk.admin.productTag.create({
   *   value: "shirt"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   */
  create(body, query, headers) {
    return __awaiter25(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-tags`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a tag's details. It sends a request to the
   * [Update Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttagsid)
   * API route.
   *
   * @param id - The tag's ID.
   * @param body - The data to update in the tag.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * sdk.admin.productTag.update("ptag_123", {
   *   value: "shirt"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter25(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product tags. It sends a request to the
   * [List Product Tags](https://docs.medusajs.com/api/admin#product-tags_getproducttags) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product tags.
   *
   * @example
   * To retrieve the list of product tags:
   *
   * ```ts
   * sdk.admin.productTag.list()
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productTag.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product tag:
   *
   * ```ts
   * sdk.admin.productTag.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter25(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-tags`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product tag by its ID. It sends a request to the
   * [Get Product Tag](https://docs.medusajs.com/api/admin#product-tags_getproducttagsid) API route.
   *
   * @param id - The product tag's ID.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * To retrieve a product tag by its ID:
   *
   * ```ts
   * sdk.admin.productTag.retrieve("ptag_123")
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productTag.retrieve("ptag_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter25(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product tag. It sends a request to the
   * [Delete Product Tag](https://docs.medusajs.com/api/admin#product-tags_deleteproducttagsid)
   * API route.
   *
   * @param id - The tag's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productTag.delete("ptag_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter25(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product-type.js
var __awaiter26 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ProductType = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product type. It sends a request to the
   * [Create Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypes)
   * API route.
   *
   * @param body - The product type's details.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.create({
   *   value: "Clothes"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   */
  create(body, query, headers) {
    return __awaiter26(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-types`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product type. It sends a request to the
   * [Update Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param body - The data to update in the product type.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.update("ptyp_123", {
   *   value: "Clothes"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter26(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product types. It sends a request to the
   * [List Product Types](https://docs.medusajs.com/api/admin#product-types_getproducttypes) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product types.
   *
   * @example
   * To retrieve the list of product types:
   *
   * ```ts
   * sdk.admin.productType.list()
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productType.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product type:
   *
   * ```ts
   * sdk.admin.productType.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter26(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-types`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product type by its ID. It sends a request to the
   * [Get Product Type](https://docs.medusajs.com/api/admin#product-types_getproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * To retrieve a product type by its ID:
   *
   * ```ts
   * sdk.admin.productType.retrieve("ptyp_123")
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productType.retrieve("ptyp_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter26(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product type. It sends a request to the
   * [Delete Product Type](https://docs.medusajs.com/api/admin#product-types_deleteproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.delete("ptyp_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter26(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/product-variant.js
var __awaiter27 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ProductVariant = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of product variants. It sends a request to the
   * [List Product Variants](https://docs.medusajs.com/api/admin#product-variants_getproductvariants)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product variants.
   *
   * @example
   * To retrieve the list of product variants:
   *
   * ```ts
   * sdk.admin.productVariant.list()
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productVariant.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each campaign:
   *
   * ```ts
   * sdk.admin.productVariant.list({
   *   fields: "id,products"
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter27(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/product-variants`, {
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/promotion.js
var __awaiter28 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Promotion = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a promotion by its ID. It sends a request to the
   * [Retrieve Promotion](https://docs.medusajs.com/api/admin#promotions_getpromotionsid)
   * API route.
   *
   * @param id - The promotion's ID.
   * @param query - Configure the fields to retrieve in the promotion.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * To retrieve a promotion by its ID:
   *
   * ```ts
   * sdk.admin.promotion.retrieve("promo_123")
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.promotion.retrieve("promo_123", {
   *   fields: "id,*application_method"
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of promotions. It sends a request to the
   * [List Promotions](https://docs.medusajs.com/api/admin#promotions_getpromotions)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of promotions.
   *
   * @example
   * To retrieve the list of promotions:
   *
   * ```ts
   * sdk.admin.promotion.list()
   * .then(({ promotions, count, limit, offset }) => {
   *   console.log(promotions)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.promotion.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ promotions, count, limit, offset }) => {
   *   console.log(promotions)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each promotion:
   *
   * ```ts
   * sdk.admin.promotion.list({
   *   fields: "id,*application_method"
   * })
   * .then(({ promotions, count, limit, offset }) => {
   *   console.log(promotions)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions`, {
        headers,
        query
      });
    });
  }
  /**
   * This method creates a new promotion. It sends a request to the
   * [Create Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotions)
   * API route.
   *
   * @param payload - The promotion to create.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * sdk.admin.promotion.create({
   *   name: "My Promotion",
   *   description: "This is a test promotion",
   *   code: "PROMO123",
   *   starts_at: "2021-01-01",
   *   ends_at: "2021-01-01",
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  create(payload, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method updates a promotion. It sends a request to the
   * [Update Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotionsid)
   * API route.
   *
   * @param id - The promotion's ID.
   * @param payload - The details to update in the promotion.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * sdk.admin.promotion.update("promo_123", {
   *   code: "PROMO123",
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  update(id, payload, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method deletes a promotion. It sends a request to the
   * [Delete Promotion](https://docs.medusajs.com/api/admin#promotions_deletepromotionsid)
   * API route.
   *
   * @param id - The promotion's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deleted promotion's details.
   *
   * @example
   * sdk.admin.promotion.delete("promo_123")
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  delete(id, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method creates and adds rules to a promotion. It can be the promotion's rules,
   * or its application method's buy or target rules. That depends on the rule type
   * you specify as a parameter.
   *
   * - If you set the `ruleType` to `rules`, the method sends a request to the
   * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
   * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
   * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
   * - If you set the `ruleType` to `target-rules`, the method sends a request to the
   * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
   *
   * @param id - The promotion's ID.
   * @param ruleType - The type of rules to create.
   * @param payload - The rules to create.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * sdk.admin.promotion.addRules("promo_123", "rules", {
   *   rules: [
   *     {
   *       operator: "eq",
   *       attribute: "product_id",
   *       values: ["prod_123"]
   *     }
   *   ]
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  addRules(id, ruleType, payload, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { create: payload.rules }
      });
    });
  }
  /**
   * This method updates the rules of a promotion. It can be the promotion's rules,
   * or its application method's buy or target rules. That depends on the rule type
   * you specify as a parameter.
   *
   * - If you set the `ruleType` to `rules`, the method sends a request to the
   * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
   * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
   * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
   * - If you set the `ruleType` to `target-rules`, the method sends a request to the
   * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
   *
   * @param id - The promotion's ID.
   * @param ruleType - The type of rules to update.
   * @param payload - The rules to update.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * sdk.admin.promotion.updateRules("promo_123", "rules", {
   *   rules: [
   *     {
   *       id: "rule_123",
   *       operator: "ne",
   *     }
   *   ]
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  updateRules(id, ruleType, payload, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { update: payload.rules }
      });
    });
  }
  /**
   * This method removes rules from a promotion. It can be the promotion's rules,
   * or its application method's buy or target rules. That depends on the rule type
   * you specify as a parameter.
   *
   * - If you set the `ruleType` to `rules`, the method sends a request to the
   * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
   * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
   * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
   * - If you set the `ruleType` to `target-rules`, the method sends a request to the
   * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
   *
   * @param id - The promotion's ID.
   * @param ruleType - The type of rules to remove.
   * @param payload - The rules to remove.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's details.
   *
   * @example
   * sdk.admin.promotion.removeRules("promo_123", "rules", {
   *   rule_ids: ["rule_123"]
   * })
   * .then(({ promotion }) => {
   *   console.log(promotion)
   * })
   */
  removeRules(id, ruleType, payload, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { delete: payload.rule_ids }
      });
    });
  }
  /**
   * This method retrieves the rules of a promotion. It can be the promotion's rules,
   * or its application method's buy or target rules. That depends on the rule type
   * you specify as a parameter.
   *
   * This method sends a request to the
   * [List Rules of a Promotion API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsidrule_type)
   *
   * @param id - The promotion's ID.
   * @param ruleType - The type of rules to retrieve. Can be `rules`, `buy-rules`, or `target-rules`.
   * @param query - Configure the fields to retrieve in the rules.
   * @param headers - Headers to pass in the request.
   * @returns The promotion's rules.
   *
   * @example
   * sdk.admin.promotion.listRules("promo_123", "rules")
   * .then(({ rules }) => {
   *   console.log(rules)
   * })
   */
  listRules(id, ruleType, query, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}`, {
        headers,
        query
      });
    });
  }
  /**
   * Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters. Only the attributes of the rule type specified in the path parameter are retrieved:
   *
   * - If `rule_type` is `rules`, the attributes of the promotion's type are retrieved.
   * - If `rule_type` is `target-rules`, the target rules' attributes of the application method's type are retrieved.
   * - If `rule_type` is `buy-rules`, the buy rules' attributes of the application method's type are retrieved.
   *
   * This method sends a request to the
   * [List Rule Attribute Options API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsruleattributeoptionsrule_type)
   *
   * @param ruleType - The type of rules to retrieve the attributes for. Can be `rules`, `buy-rules`, or `target-rules`.
   * @param promotionType - The type of promotion to retrieve the attributes for. It can be `standard` or `buyget`.
   * @param headers - Headers to pass in the request.
   * @returns The list of rule attributes.
   *
   * @example
   * sdk.admin.promotion.listRuleAttributes("rules", "standard")
   * .then(({ attributes }) => {
   *   console.log(attributes)
   * })
   */
  listRuleAttributes(ruleType, promotionType, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/rule-attribute-options/${ruleType}`, {
        headers,
        query: { promotion_type: promotionType }
      });
    });
  }
  /**
   * Retrieve all potential values for promotion rules and target and buy rules based on the specified rule attribute and type.
   * For example, if you provide the ID of the `currency_code` rule attribute, and set `rule_type` to rules,
   * a list of currencies are retrieved in label-value pairs.
   *
   * This method sends a request to the
   * [List Rule Values API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsrulevalueoptionsrule_typerule_attribute_id)
   *
   * @param ruleType - The type of rules to retrieve the values for. Can be `rules`, `buy-rules`, or `target-rules`.
   * @param ruleValue - The ID of the rule attribute to retrieve the values for.
   * @param query - Configure the fields to retrieve in the rule values.
   * @param headers - Headers to pass in the request.
   * @returns The list of rule values.
   *
   * @example
   * sdk.admin.promotion.listRuleValues("rules", "attr_123")
   * .then(({ values }) => {
   *   console.log(values)
   * })
   */
  listRuleValues(ruleType, ruleValue, query, headers) {
    return __awaiter28(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/promotions/rule-value-options/${ruleType}/${ruleValue}`, {
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/refund-reasons.js
var __awaiter29 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var RefundReason = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a list of refund reasons. It sends a request to the
   * [List Refund Reasons](https://docs.medusajs.com/api/admin#refund-reasons_getrefundreasons)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of refund reasons.
   *
   * @example
   * To retrieve the list of refund reasons:
   *
   * ```ts
   * sdk.admin.refundReason.list()
   * .then(({ refund_reasons, count, limit, offset }) => {
   *   console.log(refund_reasons)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.refundReason.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ refund_reasons, count, limit, offset }) => {
   *   console.log(refund_reasons)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each refund reason:
   *
   * ```ts
   * sdk.admin.refundReason.list({
   *   fields: "id,name"
   * })
   * .then(({ refund_reasons, count, limit, offset }) => {
   *   console.log(refund_reasons)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   *
   */
  list(query, headers) {
    return __awaiter29(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/refund-reasons`, {
        query,
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/region.js
var __awaiter30 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Region = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a new region. It sends a request to the
   * [Create Region](https://docs.medusajs.com/api/admin#regions_postregions)
   * API route.
   *
   * @param body - The details of the region to create.
   * @param query - Configure the fields and relations to retrieve in the region.
   * @param headers - Headers to pass in the request.
   * @returns The created region's details.
   *
   * @example
   * sdk.admin.region.create({
   *   name: "United States",
   *   currency_code: "usd",
   * })
   * .then(({ region }) => {
   *   console.log(region)
   * })
   */
  create(body, query, headers) {
    return __awaiter30(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/regions`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a region. It sends a request to the
   * [Update Region](https://docs.medusajs.com/api/admin#regions_postregionsid)
   * API route.
   *
   * @param id - The ID of the region to update.
   * @param body - The details of the region to update.
   * @param query - Configure the fields and relations to retrieve in the region.
   * @param headers - Headers to pass in the request.
   * @returns The updated region's details.
   *
   * @example
   * sdk.admin.region.update("region_123", {
   *   name: "United States",
   * })
   * .then(({ region }) => {
   *   console.log(region)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter30(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a list of regions. It sends a request to the
   * [List Regions](https://docs.medusajs.com/api/admin#regions_getregions)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of regions.
   *
   * @example
   * To retrieve the list of regions:
   *
   * ```ts
   * sdk.admin.region.list()
   * .then(({ regions, count, limit, offset }) => {
   *   console.log(regions)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.region.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ regions, count, limit, offset }) => {
   *   console.log(regions)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each region:
   *
   * ```ts
   * sdk.admin.region.list({
   *   fields: "id,*countries"
   * })
   * .then(({ regions, count, limit, offset }) => {
   *   console.log(regions)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter30(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/regions`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method retrieves a region by ID. It sends a request to the
   * [Get Region](https://docs.medusajs.com/api/admin#regions_getregionsid)
   * API route.
   *
   * @param id - The ID of the region to retrieve.
   * @param query - Configure the fields and relations to retrieve in the region.
   * @param headers - Headers to pass in the request.
   * @returns The region's details.
   *
   * @example
   * To retrieve a region by its ID:
   *
   * ```ts
   * sdk.admin.region.retrieve("region_123")
   * .then(({ region }) => {
   *   console.log(region)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.region.retrieve("region_123", {
   *   fields: "id,*countries"
   * })
   * .then(({ region }) => {
   *   console.log(region)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter30(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a region by ID. It sends a request to the
   * [Delete Region](https://docs.medusajs.com/api/admin#regions_deleteregionsid)
   * API route.
   *
   * @param id - The ID of the region to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.region.delete("region_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter30(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/reservation.js
var __awaiter31 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Reservation = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a reservation by ID. It sends a request to the
   * [Get Reservation](https://docs.medusajs.com/api/admin#reservations_getreservationsid)
   * API route.
   *
   * @param id - The reservation's ID.
   * @param query - Configure the fields and relations to retrieve in the reservation.
   * @param headers - Headers to pass in the request.
   * @returns The reservation's details.
   *
   * @example
   * To retrieve a reservation by its ID:
   *
   * ```ts
   * sdk.admin.reservation.retrieve("res_123")
   * .then(({ reservation }) => {
   *   console.log(reservation)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.reservation.retrieve("res_123", {
   *   fields: "id,name"
   * })
   * .then(({ reservation }) => {
   *   console.log(reservation)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter31(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of reservations. It sends a request to the
   * [List Reservations](https://docs.medusajs.com/api/admin#reservations_getreservations)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of reservations.
   *
   * @example
   * To retrieve the list of reservations:
   *
   * ```ts
   * sdk.admin.reservation.list()
   * .then(({ reservations, count, limit, offset }) => {
   *   console.log(reservations)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.reservation.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ reservations, count, limit, offset }) => {
   *   console.log(reservations)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each reservation:
   *
   * ```ts
   * sdk.admin.reservation.list({
   *   fields: "id,*inventory_item"
   * })
   * .then(({ reservations, count, limit, offset }) => {
   *   console.log(reservations)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter31(this, void 0, void 0, function* () {
      return yield this.client.fetch("/admin/reservations", {
        method: "GET",
        query,
        headers
      });
    });
  }
  /**
   * This method creates a reservation. It sends a request to the
   * [Create Reservation](https://docs.medusajs.com/api/admin#reservations_postreservations)
   * API route.
   *
   * @param body - The details of the reservation to create.
   * @param query - Configure the fields and relations to retrieve in the reservation.
   * @param headers - Headers to pass in the request.
   * @returns The reservation's details.
   *
   * @example
   * sdk.admin.reservation.create({
   *   inventory_item_id: "iitem_123",
   *   location_id: "sloc_123",
   *   quantity: 10,
   * })
   * .then(({ reservation }) => {
   *   console.log(reservation)
   * })
   */
  create(body, query, headers) {
    return __awaiter31(this, void 0, void 0, function* () {
      return yield this.client.fetch("/admin/reservations", {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  /**
   * This method updates a reservation. It sends a request to the
   * [Update Reservation](https://docs.medusajs.com/api/admin#reservations_postreservationsid)
   * API route.
   *
   * @param id - The reservation's ID.
   * @param body - The details of the reservation to update.
   * @param query - Configure the fields and relations to retrieve in the reservation.
   * @param headers - Headers to pass in the request.
   * @returns The reservation's details.
   *
   * @example
   * sdk.admin.reservation.update("res_123", {
   *   quantity: 20,
   * })
   * .then(({ reservation }) => {
   *   console.log(reservation)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter31(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a reservation by ID. It sends a request to the
   * [Delete Reservation](https://docs.medusajs.com/api/admin#reservations_deletereservationsid)
   * API route.
   *
   * @param id - The reservation's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.reservation.delete("res_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter31(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
};
var reservation_default = Reservation;

// node_modules/@medusajs/js-sdk/dist/esm/admin/return.js
var __awaiter32 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Return = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a list of returns. It sends a request to the
   * [List Returns](https://docs.medusajs.com/api/admin#returns_getreturns)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of returns.
   *
   * @example
   * To retrieve the list of returns:
   *
   * ```ts
   * sdk.admin.return.list()
   * .then(({ returns, count, limit, offset }) => {
   *   console.log(returns)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.return.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ returns, count, limit, offset }) => {
   *   console.log(returns)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each return:
   *
   * ```ts
   * sdk.admin.return.list({
   *   fields: "id,*items"
   * })
   * .then(({ returns, count, limit, offset }) => {
   *   console.log(returns)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a return by ID. It sends a request to the
   * [Get Return](https://docs.medusajs.com/api/admin#returns_getreturnsid)
   * API route.
   *
   * @param id - The ID of the return to retrieve.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * To retrieve a return by its ID:
   *
   * ```ts
   * sdk.admin.return.retrieve("return_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.return.retrieve("return_123", {
   *   fields: "id,*items"
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method initiates a return request by creating a return. It sends a request to the
   * [Create Return](https://docs.medusajs.com/api/admin#returns_postreturns)
   * API route.
   *
   * @param body - The details of the return to create.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.initiateRequest({
   *   order_id: "order_123",
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  initiateRequest(body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a return. It sends a request to the
   * [Cancel Return](https://docs.medusajs.com/api/admin#returns_postreturnsidcancel)
   * API route.
   *
   * @param id - The ID of the return to cancel.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.cancel("return_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method cancels a return request. It sends a request to the
   * [Cancel Return Request](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequest)
   * API route.
   *
   * @param id - The ID of the return to cancel.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.cancelRequest("return_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an item to a return request. It sends a request to the
   * [Add Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitems)
   * API route.
   *
   * @param id - The ID of the return to add the item to.
   * @param body - The details of the item to add to the return.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.addReturnItem("return_123", {
   *   id: "orlitem_123",
   *   quantity: 1,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  addReturnItem(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an item in a return request by the ID of the item's `RETURN_ITEM` action.
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property. For example,
   * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Update Requested Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to update the item in.
   * @param actionId - The ID of the item's `RETURN_ITEM` action.
   * @param body - The details of the item to update.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.updateReturnItem("return_123", "orchach_123", {
   *   quantity: 2,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  updateReturnItem(id, actionId, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an item from a return request by the ID of the item's `RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property. For example,
   * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Remove Item from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequestitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to remove the item from.
   * @param actionId - The ID of the item's `RETURN_ITEM` action.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.removeReturnItem("return_123", "orchach_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  removeReturnItem(id, actionId, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds a shipping method to a return request. It sends a request to the
   * [Add Shipping Method to Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethod)
   * API route.
   *
   * @param id - The ID of the return to add the shipping method to.
   * @param body - The details of the shipping method to add to the return.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.addReturnShipping("return_123", {
   *   shipping_option_id: "so_123",
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  addReturnShipping(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a shipping method in a return request by the ID of the shipping method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
   * the ID of a shipping method's `SHIPPING_ADD` action.
   *
   * This method sends a request to the
   * [Update Shipping Method in Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethodaction_id)
   * API route.
   *
   * @param id - The ID of the return to update the shipping method in.
   * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details of the shipping method to update.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.updateReturnShipping("return_123", "orchach_123", {
   *   custom_amount: 100,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  updateReturnShipping(id, actionId, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes a shipping method from a return request by the ID of the shipping method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
   * the ID of a shipping method's `SHIPPING_ADD` action.
   *
   * This method sends a request to the
   * [Remove Shipping Method from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidshippingmethodaction_id)
   * API route.
   *
   * @param id - The ID of the return to remove the shipping method from.
   * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.deleteReturnShipping("return_123", "orchach_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  deleteReturnShipping(id, actionId, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method updates a return request. It sends a request to the
   * [Update Return](https://docs.medusajs.com/api/admin#returns_postreturnsid)
   * API route.
   *
   * @param id - The ID of the return to update.
   * @param body - The details of the return to update.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.updateRequest("return_123", {
   *   location_id: "sloc_123",
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  updateRequest(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method confirms a return request. The return's changes are applied on the inventory quantity of the return
   * items and the order only after the return has been confirmed as received using the
   * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
   * API route.
   *
   * This method sends a request to the
   * [Confirm Return Request](https://docs.medusajs.com/api/admin#returns_postreturnsidrequest)
   * API route.
   *
   * @param id - The ID of the return to confirm.
   * @param body - The details of the return to confirm.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.confirmRequest("return_123", {
   *   no_notification: true,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  confirmRequest(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method starts the return receival process. It sends a request to the
   * [Start Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceive)
   * API route.
   *
   * @param id - The ID of the return to start the receival process.
   * @param body - The details of the return to start the receival process.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.initiateReceive("return_123", {
   *   internal_note: "Return received by the customer",
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  initiateReceive(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method adds received items to a return. These items will have the action `RECEIVE_RETURN_ITEM`.
   *
   * The method sends a request to the
   * [Add Received Items](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitems)
   * API route.
   *
   * @param id - The ID of the return to add the received items to.
   * @param body - The details of the received items to add to the return.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.receiveItems("return_123", {
   *   items: [
   *     { id: "item_123", quantity: 1 },
   *   ],
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  receiveItems(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a received item in the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
   * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Update Received Item](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to update the received item in.
   * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
   * @param body - The details of the received item to update.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.updateReceiveItem("return_123", "orchach_123", {
   *   quantity: 2,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  updateReceiveItem(id, actionId, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes a received item from the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
   * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Remove Received Item](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceiveitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to remove the received item from.
   * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.removeReceiveItem("return_123", "orchach_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  removeReceiveItem(id, actionId, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds damaged items to the return. These items will have the action `RECEIVE_DAMAGED_RETURN_ITEM`.
   *
   * A damaged item's quantity is not added back to the associated inventory item's quantity in the
   * stock location where the return is initiated from.
   *
   * The method sends a request to the
   * [Add Damaged Items](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitems)
   * API route.
   *
   * @param id - The ID of the return to add the damaged items to.
   * @param body - The details of the damaged items to add to the return.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.dismissItems("return_123", {
   *   items: [
   *     { id: "orli_123", quantity: 1 },
   *   ],
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  dismissItems(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a damaged item in the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
   * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Update Damaged Item](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to update the damaged item in.
   * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   * @param body - The details of the damaged item to update.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.updateDismissItem("return_123", "orchach_123", {
   *   quantity: 2,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  updateDismissItem(id, actionId, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes a damaged item from the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
   * using its `action` property, and use the value of the `id` property.
   *
   * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
   * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   *
   * This method sends a request to the
   * [Remove Damaged Item](https://docs.medusajs.com/api/admin#returns_deletereturnsiddismissitemsaction_id)
   * API route.
   *
   * @param id - The ID of the return to remove the damaged item from.
   * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.removeDismissItem("return_123", "orchach_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  removeDismissItem(id, actionId, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms the return receival. It sends a request to the
   * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
   * API route.
   *
   * @param id - The ID of the return to confirm the receival of.
   * @param body - The details of the receival confirmation.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.confirmReceive("return_123", {
   *   no_notification: true,
   * })
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  confirmReceive(id, body, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive/confirm`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a return receival. It sends a request to the
   * [Cancel Return Receival](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceive)
   * API route.
   *
   * @param id - The ID of the return to cancel the receival of.
   * @param query - Configure the fields and relations to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The return's details.
   *
   * @example
   * sdk.admin.return.cancelReceive("return_123")
   * .then(({ return }) => {
   *   console.log(return)
   * })
   */
  cancelReceive(id, query, headers) {
    return __awaiter32(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/return-reason.js
var __awaiter33 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ReturnReason = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a list of return reasons. It sends a request to the
   * [List Return Reasons](https://docs.medusajs.com/api/admin#return-reasons_returnreason_schema)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of return reasons.
   *
   * @example
   * To retrieve the list of return reasons:
   *
   * ```ts
   * sdk.admin.returnReason.list()
   * .then(({ return_reasons, count, limit, offset }) => {
   *   console.log(return_reasons)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.returnReason.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ return_reasons, count, limit, offset }) => {
   *   console.log(return_reasons)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each return reason:
   *
   * ```ts
   * sdk.admin.returnReason.list({
   *   fields: "id,value"
   * })
   * .then(({ return_reasons, count, limit, offset }) => {
   *   console.log(return_reasons)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter33(this, void 0, void 0, function* () {
      return yield this.client.fetch("/admin/return-reasons", {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a return reason by ID. It sends a request to the
   * [Get Return Reason](https://docs.medusajs.com/api/admin#return-reasons_getreturnreasonsid)
   * API route.
   *
   * @param id - The return reason's ID.
   * @param query - Configure the fields and relations to retrieve in the return reason.
   * @param headers - Headers to pass in the request.
   * @returns The return reason's details.
   *
   * @example
   * To retrieve a return reason by its ID:
   *
   * ```ts
   * sdk.admin.returnReason.retrieve("ret_123")
   * .then(({ return_reason }) => {
   *   console.log(return_reason)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.returnReason.retrieve("ret_123", {
   *   fields: "id,value"
   * })
   * .then(({ return_reason }) => {
   *   console.log(return_reason)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter33(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/return-reasons/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method creates a return reason. It sends a request to the
   * [Create Return Reason](https://docs.medusajs.com/api/admin#return-reasons_postreturnreasons)
   * API route.
   *
   * @param body - The details of the return reason to create.
   * @param query - Configure the fields and relations to retrieve in the return reason.
   * @param headers - Headers to pass in the request.
   * @returns The return reason's details.
   *
   * @example
   * sdk.admin.returnReason.create({
   *   value: "refund",
   *   label: "Refund",
   * })
   * .then(({ return_reason }) => {
   *   console.log(return_reason)
   * })
   */
  create(body, query, headers) {
    return __awaiter33(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/return-reasons`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a return reason. It sends a request to the
   * [Update Return Reason](https://docs.medusajs.com/api/admin#return-reasons_postreturnreasonsid)
   * API route.
   *
   * @param id - The return reason's ID.
   * @param body - The details of the return reason to update.
   * @param query - Configure the fields and relations to retrieve in the return reason.
   * @param headers - Headers to pass in the request.
   * @returns The return reason's details.
   *
   * @example
   * sdk.admin.returnReason.update("ret_123", {
   *   value: "refund",
   *   label: "Refund",
   * })
   * .then(({ return_reason }) => {
   *   console.log(return_reason)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter33(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/return-reasons/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a return reason. It sends a request to the
   * [Delete Return Reason](https://docs.medusajs.com/api/admin#return-reasons_deletereturnreasonsid)
   * API route.
   *
   * @param id - The return reason's ID.
   * @param query - Query parameters to pass to the request.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.returnReason.delete("ret_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, query, headers) {
    return __awaiter33(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/return-reasons/${id}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/sales-channel.js
var __awaiter34 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var SalesChannel = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a new sales channel. It sends a request to the
   * [Create Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannels)
   * API route.
   *
   * @param body - The details of the sales channel to create.
   * @param query - Configure the fields and relations to retrieve in the sales channel.
   * @param headers - Headers to pass in the request.
   * @returns The sales channel's details.
   *
   * @example
   * sdk.admin.salesChannel.create({
   *   name: "Storefront",
   * })
   * .then(({ salesChannel }) => {
   *   console.log(salesChannel)
   * })
   */
  create(body, query, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a sales channel. It sends a request to the
   * [Update Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsid)
   * API route.
   *
   * @param id - The ID of the sales channel to update.
   * @param body - The details of the sales channel to update.
   * @param query - Configure the fields and relations to retrieve in the sales channel.
   * @param headers - Headers to pass in the request.
   * @returns The sales channel's details.
   *
   * @example
   * sdk.admin.salesChannel.update(
   *   "sc_123",
   *   {
   *     name: "Storefront",
   *   }
   * )
   * .then(({ salesChannel }) => {
   *   console.log(salesChannel)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a sales channel. It sends a request to the
   * [Delete Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_deletesaleschannelsid)
   * API route.
   *
   * @param id - The ID of the sales channel to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.salesChannel.delete("sc_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a sales channel. It sends a request to the
   * [Retrieve Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannelsid)
   * API route.
   *
   * @param id - The ID of the sales channel to retrieve.
   * @param query - Configure the fields and relations to retrieve in the sales channel.
   * @param headers - Headers to pass in the request.
   * @returns The sales channel's details.
   *
   * @example
   * To retrieve a sales channel by its ID:
   *
   * ```ts
   * sdk.admin.salesChannel.retrieve("sc_123")
   * .then(({ sales_channel }) => {
   *   console.log(sales_channel)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.salesChannel.retrieve("sc_123", {
   *   fields: "id,*products"
   * })
   * .then(({ sales_channel }) => {
   *   console.log(sales_channel)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of sales channels. It sends a request to the
   * [List Sales Channels](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannels)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of sales channels.
   *
   * @example
   * To retrieve the list of sales channels:
   *
   * ```ts
   * sdk.admin.salesChannel.list()
   * .then(({ sales_channels, count, limit, offset }) => {
   *   console.log(sales_channels)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.salesChannel.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ sales_channels, count, limit, offset }) => {
   *   console.log(sales_channels)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each sales channel:
   *
   * ```ts
   * sdk.admin.salesChannel.list({
   *   fields: "id,*products"
   * })
   * .then(({ sales_channels, count, limit, offset }) => {
   *   console.log(sales_channels)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method manages the products in a sales channel to add or remove them. It sends a request to the
   * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
   * API route.
   *
   * @param id - The ID of the sales channel to manage the products for.
   * @param body - The details of the products to add or remove from the sales channel.
   * @param headers - Headers to pass in the request.
   * @returns The sales channel's details.
   *
   * @example
   * sdk.admin.salesChannel.updateProducts("sc_123", {
   *   add: ["prod_123", "prod_456"],
   *   remove: ["prod_789"]
   * })
   * .then(({ sales_channel }) => {
   *   console.log(sales_channel)
   * })
   *
   * @deprecated Use {@link batchProducts} instead
   */
  updateProducts(id, body, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method manages the products in a sales channel to add or remove them. It sends a request to the
   * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
   * API route.
   *
   * @param id - The ID of the sales channel to manage the products for.
   * @param body - The details of the products to add or remove from the sales channel.
   * @param headers - Headers to pass in the request.
   * @returns The sales channel's details.
   *
   * @example
   * sdk.admin.salesChannel.batchProducts("sc_123", {
   *   add: ["prod_123", "prod_456"],
   *   remove: ["prod_789"]
   * })
   * .then(({ sales_channel }) => {
   *   console.log(sales_channel)
   * })
   */
  batchProducts(id, body, headers) {
    return __awaiter34(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-option.js
var __awaiter35 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ShippingOption = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a shipping option. It sends a request to the
   * [Create Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptions)
   * API route.
   *
   * @param body - The details of the shipping option to create.
   * @param query - Configure the fields and relations to retrieve in the shipping option.
   * @param headers - Headers to pass in the request.
   * @returns The shipping option's details.
   *
   * @example
   * sdk.admin.shippingOption.create({
   *   name: "Standard Shipping",
   *   profile_id: "shp_123",
   * })
   * .then(({ shipping_option }) => {
   *   console.log(shipping_option)
   * })
   */
  create(body, query, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a shipping option. It sends a request to the
   * [Get Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptionsid)
   * API route.
   *
   * @param id - The ID of the shipping option to retrieve.
   * @param query - Configure the fields and relations to retrieve in the shipping option.
   * @param headers - Headers to pass in the request.
   * @returns The shipping option's details.
   *
   * @example
   * To retrieve a shipping option by its ID:
   *
   * ```ts
   * sdk.admin.shippingOption.retrieve("so_123")
   * .then(({ shipping_option }) => {
   *   console.log(shipping_option)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.shippingOption.retrieve("so_123", {
   *   fields: "id,*service_zone"
   * })
   * .then(({ shipping_option }) => {
   *   console.log(shipping_option)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method updates a shipping option. It sends a request to the
   * [Update Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsid)
   * API route.
   *
   * @param id - The ID of the shipping option to update.
   * @param body - The details of the shipping option to update.
   * @param query - Configure the fields and relations to retrieve in the shipping option.
   * @param headers - Headers to pass in the request.
   * @returns The shipping option's details.
   *
   * @example
   * sdk.admin.shippingOption.update("so_123", {
   *   name: "Standard Shipping",
   * })
   * .then(({ shipping_option }) => {
   *   console.log(shipping_option)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a shipping option. It sends a request to the
   * [Delete Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_deleteshippingoptionsid)
   * API route.
   *
   * @param id - The ID of the shipping option to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.shippingOption.delete("so_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a list of shipping options. It sends a request to the
   * [List Shipping Options](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptions)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of shipping options.
   *
   * @example
   * To retrieve the list of shipping options:
   *
   * ```ts
   * sdk.admin.shippingOption.list()
   * .then(({ shipping_options, count, limit, offset }) => {
   *   console.log(shipping_options)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.shippingOption.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ shipping_options, count, limit, offset }) => {
   *   console.log(shipping_options)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each shipping option:
   *
   * ```ts
   * sdk.admin.shippingOption.list({
   *   fields: "id,*service_zone"
   * })
   * .then(({ shipping_options, count, limit, offset }) => {
   *   console.log(shipping_options)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method manages the rules of a shipping option to create, update, or remove them. It sends a request to the
   * [Manage Rules of a Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsidrulesbatch)
   * API route.
   *
   * @param id - The ID of the shipping option to manage the rules for.
   * @param body - The details of the shipping option rules to manage.
   * @param headers - Headers to pass in the request.
   * @returns The shipping option's details.
   *
   * @example
   * sdk.admin.shippingOption.updateRules("so_123", {
   *   create: [{ attribute: "enabled_in_store", operator: "eq", value: "true" }],
   * })
   * .then(({ shipping_option }) => {
   *   console.log(shipping_option)
   * })
   */
  updateRules(id, body, headers) {
    return __awaiter35(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}/rules/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-profile.js
var __awaiter36 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ShippingProfile = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a new shipping profile. It sends a request to the
   * [Create Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofiles)
   * API route.
   *
   * @param body - The details of the shipping profile to create.
   * @param query - Configure the fields and relations to retrieve in the shipping profile.
   * @param headers - Headers to pass in the request.
   * @returns The shipping profile's details.
   *
   * @example
   * sdk.admin.shippingProfile.create({
   *   name: "Default Shipping Profile",
   * })
   * .then(({ shipping_profile }) => {
   *   console.log(shipping_profile)
   * })
   */
  create(body, query, headers) {
    return __awaiter36(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a shipping profile. It sends a request to the
   * [Update Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofilesid)
   * API route.
   *
   * @param id - The ID of the shipping profile to update.
   * @param body - The details of the shipping profile to update.
   * @param query - Configure the fields and relations to retrieve in the shipping profile.
   * @param headers - Headers to pass in the request.
   * @returns The shipping profile's details.
   *
   * @example
   * sdk.admin.shippingProfile.update("sp_123", {
   *   name: "Updated Shipping Profile",
   * })
   * .then(({ shipping_profile }) => {
   *   console.log(shipping_profile)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter36(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a shipping profile. It sends a request to the
   * [Delete Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_deleteshippingprofilesid)
   * API route.
   *
   * @param id - The ID of the shipping profile to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.shippingProfile.delete("sp_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter36(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a list of shipping profiles. It sends a request to the
   * [List Shipping Profiles](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofiles)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of shipping profiles.
   *
   * @example
   * To retrieve the list of shipping profiles:
   *
   * ```ts
   * sdk.admin.shippingProfile.list()
   * .then(({ shipping_profiles, count, limit, offset }) => {
   *   console.log(shipping_profiles)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.shippingProfile.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ shipping_profiles, count, limit, offset }) => {
   *   console.log(shipping_profiles)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each shipping profile:
   *
   * ```ts
   * sdk.admin.shippingProfile.list({
   *   fields: "id,name"
   * })
   * .then(({ shipping_profiles, count, limit, offset }) => {
   *   console.log(shipping_profiles)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter36(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a shipping profile. It sends a request to the
   * [Get Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofilesid)
   * API route.
   *
   * @param id - The ID of the shipping profile to retrieve.
   * @param query - Configure the fields and relations to retrieve in the shipping profile.
   * @param headers - Headers to pass in the request.
   * @returns The shipping profile's details.
   *
   * @example
   * To retrieve a shipping profile by its ID:
   *
   * ```ts
   * sdk.admin.shippingProfile.retrieve("sp_123")
   * .then(({ shipping_profile }) => {
   *   console.log(shipping_profile)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.shippingProfile.retrieve("sp_123", {
   *   fields: "id,name"
   * })
   * .then(({ shipping_profile }) => {
   *   console.log(shipping_profile)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter36(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/stock-location.js
var __awaiter37 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var StockLocation = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a new stock location. It sends a request to the
   * [Create Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocations)
   * API route.
   *
   * @param body - The details of the stock location to create.
   * @param query - Configure the fields and relations to retrieve in the stock location.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * sdk.admin.stockLocation.create({
   *   name: "Main Warehouse",
   *   address_id: "addr_123",
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   */
  create(body, query, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a stock location. It sends a request to the
   * [Update Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsid)
   * API route.
   *
   * @param id - The ID of the stock location to update.
   * @param body - The details of the stock location to update.
   * @param query - Configure the fields and relations to retrieve in the stock location.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * sdk.admin.stockLocation.update("sloc_123", {
   *   name: "European Warehouse",
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a stock location. It sends a request to the
   * [Delete Stock Location](https://docs.medusajs.com/api/admin#stock-locations_deletestocklocationsid)
   * API route.
   *
   * @param id - The ID of the stock location to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.stockLocation.delete("sloc_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a stock location. It sends a request to the
   * [Get Stock Location](https://docs.medusajs.com/api/admin#stock-locations_getstocklocationsid)
   * API route.
   *
   * @param id - The ID of the stock location to retrieve.
   * @param query - Configure the fields and relations to retrieve in the stock location.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * To retrieve a stock location by its ID:
   *
   * ```ts
   * sdk.admin.stockLocation.retrieve("sloc_123")
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.stockLocation.retrieve("sloc_123", {
   *   fields: "id,*sales_channels"
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of stock locations. It sends a request to the
   * [List Stock Locations](https://docs.medusajs.com/api/admin#stock-locations_getstocklocations)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of stock locations.
   *
   * @example
   * To retrieve the list of stock locations:
   *
   * ```ts
   * sdk.admin.stockLocation.list()
   * .then(({ stock_locations, count, limit, offset }) => {
   *   console.log(stock_locations)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.stockLocation.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ stock_locations, count, limit, offset }) => {
   *   console.log(stock_locations)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each stock location:
   *
   * ```ts
   * sdk.admin.stockLocation.list({
   *   fields: "id,*sales_channels"
   * })
   * .then(({ stock_locations, count, limit, offset }) => {
   *   console.log(stock_locations)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method manages the sales channels of a stock location by adding or removing them. It sends a request to the
   * [Manage Stock Location Sales Channels](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidsaleschannels)
   * API route.
   *
   * @param id - The ID of the stock location to update the sales channels for.
   * @param body - The details of the sales channels to update.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * sdk.admin.stockLocation.updateSalesChannels("sloc_123", {
   *   add: ["sc_123"],
   *   remove: ["sc_456"],
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   */
  updateSalesChannels(id, body, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/sales-channels`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method adds a new fulfillment set to a stock location. It sends a request to the
   * [Add Fulfillment Set to Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentsets)
   * API route.
   *
   * @param id - The ID of the stock location to add the fulfillment set to.
   * @param body - The details of the fulfillment set to add.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * sdk.admin.stockLocation.createFulfillmentSet("sloc_123", {
   *   name: "Shipping",
   *   type: "shipping",
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   */
  createFulfillmentSet(id, body, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-sets`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method manages the fulfillment providers of a stock location by adding or removing them. It sends a request to the
   * [Manage Fulfillment Providers of Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentproviders)
   * API route.
   *
   * @param id - The ID of the stock location to manage the fulfillment providers for.
   * @param body - The details of the fulfillment providers to manage.
   * @param headers - Headers to pass in the request.
   * @returns The stock location's details.
   *
   * @example
   * sdk.admin.stockLocation.updateFulfillmentProviders("sloc_123", {
   *   add: ["fp_manual_manual"],
   *   remove: ["fp_shipstation_shipstation"],
   * })
   * .then(({ stock_location }) => {
   *   console.log(stock_location)
   * })
   */
  updateFulfillmentProviders(id, body, headers) {
    return __awaiter37(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-providers`, {
        method: "POST",
        headers,
        body
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/store.js
var __awaiter38 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Store = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a store by its ID. It sends a request to the
   * [Get Store](https://docs.medusajs.com/api/admin#stores_getstoresid)
   * API route.
   *
   * @param id - The ID of the store to retrieve.
   * @param query - Configure the fields and relations to retrieve in the store.
   * @param headers - Headers to pass in the request.
   * @returns The store's details.
   *
   * @example
   * To retrieve a store by its ID:
   *
   * ```ts
   * sdk.admin.store.retrieve("store_123")
   * .then(({ store }) => {
   *   console.log(store)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.store.retrieve("store_123", {
   *   fields: "id,*supported_currencies"
   * })
   * .then(({ store }) => {
   *   console.log(store)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter38(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stores/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of stores. It sends a request to the
   * [List Stores](https://docs.medusajs.com/api/admin#stores_getstores)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of stores.
   *
   * @example
   * To retrieve the list of stores:
   *
   * ```ts
   * sdk.admin.store.list()
   * .then(({ stores, count, limit, offset }) => {
   *   console.log(stores)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.store.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ stores, count, limit, offset }) => {
   *   console.log(stores)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each store:
   *
   * ```ts
   * sdk.admin.store.list({
   *   fields: "id,*supported_currencies"
   * })
   * .then(({ stores, count, limit, offset }) => {
   *   console.log(stores)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter38(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stores`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method updates a store. It sends a request to the
   * [Update Store](https://docs.medusajs.com/api/admin#stores_poststoresid)
   * API route.
   *
   * @param id - The ID of the store to update.
   * @param body - The details of the store to update.
   * @param query - Configure the fields and relations to retrieve in the store.
   * @param headers - Headers to pass in the request.
   * @returns The store's details.
   *
   * @example
   * sdk.admin.store.update("store_123", {
   *   name: "My Store",
   * })
   * .then(({ store }) => {
   *   console.log(store)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter38(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/stores/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/tax-provider.js
var __awaiter39 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var taxProviderUrl = "/admin/tax-providers";
var TaxProvider = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a list of tax providers. It sends a request to the
   * [List Tax Providers](https://docs.medusajs.com/api/admin#tax-providers_gettaxproviders)
   * API route.
   *
   * @version 2.8.0
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of tax providers.
   *
   * @example
   * To retrieve the list of tax providers:
   *
   * ```ts
   * sdk.admin.taxProvider.list()
   * .then(({ tax_providers, count, limit, offset }) => {
   *   console.log(tax_providers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.taxProvider.list({
   *   limit: 10,
   *   offset: 10,
   * })
   * .then(({ tax_providers, count, limit, offset }) => {
   *   console.log(tax_providers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each products:
   *
   * ```ts
   * sdk.admin.taxProvider.list({
   *   fields: "id,*regions"
   * })
   * .then(({ tax_providers, count, limit, offset }) => {
   *   console.log(tax_providers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter39(this, void 0, void 0, function* () {
      return yield this.client.fetch(taxProviderUrl, {
        method: "GET",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/tax-rate.js
var __awaiter40 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var taxRateUrl = "/admin/tax-rates";
var TaxRate = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a tax rate. It sends a request to the
   * [Create Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxrates)
   * API route.
   *
   * @param body - The details of the tax rate to create.
   * @param query - Configure the fields and relations to retrieve in the tax rate.
   * @param headers - Headers to pass in the request.
   * @returns The tax rate's details.
   *
   * @example
   * sdk.admin.taxRate.create({
   *   name: "VAT",
   *   tax_region_id: "txreg_123",
   *   code: "VAT",
   *   rate: 2, // 2%
   * })
   * .then(({ tax_rate }) => {
   *   console.log(tax_rate)
   * })
   */
  create(body, query, headers) {
    return __awaiter40(this, void 0, void 0, function* () {
      return yield this.client.fetch(taxRateUrl, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a tax rate. It sends a request to the
   * [Update Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxratesid)
   * API route.
   *
   * @param id - The ID of the tax rate to update.
   * @param body - The details of the tax rate to update.
   * @param query - Configure the fields and relations to retrieve in the tax rate.
   * @param headers - Headers to pass in the request.
   * @returns The tax rate's details.
   *
   * @example
   * sdk.admin.taxRate.update("txrat_123", {
   *   name: "VAT",
   *   code: "VAT",
   * })
   * .then(({ tax_rate }) => {
   *   console.log(tax_rate)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter40(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a tax rate. It sends a request to the
   * [Delete Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_deletetaxratesid)
   * API route.
   *
   * @param id - The ID of the tax rate to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.taxRate.delete("txrat_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter40(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a tax rate. It sends a request to the
   * [Get Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_gettaxratesid)
   * API route.
   *
   * @param id - The ID of the tax rate to retrieve.
   * @param query - Configure the fields and relations to retrieve in the tax rate.
   * @param headers - Headers to pass in the request.
   * @returns The tax rate's details.
   *
   * @example
   * To retrieve a tax rate by its ID:
   *
   * ```ts
   * sdk.admin.taxRate.retrieve("txrat_123")
   * .then(({ tax_rate }) => {
   *   console.log(tax_rate)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.taxRate.retrieve("txrat_123", {
   *   fields: "id,*tax_region"
   * })
   * .then(({ tax_rate }) => {
   *   console.log(tax_rate)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter40(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of tax rates. It sends a request to the
   * [List Tax Rates](https://docs.medusajs.com/api/admin#tax-rates_gettaxrates)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of tax rates.
   *
   * @example
   * To retrieve the list of tax rates:
   *
   * ```ts
   * sdk.admin.taxRate.list()
   * .then(({ tax_rates, count, limit, offset }) => {
   *   console.log(tax_rates)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.taxRate.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ tax_rates, count, limit, offset }) => {
   *   console.log(tax_rates)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each tax rate:
   *
   * ```ts
   * sdk.admin.taxRate.list({
   *   fields: "id,*tax_region"
   * })
   * .then(({ tax_rates, count, limit, offset }) => {
   *   console.log(tax_rates)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter40(this, void 0, void 0, function* () {
      return yield this.client.fetch(taxRateUrl, {
        method: "GET",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/tax-region.js
var __awaiter41 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var taxRegionUrl = "/admin/tax-regions";
var TaxRegion = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a tax region. It sends a request to the
   * [Create Tax Region](https://docs.medusajs.com/api/admin#tax-regions_posttaxregions)
   * API route.
   *
   * @param body - The details of the tax region to create.
   * @param query - Configure the fields and relations to retrieve in the tax region.
   * @param headers - Headers to pass in the request.
   * @returns The tax region's details.
   *
   * @example
   * sdk.admin.taxRegion.create({
   *   country_code: "us",
   *   province_code: "ca",
   *   default_tax_rate: {
   *     code: "VAT",
   *     name: "VAT",
   *     rate: 20, // 20%
   *     is_combinable: true,
   *   },
   * })
   * .then(({ tax_region }) => {
   *   console.log(tax_region)
   * })
   */
  create(body, query, headers) {
    return __awaiter41(this, void 0, void 0, function* () {
      return yield this.client.fetch(taxRegionUrl, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a tax region. It sends a request to the
   * [Update Tax Region](https://docs.medusajs.com/api/admin#tax-regions_posttaxregionsid)
   * API route.
   *
   * @version 2.8.0
   *
   * @param id - The ID of the tax region to update.
   * @param body - The details of the tax region to update.
   * @param query - Configure the fields and relations to retrieve in the tax region.
   * @param headers - Headers to pass in the request.
   * @returns The tax region's details.
   *
   * @example
   * sdk.admin.taxRegion.update("txreg_123", {
   *   province_code: "ca",
   * })
   * .then(({ tax_region }) => {
   *   console.log(tax_region)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter41(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a tax region. It sends a request to the
   * [Delete Tax Region](https://docs.medusajs.com/api/admin#tax-regions_deletetaxregionsid)
   * API route.
   *
   * @param id - The ID of the tax region to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.taxRegion.delete("txreg_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter41(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a tax region. It sends a request to the
   * [Get Tax Region](https://docs.medusajs.com/api/admin#tax-regions_gettaxregionsid)
   * API route.
   *
   * @param id - The ID of the tax region to retrieve.
   * @param query - Configure the fields and relations to retrieve in the tax region.
   * @param headers - Headers to pass in the request.
   * @returns The tax region's details.
   *
   * @example
   * To retrieve a tax region by its ID:
   *
   * ```ts
   * sdk.admin.taxRegion.retrieve("txreg_123")
   * .then(({ tax_region }) => {
   *   console.log(tax_region)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.taxRegion.retrieve("txreg_123", {
   *   fields: "id,*tax_rates"
   * })
   * .then(({ tax_region }) => {
   *   console.log(tax_region)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter41(this, void 0, void 0, function* () {
      return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of tax regions. It sends a request to the
   * [List Tax Regions](https://docs.medusajs.com/api/admin#tax-regions_gettaxregions)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of tax regions.
   *
   * @example
   * To retrieve the list of tax regions:
   *
   * ```ts
   * sdk.admin.taxRegion.list()
   * .then(({ tax_regions, count, limit, offset }) => {
   *   console.log(tax_regions)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.taxRegion.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ tax_regions, count, limit, offset }) => {
   *   console.log(tax_regions)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each tax region:
   *
   * ```ts
   * sdk.admin.taxRegion.list({
   *   fields: "id,*tax_rates"
   * })
   * .then(({ tax_regions, count, limit, offset }) => {
   *   console.log(tax_regions)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter41(this, void 0, void 0, function* () {
      return yield this.client.fetch(taxRegionUrl, {
        method: "GET",
        headers,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/upload.js
var __awaiter42 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Upload = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a new upload. It sends a request to the
   * [Upload Files](https://docs.medusajs.com/api/admin#uploads_postuploads)
   * API route.
   *
   * @param body - The details of the files to upload.
   * @param query - Configure the fields and relations to retrieve in the uploaded files.
   * @param headers - Headers to pass in the request.
   * @returns The upload files' details.
   *
   * @privateRemarks
   *
   * Note: The creation/upload flow be made more advanced, with support for streaming and progress, but for now we keep it simple
   *
   * @example
   * sdk.admin.upload.create(
   *   {
   *     files: [
   *        // file uploaded as a base64 string
   *       {
   *         name: "test.txt",
   *         content: "test", // Should be the base64 content of the file
   *       },
   *       // file uploaded as a File object
   *       new File(["test"], "test.txt", { type: "text/plain" })
   *     ],
   *   }
   * )
   * .then(({ files }) => {
   *   console.log(files)
   * })
   */
  create(body, query, headers) {
    return __awaiter42(this, void 0, void 0, function* () {
      const form = new FormData();
      if (body instanceof FileList) {
        Array.from(body).forEach((file) => {
          form.append("files", file);
        });
      } else {
        body.files.forEach((file) => {
          form.append("files", "content" in file ? new Blob([file.content], {
            type: "text/plain"
          }) : file, file.name);
        });
      }
      return this.client.fetch(`/admin/uploads`, {
        method: "POST",
        headers: Object.assign(Object.assign({}, headers), {
          // Let the browser determine the content type.
          "content-type": null
        }),
        body: form,
        query
      });
    });
  }
  /**
   * This method retrieves a file's details by its ID. It sends a request to the
   * [Get File](https://docs.medusajs.com/api/admin#uploads_getuploadsid)
   * API route.
   *
   * @param id - The ID of the file to retrieve.
   * @param query - Query parameters to pass in the request.
   * @param headers - Headers to pass in the request.
   * @returns The file's details.
   *
   * @example
   * sdk.admin.upload.retrieve("test.txt")
   * .then(({ file }) => {
   *   console.log(file)
   * })
   */
  retrieve(id, query, headers) {
    return __awaiter42(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/uploads/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a file by its ID from the configured File Module Provider. It sends a request to the
   * [Delete File](https://docs.medusajs.com/api/admin#uploads_deleteuploadsid)
   * API route.
   *
   * @param id - The ID of the file to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.upload.delete("test.txt")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter42(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/uploads/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method creates a presigned URL for a file upload. It sends a request to the
   * `/admin/uploads/presigned-urls` API route.
   *
   * @param body - The details of the file to upload.
   * @param query - Query parameters to pass in the request.
   * @param headers - Headers to pass in the request.
   * @returns The presigned URL for the file upload.
   *
   * @example
   * sdk.admin.upload.presignedUrl({
   *   name: "test.txt",
   *   size: 1000,
   *   type: "text/plain",
   * }))
   */
  presignedUrl(body, query, headers) {
    return __awaiter42(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/uploads/presigned-urls`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/user.js
var __awaiter43 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var User = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method updates a user. It sends a request to the
   * [Update User](https://docs.medusajs.com/api/admin#users_postusersid)
   * API route.
   *
   * @param id - The ID of the user to update.
   * @param body - The details of the user to update.
   * @param query - Configure the fields and relations to retrieve in the tax region.
   * @param headers - Headers to pass in the request.
   * @returns The user's details.
   *
   * @example
   * sdk.admin.user.update("user_123", {
   *   first_name: "John",
   *   last_name: "Doe",
   * })
   * .then(({ user }) => {
   *   console.log(user)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter43(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a list of users. It sends a request to the
   * [List Users](https://docs.medusajs.com/api/admin#users_getusers)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of users.
   *
   * @example
   * To retrieve the list of users:
   *
   * ```ts
   * sdk.admin.user.list()
   * .then(({ users, count, limit, offset }) => {
   *   console.log(users)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.user.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ users, count, limit, offset }) => {
   *   console.log(users)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each user:
   *
   * ```ts
   * sdk.admin.user.list({
   *   fields: "id,email"
   * })
   * .then(({ users, count, limit, offset }) => {
   *   console.log(users)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter43(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/users`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a user. It sends a request to the
   * [Get User](https://docs.medusajs.com/api/admin#users_getusersid)
   * API route.
   *
   * @param id - The ID of the user to retrieve.
   * @param query - Configure the fields and relations to retrieve in the user.
   * @param headers - Headers to pass in the request.
   * @returns The user's details.
   *
   * @example
   * To retrieve a user by its ID:
   *
   * ```ts
   * sdk.admin.user.retrieve("user_123")
   * .then(({ user }) => {
   *   console.log(user)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.user.retrieve("user_123", {
   *   fields: "id,email"
   * })
   * .then(({ user }) => {
   *   console.log(user)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter43(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a user. It sends a request to the
   * [Delete User](https://docs.medusajs.com/api/admin#users_deleteusersid)
   * API route.
   *
   * @param id - The ID of the user to delete.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.user.delete("user_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter43(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves the currently authenticated user. It sends a request to the
   * [Get Logged-In User](https://docs.medusajs.com/api/admin#users_getusersme)
   * API route.
   *
   * @param query - Configure the fields and relations to retrieve in the user.
   * @param headers - Headers to pass in the request.
   * @returns The user's details.
   *
   * @example
   * To retrieve the currently authenticated user:
   *
   * ```ts
   * sdk.admin.user.me()
   * .then(({ user }) => {
   *   console.log(user)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.user.me({
   *   fields: "id,email"
   * })
   * .then(({ user }) => {
   *   console.log(user)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  me(query, headers) {
    return __awaiter43(this, void 0, void 0, function* () {
      return this.client.fetch(`/admin/users/me`, {
        query,
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/workflow-execution.js
var __awaiter44 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var WorkflowExecution = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a list of workflow executions. It sends a request to the
   * [List Workflow Executions](https://docs.medusajs.com/api/admin#workflows-executions_getworkflowsexecutions)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The list of workflow executions.
   *
   * @example
   * To retrieve the list of workflow executions:
   *
   * ```ts
   * sdk.admin.workflowExecution.list()
   * .then(({ workflow_executions, count, limit, offset }) => {
   *   console.log(workflow_executions)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.workflowExecution.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ workflow_executions, count, limit, offset }) => {
   *   console.log(workflow_executions)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each workflow execution:
   *
   * ```ts
   * sdk.admin.workflowExecution.list({
   *   fields: "id,name"
   * })
   * .then(({ workflow_executions, count, limit, offset }) => {
   *   console.log(workflow_executions)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter44(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/workflows-executions`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method retrieves a workflow execution by its ID. It sends a request to the
   * [Get Workflow Execution](https://docs.medusajs.com/api/admin#workflows-executions_getworkflowsexecutionsworkflow_idtransaction_id)
   * API route.
   *
   * @param id - The ID of the workflow execution to retrieve.
   * @param headers - Headers to pass in the request.
   * @returns The workflow execution's details.
   *
   * @example
   * sdk.admin.workflowExecution.retrieve("wrk_123")
   * .then(({ workflow_execution }) => {
   *   console.log(workflow_execution)
   * })
   */
  retrieve(id, headers) {
    return __awaiter44(this, void 0, void 0, function* () {
      return yield this.client.fetch(`/admin/workflows-executions/${id}`, {
        headers
      });
    });
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/admin/index.js
var Admin = class {
  constructor(client) {
    this.invite = new Invite(client);
    this.customer = new Customer(client);
    this.productCollection = new ProductCollection(client);
    this.productCategory = new ProductCategory(client);
    this.priceList = new PriceList(client);
    this.pricePreference = new PricePreference(client);
    this.product = new Product(client);
    this.productType = new ProductType(client);
    this.upload = new Upload(client);
    this.region = new Region(client);
    this.returnReason = new ReturnReason(client);
    this.stockLocation = new StockLocation(client);
    this.salesChannel = new SalesChannel(client);
    this.fulfillmentSet = new FulfillmentSet(client);
    this.fulfillment = new Fulfillment(client);
    this.fulfillmentProvider = new FulfillmentProvider(client);
    this.shippingOption = new ShippingOption(client);
    this.shippingProfile = new ShippingProfile(client);
    this.inventoryItem = new InventoryItem(client);
    this.notification = new Notification(client);
    this.order = new Order(client);
    this.draftOrder = new DraftOrder(client);
    this.orderEdit = new OrderEdit(client);
    this.return = new Return(client);
    this.claim = new Claim(client);
    this.taxRate = new TaxRate(client);
    this.taxRegion = new TaxRegion(client);
    this.store = new Store(client);
    this.productTag = new ProductTag(client);
    this.user = new User(client);
    this.currency = new Currency(client);
    this.payment = new Payment(client);
    this.productVariant = new ProductVariant(client);
    this.refundReason = new RefundReason(client);
    this.exchange = new Exchange(client);
    this.paymentCollection = new PaymentCollection(client);
    this.apiKey = new ApiKey(client);
    this.workflowExecution = new WorkflowExecution(client);
    this.reservation = new reservation_default(client);
    this.customerGroup = new CustomerGroup(client);
    this.promotion = new Promotion(client);
    this.campaign = new Campaign(client);
    this.plugin = new Plugin(client);
    this.taxProvider = new TaxProvider(client);
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/auth/index.js
var __awaiter45 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Auth = class {
  constructor(client, config) {
    this.register = (actor, method, payload) => __awaiter45(this, void 0, void 0, function* () {
      const { token } = yield this.client.fetch(`/auth/${actor}/${method}/register`, {
        method: "POST",
        body: payload
      });
      this.client.setToken(token);
      return token;
    });
    this.login = (actor, method, payload) => __awaiter45(this, void 0, void 0, function* () {
      const { token, location } = yield this.client.fetch(`/auth/${actor}/${method}`, {
        method: "POST",
        body: payload
      });
      if (location) {
        return { location };
      }
      yield this.setToken_(token);
      return token;
    });
    this.callback = (actor, method, query) => __awaiter45(this, void 0, void 0, function* () {
      const { token } = yield this.client.fetch(`/auth/${actor}/${method}/callback`, {
        method: "GET",
        query
      });
      yield this.setToken_(token);
      return token;
    });
    this.refresh = () => __awaiter45(this, void 0, void 0, function* () {
      const { token } = yield this.client.fetch("/auth/token/refresh", {
        method: "POST"
      });
      yield this.setToken_(token);
      return token;
    });
    this.logout = () => __awaiter45(this, void 0, void 0, function* () {
      var _a, _b;
      if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
        yield this.client.fetch("/auth/session", {
          method: "DELETE"
        });
      }
      this.client.clearToken();
    });
    this.resetPassword = (actor, provider, body) => __awaiter45(this, void 0, void 0, function* () {
      yield this.client.fetch(`/auth/${actor}/${provider}/reset-password`, {
        method: "POST",
        body,
        headers: { accept: "text/plain" }
        // 201 Created response
      });
    });
    this.updateProvider = (actor, provider, body, token) => __awaiter45(this, void 0, void 0, function* () {
      yield this.client.fetch(`/auth/${actor}/${provider}/update`, {
        method: "POST",
        body,
        headers: { Authorization: `Bearer ${token}` }
      });
    });
    this.setToken_ = (token) => __awaiter45(this, void 0, void 0, function* () {
      var _a, _b;
      if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
        yield this.client.fetch("/auth/session", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        this.client.setToken(token);
      }
    });
    this.client = client;
    this.config = config;
  }
};

// node_modules/fetch-event-stream/esm/deps/jsr.io/@std/streams/0.221.0/text_line_stream.js
var _currentLine;
var TextLineStream = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(options = { allowCR: false }) {
    super({
      transform: (chars, controller) => {
        chars = __privateGet(this, _currentLine) + chars;
        while (true) {
          const lfIndex = chars.indexOf("\n");
          const crIndex = options.allowCR ? chars.indexOf("\r") : -1;
          if (crIndex !== -1 && crIndex !== chars.length - 1 && (lfIndex === -1 || lfIndex - 1 > crIndex)) {
            controller.enqueue(chars.slice(0, crIndex));
            chars = chars.slice(crIndex + 1);
            continue;
          }
          if (lfIndex === -1)
            break;
          const endIndex = chars[lfIndex - 1] === "\r" ? lfIndex - 1 : lfIndex;
          controller.enqueue(chars.slice(0, endIndex));
          chars = chars.slice(lfIndex + 1);
        }
        __privateSet(this, _currentLine, chars);
      },
      flush: (controller) => {
        if (__privateGet(this, _currentLine) === "")
          return;
        const currentLine = options.allowCR && __privateGet(this, _currentLine).endsWith("\r") ? __privateGet(this, _currentLine).slice(0, -1) : __privateGet(this, _currentLine);
        controller.enqueue(currentLine);
      }
    });
    __privateAdd(this, _currentLine, "");
  }
};
_currentLine = new WeakMap();

// node_modules/fetch-event-stream/esm/utils.js
function stream(input) {
  let decoder = new TextDecoderStream();
  let split2 = new TextLineStream({ allowCR: true });
  return input.pipeThrough(decoder).pipeThrough(split2);
}
function split(input) {
  let rgx = /[:]\s*/;
  let match = rgx.exec(input);
  let idx = match && match.index;
  if (idx) {
    return [
      input.substring(0, idx),
      input.substring(idx + match[0].length)
    ];
  }
}

// node_modules/fetch-event-stream/esm/mod.js
async function* events(res, signal) {
  if (!res.body)
    return;
  let iter = stream(res.body);
  let line, reader = iter.getReader();
  let event;
  for (; ; ) {
    if (signal && signal.aborted) {
      return reader.cancel();
    }
    line = await reader.read();
    if (line.done)
      return;
    if (!line.value) {
      if (event)
        yield event;
      event = void 0;
      continue;
    }
    let [field, value] = split(line.value) || [];
    if (!field)
      continue;
    if (field === "data") {
      event || (event = {});
      event[field] = event[field] ? event[field] + "\n" + value : value;
    } else if (field === "event") {
      event || (event = {});
      event[field] = value;
    } else if (field === "id") {
      event || (event = {});
      event[field] = +value || value;
    } else if (field === "retry") {
      event || (event = {});
      event[field] = +value || void 0;
    }
  }
}

// node_modules/@medusajs/js-sdk/dist/esm/client.js
var import_qs = __toESM(require_lib());
var __awaiter46 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var PUBLISHABLE_KEY_HEADER = "x-publishable-api-key";
var getBaseUrl = (passedBaseUrl) => {
  if (typeof window === "undefined") {
    return passedBaseUrl;
  }
  if (passedBaseUrl === "" || passedBaseUrl === "/") {
    return window.location.origin;
  }
  return passedBaseUrl;
};
var hasStorage = (storage) => {
  if (typeof window !== "undefined") {
    return storage in window;
  }
  return false;
};
var toBase64 = (str) => {
  if (typeof window !== "undefined") {
    return window.btoa(str);
  }
  return Buffer.from(str).toString("base64");
};
var sanitizeHeaders = (headers) => {
  return Object.assign(Object.assign({}, Object.fromEntries(headers.entries())), { authorization: "<REDACTED>" });
};
var normalizeRequest = (init, headers, config) => {
  var _a, _b, _c;
  let body = init === null || init === void 0 ? void 0 : init.body;
  if (body && ((_a = headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json"))) {
    body = JSON.stringify(body);
  }
  const isFetchCredentialsSupported = "credentials" in Request.prototype;
  const credentials = ((_b = config.auth) === null || _b === void 0 ? void 0 : _b.type) === "session" ? ((_c = config.auth) === null || _c === void 0 ? void 0 : _c.fetchCredentials) || "include" : "omit";
  return Object.assign(Object.assign(Object.assign({}, init), { headers, credentials: isFetchCredentialsSupported ? credentials : void 0 }), body ? { body } : {});
};
var normalizeResponse = (resp, reqHeaders) => __awaiter46(void 0, void 0, void 0, function* () {
  var _a, _b;
  if (resp.status >= 300) {
    const jsonError = yield resp.json().catch(() => ({}));
    throw new FetchError((_a = jsonError.message) !== null && _a !== void 0 ? _a : resp.statusText, resp.statusText, resp.status);
  }
  const isJsonRequest = (_b = reqHeaders.get("accept")) === null || _b === void 0 ? void 0 : _b.includes("application/json");
  return isJsonRequest ? yield resp.json() : resp;
});
var FetchError = class extends Error {
  constructor(message, statusText, status) {
    super(message);
    this.statusText = statusText;
    this.status = status;
  }
};
var Client = class {
  constructor(config) {
    this.DEFAULT_JWT_STORAGE_KEY = "medusa_auth_token";
    this.token = "";
    this.getApiKeyHeader_ = () => {
      return this.config.apiKey ? { Authorization: "Basic " + toBase64(this.config.apiKey + ":") } : {};
    };
    this.getPublishableKeyHeader_ = () => {
      return this.config.publishableKey ? { [PUBLISHABLE_KEY_HEADER]: this.config.publishableKey } : {};
    };
    this.getTokenStorageInfo_ = () => {
      var _a, _b, _c;
      const hasLocal = hasStorage("localStorage");
      const hasSession = hasStorage("sessionStorage");
      const hasCustom = Boolean((_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage);
      const storageMethod = ((_b = this.config.auth) === null || _b === void 0 ? void 0 : _b.jwtTokenStorageMethod) || (hasLocal ? "local" : "nostore");
      const storageKey = ((_c = this.config.auth) === null || _c === void 0 ? void 0 : _c.jwtTokenStorageKey) || this.DEFAULT_JWT_STORAGE_KEY;
      if (!hasLocal && storageMethod === "local") {
        this.throwError_("Local JWT storage is only available in the browser");
      }
      if (!hasSession && storageMethod === "session") {
        this.throwError_("Session JWT storage is only available in the browser");
      }
      if (!hasCustom && storageMethod === "custom") {
        this.throwError_("Custom storage was not provided in the config");
      }
      return {
        storageMethod,
        storageKey
      };
    };
    this.config = Object.assign(Object.assign({}, config), { baseUrl: getBaseUrl(config.baseUrl) });
    const logger = config.logger || {
      error: console.error,
      warn: console.warn,
      info: console.info,
      debug: console.debug
    };
    this.logger = Object.assign(Object.assign({}, logger), { debug: config.debug ? logger.debug : () => {
    } });
    this.fetch_ = this.initClient();
  }
  /**
   * `fetch` closely follows (and uses under the hood) the native `fetch` API. There are, however, few key differences:
   * - Non 2xx statuses throw a `FetchError` with the status code as the `status` property, rather than resolving the promise
   * - You can pass `body` and `query` as objects, and they will be encoded and stringified.
   * - The response gets parsed as JSON if the `accept` header is set to `application/json`, otherwise the raw Response object is returned
   *
   * Since the response is dynamically determined, we cannot know if it is JSON or not. Therefore, it is important to pass `Response` as the return type
   *
   * @param input: FetchInput
   * @param init: FetchArgs
   * @returns Promise<T>
   */
  fetch(input, init) {
    return this.fetch_(input, init);
  }
  /**
   * `fetchStream` is a helper method to deal with server-sent events. It returns an object with a stream and an abort function.
   * It follows a very similar interface to `fetch`, with the return value being an async generator.
   * The stream is an async generator that yields `ServerSentEventMessage` objects, which contains the event name, stringified data, and few other properties.
   * The caller is responsible for handling `disconnect` events and aborting the stream. The caller is also responsible for parsing the data field.
   *
   * @param input: FetchInput
   * @param init: FetchArgs
   * @returns FetchStreamResponse
   */
  fetchStream(input, init) {
    return __awaiter46(this, void 0, void 0, function* () {
      const abortController = new AbortController();
      const abortFunc = abortController.abort.bind(abortController);
      let res = yield this.fetch_(input, Object.assign(Object.assign({}, init), { signal: abortController.signal, headers: Object.assign(Object.assign({}, init === null || init === void 0 ? void 0 : init.headers), { accept: "text/event-stream" }) }));
      if (res.ok) {
        return { stream: events(res, abortController.signal), abort: abortFunc };
      }
      return { stream: null, abort: abortFunc };
    });
  }
  setToken(token) {
    return __awaiter46(this, void 0, void 0, function* () {
      yield this.setToken_(token);
    });
  }
  clearToken() {
    return __awaiter46(this, void 0, void 0, function* () {
      yield this.clearToken_();
    });
  }
  clearToken_() {
    return __awaiter46(this, void 0, void 0, function* () {
      var _a, _b;
      const { storageMethod, storageKey } = this.getTokenStorageInfo_();
      switch (storageMethod) {
        case "local": {
          window.localStorage.removeItem(storageKey);
          break;
        }
        case "session": {
          window.sessionStorage.removeItem(storageKey);
          break;
        }
        case "custom": {
          yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.removeItem(storageKey);
          break;
        }
        case "memory": {
          this.token = "";
          break;
        }
      }
    });
  }
  initClient() {
    const defaultHeaders = new Headers(Object.assign(Object.assign({ "content-type": "application/json", accept: "application/json" }, this.getApiKeyHeader_()), this.getPublishableKeyHeader_()));
    this.logger.debug("Initiating Medusa client with default headers:\n", `${JSON.stringify(sanitizeHeaders(defaultHeaders), null, 2)}
`);
    return (input, init) => __awaiter46(this, void 0, void 0, function* () {
      const headers = new Headers(defaultHeaders);
      const customHeaders = Object.assign(Object.assign(Object.assign({}, this.config.globalHeaders), yield this.getJwtHeader_()), init === null || init === void 0 ? void 0 : init.headers);
      Object.entries(customHeaders).forEach(([key, value]) => {
        if (value === null) {
          headers.delete(key);
        } else {
          headers.set(key, value);
        }
      });
      let normalizedInput = input;
      if (input instanceof URL || typeof input === "string") {
        const baseUrl = new URL(this.config.baseUrl);
        const fullPath = `${baseUrl.pathname.replace(/\/$/, "")}/${input.toString().replace(/^\//, "")}`;
        normalizedInput = new URL(fullPath, baseUrl.origin);
        if (init === null || init === void 0 ? void 0 : init.query) {
          const params = Object.fromEntries(normalizedInput.searchParams.entries());
          const stringifiedQuery = (0, import_qs.stringify)(Object.assign(Object.assign({}, params), init.query));
          normalizedInput.search = stringifiedQuery;
        }
      }
      this.logger.debug("Performing request to:\n", `URL: ${normalizedInput.toString()}
`, `Headers: ${JSON.stringify(sanitizeHeaders(headers), null, 2)}
`);
      return yield fetch(normalizedInput, normalizeRequest(init, headers, this.config)).then((resp) => {
        this.logger.debug(`Received response with status ${resp.status}
`);
        return normalizeResponse(resp, headers);
      });
    });
  }
  getJwtHeader_() {
    return __awaiter46(this, void 0, void 0, function* () {
      var _a;
      if (((_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.type) === "session") {
        return {};
      }
      const token = yield this.getToken_();
      return token ? { Authorization: `Bearer ${token}` } : {};
    });
  }
  setToken_(token) {
    return __awaiter46(this, void 0, void 0, function* () {
      var _a, _b;
      const { storageMethod, storageKey } = this.getTokenStorageInfo_();
      switch (storageMethod) {
        case "local": {
          window.localStorage.setItem(storageKey, token);
          break;
        }
        case "session": {
          window.sessionStorage.setItem(storageKey, token);
          break;
        }
        case "custom": {
          yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.setItem(storageKey, token);
          break;
        }
        case "memory": {
          this.token = token;
          break;
        }
      }
    });
  }
  getToken_() {
    return __awaiter46(this, void 0, void 0, function* () {
      var _a, _b;
      const { storageMethod, storageKey } = this.getTokenStorageInfo_();
      switch (storageMethod) {
        case "local": {
          return window.localStorage.getItem(storageKey);
        }
        case "session": {
          return window.sessionStorage.getItem(storageKey);
        }
        case "custom": {
          return yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.getItem(storageKey);
        }
        case "memory": {
          return this.token;
        }
      }
      return null;
    });
  }
  throwError_(message) {
    this.logger.error(message);
    throw new Error(message);
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/store/index.js
var __awaiter47 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Store2 = class {
  /**
   * @ignore
   */
  constructor(client) {
    this.region = {
      /**
       * This method retrieves the paginated list of regions in the store. It sends a request to the
       * [List Regions API route](https://docs.medusajs.com/api/store#regions_getregions).
       *
       * Related guide: [How to list regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request
       * @returns The paginated list of regions.
       *
       * @example
       * To retrieve the list of regions:
       *
       * ```ts
       * sdk.store.region.list()
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.region.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each region:
       *
       * ```ts
       * sdk.store.region.list({
       *   fields: "id,*countries"
       * })
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/regions`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a region by its ID. It sends a request to the [Get Region](https://docs.medusajs.com/api/store#regions_getregionsid)
       * API route.
       *
       * Related guide: [Store and retrieve regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/store-retrieve-region).
       *
       * @param id - The region's ID.
       * @param query - Configure the fields to retrieve in the region.
       * @param headers - Headers to pass in the request
       * @returns The region.
       *
       * @example
       * To retrieve a region by its ID:
       *
       * ```ts
       * sdk.store.region.retrieve("reg_123")
       * .then(({ region }) => {
       *   console.log(region)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.region.retrieve(
       *   "reg_123",
       *   {
       *     fields: "id,*countries"
       *   }
       * )
       * .then(({ region }) => {
       *   console.log(region)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/regions/${id}`, {
          query,
          headers
        });
      })
    };
    this.collection = {
      /**
       * This method retrieves a paginated list of product collections. It sends a request to the
       * [List Collections](https://docs.medusajs.com/api/store#collections_getcollections) API route.
       *
       * Related guide: [How to retrieve collections in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request
       * @returns The paginated list of collections.
       *
       * @example
       * To retrieve the list of collections:
       *
       * ```ts
       * sdk.store.collection.list()
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.collection.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each collection:
       *
       * ```ts
       * sdk.store.collection.list({
       *   fields: "id,handle"
       * })
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/collections`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a collection by its ID. It sends a request to the [Get Collection](https://docs.medusajs.com/api/store#collections_getcollectionsid)
       * API route.
       *
       * Related guide: [How to retrieve a collection in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/retrieve).
       *
       * @param id - The ID of the collection to retrieve.
       * @param query - Configure the fields to retrieve in the collection.
       * @param headers - Headers to pass in the request
       * @returns The collection.
       *
       * @example
       * To retrieve a collection by its ID:
       *
       * ```ts
       * sdk.store.collection.retrieve("pcol_123")
       * .then(({ collection }) => {
       *   console.log(collection)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.collection.retrieve("pcol_123", {
       *   fields: "id,handle"
       * })
       * .then(({ collection }) => {
       *   console.log(collection)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/collections/${id}`, {
          query,
          headers
        });
      })
    };
    this.category = {
      /**
       * This method retrieves a paginated list of product categories. It sends a request to the
       * [List Categories](https://docs.medusajs.com/api/store#product-categories_getproductcategories) API route.
       *
       * Related guide: [How to retrieve list of categories in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of categories.
       *
       * @example
       * To retrieve the list of categories:
       *
       * ```ts
       * sdk.store.category.list()
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.category.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each category:
       *
       * ```ts
       * sdk.store.category.list({
       *   fields: "id,*parent_category"
       * })
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/product-categories`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a category by its ID. It sends a request to the
       * [Retrieve Product Category](https://docs.medusajs.com/api/store#product-categories_getproductcategoriesid).
       *
       * Related guide: [How to retrieve a category in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/retrieve).
       *
       * @param id - The ID of the category to retrieve.
       * @param query - Configure the fields to retrieve in the category.
       * @param headers - Headers to pass in the request
       * @returns The category.
       *
       * @example
       * To retrieve a category by its ID:
       *
       * ```ts
       * sdk.store.category.retrieve("pcat_123")
       * .then(({ product_category }) => {
       *   console.log(product_category)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.category.retrieve("pcat_123", {
       *   fields: "id,*parent_category"
       * })
       * .then(({ product_category }) => {
       *   console.log(product_category)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/product-categories/${id}`, {
          query,
          headers
        });
      })
    };
    this.product = {
      /**
       * This method retrieves a list of products. It sends a request to the
       * [List Products API route](https://docs.medusajs.com/api/store#products_getproducts).
       *
       * Related guides:
       *
       * - [How to list products in a storefront](https://docs.medusajs.com/resources/storefront-development/products/list).
       * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of products.
       *
       * @example
       * To retrieve the list of products:
       *
       * ```ts
       * sdk.store.product.list()
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.product.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each product:
       *
       * ```ts
       * sdk.store.product.list({
       *   fields: "id,*collection"
       * })
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/products`, {
          query,
          headers
        });
      }),
      /**
       * This method is used to retrieve a product by its ID. It sends a request to the
       * [Get Product](https://docs.medusajs.com/api/store#products_getproductsid) API route.
       *
       * Related guides:
       *
       * - [How to retrieve a product in the storefront](https://docs.medusajs.com/resources/storefront-development/products/retrieve).
       * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
       *
       * @param id - The product's ID.
       * @param query - Configure the fields to retrieve in the product.
       * @param headers - Headers to pass in the request
       * @returns The product.
       *
       * @example
       * To retrieve a product by its ID:
       *
       * ```ts
       * sdk.store.product.retrieve("prod_123")
       * .then(({ product }) => {
       *   console.log(product)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.product.retrieve("prod_123", {
       *   fields: "id,*collection"
       * })
       * .then(({ product }) => {
       *   console.log(product)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/products/${id}`, {
          query,
          headers
        });
      })
    };
    this.cart = {
      /**
       * This method creates a cart. It sends a request to the [Create Cart](https://docs.medusajs.com/api/store#carts_postcarts)
       * API route.
       *
       * Related guide: [How to create a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/create).
       *
       * @param body - The details of the cart to create.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The created cart.
       *
       * @example
       * sdk.store.cart.create({
       *   region_id: "reg_123"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      create: (body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates a cart. It sends a request to the
       * [Update Cart](https://docs.medusajs.com/api/store#carts_postcartsid) API route.
       *
       * Related guide: [How to update a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/update).
       *
       * @param id - The cart's ID.
       * @param body - The data to update in the cart.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The updated cart.
       *
       * @example
       * sdk.store.cart.update("cart_123", {
       *   region_id: "reg_123"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      update: (id, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${id}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves a cart by its ID. It sends a request to the
       * [Get Cart](https://docs.medusajs.com/api/store#carts_getcartsid) API route.
       *
       * Related guide: [How to retrieve a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/retrieve).
       *
       * @param id - The cart's ID.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * To retrieve a cart by its ID:
       *
       * ```ts
       * sdk.store.cart.retrieve("cart_123")
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.cart.retrieve("cart_123", {
       *   fields: "id,*items"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${id}`, {
          headers,
          query
        });
      }),
      /**
       * This methods adds a product variant to the cart as a line item. It sends a request to the
       * [Add Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitems) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param body - The details of the item to add.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.createLineItem("cart_123", {
       *   variant_id: "variant_123",
       *   quantity: 1
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      createLineItem: (cartId, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates a line item in a cart. It sends a request to the
       * [Update Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitemsline_id) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param lineItemId - The line item's ID.
       * @param body - The data to update.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.updateLineItem(
       *   "cart_123",
       *   "li_123",
       *   {
       *     quantity: 1
       *   }
       * )
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      updateLineItem: (cartId, lineItemId, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method deletes a line item from a cart. It sends a request to the
       * [Remove Line Item](https://docs.medusajs.com/api/store#carts_deletecartsidlineitemsline_id) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param lineItemId - The item's ID.
       * @param headers - Headers to pass in the request.
       * @returns The deletion's details.
       *
       * @example
       * sdk.store.cart.deleteLineItem(
       *   "cart_123",
       *   "li_123"
       * )
       * .then(({ deleted, parent: cart }) => {
       *   console.log(deleted, cart)
       * })
       */
      deleteLineItem: (cartId, lineItemId, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
          method: "DELETE",
          headers
        });
      }),
      /**
       * This method adds a shipping method to a cart. It sends a request to
       * the [Add Shipping Method](https://docs.medusajs.com/api/store#carts_postcartsidshippingmethods) API routes.
       *
       * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
       *
       * @param cartId - The cart's ID.
       * @param body - The shipping method's details.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.addShippingMethod("cart_123", {
       *   option_id: "so_123",
       *   data: {
       *     // custom data for fulfillment provider.
       *   }
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      addShippingMethod: (cartId, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${cartId}/shipping-methods`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method completes a cart and places the order. It's the last step of the checkout flow.
       * The method sends a request to the [Complete Cart](https://docs.medusajs.com/api/store#carts_postcartsidcomplete)
       * API route.
       *
       * Related guide: [Learn how to complete cart in checkout flow](https://docs.medusajs.com/resources/storefront-development/checkout/complete-cart).
       *
       * @param cartId - The cart's ID.
       * @param query - Configure the fields to retrieve in the created order.
       * @param headers - Headers to pass in the request.
       * @returns The order's details, if it was placed successfully. Otherwise, the cart is returned with an error.
       *
       * @example
       * sdk.store.cart.complete("cart_123")
       * .then((data) => {
       *   if(data.type === "cart") {
       *     // an error occurred
       *     console.log(data.error, data.cart)
       *   } else {
       *     // order placed successfully
       *     console.log(data.order)
       *   }
       * })
       */
      complete: (cartId, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${cartId}/complete`, {
          method: "POST",
          headers,
          query
        });
      }),
      /**
       * This method updates the customer of a cart.
       *
       * @param id - The cart's ID.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The updated cart.
       *
       * @example
       * sdk.store.cart.transferCart("cart_123")
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      transferCart: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/carts/${id}/customer`, {
          method: "POST",
          headers,
          query
        });
      })
    };
    this.fulfillment = {
      /**
       * This method retrieves the list of shipping options for a cart. It sends a request to
       * the [List Shipping Options](https://docs.medusajs.com/api/store#shipping-options_getshippingoptions)
       * API route.
       *
       * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
       *
       * @param query - The cart's details along with configurations of the fields to retrieve in the options.
       * @param headers - Headers to pass in the request.
       * @returns The shipping options that can be used for the cart.
       *
       * @example
       * sdk.store.fulfillment.listCartOptions({
       *   cart_id: "cart_123"
       * })
       * .then(({ shipping_options }) => {
       *   console.log(shipping_options)
       * })
       */
      listCartOptions: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/shipping-options`, {
          headers,
          query
        });
      }),
      /**
       * This method calculates the price of a shipping option in a cart, which is useful during checkout.
       * It sends a request to the [Calculate Shipping Option Price](https://docs.medusajs.com/api/store#shipping-options_postshippingoptionsidcalculate)
       * API route.
       *
       * @param id - The shipping option's ID.
       * @param body - The price calculation's details.
       * @param query - Configure the fields to retrieve in the shipping option.
       * @param headers - Headers to pass in the request.
       * @returns The shipping option's details.
       *
       * @example
       * sdk.store.fulfillment.calculate("so_123", {
       *   cart_id: "cart_123"
       * })
       * .then(({ shipping_option }) => {
       *   console.log(shipping_option)
       * })
       */
      calculate: (id, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return yield this.client.fetch(`/store/shipping-options/${id}/calculate`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.payment = {
      /**
       * This method retrieves the payment providers available in a region, which is useful during checkout.
       * It sends a request to the [List Payment Providers](https://docs.medusajs.com/api/store#payment-providers_getpaymentproviders)
       * API route.
       *
       * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
       *
       * @param query - The filters to apply on the retrieved providers, along with configurations of the
       * fields to retrieve in the options.
       * @param headers - Headers to pass in the request.
       * @returns The list of payment providers.
       *
       * @example
       * To retrieve the list of payment providers for a region:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123"
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123",
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each provider:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123",
       *   limit: 10,
       *   offset: 10,
       *   fields: "id"
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      listPaymentProviders: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/payment-providers`, {
          headers,
          query
        });
      }),
      /**
       * This method creates a payment session of a cart's payment collection, selecting a payment provider.
       * It sends a request to the [Initialize Payment Session](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollectionsidpaymentsessions)
       * API route.
       *
       * If the cart doesn't have a payment collection, a payment collection is created for the cart by
       * sending a request to the [Create Payment Collection](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollections)
       * API route.
       *
       * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
       *
       * @param cart - The cart's details.
       * @param body - The payment session's details.
       * @param query - Configure the fields to retrieve in the payment collection.
       * @param headers - Headers to pass in the request.
       * @returns The payment collection's details.
       *
       * @example
       * sdk.store.payment.initiatePaymentSession(
       *   cart, // assuming you already have the cart object.
       *   {
       *     provider_id: "pp_stripe_stripe",
       *     data: {
       *       // any data relevant for the provider.
       *     }
       *   }
       * )
       * .then(({ payment_collection }) => {
       *   console.log(payment_collection)
       * })
       */
      initiatePaymentSession: (cart, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        var _a;
        let paymentCollectionId = (_a = cart.payment_collection) === null || _a === void 0 ? void 0 : _a.id;
        if (!paymentCollectionId) {
          const collectionBody = {
            cart_id: cart.id
          };
          paymentCollectionId = (yield this.client.fetch(`/store/payment-collections`, {
            method: "POST",
            headers,
            body: collectionBody
          })).payment_collection.id;
        }
        return this.client.fetch(`/store/payment-collections/${paymentCollectionId}/payment-sessions`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.order = {
      /**
       * This method retrieves a paginated list of orders matching the specified filters. It
       * sends a request to the [List Orders](https://docs.medusajs.com/api/store#orders_getorders)
       * API route.
       *
       * @param query - Configure the fields to retrieve in the orders.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of orders.
       *
       * @example
       * To retrieve the list of orders:
       *
       * ```ts
       * sdk.store.order.list()
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.order.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each order:
       *
       * ```ts
       * sdk.store.order.list({
       *   fields: "id,*items"
       * })
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves an order by its ID. It sends a request to the
       * [Get Order](https://docs.medusajs.com/api/store#orders_getordersid) API route.
       *
       * @param id - The order's ID.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order's details.
       *
       * @example
       * To retrieve an order by its ID:
       *
       * ```ts
       * sdk.store.order.retrieve("order_123")
       * .then(({ order }) => {
       *   console.log(order)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.order.retrieve("order_123", {
       *   fields: "id,*items"
       * })
       * .then(({ order }) => {
       *   console.log(order)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders/${id}`, {
          headers,
          query
        });
      }),
      /**
       * This method requests a order transfer from a guest account to the current, logged in customer account.
       *
       * Customer requesting the transfer must be logged in.
       *
       * @param body - The transfer's details.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.requestTransfer(
       *   "order_123",
       *   {
       *     description: "I want to transfer this order to my friend."
       *   },
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      requestTransfer: (id, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/request`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method cancels an order transfer request.
       *
       * Customer requesting the transfer must be logged in.
       *
       * @param id - The order's ID.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.cancelTransfer(
       *   "order_123",
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      cancelTransfer: (id, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/cancel`, {
          method: "POST",
          headers,
          query
        });
      }),
      /**
       * The method called for the original owner to accept the order transfer to a new owner.
       *
       * @param id - The order's ID.
       * @param body - The payload containing the transfer token.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.acceptTransfer(
       *   "order_123",
       *   {
       *     token: "transfer_token"
       *   },
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      acceptTransfer: (id, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/accept`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * The method called for the original owner to decline the order transfer to a new owner.
       *
       * @param id - The order's ID.
       * @param body - The payload containing the transfer token.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.declineTransfer(
       *   "order_123",
       *   {
       *     token: "transfer_token"
       *   },
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      declineTransfer: (id, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/decline`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.customer = {
      /**
       * This method registers a customer. It sends a request to the [Register Customer](https://docs.medusajs.com/api/store#customers_postcustomers)
       * API route.
       *
       * You must use the {@link Auth.register} method first to retrieve a registration token. Then, pass that
       * registration token in the `headers` parameter of this method as an authorization bearer header.
       *
       * Related guide: [How to register customer in storefront](https://docs.medusajs.com/resources/storefront-development/customers/register)
       *
       * @param body - The customer's details.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request. This is where you include the authorization JWT registration token.
       * @returns The customer's details.
       *
       * @example
       * const token = await sdk.auth.register("customer", "emailpass", {
       *   "email": "customer@gmail.com",
       *   "password": "supersecret"
       * })
       *
       * sdk.store.customer.create(
       *   {
       *     "email": "customer@gmail.com"
       *   },
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      create: (body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates the logged-in customer's details. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the
       * [Update Customer](https://docs.medusajs.com/api/store#customers_postcustomersme) API route.
       *
       * Related guide: [How to edit customer's profile in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/profile).
       *
       * @param body - The customer's details to update.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.update({
       *   first_name: "John"
       * })
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      update: (body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves the logged-in customer's details. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Get Logged-In Customer](https://docs.medusajs.com/api/store#customers_getcustomersme)
       * API route.
       *
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.retrieve()
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      retrieve: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me`, {
          query,
          headers
        });
      }),
      /**
       * This method creates an address for the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Create Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddresses)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param body - The address's details.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.createAddress({
       *   country_code: "us"
       * })
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      createAddress: (body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me/addresses`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates the address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Update Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The ID of the address to update.
       * @param body - The details to update in the address.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.updateAddress(
       *   "caddr_123",
       *   {
       *     country_code: "us"
       *   }
       * )
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      updateAddress: (addressId, body, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves the logged-in customer's address. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [List Customer's Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddresses)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param query - Configure the fields to retrieve in the addresses.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of addresses.
       *
       * @example
       * To retrieve the list of addresses:
       *
       * ```ts
       * sdk.store.customer.listAddress()
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.customer.listAddress({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each address:
       *
       * ```ts
       * sdk.store.customer.listAddress({
       *   fields: "id,country_code"
       * })
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      listAddress: (query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me/addresses`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves an address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Get Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The address's ID.
       * @param query - Configure the fields to retrieve in the address.
       * @param headers - Headers to pass in the request.
       * @returns The address's details.
       *
       * @example
       * To retrieve an address by its ID:
       *
       * ```ts
       * sdk.store.customer.retrieveAddress(
       *   "caddr_123"
       * )
       * .then(({ address }) => {
       *   console.log(address)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.customer.retrieveAddress(
       *   "caddr_123",
       *   {
       *     fields: "id,country_code"
       *   }
       * )
       * .then(({ address }) => {
       *   console.log(address)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieveAddress: (addressId, query, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          query,
          headers
        });
      }),
      /**
       * This method deletes an address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Remove Address](https://docs.medusajs.com/api/store#customers_deletecustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The address's ID.
       * @param headers - Headers to pass in the request.
       * @returns The deletion's details.
       *
       * @example
       * sdk.store.customer.deleteAddress("caddr_123")
       * .then(({ deleted, parent: customer }) => {
       *   console.log(customer)
       * })
       */
      deleteAddress: (addressId, headers) => __awaiter47(this, void 0, void 0, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          method: "DELETE",
          headers
        });
      })
    };
    this.client = client;
  }
};

// node_modules/@medusajs/js-sdk/dist/esm/index.js
var Medusa = class {
  constructor(config) {
    this.client = new Client(config);
    this.admin = new Admin(this.client);
    this.store = new Store2(this.client);
    this.auth = new Auth(this.client, config);
  }
};
var esm_default = Medusa;
export {
  Admin,
  Auth,
  Client,
  FetchError,
  Store2 as Store,
  esm_default as default
};
//# sourceMappingURL=@medusajs_js-sdk.js.map
