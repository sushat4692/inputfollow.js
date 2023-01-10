/*!
  inputfollow v0.0.1
  undefined
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
  var RuleOptionValidator = mod.object({
      type: ValidationTypeValidator,
      mode: mod.enum(['or', 'and']).optional(),
      with: mod.record(ValidationTypeValidator).optional(),
      if: mod.record(mod.string()).optional(),
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

  var getValue = function (elements) {
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
  var validate = function (elements, rule) {
      var errors = [];
      if (!Array.isArray(rule)) {
          rule = [rule];
      }
      var values = getValue(elements);
      rule.map(function (r) {
          switch (r.type) {
              case 'required':
                  if (!check$2(values)) {
                      errors.push({
                          type: r.type,
                          message: r.message,
                      });
                  }
                  break;
              case 'email':
                  if (!check$1(values)) {
                      errors.push({
                          type: r.type,
                          message: r.message,
                      });
                  }
                  break;
              case 'number':
                  if (!check(values)) {
                      errors.push({
                          type: r.type,
                          message: r.message,
                      });
                  }
                  break;
          }
      });
      return errors;
  };

  var createElement = function (formEl, name, rules, params, errors) {
      var elements = (function () {
          if (!Object.hasOwn(formEl, name)) {
              if (!Object.hasOwn(formEl, "".concat(name, "[]"))) {
                  return false;
              }
              name = "".concat(name, "[]");
          }
          var fields = formEl[name];
          if (fields[Symbol.iterator]) {
              fields = __spreadArray([], fields, true);
          }
          else {
              fields = [fields];
          }
          return fields;
      })();
      var withElements = (function () {
          var results = [];
          rules.map(function (rule) {
              if (!rule.with) {
                  return;
              }
              Object.keys(rule.with).map(function (name) {
                  if (!Object.hasOwn(formEl, name)) {
                      if (!Object.hasOwn(formEl, "".concat(name, "[]"))) {
                          return false;
                      }
                      name = "".concat(name, "[]");
                  }
                  var fields = formEl[name];
                  if (fields[Symbol.iterator]) {
                      fields = __spreadArray([], fields, true);
                  }
                  else {
                      fields = [fields];
                  }
                  results.push.apply(results, fields);
              });
          });
          return results;
      })();
      if (!elements || !elements.length) {
          throw Error("Not found target field element: ".concat(name));
      }
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
          errors[name] = validate(elements, rules);
          if (hasError()) {
              addInvalidClass(elements, init);
              addInvalidClass(withElements, init);
          }
          else {
              addValidClass(elements);
              addValidClass(withElements);
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
          valid_class: 'is-valid',
          initial_error_view: false,
      }, params);
      /**
       * Prepare Proxy for observing errors values
       */
      var errors = new Proxy({}, {
          set: function (target, p, value, receiver) {
              var set = Reflect.set(target, p, value, receiver);
              if (set && submitButton) {
                  var flag_1 = true;
                  Object.keys(errors).map(function (key) {
                      var error = errors[key];
                      flag_1 = flag_1 && error.length <= 0;
                  });
                  if (flag_1) {
                      submitButton.removeAttribute('disabled');
                      if (typeof arrangedParams.on_success === 'function') {
                          arrangedParams.on_success();
                      }
                  }
                  else {
                      submitButton.setAttribute('disabled', 'disabled');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRmb2xsb3cuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvdmFsaWRhdGUvUmVxdWlyZWQudHMiLCIuLi9zcmMvdmFsaWRhdGUvRW1haWwudHMiLCIuLi9zcmMvdmFsaWRhdGUvTnVtYmVyLnRzIiwiLi4vc3JjL3V0aWxzL1RhZy50cyIsIi4uL3NyYy92YWxpZGF0ZS9pbmRleC50cyIsIi4uL3NyYy9tb2RlbC9FbGVtZW50LnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG5cbmNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5jbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKGlzc3VlLm1pbmltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKGlzc3VlLm1heGltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuXG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGVycm9yTWFwO1xuZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuXG5jb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSB8fCBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICBlcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5jbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBhd2FpdCBwYWlyLmtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5jb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5jb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gdW5kZWZpbmVkICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXG52YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuXG5jbGFzcyBQYXJzZUlucHV0TGF6eVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdmFsdWUsIHBhdGgsIGtleSkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aC5jb25jYXQodGhpcy5fa2V5KTtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCB7IGVycm9yTWFwLCBpbnZhbGlkX3R5cGVfZXJyb3IsIHJlcXVpcmVkX2Vycm9yLCBkZXNjcmlwdGlvbiB9ID0gcGFyYW1zO1xuICAgIGlmIChlcnJvck1hcCAmJiAoaW52YWxpZF90eXBlX2Vycm9yIHx8IHJlcXVpcmVkX2Vycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBcImludmFsaWRfdHlwZV9lcnJvclwiIG9yIFwicmVxdWlyZWRfZXJyb3JcIiBpbiBjb25qdW5jdGlvbiB3aXRoIGN1c3RvbSBlcnJvciBtYXAuYCk7XG4gICAgfVxuICAgIGlmIChlcnJvck1hcClcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JNYXA6IGVycm9yTWFwLCBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGN1c3RvbU1hcCA9IChpc3MsIGN0eCkgPT4ge1xuICAgICAgICBpZiAoaXNzLmNvZGUgIT09IFwiaW52YWxpZF90eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IHJlcXVpcmVkX2Vycm9yICE9PSBudWxsICYmIHJlcXVpcmVkX2Vycm9yICE9PSB2b2lkIDAgPyByZXF1aXJlZF9lcnJvciA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBpbnZhbGlkX3R5cGVfZXJyb3IgIT09IG51bGwgJiYgaW52YWxpZF90eXBlX2Vycm9yICE9PSB2b2lkIDAgPyBpbnZhbGlkX3R5cGVfZXJyb3IgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuY2xhc3MgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoZGVmKSB7XG4gICAgICAgIC8qKiBBbGlhcyBvZiBzYWZlUGFyc2VBc3luYyAqL1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc2FmZVBhcnNlQXN5bmM7XG4gICAgICAgIHRoaXMuX2RlZiA9IGRlZjtcbiAgICAgICAgdGhpcy5wYXJzZSA9IHRoaXMucGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2UgPSB0aGlzLnNhZmVQYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnNlQXN5bmMgPSB0aGlzLnBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2VBc3luYyA9IHRoaXMuc2FmZVBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNwYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZSA9IHRoaXMucmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lbWVudCA9IHRoaXMucmVmaW5lbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1cGVyUmVmaW5lID0gdGhpcy5zdXBlclJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5vcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxhYmxlID0gdGhpcy5udWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxpc2ggPSB0aGlzLm51bGxpc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3IgPSB0aGlzLm9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5kID0gdGhpcy5hbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuY2F0Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuZGVzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waXBlID0gdGhpcy5waXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOdWxsYWJsZSA9IHRoaXMuaXNOdWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzT3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBfZ2V0VHlwZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIChjdHggfHwge1xuICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBuZXcgUGFyc2VTdGF0dXMoKSxcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3BhcnNlU3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bmNocm9ub3VzIHBhcnNlIGVuY291bnRlcmVkIHByb21pc2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9wYXJzZUFzeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cbiAgICBwYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zYWZlUGFyc2UoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIHNhZmVQYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuYXN5bmMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdClcbiAgICAgICAgICAgID8gbWF5YmVBc3luY1Jlc3VsdFxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eClcbiAgICAgICAgICAgICAgICAgICAgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIG9wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoKS5udWxsYWJsZSgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSk7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZyk7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHVuZGVmaW5lZCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuLy8gaW50ZXJmYWNlIElzRGF0ZVN0cmluZ09wdGlvbnMgZXh0ZW5kcyBTdHJpbmdEYXRlT3B0aW9ucyB7XG4vKipcbiAqIE1hdGNoIGFueSBjb25maWd1cmF0aW9uXG4gKi9cbi8vIGFueT86IGJvb2xlYW47XG4vLyB9XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmNvbnN0IGRhdGV0aW1lUmVnZXggPSAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBpZiAoYXJncy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fSgoWystXVxcXFxkezJ9OlxcXFxkezJ9KXxaKSRgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgaWYgKGFyZ3Mub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChhcmdzLm9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/WiRgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fcmVnZXggPSAocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpID0+IHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugei5zdHJpbmcoKS5taW4oMSkgaW5zdGVhZC5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgWm9kU3RyaW5nLm1pbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uZW1wdHkgPSAobWVzc2FnZSkgPT4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICAgICAgdGhpcy50cmltID0gKCkgPT4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24pID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vZmZzZXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IHBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IHBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIik7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY3R4LmRhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGN0eC5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZE9iamVjdCAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5jb25zdCBBdWdtZW50RmFjdG9yeSA9IChkZWYpID0+IChhdWdtZW50YXRpb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC4uLmRlZixcbiAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgdGhpcy5hdWdtZW50ID0gQXVnbWVudEZhY3RvcnkodGhpcy5fZGVmKTtcbiAgICAgICAgdGhpcy5leHRlbmQgPSBBdWdtZW50RmFjdG9yeSh0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHJldHVybiAodGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJlxuICAgICAgICAgICAgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gKF9jID0gKF9iID0gKF9hID0gdGhpcy5fZGVmKS5lcnJvck1hcCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGlzc3VlLCBjdHgpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChfZCA9IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAgICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgICAgICAvLyApO1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyhtYXNrKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBhZGQgdG8gc2hhcGUgaWYga2V5IGNvcnJlc3BvbmRzIHRvIGFuIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnQgc2hhcGVcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXBlW2tleV0pXG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5vYmplY3RLZXlzKG1hc2spLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsXG4gICAgICAgICAgICAub2JqZWN0S2V5cyhhKVxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjdHguZGF0YVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBnZXRFcnJvck1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcCxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCB0aGlzLl9kZWYuYXJnc1xuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oLi4ucGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IHRoaXMuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT0soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gdGhpcy5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLnBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IHRoaXMuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzXG4gICAgICAgICAgICAgICAgPyBhcmdzXG4gICAgICAgICAgICAgICAgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLnZhbHVlcy5pbmRleE9mKGlucHV0LmRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxufVxuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJlxuICAgICAgICAgICAgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXRpdmVFbnVtVmFsdWVzLmluZGV4T2YoaW5wdXQuZGF0YSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbigocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2NcbiAgICAgICAgICAgIC8vIGVmZmVjdDogUmVmaW5lbWVudEVmZmVjdDxhbnk+XG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGJhc2Uuc3RhdHVzID09PSBcImFib3J0ZWRcIikgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChiYXNlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoeyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBwYXJhbXMuZGVmYXVsdFxuICAgICAgICAgICAgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiID8gcmVzdWx0LnZhbHVlIDogdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIiA/IHJlc3VsdC52YWx1ZSA6IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gcGFyYW1zLmRlZmF1bHRcbiAgICAgICAgICAgIDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5jbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5jbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgY3VzdG9tID0gKGNoZWNrLCBwYXJhbXMgPSB7fSwgZmF0YWwpID0+IHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayhkYXRhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMoZGF0YSkgOiBwYXJhbXM7XG4gICAgICAgICAgICAgICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wMiwgZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59O1xuY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbnZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMsIHRydWUpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5jb25zdCBORVZFUiA9IElOVkFMSUQ7XG5cbnZhciBtb2QgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGRlZmF1bHRFcnJvck1hcDogZXJyb3JNYXAsXG4gICAgc2V0RXJyb3JNYXA6IHNldEVycm9yTWFwLFxuICAgIGdldEVycm9yTWFwOiBnZXRFcnJvck1hcCxcbiAgICBtYWtlSXNzdWU6IG1ha2VJc3N1ZSxcbiAgICBFTVBUWV9QQVRIOiBFTVBUWV9QQVRILFxuICAgIGFkZElzc3VlVG9Db250ZXh0OiBhZGRJc3N1ZVRvQ29udGV4dCxcbiAgICBQYXJzZVN0YXR1czogUGFyc2VTdGF0dXMsXG4gICAgSU5WQUxJRDogSU5WQUxJRCxcbiAgICBESVJUWTogRElSVFksXG4gICAgT0s6IE9LLFxuICAgIGlzQWJvcnRlZDogaXNBYm9ydGVkLFxuICAgIGlzRGlydHk6IGlzRGlydHksXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0FzeW5jOiBpc0FzeW5jLFxuICAgIGdldCB1dGlsICgpIHsgcmV0dXJuIHV0aWw7IH0sXG4gICAgWm9kUGFyc2VkVHlwZTogWm9kUGFyc2VkVHlwZSxcbiAgICBnZXRQYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlLFxuICAgIFpvZFR5cGU6IFpvZFR5cGUsXG4gICAgWm9kU3RyaW5nOiBab2RTdHJpbmcsXG4gICAgWm9kTnVtYmVyOiBab2ROdW1iZXIsXG4gICAgWm9kQmlnSW50OiBab2RCaWdJbnQsXG4gICAgWm9kQm9vbGVhbjogWm9kQm9vbGVhbixcbiAgICBab2REYXRlOiBab2REYXRlLFxuICAgIFpvZFN5bWJvbDogWm9kU3ltYm9sLFxuICAgIFpvZFVuZGVmaW5lZDogWm9kVW5kZWZpbmVkLFxuICAgIFpvZE51bGw6IFpvZE51bGwsXG4gICAgWm9kQW55OiBab2RBbnksXG4gICAgWm9kVW5rbm93bjogWm9kVW5rbm93bixcbiAgICBab2ROZXZlcjogWm9kTmV2ZXIsXG4gICAgWm9kVm9pZDogWm9kVm9pZCxcbiAgICBab2RBcnJheTogWm9kQXJyYXksXG4gICAgZ2V0IG9iamVjdFV0aWwgKCkgeyByZXR1cm4gb2JqZWN0VXRpbDsgfSxcbiAgICBab2RPYmplY3Q6IFpvZE9iamVjdCxcbiAgICBab2RVbmlvbjogWm9kVW5pb24sXG4gICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uOiBab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgWm9kSW50ZXJzZWN0aW9uOiBab2RJbnRlcnNlY3Rpb24sXG4gICAgWm9kVHVwbGU6IFpvZFR1cGxlLFxuICAgIFpvZFJlY29yZDogWm9kUmVjb3JkLFxuICAgIFpvZE1hcDogWm9kTWFwLFxuICAgIFpvZFNldDogWm9kU2V0LFxuICAgIFpvZEZ1bmN0aW9uOiBab2RGdW5jdGlvbixcbiAgICBab2RMYXp5OiBab2RMYXp5LFxuICAgIFpvZExpdGVyYWw6IFpvZExpdGVyYWwsXG4gICAgWm9kRW51bTogWm9kRW51bSxcbiAgICBab2ROYXRpdmVFbnVtOiBab2ROYXRpdmVFbnVtLFxuICAgIFpvZFByb21pc2U6IFpvZFByb21pc2UsXG4gICAgWm9kRWZmZWN0czogWm9kRWZmZWN0cyxcbiAgICBab2RUcmFuc2Zvcm1lcjogWm9kRWZmZWN0cyxcbiAgICBab2RPcHRpb25hbDogWm9kT3B0aW9uYWwsXG4gICAgWm9kTnVsbGFibGU6IFpvZE51bGxhYmxlLFxuICAgIFpvZERlZmF1bHQ6IFpvZERlZmF1bHQsXG4gICAgWm9kQ2F0Y2g6IFpvZENhdGNoLFxuICAgIFpvZE5hTjogWm9kTmFOLFxuICAgIEJSQU5EOiBCUkFORCxcbiAgICBab2RCcmFuZGVkOiBab2RCcmFuZGVkLFxuICAgIFpvZFBpcGVsaW5lOiBab2RQaXBlbGluZSxcbiAgICBjdXN0b206IGN1c3RvbSxcbiAgICBTY2hlbWE6IFpvZFR5cGUsXG4gICAgWm9kU2NoZW1hOiBab2RUeXBlLFxuICAgIGxhdGU6IGxhdGUsXG4gICAgZ2V0IFpvZEZpcnN0UGFydHlUeXBlS2luZCAoKSB7IHJldHVybiBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7IH0sXG4gICAgY29lcmNlOiBjb2VyY2UsXG4gICAgYW55OiBhbnlUeXBlLFxuICAgIGFycmF5OiBhcnJheVR5cGUsXG4gICAgYmlnaW50OiBiaWdJbnRUeXBlLFxuICAgIGJvb2xlYW46IGJvb2xlYW5UeXBlLFxuICAgIGRhdGU6IGRhdGVUeXBlLFxuICAgIGRpc2NyaW1pbmF0ZWRVbmlvbjogZGlzY3JpbWluYXRlZFVuaW9uVHlwZSxcbiAgICBlZmZlY3Q6IGVmZmVjdHNUeXBlLFxuICAgICdlbnVtJzogZW51bVR5cGUsXG4gICAgJ2Z1bmN0aW9uJzogZnVuY3Rpb25UeXBlLFxuICAgICdpbnN0YW5jZW9mJzogaW5zdGFuY2VPZlR5cGUsXG4gICAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25UeXBlLFxuICAgIGxhenk6IGxhenlUeXBlLFxuICAgIGxpdGVyYWw6IGxpdGVyYWxUeXBlLFxuICAgIG1hcDogbWFwVHlwZSxcbiAgICBuYW46IG5hblR5cGUsXG4gICAgbmF0aXZlRW51bTogbmF0aXZlRW51bVR5cGUsXG4gICAgbmV2ZXI6IG5ldmVyVHlwZSxcbiAgICAnbnVsbCc6IG51bGxUeXBlLFxuICAgIG51bGxhYmxlOiBudWxsYWJsZVR5cGUsXG4gICAgbnVtYmVyOiBudW1iZXJUeXBlLFxuICAgIG9iamVjdDogb2JqZWN0VHlwZSxcbiAgICBvYm9vbGVhbjogb2Jvb2xlYW4sXG4gICAgb251bWJlcjogb251bWJlcixcbiAgICBvcHRpb25hbDogb3B0aW9uYWxUeXBlLFxuICAgIG9zdHJpbmc6IG9zdHJpbmcsXG4gICAgcGlwZWxpbmU6IHBpcGVsaW5lVHlwZSxcbiAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzVHlwZSxcbiAgICBwcm9taXNlOiBwcm9taXNlVHlwZSxcbiAgICByZWNvcmQ6IHJlY29yZFR5cGUsXG4gICAgc2V0OiBzZXRUeXBlLFxuICAgIHN0cmljdE9iamVjdDogc3RyaWN0T2JqZWN0VHlwZSxcbiAgICBzdHJpbmc6IHN0cmluZ1R5cGUsXG4gICAgc3ltYm9sOiBzeW1ib2xUeXBlLFxuICAgIHRyYW5zZm9ybWVyOiBlZmZlY3RzVHlwZSxcbiAgICB0dXBsZTogdHVwbGVUeXBlLFxuICAgICd1bmRlZmluZWQnOiB1bmRlZmluZWRUeXBlLFxuICAgIHVuaW9uOiB1bmlvblR5cGUsXG4gICAgdW5rbm93bjogdW5rbm93blR5cGUsXG4gICAgJ3ZvaWQnOiB2b2lkVHlwZSxcbiAgICBORVZFUjogTkVWRVIsXG4gICAgWm9kSXNzdWVDb2RlOiBab2RJc3N1ZUNvZGUsXG4gICAgcXVvdGVsZXNzSnNvbjogcXVvdGVsZXNzSnNvbixcbiAgICBab2RFcnJvcjogWm9kRXJyb3Jcbn0pO1xuXG5leHBvcnQgeyBCUkFORCwgRElSVFksIEVNUFRZX1BBVEgsIElOVkFMSUQsIE5FVkVSLCBPSywgUGFyc2VTdGF0dXMsIFpvZFR5cGUgYXMgU2NoZW1hLCBab2RBbnksIFpvZEFycmF5LCBab2RCaWdJbnQsIFpvZEJvb2xlYW4sIFpvZEJyYW5kZWQsIFpvZENhdGNoLCBab2REYXRlLCBab2REZWZhdWx0LCBab2REaXNjcmltaW5hdGVkVW5pb24sIFpvZEVmZmVjdHMsIFpvZEVudW0sIFpvZEVycm9yLCBab2RGaXJzdFBhcnR5VHlwZUtpbmQsIFpvZEZ1bmN0aW9uLCBab2RJbnRlcnNlY3Rpb24sIFpvZElzc3VlQ29kZSwgWm9kTGF6eSwgWm9kTGl0ZXJhbCwgWm9kTWFwLCBab2ROYU4sIFpvZE5hdGl2ZUVudW0sIFpvZE5ldmVyLCBab2ROdWxsLCBab2ROdWxsYWJsZSwgWm9kTnVtYmVyLCBab2RPYmplY3QsIFpvZE9wdGlvbmFsLCBab2RQYXJzZWRUeXBlLCBab2RQaXBlbGluZSwgWm9kUHJvbWlzZSwgWm9kUmVjb3JkLCBab2RUeXBlIGFzIFpvZFNjaGVtYSwgWm9kU2V0LCBab2RTdHJpbmcsIFpvZFN5bWJvbCwgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciwgWm9kVHVwbGUsIFpvZFR5cGUsIFpvZFVuZGVmaW5lZCwgWm9kVW5pb24sIFpvZFVua25vd24sIFpvZFZvaWQsIGFkZElzc3VlVG9Db250ZXh0LCBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgY29lcmNlLCBjdXN0b20sIGRhdGVUeXBlIGFzIGRhdGUsIG1vZCBhcyBkZWZhdWx0LCBlcnJvck1hcCBhcyBkZWZhdWx0RXJyb3JNYXAsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgZ2V0RXJyb3JNYXAsIGdldFBhcnNlZFR5cGUsIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIGxhdGUsIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1ha2VJc3N1ZSwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYmplY3RVdGlsLCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHF1b3RlbGVzc0pzb24sIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc2V0RXJyb3JNYXAsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHV0aWwsIHZvaWRUeXBlIGFzIHZvaWQsIG1vZCBhcyB6IH07XG4iLCJpbXBvcnQgeiBmcm9tICd6b2QnXG5leHBvcnQgdHlwZSBQYXJ0aWFsbHlQYXJ0aWFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiBQYXJ0aWFsPFQ+XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0aW9uVHlwZVZhbGlkYXRvciA9IHouZW51bShbXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAnZW1haWwnLFxuICAgICdudW1iZXInLFxuICAgICdjb2RlJyxcbl0pXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uVHlwZSA9IHouaW5mZXI8dHlwZW9mIFZhbGlkYXRpb25UeXBlVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgUnVsZU9wdGlvblZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICB0eXBlOiBWYWxpZGF0aW9uVHlwZVZhbGlkYXRvcixcbiAgICBtb2RlOiB6LmVudW0oWydvcicsICdhbmQnXSkub3B0aW9uYWwoKSxcbiAgICB3aXRoOiB6LnJlY29yZChWYWxpZGF0aW9uVHlwZVZhbGlkYXRvcikub3B0aW9uYWwoKSxcbiAgICBpZjogei5yZWNvcmQoei5zdHJpbmcoKSkub3B0aW9uYWwoKSxcbiAgICBtZXNzYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KVxuZXhwb3J0IHR5cGUgUnVsZU9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIFJ1bGVPcHRpb25WYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBSdWxlVmFsaWRhdG9yID0gei5yZWNvcmQoXG4gICAgei51bmlvbihbUnVsZU9wdGlvblZhbGlkYXRvciwgei5hcnJheShSdWxlT3B0aW9uVmFsaWRhdG9yKV0pXG4pXG5leHBvcnQgdHlwZSBSdWxlID0gei5pbmZlcjx0eXBlb2YgUnVsZVZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRlZEVycm9yVmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICAgIHR5cGU6IHouc3RyaW5nKCksXG4gICAgbWVzc2FnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSlcbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEVycm9yID0geyB0eXBlOiBzdHJpbmc7IG1lc3NhZ2U/OiBzdHJpbmcgfVxuXG5leHBvcnQgY29uc3QgUGFyYW1WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgcnVsZXM6IFJ1bGVWYWxpZGF0b3IsXG4gICAgZXJyb3JfY2xhc3M6IHouc3RyaW5nKCksXG4gICAgdmFsaWRfY2xhc3M6IHouc3RyaW5nKCksXG4gICAgaW5pdGlhbF9lcnJvcl92aWV3OiB6LmJvb2xlYW4oKSxcbiAgICBzdWJtaXRfYnV0dG9uOiB6XG4gICAgICAgIC51bmlvbihbXG4gICAgICAgICAgICB6LnN0cmluZygpLFxuICAgICAgICAgICAgei5pbnN0YW5jZW9mKEhUTUxJbnB1dEVsZW1lbnQpLFxuICAgICAgICAgICAgei5pbnN0YW5jZW9mKEhUTUxCdXR0b25FbGVtZW50KSxcbiAgICAgICAgXSlcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgb25fdmFsaWRhdGU6IHouZnVuY3Rpb24oKS5yZXR1cm5zKHoudm9pZCgpKS5vcHRpb25hbCgpLFxuICAgIG9uX3N1Y2Nlc3M6IHouZnVuY3Rpb24oKS5yZXR1cm5zKHoudm9pZCgpKS5vcHRpb25hbCgpLFxuICAgIG9uX2Vycm9yOiB6XG4gICAgICAgIC5mdW5jdGlvbigpXG4gICAgICAgIC5hcmdzKHoucmVjb3JkKHouYXJyYXkoVmFsaWRhdGVkRXJyb3JWYWxpZGF0b3IpKSlcbiAgICAgICAgLnJldHVybnMoei52b2lkKCkpXG4gICAgICAgIC5vcHRpb25hbCgpLFxufSlcbmV4cG9ydCB0eXBlIFBhcmFtID0gei5pbmZlcjx0eXBlb2YgUGFyYW1WYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBJbml0aWFsUGFyYW1WYWxpZGF0b3IgPSBQYXJhbVZhbGlkYXRvci5wYXJ0aWFsKHtcbiAgICBlcnJvcl9jbGFzczogdHJ1ZSxcbiAgICB2YWxpZF9jbGFzczogdHJ1ZSxcbiAgICBpbml0aWFsX2Vycm9yX3ZpZXc6IHRydWUsXG59KVxuZXhwb3J0IHR5cGUgSW5pdGlhbFBhcmFtID0gei5pbmZlcjx0eXBlb2YgSW5pdGlhbFBhcmFtVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgUm9vdEV2ZW50VmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICAgIHZhbGlkYXRlOiB6LmZ1bmN0aW9uKCkucmV0dXJucyh6LnZvaWQoKSksXG59KVxuZXhwb3J0IHR5cGUgUm9vdEV2ZW50ID0gei5pbmZlcjx0eXBlb2YgUm9vdEV2ZW50VmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgVGFyZ2V0VmFsaWRhdG9yID0gei5yZWNvcmQoei5pbnN0YW5jZW9mKEhUTUxFbGVtZW50KSlcbmV4cG9ydCB0eXBlIFRhcmdldCA9IHouaW5mZXI8dHlwZW9mIFRhcmdldFZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IEZvcm1FbGVtZW50VmFsaWRhdG9yID0gei51bmlvbihbXG4gICAgei5zdHJpbmcoKSxcbiAgICB6Lmluc3RhbmNlb2YoSFRNTEZvcm1FbGVtZW50KSxcbl0pXG5leHBvcnQgdHlwZSBGb3JtRWxlbWVudCA9IHouaW5mZXI8dHlwZW9mIEZvcm1FbGVtZW50VmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgRmllbGRFbGVtZW50VmFsaWRhdG9yID0gei51bmlvbihbXG4gICAgei5pbnN0YW5jZW9mKEhUTUxJbnB1dEVsZW1lbnQpLFxuICAgIHouaW5zdGFuY2VvZihIVE1MU2VsZWN0RWxlbWVudCksXG4gICAgei5pbnN0YW5jZW9mKEhUTUxUZXh0QXJlYUVsZW1lbnQpLFxuXSlcbmV4cG9ydCB0eXBlIEZpZWxkRWxlbWVudCA9IHouaW5mZXI8dHlwZW9mIEZpZWxkRWxlbWVudFZhbGlkYXRvcj5cbiIsImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbi8qKlxuICogQ2hlY2sgcmVxdWlyZWQgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT5cbiAgICAgICAgICAgIHByZXYgJiYgei5zdHJpbmcoKS50cmltKCkubWluKDEpLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuLyoqXG4gKiBDaGVjayBFbWFpbCBmb3JtYXQgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PlxuICAgICAgICAgICAgcHJldiAmJiB6LnN0cmluZygpLmVtYWlsKCkuc2FmZVBhcnNlKGN1cnJlbnQpLnN1Y2Nlc3MsXG4gICAgICAgIHRydWVcbiAgICApXG59XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG4vKipcbiAqIENoZWNrIG51bWVyaWMgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PiBwcmV2ICYmIHouY29lcmNlLm51bWJlcigpLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgRmllbGRFbGVtZW50IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpc0NoZWNrRmllbGQgPSAoZWw6IEZpZWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgcmV0dXJuIHRhZyA9PT0gJ2lucHV0JyAmJiAodHlwZSA9PT0gJ3JhZGlvJyB8fCB0eXBlID09PSAnY2hlY2tib3gnKVxufVxuIiwiaW1wb3J0IHsgRmllbGRFbGVtZW50LCBSdWxlT3B0aW9uLCBWYWxpZGF0ZWRFcnJvciB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBjaGVjayBhcyBjaGVja1JlcXVpcmVkIH0gZnJvbSAnLi9SZXF1aXJlZCdcbmltcG9ydCB7IGNoZWNrIGFzIGNoZWNrRW1haWwgfSBmcm9tICcuL0VtYWlsJ1xuaW1wb3J0IHsgY2hlY2sgYXMgY2hlY2tOdW1iZXIgfSBmcm9tICcuL051bWJlcidcbmltcG9ydCB7IGlzQ2hlY2tGaWVsZCB9IGZyb20gJy4uL3V0aWxzL1RhZydcblxuZXhwb3J0IGNvbnN0IGdldFZhbHVlID0gKGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlczogc3RyaW5nW10gPSBbXVxuXG4gICAgZWxlbWVudHMubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoaXNDaGVja0ZpZWxkKGVsKSkge1xuICAgICAgICAgICAgaWYgKChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsdWVzXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChlbGVtZW50czogRmllbGRFbGVtZW50W10sIHJ1bGU6IFJ1bGVPcHRpb25bXSkgPT4ge1xuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSA9IFtdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGUpKSB7XG4gICAgICAgIHJ1bGUgPSBbcnVsZV1cbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZShlbGVtZW50cylcblxuICAgIHJ1bGUubWFwKChyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja1JlcXVpcmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGlmICghY2hlY2tFbWFpbCh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja051bWJlcih2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyB2YWxpZGF0ZSBhcyBleGVjVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0ZSdcblxuaW1wb3J0IHsgUGFyYW0sIEZpZWxkRWxlbWVudCwgVmFsaWRhdGVkRXJyb3IsIFJ1bGVPcHRpb24gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGlzQ2hlY2tGaWVsZCB9IGZyb20gJy4uL3V0aWxzL1RhZydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoXG4gICAgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJ1bGVzOiBSdWxlT3B0aW9uW10sXG4gICAgcGFyYW1zOiBQYXJhbSxcbiAgICBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGVkRXJyb3JbXSB9XG4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgICAgIGlmICghT2JqZWN0Lmhhc093bihmb3JtRWwsIG5hbWUpKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24oZm9ybUVsLCBgJHtuYW1lfVtdYCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hbWUgPSBgJHtuYW1lfVtdYFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpZWxkcyA9IGZvcm1FbFtuYW1lXVxuXG4gICAgICAgIGlmIChmaWVsZHNbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgZmllbGRzID0gWy4uLmZpZWxkc11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmllbGRzIGFzIEZpZWxkRWxlbWVudFtdXG4gICAgfSkoKVxuXG4gICAgY29uc3Qgd2l0aEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0czogRmllbGRFbGVtZW50W10gPSBbXVxuXG4gICAgICAgIHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFydWxlLndpdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocnVsZS53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24oZm9ybUVsLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24oZm9ybUVsLCBgJHtuYW1lfVtdYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBgJHtuYW1lfVtdYFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSBmb3JtRWxbbmFtZV1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHMgPSBbLi4uZmllbGRzXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKC4uLmZpZWxkcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICB9KSgpXG5cbiAgICBpZiAoIWVsZW1lbnRzIHx8ICFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYE5vdCBmb3VuZCB0YXJnZXQgZmllbGQgZWxlbWVudDogJHtuYW1lfWApXG4gICAgfVxuXG4gICAgY29uc3QgYWRkSW52YWxpZENsYXNzID0gKF9lbGVtZW50czogRmllbGRFbGVtZW50W10sIGluaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy52YWxpZF9jbGFzcykge1xuICAgICAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMudmFsaWRfY2xhc3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXQgIT09IHRydWUgfHwgcGFyYW1zLmluaXRpYWxfZXJyb3Jfdmlldykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5lcnJvcl9jbGFzcykge1xuICAgICAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5lcnJvcl9jbGFzcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVmFsaWRDbGFzcyA9IChfZWxlbWVudHM6IEZpZWxkRWxlbWVudFtdKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuZXJyb3JfY2xhc3MpIHtcbiAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmVycm9yX2NsYXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnZhbGlkX2NsYXNzKSB7XG4gICAgICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy52YWxpZF9jbGFzcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0ZSA9IChpbml0OiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKCFydWxlcyB8fCAhbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBlcnJvcnNbbmFtZV0gPSBleGVjVmFsaWRhdGUoZWxlbWVudHMsIHJ1bGVzKVxuXG4gICAgICAgIGlmIChoYXNFcnJvcigpKSB7XG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3MoZWxlbWVudHMsIGluaXQpXG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3Mod2l0aEVsZW1lbnRzLCBpbml0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVmFsaWRDbGFzcyhlbGVtZW50cylcbiAgICAgICAgICAgIGFkZFZhbGlkQ2xhc3Mod2l0aEVsZW1lbnRzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzW25hbWVdLmxlbmd0aCA+IDBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRFcnJvcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzW25hbWVdXG4gICAgfVxuXG4gICAgY29uc3QgYWRkRXZlbnRzID0gKF9lbGVtZW50czogRmllbGRFbGVtZW50W10pID0+IHtcbiAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDaGVja0ZpZWxkKGVsKSkge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKHRydWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkRXZlbnRzKGVsZW1lbnRzKVxuICAgIGFkZEV2ZW50cyh3aXRoRWxlbWVudHMpXG5cbiAgICByZXR1cm4geyBmb3JtRWwsIGVsZW1lbnRzLCBuYW1lLCBydWxlcywgdmFsaWRhdGUsIGhhc0Vycm9yLCBnZXRFcnJvcnMgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBJbml0aWFsUGFyYW0sXG4gICAgSW5pdGlhbFBhcmFtVmFsaWRhdG9yLFxuICAgIFBhcmFtLFxuICAgIEZvcm1FbGVtZW50LFxuICAgIFZhbGlkYXRlZEVycm9yLFxuICAgIEZvcm1FbGVtZW50VmFsaWRhdG9yLFxufSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vbW9kZWwvRWxlbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgKGZvcm1FbDogRm9ybUVsZW1lbnQsIHBhcmFtczogSW5pdGlhbFBhcmFtKSA9PiB7XG4gICAgRm9ybUVsZW1lbnRWYWxpZGF0b3IucGFyc2UoZm9ybUVsKVxuICAgIEluaXRpYWxQYXJhbVZhbGlkYXRvci5wYXJzZShwYXJhbXMpXG5cbiAgICBjb25zdCB0YXJnZXRGb3JtRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0IGZvcm1FbCB0byBIVE1MRm9ybUVsZW1lbnQgaWYgaXQncyBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgZm9ybUVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1FbClcblxuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHRhcmdldCBmb3JtIGVsZW1lbnQ6ICR7Zm9ybUVsfWApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbCBhcyBIVE1MRm9ybUVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRWxcbiAgICB9KSgpXG5cbiAgICBpZiAodGFyZ2V0Rm9ybUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnZm9ybScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXJnZXQgZWxlbWVudCBpcyBub3QgPGZvcm0+IGVsZW1lbnRgKVxuICAgIH1cblxuICAgIHRhcmdldEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZVxuXG4gICAgICAgIHZhbGlkYXRlKClcblxuICAgICAgICBPYmplY3Qua2V5cyhlcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yc1trZXldXG4gICAgICAgICAgICBmbGFnID0gZmxhZyAmJiBlcnJvci5sZW5ndGggPD0gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZpbmQgc3VibWl0IGJ1dHRvbiBpZiBpdCdzIHNwZWNpZmllZFxuICAgICAqL1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGlmICghcGFyYW1zLnN1Ym1pdF9idXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcy5zdWJtaXRfYnV0dG9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnN1Ym1pdF9idXR0b24pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zLnN1Ym1pdF9idXR0b25cbiAgICB9KSgpXG5cbiAgICAvKipcbiAgICAgKiBBcnJhbmdlZCBwYXJhbXNcbiAgICAgKi9cbiAgICBjb25zdCBhcnJhbmdlZFBhcmFtczogUGFyYW0gPSB7XG4gICAgICAgIC4uLntcbiAgICAgICAgICAgIGVycm9yX2NsYXNzOiAnaGFzLWVycm9yJyxcbiAgICAgICAgICAgIHZhbGlkX2NsYXNzOiAnaXMtdmFsaWQnLFxuICAgICAgICAgICAgaW5pdGlhbF9lcnJvcl92aWV3OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgUHJveHkgZm9yIG9ic2VydmluZyBlcnJvcnMgdmFsdWVzXG4gICAgICovXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IFByb3h5PHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGVkRXJyb3JbXSB9PihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldDogKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpXG4gICAgICAgICAgICAgICAgaWYgKHNldCAmJiBzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnNba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgZXJyb3IubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmFuZ2VkUGFyYW1zLm9uX3N1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJhbmdlZFBhcmFtcy5vbl9zdWNjZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJhbmdlZFBhcmFtcy5vbl9lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLm9uX2Vycm9yKGVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyaW5nIENoZWNraW5nIEVsZW1lbnRzXG4gICAgICovXG4gICAgY29uc3QgZWxlbWVudHM6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUVsZW1lbnQ+W10gPSBbXVxuICAgIE9iamVjdC5rZXlzKGFycmFuZ2VkUGFyYW1zLnJ1bGVzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZXMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBhcnJhbmdlZFBhcmFtcy5ydWxlc1tuYW1lXVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtydWxlc11cbiAgICAgICAgfSkoKVxuICAgICAgICBpZiAoIXJ1bGVzIHx8ICFydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICB0YXJnZXRGb3JtRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLFxuICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50cy5wdXNoKEVsZW1lbnQpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHZhbGlkYXRpbmdcbiAgICAgKi9cbiAgICBjb25zdCB2YWxpZGF0ZSA9IChpbml0OiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgICAgICAgZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnZhbGlkYXRlKGluaXQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcnJhbmdlZFBhcmFtcy5vbl92YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJyYW5nZWRQYXJhbXMub25fdmFsaWRhdGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCB2YWxpZGF0ZVxuICAgIHZhbGlkYXRlKHRydWUpXG5cbiAgICByZXR1cm4geyBmb3JtRWw6IHRhcmdldEZvcm1FbGVtZW50LCBlbGVtZW50cywgdmFsaWRhdGUgfVxufVxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwibCIsImFyIiwiQXJyYXkiLCJzbGljZSIsImNvbmNhdCIsInV0aWwiLCJhc3NlcnRFcXVhbCIsInZhbCIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsIm1hcCIsImUiLCJrZXlzIiwib2JqZWN0Iiwia2V5IiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwidW5kZWZpbmVkIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwiYXJyYXkiLCJzZXBhcmF0b3IiLCJqb2luIiwianNvblN0cmluZ2lmeVJlcGxhY2VyIiwiXyIsInZhbHVlIiwidG9TdHJpbmciLCJab2RQYXJzZWRUeXBlIiwiZ2V0UGFyc2VkVHlwZSIsImRhdGEiLCJzdHJpbmciLCJpc05hTiIsIm5hbiIsIm51bWJlciIsImJpZ2ludCIsInN5bWJvbCIsImlzQXJyYXkiLCJ0aGVuIiwicHJvbWlzZSIsIk1hcCIsIlNldCIsInNldCIsIkRhdGUiLCJkYXRlIiwidW5rbm93biIsIlpvZElzc3VlQ29kZSIsInF1b3RlbGVzc0pzb24iLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJab2RFcnJvciIsImlzc3VlcyIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwiY3VyciIsImVsIiwidGVybWluYWwiLCJmb3JtRXJyb3JzIiwiZmxhdHRlbiIsImNyZWF0ZSIsImVycm9yTWFwIiwiX2N0eCIsImludmFsaWRfdHlwZSIsInJlY2VpdmVkIiwiZXhwZWN0ZWQiLCJpbnZhbGlkX2xpdGVyYWwiLCJ1bnJlY29nbml6ZWRfa2V5cyIsImludmFsaWRfdW5pb24iLCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IiLCJvcHRpb25zIiwiaW52YWxpZF9lbnVtX3ZhbHVlIiwiaW52YWxpZF9hcmd1bWVudHMiLCJpbnZhbGlkX3JldHVybl90eXBlIiwiaW52YWxpZF9kYXRlIiwiaW52YWxpZF9zdHJpbmciLCJ2YWxpZGF0aW9uIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidG9vX3NtYWxsIiwidHlwZSIsImV4YWN0IiwiaW5jbHVzaXZlIiwibWluaW11bSIsInRvb19iaWciLCJtYXhpbXVtIiwiY3VzdG9tIiwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMiLCJub3RfbXVsdGlwbGVfb2YiLCJtdWx0aXBsZU9mIiwibm90X2Zpbml0ZSIsImRlZmF1bHRFcnJvciIsIm92ZXJyaWRlRXJyb3JNYXAiLCJzZXRFcnJvck1hcCIsImdldEVycm9yTWFwIiwibWFrZUlzc3VlIiwicGFyYW1zIiwiZXJyb3JNYXBzIiwiaXNzdWVEYXRhIiwiZnVsbFBhdGgiLCJmdWxsSXNzdWUiLCJlcnJvck1lc3NhZ2UiLCJtYXBzIiwibSIsInJldmVyc2UiLCJfb2JqZWN0U3ByZWFkIiwiRU1QVFlfUEFUSCIsImFkZElzc3VlVG9Db250ZXh0IiwiY3R4IiwiY29tbW9uIiwiY29udGV4dHVhbEVycm9yTWFwIiwic2NoZW1hRXJyb3JNYXAiLCJ4IiwiUGFyc2VTdGF0dXMiLCJzdGF0dXMiLCJyZXN1bHRzIiwiYXJyYXlWYWx1ZSIsIklOVkFMSUQiLCJkaXJ0eSIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiRElSVFkiLCJPSyIsImlzQWJvcnRlZCIsImlzRGlydHkiLCJpc1ZhbGlkIiwiaXNBc3luYyIsIlByb21pc2UiLCJlcnJvclV0aWwiLCJlcnJUb09iaiIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIlpvZFR5cGUiLCJkZWYiLCJzcGEiLCJzYWZlUGFyc2VBc3luYyIsIl9kZWYiLCJwYXJzZSIsImJpbmQiLCJzYWZlUGFyc2UiLCJwYXJzZUFzeW5jIiwicmVmaW5lIiwicmVmaW5lbWVudCIsInN1cGVyUmVmaW5lIiwib3B0aW9uYWwiLCJudWxsYWJsZSIsIm51bGxpc2giLCJvciIsImFuZCIsInRyYW5zZm9ybSIsImJyYW5kIiwiZGVzY3JpYmUiLCJwaXBlIiwiaXNOdWxsYWJsZSIsImlzT3B0aW9uYWwiLCJpbnB1dCIsInBhcnNlZFR5cGUiLCJfcGFyc2UiLCJyZXNvbHZlIiwiX2EiLCJhc3luYyIsIl9wYXJzZVN5bmMiLCJtYXliZUFzeW5jUmVzdWx0IiwiY2hlY2siLCJnZXRJc3N1ZVByb3BlcnRpZXMiLCJfcmVmaW5lbWVudCIsInNldEVycm9yIiwicmVmaW5lbWVudERhdGEiLCJab2RFZmZlY3RzIiwic2NoZW1hIiwidHlwZU5hbWUiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQiLCJlZmZlY3QiLCJab2RPcHRpb25hbCIsIlpvZE51bGxhYmxlIiwiWm9kQXJyYXkiLCJab2RQcm9taXNlIiwib3B0aW9uIiwiWm9kVW5pb24iLCJpbmNvbWluZyIsIlpvZEludGVyc2VjdGlvbiIsImRlZmF1bHRWYWx1ZUZ1bmMiLCJab2REZWZhdWx0IiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiWm9kQnJhbmRlZCIsIlpvZENhdGNoIiwiVGhpcyIsImNvbnN0cnVjdG9yIiwidGFyZ2V0IiwiWm9kUGlwZWxpbmUiLCJjdWlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJlbWFpbFJlZ2V4IiwiZGF0ZXRpbWVSZWdleCIsImFyZ3MiLCJwcmVjaXNpb24iLCJvZmZzZXQiLCJSZWdFeHAiLCJab2RTdHJpbmciLCJfcmVnZXgiLCJyZWdleCIsInRlc3QiLCJub25lbXB0eSIsIm1pbiIsInRyaW0iLCJjaGVja3MiLCJraW5kIiwiY29lcmNlIiwiU3RyaW5nIiwiX2dldFR5cGUiLCJfZ2V0T3JSZXR1cm5DdHgiLCJ0b29CaWciLCJ0b29TbWFsbCIsIlVSTCIsImxhc3RJbmRleCIsInRlc3RSZXN1bHQiLCJfYWRkQ2hlY2siLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJsZW4iLCJjaCIsIm1heCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInNwbGl0Iiwic3RlcERlY0NvdW50IiwiZGVjQ291bnQiLCJ2YWxJbnQiLCJwYXJzZUludCIsInRvRml4ZWQiLCJzdGVwSW50IiwicG93IiwiWm9kTnVtYmVyIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJab2RCaWdJbnQiLCJCaWdJbnQiLCJab2RCb29sZWFuIiwiQm9vbGVhbiIsIlpvZERhdGUiLCJnZXRUaW1lIiwibWluRGF0ZSIsIm1heERhdGUiLCJab2RTeW1ib2wiLCJab2RVbmRlZmluZWQiLCJab2ROdWxsIiwiWm9kQW55IiwiX2FueSIsIlpvZFVua25vd24iLCJfdW5rbm93biIsIlpvZE5ldmVyIiwibmV2ZXIiLCJab2RWb2lkIiwiX3Byb2Nlc3NJbnB1dFBhcmFtcyIsImV4YWN0TGVuZ3RoIiwiYWxsIiwiX3BhcnNlQXN5bmMiLCJtZXJnZUFycmF5Iiwib2JqZWN0VXRpbCIsIm1lcmdlU2hhcGVzIiwiZmlyc3QiLCJzZWNvbmQiLCJBdWdtZW50RmFjdG9yeSIsImF1Z21lbnRhdGlvbiIsIlpvZE9iamVjdCIsInNoYXBlIiwiZGVlcFBhcnRpYWxpZnkiLCJuZXdTaGFwZSIsImZpZWxkU2NoZW1hIiwiZWxlbWVudCIsInVud3JhcCIsIlpvZFR1cGxlIiwiX2NhY2hlZCIsIm5vbnN0cmljdCIsInBhc3N0aHJvdWdoIiwiYXVnbWVudCIsImV4dGVuZCIsIl9nZXRDYWNoZWQiLCJzaGFwZUtleXMiLCJleHRyYUtleXMiLCJjYXRjaGFsbCIsInVua25vd25LZXlzIiwiaW5jbHVkZXMiLCJrZXlWYWxpZGF0b3IiLCJfYiIsIl9jIiwiX2QiLCJtZXJnaW5nIiwibWVyZ2VkIiwiaW5kZXgiLCJtYXNrIiwiaW5kZXhPZiIsIm5ld0ZpZWxkIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZEVudW0iLCJab2ROYXRpdmVFbnVtIiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJnZXQiLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwiaGFzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsIm5ld09iaiIsInNoYXJlZFZhbHVlIiwibmV3QXJyYXkiLCJpdGVtQSIsIml0ZW1CIiwiaGFuZGxlUGFyc2VkIiwicGFyc2VkTGVmdCIsInBhcnNlZFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwicmVzdCIsIml0ZW1JbmRleCIsInNjaGVtYXMiLCJab2RSZWNvcmQiLCJrZXlUeXBlIiwidmFsdWVUeXBlIiwibWVyZ2VPYmplY3RBc3luYyIsInRoaXJkIiwiWm9kTWFwIiwiZW50cmllcyIsImZpbmFsTWFwIiwiWm9kU2V0IiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50cyIsInBhcnNlZFNldCIsImFkZCIsInZhbHVlcyIsIlpvZEZ1bmN0aW9uIiwidmFsaWRhdGUiLCJpbXBsZW1lbnQiLCJtYWtlQXJnc0lzc3VlIiwibWFrZVJldHVybnNJc3N1ZSIsInJldHVybnMiLCJmbiIsInBhcnNlZEFyZ3MiLCJwYXJzZWRSZXR1cm5zIiwicmV0dXJuVHlwZSIsImZ1bmMiLCJ2YWxpZGF0ZWRGdW5jIiwiZ2V0dGVyIiwibGF6eVNjaGVtYSIsImV4cGVjdGVkVmFsdWVzIiwiZW51bVZhbHVlcyIsIm5hdGl2ZUVudW1WYWx1ZXMiLCJwcm9taXNpZmllZCIsInNvdXJjZVR5cGUiLCJwcm9jZXNzZWQiLCJjaGVja0N0eCIsImFyZyIsImZhdGFsIiwiYWJvcnQiLCJleGVjdXRlUmVmaW5lbWVudCIsImFjYyIsImlubmVyIiwiYmFzZSIsImNyZWF0ZVdpdGhQcmVwcm9jZXNzIiwicHJlcHJvY2VzcyIsIlpvZE5hTiIsIkJSQU5EIiwiU3ltYm9sIiwiaGFuZGxlQXN5bmMiLCJpblJlc3VsdCIsIm91dCIsInAyIiwibGF0ZSIsImluc3RhbmNlT2ZUeXBlIiwiY2xzIiwic3RyaW5nVHlwZSIsIm51bWJlclR5cGUiLCJuYW5UeXBlIiwiYmlnSW50VHlwZSIsImJvb2xlYW5UeXBlIiwiZGF0ZVR5cGUiLCJzeW1ib2xUeXBlIiwidW5kZWZpbmVkVHlwZSIsIm51bGxUeXBlIiwiYW55VHlwZSIsInVua25vd25UeXBlIiwibmV2ZXJUeXBlIiwidm9pZFR5cGUiLCJhcnJheVR5cGUiLCJvYmplY3RUeXBlIiwic3RyaWN0T2JqZWN0VHlwZSIsInVuaW9uVHlwZSIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJpbnRlcnNlY3Rpb25UeXBlIiwidHVwbGVUeXBlIiwicmVjb3JkVHlwZSIsIm1hcFR5cGUiLCJzZXRUeXBlIiwiZnVuY3Rpb25UeXBlIiwibGF6eVR5cGUiLCJsaXRlcmFsVHlwZSIsImVudW1UeXBlIiwibmF0aXZlRW51bVR5cGUiLCJwcm9taXNlVHlwZSIsImVmZmVjdHNUeXBlIiwib3B0aW9uYWxUeXBlIiwibnVsbGFibGVUeXBlIiwicHJlcHJvY2Vzc1R5cGUiLCJwaXBlbGluZVR5cGUiLCJvc3RyaW5nIiwib251bWJlciIsIm9ib29sZWFuIiwiTkVWRVIiLCJtb2QiLCJkZWZhdWx0RXJyb3JNYXAiLCJab2RUcmFuc2Zvcm1lciIsIlNjaGVtYSIsIlpvZFNjaGVtYSIsImFueSIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImludGVyc2VjdGlvbiIsImxhenkiLCJsaXRlcmFsIiwibmF0aXZlRW51bSIsInBpcGVsaW5lIiwicmVjb3JkIiwic3RyaWN0T2JqZWN0IiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInVuaW9uIiwieiIsImNoZWNrUmVxdWlyZWQiLCJjaGVja0VtYWlsIiwiY2hlY2tOdW1iZXIiLCJleGVjVmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsUUFBQTtFQUFBLElBQUEsR0FBQSxFQUNELFNBQWEsR0FBQSxHQUFBO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDdkUsSUFBSSxDQUFDc0UsTUFBTSxDQUFDdk8sSUFBSSxDQUFDLFVBQUNzUCxFQUFFLEVBQUE7RUFBQSxRQUFBLE9BQUtBLEVBQUUsQ0FBQ2QsSUFBSSxLQUFLLE1BQU0sQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM5RCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsUUFBQTtFQUFBLElBQUEsR0FBQSxFQUNELFNBQWEsR0FBQSxHQUFBO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDdkUsSUFBSSxDQUFDc0UsTUFBTSxDQUFDdk8sSUFBSSxDQUFDLFVBQUNzUCxFQUFFLEVBQUE7RUFBQSxRQUFBLE9BQUtBLEVBQUUsQ0FBQ2QsSUFBSSxLQUFLLE1BQU0sQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM5RCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsR0FBQSxFQUNELFNBQWdCLEdBQUEsR0FBQTtRQUNaLElBQUlILEdBQUcsR0FBRyxJQUFJLENBQUE7RUFBQyxNQUFBLElBQUEsV0FBQSxHQUFBLDBCQUFBLENBQ0UsSUFBSSxDQUFDcEUsSUFBSSxDQUFDc0UsTUFBTSxDQUFBO0VBQUEsUUFBQSxPQUFBLENBQUE7RUFBQSxNQUFBLElBQUE7VUFBakMsS0FBbUMsV0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxPQUFBLEdBQUEsV0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLElBQUEsR0FBQTtFQUFBLFVBQUEsSUFBeEJlLEVBQUUsR0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBO0VBQ1QsVUFBQSxJQUFJQSxFQUFFLENBQUNkLElBQUksS0FBSyxLQUFLLEVBQUU7RUFDbkIsWUFBQSxJQUFJSCxHQUFHLEtBQUssSUFBSSxJQUFJaUIsRUFBRSxDQUFDdk8s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QUEsRUFBQTtFQUFBLGlCQUFBLENBQUE7RUFBQSxnQkFBQSxTQUFBLENBQUEsRUFBQSxDQUhIdEksSUFBSSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUFBLGNBQUEsS0FBQSxFQUFBO0VBQUEsZ0JBQUEsU0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUE7RUFBQSxnQkFBQSxNQUFBO0VBQUEsY0FBQSxLQUFBLEVBQUE7RUFBQSxnQkFBQSxTQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTtFQUFBLGdCQUFBLE1BQUE7RUFBQSxjQUFBLEtBQUEsRUFBQTtFQUFBLGdCQUFBLFNBQUEsQ0FBQSxJQUFBLEdBQUEsRUFBQSxDQUFBO0VBQUEsZ0JBQUEsU0FBQSxDQUFBLEVBQUEsR0FBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxnQkFBQSxXQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUFBLGNBQUEsS0FBQSxFQUFBO0VBQUEsZ0JBQUEsU0FBQSxDQUFBLElBQUEsR0FBQSxFQUFBLENBQUE7RUFBQSxnQkFBQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxnQkFBQSxPQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7RUFBQSxjQUFBLEtBQUEsRUFBQTtFQUFBLGdCQUFBLE9BQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEVBTVhrSSxTQUFTLENBQUEsQ0FBQTtFQUFBLGNBQUEsS0FBQSxFQUFBLENBQUE7RUFBQSxjQUFBLEtBQUEsS0FBQTtFQUFBLGdCQUFBLE9BQUEsU0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBO0VBQUEsYUFBQTtFQUFBLFdBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxTQUNu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
