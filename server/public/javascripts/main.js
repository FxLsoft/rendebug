/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _utils = __webpack_require__(29);

var _utils2 = _interopRequireDefault(_utils);

var _ajax = __webpack_require__(148);

var _ajax2 = _interopRequireDefault(_ajax);

var _cookie = __webpack_require__(150);

var _cookie2 = _interopRequireDefault(_cookie);

var _storage = __webpack_require__(151);

var _storage2 = _interopRequireDefault(_storage);

var _bind = __webpack_require__(154);

var _bind2 = _interopRequireDefault(_bind);

var _toast = __webpack_require__(67);

var _toast2 = _interopRequireDefault(_toast);

var _loading = __webpack_require__(155);

__webpack_require__(157);

var _google = __webpack_require__(158);

var _google2 = _interopRequireDefault(_google);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _utils2.default, {
    ajax: _ajax2.default,
    doAjax: _ajax.doAjax
}, _cookie2.default, _storage2.default, _bind2.default, {
    toast: _toast2.default,
    showLoad: _loading.showLoad,
    hideLoad: _loading.hideLoad
}, _google2.default);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(11);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(49);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(115);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(124);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_426e9cb8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_426e9cb8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DropDown/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-426e9cb8", Component.options)
  } else {
    hotAPI.reload("data-v-426e9cb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollByDirection(el) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var to = arguments[2];
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
    var finish = arguments[4];
    var scrollDirect = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'scrollTop';

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            // 滚动完进行回调
            if (typeof finish === 'function') {
                finish();
            }
            return;
        };

        var d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el[scrollDirect] = d;
        }
        window.requestAnimationFrame(function () {
            return scroll(d, end, step);
        });
    }
    scroll(from, to, step);
};
exports.default = {
    /**
     * 判断是否是字符串
     */
    isString: function isString(target) {
        return Object.prototype.toString.call(target) === '[object String]';
    },
    /**
     * 判断是否是时间
     */
    isDate: function isDate(target) {
        return Object.prototype.toString.call(target) === '[object Date]';
    },
    /**
     * 判断是否是数字
     */
    isNumber: function isNumber(target) {
        return Object.prototype.toString.call(target) === '[object Number]';
    },
    /**
     * 判断是否是Object
     */
    isObject: function isObject(target) {
        return Object.prototype.toString.call(target) === '[object Object]';
    },
    /**
     * 判断是否是Array
     */
    isArray: function isArray(target) {
        return Object.prototype.toString.call(target) === '[object Array]';
    },
    /**
     * 判断是否是Function
     */
    isFunction: function isFunction(target) {
        return Object.prototype.toString.call(target) === '[object Function]';
    },
    /**
     * 驼峰化
     * console.log(camelize('-moz-transform'));
     *  => MozTransform
     * city => City
     */
    camelize: function camelize(str) {
        str = str || '';
        return str.replace(/^[-_\s]*(.)?/g, function (match, c) {
            return c ? c.toUpperCase() : '';
        });
    },
    /**
     * 中划线化
     * console.log(dasherize('MozTransform'));
     * => "-moz-transofrm"
     * agent id => agent-id
     */
    dasherize: function dasherize(str) {
        str = str || "";
        return str.replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, '-').toLowerCase();
    },

    /**
    * 节流函数
    * fn 待执行函数
    * duration 传入的执行间隔时间 默认250ms
    */

    throttle: function throttle(fn, duration) {
        // 记录上次执行的时间
        var lastTime = void 0;
        // 定时器
        var timer = void 0;
        // 默认执行间隔250ms
        var dura = duration || 250;
        return function () {
            var args = arguments;
            var now = new Date();
            var ctx = this;
            if (lastTime && now - lastTime < dura) {
                // 上次执行时间 --- 现在  小于间隔时间 那么重启定时器
                clearTimeout(timer);
                timer = setTimeout(function () {
                    lastTime = now;
                    fn.apply(ctx, args);
                }, dura);
            } else {
                // 超过间隔时间 可立即执行
                lastTime = now;
                fn.apply(ctx, args);
            }
        };
    },

    /**
     * 去抖函数
     * fn 待执行函数
     * wait 接收函数触发的时间区间 会在
     * immediate true wait时间段的开始阶段执行，false 末尾阶段执行
     */
    debounce: function debounce(fn) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
        var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var timeout = void 0,
            args = void 0,
            context = void 0,
            timestamp = void 0;

        var later = function later() {
            // wait指定的时间间隔期间不断调用debounce返回的函数 会不断更新timestamp，启动新的计时器，计算需要重新延时的时间
            var last = new Date() - timestamp;
            if (last < wait && last >= 0) timeout = setTimeout(later, wait - last);else {
                // wait >= last 执行 最近一次的调用
                timeout = null;
                if (!immediate) {
                    fn.apply(context, args);
                    context = args = null;
                }
            }
        };
        // 重复调用，重置timestamp 改变later内的last
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            // 在时间区间开头阶段立即执行
            if (callNow) {
                fn.apply(context, args);
                context = args = null;
            }
        };
    },

    /**
     * 动态加载脚本文件, 返回一个promise
     * @param attr 生成script标签时的属性
     */
    loadScript: function loadScript(url, attr) {
        return new _promise2.default(function (resolve) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            if (script.readyState) {
                //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        resolve();
                    }
                };
            } else {
                //Others
                script.onload = function () {
                    resolve();
                };
            }

            script.src = url;
            if (Object.prototype.toString.apply(attr) === "[object Object]") {
                for (var i in attr) {
                    script.setAttribute(i, attr[i]);
                }
            }
            document.getElementsByTagName("head")[0].appendChild(script);
        });
    },
    /**
     * 动态加载css文件，返回一个Promise
     * @param {*} href
     * @param {*} callback 可选
     */
    loadCss: function loadCss(href, callback) {
        return new _promise2.default(function (resolve) {
            var link = document.createElement('link');
            link.href = href;
            link.rel = 'stylesheet';
            link.onload = function () {
                if (typeof callback === 'function') {
                    callback();
                }
                resolve();
            };
            document.getElementsByTagName("head")[0].appendChild(link);
        });
    },

    /**
     *  根据name获取当前url对应的参数
     *  url = '&key=value' => value
     *  默认值为defaultValue
     */
    getUrlParam: function getUrlParam(name) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (!name) return null;
        var search = document.location.href;
        var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
        var matcher = pattern.exec(search);
        var param = null;
        if (null != matcher) {
            try {
                param = decodeURIComponent(decodeURIComponent(matcher[1]));
            } catch (e) {
                try {
                    param = decodeURIComponent(matcher[1]);
                } catch (e) {
                    param = matcher[1];
                }
            }
        }
        return param === '' || param === null ? defaultValue : param;
    },
    /**
     * 获取滚动条宽度
     */
    getScrollbarWidth: function getScrollbarWidth() {
        if (this.getScrollbarWidth.value === undefined) {
            var odiv = document.createElement('div'),
                //创建一个div
            styles = {
                width: '100px',
                height: '100px',
                overflowY: 'scroll' //让他有滚动条
            },
                i,
                scrollbarWidth;
            for (i in styles) {
                odiv.style[i] = styles[i];
            }document.body.appendChild(odiv); //把div添加到body中
            scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; //相减
            odiv.remove(); //移除创建的div
            this.getScrollbarWidth.value = scrollbarWidth; //返回滚动条宽度
        }
        return this.getScrollbarWidth.value;
    },

    // scrollTop animation
    scrollTop: function scrollTop(el) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var to = arguments[2];
        var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
        var finish = arguments[4];

        scrollByDirection(el, from, to, duration, finish, 'scrollTop');
    },
    scrollLeft: function scrollLeft(el) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var to = arguments[2];
        var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
        var finish = arguments[4];

        scrollByDirection(el, from, to, duration, finish, 'scrollLeft');
    },
    hasClass: function hasClass(el, cls) {
        if (!el || !cls) return false;
        if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
        if (el.classList) {
            return el.classList.contains(cls);
        } else {
            return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
    },
    addClass: function addClass(el, cls) {
        if (!el) return;
        var curClass = el.className;
        var classes = (cls || '').split(' ');

        for (var i = 0, j = classes.length; i < j; i++) {
            var clsName = classes[i];
            if (!clsName) continue;

            if (el.classList) {
                el.classList.add(clsName);
            } else {
                if (!this.hasClass(el, clsName)) {
                    curClass += ' ' + clsName;
                }
            }
        }
        if (!el.classList) {
            el.className = curClass;
        }
    },
    removeClass: function removeClass(el, cls) {
        if (!el || !cls) return;
        var classes = cls.split(' ');
        var curClass = ' ' + el.className + ' ';

        for (var i = 0, j = classes.length; i < j; i++) {
            var clsName = classes[i];
            if (!clsName) continue;

            if (el.classList) {
                el.classList.remove(clsName);
            } else {
                if (this.hasClass(el, clsName)) {
                    curClass = curClass.replace(' ' + clsName + ' ', ' ');
                }
            }
        }
        if (!el.classList) {
            var trim = function trim(string) {
                return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
            };
            el.className = trim(curClass);
        }
    },

    // 获取全局唯一Key
    getUniqueKey: function getUniqueKey() {
        if (!this.___uniqueKey) this.___uniqueKey = 0;
        return this.___uniqueKey++;
    },

    // 获取输入框里光标的位置
    getCursorPosition: function getCursorPosition(node) {
        // 判断node是否为dom对象
        if (!((typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object' && node instanceof HTMLElement || node && (typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) === 'object' && node.nodeType === 1 && typeof node.nodeName === 'string')) {
            return;
        }
        var cursurPosition = -1;
        //非IE浏览器
        if (typeof node.selectionStart === 'number') {
            cursurPosition = node.selectionStart;
        }
        //IE
        else {
                var range = document.selection.createRange();
                range.moveStart("character", -node.value.length);
                cursurPosition = range.text.length;
            }
        return cursurPosition;
    },

    // 设置光标的位置
    setCaret: function setCaret(node, caret) {
        if (node.setSelectionRange) {
            node.focus();
            node.setSelectionRange(caret, caret);
            setTimeout(function () {
                node.setSelectionRange(caret, caret);
            });
        } else if (node.createTextRange) {
            var range = node.createTextRange();
            range.collapse(true);
            range.moveEnd('character', caret);
            range.moveStart('character', caret);
            range.select();
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(168), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports=function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=6)}([function(t,e,r){"use strict";function o(t,e){function r(){t.classList.add("ps--focus")}function o(){t.classList.remove("ps--focus")}var n=this;n.settings=a();for(var i in e)n.settings[i]=e[i];n.containerWidth=null,n.containerHeight=null,n.contentWidth=null,n.contentHeight=null,n.isRtl="rtl"===c.css(t,"direction"),n.isNegativeScroll=function(){var e=t.scrollLeft,r=null;return t.scrollLeft=-1,r=t.scrollLeft<0,t.scrollLeft=e,r}(),n.negativeScrollAdjustment=n.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.event=new u,n.ownerDocument=t.ownerDocument||document,n.scrollbarXRail=c.appendTo(c.create("div","ps__scrollbar-x-rail"),t),n.scrollbarX=c.appendTo(c.create("div","ps__scrollbar-x"),n.scrollbarXRail),n.scrollbarX.setAttribute("tabindex",0),n.event.bind(n.scrollbarX,"focus",r),n.event.bind(n.scrollbarX,"blur",o),n.scrollbarXActive=null,n.scrollbarXWidth=null,n.scrollbarXLeft=null,n.scrollbarXBottom=s.toInt(c.css(n.scrollbarXRail,"bottom")),n.isScrollbarXUsingBottom=n.scrollbarXBottom===n.scrollbarXBottom,n.scrollbarXTop=n.isScrollbarXUsingBottom?null:s.toInt(c.css(n.scrollbarXRail,"top")),n.railBorderXWidth=s.toInt(c.css(n.scrollbarXRail,"borderLeftWidth"))+s.toInt(c.css(n.scrollbarXRail,"borderRightWidth")),c.css(n.scrollbarXRail,"display","block"),n.railXMarginWidth=s.toInt(c.css(n.scrollbarXRail,"marginLeft"))+s.toInt(c.css(n.scrollbarXRail,"marginRight")),c.css(n.scrollbarXRail,"display",""),n.railXWidth=null,n.railXRatio=null,n.scrollbarYRail=c.appendTo(c.create("div","ps__scrollbar-y-rail"),t),n.scrollbarY=c.appendTo(c.create("div","ps__scrollbar-y"),n.scrollbarYRail),n.scrollbarY.setAttribute("tabindex",0),n.event.bind(n.scrollbarY,"focus",r),n.event.bind(n.scrollbarY,"blur",o),n.scrollbarYActive=null,n.scrollbarYHeight=null,n.scrollbarYTop=null,n.scrollbarYRight=s.toInt(c.css(n.scrollbarYRail,"right")),n.isScrollbarYUsingRight=n.scrollbarYRight===n.scrollbarYRight,n.scrollbarYLeft=n.isScrollbarYUsingRight?null:s.toInt(c.css(n.scrollbarYRail,"left")),n.scrollbarYOuterWidth=n.isRtl?s.outerWidth(n.scrollbarY):null,n.railBorderYWidth=s.toInt(c.css(n.scrollbarYRail,"borderTopWidth"))+s.toInt(c.css(n.scrollbarYRail,"borderBottomWidth")),c.css(n.scrollbarYRail,"display","block"),n.railYMarginHeight=s.toInt(c.css(n.scrollbarYRail,"marginTop"))+s.toInt(c.css(n.scrollbarYRail,"marginBottom")),c.css(n.scrollbarYRail,"display",""),n.railYHeight=null,n.railYRatio=null}function n(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var s=r(2),a=r(14),c=r(4),u=r(11),p=r(12),d={};e.add=function(t,e){var r=p();return i(t,r),d[r]=new o(t,e),d[r]},e.remove=function(t){delete d[n(t)],l(t)},e.get=function(t){return d[n(t)]}},function(t,e,r){"use strict";function o(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function n(t,e){var r={width:e.railXWidth};e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-t.scrollTop:r.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,r);var o={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,o),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=r(2),l=r(4),s=r(0),a=r(3);t.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var r;t.contains(e.scrollbarXRail)||(r=l.queryChildren(t,".ps__scrollbar-x-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(r=l.queryChildren(t,".ps__scrollbar-y-rail"),r.length>0&&r.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=o(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=o(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),n(t,e),e.scrollbarXActive?t.classList.add("ps--active-x"):(t.classList.remove("ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,a(t,"left",0)),e.scrollbarYActive?t.classList.add("ps--active-y"):(t.classList.remove("ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,a(t,"top",0))}},function(t,e,r){"use strict";function o(t){var e,r=["ps--in-scrolling"];return e=void 0===t?["ps--x","ps--y"]:["ps--"+t],r.concat(e)}var n=r(4),i=e.toInt=function(t){return parseInt(t,10)||0};e.isEditable=function(t){return n.matches(t,"input,[contenteditable]")||n.matches(t,"select,[contenteditable]")||n.matches(t,"textarea,[contenteditable]")||n.matches(t,"button,[contenteditable]")},e.removePsClasses=function(t){for(var e=0;e<t.classList.length;e++){var r=t.classList[e];0===r.indexOf("ps-")&&t.classList.remove(r)}},e.outerWidth=function(t){return i(n.css(t,"width"))+i(n.css(t,"paddingLeft"))+i(n.css(t,"paddingRight"))+i(n.css(t,"borderLeftWidth"))+i(n.css(t,"borderRightWidth"))},e.startScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.add(r[n])},e.stopScrolling=function(t,e){for(var r=o(e),n=0;n<r.length;n++)t.classList.remove(r[n])},e.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},function(t,e,r){"use strict";var o=r(0),n=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};t.exports=function(t,e,r){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===r)throw"You must provide a value to the update-scroll function";"top"===e&&r<=0&&(t.scrollTop=r=0,t.dispatchEvent(n("ps-y-reach-start"))),"left"===e&&r<=0&&(t.scrollLeft=r=0,t.dispatchEvent(n("ps-x-reach-start")));var i=o.get(t);"top"===e&&r>=i.contentHeight-i.containerHeight&&(r=i.contentHeight-i.containerHeight,r-t.scrollTop<=2?r=t.scrollTop:t.scrollTop=r,t.dispatchEvent(n("ps-y-reach-end"))),"left"===e&&r>=i.contentWidth-i.containerWidth&&(r=i.contentWidth-i.containerWidth,r-t.scrollLeft<=2?r=t.scrollLeft:t.scrollLeft=r,t.dispatchEvent(n("ps-x-reach-end"))),void 0===i.lastTop&&(i.lastTop=t.scrollTop),void 0===i.lastLeft&&(i.lastLeft=t.scrollLeft),"top"===e&&r<i.lastTop&&t.dispatchEvent(n("ps-scroll-up")),"top"===e&&r>i.lastTop&&t.dispatchEvent(n("ps-scroll-down")),"left"===e&&r<i.lastLeft&&t.dispatchEvent(n("ps-scroll-left")),"left"===e&&r>i.lastLeft&&t.dispatchEvent(n("ps-scroll-right")),"top"===e&&r!==i.lastTop&&(t.scrollTop=i.lastTop=r,t.dispatchEvent(n("ps-scroll-y"))),"left"===e&&r!==i.lastLeft&&(t.scrollLeft=i.lastLeft=r,t.dispatchEvent(n("ps-scroll-x")))}},function(t,e,r){"use strict";function o(t,e){return window.getComputedStyle(t)[e]}function n(t,e,r){return"number"==typeof r&&(r=r.toString()+"px"),t.style[e]=r,t}function i(t,e){for(var r in e){var o=e[r];"number"==typeof o&&(o=o.toString()+"px"),t.style[r]=o}return t}var l={};l.create=function(t,e){var r=document.createElement(t);return r.className=e,r},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,r){return"object"==typeof e?i(t,e):void 0===r?o(t,e):n(t,e,r)},l.matches=function(t,e){return void 0!==t.matches?t.matches(e):t.msMatchesSelector(e)},l.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},t.exports=l},function(t,e,r){r(28);var o=r(25)(r(7),r(26),null,null);t.exports=o.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),n=r.n(o);e.default=n.a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(10),n=r.n(o);e.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},methods:{scrollHanle:function(t){this.$emit(t.type,t)},update:function(){n.a.update(this.$el)},__init:function(){this.swicher&&(this._ps_inited?this.update(this.$el):(this._ps_inited=!0,n.a.initialize(this.$el,this.settings)))},__uninit:function(){n.a.destroy(this.$el),this._ps_inited=!1}},watch:{swicher:function(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},$route:function(){this.update()}},mounted:function(){this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}}},function(t,e,r){e=t.exports=r(9)(),e.push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}.ps-container{position:relative}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&o[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),t.push(l))}},t}},function(t,e,r){"use strict";t.exports=r(13)},function(t,e,r){"use strict";var o=function(t){this.element=t,this.events={}};o.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},o.prototype.unbind=function(t,e){var r=void 0!==e;this.events[t]=this.events[t].filter(function(o){return!(!r||o===e)||(this.element.removeEventListener(t,o,!1),!1)},this)},o.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var n=function(){this.eventElements=[]};n.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new o(t),this.eventElements.push(e)),e},n.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},n.prototype.unbind=function(t,e,r){this.eventElement(t).unbind(e,r)},n.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},n.prototype.once=function(t,e,r){var o=this.eventElement(t),n=function(t){o.unbind(e,n),r(t)};o.bind(e,n)},t.exports=n},function(t,e,r){"use strict";t.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},function(t,e,r){"use strict";var o=r(15),n=r(23),i=r(24);t.exports={initialize:n,update:i,destroy:o}},function(t,e,r){"use strict";t.exports=function(){return{handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0);t.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},function(t,e,r){"use strict";function o(t,e){function r(t){return t.getBoundingClientRect()}var o=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var n=o.pageY-window.pageYOffset-r(e.scrollbarYRail).top,s=n>e.scrollbarYTop?1:-1;l(t,"top",t.scrollTop+s*e.containerHeight),i(t),o.stopPropagation()}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var n=o.pageX-window.pageXOffset-r(e.scrollbarXRail).left,s=n>e.scrollbarXLeft?1:-1;l(t,"left",t.scrollLeft+s*e.containerWidth),i(t),o.stopPropagation()})}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r){var n=o+r*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var o=null,n=null,s=function(e){r(e.pageX-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(r){n=r.pageX,o=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}function n(t,e){function r(r){var n=o+r*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var o=null,n=null,s=function(e){r(e.pageY-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(r){n=r.pageY,o=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}var i=r(2),l=r(4),s=r(0),a=r(1),c=r(3);t.exports=function(t){var e=s.get(t);o(t,e),n(t,e)}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(o||u){var p=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(p){if("IFRAME"===p.tagName)p=p.contentDocument.activeElement;else for(;p.shadowRoot;)p=p.shadowRoot.activeElement;if(n.isEditable(p))return}var d=0,f=0;switch(c.which){case 37:d=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:d=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+d),s(t),l=r(d,f),l&&c.preventDefault()}}})}var n=r(2),i=r(4),l=r(0),s=r(1),a=r(3);t.exports=function(t){o(t,l.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!==e&&r!==r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}function n(e,r){var o=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(o){var n=window.getComputedStyle(o);if(![n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/))return!1;var i=o.scrollHeight-o.clientHeight;if(i>0&&!(0===o.scrollTop&&r>0||o.scrollTop===i&&r<0))return!0;var l=o.scrollLeft-o.clientWidth;if(l>0&&!(0===o.scrollLeft&&e<0||o.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=o(s),u=c[0],p=c[1];n(u,p)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(p?l(t,"top",t.scrollTop-p*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-p*e.settings.wheelSpeed),a=!0):(l(t,"top",t.scrollTop-p*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),(a=a||r(u,p))&&(s.stopPropagation(),s.preventDefault()))}var a=!1;void 0!==window.onwheel?e.event.bind(t,"wheel",s):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var n=r(0),i=r(1),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){e.event.bind(t,"scroll",function(){i(t)})}var n=r(0),i=r(1);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function o(){c||(c=setInterval(function(){if(!i.get(t))return void clearInterval(c);s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),l(t)},50))}function a(){c&&(clearInterval(c),c=null),n.stopScrolling(t)}var c=null,u={top:0,left:0},p=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(r())?p=!0:(p=!1,a())}),e.event.bind(window,"mouseup",function(){p&&(p=!1,a())}),e.event.bind(window,"keyup",function(){p&&(p=!1,a())}),e.event.bind(window,"mousemove",function(e){if(p){var r={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};r.x<i.left+3?(u.left=-5,n.startScrolling(t,"x")):r.x>i.right-3?(u.left=5,n.startScrolling(t,"x")):u.left=0,r.y<i.top+3?(u.top=i.top+3-r.y<5?-5:-20,n.startScrolling(t,"y")):r.y>i.bottom-3?(u.top=r.y-i.bottom+3<5?5:20,n.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():o()}})}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){o(t,i.get(t))}},function(t,e,r){"use strict";function o(t,e,r,o){function n(r,o){var n=t.scrollTop,i=t.scrollLeft,l=Math.abs(r),s=Math.abs(o);if(s>l){if(o<0&&n===e.contentHeight-e.containerHeight||o>0&&0===n)return!e.settings.swipePropagation}else if(l>s&&(r<0&&i===e.contentWidth-e.containerWidth||r>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,r){s(t,"top",t.scrollTop-r),s(t,"left",t.scrollLeft-e),l(t)}function c(){w=!0}function u(){w=!1}function p(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function f(t){if(d(t)){_=!0;var e=p(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!_&&e.settings.swipePropagation&&f(t),!w&&_&&d(t)){var r=p(t),o={pageX:r.pageX,pageY:r.pageY},i=o.pageX-b.pageX,l=o.pageY-b.pageY;a(i,l),b=o;var s=(new Date).getTime(),c=s-g;c>0&&(m.x=i/c,m.y=l/c,g=s),n(i,l)&&(t.stopPropagation(),t.preventDefault())}}function v(){!w&&_&&(_=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return i.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10)))}var b={},g=0,m={},y=null,w=!1,_=!1;r?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",v)):o&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",v)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",v)))}var n=r(2),i=r(0),l=r(1),s=r(3);t.exports=function(t){if(n.env.supportsTouch||n.env.supportsIePointer){o(t,i.get(t),n.env.supportsTouch,n.env.supportsIePointer)}}},function(t,e,r){"use strict";var o=r(0),n=r(1),i={"click-rail":r(16),"drag-scrollbar":r(17),keyboard:r(18),wheel:r(19),touch:r(22),selection:r(21)},l=r(20);t.exports=function(t,e){t.classList.add("ps");var r=o.add(t,"object"==typeof e?e:{});t.classList.add("ps--theme_"+r.settings.theme),r.settings.handlers.forEach(function(e){i[e](t)}),l(t),n(t)}},function(t,e,r){"use strict";var o=r(2),n=r(4),i=r(0),l=r(1),s=r(3);t.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(n.css(e.scrollbarXRail,"marginLeft"))+o.toInt(n.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(n.css(e.scrollbarYRail,"marginTop"))+o.toInt(n.css(e.scrollbarYRail,"marginBottom")),n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),n.css(e.scrollbarXRail,"display",""),n.css(e.scrollbarYRail,"display",""))}},function(t,e){t.exports=function(t,e,r,o){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:n,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.$props.tagname,{tag:"section",staticClass:"ps-container",on:{"~mouseover":function(e){t.update(e)},"ps-scroll-y":t.scrollHanle,"ps-scroll-x":t.scrollHanle,"ps-scroll-up":t.scrollHanle,"ps-scroll-down":t.scrollHanle,"ps-scroll-left":t.scrollHanle,"ps-scroll-right":t.scrollHanle,"ps-y-reach-start":t.scrollHanle,"ps-y-reach-end":t.scrollHanle,"ps-x-reach-start":t.scrollHanle,"ps-x-reach-end":t.scrollHanle}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=u[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(s(o.parts[i],e))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(s(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:l}}}}function o(t){for(var e=[],r={},o=0;o<t.length;o++){var n=t[o],i=n[0],l=n[1],s=n[2],a=n[3],c={css:l,media:s,sourceMap:a};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function n(t,e){var r=f(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function s(t,e){var r,o,n;if(e.singleton){var s=v++;r=h||(h=l(e)),o=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=l(e),o=c.bind(null,r),n=function(){i(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function a(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function c(t,e){var r=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=d()),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],l=0;l<n.length;l++){var s=n[l],a=u[s.id];a.refs--,i.push(a)}if(t){r(o(t),e)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var o=r(8);"string"==typeof o&&(o=[[t.i,o,""]]);r(27)(o,{});o.locals&&(t.exports=o.locals)}]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(42);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(25);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unformats = exports.formats = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER_UNITS = ['', 'K', 'M', 'B'],
    regFormatFloat = /\d{1,3}(?=(\d{3})+\.\d+[^\d]?$)/g,
    regFormatInteger = /\d{1,3}(?=(\d{3})+[^\d]?$)/g,
    regFormatZero = /\.0+(?=([^\d]*$))/;

var isNull = function isNull(obj) {
    return obj === null || obj === undefined;
};
var formatNumber = function formatNumber(num, units, fixed, zeroFiexed) {
    if (isNaN(num)) {
        return '';
    }
    fixed = parseInt(fixed, 10);
    if (units) {
        if (isNaN(fixed)) fixed = 1;
        var idx = parseInt((parseInt(num).toFixed(0).length - 1) / 3),
            maxIdx = NUMBER_UNITS.length - 1;
        if (idx >= maxIdx) {
            idx = maxIdx;
            num = (num / Math.pow(1000, idx)).toFixed(fixed);
        } else {
            if (Number(num) < 1000 && zeroFiexed) {
                num = (num / Math.pow(1000, idx)).toFixed(fixed);
                num = parseFloat(num).toString();
            } else {
                num = (num / Math.pow(1000, idx)).toFixed(fixed);
            }
            if (num >= 1000) {
                num = (num / 1000).toFixed(fixed);
                idx += 1;
            }
        }
        num += NUMBER_UNITS[idx];
    } else if (!isNaN(fixed)) {
        num = Number(num).toFixed(fixed);;
    }
    // num = num.toString().replace(regFormatZero, '');
    return num.replace(num.indexOf('.') === -1 ? regFormatInteger : regFormatFloat, '$&,');
};

function getCaret(inp, flag) {
    if (isNaN(inp.selectionStart)) {
        // IE Support
        var srng = document.selection.createRange();
        if (inp.tagName.toLocaleLowerCase() === 'textarea') {
            var rng = srng.duplicate();
            rng.moveToElementText(inp);
            var pos = -1;
            while (rng.inRange(srng)) {
                rng.moveStart('character');
                pos++;
            }
            return flag === true ? srng.text.replace(/\r\n/g, '\n').length + pos : pos;
        } else {
            var len = flag === true ? srng.text.length : 0;
            srng.moveStart('character', -inp.value.length);
            return len + srng.text.length;
        }
    } else {
        return flag === true ? inp.selectionEnd : inp.selectionStart;
    }
}

var gRegexp = {
    unnum: /[^\d]/g,
    unnum_dot: /[^\d\.]/g,
    match_num: /[\d,]+(?:\.\d+)?/g,
    match_dollar: /(?:\$ ?)?[\d,]+(?:\.\d+)?/g,
    number: /\d{1,3}(?=(\d{3})+(\.\d+)?$)/g,
    phone: /^(\d{3})(\d{3})/,
    text: /[,.?;](?=[A-Za-z])/g,
    trend: /\-?\d+(?:\.\d+)?/,
    prev_zero: /^0+(?=\d)/,
    suffix_zero: /\.0+$/,
    phone_suffix: / .+$/,
    search: /[^\w\d\s,#.*+'"?\-]/g
};

function doFormat(text, blank, regMatch, regValid, formatter) {
    if (isNull(text) || text === '') return blank || '';
    text = text.toString();
    var html = [],
        match,
        idx = 0;
    while (match = regMatch.exec(text)) {
        html.push(text.substring(idx, match.index));
        html.push(formatter(match[0].replace(regValid, ''), blank));
        idx = match.index + match[0].length;
    }
    html.push(text.substr(idx));
    return html.join('');
}

function formatNumberWrap(value, blank) {
    var prefix = '';
    if (arguments.length === 3) {
        prefix = value;
        value = blank;
        blank = arguments[2];
    }
    return value === '0' && blank ? blank : prefix + formatNumber(value);
}

function formatMoney(price, blank, fix, prefix, units, zeroFiexed) {
    if (isNull(price)) return blank || '';
    return '' + prefix + formatNumber(price, units === undefined ? true : false, fix, zeroFiexed);
}

function formatePercent(value, fix) {
    return formatNumber(value * 100, false, fix || 2) + "%";
}

var formats = exports.formats = {
    // 12345 -> 12,345
    number: function number(text, blank) {
        text = new String(text).replace(/[^\d-+.,]/g, '');
        return doFormat(text, blank, gRegexp.match_num, gRegexp.unnum_dot, formatNumberWrap);
    },
    float: function float(text, blank) {
        text = new String(text).replace(/[^\d-+.,]/g, '');
        return doFormat(text, blank, gRegexp.match_num, gRegexp.unnum_dot, formatNumberWrap);
    },
    // 1234 -> $1,234
    dollar: function dollar(text, blank, elem, prefix) {
        text = new String(text).replace(/[^\d-+.,]/g, '');
        return text ? '$' + formats.number(text, blank) : '';
        // });
    },
    // 775000 -> $775k
    dollar_unit: function dollar_unit(text, blank, fix, prefix, units) {
        text = new String(text).replace(/[^\d-+.,]/g, '');
        return doFormat(text, blank, gRegexp.match_dollar, gRegexp.unnum_dot, function (value, blank) {
            return formatMoney(value, blank, fix || 1, prefix === undefined ? '$' : prefix, units, true);
        });
    },
    percent: function percent(text, blank, fix) {
        text = new String(text).replace(/[^\d-+.,]/g, '');
        return blank && !text ? blank : formatePercent(text, fix);
    },
    // 9114455667 -> 911-445-5667
    phone: function phone(text, blank) {
        return blank && !text ? blank : text.replace(gRegexp.phone, '$1-$2-');
    }
};

var unformatNumber = /[^\d-+.]/g;
var unformats = exports.unformats = {
    number: function number(text) {
        return text.replace(unformatNumber, '');
    },
    float: function float(text) {
        return text.replace(unformatNumber, '').replace(/\.+$/g, '');
    },
    dollar: function dollar(text) {
        return text.replace(unformatNumber, '');
    },
    phone: function phone(text) {
        return text.replace(unformatNumber, '');
    }
};

var gInputEvent = {
    num: {
        split: gRegexp.unnum,
        reg_ignore: gRegexp.prev_zero
    },
    number: {
        split: gRegexp.unnum,
        reg_ignore: gRegexp.prev_zero,
        reg_backspace: /\d(\d{3})(?=(,|$))/,
        rep_backspace: '$1',
        reg_format: gRegexp.number,
        rep_format: '$&,'
    },
    float: {
        split: gRegexp.unnum_dot,
        reg_ignore: gRegexp.prev_zero,
        reg_backspace: /\d(\d{3})(?=(,|$))/,
        rep_backspace: '$1',
        reg_format: /\B(?=(\d{3})+\b)/g,
        dot_format: /\B(?=(\d{3})+\.)/g,
        rep_format: '$&,',
        max: '',
        min: ''
    },
    dollar: {
        prefix: '$',
        split: gRegexp.unnum,
        reg_ignore: gRegexp.prev_zero,
        reg_backspace: /\d(\d{3})(?=(,|$))/,
        rep_backspace: '$1',
        reg_format: gRegexp.number,
        rep_format: '$&,'
    },
    phone: {
        length: 10,
        split: gRegexp.unnum,
        reg_ignore: gRegexp.prev_zero,
        reg_backspace: /(\d{2})\d(\d)/,
        rep_backspace: '$1$2',
        reg_format: /(\d{3})(\d{3})?/,
        rep_format: function rep_format(_, $1, $2, idx, str) {
            return $1 + (str.length > 3 ? '-' + ($2 ? $2 + (str.length > 6 ? '-' : '') : '') : '');
        }
    }
};

// 设置input的value属性, 同时更新ovalue
function setInputValue(input, value) {
    input.ovalue = input.value = value;
}

function formatValue(context) {
    var data = context,
        ovalue = this.ovalue === undefined ? this.value : this.ovalue,
        value = this.value,
        caret = getCaret(this),
        split = data.split;
    if (data.reg_backspace && value.length + 1 === ovalue.length) {
        var spv = value.split(split),
            spov = ovalue.split(split);
        if (spv.length === spov.length - 1 && spv.join('') === spov.join('')) {
            value = value.replace(data.reg_backspace, data.rep_backspace);
            caret -= 1;
        }
    }
    caret = caret - value.substr(0, caret).split(split).length + 1;
    value = value.replace(split, '');
    if (data.reg_ignore) {
        value = value.replace(data.reg_ignore, '');
    }
    if (data.max) {
        if (data.max < value) {
            if (value.indexOf('.') > -1) {
                value = ovalue;
            } else {
                if (value.length === caret) {
                    caret++;
                }
                // 自动补充小数点
                value = value.substr(0, value.length - 1) + '.' + value.substr(value.length - 1);
            }
        }
    }
    if (data.min) {
        if (data.min > value) {
            value = ovalue;
        }
    }
    if (data.length) {
        var dotIndex = value.indexOf('.');
        // 截取小数点后面的位数
        if (dotIndex > -1) {
            var regex = new RegExp('\\.*(\\.\\d{0,' + data.length + '})[\\.\\d]*$');
            value = value.replace(regex, '$1');
        } else if (data.name !== 'float') {
            value = value.substr(0, data.length);
        }
    }
    // 是否格式化数字
    if (data.reg_format && data.format) {
        if (data.dot_format && value.indexOf('.') > -1) {
            value = value.replace(data.dot_format, data.rep_format);
        } else {
            value = value.replace(data.reg_format, data.rep_format);
        }
    }
    var idx = 0,
        count;
    while ((count = value.substring(idx, caret).split(split).length - 1) > 0) {
        idx = caret;
        caret += count;
    }
    if (value && data.prefix) {
        value = data.prefix + value;
        caret += data.prefix.length;
    }
    setInputValue(this, value);
    _utils2.default.setCaret(this, caret);
}

/**
 * v-xxx="{ length: 10, changed: func， format: boolea(默认为true) }"
 * length 可以限制输入长度
 * changed 输入发生改变的回调,格式function(value, oldValue, targetInput){}
 */
var formaterConfig = {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function inserted(el, binding, vnode) {
        var context = (0, _extends3.default)({}, gInputEvent[binding.name]);
        if (binding.value) {
            if (binding.value.length) {
                context.length = binding.value.length;
            }
            if (binding.value.max) {
                context.max = binding.value.max;
            }
            if (binding.value.min) {
                context.min = binding.value.min;
            }
        }
        context.name = binding.name;
        context.format = !(binding.value.format === false);
        _utils2.default.bind(el, 'input', function (e) {
            // 格式化之前真实数据
            var ov = this.ovalue === undefined ? this.value : this.ovalue;
            ov = unformats[binding.name] ? unformats[binding.name](ov) : ov;
            var init = this.ovalue === undefined;
            // 格式化数据
            formatValue.call(this, context);

            var v = unformats[binding.name] ? unformats[binding.name](this.value) : this.value;
            if (init || ov !== v) {
                if (binding.value && binding.value.changed) {
                    binding.value.changed.call(vnode.context, v, ov, binding.value);
                }
            }
        });
    },
    update: function update(el, binding) {
        if (formats[binding.name] && !(binding.value.format === false)) {
            setInputValue(el, formats[binding.name](el.value));
        } else {
            setInputValue(el, el.value);
        }
    },
    bind: function bind(el, binding) {
        if (formats[binding.name] && !(binding.value.format === false)) {
            setInputValue(el, formats[binding.name](el.value));
        } else {
            setInputValue(el, el.value);
        }
    }
};

/* ****************** 这些指令会控制输入(例如:添加逗号,添加-,添加$,或者限制输入长度) ******************* */
/**
 * v-dollar="{ length: 10, min: 1, max: 100}"
 * $12,345 千分位分隔符，且最前面带"$"符号
 */
_vue2.default.directive('dollar', formaterConfig);
/**
 * v-phone
 * 123-4567-8910 3-3-4格式显示
 */
_vue2.default.directive('phone', formaterConfig);
/**
 * v-num="{ length: 10 }"
 * 12345
 */
_vue2.default.directive('num', formaterConfig);
/**
 * v-number="{ length: 10 }"
 * 12,345
 */
_vue2.default.directive('number', formaterConfig);

/**
 * v-float
 */
_vue2.default.directive('float', formaterConfig);
/* ******************************************************************************************** */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
exports.default = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_aea20a84_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(187);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_aea20a84_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PopWin/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aea20a84", Component.options)
  } else {
    hotAPI.reload("data-v-aea20a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 1.列的宽度
// 2.列单元格的padding(默认'')
var getTableCellStyle = exports.getTableCellStyle = function getTableCellStyle(columnConfig) {
    var style;
    // 处理列的宽度
    if (columnConfig.width) {
        //固定列宽度
        style = {
            width: columnConfig.width + 'px',
            'flex-shrink': 0
        };
    } else {
        //自适应列宽度
        style = {
            flex: columnConfig.widthRatio,
            'min-width': columnConfig.minWidth + 'px'
        };
    }
    return style;
};

var getHeadCellStyle = exports.getHeadCellStyle = function getHeadCellStyle(columnConfig) {
    var style = {};
    if (columnConfig.headCellPadding || columnConfig.headCellPadding === 0) {
        style['padding'] = columnConfig.headCellPadding;
    }
    if (columnConfig.headTextAlign) {
        style['text-align'] = columnConfig.headTextAlign;
    } else if (columnConfig.textAlign) {
        style['text-align'] = columnConfig.textAlign;
    }
    return style;
};

var getCellStyle = exports.getCellStyle = function getCellStyle(columnConfig) {
    var style = {};
    if (columnConfig.cellPadding || columnConfig.cellPadding === 0) {
        style['padding'] = columnConfig.cellPadding;
    }
    if (columnConfig.contentTextAlign) {
        style['text-align'] = columnConfig.contentTextAlign;
    } else if (columnConfig.textAlign) {
        style['text-align'] = columnConfig.textAlign;
    }
    return style;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(33)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(113)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(36);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(117)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(55);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(118);
var setToStringTag = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(120);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(119);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(33)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(57).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(20);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(50);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(28);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(49);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(25);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(24);
var invoke = __webpack_require__(140);
var html = __webpack_require__(57);
var cel = __webpack_require__(33);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(17)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(44);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    var type = options.type || "toast",
        //info success toast(错误)
    uploadType = options.uploadType || '',
        //uploadSuccess、uploading、uploadFail
    content = options.content,
        //提示语html
    time = options.time || 3000,
        //显示的时长
    $parent = options.parent || $("body"),
        num = $(".tip-panel-item").length,
        //从页面获取当前提示条的数量
    icon = '',
        tpl;
    switch (uploadType) {
        case 'loading':
            icon = '<span class="icon-loading"></span>';
            break;
        case 'uploadSuccess':
            icon = '<span class="icon icon-check"></span>';
            break;
        case 'uploadFail':
            icon = '<span class="icon icon-cross"></span>';
            break;
        default:
            // statements_def
            break;
    }
    clearTimeout(sId);
    $("#tip-panel-toast").remove();
    tpl = '<div id="tip-panel-toast" class="' + uploadType + '">' + icon + content + '</div>';
    $parent.append(tpl);
    if (uploadType != 'loading') {
        sId = setTimeout(function () {
            $("#tip-panel-toast").remove();
        }, time);
    }
    // if (type == "toast") {
    //     clearTimeout(sId);
    //     $("#tip-panel-toast").remove();
    //     tpl = '<div id="tip-panel-toast">' + content + '</div>';
    //     $parent.append(tpl);
    //     sId = setTimeout(function() {
    //         $("#tip-panel-toast").remove();
    //     }, time);
    // }else{
    //     if (num === 0) {
    //         tpl = '<div id="tip-panel-wrap">' +
    //             '<div id="tip-panel-' + num + '" class="tip-panel-item ' + type + '">' + content + '</div>' +
    //             '</div>';
    //         $("body").append(tpl);
    //     } else {
    //         if (type == "warning") {
    //             $(".tip-panel-item").remove();
    //         }
    //         tpl = '<div id="tip-panel-' + num + '" class="tip-panel-item ' + type + '">' + content + '</div>';
    //         $("#tip-panel-wrap").append(tpl);
    //     }

    // }
    // setTimeout(function() {
    //     $("#tip-panel-" + num).remove();
    //     if ($(".tip-panel-item").length == 0) {
    //         $("#tip-panel-wrap").remove();
    //     }
    // }, time);
};

__webpack_require__(149);

var sId = "";

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4641b144_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(170);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4641b144_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Tip/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4641b144", Component.options)
  } else {
    hotAPI.reload("data-v-4641b144", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

var _vuePerfectScrollbar = __webpack_require__(32);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throttle(method, context) {
    clearTimeout(throttle.tId);
    throttle.tId = setTimeout(function () {
        method.call(context);
    }, 300);
}
/**
 *  仅在v-tip中使用
 */
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            isShow: false,
            placement: '',
            html: '',
            maxWidth: '',
            maxHeight: ''
        };
    },
    methods: {
        /**
        * 设置html内容
        */
        setHtml: function setHtml(html) {
            this.html = html;
        },
        setPlacement: function setPlacement(placement) {
            this.placement = placement;
        },
        setMaxWidth: function setMaxWidth(maxWidth) {
            this.maxWidth = maxWidth;
        },
        setMaxHeight: function setMaxHeight(maxHeight) {
            this.maxHeight = maxHeight;
        },

        /**
        * 显示tip
        * @param targetEle targetEle
        * @param boundaryEleQuery 外围边界元素(会根据这个元素的边界范围自动设置tip的位置)
        */
        show: function show(targetEle, boundaryEleQuery) {
            clearTimeout(throttle.tId);
            this.isShow = true;
            this.$nextTick(function () {
                this.$el.style.top = '-999999px';
                this.$el.style.left = '';
                this.$el.style;

                var _$$offset = $(targetEle).offset(),
                    top = _$$offset.top,
                    left = _$$offset.left;

                var width = targetEle.offsetWidth;
                var height = targetEle.offsetHeight;
                var tipWidth = this.$el.offsetWidth;
                var tipHeight = this.$el.offsetHeight;
                var placement = {};
                // 判断方位 top -> rigth -> bottom -> left
                if (top > tipHeight - 10 && left > tipWidth / 2) {
                    // top方位展示
                    placement['top'] = {
                        top: top - tipHeight - 10 + 'px',
                        left: left + width / 2 - tipWidth / 2 + 'px'
                    };
                }
                if (window.innerWidth - left - width > tipWidth && top + height / 2 - 10 > tipHeight / 2) {
                    // right方位展示
                    placement['right'] = {
                        top: top + height / 2 - tipHeight / 2 + 'px',
                        left: left + width + 10 + 'px'
                    };
                }
                if (window.innerHeight > top + height + tipHeight + 10 && window.innerWidth > tipWidth && left + width / 2 > tipWidth / 2) {
                    // bottom方位展示
                    placement['bottom'] = {
                        top: top + height + 10 + 'px',
                        left: left + width / 2 - tipWidth / 2 + 'px'
                    };
                }
                // left方位展示 如果其他方位都不适合，那么设置left方位
                placement['left'] = {
                    top: top + height / 2 - tipHeight / 2 + 'px',
                    left: left - 10 - tipWidth + 'px'
                };
                if ((0, _keys2.default)(placement).indexOf(this.placement) === -1) {
                    this.placement = (0, _keys2.default)(placement)[0];
                };
                $(this.$el).removeClass('tip-top tip-right tip-bottom tip-left').addClass('tip-' + this.placement).css(placement[this.placement]);
            });
        },
        hide: function hide() {
            throttle(function () {
                this.isShow = false;
            }, this);
        },
        tipEnter: function tipEnter() {
            clearTimeout(throttle.tId);
        }
    },
    components: {
        VuePerfectScrollbar: _vuePerfectScrollbar2.default
    }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(1);
var fails = __webpack_require__(14);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
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
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(47);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'PopWinAlert',
    data: function data() {
        return {
            isShow: undefined,
            desc: '',
            okText: 'Ok'
        };
    },
    methods: {
        ok: function ok() {
            this.isShow = false;
            this.$emit('ok');
        },
        close: function close() {
            this.isShow = false;
            this.$emit('close');
        }
    },
    components: {
        PopWin: _index2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePerfectScrollbar = __webpack_require__(32);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

var _emmiter = __webpack_require__(46);

var _emmiter2 = _interopRequireDefault(_emmiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var popWin = {
    name: 'PopWin',
    mixins: [_emmiter2.default],
    components: {
        VuePerfectScrollbar: _vuePerfectScrollbar2.default
    },
    props: {
        /**
        * 弹框的标题,默认空
        */
        title: {
            type: String,
            default: ''
        },
        isShow: {
            type: Boolean,
            default: false
        },
        /**
         * 标题样式
         */
        titleClass: {
            type: String,
            default: ''
        },
        /**
        * 弹框样式
        */
        containerClass: {
            type: String,
            default: ''
        },
        /**
         * 是否需要使用scroller VuePerfectScrollbar
         */
        isUserScroller: {
            type: Boolean,
            default: true
        },
        /**
         * 是否有淡出动画
         */
        fadeOut: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            isShowPopWin: false
        };
    },
    mounted: function mounted() {
        this.isShowPopWin = !!this.isShow;
        this.dealPopMask(this.isShowPopWin);
    },

    methods: {
        close: function close() {
            this.$emit('close');
        },
        bodyScroll: function bodyScroll() {
            this.broadcast("DropDown", "on-scroll");
        },
        /*
         * 更新滚动条, 通常在弹窗内容高度发生变化需要更新滚动条时调用
         * @param delayMs 延期多少毫秒执行
         */
        updateScrollerBar: function updateScrollerBar(delayMs) {
            var _this = this;

            if (this.isUserScroller) {
                if (delayMs) {
                    if (this.timerS) {
                        window.clearTimeout(this.timerS);
                    }
                    this.timerS = window.setTimeout(function () {
                        _this.$refs.scroller.update();
                    }, delayMs);
                } else {
                    this.$refs.scroller.update();
                }
            }
        },
        // 处理背景颜色，始终保持一个黑色背景
        dealPopMask: function dealPopMask(flag) {
            var _this2 = this;

            this.$nextTick(function () {
                var popMask = document.querySelectorAll('.com-popwin');
                var hasMask = false;
                popMask.forEach(function (mask) {
                    if (!hasMask && mask.style.display !== 'none' && !flag) {
                        mask.style.background = 'rgba(32, 36, 55, .5)';
                        hasMask = true;
                    } else {
                        mask.style.background = '';
                    }
                });
                if (flag) {
                    _this2.$el && (_this2.$el.style.background = 'rgba(32, 36, 55, .5)');
                }
            });
        }
    },
    watch: {
        isShow: function isShow() {
            if (this.isShow) {
                this.isShowPopWin = true;
            } else {
                window.setTimeout(function () {
                    this.isShowPopWin = false;
                    this.dealPopMask();
                }.bind(this), 300);
            }
            this.dealPopMask(this.isShow);
        }
    },
    beforeDestroy: function beforeDestroy() {
        var child = this.$refs.popwin;
        if (child.parentNode) {
            child.parentNode.removeChild(child);
        }
    },
    destroyed: function destroyed() {
        this.dealPopMask();
    }
};
exports.default = popWin;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(47);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'PopWinConfirm',
    data: function data() {
        return {
            isShow: undefined,
            desc: '',
            cls: '',
            okText: 'Yes',
            cancelText: 'No'
        };
    },
    methods: {
        ok: function ok() {
            this.isShow = false;
            this.$emit('ok');
        },
        close: function close() {
            this.isShow = false;
            this.$emit('close');
        }
    },
    components: {
        PopWin: _index2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_47feff09_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(192);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_47feff09_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/VideoPop/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47feff09", Component.options)
  } else {
    hotAPI.reload("data-v-47feff09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _VideoPlayer = __webpack_require__(78);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'video-pop',
    components: {
        VideoPlayer: _VideoPlayer2.default
    },
    props: {
        // 播放源
        videoSrc: '',
        // 播放标题
        title: '',
        // 预览图片
        posterSrc: {
            type: String
        },
        // 是否自动播放
        autoplay: {
            type: Boolean,
            default: false
        },
        // 视频高度
        height: {
            type: String,
            default: '100%'
        }
    },
    data: function data() {
        return {
            isShow: true
        };
    },

    methods: {
        close: function close() {
            this.isShow = false;
        }
    },
    destroyed: function destroyed() {
        this.destroy && this.destroy();
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4a030682_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(191);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4a030682_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/VideoPlayer/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a030682", Component.options)
  } else {
    hotAPI.reload("data-v-4a030682", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssHasLoaded = false; //
//
//
//

var cssUrl = '//static.chimeroi.com/crm/video-lib/video-js.min.css';
var jsUrl = '//static.chimeroi.com/crm/video-lib/video.min.js';

exports.default = {
    name: 'com-video-player',
    props: {
        // 播放资源路径
        videoSrc: {
            type: String,
            default: ''
        },
        // 是否自动播放
        autoplay: {
            type: Boolean,
            default: false
        },
        // 预览图片
        posterSrc: {
            type: String
        },
        height: {
            type: String,
            default: '100%'
        },
        width: {
            type: String,
            default: '100%'
        },
        // 缩放比例
        scale: {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            player: null,
            style: {
                height: this.height,
                width: this.width
            },
            loading: true
        };
    },

    watch: {
        videoSrc: function videoSrc(n, o) {
            this.init();
        },
        height: function height(n, o) {
            this.style.height = this.height;
        },
        width: function width(n, o) {
            this.style.width = this.width;
        },
        posterSrc: function posterSrc(n, o) {
            this.player && this.player.poster(this.posterSrc);
        }
    },
    computed: {
        type: function type() {
            var _type = "application/x-mpegURL";
            if (this.rtmp) {
                _type = "rtmp/mp4";
            } else if (/.mp4(\?|$)/.test(this.src)) {
                _type = 'video/mp4';
            }
            return _type;
        },
        src: function src() {
            if (!this.videoSrc) {
                return "";
            }
            if (this.videoSrc.indexOf("/") === 0) {
                return location.protocol + "//" + location.host + this.videoSrc;
            }
            return this.videoSrc;
        },
        rtmp: function rtmp() {
            return (this.src || "").indexOf("rtmp") == 0;
        },
        videoTemplate: function videoTemplate() {
            return '<video class="video-js vjs-default-skin vjs-big-play-centered" style="width: 100%;height: 100%" controls preload="true">\n                        <source src="' + this.src + '" type="' + this.type + '"></source>\n                        <p class="vjs-no-js">\n                            To view this video please enable JavaScript, and consider upgrading to a web browser that\n                            <a href="http://videojs.com/html5-video-support/" target="_blank">\n                                supports HTML5 video\n                            </a>\n                        </p>\n                    </video>';
        }
    },
    mounted: function mounted() {
        var _this = this;

        console.log('mounted');
        // 加载css
        !cssHasLoaded && _utils2.default.loadCss(cssUrl, function () {
            cssHasLoaded = true;
        });
        if (window.videojs) {
            this.init();
        } else {
            // 加载js
            _utils2.default.loadScript(jsUrl).then(function () {
                _this.init();
            });
        }
    },

    methods: {
        // 初始化
        init: function init() {
            var _this2 = this;

            if (!window.videojs) return;
            var _self = this;
            this.loading = false;
            this.$el.innerHTML = this.videoTemplate;
            if (!this.src) {
                return;
            }
            if (this.rtmp) {
                this.player = videojs(this.$el.getElementsByTagName('video')[0], {
                    notSupportedMessage: 'Your browser is not support Flash',
                    tech: ['flash'],
                    autoplay: this.autoplay
                });
                this.player.on("error", function (e) {
                    var $e = _this2.$el.querySelector(".vjs-modal-dialog-content");
                    $e.innerHTML = '<a href="http://www.adobe.com/go/getflashplayer" target="_blank">' + $e.innerText + '</a>';
                });
            } else {
                this.player = videojs(this.$el.querySelector("video"), {
                    autoplay: this.autoplay
                });
            }
            if (this.posterSrc) {
                this.player.poster(this.posterSrc);
            }
            // 播放功能回调
            this.player.on('ready', function (event) {
                // console.log(this.currentTime(), this.duration());
            });
            this.player.on('timeupdate', function (event) {
                // console.log(this.currentTime(), this.duration());
                _self.$emit('timeupdate', {
                    currentTime: this.currentTime(),
                    duration: this.duration()
                });
            });
            this.player.on('loadeddata', function (e) {//加载完成事件，调用函数
                // console.log('loadeddata');
                // let video = _self.$el.getElementsByTagName('video')[0];
                // _self.style = {
                //     height: video.videoHeight * this.scale + 'px',
                //     width: video.videoWidth * this.scale + 'px'
                // }
            });
            this.player.on('pause', function (e) {
                _self.$emit('pause', _self.player.ended());
            });
            this.player.on('play', function (e) {
                _self.$emit('play', _self.player.currentTime());
            });
        }
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuidv4 = __webpack_require__(193);
var reg_base64 = /^data:image\/([^;]+);base64,/;

function convertBase64UrlToBlob(urlData, type) {
    var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  

    //处理异常,将ascii码小于0的转换为大于0  
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/' + type });
}

function isFunction(fn) {
    return typeof fn === 'function';
}

var xhrOnProgress = function xhrOnProgress(fun) {
    xhrOnProgress.onprogress = fun; //绑定监听
    return function () {
        var xhr = $.ajaxSettings.xhr();
        if (typeof xhrOnProgress.onprogress !== 'function') if (isFunction(xhrOnProgress.onprogress)) {
            return xhr;
        }
        if (xhrOnProgress.onprogress && xhr.upload) {
            xhr.upload.onprogress = xhrOnProgress.onprogress;
        }
        return xhr;
    };
};

/*
* upload图片
* @param {String} data 图片的base64格式
* @param {Function} success 成功回调
* @param {Function} fail 失败回调
* @param {Function} progress 进度回调
* @param {Object} headers 额外请求头
* @param {Number} key 第几个 序号
*/
var uploadImage = function uploadImage() {
    return function (_ref) {
        var data = _ref.data,
            _success = _ref.success,
            fail = _ref.fail,
            progress = _ref.progress,
            headers = _ref.headers,
            key = _ref.key;

        var type = data.match(reg_base64);
        if (!type) return false;

        type = type[1];
        var business = 'user-info',
            date = new Date(),
            path = '/image/fs/' + business + '/' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + '/' + date.getHours() + '/original_' + uuidv4() + '.' + type;
        $.getJSON('/api/user/v1/aws/token/presignurl', {
            path: path
        }, function (rt) {
            var times = 0;
            function sendAjax() {
                times++;
                $.ajax({
                    url: rt.data.url,
                    type: 'put',
                    data: convertBase64UrlToBlob(data, type),
                    processData: false,
                    contentType: false,
                    xhr: xhrOnProgress(function (evt) {
                        if (isFunction(progress)) {
                            if (evt.lengthComputable) {
                                progress(evt.loaded / evt.total * 100, key);
                            }
                        }
                    }),
                    beforeSend: function beforeSend(xhr) {
                        // Set custom request headers if customHeaders parameter is provided
                        if (headers && (typeof headers === 'undefined' ? 'undefined' : (0, _typeof3.default)(headers)) === "object") {
                            for (var headerKey in headers) {
                                xhr.setRequestHeader(headerKey, headers[headerKey]);
                            }
                        }
                        xhr.setRequestHeader("Content-Type", rt.data.contentType || 'image/' + type);
                    },
                    success: function success() {
                        isFunction(_success) && _success('https://cdn.chime.me' + path, key);
                    },
                    error: function error(err) {
                        if (times <= 3) {
                            sendAjax();
                        } else {
                            isFunction(fail) && fail(err.responseText || 'Upload fail.', key);
                        }
                    }
                });
            }
            sendAjax();
        }).error(function (err) {
            var errorInfo = void 0;
            try {
                errorInfo = JSON.parse(err.responseText).message;
            } catch (error) {}
            errorInfo = errorInfo || 'Upload fail.';
            isFunction(fail) && fail(errorInfo, key);
        });
    };
};

/*
* upload文件
* @param {Object} data 格式：{ content, file } content表示文件原始二进制格式（利用readAsBinaryString）, file 文件对象
* @param {Function} success 成功回调
* @param {Function} fail 失败回调
* @param {Function} progress 进度回调
* @param {Object} headers 额外请求头
* @param {Number} key 第几个 序号
*/
// 文件上传
var uploadFile = function uploadFile() {
    return function (_ref2) {
        var data = _ref2.data,
            _success2 = _ref2.success,
            fail = _ref2.fail,
            progress = _ref2.progress,
            headers = _ref2.headers,
            key = _ref2.key;

        var compressed_img_obj = data.content,
            file = data.file;
        var type = file.name.split('.'),
            date = new Date();
        type = type.length ? '.' + type[type.length - 1] : '';

        var path = '/doc/fs/upload/' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + '/' + date.getHours() + '/original_' + uuidv4() + type;

        $.getJSON('/api/user/v1/aws/token/presignurl', {
            path: path
        }, function (rt) {

            //处理异常,将ascii码小于0的转换为大于0  
            var ab = new ArrayBuffer(compressed_img_obj.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < compressed_img_obj.length; i++) {
                ia[i] = compressed_img_obj.charCodeAt(i);
            }

            var blob = new Blob([ab]),
                times = 0;

            function sendFileAjax() {
                times++;
                $.ajax({
                    url: rt.data.url,
                    type: 'put',
                    data: blob,
                    processData: false,
                    contentType: false,
                    xhr: xhrOnProgress(function (evt) {
                        if (isFunction(progress)) {
                            if (evt.lengthComputable) {
                                progress(evt.loaded / evt.total * 100, key);
                            }
                        }
                    }),
                    beforeSend: function beforeSend(xhr) {
                        // Set custom request headers if customHeaders parameter is provided
                        if (headers && (typeof headers === 'undefined' ? 'undefined' : (0, _typeof3.default)(headers)) === "object") {
                            for (var headerKey in headers) {
                                xhr.setRequestHeader(headerKey, headers[headerKey]);
                            }
                        }
                        xhr.setRequestHeader("Content-Type", rt.data.contentType || file.type);
                    },
                    success: function success() {
                        isFunction(_success2) && _success2({
                            url: 'https://cdn.chime.me' + path,
                            docName: file.name
                        }, key);
                    },
                    error: function error(err) {
                        if (times <= 3) {
                            sendFileAjax();
                        } else {
                            isFunction(fail) && fail(err.responseText || 'Upload fail.', key);
                        }
                    }
                });
            }
            sendFileAjax();
        }).error(function (err) {
            var errorInfo = void 0;
            try {
                errorInfo = JSON.parse(err.responseText).message;
            } catch (error) {}
            errorInfo = errorInfo || 'Upload fail.';
            isFunction(fail) && fail(errorInfo, key);
        });
    };
};

exports.default = {
    uploadImage: uploadImage(),
    uploadFile: uploadFile()
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//


exports.default = {
    props: {
        /** 
        * label文案,默认空,
        */
        label: {
            type: String,
            default: ''
        },
        /** 
        * 是否勾选(注意这个值不会参与双向绑定, 如果想拿到勾选值,请注册@datachange事件),默认空
        */
        checked: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            tppe: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            realChecked: false
        };
    },

    watch: {
        checked: function checked(n, o) {
            this.realChecked = n;
        }
    },
    methods: {
        check: function check(event) {
            if (this.isDisabled) {
                event.stopPropagation();
                event.preventDefault();
                this.$emit('disableClick');
                return false;
            } else {
                this.realChecked = !this.realChecked;
                this.$emit('change', this.realChecked);
            }
        }
    },
    mounted: function mounted() {
        this.realChecked = this.checked;
    }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tableStore = __webpack_require__(200);

var _tableStore2 = _interopRequireDefault(_tableStore);

__webpack_require__(83);

var _tableHead = __webpack_require__(201);

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableBody = __webpack_require__(202);

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableFooter = __webpack_require__(203);

var _tableFooter2 = _interopRequireDefault(_tableFooter);

var _emmiter = __webpack_require__(46);

var _emmiter2 = _interopRequireDefault(_emmiter);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* 生成表格数据源
*/
var genDataSource = function genDataSource(table) {
    if (table.selectMode !== 'none') {
        return table.data.map(function (item) {
            var targetItem = table.selectItems.find(function (sItem) {
                return sItem[table.primaryKey] === item[table.primaryKey];
            });
            return {
                checked: !!targetItem,
                extend: false,
                data: item
            };
        });
    } else {
        return table.data.map(function (item) {
            return {
                checked: false,
                extend: false,
                data: item
            };
        });
    }
};

/**
* 获取列宽度
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var getColWidth = function getColWidth(col) {
    if (col.hidden) {
        return 0;
    } else if (col.width) {
        return col.width;
    } else {
        return col.minWidth;
    }
};

// 表格的高度由外部控制, 在有具体高度的,且内容超过这个高度时, table-body会有滚动条
exports.default = {
    name: 'Table',
    mixins: [_emmiter2.default],
    props: {
        /**
         * 表格的数据源(默认空数组)
         */
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        /**
         * 表格的数据列配置(默认空), 如果为空数据列完全由<DataTableColumn>控制配置, 否则按照columns属性和<DataTableColumn>配置合并后(以columns属性为主)的值控制
         * 示例: columns: [{
                name:'xxxx', //通过这个name可以对应到<DataTableColumn name="xxxx">的配置
                width: 150, //这个width会覆盖<DataTableColumn :width="200">的配置, 如果不填就应用<DataTableColumn :width="200">
                label:'',   //同上
                hidden: true    //同上
            }]
            columns在不为空时, 数组的顺序决定了表格列的顺序, 调整这个属性, UI也会变
         */
        columns: {
            type: Array,
            default: function _default() {
                return undefined;
            }
        },
        /**
         * 表格的class,由外部传入
         */
        className: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        /**
         * 表格的排序规则(默认空), 这个规则仅仅影响表头的上线箭头展示效果,不会影响数据的排序(数据排序依赖给data设置升序/降序数据)
         * 格式: {key: 'id', order: 'asc'}
         */
        sort: {
            type: Object,
            default: function _default() {
                return undefined;
            }
        },
        /**
        * 表格的数据记录对象的主键(请保证唯一, 在处理selectItems时会用上),默认为id
        */
        primaryKey: {
            type: String,
            default: function _default() {
                return 'id';
            }
        },
        /**
        * 选择模式none/single/multi 中的一种, 一般不允许改, 默认none
        */
        selectMode: {
            type: String,
            default: function _default() {
                return 'none';
            }
        },
        /**
        * 仅在selectMode为multi时生效, 一般不允许改, 是否展示全选
        */
        showAll: {
            type: Boolean,
            default: function _default() {
                return true;
            }
        },
        /**
        * 仅在selectMode为multi时生效, 选择项
        */
        selectItems: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        /**
        * 当没有数据时的默认文案
        */
        emptyText: {
            type: String,
            default: function _default() {
                return 'No Result';
            }
        },
        /**
         * Table自带Infinity Loading 相关配置
         *  state: complete, loading, no-more,
         */
        infinityLoadStatus: {
            type: String
        },
        /**
         * 表格左侧的固定列个数(默认为0)
         */
        leftFreeze: {
            type: Number,
            default: function _default() {
                return 0;
            }
        },
        /**
         * 表格的subRow字段, 默认'', 表示没有子行
         */
        subRowField: {
            type: String,
            default: ''
        },
        /**
         * 表格的subRow行样式表, 默认''
         */
        subRowClass: {
            type: String,
            default: ''
        },
        /**
         * 是否显示合计，自动合计的列需要添加isNumber的属性
         */
        showSummary: {
            type: Boolean,
            default: false
        },
        /**
         * 合计文本
         */
        summaryText: {
            type: String,
            default: 'Summary'
        },
        /**
         * 合计回调
         */
        summaryFormat: {
            type: Function
        }
    },
    data: function data() {
        return {
            // 对应UI列的配置信息
            realColumns: [],
            dataSource: genDataSource(this),
            store: new _tableStore2.default(this, {
                sort: this.sort
            }),
            // 鼠标指向的行索引(默认-1表示没有)
            enterRowIndex: -1,
            // 表格列总的最小宽度
            tableWidth: 0,
            // 纵向滚动条宽度
            barWidth: 0,
            // 横向滚动条宽度
            barHeight: 0,
            // 固定的真实宽度
            freezeRealWidth: 0,
            // 是否有横向滚动条
            hasHscrollBar: false
        };
    },
    computed: {
        // 是否展示全选
        selectAll: function selectAll() {
            return this.selectMode === 'multi' && this.showAll;
        },

        // 是否有固定列
        hasLeftFreeze: function hasLeftFreeze() {
            return this.leftFreeze > 0 && this.leftFreeze < this.realColumns.length && this.hasHscrollBar;
        },

        // 总固定宽度为
        leftFreezeWidth: function leftFreezeWidth() {
            var sumLeftFreezeWidth = this.freezeRealWidth ? this.freezeRealWidth : this.realColumns.slice(0, this.leftFreeze).reduce(function (sum, item) {
                return sum + getColWidth(item);
            }, 0);
            // 总固定宽度为: 固定列宽度 + 2像素的阴影
            return sumLeftFreezeWidth + (this.selectAll ? 50 : 0) + 2;
        },

        // 固定容器的高度
        freezeHeight: function freezeHeight() {
            return this.barHeight ? 'calc(100% - ' + this.barHeight + 'px)' : '100%';
        },

        // 固定容器的宽度与容器等宽
        freezeBodyMinWidth: function freezeBodyMinWidth() {
            return this.tableWidth ? this.tableWidth : this.bodyMinWidth;
        },

        // 容器最小宽度
        bodyMinWidth: function bodyMinWidth() {
            return this.realColumns.reduce(function (sum, item) {
                return sum + getColWidth(item);
            }, 0);
        },

        // 无滚动条样式 用于 header 和 footer
        style: function style() {
            return {
                'width': '100%',
                'min-width': this.bodyMinWidth + 'px',
                'padding-right': this.barWidth + 'px'
            };
        },

        // 无滚动条固定样式 用于 header 和 footer
        freezeStyle: function freezeStyle() {
            return {
                'width': this.leftFreezeWidth + 'px'
            };
        }
    },
    created: function created() {
        if (this.infinityLoadStatus === 'loading') {
            this.$emit('infinityLoad');
        }
    },
    destroyed: function destroyed() {
        _utils2.default.unbind(this.$refs.bodyWrap, 'scroll', this.bindBodyScroll);
        _utils2.default.unbind(window, 'resize', this.bindInitTable);
    },
    mounted: function mounted() {
        var _this = this;

        this.bindBodyScroll = this.bodyScroll.bind(this);
        _utils2.default.bind(this.$refs.bodyWrap, 'scroll', this.bindBodyScroll);
        this.bindInitTable = function () {
            setTimeout(_this.initTable.bind(_this), 100);
        };
        _utils2.default.bind(window, 'resize', this.bindInitTable);

        // header和Body同步table的宽度
        this.initTable();
    },

    methods: {
        initTable: function initTable() {
            var bodyWrap = this.$refs.bodyWrap;
            var body = this.$refs.body.$el;
            // 判断是否有横向滚动条
            this.hasHscrollBar = bodyWrap.scrollWidth > bodyWrap.clientWidth;
            this.barWidth = Math.max(bodyWrap.offsetWidth - bodyWrap.clientWidth, 0);
            this.barHeight = Math.max(bodyWrap.offsetHeight - bodyWrap.clientHeight, 0);
            this.tableWidth = this.hasHscrollBar ? body.scrollWidth : body.clientWidth;
            var row = void 0;
            var freeze = 0;
            if (row = body.querySelector('.com-datatable-row')) {
                row.querySelectorAll('.freeze-cell').forEach(function (cell) {
                    freeze += cell.offsetWidth;
                });
            }
            this.freezeRealWidth = freeze;
        },
        bodyScroll: function bodyScroll() {
            var bodyWrap = this.$refs.bodyWrap,
                header = this.$refs.header.$el,
                infinityLoad = this.$refs.loading;

            // 这里不设置scrollLeft是因为不想让com-datatable-header-wrap出现滚动条,也不能overflow:hidden;(因为里面有排序下拉菜单)
            var transform = 'translateX(-' + bodyWrap.scrollLeft + 'px)';
            header.style['transform'] = transform;
            header.style['-webkit-transform'] = transform;
            header.style['-moz-transform'] = transform;
            header.style['-ms-transform'] = transform;
            if (this.$refs.footer) {
                var footer = this.$refs.footer.$el;
                footer.style['transform'] = transform;
                footer.style['-webkit-transform'] = transform;
                footer.style['-moz-transform'] = transform;
                footer.style['-ms-transform'] = transform;
            }

            // 滑动到底部回调事件
            if (infinityLoad && bodyWrap.scrollHeight - bodyWrap.scrollTop < bodyWrap.offsetHeight + infinityLoad.clientHeight && this.infinityLoadStatus === 'complete') {
                this.$emit('infinityLoad');
            }
            // 如果有固定列, 还需要更新固定列的滚动条
            if (this.hasLeftFreeze) {
                this.$refs.freezeWrap.scrollTop = bodyWrap.scrollTop;
            }
            // 保存当前滚动的位置（为了保持当前的位置，请下拉请求时不要随便重新赋值，用push方法）
            this.data.scrollTop = bodyWrap.scrollTop;

            this.broadcast("DropDown", "on-scroll");
            this.$emit('scroll', {
                x: bodyWrap.scrollLeft,
                y: bodyWrap.scrollTop
            });
        },
        freezeBodyScroll: function freezeBodyScroll(event, data) {
            var wrapper = this.$refs.bodyWrap;
            if (Math.abs(data.spinY) > 0) {
                var currentScrollTop = wrapper.scrollTop;
                if (data.pixelY < 0 && currentScrollTop !== 0) {
                    event.preventDefault();
                }
                if (data.pixelY > 0 && wrapper.scrollHeight - wrapper.clientHeight > currentScrollTop) {
                    event.preventDefault();
                }
                wrapper.scrollTop += Math.ceil(data.pixelY);
            } else {
                event.preventDefault();
                wrapper.scrollLeft += Math.ceil(data.pixelX);
            }
        },
        enterRow: function enterRow(index) {
            this.enterRowIndex = index;
        },
        extendRow: function extendRow(rowIndex, isExtend) {
            this.dataSource[rowIndex].extend = isExtend;
        }
    },
    components: {
        TableHead: _tableHead2.default,
        TableBody: _tableBody2.default,
        TableFooter: _tableFooter2.default
    },
    watch: {
        sort: function sort(v) {
            this.store.setSort(v);
        },
        selectItems: function selectItems(v) {
            this.dataSource = genDataSource(this);
        },
        data: function data(n, o) {
            this.dataSource = genDataSource(this);
            // 表格更新好了之后滚动条滚动到最顶部，或恢复原始位置
            this.$nextTick(function () {
                this.$refs.bodyWrap.scrollTop = n.scrollTop || 0;
                this.bodyScroll();
                this.initTable();
            });
        },
        columns: {
            deep: true,
            handler: function handler(v) {
                this.store.genColumnItems();
                this.initTable();
            }
        },
        enterRowIndex: function enterRowIndex(n, o) {
            if (o >= 0) {
                this.$refs.bodyWrap.querySelectorAll('.com-datatable-row.active').forEach(function (row) {
                    row.classList.remove('active');
                });
                this.$refs.freezeWrap && this.$refs.freezeWrap.querySelectorAll('.com-datatable-row.active').forEach(function (row) {
                    row.classList.remove('active');
                });
            }
            if (n >= 0) {
                this.$refs.bodyWrap.querySelectorAll('.com-datatable-row')[n].classList.add('active');
                this.$refs.freezeWrap && this.$refs.freezeWrap.querySelectorAll('.com-datatable-row')[n].classList.add('active');
            }
        },
        hasHscrollBar: function hasHscrollBar(n, o) {
            var _this2 = this;

            n && setTimeout(function () {
                _this2.bodyScroll();
            }, 100);
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultColumnProps = exports.renderFactory = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderFactory = exports.renderFactory = {
    normal: function normal(component) {
        return {
            head: function head(h, colCfg) {
                if (component && component.$slots.head) {
                    return component.$slots.head;
                } else {
                    return colCfg.label;
                }
            },
            cell: function cell(h, colCfg, row, colIndex, rowIndex) {
                if (component && component.$scopedSlots.default) {
                    return component.$scopedSlots.default(row, colIndex, rowIndex);
                } else {
                    return row.data[colCfg.field];
                }
            },
            subRowCell: function subRowCell(h, colCfg, rowData, colIndex, rowIndex) {
                if (component && component.$scopedSlots.subRow) {
                    return component.$scopedSlots.subRow(rowData, colIndex, rowIndex);
                } else {
                    return rowData[colCfg.field];
                }
            }
        };
    }
};

function registerColumnCfg() {
    var column = (0, _extends3.default)({}, this._props);
    column.__component = this;
    this.parent.store.registerColumnCfg(column);
    column.render = renderFactory[column.type](this);
    this.parent.store.genColumnItems();
}

var defaultColumnProps = exports.defaultColumnProps = {
    type: 'normal',
    field: '',
    label: '',
    width: '',
    widthRatio: 1,
    minWidth: 150,
    cellClass: '',
    sort: '',
    sortGroup: [],
    sortOrders: ['asc', 'desc', ''],
    hidden: false,
    headTextAlign: '', //默认:居左
    textAlign: '', //默认:居左
    headCellPadding: '', //默认:12px 15px
    cellPadding: '', //默认:12px 15px
    isNumber: false

    /**
     * 只作为DataTable的子组件存在(不要用在其他地方), 目的是记录表格列的配置信息, 并通过table-store传递给DataTable, 本身不输出任何可见元素
     */
};_vue2.default.component('DataTableColumn', {
    template: '<div></div>',
    created: registerColumnCfg,
    watch: {
        name: registerColumnCfg,
        type: registerColumnCfg,
        field: registerColumnCfg,
        label: registerColumnCfg,
        width: registerColumnCfg,
        widthRatio: registerColumnCfg,
        minWidth: registerColumnCfg,
        cellClass: registerColumnCfg,
        sort: registerColumnCfg,
        sortGroup: registerColumnCfg,
        sortOrders: registerColumnCfg,
        hidden: registerColumnCfg,
        headTextAlign: registerColumnCfg,
        contentTextAlign: registerColumnCfg,
        textAlign: registerColumnCfg,
        headCellPadding: registerColumnCfg,
        cellPadding: registerColumnCfg
    },
    beforeDestroy: function beforeDestroy() {
        var column = (0, _extends3.default)({}, this._props);
        column.__component = this;
        this.parent.store.delColumnCfg(column);
    },
    props: {
        /**
         * 列单元格的name(默认空), 通过这个属性可以把当前DataTableColumn配置关联到table.columns上
         */
        name: {
            type: String,
            default: function _default() {
                return undefined;
            }
        },
        /**
         * 列的类型(默认'normal'),下面几种类型
         * normal   表示一般的数据字段列
         */
        type: {
            type: String,
            default: function _default() {
                return defaultColumnProps.type;
            }
        },
        /**
         * 列单元格的数据字段(默认'')
         */
        field: {
            type: String,
            default: function _default() {
                return defaultColumnProps.field;
            }
        },
        /**
         * 列名(默认'')
         */
        label: {
            type: String,
            default: function _default() {
                return defaultColumnProps.label;
            }
        },
        /**
         * 列的宽度(默认空),eg: 设置为200px,会生成style="width:200px;flex-shrink:0;"
         */
        width: {
            default: function _default() {
                return defaultColumnProps.width;
            }
        },
        /**
         * 对于width未设置的列,就认为是自适应宽度的列, 会按照这个比例来均分余下的宽度
         */
        widthRatio: {
            type: Number,
            default: function _default() {
                return defaultColumnProps.widthRatio;
            }
        },
        /**
         * 对于width未设置的列,就认为是自适应宽度的列, 应该有一个最小宽度(默认150)
         */
        minWidth: {
            type: Number,
            default: function _default() {
                return defaultColumnProps.minWidth;
            }
        },
        /**
         * 列单元格的class, 多个以空格隔开(默认'')
         */
        cellClass: {
            type: String,
            default: function _default() {
                return defaultColumnProps.cellClass;
            }
        },
        /**
         * 列的排序字段(默认''), sort和sortGroup只能有一个
         */
        sort: {
            type: String,
            default: function _default() {
                return defaultColumnProps.sort;
            }
        },
        /**
         * 列的排序字段组合(默认[]), sort和sortGroup只能有一个
         */
        sortGroup: {
            type: Array,
            default: function _default() {
                return defaultColumnProps.sortGroup;
            }
        },
        /**
         * 列的排序类型, 每点一下表头按照sortOrders依次排序
         */
        sortOrders: {
            type: Array,
            default: function _default() {
                return defaultColumnProps.sortOrders;
            }
        },
        /**
         * 是否隐藏当前列表
         */
        hidden: {
            type: Boolean,
            default: function _default() {
                return defaultColumnProps.hidden;
            }
        },
        /**
         * 表头单元格的对齐方式, 默认左对齐, 下面几种类型
         * left   表示左对齐
         * center 表示居中对齐
         * right  表示右对齐
         */
        headTextAlign: {
            type: String,
            default: function _default() {
                return defaultColumnProps.headTextAlign;
            }
        },
        /**
         * 表格单元格的对齐方式, 默认左对齐, 下面几种类型
         * left   表示左对齐
         * center 表示居中对齐
         * right  表示右对齐
         */
        contentTextAlign: {
            type: String,
            default: function _default() {
                return defaultColumnProps.contentTextAlign;
            }
        },
        /**
         * 表头/表格单元格的对齐方式, 默认左对齐, 下面几种类型
         * left   表示左对齐
         * center 表示居中对齐
         * right  表示右对齐
         */
        textAlign: {
            type: String,
            default: function _default() {
                return defaultColumnProps.textAlign;
            }
        },
        /**
         * 表头单元格的padding(默认12px 15px)
         */
        headCellPadding: {
            type: String,
            default: function _default() {
                return defaultColumnProps.headCellPadding;
            }
        },
        /**
         * 列所在表格单元格的padding(默认12px 15px)
         */
        cellPadding: {
            type: String,
            default: function _default() {
                return defaultColumnProps.cellPadding;
            }
        },
        /**
         * 当前列是否是数字类型的，用于统计计算
         */
        isNumber: {
            type: Boolean,
            default: function _default() {
                return defaultColumnProps.isNumber;
            }
        }
    },
    computed: {
        parent: function parent() {
            var parent = this.$parent;
            // while (parent && !parent.tableId) {
            //     parent = parent.$parent;
            // }
            return parent;
        }
    }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePopper = __webpack_require__(208);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'DropDown',
    mixins: [_vuePopper2.default],
    props: {
        /**
        * 如果是true就表示点击body部分展开dropdown部分,否则表示鼠标悬停到body部分展开dropdown部分, 默认true,
        */
        clickMode: {
            type: Boolean,
            default: true
        },
        /**
        * 控制下拉框的展开,默认不展开(父组件在绑定这个属性时请用:isOpen.sync)
        */
        isOpen: {
            type: Boolean,
            default: false
        },
        /**
        * label文案,默认空,
        */
        labelText: {
            type: String,
            default: ''
        },
        /**
        * 是否没有边框,默认false,
        */
        noBorder: {
            type: Boolean,
            default: false
        },
        /**
        * 展开的下拉内容的附加样式,默认空
        */
        dropdownCls: {
            type: String,
            default: ''
        },
        /**
         * 是否禁用控件
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 下拉箭头方向，靠左还是靠右
         */
        trianglePosition: {
            type: String,
            default: 'right'
        },
        /**
         * 是否有箭头
         */
        hasArrow: {
            type: Boolean,
            default: false
        }
    },
    created: function created() {
        this.showPopper = this.isOpen;
    },

    mounted: function mounted() {
        var _this = this;

        this.$on('on-scroll', function () {
            if (_this.isOpen) {
                _this.updatePopper();
            }
        });
    },
    methods: {
        open: function open(isOpen) {
            this.showPopper = isOpen;
            this.$emit('update:isOpen', isOpen);
        },
        handleIn: function handleIn() {
            // 如果控件被禁止了，那么不需要展开
            if (this.disabled) {
                return;
            }
            this.open(this.clickMode ? !this.isOpen : true);
        },
        handleOut: function handleOut() {
            this.open(false);
        }
    },
    watch: {
        isOpen: function isOpen(val) {
            this.showPopper = val;
            if (this.$el) {
                // 修正 eventoutside 指令里状态 和 isOpen 不同步的问题
                this.$el.$outsidestatus = val ? 'in' : 'out';
            }
        },
        dropdownCls: function dropdownCls() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.updatePopper();
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Select = __webpack_require__(86);

var _Select2 = _interopRequireDefault(_Select);

var _DropDown = __webpack_require__(22);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'com-pagination',
    components: {
        Select: _Select2.default, DropDown: _DropDown2.default
    },
    props: {
        /** 
        * 当前展示页
        */
        activeIndex: {
            type: Number,
            default: 1
        },
        /** 
        * 每页展示数据条数
        */
        pageSize: {
            type: Number,
            default: 50
        },
        /** 
        * 总页数
        */
        totalPage: {
            type: Number,
            default: 1
        },
        /** 
        * 展示数据条数的数组
        */
        pageSizeList: {
            type: Array,
            default: function _default() {
                return [5, 10, 25, 50, 75, 100];
            }
        },
        /** 
        * 当前active页左右两侧显示页数
        */
        showPageNumber: {
            type: Number,
            default: 2
        },
        /** 
        * 是否展示上一页和下一页箭头
        */
        showGuideArrow: {
            type: Boolean,
            default: false
        },
        /** 
        * 是否展示数据条数选择下拉
        */
        showPageSize: {
            type: Boolean,
            default: false
        },
        /**
         * 是否展示输入page输入框
         */
        showPageInput: {
            type: Boolean,
            default: false
        },
        /**
         * Page Size Label
         */
        perPageLabel: {
            default: 'items per page'
        }
    },
    data: function data() {
        return {
            currentPage: this.activeIndex,
            isBeforeOpen: false,
            isAfterOpen: false
        };
    },

    computed: {
        pageSizes: function pageSizes() {
            return (this.pageSizeList || []).map(function (item) {
                return {
                    id: item,
                    name: item
                };
            });
        },
        pageConfig: function pageConfig() {
            var out = {
                list: [],
                before: [],
                after: []
            };
            var leftIndex = Math.max(this.currentPage - this.showPageNumber, 2),
                rightIndex = Math.min(this.currentPage + this.showPageNumber, this.totalPage - 1);
            for (var i = leftIndex; i <= rightIndex; i++) {
                out.list.push(i);
            }
            for (var _i = 2; _i < leftIndex; _i++) {
                out.before.push(_i);
            }
            for (var _i2 = rightIndex + 1; _i2 < this.totalPage; _i2++) {
                out.after.push(_i2);
            }
            return out;
        },
        isShowOperator: function isShowOperator() {
            return this.showPageSize || this.showPageInput;
        }
    },
    watch: {
        activeIndex: function activeIndex(n) {
            this.currentPage = n;
        }
    },
    methods: {
        pageChange: function pageChange(page) {
            this.isBeforeOpen = false;
            this.isAfterOpen = false;
            this.currentPage = page;
            this.$emit('change', { page: page, size: this.pageSize });
        },
        getPrePage: function getPrePage() {
            if (this.currentPage > 1) {
                this.$emit('change', { page: this.currentPage - 1, size: this.pageSize });
            }
        },
        getNextPage: function getNextPage() {
            if (this.currentPage < this.totalPage) {
                this.$emit('change', { page: this.currentPage + 1, size: this.pageSize });
            }
        },
        changeSize: function changeSize(_ref) {
            var value = _ref.value;

            this.$emit('change', { page: 1, size: value });
        },
        keydown: function keydown(event) {
            // 请参照 https://blog.csdn.net/wuyusheng314/article/details/55667280
            // 0-9
            if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {}
            // Backspace Shift Ctrl Delete Enter
            else if ([8, 16, 17, 46, 13].indexOf(event.keyCode) > -1) {}
                // Left Arrow | Up Arrow | Right Arrow | Down Arrow
                else if ([37, 38, 39, 40].indexOf(event.keyCode) > -1) {} else {
                        event.returnValue = false;
                    }
        },
        setCurrentPage: function setCurrentPage(event) {
            var page = parseInt(event.target.value);
            if (page >= 1 && page <= this.totalPage) {
                this.pageChange(page);
            } else {
                event.target.value = this.currentPage;
            }
        }
    },
    mounted: function mounted() {}
};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c4901aa2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(215);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c4901aa2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Select/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4901aa2", Component.options)
  } else {
    hotAPI.reload("data-v-c4901aa2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(71);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(72);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _DropDown = __webpack_require__(22);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 格式化value
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var fmtValue = function fmtValue(value, multi) {
    if (multi) {
        if (value && value.split) {
            return value.split(',');
        } else {
            return value || [];
        }
    } else {
        return [value];
    }
};

// 重新生成fmtDataSource(一般是初始化和数据源属性修改是调用)
var genDataSource = function genDataSource(dataSource, formatedValue, valueMember) {
    return dataSource.map(function (content) {
        var active = formatedValue.indexOf(content[valueMember]) !== -1;
        return {
            active: active,
            content: content,
            isCategory: content.isCategory
        };
    });
};

// 选择的数据发生改变时调用
var updateDataSource = function updateDataSource(dataSource, formatedValue, valueMember) {
    for (var i = 0; i < dataSource.length; i++) {
        var item = dataSource[i];
        item.active = formatedValue.indexOf(item.content[valueMember]) !== -1;
    }
};

exports.default = {
    props: {
        // 是否与输入框同宽
        isInheritWidth: {
            type: Boolean,
            default: false
        },
        /**
        * 是否多选(一般来说multi不应该改变),默认false
        */
        multi: {
            type: Boolean,
            default: false
        },
        /**
        * 多选时是否展示All选项,默认false,(仅在multi=true时支持)
        */
        showAll: {
            type: Boolean,
            default: false
        },
        /**
        * 如果是true就表示点击body部分展开dropdown部分,否则表示鼠标悬停到body部分展开dropdown部分, 默认true,
        */
        clickMode: {
            type: Boolean,
            default: true
        },
        /**
        * 如果设置了labelText, 那么下拉选择的Label文案就使用labelText, 否则下拉选择的Label文案就是具体选择项, (默认为空)
        * [注意]显示在label的文字的优先级规则是: labelText > source[labelMember] > source[displayMember] > defaultText
        */
        labelText: {
            type: String,
            default: ''
        },
        /**
        * 是否没有边框,默认false,
        */
        noBorder: {
            type: Boolean,
            default: false
        },
        /**
        * 展开的下拉内容的附加样式,默认空
        */
        dropdownCls: {
            type: String,
            default: ''
        },
        /**
        * 数据源,数组类型,必须通过属性传
        */
        dataSource: {
            type: Array,
            required: true
        },
        /**
        * 数据源中的值字段
        */
        valueMember: {
            type: String,
            default: 'id'
        },
        /**
        * 数据源中的显示字段
        * [注意]显示在label的文字的优先级规则是: labelText > source[labelMember] > source[displayMember] > defaultText
        */
        displayMember: {
            type: String,
            default: 'name'
        },
        /**
        * 数据源中的显示在label的字段
        * [注意]显示在label的文字的优先级规则是: labelText > source[labelMember] > source[displayMember] > defaultText
        */
        labelMember: {
            type: String,
            default: ''
        },
        /**
        * 下拉选择的初始值(注意这个值不会参与双向绑定, 如果想拿到所选值,请注册@datachange事件),有下面几种情况;
        * 1.如果是单选,表示所选数据对象的valueMember字段对应的值
            eg: {id:1,name:'hehe'} => 1
        * 2.如果是多选,表示所选数据数组的valueMember字段对应的值的数组
            eg: [{id:1,name:'hehe'},{id:2,name:'haha'}] => [1,2]
        * 3.如果是多选,表示所选数据数组的valueMember字段对应的值,然后按逗号分隔
            eg: [{id:1,name:'hehe'},{id:2,name:'haha'}] => '1,2'
        */
        value: {},
        /**
         * 默认的Text，如果datasource中没有匹配到设置的value值，用默认的text显示
         * [注意]显示在label的文字的优先级规则是: labelText > source[labelMember] > source[displayMember] > defaultText
         */
        defaultText: {
            type: String,
            default: ''
        },
        /**
        * 点击下拉列表选项时触发，方法的参数是选中的item的id和原先选中的Id,
        * 返回值是true时继续执行itemClick方法, false时阻止, 如果希望异步调用, 返回值也可以是一个Promise
        * beforeSelect({value: newValue, oldValue oldValue}))
        */
        beforeSelect: {
            type: Function
        },
        /**
          *  配置下拉列表搜索，快速定位
          *  {
          *      show: true,
          *      placeholder: ''
          *  }
         */
        searchOptions: {
            type: Object,
            default: null
        },
        /**
         * 是否禁用控件
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 下拉数据源为远程请求
         * string: url;
         * object: {
         *      url,
         *      data,
         *      type
         * } 参考ajax.js 里的 ajax相关配置
         */
        action: {
            validator: function validator(val) {
                return _utils2.default.isString(val) || _utils2.default.isObject(val);
            }
        },
        /**
         * 远程下拉数据源格式化函数
         */
        actionFormat: {
            type: Function
        },
        trianglePosition: {
            type: String,
            default: 'right'
        },
        dropdownOffset: {
            type: Number,
            default: 0
        },
        /**
         * 是否有箭头
         */
        hasArrow: {
            type: Boolean,
            default: false
        },
        /**
         * 空态时显示的文字
         */
        emptyText: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        var formatedValue = fmtValue(this.value, this.multi);
        return {
            // 是否处于展开状态
            isOpen: false,
            // All是否勾选了
            allChecked: this.multi && this.dataSource.length === formatedValue.length,
            // 通过属性传递到组件的数据(当作局部数据来用)
            formatedValue: formatedValue,
            // 格式化后的数据源,用于绑定
            fmtDataSource: genDataSource(this.dataSource, formatedValue, this.valueMember),
            // Search Key
            searchKey: '',
            // 加载状态
            loading: false
        };
    },
    computed: {
        // 传递给dropdown的class
        dropdownClass: function dropdownClass() {
            var maxWidthClass = this.isInheritWidth ? '' : 'maxw300';
            return this.multi ? 'multi dropdown-select ' + maxWidthClass + ' ' + this.dropdownCls : 'dropdown-select ' + maxWidthClass + ' ' + this.dropdownCls;
        },
        // 当前所选项的集合Label,用于UI显示
        label: function label() {
            var _this = this;

            return this.labelText || (this.multi && this.fmtDataSource.length > 0 && this.fmtDataSource.length === this.formatedValue.length ? 'All' : this.fmtDataSource.filter(function (item) {
                return item.active && !item.content.isCategory;
            }).map(function (item) {
                if (_this.labelMember) {
                    var text = item.content[_this.labelMember];
                    if (text !== undefined) {
                        return text;
                    }
                }
                return item.content[_this.displayMember];
            }).join(',')) || this.defaultText;
        }
    },
    mounted: function mounted() {
        // 判断是否远程加载下拉数据源
        if (this.dataSource.length === 0 && this.action) {
            // action Key
            this.actionKey = 'com-select-' + _utils2.default.getUniqueKey(), this.getRemoteSource();
        }
    },

    methods: {
        /**
        * 点击下拉选项时触发
        */
        itemClick: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(item) {
                var _this2 = this;

                var value, result, index, selectedItems;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                value = item.content[this.valueMember];

                                if (!this.beforeSelect) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 4;
                                return this.beforeSelect({ value: value, oldValue: this.value });

                            case 4:
                                result = _context.sent;

                                if (result) {
                                    _context.next = 8;
                                    break;
                                }

                                this.isOpen = false;
                                return _context.abrupt('return');

                            case 8:
                                if (this.multi) {
                                    index = this.formatedValue.indexOf(value);

                                    if (index === -1) {
                                        this.formatedValue.push(value);
                                    } else {
                                        this.formatedValue.splice(index, 1);
                                    }
                                    // 更新All的状态
                                    this.allChecked = this.fmtDataSource.length === this.formatedValue.length;
                                    selectedItems = this.fmtDataSource.filter(function (item) {
                                        return _this2.formatedValue.indexOf(item.content[_this2.valueMember]) !== -1;
                                    });

                                    this.$emit('datachange', {
                                        data: selectedItems,
                                        value: this.formatedValue,
                                        isAll: this.allChecked
                                    });
                                } else {
                                    this.formatedValue = [value];
                                    this.isOpen = false;
                                    this.$emit('datachange', {
                                        data: item.content,
                                        value: value
                                    });
                                }

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function itemClick(_x) {
                return _ref.apply(this, arguments);
            }

            return itemClick;
        }(),
        /**
        * 点击下拉选项All时触发
        */
        selectAll: function selectAll() {
            var _this3 = this;

            this.allChecked = !this.allChecked;
            if (this.allChecked) {
                this.formatedValue = this.fmtDataSource.map(function (item) {
                    return item.content[_this3.valueMember];
                });
                this.$emit('datachange', {
                    data: this.fmtDataSource.map(function (item) {
                        return item.content;
                    }),
                    value: this.formatedValue,
                    isAll: true
                });
            } else {
                this.formatedValue = [];
                this.$emit('datachange', {
                    data: [],
                    value: this.formatedValue,
                    isAll: false
                });
            }
        },
        isShowItem: function isShowItem(item) {
            if (typeof item.content[this.displayMember] === 'string' && this.searchKey !== '') {
                var regex = new RegExp(this.escapeRegex(this.searchKey.trim()), 'gi');
                return regex.test(item.content[this.displayMember]);
            }
            return true;
        },
        // 将正则表达式的关键字转义
        escapeRegex: function escapeRegex(str) {
            return str.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/ig, '\\$&');
        },

        // 获取远程数据源
        getRemoteSource: function getRemoteSource() {
            var _this4 = this;

            this.loading = true;
            _utils2.default.ajax((0, _assign2.default)(_utils2.default.isString(this.action) ? { url: this.action } : this.action, { key: this.actionKey })).then(function (res) {
                res = res.data || [];
                _this4.loading = false;
                var out = _this4.actionFormat ? _this4.actionFormat(res) : res;
                _this4.fmtDataSource = Array.isArray(out) ? genDataSource(out, _this4.formatedValue, _this4.valueMember) : [];
                _this4.allChecked = _this4.multi && _this4.fmtDataSource.length === _this4.formatedValue.length;
            });
        }
    },
    watch: {
        // 如果props.value发生了修改
        value: function value(v) {
            this.formatedValue = fmtValue(v, this.multi);
            this.allChecked = this.multi && this.fmtDataSource.length === this.formatedValue.length;
        },
        // 如果props.dataSource发生了修改
        dataSource: function dataSource(v) {
            this.fmtDataSource = genDataSource(v, this.formatedValue, this.valueMember);
            this.allChecked = this.multi && this.fmtDataSource.length === this.formatedValue.length;
        },
        formatedValue: function formatedValue(v) {
            updateDataSource(this.fmtDataSource, v, this.valueMember);
        },
        isOpen: function isOpen(v) {
            var _this5 = this;

            this.searchKey = '';
            this.$emit('isOpen', this.isOpen);
            this.$nextTick(function () {
                v && _this5.$refs.searchKey && _this5.$refs.searchKey.focus();
            });
        },
        action: function action(n) {
            this.getRemoteSource();
        },
        searchKey: function searchKey(n, o) {
            this.$emit('searchKeyChange', n);
        }
    },
    components: {
        DropDown: _DropDown2.default
    }
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_78978932_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_78978932_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/QuerySelect/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78978932", Component.options)
  } else {
    hotAPI.reload("data-v-78978932", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * onSelectChange 选择结果回调
 * input 输入回调
 */
exports.default = {
    props: {
        // 输入placeholder
        placeholder: {
            type: String,
            default: function _default() {
                return '请输入';
            }
        },
        /**
        * 结果列表, 数据格式: [{
            keyword: '', //表示内容
            tag: '', //表示右侧的标签
            clazz: '', //表示tag上的class
        }]
        */
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        /**
        * 所选tag, 数据格式: [{
            ...和list的每一项的格式一样
        }]
        */
        selectedList: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 输入框的值
        inputKey: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        /**
         * 是否展示标签
         */
        isShowTag: {
            type: Boolean,
            default: true
        },
        /**
         * 是否展示清楚按钮
         */
        isShowDelete: {
            type: Boolean,
            default: false
        },
        /**
         * 是否可用
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 是否正在Loading状态
         */
        isLoading: {
            type: Boolean,
            default: false
        },
        /**
         * 是否在选择后置空输入框
         */
        isClearAfterSelected: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            showResult: false,
            isFocus: false,
            key: this.inputKey,
            realSelectedList: this.selectedList
        };
    },

    computed: {
        // 是否隐藏Placeholder
        isHidePlaceholder: function isHidePlaceholder() {
            return this.key !== '' || this.isFocus || this.isShowTag && this.realSelectedList.length > 0;
        }
    },
    watch: {
        inputKey: function inputKey(value) {
            if (this.key !== value) {
                this.key = value;
            }
        },
        selectedList: function selectedList(value) {
            this.realSelectedList = value;
        }
    },
    methods: {
        // 初始化组件
        init: function init() {
            this.showResult = false;
            this.realSelectedList = [];
            this.key = '';
        },
        contentClick: function contentClick(event) {
            // 判断输入框是否已经是active状态
            if (document.hasFocus() && document.activeElement === this.$refs.enter) {
                return;
            }
            this.$refs.enter.focus();
        },

        // 输入
        input: function input(event) {
            // 输入的时候如果有结果就让结果列表展示
            this.showResult = true;
            this.key = event.target.value;
            // 输入回调
            this.$emit('input', this.key);
        },

        // 获取焦点
        focus: function focus(event) {
            this.isFocus = true;
            this.showResult = true;
        },

        // 失去焦点
        clickOut: function clickOut(event) {
            var _this = this;

            if (!this.isFocus) return;
            this.isFocus = false;
            setTimeout(function () {
                if (_this.isFocus) return;
                _this.showResult = false;
            }, 300);
        },
        blur: function blur() {
            this.$emit('blur');
        },

        // 选中选项
        select: function select(el) {
            var _this2 = this;

            // 输入框展示
            if (this.isClearAfterSelected) {
                this.key = '';
            }
            // 隐藏结果列表
            this.showResult = false;
            // 搜索数据
            this.realSelectedList.push(el);
            // 滚动到最右边
            this.$nextTick(function () {
                _this2.$refs.slist.scrollLeft = _this2.$refs.slist.scrollWidth;
            });
            this.$emit('onSelectChange', this.realSelectedList);
        },

        // 删除
        del: function del(index) {
            if (this.key !== '' || this.realSelectedList.length === 0) {
                return;
            }

            if (!index && index !== 0) {
                index = this.realSelectedList.length - 1;
            }
            if (index < 0) {
                return;
            }
            this.deleteEl(index);
        },
        deleteEl: function deleteEl(index) {
            this.realSelectedList.splice(index, 1);
            this.$emit('onSelectChange', this.realSelectedList);
        },
        deleteAll: function deleteAll() {
            this.$emit('onSelectChange', []);
        },

        // 回车
        enter: function enter() {
            this.key = (this.key || '').trim();
            if (this.key !== '') {
                this.$emit('enter', this.key);
            }
        }
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menuList = __webpack_require__(221);

var _menuList2 = _interopRequireDefault(_menuList);

var _vuePerfectScrollbar = __webpack_require__(32);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

exports.default = {
    name: 'Menu',
    components: {
        MenuList: _menuList2.default,
        VuePerfectScrollbar: _vuePerfectScrollbar2.default
    },
    props: {
        menuList: {
            type: Array
        },
        activeName: {
            type: [String, Number]
        }
    },
    methods: {
        handleSelect: function handleSelect(item) {
            this.$emit('on-select', item);
        },
        handleOpenChange: function handleOpenChange(item) {
            this.$emit("on-open-change", item);
        },

        /*
         * 更新滚动条, 通常在弹窗内容高度发生变化需要更新滚动条时调用
         * @param delayMs 延期多少毫秒执行
         */
        updateScrollerBar: function updateScrollerBar(delayMs) {
            var _this = this;

            if (delayMs) {
                if (this.timerS) {
                    window.clearTimeout(this.timerS);
                }
                this.timerS = window.setTimeout(function () {
                    _this.$refs.scroller.update();
                }, delayMs);
            } else {
                this.$refs.scroller.update();
            }
        }
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _collapseTransition = __webpack_require__(222);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "MenuList",
    components: { CollapseTransition: _collapseTransition2.default },
    props: {
        menuList: {
            type: Array
        },
        activeName: {
            type: [String, Number]
        },
        width: {
            type: String,
            default: "220px"
        }
    },
    data: function data() {
        return {
            currentActiveName: this.activeName
        };
    },

    methods: {
        handleOpenChange: function handleOpenChange(item) {
            if (item.content.disabled) return;
            item.content.showChild = !item.content.showChild;
            this.$emit("on-open-change", item);
            this.$emit("updateScrollerBar", 200);
        },
        handleSelect: function handleSelect(item) {
            if (item.content.disabled || this.currentActiveName === item.content.pageName) return;
            this.currentActiveName = item.content.pageName;
            this.$emit("on-select", item);
        }
    },
    watch: {
        activeName: function activeName(val) {
            this.currentActiveName = val;
        }
    },
    render: function render(h) {
        var menuList = this.menuList,
            currentActiveName = this.currentActiveName,
            width = this.width;

        var self = this;
        var renderMenus = function renderMenus(h, list, level) {
            var menus = [];
            list.forEach(function (item) {
                if (item.child === null && item.content && item.content.show) {
                    menus.push(h(
                        "li",
                        { "class": { 'com-menu-item': true, 'com-menu-item-active': currentActiveName === item.content.pageName, 'com-menu-item-disabled': item.content.disabled }, on: {
                                "click": function click(e) {
                                    self.handleSelect(item);
                                }
                            },
                            style: { 'padding-left': 36 + (level - 1) * 24 + 'px' } },
                        [h(
                            "div",
                            { "class": "com-menu-item-content", attrs: { "data-page": item.content.pageName }
                            },
                            [h(
                                "div",
                                { "class": "com-menu-item-content-left" },
                                [item.content.icon ? h("i", { "class": item.content.icon }) : '', item.content.valueText ? h("span", [item.content.valueText]) : '']
                            ), h(
                                "div",
                                { "class": "com-menu-item-content-right" },
                                [item.content.valueCount ? h("span", [item.content.valueCount]) : '']
                            )]
                        )]
                    ));
                }
                if (item.child && item.content && item.content.show) {
                    menus.push(h(
                        "li",
                        { "class": { 'com-menu-submenu': true, 'com-menu-opened': item.content.showChild, 'com-menu-submenu-disabled': item.content.disabled } },
                        [h(
                            "div",
                            { "class": "com-menu-submenu-title", ref: "reference", on: {
                                    "click": function click(e) {
                                        self.handleOpenChange(item);
                                    }
                                },
                                style: level > 0 ? { 'padding-left': 43 + (level - 1) * 24 + 'px' } : {} },
                            [h(
                                "div",
                                { "class": "com-menu-submenu-title-content" },
                                [h(
                                    "div",
                                    { "class": "com-menu-submenu-title-content-left" },
                                    [item.content.icon ? h("i", { "class": item.content.icon }) : '', item.content.valueText ? h("span", [item.content.valueText]) : '']
                                ), h(
                                    "div",
                                    { "class": "com-menu-submenu-title-content-right" },
                                    [item.content.valueCount ? h("span", [item.content.valueCount]) : '']
                                )]
                            ), !item.content.disabled ? h("i", { "class": "com-menu-submenu-title-icon icon-arrow_01_down" }) : '']
                        ), h("collapse-transition", [h(
                            "ul",
                            { "class": "com-menu", style: { 'width': width }, directives: [{
                                    name: "show",
                                    value: item.content.showChild
                                }]
                            },
                            [renderMenus(h, item.child, level + 1)]
                        )])]
                    ));
                }
            });
            return menus;
        };
        return h(
            "ul",
            { "class": "com-menu", style: { 'width': width } },
            [self.$slots.default, renderMenus(h, menuList, 0)]
        );
    }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//


exports.default = {
    props: {
        /** 
        * label文案,默认空,
        */
        label: {
            type: String,
            default: ''
        },
        /** 
        * 是否勾选(注意这个值不会参与双向绑定, 如果想拿到勾选值,请注册@datachange事件),默认空
        */
        checked: {
            type: Boolean,
            default: false
        },
        /** 
        * 是否禁用
        */
        isDisabled: {
            tppe: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            realChecked: this.checked
        };
    },

    watch: {
        checked: function checked(n, o) {
            this.realChecked = n;
        }
    },
    methods: {
        check: function check(event) {
            if (this.isDisabled) {
                event.stopPropagation();
                event.preventDefault();
                this.$emit('disableClick');
                return false;
            } else {
                this.realChecked = !this.realChecked;
                this.$emit('change', this.realChecked);
            }
        }
    }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Keyword',
    componentName: 'Keyword',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        // 当前值
        value: {
            type: String,
            default: ''
        },
        //  placeholder
        placeholder: {
            type: String,
            default: ''
        },
        // 输入框的值
        input: {
            type: String,
            default: ''
        },
        // Split Value的分隔符
        split: {
            type: String,
            default: ','
        },
        // 可选keyword最大限度
        max: {
            type: Number,
            default: 5
        },
        verifyFun: Function,
        tagShowFull: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tagList: this.value === '' ? [] : this.value.split(this.split),
            realInput: this.input,
            isFocus: false
        };
    },

    computed: {
        // 是否隐藏Placeholder
        isHidePlaceholder: function isHidePlaceholder() {
            return this.realInput !== '' || this.tagList.length > 0;
        }
    },
    watch: {
        value: function value(n, o) {
            this.tagList = n === '' ? [] : n.split(this.split);
        },
        input: function input(n, o) {
            this.realInput = n;
        }
    },
    methods: {
        contentClick: function contentClick(event) {
            // 判断输入框是否已经是active状态
            if (document.hasFocus() && document.activeElement === this.$refs.enter) {
                return;
            }
            this.$refs.enter.focus();
        },
        enter: function enter() {
            var _this = this;

            if (this.realInput !== '') {
                // 如果已选择tag达到最大限度
                if (this.tagList.length >= this.max) {
                    return;
                }
                // 如果已经输入标签，则直接置空
                if (this.tagList.indexOf(this.realInput) > -1) {
                    this.realInput = '';
                } else {
                    this.tagList.push(this.realInput.trim());
                    this.$emit('change', this.tagList.join(this.split));
                    this.realInput = '';
                    // 滚动到最右边
                    this.$nextTick(function () {
                        _this.$refs.list.scrollLeft = _this.$refs.list.scrollWidth;
                    });
                }
            }
        },
        del: function del() {
            if (_utils2.default.getCursorPosition(this.$refs.enter) === 0) {
                this.tagList.splice(this.tagList.length - 1, 1);
                this.$emit('change', this.tagList.join(this.split));
            }
        },
        deleteEl: function deleteEl(index) {
            this.tagList.splice(index, 1);
            this.$emit('change', this.tagList.join(this.split));
        },
        keydown: function keydown(event) {
            // 分隔符禁止输入
            if (event.key === this.split) {
                event.returnValue = false;
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 此组件用于滚动加载，当滚动到顶部或底部时，会触发scroll-top或scroll-bottom事件
 * 外部监听事件可以去异步请求数据，然后更新数据，达到滚动加载的效果
 */
exports.default = {
    name: 'Scroll',
    props: {
        /** 滚动区域的高度 */
        height: {
            type: [Number, String]
        },
        /** 滚动区域的最大高度 */
        maxHeight: {
            type: [Number, String]
        },
        /** 加载数据时显示文本 */
        loadingText: {
            type: String,
            default: 'loading'
        },
        /** 是否处于加载状态 */
        isLoading: {
            type: Boolean,
            default: false,
            require: true
        },
        /** 是否显示加载中提示 */
        showLoading: Boolean,
        /** 距离顶部和底部多少距离时触发异步加载事件 */
        distance: {
            type: [Array, String],
            default: function _default() {
                return [20, 20];
            }
        }
    },
    data: function data() {
        var distance = this.calculateDistance();
        return {
            loadingDirection: 'top',
            lastScroll: 0,
            reachedTopScrollLimit: true,
            reachedBottomScrollLimit: false,
            rubberRollBackTimeout: false,
            loadingTimeout: false,

            topDistance: distance[0],
            bottomDistance: distance[1]
        };
    },

    computed: {
        containerCss: function containerCss() {
            var cssObj = { overflow: 'auto' };
            if (this.height) cssObj.height = String(this.height).match(/(%|px)$/) ? this.height : this.height + 'px';
            if (this.maxHeight) cssObj.maxHeight = String(this.maxHeight).match(/(%|px)$/) ? this.maxHeight : this.maxHeight + 'px';
            return cssObj;
        }
    },
    watch: {
        isLoading: function isLoading(value) {
            if (!value) {
                this.reset();
            }
        }
    },
    methods: {
        calculateDistance: function calculateDistance() {
            if (typeof this.distance === 'string') return [this.distance, this.distance];
            return this.distance;
        },
        onWheel: function onWheel(event) {
            if (this.isLoading) return;
            var wheelDelta = event.wheelDelta ? event.wheelDelta : -(event.detail || event.deltaY);
            this.stretchEdge(wheelDelta);
        },
        stretchEdge: function stretchEdge(direction) {
            var _this = this;

            clearTimeout(this.rubberRollBackTimeout);

            this.rubberRollBackTimeout = setTimeout(function () {
                if (!_this.isLoading) _this.reset();
            }, 250);

            if (direction > 0 && this.reachedTopScrollLimit) {
                this.onCallback('top');
            } else if (direction < 0 && this.reachedBottomScrollLimit) {
                this.onCallback('bottom');
            } else {
                this.onScroll();
            }
        },
        onScroll: function onScroll() {
            var _this2 = this;

            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = setTimeout(function () {
                var el = _this2.$refs.srcollContainer;
                if (_this2.isLoading || !el) return;
                var scrollDirection = _this2.lastScroll - el.scrollTop >= 0 ? 'top' : 'bottom';
                var displacement = el.scrollHeight - el.clientHeight - el.scrollTop;
                if (scrollDirection === 'bottom' && displacement - _this2.bottomDistance <= 0) {
                    _this2.reachedBottomScrollLimit = true;
                    _this2.onCallback('bottom');
                } else if (scrollDirection === 'top' && el.scrollTop - _this2.topDistance <= 0) {
                    _this2.reachedTopScrollLimit = true;
                    _this2.onCallback('top');
                } else {
                    _this2.reachedTopScrollLimit = false;
                    _this2.reachedBottomScrollLimit = false;
                    _this2.lastScroll = el.scrollTop;
                }
            }, 250);
        },
        onCallback: function onCallback(dir) {
            // this.showBodyLoader = true;
            if (dir === 'top') {
                this.$emit('scroll-top');
                this.loadingDirection = 'top';
            } else {
                this.$emit('scroll-bottom');
                this.loadingDirection = 'bottom';
            }
        },
        reset: function reset() {
            var el = this.$refs.srcollContainer;
            this.reachedBottomScrollLimit = false;
            this.reachedTopScrollLimit = el.scrollTop === 0;
            this.lastScroll = 0;
            clearTimeout(this.rubberRollBackTimeout);
        },
        scrollTop: function scrollTop() {
            this.$refs.srcollContainer.scrollTop = 0;
        }
    }
};

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_da00f8e2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(232);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_da00f8e2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DatePicker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da00f8e2", Component.options)
  } else {
    hotAPI.reload("data-v-da00f8e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

var _DateTable = __webpack_require__(230);

var _DateTable2 = _interopRequireDefault(_DateTable);

var _util = __webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        DateTable: _DateTable2.default
    },
    props: {
        // 是否需要展示picker-header, 默认是
        showHead: {
            default: true
        },
        // 是否显示底部按钮，默认false
        showFooter: {
            default: false
        },
        // 选择模式 day, range
        selectionMode: {
            default: 'day',
            validator: function validator(val) {
                return ['day', 'range'].indexOf(val) > -1;
            }
        },
        // 选择面板数量
        pickNmuber: {
            type: Number,
            default: 1,
            validator: function validator(val) {
                return val >= 1 && val <= 12;
            }
        },
        // 当前时间
        date: {
            type: Date,
            default: function _default() {
                return new Date();
            }
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        // 限制选择最小日期
        startLimitDate: {
            type: Date
        },
        // 限制选择最大日期
        endLimitDate: {
            type: Date
        },
        // 时间格式
        format: {
            type: String,
            default: 'MM/dd/yyyy'
        }
    },
    data: function data() {
        // 根据限制选择日期来确定基准时间
        var standardDate = new Date();
        if (this.startLimitDate) {
            standardDate = this.startLimitDate;
        } else if (this.endLimitDate) {
            standardDate = (0, _util.prevMonth)(this.endLimitDate, this.pickNmuber - 1);
        } else if (this.startDate) {
            standardDate = this.startDate;
        } else if (this.date) {
            standardDate = this.date;
        }
        return {
            currentDate: this.date,
            standardDate: standardDate,
            rangeState: {
                endDate: null,
                startDate: null,
                activeDate: null,
                selecting: false
            }
        };
    },

    watch: {
        startDate: function startDate(newValue) {
            if (!newValue) {
                this.rangeState.startDate = newValue;
                this.standardDate = newValue;
            }
        },
        endDate: function endDate(newValue) {
            if (!newValue) {
                this.rangeState.endDate = newValue;
            }
        },
        date: function date(newValue) {
            this.currentDate = newValue;
        }
    },
    mounted: function mounted() {
        this.rangeState.startDate = this.startDate;
        this.rangeState.endDate = this.endDate;
    },

    computed: {
        getStartDate: function getStartDate() {
            if (this.selectionMode === 'range') {
                if (this.rangeState.selecting) {
                    return (this.rangeState.startDate || this.currentDate).Format(this.format);
                } else {
                    return (this.rangeState.activeDate || this.rangeState.startDate || this.currentDate).Format(this.format);
                }
            } else {
                return this.currentDate.Format(this.format);
            }
        },
        getEndDate: function getEndDate() {
            if (this.selectionMode === 'range') {
                return (this.rangeState.endDate || this.rangeState.activeDate || this.rangeState.startDate || this.currentDate).Format(this.format);
            } else {
                return this.currentDate.Format(this.format);
            }
        },
        hasFooter: function hasFooter() {
            return this.showFooter && this.selectionMode === 'day';
        }
    },
    methods: {
        monthPrev: function monthPrev() {
            this.standardDate = (0, _util.prevMonth)(this.standardDate);
        },
        monthNext: function monthNext(date) {
            this.standardDate = (0, _util.nextMonth)(this.standardDate);
        },
        pick: function pick(dateObj) {
            var _this = this;

            if (this.selectionMode === 'range') {
                (0, _keys2.default)(dateObj).forEach(function (key) {
                    _this.rangeState[key] = dateObj[key];
                });
                var endDate = this.rangeState.endDate;
                if (endDate) {
                    endDate.setHours(23, 59, 59, 0);
                }
                this.$emit('pick', { startDate: this.rangeState.startDate, endDate: endDate });
            } else if (this.selectionMode === 'day') {
                this.currentDate = dateObj;
                this.$emit('pick', dateObj);
            }
        },
        rangeChange: function rangeChange(activeDate) {
            if (this.selectionMode === 'range') {
                this.rangeState.activeDate = activeDate;
            }
        },
        getDate: function getDate(index) {
            return (0, _util.nextMonth)(this.standardDate, index);
        },
        getFormatDate: function getFormatDate(value) {
            var regex = new RegExp(this.format.replace(/[M|d|y]/g, '\\d'));
            if (regex.test(value)) {
                var year = new RegExp(this.format.replace(/[M|d]/g, '\\d').replace(/[y]+/, '(\\d+)')).exec(value)[1];
                var month = new RegExp(this.format.replace(/[y|d]/g, '\\d').replace(/[M]+/, '(\\d+)')).exec(value)[1];
                var day = new RegExp(this.format.replace(/[d]+/, '(\\d+)').replace(/[M|y]/g, '\\d')).exec(value)[1];
                var date = new Date(year, month - 1, day);
                return date;
            } else {
                return null;
            }
        },
        startDateBlur: function startDateBlur(event) {
            var value = event.target.value;
            var date = void 0;
            if (date = this.getFormatDate(value)) {
                if (this.startLimitDate && this.startLimitDate < date || this.endLimitDate && this.endLimitDate > date) {} else if (this.selectionMode === 'range') {
                    this.rangeState.startDate = date;
                    this.standardDate = date;
                    if (this.rangeState.endDate && this.rangeState.endDate < date) {
                        this.rangeState.endDate = null;
                        this.rangeState.selecting = true;
                    }
                    this.$emit('pick', { startDate: this.rangeState.startDate, endDate: this.rangeState.endDate });
                } else {
                    this.currentDate = date;
                    this.$emit('pick', this.currentDate);
                }
            }
            event.target.value = this.getStartDate;
        },
        endDateBlur: function endDateBlur(event) {
            var value = event.target.value;
            var date = void 0;
            if (date = this.getFormatDate(value)) {
                if (this.startLimitDate && this.startLimitDate < date || this.endLimitDate && this.endLimitDate > date) {} else if (this.selectionMode === 'range') {
                    this.rangeState.endDate = date;
                    if (this.rangeState.startDate && this.rangeState.startDate > date) {
                        this.rangeState.startDate = date;
                    } else if (!this.rangeState.startDate) {
                        this.rangeState.startDate = this.currentDate;
                    }
                    this.rangeState.selecting = false;
                    this.$emit('pick', { startDate: this.rangeState.startDate, endDate: this.rangeState.endDate });
                } else {
                    this.currentDate = date;
                    this.$emit('pick', this.currentDate);
                }
            }
            event.target.value = this.getEndDate;
        },
        standardDateChange: function standardDateChange(d, index) {
            this.standardDate = (0, _util.prevMonth)(d, index);
        },
        pickToday: function pickToday() {
            this.currentDate = new Date();
            this.$emit('pick', this.currentDate);
        },
        clear: function clear() {
            this.currentDate = '';
            this.$emit('pick', this.currentDate);
        }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(98);

// 星期 简称
var _WEEKS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// 月份 简称
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(function (v, index) {
    return {
        m: v,
        v: index
    };
});

// 清除时、分、秒、毫秒
var clearHours = function clearHours(time) {
    var cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

exports.default = {
    props: {
        // prev
        isPrevAvailable: {
            type: Boolean,
            default: true
        },
        // next
        isNextAvailable: {
            type: Boolean,
            default: true
        },
        // 当前设置当前时间
        date: {
            type: Date,
            default: function _default() {
                return new Date();
            }
        },
        // 星期日
        firstDayOfWeek: {
            default: 7,
            type: Number,
            validator: function validator(val) {
                return val >= 1 && val <= 7;
            }
        },
        // 选择模式 day, range
        selectionMode: {
            default: 'day'
        },
        // 基准时间
        standardDate: {
            type: Date,
            default: function _default() {
                return new Date();
            }
        },
        // 限制选择最小日期
        startLimitDate: {
            type: Date
        },
        // 限制选择最大日期
        endLimitDate: {
            type: Date
        },
        // selectionMode 为 range 相关数据结构模板
        rangeState: {
            type: Object,
            default: function _default() {
                return {
                    endDate: null,
                    startDate: null,
                    activeDate: null,
                    selecting: false
                };
            }
        }
    },
    data: function data() {
        // 判断当前的日期
        var current = clearHours(this.date || new Date());
        if (this.startLimitDate && current < clearHours(this.startLimitDate)) {
            current = clearHours(this.startLimitDate);
        } else if (this.endLimitDate && current > clearHours(this.endLimitDate)) {
            current = clearHours(this.endLimitDate);
        }
        return {
            // 当前选中的时间，对selection mode 为day有效
            currentDate: new Date(current),
            tableRows: [[], [], [], [], [], []], // 一个月所有日期 7x6
            standard: new Date(this.standardDate.getTime())
        };
    },

    computed: {
        title: function title() {
            return MONTHS[this.month] + ' ' + this.year;
        },
        offsetDay: function offsetDay() {
            var week = this.firstDayOfWeek;
            // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
            return week > 3 ? 7 - week : -week;
        },
        WEEKS: function WEEKS() {
            var week = this.firstDayOfWeek;
            return _WEEKS.concat(_WEEKS).slice(week, week + 7);
        },
        year: function year() {
            return this.standard.getFullYear();
        },
        month: function month() {
            return this.standard.getMonth();
        },
        startDate: function startDate() {
            return (0, _util.getStartDateOfMonth)(this.year, this.month);
        },
        isPreDisabled: function isPreDisabled() {
            if (this.startLimitDate && (this.standard.getMonth() <= this.startLimitDate.getMonth() && this.standard.getFullYear() === this.startLimitDate.getFullYear() || this.standard.getFullYear() < this.startLimitDate.getFullYear())) {
                return true;
            } else {
                return false;
            }
        },
        isNextDisabled: function isNextDisabled() {
            if (this.endLimitDate && (this.standard.getMonth() >= this.endLimitDate.getMonth() && this.standard.getFullYear() === this.endLimitDate.getFullYear() || this.standard.getFullYear() > this.endLimitDate.getFullYear())) {
                return true;
            } else {
                return false;
            }
        },
        days: function days() {
            var date = new Date(this.year, this.month, 1);
            // day of first day
            var day = (0, _util.getFirstDayOfMonth)(date);
            var dateCountOfMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth());
            var dateCountOfLastMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);
            day = day === 0 ? 7 : day;
            var count = 1;
            var firstDayPosition = void 0;
            var offset = this.offsetDay;
            var rows = this.tableRows;
            var now = clearHours(new Date());
            for (var i = 0; i < 6; i++) {
                var row = rows[i];
                for (var j = 0; j < 7; j++) {
                    var cell = row[j];
                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }
                    cell.type = 'normal';
                    var index = i * 7 + j;
                    var time = (0, _util.nextDate)(this.startDate, index).getTime();
                    if (this.startLimitDate && time < clearHours(this.startLimitDate) || this.endLimitDate && time > clearHours(this.endLimitDate)) {
                        cell.disabled = true;
                    } else {
                        cell.disabled = false;
                    }
                    cell.inRange = time > clearHours(this.rangeState.startDate) && time < clearHours(this.rangeState.endDate || this.rangeState.activeDate);
                    cell.start = this.rangeState.startDate && time === clearHours(this.rangeState.startDate);
                    cell.end = this.rangeState.endDate && time === clearHours(this.rangeState.endDate);
                    cell.key = index;
                    cell.time = time;
                    if (time === now) {
                        cell.type = 'today';
                    }
                    if (i >= 0 && i <= 1) {
                        if (j + i * 7 >= day + offset) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else {
                        if (count <= dateCountOfMonth) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = count++ - dateCountOfMonth;
                            cell.type = 'next-month';
                        }
                    }
                    this.$set(row, j, cell);
                }
            }
            rows.firstDayPosition = firstDayPosition;
            return rows;
        },
        monthMap: function monthMap() {
            var _this = this;

            var out = MONTHS;
            if (this.startLimitDate || this.endLimitDate) {
                var sDate = this.startLimitDate ? new Date(this.startLimitDate.getFullYear(), this.startLimitDate.getMonth(), 1, 0, 0, 0).getTime() : null;
                var eDate = this.endLimitDate ? new Date(this.endLimitDate.getFullYear(), this.endLimitDate.getMonth(), (0, _util.getDayCountOfMonth)(this.endLimitDate.getFullYear(), this.endLimitDate.getMonth()), 23, 59, 59).getTime() : null;
                out = MONTHS.filter(function (v, month) {
                    var date = new Date(_this.year, month, 1, 0, 0, 0).getTime();
                    if (sDate && sDate > date || eDate && eDate < date) {
                        return false;
                    }
                    return true;
                });
            }
            if (!out.find(function (v) {
                return v.v === _this.month;
            }) && out.length > 0) {
                this.standard = new Date(this.standard.setMonth(out[0].v));
            }
            return out;
        },
        yearMap: function yearMap() {
            var startYear = 1900,
                endYear = 2499,
                out = [];
            if (this.startLimitDate) {
                startYear = this.startLimitDate.getFullYear();
            };
            if (this.endLimitDate) {
                endYear = this.endLimitDate.getFullYear();
            }
            for (var i = startYear; i <= endYear; i++) {
                out.push(i);
            }
            return out;
        }
    },
    watch: {
        date: function date(v) {
            this.currentDate = v;
        },
        standardDate: function standardDate(v) {
            this.standard = new Date(v.getTime());
        }
    },
    methods: {
        // 判断cell的日期和date是否匹配
        cellMatchesDate: function cellMatchesDate(cell, date) {
            var value = new Date(date);
            return this.year === value.getFullYear() && this.month === value.getMonth() && Number(cell.text) === value.getDate();
        },

        // 每个cell的class样式
        getCellClasses: function getCellClasses(cell) {
            var _this2 = this;

            var selectionMode = this.selectionMode;
            var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

            var classes = [];
            if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
                classes.push('available');
                if (cell.type === 'today') {
                    classes.push('today');
                }
            } else {
                classes.push(cell.type);
            }
            if (cell.type === 'normal' && defaultValue.some(function (date) {
                return _this2.cellMatchesDate(cell, date);
            })) {
                classes.push('default');
            }
            if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.currentDate)) {
                classes.push('current');
            }
            if (cell.type === 'normal' || cell.type === 'today') {
                if (cell.inRange) {
                    classes.push('in-range');
                }
                if (cell.start) {
                    classes.push('start-date');
                }
                if (cell.end) {
                    classes.push('end-date');
                }
            }
            if (cell.disabled) {
                classes.push('disabled');
            }
            return classes.join(' ');
        },
        getPositionClass: function getPositionClass() {
            if (this.isPrevAvailable && !this.isNextAvailable) {
                return 'picker-left';
            } else if (!this.isPrevAvailable && this.isNextAvailable) {
                return 'picker-right';
            } else if (!this.isPrevAvailable && !this.isNextAvailable) {
                return 'picker-center';
            }
            return '';
        },

        // 获取当前位置的日期
        getDateOfCell: function getDateOfCell(row, column) {
            var offsetFromStart = row * 7 + column - this.offsetDay;
            return (0, _util.nextDate)(this.startDate, offsetFromStart);
        },

        // 上一月
        monthPrev: function monthPrev() {
            if (this.isPreDisabled) return;
            if (this.selectionMode === 'range') {
                this.markRange();
            }
            this.$emit('monthPrev');
        },

        // 下一月
        monthNext: function monthNext() {
            if (this.isNextDisabled) return;
            if (this.selectionMode === 'range') {
                this.markRange();
            }
            this.$emit('monthNext');
        },

        // 选择日期
        dateClick: function dateClick(cell) {
            if (cell.disabled) return;
            if (this.selectionMode === 'range') {
                if (this.rangeState.startDate && this.rangeState.endDate) {
                    this.rangeState.startDate = new Date(cell.time);
                    this.rangeState.endDate = null;
                    this.rangeState.selecting = true;
                } else if (this.rangeState.startDate && !this.rangeState.endDate) {
                    if (cell.time >= this.rangeState.startDate) {
                        this.rangeState.endDate = new Date(cell.time);
                        this.rangeState.selecting = false;
                    } else {
                        // this.rangeState.endDate = this.rangeState.startDate;
                        this.rangeState.startDate = new Date(cell.time);
                        this.rangeState.selecting = true;
                    }
                } else if (!this.rangeState.startDate) {
                    this.rangeState.startDate = new Date(cell.time);
                    this.rangeState.endDate = null;
                    this.rangeState.selecting = true;
                }
                this.rangeState.activeDate = null;
                this.markRange();
                // v1 只有选择了一个有效的时间区间后,才会触发pick事件 -> v2只要出发了都会回调，方便判断
                this.$emit('pick', {
                    startDate: this.rangeState.startDate,
                    endDate: this.rangeState.endDate,
                    selecting: this.rangeState.selecting,
                    activeDate: this.rangeState.activeDate
                }, false);
            } else if (this.selectionMode === 'day') {
                var now = new Date(cell.time);
                this.currentDate = now;
                this.$emit('pick', now);
            }
            if (this.isPrevAvailable && cell.type === 'prev-month') {
                this.$emit('monthPrev');
            } else if (this.isNextAvailable && cell.type === 'next-month') {
                this.$emit('monthNext');
            }
        },

        // 滑动选择日期
        handleMouseMove: function handleMouseMove(event) {
            if (this.selectionMode !== 'range' || !this.rangeState.selecting) return;
            var target = event.target;
            if (target.tagName !== 'TD') return;
            var column = target.cellIndex;
            // 头部占2行
            var row = target.parentNode.rowIndex - 2;
            this.rangeState.activeDate = new Date(this.days[row][column].time);
            this.$emit('changerange', this.rangeState.activeDate);
        },

        // 重新计算Range Date
        markRange: function markRange() {
            var minDate = this.rangeState.startDate;
            var maxDate = this.rangeState.endDate || this.rangeState.activeDate;
            if (!minDate || !maxDate) return;
            var startDate = this.startDate;
            var rows = this.days;
            for (var i = 0, k = rows.length; i < k; i++) {
                var row = rows[i];
                for (var j = 0, l = row.length; j < l; j++) {
                    var cell = row[j];
                    cell.inRange = minDate && maxDate && cell.time > clearHours(minDate) && cell.time < clearHours(maxDate);
                    cell.start = minDate && cell.time === clearHours(minDate.getTime());
                    cell.end = this.rangeState.endDate && cell.time === clearHours(this.rangeState.endDate.getTime());
                }
            }
        },

        // 下拉选择月份
        selectMonth: function selectMonth(event) {
            this.standard = new Date(this.standard.setMonth(+event.target.value));
            this.$emit('standardDateChange', new Date(this.standard.getTime()));
        },

        // 下拉选择年
        selectYear: function selectYear(event) {
            this.standard = new Date(this.standard.setYear(+event.target.value));
            this.$emit('standardDateChange', new Date(this.standard.getTime()));
        }
    }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasClass = hasClass;


/**
 * 获取一个月第一天星期几 3 表示星期三 0表示星期日
 */
var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

// 获取某个月的天数
var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }
    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }
    return 31;
};

var getStartDateOfMonth = exports.getStartDateOfMonth = function getStartDateOfMonth(year, month) {
    var result = new Date(year, month, 1);
    var day = result.getDay();

    if (day === 0) {
        return prevDate(result, 7);
    } else {
        return prevDate(result, day);
    }
};

var getWeekNumber = exports.getWeekNumber = function getWeekNumber(src) {
    var date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
    // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var prevDate = exports.prevDate = function prevDate(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

var nextDate = exports.nextDate = function nextDate(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

var toDate = exports.toDate = function toDate(date) {
    return isDate(date) ? new Date(date) : null;
};

var isDate = exports.isDate = function isDate(date) {
    if (date === null || date === undefined) return false;
    if (isNaN(new Date(date).getTime())) return false;
    return true;
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

var prevMonth = exports.prevMonth = function prevMonth(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var monthAmount = amount % 12;
    var yearAmount = parseInt(amount / 12);
    var year = date.getFullYear();
    var month = date.getMonth();
    return month <= monthAmount - 1 ? changeYearMonthAndClampDate(date, year - (yearAmount + 1), 12 - (monthAmount - month)) : changeYearMonthAndClampDate(date, year - yearAmount, month - monthAmount);
};

var nextMonth = exports.nextMonth = function nextMonth(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var monthAmount = amount % 12;
    var yearAmount = parseInt(amount / 12);
    var year = date.getFullYear();
    var month = date.getMonth();
    return month + monthAmount >= 12 ? changeYearMonthAndClampDate(date, year + yearAmount + 1, month + monthAmount - 12) : changeYearMonthAndClampDate(date, year + yearAmount, month + monthAmount);
};

var changeYearMonthAndClampDate = exports.changeYearMonthAndClampDate = function changeYearMonthAndClampDate(date, year, month) {
    // clamp date to the number of days in `year`, `month`
    // eg: (2010-1-31, 2010, 2) => 2010-2-28
    var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
    return modifyDate(date, year, month, monthDate);
};

var modifyDate = exports.modifyDate = function modifyDate(date, y, m, d) {
    return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _DropDown = __webpack_require__(22);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _DatePicker = __webpack_require__(95);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        // 选择模式 day, range
        selectionMode: {
            default: 'day',
            validator: function validator(val) {
                return ['day', 'range'].indexOf(val) > -1;
            }
        },
        // 选择面板数量
        pickNmuber: {
            type: Number,
            default: 1,
            validator: function validator(val) {
                return val >= 1 && val <= 12;
            }
        },
        // 默认为空，那么就显示defaultText
        date: {
            type: Date
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        // 是否与输入框同宽
        isInheritWidth: {
            type: Boolean,
            default: false
        },
        /**
        * 如果是true就表示点击body部分展开dropdown部分,否则表示鼠标悬停到body部分展开dropdown部分, 默认true,
        */
        clickMode: {
            type: Boolean,
            default: true
        },
        /**
        * 展开的下拉内容的附加样式,默认空
        */
        dropdownCls: {
            type: String,
            default: ''
        },
        /**
         * 默认的Text，如果datasource中没有匹配到设置的value值，用默认的text显示
         */
        defaultText: {
            type: String,
            default: ''
        },
        // 限制选择最小日期
        startLimitDate: {
            type: Date
        },
        // 限制选择最大日期
        endLimitDate: {
            type: Date
        },
        /**
         * 处理日期展示的方法, 会把Date转换成字符串显示在label栏
         */
        displayTime: {
            type: Function,
            default: function _default(d) {
                if (_utils2.default.isDate(d)) {
                    return d.Format('MM/dd/yyyy');
                } else {
                    return '';
                }
            }
        },
        /**
         * 是否有边框 noBorder
         */
        noBorder: {
            type: Boolean,
            default: false
        },
        /**
         * 图标标签位置
         */
        iconPlacement: {
            type: String,
            default: 'right'
        },
        /*
         * 是否有箭头
         */
        hasArrow: {
            type: Boolean,
            default: false
        },
        /**
         * 是否禁用控件
         */
        disabled: {
            type: Boolean,
            default: false
        },
        showFooter: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        var v;
        if (this.selectionMode === 'day') {
            v = this.date;
        } else if (this.selectionMode === 'range') {
            v = {
                startDate: this.startDate,
                endDate: this.endDate
            };
        }
        return {
            // 是否处于展开状态
            isOpen: false,
            value: v
        };
    },
    methods: {
        pickDate: function pickDate(v) {
            this.value = v;
            if (this.selectionMode === 'day' || v.startDate && v.endDate) {
                this.isOpen = false;
                this.$emit('pick', v);
            }
        }
    },
    computed: {
        // 传递给dropdown的class
        dropdownClass: function dropdownClass() {
            return 'dropdown-select-datepicker ' + this.dropdownCls;
        },
        // 当前所选项的集合Label,用于UI显示
        label: function label() {
            var strTime = '';
            if (this.selectionMode === 'day') {
                strTime = this.displayTime(this.value) || this.defaultText;
            } else if (this.selectionMode === 'range') {
                strTime = '<span class="date-view">' + (this.displayTime(this.value.startDate) || this.defaultText) + '</span> - <span class="date-view">' + (this.displayTime(this.value.endDate) || this.defaultText) + '</span>';
            }
            return strTime;
        },
        labelClazz: function labelClazz() {
            return this.selectionMode + ' ' + this.iconPlacement ? 'icon-' + this.iconPlacement : '';
        }
    },
    watch: {
        isOpen: function isOpen(n) {
            this.$emit('isOpen', this.isOpen);
            if (n) {
                var v;
                if (this.selectionMode === 'day') {
                    v = this.date;
                } else if (this.selectionMode === 'range') {
                    v = {
                        startDate: this.startDate,
                        endDate: this.endDate
                    };
                }
                this.value = v;
            }
        },
        date: function date(n) {
            if (this.selectionMode === 'day') {
                this.value = n;
            }
        },
        startDate: function startDate(n) {
            if (this.selectionMode === 'range') {
                this.value.startDate = n;
            }
        },
        endDate: function endDate(n) {
            if (this.selectionMode === 'range') {
                this.value.endDate = n;
            }
        }
    },
    components: {
        DropDown: _DropDown2.default,
        DatePicker: _DatePicker2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exifJs = __webpack_require__(101);

var _exifJs2 = _interopRequireDefault(_exifJs);

var _SelectFile = __webpack_require__(236);

var _SelectFile2 = _interopRequireDefault(_SelectFile);

var _cropper = __webpack_require__(240);

var _cropper2 = _interopRequireDefault(_cropper);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _upload = __webpack_require__(80);

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reg_base64 = /^data:image\/([^;]+);base64,/; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 选择图片直接剪切
 */
exports.default = {
  components: { SelectFile: _SelectFile2.default, Cropper: _cropper2.default },
  props: {
    // 是否引用Cropper
    useCropper: {
      type: Boolean,
      default: true
    },
    // 多个图片
    multiple: {
      type: Boolean,
      default: false
    },
    // 是否固定剪切框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    image: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 限制图片上传数量
    limit: {
      type: Number,
      default: 20
    }
  },
  data: function data() {
    return {
      cropperImg: "",
      openCrop: false,
      selectIndex: -1,
      imageList: this.image.map(function (img) {
        return {
          src: img
        };
      })
    };
  },

  watch: {
    imageList: function imageList(v) {
      this.$emit('change', (v || []).map(function (v) {
        return v.src;
      }));
    }
  },
  methods: {
    // 多选的时候，每张图片都会执行一次
    fileSelected: function fileSelected(file, index) {
      if (this.imageList.length >= this.limit) return;
      var _self = this;
      var reader = new FileReader(file);
      reader.onload = function (evt) {
        if ((evt.target.result || "").match(reg_base64)) {
          if (_self.imageList.length >= _self.limit) return;
          if (index >= 0) {
            _self.imageList[index].src = evt.target.result;
          } else {
            _self.imageList.push({
              src: evt.target.result
            });
            if (_self.useCropper && !_self.multiple) {
              _self.cropperImg = {
                src: evt.target.result,
                index: 0
              };
              _self.openCrop = true;
            }
          }
        }
      };
      reader.readAsDataURL(file);
    },

    // 上传图片
    uploadImg: function uploadImg() {
      if (this.imageList.length === 0) return;
      for (var i = 0; i < this.imageList.length; i++) {
        if ((this.imageList[i].src || "").match(reg_base64)) {
          _upload2.default.uploadImage({
            data: this.imageList[i].src,
            success: function (_success) {
              function success() {
                return _success.apply(this, arguments);
              }

              success.toString = function () {
                return _success.toString();
              };

              return success;
            }(function () {
              console.log("success", success);
            }),
            fail: function (_fail) {
              function fail() {
                return _fail.apply(this, arguments);
              }

              fail.toString = function () {
                return _fail.toString();
              };

              return fail;
            }(function () {
              console.log("fail", fail);
            }),
            progress: function (_progress) {
              function progress() {
                return _progress.apply(this, arguments);
              }

              progress.toString = function () {
                return _progress.toString();
              };

              return progress;
            }(function () {
              console.log("progress", progress);
            })
          });
        }
      }
    },

    // 关闭剪切面板
    closeCrop: function closeCrop() {
      this.openCrop = false;
    },

    // img向上移动
    picTop: function picTop(index) {
      if (index === 0) return;
      var tempImg = this.imageList.splice(index, 1)[0];
      this.imageList.splice(index - 1, 0, tempImg);
    },

    // 裁剪图片
    editImage: function editImage(index) {
      this.cropperImg = this.imageList[index];
      this.cropperImg.index = index;
      this.openCrop = true;
    },

    // 删除图片
    deleteImage: function deleteImage(index) {
      this.imageList.splice(index, 1);
    },

    // 替换
    replaceImage: function replaceImage(index) {
      this.selectIndex = index;
      this.$refs.selectFile.handleClick();
    },

    // 截图相关操作
    cropOperate: function cropOperate(type, arg1, arg2) {
      var _this = this;

      switch (type) {
        case "zoom":
          this.$refs.cropper.changeSize(arg1);
          break;
        case "move":
          this.$refs.cropper.moveImage(arg1, arg2);
          break;
        case "reset":
          this.$refs.cropper.reload();
          break;
        case "done":
          this.$refs.cropper.getCropData(function (data) {
            _this.cropperImg.src = data;
            _this.openCrop = false;
            _this.imageList[_this.cropperImg.index].src = data;
          });
          break;
        case "rotate":
          if (arg1 < 0) {
            this.$refs.cropper.rotateLeft();
          } else {
            this.$refs.cropper.rotateRight();
          }
          break;
        case "scaleX":
          this.$refs.cropper.rotateLeft(-2);
          break;
        case "scaleY":
          this.$refs.cropper.rotateRight(2);
          break;
        default:
          break;
      }
    },
    isCanEdit: function isCanEdit(src) {
      return (src || "").match(reg_base64);
    }
  }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {
        root.EXIF = EXIF;
    }

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__(237);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _dragger = __webpack_require__(238);

var _dragger2 = _interopRequireDefault(_dragger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { Dragger: _dragger2.default },
    render: function render(h) {
        var handleClick = this.handleClick,
            drag = this.drag,
            name = this.name,
            handleChange = this.handleChange,
            multiple = this.multiple,
            accept = this.accept,
            listType = this.listType,
            uploadFiles = this.uploadFiles,
            disabled = this.disabled,
            handleKeydown = this.handleKeydown;

        var data = {
            class: 'com-select-file',
            on: {
                click: handleClick,
                keydown: handleKeydown
            }
        };
        return h(
            'div',
            (0, _babelHelperVueJsxMergeProps2.default)([data, {
                attrs: { tabindex: '0' }
            }]),
            [this.drag ? h(
                _dragger2.default,
                {
                    attrs: { disabled: disabled, accept: accept },
                    on: {
                        'file': uploadFiles
                    }
                },
                [this.$slots.default]
            ) : this.$slots.default, h('input', { 'class': 'file-input', attrs: { type: 'file', name: name, multiple: multiple, accept: accept },
                ref: 'input', on: {
                    'change': handleChange
                }
            })]
        );
    },

    props: {
        // 是否支持Dragger
        drag: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否可以多个上传
        multiple: {
            type: Boolean,
            default: false
        },
        // form表单名称 name
        name: String,
        // accept 接受文件格式
        accept: String,
        // 图片大小限制
        maxSize: {
            type: Number
        },
        // 超出文件选择数量回调
        onExceed: {
            type: Function
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        handleChange: function handleChange(ev) {
            var files = ev.target.files;
            if (!files) return;
            this.uploadFiles(files);
        },
        uploadFiles: function uploadFiles(files) {
            var _this = this;

            if (this.limit && this.fileList.length + files.length > this.limit) {
                this.onExceed && this.onExceed(files, this.fileList);
                return;
            }
            var postFiles = Array.prototype.slice.call(files);
            if (!this.multiple) {
                postFiles = postFiles.slice(0, 1);
            }
            if (postFiles.length === 0) {
                return;
            }
            postFiles.forEach(function (rawFile) {
                if (_this.maxSize && rawFile.size > _this.maxSize) {
                    alert(rawFile.name + ' is too big!');
                } else {
                    _this.$emit("onSelect", rawFile);
                }
            });
        },
        handleClick: function handleClick() {
            if (!this.disabled) {
                this.$refs.input.value = null;
                this.$refs.input.click();
            }
        },
        handleKeydown: function handleKeydown(e) {
            if (e.target !== e.currentTarget) return;
            if (e.keyCode === 13 || e.keyCode === 32) {
                this.handleClick();
            }
        }
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  props: {
    disabled: Boolean,
    accept: String
  },
  data: function data() {
    return {
      dragover: false
    };
  },

  methods: {
    onDragover: function onDragover() {
      if (!this.disabled) {
        this.dragover = true;
      }
    },
    onDrop: function onDrop(e) {
      if (this.disabled) return;
      var accept = this.accept;
      this.dragover = false;
      if (!accept) {
        this.$emit("file", e.dataTransfer.files);
        return;
      }
      this.$emit("file", [].slice.call(e.dataTransfer.files).filter(function (file) {
        var type = file.type,
            name = file.name;

        var extension = name.indexOf(".") > -1 ? "." + name.split(".").pop() : "";
        var baseType = type.replace(/\/.*$/, "");
        return accept.split(",").map(function (type) {
          return type.trim();
        }).filter(function (type) {
          return type;
        }).some(function (acceptedType) {
          if (/\..+$/.test(acceptedType)) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
            return type === acceptedType;
          }
          return false;
        });
      }));
    }
  }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exifJs = __webpack_require__(101);

var _exifJs2 = _interopRequireDefault(_exifJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      // 容器高宽
      w: 0,
      h: 0,
      // 图片缩放比例
      scale: 1,
      // 图片偏移x轴
      x: 0,
      // 图片偏移y轴
      y: 0,
      // 图片加载
      loading: true,
      // 图片真实宽度
      trueWidth: 0,
      // 图片真实高度
      trueHeight: 0,
      move: true,
      // 移动的x
      moveX: 0,
      // 移动的y
      moveY: 0,
      // 开启截图
      crop: false,
      // 正在截图
      cropping: false,
      // 裁剪框大小
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      // 判断是否能够改变
      canChangeX: false,
      canChangeY: false,
      // 改变的基准点
      changeCropTypeX: 1,
      changeCropTypeY: 1,
      // 裁剪框的坐标轴
      cropX: 0,
      cropY: 0,
      cropChangeX: 0,
      cropChangeY: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      // 支持的滚动事件
      support: "",
      // 移动端手指缩放
      touches: [],
      touchNow: false,
      // 图片旋转
      rotate: 0,
      isIos: false,
      orientation: 0,
      imgs: "",
      // 图片缩放系数
      coe: 0.2,
      // 是否正在多次缩放
      scaling: false,
      scalingSet: "",
      coeStatus: ""
    };
  },
  props: {
    img: {
      type: String,
      default: ""
    },
    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },
    outputType: {
      type: String,
      default: "jpeg"
    },
    info: {
      type: Boolean,
      default: true
    },
    // 是否开启滚轮放大缩小
    canScale: {
      type: Boolean,
      default: true
    },
    // 是否自成截图框
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropWidth: {
      type: Number,
      default: 0
    },
    autoCropHeight: {
      type: Number,
      default: 0
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: function _default() {
        return [1, 1];
      }
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },
    // 是否可以拖动图片
    canMove: {
      type: Boolean,
      default: true
    },
    // 是否可以拖动截图框
    canMoveBox: {
      type: Boolean,
      default: true
    },
    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cropInfo: function cropInfo() {
      return this.cropOffsertY > 20 ? "-20px" : "0px";
    }
  },
  watch: {
    // 如果图片改变， 重新布局
    img: function img() {
      // 当传入图片时, 读取图片信息同时展示
      this.checkedImg();
    },
    imgs: function imgs(val) {
      if (val === "") {
        return;
      }
      this.reload();
    },
    cropW: function cropW() {
      this.cropW = ~~this.cropW;
      this.showPreview();
    },
    cropH: function cropH() {
      this.cropH = ~~this.cropH;
      this.showPreview();
    },
    cropOffsertX: function cropOffsertX() {
      this.showPreview();
    },
    cropOffsertY: function cropOffsertY() {
      this.showPreview();
    },
    scale: function scale() {
      this.showPreview();
    },
    x: function x() {
      this.showPreview();
    },
    y: function y() {
      this.showPreview();
    },
    rotate: function rotate() {
      this.showPreview();
    }
  },
  methods: {
    // 校验图片
    checkedImg: function checkedImg() {
      var _this = this;

      if (this.img === "") return;
      this.loading = true;
      this.scale = 1;
      this.clearCrop();
      var canvas = document.createElement("canvas");
      var img = new Image();
      var rotate = 0;
      img.onload = function () {
        var width = img.width;
        var height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.save();
        _exifJs2.default.getData(img, function () {
          _exifJs2.default.getAllTags(img);
          _this.orientation = _exifJs2.default.getTag(img, "Orientation");
          switch (_this.orientation) {
            case 6:
              rotate = 1;
              break;
            case 8:
              rotate = -1;
              break;
            case 3:
              rotate = 3;
              break;
            default:
              rotate = 0;
          }
          if (rotate === 0) {
            _this.imgs = _this.img;
            return;
          }
          switch (rotate) {
            case 0:
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
              break;
            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, 0, -height, width, height);
              break;
            case 2:
            case -2:
              canvas.width = width;
              canvas.height = height;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -width, -height, width, height);
              break;
            case 3:
            case -1:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -width, 0, width, height);
              break;
            default:
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
          }
          ctx.restore();
          canvas.toBlob(function (blob) {
            var data = URL.createObjectURL(blob);
            _this.imgs = data;
          }, "image/" + _this.outputType, 1);
        });
      };
      img.onerror = function () {
        _this.$emit("imgLoad", "error");
      };
      img.crossOrigin = "*";
      img.src = this.img;
    },

    // 当按下鼠标键
    startMove: function startMove(e) {
      e.preventDefault();
      // 如果move 为true 表示当前可以拖动
      if (this.move && !this.crop) {
        if (!this.canMove) {
          return false;
        }
        // 开始移动
        this.moveX = (e.clientX ? e.clientX : e.touches[0].clientX) - this.x;
        this.moveY = (e.clientY ? e.clientY : e.touches[0].clientY) - this.y;
        if (e.touches) {
          window.addEventListener("touchmove", this.moveImg);
          window.addEventListener("touchend", this.leaveImg);
          if (e.touches.length == 2) {
            // 记录手指刚刚放上去
            this.touches = e.touches;
            window.addEventListener("touchmove", this.touchScale);
            window.addEventListener("touchend", this.cancleTouchScale);
          }
        } else {
          window.addEventListener("mousemove", this.moveImg);
          window.addEventListener("mouseup", this.leaveImg);
        }
      } else {
        // 截图ing
        this.cropping = true;
        // 绑定截图事件
        window.addEventListener("mousemove", this.createCrop);
        window.addEventListener("mouseup", this.endCrop);
        window.addEventListener("touchmove", this.createCrop);
        window.addEventListener("touchend", this.endCrop);
        this.cropOffsertX = e.offsetX ? e.offsetX : e.touches[0].pageX - this.$refs.cropper.offsetLeft;
        this.cropOffsertY = e.offsetY ? e.offsetY : e.touches[0].pageY - this.$refs.cropper.offsetTop;
        this.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
        this.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
        this.cropChangeX = this.cropOffsertX;
        this.cropChangeY = this.cropOffsertY;
        this.cropW = 0;
        this.cropH = 0;
      }
    },


    // 移动端缩放
    touchScale: function touchScale(e) {
      var _this2 = this;

      e.preventDefault();
      // 记录变化量
      // 第一根手指
      var oldTouch1 = {
        x: this.touches[0].clientX,
        y: this.touches[0].clientY
      };
      var newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      // 第二根手指
      var oldTouch2 = {
        x: this.touches[1].clientX,
        y: this.touches[1].clientY
      };
      var newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };
      var oldL = Math.sqrt(Math.pow(oldTouch1.x - oldTouch2.x, 2) + Math.pow(oldTouch1.y - oldTouch2.y, 2));
      var newL = Math.sqrt(Math.pow(newTouch1.x - newTouch2.x, 2) + Math.pow(newTouch1.y - newTouch2.y, 2));
      var cha = ~~(newL - oldL);
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      // 1px - 0.2
      var coe = 1;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      coe = coe > 0.1 ? 0.1 : coe;
      var num = coe * cha;
      if (!this.touchNow) {
        this.touchNow = true;
        if (cha > 0) {
          this.scale += Math.abs(num);
        } else if (cha < 0) {
          this.scale > Math.abs(num) ? this.scale -= Math.abs(num) : this.scale;
        }
        this.touches = e.touches;
        setTimeout(function () {
          _this2.touchNow = false;
        }, 8);
      }
    },
    cancleTouchScale: function cancleTouchScale(e) {
      window.removeEventListener("touchmove", this.touchScale);
    },


    // 移动图片
    moveImg: function moveImg(e, y) {
      var _this3 = this;

      var nowX, nowY;
      if (e.preventDefault) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
        if (e.touches && e.touches.length === 2) {
          this.touches = e.touches;
          window.addEventListener("touchmove", this.touchScale);
          window.addEventListener("touchend", this.cancleTouchScale);
          window.removeEventListener("touchmove", this.moveImg);
          return false;
        }
      } else {
        nowX = this.moveX + e;
        nowY = this.moveY + y;
      }
      this.$nextTick(function () {
        _this3.x = ~~(nowX - _this3.moveX);
        _this3.y = ~~(nowY - _this3.moveY);
      });
    },
    moveImage: function moveImage(x, y) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.x = _this4.x + x;
        _this4.y = _this4.y + y;
      });
    },

    // 移动图片结束
    leaveImg: function leaveImg(e) {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg);
    },

    // 缩放图片
    scaleImg: function scaleImg() {
      this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
      if (this.canScale) {
        window.addEventListener(this.support, this.changeSize);
      }
    },

    // 移出框
    cancleScale: function cancleScale() {
      if (this.canScale) {
        window.removeEventListener(this.support, this.changeSize);
      }
    },

    // 改变大小函数
    changeSize: function changeSize(e) {
      var _this5 = this;

      var change;
      if (e.preventDefault) {
        e.preventDefault();
        change = e.deltaY || e.wheelDelta;
      } else {
        change = e;
      }
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;
      // 1px - 0.2
      var coe = this.coe;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      var num = coe * change;
      num < 0 ? this.scale += Math.abs(num) : this.scale > Math.abs(num) ? this.scale -= Math.abs(num) : this.scale;
      // 延迟0.1s 每次放大大或者缩小的范围
      var status = num < 0 ? "add" : "reduce";
      if (status !== this.coeStatus) {
        this.coeStatus = status;
        this.coe = 0.2;
      }
      if (!this.scaling) {
        this.scalingSet = setTimeout(function () {
          _this5.scaling = false;
          _this5.coe = _this5.coe += 0.01;
        }, 50);
      }
      this.scaling = true;
    },


    // 修改图片大小函数
    changeScale: function changeScale(num) {
      num = num || 1;
      var coe = 20;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      num = num * coe;
      num > 0 ? this.scale += Math.abs(num) : this.scale > Math.abs(num) ? this.scale -= Math.abs(num) : this.scale;
    },

    // 创建截图框
    createCrop: function createCrop(e) {
      var _this6 = this;

      e.preventDefault();
      // 移动生成大小
      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      this.$nextTick(function () {
        var fw = ~~(nowX - _this6.cropX);
        var fh = ~~(nowY - _this6.cropY);
        if (fw > 0) {
          _this6.cropW = fw + _this6.cropChangeX > _this6.w ? _this6.w - _this6.cropChangeX : fw;
          _this6.cropOffsertX = _this6.cropChangeX;
        } else {
          _this6.cropW = _this6.w - _this6.cropChangeX + Math.abs(fw) > _this6.w ? _this6.cropChangeX : Math.abs(fw);
          _this6.cropOffsertX = _this6.cropChangeX + fw > 0 ? _this6.cropChangeX + fw : 0;
        }

        if (!_this6.fixed) {
          if (fh > 0) {
            _this6.cropH = fh + _this6.cropChangeY > _this6.h ? _this6.h - _this6.cropChangeY : fh;
            _this6.cropOffsertY = _this6.cropChangeY;
          } else {
            _this6.cropH = _this6.h - _this6.cropChangeY + Math.abs(fh) > _this6.h ? _this6.cropChangeY : Math.abs(fh);
            _this6.cropOffsertY = _this6.cropChangeY + fh > 0 ? _this6.cropChangeY + fh : 0;
          }
        } else {
          var fixedHeight = ~~(_this6.cropW / _this6.fixedNumber[0] * _this6.fixedNumber[1]);
          if (fixedHeight + _this6.cropOffsertY > _this6.h) {
            _this6.cropH = _this6.h - _this6.cropOffsertY;
            _this6.cropW = ~~(_this6.cropH / _this6.fixedNumber[1] * _this6.fixedNumber[0]);
            if (fw > 0) {
              _this6.cropOffsertX = _this6.cropChangeX;
            } else {
              _this6.cropOffsertX = _this6.cropChangeX - _this6.cropW;
            }
          } else {
            _this6.cropH = fixedHeight;
          }
          _this6.cropOffsertY = _this6.cropOffsertY;
        }
      });
    },


    // 改变截图框大小
    changeCropSize: function changeCropSize(e, w, h, typeW, typeH) {
      e.preventDefault();
      window.addEventListener("mousemove", this.changeCropNow);
      window.addEventListener("mouseup", this.changeCropEnd);
      window.addEventListener("touchmove", this.changeCropNow);
      window.addEventListener("touchend", this.changeCropEnd);
      this.canChangeX = w;
      this.canChangeY = h;
      this.changeCropTypeX = typeW;
      this.changeCropTypeY = typeH;
      this.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
      this.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
      this.cropOldW = this.cropW;
      this.cropOldH = this.cropH;
      this.cropChangeX = this.cropOffsertX;
      this.cropChangeY = this.cropOffsertY;
      if (this.fixed) {
        if (this.canChangeX && this.canChangeY) {
          this.canChangeY = 0;
        }
      }
    },


    // 正在改变
    changeCropNow: function changeCropNow(e) {
      var _this7 = this;

      e.preventDefault();
      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      this.$nextTick(function () {
        var fw = ~~(nowX - _this7.cropX);
        var fh = ~~(nowY - _this7.cropY);
        if (_this7.canChangeX) {
          if (_this7.changeCropTypeX === 1) {
            if (_this7.cropOldW - fw > 0) {
              _this7.cropW = _this7.w - _this7.cropChangeX - fw <= _this7.w ? _this7.cropOldW - fw : _this7.cropOldW + _this7.cropChangeX;
              _this7.cropOffsertX = _this7.w - _this7.cropChangeX - fw <= _this7.w ? _this7.cropChangeX + fw : 0;
            } else {
              _this7.cropW = Math.abs(fw) + _this7.cropChangeX <= _this7.w ? Math.abs(fw) - _this7.cropOldW : _this7.w - _this7.cropOldW - _this7.cropChangeX;
              _this7.cropOffsertX = _this7.cropChangeX + _this7.cropOldW;
            }
          } else if (_this7.changeCropTypeX === 2) {
            if (_this7.cropOldW + fw > 0) {
              _this7.cropW = _this7.cropOldW + fw + _this7.cropOffsertX <= _this7.w ? _this7.cropOldW + fw : _this7.w - _this7.cropOffsertX;
              _this7.cropOffsertX = _this7.cropChangeX;
            } else {
              _this7.cropW = _this7.w - _this7.cropChangeX + Math.abs(fw + _this7.cropOldW) <= _this7.w ? Math.abs(fw + _this7.cropOldW) : _this7.cropChangeX;
              _this7.cropOffsertX = _this7.w - _this7.cropChangeX + Math.abs(fw + _this7.cropOldW) <= _this7.w ? _this7.cropChangeX - Math.abs(fw + _this7.cropOldW) : 0;
            }
          }
        }

        if (_this7.canChangeY) {
          if (_this7.changeCropTypeY === 1) {
            if (_this7.cropOldH - fh > 0) {
              _this7.cropH = _this7.h - _this7.cropChangeY - fh <= _this7.h ? _this7.cropOldH - fh : _this7.cropOldH + _this7.cropChangeY;
              _this7.cropOffsertY = _this7.h - _this7.cropChangeY - fh <= _this7.h ? _this7.cropChangeY + fh : 0;
            } else {
              _this7.cropH = Math.abs(fh) + _this7.cropChangeY <= _this7.h ? Math.abs(fh) - _this7.cropOldH : _this7.h - _this7.cropOldH - _this7.cropChangeY;
              _this7.cropOffsertY = _this7.cropChangeY + _this7.cropOldH;
            }
          } else if (_this7.changeCropTypeY === 2) {
            if (_this7.cropOldH + fh > 0) {
              _this7.cropH = _this7.cropOldH + fh + _this7.cropOffsertY <= _this7.h ? _this7.cropOldH + fh : _this7.h - _this7.cropOffsertY;
              _this7.cropOffsertY = _this7.cropChangeY;
            } else {
              _this7.cropH = _this7.h - _this7.cropChangeY + Math.abs(fh + _this7.cropOldH) <= _this7.h ? Math.abs(fh + _this7.cropOldH) : _this7.cropChangeY;
              _this7.cropOffsertY = _this7.h - _this7.cropChangeY + Math.abs(fh + _this7.cropOldH) <= _this7.h ? _this7.cropChangeY - Math.abs(fh + _this7.cropOldH) : 0;
            }
          }
        }

        if (_this7.canChangeX && _this7.fixed) {
          var fixedHeight = ~~(_this7.cropW / _this7.fixedNumber[0] * _this7.fixedNumber[1]);
          if (fixedHeight + _this7.cropOffsertY > _this7.h) {
            _this7.cropH = _this7.h - _this7.cropOffsertY;
            _this7.cropW = ~~(_this7.cropH / _this7.fixedNumber[1] * _this7.fixedNumber[0]);
          } else {
            _this7.cropH = fixedHeight;
          }
        }

        if (_this7.canChangeY && _this7.fixed) {
          var fixedWidth = ~~(_this7.cropH / _this7.fixedNumber[1] * _this7.fixedNumber[0]);
          if (fixedWidth + _this7.cropOffsertX > _this7.w) {
            _this7.cropW = _this7.w - _this7.cropOffsertX;
            _this7.cropH = ~~(_this7.cropW / _this7.fixedNumber[0] * _this7.fixedNumber[1]);
          } else {
            _this7.cropW = fixedWidth;
          }
        }
      });
    },


    // 结束改变
    changeCropEnd: function changeCropEnd(e) {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    },


    // 创建完成
    endCrop: function endCrop() {
      if (this.cropW === 0 && this.cropH === 0) {
        this.cropping = false;
      }
      window.removeEventListener("mousemove", this.createCrop);
      window.removeEventListener("mouseup", this.endCrop);
      window.removeEventListener("touchmove", this.createCrop);
      window.removeEventListener("touchend", this.endCrop);
    },

    // 开始截图
    startCrop: function startCrop() {
      this.crop = true;
    },

    // 停止截图
    stopCrop: function stopCrop() {
      this.crop = false;
    },

    // 清除截图
    clearCrop: function clearCrop() {
      this.cropping = false;
      this.cropW = 0;
      this.cropH = 0;
    },

    // 截图移动
    cropMove: function cropMove(e) {
      e.preventDefault();
      if (!this.canMoveBox) {
        this.crop = false;
        this.startMove(e);
        return false;
      }
      window.addEventListener("mousemove", this.moveCrop);
      window.addEventListener("mouseup", this.leaveCrop);
      window.addEventListener("touchmove", this.moveCrop);
      window.addEventListener("touchend", this.leaveCrop);
      this.cropX = (e.clientX ? e.clientX : e.touches[0].clientX) - this.cropOffsertX;
      this.cropY = (e.clientY ? e.clientY : e.touches[0].clientY) - this.cropOffsertY;
    },
    moveCrop: function moveCrop(e, y) {
      var _this8 = this;

      var nowX, nowY;
      if (e.preventDefault) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      } else {
        nowX = this.cropX + e;
        nowY = this.cropY + y;
      }
      this.$nextTick(function () {
        var fw = ~~(nowX - _this8.cropX);
        var fh = ~~(nowY - _this8.cropY);
        if (fw <= 1) {
          _this8.cropOffsertX = 1;
        } else if (~~(fw + _this8.cropW) > _this8.w) {
          _this8.cropOffsertX = _this8.w - _this8.cropW - 1;
        } else {
          _this8.cropOffsertX = fw;
        }

        if (fh <= 1) {
          _this8.cropOffsertY = 1;
        } else if (~~(fh + _this8.cropH) > _this8.h) {
          _this8.cropOffsertY = _this8.h - _this8.cropH - 1;
        } else {
          _this8.cropOffsertY = fh;
        }
      });
    },
    leaveCrop: function leaveCrop(e) {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop);
    },

    // 获取转换成base64 的图片信息
    getCropData: function getCropData(cb) {
      var _this9 = this;

      var canvas = document.createElement("canvas");
      var img = new Image();
      var rotate = this.rotate;
      var trueWidth = this.trueWidth;
      var trueHeight = this.trueHeight;
      var cropOffsertX = this.cropOffsertX;
      var cropOffsertY = this.cropOffsertY;
      var ctx = canvas.getContext("2d");
      img.onload = function () {
        if (~~_this9.cropW !== 0) {

          var width = _this9.cropW;
          var height = _this9.cropH;
          var imgW = trueWidth * _this9.scale;
          var imgH = trueHeight * _this9.scale;
          // 图片x轴偏移
          var dx = _this9.x - cropOffsertX + _this9.trueWidth * (1 - _this9.scale) / 2;
          // 图片y轴偏移
          var dy = _this9.y - cropOffsertY + _this9.trueHeight * (1 - _this9.scale) / 2;
          //保存状态
          canvas.width = width;
          canvas.height = height;
          ctx.save();
          switch (rotate) {
            case 0:
              if (!_this9.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                canvas.width = width / _this9.scale;
                canvas.height = height / _this9.scale;
                ctx.drawImage(img, dx / _this9.scale, dy / _this9.scale, imgW / _this9.scale, imgH / _this9.scale);
              }
              break;
            case 1:
            case -3:
              if (!_this9.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH, imgW, imgH);
              } else {
                canvas.width = width / _this9.scale;
                canvas.height = height / _this9.scale;
                // 换算图片旋转后的坐标弥补
                dx = dx / _this9.scale + (imgW / _this9.scale - imgH / _this9.scale) / 2;
                dy = dy / _this9.scale + (imgH / _this9.scale - imgW / _this9.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH / _this9.scale, imgW / _this9.scale, imgH / _this9.scale);
              }
              break;
            case 2:
            case -2:
              if (!_this9.full) {
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dx - imgW, -dy - imgH, imgW, imgH);
              } else {
                canvas.width = width / _this9.scale;
                canvas.height = height / _this9.scale;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                dx = dx / _this9.scale;
                dy = dy / _this9.scale;
                ctx.drawImage(img, -dx - imgW / _this9.scale, -dy - imgH / _this9.scale, imgW / _this9.scale, imgH / _this9.scale);
              }
              break;
            case 3:
            case -1:
              if (!_this9.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW, dx, imgW, imgH);
              } else {
                canvas.width = width / _this9.scale;
                canvas.height = height / _this9.scale;
                // 换算图片旋转后的坐标弥补
                dx = dx / _this9.scale + (imgW / _this9.scale - imgH / _this9.scale) / 2;
                dy = dy / _this9.scale + (imgH / _this9.scale - imgW / _this9.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW / _this9.scale, dx, imgW / _this9.scale, imgH / _this9.scale);
              }
              break;
            default:
              if (!_this9.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                canvas.width = width / _this9.scale;
                canvas.height = height / _this9.scale;
                ctx.drawImage(img, dx / _this9.scale, dy / _this9.scale, imgW / _this9.scale, imgH / _this9.scale);
              }
          }
          ctx.restore();
        } else {
          var _width = trueWidth * _this9.scale;
          var _height = trueHeight * _this9.scale;
          ctx.save();
          switch (rotate) {
            case 0:
              canvas.width = _width;
              canvas.height = _height;
              ctx.drawImage(img, 0, 0, _width, _height);
              break;
            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              canvas.width = _height;
              canvas.height = _width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, 0, -_height, _width, _height);
              break;
            case 2:
            case -2:
              canvas.width = _width;
              canvas.height = _height;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -_width, -_height, _width, _height);
              break;
            case 3:
            case -1:
              canvas.width = _height;
              canvas.height = _width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -_width, 0, _width, _height);
              break;
            default:
              canvas.width = _width;
              canvas.height = _height;
              ctx.drawImage(img, 0, 0, _width, _height);
          }
          ctx.restore();
        }
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < imageData.data.length; i += 4) {
          // 当该像素是透明的，则设置成白色
          if (imageData.data[i + 3] == 0) {
            imageData.data[i] = 255;
            imageData.data[i + 1] = 255;
            imageData.data[i + 2] = 255;
            imageData.data[i + 3] = 255;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        var data = canvas.toDataURL("image/" + _this9.outputType, _this9.outputSize);
        cb(data);
      };
      // 判断图片是否是base64
      var s = this.img.substr(0, 4);
      if (s !== "data") {
        img.crossOrigin = "anonymous";
      }
      img.src = this.imgs;
    },

    //转化base64 为blob对象
    getCropBlob: function getCropBlob(cb) {
      this.getCropData(function (data) {
        var arr = data.split(",");
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        cb(new Blob([u8arr], { type: mime }));
      });
    },


    // 自动预览函数
    showPreview: function showPreview() {
      var obj = {};
      obj.div = {
        width: this.cropW + "px",
        height: this.cropH + "px"
      };
      obj.img = {
        width: this.trueWidth + "px",
        height: this.trueHeight + "px",
        transform: "scale(" + this.scale + "," + this.scale + ") " + "translate3d(" + (this.x - this.cropOffsertX) / this.scale + "px," + (this.y - this.cropOffsertY) / this.scale + "px," + "0)" + "rotateZ(" + this.rotate * 90 + "deg)"
      };
      obj.w = this.cropW;
      obj.h = this.cropH;
      obj.url = this.imgs;
      this.$emit("realTime", obj);
    },

    // reload 图片布局函数
    reload: function reload() {
      var _this10 = this;

      var img = new Image();
      img.onload = function () {
        // 读取图片的信息原始信息， 解析是否需要旋转
        // 读取图片的旋转信息
        // 得到外层容器的宽度高度
        _this10.w = ~~window.getComputedStyle(_this10.$refs.cropper).width.replace("px", "");
        _this10.h = ~~window.getComputedStyle(_this10.$refs.cropper).height.replace("px", "");

        // 存入图片真实高度
        _this10.trueWidth = img.width;
        _this10.trueHeight = img.height;

        // 判断是否需要压缩大图
        if (!_this10.original) {
          if (_this10.trueWidth > _this10.w) {
            // 如果图片宽度大于容器宽度
            _this10.scale = _this10.w / _this10.trueWidth;
          }

          if (_this10.trueHeight * _this10.scale > _this10.h) {
            _this10.scale = _this10.h / _this10.trueHeight;
          }
        } else {
          _this10.scale = 1;
        }

        _this10.$nextTick(function () {
          _this10.x = -(_this10.trueWidth - _this10.trueWidth * _this10.scale) / 2 + (_this10.w - _this10.trueWidth * _this10.scale) / 2;
          _this10.y = -(_this10.trueHeight - _this10.trueHeight * _this10.scale) / 2 + (_this10.h - _this10.trueHeight * _this10.scale) / 2;
          _this10.loading = false;
          // 获取是否开启了自动截图
          if (_this10.autoCrop) {
            _this10.goAutoCrop();
          }
          // 图片加载成功的回调
          _this10.$emit("imgLoad", "success");
        });
      };
      img.onerror = function () {
        _this10.$emit("imgLoad", "error");
      };
      img.src = this.imgs;
    },

    // 自动截图函数
    goAutoCrop: function goAutoCrop() {
      this.cropping = true;
      // 截图框默认大小
      // 如果为0 那么计算容器大小 默认为80%
      var w = this.autoCropWidth;
      var h = this.autoCropHeight;
      if (w === 0 || h === 0) {
        w = this.w * 0.8;
        h = this.h * 0.8;
      }
      w = w > this.w ? this.w : w;
      h = h > this.h ? this.h : h;
      if (this.fixed) {
        h = w / this.fixedNumber[0] * this.fixedNumber[1];
      }
      // 如果比例之后 高度大于h
      if (h > this.h) {
        h = this.h;
        w = h / this.fixedNumber[1] * this.fixedNumber[0];
      }
      this.changeCrop(w, h);
    },

    // 手动改变截图框大小函数
    changeCrop: function changeCrop(w, h) {
      // 判断是否大于容器
      this.cropW = w;
      this.cropH = h;
      // 居中走一走
      this.cropOffsertX = (this.w - w) / 2;
      this.cropOffsertY = (this.h - h) / 2;
    },

    // 重置函数， 恢复组件置初始状态
    refresh: function refresh() {
      this.imgs = "";
      this.scale = 1;
      this.crop = false;
      this.rotate = 0;
      this.w = 0;
      this.h = 0;
      this.trueWidth = 0;
      this.trueHeight = 0;
      this.clearCrop();
    },


    // 向左边旋转
    rotateLeft: function rotateLeft(x) {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate + (x || -0.5);
    },


    // 向右边旋转
    rotateRight: function rotateRight(y) {
      this.rotate = this.rotate >= 3 ? 0 : this.rotate + (y || 0.5);
    },


    // 清除旋转
    rotateClear: function rotateClear() {
      this.rotate = 0;
      this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2;
      this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2;
    }
  },
  mounted: function mounted() {
    var that = this;
    this.showPreview();
    this.checkedImg();
    var u = navigator.userAgent;
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // 兼容blob
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function value(callback, type, quality) {
          var binStr = atob(this.toDataURL(type, quality).split(",")[1]),
              len = binStr.length,
              arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], { type: that.type || "image/png" }));
        }
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _QuerySelect = __webpack_require__(88);

var _QuerySelect2 = _interopRequireDefault(_QuerySelect);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

function getCountry() {
    var COUNTRY = ['us', 'ca', 'cn'];
    var language = ((navigator.language || '').split('-')[1] || '').toLowerCase();
    if (COUNTRY.indexOf(language) > -1) {
        return language;
    } else {
        return COUNTRY[0];
    }
}

var MAP_ADDRESS_TYPE = {
    locality: 'city',
    administrative_area_level_2: 'county',
    administrative_area_level_1: 'state',
    postal_code: 'zipCode',
    street_number: 'streetNumber'
},
    MAP_ADDRESS_NAME = {
    county: function county(data) {
        var county = data.short_name;
        return county ? county.replace(' County', '') : '';
    },
    state: 'short_name',
    country: 'short_name',
    political: 'short_name'
};
exports.default = {
    components: {
        QuerySelect: _QuerySelect2.default
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        // placeholder
        placeholder: {
            type: String,
            default: ''
        },
        // 输入的值
        value: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        // 是否展示Clear按钮
        isShowDelete: {
            type: Boolean,
            default: false
        },
        // 展示是否格式化显示地址
        isFormatAddress: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        value: function value(val) {
            this.address.key = val.googleAddress;
        }
    },
    data: function data() {
        return {
            address: {
                list: [],
                selected: [],
                key: this.value.googleAddress || '',
                isLoading: false
            },
            country: this.value.country || getCountry(),
            hasLoadedGoogle: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        _utils2.default.initGoogleMap().then(function () {
            _this.hasLoadedGoogle = true;
            if (_this.address.key) {
                _this.search(_this.address.key);
            }
        });
        // try {
        //     if(typeof google.maps.places.AutocompleteService !== 'undefined') {
        //         this.hasLoadedGoogle = true;
        //     }
        // } catch (error) {

        // }
        // if (!this.hasLoadedGoogle) {
        //     utils.initGoogleMap().then(() => {
        //         this.hasLoadedGoogle = true;
        //         if (this.address.key) {
        //             this.search(this.address.key);
        //         }
        //     });
        // } else {
        //     if (this.address.key) {
        //         this.search(this.address.key);
        //     }
        // }
    },

    methods: {
        search: function search(key) {
            var _this2 = this;

            this.address.key = key;
            if (!this.hasLoadedGoogle) {
                this.address.isLoading = true;
                return;
            }
            if (!key) return;
            this.address.isLoading = true;
            var mapService = new google.maps.places.AutocompleteService();
            mapService.getPlacePredictions({
                types: ['address'], //精确地址
                componentRestrictions: {
                    country: this.value.country || this.country
                },
                input: key
            }, function (datas, status) {
                _this2.address.isLoading = false;
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this2.address.list = [];
                } else {
                    var out = [];
                    for (var i = 0, len = datas.length; i < len; i++) {
                        out.push(datas[i].description);
                    }
                    _this2.address.list = out;
                }
            });
        },

        /**
         * 选择地址
         */
        selecteChange: function selecteChange(selected) {
            // 重复选择不做任何操作
            if (selected.length > 0) {
                this.address.selected = [selected.pop()];
                this.value.googleAddress = this.address.key = this.address.selected[0] || '';
                // 确定选择
                this.confirmSelect(this.address.selected[0] || '');
            }
        },

        /**
         * 确定选择之后地址获取具体的地址信息
         */
        confirmSelect: function confirmSelect(addressKey) {
            var _self = this;
            if (this.__timeout) clearTimeout(this.__timeout);
            new google.maps.Geocoder().geocode({ 'address': addressKey }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var result = results[results.length - 1]; //取最后一个
                    var latLng = result.geometry.location;
                    var address = {
                        googleAddress: result.formatted_address,
                        lng: latLng.lng(),
                        lat: latLng.lat()
                    };
                    (result.address_components || []).forEach(function (cmp) {
                        var key = void 0;
                        for (var i = 0; i < (cmp.types || []).length; i++) {
                            if (key = MAP_ADDRESS_TYPE[cmp.types[i]]) {
                                break;
                            }
                            key = cmp.types[0];
                        }
                        var value = _utils2.default.isFunction(MAP_ADDRESS_NAME[key]) ? MAP_ADDRESS_NAME[key](cmp) : cmp[MAP_ADDRESS_NAME[key] || 'long_name'];
                        address[key] = value;
                    });
                    if (_self.isFormatAddress) {
                        address.googleAddress = _self.address.key = address.googleAddress;
                    }
                    _self.$emit('change', address);
                } else {
                    console.log("Geocode was not successful for the following reason:" + status);
                }
            });
        },
        blur: function blur() {
            if (this.address.key === '' || (this.address.key || '').trim() !== (this.value.googleAddress || '').trim()) {
                this.$emit('change', {});
            }
        },
        setKey: function setKey(val) {
            this.address.key = val || '';
        }
    }
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'com-progress',
    props: {
        // 进度条类型
        type: {
            type: String,
            default: 'line',
            validator: function validator(val) {
                return ['line', 'circle'].indexOf(val) > -1;
            }
        },
        // 百分比
        percentage: {
            type: Number,
            default: 0,
            required: true,
            validator: function validator(val) {
                return val >= 0 && val <= 100;
            }
        },
        // 进度条状态
        status: {
            type: String
        },
        // 进度条宽度
        strokeWidth: {
            type: Number,
            default: 6
        },
        // 是否在进度条里面展示文字
        textInside: {
            type: Boolean,
            default: false
        },
        // 进度条整体宽度
        width: {
            type: Number,
            default: 126
        },
        // 是否显示文本
        showText: {
            type: Boolean,
            default: true
        },
        // 圆弧整体颜色
        bgColor: {
            type: String,
            default: '#ebecf1'
        },
        // 进度条颜色
        color: {
            type: String,
            default: ''
        },
        // 文本显示位置 right | left
        placement: {
            type: String,
            default: 'right',
            validator: function validator(val) {
                return ['right', 'left'].indexOf(val) > -1;
            }
        },
        // 文本颜色
        textColor: {
            type: String,
            default: ''
        }
    },
    computed: {
        barStyle: function barStyle() {
            var style = {};
            style.width = this.percentage + '%';
            style.backgroundColor = this.color;
            return style;
        },
        textStyle: function textStyle() {
            var style = {
                color: this.textColor || this.color,
                fontSize: this.progressTextSize + 'px'
            };
            return style;
        },
        relativeStrokeWidth: function relativeStrokeWidth() {
            return (this.strokeWidth / this.width * 100).toFixed(1);
        },
        trackPath: function trackPath() {
            var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

            return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
        },
        perimeter: function perimeter() {
            var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
            return 2 * Math.PI * radius;
        },
        circlePathStyle: function circlePathStyle() {
            var perimeter = this.perimeter;
            return {
                strokeDasharray: perimeter + 'px,' + perimeter + 'px',
                strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
                transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
        },
        stroke: function stroke() {
            var ret = void 0;
            if (this.color) {
                ret = this.color;
            } else {
                switch (this.status) {
                    case 'success':
                        ret = '#13ce66';
                        break;
                    case 'fail':
                        ret = '#ff4949';
                        break;
                    default:
                        ret = '#20a0ff';
                }
            }
            return ret;
        },
        iconClass: function iconClass() {
            if (this.type === 'line') {
                return this.status === 'success' ? 'icon-checked_bold' : 'icon-cancel_02';
            } else {
                return this.status === 'success' ? 'icon-checked_bold' : 'icon-cancel';
            }
        },
        progressTextSize: function progressTextSize() {
            return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : '';
        }
    }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _DropDown = __webpack_require__(22);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        /**
         * 是否禁用控件
         */
        disabled: {
            type: Boolean,
            default: false
        },
        /**
         * 定位偏移量
         */
        offset: {
            type: Number,
            default: 0
        },
        /**
        * 是否没有边框,默认true,
        */
        noBorder: {
            type: Boolean,
            default: false
        },
        /**
        * 如果是true就表示点击body部分展开dropdown部分,否则表示鼠标悬停到body部分展开dropdown部分, 默认true,
        */
        clickMode: {
            type: Boolean,
            default: true
        },
        /**
        * 展开的下拉内容的附加样式,默认空
        */
        dropdownCls: {
            type: String,
            default: ''
        },
        /**
         * 时间值 Date | Number 为时间戳
         */
        value: {},
        /**
         * 默认返回是 Date类型或者是时间戳，如果为true就返回 12:00 AM 
         */
        isFormatTime: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            isOpen: false,
            hours: 12, // 时
            minutes: 0, // 分
            p: 'AM' // AM | PM
        };
    },

    computed: {
        dropdownClass: function dropdownClass() {
            return 'dropdown-time-picker ' + this.dropdownCls;
        },
        labelText: function labelText() {
            if (this.time) {
                return this.time.FormatStime();
            } else {
                return this.cover(this.hours) + ':' + this.cover(this.minutes) + ' ' + this.p;
            }
        },
        headerText: function headerText() {
            return this.cover(this.hours) + ':' + this.cover(this.minutes) + ' ' + this.p;
        },
        time: function time() {
            var time = void 0;
            if (_utils2.default.isNumber(this.value)) {
                time = new Date(this.value);
            } else if (_utils2.default.isDate(this.value)) {
                time = new Date(this.value.getTime());
            }
            return time;
        }
    },
    watch: {
        value: function value(n, o) {
            var _this = this;

            this.$nextTick(function () {
                _this.dealTime();
            });
        },
        isOpen: function isOpen(n, o) {
            n && this.dealTime();
        }
    },
    methods: {
        close: function close() {
            this.isOpen = false;
        },

        /**
         * 补位
         */
        cover: function cover(v) {
            if (String(v).length === 1) {
                return '0' + v;
            } else {
                return v;
            }
        },

        /**
         * 处理时间
         */
        dealTime: function dealTime() {
            if (this.time) {
                //  00 -> 12
                var hours = this.time.getHours();
                this.hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
                this.minutes = this.time.getMinutes();
                this.p = hours > 11 ? 'PM' : 'AM';
            } else {
                this.hours = 12;
                this.minutes = 0;
                this.p = 'AM';
            }
        },

        /**
         * 确认选择
         */
        confirm: function confirm() {
            if (this.isFormatTime) {
                this.$emit('change', this.headerText);
            } else {
                var time = this.time ? this.time : new Date();
                time.setHours(this.hours === 12 && this.p === 'AM' ? 0 : this.p === 'PM' && this.hours !== 12 ? this.hours + 12 : this.hours);
                time.setMinutes(this.minutes);
                time.setSeconds(0);
                time.setMilliseconds(0);
                if (_utils2.default.isDate(this.value)) {
                    this.$emit('change', time);
                } else {
                    this.$emit('change', time.getTime());
                }
            }
            this.isOpen = false;
        }
    },
    components: {
        DropDown: _DropDown2.default
    }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.utils = exports.components = undefined;

__webpack_require__(109);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(159);

__webpack_require__(177);

var _emmiter = __webpack_require__(46);

var _emmiter2 = _interopRequireDefault(_emmiter);

__webpack_require__(182);

var _format = __webpack_require__(45);

var _popMgr = __webpack_require__(183);

var _popMgr2 = _interopRequireDefault(_popMgr);

var _upload = __webpack_require__(80);

var _upload2 = _interopRequireDefault(_upload);

__webpack_require__(196);

var _CheckBox = __webpack_require__(197);

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _DataTable = __webpack_require__(199);

var _DataTable2 = _interopRequireDefault(_DataTable);

var _DropDown = __webpack_require__(22);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Pagination = __webpack_require__(214);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PopWin = __webpack_require__(47);

var _PopWin2 = _interopRequireDefault(_PopWin);

var _QuerySelect = __webpack_require__(88);

var _QuerySelect2 = _interopRequireDefault(_QuerySelect);

var _Select = __webpack_require__(86);

var _Select2 = _interopRequireDefault(_Select);

var _Tip = __webpack_require__(68);

var _Tip2 = _interopRequireDefault(_Tip);

var _Menu = __webpack_require__(218);

var _Menu2 = _interopRequireDefault(_Menu);

var _RadioBox = __webpack_require__(224);

var _RadioBox2 = _interopRequireDefault(_RadioBox);

var _Keyword = __webpack_require__(226);

var _Keyword2 = _interopRequireDefault(_Keyword);

var _Scroll = __webpack_require__(228);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _DatePicker = __webpack_require__(95);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _SelectDatePicker = __webpack_require__(233);

var _SelectDatePicker2 = _interopRequireDefault(_SelectDatePicker);

var _vuePerfectScrollbar = __webpack_require__(32);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

var _Upload = __webpack_require__(235);

var _Upload2 = _interopRequireDefault(_Upload);

var _AddressSuggestion = __webpack_require__(243);

var _AddressSuggestion2 = _interopRequireDefault(_AddressSuggestion);

var _VideoPop = __webpack_require__(76);

var _VideoPop2 = _interopRequireDefault(_VideoPop);

var _Progress = __webpack_require__(245);

var _Progress2 = _interopRequireDefault(_Progress);

var _VideoPlayer = __webpack_require__(78);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _TimePicker = __webpack_require__(247);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components


// utils
var components = exports.components = {
    CheckBox: _CheckBox2.default,
    DataTable: _DataTable2.default,
    DropDown: _DropDown2.default,
    Pagination: _Pagination2.default,
    PopWin: _PopWin2.default,
    QuerySelect: _QuerySelect2.default,
    Select: _Select2.default,
    Tip: _Tip2.default,
    Menu: _Menu2.default,
    RadioBox: _RadioBox2.default,
    Keyword: _Keyword2.default,
    Scroll: _Scroll2.default,
    DatePicker: _DatePicker2.default,
    SelectDatePicker: _SelectDatePicker2.default,
    VuePerfectScrollbar: _vuePerfectScrollbar2.default,
    Upload: _Upload2.default,
    AddressSuggestion: _AddressSuggestion2.default,
    VideoPop: _VideoPop2.default,
    Progress: _Progress2.default,
    VideoPlayer: _VideoPlayer2.default,
    TimePicker: _TimePicker2.default
};
// import './vue-lib/validate/index';


// vue-lib
exports.utils = _utils2.default;


var exp = {
    utils: _utils2.default,
    components: components,
    popMgr: _popMgr2.default,
    emmiterMixins: _emmiter2.default,
    formats: _format.formats,
    unformats: _format.unformats,
    upload: _upload2.default
};

window.common = exp;
exports.default = exp;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 为兼容IE
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function value(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            // 1. Let O be ? ToObject(this value).
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1. 
                k++;
            }
            // 8. Return false
            return false;
        }
    });
}

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}

if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        },
        configurable: true,
        writable: true
    });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(112) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(40);
var pIE = __webpack_require__(28);
var toObject = __webpack_require__(41);
var IObject = __webpack_require__(51);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(14)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(52);
var toAbsoluteIndex = __webpack_require__(114);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(58);
module.exports = __webpack_require__(42).f('iterator');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(56);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(30);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(41);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(122);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(61);
__webpack_require__(131);
__webpack_require__(132);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(55);
var META = __webpack_require__(127).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(38);
var setToStringTag = __webpack_require__(30);
var uid = __webpack_require__(27);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(42);
var wksDefine = __webpack_require__(43);
var enumKeys = __webpack_require__(128);
var isArray = __webpack_require__(129);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(56);
var gOPNExt = __webpack_require__(130);
var $GOPD = __webpack_require__(60);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(59).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(28).f = $propertyIsEnumerable;
  __webpack_require__(40).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(40);
var pIE = __webpack_require__(28);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(17);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(59).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(53);
__webpack_require__(58);
__webpack_require__(134);
__webpack_require__(146);
__webpack_require__(147);
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var global = __webpack_require__(2);
var ctx = __webpack_require__(24);
var classof = __webpack_require__(62);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var anInstance = __webpack_require__(135);
var forOf = __webpack_require__(136);
var speciesConstructor = __webpack_require__(63);
var task = __webpack_require__(64).set;
var microtask = __webpack_require__(141)();
var newPromiseCapabilityModule = __webpack_require__(44);
var perform = __webpack_require__(65);
var userAgent = __webpack_require__(142);
var promiseResolve = __webpack_require__(66);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(143)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(30)($Promise, PROMISE);
__webpack_require__(144)(PROMISE);
Wrapper = __webpack_require__(1)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(145)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(24);
var call = __webpack_require__(137);
var isArrayIter = __webpack_require__(138);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(52);
var getIterFn = __webpack_require__(139);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(64).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(17)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(1);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(63);
var promiseResolve = __webpack_require__(66);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(44);
var perform = __webpack_require__(65);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.doAjax = undefined;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (_ref2, output) {
    var key = _ref2.key,
        url = _ref2.url,
        _ref2$data = _ref2.data,
        data = _ref2$data === undefined ? '' : _ref2$data,
        _ref2$type = _ref2.type,
        type = _ref2$type === undefined ? 'GET' : _ref2$type,
        _ref2$dataType = _ref2.dataType,
        dataType = _ref2$dataType === undefined ? 'json' : _ref2$dataType,
        _ref2$contentType = _ref2.contentType,
        contentType = _ref2$contentType === undefined ? 'application/x-www-form-urlencoded; charset=UTF-8' : _ref2$contentType,
        _ref2$xhrFields = _ref2.xhrFields,
        xhrFields = _ref2$xhrFields === undefined ? null : _ref2$xhrFields,
        beforeSend = _ref2.beforeSend,
        _ref2$successTip = _ref2.successTip,
        successTip = _ref2$successTip === undefined ? false : _ref2$successTip,
        _ref2$showfailTip = _ref2.showfailTip,
        showfailTip = _ref2$showfailTip === undefined ? true : _ref2$showfailTip,
        _ref2$showErrorTip = _ref2.showErrorTip,
        showErrorTip = _ref2$showErrorTip === undefined ? true : _ref2$showErrorTip,
        cache = _ref2.cache;
    // 此方法会把原始的xhr对象挂载到output里面, 通过引用的形式传出去(外界可以xhr.abort()来终止请求)
    if (ajaxKeyMap[key]) {
        ajaxKeyMap[key].abort();
    }
    return new _promise2.default(function (resolve, reject) {
        var ajaxKey = doAjax({
            url: url,
            data: data,
            type: type,
            async: true,
            dataType: dataType,
            contentType: contentType,
            xhrFields: xhrFields,
            beforeSend: beforeSend,
            successTip: successTip,
            showfailTip: showfailTip,
            showErrorTip: showErrorTip,
            cache: cache
        }, resolve, reject);
        if (key) {
            ajaxKeyMap[key] = ajaxKey;
        }
        if (output) {
            output.xhr = ajaxKey;
        }
    });
};

var _toast = __webpack_require__(67);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajaxKeyMap = {};

var official = {
    saveSuccess: 'Saved Successfully',
    //网络请求
    offLine: 'Please check your network connection and try again',
    serverError: 'Server Error',
    timeout: 'Time out. Please try again later',
    requestNotFound: 'Request Failed',
    unKnownNetworkErr: 'Network Error. Please check your connection and try again.'

    // 可以是同步请求
};var doAjax = exports.doAjax = function doAjax(_ref) {
    var url = _ref.url,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? '' : _ref$data,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'GET' : _ref$type,
        _ref$async = _ref.async,
        async = _ref$async === undefined ? true : _ref$async,
        _ref$dataType = _ref.dataType,
        dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
        _ref$contentType = _ref.contentType,
        contentType = _ref$contentType === undefined ? 'application/x-www-form-urlencoded; charset=UTF-8' : _ref$contentType,
        _ref$xhrFields = _ref.xhrFields,
        xhrFields = _ref$xhrFields === undefined ? null : _ref$xhrFields,
        beforeSend = _ref.beforeSend,
        _ref$successTip = _ref.successTip,
        successTip = _ref$successTip === undefined ? false : _ref$successTip,
        _ref$showfailTip = _ref.showfailTip,
        showfailTip = _ref$showfailTip === undefined ? true : _ref$showfailTip,
        _ref$showErrorTip = _ref.showErrorTip,
        showErrorTip = _ref$showErrorTip === undefined ? true : _ref$showErrorTip,
        _ref$cache = _ref.cache,
        cache = _ref$cache === undefined ? false : _ref$cache;
    var resolve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var reject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    return $.ajax({
        url: url,
        data: data,
        type: type,
        async: async,
        xhrFields: xhrFields,
        beforeSend: beforeSend,
        contentType: contentType,
        dataType: dataType,
        cache: cache,
        success: function success(res) {
            if (res && res.status) {
                // 成功
                if (res.status.code === 0) {
                    // 提交成功后的成功提示(如果不传就没有提示)
                    if (successTip) {
                        if (successTip === true) {
                            successTip = official.saveSuccess;
                        }
                        (0, _toast2.default)({
                            content: successTip
                        });
                    }
                    resolve(res);
                }
                // 失败
                else {
                        // 提交失败后如果需要展示后台错误信息, 就展示
                        if (showfailTip) {
                            (0, _toast2.default)({
                                content: res.status.msg
                            });
                        }
                        reject((0, _extends3.default)({}, res, {
                            type: 'fail'
                        }));
                    }
            } else {
                // 对于不满足格式的ajax, 直接返回
                resolve(res);
            }
        },
        error: function error(XHR, textStatus, errorMsg) {
            if (XHR.status == 401) {
                location.href = "/?origUri=" + encodeURIComponent(location.pathname + location.hash);
                return false;
            }
            // 接口调用异常时
            if (showErrorTip) {
                if (XHR.status === 504) {
                    (0, _toast2.default)({
                        content: official.timeout,
                        time: 5000
                    });
                } else if (XHR.status >= 500) {
                    (0, _toast2.default)({
                        content: official.serverError,
                        time: 5000
                    });
                } else if (XHR.status == 404) {
                    (0, _toast2.default)({
                        content: official.requestNotFound,
                        time: 5000
                    });
                } else {
                    if (XHR.responseJSON && XHR.responseJSON.status && XHR.responseJSON.status.msg) {
                        //  有返回文案
                        (0, _toast2.default)({
                            content: XHR.responseJSON.status.msg,
                            time: 5000
                        });
                    } else if (!window.navigator.onLine && XHR.statusText !== 'abort') {
                        (0, _toast2.default)({
                            content: official.offLine,
                            time: 5000
                        });
                    }
                }
            }
            reject({
                type: 'error',
                status: {},
                XHR: XHR,
                textStatus: textStatus,
                errorMsg: errorMsg
            });
        }
        // complete: function(res) {
        //     if (res.status == 401) {
        //         location.href = "/?origUri=" + encodeURIComponent(location.pathname + location.hash);
        //         return false;
        //     }
        // }
    });
};

/**
 * 和业务形态无关的ajax, 处理请求本身, 提交之后的tip, 通用错误处理
 * @returns
 */
;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /** 
     * 设置cookies
     * @param string cname表示key
     * @param string cvalue表示value
     * @param int exdays表示过期时间(exdays天后过期)
     */
    setCookie: function setCookie(cname, cvalue, exdays) {
        var expires = "";
        if (typeof exdays !== "undefined") {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            expires = "expires=" + d.toUTCString();
        }
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=" + "/";
    },
    /** 
     * 获取cookies, 取不到返回空字符串
     * @param string cname表示key
     */
    getCookie: function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(152);

var _stringify2 = _interopRequireDefault(_stringify);

var _utils = __webpack_require__(29);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    setStorage: function setStorage(name, value, isLocal) {
        value = _utils2.default.isString(value) ? value : (0, _stringify2.default)(value);
        if (isLocal) {
            window.localStorage.setItem(name, value);
        } else {
            window.sessionStorage.setItem(name, value);
        }
    },
    getStorage: function getStorage(name, isLocal) {
        var item;
        if (isLocal) {
            item = window.localStorage.getItem(name);
        } else {
            item = window.sessionStorage.getItem(name);
        }
        try {
            item = JSON.parse(item);
        } catch (e) {}
        return item;
    },
    clearStorage: function clearStorage(name, isLocal) {
        if (isLocal) {
            window.localStorage.removeItem(name);
        } else {
            window.sessionStorage.removeItem(name);
        }
    }
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /*
     * 事件绑定
     *
     * @method bind
     * @param  {dom||window}   elem        需要绑定的dom节点或window对象
     * @param  {String}        event       绑定的事件名称
     * @param  {Function}      handler     事件处理方法
     */
    bind: function bind() {
        var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var event = arguments[1];
        var handler = arguments[2];
        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (elem && elem !== 'undefined' && event && handler) {
            event = event === 'mousewheel' ? document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll' : event;
            if (document.attachEvent) {
                elem.attachEvent('on' + event, handler);
            } else {
                elem.addEventListener(event, handler, useCapture);
            }
        }
    },
    /*
     * 移除事件绑定
     *
     * @method unbind
     * @param  {dom||window}   elem         需要移除绑定的dom节点或window对象
     * @param  {String}        event        绑定的事件名称
     * @param  {Function||Array<Function>}  handler    事件处理方法，可以为数组
     */
    unbind: function unbind() {
        var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var event = arguments[1];
        var handler = arguments[2];

        if (elem && elem !== 'undefined' && event && handler) {
            event = event === 'mousewheel' ? document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll' : event;
            var handlers = [];
            if (Array.isArray(handler) && handler.length > 0) {
                handlers = handler;
            } else {
                handlers.push(handler);
            }
            if (document.removeEventListener) {
                handlers.forEach(function (e) {
                    elem.removeEventListener(event, e, false);
                });
            } else {
                handlers.forEach(function (e) {
                    elem.detachEvent('on' + event, e);
                });
            }
        }
    }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hideLoad = exports.showLoad = undefined;

__webpack_require__(156);

var showLoad = exports.showLoad = function showLoad($element, showMask) {
    var flag = $element ? true : false;
    if (!$element) {
        if ($('body>.load-wrap').length) {
            $element = $('body>.load-wrap').show();
            return {
                hide: function hide() {
                    $element.remove();
                }
            };
        } else {
            $element = $('<div class="load-wrap"></div>').appendTo('body');
        }
    }
    var html = '<div class=\'load\'>\n        <img src="//static.chimeroi.com/crm/images/site/load.png">\n        <p>Loading...</p>\n    </div>';
    $element.append(html);
    if (showMask && !$element.siblings(".load-mask").length) {
        $element.before('<div class="load-mask"></div>');
    }
    return {
        hide: function hide() {
            if (flag) {
                $element.children('.load').remove();
            } else {
                $element.remove();
                $element.siblings(".load-mask").remove();
            }
        }
    };
};

var hideLoad = exports.hideLoad = function hideLoad() {
    $('.load-wrap').siblings(".load-mask").remove();
    $('.load-wrap').remove();
};

exports.default = {
    showLoad: showLoad,
    hideLoad: hideLoad
};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*时间格式化今年====May 12, 09:13 PM，去年 ===May 12, 2015 09:13 PM 当天显示09:13 PM
 *使用方式new Date().FormatStime()
 */
Date.prototype.FormatStime = function () {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() < 13 ? this.getHours() == 0 ? 12 : this.getHours() : this.getHours() - 12, //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds(), //毫秒
        "p": this.getHours() >= 12 ? "PM" : "AM"
    };
    var monthArray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var year = new Date().getFullYear() > this.getFullYear() ? this.getFullYear() : '';
    var month = year || new Date().getMonth() != this.getMonth() || new Date().getDate() != this.getDate() ? monthArray[this.getMonth()] + ' ' + this.getDate() + ', ' : '';
    return month + year + ' ' + (o["h+"] < 10 ? '0' + o["h+"] : o["h+"]) + ':' + (o["m+"] < 10 ? '0' + o["m+"] : o["m+"]) + ' ' + o["p"];
};

/*时间格式化
 *使用方式new Date().format(yyyy-MM-dd hh:mm:ss p)
 */
Date.prototype.Format = function (fmt) {
    var monthArray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var weekArray = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() < 13 ? this.getHours() : this.getHours() - 12, //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds(), //毫秒
        "p": this.getHours() > 12 ? "PM" : "AM",
        "E": monthArray[this.getMonth()],
        "W": weekArray[this.getDay()]
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _utils = __webpack_require__(29);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    /**
     * 初始化googlemap api
     */
    initGoogleMap: function initGoogleMap() {
        var mapUrl = 'https://maps.googleapis.com/maps/api/js?language=en&key=AIzaSyCXkAn_hwT_sLPp_5Jlr4bdyc8Fwlha_c0&libraries=places';
        // var mapUrl = "https://maps.googleapis.com/maps/api/js?language=en&key=AIzaSyB40bhMbSiFoV8EQuHJUepaUl1_-y_th2w&libraries=places";
        if (typeof google !== "undefined" && google.maps) {
            return _promise2.default.resolve();
        } else {
            return _utils2.default.loadScript(mapUrl);
        }
    }
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(160);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(171);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(161);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(162);

var _createClass3 = _interopRequireDefault(_createClass2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 图片懒加载指令
 * @author FxLsoft
 */

var SCROLLCLASS = '__scroll_view__';

/**
 * 图片缓存对象，已缓存的直接展示图片
 */
var IMG_CACHE = {};

/**
 * 返回最近的一个含有SCROLLCLASS的dom节点(这个就是人为标记的可滚动的dom)
 * @param {DomElement} el
 */
function getParentScrollView(el) {
    if (!el.parentElement || el.parentElement === document.body) {
        return window;
    } else if (el.parentElement.classList.contains(SCROLLCLASS)) {
        return el.parentElement;
    } else {
        return getParentScrollView(el.parentElement);
    }
}

var defaultOptions = {
    // 滚动停止后的延时(过后才开始检测是否触发callback)
    delayMs: 100,
    preLoad: 1,
    // 滚动到可见之后就触发callback(el, function(success){}), el是当前element, 通过function的调用来判断
    callback: null
};

var Listener = function () {
    function Listener(el, options) {
        (0, _classCallCheck3.default)(this, Listener);

        this.options = (0, _assign2.default)({}, defaultOptions, options);
        this.el = el;
        this.reset();
    }

    // 绑定事件


    (0, _createClass3.default)(Listener, [{
        key: 'bindEvent',
        value: function bindEvent() {
            // 如果没绑过事件
            if (!this.func) {
                this.scrollView = getParentScrollView(this.el);
                var t;
                if (this.options.delayMs > 0) {
                    this.func = function () {
                        if (t) {
                            window.clearTimeout(t);
                        }
                        t = window.setTimeout(this.check.bind(this), this.options.delayMs);
                    }.bind(this);
                } else {
                    this.func = this.check.bind(this);
                }
                this.scrollView.addEventListener('scroll', this.func, false);
                window.addEventListener('resize', this.func, false);
            }
        }

        // 解绑事件

    }, {
        key: 'unbindEvent',
        value: function unbindEvent() {
            if (this.func) {
                this.scrollView.removeEventListener('scroll', this.func);
                window.removeEventListener('resize', this.func);
                this.func = undefined;
            }
        }

        // 检查是否可以触发callback

    }, {
        key: 'check',
        value: function check() {
            if (this.state === 'waiting' && this.checkElInView()) {
                this.onCallback();
            }
        }

        // 检查el是否在视图内

    }, {
        key: 'checkElInView',
        value: function checkElInView() {
            // 如果dom里有immediately属性，那么就立即获取
            if (this.el.getAttribute('immediately') !== null) return true;
            var rect = this.el.getBoundingClientRect();
            var isInView = rect.top < window.innerHeight * this.options.preLoad && rect.bottom > 0 && rect.left < window.innerWidth * this.options.preLoad && rect.right > 0;
            return isInView;
        }

        // 触发callback

    }, {
        key: 'onCallback',
        value: function onCallback() {
            var _this = this;
            this.state = 'busy';
            this.options.callback && this.options.callback(function (isSuccess) {
                if (isSuccess) {
                    _this.state = 'done';
                    _this.unbindEvent();
                } else {
                    _this.state = 'waiting';
                }
            });
        }

        // 回收

    }, {
        key: 'destroy',
        value: function destroy() {
            this.unbindEvent();
        }

        // 重置

    }, {
        key: 'reset',
        value: function reset() {
            // waiting 等待状态 (监听事件)
            // busy 已经触发回调 (监听事件但不再触发回调)
            // done 完成状态 (事件注销, 回调释放)
            this.state = 'waiting';
            this.bindEvent();
            this.check();
        }
    }]);
    return Listener;
}();

// 创建一个标签异步加载图片


var loadImageAsync = function loadImageAsync(src, resolve, reject) {
    var image = new Image();
    image.src = src;
    // 图片加载成功回调
    image.onload = function () {
        resolve({
            src: image.src
        });
    };
    // 图片加载失败回调
    image.onerror = function (e) {
        reject(e);
    };
};

// 图片加载默认URL 空白图片
var DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

// v-lazyload指令, 图片懒加载
_vue2.default.directive('lazyload', {
    // 被绑定元素插入父节点时调用
    inserted: function inserted(el, binding, vnode) {
        el.src = IMG_CACHE[binding.value || 'default'] || DEFAULT_URL;
        el.attributes['lazy-src'] = binding.value;
        el.listener = new Listener(el, {
            callback: function callback(handler) {
                var src = el.attributes['lazy-src'];
                loadImageAsync(src, function (data) {
                    el.src = data.src;
                    // 缓存下已加载成功的图片
                    IMG_CACHE[data.src] = data.src;
                    handler(true);
                }, function (err) {
                    handler(false);
                });
            }
        });
    },

    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
    update: function update(el, binding, vnode) {
        // 如果src 没变不更新el
        if (binding.value !== el.src) {
            el.src = IMG_CACHE[binding.value] || DEFAULT_URL;
            el.attributes['lazy-src'] = binding.value;
            el.listener.reset();
        }
    },

    // 只调用一次，指令与元素解绑时调用。
    unbind: function unbind(el, binding, vnode) {
        el.listener && el.listener.destroy();
    }
});

// v-lazy指令, 滚动到可视区域后触发回调
_vue2.default.directive('lazy', {
    // 被绑定元素插入父节点时调用
    inserted: function inserted(el, binding, vnode) {
        el.lazyParams = binding.value;
        el.listener = new Listener(el, {
            callback: function callback(handler) {
                var flag = el.lazyParams.load.call(vnode.context, { el: el, param: el.lazyParams.loadParam });
                handler(flag);
            }
        });
        // 给 el 添加key
        if (vnode.key) {
            el.key = vnode.key;
        }
    },

    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
    update: function update(el, binding, vnode) {
        // 如果当前el的key没有变，那么不更新el
        if (vnode.key != el.key) {
            el.lazyParams = binding.value;
            el.listener.reset();
            el.key = vnode.key;
        }
    },

    // 只调用一次，指令与元素解绑时调用。
    unbind: function unbind(el, binding, vnode) {
        el.listener && el.listener.destroy();
    }
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(163);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * author: FxLsoft
 * 使用场景：
 *      局部展示Loading，在dom上绑定loading，实际参照Transaction Management里的Claim Transaction。
 * 技术：
 *      相对定位positiong: relative 和绝对定位 position: position 的完美应用。
 * 扩展：
 *      1、默认spinner
 *      2、可自定义模板 html （模板放在dom的loading-html属性里）
 *      3、可自定义文字 text (文字放在dom的loading-text属性里)
 */
var spinnerTmpl = '<div class="loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div>';
var textTmpl = '<div class="loading-text">{{text}}</div>';

_vue2.default.directive('loading', {
    bind: function bind(el, binding, vnode) {
        var text = el.getAttribute('loading-text');
        var html = el.getAttribute('loading-html');
        var mask = document.createElement('div');
        mask.classList.add('loading-mask');
        if (text) {
            mask.innerText = textTmpl.replace('{{text}}', text);
        } else if (html) {
            mask.innerHTML = html;
        } else {
            mask.innerHTML = spinnerTmpl;
        };
        el.classList.add('loading-parent');
        // 初始化判断是否隐藏
        mask.style.display = !!binding.value ? '' : 'none';
        // 如果要与vue-perfect-scroller插件兼容需要在这里进行判断
        _utils2.default.bind(el, 'scroll', function (e) {
            mask.style.top = el.scrollTop + 'px';
        });
        el.appendChild(mask);
        el.loading_mask = mask;
    },
    inserted: function inserted(el, binding) {},
    update: function update(el, binding) {
        el.loading_mask.style.display = !!binding.value ? '' : 'none';
    },
    unbind: function unbind(el) {}
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _Tip = __webpack_require__(68);

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTipInstance() {
    if (!getTipInstance.ins) {
        var TipClass = _vue2.default.component('Tip', _Tip2.default);
        getTipInstance.ins = new TipClass();
    }
    return getTipInstance.ins;
}

// 使相应的参数绑定到EL上
function dealElDataset(el, binding) {
    // el.dataset = el.dataset || {};
    if (typeof binding.value === 'string') {
        el.dataset.tip = binding.value;
        el.dataset.placement = '';
        el.dataset.maxWidth = '';
        el.dataset.maxHeight = '';
    } else if ((0, _typeof3.default)(binding.value) === 'object') {
        el.dataset.tip = binding.value.content;
        el.dataset.placement = binding.value.placement;
        el.dataset.maxWidth = binding.value.maxWidth;
        el.dataset.maxHeight = binding.value.maxHeight;
    }
}

/**
 * 指令 v-tip 有两种模式 根据周围空间进行自动方位调整 v-tip="content", 固定方向 v-tip="{content: '', placement: 'bottom', type: '', maxWidth: '280px', maxHeight: '380px'}"
 */
_vue2.default.directive('tip', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function inserted(el, binding) {
        var ins = getTipInstance();
        dealElDataset(el, binding);
        el.addEventListener('mouseover', function () {
            if (this.dataset.tip) {
                if (binding.value.hoverShowFull) {
                    if (el.offsetWidth >= el.scrollWidth) {
                        return;
                    }
                }
                ins.setHtml(this.dataset.tip);
                ins.setPlacement(this.dataset.placement);
                ins.setMaxWidth(this.dataset.maxWidth);
                ins.setMaxHeight(this.dataset.maxHeight);
                ins.$mount();
                document.body.appendChild(ins.$el);
                ins.show(el, this.dataset.tip);
                this.dataset.isShow = true;
            }
        });
        el.addEventListener('mouseout', function () {
            ins.hide();
            this.dataset.isShow = false;
        });
    },
    update: function update(el, binding) {
        dealElDataset(el, binding);
        if (el.dataset.isShow === true || el.dataset.isShow === 'true') {
            var ins = getTipInstance();
            if (el.dataset.tip) {
                ins.setHtml(el.dataset.tip);
                ins.setPlacement(el.dataset.placement);
                ins.setMaxWidth(el.dataset.maxWidth);
                ins.setMaxHeight(el.dataset.maxHeight);
                document.body.appendChild(ins.$el);
                ins.$mount();
                ins.show(el, el.dataset.tip);
            } else {
                ins.hide();
                el.dataset.isShow = false;
            }
        }
    },
    unbind: function unbind(el) {
        if (el.dataset.isShow === true || el.dataset.isShow === 'true') {
            var ins = getTipInstance();
            ins.hide();
        }
    }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(41);
var $keys = __webpack_require__(16);

__webpack_require__(70)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "div",
        {
          staticClass: "com-tip",
          on: { mouseenter: _vm.tipEnter, mouseleave: _vm.hide }
        },
        [
          _c(
            "VuePerfectScrollbar",
            {
              style: { "max-width": _vm.maxWidth, "max-height": _vm.maxHeight }
            },
            [_c("div", { domProps: { innerHTML: _vm._s(_vm.html) } })]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4641b144", esExports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _normalizeWheel = __webpack_require__(172);

var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
    if (element && element.addEventListener) {
        element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
            var normalized = (0, _normalizeWheel2.default)(event);
            callback && callback.apply(this, [event, normalized]);
        });
    }
};

_vue2.default.directive('mousewheel', {
    bind: function bind(el, binding) {
        mousewheel(el, binding.value);
    }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */



var UserAgent_DEPRECATED = __webpack_require__(174);

var isEventSupported = __webpack_require__(175);


// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

module.exports = normalizeWheel;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

module.exports = UserAgent_DEPRECATED;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */



var ExecutionEnvironment = __webpack_require__(176);

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */



var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isInteger = __webpack_require__(178);

var _isInteger2 = _interopRequireDefault(_isInteger);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _format = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 时间格式化 | date_format('yyyy-MM-ss hh:mm:ss')
_vue2.default.filter('date_format', function (value, format) {
    if ((0, _isInteger2.default)(value)) {
        return new Date(value).Format(format);
    }
    return '';
});
/**
 * | number
 * 1234567 => 1,234,567
 */
_vue2.default.filter('number', function (value) {
    return _format.formats.number(value);
});
/**
 * 1234567 => $1.2M
 */
_vue2.default.filter('dollar_unit', function (value) {
    return _format.formats.dollar_unit(value);
});
/**
 * 1234567 => 1.2M
 */
_vue2.default.filter('dollar_number', function (value) {
    return _format.formats.dollar_unit(value, null, null, "");
});
/**
 * 12.3434 => $12.34
 */
_vue2.default.filter('dollar_fixed', function (value) {
    return _format.formats.dollar_unit(value, "-", 2, "$", false);
});
_vue2.default.filter('dynamicFilter', function (value, type) {
    var filterCur = _vue2.default.filter(type);
    return filterCur(value);
});
/**
 * 0.34567 => 34.57%
 */
_vue2.default.filter('percent', function (value) {
    return _format.formats.percent(value, "-", 2);
});

_vue2.default.filter('recent_time', function (value, isAb) {
    var date = new Date(),
        tDate = new Date(value),
        long = date.getTime() - tDate.getTime();
    var s = Math.floor(long / 1000) || 1,
        min = Math.floor(long / (60 * 1000)),
        h = Math.floor(long / (60 * 60 * 1000)),
        d = Math.floor(long / (24 * 60 * 60 * 1000)),
        m = Math.floor(long / (30 * 24 * 60 * 60 * 1000)),
        y = Math.floor(long / (12 * 30 * 24 * 60 * 60 * 1000));
    if (y == -1) {
        return 'Just Now';
    }
    if (y) {
        return tDate.FormatStd();
    }
    if (m) {
        return isAb ? m + (m > 1 ? " ms ago" : " m ago") : m + (m > 1 ? " months ago" : " month ago");
    }
    if (d) {
        return isAb ? d + (d > 1 ? " ds ago" : " d ago") : d + (d > 1 ? " days ago" : " day ago");
    }
    if (h) {
        return isAb ? h + (h > 1 ? " hrs ago" : " hr ago") : h + (h > 1 ? " hours ago" : " hour ago");
    }
    if (min) {
        return isAb ? min + (min > 1 ? " mins ago" : " min ago") : min + (min > 1 ? " minutes ago" : " minute ago");
    }
    if (s) {
        return 'Just Now';
    }
    return "";
});
_vue2.default.filter('zero_to', function (value, type) {
    if (value == null || typeof value === 'undefined' || value == -1) {
        return type || '-';
    }
    return value;
});
// 不显示 时分秒
_vue2.default.filter('active_time', function (value) {
    var timeStr = _vue2.default.filter('recent_time')(value);
    var timeArray = timeStr.split(' ');
    return timeStr.indexOf(',') > -1 ? timeArray[0] + ' ' + timeArray[1] + ' ' + timeArray[2] : timeStr;
});

var IMG_COMPRESS_REGEX = /(cdn|image).chime.me\S*[\\|\/]original_/;
_vue2.default.filter('img_compress', function (url) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 135;

    if (IMG_COMPRESS_REGEX.test(url)) {
        return url.replace('original_', 'w' + width + '_original_');
    }
    return url;
});

_vue2.default.filter('phone', function (value) {
    if (/^[0-9]{10}$/.test(value)) {
        return value.replace(/(\d{3})(\d{3})(\d{4})/g, "$1-$2-$3");
    } else {
        return value;
    }
});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
module.exports = __webpack_require__(1).Number.isInteger;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(5);

$export($export.S, 'Number', { isInteger: __webpack_require__(181) });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(9);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 指令名称：v-eventoutside
 * 指令参数：{mode: click | move, inCallback: function, outCallback: function}
 * 参数说明：mode 事件类型，只有click和move两种，默认为 click(click 单击模式  move Hover模式)
 *          inCallback function类型 绑定的元素本身被触发事件回调（click 模式下，元素本身被触发click事件；move 模式下，元素本身触发mouseenter）
 *          outCallback function类型 在绑定的元素之外触发事件回调（click 模式下，document的mouseup事件触发，但是触发事件的元素不包括本身，move 模式下，元素本身触发mouseleave事件）
 *          被绑定的元素包括真实的dom已经通过Popper被append到body下的Dom，可以参考dropdown控件
 * 使用场景：tip控件 dropdown控件 select控件
 * 使用场景说明：组件本身触发事件进行相关逻辑处理，并且组件本身也要接收到组件外触发的事件进行相应的逻辑，比如单击组件，组件做什么，在组件外单击，组件做什么。
 */
var nodeList = [];
var ctx = '@@eventoutsideContext';

var startClick = void 0;
var seed = 0;
var time = 100;

_utils2.default.bind(document, 'mousedown', function (e) {
    return startClick = e;
});

_utils2.default.bind(document, 'mouseup', function (e) {
    nodeList.forEach(function (node) {
        return node[ctx].documentHandler(e, startClick);
    });
});

// click mode需要执行的逻辑（绑定本身的click事件并且创建本身之外的事件队列）
function createDocumentHandler(el, binding, vnode) {
    if (!el.__hasBindEvent) {
        var eventClick = function eventClick(e) {
            el.$outsidestatus = 'in';
            el[ctx].inCallback && el[ctx].inCallback.call(vnode.context);
        };
        _utils2.default.bind(el, 'click', eventClick);
        if (!el.__event) {
            el.__event = [];
        }
        el.__event.push({
            type: 'click',
            method: eventClick
        });
        el.__hasBindEvent = true;
    }
    return function () {
        var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target)) || el.$outsidestatus === 'out') return;
        // outCallback 在外面点击进行回调
        el.$outsidestatus = 'out';
        el[ctx].outCallback && el[ctx].outCallback.call(vnode.context);
    };
}

// 删除相关事件（mouseenter, mouseleave, click）
function removeEvent(el) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // click模式
    var len = nodeList.length;
    for (var i = 0; i < len; i++) {
        if (el[ctx] && nodeList[i][ctx].id === el[ctx].id) {
            nodeList.splice(i, 1);
            break;
        }
    }
    delete el[ctx];
    // move模式
    [el, context.popperElm].forEach(function (element) {
        if (!element || !element.__event) return;
        (element.__event || []).forEach(function (event) {
            _utils2.default.unbind(element, event.type, event.method);
        });
        element.__event = [];
        element.__hasBindEvent = false;
    });
}

// 更新事件（更新的是mouseenter, mouseleave）
function updateMoveEvent(el, binding, vnode) {
    if (!vnode || !vnode.context) return;
    [el, vnode.context.popperElm].forEach(function (element) {
        if (!element || element.__hasBindEvent) return;
        element.__hasBindEvent = true;
        var eventIn = function eventIn(e) {
            if (typeof binding.value.inCallback === 'function' && el.$outsidestatus !== 'in') {
                binding.value.inCallback.call(vnode.context);
            }
            el.$outsidestatus = 'in';
            if (el.$timeoutid) {
                clearTimeout(el.$timeoutid);
            }
        };
        var eventOut = function eventOut(e) {
            if (typeof binding.value.outCallback === 'function' && el.$outsidestatus === 'in') {
                el.$timeoutid = setTimeout(function () {
                    if (el.$outsidestatus === 'in') return;
                    var rect = element.getBoundingClientRect();
                    if (rect.left <= e.clientX && rect.left + rect.width >= e.clientX && rect.top <= e.clientY && rect.top + rect.height >= e.clientY) {
                        // 处理window下的chrome点击会触发mouseleave的bug, 坐标还在element范围内不触发
                        return;
                    }
                    binding.value.outCallback.call(vnode.context);
                }, time);
                el.$outsidestatus = 'out';
            }
        };
        _utils2.default.bind(element, 'mouseenter', eventIn);
        _utils2.default.bind(element, 'mouseleave', eventOut);
        if (!element.__event) {
            element.__event = [];
        }
        element.__event.push({
            type: 'mouseenter',
            method: eventIn
        });
        element.__event.push({
            type: 'mouseleave',
            method: eventOut
        });
    });
}

// 更新指令相关事件（Click | Move）
function updateEvent(el, binding, vnode) {
    removeEvent(el, vnode.context);
    if ((0, _typeof3.default)(binding.value) === 'object' && binding.value.mode !== 'move') {
        nodeList.push(el);
        el[ctx] = {
            id: el.__id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            inCallback: binding.value.inCallback,
            outCallback: binding.value.outCallback
        };
    } else if ((0, _typeof3.default)(binding.value) === 'object' && binding.value.mode === 'move') {
        updateMoveEvent(el, binding, vnode);
    }
}
/**
 * v-eventoutside
 * mode: {click | move} 默认为click
 * inCallback: {function}
 * outCallback: {function}
 */
_vue2.default.directive('eventoutside', {
    bind: function bind(el, binding, vnode) {
        var id = seed++;
        el.__id = id;
        updateEvent(el, binding, vnode);
    },
    update: function update(el, binding, vnode) {
        updateEvent(el, binding, vnode);
    },
    unbind: function unbind(el) {
        // 移除事件
        removeEvent(el);
    }
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(71);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(72);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _alert2 = __webpack_require__(186);

var _alert3 = _interopRequireDefault(_alert2);

var _confirm2 = __webpack_require__(189);

var _confirm3 = _interopRequireDefault(_confirm2);

var _VideoPop = __webpack_require__(76);

var _VideoPop2 = _interopRequireDefault(_VideoPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 当前创建的弹窗列表
var pops = {};

var popMgr = {
    /**
     * 手动创建弹框实例
     * @param popConfig 弹框配置, 通常可以传引用的vue弹窗配置文件
     * @return 返回弹窗实例, 可以调用此实例上的方法, 或者注册事件
     * 注意: 1. 如果没有特殊需求,popConfig里面都应该有name配置, 在调用此方法时相同name的弹框不会创建多次
     *      2. 在弹窗实例中注入destroy方法
     */
    create: function create(popConfig) {
        if (popConfig.name && pops[popConfig.name]) {
            return pops[popConfig.name];
        }
        var pop = _vue2.default.extend(popConfig);
        var ins = new pop();
        ins.$mount();
        document.body.appendChild(ins.$el);
        if (popConfig.name) {
            pops[popConfig.name] = ins;
        }
        // 注入destroy方法(不用了可以调用这个方法销毁实例)
        ins.destroy = function () {
            document.body.removeChild(ins.$el);
            ins.$destroy();
            pops[popConfig.name] = undefined;
        };
        return ins;
    },
    /**
     * alert弹框
     */
    alert: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
            var desc = _ref2.desc,
                okCallback = _ref2.okCallback,
                _ref2$okText = _ref2.okText,
                okText = _ref2$okText === undefined ? 'Ok' : _ref2$okText;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt('return', new _promise2.default(function (res) {
                                var ins = popMgr.create(_alert3.default);
                                ins.$once('close', function () {
                                    res(false);
                                    ins.$off('ok');
                                });
                                ins.$once('ok', function () {
                                    res(true);
                                    okCallback && okCallback();
                                    ins.$off('close');
                                });
                                ins.desc = desc;
                                ins.okText = okText;
                                ins.isShow = true;
                            }));

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function alert(_x) {
            return _ref.apply(this, arguments);
        }

        return alert;
    }(),
    /**
     * confirm弹框
     */
    confirm: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {
            var desc = _ref4.desc,
                cls = _ref4.cls,
                okCallback = _ref4.okCallback,
                _ref4$okText = _ref4.okText,
                okText = _ref4$okText === undefined ? 'Ok' : _ref4$okText,
                _ref4$cancelText = _ref4.cancelText,
                cancelText = _ref4$cancelText === undefined ? 'Cancel' : _ref4$cancelText;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', new _promise2.default(function (res) {
                                var ins = popMgr.create(_confirm3.default);
                                ins.$once('close', function () {
                                    res(false);
                                    ins.$off('ok');
                                });
                                ins.$once('ok', function () {
                                    res(true);
                                    okCallback && okCallback();
                                    ins.$off('close');
                                });
                                ins.desc = desc;
                                ins.cls = cls;
                                ins.okText = okText;
                                ins.cancelText = cancelText;
                                ins.isShow = true;
                            }));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function confirm(_x2) {
            return _ref3.apply(this, arguments);
        }

        return confirm;
    }(),
    /**
     * 播放视频
     */
    video: function video(_ref5) {
        var videoSrc = _ref5.videoSrc,
            title = _ref5.title,
            _ref5$type = _ref5.type,
            type = _ref5$type === undefined ? 'video/mp4' : _ref5$type,
            height = _ref5.height,
            posterSrc = _ref5.posterSrc;

        var ins = popMgr.create(_VideoPop2.default);
        ins.videoSrc = videoSrc;
        ins.title = title;
        ins.type = type;
        ins.height = height;
        ins.isShow = true;
        ins.posterSrc = posterSrc;
    }
};

exports.default = popMgr;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(185);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fcb3f370_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_alert_vue__ = __webpack_require__(188);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fcb3f370_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PopWin/alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fcb3f370", Component.options)
  } else {
    hotAPI.reload("data-v-fcb3f370", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isShowPopWin,
          expression: "isShowPopWin"
        }
      ],
      ref: "popwin",
      staticClass: "com-popwin",
      class: { "pop-mask": _vm.isShow }
    },
    [
      _c("transition", { attrs: { name: _vm.fadeOut ? "popwin-fade" : "" } }, [
        _vm.isShow
          ? _c(
              "div",
              { class: ["pop-container", _vm.containerClass] },
              [
                _c(
                  "div",
                  {
                    staticClass: "pop-title",
                    class: [_vm.titleClass, { "no-border": !_vm.title }]
                  },
                  [
                    _vm._t("title", [
                      _c("div", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "icon2017 icon-cancel_bold",
                      on: { click: _vm.close }
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.isUserScroller
                  ? _c(
                      "VuePerfectScrollbar",
                      {
                        ref: "scroller",
                        staticClass: "pop-body",
                        attrs: { settings: { minScrollbarLength: 50 } },
                        on: {
                          "ps-scroll-x": _vm.bodyScroll,
                          "ps-scroll-y": _vm.bodyScroll
                        }
                      },
                      [_vm._t("content")],
                      2
                    )
                  : _c(
                      "div",
                      { ref: "scroller", staticClass: "pop-body" },
                      [_vm._t("content")],
                      2
                    ),
                _vm._v(" "),
                _c("div", { staticClass: "pop-footer" }, [_vm._t("footer")], 2)
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-aea20a84", esExports)
  }
}

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "PopWin",
    {
      staticClass: "pop-top",
      attrs: { isShow: _vm.isShow, isUserScroller: false },
      on: { close: _vm.close }
    },
    [
      _c("template", { slot: "content" }, [
        _c("div", { staticClass: "confirm" }, [
          _c("p", {
            staticClass: "desc",
            domProps: { innerHTML: _vm._s(_vm.desc) }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "chime-btn primary",
            domProps: { textContent: _vm._s(_vm.okText) },
            on: { click: _vm.ok }
          })
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-fcb3f370", esExports)
  }
}

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3c434cac_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_confirm_vue__ = __webpack_require__(190);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_confirm_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3c434cac_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_confirm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PopWin/confirm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c434cac", Component.options)
  } else {
    hotAPI.reload("data-v-3c434cac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "PopWin",
    {
      staticClass: "pop-top",
      attrs: { isShow: _vm.isShow, isUserScroller: false },
      on: { close: _vm.close }
    },
    [
      _c("template", { slot: "content" }, [
        _c("div", { staticClass: "confirm", class: _vm.cls }, [
          _c("p", {
            staticClass: "desc",
            domProps: { innerHTML: _vm._s(_vm.desc) }
          }),
          _vm._v(" "),
          _c("div", [
            _vm.cancelText
              ? _c("div", {
                  staticClass: "chime-btn default",
                  domProps: { textContent: _vm._s(_vm.cancelText) },
                  on: { click: _vm.close }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.okText
              ? _c("div", {
                  staticClass: "chime-btn primary",
                  domProps: { textContent: _vm._s(_vm.okText) },
                  on: { click: _vm.ok }
                })
              : _vm._e()
          ])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3c434cac", esExports)
  }
}

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    directives: [
      {
        name: "loading",
        rawName: "v-loading",
        value: _vm.loading,
        expression: "loading"
      }
    ],
    staticClass: "com-video-player",
    style: _vm.style
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4a030682", esExports)
  }
}

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isShow,
          expression: "isShow"
        }
      ],
      staticClass: "com-video-pop"
    },
    [
      _c("transition", { attrs: { name: "popwin-fade" } }, [
        _vm.isShow
          ? _c("div", { staticClass: "video-container" }, [
              _c("div", { staticClass: "video-header" }, [
                _c("h3", [_vm._v(_vm._s(_vm.title))]),
                _vm._v(" "),
                _c("i", {
                  staticClass: "icon2017 icon-cancel_bold",
                  attrs: { title: "Close" },
                  on: { click: _vm.close }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "video-body" },
                [
                  _c("VideoPlayer", {
                    attrs: {
                      height: _vm.height,
                      videoSrc: _vm.videoSrc,
                      posterSrc: _vm.posterSrc,
                      autoplay: _vm.autoplay
                    }
                  })
                ],
                1
              )
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-47feff09", esExports)
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(194);
var bytesToUuid = __webpack_require__(195);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ba3f12d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(198);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ba3f12d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CheckBox/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba3f12d4", Component.options)
  } else {
    hotAPI.reload("data-v-ba3f12d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "com-checkbox",
      class: { active: _vm.realChecked, disabled: _vm.isDisabled },
      on: {
        click: function($event) {
          _vm.check($event)
        }
      }
    },
    [
      _c("span", { staticClass: "checkbox-check" }),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "checkbox-label" },
        [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ba3f12d4", esExports)
  }
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58f5e072_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(207);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_58f5e072_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DataTable/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58f5e072", Component.options)
  } else {
    hotAPI.reload("data-v-58f5e072", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

var _tableColumn = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assignWithoutEmpty(target, obj) {
    if (arguments.length > 2) {
        for (var i = 1; i < arguments.length; i++) {
            assignWithoutEmpty(target, arguments[i]);
        }
    } else {
        if (obj) {
            (0, _keys2.default)(obj).forEach(function (key) {
                if (obj[key] !== undefined) {
                    target[key] = obj[key];
                }
            });
        }
    }
    return target;
}

/** 
 * 主要用于在DataTable的几个组件模块之间做数据关联
 * @param table 表示DataTable组件实例
 * @param context 数据上下文(几个组件模块之间都要用的一些数据)
 */
var TableStore = function TableStore(table, context) {
    this.table = table;
    this.sort = context.sort;
    this.columnCfg = [];
};

TableStore.prototype = {
    // 注册<DataTableColumn>的配置信息
    registerColumnCfg: function registerColumnCfg(column) {
        var index;
        if (column.name) {
            index = this.columnCfg.findIndex(function (it) {
                return it.name === column.name;
            });
        } else {
            index = this.columnCfg.findIndex(function (it) {
                return it.__component === column.__component;
            });
        }
        // 不能重复注册
        if (index === -1) {
            this.columnCfg.push(column);
        } else {
            this.columnCfg.splice(index, 1, column);
        }
    },
    // 删除<DataTableColumn>的配置信息
    delColumnCfg: function delColumnCfg(column) {
        var index;
        if (column.name) {
            index = this.columnCfg.findIndex(function (it) {
                return it.name === column.name;
            });
        } else {
            index = this.columnCfg.findIndex(function (it) {
                return it.__component === column.__component;
            });
        }
        if (index !== -1) {
            this.columnCfg.splice(index, 1);
            this.genColumnItems();
        }
    },
    // 根据table.props.columns和this.columnCfg生成table.realColumns
    genColumnItems: function genColumnItems() {
        var _this = this;

        if (this.table.columns) {
            this.table.realColumns = this.table.columns.map(function (col) {
                var config = _this.columnCfg.find(function (it) {
                    return it.name === col.name;
                });
                var realColumn = assignWithoutEmpty({}, _tableColumn.defaultColumnProps, config, col);
                if (!realColumn.render) {
                    realColumn.render = _tableColumn.renderFactory[realColumn.type]();
                }
                return realColumn;
            });
        } else {
            this.table.realColumns = this.columnCfg;
        }
        return this.table.realColumns;
    },
    /**
     * 点击表头的排序
     * @param sortField 表示排序字段
     * @param sortOrders 表示排序类型 eg: ['asc', 'desc', '']
     */
    beginSort: function beginSort(sortField, sortOrders) {
        var sort;
        if (this.sort && this.sort.key === sortField) {
            var index = sortOrders.indexOf(this.sort.order);
            var nextIndex = index === sortOrders.length - 1 ? 0 : index + 1;
            sort = {
                key: sortField,
                order: sortOrders[nextIndex]
            };
        } else {
            sort = {
                key: sortField,
                order: sortOrders[0] || ''
            };
        }
        this.setSort(sort);
        this.table.$emit('sortchange', sort);
    },
    /**
     * 设置表头排序
     * @param sort 排序信息
     */
    setSort: function setSort(sort) {
        this.sort = sort;
    },
    /**
     * 勾选了选择项
     * @param dataItem 选择项
     * @param checked true为勾选,false为取消勾选
     */
    checkItem: function checkItem(dataItem, checked) {
        dataItem.checked = checked;
        this.table.$emit('selectchange', {
            selections: this.table.dataSource.filter(function (item) {
                return item.checked;
            }).map(function (item) {
                return item.data;
            }),
            addedItems: checked ? [dataItem.data] : [],
            removedItems: checked ? [] : [dataItem.data]
        });
    },
    /**
     * 勾选了全选
     * @param checked true为勾选,false为取消勾选
     */
    checkAllItem: function checkAllItem(checked) {
        var addedItems = [],
            removedItems = [];
        for (var i = 0; i < this.table.dataSource.length; i++) {
            var item = this.table.dataSource[i];
            if (checked && !item.checked) {
                addedItems.push(item.data);
            } else if (!checked && item.checked) {
                removedItems.push(item.data);
            }
            item.checked = checked;
        }
        this.table.$emit('selectchange', {
            selections: checked ? this.table.dataSource.map(function (item) {
                return item.data;
            }) : [],
            addedItems: addedItems,
            removedItems: removedItems
        });
    }
};

exports.default = TableStore;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool = __webpack_require__(48);

exports.default = {
    props: ['store', 'sort'],
    render: function render(h) {
        var _this = this;

        return h(
            'div',
            { 'class': 'com-datatable-header' },
            [[this.store.table.selectAll ? h(
                'div',
                { 'class': ['table-cell', 'head-cell', 'table-check-cell', this.store.table.hasLeftFreeze ? 'freeze-cell' : ''] },
                [h('span', {
                    on: {
                        'click': this.store.checkAllItem.bind(this.store, !this.checkedAll)
                    },
                    'class': ['checkbox', this.checkedAll ? 'checked' : ''] })]
            ) : '', this._l(this.columns, function (column, index) {
                return column.hidden ? '' : h(
                    'div',
                    { 'class': ['table-cell', 'head-cell', index < _this.store.table.leftFreeze ? 'freeze-cell' : '', index === _this.LastIdx4LeftFz ? 'freeze-last' : ''], style: (0, _tool.getTableCellStyle)(column) },
                    [h(
                        'div',
                        { 'class': 'cell', style: (0, _tool.getHeadCellStyle)(column) },
                        [column.sort ? h(
                            'div',
                            {
                                on: {
                                    'click': _this.store.beginSort.bind(_this.store, column.sort, column.sortOrders)
                                },
                                'class': ['sort', _this.sort && _this.sort.key === column.sort ? _this.sort.order : ''] },
                            [column.render.head(h, column)]
                        ) : column.sortGroup.length > 0 ? h(
                            'div',
                            { 'class': ['sort', _this.sort && !!column.sortGroup.find(function (s) {
                                    return s.key === _this.sort.key;
                                }) ? _this.sort.order : ''] },
                            [[column.render.head(h, column), h(
                                'div',
                                { 'class': 'sort-menu' },
                                [h(
                                    'div',
                                    { 'class': 'sort-menu-wrap' },
                                    [_this._l(column.sortGroup, function (subSort) {
                                        return h(
                                            'div',
                                            { 'class': ['sort-menu-item', _this.sort && _this.sort.key === subSort.key ? _this.sort.order : ''], on: {
                                                    'click': _this.store.beginSort.bind(_this.store, subSort.key, column.sortOrders)
                                                }
                                            },
                                            ['Sort by ', subSort.label]
                                        );
                                    })]
                                )]
                            )]]
                        ) : column.render.head(h, column)]
                    )]
                );
            })]]
        );
    },
    computed: {
        columns: function columns() {
            return this.store.table.realColumns;
        },

        // 是否勾上全选
        checkedAll: function checkedAll() {
            return this.store.table.dataSource.length > 0 && this.store.table.dataSource.length === this.store.table.dataSource.filter(function (item) {
                return item.checked;
            }).length;
        },

        // 最后一个固定列的索引位置(没有固定列返回-1)
        LastIdx4LeftFz: function LastIdx4LeftFz() {
            return this.store.table.hasLeftFreeze ? this.store.table.leftFreeze - 1 : -1;
        }
    }
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool = __webpack_require__(48);

exports.default = {
    props: ['store', 'data'],
    render: function render(h) {
        var _this = this;

        return h(
            'div',
            { 'class': 'com-datatable-body', on: {
                    'mouseout': this.store.table.enterRow.bind(this.store.table, -1)
                }
            },
            [this._l(this.data, function (rowData, rowIndex) {
                return [h(
                    'div',
                    { 'class': 'com-datatable-row', on: {
                            'mouseover': _this.store.table.enterRow.bind(_this.store.table, rowIndex),
                            'click': _this.store.table.extendRow.bind(_this.store.table, rowIndex, !rowData.extend)
                        }
                    },
                    [[_this.store.table.selectAll ? h(
                        'div',
                        { 'class': ['table-cell', 'body-cell', 'table-check-cell', _this.store.table.hasLeftFreeze ? 'freeze-cell' : ''] },
                        [h('span', {
                            on: {
                                'click': _this.store.checkItem.bind(_this.store, rowData, !rowData.checked)
                            },
                            'class': ['checkbox', rowData.checked ? 'checked' : ''] })]
                    ) : '', _this._l(_this.columns, function (column, index) {
                        return column.hidden ? '' : h(
                            'div',
                            { 'class': ['table-cell', column.cellClass, index < _this.store.table.leftFreeze ? 'freeze-cell' : '', index === _this.LastIdx4LeftFz ? 'freeze-last' : ''], style: (0, _tool.getTableCellStyle)(column) },
                            [h(
                                'div',
                                { 'class': 'cell', style: (0, _tool.getCellStyle)(column) },
                                [column.render.cell(h, column, rowData, index, rowIndex)]
                            )]
                        );
                    })]]
                ), _this.store.table.subRowField ? _this._l(rowData.data[_this.store.table.subRowField] || [], function (subRowData) {
                    return rowData.extend ? h(
                        'div',
                        { 'class': ["com-datatable-sub-row", _this.store.table.subRowClass] },
                        [[_this.store.table.selectAll ? h('div', { 'class': ['table-cell', 'body-cell', 'table-check-cell', _this.store.table.hasLeftFreeze ? 'freeze-cell' : ''] }) : '', _this._l(_this.columns, function (column, index) {
                            return column.hidden ? '' : h(
                                'div',
                                { 'class': ['table-cell', column.cellClass, index < _this.store.table.leftFreeze ? 'freeze-cell' : '', index === _this.LastIdx4LeftFz ? 'freeze-last' : ''], style: (0, _tool.getTableCellStyle)(column) },
                                [h(
                                    'div',
                                    { 'class': 'cell' },
                                    [column.render.subRowCell(h, column, subRowData, index, rowIndex)]
                                )]
                            );
                        })]]
                    ) : '';
                }) : ''];
            })]
        );
    },
    computed: {
        columns: function columns() {
            return this.store.table.realColumns;
        },

        // 最后一个固定列的索引位置(没有固定列返回-1)
        LastIdx4LeftFz: function LastIdx4LeftFz() {
            return this.store.table.hasLeftFreeze ? this.store.table.leftFreeze - 1 : -1;
        }
    }
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _isNan = __webpack_require__(204);

var _isNan2 = _interopRequireDefault(_isNan);

var _tool = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['store', 'data', 'summaryFormat', 'summaryText'],
    render: function render(h) {
        var _this = this;

        return h(
            'div',
            { 'class': 'com-datatable-footer' },
            [[this.store.table.selectAll ? h('div', { 'class': ['table-cell', 'footer-cell', 'table-check-cell', this.store.table.hasLeftFreeze ? 'freeze-cell' : ''] }) : '', this._l(this.columns, function (column, index) {
                return column.hidden ? '' : h(
                    'div',
                    { 'class': ["table-cell", "footer-cell", index < _this.store.table.leftFreeze ? 'freeze-cell' : '', index === _this.LastIdx4LeftFz ? 'freeze-last' : ''], style: (0, _tool.getTableCellStyle)(column) },
                    [h('div', { 'class': 'cell', style: (0, _tool.getCellStyle)(column), domProps: {
                            'innerHTML': column.summary
                        }
                    })]
                );
            })]]
        );
    },
    computed: {
        columns: function columns() {
            var _this2 = this;

            if (this.data.length === 0) return [];
            var columns = [];
            var out = [];
            var data = this.store.table.selectAll ? this.data.map(function (v) {
                return v.data;
            }) : this.data;
            if (typeof this.summaryFormat === 'function') {
                out = this.summaryFormat(this.store.table.realColumns, data);
            } else {
                out = [this.summaryText];
                // 合计列

                var _loop = function _loop(i) {
                    var field = _this2.store.table.realColumns[i].field;
                    if (_this2.store.table.realColumns[i].isNumber && field) {
                        var total = 0;
                        data.forEach(function (v) {
                            if (!(0, _isNan2.default)(+v[field])) {
                                total += +v[field];
                            }
                        });
                        out.push(total);
                    } else {
                        out.push(' ');
                    }
                };

                for (var i = 1; i < this.store.table.realColumns.length; i++) {
                    _loop(i);
                }
            }
            this.store.table.realColumns.forEach(function (column, index) {
                columns.push((0, _assign2.default)({}, column, {
                    summary: out[index] || ''
                }));
            });
            return columns;
        },

        // 最后一个固定列的索引位置(没有固定列返回-1)
        LastIdx4LeftFz: function LastIdx4LeftFz() {
            return this.store.table.hasLeftFreeze ? this.store.table.leftFreeze - 1 : -1;
        }
    }
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
module.exports = __webpack_require__(1).Number.isNaN;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(5);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "table",
      class: [
        "com-datatable",
        "com-datatable-border",
        _vm.className,
        _vm.hasHscrollBar ? "h-scroll-bar" : ""
      ]
    },
    [
      _c("div", { staticStyle: { display: "none" } }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "com-datatable-header-wrap" },
        [
          _c("TableHead", {
            directives: [
              {
                name: "mousewheel",
                rawName: "v-mousewheel",
                value: _vm.freezeBodyScroll,
                expression: "freezeBodyScroll"
              }
            ],
            ref: "header",
            style: _vm.style,
            attrs: { store: _vm.store, sort: _vm.store.sort }
          }),
          _vm._v(" "),
          _vm.hasLeftFreeze
            ? _c("TableHead", {
                directives: [
                  {
                    name: "mousewheel",
                    rawName: "v-mousewheel",
                    value: _vm.freezeBodyScroll,
                    expression: "freezeBodyScroll"
                  }
                ],
                staticClass: "freeze-left",
                style: _vm.freezeStyle,
                attrs: { store: _vm.store, sort: _vm.store.sort }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "com-datatable-main" }, [
        _c(
          "div",
          {
            ref: "bodyWrap",
            staticClass: "com-datatable-body-wrap __scroll_view__"
          },
          [
            _c("TableBody", {
              ref: "body",
              style: {
                "min-width": _vm.bodyMinWidth - _vm.barWidth + "px",
                height: _vm.freezeHeight
              },
              attrs: { store: _vm.store, data: _vm.dataSource }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.hasLeftFreeze
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "mousewheel",
                    rawName: "v-mousewheel",
                    value: _vm.freezeBodyScroll,
                    expression: "freezeBodyScroll"
                  }
                ],
                ref: "freezeWrap",
                staticClass: "freeze-left __scroll_view__",
                style: {
                  width: _vm.leftFreezeWidth + "px",
                  height: _vm.freezeHeight
                }
              },
              [
                _c("TableBody", {
                  style: { "min-width": _vm.freezeBodyMinWidth + "px" },
                  attrs: { store: _vm.store, data: _vm.dataSource }
                })
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.showSummary
        ? _c(
            "div",
            { staticClass: "com-datatable-footer-wrap" },
            [
              _c("TableFooter", {
                ref: "footer",
                style: _vm.style,
                attrs: {
                  store: _vm.store,
                  data: _vm.dataSource,
                  summaryFormat: _vm.summaryFormat,
                  summaryText: _vm.summaryText
                }
              }),
              _vm._v(" "),
              _vm.hasLeftFreeze
                ? _c("TableFooter", {
                    staticClass: "freeze-left",
                    style: _vm.freezeStyle,
                    attrs: {
                      store: _vm.store,
                      data: _vm.dataSource,
                      summaryFormat: _vm.summaryFormat,
                      summaryText: _vm.summaryText
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "loading",
          staticClass: "infinity-load",
          class: {
            show:
              _vm.infinityLoadStatus === "loading" && _vm.dataSource.length > 0
          }
        },
        [_vm._t("loadingText", [_vm._v("loading...")])],
        2
      ),
      _vm._v(" "),
      _vm.dataSource.length === 0
        ? _c("div", { staticClass: "com-datatable-empty-wrap" }, [
            _c(
              "span",
              { staticClass: "empty-text" },
              [_vm._t("emptyContent", [_vm._v(_vm._s(_vm.emptyText))])],
              2
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-58f5e072", esExports)
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopperJS = __webpack_require__(209);

var stop = function stop(e) {
    return e.stopPropagation();
};

var PopupManager = {
    zIndex: 2000,
    nextZIndex: function nextZIndex() {
        return PopupManager.zIndex++;
    }

    /**
     * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
     * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
     * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
     * @param {Boolean} [visible=false] Visibility of the popup element.
     * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
     */
};exports.default = {
    props: {
        transformOrigin: {
            type: [Boolean, String],
            default: true
        },
        placement: {
            type: String,
            default: 'bottom-start'
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        reference: {},
        popper: {},
        offset: {
            default: 0
        },
        value: Boolean,
        visibleArrow: Boolean,
        arrowOffset: {
            type: Number,
            default: 35
        },
        transition: String,
        appendToBody: {
            type: Boolean,
            default: true
        },
        // width 是否继承
        isInheritWidth: {
            type: Boolean,
            default: false
        },
        popperOptions: {
            type: Object,
            default: function _default() {
                return {
                    gpuAcceleration: false
                };
            }
        }
    },

    data: function data() {
        return {
            showPopper: false,
            currentPlacement: ''
        };
    },


    watch: {
        value: {
            immediate: true,
            handler: function handler(val) {
                this.showPopper = val;
                this.$emit('input', val);
            }
        },

        showPopper: function showPopper(val) {
            val ? this.updatePopper() : this.destroyPopper();
            this.$emit('input', val);
        }
    },
    mounted: function mounted() {
        // this.createPopper();
    },

    methods: {
        createPopper: function createPopper() {
            var _this = this;

            if (this.$isServer) return;
            this.currentPlacement = this.currentPlacement || this.placement;
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
                return;
            }

            var options = this.popperOptions;
            var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
            var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

            if (!reference && this.$slots.reference && this.$slots.reference[0]) {
                reference = this.referenceElm = this.$slots.reference[0].elm;
            }

            if (!popper || !reference) return;
            if (this.visibleArrow) this.appendArrow(popper);
            if (this.appendToBody) document.body.appendChild(this.popperElm);
            if (this.popperJS && this.popperJS.destroy) {
                this.popperJS.destroy();
            }

            options.placement = this.currentPlacement;
            options.offset = this.offset;
            options.arrowOffset = this.arrowOffset;
            options.boundariesPadding = this.boundariesPadding;
            options.isInheritWidth = this.isInheritWidth;
            // 先设置宽度，防止计算位置时，下拉菜单宽度没有定被内容过长的子元素撑大，而导致计算位置有问题
            if (this.isInheritWidth) {
                var rect = reference.getBoundingClientRect();
                var width = rect.right - rect.left;
                popper.style.width = width + 'px';
            }
            this.popperJS = new PopperJS(reference, popper, options);
            this.popperJS.onCreate(function (_) {
                _this.$emit('created', _this);
                _this.resetTransformOrigin();
                _this.$nextTick(_this.updatePopper);
            });
            if (typeof options.onUpdate === 'function') {
                this.popperJS.onUpdate(options.onUpdate);
            }
            this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
            this.popperElm.addEventListener('click', stop);
        },
        updatePopper: function updatePopper() {
            var popperJS = this.popperJS;
            if (popperJS) {
                popperJS.update(true);
                if (popperJS._popper) {
                    popperJS._popper.style.zIndex = PopupManager.nextZIndex();
                }
            } else {
                this.createPopper();
            }
        },
        doDestroy: function doDestroy(forceDestroy) {
            /* istanbul ignore if */
            if (!this.popperJS || this.showPopper && !forceDestroy) return;
            this.popperJS.destroy();
            this.popperJS = null;
        },
        destroyPopper: function destroyPopper() {
            if (this.popperJS) {
                this.resetTransformOrigin();
            }
        },
        resetTransformOrigin: function resetTransformOrigin() {
            if (!this.transformOrigin) return;
            var placementMap = {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left'
            };
            var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
            var origin = placementMap[placement];
            this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
        },
        appendArrow: function appendArrow(element) {
            var hash = void 0;
            if (this.appended) {
                return;
            }

            this.appended = true;

            for (var item in element.attributes) {
                if (/^_v-/.test(element.attributes[item].name)) {
                    hash = element.attributes[item].name;
                    break;
                }
            }

            var arrow = document.createElement('div');

            if (hash) {
                arrow.setAttribute(hash, '');
            }
            arrow.setAttribute('x-arrow', '');
            arrow.className = 'popper__arrow';
            element.appendChild(arrow);
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.doDestroy(true);
        if (this.popperElm && this.popperElm.parentNode === document.body) {
            this.popperElm.removeEventListener('click', stop);
            document.body.removeChild(this.popperElm);
        }
    },


    // call destroy in keep-alive mode
    deactivated: function deactivated() {
        this.$options.beforeDestroy[0].call(this);
    }
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _getOwnPropertyDescriptor = __webpack_require__(210);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _keys = __webpack_require__(31);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(19);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Popper = factory();
    }
})(undefined, function () {

    'use strict';

    var root = window;

    // default options
    var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',

        gpuAcceleration: true,

        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,

        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',

        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,

        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        arrowOffset: 0,

        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    };

    /**
     * Create a new Popper.js instance
     * @constructor Popper
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement|Object} popper
     *      The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
     * @param {Object} options
     * @param {String} [options.placement=bottom]
     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
     *      left(-start, -end)`
     *
     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
     *      reference element.
     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
     *
     * @param {Boolean} [options.gpuAcceleration=true]
     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
     *      browser to use the GPU to accelerate the rendering.
     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
     *
     * @param {Number} [options.offset=0]
     *      Amount of pixels the popper will be shifted (can be negative).
     *
     * @param {String|Element} [options.boundariesElement='viewport']
     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
     *      of the defined boundaries (except if `keepTogether` is enabled)
     *
     * @param {Number} [options.boundariesPadding=5]
     *      Additional padding for the boundaries
     *
     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
     *      this means that the last ones will never overflow
     *
     * @param {String|Array} [options.flipBehavior='flip']
     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
     *      its axis (`right - left`, `top - bottom`).
     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
     *
     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
     *      to this array to edit the offsets and placement.
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Array} [options.modifiersIgnored=[]]
     *      Put here any built-in modifier name you want to exclude from the modifiers list
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Boolean} [options.removeOnDestroy=false]
     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
     */
    function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {};

        // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined
        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
        }
        // otherwise, use the given HTMLElement as popper
        else {
                this._popper = popper.jquery ? popper[0] : popper;
            }

        // with {} we create a new object with the options inside it
        this._options = (0, _assign2.default)({}, DEFAULTS, options);

        // refactoring modifiers' list
        this._options.modifiers = this._options.modifiers.map(function (modifier) {
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement);
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier;
        }.bind(this));

        // make sure to apply the popper position before any computation
        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, { position: this.state.position, top: 0 });

        // fire the first update to position the popper in the right place
        this.update();

        // setup event listeners, they will take care of update the position in specific situations
        this._setupEventListeners();
        return this;
    }

    //
    // Methods
    //
    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement');
        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';
        this._removeEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        if (this._options.removeOnDestroy) {
            this._popper.remove();
        }
        return this;
    };

    /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * @method
     * @memberof Popper
     */
    Popper.prototype.update = function (isForce) {
        var data = { instance: this, styles: {} };

        // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value

        // 如果popper已经被隐藏了，那么不需要更新他们
        if (this._popper.style.display === 'none' && isForce !== true) {
            return;
        }

        // 判断reference是否在 parentScroller里，如果在那么显示，如果不在那么隐藏掉
        var target = getScrollParent(this._reference);
        var isInView = checkElInView(this._reference, target);
        if (!isInView) {
            this._popper.style.visibility = 'hidden';
        } else {
            this._popper.style.visibility = '';
        }
        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement;

        // compute the popper and reference offsets and put them inside data.offsets
        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

        if (this._options.isInheritWidth) {
            data.styles.width = data.offsets.reference.width;
        }
        // get boundaries
        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
        }
    };

    /**
     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onCreate = function (callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this);
        return this;
    };

    /**
     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
     * used to style popper and its arrow.
     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback;
        return this;
    };

    /**
     * Helper used to generate poppers from a configuration file
     * @method
     * @memberof Popper
     * @param config {Object} configuration
     * @returns {HTMLElement} popper
     */
    Popper.prototype.parse = function (config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
        };
        config = (0, _assign2.default)({}, defaultConfig, config);

        var d = root.document;

        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        } else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
        } else {
            popper.textContent = config.content;
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent;

        // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error
        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
        }
        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent
        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
        }

        // append the generated popper to its parent
        parent.appendChild(popper);

        return popper;

        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */
        function addClassNames(element, classNames) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }

        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */
        function addAttributes(element, attributes) {
            attributes.forEach(function (attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
        }
    };

    /**
     * Helper used to get the position which will be applied to the popper
     * @method
     * @memberof Popper
     * @param config {HTMLElement} popper element
     * @param reference {HTMLElement} reference element
     * @returns {String} position
     */
    Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
            return 'absolute';
        }

        // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
        var isParentFixed = isFixed(reference, container);
        return isParentFixed ? 'fixed' : 'absolute';
    };

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper
     * @access private
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};

        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed';

        //
        // Get reference element position
        //
        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

        //
        // Get popper sizes
        //
        var popperRect = getOuterSizes(popper);

        //
        // Compute offsets of popper
        //

        // depending by the popper placement we have to compute its offsets slightly differently
        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
                popperOffsets.left = referenceOffsets.right;
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
                popperOffsets.top = referenceOffsets.bottom;
            }
        }

        // Add width and height to our offsets object
        popperOffsets.width = popperRect.width;
        popperOffsets.height = popperRect.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    };

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._setupEventListeners = function () {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound);
        // if the boundariesElement is window we don't need to listen for the scroll event
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = target;
        }
    };

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._removeEventListeners = function () {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound);
        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = null;
        }
        this.state.updateBound = null;
    };

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper
     * @access private
     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
     * @param {Number} padding - Boundaries padding
     * @param {Element} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {};
        var width, height;
        if (boundariesElement === 'window') {
            var body = root.document.body,
                html = root.document.documentElement;

            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            };
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function getScrollTopValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
            };
            var getScrollLeftValue = function getScrollLeftValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
            };

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            };
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                };
            } else {
                boundaries = getOffsetRect(boundariesElement);
            }
        }
        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
    };

    /**
     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
     * @method
     * @memberof Popper
     * @access public
     * @param {Object} data
     * @param {Array} modifiers
     * @param {Function} ends
     */
    Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data);
            }
        }.bind(this));

        return data;
    };

    /**
     * Helper used to know if the given modifier depends from another one.
     * @method
     * @memberof Popper
     * @param {String} requesting - name of requesting modifier
     * @param {String} requested - name of requested modifier
     * @returns {Boolean}
     */
    Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested;
        }).length;
    };

    //
    // Modifiers
    //

    /**
     * Modifiers list
     * @namespace Popper.modifiers
     * @memberof Popper
     * @type {Object}
     */
    Popper.prototype.modifiers = {};

    /**
     * Apply the computed styles to the popper element
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The same data object
     */
    Popper.prototype.modifiers.applyStyle = function (data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
            position: data.offsets.popper.position
        };

        // round top and left to avoid blurry text
        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top);

        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed
        var prefixedProperty;
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
        }
        // othwerise, we use the standard `left` and `top` properties
        else {
                styles.left = left;
                styles.top = top;
            }

        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        (0, _assign2.default)(styles, data.styles);

        setStyle(this._popper, styles);

        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here
        this._popper.setAttribute('x-placement', data.placement);

        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
    };

    /**
     * Modifier used to shift the popper on the start or end of its reference element side
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1];

        // if shift shiftVariation is specified, run the modifier
        if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);

            var shiftOffsets = {
                y: {
                    start: { top: reference.top },
                    end: { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start: { left: reference.left },
                    end: { left: reference.left + reference.width - popper.width }
                }
            };

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

            data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
    };

    /**
     * Modifier used to make sure the popper does not overflows from it's boundaries
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);

        var check = {
            left: function left() {
                var left = popper.left;
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left);
                }
                return { left: left };
            },
            right: function right() {
                var left = popper.left;
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width);
                }
                return { left: left };
            },
            top: function top() {
                var top = popper.top;
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top);
                }
                return { top: top };
            },
            bottom: function bottom() {
                var top = popper.top;
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                }
                return { top: top };
            }
        };

        order.forEach(function (direction) {
            data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
        });

        return data;
    };

    /**
     * Modifier used to make sure the popper is always near its reference
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
        }

        return data;
    };

    /**
     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
     * Requires the `preventOverflow` modifier before it in order to work.
     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.flip = function (data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];
        if (this._options.flipBehavior === 'flip') {
            flipOrder = [placement, placementOpposite];
        } else {
            flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = getPopperClientRect(data.offsets.popper);

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
                // we'll use this boolean to detect any flip loop
                data.flipped = true;
                data.placement = flipOrder[index + 1];
                if (variation) {
                    data.placement += '-' + variation;
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

                data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
        }.bind(this));
        return data;
    };

    /**
     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
     * The offsets will shift the popper on the side of its reference element.
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset;
        var popper = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
            popper.top += offset;
        } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
        } else if (data.placement.indexOf('top') !== -1) {
            popper.left += offset;
        } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
        }
        return data;
    };

    /**
     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement;
        var arrowOffset = this._options.arrowOffset;

        // if the arrowElement is a string, suppose it's a CSS selector
        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
        }

        // if arrow element is not found, don't run the modifier
        if (!arrow) {
            return data;
        }

        // the arrow element must be child of its popper
        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
        }

        // arrow depends on keepTogether in order to work
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
        }

        var arrowStyle = {};
        var placement = data.placement.split('-')[0];
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var side = isVertical ? 'top' : 'left';
        var translate = isVertical ? 'translateY' : 'translateX';
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowSize = getOuterSizes(arrow)[len];

        //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        }
        // bottom/right side
        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
        }

        // compute center of the popper
        var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);

        var sideValue = center - popper[side];

        // prevent arrow from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;

        return data;
    };

    //
    // Helpers
    //

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display,
            _visibility = element.style.visibility;
        element.style.display = 'block';element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth;

        // original method
        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

        // reset element styles
        element.style.display = _display;element.style.visibility = _visibility;
        return result;
    }

    /**
     * Get the opposite placement of the given one/
     * @function
     * @ignore
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
        });
    }

    /**
     * Given the popper offsets, generate an output similar to getBoundingClientRect
     * @function
     * @ignore
     * @argument {Object} popperOffsets
     * @returns {Object} ClientRect like output
     */
    function getPopperClientRect(popperOffsets) {
        var offsets = (0, _assign2.default)({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
    }

    /**
     * Given an array and the key to find, returns its index
     * @function
     * @ignore
     * @argument {Array} arr
     * @argument keyToFind
     * @returns index or null
     */
    function getArrayKeyIndex(arr, keyToFind) {
        var i = 0,
            key;
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i;
            }
            i++;
        }
        return null;
    }

    /**
     * Get CSS computed property of the given element
     * @function
     * @ignore
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null);
        return css[property];
    }

    /**
     * Returns the offset parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
    }

    /**
     * Returns the scrolling parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
            return element;
        }

        if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
                return root.document.body;
            } else {
                return root.document.documentElement;
            }
        }

        // Firefox want us to check `-x` and `-y` variations as well
        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent;
        }
        return getScrollParent(element.parentNode);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @function
     * @ignore
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
        if (element === root.document.body) {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return element.parentNode ? isFixed(element.parentNode) : element;
    }

    /**
     * Set the style to the given popper
     * @function
     * @ignore
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
     */
    function setStyle(element, styles) {
        function is_numeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }
        (0, _keys2.default)(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    /**
     * Check if the given variable is a function
     * @function
     * @ignore
     * @argument {*} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get the position of the given element, relative to its offset parent
     * @function
     * @ignore
     * @param {Element} element
     * @return {Object} position - Coordinates of the element and its `scrollTop`
     */
    function getOffsetRect(element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        };

        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height;

        // position
        return elementRect;
    }

    /**
     * Get bounding client rect of given element
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();

        // whether the IE version is lower than 11
        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

        // fix ie document bounding top always 0 bug
        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        };
    }

    /**
     * Given an element and one of its parents, return the offset
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     * @return {Object} rect
     */
    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: elementRect.top - parentRect.top + elementRect.height,
            right: elementRect.left - parentRect.left + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        };
        return rect;
    }

    /**
     * Get the prefixed supported property name
     * @function
     * @ignore
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase)
     */
    function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    /**
     *  检查el是否完全在view视图内
     *
     *  @param el {dom} 被检查的dom
     *  @param view {dom | window}
     *  @param preLoad {number} 进入因子
     */
    function checkElInView(el) {
        var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
        var preLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        if (!el) return;
        var viewRect = {};
        if (view === window || view === document || view.tagName.toUpperCase() === 'HTML') {
            viewRect = {
                left: 0,
                top: 0,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        } else {
            viewRect = view.getBoundingClientRect();
        }
        var rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            return false;
        }
        var isInView = rect.right >= viewRect.left && rect.bottom >= viewRect.top && rect.left <= viewRect.right && rect.top <= viewRect.bottom;
        return isInView;
    }
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
     * objects to a target object. It will return the target object.
     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     * @function
     * @ignore
     */
    if (!_assign2.default) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function value(target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object');
                }

                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) {
                        continue;
                    }
                    nextSource = Object(nextSource);

                    var keysArray = (0, _keys2.default)(nextSource);
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
        });
    }

    return Popper;
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(211), __esModule: true };

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(212);
var $Object = __webpack_require__(1).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(13);
var $getOwnPropertyDescriptor = __webpack_require__(60).f;

