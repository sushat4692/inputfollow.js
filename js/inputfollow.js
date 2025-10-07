/*!
  inputfollow.js v0.0.11
  https://github.com/sushat4692/inputfollow.js#readme
  Released under the MIT License.
*/
var InputFollow = (function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _createClass(e, r, t) {
    return Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = true, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = false,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = true, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), true), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return _assign.apply(this, arguments);
  };
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  function $constructor(name, initializer, params) {
    var _params$Parent;
    function init(inst, def) {
      var _inst$_zod, _a$traits;
      var _a;
      Object.defineProperty(inst, "_zod", {
        value: (_inst$_zod = inst._zod) !== null && _inst$_zod !== void 0 ? _inst$_zod : {},
        enumerable: false
      });
      (_a$traits = (_a = inst._zod).traits) !== null && _a$traits !== void 0 ? _a$traits : _a.traits = new Set();
      inst._zod.traits.add(name);
      initializer(inst, def);
      // support prototype modifications
      for (var k in _.prototype) {
        if (!(k in inst)) Object.defineProperty(inst, k, {
          value: _.prototype[k].bind(inst)
        });
      }
      inst._zod.constr = _;
      inst._zod.def = def;
    }
    // doesn't work if Parent has a constructor with arguments
    var Parent = (_params$Parent = params === null || params === void 0 ? void 0 : params.Parent) !== null && _params$Parent !== void 0 ? _params$Parent : Object;
    var Definition = /*#__PURE__*/function (_Parent) {
      function Definition() {
        _classCallCheck(this, Definition);
        return _callSuper(this, Definition, arguments);
      }
      _inherits(Definition, _Parent);
      return _createClass(Definition);
    }(Parent);
    Object.defineProperty(Definition, "name", {
      value: name
    });
    function _(def) {
      var _a$deferred;
      var _a;
      var inst = params !== null && params !== void 0 && params.Parent ? new Definition() : this;
      init(inst, def);
      (_a$deferred = (_a = inst._zod).deferred) !== null && _a$deferred !== void 0 ? _a$deferred : _a.deferred = [];
      var _iterator = _createForOfIteratorHelper(inst._zod.deferred),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          fn();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return inst;
    }
    Object.defineProperty(_, "init", {
      value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
      value: function value(inst) {
        var _inst$_zod2;
        if (params !== null && params !== void 0 && params.Parent && inst instanceof params.Parent) return true;
        return inst === null || inst === void 0 || (_inst$_zod2 = inst._zod) === null || _inst$_zod2 === void 0 || (_inst$_zod2 = _inst$_zod2.traits) === null || _inst$_zod2 === void 0 ? void 0 : _inst$_zod2.has(name);
      }
    });
    Object.defineProperty(_, "name", {
      value: name
    });
    return _;
  }
  var $ZodAsyncError = /*#__PURE__*/function (_Error) {
    function $ZodAsyncError() {
      _classCallCheck(this, $ZodAsyncError);
      return _callSuper(this, $ZodAsyncError, ["Encountered Promise during synchronous parse. Use .parseAsync() instead."]);
    }
    _inherits($ZodAsyncError, _Error);
    return _createClass($ZodAsyncError);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  var globalConfig = {};
  function config(newConfig) {
    return globalConfig;
  }

  function getEnumValues(entries) {
    var numericValues = Object.values(entries).filter(function (v) {
      return typeof v === "number";
    });
    var values = Object.entries(entries).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0];
        _ref2[1];
      return numericValues.indexOf(+k) === -1;
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2);
        _ref4[0];
        var v = _ref4[1];
      return v;
    });
    return values;
  }
  function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
  }
  function cached(getter) {
    return {
      get value() {
        {
          var value = getter();
          Object.defineProperty(this, "value", {
            value: value
          });
          return value;
        }
      }
    };
  }
  function nullish(input) {
    return input === null || input === undefined;
  }
  function cleanRegex(source) {
    var start = source.startsWith("^") ? 1 : 0;
    var end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
  }
  var EVALUATING = Symbol("evaluating");
  function defineLazy(object, key, getter) {
    var value = undefined;
    Object.defineProperty(object, key, {
      get: function get() {
        if (value === EVALUATING) {
          // Circular reference detected, return undefined to break the cycle
          return undefined;
        }
        if (value === undefined) {
          value = EVALUATING;
          value = getter();
        }
        return value;
      },
      set: function set(v) {
        Object.defineProperty(object, key, {
          value: v
          // configurable: true,
        });
        // object[key] = v;
      },
      configurable: true
    });
  }
  function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function mergeDefs() {
    var mergedDescriptors = {};
    for (var _len = arguments.length, defs = new Array(_len), _key = 0; _key < _len; _key++) {
      defs[_key] = arguments[_key];
    }
    for (var _i = 0, _defs = defs; _i < _defs.length; _i++) {
      var def = _defs[_i];
      var descriptors = Object.getOwnPropertyDescriptors(def);
      Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
  }
  var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : function () {};
  function isObject(data) {
    return _typeof(data) === "object" && data !== null && !Array.isArray(data);
  }
  function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    var ctor = o.constructor;
    if (ctor === undefined) return true;
    // modified prototype
    var prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
      return false;
    }
    return true;
  }
  var propertyKeyTypes = new Set(["string", "number", "symbol"]);
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  // zod-specific utils
  function clone(inst, def, params) {
    var cl = new inst._zod.constr(def !== null && def !== void 0 ? def : inst._zod.def);
    if (!def || params !== null && params !== void 0 && params.parent) cl._zod.parent = inst;
    return cl;
  }
  function normalizeParams(_params) {
    var params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
      error: function error() {
        return params;
      }
    };
    if ((params === null || params === void 0 ? void 0 : params.message) !== undefined) {
      if ((params === null || params === void 0 ? void 0 : params.error) !== undefined) throw new Error("Cannot specify both `message` and `error` params");
      params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return _objectSpread2(_objectSpread2({}, params), {}, {
      error: function error() {
        return params.error;
      }
    });
    return params;
  }
  function optionalKeys(shape) {
    return Object.keys(shape).filter(function (k) {
      return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
  }
  function partial$1(Class, schema, mask) {
    var def = mergeDefs(schema._zod.def, {
      get shape() {
        var oldShape = schema._zod.def.shape;
        var shape = _objectSpread2({}, oldShape);
        if (mask) {
          for (var key in mask) {
            if (!(key in oldShape)) {
              throw new Error("Unrecognized key: \"".concat(key, "\""));
            }
            if (!mask[key]) continue;
            // if (oldShape[key]!._zod.optin === "optional") continue;
            shape[key] = Class ? new Class({
              type: "optional",
              innerType: oldShape[key]
            }) : oldShape[key];
          }
        } else {
          for (var _key2 in oldShape) {
            // if (oldShape[key]!._zod.optin === "optional") continue;
            shape[_key2] = Class ? new Class({
              type: "optional",
              innerType: oldShape[_key2]
            }) : oldShape[_key2];
          }
        }
        assignProp(this, "shape", shape); // self-caching
        return shape;
      },
      checks: []
    });
    return clone(schema, def);
  }
  // invalid_type | too_big | too_small | invalid_format | not_multiple_of | unrecognized_keys | invalid_union | invalid_key | invalid_element | invalid_value | custom
  function aborted(x) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (x.aborted === true) return true;
    for (var i = startIndex; i < x.issues.length; i++) {
      var _x$issues$i;
      if (((_x$issues$i = x.issues[i]) === null || _x$issues$i === void 0 ? void 0 : _x$issues$i["continue"]) !== true) {
        return true;
      }
    }
    return false;
  }
  function prefixIssues(path, issues) {
    return issues.map(function (iss) {
      var _a$path;
      var _a;
      (_a$path = (_a = iss).path) !== null && _a$path !== void 0 ? _a$path : _a.path = [];
      iss.path.unshift(path);
      return iss;
    });
  }
  function unwrapMessage(message) {
    return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  }
  function finalizeIssue(iss, ctx, config) {
    var _iss$path;
    var full = _objectSpread2(_objectSpread2({}, iss), {}, {
      path: (_iss$path = iss.path) !== null && _iss$path !== void 0 ? _iss$path : []
    });
    // for backwards compatibility
    if (!iss.message) {
      var _ref5, _ref6, _ref7, _unwrapMessage, _iss$inst, _iss$inst$error, _ctx$error, _config$customError, _config$localeError;
      var message = (_ref5 = (_ref6 = (_ref7 = (_unwrapMessage = unwrapMessage((_iss$inst = iss.inst) === null || _iss$inst === void 0 || (_iss$inst = _iss$inst._zod.def) === null || _iss$inst === void 0 || (_iss$inst$error = _iss$inst.error) === null || _iss$inst$error === void 0 ? void 0 : _iss$inst$error.call(_iss$inst, iss))) !== null && _unwrapMessage !== void 0 ? _unwrapMessage : unwrapMessage(ctx === null || ctx === void 0 || (_ctx$error = ctx.error) === null || _ctx$error === void 0 ? void 0 : _ctx$error.call(ctx, iss))) !== null && _ref7 !== void 0 ? _ref7 : unwrapMessage((_config$customError = config.customError) === null || _config$customError === void 0 ? void 0 : _config$customError.call(config, iss))) !== null && _ref6 !== void 0 ? _ref6 : unwrapMessage((_config$localeError = config.localeError) === null || _config$localeError === void 0 ? void 0 : _config$localeError.call(config, iss))) !== null && _ref5 !== void 0 ? _ref5 : "Invalid input";
      full.message = message;
    }
    // delete (full as any).def;
    delete full.inst;
    delete full["continue"];
    if (!(ctx !== null && ctx !== void 0 && ctx.reportInput)) {
      delete full.input;
    }
    return full;
  }
  function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
  }
  function issue() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
      args[_key4] = arguments[_key4];
    }
    var iss = args[0],
      input = args[1],
      inst = args[2];
    if (typeof iss === "string") {
      return {
        message: iss,
        code: "custom",
        input: input,
        inst: inst
      };
    }
    return _objectSpread2({}, iss);
  }

  var initializer = function initializer(inst, def) {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
      value: inst._zod,
      enumerable: false
    });
    Object.defineProperty(inst, "issues", {
      value: def,
      enumerable: false
    });
    inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
    Object.defineProperty(inst, "toString", {
      value: function value() {
        return inst.message;
      },
      enumerable: false
    });
  };
  var $ZodError = $constructor("$ZodError", initializer);
  var $ZodRealError = $constructor("$ZodError", initializer, {
    Parent: Error
  });

  var _parse = function _parse(_Err) {
    return function (schema, value, _ctx, _params) {
      var ctx = _ctx ? Object.assign(_ctx, {
        async: false
      }) : {
        async: false
      };
      var result = schema._zod.run({
        value: value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        throw new $ZodAsyncError();
      }
      if (result.issues.length) {
        var _params$Err;
        var e = new ((_params$Err = _params === null || _params === void 0 ? void 0 : _params.Err) !== null && _params$Err !== void 0 ? _params$Err : _Err)(result.issues.map(function (iss) {
          return finalizeIssue(iss, ctx, config());
        }));
        captureStackTrace(e, _params === null || _params === void 0 ? void 0 : _params.callee);
        throw e;
      }
      return result.value;
    };
  };
  var parse = /* @__PURE__*/_parse($ZodRealError);
  var _parseAsync = function _parseAsync(_Err) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(schema, value, _ctx, params) {
        var ctx, result, _params$Err2, e;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              ctx = _ctx ? Object.assign(_ctx, {
                async: true
              }) : {
                async: true
              };
              result = schema._zod.run({
                value: value,
                issues: []
              }, ctx);
              if (!(result instanceof Promise)) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return result;
            case 1:
              result = _context.v;
            case 2:
              if (!result.issues.length) {
                _context.n = 3;
                break;
              }
              e = new ((_params$Err2 = params === null || params === void 0 ? void 0 : params.Err) !== null && _params$Err2 !== void 0 ? _params$Err2 : _Err)(result.issues.map(function (iss) {
                return finalizeIssue(iss, ctx, config());
              }));
              captureStackTrace(e, params === null || params === void 0 ? void 0 : params.callee);
              throw e;
            case 3:
              return _context.a(2, result.value);
          }
        }, _callee);
      }));
      return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();
  };
  var parseAsync = /* @__PURE__*/_parseAsync($ZodRealError);
  var _safeParse = function _safeParse(_Err) {
    return function (schema, value, _ctx) {
      var ctx = _ctx ? _objectSpread2(_objectSpread2({}, _ctx), {}, {
        async: false
      }) : {
        async: false
      };
      var result = schema._zod.run({
        value: value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        throw new $ZodAsyncError();
      }
      return result.issues.length ? {
        success: false,
        error: new (_Err !== null && _Err !== void 0 ? _Err : $ZodError)(result.issues.map(function (iss) {
          return finalizeIssue(iss, ctx, config());
        }))
      } : {
        success: true,
        data: result.value
      };
    };
  };
  var safeParse = /* @__PURE__*/_safeParse($ZodRealError);
  var _safeParseAsync = function _safeParseAsync(_Err) {
    return /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(schema, value, _ctx) {
        var ctx, result;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              ctx = _ctx ? Object.assign(_ctx, {
                async: true
              }) : {
                async: true
              };
              result = schema._zod.run({
                value: value,
                issues: []
              }, ctx);
              if (!(result instanceof Promise)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return result;
            case 1:
              result = _context2.v;
            case 2:
              return _context2.a(2, result.issues.length ? {
                success: false,
                error: new _Err(result.issues.map(function (iss) {
                  return finalizeIssue(iss, ctx, config());
                }))
              } : {
                success: true,
                data: result.value
              });
          }
        }, _callee2);
      }));
      return function (_x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }();
  };
  var safeParseAsync = /* @__PURE__*/_safeParseAsync($ZodRealError);

  /** Practical email validation */
  var email$1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var string$2 = function string(params) {
    var _params$minimum, _params$maximum;
    var regex = params ? "[\\s\\S]{".concat((_params$minimum = params === null || params === void 0 ? void 0 : params.minimum) !== null && _params$minimum !== void 0 ? _params$minimum : 0, ",").concat((_params$maximum = params === null || params === void 0 ? void 0 : params.maximum) !== null && _params$maximum !== void 0 ? _params$maximum : "", "}") : "[\\s\\S]*";
    return new RegExp("^".concat(regex, "$"));
  };
  var number$1 = /^-?\d+(?:\.\d+)?/;
  var _boolean$2 = /^(?:true|false)$/i;

  var $ZodCheck = /*@__PURE__*/$constructor("$ZodCheck", function (inst, def) {
    var _inst$_zod, _a$onattach;
    var _a;
    (_inst$_zod = inst._zod) !== null && _inst$_zod !== void 0 ? _inst$_zod : inst._zod = {};
    inst._zod.def = def;
    (_a$onattach = (_a = inst._zod).onattach) !== null && _a$onattach !== void 0 ? _a$onattach : _a.onattach = [];
  });
  var $ZodCheckMinLength = /*@__PURE__*/$constructor("$ZodCheckMinLength", function (inst, def) {
    var _a$when5;
    var _a;
    $ZodCheck.init(inst, def);
    (_a$when5 = (_a = inst._zod.def).when) !== null && _a$when5 !== void 0 ? _a$when5 : _a.when = function (payload) {
      var val = payload.value;
      return !nullish(val) && val.length !== undefined;
    };
    inst._zod.onattach.push(function (inst) {
      var _inst$_zod$bag$minimu2;
      var curr = (_inst$_zod$bag$minimu2 = inst._zod.bag.minimum) !== null && _inst$_zod$bag$minimu2 !== void 0 ? _inst$_zod$bag$minimu2 : Number.NEGATIVE_INFINITY;
      if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = function (payload) {
      var input = payload.value;
      var length = input.length;
      if (length >= def.minimum) return;
      var origin = getLengthableOrigin(input);
      payload.issues.push({
        origin: origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input: input,
        inst: inst,
        "continue": !def.abort
      });
    };
  });
  var $ZodCheckStringFormat = /*@__PURE__*/$constructor("$ZodCheckStringFormat", function (inst, def) {
    var _a$check, _b$check;
    var _a, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push(function (inst) {
      var bag = inst._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        var _bag$patterns;
        (_bag$patterns = bag.patterns) !== null && _bag$patterns !== void 0 ? _bag$patterns : bag.patterns = new Set();
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern) (_a$check = (_a = inst._zod).check) !== null && _a$check !== void 0 ? _a$check : _a.check = function (payload) {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value)) return;
      payload.issues.push(_objectSpread2(_objectSpread2({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value
      }, def.pattern ? {
        pattern: def.pattern.toString()
      } : {}), {}, {
        inst: inst,
        "continue": !def.abort
      }));
    };else (_b$check = (_b = inst._zod).check) !== null && _b$check !== void 0 ? _b$check : _b.check = function () {};
  });
  var $ZodCheckRegex = /*@__PURE__*/$constructor("$ZodCheckRegex", function (inst, def) {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = function (payload) {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value)) return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst: inst,
        "continue": !def.abort
      });
    };
  });
  var $ZodCheckOverwrite = /*@__PURE__*/$constructor("$ZodCheckOverwrite", function (inst, def) {
    $ZodCheck.init(inst, def);
    inst._zod.check = function (payload) {
      payload.value = def.tx(payload.value);
    };
  });

  var version = {
    major: 4,
    minor: 1,
    patch: 12
  };

  var $ZodType = /*@__PURE__*/$constructor("$ZodType", function (inst, def) {
    var _inst$_zod$def$checks;
    var _a;
    inst !== null && inst !== void 0 ? inst : inst = {};
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = version;
    var checks = _toConsumableArray((_inst$_zod$def$checks = inst._zod.def.checks) !== null && _inst$_zod$def$checks !== void 0 ? _inst$_zod$def$checks : []);
    // if inst is itself a checks.$ZodCheck, run it as a check
    if (inst._zod.traits.has("$ZodCheck")) {
      checks.unshift(inst);
    }
    var _iterator = _createForOfIteratorHelper(checks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ch = _step.value;
        var _iterator3 = _createForOfIteratorHelper(ch._zod.onattach),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var fn = _step3.value;
            fn(inst);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (checks.length === 0) {
      var _a$deferred, _inst$_zod$deferred;
      // deferred initializer
      // inst._zod.parse is not yet defined
      (_a$deferred = (_a = inst._zod).deferred) !== null && _a$deferred !== void 0 ? _a$deferred : _a.deferred = [];
      (_inst$_zod$deferred = inst._zod.deferred) === null || _inst$_zod$deferred === void 0 || _inst$_zod$deferred.push(function () {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      var runChecks = function runChecks(payload, checks, ctx) {
        var isAborted = aborted(payload);
        var asyncResult;
        var _iterator2 = _createForOfIteratorHelper(checks),
          _step2;
        try {
          var _loop = function _loop() {
              var ch = _step2.value;
              if (ch._zod.def.when) {
                var shouldRun = ch._zod.def.when(payload);
                if (!shouldRun) return 0; // continue
              } else if (isAborted) {
                return 0; // continue
              }
              var currLen = payload.issues.length;
              var _ = ch._zod.check(payload);
              if (_ instanceof Promise && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false) {
                throw new $ZodAsyncError();
              }
              if (asyncResult || _ instanceof Promise) {
                asyncResult = (asyncResult !== null && asyncResult !== void 0 ? asyncResult : Promise.resolve()).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var nextLen;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        _context.n = 1;
                        return _;
                      case 1:
                        nextLen = payload.issues.length;
                        if (!(nextLen === currLen)) {
                          _context.n = 2;
                          break;
                        }
                        return _context.a(2);
                      case 2:
                        if (!isAborted) isAborted = aborted(payload, currLen);
                      case 3:
                        return _context.a(2);
                    }
                  }, _callee);
                })));
              } else {
                var nextLen = payload.issues.length;
                if (nextLen === currLen) return 0; // continue
                if (!isAborted) isAborted = aborted(payload, currLen);
              }
            },
            _ret;
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (asyncResult) {
          return asyncResult.then(function () {
            return payload;
          });
        }
        return payload;
      };
      // const handleChecksResult = (
      //   checkResult: ParsePayload,
      //   originalResult: ParsePayload,
      //   ctx: ParseContextInternal
      // ): util.MaybeAsync<ParsePayload> => {
      //   // if the checks mutated the value && there are no issues, re-parse the result
      //   if (checkResult.value !== originalResult.value && !checkResult.issues.length)
      //     return inst._zod.parse(checkResult, ctx);
      //   return originalResult;
      // };
      var handleCanaryResult = function handleCanaryResult(canary, payload, ctx) {
        // abort if the canary is aborted
        if (aborted(canary)) {
          canary.aborted = true;
          return canary;
        }
        // run checks first, then
        var checkResult = runChecks(payload, checks, ctx);
        if (checkResult instanceof Promise) {
          if (ctx.async === false) throw new $ZodAsyncError();
          return checkResult.then(function (checkResult) {
            return inst._zod.parse(checkResult, ctx);
          });
        }
        return inst._zod.parse(checkResult, ctx);
      };
      inst._zod.run = function (payload, ctx) {
        if (ctx.skipChecks) {
          return inst._zod.parse(payload, ctx);
        }
        if (ctx.direction === "backward") {
          // run canary
          // initial pass (no checks)
          var canary = inst._zod.parse({
            value: payload.value,
            issues: []
          }, _objectSpread2(_objectSpread2({}, ctx), {}, {
            skipChecks: true
          }));
          if (canary instanceof Promise) {
            return canary.then(function (canary) {
              return handleCanaryResult(canary, payload, ctx);
            });
          }
          return handleCanaryResult(canary, payload, ctx);
        }
        // forward
        var result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false) throw new $ZodAsyncError();
          return result.then(function (result) {
            return runChecks(result, checks, ctx);
          });
        }
        return runChecks(result, checks, ctx);
      };
    }
    inst["~standard"] = {
      validate: function validate(value) {
        try {
          var _r$error;
          var r = safeParse(inst, value);
          return r.success ? {
            value: r.data
          } : {
            issues: (_r$error = r.error) === null || _r$error === void 0 ? void 0 : _r$error.issues
          };
        } catch (_) {
          return safeParseAsync(inst, value).then(function (r) {
            var _r$error2;
            return r.success ? {
              value: r.data
            } : {
              issues: (_r$error2 = r.error) === null || _r$error2 === void 0 ? void 0 : _r$error2.issues
            };
          });
        }
      },
      vendor: "zod",
      version: 1
    };
  });
  var $ZodString = /*@__PURE__*/$constructor("$ZodString", function (inst, def) {
    var _pop, _inst$_zod$bag$patter, _inst$_zod$bag;
    $ZodType.init(inst, def);
    inst._zod.pattern = (_pop = _toConsumableArray((_inst$_zod$bag$patter = inst === null || inst === void 0 || (_inst$_zod$bag = inst._zod.bag) === null || _inst$_zod$bag === void 0 ? void 0 : _inst$_zod$bag.patterns) !== null && _inst$_zod$bag$patter !== void 0 ? _inst$_zod$bag$patter : []).pop()) !== null && _pop !== void 0 ? _pop : string$2(inst._zod.bag);
    inst._zod.parse = function (payload, _) {
      if (def.coerce) try {
        payload.value = String(payload.value);
      } catch (_) {}
      if (typeof payload.value === "string") return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst: inst
      });
      return payload;
    };
  });
  var $ZodStringFormat = /*@__PURE__*/$constructor("$ZodStringFormat", function (inst, def) {
    // check initialization must come first
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  var $ZodEmail = /*@__PURE__*/$constructor("$ZodEmail", function (inst, def) {
    var _def$pattern4;
    (_def$pattern4 = def.pattern) !== null && _def$pattern4 !== void 0 ? _def$pattern4 : def.pattern = email$1;
    $ZodStringFormat.init(inst, def);
  });
  var $ZodNumber = /*@__PURE__*/$constructor("$ZodNumber", function (inst, def) {
    var _inst$_zod$bag$patter2;
    $ZodType.init(inst, def);
    inst._zod.pattern = (_inst$_zod$bag$patter2 = inst._zod.bag.pattern) !== null && _inst$_zod$bag$patter2 !== void 0 ? _inst$_zod$bag$patter2 : number$1;
    inst._zod.parse = function (payload, _ctx) {
      if (def.coerce) try {
        payload.value = Number(payload.value);
      } catch (_) {}
      var input = payload.value;
      if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
        return payload;
      }
      var received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
      payload.issues.push(_objectSpread2({
        expected: "number",
        code: "invalid_type",
        input: input,
        inst: inst
      }, received ? {
        received: received
      } : {}));
      return payload;
    };
  });
  var $ZodBoolean = /*@__PURE__*/$constructor("$ZodBoolean", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.pattern = _boolean$2;
    inst._zod.parse = function (payload, _ctx) {
      if (def.coerce) try {
        payload.value = Boolean(payload.value);
      } catch (_) {}
      var input = payload.value;
      if (typeof input === "boolean") return payload;
      payload.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: input,
        inst: inst
      });
      return payload;
    };
  });
  var $ZodUnknown = /*@__PURE__*/$constructor("$ZodUnknown", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.parse = function (payload) {
      return payload;
    };
  });
  var $ZodVoid = /*@__PURE__*/$constructor("$ZodVoid", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.parse = function (payload, _ctx) {
      var input = payload.value;
      if (typeof input === "undefined") return payload;
      payload.issues.push({
        expected: "void",
        code: "invalid_type",
        input: input,
        inst: inst
      });
      return payload;
    };
  });
  function handleArrayResult(result, _final, index) {
    if (result.issues.length) {
      var _final$issues;
      (_final$issues = _final.issues).push.apply(_final$issues, _toConsumableArray(prefixIssues(index, result.issues)));
    }
    _final.value[index] = result.value;
  }
  var $ZodArray = /*@__PURE__*/$constructor("$ZodArray", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.parse = function (payload, ctx) {
      var input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input: input,
          inst: inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      var proms = [];
      var _loop2 = function _loop2(i) {
        var item = input[i];
        var result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then(function (result) {
            return handleArrayResult(result, payload, i);
          }));
        } else {
          handleArrayResult(result, payload, i);
        }
      };
      for (var i = 0; i < input.length; i++) {
        _loop2(i);
      }
      if (proms.length) {
        return Promise.all(proms).then(function () {
          return payload;
        });
      }
      return payload; //handleArrayResultsAsync(parseResults, final);
    };
  });
  function handlePropertyResult(result, _final2, key, input) {
    if (result.issues.length) {
      var _final2$issues;
      (_final2$issues = _final2.issues).push.apply(_final2$issues, _toConsumableArray(prefixIssues(key, result.issues)));
    }
    if (result.value === undefined) {
      if (key in input) {
        _final2.value[key] = undefined;
      }
    } else {
      _final2.value[key] = result.value;
    }
  }
  function normalizeDef(def) {
    var keys = Object.keys(def.shape);
    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var _def$shape;
      var k = _keys[_i];
      if (!((_def$shape = def.shape) !== null && _def$shape !== void 0 && (_def$shape = _def$shape[k]) !== null && _def$shape !== void 0 && (_def$shape = _def$shape._zod) !== null && _def$shape !== void 0 && (_def$shape = _def$shape.traits) !== null && _def$shape !== void 0 && _def$shape.has("$ZodType"))) {
        throw new Error("Invalid element at key \"".concat(k, "\": expected a Zod schema"));
      }
    }
    var okeys = optionalKeys(def.shape);
    return _objectSpread2(_objectSpread2({}, def), {}, {
      keys: keys,
      keySet: new Set(keys),
      numKeys: keys.length,
      optionalKeys: new Set(okeys)
    });
  }
  function handleCatchall(proms, input, payload, ctx, def, inst) {
    var unrecognized = [];
    // iterate over input keys
    var keySet = def.keySet;
    var _catchall = def.catchall._zod;
    var t = _catchall.def.type;
    var _loop3 = function _loop3() {
        var key = _Object$keys[_i2];
        if (keySet.has(key)) return 0; // continue
        if (t === "never") {
          unrecognized.push(key);
          return 0; // continue
        }
        var r = _catchall.run({
          value: input[key],
          issues: []
        }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then(function (r) {
            return handlePropertyResult(r, payload, key, input);
          }));
        } else {
          handlePropertyResult(r, payload, key, input);
        }
      },
      _ret2;
    for (var _i2 = 0, _Object$keys = Object.keys(input); _i2 < _Object$keys.length; _i2++) {
      _ret2 = _loop3();
      if (_ret2 === 0) continue;
    }
    if (unrecognized.length) {
      payload.issues.push({
        code: "unrecognized_keys",
        keys: unrecognized,
        input: input,
        inst: inst
      });
    }
    if (!proms.length) return payload;
    return Promise.all(proms).then(function () {
      return payload;
    });
  }
  var $ZodObject = /*@__PURE__*/$constructor("$ZodObject", function (inst, def) {
    // requires cast because technically $ZodObject doesn't extend
    $ZodType.init(inst, def);
    // const sh = def.shape;
    var desc = Object.getOwnPropertyDescriptor(def, "shape");
    if (!(desc !== null && desc !== void 0 && desc.get)) {
      var sh = def.shape;
      Object.defineProperty(def, "shape", {
        get: function get() {
          var newSh = _objectSpread2({}, sh);
          Object.defineProperty(def, "shape", {
            value: newSh
          });
          return newSh;
        }
      });
    }
    var _normalized = cached(function () {
      return normalizeDef(def);
    });
    defineLazy(inst._zod, "propValues", function () {
      var shape = def.shape;
      var propValues = {};
      for (var key in shape) {
        var field = shape[key]._zod;
        if (field.values) {
          var _propValues$key;
          (_propValues$key = propValues[key]) !== null && _propValues$key !== void 0 ? _propValues$key : propValues[key] = new Set();
          var _iterator4 = _createForOfIteratorHelper(field.values),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var v = _step4.value;
              propValues[key].add(v);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
      return propValues;
    });
    var isObject$1 = isObject;
    var catchall = def.catchall;
    var value;
    inst._zod.parse = function (payload, ctx) {
      value !== null && value !== void 0 ? value : value = _normalized.value;
      var input = payload.value;
      if (!isObject$1(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input: input,
          inst: inst
        });
        return payload;
      }
      payload.value = {};
      var proms = [];
      var shape = value.shape;
      var _iterator5 = _createForOfIteratorHelper(value.keys),
        _step5;
      try {
        var _loop4 = function _loop4() {
          var key = _step5.value;
          var el = shape[key];
          var r = el._zod.run({
            value: input[key],
            issues: []
          }, ctx);
          if (r instanceof Promise) {
            proms.push(r.then(function (r) {
              return handlePropertyResult(r, payload, key, input);
            }));
          } else {
            handlePropertyResult(r, payload, key, input);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (!catchall) {
        return proms.length ? Promise.all(proms).then(function () {
          return payload;
        }) : payload;
      }
      return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
  });
  function handleUnionResults(results, _final3, inst, ctx) {
    var _iterator8 = _createForOfIteratorHelper(results),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var result = _step8.value;
        if (result.issues.length === 0) {
          _final3.value = result.value;
          return _final3;
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    var nonaborted = results.filter(function (r) {
      return !aborted(r);
    });
    if (nonaborted.length === 1) {
      _final3.value = nonaborted[0].value;
      return nonaborted[0];
    }
    _final3.issues.push({
      code: "invalid_union",
      input: _final3.value,
      inst: inst,
      errors: results.map(function (result) {
        return result.issues.map(function (iss) {
          return finalizeIssue(iss, ctx, config());
        });
      })
    });
    return _final3;
  }
  var $ZodUnion = /*@__PURE__*/$constructor("$ZodUnion", function (inst, def) {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", function () {
      return def.options.some(function (o) {
        return o._zod.optin === "optional";
      }) ? "optional" : undefined;
    });
    defineLazy(inst._zod, "optout", function () {
      return def.options.some(function (o) {
        return o._zod.optout === "optional";
      }) ? "optional" : undefined;
    });
    defineLazy(inst._zod, "values", function () {
      if (def.options.every(function (o) {
        return o._zod.values;
      })) {
        return new Set(def.options.flatMap(function (option) {
          return Array.from(option._zod.values);
        }));
      }
      return undefined;
    });
    defineLazy(inst._zod, "pattern", function () {
      if (def.options.every(function (o) {
        return o._zod.pattern;
      })) {
        var patterns = def.options.map(function (o) {
          return o._zod.pattern;
        });
        return new RegExp("^(".concat(patterns.map(function (p) {
          return cleanRegex(p.source);
        }).join("|"), ")$"));
      }
      return undefined;
    });
    var single = def.options.length === 1;
    var first = def.options[0]._zod.run;
    inst._zod.parse = function (payload, ctx) {
      if (single) {
        return first(payload, ctx);
      }
      var async = false;
      var results = [];
      var _iterator9 = _createForOfIteratorHelper(def.options),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var option = _step9.value;
          var result = option._zod.run({
            value: payload.value,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            results.push(result);
            async = true;
          } else {
            if (result.issues.length === 0) return result;
            results.push(result);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!async) return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then(function (results) {
        return handleUnionResults(results, payload, inst, ctx);
      });
    };
  });
  var $ZodTuple = /*@__PURE__*/$constructor("$ZodTuple", function (inst, def) {
    $ZodType.init(inst, def);
    var items = def.items;
    var optStart = items.length - _toConsumableArray(items).reverse().findIndex(function (item) {
      return item._zod.optin !== "optional";
    });
    inst._zod.parse = function (payload, ctx) {
      var input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          input: input,
          inst: inst,
          expected: "tuple",
          code: "invalid_type"
        });
        return payload;
      }
      payload.value = [];
      var proms = [];
      if (!def.rest) {
        var tooBig = input.length > items.length;
        var tooSmall = input.length < optStart - 1;
        if (tooBig || tooSmall) {
          payload.issues.push(_objectSpread2(_objectSpread2({}, tooBig ? {
            code: "too_big",
            maximum: items.length
          } : {
            code: "too_small",
            minimum: items.length
          }), {}, {
            input: input,
            inst: inst,
            origin: "array"
          }));
          return payload;
        }
      }
      var i = -1;
      var _iterator13 = _createForOfIteratorHelper(items),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var item = _step13.value;
          i++;
          if (i >= input.length) if (i >= optStart) continue;
          var _result = item._zod.run({
            value: input[i],
            issues: []
          }, ctx);
          if (_result instanceof Promise) {
            proms.push(_result.then(function (result) {
              return handleTupleResult(result, payload, i);
            }));
          } else {
            handleTupleResult(_result, payload, i);
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      if (def.rest) {
        var rest = input.slice(items.length);
        var _iterator14 = _createForOfIteratorHelper(rest),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var el = _step14.value;
            i++;
            var result = def.rest._zod.run({
              value: el,
              issues: []
            }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then(function (result) {
                return handleTupleResult(result, payload, i);
              }));
            } else {
              handleTupleResult(result, payload, i);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
      if (proms.length) return Promise.all(proms).then(function () {
        return payload;
      });
      return payload;
    };
  });
  function handleTupleResult(result, _final4, index) {
    if (result.issues.length) {
      var _final4$issues;
      (_final4$issues = _final4.issues).push.apply(_final4$issues, _toConsumableArray(prefixIssues(index, result.issues)));
    }
    _final4.value[index] = result.value;
  }
  var $ZodRecord = /*@__PURE__*/$constructor("$ZodRecord", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.parse = function (payload, ctx) {
      var input = payload.value;
      if (!isPlainObject(input)) {
        payload.issues.push({
          expected: "record",
          code: "invalid_type",
          input: input,
          inst: inst
        });
        return payload;
      }
      var proms = [];
      if (def.keyType._zod.values) {
        var values = def.keyType._zod.values;
        payload.value = {};
        var _iterator15 = _createForOfIteratorHelper(values),
          _step15;
        try {
          var _loop5 = function _loop5() {
            var key = _step15.value;
            if (typeof key === "string" || typeof key === "number" || _typeof(key) === "symbol") {
              var result = def.valueType._zod.run({
                value: input[key],
                issues: []
              }, ctx);
              if (result instanceof Promise) {
                proms.push(result.then(function (result) {
                  if (result.issues.length) {
                    var _payload$issues;
                    (_payload$issues = payload.issues).push.apply(_payload$issues, _toConsumableArray(prefixIssues(key, result.issues)));
                  }
                  payload.value[key] = result.value;
                }));
              } else {
                if (result.issues.length) {
                  var _payload$issues2;
                  (_payload$issues2 = payload.issues).push.apply(_payload$issues2, _toConsumableArray(prefixIssues(key, result.issues)));
                }
                payload.value[key] = result.value;
              }
            }
          };
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            _loop5();
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        var unrecognized;
        for (var key in input) {
          if (!values.has(key)) {
            unrecognized = unrecognized !== null && unrecognized !== void 0 ? unrecognized : [];
            unrecognized.push(key);
          }
        }
        if (unrecognized && unrecognized.length > 0) {
          payload.issues.push({
            code: "unrecognized_keys",
            input: input,
            inst: inst,
            keys: unrecognized
          });
        }
      } else {
        payload.value = {};
        var _iterator16 = _createForOfIteratorHelper(Reflect.ownKeys(input)),
          _step16;
        try {
          var _loop6 = function _loop6() {
              var key = _step16.value;
              if (key === "__proto__") return 0; // continue
              var keyResult = def.keyType._zod.run({
                value: key,
                issues: []
              }, ctx);
              if (keyResult instanceof Promise) {
                throw new Error("Async schemas not supported in object keys currently");
              }
              if (keyResult.issues.length) {
                payload.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: keyResult.issues.map(function (iss) {
                    return finalizeIssue(iss, ctx, config());
                  }),
                  input: key,
                  path: [key],
                  inst: inst
                });
                payload.value[keyResult.value] = keyResult.value;
                return 0; // continue
              }
              var result = def.valueType._zod.run({
                value: input[key],
                issues: []
              }, ctx);
              if (result instanceof Promise) {
                proms.push(result.then(function (result) {
                  if (result.issues.length) {
                    var _payload$issues3;
                    (_payload$issues3 = payload.issues).push.apply(_payload$issues3, _toConsumableArray(prefixIssues(key, result.issues)));
                  }
                  payload.value[keyResult.value] = result.value;
                }));
              } else {
                if (result.issues.length) {
                  var _payload$issues4;
                  (_payload$issues4 = payload.issues).push.apply(_payload$issues4, _toConsumableArray(prefixIssues(key, result.issues)));
                }
                payload.value[keyResult.value] = result.value;
              }
            },
            _ret3;
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            _ret3 = _loop6();
            if (_ret3 === 0) continue;
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(function () {
          return payload;
        });
      }
      return payload;
    };
  });
  var $ZodEnum = /*@__PURE__*/$constructor("$ZodEnum", function (inst, def) {
    $ZodType.init(inst, def);
    var values = getEnumValues(def.entries);
    var valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp("^(".concat(values.filter(function (k) {
      return propertyKeyTypes.has(_typeof(k));
    }).map(function (o) {
      return typeof o === "string" ? escapeRegex(o) : o.toString();
    }).join("|"), ")$"));
    inst._zod.parse = function (payload, _ctx) {
      var input = payload.value;
      if (valuesSet.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values: values,
        input: input,
        inst: inst
      });
      return payload;
    };
  });
  var $ZodLiteral = /*@__PURE__*/$constructor("$ZodLiteral", function (inst, def) {
    $ZodType.init(inst, def);
    if (def.values.length === 0) {
      throw new Error("Cannot create literal schema with no valid values");
    }
    inst._zod.values = new Set(def.values);
    inst._zod.pattern = new RegExp("^(".concat(def.values.map(function (o) {
      return typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o);
    }).join("|"), ")$"));
    inst._zod.parse = function (payload, _ctx) {
      var input = payload.value;
      if (inst._zod.values.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values: def.values,
        input: input,
        inst: inst
      });
      return payload;
    };
  });
  function handleOptionalResult(result, input) {
    if (result.issues.length && input === undefined) {
      return {
        issues: [],
        value: undefined
      };
    }
    return result;
  }
  var $ZodOptional = /*@__PURE__*/$constructor("$ZodOptional", function (inst, def) {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", function () {
      return def.innerType._zod.values ? new Set([].concat(_toConsumableArray(def.innerType._zod.values), [undefined])) : undefined;
    });
    defineLazy(inst._zod, "pattern", function () {
      var pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), ")?$")) : undefined;
    });
    inst._zod.parse = function (payload, ctx) {
      if (def.innerType._zod.optin === "optional") {
        var result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) return result.then(function (r) {
          return handleOptionalResult(r, payload.value);
        });
        return handleOptionalResult(result, payload.value);
      }
      if (payload.value === undefined) {
        return payload;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNullable = /*@__PURE__*/$constructor("$ZodNullable", function (inst, def) {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", function () {
      return def.innerType._zod.optin;
    });
    defineLazy(inst._zod, "optout", function () {
      return def.innerType._zod.optout;
    });
    defineLazy(inst._zod, "pattern", function () {
      var pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp("^(".concat(cleanRegex(pattern.source), "|null)$")) : undefined;
    });
    defineLazy(inst._zod, "values", function () {
      return def.innerType._zod.values ? new Set([].concat(_toConsumableArray(def.innerType._zod.values), [null])) : undefined;
    });
    inst._zod.parse = function (payload, ctx) {
      // Forward direction (decode): allow null to pass through
      if (payload.value === null) return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodFunction = /*@__PURE__*/$constructor("$ZodFunction", function (inst, def) {
    $ZodType.init(inst, def);
    inst._def = def;
    inst._zod.def = def;
    inst.implement = function (func) {
      if (typeof func !== "function") {
        throw new Error("implement() must be called with a function");
      }
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
        var result = Reflect.apply(func, this, parsedArgs);
        if (inst._def.output) {
          return parse(inst._def.output, result);
        }
        return result;
      };
    };
    inst.implementAsync = function (func) {
      if (typeof func !== "function") {
        throw new Error("implementAsync() must be called with a function");
      }
      return /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _len2,
          args,
          _key3,
          parsedArgs,
          result,
          _args2 = arguments,
          _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              for (_len2 = _args2.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                args[_key3] = _args2[_key3];
              }
              if (!inst._def.input) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return parseAsync(inst._def.input, args);
            case 1:
              _t = _context2.v;
              _context2.n = 3;
              break;
            case 2:
              _t = args;
            case 3:
              parsedArgs = _t;
              _context2.n = 4;
              return Reflect.apply(func, this, parsedArgs);
            case 4:
              result = _context2.v;
              if (!inst._def.output) {
                _context2.n = 6;
                break;
              }
              _context2.n = 5;
              return parseAsync(inst._def.output, result);
            case 5:
              return _context2.a(2, _context2.v);
            case 6:
              return _context2.a(2, result);
          }
        }, _callee2, this);
      }));
    };
    inst._zod.parse = function (payload, _ctx) {
      if (typeof payload.value !== "function") {
        payload.issues.push({
          code: "invalid_type",
          expected: "function",
          input: payload.value,
          inst: inst
        });
        return payload;
      }
      // Check if output is a promise type to determine if we should use async implementation
      var hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
      if (hasPromiseOutput) {
        payload.value = inst.implementAsync(payload.value);
      } else {
        payload.value = inst.implement(payload.value);
      }
      return payload;
    };
    inst.input = function () {
      var F = inst.constructor;
      if (Array.isArray(arguments.length <= 0 ? undefined : arguments[0])) {
        return new F({
          type: "function",
          input: new $ZodTuple({
            type: "tuple",
            items: arguments.length <= 0 ? undefined : arguments[0],
            rest: arguments.length <= 1 ? undefined : arguments[1]
          }),
          output: inst._def.output
        });
      }
      return new F({
        type: "function",
        input: arguments.length <= 0 ? undefined : arguments[0],
        output: inst._def.output
      });
    };
    inst.output = function (output) {
      var F = inst.constructor;
      return new F({
        type: "function",
        input: inst._def.input,
        output: output
      });
    };
    return inst;
  });
  var $ZodCustom = /*@__PURE__*/$constructor("$ZodCustom", function (inst, def) {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = function (payload, _) {
      return payload;
    };
    inst._zod.check = function (payload) {
      var input = payload.value;
      var r = def.fn(input);
      if (r instanceof Promise) {
        return r.then(function (r) {
          return handleRefineResult(r, payload, input, inst);
        });
      }
      handleRefineResult(r, payload, input, inst);
      return;
    };
  });
  function handleRefineResult(result, payload, input, inst) {
    if (!result) {
      var _inst$_zod$def$path;
      var _iss = {
        code: "custom",
        input: input,
        inst: inst,
        // incorporates params.error into issue reporting
        path: _toConsumableArray((_inst$_zod$def$path = inst._zod.def.path) !== null && _inst$_zod$def$path !== void 0 ? _inst$_zod$def$path : []),
        // incorporates params.error into issue reporting
        "continue": !inst._zod.def.abort
        // params: inst._zod.def.params,
      };
      if (inst._zod.def.params) _iss.params = inst._zod.def.params;
      payload.issues.push(issue(_iss));
    }
  }

  function _string(Class, params) {
    return new Class(_objectSpread2({
      type: "string"
    }, normalizeParams(params)));
  }
  function _coercedString(Class, params) {
    return new Class(_objectSpread2({
      type: "string",
      coerce: true
    }, normalizeParams(params)));
  }
  function _email(Class, params) {
    return new Class(_objectSpread2({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false
    }, normalizeParams(params)));
  }
  function _coercedNumber(Class, params) {
    return new Class(_objectSpread2({
      type: "number",
      coerce: true,
      checks: []
    }, normalizeParams(params)));
  }
  function _boolean$1(Class, params) {
    return new Class(_objectSpread2({
      type: "boolean"
    }, normalizeParams(params)));
  }
  function _unknown(Class) {
    return new Class({
      type: "unknown"
    });
  }
  function _void$1(Class, params) {
    return new Class(_objectSpread2({
      type: "void"
    }, normalizeParams(params)));
  }
  function _minLength(minimum, params) {
    return new $ZodCheckMinLength(_objectSpread2(_objectSpread2({
      check: "min_length"
    }, normalizeParams(params)), {}, {
      minimum: minimum
    }));
  }
  function _regex(pattern, params) {
    return new $ZodCheckRegex(_objectSpread2(_objectSpread2({
      check: "string_format",
      format: "regex"
    }, normalizeParams(params)), {}, {
      pattern: pattern
    }));
  }
  function _overwrite(tx) {
    return new $ZodCheckOverwrite({
      check: "overwrite",
      tx: tx
    });
  }
  // trim
  function _trim() {
    return _overwrite(function (input) {
      return input.trim();
    });
  }
  function _custom(Class, fn, _params) {
    var _norm$abort;
    var norm = normalizeParams(_params);
    (_norm$abort = norm.abort) !== null && _norm$abort !== void 0 ? _norm$abort : norm.abort = true; // default to abort:false
    var schema = new Class(_objectSpread2({
      type: "custom",
      check: "custom",
      fn: fn
    }, norm));
    return schema;
  }

  var ZodMiniType = /*@__PURE__*/$constructor("ZodMiniType", function (inst, def) {
    if (!inst._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    $ZodType.init(inst, def);
    inst.def = def;
    inst.type = def.type;
    inst.parse = function (data, params) {
      return parse(inst, data, params, {
        callee: inst.parse
      });
    };
    inst.safeParse = function (data, params) {
      return safeParse(inst, data, params);
    };
    inst.parseAsync = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data, params) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, parseAsync(inst, data, params, {
                callee: inst.parseAsync
              }));
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    inst.safeParseAsync = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data, params) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, safeParseAsync(inst, data, params));
          }
        }, _callee2);
      }));
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();
    inst.check = function () {
      var _def$checks;
      for (var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++) {
        checks[_key] = arguments[_key];
      }
      return inst.clone(_objectSpread2(_objectSpread2({}, def), {}, {
        checks: [].concat(_toConsumableArray((_def$checks = def.checks) !== null && _def$checks !== void 0 ? _def$checks : []), _toConsumableArray(checks.map(function (ch) {
          return typeof ch === "function" ? {
            _zod: {
              check: ch,
              def: {
                check: "custom"
              },
              onattach: []
            }
          } : ch;
        })))
      }) // { parent: true }
      );
    };
    inst.clone = function (_def, params) {
      return clone(inst, _def, params);
    };
    inst.brand = function () {
      return inst;
    };
    inst.register = function (reg, meta) {
      reg.add(inst, meta);
      return inst;
    };
  });
  var ZodMiniString = /*@__PURE__*/$constructor("ZodMiniString", function (inst, def) {
    $ZodString.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function string$1(params) {
    return _string(ZodMiniString, params);
  }
  var ZodMiniStringFormat = /*@__PURE__*/$constructor("ZodMiniStringFormat", function (inst, def) {
    $ZodStringFormat.init(inst, def);
    ZodMiniString.init(inst, def);
  });
  var ZodMiniEmail = /*@__PURE__*/$constructor("ZodMiniEmail", function (inst, def) {
    $ZodEmail.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  });
  function email(params) {
    return _email(ZodMiniEmail, params);
  }
  var ZodMiniNumber = /*@__PURE__*/$constructor("ZodMiniNumber", function (inst, def) {
    $ZodNumber.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  var ZodMiniBoolean = /*@__PURE__*/$constructor("ZodMiniBoolean", function (inst, def) {
    $ZodBoolean.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function _boolean(params) {
    return _boolean$1(ZodMiniBoolean, params);
  }
  var ZodMiniUnknown = /*@__PURE__*/$constructor("ZodMiniUnknown", function (inst, def) {
    $ZodUnknown.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function unknown() {
    return _unknown(ZodMiniUnknown);
  }
  var ZodMiniVoid = /*@__PURE__*/$constructor("ZodMiniVoid", function (inst, def) {
    $ZodVoid.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function _void(params) {
    return _void$1(ZodMiniVoid, params);
  }
  var ZodMiniArray = /*@__PURE__*/$constructor("ZodMiniArray", function (inst, def) {
    $ZodArray.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function array(element, params) {
    return new ZodMiniArray(_objectSpread2({
      type: "array",
      element: element
    }, normalizeParams(params)));
  }
  var ZodMiniObject = /*@__PURE__*/$constructor("ZodMiniObject", function (inst, def) {
    $ZodObject.init(inst, def);
    ZodMiniType.init(inst, def);
    defineLazy(inst, "shape", function () {
      return def.shape;
    });
  });
  function object(shape, params) {
    var def = _objectSpread2({
      type: "object",
      shape: shape !== null && shape !== void 0 ? shape : {}
    }, normalizeParams(params));
    return new ZodMiniObject(def);
  }
  function partial(schema, mask) {
    return partial$1(ZodMiniOptional, schema, mask);
  }
  var ZodMiniUnion = /*@__PURE__*/$constructor("ZodMiniUnion", function (inst, def) {
    $ZodUnion.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function union(options, params) {
    return new ZodMiniUnion(_objectSpread2({
      type: "union",
      options: options
    }, normalizeParams(params)));
  }
  var ZodMiniTuple = /*@__PURE__*/$constructor("ZodMiniTuple", function (inst, def) {
    $ZodTuple.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function tuple(items, _paramsOrRest, _params) {
    var hasRest = _paramsOrRest instanceof $ZodType;
    var params = hasRest ? _params : _paramsOrRest;
    var rest = hasRest ? _paramsOrRest : null;
    return new ZodMiniTuple(_objectSpread2({
      type: "tuple",
      items: items,
      rest: rest
    }, normalizeParams(params)));
  }
  var ZodMiniRecord = /*@__PURE__*/$constructor("ZodMiniRecord", function (inst, def) {
    $ZodRecord.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function record(keyType, valueType, params) {
    return new ZodMiniRecord(_objectSpread2({
      type: "record",
      keyType: keyType,
      valueType: valueType
    }, normalizeParams(params)));
  }
  var ZodMiniEnum = /*@__PURE__*/$constructor("ZodMiniEnum", function (inst, def) {
    $ZodEnum.init(inst, def);
    ZodMiniType.init(inst, def);
    inst.options = Object.values(def.entries);
  });
  function _enum(values, params) {
    var entries = Array.isArray(values) ? Object.fromEntries(values.map(function (v) {
      return [v, v];
    })) : values;
    return new ZodMiniEnum(_objectSpread2({
      type: "enum",
      entries: entries
    }, normalizeParams(params)));
  }
  var ZodMiniLiteral = /*@__PURE__*/$constructor("ZodMiniLiteral", function (inst, def) {
    $ZodLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function literal(value, params) {
    return new ZodMiniLiteral(_objectSpread2({
      type: "literal",
      values: Array.isArray(value) ? value : [value]
    }, normalizeParams(params)));
  }
  var ZodMiniOptional = /*@__PURE__*/$constructor("ZodMiniOptional", function (inst, def) {
    $ZodOptional.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function optional(innerType) {
    return new ZodMiniOptional({
      type: "optional",
      innerType: innerType
    });
  }
  var ZodMiniNullable = /*@__PURE__*/$constructor("ZodMiniNullable", function (inst, def) {
    $ZodNullable.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function nullable(innerType) {
    return new ZodMiniNullable({
      type: "nullable",
      innerType: innerType
    });
  }
  var ZodMiniCustom = /*@__PURE__*/$constructor("ZodMiniCustom", function (inst, def) {
    $ZodCustom.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  // ZodCustom
  // custom schema
  function custom(fn, _params) {
    return _custom(ZodMiniCustom, fn !== null && fn !== void 0 ? fn : function () {
      return true;
    }, _params);
  }
  function _instanceof(cls) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      error: "Input not instance of ".concat(cls.name)
    };
    var inst = custom(function (data) {
      return data instanceof cls;
    }, params);
    inst._zod.bag.Class = cls;
    return inst;
  }
  var ZodMiniFunction = /*@__PURE__*/$constructor("ZodMiniFunction", function (inst, def) {
    $ZodFunction.init(inst, def);
    ZodMiniType.init(inst, def);
  });
  function _function(params) {
    var _params$input, _params$output;
    return new ZodMiniFunction({
      type: "function",
      input: Array.isArray(params === null || params === void 0 ? void 0 : params.input) ? tuple(params === null || params === void 0 ? void 0 : params.input) : (_params$input = params === null || params === void 0 ? void 0 : params.input) !== null && _params$input !== void 0 ? _params$input : array(unknown()),
      output: (_params$output = params === null || params === void 0 ? void 0 : params.output) !== null && _params$output !== void 0 ? _params$output : unknown()
    });
  }

  function string(params) {
    return _coercedString(ZodMiniString, params);
  }
  function number(params) {
    return _coercedNumber(ZodMiniNumber, params);
  }

  var ValidationTypeValidator = union([
      literal('required'),
      literal('email'),
      literal('number'),
      literal('code'),
      tuple([literal('equal'), string$1().check(_minLength(1))]),
  ]);
  var WithOptionValidator = record(string$1(), ValidationTypeValidator);
  var ModeOptionValidator = _enum(['or', 'and']);
  var LimitationOptionValidator = nullable(_enum(['number', 'code']));
  var ValidationOptionValidator = object({
      type: ValidationTypeValidator,
      mode: optional(ModeOptionValidator),
      with: optional(WithOptionValidator),
      if: optional(object({
          mode: optional(ModeOptionValidator),
          target: record(string$1(), string$1()),
      })),
      message: optional(string$1()),
  });
  var RuleValidator = array(object({
      name: string$1(),
      limit: optional(LimitationOptionValidator),
      validation: optional(union([
          ValidationOptionValidator,
          array(ValidationOptionValidator),
      ])),
  }));
  var ValidatedErrorValidator = object({
      type: string$1(),
      message: optional(string$1()),
  });
  var ParamValidator = object({
      rules: RuleValidator,
      error_class: string$1(),
      error_message_class: string$1(),
      empty_error_message_class: string$1(),
      valid_class: string$1(),
      initial_error_view: _boolean(),
      submit_button: optional(union([
          string$1(),
          _instanceof(HTMLInputElement),
          _instanceof(HTMLButtonElement),
      ])),
      on_validate: optional(_function({
          output: _void(),
      })),
      on_success: optional(_function({
          output: _void(),
      })),
      on_error: optional(_function({
          input: [record(string$1(), array(ValidatedErrorValidator))],
          output: _void(),
      })),
      on_submit: optional(_function({
          output: _void(),
      })),
      on_failed: optional(_function({
          input: [
              record(string$1(), array(ValidatedErrorValidator)),
              array(string$1()),
          ],
          output: _void(),
      })),
      focus_invalid_field: optional(_boolean()),
  });
  var InitialParamValidator = partial(ParamValidator, {
      error_class: true,
      error_message_class: true,
      empty_error_message_class: true,
      valid_class: true,
      initial_error_view: true,
  });
  object({
      validate: _function({
          output: _void(),
      }),
  });
  record(string$1(), _instanceof(HTMLElement));
  var FormElementValidator = union([
      string$1(),
      _instanceof(HTMLFormElement),
  ]);
  union([
      _instanceof(HTMLInputElement),
      _instanceof(HTMLSelectElement),
      _instanceof(HTMLTextAreaElement),
  ]);

  var rule$3 = string$1().check(_trim(), _minLength(1));
  /**
   * Check required of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$4 = function (values) {
      if (!values.length) {
          return false;
      }
      return values.reduce(function (prev, current) { return prev && rule$3.safeParse(current).success; }, true);
  };

  var rule$2 = email();
  /**
   * Check Email format of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$3 = function (values) {
      return values.reduce(function (prev, current) {
          if (!prev || !rule$3.safeParse(current).success) {
              return prev;
          }
          return prev && rule$2.safeParse(current).success;
      }, true);
  };

  var rule$1 = number();
  /**
   * Check numeric of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$2 = function (values) {
      return values.reduce(function (prev, current) { return prev && rule$1.safeParse(current).success; }, true);
  };

  var rule = string().check(_regex(/^[0-9-+*]*$/));
  /**
   * Check code format of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$1 = function (values) {
      return values.reduce(function (prev, current) {
          if (!prev || !rule$3.safeParse(current).success) {
              return prev;
          }
          return prev && rule.safeParse(current).success;
      }, true);
  };

  /**
   * Convert to number format possibily
   * @param {string} value
   * @returns {string}
   */
  var convert$1 = function (value) {
      // Full width to Half width characters
      value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
      // Remove text except for numbers
      value = value.replace(/[^0-9]/g, '');
      return value;
  };

  /**
   * Convert to code format possibily
   * @param {string} value
   * @returns {string}
   */
  var convert = function (value) {
      // Full width to Half width characters
      value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
      // Convert dash
      value = value.replace(/[−ーー―]/g, '-');
      // Convert Plus
      value = value.replace(/[＋]/g, '+');
      // Convert asterisk
      value = value.replace(/[＊]/g, '*');
      // Remove text except for numbers
      value = value.replace(/[^0-9-+*]/g, '');
      return value;
  };

  var isCheckField = function (el) {
      var tag = el.tagName.toLowerCase();
      var type = el.getAttribute('type');
      return tag === 'input' && (type === 'radio' || type === 'checkbox');
  };
  var getElement = function (formEl, name) {
      if (!Object.hasOwn(formEl, name)) {
          if (!Object.hasOwn(formEl, "".concat(name, "[]"))) {
              return [];
          }
          name = "".concat(name, "[]");
      }
      var fields = formEl[name];
      if (fields['entries']) {
          return __spreadArray([], fields, true);
      }
      else {
          return [fields];
      }
  };
  var getValues = function (elements, limit) {
      if (limit === void 0) { limit = null; }
      var values = [];
      elements.map(function (el) {
          if (isCheckField(el)) {
              if (el.checked) {
                  values.push(el.value);
              }
          }
          else {
              switch (limit) {
                  case 'number':
                      el.value = convert$1(el.value);
                      break;
                  case 'code':
                      el.value = convert(el.value);
                      break;
              }
              values.push(el.value);
          }
      });
      return values;
  };

  var check = function (formEl, values, target) {
      var targetElement = getElement(formEl, target);
      var targetValues = getValues(targetElement);
      return values.every(function (value) { return targetValues.includes(value); });
  };

  var validate = function (formEl, elements, limit, validations) {
      var errors = [];
      var values = getValues(elements, limit);
      if (!validations) {
          return errors;
      }
      validations.map(function (validation) {
          if (!checkIf(formEl, validation)) {
              return;
          }
          if (validation.with) {
              switch (validation.mode) {
                  case 'or':
                      validateMultipleOr(formEl, validation, errors, values);
                      break;
                  case 'and':
                  default:
                      validateMultipleAnd(formEl, validation, errors, values);
                      break;
              }
          }
          else {
              validateSingle(formEl, validation, errors, values);
          }
      });
      return errors;
  };
  var checkIf = function (formEl, validation) {
      var result = true;
      if (!validation.if) {
          return result;
      }
      Object.keys(validation.if.target).map(function (name) {
          if (!validation.if) {
              return;
          }
          var ifTarget = validation.if.target[name];
          var ifElement = getElement(formEl, name);
          var ifValue = getValues(ifElement);
          if (validation.if.mode === 'or') {
              result = result || ifValue.includes(ifTarget);
          }
          else {
              result = result && ifValue.includes(ifTarget);
          }
      });
      return result;
  };
  var checkValidate = function (formEl, ruleType, values) {
      switch (ruleType) {
          case 'required':
              return check$4(values);
          case 'email':
              return check$3(values);
          case 'number':
              return check$2(values);
          case 'code':
              return check$1(values);
          default:
              if (Array.isArray(ruleType) && ruleType[0] === 'equal') {
                  return check(formEl, values, ruleType[1]);
              }
      }
  };
  var validateSingle = function (formEl, validation, errors, values) {
      if (!checkValidate(formEl, validation.type, values)) {
          errors.push({
              type: Array.isArray(validation.type)
                  ? validation.type[0]
                  : validation.type,
              message: validation.message,
          });
      }
      return errors;
  };
  var validateMultipleOr = function (formEl, validation, errors, values) {
      var result = checkValidate(formEl, validation.type, values);
      if (validation.with) {
          Object.keys(validation.with).map(function (name) {
              if (!validation.with) {
                  return;
              }
              var withType = validation.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result || checkValidate(formEl, withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: Array.isArray(validation.type)
                  ? validation.type[0]
                  : validation.type,
              message: validation.message,
          });
      }
      return errors;
  };
  var validateMultipleAnd = function (formEl, validation, errors, values) {
      var result = checkValidate(formEl, validation.type, values);
      if (validation.with) {
          Object.keys(validation.with).map(function (name) {
              if (!validation.with) {
                  return;
              }
              var withType = validation.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result && checkValidate(formEl, withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: Array.isArray(validation.type)
                  ? validation.type[0]
                  : validation.type,
              message: validation.message,
          });
      }
      return errors;
  };

  var createElement = function (formEl, name, limit, validations, params, errors) {
      var elements = getElement(formEl, name);
      var withElements = (function () {
          var results = [];
          if (!validations) {
              return results;
          }
          validations.map(function (validation) {
              if (!validation.with) {
                  return;
              }
              Object.keys(validation.with).map(function (name) {
                  var fields = getElement(formEl, name);
                  results.push.apply(results, fields);
              });
          });
          return results;
      })();
      var ifElements = (function () {
          var results = [];
          if (!validations) {
              return results;
          }
          validations.map(function (validation) {
              if (!validation.if) {
                  return;
              }
              Object.keys(validation.if.target).map(function (name) {
                  var fields = getElement(formEl, name);
                  results.push.apply(results, fields);
              });
          });
          return results;
      })();
      var equalElements = (function () {
          var results = [];
          if (!validations) {
              return results;
          }
          validations.map(function (validation) {
              if (!Array.isArray(validation.type) ||
                  validation.type[0] !== 'equal') {
                  return;
              }
              if (!validation.type[1]) {
                  return;
              }
              var fields = getElement(formEl, validation.type[1]);
              results.push.apply(results, fields);
          });
          return results;
      })();
      if (!elements.length) {
          throw Error("Not found target field element: ".concat(name));
      }
      // Prepare or Find error message field
      var messageField = (function () {
          if (!validations || !validations.length) {
              return;
          }
          var existField = document.querySelector("[data-inputfollow-error=\"".concat(name, "\"]"));
          if (existField) {
              existField.classList.add(params.error_message_class, params.empty_error_message_class);
              return existField;
          }
          var additionalField = document.createElement('ul');
          additionalField.classList.add(params.error_message_class, params.empty_error_message_class);
          additionalField.setAttribute('data-inputfollow-error', name);
          elements[0].insertAdjacentElement('afterend', additionalField);
          return additionalField;
      })();
      var addInvalidClass = function (_elements, render) {
          if (params.valid_class) {
              _elements.forEach(function (el) {
                  el.classList.remove(params.valid_class);
              });
          }
          if (render) {
              if (params.error_class) {
                  _elements.forEach(function (el) {
                      el.classList.add(params.error_class);
                  });
              }
          }
      };
      var addValidClass = function (_elements) {
          if (params.error_class) {
              _elements.forEach(function (el) {
                  el.classList.remove(params.error_class);
              });
          }
          if (params.valid_class) {
              _elements.forEach(function (el) {
                  el.classList.add(params.valid_class);
              });
          }
      };
      var validate$1 = function (init, ignored) {
          if (init === void 0) { init = false; }
          if (ignored === void 0) { ignored = false; }
          if (!name) {
              return;
          }
          var renderError = !ignored && (init !== true || params.initial_error_view);
          errors[name] = validate(formEl, elements, renderError ? limit : null, validations);
          if (!validations || !validations.length || !messageField) {
              return;
          }
          if (hasError()) {
              addInvalidClass(elements, renderError);
              addInvalidClass(withElements, renderError);
              addInvalidClass(ifElements, renderError);
              if (renderError) {
                  messageField.innerHTML = '';
                  errors[name].map(function (error) {
                      if (error.message) {
                          var messageElement = document.createElement('li');
                          messageElement.textContent = error.message;
                          messageField.appendChild(messageElement);
                      }
                  });
                  messageField.classList.remove(params.empty_error_message_class);
              }
          }
          else {
              addValidClass(elements);
              addValidClass(withElements);
              addValidClass(ifElements);
              messageField.innerHTML = '';
              messageField.classList.add(params.empty_error_message_class);
          }
      };
      var hasError = function () {
          if (!name) {
              return false;
          }
          return errors[name].length > 0;
      };
      var getErrors = function () {
          if (!name) {
              return [];
          }
          return errors[name];
      };
      var addEvents = function (_elements, useCapture) {
          if (useCapture === void 0) { useCapture = false; }
          _elements.forEach(function (el) {
              if (isCheckField(el)) {
                  el.addEventListener('input', function () {
                      validate$1();
                  }, useCapture);
              }
              else {
                  el.addEventListener('input', function () {
                      validate$1(false, true);
                  }, useCapture);
                  el.addEventListener('blur', function () {
                      validate$1();
                  }, useCapture);
              }
          });
      };
      addEvents(elements, true);
      addEvents(withElements, false);
      addEvents(ifElements, false);
      addEvents(equalElements, false);
      return {
          formEl: formEl,
          elements: elements,
          name: name,
          limit: limit,
          validations: validations,
          validate: validate$1,
          hasError: hasError,
          getErrors: getErrors,
      };
  };

  /**
   * InputFollow class
   *
   * @remarks
   * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Demo}.
   *
   * @public
   */
  var InputFollow = function (formEl, params) {
      FormElementValidator.parse(formEl);
      InitialParamValidator.parse(params);
      var targetFormElement = (function () {
          /**
           * Convert formEl to HTMLFormElement if it's string
           */
          if (typeof formEl === 'string') {
              var el = document.querySelector(formEl);
              if (!el) {
                  throw new Error("Not found target form element: ".concat(formEl));
              }
              return el;
          }
          return formEl;
      })();
      if (targetFormElement.tagName.toLowerCase() !== 'form') {
          throw new Error("Target element is not <form> element");
      }
      targetFormElement.addEventListener('submit', function (e) {
          var _a, _b;
          var flag = true;
          validate();
          var errorFields = [];
          Object.keys(errors).map(function (key) {
              var error = errors[key];
              if (error.length > 0) {
                  errorFields.push(key);
                  flag = false;
              }
          });
          if (!flag) {
              e.preventDefault();
              if (typeof arrangedParams.on_failed === 'function') {
                  arrangedParams.on_failed(errors, errorFields);
              }
              if (arrangedParams.focus_invalid_field) {
                  var firstErrorField = errorFields[0];
                  var errorElements = getElements(firstErrorField);
                  (_b = (_a = errorElements[0]) === null || _a === void 0 ? void 0 : _a.elements[0]) === null || _b === void 0 ? void 0 : _b.focus();
              }
              return false;
          }
          // Call on_submit callback if it's specified, and prevent default submission
          if (typeof arrangedParams.on_submit === 'function') {
              e.preventDefault();
              arrangedParams.on_submit();
              return false;
          }
          return true;
      });
      /**
       * Find submit button if it's specified
       */
      var submitButton = (function () {
          if (!params.submit_button) {
              return null;
          }
          if (typeof params.submit_button === 'string') {
              return targetFormElement.querySelector(params.submit_button);
          }
          return params.submit_button;
      })();
      /**
       * Arranged params
       */
      var arrangedParams = _assign({
          error_class: 'has-error',
          error_message_class: 'inputfollow-error',
          empty_error_message_class: 'is-empty',
          valid_class: 'is-valid',
          initial_error_view: false,
      }, params);
      /**
       * Prepare Proxy for observing errors values
       */
      var errors = new Proxy({}, {
          set: function (target, p, value, receiver) {
              var set = Reflect.set(target, p, value, receiver);
              if (set) {
                  var flag_1 = true;
                  Object.keys(errors).map(function (key) {
                      var error = errors[key];
                      flag_1 = flag_1 && error.length <= 0;
                  });
                  if (flag_1) {
                      if (submitButton) {
                          submitButton.removeAttribute('disabled');
                      }
                      if (typeof arrangedParams.on_success === 'function') {
                          arrangedParams.on_success();
                      }
                  }
                  else {
                      if (submitButton) {
                          submitButton.setAttribute('disabled', 'disabled');
                      }
                      if (typeof arrangedParams.on_error === 'function') {
                          arrangedParams.on_error(errors);
                      }
                  }
              }
              return set;
          },
      });
      /**
       * Preparing Checking Elements
       */
      var elements = [];
      arrangedParams.rules.map(function (_a) {
          var name = _a.name, limit = _a.limit, validation = _a.validation;
          var validations = (function () {
              if (!validation) {
                  return null;
              }
              if (Array.isArray(validation)) {
                  return validation;
              }
              return [validation];
          })();
          var Element = createElement(targetFormElement, name, limit !== null && limit !== void 0 ? limit : null, validations, arrangedParams, errors);
          if (!Element) {
              return;
          }
          elements.push(Element);
      });
      /**
       * Start validating
       */
      var validate = function (init) {
          if (init === void 0) { init = false; }
          elements.map(function (element) {
              element.validate(init);
          });
          if (typeof arrangedParams.on_validate === 'function') {
              arrangedParams.on_validate();
          }
      };
      /**
       * Get target elements
       */
      var getElements = function (name) {
          return elements.filter(function (el) { return el.name === name; });
      };
      // Initial validate
      validate(true);
      return { formEl: targetFormElement, elements: elements, validate: validate, getElements: getElements };
  };

  return InputFollow;

})();
//# sourceMappingURL=inputfollow.js.map
