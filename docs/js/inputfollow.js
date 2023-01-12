/*!
  inputfollow.js v0.0.2
  https://github.com/sushat4692/inputfollow.js#readme
  Released under the MIT License.
*/
var Inputfollow = (function () {
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
    return (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) !== undefined && x instanceof Promise;
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
        return ZodOptional.create(this);
      }
    }, {
      key: "nullable",
      value: function nullable() {
        return ZodNullable.create(this);
      }
    }, {
      key: "nullish",
      value: function nullish() {
        return this.optional().nullable();
      }
    }, {
      key: "array",
      value: function array() {
        return ZodArray.create(this);
      }
    }, {
      key: "promise",
      value: function promise() {
        return ZodPromise.create(this);
      }
    }, {
      key: "or",
      value: function or(option) {
        return ZodUnion.create([this, option]);
      }
    }, {
      key: "and",
      value: function and(incoming) {
        return ZodIntersection.create(this, incoming);
      }
    }, {
      key: "transform",
      value: function transform(_transform) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: {
            type: "transform",
            transform: _transform
          }
        });
      }
    }, {
      key: "default",
      value: function _default(def) {
        var defaultValueFunc = typeof def === "function" ? def : function () {
          return def;
        };
        return new ZodDefault({
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
    }, {
      key: "brand",
      value: function brand() {
        return new ZodBranded(_objectSpread2({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this
        }, processCreateParams(undefined)));
      }
    }, {
      key: "catch",
      value: function _catch(def) {
        var defaultValueFunc = typeof def === "function" ? def : function () {
          return def;
        };
        return new ZodCatch({
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
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
  var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  // from https://stackoverflow.com/a/46181/1550155
  // old version: too slow, didn't support unicode
  // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  // eslint-disable-next-line
  var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}(([+-]\\d{2}:\\d{2})|Z)$"));
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}Z$"));
      }
    } else if (args.precision === 0) {
      if (args.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$");
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$");
      }
    } else {
      if (args.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$");
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
          return ch.kind === "int";
        });
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
        var _iterator16 = _createForOfIteratorHelper(this._def.checks),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var check = _step16.value;
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
          _iterator16.e(err);
        } finally {
          _iterator16.f();
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
        var _iterator17 = _createForOfIteratorHelper(this._def.checks),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var ch = _step17.value;
            if (ch.kind === "min") {
              if (min === null || ch.value > min) min = ch.value;
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return min != null ? new Date(min) : null;
      }
    }, {
      key: "maxDate",
      get: function get() {
        var max = null;
        var _iterator18 = _createForOfIteratorHelper(this._def.checks),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var ch = _step18.value;
            if (ch.kind === "max") {
              if (max === null || ch.value < max) max = ch.value;
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
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
          return Promise.all(ctx.data.map(function (item, i) {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then(function (result) {
            return ParseStatus.mergeArray(status, result);
          });
        }
        var result = ctx.data.map(function (item, i) {
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
  var AugmentFactory = function AugmentFactory(def) {
    return function (augmentation) {
      return new ZodObject(_objectSpread2(_objectSpread2({}, def), {}, {
        shape: function shape() {
          return _objectSpread2(_objectSpread2({}, def.shape()), augmentation);
        }
      }));
    };
  };
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
      _this6.augment = AugmentFactory(_this6._def);
      _this6.extend = AugmentFactory(_this6._def);
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
        var _iterator19 = _createForOfIteratorHelper(shapeKeys),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _key4 = _step19.value;
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
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        if (this._def.catchall instanceof ZodNever) {
          var unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            var _iterator20 = _createForOfIteratorHelper(extraKeys),
              _step20;
            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _key = _step20.value;
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
              _iterator20.e(err);
            } finally {
              _iterator20.f();
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
          var _iterator21 = _createForOfIteratorHelper(extraKeys),
            _step21;
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _key2 = _step21.value;
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
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var syncPairs, _iterator22, _step22, pair, _key3;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  syncPairs = [];
                  _iterator22 = _createForOfIteratorHelper(pairs);
                  _context4.prev = 2;
                  _iterator22.s();
                case 4:
                  if ((_step22 = _iterator22.n()).done) {
                    _context4.next = 19;
                    break;
                  }
                  pair = _step22.value;
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
                  _iterator22.e(_context4.t5);
                case 24:
                  _context4.prev = 24;
                  _iterator22.f();
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
    }, {
      key: "setKey",
      value: function setKey(key, schema) {
        return this.augment(_defineProperty({}, key, schema));
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
    }, {
      key: "merge",
      value: function merge(merging) {
        var _this8 = this;
        // const mergedShape = objectUtil.mergeShapes(
        //   this._def.shape(),
        //   merging._def.shape()
        // );
        var merged = new ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: function shape() {
            return objectUtil.mergeShapes(_this8._def.shape(), merging._def.shape());
          },
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
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
        var _this9 = this;
        var _shape = {};
        util.objectKeys(mask).map(function (key) {
          // only add to shape if key corresponds to an element of the current shape
          if (_this9.shape[key]) _shape[key] = _this9.shape[key];
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
        var _this10 = this;
        var _shape2 = {};
        util.objectKeys(this.shape).map(function (key) {
          if (util.objectKeys(mask).indexOf(key) === -1) {
            _shape2[key] = _this10.shape[key];
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
        var _this11 = this;
        var newShape = {};
        if (mask) {
          util.objectKeys(this.shape).map(function (key) {
            if (util.objectKeys(mask).indexOf(key) === -1) {
              newShape[key] = _this11.shape[key];
            } else {
              newShape[key] = _this11.shape[key].optional();
            }
          });
          return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
            shape: function shape() {
              return newShape;
            }
          }));
        } else {
          for (var key in this.shape) {
            var fieldSchema = this.shape[key];
            newShape[key] = fieldSchema.optional();
          }
        }
        return new ZodObject(_objectSpread2(_objectSpread2({}, this._def), {}, {
          shape: function shape() {
            return newShape;
          }
        }));
      }
    }, {
      key: "required",
      value: function required(mask) {
        var _this12 = this;
        var newShape = {};
        if (mask) {
          util.objectKeys(this.shape).map(function (key) {
            if (util.objectKeys(mask).indexOf(key) === -1) {
              newShape[key] = _this12.shape[key];
            } else {
              var fieldSchema = _this12.shape[key];
              var newField = fieldSchema;
              while (newField instanceof ZodOptional) {
                newField = newField._def.innerType;
              }
              newShape[key] = newField;
            }
          });
        } else {
          for (var key in this.shape) {
            var fieldSchema = this.shape[key];
            var newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
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
          var _iterator23 = _createForOfIteratorHelper(results),
            _step23;
          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var result = _step23.value;
              if (result.result.status === "valid") {
                return result.result;
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
          var _iterator24 = _createForOfIteratorHelper(results),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _result = _step24.value;
              if (_result.result.status === "dirty") {
                var _ctx$common$issues;
                // add issues from dirty option
                (_ctx$common$issues = ctx.common.issues).push.apply(_ctx$common$issues, _toConsumableArray(_result.ctx.common.issues));
                return _result.result;
              }
            }
            // return invalid
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
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
          var _iterator25 = _createForOfIteratorHelper(options),
            _step25;
          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var option = _step25.value;
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
            _iterator25.e(err);
          } finally {
            _iterator25.f();
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
        var _iterator26 = _createForOfIteratorHelper(options),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var type = _step26.value;
            var discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
              throw new Error("A discriminator value for key `".concat(discriminator, "` could not be extracted from all schema options"));
            }
            var _iterator27 = _createForOfIteratorHelper(discriminatorValues),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var value = _step27.value;
                if (optionsMap.has(value)) {
                  throw new Error("Discriminator property ".concat(String(discriminator), " has duplicate value ").concat(String(value)));
                }
                optionsMap.set(value, type);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
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
      var _iterator28 = _createForOfIteratorHelper(sharedKeys),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var key = _step28.value;
          var sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return {
              valid: false
            };
          }
          newObj[key] = sharedValue.data;
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
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
        var _this13 = this;
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
        var items = ctx.data.map(function (item, itemIndex) {
          var schema = _this13._def.items[itemIndex] || _this13._def.rest;
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
            var _iterator29, _step29, pair, key, value;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _iterator29 = _createForOfIteratorHelper(pairs);
                  _context6.prev = 1;
                  _iterator29.s();
                case 3:
                  if ((_step29 = _iterator29.n()).done) {
                    _context6.next = 17;
                    break;
                  }
                  pair = _step29.value;
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
                  _iterator29.e(_context6.t0);
                case 22:
                  _context6.prev = 22;
                  _iterator29.f();
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
          var _iterator30 = _createForOfIteratorHelper(pairs),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var pair = _step30.value;
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
            _iterator30.e(err);
          } finally {
            _iterator30.f();
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
          var _iterator31 = _createForOfIteratorHelper(elements),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var element = _step31.value;
              if (element.status === "aborted") return INVALID;
              if (element.status === "dirty") status.dirty();
              parsedSet.add(element.value);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
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
      var _this14;
      _classCallCheck(this, ZodFunction);
      _this14 = _super23.apply(this, arguments);
      _this14.validate = _this14.implement;
      return _this14;
    }
    _createClass(ZodFunction, [{
      key: "_parse",
      value: function _parse(input) {
        var _this15 = this;
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
                  return _this15._def.args.parseAsync(args, params)["catch"](function (e) {
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
                  return _this15._def.returns._def.type.parseAsync(result, params)["catch"](function (e) {
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
            var parsedArgs = _this15._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            var result = fn.apply(void 0, _toConsumableArray(parsedArgs.data));
            var parsedReturns = _this15._def.returns.safeParse(result, params);
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
        var _iterator32 = _createForOfIteratorHelper(this._def.values),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var val = _step32.value;
            enumValues[val] = val;
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
        return enumValues;
      }
    }, {
      key: "Values",
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
      key: "Enum",
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
      key: "_parse",
      value: function _parse(input) {
        var _this16 = this;
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
          return _this16._def.type.parseAsync(data, {
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
        var _this17 = this;
        var _this$_processInputPa13 = this._processInputParams(input),
          status = _this$_processInputPa13.status,
          ctx = _this$_processInputPa13.ctx;
        var effect = this._def.effect || null;
        if (effect.type === "preprocess") {
          var processed = effect.transform(ctx.data);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(function (processed) {
              return _this17._def.schema._parseAsync({
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
        var _this18 = this;
        var _this$_processInputPa15 = this._processInputParams(input),
          ctx = _this$_processInputPa15.ctx;
        var result = this._def.innerType._parse({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (isAsync(result)) {
          return result.then(function (result) {
            return {
              status: "valid",
              value: result.status === "valid" ? result.value : _this18._def.defaultValue()
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.defaultValue()
          };
        }
      }
    }, {
      key: "removeDefault",
      value: function removeDefault() {
        return this._def.innerType;
      }
    }]);
    return ZodCatch;
  }(ZodType);
  ZodCatch.create = function (type, params) {
    return new ZodCatch(_objectSpread2({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      defaultValue: typeof params["default"] === "function" ? params["default"] : function () {
        return params["default"];
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
        var _this19 = this;
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
                    return _this19._def["in"]._parseAsync({
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
                    return _context8.abrupt("return", _this19._def.out._parseAsync({
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
  var RuleOptionValidator = mod.object({
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
  var RuleValidator = mod.record(mod.union([RuleOptionValidator, mod.array(RuleOptionValidator)]));
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

  /**
   * Check required of target field element's value
   * @param el
   * @returns boolean
   */
  var check$2 = function (values) {
      if (!values.length) {
          return false;
      }
      return values.reduce(function (prev, current) {
          return prev && mod.string().trim().min(1).safeParse(current).success;
      }, true);
  };

  /**
   * Check Email format of target field element's value
   * @param el
   * @returns boolean
   */
  var check$1 = function (values) {
      return values.reduce(function (prev, current) {
          return prev && mod.string().email().safeParse(current).success;
      }, true);
  };

  /**
   * Check numeric of target field element's value
   * @param el
   * @returns boolean
   */
  var check = function (values) {
      return values.reduce(function (prev, current) { return prev && mod.coerce.number().safeParse(current).success; }, true);
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
      if (fields[Symbol.iterator]) {
          return __spreadArray([], fields, true);
      }
      else {
          return [fields];
      }
  };
  var getValues = function (elements) {
      var values = [];
      elements.map(function (el) {
          if (isCheckField(el)) {
              if (el.checked) {
                  values.push(el.value);
              }
          }
          else {
              values.push(el.value);
          }
      });
      return values;
  };

  var validate = function (formEl, elements, rule) {
      var errors = [];
      var values = getValues(elements);
      rule.map(function (r) {
          if (!checkIf(formEl, r)) {
              return;
          }
          if (r.with) {
              switch (r.mode) {
                  case 'or':
                      validateMultipleOr(formEl, r, errors, values);
                      break;
                  case 'and':
                  default:
                      validateMultipleAnd(formEl, r, errors, values);
                      break;
              }
          }
          else {
              validateSingle(r, errors, values);
          }
      });
      return errors;
  };
  var checkIf = function (formEl, r) {
      var result = true;
      if (!r.if) {
          return result;
      }
      Object.keys(r.if.target).map(function (name) {
          if (!r.if) {
              return;
          }
          var ifTarget = r.if.target[name];
          var ifElement = getElement(formEl, name);
          var ifValue = getValues(ifElement);
          if (r.if.mode === 'or') {
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
              return check$2(values);
          case 'email':
              return check$1(values);
          case 'number':
              return check(values);
      }
  };
  var validateSingle = function (r, errors, values) {
      if (!checkValidate(r.type, values)) {
          errors.push({
              type: r.type,
              message: r.message,
          });
      }
      return errors;
  };
  var validateMultipleOr = function (formEl, r, errors, values) {
      var result = checkValidate(r.type, values);
      if (r.with) {
          Object.keys(r.with).map(function (name) {
              if (!r.with) {
                  return;
              }
              var withType = r.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result || checkValidate(withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: r.type,
              message: r.message,
          });
      }
      return errors;
  };
  var validateMultipleAnd = function (formEl, r, errors, values) {
      var result = checkValidate(r.type, values);
      if (r.with) {
          Object.keys(r.with).map(function (name) {
              if (!r.with) {
                  return;
              }
              var withType = r.with[name];
              var withElements = getElement(formEl, name);
              var withValues = getValues(withElements);
              result = result && checkValidate(withType, withValues);
          });
      }
      if (!result) {
          errors.push({
              type: r.type,
              message: r.message,
          });
      }
      return errors;
  };

  var createElement = function (formEl, name, rules, params, errors) {
      var elements = getElement(formEl, name);
      var withElements = (function () {
          var results = [];
          rules.map(function (rule) {
              if (!rule.with) {
                  return;
              }
              Object.keys(rule.with).map(function (name) {
                  var fields = getElement(formEl, name);
                  results.push.apply(results, fields);
              });
          });
          return results;
      })();
      var ifElements = (function () {
          var results = [];
          rules.map(function (rule) {
              if (!rule.if) {
                  return;
              }
              Object.keys(rule.if.target).map(function (name) {
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
          var existField = document.querySelector("[data-inputfollow-error=\"".concat(name, "\"]"));
          if (existField) {
              return existField;
          }
          var additionalField = document.createElement('ul');
          additionalField.className = params.error_message_class;
          additionalField.setAttribute('data-inputfollow-error', name);
          elements[0].insertAdjacentElement('afterend', additionalField);
          return additionalField;
      })();
      var addInvalidClass = function (_elements, init) {
          if (params.valid_class) {
              _elements.forEach(function (el) {
                  el.classList.remove(params.valid_class);
              });
          }
          if (init !== true || params.initial_error_view) {
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
      var validate$1 = function (init) {
          if (init === void 0) { init = false; }
          if (!rules || !name) {
              return;
          }
          errors[name] = validate(formEl, elements, rules);
          if (hasError()) {
              addInvalidClass(elements, init);
              addInvalidClass(withElements, init);
              addInvalidClass(ifElements, init);
              if (init !== true || params.initial_error_view) {
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
      var addEvents = function (_elements) {
          _elements.forEach(function (el) {
              if (isCheckField(el)) {
                  el.addEventListener('input', function () {
                      validate$1();
                  });
              }
              else {
                  el.addEventListener('input', function () {
                      validate$1(true);
                  });
                  el.addEventListener('blur', function () {
                      validate$1();
                  });
              }
          });
      };
      addEvents(elements);
      addEvents(withElements);
      addEvents(ifElements);
      return { formEl: formEl, elements: elements, name: name, rules: rules, validate: validate$1, hasError: hasError, getErrors: getErrors };
  };

  var index = (function (formEl, params) {
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
      Object.keys(arrangedParams.rules).map(function (name) {
          var rules = (function () {
              var rules = arrangedParams.rules[name];
              if (Array.isArray(rules)) {
                  return rules;
              }
              return [rules];
          })();
          if (!rules || !rules.length) {
              return;
          }
          var Element = createElement(targetFormElement, name, rules, arrangedParams, errors);
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
  });

  return index;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRmb2xsb3cuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvdmFsaWRhdGUvUmVxdWlyZWQudHMiLCIuLi9zcmMvdmFsaWRhdGUvRW1haWwudHMiLCIuLi9zcmMvdmFsaWRhdGUvTnVtYmVyLnRzIiwiLi4vc3JjL3V0aWxzL1RhZy50cyIsIi4uL3NyYy92YWxpZGF0ZS9pbmRleC50cyIsIi4uL3NyYy9tb2RlbC9FbGVtZW50LnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG5cbmNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5jbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKGlzc3VlLm1pbmltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKGlzc3VlLm1heGltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuXG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGVycm9yTWFwO1xuZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuXG5jb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSB8fCBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICBlcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5jbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBhd2FpdCBwYWlyLmtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5jb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5jb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gdW5kZWZpbmVkICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXG52YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuXG5jbGFzcyBQYXJzZUlucHV0TGF6eVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdmFsdWUsIHBhdGgsIGtleSkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aC5jb25jYXQodGhpcy5fa2V5KTtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCB7IGVycm9yTWFwLCBpbnZhbGlkX3R5cGVfZXJyb3IsIHJlcXVpcmVkX2Vycm9yLCBkZXNjcmlwdGlvbiB9ID0gcGFyYW1zO1xuICAgIGlmIChlcnJvck1hcCAmJiAoaW52YWxpZF90eXBlX2Vycm9yIHx8IHJlcXVpcmVkX2Vycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBcImludmFsaWRfdHlwZV9lcnJvclwiIG9yIFwicmVxdWlyZWRfZXJyb3JcIiBpbiBjb25qdW5jdGlvbiB3aXRoIGN1c3RvbSBlcnJvciBtYXAuYCk7XG4gICAgfVxuICAgIGlmIChlcnJvck1hcClcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JNYXA6IGVycm9yTWFwLCBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGN1c3RvbU1hcCA9IChpc3MsIGN0eCkgPT4ge1xuICAgICAgICBpZiAoaXNzLmNvZGUgIT09IFwiaW52YWxpZF90eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IHJlcXVpcmVkX2Vycm9yICE9PSBudWxsICYmIHJlcXVpcmVkX2Vycm9yICE9PSB2b2lkIDAgPyByZXF1aXJlZF9lcnJvciA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBpbnZhbGlkX3R5cGVfZXJyb3IgIT09IG51bGwgJiYgaW52YWxpZF90eXBlX2Vycm9yICE9PSB2b2lkIDAgPyBpbnZhbGlkX3R5cGVfZXJyb3IgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuY2xhc3MgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoZGVmKSB7XG4gICAgICAgIC8qKiBBbGlhcyBvZiBzYWZlUGFyc2VBc3luYyAqL1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc2FmZVBhcnNlQXN5bmM7XG4gICAgICAgIHRoaXMuX2RlZiA9IGRlZjtcbiAgICAgICAgdGhpcy5wYXJzZSA9IHRoaXMucGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2UgPSB0aGlzLnNhZmVQYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnNlQXN5bmMgPSB0aGlzLnBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2VBc3luYyA9IHRoaXMuc2FmZVBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNwYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZSA9IHRoaXMucmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lbWVudCA9IHRoaXMucmVmaW5lbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1cGVyUmVmaW5lID0gdGhpcy5zdXBlclJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5vcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxhYmxlID0gdGhpcy5udWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxpc2ggPSB0aGlzLm51bGxpc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3IgPSB0aGlzLm9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5kID0gdGhpcy5hbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuY2F0Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuZGVzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waXBlID0gdGhpcy5waXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOdWxsYWJsZSA9IHRoaXMuaXNOdWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzT3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBfZ2V0VHlwZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIChjdHggfHwge1xuICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBuZXcgUGFyc2VTdGF0dXMoKSxcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3BhcnNlU3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bmNocm9ub3VzIHBhcnNlIGVuY291bnRlcmVkIHByb21pc2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9wYXJzZUFzeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cbiAgICBwYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zYWZlUGFyc2UoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIHNhZmVQYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuYXN5bmMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdClcbiAgICAgICAgICAgID8gbWF5YmVBc3luY1Jlc3VsdFxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eClcbiAgICAgICAgICAgICAgICAgICAgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIG9wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoKS5udWxsYWJsZSgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSk7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZyk7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHVuZGVmaW5lZCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuLy8gaW50ZXJmYWNlIElzRGF0ZVN0cmluZ09wdGlvbnMgZXh0ZW5kcyBTdHJpbmdEYXRlT3B0aW9ucyB7XG4vKipcbiAqIE1hdGNoIGFueSBjb25maWd1cmF0aW9uXG4gKi9cbi8vIGFueT86IGJvb2xlYW47XG4vLyB9XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmNvbnN0IGRhdGV0aW1lUmVnZXggPSAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBpZiAoYXJncy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fSgoWystXVxcXFxkezJ9OlxcXFxkezJ9KXxaKSRgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgaWYgKGFyZ3Mub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChhcmdzLm9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/WiRgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fcmVnZXggPSAocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpID0+IHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugei5zdHJpbmcoKS5taW4oMSkgaW5zdGVhZC5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgWm9kU3RyaW5nLm1pbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uZW1wdHkgPSAobWVzc2FnZSkgPT4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICAgICAgdGhpcy50cmltID0gKCkgPT4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24pID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vZmZzZXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IHBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IHBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIik7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY3R4LmRhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGN0eC5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZE9iamVjdCAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5jb25zdCBBdWdtZW50RmFjdG9yeSA9IChkZWYpID0+IChhdWdtZW50YXRpb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC4uLmRlZixcbiAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgdGhpcy5hdWdtZW50ID0gQXVnbWVudEZhY3RvcnkodGhpcy5fZGVmKTtcbiAgICAgICAgdGhpcy5leHRlbmQgPSBBdWdtZW50RmFjdG9yeSh0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHJldHVybiAodGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJlxuICAgICAgICAgICAgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gKF9jID0gKF9iID0gKF9hID0gdGhpcy5fZGVmKS5lcnJvck1hcCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGlzc3VlLCBjdHgpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChfZCA9IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAgICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgICAgICAvLyApO1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyhtYXNrKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBhZGQgdG8gc2hhcGUgaWYga2V5IGNvcnJlc3BvbmRzIHRvIGFuIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnQgc2hhcGVcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXBlW2tleV0pXG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5vYmplY3RLZXlzKG1hc2spLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsXG4gICAgICAgICAgICAub2JqZWN0S2V5cyhhKVxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjdHguZGF0YVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBnZXRFcnJvck1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcCxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCB0aGlzLl9kZWYuYXJnc1xuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oLi4ucGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IHRoaXMuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT0soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gdGhpcy5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLnBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IHRoaXMuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzXG4gICAgICAgICAgICAgICAgPyBhcmdzXG4gICAgICAgICAgICAgICAgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLnZhbHVlcy5pbmRleE9mKGlucHV0LmRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxufVxuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJlxuICAgICAgICAgICAgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXRpdmVFbnVtVmFsdWVzLmluZGV4T2YoaW5wdXQuZGF0YSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbigocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2NcbiAgICAgICAgICAgIC8vIGVmZmVjdDogUmVmaW5lbWVudEVmZmVjdDxhbnk+XG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGJhc2Uuc3RhdHVzID09PSBcImFib3J0ZWRcIikgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChiYXNlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoeyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBwYXJhbXMuZGVmYXVsdFxuICAgICAgICAgICAgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiID8gcmVzdWx0LnZhbHVlIDogdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIiA/IHJlc3VsdC52YWx1ZSA6IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gcGFyYW1zLmRlZmF1bHRcbiAgICAgICAgICAgIDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5jbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5jbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgY3VzdG9tID0gKGNoZWNrLCBwYXJhbXMgPSB7fSwgZmF0YWwpID0+IHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayhkYXRhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMoZGF0YSkgOiBwYXJhbXM7XG4gICAgICAgICAgICAgICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wMiwgZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59O1xuY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbnZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMsIHRydWUpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5jb25zdCBORVZFUiA9IElOVkFMSUQ7XG5cbnZhciBtb2QgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGRlZmF1bHRFcnJvck1hcDogZXJyb3JNYXAsXG4gICAgc2V0RXJyb3JNYXA6IHNldEVycm9yTWFwLFxuICAgIGdldEVycm9yTWFwOiBnZXRFcnJvck1hcCxcbiAgICBtYWtlSXNzdWU6IG1ha2VJc3N1ZSxcbiAgICBFTVBUWV9QQVRIOiBFTVBUWV9QQVRILFxuICAgIGFkZElzc3VlVG9Db250ZXh0OiBhZGRJc3N1ZVRvQ29udGV4dCxcbiAgICBQYXJzZVN0YXR1czogUGFyc2VTdGF0dXMsXG4gICAgSU5WQUxJRDogSU5WQUxJRCxcbiAgICBESVJUWTogRElSVFksXG4gICAgT0s6IE9LLFxuICAgIGlzQWJvcnRlZDogaXNBYm9ydGVkLFxuICAgIGlzRGlydHk6IGlzRGlydHksXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0FzeW5jOiBpc0FzeW5jLFxuICAgIGdldCB1dGlsICgpIHsgcmV0dXJuIHV0aWw7IH0sXG4gICAgWm9kUGFyc2VkVHlwZTogWm9kUGFyc2VkVHlwZSxcbiAgICBnZXRQYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlLFxuICAgIFpvZFR5cGU6IFpvZFR5cGUsXG4gICAgWm9kU3RyaW5nOiBab2RTdHJpbmcsXG4gICAgWm9kTnVtYmVyOiBab2ROdW1iZXIsXG4gICAgWm9kQmlnSW50OiBab2RCaWdJbnQsXG4gICAgWm9kQm9vbGVhbjogWm9kQm9vbGVhbixcbiAgICBab2REYXRlOiBab2REYXRlLFxuICAgIFpvZFN5bWJvbDogWm9kU3ltYm9sLFxuICAgIFpvZFVuZGVmaW5lZDogWm9kVW5kZWZpbmVkLFxuICAgIFpvZE51bGw6IFpvZE51bGwsXG4gICAgWm9kQW55OiBab2RBbnksXG4gICAgWm9kVW5rbm93bjogWm9kVW5rbm93bixcbiAgICBab2ROZXZlcjogWm9kTmV2ZXIsXG4gICAgWm9kVm9pZDogWm9kVm9pZCxcbiAgICBab2RBcnJheTogWm9kQXJyYXksXG4gICAgZ2V0IG9iamVjdFV0aWwgKCkgeyByZXR1cm4gb2JqZWN0VXRpbDsgfSxcbiAgICBab2RPYmplY3Q6IFpvZE9iamVjdCxcbiAgICBab2RVbmlvbjogWm9kVW5pb24sXG4gICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uOiBab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgWm9kSW50ZXJzZWN0aW9uOiBab2RJbnRlcnNlY3Rpb24sXG4gICAgWm9kVHVwbGU6IFpvZFR1cGxlLFxuICAgIFpvZFJlY29yZDogWm9kUmVjb3JkLFxuICAgIFpvZE1hcDogWm9kTWFwLFxuICAgIFpvZFNldDogWm9kU2V0LFxuICAgIFpvZEZ1bmN0aW9uOiBab2RGdW5jdGlvbixcbiAgICBab2RMYXp5OiBab2RMYXp5LFxuICAgIFpvZExpdGVyYWw6IFpvZExpdGVyYWwsXG4gICAgWm9kRW51bTogWm9kRW51bSxcbiAgICBab2ROYXRpdmVFbnVtOiBab2ROYXRpdmVFbnVtLFxuICAgIFpvZFByb21pc2U6IFpvZFByb21pc2UsXG4gICAgWm9kRWZmZWN0czogWm9kRWZmZWN0cyxcbiAgICBab2RUcmFuc2Zvcm1lcjogWm9kRWZmZWN0cyxcbiAgICBab2RPcHRpb25hbDogWm9kT3B0aW9uYWwsXG4gICAgWm9kTnVsbGFibGU6IFpvZE51bGxhYmxlLFxuICAgIFpvZERlZmF1bHQ6IFpvZERlZmF1bHQsXG4gICAgWm9kQ2F0Y2g6IFpvZENhdGNoLFxuICAgIFpvZE5hTjogWm9kTmFOLFxuICAgIEJSQU5EOiBCUkFORCxcbiAgICBab2RCcmFuZGVkOiBab2RCcmFuZGVkLFxuICAgIFpvZFBpcGVsaW5lOiBab2RQaXBlbGluZSxcbiAgICBjdXN0b206IGN1c3RvbSxcbiAgICBTY2hlbWE6IFpvZFR5cGUsXG4gICAgWm9kU2NoZW1hOiBab2RUeXBlLFxuICAgIGxhdGU6IGxhdGUsXG4gICAgZ2V0IFpvZEZpcnN0UGFydHlUeXBlS2luZCAoKSB7IHJldHVybiBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7IH0sXG4gICAgY29lcmNlOiBjb2VyY2UsXG4gICAgYW55OiBhbnlUeXBlLFxuICAgIGFycmF5OiBhcnJheVR5cGUsXG4gICAgYmlnaW50OiBiaWdJbnRUeXBlLFxuICAgIGJvb2xlYW46IGJvb2xlYW5UeXBlLFxuICAgIGRhdGU6IGRhdGVUeXBlLFxuICAgIGRpc2NyaW1pbmF0ZWRVbmlvbjogZGlzY3JpbWluYXRlZFVuaW9uVHlwZSxcbiAgICBlZmZlY3Q6IGVmZmVjdHNUeXBlLFxuICAgICdlbnVtJzogZW51bVR5cGUsXG4gICAgJ2Z1bmN0aW9uJzogZnVuY3Rpb25UeXBlLFxuICAgICdpbnN0YW5jZW9mJzogaW5zdGFuY2VPZlR5cGUsXG4gICAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25UeXBlLFxuICAgIGxhenk6IGxhenlUeXBlLFxuICAgIGxpdGVyYWw6IGxpdGVyYWxUeXBlLFxuICAgIG1hcDogbWFwVHlwZSxcbiAgICBuYW46IG5hblR5cGUsXG4gICAgbmF0aXZlRW51bTogbmF0aXZlRW51bVR5cGUsXG4gICAgbmV2ZXI6IG5ldmVyVHlwZSxcbiAgICAnbnVsbCc6IG51bGxUeXBlLFxuICAgIG51bGxhYmxlOiBudWxsYWJsZVR5cGUsXG4gICAgbnVtYmVyOiBudW1iZXJUeXBlLFxuICAgIG9iamVjdDogb2JqZWN0VHlwZSxcbiAgICBvYm9vbGVhbjogb2Jvb2xlYW4sXG4gICAgb251bWJlcjogb251bWJlcixcbiAgICBvcHRpb25hbDogb3B0aW9uYWxUeXBlLFxuICAgIG9zdHJpbmc6IG9zdHJpbmcsXG4gICAgcGlwZWxpbmU6IHBpcGVsaW5lVHlwZSxcbiAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzVHlwZSxcbiAgICBwcm9taXNlOiBwcm9taXNlVHlwZSxcbiAgICByZWNvcmQ6IHJlY29yZFR5cGUsXG4gICAgc2V0OiBzZXRUeXBlLFxuICAgIHN0cmljdE9iamVjdDogc3RyaWN0T2JqZWN0VHlwZSxcbiAgICBzdHJpbmc6IHN0cmluZ1R5cGUsXG4gICAgc3ltYm9sOiBzeW1ib2xUeXBlLFxuICAgIHRyYW5zZm9ybWVyOiBlZmZlY3RzVHlwZSxcbiAgICB0dXBsZTogdHVwbGVUeXBlLFxuICAgICd1bmRlZmluZWQnOiB1bmRlZmluZWRUeXBlLFxuICAgIHVuaW9uOiB1bmlvblR5cGUsXG4gICAgdW5rbm93bjogdW5rbm93blR5cGUsXG4gICAgJ3ZvaWQnOiB2b2lkVHlwZSxcbiAgICBORVZFUjogTkVWRVIsXG4gICAgWm9kSXNzdWVDb2RlOiBab2RJc3N1ZUNvZGUsXG4gICAgcXVvdGVsZXNzSnNvbjogcXVvdGVsZXNzSnNvbixcbiAgICBab2RFcnJvcjogWm9kRXJyb3Jcbn0pO1xuXG5leHBvcnQgeyBCUkFORCwgRElSVFksIEVNUFRZX1BBVEgsIElOVkFMSUQsIE5FVkVSLCBPSywgUGFyc2VTdGF0dXMsIFpvZFR5cGUgYXMgU2NoZW1hLCBab2RBbnksIFpvZEFycmF5LCBab2RCaWdJbnQsIFpvZEJvb2xlYW4sIFpvZEJyYW5kZWQsIFpvZENhdGNoLCBab2REYXRlLCBab2REZWZhdWx0LCBab2REaXNjcmltaW5hdGVkVW5pb24sIFpvZEVmZmVjdHMsIFpvZEVudW0sIFpvZEVycm9yLCBab2RGaXJzdFBhcnR5VHlwZUtpbmQsIFpvZEZ1bmN0aW9uLCBab2RJbnRlcnNlY3Rpb24sIFpvZElzc3VlQ29kZSwgWm9kTGF6eSwgWm9kTGl0ZXJhbCwgWm9kTWFwLCBab2ROYU4sIFpvZE5hdGl2ZUVudW0sIFpvZE5ldmVyLCBab2ROdWxsLCBab2ROdWxsYWJsZSwgWm9kTnVtYmVyLCBab2RPYmplY3QsIFpvZE9wdGlvbmFsLCBab2RQYXJzZWRUeXBlLCBab2RQaXBlbGluZSwgWm9kUHJvbWlzZSwgWm9kUmVjb3JkLCBab2RUeXBlIGFzIFpvZFNjaGVtYSwgWm9kU2V0LCBab2RTdHJpbmcsIFpvZFN5bWJvbCwgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciwgWm9kVHVwbGUsIFpvZFR5cGUsIFpvZFVuZGVmaW5lZCwgWm9kVW5pb24sIFpvZFVua25vd24sIFpvZFZvaWQsIGFkZElzc3VlVG9Db250ZXh0LCBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgY29lcmNlLCBjdXN0b20sIGRhdGVUeXBlIGFzIGRhdGUsIG1vZCBhcyBkZWZhdWx0LCBlcnJvck1hcCBhcyBkZWZhdWx0RXJyb3JNYXAsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgZ2V0RXJyb3JNYXAsIGdldFBhcnNlZFR5cGUsIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIGxhdGUsIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1ha2VJc3N1ZSwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYmplY3RVdGlsLCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHF1b3RlbGVzc0pzb24sIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc2V0RXJyb3JNYXAsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHV0aWwsIHZvaWRUeXBlIGFzIHZvaWQsIG1vZCBhcyB6IH07XG4iLCJpbXBvcnQgeiBmcm9tICd6b2QnXG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0aW9uVHlwZVZhbGlkYXRvciA9IHouZW51bShbXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAnZW1haWwnLFxuICAgICdudW1iZXInLFxuICAgICdjb2RlJyxcbl0pXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uVHlwZSA9IHouaW5mZXI8dHlwZW9mIFZhbGlkYXRpb25UeXBlVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgV2l0aE9wdGlvblZhbGlkYXRvciA9IHoucmVjb3JkKFZhbGlkYXRpb25UeXBlVmFsaWRhdG9yKVxuZXhwb3J0IHR5cGUgV2l0aE9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIFdpdGhPcHRpb25WYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBNb2RlT3B0aW9uVmFsaWRhdG9yID0gei5lbnVtKFsnb3InLCAnYW5kJ10pXG5leHBvcnQgdHlwZSBNb2RlT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgTW9kZU9wdGlvblZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFJ1bGVPcHRpb25WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgdHlwZTogVmFsaWRhdGlvblR5cGVWYWxpZGF0b3IsXG4gICAgbW9kZTogTW9kZU9wdGlvblZhbGlkYXRvci5vcHRpb25hbCgpLFxuICAgIHdpdGg6IFdpdGhPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICBpZjogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICAgIG1vZGU6IE1vZGVPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICAgICAgICAgIHRhcmdldDogei5yZWNvcmQoei5zdHJpbmcoKSksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5leHBvcnQgdHlwZSBSdWxlT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgUnVsZU9wdGlvblZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFJ1bGVWYWxpZGF0b3IgPSB6LnJlY29yZChcbiAgICB6LnVuaW9uKFtSdWxlT3B0aW9uVmFsaWRhdG9yLCB6LmFycmF5KFJ1bGVPcHRpb25WYWxpZGF0b3IpXSlcbilcbmV4cG9ydCB0eXBlIFJ1bGUgPSB6LmluZmVyPHR5cGVvZiBSdWxlVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgVmFsaWRhdGVkRXJyb3JWYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5zdHJpbmcoKSxcbiAgICBtZXNzYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXJyb3IgPSB7IHR5cGU6IHN0cmluZzsgbWVzc2FnZT86IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBQYXJhbVZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICBydWxlczogUnVsZVZhbGlkYXRvcixcbiAgICBlcnJvcl9jbGFzczogei5zdHJpbmcoKSxcbiAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiB6LnN0cmluZygpLFxuICAgIGVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3M6IHouc3RyaW5nKCksXG4gICAgdmFsaWRfY2xhc3M6IHouc3RyaW5nKCksXG4gICAgaW5pdGlhbF9lcnJvcl92aWV3OiB6LmJvb2xlYW4oKSxcbiAgICBzdWJtaXRfYnV0dG9uOiB6XG4gICAgICAgIC51bmlvbihbXG4gICAgICAgICAgICB6LnN0cmluZygpLFxuICAgICAgICAgICAgei5pbnN0YW5jZW9mKEhUTUxJbnB1dEVsZW1lbnQpLFxuICAgICAgICAgICAgei5pbnN0YW5jZW9mKEhUTUxCdXR0b25FbGVtZW50KSxcbiAgICAgICAgXSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgb25fdmFsaWRhdGU6IHouZnVuY3Rpb24oKS5yZXR1cm5zKHoudm9pZCgpKS5vcHRpb25hbCgpLFxuICAgIG9uX3N1Y2Nlc3M6IHouZnVuY3Rpb24oKS5yZXR1cm5zKHoudm9pZCgpKS5vcHRpb25hbCgpLFxuICAgIG9uX2Vycm9yOiB6XG4gICAgICAgIC5mdW5jdGlvbigpXG4gICAgICAgIC5hcmdzKHoucmVjb3JkKHouYXJyYXkoVmFsaWRhdGVkRXJyb3JWYWxpZGF0b3IpKSlcbiAgICAgICAgLnJldHVybnMoei52b2lkKCkpXG4gICAgICAgIC5vcHRpb25hbCgpLFxufSlcbmV4cG9ydCB0eXBlIFBhcmFtID0gei5pbmZlcjx0eXBlb2YgUGFyYW1WYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBJbml0aWFsUGFyYW1WYWxpZGF0b3IgPSBQYXJhbVZhbGlkYXRvci5wYXJ0aWFsKHtcbiAgICBlcnJvcl9jbGFzczogdHJ1ZSxcbiAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiB0cnVlLFxuICAgIGVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3M6IHRydWUsXG4gICAgdmFsaWRfY2xhc3M6IHRydWUsXG4gICAgaW5pdGlhbF9lcnJvcl92aWV3OiB0cnVlLFxufSlcbmV4cG9ydCB0eXBlIEluaXRpYWxQYXJhbSA9IHouaW5mZXI8dHlwZW9mIEluaXRpYWxQYXJhbVZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFJvb3RFdmVudFZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICB2YWxpZGF0ZTogei5mdW5jdGlvbigpLnJldHVybnMoei52b2lkKCkpLFxufSlcbmV4cG9ydCB0eXBlIFJvb3RFdmVudCA9IHouaW5mZXI8dHlwZW9mIFJvb3RFdmVudFZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFRhcmdldFZhbGlkYXRvciA9IHoucmVjb3JkKHouaW5zdGFuY2VvZihIVE1MRWxlbWVudCkpXG5leHBvcnQgdHlwZSBUYXJnZXQgPSB6LmluZmVyPHR5cGVvZiBUYXJnZXRWYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBGb3JtRWxlbWVudFZhbGlkYXRvciA9IHoudW5pb24oW1xuICAgIHouc3RyaW5nKCksXG4gICAgei5pbnN0YW5jZW9mKEhUTUxGb3JtRWxlbWVudCksXG5dKVxuZXhwb3J0IHR5cGUgRm9ybUVsZW1lbnQgPSB6LmluZmVyPHR5cGVvZiBGb3JtRWxlbWVudFZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IEZpZWxkRWxlbWVudFZhbGlkYXRvciA9IHoudW5pb24oW1xuICAgIHouaW5zdGFuY2VvZihIVE1MSW5wdXRFbGVtZW50KSxcbiAgICB6Lmluc3RhbmNlb2YoSFRNTFNlbGVjdEVsZW1lbnQpLFxuICAgIHouaW5zdGFuY2VvZihIVE1MVGV4dEFyZWFFbGVtZW50KSxcbl0pXG5leHBvcnQgdHlwZSBGaWVsZEVsZW1lbnQgPSB6LmluZmVyPHR5cGVvZiBGaWVsZEVsZW1lbnRWYWxpZGF0b3I+XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG4vKipcbiAqIENoZWNrIHJlcXVpcmVkIG9mIHRhcmdldCBmaWVsZCBlbGVtZW50J3MgdmFsdWVcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgY2hlY2sgPSAodmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShcbiAgICAgICAgKHByZXYsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICBwcmV2ICYmIHouc3RyaW5nKCkudHJpbSgpLm1pbigxKS5zYWZlUGFyc2UoY3VycmVudCkuc3VjY2VzcyxcbiAgICAgICAgdHJ1ZVxuICAgIClcbn1cbiIsImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbi8qKlxuICogQ2hlY2sgRW1haWwgZm9ybWF0IG9mIHRhcmdldCBmaWVsZCBlbGVtZW50J3MgdmFsdWVcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgY2hlY2sgPSAodmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT5cbiAgICAgICAgICAgIHByZXYgJiYgei5zdHJpbmcoKS5lbWFpbCgpLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuLyoqXG4gKiBDaGVjayBudW1lcmljIG9mIHRhcmdldCBmaWVsZCBlbGVtZW50J3MgdmFsdWVcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgY2hlY2sgPSAodmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT4gcHJldiAmJiB6LmNvZXJjZS5udW1iZXIoKS5zYWZlUGFyc2UoY3VycmVudCkuc3VjY2VzcyxcbiAgICAgICAgdHJ1ZVxuICAgIClcbn1cbiIsImltcG9ydCB7IEZpZWxkRWxlbWVudCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgaXNDaGVja0ZpZWxkID0gKGVsOiBGaWVsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCd0eXBlJylcblxuICAgIHJldHVybiB0YWcgPT09ICdpbnB1dCcgJiYgKHR5cGUgPT09ICdyYWRpbycgfHwgdHlwZSA9PT0gJ2NoZWNrYm94Jylcbn1cblxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnQgPSAoZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghT2JqZWN0Lmhhc093bihmb3JtRWwsIG5hbWUpKSB7XG4gICAgICAgIGlmICghT2JqZWN0Lmhhc093bihmb3JtRWwsIGAke25hbWV9W11gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGAke25hbWV9W11gXG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0gZm9ybUVsW25hbWVdXG5cbiAgICBpZiAoZmllbGRzW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIFsuLi5maWVsZHNdIGFzIEZpZWxkRWxlbWVudFtdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtmaWVsZHNdIGFzIEZpZWxkRWxlbWVudFtdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVzID0gKGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlczogc3RyaW5nW10gPSBbXVxuXG4gICAgZWxlbWVudHMubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoaXNDaGVja0ZpZWxkKGVsKSkge1xuICAgICAgICAgICAgaWYgKChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsdWVzXG59XG4iLCJpbXBvcnQge1xuICAgIEZpZWxkRWxlbWVudCxcbiAgICBSdWxlT3B0aW9uLFxuICAgIFZhbGlkYXRlZEVycm9yLFxuICAgIFZhbGlkYXRpb25UeXBlLFxufSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgY2hlY2sgYXMgY2hlY2tSZXF1aXJlZCB9IGZyb20gJy4vUmVxdWlyZWQnXG5pbXBvcnQgeyBjaGVjayBhcyBjaGVja0VtYWlsIH0gZnJvbSAnLi9FbWFpbCdcbmltcG9ydCB7IGNoZWNrIGFzIGNoZWNrTnVtYmVyIH0gZnJvbSAnLi9OdW1iZXInXG5pbXBvcnQgeyBnZXRFbGVtZW50LCBnZXRWYWx1ZXMgfSBmcm9tICcuLi91dGlscy9UYWcnXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChcbiAgICBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCxcbiAgICBlbGVtZW50czogRmllbGRFbGVtZW50W10sXG4gICAgcnVsZTogUnVsZU9wdGlvbltdXG4pID0+IHtcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRlZEVycm9yW10gPSBbXVxuICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcyhlbGVtZW50cylcblxuICAgIHJ1bGUubWFwKChyKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2tJZihmb3JtRWwsIHIpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyLndpdGgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoci5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU11bHRpcGxlT3IoZm9ybUVsLCByLCBlcnJvcnMsIHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlTXVsdGlwbGVBbmQoZm9ybUVsLCByLCBlcnJvcnMsIHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlU2luZ2xlKHIsIGVycm9ycywgdmFsdWVzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgY2hlY2tJZiA9IChmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCwgcjogUnVsZU9wdGlvbikgPT4ge1xuICAgIGxldCByZXN1bHQgPSB0cnVlXG5cbiAgICBpZiAoIXIuaWYpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHIuaWYudGFyZ2V0KS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKCFyLmlmKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlmVGFyZ2V0ID0gci5pZi50YXJnZXRbbmFtZV1cbiAgICAgICAgY29uc3QgaWZFbGVtZW50ID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG4gICAgICAgIGNvbnN0IGlmVmFsdWUgPSBnZXRWYWx1ZXMoaWZFbGVtZW50KVxuXG4gICAgICAgIGlmIChyLmlmLm1vZGUgPT09ICdvcicpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBpZlZhbHVlLmluY2x1ZGVzKGlmVGFyZ2V0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIGlmVmFsdWUuaW5jbHVkZXMoaWZUYXJnZXQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjaGVja1ZhbGlkYXRlID0gKHJ1bGVUeXBlOiBWYWxpZGF0aW9uVHlwZSwgdmFsdWVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHN3aXRjaCAocnVsZVR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQodmFsdWVzKVxuICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tFbWFpbCh2YWx1ZXMpXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tOdW1iZXIodmFsdWVzKVxuICAgIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTaW5nbGUgPSAoXG4gICAgcjogUnVsZU9wdGlvbixcbiAgICBlcnJvcnM6IFZhbGlkYXRlZEVycm9yW10sXG4gICAgdmFsdWVzOiBzdHJpbmdbXVxuKSA9PiB7XG4gICAgaWYgKCFjaGVja1ZhbGlkYXRlKHIudHlwZSwgdmFsdWVzKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiByLnR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiByLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCB2YWxpZGF0ZU11bHRpcGxlT3IgPSAoXG4gICAgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsXG4gICAgcjogUnVsZU9wdGlvbixcbiAgICBlcnJvcnM6IFZhbGlkYXRlZEVycm9yW10sXG4gICAgdmFsdWVzOiBzdHJpbmdbXVxuKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGNoZWNrVmFsaWRhdGUoci50eXBlLCB2YWx1ZXMpXG5cbiAgICBpZiAoci53aXRoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHIud2l0aCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXIud2l0aCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3aXRoVHlwZSA9IHIud2l0aFtuYW1lXVxuICAgICAgICAgICAgY29uc3Qgd2l0aEVsZW1lbnRzID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG4gICAgICAgICAgICBjb25zdCB3aXRoVmFsdWVzID0gZ2V0VmFsdWVzKHdpdGhFbGVtZW50cylcblxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGNoZWNrVmFsaWRhdGUod2l0aFR5cGUsIHdpdGhWYWx1ZXMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogci50eXBlLFxuICAgICAgICAgICAgbWVzc2FnZTogci5tZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgdmFsaWRhdGVNdWx0aXBsZUFuZCA9IChcbiAgICBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCxcbiAgICByOiBSdWxlT3B0aW9uLFxuICAgIGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSxcbiAgICB2YWx1ZXM6IHN0cmluZ1tdXG4pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gY2hlY2tWYWxpZGF0ZShyLnR5cGUsIHZhbHVlcylcblxuICAgIGlmIChyLndpdGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoci53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghci53aXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdpdGhUeXBlID0gci53aXRoW25hbWVdXG4gICAgICAgICAgICBjb25zdCB3aXRoRWxlbWVudHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgIGNvbnN0IHdpdGhWYWx1ZXMgPSBnZXRWYWx1ZXMod2l0aEVsZW1lbnRzKVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgY2hlY2tWYWxpZGF0ZSh3aXRoVHlwZSwgd2l0aFZhbHVlcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiByLnR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiByLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgdmFsaWRhdGUgYXMgZXhlY1ZhbGlkYXRlIH0gZnJvbSAnLi4vdmFsaWRhdGUnXG5cbmltcG9ydCB7IFBhcmFtLCBGaWVsZEVsZW1lbnQsIFZhbGlkYXRlZEVycm9yLCBSdWxlT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBnZXRFbGVtZW50LCBpc0NoZWNrRmllbGQgfSBmcm9tICcuLi91dGlscy9UYWcnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKFxuICAgIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBydWxlczogUnVsZU9wdGlvbltdLFxuICAgIHBhcmFtczogUGFyYW0sXG4gICAgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IFZhbGlkYXRlZEVycm9yW10gfVxuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcblxuICAgIGNvbnN0IHdpdGhFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IEZpZWxkRWxlbWVudFtdID0gW11cblxuICAgICAgICBydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGlmICghcnVsZS53aXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJ1bGUud2l0aCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZ2V0RWxlbWVudChmb3JtRWwsIG5hbWUpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLmZpZWxkcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICB9KSgpXG5cbiAgICBjb25zdCBpZkVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0czogRmllbGRFbGVtZW50W10gPSBbXVxuXG4gICAgICAgIHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFydWxlLmlmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJ1bGUuaWYudGFyZ2V0KS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4uZmllbGRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0pKClcblxuICAgIGlmICghZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBOb3QgZm91bmQgdGFyZ2V0IGZpZWxkIGVsZW1lbnQ6ICR7bmFtZX1gKVxuICAgIH1cblxuICAgIC8vIFByZXBhcmUgb3IgRmluZCBlcnJvciBtZXNzYWdlIGZpZWxkXG4gICAgY29uc3QgbWVzc2FnZUZpZWxkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtaW5wdXRmb2xsb3ctZXJyb3I9XCIke25hbWV9XCJdYFxuICAgICAgICApXG4gICAgICAgIGlmIChleGlzdEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RGaWVsZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICBhZGRpdGlvbmFsRmllbGQuY2xhc3NOYW1lID0gcGFyYW1zLmVycm9yX21lc3NhZ2VfY2xhc3NcbiAgICAgICAgYWRkaXRpb25hbEZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dGZvbGxvdy1lcnJvcicsIG5hbWUpXG4gICAgICAgIGVsZW1lbnRzWzBdLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBhZGRpdGlvbmFsRmllbGQpXG5cbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWxGaWVsZFxuICAgIH0pKClcblxuICAgIGNvbnN0IGFkZEludmFsaWRDbGFzcyA9IChfZWxlbWVudHM6IEZpZWxkRWxlbWVudFtdLCBpbml0OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMudmFsaWRfY2xhc3MpIHtcbiAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLnZhbGlkX2NsYXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbml0ICE9PSB0cnVlIHx8IHBhcmFtcy5pbml0aWFsX2Vycm9yX3ZpZXcpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuZXJyb3JfY2xhc3MpIHtcbiAgICAgICAgICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChwYXJhbXMuZXJyb3JfY2xhc3MpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFZhbGlkQ2xhc3MgPSAoX2VsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLmVycm9yX2NsYXNzKSB7XG4gICAgICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5lcnJvcl9jbGFzcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy52YWxpZF9jbGFzcykge1xuICAgICAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChwYXJhbXMudmFsaWRfY2xhc3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoaW5pdDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghcnVsZXMgfHwgIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzW25hbWVdID0gZXhlY1ZhbGlkYXRlKGZvcm1FbCwgZWxlbWVudHMsIHJ1bGVzKVxuXG4gICAgICAgIGlmIChoYXNFcnJvcigpKSB7XG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3MoZWxlbWVudHMsIGluaXQpXG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3Mod2l0aEVsZW1lbnRzLCBpbml0KVxuICAgICAgICAgICAgYWRkSW52YWxpZENsYXNzKGlmRWxlbWVudHMsIGluaXQpXG5cbiAgICAgICAgICAgIGlmIChpbml0ICE9PSB0cnVlIHx8IHBhcmFtcy5pbml0aWFsX2Vycm9yX3ZpZXcpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICBlcnJvcnNbbmFtZV0ubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRWYWxpZENsYXNzKGVsZW1lbnRzKVxuICAgICAgICAgICAgYWRkVmFsaWRDbGFzcyh3aXRoRWxlbWVudHMpXG4gICAgICAgICAgICBhZGRWYWxpZENsYXNzKGlmRWxlbWVudHMpXG5cbiAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmNsYXNzTGlzdC5hZGQocGFyYW1zLmVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3MpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnNbbmFtZV0ubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGNvbnN0IGdldEVycm9ycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnNbbmFtZV1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRFdmVudHMgPSAoX2VsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSkgPT4ge1xuICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrRmllbGQoZWwpKSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRFdmVudHMoZWxlbWVudHMpXG4gICAgYWRkRXZlbnRzKHdpdGhFbGVtZW50cylcbiAgICBhZGRFdmVudHMoaWZFbGVtZW50cylcblxuICAgIHJldHVybiB7IGZvcm1FbCwgZWxlbWVudHMsIG5hbWUsIHJ1bGVzLCB2YWxpZGF0ZSwgaGFzRXJyb3IsIGdldEVycm9ycyB9XG59XG4iLCJpbXBvcnQge1xuICAgIEluaXRpYWxQYXJhbSxcbiAgICBJbml0aWFsUGFyYW1WYWxpZGF0b3IsXG4gICAgUGFyYW0sXG4gICAgRm9ybUVsZW1lbnQsXG4gICAgVmFsaWRhdGVkRXJyb3IsXG4gICAgRm9ybUVsZW1lbnRWYWxpZGF0b3IsXG59IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9tb2RlbC9FbGVtZW50J1xuXG5leHBvcnQgZGVmYXVsdCAoZm9ybUVsOiBGb3JtRWxlbWVudCwgcGFyYW1zOiBJbml0aWFsUGFyYW0pID0+IHtcbiAgICBGb3JtRWxlbWVudFZhbGlkYXRvci5wYXJzZShmb3JtRWwpXG4gICAgSW5pdGlhbFBhcmFtVmFsaWRhdG9yLnBhcnNlKHBhcmFtcylcblxuICAgIGNvbnN0IHRhcmdldEZvcm1FbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnQgZm9ybUVsIHRvIEhUTUxGb3JtRWxlbWVudCBpZiBpdCdzIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtRWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUVsKVxuXG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgdGFyZ2V0IGZvcm0gZWxlbWVudDogJHtmb3JtRWx9YClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsIGFzIEhUTUxGb3JtRWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1FbFxuICAgIH0pKClcblxuICAgIGlmICh0YXJnZXRGb3JtRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdmb3JtJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhcmdldCBlbGVtZW50IGlzIG5vdCA8Zm9ybT4gZWxlbWVudGApXG4gICAgfVxuXG4gICAgdGFyZ2V0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlXG5cbiAgICAgICAgdmFsaWRhdGUoKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGVycm9ycykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzW2tleV1cbiAgICAgICAgICAgIGZsYWcgPSBmbGFnICYmIGVycm9yLmxlbmd0aCA8PSAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmluZCBzdWJtaXQgYnV0dG9uIGlmIGl0J3Mgc3BlY2lmaWVkXG4gICAgICovXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbXMuc3VibWl0X2J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnN1Ym1pdF9idXR0b24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0Rm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMuc3VibWl0X2J1dHRvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuc3VibWl0X2J1dHRvblxuICAgIH0pKClcblxuICAgIC8qKlxuICAgICAqIEFycmFuZ2VkIHBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0IGFycmFuZ2VkUGFyYW1zOiBQYXJhbSA9IHtcbiAgICAgICAgLi4ue1xuICAgICAgICAgICAgZXJyb3JfY2xhc3M6ICdoYXMtZXJyb3InLFxuICAgICAgICAgICAgZXJyb3JfbWVzc2FnZV9jbGFzczogJ2lucHV0Zm9sbG93LWVycm9yJyxcbiAgICAgICAgICAgIGVtcHR5X2Vycm9yX21lc3NhZ2VfY2xhc3M6ICdpcy1lbXB0eScsXG4gICAgICAgICAgICB2YWxpZF9jbGFzczogJ2lzLXZhbGlkJyxcbiAgICAgICAgICAgIGluaXRpYWxfZXJyb3JfdmlldzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIFByb3h5IGZvciBvYnNlcnZpbmcgZXJyb3JzIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IGVycm9ycyA9IG5ldyBQcm94eTx7IFtrZXk6IHN0cmluZ106IFZhbGlkYXRlZEVycm9yW10gfT4oXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZXQ6ICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IFJlZmxlY3Quc2V0KHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKVxuICAgICAgICAgICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnNba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgZXJyb3IubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Ym1pdEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJhbmdlZFBhcmFtcy5vbl9zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYW5nZWRQYXJhbXMub25fc3VjY2VzcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmFuZ2VkUGFyYW1zLm9uX2Vycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYW5nZWRQYXJhbXMub25fZXJyb3IoZXJyb3JzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJpbmcgQ2hlY2tpbmcgRWxlbWVudHNcbiAgICAgKi9cbiAgICBjb25zdCBlbGVtZW50czogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlRWxlbWVudD5bXSA9IFtdXG4gICAgT2JqZWN0LmtleXMoYXJyYW5nZWRQYXJhbXMucnVsZXMpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IGFycmFuZ2VkUGFyYW1zLnJ1bGVzW25hbWVdXG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW3J1bGVzXVxuICAgICAgICB9KSgpXG4gICAgICAgIGlmICghcnVsZXMgfHwgIXJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIHRhcmdldEZvcm1FbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXJyYW5nZWRQYXJhbXMsXG4gICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudHMucHVzaChFbGVtZW50KVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB2YWxpZGF0aW5nXG4gICAgICovXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoaW5pdDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC52YWxpZGF0ZShpbml0KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0eXBlb2YgYXJyYW5nZWRQYXJhbXMub25fdmFsaWRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLm9uX3ZhbGlkYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgdmFsaWRhdGVcbiAgICB2YWxpZGF0ZSh0cnVlKVxuXG4gICAgcmV0dXJuIHsgZm9ybUVsOiB0YXJnZXRGb3JtRWxlbWVudCwgZWxlbWVudHMsIHZhbGlkYXRlIH1cbn1cbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJhciIsIkFycmF5Iiwic2xpY2UiLCJjb25jYXQiLCJ1dGlsIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJtYXAiLCJlIiwia2V5cyIsIm9iamVjdCIsImtleSIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsInVuZGVmaW5lZCIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsImFycmF5Iiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwiWm9kUGFyc2VkVHlwZSIsImdldFBhcnNlZFR5cGUiLCJkYXRhIiwic3RyaW5nIiwiaXNOYU4iLCJuYW4iLCJudW1iZXIiLCJiaWdpbnQiLCJzeW1ib2wiLCJpc0FycmF5IiwidGhlbiIsInByb21pc2UiLCJNYXAiLCJTZXQiLCJzZXQiLCJEYXRlIiwiZGF0ZSIsInVua25vd24iLCJab2RJc3N1ZUNvZGUiLCJxdW90ZWxlc3NKc29uIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiWm9kRXJyb3IiLCJpc3N1ZXMiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImN1cnIiLCJlbCIsInRlcm1pbmFsIiwiZm9ybUVycm9ycyIsImZsYXR0ZW4iLCJjcmVhdGUiLCJlcnJvck1hcCIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImN1c3RvbSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwic2V0RXJyb3JNYXAiLCJnZXRFcnJvck1hcCIsIm1ha2VJc3N1ZSIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJyZXZlcnNlIiwiX29iamVjdFNwcmVhZCIsIkVNUFRZX1BBVEgiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImN0eCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsIlBhcnNlU3RhdHVzIiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJJTlZBTElEIiwiZGlydHkiLCJwYWlycyIsInN5bmNQYWlycyIsInBhaXIiLCJtZXJnZU9iamVjdFN5bmMiLCJmaW5hbE9iamVjdCIsImFsd2F5c1NldCIsImZyZWV6ZSIsIkRJUlRZIiwiT0siLCJpc0Fib3J0ZWQiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImlzQXN5bmMiLCJQcm9taXNlIiwiZXJyb3JVdGlsIiwiZXJyVG9PYmoiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfcGF0aCIsIl9rZXkiLCJoYW5kbGVSZXN1bHQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicHJvY2Vzc0NyZWF0ZVBhcmFtcyIsImludmFsaWRfdHlwZV9lcnJvciIsInJlcXVpcmVkX2Vycm9yIiwiZGVzY3JpcHRpb24iLCJjdXN0b21NYXAiLCJpc3MiLCJab2RUeXBlIiwiZGVmIiwic3BhIiwic2FmZVBhcnNlQXN5bmMiLCJfZGVmIiwicGFyc2UiLCJiaW5kIiwic2FmZVBhcnNlIiwicGFyc2VBc3luYyIsInJlZmluZSIsInJlZmluZW1lbnQiLCJzdXBlclJlZmluZSIsIm9wdGlvbmFsIiwibnVsbGFibGUiLCJudWxsaXNoIiwib3IiLCJhbmQiLCJ0cmFuc2Zvcm0iLCJicmFuZCIsImRlc2NyaWJlIiwicGlwZSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwiaW5wdXQiLCJwYXJzZWRUeXBlIiwiX3BhcnNlIiwicmVzb2x2ZSIsIl9hIiwiYXN5bmMiLCJfcGFyc2VTeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnREYXRhIiwiWm9kRWZmZWN0cyIsInNjaGVtYSIsInR5cGVOYW1lIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiZWZmZWN0IiwiWm9kT3B0aW9uYWwiLCJab2ROdWxsYWJsZSIsIlpvZEFycmF5IiwiWm9kUHJvbWlzZSIsIm9wdGlvbiIsIlpvZFVuaW9uIiwiaW5jb21pbmciLCJab2RJbnRlcnNlY3Rpb24iLCJkZWZhdWx0VmFsdWVGdW5jIiwiWm9kRGVmYXVsdCIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlRoaXMiLCJjb25zdHJ1Y3RvciIsInRhcmdldCIsIlpvZFBpcGVsaW5lIiwiY3VpZFJlZ2V4IiwidXVpZFJlZ2V4IiwiZW1haWxSZWdleCIsImRhdGV0aW1lUmVnZXgiLCJhcmdzIiwicHJlY2lzaW9uIiwib2Zmc2V0IiwiUmVnRXhwIiwiWm9kU3RyaW5nIiwiX3JlZ2V4IiwicmVnZXgiLCJ0ZXN0Iiwibm9uZW1wdHkiLCJtaW4iLCJ0cmltIiwiY2hlY2tzIiwia2luZCIsImNvZXJjZSIsIlN0cmluZyIsIl9nZXRUeXBlIiwiX2dldE9yUmV0dXJuQ3R4IiwidG9vQmlnIiwidG9vU21hbGwiLCJVUkwiLCJsYXN0SW5kZXgiLCJ0ZXN0UmVzdWx0IiwiX2FkZENoZWNrIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibGVuIiwiY2giLCJtYXgiLCJmbG9hdFNhZmVSZW1haW5kZXIiLCJzdGVwIiwidmFsRGVjQ291bnQiLCJzcGxpdCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsInBvdyIsIlpvZE51bWJlciIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiWm9kQmlnSW50IiwiQmlnSW50IiwiWm9kQm9vbGVhbiIsIkJvb2xlYW4iLCJab2REYXRlIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiWm9kU3ltYm9sIiwiWm9kVW5kZWZpbmVkIiwiWm9kTnVsbCIsIlpvZEFueSIsIl9hbnkiLCJab2RVbmtub3duIiwiX3Vua25vd24iLCJab2ROZXZlciIsIm5ldmVyIiwiWm9kVm9pZCIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJleGFjdExlbmd0aCIsImFsbCIsIl9wYXJzZUFzeW5jIiwibWVyZ2VBcnJheSIsIm9iamVjdFV0aWwiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiQXVnbWVudEZhY3RvcnkiLCJhdWdtZW50YXRpb24iLCJab2RPYmplY3QiLCJzaGFwZSIsImRlZXBQYXJ0aWFsaWZ5IiwibmV3U2hhcGUiLCJmaWVsZFNjaGVtYSIsImVsZW1lbnQiLCJ1bndyYXAiLCJab2RUdXBsZSIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImluY2x1ZGVzIiwia2V5VmFsaWRhdG9yIiwiX2IiLCJfYyIsIl9kIiwibWVyZ2luZyIsIm1lcmdlZCIsImluZGV4IiwibWFzayIsImluZGV4T2YiLCJuZXdGaWVsZCIsImNyZWF0ZVpvZEVudW0iLCJzdHJpY3RDcmVhdGUiLCJsYXp5Y3JlYXRlIiwiaGFuZGxlUmVzdWx0cyIsImNoaWxkQ3R4IiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RFbnVtIiwiWm9kTmF0aXZlRW51bSIsIlpvZERpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yVmFsdWUiLCJvcHRpb25zTWFwIiwiZ2V0IiwiZGlzY3JpbWluYXRvclZhbHVlcyIsImhhcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwiWm9kUmVjb3JkIiwia2V5VHlwZSIsInZhbHVlVHlwZSIsIm1lcmdlT2JqZWN0QXN5bmMiLCJ0aGlyZCIsIlpvZE1hcCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIlpvZFNldCIsIm1pblNpemUiLCJzaXplIiwibWF4U2l6ZSIsImZpbmFsaXplU2V0IiwiZWxlbWVudHMiLCJwYXJzZWRTZXQiLCJhZGQiLCJ2YWx1ZXMiLCJab2RGdW5jdGlvbiIsInZhbGlkYXRlIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJwYXJzZWRBcmdzIiwicGFyc2VkUmV0dXJucyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsImVudW1WYWx1ZXMiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwicHJvY2Vzc2VkIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsImFib3J0IiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInByZXByb2Nlc3MiLCJab2ROYU4iLCJCUkFORCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJvdXQiLCJwMiIsImxhdGUiLCJpbnN0YW5jZU9mVHlwZSIsImNscyIsInN0cmluZ1R5cGUiLCJudW1iZXJUeXBlIiwibmFuVHlwZSIsImJpZ0ludFR5cGUiLCJib29sZWFuVHlwZSIsImRhdGVUeXBlIiwic3ltYm9sVHlwZSIsInVuZGVmaW5lZFR5cGUiLCJudWxsVHlwZSIsImFueVR5cGUiLCJ1bmtub3duVHlwZSIsIm5ldmVyVHlwZSIsInZvaWRUeXBlIiwiYXJyYXlUeXBlIiwib2JqZWN0VHlwZSIsInN0cmljdE9iamVjdFR5cGUiLCJ1bmlvblR5cGUiLCJkaXNjcmltaW5hdGVkVW5pb25UeXBlIiwiaW50ZXJzZWN0aW9uVHlwZSIsInR1cGxlVHlwZSIsInJlY29yZFR5cGUiLCJtYXBUeXBlIiwic2V0VHlwZSIsImZ1bmN0aW9uVHlwZSIsImxhenlUeXBlIiwibGl0ZXJhbFR5cGUiLCJlbnVtVHlwZSIsIm5hdGl2ZUVudW1UeXBlIiwicHJvbWlzZVR5cGUiLCJlZmZlY3RzVHlwZSIsIm9wdGlvbmFsVHlwZSIsIm51bGxhYmxlVHlwZSIsInByZXByb2Nlc3NUeXBlIiwicGlwZWxpbmVUeXBlIiwib3N0cmluZyIsIm9udW1iZXIiLCJvYm9vbGVhbiIsIk5FVkVSIiwibW9kIiwiZGVmYXVsdEVycm9yTWFwIiwiWm9kVHJhbnNmb3JtZXIiLCJTY2hlbWEiLCJab2RTY2hlbWEiLCJhbnkiLCJkaXNjcmltaW5hdGVkVW5pb24iLCJpbnRlcnNlY3Rpb24iLCJsYXp5IiwibGl0ZXJhbCIsIm5hdGl2ZUVudW0iLCJwaXBlbGluZSIsInJlY29yZCIsInN0cmljdE9iamVjdCIsInRyYW5zZm9ybWVyIiwidHVwbGUiLCJ1bmlvbiIsInoiLCJjaGVja1JlcXVpcmVkIiwiY2hlY2tFbWFpbCIsImNoZWNrTnVtYmVyIiwiZXhlY1ZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
