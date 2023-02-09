/*!
  inputfollow.js v0.0.8
  https://github.com/sushat4692/inputfollow.js#readme
  Released under the MIT License.
*/
var InputFollow = (function () {
  'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
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

  var util;
  (function (util) {
    util.assertEqual = function (val) {
      return val;
    };
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = function (items) {
      var obj = {};
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          obj[item] = item;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return obj;
    };
    util.getValidEnumValues = function (obj) {
      var validKeys = util.objectKeys(obj).filter(function (k) {
        return typeof obj[obj[k]] !== "number";
      });
      var filtered = {};
      var _iterator2 = _createForOfIteratorHelper(validKeys),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var k = _step2.value;
          filtered[k] = obj[k];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return util.objectValues(filtered);
    };
    util.objectValues = function (obj) {
      return util.objectKeys(obj).map(function (e) {
        return obj[e];
      });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
    ? function (obj) {
      return Object.keys(obj);
    } // eslint-disable-line ban/ban
    : function (object) {
      var keys = [];
      for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util.find = function (arr, checker) {
      var _iterator3 = _createForOfIteratorHelper(arr),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          if (checker(item)) return item;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? function (val) {
      return Number.isInteger(val);
    } // eslint-disable-line ban/ban
    : function (val) {
      return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    };
    function joinValues(array) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " | ";
      return array.map(function (val) {
        return typeof val === "string" ? "'".concat(val, "'") : val;
      }).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = function (_, value) {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  var getParsedType = function getParsedType(data) {
    var t = _typeof(data);
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType["boolean"];
      case "function":
        return ZodParsedType["function"];
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType["null"];
        }
        if (data.then && typeof data.then === "function" && data["catch"] && typeof data["catch"] === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  var quotelessJson = function quotelessJson(obj) {
    var json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = /*#__PURE__*/function (_Error) {
    _inherits(ZodError, _Error);
    var _super = _createSuper(ZodError);
    function ZodError(issues) {
      var _this;
      _classCallCheck(this, ZodError);
      _this = _super.call(this);
      _this.issues = [];
      _this.addIssue = function (sub) {
        _this.issues = [].concat(_toConsumableArray(_this.issues), [sub]);
      };
      _this.addIssues = function () {
        var subs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _this.issues = [].concat(_toConsumableArray(_this.issues), _toConsumableArray(subs));
      };
      var actualProto = (this instanceof ZodError ? this.constructor : void 0).prototype;
      if (Object.setPrototypeOf) {
        // eslint-disable-next-line ban/ban
        Object.setPrototypeOf(_assertThisInitialized(_this), actualProto);
      } else {
        _this.__proto__ = actualProto;
      }
      _this.name = "ZodError";
      _this.issues = issues;
      return _this;
    }
    _createClass(ZodError, [{
      key: "errors",
      get: function get() {
        return this.issues;
      }
    }, {
      key: "format",
      value: function format(_mapper) {
        var mapper = _mapper || function (issue) {
          return issue.message;
        };
        var fieldErrors = {
          _errors: []
        };
        var processError = function processError(error) {
          var _iterator4 = _createForOfIteratorHelper(error.issues),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var issue = _step4.value;
              if (issue.code === "invalid_union") {
                issue.unionErrors.map(processError);
              } else if (issue.code === "invalid_return_type") {
                processError(issue.returnTypeError);
              } else if (issue.code === "invalid_arguments") {
                processError(issue.argumentsError);
              } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
              } else {
                var curr = fieldErrors;
                var i = 0;
                while (i < issue.path.length) {
                  var el = issue.path[i];
                  var terminal = i === issue.path.length - 1;
                  if (!terminal) {
                    curr[el] = curr[el] || {
                      _errors: []
                    };
                    // if (typeof el === "string") {
                    //   curr[el] = curr[el] || { _errors: [] };
                    // } else if (typeof el === "number") {
                    //   const errorArray: any = [];
                    //   errorArray._errors = [];
                    //   curr[el] = curr[el] || errorArray;
                    // }
                  } else {
                    curr[el] = curr[el] || {
                      _errors: []
                    };
                    curr[el]._errors.push(mapper(issue));
                  }
                  curr = curr[el];
                  i++;
                }
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        };
        processError(this);
        return fieldErrors;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.message;
      }
    }, {
      key: "message",
      get: function get() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
    }, {
      key: "isEmpty",
      get: function get() {
        return this.issues.length === 0;
      }
    }, {
      key: "flatten",
      value: function flatten() {
        var mapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (issue) {
          return issue.message;
        };
        var fieldErrors = {};
        var formErrors = [];
        var _iterator5 = _createForOfIteratorHelper(this.issues),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var sub = _step5.value;
            if (sub.path.length > 0) {
              fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
              fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
              formErrors.push(mapper(sub));
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return {
          formErrors: formErrors,
          fieldErrors: fieldErrors
        };
      }
    }, {
      key: "formErrors",
      get: function get() {
        return this.flatten();
      }
    }]);
    return ZodError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  ZodError.create = function (issues) {
    var error = new ZodError(issues);
    return error;
  };
  var errorMap = function errorMap(issue, _ctx) {
    var message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = "Expected ".concat(issue.expected, ", received ").concat(issue.received);
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = "Invalid literal value, expected ".concat(JSON.stringify(issue.expected, util.jsonStringifyReplacer));
        break;
      case ZodIssueCode.unrecognized_keys:
        message = "Unrecognized key(s) in object: ".concat(util.joinValues(issue.keys, ", "));
        break;
      case ZodIssueCode.invalid_union:
        message = "Invalid input";
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = "Invalid discriminator value. Expected ".concat(util.joinValues(issue.options));
        break;
      case ZodIssueCode.invalid_enum_value:
        message = "Invalid enum value. Expected ".concat(util.joinValues(issue.options), ", received '").concat(issue.received, "'");
        break;
      case ZodIssueCode.invalid_arguments:
        message = "Invalid function arguments";
        break;
      case ZodIssueCode.invalid_return_type:
        message = "Invalid function return type";
        break;
      case ZodIssueCode.invalid_date:
        message = "Invalid date";
        break;
      case ZodIssueCode.invalid_string:
        if (_typeof(issue.validation) === "object") {
          if ("startsWith" in issue.validation) {
            message = "Invalid input: must start with \"".concat(issue.validation.startsWith, "\"");
          } else if ("endsWith" in issue.validation) {
            message = "Invalid input: must end with \"".concat(issue.validation.endsWith, "\"");
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = "Invalid ".concat(issue.validation);
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array") message = "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than", " ").concat(issue.minimum, " element(s)");else if (issue.type === "string") message = "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "over", " ").concat(issue.minimum, " character(s)");else if (issue.type === "number") message = "Number must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(issue.minimum);else if (issue.type === "date") message = "Date must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(issue.minimum));else message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array") message = "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than", " ").concat(issue.maximum, " element(s)");else if (issue.type === "string") message = "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "under", " ").concat(issue.maximum, " character(s)");else if (issue.type === "number") message = "Number must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than", " ").concat(issue.maximum);else if (issue.type === "date") message = "Date must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(issue.maximum));else message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = "Invalid input";
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = "Intersection results could not be merged";
        break;
      case ZodIssueCode.not_multiple_of:
        message = "Number must be a multiple of ".concat(issue.multipleOf);
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return {
      message: message
    };
  };
  var overrideErrorMap = errorMap;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  var makeIssue = function makeIssue(params) {
    var data = params.data,
      path = params.path,
      errorMaps = params.errorMaps,
      issueData = params.issueData;
    var fullPath = [].concat(_toConsumableArray(path), _toConsumableArray(issueData.path || []));
    var fullIssue = _objectSpread2(_objectSpread2({}, issueData), {}, {
      path: fullPath
    });
    var errorMessage = "";
    var maps = errorMaps.filter(function (m) {
      return !!m;
    }).slice().reverse();
    var _iterator6 = _createForOfIteratorHelper(maps),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var map = _step6.value;
        errorMessage = map(fullIssue, {
          data: data,
          defaultError: errorMessage
        }).message;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return _objectSpread2(_objectSpread2({}, issueData), {}, {
      path: fullPath,
      message: issueData.message || errorMessage
    });
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    var issue = makeIssue({
      issueData: issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap // then global default map
      ].filter(function (x) {
        return !!x;
      })
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = /*#__PURE__*/function () {
    function ParseStatus() {
      _classCallCheck(this, ParseStatus);
      this.value = "valid";
    }
    _createClass(ParseStatus, [{
      key: "dirty",
      value: function dirty() {
        if (this.value === "valid") this.value = "dirty";
      }
    }, {
      key: "abort",
      value: function abort() {
        if (this.value !== "aborted") this.value = "aborted";
      }
    }], [{
      key: "mergeArray",
      value: function mergeArray(status, results) {
        var arrayValue = [];
        var _iterator7 = _createForOfIteratorHelper(results),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var s = _step7.value;
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return {
          status: status.value,
          value: arrayValue
        };
      }
    }, {
      key: "mergeObjectAsync",
      value: function () {
        var _mergeObjectAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(status, pairs) {
          var syncPairs, _iterator8, _step8, pair;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                syncPairs = [];
                _iterator8 = _createForOfIteratorHelper(pairs);
                _context.prev = 2;
                _iterator8.s();
              case 4:
                if ((_step8 = _iterator8.n()).done) {
                  _context.next = 17;
                  break;
                }
                pair = _step8.value;
                _context.t0 = syncPairs;
                _context.next = 9;
                return pair.key;
              case 9:
                _context.t1 = _context.sent;
                _context.next = 12;
                return pair.value;
              case 12:
                _context.t2 = _context.sent;
                _context.t3 = {
                  key: _context.t1,
                  value: _context.t2
                };
                _context.t0.push.call(_context.t0, _context.t3);
              case 15:
                _context.next = 4;
                break;
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t4 = _context["catch"](2);
                _iterator8.e(_context.t4);
              case 22:
                _context.prev = 22;
                _iterator8.f();
                return _context.finish(22);
              case 25:
                return _context.abrupt("return", ParseStatus.mergeObjectSync(status, syncPairs));
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 19, 22, 25]]);
        }));
        function mergeObjectAsync(_x2, _x3) {
          return _mergeObjectAsync.apply(this, arguments);
        }
        return mergeObjectAsync;
      }()
    }, {
      key: "mergeObjectSync",
      value: function mergeObjectSync(status, pairs) {
        var finalObject = {};
        var _iterator9 = _createForOfIteratorHelper(pairs),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var pair = _step9.value;
            var key = pair.key,
              value = pair.value;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (typeof value.value !== "undefined" || pair.alwaysSet) {
              finalObject[key.value] = value.value;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return {
          status: status.value,
          value: finalObject
        };
      }
    }]);
    return ParseStatus;
  }();
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = function DIRTY(value) {
    return {
      status: "dirty",
      value: value
    };
  };
  var OK = function OK(value) {
    return {
      status: "valid",
      value: value
    };
  };
  var isAborted = function isAborted(x) {
    return x.status === "aborted";
  };
  var isDirty = function isDirty(x) {
    return x.status === "dirty";
  };
  var isValid = function isValid(x) {
    return x.status === "valid";
  };
  var isAsync = function isAsync(x) {
    return typeof Promise !== "undefined" && x instanceof Promise;
  };
  var errorUtil;
  (function (errorUtil) {
    errorUtil.errToObj = function (message) {
      return typeof message === "string" ? {
        message: message
      } : message || {};
    };
    errorUtil.toString = function (message) {
      return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
    };
  })(errorUtil || (errorUtil = {}));
  var ParseInputLazyPath = /*#__PURE__*/function () {
    function ParseInputLazyPath(parent, value, path, key) {
      _classCallCheck(this, ParseInputLazyPath);
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    _createClass(ParseInputLazyPath, [{
      key: "path",
      get: function get() {
        return this._path.concat(this._key);
      }
    }]);
    return ParseInputLazyPath;
  }();
  var handleResult = function handleResult(ctx, result) {
    if (isValid(result)) {
      return {
        success: true,
        data: result.value
      };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      var error = new ZodError(ctx.common.issues);
      return {
        success: false,
        error: error
      };
    }
  };
  function processCreateParams(params) {
    if (!params) return {};
    var errorMap = params.errorMap,
      invalid_type_error = params.invalid_type_error,
      required_error = params.required_error,
      description = params.description;
    if (errorMap && (invalid_type_error || required_error)) {
      throw new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
    }
    if (errorMap) return {
      errorMap: errorMap,
      description: description
    };
    var customMap = function customMap(iss, ctx) {
      if (iss.code !== "invalid_type") return {
        message: ctx.defaultError
      };
      if (typeof ctx.data === "undefined") {
        return {
          message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError
        };
      }
      return {
        message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError
      };
    };
    return {
      errorMap: customMap,
      description: description
    };
  }
  var ZodType = /*#__PURE__*/function () {
    function ZodType(def) {
      _classCallCheck(this, ZodType);
      /** Alias of safeParseAsync */
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this["default"] = this["default"].bind(this);
      this["catch"] = this["catch"].bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
    }
    _createClass(ZodType, [{
      key: "description",
      get: function get() {
        return this._def.description;
      }
    }, {
      key: "_getType",
      value: function _getType(input) {
        return getParsedType(input.data);
      }
    }, {
      key: "_getOrReturnCtx",
      value: function _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
    }, {
      key: "_processInputParams",
      value: function _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
    }, {
      key: "_parseSync",
      value: function _parseSync(input) {
        var result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
    }, {
      key: "_parseAsync",
      value: function _parseAsync(input) {
        var result = this._parse(input);
        return Promise.resolve(result);
      }
    }, {
      key: "parse",
      value: function parse(data, params) {
        var result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
      }
    }, {
      key: "safeParse",
      value: function safeParse(data, params) {
        var _a;
        var ctx = {
          common: {
            issues: [],
            async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: data,
          parsedType: getParsedType(data)
        };
        var result = this._parseSync({
          data: data,
          path: ctx.path,
          parent: ctx
        });
        return handleResult(ctx, result);
      }
    }, {
      key: "parseAsync",
      value: function () {
        var _parseAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, params) {
          var result;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.safeParseAsync(data, params);
              case 2:
                result = _context2.sent;
                if (!result.success) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return", result.data);
              case 5:
                throw result.error;
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function parseAsync(_x4, _x5) {
          return _parseAsync2.apply(this, arguments);
        }
        return parseAsync;
      }()
    }, {
      key: "safeParseAsync",
      value: function () {
        var _safeParseAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, params) {
          var ctx, maybeAsyncResult, result;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                ctx = {
                  common: {
                    issues: [],
                    contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                    async: true
                  },
                  path: (params === null || params === void 0 ? void 0 : params.path) || [],
                  schemaErrorMap: this._def.errorMap,
                  parent: null,
                  data: data,
                  parsedType: getParsedType(data)
                };
                maybeAsyncResult = this._parse({
                  data: data,
                  path: ctx.path,
                  parent: ctx
                });
                _context3.next = 4;
                return isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult);
              case 4:
                result = _context3.sent;
                return _context3.abrupt("return", handleResult(ctx, result));
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function safeParseAsync(_x6, _x7) {
          return _safeParseAsync.apply(this, arguments);
        }
        return safeParseAsync;
      }()
    }, {
      key: "refine",
      value: function refine(check, message) {
        var getIssueProperties = function getIssueProperties(val) {
          if (typeof message === "string" || typeof message === "undefined") {
            return {
              message: message
            };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement(function (val, ctx) {
          var result = check(val);
          var setError = function setError() {
            return ctx.addIssue(_objectSpread2({
              code: ZodIssueCode.custom
            }, getIssueProperties(val)));
          };
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then(function (data) {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
    }, {
      key: "refinement",
      value: function refinement(check, refinementData) {
        return this._refinement(function (val, ctx) {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
    }, {
      key: "_refinement",
      value: function _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: {
            type: "refinement",
            refinement: refinement
          }
        });
      }
    }, {
      key: "superRefine",
      value: function superRefine(refinement) {
        return this._refinement(refinement);
      }
    }, {
      key: "optional",
      value: function optional() {
        return ZodOptional.create(this, this._def);
      }
    }, {
      key: "nullable",
      value: function nullable() {
        return ZodNullable.create(this, this._def);
      }
    }, {
      key: "nullish",
      value: function nullish() {
        return this.nullable().optional();
      }
    }, {
      key: "array",
      value: function array() {
        return ZodArray.create(this, this._def);
      }
    }, {
      key: "promise",
      value: function promise() {
        return ZodPromise.create(this, this._def);
      }
    }, {
      key: "or",
      value: function or(option) {
        return ZodUnion.create([this, option], this._def);
      }
    }, {
      key: "and",
      value: function and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
    }, {
      key: "transform",
      value: function transform(_transform) {
        return new ZodEffects(_objectSpread2(_objectSpread2({}, processCreateParams(this._def)), {}, {
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: {
            type: "transform",
            transform: _transform
          }
        }));
      }
    }, {
      key: "default",
      value: function _default(def) {
        var defaultValueFunc = typeof def === "function" ? def : function () {
          return def;
        };
        return new ZodDefault(_objectSpread2(_objectSpread2({}, processCreateParams(this._def)), {}, {
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        }));
      }
    }, {
      key: "brand",
      value: function brand() {
        return new ZodBranded(_objectSpread2({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this
        }, processCreateParams(this._def)));
      }
    }, {
      key: "catch",
      value: function _catch(def) {
        var catchValueFunc = typeof def === "function" ? def : function () {
          return def;
        };
        return new ZodCatch(_objectSpread2(_objectSpread2({}, processCreateParams(this._def)), {}, {
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        }));
      }
    }, {
      key: "describe",
      value: function describe(description) {
        var This = this.constructor;
        return new This(_objectSpread2(_objectSpread2({}, this._def), {}, {
          description: description
        }));
      }
    }, {
      key: "pipe",
      value: function pipe(target) {
        return ZodPipeline.create(this, target);
      }
    }, {
      key: "isOptional",
      value: function isOptional() {
        return this.safeParse(undefined).success;
      }
    }, {
      key: "isNullable",
      value: function isNullable() {
        return this.safeParse(null).success;
      }
    }]);
    return ZodType;
  }();
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[a-z][a-z0-9]*$/;
  var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  // from https://stackoverflow.com/a/46181/1550155
  // old version: too slow, didn't support unicode
  // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  //old email regex
  // const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
  // eslint-disable-next-line
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/;
  // interface IsDateStringOptions extends StringDateOptions {
  /**
   * Match any configuration
   */
  // any?: boolean;
  // }
  // Adapted from https://stackoverflow.com/a/3143231
  var datetimeRegex = function datetimeRegex(args) {
    if (args.precision) {
      if (args.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}(([+-]\\d{2}(:?\\d{2})?)|Z)$"));
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}Z$"));
      }
    } else if (args.precision === 0) {
      if (args.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$");
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$");
      }
    } else {
      if (args.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$");
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
      }
    }
  };
  var ZodString = /*#__PURE__*/function (_ZodType) {
    _inherits(ZodString, _ZodType);
    var _super2 = _createSuper(ZodString);
    function ZodString() {
      var _this2;
      _classCallCheck(this, ZodString);
      _this2 = _super2.apply(this, arguments);
      _this2._regex = function (regex, validation, message) {
        return _this2.refinement(function (data) {
          return regex.test(data);
        }, _objectSpread2({
          validation: validation,
          code: ZodIssueCode.invalid_string
        }, errorUtil.errToObj(message)));
      };
      /**
       * @deprecated Use z.string().min(1) instead.
       * @see {@link ZodString.min}
       */
      _this2.nonempty = function (message) {
        return _this2.min(1, errorUtil.errToObj(message));
      };
      _this2.trim = function () {
        return new ZodString(_objectSpread2(_objectSpread2({}, _this2._def), {}, {
          checks: [].concat(_toConsumableArray(_this2._def.checks), [{
            kind: "trim"
          }])
        }));
      };
      return _this2;
    }
    _createClass(ZodString, [{
      key: "_parse",
      value: function _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          var _ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(_ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: _ctx2.parsedType
          }
          //
          );

          return INVALID;
        }
        var status = new ParseStatus();
        var ctx = undefined;
        var _iterator10 = _createForOfIteratorHelper(this._def.checks),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var check = _step10.value;
            if (check.kind === "min") {
              if (input.data.length < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.length > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "length") {
              var tooBig = input.data.length > check.value;
              var tooSmall = input.data.length < check.value;
              if (tooBig || tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                if (tooBig) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                } else if (tooSmall) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                }
                status.dirty();
              }
            } else if (check.kind === "email") {
              if (!emailRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "email",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "uuid") {
              if (!uuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "uuid",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid") {
              if (!cuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "cuid",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid2") {
              if (!cuid2Regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "cuid2",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "url") {
              try {
                new URL(input.data);
              } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "url",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "regex") {
              check.regex.lastIndex = 0;
              var testResult = check.regex.test(input.data);
              if (!testResult) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  validation: "regex",
                  code: ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "trim") {
              input.data = input.data.trim();
            } else if (check.kind === "startsWith") {
              if (!input.data.startsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: {
                    startsWith: check.value
                  },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "endsWith") {
              if (!input.data.endsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: {
                    endsWith: check.value
                  },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "datetime") {
              var regex = datetimeRegex(check);
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_string,
                  validation: "datetime",
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return {
          status: status.value,
          value: input.data
        };
      }
    }, {
      key: "_addCheck",
      value: function _addCheck(check) {
        return new ZodString(_objectSpread2(_objectSpread2({}, this._def), {}, {
          checks: [].concat(_toConsumableArray(this._def.checks), [check])
        }));
      }
    }, {
      key: "email",
      value: function email(message) {
        return this._addCheck(_objectSpread2({
          kind: "email"
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "url",
      value: function url(message) {
        return this._addCheck(_objectSpread2({
          kind: "url"
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "uuid",
      value: function uuid(message) {
        return this._addCheck(_objectSpread2({
          kind: "uuid"
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "cuid",
      value: function cuid(message) {
        return this._addCheck(_objectSpread2({
          kind: "cuid"
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "cuid2",
      value: function cuid2(message) {
        return this._addCheck(_objectSpread2({
          kind: "cuid2"
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "datetime",
      value: function datetime(options) {
        var _a;
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            message: options
          });
        }
        return this._addCheck(_objectSpread2({
          kind: "datetime",
          precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
          offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false
        }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
      }
    }, {
      key: "regex",
      value: function regex(_regex, message) {
        return this._addCheck(_objectSpread2({
          kind: "regex",
          regex: _regex
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "startsWith",
      value: function startsWith(value, message) {
        return this._addCheck(_objectSpread2({
          kind: "startsWith",
          value: value
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "endsWith",
      value: function endsWith(value, message) {
        return this._addCheck(_objectSpread2({
          kind: "endsWith",
          value: value
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "min",
      value: function min(minLength, message) {
        return this._addCheck(_objectSpread2({
          kind: "min",
          value: minLength
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "max",
      value: function max(maxLength, message) {
        return this._addCheck(_objectSpread2({
          kind: "max",
          value: maxLength
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "length",
      value: function length(len, message) {
        return this._addCheck(_objectSpread2({
          kind: "length",
          value: len
        }, errorUtil.errToObj(message)));
      }
    }, {
      key: "isDatetime",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "datetime";
        });
      }
    }, {
      key: "isEmail",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "email";
        });
      }
    }, {
      key: "isURL",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "url";
        });
      }
    }, {
      key: "isUUID",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "uuid";
        });
      }
    }, {
      key: "isCUID",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "cuid";
        });
      }
    }, {
      key: "isCUID2",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "cuid2";
        });
      }
    }, {
      key: "minLength",
      get: function get() {
        var min = null;
        var _iterator11 = _createForOfIteratorHelper(this._def.checks),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var ch = _step11.value;
            if (ch.kind === "min") {
              if (min === null || ch.value > min) min = ch.value;
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return min;
      }
    }, {
      key: "maxLength",
      get: function get() {
        var max = null;
        var _iterator12 = _createForOfIteratorHelper(this._def.checks),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var ch = _step12.value;
            if (ch.kind === "max") {
              if (max === null || ch.value < max) max = ch.value;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        return max;
      }
    }]);
    return ZodString;
  }(ZodType);
  ZodString.create = function (params) {
    var _a;
    return new ZodString(_objectSpread2({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
    }, processCreateParams(params)));
  };
  // https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
  function floatSafeRemainder(val, step) {
    var valDecCount = (val.toString().split(".")[1] || "").length;
    var stepDecCount = (step.toString().split(".")[1] || "").length;
    var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    var valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    var stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  var ZodNumber = /*#__PURE__*/function (_ZodType2) {
    _inherits(ZodNumber, _ZodType2);
    var _super3 = _createSuper(ZodNumber);
    function ZodNumber() {
      var _this3;
      _classCallCheck(this, ZodNumber);
      _this3 = _super3.apply(this, arguments);
      _this3.min = _this3.gte;
      _this3.max = _this3.lte;
      _this3.step = _this3.multipleOf;
      return _this3;
    }
    _createClass(ZodNumber, [{
      key: "_parse",
      value: function _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          var _ctx3 = this._getOrReturnCtx(input);
          addIssueToContext(_ctx3, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: _ctx3.parsedType
          });
          return INVALID;
        }
        var ctx = undefined;
        var status = new ParseStatus();
        var _iterator13 = _createForOfIteratorHelper(this._def.checks),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var check = _step13.value;
            if (check.kind === "int") {
              if (!util.isInteger(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "min") {
              var tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              var tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (floatSafeRemainder(input.data, check.value) !== 0) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "finite") {
              if (!Number.isFinite(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.not_finite,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
        return {
          status: status.value,
          value: input.data
        };
      }
    }, {
      key: "gte",
      value: function gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
    }, {
      key: "gt",
      value: function gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
    }, {
      key: "lte",
      value: function lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
    }, {
      key: "lt",
      value: function lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
    }, {
      key: "setLimit",
      value: function setLimit(kind, value, inclusive, message) {
        return new ZodNumber(_objectSpread2(_objectSpread2({}, this._def), {}, {
          checks: [].concat(_toConsumableArray(this._def.checks), [{
            kind: kind,
            value: value,
            inclusive: inclusive,
            message: errorUtil.toString(message)
          }])
        }));
      }
    }, {
      key: "_addCheck",
      value: function _addCheck(check) {
        return new ZodNumber(_objectSpread2(_objectSpread2({}, this._def), {}, {
          checks: [].concat(_toConsumableArray(this._def.checks), [check])
        }));
      }
    }, {
      key: "int",
      value: function int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "positive",
      value: function positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "negative",
      value: function negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "nonpositive",
      value: function nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "nonnegative",
      value: function nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "multipleOf",
      value: function multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value: value,
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "finite",
      value: function finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "minValue",
      get: function get() {
        var min = null;
        var _iterator14 = _createForOfIteratorHelper(this._def.checks),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var ch = _step14.value;
            if (ch.kind === "min") {
              if (min === null || ch.value > min) min = ch.value;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        return min;
      }
    }, {
      key: "maxValue",
      get: function get() {
        var max = null;
        var _iterator15 = _createForOfIteratorHelper(this._def.checks),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var ch = _step15.value;
            if (ch.kind === "max") {
              if (max === null || ch.value < max) max = ch.value;
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        return max;
      }
    }, {
      key: "isInt",
      get: function get() {
        return !!this._def.checks.find(function (ch) {
          return ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value);
        });
      }
    }, {
      key: "isFinite",
      get: function get() {
        var max = null,
          min = null;
        var _iterator16 = _createForOfIteratorHelper(this._def.checks),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var ch = _step16.value;
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
              return true;
            } else if (ch.kind === "min") {
              if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
              if (max === null || ch.value < max) max = ch.value;
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    }]);
    return ZodNumber;
  }(ZodType);
  ZodNumber.create = function (params) {
    return new ZodNumber(_objectSpread2({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
    }, processCreateParams(params)));
  };
  var ZodBigInt = /*#__PURE__*/function (_ZodType3) {
    _inherits(ZodBigInt, _ZodType3);
    var _super4 = _createSuper(ZodBigInt);
    function ZodBigInt() {
      _classCallCheck(this, ZodBigInt);
      return _super4.apply(this, arguments);
    }
    _createClass(ZodBigInt, [{
      key: "_parse",
      value: function _parse(input) {
        if (this._def.coerce) {
          input.data = BigInt(input.data);
        }
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodBigInt;
  }(ZodType);
  ZodBigInt.create = function (params) {
    var _a;
    return new ZodBigInt(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
    }, processCreateParams(params)));
  };
  var ZodBoolean = /*#__PURE__*/function (_ZodType4) {
    _inherits(ZodBoolean, _ZodType4);
    var _super5 = _createSuper(ZodBoolean);
    function ZodBoolean() {
      _classCallCheck(this, ZodBoolean);
      return _super5.apply(this, arguments);
    }
    _createClass(ZodBoolean, [{
      key: "_parse",
      value: function _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType["boolean"]) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType["boolean"],
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodBoolean;
  }(ZodType);
  ZodBoolean.create = function (params) {
    return new ZodBoolean(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
    }, processCreateParams(params)));
  };
  var ZodDate = /*#__PURE__*/function (_ZodType5) {
    _inherits(ZodDate, _ZodType5);
    var _super6 = _createSuper(ZodDate);
    function ZodDate() {
      _classCallCheck(this, ZodDate);
      return _super6.apply(this, arguments);
    }
    _createClass(ZodDate, [{
      key: "_parse",
      value: function _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          var _ctx4 = this._getOrReturnCtx(input);
          addIssueToContext(_ctx4, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: _ctx4.parsedType
          });
          return INVALID;
        }
        if (isNaN(input.data.getTime())) {
          var _ctx5 = this._getOrReturnCtx(input);
          addIssueToContext(_ctx5, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        var status = new ParseStatus();
        var ctx = undefined;
        var _iterator17 = _createForOfIteratorHelper(this._def.checks),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var check = _step17.value;
            if (check.kind === "min") {
              if (input.data.getTime() < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  minimum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.getTime() > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  maximum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else {
              util.assertNever(check);
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
    }, {
      key: "_addCheck",
      value: function _addCheck(check) {
        return new ZodDate(_objectSpread2(_objectSpread2({}, this._def), {}, {
          checks: [].concat(_toConsumableArray(this._def.checks), [check])
        }));
      }
    }, {
      key: "min",
      value: function min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "max",
      value: function max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
    }, {
      key: "minDate",
      get: function get() {
        var min = null;
        var _iterator18 = _createForOfIteratorHelper(this._def.checks),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var ch = _step18.value;
            if (ch.kind === "min") {
              if (min === null || ch.value > min) min = ch.value;
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
        return min != null ? new Date(min) : null;
      }
    }, {
      key: "maxDate",
      get: function get() {
        var max = null;
        var _iterator19 = _createForOfIteratorHelper(this._def.checks),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var ch = _step19.value;
            if (ch.kind === "max") {
              if (max === null || ch.value < max) max = ch.value;
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        return max != null ? new Date(max) : null;
      }
    }]);
    return ZodDate;
  }(ZodType);
  ZodDate.create = function (params) {
    return new ZodDate(_objectSpread2({
      checks: [],
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      typeName: ZodFirstPartyTypeKind.ZodDate
    }, processCreateParams(params)));
  };
  var ZodSymbol = /*#__PURE__*/function (_ZodType6) {
    _inherits(ZodSymbol, _ZodType6);
    var _super7 = _createSuper(ZodSymbol);
    function ZodSymbol() {
      _classCallCheck(this, ZodSymbol);
      return _super7.apply(this, arguments);
    }
    _createClass(ZodSymbol, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodSymbol;
  }(ZodType);
  ZodSymbol.create = function (params) {
    return new ZodSymbol(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodSymbol
    }, processCreateParams(params)));
  };
  var ZodUndefined = /*#__PURE__*/function (_ZodType7) {
    _inherits(ZodUndefined, _ZodType7);
    var _super8 = _createSuper(ZodUndefined);
    function ZodUndefined() {
      _classCallCheck(this, ZodUndefined);
      return _super8.apply(this, arguments);
    }
    _createClass(ZodUndefined, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodUndefined;
  }(ZodType);
  ZodUndefined.create = function (params) {
    return new ZodUndefined(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodUndefined
    }, processCreateParams(params)));
  };
  var ZodNull = /*#__PURE__*/function (_ZodType8) {
    _inherits(ZodNull, _ZodType8);
    var _super9 = _createSuper(ZodNull);
    function ZodNull() {
      _classCallCheck(this, ZodNull);
      return _super9.apply(this, arguments);
    }
    _createClass(ZodNull, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType["null"]) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType["null"],
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodNull;
  }(ZodType);
  ZodNull.create = function (params) {
    return new ZodNull(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodNull
    }, processCreateParams(params)));
  };
  var ZodAny = /*#__PURE__*/function (_ZodType9) {
    _inherits(ZodAny, _ZodType9);
    var _super10 = _createSuper(ZodAny);
    function ZodAny() {
      var _this4;
      _classCallCheck(this, ZodAny);
      _this4 = _super10.apply(this, arguments);
      // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
      _this4._any = true;
      return _this4;
    }
    _createClass(ZodAny, [{
      key: "_parse",
      value: function _parse(input) {
        return OK(input.data);
      }
    }]);
    return ZodAny;
  }(ZodType);
  ZodAny.create = function (params) {
    return new ZodAny(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodAny
    }, processCreateParams(params)));
  };
  var ZodUnknown = /*#__PURE__*/function (_ZodType10) {
    _inherits(ZodUnknown, _ZodType10);
    var _super11 = _createSuper(ZodUnknown);
    function ZodUnknown() {
      var _this5;
      _classCallCheck(this, ZodUnknown);
      _this5 = _super11.apply(this, arguments);
      // required
      _this5._unknown = true;
      return _this5;
    }
    _createClass(ZodUnknown, [{
      key: "_parse",
      value: function _parse(input) {
        return OK(input.data);
      }
    }]);
    return ZodUnknown;
  }(ZodType);
  ZodUnknown.create = function (params) {
    return new ZodUnknown(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodUnknown
    }, processCreateParams(params)));
  };
  var ZodNever = /*#__PURE__*/function (_ZodType11) {
    _inherits(ZodNever, _ZodType11);
    var _super12 = _createSuper(ZodNever);
    function ZodNever() {
      _classCallCheck(this, ZodNever);
      return _super12.apply(this, arguments);
    }
    _createClass(ZodNever, [{
      key: "_parse",
      value: function _parse(input) {
        var ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    }]);
    return ZodNever;
  }(ZodType);
  ZodNever.create = function (params) {
    return new ZodNever(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodNever
    }, processCreateParams(params)));
  };
  var ZodVoid = /*#__PURE__*/function (_ZodType12) {
    _inherits(ZodVoid, _ZodType12);
    var _super13 = _createSuper(ZodVoid);
    function ZodVoid() {
      _classCallCheck(this, ZodVoid);
      return _super13.apply(this, arguments);
    }
    _createClass(ZodVoid, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType["void"],
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }]);
    return ZodVoid;
  }(ZodType);
  ZodVoid.create = function (params) {
    return new ZodVoid(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodVoid
    }, processCreateParams(params)));
  };
  var ZodArray = /*#__PURE__*/function (_ZodType13) {
    _inherits(ZodArray, _ZodType13);
    var _super14 = _createSuper(ZodArray);
    function ZodArray() {
      _classCallCheck(this, ZodArray);
      return _super14.apply(this, arguments);
    }
    _createClass(ZodArray, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa = this._processInputParams(input),
          ctx = _this$_processInputPa.ctx,
          status = _this$_processInputPa.status;
        var def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          var tooBig = ctx.data.length > def.exactLength.value;
          var tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : undefined,
              maximum: tooBig ? def.exactLength.value : undefined,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all(_toConsumableArray(ctx.data).map(function (item, i) {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then(function (result) {
            return ParseStatus.mergeArray(status, result);
          });
        }
        var result = _toConsumableArray(ctx.data).map(function (item, i) {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
    }, {
      key: "element",
      get: function get() {
        return this._def.type;
      }
    }, {
      key: "min",
      value: function min(minLength, message) {
        return new ZodArray(_objectSpread2(_objectSpread2({}, this._def), {}, {
          minLength: {
            value: minLength,
            message: errorUtil.toString(message)
          }
        }));
      }
    }, {
      key: "max",
      value: function max(maxLength, message) {
        return new ZodArray(_objectSpread2(_objectSpread2({}, this._def), {}, {
          maxLength: {
            value: maxLength,
            message: errorUtil.toString(message)
          }
        }));
      }
    }, {
      key: "length",
      value: function length(len, message) {
        return new ZodArray(_objectSpread2(_objectSpread2({}, this._def), {}, {
          exactLength: {
            value: len,
            message: errorUtil.toString(message)
          }
        }));
      }
    }, {
      key: "nonempty",
      value: function nonempty(message) {
        return this.min(1, message);
      }
    }]);
    return ZodArray;
  }(ZodType);
  ZodArray.create = function (schema, params) {
    return new ZodArray(_objectSpread2({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray
    }, processCreateParams(params)));
  };
  /////////////////////////////////////////
  /////////////////////////////////////////
  //////////                     //////////
  //////////      ZodObject      //////////
  //////////                     //////////
  /////////////////////////////////////////
  /////////////////////////////////////////
  var objectUtil;
  (function (objectUtil) {
    objectUtil.mergeShapes = function (first, second) {
      return _objectSpread2(_objectSpread2({}, first), second);
    };
  })(objectUtil || (objectUtil = {}));
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      var newShape = {};
      for (var key in schema.shape) {
        var fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject(_objectSpread2(_objectSpread2({}, schema._def), {}, {
        shape: function shape() {
          return newShape;
        }
      }));
    } else if (schema instanceof ZodArray) {
      return ZodArray.create(deepPartialify(schema.element));
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map(function (item) {
        return deepPartialify(item);
      }));
    } else {
      return schema;
    }
  }
  var ZodObject = /*#__PURE__*/function (_ZodType14) {
    _inherits(ZodObject, _ZodType14);
    var _super15 = _createSuper(ZodObject);
    function ZodObject() {
      var _this6;
      _classCallCheck(this, ZodObject);
      _this6 = _super15.apply(this, arguments);
      _this6._cached = null;
      /**
       * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
       * If you want to pass through unknown properties, use `.passthrough()` instead.
       */
      _this6.nonstrict = _this6.passthrough;
      /**
       * @deprecated Use `.extend` instead
       *  */
      _this6.augment = _this6.extend;
      return _this6;
    }
    _createClass(ZodObject, [{
      key: "_getCached",
      value: function _getCached() {
        if (this._cached !== null) return this._cached;
        var shape = this._def.shape();
        var keys = util.objectKeys(shape);
        return this._cached = {
          shape: shape,
          keys: keys
        };
      }
    }, {
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          var _ctx6 = this._getOrReturnCtx(input);
          addIssueToContext(_ctx6, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: _ctx6.parsedType
          });
          return INVALID;
        }
        var _this$_processInputPa2 = this._processInputParams(input),
          status = _this$_processInputPa2.status,
          ctx = _this$_processInputPa2.ctx;
        var _this$_getCached = this._getCached(),
          shape = _this$_getCached.shape,
          shapeKeys = _this$_getCached.keys;
        var extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (var key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        var pairs = [];
        var _iterator20 = _createForOfIteratorHelper(shapeKeys),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _key4 = _step20.value;
            var keyValidator = shape[_key4];
            var _value = ctx.data[_key4];
            pairs.push({
              key: {
                status: "valid",
                value: _key4
              },
              value: keyValidator._parse(new ParseInputLazyPath(ctx, _value, ctx.path, _key4)),
              alwaysSet: _key4 in ctx.data
            });
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
        if (this._def.catchall instanceof ZodNever) {
          var unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            var _iterator21 = _createForOfIteratorHelper(extraKeys),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _key = _step21.value;
                pairs.push({
                  key: {
                    status: "valid",
                    value: _key
                  },
                  value: {
                    status: "valid",
                    value: ctx.data[_key]
                  }
                });
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") ;else {
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
          }
        } else {
          // run catchall validation
          var catchall = this._def.catchall;
          var _iterator22 = _createForOfIteratorHelper(extraKeys),
            _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _key2 = _step22.value;
              var value = ctx.data[_key2];
              pairs.push({
                key: {
                  status: "valid",
                  value: _key2
                },
                value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, _key2) //, ctx.child(key), value, getParsedType(value)
                ),

                alwaysSet: _key2 in ctx.data
              });
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var syncPairs, _iterator23, _step23, pair, _key3;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  syncPairs = [];
                  _iterator23 = _createForOfIteratorHelper(pairs);
                  _context4.prev = 2;
                  _iterator23.s();
                case 4:
                  if ((_step23 = _iterator23.n()).done) {
                    _context4.next = 19;
                    break;
                  }
                  pair = _step23.value;
                  _context4.next = 8;
                  return pair.key;
                case 8:
                  _key3 = _context4.sent;
                  _context4.t0 = syncPairs;
                  _context4.t1 = _key3;
                  _context4.next = 13;
                  return pair.value;
                case 13:
                  _context4.t2 = _context4.sent;
                  _context4.t3 = pair.alwaysSet;
                  _context4.t4 = {
                    key: _context4.t1,
                    value: _context4.t2,
                    alwaysSet: _context4.t3
                  };
                  _context4.t0.push.call(_context4.t0, _context4.t4);
                case 17:
                  _context4.next = 4;
                  break;
                case 19:
                  _context4.next = 24;
                  break;
                case 21:
                  _context4.prev = 21;
                  _context4.t5 = _context4["catch"](2);
                  _iterator23.e(_context4.t5);
                case 24:
                  _context4.prev = 24;
                  _iterator23.f();
                  return _context4.finish(24);
                case 27:
                  return _context4.abrupt("return", syncPairs);
                case 28:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[2, 21, 24, 27]]);
          }))).then(function (syncPairs) {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
    }, {
      key: "shape",
      get: function get() {
        return this._def.shape();
      }
    }, {
      key: "strict",
      value: function strict(message) {
        var _this7 = this;
        errorUtil.errToObj;
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          unknownKeys: "strict"
        }, message !== undefined ? {
          errorMap: function errorMap(issue, ctx) {
            var _a, _b, _c, _d;
            var defaultError = (_c = (_b = (_a = _this7._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
            if (issue.code === "unrecognized_keys") return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
            return {
              message: defaultError
            };
          }
        } : {}));
      }
    }, {
      key: "strip",
      value: function strip() {
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          unknownKeys: "strip"
        }));
      }
    }, {
      key: "passthrough",
      value: function passthrough() {
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          unknownKeys: "passthrough"
        }));
      }
      // augment = AugmentFactory<ZodObjectDef<T, UnknownKeys, Catchall>>(this._def);
      // extend = AugmentFactory<ZodObjectDef<T, UnknownKeys, Catchall>>(this._def);
    }, {
      key: "extend",
      value: function extend(augmentation) {
        var _this8 = this;
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return _objectSpread2(_objectSpread2({}, _this8._def.shape()), augmentation);
          }
        }));
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      // merge<Incoming extends AnyZodObject>(merging: Incoming) {
      //   return this.extend(merging.shape as Incoming["shape"]);
      // }
    }, {
      key: "merge",
      value: function merge(merging) {
        var _this9 = this;
        // const mergedShape = objectUtil.mergeShapes(
        //   this._def.shape(),
        //   merging._def.shape()
        // );
        var merged = new ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: function shape() {
            return objectUtil.mergeShapes(_this9._def.shape(), merging._def.shape());
          },
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
    }, {
      key: "setKey",
      value: function setKey(key, schema) {
        return this.augment(_defineProperty({}, key, schema));
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
    }, {
      key: "catchall",
      value: function catchall(index) {
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          catchall: index
        }));
      }
    }, {
      key: "pick",
      value: function pick(mask) {
        var _this10 = this;
        var _shape = {};
        util.objectKeys(mask).forEach(function (key) {
          if (mask[key] && _this10.shape[key]) {
            _shape[key] = _this10.shape[key];
          }
        });
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return _shape;
          }
        }));
      }
    }, {
      key: "omit",
      value: function omit(mask) {
        var _this11 = this;
        var _shape2 = {};
        util.objectKeys(this.shape).forEach(function (key) {
          if (!mask[key]) {
            _shape2[key] = _this11.shape[key];
          }
        });
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return _shape2;
          }
        }));
      }
    }, {
      key: "deepPartial",
      value: function deepPartial() {
        return deepPartialify(this);
      }
    }, {
      key: "partial",
      value: function partial(mask) {
        var _this12 = this;
        var newShape = {};
        util.objectKeys(this.shape).forEach(function (key) {
          var fieldSchema = _this12.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        });
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return newShape;
          }
        }));
      }
    }, {
      key: "required",
      value: function required(mask) {
        var _this13 = this;
        var newShape = {};
        util.objectKeys(this.shape).forEach(function (key) {
          if (mask && !mask[key]) {
            newShape[key] = _this13.shape[key];
          } else {
            var fieldSchema = _this13.shape[key];
            var newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        });
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return newShape;
          }
        }));
      }
    }, {
      key: "keyof",
      value: function keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    }]);
    return ZodObject;
  }(ZodType);
  ZodObject.create = function (_shape3, params) {
    return new ZodObject(_objectSpread2({
      shape: function shape() {
        return _shape3;
      },
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  ZodObject.strictCreate = function (_shape4, params) {
    return new ZodObject(_objectSpread2({
      shape: function shape() {
        return _shape4;
      },
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  ZodObject.lazycreate = function (shape, params) {
    return new ZodObject(_objectSpread2({
      shape: shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  var ZodUnion = /*#__PURE__*/function (_ZodType15) {
    _inherits(ZodUnion, _ZodType15);
    var _super16 = _createSuper(ZodUnion);
    function ZodUnion() {
      _classCallCheck(this, ZodUnion);
      return _super16.apply(this, arguments);
    }
    _createClass(ZodUnion, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa3 = this._processInputParams(input),
          ctx = _this$_processInputPa3.ctx;
        var options = this._def.options;
        function handleResults(results) {
          // return first issue-free validation if it exists
          var _iterator24 = _createForOfIteratorHelper(results),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var result = _step24.value;
              if (result.result.status === "valid") {
                return result.result;
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
          var _iterator25 = _createForOfIteratorHelper(results),
            _step25;
          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _result = _step25.value;
              if (_result.result.status === "dirty") {
                var _ctx$common$issues;
                // add issues from dirty option
                (_ctx$common$issues = ctx.common.issues).push.apply(_ctx$common$issues, _toConsumableArray(_result.ctx.common.issues));
                return _result.result;
              }
            }
            // return invalid
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
          var unionErrors = results.map(function (result) {
            return new ZodError(result.ctx.common.issues);
          });
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors: unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(option) {
              var childCtx;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    childCtx = _objectSpread2(_objectSpread2({}, ctx), {}, {
                      common: _objectSpread2(_objectSpread2({}, ctx.common), {}, {
                        issues: []
                      }),
                      parent: null
                    });
                    _context5.next = 3;
                    return option._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: childCtx
                    });
                  case 3:
                    _context5.t0 = _context5.sent;
                    _context5.t1 = childCtx;
                    return _context5.abrupt("return", {
                      result: _context5.t0,
                      ctx: _context5.t1
                    });
                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x8) {
              return _ref2.apply(this, arguments);
            };
          }())).then(handleResults);
        } else {
          var dirty = undefined;
          var issues = [];
          var _iterator26 = _createForOfIteratorHelper(options),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var option = _step26.value;
              var childCtx = _objectSpread2(_objectSpread2({}, ctx), {}, {
                common: _objectSpread2(_objectSpread2({}, ctx.common), {}, {
                  issues: []
                }),
                parent: null
              });
              var result = option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              });
              if (result.status === "valid") {
                return result;
              } else if (result.status === "dirty" && !dirty) {
                dirty = {
                  result: result,
                  ctx: childCtx
                };
              }
              if (childCtx.common.issues.length) {
                issues.push(childCtx.common.issues);
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          if (dirty) {
            var _ctx$common$issues2;
            (_ctx$common$issues2 = ctx.common.issues).push.apply(_ctx$common$issues2, _toConsumableArray(dirty.ctx.common.issues));
            return dirty.result;
          }
          var unionErrors = issues.map(function (issues) {
            return new ZodError(issues);
          });
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors: unionErrors
          });
          return INVALID;
        }
      }
    }, {
      key: "options",
      get: function get() {
        return this._def.options;
      }
    }]);
    return ZodUnion;
  }(ZodType);
  ZodUnion.create = function (types, params) {
    return new ZodUnion(_objectSpread2({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion
    }, processCreateParams(params)));
  };
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  //////////                                 //////////
  //////////      ZodDiscriminatedUnion      //////////
  //////////                                 //////////
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  var getDiscriminator = function getDiscriminator(type) {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      // eslint-disable-next-line ban/ban
      return Object.keys(type["enum"]);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [undefined];
    } else if (type instanceof ZodNull) {
      return [null];
    } else {
      return null;
    }
  };
  var ZodDiscriminatedUnion = /*#__PURE__*/function (_ZodType16) {
    _inherits(ZodDiscriminatedUnion, _ZodType16);
    var _super17 = _createSuper(ZodDiscriminatedUnion);
    function ZodDiscriminatedUnion() {
      _classCallCheck(this, ZodDiscriminatedUnion);
      return _super17.apply(this, arguments);
    }
    _createClass(ZodDiscriminatedUnion, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa4 = this._processInputParams(input),
          ctx = _this$_processInputPa4.ctx;
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        var discriminator = this.discriminator;
        var discriminatorValue = ctx.data[discriminator];
        var option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }, {
      key: "discriminator",
      get: function get() {
        return this._def.discriminator;
      }
    }, {
      key: "options",
      get: function get() {
        return this._def.options;
      }
    }, {
      key: "optionsMap",
      get: function get() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
    }], [{
      key: "create",
      value: function create(discriminator, options, params) {
        // Get all the valid discriminator values
        var optionsMap = new Map();
        // try {
        var _iterator27 = _createForOfIteratorHelper(options),
          _step27;
        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var type = _step27.value;
            var discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
              throw new Error("A discriminator value for key `".concat(discriminator, "` could not be extracted from all schema options"));
            }
            var _iterator28 = _createForOfIteratorHelper(discriminatorValues),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var value = _step28.value;
                if (optionsMap.has(value)) {
                  throw new Error("Discriminator property ".concat(String(discriminator), " has duplicate value ").concat(String(value)));
                }
                optionsMap.set(value, type);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
        return new ZodDiscriminatedUnion(_objectSpread2({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator: discriminator,
          options: options,
          optionsMap: optionsMap
        }, processCreateParams(params)));
      }
    }]);
    return ZodDiscriminatedUnion;
  }(ZodType);
  function mergeValues(a, b) {
    var aType = getParsedType(a);
    var bType = getParsedType(b);
    if (a === b) {
      return {
        valid: true,
        data: a
      };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      var bKeys = util.objectKeys(b);
      var sharedKeys = util.objectKeys(a).filter(function (key) {
        return bKeys.indexOf(key) !== -1;
      });
      var newObj = _objectSpread2(_objectSpread2({}, a), b);
      var _iterator29 = _createForOfIteratorHelper(sharedKeys),
        _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var key = _step29.value;
          var sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return {
              valid: false
            };
          }
          newObj[key] = sharedValue.data;
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      return {
        valid: true,
        data: newObj
      };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return {
          valid: false
        };
      }
      var newArray = [];
      for (var index = 0; index < a.length; index++) {
        var itemA = a[index];
        var itemB = b[index];
        var _sharedValue = mergeValues(itemA, itemB);
        if (!_sharedValue.valid) {
          return {
            valid: false
          };
        }
        newArray.push(_sharedValue.data);
      }
      return {
        valid: true,
        data: newArray
      };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return {
        valid: true,
        data: a
      };
    } else {
      return {
        valid: false
      };
    }
  }
  var ZodIntersection = /*#__PURE__*/function (_ZodType17) {
    _inherits(ZodIntersection, _ZodType17);
    var _super18 = _createSuper(ZodIntersection);
    function ZodIntersection() {
      _classCallCheck(this, ZodIntersection);
      return _super18.apply(this, arguments);
    }
    _createClass(ZodIntersection, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa5 = this._processInputParams(input),
          status = _this$_processInputPa5.status,
          ctx = _this$_processInputPa5.ctx;
        var handleParsed = function handleParsed(parsedLeft, parsedRight) {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          var merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return {
            status: status.value,
            value: merged.data
          };
        };
        if (ctx.common.async) {
          return Promise.all([this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              left = _ref4[0],
              right = _ref4[1];
            return handleParsed(left, right);
          });
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    }]);
    return ZodIntersection;
  }(ZodType);
  ZodIntersection.create = function (left, right, params) {
    return new ZodIntersection(_objectSpread2({
      left: left,
      right: right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection
    }, processCreateParams(params)));
  };
  var ZodTuple = /*#__PURE__*/function (_ZodType18) {
    _inherits(ZodTuple, _ZodType18);
    var _super19 = _createSuper(ZodTuple);
    function ZodTuple() {
      _classCallCheck(this, ZodTuple);
      return _super19.apply(this, arguments);
    }
    _createClass(ZodTuple, [{
      key: "_parse",
      value: function _parse(input) {
        var _this14 = this;
        var _this$_processInputPa6 = this._processInputParams(input),
          status = _this$_processInputPa6.status,
          ctx = _this$_processInputPa6.ctx;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        var rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        var items = _toConsumableArray(ctx.data).map(function (item, itemIndex) {
          var schema = _this14._def.items[itemIndex] || _this14._def.rest;
          if (!schema) return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter(function (x) {
          return !!x;
        }); // filter nulls
        if (ctx.common.async) {
          return Promise.all(items).then(function (results) {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
    }, {
      key: "items",
      get: function get() {
        return this._def.items;
      }
    }, {
      key: "rest",
      value: function rest(_rest) {
        return new ZodTuple(_objectSpread2(_objectSpread2({}, this._def), {}, {
          rest: _rest
        }));
      }
    }]);
    return ZodTuple;
  }(ZodType);
  ZodTuple.create = function (schemas, params) {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple(_objectSpread2({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null
    }, processCreateParams(params)));
  };
  var ZodRecord = /*#__PURE__*/function (_ZodType19) {
    _inherits(ZodRecord, _ZodType19);
    var _super20 = _createSuper(ZodRecord);
    function ZodRecord() {
      _classCallCheck(this, ZodRecord);
      return _super20.apply(this, arguments);
    }
    _createClass(ZodRecord, [{
      key: "keySchema",
      get: function get() {
        return this._def.keyType;
      }
    }, {
      key: "valueSchema",
      get: function get() {
        return this._def.valueType;
      }
    }, {
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa7 = this._processInputParams(input),
          status = _this$_processInputPa7.status,
          ctx = _this$_processInputPa7.ctx;
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        var pairs = [];
        var keyType = this._def.keyType;
        var valueType = this._def.valueType;
        for (var key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
    }, {
      key: "element",
      get: function get() {
        return this._def.valueType;
      }
    }], [{
      key: "create",
      value: function create(first, second, third) {
        if (second instanceof ZodType) {
          return new ZodRecord(_objectSpread2({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord
          }, processCreateParams(third)));
        }
        return new ZodRecord(_objectSpread2({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord
        }, processCreateParams(second)));
      }
    }]);
    return ZodRecord;
  }(ZodType);
  var ZodMap = /*#__PURE__*/function (_ZodType20) {
    _inherits(ZodMap, _ZodType20);
    var _super21 = _createSuper(ZodMap);
    function ZodMap() {
      _classCallCheck(this, ZodMap);
      return _super21.apply(this, arguments);
    }
    _createClass(ZodMap, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa8 = this._processInputParams(input),
          status = _this$_processInputPa8.status,
          ctx = _this$_processInputPa8.ctx;
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        var keyType = this._def.keyType;
        var valueType = this._def.valueType;
        var pairs = _toConsumableArray(ctx.data.entries()).map(function (_ref5, index) {
          var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          var finalMap = new Map();
          return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _iterator30, _step30, pair, key, value;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _iterator30 = _createForOfIteratorHelper(pairs);
                  _context6.prev = 1;
                  _iterator30.s();
                case 3:
                  if ((_step30 = _iterator30.n()).done) {
                    _context6.next = 17;
                    break;
                  }
                  pair = _step30.value;
                  _context6.next = 7;
                  return pair.key;
                case 7:
                  key = _context6.sent;
                  _context6.next = 10;
                  return pair.value;
                case 10:
                  value = _context6.sent;
                  if (!(key.status === "aborted" || value.status === "aborted")) {
                    _context6.next = 13;
                    break;
                  }
                  return _context6.abrupt("return", INVALID);
                case 13:
                  if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                  }
                  finalMap.set(key.value, value.value);
                case 15:
                  _context6.next = 3;
                  break;
                case 17:
                  _context6.next = 22;
                  break;
                case 19:
                  _context6.prev = 19;
                  _context6.t0 = _context6["catch"](1);
                  _iterator30.e(_context6.t0);
                case 22:
                  _context6.prev = 22;
                  _iterator30.f();
                  return _context6.finish(22);
                case 25:
                  return _context6.abrupt("return", {
                    status: status.value,
                    value: finalMap
                  });
                case 26:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, null, [[1, 19, 22, 25]]);
          })));
        } else {
          var _finalMap = new Map();
          var _iterator31 = _createForOfIteratorHelper(pairs),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var pair = _step31.value;
              var key = pair.key;
              var value = pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              _finalMap.set(key.value, value.value);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return {
            status: status.value,
            value: _finalMap
          };
        }
      }
    }]);
    return ZodMap;
  }(ZodType);
  ZodMap.create = function (keyType, valueType, params) {
    return new ZodMap(_objectSpread2({
      valueType: valueType,
      keyType: keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap
    }, processCreateParams(params)));
  };
  var ZodSet = /*#__PURE__*/function (_ZodType21) {
    _inherits(ZodSet, _ZodType21);
    var _super22 = _createSuper(ZodSet);
    function ZodSet() {
      _classCallCheck(this, ZodSet);
      return _super22.apply(this, arguments);
    }
    _createClass(ZodSet, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa9 = this._processInputParams(input),
          status = _this$_processInputPa9.status,
          ctx = _this$_processInputPa9.ctx;
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        var def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        var valueType = this._def.valueType;
        function finalizeSet(elements) {
          var parsedSet = new Set();
          var _iterator32 = _createForOfIteratorHelper(elements),
            _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var element = _step32.value;
              if (element.status === "aborted") return INVALID;
              if (element.status === "dirty") status.dirty();
              parsedSet.add(element.value);
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
          return {
            status: status.value,
            value: parsedSet
          };
        }
        var elements = _toConsumableArray(ctx.data.values()).map(function (item, i) {
          return valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        if (ctx.common.async) {
          return Promise.all(elements).then(function (elements) {
            return finalizeSet(elements);
          });
        } else {
          return finalizeSet(elements);
        }
      }
    }, {
      key: "min",
      value: function min(minSize, message) {
        return new ZodSet(_objectSpread2(_objectSpread2({}, this._def), {}, {
          minSize: {
            value: minSize,
            message: errorUtil.toString(message)
          }
        }));
      }
    }, {
      key: "max",
      value: function max(maxSize, message) {
        return new ZodSet(_objectSpread2(_objectSpread2({}, this._def), {}, {
          maxSize: {
            value: maxSize,
            message: errorUtil.toString(message)
          }
        }));
      }
    }, {
      key: "size",
      value: function size(_size, message) {
        return this.min(_size, message).max(_size, message);
      }
    }, {
      key: "nonempty",
      value: function nonempty(message) {
        return this.min(1, message);
      }
    }]);
    return ZodSet;
  }(ZodType);
  ZodSet.create = function (valueType, params) {
    return new ZodSet(_objectSpread2({
      valueType: valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet
    }, processCreateParams(params)));
  };
  var ZodFunction = /*#__PURE__*/function (_ZodType22) {
    _inherits(ZodFunction, _ZodType22);
    var _super23 = _createSuper(ZodFunction);
    function ZodFunction() {
      var _this15;
      _classCallCheck(this, ZodFunction);
      _this15 = _super23.apply(this, arguments);
      _this15.validate = _this15.implement;
      return _this15;
    }
    _createClass(ZodFunction, [{
      key: "_parse",
      value: function _parse(input) {
        var _this16 = this;
        var _this$_processInputPa10 = this._processInputParams(input),
          ctx = _this$_processInputPa10.ctx;
        if (ctx.parsedType !== ZodParsedType["function"]) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType["function"],
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(function (x) {
              return !!x;
            }),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(function (x) {
              return !!x;
            }),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        var params = {
          errorMap: ctx.common.contextualErrorMap
        };
        var fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          return OK( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _len,
              args,
              _key5,
              error,
              parsedArgs,
              result,
              parsedReturns,
              _args7 = arguments;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  for (_len = _args7.length, args = new Array(_len), _key5 = 0; _key5 < _len; _key5++) {
                    args[_key5] = _args7[_key5];
                  }
                  error = new ZodError([]);
                  _context7.next = 4;
                  return _this16._def.args.parseAsync(args, params)["catch"](function (e) {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                  });
                case 4:
                  parsedArgs = _context7.sent;
                  _context7.next = 7;
                  return fn.apply(void 0, _toConsumableArray(parsedArgs));
                case 7:
                  result = _context7.sent;
                  _context7.next = 10;
                  return _this16._def.returns._def.type.parseAsync(result, params)["catch"](function (e) {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                  });
                case 10:
                  parsedReturns = _context7.sent;
                  return _context7.abrupt("return", parsedReturns);
                case 12:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })));
        } else {
          return OK(function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
              args[_key6] = arguments[_key6];
            }
            var parsedArgs = _this16._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            var result = fn.apply(void 0, _toConsumableArray(parsedArgs.data));
            var parsedReturns = _this16._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
    }, {
      key: "parameters",
      value: function parameters() {
        return this._def.args;
      }
    }, {
      key: "returnType",
      value: function returnType() {
        return this._def.returns;
      }
    }, {
      key: "args",
      value: function args() {
        for (var _len3 = arguments.length, items = new Array(_len3), _key7 = 0; _key7 < _len3; _key7++) {
          items[_key7] = arguments[_key7];
        }
        return new ZodFunction(_objectSpread2(_objectSpread2({}, this._def), {}, {
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        }));
      }
    }, {
      key: "returns",
      value: function returns(returnType) {
        return new ZodFunction(_objectSpread2(_objectSpread2({}, this._def), {}, {
          returns: returnType
        }));
      }
    }, {
      key: "implement",
      value: function implement(func) {
        var validatedFunc = this.parse(func);
        return validatedFunc;
      }
    }, {
      key: "strictImplement",
      value: function strictImplement(func) {
        var validatedFunc = this.parse(func);
        return validatedFunc;
      }
    }], [{
      key: "create",
      value: function create(args, returns, params) {
        return new ZodFunction(_objectSpread2({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction
        }, processCreateParams(params)));
      }
    }]);
    return ZodFunction;
  }(ZodType);
  var ZodLazy = /*#__PURE__*/function (_ZodType23) {
    _inherits(ZodLazy, _ZodType23);
    var _super24 = _createSuper(ZodLazy);
    function ZodLazy() {
      _classCallCheck(this, ZodLazy);
      return _super24.apply(this, arguments);
    }
    _createClass(ZodLazy, [{
      key: "schema",
      get: function get() {
        return this._def.getter();
      }
    }, {
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa11 = this._processInputParams(input),
          ctx = _this$_processInputPa11.ctx;
        var lazySchema = this._def.getter();
        return lazySchema._parse({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }]);
    return ZodLazy;
  }(ZodType);
  ZodLazy.create = function (getter, params) {
    return new ZodLazy(_objectSpread2({
      getter: getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy
    }, processCreateParams(params)));
  };
  var ZodLiteral = /*#__PURE__*/function (_ZodType24) {
    _inherits(ZodLiteral, _ZodType24);
    var _super25 = _createSuper(ZodLiteral);
    function ZodLiteral() {
      _classCallCheck(this, ZodLiteral);
      return _super25.apply(this, arguments);
    }
    _createClass(ZodLiteral, [{
      key: "_parse",
      value: function _parse(input) {
        if (input.data !== this._def.value) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return {
          status: "valid",
          value: input.data
        };
      }
    }, {
      key: "value",
      get: function get() {
        return this._def.value;
      }
    }]);
    return ZodLiteral;
  }(ZodType);
  ZodLiteral.create = function (value, params) {
    return new ZodLiteral(_objectSpread2({
      value: value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral
    }, processCreateParams(params)));
  };
  function createZodEnum(values, params) {
    return new ZodEnum(_objectSpread2({
      values: values,
      typeName: ZodFirstPartyTypeKind.ZodEnum
    }, processCreateParams(params)));
  }
  var ZodEnum = /*#__PURE__*/function (_ZodType25) {
    _inherits(ZodEnum, _ZodType25);
    var _super26 = _createSuper(ZodEnum);
    function ZodEnum() {
      _classCallCheck(this, ZodEnum);
      return _super26.apply(this, arguments);
    }
    _createClass(ZodEnum, [{
      key: "_parse",
      value: function _parse(input) {
        if (typeof input.data !== "string") {
          var ctx = this._getOrReturnCtx(input);
          var expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
          var _ctx7 = this._getOrReturnCtx(input);
          var _expectedValues = this._def.values;
          addIssueToContext(_ctx7, {
            received: _ctx7.data,
            code: ZodIssueCode.invalid_enum_value,
            options: _expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }, {
      key: "options",
      get: function get() {
        return this._def.values;
      }
    }, {
      key: "enum",
      get: function get() {
        var enumValues = {};
        var _iterator33 = _createForOfIteratorHelper(this._def.values),
          _step33;
        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var val = _step33.value;
            enumValues[val] = val;
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }
        return enumValues;
      }
    }, {
      key: "Values",
      get: function get() {
        var enumValues = {};
        var _iterator34 = _createForOfIteratorHelper(this._def.values),
          _step34;
        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var val = _step34.value;
            enumValues[val] = val;
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }
        return enumValues;
      }
    }, {
      key: "Enum",
      get: function get() {
        var enumValues = {};
        var _iterator35 = _createForOfIteratorHelper(this._def.values),
          _step35;
        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var val = _step35.value;
            enumValues[val] = val;
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }
        return enumValues;
      }
    }, {
      key: "extract",
      value: function extract(values) {
        return ZodEnum.create(values);
      }
    }, {
      key: "exclude",
      value: function exclude(values) {
        return ZodEnum.create(this.options.filter(function (opt) {
          return !values.includes(opt);
        }));
      }
    }]);
    return ZodEnum;
  }(ZodType);
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = /*#__PURE__*/function (_ZodType26) {
    _inherits(ZodNativeEnum, _ZodType26);
    var _super27 = _createSuper(ZodNativeEnum);
    function ZodNativeEnum() {
      _classCallCheck(this, ZodNativeEnum);
      return _super27.apply(this, arguments);
    }
    _createClass(ZodNativeEnum, [{
      key: "_parse",
      value: function _parse(input) {
        var nativeEnumValues = util.getValidEnumValues(this._def.values);
        var ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          var expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
          var _expectedValues2 = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: _expectedValues2
          });
          return INVALID;
        }
        return OK(input.data);
      }
    }, {
      key: "enum",
      get: function get() {
        return this._def.values;
      }
    }]);
    return ZodNativeEnum;
  }(ZodType);
  ZodNativeEnum.create = function (values, params) {
    return new ZodNativeEnum(_objectSpread2({
      values: values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum
    }, processCreateParams(params)));
  };
  var ZodPromise = /*#__PURE__*/function (_ZodType27) {
    _inherits(ZodPromise, _ZodType27);
    var _super28 = _createSuper(ZodPromise);
    function ZodPromise() {
      _classCallCheck(this, ZodPromise);
      return _super28.apply(this, arguments);
    }
    _createClass(ZodPromise, [{
      key: "unwrap",
      value: function unwrap() {
        return this._def.type;
      }
    }, {
      key: "_parse",
      value: function _parse(input) {
        var _this17 = this;
        var _this$_processInputPa12 = this._processInputParams(input),
          ctx = _this$_processInputPa12.ctx;
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        var promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then(function (data) {
          return _this17._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    }]);
    return ZodPromise;
  }(ZodType);
  ZodPromise.create = function (schema, params) {
    return new ZodPromise(_objectSpread2({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise
    }, processCreateParams(params)));
  };
  var ZodEffects = /*#__PURE__*/function (_ZodType28) {
    _inherits(ZodEffects, _ZodType28);
    var _super29 = _createSuper(ZodEffects);
    function ZodEffects() {
      _classCallCheck(this, ZodEffects);
      return _super29.apply(this, arguments);
    }
    _createClass(ZodEffects, [{
      key: "innerType",
      value: function innerType() {
        return this._def.schema;
      }
    }, {
      key: "sourceType",
      value: function sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
    }, {
      key: "_parse",
      value: function _parse(input) {
        var _this18 = this;
        var _this$_processInputPa13 = this._processInputParams(input),
          status = _this$_processInputPa13.status,
          ctx = _this$_processInputPa13.ctx;
        var effect = this._def.effect || null;
        if (effect.type === "preprocess") {
          var processed = effect.transform(ctx.data);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(function (processed) {
              return _this18._def.schema._parseAsync({
                data: processed,
                path: ctx.path,
                parent: ctx
              });
            });
          } else {
            return this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
          }
        }
        var checkCtx = {
          addIssue: function addIssue(arg) {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "refinement") {
          var executeRefinement = function executeRefinement(acc
          // effect: RefinementEffect<any>
          ) {
            var result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            var inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted") return INVALID;
            if (inner.status === "dirty") status.dirty();
            // return value is ignored
            executeRefinement(inner.value);
            return {
              status: status.value,
              value: inner.value
            };
          } else {
            return this._def.schema._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }).then(function (inner) {
              if (inner.status === "aborted") return INVALID;
              if (inner.status === "dirty") status.dirty();
              return executeRefinement(inner.value).then(function () {
                return {
                  status: status.value,
                  value: inner.value
                };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            var base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            // if (base.status === "aborted") return INVALID;
            // if (base.status === "dirty") {
            //   return { status: "dirty", value: base.value };
            // }
            if (!isValid(base)) return base;
            var result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return {
              status: status.value,
              value: result
            };
          } else {
            return this._def.schema._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }).then(function (base) {
              if (!isValid(base)) return base;
              // if (base.status === "aborted") return INVALID;
              // if (base.status === "dirty") {
              //   return { status: "dirty", value: base.value };
              // }
              return Promise.resolve(effect.transform(base.value, checkCtx)).then(function (result) {
                return {
                  status: status.value,
                  value: result
                };
              });
            });
          }
        }
        util.assertNever(effect);
      }
    }]);
    return ZodEffects;
  }(ZodType);
  ZodEffects.create = function (schema, effect, params) {
    return new ZodEffects(_objectSpread2({
      schema: schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: effect
    }, processCreateParams(params)));
  };
  ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
    return new ZodEffects(_objectSpread2({
      schema: schema,
      effect: {
        type: "preprocess",
        transform: preprocess
      },
      typeName: ZodFirstPartyTypeKind.ZodEffects
    }, processCreateParams(params)));
  };
  var ZodOptional = /*#__PURE__*/function (_ZodType29) {
    _inherits(ZodOptional, _ZodType29);
    var _super30 = _createSuper(ZodOptional);
    function ZodOptional() {
      _classCallCheck(this, ZodOptional);
      return _super30.apply(this, arguments);
    }
    _createClass(ZodOptional, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(undefined);
        }
        return this._def.innerType._parse(input);
      }
    }, {
      key: "unwrap",
      value: function unwrap() {
        return this._def.innerType;
      }
    }]);
    return ZodOptional;
  }(ZodType);
  ZodOptional.create = function (type, params) {
    return new ZodOptional(_objectSpread2({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional
    }, processCreateParams(params)));
  };
  var ZodNullable = /*#__PURE__*/function (_ZodType30) {
    _inherits(ZodNullable, _ZodType30);
    var _super31 = _createSuper(ZodNullable);
    function ZodNullable() {
      _classCallCheck(this, ZodNullable);
      return _super31.apply(this, arguments);
    }
    _createClass(ZodNullable, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType === ZodParsedType["null"]) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
    }, {
      key: "unwrap",
      value: function unwrap() {
        return this._def.innerType;
      }
    }]);
    return ZodNullable;
  }(ZodType);
  ZodNullable.create = function (type, params) {
    return new ZodNullable(_objectSpread2({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable
    }, processCreateParams(params)));
  };
  var ZodDefault = /*#__PURE__*/function (_ZodType31) {
    _inherits(ZodDefault, _ZodType31);
    var _super32 = _createSuper(ZodDefault);
    function ZodDefault() {
      _classCallCheck(this, ZodDefault);
      return _super32.apply(this, arguments);
    }
    _createClass(ZodDefault, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa14 = this._processInputParams(input),
          ctx = _this$_processInputPa14.ctx;
        var data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data: data,
          path: ctx.path,
          parent: ctx
        });
      }
    }, {
      key: "removeDefault",
      value: function removeDefault() {
        return this._def.innerType;
      }
    }]);
    return ZodDefault;
  }(ZodType);
  ZodDefault.create = function (type, params) {
    return new ZodDefault(_objectSpread2({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params["default"] === "function" ? params["default"] : function () {
        return params["default"];
      }
    }, processCreateParams(params)));
  };
  var ZodCatch = /*#__PURE__*/function (_ZodType32) {
    _inherits(ZodCatch, _ZodType32);
    var _super33 = _createSuper(ZodCatch);
    function ZodCatch() {
      _classCallCheck(this, ZodCatch);
      return _super33.apply(this, arguments);
    }
    _createClass(ZodCatch, [{
      key: "_parse",
      value: function _parse(input) {
        var _this19 = this;
        var _this$_processInputPa15 = this._processInputParams(input),
          ctx = _this$_processInputPa15.ctx;
        var result = this._def.innerType._parse({
          data: ctx.data,
          path: ctx.path,
          parent: _objectSpread2(_objectSpread2({}, ctx), {}, {
            common: _objectSpread2(_objectSpread2({}, ctx.common), {}, {
              issues: [] // don't collect issues from inner type
            })
          })
        });

        if (isAsync(result)) {
          return result.then(function (result) {
            return {
              status: "valid",
              value: result.status === "valid" ? result.value : _this19._def.catchValue()
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue()
          };
        }
      }
    }, {
      key: "removeCatch",
      value: function removeCatch() {
        return this._def.innerType;
      }
    }]);
    return ZodCatch;
  }(ZodType);
  ZodCatch.create = function (type, params) {
    return new ZodCatch(_objectSpread2({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params["catch"] === "function" ? params["catch"] : function () {
        return params["catch"];
      }
    }, processCreateParams(params)));
  };
  var ZodNaN = /*#__PURE__*/function (_ZodType33) {
    _inherits(ZodNaN, _ZodType33);
    var _super34 = _createSuper(ZodNaN);
    function ZodNaN() {
      _classCallCheck(this, ZodNaN);
      return _super34.apply(this, arguments);
    }
    _createClass(ZodNaN, [{
      key: "_parse",
      value: function _parse(input) {
        var parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          var ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return {
          status: "valid",
          value: input.data
        };
      }
    }]);
    return ZodNaN;
  }(ZodType);
  ZodNaN.create = function (params) {
    return new ZodNaN(_objectSpread2({
      typeName: ZodFirstPartyTypeKind.ZodNaN
    }, processCreateParams(params)));
  };
  var BRAND = Symbol("zod_brand");
  var ZodBranded = /*#__PURE__*/function (_ZodType34) {
    _inherits(ZodBranded, _ZodType34);
    var _super35 = _createSuper(ZodBranded);
    function ZodBranded() {
      _classCallCheck(this, ZodBranded);
      return _super35.apply(this, arguments);
    }
    _createClass(ZodBranded, [{
      key: "_parse",
      value: function _parse(input) {
        var _this$_processInputPa16 = this._processInputParams(input),
          ctx = _this$_processInputPa16.ctx;
        var data = ctx.data;
        return this._def.type._parse({
          data: data,
          path: ctx.path,
          parent: ctx
        });
      }
    }, {
      key: "unwrap",
      value: function unwrap() {
        return this._def.type;
      }
    }]);
    return ZodBranded;
  }(ZodType);
  var ZodPipeline = /*#__PURE__*/function (_ZodType35) {
    _inherits(ZodPipeline, _ZodType35);
    var _super36 = _createSuper(ZodPipeline);
    function ZodPipeline() {
      _classCallCheck(this, ZodPipeline);
      return _super36.apply(this, arguments);
    }
    _createClass(ZodPipeline, [{
      key: "_parse",
      value: function _parse(input) {
        var _this20 = this;
        var _this$_processInputPa17 = this._processInputParams(input),
          status = _this$_processInputPa17.status,
          ctx = _this$_processInputPa17.ctx;
        if (ctx.common.async) {
          var handleAsync = /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var inResult;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return _this20._def["in"]._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx
                    });
                  case 2:
                    inResult = _context8.sent;
                    if (!(inResult.status === "aborted")) {
                      _context8.next = 5;
                      break;
                    }
                    return _context8.abrupt("return", INVALID);
                  case 5:
                    if (!(inResult.status === "dirty")) {
                      _context8.next = 10;
                      break;
                    }
                    status.dirty();
                    return _context8.abrupt("return", DIRTY(inResult.value));
                  case 10:
                    return _context8.abrupt("return", _this20._def.out._parseAsync({
                      data: inResult.value,
                      path: ctx.path,
                      parent: ctx
                    }));
                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function handleAsync() {
              return _ref9.apply(this, arguments);
            };
          }();
          return handleAsync();
        } else {
          var inResult = this._def["in"]._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted") return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
    }], [{
      key: "create",
      value: function create(a, b) {
        return new ZodPipeline({
          "in": a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    }]);
    return ZodPipeline;
  }(ZodType);
  var custom = function custom(check) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fatal = arguments.length > 2 ? arguments[2] : undefined;
    if (check) return ZodAny.create().superRefine(function (data, ctx) {
      if (!check(data)) {
        var p = typeof params === "function" ? params(data) : params;
        var p2 = typeof p === "string" ? {
          message: p
        } : p;
        ctx.addIssue(_objectSpread2(_objectSpread2({
          code: "custom"
        }, p2), {}, {
          fatal: fatal
        }));
      }
    });
    return ZodAny.create();
  };
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = function instanceOfType(
  // const instanceOfType = <T extends new (...args: any[]) => any>(
  cls) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      message: "Input not instance of ".concat(cls.name)
    };
    return custom(function (data) {
      return data instanceof cls;
    }, params, true);
  };
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = function ostring() {
    return stringType().optional();
  };
  var onumber = function onumber() {
    return numberType().optional();
  };
  var oboolean = function oboolean() {
    return booleanType().optional();
  };
  var coerce = {
    string: function string(arg) {
      return ZodString.create(_objectSpread2(_objectSpread2({}, arg), {}, {
        coerce: true
      }));
    },
    number: function number(arg) {
      return ZodNumber.create(_objectSpread2(_objectSpread2({}, arg), {}, {
        coerce: true
      }));
    },
    "boolean": function boolean(arg) {
      return ZodBoolean.create(_objectSpread2(_objectSpread2({}, arg), {}, {
        coerce: true
      }));
    },
    bigint: function bigint(arg) {
      return ZodBigInt.create(_objectSpread2(_objectSpread2({}, arg), {}, {
        coerce: true
      }));
    },
    date: function date(arg) {
      return ZodDate.create(_objectSpread2(_objectSpread2({}, arg), {}, {
        coerce: true
      }));
    }
  };
  var NEVER = INVALID;
  var mod = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util() {
      return util;
    },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    get objectUtil() {
      return objectUtil;
    },
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    "boolean": booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
  });

  var ValidationTypeValidator = mod.enum([
      'required',
      'email',
      'number',
      'code',
  ]);
  var WithOptionValidator = mod.record(ValidationTypeValidator);
  var ModeOptionValidator = mod.enum(['or', 'and']);
  var LimitationOptionValidator = mod.nullable(mod.enum(['number', 'code']));
  var ValidationOptionValidator = mod.object({
      type: ValidationTypeValidator,
      mode: ModeOptionValidator.optional(),
      with: WithOptionValidator.optional(),
      if: mod
          .object({
          mode: ModeOptionValidator.optional(),
          target: mod.record(mod.string()),
      })
          .optional(),
      message: mod.string().optional(),
  });
  var RuleValidator = mod.array(mod.object({
      name: mod.string(),
      limit: LimitationOptionValidator.optional(),
      validation: mod
          .union([
          ValidationOptionValidator,
          mod.array(ValidationOptionValidator),
      ])
          .optional(),
  }));
  var ValidatedErrorValidator = mod.object({
      type: mod.string(),
      message: mod.string().optional(),
  });
  var ParamValidator = mod.object({
      rules: RuleValidator,
      error_class: mod.string(),
      error_message_class: mod.string(),
      empty_error_message_class: mod.string(),
      valid_class: mod.string(),
      initial_error_view: mod.boolean(),
      submit_button: mod
          .union([
          mod.string(),
          mod.instanceof(HTMLInputElement),
          mod.instanceof(HTMLButtonElement),
      ])
          .optional(),
      on_validate: mod.function().returns(mod.void()).optional(),
      on_success: mod.function().returns(mod.void()).optional(),
      on_error: mod
          .function()
          .args(mod.record(mod.array(ValidatedErrorValidator)))
          .returns(mod.void())
          .optional(),
  });
  var InitialParamValidator = ParamValidator.partial({
      error_class: true,
      error_message_class: true,
      empty_error_message_class: true,
      valid_class: true,
      initial_error_view: true,
  });
  mod.object({
      validate: mod.function().returns(mod.void()),
  });
  mod.record(mod.instanceof(HTMLElement));
  var FormElementValidator = mod.union([
      mod.string(),
      mod.instanceof(HTMLFormElement),
  ]);
  mod.union([
      mod.instanceof(HTMLInputElement),
      mod.instanceof(HTMLSelectElement),
      mod.instanceof(HTMLTextAreaElement),
  ]);

  var rule$3 = mod.string().trim().min(1);
  /**
   * Check required of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$3 = function (values) {
      if (!values.length) {
          return false;
      }
      return values.reduce(function (prev, current) { return prev && rule$3.safeParse(current).success; }, true);
  };

  var rule$2 = mod.string().email();
  /**
   * Check Email format of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$2 = function (values) {
      return values.reduce(function (prev, current) {
          if (!prev || !rule$3.safeParse(current).success) {
              return prev;
          }
          return prev && rule$2.safeParse(current).success;
      }, true);
  };

  var rule$1 = mod.coerce.number();
  /**
   * Check numeric of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check$1 = function (values) {
      return values.reduce(function (prev, current) { return prev && rule$1.safeParse(current).success; }, true);
  };

  var rule = mod.coerce.string().regex(/^[0-9-+*]*$/);
  /**
   * Check code format of target field element's value
   * @param {string[]} values
   * @returns {boolean}
   */
  var check = function (values) {
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
              validateSingle(validation, errors, values);
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
  var checkValidate = function (ruleType, values) {
      switch (ruleType) {
          case 'required':
              return check$3(values);
          case 'email':
              return check$2(values);
          case 'number':
              return check$1(values);
          case 'code':
              return check(values);
      }
  };
  var validateSingle = function (validation, errors, values) {
      if (!checkValidate(validation.type, values)) {
          errors.push({
              type: validation.type,
              message: validation.message,
          });
      }
      return errors;
  };
  var validateMultipleOr = function (formEl, validation, errors, values) {
      var result = checkValidate(validation.type, values);
      if (validation.with) {
          Object.keys(validation.with).map(function (name) {
              if (!validation.with) {
                  return;
              }
              var withType = validation.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result || checkValidate(withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: validation.type,
              message: validation.message,
          });
      }
      return errors;
  };
  var validateMultipleAnd = function (formEl, validation, errors, values) {
      var result = checkValidate(validation.type, values);
      if (validation.with) {
          Object.keys(validation.with).map(function (name) {
              if (!validation.with) {
                  return;
              }
              var withType = validation.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result && checkValidate(withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: validation.type,
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
          var flag = true;
          validate();
          Object.keys(errors).map(function (key) {
              var error = errors[key];
              flag = flag && error.length <= 0;
          });
          if (!flag) {
              e.preventDefault();
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
      // Initial validate
      validate(true);
      return { formEl: targetFormElement, elements: elements, validate: validate };
  };

  return InputFollow;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRmb2xsb3cuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvdmFsaWRhdGUvUmVxdWlyZWQudHMiLCIuLi9zcmMvdmFsaWRhdGUvRW1haWwudHMiLCIuLi9zcmMvdmFsaWRhdGUvTnVtYmVyLnRzIiwiLi4vc3JjL3ZhbGlkYXRlL0NvZGUudHMiLCIuLi9zcmMvY29udmVydC9OdW1iZXIudHMiLCIuLi9zcmMvY29udmVydC9Db2RlLnRzIiwiLi4vc3JjL3V0aWxzL1RhZy50cyIsIi4uL3NyYy92YWxpZGF0ZS9pbmRleC50cyIsIi4uL3NyYy9tb2RlbC9FbGVtZW50LnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG5cbmNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5jbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKGlzc3VlLm1pbmltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKGlzc3VlLm1heGltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuXG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGVycm9yTWFwO1xuZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuXG5jb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSB8fCBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICBlcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5jbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBhd2FpdCBwYWlyLmtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5jb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5jb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB4IGluc3RhbmNlb2YgUHJvbWlzZTtcblxudmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UubWVzc2FnZTtcbn0pKGVycm9yVXRpbCB8fCAoZXJyb3JVdGlsID0ge30pKTtcblxuY2xhc3MgUGFyc2VJbnB1dExhenlQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZhbHVlLCBwYXRoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGguY29uY2F0KHRoaXMuX2tleSk7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICBpZiAodHlwZW9mIGN0eC5kYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiByZXF1aXJlZF9lcnJvciAhPT0gbnVsbCAmJiByZXF1aXJlZF9lcnJvciAhPT0gdm9pZCAwID8gcmVxdWlyZWRfZXJyb3IgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogaW52YWxpZF90eXBlX2Vycm9yICE9PSBudWxsICYmIGludmFsaWRfdHlwZV9lcnJvciAhPT0gdm9pZCAwID8gaW52YWxpZF90eXBlX2Vycm9yIDogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmNsYXNzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgX2dldFR5cGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIF9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4IHx8IHtcbiAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3IFBhcnNlU3RhdHVzKCksXG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9wYXJzZVN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBwYXJzZSBlbmNvdW50ZXJlZCBwcm9taXNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfcGFyc2VBc3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG4gICAgcGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2FmZVBhcnNlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBzYWZlUGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBhc3luYzogKF9hID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmFzeW5jKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnBhdGgpIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXN1bHQoY3R4LCByZXN1bHQpO1xuICAgIH1cbiAgICBhc3luYyBwYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBhc3luYyBzYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICBjb250ZXh0dWFsRXJyb3JNYXA6IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLnBhdGgpIHx8IFtdLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGRhdGEpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXliZUFzeW5jUmVzdWx0ID0gdGhpcy5fcGFyc2UoeyBkYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IChpc0FzeW5jKG1heWJlQXN5bmNSZXN1bHQpXG4gICAgICAgICAgICA/IG1heWJlQXN5bmNSZXN1bHRcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpXG4gICAgICAgICAgICAgICAgICAgIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiBab2RQcm9taXNlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSwgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgYW5kKGluY29taW5nKSB7XG4gICAgICAgIHJldHVybiBab2RJbnRlcnNlY3Rpb24uY3JlYXRlKHRoaXMsIGluY29taW5nLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWZhdWx0KGRlZikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnJhbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQnJhbmRlZCh7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJyYW5kZWQsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goZGVmKSB7XG4gICAgICAgIGNvbnN0IGNhdGNoVmFsdWVGdW5jID0gdHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiID8gZGVmIDogKCkgPT4gZGVmO1xuICAgICAgICByZXR1cm4gbmV3IFpvZENhdGNoKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGNhdGNoVmFsdWU6IGNhdGNoVmFsdWVGdW5jLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlc2NyaWJlKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IFRoaXMgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IFRoaXMoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaXBlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gWm9kUGlwZWxpbmUuY3JlYXRlKHRoaXMsIHRhcmdldCk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eW2Etel1bYS16MC05XSokLztcbmNvbnN0IHV1aWRSZWdleCA9IC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG4vLyBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjE4MS8xNTUwMTU1XG4vLyBvbGQgdmVyc2lvbjogdG9vIHNsb3csIGRpZG4ndCBzdXBwb3J0IHVuaWNvZGVcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkkL2k7XG4vL29sZCBlbWFpbCByZWdleFxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF0uLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoPyEtKShbXjw+KClbXFxdLiw7Olxcc0BcIl0rXFwuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17MSx9KVteLTw+KClbXFxdLiw7Olxcc0BcIl0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoW14tXShbYS16QS1aMC05LV0qXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuLy8gaW50ZXJmYWNlIElzRGF0ZVN0cmluZ09wdGlvbnMgZXh0ZW5kcyBTdHJpbmdEYXRlT3B0aW9ucyB7XG4vKipcbiAqIE1hdGNoIGFueSBjb25maWd1cmF0aW9uXG4gKi9cbi8vIGFueT86IGJvb2xlYW47XG4vLyB9XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmNvbnN0IGRhdGV0aW1lUmVnZXggPSAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBpZiAoYXJncy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fSgoWystXVxcXFxkezJ9KDo/XFxcXGR7Mn0pPyl8WikkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9XFxcXC5cXFxcZHske2FyZ3MucHJlY2lzaW9ufX1aJGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3MucHJlY2lzaW9uID09PSAwKSB7XG4gICAgICAgIGlmIChhcmdzLm9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfSgoWystXVxcXFxkezJ9KDo/XFxcXGR7Mn0pPyl8WikkYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9WiRgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGFyZ3Mub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9KFxcXFwuXFxcXGQrKT8oKFsrLV1cXFxcZHsyfSg6P1xcXFxkezJ9KT8pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/WiRgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fcmVnZXggPSAocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpID0+IHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugei5zdHJpbmcoKS5taW4oMSkgaW5zdGVhZC5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgWm9kU3RyaW5nLm1pbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uZW1wdHkgPSAobWVzc2FnZSkgPT4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICAgICAgdGhpcy50cmltID0gKCkgPT4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXJsXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMKGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInJlZ2V4XCIpIHtcbiAgICAgICAgICAgICAgICBjaGVjay5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBjaGVjay5yZWdleC50ZXN0KGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0cmltXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInN0YXJ0c1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5zdGFydHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IHN0YXJ0c1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbmRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmVuZHNXaXRoKGNoZWNrLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7IGVuZHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gZGF0ZXRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtYWlsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbWFpbFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVybChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXJsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXVpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXVpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkMihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZDJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBkYXRldGltZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uKSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub2Zmc2V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWdleChyZWdleCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJyZWdleFwiLFxuICAgICAgICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJzdGFydHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRzV2l0aCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJlbmRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5MZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heExlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibGVuZ3RoXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZXRpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtYWlsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVUkwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXJsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInV1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRDIoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiY3VpZDJcIik7XG4gICAgfVxuICAgIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heExlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZFN0cmluZy5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTdHJpbmcsXG4gICAgICAgIGNvZXJjZTogKF9hID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY2NDg0L3doeS1kb2VzLW1vZHVsdXMtb3BlcmF0b3ItcmV0dXJuLWZyYWN0aW9uYWwtbnVtYmVyLWluLWphdmFzY3JpcHQvMzE3MTEwMzQjMzE3MTEwMzRcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgICBjb25zdCB2YWxEZWNDb3VudCA9ICh2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBkZWNDb3VudCA9IHZhbERlY0NvdW50ID4gc3RlcERlY0NvdW50ID8gdmFsRGVjQ291bnQgOiBzdGVwRGVjQ291bnQ7XG4gICAgY29uc3QgdmFsSW50ID0gcGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICBjb25zdCBzdGVwSW50ID0gcGFyc2VJbnQoc3RlcC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgcmV0dXJuICh2YWxJbnQgJSBzdGVwSW50KSAvIE1hdGgucG93KDEwLCBkZWNDb3VudCk7XG59XG5jbGFzcyBab2ROdW1iZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5tdWx0aXBsZU9mO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBOdW1iZXIoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWwuaXNJbnRlZ2VyKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlZDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRTYWZlUmVtYWluZGVyKGlucHV0LmRhdGEsIGNoZWNrLnZhbHVlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJmaW5pdGVcIikge1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5pdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJmaW5pdGVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgZ2V0IGlzSW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImludFwiIHx8XG4gICAgICAgICAgICAoY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIgJiYgdXRpbC5pc0ludGVnZXIoY2gudmFsdWUpKSk7XG4gICAgfVxuICAgIGdldCBpc0Zpbml0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGwsIG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwiZmluaXRlXCIgfHxcbiAgICAgICAgICAgICAgICBjaC5raW5kID09PSBcImludFwiIHx8XG4gICAgICAgICAgICAgICAgY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG1pbikgJiYgTnVtYmVyLmlzRmluaXRlKG1heCk7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlQXN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgICAgICB9KSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VTeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBtaW5MZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbWF4TGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBleGFjdExlbmd0aDogeyB2YWx1ZTogbGVuLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZEFycmF5LmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIG1pbkxlbmd0aDogbnVsbCxcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxuICAgICAgICBleGFjdExlbmd0aDogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBcnJheSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2RPYmplY3QgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9jYWNoZWQgPSB7IHNoYXBlLCBrZXlzIH0pO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmXG4gICAgICAgICAgICB0aGlzLl9kZWYudW5rbm93bktleXMgPT09IFwic3RyaXBcIikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFwZUtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbGlkYXRvciA9IHNoYXBlW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5VmFsaWRhdG9yLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlcikge1xuICAgICAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB0aGlzLl9kZWYudW5rbm93bktleXM7XG4gICAgICAgICAgICBpZiAodW5rbm93bktleXMgPT09IFwicGFzc3Rocm91Z2hcIikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBjdHguZGF0YVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmljdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZXh0cmFLZXlzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaXBcIikgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBab2RPYmplY3QgZXJyb3I6IGludmFsaWQgdW5rbm93bktleXMgdmFsdWUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBydW4gY2F0Y2hhbGwgdmFsaWRhdGlvblxuICAgICAgICAgICAgY29uc3QgY2F0Y2hhbGwgPSB0aGlzLl9kZWYuY2F0Y2hhbGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN0eC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0Y2hhbGwuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkgLy8sIGN0eC5jaGlsZChrZXkpLCB2YWx1ZSwgZ2V0UGFyc2VkVHlwZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhd2FpdCBwYWlyLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBwYWlyLmFsd2F5c1NldCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jUGFpcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChzeW5jUGFpcnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICB9XG4gICAgc3RyaWN0KG1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3JVdGlsLmVyclRvT2JqO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgICAgIC4uLihtZXNzYWdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXA6IChpc3N1ZSwgY3R4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RXJyb3IgPSAoX2MgPSAoX2IgPSAoX2EgPSB0aGlzLl9kZWYpLmVycm9yTWFwKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgaXNzdWUsIGN0eCkubWVzc2FnZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcInVucmVjb2duaXplZF9rZXlzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKF9kID0gZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0cmlwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFzc3Rocm91Z2goKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInBhc3N0aHJvdWdoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBhdWdtZW50ID0gQXVnbWVudEZhY3Rvcnk8Wm9kT2JqZWN0RGVmPFQsIFVua25vd25LZXlzLCBDYXRjaGFsbD4+KHRoaXMuX2RlZik7XG4gICAgLy8gZXh0ZW5kID0gQXVnbWVudEZhY3Rvcnk8Wm9kT2JqZWN0RGVmPFQsIFVua25vd25LZXlzLCBDYXRjaGFsbD4+KHRoaXMuX2RlZik7XG4gICAgZXh0ZW5kKGF1Z21lbnRhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW9yIHRvIHpvZEAxLjAuMTIgdGhlcmUgd2FzIGEgYnVnIGluIHRoZVxuICAgICAqIGluZmVycmVkIHR5cGUgb2YgbWVyZ2VkIG9iamVjdHMuIFBsZWFzZVxuICAgICAqIHVwZ3JhZGUgaWYgeW91IGFyZSBleHBlcmllbmNpbmcgaXNzdWVzLlxuICAgICAqL1xuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihtZXJnaW5nOiBJbmNvbWluZykge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuZXh0ZW5kKG1lcmdpbmcuc2hhcGUgYXMgSW5jb21pbmdbXCJzaGFwZVwiXSk7XG4gICAgLy8gfVxuICAgIG1lcmdlKG1lcmdpbmcpIHtcbiAgICAgICAgLy8gY29uc3QgbWVyZ2VkU2hhcGUgPSBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKFxuICAgICAgICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgIG1lcmdpbmcuX2RlZi5zaGFwZSgpXG4gICAgICAgIC8vICk7XG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAgICAgICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICBzZXRLZXkoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXVnbWVudCh7IFtrZXldOiBzY2hlbWEgfSk7XG4gICAgfVxuICAgIC8vIG1lcmdlPEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0PihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogLy9ab2RPYmplY3Q8VCAmIEluY29taW5nW1wiX3NoYXBlXCJdLCBVbmtub3duS2V5cywgQ2F0Y2hhbGw+ID0gKG1lcmdpbmcpID0+IHtcbiAgICAvLyBab2RPYmplY3Q8XG4gICAgLy8gICBleHRlbmRTaGFwZTxULCBSZXR1cm5UeXBlPEluY29taW5nW1wiX2RlZlwiXVtcInNoYXBlXCJdPj4sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcImNhdGNoYWxsXCJdXG4gICAgLy8gPiB7XG4gICAgLy8gICAvLyBjb25zdCBtZXJnZWRTaGFwZSA9IG9iamVjdFV0aWwubWVyZ2VTaGFwZXMoXG4gICAgLy8gICAvLyAgIHRoaXMuX2RlZi5zaGFwZSgpLFxuICAgIC8vICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgIC8vICAgLy8gKTtcbiAgICAvLyAgIGNvbnN0IG1lcmdlZDogYW55ID0gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgLy8gICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgLy8gICAgIHNoYXBlOiAoKSA9PlxuICAgIC8vICAgICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAvLyAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgLy8gICB9KSBhcyBhbnk7XG4gICAgLy8gICByZXR1cm4gbWVyZ2VkO1xuICAgIC8vIH1cbiAgICBjYXRjaGFsbChpbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjYXRjaGFsbDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwaWNrKG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKG1hc2spLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hc2tba2V5XSAmJiB0aGlzLnNoYXBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb21pdChtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZXBQYXJ0aWFsKCkge1xuICAgICAgICByZXR1cm4gZGVlcFBhcnRpYWxpZnkodGhpcyk7XG4gICAgfVxuICAgIHBhcnRpYWwobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVpcmVkKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3RmllbGQgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZCA9IG5ld0ZpZWxkLl9kZWYuaW5uZXJUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gbmV3RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsXG4gICAgICAgICAgICAub2JqZWN0S2V5cyhhKVxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbLi4uY3R4LmRhdGFdXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuX2RlZi5pdGVtc1tpdGVtSW5kZXhdIHx8IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGl0ZW1JbmRleCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gISF4KTsgLy8gZmlsdGVyIG51bGxzXG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaXRlbXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIGl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaXRlbXM7XG4gICAgfVxuICAgIHJlc3QocmVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJlc3QsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZFR1cGxlLmNyZWF0ZSA9IChzY2hlbWFzLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiBzY2hlbWFzIHRvIHoudHVwbGUoWyAuLi4gXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICBpdGVtczogc2NoZW1hcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RUdXBsZSxcbiAgICAgICAgcmVzdDogbnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFJlY29yZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGN0eC5kYXRhW2tleV0sIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgICAgIGlmIChzZWNvbmQgaW5zdGFuY2VvZiBab2RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICAgICAga2V5VHlwZTogZmlyc3QsXG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBzZWNvbmQsXG4gICAgICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlyZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICBrZXlUeXBlOiBab2RTdHJpbmcuY3JlYXRlKCksXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHNlY29uZCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNsYXNzIFpvZE1hcCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFNldCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc2V0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnNldCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGRlZi5taW5TaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA8IGRlZi5taW5TaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5TaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pblNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heFNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplID4gZGVmLm1heFNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhTaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heFNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZVNldChlbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNldC5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHBhcnNlZFNldCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmN0eC5kYXRhLnZhbHVlcygpXS5tYXAoKGl0ZW0sIGkpID0+IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSkpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGVsZW1lbnRzKS50aGVuKChlbGVtZW50cykgPT4gZmluYWxpemVTZXQoZWxlbWVudHMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZVNldChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWluKG1pblNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogbWluU2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4U2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhTaXplOiB7IHZhbHVlOiBtYXhTaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpemUoc2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oc2l6ZSwgbWVzc2FnZSkubWF4KHNpemUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RTZXQuY3JlYXRlID0gKHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1pblNpemU6IG51bGwsXG4gICAgICAgIG1heFNpemU6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU2V0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRnVuY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMuaW1wbGVtZW50O1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBcmdzSXNzdWUoYXJncywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c0Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZVJldHVybnNJc3N1ZShyZXR1cm5zLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmV0dXJucyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RXJyb3JNYXAoKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IHRoaXMuX2RlZi5hcmdzXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKGFyZ3MsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VBcmdzSXNzdWUoYXJncywgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbiguLi5wYXJzZWRBcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gYXdhaXQgdGhpcy5fZGVmLnJldHVybnMuX2RlZi50eXBlXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKHJlc3VsdCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPSygoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSB0aGlzLl9kZWYuYXJncy5zYWZlUGFyc2UoYXJncywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZEFyZ3Muc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VBcmdzSXNzdWUoYXJncywgcGFyc2VkQXJncy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4ucGFyc2VkQXJncy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gdGhpcy5fZGVmLnJldHVybnMuc2FmZVBhcnNlKHJlc3VsdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJldHVybnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBwYXJzZWRSZXR1cm5zLmVycm9yKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5hcmdzO1xuICAgIH1cbiAgICByZXR1cm5UeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnJldHVybnM7XG4gICAgfVxuICAgIGFyZ3MoLi4uaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBhcmdzOiBab2RUdXBsZS5jcmVhdGUoaXRlbXMpLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm5zKHJldHVyblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5UeXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdHJpY3RJbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYXJncywgcmV0dXJucywgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgYXJnczogKGFyZ3NcbiAgICAgICAgICAgICAgICA/IGFyZ3NcbiAgICAgICAgICAgICAgICA6IFpvZFR1cGxlLmNyZWF0ZShbXSkucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSksXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5zIHx8IFpvZFVua25vd24uY3JlYXRlKCksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEZ1bmN0aW9uLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RMYXp5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBsYXp5U2NoZW1hID0gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgICAgICByZXR1cm4gbGF6eVNjaGVtYS5fcGFyc2UoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgIH1cbn1cblpvZExhenkuY3JlYXRlID0gKGdldHRlciwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMYXp5KHtcbiAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZExpdGVyYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEgIT09IHRoaXMuX2RlZi52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLnZhbHVlcy5pbmRleE9mKGlucHV0LmRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGV4dHJhY3QodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh2YWx1ZXMpO1xuICAgIH1cbiAgICBleGNsdWRlKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiAhdmFsdWVzLmluY2x1ZGVzKG9wdCkpKTtcbiAgICB9XG59XG5ab2RFbnVtLmNyZWF0ZSA9IGNyZWF0ZVpvZEVudW07XG5jbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVudW1WYWx1ZXMgPSB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nICYmXG4gICAgICAgICAgICBjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdGl2ZUVudW1WYWx1ZXMuaW5kZXhPZihpbnB1dC5kYXRhKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxufVxuWm9kTmF0aXZlRW51bS5jcmVhdGUgPSAodmFsdWVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hdGl2ZUVudW0oe1xuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYXRpdmVFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kUHJvbWlzZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbigocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2NcbiAgICAgICAgICAgIC8vIGVmZmVjdDogUmVmaW5lbWVudEVmZmVjdDxhbnk+XG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGJhc2Uuc3RhdHVzID09PSBcImFib3J0ZWRcIikgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChiYXNlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoeyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBwYXJhbXMuZGVmYXVsdFxuICAgICAgICAgICAgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLCAvLyBkb24ndCBjb2xsZWN0IGlzc3VlcyBmcm9tIGlubmVyIHR5cGVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIgPyByZXN1bHQudmFsdWUgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIiA/IHJlc3VsdC52YWx1ZSA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RDYXRjaC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgY2F0Y2hWYWx1ZTogdHlwZW9mIHBhcmFtcy5jYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmNhdGNoIDogKCkgPT4gcGFyYW1zLmNhdGNoLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTmFOIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubmFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5hbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbn1cblpvZE5hTi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYU4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5hTixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuY2xhc3MgWm9kQnJhbmRlZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxufVxuY2xhc3MgWm9kUGlwZWxpbmUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLmluLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkoaW5SZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IHRoaXMuX2RlZi5pbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZGlydHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RQaXBlbGluZSh7XG4gICAgICAgICAgICBpbjogYSxcbiAgICAgICAgICAgIG91dDogYixcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IGN1c3RvbSA9IChjaGVjaywgcGFyYW1zID0ge30sIGZhdGFsKSA9PiB7XG4gICAgaWYgKGNoZWNrKVxuICAgICAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpLnN1cGVyUmVmaW5lKChkYXRhLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hlY2soZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zKGRhdGEpIDogcGFyYW1zO1xuICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2U6IHAgfSA6IHA7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucDIsIGZhdGFsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpO1xufTtcbmNvbnN0IGxhdGUgPSB7XG4gICAgb2JqZWN0OiBab2RPYmplY3QubGF6eWNyZWF0ZSxcbn07XG52YXIgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kO1xuKGZ1bmN0aW9uIChab2RGaXJzdFBhcnR5VHlwZUtpbmQpIHtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTdHJpbmdcIl0gPSBcIlpvZFN0cmluZ1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bWJlclwiXSA9IFwiWm9kTnVtYmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmFOXCJdID0gXCJab2ROYU5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCaWdJbnRcIl0gPSBcIlpvZEJpZ0ludFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJvb2xlYW5cIl0gPSBcIlpvZEJvb2xlYW5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REYXRlXCJdID0gXCJab2REYXRlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3ltYm9sXCJdID0gXCJab2RTeW1ib2xcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmRlZmluZWRcIl0gPSBcIlpvZFVuZGVmaW5lZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxcIl0gPSBcIlpvZE51bGxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBbnlcIl0gPSBcIlpvZEFueVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVua25vd25cIl0gPSBcIlpvZFVua25vd25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROZXZlclwiXSA9IFwiWm9kTmV2ZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RWb2lkXCJdID0gXCJab2RWb2lkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQXJyYXlcIl0gPSBcIlpvZEFycmF5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT2JqZWN0XCJdID0gXCJab2RPYmplY3RcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmlvblwiXSA9IFwiWm9kVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REaXNjcmltaW5hdGVkVW5pb25cIl0gPSBcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEludGVyc2VjdGlvblwiXSA9IFwiWm9kSW50ZXJzZWN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVHVwbGVcIl0gPSBcIlpvZFR1cGxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVjb3JkXCJdID0gXCJab2RSZWNvcmRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RNYXBcIl0gPSBcIlpvZE1hcFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFNldFwiXSA9IFwiWm9kU2V0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRnVuY3Rpb25cIl0gPSBcIlpvZEZ1bmN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGF6eVwiXSA9IFwiWm9kTGF6eVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExpdGVyYWxcIl0gPSBcIlpvZExpdGVyYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFbnVtXCJdID0gXCJab2RFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRWZmZWN0c1wiXSA9IFwiWm9kRWZmZWN0c1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hdGl2ZUVudW1cIl0gPSBcIlpvZE5hdGl2ZUVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPcHRpb25hbFwiXSA9IFwiWm9kT3B0aW9uYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsYWJsZVwiXSA9IFwiWm9kTnVsbGFibGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REZWZhdWx0XCJdID0gXCJab2REZWZhdWx0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQ2F0Y2hcIl0gPSBcIlpvZENhdGNoXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUHJvbWlzZVwiXSA9IFwiWm9kUHJvbWlzZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJyYW5kZWRcIl0gPSBcIlpvZEJyYW5kZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQaXBlbGluZVwiXSA9IFwiWm9kUGlwZWxpbmVcIjtcbn0pKFpvZEZpcnN0UGFydHlUeXBlS2luZCB8fCAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kID0ge30pKTtcbmNvbnN0IGluc3RhbmNlT2ZUeXBlID0gKFxuLy8gY29uc3QgaW5zdGFuY2VPZlR5cGUgPSA8VCBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG5jbHMsIHBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBgSW5wdXQgbm90IGluc3RhbmNlIG9mICR7Y2xzLm5hbWV9YCxcbn0pID0+IGN1c3RvbSgoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIGNscywgcGFyYW1zLCB0cnVlKTtcbmNvbnN0IHN0cmluZ1R5cGUgPSBab2RTdHJpbmcuY3JlYXRlO1xuY29uc3QgbnVtYmVyVHlwZSA9IFpvZE51bWJlci5jcmVhdGU7XG5jb25zdCBuYW5UeXBlID0gWm9kTmFOLmNyZWF0ZTtcbmNvbnN0IGJpZ0ludFR5cGUgPSBab2RCaWdJbnQuY3JlYXRlO1xuY29uc3QgYm9vbGVhblR5cGUgPSBab2RCb29sZWFuLmNyZWF0ZTtcbmNvbnN0IGRhdGVUeXBlID0gWm9kRGF0ZS5jcmVhdGU7XG5jb25zdCBzeW1ib2xUeXBlID0gWm9kU3ltYm9sLmNyZWF0ZTtcbmNvbnN0IHVuZGVmaW5lZFR5cGUgPSBab2RVbmRlZmluZWQuY3JlYXRlO1xuY29uc3QgbnVsbFR5cGUgPSBab2ROdWxsLmNyZWF0ZTtcbmNvbnN0IGFueVR5cGUgPSBab2RBbnkuY3JlYXRlO1xuY29uc3QgdW5rbm93blR5cGUgPSBab2RVbmtub3duLmNyZWF0ZTtcbmNvbnN0IG5ldmVyVHlwZSA9IFpvZE5ldmVyLmNyZWF0ZTtcbmNvbnN0IHZvaWRUeXBlID0gWm9kVm9pZC5jcmVhdGU7XG5jb25zdCBhcnJheVR5cGUgPSBab2RBcnJheS5jcmVhdGU7XG5jb25zdCBvYmplY3RUeXBlID0gWm9kT2JqZWN0LmNyZWF0ZTtcbmNvbnN0IHN0cmljdE9iamVjdFR5cGUgPSBab2RPYmplY3Quc3RyaWN0Q3JlYXRlO1xuY29uc3QgdW5pb25UeXBlID0gWm9kVW5pb24uY3JlYXRlO1xuY29uc3QgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSA9IFpvZERpc2NyaW1pbmF0ZWRVbmlvbi5jcmVhdGU7XG5jb25zdCBpbnRlcnNlY3Rpb25UeXBlID0gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZTtcbmNvbnN0IHR1cGxlVHlwZSA9IFpvZFR1cGxlLmNyZWF0ZTtcbmNvbnN0IHJlY29yZFR5cGUgPSBab2RSZWNvcmQuY3JlYXRlO1xuY29uc3QgbWFwVHlwZSA9IFpvZE1hcC5jcmVhdGU7XG5jb25zdCBzZXRUeXBlID0gWm9kU2V0LmNyZWF0ZTtcbmNvbnN0IGZ1bmN0aW9uVHlwZSA9IFpvZEZ1bmN0aW9uLmNyZWF0ZTtcbmNvbnN0IGxhenlUeXBlID0gWm9kTGF6eS5jcmVhdGU7XG5jb25zdCBsaXRlcmFsVHlwZSA9IFpvZExpdGVyYWwuY3JlYXRlO1xuY29uc3QgZW51bVR5cGUgPSBab2RFbnVtLmNyZWF0ZTtcbmNvbnN0IG5hdGl2ZUVudW1UeXBlID0gWm9kTmF0aXZlRW51bS5jcmVhdGU7XG5jb25zdCBwcm9taXNlVHlwZSA9IFpvZFByb21pc2UuY3JlYXRlO1xuY29uc3QgZWZmZWN0c1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZTtcbmNvbnN0IG9wdGlvbmFsVHlwZSA9IFpvZE9wdGlvbmFsLmNyZWF0ZTtcbmNvbnN0IG51bGxhYmxlVHlwZSA9IFpvZE51bGxhYmxlLmNyZWF0ZTtcbmNvbnN0IHByZXByb2Nlc3NUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcztcbmNvbnN0IHBpcGVsaW5lVHlwZSA9IFpvZFBpcGVsaW5lLmNyZWF0ZTtcbmNvbnN0IG9zdHJpbmcgPSAoKSA9PiBzdHJpbmdUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9udW1iZXIgPSAoKSA9PiBudW1iZXJUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9ib29sZWFuID0gKCkgPT4gYm9vbGVhblR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3QgY29lcmNlID0ge1xuICAgIHN0cmluZzogKChhcmcpID0+IFpvZFN0cmluZy5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgbnVtYmVyOiAoKGFyZykgPT4gWm9kTnVtYmVyLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBib29sZWFuOiAoKGFyZykgPT4gWm9kQm9vbGVhbi5jcmVhdGUoe1xuICAgICAgICAuLi5hcmcsXG4gICAgICAgIGNvZXJjZTogdHJ1ZSxcbiAgICB9KSksXG4gICAgYmlnaW50OiAoKGFyZykgPT4gWm9kQmlnSW50LmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBkYXRlOiAoKGFyZykgPT4gWm9kRGF0ZS5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG59O1xuY29uc3QgTkVWRVIgPSBJTlZBTElEO1xuXG52YXIgbW9kID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBkZWZhdWx0RXJyb3JNYXA6IGVycm9yTWFwLFxuICAgIHNldEVycm9yTWFwOiBzZXRFcnJvck1hcCxcbiAgICBnZXRFcnJvck1hcDogZ2V0RXJyb3JNYXAsXG4gICAgbWFrZUlzc3VlOiBtYWtlSXNzdWUsXG4gICAgRU1QVFlfUEFUSDogRU1QVFlfUEFUSCxcbiAgICBhZGRJc3N1ZVRvQ29udGV4dDogYWRkSXNzdWVUb0NvbnRleHQsXG4gICAgUGFyc2VTdGF0dXM6IFBhcnNlU3RhdHVzLFxuICAgIElOVkFMSUQ6IElOVkFMSUQsXG4gICAgRElSVFk6IERJUlRZLFxuICAgIE9LOiBPSyxcbiAgICBpc0Fib3J0ZWQ6IGlzQWJvcnRlZCxcbiAgICBpc0RpcnR5OiBpc0RpcnR5LFxuICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgaXNBc3luYzogaXNBc3luYyxcbiAgICBnZXQgdXRpbCAoKSB7IHJldHVybiB1dGlsOyB9LFxuICAgIFpvZFBhcnNlZFR5cGU6IFpvZFBhcnNlZFR5cGUsXG4gICAgZ2V0UGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZSxcbiAgICBab2RUeXBlOiBab2RUeXBlLFxuICAgIFpvZFN0cmluZzogWm9kU3RyaW5nLFxuICAgIFpvZE51bWJlcjogWm9kTnVtYmVyLFxuICAgIFpvZEJpZ0ludDogWm9kQmlnSW50LFxuICAgIFpvZEJvb2xlYW46IFpvZEJvb2xlYW4sXG4gICAgWm9kRGF0ZTogWm9kRGF0ZSxcbiAgICBab2RTeW1ib2w6IFpvZFN5bWJvbCxcbiAgICBab2RVbmRlZmluZWQ6IFpvZFVuZGVmaW5lZCxcbiAgICBab2ROdWxsOiBab2ROdWxsLFxuICAgIFpvZEFueTogWm9kQW55LFxuICAgIFpvZFVua25vd246IFpvZFVua25vd24sXG4gICAgWm9kTmV2ZXI6IFpvZE5ldmVyLFxuICAgIFpvZFZvaWQ6IFpvZFZvaWQsXG4gICAgWm9kQXJyYXk6IFpvZEFycmF5LFxuICAgIGdldCBvYmplY3RVdGlsICgpIHsgcmV0dXJuIG9iamVjdFV0aWw7IH0sXG4gICAgWm9kT2JqZWN0OiBab2RPYmplY3QsXG4gICAgWm9kVW5pb246IFpvZFVuaW9uLFxuICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbjogWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgIFpvZEludGVyc2VjdGlvbjogWm9kSW50ZXJzZWN0aW9uLFxuICAgIFpvZFR1cGxlOiBab2RUdXBsZSxcbiAgICBab2RSZWNvcmQ6IFpvZFJlY29yZCxcbiAgICBab2RNYXA6IFpvZE1hcCxcbiAgICBab2RTZXQ6IFpvZFNldCxcbiAgICBab2RGdW5jdGlvbjogWm9kRnVuY3Rpb24sXG4gICAgWm9kTGF6eTogWm9kTGF6eSxcbiAgICBab2RMaXRlcmFsOiBab2RMaXRlcmFsLFxuICAgIFpvZEVudW06IFpvZEVudW0sXG4gICAgWm9kTmF0aXZlRW51bTogWm9kTmF0aXZlRW51bSxcbiAgICBab2RQcm9taXNlOiBab2RQcm9taXNlLFxuICAgIFpvZEVmZmVjdHM6IFpvZEVmZmVjdHMsXG4gICAgWm9kVHJhbnNmb3JtZXI6IFpvZEVmZmVjdHMsXG4gICAgWm9kT3B0aW9uYWw6IFpvZE9wdGlvbmFsLFxuICAgIFpvZE51bGxhYmxlOiBab2ROdWxsYWJsZSxcbiAgICBab2REZWZhdWx0OiBab2REZWZhdWx0LFxuICAgIFpvZENhdGNoOiBab2RDYXRjaCxcbiAgICBab2ROYU46IFpvZE5hTixcbiAgICBCUkFORDogQlJBTkQsXG4gICAgWm9kQnJhbmRlZDogWm9kQnJhbmRlZCxcbiAgICBab2RQaXBlbGluZTogWm9kUGlwZWxpbmUsXG4gICAgY3VzdG9tOiBjdXN0b20sXG4gICAgU2NoZW1hOiBab2RUeXBlLFxuICAgIFpvZFNjaGVtYTogWm9kVHlwZSxcbiAgICBsYXRlOiBsYXRlLFxuICAgIGdldCBab2RGaXJzdFBhcnR5VHlwZUtpbmQgKCkgeyByZXR1cm4gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kOyB9LFxuICAgIGNvZXJjZTogY29lcmNlLFxuICAgIGFueTogYW55VHlwZSxcbiAgICBhcnJheTogYXJyYXlUeXBlLFxuICAgIGJpZ2ludDogYmlnSW50VHlwZSxcbiAgICBib29sZWFuOiBib29sZWFuVHlwZSxcbiAgICBkYXRlOiBkYXRlVHlwZSxcbiAgICBkaXNjcmltaW5hdGVkVW5pb246IGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUsXG4gICAgZWZmZWN0OiBlZmZlY3RzVHlwZSxcbiAgICAnZW51bSc6IGVudW1UeXBlLFxuICAgICdmdW5jdGlvbic6IGZ1bmN0aW9uVHlwZSxcbiAgICAnaW5zdGFuY2VvZic6IGluc3RhbmNlT2ZUeXBlLFxuICAgIGludGVyc2VjdGlvbjogaW50ZXJzZWN0aW9uVHlwZSxcbiAgICBsYXp5OiBsYXp5VHlwZSxcbiAgICBsaXRlcmFsOiBsaXRlcmFsVHlwZSxcbiAgICBtYXA6IG1hcFR5cGUsXG4gICAgbmFuOiBuYW5UeXBlLFxuICAgIG5hdGl2ZUVudW06IG5hdGl2ZUVudW1UeXBlLFxuICAgIG5ldmVyOiBuZXZlclR5cGUsXG4gICAgJ251bGwnOiBudWxsVHlwZSxcbiAgICBudWxsYWJsZTogbnVsbGFibGVUeXBlLFxuICAgIG51bWJlcjogbnVtYmVyVHlwZSxcbiAgICBvYmplY3Q6IG9iamVjdFR5cGUsXG4gICAgb2Jvb2xlYW46IG9ib29sZWFuLFxuICAgIG9udW1iZXI6IG9udW1iZXIsXG4gICAgb3B0aW9uYWw6IG9wdGlvbmFsVHlwZSxcbiAgICBvc3RyaW5nOiBvc3RyaW5nLFxuICAgIHBpcGVsaW5lOiBwaXBlbGluZVR5cGUsXG4gICAgcHJlcHJvY2VzczogcHJlcHJvY2Vzc1R5cGUsXG4gICAgcHJvbWlzZTogcHJvbWlzZVR5cGUsXG4gICAgcmVjb3JkOiByZWNvcmRUeXBlLFxuICAgIHNldDogc2V0VHlwZSxcbiAgICBzdHJpY3RPYmplY3Q6IHN0cmljdE9iamVjdFR5cGUsXG4gICAgc3RyaW5nOiBzdHJpbmdUeXBlLFxuICAgIHN5bWJvbDogc3ltYm9sVHlwZSxcbiAgICB0cmFuc2Zvcm1lcjogZWZmZWN0c1R5cGUsXG4gICAgdHVwbGU6IHR1cGxlVHlwZSxcbiAgICAndW5kZWZpbmVkJzogdW5kZWZpbmVkVHlwZSxcbiAgICB1bmlvbjogdW5pb25UeXBlLFxuICAgIHVua25vd246IHVua25vd25UeXBlLFxuICAgICd2b2lkJzogdm9pZFR5cGUsXG4gICAgTkVWRVI6IE5FVkVSLFxuICAgIFpvZElzc3VlQ29kZTogWm9kSXNzdWVDb2RlLFxuICAgIHF1b3RlbGVzc0pzb246IHF1b3RlbGVzc0pzb24sXG4gICAgWm9kRXJyb3I6IFpvZEVycm9yXG59KTtcblxuZXhwb3J0IHsgQlJBTkQsIERJUlRZLCBFTVBUWV9QQVRILCBJTlZBTElELCBORVZFUiwgT0ssIFBhcnNlU3RhdHVzLCBab2RUeXBlIGFzIFNjaGVtYSwgWm9kQW55LCBab2RBcnJheSwgWm9kQmlnSW50LCBab2RCb29sZWFuLCBab2RCcmFuZGVkLCBab2RDYXRjaCwgWm9kRGF0ZSwgWm9kRGVmYXVsdCwgWm9kRGlzY3JpbWluYXRlZFVuaW9uLCBab2RFZmZlY3RzLCBab2RFbnVtLCBab2RFcnJvciwgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLCBab2RGdW5jdGlvbiwgWm9kSW50ZXJzZWN0aW9uLCBab2RJc3N1ZUNvZGUsIFpvZExhenksIFpvZExpdGVyYWwsIFpvZE1hcCwgWm9kTmFOLCBab2ROYXRpdmVFbnVtLCBab2ROZXZlciwgWm9kTnVsbCwgWm9kTnVsbGFibGUsIFpvZE51bWJlciwgWm9kT2JqZWN0LCBab2RPcHRpb25hbCwgWm9kUGFyc2VkVHlwZSwgWm9kUGlwZWxpbmUsIFpvZFByb21pc2UsIFpvZFJlY29yZCwgWm9kVHlwZSBhcyBab2RTY2hlbWEsIFpvZFNldCwgWm9kU3RyaW5nLCBab2RTeW1ib2wsIFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIsIFpvZFR1cGxlLCBab2RUeXBlLCBab2RVbmRlZmluZWQsIFpvZFVuaW9uLCBab2RVbmtub3duLCBab2RWb2lkLCBhZGRJc3N1ZVRvQ29udGV4dCwgYW55VHlwZSBhcyBhbnksIGFycmF5VHlwZSBhcyBhcnJheSwgYmlnSW50VHlwZSBhcyBiaWdpbnQsIGJvb2xlYW5UeXBlIGFzIGJvb2xlYW4sIGNvZXJjZSwgY3VzdG9tLCBkYXRlVHlwZSBhcyBkYXRlLCBtb2QgYXMgZGVmYXVsdCwgZXJyb3JNYXAgYXMgZGVmYXVsdEVycm9yTWFwLCBkaXNjcmltaW5hdGVkVW5pb25UeXBlIGFzIGRpc2NyaW1pbmF0ZWRVbmlvbiwgZWZmZWN0c1R5cGUgYXMgZWZmZWN0LCBlbnVtVHlwZSBhcyBlbnVtLCBmdW5jdGlvblR5cGUgYXMgZnVuY3Rpb24sIGdldEVycm9yTWFwLCBnZXRQYXJzZWRUeXBlLCBpbnN0YW5jZU9mVHlwZSBhcyBpbnN0YW5jZW9mLCBpbnRlcnNlY3Rpb25UeXBlIGFzIGludGVyc2VjdGlvbiwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBsYXRlLCBsYXp5VHlwZSBhcyBsYXp5LCBsaXRlcmFsVHlwZSBhcyBsaXRlcmFsLCBtYWtlSXNzdWUsIG1hcFR5cGUgYXMgbWFwLCBuYW5UeXBlIGFzIG5hbiwgbmF0aXZlRW51bVR5cGUgYXMgbmF0aXZlRW51bSwgbmV2ZXJUeXBlIGFzIG5ldmVyLCBudWxsVHlwZSBhcyBudWxsLCBudWxsYWJsZVR5cGUgYXMgbnVsbGFibGUsIG51bWJlclR5cGUgYXMgbnVtYmVyLCBvYmplY3RUeXBlIGFzIG9iamVjdCwgb2JqZWN0VXRpbCwgb2Jvb2xlYW4sIG9udW1iZXIsIG9wdGlvbmFsVHlwZSBhcyBvcHRpb25hbCwgb3N0cmluZywgcGlwZWxpbmVUeXBlIGFzIHBpcGVsaW5lLCBwcmVwcm9jZXNzVHlwZSBhcyBwcmVwcm9jZXNzLCBwcm9taXNlVHlwZSBhcyBwcm9taXNlLCBxdW90ZWxlc3NKc29uLCByZWNvcmRUeXBlIGFzIHJlY29yZCwgc2V0VHlwZSBhcyBzZXQsIHNldEVycm9yTWFwLCBzdHJpY3RPYmplY3RUeXBlIGFzIHN0cmljdE9iamVjdCwgc3RyaW5nVHlwZSBhcyBzdHJpbmcsIHN5bWJvbFR5cGUgYXMgc3ltYm9sLCBlZmZlY3RzVHlwZSBhcyB0cmFuc2Zvcm1lciwgdHVwbGVUeXBlIGFzIHR1cGxlLCB1bmRlZmluZWRUeXBlIGFzIHVuZGVmaW5lZCwgdW5pb25UeXBlIGFzIHVuaW9uLCB1bmtub3duVHlwZSBhcyB1bmtub3duLCB1dGlsLCB2b2lkVHlwZSBhcyB2b2lkLCBtb2QgYXMgeiB9O1xuIiwiaW1wb3J0IHogZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgVmFsaWRhdGlvblR5cGVWYWxpZGF0b3IgPSB6LmVudW0oW1xuICAgICdyZXF1aXJlZCcsXG4gICAgJ2VtYWlsJyxcbiAgICAnbnVtYmVyJyxcbiAgICAnY29kZScsXG5dKVxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvblR5cGUgPSAncmVxdWlyZWQnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ2NvZGUnXG5cbmV4cG9ydCBjb25zdCBXaXRoT3B0aW9uVmFsaWRhdG9yID0gei5yZWNvcmQoVmFsaWRhdGlvblR5cGVWYWxpZGF0b3IpXG5leHBvcnQgdHlwZSBXaXRoT3B0aW9uID0gUmVjb3JkPHN0cmluZywgVmFsaWRhdGlvblR5cGU+XG5cbmV4cG9ydCBjb25zdCBNb2RlT3B0aW9uVmFsaWRhdG9yID0gei5lbnVtKFsnb3InLCAnYW5kJ10pXG5leHBvcnQgdHlwZSBNb2RlT3B0aW9uID0gJ29yJyB8ICdhbmQnXG5cbmV4cG9ydCBjb25zdCBMaW1pdGF0aW9uT3B0aW9uVmFsaWRhdG9yID0gei5udWxsYWJsZSh6LmVudW0oWydudW1iZXInLCAnY29kZSddKSlcbmV4cG9ydCB0eXBlIExpbWl0YXRpb25PcHRpb24gPSAnbnVtYmVyJyB8ICdjb2RlJyB8IG51bGxcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRpb25PcHRpb25WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgdHlwZTogVmFsaWRhdGlvblR5cGVWYWxpZGF0b3IsXG4gICAgbW9kZTogTW9kZU9wdGlvblZhbGlkYXRvci5vcHRpb25hbCgpLFxuICAgIHdpdGg6IFdpdGhPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICBpZjogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICAgIG1vZGU6IE1vZGVPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICAgICAgICAgIHRhcmdldDogei5yZWNvcmQoei5zdHJpbmcoKSksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uT3B0aW9uID0ge1xuICAgIHR5cGU6IFZhbGlkYXRpb25UeXBlXG4gICAgbW9kZT86IE1vZGVPcHRpb25cbiAgICB3aXRoPzogV2l0aE9wdGlvblxuICAgIGlmPzoge1xuICAgICAgICBtb2RlPzogTW9kZU9wdGlvblxuICAgICAgICB0YXJnZXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICB9XG4gICAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgUnVsZVZhbGlkYXRvciA9IHouYXJyYXkoXG4gICAgei5vYmplY3Qoe1xuICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBsaW1pdDogTGltaXRhdGlvbk9wdGlvblZhbGlkYXRvci5vcHRpb25hbCgpLFxuICAgICAgICB2YWxpZGF0aW9uOiB6XG4gICAgICAgICAgICAudW5pb24oW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRpb25PcHRpb25WYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgei5hcnJheShWYWxpZGF0aW9uT3B0aW9uVmFsaWRhdG9yKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAub3B0aW9uYWwoKSxcbiAgICB9KVxuKVxuZXhwb3J0IHR5cGUgUnVsZSA9IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsaW1pdD86IExpbWl0YXRpb25PcHRpb25cbiAgICB2YWxpZGF0aW9uPzogVmFsaWRhdGlvbk9wdGlvbiB8IFZhbGlkYXRpb25PcHRpb25bXVxufVtdXG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0ZWRFcnJvclZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICB0eXBlOiB6LnN0cmluZygpLFxuICAgIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFcnJvciA9IHsgdHlwZTogc3RyaW5nOyBtZXNzYWdlPzogc3RyaW5nIH1cblxuZXhwb3J0IGNvbnN0IFBhcmFtVmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICAgIHJ1bGVzOiBSdWxlVmFsaWRhdG9yLFxuICAgIGVycm9yX2NsYXNzOiB6LnN0cmluZygpLFxuICAgIGVycm9yX21lc3NhZ2VfY2xhc3M6IHouc3RyaW5nKCksXG4gICAgZW1wdHlfZXJyb3JfbWVzc2FnZV9jbGFzczogei5zdHJpbmcoKSxcbiAgICB2YWxpZF9jbGFzczogei5zdHJpbmcoKSxcbiAgICBpbml0aWFsX2Vycm9yX3ZpZXc6IHouYm9vbGVhbigpLFxuICAgIHN1Ym1pdF9idXR0b246IHpcbiAgICAgICAgLnVuaW9uKFtcbiAgICAgICAgICAgIHouc3RyaW5nKCksXG4gICAgICAgICAgICB6Lmluc3RhbmNlb2YoSFRNTElucHV0RWxlbWVudCksXG4gICAgICAgICAgICB6Lmluc3RhbmNlb2YoSFRNTEJ1dHRvbkVsZW1lbnQpLFxuICAgICAgICBdKVxuICAgICAgICAub3B0aW9uYWwoKSxcbiAgICBvbl92YWxpZGF0ZTogei5mdW5jdGlvbigpLnJldHVybnMoei52b2lkKCkpLm9wdGlvbmFsKCksXG4gICAgb25fc3VjY2Vzczogei5mdW5jdGlvbigpLnJldHVybnMoei52b2lkKCkpLm9wdGlvbmFsKCksXG4gICAgb25fZXJyb3I6IHpcbiAgICAgICAgLmZ1bmN0aW9uKClcbiAgICAgICAgLmFyZ3Moei5yZWNvcmQoei5hcnJheShWYWxpZGF0ZWRFcnJvclZhbGlkYXRvcikpKVxuICAgICAgICAucmV0dXJucyh6LnZvaWQoKSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG59KVxuZXhwb3J0IHR5cGUgUGFyYW0gPSB7XG4gICAgcnVsZXM6IFJ1bGVcbiAgICBlcnJvcl9jbGFzczogc3RyaW5nXG4gICAgZXJyb3JfbWVzc2FnZV9jbGFzczogc3RyaW5nXG4gICAgZW1wdHlfZXJyb3JfbWVzc2FnZV9jbGFzczogc3RyaW5nXG4gICAgdmFsaWRfY2xhc3M6IHN0cmluZ1xuICAgIGluaXRpYWxfZXJyb3JfdmlldzogYm9vbGVhblxuICAgIHN1Ym1pdF9idXR0b24/OiBzdHJpbmcgfCBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICBvbl92YWxpZGF0ZT86ICgpID0+IHZvaWRcbiAgICBvbl9zdWNjZXNzPzogKCkgPT4gdm9pZFxuICAgIG9uX2Vycm9yPzogKGVycm9yczogUmVjb3JkPHN0cmluZywgVmFsaWRhdGVkRXJyb3JbXT4pID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEluaXRpYWxQYXJhbVZhbGlkYXRvciA9IFBhcmFtVmFsaWRhdG9yLnBhcnRpYWwoe1xuICAgIGVycm9yX2NsYXNzOiB0cnVlLFxuICAgIGVycm9yX21lc3NhZ2VfY2xhc3M6IHRydWUsXG4gICAgZW1wdHlfZXJyb3JfbWVzc2FnZV9jbGFzczogdHJ1ZSxcbiAgICB2YWxpZF9jbGFzczogdHJ1ZSxcbiAgICBpbml0aWFsX2Vycm9yX3ZpZXc6IHRydWUsXG59KVxuZXhwb3J0IHR5cGUgSW5pdGlhbFBhcmFtID0gUGFydGlhbDxQYXJhbT4gJiB7IHJ1bGVzOiBSdWxlIH1cblxuZXhwb3J0IGNvbnN0IFJvb3RFdmVudFZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICB2YWxpZGF0ZTogei5mdW5jdGlvbigpLnJldHVybnMoei52b2lkKCkpLFxufSlcbmV4cG9ydCB0eXBlIFJvb3RFdmVudCA9IHtcbiAgICB2YWxpZGF0ZTogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgVGFyZ2V0VmFsaWRhdG9yID0gei5yZWNvcmQoei5pbnN0YW5jZW9mKEhUTUxFbGVtZW50KSlcbmV4cG9ydCB0eXBlIFRhcmdldCA9IFJlY29yZDxzdHJpbmcsIEhUTUxFbGVtZW50PlxuXG5leHBvcnQgY29uc3QgRm9ybUVsZW1lbnRWYWxpZGF0b3IgPSB6LnVuaW9uKFtcbiAgICB6LnN0cmluZygpLFxuICAgIHouaW5zdGFuY2VvZihIVE1MRm9ybUVsZW1lbnQpLFxuXSlcbmV4cG9ydCB0eXBlIEZvcm1FbGVtZW50ID0gc3RyaW5nIHwgSFRNTEZvcm1FbGVtZW50XG5cbmV4cG9ydCBjb25zdCBGaWVsZEVsZW1lbnRWYWxpZGF0b3IgPSB6LnVuaW9uKFtcbiAgICB6Lmluc3RhbmNlb2YoSFRNTElucHV0RWxlbWVudCksXG4gICAgei5pbnN0YW5jZW9mKEhUTUxTZWxlY3RFbGVtZW50KSxcbiAgICB6Lmluc3RhbmNlb2YoSFRNTFRleHRBcmVhRWxlbWVudCksXG5dKVxuZXhwb3J0IHR5cGUgRmllbGRFbGVtZW50ID1cbiAgICB8IEhUTUxJbnB1dEVsZW1lbnRcbiAgICB8IEhUTUxTZWxlY3RFbGVtZW50XG4gICAgfCBIVE1MVGV4dEFyZWFFbGVtZW50XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgcnVsZSA9IHouc3RyaW5nKCkudHJpbSgpLm1pbigxKVxuXG4vKipcbiAqIENoZWNrIHJlcXVpcmVkIG9mIHRhcmdldCBmaWVsZCBlbGVtZW50J3MgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT4gcHJldiAmJiBydWxlLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IHJ1bGUgYXMgcnVsZVJlcXVpcmVkIH0gZnJvbSAnLi9SZXF1aXJlZCdcblxuZXhwb3J0IGNvbnN0IHJ1bGUgPSB6LnN0cmluZygpLmVtYWlsKClcblxuLyoqXG4gKiBDaGVjayBFbWFpbCBmb3JtYXQgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrID0gKHZhbHVlczogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICBpZiAoIXByZXYgfHwgIXJ1bGVSZXF1aXJlZC5zYWZlUGFyc2UoY3VycmVudCkuc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2ICYmIHJ1bGUuc2FmZVBhcnNlKGN1cnJlbnQpLnN1Y2Nlc3NcbiAgICB9LCB0cnVlKVxufVxuIiwiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuZXhwb3J0IGNvbnN0IHJ1bGUgPSB6LmNvZXJjZS5udW1iZXIoKVxuXG4vKipcbiAqIENoZWNrIG51bWVyaWMgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdmFsdWVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrID0gKHZhbHVlczogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShcbiAgICAgICAgKHByZXYsIGN1cnJlbnQpID0+IHByZXYgJiYgcnVsZS5zYWZlUGFyc2UoY3VycmVudCkuc3VjY2VzcyxcbiAgICAgICAgdHJ1ZVxuICAgIClcbn1cbiIsImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBydWxlIGFzIHJ1bGVSZXF1aXJlZCB9IGZyb20gJy4vUmVxdWlyZWQnXG5cbmNvbnN0IHJ1bGUgPSB6LmNvZXJjZS5zdHJpbmcoKS5yZWdleCgvXlswLTktKypdKiQvKVxuXG4vKipcbiAqIENoZWNrIGNvZGUgZm9ybWF0IG9mIHRhcmdldCBmaWVsZCBlbGVtZW50J3MgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHZhbHVlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgaWYgKCFwcmV2IHx8ICFydWxlUmVxdWlyZWQuc2FmZVBhcnNlKGN1cnJlbnQpLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldiAmJiBydWxlLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzXG4gICAgfSwgdHJ1ZSlcbn1cbiIsIi8qKlxuICogQ29udmVydCB0byBudW1iZXIgZm9ybWF0IHBvc3NpYmlseVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgLy8gRnVsbCB3aWR0aCB0byBIYWxmIHdpZHRoIGNoYXJhY3RlcnNcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1vvvKEt77y6772BLe+9mu+8kC3vvJldL2csIChzKSA9PlxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSAtIDB4ZmVlMClcbiAgICApXG5cbiAgICAvLyBSZW1vdmUgdGV4dCBleGNlcHQgZm9yIG51bWJlcnNcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJylcblxuICAgIHJldHVybiB2YWx1ZVxufVxuIiwiLyoqXG4gKiBDb252ZXJ0IHRvIGNvZGUgZm9ybWF0IHBvc3NpYmlseVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgLy8gRnVsbCB3aWR0aCB0byBIYWxmIHdpZHRoIGNoYXJhY3RlcnNcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1vvvKEt77y6772BLe+9mu+8kC3vvJldL2csIChzKSA9PlxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHMuY2hhckNvZGVBdCgwKSAtIDB4ZmVlMClcbiAgICApXG5cbiAgICAvLyBDb252ZXJ0IGRhc2hcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1viiJLjg7zjg7zigJVdL2csICctJylcblxuICAgIC8vIENvbnZlcnQgUGx1c1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW++8i10vZywgJysnKVxuXG4gICAgLy8gQ29udmVydCBhc3Rlcmlza1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW++8il0vZywgJyonKVxuXG4gICAgLy8gUmVtb3ZlIHRleHQgZXhjZXB0IGZvciBudW1iZXJzXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOS0rKl0vZywgJycpXG5cbiAgICByZXR1cm4gdmFsdWVcbn1cbiIsImltcG9ydCB7IGNvbnZlcnQgYXMgbnVtYmVyQ29udmVydCB9IGZyb20gJy4uL2NvbnZlcnQvTnVtYmVyJ1xuaW1wb3J0IHsgY29udmVydCBhcyBjb2RlQ29udmVydCB9IGZyb20gJy4uL2NvbnZlcnQvQ29kZSdcbmltcG9ydCB7IExpbWl0YXRpb25PcHRpb24sIEZpZWxkRWxlbWVudCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaXNDaGVja0ZpZWxkID0gKGVsOiBGaWVsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIHJldHVybiB0YWcgPT09ICdpbnB1dCcgJiYgKHR5cGUgPT09ICdyYWRpbycgfHwgdHlwZSA9PT0gJ2NoZWNrYm94Jylcbn1cblxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnQgPSAoZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghT2JqZWN0Lmhhc093bihmb3JtRWwsIG5hbWUpKSB7XG4gICAgICAgIGlmICghT2JqZWN0Lmhhc093bihmb3JtRWwsIGAke25hbWV9W11gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGAke25hbWV9W11gXG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0gZm9ybUVsW25hbWVdXG5cbiAgICBpZiAoZmllbGRzWydlbnRyaWVzJ10pIHtcbiAgICAgICAgcmV0dXJuIFsuLi5maWVsZHNdIGFzIEZpZWxkRWxlbWVudFtdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtmaWVsZHNdIGFzIEZpZWxkRWxlbWVudFtdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVzID0gKFxuICAgIGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSxcbiAgICBsaW1pdDogTGltaXRhdGlvbk9wdGlvbiA9IG51bGxcbikgPT4ge1xuICAgIGNvbnN0IHZhbHVlczogc3RyaW5nW10gPSBbXVxuXG4gICAgZWxlbWVudHMubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoaXNDaGVja0ZpZWxkKGVsKSkge1xuICAgICAgICAgICAgaWYgKChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICAgICAgZWwudmFsdWUgPSBudW1iZXJDb252ZXJ0KGVsLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IGNvZGVDb252ZXJ0KGVsLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsdWVzXG59XG4iLCJpbXBvcnQge1xuICAgIExpbWl0YXRpb25PcHRpb24sXG4gICAgRmllbGRFbGVtZW50LFxuICAgIFZhbGlkYXRpb25PcHRpb24sXG4gICAgVmFsaWRhdGVkRXJyb3IsXG4gICAgVmFsaWRhdGlvblR5cGUsXG59IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBjaGVjayBhcyBjaGVja1JlcXVpcmVkIH0gZnJvbSAnLi9SZXF1aXJlZCdcbmltcG9ydCB7IGNoZWNrIGFzIGNoZWNrRW1haWwgfSBmcm9tICcuL0VtYWlsJ1xuaW1wb3J0IHsgY2hlY2sgYXMgY2hlY2tOdW1iZXIgfSBmcm9tICcuL051bWJlcidcbmltcG9ydCB7IGNoZWNrIGFzIGNoZWNrQ29kZSB9IGZyb20gJy4vQ29kZSdcbmltcG9ydCB7IGdldEVsZW1lbnQsIGdldFZhbHVlcyB9IGZyb20gJy4uL3V0aWxzL1RhZydcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICAgIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LFxuICAgIGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSxcbiAgICBsaW1pdDogTGltaXRhdGlvbk9wdGlvbixcbiAgICB2YWxpZGF0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdIHwgbnVsbFxuKSA9PiB7XG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0ZWRFcnJvcltdID0gW11cbiAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZXMoZWxlbWVudHMsIGxpbWl0KVxuXG4gICAgaWYgKCF2YWxpZGF0aW9ucykge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgdmFsaWRhdGlvbnMubWFwKCh2YWxpZGF0aW9uKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2tJZihmb3JtRWwsIHZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLndpdGgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGlvbi5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU11bHRpcGxlT3IoZm9ybUVsLCB2YWxpZGF0aW9uLCBlcnJvcnMsIHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlTXVsdGlwbGVBbmQoZm9ybUVsLCB2YWxpZGF0aW9uLCBlcnJvcnMsIHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlU2luZ2xlKHZhbGlkYXRpb24sIGVycm9ycywgdmFsdWVzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgY2hlY2tJZiA9IChmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCwgdmFsaWRhdGlvbjogVmFsaWRhdGlvbk9wdGlvbikgPT4ge1xuICAgIGxldCByZXN1bHQgPSB0cnVlXG5cbiAgICBpZiAoIXZhbGlkYXRpb24uaWYpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb24uaWYudGFyZ2V0KS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKCF2YWxpZGF0aW9uLmlmKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlmVGFyZ2V0ID0gdmFsaWRhdGlvbi5pZi50YXJnZXRbbmFtZV1cbiAgICAgICAgY29uc3QgaWZFbGVtZW50ID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG4gICAgICAgIGNvbnN0IGlmVmFsdWUgPSBnZXRWYWx1ZXMoaWZFbGVtZW50KVxuXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLmlmLm1vZGUgPT09ICdvcicpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBpZlZhbHVlLmluY2x1ZGVzKGlmVGFyZ2V0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGlmVmFsdWUuaW5jbHVkZXMoaWZUYXJnZXQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjaGVja1ZhbGlkYXRlID0gKHJ1bGVUeXBlOiBWYWxpZGF0aW9uVHlwZSwgdmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHN3aXRjaCAocnVsZVR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQodmFsdWVzKVxuICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tFbWFpbCh2YWx1ZXMpXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tOdW1iZXIodmFsdWVzKVxuICAgICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgICAgIHJldHVybiBjaGVja0NvZGUodmFsdWVzKVxuICAgIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTaW5nbGUgPSAoXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbk9wdGlvbixcbiAgICBlcnJvcnM6IFZhbGlkYXRlZEVycm9yW10sXG4gICAgdmFsdWVzOiBzdHJpbmdbXVxuKSA9PiB7XG4gICAgaWYgKCFjaGVja1ZhbGlkYXRlKHZhbGlkYXRpb24udHlwZSwgdmFsdWVzKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiB2YWxpZGF0aW9uLnR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiB2YWxpZGF0aW9uLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCB2YWxpZGF0ZU11bHRpcGxlT3IgPSAoXG4gICAgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsXG4gICAgdmFsaWRhdGlvbjogVmFsaWRhdGlvbk9wdGlvbixcbiAgICBlcnJvcnM6IFZhbGlkYXRlZEVycm9yW10sXG4gICAgdmFsdWVzOiBzdHJpbmdbXVxuKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGNoZWNrVmFsaWRhdGUodmFsaWRhdGlvbi50eXBlLCB2YWx1ZXMpXG5cbiAgICBpZiAodmFsaWRhdGlvbi53aXRoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb24ud2l0aCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24ud2l0aCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3aXRoVHlwZSA9IHZhbGlkYXRpb24ud2l0aFtuYW1lXVxuICAgICAgICAgICAgY29uc3Qgd2l0aEVsZW1lbnRzID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG4gICAgICAgICAgICBjb25zdCB3aXRoVmFsdWVzID0gZ2V0VmFsdWVzKHdpdGhFbGVtZW50cylcblxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGNoZWNrVmFsaWRhdGUod2l0aFR5cGUsIHdpdGhWYWx1ZXMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogdmFsaWRhdGlvbi50eXBlLFxuICAgICAgICAgICAgbWVzc2FnZTogdmFsaWRhdGlvbi5tZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgdmFsaWRhdGVNdWx0aXBsZUFuZCA9IChcbiAgICBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCxcbiAgICB2YWxpZGF0aW9uOiBWYWxpZGF0aW9uT3B0aW9uLFxuICAgIGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSxcbiAgICB2YWx1ZXM6IHN0cmluZ1tdXG4pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gY2hlY2tWYWxpZGF0ZSh2YWxpZGF0aW9uLnR5cGUsIHZhbHVlcylcblxuICAgIGlmICh2YWxpZGF0aW9uLndpdGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsaWRhdGlvbi53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbi53aXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdpdGhUeXBlID0gdmFsaWRhdGlvbi53aXRoW25hbWVdXG4gICAgICAgICAgICBjb25zdCB3aXRoRWxlbWVudHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgIGNvbnN0IHdpdGhWYWx1ZXMgPSBnZXRWYWx1ZXMod2l0aEVsZW1lbnRzKVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgY2hlY2tWYWxpZGF0ZSh3aXRoVHlwZSwgd2l0aFZhbHVlcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiB2YWxpZGF0aW9uLnR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiB2YWxpZGF0aW9uLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgdmFsaWRhdGUgYXMgZXhlY1ZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdGUnXG5cbmltcG9ydCB7XG4gICAgUGFyYW0sXG4gICAgRmllbGRFbGVtZW50LFxuICAgIFZhbGlkYXRlZEVycm9yLFxuICAgIFZhbGlkYXRpb25PcHRpb24sXG4gICAgTGltaXRhdGlvbk9wdGlvbixcbn0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBnZXRFbGVtZW50LCBpc0NoZWNrRmllbGQgfSBmcm9tICcuLi91dGlscy9UYWcnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKFxuICAgIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsaW1pdDogTGltaXRhdGlvbk9wdGlvbixcbiAgICB2YWxpZGF0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdIHwgbnVsbCxcbiAgICBwYXJhbXM6IFBhcmFtLFxuICAgIGVycm9yczogeyBba2V5OiBzdHJpbmddOiBWYWxpZGF0ZWRFcnJvcltdIH1cbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG5cbiAgICBjb25zdCB3aXRoRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBGaWVsZEVsZW1lbnRbXSA9IFtdXG5cbiAgICAgICAgaWYgKCF2YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRpb25zLm1hcCgodmFsaWRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLndpdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsaWRhdGlvbi53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4uZmllbGRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0pKClcblxuICAgIGNvbnN0IGlmRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBGaWVsZEVsZW1lbnRbXSA9IFtdXG5cbiAgICAgICAgaWYgKCF2YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRpb25zLm1hcCgodmFsaWRhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLmlmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb24uaWYudGFyZ2V0KS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4uZmllbGRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0pKClcblxuICAgIGlmICghZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBOb3QgZm91bmQgdGFyZ2V0IGZpZWxkIGVsZW1lbnQ6ICR7bmFtZX1gKVxuICAgIH1cblxuICAgIC8vIFByZXBhcmUgb3IgRmluZCBlcnJvciBtZXNzYWdlIGZpZWxkXG4gICAgY29uc3QgbWVzc2FnZUZpZWxkID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCF2YWxpZGF0aW9ucyB8fCAhdmFsaWRhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWlucHV0Zm9sbG93LWVycm9yPVwiJHtuYW1lfVwiXWBcbiAgICAgICAgKVxuICAgICAgICBpZiAoZXhpc3RGaWVsZCkge1xuICAgICAgICAgICAgZXhpc3RGaWVsZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAgIHBhcmFtcy5lcnJvcl9tZXNzYWdlX2NsYXNzLFxuICAgICAgICAgICAgICAgIHBhcmFtcy5lbXB0eV9lcnJvcl9tZXNzYWdlX2NsYXNzXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RGaWVsZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICBhZGRpdGlvbmFsRmllbGQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgIHBhcmFtcy5lcnJvcl9tZXNzYWdlX2NsYXNzLFxuICAgICAgICAgICAgcGFyYW1zLmVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3NcbiAgICAgICAgKVxuICAgICAgICBhZGRpdGlvbmFsRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0Zm9sbG93LWVycm9yJywgbmFtZSlcbiAgICAgICAgZWxlbWVudHNbMF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGFkZGl0aW9uYWxGaWVsZClcblxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbEZpZWxkXG4gICAgfSkoKVxuXG4gICAgY29uc3QgYWRkSW52YWxpZENsYXNzID0gKF9lbGVtZW50czogRmllbGRFbGVtZW50W10sIHJlbmRlcjogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnZhbGlkX2NsYXNzKSB7XG4gICAgICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy52YWxpZF9jbGFzcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmVycm9yX2NsYXNzKSB7XG4gICAgICAgICAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLmVycm9yX2NsYXNzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRWYWxpZENsYXNzID0gKF9lbGVtZW50czogRmllbGRFbGVtZW50W10pID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5lcnJvcl9jbGFzcykge1xuICAgICAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMuZXJyb3JfY2xhc3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMudmFsaWRfY2xhc3MpIHtcbiAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLnZhbGlkX2NsYXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRlID0gKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSwgaWdub3JlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW5kZXJFcnJvciA9XG4gICAgICAgICAgICAhaWdub3JlZCAmJiAoaW5pdCAhPT0gdHJ1ZSB8fCBwYXJhbXMuaW5pdGlhbF9lcnJvcl92aWV3KVxuXG4gICAgICAgIGVycm9yc1tuYW1lXSA9IGV4ZWNWYWxpZGF0ZShcbiAgICAgICAgICAgIGZvcm1FbCxcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgcmVuZGVyRXJyb3IgPyBsaW1pdCA6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0aW9uc1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKCF2YWxpZGF0aW9ucyB8fCAhdmFsaWRhdGlvbnMubGVuZ3RoIHx8ICFtZXNzYWdlRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgIGFkZEludmFsaWRDbGFzcyhlbGVtZW50cywgcmVuZGVyRXJyb3IpXG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3Mod2l0aEVsZW1lbnRzLCByZW5kZXJFcnJvcilcbiAgICAgICAgICAgIGFkZEludmFsaWRDbGFzcyhpZkVsZW1lbnRzLCByZW5kZXJFcnJvcilcblxuICAgICAgICAgICAgaWYgKHJlbmRlckVycm9yKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgZXJyb3JzW25hbWVdLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5lbXB0eV9lcnJvcl9tZXNzYWdlX2NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVmFsaWRDbGFzcyhlbGVtZW50cylcbiAgICAgICAgICAgIGFkZFZhbGlkQ2xhc3Mod2l0aEVsZW1lbnRzKVxuICAgICAgICAgICAgYWRkVmFsaWRDbGFzcyhpZkVsZW1lbnRzKVxuXG4gICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5lbXB0eV9lcnJvcl9tZXNzYWdlX2NsYXNzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzW25hbWVdLmxlbmd0aCA+IDBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRFcnJvcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzW25hbWVdXG4gICAgfVxuXG4gICAgY29uc3QgYWRkRXZlbnRzID0gKFxuICAgICAgICBfZWxlbWVudHM6IEZpZWxkRWxlbWVudFtdLFxuICAgICAgICB1c2VDYXB0dXJlOiBib29sZWFuID0gZmFsc2VcbiAgICApID0+IHtcbiAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDaGVja0ZpZWxkKGVsKSkge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXNlQ2FwdHVyZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUoZmFsc2UsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVzZUNhcHR1cmVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVzZUNhcHR1cmVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFkZEV2ZW50cyhlbGVtZW50cywgdHJ1ZSlcbiAgICBhZGRFdmVudHMod2l0aEVsZW1lbnRzLCBmYWxzZSlcbiAgICBhZGRFdmVudHMoaWZFbGVtZW50cywgZmFsc2UpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtRWwsXG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgdmFsaWRhdGlvbnMsXG4gICAgICAgIHZhbGlkYXRlLFxuICAgICAgICBoYXNFcnJvcixcbiAgICAgICAgZ2V0RXJyb3JzLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7XG4gICAgVmFsaWRhdGlvblR5cGUsXG4gICAgV2l0aE9wdGlvbixcbiAgICBNb2RlT3B0aW9uLFxuICAgIExpbWl0YXRpb25PcHRpb24sXG4gICAgVmFsaWRhdGlvbk9wdGlvbixcbiAgICBSdWxlLFxuICAgIFZhbGlkYXRlZEVycm9yLFxuICAgIFBhcmFtLFxuICAgIEluaXRpYWxQYXJhbSxcbiAgICBSb290RXZlbnQsXG4gICAgVGFyZ2V0LFxuICAgIEZvcm1FbGVtZW50LFxuICAgIEZpZWxkRWxlbWVudCxcbn0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHtcbiAgICBJbml0aWFsUGFyYW0sXG4gICAgSW5pdGlhbFBhcmFtVmFsaWRhdG9yLFxuICAgIFBhcmFtLFxuICAgIEZvcm1FbGVtZW50LFxuICAgIFZhbGlkYXRlZEVycm9yLFxuICAgIEZvcm1FbGVtZW50VmFsaWRhdG9yLFxufSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbW9kZWwvRWxlbWVudCdcblxuLyoqXG4gKiBJbnB1dEZvbGxvdyBjbGFzc1xuICpcbiAqIEByZW1hcmtzXG4gKiBZb3UgY2FuIHNlZSB7QGxpbmsgaHR0cHM6Ly9zdXNoYXQ0NjkyLmdpdGh1Yi5pby9pbnB1dGZvbGxvdy5qcy8gfCBEZW1vfS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dEZvbGxvdyA9IChmb3JtRWw6IEZvcm1FbGVtZW50LCBwYXJhbXM6IEluaXRpYWxQYXJhbSkgPT4ge1xuICAgIEZvcm1FbGVtZW50VmFsaWRhdG9yLnBhcnNlKGZvcm1FbClcbiAgICBJbml0aWFsUGFyYW1WYWxpZGF0b3IucGFyc2UocGFyYW1zKVxuXG4gICAgY29uc3QgdGFyZ2V0Rm9ybUVsZW1lbnQgPSAoKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydCBmb3JtRWwgdG8gSFRNTEZvcm1FbGVtZW50IGlmIGl0J3Mgc3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIGZvcm1FbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtRWwpXG5cbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCB0YXJnZXQgZm9ybSBlbGVtZW50OiAke2Zvcm1FbH1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWwgYXMgSFRNTEZvcm1FbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybUVsXG4gICAgfSkoKVxuXG4gICAgaWYgKHRhcmdldEZvcm1FbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2Zvcm0nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGFyZ2V0IGVsZW1lbnQgaXMgbm90IDxmb3JtPiBlbGVtZW50YClcbiAgICB9XG5cbiAgICB0YXJnZXRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgZmxhZyA9IHRydWVcblxuICAgICAgICB2YWxpZGF0ZSgpXG5cbiAgICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnNba2V5XVxuICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgZXJyb3IubGVuZ3RoIDw9IDBcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHN1Ym1pdCBidXR0b24gaWYgaXQncyBzcGVjaWZpZWRcbiAgICAgKi9cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtcy5zdWJtaXRfYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuc3VibWl0X2J1dHRvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy5zdWJtaXRfYnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5zdWJtaXRfYnV0dG9uXG4gICAgfSkoKVxuXG4gICAgLyoqXG4gICAgICogQXJyYW5nZWQgcGFyYW1zXG4gICAgICovXG4gICAgY29uc3QgYXJyYW5nZWRQYXJhbXM6IFBhcmFtID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgICBlcnJvcl9jbGFzczogJ2hhcy1lcnJvcicsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiAnaW5wdXRmb2xsb3ctZXJyb3InLFxuICAgICAgICAgICAgZW1wdHlfZXJyb3JfbWVzc2FnZV9jbGFzczogJ2lzLWVtcHR5JyxcbiAgICAgICAgICAgIHZhbGlkX2NsYXNzOiAnaXMtdmFsaWQnLFxuICAgICAgICAgICAgaW5pdGlhbF9lcnJvcl92aWV3OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgUHJveHkgZm9yIG9ic2VydmluZyBlcnJvcnMgdmFsdWVzXG4gICAgICovXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IFByb3h5PHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGVkRXJyb3JbXSB9PihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldDogKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpXG4gICAgICAgICAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZyA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhlcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yc1trZXldXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmxhZyAmJiBlcnJvci5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmFuZ2VkUGFyYW1zLm9uX3N1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJhbmdlZFBhcmFtcy5vbl9zdWNjZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyYW5nZWRQYXJhbXMub25fZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJhbmdlZFBhcmFtcy5vbl9lcnJvcihlcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIClcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmluZyBDaGVja2luZyBFbGVtZW50c1xuICAgICAqL1xuICAgIGNvbnN0IGVsZW1lbnRzOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVFbGVtZW50PltdID0gW11cbiAgICBhcnJhbmdlZFBhcmFtcy5ydWxlcy5tYXAoKHsgbmFtZSwgbGltaXQsIHZhbGlkYXRpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWxpZGF0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbdmFsaWRhdGlvbl1cbiAgICAgICAgfSkoKVxuXG4gICAgICAgIGNvbnN0IEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgdGFyZ2V0Rm9ybUVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGltaXQgPz8gbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRpb25zLFxuICAgICAgICAgICAgYXJyYW5nZWRQYXJhbXMsXG4gICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudHMucHVzaChFbGVtZW50KVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB2YWxpZGF0aW5nXG4gICAgICovXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoaW5pdDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC52YWxpZGF0ZShpbml0KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0eXBlb2YgYXJyYW5nZWRQYXJhbXMub25fdmFsaWRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLm9uX3ZhbGlkYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgdmFsaWRhdGVcbiAgICB2YWxpZGF0ZSh0cnVlKVxuXG4gICAgcmV0dXJuIHsgZm9ybUVsOiB0YXJnZXRGb3JtRWxlbWVudCwgZWxlbWVudHMsIHZhbGlkYXRlIH1cbn1cbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJhciIsIkFycmF5Iiwic2xpY2UiLCJjb25jYXQiLCJ1dGlsIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJtYXAiLCJlIiwia2V5cyIsIm9iamVjdCIsImtleSIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsInVuZGVmaW5lZCIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsImFycmF5Iiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiWm9kUGFyc2VkVHlwZSIsImdldFBhcnNlZFR5cGUiLCJkYXRhIiwic3RyaW5nIiwiaXNOYU4iLCJuYW4iLCJudW1iZXIiLCJiaWdpbnQiLCJzeW1ib2wiLCJpc0FycmF5IiwidGhlbiIsInByb21pc2UiLCJNYXAiLCJTZXQiLCJzZXQiLCJEYXRlIiwiZGF0ZSIsInVua25vd24iLCJab2RJc3N1ZUNvZGUiLCJxdW90ZWxlc3NKc29uIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiWm9kRXJyb3IiLCJpc3N1ZXMiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImN1cnIiLCJlbCIsInRlcm1pbmFsIiwiZm9ybUVycm9ycyIsImZsYXR0ZW4iLCJjcmVhdGUiLCJlcnJvck1hcCIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImN1c3RvbSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwic2V0RXJyb3JNYXAiLCJnZXRFcnJvck1hcCIsIm1ha2VJc3N1ZSIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJyZXZlcnNlIiwiX29iamVjdFNwcmVhZCIsIkVNUFRZX1BBVEgiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImN0eCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsIlBhcnNlU3RhdHVzIiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJJTlZBTElEIiwiZGlydHkiLCJwYWlycyIsInN5bmNQYWlycyIsInBhaXIiLCJtZXJnZU9iamVjdFN5bmMiLCJmaW5hbE9iamVjdCIsImFsd2F5c1NldCIsImZyZWV6ZSIsIkRJUlRZIiwiT0siLCJpc0Fib3J0ZWQiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImlzQXN5bmMiLCJQcm9taXNlIiwiZXJyb3JVdGlsIiwiZXJyVG9PYmoiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfcGF0aCIsIl9rZXkiLCJoYW5kbGVSZXN1bHQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicHJvY2Vzc0NyZWF0ZVBhcmFtcyIsImludmFsaWRfdHlwZV9lcnJvciIsInJlcXVpcmVkX2Vycm9yIiwiZGVzY3JpcHRpb24iLCJjdXN0b21NYXAiLCJpc3MiLCJab2RUeXBlIiwiZGVmIiwic3BhIiwic2FmZVBhcnNlQXN5bmMiLCJfZGVmIiwicGFyc2UiLCJiaW5kIiwic2FmZVBhcnNlIiwicGFyc2VBc3luYyIsInJlZmluZSIsInJlZmluZW1lbnQiLCJzdXBlclJlZmluZSIsIm9wdGlvbmFsIiwibnVsbGFibGUiLCJudWxsaXNoIiwib3IiLCJhbmQiLCJ0cmFuc2Zvcm0iLCJicmFuZCIsImRlc2NyaWJlIiwicGlwZSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwiaW5wdXQiLCJwYXJzZWRUeXBlIiwiX3BhcnNlIiwicmVzb2x2ZSIsIl9hIiwiYXN5bmMiLCJfcGFyc2VTeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnREYXRhIiwiWm9kRWZmZWN0cyIsInNjaGVtYSIsInR5cGVOYW1lIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiZWZmZWN0IiwiWm9kT3B0aW9uYWwiLCJab2ROdWxsYWJsZSIsIlpvZEFycmF5IiwiWm9kUHJvbWlzZSIsIm9wdGlvbiIsIlpvZFVuaW9uIiwiaW5jb21pbmciLCJab2RJbnRlcnNlY3Rpb24iLCJkZWZhdWx0VmFsdWVGdW5jIiwiWm9kRGVmYXVsdCIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsIlpvZEJyYW5kZWQiLCJjYXRjaFZhbHVlRnVuYyIsIlpvZENhdGNoIiwiY2F0Y2hWYWx1ZSIsIlRoaXMiLCJjb25zdHJ1Y3RvciIsInRhcmdldCIsIlpvZFBpcGVsaW5lIiwiY3VpZFJlZ2V4IiwiY3VpZDJSZWdleCIsInV1aWRSZWdleCIsImVtYWlsUmVnZXgiLCJkYXRldGltZVJlZ2V4IiwiYXJncyIsInByZWNpc2lvbiIsIm9mZnNldCIsIlJlZ0V4cCIsIlpvZFN0cmluZyIsIl9yZWdleCIsInJlZ2V4IiwidGVzdCIsIm5vbmVtcHR5IiwibWluIiwidHJpbSIsImNoZWNrcyIsImtpbmQiLCJjb2VyY2UiLCJTdHJpbmciLCJfZ2V0VHlwZSIsIl9nZXRPclJldHVybkN0eCIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsIl9hZGRDaGVjayIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImxlbiIsImNoIiwibWF4IiwiZmxvYXRTYWZlUmVtYWluZGVyIiwic3RlcCIsInZhbERlY0NvdW50Iiwic3BsaXQiLCJzdGVwRGVjQ291bnQiLCJkZWNDb3VudCIsInZhbEludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInN0ZXBJbnQiLCJwb3ciLCJab2ROdW1iZXIiLCJndGUiLCJsdGUiLCJzZXRMaW1pdCIsIlpvZEJpZ0ludCIsIkJpZ0ludCIsIlpvZEJvb2xlYW4iLCJCb29sZWFuIiwiWm9kRGF0ZSIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIlpvZFN5bWJvbCIsIlpvZFVuZGVmaW5lZCIsIlpvZE51bGwiLCJab2RBbnkiLCJfYW55IiwiWm9kVW5rbm93biIsIl91bmtub3duIiwiWm9kTmV2ZXIiLCJuZXZlciIsIlpvZFZvaWQiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJfcGFyc2VBc3luYyIsIm1lcmdlQXJyYXkiLCJvYmplY3RVdGlsIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsImRlZXBQYXJ0aWFsaWZ5IiwiWm9kT2JqZWN0IiwibmV3U2hhcGUiLCJzaGFwZSIsImZpZWxkU2NoZW1hIiwiZWxlbWVudCIsInVud3JhcCIsIlpvZFR1cGxlIiwiX2NhY2hlZCIsIm5vbnN0cmljdCIsInBhc3N0aHJvdWdoIiwiYXVnbWVudCIsImV4dGVuZCIsIl9nZXRDYWNoZWQiLCJzaGFwZUtleXMiLCJleHRyYUtleXMiLCJjYXRjaGFsbCIsInVua25vd25LZXlzIiwiaW5jbHVkZXMiLCJrZXlWYWxpZGF0b3IiLCJfYiIsIl9jIiwiX2QiLCJhdWdtZW50YXRpb24iLCJtZXJnaW5nIiwibWVyZ2VkIiwiaW5kZXgiLCJtYXNrIiwiZm9yRWFjaCIsIm5ld0ZpZWxkIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZEVudW0iLCJab2ROYXRpdmVFbnVtIiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJnZXQiLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwiaGFzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsImluZGV4T2YiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwiWm9kUmVjb3JkIiwia2V5VHlwZSIsInZhbHVlVHlwZSIsIm1lcmdlT2JqZWN0QXN5bmMiLCJ0aGlyZCIsIlpvZE1hcCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIlpvZFNldCIsIm1pblNpemUiLCJzaXplIiwibWF4U2l6ZSIsImZpbmFsaXplU2V0IiwiZWxlbWVudHMiLCJwYXJzZWRTZXQiLCJhZGQiLCJ2YWx1ZXMiLCJab2RGdW5jdGlvbiIsInZhbGlkYXRlIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJwYXJzZWRBcmdzIiwicGFyc2VkUmV0dXJucyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsImVudW1WYWx1ZXMiLCJvcHQiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwicHJvY2Vzc2VkIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsImFib3J0IiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInByZXByb2Nlc3MiLCJab2ROYU4iLCJCUkFORCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJvdXQiLCJwMiIsImxhdGUiLCJpbnN0YW5jZU9mVHlwZSIsImNscyIsInN0cmluZ1R5cGUiLCJudW1iZXJUeXBlIiwibmFuVHlwZSIsImJpZ0ludFR5cGUiLCJib29sZWFuVHlwZSIsImRhdGVUeXBlIiwic3ltYm9sVHlwZSIsInVuZGVmaW5lZFR5cGUiLCJudWxsVHlwZSIsImFueVR5cGUiLCJ1bmtub3duVHlwZSIsIm5ldmVyVHlwZSIsInZvaWRUeXBlIiwiYXJyYXlUeXBlIiwib2JqZWN0VHlwZSIsInN0cmljdE9iamVjdFR5cGUiLCJ1bmlvblR5cGUiLCJkaXNjcmltaW5hdGVkVW5pb25UeXBlIiwiaW50ZXJzZWN0aW9uVHlwZSIsInR1cGxlVHlwZSIsInJlY29yZFR5cGUiLCJtYXBUeXBlIiwic2V0VHlwZSIsImZ1bmN0aW9uVHlwZSIsImxhenlUeXBlIiwibGl0ZXJhbFR5cGUiLCJlbnVtVHlwZSIsIm5hdGl2ZUVudW1UeXBlIiwicHJvbWlzZVR5cGUiLCJlZmZlY3RzVHlwZSIsIm9wdGlvbmFsVHlwZSIsIm51bGxhYmxlVHlwZSIsInByZXByb2Nlc3NUeXBlIiwicGlwZWxpbmVUeXBlIiwib3N0cmluZyIsIm9udW1iZXIiLCJvYm9vbGVhbiIsIk5FVkVSIiwibW9kIiwiZGVmYXVsdEVycm9yTWFwIiwiWm9kVHJhbnNmb3JtZXIiLCJTY2hlbWEiLCJab2RTY2hlbWEiLCJhbnkiLCJkaXNjcmltaW5hdGVkVW5pb24iLCJpbnRlcnNlY3Rpb24iLCJsYXp5IiwibGl0ZXJhbCIsIm5hdGl2ZUVudW0iLCJwaXBlbGluZSIsInJlY29yZCIsInN0cmljdE9iamVjdCIsInRyYW5zZm9ybWVyIiwidHVwbGUiLCJ1bmlvbiIsInoiLCJydWxlIiwicnVsZVJlcXVpcmVkIiwiY29udmVydCIsIm51bWJlckNvbnZlcnQiLCJjb2RlQ29udmVydCIsImNoZWNrUmVxdWlyZWQiLCJjaGVja0VtYWlsIiwiY2hlY2tOdW1iZXIiLCJjaGVja0NvZGUiLCJleGVjVmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQTtFQUFBLGNBQUEsTUFBQTtFQUFBLFlBQUEsS0FBQSxFQUFBO0VBQUEsY0FBQSxRQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTtFQUFBLGNBQUEsTUFBQTtFQUFBLFlBQUEsS0FBQSxFQUFBO0VBQUEsY0FBQSxRQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTtFQUFBLGNBQUEsUUFBQSxDQUFBLEVBQUEsR0FBQSxRQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxjQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0VBQUEsWUFBQSxLQUFBLEVBQUE7RUFBQSxjQUFBLFFBQUEsQ0FBQSxJQUFBLEdBQUEsRUFBQSxDQUFBO0VBQUEsY0FBQSxVQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxjQUFBLE9BQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUFBLFlBQUEsS0FBQSxFQUFBO0VBQUEsY0FBQSxPQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxFQUtYMkgsV0FBVyxDQUFDUyxlQUFlLENBQUNSLE1BQU0sRUFBRU0sU0FBUyxDQUFDLENBQUEsQ0FBQTtFQUFBLFlBQUEsS0FBQSxFQUFBLENBQUE7RUFBQSxZQUFBLEtBQUEsS0FBQTtFQUFBLGNBQUEsT0FBQSxRQUFBLENBQUEsSUFBQSxFQUFBLENBQUE7RUFBQSxXQUFBO0VBQUEsU0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtTQUN4RCxDQUFBLENBQUEsQ0FBQTtFQUFBLE1BQUEsU0FBQSxnQkFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQSxRQUFBLE9BQUEsaUJBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBO0VBQUEsT0FBQTtFQUFBLE1BQUEsT0FBQSxnQkFBQSxD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QUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssT0FBTyxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQy9ELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBWSxHQUFBLEdBQUE7UUFDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMxRSxJQUFJLENBQUN5RSxNQUFNLENBQUMxTyxJQUFJLENBQUMsVUFBQ3lQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssS0FBSyxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzdELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYSxHQUFBLEdBQUE7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMxRSxJQUFJLENBQUN5RSxNQUFNLENBQUMxTyxJQUFJLENBQUMsVUFBQ3lQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssTUFBTSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzlELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYSxHQUFBLEdBQUE7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMxRSxJQUFJLENBQUN5RSxNQUFNLENBQUMxTyxJQUFJLENBQUMsVUFBQ3lQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssTUFBTSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzlELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYyxHQUFBLEdBQUE7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMxRSxJQUFJLENBQUN5RSxNQUFNLENBQUMxTyxJQUFJLENBQUMs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QUFLLENBQUNBLEtBQUssQ0FBQyxDQUFBO0VBQUMsY0FBQSxLQUFBLEVBQUE7RUFBQSxnQkFBQSxTQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQTtFQUFBLGdCQUFBLE1BQUE7RUFBQSxjQUFBLEtBQUEsRUFBQTtFQUFBLGdCQUFBLFNBQUEsQ0FBQSxJQUFBLEdBQUEsRUFBQSxDQUFBO0VBQUEsZ0JBQUEsTUFBQTtFQUFBLGNBQUEsS0FBQSxFQUFBO0VBQUEsZ0JBQUEsU0FBQSxDQUFBLElBQUEsR0FBQSxFQUFBLENBQUE7RUFBQSxnQkFBQSxTQUFBLENBQUEsRUFBQSxHQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLGdCQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0VBQUEsY0FBQSxLQUFBLEVBQUE7RUFBQSxnQkFBQSxTQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTtFQUFBLGdCQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtFQUFBLGdCQUFBLE9BQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUFBLGNBQUEsS0FBQSxFQUFBO2tCQUFBLE9BRWxDLFNBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxFQUFBO29CQUFFNEcsTUFBTSxFQUFFQSxNQUFNLENBQUM1RyxLQUFLO0VBQUVBLGtCQUFBQSxLQUFLLEVBQUVtVyxRQUFBQTttQkFBVSxDQUFBLENBQUE7RUFBQSxjQUFBLEtBQUEsRUFBQSxDQUFBO0VBQUEsY0FBQSxLQUFBLEtBQUE7RUFBQSxnQkFBQSxPQUFBLFNBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsU0FDbkQsQ0FBQyxDQUFBLENBQUEsQ0FBQTtFQUNOLE9BQUMsTUFD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LFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtFQUMxQ0EsRUFBQUEscUJBQXFCLENBQUMsWUFBWSxDQUFDLEdBQUcsWUFBWSxDQUFBO0VBQ2xEQSxFQUFBQSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUE7RUFDOUNBLEVBQUFBLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtFQUM1Q0EsRUFBQUEscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO0VBQzlDQSxFQUFBQSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUE7RUFDaERBLEVBQUFBLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtFQUM5Q0EsRUFBQUEscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQTtFQUN4RUEsRUFBQUEscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQTtFQUM1REEsRUFBQUEscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO0VBQzlDQSxFQUFBQSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUE7RUFDaERBLEVBQUFBLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtFQUMxQ0EsRUFBQUEscUJBQXFCLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFBO0VBQzFDQSxFQUFBQSxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhLENBQUE7RUFDcERBLEVBQUFBLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtFQUM1Q0EsRUFBQUEscUJBQXFCLENBQUMsWUFBWSxDQUFDLEdBQUcsWUFBWSxDQUFBO0VBQ2xEQSxFQUFBQSxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUE7RUFDNUNBLEVBQUFBLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxHQUFHLFlBQVksQ0FBQTtFQUNsREEsRUFBQUEscUJB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
