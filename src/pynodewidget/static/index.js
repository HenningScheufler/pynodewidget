var gM = Object.defineProperty;
var mM = (e, t, n) => t in e ? gM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var bl = (e, t, n) => mM(e, typeof t != "symbol" ? t + "" : t, n);
function vM(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const i in o)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(o, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => o[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Sl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nd = { exports: {} }, ys = {}, rd = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yw;
function yM() {
  if (Yw) return Ae;
  Yw = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.iterator;
  function m(j) {
    return j === null || typeof j != "object" ? null : (j = p && j[p] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, y = {};
  function w(j, U, ie) {
    this.props = j, this.context = U, this.refs = y, this.updater = ie || v;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(j, U) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, U, "setState");
  }, w.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function _() {
  }
  _.prototype = w.prototype;
  function C(j, U, ie) {
    this.props = j, this.context = U, this.refs = y, this.updater = ie || v;
  }
  var b = C.prototype = new _();
  b.constructor = C, E(b, w.prototype), b.isPureReactComponent = !0;
  var N = Array.isArray, P = Object.prototype.hasOwnProperty, A = { current: null }, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(j, U, ie) {
    var $, Z = {}, ee = null, K = null;
    if (U != null) for ($ in U.ref !== void 0 && (K = U.ref), U.key !== void 0 && (ee = "" + U.key), U) P.call(U, $) && !I.hasOwnProperty($) && (Z[$] = U[$]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (j && j.defaultProps) for ($ in te = j.defaultProps, te) Z[$] === void 0 && (Z[$] = te[$]);
    return { $$typeof: e, type: j, key: ee, ref: K, props: Z, _owner: A.current };
  }
  function D(j, U) {
    return { $$typeof: e, type: j.type, key: U, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function H(j) {
    return typeof j == "object" && j !== null && j.$$typeof === e;
  }
  function q(j) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ie) {
      return U[ie];
    });
  }
  var B = /\/+/g;
  function X(j, U) {
    return typeof j == "object" && j !== null && j.key != null ? q("" + j.key) : U.toString(36);
  }
  function L(j, U, ie, $, Z) {
    var ee = typeof j;
    (ee === "undefined" || ee === "boolean") && (j = null);
    var K = !1;
    if (j === null) K = !0;
    else switch (ee) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case e:
          case t:
            K = !0;
        }
    }
    if (K) return K = j, Z = Z(K), j = $ === "" ? "." + X(K, 0) : $, N(Z) ? (ie = "", j != null && (ie = j.replace(B, "$&/") + "/"), L(Z, U, ie, "", function(ae) {
      return ae;
    })) : Z != null && (H(Z) && (Z = D(Z, ie + (!Z.key || K && K.key === Z.key ? "" : ("" + Z.key).replace(B, "$&/") + "/") + j)), U.push(Z)), 1;
    if (K = 0, $ = $ === "" ? "." : $ + ":", N(j)) for (var te = 0; te < j.length; te++) {
      ee = j[te];
      var se = $ + X(ee, te);
      K += L(ee, U, ie, se, Z);
    }
    else if (se = m(j), typeof se == "function") for (j = se.call(j), te = 0; !(ee = j.next()).done; ) ee = ee.value, se = $ + X(ee, te++), K += L(ee, U, ie, se, Z);
    else if (ee === "object") throw U = String(j), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function W(j, U, ie) {
    if (j == null) return j;
    var $ = [], Z = 0;
    return L(j, $, "", "", function(ee) {
      return U.call(ie, ee, Z++);
    }), $;
  }
  function V(j) {
    if (j._status === -1) {
      var U = j._result;
      U = U(), U.then(function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ie);
      }, function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ie);
      }), j._status === -1 && (j._status = 0, j._result = U);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Y = { current: null }, M = { transition: null }, z = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: A };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ae.Children = { map: W, forEach: function(j, U, ie) {
    W(j, function() {
      U.apply(this, arguments);
    }, ie);
  }, count: function(j) {
    var U = 0;
    return W(j, function() {
      U++;
    }), U;
  }, toArray: function(j) {
    return W(j, function(U) {
      return U;
    }) || [];
  }, only: function(j) {
    if (!H(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Ae.Component = w, Ae.Fragment = n, Ae.Profiler = i, Ae.PureComponent = C, Ae.StrictMode = o, Ae.Suspense = f, Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, Ae.act = Q, Ae.cloneElement = function(j, U, ie) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var $ = E({}, j.props), Z = j.key, ee = j.ref, K = j._owner;
    if (U != null) {
      if (U.ref !== void 0 && (ee = U.ref, K = A.current), U.key !== void 0 && (Z = "" + U.key), j.type && j.type.defaultProps) var te = j.type.defaultProps;
      for (se in U) P.call(U, se) && !I.hasOwnProperty(se) && ($[se] = U[se] === void 0 && te !== void 0 ? te[se] : U[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) $.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      $.children = te;
    }
    return { $$typeof: e, type: j.type, key: Z, ref: ee, props: $, _owner: K };
  }, Ae.createContext = function(j) {
    return j = { $$typeof: l, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: a, _context: j }, j.Consumer = j;
  }, Ae.createElement = O, Ae.createFactory = function(j) {
    var U = O.bind(null, j);
    return U.type = j, U;
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(j) {
    return { $$typeof: u, render: j };
  }, Ae.isValidElement = H, Ae.lazy = function(j) {
    return { $$typeof: h, _payload: { _status: -1, _result: j }, _init: V };
  }, Ae.memo = function(j, U) {
    return { $$typeof: d, type: j, compare: U === void 0 ? null : U };
  }, Ae.startTransition = function(j) {
    var U = M.transition;
    M.transition = {};
    try {
      j();
    } finally {
      M.transition = U;
    }
  }, Ae.unstable_act = Q, Ae.useCallback = function(j, U) {
    return Y.current.useCallback(j, U);
  }, Ae.useContext = function(j) {
    return Y.current.useContext(j);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(j) {
    return Y.current.useDeferredValue(j);
  }, Ae.useEffect = function(j, U) {
    return Y.current.useEffect(j, U);
  }, Ae.useId = function() {
    return Y.current.useId();
  }, Ae.useImperativeHandle = function(j, U, ie) {
    return Y.current.useImperativeHandle(j, U, ie);
  }, Ae.useInsertionEffect = function(j, U) {
    return Y.current.useInsertionEffect(j, U);
  }, Ae.useLayoutEffect = function(j, U) {
    return Y.current.useLayoutEffect(j, U);
  }, Ae.useMemo = function(j, U) {
    return Y.current.useMemo(j, U);
  }, Ae.useReducer = function(j, U, ie) {
    return Y.current.useReducer(j, U, ie);
  }, Ae.useRef = function(j) {
    return Y.current.useRef(j);
  }, Ae.useState = function(j) {
    return Y.current.useState(j);
  }, Ae.useSyncExternalStore = function(j, U, ie) {
    return Y.current.useSyncExternalStore(j, U, ie);
  }, Ae.useTransition = function() {
    return Y.current.useTransition();
  }, Ae.version = "18.3.1", Ae;
}
var Kw;
function Us() {
  return Kw || (Kw = 1, rd.exports = yM()), rd.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xw;
function xM() {
  if (Xw) return ys;
  Xw = 1;
  var e = Us(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return ys.Fragment = n, ys.jsx = l, ys.jsxs = l, ys;
}
var Qw;
function wM() {
  return Qw || (Qw = 1, nd.exports = xM()), nd.exports;
}
var R = wM(), k = Us();
const Zt = /* @__PURE__ */ yu(k), by = /* @__PURE__ */ vM({
  __proto__: null,
  default: Zt
}, [k]);
var El = {}, od = { exports: {} }, Nt = {}, id = { exports: {} }, sd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zw;
function _M() {
  return Zw || (Zw = 1, (function(e) {
    function t(M, z) {
      var Q = M.length;
      M.push(z);
      e: for (; 0 < Q; ) {
        var j = Q - 1 >>> 1, U = M[j];
        if (0 < i(U, z)) M[j] = z, M[Q] = U, Q = j;
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var z = M[0], Q = M.pop();
      if (Q !== z) {
        M[0] = Q;
        e: for (var j = 0, U = M.length, ie = U >>> 1; j < ie; ) {
          var $ = 2 * (j + 1) - 1, Z = M[$], ee = $ + 1, K = M[ee];
          if (0 > i(Z, Q)) ee < U && 0 > i(K, Z) ? (M[j] = K, M[ee] = Q, j = ee) : (M[j] = Z, M[$] = Q, j = $);
          else if (ee < U && 0 > i(K, Q)) M[j] = K, M[ee] = Q, j = ee;
          else break e;
        }
      }
      return z;
    }
    function i(M, z) {
      var Q = M.sortIndex - z.sortIndex;
      return Q !== 0 ? Q : M.id - z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      e.unstable_now = function() {
        return a.now();
      };
    } else {
      var l = Date, u = l.now();
      e.unstable_now = function() {
        return l.now() - u;
      };
    }
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, E = !1, y = !1, w = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(M) {
      for (var z = n(d); z !== null; ) {
        if (z.callback === null) o(d);
        else if (z.startTime <= M) o(d), z.sortIndex = z.expirationTime, t(f, z);
        else break;
        z = n(d);
      }
    }
    function N(M) {
      if (y = !1, b(M), !E) if (n(f) !== null) E = !0, V(P);
      else {
        var z = n(d);
        z !== null && Y(N, z.startTime - M);
      }
    }
    function P(M, z) {
      E = !1, y && (y = !1, _(O), O = -1), v = !0;
      var Q = m;
      try {
        for (b(z), p = n(f); p !== null && (!(p.expirationTime > z) || M && !q()); ) {
          var j = p.callback;
          if (typeof j == "function") {
            p.callback = null, m = p.priorityLevel;
            var U = j(p.expirationTime <= z);
            z = e.unstable_now(), typeof U == "function" ? p.callback = U : p === n(f) && o(f), b(z);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var $ = n(d);
          $ !== null && Y(N, $.startTime - z), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, v = !1;
      }
    }
    var A = !1, I = null, O = -1, D = 5, H = -1;
    function q() {
      return !(e.unstable_now() - H < D);
    }
    function B() {
      if (I !== null) {
        var M = e.unstable_now();
        H = M;
        var z = !0;
        try {
          z = I(!0, M);
        } finally {
          z ? X() : (A = !1, I = null);
        }
      } else A = !1;
    }
    var X;
    if (typeof C == "function") X = function() {
      C(B);
    };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), W = L.port2;
      L.port1.onmessage = B, X = function() {
        W.postMessage(null);
      };
    } else X = function() {
      w(B, 0);
    };
    function V(M) {
      I = M, A || (A = !0, X());
    }
    function Y(M, z) {
      O = w(function() {
        M(e.unstable_now());
      }, z);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || v || (E = !0, V(P));
    }, e.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < M ? Math.floor(1e3 / M) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(f);
    }, e.unstable_next = function(M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var Q = m;
      m = z;
      try {
        return M();
      } finally {
        m = Q;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(M, z) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = m;
      m = M;
      try {
        return z();
      } finally {
        m = Q;
      }
    }, e.unstable_scheduleCallback = function(M, z, Q) {
      var j = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? j + Q : j) : Q = j, M) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return U = Q + U, M = { id: h++, callback: z, priorityLevel: M, startTime: Q, expirationTime: U, sortIndex: -1 }, Q > j ? (M.sortIndex = Q, t(d, M), n(f) === null && M === n(d) && (y ? (_(O), O = -1) : y = !0, Y(N, Q - j))) : (M.sortIndex = U, t(f, M), E || v || (E = !0, V(P))), M;
    }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(M) {
      var z = m;
      return function() {
        var Q = m;
        m = z;
        try {
          return M.apply(this, arguments);
        } finally {
          m = Q;
        }
      };
    };
  })(sd)), sd;
}
var Jw;
function bM() {
  return Jw || (Jw = 1, id.exports = _M()), id.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function SM() {
  if (e1) return Nt;
  e1 = 1;
  var e = Us(), t = bM();
  function n(r) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, c = 1; c < arguments.length; c++) s += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), i = {};
  function a(r, s) {
    l(r, s), l(r + "Capture", s);
  }
  function l(r, s) {
    for (i[r] = s, r = 0; r < s.length; r++) o.add(s[r]);
  }
  var u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, p = {};
  function m(r) {
    return f.call(p, r) ? !0 : f.call(h, r) ? !1 : d.test(r) ? p[r] = !0 : (h[r] = !0, !1);
  }
  function v(r, s, c, g) {
    if (c !== null && c.type === 0) return !1;
    switch (typeof s) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return g ? !1 : c !== null ? !c.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function E(r, s, c, g) {
    if (s === null || typeof s > "u" || v(r, s, c, g)) return !0;
    if (g) return !1;
    if (c !== null) switch (c.type) {
      case 3:
        return !s;
      case 4:
        return s === !1;
      case 5:
        return isNaN(s);
      case 6:
        return isNaN(s) || 1 > s;
    }
    return !1;
  }
  function y(r, s, c, g, x, S, T) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = x, this.mustUseProperty = c, this.propertyName = r, this.type = s, this.sanitizeURL = S, this.removeEmptyString = T;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    w[r] = new y(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var s = r[0];
    w[s] = new y(s, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    w[r] = new y(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    w[r] = new y(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    w[r] = new y(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    w[r] = new y(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    w[r] = new y(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    w[r] = new y(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    w[r] = new y(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var _ = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var s = r.replace(
      _,
      C
    );
    w[s] = new y(s, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var s = r.replace(_, C);
    w[s] = new y(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var s = r.replace(_, C);
    w[s] = new y(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    w[r] = new y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    w[r] = new y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  function b(r, s, c, g) {
    var x = w.hasOwnProperty(s) ? w[s] : null;
    (x !== null ? x.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (E(s, c, x, g) && (c = null), g || x === null ? m(s) && (c === null ? r.removeAttribute(s) : r.setAttribute(s, "" + c)) : x.mustUseProperty ? r[x.propertyName] = c === null ? x.type === 3 ? !1 : "" : c : (s = x.attributeName, g = x.attributeNamespace, c === null ? r.removeAttribute(s) : (x = x.type, c = x === 3 || x === 4 && c === !0 ? "" : "" + c, g ? r.setAttributeNS(g, s, c) : r.setAttribute(s, c))));
  }
  var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), A = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), q = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function z(r) {
    return r === null || typeof r != "object" ? null : (r = M && r[M] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = Object.assign, j;
  function U(r) {
    if (j === void 0) try {
      throw Error();
    } catch (c) {
      var s = c.stack.trim().match(/\n( *(at )?)/);
      j = s && s[1] || "";
    }
    return `
` + j + r;
  }
  var ie = !1;
  function $(r, s) {
    if (!r || ie) return "";
    ie = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s) if (s = function() {
        throw Error();
      }, Object.defineProperty(s.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(s, []);
        } catch (oe) {
          var g = oe;
        }
        Reflect.construct(r, [], s);
      } else {
        try {
          s.call();
        } catch (oe) {
          g = oe;
        }
        r.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (oe) {
          g = oe;
        }
        r();
      }
    } catch (oe) {
      if (oe && g && typeof oe.stack == "string") {
        for (var x = oe.stack.split(`
`), S = g.stack.split(`
`), T = x.length - 1, F = S.length - 1; 1 <= T && 0 <= F && x[T] !== S[F]; ) F--;
        for (; 1 <= T && 0 <= F; T--, F--) if (x[T] !== S[F]) {
          if (T !== 1 || F !== 1)
            do
              if (T--, F--, 0 > F || x[T] !== S[F]) {
                var G = `
` + x[T].replace(" at new ", " at ");
                return r.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", r.displayName)), G;
              }
            while (1 <= T && 0 <= F);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = c;
    }
    return (r = r ? r.displayName || r.name : "") ? U(r) : "";
  }
  function Z(r) {
    switch (r.tag) {
      case 5:
        return U(r.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = $(r.type, !1), r;
      case 11:
        return r = $(r.type.render, !1), r;
      case 1:
        return r = $(r.type, !0), r;
      default:
        return "";
    }
  }
  function ee(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case I:
        return "Fragment";
      case A:
        return "Portal";
      case D:
        return "Profiler";
      case O:
        return "StrictMode";
      case X:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case q:
        return (r.displayName || "Context") + ".Consumer";
      case H:
        return (r._context.displayName || "Context") + ".Provider";
      case B:
        var s = r.render;
        return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case W:
        return s = r.displayName || null, s !== null ? s : ee(r.type) || "Memo";
      case V:
        s = r._payload, r = r._init;
        try {
          return ee(r(s));
        } catch {
        }
    }
    return null;
  }
  function K(r) {
    var s = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return r = s.render, r = r.displayName || r.name || "", s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ee(s);
      case 8:
        return s === O ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function te(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function se(r) {
    var s = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
  }
  function ae(r) {
    var s = se(r) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(r.constructor.prototype, s), g = "" + r[s];
    if (!r.hasOwnProperty(s) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var x = c.get, S = c.set;
      return Object.defineProperty(r, s, { configurable: !0, get: function() {
        return x.call(this);
      }, set: function(T) {
        g = "" + T, S.call(this, T);
      } }), Object.defineProperty(r, s, { enumerable: c.enumerable }), { getValue: function() {
        return g;
      }, setValue: function(T) {
        g = "" + T;
      }, stopTracking: function() {
        r._valueTracker = null, delete r[s];
      } };
    }
  }
  function ce(r) {
    r._valueTracker || (r._valueTracker = ae(r));
  }
  function de(r) {
    if (!r) return !1;
    var s = r._valueTracker;
    if (!s) return !0;
    var c = s.getValue(), g = "";
    return r && (g = se(r) ? r.checked ? "true" : "false" : r.value), r = g, r !== c ? (s.setValue(r), !0) : !1;
  }
  function pe(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function be(r, s) {
    var c = s.checked;
    return Q({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? r._wrapperState.initialChecked });
  }
  function me(r, s) {
    var c = s.defaultValue == null ? "" : s.defaultValue, g = s.checked != null ? s.checked : s.defaultChecked;
    c = te(s.value != null ? s.value : c), r._wrapperState = { initialChecked: g, initialValue: c, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
  }
  function Re(r, s) {
    s = s.checked, s != null && b(r, "checked", s, !1);
  }
  function Ee(r, s) {
    Re(r, s);
    var c = te(s.value), g = s.type;
    if (c != null) g === "number" ? (c === 0 && r.value === "" || r.value != c) && (r.value = "" + c) : r.value !== "" + c && (r.value = "" + c);
    else if (g === "submit" || g === "reset") {
      r.removeAttribute("value");
      return;
    }
    s.hasOwnProperty("value") ? Ue(r, s.type, c) : s.hasOwnProperty("defaultValue") && Ue(r, s.type, te(s.defaultValue)), s.checked == null && s.defaultChecked != null && (r.defaultChecked = !!s.defaultChecked);
  }
  function Je(r, s, c) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var g = s.type;
      if (!(g !== "submit" && g !== "reset" || s.value !== void 0 && s.value !== null)) return;
      s = "" + r._wrapperState.initialValue, c || s === r.value || (r.value = s), r.defaultValue = s;
    }
    c = r.name, c !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, c !== "" && (r.name = c);
  }
  function Ue(r, s, c) {
    (s !== "number" || pe(r.ownerDocument) !== r) && (c == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + c && (r.defaultValue = "" + c));
  }
  var Ft = Array.isArray;
  function ht(r, s, c, g) {
    if (r = r.options, s) {
      s = {};
      for (var x = 0; x < c.length; x++) s["$" + c[x]] = !0;
      for (c = 0; c < r.length; c++) x = s.hasOwnProperty("$" + r[c].value), r[c].selected !== x && (r[c].selected = x), x && g && (r[c].defaultSelected = !0);
    } else {
      for (c = "" + te(c), s = null, x = 0; x < r.length; x++) {
        if (r[x].value === c) {
          r[x].selected = !0, g && (r[x].defaultSelected = !0);
          return;
        }
        s !== null || r[x].disabled || (s = r[x]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function at(r, s) {
    if (s.dangerouslySetInnerHTML != null) throw Error(n(91));
    return Q({}, s, { value: void 0, defaultValue: void 0, children: "" + r._wrapperState.initialValue });
  }
  function Ge(r, s) {
    var c = s.value;
    if (c == null) {
      if (c = s.children, s = s.defaultValue, c != null) {
        if (s != null) throw Error(n(92));
        if (Ft(c)) {
          if (1 < c.length) throw Error(n(93));
          c = c[0];
        }
        s = c;
      }
      s == null && (s = ""), c = s;
    }
    r._wrapperState = { initialValue: te(c) };
  }
  function tn(r, s) {
    var c = te(s.value), g = te(s.defaultValue);
    c != null && (c = "" + c, c !== r.value && (r.value = c), s.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c)), g != null && (r.defaultValue = "" + g);
  }
  function $t(r) {
    var s = r.textContent;
    s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s);
  }
  function nn(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bt(r, s) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? nn(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var _t, Dr = (function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, c, g, x) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(s, c, g, x);
      });
    } : r;
  })(function(r, s) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = s;
    else {
      for (_t = _t || document.createElement("div"), _t.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = _t.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; s.firstChild; ) r.appendChild(s.firstChild);
    }
  });
  function Vt(r, s) {
    if (s) {
      var c = r.firstChild;
      if (c && c === r.lastChild && c.nodeType === 3) {
        c.nodeValue = s;
        return;
      }
    }
    r.textContent = s;
  }
  var qn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, wo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(r) {
    wo.forEach(function(s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1), qn[s] = qn[r];
    });
  });
  function Tt(r, s, c) {
    return s == null || typeof s == "boolean" || s === "" ? "" : c || typeof s != "number" || s === 0 || qn.hasOwnProperty(r) && qn[r] ? ("" + s).trim() : s + "px";
  }
  function Ht(r, s) {
    r = r.style;
    for (var c in s) if (s.hasOwnProperty(c)) {
      var g = c.indexOf("--") === 0, x = Tt(c, s[c], g);
      c === "float" && (c = "cssFloat"), g ? r.setProperty(c, x) : r[c] = x;
    }
  }
  var uc = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Pi(r, s) {
    if (s) {
      if (uc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function Ti(r, s) {
    if (r.indexOf("-") === -1) return typeof s.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ai = null;
  function Ii(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Mi = null, nr = null, rr = null;
  function la(r) {
    if (r = rs(r)) {
      if (typeof Mi != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = ja(s), Mi(r.stateNode, r.type, s));
    }
  }
  function ua(r) {
    nr ? rr ? rr.push(r) : rr = [r] : nr = r;
  }
  function ca() {
    if (nr) {
      var r = nr, s = rr;
      if (rr = nr = null, la(r), s) for (r = 0; r < s.length; r++) la(s[r]);
    }
  }
  function fa(r, s) {
    return r(s);
  }
  function da() {
  }
  var Oi = !1;
  function ha(r, s, c) {
    if (Oi) return r(s, c);
    Oi = !0;
    try {
      return fa(r, s, c);
    } finally {
      Oi = !1, (nr !== null || rr !== null) && (da(), ca());
    }
  }
  function jr(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = ja(c);
    if (g === null) return null;
    c = g[s];
    e: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (g = !g.disabled) || (r = r.type, g = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !g;
        break e;
      default:
        r = !1;
    }
    if (r) return null;
    if (c && typeof c != "function") throw Error(n(231, s, typeof c));
    return c;
  }
  var Li = !1;
  if (u) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      Li = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    Li = !1;
  }
  function cc(r, s, c, g, x, S, T, F, G) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var zr = !1, _o = null, bo = !1, Di = null, fc = { onError: function(r) {
    zr = !0, _o = r;
  } };
  function dc(r, s, c, g, x, S, T, F, G) {
    zr = !1, _o = null, cc.apply(fc, arguments);
  }
  function hc(r, s, c, g, x, S, T, F, G) {
    if (dc.apply(this, arguments), zr) {
      if (zr) {
        var oe = _o;
        zr = !1, _o = null;
      } else throw Error(n(198));
      bo || (bo = !0, Di = oe);
    }
  }
  function _n(r) {
    var s = r, c = r;
    if (r.alternate) for (; s.return; ) s = s.return;
    else {
      r = s;
      do
        s = r, (s.flags & 4098) !== 0 && (c = s.return), r = s.return;
      while (r);
    }
    return s.tag === 3 ? c : null;
  }
  function ji(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (s === null && (r = r.alternate, r !== null && (s = r.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function qi(r) {
    if (_n(r) !== r) throw Error(n(188));
  }
  function pc(r) {
    var s = r.alternate;
    if (!s) {
      if (s = _n(r), s === null) throw Error(n(188));
      return s !== r ? null : r;
    }
    for (var c = r, g = s; ; ) {
      var x = c.return;
      if (x === null) break;
      var S = x.alternate;
      if (S === null) {
        if (g = x.return, g !== null) {
          c = g;
          continue;
        }
        break;
      }
      if (x.child === S.child) {
        for (S = x.child; S; ) {
          if (S === c) return qi(x), r;
          if (S === g) return qi(x), s;
          S = S.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== g.return) c = x, g = S;
      else {
        for (var T = !1, F = x.child; F; ) {
          if (F === c) {
            T = !0, c = x, g = S;
            break;
          }
          if (F === g) {
            T = !0, g = x, c = S;
            break;
          }
          F = F.sibling;
        }
        if (!T) {
          for (F = S.child; F; ) {
            if (F === c) {
              T = !0, c = S, g = x;
              break;
            }
            if (F === g) {
              T = !0, g = S, c = x;
              break;
            }
            F = F.sibling;
          }
          if (!T) throw Error(n(189));
        }
      }
      if (c.alternate !== g) throw Error(n(190));
    }
    if (c.tag !== 3) throw Error(n(188));
    return c.stateNode.current === c ? r : s;
  }
  function pa(r) {
    return r = pc(r), r !== null ? ga(r) : null;
  }
  function ga(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = ga(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var ma = t.unstable_scheduleCallback, va = t.unstable_cancelCallback, gc = t.unstable_shouldYield, ya = t.unstable_requestPaint, Ye = t.unstable_now, mc = t.unstable_getCurrentPriorityLevel, zi = t.unstable_ImmediatePriority, xa = t.unstable_UserBlockingPriority, So = t.unstable_NormalPriority, vc = t.unstable_LowPriority, wa = t.unstable_IdlePriority, Fr = null, Wt = null;
  function yc(r) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(Fr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : _c, xc = Math.log, wc = Math.LN2;
  function _c(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (xc(r) / wc | 0) | 0;
  }
  var Eo = 64, Co = 4194304;
  function bn(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function ko(r, s) {
    var c = r.pendingLanes;
    if (c === 0) return 0;
    var g = 0, x = r.suspendedLanes, S = r.pingedLanes, T = c & 268435455;
    if (T !== 0) {
      var F = T & ~x;
      F !== 0 ? g = bn(F) : (S &= T, S !== 0 && (g = bn(S)));
    } else T = c & ~x, T !== 0 ? g = bn(T) : S !== 0 && (g = bn(S));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & x) === 0 && (x = g & -g, S = s & -s, x >= S || x === 16 && (S & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - At(s), x = 1 << c, g |= r[c], s &= ~x;
    return g;
  }
  function bc(r, s) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return s + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sc(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, x = r.expirationTimes, S = r.pendingLanes; 0 < S; ) {
      var T = 31 - At(S), F = 1 << T, G = x[T];
      G === -1 ? ((F & c) === 0 || (F & g) !== 0) && (x[T] = bc(F, s)) : G <= s && (r.expiredLanes |= F), S &= ~F;
    }
  }
  function $r(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function _a() {
    var r = Eo;
    return Eo <<= 1, (Eo & 4194240) === 0 && (Eo = 64), r;
  }
  function Fi(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function or(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - At(s), r[s] = c;
  }
  function DI(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var x = 31 - At(c), S = 1 << x;
      s[x] = 0, g[x] = -1, r[x] = -1, c &= ~S;
    }
  }
  function Ec(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - At(c), x = 1 << g;
      x & s | r[g] & s && (r[g] |= s), c &= ~x;
    }
  }
  var qe = 0;
  function k0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var N0, Cc, R0, P0, T0, kc = !1, ba = [], ir = null, sr = null, ar = null, $i = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), lr = [], jI = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function A0(r, s) {
    switch (r) {
      case "focusin":
      case "focusout":
        ir = null;
        break;
      case "dragenter":
      case "dragleave":
        sr = null;
        break;
      case "mouseover":
      case "mouseout":
        ar = null;
        break;
      case "pointerover":
      case "pointerout":
        $i.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bi.delete(s.pointerId);
    }
  }
  function Vi(r, s, c, g, x, S) {
    return r === null || r.nativeEvent !== S ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: S, targetContainers: [x] }, s !== null && (s = rs(s), s !== null && Cc(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, x !== null && s.indexOf(x) === -1 && s.push(x), r);
  }
  function qI(r, s, c, g, x) {
    switch (s) {
      case "focusin":
        return ir = Vi(ir, r, s, c, g, x), !0;
      case "dragenter":
        return sr = Vi(sr, r, s, c, g, x), !0;
      case "mouseover":
        return ar = Vi(ar, r, s, c, g, x), !0;
      case "pointerover":
        var S = x.pointerId;
        return $i.set(S, Vi($i.get(S) || null, r, s, c, g, x)), !0;
      case "gotpointercapture":
        return S = x.pointerId, Bi.set(S, Vi(Bi.get(S) || null, r, s, c, g, x)), !0;
    }
    return !1;
  }
  function I0(r) {
    var s = Br(r.target);
    if (s !== null) {
      var c = _n(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = ji(c), s !== null) {
            r.blockedOn = s, T0(r.priority, function() {
              R0(c);
            });
            return;
          }
        } else if (s === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function Sa(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var c = Rc(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        Ai = g, c.target.dispatchEvent(g), Ai = null;
      } else return s = rs(c), s !== null && Cc(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function M0(r, s, c) {
    Sa(r) && c.delete(s);
  }
  function zI() {
    kc = !1, ir !== null && Sa(ir) && (ir = null), sr !== null && Sa(sr) && (sr = null), ar !== null && Sa(ar) && (ar = null), $i.forEach(M0), Bi.forEach(M0);
  }
  function Hi(r, s) {
    r.blockedOn === s && (r.blockedOn = null, kc || (kc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, zI)));
  }
  function Wi(r) {
    function s(x) {
      return Hi(x, r);
    }
    if (0 < ba.length) {
      Hi(ba[0], r);
      for (var c = 1; c < ba.length; c++) {
        var g = ba[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (ir !== null && Hi(ir, r), sr !== null && Hi(sr, r), ar !== null && Hi(ar, r), $i.forEach(s), Bi.forEach(s), c = 0; c < lr.length; c++) g = lr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < lr.length && (c = lr[0], c.blockedOn === null); ) I0(c), c.blockedOn === null && lr.shift();
  }
  var No = N.ReactCurrentBatchConfig, Ea = !0;
  function FI(r, s, c, g) {
    var x = qe, S = No.transition;
    No.transition = null;
    try {
      qe = 1, Nc(r, s, c, g);
    } finally {
      qe = x, No.transition = S;
    }
  }
  function $I(r, s, c, g) {
    var x = qe, S = No.transition;
    No.transition = null;
    try {
      qe = 4, Nc(r, s, c, g);
    } finally {
      qe = x, No.transition = S;
    }
  }
  function Nc(r, s, c, g) {
    if (Ea) {
      var x = Rc(r, s, c, g);
      if (x === null) Wc(r, s, g, Ca, c), A0(r, g);
      else if (qI(x, r, s, c, g)) g.stopPropagation();
      else if (A0(r, g), s & 4 && -1 < jI.indexOf(r)) {
        for (; x !== null; ) {
          var S = rs(x);
          if (S !== null && N0(S), S = Rc(r, s, c, g), S === null && Wc(r, s, g, Ca, c), S === x) break;
          x = S;
        }
        x !== null && g.stopPropagation();
      } else Wc(r, s, g, null, c);
    }
  }
  var Ca = null;
  function Rc(r, s, c, g) {
    if (Ca = null, r = Ii(g), r = Br(r), r !== null) if (s = _n(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = ji(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return Ca = r, null;
  }
  function O0(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (mc()) {
          case zi:
            return 1;
          case xa:
            return 4;
          case So:
          case vc:
            return 16;
          case wa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ur = null, Pc = null, ka = null;
  function L0() {
    if (ka) return ka;
    var r, s = Pc, c = s.length, g, x = "value" in ur ? ur.value : ur.textContent, S = x.length;
    for (r = 0; r < c && s[r] === x[r]; r++) ;
    var T = c - r;
    for (g = 1; g <= T && s[c - g] === x[S - g]; g++) ;
    return ka = x.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Na(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Ra() {
    return !0;
  }
  function D0() {
    return !1;
  }
  function It(r) {
    function s(c, g, x, S, T) {
      this._reactName = c, this._targetInst = x, this.type = g, this.nativeEvent = S, this.target = T, this.currentTarget = null;
      for (var F in r) r.hasOwnProperty(F) && (c = r[F], this[F] = c ? c(S) : S[F]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Ra : D0, this.isPropagationStopped = D0, this;
    }
    return Q(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Ra);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Ra);
    }, persist: function() {
    }, isPersistent: Ra }), s;
  }
  var Ro = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tc = It(Ro), Ui = Q({}, Ro, { view: 0, detail: 0 }), BI = It(Ui), Ac, Ic, Gi, Pa = Q({}, Ui, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Oc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Gi && (Gi && r.type === "mousemove" ? (Ac = r.screenX - Gi.screenX, Ic = r.screenY - Gi.screenY) : Ic = Ac = 0, Gi = r), Ac);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : Ic;
  } }), j0 = It(Pa), VI = Q({}, Pa, { dataTransfer: 0 }), HI = It(VI), WI = Q({}, Ui, { relatedTarget: 0 }), Mc = It(WI), UI = Q({}, Ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), GI = It(UI), YI = Q({}, Ro, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), KI = It(YI), XI = Q({}, Ro, { data: 0 }), q0 = It(XI), QI = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ZI = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, JI = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function e2(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = JI[r]) ? !!s[r] : !1;
  }
  function Oc() {
    return e2;
  }
  var t2 = Q({}, Ui, { key: function(r) {
    if (r.key) {
      var s = QI[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Na(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? ZI[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Oc, charCode: function(r) {
    return r.type === "keypress" ? Na(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Na(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), n2 = It(t2), r2 = Q({}, Pa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), z0 = It(r2), o2 = Q({}, Ui, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Oc }), i2 = It(o2), s2 = Q({}, Ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), a2 = It(s2), l2 = Q({}, Pa, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), u2 = It(l2), c2 = [9, 13, 27, 32], Lc = u && "CompositionEvent" in window, Yi = null;
  u && "documentMode" in document && (Yi = document.documentMode);
  var f2 = u && "TextEvent" in window && !Yi, F0 = u && (!Lc || Yi && 8 < Yi && 11 >= Yi), $0 = " ", B0 = !1;
  function V0(r, s) {
    switch (r) {
      case "keyup":
        return c2.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function H0(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Po = !1;
  function d2(r, s) {
    switch (r) {
      case "compositionend":
        return H0(s);
      case "keypress":
        return s.which !== 32 ? null : (B0 = !0, $0);
      case "textInput":
        return r = s.data, r === $0 && B0 ? null : r;
      default:
        return null;
    }
  }
  function h2(r, s) {
    if (Po) return r === "compositionend" || !Lc && V0(r, s) ? (r = L0(), ka = Pc = ur = null, Po = !1, r) : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return F0 && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var p2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function W0(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!p2[r.type] : s === "textarea";
  }
  function U0(r, s, c, g) {
    ua(g), s = Oa(s, "onChange"), 0 < s.length && (c = new Tc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var Ki = null, Xi = null;
  function g2(r) {
    cx(r, 0);
  }
  function Ta(r) {
    var s = Oo(r);
    if (de(s)) return r;
  }
  function m2(r, s) {
    if (r === "change") return s;
  }
  var G0 = !1;
  if (u) {
    var Dc;
    if (u) {
      var jc = "oninput" in document;
      if (!jc) {
        var Y0 = document.createElement("div");
        Y0.setAttribute("oninput", "return;"), jc = typeof Y0.oninput == "function";
      }
      Dc = jc;
    } else Dc = !1;
    G0 = Dc && (!document.documentMode || 9 < document.documentMode);
  }
  function K0() {
    Ki && (Ki.detachEvent("onpropertychange", X0), Xi = Ki = null);
  }
  function X0(r) {
    if (r.propertyName === "value" && Ta(Xi)) {
      var s = [];
      U0(s, Xi, r, Ii(r)), ha(g2, s);
    }
  }
  function v2(r, s, c) {
    r === "focusin" ? (K0(), Ki = s, Xi = c, Ki.attachEvent("onpropertychange", X0)) : r === "focusout" && K0();
  }
  function y2(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Ta(Xi);
  }
  function x2(r, s) {
    if (r === "click") return Ta(s);
  }
  function w2(r, s) {
    if (r === "input" || r === "change") return Ta(s);
  }
  function _2(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var rn = typeof Object.is == "function" ? Object.is : _2;
  function Qi(r, s) {
    if (rn(r, s)) return !0;
    if (typeof r != "object" || r === null || typeof s != "object" || s === null) return !1;
    var c = Object.keys(r), g = Object.keys(s);
    if (c.length !== g.length) return !1;
    for (g = 0; g < c.length; g++) {
      var x = c[g];
      if (!f.call(s, x) || !rn(r[x], s[x])) return !1;
    }
    return !0;
  }
  function Q0(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Z0(r, s) {
    var c = Q0(r);
    r = 0;
    for (var g; c; ) {
      if (c.nodeType === 3) {
        if (g = r + c.textContent.length, r <= s && g >= s) return { node: c, offset: s - r };
        r = g;
      }
      e: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break e;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Q0(c);
    }
  }
  function J0(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? J0(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function ex() {
    for (var r = window, s = pe(); s instanceof r.HTMLIFrameElement; ) {
      try {
        var c = typeof s.contentWindow.location.href == "string";
      } catch {
        c = !1;
      }
      if (c) r = s.contentWindow;
      else break;
      s = pe(r.document);
    }
    return s;
  }
  function qc(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function b2(r) {
    var s = ex(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && J0(c.ownerDocument.documentElement, c)) {
      if (g !== null && qc(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var x = c.textContent.length, S = Math.min(g.start, x);
          g = g.end === void 0 ? S : Math.min(g.end, x), !r.extend && S > g && (x = g, g = S, S = x), x = Z0(c, S);
          var T = Z0(
            c,
            g
          );
          x && T && (r.rangeCount !== 1 || r.anchorNode !== x.node || r.anchorOffset !== x.offset || r.focusNode !== T.node || r.focusOffset !== T.offset) && (s = s.createRange(), s.setStart(x.node, x.offset), r.removeAllRanges(), S > g ? (r.addRange(s), r.extend(T.node, T.offset)) : (s.setEnd(T.node, T.offset), r.addRange(s)));
        }
      }
      for (s = [], r = c; r = r.parentNode; ) r.nodeType === 1 && s.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < s.length; c++) r = s[c], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var S2 = u && "documentMode" in document && 11 >= document.documentMode, To = null, zc = null, Zi = null, Fc = !1;
  function tx(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Fc || To == null || To !== pe(g) || (g = To, "selectionStart" in g && qc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), Zi && Qi(Zi, g) || (Zi = g, g = Oa(zc, "onSelect"), 0 < g.length && (s = new Tc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = To)));
  }
  function Aa(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var Ao = { animationend: Aa("Animation", "AnimationEnd"), animationiteration: Aa("Animation", "AnimationIteration"), animationstart: Aa("Animation", "AnimationStart"), transitionend: Aa("Transition", "TransitionEnd") }, $c = {}, nx = {};
  u && (nx = document.createElement("div").style, "AnimationEvent" in window || (delete Ao.animationend.animation, delete Ao.animationiteration.animation, delete Ao.animationstart.animation), "TransitionEvent" in window || delete Ao.transitionend.transition);
  function Ia(r) {
    if ($c[r]) return $c[r];
    if (!Ao[r]) return r;
    var s = Ao[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in nx) return $c[r] = s[c];
    return r;
  }
  var rx = Ia("animationend"), ox = Ia("animationiteration"), ix = Ia("animationstart"), sx = Ia("transitionend"), ax = /* @__PURE__ */ new Map(), lx = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(r, s) {
    ax.set(r, s), a(s, [r]);
  }
  for (var Bc = 0; Bc < lx.length; Bc++) {
    var Vc = lx[Bc], E2 = Vc.toLowerCase(), C2 = Vc[0].toUpperCase() + Vc.slice(1);
    cr(E2, "on" + C2);
  }
  cr(rx, "onAnimationEnd"), cr(ox, "onAnimationIteration"), cr(ix, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(sx, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));
  function ux(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, hc(g, s, void 0, r), r.currentTarget = null;
  }
  function cx(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], x = g.event;
      g = g.listeners;
      e: {
        var S = void 0;
        if (s) for (var T = g.length - 1; 0 <= T; T--) {
          var F = g[T], G = F.instance, oe = F.currentTarget;
          if (F = F.listener, G !== S && x.isPropagationStopped()) break e;
          ux(x, F, oe), S = G;
        }
        else for (T = 0; T < g.length; T++) {
          if (F = g[T], G = F.instance, oe = F.currentTarget, F = F.listener, G !== S && x.isPropagationStopped()) break e;
          ux(x, F, oe), S = G;
        }
      }
    }
    if (bo) throw r = Di, bo = !1, Di = null, r;
  }
  function Fe(r, s) {
    var c = s[Qc];
    c === void 0 && (c = s[Qc] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (fx(s, r, 2, !1), c.add(g));
  }
  function Hc(r, s, c) {
    var g = 0;
    s && (g |= 4), fx(c, r, g, s);
  }
  var Ma = "_reactListening" + Math.random().toString(36).slice(2);
  function es(r) {
    if (!r[Ma]) {
      r[Ma] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (k2.has(c) || Hc(c, !1, r), Hc(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[Ma] || (s[Ma] = !0, Hc("selectionchange", !1, s));
    }
  }
  function fx(r, s, c, g) {
    switch (O0(s)) {
      case 1:
        var x = FI;
        break;
      case 4:
        x = $I;
        break;
      default:
        x = Nc;
    }
    c = x.bind(null, s, c, r), x = void 0, !Li || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (x = !0), g ? x !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: x }) : r.addEventListener(s, c, !0) : x !== void 0 ? r.addEventListener(s, c, { passive: x }) : r.addEventListener(s, c, !1);
  }
  function Wc(r, s, c, g, x) {
    var S = g;
    if ((s & 1) === 0 && (s & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var T = g.tag;
      if (T === 3 || T === 4) {
        var F = g.stateNode.containerInfo;
        if (F === x || F.nodeType === 8 && F.parentNode === x) break;
        if (T === 4) for (T = g.return; T !== null; ) {
          var G = T.tag;
          if ((G === 3 || G === 4) && (G = T.stateNode.containerInfo, G === x || G.nodeType === 8 && G.parentNode === x)) return;
          T = T.return;
        }
        for (; F !== null; ) {
          if (T = Br(F), T === null) return;
          if (G = T.tag, G === 5 || G === 6) {
            g = S = T;
            continue e;
          }
          F = F.parentNode;
        }
      }
      g = g.return;
    }
    ha(function() {
      var oe = S, ue = Ii(c), fe = [];
      e: {
        var le = ax.get(r);
        if (le !== void 0) {
          var ge = Tc, xe = r;
          switch (r) {
            case "keypress":
              if (Na(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = n2;
              break;
            case "focusin":
              xe = "focus", ge = Mc;
              break;
            case "focusout":
              xe = "blur", ge = Mc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = Mc;
              break;
            case "click":
              if (c.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ge = j0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = HI;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = i2;
              break;
            case rx:
            case ox:
            case ix:
              ge = GI;
              break;
            case sx:
              ge = a2;
              break;
            case "scroll":
              ge = BI;
              break;
            case "wheel":
              ge = u2;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = KI;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = z0;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = jr(J, ne), he != null && Se.push(ts(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, xe, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== Ai && (xe = c.relatedTarget || c.fromElement) && (Br(xe) || xe[zn])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (xe = c.relatedTarget || c.toElement, ge = oe, xe = xe ? Br(xe) : null, xe !== null && (et = _n(xe), xe !== et || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ge = null, xe = oe), ge !== xe)) {
            if (Se = j0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = z0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : Oo(ge), re = xe == null ? le : Oo(xe), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Br(ue) === oe && (Se = new Se(ne, J + "enter", xe, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && xe) t: {
              for (Se = ge, ne = xe, J = 0, re = Se; re; re = Io(re)) J++;
              for (re = 0, he = ne; he; he = Io(he)) re++;
              for (; 0 < J - re; ) Se = Io(Se), J--;
              for (; 0 < re - J; ) ne = Io(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = Io(Se), ne = Io(ne);
              }
              Se = null;
            }
            else Se = null;
            ge !== null && dx(fe, le, ge, Se, !1), xe !== null && et !== null && dx(fe, et, xe, Se, !0);
          }
        }
        e: {
          if (le = oe ? Oo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = m2;
          else if (W0(le)) if (G0) Ce = w2;
          else {
            Ce = y2;
            var ke = v2;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = x2);
          if (Ce && (Ce = Ce(r, oe))) {
            U0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? Oo(oe) : window, r) {
          case "focusin":
            (W0(ke) || ke.contentEditable === "true") && (To = ke, zc = oe, Zi = null);
            break;
          case "focusout":
            Zi = zc = To = null;
            break;
          case "mousedown":
            Fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fc = !1, tx(fe, c, ue);
            break;
          case "selectionchange":
            if (S2) break;
          case "keydown":
          case "keyup":
            tx(fe, c, ue);
        }
        var Ne;
        if (Lc) e: {
          switch (r) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else Po ? V0(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (F0 && c.locale !== "ko" && (Po || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Po && (Ne = L0()) : (ur = ue, Pc = "value" in ur ? ur.value : ur.textContent, Po = !0)), ke = Oa(oe, Pe), 0 < ke.length && (Pe = new q0(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Ne ? Pe.data = Ne : (Ne = H0(c), Ne !== null && (Pe.data = Ne)))), (Ne = f2 ? d2(r, c) : h2(r, c)) && (oe = Oa(oe, "onBeforeInput"), 0 < oe.length && (ue = new q0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Ne));
      }
      cx(fe, s);
    });
  }
  function ts(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function Oa(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var x = r, S = x.stateNode;
      x.tag === 5 && S !== null && (x = S, S = jr(r, c), S != null && g.unshift(ts(r, S, x)), S = jr(r, s), S != null && g.push(ts(r, S, x))), r = r.return;
    }
    return g;
  }
  function Io(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function dx(r, s, c, g, x) {
    for (var S = s._reactName, T = []; c !== null && c !== g; ) {
      var F = c, G = F.alternate, oe = F.stateNode;
      if (G !== null && G === g) break;
      F.tag === 5 && oe !== null && (F = oe, x ? (G = jr(c, S), G != null && T.unshift(ts(c, G, F))) : x || (G = jr(c, S), G != null && T.push(ts(c, G, F)))), c = c.return;
    }
    T.length !== 0 && r.push({ event: s, listeners: T });
  }
  var N2 = /\r\n?/g, R2 = /\u0000|\uFFFD/g;
  function hx(r) {
    return (typeof r == "string" ? r : "" + r).replace(N2, `
`).replace(R2, "");
  }
  function La(r, s, c) {
    if (s = hx(s), hx(r) !== s && c) throw Error(n(425));
  }
  function Da() {
  }
  var Uc = null, Gc = null;
  function Yc(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = typeof setTimeout == "function" ? setTimeout : void 0, P2 = typeof clearTimeout == "function" ? clearTimeout : void 0, px = typeof Promise == "function" ? Promise : void 0, T2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof px < "u" ? function(r) {
    return px.resolve(null).then(r).catch(A2);
  } : Kc;
  function A2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function Xc(r, s) {
    var c = s, g = 0;
    do {
      var x = c.nextSibling;
      if (r.removeChild(c), x && x.nodeType === 8) if (c = x.data, c === "/$") {
        if (g === 0) {
          r.removeChild(x), Wi(s);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = x;
    } while (c);
    Wi(s);
  }
  function fr(r) {
    for (; r != null; r = r.nextSibling) {
      var s = r.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (s = r.data, s === "$" || s === "$!" || s === "$?") break;
        if (s === "/$") return null;
      }
    }
    return r;
  }
  function gx(r) {
    r = r.previousSibling;
    for (var s = 0; r; ) {
      if (r.nodeType === 8) {
        var c = r.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (s === 0) return r;
          s--;
        } else c === "/$" && s++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var Mo = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + Mo, ns = "__reactProps$" + Mo, zn = "__reactContainer$" + Mo, Qc = "__reactEvents$" + Mo, I2 = "__reactListeners$" + Mo, M2 = "__reactHandles$" + Mo;
  function Br(r) {
    var s = r[Sn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[zn] || c[Sn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = gx(r); r !== null; ) {
          if (c = r[Sn]) return c;
          r = gx(r);
        }
        return s;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function rs(r) {
    return r = r[Sn] || r[zn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function Oo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function ja(r) {
    return r[ns] || null;
  }
  var Zc = [], Lo = -1;
  function dr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > Lo || (r.current = Zc[Lo], Zc[Lo] = null, Lo--);
  }
  function ze(r, s) {
    Lo++, Zc[Lo] = r.current, r.current = s;
  }
  var hr = {}, pt = dr(hr), bt = dr(!1), Vr = hr;
  function Do(r, s) {
    var c = r.type.contextTypes;
    if (!c) return hr;
    var g = r.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
    var x = {}, S;
    for (S in c) x[S] = s[S];
    return g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = s, r.__reactInternalMemoizedMaskedChildContext = x), x;
  }
  function St(r) {
    return r = r.childContextTypes, r != null;
  }
  function qa() {
    $e(bt), $e(pt);
  }
  function mx(r, s, c) {
    if (pt.current !== hr) throw Error(n(168));
    ze(pt, s), ze(bt, c);
  }
  function vx(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var x in g) if (!(x in s)) throw Error(n(108, K(r) || "Unknown", x));
    return Q({}, c, g);
  }
  function za(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || hr, Vr = pt.current, ze(pt, r), ze(bt, bt.current), !0;
  }
  function yx(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = vx(r, s, Vr), g.__reactInternalMemoizedMergedChildContext = r, $e(bt), $e(pt), ze(pt, r)) : $e(bt), ze(bt, c);
  }
  var Fn = null, Fa = !1, Jc = !1;
  function xx(r) {
    Fn === null ? Fn = [r] : Fn.push(r);
  }
  function O2(r) {
    Fa = !0, xx(r);
  }
  function pr() {
    if (!Jc && Fn !== null) {
      Jc = !0;
      var r = 0, s = qe;
      try {
        var c = Fn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Fn = null, Fa = !1;
      } catch (x) {
        throw Fn !== null && (Fn = Fn.slice(r + 1)), ma(zi, pr), x;
      } finally {
        qe = s, Jc = !1;
      }
    }
    return null;
  }
  var jo = [], qo = 0, $a = null, Ba = 0, Ut = [], Gt = 0, Hr = null, $n = 1, Bn = "";
  function Wr(r, s) {
    jo[qo++] = Ba, jo[qo++] = $a, $a = r, Ba = s;
  }
  function wx(r, s, c) {
    Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Hr, Hr = r;
    var g = $n;
    r = Bn;
    var x = 32 - At(g) - 1;
    g &= ~(1 << x), c += 1;
    var S = 32 - At(s) + x;
    if (30 < S) {
      var T = x - x % 5;
      S = (g & (1 << T) - 1).toString(32), g >>= T, x -= T, $n = 1 << 32 - At(s) + x | c << x | g, Bn = S + r;
    } else $n = 1 << S | c << x | g, Bn = r;
  }
  function ef(r) {
    r.return !== null && (Wr(r, 1), wx(r, 1, 0));
  }
  function tf(r) {
    for (; r === $a; ) $a = jo[--qo], jo[qo] = null, Ba = jo[--qo], jo[qo] = null;
    for (; r === Hr; ) Hr = Ut[--Gt], Ut[Gt] = null, Bn = Ut[--Gt], Ut[Gt] = null, $n = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, Ve = !1, on = null;
  function _x(r, s) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function bx(r, s) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return s = s.nodeType !== 1 || c.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (r.stateNode = s, Mt = r, Ot = fr(s.firstChild), !0) : !1;
      case 6:
        return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (r.stateNode = s, Mt = r, Ot = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (c = Hr !== null ? { id: $n, overflow: Bn } : null, r.memoizedState = { dehydrated: s, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = s, c.return = r, r.child = c, Mt = r, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function nf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function rf(r) {
    if (Ve) {
      var s = Ot;
      if (s) {
        var c = s;
        if (!bx(r, s)) {
          if (nf(r)) throw Error(n(418));
          s = fr(c.nextSibling);
          var g = Mt;
          s && bx(r, s) ? _x(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r);
        }
      } else {
        if (nf(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r;
      }
    }
  }
  function Sx(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Mt = r;
  }
  function Va(r) {
    if (r !== Mt) return !1;
    if (!Ve) return Sx(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !Yc(r.type, r.memoizedProps)), s && (s = Ot)) {
      if (nf(r)) throw Ex(), Error(n(418));
      for (; s; ) _x(r, s), s = fr(s.nextSibling);
    }
    if (Sx(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
      e: {
        for (r = r.nextSibling, s = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data;
            if (c === "/$") {
              if (s === 0) {
                Ot = fr(r.nextSibling);
                break e;
              }
              s--;
            } else c !== "$" && c !== "$!" && c !== "$?" || s++;
          }
          r = r.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Mt ? fr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function Ex() {
    for (var r = Ot; r; ) r = fr(r.nextSibling);
  }
  function zo() {
    Ot = Mt = null, Ve = !1;
  }
  function of(r) {
    on === null ? on = [r] : on.push(r);
  }
  var L2 = N.ReactCurrentBatchConfig;
  function os(r, s, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(n(147, r));
        var x = g, S = "" + r;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === S ? s.ref : (s = function(T) {
          var F = x.refs;
          T === null ? delete F[S] : F[S] = T;
        }, s._stringRef = S, s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Ha(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Cx(r) {
    var s = r._init;
    return s(r._payload);
  }
  function kx(r) {
    function s(ne, J) {
      if (r) {
        var re = ne.deletions;
        re === null ? (ne.deletions = [J], ne.flags |= 16) : re.push(J);
      }
    }
    function c(ne, J) {
      if (!r) return null;
      for (; J !== null; ) s(ne, J), J = J.sibling;
      return null;
    }
    function g(ne, J) {
      for (ne = /* @__PURE__ */ new Map(); J !== null; ) J.key !== null ? ne.set(J.key, J) : ne.set(J.index, J), J = J.sibling;
      return ne;
    }
    function x(ne, J) {
      return ne = br(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function S(ne, J, re) {
      return ne.index = re, r ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function T(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function F(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Xf(re, ne.mode, he), J.return = ne, J) : (J = x(J, re), J.return = ne, J);
    }
    function G(ne, J, re, he) {
      var Ce = re.type;
      return Ce === I ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === V && Cx(Ce) === J.type) ? (he = x(J, re.props), he.ref = os(ne, J, re), he.return = ne, he) : (he = pl(re.type, re.key, re.props, null, ne.mode, he), he.ref = os(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = Qf(re, ne.mode, he), J.return = ne, J) : (J = x(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Jr(re, ne.mode, he, Ce), J.return = ne, J) : (J = x(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Xf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = pl(J.type, J.key, J.props, null, ne.mode, re), re.ref = os(ne, null, J), re.return = ne, re;
          case A:
            return J = Qf(J, ne.mode, re), J.return = ne, J;
          case V:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || z(J)) return J = Jr(J, ne.mode, re, null), J.return = ne, J;
        Ha(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : F(ne, J, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case P:
            return re.key === Ce ? G(ne, J, re, he) : null;
          case A:
            return re.key === Ce ? oe(ne, J, re, he) : null;
          case V:
            return Ce = re._init, le(
              ne,
              J,
              Ce(re._payload),
              he
            );
        }
        if (Ft(re) || z(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Ha(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, F(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case P:
            return ne = ne.get(he.key === null ? re : he.key) || null, G(J, ne, he, Ce);
          case A:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case V:
            var ke = he._init;
            return ge(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || z(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Ha(J, he);
      }
      return null;
    }
    function xe(ne, J, re, he) {
      for (var Ce = null, ke = null, Ne = J, Pe = J = 0, ct = null; Ne !== null && Pe < re.length; Pe++) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var De = le(ne, Ne, re[Pe], he);
        if (De === null) {
          Ne === null && (Ne = ct);
          break;
        }
        r && Ne && De.alternate === null && s(ne, Ne), J = S(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De, Ne = ct;
      }
      if (Pe === re.length) return c(ne, Ne), Ve && Wr(ne, Pe), Ce;
      if (Ne === null) {
        for (; Pe < re.length; Pe++) Ne = fe(ne, re[Pe], he), Ne !== null && (J = S(Ne, J, Pe), ke === null ? Ce = Ne : ke.sibling = Ne, ke = Ne);
        return Ve && Wr(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); Pe < re.length; Pe++) ct = ge(Ne, ne, Pe, re[Pe], he), ct !== null && (r && ct.alternate !== null && Ne.delete(ct.key === null ? Pe : ct.key), J = S(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return r && Ne.forEach(function(Sr) {
        return s(ne, Sr);
      }), Ve && Wr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = z(re);
      if (typeof Ce != "function") throw Error(n(150));
      if (re = Ce.call(re), re == null) throw Error(n(151));
      for (var ke = Ce = null, Ne = J, Pe = J = 0, ct = null, De = re.next(); Ne !== null && !De.done; Pe++, De = re.next()) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var Sr = le(ne, Ne, De.value, he);
        if (Sr === null) {
          Ne === null && (Ne = ct);
          break;
        }
        r && Ne && Sr.alternate === null && s(ne, Ne), J = S(Sr, J, Pe), ke === null ? Ce = Sr : ke.sibling = Sr, ke = Sr, Ne = ct;
      }
      if (De.done) return c(
        ne,
        Ne
      ), Ve && Wr(ne, Pe), Ce;
      if (Ne === null) {
        for (; !De.done; Pe++, De = re.next()) De = fe(ne, De.value, he), De !== null && (J = S(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De);
        return Ve && Wr(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); !De.done; Pe++, De = re.next()) De = ge(Ne, ne, Pe, De.value, he), De !== null && (r && De.alternate !== null && Ne.delete(De.key === null ? Pe : De.key), J = S(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De);
      return r && Ne.forEach(function(pM) {
        return s(ne, pM);
      }), Ve && Wr(ne, Pe), Ce;
    }
    function et(ne, J, re, he) {
      if (typeof re == "object" && re !== null && re.type === I && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case P:
            e: {
              for (var Ce = re.key, ke = J; ke !== null; ) {
                if (ke.key === Ce) {
                  if (Ce = re.type, Ce === I) {
                    if (ke.tag === 7) {
                      c(ne, ke.sibling), J = x(ke, re.props.children), J.return = ne, ne = J;
                      break e;
                    }
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === V && Cx(Ce) === ke.type) {
                    c(ne, ke.sibling), J = x(ke, re.props), J.ref = os(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === I ? (J = Jr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = pl(re.type, re.key, re.props, null, ne.mode, he), he.ref = os(ne, J, re), he.return = ne, ne = he);
            }
            return T(ne);
          case A:
            e: {
              for (ke = re.key; J !== null; ) {
                if (J.key === ke) if (J.tag === 4 && J.stateNode.containerInfo === re.containerInfo && J.stateNode.implementation === re.implementation) {
                  c(ne, J.sibling), J = x(J, re.children || []), J.return = ne, ne = J;
                  break e;
                } else {
                  c(ne, J);
                  break;
                }
                else s(ne, J);
                J = J.sibling;
              }
              J = Qf(re, ne.mode, he), J.return = ne, ne = J;
            }
            return T(ne);
          case V:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return xe(ne, J, re, he);
        if (z(re)) return Se(ne, J, re, he);
        Ha(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = x(J, re), J.return = ne, ne = J) : (c(ne, J), J = Xf(re, ne.mode, he), J.return = ne, ne = J), T(ne)) : c(ne, J);
    }
    return et;
  }
  var Fo = kx(!0), Nx = kx(!1), Wa = dr(null), Ua = null, $o = null, sf = null;
  function af() {
    sf = $o = Ua = null;
  }
  function lf(r) {
    var s = Wa.current;
    $e(Wa), r._currentValue = s;
  }
  function uf(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Bo(r, s) {
    Ua = r, sf = $o = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Yt(r) {
    var s = r._currentValue;
    if (sf !== r) if (r = { context: r, memoizedValue: s, next: null }, $o === null) {
      if (Ua === null) throw Error(n(308));
      $o = r, Ua.dependencies = { lanes: 0, firstContext: r };
    } else $o = $o.next = r;
    return s;
  }
  var Ur = null;
  function cf(r) {
    Ur === null ? Ur = [r] : Ur.push(r);
  }
  function Rx(r, s, c, g) {
    var x = s.interleaved;
    return x === null ? (c.next = c, cf(s)) : (c.next = x.next, x.next = c), s.interleaved = c, Vn(r, g);
  }
  function Vn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var gr = !1;
  function ff(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Px(r, s) {
    r = r.updateQueue, s.updateQueue === r && (s.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
  }
  function Hn(r, s) {
    return { eventTime: r, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function mr(r, s, c) {
    var g = r.updateQueue;
    if (g === null) return null;
    if (g = g.shared, (Oe & 2) !== 0) {
      var x = g.pending;
      return x === null ? s.next = s : (s.next = x.next, x.next = s), g.pending = s, Vn(r, c);
    }
    return x = g.interleaved, x === null ? (s.next = s, cf(g)) : (s.next = x.next, x.next = s), g.interleaved = s, Vn(r, c);
  }
  function Ga(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ec(r, c);
    }
  }
  function Tx(r, s) {
    var c = r.updateQueue, g = r.alternate;
    if (g !== null && (g = g.updateQueue, c === g)) {
      var x = null, S = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var T = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          S === null ? x = S = T : S = S.next = T, c = c.next;
        } while (c !== null);
        S === null ? x = S = s : S = S.next = s;
      } else x = S = s;
      c = { baseState: g.baseState, firstBaseUpdate: x, lastBaseUpdate: S, shared: g.shared, effects: g.effects }, r.updateQueue = c;
      return;
    }
    r = c.lastBaseUpdate, r === null ? c.firstBaseUpdate = s : r.next = s, c.lastBaseUpdate = s;
  }
  function Ya(r, s, c, g) {
    var x = r.updateQueue;
    gr = !1;
    var S = x.firstBaseUpdate, T = x.lastBaseUpdate, F = x.shared.pending;
    if (F !== null) {
      x.shared.pending = null;
      var G = F, oe = G.next;
      G.next = null, T === null ? S = oe : T.next = oe, T = G;
      var ue = r.alternate;
      ue !== null && (ue = ue.updateQueue, F = ue.lastBaseUpdate, F !== T && (F === null ? ue.firstBaseUpdate = oe : F.next = oe, ue.lastBaseUpdate = G));
    }
    if (S !== null) {
      var fe = x.baseState;
      T = 0, ue = oe = G = null, F = S;
      do {
        var le = F.lane, ge = F.eventTime;
        if ((g & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: ge,
            lane: 0,
            tag: F.tag,
            payload: F.payload,
            callback: F.callback,
            next: null
          });
          e: {
            var xe = r, Se = F;
            switch (le = s, ge = c, Se.tag) {
              case 1:
                if (xe = Se.payload, typeof xe == "function") {
                  fe = xe.call(ge, fe, le);
                  break e;
                }
                fe = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Se.payload, le = typeof xe == "function" ? xe.call(ge, fe, le) : xe, le == null) break e;
                fe = Q({}, fe, le);
                break e;
              case 2:
                gr = !0;
            }
          }
          F.callback !== null && F.lane !== 0 && (r.flags |= 64, le = x.effects, le === null ? x.effects = [F] : le.push(F));
        } else ge = { eventTime: ge, lane: le, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, ue === null ? (oe = ue = ge, G = fe) : ue = ue.next = ge, T |= le;
        if (F = F.next, F === null) {
          if (F = x.shared.pending, F === null) break;
          le = F, F = le.next, le.next = null, x.lastBaseUpdate = le, x.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (G = fe), x.baseState = G, x.firstBaseUpdate = oe, x.lastBaseUpdate = ue, s = x.shared.interleaved, s !== null) {
        x = s;
        do
          T |= x.lane, x = x.next;
        while (x !== s);
      } else S === null && (x.shared.lanes = 0);
      Kr |= T, r.lanes = T, r.memoizedState = fe;
    }
  }
  function Ax(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], x = g.callback;
      if (x !== null) {
        if (g.callback = null, g = c, typeof x != "function") throw Error(n(191, x));
        x.call(g);
      }
    }
  }
  var is = {}, En = dr(is), ss = dr(is), as = dr(is);
  function Gr(r) {
    if (r === is) throw Error(n(174));
    return r;
  }
  function df(r, s) {
    switch (ze(as, s), ze(ss, r), ze(En, is), r = s.nodeType, r) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Bt(null, "");
        break;
      default:
        r = r === 8 ? s.parentNode : s, s = r.namespaceURI || null, r = r.tagName, s = Bt(s, r);
    }
    $e(En), ze(En, s);
  }
  function Vo() {
    $e(En), $e(ss), $e(as);
  }
  function Ix(r) {
    Gr(as.current);
    var s = Gr(En.current), c = Bt(s, r.type);
    s !== c && (ze(ss, r), ze(En, c));
  }
  function hf(r) {
    ss.current === r && ($e(En), $e(ss));
  }
  var Ke = dr(0);
  function Ka(r) {
    for (var s = r; s !== null; ) {
      if (s.tag === 13) {
        var c = s.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!")) return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return null;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
    return null;
  }
  var pf = [];
  function gf() {
    for (var r = 0; r < pf.length; r++) pf[r]._workInProgressVersionPrimary = null;
    pf.length = 0;
  }
  var Xa = N.ReactCurrentDispatcher, mf = N.ReactCurrentBatchConfig, Yr = 0, Xe = null, ot = null, lt = null, Qa = !1, ls = !1, us = 0, D2 = 0;
  function gt() {
    throw Error(n(321));
  }
  function vf(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!rn(r[c], s[c])) return !1;
    return !0;
  }
  function yf(r, s, c, g, x, S) {
    if (Yr = S, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Xa.current = r === null || r.memoizedState === null ? F2 : $2, r = c(g, x), ls) {
      S = 0;
      do {
        if (ls = !1, us = 0, 25 <= S) throw Error(n(301));
        S += 1, lt = ot = null, s.updateQueue = null, Xa.current = B2, r = c(g, x);
      } while (ls);
    }
    if (Xa.current = el, s = ot !== null && ot.next !== null, Yr = 0, lt = ot = Xe = null, Qa = !1, s) throw Error(n(300));
    return r;
  }
  function xf() {
    var r = us !== 0;
    return us = 0, r;
  }
  function Cn() {
    var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Xe.memoizedState = lt = r : lt = lt.next = r, lt;
  }
  function Kt() {
    if (ot === null) {
      var r = Xe.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = ot.next;
    var s = lt === null ? Xe.memoizedState : lt.next;
    if (s !== null) lt = s, ot = r;
    else {
      if (r === null) throw Error(n(310));
      ot = r, r = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, lt === null ? Xe.memoizedState = lt = r : lt = lt.next = r;
    }
    return lt;
  }
  function cs(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function wf(r) {
    var s = Kt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = ot, x = g.baseQueue, S = c.pending;
    if (S !== null) {
      if (x !== null) {
        var T = x.next;
        x.next = S.next, S.next = T;
      }
      g.baseQueue = x = S, c.pending = null;
    }
    if (x !== null) {
      S = x.next, g = g.baseState;
      var F = T = null, G = null, oe = S;
      do {
        var ue = oe.lane;
        if ((Yr & ue) === ue) G !== null && (G = G.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          G === null ? (F = G = fe, T = g) : G = G.next = fe, Xe.lanes |= ue, Kr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== S);
      G === null ? T = g : G.next = F, rn(g, s.memoizedState) || (Et = !0), s.memoizedState = g, s.baseState = T, s.baseQueue = G, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      x = r;
      do
        S = x.lane, Xe.lanes |= S, Kr |= S, x = x.next;
      while (x !== r);
    } else x === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function _f(r) {
    var s = Kt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = c.dispatch, x = c.pending, S = s.memoizedState;
    if (x !== null) {
      c.pending = null;
      var T = x = x.next;
      do
        S = r(S, T.action), T = T.next;
      while (T !== x);
      rn(S, s.memoizedState) || (Et = !0), s.memoizedState = S, s.baseQueue === null && (s.baseState = S), c.lastRenderedState = S;
    }
    return [S, g];
  }
  function Mx() {
  }
  function Ox(r, s) {
    var c = Xe, g = Kt(), x = s(), S = !rn(g.memoizedState, x);
    if (S && (g.memoizedState = x, Et = !0), g = g.queue, bf(jx.bind(null, c, g, r), [r]), g.getSnapshot !== s || S || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, fs(9, Dx.bind(null, c, g, x, s), void 0, null), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || Lx(c, s, x);
    }
    return x;
  }
  function Lx(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function Dx(r, s, c, g) {
    s.value = c, s.getSnapshot = g, qx(s) && zx(r);
  }
  function jx(r, s, c) {
    return c(function() {
      qx(s) && zx(r);
    });
  }
  function qx(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !rn(r, c);
    } catch {
      return !0;
    }
  }
  function zx(r) {
    var s = Vn(r, 1);
    s !== null && un(s, r, 1, -1);
  }
  function Fx(r) {
    var s = Cn();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cs, lastRenderedState: r }, s.queue = r, r = r.dispatch = z2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function fs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function $x() {
    return Kt().memoizedState;
  }
  function Za(r, s, c, g) {
    var x = Cn();
    Xe.flags |= r, x.memoizedState = fs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function Ja(r, s, c, g) {
    var x = Kt();
    g = g === void 0 ? null : g;
    var S = void 0;
    if (ot !== null) {
      var T = ot.memoizedState;
      if (S = T.destroy, g !== null && vf(g, T.deps)) {
        x.memoizedState = fs(s, c, S, g);
        return;
      }
    }
    Xe.flags |= r, x.memoizedState = fs(1 | s, c, S, g);
  }
  function Bx(r, s) {
    return Za(8390656, 8, r, s);
  }
  function bf(r, s) {
    return Ja(2048, 8, r, s);
  }
  function Vx(r, s) {
    return Ja(4, 2, r, s);
  }
  function Hx(r, s) {
    return Ja(4, 4, r, s);
  }
  function Wx(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function Ux(r, s, c) {
    return c = c != null ? c.concat([r]) : null, Ja(4, 4, Wx.bind(null, s, r), c);
  }
  function Sf() {
  }
  function Gx(r, s) {
    var c = Kt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && vf(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function Yx(r, s) {
    var c = Kt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && vf(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function Kx(r, s, c) {
    return (Yr & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (rn(c, s) || (c = _a(), Xe.lanes |= c, Kr |= c, r.baseState = !0), s);
  }
  function j2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = mf.transition;
    mf.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, mf.transition = g;
    }
  }
  function Xx() {
    return Kt().memoizedState;
  }
  function q2(r, s, c) {
    var g = wr(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, Qx(r)) Zx(s, c);
    else if (c = Rx(r, s, c, g), c !== null) {
      var x = wt();
      un(c, r, g, x), Jx(c, s, g);
    }
  }
  function z2(r, s, c) {
    var g = wr(r), x = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (Qx(r)) Zx(s, x);
    else {
      var S = r.alternate;
      if (r.lanes === 0 && (S === null || S.lanes === 0) && (S = s.lastRenderedReducer, S !== null)) try {
        var T = s.lastRenderedState, F = S(T, c);
        if (x.hasEagerState = !0, x.eagerState = F, rn(F, T)) {
          var G = s.interleaved;
          G === null ? (x.next = x, cf(s)) : (x.next = G.next, G.next = x), s.interleaved = x;
          return;
        }
      } catch {
      } finally {
      }
      c = Rx(r, s, x, g), c !== null && (x = wt(), un(c, r, g, x), Jx(c, s, g));
    }
  }
  function Qx(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function Zx(r, s) {
    ls = Qa = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function Jx(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ec(r, c);
    }
  }
  var el = { readContext: Yt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, F2 = { readContext: Yt, useCallback: function(r, s) {
    return Cn().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Yt, useEffect: Bx, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, Za(
      4194308,
      4,
      Wx.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return Za(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return Za(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = Cn();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = Cn();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = q2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = Cn();
    return r = { current: r }, s.memoizedState = r;
  }, useState: Fx, useDebugValue: Sf, useDeferredValue: function(r) {
    return Cn().memoizedState = r;
  }, useTransition: function() {
    var r = Fx(!1), s = r[0];
    return r = j2.bind(null, r[1]), Cn().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, x = Cn();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || Lx(g, s, c);
    }
    x.memoizedState = c;
    var S = { value: c, getSnapshot: s };
    return x.queue = S, Bx(jx.bind(
      null,
      g,
      S,
      r
    ), [r]), g.flags |= 2048, fs(9, Dx.bind(null, g, S, c, s), void 0, null), c;
  }, useId: function() {
    var r = Cn(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Bn, g = $n;
      c = (g & ~(1 << 32 - At(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = us++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = D2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, $2 = {
    readContext: Yt,
    useCallback: Gx,
    useContext: Yt,
    useEffect: bf,
    useImperativeHandle: Ux,
    useInsertionEffect: Vx,
    useLayoutEffect: Hx,
    useMemo: Yx,
    useReducer: wf,
    useRef: $x,
    useState: function() {
      return wf(cs);
    },
    useDebugValue: Sf,
    useDeferredValue: function(r) {
      var s = Kt();
      return Kx(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = wf(cs)[0], s = Kt().memoizedState;
      return [r, s];
    },
    useMutableSource: Mx,
    useSyncExternalStore: Ox,
    useId: Xx,
    unstable_isNewReconciler: !1
  }, B2 = { readContext: Yt, useCallback: Gx, useContext: Yt, useEffect: bf, useImperativeHandle: Ux, useInsertionEffect: Vx, useLayoutEffect: Hx, useMemo: Yx, useReducer: _f, useRef: $x, useState: function() {
    return _f(cs);
  }, useDebugValue: Sf, useDeferredValue: function(r) {
    var s = Kt();
    return ot === null ? s.memoizedState = r : Kx(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = _f(cs)[0], s = Kt().memoizedState;
    return [r, s];
  }, useMutableSource: Mx, useSyncExternalStore: Ox, useId: Xx, unstable_isNewReconciler: !1 };
  function sn(r, s) {
    if (r && r.defaultProps) {
      s = Q({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function Ef(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : Q({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var tl = { isMounted: function(r) {
    return (r = r._reactInternals) ? _n(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = wt(), x = wr(r), S = Hn(g, x);
    S.payload = s, c != null && (S.callback = c), s = mr(r, S, x), s !== null && (un(s, r, x, g), Ga(s, r, x));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = wt(), x = wr(r), S = Hn(g, x);
    S.tag = 1, S.payload = s, c != null && (S.callback = c), s = mr(r, S, x), s !== null && (un(s, r, x, g), Ga(s, r, x));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = wt(), g = wr(r), x = Hn(c, g);
    x.tag = 2, s != null && (x.callback = s), s = mr(r, x, g), s !== null && (un(s, r, g, c), Ga(s, r, g));
  } };
  function ew(r, s, c, g, x, S, T) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, S, T) : s.prototype && s.prototype.isPureReactComponent ? !Qi(c, g) || !Qi(x, S) : !0;
  }
  function tw(r, s, c) {
    var g = !1, x = hr, S = s.contextType;
    return typeof S == "object" && S !== null ? S = Yt(S) : (x = St(s) ? Vr : pt.current, g = s.contextTypes, S = (g = g != null) ? Do(r, x) : hr), s = new s(c, S), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = tl, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = x, r.__reactInternalMemoizedMaskedChildContext = S), s;
  }
  function nw(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && tl.enqueueReplaceState(s, s.state, null);
  }
  function Cf(r, s, c, g) {
    var x = r.stateNode;
    x.props = c, x.state = r.memoizedState, x.refs = {}, ff(r);
    var S = s.contextType;
    typeof S == "object" && S !== null ? x.context = Yt(S) : (S = St(s) ? Vr : pt.current, x.context = Do(r, S)), x.state = r.memoizedState, S = s.getDerivedStateFromProps, typeof S == "function" && (Ef(r, s, S, c), x.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function" || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (s = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), s !== x.state && tl.enqueueReplaceState(x, x.state, null), Ya(r, c, x, g), x.state = r.memoizedState), typeof x.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function Ho(r, s) {
    try {
      var c = "", g = s;
      do
        c += Z(g), g = g.return;
      while (g);
      var x = c;
    } catch (S) {
      x = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: r, source: s, stack: x, digest: null };
  }
  function kf(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function Nf(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var V2 = typeof WeakMap == "function" ? WeakMap : Map;
  function rw(r, s, c) {
    c = Hn(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      ll || (ll = !0, Bf = g), Nf(r, s);
    }, c;
  }
  function ow(r, s, c) {
    c = Hn(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var x = s.value;
      c.payload = function() {
        return g(x);
      }, c.callback = function() {
        Nf(r, s);
      };
    }
    var S = r.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (c.callback = function() {
      Nf(r, s), typeof g != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, { componentStack: T !== null ? T : "" });
    }), c;
  }
  function iw(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new V2();
      var x = /* @__PURE__ */ new Set();
      g.set(s, x);
    } else x = g.get(s), x === void 0 && (x = /* @__PURE__ */ new Set(), g.set(s, x));
    x.has(c) || (x.add(c), r = rM.bind(null, r, s, c), s.then(r, r));
  }
  function sw(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function aw(r, s, c, g, x) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Hn(-1, 1), s.tag = 2, mr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = x, r);
  }
  var H2 = N.ReactCurrentOwner, Et = !1;
  function xt(r, s, c, g) {
    s.child = r === null ? Nx(s, null, c, g) : Fo(s, r.child, c, g);
  }
  function lw(r, s, c, g, x) {
    c = c.render;
    var S = s.ref;
    return Bo(s, x), g = yf(r, s, c, g, S, x), c = xf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~x, Wn(r, s, x)) : (Ve && c && ef(s), s.flags |= 1, xt(r, s, g, x), s.child);
  }
  function uw(r, s, c, g, x) {
    if (r === null) {
      var S = c.type;
      return typeof S == "function" && !Kf(S) && S.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = S, cw(r, s, S, g, x)) : (r = pl(c.type, null, g, s, s.mode, x), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (S = r.child, (r.lanes & x) === 0) {
      var T = S.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Qi, c(T, g) && r.ref === s.ref) return Wn(r, s, x);
    }
    return s.flags |= 1, r = br(S, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function cw(r, s, c, g, x) {
    if (r !== null) {
      var S = r.memoizedProps;
      if (Qi(S, g) && r.ref === s.ref) if (Et = !1, s.pendingProps = g = S, (r.lanes & x) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return s.lanes = r.lanes, Wn(r, s, x);
    }
    return Rf(r, s, c, g, x);
  }
  function fw(r, s, c) {
    var g = s.pendingProps, x = g.children, S = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(Uo, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return r = S !== null ? S.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, ze(Uo, Lt), Lt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = S !== null ? S.baseLanes : c, ze(Uo, Lt), Lt |= g;
    }
    else S !== null ? (g = S.baseLanes | c, s.memoizedState = null) : g = c, ze(Uo, Lt), Lt |= g;
    return xt(r, s, x, c), s.child;
  }
  function dw(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Rf(r, s, c, g, x) {
    var S = St(c) ? Vr : pt.current;
    return S = Do(s, S), Bo(s, x), c = yf(r, s, c, g, S, x), g = xf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~x, Wn(r, s, x)) : (Ve && g && ef(s), s.flags |= 1, xt(r, s, c, x), s.child);
  }
  function hw(r, s, c, g, x) {
    if (St(c)) {
      var S = !0;
      za(s);
    } else S = !1;
    if (Bo(s, x), s.stateNode === null) rl(r, s), tw(s, c, g), Cf(s, c, g, x), g = !0;
    else if (r === null) {
      var T = s.stateNode, F = s.memoizedProps;
      T.props = F;
      var G = T.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? Vr : pt.current, oe = Do(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      fe || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (F !== g || G !== oe) && nw(s, T, g, oe), gr = !1;
      var le = s.memoizedState;
      T.state = le, Ya(s, g, T, x), G = s.memoizedState, F !== g || le !== G || bt.current || gr ? (typeof ue == "function" && (Ef(s, c, ue, g), G = s.memoizedState), (F = gr || ew(s, c, F, g, le, G, oe)) ? (fe || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = G), T.props = g, T.state = G, T.context = oe, g = F) : (typeof T.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      T = s.stateNode, Px(r, s), F = s.memoizedProps, oe = s.type === s.elementType ? F : sn(s.type, F), T.props = oe, fe = s.pendingProps, le = T.context, G = c.contextType, typeof G == "object" && G !== null ? G = Yt(G) : (G = St(c) ? Vr : pt.current, G = Do(s, G));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (F !== fe || le !== G) && nw(s, T, g, G), gr = !1, le = s.memoizedState, T.state = le, Ya(s, g, T, x);
      var xe = s.memoizedState;
      F !== fe || le !== xe || bt.current || gr ? (typeof ge == "function" && (Ef(s, c, ge, g), xe = s.memoizedState), (oe = gr || ew(s, c, oe, g, le, xe, G) || !1) ? (ue || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(g, xe, G), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(g, xe, G)), typeof T.componentDidUpdate == "function" && (s.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = xe), T.props = g, T.state = xe, T.context = G, g = oe) : (typeof T.componentDidUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return Pf(r, s, c, g, S, x);
  }
  function Pf(r, s, c, g, x, S) {
    dw(r, s);
    var T = (s.flags & 128) !== 0;
    if (!g && !T) return x && yx(s, c, !1), Wn(r, s, S);
    g = s.stateNode, H2.current = s;
    var F = T && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && T ? (s.child = Fo(s, r.child, null, S), s.child = Fo(s, null, F, S)) : xt(r, s, F, S), s.memoizedState = g.state, x && yx(s, c, !0), s.child;
  }
  function pw(r) {
    var s = r.stateNode;
    s.pendingContext ? mx(r, s.pendingContext, s.pendingContext !== s.context) : s.context && mx(r, s.context, !1), df(r, s.containerInfo);
  }
  function gw(r, s, c, g, x) {
    return zo(), of(x), s.flags |= 256, xt(r, s, c, g), s.child;
  }
  var Tf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Af(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function mw(r, s, c) {
    var g = s.pendingProps, x = Ke.current, S = !1, T = (s.flags & 128) !== 0, F;
    if ((F = T) || (F = r !== null && r.memoizedState === null ? !1 : (x & 2) !== 0), F ? (S = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (x |= 1), ze(Ke, x & 1), r === null)
      return rf(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (T = g.children, r = g.fallback, S ? (g = s.mode, S = s.child, T = { mode: "hidden", children: T }, (g & 1) === 0 && S !== null ? (S.childLanes = 0, S.pendingProps = T) : S = gl(T, g, 0, null), r = Jr(r, g, c, null), S.return = s, r.return = s, S.sibling = r, s.child = S, s.child.memoizedState = Af(c), s.memoizedState = Tf, r) : If(s, T));
    if (x = r.memoizedState, x !== null && (F = x.dehydrated, F !== null)) return W2(r, s, T, g, F, x, c);
    if (S) {
      S = g.fallback, T = s.mode, x = r.child, F = x.sibling;
      var G = { mode: "hidden", children: g.children };
      return (T & 1) === 0 && s.child !== x ? (g = s.child, g.childLanes = 0, g.pendingProps = G, s.deletions = null) : (g = br(x, G), g.subtreeFlags = x.subtreeFlags & 14680064), F !== null ? S = br(F, S) : (S = Jr(S, T, c, null), S.flags |= 2), S.return = s, g.return = s, g.sibling = S, s.child = g, g = S, S = s.child, T = r.child.memoizedState, T = T === null ? Af(c) : { baseLanes: T.baseLanes | c, cachePool: null, transitions: T.transitions }, S.memoizedState = T, S.childLanes = r.childLanes & ~c, s.memoizedState = Tf, g;
    }
    return S = r.child, r = S.sibling, g = br(S, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function If(r, s) {
    return s = gl({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function nl(r, s, c, g) {
    return g !== null && of(g), Fo(s, r.child, null, c), r = If(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function W2(r, s, c, g, x, S, T) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = kf(Error(n(422))), nl(r, s, T, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (S = g.fallback, x = s.mode, g = gl({ mode: "visible", children: g.children }, x, 0, null), S = Jr(S, x, T, null), S.flags |= 2, g.return = s, S.return = s, g.sibling = S, s.child = g, (s.mode & 1) !== 0 && Fo(s, r.child, null, T), s.child.memoizedState = Af(T), s.memoizedState = Tf, S);
    if ((s.mode & 1) === 0) return nl(r, s, T, null);
    if (x.data === "$!") {
      if (g = x.nextSibling && x.nextSibling.dataset, g) var F = g.dgst;
      return g = F, S = Error(n(419)), g = kf(S, g, void 0), nl(r, s, T, g);
    }
    if (F = (T & r.childLanes) !== 0, Et || F) {
      if (g = ut, g !== null) {
        switch (T & -T) {
          case 4:
            x = 2;
            break;
          case 16:
            x = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            x = 32;
            break;
          case 536870912:
            x = 268435456;
            break;
          default:
            x = 0;
        }
        x = (x & (g.suspendedLanes | T)) !== 0 ? 0 : x, x !== 0 && x !== S.retryLane && (S.retryLane = x, Vn(r, x), un(g, r, x, -1));
      }
      return Yf(), g = kf(Error(n(421))), nl(r, s, T, g);
    }
    return x.data === "$?" ? (s.flags |= 128, s.child = r.child, s = oM.bind(null, r), x._reactRetry = s, null) : (r = S.treeContext, Ot = fr(x.nextSibling), Mt = s, Ve = !0, on = null, r !== null && (Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Hr, $n = r.id, Bn = r.overflow, Hr = s), s = If(s, g.children), s.flags |= 4096, s);
  }
  function vw(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), uf(r.return, s, c);
  }
  function Mf(r, s, c, g, x) {
    var S = r.memoizedState;
    S === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: x } : (S.isBackwards = s, S.rendering = null, S.renderingStartTime = 0, S.last = g, S.tail = c, S.tailMode = x);
  }
  function yw(r, s, c) {
    var g = s.pendingProps, x = g.revealOrder, S = g.tail;
    if (xt(r, s, g.children, c), g = Ke.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && vw(r, c, s);
        else if (r.tag === 19) vw(r, c, s);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === s) break e;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === s) break e;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      g &= 1;
    }
    if (ze(Ke, g), (s.mode & 1) === 0) s.memoizedState = null;
    else switch (x) {
      case "forwards":
        for (c = s.child, x = null; c !== null; ) r = c.alternate, r !== null && Ka(r) === null && (x = c), c = c.sibling;
        c = x, c === null ? (x = s.child, s.child = null) : (x = c.sibling, c.sibling = null), Mf(s, !1, x, c, S);
        break;
      case "backwards":
        for (c = null, x = s.child, s.child = null; x !== null; ) {
          if (r = x.alternate, r !== null && Ka(r) === null) {
            s.child = x;
            break;
          }
          r = x.sibling, x.sibling = c, c = x, x = r;
        }
        Mf(s, !0, c, null, S);
        break;
      case "together":
        Mf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function rl(r, s) {
    (s.mode & 1) === 0 && r !== null && (r.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Wn(r, s, c) {
    if (r !== null && (s.dependencies = r.dependencies), Kr |= s.lanes, (c & s.childLanes) === 0) return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (r = s.child, c = br(r, r.pendingProps), s.child = c, c.return = s; r.sibling !== null; ) r = r.sibling, c = c.sibling = br(r, r.pendingProps), c.return = s;
      c.sibling = null;
    }
    return s.child;
  }
  function U2(r, s, c) {
    switch (s.tag) {
      case 3:
        pw(s), zo();
        break;
      case 5:
        Ix(s);
        break;
      case 1:
        St(s.type) && za(s);
        break;
      case 4:
        df(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, x = s.memoizedProps.value;
        ze(Wa, g._currentValue), g._currentValue = x;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (ze(Ke, Ke.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? mw(r, s, c) : (ze(Ke, Ke.current & 1), r = Wn(r, s, c), r !== null ? r.sibling : null);
        ze(Ke, Ke.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return yw(r, s, c);
          s.flags |= 128;
        }
        if (x = s.memoizedState, x !== null && (x.rendering = null, x.tail = null, x.lastEffect = null), ze(Ke, Ke.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, fw(r, s, c);
    }
    return Wn(r, s, c);
  }
  var xw, Of, ww, _w;
  xw = function(r, s) {
    for (var c = s.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6) r.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c, c = c.child;
        continue;
      }
      if (c === s) break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === s) return;
        c = c.return;
      }
      c.sibling.return = c.return, c = c.sibling;
    }
  }, Of = function() {
  }, ww = function(r, s, c, g) {
    var x = r.memoizedProps;
    if (x !== g) {
      r = s.stateNode, Gr(En.current);
      var S = null;
      switch (c) {
        case "input":
          x = be(r, x), g = be(r, g), S = [];
          break;
        case "select":
          x = Q({}, x, { value: void 0 }), g = Q({}, g, { value: void 0 }), S = [];
          break;
        case "textarea":
          x = at(r, x), g = at(r, g), S = [];
          break;
        default:
          typeof x.onClick != "function" && typeof g.onClick == "function" && (r.onclick = Da);
      }
      Pi(c, g);
      var T;
      c = null;
      for (oe in x) if (!g.hasOwnProperty(oe) && x.hasOwnProperty(oe) && x[oe] != null) if (oe === "style") {
        var F = x[oe];
        for (T in F) F.hasOwnProperty(T) && (c || (c = {}), c[T] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (i.hasOwnProperty(oe) ? S || (S = []) : (S = S || []).push(oe, null));
      for (oe in g) {
        var G = g[oe];
        if (F = x != null ? x[oe] : void 0, g.hasOwnProperty(oe) && G !== F && (G != null || F != null)) if (oe === "style") if (F) {
          for (T in F) !F.hasOwnProperty(T) || G && G.hasOwnProperty(T) || (c || (c = {}), c[T] = "");
          for (T in G) G.hasOwnProperty(T) && F[T] !== G[T] && (c || (c = {}), c[T] = G[T]);
        } else c || (S || (S = []), S.push(
          oe,
          c
        )), c = G;
        else oe === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, F = F ? F.__html : void 0, G != null && F !== G && (S = S || []).push(oe, G)) : oe === "children" ? typeof G != "string" && typeof G != "number" || (S = S || []).push(oe, "" + G) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (i.hasOwnProperty(oe) ? (G != null && oe === "onScroll" && Fe("scroll", r), S || F === G || (S = [])) : (S = S || []).push(oe, G));
      }
      c && (S = S || []).push("style", c);
      var oe = S;
      (s.updateQueue = oe) && (s.flags |= 4);
    }
  }, _w = function(r, s, c, g) {
    c !== g && (s.flags |= 4);
  };
  function ds(r, s) {
    if (!Ve) switch (r.tailMode) {
      case "hidden":
        s = r.tail;
        for (var c = null; s !== null; ) s.alternate !== null && (c = s), s = s.sibling;
        c === null ? r.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = r.tail;
        for (var g = null; c !== null; ) c.alternate !== null && (g = c), c = c.sibling;
        g === null ? s || r.tail === null ? r.tail = null : r.tail.sibling = null : g.sibling = null;
    }
  }
  function mt(r) {
    var s = r.alternate !== null && r.alternate.child === r.child, c = 0, g = 0;
    if (s) for (var x = r.child; x !== null; ) c |= x.lanes | x.childLanes, g |= x.subtreeFlags & 14680064, g |= x.flags & 14680064, x.return = r, x = x.sibling;
    else for (x = r.child; x !== null; ) c |= x.lanes | x.childLanes, g |= x.subtreeFlags, g |= x.flags, x.return = r, x = x.sibling;
    return r.subtreeFlags |= g, r.childLanes = c, s;
  }
  function G2(r, s, c) {
    var g = s.pendingProps;
    switch (tf(s), s.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(s), null;
      case 1:
        return St(s.type) && qa(), mt(s), null;
      case 3:
        return g = s.stateNode, Vo(), $e(bt), $e(pt), gf(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Va(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, on !== null && (Wf(on), on = null))), Of(r, s), mt(s), null;
      case 5:
        hf(s);
        var x = Gr(as.current);
        if (c = s.type, r !== null && s.stateNode != null) ww(r, s, c, g, x), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return mt(s), null;
          }
          if (r = Gr(En.current), Va(s)) {
            g = s.stateNode, c = s.type;
            var S = s.memoizedProps;
            switch (g[Sn] = s, g[ns] = S, r = (s.mode & 1) !== 0, c) {
              case "dialog":
                Fe("cancel", g), Fe("close", g);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", g);
                break;
              case "video":
              case "audio":
                for (x = 0; x < Ji.length; x++) Fe(Ji[x], g);
                break;
              case "source":
                Fe("error", g);
                break;
              case "img":
              case "image":
              case "link":
                Fe(
                  "error",
                  g
                ), Fe("load", g);
                break;
              case "details":
                Fe("toggle", g);
                break;
              case "input":
                me(g, S), Fe("invalid", g);
                break;
              case "select":
                g._wrapperState = { wasMultiple: !!S.multiple }, Fe("invalid", g);
                break;
              case "textarea":
                Ge(g, S), Fe("invalid", g);
            }
            Pi(c, S), x = null;
            for (var T in S) if (S.hasOwnProperty(T)) {
              var F = S[T];
              T === "children" ? typeof F == "string" ? g.textContent !== F && (S.suppressHydrationWarning !== !0 && La(g.textContent, F, r), x = ["children", F]) : typeof F == "number" && g.textContent !== "" + F && (S.suppressHydrationWarning !== !0 && La(
                g.textContent,
                F,
                r
              ), x = ["children", "" + F]) : i.hasOwnProperty(T) && F != null && T === "onScroll" && Fe("scroll", g);
            }
            switch (c) {
              case "input":
                ce(g), Je(g, S, !0);
                break;
              case "textarea":
                ce(g), $t(g);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (g.onclick = Da);
            }
            g = x, s.updateQueue = g, g !== null && (s.flags |= 4);
          } else {
            T = x.nodeType === 9 ? x : x.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = nn(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = T.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = T.createElement(c, { is: g.is }) : (r = T.createElement(c), c === "select" && (T = r, g.multiple ? T.multiple = !0 : g.size && (T.size = g.size))) : r = T.createElementNS(r, c), r[Sn] = s, r[ns] = g, xw(r, s, !1, !1), s.stateNode = r;
            e: {
              switch (T = Ti(c, g), c) {
                case "dialog":
                  Fe("cancel", r), Fe("close", r), x = g;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fe("load", r), x = g;
                  break;
                case "video":
                case "audio":
                  for (x = 0; x < Ji.length; x++) Fe(Ji[x], r);
                  x = g;
                  break;
                case "source":
                  Fe("error", r), x = g;
                  break;
                case "img":
                case "image":
                case "link":
                  Fe(
                    "error",
                    r
                  ), Fe("load", r), x = g;
                  break;
                case "details":
                  Fe("toggle", r), x = g;
                  break;
                case "input":
                  me(r, g), x = be(r, g), Fe("invalid", r);
                  break;
                case "option":
                  x = g;
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!g.multiple }, x = Q({}, g, { value: void 0 }), Fe("invalid", r);
                  break;
                case "textarea":
                  Ge(r, g), x = at(r, g), Fe("invalid", r);
                  break;
                default:
                  x = g;
              }
              Pi(c, x), F = x;
              for (S in F) if (F.hasOwnProperty(S)) {
                var G = F[S];
                S === "style" ? Ht(r, G) : S === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, G != null && Dr(r, G)) : S === "children" ? typeof G == "string" ? (c !== "textarea" || G !== "") && Vt(r, G) : typeof G == "number" && Vt(r, "" + G) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (i.hasOwnProperty(S) ? G != null && S === "onScroll" && Fe("scroll", r) : G != null && b(r, S, G, T));
              }
              switch (c) {
                case "input":
                  ce(r), Je(r, g, !1);
                  break;
                case "textarea":
                  ce(r), $t(r);
                  break;
                case "option":
                  g.value != null && r.setAttribute("value", "" + te(g.value));
                  break;
                case "select":
                  r.multiple = !!g.multiple, S = g.value, S != null ? ht(r, !!g.multiple, S, !1) : g.defaultValue != null && ht(
                    r,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof x.onClick == "function" && (r.onclick = Da);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  g = !!g.autoFocus;
                  break e;
                case "img":
                  g = !0;
                  break e;
                default:
                  g = !1;
              }
            }
            g && (s.flags |= 4);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return mt(s), null;
      case 6:
        if (r && s.stateNode != null) _w(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Gr(as.current), Gr(En.current), Va(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[Sn] = s, (S = g.nodeValue !== c) && (r = Mt, r !== null)) switch (r.tag) {
              case 3:
                La(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && La(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            S && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[Sn] = s, s.stateNode = g;
        }
        return mt(s), null;
      case 13:
        if ($e(Ke), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Ot !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Ex(), zo(), s.flags |= 98560, S = !1;
          else if (S = Va(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!S) throw Error(n(318));
              if (S = s.memoizedState, S = S !== null ? S.dehydrated : null, !S) throw Error(n(317));
              S[Sn] = s;
            } else zo(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            mt(s), S = !1;
          } else on !== null && (Wf(on), on = null), S = !0;
          if (!S) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ke.current & 1) !== 0 ? it === 0 && (it = 3) : Yf())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
      case 4:
        return Vo(), Of(r, s), r === null && es(s.stateNode.containerInfo), mt(s), null;
      case 10:
        return lf(s.type._context), mt(s), null;
      case 17:
        return St(s.type) && qa(), mt(s), null;
      case 19:
        if ($e(Ke), S = s.memoizedState, S === null) return mt(s), null;
        if (g = (s.flags & 128) !== 0, T = S.rendering, T === null) if (g) ds(S, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (T = Ka(r), T !== null) {
              for (s.flags |= 128, ds(S, !1), g = T.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) S = c, r = g, S.flags &= 14680066, T = S.alternate, T === null ? (S.childLanes = 0, S.lanes = r, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = T.childLanes, S.lanes = T.lanes, S.child = T.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = T.memoizedProps, S.memoizedState = T.memoizedState, S.updateQueue = T.updateQueue, S.type = T.type, r = T.dependencies, S.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return ze(Ke, Ke.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          S.tail !== null && Ye() > Go && (s.flags |= 128, g = !0, ds(S, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = Ka(T), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), ds(S, !0), S.tail === null && S.tailMode === "hidden" && !T.alternate && !Ve) return mt(s), null;
          } else 2 * Ye() - S.renderingStartTime > Go && c !== 1073741824 && (s.flags |= 128, g = !0, ds(S, !1), s.lanes = 4194304);
          S.isBackwards ? (T.sibling = s.child, s.child = T) : (c = S.last, c !== null ? c.sibling = T : s.child = T, S.last = T);
        }
        return S.tail !== null ? (s = S.tail, S.rendering = s, S.tail = s.sibling, S.renderingStartTime = Ye(), s.sibling = null, c = Ke.current, ze(Ke, g ? c & 1 | 2 : c & 1), s) : (mt(s), null);
      case 22:
      case 23:
        return Gf(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function Y2(r, s) {
    switch (tf(s), s.tag) {
      case 1:
        return St(s.type) && qa(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Vo(), $e(bt), $e(pt), gf(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return hf(s), null;
      case 13:
        if ($e(Ke), r = s.memoizedState, r !== null && r.dehydrated !== null) {
          if (s.alternate === null) throw Error(n(340));
          zo();
        }
        return r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 19:
        return $e(Ke), null;
      case 4:
        return Vo(), null;
      case 10:
        return lf(s.type._context), null;
      case 22:
      case 23:
        return Gf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ol = !1, vt = !1, K2 = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Wo(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function Lf(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var bw = !1;
  function X2(r, s) {
    if (Uc = Ea, r = ex(), qc(r)) {
      if ("selectionStart" in r) var c = { start: r.selectionStart, end: r.selectionEnd };
      else e: {
        c = (c = r.ownerDocument) && c.defaultView || window;
        var g = c.getSelection && c.getSelection();
        if (g && g.rangeCount !== 0) {
          c = g.anchorNode;
          var x = g.anchorOffset, S = g.focusNode;
          g = g.focusOffset;
          try {
            c.nodeType, S.nodeType;
          } catch {
            c = null;
            break e;
          }
          var T = 0, F = -1, G = -1, oe = 0, ue = 0, fe = r, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || x !== 0 && fe.nodeType !== 3 || (F = T + x), fe !== S || g !== 0 && fe.nodeType !== 3 || (G = T + g), fe.nodeType === 3 && (T += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === r) break t;
              if (le === c && ++oe === x && (F = T), le === S && ++ue === g && (G = T), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = F === -1 || G === -1 ? null : { start: F, end: G };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Gc = { focusedElem: r, selectionRange: c }, Ea = !1, ve = s; ve !== null; ) if (s = ve, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ve = r;
    else for (; ve !== null; ) {
      s = ve;
      try {
        var xe = s.alternate;
        if ((s.flags & 1024) !== 0) switch (s.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (xe !== null) {
              var Se = xe.memoizedProps, et = xe.memoizedState, ne = s.stateNode, J = ne.getSnapshotBeforeUpdate(s.elementType === s.type ? Se : sn(s.type, Se), et);
              ne.__reactInternalSnapshotBeforeUpdate = J;
            }
            break;
          case 3:
            var re = s.stateNode.containerInfo;
            re.nodeType === 1 ? re.textContent = "" : re.nodeType === 9 && re.documentElement && re.removeChild(re.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n(163));
        }
      } catch (he) {
        Ze(s, s.return, he);
      }
      if (r = s.sibling, r !== null) {
        r.return = s.return, ve = r;
        break;
      }
      ve = s.return;
    }
    return xe = bw, bw = !1, xe;
  }
  function hs(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var x = g = g.next;
      do {
        if ((x.tag & r) === r) {
          var S = x.destroy;
          x.destroy = void 0, S !== void 0 && Lf(s, c, S);
        }
        x = x.next;
      } while (x !== g);
    }
  }
  function il(r, s) {
    if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
      var c = s = s.next;
      do {
        if ((c.tag & r) === r) {
          var g = c.create;
          c.destroy = g();
        }
        c = c.next;
      } while (c !== s);
    }
  }
  function Df(r) {
    var s = r.ref;
    if (s !== null) {
      var c = r.stateNode;
      switch (r.tag) {
        case 5:
          r = c;
          break;
        default:
          r = c;
      }
      typeof s == "function" ? s(r) : s.current = r;
    }
  }
  function Sw(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, Sw(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[Sn], delete s[ns], delete s[Qc], delete s[I2], delete s[M2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Ew(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Cw(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Ew(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function jf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.nodeType === 8 ? c.parentNode.insertBefore(r, s) : c.insertBefore(r, s) : (c.nodeType === 8 ? (s = c.parentNode, s.insertBefore(r, c)) : (s = c, s.appendChild(r)), c = c._reactRootContainer, c != null || s.onclick !== null || (s.onclick = Da));
    else if (g !== 4 && (r = r.child, r !== null)) for (jf(r, s, c), r = r.sibling; r !== null; ) jf(r, s, c), r = r.sibling;
  }
  function qf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for (qf(r, s, c), r = r.sibling; r !== null; ) qf(r, s, c), r = r.sibling;
  }
  var ft = null, an = !1;
  function vr(r, s, c) {
    for (c = c.child; c !== null; ) kw(r, s, c), c = c.sibling;
  }
  function kw(r, s, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(Fr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Wo(c, s);
      case 6:
        var g = ft, x = an;
        ft = null, vr(r, s, c), ft = g, an = x, ft !== null && (an ? (r = ft, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (an ? (r = ft, c = c.stateNode, r.nodeType === 8 ? Xc(r.parentNode, c) : r.nodeType === 1 && Xc(r, c), Wi(r)) : Xc(ft, c.stateNode));
        break;
      case 4:
        g = ft, x = an, ft = c.stateNode.containerInfo, an = !0, vr(r, s, c), ft = g, an = x;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          x = g = g.next;
          do {
            var S = x, T = S.destroy;
            S = S.tag, T !== void 0 && ((S & 2) !== 0 || (S & 4) !== 0) && Lf(c, s, T), x = x.next;
          } while (x !== g);
        }
        vr(r, s, c);
        break;
      case 1:
        if (!vt && (Wo(c, s), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
          g.props = c.memoizedProps, g.state = c.memoizedState, g.componentWillUnmount();
        } catch (F) {
          Ze(c, s, F);
        }
        vr(r, s, c);
        break;
      case 21:
        vr(r, s, c);
        break;
      case 22:
        c.mode & 1 ? (vt = (g = vt) || c.memoizedState !== null, vr(r, s, c), vt = g) : vr(r, s, c);
        break;
      default:
        vr(r, s, c);
    }
  }
  function Nw(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new K2()), s.forEach(function(g) {
        var x = iM.bind(null, r, g);
        c.has(g) || (c.add(g), g.then(x, x));
      });
    }
  }
  function ln(r, s) {
    var c = s.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var x = c[g];
      try {
        var S = r, T = s, F = T;
        e: for (; F !== null; ) {
          switch (F.tag) {
            case 5:
              ft = F.stateNode, an = !1;
              break e;
            case 3:
              ft = F.stateNode.containerInfo, an = !0;
              break e;
            case 4:
              ft = F.stateNode.containerInfo, an = !0;
              break e;
          }
          F = F.return;
        }
        if (ft === null) throw Error(n(160));
        kw(S, T, x), ft = null, an = !1;
        var G = x.alternate;
        G !== null && (G.return = null), x.return = null;
      } catch (oe) {
        Ze(x, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Rw(s, r), s = s.sibling;
  }
  function Rw(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ln(s, r), kn(r), g & 4) {
          try {
            hs(3, r, r.return), il(3, r);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
          try {
            hs(5, r, r.return);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 1:
        ln(s, r), kn(r), g & 512 && c !== null && Wo(c, c.return);
        break;
      case 5:
        if (ln(s, r), kn(r), g & 512 && c !== null && Wo(c, c.return), r.flags & 32) {
          var x = r.stateNode;
          try {
            Vt(x, "");
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        if (g & 4 && (x = r.stateNode, x != null)) {
          var S = r.memoizedProps, T = c !== null ? c.memoizedProps : S, F = r.type, G = r.updateQueue;
          if (r.updateQueue = null, G !== null) try {
            F === "input" && S.type === "radio" && S.name != null && Re(x, S), Ti(F, T);
            var oe = Ti(F, S);
            for (T = 0; T < G.length; T += 2) {
              var ue = G[T], fe = G[T + 1];
              ue === "style" ? Ht(x, fe) : ue === "dangerouslySetInnerHTML" ? Dr(x, fe) : ue === "children" ? Vt(x, fe) : b(x, ue, fe, oe);
            }
            switch (F) {
              case "input":
                Ee(x, S);
                break;
              case "textarea":
                tn(x, S);
                break;
              case "select":
                var le = x._wrapperState.wasMultiple;
                x._wrapperState.wasMultiple = !!S.multiple;
                var ge = S.value;
                ge != null ? ht(x, !!S.multiple, ge, !1) : le !== !!S.multiple && (S.defaultValue != null ? ht(
                  x,
                  !!S.multiple,
                  S.defaultValue,
                  !0
                ) : ht(x, !!S.multiple, S.multiple ? [] : "", !1));
            }
            x[ns] = S;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 6:
        if (ln(s, r), kn(r), g & 4) {
          if (r.stateNode === null) throw Error(n(162));
          x = r.stateNode, S = r.memoizedProps;
          try {
            x.nodeValue = S;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 3:
        if (ln(s, r), kn(r), g & 4 && c !== null && c.memoizedState.isDehydrated) try {
          Wi(s.containerInfo);
        } catch (Se) {
          Ze(r, r.return, Se);
        }
        break;
      case 4:
        ln(s, r), kn(r);
        break;
      case 13:
        ln(s, r), kn(r), x = r.child, x.flags & 8192 && (S = x.memoizedState !== null, x.stateNode.isHidden = S, !S || x.alternate !== null && x.alternate.memoizedState !== null || ($f = Ye())), g & 4 && Nw(r);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, r.mode & 1 ? (vt = (oe = vt) || ue, ln(s, r), vt = oe) : ln(s, r), kn(r), g & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !ue && (r.mode & 1) !== 0) for (ve = r, ue = r.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hs(4, le, le.return);
                  break;
                case 1:
                  Wo(le, le.return);
                  var xe = le.stateNode;
                  if (typeof xe.componentWillUnmount == "function") {
                    g = le, c = le.return;
                    try {
                      s = g, xe.props = s.memoizedProps, xe.state = s.memoizedState, xe.componentWillUnmount();
                    } catch (Se) {
                      Ze(g, c, Se);
                    }
                  }
                  break;
                case 5:
                  Wo(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Aw(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : Aw(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  x = fe.stateNode, oe ? (S = x.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (F = fe.stateNode, G = fe.memoizedProps.style, T = G != null && G.hasOwnProperty("display") ? G.display : null, F.style.display = Tt("display", T));
                } catch (Se) {
                  Ze(r, r.return, Se);
                }
              }
            } else if (fe.tag === 6) {
              if (ue === null) try {
                fe.stateNode.nodeValue = oe ? "" : fe.memoizedProps;
              } catch (Se) {
                Ze(r, r.return, Se);
              }
            } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === r) && fe.child !== null) {
              fe.child.return = fe, fe = fe.child;
              continue;
            }
            if (fe === r) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === r) break e;
              ue === fe && (ue = null), fe = fe.return;
            }
            ue === fe && (ue = null), fe.sibling.return = fe.return, fe = fe.sibling;
          }
        }
        break;
      case 19:
        ln(s, r), kn(r), g & 4 && Nw(r);
        break;
      case 21:
        break;
      default:
        ln(
          s,
          r
        ), kn(r);
    }
  }
  function kn(r) {
    var s = r.flags;
    if (s & 2) {
      try {
        e: {
          for (var c = r.return; c !== null; ) {
            if (Ew(c)) {
              var g = c;
              break e;
            }
            c = c.return;
          }
          throw Error(n(160));
        }
        switch (g.tag) {
          case 5:
            var x = g.stateNode;
            g.flags & 32 && (Vt(x, ""), g.flags &= -33);
            var S = Cw(r);
            qf(r, S, x);
            break;
          case 3:
          case 4:
            var T = g.stateNode.containerInfo, F = Cw(r);
            jf(r, F, T);
            break;
          default:
            throw Error(n(161));
        }
      } catch (G) {
        Ze(r, r.return, G);
      }
      r.flags &= -3;
    }
    s & 4096 && (r.flags &= -4097);
  }
  function Q2(r, s, c) {
    ve = r, Pw(r);
  }
  function Pw(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ve !== null; ) {
      var x = ve, S = x.child;
      if (x.tag === 22 && g) {
        var T = x.memoizedState !== null || ol;
        if (!T) {
          var F = x.alternate, G = F !== null && F.memoizedState !== null || vt;
          F = ol;
          var oe = vt;
          if (ol = T, (vt = G) && !oe) for (ve = x; ve !== null; ) T = ve, G = T.child, T.tag === 22 && T.memoizedState !== null ? Iw(x) : G !== null ? (G.return = T, ve = G) : Iw(x);
          for (; S !== null; ) ve = S, Pw(S), S = S.sibling;
          ve = x, ol = F, vt = oe;
        }
        Tw(r);
      } else (x.subtreeFlags & 8772) !== 0 && S !== null ? (S.return = x, ve = S) : Tw(r);
    }
  }
  function Tw(r) {
    for (; ve !== null; ) {
      var s = ve;
      if ((s.flags & 8772) !== 0) {
        var c = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              vt || il(5, s);
              break;
            case 1:
              var g = s.stateNode;
              if (s.flags & 4 && !vt) if (c === null) g.componentDidMount();
              else {
                var x = s.elementType === s.type ? c.memoizedProps : sn(s.type, c.memoizedProps);
                g.componentDidUpdate(x, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var S = s.updateQueue;
              S !== null && Ax(s, S, g);
              break;
            case 3:
              var T = s.updateQueue;
              if (T !== null) {
                if (c = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    c = s.child.stateNode;
                    break;
                  case 1:
                    c = s.child.stateNode;
                }
                Ax(s, T, c);
              }
              break;
            case 5:
              var F = s.stateNode;
              if (c === null && s.flags & 4) {
                c = F;
                var G = s.memoizedProps;
                switch (s.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    G.autoFocus && c.focus();
                    break;
                  case "img":
                    G.src && (c.src = G.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (s.memoizedState === null) {
                var oe = s.alternate;
                if (oe !== null) {
                  var ue = oe.memoizedState;
                  if (ue !== null) {
                    var fe = ue.dehydrated;
                    fe !== null && Wi(fe);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(n(163));
          }
          vt || s.flags & 512 && Df(s);
        } catch (le) {
          Ze(s, s.return, le);
        }
      }
      if (s === r) {
        ve = null;
        break;
      }
      if (c = s.sibling, c !== null) {
        c.return = s.return, ve = c;
        break;
      }
      ve = s.return;
    }
  }
  function Aw(r) {
    for (; ve !== null; ) {
      var s = ve;
      if (s === r) {
        ve = null;
        break;
      }
      var c = s.sibling;
      if (c !== null) {
        c.return = s.return, ve = c;
        break;
      }
      ve = s.return;
    }
  }
  function Iw(r) {
    for (; ve !== null; ) {
      var s = ve;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var c = s.return;
            try {
              il(4, s);
            } catch (G) {
              Ze(s, c, G);
            }
            break;
          case 1:
            var g = s.stateNode;
            if (typeof g.componentDidMount == "function") {
              var x = s.return;
              try {
                g.componentDidMount();
              } catch (G) {
                Ze(s, x, G);
              }
            }
            var S = s.return;
            try {
              Df(s);
            } catch (G) {
              Ze(s, S, G);
            }
            break;
          case 5:
            var T = s.return;
            try {
              Df(s);
            } catch (G) {
              Ze(s, T, G);
            }
        }
      } catch (G) {
        Ze(s, s.return, G);
      }
      if (s === r) {
        ve = null;
        break;
      }
      var F = s.sibling;
      if (F !== null) {
        F.return = s.return, ve = F;
        break;
      }
      ve = s.return;
    }
  }
  var Z2 = Math.ceil, sl = N.ReactCurrentDispatcher, zf = N.ReactCurrentOwner, Xt = N.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, dt = 0, Lt = 0, Uo = dr(0), it = 0, ps = null, Kr = 0, al = 0, Ff = 0, gs = null, Ct = null, $f = 0, Go = 1 / 0, Un = null, ll = !1, Bf = null, yr = null, ul = !1, xr = null, cl = 0, ms = 0, Vf = null, fl = -1, dl = 0;
  function wt() {
    return (Oe & 6) !== 0 ? Ye() : fl !== -1 ? fl : fl = Ye();
  }
  function wr(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && dt !== 0 ? dt & -dt : L2.transition !== null ? (dl === 0 && (dl = _a()), dl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : O0(r.type)), r);
  }
  function un(r, s, c, g) {
    if (50 < ms) throw ms = 0, Vf = null, Error(n(185));
    or(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (al |= c), it === 4 && _r(r, dt)), kt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Go = Ye() + 500, Fa && pr()));
  }
  function kt(r, s) {
    var c = r.callbackNode;
    Sc(r, s);
    var g = ko(r, r === ut ? dt : 0);
    if (g === 0) c !== null && va(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && va(c), s === 1) r.tag === 0 ? O2(Ow.bind(null, r)) : xx(Ow.bind(null, r)), T2(function() {
        (Oe & 6) === 0 && pr();
      }), c = null;
      else {
        switch (k0(g)) {
          case 1:
            c = zi;
            break;
          case 4:
            c = xa;
            break;
          case 16:
            c = So;
            break;
          case 536870912:
            c = wa;
            break;
          default:
            c = So;
        }
        c = Bw(c, Mw.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function Mw(r, s) {
    if (fl = -1, dl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Yo() && r.callbackNode !== c) return null;
    var g = ko(r, r === ut ? dt : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = hl(r, g);
    else {
      s = g;
      var x = Oe;
      Oe |= 2;
      var S = Dw();
      (ut !== r || dt !== s) && (Un = null, Go = Ye() + 500, Qr(r, s));
      do
        try {
          tM();
          break;
        } catch (F) {
          Lw(r, F);
        }
      while (!0);
      af(), sl.current = S, Oe = x, tt !== null ? s = 0 : (ut = null, dt = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (x = $r(r), x !== 0 && (g = x, s = Hf(r, x))), s === 1) throw c = ps, Qr(r, 0), _r(r, g), kt(r, Ye()), c;
      if (s === 6) _r(r, g);
      else {
        if (x = r.current.alternate, (g & 30) === 0 && !J2(x) && (s = hl(r, g), s === 2 && (S = $r(r), S !== 0 && (g = S, s = Hf(r, S))), s === 1)) throw c = ps, Qr(r, 0), _r(r, g), kt(r, Ye()), c;
        switch (r.finishedWork = x, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Zr(r, Ct, Un);
            break;
          case 3:
            if (_r(r, g), (g & 130023424) === g && (s = $f + 500 - Ye(), 10 < s)) {
              if (ko(r, 0) !== 0) break;
              if (x = r.suspendedLanes, (x & g) !== g) {
                wt(), r.pingedLanes |= r.suspendedLanes & x;
                break;
              }
              r.timeoutHandle = Kc(Zr.bind(null, r, Ct, Un), s);
              break;
            }
            Zr(r, Ct, Un);
            break;
          case 4:
            if (_r(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, x = -1; 0 < g; ) {
              var T = 31 - At(g);
              S = 1 << T, T = s[T], T > x && (x = T), g &= ~S;
            }
            if (g = x, g = Ye() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * Z2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = Kc(Zr.bind(null, r, Ct, Un), g);
              break;
            }
            Zr(r, Ct, Un);
            break;
          case 5:
            Zr(r, Ct, Un);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return kt(r, Ye()), r.callbackNode === c ? Mw.bind(null, r) : null;
  }
  function Hf(r, s) {
    var c = gs;
    return r.current.memoizedState.isDehydrated && (Qr(r, s).flags |= 256), r = hl(r, s), r !== 2 && (s = Ct, Ct = c, s !== null && Wf(s)), r;
  }
  function Wf(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function J2(r) {
    for (var s = r; ; ) {
      if (s.flags & 16384) {
        var c = s.updateQueue;
        if (c !== null && (c = c.stores, c !== null)) for (var g = 0; g < c.length; g++) {
          var x = c[g], S = x.getSnapshot;
          x = x.value;
          try {
            if (!rn(S(), x)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (c = s.child, s.subtreeFlags & 16384 && c !== null) c.return = s, s = c;
      else {
        if (s === r) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === r) return !0;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    return !0;
  }
  function _r(r, s) {
    for (s &= ~Ff, s &= ~al, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - At(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function Ow(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    Yo();
    var s = ko(r, 0);
    if ((s & 1) === 0) return kt(r, Ye()), null;
    var c = hl(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = $r(r);
      g !== 0 && (s = g, c = Hf(r, g));
    }
    if (c === 1) throw c = ps, Qr(r, 0), _r(r, s), kt(r, Ye()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, Zr(r, Ct, Un), kt(r, Ye()), null;
  }
  function Uf(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Go = Ye() + 500, Fa && pr());
    }
  }
  function Xr(r) {
    xr !== null && xr.tag === 0 && (Oe & 6) === 0 && Yo();
    var s = Oe;
    Oe |= 1;
    var c = Xt.transition, g = qe;
    try {
      if (Xt.transition = null, qe = 1, r) return r();
    } finally {
      qe = g, Xt.transition = c, Oe = s, (Oe & 6) === 0 && pr();
    }
  }
  function Gf() {
    Lt = Uo.current, $e(Uo);
  }
  function Qr(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, P2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (tf(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && qa();
          break;
        case 3:
          Vo(), $e(bt), $e(pt), gf();
          break;
        case 5:
          hf(g);
          break;
        case 4:
          Vo();
          break;
        case 13:
          $e(Ke);
          break;
        case 19:
          $e(Ke);
          break;
        case 10:
          lf(g.type._context);
          break;
        case 22:
        case 23:
          Gf();
      }
      c = c.return;
    }
    if (ut = r, tt = r = br(r.current, null), dt = Lt = s, it = 0, ps = null, Ff = al = Kr = 0, Ct = gs = null, Ur !== null) {
      for (s = 0; s < Ur.length; s++) if (c = Ur[s], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var x = g.next, S = c.pending;
        if (S !== null) {
          var T = S.next;
          S.next = x, g.next = T;
        }
        c.pending = g;
      }
      Ur = null;
    }
    return r;
  }
  function Lw(r, s) {
    do {
      var c = tt;
      try {
        if (af(), Xa.current = el, Qa) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var x = g.queue;
            x !== null && (x.pending = null), g = g.next;
          }
          Qa = !1;
        }
        if (Yr = 0, lt = ot = Xe = null, ls = !1, us = 0, zf.current = null, c === null || c.return === null) {
          it = 1, ps = s, tt = null;
          break;
        }
        e: {
          var S = r, T = c.return, F = c, G = s;
          if (s = dt, F.flags |= 32768, G !== null && typeof G == "object" && typeof G.then == "function") {
            var oe = G, ue = F, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = sw(T);
            if (ge !== null) {
              ge.flags &= -257, aw(ge, T, F, S, s), ge.mode & 1 && iw(S, oe, s), s = ge, G = oe;
              var xe = s.updateQueue;
              if (xe === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(G), s.updateQueue = Se;
              } else xe.add(G);
              break e;
            } else {
              if ((s & 1) === 0) {
                iw(S, oe, s), Yf();
                break e;
              }
              G = Error(n(426));
            }
          } else if (Ve && F.mode & 1) {
            var et = sw(T);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), aw(et, T, F, S, s), of(Ho(G, F));
              break e;
            }
          }
          S = G = Ho(G, F), it !== 4 && (it = 2), gs === null ? gs = [S] : gs.push(S), S = T;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, s &= -s, S.lanes |= s;
                var ne = rw(S, G, s);
                Tx(S, ne);
                break e;
              case 1:
                F = G;
                var J = S.type, re = S.stateNode;
                if ((S.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (yr === null || !yr.has(re)))) {
                  S.flags |= 65536, s &= -s, S.lanes |= s;
                  var he = ow(S, F, s);
                  Tx(S, he);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        qw(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dw() {
    var r = sl.current;
    return sl.current = el, r === null ? el : r;
  }
  function Yf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Kr & 268435455) === 0 && (al & 268435455) === 0 || _r(ut, dt);
  }
  function hl(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = Dw();
    (ut !== r || dt !== s) && (Un = null, Qr(r, s));
    do
      try {
        eM();
        break;
      } catch (x) {
        Lw(r, x);
      }
    while (!0);
    if (af(), Oe = c, sl.current = g, tt !== null) throw Error(n(261));
    return ut = null, dt = 0, it;
  }
  function eM() {
    for (; tt !== null; ) jw(tt);
  }
  function tM() {
    for (; tt !== null && !gc(); ) jw(tt);
  }
  function jw(r) {
    var s = $w(r.alternate, r, Lt);
    r.memoizedProps = r.pendingProps, s === null ? qw(r) : tt = s, zf.current = null;
  }
  function qw(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = G2(c, s, Lt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = Y2(c, s), c !== null) {
          c.flags &= 32767, tt = c;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          it = 6, tt = null;
          return;
        }
      }
      if (s = s.sibling, s !== null) {
        tt = s;
        return;
      }
      tt = s = r;
    } while (s !== null);
    it === 0 && (it = 5);
  }
  function Zr(r, s, c) {
    var g = qe, x = Xt.transition;
    try {
      Xt.transition = null, qe = 1, nM(r, s, c, g);
    } finally {
      Xt.transition = x, qe = g;
    }
    return null;
  }
  function nM(r, s, c, g) {
    do
      Yo();
    while (xr !== null);
    if ((Oe & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var x = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var S = c.lanes | c.childLanes;
    if (DI(r, S), r === ut && (tt = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || ul || (ul = !0, Bw(So, function() {
      return Yo(), null;
    })), S = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || S) {
      S = Xt.transition, Xt.transition = null;
      var T = qe;
      qe = 1;
      var F = Oe;
      Oe |= 4, zf.current = null, X2(r, c), Rw(c, r), b2(Gc), Ea = !!Uc, Gc = Uc = null, r.current = c, Q2(c), ya(), Oe = F, qe = T, Xt.transition = S;
    } else r.current = c;
    if (ul && (ul = !1, xr = r, cl = x), S = r.pendingLanes, S === 0 && (yr = null), yc(c.stateNode), kt(r, Ye()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) x = s[c], g(x.value, { componentStack: x.stack, digest: x.digest });
    if (ll) throw ll = !1, r = Bf, Bf = null, r;
    return (cl & 1) !== 0 && r.tag !== 0 && Yo(), S = r.pendingLanes, (S & 1) !== 0 ? r === Vf ? ms++ : (ms = 0, Vf = r) : ms = 0, pr(), null;
  }
  function Yo() {
    if (xr !== null) {
      var r = k0(cl), s = Xt.transition, c = qe;
      try {
        if (Xt.transition = null, qe = 16 > r ? 16 : r, xr === null) var g = !1;
        else {
          if (r = xr, xr = null, cl = 0, (Oe & 6) !== 0) throw Error(n(331));
          var x = Oe;
          for (Oe |= 4, ve = r.current; ve !== null; ) {
            var S = ve, T = S.child;
            if ((ve.flags & 16) !== 0) {
              var F = S.deletions;
              if (F !== null) {
                for (var G = 0; G < F.length; G++) {
                  var oe = F[G];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(8, ue, S);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, ge = ue.return;
                      if (Sw(ue), ue === oe) {
                        ve = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = ge, ve = le;
                        break;
                      }
                      ve = ge;
                    }
                  }
                }
                var xe = S.alternate;
                if (xe !== null) {
                  var Se = xe.child;
                  if (Se !== null) {
                    xe.child = null;
                    do {
                      var et = Se.sibling;
                      Se.sibling = null, Se = et;
                    } while (Se !== null);
                  }
                }
                ve = S;
              }
            }
            if ((S.subtreeFlags & 2064) !== 0 && T !== null) T.return = S, ve = T;
            else e: for (; ve !== null; ) {
              if (S = ve, (S.flags & 2048) !== 0) switch (S.tag) {
                case 0:
                case 11:
                case 15:
                  hs(9, S, S.return);
              }
              var ne = S.sibling;
              if (ne !== null) {
                ne.return = S.return, ve = ne;
                break e;
              }
              ve = S.return;
            }
          }
          var J = r.current;
          for (ve = J; ve !== null; ) {
            T = ve;
            var re = T.child;
            if ((T.subtreeFlags & 2064) !== 0 && re !== null) re.return = T, ve = re;
            else e: for (T = J; ve !== null; ) {
              if (F = ve, (F.flags & 2048) !== 0) try {
                switch (F.tag) {
                  case 0:
                  case 11:
                  case 15:
                    il(9, F);
                }
              } catch (Ce) {
                Ze(F, F.return, Ce);
              }
              if (F === T) {
                ve = null;
                break e;
              }
              var he = F.sibling;
              if (he !== null) {
                he.return = F.return, ve = he;
                break e;
              }
              ve = F.return;
            }
          }
          if (Oe = x, pr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot(Fr, r);
          } catch {
          }
          g = !0;
        }
        return g;
      } finally {
        qe = c, Xt.transition = s;
      }
    }
    return !1;
  }
  function zw(r, s, c) {
    s = Ho(c, s), s = rw(r, s, 1), r = mr(r, s, 1), s = wt(), r !== null && (or(r, 1, s), kt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) zw(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        zw(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (yr === null || !yr.has(g))) {
          r = Ho(c, r), r = ow(s, r, 1), s = mr(s, r, 1), r = wt(), s !== null && (or(s, 1, r), kt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function rM(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = wt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ye() - $f ? Qr(r, 0) : Ff |= c), kt(r, s);
  }
  function Fw(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Co, Co <<= 1, (Co & 130023424) === 0 && (Co = 4194304)));
    var c = wt();
    r = Vn(r, s), r !== null && (or(r, s, c), kt(r, c));
  }
  function oM(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), Fw(r, c);
  }
  function iM(r, s) {
    var c = 0;
    switch (r.tag) {
      case 13:
        var g = r.stateNode, x = r.memoizedState;
        x !== null && (c = x.retryLane);
        break;
      case 19:
        g = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    g !== null && g.delete(s), Fw(r, c);
  }
  var $w;
  $w = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || bt.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Et = !1, U2(r, s, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, Ve && (s.flags & 1048576) !== 0 && wx(s, Ba, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        rl(r, s), r = s.pendingProps;
        var x = Do(s, pt.current);
        Bo(s, c), x = yf(null, s, g, r, x, c);
        var S = xf();
        return s.flags |= 1, typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, St(g) ? (S = !0, za(s)) : S = !1, s.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null, ff(s), x.updater = tl, s.stateNode = x, x._reactInternals = s, Cf(s, g, r, c), s = Pf(null, s, g, !0, S, c)) : (s.tag = 0, Ve && S && ef(s), xt(null, s, x, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (rl(r, s), r = s.pendingProps, x = g._init, g = x(g._payload), s.type = g, x = s.tag = aM(g), r = sn(g, r), x) {
            case 0:
              s = Rf(null, s, g, r, c);
              break e;
            case 1:
              s = hw(null, s, g, r, c);
              break e;
            case 11:
              s = lw(null, s, g, r, c);
              break e;
            case 14:
              s = uw(null, s, g, sn(g.type, r), c);
              break e;
          }
          throw Error(n(
            306,
            g,
            ""
          ));
        }
        return s;
      case 0:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), Rf(r, s, g, x, c);
      case 1:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), hw(r, s, g, x, c);
      case 3:
        e: {
          if (pw(s), r === null) throw Error(n(387));
          g = s.pendingProps, S = s.memoizedState, x = S.element, Px(r, s), Ya(s, g, null, c);
          var T = s.memoizedState;
          if (g = T.element, S.isDehydrated) if (S = { element: g, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, s.updateQueue.baseState = S, s.memoizedState = S, s.flags & 256) {
            x = Ho(Error(n(423)), s), s = gw(r, s, g, c, x);
            break e;
          } else if (g !== x) {
            x = Ho(Error(n(424)), s), s = gw(r, s, g, c, x);
            break e;
          } else for (Ot = fr(s.stateNode.containerInfo.firstChild), Mt = s, Ve = !0, on = null, c = Nx(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (zo(), g === x) {
              s = Wn(r, s, c);
              break e;
            }
            xt(r, s, g, c);
          }
          s = s.child;
        }
        return s;
      case 5:
        return Ix(s), r === null && rf(s), g = s.type, x = s.pendingProps, S = r !== null ? r.memoizedProps : null, T = x.children, Yc(g, x) ? T = null : S !== null && Yc(g, S) && (s.flags |= 32), dw(r, s), xt(r, s, T, c), s.child;
      case 6:
        return r === null && rf(s), null;
      case 13:
        return mw(r, s, c);
      case 4:
        return df(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Fo(s, null, g, c) : xt(r, s, g, c), s.child;
      case 11:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), lw(r, s, g, x, c);
      case 7:
        return xt(r, s, s.pendingProps, c), s.child;
      case 8:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, x = s.pendingProps, S = s.memoizedProps, T = x.value, ze(Wa, g._currentValue), g._currentValue = T, S !== null) if (rn(S.value, T)) {
            if (S.children === x.children && !bt.current) {
              s = Wn(r, s, c);
              break e;
            }
          } else for (S = s.child, S !== null && (S.return = s); S !== null; ) {
            var F = S.dependencies;
            if (F !== null) {
              T = S.child;
              for (var G = F.firstContext; G !== null; ) {
                if (G.context === g) {
                  if (S.tag === 1) {
                    G = Hn(-1, c & -c), G.tag = 2;
                    var oe = S.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? G.next = G : (G.next = ue.next, ue.next = G), oe.pending = G;
                    }
                  }
                  S.lanes |= c, G = S.alternate, G !== null && (G.lanes |= c), uf(
                    S.return,
                    c,
                    s
                  ), F.lanes |= c;
                  break;
                }
                G = G.next;
              }
            } else if (S.tag === 10) T = S.type === s.type ? null : S.child;
            else if (S.tag === 18) {
              if (T = S.return, T === null) throw Error(n(341));
              T.lanes |= c, F = T.alternate, F !== null && (F.lanes |= c), uf(T, c, s), T = S.sibling;
            } else T = S.child;
            if (T !== null) T.return = S;
            else for (T = S; T !== null; ) {
              if (T === s) {
                T = null;
                break;
              }
              if (S = T.sibling, S !== null) {
                S.return = T.return, T = S;
                break;
              }
              T = T.return;
            }
            S = T;
          }
          xt(r, s, x.children, c), s = s.child;
        }
        return s;
      case 9:
        return x = s.type, g = s.pendingProps.children, Bo(s, c), x = Yt(x), g = g(x), s.flags |= 1, xt(r, s, g, c), s.child;
      case 14:
        return g = s.type, x = sn(g, s.pendingProps), x = sn(g.type, x), uw(r, s, g, x, c);
      case 15:
        return cw(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), rl(r, s), s.tag = 1, St(g) ? (r = !0, za(s)) : r = !1, Bo(s, c), tw(s, g, x), Cf(s, g, x, c), Pf(null, s, g, !0, r, c);
      case 19:
        return yw(r, s, c);
      case 22:
        return fw(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function Bw(r, s) {
    return ma(r, s);
  }
  function sM(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(r, s, c, g) {
    return new sM(r, s, c, g);
  }
  function Kf(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function aM(r) {
    if (typeof r == "function") return Kf(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === B) return 11;
      if (r === W) return 14;
    }
    return 2;
  }
  function br(r, s) {
    var c = r.alternate;
    return c === null ? (c = Qt(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function pl(r, s, c, g, x, S) {
    var T = 2;
    if (g = r, typeof r == "function") Kf(r) && (T = 1);
    else if (typeof r == "string") T = 5;
    else e: switch (r) {
      case I:
        return Jr(c.children, x, S, s);
      case O:
        T = 8, x |= 8;
        break;
      case D:
        return r = Qt(12, c, s, x | 2), r.elementType = D, r.lanes = S, r;
      case X:
        return r = Qt(13, c, s, x), r.elementType = X, r.lanes = S, r;
      case L:
        return r = Qt(19, c, s, x), r.elementType = L, r.lanes = S, r;
      case Y:
        return gl(c, x, S, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case H:
            T = 10;
            break e;
          case q:
            T = 9;
            break e;
          case B:
            T = 11;
            break e;
          case W:
            T = 14;
            break e;
          case V:
            T = 16, g = null;
            break e;
        }
        throw Error(n(130, r == null ? r : typeof r, ""));
    }
    return s = Qt(T, c, s, x), s.elementType = r, s.type = g, s.lanes = S, s;
  }
  function Jr(r, s, c, g) {
    return r = Qt(7, r, g, s), r.lanes = c, r;
  }
  function gl(r, s, c, g) {
    return r = Qt(22, r, g, s), r.elementType = Y, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function Xf(r, s, c) {
    return r = Qt(6, r, null, s), r.lanes = c, r;
  }
  function Qf(r, s, c) {
    return s = Qt(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function lM(r, s, c, g, x) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fi(0), this.expirationTimes = Fi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.identifierPrefix = g, this.onRecoverableError = x, this.mutableSourceEagerHydrationData = null;
  }
  function Zf(r, s, c, g, x, S, T, F, G) {
    return r = new lM(r, s, c, F, G), s === 1 ? (s = 1, S === !0 && (s |= 8)) : s = 0, S = Qt(3, null, null, s), r.current = S, S.stateNode = r, S.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ff(S), r;
  }
  function uM(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: A, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function Vw(r) {
    if (!r) return hr;
    r = r._reactInternals;
    e: {
      if (_n(r) !== r || r.tag !== 1) throw Error(n(170));
      var s = r;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (St(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var c = r.type;
      if (St(c)) return vx(r, c, s);
    }
    return s;
  }
  function Hw(r, s, c, g, x, S, T, F, G) {
    return r = Zf(c, g, !0, r, x, S, T, F, G), r.context = Vw(null), c = r.current, g = wt(), x = wr(c), S = Hn(g, x), S.callback = s ?? null, mr(c, S, x), r.current.lanes = x, or(r, x, g), kt(r, g), r;
  }
  function ml(r, s, c, g) {
    var x = s.current, S = wt(), T = wr(x);
    return c = Vw(c), s.context === null ? s.context = c : s.pendingContext = c, s = Hn(S, T), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = mr(x, s, T), r !== null && (un(r, x, T, S), Ga(r, x, T)), T;
  }
  function vl(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function Ww(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function Jf(r, s) {
    Ww(r, s), (r = r.alternate) && Ww(r, s);
  }
  function cM() {
    return null;
  }
  var Uw = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function ed(r) {
    this._internalRoot = r;
  }
  yl.prototype.render = ed.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    ml(r, s, null, null);
  }, yl.prototype.unmount = ed.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      Xr(function() {
        ml(null, r, null, null);
      }), s[zn] = null;
    }
  };
  function yl(r) {
    this._internalRoot = r;
  }
  yl.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = P0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < lr.length && s !== 0 && s < lr[c].priority; c++) ;
      lr.splice(c, 0, r), c === 0 && I0(r);
    }
  };
  function td(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function xl(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function Gw() {
  }
  function fM(r, s, c, g, x) {
    if (x) {
      if (typeof g == "function") {
        var S = g;
        g = function() {
          var oe = vl(T);
          S.call(oe);
        };
      }
      var T = Hw(s, g, r, 0, null, !1, !1, "", Gw);
      return r._reactRootContainer = T, r[zn] = T.current, es(r.nodeType === 8 ? r.parentNode : r), Xr(), T;
    }
    for (; x = r.lastChild; ) r.removeChild(x);
    if (typeof g == "function") {
      var F = g;
      g = function() {
        var oe = vl(G);
        F.call(oe);
      };
    }
    var G = Zf(r, 0, !1, null, null, !1, !1, "", Gw);
    return r._reactRootContainer = G, r[zn] = G.current, es(r.nodeType === 8 ? r.parentNode : r), Xr(function() {
      ml(s, G, c, g);
    }), G;
  }
  function wl(r, s, c, g, x) {
    var S = c._reactRootContainer;
    if (S) {
      var T = S;
      if (typeof x == "function") {
        var F = x;
        x = function() {
          var G = vl(T);
          F.call(G);
        };
      }
      ml(s, T, r, x);
    } else T = fM(c, s, r, x, g);
    return vl(T);
  }
  N0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = bn(s.pendingLanes);
          c !== 0 && (Ec(s, c | 1), kt(s, Ye()), (Oe & 6) === 0 && (Go = Ye() + 500, pr()));
        }
        break;
      case 13:
        Xr(function() {
          var g = Vn(r, 1);
          if (g !== null) {
            var x = wt();
            un(g, r, 1, x);
          }
        }), Jf(r, 1);
    }
  }, Cc = function(r) {
    if (r.tag === 13) {
      var s = Vn(r, 134217728);
      if (s !== null) {
        var c = wt();
        un(s, r, 134217728, c);
      }
      Jf(r, 134217728);
    }
  }, R0 = function(r) {
    if (r.tag === 13) {
      var s = wr(r), c = Vn(r, s);
      if (c !== null) {
        var g = wt();
        un(c, r, s, g);
      }
      Jf(r, s);
    }
  }, P0 = function() {
    return qe;
  }, T0 = function(r, s) {
    var c = qe;
    try {
      return qe = r, s();
    } finally {
      qe = c;
    }
  }, Mi = function(r, s, c) {
    switch (s) {
      case "input":
        if (Ee(r, c), s = c.name, c.type === "radio" && s != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < c.length; s++) {
            var g = c[s];
            if (g !== r && g.form === r.form) {
              var x = ja(g);
              if (!x) throw Error(n(90));
              de(g), Ee(g, x);
            }
          }
        }
        break;
      case "textarea":
        tn(r, c);
        break;
      case "select":
        s = c.value, s != null && ht(r, !!c.multiple, s, !1);
    }
  }, fa = Uf, da = Xr;
  var dM = { usingClientEntryPoint: !1, Events: [rs, Oo, ja, ua, ca, Uf] }, vs = { findFiberByHostInstance: Br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, hM = { bundleType: vs.bundleType, version: vs.version, rendererPackageName: vs.rendererPackageName, rendererConfig: vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: N.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = pa(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: vs.findFiberByHostInstance || cM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_l.isDisabled && _l.supportsFiber) try {
      Fr = _l.inject(hM), Wt = _l;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dM, Nt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!td(s)) throw Error(n(200));
    return uM(r, s, null, c);
  }, Nt.createRoot = function(r, s) {
    if (!td(r)) throw Error(n(299));
    var c = !1, g = "", x = Uw;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), s = Zf(r, 1, !1, null, null, c, !1, g, x), r[zn] = s.current, es(r.nodeType === 8 ? r.parentNode : r), new ed(s);
  }, Nt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = pa(s), r = r === null ? null : r.stateNode, r;
  }, Nt.flushSync = function(r) {
    return Xr(r);
  }, Nt.hydrate = function(r, s, c) {
    if (!xl(s)) throw Error(n(200));
    return wl(null, r, s, !0, c);
  }, Nt.hydrateRoot = function(r, s, c) {
    if (!td(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, x = !1, S = "", T = Uw;
    if (c != null && (c.unstable_strictMode === !0 && (x = !0), c.identifierPrefix !== void 0 && (S = c.identifierPrefix), c.onRecoverableError !== void 0 && (T = c.onRecoverableError)), s = Hw(s, null, r, 1, c ?? null, x, !1, S, T), r[zn] = s.current, es(r), g) for (r = 0; r < g.length; r++) c = g[r], x = c._getVersion, x = x(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, x] : s.mutableSourceEagerHydrationData.push(
      c,
      x
    );
    return new yl(s);
  }, Nt.render = function(r, s, c) {
    if (!xl(s)) throw Error(n(200));
    return wl(null, r, s, !1, c);
  }, Nt.unmountComponentAtNode = function(r) {
    if (!xl(r)) throw Error(n(40));
    return r._reactRootContainer ? (Xr(function() {
      wl(null, null, r, !1, function() {
        r._reactRootContainer = null, r[zn] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = Uf, Nt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!xl(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return wl(r, s, c, !1, g);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var t1;
function wN() {
  if (t1) return od.exports;
  t1 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), od.exports = SM(), od.exports;
}
var n1;
function EM() {
  if (n1) return El;
  n1 = 1;
  var e = wN();
  return El.createRoot = e.createRoot, El.hydrateRoot = e.hydrateRoot, El;
}
var CM = EM();
let _N = k.createContext(
  /** @type {any} */
  null
);
function kM() {
  let e = k.useContext(_N);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function NM() {
  return kM().model;
}
function xs(e) {
  let t = NM(), n = k.useSyncExternalStore(
    (i) => (t.on(`change:${e}`, i), () => t.off(`change:${e}`, i)),
    () => t.get(e)
  ), o = k.useCallback(
    (i) => {
      t.set(
        e,
        // @ts-expect-error - TS cannot correctly narrow type
        typeof i == "function" ? i(t.get(e)) : i
      ), t.save_changes();
    },
    [t, e]
  );
  return [n, o];
}
function RM(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = CM.createRoot(t);
    return i.render(
      k.createElement(
        k.StrictMode,
        null,
        k.createElement(
          _N.Provider,
          { value: { model: n, experimental: o } },
          k.createElement(e)
        )
      )
    ), () => i.unmount();
  };
}
function nt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, o; n < e.length; n++)
      (o = nt(e[n])) !== "" && (t += (t && " ") + o);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var PM = { value: () => {
} };
function xu() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Bl(n);
}
function Bl(e) {
  this._ = e;
}
function TM(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Bl.prototype = xu.prototype = {
  constructor: Bl,
  on: function(e, t) {
    var n = this._, o = TM(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = AM(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = r1(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = r1(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Bl(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), o = 0, i, a; o < i; ++o) n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], o = 0, i = a.length; o < i; ++o) a[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], i = 0, a = o.length; i < a; ++i) o[i].value.apply(t, n);
  }
};
function AM(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function r1(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = PM, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Kv = "http://www.w3.org/1999/xhtml";
const o1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Kv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wu(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), o1.hasOwnProperty(t) ? { space: o1[t], local: e } : e;
}
function IM(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Kv && t.documentElement.namespaceURI === Kv ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function MM(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function bN(e) {
  var t = wu(e);
  return (t.local ? MM : IM)(t);
}
function OM() {
}
function Sy(e) {
  return e == null ? OM : function() {
    return this.querySelector(e);
  };
}
function LM(e) {
  typeof e != "function" && (e = Sy(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function DM(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function jM() {
  return [];
}
function SN(e) {
  return e == null ? jM : function() {
    return this.querySelectorAll(e);
  };
}
function qM(e) {
  return function() {
    return DM(e.apply(this, arguments));
  };
}
function zM(e) {
  typeof e == "function" ? e = qM(e) : e = SN(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new zt(o, i);
}
function EN(e) {
  return function() {
    return this.matches(e);
  };
}
function CN(e) {
  return function(t) {
    return t.matches(e);
  };
}
var FM = Array.prototype.find;
function $M(e) {
  return function() {
    return FM.call(this.children, e);
  };
}
function BM() {
  return this.firstElementChild;
}
function VM(e) {
  return this.select(e == null ? BM : $M(typeof e == "function" ? e : CN(e)));
}
var HM = Array.prototype.filter;
function WM() {
  return Array.from(this.children);
}
function UM(e) {
  return function() {
    return HM.call(this.children, e);
  };
}
function GM(e) {
  return this.selectAll(e == null ? WM : UM(typeof e == "function" ? e : CN(e)));
}
function YM(e) {
  typeof e != "function" && (e = EN(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function kN(e) {
  return new Array(e.length);
}
function KM() {
  return new zt(this._enter || this._groups.map(kN), this._parents);
}
function Xl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Xl.prototype = {
  constructor: Xl,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function XM(e) {
  return function() {
    return e;
  };
}
function QM(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new Xl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function ZM(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new Xl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function JM(e) {
  return e.__data__;
}
function eO(e, t) {
  if (!arguments.length) return Array.from(this, JM);
  var n = t ? ZM : QM, o = this._parents, i = this._groups;
  typeof e != "function" && (e = XM(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = tO(e.call(h, h && h.__data__, d, o)), E = v.length, y = u[d] = new Array(E), w = l[d] = new Array(E), _ = f[d] = new Array(m);
    n(h, p, y, w, _, v, t);
    for (var C = 0, b = 0, N, P; C < E; ++C)
      if (N = y[C]) {
        for (C >= b && (b = C + 1); !(P = w[b]) && ++b < E; ) ;
        N._next = P || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function tO(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function nO() {
  return new zt(this._exit || this._groups.map(kN), this._parents);
}
function rO(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function oO(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, E = 0; E < p; ++E)
      (v = d[E] || h[E]) && (m[E] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new zt(u, this._parents);
}
function iO() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function sO(e) {
  e || (e = aO);
  function t(p, m) {
    return p && m ? e(p.__data__, m.__data__) : !p - !m;
  }
  for (var n = this._groups, o = n.length, i = new Array(o), a = 0; a < o; ++a) {
    for (var l = n[a], u = l.length, f = i[a] = new Array(u), d, h = 0; h < u; ++h)
      (d = l[h]) && (f[h] = d);
    f.sort(t);
  }
  return new zt(i, this._parents).order();
}
function aO(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lO() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function uO() {
  return Array.from(this);
}
function cO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function fO() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function dO() {
  return !this.node();
}
function hO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function pO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function gO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function mO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function vO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function yO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function xO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function wO(e, t) {
  var n = wu(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? gO : pO : typeof t == "function" ? n.local ? xO : yO : n.local ? vO : mO)(n, t));
}
function NN(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function _O(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function bO(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function SO(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function EO(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? _O : typeof t == "function" ? SO : bO)(e, t, n ?? "")) : ai(this.node(), e);
}
function ai(e, t) {
  return e.style.getPropertyValue(t) || NN(e).getComputedStyle(e, null).getPropertyValue(t);
}
function CO(e) {
  return function() {
    delete this[e];
  };
}
function kO(e, t) {
  return function() {
    this[e] = t;
  };
}
function NO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function RO(e, t) {
  return arguments.length > 1 ? this.each((t == null ? CO : typeof t == "function" ? NO : kO)(e, t)) : this.node()[e];
}
function RN(e) {
  return e.trim().split(/^|\s+/);
}
function Ey(e) {
  return e.classList || new PN(e);
}
function PN(e) {
  this._node = e, this._names = RN(e.getAttribute("class") || "");
}
PN.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function TN(e, t) {
  for (var n = Ey(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function AN(e, t) {
  for (var n = Ey(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function PO(e) {
  return function() {
    TN(this, e);
  };
}
function TO(e) {
  return function() {
    AN(this, e);
  };
}
function AO(e, t) {
  return function() {
    (t.apply(this, arguments) ? TN : AN)(this, e);
  };
}
function IO(e, t) {
  var n = RN(e + "");
  if (arguments.length < 2) {
    for (var o = Ey(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? AO : t ? PO : TO)(n, t));
}
function MO() {
  this.textContent = "";
}
function OO(e) {
  return function() {
    this.textContent = e;
  };
}
function LO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function DO(e) {
  return arguments.length ? this.each(e == null ? MO : (typeof e == "function" ? LO : OO)(e)) : this.node().textContent;
}
function jO() {
  this.innerHTML = "";
}
function qO(e) {
  return function() {
    this.innerHTML = e;
  };
}
function zO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function FO(e) {
  return arguments.length ? this.each(e == null ? jO : (typeof e == "function" ? zO : qO)(e)) : this.node().innerHTML;
}
function $O() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function BO() {
  return this.each($O);
}
function VO() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function HO() {
  return this.each(VO);
}
function WO(e) {
  var t = typeof e == "function" ? e : bN(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function UO() {
  return null;
}
function GO(e, t) {
  var n = typeof e == "function" ? e : bN(e), o = t == null ? UO : typeof t == "function" ? t : Sy(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function YO() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function KO() {
  return this.each(YO);
}
function XO() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function QO() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ZO(e) {
  return this.select(e ? QO : XO);
}
function JO(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function eL(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function tL(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function nL(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function rL(e, t, n) {
  return function() {
    var o = this.__on, i, a = eL(t);
    if (o) {
      for (var l = 0, u = o.length; l < u; ++l)
        if ((i = o[l]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), i = { type: e.type, name: e.name, value: t, listener: a, options: n }, o ? o.push(i) : this.__on = [i];
  };
}
function oL(e, t, n) {
  var o = tL(e + ""), i, a = o.length, l;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var f = 0, d = u.length, h; f < d; ++f)
        for (i = 0, h = u[f]; i < a; ++i)
          if ((l = o[i]).type === h.type && l.name === h.name)
            return h.value;
    }
    return;
  }
  for (u = t ? rL : nL, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function IN(e, t, n) {
  var o = NN(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function iL(e, t) {
  return function() {
    return IN(this, e, t);
  };
}
function sL(e, t) {
  return function() {
    return IN(this, e, t.apply(this, arguments));
  };
}
function aL(e, t) {
  return this.each((typeof t == "function" ? sL : iL)(e, t));
}
function* lL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var MN = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Gs() {
  return new zt([[document.documentElement]], MN);
}
function uL() {
  return this;
}
zt.prototype = Gs.prototype = {
  constructor: zt,
  select: LM,
  selectAll: zM,
  selectChild: VM,
  selectChildren: GM,
  filter: YM,
  data: eO,
  enter: KM,
  exit: nO,
  join: rO,
  merge: oO,
  selection: uL,
  order: iO,
  sort: sO,
  call: lO,
  nodes: uO,
  node: cO,
  size: fO,
  empty: dO,
  each: hO,
  attr: wO,
  style: EO,
  property: RO,
  classed: IO,
  text: DO,
  html: FO,
  raise: BO,
  lower: HO,
  append: WO,
  insert: GO,
  remove: KO,
  clone: ZO,
  datum: JO,
  on: oL,
  dispatch: aL,
  [Symbol.iterator]: lL
};
function jt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], MN);
}
function cL(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = cL(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const fL = { passive: !1 }, As = { capture: !0, passive: !1 };
function ad(e) {
  e.stopImmediatePropagation();
}
function ni(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ON(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", ni, As);
  "onselectstart" in t ? n.on("selectstart.drag", ni, As) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function LN(e, t) {
  var n = e.document.documentElement, o = jt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", ni, As), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Cl = (e) => () => e;
function Xv(e, {
  sourceEvent: t,
  subject: n,
  target: o,
  identifier: i,
  active: a,
  x: l,
  y: u,
  dx: f,
  dy: d,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: d, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
Xv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function dL(e) {
  return !e.ctrlKey && !e.button;
}
function hL() {
  return this.parentNode;
}
function pL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function gL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function DN() {
  var e = dL, t = hL, n = pL, o = gL, i = {}, a = xu("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(N) {
    N.on("mousedown.drag", v).filter(o).on("touchstart.drag", w).on("touchmove.drag", _, fL).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(N, P) {
    if (!(h || !e.call(this, N, P))) {
      var A = b(this, t.call(this, N, P), N, P, "mouse");
      A && (jt(N.view).on("mousemove.drag", E, As).on("mouseup.drag", y, As), ON(N.view), ad(N), d = !1, u = N.clientX, f = N.clientY, A("start", N));
    }
  }
  function E(N) {
    if (ni(N), !d) {
      var P = N.clientX - u, A = N.clientY - f;
      d = P * P + A * A > p;
    }
    i.mouse("drag", N);
  }
  function y(N) {
    jt(N.view).on("mousemove.drag mouseup.drag", null), LN(N.view, d), ni(N), i.mouse("end", N);
  }
  function w(N, P) {
    if (e.call(this, N, P)) {
      var A = N.changedTouches, I = t.call(this, N, P), O = A.length, D, H;
      for (D = 0; D < O; ++D)
        (H = b(this, I, N, P, A[D].identifier, A[D])) && (ad(N), H("start", N, A[D]));
    }
  }
  function _(N) {
    var P = N.changedTouches, A = P.length, I, O;
    for (I = 0; I < A; ++I)
      (O = i[P[I].identifier]) && (ni(N), O("drag", N, P[I]));
  }
  function C(N) {
    var P = N.changedTouches, A = P.length, I, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), I = 0; I < A; ++I)
      (O = i[P[I].identifier]) && (ad(N), O("end", N, P[I]));
  }
  function b(N, P, A, I, O, D) {
    var H = a.copy(), q = fn(D || A, P), B, X, L;
    if ((L = n.call(N, new Xv("beforestart", {
      sourceEvent: A,
      target: m,
      identifier: O,
      active: l,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), I)) != null)
      return B = L.x - q[0] || 0, X = L.y - q[1] || 0, function W(V, Y, M) {
        var z = q, Q;
        switch (V) {
          case "start":
            i[O] = W, Q = l++;
            break;
          case "end":
            delete i[O], --l;
          // falls through
          case "drag":
            q = fn(M || Y, P), Q = l;
            break;
        }
        H.call(
          V,
          N,
          new Xv(V, {
            sourceEvent: Y,
            subject: L,
            target: m,
            identifier: O,
            active: Q,
            x: q[0] + B,
            y: q[1] + X,
            dx: q[0] - z[0],
            dy: q[1] - z[1],
            dispatch: H
          }),
          I
        );
      };
  }
  return m.filter = function(N) {
    return arguments.length ? (e = typeof N == "function" ? N : Cl(!!N), m) : e;
  }, m.container = function(N) {
    return arguments.length ? (t = typeof N == "function" ? N : Cl(N), m) : t;
  }, m.subject = function(N) {
    return arguments.length ? (n = typeof N == "function" ? N : Cl(N), m) : n;
  }, m.touchable = function(N) {
    return arguments.length ? (o = typeof N == "function" ? N : Cl(!!N), m) : o;
  }, m.on = function() {
    var N = a.on.apply(a, arguments);
    return N === a ? m : N;
  }, m.clickDistance = function(N) {
    return arguments.length ? (p = (N = +N) * N, m) : Math.sqrt(p);
  }, m;
}
function Cy(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function jN(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function Ys() {
}
var Is = 0.7, Ql = 1 / Is, ri = "\\s*([+-]?\\d+)\\s*", Ms = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mL = /^#([0-9a-f]{3,8})$/, vL = new RegExp(`^rgb\\(${ri},${ri},${ri}\\)$`), yL = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), xL = new RegExp(`^rgba\\(${ri},${ri},${ri},${Ms}\\)$`), wL = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Ms}\\)$`), _L = new RegExp(`^hsl\\(${Ms},${Tn},${Tn}\\)$`), bL = new RegExp(`^hsla\\(${Ms},${Tn},${Tn},${Ms}\\)$`), i1 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Cy(Ys, so, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: s1,
  // Deprecated! Use color.formatHex.
  formatHex: s1,
  formatHex8: SL,
  formatHsl: EL,
  formatRgb: a1,
  toString: a1
});
function s1() {
  return this.rgb().formatHex();
}
function SL() {
  return this.rgb().formatHex8();
}
function EL() {
  return qN(this).formatHsl();
}
function a1() {
  return this.rgb().formatRgb();
}
function so(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = mL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? l1(t) : n === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? kl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? kl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = vL.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = yL.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xL.exec(e)) ? kl(t[1], t[2], t[3], t[4]) : (t = wL.exec(e)) ? kl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = _L.exec(e)) ? f1(t[1], t[2] / 100, t[3] / 100, 1) : (t = bL.exec(e)) ? f1(t[1], t[2] / 100, t[3] / 100, t[4]) : i1.hasOwnProperty(e) ? l1(i1[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function l1(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function kl(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Rt(e, t, n, o);
}
function CL(e) {
  return e instanceof Ys || (e = so(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function Qv(e, t, n, o) {
  return arguments.length === 1 ? CL(e) : new Rt(e, t, n, o ?? 1);
}
function Rt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Cy(Rt, Qv, jN(Ys, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Is : Math.pow(Is, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(ro(this.r), ro(this.g), ro(this.b), Zl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: u1,
  // Deprecated! Use color.formatHex.
  formatHex: u1,
  formatHex8: kL,
  formatRgb: c1,
  toString: c1
}));
function u1() {
  return `#${no(this.r)}${no(this.g)}${no(this.b)}`;
}
function kL() {
  return `#${no(this.r)}${no(this.g)}${no(this.b)}${no((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function c1() {
  const e = Zl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ro(this.r)}, ${ro(this.g)}, ${ro(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ro(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function no(e) {
  return e = ro(e), (e < 16 ? "0" : "") + e.toString(16);
}
function f1(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, n, o);
}
function qN(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ys || (e = so(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new dn(l, u, f, e.opacity);
}
function NL(e, t, n, o) {
  return arguments.length === 1 ? qN(e) : new dn(e, t, n, o ?? 1);
}
function dn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Cy(dn, NL, jN(Ys, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Is : Math.pow(Is, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Rt(
      ld(e >= 240 ? e - 240 : e + 120, i, o),
      ld(e, i, o),
      ld(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new dn(d1(this.h), Nl(this.s), Nl(this.l), Zl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${d1(this.h)}, ${Nl(this.s) * 100}%, ${Nl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function d1(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Nl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ld(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ky = (e) => () => e;
function RL(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function PL(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function TL(e) {
  return (e = +e) == 1 ? zN : function(t, n) {
    return n - t ? PL(t, n, e) : ky(isNaN(t) ? n : t);
  };
}
function zN(e, t) {
  var n = t - e;
  return n ? RL(e, n) : ky(isNaN(e) ? t : e);
}
const Jl = (function e(t) {
  var n = TL(t);
  function o(i, a) {
    var l = n((i = Qv(i)).r, (a = Qv(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = zN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function AL(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function IL(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ML(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = Ps(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function OL(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return n.setTime(e * (1 - o) + t * o), n;
  };
}
function Nn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function LL(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Ps(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var Zv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ud = new RegExp(Zv.source, "g");
function DL(e) {
  return function() {
    return e;
  };
}
function jL(e) {
  return function(t) {
    return e(t) + "";
  };
}
function FN(e, t) {
  var n = Zv.lastIndex = ud.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Zv.exec(e)) && (i = ud.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Nn(o, i) })), n = ud.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? jL(f[0].x) : DL(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function Ps(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? ky(t) : (n === "number" ? Nn : n === "string" ? (o = so(t)) ? (t = o, Jl) : FN : t instanceof so ? Jl : t instanceof Date ? OL : IL(t) ? AL : Array.isArray(t) ? ML : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? LL : Nn)(e, t);
}
var h1 = 180 / Math.PI, Jv = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $N(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * h1,
    skewX: Math.atan(f) * h1,
    scaleX: l,
    scaleY: u
  };
}
var Rl;
function qL(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Jv : $N(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zL(e) {
  return e == null || (Rl || (Rl = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rl.setAttribute("transform", e), !(e = Rl.transform.baseVal.consolidate())) ? Jv : (e = e.matrix, $N(e.a, e.b, e.c, e.d, e.e, e.f));
}
function BN(e, t, n, o) {
  function i(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, p, m, v, E) {
    if (d !== p || h !== m) {
      var y = v.push("translate(", null, t, null, n);
      E.push({ i: y - 4, x: Nn(d, p) }, { i: y - 2, x: Nn(h, m) });
    } else (p || m) && v.push("translate(" + p + t + m + n);
  }
  function l(d, h, p, m) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), m.push({ i: p.push(i(p) + "rotate(", null, o) - 2, x: Nn(d, h) })) : h && p.push(i(p) + "rotate(" + h + o);
  }
  function u(d, h, p, m) {
    d !== h ? m.push({ i: p.push(i(p) + "skewX(", null, o) - 2, x: Nn(d, h) }) : h && p.push(i(p) + "skewX(" + h + o);
  }
  function f(d, h, p, m, v, E) {
    if (d !== p || h !== m) {
      var y = v.push(i(v) + "scale(", null, ",", null, ")");
      E.push({ i: y - 4, x: Nn(d, p) }, { i: y - 2, x: Nn(h, m) });
    } else (p !== 1 || m !== 1) && v.push(i(v) + "scale(" + p + "," + m + ")");
  }
  return function(d, h) {
    var p = [], m = [];
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, p, m), l(d.rotate, h.rotate, p, m), u(d.skewX, h.skewX, p, m), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, p, m), d = h = null, function(v) {
      for (var E = -1, y = m.length, w; ++E < y; ) p[(w = m[E]).i] = w.x(v);
      return p.join("");
    };
  };
}
var FL = BN(qL, "px, ", "px)", "deg)"), $L = BN(zL, ", ", ")", ")"), BL = 1e-12;
function p1(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function VL(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function HL(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Vl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, E = p - f, y = v * v + E * E, w, _;
    if (y < BL)
      _ = Math.log(m / d) / t, w = function(I) {
        return [
          u + I * v,
          f + I * E,
          d * Math.exp(t * I * _)
        ];
      };
    else {
      var C = Math.sqrt(y), b = (m * m - d * d + o * y) / (2 * d * n * C), N = (m * m - d * d - o * y) / (2 * m * n * C), P = Math.log(Math.sqrt(b * b + 1) - b), A = Math.log(Math.sqrt(N * N + 1) - N);
      _ = (A - P) / t, w = function(I) {
        var O = I * _, D = p1(P), H = d / (n * C) * (D * HL(t * O + P) - VL(P));
        return [
          u + H * v,
          f + H * E,
          d * D / p1(t * O + P)
        ];
      };
    }
    return w.duration = _ * 1e3 * t / Math.SQRT2, w;
  }
  return i.rho = function(a) {
    var l = Math.max(1e-3, +a), u = l * l, f = u * u;
    return e(l, u, f);
  }, i;
})(Math.SQRT2, 2, 4);
var li = 0, Ss = 0, ws = 0, VN = 1e3, eu, Es, tu = 0, ao = 0, _u = 0, Os = typeof performance == "object" && performance.now ? performance : Date, HN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ny() {
  return ao || (HN(WL), ao = Os.now() + _u);
}
function WL() {
  ao = 0;
}
function nu() {
  this._call = this._time = this._next = null;
}
nu.prototype = WN.prototype = {
  constructor: nu,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ny() : +n) + (t == null ? 0 : +t), !this._next && Es !== this && (Es ? Es._next = this : eu = this, Es = this), this._call = e, this._time = n, ey();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ey());
  }
};
function WN(e, t, n) {
  var o = new nu();
  return o.restart(e, t, n), o;
}
function UL() {
  Ny(), ++li;
  for (var e = eu, t; e; )
    (t = ao - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --li;
}
function g1() {
  ao = (tu = Os.now()) + _u, li = Ss = 0;
  try {
    UL();
  } finally {
    li = 0, YL(), ao = 0;
  }
}
function GL() {
  var e = Os.now(), t = e - tu;
  t > VN && (_u -= t, tu = e);
}
function YL() {
  for (var e, t = eu, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : eu = n);
  Es = e, ey(o);
}
function ey(e) {
  if (!li) {
    Ss && (Ss = clearTimeout(Ss));
    var t = e - ao;
    t > 24 ? (e < 1 / 0 && (Ss = setTimeout(g1, e - Os.now() - _u)), ws && (ws = clearInterval(ws))) : (ws || (tu = Os.now(), ws = setInterval(GL, VN)), li = 1, HN(g1));
  }
}
function m1(e, t, n) {
  var o = new nu();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var KL = xu("start", "end", "cancel", "interrupt"), XL = [], UN = 0, v1 = 1, ty = 2, Hl = 3, y1 = 4, ny = 5, Wl = 6;
function bu(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  QL(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: KL,
    tween: XL,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: UN
  });
}
function Ry(e, t) {
  var n = yn(e, t);
  if (n.state > UN) throw new Error("too late; already scheduled");
  return n;
}
function On(e, t) {
  var n = yn(e, t);
  if (n.state > Hl) throw new Error("too late; already running");
  return n;
}
function yn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function QL(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = WN(a, 0, n.time);
  function a(d) {
    n.state = v1, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== v1) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Hl) return m1(l);
        v.state === y1 ? (v.state = Wl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Wl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (m1(function() {
      n.state === Hl && (n.state = y1, n.timer.restart(u, n.delay, n.time), u(d));
    }), n.state = ty, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ty) {
      for (n.state = Hl, i = new Array(m = n.tween.length), h = 0, p = -1; h < m; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = v);
      i.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = ny, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(e, h);
    n.state === ny && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Wl, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Ul(e, t) {
  var n = e.__transition, o, i, a = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        a = !1;
        continue;
      }
      i = o.state > ty && o.state < ny, o.state = Wl, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    a && delete e.__transition;
  }
}
function ZL(e) {
  return this.each(function() {
    Ul(this, e);
  });
}
function JL(e, t) {
  var n, o;
  return function() {
    var i = On(this, e), a = i.tween;
    if (a !== n) {
      o = n = a;
      for (var l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o = o.slice(), o.splice(l, 1);
          break;
        }
    }
    i.tween = o;
  };
}
function eD(e, t, n) {
  var o, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = On(this, e), l = a.tween;
    if (l !== o) {
      i = (o = l).slice();
      for (var u = { name: t, value: n }, f = 0, d = i.length; f < d; ++f)
        if (i[f].name === t) {
          i[f] = u;
          break;
        }
      f === d && i.push(u);
    }
    a.tween = i;
  };
}
function tD(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? JL : eD)(n, e, t));
}
function Py(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = On(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return yn(i, o).value[t];
  };
}
function GN(e, t) {
  var n;
  return (typeof t == "number" ? Nn : t instanceof so ? Jl : (n = so(t)) ? (t = n, Jl) : FN)(e, t);
}
function nD(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rD(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function oD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function iD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function sD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function aD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function lD(e, t) {
  var n = wu(e), o = n === "transform" ? $L : GN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? aD : sD)(n, o, Py(this, "attr." + e, t)) : t == null ? (n.local ? rD : nD)(n) : (n.local ? iD : oD)(n, o, t));
}
function uD(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function cD(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function fD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && cD(e, a)), n;
  }
  return i._value = t, i;
}
function dD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && uD(e, a)), n;
  }
  return i._value = t, i;
}
function hD(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = wu(e);
  return this.tween(n, (o.local ? fD : dD)(o, t));
}
function pD(e, t) {
  return function() {
    Ry(this, e).delay = +t.apply(this, arguments);
  };
}
function gD(e, t) {
  return t = +t, function() {
    Ry(this, e).delay = t;
  };
}
function mD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? pD : gD)(t, e)) : yn(this.node(), t).delay;
}
function vD(e, t) {
  return function() {
    On(this, e).duration = +t.apply(this, arguments);
  };
}
function yD(e, t) {
  return t = +t, function() {
    On(this, e).duration = t;
  };
}
function xD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? vD : yD)(t, e)) : yn(this.node(), t).duration;
}
function wD(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    On(this, e).ease = t;
  };
}
function _D(e) {
  var t = this._id;
  return arguments.length ? this.each(wD(t, e)) : yn(this.node(), t).ease;
}
function bD(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    On(this, e).ease = n;
  };
}
function SD(e) {
  if (typeof e != "function") throw new Error();
  return this.each(bD(this._id, e));
}
function ED(e) {
  typeof e != "function" && (e = EN(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Xn(o, this._parents, this._name, this._id);
}
function CD(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Xn(l, this._parents, this._name, this._id);
}
function kD(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ND(e, t, n) {
  var o, i, a = kD(t) ? Ry : On;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function RD(e, t) {
  var n = this._id;
  return arguments.length < 2 ? yn(this.node(), n).on.on(e) : this.each(ND(n, e, t));
}
function PD(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function TD() {
  return this.on("end.remove", PD(this._id));
}
function AD(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Sy(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, bu(d[m], t, n, m, d, yn(h, n)));
  return new Xn(a, this._parents, t, n);
}
function ID(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = SN(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, E = yn(h, n), y = 0, w = m.length; y < w; ++y)
          (v = m[y]) && bu(v, t, n, y, m, E);
        a.push(m), l.push(h);
      }
  return new Xn(a, l, t, n);
}
var MD = Gs.prototype.constructor;
function OD() {
  return new MD(this._groups, this._parents);
}
function LD(e, t) {
  var n, o, i;
  return function() {
    var a = ai(this, e), l = (this.style.removeProperty(e), ai(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function YN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function DD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = ai(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function jD(e, t, n) {
  var o, i, a;
  return function() {
    var l = ai(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ai(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function qD(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = On(this, e), d = f.on, h = f.value[a] == null ? u || (u = YN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function zD(e, t, n) {
  var o = (e += "") == "transform" ? FL : GN;
  return t == null ? this.styleTween(e, LD(e, o)).on("end.style." + e, YN(e)) : typeof t == "function" ? this.styleTween(e, jD(e, o, Py(this, "style." + e, t))).each(qD(this._id, e)) : this.styleTween(e, DD(e, o, t), n).on("end.style." + e, null);
}
function FD(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function $D(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && FD(e, l, n)), o;
  }
  return a._value = t, a;
}
function BD(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, $D(e, t, n ?? ""));
}
function VD(e) {
  return function() {
    this.textContent = e;
  };
}
function HD(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function WD(e) {
  return this.tween("text", typeof e == "function" ? HD(Py(this, "text", e)) : VD(e == null ? "" : e + ""));
}
function UD(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function GD(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && UD(i)), t;
  }
  return o._value = e, o;
}
function YD(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, GD(e));
}
function KD() {
  for (var e = this._name, t = this._id, n = KN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = yn(f, t);
        bu(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Xn(o, this._parents, e, n);
}
function XD() {
  var e, t, n = this, o = n._id, i = n.size();
  return new Promise(function(a, l) {
    var u = { value: l }, f = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var d = On(this, o), h = d.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(u), t._.interrupt.push(u), t._.end.push(f)), d.on = t;
    }), i === 0 && a();
  });
}
var QD = 0;
function Xn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function KN() {
  return ++QD;
}
var Gn = Gs.prototype;
Xn.prototype = {
  constructor: Xn,
  select: AD,
  selectAll: ID,
  selectChild: Gn.selectChild,
  selectChildren: Gn.selectChildren,
  filter: ED,
  merge: CD,
  selection: OD,
  transition: KD,
  call: Gn.call,
  nodes: Gn.nodes,
  node: Gn.node,
  size: Gn.size,
  empty: Gn.empty,
  each: Gn.each,
  on: RD,
  attr: lD,
  attrTween: hD,
  style: zD,
  styleTween: BD,
  text: WD,
  textTween: YD,
  remove: TD,
  tween: tD,
  delay: mD,
  duration: xD,
  ease: _D,
  easeVarying: SD,
  end: XD,
  [Symbol.iterator]: Gn[Symbol.iterator]
};
function ZD(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var JD = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ZD
};
function ej(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function tj(e) {
  var t, n;
  e instanceof Xn ? (t = e._id, e = e._name) : (t = KN(), (n = JD).time = Ny(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && bu(f, e, t, d, l, n || ej(f, t));
  return new Xn(o, this._parents, e, t);
}
Gs.prototype.interrupt = ZL;
Gs.prototype.transition = tj;
const Pl = (e) => () => e;
function nj(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Kn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Kn.prototype = {
  constructor: Kn,
  scale: function(e) {
    return e === 1 ? this : new Kn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Kn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Su = new Kn(1, 0, 0);
XN.prototype = Kn.prototype;
function XN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Su;
  return e.__zoom;
}
function cd(e) {
  e.stopImmediatePropagation();
}
function _s(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function rj(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function oj() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function x1() {
  return this.__zoom || Su;
}
function ij(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function sj() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function aj(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function QN() {
  var e = rj, t = oj, n = aj, o = ij, i = sj, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Vl, d = xu("start", "zoom", "end"), h, p, m, v = 500, E = 150, y = 0, w = 10;
  function _(L) {
    L.property("__zoom", x1).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", H).filter(i).on("touchstart.zoom", q).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(L, W, V, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", x1), L !== M ? P(L, W, V, Y) : M.interrupt().each(function() {
      A(this, arguments).event(Y).start().zoom(null, typeof W == "function" ? W.apply(this, arguments) : W).end();
    });
  }, _.scaleBy = function(L, W, V, Y) {
    _.scaleTo(L, function() {
      var M = this.__zoom.k, z = typeof W == "function" ? W.apply(this, arguments) : W;
      return M * z;
    }, V, Y);
  }, _.scaleTo = function(L, W, V, Y) {
    _.transform(L, function() {
      var M = t.apply(this, arguments), z = this.__zoom, Q = V == null ? N(M) : typeof V == "function" ? V.apply(this, arguments) : V, j = z.invert(Q), U = typeof W == "function" ? W.apply(this, arguments) : W;
      return n(b(C(z, U), Q, j), M, l);
    }, V, Y);
  }, _.translateBy = function(L, W, V, Y) {
    _.transform(L, function() {
      return n(this.__zoom.translate(
        typeof W == "function" ? W.apply(this, arguments) : W,
        typeof V == "function" ? V.apply(this, arguments) : V
      ), t.apply(this, arguments), l);
    }, null, Y);
  }, _.translateTo = function(L, W, V, Y, M) {
    _.transform(L, function() {
      var z = t.apply(this, arguments), Q = this.__zoom, j = Y == null ? N(z) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return n(Su.translate(j[0], j[1]).scale(Q.k).translate(
        typeof W == "function" ? -W.apply(this, arguments) : -W,
        typeof V == "function" ? -V.apply(this, arguments) : -V
      ), z, l);
    }, Y, M);
  };
  function C(L, W) {
    return W = Math.max(a[0], Math.min(a[1], W)), W === L.k ? L : new Kn(W, L.x, L.y);
  }
  function b(L, W, V) {
    var Y = W[0] - V[0] * L.k, M = W[1] - V[1] * L.k;
    return Y === L.x && M === L.y ? L : new Kn(L.k, Y, M);
  }
  function N(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function P(L, W, V, Y) {
    L.on("start.zoom", function() {
      A(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      A(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, z = arguments, Q = A(M, z).event(Y), j = t.apply(M, z), U = V == null ? N(j) : typeof V == "function" ? V.apply(M, z) : V, ie = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), $ = M.__zoom, Z = typeof W == "function" ? W.apply(M, z) : W, ee = f($.invert(U).concat(ie / $.k), Z.invert(U).concat(ie / Z.k));
      return function(K) {
        if (K === 1) K = Z;
        else {
          var te = ee(K), se = ie / te[2];
          K = new Kn(se, U[0] - te[0] * se, U[1] - te[1] * se);
        }
        Q.zoom(null, K);
      };
    });
  }
  function A(L, W, V) {
    return !V && L.__zooming || new I(L, W);
  }
  function I(L, W) {
    this.that = L, this.args = W, this.active = 0, this.sourceEvent = null, this.extent = t.apply(L, W), this.taps = 0;
  }
  I.prototype = {
    event: function(L) {
      return L && (this.sourceEvent = L), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(L, W) {
      return this.mouse && L !== "mouse" && (this.mouse[1] = W.invert(this.mouse[0])), this.touch0 && L !== "touch" && (this.touch0[1] = W.invert(this.touch0[0])), this.touch1 && L !== "touch" && (this.touch1[1] = W.invert(this.touch1[0])), this.that.__zoom = W, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(L) {
      var W = jt(this.that).datum();
      d.call(
        L,
        this.that,
        new nj(L, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: d
        }),
        W
      );
    }
  };
  function O(L, ...W) {
    if (!e.apply(this, arguments)) return;
    var V = A(this, W).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), z = fn(L);
    if (V.wheel)
      (V.mouse[0][0] !== z[0] || V.mouse[0][1] !== z[1]) && (V.mouse[1] = Y.invert(V.mouse[0] = z)), clearTimeout(V.wheel);
    else {
      if (Y.k === M) return;
      V.mouse = [z, Y.invert(z)], Ul(this), V.start();
    }
    _s(L), V.wheel = setTimeout(Q, E), V.zoom("mouse", n(b(C(Y, M), V.mouse[0], V.mouse[1]), V.extent, l));
    function Q() {
      V.wheel = null, V.end();
    }
  }
  function D(L, ...W) {
    if (m || !e.apply(this, arguments)) return;
    var V = L.currentTarget, Y = A(this, W, !0).event(L), M = jt(L.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", ie, !0), z = fn(L, V), Q = L.clientX, j = L.clientY;
    ON(L.view), cd(L), Y.mouse = [z, this.__zoom.invert(z)], Ul(this), Y.start();
    function U($) {
      if (_s($), !Y.moved) {
        var Z = $.clientX - Q, ee = $.clientY - j;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event($).zoom("mouse", n(b(Y.that.__zoom, Y.mouse[0] = fn($, V), Y.mouse[1]), Y.extent, l));
    }
    function ie($) {
      M.on("mousemove.zoom mouseup.zoom", null), LN($.view, Y.moved), _s($), Y.event($).end();
    }
  }
  function H(L, ...W) {
    if (e.apply(this, arguments)) {
      var V = this.__zoom, Y = fn(L.changedTouches ? L.changedTouches[0] : L, this), M = V.invert(Y), z = V.k * (L.shiftKey ? 0.5 : 2), Q = n(b(C(V, z), Y, M), t.apply(this, W), l);
      _s(L), u > 0 ? jt(this).transition().duration(u).call(P, Q, Y, L) : jt(this).call(_.transform, Q, Y, L);
    }
  }
  function q(L, ...W) {
    if (e.apply(this, arguments)) {
      var V = L.touches, Y = V.length, M = A(this, W, L.changedTouches.length === Y).event(L), z, Q, j, U;
      for (cd(L), Q = 0; Q < Y; ++Q)
        j = V[Q], U = fn(j, this), U = [U, this.__zoom.invert(U), j.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== U[2] && (M.touch1 = U, M.taps = 0) : (M.touch0 = U, z = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), z && (M.taps < 2 && (p = U[0], h = setTimeout(function() {
        h = null;
      }, v)), Ul(this), M.start());
    }
  }
  function B(L, ...W) {
    if (this.__zooming) {
      var V = A(this, W).event(L), Y = L.changedTouches, M = Y.length, z, Q, j, U;
      for (_s(L), z = 0; z < M; ++z)
        Q = Y[z], j = fn(Q, this), V.touch0 && V.touch0[2] === Q.identifier ? V.touch0[0] = j : V.touch1 && V.touch1[2] === Q.identifier && (V.touch1[0] = j);
      if (Q = V.that.__zoom, V.touch1) {
        var ie = V.touch0[0], $ = V.touch0[1], Z = V.touch1[0], ee = V.touch1[1], K = (K = Z[0] - ie[0]) * K + (K = Z[1] - ie[1]) * K, te = (te = ee[0] - $[0]) * te + (te = ee[1] - $[1]) * te;
        Q = C(Q, Math.sqrt(K / te)), j = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], U = [($[0] + ee[0]) / 2, ($[1] + ee[1]) / 2];
      } else if (V.touch0) j = V.touch0[0], U = V.touch0[1];
      else return;
      V.zoom("touch", n(b(Q, j, U), V.extent, l));
    }
  }
  function X(L, ...W) {
    if (this.__zooming) {
      var V = A(this, W).event(L), Y = L.changedTouches, M = Y.length, z, Q;
      for (cd(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), z = 0; z < M; ++z)
        Q = Y[z], V.touch0 && V.touch0[2] === Q.identifier ? delete V.touch0 : V.touch1 && V.touch1[2] === Q.identifier && delete V.touch1;
      if (V.touch1 && !V.touch0 && (V.touch0 = V.touch1, delete V.touch1), V.touch0) V.touch0[1] = this.__zoom.invert(V.touch0[0]);
      else if (V.end(), V.taps === 2 && (Q = fn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < w)) {
        var j = jt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : Pl(+L), _) : o;
  }, _.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : Pl(!!L), _) : e;
  }, _.touchable = function(L) {
    return arguments.length ? (i = typeof L == "function" ? L : Pl(!!L), _) : i;
  }, _.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : Pl([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), _) : t;
  }, _.scaleExtent = function(L) {
    return arguments.length ? (a[0] = +L[0], a[1] = +L[1], _) : [a[0], a[1]];
  }, _.translateExtent = function(L) {
    return arguments.length ? (l[0][0] = +L[0][0], l[1][0] = +L[1][0], l[0][1] = +L[0][1], l[1][1] = +L[1][1], _) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, _.constrain = function(L) {
    return arguments.length ? (n = L, _) : n;
  }, _.duration = function(L) {
    return arguments.length ? (u = +L, _) : u;
  }, _.interpolate = function(L) {
    return arguments.length ? (f = L, _) : f;
  }, _.on = function() {
    var L = d.on.apply(d, arguments);
    return L === d ? _ : L;
  }, _.clickDistance = function(L) {
    return arguments.length ? (y = (L = +L) * L, _) : Math.sqrt(y);
  }, _.tapDistance = function(L) {
    return arguments.length ? (w = +L, _) : w;
  }, _;
}
const In = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: o }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : o}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Ls = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ZN = ["Enter", " ", "Escape"], JN = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var ui;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ui || (ui = {}));
var oo;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(oo || (oo = {}));
var Ds;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ds || (Ds = {}));
const eR = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var Rr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Rr || (Rr = {}));
var ru;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ru || (ru = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const w1 = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function tR(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const nR = (e) => "id" in e && "source" in e && "target" in e, lj = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ty = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ks = (e, t = [0, 0]) => {
  const { width: n, height: o } = Jn(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, uj = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : Ty(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? ou(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Eu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Cu(n);
}, Xs = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Eu(n, ou(i)), o = !0);
  }), o ? Cu(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ay = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...Zs(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = js(u, fi(d)), w = (v ?? 0) * (E ?? 0), _ = a && y > 0;
    (!d.internals.handleBounds || _ || y >= w || d.dragging) && f.push(d);
  }
  return f;
}, cj = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function fj(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function dj({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = fj(e, l), f = Xs(u), d = Iy(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function rR({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
  const l = n.get(e), u = l.parentId ? n.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let p = l.extent || i;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", In.error005());
    else {
      const v = u.measured.width, E = u.measured.height;
      v && E && (p = [
        [f, d],
        [f + v, d + E]
      ]);
    }
  else u && di(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = di(p) ? lo(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", In.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function hj({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), E = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || E) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = cj(l, f);
  for (const m of f)
    u.has(m.id) && !h.find((E) => E.id === m.id) && h.push(m);
  if (!i)
    return {
      edges: h,
      nodes: l
    };
  const p = await i({
    nodes: l,
    edges: h
  });
  return typeof p == "boolean" ? p ? { edges: h, nodes: l } : { edges: [], nodes: [] } : p;
}
const ci = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), lo = (e = { x: 0, y: 0 }, t, n) => ({
  x: ci(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ci(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function oR(e, t, n) {
  const { width: o, height: i } = Jn(n), { x: a, y: l } = n.internals.positionAbsolute;
  return lo(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const _1 = (e, t, n) => e < t ? ci(Math.abs(e - t), 1, t) / t : e > n ? -ci(Math.abs(e - n), 1, t) / t : 0, iR = (e, t, n = 15, o = 40) => {
  const i = _1(e.x, o, t.width - o) * n, a = _1(e.y, o, t.height - o) * n;
  return [i, a];
}, Eu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ry = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Cu = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), fi = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Ty(e) ? e.internals.positionAbsolute : Ks(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ou = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Ty(e) ? e.internals.positionAbsolute : Ks(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, sR = (e, t) => Cu(Eu(ry(e), ry(t))), js = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, b1 = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), pj = (e, t) => {
}, Qs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Zs = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? Qs(u, l) : u;
}, iu = ({ x: e, y: t }, [n, o, i]) => ({
  x: e * i + n,
  y: t * i + o
});
function Ko(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function gj(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Ko(e, n), i = Ko(e, t);
    return {
      top: o,
      right: i,
      bottom: o,
      left: i,
      x: i * 2,
      y: o * 2
    };
  }
  if (typeof e == "object") {
    const o = Ko(e.top ?? e.y ?? 0, n), i = Ko(e.bottom ?? e.y ?? 0, n), a = Ko(e.left ?? e.x ?? 0, t), l = Ko(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: i, left: a, x: a + l, y: o + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function mj(e, t, n, o, i, a) {
  const { x: l, y: u } = iu(e, [t, n, o]), { x: f, y: d } = iu({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const Iy = (e, t, n, o, i, a) => {
  const l = gj(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = ci(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, E = n / 2 - m * h, y = mj(e, v, E, h, t, n), w = {
    left: Math.min(y.left - l.left, 0),
    top: Math.min(y.top - l.top, 0),
    right: Math.min(y.right - l.right, 0),
    bottom: Math.min(y.bottom - l.bottom, 0)
  };
  return {
    x: v - w.left + w.right,
    y: E - w.top + w.bottom,
    zoom: h
  };
}, qs = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function di(e) {
  return e != null && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function aR(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function lR(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function S1(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function vj() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function yj(e) {
  return { ...JN, ...e || {} };
}
function Ts(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = pn(e), u = Zs({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? Qs(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const My = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), uR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, xj = ["INPUT", "SELECT", "TEXTAREA"];
function cR(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : xj.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const fR = (e) => "clientX" in e, pn = (e, t) => {
  var a, l;
  const n = fR(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, E1 = (e, t, n, o, i) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((l) => {
    const u = l.getBoundingClientRect();
    return {
      id: l.getAttribute("data-handleid"),
      type: e,
      nodeId: i,
      position: l.getAttribute("data-handlepos"),
      x: (u.left - n.left) / o,
      y: (u.top - n.top) / o,
      ...My(l)
    };
  });
};
function dR({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Tl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function C1({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - Tl(t - o, a), n];
    case ye.Right:
      return [t + Tl(o - t, a), n];
    case ye.Top:
      return [t, n - Tl(n - i, a)];
    case ye.Bottom:
      return [t, n + Tl(i - n, a)];
  }
}
function hR({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = C1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = C1({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, E] = dR({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: i,
    sourceControlX: u,
    sourceControlY: f,
    targetControlX: d,
    targetControlY: h
  });
  return [
    `M${e},${t} C${u},${f} ${d},${h} ${o},${i}`,
    p,
    m,
    v,
    E
  ];
}
function pR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function wj({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function _j({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Eu(ou(e), ou(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return js(l, Cu(a)) > 0;
}
const bj = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, Sj = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), gR = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return nR(e) ? n = { ...e } : n = {
    ...e,
    id: bj(e)
  }, Sj(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function mR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = pR({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const k1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Ej = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, N1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Cj({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: o = ye.Top, center: i, offset: a, stepPosition: l }) {
  const u = k1[t], f = k1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = Ej({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let E = [], y, w;
  const _ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , b, N] = pR({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (u[m] * f[m] === -1) {
    m === "x" ? (y = i.x ?? d.x + (h.x - d.x) * l, w = i.y ?? (d.y + h.y) / 2) : (y = i.x ?? (d.x + h.x) / 2, w = i.y ?? d.y + (h.y - d.y) * l);
    const A = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], I = [
      { x: d.x, y: w },
      { x: h.x, y: w }
    ];
    u[m] === v ? E = m === "x" ? A : I : E = m === "x" ? I : A;
  } else {
    const A = [{ x: d.x, y: h.y }], I = [{ x: h.x, y: d.y }];
    if (m === "x" ? E = u.x === v ? I : A : E = u.y === v ? A : I, t === o) {
      const B = Math.abs(e[m] - n[m]);
      if (B <= a) {
        const X = Math.min(a - 1, a - B);
        u[m] === v ? _[m] = (d[m] > e[m] ? -1 : 1) * X : C[m] = (h[m] > n[m] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const B = m === "x" ? "y" : "x", X = u[m] === f[B], L = d[B] > h[B], W = d[B] < h[B];
      (u[m] === 1 && (!X && L || X && W) || u[m] !== 1 && (!X && W || X && L)) && (E = m === "x" ? A : I);
    }
    const O = { x: d.x + _.x, y: d.y + _.y }, D = { x: h.x + C.x, y: h.y + C.y }, H = Math.max(Math.abs(O.x - E[0].x), Math.abs(D.x - E[0].x)), q = Math.max(Math.abs(O.y - E[0].y), Math.abs(D.y - E[0].y));
    H >= q ? (y = (O.x + D.x) / 2, w = E[0].y) : (y = E[0].x, w = (O.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + _.x, y: d.y + _.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, w, b, N];
}
function kj(e, t, n, o) {
  const i = Math.min(N1(e, t) / 2, N1(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function oy({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, E, y] = Cj({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((_, C, b) => {
    let N = "";
    return b > 0 && b < p.length - 1 ? N = kj(p[b - 1], C, p[b + 1], l) : N = `${b === 0 ? "M" : "L"}${C.x} ${C.y}`, _ += N, _;
  }, ""), m, v, E, y];
}
function R1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Nj(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!R1(t) || !R1(n))
    return null;
  const o = t.internals.handleBounds || P1(t.handles), i = n.internals.handleBounds || P1(n.handles), a = T1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = T1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ui.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", In.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || ye.Bottom, f = (l == null ? void 0 : l.position) || ye.Top, d = zs(t, a, u), h = zs(n, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function P1(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const o of e)
    o.width = o.width ?? 1, o.height = o.height ?? 1, o.type === "source" ? t.push(o) : o.type === "target" && n.push(o);
  return {
    source: t,
    target: n
  };
}
function zs(e, t, n = ye.Left, o = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? Jn(e);
  if (o)
    return { x: i + l / 2, y: a + u / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ye.Top:
      return { x: i + l / 2, y: a };
    case ye.Right:
      return { x: i + l, y: a + u / 2 };
    case ye.Bottom:
      return { x: i + l / 2, y: a + u };
    case ye.Left:
      return { x: i, y: a + u / 2 };
  }
}
function T1(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function iy(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function Rj(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = iy(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const vR = 1e3, Pj = 10, Oy = {
  nodeOrigin: [0, 0],
  nodeExtent: Ls,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Tj = {
  ...Oy,
  checkEquality: !0
};
function Ly(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function Aj(e, t, n) {
  const o = Ly(Oy, n);
  for (const i of e.values())
    if (i.parentId)
      Dy(i, e, t, o);
    else {
      const a = Ks(i, o.nodeOrigin), l = di(i.extent) ? i.extent : o.nodeExtent, u = lo(a, l, Jn(i));
      i.internals.positionAbsolute = u;
    }
}
function Ij(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], o = [];
  for (const i of e.handles) {
    const a = {
      id: i.id,
      width: i.width ?? 1,
      height: i.height ?? 1,
      nodeId: e.id,
      x: i.x,
      y: i.y,
      position: i.position,
      type: i.type
    };
    i.type === "source" ? n.push(a) : i.type === "target" && o.push(a);
  }
  return {
    source: n,
    target: o
  };
}
function sy(e, t, n, o) {
  var d, h;
  const i = Ly(Tj, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? vR : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = Ks(p, i.nodeOrigin), E = di(p.extent) ? p.extent : i.nodeExtent, y = lo(v, E, Jn(p));
      m = {
        ...i.defaults,
        ...p,
        measured: {
          width: (d = p.measured) == null ? void 0 : d.width,
          height: (h = p.measured) == null ? void 0 : h.height
        },
        internals: {
          positionAbsolute: y,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Ij(p, m),
          z: yR(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && Dy(m, t, n, o, a);
  }
  return l;
}
function Mj(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Dy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = Ly(Oy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Mj(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * Pj), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? vR : 0, { x: p, y: m, z: v } = Oj(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = p !== E.x || m !== E.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : E,
      z: v
    }
  });
}
function yR(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Oj(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Jn(e), f = Ks(e, n), d = di(e.extent) ? lo(f, e.extent, u) : f;
  let h = lo({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = oR(h, u, t));
  const p = yR(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function jy(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? fi(f), h = sR(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var b;
    const h = f.internals.positionAbsolute, p = Jn(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), w = Math.max(p.height, Math.round(u.height)), _ = (y - p.width) * m[0], C = (w - p.height) * m[1];
    (v > 0 || E > 0 || _ || C) && (i.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - v + _,
        y: f.position.y - E + C
      }
    }), (b = n.get(d)) == null || b.forEach((N) => {
      e.some((P) => P.id === N.id) || i.push({
        id: N.id,
        type: "position",
        position: {
          x: N.position.x + v,
          y: N.position.y + E
        }
      });
    })), (p.width < u.width || p.height < u.height || v || E) && i.push({
      id: d,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (v ? m[0] * v - _ : 0),
        height: w + (E ? m[1] * E - C : 0)
      }
    });
  }), i;
}
function Lj(e, t, n, o, i, a) {
  const l = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const f = [], d = window.getComputedStyle(l), { m22: h } = new window.DOMMatrixReadOnly(d.transform), p = [];
  for (const m of e.values()) {
    const v = t.get(m.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), u = !0;
      continue;
    }
    const E = My(m.nodeElement), y = v.measured.width !== E.width || v.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !v.internals.handleBounds || m.force))) {
      const _ = m.nodeElement.getBoundingClientRect(), C = di(v.extent) ? v.extent : a;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = oR(b, E, t.get(v.parentId)) : C && (b = lo(b, C, E));
      const N = {
        ...v,
        measured: E,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: E1("source", m.nodeElement, _, h, v.id),
            target: E1("target", m.nodeElement, _, h, v.id)
          }
        }
      };
      t.set(v.id, N), v.parentId && Dy(N, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: E
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: fi(N, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = jy(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function Dj({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const l = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [i, a]
  ], o), u = !!l && (l.x !== n[0] || l.y !== n[1] || l.k !== n[2]);
  return Promise.resolve(u);
}
function A1(e, t, n, o, i, a) {
  let l = i;
  const u = o.get(l) || /* @__PURE__ */ new Map();
  o.set(l, u.set(n, t)), l = `${i}-${e}`;
  const f = o.get(l) || /* @__PURE__ */ new Map();
  if (o.set(l, f.set(n, t)), a) {
    l = `${i}-${e}-${a}`;
    const d = o.get(l) || /* @__PURE__ */ new Map();
    o.set(l, d.set(n, t));
  }
}
function xR(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: i, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: i, target: a, sourceHandle: l, targetHandle: u }, d = `${i}-${l}--${a}-${u}`, h = `${a}-${u}--${i}-${l}`;
    A1("source", f, h, e, i, l), A1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function wR(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : wR(n, t) : !1;
}
function I1(e, t, n) {
  var i;
  let o = e;
  do {
    if ((i = o == null ? void 0 : o.matches) != null && i.call(o, t))
      return !0;
    if (o === n)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function jj(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !wR(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
      const u = e.get(a);
      u && i.set(a, {
        id: a,
        position: u.position || { x: 0, y: 0 },
        distance: {
          x: n.x - u.internals.positionAbsolute.x,
          y: n.y - u.internals.positionAbsolute.y
        },
        extent: u.extent,
        parentId: u.parentId,
        origin: u.origin,
        expandParent: u.expandParent,
        internals: {
          positionAbsolute: u.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: u.measured.width ?? 0,
          height: u.measured.height ?? 0
        }
      });
    }
  return i;
}
function fd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
  var l, u, f;
  const i = [];
  for (const [d, h] of t) {
    const p = (l = n.get(d)) == null ? void 0 : l.internals.userNode;
    p && i.push({
      ...p,
      position: h.position,
      dragging: o
    });
  }
  if (!e)
    return [i[0], i];
  const a = (u = n.get(e)) == null ? void 0 : u.internals.userNode;
  return [
    a ? {
      ...a,
      position: ((f = t.get(e)) == null ? void 0 : f.position) || a.position,
      dragging: o
    } : i[0],
    i
  ];
}
function qj({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const a = {
    x: n - i.distance.x,
    y: o - i.distance.y
  }, l = Qs(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function zj({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, E = !1, y = null;
  function w({ noDragClassName: C, handleSelector: b, domNode: N, isSelectable: P, nodeId: A, nodeClickDistance: I = 0 }) {
    m = jt(N);
    function O({ x: B, y: X }) {
      const { nodeLookup: L, nodeExtent: W, snapGrid: V, snapToGrid: Y, nodeOrigin: M, onNodeDrag: z, onSelectionDrag: Q, onError: j, updateNodePositions: U } = t();
      a = { x: B, y: X };
      let ie = !1;
      const $ = u.size > 1, Z = $ && W ? ry(Xs(u)) : null, ee = $ && Y ? qj({
        dragItems: u,
        snapGrid: V,
        x: B,
        y: X
      }) : null;
      for (const [K, te] of u) {
        if (!L.has(K))
          continue;
        let se = { x: B - te.distance.x, y: X - te.distance.y };
        Y && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : Qs(se, V));
        let ae = null;
        if ($ && W && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + W[0][0], me = pe.x + te.measured.width - Z.x2 + W[1][0], Re = pe.y - Z.y + W[0][1], Ee = pe.y + te.measured.height - Z.y2 + W[1][1];
          ae = [
            [be, Re],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = rR({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || W,
          nodeOrigin: M,
          onError: j
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (U(u, !0), y && (o || z || !A && Q))) {
        const [K, te] = fd({
          nodeId: A,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, K, te), z == null || z(y, K, te), A || Q == null || Q(y, te);
      }
    }
    async function D() {
      if (!h)
        return;
      const { transform: B, panBy: X, autoPanSpeed: L, autoPanOnNodeDrag: W } = t();
      if (!W) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [V, Y] = iR(d, h, L);
      (V !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - V / B[2], a.y = (a.y ?? 0) - Y / B[2], await X({ x: V, y: Y }) && O(a)), l = requestAnimationFrame(D);
    }
    function H(B) {
      var $;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: W, transform: V, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: z, onNodeDragStart: Q, onSelectionDragStart: j, unselectNodesAndEdges: U } = t();
      p = !0, (!z || !P) && !L && A && (($ = X.get(A)) != null && $.selected || U()), P && z && A && (e == null || e(A));
      const ie = Ts(B.sourceEvent, { transform: V, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = jj(X, W, ie, A), u.size > 0 && (n || Q || !A && j)) {
        const [Z, ee] = fd({
          nodeId: A,
          dragItems: u,
          nodeLookup: X
        });
        n == null || n(B.sourceEvent, u, Z, ee), Q == null || Q(B.sourceEvent, Z, ee), A || j == null || j(B.sourceEvent, ee);
      }
    }
    const q = DN().clickDistance(I).on("start", (B) => {
      const { domNode: X, nodeDragThreshold: L, transform: W, snapGrid: V, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, v = !1, E = !1, y = B.sourceEvent, L === 0 && H(B), a = Ts(B.sourceEvent, { transform: W, snapGrid: V, snapToGrid: Y, containerBounds: h }), d = pn(B.sourceEvent, h);
    }).on("drag", (B) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: W, snapToGrid: V, nodeDragThreshold: Y, nodeLookup: M } = t(), z = Ts(B.sourceEvent, { transform: L, snapGrid: W, snapToGrid: V, containerBounds: h });
      if (y = B.sourceEvent, (B.sourceEvent.type === "touchmove" && B.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      A && !M.has(A)) && (v = !0), !v) {
        if (!f && X && p && (f = !0, D()), !p) {
          const Q = pn(B.sourceEvent, h), j = Q.x - d.x, U = Q.y - d.y;
          Math.sqrt(j * j + U * U) > Y && H(B);
        }
        (a.x !== z.xSnapped || a.y !== z.ySnapped) && u && p && (d = pn(B.sourceEvent, h), O(z));
      }
    }).on("end", (B) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: W, onSelectionDragStop: V } = t();
        if (E && (L(u, !1), E = !1), i || W || !A && V) {
          const [Y, M] = fd({
            nodeId: A,
            dragItems: u,
            nodeLookup: X,
            dragging: !1
          });
          i == null || i(B.sourceEvent, u, Y, M), W == null || W(B.sourceEvent, Y, M), A || V == null || V(B.sourceEvent, M);
        }
      }
    }).filter((B) => {
      const X = B.target;
      return !B.button && (!C || !I1(X, `.${C}`, N)) && (!b || I1(X, b, N));
    });
    m.call(q);
  }
  function _() {
    m == null || m.on(".drag", null);
  }
  return {
    update: w,
    destroy: _
  };
}
function Fj(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    js(i, fi(a)) > 0 && o.push(a);
  return o;
}
const $j = 250;
function Bj(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = Fj(e, n, t + $j);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: v } = zs(d, p, p.position, !0), E = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(v - e.y, 2));
      E > t || (E < a ? (i = [{ ...p, x: m, y: v }], a = E) : E === a && i.push({ ...p, x: m, y: v }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const d = o.type === "source" ? "target" : "source";
    return i.find((h) => h.type === d) ?? i[0];
  }
  return i[0];
}
function _R(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...zs(l, f, f.position, !0) } : f;
}
function bR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Vj(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const SR = () => !0;
function Hj(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: E, onConnect: y, onConnectEnd: w, isValidConnection: _ = SR, onReconnectEnd: C, updateConnection: b, getTransform: N, getFromHandle: P, autoPanSpeed: A, dragThreshold: I = 1, handleDomNode: O }) {
  const D = uR(e.target);
  let H = 0, q;
  const { x: B, y: X } = pn(e), L = bR(a, O), W = u == null ? void 0 : u.getBoundingClientRect();
  let V = !1;
  if (!W || !L)
    return;
  const Y = _R(i, L, o, f, t);
  if (!Y)
    return;
  let M = pn(e, W), z = !1, Q = null, j = !1, U = null;
  function ie() {
    if (!h || !W)
      return;
    const [ce, de] = iR(M, W, A);
    m({ x: ce, y: de }), H = requestAnimationFrame(ie);
  }
  const $ = {
    ...Y,
    nodeId: i,
    type: L,
    position: Y.position
  }, Z = f.get(i);
  let K = {
    inProgress: !0,
    isValid: null,
    from: zs(Z, $, ye.Left, !0),
    fromHandle: $,
    fromPosition: $.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: w1[$.position],
    toNode: null,
    pointer: M
  };
  function te() {
    V = !0, b(K), E == null || E(e, { nodeId: i, handleId: o, handleType: L });
  }
  I === 0 && te();
  function se(ce) {
    if (!V) {
      const { x: me, y: Re } = pn(ce), Ee = me - B, Je = Re - X;
      if (!(Ee * Ee + Je * Je > I * I))
        return;
      te();
    }
    if (!P() || !$) {
      ae(ce);
      return;
    }
    const de = N();
    M = pn(ce, W), q = Bj(Zs(M, de, !1, [1, 1]), n, f, $), z || (ie(), z = !0);
    const pe = ER(ce, {
      handle: q,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: _,
      doc: D,
      lib: d,
      flowId: p,
      nodeLookup: f
    });
    U = pe.handleDomNode, Q = pe.connection, j = Vj(!!q, pe.isValid);
    const be = {
      // from stays the same
      ...K,
      isValid: j,
      to: pe.toHandle && j ? iu({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: j && pe.toHandle ? pe.toHandle.position : w1[$.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    b(be), K = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (V) {
        (q || U) && Q && j && (y == null || y(Q));
        const { inProgress: de, ...pe } = K, be = {
          ...pe,
          toPosition: K.toHandle ? K.toPosition : null
        };
        w == null || w(ce, be), a && (C == null || C(ce, be));
      }
      v(), cancelAnimationFrame(H), z = !1, j = !1, Q = null, U = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function ER(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = SR, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: E } = pn(e), y = l.elementFromPoint(v, E), w = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, _ = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = bR(void 0, w), b = w.getAttribute("data-nodeid"), N = w.getAttribute("data-handleid"), P = w.classList.contains("connectable"), A = w.classList.contains("connectableend");
    if (!b || !C)
      return _;
    const I = {
      source: p ? b : o,
      sourceHandle: p ? N : i,
      target: p ? o : b,
      targetHandle: p ? i : N
    };
    _.connection = I;
    const D = P && A && (n === ui.Strict ? p && C === "source" || !p && C === "target" : b !== o || N !== i);
    _.isValid = D && d(I), _.toHandle = _R(b, C, N, h, n, !0);
  }
  return _;
}
const ay = {
  onPointerDown: Hj,
  isValid: ER
};
function Wj({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = jt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const E = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const N = n(), P = b.sourceEvent.ctrlKey && qs() ? 10 : 1, A = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * h, I = N[2] * Math.pow(2, A * P);
      t.scaleTo(I);
    };
    let y = [0, 0];
    const w = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (y = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, _ = (b) => {
      const N = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], A = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const I = o() * Math.max(N[2], Math.log(N[2])) * (v ? -1 : 1), O = {
        x: N[0] - A[0] * I,
        y: N[1] - A[1] * I
      }, D = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: N[2]
      }, D, u);
    }, C = QN().on("start", w).on("zoom", p ? _ : null).on("zoom.wheel", m ? E : null);
    i.call(C, {});
  }
  function l() {
    i.on("zoom", null);
  }
  return {
    update: a,
    destroy: l,
    pointer: fn
  };
}
const ku = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), dd = ({ x: e, y: t, zoom: n }) => Su.translate(e, t).scale(n), ei = (e, t) => e.target.closest(`.${t}`), CR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Uj = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, hd = (e, t = 0, n = Uj, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, kR = (e) => {
  const t = e.ctrlKey && qs() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Gj({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (ei(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const w = fn(h), _ = kR(h), C = p * Math.pow(2, _);
      o.scaleTo(n, C, w, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === oo.Vertical ? 0 : h.deltaX * m, E = i === oo.Horizontal ? 0 : h.deltaY * m;
    !qs() && h.shiftKey && i !== oo.Vertical && (v = h.deltaY * m, E = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(E / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = ku(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function Yj({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = ei(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function Kj({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = ku(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function Xj({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && CR(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, ku(a.transform)));
  };
}
function Qj({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && CR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = ku(l.transform);
      e.prevViewport = f, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          i == null || i(l.sourceEvent, f);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Zj({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var w;
    const m = e || t, v = n && p.ctrlKey, E = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (ei(p, `${d}-flow__node`) || ei(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !i && !a && !n || l || h && !E || ei(p, u) && E || ei(p, f) && (!E || i && E && !e) || !n && p.ctrlKey && E)
      return !1;
    if (!n && p.type === "touchstart" && ((w = p.touches) == null ? void 0 : w.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !i && !v && E || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || E) && y;
  };
}
function Jj({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = QN().scaleExtent([t, n]).translateExtent(o), m = jt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: ci(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), E = m.on("dblclick.zoom");
  p.wheelDelta(kR);
  function y(q, B) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((B == null ? void 0 : B.interpolate) === "linear" ? Ps : Vl).transform(hd(m, B == null ? void 0 : B.duration, B == null ? void 0 : B.ease, () => X(!0)), q);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: q, noPanClassName: B, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: W, panOnDrag: V, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: Q, zoomOnScroll: j, zoomOnDoubleClick: U, zoomActivationKeyPressed: ie, lib: $, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && _();
    const se = W && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !hn(K) || K < 0 ? 0 : K);
    const ae = se ? Gj({
      zoomPanValues: d,
      noWheelClassName: q,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: Y,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : Yj({
      noWheelClassName: q,
      preventScrolling: z,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Kj({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = Xj({
        zoomPanValues: d,
        panOnDrag: V,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const be = Qj({
        zoomPanValues: d,
        panOnDrag: V,
        panOnScroll: W,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", be);
    }
    const ce = Zj({
      zoomActivationKeyPressed: ie,
      panOnDrag: V,
      zoomOnScroll: j,
      panOnScroll: W,
      zoomOnDoubleClick: U,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: B,
      noWheelClassName: q,
      lib: $,
      connectionInProgress: ee
    });
    p.filter(ce), U ? m.on("dblclick.zoom", E) : m.on("dblclick.zoom", null);
  }
  function _() {
    p.on("zoom", null);
  }
  async function C(q, B, X) {
    const L = dd(q), W = p == null ? void 0 : p.constrain()(L, B, X);
    return W && await y(W), new Promise((V) => V(W));
  }
  async function b(q, B) {
    const X = dd(q);
    return await y(X, B), new Promise((L) => L(X));
  }
  function N(q) {
    if (m) {
      const B = dd(q), X = m.property("__zoom");
      (X.k !== q.zoom || X.x !== q.x || X.y !== q.y) && (p == null || p.transform(m, B, null, { sync: !0 }));
    }
  }
  function P() {
    const q = m ? XN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: q.x, y: q.y, zoom: q.k };
  }
  function A(q, B) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((B == null ? void 0 : B.interpolate) === "linear" ? Ps : Vl).scaleTo(hd(m, B == null ? void 0 : B.duration, B == null ? void 0 : B.ease, () => X(!0)), q);
    }) : Promise.resolve(!1);
  }
  function I(q, B) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((B == null ? void 0 : B.interpolate) === "linear" ? Ps : Vl).scaleBy(hd(m, B == null ? void 0 : B.duration, B == null ? void 0 : B.ease, () => X(!0)), q);
    }) : Promise.resolve(!1);
  }
  function O(q) {
    p == null || p.scaleExtent(q);
  }
  function D(q) {
    p == null || p.translateExtent(q);
  }
  function H(q) {
    const B = !hn(q) || q < 0 ? 0 : q;
    p == null || p.clickDistance(B);
  }
  return {
    update: w,
    destroy: _,
    setViewport: b,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: A,
    scaleBy: I,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: N,
    setClickDistance: H
  };
}
var hi;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(hi || (hi = {}));
function eq({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function M1(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), o = e.includes("left"), i = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: o,
    affectsY: i
  };
}
function Er(e, t) {
  return Math.max(0, t - e);
}
function Cr(e, t) {
  return Math.max(0, e - t);
}
function Al(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function O1(e, t) {
  return e ? !t : t;
}
function tq(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: E } = n, { minWidth: y, maxWidth: w, minHeight: _, maxHeight: C } = o, { x: b, y: N, width: P, height: A, aspectRatio: I } = e;
  let O = Math.floor(h ? v - e.pointerX : 0), D = Math.floor(p ? E - e.pointerY : 0);
  const H = P + (f ? -O : O), q = A + (d ? -D : D), B = -a[0] * P, X = -a[1] * A;
  let L = Al(H, y, w), W = Al(q, _, C);
  if (l) {
    let M = 0, z = 0;
    f && O < 0 ? M = Er(b + O + B, l[0][0]) : !f && O > 0 && (M = Cr(b + H + B, l[1][0])), d && D < 0 ? z = Er(N + D + X, l[0][1]) : !d && D > 0 && (z = Cr(N + q + X, l[1][1])), L = Math.max(L, M), W = Math.max(W, z);
  }
  if (u) {
    let M = 0, z = 0;
    f && O > 0 ? M = Cr(b + O, u[0][0]) : !f && O < 0 && (M = Er(b + H, u[1][0])), d && D > 0 ? z = Cr(N + D, u[0][1]) : !d && D < 0 && (z = Er(N + q, u[1][1])), L = Math.max(L, M), W = Math.max(W, z);
  }
  if (i) {
    if (h) {
      const M = Al(H / I, _, C) * I;
      if (L = Math.max(L, M), l) {
        let z = 0;
        !f && !d || f && !d && m ? z = Cr(N + X + H / I, l[1][1]) * I : z = Er(N + X + (f ? O : -O) / I, l[0][1]) * I, L = Math.max(L, z);
      }
      if (u) {
        let z = 0;
        !f && !d || f && !d && m ? z = Er(N + H / I, u[1][1]) * I : z = Cr(N + (f ? O : -O) / I, u[0][1]) * I, L = Math.max(L, z);
      }
    }
    if (p) {
      const M = Al(q * I, y, w) / I;
      if (W = Math.max(W, M), l) {
        let z = 0;
        !f && !d || d && !f && m ? z = Cr(b + q * I + B, l[1][0]) / I : z = Er(b + (d ? D : -D) * I + B, l[0][0]) / I, W = Math.max(W, z);
      }
      if (u) {
        let z = 0;
        !f && !d || d && !f && m ? z = Er(b + q * I, u[1][0]) / I : z = Cr(b + (d ? D : -D) * I, u[0][0]) / I, W = Math.max(W, z);
      }
    }
  }
  D = D + (D < 0 ? W : -W), O = O + (O < 0 ? L : -L), i && (m ? H > q * I ? D = (O1(f, d) ? -O : O) / I : O = (O1(f, d) ? -D : D) * I : h ? (D = O / I, d = f) : (O = D * I, f = d));
  const V = f ? b + O : b, Y = d ? N + D : N;
  return {
    width: P + (f ? -O : O),
    height: A + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + V,
    y: a[1] * D * (d ? -1 : 1) + Y
  };
}
const NR = { width: 0, height: 0, x: 0, y: 0 }, nq = {
  ...NR,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function rq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function oq(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function iq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = jt(e);
  let l = {
    controlDirection: M1("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: p, resizeDirection: m, onResizeStart: v, onResize: E, onResizeEnd: y, shouldResize: w }) {
    let _ = { ...NR }, C = { ...nq };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: M1(d)
    };
    let b, N = null, P = [], A, I, O, D = !1;
    const H = DN().on("start", (q) => {
      const { nodeLookup: B, transform: X, snapGrid: L, snapToGrid: W, nodeOrigin: V, paneDomNode: Y } = n();
      if (b = B.get(t), !b)
        return;
      N = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: z } = Ts(q.sourceEvent, {
        transform: X,
        snapGrid: L,
        snapToGrid: W,
        containerBounds: N
      });
      _ = {
        width: b.measured.width ?? 0,
        height: b.measured.height ?? 0,
        x: b.position.x ?? 0,
        y: b.position.y ?? 0
      }, C = {
        ..._,
        pointerX: M,
        pointerY: z,
        aspectRatio: _.width / _.height
      }, A = void 0, b.parentId && (b.extent === "parent" || b.expandParent) && (A = B.get(b.parentId), I = A && b.extent === "parent" ? rq(A) : void 0), P = [], O = void 0;
      for (const [Q, j] of B)
        if (j.parentId === t && (P.push({
          id: Q,
          position: { ...j.position },
          extent: j.extent
        }), j.extent === "parent" || j.expandParent)) {
          const U = oq(j, b, j.origin ?? V);
          O ? O = [
            [Math.min(U[0][0], O[0][0]), Math.min(U[0][1], O[0][1])],
            [Math.max(U[1][0], O[1][0]), Math.max(U[1][1], O[1][1])]
          ] : O = U;
        }
      v == null || v(q, { ..._ });
    }).on("drag", (q) => {
      const { transform: B, snapGrid: X, snapToGrid: L, nodeOrigin: W } = n(), V = Ts(q.sourceEvent, {
        transform: B,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: N
      }), Y = [];
      if (!b)
        return;
      const { x: M, y: z, width: Q, height: j } = _, U = {}, ie = b.origin ?? W, { width: $, height: Z, x: ee, y: K } = tq(C, l.controlDirection, V, l.boundaries, l.keepAspectRatio, ie, I, O), te = $ !== Q, se = Z !== j, ae = ee !== M && te, ce = K !== z && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (U.x = ae ? ee : _.x, U.y = ce ? K : _.y, _.x = U.x, _.y = U.y, P.length > 0)) {
        const me = ee - M, Re = K - z;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * ($ - Q),
            y: Ee.position.y - Re + ie[1] * (Z - j)
          }, Y.push(Ee);
      }
      if ((te || se) && (U.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? $ : _.width, U.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : _.height, _.width = U.width, _.height = U.height), A && b.expandParent) {
        const me = ie[0] * (U.width ?? 0);
        U.x && U.x < me && (_.x = me, C.x = C.x - (U.x - me));
        const Re = ie[1] * (U.height ?? 0);
        U.y && U.y < Re && (_.y = Re, C.y = C.y - (U.y - Re));
      }
      const de = eq({
        width: _.width,
        prevWidth: Q,
        height: _.height,
        prevHeight: j,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ..._, direction: de };
      (w == null ? void 0 : w(q, pe)) !== !1 && (D = !0, E == null || E(q, pe), o(U, Y));
    }).on("end", (q) => {
      D && (y == null || y(q, { ..._ }), i == null || i({ ..._ }), D = !1);
    });
    a.call(H);
  }
  function f() {
    a.on(".drag", null);
  }
  return {
    update: u,
    destroy: f
  };
}
var pd = { exports: {} }, gd = {}, md = { exports: {} }, vd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L1;
function sq() {
  if (L1) return vd;
  L1 = 1;
  var e = Us();
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, i = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(p, m) {
    var v = m(), E = o({ inst: { value: v, getSnapshot: m } }), y = E[0].inst, w = E[1];
    return a(
      function() {
        y.value = v, y.getSnapshot = m, f(y) && w({ inst: y });
      },
      [p, v, m]
    ), i(
      function() {
        return f(y) && w({ inst: y }), p(function() {
          f(y) && w({ inst: y });
        });
      },
      [p]
    ), l(v), v;
  }
  function f(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var v = m();
      return !n(p, v);
    } catch {
      return !0;
    }
  }
  function d(p, m) {
    return m();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : u;
  return vd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, vd;
}
var D1;
function aq() {
  return D1 || (D1 = 1, md.exports = sq()), md.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function lq() {
  if (j1) return gd;
  j1 = 1;
  var e = Us(), t = aq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return gd.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function _(A) {
          if (!C) {
            if (C = !0, b = A, A = m(A), v !== void 0 && y.hasValue) {
              var I = y.value;
              if (v(I, A))
                return N = I;
            }
            return N = A;
          }
          if (I = N, o(b, A)) return I;
          var O = m(A);
          return v !== void 0 && v(I, O) ? (b = A, I) : (b = A, N = O);
        }
        var C = !1, b, N, P = p === void 0 ? null : p;
        return [
          function() {
            return _(h());
          },
          P === null ? void 0 : function() {
            return _(P());
          }
        ];
      },
      [h, p, m, v]
    );
    var w = i(d, E[0], E[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = w;
      },
      [w]
    ), f(w), w;
  }, gd;
}
var q1;
function uq() {
  return q1 || (q1 = 1, pd.exports = lq()), pd.exports;
}
var cq = uq();
const fq = /* @__PURE__ */ yu(cq), dq = {}, z1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((E) => E(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (dq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, hq = (e) => e ? z1(e) : z1, { useDebugValue: pq } = Zt, { useSyncExternalStoreWithSelector: gq } = fq, mq = (e) => e;
function RR(e, t = mq, n) {
  const o = gq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return pq(o), o;
}
const F1 = (e, t) => {
  const n = hq(e), o = (i, a = t) => RR(n, i, a);
  return Object.assign(o, n), o;
}, vq = (e, t) => e ? F1(e, t) : F1;
function Qe(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [o, i] of e)
      if (!Object.is(i, t.get(o)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const o of e)
      if (!t.has(o))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e[o], t[o]))
      return !1;
  return !0;
}
var Js = wN();
const yq = /* @__PURE__ */ yu(Js), Nu = k.createContext(null), xq = Nu.Provider, PR = In.error001();
function Ie(e, t) {
  const n = k.useContext(Nu);
  if (n === null)
    throw new Error(PR);
  return RR(n, e, t);
}
function He() {
  const e = k.useContext(Nu);
  if (e === null)
    throw new Error(PR);
  return k.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const $1 = { display: "none" }, wq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, TR = "react-flow__node-desc", AR = "react-flow__edge-desc", _q = "react-flow__aria-live", bq = (e) => e.ariaLiveMessage, Sq = (e) => e.ariaLabelConfig;
function Eq({ rfId: e }) {
  const t = Ie(bq);
  return R.jsx("div", { id: `${_q}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: wq, children: t });
}
function Cq({ rfId: e, disableKeyboardA11y: t }) {
  const n = Ie(Sq);
  return R.jsxs(R.Fragment, { children: [R.jsx("div", { id: `${TR}-${e}`, style: $1, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), R.jsx("div", { id: `${AR}-${e}`, style: $1, children: n["edge.a11yDescription.default"] }), !t && R.jsx(Eq, { rfId: e })] });
}
const ea = k.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return R.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
ea.displayName = "Panel";
function kq({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : R.jsx(ea, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: R.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Nq = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Il = (e) => e.id;
function Rq(e, t) {
  return Qe(e.selectedNodes.map(Il), t.selectedNodes.map(Il)) && Qe(e.selectedEdges.map(Il), t.selectedEdges.map(Il));
}
function Pq({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Ie(Nq, Rq);
  return k.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const Tq = (e) => !!e.onSelectionChangeHandlers;
function Aq({ onSelectionChange: e }) {
  const t = Ie(Tq);
  return e || t ? R.jsx(Pq, { onSelectionChange: e }) : null;
}
const IR = [0, 0], Iq = { x: 0, y: 0, zoom: 1 }, Mq = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig"
], B1 = [...Mq, "rfId"], Oq = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), V1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Ls,
  nodeOrigin: IR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Lq(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ie(Oq, Qe), d = He();
  k.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = V1, u();
  }), []);
  const h = k.useRef(V1);
  return k.useEffect(
    () => {
      for (const p of B1) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: yj(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    B1.map((p) => e[p])
  ), null;
}
function H1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Dq(e) {
  var o;
  const [t, n] = k.useState(e === "system" ? null : e);
  return k.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = H1(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = H1()) != null && o.matches ? "dark" : "light";
}
const W1 = typeof document < "u" ? document : null;
function Fs(e = null, t = { target: W1, actInsideInputWithModifier: !0 }) {
  const [n, o] = k.useState(!1), i = k.useRef(!1), a = k.useRef(/* @__PURE__ */ new Set([])), [l, u] = k.useMemo(() => {
    if (e !== null) {
      const d = (Array.isArray(e) ? e : [e]).filter((p) => typeof p == "string").map((p) => p.replace("+", `
`).replace(`

`, `
+`).split(`
`)), h = d.reduce((p, m) => p.concat(...m), []);
      return [d, h];
    }
    return [[], []];
  }, [e]);
  return k.useEffect(() => {
    const f = (t == null ? void 0 : t.target) ?? W1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var w, _;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && cR(v))
          return !1;
        const y = G1(v.code, u);
        if (a.current.add(v[y]), U1(l, a.current, !1)) {
          const C = ((_ = (w = v.composedPath) == null ? void 0 : w.call(v)) == null ? void 0 : _[0]) || v.target, b = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !b) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const E = G1(v.code, u);
        U1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[E]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function U1(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function G1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const jq = () => {
  const e = He();
  return k.useMemo(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: o } = e.getState();
      return o ? o.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [o, i, a], panZoom: l } = e.getState();
      return l ? (await l.setViewport({
        x: t.x ?? o,
        y: t.y ?? i,
        zoom: t.zoom ?? a
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, o] = e.getState().transform;
      return { x: t, y: n, zoom: o };
    },
    setCenter: async (t, n, o) => e.getState().setCenter(t, n, o),
    fitBounds: async (t, n) => {
      const { width: o, height: i, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = Iy(t, o, i, a, l, (n == null ? void 0 : n.padding) ?? 0.1);
      return u ? (await u.setViewport(f, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: o, snapGrid: i, snapToGrid: a, domNode: l } = e.getState();
      if (!l)
        return t;
      const { x: u, y: f } = l.getBoundingClientRect(), d = {
        x: t.x - u,
        y: t.y - f
      }, h = n.snapGrid ?? i, p = n.snapToGrid ?? a;
      return Zs(d, o, p, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: i, y: a } = o.getBoundingClientRect(), l = iu(t, n);
      return {
        x: l.x + i,
        y: l.y + a
      };
    }
  }), []);
};
function MR(e, t) {
  const n = [], o = /* @__PURE__ */ new Map(), i = [];
  for (const a of e)
    if (a.type === "add") {
      i.push(a);
      continue;
    } else if (a.type === "remove" || a.type === "replace")
      o.set(a.id, [a]);
    else {
      const l = o.get(a.id);
      l ? l.push(a) : o.set(a.id, [a]);
    }
  for (const a of t) {
    const l = o.get(a.id);
    if (!l) {
      n.push(a);
      continue;
    }
    if (l[0].type === "remove")
      continue;
    if (l[0].type === "replace") {
      n.push({ ...l[0].item });
      continue;
    }
    const u = { ...a };
    for (const f of l)
      qq(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function qq(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured ?? (t.measured = {}), t.measured.width = e.dimensions.width, t.measured.height = e.dimensions.height, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function OR(e, t) {
  return MR(e, t);
}
function LR(e, t) {
  return MR(e, t);
}
function to(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function ti(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, a] of e) {
    const l = t.has(i);
    !(a.selected === void 0 && !l) && a.selected !== l && (n && (a.selected = l), o.push(to(a.id, l)));
  }
  return o;
}
function Y1({ items: e = [], lookup: t }) {
  var i;
  const n = [], o = new Map(e.map((a) => [a.id, a]));
  for (const [a, l] of e.entries()) {
    const u = t.get(l.id), f = ((i = u == null ? void 0 : u.internals) == null ? void 0 : i.userNode) ?? u;
    f !== void 0 && f !== l && n.push({ id: l.id, item: l, type: "replace" }), f === void 0 && n.push({ item: l, type: "add", index: a });
  }
  for (const [a] of t)
    o.get(a) === void 0 && n.push({ id: a, type: "remove" });
  return n;
}
function K1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const X1 = (e) => lj(e), zq = (e) => nR(e);
function DR(e) {
  return k.forwardRef(e);
}
const Fq = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function Q1(e) {
  const [t, n] = k.useState(BigInt(0)), [o] = k.useState(() => $q(() => n((i) => i + BigInt(1))));
  return Fq(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function $q(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const jR = k.createContext(null);
function Bq({ children: e }) {
  const t = He(), n = k.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let E = f;
    for (const w of u)
      E = typeof w == "function" ? w(E) : w;
    const y = Y1({
      items: E,
      lookup: m
    });
    h && d(E), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: w, nodes: _, setNodes: C } = t.getState();
      w && C(_);
    });
  }, []), o = Q1(n), i = k.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const E of u)
      v = typeof E == "function" ? E(v) : E;
    h ? d(v) : p && p(Y1({
      items: v,
      lookup: m
    }));
  }, []), a = Q1(i), l = k.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return R.jsx(jR.Provider, { value: l, children: e });
}
function Vq() {
  const e = k.useContext(jR);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Hq = (e) => !!e.panZoom;
function qy() {
  const e = jq(), t = He(), n = Vq(), o = Ie(Hq), i = k.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var _, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), E = X1(p) ? p : m.get(p.id), y = E.parentId ? lR(E.position, E.measured, E.parentId, m, v) : E.position, w = {
        ...E,
        position: y,
        width: ((_ = E.measured) == null ? void 0 : _.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return fi(w);
    }, d = (p, m, v = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === p) {
          const w = typeof m == "function" ? m(y) : m;
          return v.replace && X1(w) ? w : { ...y, ...w };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === p) {
          const w = typeof m == "function" ? m(y) : m;
          return v.replace && zq(w) ? w : { ...y, ...w };
        }
        return y;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((p) => ({ ...p })),
      getNode: (p) => {
        var m;
        return (m = a(p)) == null ? void 0 : m.internals.userNode;
      },
      getInternalNode: a,
      getEdges: () => {
        const { edges: p = [] } = t.getState();
        return p.map((m) => ({ ...m }));
      },
      getEdge: (p) => t.getState().edgeLookup.get(p),
      setNodes: l,
      setEdges: u,
      addNodes: (p) => {
        const m = Array.isArray(p) ? p : [p];
        n.nodeQueue.push((v) => [...v, ...m]);
      },
      addEdges: (p) => {
        const m = Array.isArray(p) ? p : [p];
        n.edgeQueue.push((v) => [...v, ...m]);
      },
      toObject: () => {
        const { nodes: p = [], edges: m = [], transform: v } = t.getState(), [E, y, w] = v;
        return {
          nodes: p.map((_) => ({ ..._ })),
          edges: m.map((_) => ({ ..._ })),
          viewport: {
            x: E,
            y,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: v, edges: E, onNodesDelete: y, onEdgesDelete: w, triggerNodeChanges: _, triggerEdgeChanges: C, onDelete: b, onBeforeDelete: N } = t.getState(), { nodes: P, edges: A } = await hj({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: E,
          onBeforeDelete: N
        }), I = A.length > 0, O = P.length > 0;
        if (I) {
          const D = A.map(K1);
          w == null || w(A), C(D);
        }
        if (O) {
          const D = P.map(K1);
          y == null || y(P), _(D);
        }
        return (O || I) && (b == null || b({ nodes: P, edges: A })), { deletedNodes: P, deletedEdges: A };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, v) => {
        const E = b1(p), y = E ? p : f(p), w = v !== void 0;
        return y ? (v || t.getState().nodes).filter((_) => {
          const C = t.getState().nodeLookup.get(_.id);
          if (C && !E && (_.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const b = fi(w ? _ : C), N = js(b, y);
          return m && N > 0 || N >= b.width * b.height || N >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = b1(p) ? p : f(p);
        if (!y)
          return !1;
        const w = js(y, m);
        return v && w > 0 || w >= m.width * m.height || w >= y.width * y.height;
      },
      updateNode: d,
      updateNodeData: (p, m, v = { replace: !1 }) => {
        d(p, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return v.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, v);
      },
      updateEdge: h,
      updateEdgeData: (p, m, v = { replace: !1 }) => {
        h(p, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return v.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, v);
      },
      getNodesBounds: (p) => {
        const { nodeLookup: m, nodeOrigin: v } = t.getState();
        return uj(p, { nodeLookup: m, nodeOrigin: v });
      },
      getHandleConnections: ({ type: p, id: m, nodeId: v }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${v}-${p}${m ? `-${m}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      getNodeConnections: ({ type: p, handleId: m, nodeId: v }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${v}${p ? m ? `-${p}-${m}` : `-${p}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      fitView: async (p) => {
        const m = t.getState().fitViewResolver ?? vj();
        return t.setState({ fitViewQueued: !0, fitViewOptions: p, fitViewResolver: m }), n.nodeQueue.push((v) => [...v]), m.promise;
      }
    };
  }, []);
  return k.useMemo(() => ({
    ...i,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const Z1 = (e) => e.selected, Wq = typeof window < "u" ? window : void 0;
function Uq({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = qy(), i = Fs(e, { actInsideInputWithModifier: !1 }), a = Fs(t, { target: Wq });
  k.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(Z1), edges: l.filter(Z1) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), k.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function Gq(e) {
  const t = He();
  k.useEffect(() => {
    const n = () => {
      var i, a, l, u;
      if (!e.current || !(((a = (i = e.current).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return !1;
      const o = My(e.current);
      (o.height === 0 || o.width === 0) && ((u = (l = t.getState()).onError) == null || u.call(l, "004", In.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const o = new ResizeObserver(() => n());
      return o.observe(e.current), () => {
        window.removeEventListener("resize", n), o && e.current && o.unobserve(e.current);
      };
    }
  }, []);
}
const Ru = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Yq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function Kq({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = oo.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: E, noWheelClassName: y, noPanClassName: w, onViewportChange: _, isControlledViewport: C, paneClickDistance: b, selectionOnDrag: N }) {
  const P = He(), A = k.useRef(null), { userSelectionActive: I, lib: O, connectionInProgress: D } = Ie(Yq, Qe), H = Fs(m), q = k.useRef();
  Gq(A);
  const B = k.useCallback((X) => {
    _ == null || _({ x: X[0], y: X[1], zoom: X[2] }), C || P.setState({ transform: X });
  }, [_, C]);
  return k.useEffect(() => {
    if (A.current) {
      q.current = Jj({
        domNode: A.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (V) => P.setState({ paneDragging: V }),
        onPanZoomStart: (V, Y) => {
          const { onViewportChangeStart: M, onMoveStart: z } = P.getState();
          z == null || z(V, Y), M == null || M(Y);
        },
        onPanZoom: (V, Y) => {
          const { onViewportChange: M, onMove: z } = P.getState();
          z == null || z(V, Y), M == null || M(Y);
        },
        onPanZoomEnd: (V, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: z } = P.getState();
          z == null || z(V, Y), M == null || M(Y);
        }
      });
      const { x: X, y: L, zoom: W } = q.current.getViewport();
      return P.setState({
        panZoom: q.current,
        transform: [X, L, W],
        domNode: A.current.closest(".react-flow")
      }), () => {
        var V;
        (V = q.current) == null || V.destroy();
      };
    }
  }, []), k.useEffect(() => {
    var X;
    (X = q.current) == null || X.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: o,
      panOnScrollSpeed: i,
      panOnScrollMode: a,
      zoomOnDoubleClick: l,
      panOnDrag: u,
      zoomActivationKeyPressed: H,
      preventScrolling: v,
      noPanClassName: w,
      userSelectionActive: I,
      noWheelClassName: y,
      lib: O,
      onTransformChange: B,
      connectionInProgress: D,
      selectionOnDrag: N,
      paneClickDistance: b
    });
  }, [
    e,
    t,
    n,
    o,
    i,
    a,
    l,
    u,
    H,
    v,
    w,
    I,
    y,
    O,
    B,
    D,
    N,
    b
  ]), R.jsx("div", { className: "react-flow__renderer", ref: A, style: Ru, children: E });
}
const Xq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Qq() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(Xq, Qe);
  return e && t ? R.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const yd = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, Zq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function Jq({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Ds.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: E }) {
  const y = He(), { userSelectionActive: w, elementsSelectable: _, dragging: C, connectionInProgress: b } = Ie(Zq, Qe), N = _ && (e || w), P = k.useRef(null), A = k.useRef(), I = k.useRef(/* @__PURE__ */ new Set()), O = k.useRef(/* @__PURE__ */ new Set()), D = k.useRef(!1), H = (M) => {
    if (D.current || b) {
      D.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, q = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, B = h ? (M) => h(M) : void 0, X = (M) => {
    D.current && (M.stopPropagation(), D.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: z } = y.getState();
    if (A.current = z == null ? void 0 : z.getBoundingClientRect(), !A.current)
      return;
    const Q = M.target === P.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), D.current = !1;
    const { x: ie, y: $ } = pn(M.nativeEvent, A.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ie,
        startY: $,
        x: ie,
        y: $
      }
    }), Q || (M.stopPropagation(), M.preventDefault());
  }, W = (M) => {
    const { userSelectionRect: z, transform: Q, nodeLookup: j, edgeLookup: U, connectionLookup: ie, triggerNodeChanges: $, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: K } = y.getState();
    if (!A.current || !z)
      return;
    const { x: te, y: se } = pn(M.nativeEvent, A.current), { startX: ae, startY: ce } = z;
    if (!D.current) {
      const Re = t ? 0 : i;
      if (Math.hypot(te - ae, se - ce) <= Re)
        return;
      K(), l == null || l(M);
    }
    D.current = !0;
    const de = {
      startX: ae,
      startY: ce,
      x: te < ae ? te : ae,
      y: se < ce ? se : ce,
      width: Math.abs(te - ae),
      height: Math.abs(se - ce)
    }, pe = I.current, be = O.current;
    I.current = new Set(Ay(j, de, Q, n === Ds.Partial, !0).map((Re) => Re.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Re of I.current) {
      const Ee = ie.get(Re);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = U.get(Je);
          Ue && (Ue.selectable ?? me) && O.current.add(Je);
        }
    }
    if (!S1(pe, I.current)) {
      const Re = ti(j, I.current, !0);
      $(Re);
    }
    if (!S1(be, O.current)) {
      const Re = ti(U, O.current);
      Z(Re);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, V = (M) => {
    var z, Q;
    M.button === 0 && ((Q = (z = M.target) == null ? void 0 : z.releasePointerCapture) == null || Q.call(z, M.pointerId), !w && M.target === P.current && y.getState().userSelectionRect && (H == null || H(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: I.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return R.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: N ? void 0 : yd(H, P), onContextMenu: yd(q, P), onWheel: yd(B, P), onPointerEnter: N ? void 0 : p, onPointerMove: N ? W : m, onPointerUp: N ? V : void 0, onPointerDownCapture: N ? L : void 0, onClickCapture: N ? X : void 0, onPointerLeave: v, ref: P, style: Ru, children: [E, R.jsx(Qq, {})] });
}
function ly({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
  const { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: l, nodeLookup: u, onError: f } = t.getState(), d = u.get(e);
  if (!d) {
    f == null || f("012", In.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), d.selected ? (n || d.selected && l) && (a({ nodes: [d], edges: [] }), requestAnimationFrame(() => {
    var h;
    return (h = o == null ? void 0 : o.current) == null ? void 0 : h.blur();
  })) : i([e]);
}
function qR({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = k.useState(!1), h = k.useRef();
  return k.useEffect(() => {
    h.current = zj({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        ly({
          id: p,
          store: u,
          nodeRef: e
        });
      },
      onDragStart: () => {
        d(!0);
      },
      onDragStop: () => {
        d(!1);
      }
    });
  }, []), k.useEffect(() => {
    var p, m;
    if (t)
      (p = h.current) == null || p.destroy();
    else if (e.current)
      return (m = h.current) == null || m.update({
        noDragClassName: n,
        handleSelector: o,
        domNode: e.current,
        isSelectable: a,
        nodeId: i,
        nodeClickDistance: l
      }), () => {
        var v;
        (v = h.current) == null || v.destroy();
      };
  }, [n, o, t, a, e, i]), f;
}
const e3 = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function zR() {
  const e = He();
  return k.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = e3(l), v = i ? a[0] : 5, E = i ? a[1] : 5, y = n.direction.x * v * n.factor, w = n.direction.y * E * n.factor;
    for (const [, _] of d) {
      if (!m(_))
        continue;
      let C = {
        x: _.internals.positionAbsolute.x + y,
        y: _.internals.positionAbsolute.y + w
      };
      i && (C = Qs(C, a));
      const { position: b, positionAbsolute: N } = rR({
        nodeId: _.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      _.position = b, _.internals.positionAbsolute = N, p.set(_.id, _);
    }
    f(p);
  }, []);
}
const zy = k.createContext(null), t3 = zy.Provider;
zy.Consumer;
const FR = () => k.useContext(zy), n3 = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), r3 = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === ui.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function o3({ type: e = "source", position: t = ye.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var W, V;
  const E = l || null, y = e === "target", w = He(), _ = FR(), { connectOnClick: C, noPanClassName: b, rfId: N } = Ie(n3, Qe), { connectingFrom: P, connectingTo: A, clickConnecting: I, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: H, valid: q } = Ie(r3(_, E, e), Qe);
  _ || (V = (W = w.getState()).onError) == null || V.call(W, "010", In.error010());
  const B = (Y) => {
    const { defaultEdgeOptions: M, onConnect: z, hasDefaultEdges: Q } = w.getState(), j = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: U, setEdges: ie } = w.getState();
      ie(gR(j, U));
    }
    z == null || z(j), u == null || u(j);
  }, X = (Y) => {
    if (!_)
      return;
    const M = fR(Y.nativeEvent);
    if (i && (M && Y.button === 0 || !M)) {
      const z = w.getState();
      ay.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: z.autoPanOnConnect,
        connectionMode: z.connectionMode,
        connectionRadius: z.connectionRadius,
        domNode: z.domNode,
        nodeLookup: z.nodeLookup,
        lib: z.lib,
        isTarget: y,
        handleId: E,
        nodeId: _,
        flowId: z.rfId,
        panBy: z.panBy,
        cancelConnection: z.cancelConnection,
        onConnectStart: z.onConnectStart,
        onConnectEnd: z.onConnectEnd,
        updateConnection: z.updateConnection,
        onConnect: B,
        isValidConnection: n || z.isValidConnection,
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: z.autoPanSpeed,
        dragThreshold: z.connectionDragThreshold
      });
    }
    M ? h == null || h(Y) : p == null || p(Y);
  }, L = (Y) => {
    const { onClickConnectStart: M, onClickConnectEnd: z, connectionClickStartHandle: Q, connectionMode: j, isValidConnection: U, lib: ie, rfId: $, nodeLookup: Z, connection: ee } = w.getState();
    if (!_ || !Q && !i)
      return;
    if (!Q) {
      M == null || M(Y.nativeEvent, { nodeId: _, handleId: E, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: _, type: e, id: E } });
      return;
    }
    const K = uR(Y.target), te = n || U, { connection: se, isValid: ae } = ay.isValid(Y.nativeEvent, {
      handle: {
        nodeId: _,
        id: E,
        type: e
      },
      connectionMode: j,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id || null,
      fromType: Q.type,
      isValidConnection: te,
      flowId: $,
      doc: K,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && B(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, z == null || z(Y, ce), w.setState({ connectionClickStartHandle: null });
  };
  return R.jsx("div", { "data-handleid": E, "data-nodeid": _, "data-handlepos": t, "data-id": `${N}-${_}-${E}-${e}`, className: nt([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    b,
    d,
    {
      source: !y,
      target: y,
      connectable: o,
      connectablestart: i,
      connectableend: a,
      clickconnecting: I,
      connectingfrom: P,
      connectingto: A,
      valid: q,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || O) && (D || H ? a : i)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: v, ...m, children: f });
}
const $s = k.memo(DR(o3));
function i3({ data: e, isConnectable: t, sourcePosition: n = ye.Bottom }) {
  return R.jsxs(R.Fragment, { children: [e == null ? void 0 : e.label, R.jsx($s, { type: "source", position: n, isConnectable: t })] });
}
function s3({ data: e, isConnectable: t, targetPosition: n = ye.Top, sourcePosition: o = ye.Bottom }) {
  return R.jsxs(R.Fragment, { children: [R.jsx($s, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, R.jsx($s, { type: "source", position: o, isConnectable: t })] });
}
function a3() {
  return null;
}
function l3({ data: e, isConnectable: t, targetPosition: n = ye.Top }) {
  return R.jsxs(R.Fragment, { children: [R.jsx($s, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const su = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, J1 = {
  input: i3,
  default: s3,
  output: l3,
  group: a3
};
function u3(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const c3 = (e) => {
  const { width: t, height: n, x: o, y: i } = Xs(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function f3({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Ie(c3, Qe), f = zR(), d = k.useRef(null);
  if (k.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), qR({
    nodeRef: d
  }), u || !i || !a)
    return null;
  const h = e ? (m) => {
    const v = o.getState().nodes.filter((E) => E.selected);
    e(m, v);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(su, m.key) && (m.preventDefault(), f({
      direction: su[m.key],
      factor: m.shiftKey ? 4 : 1
    }));
  };
  return R.jsx("div", { className: nt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: l
  }, children: R.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : p, style: {
    width: i,
    height: a
  } }) });
}
const e_ = typeof window < "u" ? window : void 0, d3 = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function $R({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: w, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: N, panOnScrollSpeed: P, panOnScrollMode: A, zoomOnDoubleClick: I, panOnDrag: O, defaultViewport: D, translateExtent: H, minZoom: q, maxZoom: B, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: W, noPanClassName: V, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: z }) {
  const { nodesSelectionActive: Q, userSelectionActive: j } = Ie(d3), U = Fs(d, { target: e_ }), ie = Fs(y, { target: e_ }), $ = ie || O, Z = ie || N, ee = h && $ !== !0, K = U || j || ee;
  return Uq({ deleteKeyCode: f, multiSelectionKeyCode: E }), R.jsx(Kq, { onPaneContextMenu: a, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: A, zoomOnDoubleClick: I, panOnDrag: !U && $, defaultViewport: D, translateExtent: H, minZoom: q, maxZoom: B, zoomActivationKeyCode: w, preventScrolling: X, noWheelClassName: W, noPanClassName: V, onViewportChange: M, isControlledViewport: z, paneClickDistance: u, selectionOnDrag: ee, children: R.jsxs(Jq, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: $, isSelecting: !!K, selectionMode: p, selectionKeyPressed: U, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && R.jsx(f3, { onSelectionContextMenu: L, noPanClassName: V, disableKeyboardA11y: Y })] }) });
}
$R.displayName = "FlowRenderer";
const h3 = k.memo($R), p3 = (e) => (t) => e ? Ay(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function g3(e) {
  return Ie(k.useCallback(p3(e), [e]), Qe);
}
const m3 = (e) => e.updateNodeInternals;
function v3() {
  const e = Ie(m3), [t] = k.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const o = /* @__PURE__ */ new Map();
    n.forEach((i) => {
      const a = i.target.getAttribute("data-id");
      o.set(a, {
        id: a,
        nodeElement: i.target,
        force: !0
      });
    }), e(o);
  }));
  return k.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function y3({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
  const i = He(), a = k.useRef(null), l = k.useRef(null), u = k.useRef(e.sourcePosition), f = k.useRef(e.targetPosition), d = k.useRef(t), h = n && !!e.internals.handleBounds;
  return k.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), k.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), k.useEffect(() => {
    if (a.current) {
      const p = d.current !== t, m = u.current !== e.sourcePosition, v = f.current !== e.targetPosition;
      (p || m || v) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function x3({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: E, rfId: y, nodeTypes: w, nodeClickDistance: _, onError: C }) {
  const { node: b, internals: N, isParent: P } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let A = b.type || "default", I = (w == null ? void 0 : w[A]) || J1[A];
  I === void 0 && (C == null || C("003", In.error003(A)), A = "default", I = (w == null ? void 0 : w.default) || J1.default);
  const O = !!(b.draggable || u && typeof b.draggable > "u"), D = !!(b.selectable || f && typeof b.selectable > "u"), H = !!(b.connectable || d && typeof b.connectable > "u"), q = !!(b.focusable || h && typeof b.focusable > "u"), B = He(), X = aR(b), L = y3({ node: b, nodeType: A, hasDimensions: X, resizeObserver: p }), W = qR({
    nodeRef: L,
    disabled: b.hidden || !O,
    noDragClassName: m,
    handleSelector: b.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: _
  }), V = zR();
  if (b.hidden)
    return null;
  const Y = Jn(b), M = u3(b), z = D || O || t || n || o || i, Q = n ? (te) => n(te, { ...N.userNode }) : void 0, j = o ? (te) => o(te, { ...N.userNode }) : void 0, U = i ? (te) => i(te, { ...N.userNode }) : void 0, ie = a ? (te) => a(te, { ...N.userNode }) : void 0, $ = l ? (te) => l(te, { ...N.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = B.getState();
    D && (!se || !O || ae > 0) && ly({
      id: e,
      store: B,
      nodeRef: L
    }), t && t(te, { ...N.userNode });
  }, ee = (te) => {
    if (!(cR(te.nativeEvent) || E)) {
      if (ZN.includes(te.key) && D) {
        const se = te.key === "Escape";
        ly({
          id: e,
          store: B,
          unselect: se,
          nodeRef: L
        });
      } else if (O && b.selected && Object.prototype.hasOwnProperty.call(su, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = B.getState();
        B.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~N.positionAbsolute.x,
            y: ~~N.positionAbsolute.y
          })
        }), V({
          direction: su[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, K = () => {
    var be;
    if (E || !((be = L.current) != null && be.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = B.getState();
    if (!ce)
      return;
    Ay(/* @__PURE__ */ new Map([[e, b]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(b.position.x + Y.width / 2, b.position.y + Y.height / 2, {
      zoom: te[2]
    });
  };
  return R.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${A}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [v]: O
    },
    b.className,
    {
      selected: b.selected,
      selectable: D,
      parent: P,
      draggable: O,
      dragging: W
    }
  ]), ref: L, style: {
    zIndex: N.z,
    transform: `translate(${N.positionAbsolute.x}px,${N.positionAbsolute.y}px)`,
    pointerEvents: z ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ...b.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: j, onMouseLeave: U, onContextMenu: ie, onClick: Z, onDoubleClick: $, onKeyDown: q ? ee : void 0, tabIndex: q ? 0 : void 0, onFocus: q ? K : void 0, role: b.ariaRole ?? (q ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${TR}-${y}`, "aria-label": b.ariaLabel, ...b.domAttributes, children: R.jsx(t3, { value: e, children: R.jsx(I, { id: e, data: b.data, type: A, positionAbsoluteX: N.positionAbsolute.x, positionAbsoluteY: N.positionAbsolute.y, selected: b.selected ?? !1, selectable: D, draggable: O, deletable: b.deletable ?? !0, isConnectable: H, sourcePosition: b.sourcePosition, targetPosition: b.targetPosition, dragging: W, dragHandle: b.dragHandle, zIndex: N.z, parentId: b.parentId, ...Y }) }) });
}
var w3 = k.memo(x3);
const _3 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function BR(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Ie(_3, Qe), l = g3(e.onlyRenderVisibleElements), u = v3();
  return R.jsx("div", { className: "react-flow__nodes", style: Ru, children: l.map((f) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    R.jsx(w3, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
BR.displayName = "NodeRenderer";
const b3 = k.memo(BR);
function S3(e) {
  return Ie(k.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && _j({
          sourceNode: a,
          targetNode: l,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && o.push(i.id);
      }
    return o;
  }, [e]), Qe);
}
const E3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return R.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, C3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return R.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, t_ = {
  [ru.Arrow]: E3,
  [ru.ArrowClosed]: C3
};
function k3(e) {
  const t = He();
  return k.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(t_, e) ? t_[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", In.error009(e)), null);
  }, [e]);
}
const N3 = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = k3(t);
  return f ? R.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: R.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, VR = ({ defaultColor: e, rfId: t }) => {
  const n = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), i = k.useMemo(() => Rj(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? R.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: R.jsx("defs", { children: i.map((a) => R.jsx(N3, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
VR.displayName = "MarkerDefinitions";
var R3 = k.memo(VR);
function HR({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [p, m] = k.useState({ x: 1, y: 0, width: 0, height: 0 }), v = nt(["react-flow__edge-textwrapper", d]), E = k.useRef(null);
  return k.useEffect(() => {
    if (E.current) {
      const y = E.current.getBBox();
      m({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [n]), n ? R.jsxs("g", { transform: `translate(${e - p.width / 2} ${t - p.height / 2})`, className: v, visibility: p.width ? "visible" : "hidden", ...h, children: [i && R.jsx("rect", { width: p.width + 2 * l[0], x: -l[0], y: -l[1], height: p.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), R.jsx("text", { className: "react-flow__edge-text", y: p.height / 2, dy: "0.3em", ref: E, style: o, children: n }), f] }) : null;
}
HR.displayName = "EdgeText";
const P3 = k.memo(HR);
function Pu({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return R.jsxs(R.Fragment, { children: [R.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? R.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(n) ? R.jsx(P3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function n_({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function WR({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top }) {
  const [l, u] = n_({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = n_({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = dR({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: i,
    sourceControlX: l,
    sourceControlY: u,
    targetControlX: f,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${u} ${f},${d} ${o},${i}`,
    h,
    p,
    m,
    v
  ];
}
function UR(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: _ }) => {
    const [C, b, N] = WR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return R.jsx(Pu, { id: P, path: C, labelX: b, labelY: N, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: _ });
  });
}
const T3 = UR({ isInternal: !1 }), GR = UR({ isInternal: !0 });
T3.displayName = "SimpleBezierEdge";
GR.displayName = "SimpleBezierEdgeInternal";
function YR(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = ye.Bottom, targetPosition: E = ye.Top, markerEnd: y, markerStart: w, pathOptions: _, interactionWidth: C }) => {
    const [b, N, P] = oy({
      sourceX: n,
      sourceY: o,
      sourcePosition: v,
      targetX: i,
      targetY: a,
      targetPosition: E,
      borderRadius: _ == null ? void 0 : _.borderRadius,
      offset: _ == null ? void 0 : _.offset,
      stepPosition: _ == null ? void 0 : _.stepPosition
    }), A = e.isInternal ? void 0 : t;
    return R.jsx(Pu, { id: A, path: b, labelX: N, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: w, interactionWidth: C });
  });
}
const KR = YR({ isInternal: !1 }), XR = YR({ isInternal: !0 });
KR.displayName = "SmoothStepEdge";
XR.displayName = "SmoothStepEdgeInternal";
function QR(e) {
  return k.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return R.jsx(KR, { ...n, id: o, pathOptions: k.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const A3 = QR({ isInternal: !1 }), ZR = QR({ isInternal: !0 });
A3.displayName = "StepEdge";
ZR.displayName = "StepEdgeInternal";
function JR(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y }) => {
    const [w, _, C] = mR({ sourceX: n, sourceY: o, targetX: i, targetY: a }), b = e.isInternal ? void 0 : t;
    return R.jsx(Pu, { id: b, path: w, labelX: _, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y });
  });
}
const I3 = JR({ isInternal: !1 }), eP = JR({ isInternal: !0 });
I3.displayName = "StraightEdge";
eP.displayName = "StraightEdgeInternal";
function tP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, pathOptions: _, interactionWidth: C }) => {
    const [b, N, P] = hR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: _ == null ? void 0 : _.curvature
    }), A = e.isInternal ? void 0 : t;
    return R.jsx(Pu, { id: A, path: b, labelX: N, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: C });
  });
}
const M3 = tP({ isInternal: !1 }), nP = tP({ isInternal: !0 });
M3.displayName = "BezierEdge";
nP.displayName = "BezierEdgeInternal";
const r_ = {
  default: nP,
  straight: eP,
  step: ZR,
  smoothstep: XR,
  simplebezier: GR
}, o_ = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, O3 = (e, t, n) => n === ye.Left ? e - t : n === ye.Right ? e + t : e, L3 = (e, t, n) => n === ye.Top ? e - t : n === ye.Bottom ? e + t : e, i_ = "react-flow__edgeupdater";
function s_({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return R.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([i_, `${i_}-${u}`]), cx: O3(t, o, e), cy: L3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function D3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const E = He(), y = (N, P) => {
    if (N.button !== 0)
      return;
    const { autoPanOnConnect: A, domNode: I, isValidConnection: O, connectionMode: D, connectionRadius: H, lib: q, onConnectStart: B, onConnectEnd: X, cancelConnection: L, nodeLookup: W, rfId: V, panBy: Y, updateConnection: M } = E.getState(), z = P.type === "target", Q = (ie, $) => {
      m(!1), p == null || p(ie, n, P.type, $);
    }, j = (ie) => d == null ? void 0 : d(n, ie), U = (ie, $) => {
      m(!0), h == null || h(N, n, P.type), B == null || B(ie, $);
    };
    ay.onPointerDown(N.nativeEvent, {
      autoPanOnConnect: A,
      connectionMode: D,
      connectionRadius: H,
      domNode: I,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: W,
      isTarget: z,
      edgeUpdaterType: P.type,
      lib: q,
      flowId: V,
      cancelConnection: L,
      panBy: Y,
      isValidConnection: O,
      onConnect: j,
      onConnectStart: U,
      onConnectEnd: X,
      onReconnectEnd: Q,
      updateConnection: M,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: N.currentTarget
    });
  }, w = (N) => y(N, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), _ = (N) => y(N, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => v(!0), b = () => v(!1);
  return R.jsxs(R.Fragment, { children: [(e === !0 || e === "source") && R.jsx(s_, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: w, onMouseEnter: C, onMouseOut: b, type: "source" }), (e === !0 || e === "target") && R.jsx(s_, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: _, onMouseEnter: C, onMouseOut: b, type: "target" })] });
}
function j3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: E, edgeTypes: y, noPanClassName: w, onError: _, disableKeyboardA11y: C }) {
  let b = Ie((de) => de.edgeLookup.get(e));
  const N = Ie((de) => de.defaultEdgeOptions);
  b = N ? { ...N, ...b } : b;
  let P = b.type || "default", A = (y == null ? void 0 : y[P]) || r_[P];
  A === void 0 && (_ == null || _("011", In.error011(P)), P = "default", A = (y == null ? void 0 : y.default) || r_.default);
  const I = !!(b.focusable || t && typeof b.focusable > "u"), O = typeof p < "u" && (b.reconnectable || n && typeof b.reconnectable > "u"), D = !!(b.selectable || o && typeof b.selectable > "u"), H = k.useRef(null), [q, B] = k.useState(!1), [X, L] = k.useState(!1), W = He(), { zIndex: V, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: U } = Ie(k.useCallback((de) => {
    const pe = de.nodeLookup.get(b.source), be = de.nodeLookup.get(b.target);
    if (!pe || !be)
      return {
        zIndex: b.zIndex,
        ...o_
      };
    const me = Nj({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: b.sourceHandle || null,
      targetHandle: b.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: _
    });
    return {
      zIndex: wj({
        selected: b.selected,
        zIndex: b.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || o_
    };
  }, [b.source, b.target, b.sourceHandle, b.targetHandle, b.selected, b.zIndex]), Qe), ie = k.useMemo(() => b.markerStart ? `url('#${iy(b.markerStart, E)}')` : void 0, [b.markerStart, E]), $ = k.useMemo(() => b.markerEnd ? `url('#${iy(b.markerEnd, E)}')` : void 0, [b.markerEnd, E]);
  if (b.hidden || Y === null || M === null || z === null || Q === null)
    return null;
  const Z = (de) => {
    var Re;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: me } = W.getState();
    D && (W.setState({ nodesSelectionActive: !1 }), b.selected && me ? (be({ nodes: [], edges: [b] }), (Re = H.current) == null || Re.blur()) : pe([e])), i && i(de, b);
  }, ee = a ? (de) => {
    a(de, { ...b });
  } : void 0, K = l ? (de) => {
    l(de, { ...b });
  } : void 0, te = u ? (de) => {
    u(de, { ...b });
  } : void 0, se = f ? (de) => {
    f(de, { ...b });
  } : void 0, ae = d ? (de) => {
    d(de, { ...b });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && ZN.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: me } = W.getState();
      de.key === "Escape" ? ((pe = H.current) == null || pe.blur(), be({ edges: [b] })) : me([e]);
    }
  };
  return R.jsx("svg", { style: { zIndex: V }, children: R.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${P}`,
    b.className,
    w,
    {
      selected: b.selected,
      animated: b.animated,
      inactive: !D && !i,
      updating: q,
      selectable: D
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: I ? ce : void 0, tabIndex: I ? 0 : void 0, role: b.ariaRole ?? (I ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": b.ariaLabel === null ? void 0 : b.ariaLabel || `Edge from ${b.source} to ${b.target}`, "aria-describedby": I ? `${AR}-${E}` : void 0, ref: H, ...b.domAttributes, children: [!X && R.jsx(A, { id: e, source: b.source, target: b.target, type: b.type, selected: b.selected, animated: b.animated, selectable: D, deletable: b.deletable ?? !0, label: b.label, labelStyle: b.labelStyle, labelShowBg: b.labelShowBg, labelBgStyle: b.labelBgStyle, labelBgPadding: b.labelBgPadding, labelBgBorderRadius: b.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: U, data: b.data, style: b.style, sourceHandleId: b.sourceHandle, targetHandleId: b.targetHandle, markerStart: ie, markerEnd: $, pathOptions: "pathOptions" in b ? b.pathOptions : void 0, interactionWidth: b.interactionWidth }), O && R.jsx(D3, { edge: b, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: U, setUpdateHover: B, setReconnecting: L })] }) });
}
var q3 = k.memo(j3);
const z3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function rP({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: w, edgesReconnectable: _, elementsSelectable: C, onError: b } = Ie(z3, Qe), N = S3(t);
  return R.jsxs("div", { className: "react-flow__edges", children: [R.jsx(R3, { defaultColor: e, rfId: n }), N.map((P) => R.jsx(q3, { id: P, edgesFocusable: w, edgesReconnectable: _, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, rfId: n, onError: b, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
rP.displayName = "EdgeRenderer";
const F3 = k.memo(rP), $3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function B3({ children: e }) {
  const t = Ie($3);
  return R.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function V3(e) {
  const t = qy(), n = k.useRef(!1);
  k.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const H3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function W3(e) {
  const t = Ie(H3), n = He();
  return k.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function U3(e) {
  return e.connection.inProgress ? { ...e.connection, to: Zs(e.connection.to, e.transform) } : { ...e.connection };
}
function G3(e) {
  return U3;
}
function Y3(e) {
  const t = G3();
  return Ie(t, Qe);
}
const K3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function X3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Ie(K3, Qe);
  return !(a && i && f) ? null : R.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: R.jsx("g", { className: nt(["react-flow__connection", tR(u)]), children: R.jsx(oP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const oP = ({ style: e, type: t = Rr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = Y3();
  if (!i)
    return;
  if (n)
    return R.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: tR(o), toNode: h, toHandle: p, pointer: v });
  let E = "";
  const y = {
    sourceX: a.x,
    sourceY: a.y,
    sourcePosition: f,
    targetX: d.x,
    targetY: d.y,
    targetPosition: m
  };
  switch (t) {
    case Rr.Bezier:
      [E] = hR(y);
      break;
    case Rr.SimpleBezier:
      [E] = WR(y);
      break;
    case Rr.Step:
      [E] = oy({
        ...y,
        borderRadius: 0
      });
      break;
    case Rr.SmoothStep:
      [E] = oy(y);
      break;
    default:
      [E] = mR(y);
  }
  return R.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
oP.displayName = "ConnectionLine";
const Q3 = {};
function a_(e = Q3) {
  k.useRef(e), He(), k.useEffect(() => {
  }, [e]);
}
function Z3() {
  He(), k.useRef(!1), k.useEffect(() => {
  }, []);
}
function iP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: w, connectionLineContainerStyle: _, selectionKeyCode: C, selectionOnDrag: b, selectionMode: N, multiSelectionKeyCode: P, panActivationKeyCode: A, zoomActivationKeyCode: I, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: H, defaultViewport: q, translateExtent: B, minZoom: X, maxZoom: L, preventScrolling: W, defaultMarkerColor: V, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: j, zoomOnDoubleClick: U, panOnDrag: ie, onPaneClick: $, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: tn, rfId: $t, viewport: nn, onViewportChange: Bt }) {
  return a_(e), a_(t), Z3(), V3(n), W3(nn), R.jsx(h3, { onPaneClick: $, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: b, selectionMode: N, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: A, zoomActivationKeyCode: I, elementsSelectable: H, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: U, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: j, panOnDrag: ie, defaultViewport: q, translateExtent: B, minZoom: X, maxZoom: L, onSelectionContextMenu: p, preventScrolling: W, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Bt, isControlledViewport: !!nn, children: R.jsxs(B3, { children: [R.jsx(F3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, defaultMarkerColor: V, noPanClassName: at, disableKeyboardA11y: Ge, rfId: $t }), R.jsx(X3, { style: y, type: E, component: w, containerStyle: _ }), R.jsx("div", { className: "react-flow__edgelabel-renderer" }), R.jsx(b3, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: Ge, nodeExtent: tn, rfId: $t }), R.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
iP.displayName = "GraphView";
const J3 = k.memo(iP), l_ = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = o ?? t ?? [], _ = n ?? e ?? [], C = h ?? [0, 0], b = p ?? Ls;
  xR(E, y, w);
  const N = sy(_, m, v, {
    nodeOrigin: C,
    nodeExtent: b,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const A = Xs(m, {
      filter: (H) => !!((H.width || H.initialWidth) && (H.height || H.initialHeight))
    }), { x: I, y: O, zoom: D } = Iy(A, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    P = [I, O, D];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: a ?? 0,
    transform: P,
    nodes: _,
    nodesInitialized: N,
    nodeLookup: m,
    parentLookup: v,
    edges: w,
    edgeLookup: y,
    connectionLookup: E,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: o !== void 0,
    panZoom: null,
    minZoom: f,
    maxZoom: d,
    translateExtent: Ls,
    nodeExtent: b,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: ui.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: C,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !1,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: l ?? !1,
    fitViewOptions: u,
    fitViewResolver: null,
    connection: { ...eR },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: pj,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: JN
  };
}, ez = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => vq((m, v) => {
  async function E() {
    const { nodeLookup: y, panZoom: w, fitViewOptions: _, fitViewResolver: C, width: b, height: N, minZoom: P, maxZoom: A } = v();
    w && (await dj({
      nodes: y,
      width: b,
      height: N,
      panZoom: w,
      minZoom: P,
      maxZoom: A
    }, _), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...l_({
      nodes: e,
      edges: t,
      width: i,
      height: a,
      fitView: l,
      fitViewOptions: u,
      minZoom: f,
      maxZoom: d,
      nodeOrigin: h,
      nodeExtent: p,
      defaultNodes: n,
      defaultEdges: o
    }),
    setNodes: (y) => {
      const { nodeLookup: w, parentLookup: _, nodeOrigin: C, elevateNodesOnSelect: b, fitViewQueued: N } = v(), P = sy(y, w, _, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: b,
        checkEquality: !0
      });
      N && P ? (E(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: w, edgeLookup: _ } = v();
      xR(w, _, y), m({ edges: y });
    },
    setDefaultNodesAndEdges: (y, w) => {
      if (y) {
        const { setNodes: _ } = v();
        _(y), m({ hasDefaultNodes: !0 });
      }
      if (w) {
        const { setEdges: _ } = v();
        _(w), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: w, nodeLookup: _, parentLookup: C, domNode: b, nodeOrigin: N, nodeExtent: P, debug: A, fitViewQueued: I } = v(), { changes: O, updatedInternals: D } = Lj(y, _, C, b, N, P);
      D && (Aj(_, C, { nodeOrigin: N, nodeExtent: P }), I ? (E(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (A && console.log("React Flow: trigger node changes", O), w == null || w(O)));
    },
    updateNodePositions: (y, w = !1) => {
      const _ = [], C = [], { nodeLookup: b, triggerNodeChanges: N } = v();
      for (const [P, A] of y) {
        const I = b.get(P), O = !!(I != null && I.expandParent && (I != null && I.parentId) && (A != null && A.position)), D = {
          id: P,
          type: "position",
          position: O ? {
            x: Math.max(0, A.position.x),
            y: Math.max(0, A.position.y)
          } : A.position,
          dragging: w
        };
        O && I.parentId && _.push({
          id: P,
          parentId: I.parentId,
          rect: {
            ...A.internals.positionAbsolute,
            width: A.measured.width ?? 0,
            height: A.measured.height ?? 0
          }
        }), C.push(D);
      }
      if (_.length > 0) {
        const { parentLookup: P, nodeOrigin: A } = v(), I = jy(_, b, P, A);
        C.push(...I);
      }
      N(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: w, setNodes: _, nodes: C, hasDefaultNodes: b, debug: N } = v();
      if (y != null && y.length) {
        if (b) {
          const P = OR(y, C);
          _(P);
        }
        N && console.log("React Flow: trigger node changes", y), w == null || w(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: w, setEdges: _, edges: C, hasDefaultEdges: b, debug: N } = v();
      if (y != null && y.length) {
        if (b) {
          const P = LR(y, C);
          _(P);
        }
        N && console.log("React Flow: trigger edge changes", y), w == null || w(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: w, edgeLookup: _, nodeLookup: C, triggerNodeChanges: b, triggerEdgeChanges: N } = v();
      if (w) {
        const P = y.map((A) => to(A, !0));
        b(P);
        return;
      }
      b(ti(C, /* @__PURE__ */ new Set([...y]), !0)), N(ti(_));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: w, edgeLookup: _, nodeLookup: C, triggerNodeChanges: b, triggerEdgeChanges: N } = v();
      if (w) {
        const P = y.map((A) => to(A, !0));
        N(P);
        return;
      }
      N(ti(_, /* @__PURE__ */ new Set([...y]))), b(ti(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: w } = {}) => {
      const { edges: _, nodes: C, nodeLookup: b, triggerNodeChanges: N, triggerEdgeChanges: P } = v(), A = y || C, I = w || _, O = A.map((H) => {
        const q = b.get(H.id);
        return q && (q.selected = !1), to(H.id, !1);
      }), D = I.map((H) => to(H.id, !1));
      N(O), P(D);
    },
    setMinZoom: (y) => {
      const { panZoom: w, maxZoom: _ } = v();
      w == null || w.setScaleExtent([y, _]), m({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: w, minZoom: _ } = v();
      w == null || w.setScaleExtent([_, y]), m({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var w;
      (w = v().panZoom) == null || w.setTranslateExtent(y), m({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: w, triggerNodeChanges: _, triggerEdgeChanges: C, elementsSelectable: b } = v();
      if (!b)
        return;
      const N = w.reduce((A, I) => I.selected ? [...A, to(I.id, !1)] : A, []), P = y.reduce((A, I) => I.selected ? [...A, to(I.id, !1)] : A, []);
      _(N), C(P);
    },
    setNodeExtent: (y) => {
      const { nodes: w, nodeLookup: _, parentLookup: C, nodeOrigin: b, elevateNodesOnSelect: N, nodeExtent: P } = v();
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (sy(w, _, C, {
        nodeOrigin: b,
        nodeExtent: y,
        elevateNodesOnSelect: N,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: w, width: _, height: C, panZoom: b, translateExtent: N } = v();
      return Dj({ delta: y, panZoom: b, transform: w, translateExtent: N, width: _, height: C });
    },
    setCenter: async (y, w, _) => {
      const { width: C, height: b, maxZoom: N, panZoom: P } = v();
      if (!P)
        return Promise.resolve(!1);
      const A = typeof (_ == null ? void 0 : _.zoom) < "u" ? _.zoom : N;
      return await P.setViewport({
        x: C / 2 - y * A,
        y: b / 2 - w * A,
        zoom: A
      }, { duration: _ == null ? void 0 : _.duration, ease: _ == null ? void 0 : _.ease, interpolate: _ == null ? void 0 : _.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...eR }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...l_() })
  };
}, Object.is);
function sP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = k.useState(() => ez({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: o,
    width: i,
    height: a,
    fitView: d,
    minZoom: l,
    maxZoom: u,
    fitViewOptions: f,
    nodeOrigin: h,
    nodeExtent: p
  }));
  return R.jsx(xq, { value: v, children: R.jsx(Bq, { children: m }) });
}
function tz({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return k.useContext(Nu) ? R.jsx(R.Fragment, { children: e }) : R.jsx(sP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const nz = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function rz({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: w, onClickConnectEnd: _, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: N, onNodeContextMenu: P, onNodeDoubleClick: A, onNodeDragStart: I, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: H, onEdgesDelete: q, onDelete: B, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: W, onSelectionDragStop: V, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onBeforeDelete: Q, connectionMode: j, connectionLineType: U = Rr.Bezier, connectionLineStyle: ie, connectionLineComponent: $, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = Ds.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = qs() ? "Meta" : "Control", zoomActivationKeyCode: de = qs() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Re, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, nodeOrigin: ht = IR, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: tn = !0, defaultViewport: $t = Iq, minZoom: nn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Ls, preventScrolling: Dr = !0, nodeExtent: Vt, defaultMarkerColor: qn = "#b1b1b7", zoomOnScroll: wo = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: uc = 0.5, panOnScrollMode: Pi = oo.Free, zoomOnDoubleClick: Ti = !0, panOnDrag: Ai = !0, onPaneClick: Ii, onPaneMouseEnter: Mi, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: la, onPaneContextMenu: ua, paneClickDistance: ca = 1, nodeClickDistance: fa = 0, children: da, onReconnect: Oi, onReconnectStart: ha, onReconnectEnd: jr, onEdgeContextMenu: Li, onEdgeDoubleClick: qr, onEdgeMouseEnter: cc, onEdgeMouseMove: zr, onEdgeMouseLeave: _o, reconnectRadius: bo = 10, onNodesChange: Di, onEdgesChange: fc, noDragClassName: dc = "nodrag", noWheelClassName: hc = "nowheel", noPanClassName: _n = "nopan", fitView: ji, fitViewOptions: qi, connectOnClick: pc, attributionPosition: pa, proOptions: ga, defaultEdgeOptions: ma, elevateNodesOnSelect: va, elevateEdgesOnSelect: gc, disableKeyboardA11y: ya = !1, autoPanOnConnect: Ye, autoPanOnNodeDrag: mc, autoPanSpeed: zi, connectionRadius: xa, isValidConnection: So, onError: vc, style: wa, id: Fr, nodeDragThreshold: Wt, connectionDragThreshold: yc, viewport: At, onViewportChange: xc, width: wc, height: _c, colorMode: Eo = "light", debug: Co, onScroll: bn, ariaLabelConfig: ko, ...bc }, Sc) {
  const $r = Fr || "1", _a = Dq(Eo), Fi = k.useCallback((or) => {
    or.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), bn == null || bn(or);
  }, [bn]);
  return R.jsx("div", { "data-testid": "rf__wrapper", ...bc, onScroll: Fi, style: { ...wa, ...nz }, ref: Sc, className: nt(["react-flow", i, _a]), id: Fr, role: "application", children: R.jsxs(tz, { nodes: e, edges: t, width: wc, height: _c, fitView: ji, fitViewOptions: qi, minZoom: nn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [R.jsx(J3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: N, onNodeContextMenu: P, onNodeDoubleClick: A, nodeTypes: a, edgeTypes: l, connectionLineType: U, connectionLineStyle: ie, connectionLineComponent: $, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: $t, translateExtent: _t, minZoom: nn, maxZoom: Bt, preventScrolling: Dr, zoomOnScroll: wo, zoomOnPinch: Tt, zoomOnDoubleClick: Ti, panOnScroll: Ht, panOnScrollSpeed: uc, panOnScrollMode: Pi, panOnDrag: Ai, onPaneClick: Ii, onPaneMouseEnter: Mi, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: la, onPaneContextMenu: ua, paneClickDistance: ca, nodeClickDistance: fa, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onReconnect: Oi, onReconnectStart: ha, onReconnectEnd: jr, onEdgeContextMenu: Li, onEdgeDoubleClick: qr, onEdgeMouseEnter: cc, onEdgeMouseMove: zr, onEdgeMouseLeave: _o, reconnectRadius: bo, defaultMarkerColor: qn, noDragClassName: dc, noWheelClassName: hc, noPanClassName: _n, rfId: $r, disableKeyboardA11y: ya, nodeExtent: Vt, viewport: At, onViewportChange: xc }), R.jsx(Lq, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: w, onClickConnectEnd: _, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: tn, elevateNodesOnSelect: va, elevateEdgesOnSelect: gc, minZoom: nn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Di, onEdgesChange: fc, snapToGrid: pe, snapGrid: be, connectionMode: j, translateExtent: _t, connectOnClick: pc, defaultEdgeOptions: ma, fitView: ji, fitViewOptions: qi, onNodesDelete: H, onEdgesDelete: q, onDelete: B, onNodeDragStart: I, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: W, onSelectionDragStart: L, onSelectionDragStop: V, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: _n, nodeOrigin: ht, rfId: $r, autoPanOnConnect: Ye, autoPanOnNodeDrag: mc, autoPanSpeed: zi, onError: vc, connectionRadius: xa, isValidConnection: So, selectNodesOnDrag: Re, nodeDragThreshold: Wt, connectionDragThreshold: yc, onBeforeDelete: Q, debug: Co, ariaLabelConfig: ko }), R.jsx(Aq, { onSelectionChange: X }), da, R.jsx(kq, { proOptions: ga, position: pa }), R.jsx(Cq, { rfId: $r, disableKeyboardA11y: ya })] }) });
}
var oz = DR(rz);
function iz({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return R.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function sz({ radius: e, className: t }) {
  return R.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Pr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Pr || (Pr = {}));
const az = {
  [Pr.Dots]: 1,
  [Pr.Lines]: 1,
  [Pr.Cross]: 6
}, lz = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function aP({
  id: e,
  variant: t = Pr.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: o,
  lineWidth: i = 1,
  offset: a = 0,
  color: l,
  bgColor: u,
  style: f,
  className: d,
  patternClassName: h
}) {
  const p = k.useRef(null), { transform: m, patternId: v } = Ie(lz, Qe), E = o || az[t], y = t === Pr.Dots, w = t === Pr.Cross, _ = Array.isArray(n) ? n : [n, n], C = [_[0] * m[2] || 1, _[1] * m[2] || 1], b = E * m[2], N = Array.isArray(a) ? a : [a, a], P = w ? [b, b] : C, A = [
    N[0] * m[2] || 1 + P[0] / 2,
    N[1] * m[2] || 1 + P[1] / 2
  ], I = `${v}${e || ""}`;
  return R.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...Ru,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [R.jsx("pattern", { id: I, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${A[0]},-${A[1]})`, children: y ? R.jsx(sz, { radius: b / 2, className: h }) : R.jsx(iz, { dimensions: P, lineWidth: i, variant: t, className: h }) }), R.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${I})` })] });
}
aP.displayName = "Background";
const uz = k.memo(aP);
function cz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: R.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function fz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: R.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function dz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: R.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function hz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function pz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Ml({ children: e, className: t, ...n }) {
  return R.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const gz = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function lP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const E = He(), { isInteractive: y, minZoomReached: w, maxZoomReached: _, ariaLabelConfig: C } = Ie(gz, Qe), { zoomIn: b, zoomOut: N, fitView: P } = qy(), A = () => {
    b(), a == null || a();
  }, I = () => {
    N(), l == null || l();
  }, O = () => {
    P(i), u == null || u();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, H = m === "horizontal" ? "horizontal" : "vertical";
  return R.jsxs(ea, { className: nt(["react-flow__controls", H, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && R.jsxs(R.Fragment, { children: [R.jsx(Ml, { onClick: A, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: _, children: R.jsx(cz, {}) }), R.jsx(Ml, { onClick: I, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: w, children: R.jsx(fz, {}) })] }), n && R.jsx(Ml, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: R.jsx(dz, {}) }), o && R.jsx(Ml, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? R.jsx(pz, {}) : R.jsx(hz, {}) }), h] });
}
lP.displayName = "Controls";
const mz = k.memo(lP);
function vz({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: E, backgroundColor: y } = a || {}, w = l || E || y;
  return R.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: w,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (_) => v(_, e) : void 0 });
}
const yz = k.memo(vz), xz = (e) => e.nodes.map((t) => t.id), xd = (e) => e instanceof Function ? e : () => e;
function wz({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = yz,
  onClick: l
}) {
  const u = Ie(xz, Qe), f = xd(t), d = xd(e), h = xd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.jsx(R.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    R.jsx(bz, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function _z({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Ie((E) => {
    const { internals: y } = E.nodeLookup.get(e), w = y.userNode, { x: _, y: C } = y.positionAbsolute, { width: b, height: N } = Jn(w);
    return {
      node: w,
      x: _,
      y: C,
      width: b,
      height: N
    };
  }, Qe);
  return !d || d.hidden || !aR(d) ? null : R.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const bz = k.memo(_z);
var Sz = k.memo(wz);
const Ez = 200, Cz = 150, kz = (e) => !e.hidden, Nz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? sR(Xs(e.nodeLookup, { filter: kz }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Rz = "react-flow__minimap-desc";
function uP({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: o,
  nodeClassName: i = "",
  nodeBorderRadius: a = 5,
  nodeStrokeWidth: l,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: u,
  bgColor: f,
  maskColor: d,
  maskStrokeColor: h,
  maskStrokeWidth: p,
  position: m = "bottom-right",
  onClick: v,
  onNodeClick: E,
  pannable: y = !1,
  zoomable: w = !1,
  ariaLabel: _,
  inversePan: C,
  zoomStep: b = 1,
  offsetScale: N = 5
}) {
  const P = He(), A = k.useRef(null), { boundingRect: I, viewBB: O, rfId: D, panZoom: H, translateExtent: q, flowWidth: B, flowHeight: X, ariaLabelConfig: L } = Ie(Nz, Qe), W = (e == null ? void 0 : e.width) ?? Ez, V = (e == null ? void 0 : e.height) ?? Cz, Y = I.width / W, M = I.height / V, z = Math.max(Y, M), Q = z * W, j = z * V, U = N * z, ie = I.x - (Q - I.width) / 2 - U, $ = I.y - (j - I.height) / 2 - U, Z = Q + U * 2, ee = j + U * 2, K = `${Rz}-${D}`, te = k.useRef(0), se = k.useRef();
  te.current = z, k.useEffect(() => {
    if (A.current && H)
      return se.current = Wj({
        domNode: A.current,
        panZoom: H,
        getTransform: () => P.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [H]), k.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: q,
      width: B,
      height: X,
      inversePan: C,
      pannable: y,
      zoomStep: b,
      zoomable: w
    });
  }, [y, w, C, b, q, B, X]);
  const ae = v ? (pe) => {
    var Re;
    const [be, me] = ((Re = se.current) == null ? void 0 : Re.pointer(pe)) || [0, 0];
    v(pe, { x: be, y: me });
  } : void 0, ce = E ? k.useCallback((pe, be) => {
    const me = P.getState().nodeLookup.get(be).internals.userNode;
    E(pe, me);
  }, []) : void 0, de = _ ?? L["minimap.ariaLabel"];
  return R.jsx(ea, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * z : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: R.jsxs("svg", { width: W, height: V, viewBox: `${ie} ${$} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: A, onClick: ae, children: [de && R.jsx("title", { id: K, children: de }), R.jsx(Sz, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), R.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - U},${$ - U}h${Z + U * 2}v${ee + U * 2}h${-Z - U * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
uP.displayName = "MiniMap";
k.memo(uP);
const Pz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Tz = {
  [hi.Line]: "right",
  [hi.Handle]: "bottom-right"
};
function Az({ nodeId: e, position: t, variant: n = hi.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: E, onResizeStart: y, onResize: w, onResizeEnd: _ }) {
  const C = FR(), b = typeof e == "string" ? e : C, N = He(), P = k.useRef(null), A = n === hi.Handle, I = Ie(k.useCallback(Pz(A && v), [A, v]), Qe), O = k.useRef(null), D = t ?? Tz[n];
  k.useEffect(() => {
    if (!(!P.current || !b))
      return O.current || (O.current = iq({
        domNode: P.current,
        nodeId: b,
        getStoreItems: () => {
          const { nodeLookup: q, transform: B, snapGrid: X, snapToGrid: L, nodeOrigin: W, domNode: V } = N.getState();
          return {
            nodeLookup: q,
            transform: B,
            snapGrid: X,
            snapToGrid: L,
            nodeOrigin: W,
            paneDomNode: V
          };
        },
        onChange: (q, B) => {
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: W, nodeOrigin: V } = N.getState(), Y = [], M = { x: q.x, y: q.y }, z = L.get(b);
          if (z && z.expandParent && z.parentId) {
            const Q = z.origin ?? V, j = q.width ?? z.measured.width ?? 0, U = q.height ?? z.measured.height ?? 0, ie = {
              id: z.id,
              parentId: z.parentId,
              rect: {
                width: j,
                height: U,
                ...lR({
                  x: q.x ?? z.position.x,
                  y: q.y ?? z.position.y
                }, { width: j, height: U }, z.parentId, L, Q)
              }
            }, $ = jy([ie], L, W, V);
            Y.push(...$), M.x = q.x ? Math.max(Q[0] * j, q.x) : void 0, M.y = q.y ? Math.max(Q[1] * U, q.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: b,
              type: "position",
              position: { ...M }
            };
            Y.push(Q);
          }
          if (q.width !== void 0 && q.height !== void 0) {
            const j = {
              id: b,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: q.width,
                height: q.height
              }
            };
            Y.push(j);
          }
          for (const Q of B) {
            const j = {
              ...Q,
              type: "position"
            };
            Y.push(j);
          }
          X(Y);
        },
        onEnd: ({ width: q, height: B }) => {
          const X = {
            id: b,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: q,
              height: B
            }
          };
          N.getState().triggerNodeChanges([X]);
        }
      })), O.current.update({
        controlPosition: D,
        boundaries: {
          minWidth: u,
          minHeight: f,
          maxWidth: d,
          maxHeight: h
        },
        keepAspectRatio: p,
        resizeDirection: m,
        onResizeStart: y,
        onResize: w,
        onResizeEnd: _,
        shouldResize: E
      }), () => {
        var q;
        (q = O.current) == null || q.destroy();
      };
  }, [
    D,
    u,
    f,
    d,
    h,
    p,
    y,
    w,
    _,
    E
  ]);
  const H = D.split("-");
  return R.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...H, n, o]), ref: P, style: {
    ...i,
    scale: I,
    ...l && { [A ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
k.memo(Az);
function cP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = cP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function fP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = cP(e)) && (o && (o += " "), o += t);
  return o;
}
const Iz = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, Mz = (e, t) => ({
  classGroupId: e,
  validator: t
}), dP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), au = "-", u_ = [], Oz = "arbitrary..", Lz = (e) => {
  const t = jz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Dz(l);
      const u = l.split(au), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return hP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? Iz(d, f) : f : d || u_;
      }
      return n[l] || u_;
    }
  };
}, hP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = hP(e, t + 1, a);
    if (d) return d;
  }
  const l = n.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(au) : e.slice(t).join(au), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, Dz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? Oz + o : void 0;
})(), jz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return qz(n, t);
}, qz = (e, t) => {
  const n = dP();
  for (const o in e) {
    const i = e[o];
    Fy(i, n, o, t);
  }
  return n;
}, Fy = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    zz(l, t, n, o);
  }
}, zz = (e, t, n, o) => {
  if (typeof e == "string") {
    Fz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    $z(e, t, n, o);
    return;
  }
  Bz(e, t, n, o);
}, Fz = (e, t, n) => {
  const o = e === "" ? t : pP(t, e);
  o.classGroupId = n;
}, $z = (e, t, n, o) => {
  if (Vz(e)) {
    Fy(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Mz(n, e));
}, Bz = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    Fy(f, pP(t, u), n, o);
  }
}, pP = (e, t) => {
  let n = e;
  const o = t.split(au), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = dP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, Vz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Hz = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const i = (a, l) => {
    n[a] = l, t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let l = n[a];
      if (l !== void 0)
        return l;
      if ((l = o[a]) !== void 0)
        return i(a, l), l;
    },
    set(a, l) {
      a in n ? n[a] = l : i(a, l);
    }
  };
}, uy = "!", c_ = ":", Wz = [], f_ = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), Uz = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (i) => {
    const a = [];
    let l = 0, u = 0, f = 0, d;
    const h = i.length;
    for (let y = 0; y < h; y++) {
      const w = i[y];
      if (l === 0 && u === 0) {
        if (w === c_) {
          a.push(i.slice(f, y)), f = y + 1;
          continue;
        }
        if (w === "/") {
          d = y;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" ? l-- : w === "(" ? u++ : w === ")" && u--;
    }
    const p = a.length === 0 ? i : i.slice(f);
    let m = p, v = !1;
    p.endsWith(uy) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(uy) && (m = p.slice(1), v = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return f_(a, v, m, E);
  };
  if (t) {
    const i = t + c_, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : f_(Wz, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, Gz = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, o) => {
    t.set(n, 1e6 + o);
  }), (n) => {
    const o = [];
    let i = [];
    for (let a = 0; a < n.length; a++) {
      const l = n[a], u = l[0] === "[", f = t.has(l);
      u || f ? (i.length > 0 && (i.sort(), o.push(...i), i = []), o.push(l)) : i.push(l);
    }
    return i.length > 0 && (i.sort(), o.push(...i)), o;
  };
}, Yz = (e) => ({
  cache: Hz(e.cacheSize),
  parseClassName: Uz(e),
  sortModifiers: Gz(e),
  ...Lz(e)
}), Kz = /\s+/, Xz = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(Kz);
  let f = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const h = u[d], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: E,
      maybePostfixModifierPosition: y
    } = n(h);
    if (p) {
      f = h + (f.length > 0 ? " " + f : f);
      continue;
    }
    let w = !!y, _ = o(w ? E.substring(0, y) : E);
    if (!_) {
      if (!w) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (_ = o(E), !_) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      w = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), b = v ? C + uy : C, N = b + _;
    if (l.indexOf(N) > -1)
      continue;
    l.push(N);
    const P = i(_, w);
    for (let A = 0; A < P.length; ++A) {
      const I = P[A];
      l.push(b + I);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Qz = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = gP(n)) && (i && (i += " "), i += o);
  return i;
}, gP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = gP(e[o])) && (n && (n += " "), n += t);
  return n;
}, Zz = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = Yz(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = Xz(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(Qz(...f));
}, Jz = [], st = (e) => {
  const t = (n) => n[e] || Jz;
  return t.isThemeGetter = !0, t;
}, mP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, eF = /^\d+\/\d+$/, tF = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nF = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rF = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, oF = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, iF = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xo = (e) => eF.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), kr = (e) => !!e && Number.isInteger(Number(e)), wd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Yn = (e) => tF.test(e), sF = () => !0, aF = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nF.test(e) && !rF.test(e)
), yP = () => !1, lF = (e) => oF.test(e), uF = (e) => iF.test(e), cF = (e) => !we(e) && !_e(e), fF = (e) => mi(e, _P, yP), we = (e) => mP.test(e), eo = (e) => mi(e, bP, aF), _d = (e) => mi(e, mF, Te), d_ = (e) => mi(e, xP, yP), dF = (e) => mi(e, wP, uF), Ol = (e) => mi(e, SP, lF), _e = (e) => vP.test(e), bs = (e) => vi(e, bP), hF = (e) => vi(e, vF), h_ = (e) => vi(e, xP), pF = (e) => vi(e, _P), gF = (e) => vi(e, wP), Ll = (e) => vi(e, SP, !0), mi = (e, t, n) => {
  const o = mP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, vi = (e, t, n = !1) => {
  const o = vP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, xP = (e) => e === "position" || e === "percentage", wP = (e) => e === "image" || e === "url", _P = (e) => e === "length" || e === "size" || e === "bg-size", bP = (e) => e === "length", mF = (e) => e === "number", vF = (e) => e === "family-name", SP = (e) => e === "shadow", yF = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), i = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), p = st("inset-shadow"), m = st("text-shadow"), v = st("drop-shadow"), E = st("blur"), y = st("perspective"), w = st("aspect"), _ = st("ease"), C = st("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], P = () => [...N(), _e, we], A = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], O = () => [_e, we, f], D = () => [Xo, "full", "auto", ...O()], H = () => [kr, "none", "subgrid", _e, we], q = () => ["auto", {
    span: ["full", kr, _e, we]
  }, kr, _e, we], B = () => [kr, "auto", _e, we], X = () => ["auto", "min", "max", "fr", _e, we], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...O()], Y = () => [Xo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, we], z = () => [...N(), h_, d_, {
    position: [_e, we]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", pF, fF, {
    size: [_e, we]
  }], U = () => [wd, bs, eo], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    we
  ], $ = () => ["", Te, bs, eo], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Te, wd, h_, d_], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    we
  ], se = () => ["none", Te, _e, we], ae = () => ["none", Te, _e, we], ce = () => [Te, _e, we], de = () => [Xo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yn],
      breakpoint: [Yn],
      color: [sF],
      container: [Yn],
      "drop-shadow": [Yn],
      ease: ["in", "out", "in-out"],
      font: [cF],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Yn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Yn],
      shadow: [Yn],
      spacing: ["px", Te],
      text: [Yn],
      "text-shadow": [Yn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Xo, we, _e, w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Te, we, _e, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: D()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: D()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [kr, "auto", _e, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Xo, "full", "auto", u, ...O()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Te, Xo, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Te, _e, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Te, _e, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [kr, "first", "last", "none", _e, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: q()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": H()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: q()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...L(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...L()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": L()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": O()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, bs, eo]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, _e, _d]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", wd, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [hF, we, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, _e, we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Te, "none", _e, _d]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _e, we]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", _e, we]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Te, "from-font", "auto", _e, eo]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Te, "auto", _e, we]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _e, we]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", _e, we]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: z()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Q()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, kr, _e, we],
          radial: ["", _e, we],
          conic: [kr, _e, we]
        }, gF, dF]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: U()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: U()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: U()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Te, _e, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Te, bs, eo]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          Ll,
          Ol
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Ll, Ol]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Te, eo]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Ll, Ol]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Te, _e, we]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Te]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [_e, we]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Te]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: z()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Q()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", _e, we]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _e,
          we
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Te, _e, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Te, _e, we]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Ll,
          Ol
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Te, _e, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Te, _e, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Te, _e, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Te, _e, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Te, _e, we]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _e,
          we
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Te, _e, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Te, _e, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Te, _e, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Te, _e, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Te, _e, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Te, _e, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Te, _e, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Te, _e, we]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _e, we]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Te, "initial", _e, we]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, _e, we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Te, _e, we]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, _e, we]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, _e, we]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [_e, we, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: P()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: de()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": de()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": de()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": de()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _e, we]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", _e, we]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Te, bs, eo, _d]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, xF = /* @__PURE__ */ Zz(yF);
function Me(...e) {
  return xF(fP(e));
}
function Tu(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ R.jsx(Tu, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: n,
    style: o,
    ...i
  } = e, [a, l] = k.useState(!1);
  return /* @__PURE__ */ R.jsx(
    $s,
    {
      ...i,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        // CSS custom properties for handle styling
        // These can be overridden from Python via container-level CSS
        width: "var(--pynodeflow-handle-size, 11px)",
        height: "var(--pynodeflow-handle-size, 11px)",
        borderWidth: "var(--pynodeflow-handle-border-width, 2px)",
        borderColor: "var(--pynodeflow-handle-border-color, #000000ff)",
        backgroundColor: a ? "var(--pynodeflow-handle-hover-bg, #747474ff)" : "var(--pynodeflow-handle-bg, #000000ff)",
        ...o
      },
      className: Me(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        t
      ),
      children: n
    }
  );
}
const wF = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function EP(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? ye.Left : ye.Right, m = d.label + (d.required ? " *" : "");
    return /* @__PURE__ */ R.jsx(EP, { type: h, position: p, id: d.id, title: m });
  }
  const {
    className: t,
    labelClassName: n,
    handleClassName: o,
    title: i,
    position: a,
    ...l
  } = e, { ref: u, ...f } = l;
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      title: i,
      className: Me(
        "relative flex items-center",
        wF[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ R.jsx(
          Tu,
          {
            position: a,
            className: o,
            ...f
          }
        ),
        /* @__PURE__ */ R.jsx("label", { className: Me("text-foreground px-3", n), children: i })
      ]
    }
  );
}
const _F = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function CP(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ R.jsx(CP, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ R.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ R.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: n = ye.Bottom,
    children: o,
    ...i
  } = e, a = _F[n || ye.Bottom], l = n === ye.Top || n === ye.Bottom;
  return /* @__PURE__ */ R.jsx(Tu, { position: n, id: i.id, ...i, children: t && /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: `absolute flex items-center ${a} pointer-events-none`,
      children: [
        /* @__PURE__ */ R.jsx(
          "div",
          {
            className: `bg-gray-300 ${l ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ R.jsx("div", { className: "nodrag nopan pointer-events-auto", children: o })
      ]
    }
  ) });
}
function lu({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Me(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
const kP = Zt.createContext(null);
function yi() {
  return Zt.useContext(kP);
}
function bF(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function SF(e) {
  var a;
  if ("component" in e) {
    const { component: l, onValueChange: u } = e, f = yi(), d = ((a = f == null ? void 0 : f.nodeData.values) == null ? void 0 : a[l.id]) ?? l.value ?? "", h = l.label ?? bF(l.id);
    return /* @__PURE__ */ R.jsxs("div", { className: "component-text-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: h }),
      /* @__PURE__ */ R.jsx(
        lu,
        {
          type: "text",
          value: d,
          onChange: (p) => u == null ? void 0 : u(l.id, p.target.value),
          onMouseDown: (p) => p.stopPropagation(),
          onPointerDown: (p) => p.stopPropagation(),
          placeholder: l.placeholder,
          "aria-label": h,
          className: "h-8 text-xs"
        }
      )
    ] });
  }
  const { value: t, onChange: n, placeholder: o, label: i } = e;
  return /* @__PURE__ */ R.jsx(
    lu,
    {
      type: "text",
      value: t,
      onChange: (l) => n(l.target.value),
      onMouseDown: (l) => l.stopPropagation(),
      onPointerDown: (l) => l.stopPropagation(),
      placeholder: o,
      "aria-label": i,
      className: "h-8 text-xs"
    }
  );
}
function EF(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function CF(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = yi(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? 0, p = u.label ?? EF(u.id);
    return /* @__PURE__ */ R.jsxs("div", { className: "component-number-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: p }),
      /* @__PURE__ */ R.jsx(
        lu,
        {
          type: "number",
          value: h,
          step: "any",
          onChange: (m) => f == null ? void 0 : f(u.id, Number(m.target.value)),
          onMouseDownCapture: (m) => m.stopPropagation(),
          onPointerDownCapture: (m) => m.stopPropagation(),
          onWheel: (m) => m.currentTarget.blur(),
          "aria-label": p,
          className: "h-8 text-xs"
        }
      )
    ] });
  }
  const { value: t, onChange: n, isInteger: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ R.jsx(
    lu,
    {
      type: "number",
      value: t,
      step: o ? 1 : "any",
      onChange: (u) => n(Number(u.target.value)),
      onMouseDownCapture: (u) => u.stopPropagation(),
      onPointerDownCapture: (u) => u.stopPropagation(),
      onWheel: (u) => u.currentTarget.blur(),
      placeholder: i,
      "aria-label": a,
      className: "h-8 text-xs"
    }
  );
}
function p_(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xi(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = p_(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : p_(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return k.useCallback(xi(...e), e);
}
function kF(e, t) {
  const n = k.createContext(t), o = (a) => {
    const { children: l, ...u } = a, f = k.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ R.jsx(n.Provider, { value: f, children: l });
  };
  o.displayName = e + "Provider";
  function i(a) {
    const l = k.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, i];
}
function wi(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l), f = n.length;
    n = [...n, l];
    const d = (p) => {
      var _;
      const { scope: m, children: v, ...E } = p, y = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[f]) || u, w = k.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ R.jsx(y.Provider, { value: w, children: v });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = k.useContext(v);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const i = () => {
    const a = n.map((l) => k.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return k.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return i.scopeName = e, [o, NF(i, ...t)];
}
function NF(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const p = f(a)[`__scope${d}`];
        return { ...u, ...p };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Le(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
var yt = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {
}, RF = by[" useInsertionEffect ".trim().toString()] || yt;
function Bs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = PF({
    defaultProp: t,
    onChange: n
  }), u = e !== void 0, f = u ? e : i;
  {
    const h = k.useRef(e !== void 0);
    k.useEffect(() => {
      const p = h.current;
      p !== u && console.warn(
        `${o} is changing from ${p ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = u;
    }, [u, o]);
  }
  const d = k.useCallback(
    (h) => {
      var p;
      if (u) {
        const m = TF(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function PF({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = k.useState(e), i = k.useRef(n), a = k.useRef(t);
  return RF(() => {
    a.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function TF(e) {
  return typeof e == "function";
}
function NP(e) {
  const t = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function RP(e) {
  const [t, n] = k.useState(void 0);
  return yt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let l, u;
        if ("borderBoxSize" in a) {
          const f = a.borderBoxSize, d = Array.isArray(f) ? f[0] : f;
          l = d.inlineSize, u = d.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        n({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function AF(e, t) {
  return k.useReducer((n, o) => t[n][o] ?? n, e);
}
var go = (e) => {
  const { present: t, children: n } = e, o = IF(t), i = typeof n == "function" ? n({ present: o.isPresent }) : k.Children.only(n), a = Be(o.ref, MF(i));
  return typeof n == "function" || o.isPresent ? k.cloneElement(i, { ref: a }) : null;
};
go.displayName = "Presence";
function IF(e) {
  const [t, n] = k.useState(), o = k.useRef(null), i = k.useRef(e), a = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = AF(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return k.useEffect(() => {
    const d = Dl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = Dl(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = Dl(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Dl(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: k.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Dl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function MF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function OF(e) {
  const t = /* @__PURE__ */ LF(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(jF);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function LF(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = zF(i), u = qF(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? xi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var DF = Symbol("radix.slottable");
function jF(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === DF;
}
function qF(e, t) {
  const n = { ...t };
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...u) => {
      const f = a(...u);
      return i(...u), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...a } : o === "className" && (n[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function zF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var FF = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], je = FF.reduce((e, t) => {
  const n = /* @__PURE__ */ OF(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function $F(e, t) {
  e && Js.flushSync(() => e.dispatchEvent(t));
}
var Au = "Checkbox", [BF] = wi(Au), [VF, $y] = BF(Au);
function HF(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: o,
    defaultChecked: i,
    disabled: a,
    form: l,
    name: u,
    onCheckedChange: f,
    required: d,
    value: h = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, v] = Bs({
    prop: n,
    defaultProp: i ?? !1,
    onChange: f,
    caller: Au
  }), [E, y] = k.useState(null), [w, _] = k.useState(null), C = k.useRef(!1), b = E ? !!l || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
    checked: m,
    disabled: a,
    setChecked: v,
    control: E,
    setControl: y,
    name: u,
    form: l,
    value: h,
    hasConsumerStoppedPropagationRef: C,
    required: d,
    defaultChecked: Tr(i) ? !1 : i,
    isFormControl: b,
    bubbleInput: w,
    setBubbleInput: _
  };
  return /* @__PURE__ */ R.jsx(
    VF,
    {
      scope: t,
      ...N,
      children: WF(p) ? p(N) : o
    }
  );
}
var PP = "CheckboxTrigger", TP = k.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, i) => {
    const {
      control: a,
      value: l,
      disabled: u,
      checked: f,
      required: d,
      setControl: h,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: v,
      bubbleInput: E
    } = $y(PP, e), y = Be(i, h), w = k.useRef(f);
    return k.useEffect(() => {
      const _ = a == null ? void 0 : a.form;
      if (_) {
        const C = () => p(w.current);
        return _.addEventListener("reset", C), () => _.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ R.jsx(
      je.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Tr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": DP(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Le(t, (_) => {
          _.key === "Enter" && _.preventDefault();
        }),
        onClick: Le(n, (_) => {
          p((C) => Tr(C) ? !0 : !C), E && v && (m.current = _.isPropagationStopped(), m.current || _.stopPropagation());
        })
      }
    );
  }
);
TP.displayName = PP;
var AP = k.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: i,
      defaultChecked: a,
      required: l,
      disabled: u,
      value: f,
      onCheckedChange: d,
      form: h,
      ...p
    } = e;
    return /* @__PURE__ */ R.jsx(
      HF,
      {
        __scopeCheckbox: n,
        checked: i,
        defaultChecked: a,
        disabled: u,
        required: l,
        onCheckedChange: d,
        name: o,
        form: h,
        value: f,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
          /* @__PURE__ */ R.jsx(
            TP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ R.jsx(
            LP,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
AP.displayName = Au;
var IP = "CheckboxIndicator", MP = k.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = $y(IP, n);
    return /* @__PURE__ */ R.jsx(
      go,
      {
        present: o || Tr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ R.jsx(
          je.span,
          {
            "data-state": DP(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...i,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
MP.displayName = IP;
var OP = "CheckboxBubbleInput", LP = k.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: o,
      hasConsumerStoppedPropagationRef: i,
      checked: a,
      defaultChecked: l,
      required: u,
      disabled: f,
      name: d,
      value: h,
      form: p,
      bubbleInput: m,
      setBubbleInput: v
    } = $y(OP, e), E = Be(n, v), y = NP(a), w = RP(o);
    k.useEffect(() => {
      const C = m;
      if (!C) return;
      const b = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, A = !i.current;
      if (y !== a && P) {
        const I = new Event("click", { bubbles: A });
        C.indeterminate = Tr(a), P.call(C, Tr(a) ? !1 : a), C.dispatchEvent(I);
      }
    }, [m, y, a, i]);
    const _ = k.useRef(Tr(a) ? !1 : a);
    return /* @__PURE__ */ R.jsx(
      je.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? _.current,
        required: u,
        disabled: f,
        name: d,
        value: h,
        form: p,
        ...t,
        tabIndex: -1,
        ref: E,
        style: {
          ...t.style,
          ...w,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
LP.displayName = OP;
function WF(e) {
  return typeof e == "function";
}
function Tr(e) {
  return e === "indeterminate";
}
function DP(e) {
  return Tr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UF = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), GF = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), g_ = (e) => {
  const t = GF(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, jP = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), YF = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KF = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XF = k.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => k.createElement(
    "svg",
    {
      ref: f,
      ...KF,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: jP("lucide", i),
      ...!a && !YF(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([d, h]) => k.createElement(d, h)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = (e, t) => {
  const n = k.forwardRef(
    ({ className: o, ...i }, a) => k.createElement(XF, {
      ref: a,
      iconNode: t,
      className: jP(
        `lucide-${UF(g_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = g_(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QF = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], ZF = Ln("arrow-down-wide-narrow", QF);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JF = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], e4 = Ln("arrow-right-from-line", JF);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], qP = Ln("check", t4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], zP = Ln("chevron-down", n4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], o4 = Ln("chevron-up", r4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i4 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], s4 = Ln("download", i4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], l4 = Ln("panel-left", a4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], c4 = Ln("plus", u4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f4 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], d4 = Ln("trash-2", f4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h4 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], p4 = Ln("x", h4);
function m_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    AP,
    {
      "data-slot": "checkbox",
      className: Me(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(
        MP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ R.jsx(qP, { className: "size-3.5" })
        }
      )
    }
  );
}
function g4(e) {
  var i;
  if ("component" in e) {
    const { component: a, onValueChange: l } = e, u = yi(), f = ((i = u == null ? void 0 : u.nodeData.values) == null ? void 0 : i[a.id]) ?? a.value ?? !1;
    return /* @__PURE__ */ R.jsxs("div", { className: "component-bool-field flex items-center gap-2", children: [
      /* @__PURE__ */ R.jsx(
        m_,
        {
          checked: f,
          onCheckedChange: (d) => l == null ? void 0 : l(a.id, d === !0),
          onMouseDown: (d) => d.stopPropagation(),
          onPointerDown: (d) => d.stopPropagation(),
          "aria-label": a.label,
          className: "h-4 w-4"
        }
      ),
      /* @__PURE__ */ R.jsx("label", { className: "text-sm text-gray-700", children: a.label })
    ] });
  }
  const { value: t, onChange: n, label: o } = e;
  return /* @__PURE__ */ R.jsx(
    m_,
    {
      checked: t,
      onCheckedChange: (a) => n(a === !0),
      onMouseDown: (a) => a.stopPropagation(),
      onPointerDown: (a) => a.stopPropagation(),
      "aria-label": o,
      className: "h-4 w-4"
    }
  );
}
function v_(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function y_(e) {
  const t = /* @__PURE__ */ m4(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(y4);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function m4(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = w4(i), u = x4(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? xi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var v4 = Symbol("radix.slottable");
function y4(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === v4;
}
function x4(e, t) {
  const n = { ...t };
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...u) => {
      const f = a(...u);
      return i(...u), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...a } : o === "className" && (n[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function w4(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function _4(e) {
  const t = e + "CollectionProvider", [n, o] = wi(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: w, children: _ } = y, C = Zt.useRef(null), b = Zt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ R.jsx(i, { scope: w, itemMap: b, collectionRef: C, children: _ });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ y_(u), d = Zt.forwardRef(
    (y, w) => {
      const { scope: _, children: C } = y, b = a(u, _), N = Be(w, b.collectionRef);
      return /* @__PURE__ */ R.jsx(f, { ref: N, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ y_(h), v = Zt.forwardRef(
    (y, w) => {
      const { scope: _, children: C, ...b } = y, N = Zt.useRef(null), P = Be(w, N), A = a(h, _);
      return Zt.useEffect(() => (A.itemMap.set(N, { ref: N, ...b }), () => void A.itemMap.delete(N))), /* @__PURE__ */ R.jsx(m, { [p]: "", ref: P, children: C });
    }
  );
  v.displayName = h;
  function E(y) {
    const w = a(e + "CollectionConsumer", y);
    return Zt.useCallback(() => {
      const C = w.collectionRef.current;
      if (!C) return [];
      const b = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (A, I) => b.indexOf(A.ref.current) - b.indexOf(I.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    E,
    o
  ];
}
var b4 = k.createContext(void 0);
function S4(e) {
  const t = k.useContext(b4);
  return e || t || "ltr";
}
function uo(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function E4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e);
  k.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var C4 = "DismissableLayer", cy = "dismissableLayer.update", k4 = "dismissableLayer.pointerDownOutside", N4 = "dismissableLayer.focusOutside", x_, FP = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Iu = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = k.useContext(FP), [h, p] = k.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = k.useState({}), E = Be(t, (I) => p(I)), y = Array.from(d.layers), [w] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), _ = y.indexOf(w), C = h ? y.indexOf(h) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, N = C >= _, P = T4((I) => {
      const O = I.target, D = [...d.branches].some((H) => H.contains(O));
      !N || D || (i == null || i(I), l == null || l(I), I.defaultPrevented || u == null || u());
    }, m), A = A4((I) => {
      const O = I.target;
      [...d.branches].some((H) => H.contains(O)) || (a == null || a(I), l == null || l(I), I.defaultPrevented || u == null || u());
    }, m);
    return E4((I) => {
      C === d.layers.size - 1 && (o == null || o(I), !I.defaultPrevented && u && (I.preventDefault(), u()));
    }, m), k.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (x_ = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), w_(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = x_);
        };
    }, [h, m, n, d]), k.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), w_());
    }, [h, d]), k.useEffect(() => {
      const I = () => v({});
      return document.addEventListener(cy, I), () => document.removeEventListener(cy, I);
    }, []), /* @__PURE__ */ R.jsx(
      je.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: b ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Le(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: Le(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: Le(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Iu.displayName = C4;
var R4 = "DismissableLayerBranch", P4 = k.forwardRef((e, t) => {
  const n = k.useContext(FP), o = k.useRef(null), i = Be(t, o);
  return k.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ R.jsx(je.div, { ...e, ref: i });
});
P4.displayName = R4;
function T4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e), o = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          $P(
            k4,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = f, t.addEventListener("click", i.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", i.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function A4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e), o = k.useRef(!1);
  return k.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && $P(N4, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function w_() {
  const e = new CustomEvent(cy);
  document.dispatchEvent(e);
}
function $P(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? $F(i, a) : i.dispatchEvent(a);
}
var bd = 0;
function BP() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? __()), document.body.insertAdjacentElement("beforeend", e[1] ?? __()), bd++, () => {
      bd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), bd--;
    };
  }, []);
}
function __() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Sd = "focusScope.autoFocusOnMount", Ed = "focusScope.autoFocusOnUnmount", b_ = { bubbles: !1, cancelable: !0 }, I4 = "FocusScope", By = k.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = k.useState(null), d = uo(i), h = uo(a), p = k.useRef(null), m = Be(t, (y) => f(y)), v = k.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  k.useEffect(() => {
    if (o) {
      let y = function(b) {
        if (v.paused || !u) return;
        const N = b.target;
        u.contains(N) ? p.current = N : Nr(p.current, { select: !0 });
      }, w = function(b) {
        if (v.paused || !u) return;
        const N = b.relatedTarget;
        N !== null && (u.contains(N) || Nr(p.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const P of b)
            P.removedNodes.length > 0 && Nr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", w);
      const C = new MutationObserver(_);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", w), C.disconnect();
      };
    }
  }, [o, u, v.paused]), k.useEffect(() => {
    if (u) {
      E_.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const _ = new CustomEvent(Sd, b_);
        u.addEventListener(Sd, d), u.dispatchEvent(_), _.defaultPrevented || (M4(q4(VP(u)), { select: !0 }), document.activeElement === y && Nr(u));
      }
      return () => {
        u.removeEventListener(Sd, d), setTimeout(() => {
          const _ = new CustomEvent(Ed, b_);
          u.addEventListener(Ed, h), u.dispatchEvent(_), _.defaultPrevented || Nr(y ?? document.body, { select: !0 }), u.removeEventListener(Ed, h), E_.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const E = k.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, _ = document.activeElement;
      if (w && _) {
        const C = y.currentTarget, [b, N] = O4(C);
        b && N ? !y.shiftKey && _ === N ? (y.preventDefault(), n && Nr(b, { select: !0 })) : y.shiftKey && _ === b && (y.preventDefault(), n && Nr(N, { select: !0 })) : _ === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ R.jsx(je.div, { tabIndex: -1, ...l, ref: m, onKeyDown: E });
});
By.displayName = I4;
function M4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Nr(o, { select: t }), document.activeElement !== n) return;
}
function O4(e) {
  const t = VP(e), n = S_(t, e), o = S_(t.reverse(), e);
  return [n, o];
}
function VP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function S_(e, t) {
  for (const n of e)
    if (!L4(n, { upTo: t })) return n;
}
function L4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function D4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && D4(e) && t && e.select();
  }
}
var E_ = j4();
function j4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = C_(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = C_(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function C_(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function q4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var z4 = by[" useId ".trim().toString()] || (() => {
}), F4 = 0;
function io(e) {
  const [t, n] = k.useState(z4());
  return yt(() => {
    n((o) => o ?? String(F4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const $4 = ["top", "right", "bottom", "left"], Ar = Math.min, Dt = Math.max, uu = Math.round, jl = Math.floor, An = (e) => ({
  x: e,
  y: e
}), B4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, V4 = {
  start: "end",
  end: "start"
};
function fy(e, t, n) {
  return Dt(e, Ar(t, n));
}
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zn(e) {
  return e.split("-")[0];
}
function _i(e) {
  return e.split("-")[1];
}
function Vy(e) {
  return e === "x" ? "y" : "x";
}
function Hy(e) {
  return e === "y" ? "height" : "width";
}
const H4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Pn(e) {
  return H4.has(Zn(e)) ? "y" : "x";
}
function Wy(e) {
  return Vy(Pn(e));
}
function W4(e, t, n) {
  n === void 0 && (n = !1);
  const o = _i(e), i = Wy(e), a = Hy(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = cu(l)), [l, cu(l)];
}
function U4(e) {
  const t = cu(e);
  return [dy(e), t, dy(t)];
}
function dy(e) {
  return e.replace(/start|end/g, (t) => V4[t]);
}
const k_ = ["left", "right"], N_ = ["right", "left"], G4 = ["top", "bottom"], Y4 = ["bottom", "top"];
function K4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? N_ : k_ : t ? k_ : N_;
    case "left":
    case "right":
      return t ? G4 : Y4;
    default:
      return [];
  }
}
function X4(e, t, n, o) {
  const i = _i(e);
  let a = K4(Zn(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(dy)))), a;
}
function cu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => B4[t]);
}
function Q4(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function HP(e) {
  return typeof e != "number" ? Q4(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fu(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: i
  } = e;
  return {
    width: o,
    height: i,
    top: n,
    left: t,
    right: t + o,
    bottom: n + i,
    x: t,
    y: n
  };
}
function R_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = Pn(t), l = Wy(t), u = Hy(l), f = Zn(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
  let v;
  switch (f) {
    case "top":
      v = {
        x: h,
        y: o.y - i.height
      };
      break;
    case "bottom":
      v = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: o.x - i.width,
        y: p
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (_i(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Z4 = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: l
  } = n, u = a.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: h,
    y: p
  } = R_(d, o, f), m = o, v = {}, E = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: w,
      fn: _
    } = u[y], {
      x: C,
      y: b,
      data: N,
      reset: P
    } = await _({
      x: h,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: i,
      middlewareData: v,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = C ?? h, p = b ?? p, v = {
      ...v,
      [w]: {
        ...v[w],
        ...N
      }
    }, P && E <= 50 && (E++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (d = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: h,
      y: p
    } = R_(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: i,
    middlewareData: v
  };
};
async function Vs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: a,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = Qn(t, e), E = HP(v), w = u[m ? p === "floating" ? "reference" : "floating" : p], _ = fu(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), N = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = fu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: b,
    strategy: f
  }) : C);
  return {
    top: (_.top - P.top + E.top) / N.y,
    bottom: (P.bottom - _.bottom + E.bottom) / N.y,
    left: (_.left - P.left + E.left) / N.x,
    right: (P.right - _.right + E.right) / N.x
  };
}
const J4 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: a,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: d,
      padding: h = 0
    } = Qn(e, t) || {};
    if (d == null)
      return {};
    const p = HP(h), m = {
      x: n,
      y: o
    }, v = Wy(i), E = Hy(v), y = await l.getDimensions(d), w = v === "y", _ = w ? "top" : "left", C = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", N = a.reference[E] + a.reference[v] - m[v] - a.floating[E], P = m[v] - a.reference[v], A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let I = A ? A[b] : 0;
    (!I || !await (l.isElement == null ? void 0 : l.isElement(A))) && (I = u.floating[b] || a.floating[E]);
    const O = N / 2 - P / 2, D = I / 2 - y[E] / 2 - 1, H = Ar(p[_], D), q = Ar(p[C], D), B = H, X = I - y[E] - q, L = I / 2 - y[E] / 2 + O, W = fy(B, L, X), V = !f.arrow && _i(i) != null && L !== W && a.reference[E] / 2 - (L < B ? H : q) - y[E] / 2 < 0, Y = V ? L < B ? L - B : L - X : 0;
    return {
      [v]: m[v] + Y,
      data: {
        [v]: W,
        centerOffset: L - W - Y,
        ...V && {
          alignmentOffset: Y
        }
      },
      reset: V
    };
  }
}), e$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        middlewareData: a,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: d
      } = t, {
        mainAxis: h = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: y = !0,
        ...w
      } = Qn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Zn(i), C = Pn(u), b = Zn(u) === u, N = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (b || !y ? [cu(u)] : U4(u)), A = E !== "none";
      !m && A && P.push(...X4(u, y, E, N));
      const I = [u, ...P], O = await Vs(t, w), D = [];
      let H = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[_]), p) {
        const L = W4(i, l, N);
        D.push(O[L[0]], O[L[1]]);
      }
      if (H = [...H, {
        placement: i,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var q, B;
        const L = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, W = I[L];
        if (W && (!(p === "alignment" ? C !== Pn(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        H.every((M) => Pn(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: H
            },
            reset: {
              placement: W
            }
          };
        let V = (B = H.filter((Y) => Y.overflows[0] <= 0).sort((Y, M) => Y.overflows[1] - M.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!V)
          switch (v) {
            case "bestFit": {
              var X;
              const Y = (X = H.filter((M) => {
                if (A) {
                  const z = Pn(M.placement);
                  return z === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, Q) => z + Q, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : X[0];
              Y && (V = Y);
              break;
            }
            case "initialPlacement":
              V = u;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function P_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function T_(e) {
  return $4.some((t) => e[t] >= 0);
}
const t$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = Qn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Vs(t, {
            ...i,
            elementContext: "reference"
          }), l = P_(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: T_(l)
            }
          };
        }
        case "escaped": {
          const a = await Vs(t, {
            ...i,
            altBoundary: !0
          }), l = P_(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: T_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, WP = /* @__PURE__ */ new Set(["left", "top"]);
async function n$(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), u = _i(n), f = Pn(n) === "y", d = WP.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Qn(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: E
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return u && typeof E == "number" && (v = u === "end" ? E * -1 : E), f ? {
    x: v * h,
    y: m * d
  } : {
    x: m * d,
    y: v * h
  };
}
const r$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: i,
        y: a,
        placement: l,
        middlewareData: u
      } = t, f = await n$(t, e);
      return l === ((n = u.offset) == null ? void 0 : n.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: i + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: l
        }
      };
    }
  };
}, o$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (w) => {
            let {
              x: _,
              y: C
            } = w;
            return {
              x: _,
              y: C
            };
          }
        },
        ...f
      } = Qn(e, t), d = {
        x: n,
        y: o
      }, h = await Vs(t, f), p = Pn(Zn(i)), m = Vy(p);
      let v = d[m], E = d[p];
      if (a) {
        const w = m === "y" ? "top" : "left", _ = m === "y" ? "bottom" : "right", C = v + h[w], b = v - h[_];
        v = fy(C, v, b);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", C = E + h[w], b = E - h[_];
        E = fy(C, E, b);
      }
      const y = u.fn({
        ...t,
        [m]: v,
        [p]: E
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [m]: a,
            [p]: l
          }
        }
      };
    }
  };
}, i$ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: i,
        rects: a,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: d = !0
      } = Qn(e, t), h = {
        x: n,
        y: o
      }, p = Pn(i), m = Vy(p);
      let v = h[m], E = h[p];
      const y = Qn(u, t), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const b = m === "y" ? "height" : "width", N = a.reference[m] - a.floating[b] + w.mainAxis, P = a.reference[m] + a.reference[b] - w.mainAxis;
        v < N ? v = N : v > P && (v = P);
      }
      if (d) {
        var _, C;
        const b = m === "y" ? "width" : "height", N = WP.has(Zn(i)), P = a.reference[p] - a.floating[b] + (N && ((_ = l.offset) == null ? void 0 : _[p]) || 0) + (N ? 0 : w.crossAxis), A = a.reference[p] + a.reference[b] + (N ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (N ? w.crossAxis : 0);
        E < P ? E = P : E > A && (E = A);
      }
      return {
        [m]: v,
        [p]: E
      };
    }
  };
}, s$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: i,
        rects: a,
        platform: l,
        elements: u
      } = t, {
        apply: f = () => {
        },
        ...d
      } = Qn(e, t), h = await Vs(t, d), p = Zn(i), m = _i(i), v = Pn(i) === "y", {
        width: E,
        height: y
      } = a.floating;
      let w, _;
      p === "top" || p === "bottom" ? (w = p, _ = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, w = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, b = E - h.left - h.right, N = Ar(y - h[w], C), P = Ar(E - h[_], b), A = !t.middlewareData.shift;
      let I = N, O = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = b), (o = t.middlewareData.shift) != null && o.enabled.y && (I = C), A && !m) {
        const H = Dt(h.left, 0), q = Dt(h.right, 0), B = Dt(h.top, 0), X = Dt(h.bottom, 0);
        v ? O = E - 2 * (H !== 0 || q !== 0 ? H + q : Dt(h.left, h.right)) : I = y - 2 * (B !== 0 || X !== 0 ? B + X : Dt(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: O,
        availableHeight: I
      });
      const D = await l.getDimensions(u.floating);
      return E !== D.width || y !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mu() {
  return typeof window < "u";
}
function bi(e) {
  return UP(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  var t;
  return (t = (UP(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function UP(e) {
  return Mu() ? e instanceof Node || e instanceof qt(e).Node : !1;
}
function gn(e) {
  return Mu() ? e instanceof Element || e instanceof qt(e).Element : !1;
}
function Mn(e) {
  return Mu() ? e instanceof HTMLElement || e instanceof qt(e).HTMLElement : !1;
}
function A_(e) {
  return !Mu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qt(e).ShadowRoot;
}
const a$ = /* @__PURE__ */ new Set(["inline", "contents"]);
function ta(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = mn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !a$.has(i);
}
const l$ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function u$(e) {
  return l$.has(bi(e));
}
const c$ = [":popover-open", ":modal"];
function Ou(e) {
  return c$.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const f$ = ["transform", "translate", "scale", "rotate", "perspective"], d$ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], h$ = ["paint", "layout", "strict", "content"];
function Uy(e) {
  const t = Gy(), n = gn(e) ? mn(e) : e;
  return f$.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || d$.some((o) => (n.willChange || "").includes(o)) || h$.some((o) => (n.contain || "").includes(o));
}
function p$(e) {
  let t = Ir(e);
  for (; Mn(t) && !pi(t); ) {
    if (Uy(t))
      return t;
    if (Ou(t))
      return null;
    t = Ir(t);
  }
  return null;
}
function Gy() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const g$ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function pi(e) {
  return g$.has(bi(e));
}
function mn(e) {
  return qt(e).getComputedStyle(e);
}
function Lu(e) {
  return gn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ir(e) {
  if (bi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    A_(e) && e.host || // Fallback.
    Dn(e)
  );
  return A_(t) ? t.host : t;
}
function GP(e) {
  const t = Ir(e);
  return pi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mn(t) && ta(t) ? t : GP(t);
}
function Hs(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = GP(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = qt(i);
  if (a) {
    const u = hy(l);
    return t.concat(l, l.visualViewport || [], ta(i) ? i : [], u && n ? Hs(u) : []);
  }
  return t.concat(i, Hs(i, [], n));
}
function hy(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function YP(e) {
  const t = mn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Mn(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = uu(n) !== a || uu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function Yy(e) {
  return gn(e) ? e : e.contextElement;
}
function oi(e) {
  const t = Yy(e);
  if (!Mn(t))
    return An(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = YP(t);
  let l = (a ? uu(n.width) : n.width) / o, u = (a ? uu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const m$ = /* @__PURE__ */ An(0);
function KP(e) {
  const t = qt(e);
  return !Gy() || !t.visualViewport ? m$ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function v$(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qt(e) ? !1 : t;
}
function co(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = Yy(e);
  let l = An(1);
  t && (o ? gn(o) && (l = oi(o)) : l = oi(e));
  const u = v$(a, n, o) ? KP(a) : An(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = qt(a), v = o && gn(o) ? qt(o) : o;
    let E = m, y = hy(E);
    for (; y && o && v !== E; ) {
      const w = oi(y), _ = y.getBoundingClientRect(), C = mn(y), b = _.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, N = _.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      f *= w.x, d *= w.y, h *= w.x, p *= w.y, f += b, d += N, E = qt(y), y = hy(E);
    }
  }
  return fu({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Du(e, t) {
  const n = Lu(e).scrollLeft;
  return t ? t.left + n : co(Dn(e)).left + n;
}
function XP(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Du(e, n), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function y$(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const a = i === "fixed", l = Dn(o), u = t ? Ou(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = An(1);
  const h = An(0), p = Mn(o);
  if ((p || !p && !a) && ((bi(o) !== "body" || ta(l)) && (f = Lu(o)), Mn(o))) {
    const v = co(o);
    d = oi(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? XP(l, f) : An(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function x$(e) {
  return Array.from(e.getClientRects());
}
function w$(e) {
  const t = Dn(e), n = Lu(e), o = e.ownerDocument.body, i = Dt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Dt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Du(e);
  const u = -n.scrollTop;
  return mn(o).direction === "rtl" && (l += Dt(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const I_ = 25;
function _$(e, t) {
  const n = qt(e), o = Dn(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = Gy();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Du(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, E = Math.abs(o.clientWidth - p.clientWidth - v);
    E <= I_ && (a -= E);
  } else d <= I_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const b$ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function S$(e, t) {
  const n = co(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Mn(e) ? oi(e) : An(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function M_(e, t, n) {
  let o;
  if (t === "viewport")
    o = _$(e, n);
  else if (t === "document")
    o = w$(Dn(e));
  else if (gn(t))
    o = S$(t, n);
  else {
    const i = KP(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return fu(o);
}
function QP(e, t) {
  const n = Ir(e);
  return n === t || !gn(n) || pi(n) ? !1 : mn(n).position === "fixed" || QP(n, t);
}
function E$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Hs(e, [], !1).filter((u) => gn(u) && bi(u) !== "body"), i = null;
  const a = mn(e).position === "fixed";
  let l = a ? Ir(e) : e;
  for (; gn(l) && !pi(l); ) {
    const u = mn(l), f = Uy(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && b$.has(i.position) || ta(l) && !f && QP(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Ir(l);
  }
  return t.set(e, o), o;
}
function C$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Ou(t) ? [] : E$(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = M_(t, h, i);
    return d.top = Dt(p.top, d.top), d.right = Ar(p.right, d.right), d.bottom = Ar(p.bottom, d.bottom), d.left = Dt(p.left, d.left), d;
  }, M_(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function k$(e) {
  const {
    width: t,
    height: n
  } = YP(e);
  return {
    width: t,
    height: n
  };
}
function N$(e, t, n) {
  const o = Mn(t), i = Dn(t), a = n === "fixed", l = co(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = An(0);
  function d() {
    f.x = Du(i);
  }
  if (o || !o && !a)
    if ((bi(t) !== "body" || ta(i)) && (u = Lu(t)), o) {
      const v = co(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? XP(i, u) : An(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Cd(e) {
  return mn(e).position === "static";
}
function O_(e, t) {
  if (!Mn(e) || mn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Dn(e) === n && (n = n.ownerDocument.body), n;
}
function ZP(e, t) {
  const n = qt(e);
  if (Ou(e))
    return n;
  if (!Mn(e)) {
    let i = Ir(e);
    for (; i && !pi(i); ) {
      if (gn(i) && !Cd(i))
        return i;
      i = Ir(i);
    }
    return n;
  }
  let o = O_(e, t);
  for (; o && u$(o) && Cd(o); )
    o = O_(o, t);
  return o && pi(o) && Cd(o) && !Uy(o) ? n : o || p$(e) || n;
}
const R$ = async function(e) {
  const t = this.getOffsetParent || ZP, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: N$(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function P$(e) {
  return mn(e).direction === "rtl";
}
const T$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: y$,
  getDocumentElement: Dn,
  getClippingRect: C$,
  getOffsetParent: ZP,
  getElementRects: R$,
  getClientRects: x$,
  getDimensions: k$,
  getScale: oi,
  isElement: gn,
  isRTL: P$
};
function JP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function A$(e, t) {
  let n = null, o;
  const i = Dn(e);
  function a() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), a();
    const d = e.getBoundingClientRect(), {
      left: h,
      top: p,
      width: m,
      height: v
    } = d;
    if (u || t(), !m || !v)
      return;
    const E = jl(p), y = jl(i.clientWidth - (h + m)), w = jl(i.clientHeight - (p + v)), _ = jl(h), b = {
      rootMargin: -E + "px " + -y + "px " + -w + "px " + -_ + "px",
      threshold: Dt(0, Ar(1, f)) || 1
    };
    let N = !0;
    function P(A) {
      const I = A[0].intersectionRatio;
      if (I !== f) {
        if (!N)
          return l();
        I ? l(!1, I) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !JP(d, e.getBoundingClientRect()) && l(), N = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, b);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function I$(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Yy(e), h = i || a ? [...d ? Hs(d) : [], ...Hs(t)] : [];
  h.forEach((_) => {
    i && _.addEventListener("scroll", n, {
      passive: !0
    }), a && _.addEventListener("resize", n);
  });
  const p = d && u ? A$(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((_) => {
    let [C] = _;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(t);
    })), n();
  }), d && !f && v.observe(d), v.observe(t));
  let E, y = f ? co(e) : null;
  f && w();
  function w() {
    const _ = co(e);
    y && !JP(y, _) && n(), y = _, E = requestAnimationFrame(w);
  }
  return n(), () => {
    var _;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (_ = v) == null || _.disconnect(), v = null, f && cancelAnimationFrame(E);
  };
}
const M$ = r$, O$ = o$, L$ = e$, D$ = s$, j$ = t$, L_ = J4, q$ = i$, z$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: T$,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return Z4(e, t, {
    ...i,
    platform: a
  });
};
var F$ = typeof document < "u", $$ = function() {
}, Gl = F$ ? k.useLayoutEffect : $$;
function du(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!du(e[o], t[o]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = i[o];
      if (!(a === "_owner" && e.$$typeof) && !du(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function eT(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function D_(e, t) {
  const n = eT(e);
  return Math.round(t * n) / n;
}
function kd(e) {
  const t = k.useRef(e);
  return Gl(() => {
    t.current = e;
  }), t;
}
function B$(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i,
    elements: {
      reference: a,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: f,
    open: d
  } = e, [h, p] = k.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = k.useState(o);
  du(m, o) || v(o);
  const [E, y] = k.useState(null), [w, _] = k.useState(null), C = k.useCallback((M) => {
    M !== A.current && (A.current = M, y(M));
  }, []), b = k.useCallback((M) => {
    M !== I.current && (I.current = M, _(M));
  }, []), N = a || E, P = l || w, A = k.useRef(null), I = k.useRef(null), O = k.useRef(h), D = f != null, H = kd(f), q = kd(i), B = kd(d), X = k.useCallback(() => {
    if (!A.current || !I.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    q.current && (M.platform = q.current), z$(A.current, I.current, M).then((z) => {
      const Q = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      L.current && !du(O.current, Q) && (O.current = Q, Js.flushSync(() => {
        p(Q);
      }));
    });
  }, [m, t, n, q, B]);
  Gl(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = k.useRef(!1);
  Gl(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Gl(() => {
    if (N && (A.current = N), P && (I.current = P), N && P) {
      if (H.current)
        return H.current(N, P, X);
      X();
    }
  }, [N, P, X, H, D]);
  const W = k.useMemo(() => ({
    reference: A,
    floating: I,
    setReference: C,
    setFloating: b
  }), [C, b]), V = k.useMemo(() => ({
    reference: N,
    floating: P
  }), [N, P]), Y = k.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return M;
    const z = D_(V.floating, h.x), Q = D_(V.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + z + "px, " + Q + "px)",
      ...eT(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: Q
    };
  }, [n, u, V.floating, h.x, h.y]);
  return k.useMemo(() => ({
    ...h,
    update: X,
    refs: W,
    elements: V,
    floatingStyles: Y
  }), [h, X, W, V, Y]);
}
const V$ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? L_({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? L_({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, H$ = (e, t) => ({
  ...M$(e),
  options: [e, t]
}), W$ = (e, t) => ({
  ...O$(e),
  options: [e, t]
}), U$ = (e, t) => ({
  ...q$(e),
  options: [e, t]
}), G$ = (e, t) => ({
  ...L$(e),
  options: [e, t]
}), Y$ = (e, t) => ({
  ...D$(e),
  options: [e, t]
}), K$ = (e, t) => ({
  ...j$(e),
  options: [e, t]
}), X$ = (e, t) => ({
  ...V$(e),
  options: [e, t]
});
var Q$ = "Arrow", tT = k.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ R.jsx(
    je.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ R.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
tT.displayName = Q$;
var Z$ = tT, Ky = "Popper", [nT, ju] = wi(Ky), [J$, rT] = nT(Ky), oT = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = k.useState(null);
  return /* @__PURE__ */ R.jsx(J$, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
oT.displayName = Ky;
var iT = "PopperAnchor", sT = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = rT(iT, n), l = k.useRef(null), u = Be(t, l), f = k.useRef(null);
    return k.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ R.jsx(je.div, { ...i, ref: u });
  }
);
sT.displayName = iT;
var Xy = "PopperContent", [eB, tB] = nT(Xy), aT = k.forwardRef(
  (e, t) => {
    var K, te, se, ae, ce, de;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: f = !0,
      collisionBoundary: d = [],
      collisionPadding: h = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: E,
      ...y
    } = e, w = rT(Xy, n), [_, C] = k.useState(null), b = Be(t, (pe) => C(pe)), [N, P] = k.useState(null), A = RP(N), I = (A == null ? void 0 : A.width) ?? 0, O = (A == null ? void 0 : A.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), H = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, q = Array.isArray(d) ? d : [d], B = q.length > 0, X = {
      padding: H,
      boundary: q.filter(rB),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: L, floatingStyles: W, placement: V, isPositioned: Y, middlewareData: M } = B$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => I$(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        H$({ mainAxis: i + O, alignmentAxis: l }),
        f && W$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? U$() : void 0,
          ...X
        }),
        f && G$({ ...X }),
        Y$({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: me, availableHeight: Re }) => {
            const { width: Ee, height: Je } = be.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${me}px`), Ue.setProperty("--radix-popper-available-height", `${Re}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        N && X$({ element: N, padding: u }),
        oB({ arrowWidth: I, arrowHeight: O }),
        m && K$({ strategy: "referenceHidden", ...X })
      ]
    }), [z, Q] = cT(V), j = uo(E);
    yt(() => {
      Y && (j == null || j());
    }, [Y, j]);
    const U = (K = M.arrow) == null ? void 0 : K.x, ie = (te = M.arrow) == null ? void 0 : te.y, $ = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = k.useState();
    return yt(() => {
      _ && ee(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: Y ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            (ae = M.transformOrigin) == null ? void 0 : ae.x,
            (ce = M.transformOrigin) == null ? void 0 : ce.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((de = M.hide) == null ? void 0 : de.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ R.jsx(
          eB,
          {
            scope: n,
            placedSide: z,
            onArrowChange: P,
            arrowX: U,
            arrowY: ie,
            shouldHideArrow: $,
            children: /* @__PURE__ */ R.jsx(
              je.div,
              {
                "data-side": z,
                "data-align": Q,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
aT.displayName = Xy;
var lT = "PopperArrow", nB = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, uT = k.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = tB(lT, o), l = nB[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ R.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ R.jsx(
          Z$,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
uT.displayName = lT;
function rB(e) {
  return e !== null;
}
var oB = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, _, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = cT(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((_ = i.arrow) == null ? void 0 : _.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (E = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: E, y } };
  }
});
function cT(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fT = oT, dT = sT, hT = aT, pT = uT, iB = "Portal", qu = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = k.useState(!1);
  yt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? yq.createPortal(/* @__PURE__ */ R.jsx(je.div, { ...o, ref: t }), l) : null;
});
qu.displayName = iB;
// @__NO_SIDE_EFFECTS__
function sB(e) {
  const t = /* @__PURE__ */ aB(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(uB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function aB(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = fB(i), u = cB(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? xi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var lB = Symbol("radix.slottable");
function uB(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === lB;
}
function cB(e, t) {
  const n = { ...t };
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...u) => {
      const f = a(...u);
      return i(...u), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...a } : o === "className" && (n[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function fB(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gT = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), dB = "VisuallyHidden", mT = k.forwardRef(
  (e, t) => /* @__PURE__ */ R.jsx(
    je.span,
    {
      ...e,
      ref: t,
      style: { ...gT, ...e.style }
    }
  )
);
mT.displayName = dB;
var hB = mT, pB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qo = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), zl = {}, Nd = 0, vT = function(e) {
  return e && (e.host || vT(e.parentNode));
}, gB = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = vT(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mB = function(e, t, n, o) {
  var i = gB(t, Array.isArray(e) ? e : [e]);
  zl[n] || (zl[n] = /* @__PURE__ */ new WeakMap());
  var a = zl[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(p) {
    !p || u.has(p) || (u.add(p), d(p.parentNode));
  };
  i.forEach(d);
  var h = function(p) {
    !p || f.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var v = m.getAttribute(o), E = v !== null && v !== "false", y = (Qo.get(m) || 0) + 1, w = (a.get(m) || 0) + 1;
          Qo.set(m, y), a.set(m, w), l.push(m), y === 1 && E && ql.set(m, !0), w === 1 && m.setAttribute(n, "true"), E || m.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", m, _);
        }
    });
  };
  return h(t), u.clear(), Nd++, function() {
    l.forEach(function(p) {
      var m = Qo.get(p) - 1, v = a.get(p) - 1;
      Qo.set(p, m), a.set(p, v), m || (ql.has(p) || p.removeAttribute(o), ql.delete(p)), v || p.removeAttribute(n);
    }), Nd--, Nd || (Qo = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), zl = {});
  };
}, yT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = pB(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), mB(o, i, n, "aria-hidden")) : function() {
    return null;
  };
}, Rn = function() {
  return Rn = Object.assign || function(t) {
    for (var n, o = 1, i = arguments.length; o < i; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Rn.apply(this, arguments);
};
function xT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function vB(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Yl = "right-scroll-bar-position", Kl = "width-before-scroll-bar", yB = "with-scroll-bars-hidden", xB = "--removed-body-scroll-bar-size";
function Rd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wB(e, t) {
  var n = k.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var i = n.value;
          i !== o && (n.value = o, n.callback(o, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var _B = typeof window < "u" ? k.useLayoutEffect : k.useEffect, j_ = /* @__PURE__ */ new WeakMap();
function bB(e, t) {
  var n = wB(null, function(o) {
    return e.forEach(function(i) {
      return Rd(i, o);
    });
  });
  return _B(function() {
    var o = j_.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Rd(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Rd(u, l);
      });
    }
    j_.set(n, e);
  }, [e]), n;
}
function SB(e) {
  return e;
}
function EB(e, t) {
  t === void 0 && (t = SB);
  var n = [], o = !1, i = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var l = t(a, o);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(a);
      }
      n = {
        push: function(u) {
          return a(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(a), l = n;
      }
      var f = function() {
        var h = l;
        l = [], h.forEach(a);
      }, d = function() {
        return Promise.resolve().then(f);
      };
      d(), n = {
        push: function(h) {
          l.push(h), d();
        },
        filter: function(h) {
          return l = l.filter(h), n;
        }
      };
    }
  };
  return i;
}
function CB(e) {
  e === void 0 && (e = {});
  var t = EB(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var wT = function(e) {
  var t = e.sideCar, n = xT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return k.createElement(o, Rn({}, n));
};
wT.isSideCarExport = !0;
function kB(e, t) {
  return e.useMedium(t), wT;
}
var _T = CB(), Pd = function() {
}, zu = k.forwardRef(function(e, t) {
  var n = k.useRef(null), o = k.useState({
    onScrollCapture: Pd,
    onWheelCapture: Pd,
    onTouchMoveCapture: Pd
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, E = e.noIsolation, y = e.inert, w = e.allowPinchZoom, _ = e.as, C = _ === void 0 ? "div" : _, b = e.gapMode, N = xT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, A = bB([n, t]), I = Rn(Rn({}, N), i);
  return k.createElement(
    k.Fragment,
    null,
    h && k.createElement(P, { sideCar: _T, removeScrollBar: d, shards: p, noRelative: v, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!w, lockRef: n, gapMode: b }),
    l ? k.cloneElement(k.Children.only(u), Rn(Rn({}, I), { ref: A })) : k.createElement(C, Rn({}, I, { className: f, ref: A }), u)
  );
});
zu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zu.classNames = {
  fullWidth: Kl,
  zeroRight: Yl
};
var NB = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function RB() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = NB();
  return t && e.setAttribute("nonce", t), e;
}
function PB(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function TB(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var AB = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = RB()) && (PB(t, n), TB(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, IB = function() {
  var e = AB();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bT = function() {
  var e = IB(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, MB = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Td = function(e) {
  return parseInt(e || "", 10) || 0;
}, OB = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Td(n), Td(o), Td(i)];
}, LB = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return MB;
  var t = OB(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, DB = bT(), ii = "data-scroll-locked", jB = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(yB, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ii, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Yl, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Kl, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Yl, " .").concat(Yl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Kl, " .").concat(Kl, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ii, `] {
    `).concat(xB, ": ").concat(u, `px;
  }
`);
}, q_ = function() {
  var e = parseInt(document.body.getAttribute(ii) || "0", 10);
  return isFinite(e) ? e : 0;
}, qB = function() {
  k.useEffect(function() {
    return document.body.setAttribute(ii, (q_() + 1).toString()), function() {
      var e = q_() - 1;
      e <= 0 ? document.body.removeAttribute(ii) : document.body.setAttribute(ii, e.toString());
    };
  }, []);
}, zB = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  qB();
  var a = k.useMemo(function() {
    return LB(i);
  }, [i]);
  return k.createElement(DB, { styles: jB(a, !t, i, n ? "" : "!important") });
}, py = !1;
if (typeof window < "u")
  try {
    var Fl = Object.defineProperty({}, "passive", {
      get: function() {
        return py = !0, !0;
      }
    });
    window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, Fl);
  } catch {
    py = !1;
  }
var Zo = py ? { passive: !1 } : !1, FB = function(e) {
  return e.tagName === "TEXTAREA";
}, ST = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !FB(e) && n[t] === "visible")
  );
}, $B = function(e) {
  return ST(e, "overflowY");
}, BB = function(e) {
  return ST(e, "overflowX");
}, z_ = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = ET(e, o);
    if (i) {
      var a = CT(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, VB = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, HB = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ET = function(e, t) {
  return e === "v" ? $B(t) : BB(t);
}, CT = function(e, t) {
  return e === "v" ? VB(t) : HB(t);
}, WB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, UB = function(e, t, n, o, i) {
  var a = WB(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = CT(e, u), E = v[0], y = v[1], w = v[2], _ = y - w - a * E;
    (E || _) && ET(e, u) && (p += _, m += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, $l = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, F_ = function(e) {
  return [e.deltaX, e.deltaY];
}, $_ = function(e) {
  return e && "current" in e ? e.current : e;
}, GB = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, YB = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, KB = 0, Jo = [];
function XB(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), o = k.useRef(), i = k.useState(KB++)[0], a = k.useState(bT)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = vB([e.lockRef.current], (e.shards || []).map($_), !0).filter(Boolean);
      return y.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = k.useCallback(function(y, w) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !l.current.allowPinchZoom;
    var _ = $l(y), C = n.current, b = "deltaX" in y ? y.deltaX : C[0] - _[0], N = "deltaY" in y ? y.deltaY : C[1] - _[1], P, A = y.target, I = Math.abs(b) > Math.abs(N) ? "h" : "v";
    if ("touches" in y && I === "h" && A.type === "range")
      return !1;
    var O = z_(I, A);
    if (!O)
      return !0;
    if (O ? P = I : (P = I === "v" ? "h" : "v", O = z_(I, A)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (b || N) && (o.current = P), !P)
      return !0;
    var D = o.current || P;
    return UB(D, w, y, D === "h" ? b : N);
  }, []), f = k.useCallback(function(y) {
    var w = y;
    if (!(!Jo.length || Jo[Jo.length - 1] !== a)) {
      var _ = "deltaY" in w ? F_(w) : $l(w), C = t.current.filter(function(P) {
        return P.name === w.type && (P.target === w.target || w.target === P.shadowParent) && GB(P.delta, _);
      })[0];
      if (C && C.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!C) {
        var b = (l.current.shards || []).map($_).filter(Boolean).filter(function(P) {
          return P.contains(w.target);
        }), N = b.length > 0 ? u(w, b[0]) : !l.current.noIsolation;
        N && w.cancelable && w.preventDefault();
      }
    }
  }, []), d = k.useCallback(function(y, w, _, C) {
    var b = { name: y, delta: w, target: _, should: C, shadowParent: QB(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== b;
      });
    }, 1);
  }, []), h = k.useCallback(function(y) {
    n.current = $l(y), o.current = void 0;
  }, []), p = k.useCallback(function(y) {
    d(y.type, F_(y), y.target, u(y, e.lockRef.current));
  }, []), m = k.useCallback(function(y) {
    d(y.type, $l(y), y.target, u(y, e.lockRef.current));
  }, []);
  k.useEffect(function() {
    return Jo.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", f, Zo), document.addEventListener("touchmove", f, Zo), document.addEventListener("touchstart", h, Zo), function() {
      Jo = Jo.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, Zo), document.removeEventListener("touchmove", f, Zo), document.removeEventListener("touchstart", h, Zo);
    };
  }, []);
  var v = e.removeScrollBar, E = e.inert;
  return k.createElement(
    k.Fragment,
    null,
    E ? k.createElement(a, { styles: YB(i) }) : null,
    v ? k.createElement(zB, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function QB(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ZB = kB(_T, XB);
var Qy = k.forwardRef(function(e, t) {
  return k.createElement(zu, Rn({}, e, { ref: t, sideCar: ZB }));
});
Qy.classNames = zu.classNames;
var JB = [" ", "Enter", "ArrowUp", "ArrowDown"], e5 = [" ", "Enter"], fo = "Select", [Fu, $u, t5] = _4(fo), [Si] = wi(fo, [
  t5,
  ju
]), Bu = ju(), [n5, Mr] = Si(fo), [r5, o5] = Si(fo), kT = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    value: l,
    defaultValue: u,
    onValueChange: f,
    dir: d,
    name: h,
    autoComplete: p,
    disabled: m,
    required: v,
    form: E
  } = e, y = Bu(t), [w, _] = k.useState(null), [C, b] = k.useState(null), [N, P] = k.useState(!1), A = S4(d), [I, O] = Bs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: fo
  }), [D, H] = Bs({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: fo
  }), q = k.useRef(null), B = w ? E || !!w.closest("form") : !0, [X, L] = k.useState(/* @__PURE__ */ new Set()), W = Array.from(X).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ R.jsx(fT, { ...y, children: /* @__PURE__ */ R.jsxs(
    n5,
    {
      required: v,
      scope: t,
      trigger: w,
      onTriggerChange: _,
      valueNode: C,
      onValueNodeChange: b,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: P,
      contentId: io(),
      value: D,
      onValueChange: H,
      open: I,
      onOpenChange: O,
      dir: A,
      triggerPointerDownPosRef: q,
      disabled: m,
      children: [
        /* @__PURE__ */ R.jsx(Fu.Provider, { scope: t, children: /* @__PURE__ */ R.jsx(
          r5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: k.useCallback((V) => {
              L((Y) => new Set(Y).add(V));
            }, []),
            onNativeOptionRemove: k.useCallback((V) => {
              L((Y) => {
                const M = new Set(Y);
                return M.delete(V), M;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ R.jsxs(
          YT,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: D,
            onChange: (V) => H(V.target.value),
            disabled: m,
            form: E,
            children: [
              D === void 0 ? /* @__PURE__ */ R.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
kT.displayName = fo;
var NT = "SelectTrigger", RT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Bu(n), l = Mr(NT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = $u(n), h = k.useRef("touch"), [p, m, v] = XT((y) => {
      const w = d().filter((b) => !b.disabled), _ = w.find((b) => b.value === l.value), C = QT(w, y, _);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ R.jsx(dT, { asChild: !0, ...a, children: /* @__PURE__ */ R.jsx(
      je.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": l.contentId,
        "aria-expanded": l.open,
        "aria-required": l.required,
        "aria-autocomplete": "none",
        dir: l.dir,
        "data-state": l.open ? "open" : "closed",
        disabled: u,
        "data-disabled": u ? "" : void 0,
        "data-placeholder": KT(l.value) ? "" : void 0,
        ...i,
        ref: f,
        onClick: Le(i.onClick, (y) => {
          y.currentTarget.focus(), h.current !== "mouse" && E(y);
        }),
        onPointerDown: Le(i.onPointerDown, (y) => {
          h.current = y.pointerType;
          const w = y.target;
          w.hasPointerCapture(y.pointerId) && w.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (E(y), y.preventDefault());
        }),
        onKeyDown: Le(i.onKeyDown, (y) => {
          const w = p.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(w && y.key === " ") && JB.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
RT.displayName = NT;
var PT = "SelectValue", TT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = Mr(PT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ R.jsx(
      je.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: KT(f.value) ? /* @__PURE__ */ R.jsx(R.Fragment, { children: l }) : a
      }
    );
  }
);
TT.displayName = PT;
var i5 = "SelectIcon", AT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ R.jsx(je.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
AT.displayName = i5;
var s5 = "SelectPortal", IT = (e) => /* @__PURE__ */ R.jsx(qu, { asChild: !0, ...e });
IT.displayName = s5;
var ho = "SelectContent", MT = k.forwardRef(
  (e, t) => {
    const n = Mr(ho, e.__scopeSelect), [o, i] = k.useState();
    if (yt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? Js.createPortal(
        /* @__PURE__ */ R.jsx(OT, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx(Fu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ R.jsx(LT, { ...e, ref: t });
  }
);
MT.displayName = ho;
var cn = 10, [OT, Or] = Si(ho), a5 = "SelectContentImpl", l5 = /* @__PURE__ */ sB("SelectContent.RemoveScroll"), LT = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      //
      // PopperContent props
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: w,
      //
      ..._
    } = e, C = Mr(ho, n), [b, N] = k.useState(null), [P, A] = k.useState(null), I = Be(t, (K) => N(K)), [O, D] = k.useState(null), [H, q] = k.useState(
      null
    ), B = $u(n), [X, L] = k.useState(!1), W = k.useRef(!1);
    k.useEffect(() => {
      if (b) return yT(b);
    }, [b]), BP();
    const V = k.useCallback(
      (K) => {
        const [te, ...se] = B().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of K)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [B, P]
    ), Y = k.useCallback(
      () => V([O, b]),
      [V, O, b]
    );
    k.useEffect(() => {
      X && Y();
    }, [X, Y]);
    const { onOpenChange: M, triggerPointerDownPosRef: z } = C;
    k.useEffect(() => {
      if (b) {
        let K = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          K = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = z.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = z.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : b.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, M, z]), k.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [Q, j] = XT((K) => {
      const te = B().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = QT(te, K, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), U = k.useCallback(
      (K, te, se) => {
        const ae = !W.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (D(K), ae && (W.current = !0));
      },
      [C.value]
    ), ie = k.useCallback(() => b == null ? void 0 : b.focus(), [b]), $ = k.useCallback(
      (K, te, se) => {
        const ae = !W.current && !se;
        (C.value !== void 0 && C.value === te || ae) && q(K);
      },
      [C.value]
    ), Z = o === "popper" ? gy : DT, ee = Z === gy ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ R.jsx(
      OT,
      {
        scope: n,
        content: b,
        viewport: P,
        onViewportChange: A,
        itemRefCallback: U,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: $,
        focusSelectedItem: Y,
        selectedItemText: H,
        position: o,
        isPositioned: X,
        searchRef: Q,
        children: /* @__PURE__ */ R.jsx(Qy, { as: l5, allowPinchZoom: !0, children: /* @__PURE__ */ R.jsx(
          By,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: Le(i, (K) => {
              var te;
              (te = C.trigger) == null || te.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ R.jsx(
              Iu,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ R.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ..._,
                    ...ee,
                    onPlaced: () => L(!0),
                    ref: I,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: Le(_.onKeyDown, (K) => {
                      const te = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !te && K.key.length === 1 && j(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let ae = B().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const ce = K.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => V(ae)), K.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
LT.displayName = a5;
var u5 = "SelectItemAlignedPosition", DT = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = Mr(ho, n), l = Or(ho, n), [u, f] = k.useState(null), [d, h] = k.useState(null), p = Be(t, (I) => h(I)), m = $u(n), v = k.useRef(!1), E = k.useRef(!0), { viewport: y, selectedItem: w, selectedItemText: _, focusSelectedItem: C } = l, b = k.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && w && _) {
      const I = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), H = _.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = H.left - O.left, de = D.left - ce, pe = I.left - de, be = I.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - cn, Ee = v_(de, [
          cn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(cn, Re - me)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - H.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - I.right - de, be = I.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - cn, Ee = v_(de, [
          cn,
          Math.max(cn, Re - me)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const q = m(), B = window.innerHeight - cn * 2, X = y.scrollHeight, L = window.getComputedStyle(d), W = parseInt(L.borderTopWidth, 10), V = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), z = W + V + X + M + Y, Q = Math.min(w.offsetHeight * 5, z), j = window.getComputedStyle(y), U = parseInt(j.paddingTop, 10), ie = parseInt(j.paddingBottom, 10), $ = I.top + I.height / 2 - cn, Z = B - $, ee = w.offsetHeight / 2, K = w.offsetTop + ee, te = W + V + K, se = z - te;
      if (te <= $) {
        const ce = q.length > 0 && w === q[q.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + Y
        ), be = te + pe;
        u.style.height = be + "px";
      } else {
        const ce = q.length > 0 && w === q[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          $,
          W + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? U : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - $ + y.offsetTop;
      }
      u.style.margin = `${cn}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = B + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    u,
    d,
    y,
    w,
    _,
    a.dir,
    o
  ]);
  yt(() => b(), [b]);
  const [N, P] = k.useState();
  yt(() => {
    d && P(window.getComputedStyle(d).zIndex);
  }, [d]);
  const A = k.useCallback(
    (I) => {
      I && E.current === !0 && (b(), C == null || C(), E.current = !1);
    },
    [b, C]
  );
  return /* @__PURE__ */ R.jsx(
    f5,
    {
      scope: n,
      contentWrapper: u,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ R.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: N
          },
          children: /* @__PURE__ */ R.jsx(
            je.div,
            {
              ...i,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...i.style
              }
            }
          )
        }
      )
    }
  );
});
DT.displayName = u5;
var c5 = "SelectPopperPosition", gy = k.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = cn,
    ...a
  } = e, l = Bu(n);
  return /* @__PURE__ */ R.jsx(
    hT,
    {
      ...l,
      ...a,
      ref: t,
      align: o,
      collisionPadding: i,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
gy.displayName = c5;
var [f5, Zy] = Si(ho, {}), my = "SelectViewport", jT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = Or(my, n), l = Zy(my, n), u = Be(t, a.onViewportChange), f = k.useRef(0);
    return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ R.jsx(Fu.Slot, { scope: n, children: /* @__PURE__ */ R.jsx(
        je.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...i,
          ref: u,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...i.style
          },
          onScroll: Le(i.onScroll, (d) => {
            const h = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = l;
            if (m != null && m.current && p) {
              const v = Math.abs(f.current - h.scrollTop);
              if (v > 0) {
                const E = window.innerHeight - cn * 2, y = parseFloat(p.style.minHeight), w = parseFloat(p.style.height), _ = Math.max(y, w);
                if (_ < E) {
                  const C = _ + v, b = Math.min(E, C), N = C - b;
                  p.style.height = b + "px", p.style.bottom === "0px" && (h.scrollTop = N > 0 ? N : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            f.current = h.scrollTop;
          })
        }
      ) })
    ] });
  }
);
jT.displayName = my;
var qT = "SelectGroup", [d5, h5] = Si(qT), p5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = io();
    return /* @__PURE__ */ R.jsx(d5, { scope: n, id: i, children: /* @__PURE__ */ R.jsx(je.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
p5.displayName = qT;
var zT = "SelectLabel", g5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = h5(zT, n);
    return /* @__PURE__ */ R.jsx(je.div, { id: i.id, ...o, ref: t });
  }
);
g5.displayName = zT;
var hu = "SelectItem", [m5, FT] = Si(hu), $T = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = Mr(hu, n), f = Or(hu, n), d = u.value === o, [h, p] = k.useState(a ?? ""), [m, v] = k.useState(!1), E = Be(
      t,
      (C) => {
        var b;
        return (b = f.itemRefCallback) == null ? void 0 : b.call(f, C, o, i);
      }
    ), y = io(), w = k.useRef("touch"), _ = () => {
      i || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ R.jsx(
      m5,
      {
        scope: n,
        value: o,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: k.useCallback((C) => {
          p((b) => b || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ R.jsx(
          Fu.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: i,
            textValue: h,
            children: /* @__PURE__ */ R.jsx(
              je.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...l,
                ref: E,
                onFocus: Le(l.onFocus, () => v(!0)),
                onBlur: Le(l.onBlur, () => v(!1)),
                onClick: Le(l.onClick, () => {
                  w.current !== "mouse" && _();
                }),
                onPointerUp: Le(l.onPointerUp, () => {
                  w.current === "mouse" && _();
                }),
                onPointerDown: Le(l.onPointerDown, (C) => {
                  w.current = C.pointerType;
                }),
                onPointerMove: Le(l.onPointerMove, (C) => {
                  var b;
                  w.current = C.pointerType, i ? (b = f.onItemLeave) == null || b.call(f) : w.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Le(l.onPointerLeave, (C) => {
                  var b;
                  C.currentTarget === document.activeElement && ((b = f.onItemLeave) == null || b.call(f));
                }),
                onKeyDown: Le(l.onKeyDown, (C) => {
                  var N;
                  ((N = f.searchRef) == null ? void 0 : N.current) !== "" && C.key === " " || (e5.includes(C.key) && _(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
$T.displayName = hu;
var Cs = "SelectItemText", BT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = Mr(Cs, n), u = Or(Cs, n), f = FT(Cs, n), d = o5(Cs, n), [h, p] = k.useState(null), m = Be(
      t,
      (_) => p(_),
      f.onItemTextChange,
      (_) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, _, f.value, f.disabled);
      }
    ), v = h == null ? void 0 : h.textContent, E = k.useMemo(
      () => /* @__PURE__ */ R.jsx("option", { value: f.value, disabled: f.disabled, children: v }, f.value),
      [f.disabled, f.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: w } = d;
    return yt(() => (y(E), () => w(E)), [y, w, E]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(je.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? Js.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
BT.displayName = Cs;
var VT = "SelectItemIndicator", HT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return FT(VT, n).isSelected ? /* @__PURE__ */ R.jsx(je.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
HT.displayName = VT;
var vy = "SelectScrollUpButton", WT = k.forwardRef((e, t) => {
  const n = Or(vy, e.__scopeSelect), o = Zy(vy, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollTop > 0;
        a(d);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ R.jsx(
    GT,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = n;
        u && f && (u.scrollTop = u.scrollTop - f.offsetHeight);
      }
    }
  ) : null;
});
WT.displayName = vy;
var yy = "SelectScrollDownButton", UT = k.forwardRef((e, t) => {
  const n = Or(yy, e.__scopeSelect), o = Zy(yy, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollHeight - f.clientHeight, h = Math.ceil(f.scrollTop) < d;
        a(h);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ R.jsx(
    GT,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = n;
        u && f && (u.scrollTop = u.scrollTop + f.offsetHeight);
      }
    }
  ) : null;
});
UT.displayName = yy;
var GT = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = Or("SelectScrollButton", n), l = k.useRef(null), u = $u(n), f = k.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return k.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((p) => p.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ R.jsx(
    je.div,
    {
      "aria-hidden": !0,
      ...i,
      ref: t,
      style: { flexShrink: 0, ...i.style },
      onPointerDown: Le(i.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Le(i.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Le(i.onPointerLeave, () => {
        f();
      })
    }
  );
}), v5 = "SelectSeparator", y5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ R.jsx(je.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
y5.displayName = v5;
var xy = "SelectArrow", x5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Bu(n), a = Mr(xy, n), l = Or(xy, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ R.jsx(pT, { ...i, ...o, ref: t }) : null;
  }
);
x5.displayName = xy;
var w5 = "SelectBubbleInput", YT = k.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = k.useRef(null), a = Be(o, i), l = NP(t);
    return k.useEffect(() => {
      const u = i.current;
      if (!u) return;
      const f = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== t && h) {
        const p = new Event("change", { bubbles: !0 });
        h.call(u, t), u.dispatchEvent(p);
      }
    }, [l, t]), /* @__PURE__ */ R.jsx(
      je.select,
      {
        ...n,
        style: { ...gT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
YT.displayName = w5;
function KT(e) {
  return e === "" || e === void 0;
}
function XT(e) {
  const t = uo(e), n = k.useRef(""), o = k.useRef(0), i = k.useCallback(
    (l) => {
      const u = n.current + l;
      t(u), (function f(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      })(u);
    },
    [t]
  ), a = k.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return k.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, a];
}
function QT(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = _5(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function _5(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var b5 = kT, S5 = RT, E5 = TT, C5 = AT, k5 = IT, N5 = MT, R5 = jT, P5 = $T, T5 = BT, A5 = HT, I5 = WT, M5 = UT;
function B_({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(b5, { "data-slot": "select", ...e });
}
function V_({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(E5, { "data-slot": "select-value", ...e });
}
function H_({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsxs(
    S5,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Me(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(C5, { asChild: !0, children: /* @__PURE__ */ R.jsx(zP, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function W_({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ R.jsx(k5, { children: /* @__PURE__ */ R.jsxs(
    N5,
    {
      "data-slot": "select-content",
      className: Me(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ R.jsx(O5, {}),
        /* @__PURE__ */ R.jsx(
          R5,
          {
            className: Me(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ R.jsx(L5, {})
      ]
    }
  ) });
}
function U_({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ R.jsxs(
    P5,
    {
      "data-slot": "select-item",
      className: Me(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ R.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ R.jsx(A5, { children: /* @__PURE__ */ R.jsx(qP, { className: "size-4" }) }) }),
        /* @__PURE__ */ R.jsx(T5, { children: t })
      ]
    }
  );
}
function O5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    I5,
    {
      "data-slot": "select-scroll-up-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(o4, { className: "size-4" })
    }
  );
}
function L5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    M5,
    {
      "data-slot": "select-scroll-down-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(zP, { className: "size-4" })
    }
  );
}
function D5(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = yi(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? "";
    return /* @__PURE__ */ R.jsxs("div", { className: "component-select-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: u.label }),
      /* @__PURE__ */ R.jsxs(B_, { value: h, onValueChange: (p) => f == null ? void 0 : f(u.id, p), children: [
        /* @__PURE__ */ R.jsx(
          H_,
          {
            className: "h-8 text-xs",
            onMouseDown: (p) => p.stopPropagation(),
            onPointerDown: (p) => p.stopPropagation(),
            "aria-label": u.label,
            children: /* @__PURE__ */ R.jsx(V_, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ R.jsx(W_, { children: (u.options || []).map((p) => /* @__PURE__ */ R.jsx(U_, { value: p, className: "text-xs", children: p }, p)) })
      ] })
    ] });
  }
  const { value: t, options: n, onChange: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ R.jsxs(B_, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ R.jsx(
      H_,
      {
        className: "h-8 text-xs",
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ R.jsx(V_, { placeholder: i })
      }
    ),
    /* @__PURE__ */ R.jsx(W_, { children: n.map((u) => /* @__PURE__ */ R.jsx(U_, { value: u, className: "text-xs", children: u }, u)) })
  ] });
}
function j5(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l);
    u.displayName = a + "Context";
    const f = n.length;
    n = [...n, l];
    const d = (p) => {
      var _;
      const { scope: m, children: v, ...E } = p, y = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[f]) || u, w = k.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ R.jsx(y.Provider, { value: w, children: v });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = k.useContext(v);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const i = () => {
    const a = n.map((l) => k.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return k.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return i.scopeName = e, [o, q5(i, ...t)];
}
function q5(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const p = f(a)[`__scope${d}`];
        return { ...u, ...p };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var z5 = Symbol.for("react.lazy"), pu = by[" use ".trim().toString()];
function F5(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ZT(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === z5 && "_payload" in e && F5(e._payload);
}
// @__NO_SIDE_EFFECTS__
function JT(e) {
  const t = /* @__PURE__ */ $5(e), n = k.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    ZT(a) && typeof pu == "function" && (a = pu(a._payload));
    const u = k.Children.toArray(a), f = u.find(V5);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var eA = /* @__PURE__ */ JT("Slot");
// @__NO_SIDE_EFFECTS__
function $5(e) {
  const t = k.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (ZT(i) && typeof pu == "function" && (i = pu(i._payload)), k.isValidElement(i)) {
      const l = W5(i), u = H5(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? xi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var B5 = Symbol("radix.slottable");
function V5(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === B5;
}
function H5(e, t) {
  const n = { ...t };
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...u) => {
      const f = a(...u);
      return i(...u), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...a } : o === "className" && (n[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function W5(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var U5 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], tA = U5.reduce((e, t) => {
  const n = /* @__PURE__ */ JT(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Jy = "Progress", e0 = 100, [G5] = j5(Jy), [Y5, K5] = G5(Jy), nA = k.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: i,
      getValueLabel: a = X5,
      ...l
    } = e;
    (i || i === 0) && !G_(i) && console.error(Q5(`${i}`, "Progress"));
    const u = G_(i) ? i : e0;
    o !== null && !Y_(o, u) && console.error(Z5(`${o}`, "Progress"));
    const f = Y_(o, u) ? o : null, d = gu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ R.jsx(Y5, { scope: n, value: f, max: u, children: /* @__PURE__ */ R.jsx(
      tA.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": gu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": iA(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
nA.displayName = Jy;
var rA = "ProgressIndicator", oA = k.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, i = K5(rA, n);
    return /* @__PURE__ */ R.jsx(
      tA.div,
      {
        "data-state": iA(i.value, i.max),
        "data-value": i.value ?? void 0,
        "data-max": i.max,
        ...o,
        ref: t
      }
    );
  }
);
oA.displayName = rA;
function X5(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function iA(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function gu(e) {
  return typeof e == "number";
}
function G_(e) {
  return gu(e) && !isNaN(e) && e > 0;
}
function Y_(e, t) {
  return gu(e) && !isNaN(e) && e <= t && e >= 0;
}
function Q5(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${e0}\`.`;
}
function Z5(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${e0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var J5 = nA, eV = oA;
function K_({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ R.jsx(
    J5,
    {
      "data-slot": "progress",
      className: Me(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ R.jsx(
        eV,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function tV(e) {
  var u;
  if ("component" in e) {
    const { component: f } = e, d = yi(), h = ((u = d == null ? void 0 : d.nodeData.values) == null ? void 0 : u[f.id]) ?? f.value ?? 0, p = f.max ?? 100, m = f.min ?? 0, v = Math.min(100, Math.max(0, (h - m) / (p - m) * 100));
    return /* @__PURE__ */ R.jsxs("div", { className: "component-progress-field space-y-1.5", children: [
      f.label && /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600", children: f.label }),
      /* @__PURE__ */ R.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ R.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ R.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
          Math.round(v),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ R.jsx(K_, { value: v, className: "h-2" })
    ] });
  }
  const { value: t, onChange: n, label: o, min: i = 0, max: a = 100 } = e, l = Math.min(100, Math.max(0, (t - i) / (a - i) * 100));
  return /* @__PURE__ */ R.jsxs("div", { className: "space-y-1.5", children: [
    o && /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600", children: o }),
    /* @__PURE__ */ R.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ R.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
      /* @__PURE__ */ R.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ R.jsx(K_, { value: l, className: "h-2" })
  ] });
}
function nV({ component: e }) {
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "component-header px-3 py-2 font-semibold flex items-center gap-2",
      style: {
        backgroundColor: e.bgColor,
        color: e.textColor
      },
      children: [
        e.icon && /* @__PURE__ */ R.jsx("span", { children: e.icon }),
        /* @__PURE__ */ R.jsx("span", { children: e.label })
      ]
    }
  );
}
function rV({ component: e }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `component-footer px-3 py-2 text-xs text-muted-foreground border-t ${e.className || ""}`,
      style: {
        backgroundColor: e.bgColor,
        color: e.textColor
      },
      children: e.text
    }
  );
}
const X_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Q_ = fP, sA = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Q_(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = X_(h) || X_(p);
    return i[d][m];
  }), u = n && Object.entries(n).reduce((d, h) => {
    let [p, m] = h;
    return m === void 0 || (d[p] = m), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: p, className: m, ...v } = h;
    return Object.entries(v).every((E) => {
      let [y, w] = E;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...u
      }[y]) : {
        ...a,
        ...u
      }[y] === w;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return Q_(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, oV = sA(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function si({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? eA : "button";
  return /* @__PURE__ */ R.jsx(
    a,
    {
      "data-slot": "button",
      className: Me(oV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function iV({ component: e, onValueChange: t }) {
  var a;
  const n = yi(), o = ((a = n == null ? void 0 : n.nodeData.values) == null ? void 0 : a[e.id]) ?? e.value ?? 0, i = () => {
    const l = o + 1;
    t == null || t(e.id, l);
  };
  return /* @__PURE__ */ R.jsx(
    si,
    {
      variant: e.variant || "default",
      size: e.size || "default",
      disabled: e.disabled || !1,
      onClick: i,
      onMouseDown: (l) => l.stopPropagation(),
      onPointerDown: (l) => l.stopPropagation(),
      className: "w-full",
      children: e.label
    }
  );
}
function sV({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function aV({ component: e }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: "component-spacer",
      style: {
        width: e.size,
        height: e.size
      }
    }
  );
}
function lV({
  cell: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = e.layout || { type: "flex", direction: "column" }, i = uV(e), a = cV(o);
  return /* @__PURE__ */ R.jsx("div", { className: "nested-grid-cell", style: i, children: /* @__PURE__ */ R.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => /* @__PURE__ */ R.jsx(
    aA,
    {
      component: l,
      nodeId: t,
      onValueChange: n
    },
    l.id
  )) }) });
}
function uV(e) {
  return {
    gridRow: `${e.coordinates.row} / span ${e.coordinates.row_span || 1}`,
    gridColumn: `${e.coordinates.col} / span ${e.coordinates.col_span || 1}`
  };
}
function cV(e) {
  return !e || e.type === "flex" || !e.type ? {
    display: "flex",
    flexDirection: (e == null ? void 0 : e.direction) || "column",
    alignItems: (e == null ? void 0 : e.align) || "start",
    justifyContent: (e == null ? void 0 : e.justify) || "start",
    gap: (e == null ? void 0 : e.gap) || "4px"
  } : e.type === "grid" ? {
    display: "grid",
    gap: e.gap || "4px",
    alignItems: e.align || "start",
    justifyContent: e.justify || "start"
  } : e.type === "stack" ? {
    display: "flex",
    flexDirection: "column",
    gap: e.gap || "4px"
  } : {};
}
function fV({
  component: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = {
    display: "grid",
    gridTemplateRows: e.rows.join(" "),
    gridTemplateColumns: e.columns.join(" "),
    gap: e.gap || "8px",
    minHeight: e.minHeight,
    minWidth: e.minWidth
  };
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `nested-grid ${e.className || ""}`,
      style: o,
      children: e.cells.map((i) => /* @__PURE__ */ R.jsx(
        lV,
        {
          cell: i,
          nodeId: t,
          onValueChange: n
        },
        i.id
      ))
    }
  );
}
function aA({ component: e, nodeId: t, onValueChange: n }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ R.jsx(Tu, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ R.jsx(EP, { component: e });
    case "button-handle":
      return /* @__PURE__ */ R.jsx(CP, { component: e });
    case "text":
      return /* @__PURE__ */ R.jsx(SF, { component: e, onValueChange: n });
    case "number":
      return /* @__PURE__ */ R.jsx(CF, { component: e, onValueChange: n });
    case "bool":
      return /* @__PURE__ */ R.jsx(g4, { component: e, onValueChange: n });
    case "select":
      return /* @__PURE__ */ R.jsx(D5, { component: e, onValueChange: n });
    case "progress":
      return /* @__PURE__ */ R.jsx(tV, { component: e, onValueChange: n });
    case "header":
      return /* @__PURE__ */ R.jsx(nV, { component: e });
    case "footer":
      return /* @__PURE__ */ R.jsx(rV, { component: e });
    case "button":
      return /* @__PURE__ */ R.jsx(iV, { component: e, onValueChange: n });
    case "divider":
      return /* @__PURE__ */ R.jsx(sV, { component: e });
    case "spacer":
      return /* @__PURE__ */ R.jsx(aV, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ R.jsx(fV, { component: e, nodeId: t, onValueChange: n });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function dV({ grid: e, nodeId: t, onValueChange: n }) {
  const o = {
    display: "grid",
    gridTemplateRows: e.rows.join(" "),
    gridTemplateColumns: e.columns.join(" "),
    gap: e.gap || "8px",
    width: "100%",
    height: "100%"
  };
  return /* @__PURE__ */ R.jsx("div", { className: "node-grid", style: o, children: e.cells.map((i) => /* @__PURE__ */ R.jsx(
    "div",
    {
      className: "grid-cell",
      style: {
        gridRow: `${i.coordinates.row} / span ${i.coordinates.row_span || 1}`,
        gridColumn: `${i.coordinates.col} / span ${i.coordinates.col_span || 1}`
      },
      children: /* @__PURE__ */ R.jsx(
        hV,
        {
          cell: i,
          nodeId: t,
          onValueChange: n
        }
      )
    },
    i.id
  )) });
}
function hV({ cell: e, nodeId: t, onValueChange: n }) {
  const o = e.layout || { type: "flex", direction: "column" }, i = pV(o);
  return /* @__PURE__ */ R.jsx("div", { className: "grid-cell-content", style: i, children: e.components.map((a) => /* @__PURE__ */ R.jsx(
    aA,
    {
      component: a,
      nodeId: t,
      onValueChange: n
    },
    a.id
  )) });
}
function pV(e) {
  return e.type === "flex" || !e.type ? {
    display: "flex",
    flexDirection: e.direction || "column",
    alignItems: e.align || "start",
    justifyContent: e.justify || "start",
    gap: e.gap || "4px"
  } : e.type === "grid" ? {
    display: "grid",
    gap: e.gap || "4px",
    alignItems: e.align || "start",
    justifyContent: e.justify || "start"
  } : e.type === "stack" ? {
    display: "flex",
    flexDirection: "column",
    gap: e.gap || "4px"
  } : {};
}
function lA({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card",
      className: Me(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
class t0 {
  constructor(t, n, o = "Node") {
    bl(this, "grid");
    bl(this, "style");
    bl(this, "label");
    if (this.grid = t, this.style = n, this.label = o, !t)
      throw new Error("'grid' property is required in node definition.");
  }
  /**
   * Build style configuration and compute CSS properties
   */
  buildStyleConfig() {
    const { style: t } = this, n = {};
    t != null && t.minWidth && (n.minWidth = typeof t.minWidth == "number" ? `${t.minWidth}px` : t.minWidth), t != null && t.maxWidth && (n.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), t != null && t.borderRadius && (n.borderRadius = t.borderRadius);
    const o = t != null && t.shadow ? `shadow-${t.shadow}` : "shadow-md";
    return {
      style: n,
      className: Me(
        "min-w-[200px] border-2 transition-all overflow-hidden p-0 gap-0",
        o,
        t == null ? void 0 : t.className
      )
    };
  }
  /**
   * Build the complete React component
   * 
   * Returns a memoized component that only re-renders when necessary
   * (when id, selected, or values change).
   */
  buildComponent() {
    const { grid: t, label: n } = this, o = this.buildStyleConfig(), i = ({ id: a, data: l, selected: u }) => {
      const f = l, d = fU(), h = k.useCallback((v, E) => {
        d((y) => ({
          ...y,
          [a]: { ...y[a], [v]: E }
        }));
      }, [a, d]), p = f.grid || t, m = k.useMemo(() => ({
        nodeId: a,
        nodeData: f || { label: n, grid: t, values: {} },
        onValueChange: h
      }), [a, f, h]);
      return /* @__PURE__ */ R.jsx(
        lA,
        {
          className: Me(
            o.className,
            u && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: o.style,
          children: /* @__PURE__ */ R.jsx(kP.Provider, { value: m, children: /* @__PURE__ */ R.jsx(
            dV,
            {
              grid: p,
              nodeId: a,
              onValueChange: h
            }
          ) })
        }
      );
    };
    return k.memo(i, (a, l) => {
      if (a.id !== l.id || a.selected !== l.selected)
        return !1;
      const u = a.data.values, f = l.data.values;
      return u === f ? !0 : !u || !f ? u === f : JSON.stringify(u) === JSON.stringify(f);
    });
  }
  /**
   * Static helper to build a component from grid and style in one call
   */
  static buildComponent(t, n, o = "Node") {
    return new t0(t, n, o).buildComponent();
  }
}
function gV(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = t0.buildComponent(
        n.definition.grid,
        n.definition.style,
        n.label
      );
    } catch (o) {
      throw typeof process.env.VITEST > "u" && console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
const Ad = 768;
function mV() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Ad - 1}px)`), o = () => {
      t(window.innerWidth < Ad);
    };
    return n.addEventListener("change", o), t(window.innerWidth < Ad), () => n.removeEventListener("change", o);
  }, []), !!e;
}
// @__NO_SIDE_EFFECTS__
function vV(e) {
  const t = /* @__PURE__ */ yV(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(wV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function yV(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = bV(i), u = _V(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? xi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xV = Symbol("radix.slottable");
function wV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xV;
}
function _V(e, t) {
  const n = { ...t };
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...u) => {
      const f = a(...u);
      return i(...u), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...a } : o === "className" && (n[o] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function bV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vu = "Dialog", [uA] = wi(Vu), [SV, xn] = uA(Vu), cA = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, u = k.useRef(null), f = k.useRef(null), [d, h] = Bs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Vu
  });
  return /* @__PURE__ */ R.jsx(
    SV,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: io(),
      titleId: io(),
      descriptionId: io(),
      open: d,
      onOpenChange: h,
      onOpenToggle: k.useCallback(() => h((p) => !p), [h]),
      modal: l,
      children: n
    }
  );
};
cA.displayName = Vu;
var fA = "DialogTrigger", EV = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(fA, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ R.jsx(
      je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": o0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
EV.displayName = fA;
var n0 = "DialogPortal", [CV, dA] = uA(n0, {
  forceMount: void 0
}), hA = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = xn(n0, t);
  return /* @__PURE__ */ R.jsx(CV, { scope: t, forceMount: n, children: k.Children.map(o, (l) => /* @__PURE__ */ R.jsx(go, { present: n || a.open, children: /* @__PURE__ */ R.jsx(qu, { asChild: !0, container: i, children: l }) })) });
};
hA.displayName = n0;
var mu = "DialogOverlay", pA = k.forwardRef(
  (e, t) => {
    const n = dA(mu, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = xn(mu, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ R.jsx(go, { present: o || a.open, children: /* @__PURE__ */ R.jsx(NV, { ...i, ref: t }) }) : null;
  }
);
pA.displayName = mu;
var kV = /* @__PURE__ */ vV("DialogOverlay.RemoveScroll"), NV = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(mu, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ R.jsx(Qy, { as: kV, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ R.jsx(
        je.div,
        {
          "data-state": o0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), po = "DialogContent", gA = k.forwardRef(
  (e, t) => {
    const n = dA(po, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = xn(po, e.__scopeDialog);
    return /* @__PURE__ */ R.jsx(go, { present: o || a.open, children: a.modal ? /* @__PURE__ */ R.jsx(RV, { ...i, ref: t }) : /* @__PURE__ */ R.jsx(PV, { ...i, ref: t }) });
  }
);
gA.displayName = po;
var RV = k.forwardRef(
  (e, t) => {
    const n = xn(po, e.__scopeDialog), o = k.useRef(null), i = Be(t, n.contentRef, o);
    return k.useEffect(() => {
      const a = o.current;
      if (a) return yT(a);
    }, []), /* @__PURE__ */ R.jsx(
      mA,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Le(e.onCloseAutoFocus, (a) => {
          var l;
          a.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: Le(e.onPointerDownOutside, (a) => {
          const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && a.preventDefault();
        }),
        onFocusOutside: Le(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), PV = k.forwardRef(
  (e, t) => {
    const n = xn(po, e.__scopeDialog), o = k.useRef(!1), i = k.useRef(!1);
    return /* @__PURE__ */ R.jsx(
      mA,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, a), a.defaultPrevented || (o.current || (u = n.triggerRef.current) == null || u.focus(), a.preventDefault()), o.current = !1, i.current = !1;
        },
        onInteractOutside: (a) => {
          var f, d;
          (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const l = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
        }
      }
    );
  }
), mA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = xn(po, n), f = k.useRef(null), d = Be(t, f);
    return BP(), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        By,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ R.jsx(
            Iu,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": o0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx(TV, { titleId: u.titleId }),
        /* @__PURE__ */ R.jsx(IV, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), r0 = "DialogTitle", vA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(r0, n);
    return /* @__PURE__ */ R.jsx(je.h2, { id: i.titleId, ...o, ref: t });
  }
);
vA.displayName = r0;
var yA = "DialogDescription", xA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(yA, n);
    return /* @__PURE__ */ R.jsx(je.p, { id: i.descriptionId, ...o, ref: t });
  }
);
xA.displayName = yA;
var wA = "DialogClose", _A = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(wA, n);
    return /* @__PURE__ */ R.jsx(
      je.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Le(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
_A.displayName = wA;
function o0(e) {
  return e ? "open" : "closed";
}
var bA = "DialogTitleWarning", [gU, SA] = kF(bA, {
  contentName: po,
  titleName: r0,
  docsSlug: "dialog"
}), TV = ({ titleId: e }) => {
  const t = SA(bA), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, AV = "DialogDescriptionWarning", IV = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${SA(AV).contentName}}.`;
  return k.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, MV = cA, OV = hA, LV = pA, DV = gA, jV = vA, qV = xA, zV = _A;
function FV({ ...e }) {
  return /* @__PURE__ */ R.jsx(MV, { "data-slot": "sheet", ...e });
}
function $V({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(OV, { "data-slot": "sheet-portal", ...e });
}
function BV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    LV,
    {
      "data-slot": "sheet-overlay",
      className: Me(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function VV({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ R.jsxs($V, { children: [
    /* @__PURE__ */ R.jsx(BV, {}),
    /* @__PURE__ */ R.jsxs(
      DV,
      {
        "data-slot": "sheet-content",
        className: Me(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...o,
        children: [
          t,
          /* @__PURE__ */ R.jsxs(zV, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ R.jsx(p4, { className: "size-4" }),
            /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function HV({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Me("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function WV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    jV,
    {
      "data-slot": "sheet-title",
      className: Me("text-foreground font-semibold", e),
      ...t
    }
  );
}
function UV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    qV,
    {
      "data-slot": "sheet-description",
      className: Me("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var GV = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function YV(e) {
  const t = ({ children: n }) => /* @__PURE__ */ R.jsx(R.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = GV, t;
}
var [Hu] = wi("Tooltip", [
  ju
]), Wu = ju(), EA = "TooltipProvider", KV = 700, wy = "tooltip.open", [XV, i0] = Hu(EA), CA = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = KV,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = k.useRef(!0), u = k.useRef(!1), f = k.useRef(0);
  return k.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ R.jsx(
    XV,
    {
      scope: t,
      isOpenDelayedRef: l,
      delayDuration: n,
      onOpen: k.useCallback(() => {
        window.clearTimeout(f.current), l.current = !1;
      }, []),
      onClose: k.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => l.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: k.useCallback((d) => {
        u.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
CA.displayName = EA;
var Ws = "Tooltip", [QV, na] = Hu(Ws), kA = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = i0(Ws, e.__scopeTooltip), d = Wu(t), [h, p] = k.useState(null), m = io(), v = k.useRef(0), E = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, w = k.useRef(!1), [_, C] = Bs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (I) => {
      I ? (f.onOpen(), document.dispatchEvent(new CustomEvent(wy))) : f.onClose(), a == null || a(I);
    },
    caller: Ws
  }), b = k.useMemo(() => _ ? w.current ? "delayed-open" : "instant-open" : "closed", [_]), N = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, w.current = !1, C(!0);
  }, [C]), P = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), A = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      w.current = !0, C(!0), v.current = 0;
    }, y);
  }, [y, C]);
  return k.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ R.jsx(fT, { ...d, children: /* @__PURE__ */ R.jsx(
    QV,
    {
      scope: t,
      contentId: m,
      open: _,
      stateAttribute: b,
      trigger: h,
      onTriggerChange: p,
      onTriggerEnter: k.useCallback(() => {
        f.isOpenDelayedRef.current ? A() : N();
      }, [f.isOpenDelayedRef, A, N]),
      onTriggerLeave: k.useCallback(() => {
        E ? P() : (window.clearTimeout(v.current), v.current = 0);
      }, [P, E]),
      onOpen: N,
      onClose: P,
      disableHoverableContent: E,
      children: n
    }
  ) });
};
kA.displayName = Ws;
var _y = "TooltipTrigger", NA = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = na(_y, n), a = i0(_y, n), l = Wu(n), u = k.useRef(null), f = Be(t, u, i.onTriggerChange), d = k.useRef(!1), h = k.useRef(!1), p = k.useCallback(() => d.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ R.jsx(dT, { asChild: !0, ...l, children: /* @__PURE__ */ R.jsx(
      je.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: Le(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !h.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), h.current = !0);
        }),
        onPointerLeave: Le(e.onPointerLeave, () => {
          i.onTriggerLeave(), h.current = !1;
        }),
        onPointerDown: Le(e.onPointerDown, () => {
          i.open && i.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: Le(e.onFocus, () => {
          d.current || i.onOpen();
        }),
        onBlur: Le(e.onBlur, i.onClose),
        onClick: Le(e.onClick, i.onClose)
      }
    ) });
  }
);
NA.displayName = _y;
var s0 = "TooltipPortal", [ZV, JV] = Hu(s0, {
  forceMount: void 0
}), RA = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = na(s0, t);
  return /* @__PURE__ */ R.jsx(ZV, { scope: t, forceMount: n, children: /* @__PURE__ */ R.jsx(go, { present: n || a.open, children: /* @__PURE__ */ R.jsx(qu, { asChild: !0, container: i, children: o }) }) });
};
RA.displayName = s0;
var gi = "TooltipContent", PA = k.forwardRef(
  (e, t) => {
    const n = JV(gi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = na(gi, e.__scopeTooltip);
    return /* @__PURE__ */ R.jsx(go, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ R.jsx(TA, { side: i, ...a, ref: t }) : /* @__PURE__ */ R.jsx(eH, { side: i, ...a, ref: t }) });
  }
), eH = k.forwardRef((e, t) => {
  const n = na(gi, e.__scopeTooltip), o = i0(gi, e.__scopeTooltip), i = k.useRef(null), a = Be(t, i), [l, u] = k.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = k.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = k.useCallback(
    (E, y) => {
      const w = E.currentTarget, _ = { x: E.clientX, y: E.clientY }, C = oH(_, w.getBoundingClientRect()), b = iH(_, C), N = sH(y.getBoundingClientRect()), P = lH([...b, ...N]);
      u(P), p(!0);
    },
    [p]
  );
  return k.useEffect(() => () => m(), [m]), k.useEffect(() => {
    if (f && h) {
      const E = (w) => v(w, h), y = (w) => v(w, f);
      return f.addEventListener("pointerleave", E), h.addEventListener("pointerleave", y), () => {
        f.removeEventListener("pointerleave", E), h.removeEventListener("pointerleave", y);
      };
    }
  }, [f, h, v, m]), k.useEffect(() => {
    if (l) {
      const E = (y) => {
        const w = y.target, _ = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(w)) || (h == null ? void 0 : h.contains(w)), b = !aH(_, l);
        C ? m() : b && (m(), d());
      };
      return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ R.jsx(TA, { ...e, ref: a });
}), [tH, nH] = Hu(Ws, { isInside: !1 }), rH = /* @__PURE__ */ YV("TooltipContent"), TA = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = na(gi, n), d = Wu(n), { onClose: h } = f;
    return k.useEffect(() => (document.addEventListener(wy, h), () => document.removeEventListener(wy, h)), [h]), k.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ R.jsx(
      Iu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ R.jsxs(
          hT,
          {
            "data-state": f.stateAttribute,
            ...d,
            ...u,
            ref: t,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ R.jsx(rH, { children: o }),
              /* @__PURE__ */ R.jsx(tH, { scope: n, isInside: !0, children: /* @__PURE__ */ R.jsx(hB, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
PA.displayName = gi;
var AA = "TooltipArrow", IA = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = Wu(n);
    return nH(
      AA,
      n
    ).isInside ? null : /* @__PURE__ */ R.jsx(pT, { ...i, ...o, ref: t });
  }
);
IA.displayName = AA;
function oH(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, i, a)) {
    case a:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function iH(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function sH(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function aH(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function lH(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), uH(t);
}
function uH(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], l = t[t.length - 2];
      if ((a.x - l.x) * (i.y - l.y) >= (a.y - l.y) * (i.x - l.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const i = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], l = n[n.length - 2];
      if ((a.x - l.x) * (i.y - l.y) >= (a.y - l.y) * (i.x - l.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var cH = CA, fH = kA, dH = NA, hH = RA, pH = PA, gH = IA;
function MA({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    cH,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function mH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(MA, { children: /* @__PURE__ */ R.jsx(fH, { "data-slot": "tooltip", ...e }) });
}
function vH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(dH, { "data-slot": "tooltip-trigger", ...e });
}
function yH({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsx(hH, { children: /* @__PURE__ */ R.jsxs(
    pH,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: Me(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(gH, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const xH = "sidebar_state", wH = 3600 * 24 * 7, _H = "16rem", bH = "18rem", SH = "3rem", EH = "b", OA = k.createContext(null);
function a0() {
  const e = k.useContext(OA);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function CH({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = mV(), [f, d] = k.useState(!1), [h, p] = k.useState(e), m = t ?? h, v = k.useCallback(
    (_) => {
      const C = typeof _ == "function" ? _(m) : _;
      n ? n(C) : p(C), document.cookie = `${xH}=${C}; path=/; max-age=${wH}`;
    },
    [n, m]
  ), E = k.useCallback(() => u ? d((_) => !_) : v((_) => !_), [u, v, d]);
  k.useEffect(() => {
    const _ = (C) => {
      C.key === EH && (C.metaKey || C.ctrlKey) && (C.preventDefault(), E());
    };
    return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
  }, [E]);
  const y = m ? "expanded" : "collapsed", w = k.useMemo(
    () => ({
      state: y,
      open: m,
      setOpen: v,
      isMobile: u,
      openMobile: f,
      setOpenMobile: d,
      toggleSidebar: E
    }),
    [y, m, v, u, f, d, E]
  );
  return /* @__PURE__ */ R.jsx(OA.Provider, { value: w, children: /* @__PURE__ */ R.jsx(MA, { delayDuration: 0, children: /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": _H,
        "--sidebar-width-icon": SH,
        ...i
      },
      className: Me(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...l,
      children: a
    }
  ) }) });
}
function kH({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = a0();
  return n === "none" ? /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: Me(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...a,
      children: i
    }
  ) : l ? /* @__PURE__ */ R.jsx(FV, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ R.jsxs(
    VV,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": bH
      },
      side: e,
      children: [
        /* @__PURE__ */ R.jsxs(HV, { className: "sr-only", children: [
          /* @__PURE__ */ R.jsx(WV, { children: "Sidebar" }),
          /* @__PURE__ */ R.jsx(UV, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ R.jsx("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ R.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: Me(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ R.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: Me(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              o
            ),
            ...a,
            children: /* @__PURE__ */ R.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: i
              }
            )
          }
        )
      ]
    }
  );
}
function NH({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = a0();
  return /* @__PURE__ */ R.jsxs(
    si,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: Me("size-7", e),
      onClick: (i) => {
        t == null || t(i), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ R.jsx(l4, {}),
        /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function RH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Me("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function PH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: Me(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function TH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Me("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function AH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: Me("w-full text-sm", e),
      ...t
    }
  );
}
function IH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: Me("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function MH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Me("group/menu-item relative", e),
      ...t
    }
  );
}
const OH = sA(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function LH({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? eA : "button", { isMobile: f, state: d } = a0(), h = /* @__PURE__ */ R.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Me(OH({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ R.jsxs(mH, { children: [
    /* @__PURE__ */ R.jsx(vH, { asChild: !0, children: h }),
    /* @__PURE__ */ R.jsx(
      yH,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function DH({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ R.jsx(PH, { children: /* @__PURE__ */ R.jsx(TH, { children: /* @__PURE__ */ R.jsx(AH, { children: /* @__PURE__ */ R.jsx(IH, { children: t.map((n, o) => /* @__PURE__ */ R.jsx(MH, { children: /* @__PURE__ */ R.jsxs(
    LH,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ R.jsx(c4, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ R.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function jH({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ R.jsxs(si, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ R.jsx(s4, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ R.jsxs(si, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(ZF, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ R.jsxs(si, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(e4, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function qH({ x: e, y: t, onDelete: n, onClose: o }) {
  return Zt.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ R.jsx(
    lA,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ R.jsxs(
        si,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ R.jsx(d4, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function zH({
  nodes: e,
  edges: t,
  nodeTypes: n,
  height: o,
  onNodesChange: i,
  onEdgesChange: a,
  onConnect: l,
  onNodeContextMenu: u,
  onEdgeContextMenu: f,
  onPaneClick: d,
  contextMenu: h,
  onDelete: p,
  onCloseContextMenu: m,
  onExport: v,
  onLayoutVertical: E,
  onLayoutHorizontal: y
}) {
  return /* @__PURE__ */ R.jsxs("div", { style: { width: "100%", height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ R.jsxs(
      oz,
      {
        nodes: e,
        edges: t,
        nodeTypes: n,
        onNodesChange: i,
        onEdgesChange: a,
        onConnect: l,
        onNodeContextMenu: u,
        onEdgeContextMenu: f,
        onPaneClick: d,
        fitView: !0,
        nodesDraggable: !0,
        nodesConnectable: !0,
        elementsSelectable: !0,
        minZoom: 0.1,
        maxZoom: 2,
        children: [
          /* @__PURE__ */ R.jsx(uz, {}),
          /* @__PURE__ */ R.jsx(mz, {}),
          /* @__PURE__ */ R.jsx(ea, { position: "top-right", children: /* @__PURE__ */ R.jsx(
            jH,
            {
              onExport: v,
              onLayoutVertical: E,
              onLayoutHorizontal: y
            }
          ) })
        ]
      }
    ),
    h && /* @__PURE__ */ R.jsx(
      qH,
      {
        id: h.id,
        type: h.type,
        x: h.x,
        y: h.y,
        onDelete: p,
        onClose: m
      }
    )
  ] });
}
function l0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Id, Z_;
function FH() {
  if (Z_) return Id;
  Z_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Id = e, Id;
}
var Md, J_;
function Ei() {
  if (J_) return Md;
  J_ = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Md = e, Md;
}
var Od, eb;
function Uu() {
  if (eb) return Od;
  eb = 1;
  var e = Ei();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return Od = t, Od;
}
var Ld, tb;
function $H() {
  if (tb) return Ld;
  tb = 1;
  var e = Uu(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return Ld = o, Ld;
}
var Dd, nb;
function BH() {
  if (nb) return Dd;
  nb = 1;
  var e = Uu();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return Dd = t, Dd;
}
var jd, rb;
function VH() {
  if (rb) return jd;
  rb = 1;
  var e = Uu();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return jd = t, jd;
}
var qd, ob;
function HH() {
  if (ob) return qd;
  ob = 1;
  var e = Uu();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return qd = t, qd;
}
var zd, ib;
function Gu() {
  if (ib) return zd;
  ib = 1;
  var e = FH(), t = $H(), n = BH(), o = VH(), i = HH();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, zd = a, zd;
}
var Fd, sb;
function WH() {
  if (sb) return Fd;
  sb = 1;
  var e = Gu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Fd = t, Fd;
}
var $d, ab;
function UH() {
  if (ab) return $d;
  ab = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return $d = e, $d;
}
var Bd, lb;
function GH() {
  if (lb) return Bd;
  lb = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Bd = e, Bd;
}
var Vd, ub;
function YH() {
  if (ub) return Vd;
  ub = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Vd = e, Vd;
}
var Hd, cb;
function LA() {
  if (cb) return Hd;
  cb = 1;
  var e = typeof Sl == "object" && Sl && Sl.Object === Object && Sl;
  return Hd = e, Hd;
}
var Wd, fb;
function wn() {
  if (fb) return Wd;
  fb = 1;
  var e = LA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Wd = n, Wd;
}
var Ud, db;
function Ci() {
  if (db) return Ud;
  db = 1;
  var e = wn(), t = e.Symbol;
  return Ud = t, Ud;
}
var Gd, hb;
function KH() {
  if (hb) return Gd;
  hb = 1;
  var e = Ci(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, i = e ? e.toStringTag : void 0;
  function a(l) {
    var u = n.call(l, i), f = l[i];
    try {
      l[i] = void 0;
      var d = !0;
    } catch {
    }
    var h = o.call(l);
    return d && (u ? l[i] = f : delete l[i]), h;
  }
  return Gd = a, Gd;
}
var Yd, pb;
function XH() {
  if (pb) return Yd;
  pb = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return Yd = n, Yd;
}
var Kd, gb;
function mo() {
  if (gb) return Kd;
  gb = 1;
  var e = Ci(), t = KH(), n = XH(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return Kd = l, Kd;
}
var Xd, mb;
function Jt() {
  if (mb) return Xd;
  mb = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Xd = e, Xd;
}
var Qd, vb;
function ra() {
  if (vb) return Qd;
  vb = 1;
  var e = mo(), t = Jt(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return Qd = l, Qd;
}
var Zd, yb;
function QH() {
  if (yb) return Zd;
  yb = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Zd = t, Zd;
}
var Jd, xb;
function ZH() {
  if (xb) return Jd;
  xb = 1;
  var e = QH(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return Jd = n, Jd;
}
var eh, wb;
function DA() {
  if (wb) return eh;
  wb = 1;
  var e = Function.prototype, t = e.toString;
  function n(o) {
    if (o != null) {
      try {
        return t.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  return eh = n, eh;
}
var th, _b;
function JH() {
  if (_b) return th;
  _b = 1;
  var e = ra(), t = ZH(), n = Jt(), o = DA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!n(m) || t(m))
      return !1;
    var v = e(m) ? h : a;
    return v.test(o(m));
  }
  return th = p, th;
}
var nh, bb;
function e8() {
  if (bb) return nh;
  bb = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return nh = e, nh;
}
var rh, Sb;
function vo() {
  if (Sb) return rh;
  Sb = 1;
  var e = JH(), t = e8();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return rh = n, rh;
}
var oh, Eb;
function u0() {
  if (Eb) return oh;
  Eb = 1;
  var e = vo(), t = wn(), n = e(t, "Map");
  return oh = n, oh;
}
var ih, Cb;
function Yu() {
  if (Cb) return ih;
  Cb = 1;
  var e = vo(), t = e(Object, "create");
  return ih = t, ih;
}
var sh, kb;
function t8() {
  if (kb) return sh;
  kb = 1;
  var e = Yu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return sh = t, sh;
}
var ah, Nb;
function n8() {
  if (Nb) return ah;
  Nb = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ah = e, ah;
}
var lh, Rb;
function r8() {
  if (Rb) return lh;
  Rb = 1;
  var e = Yu(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return lh = i, lh;
}
var uh, Pb;
function o8() {
  if (Pb) return uh;
  Pb = 1;
  var e = Yu(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return uh = o, uh;
}
var ch, Tb;
function i8() {
  if (Tb) return ch;
  Tb = 1;
  var e = Yu(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return ch = n, ch;
}
var fh, Ab;
function s8() {
  if (Ab) return fh;
  Ab = 1;
  var e = t8(), t = n8(), n = r8(), o = o8(), i = i8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, fh = a, fh;
}
var dh, Ib;
function a8() {
  if (Ib) return dh;
  Ib = 1;
  var e = s8(), t = Gu(), n = u0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return dh = o, dh;
}
var hh, Mb;
function l8() {
  if (Mb) return hh;
  Mb = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return hh = e, hh;
}
var ph, Ob;
function Ku() {
  if (Ob) return ph;
  Ob = 1;
  var e = l8();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return ph = t, ph;
}
var gh, Lb;
function u8() {
  if (Lb) return gh;
  Lb = 1;
  var e = Ku();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return gh = t, gh;
}
var mh, Db;
function c8() {
  if (Db) return mh;
  Db = 1;
  var e = Ku();
  function t(n) {
    return e(this, n).get(n);
  }
  return mh = t, mh;
}
var vh, jb;
function f8() {
  if (jb) return vh;
  jb = 1;
  var e = Ku();
  function t(n) {
    return e(this, n).has(n);
  }
  return vh = t, vh;
}
var yh, qb;
function d8() {
  if (qb) return yh;
  qb = 1;
  var e = Ku();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return yh = t, yh;
}
var xh, zb;
function c0() {
  if (zb) return xh;
  zb = 1;
  var e = a8(), t = u8(), n = c8(), o = f8(), i = d8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, xh = a, xh;
}
var wh, Fb;
function h8() {
  if (Fb) return wh;
  Fb = 1;
  var e = Gu(), t = u0(), n = c0(), o = 200;
  function i(a, l) {
    var u = this.__data__;
    if (u instanceof e) {
      var f = u.__data__;
      if (!t || f.length < o - 1)
        return f.push([a, l]), this.size = ++u.size, this;
      u = this.__data__ = new n(f);
    }
    return u.set(a, l), this.size = u.size, this;
  }
  return wh = i, wh;
}
var _h, $b;
function Xu() {
  if ($b) return _h;
  $b = 1;
  var e = Gu(), t = WH(), n = UH(), o = GH(), i = YH(), a = h8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, _h = l, _h;
}
var bh, Bb;
function f0() {
  if (Bb) return bh;
  Bb = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return bh = e, bh;
}
var Sh, Vb;
function jA() {
  if (Vb) return Sh;
  Vb = 1;
  var e = vo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Sh = t, Sh;
}
var Eh, Hb;
function Qu() {
  if (Hb) return Eh;
  Hb = 1;
  var e = jA();
  function t(n, o, i) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[o] = i;
  }
  return Eh = t, Eh;
}
var Ch, Wb;
function Zu() {
  if (Wb) return Ch;
  Wb = 1;
  var e = Qu(), t = Ei(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Ch = i, Ch;
}
var kh, Ub;
function oa() {
  if (Ub) return kh;
  Ub = 1;
  var e = Zu(), t = Qu();
  function n(o, i, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = i.length; ++f < d; ) {
      var h = i[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return kh = n, kh;
}
var Nh, Gb;
function p8() {
  if (Gb) return Nh;
  Gb = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return Nh = e, Nh;
}
var Rh, Yb;
function jn() {
  if (Yb) return Rh;
  Yb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Rh = e, Rh;
}
var Ph, Kb;
function g8() {
  if (Kb) return Ph;
  Kb = 1;
  var e = mo(), t = jn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Ph = o, Ph;
}
var Th, Xb;
function ia() {
  if (Xb) return Th;
  Xb = 1;
  var e = g8(), t = jn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return Th = a, Th;
}
var Ah, Qb;
function rt() {
  if (Qb) return Ah;
  Qb = 1;
  var e = Array.isArray;
  return Ah = e, Ah;
}
var ks = { exports: {} }, Ih, Zb;
function m8() {
  if (Zb) return Ih;
  Zb = 1;
  function e() {
    return !1;
  }
  return Ih = e, Ih;
}
ks.exports;
var Jb;
function ki() {
  return Jb || (Jb = 1, (function(e, t) {
    var n = wn(), o = m8(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ks, ks.exports)), ks.exports;
}
var Mh, eS;
function Ju() {
  if (eS) return Mh;
  eS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return Mh = n, Mh;
}
var Oh, tS;
function d0() {
  if (tS) return Oh;
  tS = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Oh = t, Oh;
}
var Lh, nS;
function v8() {
  if (nS) return Lh;
  nS = 1;
  var e = mo(), t = d0(), n = jn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", E = "[object String]", y = "[object WeakMap]", w = "[object ArrayBuffer]", _ = "[object DataView]", C = "[object Float32Array]", b = "[object Float64Array]", N = "[object Int8Array]", P = "[object Int16Array]", A = "[object Int32Array]", I = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", H = "[object Uint32Array]", q = {};
  q[C] = q[b] = q[N] = q[P] = q[A] = q[I] = q[O] = q[D] = q[H] = !0, q[o] = q[i] = q[w] = q[a] = q[_] = q[l] = q[u] = q[f] = q[d] = q[h] = q[p] = q[m] = q[v] = q[E] = q[y] = !1;
  function B(X) {
    return n(X) && t(X.length) && !!q[e(X)];
  }
  return Lh = B, Lh;
}
var Dh, rS;
function ec() {
  if (rS) return Dh;
  rS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Dh = e, Dh;
}
var Ns = { exports: {} };
Ns.exports;
var oS;
function h0() {
  return oS || (oS = 1, (function(e, t) {
    var n = LA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Ns, Ns.exports)), Ns.exports;
}
var jh, iS;
function sa() {
  if (iS) return jh;
  iS = 1;
  var e = v8(), t = ec(), n = h0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return jh = i, jh;
}
var qh, sS;
function qA() {
  if (sS) return qh;
  sS = 1;
  var e = p8(), t = ia(), n = rt(), o = ki(), i = Ju(), a = sa(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = n(d), m = !p && t(d), v = !p && !m && o(d), E = !p && !m && !v && a(d), y = p || m || v || E, w = y ? e(d.length, String) : [], _ = w.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      i(C, _))) && w.push(C);
    return w;
  }
  return qh = f, qh;
}
var zh, aS;
function tc() {
  if (aS) return zh;
  aS = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return zh = t, zh;
}
var Fh, lS;
function zA() {
  if (lS) return Fh;
  lS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Fh = e, Fh;
}
var $h, uS;
function y8() {
  if (uS) return $h;
  uS = 1;
  var e = zA(), t = e(Object.keys, Object);
  return $h = t, $h;
}
var Bh, cS;
function p0() {
  if (cS) return Bh;
  cS = 1;
  var e = tc(), t = y8(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Bh = i, Bh;
}
var Vh, fS;
function er() {
  if (fS) return Vh;
  fS = 1;
  var e = ra(), t = d0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Vh = n, Vh;
}
var Hh, dS;
function Lr() {
  if (dS) return Hh;
  dS = 1;
  var e = qA(), t = p0(), n = er();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return Hh = o, Hh;
}
var Wh, hS;
function x8() {
  if (hS) return Wh;
  hS = 1;
  var e = oa(), t = Lr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Wh = n, Wh;
}
var Uh, pS;
function w8() {
  if (pS) return Uh;
  pS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return Uh = e, Uh;
}
var Gh, gS;
function _8() {
  if (gS) return Gh;
  gS = 1;
  var e = Jt(), t = tc(), n = w8(), o = Object.prototype, i = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return n(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !i.call(l, d)) || f.push(d);
    return f;
  }
  return Gh = a, Gh;
}
var Yh, mS;
function yo() {
  if (mS) return Yh;
  mS = 1;
  var e = qA(), t = _8(), n = er();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return Yh = o, Yh;
}
var Kh, vS;
function b8() {
  if (vS) return Kh;
  vS = 1;
  var e = oa(), t = yo();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Kh = n, Kh;
}
var Rs = { exports: {} };
Rs.exports;
var yS;
function FA() {
  return yS || (yS = 1, (function(e, t) {
    var n = wn(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var p = d.length, m = u ? u(p) : new d.constructor(p);
      return d.copy(m), m;
    }
    e.exports = f;
  })(Rs, Rs.exports)), Rs.exports;
}
var Xh, xS;
function $A() {
  if (xS) return Xh;
  xS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return Xh = e, Xh;
}
var Qh, wS;
function BA() {
  if (wS) return Qh;
  wS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Qh = e, Qh;
}
var Zh, _S;
function VA() {
  if (_S) return Zh;
  _S = 1;
  function e() {
    return [];
  }
  return Zh = e, Zh;
}
var Jh, bS;
function g0() {
  if (bS) return Jh;
  bS = 1;
  var e = BA(), t = VA(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Jh = a, Jh;
}
var ep, SS;
function S8() {
  if (SS) return ep;
  SS = 1;
  var e = oa(), t = g0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return ep = n, ep;
}
var tp, ES;
function m0() {
  if (ES) return tp;
  ES = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return tp = e, tp;
}
var np, CS;
function nc() {
  if (CS) return np;
  CS = 1;
  var e = zA(), t = e(Object.getPrototypeOf, Object);
  return np = t, np;
}
var rp, kS;
function HA() {
  if (kS) return rp;
  kS = 1;
  var e = m0(), t = nc(), n = g0(), o = VA(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return rp = a, rp;
}
var op, NS;
function E8() {
  if (NS) return op;
  NS = 1;
  var e = oa(), t = HA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return op = n, op;
}
var ip, RS;
function WA() {
  if (RS) return ip;
  RS = 1;
  var e = m0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return ip = n, ip;
}
var sp, PS;
function UA() {
  if (PS) return sp;
  PS = 1;
  var e = WA(), t = g0(), n = Lr();
  function o(i) {
    return e(i, n, t);
  }
  return sp = o, sp;
}
var ap, TS;
function C8() {
  if (TS) return ap;
  TS = 1;
  var e = WA(), t = HA(), n = yo();
  function o(i) {
    return e(i, n, t);
  }
  return ap = o, ap;
}
var lp, AS;
function k8() {
  if (AS) return lp;
  AS = 1;
  var e = vo(), t = wn(), n = e(t, "DataView");
  return lp = n, lp;
}
var up, IS;
function N8() {
  if (IS) return up;
  IS = 1;
  var e = vo(), t = wn(), n = e(t, "Promise");
  return up = n, up;
}
var cp, MS;
function GA() {
  if (MS) return cp;
  MS = 1;
  var e = vo(), t = wn(), n = e(t, "Set");
  return cp = n, cp;
}
var fp, OS;
function R8() {
  if (OS) return fp;
  OS = 1;
  var e = vo(), t = wn(), n = e(t, "WeakMap");
  return fp = n, fp;
}
var dp, LS;
function Ni() {
  if (LS) return dp;
  LS = 1;
  var e = k8(), t = u0(), n = N8(), o = GA(), i = R8(), a = mo(), l = DA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), E = l(t), y = l(n), w = l(o), _ = l(i), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || n && C(n.resolve()) != d || o && C(new o()) != h || i && C(new i()) != p) && (C = function(b) {
    var N = a(b), P = N == f ? b.constructor : void 0, A = P ? l(P) : "";
    if (A)
      switch (A) {
        case v:
          return m;
        case E:
          return u;
        case y:
          return d;
        case w:
          return h;
        case _:
          return p;
      }
    return N;
  }), dp = C, dp;
}
var hp, DS;
function P8() {
  if (DS) return hp;
  DS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return hp = n, hp;
}
var pp, jS;
function YA() {
  if (jS) return pp;
  jS = 1;
  var e = wn(), t = e.Uint8Array;
  return pp = t, pp;
}
var gp, qS;
function v0() {
  if (qS) return gp;
  qS = 1;
  var e = YA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return gp = t, gp;
}
var mp, zS;
function T8() {
  if (zS) return mp;
  zS = 1;
  var e = v0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return mp = t, mp;
}
var vp, FS;
function A8() {
  if (FS) return vp;
  FS = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return vp = t, vp;
}
var yp, $S;
function I8() {
  if ($S) return yp;
  $S = 1;
  var e = Ci(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return yp = o, yp;
}
var xp, BS;
function KA() {
  if (BS) return xp;
  BS = 1;
  var e = v0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return xp = t, xp;
}
var wp, VS;
function M8() {
  if (VS) return wp;
  VS = 1;
  var e = v0(), t = T8(), n = A8(), o = I8(), i = KA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", C = "[object Int16Array]", b = "[object Int32Array]", N = "[object Uint8Array]", P = "[object Uint8ClampedArray]", A = "[object Uint16Array]", I = "[object Uint32Array]";
  function O(D, H, q) {
    var B = D.constructor;
    switch (H) {
      case v:
        return e(D);
      case a:
      case l:
        return new B(+D);
      case E:
        return t(D, q);
      case y:
      case w:
      case _:
      case C:
      case b:
      case N:
      case P:
      case A:
      case I:
        return i(D, q);
      case u:
        return new B();
      case f:
      case p:
        return new B(D);
      case d:
        return n(D);
      case h:
        return new B();
      case m:
        return o(D);
    }
  }
  return wp = O, wp;
}
var _p, HS;
function XA() {
  if (HS) return _p;
  HS = 1;
  var e = Jt(), t = Object.create, n = /* @__PURE__ */ (function() {
    function o() {
    }
    return function(i) {
      if (!e(i))
        return {};
      if (t)
        return t(i);
      o.prototype = i;
      var a = new o();
      return o.prototype = void 0, a;
    };
  })();
  return _p = n, _p;
}
var bp, WS;
function QA() {
  if (WS) return bp;
  WS = 1;
  var e = XA(), t = nc(), n = tc();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return bp = o, bp;
}
var Sp, US;
function O8() {
  if (US) return Sp;
  US = 1;
  var e = Ni(), t = jn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Sp = o, Sp;
}
var Ep, GS;
function L8() {
  if (GS) return Ep;
  GS = 1;
  var e = O8(), t = ec(), n = h0(), o = n && n.isMap, i = o ? t(o) : e;
  return Ep = i, Ep;
}
var Cp, YS;
function D8() {
  if (YS) return Cp;
  YS = 1;
  var e = Ni(), t = jn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Cp = o, Cp;
}
var kp, KS;
function j8() {
  if (KS) return kp;
  KS = 1;
  var e = D8(), t = ec(), n = h0(), o = n && n.isSet, i = o ? t(o) : e;
  return kp = i, kp;
}
var Np, XS;
function ZA() {
  if (XS) return Np;
  XS = 1;
  var e = Xu(), t = f0(), n = Zu(), o = x8(), i = b8(), a = FA(), l = $A(), u = S8(), f = E8(), d = UA(), h = C8(), p = Ni(), m = P8(), v = M8(), E = QA(), y = rt(), w = ki(), _ = L8(), C = Jt(), b = j8(), N = Lr(), P = yo(), A = 1, I = 2, O = 4, D = "[object Arguments]", H = "[object Array]", q = "[object Boolean]", B = "[object Date]", X = "[object Error]", L = "[object Function]", W = "[object GeneratorFunction]", V = "[object Map]", Y = "[object Number]", M = "[object Object]", z = "[object RegExp]", Q = "[object Set]", j = "[object String]", U = "[object Symbol]", ie = "[object WeakMap]", $ = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", me = {};
  me[D] = me[H] = me[$] = me[Z] = me[q] = me[B] = me[ee] = me[K] = me[te] = me[se] = me[ae] = me[V] = me[Y] = me[M] = me[z] = me[Q] = me[j] = me[U] = me[ce] = me[de] = me[pe] = me[be] = !0, me[X] = me[L] = me[ie] = !1;
  function Re(Ee, Je, Ue, Ft, ht, at) {
    var Ge, tn = Je & A, $t = Je & I, nn = Je & O;
    if (Ue && (Ge = ht ? Ue(Ee, Ft, ht, at) : Ue(Ee)), Ge !== void 0)
      return Ge;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (Ge = m(Ee), !tn)
        return l(Ee, Ge);
    } else {
      var _t = p(Ee), Dr = _t == L || _t == W;
      if (w(Ee))
        return a(Ee, tn);
      if (_t == M || _t == D || Dr && !ht) {
        if (Ge = $t || Dr ? {} : E(Ee), !tn)
          return $t ? f(Ee, i(Ge, Ee)) : u(Ee, o(Ge, Ee));
      } else {
        if (!me[_t])
          return ht ? Ee : {};
        Ge = v(Ee, _t, tn);
      }
    }
    at || (at = new e());
    var Vt = at.get(Ee);
    if (Vt)
      return Vt;
    at.set(Ee, Ge), b(Ee) ? Ee.forEach(function(Tt) {
      Ge.add(Re(Tt, Je, Ue, Tt, Ee, at));
    }) : _(Ee) && Ee.forEach(function(Tt, Ht) {
      Ge.set(Ht, Re(Tt, Je, Ue, Ht, Ee, at));
    });
    var qn = nn ? $t ? h : d : $t ? P : N, wo = Bt ? void 0 : qn(Ee);
    return t(wo || Ee, function(Tt, Ht) {
      wo && (Ht = Tt, Tt = Ee[Ht]), n(Ge, Ht, Re(Tt, Je, Ue, Ht, Ee, at));
    }), Ge;
  }
  return Np = Re, Np;
}
var Rp, QS;
function q8() {
  if (QS) return Rp;
  QS = 1;
  var e = ZA(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return Rp = n, Rp;
}
var Pp, ZS;
function y0() {
  if (ZS) return Pp;
  ZS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Pp = e, Pp;
}
var Tp, JS;
function z8() {
  if (JS) return Tp;
  JS = 1;
  function e(t) {
    return function(n, o, i) {
      for (var a = -1, l = Object(n), u = i(n), f = u.length; f--; ) {
        var d = u[t ? f : ++a];
        if (o(l[d], d, l) === !1)
          break;
      }
      return n;
    };
  }
  return Tp = e, Tp;
}
var Ap, eE;
function x0() {
  if (eE) return Ap;
  eE = 1;
  var e = z8(), t = e();
  return Ap = t, Ap;
}
var Ip, tE;
function w0() {
  if (tE) return Ip;
  tE = 1;
  var e = x0(), t = Lr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return Ip = n, Ip;
}
var Mp, nE;
function F8() {
  if (nE) return Mp;
  nE = 1;
  var e = er();
  function t(n, o) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return n(i, a);
      for (var l = i.length, u = o ? l : -1, f = Object(i); (o ? u-- : ++u < l) && a(f[u], u, f) !== !1; )
        ;
      return i;
    };
  }
  return Mp = t, Mp;
}
var Op, rE;
function rc() {
  if (rE) return Op;
  rE = 1;
  var e = w0(), t = F8(), n = t(e);
  return Op = n, Op;
}
var Lp, oE;
function xo() {
  if (oE) return Lp;
  oE = 1;
  function e(t) {
    return t;
  }
  return Lp = e, Lp;
}
var Dp, iE;
function JA() {
  if (iE) return Dp;
  iE = 1;
  var e = xo();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return Dp = t, Dp;
}
var jp, sE;
function eI() {
  if (sE) return jp;
  sE = 1;
  var e = f0(), t = rc(), n = JA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return jp = i, jp;
}
var qp, aE;
function tI() {
  return aE || (aE = 1, qp = eI()), qp;
}
var zp, lE;
function $8() {
  if (lE) return zp;
  lE = 1;
  var e = rc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return zp = t, zp;
}
var Fp, uE;
function B8() {
  if (uE) return Fp;
  uE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Fp = t, Fp;
}
var $p, cE;
function V8() {
  if (cE) return $p;
  cE = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return $p = e, $p;
}
var Bp, fE;
function nI() {
  if (fE) return Bp;
  fE = 1;
  var e = c0(), t = B8(), n = V8();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Bp = o, Bp;
}
var Vp, dE;
function H8() {
  if (dE) return Vp;
  dE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Vp = e, Vp;
}
var Hp, hE;
function rI() {
  if (hE) return Hp;
  hE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Hp = e, Hp;
}
var Wp, pE;
function oI() {
  if (pE) return Wp;
  pE = 1;
  var e = nI(), t = H8(), n = rI(), o = 1, i = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, v = l.length, E = u.length;
    if (v != E && !(m && E > v))
      return !1;
    var y = p.get(l), w = p.get(u);
    if (y && w)
      return y == u && w == l;
    var _ = -1, C = !0, b = f & i ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++_ < v; ) {
      var N = l[_], P = u[_];
      if (d)
        var A = m ? d(P, N, _, u, l, p) : d(N, P, _, l, u, p);
      if (A !== void 0) {
        if (A)
          continue;
        C = !1;
        break;
      }
      if (b) {
        if (!t(u, function(I, O) {
          if (!n(b, O) && (N === I || h(N, I, f, d, p)))
            return b.push(O);
        })) {
          C = !1;
          break;
        }
      } else if (!(N === P || h(N, P, f, d, p))) {
        C = !1;
        break;
      }
    }
    return p.delete(l), p.delete(u), C;
  }
  return Wp = a, Wp;
}
var Up, gE;
function W8() {
  if (gE) return Up;
  gE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return Up = e, Up;
}
var Gp, mE;
function _0() {
  if (mE) return Gp;
  mE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return Gp = e, Gp;
}
var Yp, vE;
function U8() {
  if (vE) return Yp;
  vE = 1;
  var e = Ci(), t = YA(), n = Ei(), o = oI(), i = W8(), a = _0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", E = "[object Set]", y = "[object String]", w = "[object Symbol]", _ = "[object ArrayBuffer]", C = "[object DataView]", b = e ? e.prototype : void 0, N = b ? b.valueOf : void 0;
  function P(A, I, O, D, H, q, B) {
    switch (O) {
      case C:
        if (A.byteLength != I.byteLength || A.byteOffset != I.byteOffset)
          return !1;
        A = A.buffer, I = I.buffer;
      case _:
        return !(A.byteLength != I.byteLength || !q(new t(A), new t(I)));
      case f:
      case d:
      case m:
        return n(+A, +I);
      case h:
        return A.name == I.name && A.message == I.message;
      case v:
      case y:
        return A == I + "";
      case p:
        var X = i;
      case E:
        var L = D & l;
        if (X || (X = a), A.size != I.size && !L)
          return !1;
        var W = B.get(A);
        if (W)
          return W == I;
        D |= u, B.set(A, I);
        var V = o(X(A), X(I), D, H, q, B);
        return B.delete(A), V;
      case w:
        if (N)
          return N.call(A) == N.call(I);
    }
    return !1;
  }
  return Yp = P, Yp;
}
var Kp, yE;
function G8() {
  if (yE) return Kp;
  yE = 1;
  var e = UA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u, f, d, h) {
    var p = u & t, m = e(a), v = m.length, E = e(l), y = E.length;
    if (v != y && !p)
      return !1;
    for (var w = v; w--; ) {
      var _ = m[w];
      if (!(p ? _ in l : o.call(l, _)))
        return !1;
    }
    var C = h.get(a), b = h.get(l);
    if (C && b)
      return C == l && b == a;
    var N = !0;
    h.set(a, l), h.set(l, a);
    for (var P = p; ++w < v; ) {
      _ = m[w];
      var A = a[_], I = l[_];
      if (f)
        var O = p ? f(I, A, _, l, a, h) : f(A, I, _, a, l, h);
      if (!(O === void 0 ? A === I || d(A, I, u, f, h) : O)) {
        N = !1;
        break;
      }
      P || (P = _ == "constructor");
    }
    if (N && !P) {
      var D = a.constructor, H = l.constructor;
      D != H && "constructor" in a && "constructor" in l && !(typeof D == "function" && D instanceof D && typeof H == "function" && H instanceof H) && (N = !1);
    }
    return h.delete(a), h.delete(l), N;
  }
  return Kp = i, Kp;
}
var Xp, xE;
function Y8() {
  if (xE) return Xp;
  xE = 1;
  var e = Xu(), t = oI(), n = U8(), o = G8(), i = Ni(), a = rt(), l = ki(), u = sa(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function E(y, w, _, C, b, N) {
    var P = a(y), A = a(w), I = P ? h : i(y), O = A ? h : i(w);
    I = I == d ? p : I, O = O == d ? p : O;
    var D = I == p, H = O == p, q = I == O;
    if (q && l(y)) {
      if (!l(w))
        return !1;
      P = !0, D = !1;
    }
    if (q && !D)
      return N || (N = new e()), P || u(y) ? t(y, w, _, C, b, N) : n(y, w, I, _, C, b, N);
    if (!(_ & f)) {
      var B = D && v.call(y, "__wrapped__"), X = H && v.call(w, "__wrapped__");
      if (B || X) {
        var L = B ? y.value() : y, W = X ? w.value() : w;
        return N || (N = new e()), b(L, W, _, C, N);
      }
    }
    return q ? (N || (N = new e()), o(y, w, _, C, b, N)) : !1;
  }
  return Xp = E, Xp;
}
var Qp, wE;
function iI() {
  if (wE) return Qp;
  wE = 1;
  var e = Y8(), t = jn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return Qp = n, Qp;
}
var Zp, _E;
function K8() {
  if (_E) return Zp;
  _E = 1;
  var e = Xu(), t = iI(), n = 1, o = 2;
  function i(a, l, u, f) {
    var d = u.length, h = d, p = !f;
    if (a == null)
      return !h;
    for (a = Object(a); d--; ) {
      var m = u[d];
      if (p && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++d < h; ) {
      m = u[d];
      var v = m[0], E = a[v], y = m[1];
      if (p && m[2]) {
        if (E === void 0 && !(v in a))
          return !1;
      } else {
        var w = new e();
        if (f)
          var _ = f(E, y, v, a, l, w);
        if (!(_ === void 0 ? t(y, E, n | o, f, w) : _))
          return !1;
      }
    }
    return !0;
  }
  return Zp = i, Zp;
}
var Jp, bE;
function sI() {
  if (bE) return Jp;
  bE = 1;
  var e = Jt();
  function t(n) {
    return n === n && !e(n);
  }
  return Jp = t, Jp;
}
var eg, SE;
function X8() {
  if (SE) return eg;
  SE = 1;
  var e = sI(), t = Lr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return eg = n, eg;
}
var tg, EE;
function aI() {
  if (EE) return tg;
  EE = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return tg = e, tg;
}
var ng, CE;
function Q8() {
  if (CE) return ng;
  CE = 1;
  var e = K8(), t = X8(), n = aI();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return ng = o, ng;
}
var rg, kE;
function Ri() {
  if (kE) return rg;
  kE = 1;
  var e = mo(), t = jn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return rg = o, rg;
}
var og, NE;
function b0() {
  if (NE) return og;
  NE = 1;
  var e = rt(), t = Ri(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return og = i, og;
}
var ig, RE;
function Z8() {
  if (RE) return ig;
  RE = 1;
  var e = c0(), t = "Expected a function";
  function n(o, i) {
    if (typeof o != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var l = arguments, u = i ? i.apply(this, l) : l[0], f = a.cache;
      if (f.has(u))
        return f.get(u);
      var d = o.apply(this, l);
      return a.cache = f.set(u, d) || f, d;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, ig = n, ig;
}
var sg, PE;
function J8() {
  if (PE) return sg;
  PE = 1;
  var e = Z8(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return sg = n, sg;
}
var ag, TE;
function e6() {
  if (TE) return ag;
  TE = 1;
  var e = J8(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return ag = o, ag;
}
var lg, AE;
function oc() {
  if (AE) return lg;
  AE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return lg = e, lg;
}
var ug, IE;
function t6() {
  if (IE) return ug;
  IE = 1;
  var e = Ci(), t = oc(), n = rt(), o = Ri(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function l(u) {
    if (typeof u == "string")
      return u;
    if (n(u))
      return t(u, l) + "";
    if (o(u))
      return a ? a.call(u) : "";
    var f = u + "";
    return f == "0" && 1 / u == -1 / 0 ? "-0" : f;
  }
  return ug = l, ug;
}
var cg, ME;
function lI() {
  if (ME) return cg;
  ME = 1;
  var e = t6();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return cg = t, cg;
}
var fg, OE;
function ic() {
  if (OE) return fg;
  OE = 1;
  var e = rt(), t = b0(), n = e6(), o = lI();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return fg = i, fg;
}
var dg, LE;
function aa() {
  if (LE) return dg;
  LE = 1;
  var e = Ri();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return dg = t, dg;
}
var hg, DE;
function sc() {
  if (DE) return hg;
  DE = 1;
  var e = ic(), t = aa();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return hg = n, hg;
}
var pg, jE;
function n6() {
  if (jE) return pg;
  jE = 1;
  var e = sc();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return pg = t, pg;
}
var gg, qE;
function r6() {
  if (qE) return gg;
  qE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return gg = e, gg;
}
var mg, zE;
function uI() {
  if (zE) return mg;
  zE = 1;
  var e = ic(), t = ia(), n = rt(), o = Ju(), i = d0(), a = aa();
  function l(u, f, d) {
    f = e(f, u);
    for (var h = -1, p = f.length, m = !1; ++h < p; ) {
      var v = a(f[h]);
      if (!(m = u != null && d(u, v)))
        break;
      u = u[v];
    }
    return m || ++h != p ? m : (p = u == null ? 0 : u.length, !!p && i(p) && o(v, p) && (n(u) || t(u)));
  }
  return mg = l, mg;
}
var vg, FE;
function cI() {
  if (FE) return vg;
  FE = 1;
  var e = r6(), t = uI();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return vg = n, vg;
}
var yg, $E;
function o6() {
  if ($E) return yg;
  $E = 1;
  var e = iI(), t = n6(), n = cI(), o = b0(), i = sI(), a = aI(), l = aa(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return yg = d, yg;
}
var xg, BE;
function fI() {
  if (BE) return xg;
  BE = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return xg = e, xg;
}
var wg, VE;
function i6() {
  if (VE) return wg;
  VE = 1;
  var e = sc();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return wg = t, wg;
}
var _g, HE;
function s6() {
  if (HE) return _g;
  HE = 1;
  var e = fI(), t = i6(), n = b0(), o = aa();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return _g = i, _g;
}
var bg, WE;
function tr() {
  if (WE) return bg;
  WE = 1;
  var e = Q8(), t = o6(), n = xo(), o = rt(), i = s6();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return bg = a, bg;
}
var Sg, UE;
function dI() {
  if (UE) return Sg;
  UE = 1;
  var e = BA(), t = $8(), n = tr(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return Sg = i, Sg;
}
var Eg, GE;
function a6() {
  if (GE) return Eg;
  GE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Eg = n, Eg;
}
var Cg, YE;
function hI() {
  if (YE) return Cg;
  YE = 1;
  var e = a6(), t = uI();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Cg = n, Cg;
}
var kg, KE;
function l6() {
  if (KE) return kg;
  KE = 1;
  var e = p0(), t = Ni(), n = ia(), o = rt(), i = er(), a = ki(), l = tc(), u = sa(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
  function m(v) {
    if (v == null)
      return !0;
    if (i(v) && (o(v) || typeof v == "string" || typeof v.splice == "function" || a(v) || u(v) || n(v)))
      return !v.length;
    var E = t(v);
    if (E == f || E == d)
      return !v.size;
    if (l(v))
      return !e(v).length;
    for (var y in v)
      if (p.call(v, y))
        return !1;
    return !0;
  }
  return kg = m, kg;
}
var Ng, XE;
function pI() {
  if (XE) return Ng;
  XE = 1;
  function e(t) {
    return t === void 0;
  }
  return Ng = e, Ng;
}
var Rg, QE;
function gI() {
  if (QE) return Rg;
  QE = 1;
  var e = rc(), t = er();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return Rg = n, Rg;
}
var Pg, ZE;
function mI() {
  if (ZE) return Pg;
  ZE = 1;
  var e = oc(), t = tr(), n = gI(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return Pg = i, Pg;
}
var Tg, JE;
function u6() {
  if (JE) return Tg;
  JE = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return Tg = e, Tg;
}
var Ag, eC;
function c6() {
  if (eC) return Ag;
  eC = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return Ag = e, Ag;
}
var Ig, tC;
function vI() {
  if (tC) return Ig;
  tC = 1;
  var e = u6(), t = rc(), n = tr(), o = c6(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return Ig = a, Ig;
}
var Mg, nC;
function f6() {
  if (nC) return Mg;
  nC = 1;
  var e = mo(), t = rt(), n = jn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return Mg = i, Mg;
}
var Og, rC;
function d6() {
  if (rC) return Og;
  rC = 1;
  var e = fI(), t = e("length");
  return Og = t, Og;
}
var Lg, oC;
function h6() {
  if (oC) return Lg;
  oC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return Lg = f, Lg;
}
var Dg, iC;
function p6() {
  if (iC) return Dg;
  iC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", E = d + "?", y = "[" + a + "]?", w = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + E + ")*", _ = y + E + w, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", b = RegExp(f + "(?=" + f + ")|" + C + _, "g");
  function N(P) {
    for (var A = b.lastIndex = 0; b.test(P); )
      ++A;
    return A;
  }
  return Dg = N, Dg;
}
var jg, sC;
function g6() {
  if (sC) return jg;
  sC = 1;
  var e = d6(), t = h6(), n = p6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return jg = o, jg;
}
var qg, aC;
function m6() {
  if (aC) return qg;
  aC = 1;
  var e = p0(), t = Ni(), n = er(), o = f6(), i = g6(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? i(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return qg = u, qg;
}
var zg, lC;
function v6() {
  if (lC) return zg;
  lC = 1;
  var e = f0(), t = XA(), n = w0(), o = tr(), i = nc(), a = rt(), l = ki(), u = ra(), f = Jt(), d = sa();
  function h(p, m, v) {
    var E = a(p), y = E || l(p) || d(p);
    if (m = o(m, 4), v == null) {
      var w = p && p.constructor;
      y ? v = E ? new w() : [] : f(p) ? v = u(w) ? t(i(p)) : {} : v = {};
    }
    return (y ? e : n)(p, function(_, C, b) {
      return m(v, _, C, b);
    }), v;
  }
  return zg = h, zg;
}
var Fg, uC;
function y6() {
  if (uC) return Fg;
  uC = 1;
  var e = Ci(), t = ia(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Fg = i, Fg;
}
var $g, cC;
function S0() {
  if (cC) return $g;
  cC = 1;
  var e = m0(), t = y6();
  function n(o, i, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      i > 0 && a(h) ? i > 1 ? n(h, i - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return $g = n, $g;
}
var Bg, fC;
function x6() {
  if (fC) return Bg;
  fC = 1;
  function e(t, n, o) {
    switch (o.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, o[0]);
      case 2:
        return t.call(n, o[0], o[1]);
      case 3:
        return t.call(n, o[0], o[1], o[2]);
    }
    return t.apply(n, o);
  }
  return Bg = e, Bg;
}
var Vg, dC;
function yI() {
  if (dC) return Vg;
  dC = 1;
  var e = x6(), t = Math.max;
  function n(o, i, a) {
    return i = t(i === void 0 ? o.length - 1 : i, 0), function() {
      for (var l = arguments, u = -1, f = t(l.length - i, 0), d = Array(f); ++u < f; )
        d[u] = l[i + u];
      u = -1;
      for (var h = Array(i + 1); ++u < i; )
        h[u] = l[u];
      return h[i] = a(d), e(o, this, h);
    };
  }
  return Vg = n, Vg;
}
var Hg, hC;
function w6() {
  if (hC) return Hg;
  hC = 1;
  var e = y0(), t = jA(), n = xo(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Hg = o, Hg;
}
var Wg, pC;
function _6() {
  if (pC) return Wg;
  pC = 1;
  var e = 800, t = 16, n = Date.now;
  function o(i) {
    var a = 0, l = 0;
    return function() {
      var u = n(), f = t - (u - l);
      if (l = u, f > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Wg = o, Wg;
}
var Ug, gC;
function xI() {
  if (gC) return Ug;
  gC = 1;
  var e = w6(), t = _6(), n = t(e);
  return Ug = n, Ug;
}
var Gg, mC;
function ac() {
  if (mC) return Gg;
  mC = 1;
  var e = xo(), t = yI(), n = xI();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return Gg = o, Gg;
}
var Yg, vC;
function wI() {
  if (vC) return Yg;
  vC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return Yg = e, Yg;
}
var Kg, yC;
function b6() {
  if (yC) return Kg;
  yC = 1;
  function e(t) {
    return t !== t;
  }
  return Kg = e, Kg;
}
var Xg, xC;
function S6() {
  if (xC) return Xg;
  xC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Xg = e, Xg;
}
var Qg, wC;
function E6() {
  if (wC) return Qg;
  wC = 1;
  var e = wI(), t = b6(), n = S6();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return Qg = o, Qg;
}
var Zg, _C;
function C6() {
  if (_C) return Zg;
  _C = 1;
  var e = E6();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return Zg = t, Zg;
}
var Jg, bC;
function k6() {
  if (bC) return Jg;
  bC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return Jg = e, Jg;
}
var em, SC;
function N6() {
  if (SC) return em;
  SC = 1;
  function e() {
  }
  return em = e, em;
}
var tm, EC;
function R6() {
  if (EC) return tm;
  EC = 1;
  var e = GA(), t = N6(), n = _0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return tm = i, tm;
}
var nm, CC;
function P6() {
  if (CC) return nm;
  CC = 1;
  var e = nI(), t = C6(), n = k6(), o = rI(), i = R6(), a = _0(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, v = f.length, E = !0, y = [], w = y;
    if (h)
      E = !1, m = n;
    else if (v >= l) {
      var _ = d ? null : i(f);
      if (_)
        return a(_);
      E = !1, m = o, w = new e();
    } else
      w = d ? [] : y;
    e:
      for (; ++p < v; ) {
        var C = f[p], b = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && b === b) {
          for (var N = w.length; N--; )
            if (w[N] === b)
              continue e;
          d && w.push(b), y.push(C);
        } else m(w, b, h) || (w !== y && w.push(b), y.push(C));
      }
    return y;
  }
  return nm = u, nm;
}
var rm, kC;
function _I() {
  if (kC) return rm;
  kC = 1;
  var e = er(), t = jn();
  function n(o) {
    return t(o) && e(o);
  }
  return rm = n, rm;
}
var om, NC;
function T6() {
  if (NC) return om;
  NC = 1;
  var e = S0(), t = ac(), n = P6(), o = _I(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return om = i, om;
}
var im, RC;
function A6() {
  if (RC) return im;
  RC = 1;
  var e = oc();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return im = t, im;
}
var sm, PC;
function bI() {
  if (PC) return sm;
  PC = 1;
  var e = A6(), t = Lr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return sm = n, sm;
}
var am, TC;
function en() {
  if (TC) return am;
  TC = 1;
  var e;
  if (typeof l0 == "function")
    try {
      e = {
        clone: q8(),
        constant: y0(),
        each: tI(),
        filter: dI(),
        has: hI(),
        isArray: rt(),
        isEmpty: l6(),
        isFunction: ra(),
        isUndefined: pI(),
        keys: Lr(),
        map: mI(),
        reduce: vI(),
        size: m6(),
        transform: v6(),
        union: T6(),
        values: bI()
      };
    } catch {
    }
  return e || (e = window._), am = e, am;
}
var lm, AC;
function E0() {
  if (AC) return lm;
  AC = 1;
  var e = en();
  lm = i;
  var t = "\0", n = "\0", o = "";
  function i(h) {
    this._isDirected = e.has(h, "directed") ? h.directed : !0, this._isMultigraph = e.has(h, "multigraph") ? h.multigraph : !1, this._isCompound = e.has(h, "compound") ? h.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[n] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  i.prototype._nodeCount = 0, i.prototype._edgeCount = 0, i.prototype.isDirected = function() {
    return this._isDirected;
  }, i.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, i.prototype.isCompound = function() {
    return this._isCompound;
  }, i.prototype.setGraph = function(h) {
    return this._label = h, this;
  }, i.prototype.graph = function() {
    return this._label;
  }, i.prototype.setDefaultNodeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultNodeLabelFn = h, this;
  }, i.prototype.nodeCount = function() {
    return this._nodeCount;
  }, i.prototype.nodes = function() {
    return e.keys(this._nodes);
  }, i.prototype.sources = function() {
    var h = this;
    return e.filter(this.nodes(), function(p) {
      return e.isEmpty(h._in[p]);
    });
  }, i.prototype.sinks = function() {
    var h = this;
    return e.filter(this.nodes(), function(p) {
      return e.isEmpty(h._out[p]);
    });
  }, i.prototype.setNodes = function(h, p) {
    var m = arguments, v = this;
    return e.each(h, function(E) {
      m.length > 1 ? v.setNode(E, p) : v.setNode(E);
    }), this;
  }, i.prototype.setNode = function(h, p) {
    return e.has(this._nodes, h) ? (arguments.length > 1 && (this._nodes[h] = p), this) : (this._nodes[h] = arguments.length > 1 ? p : this._defaultNodeLabelFn(h), this._isCompound && (this._parent[h] = n, this._children[h] = {}, this._children[n][h] = !0), this._in[h] = {}, this._preds[h] = {}, this._out[h] = {}, this._sucs[h] = {}, ++this._nodeCount, this);
  }, i.prototype.node = function(h) {
    return this._nodes[h];
  }, i.prototype.hasNode = function(h) {
    return e.has(this._nodes, h);
  }, i.prototype.removeNode = function(h) {
    var p = this;
    if (e.has(this._nodes, h)) {
      var m = function(v) {
        p.removeEdge(p._edgeObjs[v]);
      };
      delete this._nodes[h], this._isCompound && (this._removeFromParentsChildList(h), delete this._parent[h], e.each(this.children(h), function(v) {
        p.setParent(v);
      }), delete this._children[h]), e.each(e.keys(this._in[h]), m), delete this._in[h], delete this._preds[h], e.each(e.keys(this._out[h]), m), delete this._out[h], delete this._sucs[h], --this._nodeCount;
    }
    return this;
  }, i.prototype.setParent = function(h, p) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(p))
      p = n;
    else {
      p += "";
      for (var m = p; !e.isUndefined(m); m = this.parent(m))
        if (m === h)
          throw new Error("Setting " + p + " as parent of " + h + " would create a cycle");
      this.setNode(p);
    }
    return this.setNode(h), this._removeFromParentsChildList(h), this._parent[h] = p, this._children[p][h] = !0, this;
  }, i.prototype._removeFromParentsChildList = function(h) {
    delete this._children[this._parent[h]][h];
  }, i.prototype.parent = function(h) {
    if (this._isCompound) {
      var p = this._parent[h];
      if (p !== n)
        return p;
    }
  }, i.prototype.children = function(h) {
    if (e.isUndefined(h) && (h = n), this._isCompound) {
      var p = this._children[h];
      if (p)
        return e.keys(p);
    } else {
      if (h === n)
        return this.nodes();
      if (this.hasNode(h))
        return [];
    }
  }, i.prototype.predecessors = function(h) {
    var p = this._preds[h];
    if (p)
      return e.keys(p);
  }, i.prototype.successors = function(h) {
    var p = this._sucs[h];
    if (p)
      return e.keys(p);
  }, i.prototype.neighbors = function(h) {
    var p = this.predecessors(h);
    if (p)
      return e.union(p, this.successors(h));
  }, i.prototype.isLeaf = function(h) {
    var p;
    return this.isDirected() ? p = this.successors(h) : p = this.neighbors(h), p.length === 0;
  }, i.prototype.filterNodes = function(h) {
    var p = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    p.setGraph(this.graph());
    var m = this;
    e.each(this._nodes, function(y, w) {
      h(w) && p.setNode(w, y);
    }), e.each(this._edgeObjs, function(y) {
      p.hasNode(y.v) && p.hasNode(y.w) && p.setEdge(y, m.edge(y));
    });
    var v = {};
    function E(y) {
      var w = m.parent(y);
      return w === void 0 || p.hasNode(w) ? (v[y] = w, w) : w in v ? v[w] : E(w);
    }
    return this._isCompound && e.each(p.nodes(), function(y) {
      p.setParent(y, E(y));
    }), p;
  }, i.prototype.setDefaultEdgeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultEdgeLabelFn = h, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, i.prototype.setPath = function(h, p) {
    var m = this, v = arguments;
    return e.reduce(h, function(E, y) {
      return v.length > 1 ? m.setEdge(E, y, p) : m.setEdge(E, y), y;
    }), this;
  }, i.prototype.setEdge = function() {
    var h, p, m, v, E = !1, y = arguments[0];
    typeof y == "object" && y !== null && "v" in y ? (h = y.v, p = y.w, m = y.name, arguments.length === 2 && (v = arguments[1], E = !0)) : (h = y, p = arguments[1], m = arguments[3], arguments.length > 2 && (v = arguments[2], E = !0)), h = "" + h, p = "" + p, e.isUndefined(m) || (m = "" + m);
    var w = u(this._isDirected, h, p, m);
    if (e.has(this._edgeLabels, w))
      return E && (this._edgeLabels[w] = v), this;
    if (!e.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(p), this._edgeLabels[w] = E ? v : this._defaultEdgeLabelFn(h, p, m);
    var _ = f(this._isDirected, h, p, m);
    return h = _.v, p = _.w, Object.freeze(_), this._edgeObjs[w] = _, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][w] = _, this._out[h][w] = _, this._edgeCount++, this;
  }, i.prototype.edge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return this._edgeLabels[v];
  }, i.prototype.hasEdge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return e.has(this._edgeLabels, v);
  }, i.prototype.removeEdge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m), E = this._edgeObjs[v];
    return E && (h = E.v, p = E.w, delete this._edgeLabels[v], delete this._edgeObjs[v], l(this._preds[p], h), l(this._sucs[h], p), delete this._in[p][v], delete this._out[h][v], this._edgeCount--), this;
  }, i.prototype.inEdges = function(h, p) {
    var m = this._in[h];
    if (m) {
      var v = e.values(m);
      return p ? e.filter(v, function(E) {
        return E.v === p;
      }) : v;
    }
  }, i.prototype.outEdges = function(h, p) {
    var m = this._out[h];
    if (m) {
      var v = e.values(m);
      return p ? e.filter(v, function(E) {
        return E.w === p;
      }) : v;
    }
  }, i.prototype.nodeEdges = function(h, p) {
    var m = this.inEdges(h, p);
    if (m)
      return m.concat(this.outEdges(h, p));
  };
  function a(h, p) {
    h[p] ? h[p]++ : h[p] = 1;
  }
  function l(h, p) {
    --h[p] || delete h[p];
  }
  function u(h, p, m, v) {
    var E = "" + p, y = "" + m;
    if (!h && E > y) {
      var w = E;
      E = y, y = w;
    }
    return E + o + y + o + (e.isUndefined(v) ? t : v);
  }
  function f(h, p, m, v) {
    var E = "" + p, y = "" + m;
    if (!h && E > y) {
      var w = E;
      E = y, y = w;
    }
    var _ = { v: E, w: y };
    return v && (_.name = v), _;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return lm;
}
var um, IC;
function I6() {
  return IC || (IC = 1, um = "2.1.8"), um;
}
var cm, MC;
function M6() {
  return MC || (MC = 1, cm = {
    Graph: E0(),
    version: I6()
  }), cm;
}
var fm, OC;
function O6() {
  if (OC) return fm;
  OC = 1;
  var e = en(), t = E0();
  fm = {
    write: n,
    read: a
  };
  function n(l) {
    var u = {
      options: {
        directed: l.isDirected(),
        multigraph: l.isMultigraph(),
        compound: l.isCompound()
      },
      nodes: o(l),
      edges: i(l)
    };
    return e.isUndefined(l.graph()) || (u.value = e.clone(l.graph())), u;
  }
  function o(l) {
    return e.map(l.nodes(), function(u) {
      var f = l.node(u), d = l.parent(u), h = { v: u };
      return e.isUndefined(f) || (h.value = f), e.isUndefined(d) || (h.parent = d), h;
    });
  }
  function i(l) {
    return e.map(l.edges(), function(u) {
      var f = l.edge(u), d = { v: u.v, w: u.w };
      return e.isUndefined(u.name) || (d.name = u.name), e.isUndefined(f) || (d.value = f), d;
    });
  }
  function a(l) {
    var u = new t(l.options).setGraph(l.value);
    return e.each(l.nodes, function(f) {
      u.setNode(f.v, f.value), f.parent && u.setParent(f.v, f.parent);
    }), e.each(l.edges, function(f) {
      u.setEdge({ v: f.v, w: f.w, name: f.name }, f.value);
    }), u;
  }
  return fm;
}
var dm, LC;
function L6() {
  if (LC) return dm;
  LC = 1;
  var e = en();
  dm = t;
  function t(n) {
    var o = {}, i = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(n.successors(u), l), e.each(n.predecessors(u), l));
    }
    return e.each(n.nodes(), function(u) {
      a = [], l(u), a.length && i.push(a);
    }), i;
  }
  return dm;
}
var hm, DC;
function SI() {
  if (DC) return hm;
  DC = 1;
  var e = en();
  hm = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(n) {
      return n.key;
    });
  }, t.prototype.has = function(n) {
    return e.has(this._keyIndices, n);
  }, t.prototype.priority = function(n) {
    var o = this._keyIndices[n];
    if (o !== void 0)
      return this._arr[o].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(n, o) {
    var i = this._keyIndices;
    if (n = String(n), !e.has(i, n)) {
      var a = this._arr, l = a.length;
      return i[n] = l, a.push({ key: n, priority: o }), this._decrease(l), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var n = this._arr.pop();
    return delete this._keyIndices[n.key], this._heapify(0), n.key;
  }, t.prototype.decrease = function(n, o) {
    var i = this._keyIndices[n];
    if (o > this._arr[i].priority)
      throw new Error("New priority is greater than current priority. Key: " + n + " Old: " + this._arr[i].priority + " New: " + o);
    this._arr[i].priority = o, this._decrease(i);
  }, t.prototype._heapify = function(n) {
    var o = this._arr, i = 2 * n, a = i + 1, l = n;
    i < o.length && (l = o[i].priority < o[l].priority ? i : l, a < o.length && (l = o[a].priority < o[l].priority ? a : l), l !== n && (this._swap(n, l), this._heapify(l)));
  }, t.prototype._decrease = function(n) {
    for (var o = this._arr, i = o[n].priority, a; n !== 0 && (a = n >> 1, !(o[a].priority < i)); )
      this._swap(n, a), n = a;
  }, t.prototype._swap = function(n, o) {
    var i = this._arr, a = this._keyIndices, l = i[n], u = i[o];
    i[n] = u, i[o] = l, a[u.key] = n, a[l.key] = o;
  }, hm;
}
var pm, jC;
function EI() {
  if (jC) return pm;
  jC = 1;
  var e = en(), t = SI();
  pm = o;
  var n = e.constant(1);
  function o(a, l, u, f) {
    return i(
      a,
      String(l),
      u || n,
      f || function(d) {
        return a.outEdges(d);
      }
    );
  }
  function i(a, l, u, f) {
    var d = {}, h = new t(), p, m, v = function(E) {
      var y = E.v !== p ? E.v : E.w, w = d[y], _ = u(E), C = m.distance + _;
      if (_ < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + _);
      C < w.distance && (w.distance = C, w.predecessor = p, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === l ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (p = h.removeMin(), m = d[p], m.distance !== Number.POSITIVE_INFINITY); )
      f(p).forEach(v);
    return d;
  }
  return pm;
}
var gm, qC;
function D6() {
  if (qC) return gm;
  qC = 1;
  var e = EI(), t = en();
  gm = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return gm;
}
var mm, zC;
function CI() {
  if (zC) return mm;
  zC = 1;
  var e = en();
  mm = t;
  function t(n) {
    var o = 0, i = [], a = {}, l = [];
    function u(f) {
      var d = a[f] = {
        onStack: !0,
        lowlink: o,
        index: o++
      };
      if (i.push(f), n.successors(f).forEach(function(m) {
        e.has(a, m) ? a[m].onStack && (d.lowlink = Math.min(d.lowlink, a[m].index)) : (u(m), d.lowlink = Math.min(d.lowlink, a[m].lowlink));
      }), d.lowlink === d.index) {
        var h = [], p;
        do
          p = i.pop(), a[p].onStack = !1, h.push(p);
        while (f !== p);
        l.push(h);
      }
    }
    return n.nodes().forEach(function(f) {
      e.has(a, f) || u(f);
    }), l;
  }
  return mm;
}
var vm, FC;
function j6() {
  if (FC) return vm;
  FC = 1;
  var e = en(), t = CI();
  vm = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return vm;
}
var ym, $C;
function q6() {
  if ($C) return ym;
  $C = 1;
  var e = en();
  ym = n;
  var t = e.constant(1);
  function n(i, a, l) {
    return o(
      i,
      a || t,
      l || function(u) {
        return i.outEdges(u);
      }
    );
  }
  function o(i, a, l) {
    var u = {}, f = i.nodes();
    return f.forEach(function(d) {
      u[d] = {}, u[d][d] = { distance: 0 }, f.forEach(function(h) {
        d !== h && (u[d][h] = { distance: Number.POSITIVE_INFINITY });
      }), l(d).forEach(function(h) {
        var p = h.v === d ? h.w : h.v, m = a(h);
        u[d][p] = { distance: m, predecessor: d };
      });
    }), f.forEach(function(d) {
      var h = u[d];
      f.forEach(function(p) {
        var m = u[p];
        f.forEach(function(v) {
          var E = m[d], y = h[v], w = m[v], _ = E.distance + y.distance;
          _ < w.distance && (w.distance = _, w.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return ym;
}
var xm, BC;
function kI() {
  if (BC) return xm;
  BC = 1;
  var e = en();
  xm = t, t.CycleException = n;
  function t(o) {
    var i = {}, a = {}, l = [];
    function u(f) {
      if (e.has(a, f))
        throw new n();
      e.has(i, f) || (a[f] = !0, i[f] = !0, e.each(o.predecessors(f), u), delete a[f], l.push(f));
    }
    if (e.each(o.sinks(), u), e.size(i) !== o.nodeCount())
      throw new n();
    return l;
  }
  function n() {
  }
  return n.prototype = new Error(), xm;
}
var wm, VC;
function z6() {
  if (VC) return wm;
  VC = 1;
  var e = kI();
  wm = t;
  function t(n) {
    try {
      e(n);
    } catch (o) {
      if (o instanceof e.CycleException)
        return !1;
      throw o;
    }
    return !0;
  }
  return wm;
}
var _m, HC;
function NI() {
  if (HC) return _m;
  HC = 1;
  var e = en();
  _m = t;
  function t(o, i, a) {
    e.isArray(i) || (i = [i]);
    var l = (o.isDirected() ? o.successors : o.neighbors).bind(o), u = [], f = {};
    return e.each(i, function(d) {
      if (!o.hasNode(d))
        throw new Error("Graph does not have node: " + d);
      n(o, d, a === "post", f, l, u);
    }), u;
  }
  function n(o, i, a, l, u, f) {
    e.has(l, i) || (l[i] = !0, a || f.push(i), e.each(u(i), function(d) {
      n(o, d, a, l, u, f);
    }), a && f.push(i));
  }
  return _m;
}
var bm, WC;
function F6() {
  if (WC) return bm;
  WC = 1;
  var e = NI();
  bm = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return bm;
}
var Sm, UC;
function $6() {
  if (UC) return Sm;
  UC = 1;
  var e = NI();
  Sm = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return Sm;
}
var Em, GC;
function B6() {
  if (GC) return Em;
  GC = 1;
  var e = en(), t = E0(), n = SI();
  Em = o;
  function o(i, a) {
    var l = new t(), u = {}, f = new n(), d;
    function h(m) {
      var v = m.v === d ? m.w : m.v, E = f.priority(v);
      if (E !== void 0) {
        var y = a(m);
        y < E && (u[v] = d, f.decrease(v, y));
      }
    }
    if (i.nodeCount() === 0)
      return l;
    e.each(i.nodes(), function(m) {
      f.add(m, Number.POSITIVE_INFINITY), l.setNode(m);
    }), f.decrease(i.nodes()[0], 0);
    for (var p = !1; f.size() > 0; ) {
      if (d = f.removeMin(), e.has(u, d))
        l.setEdge(d, u[d]);
      else {
        if (p)
          throw new Error("Input graph is not connected: " + i);
        p = !0;
      }
      i.nodeEdges(d).forEach(h);
    }
    return l;
  }
  return Em;
}
var Cm, YC;
function V6() {
  return YC || (YC = 1, Cm = {
    components: L6(),
    dijkstra: EI(),
    dijkstraAll: D6(),
    findCycles: j6(),
    floydWarshall: q6(),
    isAcyclic: z6(),
    postorder: F6(),
    preorder: $6(),
    prim: B6(),
    tarjan: CI(),
    topsort: kI()
  }), Cm;
}
var km, KC;
function H6() {
  if (KC) return km;
  KC = 1;
  var e = M6();
  return km = {
    Graph: e.Graph,
    json: O6(),
    alg: V6(),
    version: e.version
  }, km;
}
var Nm, XC;
function vn() {
  if (XC) return Nm;
  XC = 1;
  var e;
  if (typeof l0 == "function")
    try {
      e = H6();
    } catch {
    }
  return e || (e = window.graphlib), Nm = e, Nm;
}
var Rm, QC;
function W6() {
  if (QC) return Rm;
  QC = 1;
  var e = ZA(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return Rm = o, Rm;
}
var Pm, ZC;
function lc() {
  if (ZC) return Pm;
  ZC = 1;
  var e = Ei(), t = er(), n = Ju(), o = Jt();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return Pm = i, Pm;
}
var Tm, JC;
function U6() {
  if (JC) return Tm;
  JC = 1;
  var e = ac(), t = Ei(), n = lc(), o = yo(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), E = -1, y = v.length; ++E < y; ) {
        var w = v[E], _ = u[w];
        (_ === void 0 || t(_, i[w]) && !a.call(u, w)) && (u[w] = m[w]);
      }
    return u;
  });
  return Tm = l, Tm;
}
var Am, ek;
function G6() {
  if (ek) return Am;
  ek = 1;
  var e = tr(), t = er(), n = Lr();
  function o(i) {
    return function(a, l, u) {
      var f = Object(a);
      if (!t(a)) {
        var d = e(l, 3);
        a = n(a), l = function(p) {
          return d(f[p], p, f);
        };
      }
      var h = i(a, l, u);
      return h > -1 ? f[d ? a[h] : h] : void 0;
    };
  }
  return Am = o, Am;
}
var Im, tk;
function Y6() {
  if (tk) return Im;
  tk = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return Im = t, Im;
}
var Mm, nk;
function K6() {
  if (nk) return Mm;
  nk = 1;
  var e = Y6(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return Mm = n, Mm;
}
var Om, rk;
function X6() {
  if (rk) return Om;
  rk = 1;
  var e = K6(), t = Jt(), n = Ri(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
  function f(d) {
    if (typeof d == "number")
      return d;
    if (n(d))
      return o;
    if (t(d)) {
      var h = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = t(h) ? h + "" : h;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = e(d);
    var p = a.test(d);
    return p || l.test(d) ? u(d.slice(2), p ? 2 : 8) : i.test(d) ? o : +d;
  }
  return Om = f, Om;
}
var Lm, ok;
function RI() {
  if (ok) return Lm;
  ok = 1;
  var e = X6(), t = 1 / 0, n = 17976931348623157e292;
  function o(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * n;
    }
    return i === i ? i : 0;
  }
  return Lm = o, Lm;
}
var Dm, ik;
function Q6() {
  if (ik) return Dm;
  ik = 1;
  var e = RI();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return Dm = t, Dm;
}
var jm, sk;
function Z6() {
  if (sk) return jm;
  sk = 1;
  var e = wI(), t = tr(), n = Q6(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return jm = i, jm;
}
var qm, ak;
function J6() {
  if (ak) return qm;
  ak = 1;
  var e = G6(), t = Z6(), n = e(t);
  return qm = n, qm;
}
var zm, lk;
function PI() {
  if (lk) return zm;
  lk = 1;
  var e = S0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return zm = t, zm;
}
var Fm, uk;
function eW() {
  if (uk) return Fm;
  uk = 1;
  var e = x0(), t = JA(), n = yo();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Fm = o, Fm;
}
var $m, ck;
function tW() {
  if (ck) return $m;
  ck = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return $m = e, $m;
}
var Bm, fk;
function nW() {
  if (fk) return Bm;
  fk = 1;
  var e = Qu(), t = w0(), n = tr();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Bm = o, Bm;
}
var Vm, dk;
function C0() {
  if (dk) return Vm;
  dk = 1;
  var e = Ri();
  function t(n, o, i) {
    for (var a = -1, l = n.length; ++a < l; ) {
      var u = n[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : i(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Vm = t, Vm;
}
var Hm, hk;
function rW() {
  if (hk) return Hm;
  hk = 1;
  function e(t, n) {
    return t > n;
  }
  return Hm = e, Hm;
}
var Wm, pk;
function oW() {
  if (pk) return Wm;
  pk = 1;
  var e = C0(), t = rW(), n = xo();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Wm = o, Wm;
}
var Um, gk;
function TI() {
  if (gk) return Um;
  gk = 1;
  var e = Qu(), t = Ei();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return Um = n, Um;
}
var Gm, mk;
function iW() {
  if (mk) return Gm;
  mk = 1;
  var e = mo(), t = nc(), n = jn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return Gm = d, Gm;
}
var Ym, vk;
function AI() {
  if (vk) return Ym;
  vk = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return Ym = e, Ym;
}
var Km, yk;
function sW() {
  if (yk) return Km;
  yk = 1;
  var e = oa(), t = yo();
  function n(o) {
    return e(o, t(o));
  }
  return Km = n, Km;
}
var Xm, xk;
function aW() {
  if (xk) return Xm;
  xk = 1;
  var e = TI(), t = FA(), n = KA(), o = $A(), i = QA(), a = ia(), l = rt(), u = _I(), f = ki(), d = ra(), h = Jt(), p = iW(), m = sa(), v = AI(), E = sW();
  function y(w, _, C, b, N, P, A) {
    var I = v(w, C), O = v(_, C), D = A.get(O);
    if (D) {
      e(w, C, D);
      return;
    }
    var H = P ? P(I, O, C + "", w, _, A) : void 0, q = H === void 0;
    if (q) {
      var B = l(O), X = !B && f(O), L = !B && !X && m(O);
      H = O, B || X || L ? l(I) ? H = I : u(I) ? H = o(I) : X ? (q = !1, H = t(O, !0)) : L ? (q = !1, H = n(O, !0)) : H = [] : p(O) || a(O) ? (H = I, a(I) ? H = E(I) : (!h(I) || d(I)) && (H = i(O))) : q = !1;
    }
    q && (A.set(O, H), N(H, O, b, P, A), A.delete(O)), e(w, C, H);
  }
  return Xm = y, Xm;
}
var Qm, wk;
function lW() {
  if (wk) return Qm;
  wk = 1;
  var e = Xu(), t = TI(), n = x0(), o = aW(), i = Jt(), a = yo(), l = AI();
  function u(f, d, h, p, m) {
    f !== d && n(d, function(v, E) {
      if (m || (m = new e()), i(v))
        o(f, d, E, h, u, p, m);
      else {
        var y = p ? p(l(f, E), v, E + "", f, d, m) : void 0;
        y === void 0 && (y = v), t(f, E, y);
      }
    }, a);
  }
  return Qm = u, Qm;
}
var Zm, _k;
function uW() {
  if (_k) return Zm;
  _k = 1;
  var e = ac(), t = lc();
  function n(o) {
    return e(function(i, a) {
      var l = -1, u = a.length, f = u > 1 ? a[u - 1] : void 0, d = u > 2 ? a[2] : void 0;
      for (f = o.length > 3 && typeof f == "function" ? (u--, f) : void 0, d && t(a[0], a[1], d) && (f = u < 3 ? void 0 : f, u = 1), i = Object(i); ++l < u; ) {
        var h = a[l];
        h && o(i, h, l, f);
      }
      return i;
    });
  }
  return Zm = n, Zm;
}
var Jm, bk;
function cW() {
  if (bk) return Jm;
  bk = 1;
  var e = lW(), t = uW(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return Jm = n, Jm;
}
var ev, Sk;
function II() {
  if (Sk) return ev;
  Sk = 1;
  function e(t, n) {
    return t < n;
  }
  return ev = e, ev;
}
var tv, Ek;
function fW() {
  if (Ek) return tv;
  Ek = 1;
  var e = C0(), t = II(), n = xo();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return tv = o, tv;
}
var nv, Ck;
function dW() {
  if (Ck) return nv;
  Ck = 1;
  var e = C0(), t = tr(), n = II();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return nv = o, nv;
}
var rv, kk;
function hW() {
  if (kk) return rv;
  kk = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return rv = t, rv;
}
var ov, Nk;
function pW() {
  if (Nk) return ov;
  Nk = 1;
  var e = Zu(), t = ic(), n = Ju(), o = Jt(), i = aa();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, p = u.length, m = p - 1, v = l; v != null && ++h < p; ) {
      var E = i(u[h]), y = f;
      if (E === "__proto__" || E === "constructor" || E === "prototype")
        return l;
      if (h != m) {
        var w = v[E];
        y = d ? d(w, E, v) : void 0, y === void 0 && (y = o(w) ? w : n(u[h + 1]) ? [] : {});
      }
      e(v, E, y), v = v[E];
    }
    return l;
  }
  return ov = a, ov;
}
var iv, Rk;
function gW() {
  if (Rk) return iv;
  Rk = 1;
  var e = sc(), t = pW(), n = ic();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return iv = o, iv;
}
var sv, Pk;
function mW() {
  if (Pk) return sv;
  Pk = 1;
  var e = gW(), t = cI();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return sv = n, sv;
}
var av, Tk;
function vW() {
  if (Tk) return av;
  Tk = 1;
  var e = PI(), t = yI(), n = xI();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return av = o, av;
}
var lv, Ak;
function yW() {
  if (Ak) return lv;
  Ak = 1;
  var e = mW(), t = vW(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return lv = n, lv;
}
var uv, Ik;
function xW() {
  if (Ik) return uv;
  Ik = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return uv = n, uv;
}
var cv, Mk;
function wW() {
  if (Mk) return cv;
  Mk = 1;
  var e = xW(), t = lc(), n = RI();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return cv = o, cv;
}
var fv, Ok;
function _W() {
  if (Ok) return fv;
  Ok = 1;
  var e = wW(), t = e();
  return fv = t, fv;
}
var dv, Lk;
function bW() {
  if (Lk) return dv;
  Lk = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return dv = e, dv;
}
var hv, Dk;
function SW() {
  if (Dk) return hv;
  Dk = 1;
  var e = Ri();
  function t(n, o) {
    if (n !== o) {
      var i = n !== void 0, a = n === null, l = n === n, u = e(n), f = o !== void 0, d = o === null, h = o === o, p = e(o);
      if (!d && !p && !u && n > o || u && f && h && !d && !p || a && f && h || !i && h || !l)
        return 1;
      if (!a && !u && !p && n < o || p && i && l && !a && !u || d && i && l || !f && l || !h)
        return -1;
    }
    return 0;
  }
  return hv = t, hv;
}
var pv, jk;
function EW() {
  if (jk) return pv;
  jk = 1;
  var e = SW();
  function t(n, o, i) {
    for (var a = -1, l = n.criteria, u = o.criteria, f = l.length, d = i.length; ++a < f; ) {
      var h = e(l[a], u[a]);
      if (h) {
        if (a >= d)
          return h;
        var p = i[a];
        return h * (p == "desc" ? -1 : 1);
      }
    }
    return n.index - o.index;
  }
  return pv = t, pv;
}
var gv, qk;
function CW() {
  if (qk) return gv;
  qk = 1;
  var e = oc(), t = sc(), n = tr(), o = gI(), i = bW(), a = ec(), l = EW(), u = xo(), f = rt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(w) {
        return t(w, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var v = -1;
    p = e(p, a(n));
    var E = o(h, function(y, w, _) {
      var C = e(p, function(b) {
        return b(y);
      });
      return { criteria: C, index: ++v, value: y };
    });
    return i(E, function(y, w) {
      return l(y, w, m);
    });
  }
  return gv = d, gv;
}
var mv, zk;
function kW() {
  if (zk) return mv;
  zk = 1;
  var e = S0(), t = CW(), n = ac(), o = lc(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return mv = i, mv;
}
var vv, Fk;
function NW() {
  if (Fk) return vv;
  Fk = 1;
  var e = lI(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return vv = n, vv;
}
var yv, $k;
function RW() {
  if ($k) return yv;
  $k = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return yv = e, yv;
}
var xv, Bk;
function PW() {
  if (Bk) return xv;
  Bk = 1;
  var e = Zu(), t = RW();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return xv = n, xv;
}
var wv, Vk;
function We() {
  if (Vk) return wv;
  Vk = 1;
  var e;
  if (typeof l0 == "function")
    try {
      e = {
        cloneDeep: W6(),
        constant: y0(),
        defaults: U6(),
        each: tI(),
        filter: dI(),
        find: J6(),
        flatten: PI(),
        forEach: eI(),
        forIn: eW(),
        has: hI(),
        isUndefined: pI(),
        last: tW(),
        map: mI(),
        mapValues: nW(),
        max: oW(),
        merge: cW(),
        min: fW(),
        minBy: dW(),
        now: hW(),
        pick: yW(),
        range: _W(),
        reduce: vI(),
        sortBy: kW(),
        uniqueId: NW(),
        values: bI(),
        zipObject: PW()
      };
    } catch {
    }
  return e || (e = window._), wv = e, wv;
}
var _v, Hk;
function TW() {
  if (Hk) return _v;
  Hk = 1, _v = e;
  function e() {
    var o = {};
    o._next = o._prev = o, this._sentinel = o;
  }
  e.prototype.dequeue = function() {
    var o = this._sentinel, i = o._prev;
    if (i !== o)
      return t(i), i;
  }, e.prototype.enqueue = function(o) {
    var i = this._sentinel;
    o._prev && o._next && t(o), o._next = i._next, i._next._prev = o, i._next = o, o._prev = i;
  }, e.prototype.toString = function() {
    for (var o = [], i = this._sentinel, a = i._prev; a !== i; )
      o.push(JSON.stringify(a, n)), a = a._prev;
    return "[" + o.join(", ") + "]";
  };
  function t(o) {
    o._prev._next = o._next, o._next._prev = o._prev, delete o._next, delete o._prev;
  }
  function n(o, i) {
    if (o !== "_next" && o !== "_prev")
      return i;
  }
  return _v;
}
var bv, Wk;
function AW() {
  if (Wk) return bv;
  Wk = 1;
  var e = We(), t = vn().Graph, n = TW();
  bv = i;
  var o = e.constant(1);
  function i(d, h) {
    if (d.nodeCount() <= 1)
      return [];
    var p = u(d, h || o), m = a(p.graph, p.buckets, p.zeroIdx);
    return e.flatten(e.map(m, function(v) {
      return d.outEdges(v.v, v.w);
    }), !0);
  }
  function a(d, h, p) {
    for (var m = [], v = h[h.length - 1], E = h[0], y; d.nodeCount(); ) {
      for (; y = E.dequeue(); )
        l(d, h, p, y);
      for (; y = v.dequeue(); )
        l(d, h, p, y);
      if (d.nodeCount()) {
        for (var w = h.length - 2; w > 0; --w)
          if (y = h[w].dequeue(), y) {
            m = m.concat(l(d, h, p, y, !0));
            break;
          }
      }
    }
    return m;
  }
  function l(d, h, p, m, v) {
    var E = v ? [] : void 0;
    return e.forEach(d.inEdges(m.v), function(y) {
      var w = d.edge(y), _ = d.node(y.v);
      v && E.push({ v: y.v, w: y.w }), _.out -= w, f(h, p, _);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var w = d.edge(y), _ = y.w, C = d.node(_);
      C.in -= w, f(h, p, C);
    }), d.removeNode(m.v), E;
  }
  function u(d, h) {
    var p = new t(), m = 0, v = 0;
    e.forEach(d.nodes(), function(w) {
      p.setNode(w, { v: w, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(w) {
      var _ = p.edge(w.v, w.w) || 0, C = h(w), b = _ + C;
      p.setEdge(w.v, w.w, b), v = Math.max(v, p.node(w.v).out += C), m = Math.max(m, p.node(w.w).in += C);
    });
    var E = e.range(v + m + 3).map(function() {
      return new n();
    }), y = m + 1;
    return e.forEach(p.nodes(), function(w) {
      f(E, y, p.node(w));
    }), { graph: p, buckets: E, zeroIdx: y };
  }
  function f(d, h, p) {
    p.out ? p.in ? d[p.out - p.in + h].enqueue(p) : d[d.length - 1].enqueue(p) : d[0].enqueue(p);
  }
  return bv;
}
var Sv, Uk;
function IW() {
  if (Uk) return Sv;
  Uk = 1;
  var e = We(), t = AW();
  Sv = {
    run: n,
    undo: i
  };
  function n(a) {
    var l = a.graph().acyclicer === "greedy" ? t(a, u(a)) : o(a);
    e.forEach(l, function(f) {
      var d = a.edge(f);
      a.removeEdge(f), d.forwardName = f.name, d.reversed = !0, a.setEdge(f.w, f.v, d, e.uniqueId("rev"));
    });
    function u(f) {
      return function(d) {
        return f.edge(d).weight;
      };
    }
  }
  function o(a) {
    var l = [], u = {}, f = {};
    function d(h) {
      e.has(f, h) || (f[h] = !0, u[h] = !0, e.forEach(a.outEdges(h), function(p) {
        e.has(u, p.w) ? l.push(p) : d(p.w);
      }), delete u[h]);
    }
    return e.forEach(a.nodes(), d), l;
  }
  function i(a) {
    e.forEach(a.edges(), function(l) {
      var u = a.edge(l);
      if (u.reversed) {
        a.removeEdge(l);
        var f = u.forwardName;
        delete u.reversed, delete u.forwardName, a.setEdge(l.w, l.v, u, f);
      }
    });
  }
  return Sv;
}
var Ev, Gk;
function Pt() {
  if (Gk) return Ev;
  Gk = 1;
  var e = We(), t = vn().Graph;
  Ev = {
    addDummyNode: n,
    simplify: o,
    asNonCompoundGraph: i,
    successorWeights: a,
    predecessorWeights: l,
    intersectRect: u,
    buildLayerMatrix: f,
    normalizeRanks: d,
    removeEmptyRanks: h,
    addBorderNode: p,
    maxRank: m,
    partition: v,
    time: E,
    notime: y
  };
  function n(w, _, C, b) {
    var N;
    do
      N = e.uniqueId(b);
    while (w.hasNode(N));
    return C.dummy = _, w.setNode(N, C), N;
  }
  function o(w) {
    var _ = new t().setGraph(w.graph());
    return e.forEach(w.nodes(), function(C) {
      _.setNode(C, w.node(C));
    }), e.forEach(w.edges(), function(C) {
      var b = _.edge(C.v, C.w) || { weight: 0, minlen: 1 }, N = w.edge(C);
      _.setEdge(C.v, C.w, {
        weight: b.weight + N.weight,
        minlen: Math.max(b.minlen, N.minlen)
      });
    }), _;
  }
  function i(w) {
    var _ = new t({ multigraph: w.isMultigraph() }).setGraph(w.graph());
    return e.forEach(w.nodes(), function(C) {
      w.children(C).length || _.setNode(C, w.node(C));
    }), e.forEach(w.edges(), function(C) {
      _.setEdge(C, w.edge(C));
    }), _;
  }
  function a(w) {
    var _ = e.map(w.nodes(), function(C) {
      var b = {};
      return e.forEach(w.outEdges(C), function(N) {
        b[N.w] = (b[N.w] || 0) + w.edge(N).weight;
      }), b;
    });
    return e.zipObject(w.nodes(), _);
  }
  function l(w) {
    var _ = e.map(w.nodes(), function(C) {
      var b = {};
      return e.forEach(w.inEdges(C), function(N) {
        b[N.v] = (b[N.v] || 0) + w.edge(N).weight;
      }), b;
    });
    return e.zipObject(w.nodes(), _);
  }
  function u(w, _) {
    var C = w.x, b = w.y, N = _.x - C, P = _.y - b, A = w.width / 2, I = w.height / 2;
    if (!N && !P)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(P) * A > Math.abs(N) * I ? (P < 0 && (I = -I), O = I * N / P, D = I) : (N < 0 && (A = -A), O = A, D = A * P / N), { x: C + O, y: b + D };
  }
  function f(w) {
    var _ = e.map(e.range(m(w) + 1), function() {
      return [];
    });
    return e.forEach(w.nodes(), function(C) {
      var b = w.node(C), N = b.rank;
      e.isUndefined(N) || (_[N][b.order] = C);
    }), _;
  }
  function d(w) {
    var _ = e.min(e.map(w.nodes(), function(C) {
      return w.node(C).rank;
    }));
    e.forEach(w.nodes(), function(C) {
      var b = w.node(C);
      e.has(b, "rank") && (b.rank -= _);
    });
  }
  function h(w) {
    var _ = e.min(e.map(w.nodes(), function(P) {
      return w.node(P).rank;
    })), C = [];
    e.forEach(w.nodes(), function(P) {
      var A = w.node(P).rank - _;
      C[A] || (C[A] = []), C[A].push(P);
    });
    var b = 0, N = w.graph().nodeRankFactor;
    e.forEach(C, function(P, A) {
      e.isUndefined(P) && A % N !== 0 ? --b : b && e.forEach(P, function(I) {
        w.node(I).rank += b;
      });
    });
  }
  function p(w, _, C, b) {
    var N = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (N.rank = C, N.order = b), n(w, "border", N, _);
  }
  function m(w) {
    return e.max(e.map(w.nodes(), function(_) {
      var C = w.node(_).rank;
      if (!e.isUndefined(C))
        return C;
    }));
  }
  function v(w, _) {
    var C = { lhs: [], rhs: [] };
    return e.forEach(w, function(b) {
      _(b) ? C.lhs.push(b) : C.rhs.push(b);
    }), C;
  }
  function E(w, _) {
    var C = e.now();
    try {
      return _();
    } finally {
      console.log(w + " time: " + (e.now() - C) + "ms");
    }
  }
  function y(w, _) {
    return _();
  }
  return Ev;
}
var Cv, Yk;
function MW() {
  if (Yk) return Cv;
  Yk = 1;
  var e = We(), t = Pt();
  Cv = {
    run: n,
    undo: i
  };
  function n(a) {
    a.graph().dummyChains = [], e.forEach(a.edges(), function(l) {
      o(a, l);
    });
  }
  function o(a, l) {
    var u = l.v, f = a.node(u).rank, d = l.w, h = a.node(d).rank, p = l.name, m = a.edge(l), v = m.labelRank;
    if (h !== f + 1) {
      a.removeEdge(l);
      var E, y, w;
      for (w = 0, ++f; f < h; ++w, ++f)
        m.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: m,
          edgeObj: l,
          rank: f
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === v && (y.width = m.width, y.height = m.height, y.dummy = "edge-label", y.labelpos = m.labelpos), a.setEdge(u, E, { weight: m.weight }, p), w === 0 && a.graph().dummyChains.push(E), u = E;
      a.setEdge(u, d, { weight: m.weight }, p);
    }
  }
  function i(a) {
    e.forEach(a.graph().dummyChains, function(l) {
      var u = a.node(l), f = u.edgeLabel, d;
      for (a.setEdge(u.edgeObj, f); u.dummy; )
        d = a.successors(l)[0], a.removeNode(l), f.points.push({ x: u.x, y: u.y }), u.dummy === "edge-label" && (f.x = u.x, f.y = u.y, f.width = u.width, f.height = u.height), l = d, u = a.node(l);
    });
  }
  return Cv;
}
var kv, Kk;
function vu() {
  if (Kk) return kv;
  Kk = 1;
  var e = We();
  kv = {
    longestPath: t,
    slack: n
  };
  function t(o) {
    var i = {};
    function a(l) {
      var u = o.node(l);
      if (e.has(i, l))
        return u.rank;
      i[l] = !0;
      var f = e.min(e.map(o.outEdges(l), function(d) {
        return a(d.w) - o.edge(d).minlen;
      }));
      return (f === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      f === void 0 || // return value of _.map([]) for Lodash 4
      f === null) && (f = 0), u.rank = f;
    }
    e.forEach(o.sources(), a);
  }
  function n(o, i) {
    return o.node(i.w).rank - o.node(i.v).rank - o.edge(i).minlen;
  }
  return kv;
}
var Nv, Xk;
function MI() {
  if (Xk) return Nv;
  Xk = 1;
  var e = We(), t = vn().Graph, n = vu().slack;
  Nv = o;
  function o(u) {
    var f = new t({ directed: !1 }), d = u.nodes()[0], h = u.nodeCount();
    f.setNode(d, {});
    for (var p, m; i(f, u) < h; )
      p = a(f, u), m = f.hasNode(p.v) ? n(u, p) : -n(u, p), l(f, u, m);
    return f;
  }
  function i(u, f) {
    function d(h) {
      e.forEach(f.nodeEdges(h), function(p) {
        var m = p.v, v = h === m ? p.w : m;
        !u.hasNode(v) && !n(f, p) && (u.setNode(v, {}), u.setEdge(h, v, {}), d(v));
      });
    }
    return e.forEach(u.nodes(), d), u.nodeCount();
  }
  function a(u, f) {
    return e.minBy(f.edges(), function(d) {
      if (u.hasNode(d.v) !== u.hasNode(d.w))
        return n(f, d);
    });
  }
  function l(u, f, d) {
    e.forEach(u.nodes(), function(h) {
      f.node(h).rank += d;
    });
  }
  return Nv;
}
var Rv, Qk;
function OW() {
  if (Qk) return Rv;
  Qk = 1;
  var e = We(), t = MI(), n = vu().slack, o = vu().longestPath, i = vn().alg.preorder, a = vn().alg.postorder, l = Pt().simplify;
  Rv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = E, u.exchangeEdges = y;
  function u(b) {
    b = l(b), o(b);
    var N = t(b);
    p(N), f(N, b);
    for (var P, A; P = v(N); )
      A = E(N, b, P), y(N, b, P, A);
  }
  function f(b, N) {
    var P = a(b, b.nodes());
    P = P.slice(0, P.length - 1), e.forEach(P, function(A) {
      d(b, N, A);
    });
  }
  function d(b, N, P) {
    var A = b.node(P), I = A.parent;
    b.edge(P, I).cutvalue = h(b, N, P);
  }
  function h(b, N, P) {
    var A = b.node(P), I = A.parent, O = !0, D = N.edge(P, I), H = 0;
    return D || (O = !1, D = N.edge(I, P)), H = D.weight, e.forEach(N.nodeEdges(P), function(q) {
      var B = q.v === P, X = B ? q.w : q.v;
      if (X !== I) {
        var L = B === O, W = N.edge(q).weight;
        if (H += L ? W : -W, _(b, P, X)) {
          var V = b.edge(P, X).cutvalue;
          H += L ? -V : V;
        }
      }
    }), H;
  }
  function p(b, N) {
    arguments.length < 2 && (N = b.nodes()[0]), m(b, {}, 1, N);
  }
  function m(b, N, P, A, I) {
    var O = P, D = b.node(A);
    return N[A] = !0, e.forEach(b.neighbors(A), function(H) {
      e.has(N, H) || (P = m(b, N, P, H, A));
    }), D.low = O, D.lim = P++, I ? D.parent = I : delete D.parent, P;
  }
  function v(b) {
    return e.find(b.edges(), function(N) {
      return b.edge(N).cutvalue < 0;
    });
  }
  function E(b, N, P) {
    var A = P.v, I = P.w;
    N.hasEdge(A, I) || (A = P.w, I = P.v);
    var O = b.node(A), D = b.node(I), H = O, q = !1;
    O.lim > D.lim && (H = D, q = !0);
    var B = e.filter(N.edges(), function(X) {
      return q === C(b, b.node(X.v), H) && q !== C(b, b.node(X.w), H);
    });
    return e.minBy(B, function(X) {
      return n(N, X);
    });
  }
  function y(b, N, P, A) {
    var I = P.v, O = P.w;
    b.removeEdge(I, O), b.setEdge(A.v, A.w, {}), p(b), f(b, N), w(b, N);
  }
  function w(b, N) {
    var P = e.find(b.nodes(), function(I) {
      return !N.node(I).parent;
    }), A = i(b, P);
    A = A.slice(1), e.forEach(A, function(I) {
      var O = b.node(I).parent, D = N.edge(I, O), H = !1;
      D || (D = N.edge(O, I), H = !0), N.node(I).rank = N.node(O).rank + (H ? D.minlen : -D.minlen);
    });
  }
  function _(b, N, P) {
    return b.hasEdge(N, P);
  }
  function C(b, N, P) {
    return P.low <= N.lim && N.lim <= P.lim;
  }
  return Rv;
}
var Pv, Zk;
function LW() {
  if (Zk) return Pv;
  Zk = 1;
  var e = vu(), t = e.longestPath, n = MI(), o = OW();
  Pv = i;
  function i(f) {
    switch (f.graph().ranker) {
      case "network-simplex":
        u(f);
        break;
      case "tight-tree":
        l(f);
        break;
      case "longest-path":
        a(f);
        break;
      default:
        u(f);
    }
  }
  var a = t;
  function l(f) {
    t(f), n(f);
  }
  function u(f) {
    o(f);
  }
  return Pv;
}
var Tv, Jk;
function DW() {
  if (Jk) return Tv;
  Jk = 1;
  var e = We();
  Tv = t;
  function t(i) {
    var a = o(i);
    e.forEach(i.graph().dummyChains, function(l) {
      for (var u = i.node(l), f = u.edgeObj, d = n(i, a, f.v, f.w), h = d.path, p = d.lca, m = 0, v = h[m], E = !0; l !== f.w; ) {
        if (u = i.node(l), E) {
          for (; (v = h[m]) !== p && i.node(v).maxRank < u.rank; )
            m++;
          v === p && (E = !1);
        }
        if (!E) {
          for (; m < h.length - 1 && i.node(v = h[m + 1]).minRank <= u.rank; )
            m++;
          v = h[m];
        }
        i.setParent(l, v), l = i.successors(l)[0];
      }
    });
  }
  function n(i, a, l, u) {
    var f = [], d = [], h = Math.min(a[l].low, a[u].low), p = Math.max(a[l].lim, a[u].lim), m, v;
    m = l;
    do
      m = i.parent(m), f.push(m);
    while (m && (a[m].low > h || p > a[m].lim));
    for (v = m, m = u; (m = i.parent(m)) !== v; )
      d.push(m);
    return { path: f.concat(d.reverse()), lca: v };
  }
  function o(i) {
    var a = {}, l = 0;
    function u(f) {
      var d = l;
      e.forEach(i.children(f), u), a[f] = { low: d, lim: l++ };
    }
    return e.forEach(i.children(), u), a;
  }
  return Tv;
}
var Av, eN;
function jW() {
  if (eN) return Av;
  eN = 1;
  var e = We(), t = Pt();
  Av = {
    run: n,
    cleanup: l
  };
  function n(u) {
    var f = t.addDummyNode(u, "root", {}, "_root"), d = i(u), h = e.max(e.values(d)) - 1, p = 2 * h + 1;
    u.graph().nestingRoot = f, e.forEach(u.edges(), function(v) {
      u.edge(v).minlen *= p;
    });
    var m = a(u) + 1;
    e.forEach(u.children(), function(v) {
      o(u, f, p, m, h, d, v);
    }), u.graph().nodeRankFactor = p;
  }
  function o(u, f, d, h, p, m, v) {
    var E = u.children(v);
    if (!E.length) {
      v !== f && u.setEdge(f, v, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(u, "_bt"), w = t.addBorderNode(u, "_bb"), _ = u.node(v);
    u.setParent(y, v), _.borderTop = y, u.setParent(w, v), _.borderBottom = w, e.forEach(E, function(C) {
      o(u, f, d, h, p, m, C);
      var b = u.node(C), N = b.borderTop ? b.borderTop : C, P = b.borderBottom ? b.borderBottom : C, A = b.borderTop ? h : 2 * h, I = N !== P ? 1 : p - m[v] + 1;
      u.setEdge(y, N, {
        weight: A,
        minlen: I,
        nestingEdge: !0
      }), u.setEdge(P, w, {
        weight: A,
        minlen: I,
        nestingEdge: !0
      });
    }), u.parent(v) || u.setEdge(f, y, { weight: 0, minlen: p + m[v] });
  }
  function i(u) {
    var f = {};
    function d(h, p) {
      var m = u.children(h);
      m && m.length && e.forEach(m, function(v) {
        d(v, p + 1);
      }), f[h] = p;
    }
    return e.forEach(u.children(), function(h) {
      d(h, 1);
    }), f;
  }
  function a(u) {
    return e.reduce(u.edges(), function(f, d) {
      return f + u.edge(d).weight;
    }, 0);
  }
  function l(u) {
    var f = u.graph();
    u.removeNode(f.nestingRoot), delete f.nestingRoot, e.forEach(u.edges(), function(d) {
      var h = u.edge(d);
      h.nestingEdge && u.removeEdge(d);
    });
  }
  return Av;
}
var Iv, tN;
function qW() {
  if (tN) return Iv;
  tN = 1;
  var e = We(), t = Pt();
  Iv = n;
  function n(i) {
    function a(l) {
      var u = i.children(l), f = i.node(l);
      if (u.length && e.forEach(u, a), e.has(f, "minRank")) {
        f.borderLeft = [], f.borderRight = [];
        for (var d = f.minRank, h = f.maxRank + 1; d < h; ++d)
          o(i, "borderLeft", "_bl", l, f, d), o(i, "borderRight", "_br", l, f, d);
      }
    }
    e.forEach(i.children(), a);
  }
  function o(i, a, l, u, f, d) {
    var h = { width: 0, height: 0, rank: d, borderType: a }, p = f[a][d - 1], m = t.addDummyNode(i, "border", h, l);
    f[a][d] = m, i.setParent(m, u), p && i.setEdge(p, m, { weight: 1 });
  }
  return Iv;
}
var Mv, nN;
function zW() {
  if (nN) return Mv;
  nN = 1;
  var e = We();
  Mv = {
    adjust: t,
    undo: n
  };
  function t(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "lr" || h === "rl") && o(d);
  }
  function n(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "bt" || h === "rl") && a(d), (h === "lr" || h === "rl") && (u(d), o(d));
  }
  function o(d) {
    e.forEach(d.nodes(), function(h) {
      i(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      i(d.edge(h));
    });
  }
  function i(d) {
    var h = d.width;
    d.width = d.height, d.height = h;
  }
  function a(d) {
    e.forEach(d.nodes(), function(h) {
      l(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      var p = d.edge(h);
      e.forEach(p.points, l), e.has(p, "y") && l(p);
    });
  }
  function l(d) {
    d.y = -d.y;
  }
  function u(d) {
    e.forEach(d.nodes(), function(h) {
      f(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      var p = d.edge(h);
      e.forEach(p.points, f), e.has(p, "x") && f(p);
    });
  }
  function f(d) {
    var h = d.x;
    d.x = d.y, d.y = h;
  }
  return Mv;
}
var Ov, rN;
function FW() {
  if (rN) return Ov;
  rN = 1;
  var e = We();
  Ov = t;
  function t(n) {
    var o = {}, i = e.filter(n.nodes(), function(d) {
      return !n.children(d).length;
    }), a = e.max(e.map(i, function(d) {
      return n.node(d).rank;
    })), l = e.map(e.range(a + 1), function() {
      return [];
    });
    function u(d) {
      if (!e.has(o, d)) {
        o[d] = !0;
        var h = n.node(d);
        l[h.rank].push(d), e.forEach(n.successors(d), u);
      }
    }
    var f = e.sortBy(i, function(d) {
      return n.node(d).rank;
    });
    return e.forEach(f, u), l;
  }
  return Ov;
}
var Lv, oN;
function $W() {
  if (oN) return Lv;
  oN = 1;
  var e = We();
  Lv = t;
  function t(o, i) {
    for (var a = 0, l = 1; l < i.length; ++l)
      a += n(o, i[l - 1], i[l]);
    return a;
  }
  function n(o, i, a) {
    for (var l = e.zipObject(
      a,
      e.map(a, function(m, v) {
        return v;
      })
    ), u = e.flatten(e.map(i, function(m) {
      return e.sortBy(e.map(o.outEdges(m), function(v) {
        return { pos: l[v.w], weight: o.edge(v).weight };
      }), "pos");
    }), !0), f = 1; f < a.length; ) f <<= 1;
    var d = 2 * f - 1;
    f -= 1;
    var h = e.map(new Array(d), function() {
      return 0;
    }), p = 0;
    return e.forEach(u.forEach(function(m) {
      var v = m.pos + f;
      h[v] += m.weight;
      for (var E = 0; v > 0; )
        v % 2 && (E += h[v + 1]), v = v - 1 >> 1, h[v] += m.weight;
      p += m.weight * E;
    })), p;
  }
  return Lv;
}
var Dv, iN;
function BW() {
  if (iN) return Dv;
  iN = 1;
  var e = We();
  Dv = t;
  function t(n, o) {
    return e.map(o, function(i) {
      var a = n.inEdges(i);
      if (a.length) {
        var l = e.reduce(a, function(u, f) {
          var d = n.edge(f), h = n.node(f.v);
          return {
            sum: u.sum + d.weight * h.order,
            weight: u.weight + d.weight
          };
        }, { sum: 0, weight: 0 });
        return {
          v: i,
          barycenter: l.sum / l.weight,
          weight: l.weight
        };
      } else
        return { v: i };
    });
  }
  return Dv;
}
var jv, sN;
function VW() {
  if (sN) return jv;
  sN = 1;
  var e = We();
  jv = t;
  function t(i, a) {
    var l = {};
    e.forEach(i, function(f, d) {
      var h = l[f.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [f.v],
        i: d
      };
      e.isUndefined(f.barycenter) || (h.barycenter = f.barycenter, h.weight = f.weight);
    }), e.forEach(a.edges(), function(f) {
      var d = l[f.v], h = l[f.w];
      !e.isUndefined(d) && !e.isUndefined(h) && (h.indegree++, d.out.push(l[f.w]));
    });
    var u = e.filter(l, function(f) {
      return !f.indegree;
    });
    return n(u);
  }
  function n(i) {
    var a = [];
    function l(d) {
      return function(h) {
        h.merged || (e.isUndefined(h.barycenter) || e.isUndefined(d.barycenter) || h.barycenter >= d.barycenter) && o(d, h);
      };
    }
    function u(d) {
      return function(h) {
        h.in.push(d), --h.indegree === 0 && i.push(h);
      };
    }
    for (; i.length; ) {
      var f = i.pop();
      a.push(f), e.forEach(f.in.reverse(), l(f)), e.forEach(f.out, u(f));
    }
    return e.map(
      e.filter(a, function(d) {
        return !d.merged;
      }),
      function(d) {
        return e.pick(d, ["vs", "i", "barycenter", "weight"]);
      }
    );
  }
  function o(i, a) {
    var l = 0, u = 0;
    i.weight && (l += i.barycenter * i.weight, u += i.weight), a.weight && (l += a.barycenter * a.weight, u += a.weight), i.vs = a.vs.concat(i.vs), i.barycenter = l / u, i.weight = u, i.i = Math.min(a.i, i.i), a.merged = !0;
  }
  return jv;
}
var qv, aN;
function HW() {
  if (aN) return qv;
  aN = 1;
  var e = We(), t = Pt();
  qv = n;
  function n(a, l) {
    var u = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = u.lhs, d = e.sortBy(u.rhs, function(y) {
      return -y.i;
    }), h = [], p = 0, m = 0, v = 0;
    f.sort(i(!!l)), v = o(h, d, v), e.forEach(f, function(y) {
      v += y.vs.length, h.push(y.vs), p += y.barycenter * y.weight, m += y.weight, v = o(h, d, v);
    });
    var E = { vs: e.flatten(h, !0) };
    return m && (E.barycenter = p / m, E.weight = m), E;
  }
  function o(a, l, u) {
    for (var f; l.length && (f = e.last(l)).i <= u; )
      l.pop(), a.push(f.vs), u++;
    return u;
  }
  function i(a) {
    return function(l, u) {
      return l.barycenter < u.barycenter ? -1 : l.barycenter > u.barycenter ? 1 : a ? u.i - l.i : l.i - u.i;
    };
  }
  return qv;
}
var zv, lN;
function WW() {
  if (lN) return zv;
  lN = 1;
  var e = We(), t = BW(), n = VW(), o = HW();
  zv = i;
  function i(u, f, d, h) {
    var p = u.children(f), m = u.node(f), v = m ? m.borderLeft : void 0, E = m ? m.borderRight : void 0, y = {};
    v && (p = e.filter(p, function(P) {
      return P !== v && P !== E;
    }));
    var w = t(u, p);
    e.forEach(w, function(P) {
      if (u.children(P.v).length) {
        var A = i(u, P.v, d, h);
        y[P.v] = A, e.has(A, "barycenter") && l(P, A);
      }
    });
    var _ = n(w, d);
    a(_, y);
    var C = o(_, h);
    if (v && (C.vs = e.flatten([v, C.vs, E], !0), u.predecessors(v).length)) {
      var b = u.node(u.predecessors(v)[0]), N = u.node(u.predecessors(E)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + b.order + N.order) / (C.weight + 2), C.weight += 2;
    }
    return C;
  }
  function a(u, f) {
    e.forEach(u, function(d) {
      d.vs = e.flatten(d.vs.map(function(h) {
        return f[h] ? f[h].vs : h;
      }), !0);
    });
  }
  function l(u, f) {
    e.isUndefined(u.barycenter) ? (u.barycenter = f.barycenter, u.weight = f.weight) : (u.barycenter = (u.barycenter * u.weight + f.barycenter * f.weight) / (u.weight + f.weight), u.weight += f.weight);
  }
  return zv;
}
var Fv, uN;
function UW() {
  if (uN) return Fv;
  uN = 1;
  var e = We(), t = vn().Graph;
  Fv = n;
  function n(i, a, l) {
    var u = o(i), f = new t({ compound: !0 }).setGraph({ root: u }).setDefaultNodeLabel(function(d) {
      return i.node(d);
    });
    return e.forEach(i.nodes(), function(d) {
      var h = i.node(d), p = i.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, p || u), e.forEach(i[l](d), function(m) {
        var v = m.v === d ? m.w : m.v, E = f.edge(v, d), y = e.isUndefined(E) ? 0 : E.weight;
        f.setEdge(v, d, { weight: i.edge(m).weight + y });
      }), e.has(h, "minRank") && f.setNode(d, {
        borderLeft: h.borderLeft[a],
        borderRight: h.borderRight[a]
      }));
    }), f;
  }
  function o(i) {
    for (var a; i.hasNode(a = e.uniqueId("_root")); ) ;
    return a;
  }
  return Fv;
}
var $v, cN;
function GW() {
  if (cN) return $v;
  cN = 1;
  var e = We();
  $v = t;
  function t(n, o, i) {
    var a = {}, l;
    e.forEach(i, function(u) {
      for (var f = n.parent(u), d, h; f; ) {
        if (d = n.parent(f), d ? (h = a[d], a[d] = f) : (h = l, l = f), h && h !== f) {
          o.setEdge(h, f);
          return;
        }
        f = d;
      }
    });
  }
  return $v;
}
var Bv, fN;
function YW() {
  if (fN) return Bv;
  fN = 1;
  var e = We(), t = FW(), n = $W(), o = WW(), i = UW(), a = GW(), l = vn().Graph, u = Pt();
  Bv = f;
  function f(m) {
    var v = u.maxRank(m), E = d(m, e.range(1, v + 1), "inEdges"), y = d(m, e.range(v - 1, -1, -1), "outEdges"), w = t(m);
    p(m, w);
    for (var _ = Number.POSITIVE_INFINITY, C, b = 0, N = 0; N < 4; ++b, ++N) {
      h(b % 2 ? E : y, b % 4 >= 2), w = u.buildLayerMatrix(m);
      var P = n(m, w);
      P < _ && (N = 0, C = e.cloneDeep(w), _ = P);
    }
    p(m, C);
  }
  function d(m, v, E) {
    return e.map(v, function(y) {
      return i(m, y, E);
    });
  }
  function h(m, v) {
    var E = new l();
    e.forEach(m, function(y) {
      var w = y.graph().root, _ = o(y, w, E, v);
      e.forEach(_.vs, function(C, b) {
        y.node(C).order = b;
      }), a(y, E, _.vs);
    });
  }
  function p(m, v) {
    e.forEach(v, function(E) {
      e.forEach(E, function(y, w) {
        m.node(y).order = w;
      });
    });
  }
  return Bv;
}
var Vv, dN;
function KW() {
  if (dN) return Vv;
  dN = 1;
  var e = We(), t = vn().Graph, n = Pt();
  Vv = {
    positionX: E,
    findType1Conflicts: o,
    findType2Conflicts: i,
    addConflict: l,
    hasConflict: u,
    verticalAlignment: f,
    horizontalCompaction: d,
    alignCoordinates: m,
    findSmallestWidthAlignment: p,
    balance: v
  };
  function o(_, C) {
    var b = {};
    function N(P, A) {
      var I = 0, O = 0, D = P.length, H = e.last(A);
      return e.forEach(A, function(q, B) {
        var X = a(_, q), L = X ? _.node(X).order : D;
        (X || q === H) && (e.forEach(A.slice(O, B + 1), function(W) {
          e.forEach(_.predecessors(W), function(V) {
            var Y = _.node(V), M = Y.order;
            (M < I || L < M) && !(Y.dummy && _.node(W).dummy) && l(b, V, W);
          });
        }), O = B + 1, I = L);
      }), A;
    }
    return e.reduce(C, N), b;
  }
  function i(_, C) {
    var b = {};
    function N(A, I, O, D, H) {
      var q;
      e.forEach(e.range(I, O), function(B) {
        q = A[B], _.node(q).dummy && e.forEach(_.predecessors(q), function(X) {
          var L = _.node(X);
          L.dummy && (L.order < D || L.order > H) && l(b, X, q);
        });
      });
    }
    function P(A, I) {
      var O = -1, D, H = 0;
      return e.forEach(I, function(q, B) {
        if (_.node(q).dummy === "border") {
          var X = _.predecessors(q);
          X.length && (D = _.node(X[0]).order, N(I, H, B, O, D), H = B, O = D);
        }
        N(I, H, I.length, D, A.length);
      }), I;
    }
    return e.reduce(C, P), b;
  }
  function a(_, C) {
    if (_.node(C).dummy)
      return e.find(_.predecessors(C), function(b) {
        return _.node(b).dummy;
      });
  }
  function l(_, C, b) {
    if (C > b) {
      var N = C;
      C = b, b = N;
    }
    var P = _[C];
    P || (_[C] = P = {}), P[b] = !0;
  }
  function u(_, C, b) {
    if (C > b) {
      var N = C;
      C = b, b = N;
    }
    return e.has(_[C], b);
  }
  function f(_, C, b, N) {
    var P = {}, A = {}, I = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(D, H) {
        P[D] = D, A[D] = D, I[D] = H;
      });
    }), e.forEach(C, function(O) {
      var D = -1;
      e.forEach(O, function(H) {
        var q = N(H);
        if (q.length) {
          q = e.sortBy(q, function(V) {
            return I[V];
          });
          for (var B = (q.length - 1) / 2, X = Math.floor(B), L = Math.ceil(B); X <= L; ++X) {
            var W = q[X];
            A[H] === H && D < I[W] && !u(b, H, W) && (A[W] = H, A[H] = P[H] = P[W], D = I[W]);
          }
        }
      });
    }), { root: P, align: A };
  }
  function d(_, C, b, N, P) {
    var A = {}, I = h(_, C, b, P), O = P ? "borderLeft" : "borderRight";
    function D(B, X) {
      for (var L = I.nodes(), W = L.pop(), V = {}; W; )
        V[W] ? B(W) : (V[W] = !0, L.push(W), L = L.concat(X(W))), W = L.pop();
    }
    function H(B) {
      A[B] = I.inEdges(B).reduce(function(X, L) {
        return Math.max(X, A[L.v] + I.edge(L));
      }, 0);
    }
    function q(B) {
      var X = I.outEdges(B).reduce(function(W, V) {
        return Math.min(W, A[V.w] - I.edge(V));
      }, Number.POSITIVE_INFINITY), L = _.node(B);
      X !== Number.POSITIVE_INFINITY && L.borderType !== O && (A[B] = Math.max(A[B], X));
    }
    return D(H, I.predecessors.bind(I)), D(q, I.successors.bind(I)), e.forEach(N, function(B) {
      A[B] = A[b[B]];
    }), A;
  }
  function h(_, C, b, N) {
    var P = new t(), A = _.graph(), I = y(A.nodesep, A.edgesep, N);
    return e.forEach(C, function(O) {
      var D;
      e.forEach(O, function(H) {
        var q = b[H];
        if (P.setNode(q), D) {
          var B = b[D], X = P.edge(B, q);
          P.setEdge(B, q, Math.max(I(_, H, D), X || 0));
        }
        D = H;
      });
    }), P;
  }
  function p(_, C) {
    return e.minBy(e.values(C), function(b) {
      var N = Number.NEGATIVE_INFINITY, P = Number.POSITIVE_INFINITY;
      return e.forIn(b, function(A, I) {
        var O = w(_, I) / 2;
        N = Math.max(A + O, N), P = Math.min(A - O, P);
      }), N - P;
    });
  }
  function m(_, C) {
    var b = e.values(C), N = e.min(b), P = e.max(b);
    e.forEach(["u", "d"], function(A) {
      e.forEach(["l", "r"], function(I) {
        var O = A + I, D = _[O], H;
        if (D !== C) {
          var q = e.values(D);
          H = I === "l" ? N - e.min(q) : P - e.max(q), H && (_[O] = e.mapValues(D, function(B) {
            return B + H;
          }));
        }
      });
    });
  }
  function v(_, C) {
    return e.mapValues(_.ul, function(b, N) {
      if (C)
        return _[C.toLowerCase()][N];
      var P = e.sortBy(e.map(_, N));
      return (P[1] + P[2]) / 2;
    });
  }
  function E(_) {
    var C = n.buildLayerMatrix(_), b = e.merge(
      o(_, C),
      i(_, C)
    ), N = {}, P;
    e.forEach(["u", "d"], function(I) {
      P = I === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (P = e.map(P, function(B) {
          return e.values(B).reverse();
        }));
        var D = (I === "u" ? _.predecessors : _.successors).bind(_), H = f(_, P, b, D), q = d(
          _,
          P,
          H.root,
          H.align,
          O === "r"
        );
        O === "r" && (q = e.mapValues(q, function(B) {
          return -B;
        })), N[I + O] = q;
      });
    });
    var A = p(_, N);
    return m(N, A), v(N, _.graph().align);
  }
  function y(_, C, b) {
    return function(N, P, A) {
      var I = N.node(P), O = N.node(A), D = 0, H;
      if (D += I.width / 2, e.has(I, "labelpos"))
        switch (I.labelpos.toLowerCase()) {
          case "l":
            H = -I.width / 2;
            break;
          case "r":
            H = I.width / 2;
            break;
        }
      if (H && (D += b ? H : -H), H = 0, D += (I.dummy ? C : _) / 2, D += (O.dummy ? C : _) / 2, D += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            H = O.width / 2;
            break;
          case "r":
            H = -O.width / 2;
            break;
        }
      return H && (D += b ? H : -H), H = 0, D;
    };
  }
  function w(_, C) {
    return _.node(C).width;
  }
  return Vv;
}
var Hv, hN;
function XW() {
  if (hN) return Hv;
  hN = 1;
  var e = We(), t = Pt(), n = KW().positionX;
  Hv = o;
  function o(a) {
    a = t.asNonCompoundGraph(a), i(a), e.forEach(n(a), function(l, u) {
      a.node(u).x = l;
    });
  }
  function i(a) {
    var l = t.buildLayerMatrix(a), u = a.graph().ranksep, f = 0;
    e.forEach(l, function(d) {
      var h = e.max(e.map(d, function(p) {
        return a.node(p).height;
      }));
      e.forEach(d, function(p) {
        a.node(p).y = f + h / 2;
      }), f += h + u;
    });
  }
  return Hv;
}
var Wv, pN;
function QW() {
  if (pN) return Wv;
  pN = 1;
  var e = We(), t = IW(), n = MW(), o = LW(), i = Pt().normalizeRanks, a = DW(), l = Pt().removeEmptyRanks, u = jW(), f = qW(), d = zW(), h = YW(), p = XW(), m = Pt(), v = vn().Graph;
  Wv = E;
  function E($, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var K = ee("  buildLayoutGraph", function() {
        return D($);
      });
      ee("  runLayout", function() {
        y(K, ee);
      }), ee("  updateInputGraph", function() {
        w($, K);
      });
    });
  }
  function y($, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      H($);
    }), Z("    removeSelfEdges", function() {
      z($);
    }), Z("    acyclic", function() {
      t.run($);
    }), Z("    nestingGraph.run", function() {
      u.run($);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph($));
    }), Z("    injectEdgeLabelProxies", function() {
      q($);
    }), Z("    removeEmptyRanks", function() {
      l($);
    }), Z("    nestingGraph.cleanup", function() {
      u.cleanup($);
    }), Z("    normalizeRanks", function() {
      i($);
    }), Z("    assignRankMinMax", function() {
      B($);
    }), Z("    removeEdgeLabelProxies", function() {
      X($);
    }), Z("    normalize.run", function() {
      n.run($);
    }), Z("    parentDummyChains", function() {
      a($);
    }), Z("    addBorderSegments", function() {
      f($);
    }), Z("    order", function() {
      h($);
    }), Z("    insertSelfEdges", function() {
      Q($);
    }), Z("    adjustCoordinateSystem", function() {
      d.adjust($);
    }), Z("    position", function() {
      p($);
    }), Z("    positionSelfEdges", function() {
      j($);
    }), Z("    removeBorderNodes", function() {
      M($);
    }), Z("    normalize.undo", function() {
      n.undo($);
    }), Z("    fixupEdgeLabelCoords", function() {
      V($);
    }), Z("    undoCoordinateSystem", function() {
      d.undo($);
    }), Z("    translateGraph", function() {
      L($);
    }), Z("    assignNodeIntersects", function() {
      W($);
    }), Z("    reversePoints", function() {
      Y($);
    }), Z("    acyclic.undo", function() {
      t.undo($);
    });
  }
  function w($, Z) {
    e.forEach($.nodes(), function(ee) {
      var K = $.node(ee), te = Z.node(ee);
      K && (K.x = te.x, K.y = te.y, Z.children(ee).length && (K.width = te.width, K.height = te.height));
    }), e.forEach($.edges(), function(ee) {
      var K = $.edge(ee), te = Z.edge(ee);
      K.points = te.points, e.has(te, "x") && (K.x = te.x, K.y = te.y);
    }), $.graph().width = Z.graph().width, $.graph().height = Z.graph().height;
  }
  var _ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, b = ["acyclicer", "ranker", "rankdir", "align"], N = ["width", "height"], P = { width: 0, height: 0 }, A = ["minlen", "weight", "width", "height", "labeloffset"], I = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function D($) {
    var Z = new v({ multigraph: !0, compound: !0 }), ee = ie($.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      U(ee, _),
      e.pick(ee, b)
    )), e.forEach($.nodes(), function(K) {
      var te = ie($.node(K));
      Z.setNode(K, e.defaults(U(te, N), P)), Z.setParent(K, $.parent(K));
    }), e.forEach($.edges(), function(K) {
      var te = ie($.edge(K));
      Z.setEdge(K, e.merge(
        {},
        I,
        U(te, A),
        e.pick(te, O)
      ));
    }), Z;
  }
  function H($) {
    var Z = $.graph();
    Z.ranksep /= 2, e.forEach($.edges(), function(ee) {
      var K = $.edge(ee);
      K.minlen *= 2, K.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? K.width += K.labeloffset : K.height += K.labeloffset);
    });
  }
  function q($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z);
      if (ee.width && ee.height) {
        var K = $.node(Z.v), te = $.node(Z.w), se = { rank: (te.rank - K.rank) / 2 + K.rank, e: Z };
        m.addDummyNode($, "edge-proxy", se, "_ep");
      }
    });
  }
  function B($) {
    var Z = 0;
    e.forEach($.nodes(), function(ee) {
      var K = $.node(ee);
      K.borderTop && (K.minRank = $.node(K.borderTop).rank, K.maxRank = $.node(K.borderBottom).rank, Z = e.max(Z, K.maxRank));
    }), $.graph().maxRank = Z;
  }
  function X($) {
    e.forEach($.nodes(), function(Z) {
      var ee = $.node(Z);
      ee.dummy === "edge-proxy" && ($.edge(ee.e).labelRank = ee.rank, $.removeNode(Z));
    });
  }
  function L($) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, K = Number.POSITIVE_INFINITY, te = 0, se = $.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var be = pe.x, me = pe.y, Re = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Re / 2), ee = Math.max(ee, be + Re / 2), K = Math.min(K, me - Ee / 2), te = Math.max(te, me + Ee / 2);
    }
    e.forEach($.nodes(), function(pe) {
      de($.node(pe));
    }), e.forEach($.edges(), function(pe) {
      var be = $.edge(pe);
      e.has(be, "x") && de(be);
    }), Z -= ae, K -= ce, e.forEach($.nodes(), function(pe) {
      var be = $.node(pe);
      be.x -= Z, be.y -= K;
    }), e.forEach($.edges(), function(pe) {
      var be = $.edge(pe);
      e.forEach(be.points, function(me) {
        me.x -= Z, me.y -= K;
      }), e.has(be, "x") && (be.x -= Z), e.has(be, "y") && (be.y -= K);
    }), se.width = ee - Z + ae, se.height = te - K + ce;
  }
  function W($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z), K = $.node(Z.v), te = $.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = K), ee.points.unshift(m.intersectRect(K, se)), ee.points.push(m.intersectRect(te, ae));
    });
  }
  function V($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z);
      if (e.has(ee, "x"))
        switch ((ee.labelpos === "l" || ee.labelpos === "r") && (ee.width -= ee.labeloffset), ee.labelpos) {
          case "l":
            ee.x -= ee.width / 2 + ee.labeloffset;
            break;
          case "r":
            ee.x += ee.width / 2 + ee.labeloffset;
            break;
        }
    });
  }
  function Y($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z);
      ee.reversed && ee.points.reverse();
    });
  }
  function M($) {
    e.forEach($.nodes(), function(Z) {
      if ($.children(Z).length) {
        var ee = $.node(Z), K = $.node(ee.borderTop), te = $.node(ee.borderBottom), se = $.node(e.last(ee.borderLeft)), ae = $.node(e.last(ee.borderRight));
        ee.width = Math.abs(ae.x - se.x), ee.height = Math.abs(te.y - K.y), ee.x = se.x + ee.width / 2, ee.y = K.y + ee.height / 2;
      }
    }), e.forEach($.nodes(), function(Z) {
      $.node(Z).dummy === "border" && $.removeNode(Z);
    });
  }
  function z($) {
    e.forEach($.edges(), function(Z) {
      if (Z.v === Z.w) {
        var ee = $.node(Z.v);
        ee.selfEdges || (ee.selfEdges = []), ee.selfEdges.push({ e: Z, label: $.edge(Z) }), $.removeEdge(Z);
      }
    });
  }
  function Q($) {
    var Z = m.buildLayerMatrix($);
    e.forEach(Z, function(ee) {
      var K = 0;
      e.forEach(ee, function(te, se) {
        var ae = $.node(te);
        ae.order = se + K, e.forEach(ae.selfEdges, function(ce) {
          m.addDummyNode($, "selfedge", {
            width: ce.label.width,
            height: ce.label.height,
            rank: ae.rank,
            order: se + ++K,
            e: ce.e,
            label: ce.label
          }, "_se");
        }), delete ae.selfEdges;
      });
    });
  }
  function j($) {
    e.forEach($.nodes(), function(Z) {
      var ee = $.node(Z);
      if (ee.dummy === "selfedge") {
        var K = $.node(ee.e.v), te = K.x + K.width / 2, se = K.y, ae = ee.x - te, ce = K.height / 2;
        $.setEdge(ee.e, ee.label), $.removeNode(Z), ee.label.points = [
          { x: te + 2 * ae / 3, y: se - ce },
          { x: te + 5 * ae / 6, y: se - ce },
          { x: te + ae, y: se },
          { x: te + 5 * ae / 6, y: se + ce },
          { x: te + 2 * ae / 3, y: se + ce }
        ], ee.label.x = ee.x, ee.label.y = ee.y;
      }
    });
  }
  function U($, Z) {
    return e.mapValues(e.pick($, Z), Number);
  }
  function ie($) {
    var Z = {};
    return e.forEach($, function(ee, K) {
      Z[K.toLowerCase()] = ee;
    }), Z;
  }
  return Wv;
}
var Uv, gN;
function ZW() {
  if (gN) return Uv;
  gN = 1;
  var e = We(), t = Pt(), n = vn().Graph;
  Uv = {
    debugOrdering: o
  };
  function o(i) {
    var a = t.buildLayerMatrix(i), l = new n({ compound: !0, multigraph: !0 }).setGraph({});
    return e.forEach(i.nodes(), function(u) {
      l.setNode(u, { label: u }), l.setParent(u, "layer" + i.node(u).rank);
    }), e.forEach(i.edges(), function(u) {
      l.setEdge(u.v, u.w, {}, u.name);
    }), e.forEach(a, function(u, f) {
      var d = "layer" + f;
      l.setNode(d, { rank: "same" }), e.reduce(u, function(h, p) {
        return l.setEdge(h, p, { style: "invis" }), p;
      });
    }), l;
  }
  return Uv;
}
var Gv, mN;
function JW() {
  return mN || (mN = 1, Gv = "0.8.5"), Gv;
}
var Yv, vN;
function eU() {
  return vN || (vN = 1, Yv = {
    graphlib: vn(),
    layout: QW(),
    debug: ZW(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: JW()
  }), Yv;
}
var tU = eU();
const yN = /* @__PURE__ */ yu(tU), nU = 250, rU = 200, oU = 120, iU = 180;
function xN(e) {
  var l, u, f, d, h;
  if ((l = e.measured) != null && l.width && ((u = e.measured) != null && u.height))
    return {
      width: e.measured.width,
      height: e.measured.height
    };
  const t = e.data || {}, n = 80, o = 50;
  let i = 0;
  if ((f = t.grid) != null && f.cells) {
    for (const m of t.grid.cells)
      i += ((d = m.components) == null ? void 0 : d.length) || 0;
    const p = ((h = t.grid.rows) == null ? void 0 : h.length) || 1;
    i = Math.max(i, p * 2);
  }
  const a = n + i * o;
  return {
    width: e.width || nU,
    height: Math.max(rU, a)
  };
}
function sU(e, t, n = "TB") {
  const o = new yN.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: oU,
    ranksep: iU
  }), e.forEach((a) => {
    const { width: l, height: u } = xN(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), yN.layout(o), { nodes: e.map((a) => {
    const l = o.node(a.id), { width: u, height: f } = xN(a);
    return {
      ...a,
      position: {
        x: l.x - u / 2,
        y: l.y - f / 2
      }
    };
  }), edges: t };
}
function aU(e, t, n) {
  return { onLayout: k.useCallback(
    (i) => {
      const { nodes: a } = sU(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function lU(e, t) {
  return { exportToJSON: k.useCallback(() => {
    const i = JSON.stringify({
      nodes: e,
      edges: t
    }, null, 2), a = new Blob([i], { type: "application/json" }), l = URL.createObjectURL(a), u = document.createElement("a");
    u.href = l, u.download = "nodeflow-data.json", u.click(), URL.revokeObjectURL(l);
  }, [e, t]) };
}
function uU(e, t) {
  const [n, o] = k.useState(null), i = k.useCallback(
    (d, h) => {
      d.preventDefault(), o({
        id: h.id,
        type: "node",
        x: d.clientX,
        y: d.clientY
      });
    },
    []
  ), a = k.useCallback(
    (d, h) => {
      d.preventDefault(), o({
        id: h.id,
        type: "edge",
        x: d.clientX,
        y: d.clientY
      });
    },
    []
  ), l = k.useCallback(() => {
    o(null);
  }, []), u = k.useCallback(() => {
    n && (n.type === "node" ? (e((d) => d.filter((h) => h.id !== n.id)), t(
      (d) => d.filter(
        (h) => h.source !== n.id && h.target !== n.id
      )
    )) : t((d) => d.filter((h) => h.id !== n.id)), o(null));
  }, [n, e, t]), f = k.useCallback(() => {
    o(null);
  }, []);
  return {
    contextMenu: n,
    onNodeContextMenu: i,
    onEdgeContextMenu: a,
    onPaneClick: l,
    onDelete: u,
    closeContextMenu: f
  };
}
const OI = k.createContext(null), LI = k.createContext(null), cU = () => {
  const e = k.useContext(OI);
  if (!e)
    throw new Error("useSetNodesDict must be used within SetNodesDictContext.Provider");
  return e;
}, fU = () => {
  const e = k.useContext(LI);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
}, mU = cU;
function dU() {
  const [e, t] = xs("nodes"), [n, o] = xs("edges"), [i] = xs("node_templates"), [a] = xs("height"), [l, u] = xs("node_values"), f = k.useMemo(() => Object.values(e || {}), [e]), d = k.useMemo(() => {
    const D = /* @__PURE__ */ new Map();
    return i.forEach((H) => {
      D.set(H.type, H);
    }), D;
  }, [i]), h = k.useMemo(() => !l || Object.keys(l).length === 0 ? f : f.map((D) => {
    const H = d.get(D.type), q = l[D.id] || {};
    return H ? {
      ...D,
      data: {
        ...D.data,
        label: H.label,
        // Template label
        ...H.definition,
        // Visual structure (grid, style)
        values: q
        // Instance values (from node_values)
      }
    } : (console.warn(`Template not found for node type: ${D.type}`), D);
  }), [f, d, l]), p = k.useCallback(
    (D) => {
      t((H) => {
        const q = Object.values(H), B = OR(D, q), X = {};
        return B.forEach((L) => {
          X[L.id] = L;
        }), X;
      });
    },
    [t]
  ), m = k.useCallback(
    (D) => {
      o((H) => LR(D, H));
    },
    [o]
  ), v = k.useMemo(() => gV(i), [i]), E = k.useCallback(
    (D) => {
      o((H) => gR(D, H));
    },
    [o]
  ), y = k.useCallback(
    (D) => {
      const H = `node-${Date.now()}`, q = {
        id: H,
        type: D.type,
        position: { x: 100, y: 100 },
        data: {}
        // Empty data - all config in template
      };
      t((B) => ({
        ...B,
        [H]: q
      })), D.defaultValues && Object.keys(D.defaultValues).length > 0 && u((B) => ({
        ...B,
        [H]: { ...D.defaultValues }
      }));
    },
    [t, u]
  ), { exportToJSON: w } = lU(f, n), _ = k.useCallback((D) => {
    t((H) => {
      const q = Object.values(H), B = typeof D == "function" ? D(q) : D, X = {};
      return B.forEach((L) => {
        X[L.id] = L;
      }), X;
    });
  }, [t]), { onLayout: C } = aU(f, n, _), {
    contextMenu: b,
    onNodeContextMenu: N,
    onEdgeContextMenu: P,
    onPaneClick: A,
    onDelete: I,
    closeContextMenu: O
  } = uU(_, o);
  return /* @__PURE__ */ R.jsx("div", { style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ R.jsx(OI.Provider, { value: t, children: /* @__PURE__ */ R.jsx(LI.Provider, { value: u, children: /* @__PURE__ */ R.jsx(sP, { children: /* @__PURE__ */ R.jsxs(CH, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ R.jsxs(kH, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ R.jsxs(RH, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ R.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ R.jsx(NH, {})
      ] }),
      /* @__PURE__ */ R.jsx(DH, { onAddNode: y, templates: i })
    ] }),
    /* @__PURE__ */ R.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ R.jsx(
      zH,
      {
        nodes: h,
        edges: n,
        nodeTypes: v,
        height: a,
        onNodesChange: p,
        onEdgesChange: m,
        onConnect: E,
        onNodeContextMenu: N,
        onEdgeContextMenu: P,
        onPaneClick: A,
        contextMenu: b,
        onDelete: I,
        onCloseContextMenu: O,
        onExport: w,
        onLayoutVertical: () => C("TB"),
        onLayoutHorizontal: () => C("LR")
      }
    ) })
  ] }) }) }) }) });
}
const hU = RM(dU), vU = { render: hU };
export {
  Tu as BaseHandle,
  CP as ButtonHandle,
  EP as LabeledHandle,
  t0 as NodeComponentBuilder,
  kP as NodeDataContext,
  LI as SetNodeValuesContext,
  OI as SetNodesDictContext,
  gV as buildNodeTypes,
  vU as default,
  hU as render,
  yi as useNodeDataContext,
  fU as useSetNodeValues,
  mU as useSetNodes,
  cU as useSetNodesDict
};
//# sourceMappingURL=index.js.map