__webpack_require__(70)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "eventoutside",
          rawName: "v-eventoutside",
          value: {
            mode: _vm.clickMode ? "click" : "move",
            inCallback: _vm.handleIn,
            outCallback: _vm.handleOut
          },
          expression:
            "{mode: clickMode ? 'click' : 'move', inCallback: handleIn, outCallback: handleOut}"
        }
      ],
      staticClass: "com-dropdownbox",
      class: { open: _vm.isOpen, disabled: _vm.disabled }
    },
    [
      _c(
        "div",
        { ref: "reference", staticClass: "com-dropdown-body" },
        [
          _vm._t("body", [
            _c(
              "div",
              {
                staticClass: "com-dropdown-label",
                class: { noborder: _vm.noBorder }
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "com-dropdown-text",
                    attrs: { title: _vm.labelText }
                  },
                  [_vm._v(_vm._s(_vm.labelText))]
                ),
                _vm._v(" "),
                _c("i", {
                  class: ["icon", "icon-sel-triangle", _vm.trianglePosition]
                })
              ]
            )
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showPopper,
              expression: "showPopper"
            }
          ],
          ref: "popper",
          staticClass: "com-dropdown"
        },
        [
          _vm.hasArrow
            ? _c("div", { staticClass: "arrow", attrs: { "x-arrow": "" } })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "com-dropdown-content",
              class: _vm.dropdownCls + (_vm.hasArrow ? " has-arrow" : "")
            },
            [_vm._t("dropdown")],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-426e9cb8", esExports)
  }
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_72233bcd_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(216);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_72233bcd_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Pagination/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72233bcd", Component.options)
  } else {
    hotAPI.reload("data-v-72233bcd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "DropDown",
    {
      staticClass: "com-select",
      attrs: {
        disabled: _vm.disabled,
        isInheritWidth: _vm.isInheritWidth,
        offset: _vm.dropdownOffset,
        noBorder: _vm.noBorder,
        labelText: _vm.label,
        clickMode: _vm.clickMode,
        dropdownCls: _vm.dropdownClass,
        isOpen: _vm.isOpen,
        trianglePosition: _vm.trianglePosition,
        hasArrow: _vm.hasArrow
      },
      on: {
        "update:isOpen": function($event) {
          _vm.isOpen = $event
        }
      }
    },
    [
      _c(
        "template",
        { slot: "dropdown" },
        [
          _vm.searchOptions && _vm.searchOptions.show
            ? _c("div", { staticClass: "com-select-search" }, [
                _c("span", { staticClass: "icon2017 icon-search_01" }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.searchKey,
                      expression: "searchKey",
                      modifiers: { trim: true }
                    }
                  ],
                  ref: "searchKey",
                  staticClass: "search-key",
                  attrs: {
                    type: "text",
                    placeholder: _vm.searchOptions.placeholder
                  },
                  domProps: { value: _vm.searchKey },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchKey = $event.target.value.trim()
                    },
                    blur: function($event) {
                      _vm.$forceUpdate()
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.fmtDataSource.length > 0
            ? _c(
                "div",
                { staticClass: "com-select-list" },
                [
                  _vm.multi && _vm.showAll && _vm.searchKey === ""
                    ? _c(
                        "div",
                        {
                          staticClass: "com-select-item",
                          class: { active: _vm.allChecked },
                          on: { click: _vm.selectAll }
                        },
                        [
                          _c("span", {
                            staticClass: "com-select-item-checkbox"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "com-select-item-text" }, [
                            _vm._v("All")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.fmtDataSource, function(item, key) {
                    return [
                      item.isCategory
                        ? _c(
                            "div",
                            {
                              key: key,
                              staticClass: "com-select-category",
                              attrs: { title: item.content[_vm.displayMember] }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.content[_vm.displayMember]) +
                                  "\n                "
                              )
                            ]
                          )
                        : _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isShowItem(item),
                                  expression: "isShowItem(item)"
                                }
                              ],
                              key: key,
                              staticClass: "com-select-item",
                              class: { active: item.active },
                              on: {
                                click: function($event) {
                                  _vm.itemClick(item)
                                }
                              }
                            },
                            [
                              _vm.multi
                                ? _c("span", {
                                    staticClass: "com-select-item-checkbox"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._t(
                                "default",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "com-select-item-text",
                                      attrs: {
                                        title: item.content[_vm.displayMember]
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(item.content[_vm.displayMember])
                                      )
                                    ]
                                  )
                                ],
                                { option: item.content }
                              )
                            ],
                            2
                          )
                    ]
                  })
                ],
                2
              )
            : _c(
                "div",
                {
                  on: {
                    click: function($event) {
                      _vm.isOpen = false
                    }
                  }
                },
                [
                  _vm._t("empty", [
                    _c("div", { staticClass: "empty-data" }, [
                      _vm._v(
                        _vm._s(
                          _vm.loading
                            ? "loading..."
                            : _vm.emptyText || "No Data"
                        )
                      )
                    ])
                  ])
                ],
                2
              ),
          _vm._v(" "),
          _vm._t("bottom")
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-c4901aa2", esExports)
  }
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com-pagination" }, [
    _vm.showGuideArrow
      ? _c("i", {
          staticClass: "arrow icon2017 icon-arrow_01_left",
          class: { disabled: _vm.currentPage === 1 },
          on: {
            click: function($event) {
              _vm.getPrePage()
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "page-list", class: _vm.showGuideArrow ? "border" : "" },
      [
        _vm.totalPage > 0
          ? _c(
              "li",
              {
                class: { active: _vm.currentPage === 1 },
                on: {
                  click: function($event) {
                    _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.pageConfig.before.length > 0
          ? _c(
              "DropDown",
              {
                staticClass: "more-page",
                attrs: {
                  isOpen: _vm.isBeforeOpen,
                  dropdownCls: "com-pagination-dropdown chime-scroller",
                  noBorder: true,
                  clickMode: false,
                  labelText: "..."
                },
                on: {
                  "update:isOpen": function($event) {
                    _vm.isBeforeOpen = $event
                  }
                }
              },
              [
                _c(
                  "template",
                  { slot: "dropdown" },
                  _vm._l(_vm.pageConfig.before, function(item, index) {
                    return _c(
                      "a",
                      {
                        key: index,
                        on: {
                          click: function($event) {
                            _vm.pageChange(item)
                          },
                          touchend: function($event) {
                            _vm.pageChange(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  })
                )
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.pageConfig.list, function(page, idx) {
          return _c(
            "li",
            {
              key: idx,
              class: { active: _vm.currentPage === page },
              on: {
                click: function($event) {
                  _vm.pageChange(page)
                }
              }
            },
            [_vm._v(_vm._s(page))]
          )
        }),
        _vm._v(" "),
        _vm.pageConfig.after.length > 0
          ? _c(
              "DropDown",
              {
                staticClass: "more-page",
                attrs: {
                  isOpen: _vm.isAfterOpen,
                  dropdownCls: "com-pagination-dropdown chime-scroller",
                  noBorder: true,
                  clickMode: false,
                  labelText: "..."
                },
                on: {
                  "update:isOpen": function($event) {
                    _vm.isAfterOpen = $event
                  }
                }
              },
              [
                _c(
                  "template",
                  { slot: "dropdown" },
                  _vm._l(_vm.pageConfig.after, function(item, index) {
                    return _c(
                      "a",
                      {
                        key: index,
                        on: {
                          click: function($event) {
                            _vm.pageChange(item)
                          },
                          touchend: function($event) {
                            _vm.pageChange(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  })
                )
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.totalPage > 1
          ? _c(
              "li",
              {
                class: { active: _vm.currentPage === _vm.totalPage },
                on: {
                  click: function($event) {
                    _vm.pageChange(_vm.totalPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.totalPage))]
            )
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _vm.showGuideArrow
      ? _c("i", {
          staticClass: "arrow icon2017 icon-arrow_01_right",
          class: { disabled: this.currentPage === this.totalPage },
          on: {
            click: function($event) {
              _vm.getNextPage()
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.isShowOperator
      ? _c(
          "div",
          { staticClass: "operator" },
          [
            _c("span", { staticClass: "line" }),
            _vm._v(" "),
            _vm.showPageInput
              ? _c("input", {
                  staticClass: "chime-input go",
                  attrs: { type: "text", placeholder: "Go" },
                  domProps: { value: _vm.currentPage },
                  on: {
                    keydown: _vm.keydown,
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.setCurrentPage($event)
                    },
                    blur: _vm.setCurrentPage
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.showPageSize
              ? _c("Select", {
                  staticClass: "page-size",
                  attrs: { dataSource: _vm.pageSizes, value: _vm.pageSize },
                  on: { datachange: _vm.changeSize }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.perPageLabel && _vm.showPageSize
              ? _c("span", { staticClass: "per-label" }, [
                  _vm._v(_vm._s(_vm.perPageLabel))
                ])
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-72233bcd", esExports)
  }
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "com-query-select" },
    [
      _c("div", { staticClass: "content", class: { focus: _vm.isFocus } }, [
        _c("span", { ref: "icon", staticClass: "icon2017 icon-search_01" }),
        _vm._v(" "),
        _c("div", { ref: "slist", staticClass: "selected-list" }, [
          _vm.isShowTag
            ? _c(
                "div",
                { staticClass: "warpper" },
                _vm._l(_vm.realSelectedList, function(el, index) {
                  return _c("span", { key: index, staticClass: "selected" }, [
                    _c(
                      "span",
                      { staticClass: "text", attrs: { title: el.keyword } },
                      [_vm._v(_vm._s(el.keyword))]
                    ),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "icon2017 icon-cancel",
                      on: {
                        click: function($event) {
                          _vm.deleteEl(index)
                        }
                      }
                    })
                  ])
                })
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "eventoutside",
                rawName: "v-eventoutside",
                value: {
                  mode: "click",
                  outCallback: _vm.clickOut,
                  inCallback: _vm.contentClick
                },
                expression:
                  "{ mode: 'click', outCallback: clickOut, inCallback: contentClick }"
              }
            ],
            staticClass: "input-wrap"
          },
          [
            _c("input", {
              ref: "enter",
              staticClass: "enter",
              attrs: {
                maxlength: "100",
                type: "text",
                title: _vm.key,
                disabled: _vm.disabled
              },
              domProps: { value: _vm.key },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.enter($event)
                },
                blur: _vm.blur,
                input: _vm.input,
                focus: _vm.focus,
                keydown: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                      "Backspace",
                      "Delete"
                    ])
                  ) {
                    return null
                  }
                  _vm.del()
                }
              }
            }),
            _vm._v(" "),
            _vm.realSelectedList.length > 0 && _vm.isShowDelete
              ? _c("span", {
                  staticClass: "delete-btn icon2017 icon-cancel_02",
                  attrs: { title: "Clear" },
                  on: { click: _vm.deleteAll }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.isHidePlaceholder
              ? _c("div", { staticClass: "placeholder" }, [
                  _vm._v(_vm._s(_vm.placeholder))
                ])
              : _vm._e()
          ]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "zoom-in-top" } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showResult && _vm.inputKey,
                expression: "showResult && inputKey"
              }
            ],
            staticClass: "results"
          },
          [
            _vm._l(_vm.list, function(el, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "result",
                  on: {
                    mousedown: function($event) {
                      _vm.select(el)
                    }
                  }
                },
                [
                  _vm._t(
                    "default",
                    [
                      _c(
                        "span",
                        {
                          staticClass: "keyword",
                          attrs: { title: el.keyword }
                        },
                        [_vm._v(_vm._s(el.keyword))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "tag",
                          class: el.clazz,
                          attrs: { title: el.tag }
                        },
                        [_vm._v(_vm._s(el.tag))]
                      )
                    ],
                    { item: el }
                  )
                ],
                2
              )
            }),
            _vm._v(" "),
            _vm.list.length === 0 && !_vm.isLoading
              ? _c("li", { staticClass: "no-result" }, [
                  _vm._v("\n                No Results\n            ")
                ])
              : _vm.list.length === 0 && _vm.isLoading
                ? _c("li", { staticClass: "loading" }, [
                    _vm._v("\n                loading...\n            ")
                  ])
                : _vm._e()
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-78978932", esExports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(219);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _menu2.default;

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1f842c8f_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(223);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1f842c8f_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Menu/menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f842c8f", Component.options)
  } else {
    hotAPI.reload("data-v-1f842c8f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_menu_list_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Menu/menu-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0682e068", Component.options)
  } else {
    hotAPI.reload("data-v-0682e068", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(29);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = {
    beforeEnter: function beforeEnter(el) {
        _utils2.default.addClass(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },
    enter: function enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
    },
    afterEnter: function afterEnter(el) {
        // for safari: remove class then reset height is necessary
        _utils2.default.removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
        if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            _utils2.default.addClass(el, 'collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },
    afterLeave: function afterLeave(el) {
        _utils2.default.removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
}; // Thanks to https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
exports.default = {
    name: 'CollapseTransition',
    functional: true,
    render: function render(h, _ref) {
        var children = _ref.children;

        var data = {
            on: Transition
        };

        return h('transition', data, children);
    }
};

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "VuePerfectScrollbar",
    {
      ref: "scroller",
      staticClass: "com-menu-content",
      attrs: { settings: { minScrollbarLength: 50 } }
    },
    [
      _c(
        "MenuList",
        {
          attrs: { menuList: _vm.menuList, activeName: _vm.activeName },
          on: {
            "on-open-change": _vm.handleOpenChange,
            "on-select": _vm.handleSelect,
            updateScrollerBar: _vm.updateScrollerBar
          }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1f842c8f", esExports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_985d2afa_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(225);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_985d2afa_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/RadioBox/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-985d2afa", Component.options)
  } else {
    hotAPI.reload("data-v-985d2afa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "com-radiobox",
      class: { disabled: _vm.isDisabled },
      on: {
        click: function($event) {
          _vm.check($event)
        }
      }
    },
    [
      _c("span", {
        staticClass: "radio-input",
        class: { checked: _vm.checked }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.label,
              expression: "label"
            }
          ],
          staticClass: "radio-label"
        },
        [_vm._v(_vm._s(_vm.label))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-985d2afa", esExports)
  }
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_773fc72c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(227);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_773fc72c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Keyword/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-773fc72c", Component.options)
  } else {
    hotAPI.reload("data-v-773fc72c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com-keyword" }, [
    _c("div", { ref: "list", staticClass: "tag-list" }, [
      _c(
        "div",
        { staticClass: "warpper" },
        _vm._l(_vm.tagList, function(tag, index) {
          return _c(
            "span",
            {
              key: tag,
              class: ["tag", { invalid: _vm.verifyFun && !_vm.verifyFun(tag) }],
              attrs: { title: tag }
            },
            [
              _c("span", { class: ["text", { showfull: _vm.tagShowFull }] }, [
                _vm._v(_vm._s(tag))
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "icon2017 icon-cancel",
                on: {
                  click: function($event) {
                    _vm.deleteEl(index)
                  }
                }
              })
            ]
          )
        })
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "input-wrap", on: { click: _vm.contentClick } }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.realInput,
            expression: "realInput"
          }
        ],
        ref: "enter",
        staticClass: "enter",
        attrs: { type: "text" },
        domProps: { value: _vm.realInput },
        on: {
          keyup: function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.enter($event)
          },
          keydown: [
            _vm.keydown,
            function($event) {
              if (!("button" in $event) && $event.keyCode !== 8) {
                return null
              }
              return _vm.del($event)
            }
          ],
          focus: function($event) {
            _vm.isFocus = true
          },
          blur: function($event) {
            _vm.isFocus = false
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.realInput = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      !_vm.isHidePlaceholder
        ? _c("div", { staticClass: "placeholder" }, [
            _vm._v(_vm._s(_vm.placeholder))
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-773fc72c", esExports)
  }
}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_246b5340_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(229);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_246b5340_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Scroll/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-246b5340", Component.options)
  } else {
    hotAPI.reload("data-v-246b5340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com-scroll-wrap" }, [
    _c(
      "div",
      {
        ref: "srcollContainer",
        staticClass: "com-srcoll-container",
        style: _vm.containerCss,
        on: { scroll: _vm.onScroll, wheel: _vm.onWheel }
      },
      [
        _c("div", { ref: "scrollContent" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _c(
          "transition",
          {
            attrs: {
              name:
                _vm.loadingDirection === "top"
                  ? "com-slide-top"
                  : "com-slide-bottom"
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isLoading && _vm.showLoading,
                    expression: "isLoading && showLoading"
                  }
                ],
                class: [
                  _vm.loadingDirection === "top"
                    ? "com-scroll-loader-top"
                    : "com-scroll-loader-bottom"
                ]
              },
              [
                _c("img", {
                  staticClass: "com-scroll-loading",
                  attrs: {
                    src: "//static.chimeroi.com/crm/images/site/load.png"
                  }
                }),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.loadingText) +
                    "\n            "
                )
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-246b5340", esExports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_061fdcf5_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_DateTable_vue__ = __webpack_require__(231);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_DateTable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_061fdcf5_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_DateTable_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DatePicker/base/DateTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-061fdcf5", Component.options)
  } else {
    hotAPI.reload("data-v-061fdcf5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "com-calendar-table", class: _vm.getPositionClass() },
    [
      _c("table", { staticClass: "table-condensed" }, [
        _c("thead", [
          _c("tr", [
            _c(
              "th",
              {
                staticClass: "prev",
                class: {
                  available: _vm.isPrevAvailable,
                  disabled: _vm.isPreDisabled
                },
                on: { click: _vm.monthPrev }
              },
              [
                _vm.isPrevAvailable
                  ? _c("i", { staticClass: "icon2017 icon-arrow_01_left" })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c("th", { staticClass: "title", attrs: { colspan: "5" } }, [
              _c(
                "select",
                {
                  domProps: { value: _vm.month },
                  on: { change: _vm.selectMonth }
                },
                _vm._l(_vm.monthMap, function(el) {
                  return _c(
                    "option",
                    { key: el.v, domProps: { value: el.v } },
                    [_vm._v(_vm._s(el.m))]
                  )
                })
              ),
              _c(
                "select",
                {
                  domProps: { value: _vm.year },
                  on: { change: _vm.selectYear }
                },
                _vm._l(_vm.yearMap, function(el, index) {
                  return _c("option", { key: index, domProps: { value: el } }, [
                    _vm._v(_vm._s(el))
                  ])
                })
              )
            ]),
            _vm._v(" "),
            _c(
              "th",
              {
                staticClass: "next",
                class: {
                  available: _vm.isNextAvailable,
                  disabled: _vm.isNextDisabled
                },
                on: { click: _vm.monthNext }
              },
              [
                _vm.isNextAvailable
                  ? _c("i", { staticClass: "icon2017 icon-arrow_01_right" })
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "tr",
            _vm._l(_vm.WEEKS, function(week) {
              return _c("th", { key: week }, [_vm._v(_vm._s(week))])
            })
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          { on: { mousemove: _vm.handleMouseMove } },
          _vm._l(_vm.days, function(week, windex) {
            return _c(
              "tr",
              { key: windex },
              _vm._l(week, function(day) {
                return _c(
                  "td",
                  {
                    key: day.key,
                    staticClass: "cell",
                    class: _vm.getCellClasses(day),
                    on: {
                      click: function($event) {
                        _vm.dateClick(day)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(day.text) +
                        "\n                "
                    )
                  ]
                )
              })
            )
          })
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-061fdcf5", esExports)
  }
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com-date-picker" }, [
    _vm.showHead
      ? _c("div", { staticClass: "picker-header" }, [
          _c("div", { staticClass: "picker-input", class: _vm.selectionMode }, [
            _c("input", {
              attrs: { type: "text", title: _vm.format },
              domProps: { value: _vm.getStartDate },
              on: {
                blur: _vm.startDateBlur,
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.startDateBlur($event)
                }
              }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "icon2017 icon-calendar_04" })
          ]),
          _vm._v(" "),
          _vm.selectionMode === "range"
            ? _c("div", { staticClass: "picker-input" }, [
                _c("input", {
                  attrs: { type: "text", title: _vm.format },
                  domProps: { value: _vm.getEndDate },
                  on: {
                    blur: _vm.endDateBlur,
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.endDateBlur($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "icon2017 icon-calendar_04" })
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "picker-body", class: { "has-footer": _vm.hasFooter } },
      [
        _vm._l(_vm.pickNmuber, function(key, index) {
          return _c("DateTable", {
            key: key,
            attrs: {
              isPrevAvailable: index == 0,
              isNextAvailable: index === _vm.pickNmuber - 1,
              selectionMode: _vm.selectionMode,
              date: _vm.currentDate,
              rangeState: _vm.rangeState,
              startLimitDate: _vm.startLimitDate,
              endLimitDate: _vm.endLimitDate,
              standardDate: _vm.getDate(index)
            },
            on: {
              monthPrev: _vm.monthPrev,
              monthNext: _vm.monthNext,
              pick: _vm.pick,
              changerange: function($event) {
                _vm.rangeChange($event, index)
              },
              standardDateChange: function($event) {
                _vm.standardDateChange($event, index)
              }
            }
          })
        }),
        _vm._v(" "),
        _vm.hasFooter
          ? _c("div", { staticClass: "picker-footer" }, [
              _c(
                "button",
                {
                  staticClass: "chime-btn default picker-footer-btn",
                  on: { click: _vm.pickToday }
                },
                [_vm._v("Today")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "chime-btn default picker-footer-btn",
                  on: { click: _vm.clear }
                },
                [_vm._v("Clear")]
              )
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-da00f8e2", esExports)
  }
}

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_199304ab_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(234);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_199304ab_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/SelectDatePicker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-199304ab", Component.options)
  } else {
    hotAPI.reload("data-v-199304ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "DropDown",
    {
      staticClass: "com-select-datepicker",
      attrs: {
        disabled: _vm.disabled,
        isInheritWidth: _vm.isInheritWidth,
        noBorder: _vm.noBorder,
        clickMode: _vm.clickMode,
        dropdownCls: _vm.dropdownClass,
        isOpen: _vm.isOpen,
        hasArrow: _vm.hasArrow
      },
      on: {
        "update:isOpen": function($event) {
          _vm.isOpen = $event
        }
      }
    },
    [
      _c("template", { slot: "body" }, [
        _vm.selectionMode === "day"
          ? _c(
              "div",
              { staticClass: "com-dropdown-label", class: _vm.labelClazz },
              [
                _c("span", {
                  staticClass: "com-dropdown-text",
                  domProps: { innerHTML: _vm._s(_vm.label) }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "icon icon2017 icon-calendar_02" })
              ]
            )
          : _c(
              "div",
              { staticClass: "com-dropdown-label", class: _vm.selectionMode },
              [
                _c("span", {
                  staticClass: "icon icon2017 icon-calendar_02 left"
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "com-dropdown-text",
                  domProps: { innerHTML: _vm._s(_vm.label) }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "icon icon-sel-triangle right" })
              ]
            )
      ]),
      _vm._v(" "),
      _c(
        "template",
        { slot: "dropdown" },
        [
          _c("DatePicker", {
            attrs: {
              showHead: false,
              showFooter: _vm.showFooter,
              selectionMode: _vm.selectionMode,
              pickNmuber: _vm.pickNmuber,
              date: _vm.date,
              startDate: _vm.startDate,
              endDate: _vm.endDate,
              startLimitDate: _vm.startLimitDate,
              endLimitDate: _vm.endLimitDate
            },
            on: { pick: _vm.pickDate }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-199304ab", esExports)
  }
}

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_30b90974_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(242);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_30b90974_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Upload/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30b90974", Component.options)
  } else {
    hotAPI.reload("data-v-30b90974", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_SelectFile_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Upload/base/SelectFile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-672b34d8", Component.options)
  } else {
    hotAPI.reload("data-v-672b34d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 237 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_55d273b0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dragger_vue__ = __webpack_require__(239);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dragger_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_55d273b0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dragger_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Upload/base/dragger.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55d273b0", Component.options)
  } else {
    hotAPI.reload("data-v-55d273b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "upload-dragger",
      class: { "is-dragover": _vm.dragover },
      on: {
        drop: function($event) {
          $event.preventDefault()
          return _vm.onDrop($event)
        },
        dragover: function($event) {
          $event.preventDefault()
          return _vm.onDragover($event)
        },
        dragleave: function($event) {
          $event.preventDefault()
          _vm.dragover = false
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-55d273b0", esExports)
  }
}

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5fae7c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_cropper_vue__ = __webpack_require__(241);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_cropper_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5fae7c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_cropper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Upload/base/cropper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fae7c1d", Component.options)
  } else {
    hotAPI.reload("data-v-5fae7c1d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "cropper",
      staticClass: "com-vue-cropper",
      on: { mouseover: _vm.scaleImg, mouseout: _vm.cancleScale }
    },
    [
      _c("div", { staticClass: "cropper-box" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loading,
                expression: "!loading"
              }
            ],
            staticClass: "cropper-box-canvas",
            style: {
              width: _vm.trueWidth + "px",
              height: _vm.trueHeight + "px",
              transform:
                "scale(" +
                _vm.scale +
                "," +
                _vm.scale +
                ") " +
                "translate3d(" +
                _vm.x / _vm.scale +
                "px," +
                _vm.y / _vm.scale +
                "px," +
                "0)" +
                "rotateZ(" +
                _vm.rotate * 90 +
                "deg)"
            }
          },
          [
            _c("img", {
              ref: "cropperImg",
              attrs: { src: _vm.imgs, alt: "cropper-img" }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "cropper-drag-box",
        class: {
          "cropper-move": _vm.move && !_vm.crop,
          "cropper-crop": _vm.crop,
          "cropper-modal": _vm.cropping
        },
        on: { mousedown: _vm.startMove, touchstart: _vm.startMove }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.cropping,
              expression: "cropping"
            }
          ],
          staticClass: "cropper-crop-box",
          style: {
            width: _vm.cropW + "px",
            height: _vm.cropH + "px",
            transform:
              "translate3d(" +
              _vm.cropOffsertX +
              "px," +
              _vm.cropOffsertY +
              "px," +
              "0)"
          }
        },
        [
          _c("span", { staticClass: "cropper-view-box" }, [
            _c("img", {
              style: {
                width: _vm.trueWidth + "px",
                height: _vm.trueHeight + "px",
                transform:
                  "scale(" +
                  _vm.scale +
                  "," +
                  _vm.scale +
                  ") " +
                  "translate3d(" +
                  (_vm.x - _vm.cropOffsertX) / _vm.scale +
                  "px," +
                  (_vm.y - _vm.cropOffsertY) / _vm.scale +
                  "px," +
                  "0)" +
                  "rotateZ(" +
                  _vm.rotate * 90 +
                  "deg)"
              },
              attrs: { src: _vm.imgs, alt: "cropper-img" }
            })
          ]),
          _vm._v(" "),
          _c("span", {
            staticClass: "cropper-face cropper-move",
            on: { mousedown: _vm.cropMove, touchstart: _vm.cropMove }
          }),
          _vm._v(" "),
          _vm.info
            ? _c(
                "span",
                { staticClass: "crop-info", style: { top: _vm.cropInfo } },
                [
                  _vm._v(
                    _vm._s(this.cropW > 0 ? this.cropW : 0) +
                      " × " +
                      _vm._s(this.cropH > 0 ? this.cropH : 0)
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.fixedBox
            ? _c("span", [
                _c("span", {
                  staticClass: "crop-line line-w",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 1)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 1)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-line line-a",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, false, 1, 0)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, false, 1, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-line line-s",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 2)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 2)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-line line-d",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, false, 2, 0)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, false, 2, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point1",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, true, 1, 1)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, true, 1, 1)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point2",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 1)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 1)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point3",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, true, 2, 1)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, true, 2, 1)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point4",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, false, 1, 0)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, false, 1, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point5",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, false, 2, 0)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, false, 2, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point6",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, true, 1, 2)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, true, 1, 2)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point7",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 2)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, false, true, 0, 2)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "crop-point point8",
                  on: {
                    mousedown: function($event) {
                      _vm.changeCropSize($event, true, true, 2, 2)
                    },
                    touchstart: function($event) {
                      _vm.changeCropSize($event, true, true, 2, 2)
                    }
                  }
                })
              ])
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5fae7c1d", esExports)
  }
}

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com-upload" }, [
    _c(
      "div",
      { staticClass: "panel-multi-pic" },
      [
        _vm._l(_vm.imageList, function(imgObj, index) {
          return _c("li", { key: index, staticClass: "panel-item-pic" }, [
            _c("div", { staticClass: "panel-pic-box" }, [
              _c("img", { attrs: { src: imgObj.src } }),
              _vm._v(" "),
              _c("div", { staticClass: "panel-pic-edit" }, [
                index !== 0
                  ? _c(
                      "div",
                      {
                        staticClass: "btn top-item",
                        attrs: { title: "move up" },
                        on: {
                          click: function($event) {
                            _vm.picTop(index)
                          }
                        }
                      },
                      [_c("i", { staticClass: "icon2017 icon-arrow_04_up_1" })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "btn replace-item",
                    attrs: { title: "replace" },
                    on: {
                      click: function($event) {
                        _vm.replaceImage(index)
                      }
                    }
                  },
                  [_c("i", { staticClass: "icon2017 icon-retry" })]
                ),
                _vm._v(" "),
                _vm.isCanEdit(imgObj.src)
                  ? _c(
                      "div",
                      {
                        staticClass: "btn edit-item",
                        attrs: { title: "edit" },
                        on: {
                          click: function($event) {
                            _vm.editImage(index)
                          }
                        }
                      },
                      [_c("i", { staticClass: "icon2017 icon-edit_01" })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "btn delete-item",
                    attrs: { title: "delete" },
                    on: {
                      click: function($event) {
                        _vm.deleteImage(index)
                      }
                    }
                  },
                  [_c("i", { staticClass: "icon2017 icon-delete_01" })]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" })
            ])
          ])
        }),
        _vm._v(" "),
        _c("SelectFile", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: false,
              expression: "false"
            }
          ],
          ref: "selectFile",
          attrs: { multiple: _vm.multiple },
          on: {
            onSelect: function($event) {
              _vm.fileSelected($event, _vm.selectIndex)
            }
          }
        }),
        _vm._v(" "),
        _vm.imageList.length < _vm.limit
          ? _c(
              "SelectFile",
              {
                attrs: { multiple: _vm.multiple, drag: true },
                on: { onSelect: _vm.fileSelected }
              },
              [
                _vm._t("default", [
                  _c("div", { staticClass: "add-pic" }, [
                    _c("span", { staticClass: "icon2017 icon-add_bold" })
                  ])
                ])
              ],
              2
            )
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _vm.useCropper && _vm.openCrop
      ? _c("div", { staticClass: "crop-pop" }, [
          _c("div", { staticClass: "crop-shadow" }),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "crop-dialog" },
            [
              _c("span", {
                staticClass: "icon2017 icon-cancel_bold",
                attrs: { title: "close" },
                on: { click: _vm.closeCrop }
              }),
              _vm._v(" "),
              _c("Cropper", {
                ref: "cropper",
                attrs: { img: _vm.cropperImg.src, fixedBox: _vm.fixedBox }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "btn-container" }, [
                _c("span", {
                  staticClass: "icon2017 icon-magnifier_remove",
                  attrs: {
                    "data-method": "zoom",
                    "data-option": "0.1",
                    title: "Zoom In"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("zoom", 100)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-magnifier_add",
                  attrs: {
                    "data-method": "zoom",
                    "data-option": "-0.1",
                    title: "Zoom Out"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("zoom", -100)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-arrow_04_left_1",
                  attrs: {
                    "data-method": "move",
                    "data-option": "-10",
                    "data-second-option": "0",
                    title: "Move Left"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("move", -10, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-arrow_04_right",
                  attrs: {
                    "data-method": "move",
                    "data-option": "10",
                    "data-second-option": "0",
                    title: "Move Right"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("move", 10, 0)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-arrow_04_up_1",
                  attrs: {
                    "data-method": "move",
                    "data-option": "0",
                    "data-second-option": "-10",
                    title: "Move Up"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("move", 0, -10)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-arrow_04_down_1",
                  attrs: {
                    "data-method": "move",
                    "data-option": "0",
                    "data-second-option": "10",
                    title: "Move Down"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("move", 0, 10)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-retry",
                  attrs: {
                    "data-method": "rotate",
                    "data-option": "-45",
                    title: "Rotate Left"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("rotate", -45)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-retry",
                  staticStyle: { transform: "scale(-1,1)" },
                  attrs: {
                    "data-method": "rotate",
                    "data-option": "45",
                    title: "Rotate Right"
                  },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("rotate", 45)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-action_redo",
                  attrs: { "data-method": "reset", title: "Reset" },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("reset", -0.1)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "icon2017 icon-checked_bold",
                  attrs: { "data-method": "done", title: "Done" },
                  on: {
                    click: function($event) {
                      _vm.cropOperate("done", -0.1)
                    }
                  }
                })
              ])
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-30b90974", esExports)
  }
}

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5c2e0cca_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(244);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5c2e0cca_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AddressSuggestion/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c2e0cca", Component.options)
  } else {
    hotAPI.reload("data-v-5c2e0cca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("QuerySelect", {
    staticClass: "com-address-suggestion",
    attrs: {
      isClearAfterSelected: false,
      list: _vm.address.list,
      selectedList: _vm.address.selected,
      inputKey: _vm.address.key,
      disabled: _vm.disabled,
      isLoading: _vm.address.isLoading,
      isShowTag: false,
      isShowDelete: _vm.isShowDelete,
      placeholder: _vm.placeholder
    },
    on: {
      blur: _vm.blur,
      input: _vm.search,
      onSelectChange: _vm.selecteChange
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(data) {
          return [
            _c("p", { staticClass: "address", attrs: { title: data.item } }, [
              _vm._v(_vm._s(data.item))
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5c2e0cca", esExports)
  }
}

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_09551ec0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(246);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_09551ec0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Progress/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09551ec0", Component.options)
  } else {
    hotAPI.reload("data-v-09551ec0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "com-progress",
      class: [
        "progress-" + _vm.type,
        _vm.status ? "is-" + _vm.status : "",
        _vm.showText && _vm.type === "line" ? "progress-" + _vm.placement : ""
      ]
    },
    [
      _vm.showText && !_vm.textInside && _vm.placement === "left"
        ? _c(
            "div",
            { staticClass: "progress-text", style: _vm.textStyle },
            [
              _vm._t("default", [
                !_vm.status
                  ? [_vm._v(_vm._s(_vm.percentage) + "%")]
                  : _c("i", { staticClass: "icon2017", class: _vm.iconClass })
              ])
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "line"
        ? _c("div", { staticClass: "progress-bar" }, [
            _c(
              "div",
              {
                staticClass: "progress-bar-outer",
                style: { height: _vm.strokeWidth + "px" },
                attrs: { title: _vm.percentage + "%" }
              },
              [
                _c(
                  "div",
                  { staticClass: "progress-bar-inner", style: _vm.barStyle },
                  [
                    _vm.showText && _vm.textInside
                      ? _c("div", { staticClass: "progress-bar-innerText" }, [
                          _vm._v(_vm._s(_vm.percentage) + "%")
                        ])
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        : _c(
            "div",
            {
              staticClass: "progress-circle",
              style: { height: _vm.width + "px", width: _vm.width + "px" },
              attrs: { title: _vm.percentage + "%" }
            },
            [
              _c("svg", { attrs: { viewBox: "0 0 100 100" } }, [
                _c("path", {
                  staticClass: "progress-circle__track",
                  attrs: {
                    d: _vm.trackPath,
                    stroke: _vm.bgColor,
                    "stroke-width": _vm.relativeStrokeWidth,
                    fill: "none"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "progress-circle__path",
                  style: _vm.circlePathStyle,
                  attrs: {
                    d: _vm.trackPath,
                    stroke: _vm.stroke,
                    "stroke-width": _vm.relativeStrokeWidth,
                    fill: "none"
                  }
                })
              ])
            ]
          ),
      _vm._v(" "),
      _vm.showText && !_vm.textInside && _vm.placement === "right"
        ? _c(
            "div",
            { staticClass: "progress-text", style: _vm.textStyle },
            [
              _vm._t("default", [
                !_vm.status
                  ? _c("span", [_vm._v(_vm._s(_vm.percentage) + "%")])
                  : _c("i", { staticClass: "icon2017", class: _vm.iconClass })
              ])
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-09551ec0", esExports)
  }
}

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1a72c8ae_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(248);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1a72c8ae_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/TimePicker/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a72c8ae", Component.options)
  } else {
    hotAPI.reload("data-v-1a72c8ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "DropDown",
    {
      staticClass: "com-time-picker",
      attrs: {
        disabled: _vm.disabled,
        isInheritWidth: false,
        offset: _vm.offset,
        noBorder: _vm.noBorder,
        labelText: _vm.labelText,
        clickMode: _vm.clickMode,
        dropdownCls: _vm.dropdownClass,
        isOpen: _vm.isOpen
      },
      on: {
        "update:isOpen": function($event) {
          _vm.isOpen = $event
        }
      }
    },
    [
      _c("template", { slot: "dropdown" }, [
        _c("div", { staticClass: "tp-panel" }, [
          _c("div", { staticClass: "tp-header" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.headerText) +
                "\n                "
            ),
            _c("i", {
              staticClass: "icon2017 icon-cancel_02",
              attrs: { title: "Cancel" },
              on: {
                click: function($event) {
                  _vm.close()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tp-content" }, [
            _c("div", { staticClass: "tp-hours" }, [
              _c("label", [_vm._v("hours")]),
              _vm._v(" "),
              _c("div", { staticClass: "tp-am-pm" }, [
                _c(
                  "a",
                  {
                    staticClass: "tp-am",
                    class: _vm.p === "AM" ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.p = "AM"
                      }
                    }
                  },
                  [_vm._v("AM")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "tp-pm",
                    class: _vm.p === "PM" ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.p = "PM"
                      }
                    }
                  },
                  [_vm._v("PM")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tp-hours-panel" },
                _vm._l(12, function(hour, index) {
                  return _c(
                    "a",
                    {
                      key: index,
                      class: _vm.hours === hour ? "active" : "",
                      on: {
                        click: function($event) {
                          _vm.hours = hour
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.cover(hour)))]
                  )
                })
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "split" }),
            _vm._v(" "),
            _c("div", { staticClass: "tp-minutes" }, [
              _c("label", [_vm._v("minutes")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tp-minutes-panel" },
                _vm._l(60, function(hour, index) {
                  return _c(
                    "a",
                    {
                      key: index,
                      class: _vm.minutes === index ? "active" : "",
                      on: {
                        click: function($event) {
                          _vm.minutes = index
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.cover(index)))]
                  )
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tp-bottom" }, [
            _c(
              "button",
              {
                staticClass: "chime-btn primary",
                on: {
                  click: function($event) {
                    _vm.confirm()
                  }
                }
              },
              [_vm._v("Set")]
            )
          ])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1a72c8ae", esExports)
  }
}

/***/ })
/******/ ]);