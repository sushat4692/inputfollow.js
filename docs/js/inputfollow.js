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
              }
          }
          else {
              addValidClass(elements);
              addValidClass(withElements);
              addValidClass(ifElements);
              messageField.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRmb2xsb3cuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiLCIuLi9zcmMvdHlwZXMudHMiLCIuLi9zcmMvdmFsaWRhdGUvUmVxdWlyZWQudHMiLCIuLi9zcmMvdmFsaWRhdGUvRW1haWwudHMiLCIuLi9zcmMvdmFsaWRhdGUvTnVtYmVyLnRzIiwiLi4vc3JjL3V0aWxzL1RhZy50cyIsIi4uL3NyYy92YWxpZGF0ZS9pbmRleC50cyIsIi4uL3NyYy9tb2RlbC9FbGVtZW50LnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsInZhciB1dGlsO1xuKGZ1bmN0aW9uICh1dGlsKSB7XG4gICAgdXRpbC5hc3NlcnRFcXVhbCA9ICh2YWwpID0+IHZhbDtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyBgJyR7dmFsfSdgIDogdmFsKSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpc05hTihkYXRhKSA/IFpvZFBhcnNlZFR5cGUubmFuIDogWm9kUGFyc2VkVHlwZS5udW1iZXI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5ib29sZWFuO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uO1xuICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5iaWdpbnQ7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnN5bWJvbDtcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5hcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUubWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5vYmplY3Q7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS51bmtub3duO1xuICAgIH1cbn07XG5cbmNvbnN0IFpvZElzc3VlQ29kZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwiaW52YWxpZF90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2xpdGVyYWxcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW52YWxpZF91bmlvblwiLFxuICAgIFwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yXCIsXG4gICAgXCJpbnZhbGlkX2VudW1fdmFsdWVcIixcbiAgICBcInVucmVjb2duaXplZF9rZXlzXCIsXG4gICAgXCJpbnZhbGlkX2FyZ3VtZW50c1wiLFxuICAgIFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiLFxuICAgIFwiaW52YWxpZF9kYXRlXCIsXG4gICAgXCJpbnZhbGlkX3N0cmluZ1wiLFxuICAgIFwidG9vX3NtYWxsXCIsXG4gICAgXCJ0b29fYmlnXCIsXG4gICAgXCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlc1wiLFxuICAgIFwibm90X211bHRpcGxlX29mXCIsXG4gICAgXCJub3RfZmluaXRlXCIsXG5dKTtcbmNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5jbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGdldCBlcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHt9O1xuICAgICAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoc3ViLnBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSA9IGZpZWxkRXJyb3JzW3N1Yi5wYXRoWzBdXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgZXJyb3JNYXAgPSAoaXNzdWUsIF9jdHgpID0+IHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBzd2l0Y2ggKGlzc3VlLmNvZGUpIHtcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnJlY2VpdmVkID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEV4cGVjdGVkICR7aXNzdWUuZXhwZWN0ZWR9LCByZWNlaXZlZCAke2lzc3VlLnJlY2VpdmVkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9saXRlcmFsOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGxpdGVyYWwgdmFsdWUsIGV4cGVjdGVkICR7SlNPTi5zdHJpbmdpZnkoaXNzdWUuZXhwZWN0ZWQsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnVucmVjb2duaXplZF9rZXlzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBVbnJlY29nbml6ZWQga2V5KHMpIGluIG9iamVjdDogJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUua2V5cywgXCIsIFwiKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb246XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvcjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBlbnVtIHZhbHVlLiBFeHBlY3RlZCAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5vcHRpb25zKX0sIHJlY2VpdmVkICcke2lzc3VlLnJlY2VpdmVkfSdgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIGFyZ3VtZW50c2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiByZXR1cm4gdHlwZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRhdGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc3N1ZS52YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHkgZXF1YWwgdG8gYFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5IGVxdWFsIHRvIGBcbiAgICAgICAgICAgICAgICAgICAgOiBpc3N1ZS5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBncmVhdGVyIHRoYW4gYH0ke25ldyBEYXRlKGlzc3VlLm1pbmltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdFxuICAgICAgICAgICAgICAgICAgICA/IGBleGFjdGx5YFxuICAgICAgICAgICAgICAgICAgICA6IGlzc3VlLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0XG4gICAgICAgICAgICAgICAgICAgID8gYGV4YWN0bHlgXG4gICAgICAgICAgICAgICAgICAgIDogaXNzdWUuaW5jbHVzaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG9gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKGlzc3VlLm1heGltdW0pfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuXG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGVycm9yTWFwO1xuZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWFwKCkge1xuICAgIHJldHVybiBvdmVycmlkZUVycm9yTWFwO1xufVxuXG5jb25zdCBtYWtlSXNzdWUgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXRoLCBlcnJvck1hcHMsIGlzc3VlRGF0YSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gWy4uLnBhdGgsIC4uLihpc3N1ZURhdGEucGF0aCB8fCBbXSldO1xuICAgIGNvbnN0IGZ1bGxJc3N1ZSA9IHtcbiAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICBwYXRoOiBmdWxsUGF0aCxcbiAgICB9O1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IG1hcHMgPSBlcnJvck1hcHNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gISFtKVxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gbWFwKGZ1bGxJc3N1ZSwgeyBkYXRhLCBkZWZhdWx0RXJyb3I6IGVycm9yTWVzc2FnZSB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5pc3N1ZURhdGEsXG4gICAgICAgIHBhdGg6IGZ1bGxQYXRoLFxuICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSB8fCBlcnJvck1lc3NhZ2UsXG4gICAgfTtcbn07XG5jb25zdCBFTVBUWV9QQVRIID0gW107XG5mdW5jdGlvbiBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGlzc3VlRGF0YSkge1xuICAgIGNvbnN0IGlzc3VlID0gbWFrZUlzc3VlKHtcbiAgICAgICAgaXNzdWVEYXRhOiBpc3N1ZURhdGEsXG4gICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIGN0eC5zY2hlbWFFcnJvck1hcCxcbiAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICBlcnJvck1hcCwgLy8gdGhlbiBnbG9iYWwgZGVmYXVsdCBtYXBcbiAgICAgICAgXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgfSk7XG4gICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaChpc3N1ZSk7XG59XG5jbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBhd2FpdCBwYWlyLmtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBzeW5jUGFpcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpIHtcbiAgICAgICAgY29uc3QgZmluYWxPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHBhaXI7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSB7XG4gICAgICAgICAgICAgICAgZmluYWxPYmplY3Rba2V5LnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxPYmplY3QgfTtcbiAgICB9XG59XG5jb25zdCBJTlZBTElEID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdHVzOiBcImFib3J0ZWRcIixcbn0pO1xuY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmNvbnN0IE9LID0gKHZhbHVlKSA9PiAoeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWUgfSk7XG5jb25zdCBpc0Fib3J0ZWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiO1xuY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuY29uc3QgaXNWYWxpZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJ2YWxpZFwiO1xuY29uc3QgaXNBc3luYyA9ICh4KSA9PiB0eXBlb2YgUHJvbWlzZSAhPT0gdW5kZWZpbmVkICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXG52YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuXG5jbGFzcyBQYXJzZUlucHV0TGF6eVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdmFsdWUsIHBhdGgsIGtleSkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aC5jb25jYXQodGhpcy5fa2V5KTtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gICAgfVxufTtcbmZ1bmN0aW9uIHByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICBjb25zdCB7IGVycm9yTWFwLCBpbnZhbGlkX3R5cGVfZXJyb3IsIHJlcXVpcmVkX2Vycm9yLCBkZXNjcmlwdGlvbiB9ID0gcGFyYW1zO1xuICAgIGlmIChlcnJvck1hcCAmJiAoaW52YWxpZF90eXBlX2Vycm9yIHx8IHJlcXVpcmVkX2Vycm9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBcImludmFsaWRfdHlwZV9lcnJvclwiIG9yIFwicmVxdWlyZWRfZXJyb3JcIiBpbiBjb25qdW5jdGlvbiB3aXRoIGN1c3RvbSBlcnJvciBtYXAuYCk7XG4gICAgfVxuICAgIGlmIChlcnJvck1hcClcbiAgICAgICAgcmV0dXJuIHsgZXJyb3JNYXA6IGVycm9yTWFwLCBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGN1c3RvbU1hcCA9IChpc3MsIGN0eCkgPT4ge1xuICAgICAgICBpZiAoaXNzLmNvZGUgIT09IFwiaW52YWxpZF90eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IHJlcXVpcmVkX2Vycm9yICE9PSBudWxsICYmIHJlcXVpcmVkX2Vycm9yICE9PSB2b2lkIDAgPyByZXF1aXJlZF9lcnJvciA6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBpbnZhbGlkX3R5cGVfZXJyb3IgIT09IG51bGwgJiYgaW52YWxpZF90eXBlX2Vycm9yICE9PSB2b2lkIDAgPyBpbnZhbGlkX3R5cGVfZXJyb3IgOiBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuY2xhc3MgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoZGVmKSB7XG4gICAgICAgIC8qKiBBbGlhcyBvZiBzYWZlUGFyc2VBc3luYyAqL1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc2FmZVBhcnNlQXN5bmM7XG4gICAgICAgIHRoaXMuX2RlZiA9IGRlZjtcbiAgICAgICAgdGhpcy5wYXJzZSA9IHRoaXMucGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2UgPSB0aGlzLnNhZmVQYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnNlQXN5bmMgPSB0aGlzLnBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYWZlUGFyc2VBc3luYyA9IHRoaXMuc2FmZVBhcnNlQXN5bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNwYS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZSA9IHRoaXMucmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lbWVudCA9IHRoaXMucmVmaW5lbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1cGVyUmVmaW5lID0gdGhpcy5zdXBlclJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5vcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxhYmxlID0gdGhpcy5udWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm51bGxpc2ggPSB0aGlzLm51bGxpc2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3IgPSB0aGlzLm9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYW5kID0gdGhpcy5hbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuY2F0Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHRoaXMuZGVzY3JpYmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waXBlID0gdGhpcy5waXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNOdWxsYWJsZSA9IHRoaXMuaXNOdWxsYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0aGlzLmlzT3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBfZ2V0VHlwZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIChjdHggfHwge1xuICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBuZXcgUGFyc2VTdGF0dXMoKSxcbiAgICAgICAgICAgIGN0eDoge1xuICAgICAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSksXG4gICAgICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogaW5wdXQucGFyZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3BhcnNlU3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bmNocm9ub3VzIHBhcnNlIGVuY291bnRlcmVkIHByb21pc2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9wYXJzZUFzeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cbiAgICBwYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zYWZlUGFyc2UoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIHNhZmVQYXJzZShkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuYXN5bmMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMucGF0aCkgfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdClcbiAgICAgICAgICAgID8gbWF5YmVBc3luY1Jlc3VsdFxuICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eClcbiAgICAgICAgICAgICAgICAgICAgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIG9wdGlvbmFsKCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoKS5udWxsYWJsZSgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBvcihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvZFVuaW9uLmNyZWF0ZShbdGhpcywgb3B0aW9uXSk7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZyk7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHVuZGVmaW5lZCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuLy8gaW50ZXJmYWNlIElzRGF0ZVN0cmluZ09wdGlvbnMgZXh0ZW5kcyBTdHJpbmdEYXRlT3B0aW9ucyB7XG4vKipcbiAqIE1hdGNoIGFueSBjb25maWd1cmF0aW9uXG4gKi9cbi8vIGFueT86IGJvb2xlYW47XG4vLyB9XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmNvbnN0IGRhdGV0aW1lUmVnZXggPSAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBpZiAoYXJncy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fSgoWystXVxcXFxkezJ9OlxcXFxkezJ9KXxaKSRgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXGR7NH0tXFxcXGR7Mn0tXFxcXGR7Mn1UXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXFxcLlxcXFxkeyR7YXJncy5wcmVjaXNpb259fVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgaWYgKGFyZ3Mub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9VFxcXFxkezJ9OlxcXFxkezJ9OlxcXFxkezJ9KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfVokYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChhcmdzLm9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/KChbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pfFopJGApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfVRcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfShcXFxcLlxcXFxkKyk/WiRgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jbGFzcyBab2RTdHJpbmcgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fcmVnZXggPSAocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpID0+IHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugei5zdHJpbmcoKS5taW4oMSkgaW5zdGVhZC5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgWm9kU3RyaW5nLm1pbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uZW1wdHkgPSAobWVzc2FnZSkgPT4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICAgICAgdGhpcy50cmltID0gKCkgPT4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidHJpbVwiIH1dLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidXVpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dWlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInV1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1cmxcIikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBVUkwoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1haWwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtYWlsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXJsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1cmxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1dWlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1dWlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24pID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vZmZzZXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZ2V4KHJlZ2V4LCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1haWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1haWxcIik7XG4gICAgfVxuICAgIGdldCBpc1VSTCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1cmxcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3RyaW5nLFxuICAgICAgICBjb2VyY2U6IChfYSA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2NjQ4NC93aHktZG9lcy1tb2R1bHVzLW9wZXJhdG9yLXJldHVybi1mcmFjdGlvbmFsLW51bWJlci1pbi1qYXZhc2NyaXB0LzMxNzExMDM0IzMxNzExMDM0XG5mdW5jdGlvbiBmbG9hdFNhZmVSZW1haW5kZXIodmFsLCBzdGVwKSB7XG4gICAgY29uc3QgdmFsRGVjQ291bnQgPSAodmFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBzdGVwRGVjQ291bnQgPSAoc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3QgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICAgIGNvbnN0IHZhbEludCA9IHBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IHBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZVxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIik7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5iaWdpbnQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQmlnSW50LmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiAoX2EgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY29lcmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEJvb2xlYW4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCb29sZWFuKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYm9vbGVhbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5ib29sZWFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEJvb2xlYW4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQm9vbGVhbih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQm9vbGVhbixcbiAgICAgICAgY29lcmNlOiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmNvZXJjZSkgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2REYXRlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gbmV3IERhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5kYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmRhdGUsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogKHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5jb2VyY2UpIHx8IGZhbHNlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERhdGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kTnVsbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVsbCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2ROdWxsLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGwoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZE5ldmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmV2ZXIsXG4gICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICB9XG59XG5ab2ROZXZlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROZXZlcih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmV2ZXIsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY3R4LmRhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGN0eC5kYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZVN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VBcnJheShzdGF0dXMsIHJlc3VsdCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHsgdmFsdWU6IG1pbkxlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4TGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiBtYXhMZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGV4YWN0TGVuZ3RoOiB7IHZhbHVlOiBsZW4sIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kQXJyYXkuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgbWluTGVuZ3RoOiBudWxsLFxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgICAgIGV4YWN0TGVuZ3RoOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFycmF5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZE9iamVjdCAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5jb25zdCBBdWdtZW50RmFjdG9yeSA9IChkZWYpID0+IChhdWdtZW50YXRpb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC4uLmRlZixcbiAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAuLi5kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gZGVlcFBhcnRpYWxpZnkoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gc2NoZW1hLnNoYXBlW2tleV07XG4gICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KGZpZWxkU2NoZW1hKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RBcnJheSkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuY2xhc3MgWm9kT2JqZWN0IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2NhY2hlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBJbiBtb3N0IGNhc2VzLCB0aGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgLSB1bmtub3duIHByb3BlcnRpZXMgYXJlIG5vdyBzaWxlbnRseSBzdHJpcHBlZC5cbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gcGFzcyB0aHJvdWdoIHVua25vd24gcHJvcGVydGllcywgdXNlIGAucGFzc3Rocm91Z2goKWAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9uc3RyaWN0ID0gdGhpcy5wYXNzdGhyb3VnaDtcbiAgICAgICAgdGhpcy5hdWdtZW50ID0gQXVnbWVudEZhY3RvcnkodGhpcy5fZGVmKTtcbiAgICAgICAgdGhpcy5leHRlbmQgPSBBdWdtZW50RmFjdG9yeSh0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBfZ2V0Q2FjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVkICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZDtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICAgICAgY29uc3Qga2V5cyA9IHV0aWwub2JqZWN0S2V5cyhzaGFwZSk7XG4gICAgICAgIHJldHVybiAodGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9KTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGtleXM6IHNoYXBlS2V5cyB9ID0gdGhpcy5fZ2V0Q2FjaGVkKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhS2V5cyA9IFtdO1xuICAgICAgICBpZiAoISh0aGlzLl9kZWYuY2F0Y2hhbGwgaW5zdGFuY2VvZiBab2ROZXZlciAmJlxuICAgICAgICAgICAgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXdhaXQgcGFpci52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gKF9jID0gKF9iID0gKF9hID0gdGhpcy5fZGVmKS5lcnJvck1hcCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGlzc3VlLCBjdHgpLm1lc3NhZ2UpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChfZCA9IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAgICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgLy8gICBtZXJnaW5nLl9kZWYuc2hhcGUoKVxuICAgICAgICAvLyApO1xuICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBtZXJnaW5nLl9kZWYudW5rbm93bktleXMsXG4gICAgICAgICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG9iamVjdFV0aWwubWVyZ2VTaGFwZXModGhpcy5fZGVmLnNoYXBlKCksIG1lcmdpbmcuX2RlZi5zaGFwZSgpKSxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIHV0aWwub2JqZWN0S2V5cyhtYXNrKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBhZGQgdG8gc2hhcGUgaWYga2V5IGNvcnJlc3BvbmRzIHRvIGFuIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnQgc2hhcGVcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXBlW2tleV0pXG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsLm9iamVjdEtleXMobWFzaykuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5vYmplY3RLZXlzKG1hc2spLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld0ZpZWxkIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IG5ld0ZpZWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9kZWYub3B0aW9ucztcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgaXNzdWUtZnJlZSB2YWxpZGF0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXNzdWVzIGZyb20gZGlydHkgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4ucmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIGludmFsaWRcbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gbmV3IFpvZEVycm9yKHJlc3VsdC5jdHguY29tbW9uLmlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy5tYXAoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogYXdhaXQgb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpLnRoZW4oaGFuZGxlUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGlydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIiAmJiAhZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlydHkgPSB7IHJlc3VsdCwgY3R4OiBjaGlsZEN0eCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzLnB1c2goY2hpbGRDdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5kaXJ0eS5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpcnR5LnJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVuaW9uRXJyb3JzID0gaXNzdWVzLm1hcCgoaXNzdWVzKSA9PiBuZXcgWm9kRXJyb3IoaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYub3B0aW9ucztcbiAgICB9XG59XG5ab2RVbmlvbi5jcmVhdGUgPSAodHlwZXMsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5pb24oe1xuICAgICAgICBvcHRpb25zOiB0eXBlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICBab2REaXNjcmltaW5hdGVkVW5pb24gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBnZXREaXNjcmltaW5hdG9yID0gKHR5cGUpID0+IHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExhenkpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5zY2hlbWEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRWZmZWN0cykge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLmlubmVyVHlwZSgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZExpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIFt0eXBlLnZhbHVlXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGUub3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE5hdGl2ZUVudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHR5cGUuZW51bSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2REZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kVW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZE51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5jbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgZGlzY3JpbWluYXRvciB2YWx1ZSBmb3Iga2V5IFxcYCR7ZGlzY3JpbWluYXRvcn1cXGAgY291bGQgbm90IGJlIGV4dHJhY3RlZCBmcm9tIGFsbCBzY2hlbWEgb3B0aW9uc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkaXNjcmltaW5hdG9yVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpc2NyaW1pbmF0b3IgcHJvcGVydHkgJHtTdHJpbmcoZGlzY3JpbWluYXRvcil9IGhhcyBkdXBsaWNhdGUgdmFsdWUgJHtTdHJpbmcodmFsdWUpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zTWFwLnNldCh2YWx1ZSwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2REaXNjcmltaW5hdGVkVW5pb24oe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnNNYXAsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1lcmdlVmFsdWVzKGEsIGIpIHtcbiAgICBjb25zdCBhVHlwZSA9IGdldFBhcnNlZFR5cGUoYSk7XG4gICAgY29uc3QgYlR5cGUgPSBnZXRQYXJzZWRUeXBlKGIpO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCAmJiBiVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgY29uc3QgYktleXMgPSB1dGlsLm9iamVjdEtleXMoYik7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSB1dGlsXG4gICAgICAgICAgICAub2JqZWN0S2V5cyhhKVxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiZcbiAgICAgICAgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJlxuICAgICAgICArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmNsYXNzIFpvZEludGVyc2VjdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBoYW5kbGVQYXJzZWQgPSAocGFyc2VkTGVmdCwgcGFyc2VkUmlnaHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Fib3J0ZWQocGFyc2VkTGVmdCkgfHwgaXNBYm9ydGVkKHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VWYWx1ZXMocGFyc2VkTGVmdC52YWx1ZSwgcGFyc2VkUmlnaHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFtZXJnZWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlydHkocGFyc2VkTGVmdCkgfHwgaXNEaXJ0eShwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogbWVyZ2VkLmRhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLmxlZnQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKS50aGVuKChbbGVmdCwgcmlnaHRdKSA9PiBoYW5kbGVQYXJzZWQobGVmdCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQYXJzZWQodGhpcy5fZGVmLmxlZnQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSwgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSA9IChsZWZ0LCByaWdodCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RJbnRlcnNlY3Rpb24oe1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kSW50ZXJzZWN0aW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kVHVwbGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgbWluaW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdCA9IHRoaXMuX2RlZi5yZXN0O1xuICAgICAgICBpZiAoIXJlc3QgJiYgY3R4LmRhdGEubGVuZ3RoID4gdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgbWF4aW11bTogdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBjdHguZGF0YVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RSZWNvcmQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBjdHguZGF0YVtrZXldLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuICAgICAgICBpZiAoc2Vjb25kIGluc3RhbmNlb2YgWm9kVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAgICAgIGtleVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogc2Vjb25kLFxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcmQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RSZWNvcmQoe1xuICAgICAgICAgICAga2V5VHlwZTogWm9kU3RyaW5nLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVjb3JkLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhzZWNvbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5jbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm1hcCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5tYXAsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGNvbnN0IHBhaXJzID0gWy4uLmN0eC5kYXRhLmVudHJpZXMoKV0ubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleToga2V5VHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGtleSwgY3R4LnBhdGgsIFtpbmRleCwgXCJrZXlcIl0pKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBbaW5kZXgsIFwidmFsdWVcIl0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZmluYWxNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogZmluYWxNYXAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZE1hcC5jcmVhdGUgPSAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE1hcCh7XG4gICAgICAgIHZhbHVlVHlwZSxcbiAgICAgICAga2V5VHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RNYXAsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW1xuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBnZXRFcnJvck1hcCgpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1hcCxcbiAgICAgICAgICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgICAgICAgICBjdHguc2NoZW1hRXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGdldEVycm9yTWFwKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwLFxuICAgICAgICAgICAgICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZUVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAgfTtcbiAgICAgICAgY29uc3QgZm4gPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5yZXR1cm5zIGluc3RhbmNlb2YgWm9kUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBhd2FpdCB0aGlzLl9kZWYuYXJnc1xuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhhcmdzLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oLi4ucGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IHRoaXMuX2RlZi5yZXR1cm5zLl9kZWYudHlwZVxuICAgICAgICAgICAgICAgICAgICAucGFyc2VBc3luYyhyZXN1bHQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFkZElzc3VlKG1ha2VSZXR1cm5zSXNzdWUocmVzdWx0LCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT0soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gdGhpcy5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLnBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IHRoaXMuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzXG4gICAgICAgICAgICAgICAgPyBhcmdzXG4gICAgICAgICAgICAgICAgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2RMaXRlcmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5kYXRhICE9PSB0aGlzLl9kZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuY2xhc3MgWm9kRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LmRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdGhpcy5fZGVmLnZhbHVlcztcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLnZhbHVlcy5pbmRleE9mKGlucHV0LmRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxufVxuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuY2xhc3MgWm9kTmF0aXZlRW51bSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbnVtVmFsdWVzID0gdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN0cmluZyAmJlxuICAgICAgICAgICAgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXRpdmVFbnVtVmFsdWVzLmluZGV4T2YoaW5wdXQuZGF0YSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlICYmXG4gICAgICAgICAgICBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlXG4gICAgICAgICAgICA/IGN0eC5kYXRhXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShjdHguZGF0YSk7XG4gICAgICAgIHJldHVybiBPSyhwcm9taXNpZmllZC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUucGFyc2VBc3luYyhkYXRhLCB7XG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5ab2RQcm9taXNlLmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUHJvbWlzZSh7XG4gICAgICAgIHR5cGU6IHNjaGVtYSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQcm9taXNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEpO1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2Nlc3NlZCkudGhlbigocHJvY2Vzc2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2NcbiAgICAgICAgICAgIC8vIGVmZmVjdDogUmVmaW5lbWVudEVmZmVjdDxhbnk+XG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYVxuICAgICAgICAgICAgICAgICAgICAuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5uZXIudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoYmFzZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgLl9wYXJzZUFzeW5jKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGJhc2Uuc3RhdHVzID09PSBcImFib3J0ZWRcIikgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChiYXNlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHsgc3RhdHVzOiBcImRpcnR5XCIsIHZhbHVlOiBiYXNlLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoeyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kT3B0aW9uYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kT3B0aW9uYWwuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT3B0aW9uYWwoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT3B0aW9uYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBwYXJhbXMuZGVmYXVsdFxuICAgICAgICAgICAgOiAoKSA9PiBwYXJhbXMuZGVmYXVsdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiID8gcmVzdWx0LnZhbHVlIDogdGhpcy5fZGVmLmRlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIiA/IHJlc3VsdC52YWx1ZSA6IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gcGFyYW1zLmRlZmF1bHRcbiAgICAgICAgICAgIDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5jbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5jbGFzcyBab2RCcmFuZGVkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG59XG5jbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgY3VzdG9tID0gKGNoZWNrLCBwYXJhbXMgPSB7fSwgZmF0YWwpID0+IHtcbiAgICBpZiAoY2hlY2spXG4gICAgICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCkuc3VwZXJSZWZpbmUoKGRhdGEsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayhkYXRhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMoZGF0YSkgOiBwYXJhbXM7XG4gICAgICAgICAgICAgICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wMiwgZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59O1xuY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbnZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMsIHRydWUpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5jb25zdCBjb2VyY2UgPSB7XG4gICAgc3RyaW5nOiAoKGFyZykgPT4gWm9kU3RyaW5nLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBudW1iZXI6ICgoYXJnKSA9PiBab2ROdW1iZXIuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGJvb2xlYW46ICgoYXJnKSA9PiBab2RCb29sZWFuLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBiaWdpbnQ6ICgoYXJnKSA9PiBab2RCaWdJbnQuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIGRhdGU6ICgoYXJnKSA9PiBab2REYXRlLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbn07XG5jb25zdCBORVZFUiA9IElOVkFMSUQ7XG5cbnZhciBtb2QgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGRlZmF1bHRFcnJvck1hcDogZXJyb3JNYXAsXG4gICAgc2V0RXJyb3JNYXA6IHNldEVycm9yTWFwLFxuICAgIGdldEVycm9yTWFwOiBnZXRFcnJvck1hcCxcbiAgICBtYWtlSXNzdWU6IG1ha2VJc3N1ZSxcbiAgICBFTVBUWV9QQVRIOiBFTVBUWV9QQVRILFxuICAgIGFkZElzc3VlVG9Db250ZXh0OiBhZGRJc3N1ZVRvQ29udGV4dCxcbiAgICBQYXJzZVN0YXR1czogUGFyc2VTdGF0dXMsXG4gICAgSU5WQUxJRDogSU5WQUxJRCxcbiAgICBESVJUWTogRElSVFksXG4gICAgT0s6IE9LLFxuICAgIGlzQWJvcnRlZDogaXNBYm9ydGVkLFxuICAgIGlzRGlydHk6IGlzRGlydHksXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0FzeW5jOiBpc0FzeW5jLFxuICAgIGdldCB1dGlsICgpIHsgcmV0dXJuIHV0aWw7IH0sXG4gICAgWm9kUGFyc2VkVHlwZTogWm9kUGFyc2VkVHlwZSxcbiAgICBnZXRQYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlLFxuICAgIFpvZFR5cGU6IFpvZFR5cGUsXG4gICAgWm9kU3RyaW5nOiBab2RTdHJpbmcsXG4gICAgWm9kTnVtYmVyOiBab2ROdW1iZXIsXG4gICAgWm9kQmlnSW50OiBab2RCaWdJbnQsXG4gICAgWm9kQm9vbGVhbjogWm9kQm9vbGVhbixcbiAgICBab2REYXRlOiBab2REYXRlLFxuICAgIFpvZFN5bWJvbDogWm9kU3ltYm9sLFxuICAgIFpvZFVuZGVmaW5lZDogWm9kVW5kZWZpbmVkLFxuICAgIFpvZE51bGw6IFpvZE51bGwsXG4gICAgWm9kQW55OiBab2RBbnksXG4gICAgWm9kVW5rbm93bjogWm9kVW5rbm93bixcbiAgICBab2ROZXZlcjogWm9kTmV2ZXIsXG4gICAgWm9kVm9pZDogWm9kVm9pZCxcbiAgICBab2RBcnJheTogWm9kQXJyYXksXG4gICAgZ2V0IG9iamVjdFV0aWwgKCkgeyByZXR1cm4gb2JqZWN0VXRpbDsgfSxcbiAgICBab2RPYmplY3Q6IFpvZE9iamVjdCxcbiAgICBab2RVbmlvbjogWm9kVW5pb24sXG4gICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uOiBab2REaXNjcmltaW5hdGVkVW5pb24sXG4gICAgWm9kSW50ZXJzZWN0aW9uOiBab2RJbnRlcnNlY3Rpb24sXG4gICAgWm9kVHVwbGU6IFpvZFR1cGxlLFxuICAgIFpvZFJlY29yZDogWm9kUmVjb3JkLFxuICAgIFpvZE1hcDogWm9kTWFwLFxuICAgIFpvZFNldDogWm9kU2V0LFxuICAgIFpvZEZ1bmN0aW9uOiBab2RGdW5jdGlvbixcbiAgICBab2RMYXp5OiBab2RMYXp5LFxuICAgIFpvZExpdGVyYWw6IFpvZExpdGVyYWwsXG4gICAgWm9kRW51bTogWm9kRW51bSxcbiAgICBab2ROYXRpdmVFbnVtOiBab2ROYXRpdmVFbnVtLFxuICAgIFpvZFByb21pc2U6IFpvZFByb21pc2UsXG4gICAgWm9kRWZmZWN0czogWm9kRWZmZWN0cyxcbiAgICBab2RUcmFuc2Zvcm1lcjogWm9kRWZmZWN0cyxcbiAgICBab2RPcHRpb25hbDogWm9kT3B0aW9uYWwsXG4gICAgWm9kTnVsbGFibGU6IFpvZE51bGxhYmxlLFxuICAgIFpvZERlZmF1bHQ6IFpvZERlZmF1bHQsXG4gICAgWm9kQ2F0Y2g6IFpvZENhdGNoLFxuICAgIFpvZE5hTjogWm9kTmFOLFxuICAgIEJSQU5EOiBCUkFORCxcbiAgICBab2RCcmFuZGVkOiBab2RCcmFuZGVkLFxuICAgIFpvZFBpcGVsaW5lOiBab2RQaXBlbGluZSxcbiAgICBjdXN0b206IGN1c3RvbSxcbiAgICBTY2hlbWE6IFpvZFR5cGUsXG4gICAgWm9kU2NoZW1hOiBab2RUeXBlLFxuICAgIGxhdGU6IGxhdGUsXG4gICAgZ2V0IFpvZEZpcnN0UGFydHlUeXBlS2luZCAoKSB7IHJldHVybiBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7IH0sXG4gICAgY29lcmNlOiBjb2VyY2UsXG4gICAgYW55OiBhbnlUeXBlLFxuICAgIGFycmF5OiBhcnJheVR5cGUsXG4gICAgYmlnaW50OiBiaWdJbnRUeXBlLFxuICAgIGJvb2xlYW46IGJvb2xlYW5UeXBlLFxuICAgIGRhdGU6IGRhdGVUeXBlLFxuICAgIGRpc2NyaW1pbmF0ZWRVbmlvbjogZGlzY3JpbWluYXRlZFVuaW9uVHlwZSxcbiAgICBlZmZlY3Q6IGVmZmVjdHNUeXBlLFxuICAgICdlbnVtJzogZW51bVR5cGUsXG4gICAgJ2Z1bmN0aW9uJzogZnVuY3Rpb25UeXBlLFxuICAgICdpbnN0YW5jZW9mJzogaW5zdGFuY2VPZlR5cGUsXG4gICAgaW50ZXJzZWN0aW9uOiBpbnRlcnNlY3Rpb25UeXBlLFxuICAgIGxhenk6IGxhenlUeXBlLFxuICAgIGxpdGVyYWw6IGxpdGVyYWxUeXBlLFxuICAgIG1hcDogbWFwVHlwZSxcbiAgICBuYW46IG5hblR5cGUsXG4gICAgbmF0aXZlRW51bTogbmF0aXZlRW51bVR5cGUsXG4gICAgbmV2ZXI6IG5ldmVyVHlwZSxcbiAgICAnbnVsbCc6IG51bGxUeXBlLFxuICAgIG51bGxhYmxlOiBudWxsYWJsZVR5cGUsXG4gICAgbnVtYmVyOiBudW1iZXJUeXBlLFxuICAgIG9iamVjdDogb2JqZWN0VHlwZSxcbiAgICBvYm9vbGVhbjogb2Jvb2xlYW4sXG4gICAgb251bWJlcjogb251bWJlcixcbiAgICBvcHRpb25hbDogb3B0aW9uYWxUeXBlLFxuICAgIG9zdHJpbmc6IG9zdHJpbmcsXG4gICAgcGlwZWxpbmU6IHBpcGVsaW5lVHlwZSxcbiAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzVHlwZSxcbiAgICBwcm9taXNlOiBwcm9taXNlVHlwZSxcbiAgICByZWNvcmQ6IHJlY29yZFR5cGUsXG4gICAgc2V0OiBzZXRUeXBlLFxuICAgIHN0cmljdE9iamVjdDogc3RyaWN0T2JqZWN0VHlwZSxcbiAgICBzdHJpbmc6IHN0cmluZ1R5cGUsXG4gICAgc3ltYm9sOiBzeW1ib2xUeXBlLFxuICAgIHRyYW5zZm9ybWVyOiBlZmZlY3RzVHlwZSxcbiAgICB0dXBsZTogdHVwbGVUeXBlLFxuICAgICd1bmRlZmluZWQnOiB1bmRlZmluZWRUeXBlLFxuICAgIHVuaW9uOiB1bmlvblR5cGUsXG4gICAgdW5rbm93bjogdW5rbm93blR5cGUsXG4gICAgJ3ZvaWQnOiB2b2lkVHlwZSxcbiAgICBORVZFUjogTkVWRVIsXG4gICAgWm9kSXNzdWVDb2RlOiBab2RJc3N1ZUNvZGUsXG4gICAgcXVvdGVsZXNzSnNvbjogcXVvdGVsZXNzSnNvbixcbiAgICBab2RFcnJvcjogWm9kRXJyb3Jcbn0pO1xuXG5leHBvcnQgeyBCUkFORCwgRElSVFksIEVNUFRZX1BBVEgsIElOVkFMSUQsIE5FVkVSLCBPSywgUGFyc2VTdGF0dXMsIFpvZFR5cGUgYXMgU2NoZW1hLCBab2RBbnksIFpvZEFycmF5LCBab2RCaWdJbnQsIFpvZEJvb2xlYW4sIFpvZEJyYW5kZWQsIFpvZENhdGNoLCBab2REYXRlLCBab2REZWZhdWx0LCBab2REaXNjcmltaW5hdGVkVW5pb24sIFpvZEVmZmVjdHMsIFpvZEVudW0sIFpvZEVycm9yLCBab2RGaXJzdFBhcnR5VHlwZUtpbmQsIFpvZEZ1bmN0aW9uLCBab2RJbnRlcnNlY3Rpb24sIFpvZElzc3VlQ29kZSwgWm9kTGF6eSwgWm9kTGl0ZXJhbCwgWm9kTWFwLCBab2ROYU4sIFpvZE5hdGl2ZUVudW0sIFpvZE5ldmVyLCBab2ROdWxsLCBab2ROdWxsYWJsZSwgWm9kTnVtYmVyLCBab2RPYmplY3QsIFpvZE9wdGlvbmFsLCBab2RQYXJzZWRUeXBlLCBab2RQaXBlbGluZSwgWm9kUHJvbWlzZSwgWm9kUmVjb3JkLCBab2RUeXBlIGFzIFpvZFNjaGVtYSwgWm9kU2V0LCBab2RTdHJpbmcsIFpvZFN5bWJvbCwgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciwgWm9kVHVwbGUsIFpvZFR5cGUsIFpvZFVuZGVmaW5lZCwgWm9kVW5pb24sIFpvZFVua25vd24sIFpvZFZvaWQsIGFkZElzc3VlVG9Db250ZXh0LCBhbnlUeXBlIGFzIGFueSwgYXJyYXlUeXBlIGFzIGFycmF5LCBiaWdJbnRUeXBlIGFzIGJpZ2ludCwgYm9vbGVhblR5cGUgYXMgYm9vbGVhbiwgY29lcmNlLCBjdXN0b20sIGRhdGVUeXBlIGFzIGRhdGUsIG1vZCBhcyBkZWZhdWx0LCBlcnJvck1hcCBhcyBkZWZhdWx0RXJyb3JNYXAsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgZ2V0RXJyb3JNYXAsIGdldFBhcnNlZFR5cGUsIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIGxhdGUsIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1ha2VJc3N1ZSwgbWFwVHlwZSBhcyBtYXAsIG5hblR5cGUgYXMgbmFuLCBuYXRpdmVFbnVtVHlwZSBhcyBuYXRpdmVFbnVtLCBuZXZlclR5cGUgYXMgbmV2ZXIsIG51bGxUeXBlIGFzIG51bGwsIG51bGxhYmxlVHlwZSBhcyBudWxsYWJsZSwgbnVtYmVyVHlwZSBhcyBudW1iZXIsIG9iamVjdFR5cGUgYXMgb2JqZWN0LCBvYmplY3RVdGlsLCBvYm9vbGVhbiwgb251bWJlciwgb3B0aW9uYWxUeXBlIGFzIG9wdGlvbmFsLCBvc3RyaW5nLCBwaXBlbGluZVR5cGUgYXMgcGlwZWxpbmUsIHByZXByb2Nlc3NUeXBlIGFzIHByZXByb2Nlc3MsIHByb21pc2VUeXBlIGFzIHByb21pc2UsIHF1b3RlbGVzc0pzb24sIHJlY29yZFR5cGUgYXMgcmVjb3JkLCBzZXRUeXBlIGFzIHNldCwgc2V0RXJyb3JNYXAsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHV0aWwsIHZvaWRUeXBlIGFzIHZvaWQsIG1vZCBhcyB6IH07XG4iLCJpbXBvcnQgeiBmcm9tICd6b2QnXG5leHBvcnQgdHlwZSBQYXJ0aWFsbHlQYXJ0aWFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiBQYXJ0aWFsPFQ+XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0aW9uVHlwZVZhbGlkYXRvciA9IHouZW51bShbXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAnZW1haWwnLFxuICAgICdudW1iZXInLFxuICAgICdjb2RlJyxcbl0pXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uVHlwZSA9IHouaW5mZXI8dHlwZW9mIFZhbGlkYXRpb25UeXBlVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgV2l0aE9wdGlvblZhbGlkYXRvciA9IHoucmVjb3JkKFZhbGlkYXRpb25UeXBlVmFsaWRhdG9yKVxuZXhwb3J0IHR5cGUgV2l0aE9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIFdpdGhPcHRpb25WYWxpZGF0b3I+XG5cbmV4cG9ydCBjb25zdCBNb2RlT3B0aW9uVmFsaWRhdG9yID0gei5lbnVtKFsnb3InLCAnYW5kJ10pXG5leHBvcnQgdHlwZSBNb2RlT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgTW9kZU9wdGlvblZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFJ1bGVPcHRpb25WYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgdHlwZTogVmFsaWRhdGlvblR5cGVWYWxpZGF0b3IsXG4gICAgbW9kZTogTW9kZU9wdGlvblZhbGlkYXRvci5vcHRpb25hbCgpLFxuICAgIHdpdGg6IFdpdGhPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICBpZjogelxuICAgICAgICAub2JqZWN0KHtcbiAgICAgICAgICAgIG1vZGU6IE1vZGVPcHRpb25WYWxpZGF0b3Iub3B0aW9uYWwoKSxcbiAgICAgICAgICAgIHRhcmdldDogei5yZWNvcmQoei5zdHJpbmcoKSksXG4gICAgICAgIH0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5leHBvcnQgdHlwZSBSdWxlT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgUnVsZU9wdGlvblZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IFJ1bGVWYWxpZGF0b3IgPSB6LnJlY29yZChcbiAgICB6LnVuaW9uKFtSdWxlT3B0aW9uVmFsaWRhdG9yLCB6LmFycmF5KFJ1bGVPcHRpb25WYWxpZGF0b3IpXSlcbilcbmV4cG9ydCB0eXBlIFJ1bGUgPSB6LmluZmVyPHR5cGVvZiBSdWxlVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgVmFsaWRhdGVkRXJyb3JWYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gICAgdHlwZTogei5zdHJpbmcoKSxcbiAgICBtZXNzYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXJyb3IgPSB7IHR5cGU6IHN0cmluZzsgbWVzc2FnZT86IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBQYXJhbVZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgICBydWxlczogUnVsZVZhbGlkYXRvcixcbiAgICBlcnJvcl9jbGFzczogei5zdHJpbmcoKSxcbiAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiB6LnN0cmluZygpLFxuICAgIHZhbGlkX2NsYXNzOiB6LnN0cmluZygpLFxuICAgIGluaXRpYWxfZXJyb3Jfdmlldzogei5ib29sZWFuKCksXG4gICAgc3VibWl0X2J1dHRvbjogelxuICAgICAgICAudW5pb24oW1xuICAgICAgICAgICAgei5zdHJpbmcoKSxcbiAgICAgICAgICAgIHouaW5zdGFuY2VvZihIVE1MSW5wdXRFbGVtZW50KSxcbiAgICAgICAgICAgIHouaW5zdGFuY2VvZihIVE1MQnV0dG9uRWxlbWVudCksXG4gICAgICAgIF0pXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgIG9uX3ZhbGlkYXRlOiB6LmZ1bmN0aW9uKCkucmV0dXJucyh6LnZvaWQoKSkub3B0aW9uYWwoKSxcbiAgICBvbl9zdWNjZXNzOiB6LmZ1bmN0aW9uKCkucmV0dXJucyh6LnZvaWQoKSkub3B0aW9uYWwoKSxcbiAgICBvbl9lcnJvcjogelxuICAgICAgICAuZnVuY3Rpb24oKVxuICAgICAgICAuYXJncyh6LnJlY29yZCh6LmFycmF5KFZhbGlkYXRlZEVycm9yVmFsaWRhdG9yKSkpXG4gICAgICAgIC5yZXR1cm5zKHoudm9pZCgpKVxuICAgICAgICAub3B0aW9uYWwoKSxcbn0pXG5leHBvcnQgdHlwZSBQYXJhbSA9IHouaW5mZXI8dHlwZW9mIFBhcmFtVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgSW5pdGlhbFBhcmFtVmFsaWRhdG9yID0gUGFyYW1WYWxpZGF0b3IucGFydGlhbCh7XG4gICAgZXJyb3JfY2xhc3M6IHRydWUsXG4gICAgZXJyb3JfbWVzc2FnZV9jbGFzczogdHJ1ZSxcbiAgICB2YWxpZF9jbGFzczogdHJ1ZSxcbiAgICBpbml0aWFsX2Vycm9yX3ZpZXc6IHRydWUsXG59KVxuZXhwb3J0IHR5cGUgSW5pdGlhbFBhcmFtID0gei5pbmZlcjx0eXBlb2YgSW5pdGlhbFBhcmFtVmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgUm9vdEV2ZW50VmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICAgIHZhbGlkYXRlOiB6LmZ1bmN0aW9uKCkucmV0dXJucyh6LnZvaWQoKSksXG59KVxuZXhwb3J0IHR5cGUgUm9vdEV2ZW50ID0gei5pbmZlcjx0eXBlb2YgUm9vdEV2ZW50VmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgVGFyZ2V0VmFsaWRhdG9yID0gei5yZWNvcmQoei5pbnN0YW5jZW9mKEhUTUxFbGVtZW50KSlcbmV4cG9ydCB0eXBlIFRhcmdldCA9IHouaW5mZXI8dHlwZW9mIFRhcmdldFZhbGlkYXRvcj5cblxuZXhwb3J0IGNvbnN0IEZvcm1FbGVtZW50VmFsaWRhdG9yID0gei51bmlvbihbXG4gICAgei5zdHJpbmcoKSxcbiAgICB6Lmluc3RhbmNlb2YoSFRNTEZvcm1FbGVtZW50KSxcbl0pXG5leHBvcnQgdHlwZSBGb3JtRWxlbWVudCA9IHouaW5mZXI8dHlwZW9mIEZvcm1FbGVtZW50VmFsaWRhdG9yPlxuXG5leHBvcnQgY29uc3QgRmllbGRFbGVtZW50VmFsaWRhdG9yID0gei51bmlvbihbXG4gICAgei5pbnN0YW5jZW9mKEhUTUxJbnB1dEVsZW1lbnQpLFxuICAgIHouaW5zdGFuY2VvZihIVE1MU2VsZWN0RWxlbWVudCksXG4gICAgei5pbnN0YW5jZW9mKEhUTUxUZXh0QXJlYUVsZW1lbnQpLFxuXSlcbmV4cG9ydCB0eXBlIEZpZWxkRWxlbWVudCA9IHouaW5mZXI8dHlwZW9mIEZpZWxkRWxlbWVudFZhbGlkYXRvcj5cbiIsImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbi8qKlxuICogQ2hlY2sgcmVxdWlyZWQgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT5cbiAgICAgICAgICAgIHByZXYgJiYgei5zdHJpbmcoKS50cmltKCkubWluKDEpLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuLyoqXG4gKiBDaGVjayBFbWFpbCBmb3JtYXQgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PlxuICAgICAgICAgICAgcHJldiAmJiB6LnN0cmluZygpLmVtYWlsKCkuc2FmZVBhcnNlKGN1cnJlbnQpLnN1Y2Nlc3MsXG4gICAgICAgIHRydWVcbiAgICApXG59XG4iLCJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG4vKipcbiAqIENoZWNrIG51bWVyaWMgb2YgdGFyZ2V0IGZpZWxkIGVsZW1lbnQncyB2YWx1ZVxuICogQHBhcmFtIGVsXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVjayA9ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PiBwcmV2ICYmIHouY29lcmNlLm51bWJlcigpLnNhZmVQYXJzZShjdXJyZW50KS5zdWNjZXNzLFxuICAgICAgICB0cnVlXG4gICAgKVxufVxuIiwiaW1wb3J0IHsgRmllbGRFbGVtZW50IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpc0NoZWNrRmllbGQgPSAoZWw6IEZpZWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuXG4gICAgcmV0dXJuIHRhZyA9PT0gJ2lucHV0JyAmJiAodHlwZSA9PT0gJ3JhZGlvJyB8fCB0eXBlID09PSAnY2hlY2tib3gnKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudCA9IChmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFPYmplY3QuaGFzT3duKGZvcm1FbCwgbmFtZSkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duKGZvcm1FbCwgYCR7bmFtZX1bXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICBuYW1lID0gYCR7bmFtZX1bXWBcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtRWxbbmFtZV1cblxuICAgIGlmIChmaWVsZHNbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICByZXR1cm4gWy4uLmZpZWxkc10gYXMgRmllbGRFbGVtZW50W11cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2ZpZWxkc10gYXMgRmllbGRFbGVtZW50W11cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZXMgPSAoZWxlbWVudHM6IEZpZWxkRWxlbWVudFtdKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBlbGVtZW50cy5tYXAoKGVsKSA9PiB7XG4gICAgICAgIGlmIChpc0NoZWNrRmllbGQoZWwpKSB7XG4gICAgICAgICAgICBpZiAoKGVsIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB2YWx1ZXNcbn1cbiIsImltcG9ydCB7XG4gICAgRmllbGRFbGVtZW50LFxuICAgIFJ1bGVPcHRpb24sXG4gICAgVmFsaWRhdGVkRXJyb3IsXG4gICAgVmFsaWRhdGlvblR5cGUsXG59IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBjaGVjayBhcyBjaGVja1JlcXVpcmVkIH0gZnJvbSAnLi9SZXF1aXJlZCdcbmltcG9ydCB7IGNoZWNrIGFzIGNoZWNrRW1haWwgfSBmcm9tICcuL0VtYWlsJ1xuaW1wb3J0IHsgY2hlY2sgYXMgY2hlY2tOdW1iZXIgfSBmcm9tICcuL051bWJlcidcbmltcG9ydCB7IGdldEVsZW1lbnQsIGdldFZhbHVlcyB9IGZyb20gJy4uL3V0aWxzL1RhZydcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICAgIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LFxuICAgIGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSxcbiAgICBydWxlOiBSdWxlT3B0aW9uW11cbikgPT4ge1xuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gZ2V0VmFsdWVzKGVsZW1lbnRzKVxuXG4gICAgcnVsZS5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKCFjaGVja0lmKGZvcm1FbCwgcikpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHIud2l0aCkge1xuICAgICAgICAgICAgc3dpdGNoIChyLm1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdvcic6XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlTXVsdGlwbGVPcihmb3JtRWwsIHIsIGVycm9ycywgdmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVNdWx0aXBsZUFuZChmb3JtRWwsIHIsIGVycm9ycywgdmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVTaW5nbGUociwgZXJyb3JzLCB2YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCBjaGVja0lmID0gKGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LCByOiBSdWxlT3B0aW9uKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWVcblxuICAgIGlmICghci5pZikge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoci5pZi50YXJnZXQpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAoIXIuaWYpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWZUYXJnZXQgPSByLmlmLnRhcmdldFtuYW1lXVxuICAgICAgICBjb25zdCBpZkVsZW1lbnQgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgY29uc3QgaWZWYWx1ZSA9IGdldFZhbHVlcyhpZkVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHIuaWYubW9kZSA9PT0gJ29yJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IGlmVmFsdWUuaW5jbHVkZXMoaWZUYXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgaWZWYWx1ZS5pbmNsdWRlcyhpZlRhcmdldClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNoZWNrVmFsaWRhdGUgPSAocnVsZVR5cGU6IFZhbGlkYXRpb25UeXBlLCB2YWx1ZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgc3dpdGNoIChydWxlVHlwZSkge1xuICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tSZXF1aXJlZCh2YWx1ZXMpXG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgIHJldHVybiBjaGVja0VtYWlsKHZhbHVlcylcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiBjaGVja051bWJlcih2YWx1ZXMpXG4gICAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNpbmdsZSA9IChcbiAgICByOiBSdWxlT3B0aW9uLFxuICAgIGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSxcbiAgICB2YWx1ZXM6IHN0cmluZ1tdXG4pID0+IHtcbiAgICBpZiAoIWNoZWNrVmFsaWRhdGUoci50eXBlLCB2YWx1ZXMpKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHIudHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHIubWVzc2FnZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG59XG5cbmNvbnN0IHZhbGlkYXRlTXVsdGlwbGVPciA9IChcbiAgICBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudCxcbiAgICByOiBSdWxlT3B0aW9uLFxuICAgIGVycm9yczogVmFsaWRhdGVkRXJyb3JbXSxcbiAgICB2YWx1ZXM6IHN0cmluZ1tdXG4pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gY2hlY2tWYWxpZGF0ZShyLnR5cGUsIHZhbHVlcylcblxuICAgIGlmIChyLndpdGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoci53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghci53aXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdpdGhUeXBlID0gci53aXRoW25hbWVdXG4gICAgICAgICAgICBjb25zdCB3aXRoRWxlbWVudHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgIGNvbnN0IHdpdGhWYWx1ZXMgPSBnZXRWYWx1ZXMod2l0aEVsZW1lbnRzKVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgY2hlY2tWYWxpZGF0ZSh3aXRoVHlwZSwgd2l0aFZhbHVlcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiByLnR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiByLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCB2YWxpZGF0ZU11bHRpcGxlQW5kID0gKFxuICAgIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50LFxuICAgIHI6IFJ1bGVPcHRpb24sXG4gICAgZXJyb3JzOiBWYWxpZGF0ZWRFcnJvcltdLFxuICAgIHZhbHVlczogc3RyaW5nW11cbikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBjaGVja1ZhbGlkYXRlKHIudHlwZSwgdmFsdWVzKVxuXG4gICAgaWYgKHIud2l0aCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyLndpdGgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyLndpdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd2l0aFR5cGUgPSByLndpdGhbbmFtZV1cbiAgICAgICAgICAgIGNvbnN0IHdpdGhFbGVtZW50cyA9IGdldEVsZW1lbnQoZm9ybUVsLCBuYW1lKVxuICAgICAgICAgICAgY29uc3Qgd2l0aFZhbHVlcyA9IGdldFZhbHVlcyh3aXRoRWxlbWVudHMpXG5cbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiBjaGVja1ZhbGlkYXRlKHdpdGhUeXBlLCB3aXRoVmFsdWVzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IHIudHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHIubWVzc2FnZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyB2YWxpZGF0ZSBhcyBleGVjVmFsaWRhdGUgfSBmcm9tICcuLi92YWxpZGF0ZSdcblxuaW1wb3J0IHsgUGFyYW0sIEZpZWxkRWxlbWVudCwgVmFsaWRhdGVkRXJyb3IsIFJ1bGVPcHRpb24gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGdldEVsZW1lbnQsIGlzQ2hlY2tGaWVsZCB9IGZyb20gJy4uL3V0aWxzL1RhZydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoXG4gICAgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJ1bGVzOiBSdWxlT3B0aW9uW10sXG4gICAgcGFyYW1zOiBQYXJhbSxcbiAgICBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGVkRXJyb3JbXSB9XG4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdldEVsZW1lbnQoZm9ybUVsLCBuYW1lKVxuXG4gICAgY29uc3Qgd2l0aEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0czogRmllbGRFbGVtZW50W10gPSBbXVxuXG4gICAgICAgIHJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFydWxlLndpdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocnVsZS53aXRoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBnZXRFbGVtZW50KGZvcm1FbCwgbmFtZSlcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4uZmllbGRzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0pKClcblxuICAgIGNvbnN0IGlmRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBGaWVsZEVsZW1lbnRbXSA9IFtdXG5cbiAgICAgICAgcnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJ1bGUuaWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocnVsZS5pZi50YXJnZXQpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGdldEVsZW1lbnQoZm9ybUVsLCBuYW1lKVxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCguLi5maWVsZHMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXN1bHRzXG4gICAgfSkoKVxuXG4gICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYE5vdCBmb3VuZCB0YXJnZXQgZmllbGQgZWxlbWVudDogJHtuYW1lfWApXG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBvciBGaW5kIGVycm9yIG1lc3NhZ2UgZmllbGRcbiAgICBjb25zdCBtZXNzYWdlRmllbGQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBleGlzdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1pbnB1dGZvbGxvdy1lcnJvcj1cIiR7bmFtZX1cIl1gXG4gICAgICAgIClcbiAgICAgICAgaWYgKGV4aXN0RmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdEZpZWxkXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGFkZGl0aW9uYWxGaWVsZC5jbGFzc05hbWUgPSBwYXJhbXMuZXJyb3JfbWVzc2FnZV9jbGFzc1xuICAgICAgICBhZGRpdGlvbmFsRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0Zm9sbG93LWVycm9yJywgbmFtZSlcbiAgICAgICAgZWxlbWVudHNbMF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGFkZGl0aW9uYWxGaWVsZClcblxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbEZpZWxkXG4gICAgfSkoKVxuXG4gICAgY29uc3QgYWRkSW52YWxpZENsYXNzID0gKF9lbGVtZW50czogRmllbGRFbGVtZW50W10sIGluaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy52YWxpZF9jbGFzcykge1xuICAgICAgICAgICAgX2VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMudmFsaWRfY2xhc3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXQgIT09IHRydWUgfHwgcGFyYW1zLmluaXRpYWxfZXJyb3Jfdmlldykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5lcnJvcl9jbGFzcykge1xuICAgICAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5lcnJvcl9jbGFzcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVmFsaWRDbGFzcyA9IChfZWxlbWVudHM6IEZpZWxkRWxlbWVudFtdKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuZXJyb3JfY2xhc3MpIHtcbiAgICAgICAgICAgIF9lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmVycm9yX2NsYXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnZhbGlkX2NsYXNzKSB7XG4gICAgICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy52YWxpZF9jbGFzcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0ZSA9IChpbml0OiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKCFydWxlcyB8fCAhbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBlcnJvcnNbbmFtZV0gPSBleGVjVmFsaWRhdGUoZm9ybUVsLCBlbGVtZW50cywgcnVsZXMpXG5cbiAgICAgICAgaWYgKGhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgIGFkZEludmFsaWRDbGFzcyhlbGVtZW50cywgaW5pdClcbiAgICAgICAgICAgIGFkZEludmFsaWRDbGFzcyh3aXRoRWxlbWVudHMsIGluaXQpXG4gICAgICAgICAgICBhZGRJbnZhbGlkQ2xhc3MoaWZFbGVtZW50cywgaW5pdClcblxuICAgICAgICAgICAgaWYgKGluaXQgIT09IHRydWUgfHwgcGFyYW1zLmluaXRpYWxfZXJyb3Jfdmlldykge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGVycm9yc1tuYW1lXS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZFZhbGlkQ2xhc3MoZWxlbWVudHMpXG4gICAgICAgICAgICBhZGRWYWxpZENsYXNzKHdpdGhFbGVtZW50cylcbiAgICAgICAgICAgIGFkZFZhbGlkQ2xhc3MoaWZFbGVtZW50cylcblxuICAgICAgICAgICAgbWVzc2FnZUZpZWxkLmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnNbbmFtZV0ubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGNvbnN0IGdldEVycm9ycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcnNbbmFtZV1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRFdmVudHMgPSAoX2VsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSkgPT4ge1xuICAgICAgICBfZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrRmllbGQoZWwpKSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRFdmVudHMoZWxlbWVudHMpXG4gICAgYWRkRXZlbnRzKHdpdGhFbGVtZW50cylcbiAgICBhZGRFdmVudHMoaWZFbGVtZW50cylcblxuICAgIHJldHVybiB7IGZvcm1FbCwgZWxlbWVudHMsIG5hbWUsIHJ1bGVzLCB2YWxpZGF0ZSwgaGFzRXJyb3IsIGdldEVycm9ycyB9XG59XG4iLCJpbXBvcnQge1xuICAgIEluaXRpYWxQYXJhbSxcbiAgICBJbml0aWFsUGFyYW1WYWxpZGF0b3IsXG4gICAgUGFyYW0sXG4gICAgRm9ybUVsZW1lbnQsXG4gICAgVmFsaWRhdGVkRXJyb3IsXG4gICAgRm9ybUVsZW1lbnRWYWxpZGF0b3IsXG59IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9tb2RlbC9FbGVtZW50J1xuXG5leHBvcnQgZGVmYXVsdCAoZm9ybUVsOiBGb3JtRWxlbWVudCwgcGFyYW1zOiBJbml0aWFsUGFyYW0pID0+IHtcbiAgICBGb3JtRWxlbWVudFZhbGlkYXRvci5wYXJzZShmb3JtRWwpXG4gICAgSW5pdGlhbFBhcmFtVmFsaWRhdG9yLnBhcnNlKHBhcmFtcylcblxuICAgIGNvbnN0IHRhcmdldEZvcm1FbGVtZW50ID0gKCgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnQgZm9ybUVsIHRvIEhUTUxGb3JtRWxlbWVudCBpZiBpdCdzIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtRWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUVsKVxuXG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgdGFyZ2V0IGZvcm0gZWxlbWVudDogJHtmb3JtRWx9YClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsIGFzIEhUTUxGb3JtRWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1FbFxuICAgIH0pKClcblxuICAgIGlmICh0YXJnZXRGb3JtRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdmb3JtJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhcmdldCBlbGVtZW50IGlzIG5vdCA8Zm9ybT4gZWxlbWVudGApXG4gICAgfVxuXG4gICAgdGFyZ2V0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlXG5cbiAgICAgICAgdmFsaWRhdGUoKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGVycm9ycykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzW2tleV1cbiAgICAgICAgICAgIGZsYWcgPSBmbGFnICYmIGVycm9yLmxlbmd0aCA8PSAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmluZCBzdWJtaXQgYnV0dG9uIGlmIGl0J3Mgc3BlY2lmaWVkXG4gICAgICovXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbXMuc3VibWl0X2J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnN1Ym1pdF9idXR0b24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0Rm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMuc3VibWl0X2J1dHRvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXMuc3VibWl0X2J1dHRvblxuICAgIH0pKClcblxuICAgIC8qKlxuICAgICAqIEFycmFuZ2VkIHBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0IGFycmFuZ2VkUGFyYW1zOiBQYXJhbSA9IHtcbiAgICAgICAgLi4ue1xuICAgICAgICAgICAgZXJyb3JfY2xhc3M6ICdoYXMtZXJyb3InLFxuICAgICAgICAgICAgZXJyb3JfbWVzc2FnZV9jbGFzczogJ2lucHV0Zm9sbG93LWVycm9yJyxcbiAgICAgICAgICAgIHZhbGlkX2NsYXNzOiAnaXMtdmFsaWQnLFxuICAgICAgICAgICAgaW5pdGlhbF9lcnJvcl92aWV3OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgUHJveHkgZm9yIG9ic2VydmluZyBlcnJvcnMgdmFsdWVzXG4gICAgICovXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IFByb3h5PHsgW2tleTogc3RyaW5nXTogVmFsaWRhdGVkRXJyb3JbXSB9PihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldDogKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpXG4gICAgICAgICAgICAgICAgaWYgKHNldCAmJiBzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnNba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgZXJyb3IubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmFuZ2VkUGFyYW1zLm9uX3N1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJhbmdlZFBhcmFtcy5vbl9zdWNjZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJhbmdlZFBhcmFtcy5vbl9lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLm9uX2Vycm9yKGVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyaW5nIENoZWNraW5nIEVsZW1lbnRzXG4gICAgICovXG4gICAgY29uc3QgZWxlbWVudHM6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUVsZW1lbnQ+W10gPSBbXVxuICAgIE9iamVjdC5rZXlzKGFycmFuZ2VkUGFyYW1zLnJ1bGVzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZXMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBhcnJhbmdlZFBhcmFtcy5ydWxlc1tuYW1lXVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtydWxlc11cbiAgICAgICAgfSkoKVxuICAgICAgICBpZiAoIXJ1bGVzIHx8ICFydWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICB0YXJnZXRGb3JtRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGFycmFuZ2VkUGFyYW1zLFxuICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRzLnB1c2goRWxlbWVudClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdmFsaWRhdGluZ1xuICAgICAqL1xuICAgIGNvbnN0IHZhbGlkYXRlID0gKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgICAgICBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsaWRhdGUoaW5pdClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodHlwZW9mIGFycmFuZ2VkUGFyYW1zLm9uX3ZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJhbmdlZFBhcmFtcy5vbl92YWxpZGF0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIHZhbGlkYXRlXG4gICAgdmFsaWRhdGUodHJ1ZSlcblxuICAgIHJldHVybiB7IGZvcm1FbDogdGFyZ2V0Rm9ybUVsZW1lbnQsIGVsZW1lbnRzLCB2YWxpZGF0ZSB9XG59XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJsIiwiYXIiLCJBcnJheSIsInNsaWNlIiwiY29uY2F0IiwidXRpbCIsImFzc2VydEVxdWFsIiwidmFsIiwiYXNzZXJ0SXMiLCJfYXJnIiwiYXNzZXJ0TmV2ZXIiLCJfeCIsIkVycm9yIiwiYXJyYXlUb0VudW0iLCJpdGVtcyIsIm9iaiIsIml0ZW0iLCJnZXRWYWxpZEVudW1WYWx1ZXMiLCJ2YWxpZEtleXMiLCJvYmplY3RLZXlzIiwiZmlsdGVyIiwiayIsImZpbHRlcmVkIiwib2JqZWN0VmFsdWVzIiwibWFwIiwiZSIsImtleXMiLCJvYmplY3QiLCJrZXkiLCJwdXNoIiwiZmluZCIsImFyciIsImNoZWNrZXIiLCJ1bmRlZmluZWQiLCJpc0ludGVnZXIiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImpvaW5WYWx1ZXMiLCJhcnJheSIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwidmFsdWUiLCJ0b1N0cmluZyIsIlpvZFBhcnNlZFR5cGUiLCJnZXRQYXJzZWRUeXBlIiwiZGF0YSIsInN0cmluZyIsImlzTmFOIiwibmFuIiwibnVtYmVyIiwiYmlnaW50Iiwic3ltYm9sIiwiaXNBcnJheSIsInRoZW4iLCJwcm9taXNlIiwiTWFwIiwiU2V0Iiwic2V0IiwiRGF0ZSIsImRhdGUiLCJ1bmtub3duIiwiWm9kSXNzdWVDb2RlIiwicXVvdGVsZXNzSnNvbiIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsIlpvZEVycm9yIiwiaXNzdWVzIiwiYWRkSXNzdWUiLCJzdWIiLCJhZGRJc3N1ZXMiLCJzdWJzIiwiYWN0dWFsUHJvdG8iLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIm5hbWUiLCJfbWFwcGVyIiwibWFwcGVyIiwiaXNzdWUiLCJtZXNzYWdlIiwiZmllbGRFcnJvcnMiLCJfZXJyb3JzIiwicHJvY2Vzc0Vycm9yIiwiZXJyb3IiLCJjb2RlIiwidW5pb25FcnJvcnMiLCJyZXR1cm5UeXBlRXJyb3IiLCJhcmd1bWVudHNFcnJvciIsInBhdGgiLCJjdXJyIiwiZWwiLCJ0ZXJtaW5hbCIsImZvcm1FcnJvcnMiLCJmbGF0dGVuIiwiY3JlYXRlIiwiZXJyb3JNYXAiLCJfY3R4IiwiaW52YWxpZF90eXBlIiwicmVjZWl2ZWQiLCJleHBlY3RlZCIsImludmFsaWRfbGl0ZXJhbCIsInVucmVjb2duaXplZF9rZXlzIiwiaW52YWxpZF91bmlvbiIsImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvciIsIm9wdGlvbnMiLCJpbnZhbGlkX2VudW1fdmFsdWUiLCJpbnZhbGlkX2FyZ3VtZW50cyIsImludmFsaWRfcmV0dXJuX3R5cGUiLCJpbnZhbGlkX2RhdGUiLCJpbnZhbGlkX3N0cmluZyIsInZhbGlkYXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJjdXN0b20iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInNldEVycm9yTWFwIiwiZ2V0RXJyb3JNYXAiLCJtYWtlSXNzdWUiLCJwYXJhbXMiLCJlcnJvck1hcHMiLCJpc3N1ZURhdGEiLCJmdWxsUGF0aCIsImZ1bGxJc3N1ZSIsImVycm9yTWVzc2FnZSIsIm1hcHMiLCJtIiwicmV2ZXJzZSIsIl9vYmplY3RTcHJlYWQiLCJFTVBUWV9QQVRIIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJjdHgiLCJjb21tb24iLCJjb250ZXh0dWFsRXJyb3JNYXAiLCJzY2hlbWFFcnJvck1hcCIsIngiLCJQYXJzZVN0YXR1cyIsInN0YXR1cyIsInJlc3VsdHMiLCJhcnJheVZhbHVlIiwiSU5WQUxJRCIsImRpcnR5IiwicGFpcnMiLCJzeW5jUGFpcnMiLCJwYWlyIiwibWVyZ2VPYmplY3RTeW5jIiwiZmluYWxPYmplY3QiLCJhbHdheXNTZXQiLCJmcmVlemUiLCJESVJUWSIsIk9LIiwiaXNBYm9ydGVkIiwiaXNEaXJ0eSIsImlzVmFsaWQiLCJpc0FzeW5jIiwiUHJvbWlzZSIsImVycm9yVXRpbCIsImVyclRvT2JqIiwiUGFyc2VJbnB1dExhenlQYXRoIiwicGFyZW50IiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiWm9kVHlwZSIsImRlZiIsInNwYSIsInNhZmVQYXJzZUFzeW5jIiwiX2RlZiIsInBhcnNlIiwiYmluZCIsInNhZmVQYXJzZSIsInBhcnNlQXN5bmMiLCJyZWZpbmUiLCJyZWZpbmVtZW50Iiwic3VwZXJSZWZpbmUiLCJvcHRpb25hbCIsIm51bGxhYmxlIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJpc051bGxhYmxlIiwiaXNPcHRpb25hbCIsImlucHV0IiwicGFyc2VkVHlwZSIsIl9wYXJzZSIsInJlc29sdmUiLCJfYSIsImFzeW5jIiwiX3BhcnNlU3luYyIsIm1heWJlQXN5bmNSZXN1bHQiLCJjaGVjayIsImdldElzc3VlUHJvcGVydGllcyIsIl9yZWZpbmVtZW50Iiwic2V0RXJyb3IiLCJyZWZpbmVtZW50RGF0YSIsIlpvZEVmZmVjdHMiLCJzY2hlbWEiLCJ0eXBlTmFtZSIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsImVmZmVjdCIsIlpvZE9wdGlvbmFsIiwiWm9kTnVsbGFibGUiLCJab2RBcnJheSIsIlpvZFByb21pc2UiLCJvcHRpb24iLCJab2RVbmlvbiIsImluY29taW5nIiwiWm9kSW50ZXJzZWN0aW9uIiwiZGVmYXVsdFZhbHVlRnVuYyIsIlpvZERlZmF1bHQiLCJpbm5lclR5cGUiLCJkZWZhdWx0VmFsdWUiLCJab2RCcmFuZGVkIiwiWm9kQ2F0Y2giLCJUaGlzIiwiY29uc3RydWN0b3IiLCJ0YXJnZXQiLCJab2RQaXBlbGluZSIsImN1aWRSZWdleCIsInV1aWRSZWdleCIsImVtYWlsUmVnZXgiLCJkYXRldGltZVJlZ2V4IiwiYXJncyIsInByZWNpc2lvbiIsIm9mZnNldCIsIlJlZ0V4cCIsIlpvZFN0cmluZyIsIl9yZWdleCIsInJlZ2V4IiwidGVzdCIsIm5vbmVtcHR5IiwibWluIiwidHJpbSIsImNoZWNrcyIsImtpbmQiLCJjb2VyY2UiLCJTdHJpbmciLCJfZ2V0VHlwZSIsIl9nZXRPclJldHVybkN0eCIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsIl9hZGRDaGVjayIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImxlbiIsImNoIiwibWF4IiwiZmxvYXRTYWZlUmVtYWluZGVyIiwic3RlcCIsInZhbERlY0NvdW50Iiwic3BsaXQiLCJzdGVwRGVjQ291bnQiLCJkZWNDb3VudCIsInZhbEludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInN0ZXBJbnQiLCJwb3ciLCJab2ROdW1iZXIiLCJndGUiLCJsdGUiLCJzZXRMaW1pdCIsIlpvZEJpZ0ludCIsIkJpZ0ludCIsIlpvZEJvb2xlYW4iLCJCb29sZWFuIiwiWm9kRGF0ZSIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIlpvZFN5bWJvbCIsIlpvZFVuZGVmaW5lZCIsIlpvZE51bGwiLCJab2RBbnkiLCJfYW55IiwiWm9kVW5rbm93biIsIl91bmtub3duIiwiWm9kTmV2ZXIiLCJuZXZlciIsIlpvZFZvaWQiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJfcGFyc2VBc3luYyIsIm1lcmdlQXJyYXkiLCJvYmplY3RVdGlsIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsIkF1Z21lbnRGYWN0b3J5IiwiYXVnbWVudGF0aW9uIiwiWm9kT2JqZWN0Iiwic2hhcGUiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwiZmllbGRTY2hlbWEiLCJlbGVtZW50IiwidW53cmFwIiwiWm9kVHVwbGUiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJpbmNsdWRlcyIsImtleVZhbGlkYXRvciIsIl9iIiwiX2MiLCJfZCIsIm1lcmdpbmciLCJtZXJnZWQiLCJpbmRleCIsIm1hc2siLCJpbmRleE9mIiwibmV3RmllbGQiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsInR5cGVzIiwiZ2V0RGlzY3JpbWluYXRvciIsIlpvZExhenkiLCJab2RMaXRlcmFsIiwiWm9kRW51bSIsIlpvZE5hdGl2ZUVudW0iLCJab2REaXNjcmltaW5hdGVkVW5pb24iLCJkaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvclZhbHVlIiwib3B0aW9uc01hcCIsImdldCIsImRpc2NyaW1pbmF0b3JWYWx1ZXMiLCJoYXMiLCJtZXJnZVZhbHVlcyIsImEiLCJiIiwiYVR5cGUiLCJiVHlwZSIsInZhbGlkIiwiYktleXMiLCJzaGFyZWRLZXlzIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsIlpvZFJlY29yZCIsImtleVR5cGUiLCJ2YWx1ZVR5cGUiLCJtZXJnZU9iamVjdEFzeW5jIiwidGhpcmQiLCJab2RNYXAiLCJlbnRyaWVzIiwiZmluYWxNYXAiLCJab2RTZXQiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzIiwicGFyc2VkU2V0IiwiYWRkIiwidmFsdWVzIiwiWm9kRnVuY3Rpb24iLCJ2YWxpZGF0ZSIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwicGFyc2VkQXJncyIsInBhcnNlZFJldHVybnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiZXhwZWN0ZWRWYWx1ZXMiLCJlbnVtVmFsdWVzIiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsInByb2Nlc3NlZCIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJhYm9ydCIsImV4ZWN1dGVSZWZpbmVtZW50IiwiYWNjIiwiaW5uZXIiLCJiYXNlIiwiY3JlYXRlV2l0aFByZXByb2Nlc3MiLCJwcmVwcm9jZXNzIiwiWm9kTmFOIiwiQlJBTkQiLCJTeW1ib2wiLCJoYW5kbGVBc3luYyIsImluUmVzdWx0Iiwib3V0IiwicDIiLCJsYXRlIiwiaW5zdGFuY2VPZlR5cGUiLCJjbHMiLCJzdHJpbmdUeXBlIiwibnVtYmVyVHlwZSIsIm5hblR5cGUiLCJiaWdJbnRUeXBlIiwiYm9vbGVhblR5cGUiLCJkYXRlVHlwZSIsInN5bWJvbFR5cGUiLCJ1bmRlZmluZWRUeXBlIiwibnVsbFR5cGUiLCJhbnlUeXBlIiwidW5rbm93blR5cGUiLCJuZXZlclR5cGUiLCJ2b2lkVHlwZSIsImFycmF5VHlwZSIsIm9iamVjdFR5cGUiLCJzdHJpY3RPYmplY3RUeXBlIiwidW5pb25UeXBlIiwiZGlzY3JpbWluYXRlZFVuaW9uVHlwZSIsImludGVyc2VjdGlvblR5cGUiLCJ0dXBsZVR5cGUiLCJyZWNvcmRUeXBlIiwibWFwVHlwZSIsInNldFR5cGUiLCJmdW5jdGlvblR5cGUiLCJsYXp5VHlwZSIsImxpdGVyYWxUeXBlIiwiZW51bVR5cGUiLCJuYXRpdmVFbnVtVHlwZSIsInByb21pc2VUeXBlIiwiZWZmZWN0c1R5cGUiLCJvcHRpb25hbFR5cGUiLCJudWxsYWJsZVR5cGUiLCJwcmVwcm9jZXNzVHlwZSIsInBpcGVsaW5lVHlwZSIsIm9zdHJpbmciLCJvbnVtYmVyIiwib2Jvb2xlYW4iLCJORVZFUiIsIm1vZCIsImRlZmF1bHRFcnJvck1hcCIsIlpvZFRyYW5zZm9ybWVyIiwiU2NoZW1hIiwiWm9kU2NoZW1hIiwiYW55IiwiZGlzY3JpbWluYXRlZFVuaW9uIiwiaW50ZXJzZWN0aW9uIiwibGF6eSIsImxpdGVyYWwiLCJuYXRpdmVFbnVtIiwicGlwZWxpbmUiLCJyZWNvcmQiLCJzdHJpY3RPYmplY3QiLCJ0cmFuc2Zvcm1lciIsInR1cGxlIiwidW5pb24iLCJ6IiwiY2hlY2tSZXF1aXJlZCIsImNoZWNrRW1haWwiLCJjaGVja051bWJlciIsImV4ZWNWYWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQk8sSUFBSUEsT0FBUSxHQUFHLFNBQVcsUUFBQSxHQUFBO0lBQzdCQSxPQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFNBQVNGLFFBQVEsQ0FBQ0csQ0FBQyxFQUFFO0VBQzdDLElBQUEsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFD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O0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYyxHQUFBLEdBQUE7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUN2RSxJQUFJLENBQUNzRSxNQUFNLENBQUN2TyxJQUFJLENBQUMsVUFBQ3NQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssT0FBTyxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQy9ELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBWSxHQUFBLEdBQUE7UUFDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUN2RSxJQUFJLENBQUNzRSxNQUFNLENBQUN2TyxJQUFJLENBQUMsVUFBQ3NQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssS0FBSyxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzdELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYSxHQUFBLEdBQUE7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUN2RSxJQUFJLENBQUNzRSxNQUFNLENBQUN2TyxJQUFJLENBQUMsVUFBQ3NQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssTUFBTSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzlELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO0VBQUEsSUFBQSxHQUFBLEVBQ0QsU0FBYSxHQUFBLEdBQUE7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUN2RSxJQUFJLENBQUNzRSxNQUFNLENBQUN2TyxJQUFJLENBQUMsVUFBQ3NQLEVBQUUsRUFBQTtFQUFBLFFBQUEsT0FBS0EsRUFBRSxDQUFDZCxJQUFJLEtBQUssTUFBTSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzlELEtBQUE7RUFBQyxHQUFBLEVBQUE7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
