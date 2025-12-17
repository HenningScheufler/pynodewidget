var l2 = Object.defineProperty;
var u2 = (e, t, r) => t in e ? l2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ul = (e, t, r) => u2(e, typeof t != "symbol" ? t + "" : t, r);
function c2(e, t) {
  for (var r = 0; r < t.length; r++) {
    const o = t[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(o, s);
          a && Object.defineProperty(e, s, a.get ? a : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var cl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ny(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qf = { exports: {} }, us = {}, jf = { exports: {} }, Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function f2() {
  if (Sx) return Te;
  Sx = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.iterator;
  function m(D) {
    return D === null || typeof D != "object" ? null : (D = p && D[p] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, y = {};
  function x(D, W, ie) {
    this.props = D, this.context = W, this.refs = y, this.updater = ie || w;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(D, W) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, W, "setState");
  }, x.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function S() {
  }
  S.prototype = x.prototype;
  function C(D, W, ie) {
    this.props = D, this.context = W, this.refs = y, this.updater = ie || w;
  }
  var _ = C.prototype = new S();
  _.constructor = C, E(_, x.prototype), _.isPureReactComponent = !0;
  var k = Array.isArray, R = Object.prototype.hasOwnProperty, A = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(D, W, ie) {
    var $, Z = {}, ee = null, K = null;
    if (W != null) for ($ in W.ref !== void 0 && (K = W.ref), W.key !== void 0 && (ee = "" + W.key), W) R.call(W, $) && !T.hasOwnProperty($) && (Z[$] = W[$]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (D && D.defaultProps) for ($ in te = D.defaultProps, te) Z[$] === void 0 && (Z[$] = te[$]);
    return { $$typeof: e, type: D, key: ee, ref: K, props: Z, _owner: A.current };
  }
  function q(D, W) {
    return { $$typeof: e, type: D.type, key: W, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function U(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function j(D) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var V = /\/+/g;
  function X(D, W) {
    return typeof D == "object" && D !== null && D.key != null ? j("" + D.key) : W.toString(36);
  }
  function L(D, W, ie, $, Z) {
    var ee = typeof D;
    (ee === "undefined" || ee === "boolean") && (D = null);
    var K = !1;
    if (D === null) K = !0;
    else switch (ee) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case e:
          case t:
            K = !0;
        }
    }
    if (K) return K = D, Z = Z(K), D = $ === "" ? "." + X(K, 0) : $, k(Z) ? (ie = "", D != null && (ie = D.replace(V, "$&/") + "/"), L(Z, W, ie, "", function(ae) {
      return ae;
    })) : Z != null && (U(Z) && (Z = q(Z, ie + (!Z.key || K && K.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + D)), W.push(Z)), 1;
    if (K = 0, $ = $ === "" ? "." : $ + ":", k(D)) for (var te = 0; te < D.length; te++) {
      ee = D[te];
      var se = $ + X(ee, te);
      K += L(ee, W, ie, se, Z);
    }
    else if (se = m(D), typeof se == "function") for (D = se.call(D), te = 0; !(ee = D.next()).done; ) ee = ee.value, se = $ + X(ee, te++), K += L(ee, W, ie, se, Z);
    else if (ee === "object") throw W = String(D), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(D, W, ie) {
    if (D == null) return D;
    var $ = [], Z = 0;
    return L(D, $, "", "", function(ee) {
      return W.call(ie, ee, Z++);
    }), $;
  }
  function B(D) {
    if (D._status === -1) {
      var W = D._result;
      W = W(), W.then(function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = ie);
      }, function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = ie);
      }), D._status === -1 && (D._status = 0, D._result = W);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var Y = { current: null }, M = { transition: null }, z = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: A };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Te.Children = { map: H, forEach: function(D, W, ie) {
    H(D, function() {
      W.apply(this, arguments);
    }, ie);
  }, count: function(D) {
    var W = 0;
    return H(D, function() {
      W++;
    }), W;
  }, toArray: function(D) {
    return H(D, function(W) {
      return W;
    }) || [];
  }, only: function(D) {
    if (!U(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Te.Component = x, Te.Fragment = r, Te.Profiler = s, Te.PureComponent = C, Te.StrictMode = o, Te.Suspense = f, Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, Te.act = Q, Te.cloneElement = function(D, W, ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var $ = E({}, D.props), Z = D.key, ee = D.ref, K = D._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, K = A.current), W.key !== void 0 && (Z = "" + W.key), D.type && D.type.defaultProps) var te = D.type.defaultProps;
      for (se in W) R.call(W, se) && !T.hasOwnProperty(se) && ($[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) $.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      $.children = te;
    }
    return { $$typeof: e, type: D.type, key: Z, ref: ee, props: $, _owner: K };
  }, Te.createContext = function(D) {
    return D = { $$typeof: l, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: a, _context: D }, D.Consumer = D;
  }, Te.createElement = O, Te.createFactory = function(D) {
    var W = O.bind(null, D);
    return W.type = D, W;
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(D) {
    return { $$typeof: u, render: D };
  }, Te.isValidElement = U, Te.lazy = function(D) {
    return { $$typeof: h, _payload: { _status: -1, _result: D }, _init: B };
  }, Te.memo = function(D, W) {
    return { $$typeof: d, type: D, compare: W === void 0 ? null : W };
  }, Te.startTransition = function(D) {
    var W = M.transition;
    M.transition = {};
    try {
      D();
    } finally {
      M.transition = W;
    }
  }, Te.unstable_act = Q, Te.useCallback = function(D, W) {
    return Y.current.useCallback(D, W);
  }, Te.useContext = function(D) {
    return Y.current.useContext(D);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(D) {
    return Y.current.useDeferredValue(D);
  }, Te.useEffect = function(D, W) {
    return Y.current.useEffect(D, W);
  }, Te.useId = function() {
    return Y.current.useId();
  }, Te.useImperativeHandle = function(D, W, ie) {
    return Y.current.useImperativeHandle(D, W, ie);
  }, Te.useInsertionEffect = function(D, W) {
    return Y.current.useInsertionEffect(D, W);
  }, Te.useLayoutEffect = function(D, W) {
    return Y.current.useLayoutEffect(D, W);
  }, Te.useMemo = function(D, W) {
    return Y.current.useMemo(D, W);
  }, Te.useReducer = function(D, W, ie) {
    return Y.current.useReducer(D, W, ie);
  }, Te.useRef = function(D) {
    return Y.current.useRef(D);
  }, Te.useState = function(D) {
    return Y.current.useState(D);
  }, Te.useSyncExternalStore = function(D, W, ie) {
    return Y.current.useSyncExternalStore(D, W, ie);
  }, Te.useTransition = function() {
    return Y.current.useTransition();
  }, Te.version = "18.3.1", Te;
}
var Ex;
function Os() {
  return Ex || (Ex = 1, jf.exports = f2()), jf.exports;
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
var Cx;
function d2() {
  if (Cx) return us;
  Cx = 1;
  var e = Os(), t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, w = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: w, props: p, _owner: s.current };
  }
  return us.Fragment = r, us.jsx = l, us.jsxs = l, us;
}
var kx;
function h2() {
  return kx || (kx = 1, qf.exports = d2()), qf.exports;
}
var I = h2(), N = Os();
const cn = /* @__PURE__ */ ny(N), ry = /* @__PURE__ */ c2({
  __proto__: null,
  default: cn
}, [N]);
var fl = {}, zf = { exports: {} }, Nt = {}, Ff = { exports: {} }, $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nx;
function p2() {
  return Nx || (Nx = 1, (function(e) {
    function t(M, z) {
      var Q = M.length;
      M.push(z);
      e: for (; 0 < Q; ) {
        var D = Q - 1 >>> 1, W = M[D];
        if (0 < s(W, z)) M[D] = z, M[Q] = W, Q = D;
        else break e;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var z = M[0], Q = M.pop();
      if (Q !== z) {
        M[0] = Q;
        e: for (var D = 0, W = M.length, ie = W >>> 1; D < ie; ) {
          var $ = 2 * (D + 1) - 1, Z = M[$], ee = $ + 1, K = M[ee];
          if (0 > s(Z, Q)) ee < W && 0 > s(K, Z) ? (M[D] = K, M[ee] = Q, D = ee) : (M[D] = Z, M[$] = Q, D = $);
          else if (ee < W && 0 > s(K, Q)) M[D] = K, M[ee] = Q, D = ee;
          else break e;
        }
      }
      return z;
    }
    function s(M, z) {
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
    var f = [], d = [], h = 1, p = null, m = 3, w = !1, E = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var z = r(d); z !== null; ) {
        if (z.callback === null) o(d);
        else if (z.startTime <= M) o(d), z.sortIndex = z.expirationTime, t(f, z);
        else break;
        z = r(d);
      }
    }
    function k(M) {
      if (y = !1, _(M), !E) if (r(f) !== null) E = !0, B(R);
      else {
        var z = r(d);
        z !== null && Y(k, z.startTime - M);
      }
    }
    function R(M, z) {
      E = !1, y && (y = !1, S(O), O = -1), w = !0;
      var Q = m;
      try {
        for (_(z), p = r(f); p !== null && (!(p.expirationTime > z) || M && !j()); ) {
          var D = p.callback;
          if (typeof D == "function") {
            p.callback = null, m = p.priorityLevel;
            var W = D(p.expirationTime <= z);
            z = e.unstable_now(), typeof W == "function" ? p.callback = W : p === r(f) && o(f), _(z);
          } else o(f);
          p = r(f);
        }
        if (p !== null) var ie = !0;
        else {
          var $ = r(d);
          $ !== null && Y(k, $.startTime - z), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, w = !1;
      }
    }
    var A = !1, T = null, O = -1, q = 5, U = -1;
    function j() {
      return !(e.unstable_now() - U < q);
    }
    function V() {
      if (T !== null) {
        var M = e.unstable_now();
        U = M;
        var z = !0;
        try {
          z = T(!0, M);
        } finally {
          z ? X() : (A = !1, T = null);
        }
      } else A = !1;
    }
    var X;
    if (typeof C == "function") X = function() {
      C(V);
    };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), H = L.port2;
      L.port1.onmessage = V, X = function() {
        H.postMessage(null);
      };
    } else X = function() {
      x(V, 0);
    };
    function B(M) {
      T = M, A || (A = !0, X());
    }
    function Y(M, z) {
      O = x(function() {
        M(e.unstable_now());
      }, z);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || w || (E = !0, B(R));
    }, e.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < M ? Math.floor(1e3 / M) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(f);
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
      var D = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? D + Q : D) : Q = D, M) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = Q + W, M = { id: h++, callback: z, priorityLevel: M, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > D ? (M.sortIndex = Q, t(d, M), r(f) === null && M === r(d) && (y ? (S(O), O = -1) : y = !0, Y(k, Q - D))) : (M.sortIndex = W, t(f, M), E || w || (E = !0, B(R))), M;
    }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(M) {
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
  })($f)), $f;
}
var Rx;
function g2() {
  return Rx || (Rx = 1, Ff.exports = p2()), Ff.exports;
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
var Px;
function m2() {
  if (Px) return Nt;
  Px = 1;
  var e = Os(), t = g2();
  function r(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, c = 1; c < arguments.length; c++) i += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + n + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), s = {};
  function a(n, i) {
    l(n, i), l(n + "Capture", i);
  }
  function l(n, i) {
    for (s[n] = i, n = 0; n < i.length; n++) o.add(i[n]);
  }
  var u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, p = {};
  function m(n) {
    return f.call(p, n) ? !0 : f.call(h, n) ? !1 : d.test(n) ? p[n] = !0 : (h[n] = !0, !1);
  }
  function w(n, i, c, g) {
    if (c !== null && c.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return g ? !1 : c !== null ? !c.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function E(n, i, c, g) {
    if (i === null || typeof i > "u" || w(n, i, c, g)) return !0;
    if (g) return !1;
    if (c !== null) switch (c.type) {
      case 3:
        return !i;
      case 4:
        return i === !1;
      case 5:
        return isNaN(i);
      case 6:
        return isNaN(i) || 1 > i;
    }
    return !1;
  }
  function y(n, i, c, g, v, b, P) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = g, this.attributeNamespace = v, this.mustUseProperty = c, this.propertyName = n, this.type = i, this.sanitizeURL = b, this.removeEmptyString = P;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    x[n] = new y(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var i = n[0];
    x[i] = new y(i, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    x[n] = new y(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    x[n] = new y(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    x[n] = new y(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    x[n] = new y(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    x[n] = new y(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    x[n] = new y(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    x[n] = new y(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function C(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var i = n.replace(
      S,
      C
    );
    x[i] = new y(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace(S, C);
    x[i] = new y(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace(S, C);
    x[i] = new y(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    x[n] = new y(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    x[n] = new y(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function _(n, i, c, g) {
    var v = x.hasOwnProperty(i) ? x[i] : null;
    (v !== null ? v.type !== 0 : g || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (E(i, c, v, g) && (c = null), g || v === null ? m(i) && (c === null ? n.removeAttribute(i) : n.setAttribute(i, "" + c)) : v.mustUseProperty ? n[v.propertyName] = c === null ? v.type === 3 ? !1 : "" : c : (i = v.attributeName, g = v.attributeNamespace, c === null ? n.removeAttribute(i) : (v = v.type, c = v === 3 || v === 4 && c === !0 ? "" : "" + c, g ? n.setAttributeNS(g, i, c) : n.setAttribute(i, c))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = Symbol.for("react.element"), A = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), j = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function z(n) {
    return n === null || typeof n != "object" ? null : (n = M && n[M] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Q = Object.assign, D;
  function W(n) {
    if (D === void 0) try {
      throw Error();
    } catch (c) {
      var i = c.stack.trim().match(/\n( *(at )?)/);
      D = i && i[1] || "";
    }
    return `
` + D + n;
  }
  var ie = !1;
  function $(n, i) {
    if (!n || ie) return "";
    ie = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i) if (i = function() {
        throw Error();
      }, Object.defineProperty(i.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(i, []);
        } catch (oe) {
          var g = oe;
        }
        Reflect.construct(n, [], i);
      } else {
        try {
          i.call();
        } catch (oe) {
          g = oe;
        }
        n.call(i.prototype);
      }
      else {
        try {
          throw Error();
        } catch (oe) {
          g = oe;
        }
        n();
      }
    } catch (oe) {
      if (oe && g && typeof oe.stack == "string") {
        for (var v = oe.stack.split(`
`), b = g.stack.split(`
`), P = v.length - 1, F = b.length - 1; 1 <= P && 0 <= F && v[P] !== b[F]; ) F--;
        for (; 1 <= P && 0 <= F; P--, F--) if (v[P] !== b[F]) {
          if (P !== 1 || F !== 1)
            do
              if (P--, F--, 0 > F || v[P] !== b[F]) {
                var G = `
` + v[P].replace(" at new ", " at ");
                return n.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", n.displayName)), G;
              }
            while (1 <= P && 0 <= F);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = c;
    }
    return (n = n ? n.displayName || n.name : "") ? W(n) : "";
  }
  function Z(n) {
    switch (n.tag) {
      case 5:
        return W(n.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = $(n.type, !1), n;
      case 11:
        return n = $(n.type.render, !1), n;
      case 1:
        return n = $(n.type, !0), n;
      default:
        return "";
    }
  }
  function ee(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case T:
        return "Fragment";
      case A:
        return "Portal";
      case q:
        return "Profiler";
      case O:
        return "StrictMode";
      case X:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case j:
        return (n.displayName || "Context") + ".Consumer";
      case U:
        return (n._context.displayName || "Context") + ".Provider";
      case V:
        var i = n.render;
        return n = n.displayName, n || (n = i.displayName || i.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case H:
        return i = n.displayName || null, i !== null ? i : ee(n.type) || "Memo";
      case B:
        i = n._payload, n = n._init;
        try {
          return ee(n(i));
        } catch {
        }
    }
    return null;
  }
  function K(n) {
    var i = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = i.render, n = n.displayName || n.name || "", i.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ee(i);
      case 8:
        return i === O ? "StrictMode" : "Mode";
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
        if (typeof i == "function") return i.displayName || i.name || null;
        if (typeof i == "string") return i;
    }
    return null;
  }
  function te(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function se(n) {
    var i = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function ae(n) {
    var i = se(n) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), g = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var v = c.get, b = c.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(P) {
        g = "" + P, b.call(this, P);
      } }), Object.defineProperty(n, i, { enumerable: c.enumerable }), { getValue: function() {
        return g;
      }, setValue: function(P) {
        g = "" + P;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[i];
      } };
    }
  }
  function ce(n) {
    n._valueTracker || (n._valueTracker = ae(n));
  }
  function de(n) {
    if (!n) return !1;
    var i = n._valueTracker;
    if (!i) return !0;
    var c = i.getValue(), g = "";
    return n && (g = se(n) ? n.checked ? "true" : "false" : n.value), n = g, n !== c ? (i.setValue(n), !0) : !1;
  }
  function pe(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function be(n, i) {
    var c = i.checked;
    return Q({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? n._wrapperState.initialChecked });
  }
  function me(n, i) {
    var c = i.defaultValue == null ? "" : i.defaultValue, g = i.checked != null ? i.checked : i.defaultChecked;
    c = te(i.value != null ? i.value : c), n._wrapperState = { initialChecked: g, initialValue: c, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function Re(n, i) {
    i = i.checked, i != null && _(n, "checked", i, !1);
  }
  function Ee(n, i) {
    Re(n, i);
    var c = te(i.value), g = i.type;
    if (c != null) g === "number" ? (c === 0 && n.value === "" || n.value != c) && (n.value = "" + c) : n.value !== "" + c && (n.value = "" + c);
    else if (g === "submit" || g === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? Ve(n, i.type, c) : i.hasOwnProperty("defaultValue") && Ve(n, i.type, te(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Qe(n, i, c) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var g = i.type;
      if (!(g !== "submit" && g !== "reset" || i.value !== void 0 && i.value !== null)) return;
      i = "" + n._wrapperState.initialValue, c || i === n.value || (n.value = i), n.defaultValue = i;
    }
    c = n.name, c !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, c !== "" && (n.name = c);
  }
  function Ve(n, i, c) {
    (i !== "number" || pe(n.ownerDocument) !== n) && (c == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + c && (n.defaultValue = "" + c));
  }
  var Ft = Array.isArray;
  function dt(n, i, c, g) {
    if (n = n.options, i) {
      i = {};
      for (var v = 0; v < c.length; v++) i["$" + c[v]] = !0;
      for (c = 0; c < n.length; c++) v = i.hasOwnProperty("$" + n[c].value), n[c].selected !== v && (n[c].selected = v), v && g && (n[c].defaultSelected = !0);
    } else {
      for (c = "" + te(c), i = null, v = 0; v < n.length; v++) {
        if (n[v].value === c) {
          n[v].selected = !0, g && (n[v].defaultSelected = !0);
          return;
        }
        i !== null || n[v].disabled || (i = n[v]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function st(n, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(r(91));
    return Q({}, i, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function He(n, i) {
    var c = i.value;
    if (c == null) {
      if (c = i.children, i = i.defaultValue, c != null) {
        if (i != null) throw Error(r(92));
        if (Ft(c)) {
          if (1 < c.length) throw Error(r(93));
          c = c[0];
        }
        i = c;
      }
      i == null && (i = ""), c = i;
    }
    n._wrapperState = { initialValue: te(c) };
  }
  function en(n, i) {
    var c = te(i.value), g = te(i.defaultValue);
    c != null && (c = "" + c, c !== n.value && (n.value = c), i.defaultValue == null && n.defaultValue !== c && (n.defaultValue = c)), g != null && (n.defaultValue = "" + g);
  }
  function $t(n) {
    var i = n.textContent;
    i === n._wrapperState.initialValue && i !== "" && i !== null && (n.value = i);
  }
  function tn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bt(n, i) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? tn(i) : n === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _t, Or = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, c, g, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(i, c, g, v);
      });
    } : n;
  })(function(n, i) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = i;
    else {
      for (_t = _t || document.createElement("div"), _t.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = _t.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; i.firstChild; ) n.appendChild(i.firstChild);
    }
  });
  function Vt(n, i) {
    if (i) {
      var c = n.firstChild;
      if (c && c === n.lastChild && c.nodeType === 3) {
        c.nodeValue = i;
        return;
      }
    }
    n.textContent = i;
  }
  var Dn = {
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
  }, go = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function(n) {
    go.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), Dn[i] = Dn[n];
    });
  });
  function At(n, i, c) {
    return i == null || typeof i == "boolean" || i === "" ? "" : c || typeof i != "number" || i === 0 || Dn.hasOwnProperty(n) && Dn[n] ? ("" + i).trim() : i + "px";
  }
  function Ht(n, i) {
    n = n.style;
    for (var c in i) if (i.hasOwnProperty(c)) {
      var g = c.indexOf("--") === 0, v = At(c, i[c], g);
      c === "float" && (c = "cssFloat"), g ? n.setProperty(c, v) : n[c] = v;
    }
  }
  var Hu = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xi(n, i) {
    if (i) {
      if (Hu[n] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(r(60));
        if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(r(62));
    }
  }
  function _i(n, i) {
    if (n.indexOf("-") === -1) return typeof i.is == "string";
    switch (n) {
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
  var bi = null;
  function Si(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ei = null, er = null, tr = null;
  function Ks(n) {
    if (n = Yi(n)) {
      if (typeof Ei != "function") throw Error(r(280));
      var i = n.stateNode;
      i && (i = Ea(i), Ei(n.stateNode, n.type, i));
    }
  }
  function Xs(n) {
    er ? tr ? tr.push(n) : tr = [n] : er = n;
  }
  function Qs() {
    if (er) {
      var n = er, i = tr;
      if (tr = er = null, Ks(n), i) for (n = 0; n < i.length; n++) Ks(i[n]);
    }
  }
  function Zs(n, i) {
    return n(i);
  }
  function Js() {
  }
  var Ci = !1;
  function ea(n, i, c) {
    if (Ci) return n(i, c);
    Ci = !0;
    try {
      return Zs(n, i, c);
    } finally {
      Ci = !1, (er !== null || tr !== null) && (Js(), Qs());
    }
  }
  function Lr(n, i) {
    var c = n.stateNode;
    if (c === null) return null;
    var g = Ea(c);
    if (g === null) return null;
    c = g[i];
    e: switch (i) {
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
        (g = !g.disabled) || (n = n.type, g = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !g;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (c && typeof c != "function") throw Error(r(231, i, typeof c));
    return c;
  }
  var ki = !1;
  if (u) try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", { get: function() {
      ki = !0;
    } }), window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, Dr);
  } catch {
    ki = !1;
  }
  function Wu(n, i, c, g, v, b, P, F, G) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var qr = !1, mo = null, vo = !1, Ni = null, Uu = { onError: function(n) {
    qr = !0, mo = n;
  } };
  function Gu(n, i, c, g, v, b, P, F, G) {
    qr = !1, mo = null, Wu.apply(Uu, arguments);
  }
  function Yu(n, i, c, g, v, b, P, F, G) {
    if (Gu.apply(this, arguments), qr) {
      if (qr) {
        var oe = mo;
        qr = !1, mo = null;
      } else throw Error(r(198));
      vo || (vo = !0, Ni = oe);
    }
  }
  function xn(n) {
    var i = n, c = n;
    if (n.alternate) for (; i.return; ) i = i.return;
    else {
      n = i;
      do
        i = n, (i.flags & 4098) !== 0 && (c = i.return), n = i.return;
      while (n);
    }
    return i.tag === 3 ? c : null;
  }
  function Ri(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function Pi(n) {
    if (xn(n) !== n) throw Error(r(188));
  }
  function Ku(n) {
    var i = n.alternate;
    if (!i) {
      if (i = xn(n), i === null) throw Error(r(188));
      return i !== n ? null : n;
    }
    for (var c = n, g = i; ; ) {
      var v = c.return;
      if (v === null) break;
      var b = v.alternate;
      if (b === null) {
        if (g = v.return, g !== null) {
          c = g;
          continue;
        }
        break;
      }
      if (v.child === b.child) {
        for (b = v.child; b; ) {
          if (b === c) return Pi(v), n;
          if (b === g) return Pi(v), i;
          b = b.sibling;
        }
        throw Error(r(188));
      }
      if (c.return !== g.return) c = v, g = b;
      else {
        for (var P = !1, F = v.child; F; ) {
          if (F === c) {
            P = !0, c = v, g = b;
            break;
          }
          if (F === g) {
            P = !0, g = v, c = b;
            break;
          }
          F = F.sibling;
        }
        if (!P) {
          for (F = b.child; F; ) {
            if (F === c) {
              P = !0, c = b, g = v;
              break;
            }
            if (F === g) {
              P = !0, g = b, c = v;
              break;
            }
            F = F.sibling;
          }
          if (!P) throw Error(r(189));
        }
      }
      if (c.alternate !== g) throw Error(r(190));
    }
    if (c.tag !== 3) throw Error(r(188));
    return c.stateNode.current === c ? n : i;
  }
  function ta(n) {
    return n = Ku(n), n !== null ? na(n) : null;
  }
  function na(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var i = na(n);
      if (i !== null) return i;
      n = n.sibling;
    }
    return null;
  }
  var ra = t.unstable_scheduleCallback, oa = t.unstable_cancelCallback, Xu = t.unstable_shouldYield, ia = t.unstable_requestPaint, We = t.unstable_now, Qu = t.unstable_getCurrentPriorityLevel, Ai = t.unstable_ImmediatePriority, sa = t.unstable_UserBlockingPriority, yo = t.unstable_NormalPriority, Zu = t.unstable_LowPriority, aa = t.unstable_IdlePriority, jr = null, Wt = null;
  function Ju(n) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(jr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Tt = Math.clz32 ? Math.clz32 : nc, ec = Math.log, tc = Math.LN2;
  function nc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ec(n) / tc | 0) | 0;
  }
  var wo = 64, xo = 4194304;
  function _n(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function _o(n, i) {
    var c = n.pendingLanes;
    if (c === 0) return 0;
    var g = 0, v = n.suspendedLanes, b = n.pingedLanes, P = c & 268435455;
    if (P !== 0) {
      var F = P & ~v;
      F !== 0 ? g = _n(F) : (b &= P, b !== 0 && (g = _n(b)));
    } else P = c & ~v, P !== 0 ? g = _n(P) : b !== 0 && (g = _n(b));
    if (g === 0) return 0;
    if (i !== 0 && i !== g && (i & v) === 0 && (v = g & -g, b = i & -i, v >= b || v === 16 && (b & 4194240) !== 0)) return i;
    if ((g & 4) !== 0 && (g |= c & 16), i = n.entangledLanes, i !== 0) for (n = n.entanglements, i &= g; 0 < i; ) c = 31 - Tt(i), v = 1 << c, g |= n[c], i &= ~v;
    return g;
  }
  function rc(n, i) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return i + 250;
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
        return i + 5e3;
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
  function oc(n, i) {
    for (var c = n.suspendedLanes, g = n.pingedLanes, v = n.expirationTimes, b = n.pendingLanes; 0 < b; ) {
      var P = 31 - Tt(b), F = 1 << P, G = v[P];
      G === -1 ? ((F & c) === 0 || (F & g) !== 0) && (v[P] = rc(F, i)) : G <= i && (n.expiredLanes |= F), b &= ~F;
    }
  }
  function zr(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function la() {
    var n = wo;
    return wo <<= 1, (wo & 4194240) === 0 && (wo = 64), n;
  }
  function Ti(n) {
    for (var i = [], c = 0; 31 > c; c++) i.push(n);
    return i;
  }
  function nr(n, i, c) {
    n.pendingLanes |= i, i !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, i = 31 - Tt(i), n[i] = c;
  }
  function PT(n, i) {
    var c = n.pendingLanes & ~i;
    n.pendingLanes = i, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= i, n.mutableReadLanes &= i, n.entangledLanes &= i, i = n.entanglements;
    var g = n.eventTimes;
    for (n = n.expirationTimes; 0 < c; ) {
      var v = 31 - Tt(c), b = 1 << v;
      i[v] = 0, g[v] = -1, n[v] = -1, c &= ~b;
    }
  }
  function ic(n, i) {
    var c = n.entangledLanes |= i;
    for (n = n.entanglements; c; ) {
      var g = 31 - Tt(c), v = 1 << g;
      v & i | n[g] & i && (n[g] |= i), c &= ~v;
    }
  }
  var Le = 0;
  function t0(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var n0, sc, r0, o0, i0, ac = !1, ua = [], rr = null, or = null, ir = null, Ii = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), sr = [], AT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function s0(n, i) {
    switch (n) {
      case "focusin":
      case "focusout":
        rr = null;
        break;
      case "dragenter":
      case "dragleave":
        or = null;
        break;
      case "mouseover":
      case "mouseout":
        ir = null;
        break;
      case "pointerover":
      case "pointerout":
        Ii.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mi.delete(i.pointerId);
    }
  }
  function Oi(n, i, c, g, v, b) {
    return n === null || n.nativeEvent !== b ? (n = { blockedOn: i, domEventName: c, eventSystemFlags: g, nativeEvent: b, targetContainers: [v] }, i !== null && (i = Yi(i), i !== null && sc(i)), n) : (n.eventSystemFlags |= g, i = n.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), n);
  }
  function TT(n, i, c, g, v) {
    switch (i) {
      case "focusin":
        return rr = Oi(rr, n, i, c, g, v), !0;
      case "dragenter":
        return or = Oi(or, n, i, c, g, v), !0;
      case "mouseover":
        return ir = Oi(ir, n, i, c, g, v), !0;
      case "pointerover":
        var b = v.pointerId;
        return Ii.set(b, Oi(Ii.get(b) || null, n, i, c, g, v)), !0;
      case "gotpointercapture":
        return b = v.pointerId, Mi.set(b, Oi(Mi.get(b) || null, n, i, c, g, v)), !0;
    }
    return !1;
  }
  function a0(n) {
    var i = Fr(n.target);
    if (i !== null) {
      var c = xn(i);
      if (c !== null) {
        if (i = c.tag, i === 13) {
          if (i = Ri(c), i !== null) {
            n.blockedOn = i, i0(n.priority, function() {
              r0(c);
            });
            return;
          }
        } else if (i === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ca(n) {
    if (n.blockedOn !== null) return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var c = uc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (c === null) {
        c = n.nativeEvent;
        var g = new c.constructor(c.type, c);
        bi = g, c.target.dispatchEvent(g), bi = null;
      } else return i = Yi(c), i !== null && sc(i), n.blockedOn = c, !1;
      i.shift();
    }
    return !0;
  }
  function l0(n, i, c) {
    ca(n) && c.delete(i);
  }
  function IT() {
    ac = !1, rr !== null && ca(rr) && (rr = null), or !== null && ca(or) && (or = null), ir !== null && ca(ir) && (ir = null), Ii.forEach(l0), Mi.forEach(l0);
  }
  function Li(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ac || (ac = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, IT)));
  }
  function Di(n) {
    function i(v) {
      return Li(v, n);
    }
    if (0 < ua.length) {
      Li(ua[0], n);
      for (var c = 1; c < ua.length; c++) {
        var g = ua[c];
        g.blockedOn === n && (g.blockedOn = null);
      }
    }
    for (rr !== null && Li(rr, n), or !== null && Li(or, n), ir !== null && Li(ir, n), Ii.forEach(i), Mi.forEach(i), c = 0; c < sr.length; c++) g = sr[c], g.blockedOn === n && (g.blockedOn = null);
    for (; 0 < sr.length && (c = sr[0], c.blockedOn === null); ) a0(c), c.blockedOn === null && sr.shift();
  }
  var bo = k.ReactCurrentBatchConfig, fa = !0;
  function MT(n, i, c, g) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 1, lc(n, i, c, g);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function OT(n, i, c, g) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 4, lc(n, i, c, g);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function lc(n, i, c, g) {
    if (fa) {
      var v = uc(n, i, c, g);
      if (v === null) kc(n, i, g, da, c), s0(n, g);
      else if (TT(v, n, i, c, g)) g.stopPropagation();
      else if (s0(n, g), i & 4 && -1 < AT.indexOf(n)) {
        for (; v !== null; ) {
          var b = Yi(v);
          if (b !== null && n0(b), b = uc(n, i, c, g), b === null && kc(n, i, g, da, c), b === v) break;
          v = b;
        }
        v !== null && g.stopPropagation();
      } else kc(n, i, g, null, c);
    }
  }
  var da = null;
  function uc(n, i, c, g) {
    if (da = null, n = Si(g), n = Fr(n), n !== null) if (i = xn(n), i === null) n = null;
    else if (c = i.tag, c === 13) {
      if (n = Ri(i), n !== null) return n;
      n = null;
    } else if (c === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      n = null;
    } else i !== n && (n = null);
    return da = n, null;
  }
  function u0(n) {
    switch (n) {
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
        switch (Qu()) {
          case Ai:
            return 1;
          case sa:
            return 4;
          case yo:
          case Zu:
            return 16;
          case aa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ar = null, cc = null, ha = null;
  function c0() {
    if (ha) return ha;
    var n, i = cc, c = i.length, g, v = "value" in ar ? ar.value : ar.textContent, b = v.length;
    for (n = 0; n < c && i[n] === v[n]; n++) ;
    var P = c - n;
    for (g = 1; g <= P && i[c - g] === v[b - g]; g++) ;
    return ha = v.slice(n, 1 < g ? 1 - g : void 0);
  }
  function pa(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ga() {
    return !0;
  }
  function f0() {
    return !1;
  }
  function It(n) {
    function i(c, g, v, b, P) {
      this._reactName = c, this._targetInst = v, this.type = g, this.nativeEvent = b, this.target = P, this.currentTarget = null;
      for (var F in n) n.hasOwnProperty(F) && (c = n[F], this[F] = c ? c(b) : b[F]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? ga : f0, this.isPropagationStopped = f0, this;
    }
    return Q(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = ga);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = ga);
    }, persist: function() {
    }, isPersistent: ga }), i;
  }
  var So = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fc = It(So), qi = Q({}, So, { view: 0, detail: 0 }), LT = It(qi), dc, hc, ji, ma = Q({}, qi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ji && (ji && n.type === "mousemove" ? (dc = n.screenX - ji.screenX, hc = n.screenY - ji.screenY) : hc = dc = 0, ji = n), dc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : hc;
  } }), d0 = It(ma), DT = Q({}, ma, { dataTransfer: 0 }), qT = It(DT), jT = Q({}, qi, { relatedTarget: 0 }), pc = It(jT), zT = Q({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), FT = It(zT), $T = Q({}, So, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), BT = It($T), VT = Q({}, So, { data: 0 }), h0 = It(VT), HT = {
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
  }, WT = {
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
  }, UT = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function GT(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = UT[n]) ? !!i[n] : !1;
  }
  function gc() {
    return GT;
  }
  var YT = Q({}, qi, { key: function(n) {
    if (n.key) {
      var i = HT[n.key] || n.key;
      if (i !== "Unidentified") return i;
    }
    return n.type === "keypress" ? (n = pa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? WT[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gc, charCode: function(n) {
    return n.type === "keypress" ? pa(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? pa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), KT = It(YT), XT = Q({}, ma, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), p0 = It(XT), QT = Q({}, qi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gc }), ZT = It(QT), JT = Q({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eI = It(JT), tI = Q({}, ma, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nI = It(tI), rI = [9, 13, 27, 32], mc = u && "CompositionEvent" in window, zi = null;
  u && "documentMode" in document && (zi = document.documentMode);
  var oI = u && "TextEvent" in window && !zi, g0 = u && (!mc || zi && 8 < zi && 11 >= zi), m0 = " ", v0 = !1;
  function y0(n, i) {
    switch (n) {
      case "keyup":
        return rI.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function w0(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Eo = !1;
  function iI(n, i) {
    switch (n) {
      case "compositionend":
        return w0(i);
      case "keypress":
        return i.which !== 32 ? null : (v0 = !0, m0);
      case "textInput":
        return n = i.data, n === m0 && v0 ? null : n;
      default:
        return null;
    }
  }
  function sI(n, i) {
    if (Eo) return n === "compositionend" || !mc && y0(n, i) ? (n = c0(), ha = cc = ar = null, Eo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return g0 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var aI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function x0(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!aI[n.type] : i === "textarea";
  }
  function _0(n, i, c, g) {
    Xs(g), i = _a(i, "onChange"), 0 < i.length && (c = new fc("onChange", "change", null, c, g), n.push({ event: c, listeners: i }));
  }
  var Fi = null, $i = null;
  function lI(n) {
    z0(n, 0);
  }
  function va(n) {
    var i = Po(n);
    if (de(i)) return n;
  }
  function uI(n, i) {
    if (n === "change") return i;
  }
  var b0 = !1;
  if (u) {
    var vc;
    if (u) {
      var yc = "oninput" in document;
      if (!yc) {
        var S0 = document.createElement("div");
        S0.setAttribute("oninput", "return;"), yc = typeof S0.oninput == "function";
      }
      vc = yc;
    } else vc = !1;
    b0 = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function E0() {
    Fi && (Fi.detachEvent("onpropertychange", C0), $i = Fi = null);
  }
  function C0(n) {
    if (n.propertyName === "value" && va($i)) {
      var i = [];
      _0(i, $i, n, Si(n)), ea(lI, i);
    }
  }
  function cI(n, i, c) {
    n === "focusin" ? (E0(), Fi = i, $i = c, Fi.attachEvent("onpropertychange", C0)) : n === "focusout" && E0();
  }
  function fI(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return va($i);
  }
  function dI(n, i) {
    if (n === "click") return va(i);
  }
  function hI(n, i) {
    if (n === "input" || n === "change") return va(i);
  }
  function pI(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : pI;
  function Bi(n, i) {
    if (nn(n, i)) return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null) return !1;
    var c = Object.keys(n), g = Object.keys(i);
    if (c.length !== g.length) return !1;
    for (g = 0; g < c.length; g++) {
      var v = c[g];
      if (!f.call(i, v) || !nn(n[v], i[v])) return !1;
    }
    return !0;
  }
  function k0(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function N0(n, i) {
    var c = k0(n);
    n = 0;
    for (var g; c; ) {
      if (c.nodeType === 3) {
        if (g = n + c.textContent.length, n <= i && g >= i) return { node: c, offset: i - n };
        n = g;
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
      c = k0(c);
    }
  }
  function R0(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? R0(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function P0() {
    for (var n = window, i = pe(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var c = typeof i.contentWindow.location.href == "string";
      } catch {
        c = !1;
      }
      if (c) n = i.contentWindow;
      else break;
      i = pe(n.document);
    }
    return i;
  }
  function wc(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  function gI(n) {
    var i = P0(), c = n.focusedElem, g = n.selectionRange;
    if (i !== c && c && c.ownerDocument && R0(c.ownerDocument.documentElement, c)) {
      if (g !== null && wc(c)) {
        if (i = g.start, n = g.end, n === void 0 && (n = i), "selectionStart" in c) c.selectionStart = i, c.selectionEnd = Math.min(n, c.value.length);
        else if (n = (i = c.ownerDocument || document) && i.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = c.textContent.length, b = Math.min(g.start, v);
          g = g.end === void 0 ? b : Math.min(g.end, v), !n.extend && b > g && (v = g, g = b, b = v), v = N0(c, b);
          var P = N0(
            c,
            g
          );
          v && P && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== P.node || n.focusOffset !== P.offset) && (i = i.createRange(), i.setStart(v.node, v.offset), n.removeAllRanges(), b > g ? (n.addRange(i), n.extend(P.node, P.offset)) : (i.setEnd(P.node, P.offset), n.addRange(i)));
        }
      }
      for (i = [], n = c; n = n.parentNode; ) n.nodeType === 1 && i.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < i.length; c++) n = i[c], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mI = u && "documentMode" in document && 11 >= document.documentMode, Co = null, xc = null, Vi = null, _c = !1;
  function A0(n, i, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    _c || Co == null || Co !== pe(g) || (g = Co, "selectionStart" in g && wc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), Vi && Bi(Vi, g) || (Vi = g, g = _a(xc, "onSelect"), 0 < g.length && (i = new fc("onSelect", "select", null, i, c), n.push({ event: i, listeners: g }), i.target = Co)));
  }
  function ya(n, i) {
    var c = {};
    return c[n.toLowerCase()] = i.toLowerCase(), c["Webkit" + n] = "webkit" + i, c["Moz" + n] = "moz" + i, c;
  }
  var ko = { animationend: ya("Animation", "AnimationEnd"), animationiteration: ya("Animation", "AnimationIteration"), animationstart: ya("Animation", "AnimationStart"), transitionend: ya("Transition", "TransitionEnd") }, bc = {}, T0 = {};
  u && (T0 = document.createElement("div").style, "AnimationEvent" in window || (delete ko.animationend.animation, delete ko.animationiteration.animation, delete ko.animationstart.animation), "TransitionEvent" in window || delete ko.transitionend.transition);
  function wa(n) {
    if (bc[n]) return bc[n];
    if (!ko[n]) return n;
    var i = ko[n], c;
    for (c in i) if (i.hasOwnProperty(c) && c in T0) return bc[n] = i[c];
    return n;
  }
  var I0 = wa("animationend"), M0 = wa("animationiteration"), O0 = wa("animationstart"), L0 = wa("transitionend"), D0 = /* @__PURE__ */ new Map(), q0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(n, i) {
    D0.set(n, i), a(i, [n]);
  }
  for (var Sc = 0; Sc < q0.length; Sc++) {
    var Ec = q0[Sc], vI = Ec.toLowerCase(), yI = Ec[0].toUpperCase() + Ec.slice(1);
    lr(vI, "on" + yI);
  }
  lr(I0, "onAnimationEnd"), lr(M0, "onAnimationIteration"), lr(O0, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(L0, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));
  function j0(n, i, c) {
    var g = n.type || "unknown-event";
    n.currentTarget = c, Yu(g, i, void 0, n), n.currentTarget = null;
  }
  function z0(n, i) {
    i = (i & 4) !== 0;
    for (var c = 0; c < n.length; c++) {
      var g = n[c], v = g.event;
      g = g.listeners;
      e: {
        var b = void 0;
        if (i) for (var P = g.length - 1; 0 <= P; P--) {
          var F = g[P], G = F.instance, oe = F.currentTarget;
          if (F = F.listener, G !== b && v.isPropagationStopped()) break e;
          j0(v, F, oe), b = G;
        }
        else for (P = 0; P < g.length; P++) {
          if (F = g[P], G = F.instance, oe = F.currentTarget, F = F.listener, G !== b && v.isPropagationStopped()) break e;
          j0(v, F, oe), b = G;
        }
      }
    }
    if (vo) throw n = Ni, vo = !1, Ni = null, n;
  }
  function qe(n, i) {
    var c = i[Ic];
    c === void 0 && (c = i[Ic] = /* @__PURE__ */ new Set());
    var g = n + "__bubble";
    c.has(g) || (F0(i, n, 2, !1), c.add(g));
  }
  function Cc(n, i, c) {
    var g = 0;
    i && (g |= 4), F0(c, n, g, i);
  }
  var xa = "_reactListening" + Math.random().toString(36).slice(2);
  function Wi(n) {
    if (!n[xa]) {
      n[xa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (wI.has(c) || Cc(c, !1, n), Cc(c, !0, n));
      });
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[xa] || (i[xa] = !0, Cc("selectionchange", !1, i));
    }
  }
  function F0(n, i, c, g) {
    switch (u0(i)) {
      case 1:
        var v = MT;
        break;
      case 4:
        v = OT;
        break;
      default:
        v = lc;
    }
    c = v.bind(null, i, c, n), v = void 0, !ki || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), g ? v !== void 0 ? n.addEventListener(i, c, { capture: !0, passive: v }) : n.addEventListener(i, c, !0) : v !== void 0 ? n.addEventListener(i, c, { passive: v }) : n.addEventListener(i, c, !1);
  }
  function kc(n, i, c, g, v) {
    var b = g;
    if ((i & 1) === 0 && (i & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var P = g.tag;
      if (P === 3 || P === 4) {
        var F = g.stateNode.containerInfo;
        if (F === v || F.nodeType === 8 && F.parentNode === v) break;
        if (P === 4) for (P = g.return; P !== null; ) {
          var G = P.tag;
          if ((G === 3 || G === 4) && (G = P.stateNode.containerInfo, G === v || G.nodeType === 8 && G.parentNode === v)) return;
          P = P.return;
        }
        for (; F !== null; ) {
          if (P = Fr(F), P === null) return;
          if (G = P.tag, G === 5 || G === 6) {
            g = b = P;
            continue e;
          }
          F = F.parentNode;
        }
      }
      g = g.return;
    }
    ea(function() {
      var oe = b, ue = Si(c), fe = [];
      e: {
        var le = D0.get(n);
        if (le !== void 0) {
          var ge = fc, we = n;
          switch (n) {
            case "keypress":
              if (pa(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = KT;
              break;
            case "focusin":
              we = "focus", ge = pc;
              break;
            case "focusout":
              we = "blur", ge = pc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = pc;
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
              ge = d0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = qT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = ZT;
              break;
            case I0:
            case M0:
            case O0:
              ge = FT;
              break;
            case L0:
              ge = eI;
              break;
            case "scroll":
              ge = LT;
              break;
            case "wheel":
              ge = nI;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = BT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = p0;
          }
          var Se = (i & 4) !== 0, Ze = !Se && n === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = Lr(J, ne), he != null && Se.push(Ui(J, he, re)))), Ze) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", le && c !== bi && (we = c.relatedTarget || c.fromElement) && (Fr(we) || we[qn])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Fr(we) : null, we !== null && (Ze = xn(we), we !== Ze || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = d0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (n === "pointerout" || n === "pointerover") && (Se = p0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), Ze = ge == null ? le : Po(ge), re = we == null ? le : Po(we), le = new Se(he, J + "leave", ge, c, ue), le.target = Ze, le.relatedTarget = re, he = null, Fr(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = Ze, he = Se), Ze = he, ge && we) t: {
              for (Se = ge, ne = we, J = 0, re = Se; re; re = No(re)) J++;
              for (re = 0, he = ne; he; he = No(he)) re++;
              for (; 0 < J - re; ) Se = No(Se), J--;
              for (; 0 < re - J; ) ne = No(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = No(Se), ne = No(ne);
              }
              Se = null;
            }
            else Se = null;
            ge !== null && $0(fe, le, ge, Se, !1), we !== null && Ze !== null && $0(fe, Ze, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? Po(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = uI;
          else if (x0(le)) if (b0) Ce = hI;
          else {
            Ce = fI;
            var ke = cI;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = dI);
          if (Ce && (Ce = Ce(n, oe))) {
            _0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(n, le, oe), n === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ve(le, "number", le.value);
        }
        switch (ke = oe ? Po(oe) : window, n) {
          case "focusin":
            (x0(ke) || ke.contentEditable === "true") && (Co = ke, xc = oe, Vi = null);
            break;
          case "focusout":
            Vi = xc = Co = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _c = !1, A0(fe, c, ue);
            break;
          case "selectionchange":
            if (mI) break;
          case "keydown":
          case "keyup":
            A0(fe, c, ue);
        }
        var Ne;
        if (mc) e: {
          switch (n) {
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
        else Eo ? y0(n, c) && (Pe = "onCompositionEnd") : n === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (g0 && c.locale !== "ko" && (Eo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Eo && (Ne = c0()) : (ar = ue, cc = "value" in ar ? ar.value : ar.textContent, Eo = !0)), ke = _a(oe, Pe), 0 < ke.length && (Pe = new h0(Pe, n, null, c, ue), fe.push({ event: Pe, listeners: ke }), Ne ? Pe.data = Ne : (Ne = w0(c), Ne !== null && (Pe.data = Ne)))), (Ne = oI ? iI(n, c) : sI(n, c)) && (oe = _a(oe, "onBeforeInput"), 0 < oe.length && (ue = new h0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Ne));
      }
      z0(fe, i);
    });
  }
  function Ui(n, i, c) {
    return { instance: n, listener: i, currentTarget: c };
  }
  function _a(n, i) {
    for (var c = i + "Capture", g = []; n !== null; ) {
      var v = n, b = v.stateNode;
      v.tag === 5 && b !== null && (v = b, b = Lr(n, c), b != null && g.unshift(Ui(n, b, v)), b = Lr(n, i), b != null && g.push(Ui(n, b, v))), n = n.return;
    }
    return g;
  }
  function No(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $0(n, i, c, g, v) {
    for (var b = i._reactName, P = []; c !== null && c !== g; ) {
      var F = c, G = F.alternate, oe = F.stateNode;
      if (G !== null && G === g) break;
      F.tag === 5 && oe !== null && (F = oe, v ? (G = Lr(c, b), G != null && P.unshift(Ui(c, G, F))) : v || (G = Lr(c, b), G != null && P.push(Ui(c, G, F)))), c = c.return;
    }
    P.length !== 0 && n.push({ event: i, listeners: P });
  }
  var xI = /\r\n?/g, _I = /\u0000|\uFFFD/g;
  function B0(n) {
    return (typeof n == "string" ? n : "" + n).replace(xI, `
`).replace(_I, "");
  }
  function ba(n, i, c) {
    if (i = B0(i), B0(n) !== i && c) throw Error(r(425));
  }
  function Sa() {
  }
  var Nc = null, Rc = null;
  function Pc(n, i) {
    return n === "textarea" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Ac = typeof setTimeout == "function" ? setTimeout : void 0, bI = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, SI = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(n) {
    return V0.resolve(null).then(n).catch(EI);
  } : Ac;
  function EI(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Tc(n, i) {
    var c = i, g = 0;
    do {
      var v = c.nextSibling;
      if (n.removeChild(c), v && v.nodeType === 8) if (c = v.data, c === "/$") {
        if (g === 0) {
          n.removeChild(v), Di(i);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = v;
    } while (c);
    Di(i);
  }
  function ur(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = n.data, i === "$" || i === "$!" || i === "$?") break;
        if (i === "/$") return null;
      }
    }
    return n;
  }
  function H0(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var c = n.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (i === 0) return n;
          i--;
        } else c === "/$" && i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ro = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Ro, Gi = "__reactProps$" + Ro, qn = "__reactContainer$" + Ro, Ic = "__reactEvents$" + Ro, CI = "__reactListeners$" + Ro, kI = "__reactHandles$" + Ro;
  function Fr(n) {
    var i = n[bn];
    if (i) return i;
    for (var c = n.parentNode; c; ) {
      if (i = c[qn] || c[bn]) {
        if (c = i.alternate, i.child !== null || c !== null && c.child !== null) for (n = H0(n); n !== null; ) {
          if (c = n[bn]) return c;
          n = H0(n);
        }
        return i;
      }
      n = c, c = n.parentNode;
    }
    return null;
  }
  function Yi(n) {
    return n = n[bn] || n[qn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Po(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function Ea(n) {
    return n[Gi] || null;
  }
  var Mc = [], Ao = -1;
  function cr(n) {
    return { current: n };
  }
  function je(n) {
    0 > Ao || (n.current = Mc[Ao], Mc[Ao] = null, Ao--);
  }
  function De(n, i) {
    Ao++, Mc[Ao] = n.current, n.current = i;
  }
  var fr = {}, ht = cr(fr), bt = cr(!1), $r = fr;
  function To(n, i) {
    var c = n.type.contextTypes;
    if (!c) return fr;
    var g = n.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === i) return g.__reactInternalMemoizedMaskedChildContext;
    var v = {}, b;
    for (b in c) v[b] = i[b];
    return g && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function St(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ca() {
    je(bt), je(ht);
  }
  function W0(n, i, c) {
    if (ht.current !== fr) throw Error(r(168));
    De(ht, i), De(bt, c);
  }
  function U0(n, i, c) {
    var g = n.stateNode;
    if (i = i.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var v in g) if (!(v in i)) throw Error(r(108, K(n) || "Unknown", v));
    return Q({}, c, g);
  }
  function ka(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || fr, $r = ht.current, De(ht, n), De(bt, bt.current), !0;
  }
  function G0(n, i, c) {
    var g = n.stateNode;
    if (!g) throw Error(r(169));
    c ? (n = U0(n, i, $r), g.__reactInternalMemoizedMergedChildContext = n, je(bt), je(ht), De(ht, n)) : je(bt), De(bt, c);
  }
  var jn = null, Na = !1, Oc = !1;
  function Y0(n) {
    jn === null ? jn = [n] : jn.push(n);
  }
  function NI(n) {
    Na = !0, Y0(n);
  }
  function dr() {
    if (!Oc && jn !== null) {
      Oc = !0;
      var n = 0, i = Le;
      try {
        var c = jn;
        for (Le = 1; n < c.length; n++) {
          var g = c[n];
          do
            g = g(!0);
          while (g !== null);
        }
        jn = null, Na = !1;
      } catch (v) {
        throw jn !== null && (jn = jn.slice(n + 1)), ra(Ai, dr), v;
      } finally {
        Le = i, Oc = !1;
      }
    }
    return null;
  }
  var Io = [], Mo = 0, Ra = null, Pa = 0, Ut = [], Gt = 0, Br = null, zn = 1, Fn = "";
  function Vr(n, i) {
    Io[Mo++] = Pa, Io[Mo++] = Ra, Ra = n, Pa = i;
  }
  function K0(n, i, c) {
    Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, Br = n;
    var g = zn;
    n = Fn;
    var v = 32 - Tt(g) - 1;
    g &= ~(1 << v), c += 1;
    var b = 32 - Tt(i) + v;
    if (30 < b) {
      var P = v - v % 5;
      b = (g & (1 << P) - 1).toString(32), g >>= P, v -= P, zn = 1 << 32 - Tt(i) + v | c << v | g, Fn = b + n;
    } else zn = 1 << b | c << v | g, Fn = n;
  }
  function Lc(n) {
    n.return !== null && (Vr(n, 1), K0(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Ra; ) Ra = Io[--Mo], Io[Mo] = null, Pa = Io[--Mo], Io[Mo] = null;
    for (; n === Br; ) Br = Ut[--Gt], Ut[Gt] = null, Fn = Ut[--Gt], Ut[Gt] = null, zn = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, ze = !1, rn = null;
  function X0(n, i) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = i, c.return = n, i = n.deletions, i === null ? (n.deletions = [c], n.flags |= 16) : i.push(c);
  }
  function Q0(n, i) {
    switch (n.tag) {
      case 5:
        var c = n.type;
        return i = i.nodeType !== 1 || c.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (n.stateNode = i, Mt = n, Ot = ur(i.firstChild), !0) : !1;
      case 6:
        return i = n.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (n.stateNode = i, Mt = n, Ot = null, !0) : !1;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (c = Br !== null ? { id: zn, overflow: Fn } : null, n.memoizedState = { dehydrated: i, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = i, c.return = n, n.child = c, Mt = n, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function qc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function jc(n) {
    if (ze) {
      var i = Ot;
      if (i) {
        var c = i;
        if (!Q0(n, i)) {
          if (qc(n)) throw Error(r(418));
          i = ur(c.nextSibling);
          var g = Mt;
          i && Q0(n, i) ? X0(g, c) : (n.flags = n.flags & -4097 | 2, ze = !1, Mt = n);
        }
      } else {
        if (qc(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, ze = !1, Mt = n;
      }
    }
  }
  function Z0(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Mt = n;
  }
  function Aa(n) {
    if (n !== Mt) return !1;
    if (!ze) return Z0(n), ze = !0, !1;
    var i;
    if ((i = n.tag !== 3) && !(i = n.tag !== 5) && (i = n.type, i = i !== "head" && i !== "body" && !Pc(n.type, n.memoizedProps)), i && (i = Ot)) {
      if (qc(n)) throw J0(), Error(r(418));
      for (; i; ) X0(n, i), i = ur(i.nextSibling);
    }
    if (Z0(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var c = n.data;
            if (c === "/$") {
              if (i === 0) {
                Ot = ur(n.nextSibling);
                break e;
              }
              i--;
            } else c !== "$" && c !== "$!" && c !== "$?" || i++;
          }
          n = n.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Mt ? ur(n.stateNode.nextSibling) : null;
    return !0;
  }
  function J0() {
    for (var n = Ot; n; ) n = ur(n.nextSibling);
  }
  function Oo() {
    Ot = Mt = null, ze = !1;
  }
  function zc(n) {
    rn === null ? rn = [n] : rn.push(n);
  }
  var RI = k.ReactCurrentBatchConfig;
  function Ki(n, i, c) {
    if (n = c.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(r(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(r(147, n));
        var v = g, b = "" + n;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === b ? i.ref : (i = function(P) {
          var F = v.refs;
          P === null ? delete F[b] : F[b] = P;
        }, i._stringRef = b, i);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!c._owner) throw Error(r(290, n));
    }
    return n;
  }
  function Ta(n, i) {
    throw n = Object.prototype.toString.call(i), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : n));
  }
  function ew(n) {
    var i = n._init;
    return i(n._payload);
  }
  function tw(n) {
    function i(ne, J) {
      if (n) {
        var re = ne.deletions;
        re === null ? (ne.deletions = [J], ne.flags |= 16) : re.push(J);
      }
    }
    function c(ne, J) {
      if (!n) return null;
      for (; J !== null; ) i(ne, J), J = J.sibling;
      return null;
    }
    function g(ne, J) {
      for (ne = /* @__PURE__ */ new Map(); J !== null; ) J.key !== null ? ne.set(J.key, J) : ne.set(J.index, J), J = J.sibling;
      return ne;
    }
    function v(ne, J) {
      return ne = xr(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function b(ne, J, re) {
      return ne.index = re, n ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function P(ne) {
      return n && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function F(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Tf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function G(ne, J, re, he) {
      var Ce = re.type;
      return Ce === T ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === B && ew(Ce) === J.type) ? (he = v(J, re.props), he.ref = Ki(ne, J, re), he.return = ne, he) : (he = tl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = If(re, ne.mode, he), J.return = ne, J) : (J = v(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Qr(re, ne.mode, he, Ce), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Tf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case R:
            return re = tl(J.type, J.key, J.props, null, ne.mode, re), re.ref = Ki(ne, null, J), re.return = ne, re;
          case A:
            return J = If(J, ne.mode, re), J.return = ne, J;
          case B:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || z(J)) return J = Qr(J, ne.mode, re, null), J.return = ne, J;
        Ta(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : F(ne, J, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case R:
            return re.key === Ce ? G(ne, J, re, he) : null;
          case A:
            return re.key === Ce ? oe(ne, J, re, he) : null;
          case B:
            return Ce = re._init, le(
              ne,
              J,
              Ce(re._payload),
              he
            );
        }
        if (Ft(re) || z(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Ta(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, F(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case R:
            return ne = ne.get(he.key === null ? re : he.key) || null, G(J, ne, he, Ce);
          case A:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case B:
            var ke = he._init;
            return ge(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || z(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Ta(J, he);
      }
      return null;
    }
    function we(ne, J, re, he) {
      for (var Ce = null, ke = null, Ne = J, Pe = J = 0, ut = null; Ne !== null && Pe < re.length; Pe++) {
        Ne.index > Pe ? (ut = Ne, Ne = null) : ut = Ne.sibling;
        var Oe = le(ne, Ne, re[Pe], he);
        if (Oe === null) {
          Ne === null && (Ne = ut);
          break;
        }
        n && Ne && Oe.alternate === null && i(ne, Ne), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe, Ne = ut;
      }
      if (Pe === re.length) return c(ne, Ne), ze && Vr(ne, Pe), Ce;
      if (Ne === null) {
        for (; Pe < re.length; Pe++) Ne = fe(ne, re[Pe], he), Ne !== null && (J = b(Ne, J, Pe), ke === null ? Ce = Ne : ke.sibling = Ne, ke = Ne);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); Pe < re.length; Pe++) ut = ge(Ne, ne, Pe, re[Pe], he), ut !== null && (n && ut.alternate !== null && Ne.delete(ut.key === null ? Pe : ut.key), J = b(ut, J, Pe), ke === null ? Ce = ut : ke.sibling = ut, ke = ut);
      return n && Ne.forEach(function(_r) {
        return i(ne, _r);
      }), ze && Vr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = z(re);
      if (typeof Ce != "function") throw Error(r(150));
      if (re = Ce.call(re), re == null) throw Error(r(151));
      for (var ke = Ce = null, Ne = J, Pe = J = 0, ut = null, Oe = re.next(); Ne !== null && !Oe.done; Pe++, Oe = re.next()) {
        Ne.index > Pe ? (ut = Ne, Ne = null) : ut = Ne.sibling;
        var _r = le(ne, Ne, Oe.value, he);
        if (_r === null) {
          Ne === null && (Ne = ut);
          break;
        }
        n && Ne && _r.alternate === null && i(ne, Ne), J = b(_r, J, Pe), ke === null ? Ce = _r : ke.sibling = _r, ke = _r, Ne = ut;
      }
      if (Oe.done) return c(
        ne,
        Ne
      ), ze && Vr(ne, Pe), Ce;
      if (Ne === null) {
        for (; !Oe.done; Pe++, Oe = re.next()) Oe = fe(ne, Oe.value, he), Oe !== null && (J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); !Oe.done; Pe++, Oe = re.next()) Oe = ge(Ne, ne, Pe, Oe.value, he), Oe !== null && (n && Oe.alternate !== null && Ne.delete(Oe.key === null ? Pe : Oe.key), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
      return n && Ne.forEach(function(a2) {
        return i(ne, a2);
      }), ze && Vr(ne, Pe), Ce;
    }
    function Ze(ne, J, re, he) {
      if (typeof re == "object" && re !== null && re.type === T && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case R:
            e: {
              for (var Ce = re.key, ke = J; ke !== null; ) {
                if (ke.key === Ce) {
                  if (Ce = re.type, Ce === T) {
                    if (ke.tag === 7) {
                      c(ne, ke.sibling), J = v(ke, re.props.children), J.return = ne, ne = J;
                      break e;
                    }
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === B && ew(Ce) === ke.type) {
                    c(ne, ke.sibling), J = v(ke, re.props), J.ref = Ki(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else i(ne, ke);
                ke = ke.sibling;
              }
              re.type === T ? (J = Qr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = tl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, ne = he);
            }
            return P(ne);
          case A:
            e: {
              for (ke = re.key; J !== null; ) {
                if (J.key === ke) if (J.tag === 4 && J.stateNode.containerInfo === re.containerInfo && J.stateNode.implementation === re.implementation) {
                  c(ne, J.sibling), J = v(J, re.children || []), J.return = ne, ne = J;
                  break e;
                } else {
                  c(ne, J);
                  break;
                }
                else i(ne, J);
                J = J.sibling;
              }
              J = If(re, ne.mode, he), J.return = ne, ne = J;
            }
            return P(ne);
          case B:
            return ke = re._init, Ze(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return we(ne, J, re, he);
        if (z(re)) return Se(ne, J, re, he);
        Ta(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = v(J, re), J.return = ne, ne = J) : (c(ne, J), J = Tf(re, ne.mode, he), J.return = ne, ne = J), P(ne)) : c(ne, J);
    }
    return Ze;
  }
  var Lo = tw(!0), nw = tw(!1), Ia = cr(null), Ma = null, Do = null, Fc = null;
  function $c() {
    Fc = Do = Ma = null;
  }
  function Bc(n) {
    var i = Ia.current;
    je(Ia), n._currentValue = i;
  }
  function Vc(n, i, c) {
    for (; n !== null; ) {
      var g = n.alternate;
      if ((n.childLanes & i) !== i ? (n.childLanes |= i, g !== null && (g.childLanes |= i)) : g !== null && (g.childLanes & i) !== i && (g.childLanes |= i), n === c) break;
      n = n.return;
    }
  }
  function qo(n, i) {
    Ma = n, Fc = Do = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & i) !== 0 && (Et = !0), n.firstContext = null);
  }
  function Yt(n) {
    var i = n._currentValue;
    if (Fc !== n) if (n = { context: n, memoizedValue: i, next: null }, Do === null) {
      if (Ma === null) throw Error(r(308));
      Do = n, Ma.dependencies = { lanes: 0, firstContext: n };
    } else Do = Do.next = n;
    return i;
  }
  var Hr = null;
  function Hc(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function rw(n, i, c, g) {
    var v = i.interleaved;
    return v === null ? (c.next = c, Hc(i)) : (c.next = v.next, v.next = c), i.interleaved = c, $n(n, g);
  }
  function $n(n, i) {
    n.lanes |= i;
    var c = n.alternate;
    for (c !== null && (c.lanes |= i), c = n, n = n.return; n !== null; ) n.childLanes |= i, c = n.alternate, c !== null && (c.childLanes |= i), c = n, n = n.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var hr = !1;
  function Wc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ow(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Bn(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function pr(n, i, c) {
    var g = n.updateQueue;
    if (g === null) return null;
    if (g = g.shared, (Me & 2) !== 0) {
      var v = g.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), g.pending = i, $n(n, c);
    }
    return v = g.interleaved, v === null ? (i.next = i, Hc(g)) : (i.next = v.next, v.next = i), g.interleaved = i, $n(n, c);
  }
  function Oa(n, i, c) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (c & 4194240) !== 0)) {
      var g = i.lanes;
      g &= n.pendingLanes, c |= g, i.lanes = c, ic(n, c);
    }
  }
  function iw(n, i) {
    var c = n.updateQueue, g = n.alternate;
    if (g !== null && (g = g.updateQueue, c === g)) {
      var v = null, b = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var P = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          b === null ? v = b = P : b = b.next = P, c = c.next;
        } while (c !== null);
        b === null ? v = b = i : b = b.next = i;
      } else v = b = i;
      c = { baseState: g.baseState, firstBaseUpdate: v, lastBaseUpdate: b, shared: g.shared, effects: g.effects }, n.updateQueue = c;
      return;
    }
    n = c.lastBaseUpdate, n === null ? c.firstBaseUpdate = i : n.next = i, c.lastBaseUpdate = i;
  }
  function La(n, i, c, g) {
    var v = n.updateQueue;
    hr = !1;
    var b = v.firstBaseUpdate, P = v.lastBaseUpdate, F = v.shared.pending;
    if (F !== null) {
      v.shared.pending = null;
      var G = F, oe = G.next;
      G.next = null, P === null ? b = oe : P.next = oe, P = G;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, F = ue.lastBaseUpdate, F !== P && (F === null ? ue.firstBaseUpdate = oe : F.next = oe, ue.lastBaseUpdate = G));
    }
    if (b !== null) {
      var fe = v.baseState;
      P = 0, ue = oe = G = null, F = b;
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
            var we = n, Se = F;
            switch (le = i, ge = c, Se.tag) {
              case 1:
                if (we = Se.payload, typeof we == "function") {
                  fe = we.call(ge, fe, le);
                  break e;
                }
                fe = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Se.payload, le = typeof we == "function" ? we.call(ge, fe, le) : we, le == null) break e;
                fe = Q({}, fe, le);
                break e;
              case 2:
                hr = !0;
            }
          }
          F.callback !== null && F.lane !== 0 && (n.flags |= 64, le = v.effects, le === null ? v.effects = [F] : le.push(F));
        } else ge = { eventTime: ge, lane: le, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, ue === null ? (oe = ue = ge, G = fe) : ue = ue.next = ge, P |= le;
        if (F = F.next, F === null) {
          if (F = v.shared.pending, F === null) break;
          le = F, F = le.next, le.next = null, v.lastBaseUpdate = le, v.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (G = fe), v.baseState = G, v.firstBaseUpdate = oe, v.lastBaseUpdate = ue, i = v.shared.interleaved, i !== null) {
        v = i;
        do
          P |= v.lane, v = v.next;
        while (v !== i);
      } else b === null && (v.shared.lanes = 0);
      Gr |= P, n.lanes = P, n.memoizedState = fe;
    }
  }
  function sw(n, i, c) {
    if (n = i.effects, i.effects = null, n !== null) for (i = 0; i < n.length; i++) {
      var g = n[i], v = g.callback;
      if (v !== null) {
        if (g.callback = null, g = c, typeof v != "function") throw Error(r(191, v));
        v.call(g);
      }
    }
  }
  var Xi = {}, Sn = cr(Xi), Qi = cr(Xi), Zi = cr(Xi);
  function Wr(n) {
    if (n === Xi) throw Error(r(174));
    return n;
  }
  function Uc(n, i) {
    switch (De(Zi, i), De(Qi, n), De(Sn, Xi), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Bt(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = Bt(i, n);
    }
    je(Sn), De(Sn, i);
  }
  function jo() {
    je(Sn), je(Qi), je(Zi);
  }
  function aw(n) {
    Wr(Zi.current);
    var i = Wr(Sn.current), c = Bt(i, n.type);
    i !== c && (De(Qi, n), De(Sn, c));
  }
  function Gc(n) {
    Qi.current === n && (je(Sn), je(Qi));
  }
  var Ue = cr(0);
  function Da(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var c = i.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!")) return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Yc = [];
  function Kc() {
    for (var n = 0; n < Yc.length; n++) Yc[n]._workInProgressVersionPrimary = null;
    Yc.length = 0;
  }
  var qa = k.ReactCurrentDispatcher, Xc = k.ReactCurrentBatchConfig, Ur = 0, Ge = null, rt = null, at = null, ja = !1, Ji = !1, es = 0, PI = 0;
  function pt() {
    throw Error(r(321));
  }
  function Qc(n, i) {
    if (i === null) return !1;
    for (var c = 0; c < i.length && c < n.length; c++) if (!nn(n[c], i[c])) return !1;
    return !0;
  }
  function Zc(n, i, c, g, v, b) {
    if (Ur = b, Ge = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, qa.current = n === null || n.memoizedState === null ? MI : OI, n = c(g, v), Ji) {
      b = 0;
      do {
        if (Ji = !1, es = 0, 25 <= b) throw Error(r(301));
        b += 1, at = rt = null, i.updateQueue = null, qa.current = LI, n = c(g, v);
      } while (Ji);
    }
    if (qa.current = $a, i = rt !== null && rt.next !== null, Ur = 0, at = rt = Ge = null, ja = !1, i) throw Error(r(300));
    return n;
  }
  function Jc() {
    var n = es !== 0;
    return es = 0, n;
  }
  function En() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return at === null ? Ge.memoizedState = at = n : at = at.next = n, at;
  }
  function Kt() {
    if (rt === null) {
      var n = Ge.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = rt.next;
    var i = at === null ? Ge.memoizedState : at.next;
    if (i !== null) at = i, rt = n;
    else {
      if (n === null) throw Error(r(310));
      rt = n, n = { memoizedState: rt.memoizedState, baseState: rt.baseState, baseQueue: rt.baseQueue, queue: rt.queue, next: null }, at === null ? Ge.memoizedState = at = n : at = at.next = n;
    }
    return at;
  }
  function ts(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function ef(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var g = rt, v = g.baseQueue, b = c.pending;
    if (b !== null) {
      if (v !== null) {
        var P = v.next;
        v.next = b.next, b.next = P;
      }
      g.baseQueue = v = b, c.pending = null;
    }
    if (v !== null) {
      b = v.next, g = g.baseState;
      var F = P = null, G = null, oe = b;
      do {
        var ue = oe.lane;
        if ((Ur & ue) === ue) G !== null && (G = G.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : n(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          G === null ? (F = G = fe, P = g) : G = G.next = fe, Ge.lanes |= ue, Gr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== b);
      G === null ? P = g : G.next = F, nn(g, i.memoizedState) || (Et = !0), i.memoizedState = g, i.baseState = P, i.baseQueue = G, c.lastRenderedState = g;
    }
    if (n = c.interleaved, n !== null) {
      v = n;
      do
        b = v.lane, Ge.lanes |= b, Gr |= b, v = v.next;
      while (v !== n);
    } else v === null && (c.lanes = 0);
    return [i.memoizedState, c.dispatch];
  }
  function tf(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var g = c.dispatch, v = c.pending, b = i.memoizedState;
    if (v !== null) {
      c.pending = null;
      var P = v = v.next;
      do
        b = n(b, P.action), P = P.next;
      while (P !== v);
      nn(b, i.memoizedState) || (Et = !0), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), c.lastRenderedState = b;
    }
    return [b, g];
  }
  function lw() {
  }
  function uw(n, i) {
    var c = Ge, g = Kt(), v = i(), b = !nn(g.memoizedState, v);
    if (b && (g.memoizedState = v, Et = !0), g = g.queue, nf(dw.bind(null, c, g, n), [n]), g.getSnapshot !== i || b || at !== null && at.memoizedState.tag & 1) {
      if (c.flags |= 2048, ns(9, fw.bind(null, c, g, v, i), void 0, null), lt === null) throw Error(r(349));
      (Ur & 30) !== 0 || cw(c, i, v);
    }
    return v;
  }
  function cw(n, i, c) {
    n.flags |= 16384, n = { getSnapshot: i, value: c }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.stores = [n]) : (c = i.stores, c === null ? i.stores = [n] : c.push(n));
  }
  function fw(n, i, c, g) {
    i.value = c, i.getSnapshot = g, hw(i) && pw(n);
  }
  function dw(n, i, c) {
    return c(function() {
      hw(i) && pw(n);
    });
  }
  function hw(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var c = i();
      return !nn(n, c);
    } catch {
      return !0;
    }
  }
  function pw(n) {
    var i = $n(n, 1);
    i !== null && ln(i, n, 1, -1);
  }
  function gw(n) {
    var i = En();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ts, lastRenderedState: n }, i.queue = n, n = n.dispatch = II.bind(null, Ge, n), [i.memoizedState, n];
  }
  function ns(n, i, c, g) {
    return n = { tag: n, create: i, destroy: c, deps: g, next: null }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.lastEffect = n.next = n) : (c = i.lastEffect, c === null ? i.lastEffect = n.next = n : (g = c.next, c.next = n, n.next = g, i.lastEffect = n)), n;
  }
  function mw() {
    return Kt().memoizedState;
  }
  function za(n, i, c, g) {
    var v = En();
    Ge.flags |= n, v.memoizedState = ns(1 | i, c, void 0, g === void 0 ? null : g);
  }
  function Fa(n, i, c, g) {
    var v = Kt();
    g = g === void 0 ? null : g;
    var b = void 0;
    if (rt !== null) {
      var P = rt.memoizedState;
      if (b = P.destroy, g !== null && Qc(g, P.deps)) {
        v.memoizedState = ns(i, c, b, g);
        return;
      }
    }
    Ge.flags |= n, v.memoizedState = ns(1 | i, c, b, g);
  }
  function vw(n, i) {
    return za(8390656, 8, n, i);
  }
  function nf(n, i) {
    return Fa(2048, 8, n, i);
  }
  function yw(n, i) {
    return Fa(4, 2, n, i);
  }
  function ww(n, i) {
    return Fa(4, 4, n, i);
  }
  function xw(n, i) {
    if (typeof i == "function") return n = n(), i(n), function() {
      i(null);
    };
    if (i != null) return n = n(), i.current = n, function() {
      i.current = null;
    };
  }
  function _w(n, i, c) {
    return c = c != null ? c.concat([n]) : null, Fa(4, 4, xw.bind(null, i, n), c);
  }
  function rf() {
  }
  function bw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var g = c.memoizedState;
    return g !== null && i !== null && Qc(i, g[1]) ? g[0] : (c.memoizedState = [n, i], n);
  }
  function Sw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var g = c.memoizedState;
    return g !== null && i !== null && Qc(i, g[1]) ? g[0] : (n = n(), c.memoizedState = [n, i], n);
  }
  function Ew(n, i, c) {
    return (Ur & 21) === 0 ? (n.baseState && (n.baseState = !1, Et = !0), n.memoizedState = c) : (nn(c, i) || (c = la(), Ge.lanes |= c, Gr |= c, n.baseState = !0), i);
  }
  function AI(n, i) {
    var c = Le;
    Le = c !== 0 && 4 > c ? c : 4, n(!0);
    var g = Xc.transition;
    Xc.transition = {};
    try {
      n(!1), i();
    } finally {
      Le = c, Xc.transition = g;
    }
  }
  function Cw() {
    return Kt().memoizedState;
  }
  function TI(n, i, c) {
    var g = yr(n);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, kw(n)) Nw(i, c);
    else if (c = rw(n, i, c, g), c !== null) {
      var v = xt();
      ln(c, n, g, v), Rw(c, i, g);
    }
  }
  function II(n, i, c) {
    var g = yr(n), v = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (kw(n)) Nw(i, v);
    else {
      var b = n.alternate;
      if (n.lanes === 0 && (b === null || b.lanes === 0) && (b = i.lastRenderedReducer, b !== null)) try {
        var P = i.lastRenderedState, F = b(P, c);
        if (v.hasEagerState = !0, v.eagerState = F, nn(F, P)) {
          var G = i.interleaved;
          G === null ? (v.next = v, Hc(i)) : (v.next = G.next, G.next = v), i.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      c = rw(n, i, v, g), c !== null && (v = xt(), ln(c, n, g, v), Rw(c, i, g));
    }
  }
  function kw(n) {
    var i = n.alternate;
    return n === Ge || i !== null && i === Ge;
  }
  function Nw(n, i) {
    Ji = ja = !0;
    var c = n.pending;
    c === null ? i.next = i : (i.next = c.next, c.next = i), n.pending = i;
  }
  function Rw(n, i, c) {
    if ((c & 4194240) !== 0) {
      var g = i.lanes;
      g &= n.pendingLanes, c |= g, i.lanes = c, ic(n, c);
    }
  }
  var $a = { readContext: Yt, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useInsertionEffect: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useSyncExternalStore: pt, useId: pt, unstable_isNewReconciler: !1 }, MI = { readContext: Yt, useCallback: function(n, i) {
    return En().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: Yt, useEffect: vw, useImperativeHandle: function(n, i, c) {
    return c = c != null ? c.concat([n]) : null, za(
      4194308,
      4,
      xw.bind(null, i, n),
      c
    );
  }, useLayoutEffect: function(n, i) {
    return za(4194308, 4, n, i);
  }, useInsertionEffect: function(n, i) {
    return za(4, 2, n, i);
  }, useMemo: function(n, i) {
    var c = En();
    return i = i === void 0 ? null : i, n = n(), c.memoizedState = [n, i], n;
  }, useReducer: function(n, i, c) {
    var g = En();
    return i = c !== void 0 ? c(i) : i, g.memoizedState = g.baseState = i, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, g.queue = n, n = n.dispatch = TI.bind(null, Ge, n), [g.memoizedState, n];
  }, useRef: function(n) {
    var i = En();
    return n = { current: n }, i.memoizedState = n;
  }, useState: gw, useDebugValue: rf, useDeferredValue: function(n) {
    return En().memoizedState = n;
  }, useTransition: function() {
    var n = gw(!1), i = n[0];
    return n = AI.bind(null, n[1]), En().memoizedState = n, [i, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, i, c) {
    var g = Ge, v = En();
    if (ze) {
      if (c === void 0) throw Error(r(407));
      c = c();
    } else {
      if (c = i(), lt === null) throw Error(r(349));
      (Ur & 30) !== 0 || cw(g, i, c);
    }
    v.memoizedState = c;
    var b = { value: c, getSnapshot: i };
    return v.queue = b, vw(dw.bind(
      null,
      g,
      b,
      n
    ), [n]), g.flags |= 2048, ns(9, fw.bind(null, g, b, c, i), void 0, null), c;
  }, useId: function() {
    var n = En(), i = lt.identifierPrefix;
    if (ze) {
      var c = Fn, g = zn;
      c = (g & ~(1 << 32 - Tt(g) - 1)).toString(32) + c, i = ":" + i + "R" + c, c = es++, 0 < c && (i += "H" + c.toString(32)), i += ":";
    } else c = PI++, i = ":" + i + "r" + c.toString(32) + ":";
    return n.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, OI = {
    readContext: Yt,
    useCallback: bw,
    useContext: Yt,
    useEffect: nf,
    useImperativeHandle: _w,
    useInsertionEffect: yw,
    useLayoutEffect: ww,
    useMemo: Sw,
    useReducer: ef,
    useRef: mw,
    useState: function() {
      return ef(ts);
    },
    useDebugValue: rf,
    useDeferredValue: function(n) {
      var i = Kt();
      return Ew(i, rt.memoizedState, n);
    },
    useTransition: function() {
      var n = ef(ts)[0], i = Kt().memoizedState;
      return [n, i];
    },
    useMutableSource: lw,
    useSyncExternalStore: uw,
    useId: Cw,
    unstable_isNewReconciler: !1
  }, LI = { readContext: Yt, useCallback: bw, useContext: Yt, useEffect: nf, useImperativeHandle: _w, useInsertionEffect: yw, useLayoutEffect: ww, useMemo: Sw, useReducer: tf, useRef: mw, useState: function() {
    return tf(ts);
  }, useDebugValue: rf, useDeferredValue: function(n) {
    var i = Kt();
    return rt === null ? i.memoizedState = n : Ew(i, rt.memoizedState, n);
  }, useTransition: function() {
    var n = tf(ts)[0], i = Kt().memoizedState;
    return [n, i];
  }, useMutableSource: lw, useSyncExternalStore: uw, useId: Cw, unstable_isNewReconciler: !1 };
  function on(n, i) {
    if (n && n.defaultProps) {
      i = Q({}, i), n = n.defaultProps;
      for (var c in n) i[c] === void 0 && (i[c] = n[c]);
      return i;
    }
    return i;
  }
  function of(n, i, c, g) {
    i = n.memoizedState, c = c(g, i), c = c == null ? i : Q({}, i, c), n.memoizedState = c, n.lanes === 0 && (n.updateQueue.baseState = c);
  }
  var Ba = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, c) {
    n = n._reactInternals;
    var g = xt(), v = yr(n), b = Bn(g, v);
    b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, g), Oa(i, n, v));
  }, enqueueReplaceState: function(n, i, c) {
    n = n._reactInternals;
    var g = xt(), v = yr(n), b = Bn(g, v);
    b.tag = 1, b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, g), Oa(i, n, v));
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var c = xt(), g = yr(n), v = Bn(c, g);
    v.tag = 2, i != null && (v.callback = i), i = pr(n, v, g), i !== null && (ln(i, n, g, c), Oa(i, n, g));
  } };
  function Pw(n, i, c, g, v, b, P) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(g, b, P) : i.prototype && i.prototype.isPureReactComponent ? !Bi(c, g) || !Bi(v, b) : !0;
  }
  function Aw(n, i, c) {
    var g = !1, v = fr, b = i.contextType;
    return typeof b == "object" && b !== null ? b = Yt(b) : (v = St(i) ? $r : ht.current, g = i.contextTypes, b = (g = g != null) ? To(n, v) : fr), i = new i(c, b), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ba, n.stateNode = i, i._reactInternals = n, g && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function Tw(n, i, c, g) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(c, g), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(c, g), i.state !== n && Ba.enqueueReplaceState(i, i.state, null);
  }
  function sf(n, i, c, g) {
    var v = n.stateNode;
    v.props = c, v.state = n.memoizedState, v.refs = {}, Wc(n);
    var b = i.contextType;
    typeof b == "object" && b !== null ? v.context = Yt(b) : (b = St(i) ? $r : ht.current, v.context = To(n, b)), v.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (of(n, i, b, c), v.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (i = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), i !== v.state && Ba.enqueueReplaceState(v, v.state, null), La(n, c, v, g), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function zo(n, i) {
    try {
      var c = "", g = i;
      do
        c += Z(g), g = g.return;
      while (g);
      var v = c;
    } catch (b) {
      v = `
Error generating stack: ` + b.message + `
` + b.stack;
    }
    return { value: n, source: i, stack: v, digest: null };
  }
  function af(n, i, c) {
    return { value: n, source: null, stack: c ?? null, digest: i ?? null };
  }
  function lf(n, i) {
    try {
      console.error(i.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var DI = typeof WeakMap == "function" ? WeakMap : Map;
  function Iw(n, i, c) {
    c = Bn(-1, c), c.tag = 3, c.payload = { element: null };
    var g = i.value;
    return c.callback = function() {
      Ka || (Ka = !0, Sf = g), lf(n, i);
    }, c;
  }
  function Mw(n, i, c) {
    c = Bn(-1, c), c.tag = 3;
    var g = n.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var v = i.value;
      c.payload = function() {
        return g(v);
      }, c.callback = function() {
        lf(n, i);
      };
    }
    var b = n.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (c.callback = function() {
      lf(n, i), typeof g != "function" && (mr === null ? mr = /* @__PURE__ */ new Set([this]) : mr.add(this));
      var P = i.stack;
      this.componentDidCatch(i.value, { componentStack: P !== null ? P : "" });
    }), c;
  }
  function Ow(n, i, c) {
    var g = n.pingCache;
    if (g === null) {
      g = n.pingCache = new DI();
      var v = /* @__PURE__ */ new Set();
      g.set(i, v);
    } else v = g.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), g.set(i, v));
    v.has(c) || (v.add(c), n = XI.bind(null, n, i, c), i.then(n, n));
  }
  function Lw(n) {
    do {
      var i;
      if ((i = n.tag === 13) && (i = n.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Dw(n, i, c, g, v) {
    return (n.mode & 1) === 0 ? (n === i ? n.flags |= 65536 : (n.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (i = Bn(-1, 1), i.tag = 2, pr(c, i, 1))), c.lanes |= 1), n) : (n.flags |= 65536, n.lanes = v, n);
  }
  var qI = k.ReactCurrentOwner, Et = !1;
  function wt(n, i, c, g) {
    i.child = n === null ? nw(i, null, c, g) : Lo(i, n.child, c, g);
  }
  function qw(n, i, c, g, v) {
    c = c.render;
    var b = i.ref;
    return qo(i, v), g = Zc(n, i, c, g, b, v), c = Jc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && c && Lc(i), i.flags |= 1, wt(n, i, g, v), i.child);
  }
  function jw(n, i, c, g, v) {
    if (n === null) {
      var b = c.type;
      return typeof b == "function" && !Af(b) && b.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (i.tag = 15, i.type = b, zw(n, i, b, g, v)) : (n = tl(c.type, null, g, i, i.mode, v), n.ref = i.ref, n.return = i, i.child = n);
    }
    if (b = n.child, (n.lanes & v) === 0) {
      var P = b.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Bi, c(P, g) && n.ref === i.ref) return Vn(n, i, v);
    }
    return i.flags |= 1, n = xr(b, g), n.ref = i.ref, n.return = i, i.child = n;
  }
  function zw(n, i, c, g, v) {
    if (n !== null) {
      var b = n.memoizedProps;
      if (Bi(b, g) && n.ref === i.ref) if (Et = !1, i.pendingProps = g = b, (n.lanes & v) !== 0) (n.flags & 131072) !== 0 && (Et = !0);
      else return i.lanes = n.lanes, Vn(n, i, v);
    }
    return uf(n, i, c, g, v);
  }
  function Fw(n, i, c) {
    var g = i.pendingProps, v = g.children, b = n !== null ? n.memoizedState : null;
    if (g.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, De($o, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return n = b !== null ? b.baseLanes | c : c, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, i.updateQueue = null, De($o, Lt), Lt |= n, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = b !== null ? b.baseLanes : c, De($o, Lt), Lt |= g;
    }
    else b !== null ? (g = b.baseLanes | c, i.memoizedState = null) : g = c, De($o, Lt), Lt |= g;
    return wt(n, i, v, c), i.child;
  }
  function $w(n, i) {
    var c = i.ref;
    (n === null && c !== null || n !== null && n.ref !== c) && (i.flags |= 512, i.flags |= 2097152);
  }
  function uf(n, i, c, g, v) {
    var b = St(c) ? $r : ht.current;
    return b = To(i, b), qo(i, v), c = Zc(n, i, c, g, b, v), g = Jc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && g && Lc(i), i.flags |= 1, wt(n, i, c, v), i.child);
  }
  function Bw(n, i, c, g, v) {
    if (St(c)) {
      var b = !0;
      ka(i);
    } else b = !1;
    if (qo(i, v), i.stateNode === null) Ha(n, i), Aw(i, c, g), sf(i, c, g, v), g = !0;
    else if (n === null) {
      var P = i.stateNode, F = i.memoizedProps;
      P.props = F;
      var G = P.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? $r : ht.current, oe = To(i, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      fe || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (F !== g || G !== oe) && Tw(i, P, g, oe), hr = !1;
      var le = i.memoizedState;
      P.state = le, La(i, g, P, v), G = i.memoizedState, F !== g || le !== G || bt.current || hr ? (typeof ue == "function" && (of(i, c, ue, g), G = i.memoizedState), (F = hr || Pw(i, c, F, g, le, G, oe)) ? (fe || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = g, i.memoizedState = G), P.props = g, P.state = G, P.context = oe, g = F) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), g = !1);
    } else {
      P = i.stateNode, ow(n, i), F = i.memoizedProps, oe = i.type === i.elementType ? F : on(i.type, F), P.props = oe, fe = i.pendingProps, le = P.context, G = c.contextType, typeof G == "object" && G !== null ? G = Yt(G) : (G = St(c) ? $r : ht.current, G = To(i, G));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (F !== fe || le !== G) && Tw(i, P, g, G), hr = !1, le = i.memoizedState, P.state = le, La(i, g, P, v);
      var we = i.memoizedState;
      F !== fe || le !== we || bt.current || hr ? (typeof ge == "function" && (of(i, c, ge, g), we = i.memoizedState), (oe = hr || Pw(i, c, oe, g, le, we, G) || !1) ? (ue || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(g, we, G), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(g, we, G)), typeof P.componentDidUpdate == "function" && (i.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || F === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || F === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), i.memoizedProps = g, i.memoizedState = we), P.props = g, P.state = we, P.context = G, g = oe) : (typeof P.componentDidUpdate != "function" || F === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || F === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), g = !1);
    }
    return cf(n, i, c, g, b, v);
  }
  function cf(n, i, c, g, v, b) {
    $w(n, i);
    var P = (i.flags & 128) !== 0;
    if (!g && !P) return v && G0(i, c, !1), Vn(n, i, b);
    g = i.stateNode, qI.current = i;
    var F = P && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return i.flags |= 1, n !== null && P ? (i.child = Lo(i, n.child, null, b), i.child = Lo(i, null, F, b)) : wt(n, i, F, b), i.memoizedState = g.state, v && G0(i, c, !0), i.child;
  }
  function Vw(n) {
    var i = n.stateNode;
    i.pendingContext ? W0(n, i.pendingContext, i.pendingContext !== i.context) : i.context && W0(n, i.context, !1), Uc(n, i.containerInfo);
  }
  function Hw(n, i, c, g, v) {
    return Oo(), zc(v), i.flags |= 256, wt(n, i, c, g), i.child;
  }
  var ff = { dehydrated: null, treeContext: null, retryLane: 0 };
  function df(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ww(n, i, c) {
    var g = i.pendingProps, v = Ue.current, b = !1, P = (i.flags & 128) !== 0, F;
    if ((F = P) || (F = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), F ? (b = !0, i.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), De(Ue, v & 1), n === null)
      return jc(i), n = i.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : n.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (P = g.children, n = g.fallback, b ? (g = i.mode, b = i.child, P = { mode: "hidden", children: P }, (g & 1) === 0 && b !== null ? (b.childLanes = 0, b.pendingProps = P) : b = nl(P, g, 0, null), n = Qr(n, g, c, null), b.return = i, n.return = i, b.sibling = n, i.child = b, i.child.memoizedState = df(c), i.memoizedState = ff, n) : hf(i, P));
    if (v = n.memoizedState, v !== null && (F = v.dehydrated, F !== null)) return jI(n, i, P, g, F, v, c);
    if (b) {
      b = g.fallback, P = i.mode, v = n.child, F = v.sibling;
      var G = { mode: "hidden", children: g.children };
      return (P & 1) === 0 && i.child !== v ? (g = i.child, g.childLanes = 0, g.pendingProps = G, i.deletions = null) : (g = xr(v, G), g.subtreeFlags = v.subtreeFlags & 14680064), F !== null ? b = xr(F, b) : (b = Qr(b, P, c, null), b.flags |= 2), b.return = i, g.return = i, g.sibling = b, i.child = g, g = b, b = i.child, P = n.child.memoizedState, P = P === null ? df(c) : { baseLanes: P.baseLanes | c, cachePool: null, transitions: P.transitions }, b.memoizedState = P, b.childLanes = n.childLanes & ~c, i.memoizedState = ff, g;
    }
    return b = n.child, n = b.sibling, g = xr(b, { mode: "visible", children: g.children }), (i.mode & 1) === 0 && (g.lanes = c), g.return = i, g.sibling = null, n !== null && (c = i.deletions, c === null ? (i.deletions = [n], i.flags |= 16) : c.push(n)), i.child = g, i.memoizedState = null, g;
  }
  function hf(n, i) {
    return i = nl({ mode: "visible", children: i }, n.mode, 0, null), i.return = n, n.child = i;
  }
  function Va(n, i, c, g) {
    return g !== null && zc(g), Lo(i, n.child, null, c), n = hf(i, i.pendingProps.children), n.flags |= 2, i.memoizedState = null, n;
  }
  function jI(n, i, c, g, v, b, P) {
    if (c)
      return i.flags & 256 ? (i.flags &= -257, g = af(Error(r(422))), Va(n, i, P, g)) : i.memoizedState !== null ? (i.child = n.child, i.flags |= 128, null) : (b = g.fallback, v = i.mode, g = nl({ mode: "visible", children: g.children }, v, 0, null), b = Qr(b, v, P, null), b.flags |= 2, g.return = i, b.return = i, g.sibling = b, i.child = g, (i.mode & 1) !== 0 && Lo(i, n.child, null, P), i.child.memoizedState = df(P), i.memoizedState = ff, b);
    if ((i.mode & 1) === 0) return Va(n, i, P, null);
    if (v.data === "$!") {
      if (g = v.nextSibling && v.nextSibling.dataset, g) var F = g.dgst;
      return g = F, b = Error(r(419)), g = af(b, g, void 0), Va(n, i, P, g);
    }
    if (F = (P & n.childLanes) !== 0, Et || F) {
      if (g = lt, g !== null) {
        switch (P & -P) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
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
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = (v & (g.suspendedLanes | P)) !== 0 ? 0 : v, v !== 0 && v !== b.retryLane && (b.retryLane = v, $n(n, v), ln(g, n, v, -1));
      }
      return Pf(), g = af(Error(r(421))), Va(n, i, P, g);
    }
    return v.data === "$?" ? (i.flags |= 128, i.child = n.child, i = QI.bind(null, n), v._reactRetry = i, null) : (n = b.treeContext, Ot = ur(v.nextSibling), Mt = i, ze = !0, rn = null, n !== null && (Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, zn = n.id, Fn = n.overflow, Br = i), i = hf(i, g.children), i.flags |= 4096, i);
  }
  function Uw(n, i, c) {
    n.lanes |= i;
    var g = n.alternate;
    g !== null && (g.lanes |= i), Vc(n.return, i, c);
  }
  function pf(n, i, c, g, v) {
    var b = n.memoizedState;
    b === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: v } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = g, b.tail = c, b.tailMode = v);
  }
  function Gw(n, i, c) {
    var g = i.pendingProps, v = g.revealOrder, b = g.tail;
    if (wt(n, i, g.children, c), g = Ue.current, (g & 2) !== 0) g = g & 1 | 2, i.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = i.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Uw(n, c, i);
        else if (n.tag === 19) Uw(n, c, i);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === i) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === i) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      g &= 1;
    }
    if (De(Ue, g), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (c = i.child, v = null; c !== null; ) n = c.alternate, n !== null && Da(n) === null && (v = c), c = c.sibling;
        c = v, c === null ? (v = i.child, i.child = null) : (v = c.sibling, c.sibling = null), pf(i, !1, v, c, b);
        break;
      case "backwards":
        for (c = null, v = i.child, i.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && Da(n) === null) {
            i.child = v;
            break;
          }
          n = v.sibling, v.sibling = c, c = v, v = n;
        }
        pf(i, !0, c, null, b);
        break;
      case "together":
        pf(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ha(n, i) {
    (i.mode & 1) === 0 && n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Vn(n, i, c) {
    if (n !== null && (i.dependencies = n.dependencies), Gr |= i.lanes, (c & i.childLanes) === 0) return null;
    if (n !== null && i.child !== n.child) throw Error(r(153));
    if (i.child !== null) {
      for (n = i.child, c = xr(n, n.pendingProps), i.child = c, c.return = i; n.sibling !== null; ) n = n.sibling, c = c.sibling = xr(n, n.pendingProps), c.return = i;
      c.sibling = null;
    }
    return i.child;
  }
  function zI(n, i, c) {
    switch (i.tag) {
      case 3:
        Vw(i), Oo();
        break;
      case 5:
        aw(i);
        break;
      case 1:
        St(i.type) && ka(i);
        break;
      case 4:
        Uc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var g = i.type._context, v = i.memoizedProps.value;
        De(Ia, g._currentValue), g._currentValue = v;
        break;
      case 13:
        if (g = i.memoizedState, g !== null)
          return g.dehydrated !== null ? (De(Ue, Ue.current & 1), i.flags |= 128, null) : (c & i.child.childLanes) !== 0 ? Ww(n, i, c) : (De(Ue, Ue.current & 1), n = Vn(n, i, c), n !== null ? n.sibling : null);
        De(Ue, Ue.current & 1);
        break;
      case 19:
        if (g = (c & i.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (g) return Gw(n, i, c);
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), De(Ue, Ue.current), g) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, Fw(n, i, c);
    }
    return Vn(n, i, c);
  }
  var Yw, gf, Kw, Xw;
  Yw = function(n, i) {
    for (var c = i.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c, c = c.child;
        continue;
      }
      if (c === i) break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === i) return;
        c = c.return;
      }
      c.sibling.return = c.return, c = c.sibling;
    }
  }, gf = function() {
  }, Kw = function(n, i, c, g) {
    var v = n.memoizedProps;
    if (v !== g) {
      n = i.stateNode, Wr(Sn.current);
      var b = null;
      switch (c) {
        case "input":
          v = be(n, v), g = be(n, g), b = [];
          break;
        case "select":
          v = Q({}, v, { value: void 0 }), g = Q({}, g, { value: void 0 }), b = [];
          break;
        case "textarea":
          v = st(n, v), g = st(n, g), b = [];
          break;
        default:
          typeof v.onClick != "function" && typeof g.onClick == "function" && (n.onclick = Sa);
      }
      xi(c, g);
      var P;
      c = null;
      for (oe in v) if (!g.hasOwnProperty(oe) && v.hasOwnProperty(oe) && v[oe] != null) if (oe === "style") {
        var F = v[oe];
        for (P in F) F.hasOwnProperty(P) && (c || (c = {}), c[P] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (s.hasOwnProperty(oe) ? b || (b = []) : (b = b || []).push(oe, null));
      for (oe in g) {
        var G = g[oe];
        if (F = v != null ? v[oe] : void 0, g.hasOwnProperty(oe) && G !== F && (G != null || F != null)) if (oe === "style") if (F) {
          for (P in F) !F.hasOwnProperty(P) || G && G.hasOwnProperty(P) || (c || (c = {}), c[P] = "");
          for (P in G) G.hasOwnProperty(P) && F[P] !== G[P] && (c || (c = {}), c[P] = G[P]);
        } else c || (b || (b = []), b.push(
          oe,
          c
        )), c = G;
        else oe === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, F = F ? F.__html : void 0, G != null && F !== G && (b = b || []).push(oe, G)) : oe === "children" ? typeof G != "string" && typeof G != "number" || (b = b || []).push(oe, "" + G) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (s.hasOwnProperty(oe) ? (G != null && oe === "onScroll" && qe("scroll", n), b || F === G || (b = [])) : (b = b || []).push(oe, G));
      }
      c && (b = b || []).push("style", c);
      var oe = b;
      (i.updateQueue = oe) && (i.flags |= 4);
    }
  }, Xw = function(n, i, c, g) {
    c !== g && (i.flags |= 4);
  };
  function rs(n, i) {
    if (!ze) switch (n.tailMode) {
      case "hidden":
        i = n.tail;
        for (var c = null; i !== null; ) i.alternate !== null && (c = i), i = i.sibling;
        c === null ? n.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = n.tail;
        for (var g = null; c !== null; ) c.alternate !== null && (g = c), c = c.sibling;
        g === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : g.sibling = null;
    }
  }
  function gt(n) {
    var i = n.alternate !== null && n.alternate.child === n.child, c = 0, g = 0;
    if (i) for (var v = n.child; v !== null; ) c |= v.lanes | v.childLanes, g |= v.subtreeFlags & 14680064, g |= v.flags & 14680064, v.return = n, v = v.sibling;
    else for (v = n.child; v !== null; ) c |= v.lanes | v.childLanes, g |= v.subtreeFlags, g |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= g, n.childLanes = c, i;
  }
  function FI(n, i, c) {
    var g = i.pendingProps;
    switch (Dc(i), i.tag) {
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
        return gt(i), null;
      case 1:
        return St(i.type) && Ca(), gt(i), null;
      case 3:
        return g = i.stateNode, jo(), je(bt), je(ht), Kc(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (n === null || n.child === null) && (Aa(i) ? i.flags |= 4 : n === null || n.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rn !== null && (kf(rn), rn = null))), gf(n, i), gt(i), null;
      case 5:
        Gc(i);
        var v = Wr(Zi.current);
        if (c = i.type, n !== null && i.stateNode != null) Kw(n, i, c, g, v), n.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!g) {
            if (i.stateNode === null) throw Error(r(166));
            return gt(i), null;
          }
          if (n = Wr(Sn.current), Aa(i)) {
            g = i.stateNode, c = i.type;
            var b = i.memoizedProps;
            switch (g[bn] = i, g[Gi] = b, n = (i.mode & 1) !== 0, c) {
              case "dialog":
                qe("cancel", g), qe("close", g);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", g);
                break;
              case "video":
              case "audio":
                for (v = 0; v < Hi.length; v++) qe(Hi[v], g);
                break;
              case "source":
                qe("error", g);
                break;
              case "img":
              case "image":
              case "link":
                qe(
                  "error",
                  g
                ), qe("load", g);
                break;
              case "details":
                qe("toggle", g);
                break;
              case "input":
                me(g, b), qe("invalid", g);
                break;
              case "select":
                g._wrapperState = { wasMultiple: !!b.multiple }, qe("invalid", g);
                break;
              case "textarea":
                He(g, b), qe("invalid", g);
            }
            xi(c, b), v = null;
            for (var P in b) if (b.hasOwnProperty(P)) {
              var F = b[P];
              P === "children" ? typeof F == "string" ? g.textContent !== F && (b.suppressHydrationWarning !== !0 && ba(g.textContent, F, n), v = ["children", F]) : typeof F == "number" && g.textContent !== "" + F && (b.suppressHydrationWarning !== !0 && ba(
                g.textContent,
                F,
                n
              ), v = ["children", "" + F]) : s.hasOwnProperty(P) && F != null && P === "onScroll" && qe("scroll", g);
            }
            switch (c) {
              case "input":
                ce(g), Qe(g, b, !0);
                break;
              case "textarea":
                ce(g), $t(g);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof b.onClick == "function" && (g.onclick = Sa);
            }
            g = v, i.updateQueue = g, g !== null && (i.flags |= 4);
          } else {
            P = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tn(c)), n === "http://www.w3.org/1999/xhtml" ? c === "script" ? (n = P.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof g.is == "string" ? n = P.createElement(c, { is: g.is }) : (n = P.createElement(c), c === "select" && (P = n, g.multiple ? P.multiple = !0 : g.size && (P.size = g.size))) : n = P.createElementNS(n, c), n[bn] = i, n[Gi] = g, Yw(n, i, !1, !1), i.stateNode = n;
            e: {
              switch (P = _i(c, g), c) {
                case "dialog":
                  qe("cancel", n), qe("close", n), v = g;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qe("load", n), v = g;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < Hi.length; v++) qe(Hi[v], n);
                  v = g;
                  break;
                case "source":
                  qe("error", n), v = g;
                  break;
                case "img":
                case "image":
                case "link":
                  qe(
                    "error",
                    n
                  ), qe("load", n), v = g;
                  break;
                case "details":
                  qe("toggle", n), v = g;
                  break;
                case "input":
                  me(n, g), v = be(n, g), qe("invalid", n);
                  break;
                case "option":
                  v = g;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!g.multiple }, v = Q({}, g, { value: void 0 }), qe("invalid", n);
                  break;
                case "textarea":
                  He(n, g), v = st(n, g), qe("invalid", n);
                  break;
                default:
                  v = g;
              }
              xi(c, v), F = v;
              for (b in F) if (F.hasOwnProperty(b)) {
                var G = F[b];
                b === "style" ? Ht(n, G) : b === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, G != null && Or(n, G)) : b === "children" ? typeof G == "string" ? (c !== "textarea" || G !== "") && Vt(n, G) : typeof G == "number" && Vt(n, "" + G) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (s.hasOwnProperty(b) ? G != null && b === "onScroll" && qe("scroll", n) : G != null && _(n, b, G, P));
              }
              switch (c) {
                case "input":
                  ce(n), Qe(n, g, !1);
                  break;
                case "textarea":
                  ce(n), $t(n);
                  break;
                case "option":
                  g.value != null && n.setAttribute("value", "" + te(g.value));
                  break;
                case "select":
                  n.multiple = !!g.multiple, b = g.value, b != null ? dt(n, !!g.multiple, b, !1) : g.defaultValue != null && dt(
                    n,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = Sa);
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
            g && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
        }
        return gt(i), null;
      case 6:
        if (n && i.stateNode != null) Xw(n, i, n.memoizedProps, g);
        else {
          if (typeof g != "string" && i.stateNode === null) throw Error(r(166));
          if (c = Wr(Zi.current), Wr(Sn.current), Aa(i)) {
            if (g = i.stateNode, c = i.memoizedProps, g[bn] = i, (b = g.nodeValue !== c) && (n = Mt, n !== null)) switch (n.tag) {
              case 3:
                ba(g.nodeValue, c, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && ba(g.nodeValue, c, (n.mode & 1) !== 0);
            }
            b && (i.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[bn] = i, i.stateNode = g;
        }
        return gt(i), null;
      case 13:
        if (je(Ue), g = i.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ze && Ot !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) J0(), Oo(), i.flags |= 98560, b = !1;
          else if (b = Aa(i), g !== null && g.dehydrated !== null) {
            if (n === null) {
              if (!b) throw Error(r(318));
              if (b = i.memoizedState, b = b !== null ? b.dehydrated : null, !b) throw Error(r(317));
              b[bn] = i;
            } else Oo(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            gt(i), b = !1;
          } else rn !== null && (kf(rn), rn = null), b = !0;
          if (!b) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = c, i) : (g = g !== null, g !== (n !== null && n.memoizedState !== null) && g && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (n === null || (Ue.current & 1) !== 0 ? ot === 0 && (ot = 3) : Pf())), i.updateQueue !== null && (i.flags |= 4), gt(i), null);
      case 4:
        return jo(), gf(n, i), n === null && Wi(i.stateNode.containerInfo), gt(i), null;
      case 10:
        return Bc(i.type._context), gt(i), null;
      case 17:
        return St(i.type) && Ca(), gt(i), null;
      case 19:
        if (je(Ue), b = i.memoizedState, b === null) return gt(i), null;
        if (g = (i.flags & 128) !== 0, P = b.rendering, P === null) if (g) rs(b, !1);
        else {
          if (ot !== 0 || n !== null && (n.flags & 128) !== 0) for (n = i.child; n !== null; ) {
            if (P = Da(n), P !== null) {
              for (i.flags |= 128, rs(b, !1), g = P.updateQueue, g !== null && (i.updateQueue = g, i.flags |= 4), i.subtreeFlags = 0, g = c, c = i.child; c !== null; ) b = c, n = g, b.flags &= 14680066, P = b.alternate, P === null ? (b.childLanes = 0, b.lanes = n, b.child = null, b.subtreeFlags = 0, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = P.childLanes, b.lanes = P.lanes, b.child = P.child, b.subtreeFlags = 0, b.deletions = null, b.memoizedProps = P.memoizedProps, b.memoizedState = P.memoizedState, b.updateQueue = P.updateQueue, b.type = P.type, n = P.dependencies, b.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), c = c.sibling;
              return De(Ue, Ue.current & 1 | 2), i.child;
            }
            n = n.sibling;
          }
          b.tail !== null && We() > Bo && (i.flags |= 128, g = !0, rs(b, !1), i.lanes = 4194304);
        }
        else {
          if (!g) if (n = Da(P), n !== null) {
            if (i.flags |= 128, g = !0, c = n.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), rs(b, !0), b.tail === null && b.tailMode === "hidden" && !P.alternate && !ze) return gt(i), null;
          } else 2 * We() - b.renderingStartTime > Bo && c !== 1073741824 && (i.flags |= 128, g = !0, rs(b, !1), i.lanes = 4194304);
          b.isBackwards ? (P.sibling = i.child, i.child = P) : (c = b.last, c !== null ? c.sibling = P : i.child = P, b.last = P);
        }
        return b.tail !== null ? (i = b.tail, b.rendering = i, b.tail = i.sibling, b.renderingStartTime = We(), i.sibling = null, c = Ue.current, De(Ue, g ? c & 1 | 2 : c & 1), i) : (gt(i), null);
      case 22:
      case 23:
        return Rf(), g = i.memoizedState !== null, n !== null && n.memoizedState !== null !== g && (i.flags |= 8192), g && (i.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (gt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : gt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function $I(n, i) {
    switch (Dc(i), i.tag) {
      case 1:
        return St(i.type) && Ca(), n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 3:
        return jo(), je(bt), je(ht), Kc(), n = i.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (i.flags = n & -65537 | 128, i) : null;
      case 5:
        return Gc(i), null;
      case 13:
        if (je(Ue), n = i.memoizedState, n !== null && n.dehydrated !== null) {
          if (i.alternate === null) throw Error(r(340));
          Oo();
        }
        return n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 19:
        return je(Ue), null;
      case 4:
        return jo(), null;
      case 10:
        return Bc(i.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wa = !1, mt = !1, BI = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Fo(n, i) {
    var c = n.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ke(n, i, g);
    }
    else c.current = null;
  }
  function mf(n, i, c) {
    try {
      c();
    } catch (g) {
      Ke(n, i, g);
    }
  }
  var Qw = !1;
  function VI(n, i) {
    if (Nc = fa, n = P0(), wc(n)) {
      if ("selectionStart" in n) var c = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        c = (c = n.ownerDocument) && c.defaultView || window;
        var g = c.getSelection && c.getSelection();
        if (g && g.rangeCount !== 0) {
          c = g.anchorNode;
          var v = g.anchorOffset, b = g.focusNode;
          g = g.focusOffset;
          try {
            c.nodeType, b.nodeType;
          } catch {
            c = null;
            break e;
          }
          var P = 0, F = -1, G = -1, oe = 0, ue = 0, fe = n, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || v !== 0 && fe.nodeType !== 3 || (F = P + v), fe !== b || g !== 0 && fe.nodeType !== 3 || (G = P + g), fe.nodeType === 3 && (P += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === n) break t;
              if (le === c && ++oe === v && (F = P), le === b && ++ue === g && (G = P), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = F === -1 || G === -1 ? null : { start: F, end: G };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Rc = { focusedElem: n, selectionRange: c }, fa = !1, ve = i; ve !== null; ) if (i = ve, n = i.child, (i.subtreeFlags & 1028) !== 0 && n !== null) n.return = i, ve = n;
    else for (; ve !== null; ) {
      i = ve;
      try {
        var we = i.alternate;
        if ((i.flags & 1024) !== 0) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (we !== null) {
              var Se = we.memoizedProps, Ze = we.memoizedState, ne = i.stateNode, J = ne.getSnapshotBeforeUpdate(i.elementType === i.type ? Se : on(i.type, Se), Ze);
              ne.__reactInternalSnapshotBeforeUpdate = J;
            }
            break;
          case 3:
            var re = i.stateNode.containerInfo;
            re.nodeType === 1 ? re.textContent = "" : re.nodeType === 9 && re.documentElement && re.removeChild(re.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (he) {
        Ke(i, i.return, he);
      }
      if (n = i.sibling, n !== null) {
        n.return = i.return, ve = n;
        break;
      }
      ve = i.return;
    }
    return we = Qw, Qw = !1, we;
  }
  function os(n, i, c) {
    var g = i.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var v = g = g.next;
      do {
        if ((v.tag & n) === n) {
          var b = v.destroy;
          v.destroy = void 0, b !== void 0 && mf(i, c, b);
        }
        v = v.next;
      } while (v !== g);
    }
  }
  function Ua(n, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var c = i = i.next;
      do {
        if ((c.tag & n) === n) {
          var g = c.create;
          c.destroy = g();
        }
        c = c.next;
      } while (c !== i);
    }
  }
  function vf(n) {
    var i = n.ref;
    if (i !== null) {
      var c = n.stateNode;
      switch (n.tag) {
        case 5:
          n = c;
          break;
        default:
          n = c;
      }
      typeof i == "function" ? i(n) : i.current = n;
    }
  }
  function Zw(n) {
    var i = n.alternate;
    i !== null && (n.alternate = null, Zw(i)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (i = n.stateNode, i !== null && (delete i[bn], delete i[Gi], delete i[Ic], delete i[CI], delete i[kI])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Jw(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ex(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Jw(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function yf(n, i, c) {
    var g = n.tag;
    if (g === 5 || g === 6) n = n.stateNode, i ? c.nodeType === 8 ? c.parentNode.insertBefore(n, i) : c.insertBefore(n, i) : (c.nodeType === 8 ? (i = c.parentNode, i.insertBefore(n, c)) : (i = c, i.appendChild(n)), c = c._reactRootContainer, c != null || i.onclick !== null || (i.onclick = Sa));
    else if (g !== 4 && (n = n.child, n !== null)) for (yf(n, i, c), n = n.sibling; n !== null; ) yf(n, i, c), n = n.sibling;
  }
  function wf(n, i, c) {
    var g = n.tag;
    if (g === 5 || g === 6) n = n.stateNode, i ? c.insertBefore(n, i) : c.appendChild(n);
    else if (g !== 4 && (n = n.child, n !== null)) for (wf(n, i, c), n = n.sibling; n !== null; ) wf(n, i, c), n = n.sibling;
  }
  var ct = null, sn = !1;
  function gr(n, i, c) {
    for (c = c.child; c !== null; ) tx(n, i, c), c = c.sibling;
  }
  function tx(n, i, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(jr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        mt || Fo(c, i);
      case 6:
        var g = ct, v = sn;
        ct = null, gr(n, i, c), ct = g, sn = v, ct !== null && (sn ? (n = ct, c = c.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(c) : n.removeChild(c)) : ct.removeChild(c.stateNode));
        break;
      case 18:
        ct !== null && (sn ? (n = ct, c = c.stateNode, n.nodeType === 8 ? Tc(n.parentNode, c) : n.nodeType === 1 && Tc(n, c), Di(n)) : Tc(ct, c.stateNode));
        break;
      case 4:
        g = ct, v = sn, ct = c.stateNode.containerInfo, sn = !0, gr(n, i, c), ct = g, sn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          v = g = g.next;
          do {
            var b = v, P = b.destroy;
            b = b.tag, P !== void 0 && ((b & 2) !== 0 || (b & 4) !== 0) && mf(c, i, P), v = v.next;
          } while (v !== g);
        }
        gr(n, i, c);
        break;
      case 1:
        if (!mt && (Fo(c, i), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
          g.props = c.memoizedProps, g.state = c.memoizedState, g.componentWillUnmount();
        } catch (F) {
          Ke(c, i, F);
        }
        gr(n, i, c);
        break;
      case 21:
        gr(n, i, c);
        break;
      case 22:
        c.mode & 1 ? (mt = (g = mt) || c.memoizedState !== null, gr(n, i, c), mt = g) : gr(n, i, c);
        break;
      default:
        gr(n, i, c);
    }
  }
  function nx(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var c = n.stateNode;
      c === null && (c = n.stateNode = new BI()), i.forEach(function(g) {
        var v = ZI.bind(null, n, g);
        c.has(g) || (c.add(g), g.then(v, v));
      });
    }
  }
  function an(n, i) {
    var c = i.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var v = c[g];
      try {
        var b = n, P = i, F = P;
        e: for (; F !== null; ) {
          switch (F.tag) {
            case 5:
              ct = F.stateNode, sn = !1;
              break e;
            case 3:
              ct = F.stateNode.containerInfo, sn = !0;
              break e;
            case 4:
              ct = F.stateNode.containerInfo, sn = !0;
              break e;
          }
          F = F.return;
        }
        if (ct === null) throw Error(r(160));
        tx(b, P, v), ct = null, sn = !1;
        var G = v.alternate;
        G !== null && (G.return = null), v.return = null;
      } catch (oe) {
        Ke(v, i, oe);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) rx(i, n), i = i.sibling;
  }
  function rx(n, i) {
    var c = n.alternate, g = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(i, n), Cn(n), g & 4) {
          try {
            os(3, n, n.return), Ua(3, n);
          } catch (Se) {
            Ke(n, n.return, Se);
          }
          try {
            os(5, n, n.return);
          } catch (Se) {
            Ke(n, n.return, Se);
          }
        }
        break;
      case 1:
        an(i, n), Cn(n), g & 512 && c !== null && Fo(c, c.return);
        break;
      case 5:
        if (an(i, n), Cn(n), g & 512 && c !== null && Fo(c, c.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Vt(v, "");
          } catch (Se) {
            Ke(n, n.return, Se);
          }
        }
        if (g & 4 && (v = n.stateNode, v != null)) {
          var b = n.memoizedProps, P = c !== null ? c.memoizedProps : b, F = n.type, G = n.updateQueue;
          if (n.updateQueue = null, G !== null) try {
            F === "input" && b.type === "radio" && b.name != null && Re(v, b), _i(F, P);
            var oe = _i(F, b);
            for (P = 0; P < G.length; P += 2) {
              var ue = G[P], fe = G[P + 1];
              ue === "style" ? Ht(v, fe) : ue === "dangerouslySetInnerHTML" ? Or(v, fe) : ue === "children" ? Vt(v, fe) : _(v, ue, fe, oe);
            }
            switch (F) {
              case "input":
                Ee(v, b);
                break;
              case "textarea":
                en(v, b);
                break;
              case "select":
                var le = v._wrapperState.wasMultiple;
                v._wrapperState.wasMultiple = !!b.multiple;
                var ge = b.value;
                ge != null ? dt(v, !!b.multiple, ge, !1) : le !== !!b.multiple && (b.defaultValue != null ? dt(
                  v,
                  !!b.multiple,
                  b.defaultValue,
                  !0
                ) : dt(v, !!b.multiple, b.multiple ? [] : "", !1));
            }
            v[Gi] = b;
          } catch (Se) {
            Ke(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (an(i, n), Cn(n), g & 4) {
          if (n.stateNode === null) throw Error(r(162));
          v = n.stateNode, b = n.memoizedProps;
          try {
            v.nodeValue = b;
          } catch (Se) {
            Ke(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (an(i, n), Cn(n), g & 4 && c !== null && c.memoizedState.isDehydrated) try {
          Di(i.containerInfo);
        } catch (Se) {
          Ke(n, n.return, Se);
        }
        break;
      case 4:
        an(i, n), Cn(n);
        break;
      case 13:
        an(i, n), Cn(n), v = n.child, v.flags & 8192 && (b = v.memoizedState !== null, v.stateNode.isHidden = b, !b || v.alternate !== null && v.alternate.memoizedState !== null || (bf = We())), g & 4 && nx(n);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, n.mode & 1 ? (mt = (oe = mt) || ue, an(i, n), mt = oe) : an(i, n), Cn(n), g & 8192) {
          if (oe = n.memoizedState !== null, (n.stateNode.isHidden = oe) && !ue && (n.mode & 1) !== 0) for (ve = n, ue = n.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  os(4, le, le.return);
                  break;
                case 1:
                  Fo(le, le.return);
                  var we = le.stateNode;
                  if (typeof we.componentWillUnmount == "function") {
                    g = le, c = le.return;
                    try {
                      i = g, we.props = i.memoizedProps, we.state = i.memoizedState, we.componentWillUnmount();
                    } catch (Se) {
                      Ke(g, c, Se);
                    }
                  }
                  break;
                case 5:
                  Fo(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    sx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : sx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  v = fe.stateNode, oe ? (b = v.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none") : (F = fe.stateNode, G = fe.memoizedProps.style, P = G != null && G.hasOwnProperty("display") ? G.display : null, F.style.display = At("display", P));
                } catch (Se) {
                  Ke(n, n.return, Se);
                }
              }
            } else if (fe.tag === 6) {
              if (ue === null) try {
                fe.stateNode.nodeValue = oe ? "" : fe.memoizedProps;
              } catch (Se) {
                Ke(n, n.return, Se);
              }
            } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
              fe.child.return = fe, fe = fe.child;
              continue;
            }
            if (fe === n) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === n) break e;
              ue === fe && (ue = null), fe = fe.return;
            }
            ue === fe && (ue = null), fe.sibling.return = fe.return, fe = fe.sibling;
          }
        }
        break;
      case 19:
        an(i, n), Cn(n), g & 4 && nx(n);
        break;
      case 21:
        break;
      default:
        an(
          i,
          n
        ), Cn(n);
    }
  }
  function Cn(n) {
    var i = n.flags;
    if (i & 2) {
      try {
        e: {
          for (var c = n.return; c !== null; ) {
            if (Jw(c)) {
              var g = c;
              break e;
            }
            c = c.return;
          }
          throw Error(r(160));
        }
        switch (g.tag) {
          case 5:
            var v = g.stateNode;
            g.flags & 32 && (Vt(v, ""), g.flags &= -33);
            var b = ex(n);
            wf(n, b, v);
            break;
          case 3:
          case 4:
            var P = g.stateNode.containerInfo, F = ex(n);
            yf(n, F, P);
            break;
          default:
            throw Error(r(161));
        }
      } catch (G) {
        Ke(n, n.return, G);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function HI(n, i, c) {
    ve = n, ox(n);
  }
  function ox(n, i, c) {
    for (var g = (n.mode & 1) !== 0; ve !== null; ) {
      var v = ve, b = v.child;
      if (v.tag === 22 && g) {
        var P = v.memoizedState !== null || Wa;
        if (!P) {
          var F = v.alternate, G = F !== null && F.memoizedState !== null || mt;
          F = Wa;
          var oe = mt;
          if (Wa = P, (mt = G) && !oe) for (ve = v; ve !== null; ) P = ve, G = P.child, P.tag === 22 && P.memoizedState !== null ? ax(v) : G !== null ? (G.return = P, ve = G) : ax(v);
          for (; b !== null; ) ve = b, ox(b), b = b.sibling;
          ve = v, Wa = F, mt = oe;
        }
        ix(n);
      } else (v.subtreeFlags & 8772) !== 0 && b !== null ? (b.return = v, ve = b) : ix(n);
    }
  }
  function ix(n) {
    for (; ve !== null; ) {
      var i = ve;
      if ((i.flags & 8772) !== 0) {
        var c = i.alternate;
        try {
          if ((i.flags & 8772) !== 0) switch (i.tag) {
            case 0:
            case 11:
            case 15:
              mt || Ua(5, i);
              break;
            case 1:
              var g = i.stateNode;
              if (i.flags & 4 && !mt) if (c === null) g.componentDidMount();
              else {
                var v = i.elementType === i.type ? c.memoizedProps : on(i.type, c.memoizedProps);
                g.componentDidUpdate(v, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var b = i.updateQueue;
              b !== null && sw(i, b, g);
              break;
            case 3:
              var P = i.updateQueue;
              if (P !== null) {
                if (c = null, i.child !== null) switch (i.child.tag) {
                  case 5:
                    c = i.child.stateNode;
                    break;
                  case 1:
                    c = i.child.stateNode;
                }
                sw(i, P, c);
              }
              break;
            case 5:
              var F = i.stateNode;
              if (c === null && i.flags & 4) {
                c = F;
                var G = i.memoizedProps;
                switch (i.type) {
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
              if (i.memoizedState === null) {
                var oe = i.alternate;
                if (oe !== null) {
                  var ue = oe.memoizedState;
                  if (ue !== null) {
                    var fe = ue.dehydrated;
                    fe !== null && Di(fe);
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
              throw Error(r(163));
          }
          mt || i.flags & 512 && vf(i);
        } catch (le) {
          Ke(i, i.return, le);
        }
      }
      if (i === n) {
        ve = null;
        break;
      }
      if (c = i.sibling, c !== null) {
        c.return = i.return, ve = c;
        break;
      }
      ve = i.return;
    }
  }
  function sx(n) {
    for (; ve !== null; ) {
      var i = ve;
      if (i === n) {
        ve = null;
        break;
      }
      var c = i.sibling;
      if (c !== null) {
        c.return = i.return, ve = c;
        break;
      }
      ve = i.return;
    }
  }
  function ax(n) {
    for (; ve !== null; ) {
      var i = ve;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var c = i.return;
            try {
              Ua(4, i);
            } catch (G) {
              Ke(i, c, G);
            }
            break;
          case 1:
            var g = i.stateNode;
            if (typeof g.componentDidMount == "function") {
              var v = i.return;
              try {
                g.componentDidMount();
              } catch (G) {
                Ke(i, v, G);
              }
            }
            var b = i.return;
            try {
              vf(i);
            } catch (G) {
              Ke(i, b, G);
            }
            break;
          case 5:
            var P = i.return;
            try {
              vf(i);
            } catch (G) {
              Ke(i, P, G);
            }
        }
      } catch (G) {
        Ke(i, i.return, G);
      }
      if (i === n) {
        ve = null;
        break;
      }
      var F = i.sibling;
      if (F !== null) {
        F.return = i.return, ve = F;
        break;
      }
      ve = i.return;
    }
  }
  var WI = Math.ceil, Ga = k.ReactCurrentDispatcher, xf = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Me = 0, lt = null, Je = null, ft = 0, Lt = 0, $o = cr(0), ot = 0, is = null, Gr = 0, Ya = 0, _f = 0, ss = null, Ct = null, bf = 0, Bo = 1 / 0, Hn = null, Ka = !1, Sf = null, mr = null, Xa = !1, vr = null, Qa = 0, as = 0, Ef = null, Za = -1, Ja = 0;
  function xt() {
    return (Me & 6) !== 0 ? We() : Za !== -1 ? Za : Za = We();
  }
  function yr(n) {
    return (n.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && ft !== 0 ? ft & -ft : RI.transition !== null ? (Ja === 0 && (Ja = la()), Ja) : (n = Le, n !== 0 || (n = window.event, n = n === void 0 ? 16 : u0(n.type)), n);
  }
  function ln(n, i, c, g) {
    if (50 < as) throw as = 0, Ef = null, Error(r(185));
    nr(n, c, g), ((Me & 2) === 0 || n !== lt) && (n === lt && ((Me & 2) === 0 && (Ya |= c), ot === 4 && wr(n, ft)), kt(n, g), c === 1 && Me === 0 && (i.mode & 1) === 0 && (Bo = We() + 500, Na && dr()));
  }
  function kt(n, i) {
    var c = n.callbackNode;
    oc(n, i);
    var g = _o(n, n === lt ? ft : 0);
    if (g === 0) c !== null && oa(c), n.callbackNode = null, n.callbackPriority = 0;
    else if (i = g & -g, n.callbackPriority !== i) {
      if (c != null && oa(c), i === 1) n.tag === 0 ? NI(ux.bind(null, n)) : Y0(ux.bind(null, n)), SI(function() {
        (Me & 6) === 0 && dr();
      }), c = null;
      else {
        switch (t0(g)) {
          case 1:
            c = Ai;
            break;
          case 4:
            c = sa;
            break;
          case 16:
            c = yo;
            break;
          case 536870912:
            c = aa;
            break;
          default:
            c = yo;
        }
        c = vx(c, lx.bind(null, n));
      }
      n.callbackPriority = i, n.callbackNode = c;
    }
  }
  function lx(n, i) {
    if (Za = -1, Ja = 0, (Me & 6) !== 0) throw Error(r(327));
    var c = n.callbackNode;
    if (Vo() && n.callbackNode !== c) return null;
    var g = _o(n, n === lt ? ft : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & n.expiredLanes) !== 0 || i) i = el(n, g);
    else {
      i = g;
      var v = Me;
      Me |= 2;
      var b = fx();
      (lt !== n || ft !== i) && (Hn = null, Bo = We() + 500, Kr(n, i));
      do
        try {
          YI();
          break;
        } catch (F) {
          cx(n, F);
        }
      while (!0);
      $c(), Ga.current = b, Me = v, Je !== null ? i = 0 : (lt = null, ft = 0, i = ot);
    }
    if (i !== 0) {
      if (i === 2 && (v = zr(n), v !== 0 && (g = v, i = Cf(n, v))), i === 1) throw c = is, Kr(n, 0), wr(n, g), kt(n, We()), c;
      if (i === 6) wr(n, g);
      else {
        if (v = n.current.alternate, (g & 30) === 0 && !UI(v) && (i = el(n, g), i === 2 && (b = zr(n), b !== 0 && (g = b, i = Cf(n, b))), i === 1)) throw c = is, Kr(n, 0), wr(n, g), kt(n, We()), c;
        switch (n.finishedWork = v, n.finishedLanes = g, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Xr(n, Ct, Hn);
            break;
          case 3:
            if (wr(n, g), (g & 130023424) === g && (i = bf + 500 - We(), 10 < i)) {
              if (_o(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & g) !== g) {
                xt(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Ac(Xr.bind(null, n, Ct, Hn), i);
              break;
            }
            Xr(n, Ct, Hn);
            break;
          case 4:
            if (wr(n, g), (g & 4194240) === g) break;
            for (i = n.eventTimes, v = -1; 0 < g; ) {
              var P = 31 - Tt(g);
              b = 1 << P, P = i[P], P > v && (v = P), g &= ~b;
            }
            if (g = v, g = We() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * WI(g / 1960)) - g, 10 < g) {
              n.timeoutHandle = Ac(Xr.bind(null, n, Ct, Hn), g);
              break;
            }
            Xr(n, Ct, Hn);
            break;
          case 5:
            Xr(n, Ct, Hn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return kt(n, We()), n.callbackNode === c ? lx.bind(null, n) : null;
  }
  function Cf(n, i) {
    var c = ss;
    return n.current.memoizedState.isDehydrated && (Kr(n, i).flags |= 256), n = el(n, i), n !== 2 && (i = Ct, Ct = c, i !== null && kf(i)), n;
  }
  function kf(n) {
    Ct === null ? Ct = n : Ct.push.apply(Ct, n);
  }
  function UI(n) {
    for (var i = n; ; ) {
      if (i.flags & 16384) {
        var c = i.updateQueue;
        if (c !== null && (c = c.stores, c !== null)) for (var g = 0; g < c.length; g++) {
          var v = c[g], b = v.getSnapshot;
          v = v.value;
          try {
            if (!nn(b(), v)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (c = i.child, i.subtreeFlags & 16384 && c !== null) c.return = i, i = c;
      else {
        if (i === n) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === n) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function wr(n, i) {
    for (i &= ~_f, i &= ~Ya, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var c = 31 - Tt(i), g = 1 << c;
      n[c] = -1, i &= ~g;
    }
  }
  function ux(n) {
    if ((Me & 6) !== 0) throw Error(r(327));
    Vo();
    var i = _o(n, 0);
    if ((i & 1) === 0) return kt(n, We()), null;
    var c = el(n, i);
    if (n.tag !== 0 && c === 2) {
      var g = zr(n);
      g !== 0 && (i = g, c = Cf(n, g));
    }
    if (c === 1) throw c = is, Kr(n, 0), wr(n, i), kt(n, We()), c;
    if (c === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, Xr(n, Ct, Hn), kt(n, We()), null;
  }
  function Nf(n, i) {
    var c = Me;
    Me |= 1;
    try {
      return n(i);
    } finally {
      Me = c, Me === 0 && (Bo = We() + 500, Na && dr());
    }
  }
  function Yr(n) {
    vr !== null && vr.tag === 0 && (Me & 6) === 0 && Vo();
    var i = Me;
    Me |= 1;
    var c = Xt.transition, g = Le;
    try {
      if (Xt.transition = null, Le = 1, n) return n();
    } finally {
      Le = g, Xt.transition = c, Me = i, (Me & 6) === 0 && dr();
    }
  }
  function Rf() {
    Lt = $o.current, je($o);
  }
  function Kr(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var c = n.timeoutHandle;
    if (c !== -1 && (n.timeoutHandle = -1, bI(c)), Je !== null) for (c = Je.return; c !== null; ) {
      var g = c;
      switch (Dc(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && Ca();
          break;
        case 3:
          jo(), je(bt), je(ht), Kc();
          break;
        case 5:
          Gc(g);
          break;
        case 4:
          jo();
          break;
        case 13:
          je(Ue);
          break;
        case 19:
          je(Ue);
          break;
        case 10:
          Bc(g.type._context);
          break;
        case 22:
        case 23:
          Rf();
      }
      c = c.return;
    }
    if (lt = n, Je = n = xr(n.current, null), ft = Lt = i, ot = 0, is = null, _f = Ya = Gr = 0, Ct = ss = null, Hr !== null) {
      for (i = 0; i < Hr.length; i++) if (c = Hr[i], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var v = g.next, b = c.pending;
        if (b !== null) {
          var P = b.next;
          b.next = v, g.next = P;
        }
        c.pending = g;
      }
      Hr = null;
    }
    return n;
  }
  function cx(n, i) {
    do {
      var c = Je;
      try {
        if ($c(), qa.current = $a, ja) {
          for (var g = Ge.memoizedState; g !== null; ) {
            var v = g.queue;
            v !== null && (v.pending = null), g = g.next;
          }
          ja = !1;
        }
        if (Ur = 0, at = rt = Ge = null, Ji = !1, es = 0, xf.current = null, c === null || c.return === null) {
          ot = 1, is = i, Je = null;
          break;
        }
        e: {
          var b = n, P = c.return, F = c, G = i;
          if (i = ft, F.flags |= 32768, G !== null && typeof G == "object" && typeof G.then == "function") {
            var oe = G, ue = F, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = Lw(P);
            if (ge !== null) {
              ge.flags &= -257, Dw(ge, P, F, b, i), ge.mode & 1 && Ow(b, oe, i), i = ge, G = oe;
              var we = i.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(G), i.updateQueue = Se;
              } else we.add(G);
              break e;
            } else {
              if ((i & 1) === 0) {
                Ow(b, oe, i), Pf();
                break e;
              }
              G = Error(r(426));
            }
          } else if (ze && F.mode & 1) {
            var Ze = Lw(P);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), Dw(Ze, P, F, b, i), zc(zo(G, F));
              break e;
            }
          }
          b = G = zo(G, F), ot !== 4 && (ot = 2), ss === null ? ss = [b] : ss.push(b), b = P;
          do {
            switch (b.tag) {
              case 3:
                b.flags |= 65536, i &= -i, b.lanes |= i;
                var ne = Iw(b, G, i);
                iw(b, ne);
                break e;
              case 1:
                F = G;
                var J = b.type, re = b.stateNode;
                if ((b.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (mr === null || !mr.has(re)))) {
                  b.flags |= 65536, i &= -i, b.lanes |= i;
                  var he = Mw(b, F, i);
                  iw(b, he);
                  break e;
                }
            }
            b = b.return;
          } while (b !== null);
        }
        hx(c);
      } catch (Ce) {
        i = Ce, Je === c && c !== null && (Je = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fx() {
    var n = Ga.current;
    return Ga.current = $a, n === null ? $a : n;
  }
  function Pf() {
    (ot === 0 || ot === 3 || ot === 2) && (ot = 4), lt === null || (Gr & 268435455) === 0 && (Ya & 268435455) === 0 || wr(lt, ft);
  }
  function el(n, i) {
    var c = Me;
    Me |= 2;
    var g = fx();
    (lt !== n || ft !== i) && (Hn = null, Kr(n, i));
    do
      try {
        GI();
        break;
      } catch (v) {
        cx(n, v);
      }
    while (!0);
    if ($c(), Me = c, Ga.current = g, Je !== null) throw Error(r(261));
    return lt = null, ft = 0, ot;
  }
  function GI() {
    for (; Je !== null; ) dx(Je);
  }
  function YI() {
    for (; Je !== null && !Xu(); ) dx(Je);
  }
  function dx(n) {
    var i = mx(n.alternate, n, Lt);
    n.memoizedProps = n.pendingProps, i === null ? hx(n) : Je = i, xf.current = null;
  }
  function hx(n) {
    var i = n;
    do {
      var c = i.alternate;
      if (n = i.return, (i.flags & 32768) === 0) {
        if (c = FI(c, i, Lt), c !== null) {
          Je = c;
          return;
        }
      } else {
        if (c = $I(c, i), c !== null) {
          c.flags &= 32767, Je = c;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ot = 6, Je = null;
          return;
        }
      }
      if (i = i.sibling, i !== null) {
        Je = i;
        return;
      }
      Je = i = n;
    } while (i !== null);
    ot === 0 && (ot = 5);
  }
  function Xr(n, i, c) {
    var g = Le, v = Xt.transition;
    try {
      Xt.transition = null, Le = 1, KI(n, i, c, g);
    } finally {
      Xt.transition = v, Le = g;
    }
    return null;
  }
  function KI(n, i, c, g) {
    do
      Vo();
    while (vr !== null);
    if ((Me & 6) !== 0) throw Error(r(327));
    c = n.finishedWork;
    var v = n.finishedLanes;
    if (c === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, c === n.current) throw Error(r(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var b = c.lanes | c.childLanes;
    if (PT(n, b), n === lt && (Je = lt = null, ft = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Xa || (Xa = !0, vx(yo, function() {
      return Vo(), null;
    })), b = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || b) {
      b = Xt.transition, Xt.transition = null;
      var P = Le;
      Le = 1;
      var F = Me;
      Me |= 4, xf.current = null, VI(n, c), rx(c, n), gI(Rc), fa = !!Nc, Rc = Nc = null, n.current = c, HI(c), ia(), Me = F, Le = P, Xt.transition = b;
    } else n.current = c;
    if (Xa && (Xa = !1, vr = n, Qa = v), b = n.pendingLanes, b === 0 && (mr = null), Ju(c.stateNode), kt(n, We()), i !== null) for (g = n.onRecoverableError, c = 0; c < i.length; c++) v = i[c], g(v.value, { componentStack: v.stack, digest: v.digest });
    if (Ka) throw Ka = !1, n = Sf, Sf = null, n;
    return (Qa & 1) !== 0 && n.tag !== 0 && Vo(), b = n.pendingLanes, (b & 1) !== 0 ? n === Ef ? as++ : (as = 0, Ef = n) : as = 0, dr(), null;
  }
  function Vo() {
    if (vr !== null) {
      var n = t0(Qa), i = Xt.transition, c = Le;
      try {
        if (Xt.transition = null, Le = 16 > n ? 16 : n, vr === null) var g = !1;
        else {
          if (n = vr, vr = null, Qa = 0, (Me & 6) !== 0) throw Error(r(331));
          var v = Me;
          for (Me |= 4, ve = n.current; ve !== null; ) {
            var b = ve, P = b.child;
            if ((ve.flags & 16) !== 0) {
              var F = b.deletions;
              if (F !== null) {
                for (var G = 0; G < F.length; G++) {
                  var oe = F[G];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(8, ue, b);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, ge = ue.return;
                      if (Zw(ue), ue === oe) {
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
                var we = b.alternate;
                if (we !== null) {
                  var Se = we.child;
                  if (Se !== null) {
                    we.child = null;
                    do {
                      var Ze = Se.sibling;
                      Se.sibling = null, Se = Ze;
                    } while (Se !== null);
                  }
                }
                ve = b;
              }
            }
            if ((b.subtreeFlags & 2064) !== 0 && P !== null) P.return = b, ve = P;
            else e: for (; ve !== null; ) {
              if (b = ve, (b.flags & 2048) !== 0) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  os(9, b, b.return);
              }
              var ne = b.sibling;
              if (ne !== null) {
                ne.return = b.return, ve = ne;
                break e;
              }
              ve = b.return;
            }
          }
          var J = n.current;
          for (ve = J; ve !== null; ) {
            P = ve;
            var re = P.child;
            if ((P.subtreeFlags & 2064) !== 0 && re !== null) re.return = P, ve = re;
            else e: for (P = J; ve !== null; ) {
              if (F = ve, (F.flags & 2048) !== 0) try {
                switch (F.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ua(9, F);
                }
              } catch (Ce) {
                Ke(F, F.return, Ce);
              }
              if (F === P) {
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
          if (Me = v, dr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot(jr, n);
          } catch {
          }
          g = !0;
        }
        return g;
      } finally {
        Le = c, Xt.transition = i;
      }
    }
    return !1;
  }
  function px(n, i, c) {
    i = zo(c, i), i = Iw(n, i, 1), n = pr(n, i, 1), i = xt(), n !== null && (nr(n, 1, i), kt(n, i));
  }
  function Ke(n, i, c) {
    if (n.tag === 3) px(n, n, c);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        px(i, n, c);
        break;
      } else if (i.tag === 1) {
        var g = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (mr === null || !mr.has(g))) {
          n = zo(c, n), n = Mw(i, n, 1), i = pr(i, n, 1), n = xt(), i !== null && (nr(i, 1, n), kt(i, n));
          break;
        }
      }
      i = i.return;
    }
  }
  function XI(n, i, c) {
    var g = n.pingCache;
    g !== null && g.delete(i), i = xt(), n.pingedLanes |= n.suspendedLanes & c, lt === n && (ft & c) === c && (ot === 4 || ot === 3 && (ft & 130023424) === ft && 500 > We() - bf ? Kr(n, 0) : _f |= c), kt(n, i);
  }
  function gx(n, i) {
    i === 0 && ((n.mode & 1) === 0 ? i = 1 : (i = xo, xo <<= 1, (xo & 130023424) === 0 && (xo = 4194304)));
    var c = xt();
    n = $n(n, i), n !== null && (nr(n, i, c), kt(n, c));
  }
  function QI(n) {
    var i = n.memoizedState, c = 0;
    i !== null && (c = i.retryLane), gx(n, c);
  }
  function ZI(n, i) {
    var c = 0;
    switch (n.tag) {
      case 13:
        var g = n.stateNode, v = n.memoizedState;
        v !== null && (c = v.retryLane);
        break;
      case 19:
        g = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    g !== null && g.delete(i), gx(n, c);
  }
  var mx;
  mx = function(n, i, c) {
    if (n !== null) if (n.memoizedProps !== i.pendingProps || bt.current) Et = !0;
    else {
      if ((n.lanes & c) === 0 && (i.flags & 128) === 0) return Et = !1, zI(n, i, c);
      Et = (n.flags & 131072) !== 0;
    }
    else Et = !1, ze && (i.flags & 1048576) !== 0 && K0(i, Pa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var g = i.type;
        Ha(n, i), n = i.pendingProps;
        var v = To(i, ht.current);
        qo(i, c), v = Zc(null, i, g, n, v, c);
        var b = Jc();
        return i.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, St(g) ? (b = !0, ka(i)) : b = !1, i.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Wc(i), v.updater = Ba, i.stateNode = v, v._reactInternals = i, sf(i, g, n, c), i = cf(null, i, g, !0, b, c)) : (i.tag = 0, ze && b && Lc(i), wt(null, i, v, c), i = i.child), i;
      case 16:
        g = i.elementType;
        e: {
          switch (Ha(n, i), n = i.pendingProps, v = g._init, g = v(g._payload), i.type = g, v = i.tag = e2(g), n = on(g, n), v) {
            case 0:
              i = uf(null, i, g, n, c);
              break e;
            case 1:
              i = Bw(null, i, g, n, c);
              break e;
            case 11:
              i = qw(null, i, g, n, c);
              break e;
            case 14:
              i = jw(null, i, g, on(g.type, n), c);
              break e;
          }
          throw Error(r(
            306,
            g,
            ""
          ));
        }
        return i;
      case 0:
        return g = i.type, v = i.pendingProps, v = i.elementType === g ? v : on(g, v), uf(n, i, g, v, c);
      case 1:
        return g = i.type, v = i.pendingProps, v = i.elementType === g ? v : on(g, v), Bw(n, i, g, v, c);
      case 3:
        e: {
          if (Vw(i), n === null) throw Error(r(387));
          g = i.pendingProps, b = i.memoizedState, v = b.element, ow(n, i), La(i, g, null, c);
          var P = i.memoizedState;
          if (g = P.element, b.isDehydrated) if (b = { element: g, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, i.updateQueue.baseState = b, i.memoizedState = b, i.flags & 256) {
            v = zo(Error(r(423)), i), i = Hw(n, i, g, c, v);
            break e;
          } else if (g !== v) {
            v = zo(Error(r(424)), i), i = Hw(n, i, g, c, v);
            break e;
          } else for (Ot = ur(i.stateNode.containerInfo.firstChild), Mt = i, ze = !0, rn = null, c = nw(i, null, g, c), i.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Oo(), g === v) {
              i = Vn(n, i, c);
              break e;
            }
            wt(n, i, g, c);
          }
          i = i.child;
        }
        return i;
      case 5:
        return aw(i), n === null && jc(i), g = i.type, v = i.pendingProps, b = n !== null ? n.memoizedProps : null, P = v.children, Pc(g, v) ? P = null : b !== null && Pc(g, b) && (i.flags |= 32), $w(n, i), wt(n, i, P, c), i.child;
      case 6:
        return n === null && jc(i), null;
      case 13:
        return Ww(n, i, c);
      case 4:
        return Uc(i, i.stateNode.containerInfo), g = i.pendingProps, n === null ? i.child = Lo(i, null, g, c) : wt(n, i, g, c), i.child;
      case 11:
        return g = i.type, v = i.pendingProps, v = i.elementType === g ? v : on(g, v), qw(n, i, g, v, c);
      case 7:
        return wt(n, i, i.pendingProps, c), i.child;
      case 8:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 12:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 10:
        e: {
          if (g = i.type._context, v = i.pendingProps, b = i.memoizedProps, P = v.value, De(Ia, g._currentValue), g._currentValue = P, b !== null) if (nn(b.value, P)) {
            if (b.children === v.children && !bt.current) {
              i = Vn(n, i, c);
              break e;
            }
          } else for (b = i.child, b !== null && (b.return = i); b !== null; ) {
            var F = b.dependencies;
            if (F !== null) {
              P = b.child;
              for (var G = F.firstContext; G !== null; ) {
                if (G.context === g) {
                  if (b.tag === 1) {
                    G = Bn(-1, c & -c), G.tag = 2;
                    var oe = b.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? G.next = G : (G.next = ue.next, ue.next = G), oe.pending = G;
                    }
                  }
                  b.lanes |= c, G = b.alternate, G !== null && (G.lanes |= c), Vc(
                    b.return,
                    c,
                    i
                  ), F.lanes |= c;
                  break;
                }
                G = G.next;
              }
            } else if (b.tag === 10) P = b.type === i.type ? null : b.child;
            else if (b.tag === 18) {
              if (P = b.return, P === null) throw Error(r(341));
              P.lanes |= c, F = P.alternate, F !== null && (F.lanes |= c), Vc(P, c, i), P = b.sibling;
            } else P = b.child;
            if (P !== null) P.return = b;
            else for (P = b; P !== null; ) {
              if (P === i) {
                P = null;
                break;
              }
              if (b = P.sibling, b !== null) {
                b.return = P.return, P = b;
                break;
              }
              P = P.return;
            }
            b = P;
          }
          wt(n, i, v.children, c), i = i.child;
        }
        return i;
      case 9:
        return v = i.type, g = i.pendingProps.children, qo(i, c), v = Yt(v), g = g(v), i.flags |= 1, wt(n, i, g, c), i.child;
      case 14:
        return g = i.type, v = on(g, i.pendingProps), v = on(g.type, v), jw(n, i, g, v, c);
      case 15:
        return zw(n, i, i.type, i.pendingProps, c);
      case 17:
        return g = i.type, v = i.pendingProps, v = i.elementType === g ? v : on(g, v), Ha(n, i), i.tag = 1, St(g) ? (n = !0, ka(i)) : n = !1, qo(i, c), Aw(i, g, v), sf(i, g, v, c), cf(null, i, g, !0, n, c);
      case 19:
        return Gw(n, i, c);
      case 22:
        return Fw(n, i, c);
    }
    throw Error(r(156, i.tag));
  };
  function vx(n, i) {
    return ra(n, i);
  }
  function JI(n, i, c, g) {
    this.tag = n, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(n, i, c, g) {
    return new JI(n, i, c, g);
  }
  function Af(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function e2(n) {
    if (typeof n == "function") return Af(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === V) return 11;
      if (n === H) return 14;
    }
    return 2;
  }
  function xr(n, i) {
    var c = n.alternate;
    return c === null ? (c = Qt(n.tag, i, n.key, n.mode), c.elementType = n.elementType, c.type = n.type, c.stateNode = n.stateNode, c.alternate = n, n.alternate = c) : (c.pendingProps = i, c.type = n.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = n.flags & 14680064, c.childLanes = n.childLanes, c.lanes = n.lanes, c.child = n.child, c.memoizedProps = n.memoizedProps, c.memoizedState = n.memoizedState, c.updateQueue = n.updateQueue, i = n.dependencies, c.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, c.sibling = n.sibling, c.index = n.index, c.ref = n.ref, c;
  }
  function tl(n, i, c, g, v, b) {
    var P = 2;
    if (g = n, typeof n == "function") Af(n) && (P = 1);
    else if (typeof n == "string") P = 5;
    else e: switch (n) {
      case T:
        return Qr(c.children, v, b, i);
      case O:
        P = 8, v |= 8;
        break;
      case q:
        return n = Qt(12, c, i, v | 2), n.elementType = q, n.lanes = b, n;
      case X:
        return n = Qt(13, c, i, v), n.elementType = X, n.lanes = b, n;
      case L:
        return n = Qt(19, c, i, v), n.elementType = L, n.lanes = b, n;
      case Y:
        return nl(c, v, b, i);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case U:
            P = 10;
            break e;
          case j:
            P = 9;
            break e;
          case V:
            P = 11;
            break e;
          case H:
            P = 14;
            break e;
          case B:
            P = 16, g = null;
            break e;
        }
        throw Error(r(130, n == null ? n : typeof n, ""));
    }
    return i = Qt(P, c, i, v), i.elementType = n, i.type = g, i.lanes = b, i;
  }
  function Qr(n, i, c, g) {
    return n = Qt(7, n, g, i), n.lanes = c, n;
  }
  function nl(n, i, c, g) {
    return n = Qt(22, n, g, i), n.elementType = Y, n.lanes = c, n.stateNode = { isHidden: !1 }, n;
  }
  function Tf(n, i, c) {
    return n = Qt(6, n, null, i), n.lanes = c, n;
  }
  function If(n, i, c) {
    return i = Qt(4, n.children !== null ? n.children : [], n.key, i), i.lanes = c, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function t2(n, i, c, g, v) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ti(0), this.expirationTimes = Ti(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ti(0), this.identifierPrefix = g, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, i, c, g, v, b, P, F, G) {
    return n = new t2(n, i, c, F, G), i === 1 ? (i = 1, b === !0 && (i |= 8)) : i = 0, b = Qt(3, null, null, i), n.current = b, b.stateNode = n, b.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wc(b), n;
  }
  function n2(n, i, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: A, key: g == null ? null : "" + g, children: n, containerInfo: i, implementation: c };
  }
  function yx(n) {
    if (!n) return fr;
    n = n._reactInternals;
    e: {
      if (xn(n) !== n || n.tag !== 1) throw Error(r(170));
      var i = n;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (St(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var c = n.type;
      if (St(c)) return U0(n, c, i);
    }
    return i;
  }
  function wx(n, i, c, g, v, b, P, F, G) {
    return n = Mf(c, g, !0, n, v, b, P, F, G), n.context = yx(null), c = n.current, g = xt(), v = yr(c), b = Bn(g, v), b.callback = i ?? null, pr(c, b, v), n.current.lanes = v, nr(n, v, g), kt(n, g), n;
  }
  function rl(n, i, c, g) {
    var v = i.current, b = xt(), P = yr(v);
    return c = yx(c), i.context === null ? i.context = c : i.pendingContext = c, i = Bn(b, P), i.payload = { element: n }, g = g === void 0 ? null : g, g !== null && (i.callback = g), n = pr(v, i, P), n !== null && (ln(n, v, P, b), Oa(n, v, P)), P;
  }
  function ol(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function xx(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var c = n.retryLane;
      n.retryLane = c !== 0 && c < i ? c : i;
    }
  }
  function Of(n, i) {
    xx(n, i), (n = n.alternate) && xx(n, i);
  }
  function r2() {
    return null;
  }
  var _x = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  il.prototype.render = Lf.prototype.render = function(n) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    rl(n, i, null, null);
  }, il.prototype.unmount = Lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var i = n.containerInfo;
      Yr(function() {
        rl(null, n, null, null);
      }), i[qn] = null;
    }
  };
  function il(n) {
    this._internalRoot = n;
  }
  il.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var i = o0();
      n = { blockedOn: null, target: n, priority: i };
      for (var c = 0; c < sr.length && i !== 0 && i < sr[c].priority; c++) ;
      sr.splice(c, 0, n), c === 0 && a0(n);
    }
  };
  function Df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function sl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function bx() {
  }
  function o2(n, i, c, g, v) {
    if (v) {
      if (typeof g == "function") {
        var b = g;
        g = function() {
          var oe = ol(P);
          b.call(oe);
        };
      }
      var P = wx(i, g, n, 0, null, !1, !1, "", bx);
      return n._reactRootContainer = P, n[qn] = P.current, Wi(n.nodeType === 8 ? n.parentNode : n), Yr(), P;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof g == "function") {
      var F = g;
      g = function() {
        var oe = ol(G);
        F.call(oe);
      };
    }
    var G = Mf(n, 0, !1, null, null, !1, !1, "", bx);
    return n._reactRootContainer = G, n[qn] = G.current, Wi(n.nodeType === 8 ? n.parentNode : n), Yr(function() {
      rl(i, G, c, g);
    }), G;
  }
  function al(n, i, c, g, v) {
    var b = c._reactRootContainer;
    if (b) {
      var P = b;
      if (typeof v == "function") {
        var F = v;
        v = function() {
          var G = ol(P);
          F.call(G);
        };
      }
      rl(i, P, n, v);
    } else P = o2(c, i, n, v, g);
    return ol(P);
  }
  n0 = function(n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var c = _n(i.pendingLanes);
          c !== 0 && (ic(i, c | 1), kt(i, We()), (Me & 6) === 0 && (Bo = We() + 500, dr()));
        }
        break;
      case 13:
        Yr(function() {
          var g = $n(n, 1);
          if (g !== null) {
            var v = xt();
            ln(g, n, 1, v);
          }
        }), Of(n, 1);
    }
  }, sc = function(n) {
    if (n.tag === 13) {
      var i = $n(n, 134217728);
      if (i !== null) {
        var c = xt();
        ln(i, n, 134217728, c);
      }
      Of(n, 134217728);
    }
  }, r0 = function(n) {
    if (n.tag === 13) {
      var i = yr(n), c = $n(n, i);
      if (c !== null) {
        var g = xt();
        ln(c, n, i, g);
      }
      Of(n, i);
    }
  }, o0 = function() {
    return Le;
  }, i0 = function(n, i) {
    var c = Le;
    try {
      return Le = n, i();
    } finally {
      Le = c;
    }
  }, Ei = function(n, i, c) {
    switch (i) {
      case "input":
        if (Ee(n, c), i = c.name, c.type === "radio" && i != null) {
          for (c = n; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < c.length; i++) {
            var g = c[i];
            if (g !== n && g.form === n.form) {
              var v = Ea(g);
              if (!v) throw Error(r(90));
              de(g), Ee(g, v);
            }
          }
        }
        break;
      case "textarea":
        en(n, c);
        break;
      case "select":
        i = c.value, i != null && dt(n, !!c.multiple, i, !1);
    }
  }, Zs = Nf, Js = Yr;
  var i2 = { usingClientEntryPoint: !1, Events: [Yi, Po, Ea, Xs, Qs, Nf] }, ls = { findFiberByHostInstance: Fr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, s2 = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ta(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || r2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ll.isDisabled && ll.supportsFiber) try {
      jr = ll.inject(s2), Wt = ll;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i2, Nt.createPortal = function(n, i) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Df(i)) throw Error(r(200));
    return n2(n, i, null, c);
  }, Nt.createRoot = function(n, i) {
    if (!Df(n)) throw Error(r(299));
    var c = !1, g = "", v = _x;
    return i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (g = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = Mf(n, 1, !1, null, null, c, !1, g, v), n[qn] = i.current, Wi(n.nodeType === 8 ? n.parentNode : n), new Lf(i);
  }, Nt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = ta(i), n = n === null ? null : n.stateNode, n;
  }, Nt.flushSync = function(n) {
    return Yr(n);
  }, Nt.hydrate = function(n, i, c) {
    if (!sl(i)) throw Error(r(200));
    return al(null, n, i, !0, c);
  }, Nt.hydrateRoot = function(n, i, c) {
    if (!Df(n)) throw Error(r(405));
    var g = c != null && c.hydratedSources || null, v = !1, b = "", P = _x;
    if (c != null && (c.unstable_strictMode === !0 && (v = !0), c.identifierPrefix !== void 0 && (b = c.identifierPrefix), c.onRecoverableError !== void 0 && (P = c.onRecoverableError)), i = wx(i, null, n, 1, c ?? null, v, !1, b, P), n[qn] = i.current, Wi(n), g) for (n = 0; n < g.length; n++) c = g[n], v = c._getVersion, v = v(c._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [c, v] : i.mutableSourceEagerHydrationData.push(
      c,
      v
    );
    return new il(i);
  }, Nt.render = function(n, i, c) {
    if (!sl(i)) throw Error(r(200));
    return al(null, n, i, !1, c);
  }, Nt.unmountComponentAtNode = function(n) {
    if (!sl(n)) throw Error(r(40));
    return n._reactRootContainer ? (Yr(function() {
      al(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qn] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = Nf, Nt.unstable_renderSubtreeIntoContainer = function(n, i, c, g) {
    if (!sl(c)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return al(n, i, c, !1, g);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var Ax;
function Gk() {
  if (Ax) return zf.exports;
  Ax = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), zf.exports = m2(), zf.exports;
}
var Tx;
function v2() {
  if (Tx) return fl;
  Tx = 1;
  var e = Gk();
  return fl.createRoot = e.createRoot, fl.hydrateRoot = e.hydrateRoot, fl;
}
var y2 = v2();
let Yk = N.createContext(
  /** @type {any} */
  null
);
function w2() {
  let e = N.useContext(Yk);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function x2() {
  return w2().model;
}
function Bf(e) {
  let t = x2(), r = N.useSyncExternalStore(
    (s) => (t.on(`change:${e}`, s), () => t.off(`change:${e}`, s)),
    () => t.get(e)
  ), o = N.useCallback(
    (s) => {
      t.set(
        e,
        // @ts-expect-error - TS cannot correctly narrow type
        typeof s == "function" ? s(t.get(e)) : s
      ), t.save_changes();
    },
    [t, e]
  );
  return [r, o];
}
function _2(e) {
  return ({ el: t, model: r, experimental: o }) => {
    let s = y2.createRoot(t);
    return s.render(
      N.createElement(
        N.StrictMode,
        null,
        N.createElement(
          Yk.Provider,
          { value: { model: r, experimental: o } },
          N.createElement(e)
        )
      )
    ), () => s.unmount();
  };
}
function tt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let r = 0, o; r < e.length; r++)
      (o = tt(e[r])) !== "" && (t += (t && " ") + o);
  else
    for (let r in e)
      e[r] && (t += (t && " ") + r);
  return t;
}
var b2 = { value: () => {
} };
function ou() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new Pl(r);
}
function Pl(e) {
  this._ = e;
}
function S2(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var o = "", s = r.indexOf(".");
    if (s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: o };
  });
}
Pl.prototype = ou.prototype = {
  constructor: Pl,
  on: function(e, t) {
    var r = this._, o = S2(e + "", r), s, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((s = (e = o[a]).type) && (s = E2(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (s = (e = o[a]).type) r[s] = Ix(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = Ix(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Pl(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), o = 0, s, a; o < s; ++o) r[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], o = 0, s = a.length; o < s; ++o) a[o].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], s = 0, a = o.length; s < a; ++s) o[s].value.apply(t, r);
  }
};
function E2(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function Ix(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      e[o] = b2, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Av = "http://www.w3.org/1999/xhtml";
const Mx = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Av,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function iu(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Mx.hasOwnProperty(t) ? { space: Mx[t], local: e } : e;
}
function C2(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Av && t.documentElement.namespaceURI === Av ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function k2(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Kk(e) {
  var t = iu(e);
  return (t.local ? k2 : C2)(t);
}
function N2() {
}
function oy(e) {
  return e == null ? N2 : function() {
    return this.querySelector(e);
  };
}
function R2(e) {
  typeof e != "function" && (e = oy(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function P2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function A2() {
  return [];
}
function Xk(e) {
  return e == null ? A2 : function() {
    return this.querySelectorAll(e);
  };
}
function T2(e) {
  return function() {
    return P2(e.apply(this, arguments));
  };
}
function I2(e) {
  typeof e == "function" ? e = T2(e) : e = Xk(e);
  for (var t = this._groups, r = t.length, o = [], s = [], a = 0; a < r; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), s.push(f));
  return new zt(o, s);
}
function Qk(e) {
  return function() {
    return this.matches(e);
  };
}
function Zk(e) {
  return function(t) {
    return t.matches(e);
  };
}
var M2 = Array.prototype.find;
function O2(e) {
  return function() {
    return M2.call(this.children, e);
  };
}
function L2() {
  return this.firstElementChild;
}
function D2(e) {
  return this.select(e == null ? L2 : O2(typeof e == "function" ? e : Zk(e)));
}
var q2 = Array.prototype.filter;
function j2() {
  return Array.from(this.children);
}
function z2(e) {
  return function() {
    return q2.call(this.children, e);
  };
}
function F2(e) {
  return this.selectAll(e == null ? j2 : z2(typeof e == "function" ? e : Zk(e)));
}
function $2(e) {
  typeof e != "function" && (e = Qk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function Jk(e) {
  return new Array(e.length);
}
function B2() {
  return new zt(this._enter || this._groups.map(Jk), this._parents);
}
function ql(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ql.prototype = {
  constructor: ql,
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
function V2(e) {
  return function() {
    return e;
  };
}
function H2(e, t, r, o, s, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : r[l] = new ql(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (s[l] = u);
}
function W2(e, t, r, o, s, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), w;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = w = l.call(f, f.__data__, u, t) + "", d.has(w) ? s[u] = f : d.set(w, f));
  for (u = 0; u < p; ++u)
    w = l.call(e, a[u], u, a) + "", (f = d.get(w)) ? (o[u] = f, f.__data__ = a[u], d.delete(w)) : r[u] = new ql(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (s[u] = f);
}
function U2(e) {
  return e.__data__;
}
function G2(e, t) {
  if (!arguments.length) return Array.from(this, U2);
  var r = t ? W2 : H2, o = this._parents, s = this._groups;
  typeof e != "function" && (e = V2(e));
  for (var a = s.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = s[d], m = p.length, w = Y2(e.call(h, h && h.__data__, d, o)), E = w.length, y = u[d] = new Array(E), x = l[d] = new Array(E), S = f[d] = new Array(m);
    r(h, p, y, x, S, w, t);
    for (var C = 0, _ = 0, k, R; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(R = x[_]) && ++_ < E; ) ;
        k._next = R || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function Y2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function K2() {
  return new zt(this._exit || this._groups.map(Jk), this._parents);
}
function X2(e, t, r) {
  var o = this.enter(), s = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? a.remove() : r(a), o && s ? o.merge(s).order() : s;
}
function Q2(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, o = t._groups, s = r.length, a = o.length, l = Math.min(s, a), u = new Array(s), f = 0; f < l; ++f)
    for (var d = r[f], h = o[f], p = d.length, m = u[f] = new Array(p), w, E = 0; E < p; ++E)
      (w = d[E] || h[E]) && (m[E] = w);
  for (; f < s; ++f)
    u[f] = r[f];
  return new zt(u, this._parents);
}
function Z2() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, a = o[s], l; --s >= 0; )
      (l = o[s]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function J2(e) {
  e || (e = eM);
  function t(p, m) {
    return p && m ? e(p.__data__, m.__data__) : !p - !m;
  }
  for (var r = this._groups, o = r.length, s = new Array(o), a = 0; a < o; ++a) {
    for (var l = r[a], u = l.length, f = s[a] = new Array(u), d, h = 0; h < u; ++h)
      (d = l[h]) && (f[h] = d);
    f.sort(t);
  }
  return new zt(s, this._parents).order();
}
function eM(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tM() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function nM() {
  return Array.from(this);
}
function rM() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length; s < a; ++s) {
      var l = o[s];
      if (l) return l;
    }
  return null;
}
function oM() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function iM() {
  return !this.node();
}
function sM(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], a = 0, l = s.length, u; a < l; ++a)
      (u = s[a]) && e.call(u, u.__data__, a, s);
  return this;
}
function aM(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function lM(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function uM(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function cM(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function dM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function hM(e, t) {
  var r = iu(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each((t == null ? r.local ? lM : aM : typeof t == "function" ? r.local ? dM : fM : r.local ? cM : uM)(r, t));
}
function eN(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function pM(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gM(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function mM(e, t, r) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function vM(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? pM : typeof t == "function" ? mM : gM)(e, t, r ?? "")) : ti(this.node(), e);
}
function ti(e, t) {
  return e.style.getPropertyValue(t) || eN(e).getComputedStyle(e, null).getPropertyValue(t);
}
function yM(e) {
  return function() {
    delete this[e];
  };
}
function wM(e, t) {
  return function() {
    this[e] = t;
  };
}
function xM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function _M(e, t) {
  return arguments.length > 1 ? this.each((t == null ? yM : typeof t == "function" ? xM : wM)(e, t)) : this.node()[e];
}
function tN(e) {
  return e.trim().split(/^|\s+/);
}
function iy(e) {
  return e.classList || new nN(e);
}
function nN(e) {
  this._node = e, this._names = tN(e.getAttribute("class") || "");
}
nN.prototype = {
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
function rN(e, t) {
  for (var r = iy(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function oN(e, t) {
  for (var r = iy(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function bM(e) {
  return function() {
    rN(this, e);
  };
}
function SM(e) {
  return function() {
    oN(this, e);
  };
}
function EM(e, t) {
  return function() {
    (t.apply(this, arguments) ? rN : oN)(this, e);
  };
}
function CM(e, t) {
  var r = tN(e + "");
  if (arguments.length < 2) {
    for (var o = iy(this.node()), s = -1, a = r.length; ++s < a; ) if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? EM : t ? bM : SM)(r, t));
}
function kM() {
  this.textContent = "";
}
function NM(e) {
  return function() {
    this.textContent = e;
  };
}
function RM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function PM(e) {
  return arguments.length ? this.each(e == null ? kM : (typeof e == "function" ? RM : NM)(e)) : this.node().textContent;
}
function AM() {
  this.innerHTML = "";
}
function TM(e) {
  return function() {
    this.innerHTML = e;
  };
}
function IM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function MM(e) {
  return arguments.length ? this.each(e == null ? AM : (typeof e == "function" ? IM : TM)(e)) : this.node().innerHTML;
}
function OM() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function LM() {
  return this.each(OM);
}
function DM() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function qM() {
  return this.each(DM);
}
function jM(e) {
  var t = typeof e == "function" ? e : Kk(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function zM() {
  return null;
}
function FM(e, t) {
  var r = typeof e == "function" ? e : Kk(e), o = t == null ? zM : typeof t == "function" ? t : oy(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function $M() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function BM() {
  return this.each($M);
}
function VM() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function HM() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function WM(e) {
  return this.select(e ? HM : VM);
}
function UM(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function GM(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function YM(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", o = t.indexOf(".");
    return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: r };
  });
}
function KM(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, a; r < s; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function XM(e, t, r) {
  return function() {
    var o = this.__on, s, a = GM(t);
    if (o) {
      for (var l = 0, u = o.length; l < u; ++l)
        if ((s = o[l]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = a, s.options = r), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, r), s = { type: e.type, name: e.name, value: t, listener: a, options: r }, o ? o.push(s) : this.__on = [s];
  };
}
function QM(e, t, r) {
  var o = YM(e + ""), s, a = o.length, l;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var f = 0, d = u.length, h; f < d; ++f)
        for (s = 0, h = u[f]; s < a; ++s)
          if ((l = o[s]).type === h.type && l.name === h.name)
            return h.value;
    }
    return;
  }
  for (u = t ? XM : KM, s = 0; s < a; ++s) this.each(u(o[s], t, r));
  return this;
}
function iN(e, t, r) {
  var o = eN(e), s = o.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = o.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function ZM(e, t) {
  return function() {
    return iN(this, e, t);
  };
}
function JM(e, t) {
  return function() {
    return iN(this, e, t.apply(this, arguments));
  };
}
function eO(e, t) {
  return this.each((typeof t == "function" ? JM : ZM)(e, t));
}
function* tO() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length, l; s < a; ++s)
      (l = o[s]) && (yield l);
}
var sN = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ls() {
  return new zt([[document.documentElement]], sN);
}
function nO() {
  return this;
}
zt.prototype = Ls.prototype = {
  constructor: zt,
  select: R2,
  selectAll: I2,
  selectChild: D2,
  selectChildren: F2,
  filter: $2,
  data: G2,
  enter: B2,
  exit: K2,
  join: X2,
  merge: Q2,
  selection: nO,
  order: Z2,
  sort: J2,
  call: tM,
  nodes: nM,
  node: rM,
  size: oM,
  empty: iM,
  each: sM,
  attr: hM,
  style: vM,
  property: _M,
  classed: CM,
  text: PM,
  html: MM,
  raise: LM,
  lower: qM,
  append: jM,
  insert: FM,
  remove: BM,
  clone: WM,
  datum: UM,
  on: QM,
  dispatch: eO,
  [Symbol.iterator]: tO
};
function qt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], sN);
}
function rO(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = rO(e), t === void 0 && (t = e.currentTarget), t) {
    var r = t.ownerSVGElement || t;
    if (r.createSVGPoint) {
      var o = r.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var s = t.getBoundingClientRect();
      return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const oO = { passive: !1 }, _s = { capture: !0, passive: !1 };
function Vf(e) {
  e.stopImmediatePropagation();
}
function Qo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function aN(e) {
  var t = e.document.documentElement, r = qt(e).on("dragstart.drag", Qo, _s);
  "onselectstart" in t ? r.on("selectstart.drag", Qo, _s) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function lN(e, t) {
  var r = e.document.documentElement, o = qt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Qo, _s), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const dl = (e) => () => e;
function Tv(e, {
  sourceEvent: t,
  subject: r,
  target: o,
  identifier: s,
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
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: u, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: d, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
Tv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function iO(e) {
  return !e.ctrlKey && !e.button;
}
function sO() {
  return this.parentNode;
}
function aO(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function lO() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function uN() {
  var e = iO, t = sO, r = aO, o = lO, s = {}, a = ou("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(k) {
    k.on("mousedown.drag", w).filter(o).on("touchstart.drag", x).on("touchmove.drag", S, oO).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(k, R) {
    if (!(h || !e.call(this, k, R))) {
      var A = _(this, t.call(this, k, R), k, R, "mouse");
      A && (qt(k.view).on("mousemove.drag", E, _s).on("mouseup.drag", y, _s), aN(k.view), Vf(k), d = !1, u = k.clientX, f = k.clientY, A("start", k));
    }
  }
  function E(k) {
    if (Qo(k), !d) {
      var R = k.clientX - u, A = k.clientY - f;
      d = R * R + A * A > p;
    }
    s.mouse("drag", k);
  }
  function y(k) {
    qt(k.view).on("mousemove.drag mouseup.drag", null), lN(k.view, d), Qo(k), s.mouse("end", k);
  }
  function x(k, R) {
    if (e.call(this, k, R)) {
      var A = k.changedTouches, T = t.call(this, k, R), O = A.length, q, U;
      for (q = 0; q < O; ++q)
        (U = _(this, T, k, R, A[q].identifier, A[q])) && (Vf(k), U("start", k, A[q]));
    }
  }
  function S(k) {
    var R = k.changedTouches, A = R.length, T, O;
    for (T = 0; T < A; ++T)
      (O = s[R[T].identifier]) && (Qo(k), O("drag", k, R[T]));
  }
  function C(k) {
    var R = k.changedTouches, A = R.length, T, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), T = 0; T < A; ++T)
      (O = s[R[T].identifier]) && (Vf(k), O("end", k, R[T]));
  }
  function _(k, R, A, T, O, q) {
    var U = a.copy(), j = fn(q || A, R), V, X, L;
    if ((L = r.call(k, new Tv("beforestart", {
      sourceEvent: A,
      target: m,
      identifier: O,
      active: l,
      x: j[0],
      y: j[1],
      dx: 0,
      dy: 0,
      dispatch: U
    }), T)) != null)
      return V = L.x - j[0] || 0, X = L.y - j[1] || 0, function H(B, Y, M) {
        var z = j, Q;
        switch (B) {
          case "start":
            s[O] = H, Q = l++;
            break;
          case "end":
            delete s[O], --l;
          // falls through
          case "drag":
            j = fn(M || Y, R), Q = l;
            break;
        }
        U.call(
          B,
          k,
          new Tv(B, {
            sourceEvent: Y,
            subject: L,
            target: m,
            identifier: O,
            active: Q,
            x: j[0] + V,
            y: j[1] + X,
            dx: j[0] - z[0],
            dy: j[1] - z[1],
            dispatch: U
          }),
          T
        );
      };
  }
  return m.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : dl(!!k), m) : e;
  }, m.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : dl(k), m) : t;
  }, m.subject = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : dl(k), m) : r;
  }, m.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : dl(!!k), m) : o;
  }, m.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? m : k;
  }, m.clickDistance = function(k) {
    return arguments.length ? (p = (k = +k) * k, m) : Math.sqrt(p);
  }, m;
}
function sy(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function cN(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function Ds() {
}
var bs = 0.7, jl = 1 / bs, Zo = "\\s*([+-]?\\d+)\\s*", Ss = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", uO = /^#([0-9a-f]{3,8})$/, cO = new RegExp(`^rgb\\(${Zo},${Zo},${Zo}\\)$`), fO = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), dO = new RegExp(`^rgba\\(${Zo},${Zo},${Zo},${Ss}\\)$`), hO = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Ss}\\)$`), pO = new RegExp(`^hsl\\(${Ss},${Pn},${Pn}\\)$`), gO = new RegExp(`^hsla\\(${Ss},${Pn},${Pn},${Ss}\\)$`), Ox = {
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
sy(Ds, ro, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lx,
  // Deprecated! Use color.formatHex.
  formatHex: Lx,
  formatHex8: mO,
  formatHsl: vO,
  formatRgb: Dx,
  toString: Dx
});
function Lx() {
  return this.rgb().formatHex();
}
function mO() {
  return this.rgb().formatHex8();
}
function vO() {
  return fN(this).formatHsl();
}
function Dx() {
  return this.rgb().formatRgb();
}
function ro(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = uO.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? qx(t) : r === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? hl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? hl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = cO.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = fO.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = dO.exec(e)) ? hl(t[1], t[2], t[3], t[4]) : (t = hO.exec(e)) ? hl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = pO.exec(e)) ? Fx(t[1], t[2] / 100, t[3] / 100, 1) : (t = gO.exec(e)) ? Fx(t[1], t[2] / 100, t[3] / 100, t[4]) : Ox.hasOwnProperty(e) ? qx(Ox[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function qx(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hl(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Rt(e, t, r, o);
}
function yO(e) {
  return e instanceof Ds || (e = ro(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function Iv(e, t, r, o) {
  return arguments.length === 1 ? yO(e) : new Rt(e, t, r, o ?? 1);
}
function Rt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
sy(Rt, Iv, cN(Ds, {
  brighter(e) {
    return e = e == null ? jl : Math.pow(jl, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(to(this.r), to(this.g), to(this.b), zl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: jx,
  // Deprecated! Use color.formatHex.
  formatHex: jx,
  formatHex8: wO,
  formatRgb: zx,
  toString: zx
}));
function jx() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}`;
}
function wO() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function zx() {
  const e = zl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${to(this.r)}, ${to(this.g)}, ${to(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function to(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function eo(e) {
  return e = to(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fx(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, r, o);
}
function fN(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ds || (e = ro(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, s = Math.min(t, r, o), a = Math.max(t, r, o), l = NaN, u = a - s, f = (a + s) / 2;
  return u ? (t === a ? l = (r - o) / u + (r < o) * 6 : r === a ? l = (o - t) / u + 2 : l = (t - r) / u + 4, u /= f < 0.5 ? a + s : 2 - a - s, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new dn(l, u, f, e.opacity);
}
function xO(e, t, r, o) {
  return arguments.length === 1 ? fN(e) : new dn(e, t, r, o ?? 1);
}
function dn(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
sy(dn, xO, cN(Ds, {
  brighter(e) {
    return e = e == null ? jl : Math.pow(jl, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - o;
    return new Rt(
      Hf(e >= 240 ? e - 240 : e + 120, s, o),
      Hf(e, s, o),
      Hf(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new dn($x(this.h), pl(this.s), pl(this.l), zl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$x(this.h)}, ${pl(this.s) * 100}%, ${pl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $x(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ay = (e) => () => e;
function _O(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function bO(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function SO(e) {
  return (e = +e) == 1 ? dN : function(t, r) {
    return r - t ? bO(t, r, e) : ay(isNaN(t) ? r : t);
  };
}
function dN(e, t) {
  var r = t - e;
  return r ? _O(e, r) : ay(isNaN(e) ? t : e);
}
const Fl = (function e(t) {
  var r = SO(t);
  function o(s, a) {
    var l = r((s = Iv(s)).r, (a = Iv(a)).r), u = r(s.g, a.g), f = r(s.b, a.b), d = dN(s.opacity, a.opacity);
    return function(h) {
      return s.r = l(h), s.g = u(h), s.b = f(h), s.opacity = d(h), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function EO(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function CO(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function kO(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, s = new Array(o), a = new Array(r), l;
  for (l = 0; l < o; ++l) s[l] = ws(e[l], t[l]);
  for (; l < r; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = s[l](u);
    return a;
  };
}
function NO(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return r.setTime(e * (1 - o) + t * o), r;
  };
}
function kn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function RO(e, t) {
  var r = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = ws(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in r) o[s] = r[s](a);
    return o;
  };
}
var Mv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wf = new RegExp(Mv.source, "g");
function PO(e) {
  return function() {
    return e;
  };
}
function AO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function hN(e, t) {
  var r = Mv.lastIndex = Wf.lastIndex = 0, o, s, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Mv.exec(e)) && (s = Wf.exec(t)); )
    (a = s.index) > r && (a = t.slice(r, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (s = s[0]) ? u[l] ? u[l] += s : u[++l] = s : (u[++l] = null, f.push({ i: l, x: kn(o, s) })), r = Wf.lastIndex;
  return r < t.length && (a = t.slice(r), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? AO(f[0].x) : PO(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function ws(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? ay(t) : (r === "number" ? kn : r === "string" ? (o = ro(t)) ? (t = o, Fl) : hN : t instanceof ro ? Fl : t instanceof Date ? NO : CO(t) ? EO : Array.isArray(t) ? kO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? RO : kn)(e, t);
}
var Bx = 180 / Math.PI, Ov = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pN(e, t, r, o, s, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * r + t * o) && (r -= e * f, o -= t * f), (u = Math.sqrt(r * r + o * o)) && (r /= u, o /= u, f /= u), e * o < t * r && (e = -e, t = -t, f = -f, l = -l), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(t, e) * Bx,
    skewX: Math.atan(f) * Bx,
    scaleX: l,
    scaleY: u
  };
}
var gl;
function TO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ov : pN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function IO(e) {
  return e == null || (gl || (gl = document.createElementNS("http://www.w3.org/2000/svg", "g")), gl.setAttribute("transform", e), !(e = gl.transform.baseVal.consolidate())) ? Ov : (e = e.matrix, pN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function gN(e, t, r, o) {
  function s(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, p, m, w, E) {
    if (d !== p || h !== m) {
      var y = w.push("translate(", null, t, null, r);
      E.push({ i: y - 4, x: kn(d, p) }, { i: y - 2, x: kn(h, m) });
    } else (p || m) && w.push("translate(" + p + t + m + r);
  }
  function l(d, h, p, m) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), m.push({ i: p.push(s(p) + "rotate(", null, o) - 2, x: kn(d, h) })) : h && p.push(s(p) + "rotate(" + h + o);
  }
  function u(d, h, p, m) {
    d !== h ? m.push({ i: p.push(s(p) + "skewX(", null, o) - 2, x: kn(d, h) }) : h && p.push(s(p) + "skewX(" + h + o);
  }
  function f(d, h, p, m, w, E) {
    if (d !== p || h !== m) {
      var y = w.push(s(w) + "scale(", null, ",", null, ")");
      E.push({ i: y - 4, x: kn(d, p) }, { i: y - 2, x: kn(h, m) });
    } else (p !== 1 || m !== 1) && w.push(s(w) + "scale(" + p + "," + m + ")");
  }
  return function(d, h) {
    var p = [], m = [];
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, p, m), l(d.rotate, h.rotate, p, m), u(d.skewX, h.skewX, p, m), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, p, m), d = h = null, function(w) {
      for (var E = -1, y = m.length, x; ++E < y; ) p[(x = m[E]).i] = x.x(w);
      return p.join("");
    };
  };
}
var MO = gN(TO, "px, ", "px)", "deg)"), OO = gN(IO, ", ", ")", ")"), LO = 1e-12;
function Vx(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function DO(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function qO(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Al = (function e(t, r, o) {
  function s(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], w = h - u, E = p - f, y = w * w + E * E, x, S;
    if (y < LO)
      S = Math.log(m / d) / t, x = function(T) {
        return [
          u + T * w,
          f + T * E,
          d * Math.exp(t * T * S)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (m * m - d * d + o * y) / (2 * d * r * C), k = (m * m - d * d - o * y) / (2 * m * r * C), R = Math.log(Math.sqrt(_ * _ + 1) - _), A = Math.log(Math.sqrt(k * k + 1) - k);
      S = (A - R) / t, x = function(T) {
        var O = T * S, q = Vx(R), U = d / (r * C) * (q * qO(t * O + R) - DO(R));
        return [
          u + U * w,
          f + U * E,
          d * q / Vx(t * O + R)
        ];
      };
    }
    return x.duration = S * 1e3 * t / Math.SQRT2, x;
  }
  return s.rho = function(a) {
    var l = Math.max(1e-3, +a), u = l * l, f = u * u;
    return e(l, u, f);
  }, s;
})(Math.SQRT2, 2, 4);
var ni = 0, hs = 0, cs = 0, mN = 1e3, $l, ps, Bl = 0, oo = 0, su = 0, Es = typeof performance == "object" && performance.now ? performance : Date, vN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ly() {
  return oo || (vN(jO), oo = Es.now() + su);
}
function jO() {
  oo = 0;
}
function Vl() {
  this._call = this._time = this._next = null;
}
Vl.prototype = yN.prototype = {
  constructor: Vl,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? ly() : +r) + (t == null ? 0 : +t), !this._next && ps !== this && (ps ? ps._next = this : $l = this, ps = this), this._call = e, this._time = r, Lv();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Lv());
  }
};
function yN(e, t, r) {
  var o = new Vl();
  return o.restart(e, t, r), o;
}
function zO() {
  ly(), ++ni;
  for (var e = $l, t; e; )
    (t = oo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ni;
}
function Hx() {
  oo = (Bl = Es.now()) + su, ni = hs = 0;
  try {
    zO();
  } finally {
    ni = 0, $O(), oo = 0;
  }
}
function FO() {
  var e = Es.now(), t = e - Bl;
  t > mN && (su -= t, Bl = e);
}
function $O() {
  for (var e, t = $l, r, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : $l = r);
  ps = e, Lv(o);
}
function Lv(e) {
  if (!ni) {
    hs && (hs = clearTimeout(hs));
    var t = e - oo;
    t > 24 ? (e < 1 / 0 && (hs = setTimeout(Hx, e - Es.now() - su)), cs && (cs = clearInterval(cs))) : (cs || (Bl = Es.now(), cs = setInterval(FO, mN)), ni = 1, vN(Hx));
  }
}
function Wx(e, t, r) {
  var o = new Vl();
  return t = t == null ? 0 : +t, o.restart((s) => {
    o.stop(), e(s + t);
  }, t, r), o;
}
var BO = ou("start", "end", "cancel", "interrupt"), VO = [], wN = 0, Ux = 1, Dv = 2, Tl = 3, Gx = 4, qv = 5, Il = 6;
function au(e, t, r, o, s, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (r in l) return;
  HO(e, r, {
    name: t,
    index: o,
    // For context during callback.
    group: s,
    // For context during callback.
    on: BO,
    tween: VO,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: wN
  });
}
function uy(e, t) {
  var r = yn(e, t);
  if (r.state > wN) throw new Error("too late; already scheduled");
  return r;
}
function Mn(e, t) {
  var r = yn(e, t);
  if (r.state > Tl) throw new Error("too late; already running");
  return r;
}
function yn(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function HO(e, t, r) {
  var o = e.__transition, s;
  o[t] = r, r.timer = yN(a, 0, r.time);
  function a(d) {
    r.state = Ux, r.timer.restart(l, r.delay, r.time), r.delay <= d && l(d - r.delay);
  }
  function l(d) {
    var h, p, m, w;
    if (r.state !== Ux) return f();
    for (h in o)
      if (w = o[h], w.name === r.name) {
        if (w.state === Tl) return Wx(l);
        w.state === Gx ? (w.state = Il, w.timer.stop(), w.on.call("interrupt", e, e.__data__, w.index, w.group), delete o[h]) : +h < t && (w.state = Il, w.timer.stop(), w.on.call("cancel", e, e.__data__, w.index, w.group), delete o[h]);
      }
    if (Wx(function() {
      r.state === Tl && (r.state = Gx, r.timer.restart(u, r.delay, r.time), u(d));
    }), r.state = Dv, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Dv) {
      for (r.state = Tl, s = new Array(m = r.tween.length), h = 0, p = -1; h < m; ++h)
        (w = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++p] = w);
      s.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < r.duration ? r.ease.call(null, d / r.duration) : (r.timer.restart(f), r.state = qv, 1), p = -1, m = s.length; ++p < m; )
      s[p].call(e, h);
    r.state === qv && (r.on.call("end", e, e.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = Il, r.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Ml(e, t) {
  var r = e.__transition, o, s, a = !0, l;
  if (r) {
    t = t == null ? null : t + "";
    for (l in r) {
      if ((o = r[l]).name !== t) {
        a = !1;
        continue;
      }
      s = o.state > Dv && o.state < qv, o.state = Il, o.timer.stop(), o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete r[l];
    }
    a && delete e.__transition;
  }
}
function WO(e) {
  return this.each(function() {
    Ml(this, e);
  });
}
function UO(e, t) {
  var r, o;
  return function() {
    var s = Mn(this, e), a = s.tween;
    if (a !== r) {
      o = r = a;
      for (var l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o = o.slice(), o.splice(l, 1);
          break;
        }
    }
    s.tween = o;
  };
}
function GO(e, t, r) {
  var o, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = Mn(this, e), l = a.tween;
    if (l !== o) {
      s = (o = l).slice();
      for (var u = { name: t, value: r }, f = 0, d = s.length; f < d; ++f)
        if (s[f].name === t) {
          s[f] = u;
          break;
        }
      f === d && s.push(u);
    }
    a.tween = s;
  };
}
function YO(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), r).tween, s = 0, a = o.length, l; s < a; ++s)
      if ((l = o[s]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? UO : GO)(r, e, t));
}
function cy(e, t, r) {
  var o = e._id;
  return e.each(function() {
    var s = Mn(this, o);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return yn(s, o).value[t];
  };
}
function xN(e, t) {
  var r;
  return (typeof t == "number" ? kn : t instanceof ro ? Fl : (r = ro(t)) ? (t = r, Fl) : hN)(e, t);
}
function KO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function XO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function QO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function ZO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function JO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function eL(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function tL(e, t) {
  var r = iu(e), o = r === "transform" ? OO : xN;
  return this.attrTween(e, typeof t == "function" ? (r.local ? eL : JO)(r, o, cy(this, "attr." + e, t)) : t == null ? (r.local ? XO : KO)(r) : (r.local ? ZO : QO)(r, o, t));
}
function nL(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function rL(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function oL(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && rL(e, a)), r;
  }
  return s._value = t, s;
}
function iL(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && nL(e, a)), r;
  }
  return s._value = t, s;
}
function sL(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = iu(e);
  return this.tween(r, (o.local ? oL : iL)(o, t));
}
function aL(e, t) {
  return function() {
    uy(this, e).delay = +t.apply(this, arguments);
  };
}
function lL(e, t) {
  return t = +t, function() {
    uy(this, e).delay = t;
  };
}
function uL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? aL : lL)(t, e)) : yn(this.node(), t).delay;
}
function cL(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function fL(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function dL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? cL : fL)(t, e)) : yn(this.node(), t).duration;
}
function hL(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function pL(e) {
  var t = this._id;
  return arguments.length ? this.each(hL(t, e)) : yn(this.node(), t).ease;
}
function gL(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Mn(this, e).ease = r;
  };
}
function mL(e) {
  if (typeof e != "function") throw new Error();
  return this.each(gL(this._id, e));
}
function vL(e) {
  typeof e != "function" && (e = Qk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Yn(o, this._parents, this._name, this._id);
}
function yL(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, o = t.length, s = r.length, a = Math.min(o, s), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = r[u], h = f.length, p = l[u] = new Array(h), m, w = 0; w < h; ++w)
      (m = f[w] || d[w]) && (p[w] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Yn(l, this._parents, this._name, this._id);
}
function wL(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function xL(e, t, r) {
  var o, s, a = wL(t) ? uy : Mn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (s = (o = u).copy()).on(t, r), l.on = s;
  };
}
function _L(e, t) {
  var r = this._id;
  return arguments.length < 2 ? yn(this.node(), r).on.on(e) : this.each(xL(r, e, t));
}
function bL(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function SL() {
  return this.on("end.remove", bL(this._id));
}
function EL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = oy(e));
  for (var o = this._groups, s = o.length, a = new Array(s), l = 0; l < s; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, au(d[m], t, r, m, d, yn(h, r)));
  return new Yn(a, this._parents, t, r);
}
function CL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Xk(e));
  for (var o = this._groups, s = o.length, a = [], l = [], u = 0; u < s; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), w, E = yn(h, r), y = 0, x = m.length; y < x; ++y)
          (w = m[y]) && au(w, t, r, y, m, E);
        a.push(m), l.push(h);
      }
  return new Yn(a, l, t, r);
}
var kL = Ls.prototype.constructor;
function NL() {
  return new kL(this._groups, this._parents);
}
function RL(e, t) {
  var r, o, s;
  return function() {
    var a = ti(this, e), l = (this.style.removeProperty(e), ti(this, e));
    return a === l ? null : a === r && l === o ? s : s = t(r = a, o = l);
  };
}
function _N(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function PL(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = ti(this, e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function AL(e, t, r) {
  var o, s, a;
  return function() {
    var l = ti(this, e), u = r(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ti(this, e))), l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u));
  };
}
function TL(e, t) {
  var r, o, s, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Mn(this, e), d = f.on, h = f.value[a] == null ? u || (u = _N(t)) : void 0;
    (d !== r || s !== h) && (o = (r = d).copy()).on(l, s = h), f.on = o;
  };
}
function IL(e, t, r) {
  var o = (e += "") == "transform" ? MO : xN;
  return t == null ? this.styleTween(e, RL(e, o)).on("end.style." + e, _N(e)) : typeof t == "function" ? this.styleTween(e, AL(e, o, cy(this, "style." + e, t))).each(TL(this._id, e)) : this.styleTween(e, PL(e, o, t), r).on("end.style." + e, null);
}
function ML(e, t, r) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function OL(e, t, r) {
  var o, s;
  function a() {
    var l = t.apply(this, arguments);
    return l !== s && (o = (s = l) && ML(e, l, r)), o;
  }
  return a._value = t, a;
}
function LL(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, OL(e, t, r ?? ""));
}
function DL(e) {
  return function() {
    this.textContent = e;
  };
}
function qL(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function jL(e) {
  return this.tween("text", typeof e == "function" ? qL(cy(this, "text", e)) : DL(e == null ? "" : e + ""));
}
function zL(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function FL(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && zL(s)), t;
  }
  return o._value = e, o;
}
function $L(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, FL(e));
}
function BL() {
  for (var e = this._name, t = this._id, r = bN(), o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = yn(f, t);
        au(f, e, r, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Yn(o, this._parents, e, r);
}
function VL() {
  var e, t, r = this, o = r._id, s = r.size();
  return new Promise(function(a, l) {
    var u = { value: l }, f = { value: function() {
      --s === 0 && a();
    } };
    r.each(function() {
      var d = Mn(this, o), h = d.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(u), t._.interrupt.push(u), t._.end.push(f)), d.on = t;
    }), s === 0 && a();
  });
}
var HL = 0;
function Yn(e, t, r, o) {
  this._groups = e, this._parents = t, this._name = r, this._id = o;
}
function bN() {
  return ++HL;
}
var Wn = Ls.prototype;
Yn.prototype = {
  constructor: Yn,
  select: EL,
  selectAll: CL,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: vL,
  merge: yL,
  selection: NL,
  transition: BL,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: _L,
  attr: tL,
  attrTween: sL,
  style: IL,
  styleTween: LL,
  text: jL,
  textTween: $L,
  remove: SL,
  tween: YO,
  delay: uL,
  duration: dL,
  ease: pL,
  easeVarying: mL,
  end: VL,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function WL(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var UL = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: WL
};
function GL(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function YL(e) {
  var t, r;
  e instanceof Yn ? (t = e._id, e = e._name) : (t = bN(), (r = UL).time = ly(), e = e == null ? null : e + "");
  for (var o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && au(f, e, t, d, l, r || GL(f, t));
  return new Yn(o, this._parents, e, t);
}
Ls.prototype.interrupt = WO;
Ls.prototype.transition = YL;
const ml = (e) => () => e;
function KL(e, {
  sourceEvent: t,
  target: r,
  transform: o,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function Gn(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
Gn.prototype = {
  constructor: Gn,
  scale: function(e) {
    return e === 1 ? this : new Gn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Gn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var lu = new Gn(1, 0, 0);
SN.prototype = Gn.prototype;
function SN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return lu;
  return e.__zoom;
}
function Uf(e) {
  e.stopImmediatePropagation();
}
function fs(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function XL(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function QL() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Yx() {
  return this.__zoom || lu;
}
function ZL(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function JL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function eD(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0], s = e.invertX(t[1][0]) - r[1][0], a = e.invertY(t[0][1]) - r[0][1], l = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function EN() {
  var e = XL, t = QL, r = eD, o = ZL, s = JL, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Al, d = ou("start", "zoom", "end"), h, p, m, w = 500, E = 150, y = 0, x = 10;
  function S(L) {
    L.property("__zoom", Yx).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", q).on("dblclick.zoom", U).filter(s).on("touchstart.zoom", j).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(L, H, B, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Yx), L !== M ? R(L, H, B, Y) : M.interrupt().each(function() {
      A(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, S.scaleBy = function(L, H, B, Y) {
    S.scaleTo(L, function() {
      var M = this.__zoom.k, z = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * z;
    }, B, Y);
  }, S.scaleTo = function(L, H, B, Y) {
    S.transform(L, function() {
      var M = t.apply(this, arguments), z = this.__zoom, Q = B == null ? k(M) : typeof B == "function" ? B.apply(this, arguments) : B, D = z.invert(Q), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return r(_(C(z, W), Q, D), M, l);
    }, B, Y);
  }, S.translateBy = function(L, H, B, Y) {
    S.transform(L, function() {
      return r(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof B == "function" ? B.apply(this, arguments) : B
      ), t.apply(this, arguments), l);
    }, null, Y);
  }, S.translateTo = function(L, H, B, Y, M) {
    S.transform(L, function() {
      var z = t.apply(this, arguments), Q = this.__zoom, D = Y == null ? k(z) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return r(lu.translate(D[0], D[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof B == "function" ? -B.apply(this, arguments) : -B
      ), z, l);
    }, Y, M);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Gn(H, L.x, L.y);
  }
  function _(L, H, B) {
    var Y = H[0] - B[0] * L.k, M = H[1] - B[1] * L.k;
    return Y === L.x && M === L.y ? L : new Gn(L.k, Y, M);
  }
  function k(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function R(L, H, B, Y) {
    L.on("start.zoom", function() {
      A(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      A(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, z = arguments, Q = A(M, z).event(Y), D = t.apply(M, z), W = B == null ? k(D) : typeof B == "function" ? B.apply(M, z) : B, ie = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), $ = M.__zoom, Z = typeof H == "function" ? H.apply(M, z) : H, ee = f($.invert(W).concat(ie / $.k), Z.invert(W).concat(ie / Z.k));
      return function(K) {
        if (K === 1) K = Z;
        else {
          var te = ee(K), se = ie / te[2];
          K = new Gn(se, W[0] - te[0] * se, W[1] - te[1] * se);
        }
        Q.zoom(null, K);
      };
    });
  }
  function A(L, H, B) {
    return !B && L.__zooming || new T(L, H);
  }
  function T(L, H) {
    this.that = L, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(L, H), this.taps = 0;
  }
  T.prototype = {
    event: function(L) {
      return L && (this.sourceEvent = L), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(L, H) {
      return this.mouse && L !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && L !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && L !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(L) {
      var H = qt(this.that).datum();
      d.call(
        L,
        this.that,
        new KL(L, {
          sourceEvent: this.sourceEvent,
          target: S,
          transform: this.that.__zoom,
          dispatch: d
        }),
        H
      );
    }
  };
  function O(L, ...H) {
    if (!e.apply(this, arguments)) return;
    var B = A(this, H).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), z = fn(L);
    if (B.wheel)
      (B.mouse[0][0] !== z[0] || B.mouse[0][1] !== z[1]) && (B.mouse[1] = Y.invert(B.mouse[0] = z)), clearTimeout(B.wheel);
    else {
      if (Y.k === M) return;
      B.mouse = [z, Y.invert(z)], Ml(this), B.start();
    }
    fs(L), B.wheel = setTimeout(Q, E), B.zoom("mouse", r(_(C(Y, M), B.mouse[0], B.mouse[1]), B.extent, l));
    function Q() {
      B.wheel = null, B.end();
    }
  }
  function q(L, ...H) {
    if (m || !e.apply(this, arguments)) return;
    var B = L.currentTarget, Y = A(this, H, !0).event(L), M = qt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), z = fn(L, B), Q = L.clientX, D = L.clientY;
    aN(L.view), Uf(L), Y.mouse = [z, this.__zoom.invert(z)], Ml(this), Y.start();
    function W($) {
      if (fs($), !Y.moved) {
        var Z = $.clientX - Q, ee = $.clientY - D;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event($).zoom("mouse", r(_(Y.that.__zoom, Y.mouse[0] = fn($, B), Y.mouse[1]), Y.extent, l));
    }
    function ie($) {
      M.on("mousemove.zoom mouseup.zoom", null), lN($.view, Y.moved), fs($), Y.event($).end();
    }
  }
  function U(L, ...H) {
    if (e.apply(this, arguments)) {
      var B = this.__zoom, Y = fn(L.changedTouches ? L.changedTouches[0] : L, this), M = B.invert(Y), z = B.k * (L.shiftKey ? 0.5 : 2), Q = r(_(C(B, z), Y, M), t.apply(this, H), l);
      fs(L), u > 0 ? qt(this).transition().duration(u).call(R, Q, Y, L) : qt(this).call(S.transform, Q, Y, L);
    }
  }
  function j(L, ...H) {
    if (e.apply(this, arguments)) {
      var B = L.touches, Y = B.length, M = A(this, H, L.changedTouches.length === Y).event(L), z, Q, D, W;
      for (Uf(L), Q = 0; Q < Y; ++Q)
        D = B[Q], W = fn(D, this), W = [W, this.__zoom.invert(W), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, z = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), z && (M.taps < 2 && (p = W[0], h = setTimeout(function() {
        h = null;
      }, w)), Ml(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var B = A(this, H).event(L), Y = L.changedTouches, M = Y.length, z, Q, D, W;
      for (fs(L), z = 0; z < M; ++z)
        Q = Y[z], D = fn(Q, this), B.touch0 && B.touch0[2] === Q.identifier ? B.touch0[0] = D : B.touch1 && B.touch1[2] === Q.identifier && (B.touch1[0] = D);
      if (Q = B.that.__zoom, B.touch1) {
        var ie = B.touch0[0], $ = B.touch0[1], Z = B.touch1[0], ee = B.touch1[1], K = (K = Z[0] - ie[0]) * K + (K = Z[1] - ie[1]) * K, te = (te = ee[0] - $[0]) * te + (te = ee[1] - $[1]) * te;
        Q = C(Q, Math.sqrt(K / te)), D = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [($[0] + ee[0]) / 2, ($[1] + ee[1]) / 2];
      } else if (B.touch0) D = B.touch0[0], W = B.touch0[1];
      else return;
      B.zoom("touch", r(_(Q, D, W), B.extent, l));
    }
  }
  function X(L, ...H) {
    if (this.__zooming) {
      var B = A(this, H).event(L), Y = L.changedTouches, M = Y.length, z, Q;
      for (Uf(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, w), z = 0; z < M; ++z)
        Q = Y[z], B.touch0 && B.touch0[2] === Q.identifier ? delete B.touch0 : B.touch1 && B.touch1[2] === Q.identifier && delete B.touch1;
      if (B.touch1 && !B.touch0 && (B.touch0 = B.touch1, delete B.touch1), B.touch0) B.touch0[1] = this.__zoom.invert(B.touch0[0]);
      else if (B.end(), B.taps === 2 && (Q = fn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < x)) {
        var D = qt(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : ml(+L), S) : o;
  }, S.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : ml(!!L), S) : e;
  }, S.touchable = function(L) {
    return arguments.length ? (s = typeof L == "function" ? L : ml(!!L), S) : s;
  }, S.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : ml([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), S) : t;
  }, S.scaleExtent = function(L) {
    return arguments.length ? (a[0] = +L[0], a[1] = +L[1], S) : [a[0], a[1]];
  }, S.translateExtent = function(L) {
    return arguments.length ? (l[0][0] = +L[0][0], l[1][0] = +L[1][0], l[0][1] = +L[0][1], l[1][1] = +L[1][1], S) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, S.constrain = function(L) {
    return arguments.length ? (r = L, S) : r;
  }, S.duration = function(L) {
    return arguments.length ? (u = +L, S) : u;
  }, S.interpolate = function(L) {
    return arguments.length ? (f = L, S) : f;
  }, S.on = function() {
    var L = d.on.apply(d, arguments);
    return L === d ? S : L;
  }, S.clickDistance = function(L) {
    return arguments.length ? (y = (L = +L) * L, S) : Math.sqrt(y);
  }, S.tapDistance = function(L) {
    return arguments.length ? (x = +L, S) : x;
  }, S;
}
const Tn = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: r, targetHandle: o }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? r : o}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Cs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], CN = ["Enter", " ", "Escape"], kN = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: r }) => `Moved selected node ${e}. New position, x: ${t}, y: ${r}`,
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
var ri;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ri || (ri = {}));
var no;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(no || (no = {}));
var ks;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ks || (ks = {}));
const NN = {
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
var kr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(kr || (kr = {}));
var Hl;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Hl || (Hl = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Kx = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function RN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const PN = (e) => "id" in e && "source" in e && "target" in e, tD = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), fy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), qs = (e, t = [0, 0]) => {
  const { width: r, height: o } = Qn(e), s = e.origin ?? t, a = r * s[0], l = o * s[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, nD = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const r = e.reduce((o, s) => {
    const a = typeof s == "string";
    let l = !t.nodeLookup && !a ? s : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(s) : fy(s) ? s : t.nodeLookup.get(s.id));
    const u = l ? Wl(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return uu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return cu(r);
}, js = (e, t = {}) => {
  let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((s) => {
    (t.filter === void 0 || t.filter(s)) && (r = uu(r, Wl(s)), o = !0);
  }), o ? cu(r) : { x: 0, y: 0, width: 0, height: 0 };
}, dy = (e, t, [r, o, s] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...Fs(t, [r, o, s]),
    width: t.width / s,
    height: t.height / s
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const w = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = Ns(u, ii(d)), x = (w ?? 0) * (E ?? 0), S = a && y > 0;
    (!d.internals.handleBounds || S || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, rD = (e, t) => {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    r.add(o.id);
  }), t.filter((o) => r.has(o.source) || r.has(o.target));
};
function oD(e, t) {
  const r = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return e.forEach((s) => {
    s.measured.width && s.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !s.hidden) && (!o || o.has(s.id)) && r.set(s.id, s);
  }), r;
}
async function iD({ nodes: e, width: t, height: r, panZoom: o, minZoom: s, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = oD(e, l), f = js(u), d = hy(f, t, r, (l == null ? void 0 : l.minZoom) ?? s, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function AN({ nodeId: e, nextPosition: t, nodeLookup: r, nodeOrigin: o = [0, 0], nodeExtent: s, onError: a }) {
  const l = r.get(e), u = l.parentId ? r.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let p = l.extent || s;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", Tn.error005());
    else {
      const w = u.measured.width, E = u.measured.height;
      w && E && (p = [
        [f, d],
        [f + w, d + E]
      ]);
    }
  else u && si(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = si(p) ? io(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", Tn.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function sD({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: r, edges: o, onBeforeDelete: s }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of r) {
    if (m.deletable === !1)
      continue;
    const w = a.has(m.id), E = !w && m.parentId && l.find((y) => y.id === m.parentId);
    (w || E) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = rD(l, f);
  for (const m of f)
    u.has(m.id) && !h.find((E) => E.id === m.id) && h.push(m);
  if (!s)
    return {
      edges: h,
      nodes: l
    };
  const p = await s({
    nodes: l,
    edges: h
  });
  return typeof p == "boolean" ? p ? { edges: h, nodes: l } : { edges: [], nodes: [] } : p;
}
const oi = (e, t = 0, r = 1) => Math.min(Math.max(e, t), r), io = (e = { x: 0, y: 0 }, t, r) => ({
  x: oi(e.x, t[0][0], t[1][0] - ((r == null ? void 0 : r.width) ?? 0)),
  y: oi(e.y, t[0][1], t[1][1] - ((r == null ? void 0 : r.height) ?? 0))
});
function TN(e, t, r) {
  const { width: o, height: s } = Qn(r), { x: a, y: l } = r.internals.positionAbsolute;
  return io(e, [
    [a, l],
    [a + o, l + s]
  ], t);
}
const Xx = (e, t, r) => e < t ? oi(Math.abs(e - t), 1, t) / t : e > r ? -oi(Math.abs(e - r), 1, t) / t : 0, IN = (e, t, r = 15, o = 40) => {
  const s = Xx(e.x, o, t.width - o) * r, a = Xx(e.y, o, t.height - o) * r;
  return [s, a];
}, uu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), jv = ({ x: e, y: t, width: r, height: o }) => ({
  x: e,
  y: t,
  x2: e + r,
  y2: t + o
}), cu = ({ x: e, y: t, x2: r, y2: o }) => ({
  x: e,
  y: t,
  width: r - e,
  height: o - t
}), ii = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = fy(e) ? e.internals.positionAbsolute : qs(e, t);
  return {
    x: r,
    y: o,
    width: ((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Wl = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = fy(e) ? e.internals.positionAbsolute : qs(e, t);
  return {
    x: r,
    y: o,
    x2: r + (((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, MN = (e, t) => cu(uu(jv(e), jv(t))), Ns = (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(r * o);
}, Qx = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), aD = (e, t) => {
}, zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fs = ({ x: e, y: t }, [r, o, s], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - r) / s,
    y: (t - o) / s
  };
  return a ? zs(u, l) : u;
}, Ul = ({ x: e, y: t }, [r, o, s]) => ({
  x: e * s + r,
  y: t * s + o
});
function Ho(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const r = parseFloat(e);
    if (!Number.isNaN(r))
      return Math.floor(r);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const r = parseFloat(e);
    if (!Number.isNaN(r))
      return Math.floor(t * r * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function lD(e, t, r) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Ho(e, r), s = Ho(e, t);
    return {
      top: o,
      right: s,
      bottom: o,
      left: s,
      x: s * 2,
      y: o * 2
    };
  }
  if (typeof e == "object") {
    const o = Ho(e.top ?? e.y ?? 0, r), s = Ho(e.bottom ?? e.y ?? 0, r), a = Ho(e.left ?? e.x ?? 0, t), l = Ho(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: s, left: a, x: a + l, y: o + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function uD(e, t, r, o, s, a) {
  const { x: l, y: u } = Ul(e, [t, r, o]), { x: f, y: d } = Ul({ x: e.x + e.width, y: e.y + e.height }, [t, r, o]), h = s - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const hy = (e, t, r, o, s, a) => {
  const l = lD(a, t, r), u = (t - l.x) / e.width, f = (r - l.y) / e.height, d = Math.min(u, f), h = oi(d, o, s), p = e.x + e.width / 2, m = e.y + e.height / 2, w = t / 2 - p * h, E = r / 2 - m * h, y = uD(e, w, E, h, t, r), x = {
    left: Math.min(y.left - l.left, 0),
    top: Math.min(y.top - l.top, 0),
    right: Math.min(y.right - l.right, 0),
    bottom: Math.min(y.bottom - l.bottom, 0)
  };
  return {
    x: w - x.left + x.right,
    y: E - x.top + x.bottom,
    zoom: h
  };
}, Rs = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function si(e) {
  return e != null && e !== "parent";
}
function Qn(e) {
  var t, r;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function ON(e) {
  var t, r;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function LN(e, t = { width: 0, height: 0 }, r, o, s) {
  const a = { ...e }, l = o.get(r);
  if (l) {
    const u = l.origin || s;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function Zx(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
}
function cD() {
  let e, t;
  return { promise: new Promise((o, s) => {
    e = o, t = s;
  }), resolve: e, reject: t };
}
function fD(e) {
  return { ...kN, ...e || {} };
}
function xs(e, { snapGrid: t = [0, 0], snapToGrid: r = !1, transform: o, containerBounds: s }) {
  const { x: a, y: l } = pn(e), u = Fs({ x: a - ((s == null ? void 0 : s.left) ?? 0), y: l - ((s == null ? void 0 : s.top) ?? 0) }, o), { x: f, y: d } = r ? zs(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const py = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), DN = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, dD = ["INPUT", "SELECT", "TEXTAREA"];
function qN(e) {
  var o, s;
  const t = ((s = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : s[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : dD.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const jN = (e) => "clientX" in e, pn = (e, t) => {
  var a, l;
  const r = jN(e), o = r ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, s = r ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Jx = (e, t, r, o, s) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((l) => {
    const u = l.getBoundingClientRect();
    return {
      id: l.getAttribute("data-handleid"),
      type: e,
      nodeId: s,
      position: l.getAttribute("data-handlepos"),
      x: (u.left - r.left) / o,
      y: (u.top - r.top) / o,
      ...py(l)
    };
  });
};
function zN({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: s, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + s * 0.375 + l * 0.375 + r * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function vl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function e1({ pos: e, x1: t, y1: r, x2: o, y2: s, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - vl(t - o, a), r];
    case ye.Right:
      return [t + vl(o - t, a), r];
    case ye.Top:
      return [t, r - vl(r - s, a)];
    case ye.Bottom:
      return [t, r + vl(s - r, a)];
  }
}
function FN({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = e1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s,
    c: l
  }), [d, h] = e1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t,
    c: l
  }), [p, m, w, E] = zN({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: s,
    sourceControlX: u,
    sourceControlY: f,
    targetControlX: d,
    targetControlY: h
  });
  return [
    `M${e},${t} C${u},${f} ${d},${h} ${o},${s}`,
    p,
    m,
    w,
    E
  ];
}
function $N({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, s, l];
}
function hD({ sourceNode: e, targetNode: t, selected: r = !1, zIndex: o, elevateOnSelect: s = !1 }) {
  if (o !== void 0)
    return o;
  const a = s && r ? 1e3 : 0, l = Math.max(e.parentId || s && e.selected ? e.internals.z : 0, t.parentId || s && t.selected ? t.internals.z : 0);
  return a + l;
}
function pD({ sourceNode: e, targetNode: t, width: r, height: o, transform: s }) {
  const a = uu(Wl(e), Wl(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: o / s[2]
  };
  return Ns(l, cu(a)) > 0;
}
const gD = ({ source: e, sourceHandle: t, target: r, targetHandle: o }) => `xy-edge__${e}${t || ""}-${r}${o || ""}`, mD = (e, t) => t.some((r) => r.source === e.source && r.target === e.target && (r.sourceHandle === e.sourceHandle || !r.sourceHandle && !e.sourceHandle) && (r.targetHandle === e.targetHandle || !r.targetHandle && !e.targetHandle)), vD = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let r;
  return PN(e) ? r = { ...e } : r = {
    ...e,
    id: gD(e)
  }, mD(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function BN({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const [s, a, l, u] = $N({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o
  });
  return [`M ${e},${t}L ${r},${o}`, s, a, l, u];
}
const t1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, yD = ({ source: e, sourcePosition: t = ye.Bottom, target: r }) => t === ye.Left || t === ye.Right ? e.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, n1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function wD({ source: e, sourcePosition: t = ye.Bottom, target: r, targetPosition: o = ye.Top, center: s, offset: a, stepPosition: l }) {
  const u = t1[t], f = t1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: r.x + f.x * a, y: r.y + f.y * a }, p = yD({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", w = p[m];
  let E = [], y, x;
  const S = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = $N({
    sourceX: e.x,
    sourceY: e.y,
    targetX: r.x,
    targetY: r.y
  });
  if (u[m] * f[m] === -1) {
    m === "x" ? (y = s.x ?? d.x + (h.x - d.x) * l, x = s.y ?? (d.y + h.y) / 2) : (y = s.x ?? (d.x + h.x) / 2, x = s.y ?? d.y + (h.y - d.y) * l);
    const A = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], T = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    u[m] === w ? E = m === "x" ? A : T : E = m === "x" ? T : A;
  } else {
    const A = [{ x: d.x, y: h.y }], T = [{ x: h.x, y: d.y }];
    if (m === "x" ? E = u.x === w ? T : A : E = u.y === w ? A : T, t === o) {
      const V = Math.abs(e[m] - r[m]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        u[m] === w ? S[m] = (d[m] > e[m] ? -1 : 1) * X : C[m] = (h[m] > r[m] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = m === "x" ? "y" : "x", X = u[m] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[m] === 1 && (!X && L || X && H) || u[m] !== 1 && (!X && H || X && L)) && (E = m === "x" ? A : T);
    }
    const O = { x: d.x + S.x, y: d.y + S.y }, q = { x: h.x + C.x, y: h.y + C.y }, U = Math.max(Math.abs(O.x - E[0].x), Math.abs(q.x - E[0].x)), j = Math.max(Math.abs(O.y - E[0].y), Math.abs(q.y - E[0].y));
    U >= j ? (y = (O.x + q.x) / 2, x = E[0].y) : (y = E[0].x, x = (O.y + q.y) / 2);
  }
  return [[
    e,
    { x: d.x + S.x, y: d.y + S.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    r
  ], y, x, _, k];
}
function xD(e, t, r, o) {
  const s = Math.min(n1(e, t) / 2, n1(t, r) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === r.x || e.y === l && l === r.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < r.x ? -1 : 1, h = e.y < r.y ? 1 : -1;
    return `L ${a + s * d},${l}Q ${a},${l} ${a},${l + s * h}`;
  }
  const u = e.x < r.x ? 1 : -1, f = e.y < r.y ? -1 : 1;
  return `L ${a},${l + s * f}Q ${a},${l} ${a + s * u},${l}`;
}
function zv({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, w, E, y] = wD({
    source: { x: e, y: t },
    sourcePosition: r,
    target: { x: o, y: s },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((S, C, _) => {
    let k = "";
    return _ > 0 && _ < p.length - 1 ? k = xD(p[_ - 1], C, p[_ + 1], l) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, S += k, S;
  }, ""), m, w, E, y];
}
function r1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function _D(e) {
  var p;
  const { sourceNode: t, targetNode: r } = e;
  if (!r1(t) || !r1(r))
    return null;
  const o = t.internals.handleBounds || o1(t.handles), s = r.internals.handleBounds || o1(r.handles), a = i1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = i1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ri.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", Tn.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || ye.Bottom, f = (l == null ? void 0 : l.position) || ye.Top, d = Ps(t, a, u), h = Ps(r, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function o1(e) {
  if (!e)
    return null;
  const t = [], r = [];
  for (const o of e)
    o.width = o.width ?? 1, o.height = o.height ?? 1, o.type === "source" ? t.push(o) : o.type === "target" && r.push(o);
  return {
    source: t,
    target: r
  };
}
function Ps(e, t, r = ye.Left, o = !1) {
  const s = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? Qn(e);
  if (o)
    return { x: s + l / 2, y: a + u / 2 };
  switch ((t == null ? void 0 : t.position) ?? r) {
    case ye.Top:
      return { x: s + l / 2, y: a };
    case ye.Right:
      return { x: s + l, y: a + u / 2 };
    case ye.Bottom:
      return { x: s + l / 2, y: a + u };
    case ye.Left:
      return { x: s, y: a + u / 2 };
  }
}
function i1(e, t) {
  return e && (t ? e.find((r) => r.id === t) : e[0]) || null;
}
function Fv(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function bD(e, { id: t, defaultColor: r, defaultMarkerStart: o, defaultMarkerEnd: s }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || s].forEach((f) => {
    if (f && typeof f == "object") {
      const d = Fv(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || r, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const VN = 1e3, SD = 10, gy = {
  nodeOrigin: [0, 0],
  nodeExtent: Cs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, ED = {
  ...gy,
  checkEquality: !0
};
function my(e, t) {
  const r = { ...e };
  for (const o in t)
    t[o] !== void 0 && (r[o] = t[o]);
  return r;
}
function CD(e, t, r) {
  const o = my(gy, r);
  for (const s of e.values())
    if (s.parentId)
      vy(s, e, t, o);
    else {
      const a = qs(s, o.nodeOrigin), l = si(s.extent) ? s.extent : o.nodeExtent, u = io(a, l, Qn(s));
      s.internals.positionAbsolute = u;
    }
}
function kD(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const r = [], o = [];
  for (const s of e.handles) {
    const a = {
      id: s.id,
      width: s.width ?? 1,
      height: s.height ?? 1,
      nodeId: e.id,
      x: s.x,
      y: s.y,
      position: s.position,
      type: s.type
    };
    s.type === "source" ? r.push(a) : s.type === "target" && o.push(a);
  }
  return {
    source: r,
    target: o
  };
}
function $v(e, t, r, o) {
  var d, h;
  const s = my(ED, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = s != null && s.elevateNodesOnSelect ? VN : 0;
  t.clear(), r.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (s.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const w = qs(p, s.nodeOrigin), E = si(p.extent) ? p.extent : s.nodeExtent, y = io(w, E, Qn(p));
      m = {
        ...s.defaults,
        ...p,
        measured: {
          width: (d = p.measured) == null ? void 0 : d.width,
          height: (h = p.measured) == null ? void 0 : h.height
        },
        internals: {
          positionAbsolute: y,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: kD(p, m),
          z: HN(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && vy(m, t, r, o, a);
  }
  return l;
}
function ND(e, t) {
  if (!e.parentId)
    return;
  const r = t.get(e.parentId);
  r ? r.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function vy(e, t, r, o, s) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = my(gy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  ND(e, r), s && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++s.i, d.internals.z = d.internals.z + s.i * SD), s && d.internals.rootParentIndex !== void 0 && (s.i = d.internals.rootParentIndex);
  const h = a ? VN : 0, { x: p, y: m, z: w } = RD(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = p !== E.x || m !== E.y;
  (y || w !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : E,
      z: w
    }
  });
}
function HN(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function RD(e, t, r, o, s) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Qn(e), f = qs(e, r), d = si(e.extent) ? io(f, e.extent, u) : f;
  let h = io({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = TN(h, u, t));
  const p = HN(e, s), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function yy(e, t, r, o = [0, 0]) {
  var l;
  const s = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? ii(f), h = MN(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, p = Qn(f), m = f.origin ?? o, w = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), x = Math.max(p.height, Math.round(u.height)), S = (y - p.width) * m[0], C = (x - p.height) * m[1];
    (w > 0 || E > 0 || S || C) && (s.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - w + S,
        y: f.position.y - E + C
      }
    }), (_ = r.get(d)) == null || _.forEach((k) => {
      e.some((R) => R.id === k.id) || s.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + w,
          y: k.position.y + E
        }
      });
    })), (p.width < u.width || p.height < u.height || w || E) && s.push({
      id: d,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (w ? m[0] * w - S : 0),
        height: x + (E ? m[1] * E - C : 0)
      }
    });
  }), s;
}
function PD(e, t, r, o, s, a) {
  const l = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const f = [], d = window.getComputedStyle(l), { m22: h } = new window.DOMMatrixReadOnly(d.transform), p = [];
  for (const m of e.values()) {
    const w = t.get(m.id);
    if (!w)
      continue;
    if (w.hidden) {
      t.set(w.id, {
        ...w,
        internals: {
          ...w.internals,
          handleBounds: void 0
        }
      }), u = !0;
      continue;
    }
    const E = py(m.nodeElement), y = w.measured.width !== E.width || w.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !w.internals.handleBounds || m.force))) {
      const S = m.nodeElement.getBoundingClientRect(), C = si(w.extent) ? w.extent : a;
      let { positionAbsolute: _ } = w.internals;
      w.parentId && w.extent === "parent" ? _ = TN(_, E, t.get(w.parentId)) : C && (_ = io(_, C, E));
      const k = {
        ...w,
        measured: E,
        internals: {
          ...w.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Jx("source", m.nodeElement, S, h, w.id),
            target: Jx("target", m.nodeElement, S, h, w.id)
          }
        }
      };
      t.set(w.id, k), w.parentId && vy(k, t, r, { nodeOrigin: s }), u = !0, y && (f.push({
        id: w.id,
        type: "dimensions",
        dimensions: E
      }), w.expandParent && w.parentId && p.push({
        id: w.id,
        parentId: w.parentId,
        rect: ii(k, s)
      }));
    }
  }
  if (p.length > 0) {
    const m = yy(p, t, r, s);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function AD({ delta: e, panZoom: t, transform: r, translateExtent: o, width: s, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const l = await t.setViewportConstrained({
    x: r[0] + e.x,
    y: r[1] + e.y,
    zoom: r[2]
  }, [
    [0, 0],
    [s, a]
  ], o), u = !!l && (l.x !== r[0] || l.y !== r[1] || l.k !== r[2]);
  return Promise.resolve(u);
}
function s1(e, t, r, o, s, a) {
  let l = s;
  const u = o.get(l) || /* @__PURE__ */ new Map();
  o.set(l, u.set(r, t)), l = `${s}-${e}`;
  const f = o.get(l) || /* @__PURE__ */ new Map();
  if (o.set(l, f.set(r, t)), a) {
    l = `${s}-${e}-${a}`;
    const d = o.get(l) || /* @__PURE__ */ new Map();
    o.set(l, d.set(r, t));
  }
}
function WN(e, t, r) {
  e.clear(), t.clear();
  for (const o of r) {
    const { source: s, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: s, target: a, sourceHandle: l, targetHandle: u }, d = `${s}-${l}--${a}-${u}`, h = `${a}-${u}--${s}-${l}`;
    s1("source", f, h, e, s, l), s1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function UN(e, t) {
  if (!e.parentId)
    return !1;
  const r = t.get(e.parentId);
  return r ? r.selected ? !0 : UN(r, t) : !1;
}
function a1(e, t, r) {
  var s;
  let o = e;
  do {
    if ((s = o == null ? void 0 : o.matches) != null && s.call(o, t))
      return !0;
    if (o === r)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function TD(e, t, r, o) {
  const s = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !UN(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
      const u = e.get(a);
      u && s.set(a, {
        id: a,
        position: u.position || { x: 0, y: 0 },
        distance: {
          x: r.x - u.internals.positionAbsolute.x,
          y: r.y - u.internals.positionAbsolute.y
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
  return s;
}
function Gf({ nodeId: e, dragItems: t, nodeLookup: r, dragging: o = !0 }) {
  var l, u, f;
  const s = [];
  for (const [d, h] of t) {
    const p = (l = r.get(d)) == null ? void 0 : l.internals.userNode;
    p && s.push({
      ...p,
      position: h.position,
      dragging: o
    });
  }
  if (!e)
    return [s[0], s];
  const a = (u = r.get(e)) == null ? void 0 : u.internals.userNode;
  return [
    a ? {
      ...a,
      position: ((f = t.get(e)) == null ? void 0 : f.position) || a.position,
      dragging: o
    } : s[0],
    s
  ];
}
function ID({ dragItems: e, snapGrid: t, x: r, y: o }) {
  const s = e.values().next().value;
  if (!s)
    return null;
  const a = {
    x: r - s.distance.x,
    y: o - s.distance.y
  }, l = zs(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function MD({ onNodeMouseDown: e, getStoreItems: t, onDragStart: r, onDrag: o, onDragStop: s }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, w = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: R, nodeId: A, nodeClickDistance: T = 0 }) {
    m = qt(k);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: B, snapToGrid: Y, nodeOrigin: M, onNodeDrag: z, onSelectionDrag: Q, onError: D, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const $ = u.size > 1, Z = $ && H ? jv(js(u)) : null, ee = $ && Y ? ID({
        dragItems: u,
        snapGrid: B,
        x: V,
        y: X
      }) : null;
      for (const [K, te] of u) {
        if (!L.has(K))
          continue;
        let se = { x: V - te.distance.x, y: X - te.distance.y };
        Y && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : zs(se, B));
        let ae = null;
        if ($ && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + H[0][0], me = pe.x + te.measured.width - Z.x2 + H[1][0], Re = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [be, Re],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = AN({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: D
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(u, !0), y && (o || z || !A && Q))) {
        const [K, te] = Gf({
          nodeId: A,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, K, te), z == null || z(y, K, te), A || Q == null || Q(y, te);
      }
    }
    async function q() {
      if (!h)
        return;
      const { transform: V, panBy: X, autoPanSpeed: L, autoPanOnNodeDrag: H } = t();
      if (!H) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [B, Y] = IN(d, h, L);
      (B !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - B / V[2], a.y = (a.y ?? 0) - Y / V[2], await X({ x: B, y: Y }) && O(a)), l = requestAnimationFrame(q);
    }
    function U(V) {
      var $;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: B, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: z, onNodeDragStart: Q, onSelectionDragStart: D, unselectNodesAndEdges: W } = t();
      p = !0, (!z || !R) && !L && A && (($ = X.get(A)) != null && $.selected || W()), R && z && A && (e == null || e(A));
      const ie = xs(V.sourceEvent, { transform: B, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = TD(X, H, ie, A), u.size > 0 && (r || Q || !A && D)) {
        const [Z, ee] = Gf({
          nodeId: A,
          dragItems: u,
          nodeLookup: X
        });
        r == null || r(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), A || D == null || D(V.sourceEvent, ee);
      }
    }
    const j = uN().clickDistance(T).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: B, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, w = !1, E = !1, y = V.sourceEvent, L === 0 && U(V), a = xs(V.sourceEvent, { transform: H, snapGrid: B, snapToGrid: Y, containerBounds: h }), d = pn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: B, nodeDragThreshold: Y, nodeLookup: M } = t(), z = xs(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: B, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      A && !M.has(A)) && (w = !0), !w) {
        if (!f && X && p && (f = !0, q()), !p) {
          const Q = pn(V.sourceEvent, h), D = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(D * D + W * W) > Y && U(V);
        }
        (a.x !== z.xSnapped || a.y !== z.ySnapped) && u && p && (d = pn(V.sourceEvent, h), O(z));
      }
    }).on("end", (V) => {
      if (!(!p || w) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: B } = t();
        if (E && (L(u, !1), E = !1), s || H || !A && B) {
          const [Y, M] = Gf({
            nodeId: A,
            dragItems: u,
            nodeLookup: X,
            dragging: !1
          });
          s == null || s(V.sourceEvent, u, Y, M), H == null || H(V.sourceEvent, Y, M), A || B == null || B(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const X = V.target;
      return !V.button && (!C || !a1(X, `.${C}`, k)) && (!_ || a1(X, _, k));
    });
    m.call(j);
  }
  function S() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: S
  };
}
function OD(e, t, r) {
  const o = [], s = {
    x: e.x - r,
    y: e.y - r,
    width: r * 2,
    height: r * 2
  };
  for (const a of t.values())
    Ns(s, ii(a)) > 0 && o.push(a);
  return o;
}
const LD = 250;
function DD(e, t, r, o) {
  var u, f;
  let s = [], a = 1 / 0;
  const l = OD(e, r, t + LD);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: w } = Ps(d, p, p.position, !0), E = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(w - e.y, 2));
      E > t || (E < a ? (s = [{ ...p, x: m, y: w }], a = E) : E === a && s.push({ ...p, x: m, y: w }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const d = o.type === "source" ? "target" : "source";
    return s.find((h) => h.type === d) ?? s[0];
  }
  return s[0];
}
function GN(e, t, r, o, s, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = s === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (r ? u == null ? void 0 : u.find((m) => m.id === r) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Ps(l, f, f.position, !0) } : f;
}
function YN(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function qD(e, t) {
  let r = null;
  return t ? r = !0 : e && !t && (r = !1), r;
}
const KN = () => !0;
function jD(e, { connectionMode: t, connectionRadius: r, handleId: o, nodeId: s, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: w, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: S = KN, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: R, autoPanSpeed: A, dragThreshold: T = 1, handleDomNode: O }) {
  const q = DN(e.target);
  let U = 0, j;
  const { x: V, y: X } = pn(e), L = YN(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let B = !1;
  if (!H || !L)
    return;
  const Y = GN(s, L, o, f, t);
  if (!Y)
    return;
  let M = pn(e, H), z = !1, Q = null, D = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = IN(M, H, A);
    m({ x: ce, y: de }), U = requestAnimationFrame(ie);
  }
  const $ = {
    ...Y,
    nodeId: s,
    type: L,
    position: Y.position
  }, Z = f.get(s);
  let K = {
    inProgress: !0,
    isValid: null,
    from: Ps(Z, $, ye.Left, !0),
    fromHandle: $,
    fromPosition: $.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: Kx[$.position],
    toNode: null,
    pointer: M
  };
  function te() {
    B = !0, _(K), E == null || E(e, { nodeId: s, handleId: o, handleType: L });
  }
  T === 0 && te();
  function se(ce) {
    if (!B) {
      const { x: me, y: Re } = pn(ce), Ee = me - V, Qe = Re - X;
      if (!(Ee * Ee + Qe * Qe > T * T))
        return;
      te();
    }
    if (!R() || !$) {
      ae(ce);
      return;
    }
    const de = k();
    M = pn(ce, H), j = DD(Fs(M, de, !1, [1, 1]), r, f, $), z || (ie(), z = !0);
    const pe = XN(ce, {
      handle: j,
      connectionMode: t,
      fromNodeId: s,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: S,
      doc: q,
      lib: d,
      flowId: p,
      nodeLookup: f
    });
    W = pe.handleDomNode, Q = pe.connection, D = qD(!!j, pe.isValid);
    const be = {
      // from stays the same
      ...K,
      isValid: D,
      to: pe.toHandle && D ? Ul({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: D && pe.toHandle ? pe.toHandle.position : Kx[$.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(be), K = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (B) {
        (j || W) && Q && D && (y == null || y(Q));
        const { inProgress: de, ...pe } = K, be = {
          ...pe,
          toPosition: K.toHandle ? K.toPosition : null
        };
        x == null || x(ce, be), a && (C == null || C(ce, be));
      }
      w(), cancelAnimationFrame(U), z = !1, D = !1, Q = null, W = null, q.removeEventListener("mousemove", se), q.removeEventListener("mouseup", ae), q.removeEventListener("touchmove", se), q.removeEventListener("touchend", ae);
    }
  }
  q.addEventListener("mousemove", se), q.addEventListener("mouseup", ae), q.addEventListener("touchmove", se), q.addEventListener("touchend", ae);
}
function XN(e, { handle: t, connectionMode: r, fromNodeId: o, fromHandleId: s, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = KN, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: w, y: E } = pn(e), y = l.elementFromPoint(w, E), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = YN(void 0, x), _ = x.getAttribute("data-nodeid"), k = x.getAttribute("data-handleid"), R = x.classList.contains("connectable"), A = x.classList.contains("connectableend");
    if (!_ || !C)
      return S;
    const T = {
      source: p ? _ : o,
      sourceHandle: p ? k : s,
      target: p ? o : _,
      targetHandle: p ? s : k
    };
    S.connection = T;
    const q = R && A && (r === ri.Strict ? p && C === "source" || !p && C === "target" : _ !== o || k !== s);
    S.isValid = q && d(T), S.toHandle = GN(_, C, k, h, r, !0);
  }
  return S;
}
const Bv = {
  onPointerDown: jD,
  isValid: XN
};
function zD({ domNode: e, panZoom: t, getTransform: r, getViewScale: o }) {
  const s = qt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: w = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = r(), R = _.sourceEvent.ctrlKey && Rs() ? 10 : 1, A = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, T = k[2] * Math.pow(2, A * R);
      t.scaleTo(T);
    };
    let y = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, S = (_) => {
      const k = r();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const R = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], A = [R[0] - y[0], R[1] - y[1]];
      y = R;
      const T = o() * Math.max(k[2], Math.log(k[2])) * (w ? -1 : 1), O = {
        x: k[0] - A[0] * T,
        y: k[1] - A[1] * T
      }, q = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: k[2]
      }, q, u);
    }, C = EN().on("start", x).on("zoom", p ? S : null).on("zoom.wheel", m ? E : null);
    s.call(C, {});
  }
  function l() {
    s.on("zoom", null);
  }
  return {
    update: a,
    destroy: l,
    pointer: fn
  };
}
const fu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Yf = ({ x: e, y: t, zoom: r }) => lu.translate(e, t).scale(r), Ko = (e, t) => e.target.closest(`.${t}`), QN = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), FD = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Kf = (e, t = 0, r = FD, o = () => {
}) => {
  const s = typeof t == "number" && t > 0;
  return s || o(), s ? e.transition().duration(t).ease(r).on("end", o) : e;
}, ZN = (e) => {
  const t = e.ctrlKey && Rs() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function $D({ zoomPanValues: e, noWheelClassName: t, d3Selection: r, d3Zoom: o, panOnScrollMode: s, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (Ko(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = r.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = fn(h), S = ZN(h), C = p * Math.pow(2, S);
      o.scaleTo(r, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let w = s === no.Vertical ? 0 : h.deltaX * m, E = s === no.Horizontal ? 0 : h.deltaY * m;
    !Rs() && h.shiftKey && s !== no.Vertical && (w = h.deltaY * m, E = 0), o.translateBy(
      r,
      -(w / p) * a,
      -(E / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = fu(r.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function BD({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: r }) {
  return function(o, s) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = Ko(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), r.call(this, o, s);
  };
}
function VD({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: r }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const s = fu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), r && (r == null || r(o.sourceEvent, s));
  };
}
function HD({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: r, onTransformChange: o, onPanZoom: s }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(r && QN(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), s && !((u = a.sourceEvent) != null && u.internal) && (s == null || s(a.sourceEvent, fu(a.transform)));
  };
}
function WD({ zoomPanValues: e, panOnDrag: t, panOnScroll: r, onDraggingChange: o, onPanZoomEnd: s, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && QN(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), s)) {
      const f = fu(l.transform);
      e.prevViewport = f, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          s == null || s(l.sourceEvent, f);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        r ? 150 : 0
      );
    }
  };
}
function UD({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: r, panOnDrag: o, panOnScroll: s, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var x;
    const m = e || t, w = r && p.ctrlKey, E = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (Ko(p, `${d}-flow__node`) || Ko(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !s && !a && !r || l || h && !E || Ko(p, u) && E || Ko(p, f) && (!E || s && E && !e) || !r && p.ctrlKey && E)
      return !1;
    if (!r && p.type === "touchstart" && ((x = p.touches) == null ? void 0 : x.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !s && !w && E || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || E) && y;
  };
}
function GD({ domNode: e, minZoom: t, maxZoom: r, translateExtent: o, viewport: s, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = EN().scaleExtent([t, r]).translateExtent(o), m = qt(e).call(p);
  C({
    x: s.x,
    y: s.y,
    zoom: oi(s.zoom, t, r)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const w = m.on("wheel.zoom"), E = m.on("dblclick.zoom");
  p.wheelDelta(ZN);
  function y(j, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Al).transform(Kf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), j);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: j, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: B, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: Q, zoomOnScroll: D, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: $, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && S();
    const se = H && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !hn(K) || K < 0 ? 0 : K);
    const ae = se ? $D({
      zoomPanValues: d,
      noWheelClassName: j,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: Y,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : BD({
      noWheelClassName: j,
      preventScrolling: z,
      d3ZoomHandler: w
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = VD({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = HD({
        zoomPanValues: d,
        panOnDrag: B,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const be = WD({
        zoomPanValues: d,
        panOnDrag: B,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", be);
    }
    const ce = UD({
      zoomActivationKeyPressed: ie,
      panOnDrag: B,
      zoomOnScroll: D,
      panOnScroll: H,
      zoomOnDoubleClick: W,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: V,
      noWheelClassName: j,
      lib: $,
      connectionInProgress: ee
    });
    p.filter(ce), W ? m.on("dblclick.zoom", E) : m.on("dblclick.zoom", null);
  }
  function S() {
    p.on("zoom", null);
  }
  async function C(j, V, X) {
    const L = Yf(j), H = p == null ? void 0 : p.constrain()(L, V, X);
    return H && await y(H), new Promise((B) => B(H));
  }
  async function _(j, V) {
    const X = Yf(j);
    return await y(X, V), new Promise((L) => L(X));
  }
  function k(j) {
    if (m) {
      const V = Yf(j), X = m.property("__zoom");
      (X.k !== j.zoom || X.x !== j.x || X.y !== j.y) && (p == null || p.transform(m, V, null, { sync: !0 }));
    }
  }
  function R() {
    const j = m ? SN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: j.x, y: j.y, zoom: j.k };
  }
  function A(j, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Al).scaleTo(Kf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), j);
    }) : Promise.resolve(!1);
  }
  function T(j, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Al).scaleBy(Kf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), j);
    }) : Promise.resolve(!1);
  }
  function O(j) {
    p == null || p.scaleExtent(j);
  }
  function q(j) {
    p == null || p.translateExtent(j);
  }
  function U(j) {
    const V = !hn(j) || j < 0 ? 0 : j;
    p == null || p.clickDistance(V);
  }
  return {
    update: x,
    destroy: S,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: R,
    scaleTo: A,
    scaleBy: T,
    setScaleExtent: O,
    setTranslateExtent: q,
    syncViewport: k,
    setClickDistance: U
  };
}
var ai;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ai || (ai = {}));
function YD({ width: e, prevWidth: t, height: r, prevHeight: o, affectsX: s, affectsY: a }) {
  const l = e - t, u = r - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && s && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function l1(e) {
  const t = e.includes("right") || e.includes("left"), r = e.includes("bottom") || e.includes("top"), o = e.includes("left"), s = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: r,
    affectsX: o,
    affectsY: s
  };
}
function br(e, t) {
  return Math.max(0, t - e);
}
function Sr(e, t) {
  return Math.max(0, e - t);
}
function yl(e, t, r) {
  return Math.max(0, t - e, e - r);
}
function u1(e, t) {
  return e ? !t : t;
}
function KD(e, t, r, o, s, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: w, ySnapped: E } = r, { minWidth: y, maxWidth: x, minHeight: S, maxHeight: C } = o, { x: _, y: k, width: R, height: A, aspectRatio: T } = e;
  let O = Math.floor(h ? w - e.pointerX : 0), q = Math.floor(p ? E - e.pointerY : 0);
  const U = R + (f ? -O : O), j = A + (d ? -q : q), V = -a[0] * R, X = -a[1] * A;
  let L = yl(U, y, x), H = yl(j, S, C);
  if (l) {
    let M = 0, z = 0;
    f && O < 0 ? M = br(_ + O + V, l[0][0]) : !f && O > 0 && (M = Sr(_ + U + V, l[1][0])), d && q < 0 ? z = br(k + q + X, l[0][1]) : !d && q > 0 && (z = Sr(k + j + X, l[1][1])), L = Math.max(L, M), H = Math.max(H, z);
  }
  if (u) {
    let M = 0, z = 0;
    f && O > 0 ? M = Sr(_ + O, u[0][0]) : !f && O < 0 && (M = br(_ + U, u[1][0])), d && q > 0 ? z = Sr(k + q, u[0][1]) : !d && q < 0 && (z = br(k + j, u[1][1])), L = Math.max(L, M), H = Math.max(H, z);
  }
  if (s) {
    if (h) {
      const M = yl(U / T, S, C) * T;
      if (L = Math.max(L, M), l) {
        let z = 0;
        !f && !d || f && !d && m ? z = Sr(k + X + U / T, l[1][1]) * T : z = br(k + X + (f ? O : -O) / T, l[0][1]) * T, L = Math.max(L, z);
      }
      if (u) {
        let z = 0;
        !f && !d || f && !d && m ? z = br(k + U / T, u[1][1]) * T : z = Sr(k + (f ? O : -O) / T, u[0][1]) * T, L = Math.max(L, z);
      }
    }
    if (p) {
      const M = yl(j * T, y, x) / T;
      if (H = Math.max(H, M), l) {
        let z = 0;
        !f && !d || d && !f && m ? z = Sr(_ + j * T + V, l[1][0]) / T : z = br(_ + (d ? q : -q) * T + V, l[0][0]) / T, H = Math.max(H, z);
      }
      if (u) {
        let z = 0;
        !f && !d || d && !f && m ? z = br(_ + j * T, u[1][0]) / T : z = Sr(_ + (d ? q : -q) * T, u[0][0]) / T, H = Math.max(H, z);
      }
    }
  }
  q = q + (q < 0 ? H : -H), O = O + (O < 0 ? L : -L), s && (m ? U > j * T ? q = (u1(f, d) ? -O : O) / T : O = (u1(f, d) ? -q : q) * T : h ? (q = O / T, d = f) : (O = q * T, f = d));
  const B = f ? _ + O : _, Y = d ? k + q : k;
  return {
    width: R + (f ? -O : O),
    height: A + (d ? -q : q),
    x: a[0] * O * (f ? -1 : 1) + B,
    y: a[1] * q * (d ? -1 : 1) + Y
  };
}
const JN = { width: 0, height: 0, x: 0, y: 0 }, XD = {
  ...JN,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function QD(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function ZD(e, t, r) {
  const o = t.position.x + e.position.x, s = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = r[0] * a, f = r[1] * l;
  return [
    [o - u, s - f],
    [o + a - u, s + l - f]
  ];
}
function JD({ domNode: e, nodeId: t, getStoreItems: r, onChange: o, onEnd: s }) {
  const a = qt(e);
  let l = {
    controlDirection: l1("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: p, resizeDirection: m, onResizeStart: w, onResize: E, onResizeEnd: y, shouldResize: x }) {
    let S = { ...JN }, C = { ...XD };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: l1(d)
    };
    let _, k = null, R = [], A, T, O, q = !1;
    const U = uN().on("start", (j) => {
      const { nodeLookup: V, transform: X, snapGrid: L, snapToGrid: H, nodeOrigin: B, paneDomNode: Y } = r();
      if (_ = V.get(t), !_)
        return;
      k = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: z } = xs(j.sourceEvent, {
        transform: X,
        snapGrid: L,
        snapToGrid: H,
        containerBounds: k
      });
      S = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, C = {
        ...S,
        pointerX: M,
        pointerY: z,
        aspectRatio: S.width / S.height
      }, A = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (A = V.get(_.parentId), T = A && _.extent === "parent" ? QD(A) : void 0), R = [], O = void 0;
      for (const [Q, D] of V)
        if (D.parentId === t && (R.push({
          id: Q,
          position: { ...D.position },
          extent: D.extent
        }), D.extent === "parent" || D.expandParent)) {
          const W = ZD(D, _, D.origin ?? B);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      w == null || w(j, { ...S });
    }).on("drag", (j) => {
      const { transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H } = r(), B = xs(j.sourceEvent, {
        transform: V,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: k
      }), Y = [];
      if (!_)
        return;
      const { x: M, y: z, width: Q, height: D } = S, W = {}, ie = _.origin ?? H, { width: $, height: Z, x: ee, y: K } = KD(C, l.controlDirection, B, l.boundaries, l.keepAspectRatio, ie, T, O), te = $ !== Q, se = Z !== D, ae = ee !== M && te, ce = K !== z && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : S.x, W.y = ce ? K : S.y, S.x = W.x, S.y = W.y, R.length > 0)) {
        const me = ee - M, Re = K - z;
        for (const Ee of R)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * ($ - Q),
            y: Ee.position.y - Re + ie[1] * (Z - D)
          }, Y.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? $ : S.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : S.height, S.width = W.width, S.height = W.height), A && _.expandParent) {
        const me = ie[0] * (W.width ?? 0);
        W.x && W.x < me && (S.x = me, C.x = C.x - (W.x - me));
        const Re = ie[1] * (W.height ?? 0);
        W.y && W.y < Re && (S.y = Re, C.y = C.y - (W.y - Re));
      }
      const de = YD({
        width: S.width,
        prevWidth: Q,
        height: S.height,
        prevHeight: D,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ...S, direction: de };
      (x == null ? void 0 : x(j, pe)) !== !1 && (q = !0, E == null || E(j, pe), o(W, Y));
    }).on("end", (j) => {
      q && (y == null || y(j, { ...S }), s == null || s({ ...S }), q = !1);
    });
    a.call(U);
  }
  function f() {
    a.on(".drag", null);
  }
  return {
    update: u,
    destroy: f
  };
}
var Xf = { exports: {} }, Qf = {}, Zf = { exports: {} }, Jf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function eq() {
  if (c1) return Jf;
  c1 = 1;
  var e = Os();
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, s = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(p, m) {
    var w = m(), E = o({ inst: { value: w, getSnapshot: m } }), y = E[0].inst, x = E[1];
    return a(
      function() {
        y.value = w, y.getSnapshot = m, f(y) && x({ inst: y });
      },
      [p, w, m]
    ), s(
      function() {
        return f(y) && x({ inst: y }), p(function() {
          f(y) && x({ inst: y });
        });
      },
      [p]
    ), l(w), w;
  }
  function f(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var w = m();
      return !r(p, w);
    } catch {
      return !0;
    }
  }
  function d(p, m) {
    return m();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : u;
  return Jf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Jf;
}
var f1;
function tq() {
  return f1 || (f1 = 1, Zf.exports = eq()), Zf.exports;
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
var d1;
function nq() {
  if (d1) return Qf;
  d1 = 1;
  var e = Os(), t = tq();
  function r(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Qf.useSyncExternalStoreWithSelector = function(d, h, p, m, w) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function S(A) {
          if (!C) {
            if (C = !0, _ = A, A = m(A), w !== void 0 && y.hasValue) {
              var T = y.value;
              if (w(T, A))
                return k = T;
            }
            return k = A;
          }
          if (T = k, o(_, A)) return T;
          var O = m(A);
          return w !== void 0 && w(T, O) ? (_ = A, T) : (_ = A, k = O);
        }
        var C = !1, _, k, R = p === void 0 ? null : p;
        return [
          function() {
            return S(h());
          },
          R === null ? void 0 : function() {
            return S(R());
          }
        ];
      },
      [h, p, m, w]
    );
    var x = s(d, E[0], E[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, Qf;
}
var h1;
function rq() {
  return h1 || (h1 = 1, Xf.exports = nq()), Xf.exports;
}
var oq = rq();
const iq = /* @__PURE__ */ ny(oq), sq = {}, p1 = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const w = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), r.forEach((E) => E(t, w));
    }
  }, s = () => t, f = { setState: o, getState: s, getInitialState: () => d, subscribe: (h) => (r.add(h), () => r.delete(h)), destroy: () => {
    (sq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, d = t = e(o, s, f);
  return f;
}, aq = (e) => e ? p1(e) : p1, { useDebugValue: lq } = cn, { useSyncExternalStoreWithSelector: uq } = iq, cq = (e) => e;
function eR(e, t = cq, r) {
  const o = uq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return lq(o), o;
}
const g1 = (e, t) => {
  const r = aq(e), o = (s, a = t) => eR(r, s, a);
  return Object.assign(o, r), o;
}, fq = (e, t) => e ? g1(e, t) : g1;
function Ye(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [o, s] of e)
      if (!Object.is(s, t.get(o)))
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
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !1;
  for (const o of r)
    if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e[o], t[o]))
      return !1;
  return !0;
}
var $s = Gk();
const dq = /* @__PURE__ */ ny($s), du = N.createContext(null), hq = du.Provider, tR = Tn.error001();
function Ie(e, t) {
  const r = N.useContext(du);
  if (r === null)
    throw new Error(tR);
  return eR(r, e, t);
}
function Fe() {
  const e = N.useContext(du);
  if (e === null)
    throw new Error(tR);
  return N.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const m1 = { display: "none" }, pq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, nR = "react-flow__node-desc", rR = "react-flow__edge-desc", gq = "react-flow__aria-live", mq = (e) => e.ariaLiveMessage, vq = (e) => e.ariaLabelConfig;
function yq({ rfId: e }) {
  const t = Ie(mq);
  return I.jsx("div", { id: `${gq}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: pq, children: t });
}
function wq({ rfId: e, disableKeyboardA11y: t }) {
  const r = Ie(vq);
  return I.jsxs(I.Fragment, { children: [I.jsx("div", { id: `${nR}-${e}`, style: m1, children: t ? r["node.a11yDescription.default"] : r["node.a11yDescription.keyboardDisabled"] }), I.jsx("div", { id: `${rR}-${e}`, style: m1, children: r["edge.a11yDescription.default"] }), !t && I.jsx(yq, { rfId: e })] });
}
const hu = N.forwardRef(({ position: e = "top-left", children: t, className: r, style: o, ...s }, a) => {
  const l = `${e}`.split("-");
  return I.jsx("div", { className: tt(["react-flow__panel", r, ...l]), style: o, ref: a, ...s, children: t });
});
hu.displayName = "Panel";
function xq({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : I.jsx(hu, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: I.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const _q = (e) => {
  const t = [], r = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && r.push(o);
  return { selectedNodes: t, selectedEdges: r };
}, wl = (e) => e.id;
function bq(e, t) {
  return Ye(e.selectedNodes.map(wl), t.selectedNodes.map(wl)) && Ye(e.selectedEdges.map(wl), t.selectedEdges.map(wl));
}
function Sq({ onSelectionChange: e }) {
  const t = Fe(), { selectedNodes: r, selectedEdges: o } = Ie(_q, bq);
  return N.useEffect(() => {
    const s = { nodes: r, edges: o };
    e == null || e(s), t.getState().onSelectionChangeHandlers.forEach((a) => a(s));
  }, [r, o, e]), null;
}
const Eq = (e) => !!e.onSelectionChangeHandlers;
function Cq({ onSelectionChange: e }) {
  const t = Ie(Eq);
  return e || t ? I.jsx(Sq, { onSelectionChange: e }) : null;
}
const oR = [0, 0], kq = { x: 0, y: 0, zoom: 1 }, Nq = [
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
], v1 = [...Nq, "rfId"], Rq = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), y1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Cs,
  nodeOrigin: oR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Pq(e) {
  const { setNodes: t, setEdges: r, setMinZoom: o, setMaxZoom: s, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ie(Rq, Ye), d = Fe();
  N.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = y1, u();
  }), []);
  const h = N.useRef(y1);
  return N.useEffect(
    () => {
      for (const p of v1) {
        const m = e[p], w = h.current[p];
        m !== w && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? r(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? s(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: fD(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    v1.map((p) => e[p])
  ), null;
}
function w1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Aq(e) {
  var o;
  const [t, r] = N.useState(e === "system" ? null : e);
  return N.useEffect(() => {
    if (e !== "system") {
      r(e);
      return;
    }
    const s = w1(), a = () => r(s != null && s.matches ? "dark" : "light");
    return a(), s == null || s.addEventListener("change", a), () => {
      s == null || s.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = w1()) != null && o.matches ? "dark" : "light";
}
const x1 = typeof document < "u" ? document : null;
function As(e = null, t = { target: x1, actInsideInputWithModifier: !0 }) {
  const [r, o] = N.useState(!1), s = N.useRef(!1), a = N.useRef(/* @__PURE__ */ new Set([])), [l, u] = N.useMemo(() => {
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
  return N.useEffect(() => {
    const f = (t == null ? void 0 : t.target) ?? x1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (w) => {
        var x, S;
        if (s.current = w.ctrlKey || w.metaKey || w.shiftKey || w.altKey, (!s.current || s.current && !d) && qN(w))
          return !1;
        const y = b1(w.code, u);
        if (a.current.add(w[y]), _1(l, a.current, !1)) {
          const C = ((S = (x = w.composedPath) == null ? void 0 : x.call(w)) == null ? void 0 : S[0]) || w.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (s.current || !_) && w.preventDefault(), o(!0);
        }
      }, p = (w) => {
        const E = b1(w.code, u);
        _1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(w[E]), w.key === "Meta" && a.current.clear(), s.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), r;
}
function _1(e, t, r) {
  return e.filter((o) => r || o.length === t.size).some((o) => o.every((s) => t.has(s)));
}
function b1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Tq = () => {
  const e = Fe();
  return N.useMemo(() => ({
    zoomIn: (t) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, r) => {
      const { panZoom: o } = e.getState();
      return o ? o.scaleTo(t, { duration: r == null ? void 0 : r.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, r) => {
      const { transform: [o, s, a], panZoom: l } = e.getState();
      return l ? (await l.setViewport({
        x: t.x ?? o,
        y: t.y ?? s,
        zoom: t.zoom ?? a
      }, r), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, r, o] = e.getState().transform;
      return { x: t, y: r, zoom: o };
    },
    setCenter: async (t, r, o) => e.getState().setCenter(t, r, o),
    fitBounds: async (t, r) => {
      const { width: o, height: s, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = hy(t, o, s, a, l, (r == null ? void 0 : r.padding) ?? 0.1);
      return u ? (await u.setViewport(f, {
        duration: r == null ? void 0 : r.duration,
        ease: r == null ? void 0 : r.ease,
        interpolate: r == null ? void 0 : r.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, r = {}) => {
      const { transform: o, snapGrid: s, snapToGrid: a, domNode: l } = e.getState();
      if (!l)
        return t;
      const { x: u, y: f } = l.getBoundingClientRect(), d = {
        x: t.x - u,
        y: t.y - f
      }, h = r.snapGrid ?? s, p = r.snapToGrid ?? a;
      return Fs(d, o, p, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: r, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: s, y: a } = o.getBoundingClientRect(), l = Ul(t, r);
      return {
        x: l.x + s,
        y: l.y + a
      };
    }
  }), []);
};
function iR(e, t) {
  const r = [], o = /* @__PURE__ */ new Map(), s = [];
  for (const a of e)
    if (a.type === "add") {
      s.push(a);
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
      r.push(a);
      continue;
    }
    if (l[0].type === "remove")
      continue;
    if (l[0].type === "replace") {
      r.push({ ...l[0].item });
      continue;
    }
    const u = { ...a };
    for (const f of l)
      Iq(f, u);
    r.push(u);
  }
  return s.length && s.forEach((a) => {
    a.index !== void 0 ? r.splice(a.index, 0, { ...a.item }) : r.push({ ...a.item });
  }), r;
}
function Iq(e, t) {
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
function Mq(e, t) {
  return iR(e, t);
}
function Oq(e, t) {
  return iR(e, t);
}
function Jr(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Xo(e, t = /* @__PURE__ */ new Set(), r = !1) {
  const o = [];
  for (const [s, a] of e) {
    const l = t.has(s);
    !(a.selected === void 0 && !l) && a.selected !== l && (r && (a.selected = l), o.push(Jr(a.id, l)));
  }
  return o;
}
function S1({ items: e = [], lookup: t }) {
  var s;
  const r = [], o = new Map(e.map((a) => [a.id, a]));
  for (const [a, l] of e.entries()) {
    const u = t.get(l.id), f = ((s = u == null ? void 0 : u.internals) == null ? void 0 : s.userNode) ?? u;
    f !== void 0 && f !== l && r.push({ id: l.id, item: l, type: "replace" }), f === void 0 && r.push({ item: l, type: "add", index: a });
  }
  for (const [a] of t)
    o.get(a) === void 0 && r.push({ id: a, type: "remove" });
  return r;
}
function E1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const C1 = (e) => tD(e), Lq = (e) => PN(e);
function sR(e) {
  return N.forwardRef(e);
}
const Dq = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function k1(e) {
  const [t, r] = N.useState(BigInt(0)), [o] = N.useState(() => qq(() => r((s) => s + BigInt(1))));
  return Dq(() => {
    const s = o.get();
    s.length && (e(s), o.reset());
  }, [t]), o;
}
function qq(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (r) => {
      t.push(r), e();
    }
  };
}
const aR = N.createContext(null);
function jq({ children: e }) {
  const t = Fe(), r = N.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: w } = t.getState();
    let E = f;
    for (const x of u)
      E = typeof x == "function" ? x(E) : x;
    const y = S1({
      items: E,
      lookup: m
    });
    h && d(E), y.length > 0 ? p == null || p(y) : w && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: S, setNodes: C } = t.getState();
      x && C(S);
    });
  }, []), o = k1(r), s = N.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let w = f;
    for (const E of u)
      w = typeof E == "function" ? E(w) : E;
    h ? d(w) : p && p(S1({
      items: w,
      lookup: m
    }));
  }, []), a = k1(s), l = N.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return I.jsx(aR.Provider, { value: l, children: e });
}
function zq() {
  const e = N.useContext(aR);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Fq = (e) => !!e.panZoom;
function wy() {
  const e = Tq(), t = Fe(), r = zq(), o = Ie(Fq), s = N.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      r.nodeQueue.push(p);
    }, u = (p) => {
      r.edgeQueue.push(p);
    }, f = (p) => {
      var S, C;
      const { nodeLookup: m, nodeOrigin: w } = t.getState(), E = C1(p) ? p : m.get(p.id), y = E.parentId ? LN(E.position, E.measured, E.parentId, m, w) : E.position, x = {
        ...E,
        position: y,
        width: ((S = E.measured) == null ? void 0 : S.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return ii(x);
    }, d = (p, m, w = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return w.replace && C1(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (p, m, w = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return w.replace && Lq(x) ? x : { ...y, ...x };
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
        r.nodeQueue.push((w) => [...w, ...m]);
      },
      addEdges: (p) => {
        const m = Array.isArray(p) ? p : [p];
        r.edgeQueue.push((w) => [...w, ...m]);
      },
      toObject: () => {
        const { nodes: p = [], edges: m = [], transform: w } = t.getState(), [E, y, x] = w;
        return {
          nodes: p.map((S) => ({ ...S })),
          edges: m.map((S) => ({ ...S })),
          viewport: {
            x: E,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: w, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: S, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: R, edges: A } = await sD({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: w,
          edges: E,
          onBeforeDelete: k
        }), T = A.length > 0, O = R.length > 0;
        if (T) {
          const q = A.map(E1);
          x == null || x(A), C(q);
        }
        if (O) {
          const q = R.map(E1);
          y == null || y(R), S(q);
        }
        return (O || T) && (_ == null || _({ nodes: R, edges: A })), { deletedNodes: R, deletedEdges: A };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, w) => {
        const E = Qx(p), y = E ? p : f(p), x = w !== void 0;
        return y ? (w || t.getState().nodes).filter((S) => {
          const C = t.getState().nodeLookup.get(S.id);
          if (C && !E && (S.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const _ = ii(x ? S : C), k = Ns(_, y);
          return m && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, w = !0) => {
        const y = Qx(p) ? p : f(p);
        if (!y)
          return !1;
        const x = Ns(y, m);
        return w && x > 0 || x >= m.width * m.height || x >= y.width * y.height;
      },
      updateNode: d,
      updateNodeData: (p, m, w = { replace: !1 }) => {
        d(p, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      updateEdge: h,
      updateEdgeData: (p, m, w = { replace: !1 }) => {
        h(p, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      getNodesBounds: (p) => {
        const { nodeLookup: m, nodeOrigin: w } = t.getState();
        return nD(p, { nodeLookup: m, nodeOrigin: w });
      },
      getHandleConnections: ({ type: p, id: m, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}-${p}${m ? `-${m}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      getNodeConnections: ({ type: p, handleId: m, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}${p ? m ? `-${p}-${m}` : `-${p}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      fitView: async (p) => {
        const m = t.getState().fitViewResolver ?? cD();
        return t.setState({ fitViewQueued: !0, fitViewOptions: p, fitViewResolver: m }), r.nodeQueue.push((w) => [...w]), m.promise;
      }
    };
  }, []);
  return N.useMemo(() => ({
    ...s,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const N1 = (e) => e.selected, $q = typeof window < "u" ? window : void 0;
function Bq({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const r = Fe(), { deleteElements: o } = wy(), s = As(e, { actInsideInputWithModifier: !1 }), a = As(t, { target: $q });
  N.useEffect(() => {
    if (s) {
      const { edges: l, nodes: u } = r.getState();
      o({ nodes: u.filter(N1), edges: l.filter(N1) }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), N.useEffect(() => {
    r.setState({ multiSelectionActive: a });
  }, [a]);
}
function Vq(e) {
  const t = Fe();
  N.useEffect(() => {
    const r = () => {
      var s, a, l, u;
      if (!e.current || !(((a = (s = e.current).checkVisibility) == null ? void 0 : a.call(s)) ?? !0))
        return !1;
      const o = py(e.current);
      (o.height === 0 || o.width === 0) && ((u = (l = t.getState()).onError) == null || u.call(l, "004", Tn.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
    };
    if (e.current) {
      r(), window.addEventListener("resize", r);
      const o = new ResizeObserver(() => r());
      return o.observe(e.current), () => {
        window.removeEventListener("resize", r), o && e.current && o.unobserve(e.current);
      };
    }
  }, []);
}
const pu = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Hq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function Wq({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: r = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: a = no.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: w = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: S, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const R = Fe(), A = N.useRef(null), { userSelectionActive: T, lib: O, connectionInProgress: q } = Ie(Hq, Ye), U = As(m), j = N.useRef();
  Vq(A);
  const V = N.useCallback((X) => {
    S == null || S({ x: X[0], y: X[1], zoom: X[2] }), C || R.setState({ transform: X });
  }, [S, C]);
  return N.useEffect(() => {
    if (A.current) {
      j.current = GD({
        domNode: A.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (B) => R.setState({ paneDragging: B }),
        onPanZoomStart: (B, Y) => {
          const { onViewportChangeStart: M, onMoveStart: z } = R.getState();
          z == null || z(B, Y), M == null || M(Y);
        },
        onPanZoom: (B, Y) => {
          const { onViewportChange: M, onMove: z } = R.getState();
          z == null || z(B, Y), M == null || M(Y);
        },
        onPanZoomEnd: (B, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: z } = R.getState();
          z == null || z(B, Y), M == null || M(Y);
        }
      });
      const { x: X, y: L, zoom: H } = j.current.getViewport();
      return R.setState({
        panZoom: j.current,
        transform: [X, L, H],
        domNode: A.current.closest(".react-flow")
      }), () => {
        var B;
        (B = j.current) == null || B.destroy();
      };
    }
  }, []), N.useEffect(() => {
    var X;
    (X = j.current) == null || X.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: r,
      panOnScroll: o,
      panOnScrollSpeed: s,
      panOnScrollMode: a,
      zoomOnDoubleClick: l,
      panOnDrag: u,
      zoomActivationKeyPressed: U,
      preventScrolling: w,
      noPanClassName: x,
      userSelectionActive: T,
      noWheelClassName: y,
      lib: O,
      onTransformChange: V,
      connectionInProgress: q,
      selectionOnDrag: k,
      paneClickDistance: _
    });
  }, [
    e,
    t,
    r,
    o,
    s,
    a,
    l,
    u,
    U,
    w,
    x,
    T,
    y,
    O,
    V,
    q,
    k,
    _
  ]), I.jsx("div", { className: "react-flow__renderer", ref: A, style: pu, children: E });
}
const Uq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Gq() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(Uq, Ye);
  return e && t ? I.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const ed = (e, t) => (r) => {
  r.target === t.current && (e == null || e(r));
}, Yq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function Kq({ isSelecting: e, selectionKeyPressed: t, selectionMode: r = ks.Full, panOnDrag: o, paneClickDistance: s, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: w, children: E }) {
  const y = Fe(), { userSelectionActive: x, elementsSelectable: S, dragging: C, connectionInProgress: _ } = Ie(Yq, Ye), k = S && (e || x), R = N.useRef(null), A = N.useRef(), T = N.useRef(/* @__PURE__ */ new Set()), O = N.useRef(/* @__PURE__ */ new Set()), q = N.useRef(!1), U = (M) => {
    if (q.current || _) {
      q.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, j = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, V = h ? (M) => h(M) : void 0, X = (M) => {
    q.current && (M.stopPropagation(), q.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: z } = y.getState();
    if (A.current = z == null ? void 0 : z.getBoundingClientRect(), !A.current)
      return;
    const Q = M.target === R.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), q.current = !1;
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
  }, H = (M) => {
    const { userSelectionRect: z, transform: Q, nodeLookup: D, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: $, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: K } = y.getState();
    if (!A.current || !z)
      return;
    const { x: te, y: se } = pn(M.nativeEvent, A.current), { startX: ae, startY: ce } = z;
    if (!q.current) {
      const Re = t ? 0 : s;
      if (Math.hypot(te - ae, se - ce) <= Re)
        return;
      K(), l == null || l(M);
    }
    q.current = !0;
    const de = {
      startX: ae,
      startY: ce,
      x: te < ae ? te : ae,
      y: se < ce ? se : ce,
      width: Math.abs(te - ae),
      height: Math.abs(se - ce)
    }, pe = T.current, be = O.current;
    T.current = new Set(dy(D, de, Q, r === ks.Partial, !0).map((Re) => Re.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Re of T.current) {
      const Ee = ie.get(Re);
      if (Ee)
        for (const { edgeId: Qe } of Ee.values()) {
          const Ve = W.get(Qe);
          Ve && (Ve.selectable ?? me) && O.current.add(Qe);
        }
    }
    if (!Zx(pe, T.current)) {
      const Re = Xo(D, T.current, !0);
      $(Re);
    }
    if (!Zx(be, O.current)) {
      const Re = Xo(W, O.current);
      Z(Re);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, B = (M) => {
    var z, Q;
    M.button === 0 && ((Q = (z = M.target) == null ? void 0 : z.releasePointerCapture) == null || Q.call(z, M.pointerId), !x && M.target === R.current && y.getState().userSelectionRect && (U == null || U(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), q.current && (u == null || u(M), y.setState({
      nodesSelectionActive: T.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return I.jsxs("div", { className: tt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: k ? void 0 : ed(U, R), onContextMenu: ed(j, R), onWheel: ed(V, R), onPointerEnter: k ? void 0 : p, onPointerMove: k ? H : m, onPointerUp: k ? B : void 0, onPointerDownCapture: k ? L : void 0, onClickCapture: k ? X : void 0, onPointerLeave: w, ref: R, style: pu, children: [E, I.jsx(Gq, {})] });
}
function Vv({ id: e, store: t, unselect: r = !1, nodeRef: o }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: a, multiSelectionActive: l, nodeLookup: u, onError: f } = t.getState(), d = u.get(e);
  if (!d) {
    f == null || f("012", Tn.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), d.selected ? (r || d.selected && l) && (a({ nodes: [d], edges: [] }), requestAnimationFrame(() => {
    var h;
    return (h = o == null ? void 0 : o.current) == null ? void 0 : h.blur();
  })) : s([e]);
}
function lR({ nodeRef: e, disabled: t = !1, noDragClassName: r, handleSelector: o, nodeId: s, isSelectable: a, nodeClickDistance: l }) {
  const u = Fe(), [f, d] = N.useState(!1), h = N.useRef();
  return N.useEffect(() => {
    h.current = MD({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        Vv({
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
  }, []), N.useEffect(() => {
    var p, m;
    if (t)
      (p = h.current) == null || p.destroy();
    else if (e.current)
      return (m = h.current) == null || m.update({
        noDragClassName: r,
        handleSelector: o,
        domNode: e.current,
        isSelectable: a,
        nodeId: s,
        nodeClickDistance: l
      }), () => {
        var w;
        (w = h.current) == null || w.destroy();
      };
  }, [r, o, t, a, e, s]), f;
}
const Xq = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function uR() {
  const e = Fe();
  return N.useCallback((r) => {
    const { nodeExtent: o, snapToGrid: s, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = Xq(l), w = s ? a[0] : 5, E = s ? a[1] : 5, y = r.direction.x * w * r.factor, x = r.direction.y * E * r.factor;
    for (const [, S] of d) {
      if (!m(S))
        continue;
      let C = {
        x: S.internals.positionAbsolute.x + y,
        y: S.internals.positionAbsolute.y + x
      };
      s && (C = zs(C, a));
      const { position: _, positionAbsolute: k } = AN({
        nodeId: S.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      S.position = _, S.internals.positionAbsolute = k, p.set(S.id, S);
    }
    f(p);
  }, []);
}
const xy = N.createContext(null), Qq = xy.Provider;
xy.Consumer;
const cR = () => N.useContext(xy), Zq = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), Jq = (e, t, r) => (o) => {
  const { connectionClickStartHandle: s, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === r;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === r,
    connectingTo: h,
    clickConnecting: (s == null ? void 0 : s.nodeId) === e && (s == null ? void 0 : s.id) === t && (s == null ? void 0 : s.type) === r,
    isPossibleEndHandle: a === ri.Strict ? (u == null ? void 0 : u.type) !== r : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!s,
    valid: h && d
  };
};
function ej({ type: e = "source", position: t = ye.Top, isValidConnection: r, isConnectable: o = !0, isConnectableStart: s = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, w) {
  var H, B;
  const E = l || null, y = e === "target", x = Fe(), S = cR(), { connectOnClick: C, noPanClassName: _, rfId: k } = Ie(Zq, Ye), { connectingFrom: R, connectingTo: A, clickConnecting: T, isPossibleEndHandle: O, connectionInProcess: q, clickConnectionInProcess: U, valid: j } = Ie(Jq(S, E, e), Ye);
  S || (B = (H = x.getState()).onError) == null || B.call(H, "010", Tn.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: M, onConnect: z, hasDefaultEdges: Q } = x.getState(), D = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(vD(D, W));
    }
    z == null || z(D), u == null || u(D);
  }, X = (Y) => {
    if (!S)
      return;
    const M = jN(Y.nativeEvent);
    if (s && (M && Y.button === 0 || !M)) {
      const z = x.getState();
      Bv.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: z.autoPanOnConnect,
        connectionMode: z.connectionMode,
        connectionRadius: z.connectionRadius,
        domNode: z.domNode,
        nodeLookup: z.nodeLookup,
        lib: z.lib,
        isTarget: y,
        handleId: E,
        nodeId: S,
        flowId: z.rfId,
        panBy: z.panBy,
        cancelConnection: z.cancelConnection,
        onConnectStart: z.onConnectStart,
        onConnectEnd: z.onConnectEnd,
        updateConnection: z.updateConnection,
        onConnect: V,
        isValidConnection: r || z.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: z.autoPanSpeed,
        dragThreshold: z.connectionDragThreshold
      });
    }
    M ? h == null || h(Y) : p == null || p(Y);
  }, L = (Y) => {
    const { onClickConnectStart: M, onClickConnectEnd: z, connectionClickStartHandle: Q, connectionMode: D, isValidConnection: W, lib: ie, rfId: $, nodeLookup: Z, connection: ee } = x.getState();
    if (!S || !Q && !s)
      return;
    if (!Q) {
      M == null || M(Y.nativeEvent, { nodeId: S, handleId: E, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: S, type: e, id: E } });
      return;
    }
    const K = DN(Y.target), te = r || W, { connection: se, isValid: ae } = Bv.isValid(Y.nativeEvent, {
      handle: {
        nodeId: S,
        id: E,
        type: e
      },
      connectionMode: D,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id || null,
      fromType: Q.type,
      isValidConnection: te,
      flowId: $,
      doc: K,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && V(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, z == null || z(Y, ce), x.setState({ connectionClickStartHandle: null });
  };
  return I.jsx("div", { "data-handleid": E, "data-nodeid": S, "data-handlepos": t, "data-id": `${k}-${S}-${E}-${e}`, className: tt([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    _,
    d,
    {
      source: !y,
      target: y,
      connectable: o,
      connectablestart: s,
      connectableend: a,
      clickconnecting: T,
      connectingfrom: R,
      connectingto: A,
      valid: j,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!q || O) && (q || U ? a : s)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: w, ...m, children: f });
}
const Ts = N.memo(sR(ej));
function tj({ data: e, isConnectable: t, sourcePosition: r = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [e == null ? void 0 : e.label, I.jsx(Ts, { type: "source", position: r, isConnectable: t })] });
}
function nj({ data: e, isConnectable: t, targetPosition: r = ye.Top, sourcePosition: o = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ts, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label, I.jsx(Ts, { type: "source", position: o, isConnectable: t })] });
}
function rj() {
  return null;
}
function oj({ data: e, isConnectable: t, targetPosition: r = ye.Top }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ts, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Gl = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, R1 = {
  input: tj,
  default: nj,
  output: oj,
  group: rj
};
function ij(e) {
  var t, r, o, s;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((r = e.style) == null ? void 0 : r.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((s = e.style) == null ? void 0 : s.height)
  };
}
const sj = (e) => {
  const { width: t, height: r, x: o, y: s } = js(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(r) ? r : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`
  };
};
function aj({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: r }) {
  const o = Fe(), { width: s, height: a, transformString: l, userSelectionActive: u } = Ie(sj, Ye), f = uR(), d = N.useRef(null);
  if (N.useEffect(() => {
    var m;
    r || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [r]), lR({
    nodeRef: d
  }), u || !s || !a)
    return null;
  const h = e ? (m) => {
    const w = o.getState().nodes.filter((E) => E.selected);
    e(m, w);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(Gl, m.key) && (m.preventDefault(), f({
      direction: Gl[m.key],
      factor: m.shiftKey ? 4 : 1
    }));
  };
  return I.jsx("div", { className: tt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: l
  }, children: I.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: r ? void 0 : -1, onKeyDown: r ? void 0 : p, style: {
    width: s,
    height: a
  } }) });
}
const P1 = typeof window < "u" ? window : void 0, lj = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function fR({ children: e, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: w, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: R, panOnScrollMode: A, zoomOnDoubleClick: T, panOnDrag: O, defaultViewport: q, translateExtent: U, minZoom: j, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: B, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: z }) {
  const { nodesSelectionActive: Q, userSelectionActive: D } = Ie(lj), W = As(d, { target: P1 }), ie = As(y, { target: P1 }), $ = ie || O, Z = ie || k, ee = h && $ !== !0, K = W || D || ee;
  return Bq({ deleteKeyCode: f, multiSelectionKeyCode: E }), I.jsx(Wq, { onPaneContextMenu: a, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: R, panOnScrollMode: A, zoomOnDoubleClick: T, panOnDrag: !W && $, defaultViewport: q, translateExtent: U, minZoom: j, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: B, onViewportChange: M, isControlledViewport: z, paneClickDistance: u, selectionOnDrag: ee, children: I.jsxs(Kq, { onSelectionStart: m, onSelectionEnd: w, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: $, isSelecting: !!K, selectionMode: p, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && I.jsx(aj, { onSelectionContextMenu: L, noPanClassName: B, disableKeyboardA11y: Y })] }) });
}
fR.displayName = "FlowRenderer";
const uj = N.memo(fR), cj = (e) => (t) => e ? dy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((r) => r.id) : Array.from(t.nodeLookup.keys());
function fj(e) {
  return Ie(N.useCallback(cj(e), [e]), Ye);
}
const dj = (e) => e.updateNodeInternals;
function hj() {
  const e = Ie(dj), [t] = N.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((r) => {
    const o = /* @__PURE__ */ new Map();
    r.forEach((s) => {
      const a = s.target.getAttribute("data-id");
      o.set(a, {
        id: a,
        nodeElement: s.target,
        force: !0
      });
    }), e(o);
  }));
  return N.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function pj({ node: e, nodeType: t, hasDimensions: r, resizeObserver: o }) {
  const s = Fe(), a = N.useRef(null), l = N.useRef(null), u = N.useRef(e.sourcePosition), f = N.useRef(e.targetPosition), d = N.useRef(t), h = r && !!e.internals.handleBounds;
  return N.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), N.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), N.useEffect(() => {
    if (a.current) {
      const p = d.current !== t, m = u.current !== e.sourcePosition, w = f.current !== e.targetPosition;
      (p || m || w) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function gj({ id: e, onClick: t, onMouseEnter: r, onMouseMove: o, onMouseLeave: s, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: w, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: S, onError: C }) {
  const { node: _, internals: k, isParent: R } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Ye);
  let A = _.type || "default", T = (x == null ? void 0 : x[A]) || R1[A];
  T === void 0 && (C == null || C("003", Tn.error003(A)), A = "default", T = (x == null ? void 0 : x.default) || R1.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), q = !!(_.selectable || f && typeof _.selectable > "u"), U = !!(_.connectable || d && typeof _.connectable > "u"), j = !!(_.focusable || h && typeof _.focusable > "u"), V = Fe(), X = ON(_), L = pj({ node: _, nodeType: A, hasDimensions: X, resizeObserver: p }), H = lR({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: m,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: q,
    nodeClickDistance: S
  }), B = uR();
  if (_.hidden)
    return null;
  const Y = Qn(_), M = ij(_), z = q || O || t || r || o || s, Q = r ? (te) => r(te, { ...k.userNode }) : void 0, D = o ? (te) => o(te, { ...k.userNode }) : void 0, W = s ? (te) => s(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, $ = l ? (te) => l(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    q && (!se || !O || ae > 0) && Vv({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(qN(te.nativeEvent) || E)) {
      if (CN.includes(te.key) && q) {
        const se = te.key === "Escape";
        Vv({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(Gl, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), B({
          direction: Gl[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, K = () => {
    var be;
    if (E || !((be = L.current) != null && be.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = V.getState();
    if (!ce)
      return;
    dy(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + Y.width / 2, _.position.y + Y.height / 2, {
      zoom: te[2]
    });
  };
  return I.jsx("div", { className: tt([
    "react-flow__node",
    `react-flow__node-${A}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [w]: O
    },
    _.className,
    {
      selected: _.selected,
      selectable: q,
      parent: R,
      draggable: O,
      dragging: H
    }
  ]), ref: L, style: {
    zIndex: k.z,
    transform: `translate(${k.positionAbsolute.x}px,${k.positionAbsolute.y}px)`,
    pointerEvents: z ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: D, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: $, onKeyDown: j ? ee : void 0, tabIndex: j ? 0 : void 0, onFocus: j ? K : void 0, role: _.ariaRole ?? (j ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${nR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: I.jsx(Qq, { value: e, children: I.jsx(T, { id: e, data: _.data, type: A, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: q, draggable: O, deletable: _.deletable ?? !0, isConnectable: U, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...Y }) }) });
}
var mj = N.memo(gj);
const vj = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function dR(e) {
  const { nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, onError: a } = Ie(vj, Ye), l = fj(e.onlyRenderVisibleElements), u = hj();
  return I.jsx("div", { className: "react-flow__nodes", style: pu, children: l.map((f) => (
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
    I.jsx(mj, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
dR.displayName = "NodeRenderer";
const yj = N.memo(dR);
function wj(e) {
  return Ie(N.useCallback((r) => {
    if (!e)
      return r.edges.map((s) => s.id);
    const o = [];
    if (r.width && r.height)
      for (const s of r.edges) {
        const a = r.nodeLookup.get(s.source), l = r.nodeLookup.get(s.target);
        a && l && pD({
          sourceNode: a,
          targetNode: l,
          width: r.width,
          height: r.height,
          transform: r.transform
        }) && o.push(s.id);
      }
    return o;
  }, [e]), Ye);
}
const xj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return I.jsx("polyline", { className: "arrow", style: r, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, _j = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return I.jsx("polyline", { className: "arrowclosed", style: r, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, A1 = {
  [Hl.Arrow]: xj,
  [Hl.ArrowClosed]: _j
};
function bj(e) {
  const t = Fe();
  return N.useMemo(() => {
    var s, a;
    return Object.prototype.hasOwnProperty.call(A1, e) ? A1[e] : ((a = (s = t.getState()).onError) == null || a.call(s, "009", Tn.error009(e)), null);
  }, [e]);
}
const Sj = ({ id: e, type: t, color: r, width: o = 12.5, height: s = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = bj(t);
  return f ? I.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: I.jsx(f, { color: r, strokeWidth: l }) }) : null;
}, hR = ({ defaultColor: e, rfId: t }) => {
  const r = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), s = N.useMemo(() => bD(r, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [r, o, t, e]);
  return s.length ? I.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: I.jsx("defs", { children: s.map((a) => I.jsx(Sj, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
hR.displayName = "MarkerDefinitions";
var Ej = N.memo(hR);
function pR({ x: e, y: t, label: r, labelStyle: o, labelShowBg: s = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [p, m] = N.useState({ x: 1, y: 0, width: 0, height: 0 }), w = tt(["react-flow__edge-textwrapper", d]), E = N.useRef(null);
  return N.useEffect(() => {
    if (E.current) {
      const y = E.current.getBBox();
      m({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [r]), r ? I.jsxs("g", { transform: `translate(${e - p.width / 2} ${t - p.height / 2})`, className: w, visibility: p.width ? "visible" : "hidden", ...h, children: [s && I.jsx("rect", { width: p.width + 2 * l[0], x: -l[0], y: -l[1], height: p.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), I.jsx("text", { className: "react-flow__edge-text", y: p.height / 2, dy: "0.3em", ref: E, style: o, children: r }), f] }) : null;
}
pR.displayName = "EdgeText";
const Cj = N.memo(pR);
function gu({ path: e, labelX: t, labelY: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return I.jsxs(I.Fragment, { children: [I.jsx("path", { ...h, d: e, fill: "none", className: tt(["react-flow__edge-path", h.className]) }), d ? I.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(r) ? I.jsx(Cj, { x: t, y: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function T1({ pos: e, x1: t, y1: r, x2: o, y2: s }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), r] : [t, 0.5 * (r + s)];
}
function gR({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top }) {
  const [l, u] = T1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s
  }), [f, d] = T1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t
  }), [h, p, m, w] = zN({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: s,
    sourceControlX: l,
    sourceControlY: u,
    targetControlX: f,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${u} ${f},${d} ${o},${s}`,
    h,
    p,
    m,
    w
  ];
}
function mR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S }) => {
    const [C, _, k] = gR({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u
    }), R = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: R, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S });
  });
}
const kj = mR({ isInternal: !1 }), vR = mR({ isInternal: !0 });
kj.displayName = "SimpleBezierEdge";
vR.displayName = "SimpleBezierEdgeInternal";
function yR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: w = ye.Bottom, targetPosition: E = ye.Top, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, R] = zv({
      sourceX: r,
      sourceY: o,
      sourcePosition: w,
      targetX: s,
      targetY: a,
      targetPosition: E,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset,
      stepPosition: S == null ? void 0 : S.stepPosition
    }), A = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: A, path: _, labelX: k, labelY: R, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const wR = yR({ isInternal: !1 }), xR = yR({ isInternal: !0 });
wR.displayName = "SmoothStepEdge";
xR.displayName = "SmoothStepEdgeInternal";
function _R(e) {
  return N.memo(({ id: t, ...r }) => {
    var s;
    const o = e.isInternal ? void 0 : t;
    return I.jsx(wR, { ...r, id: o, pathOptions: N.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = r.pathOptions) == null ? void 0 : a.offset };
    }, [(s = r.pathOptions) == null ? void 0 : s.offset]) });
  });
}
const Nj = _R({ isInternal: !1 }), bR = _R({ isInternal: !0 });
Nj.displayName = "StepEdge";
bR.displayName = "StepEdgeInternal";
function SR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: w, markerStart: E, interactionWidth: y }) => {
    const [x, S, C] = BN({ sourceX: r, sourceY: o, targetX: s, targetY: a }), _ = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: _, path: x, labelX: S, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: w, markerStart: E, interactionWidth: y });
  });
}
const Rj = SR({ isInternal: !1 }), ER = SR({ isInternal: !0 });
Rj.displayName = "StraightEdge";
ER.displayName = "StraightEdgeInternal";
function CR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, R] = FN({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    }), A = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: A, path: _, labelX: k, labelY: R, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const Pj = CR({ isInternal: !1 }), kR = CR({ isInternal: !0 });
Pj.displayName = "BezierEdge";
kR.displayName = "BezierEdgeInternal";
const I1 = {
  default: kR,
  straight: ER,
  step: bR,
  smoothstep: xR,
  simplebezier: vR
}, M1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Aj = (e, t, r) => r === ye.Left ? e - t : r === ye.Right ? e + t : e, Tj = (e, t, r) => r === ye.Top ? e - t : r === ye.Bottom ? e + t : e, O1 = "react-flow__edgeupdater";
function L1({ position: e, centerX: t, centerY: r, radius: o = 10, onMouseDown: s, onMouseEnter: a, onMouseOut: l, type: u }) {
  return I.jsx("circle", { onMouseDown: s, onMouseEnter: a, onMouseOut: l, className: tt([O1, `${O1}-${u}`]), cx: Aj(t, o, e), cy: Tj(r, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function Ij({ isReconnectable: e, reconnectRadius: t, edge: r, sourceX: o, sourceY: s, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: w }) {
  const E = Fe(), y = (k, R) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: A, domNode: T, isValidConnection: O, connectionMode: q, connectionRadius: U, lib: j, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: B, panBy: Y, updateConnection: M } = E.getState(), z = R.type === "target", Q = (ie, $) => {
      m(!1), p == null || p(ie, r, R.type, $);
    }, D = (ie) => d == null ? void 0 : d(r, ie), W = (ie, $) => {
      m(!0), h == null || h(k, r, R.type), V == null || V(ie, $);
    };
    Bv.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: A,
      connectionMode: q,
      connectionRadius: U,
      domNode: T,
      handleId: R.id,
      nodeId: R.nodeId,
      nodeLookup: H,
      isTarget: z,
      edgeUpdaterType: R.type,
      lib: j,
      flowId: B,
      cancelConnection: L,
      panBy: Y,
      isValidConnection: O,
      onConnect: D,
      onConnectStart: W,
      onConnectEnd: X,
      onReconnectEnd: Q,
      updateConnection: M,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: k.currentTarget
    });
  }, x = (k) => y(k, { nodeId: r.target, id: r.targetHandle ?? null, type: "target" }), S = (k) => y(k, { nodeId: r.source, id: r.sourceHandle ?? null, type: "source" }), C = () => w(!0), _ = () => w(!1);
  return I.jsxs(I.Fragment, { children: [(e === !0 || e === "source") && I.jsx(L1, { position: u, centerX: o, centerY: s, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && I.jsx(L1, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: S, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function Mj({ id: e, edgesFocusable: t, edgesReconnectable: r, elementsSelectable: o, onClick: s, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: w, rfId: E, edgeTypes: y, noPanClassName: x, onError: S, disableKeyboardA11y: C }) {
  let _ = Ie((de) => de.edgeLookup.get(e));
  const k = Ie((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let R = _.type || "default", A = (y == null ? void 0 : y[R]) || I1[R];
  A === void 0 && (S == null || S("011", Tn.error011(R)), R = "default", A = (y == null ? void 0 : y.default) || I1.default);
  const T = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof p < "u" && (_.reconnectable || r && typeof _.reconnectable > "u"), q = !!(_.selectable || o && typeof _.selectable > "u"), U = N.useRef(null), [j, V] = N.useState(!1), [X, L] = N.useState(!1), H = Fe(), { zIndex: B, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: W } = Ie(N.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...M1
      };
    const me = _D({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: S
    });
    return {
      zIndex: hD({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || M1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Ye), ie = N.useMemo(() => _.markerStart ? `url('#${Fv(_.markerStart, E)}')` : void 0, [_.markerStart, E]), $ = N.useMemo(() => _.markerEnd ? `url('#${Fv(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || Y === null || M === null || z === null || Q === null)
    return null;
  const Z = (de) => {
    var Re;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: me } = H.getState();
    q && (H.setState({ nodesSelectionActive: !1 }), _.selected && me ? (be({ nodes: [], edges: [_] }), (Re = U.current) == null || Re.blur()) : pe([e])), s && s(de, _);
  }, ee = a ? (de) => {
    a(de, { ..._ });
  } : void 0, K = l ? (de) => {
    l(de, { ..._ });
  } : void 0, te = u ? (de) => {
    u(de, { ..._ });
  } : void 0, se = f ? (de) => {
    f(de, { ..._ });
  } : void 0, ae = d ? (de) => {
    d(de, { ..._ });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && CN.includes(de.key) && q) {
      const { unselectNodesAndEdges: be, addSelectedEdges: me } = H.getState();
      de.key === "Escape" ? ((pe = U.current) == null || pe.blur(), be({ edges: [_] })) : me([e]);
    }
  };
  return I.jsx("svg", { style: { zIndex: B }, children: I.jsxs("g", { className: tt([
    "react-flow__edge",
    `react-flow__edge-${R}`,
    _.className,
    x,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !q && !s,
      updating: j,
      selectable: q
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: T ? ce : void 0, tabIndex: T ? 0 : void 0, role: _.ariaRole ?? (T ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": T ? `${rR}-${E}` : void 0, ref: U, ..._.domAttributes, children: [!X && I.jsx(A, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: q, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: $, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && I.jsx(Ij, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: w, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var Oj = N.memo(Mj);
const Lj = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function NR({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: r, edgeTypes: o, noPanClassName: s, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: w, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, onError: _ } = Ie(Lj, Ye), k = wj(t);
  return I.jsxs("div", { className: "react-flow__edges", children: [I.jsx(Ej, { defaultColor: e, rfId: r }), k.map((R) => I.jsx(Oj, { id: R, edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, noPanClassName: s, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: w, onReconnectEnd: E, rfId: r, onError: _, edgeTypes: o, disableKeyboardA11y: y }, R))] });
}
NR.displayName = "EdgeRenderer";
const Dj = N.memo(NR), qj = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function jj({ children: e }) {
  const t = Ie(qj);
  return I.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function zj(e) {
  const t = wy(), r = N.useRef(!1);
  N.useEffect(() => {
    !r.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), r.current = !0);
  }, [e, t.viewportInitialized]);
}
const Fj = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function $j(e) {
  const t = Ie(Fj), r = Fe();
  return N.useEffect(() => {
    e && (t == null || t(e), r.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function Bj(e) {
  return e.connection.inProgress ? { ...e.connection, to: Fs(e.connection.to, e.transform) } : { ...e.connection };
}
function Vj(e) {
  return Bj;
}
function Hj(e) {
  const t = Vj();
  return Ie(t, Ye);
}
const Wj = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Uj({ containerStyle: e, style: t, type: r, component: o }) {
  const { nodesConnectable: s, width: a, height: l, isValid: u, inProgress: f } = Ie(Wj, Ye);
  return !(a && s && f) ? null : I.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: I.jsx("g", { className: tt(["react-flow__connection", RN(u)]), children: I.jsx(RR, { style: t, type: r, CustomComponent: o, isValid: u }) }) });
}
const RR = ({ style: e, type: t = kr.Bezier, CustomComponent: r, isValid: o }) => {
  const { inProgress: s, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: w } = Hj();
  if (!s)
    return;
  if (r)
    return I.jsx(r, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: RN(o), toNode: h, toHandle: p, pointer: w });
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
    case kr.Bezier:
      [E] = FN(y);
      break;
    case kr.SimpleBezier:
      [E] = gR(y);
      break;
    case kr.Step:
      [E] = zv({
        ...y,
        borderRadius: 0
      });
      break;
    case kr.SmoothStep:
      [E] = zv(y);
      break;
    default:
      [E] = BN(y);
  }
  return I.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
RR.displayName = "ConnectionLine";
const Gj = {};
function D1(e = Gj) {
  N.useRef(e), Fe(), N.useEffect(() => {
  }, [e]);
}
function Yj() {
  Fe(), N.useRef(!1), N.useEffect(() => {
  }, []);
}
function PR({ nodeTypes: e, edgeTypes: t, onInit: r, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: w, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: S, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: R, panActivationKeyCode: A, zoomActivationKeyCode: T, deleteKeyCode: O, onlyRenderVisibleElements: q, elementsSelectable: U, defaultViewport: j, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: B, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: D, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: $, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, onReconnect: Ee, onReconnectStart: Qe, onReconnectEnd: Ve, noDragClassName: Ft, noWheelClassName: dt, noPanClassName: st, disableKeyboardA11y: He, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return D1(e), D1(t), Yj(), zj(r), $j(tn), I.jsx(uj, { onPaneClick: $, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: m, onSelectionEnd: w, multiSelectionKeyCode: R, panActivationKeyCode: A, zoomActivationKeyCode: T, elementsSelectable: U, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: D, panOnDrag: ie, defaultViewport: j, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: p, preventScrolling: H, noDragClassName: Ft, noWheelClassName: dt, noPanClassName: st, disableKeyboardA11y: He, onViewportChange: Bt, isControlledViewport: !!tn, children: I.jsxs(jj, { children: [I.jsx(Dj, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Qe, onReconnectEnd: Ve, onlyRenderVisibleElements: q, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, defaultMarkerColor: B, noPanClassName: st, disableKeyboardA11y: He, rfId: $t }), I.jsx(Uj, { style: y, type: E, component: x, containerStyle: S }), I.jsx("div", { className: "react-flow__edgelabel-renderer" }), I.jsx(yj, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: q, noPanClassName: st, noDragClassName: Ft, disableKeyboardA11y: He, nodeExtent: en, rfId: $t }), I.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
PR.displayName = "GraphView";
const Kj = N.memo(PR), q1 = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], S = r ?? e ?? [], C = h ?? [0, 0], _ = p ?? Cs;
  WN(E, y, x);
  const k = $v(S, m, w, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let R = [0, 0, 1];
  if (l && s && a) {
    const A = js(m, {
      filter: (U) => !!((U.width || U.initialWidth) && (U.height || U.initialHeight))
    }), { x: T, y: O, zoom: q } = hy(A, s, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    R = [T, O, q];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: a ?? 0,
    transform: R,
    nodes: S,
    nodesInitialized: k,
    nodeLookup: m,
    parentLookup: w,
    edges: x,
    edgeLookup: y,
    connectionLookup: E,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: r !== void 0,
    hasDefaultEdges: o !== void 0,
    panZoom: null,
    minZoom: f,
    maxZoom: d,
    translateExtent: Cs,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: ri.Strict,
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
    connection: { ...NN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: aD,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: kN
  };
}, Xj = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => fq((m, w) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: S, fitViewResolver: C, width: _, height: k, minZoom: R, maxZoom: A } = w();
    x && (await iD({
      nodes: y,
      width: _,
      height: k,
      panZoom: x,
      minZoom: R,
      maxZoom: A
    }, S), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...q1({
      nodes: e,
      edges: t,
      width: s,
      height: a,
      fitView: l,
      fitViewOptions: u,
      minZoom: f,
      maxZoom: d,
      nodeOrigin: h,
      nodeExtent: p,
      defaultNodes: r,
      defaultEdges: o
    }),
    setNodes: (y) => {
      const { nodeLookup: x, parentLookup: S, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = w(), R = $v(y, x, S, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && R ? (E(), m({ nodes: y, nodesInitialized: R, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: R });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: S } = w();
      WN(x, S, y), m({ edges: y });
    },
    setDefaultNodesAndEdges: (y, x) => {
      if (y) {
        const { setNodes: S } = w();
        S(y), m({ hasDefaultNodes: !0 });
      }
      if (x) {
        const { setEdges: S } = w();
        S(x), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: x, nodeLookup: S, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: R, debug: A, fitViewQueued: T } = w(), { changes: O, updatedInternals: q } = PD(y, S, C, _, k, R);
      q && (CD(S, C, { nodeOrigin: k, nodeExtent: R }), T ? (E(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (A && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const S = [], C = [], { nodeLookup: _, triggerNodeChanges: k } = w();
      for (const [R, A] of y) {
        const T = _.get(R), O = !!(T != null && T.expandParent && (T != null && T.parentId) && (A != null && A.position)), q = {
          id: R,
          type: "position",
          position: O ? {
            x: Math.max(0, A.position.x),
            y: Math.max(0, A.position.y)
          } : A.position,
          dragging: x
        };
        O && T.parentId && S.push({
          id: R,
          parentId: T.parentId,
          rect: {
            ...A.internals.positionAbsolute,
            width: A.measured.width ?? 0,
            height: A.measured.height ?? 0
          }
        }), C.push(q);
      }
      if (S.length > 0) {
        const { parentLookup: R, nodeOrigin: A } = w(), T = yy(S, _, R, A);
        C.push(...T);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: S, nodes: C, hasDefaultNodes: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const R = Mq(y, C);
          S(R);
        }
        k && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: S, edges: C, hasDefaultEdges: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const R = Oq(y, C);
          S(R);
        }
        k && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const R = y.map((A) => Jr(A, !0));
        _(R);
        return;
      }
      _(Xo(C, /* @__PURE__ */ new Set([...y]), !0)), k(Xo(S));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const R = y.map((A) => Jr(A, !0));
        k(R);
        return;
      }
      k(Xo(S, /* @__PURE__ */ new Set([...y]))), _(Xo(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: S, nodes: C, nodeLookup: _, triggerNodeChanges: k, triggerEdgeChanges: R } = w(), A = y || C, T = x || S, O = A.map((U) => {
        const j = _.get(U.id);
        return j && (j.selected = !1), Jr(U.id, !1);
      }), q = T.map((U) => Jr(U.id, !1));
      k(O), R(q);
    },
    setMinZoom: (y) => {
      const { panZoom: x, maxZoom: S } = w();
      x == null || x.setScaleExtent([y, S]), m({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: x, minZoom: S } = w();
      x == null || x.setScaleExtent([S, y]), m({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var x;
      (x = w().panZoom) == null || x.setTranslateExtent(y), m({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: x, triggerNodeChanges: S, triggerEdgeChanges: C, elementsSelectable: _ } = w();
      if (!_)
        return;
      const k = x.reduce((A, T) => T.selected ? [...A, Jr(T.id, !1)] : A, []), R = y.reduce((A, T) => T.selected ? [...A, Jr(T.id, !1)] : A, []);
      S(k), C(R);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: S, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: R } = w();
      y[0][0] === R[0][0] && y[0][1] === R[0][1] && y[1][0] === R[1][0] && y[1][1] === R[1][1] || ($v(x, S, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: S, height: C, panZoom: _, translateExtent: k } = w();
      return AD({ delta: y, panZoom: _, transform: x, translateExtent: k, width: S, height: C });
    },
    setCenter: async (y, x, S) => {
      const { width: C, height: _, maxZoom: k, panZoom: R } = w();
      if (!R)
        return Promise.resolve(!1);
      const A = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : k;
      return await R.setViewport({
        x: C / 2 - y * A,
        y: _ / 2 - x * A,
        zoom: A
      }, { duration: S == null ? void 0 : S.duration, ease: S == null ? void 0 : S.ease, interpolate: S == null ? void 0 : S.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...NN }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...q1() })
  };
}, Object.is);
function AR({ initialNodes: e, initialEdges: t, defaultNodes: r, defaultEdges: o, initialWidth: s, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [w] = N.useState(() => Xj({
    nodes: e,
    edges: t,
    defaultNodes: r,
    defaultEdges: o,
    width: s,
    height: a,
    fitView: d,
    minZoom: l,
    maxZoom: u,
    fitViewOptions: f,
    nodeOrigin: h,
    nodeExtent: p
  }));
  return I.jsx(hq, { value: w, children: I.jsx(jq, { children: m }) });
}
function Qj({ children: e, nodes: t, edges: r, defaultNodes: o, defaultEdges: s, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return N.useContext(du) ? I.jsx(I.Fragment, { children: e }) : I.jsx(AR, { initialNodes: t, initialEdges: r, defaultNodes: o, defaultEdges: s, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const Zj = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Jj({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, className: s, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: R, onNodeDoubleClick: A, onNodeDragStart: T, onNodeDrag: O, onNodeDragStop: q, onNodesDelete: U, onEdgesDelete: j, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: B, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onBeforeDelete: Q, connectionMode: D, connectionLineType: W = kr.Bezier, connectionLineStyle: ie, connectionLineComponent: $, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = ks.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Rs() ? "Meta" : "Control", zoomActivationKeyCode: de = Rs() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Re, nodesDraggable: Ee, autoPanOnNodeFocus: Qe, nodesConnectable: Ve, nodesFocusable: Ft, nodeOrigin: dt = oR, edgesFocusable: st, edgesReconnectable: He, elementsSelectable: en = !0, defaultViewport: $t = kq, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Cs, preventScrolling: Or = !0, nodeExtent: Vt, defaultMarkerColor: Dn = "#b1b1b7", zoomOnScroll: go = !0, zoomOnPinch: At = !0, panOnScroll: Ht = !1, panOnScrollSpeed: Hu = 0.5, panOnScrollMode: xi = no.Free, zoomOnDoubleClick: _i = !0, panOnDrag: bi = !0, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs = 1, nodeClickDistance: Zs = 0, children: Js, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Wu, onEdgeMouseMove: qr, onEdgeMouseLeave: mo, reconnectRadius: vo = 10, onNodesChange: Ni, onEdgesChange: Uu, noDragClassName: Gu = "nodrag", noWheelClassName: Yu = "nowheel", noPanClassName: xn = "nopan", fitView: Ri, fitViewOptions: Pi, connectOnClick: Ku, attributionPosition: ta, proOptions: na, defaultEdgeOptions: ra, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Xu, disableKeyboardA11y: ia = !1, autoPanOnConnect: We, autoPanOnNodeDrag: Qu, autoPanSpeed: Ai, connectionRadius: sa, isValidConnection: yo, onError: Zu, style: aa, id: jr, nodeDragThreshold: Wt, connectionDragThreshold: Ju, viewport: Tt, onViewportChange: ec, width: tc, height: nc, colorMode: wo = "light", debug: xo, onScroll: _n, ariaLabelConfig: _o, ...rc }, oc) {
  const zr = jr || "1", la = Aq(wo), Ti = N.useCallback((nr) => {
    nr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), _n == null || _n(nr);
  }, [_n]);
  return I.jsx("div", { "data-testid": "rf__wrapper", ...rc, onScroll: Ti, style: { ...aa, ...Zj }, ref: oc, className: tt(["react-flow", s, la]), id: jr, role: "application", children: I.jsxs(Qj, { nodes: e, edges: t, width: tc, height: nc, fitView: Ri, fitViewOptions: Pi, minZoom: tn, maxZoom: Bt, nodeOrigin: dt, nodeExtent: Vt, children: [I.jsx(Kj, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: R, onNodeDoubleClick: A, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: $, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Or, zoomOnScroll: go, zoomOnPinch: At, zoomOnDoubleClick: _i, panOnScroll: Ht, panOnScrollSpeed: Hu, panOnScrollMode: xi, panOnDrag: bi, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs, nodeClickDistance: Zs, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Wu, onEdgeMouseMove: qr, onEdgeMouseLeave: mo, reconnectRadius: vo, defaultMarkerColor: Dn, noDragClassName: Gu, noWheelClassName: Yu, noPanClassName: xn, rfId: zr, disableKeyboardA11y: ia, nodeExtent: Vt, viewport: Tt, onViewportChange: ec }), I.jsx(Pq, { nodes: e, edges: t, defaultNodes: r, defaultEdges: o, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, nodesDraggable: Ee, autoPanOnNodeFocus: Qe, nodesConnectable: Ve, nodesFocusable: Ft, edgesFocusable: st, edgesReconnectable: He, elementsSelectable: en, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Xu, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Ni, onEdgesChange: Uu, snapToGrid: pe, snapGrid: be, connectionMode: D, translateExtent: _t, connectOnClick: Ku, defaultEdgeOptions: ra, fitView: Ri, fitViewOptions: Pi, onNodesDelete: U, onEdgesDelete: j, onDelete: V, onNodeDragStart: T, onNodeDrag: O, onNodeDragStop: q, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: B, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: xn, nodeOrigin: dt, rfId: zr, autoPanOnConnect: We, autoPanOnNodeDrag: Qu, autoPanSpeed: Ai, onError: Zu, connectionRadius: sa, isValidConnection: yo, selectNodesOnDrag: Re, nodeDragThreshold: Wt, connectionDragThreshold: Ju, onBeforeDelete: Q, debug: xo, ariaLabelConfig: _o }), I.jsx(Cq, { onSelectionChange: X }), Js, I.jsx(xq, { proOptions: na, position: ta }), I.jsx(wq, { rfId: zr, disableKeyboardA11y: ia })] }) });
}
sR(Jj);
function ez({ dimensions: e, lineWidth: t, variant: r, className: o }) {
  return I.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: tt(["react-flow__background-pattern", r, o]) });
}
function tz({ radius: e, className: t }) {
  return I.jsx("circle", { cx: e, cy: e, r: e, className: tt(["react-flow__background-pattern", "dots", t]) });
}
var Nr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Nr || (Nr = {}));
const nz = {
  [Nr.Dots]: 1,
  [Nr.Lines]: 1,
  [Nr.Cross]: 6
}, rz = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function TR({
  id: e,
  variant: t = Nr.Dots,
  // only used for dots and cross
  gap: r = 20,
  // only used for lines and cross
  size: o,
  lineWidth: s = 1,
  offset: a = 0,
  color: l,
  bgColor: u,
  style: f,
  className: d,
  patternClassName: h
}) {
  const p = N.useRef(null), { transform: m, patternId: w } = Ie(rz, Ye), E = o || nz[t], y = t === Nr.Dots, x = t === Nr.Cross, S = Array.isArray(r) ? r : [r, r], C = [S[0] * m[2] || 1, S[1] * m[2] || 1], _ = E * m[2], k = Array.isArray(a) ? a : [a, a], R = x ? [_, _] : C, A = [
    k[0] * m[2] || 1 + R[0] / 2,
    k[1] * m[2] || 1 + R[1] / 2
  ], T = `${w}${e || ""}`;
  return I.jsxs("svg", { className: tt(["react-flow__background", d]), style: {
    ...f,
    ...pu,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [I.jsx("pattern", { id: T, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${A[0]},-${A[1]})`, children: y ? I.jsx(tz, { radius: _ / 2, className: h }) : I.jsx(ez, { dimensions: R, lineWidth: s, variant: t, className: h }) }), I.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${T})` })] });
}
TR.displayName = "Background";
N.memo(TR);
function oz() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: I.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function iz() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: I.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function sz() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: I.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function az() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function lz() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function xl({ children: e, className: t, ...r }) {
  return I.jsx("button", { type: "button", className: tt(["react-flow__controls-button", t]), ...r, children: e });
}
const uz = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function IR({ style: e, showZoom: t = !0, showFitView: r = !0, showInteractive: o = !0, fitViewOptions: s, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": w }) {
  const E = Fe(), { isInteractive: y, minZoomReached: x, maxZoomReached: S, ariaLabelConfig: C } = Ie(uz, Ye), { zoomIn: _, zoomOut: k, fitView: R } = wy(), A = () => {
    _(), a == null || a();
  }, T = () => {
    k(), l == null || l();
  }, O = () => {
    R(s), u == null || u();
  }, q = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, U = m === "horizontal" ? "horizontal" : "vertical";
  return I.jsxs(hu, { className: tt(["react-flow__controls", U, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": w ?? C["controls.ariaLabel"], children: [t && I.jsxs(I.Fragment, { children: [I.jsx(xl, { onClick: A, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: S, children: I.jsx(oz, {}) }), I.jsx(xl, { onClick: T, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: I.jsx(iz, {}) })] }), r && I.jsx(xl, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: I.jsx(sz, {}) }), o && I.jsx(xl, { className: "react-flow__controls-interactive", onClick: q, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? I.jsx(lz, {}) : I.jsx(az, {}) }), h] });
}
IR.displayName = "Controls";
N.memo(IR);
function cz({ id: e, x: t, y: r, width: o, height: s, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: w }) {
  const { background: E, backgroundColor: y } = a || {}, x = l || E || y;
  return I.jsx("rect", { className: tt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: r, rx: h, ry: h, width: o, height: s, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: w ? (S) => w(S, e) : void 0 });
}
const fz = N.memo(cz), dz = (e) => e.nodes.map((t) => t.id), td = (e) => e instanceof Function ? e : () => e;
function hz({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: r = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = fz,
  onClick: l
}) {
  const u = Ie(dz, Ye), f = td(t), d = td(e), h = td(r), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return I.jsx(I.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    I.jsx(gz, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: s, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function pz({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: r, nodeClassNameFunc: o, nodeBorderRadius: s, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: w } = Ie((E) => {
    const { internals: y } = E.nodeLookup.get(e), x = y.userNode, { x: S, y: C } = y.positionAbsolute, { width: _, height: k } = Qn(x);
    return {
      node: x,
      x: S,
      y: C,
      width: _,
      height: k
    };
  }, Ye);
  return !d || d.hidden || !ON(d) ? null : I.jsx(u, { x: h, y: p, width: m, height: w, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: s, strokeColor: r(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const gz = N.memo(pz);
var mz = N.memo(hz);
const vz = 200, yz = 150, wz = (e) => !e.hidden, xz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? MN(js(e.nodeLookup, { filter: wz }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, _z = "react-flow__minimap-desc";
function MR({
  style: e,
  className: t,
  nodeStrokeColor: r,
  nodeColor: o,
  nodeClassName: s = "",
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
  onClick: w,
  onNodeClick: E,
  pannable: y = !1,
  zoomable: x = !1,
  ariaLabel: S,
  inversePan: C,
  zoomStep: _ = 1,
  offsetScale: k = 5
}) {
  const R = Fe(), A = N.useRef(null), { boundingRect: T, viewBB: O, rfId: q, panZoom: U, translateExtent: j, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Ie(xz, Ye), H = (e == null ? void 0 : e.width) ?? vz, B = (e == null ? void 0 : e.height) ?? yz, Y = T.width / H, M = T.height / B, z = Math.max(Y, M), Q = z * H, D = z * B, W = k * z, ie = T.x - (Q - T.width) / 2 - W, $ = T.y - (D - T.height) / 2 - W, Z = Q + W * 2, ee = D + W * 2, K = `${_z}-${q}`, te = N.useRef(0), se = N.useRef();
  te.current = z, N.useEffect(() => {
    if (A.current && U)
      return se.current = zD({
        domNode: A.current,
        panZoom: U,
        getTransform: () => R.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [U]), N.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: j,
      width: V,
      height: X,
      inversePan: C,
      pannable: y,
      zoomStep: _,
      zoomable: x
    });
  }, [y, x, C, _, j, V, X]);
  const ae = w ? (pe) => {
    var Re;
    const [be, me] = ((Re = se.current) == null ? void 0 : Re.pointer(pe)) || [0, 0];
    w(pe, { x: be, y: me });
  } : void 0, ce = E ? N.useCallback((pe, be) => {
    const me = R.getState().nodeLookup.get(be).internals.userNode;
    E(pe, me);
  }, []) : void 0, de = S ?? L["minimap.ariaLabel"];
  return I.jsx(hu, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * z : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: tt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: I.jsxs("svg", { width: H, height: B, viewBox: `${ie} ${$} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: A, onClick: ae, children: [de && I.jsx("title", { id: K, children: de }), I.jsx(mz, { onClick: ce, nodeColor: o, nodeStrokeColor: r, nodeBorderRadius: a, nodeClassName: s, nodeStrokeWidth: l, nodeComponent: u }), I.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${$ - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
MR.displayName = "MiniMap";
N.memo(MR);
const bz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Sz = {
  [ai.Line]: "right",
  [ai.Handle]: "bottom-right"
};
function Ez({ nodeId: e, position: t, variant: r = ai.Handle, className: o, style: s = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: w = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: S }) {
  const C = cR(), _ = typeof e == "string" ? e : C, k = Fe(), R = N.useRef(null), A = r === ai.Handle, T = Ie(N.useCallback(bz(A && w), [A, w]), Ye), O = N.useRef(null), q = t ?? Sz[r];
  N.useEffect(() => {
    if (!(!R.current || !_))
      return O.current || (O.current = JD({
        domNode: R.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: j, transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H, domNode: B } = k.getState();
          return {
            nodeLookup: j,
            transform: V,
            snapGrid: X,
            snapToGrid: L,
            nodeOrigin: H,
            paneDomNode: B
          };
        },
        onChange: (j, V) => {
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: H, nodeOrigin: B } = k.getState(), Y = [], M = { x: j.x, y: j.y }, z = L.get(_);
          if (z && z.expandParent && z.parentId) {
            const Q = z.origin ?? B, D = j.width ?? z.measured.width ?? 0, W = j.height ?? z.measured.height ?? 0, ie = {
              id: z.id,
              parentId: z.parentId,
              rect: {
                width: D,
                height: W,
                ...LN({
                  x: j.x ?? z.position.x,
                  y: j.y ?? z.position.y
                }, { width: D, height: W }, z.parentId, L, Q)
              }
            }, $ = yy([ie], L, H, B);
            Y.push(...$), M.x = j.x ? Math.max(Q[0] * D, j.x) : void 0, M.y = j.y ? Math.max(Q[1] * W, j.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: _,
              type: "position",
              position: { ...M }
            };
            Y.push(Q);
          }
          if (j.width !== void 0 && j.height !== void 0) {
            const D = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: j.width,
                height: j.height
              }
            };
            Y.push(D);
          }
          for (const Q of V) {
            const D = {
              ...Q,
              type: "position"
            };
            Y.push(D);
          }
          X(Y);
        },
        onEnd: ({ width: j, height: V }) => {
          const X = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: j,
              height: V
            }
          };
          k.getState().triggerNodeChanges([X]);
        }
      })), O.current.update({
        controlPosition: q,
        boundaries: {
          minWidth: u,
          minHeight: f,
          maxWidth: d,
          maxHeight: h
        },
        keepAspectRatio: p,
        resizeDirection: m,
        onResizeStart: y,
        onResize: x,
        onResizeEnd: S,
        shouldResize: E
      }), () => {
        var j;
        (j = O.current) == null || j.destroy();
      };
  }, [
    q,
    u,
    f,
    d,
    h,
    p,
    y,
    x,
    S,
    E
  ]);
  const U = q.split("-");
  return I.jsx("div", { className: tt(["react-flow__resize-control", "nodrag", ...U, r, o]), ref: R, style: {
    ...s,
    scale: T,
    ...l && { [A ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
N.memo(Ez);
function OR(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = OR(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function LR() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = OR(e)) && (o && (o += " "), o += t);
  return o;
}
const Cz = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, kz = (e, t) => ({
  classGroupId: e,
  validator: t
}), DR = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Yl = "-", j1 = [], Nz = "arbitrary..", Rz = (e) => {
  const t = Az(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Pz(l);
      const u = l.split(Yl), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return qR(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = r[l];
        return f ? d ? Cz(d, f) : f : d || j1;
      }
      return r[l] || j1;
    }
  };
}, qR = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], a = r.nextPart.get(s);
  if (a) {
    const d = qR(e, t + 1, a);
    if (d) return d;
  }
  const l = r.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(Yl) : e.slice(t).join(Yl), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, Pz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? Nz + o : void 0;
})(), Az = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return Tz(r, t);
}, Tz = (e, t) => {
  const r = DR();
  for (const o in e) {
    const s = e[o];
    _y(s, r, o, t);
  }
  return r;
}, _y = (e, t, r, o) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    Iz(l, t, r, o);
  }
}, Iz = (e, t, r, o) => {
  if (typeof e == "string") {
    Mz(e, t, r);
    return;
  }
  if (typeof e == "function") {
    Oz(e, t, r, o);
    return;
  }
  Lz(e, t, r, o);
}, Mz = (e, t, r) => {
  const o = e === "" ? t : jR(t, e);
  o.classGroupId = r;
}, Oz = (e, t, r, o) => {
  if (Dz(e)) {
    _y(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(kz(r, e));
}, Lz = (e, t, r, o) => {
  const s = Object.entries(e), a = s.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = s[l];
    _y(f, jR(t, u), r, o);
  }
}, jR = (e, t) => {
  let r = e;
  const o = t.split(Yl), s = o.length;
  for (let a = 0; a < s; a++) {
    const l = o[a];
    let u = r.nextPart.get(l);
    u || (u = DR(), r.nextPart.set(l, u)), r = u;
  }
  return r;
}, Dz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, qz = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (a, l) => {
    r[a] = l, t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let l = r[a];
      if (l !== void 0)
        return l;
      if ((l = o[a]) !== void 0)
        return s(a, l), l;
    },
    set(a, l) {
      a in r ? r[a] = l : s(a, l);
    }
  };
}, Hv = "!", z1 = ":", jz = [], F1 = (e, t, r, o, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: s
}), zz = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (s) => {
    const a = [];
    let l = 0, u = 0, f = 0, d;
    const h = s.length;
    for (let y = 0; y < h; y++) {
      const x = s[y];
      if (l === 0 && u === 0) {
        if (x === z1) {
          a.push(s.slice(f, y)), f = y + 1;
          continue;
        }
        if (x === "/") {
          d = y;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" ? l-- : x === "(" ? u++ : x === ")" && u--;
    }
    const p = a.length === 0 ? s : s.slice(f);
    let m = p, w = !1;
    p.endsWith(Hv) ? (m = p.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(Hv) && (m = p.slice(1), w = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return F1(a, w, m, E);
  };
  if (t) {
    const s = t + z1, a = o;
    o = (l) => l.startsWith(s) ? a(l.slice(s.length)) : F1(jz, !1, l, void 0, !0);
  }
  if (r) {
    const s = o;
    o = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, Fz = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, o) => {
    t.set(r, 1e6 + o);
  }), (r) => {
    const o = [];
    let s = [];
    for (let a = 0; a < r.length; a++) {
      const l = r[a], u = l[0] === "[", f = t.has(l);
      u || f ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(l)) : s.push(l);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, $z = (e) => ({
  cache: qz(e.cacheSize),
  parseClassName: zz(e),
  sortModifiers: Fz(e),
  ...Rz(e)
}), Bz = /\s+/, Vz = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(Bz);
  let f = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const h = u[d], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: w,
      baseClassName: E,
      maybePostfixModifierPosition: y
    } = r(h);
    if (p) {
      f = h + (f.length > 0 ? " " + f : f);
      continue;
    }
    let x = !!y, S = o(x ? E.substring(0, y) : E);
    if (!S) {
      if (!x) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (S = o(E), !S) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      x = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), _ = w ? C + Hv : C, k = _ + S;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const R = s(S, x);
    for (let A = 0; A < R.length; ++A) {
      const T = R[A];
      l.push(_ + T);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Hz = (...e) => {
  let t = 0, r, o, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = zR(r)) && (s && (s += " "), s += o);
  return s;
}, zR = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = zR(e[o])) && (r && (r += " "), r += t);
  return r;
}, Wz = (e, ...t) => {
  let r, o, s, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return r = $z(d), o = r.cache.get, s = r.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = Vz(f, r);
    return s(f, h), h;
  };
  return a = l, (...f) => a(Hz(...f));
}, Uz = [], it = (e) => {
  const t = (r) => r[e] || Uz;
  return t.isThemeGetter = !0, t;
}, FR = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $R = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gz = /^\d+\/\d+$/, Yz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kz = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wo = (e) => Gz.test(e), Ae = (e) => !!e && !Number.isNaN(Number(e)), Er = (e) => !!e && Number.isInteger(Number(e)), nd = (e) => e.endsWith("%") && Ae(e.slice(0, -1)), Un = (e) => Yz.test(e), Jz = () => !0, e3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kz.test(e) && !Xz.test(e)
), BR = () => !1, t3 = (e) => Qz.test(e), n3 = (e) => Zz.test(e), r3 = (e) => !xe(e) && !_e(e), o3 = (e) => ui(e, WR, BR), xe = (e) => FR.test(e), Zr = (e) => ui(e, UR, e3), rd = (e) => ui(e, u3, Ae), $1 = (e) => ui(e, VR, BR), i3 = (e) => ui(e, HR, n3), _l = (e) => ui(e, GR, t3), _e = (e) => $R.test(e), ds = (e) => ci(e, UR), s3 = (e) => ci(e, c3), B1 = (e) => ci(e, VR), a3 = (e) => ci(e, WR), l3 = (e) => ci(e, HR), bl = (e) => ci(e, GR, !0), ui = (e, t, r) => {
  const o = FR.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ci = (e, t, r = !1) => {
  const o = $R.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, VR = (e) => e === "position" || e === "percentage", HR = (e) => e === "image" || e === "url", WR = (e) => e === "length" || e === "size" || e === "bg-size", UR = (e) => e === "length", u3 = (e) => e === "number", c3 = (e) => e === "family-name", GR = (e) => e === "shadow", f3 = () => {
  const e = it("color"), t = it("font"), r = it("text"), o = it("font-weight"), s = it("tracking"), a = it("leading"), l = it("breakpoint"), u = it("container"), f = it("spacing"), d = it("radius"), h = it("shadow"), p = it("inset-shadow"), m = it("text-shadow"), w = it("drop-shadow"), E = it("blur"), y = it("perspective"), x = it("aspect"), S = it("ease"), C = it("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], R = () => [...k(), _e, xe], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], O = () => [_e, xe, f], q = () => [Wo, "full", "auto", ...O()], U = () => [Er, "none", "subgrid", _e, xe], j = () => ["auto", {
    span: ["full", Er, _e, xe]
  }, Er, _e, xe], V = () => [Er, "auto", _e, xe], X = () => ["auto", "min", "max", "fr", _e, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...O()], Y = () => [Wo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, xe], z = () => [...k(), B1, $1, {
    position: [_e, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", a3, o3, {
    size: [_e, xe]
  }], W = () => [nd, ds, Zr], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    xe
  ], $ = () => ["", Ae, ds, Zr], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Ae, nd, B1, $1], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    xe
  ], se = () => ["none", Ae, _e, xe], ae = () => ["none", Ae, _e, xe], ce = () => [Ae, _e, xe], de = () => [Wo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Un],
      breakpoint: [Un],
      color: [Jz],
      container: [Un],
      "drop-shadow": [Un],
      ease: ["in", "out", "in-out"],
      font: [r3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Un],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Un],
      shadow: [Un],
      spacing: ["px", Ae],
      text: [Un],
      "text-shadow": [Un],
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
        aspect: ["auto", "square", Wo, xe, _e, x]
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
        columns: [Ae, xe, _e, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: R()
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
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        inset: q()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": q()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": q()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: q()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: q()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: q()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: q()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: q()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: q()
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
        z: [Er, "auto", _e, xe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Wo, "full", "auto", u, ...O()]
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
        flex: [Ae, Wo, "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ae, _e, xe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ae, _e, xe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Er, "first", "last", "none", _e, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": U()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": U()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
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
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
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
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
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
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
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
        text: ["base", r, ds, Zr]
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
        font: [o, _e, rd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", nd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [s3, xe, t]
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
        tracking: [s, _e, xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ae, "none", _e, rd]
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
        "list-image": ["none", _e, xe]
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
        list: ["disc", "decimal", "none", _e, xe]
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
        decoration: [Ae, "from-font", "auto", _e, Zr]
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
        "underline-offset": [Ae, "auto", _e, xe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _e, xe]
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
        content: ["none", _e, xe]
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
        bg: D()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Er, _e, xe],
          radial: ["", _e, xe],
          conic: [Er, _e, xe]
        }, l3, i3]
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
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
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
        "outline-offset": [Ae, _e, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ae, ds, Zr]
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
          bl,
          _l
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
        "inset-shadow": ["none", p, bl, _l]
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
        "ring-offset": [Ae, Zr]
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
        "text-shadow": ["none", m, bl, _l]
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
        opacity: [Ae, _e, xe]
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
        "mask-linear": [Ae]
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
        "mask-radial": [_e, xe]
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ae]
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
        mask: D()
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
        mask: ["none", _e, xe]
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
          xe
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
        brightness: [Ae, _e, xe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ae, _e, xe]
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
          w,
          bl,
          _l
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
        grayscale: ["", Ae, _e, xe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ae, _e, xe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ae, _e, xe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ae, _e, xe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ae, _e, xe]
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
          xe
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
        "backdrop-brightness": [Ae, _e, xe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ae, _e, xe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ae, _e, xe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ae, _e, xe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ae, _e, xe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ae, _e, xe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ae, _e, xe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ae, _e, xe]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _e, xe]
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
        duration: [Ae, "initial", _e, xe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, _e, xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ae, _e, xe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, _e, xe]
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
        perspective: [y, _e, xe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
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
        transform: [_e, xe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _e, xe]
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
        "will-change": ["auto", "scroll", "contents", "transform", _e, xe]
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
        stroke: [Ae, ds, Zr, rd]
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
}, d3 = /* @__PURE__ */ Wz(f3);
function vt(...e) {
  return d3(LR(e));
}
function mu(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ I.jsx(mu, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: r,
    style: o,
    ...s
  } = e, [a, l] = N.useState(!1);
  return /* @__PURE__ */ I.jsx(
    Ts,
    {
      ...s,
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
      className: vt(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        t
      ),
      children: r
    }
  );
}
const h3 = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function YR(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? ye.Left : ye.Right, m = d.label + (d.required ? " *" : "");
    return /* @__PURE__ */ I.jsx(YR, { type: h, position: p, id: d.id, title: m });
  }
  const {
    className: t,
    labelClassName: r,
    handleClassName: o,
    title: s,
    position: a,
    ...l
  } = e, { ref: u, ...f } = l;
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      title: s,
      className: vt(
        "relative flex items-center",
        h3[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ I.jsx(
          mu,
          {
            position: a,
            className: o,
            ...f
          }
        ),
        /* @__PURE__ */ I.jsx("label", { className: vt("text-foreground px-3", r), children: s })
      ]
    }
  );
}
const p3 = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function KR(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ I.jsx(KR, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ I.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ I.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: r = ye.Bottom,
    children: o,
    ...s
  } = e, a = p3[r || ye.Bottom], l = r === ye.Top || r === ye.Bottom;
  return /* @__PURE__ */ I.jsx(mu, { position: r, id: s.id, ...s, children: t && /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: `absolute flex items-center ${a} pointer-events-none`,
      children: [
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: `bg-gray-300 ${l ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ I.jsx("div", { className: "nodrag nopan pointer-events-auto", children: o })
      ]
    }
  ) });
}
function Kl({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ I.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: vt(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
const XR = cn.createContext(null);
function fi() {
  return cn.useContext(XR);
}
function g3(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()
  ).join(" "), t;
}
function m3(e) {
  var a;
  if ("component" in e) {
    const { component: l, onValueChange: u } = e, f = fi(), d = ((a = f == null ? void 0 : f.nodeData.values) == null ? void 0 : a[l.id]) ?? l.value ?? "", h = l.label ?? g3(l.id);
    return /* @__PURE__ */ I.jsxs("div", { className: "component-text-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600", children: h }),
      /* @__PURE__ */ I.jsx(
        Kl,
        {
          type: "text",
          value: d,
          onChange: (p) => u == null ? void 0 : u(l.id, p.target.value),
          onMouseDown: (p) => p.stopPropagation(),
          onPointerDown: (p) => p.stopPropagation(),
          placeholder: l.placeholder,
          "aria-label": h,
          className: "h-8 text-xs w-full"
        }
      )
    ] });
  }
  const { value: t, onChange: r, placeholder: o, label: s } = e;
  return /* @__PURE__ */ I.jsx(
    Kl,
    {
      type: "text",
      value: t,
      onChange: (l) => r(l.target.value),
      onMouseDown: (l) => l.stopPropagation(),
      onPointerDown: (l) => l.stopPropagation(),
      placeholder: o,
      "aria-label": s,
      className: "h-8 text-xs"
    }
  );
}
function v3(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()
  ).join(" "), t;
}
function y3(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = fi(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? 0, p = u.label ?? v3(u.id);
    return /* @__PURE__ */ I.jsxs("div", { className: "component-number-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600", children: p }),
      /* @__PURE__ */ I.jsx(
        Kl,
        {
          type: "number",
          value: h,
          step: "any",
          onChange: (m) => f == null ? void 0 : f(u.id, Number(m.target.value)),
          onMouseDownCapture: (m) => m.stopPropagation(),
          onPointerDownCapture: (m) => m.stopPropagation(),
          onWheel: (m) => m.currentTarget.blur(),
          "aria-label": p,
          className: "h-8 text-xs w-full"
        }
      )
    ] });
  }
  const { value: t, onChange: r, isInteger: o, placeholder: s, label: a } = e;
  return /* @__PURE__ */ I.jsx(
    Kl,
    {
      type: "number",
      value: t,
      step: o ? 1 : "any",
      onChange: (u) => r(Number(u.target.value)),
      onMouseDownCapture: (u) => u.stopPropagation(),
      onPointerDownCapture: (u) => u.stopPropagation(),
      onWheel: (u) => u.currentTarget.blur(),
      placeholder: s,
      "aria-label": a,
      className: "h-8 text-xs"
    }
  );
}
function V1(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Bs(...e) {
  return (t) => {
    let r = !1;
    const o = e.map((s) => {
      const a = V1(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : V1(e[s], null);
        }
      };
  };
}
function et(...e) {
  return N.useCallback(Bs(...e), e);
}
function vu(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = N.createContext(l), f = r.length;
    r = [...r, l];
    const d = (p) => {
      var S;
      const { scope: m, children: w, ...E } = p, y = ((S = m == null ? void 0 : m[e]) == null ? void 0 : S[f]) || u, x = N.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const w = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = N.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = r.map((l) => N.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return N.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, w3(s, ...t)];
}
function w3(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const p = f(a)[`__scope${d}`];
        return { ...u, ...p };
      }, {});
      return N.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Xe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
var yt = globalThis != null && globalThis.document ? N.useLayoutEffect : () => {
}, x3 = ry[" useInsertionEffect ".trim().toString()] || yt;
function Wv({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: o
}) {
  const [s, a, l] = _3({
    defaultProp: t,
    onChange: r
  }), u = e !== void 0, f = u ? e : s;
  {
    const h = N.useRef(e !== void 0);
    N.useEffect(() => {
      const p = h.current;
      p !== u && console.warn(
        `${o} is changing from ${p ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = u;
    }, [u, o]);
  }
  const d = N.useCallback(
    (h) => {
      var p;
      if (u) {
        const m = b3(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function _3({
  defaultProp: e,
  onChange: t
}) {
  const [r, o] = N.useState(e), s = N.useRef(r), a = N.useRef(t);
  return x3(() => {
    a.current = t;
  }, [t]), N.useEffect(() => {
    var l;
    s.current !== r && ((l = a.current) == null || l.call(a, r), s.current = r);
  }, [r, s]), [r, o, a];
}
function b3(e) {
  return typeof e == "function";
}
function QR(e) {
  const t = N.useRef({ value: e, previous: e });
  return N.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ZR(e) {
  const [t, r] = N.useState(void 0);
  return yt(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let l, u;
        if ("borderBoxSize" in a) {
          const f = a.borderBoxSize, d = Array.isArray(f) ? f[0] : f;
          l = d.inlineSize, u = d.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        r({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function S3(e, t) {
  return N.useReducer((r, o) => t[r][o] ?? r, e);
}
var JR = (e) => {
  const { present: t, children: r } = e, o = E3(t), s = typeof r == "function" ? r({ present: o.isPresent }) : N.Children.only(r), a = et(o.ref, C3(s));
  return typeof r == "function" || o.isPresent ? N.cloneElement(s, { ref: a }) : null;
};
JR.displayName = "Presence";
function E3(e) {
  const [t, r] = N.useState(), o = N.useRef(null), s = N.useRef(e), a = N.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = S3(l, {
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
  return N.useEffect(() => {
    const d = Sl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = s.current;
    if (h !== e) {
      const m = a.current, w = Sl(d);
      e ? f("MOUNT") : w === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (w) => {
        const y = Sl(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && y && (f("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (w) => {
        w.target === t && (a.current = Sl(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: N.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, r(d);
    }, [])
  };
}
function Sl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function C3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function k3(e) {
  const t = /* @__PURE__ */ N3(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(P3);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function N3(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = T3(s), u = A3(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Bs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var R3 = Symbol("radix.slottable");
function P3(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === R3;
}
function A3(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? r[o] = (...u) => {
      const f = a(...u);
      return s(...u), f;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...a } : o === "className" && (r[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function T3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var I3 = [
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
], $e = I3.reduce((e, t) => {
  const r = /* @__PURE__ */ k3(`Primitive.${t}`), o = N.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function M3(e, t) {
  e && $s.flushSync(() => e.dispatchEvent(t));
}
var yu = "Checkbox", [O3] = vu(yu), [L3, by] = O3(yu);
function D3(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: o,
    defaultChecked: s,
    disabled: a,
    form: l,
    name: u,
    onCheckedChange: f,
    required: d,
    value: h = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, w] = Wv({
    prop: r,
    defaultProp: s ?? !1,
    onChange: f,
    caller: yu
  }), [E, y] = N.useState(null), [x, S] = N.useState(null), C = N.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: m,
    disabled: a,
    setChecked: w,
    control: E,
    setControl: y,
    name: u,
    form: l,
    value: h,
    hasConsumerStoppedPropagationRef: C,
    required: d,
    defaultChecked: Rr(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: S
  };
  return /* @__PURE__ */ I.jsx(
    L3,
    {
      scope: t,
      ...k,
      children: q3(p) ? p(k) : o
    }
  );
}
var eP = "CheckboxTrigger", tP = N.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...o }, s) => {
    const {
      control: a,
      value: l,
      disabled: u,
      checked: f,
      required: d,
      setControl: h,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: w,
      bubbleInput: E
    } = by(eP, e), y = et(s, h), x = N.useRef(f);
    return N.useEffect(() => {
      const S = a == null ? void 0 : a.form;
      if (S) {
        const C = () => p(x.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ I.jsx(
      $e.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Rr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": aP(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Xe(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: Xe(r, (S) => {
          p((C) => Rr(C) ? !0 : !C), E && w && (m.current = S.isPropagationStopped(), m.current || S.stopPropagation());
        })
      }
    );
  }
);
tP.displayName = eP;
var nP = N.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: o,
      checked: s,
      defaultChecked: a,
      required: l,
      disabled: u,
      value: f,
      onCheckedChange: d,
      form: h,
      ...p
    } = e;
    return /* @__PURE__ */ I.jsx(
      D3,
      {
        __scopeCheckbox: r,
        checked: s,
        defaultChecked: a,
        disabled: u,
        required: l,
        onCheckedChange: d,
        name: o,
        form: h,
        value: f,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          /* @__PURE__ */ I.jsx(
            tP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ I.jsx(
            sP,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
nP.displayName = yu;
var rP = "CheckboxIndicator", oP = N.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: o, ...s } = e, a = by(rP, r);
    return /* @__PURE__ */ I.jsx(
      JR,
      {
        present: o || Rr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ I.jsx(
          $e.span,
          {
            "data-state": aP(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...s,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
oP.displayName = rP;
var iP = "CheckboxBubbleInput", sP = N.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: o,
      hasConsumerStoppedPropagationRef: s,
      checked: a,
      defaultChecked: l,
      required: u,
      disabled: f,
      name: d,
      value: h,
      form: p,
      bubbleInput: m,
      setBubbleInput: w
    } = by(iP, e), E = et(r, w), y = QR(a), x = ZR(o);
    N.useEffect(() => {
      const C = m;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, A = !s.current;
      if (y !== a && R) {
        const T = new Event("click", { bubbles: A });
        C.indeterminate = Rr(a), R.call(C, Rr(a) ? !1 : a), C.dispatchEvent(T);
      }
    }, [m, y, a, s]);
    const S = N.useRef(Rr(a) ? !1 : a);
    return /* @__PURE__ */ I.jsx(
      $e.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? S.current,
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
          ...x,
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
sP.displayName = iP;
function q3(e) {
  return typeof e == "function";
}
function Rr(e) {
  return e === "indeterminate";
}
function aP(e) {
  return Rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j3 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), z3 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), H1 = (e) => {
  const t = z3(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, lP = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim(), F3 = (e) => {
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
var $3 = {
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
const B3 = N.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => N.createElement(
    "svg",
    {
      ref: f,
      ...$3,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: lP("lucide", s),
      ...!a && !F3(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([d, h]) => N.createElement(d, h)),
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
const Sy = (e, t) => {
  const r = N.forwardRef(
    ({ className: o, ...s }, a) => N.createElement(B3, {
      ref: a,
      iconNode: t,
      className: lP(
        `lucide-${j3(H1(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = H1(e), r;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], uP = Sy("check", V3);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], cP = Sy("chevron-down", H3);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], U3 = Sy("chevron-up", W3);
function W1({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    nP,
    {
      "data-slot": "checkbox",
      className: vt(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(
        oP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ I.jsx(uP, { className: "size-3.5" })
        }
      )
    }
  );
}
function G3(e) {
  var s;
  if ("component" in e) {
    const { component: a, onValueChange: l } = e, u = fi(), f = ((s = u == null ? void 0 : u.nodeData.values) == null ? void 0 : s[a.id]) ?? a.value ?? !1;
    return /* @__PURE__ */ I.jsxs("div", { className: "component-bool-field w-full flex items-center gap-2", children: [
      /* @__PURE__ */ I.jsx(
        W1,
        {
          checked: f,
          onCheckedChange: (d) => l == null ? void 0 : l(a.id, d === !0),
          onMouseDown: (d) => d.stopPropagation(),
          onPointerDown: (d) => d.stopPropagation(),
          "aria-label": a.label,
          className: "h-4 w-4"
        }
      ),
      /* @__PURE__ */ I.jsx("label", { className: "text-sm text-gray-700", children: a.label })
    ] });
  }
  const { value: t, onChange: r, label: o } = e;
  return /* @__PURE__ */ I.jsx(
    W1,
    {
      checked: t,
      onCheckedChange: (a) => r(a === !0),
      onMouseDown: (a) => a.stopPropagation(),
      onPointerDown: (a) => a.stopPropagation(),
      "aria-label": o,
      className: "h-4 w-4"
    }
  );
}
function U1(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function G1(e) {
  const t = /* @__PURE__ */ Y3(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(X3);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Y3(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = Z3(s), u = Q3(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Bs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var K3 = Symbol("radix.slottable");
function X3(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === K3;
}
function Q3(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? r[o] = (...u) => {
      const f = a(...u);
      return s(...u), f;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...a } : o === "className" && (r[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Z3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function J3(e) {
  const t = e + "CollectionProvider", [r, o] = vu(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: S } = y, C = cn.useRef(null), _ = cn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.jsx(s, { scope: x, itemMap: _, collectionRef: C, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ G1(u), d = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C } = y, _ = a(u, S), k = et(x, _.collectionRef);
      return /* @__PURE__ */ I.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ G1(h), w = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C, ..._ } = y, k = cn.useRef(null), R = et(x, k), A = a(h, S);
      return cn.useEffect(() => (A.itemMap.set(k, { ref: k, ..._ }), () => void A.itemMap.delete(k))), /* @__PURE__ */ I.jsx(m, { [p]: "", ref: R, children: C });
    }
  );
  w.displayName = h;
  function E(y) {
    const x = a(e + "CollectionConsumer", y);
    return cn.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (A, T) => _.indexOf(A.ref.current) - _.indexOf(T.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: w },
    E,
    o
  ];
}
var eF = N.createContext(void 0);
function tF(e) {
  const t = N.useContext(eF);
  return e || t || "ltr";
}
function so(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), N.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function nF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e);
  N.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var rF = "DismissableLayer", Uv = "dismissableLayer.update", oF = "dismissableLayer.pointerDownOutside", iF = "dismissableLayer.focusOutside", Y1, fP = N.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), dP = N.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = N.useContext(fP), [h, p] = N.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = N.useState({}), E = et(t, (T) => p(T)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= S, R = lF((T) => {
      const O = T.target, q = [...d.branches].some((U) => U.contains(O));
      !k || q || (s == null || s(T), l == null || l(T), T.defaultPrevented || u == null || u());
    }, m), A = uF((T) => {
      const O = T.target;
      [...d.branches].some((U) => U.contains(O)) || (a == null || a(T), l == null || l(T), T.defaultPrevented || u == null || u());
    }, m);
    return nF((T) => {
      C === d.layers.size - 1 && (o == null || o(T), !T.defaultPrevented && u && (T.preventDefault(), u()));
    }, m), N.useEffect(() => {
      if (h)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Y1 = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), K1(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Y1);
        };
    }, [h, m, r, d]), N.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), K1());
    }, [h, d]), N.useEffect(() => {
      const T = () => w({});
      return document.addEventListener(Uv, T), () => document.removeEventListener(Uv, T);
    }, []), /* @__PURE__ */ I.jsx(
      $e.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Xe(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: Xe(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: Xe(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
dP.displayName = rF;
var sF = "DismissableLayerBranch", aF = N.forwardRef((e, t) => {
  const r = N.useContext(fP), o = N.useRef(null), s = et(t, o);
  return N.useEffect(() => {
    const a = o.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ I.jsx($e.div, { ...e, ref: s });
});
aF.displayName = sF;
function lF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e), o = N.useRef(!1), s = N.useRef(() => {
  });
  return N.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          hP(
            oF,
            r,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = f, t.addEventListener("click", s.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", s.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", a), t.removeEventListener("click", s.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function uF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e), o = N.useRef(!1);
  return N.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && hP(iF, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function K1() {
  const e = new CustomEvent(Uv);
  document.dispatchEvent(e);
}
function hP(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? M3(s, a) : s.dispatchEvent(a);
}
var od = 0;
function cF() {
  N.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? X1()), document.body.insertAdjacentElement("beforeend", e[1] ?? X1()), od++, () => {
      od === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), od--;
    };
  }, []);
}
function X1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var id = "focusScope.autoFocusOnMount", sd = "focusScope.autoFocusOnUnmount", Q1 = { bubbles: !1, cancelable: !0 }, fF = "FocusScope", pP = N.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = N.useState(null), d = so(s), h = so(a), p = N.useRef(null), m = et(t, (y) => f(y)), w = N.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  N.useEffect(() => {
    if (o) {
      let y = function(_) {
        if (w.paused || !u) return;
        const k = _.target;
        u.contains(k) ? p.current = k : Cr(p.current, { select: !0 });
      }, x = function(_) {
        if (w.paused || !u) return;
        const k = _.relatedTarget;
        k !== null && (u.contains(k) || Cr(p.current, { select: !0 }));
      }, S = function(_) {
        if (document.activeElement === document.body)
          for (const R of _)
            R.removedNodes.length > 0 && Cr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(S);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, w.paused]), N.useEffect(() => {
    if (u) {
      J1.add(w);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const S = new CustomEvent(id, Q1);
        u.addEventListener(id, d), u.dispatchEvent(S), S.defaultPrevented || (dF(vF(gP(u)), { select: !0 }), document.activeElement === y && Cr(u));
      }
      return () => {
        u.removeEventListener(id, d), setTimeout(() => {
          const S = new CustomEvent(sd, Q1);
          u.addEventListener(sd, h), u.dispatchEvent(S), S.defaultPrevented || Cr(y ?? document.body, { select: !0 }), u.removeEventListener(sd, h), J1.remove(w);
        }, 0);
      };
    }
  }, [u, d, h, w]);
  const E = N.useCallback(
    (y) => {
      if (!r && !o || w.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, S = document.activeElement;
      if (x && S) {
        const C = y.currentTarget, [_, k] = hF(C);
        _ && k ? !y.shiftKey && S === k ? (y.preventDefault(), r && Cr(_, { select: !0 })) : y.shiftKey && S === _ && (y.preventDefault(), r && Cr(k, { select: !0 })) : S === C && y.preventDefault();
      }
    },
    [r, o, w.paused]
  );
  return /* @__PURE__ */ I.jsx($e.div, { tabIndex: -1, ...l, ref: m, onKeyDown: E });
});
pP.displayName = fF;
function dF(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (Cr(o, { select: t }), document.activeElement !== r) return;
}
function hF(e) {
  const t = gP(e), r = Z1(t, e), o = Z1(t.reverse(), e);
  return [r, o];
}
function gP(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Z1(e, t) {
  for (const r of e)
    if (!pF(r, { upTo: t })) return r;
}
function pF(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function gF(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && gF(e) && t && e.select();
  }
}
var J1 = mF();
function mF() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = e_(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = e_(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function e_(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function vF(e) {
  return e.filter((t) => t.tagName !== "A");
}
var yF = ry[" useId ".trim().toString()] || (() => {
}), wF = 0;
function Ey(e) {
  const [t, r] = N.useState(yF());
  return yt(() => {
    r((o) => o ?? String(wF++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const xF = ["top", "right", "bottom", "left"], Pr = Math.min, Dt = Math.max, Xl = Math.round, El = Math.floor, An = (e) => ({
  x: e,
  y: e
}), _F = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bF = {
  start: "end",
  end: "start"
};
function Gv(e, t, r) {
  return Dt(e, Pr(t, r));
}
function Kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xn(e) {
  return e.split("-")[0];
}
function di(e) {
  return e.split("-")[1];
}
function Cy(e) {
  return e === "x" ? "y" : "x";
}
function ky(e) {
  return e === "y" ? "height" : "width";
}
const SF = /* @__PURE__ */ new Set(["top", "bottom"]);
function Rn(e) {
  return SF.has(Xn(e)) ? "y" : "x";
}
function Ny(e) {
  return Cy(Rn(e));
}
function EF(e, t, r) {
  r === void 0 && (r = !1);
  const o = di(e), s = Ny(e), a = ky(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = Ql(l)), [l, Ql(l)];
}
function CF(e) {
  const t = Ql(e);
  return [Yv(e), t, Yv(t)];
}
function Yv(e) {
  return e.replace(/start|end/g, (t) => bF[t]);
}
const t_ = ["left", "right"], n_ = ["right", "left"], kF = ["top", "bottom"], NF = ["bottom", "top"];
function RF(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? n_ : t_ : t ? t_ : n_;
    case "left":
    case "right":
      return t ? kF : NF;
    default:
      return [];
  }
}
function PF(e, t, r, o) {
  const s = di(e);
  let a = RF(Xn(e), r === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(Yv)))), a;
}
function Ql(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _F[t]);
}
function AF(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mP(e) {
  return typeof e != "number" ? AF(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zl(e) {
  const {
    x: t,
    y: r,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: r,
    left: t,
    right: t + o,
    bottom: r + s,
    x: t,
    y: r
  };
}
function r_(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = Rn(t), l = Ny(t), u = ky(l), f = Xn(t), d = a === "y", h = o.x + o.width / 2 - s.width / 2, p = o.y + o.height / 2 - s.height / 2, m = o[u] / 2 - s[u] / 2;
  let w;
  switch (f) {
    case "top":
      w = {
        x: h,
        y: o.y - s.height
      };
      break;
    case "bottom":
      w = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      w = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      w = {
        x: o.x - s.width,
        y: p
      };
      break;
    default:
      w = {
        x: o.x,
        y: o.y
      };
  }
  switch (di(t)) {
    case "start":
      w[l] -= m * (r && d ? -1 : 1);
      break;
    case "end":
      w[l] += m * (r && d ? -1 : 1);
      break;
  }
  return w;
}
const TF = async (e, t, r) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: l
  } = r, u = a.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: h,
    y: p
  } = r_(d, o, f), m = o, w = {}, E = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: x,
      fn: S
    } = u[y], {
      x: C,
      y: _,
      data: k,
      reset: R
    } = await S({
      x: h,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: s,
      middlewareData: w,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = C ?? h, p = _ ?? p, w = {
      ...w,
      [x]: {
        ...w[x],
        ...k
      }
    }, R && E <= 50 && (E++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (d = R.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : R.rects), {
      x: h,
      y: p
    } = r_(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: s,
    middlewareData: w
  };
};
async function Is(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: a,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: w = 0
  } = Kn(t, e), E = mP(w), x = u[m ? p === "floating" ? "reference" : "floating" : p], S = Zl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(x))) == null || r ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), k = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Zl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: _,
    strategy: f
  }) : C);
  return {
    top: (S.top - R.top + E.top) / k.y,
    bottom: (R.bottom - S.bottom + E.bottom) / k.y,
    left: (S.left - R.left + E.left) / k.x,
    right: (R.right - S.right + E.right) / k.x
  };
}
const IF = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: o,
      placement: s,
      rects: a,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: d,
      padding: h = 0
    } = Kn(e, t) || {};
    if (d == null)
      return {};
    const p = mP(h), m = {
      x: r,
      y: o
    }, w = Ny(s), E = ky(w), y = await l.getDimensions(d), x = w === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[w] - m[w] - a.floating[E], R = m[w] - a.reference[w], A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let T = A ? A[_] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(A))) && (T = u.floating[_] || a.floating[E]);
    const O = k / 2 - R / 2, q = T / 2 - y[E] / 2 - 1, U = Pr(p[S], q), j = Pr(p[C], q), V = U, X = T - y[E] - j, L = T / 2 - y[E] / 2 + O, H = Gv(V, L, X), B = !f.arrow && di(s) != null && L !== H && a.reference[E] / 2 - (L < V ? U : j) - y[E] / 2 < 0, Y = B ? L < V ? L - V : L - X : 0;
    return {
      [w]: m[w] + Y,
      data: {
        [w]: H,
        centerOffset: L - H - Y,
        ...B && {
          alignmentOffset: Y
        }
      },
      reset: B
    };
  }
}), MF = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        middlewareData: a,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: d
      } = t, {
        mainAxis: h = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: y = !0,
        ...x
      } = Kn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const S = Xn(s), C = Rn(u), _ = Xn(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), R = m || (_ || !y ? [Ql(u)] : CF(u)), A = E !== "none";
      !m && A && R.push(...PF(u, y, E, k));
      const T = [u, ...R], O = await Is(t, x), q = [];
      let U = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && q.push(O[S]), p) {
        const L = EF(s, l, k);
        q.push(O[L[0]], O[L[1]]);
      }
      if (U = [...U, {
        placement: s,
        overflows: q
      }], !q.every((L) => L <= 0)) {
        var j, V;
        const L = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, H = T[L];
        if (H && (!(p === "alignment" ? C !== Rn(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        U.every((M) => Rn(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: U
            },
            reset: {
              placement: H
            }
          };
        let B = (V = U.filter((Y) => Y.overflows[0] <= 0).sort((Y, M) => Y.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!B)
          switch (w) {
            case "bestFit": {
              var X;
              const Y = (X = U.filter((M) => {
                if (A) {
                  const z = Rn(M.placement);
                  return z === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, Q) => z + Q, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : X[0];
              Y && (B = Y);
              break;
            }
            case "initialPlacement":
              B = u;
              break;
          }
        if (s !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function o_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function i_(e) {
  return xF.some((t) => e[t] >= 0);
}
const OF = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Kn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Is(t, {
            ...s,
            elementContext: "reference"
          }), l = o_(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: i_(l)
            }
          };
        }
        case "escaped": {
          const a = await Is(t, {
            ...s,
            altBoundary: !0
          }), l = o_(a, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: i_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, vP = /* @__PURE__ */ new Set(["left", "top"]);
async function LF(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Xn(r), u = di(r), f = Rn(r) === "y", d = vP.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Kn(t, e);
  let {
    mainAxis: m,
    crossAxis: w,
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
  return u && typeof E == "number" && (w = u === "end" ? E * -1 : E), f ? {
    x: w * h,
    y: m * d
  } : {
    x: m * d,
    y: w * h
  };
}
const DF = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, o;
      const {
        x: s,
        y: a,
        placement: l,
        middlewareData: u
      } = t, f = await LF(t, e);
      return l === ((r = u.offset) == null ? void 0 : r.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: s + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: l
        }
      };
    }
  };
}, qF = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: o,
        placement: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (x) => {
            let {
              x: S,
              y: C
            } = x;
            return {
              x: S,
              y: C
            };
          }
        },
        ...f
      } = Kn(e, t), d = {
        x: r,
        y: o
      }, h = await Is(t, f), p = Rn(Xn(s)), m = Cy(p);
      let w = d[m], E = d[p];
      if (a) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = w + h[x], _ = w - h[S];
        w = Gv(C, w, _);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[S];
        E = Gv(C, E, _);
      }
      const y = u.fn({
        ...t,
        [m]: w,
        [p]: E
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - o,
          enabled: {
            [m]: a,
            [p]: l
          }
        }
      };
    }
  };
}, jF = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: o,
        placement: s,
        rects: a,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: d = !0
      } = Kn(e, t), h = {
        x: r,
        y: o
      }, p = Rn(s), m = Cy(p);
      let w = h[m], E = h[p];
      const y = Kn(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const _ = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[_] + x.mainAxis, R = a.reference[m] + a.reference[_] - x.mainAxis;
        w < k ? w = k : w > R && (w = R);
      }
      if (d) {
        var S, C;
        const _ = m === "y" ? "width" : "height", k = vP.has(Xn(s)), R = a.reference[p] - a.floating[_] + (k && ((S = l.offset) == null ? void 0 : S[p]) || 0) + (k ? 0 : x.crossAxis), A = a.reference[p] + a.reference[_] + (k ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (k ? x.crossAxis : 0);
        E < R ? E = R : E > A && (E = A);
      }
      return {
        [m]: w,
        [p]: E
      };
    }
  };
}, zF = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        rects: a,
        platform: l,
        elements: u
      } = t, {
        apply: f = () => {
        },
        ...d
      } = Kn(e, t), h = await Is(t, d), p = Xn(s), m = di(s), w = Rn(s) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, S;
      p === "top" || p === "bottom" ? (x = p, S = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (S = p, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Pr(y - h[x], C), R = Pr(E - h[S], _), A = !t.middlewareData.shift;
      let T = k, O = R;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (T = C), A && !m) {
        const U = Dt(h.left, 0), j = Dt(h.right, 0), V = Dt(h.top, 0), X = Dt(h.bottom, 0);
        w ? O = E - 2 * (U !== 0 || j !== 0 ? U + j : Dt(h.left, h.right)) : T = y - 2 * (V !== 0 || X !== 0 ? V + X : Dt(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: O,
        availableHeight: T
      });
      const q = await l.getDimensions(u.floating);
      return E !== q.width || y !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wu() {
  return typeof window < "u";
}
function hi(e) {
  return yP(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function On(e) {
  var t;
  return (t = (yP(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yP(e) {
  return wu() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function gn(e) {
  return wu() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function In(e) {
  return wu() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function s_(e) {
  return !wu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
const FF = /* @__PURE__ */ new Set(["inline", "contents"]);
function Vs(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = mn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !FF.has(s);
}
const $F = /* @__PURE__ */ new Set(["table", "td", "th"]);
function BF(e) {
  return $F.has(hi(e));
}
const VF = [":popover-open", ":modal"];
function xu(e) {
  return VF.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const HF = ["transform", "translate", "scale", "rotate", "perspective"], WF = ["transform", "translate", "scale", "rotate", "perspective", "filter"], UF = ["paint", "layout", "strict", "content"];
function Ry(e) {
  const t = Py(), r = gn(e) ? mn(e) : e;
  return HF.some((o) => r[o] ? r[o] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || WF.some((o) => (r.willChange || "").includes(o)) || UF.some((o) => (r.contain || "").includes(o));
}
function GF(e) {
  let t = Ar(e);
  for (; In(t) && !li(t); ) {
    if (Ry(t))
      return t;
    if (xu(t))
      return null;
    t = Ar(t);
  }
  return null;
}
function Py() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const YF = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function li(e) {
  return YF.has(hi(e));
}
function mn(e) {
  return jt(e).getComputedStyle(e);
}
function _u(e) {
  return gn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ar(e) {
  if (hi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    s_(e) && e.host || // Fallback.
    On(e)
  );
  return s_(t) ? t.host : t;
}
function wP(e) {
  const t = Ar(e);
  return li(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && Vs(t) ? t : wP(t);
}
function Ms(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = wP(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = jt(s);
  if (a) {
    const u = Kv(l);
    return t.concat(l, l.visualViewport || [], Vs(s) ? s : [], u && r ? Ms(u) : []);
  }
  return t.concat(s, Ms(s, [], r));
}
function Kv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function xP(e) {
  const t = mn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = In(e), a = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Xl(r) !== a || Xl(o) !== l;
  return u && (r = a, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function Ay(e) {
  return gn(e) ? e : e.contextElement;
}
function Jo(e) {
  const t = Ay(e);
  if (!In(t))
    return An(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = xP(t);
  let l = (a ? Xl(r.width) : r.width) / o, u = (a ? Xl(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const KF = /* @__PURE__ */ An(0);
function _P(e) {
  const t = jt(e);
  return !Py() || !t.visualViewport ? KF : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function XF(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== jt(e) ? !1 : t;
}
function ao(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Ay(e);
  let l = An(1);
  t && (o ? gn(o) && (l = Jo(o)) : l = Jo(e));
  const u = XF(a, r, o) ? _P(a) : An(0);
  let f = (s.left + u.x) / l.x, d = (s.top + u.y) / l.y, h = s.width / l.x, p = s.height / l.y;
  if (a) {
    const m = jt(a), w = o && gn(o) ? jt(o) : o;
    let E = m, y = Kv(E);
    for (; y && o && w !== E; ) {
      const x = Jo(y), S = y.getBoundingClientRect(), C = mn(y), _ = S.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, k = S.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, p *= x.y, f += _, d += k, E = jt(y), y = Kv(E);
    }
  }
  return Zl({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function bu(e, t) {
  const r = _u(e).scrollLeft;
  return t ? t.left + r : ao(On(e)).left + r;
}
function bP(e, t) {
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - bu(e, r), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function QF(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = On(o), u = t ? xu(t.floating) : !1;
  if (o === l || u && a)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = An(1);
  const h = An(0), p = In(o);
  if ((p || !p && !a) && ((hi(o) !== "body" || Vs(l)) && (f = _u(o)), In(o))) {
    const w = ao(o);
    d = Jo(o), h.x = w.x + o.clientLeft, h.y = w.y + o.clientTop;
  }
  const m = l && !p && !a ? bP(l, f) : An(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: r.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function ZF(e) {
  return Array.from(e.getClientRects());
}
function JF(e) {
  const t = On(e), r = _u(e), o = e.ownerDocument.body, s = Dt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Dt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + bu(e);
  const u = -r.scrollTop;
  return mn(o).direction === "rtl" && (l += Dt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
const a_ = 25;
function e4(e, t) {
  const r = jt(e), o = On(e), s = r.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = Py();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  const d = bu(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), w = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, E = Math.abs(o.clientWidth - p.clientWidth - w);
    E <= a_ && (a -= E);
  } else d <= a_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const t4 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function n4(e, t) {
  const r = ao(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, a = In(e) ? Jo(e) : An(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function l_(e, t, r) {
  let o;
  if (t === "viewport")
    o = e4(e, r);
  else if (t === "document")
    o = JF(On(e));
  else if (gn(t))
    o = n4(t, r);
  else {
    const s = _P(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Zl(o);
}
function SP(e, t) {
  const r = Ar(e);
  return r === t || !gn(r) || li(r) ? !1 : mn(r).position === "fixed" || SP(r, t);
}
function r4(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Ms(e, [], !1).filter((u) => gn(u) && hi(u) !== "body"), s = null;
  const a = mn(e).position === "fixed";
  let l = a ? Ar(e) : e;
  for (; gn(l) && !li(l); ) {
    const u = mn(l), f = Ry(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && t4.has(s.position) || Vs(l) && !f && SP(e, l)) ? o = o.filter((h) => h !== l) : s = u, l = Ar(l);
  }
  return t.set(e, o), o;
}
function o4(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? xu(t) ? [] : r4(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((d, h) => {
    const p = l_(t, h, s);
    return d.top = Dt(p.top, d.top), d.right = Pr(p.right, d.right), d.bottom = Pr(p.bottom, d.bottom), d.left = Dt(p.left, d.left), d;
  }, l_(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function i4(e) {
  const {
    width: t,
    height: r
  } = xP(e);
  return {
    width: t,
    height: r
  };
}
function s4(e, t, r) {
  const o = In(t), s = On(t), a = r === "fixed", l = ao(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = An(0);
  function d() {
    f.x = bu(s);
  }
  if (o || !o && !a)
    if ((hi(t) !== "body" || Vs(s)) && (u = _u(t)), o) {
      const w = ao(t, !0, a, t);
      f.x = w.x + t.clientLeft, f.y = w.y + t.clientTop;
    } else s && d();
  a && !o && s && d();
  const h = s && !o && !a ? bP(s, u) : An(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function ad(e) {
  return mn(e).position === "static";
}
function u_(e, t) {
  if (!In(e) || mn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return On(e) === r && (r = r.ownerDocument.body), r;
}
function EP(e, t) {
  const r = jt(e);
  if (xu(e))
    return r;
  if (!In(e)) {
    let s = Ar(e);
    for (; s && !li(s); ) {
      if (gn(s) && !ad(s))
        return s;
      s = Ar(s);
    }
    return r;
  }
  let o = u_(e, t);
  for (; o && BF(o) && ad(o); )
    o = u_(o, t);
  return o && li(o) && ad(o) && !Ry(o) ? r : o || GF(e) || r;
}
const a4 = async function(e) {
  const t = this.getOffsetParent || EP, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: s4(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function l4(e) {
  return mn(e).direction === "rtl";
}
const u4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: QF,
  getDocumentElement: On,
  getClippingRect: o4,
  getOffsetParent: EP,
  getElementRects: a4,
  getClientRects: ZF,
  getDimensions: i4,
  getScale: Jo,
  isElement: gn,
  isRTL: l4
};
function CP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function c4(e, t) {
  let r = null, o;
  const s = On(e);
  function a() {
    var u;
    clearTimeout(o), (u = r) == null || u.disconnect(), r = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), a();
    const d = e.getBoundingClientRect(), {
      left: h,
      top: p,
      width: m,
      height: w
    } = d;
    if (u || t(), !m || !w)
      return;
    const E = El(p), y = El(s.clientWidth - (h + m)), x = El(s.clientHeight - (p + w)), S = El(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -S + "px",
      threshold: Dt(0, Pr(1, f)) || 1
    };
    let k = !0;
    function R(A) {
      const T = A[0].intersectionRatio;
      if (T !== f) {
        if (!k)
          return l();
        T ? l(!1, T) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !CP(d, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ..._,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, _);
    }
    r.observe(e);
  }
  return l(!0), a;
}
function f4(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Ay(e), h = s || a ? [...d ? Ms(d) : [], ...Ms(t)] : [];
  h.forEach((S) => {
    s && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const p = d && u ? c4(d, r) : null;
  let m = -1, w = null;
  l && (w = new ResizeObserver((S) => {
    let [C] = S;
    C && C.target === d && w && (w.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = w) == null || _.observe(t);
    })), r();
  }), d && !f && w.observe(d), w.observe(t));
  let E, y = f ? ao(e) : null;
  f && x();
  function x() {
    const S = ao(e);
    y && !CP(y, S) && r(), y = S, E = requestAnimationFrame(x);
  }
  return r(), () => {
    var S;
    h.forEach((C) => {
      s && C.removeEventListener("scroll", r), a && C.removeEventListener("resize", r);
    }), p == null || p(), (S = w) == null || S.disconnect(), w = null, f && cancelAnimationFrame(E);
  };
}
const d4 = DF, h4 = qF, p4 = MF, g4 = zF, m4 = OF, c_ = IF, v4 = jF, y4 = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: u4,
    ...r
  }, a = {
    ...s.platform,
    _c: o
  };
  return TF(e, t, {
    ...s,
    platform: a
  });
};
var w4 = typeof document < "u", x4 = function() {
}, Ol = w4 ? N.useLayoutEffect : x4;
function Jl(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, o, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (o = r; o-- !== 0; )
        if (!Jl(e[o], t[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (o = r; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[o]))
        return !1;
    for (o = r; o-- !== 0; ) {
      const a = s[o];
      if (!(a === "_owner" && e.$$typeof) && !Jl(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kP(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function f_(e, t) {
  const r = kP(e);
  return Math.round(t * r) / r;
}
function ld(e) {
  const t = N.useRef(e);
  return Ol(() => {
    t.current = e;
  }), t;
}
function _4(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: a,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: f,
    open: d
  } = e, [h, p] = N.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, w] = N.useState(o);
  Jl(m, o) || w(o);
  const [E, y] = N.useState(null), [x, S] = N.useState(null), C = N.useCallback((M) => {
    M !== A.current && (A.current = M, y(M));
  }, []), _ = N.useCallback((M) => {
    M !== T.current && (T.current = M, S(M));
  }, []), k = a || E, R = l || x, A = N.useRef(null), T = N.useRef(null), O = N.useRef(h), q = f != null, U = ld(f), j = ld(s), V = ld(d), X = N.useCallback(() => {
    if (!A.current || !T.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: m
    };
    j.current && (M.platform = j.current), y4(A.current, T.current, M).then((z) => {
      const Q = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !Jl(O.current, Q) && (O.current = Q, $s.flushSync(() => {
        p(Q);
      }));
    });
  }, [m, t, r, j, V]);
  Ol(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = N.useRef(!1);
  Ol(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Ol(() => {
    if (k && (A.current = k), R && (T.current = R), k && R) {
      if (U.current)
        return U.current(k, R, X);
      X();
    }
  }, [k, R, X, U, q]);
  const H = N.useMemo(() => ({
    reference: A,
    floating: T,
    setReference: C,
    setFloating: _
  }), [C, _]), B = N.useMemo(() => ({
    reference: k,
    floating: R
  }), [k, R]), Y = N.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return M;
    const z = f_(B.floating, h.x), Q = f_(B.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + z + "px, " + Q + "px)",
      ...kP(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: z,
      top: Q
    };
  }, [r, u, B.floating, h.x, h.y]);
  return N.useMemo(() => ({
    ...h,
    update: X,
    refs: H,
    elements: B,
    floatingStyles: Y
  }), [h, X, H, B, Y]);
}
const b4 = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return o && t(o) ? o.current != null ? c_({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? c_({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, S4 = (e, t) => ({
  ...d4(e),
  options: [e, t]
}), E4 = (e, t) => ({
  ...h4(e),
  options: [e, t]
}), C4 = (e, t) => ({
  ...v4(e),
  options: [e, t]
}), k4 = (e, t) => ({
  ...p4(e),
  options: [e, t]
}), N4 = (e, t) => ({
  ...g4(e),
  options: [e, t]
}), R4 = (e, t) => ({
  ...m4(e),
  options: [e, t]
}), P4 = (e, t) => ({
  ...b4(e),
  options: [e, t]
});
var A4 = "Arrow", NP = N.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ I.jsx(
    $e.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ I.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
NP.displayName = A4;
var T4 = NP, Ty = "Popper", [RP, PP] = vu(Ty), [I4, AP] = RP(Ty), TP = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = N.useState(null);
  return /* @__PURE__ */ I.jsx(I4, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
TP.displayName = Ty;
var IP = "PopperAnchor", MP = N.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, a = AP(IP, r), l = N.useRef(null), u = et(t, l), f = N.useRef(null);
    return N.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ I.jsx($e.div, { ...s, ref: u });
  }
);
MP.displayName = IP;
var Iy = "PopperContent", [M4, O4] = RP(Iy), OP = N.forwardRef(
  (e, t) => {
    var K, te, se, ae, ce, de;
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: f = !0,
      collisionBoundary: d = [],
      collisionPadding: h = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: E,
      ...y
    } = e, x = AP(Iy, r), [S, C] = N.useState(null), _ = et(t, (pe) => C(pe)), [k, R] = N.useState(null), A = ZR(k), T = (A == null ? void 0 : A.width) ?? 0, O = (A == null ? void 0 : A.height) ?? 0, q = o + (a !== "center" ? "-" + a : ""), U = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, j = Array.isArray(d) ? d : [d], V = j.length > 0, X = {
      padding: U,
      boundary: j.filter(D4),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: B, isPositioned: Y, middlewareData: M } = _4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: q,
      whileElementsMounted: (...pe) => f4(...pe, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        S4({ mainAxis: s + O, alignmentAxis: l }),
        f && E4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? C4() : void 0,
          ...X
        }),
        f && k4({ ...X }),
        N4({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: me, availableHeight: Re }) => {
            const { width: Ee, height: Qe } = be.reference, Ve = pe.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${me}px`), Ve.setProperty("--radix-popper-available-height", `${Re}px`), Ve.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ve.setProperty("--radix-popper-anchor-height", `${Qe}px`);
          }
        }),
        k && P4({ element: k, padding: u }),
        q4({ arrowWidth: T, arrowHeight: O }),
        m && R4({ strategy: "referenceHidden", ...X })
      ]
    }), [z, Q] = qP(B), D = so(E);
    yt(() => {
      Y && (D == null || D());
    }, [Y, D]);
    const W = (K = M.arrow) == null ? void 0 : K.x, ie = (te = M.arrow) == null ? void 0 : te.y, $ = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = N.useState();
    return yt(() => {
      S && ee(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ I.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: Y ? H.transform : "translate(0, -200%)",
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
        children: /* @__PURE__ */ I.jsx(
          M4,
          {
            scope: r,
            placedSide: z,
            onArrowChange: R,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: $,
            children: /* @__PURE__ */ I.jsx(
              $e.div,
              {
                "data-side": z,
                "data-align": Q,
                ...y,
                ref: _,
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
OP.displayName = Iy;
var LP = "PopperArrow", L4 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, DP = N.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, a = O4(LP, o), l = L4[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ I.jsx(
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
        children: /* @__PURE__ */ I.jsx(
          T4,
          {
            ...s,
            ref: r,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
DP.displayName = LP;
function D4(e) {
  return e !== null;
}
var q4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, S, C;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = qP(r), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((S = s.arrow) == null ? void 0 : S.x) ?? 0) + u / 2, w = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (E = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? p : `${w}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? p : `${w}px`), { data: { x: E, y } };
  }
});
function qP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var j4 = TP, z4 = MP, F4 = OP, $4 = DP, B4 = "Portal", jP = N.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, a] = N.useState(!1);
  yt(() => a(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? dq.createPortal(/* @__PURE__ */ I.jsx($e.div, { ...o, ref: t }), l) : null;
});
jP.displayName = B4;
// @__NO_SIDE_EFFECTS__
function V4(e) {
  const t = /* @__PURE__ */ H4(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(U4);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function H4(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = Y4(s), u = G4(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Bs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var W4 = Symbol("radix.slottable");
function U4(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === W4;
}
function G4(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? r[o] = (...u) => {
      const f = a(...u);
      return s(...u), f;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...a } : o === "className" && (r[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Y4(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var zP = Object.freeze({
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
}), K4 = "VisuallyHidden", X4 = N.forwardRef(
  (e, t) => /* @__PURE__ */ I.jsx(
    $e.span,
    {
      ...e,
      ref: t,
      style: { ...zP, ...e.style }
    }
  )
);
X4.displayName = K4;
var Q4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Uo = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ new WeakMap(), kl = {}, ud = 0, FP = function(e) {
  return e && (e.host || FP(e.parentNode));
}, Z4 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = FP(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, J4 = function(e, t, r, o) {
  var s = Z4(t, Array.isArray(e) ? e : [e]);
  kl[r] || (kl[r] = /* @__PURE__ */ new WeakMap());
  var a = kl[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), d = function(p) {
    !p || u.has(p) || (u.add(p), d(p.parentNode));
  };
  s.forEach(d);
  var h = function(p) {
    !p || f.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var w = m.getAttribute(o), E = w !== null && w !== "false", y = (Uo.get(m) || 0) + 1, x = (a.get(m) || 0) + 1;
          Uo.set(m, y), a.set(m, x), l.push(m), y === 1 && E && Cl.set(m, !0), x === 1 && m.setAttribute(r, "true"), E || m.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", m, S);
        }
    });
  };
  return h(t), u.clear(), ud++, function() {
    l.forEach(function(p) {
      var m = Uo.get(p) - 1, w = a.get(p) - 1;
      Uo.set(p, m), a.set(p, w), m || (Cl.has(p) || p.removeAttribute(o), Cl.delete(p)), w || p.removeAttribute(r);
    }), ud--, ud || (Uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ new WeakMap(), kl = {});
  };
}, e$ = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = Q4(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), J4(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, Nn = function() {
  return Nn = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Nn.apply(this, arguments);
};
function $P(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function t$(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ll = "right-scroll-bar-position", Dl = "width-before-scroll-bar", n$ = "with-scroll-bars-hidden", r$ = "--removed-body-scroll-bar-size";
function cd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function o$(e, t) {
  var r = N.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(o) {
          var s = r.value;
          s !== o && (r.value = o, r.callback(o, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var i$ = typeof window < "u" ? N.useLayoutEffect : N.useEffect, d_ = /* @__PURE__ */ new WeakMap();
function s$(e, t) {
  var r = o$(null, function(o) {
    return e.forEach(function(s) {
      return cd(s, o);
    });
  });
  return i$(function() {
    var o = d_.get(r);
    if (o) {
      var s = new Set(o), a = new Set(e), l = r.current;
      s.forEach(function(u) {
        a.has(u) || cd(u, null);
      }), a.forEach(function(u) {
        s.has(u) || cd(u, l);
      });
    }
    d_.set(r, e);
  }, [e]), r;
}
function a$(e) {
  return e;
}
function l$(e, t) {
  t === void 0 && (t = a$);
  var r = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var l = t(a, o);
      return r.push(l), function() {
        r = r.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; r.length; ) {
        var l = r;
        r = [], l.forEach(a);
      }
      r = {
        push: function(u) {
          return a(u);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var l = [];
      if (r.length) {
        var u = r;
        r = [], u.forEach(a), l = r;
      }
      var f = function() {
        var h = l;
        l = [], h.forEach(a);
      }, d = function() {
        return Promise.resolve().then(f);
      };
      d(), r = {
        push: function(h) {
          l.push(h), d();
        },
        filter: function(h) {
          return l = l.filter(h), r;
        }
      };
    }
  };
  return s;
}
function u$(e) {
  e === void 0 && (e = {});
  var t = l$(null);
  return t.options = Nn({ async: !0, ssr: !1 }, e), t;
}
var BP = function(e) {
  var t = e.sideCar, r = $P(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return N.createElement(o, Nn({}, r));
};
BP.isSideCarExport = !0;
function c$(e, t) {
  return e.useMedium(t), BP;
}
var VP = u$(), fd = function() {
}, Su = N.forwardRef(function(e, t) {
  var r = N.useRef(null), o = N.useState({
    onScrollCapture: fd,
    onWheelCapture: fd,
    onTouchMoveCapture: fd
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, w = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, S = e.as, C = S === void 0 ? "div" : S, _ = e.gapMode, k = $P(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = m, A = s$([r, t]), T = Nn(Nn({}, k), s);
  return N.createElement(
    N.Fragment,
    null,
    h && N.createElement(R, { sideCar: VP, removeScrollBar: d, shards: p, noRelative: w, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: r, gapMode: _ }),
    l ? N.cloneElement(N.Children.only(u), Nn(Nn({}, T), { ref: A })) : N.createElement(C, Nn({}, T, { className: f, ref: A }), u)
  );
});
Su.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Su.classNames = {
  fullWidth: Dl,
  zeroRight: Ll
};
var f$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function d$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = f$();
  return t && e.setAttribute("nonce", t), e;
}
function h$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function p$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var g$ = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = d$()) && (h$(t, r), p$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, m$ = function() {
  var e = g$();
  return function(t, r) {
    N.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, HP = function() {
  var e = m$(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, v$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, dd = function(e) {
  return parseInt(e || "", 10) || 0;
}, y$ = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [dd(r), dd(o), dd(s)];
}, w$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return v$;
  var t = y$(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, x$ = HP(), ei = "data-scroll-locked", _$ = function(e, t, r, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(n$, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ei, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(o, `;
    `),
    r === "padding" && "padding-right: ".concat(u, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ll, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Dl, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ll, " .").concat(Ll, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Dl, " .").concat(Dl, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ei, `] {
    `).concat(r$, ": ").concat(u, `px;
  }
`);
}, h_ = function() {
  var e = parseInt(document.body.getAttribute(ei) || "0", 10);
  return isFinite(e) ? e : 0;
}, b$ = function() {
  N.useEffect(function() {
    return document.body.setAttribute(ei, (h_() + 1).toString()), function() {
      var e = h_() - 1;
      e <= 0 ? document.body.removeAttribute(ei) : document.body.setAttribute(ei, e.toString());
    };
  }, []);
}, S$ = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  b$();
  var a = N.useMemo(function() {
    return w$(s);
  }, [s]);
  return N.createElement(x$, { styles: _$(a, !t, s, r ? "" : "!important") });
}, Xv = !1;
if (typeof window < "u")
  try {
    var Nl = Object.defineProperty({}, "passive", {
      get: function() {
        return Xv = !0, !0;
      }
    });
    window.addEventListener("test", Nl, Nl), window.removeEventListener("test", Nl, Nl);
  } catch {
    Xv = !1;
  }
var Go = Xv ? { passive: !1 } : !1, E$ = function(e) {
  return e.tagName === "TEXTAREA";
}, WP = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !E$(e) && r[t] === "visible")
  );
}, C$ = function(e) {
  return WP(e, "overflowY");
}, k$ = function(e) {
  return WP(e, "overflowX");
}, p_ = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = UP(e, o);
    if (s) {
      var a = GP(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, N$ = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, R$ = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, UP = function(e, t) {
  return e === "v" ? C$(t) : k$(t);
}, GP = function(e, t) {
  return e === "v" ? N$(t) : R$(t);
}, P$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, A$ = function(e, t, r, o, s) {
  var a = P$(e, window.getComputedStyle(t).direction), l = a * o, u = r.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var w = GP(e, u), E = w[0], y = w[1], x = w[2], S = y - x - a * E;
    (E || S) && UP(e, u) && (p += S, m += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Rl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, g_ = function(e) {
  return [e.deltaX, e.deltaY];
}, m_ = function(e) {
  return e && "current" in e ? e.current : e;
}, T$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, I$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, M$ = 0, Yo = [];
function O$(e) {
  var t = N.useRef([]), r = N.useRef([0, 0]), o = N.useRef(), s = N.useState(M$++)[0], a = N.useState(HP)[0], l = N.useRef(e);
  N.useEffect(function() {
    l.current = e;
  }, [e]), N.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = t$([e.lockRef.current], (e.shards || []).map(m_), !0).filter(Boolean);
      return y.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), y.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = N.useCallback(function(y, x) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !l.current.allowPinchZoom;
    var S = Rl(y), C = r.current, _ = "deltaX" in y ? y.deltaX : C[0] - S[0], k = "deltaY" in y ? y.deltaY : C[1] - S[1], R, A = y.target, T = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && T === "h" && A.type === "range")
      return !1;
    var O = window.getSelection(), q = O && O.anchorNode, U = q ? q === A || q.contains(A) : !1;
    if (U)
      return !1;
    var j = p_(T, A);
    if (!j)
      return !0;
    if (j ? R = T : (R = T === "v" ? "h" : "v", j = p_(T, A)), !j)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = R), !R)
      return !0;
    var V = o.current || R;
    return A$(V, x, y, V === "h" ? _ : k);
  }, []), f = N.useCallback(function(y) {
    var x = y;
    if (!(!Yo.length || Yo[Yo.length - 1] !== a)) {
      var S = "deltaY" in x ? g_(x) : Rl(x), C = t.current.filter(function(R) {
        return R.name === x.type && (R.target === x.target || x.target === R.shadowParent) && T$(R.delta, S);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(m_).filter(Boolean).filter(function(R) {
          return R.contains(x.target);
        }), k = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        k && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = N.useCallback(function(y, x, S, C) {
    var _ = { name: y, delta: x, target: S, should: C, shadowParent: L$(S) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = N.useCallback(function(y) {
    r.current = Rl(y), o.current = void 0;
  }, []), p = N.useCallback(function(y) {
    d(y.type, g_(y), y.target, u(y, e.lockRef.current));
  }, []), m = N.useCallback(function(y) {
    d(y.type, Rl(y), y.target, u(y, e.lockRef.current));
  }, []);
  N.useEffect(function() {
    return Yo.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", f, Go), document.addEventListener("touchmove", f, Go), document.addEventListener("touchstart", h, Go), function() {
      Yo = Yo.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, Go), document.removeEventListener("touchmove", f, Go), document.removeEventListener("touchstart", h, Go);
    };
  }, []);
  var w = e.removeScrollBar, E = e.inert;
  return N.createElement(
    N.Fragment,
    null,
    E ? N.createElement(a, { styles: I$(s) }) : null,
    w ? N.createElement(S$, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function L$(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const D$ = c$(VP, O$);
var YP = N.forwardRef(function(e, t) {
  return N.createElement(Su, Nn({}, e, { ref: t, sideCar: D$ }));
});
YP.classNames = Su.classNames;
var q$ = [" ", "Enter", "ArrowUp", "ArrowDown"], j$ = [" ", "Enter"], lo = "Select", [Eu, Cu, z$] = J3(lo), [pi] = vu(lo, [
  z$,
  PP
]), ku = PP(), [F$, Tr] = pi(lo), [$$, B$] = pi(lo), KP = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    value: l,
    defaultValue: u,
    onValueChange: f,
    dir: d,
    name: h,
    autoComplete: p,
    disabled: m,
    required: w,
    form: E
  } = e, y = ku(t), [x, S] = N.useState(null), [C, _] = N.useState(null), [k, R] = N.useState(!1), A = tF(d), [T, O] = Wv({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: lo
  }), [q, U] = Wv({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: lo
  }), j = N.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = N.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ I.jsx(j4, { ...y, children: /* @__PURE__ */ I.jsxs(
    F$,
    {
      required: w,
      scope: t,
      trigger: x,
      onTriggerChange: S,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: R,
      contentId: Ey(),
      value: q,
      onValueChange: U,
      open: T,
      onOpenChange: O,
      dir: A,
      triggerPointerDownPosRef: j,
      disabled: m,
      children: [
        /* @__PURE__ */ I.jsx(Eu.Provider, { scope: t, children: /* @__PURE__ */ I.jsx(
          $$,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: N.useCallback((B) => {
              L((Y) => new Set(Y).add(B));
            }, []),
            onNativeOptionRemove: N.useCallback((B) => {
              L((Y) => {
                const M = new Set(Y);
                return M.delete(B), M;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ I.jsxs(
          vA,
          {
            "aria-hidden": !0,
            required: w,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: q,
            onChange: (B) => U(B.target.value),
            disabled: m,
            form: E,
            children: [
              q === void 0 ? /* @__PURE__ */ I.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
KP.displayName = lo;
var XP = "SelectTrigger", QP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, a = ku(r), l = Tr(XP, r), u = l.disabled || o, f = et(t, l.onTriggerChange), d = Cu(r), h = N.useRef("touch"), [p, m, w] = wA((y) => {
      const x = d().filter((_) => !_.disabled), S = x.find((_) => _.value === l.value), C = xA(x, y, S);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), w()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ I.jsx(z4, { asChild: !0, ...a, children: /* @__PURE__ */ I.jsx(
      $e.button,
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
        "data-placeholder": yA(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: Xe(s.onClick, (y) => {
          y.currentTarget.focus(), h.current !== "mouse" && E(y);
        }),
        onPointerDown: Xe(s.onPointerDown, (y) => {
          h.current = y.pointerType;
          const x = y.target;
          x.hasPointerCapture(y.pointerId) && x.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (E(y), y.preventDefault());
        }),
        onKeyDown: Xe(s.onKeyDown, (y) => {
          const x = p.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && q$.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
QP.displayName = XP;
var ZP = "SelectValue", JP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: a, placeholder: l = "", ...u } = e, f = Tr(ZP, r), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = et(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ I.jsx(
      $e.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: yA(f.value) ? /* @__PURE__ */ I.jsx(I.Fragment, { children: l }) : a
      }
    );
  }
);
JP.displayName = ZP;
var V$ = "SelectIcon", eA = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
eA.displayName = V$;
var H$ = "SelectPortal", tA = (e) => /* @__PURE__ */ I.jsx(jP, { asChild: !0, ...e });
tA.displayName = H$;
var uo = "SelectContent", nA = N.forwardRef(
  (e, t) => {
    const r = Tr(uo, e.__scopeSelect), [o, s] = N.useState();
    if (yt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = o;
      return a ? $s.createPortal(
        /* @__PURE__ */ I.jsx(rA, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx(Eu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ I.jsx(oA, { ...e, ref: t });
  }
);
nA.displayName = uo;
var un = 10, [rA, Ir] = pi(uo), W$ = "SelectContentImpl", U$ = /* @__PURE__ */ V4("SelectContent.RemoveScroll"), oA = N.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: o = "item-aligned",
      onCloseAutoFocus: s,
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
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x,
      //
      ...S
    } = e, C = Tr(uo, r), [_, k] = N.useState(null), [R, A] = N.useState(null), T = et(t, (K) => k(K)), [O, q] = N.useState(null), [U, j] = N.useState(
      null
    ), V = Cu(r), [X, L] = N.useState(!1), H = N.useRef(!1);
    N.useEffect(() => {
      if (_) return e$(_);
    }, [_]), cF();
    const B = N.useCallback(
      (K) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of K)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && R && (R.scrollTop = 0), de === ae && R && (R.scrollTop = R.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, R]
    ), Y = N.useCallback(
      () => B([O, _]),
      [B, O, _]
    );
    N.useEffect(() => {
      X && Y();
    }, [X, Y]);
    const { onOpenChange: M, triggerPointerDownPosRef: z } = C;
    N.useEffect(() => {
      if (_) {
        let K = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          K = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = z.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = z.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, z]), N.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [Q, D] = wA((K) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = xA(te, K, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), W = N.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (q(K), ae && (H.current = !0));
      },
      [C.value]
    ), ie = N.useCallback(() => _ == null ? void 0 : _.focus(), [_]), $ = N.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && j(K);
      },
      [C.value]
    ), Z = o === "popper" ? Qv : iA, ee = Z === Qv ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ I.jsx(
      rA,
      {
        scope: r,
        content: _,
        viewport: R,
        onViewportChange: A,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: $,
        focusSelectedItem: Y,
        selectedItemText: U,
        position: o,
        isPositioned: X,
        searchRef: Q,
        children: /* @__PURE__ */ I.jsx(YP, { as: U$, allowPinchZoom: !0, children: /* @__PURE__ */ I.jsx(
          pP,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: Xe(s, (K) => {
              var te;
              (te = C.trigger) == null || te.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ I.jsx(
              dP,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ I.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ...S,
                    ...ee,
                    onPlaced: () => L(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: Xe(S.onKeyDown, (K) => {
                      const te = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !te && K.key.length === 1 && D(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let ae = V().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const ce = K.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => B(ae)), K.preventDefault();
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
oA.displayName = W$;
var G$ = "SelectItemAlignedPosition", iA = N.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, a = Tr(uo, r), l = Ir(uo, r), [u, f] = N.useState(null), [d, h] = N.useState(null), p = et(t, (T) => h(T)), m = Cu(r), w = N.useRef(!1), E = N.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = l, _ = N.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && S) {
      const T = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), q = a.valueNode.getBoundingClientRect(), U = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = U.left - O.left, de = q.left - ce, pe = T.left - de, be = T.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - un, Ee = U1(de, [
          un,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(un, Re - me)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - U.right, de = window.innerWidth - q.right - ce, pe = window.innerWidth - T.right - de, be = T.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - un, Ee = U1(de, [
          un,
          Math.max(un, Re - me)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const j = m(), V = window.innerHeight - un * 2, X = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), B = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), z = H + B + X + M + Y, Q = Math.min(x.offsetHeight * 5, z), D = window.getComputedStyle(y), W = parseInt(D.paddingTop, 10), ie = parseInt(D.paddingBottom, 10), $ = T.top + T.height / 2 - un, Z = V - $, ee = x.offsetHeight / 2, K = x.offsetTop + ee, te = H + B + K, se = z - te;
      if (te <= $) {
        const ce = j.length > 0 && x === j[j.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + Y
        ), be = te + pe;
        u.style.height = be + "px";
      } else {
        const ce = j.length > 0 && x === j[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          $,
          H + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? W : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - $ + y.offsetTop;
      }
      u.style.margin = `${un}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    u,
    d,
    y,
    x,
    S,
    a.dir,
    o
  ]);
  yt(() => _(), [_]);
  const [k, R] = N.useState();
  yt(() => {
    d && R(window.getComputedStyle(d).zIndex);
  }, [d]);
  const A = N.useCallback(
    (T) => {
      T && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ I.jsx(
    K$,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ I.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: k
          },
          children: /* @__PURE__ */ I.jsx(
            $e.div,
            {
              ...s,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
iA.displayName = G$;
var Y$ = "SelectPopperPosition", Qv = N.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = un,
    ...a
  } = e, l = ku(r);
  return /* @__PURE__ */ I.jsx(
    F4,
    {
      ...l,
      ...a,
      ref: t,
      align: o,
      collisionPadding: s,
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
Qv.displayName = Y$;
var [K$, My] = pi(uo, {}), Zv = "SelectViewport", sA = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, a = Ir(Zv, r), l = My(Zv, r), u = et(t, a.onViewportChange), f = N.useRef(0);
    return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ I.jsx(Eu.Slot, { scope: r, children: /* @__PURE__ */ I.jsx(
        $e.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
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
            ...s.style
          },
          onScroll: Xe(s.onScroll, (d) => {
            const h = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = l;
            if (m != null && m.current && p) {
              const w = Math.abs(f.current - h.scrollTop);
              if (w > 0) {
                const E = window.innerHeight - un * 2, y = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), S = Math.max(y, x);
                if (S < E) {
                  const C = S + w, _ = Math.min(E, C), k = C - _;
                  p.style.height = _ + "px", p.style.bottom === "0px" && (h.scrollTop = k > 0 ? k : 0, p.style.justifyContent = "flex-end");
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
sA.displayName = Zv;
var aA = "SelectGroup", [X$, Q$] = pi(aA), Z$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Ey();
    return /* @__PURE__ */ I.jsx(X$, { scope: r, id: s, children: /* @__PURE__ */ I.jsx($e.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
Z$.displayName = aA;
var lA = "SelectLabel", J$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Q$(lA, r);
    return /* @__PURE__ */ I.jsx($e.div, { id: s.id, ...o, ref: t });
  }
);
J$.displayName = lA;
var eu = "SelectItem", [eB, uA] = pi(eu), cA = N.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...l
    } = e, u = Tr(eu, r), f = Ir(eu, r), d = u.value === o, [h, p] = N.useState(a ?? ""), [m, w] = N.useState(!1), E = et(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, s);
      }
    ), y = Ey(), x = N.useRef("touch"), S = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ I.jsx(
      eB,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: y,
        isSelected: d,
        onItemTextChange: N.useCallback((C) => {
          p((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ I.jsx(
          Eu.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: h,
            children: /* @__PURE__ */ I.jsx(
              $e.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: E,
                onFocus: Xe(l.onFocus, () => w(!0)),
                onBlur: Xe(l.onBlur, () => w(!1)),
                onClick: Xe(l.onClick, () => {
                  x.current !== "mouse" && S();
                }),
                onPointerUp: Xe(l.onPointerUp, () => {
                  x.current === "mouse" && S();
                }),
                onPointerDown: Xe(l.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: Xe(l.onPointerMove, (C) => {
                  var _;
                  x.current = C.pointerType, s ? (_ = f.onItemLeave) == null || _.call(f) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Xe(l.onPointerLeave, (C) => {
                  var _;
                  C.currentTarget === document.activeElement && ((_ = f.onItemLeave) == null || _.call(f));
                }),
                onKeyDown: Xe(l.onKeyDown, (C) => {
                  var k;
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (j$.includes(C.key) && S(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cA.displayName = eu;
var gs = "SelectItemText", fA = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...a } = e, l = Tr(gs, r), u = Ir(gs, r), f = uA(gs, r), d = B$(gs, r), [h, p] = N.useState(null), m = et(
      t,
      (S) => p(S),
      f.onItemTextChange,
      (S) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, S, f.value, f.disabled);
      }
    ), w = h == null ? void 0 : h.textContent, E = N.useMemo(
      () => /* @__PURE__ */ I.jsx("option", { value: f.value, disabled: f.disabled, children: w }, f.value),
      [f.disabled, f.value, w]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return yt(() => (y(E), () => x(E)), [y, x, E]), /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx($e.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? $s.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
fA.displayName = gs;
var dA = "SelectItemIndicator", hA = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return uA(dA, r).isSelected ? /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
hA.displayName = dA;
var Jv = "SelectScrollUpButton", pA = N.forwardRef((e, t) => {
  const r = Ir(Jv, e.__scopeSelect), o = My(Jv, e.__scopeSelect), [s, a] = N.useState(!1), l = et(t, o.onScrollButtonChange);
  return yt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const d = f.scrollTop > 0;
        a(d);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ I.jsx(
    mA,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = r;
        u && f && (u.scrollTop = u.scrollTop - f.offsetHeight);
      }
    }
  ) : null;
});
pA.displayName = Jv;
var ey = "SelectScrollDownButton", gA = N.forwardRef((e, t) => {
  const r = Ir(ey, e.__scopeSelect), o = My(ey, e.__scopeSelect), [s, a] = N.useState(!1), l = et(t, o.onScrollButtonChange);
  return yt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const d = f.scrollHeight - f.clientHeight, h = Math.ceil(f.scrollTop) < d;
        a(h);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ I.jsx(
    mA,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = r;
        u && f && (u.scrollTop = u.scrollTop + f.offsetHeight);
      }
    }
  ) : null;
});
gA.displayName = ey;
var mA = N.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, a = Ir("SelectScrollButton", r), l = N.useRef(null), u = Cu(r), f = N.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return N.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((p) => p.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ I.jsx(
    $e.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Xe(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Xe(s.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Xe(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), tB = "SelectSeparator", nB = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ I.jsx($e.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
nB.displayName = tB;
var ty = "SelectArrow", rB = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = ku(r), a = Tr(ty, r), l = Ir(ty, r);
    return a.open && l.position === "popper" ? /* @__PURE__ */ I.jsx($4, { ...s, ...o, ref: t }) : null;
  }
);
rB.displayName = ty;
var oB = "SelectBubbleInput", vA = N.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, o) => {
    const s = N.useRef(null), a = et(o, s), l = QR(t);
    return N.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== t && h) {
        const p = new Event("change", { bubbles: !0 });
        h.call(u, t), u.dispatchEvent(p);
      }
    }, [l, t]), /* @__PURE__ */ I.jsx(
      $e.select,
      {
        ...r,
        style: { ...zP, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
vA.displayName = oB;
function yA(e) {
  return e === "" || e === void 0;
}
function wA(e) {
  const t = so(e), r = N.useRef(""), o = N.useRef(0), s = N.useCallback(
    (l) => {
      const u = r.current + l;
      t(u), (function f(d) {
        r.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      })(u);
    },
    [t]
  ), a = N.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return N.useEffect(() => () => window.clearTimeout(o.current), []), [r, s, a];
}
function xA(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let l = iB(e, Math.max(a, 0));
  s.length === 1 && (l = l.filter((d) => d !== r));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function iB(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var sB = KP, aB = QP, lB = JP, uB = eA, cB = tA, fB = nA, dB = sA, hB = cA, pB = fA, gB = hA, mB = pA, vB = gA;
function v_({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(sB, { "data-slot": "select", ...e });
}
function y_({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(lB, { "data-slot": "select-value", ...e });
}
function w_({
  className: e,
  size: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ I.jsxs(
    aB,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: vt(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ I.jsx(uB, { asChild: !0, children: /* @__PURE__ */ I.jsx(cP, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function x_({
  className: e,
  children: t,
  position: r = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ I.jsx(cB, { children: /* @__PURE__ */ I.jsxs(
    fB,
    {
      "data-slot": "select-content",
      className: vt(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ I.jsx(yB, {}),
        /* @__PURE__ */ I.jsx(
          dB,
          {
            className: vt(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ I.jsx(wB, {})
      ]
    }
  ) });
}
function __({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsxs(
    hB,
    {
      "data-slot": "select-item",
      className: vt(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ I.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ I.jsx(gB, { children: /* @__PURE__ */ I.jsx(uP, { className: "size-4" }) }) }),
        /* @__PURE__ */ I.jsx(pB, { children: t })
      ]
    }
  );
}
function yB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    mB,
    {
      "data-slot": "select-scroll-up-button",
      className: vt(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(U3, { className: "size-4" })
    }
  );
}
function wB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    vB,
    {
      "data-slot": "select-scroll-down-button",
      className: vt(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(cP, { className: "size-4" })
    }
  );
}
function xB(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = fi(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? "";
    return /* @__PURE__ */ I.jsxs("div", { className: "component-select-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600", children: u.label }),
      /* @__PURE__ */ I.jsxs(v_, { value: h, onValueChange: (p) => f == null ? void 0 : f(u.id, p), children: [
        /* @__PURE__ */ I.jsx(
          w_,
          {
            className: "h-8 text-xs w-full",
            onMouseDown: (p) => p.stopPropagation(),
            onPointerDown: (p) => p.stopPropagation(),
            "aria-label": u.label,
            children: /* @__PURE__ */ I.jsx(y_, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ I.jsx(x_, { children: (u.options || []).map((p) => /* @__PURE__ */ I.jsx(__, { value: p, className: "text-xs", children: p }, p)) })
      ] })
    ] });
  }
  const { value: t, options: r, onChange: o, placeholder: s, label: a } = e;
  return /* @__PURE__ */ I.jsxs(v_, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ I.jsx(
      w_,
      {
        className: "h-8 text-xs",
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ I.jsx(y_, { placeholder: s })
      }
    ),
    /* @__PURE__ */ I.jsx(x_, { children: r.map((u) => /* @__PURE__ */ I.jsx(__, { value: u, className: "text-xs", children: u }, u)) })
  ] });
}
function _B(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = N.createContext(l);
    u.displayName = a + "Context";
    const f = r.length;
    r = [...r, l];
    const d = (p) => {
      var S;
      const { scope: m, children: w, ...E } = p, y = ((S = m == null ? void 0 : m[e]) == null ? void 0 : S[f]) || u, x = N.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const w = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = N.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = r.map((l) => N.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return N.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, bB(s, ...t)];
}
function bB(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const p = f(a)[`__scope${d}`];
        return { ...u, ...p };
      }, {});
      return N.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var SB = Symbol.for("react.lazy"), tu = ry[" use ".trim().toString()];
function EB(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _A(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === SB && "_payload" in e && EB(e._payload);
}
// @__NO_SIDE_EFFECTS__
function bA(e) {
  const t = /* @__PURE__ */ kB(e), r = N.forwardRef((o, s) => {
    let { children: a, ...l } = o;
    _A(a) && typeof tu == "function" && (a = tu(a._payload));
    const u = N.Children.toArray(a), f = u.find(RB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var CB = /* @__PURE__ */ bA("Slot");
// @__NO_SIDE_EFFECTS__
function kB(e) {
  const t = N.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    if (_A(s) && typeof tu == "function" && (s = tu(s._payload)), N.isValidElement(s)) {
      const l = AB(s), u = PB(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Bs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var NB = Symbol("radix.slottable");
function RB(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === NB;
}
function PB(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? r[o] = (...u) => {
      const f = a(...u);
      return s(...u), f;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...a } : o === "className" && (r[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function AB(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var TB = [
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
], SA = TB.reduce((e, t) => {
  const r = /* @__PURE__ */ bA(`Primitive.${t}`), o = N.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Oy = "Progress", Ly = 100, [IB] = _B(Oy), [MB, OB] = IB(Oy), EA = N.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: a = LB,
      ...l
    } = e;
    (s || s === 0) && !b_(s) && console.error(DB(`${s}`, "Progress"));
    const u = b_(s) ? s : Ly;
    o !== null && !S_(o, u) && console.error(qB(`${o}`, "Progress"));
    const f = S_(o, u) ? o : null, d = nu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ I.jsx(MB, { scope: r, value: f, max: u, children: /* @__PURE__ */ I.jsx(
      SA.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": nu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": NA(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
EA.displayName = Oy;
var CA = "ProgressIndicator", kA = N.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = OB(CA, r);
    return /* @__PURE__ */ I.jsx(
      SA.div,
      {
        "data-state": NA(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
kA.displayName = CA;
function LB(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function NA(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function nu(e) {
  return typeof e == "number";
}
function b_(e) {
  return nu(e) && !isNaN(e) && e > 0;
}
function S_(e, t) {
  return nu(e) && !isNaN(e) && e <= t && e >= 0;
}
function DB(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ly}\`.`;
}
function qB(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ly} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var jB = EA, zB = kA;
function E_({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsx(
    jB,
    {
      "data-slot": "progress",
      className: vt(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ I.jsx(
        zB,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function FB(e) {
  var u;
  if ("component" in e) {
    const { component: f } = e, d = fi(), h = ((u = d == null ? void 0 : d.nodeData.values) == null ? void 0 : u[f.id]) ?? f.value ?? 0, p = f.max ?? 100, m = f.min ?? 0, w = Math.min(100, Math.max(0, (h - m) / (p - m) * 100));
    return /* @__PURE__ */ I.jsxs("div", { className: "component-progress-field space-y-1.5", children: [
      f.label && /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600", children: f.label }),
      /* @__PURE__ */ I.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ I.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ I.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
          Math.round(w),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ I.jsx(E_, { value: w, className: "h-2" })
    ] });
  }
  const { value: t, onChange: r, label: o, min: s = 0, max: a = 100 } = e, l = Math.min(100, Math.max(0, (t - s) / (a - s) * 100));
  return /* @__PURE__ */ I.jsxs("div", { className: "space-y-1.5", children: [
    o && /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600", children: o }),
    /* @__PURE__ */ I.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ I.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
      /* @__PURE__ */ I.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ I.jsx(E_, { value: l, className: "h-2" })
  ] });
}
function $B({ component: e }) {
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: "component-header px-3 py-2 font-semibold flex items-center gap-2",
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: e.bgColor,
        color: e.textColor
      },
      children: [
        e.icon && /* @__PURE__ */ I.jsx("span", { children: e.icon }),
        /* @__PURE__ */ I.jsx("span", { children: e.label })
      ]
    }
  );
}
function BB({ component: e }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `component-footer px-3 py-2 text-xs text-muted-foreground border-t ${e.className || ""}`,
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: e.bgColor,
        color: e.textColor
      },
      children: e.text
    }
  );
}
const C_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, k_ = LR, VB = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return k_(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((d) => {
    const h = r == null ? void 0 : r[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = C_(h) || C_(p);
    return s[d][m];
  }), u = r && Object.entries(r).reduce((d, h) => {
    let [p, m] = h;
    return m === void 0 || (d[p] = m), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: p, className: m, ...w } = h;
    return Object.entries(w).every((E) => {
      let [y, x] = E;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...u
      }[y]) : {
        ...a,
        ...u
      }[y] === x;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return k_(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, HB = VB(
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
function WB({
  className: e,
  variant: t,
  size: r,
  asChild: o = !1,
  ...s
}) {
  const a = o ? CB : "button";
  return /* @__PURE__ */ I.jsx(
    a,
    {
      "data-slot": "button",
      className: vt(HB({ variant: t, size: r, className: e })),
      ...s
    }
  );
}
function UB({ component: e, onValueChange: t }) {
  var a;
  const r = fi(), o = ((a = r == null ? void 0 : r.nodeData.values) == null ? void 0 : a[e.id]) ?? e.value ?? 0, s = () => {
    const l = o + 1;
    t == null || t(e.id, l);
  };
  return /* @__PURE__ */ I.jsx(
    WB,
    {
      variant: e.variant || "default",
      size: e.size || "default",
      disabled: e.disabled || !1,
      onClick: s,
      onMouseDown: (l) => l.stopPropagation(),
      onPointerDown: (l) => l.stopPropagation(),
      className: "w-full",
      style: {
        backgroundColor: e.bgColor,
        color: e.textColor,
        width: "100%",
        height: "100%"
      },
      children: e.label
    }
  );
}
function GB({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function YB({ component: e }) {
  return /* @__PURE__ */ I.jsx(
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
function KB({
  cell: e,
  nodeId: t,
  onValueChange: r
}) {
  const o = e.layout || { type: "flex", direction: "column" }, s = XB(e), a = QB(o);
  return /* @__PURE__ */ I.jsx("div", { className: "nested-grid-cell", style: s, children: /* @__PURE__ */ I.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => /* @__PURE__ */ I.jsx(
    RA,
    {
      component: l,
      nodeId: t,
      onValueChange: r
    },
    l.id
  )) }) });
}
function XB(e) {
  const t = e.coordinates.row_span || 1, r = e.coordinates.col_span || 1;
  return {
    gridRow: `${e.coordinates.row} / span ${t}`,
    gridColumn: `${e.coordinates.col} / span ${r}`
  };
}
function QB(e) {
  return !e || e.type === "flex" || !e.type ? {
    display: "flex",
    flexDirection: (e == null ? void 0 : e.direction) || "column",
    alignItems: (e == null ? void 0 : e.align) || "start",
    justifyContent: (e == null ? void 0 : e.justify) || "start",
    gap: (e == null ? void 0 : e.gap) || "4px",
    height: "100%",
    width: "100%"
  } : e.type === "grid" ? {
    display: "grid",
    gap: e.gap || "4px",
    alignItems: e.align || "start",
    justifyContent: e.justify || "start",
    height: "100%",
    width: "100%"
  } : e.type === "stack" ? {
    display: "flex",
    flexDirection: "column",
    gap: e.gap || "4px",
    height: "100%",
    width: "100%"
  } : {};
}
function ZB({
  component: e,
  nodeId: t,
  onValueChange: r
}) {
  const o = {
    display: "grid",
    gridTemplateRows: e.rows.join(" "),
    gridTemplateColumns: e.columns.join(" "),
    gap: e.gap || "8px",
    minHeight: e.minHeight,
    minWidth: e.minWidth
  };
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `nested-grid ${e.className || ""}`,
      style: o,
      children: e.cells.map((s) => /* @__PURE__ */ I.jsx(
        KB,
        {
          cell: s,
          nodeId: t,
          onValueChange: r
        },
        s.id
      ))
    }
  );
}
function RA({ component: e, nodeId: t, onValueChange: r }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ I.jsx(mu, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ I.jsx(YR, { component: e });
    case "button-handle":
      return /* @__PURE__ */ I.jsx(KR, { component: e });
    case "text":
      return /* @__PURE__ */ I.jsx(m3, { component: e, onValueChange: r });
    case "number":
      return /* @__PURE__ */ I.jsx(y3, { component: e, onValueChange: r });
    case "bool":
      return /* @__PURE__ */ I.jsx(G3, { component: e, onValueChange: r });
    case "select":
      return /* @__PURE__ */ I.jsx(xB, { component: e, onValueChange: r });
    case "progress":
      return /* @__PURE__ */ I.jsx(FB, { component: e, onValueChange: r });
    case "header":
      return /* @__PURE__ */ I.jsx($B, { component: e });
    case "footer":
      return /* @__PURE__ */ I.jsx(BB, { component: e });
    case "button":
      return /* @__PURE__ */ I.jsx(UB, { component: e, onValueChange: r });
    case "divider":
      return /* @__PURE__ */ I.jsx(GB, { component: e });
    case "spacer":
      return /* @__PURE__ */ I.jsx(YB, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ I.jsx(ZB, { component: e, nodeId: t, onValueChange: r });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function JB({ grid: e, nodeId: t, onValueChange: r }) {
  const o = {
    display: "grid",
    gridTemplateRows: e.rows.join(" "),
    gridTemplateColumns: e.columns.join(" "),
    gap: e.gap || "8px",
    width: "100%",
    height: "100%"
  };
  return /* @__PURE__ */ I.jsx("div", { className: "node-grid", style: o, children: e.cells.map((s) => /* @__PURE__ */ I.jsx(
    "div",
    {
      className: "grid-cell",
      style: {
        gridRow: `${s.coordinates.row} / span ${s.coordinates.row_span || 1}`,
        gridColumn: `${s.coordinates.col} / span ${s.coordinates.col_span || 1}`
      },
      children: /* @__PURE__ */ I.jsx(
        e5,
        {
          cell: s,
          nodeId: t,
          onValueChange: r
        }
      )
    },
    s.id
  )) });
}
function e5({ cell: e, nodeId: t, onValueChange: r }) {
  const o = e.layout || { type: "flex", direction: "column" }, s = t5(o);
  return /* @__PURE__ */ I.jsx("div", { className: "grid-cell-content", style: s, children: e.components.map((a) => /* @__PURE__ */ I.jsx(
    RA,
    {
      component: a,
      nodeId: t,
      onValueChange: r
    },
    a.id
  )) });
}
function t5(e) {
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
function n5({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card",
      className: vt(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
N.createContext(null);
const PA = N.createContext(null), r5 = () => {
  const e = N.useContext(PA);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
class Dy {
  constructor(t, r, o = "Node") {
    ul(this, "grid");
    ul(this, "style");
    ul(this, "label");
    if (this.grid = t, this.style = r, this.label = o, !t)
      throw new Error("'grid' property is required in node definition.");
  }
  /**
   * Build style configuration and compute CSS properties
   */
  buildStyleConfig() {
    const { style: t } = this, r = {};
    t != null && t.minWidth && (r.minWidth = typeof t.minWidth == "number" ? `${t.minWidth}px` : t.minWidth), t != null && t.maxWidth && (r.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), t != null && t.borderRadius && (r.borderRadius = t.borderRadius);
    const o = t != null && t.shadow ? `shadow-${t.shadow}` : "shadow-md";
    return {
      style: r,
      className: vt(
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
    const { grid: t, label: r } = this, o = this.buildStyleConfig(), s = ({ id: a, data: l, selected: u }) => {
      const f = l, d = r5(), h = N.useCallback((w, E) => {
        d((y) => ({
          ...y,
          [a]: { ...y[a], [w]: E }
        }));
      }, [a, d]), p = f.grid || t, m = N.useMemo(() => ({
        nodeId: a,
        nodeData: f || { label: r, grid: t, values: {} },
        onValueChange: h
      }), [a, f, h]);
      return /* @__PURE__ */ I.jsx(
        n5,
        {
          className: vt(
            o.className,
            u && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: o.style,
          children: /* @__PURE__ */ I.jsx(XR.Provider, { value: m, children: /* @__PURE__ */ I.jsx(
            JB,
            {
              grid: p,
              nodeId: a,
              onValueChange: h
            }
          ) })
        }
      );
    };
    return N.memo(s, (a, l) => {
      if (a.id !== l.id || a.selected !== l.selected)
        return !1;
      const u = a.data.values, f = l.data.values;
      return u === f ? !0 : !u || !f ? u === f : JSON.stringify(u) === JSON.stringify(f);
    });
  }
  /**
   * Static helper to build a component from grid and style in one call
   */
  static buildComponent(t, r, o = "Node") {
    return new Dy(t, r, o).buildComponent();
  }
}
N.createContext(null);
function qy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hd, N_;
function o5() {
  if (N_) return hd;
  N_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return hd = e, hd;
}
var pd, R_;
function gi() {
  if (R_) return pd;
  R_ = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return pd = e, pd;
}
var gd, P_;
function Nu() {
  if (P_) return gd;
  P_ = 1;
  var e = gi();
  function t(r, o) {
    for (var s = r.length; s--; )
      if (e(r[s][0], o))
        return s;
    return -1;
  }
  return gd = t, gd;
}
var md, A_;
function i5() {
  if (A_) return md;
  A_ = 1;
  var e = Nu(), t = Array.prototype, r = t.splice;
  function o(s) {
    var a = this.__data__, l = e(a, s);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : r.call(a, l, 1), --this.size, !0;
  }
  return md = o, md;
}
var vd, T_;
function s5() {
  if (T_) return vd;
  T_ = 1;
  var e = Nu();
  function t(r) {
    var o = this.__data__, s = e(o, r);
    return s < 0 ? void 0 : o[s][1];
  }
  return vd = t, vd;
}
var yd, I_;
function a5() {
  if (I_) return yd;
  I_ = 1;
  var e = Nu();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return yd = t, yd;
}
var wd, M_;
function l5() {
  if (M_) return wd;
  M_ = 1;
  var e = Nu();
  function t(r, o) {
    var s = this.__data__, a = e(s, r);
    return a < 0 ? (++this.size, s.push([r, o])) : s[a][1] = o, this;
  }
  return wd = t, wd;
}
var xd, O_;
function Ru() {
  if (O_) return xd;
  O_ = 1;
  var e = o5(), t = i5(), r = s5(), o = a5(), s = l5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, xd = a, xd;
}
var _d, L_;
function u5() {
  if (L_) return _d;
  L_ = 1;
  var e = Ru();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return _d = t, _d;
}
var bd, D_;
function c5() {
  if (D_) return bd;
  D_ = 1;
  function e(t) {
    var r = this.__data__, o = r.delete(t);
    return this.size = r.size, o;
  }
  return bd = e, bd;
}
var Sd, q_;
function f5() {
  if (q_) return Sd;
  q_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Sd = e, Sd;
}
var Ed, j_;
function d5() {
  if (j_) return Ed;
  j_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ed = e, Ed;
}
var Cd, z_;
function AA() {
  if (z_) return Cd;
  z_ = 1;
  var e = typeof cl == "object" && cl && cl.Object === Object && cl;
  return Cd = e, Cd;
}
var kd, F_;
function wn() {
  if (F_) return kd;
  F_ = 1;
  var e = AA(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return kd = r, kd;
}
var Nd, $_;
function mi() {
  if ($_) return Nd;
  $_ = 1;
  var e = wn(), t = e.Symbol;
  return Nd = t, Nd;
}
var Rd, B_;
function h5() {
  if (B_) return Rd;
  B_ = 1;
  var e = mi(), t = Object.prototype, r = t.hasOwnProperty, o = t.toString, s = e ? e.toStringTag : void 0;
  function a(l) {
    var u = r.call(l, s), f = l[s];
    try {
      l[s] = void 0;
      var d = !0;
    } catch {
    }
    var h = o.call(l);
    return d && (u ? l[s] = f : delete l[s]), h;
  }
  return Rd = a, Rd;
}
var Pd, V_;
function p5() {
  if (V_) return Pd;
  V_ = 1;
  var e = Object.prototype, t = e.toString;
  function r(o) {
    return t.call(o);
  }
  return Pd = r, Pd;
}
var Ad, H_;
function co() {
  if (H_) return Ad;
  H_ = 1;
  var e = mi(), t = h5(), r = p5(), o = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? s : o : a && a in Object(u) ? t(u) : r(u);
  }
  return Ad = l, Ad;
}
var Td, W_;
function Zt() {
  if (W_) return Td;
  W_ = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Td = e, Td;
}
var Id, U_;
function Hs() {
  if (U_) return Id;
  U_ = 1;
  var e = co(), t = Zt(), r = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == s || f == r || f == a;
  }
  return Id = l, Id;
}
var Md, G_;
function g5() {
  if (G_) return Md;
  G_ = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Md = t, Md;
}
var Od, Y_;
function m5() {
  if (Y_) return Od;
  Y_ = 1;
  var e = g5(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function r(o) {
    return !!t && t in o;
  }
  return Od = r, Od;
}
var Ld, K_;
function TA() {
  if (K_) return Ld;
  K_ = 1;
  var e = Function.prototype, t = e.toString;
  function r(o) {
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
  return Ld = r, Ld;
}
var Dd, X_;
function v5() {
  if (X_) return Dd;
  X_ = 1;
  var e = Hs(), t = m5(), r = Zt(), o = TA(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var w = e(m) ? h : a;
    return w.test(o(m));
  }
  return Dd = p, Dd;
}
var qd, Q_;
function y5() {
  if (Q_) return qd;
  Q_ = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return qd = e, qd;
}
var jd, Z_;
function fo() {
  if (Z_) return jd;
  Z_ = 1;
  var e = v5(), t = y5();
  function r(o, s) {
    var a = t(o, s);
    return e(a) ? a : void 0;
  }
  return jd = r, jd;
}
var zd, J_;
function jy() {
  if (J_) return zd;
  J_ = 1;
  var e = fo(), t = wn(), r = e(t, "Map");
  return zd = r, zd;
}
var Fd, eb;
function Pu() {
  if (eb) return Fd;
  eb = 1;
  var e = fo(), t = e(Object, "create");
  return Fd = t, Fd;
}
var $d, tb;
function w5() {
  if (tb) return $d;
  tb = 1;
  var e = Pu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return $d = t, $d;
}
var Bd, nb;
function x5() {
  if (nb) return Bd;
  nb = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Bd = e, Bd;
}
var Vd, rb;
function _5() {
  if (rb) return Vd;
  rb = 1;
  var e = Pu(), t = "__lodash_hash_undefined__", r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return Vd = s, Vd;
}
var Hd, ob;
function b5() {
  if (ob) return Hd;
  ob = 1;
  var e = Pu(), t = Object.prototype, r = t.hasOwnProperty;
  function o(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : r.call(a, s);
  }
  return Hd = o, Hd;
}
var Wd, ib;
function S5() {
  if (ib) return Wd;
  ib = 1;
  var e = Pu(), t = "__lodash_hash_undefined__";
  function r(o, s) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && s === void 0 ? t : s, this;
  }
  return Wd = r, Wd;
}
var Ud, sb;
function E5() {
  if (sb) return Ud;
  sb = 1;
  var e = w5(), t = x5(), r = _5(), o = b5(), s = S5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, Ud = a, Ud;
}
var Gd, ab;
function C5() {
  if (ab) return Gd;
  ab = 1;
  var e = E5(), t = Ru(), r = jy();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Gd = o, Gd;
}
var Yd, lb;
function k5() {
  if (lb) return Yd;
  lb = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Yd = e, Yd;
}
var Kd, ub;
function Au() {
  if (ub) return Kd;
  ub = 1;
  var e = k5();
  function t(r, o) {
    var s = r.__data__;
    return e(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
  }
  return Kd = t, Kd;
}
var Xd, cb;
function N5() {
  if (cb) return Xd;
  cb = 1;
  var e = Au();
  function t(r) {
    var o = e(this, r).delete(r);
    return this.size -= o ? 1 : 0, o;
  }
  return Xd = t, Xd;
}
var Qd, fb;
function R5() {
  if (fb) return Qd;
  fb = 1;
  var e = Au();
  function t(r) {
    return e(this, r).get(r);
  }
  return Qd = t, Qd;
}
var Zd, db;
function P5() {
  if (db) return Zd;
  db = 1;
  var e = Au();
  function t(r) {
    return e(this, r).has(r);
  }
  return Zd = t, Zd;
}
var Jd, hb;
function A5() {
  if (hb) return Jd;
  hb = 1;
  var e = Au();
  function t(r, o) {
    var s = e(this, r), a = s.size;
    return s.set(r, o), this.size += s.size == a ? 0 : 1, this;
  }
  return Jd = t, Jd;
}
var eh, pb;
function zy() {
  if (pb) return eh;
  pb = 1;
  var e = C5(), t = N5(), r = R5(), o = P5(), s = A5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, eh = a, eh;
}
var th, gb;
function T5() {
  if (gb) return th;
  gb = 1;
  var e = Ru(), t = jy(), r = zy(), o = 200;
  function s(a, l) {
    var u = this.__data__;
    if (u instanceof e) {
      var f = u.__data__;
      if (!t || f.length < o - 1)
        return f.push([a, l]), this.size = ++u.size, this;
      u = this.__data__ = new r(f);
    }
    return u.set(a, l), this.size = u.size, this;
  }
  return th = s, th;
}
var nh, mb;
function Tu() {
  if (mb) return nh;
  mb = 1;
  var e = Ru(), t = u5(), r = c5(), o = f5(), s = d5(), a = T5();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = r, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, nh = l, nh;
}
var rh, vb;
function Fy() {
  if (vb) return rh;
  vb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s && r(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return rh = e, rh;
}
var oh, yb;
function IA() {
  if (yb) return oh;
  yb = 1;
  var e = fo(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return oh = t, oh;
}
var ih, wb;
function Iu() {
  if (wb) return ih;
  wb = 1;
  var e = IA();
  function t(r, o, s) {
    o == "__proto__" && e ? e(r, o, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : r[o] = s;
  }
  return ih = t, ih;
}
var sh, xb;
function Mu() {
  if (xb) return sh;
  xb = 1;
  var e = Iu(), t = gi(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return sh = s, sh;
}
var ah, _b;
function Ws() {
  if (_b) return ah;
  _b = 1;
  var e = Mu(), t = Iu();
  function r(o, s, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = s.length; ++f < d; ) {
      var h = s[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return ah = r, ah;
}
var lh, bb;
function I5() {
  if (bb) return lh;
  bb = 1;
  function e(t, r) {
    for (var o = -1, s = Array(t); ++o < t; )
      s[o] = r(o);
    return s;
  }
  return lh = e, lh;
}
var uh, Sb;
function Ln() {
  if (Sb) return uh;
  Sb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return uh = e, uh;
}
var ch, Eb;
function M5() {
  if (Eb) return ch;
  Eb = 1;
  var e = co(), t = Ln(), r = "[object Arguments]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return ch = o, ch;
}
var fh, Cb;
function Us() {
  if (Cb) return fh;
  Cb = 1;
  var e = M5(), t = Ln(), r = Object.prototype, o = r.hasOwnProperty, s = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !s.call(l, "callee");
  };
  return fh = a, fh;
}
var dh, kb;
function nt() {
  if (kb) return dh;
  kb = 1;
  var e = Array.isArray;
  return dh = e, dh;
}
var ms = { exports: {} }, hh, Nb;
function O5() {
  if (Nb) return hh;
  Nb = 1;
  function e() {
    return !1;
  }
  return hh = e, hh;
}
ms.exports;
var Rb;
function vi() {
  return Rb || (Rb = 1, (function(e, t) {
    var r = wn(), o = O5(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, l = a && a.exports === s, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ms, ms.exports)), ms.exports;
}
var ph, Pb;
function Ou() {
  if (Pb) return ph;
  Pb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(o, s) {
    var a = typeof o;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  return ph = r, ph;
}
var gh, Ab;
function $y() {
  if (Ab) return gh;
  Ab = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return gh = t, gh;
}
var mh, Tb;
function L5() {
  if (Tb) return mh;
  Tb = 1;
  var e = co(), t = $y(), r = Ln(), o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", w = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", R = "[object Int16Array]", A = "[object Int32Array]", T = "[object Uint8Array]", O = "[object Uint8ClampedArray]", q = "[object Uint16Array]", U = "[object Uint32Array]", j = {};
  j[C] = j[_] = j[k] = j[R] = j[A] = j[T] = j[O] = j[q] = j[U] = !0, j[o] = j[s] = j[x] = j[a] = j[S] = j[l] = j[u] = j[f] = j[d] = j[h] = j[p] = j[m] = j[w] = j[E] = j[y] = !1;
  function V(X) {
    return r(X) && t(X.length) && !!j[e(X)];
  }
  return mh = V, mh;
}
var vh, Ib;
function Lu() {
  if (Ib) return vh;
  Ib = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return vh = e, vh;
}
var vs = { exports: {} };
vs.exports;
var Mb;
function By() {
  return Mb || (Mb = 1, (function(e, t) {
    var r = AA(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a && r.process, u = (function() {
      try {
        var f = s && s.require && s.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(vs, vs.exports)), vs.exports;
}
var yh, Ob;
function Gs() {
  if (Ob) return yh;
  Ob = 1;
  var e = L5(), t = Lu(), r = By(), o = r && r.isTypedArray, s = o ? t(o) : e;
  return yh = s, yh;
}
var wh, Lb;
function MA() {
  if (Lb) return wh;
  Lb = 1;
  var e = I5(), t = Us(), r = nt(), o = vi(), s = Ou(), a = Gs(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = r(d), m = !p && t(d), w = !p && !m && o(d), E = !p && !m && !w && a(d), y = p || m || w || E, x = y ? e(d.length, String) : [], S = x.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      w && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      s(C, S))) && x.push(C);
    return x;
  }
  return wh = f, wh;
}
var xh, Db;
function Du() {
  if (Db) return xh;
  Db = 1;
  var e = Object.prototype;
  function t(r) {
    var o = r && r.constructor, s = typeof o == "function" && o.prototype || e;
    return r === s;
  }
  return xh = t, xh;
}
var _h, qb;
function OA() {
  if (qb) return _h;
  qb = 1;
  function e(t, r) {
    return function(o) {
      return t(r(o));
    };
  }
  return _h = e, _h;
}
var bh, jb;
function D5() {
  if (jb) return bh;
  jb = 1;
  var e = OA(), t = e(Object.keys, Object);
  return bh = t, bh;
}
var Sh, zb;
function Vy() {
  if (zb) return Sh;
  zb = 1;
  var e = Du(), t = D5(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Sh = s, Sh;
}
var Eh, Fb;
function Zn() {
  if (Fb) return Eh;
  Fb = 1;
  var e = Hs(), t = $y();
  function r(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Eh = r, Eh;
}
var Ch, $b;
function Mr() {
  if ($b) return Ch;
  $b = 1;
  var e = MA(), t = Vy(), r = Zn();
  function o(s) {
    return r(s) ? e(s) : t(s);
  }
  return Ch = o, Ch;
}
var kh, Bb;
function q5() {
  if (Bb) return kh;
  Bb = 1;
  var e = Ws(), t = Mr();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return kh = r, kh;
}
var Nh, Vb;
function j5() {
  if (Vb) return Nh;
  Vb = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var o in Object(t))
        r.push(o);
    return r;
  }
  return Nh = e, Nh;
}
var Rh, Hb;
function z5() {
  if (Hb) return Rh;
  Hb = 1;
  var e = Zt(), t = Du(), r = j5(), o = Object.prototype, s = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return r(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !s.call(l, d)) || f.push(d);
    return f;
  }
  return Rh = a, Rh;
}
var Ph, Wb;
function ho() {
  if (Wb) return Ph;
  Wb = 1;
  var e = MA(), t = z5(), r = Zn();
  function o(s) {
    return r(s) ? e(s, !0) : t(s);
  }
  return Ph = o, Ph;
}
var Ah, Ub;
function F5() {
  if (Ub) return Ah;
  Ub = 1;
  var e = Ws(), t = ho();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Ah = r, Ah;
}
var ys = { exports: {} };
ys.exports;
var Gb;
function LA() {
  return Gb || (Gb = 1, (function(e, t) {
    var r = wn(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var p = d.length, m = u ? u(p) : new d.constructor(p);
      return d.copy(m), m;
    }
    e.exports = f;
  })(ys, ys.exports)), ys.exports;
}
var Th, Yb;
function DA() {
  if (Yb) return Th;
  Yb = 1;
  function e(t, r) {
    var o = -1, s = t.length;
    for (r || (r = Array(s)); ++o < s; )
      r[o] = t[o];
    return r;
  }
  return Th = e, Th;
}
var Ih, Kb;
function qA() {
  if (Kb) return Ih;
  Kb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = 0, l = []; ++o < s; ) {
      var u = t[o];
      r(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Ih = e, Ih;
}
var Mh, Xb;
function jA() {
  if (Xb) return Mh;
  Xb = 1;
  function e() {
    return [];
  }
  return Mh = e, Mh;
}
var Oh, Qb;
function Hy() {
  if (Qb) return Oh;
  Qb = 1;
  var e = qA(), t = jA(), r = Object.prototype, o = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, a = s ? function(l) {
    return l == null ? [] : (l = Object(l), e(s(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Oh = a, Oh;
}
var Lh, Zb;
function $5() {
  if (Zb) return Lh;
  Zb = 1;
  var e = Ws(), t = Hy();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return Lh = r, Lh;
}
var Dh, Jb;
function Wy() {
  if (Jb) return Dh;
  Jb = 1;
  function e(t, r) {
    for (var o = -1, s = r.length, a = t.length; ++o < s; )
      t[a + o] = r[o];
    return t;
  }
  return Dh = e, Dh;
}
var qh, eS;
function qu() {
  if (eS) return qh;
  eS = 1;
  var e = OA(), t = e(Object.getPrototypeOf, Object);
  return qh = t, qh;
}
var jh, tS;
function zA() {
  if (tS) return jh;
  tS = 1;
  var e = Wy(), t = qu(), r = Hy(), o = jA(), s = Object.getOwnPropertySymbols, a = s ? function(l) {
    for (var u = []; l; )
      e(u, r(l)), l = t(l);
    return u;
  } : o;
  return jh = a, jh;
}
var zh, nS;
function B5() {
  if (nS) return zh;
  nS = 1;
  var e = Ws(), t = zA();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return zh = r, zh;
}
var Fh, rS;
function FA() {
  if (rS) return Fh;
  rS = 1;
  var e = Wy(), t = nt();
  function r(o, s, a) {
    var l = s(o);
    return t(o) ? l : e(l, a(o));
  }
  return Fh = r, Fh;
}
var $h, oS;
function $A() {
  if (oS) return $h;
  oS = 1;
  var e = FA(), t = Hy(), r = Mr();
  function o(s) {
    return e(s, r, t);
  }
  return $h = o, $h;
}
var Bh, iS;
function V5() {
  if (iS) return Bh;
  iS = 1;
  var e = FA(), t = zA(), r = ho();
  function o(s) {
    return e(s, r, t);
  }
  return Bh = o, Bh;
}
var Vh, sS;
function H5() {
  if (sS) return Vh;
  sS = 1;
  var e = fo(), t = wn(), r = e(t, "DataView");
  return Vh = r, Vh;
}
var Hh, aS;
function W5() {
  if (aS) return Hh;
  aS = 1;
  var e = fo(), t = wn(), r = e(t, "Promise");
  return Hh = r, Hh;
}
var Wh, lS;
function BA() {
  if (lS) return Wh;
  lS = 1;
  var e = fo(), t = wn(), r = e(t, "Set");
  return Wh = r, Wh;
}
var Uh, uS;
function U5() {
  if (uS) return Uh;
  uS = 1;
  var e = fo(), t = wn(), r = e(t, "WeakMap");
  return Uh = r, Uh;
}
var Gh, cS;
function yi() {
  if (cS) return Gh;
  cS = 1;
  var e = H5(), t = jy(), r = W5(), o = BA(), s = U5(), a = co(), l = TA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", w = l(e), E = l(t), y = l(r), x = l(o), S = l(s), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || r && C(r.resolve()) != d || o && C(new o()) != h || s && C(new s()) != p) && (C = function(_) {
    var k = a(_), R = k == f ? _.constructor : void 0, A = R ? l(R) : "";
    if (A)
      switch (A) {
        case w:
          return m;
        case E:
          return u;
        case y:
          return d;
        case x:
          return h;
        case S:
          return p;
      }
    return k;
  }), Gh = C, Gh;
}
var Yh, fS;
function G5() {
  if (fS) return Yh;
  fS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o) {
    var s = o.length, a = new o.constructor(s);
    return s && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Yh = r, Yh;
}
var Kh, dS;
function VA() {
  if (dS) return Kh;
  dS = 1;
  var e = wn(), t = e.Uint8Array;
  return Kh = t, Kh;
}
var Xh, hS;
function Uy() {
  if (hS) return Xh;
  hS = 1;
  var e = VA();
  function t(r) {
    var o = new r.constructor(r.byteLength);
    return new e(o).set(new e(r)), o;
  }
  return Xh = t, Xh;
}
var Qh, pS;
function Y5() {
  if (pS) return Qh;
  pS = 1;
  var e = Uy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  return Qh = t, Qh;
}
var Zh, gS;
function K5() {
  if (gS) return Zh;
  gS = 1;
  var e = /\w*$/;
  function t(r) {
    var o = new r.constructor(r.source, e.exec(r));
    return o.lastIndex = r.lastIndex, o;
  }
  return Zh = t, Zh;
}
var Jh, mS;
function X5() {
  if (mS) return Jh;
  mS = 1;
  var e = mi(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function o(s) {
    return r ? Object(r.call(s)) : {};
  }
  return Jh = o, Jh;
}
var ep, vS;
function HA() {
  if (vS) return ep;
  vS = 1;
  var e = Uy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  return ep = t, ep;
}
var tp, yS;
function Q5() {
  if (yS) return tp;
  yS = 1;
  var e = Uy(), t = Y5(), r = K5(), o = X5(), s = HA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", w = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", R = "[object Uint8ClampedArray]", A = "[object Uint16Array]", T = "[object Uint32Array]";
  function O(q, U, j) {
    var V = q.constructor;
    switch (U) {
      case w:
        return e(q);
      case a:
      case l:
        return new V(+q);
      case E:
        return t(q, j);
      case y:
      case x:
      case S:
      case C:
      case _:
      case k:
      case R:
      case A:
      case T:
        return s(q, j);
      case u:
        return new V();
      case f:
      case p:
        return new V(q);
      case d:
        return r(q);
      case h:
        return new V();
      case m:
        return o(q);
    }
  }
  return tp = O, tp;
}
var np, wS;
function WA() {
  if (wS) return np;
  wS = 1;
  var e = Zt(), t = Object.create, r = /* @__PURE__ */ (function() {
    function o() {
    }
    return function(s) {
      if (!e(s))
        return {};
      if (t)
        return t(s);
      o.prototype = s;
      var a = new o();
      return o.prototype = void 0, a;
    };
  })();
  return np = r, np;
}
var rp, xS;
function UA() {
  if (xS) return rp;
  xS = 1;
  var e = WA(), t = qu(), r = Du();
  function o(s) {
    return typeof s.constructor == "function" && !r(s) ? e(t(s)) : {};
  }
  return rp = o, rp;
}
var op, _S;
function Z5() {
  if (_S) return op;
  _S = 1;
  var e = yi(), t = Ln(), r = "[object Map]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return op = o, op;
}
var ip, bS;
function J5() {
  if (bS) return ip;
  bS = 1;
  var e = Z5(), t = Lu(), r = By(), o = r && r.isMap, s = o ? t(o) : e;
  return ip = s, ip;
}
var sp, SS;
function eV() {
  if (SS) return sp;
  SS = 1;
  var e = yi(), t = Ln(), r = "[object Set]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return sp = o, sp;
}
var ap, ES;
function tV() {
  if (ES) return ap;
  ES = 1;
  var e = eV(), t = Lu(), r = By(), o = r && r.isSet, s = o ? t(o) : e;
  return ap = s, ap;
}
var lp, CS;
function GA() {
  if (CS) return lp;
  CS = 1;
  var e = Tu(), t = Fy(), r = Mu(), o = q5(), s = F5(), a = LA(), l = DA(), u = $5(), f = B5(), d = $A(), h = V5(), p = yi(), m = G5(), w = Q5(), E = UA(), y = nt(), x = vi(), S = J5(), C = Zt(), _ = tV(), k = Mr(), R = ho(), A = 1, T = 2, O = 4, q = "[object Arguments]", U = "[object Array]", j = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", B = "[object Map]", Y = "[object Number]", M = "[object Object]", z = "[object RegExp]", Q = "[object Set]", D = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", $ = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", me = {};
  me[q] = me[U] = me[$] = me[Z] = me[j] = me[V] = me[ee] = me[K] = me[te] = me[se] = me[ae] = me[B] = me[Y] = me[M] = me[z] = me[Q] = me[D] = me[W] = me[ce] = me[de] = me[pe] = me[be] = !0, me[X] = me[L] = me[ie] = !1;
  function Re(Ee, Qe, Ve, Ft, dt, st) {
    var He, en = Qe & A, $t = Qe & T, tn = Qe & O;
    if (Ve && (He = dt ? Ve(Ee, Ft, dt, st) : Ve(Ee)), He !== void 0)
      return He;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (He = m(Ee), !en)
        return l(Ee, He);
    } else {
      var _t = p(Ee), Or = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == M || _t == q || Or && !dt) {
        if (He = $t || Or ? {} : E(Ee), !en)
          return $t ? f(Ee, s(He, Ee)) : u(Ee, o(He, Ee));
      } else {
        if (!me[_t])
          return dt ? Ee : {};
        He = w(Ee, _t, en);
      }
    }
    st || (st = new e());
    var Vt = st.get(Ee);
    if (Vt)
      return Vt;
    st.set(Ee, He), _(Ee) ? Ee.forEach(function(At) {
      He.add(Re(At, Qe, Ve, At, Ee, st));
    }) : S(Ee) && Ee.forEach(function(At, Ht) {
      He.set(Ht, Re(At, Qe, Ve, Ht, Ee, st));
    });
    var Dn = tn ? $t ? h : d : $t ? R : k, go = Bt ? void 0 : Dn(Ee);
    return t(go || Ee, function(At, Ht) {
      go && (Ht = At, At = Ee[Ht]), r(He, Ht, Re(At, Qe, Ve, Ht, Ee, st));
    }), He;
  }
  return lp = Re, lp;
}
var up, kS;
function nV() {
  if (kS) return up;
  kS = 1;
  var e = GA(), t = 4;
  function r(o) {
    return e(o, t);
  }
  return up = r, up;
}
var cp, NS;
function Gy() {
  if (NS) return cp;
  NS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return cp = e, cp;
}
var fp, RS;
function rV() {
  if (RS) return fp;
  RS = 1;
  function e(t) {
    return function(r, o, s) {
      for (var a = -1, l = Object(r), u = s(r), f = u.length; f--; ) {
        var d = u[t ? f : ++a];
        if (o(l[d], d, l) === !1)
          break;
      }
      return r;
    };
  }
  return fp = e, fp;
}
var dp, PS;
function Yy() {
  if (PS) return dp;
  PS = 1;
  var e = rV(), t = e();
  return dp = t, dp;
}
var hp, AS;
function Ky() {
  if (AS) return hp;
  AS = 1;
  var e = Yy(), t = Mr();
  function r(o, s) {
    return o && e(o, s, t);
  }
  return hp = r, hp;
}
var pp, TS;
function oV() {
  if (TS) return pp;
  TS = 1;
  var e = Zn();
  function t(r, o) {
    return function(s, a) {
      if (s == null)
        return s;
      if (!e(s))
        return r(s, a);
      for (var l = s.length, u = o ? l : -1, f = Object(s); (o ? u-- : ++u < l) && a(f[u], u, f) !== !1; )
        ;
      return s;
    };
  }
  return pp = t, pp;
}
var gp, IS;
function ju() {
  if (IS) return gp;
  IS = 1;
  var e = Ky(), t = oV(), r = t(e);
  return gp = r, gp;
}
var mp, MS;
function po() {
  if (MS) return mp;
  MS = 1;
  function e(t) {
    return t;
  }
  return mp = e, mp;
}
var vp, OS;
function YA() {
  if (OS) return vp;
  OS = 1;
  var e = po();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return vp = t, vp;
}
var yp, LS;
function KA() {
  if (LS) return yp;
  LS = 1;
  var e = Fy(), t = ju(), r = YA(), o = nt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l));
  }
  return yp = s, yp;
}
var wp, DS;
function XA() {
  return DS || (DS = 1, wp = KA()), wp;
}
var xp, qS;
function iV() {
  if (qS) return xp;
  qS = 1;
  var e = ju();
  function t(r, o) {
    var s = [];
    return e(r, function(a, l, u) {
      o(a, l, u) && s.push(a);
    }), s;
  }
  return xp = t, xp;
}
var _p, jS;
function sV() {
  if (jS) return _p;
  jS = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return _p = t, _p;
}
var bp, zS;
function aV() {
  if (zS) return bp;
  zS = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return bp = e, bp;
}
var Sp, FS;
function QA() {
  if (FS) return Sp;
  FS = 1;
  var e = zy(), t = sV(), r = aV();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(s[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = r, Sp = o, Sp;
}
var Ep, $S;
function lV() {
  if ($S) return Ep;
  $S = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; )
      if (r(t[o], o, t))
        return !0;
    return !1;
  }
  return Ep = e, Ep;
}
var Cp, BS;
function ZA() {
  if (BS) return Cp;
  BS = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Cp = e, Cp;
}
var kp, VS;
function JA() {
  if (VS) return kp;
  VS = 1;
  var e = QA(), t = lV(), r = ZA(), o = 1, s = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, w = l.length, E = u.length;
    if (w != E && !(m && E > w))
      return !1;
    var y = p.get(l), x = p.get(u);
    if (y && x)
      return y == u && x == l;
    var S = -1, C = !0, _ = f & s ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++S < w; ) {
      var k = l[S], R = u[S];
      if (d)
        var A = m ? d(R, k, S, u, l, p) : d(k, R, S, l, u, p);
      if (A !== void 0) {
        if (A)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(T, O) {
          if (!r(_, O) && (k === T || h(k, T, f, d, p)))
            return _.push(O);
        })) {
          C = !1;
          break;
        }
      } else if (!(k === R || h(k, R, f, d, p))) {
        C = !1;
        break;
      }
    }
    return p.delete(l), p.delete(u), C;
  }
  return kp = a, kp;
}
var Np, HS;
function uV() {
  if (HS) return Np;
  HS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s, a) {
      o[++r] = [a, s];
    }), o;
  }
  return Np = e, Np;
}
var Rp, WS;
function Xy() {
  if (WS) return Rp;
  WS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s) {
      o[++r] = s;
    }), o;
  }
  return Rp = e, Rp;
}
var Pp, US;
function cV() {
  if (US) return Pp;
  US = 1;
  var e = mi(), t = VA(), r = gi(), o = JA(), s = uV(), a = Xy(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", w = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", S = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
  function R(A, T, O, q, U, j, V) {
    switch (O) {
      case C:
        if (A.byteLength != T.byteLength || A.byteOffset != T.byteOffset)
          return !1;
        A = A.buffer, T = T.buffer;
      case S:
        return !(A.byteLength != T.byteLength || !j(new t(A), new t(T)));
      case f:
      case d:
      case m:
        return r(+A, +T);
      case h:
        return A.name == T.name && A.message == T.message;
      case w:
      case y:
        return A == T + "";
      case p:
        var X = s;
      case E:
        var L = q & l;
        if (X || (X = a), A.size != T.size && !L)
          return !1;
        var H = V.get(A);
        if (H)
          return H == T;
        q |= u, V.set(A, T);
        var B = o(X(A), X(T), q, U, j, V);
        return V.delete(A), B;
      case x:
        if (k)
          return k.call(A) == k.call(T);
    }
    return !1;
  }
  return Pp = R, Pp;
}
var Ap, GS;
function fV() {
  if (GS) return Ap;
  GS = 1;
  var e = $A(), t = 1, r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u, f, d, h) {
    var p = u & t, m = e(a), w = m.length, E = e(l), y = E.length;
    if (w != y && !p)
      return !1;
    for (var x = w; x--; ) {
      var S = m[x];
      if (!(p ? S in l : o.call(l, S)))
        return !1;
    }
    var C = h.get(a), _ = h.get(l);
    if (C && _)
      return C == l && _ == a;
    var k = !0;
    h.set(a, l), h.set(l, a);
    for (var R = p; ++x < w; ) {
      S = m[x];
      var A = a[S], T = l[S];
      if (f)
        var O = p ? f(T, A, S, l, a, h) : f(A, T, S, a, l, h);
      if (!(O === void 0 ? A === T || d(A, T, u, f, h) : O)) {
        k = !1;
        break;
      }
      R || (R = S == "constructor");
    }
    if (k && !R) {
      var q = a.constructor, U = l.constructor;
      q != U && "constructor" in a && "constructor" in l && !(typeof q == "function" && q instanceof q && typeof U == "function" && U instanceof U) && (k = !1);
    }
    return h.delete(a), h.delete(l), k;
  }
  return Ap = s, Ap;
}
var Tp, YS;
function dV() {
  if (YS) return Tp;
  YS = 1;
  var e = Tu(), t = JA(), r = cV(), o = fV(), s = yi(), a = nt(), l = vi(), u = Gs(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, w = m.hasOwnProperty;
  function E(y, x, S, C, _, k) {
    var R = a(y), A = a(x), T = R ? h : s(y), O = A ? h : s(x);
    T = T == d ? p : T, O = O == d ? p : O;
    var q = T == p, U = O == p, j = T == O;
    if (j && l(y)) {
      if (!l(x))
        return !1;
      R = !0, q = !1;
    }
    if (j && !q)
      return k || (k = new e()), R || u(y) ? t(y, x, S, C, _, k) : r(y, x, T, S, C, _, k);
    if (!(S & f)) {
      var V = q && w.call(y, "__wrapped__"), X = U && w.call(x, "__wrapped__");
      if (V || X) {
        var L = V ? y.value() : y, H = X ? x.value() : x;
        return k || (k = new e()), _(L, H, S, C, k);
      }
    }
    return j ? (k || (k = new e()), o(y, x, S, C, _, k)) : !1;
  }
  return Tp = E, Tp;
}
var Ip, KS;
function eT() {
  if (KS) return Ip;
  KS = 1;
  var e = dV(), t = Ln();
  function r(o, s, a, l, u) {
    return o === s ? !0 : o == null || s == null || !t(o) && !t(s) ? o !== o && s !== s : e(o, s, a, l, r, u);
  }
  return Ip = r, Ip;
}
var Mp, XS;
function hV() {
  if (XS) return Mp;
  XS = 1;
  var e = Tu(), t = eT(), r = 1, o = 2;
  function s(a, l, u, f) {
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
      var w = m[0], E = a[w], y = m[1];
      if (p && m[2]) {
        if (E === void 0 && !(w in a))
          return !1;
      } else {
        var x = new e();
        if (f)
          var S = f(E, y, w, a, l, x);
        if (!(S === void 0 ? t(y, E, r | o, f, x) : S))
          return !1;
      }
    }
    return !0;
  }
  return Mp = s, Mp;
}
var Op, QS;
function tT() {
  if (QS) return Op;
  QS = 1;
  var e = Zt();
  function t(r) {
    return r === r && !e(r);
  }
  return Op = t, Op;
}
var Lp, ZS;
function pV() {
  if (ZS) return Lp;
  ZS = 1;
  var e = tT(), t = Mr();
  function r(o) {
    for (var s = t(o), a = s.length; a--; ) {
      var l = s[a], u = o[l];
      s[a] = [l, u, e(u)];
    }
    return s;
  }
  return Lp = r, Lp;
}
var Dp, JS;
function nT() {
  if (JS) return Dp;
  JS = 1;
  function e(t, r) {
    return function(o) {
      return o == null ? !1 : o[t] === r && (r !== void 0 || t in Object(o));
    };
  }
  return Dp = e, Dp;
}
var qp, eE;
function gV() {
  if (eE) return qp;
  eE = 1;
  var e = hV(), t = pV(), r = nT();
  function o(s) {
    var a = t(s);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(l) {
      return l === s || e(l, s, a);
    };
  }
  return qp = o, qp;
}
var jp, tE;
function wi() {
  if (tE) return jp;
  tE = 1;
  var e = co(), t = Ln(), r = "[object Symbol]";
  function o(s) {
    return typeof s == "symbol" || t(s) && e(s) == r;
  }
  return jp = o, jp;
}
var zp, nE;
function Qy() {
  if (nE) return zp;
  nE = 1;
  var e = nt(), t = wi(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function s(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !r.test(a) || l != null && a in Object(l);
  }
  return zp = s, zp;
}
var Fp, rE;
function mV() {
  if (rE) return Fp;
  rE = 1;
  var e = zy(), t = "Expected a function";
  function r(o, s) {
    if (typeof o != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var a = function() {
      var l = arguments, u = s ? s.apply(this, l) : l[0], f = a.cache;
      if (f.has(u))
        return f.get(u);
      var d = o.apply(this, l);
      return a.cache = f.set(u, d) || f, d;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Fp = r, Fp;
}
var $p, oE;
function vV() {
  if (oE) return $p;
  oE = 1;
  var e = mV(), t = 500;
  function r(o) {
    var s = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = s.cache;
    return s;
  }
  return $p = r, $p;
}
var Bp, iE;
function yV() {
  if (iE) return Bp;
  iE = 1;
  var e = vV(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, o = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(r, "$1") : u || l);
    }), a;
  });
  return Bp = o, Bp;
}
var Vp, sE;
function zu() {
  if (sE) return Vp;
  sE = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = Array(s); ++o < s; )
      a[o] = r(t[o], o, t);
    return a;
  }
  return Vp = e, Vp;
}
var Hp, aE;
function wV() {
  if (aE) return Hp;
  aE = 1;
  var e = mi(), t = zu(), r = nt(), o = wi(), s = e ? e.prototype : void 0, a = s ? s.toString : void 0;
  function l(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, l) + "";
    if (o(u))
      return a ? a.call(u) : "";
    var f = u + "";
    return f == "0" && 1 / u == -1 / 0 ? "-0" : f;
  }
  return Hp = l, Hp;
}
var Wp, lE;
function rT() {
  if (lE) return Wp;
  lE = 1;
  var e = wV();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Wp = t, Wp;
}
var Up, uE;
function Fu() {
  if (uE) return Up;
  uE = 1;
  var e = nt(), t = Qy(), r = yV(), o = rT();
  function s(a, l) {
    return e(a) ? a : t(a, l) ? [a] : r(o(a));
  }
  return Up = s, Up;
}
var Gp, cE;
function Ys() {
  if (cE) return Gp;
  cE = 1;
  var e = wi();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var o = r + "";
    return o == "0" && 1 / r == -1 / 0 ? "-0" : o;
  }
  return Gp = t, Gp;
}
var Yp, fE;
function $u() {
  if (fE) return Yp;
  fE = 1;
  var e = Fu(), t = Ys();
  function r(o, s) {
    s = e(s, o);
    for (var a = 0, l = s.length; o != null && a < l; )
      o = o[t(s[a++])];
    return a && a == l ? o : void 0;
  }
  return Yp = r, Yp;
}
var Kp, dE;
function xV() {
  if (dE) return Kp;
  dE = 1;
  var e = $u();
  function t(r, o, s) {
    var a = r == null ? void 0 : e(r, o);
    return a === void 0 ? s : a;
  }
  return Kp = t, Kp;
}
var Xp, hE;
function _V() {
  if (hE) return Xp;
  hE = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Xp = e, Xp;
}
var Qp, pE;
function oT() {
  if (pE) return Qp;
  pE = 1;
  var e = Fu(), t = Us(), r = nt(), o = Ou(), s = $y(), a = Ys();
  function l(u, f, d) {
    f = e(f, u);
    for (var h = -1, p = f.length, m = !1; ++h < p; ) {
      var w = a(f[h]);
      if (!(m = u != null && d(u, w)))
        break;
      u = u[w];
    }
    return m || ++h != p ? m : (p = u == null ? 0 : u.length, !!p && s(p) && o(w, p) && (r(u) || t(u)));
  }
  return Qp = l, Qp;
}
var Zp, gE;
function iT() {
  if (gE) return Zp;
  gE = 1;
  var e = _V(), t = oT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return Zp = r, Zp;
}
var Jp, mE;
function bV() {
  if (mE) return Jp;
  mE = 1;
  var e = eT(), t = xV(), r = iT(), o = Qy(), s = tT(), a = nT(), l = Ys(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && s(p) ? a(l(h), p) : function(m) {
      var w = t(m, h);
      return w === void 0 && w === p ? r(m, h) : e(p, w, u | f);
    };
  }
  return Jp = d, Jp;
}
var eg, vE;
function sT() {
  if (vE) return eg;
  vE = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return eg = e, eg;
}
var tg, yE;
function SV() {
  if (yE) return tg;
  yE = 1;
  var e = $u();
  function t(r) {
    return function(o) {
      return e(o, r);
    };
  }
  return tg = t, tg;
}
var ng, wE;
function EV() {
  if (wE) return ng;
  wE = 1;
  var e = sT(), t = SV(), r = Qy(), o = Ys();
  function s(a) {
    return r(a) ? e(o(a)) : t(a);
  }
  return ng = s, ng;
}
var rg, xE;
function Jn() {
  if (xE) return rg;
  xE = 1;
  var e = gV(), t = bV(), r = po(), o = nt(), s = EV();
  function a(l) {
    return typeof l == "function" ? l : l == null ? r : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : s(l);
  }
  return rg = a, rg;
}
var og, _E;
function aT() {
  if (_E) return og;
  _E = 1;
  var e = qA(), t = iV(), r = Jn(), o = nt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l, 3));
  }
  return og = s, og;
}
var ig, bE;
function CV() {
  if (bE) return ig;
  bE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o, s) {
    return o != null && t.call(o, s);
  }
  return ig = r, ig;
}
var sg, SE;
function lT() {
  if (SE) return sg;
  SE = 1;
  var e = CV(), t = oT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return sg = r, sg;
}
var ag, EE;
function kV() {
  if (EE) return ag;
  EE = 1;
  var e = Vy(), t = yi(), r = Us(), o = nt(), s = Zn(), a = vi(), l = Du(), u = Gs(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
  function m(w) {
    if (w == null)
      return !0;
    if (s(w) && (o(w) || typeof w == "string" || typeof w.splice == "function" || a(w) || u(w) || r(w)))
      return !w.length;
    var E = t(w);
    if (E == f || E == d)
      return !w.size;
    if (l(w))
      return !e(w).length;
    for (var y in w)
      if (p.call(w, y))
        return !1;
    return !0;
  }
  return ag = m, ag;
}
var lg, CE;
function uT() {
  if (CE) return lg;
  CE = 1;
  function e(t) {
    return t === void 0;
  }
  return lg = e, lg;
}
var ug, kE;
function cT() {
  if (kE) return ug;
  kE = 1;
  var e = ju(), t = Zn();
  function r(o, s) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = s(u, f, d);
    }), l;
  }
  return ug = r, ug;
}
var cg, NE;
function fT() {
  if (NE) return cg;
  NE = 1;
  var e = zu(), t = Jn(), r = cT(), o = nt();
  function s(a, l) {
    var u = o(a) ? e : r;
    return u(a, t(l, 3));
  }
  return cg = s, cg;
}
var fg, RE;
function NV() {
  if (RE) return fg;
  RE = 1;
  function e(t, r, o, s) {
    var a = -1, l = t == null ? 0 : t.length;
    for (s && l && (o = t[++a]); ++a < l; )
      o = r(o, t[a], a, t);
    return o;
  }
  return fg = e, fg;
}
var dg, PE;
function RV() {
  if (PE) return dg;
  PE = 1;
  function e(t, r, o, s, a) {
    return a(t, function(l, u, f) {
      o = s ? (s = !1, l) : r(o, l, u, f);
    }), o;
  }
  return dg = e, dg;
}
var hg, AE;
function dT() {
  if (AE) return hg;
  AE = 1;
  var e = NV(), t = ju(), r = Jn(), o = RV(), s = nt();
  function a(l, u, f) {
    var d = s(l) ? e : o, h = arguments.length < 3;
    return d(l, r(u, 4), f, h, t);
  }
  return hg = a, hg;
}
var pg, TE;
function PV() {
  if (TE) return pg;
  TE = 1;
  var e = co(), t = nt(), r = Ln(), o = "[object String]";
  function s(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == o;
  }
  return pg = s, pg;
}
var gg, IE;
function AV() {
  if (IE) return gg;
  IE = 1;
  var e = sT(), t = e("length");
  return gg = t, gg;
}
var mg, ME;
function TV() {
  if (ME) return mg;
  ME = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + s + a + "]");
  function f(d) {
    return u.test(d);
  }
  return mg = f, mg;
}
var vg, OE;
function IV() {
  if (OE) return vg;
  OE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + s + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + w + "(?:" + [h, p, m].join("|") + ")" + y + E + ")*", S = y + E + x, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + S, "g");
  function k(R) {
    for (var A = _.lastIndex = 0; _.test(R); )
      ++A;
    return A;
  }
  return vg = k, vg;
}
var yg, LE;
function MV() {
  if (LE) return yg;
  LE = 1;
  var e = AV(), t = TV(), r = IV();
  function o(s) {
    return t(s) ? r(s) : e(s);
  }
  return yg = o, yg;
}
var wg, DE;
function OV() {
  if (DE) return wg;
  DE = 1;
  var e = Vy(), t = yi(), r = Zn(), o = PV(), s = MV(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (r(f))
      return o(f) ? s(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return wg = u, wg;
}
var xg, qE;
function LV() {
  if (qE) return xg;
  qE = 1;
  var e = Fy(), t = WA(), r = Ky(), o = Jn(), s = qu(), a = nt(), l = vi(), u = Hs(), f = Zt(), d = Gs();
  function h(p, m, w) {
    var E = a(p), y = E || l(p) || d(p);
    if (m = o(m, 4), w == null) {
      var x = p && p.constructor;
      y ? w = E ? new x() : [] : f(p) ? w = u(x) ? t(s(p)) : {} : w = {};
    }
    return (y ? e : r)(p, function(S, C, _) {
      return m(w, S, C, _);
    }), w;
  }
  return xg = h, xg;
}
var _g, jE;
function DV() {
  if (jE) return _g;
  jE = 1;
  var e = mi(), t = Us(), r = nt(), o = e ? e.isConcatSpreadable : void 0;
  function s(a) {
    return r(a) || t(a) || !!(o && a && a[o]);
  }
  return _g = s, _g;
}
var bg, zE;
function Zy() {
  if (zE) return bg;
  zE = 1;
  var e = Wy(), t = DV();
  function r(o, s, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      s > 0 && a(h) ? s > 1 ? r(h, s - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return bg = r, bg;
}
var Sg, FE;
function qV() {
  if (FE) return Sg;
  FE = 1;
  function e(t, r, o) {
    switch (o.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, o[0]);
      case 2:
        return t.call(r, o[0], o[1]);
      case 3:
        return t.call(r, o[0], o[1], o[2]);
    }
    return t.apply(r, o);
  }
  return Sg = e, Sg;
}
var Eg, $E;
function hT() {
  if ($E) return Eg;
  $E = 1;
  var e = qV(), t = Math.max;
  function r(o, s, a) {
    return s = t(s === void 0 ? o.length - 1 : s, 0), function() {
      for (var l = arguments, u = -1, f = t(l.length - s, 0), d = Array(f); ++u < f; )
        d[u] = l[s + u];
      u = -1;
      for (var h = Array(s + 1); ++u < s; )
        h[u] = l[u];
      return h[s] = a(d), e(o, this, h);
    };
  }
  return Eg = r, Eg;
}
var Cg, BE;
function jV() {
  if (BE) return Cg;
  BE = 1;
  var e = Gy(), t = IA(), r = po(), o = t ? function(s, a) {
    return t(s, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Cg = o, Cg;
}
var kg, VE;
function zV() {
  if (VE) return kg;
  VE = 1;
  var e = 800, t = 16, r = Date.now;
  function o(s) {
    var a = 0, l = 0;
    return function() {
      var u = r(), f = t - (u - l);
      if (l = u, f > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return s.apply(void 0, arguments);
    };
  }
  return kg = o, kg;
}
var Ng, HE;
function pT() {
  if (HE) return Ng;
  HE = 1;
  var e = jV(), t = zV(), r = t(e);
  return Ng = r, Ng;
}
var Rg, WE;
function Bu() {
  if (WE) return Rg;
  WE = 1;
  var e = po(), t = hT(), r = pT();
  function o(s, a) {
    return r(t(s, a, e), s + "");
  }
  return Rg = o, Rg;
}
var Pg, UE;
function gT() {
  if (UE) return Pg;
  UE = 1;
  function e(t, r, o, s) {
    for (var a = t.length, l = o + (s ? 1 : -1); s ? l-- : ++l < a; )
      if (r(t[l], l, t))
        return l;
    return -1;
  }
  return Pg = e, Pg;
}
var Ag, GE;
function FV() {
  if (GE) return Ag;
  GE = 1;
  function e(t) {
    return t !== t;
  }
  return Ag = e, Ag;
}
var Tg, YE;
function $V() {
  if (YE) return Tg;
  YE = 1;
  function e(t, r, o) {
    for (var s = o - 1, a = t.length; ++s < a; )
      if (t[s] === r)
        return s;
    return -1;
  }
  return Tg = e, Tg;
}
var Ig, KE;
function BV() {
  if (KE) return Ig;
  KE = 1;
  var e = gT(), t = FV(), r = $V();
  function o(s, a, l) {
    return a === a ? r(s, a, l) : e(s, t, l);
  }
  return Ig = o, Ig;
}
var Mg, XE;
function VV() {
  if (XE) return Mg;
  XE = 1;
  var e = BV();
  function t(r, o) {
    var s = r == null ? 0 : r.length;
    return !!s && e(r, o, 0) > -1;
  }
  return Mg = t, Mg;
}
var Og, QE;
function HV() {
  if (QE) return Og;
  QE = 1;
  function e(t, r, o) {
    for (var s = -1, a = t == null ? 0 : t.length; ++s < a; )
      if (o(r, t[s]))
        return !0;
    return !1;
  }
  return Og = e, Og;
}
var Lg, ZE;
function WV() {
  if (ZE) return Lg;
  ZE = 1;
  function e() {
  }
  return Lg = e, Lg;
}
var Dg, JE;
function UV() {
  if (JE) return Dg;
  JE = 1;
  var e = BA(), t = WV(), r = Xy(), o = 1 / 0, s = e && 1 / r(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return Dg = s, Dg;
}
var qg, eC;
function GV() {
  if (eC) return qg;
  eC = 1;
  var e = QA(), t = VV(), r = HV(), o = ZA(), s = UV(), a = Xy(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, w = f.length, E = !0, y = [], x = y;
    if (h)
      E = !1, m = r;
    else if (w >= l) {
      var S = d ? null : s(f);
      if (S)
        return a(S);
      E = !1, m = o, x = new e();
    } else
      x = d ? [] : y;
    e:
      for (; ++p < w; ) {
        var C = f[p], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && _ === _) {
          for (var k = x.length; k--; )
            if (x[k] === _)
              continue e;
          d && x.push(_), y.push(C);
        } else m(x, _, h) || (x !== y && x.push(_), y.push(C));
      }
    return y;
  }
  return qg = u, qg;
}
var jg, tC;
function mT() {
  if (tC) return jg;
  tC = 1;
  var e = Zn(), t = Ln();
  function r(o) {
    return t(o) && e(o);
  }
  return jg = r, jg;
}
var zg, nC;
function YV() {
  if (nC) return zg;
  nC = 1;
  var e = Zy(), t = Bu(), r = GV(), o = mT(), s = t(function(a) {
    return r(e(a, 1, o, !0));
  });
  return zg = s, zg;
}
var Fg, rC;
function KV() {
  if (rC) return Fg;
  rC = 1;
  var e = zu();
  function t(r, o) {
    return e(o, function(s) {
      return r[s];
    });
  }
  return Fg = t, Fg;
}
var $g, oC;
function vT() {
  if (oC) return $g;
  oC = 1;
  var e = KV(), t = Mr();
  function r(o) {
    return o == null ? [] : e(o, t(o));
  }
  return $g = r, $g;
}
var Bg, iC;
function Jt() {
  if (iC) return Bg;
  iC = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = {
        clone: nV(),
        constant: Gy(),
        each: XA(),
        filter: aT(),
        has: lT(),
        isArray: nt(),
        isEmpty: kV(),
        isFunction: Hs(),
        isUndefined: uT(),
        keys: Mr(),
        map: fT(),
        reduce: dT(),
        size: OV(),
        transform: LV(),
        union: YV(),
        values: vT()
      };
    } catch {
    }
  return e || (e = window._), Bg = e, Bg;
}
var Vg, sC;
function Jy() {
  if (sC) return Vg;
  sC = 1;
  var e = Jt();
  Vg = s;
  var t = "\0", r = "\0", o = "";
  function s(h) {
    this._isDirected = e.has(h, "directed") ? h.directed : !0, this._isMultigraph = e.has(h, "multigraph") ? h.multigraph : !1, this._isCompound = e.has(h, "compound") ? h.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[r] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  s.prototype._nodeCount = 0, s.prototype._edgeCount = 0, s.prototype.isDirected = function() {
    return this._isDirected;
  }, s.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, s.prototype.isCompound = function() {
    return this._isCompound;
  }, s.prototype.setGraph = function(h) {
    return this._label = h, this;
  }, s.prototype.graph = function() {
    return this._label;
  }, s.prototype.setDefaultNodeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultNodeLabelFn = h, this;
  }, s.prototype.nodeCount = function() {
    return this._nodeCount;
  }, s.prototype.nodes = function() {
    return e.keys(this._nodes);
  }, s.prototype.sources = function() {
    var h = this;
    return e.filter(this.nodes(), function(p) {
      return e.isEmpty(h._in[p]);
    });
  }, s.prototype.sinks = function() {
    var h = this;
    return e.filter(this.nodes(), function(p) {
      return e.isEmpty(h._out[p]);
    });
  }, s.prototype.setNodes = function(h, p) {
    var m = arguments, w = this;
    return e.each(h, function(E) {
      m.length > 1 ? w.setNode(E, p) : w.setNode(E);
    }), this;
  }, s.prototype.setNode = function(h, p) {
    return e.has(this._nodes, h) ? (arguments.length > 1 && (this._nodes[h] = p), this) : (this._nodes[h] = arguments.length > 1 ? p : this._defaultNodeLabelFn(h), this._isCompound && (this._parent[h] = r, this._children[h] = {}, this._children[r][h] = !0), this._in[h] = {}, this._preds[h] = {}, this._out[h] = {}, this._sucs[h] = {}, ++this._nodeCount, this);
  }, s.prototype.node = function(h) {
    return this._nodes[h];
  }, s.prototype.hasNode = function(h) {
    return e.has(this._nodes, h);
  }, s.prototype.removeNode = function(h) {
    var p = this;
    if (e.has(this._nodes, h)) {
      var m = function(w) {
        p.removeEdge(p._edgeObjs[w]);
      };
      delete this._nodes[h], this._isCompound && (this._removeFromParentsChildList(h), delete this._parent[h], e.each(this.children(h), function(w) {
        p.setParent(w);
      }), delete this._children[h]), e.each(e.keys(this._in[h]), m), delete this._in[h], delete this._preds[h], e.each(e.keys(this._out[h]), m), delete this._out[h], delete this._sucs[h], --this._nodeCount;
    }
    return this;
  }, s.prototype.setParent = function(h, p) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(p))
      p = r;
    else {
      p += "";
      for (var m = p; !e.isUndefined(m); m = this.parent(m))
        if (m === h)
          throw new Error("Setting " + p + " as parent of " + h + " would create a cycle");
      this.setNode(p);
    }
    return this.setNode(h), this._removeFromParentsChildList(h), this._parent[h] = p, this._children[p][h] = !0, this;
  }, s.prototype._removeFromParentsChildList = function(h) {
    delete this._children[this._parent[h]][h];
  }, s.prototype.parent = function(h) {
    if (this._isCompound) {
      var p = this._parent[h];
      if (p !== r)
        return p;
    }
  }, s.prototype.children = function(h) {
    if (e.isUndefined(h) && (h = r), this._isCompound) {
      var p = this._children[h];
      if (p)
        return e.keys(p);
    } else {
      if (h === r)
        return this.nodes();
      if (this.hasNode(h))
        return [];
    }
  }, s.prototype.predecessors = function(h) {
    var p = this._preds[h];
    if (p)
      return e.keys(p);
  }, s.prototype.successors = function(h) {
    var p = this._sucs[h];
    if (p)
      return e.keys(p);
  }, s.prototype.neighbors = function(h) {
    var p = this.predecessors(h);
    if (p)
      return e.union(p, this.successors(h));
  }, s.prototype.isLeaf = function(h) {
    var p;
    return this.isDirected() ? p = this.successors(h) : p = this.neighbors(h), p.length === 0;
  }, s.prototype.filterNodes = function(h) {
    var p = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    p.setGraph(this.graph());
    var m = this;
    e.each(this._nodes, function(y, x) {
      h(x) && p.setNode(x, y);
    }), e.each(this._edgeObjs, function(y) {
      p.hasNode(y.v) && p.hasNode(y.w) && p.setEdge(y, m.edge(y));
    });
    var w = {};
    function E(y) {
      var x = m.parent(y);
      return x === void 0 || p.hasNode(x) ? (w[y] = x, x) : x in w ? w[x] : E(x);
    }
    return this._isCompound && e.each(p.nodes(), function(y) {
      p.setParent(y, E(y));
    }), p;
  }, s.prototype.setDefaultEdgeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultEdgeLabelFn = h, this;
  }, s.prototype.edgeCount = function() {
    return this._edgeCount;
  }, s.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, s.prototype.setPath = function(h, p) {
    var m = this, w = arguments;
    return e.reduce(h, function(E, y) {
      return w.length > 1 ? m.setEdge(E, y, p) : m.setEdge(E, y), y;
    }), this;
  }, s.prototype.setEdge = function() {
    var h, p, m, w, E = !1, y = arguments[0];
    typeof y == "object" && y !== null && "v" in y ? (h = y.v, p = y.w, m = y.name, arguments.length === 2 && (w = arguments[1], E = !0)) : (h = y, p = arguments[1], m = arguments[3], arguments.length > 2 && (w = arguments[2], E = !0)), h = "" + h, p = "" + p, e.isUndefined(m) || (m = "" + m);
    var x = u(this._isDirected, h, p, m);
    if (e.has(this._edgeLabels, x))
      return E && (this._edgeLabels[x] = w), this;
    if (!e.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(p), this._edgeLabels[x] = E ? w : this._defaultEdgeLabelFn(h, p, m);
    var S = f(this._isDirected, h, p, m);
    return h = S.v, p = S.w, Object.freeze(S), this._edgeObjs[x] = S, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][x] = S, this._out[h][x] = S, this._edgeCount++, this;
  }, s.prototype.edge = function(h, p, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return this._edgeLabels[w];
  }, s.prototype.hasEdge = function(h, p, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return e.has(this._edgeLabels, w);
  }, s.prototype.removeEdge = function(h, p, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m), E = this._edgeObjs[w];
    return E && (h = E.v, p = E.w, delete this._edgeLabels[w], delete this._edgeObjs[w], l(this._preds[p], h), l(this._sucs[h], p), delete this._in[p][w], delete this._out[h][w], this._edgeCount--), this;
  }, s.prototype.inEdges = function(h, p) {
    var m = this._in[h];
    if (m) {
      var w = e.values(m);
      return p ? e.filter(w, function(E) {
        return E.v === p;
      }) : w;
    }
  }, s.prototype.outEdges = function(h, p) {
    var m = this._out[h];
    if (m) {
      var w = e.values(m);
      return p ? e.filter(w, function(E) {
        return E.w === p;
      }) : w;
    }
  }, s.prototype.nodeEdges = function(h, p) {
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
  function u(h, p, m, w) {
    var E = "" + p, y = "" + m;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    return E + o + y + o + (e.isUndefined(w) ? t : w);
  }
  function f(h, p, m, w) {
    var E = "" + p, y = "" + m;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    var S = { v: E, w: y };
    return w && (S.name = w), S;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return Vg;
}
var Hg, aC;
function XV() {
  return aC || (aC = 1, Hg = "2.1.8"), Hg;
}
var Wg, lC;
function QV() {
  return lC || (lC = 1, Wg = {
    Graph: Jy(),
    version: XV()
  }), Wg;
}
var Ug, uC;
function ZV() {
  if (uC) return Ug;
  uC = 1;
  var e = Jt(), t = Jy();
  Ug = {
    write: r,
    read: a
  };
  function r(l) {
    var u = {
      options: {
        directed: l.isDirected(),
        multigraph: l.isMultigraph(),
        compound: l.isCompound()
      },
      nodes: o(l),
      edges: s(l)
    };
    return e.isUndefined(l.graph()) || (u.value = e.clone(l.graph())), u;
  }
  function o(l) {
    return e.map(l.nodes(), function(u) {
      var f = l.node(u), d = l.parent(u), h = { v: u };
      return e.isUndefined(f) || (h.value = f), e.isUndefined(d) || (h.parent = d), h;
    });
  }
  function s(l) {
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
  return Ug;
}
var Gg, cC;
function JV() {
  if (cC) return Gg;
  cC = 1;
  var e = Jt();
  Gg = t;
  function t(r) {
    var o = {}, s = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(r.successors(u), l), e.each(r.predecessors(u), l));
    }
    return e.each(r.nodes(), function(u) {
      a = [], l(u), a.length && s.push(a);
    }), s;
  }
  return Gg;
}
var Yg, fC;
function yT() {
  if (fC) return Yg;
  fC = 1;
  var e = Jt();
  Yg = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(r) {
      return r.key;
    });
  }, t.prototype.has = function(r) {
    return e.has(this._keyIndices, r);
  }, t.prototype.priority = function(r) {
    var o = this._keyIndices[r];
    if (o !== void 0)
      return this._arr[o].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(r, o) {
    var s = this._keyIndices;
    if (r = String(r), !e.has(s, r)) {
      var a = this._arr, l = a.length;
      return s[r] = l, a.push({ key: r, priority: o }), this._decrease(l), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var r = this._arr.pop();
    return delete this._keyIndices[r.key], this._heapify(0), r.key;
  }, t.prototype.decrease = function(r, o) {
    var s = this._keyIndices[r];
    if (o > this._arr[s].priority)
      throw new Error("New priority is greater than current priority. Key: " + r + " Old: " + this._arr[s].priority + " New: " + o);
    this._arr[s].priority = o, this._decrease(s);
  }, t.prototype._heapify = function(r) {
    var o = this._arr, s = 2 * r, a = s + 1, l = r;
    s < o.length && (l = o[s].priority < o[l].priority ? s : l, a < o.length && (l = o[a].priority < o[l].priority ? a : l), l !== r && (this._swap(r, l), this._heapify(l)));
  }, t.prototype._decrease = function(r) {
    for (var o = this._arr, s = o[r].priority, a; r !== 0 && (a = r >> 1, !(o[a].priority < s)); )
      this._swap(r, a), r = a;
  }, t.prototype._swap = function(r, o) {
    var s = this._arr, a = this._keyIndices, l = s[r], u = s[o];
    s[r] = u, s[o] = l, a[u.key] = r, a[l.key] = o;
  }, Yg;
}
var Kg, dC;
function wT() {
  if (dC) return Kg;
  dC = 1;
  var e = Jt(), t = yT();
  Kg = o;
  var r = e.constant(1);
  function o(a, l, u, f) {
    return s(
      a,
      String(l),
      u || r,
      f || function(d) {
        return a.outEdges(d);
      }
    );
  }
  function s(a, l, u, f) {
    var d = {}, h = new t(), p, m, w = function(E) {
      var y = E.v !== p ? E.v : E.w, x = d[y], S = u(E), C = m.distance + S;
      if (S < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + S);
      C < x.distance && (x.distance = C, x.predecessor = p, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === l ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (p = h.removeMin(), m = d[p], m.distance !== Number.POSITIVE_INFINITY); )
      f(p).forEach(w);
    return d;
  }
  return Kg;
}
var Xg, hC;
function eH() {
  if (hC) return Xg;
  hC = 1;
  var e = wT(), t = Jt();
  Xg = r;
  function r(o, s, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, s, a);
    }, {});
  }
  return Xg;
}
var Qg, pC;
function xT() {
  if (pC) return Qg;
  pC = 1;
  var e = Jt();
  Qg = t;
  function t(r) {
    var o = 0, s = [], a = {}, l = [];
    function u(f) {
      var d = a[f] = {
        onStack: !0,
        lowlink: o,
        index: o++
      };
      if (s.push(f), r.successors(f).forEach(function(m) {
        e.has(a, m) ? a[m].onStack && (d.lowlink = Math.min(d.lowlink, a[m].index)) : (u(m), d.lowlink = Math.min(d.lowlink, a[m].lowlink));
      }), d.lowlink === d.index) {
        var h = [], p;
        do
          p = s.pop(), a[p].onStack = !1, h.push(p);
        while (f !== p);
        l.push(h);
      }
    }
    return r.nodes().forEach(function(f) {
      e.has(a, f) || u(f);
    }), l;
  }
  return Qg;
}
var Zg, gC;
function tH() {
  if (gC) return Zg;
  gC = 1;
  var e = Jt(), t = xT();
  Zg = r;
  function r(o) {
    return e.filter(t(o), function(s) {
      return s.length > 1 || s.length === 1 && o.hasEdge(s[0], s[0]);
    });
  }
  return Zg;
}
var Jg, mC;
function nH() {
  if (mC) return Jg;
  mC = 1;
  var e = Jt();
  Jg = r;
  var t = e.constant(1);
  function r(s, a, l) {
    return o(
      s,
      a || t,
      l || function(u) {
        return s.outEdges(u);
      }
    );
  }
  function o(s, a, l) {
    var u = {}, f = s.nodes();
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
        f.forEach(function(w) {
          var E = m[d], y = h[w], x = m[w], S = E.distance + y.distance;
          S < x.distance && (x.distance = S, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return Jg;
}
var em, vC;
function _T() {
  if (vC) return em;
  vC = 1;
  var e = Jt();
  em = t, t.CycleException = r;
  function t(o) {
    var s = {}, a = {}, l = [];
    function u(f) {
      if (e.has(a, f))
        throw new r();
      e.has(s, f) || (a[f] = !0, s[f] = !0, e.each(o.predecessors(f), u), delete a[f], l.push(f));
    }
    if (e.each(o.sinks(), u), e.size(s) !== o.nodeCount())
      throw new r();
    return l;
  }
  function r() {
  }
  return r.prototype = new Error(), em;
}
var tm, yC;
function rH() {
  if (yC) return tm;
  yC = 1;
  var e = _T();
  tm = t;
  function t(r) {
    try {
      e(r);
    } catch (o) {
      if (o instanceof e.CycleException)
        return !1;
      throw o;
    }
    return !0;
  }
  return tm;
}
var nm, wC;
function bT() {
  if (wC) return nm;
  wC = 1;
  var e = Jt();
  nm = t;
  function t(o, s, a) {
    e.isArray(s) || (s = [s]);
    var l = (o.isDirected() ? o.successors : o.neighbors).bind(o), u = [], f = {};
    return e.each(s, function(d) {
      if (!o.hasNode(d))
        throw new Error("Graph does not have node: " + d);
      r(o, d, a === "post", f, l, u);
    }), u;
  }
  function r(o, s, a, l, u, f) {
    e.has(l, s) || (l[s] = !0, a || f.push(s), e.each(u(s), function(d) {
      r(o, d, a, l, u, f);
    }), a && f.push(s));
  }
  return nm;
}
var rm, xC;
function oH() {
  if (xC) return rm;
  xC = 1;
  var e = bT();
  rm = t;
  function t(r, o) {
    return e(r, o, "post");
  }
  return rm;
}
var om, _C;
function iH() {
  if (_C) return om;
  _C = 1;
  var e = bT();
  om = t;
  function t(r, o) {
    return e(r, o, "pre");
  }
  return om;
}
var im, bC;
function sH() {
  if (bC) return im;
  bC = 1;
  var e = Jt(), t = Jy(), r = yT();
  im = o;
  function o(s, a) {
    var l = new t(), u = {}, f = new r(), d;
    function h(m) {
      var w = m.v === d ? m.w : m.v, E = f.priority(w);
      if (E !== void 0) {
        var y = a(m);
        y < E && (u[w] = d, f.decrease(w, y));
      }
    }
    if (s.nodeCount() === 0)
      return l;
    e.each(s.nodes(), function(m) {
      f.add(m, Number.POSITIVE_INFINITY), l.setNode(m);
    }), f.decrease(s.nodes()[0], 0);
    for (var p = !1; f.size() > 0; ) {
      if (d = f.removeMin(), e.has(u, d))
        l.setEdge(d, u[d]);
      else {
        if (p)
          throw new Error("Input graph is not connected: " + s);
        p = !0;
      }
      s.nodeEdges(d).forEach(h);
    }
    return l;
  }
  return im;
}
var sm, SC;
function aH() {
  return SC || (SC = 1, sm = {
    components: JV(),
    dijkstra: wT(),
    dijkstraAll: eH(),
    findCycles: tH(),
    floydWarshall: nH(),
    isAcyclic: rH(),
    postorder: oH(),
    preorder: iH(),
    prim: sH(),
    tarjan: xT(),
    topsort: _T()
  }), sm;
}
var am, EC;
function lH() {
  if (EC) return am;
  EC = 1;
  var e = QV();
  return am = {
    Graph: e.Graph,
    json: ZV(),
    alg: aH(),
    version: e.version
  }, am;
}
var lm, CC;
function vn() {
  if (CC) return lm;
  CC = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = lH();
    } catch {
    }
  return e || (e = window.graphlib), lm = e, lm;
}
var um, kC;
function uH() {
  if (kC) return um;
  kC = 1;
  var e = GA(), t = 1, r = 4;
  function o(s) {
    return e(s, t | r);
  }
  return um = o, um;
}
var cm, NC;
function Vu() {
  if (NC) return cm;
  NC = 1;
  var e = gi(), t = Zn(), r = Ou(), o = Zt();
  function s(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && r(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return cm = s, cm;
}
var fm, RC;
function cH() {
  if (RC) return fm;
  RC = 1;
  var e = Bu(), t = gi(), r = Vu(), o = ho(), s = Object.prototype, a = s.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && r(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], w = o(m), E = -1, y = w.length; ++E < y; ) {
        var x = w[E], S = u[x];
        (S === void 0 || t(S, s[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return fm = l, fm;
}
var dm, PC;
function fH() {
  if (PC) return dm;
  PC = 1;
  var e = Jn(), t = Zn(), r = Mr();
  function o(s) {
    return function(a, l, u) {
      var f = Object(a);
      if (!t(a)) {
        var d = e(l, 3);
        a = r(a), l = function(p) {
          return d(f[p], p, f);
        };
      }
      var h = s(a, l, u);
      return h > -1 ? f[d ? a[h] : h] : void 0;
    };
  }
  return dm = o, dm;
}
var hm, AC;
function dH() {
  if (AC) return hm;
  AC = 1;
  var e = /\s/;
  function t(r) {
    for (var o = r.length; o-- && e.test(r.charAt(o)); )
      ;
    return o;
  }
  return hm = t, hm;
}
var pm, TC;
function hH() {
  if (TC) return pm;
  TC = 1;
  var e = dH(), t = /^\s+/;
  function r(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return pm = r, pm;
}
var gm, IC;
function pH() {
  if (IC) return gm;
  IC = 1;
  var e = hH(), t = Zt(), r = wi(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
  function f(d) {
    if (typeof d == "number")
      return d;
    if (r(d))
      return o;
    if (t(d)) {
      var h = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = t(h) ? h + "" : h;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = e(d);
    var p = a.test(d);
    return p || l.test(d) ? u(d.slice(2), p ? 2 : 8) : s.test(d) ? o : +d;
  }
  return gm = f, gm;
}
var mm, MC;
function ST() {
  if (MC) return mm;
  MC = 1;
  var e = pH(), t = 1 / 0, r = 17976931348623157e292;
  function o(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === t || s === -t) {
      var a = s < 0 ? -1 : 1;
      return a * r;
    }
    return s === s ? s : 0;
  }
  return mm = o, mm;
}
var vm, OC;
function gH() {
  if (OC) return vm;
  OC = 1;
  var e = ST();
  function t(r) {
    var o = e(r), s = o % 1;
    return o === o ? s ? o - s : o : 0;
  }
  return vm = t, vm;
}
var ym, LC;
function mH() {
  if (LC) return ym;
  LC = 1;
  var e = gT(), t = Jn(), r = gH(), o = Math.max;
  function s(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : r(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return ym = s, ym;
}
var wm, DC;
function vH() {
  if (DC) return wm;
  DC = 1;
  var e = fH(), t = mH(), r = e(t);
  return wm = r, wm;
}
var xm, qC;
function ET() {
  if (qC) return xm;
  qC = 1;
  var e = Zy();
  function t(r) {
    var o = r == null ? 0 : r.length;
    return o ? e(r, 1) : [];
  }
  return xm = t, xm;
}
var _m, jC;
function yH() {
  if (jC) return _m;
  jC = 1;
  var e = Yy(), t = YA(), r = ho();
  function o(s, a) {
    return s == null ? s : e(s, t(a), r);
  }
  return _m = o, _m;
}
var bm, zC;
function wH() {
  if (zC) return bm;
  zC = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return bm = e, bm;
}
var Sm, FC;
function xH() {
  if (FC) return Sm;
  FC = 1;
  var e = Iu(), t = Ky(), r = Jn();
  function o(s, a) {
    var l = {};
    return a = r(a, 3), t(s, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Sm = o, Sm;
}
var Em, $C;
function e0() {
  if ($C) return Em;
  $C = 1;
  var e = wi();
  function t(r, o, s) {
    for (var a = -1, l = r.length; ++a < l; ) {
      var u = r[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : s(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Em = t, Em;
}
var Cm, BC;
function _H() {
  if (BC) return Cm;
  BC = 1;
  function e(t, r) {
    return t > r;
  }
  return Cm = e, Cm;
}
var km, VC;
function bH() {
  if (VC) return km;
  VC = 1;
  var e = e0(), t = _H(), r = po();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return km = o, km;
}
var Nm, HC;
function CT() {
  if (HC) return Nm;
  HC = 1;
  var e = Iu(), t = gi();
  function r(o, s, a) {
    (a !== void 0 && !t(o[s], a) || a === void 0 && !(s in o)) && e(o, s, a);
  }
  return Nm = r, Nm;
}
var Rm, WC;
function SH() {
  if (WC) return Rm;
  WC = 1;
  var e = co(), t = qu(), r = Ln(), o = "[object Object]", s = Function.prototype, a = Object.prototype, l = s.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!r(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return Rm = d, Rm;
}
var Pm, UC;
function kT() {
  if (UC) return Pm;
  UC = 1;
  function e(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Pm = e, Pm;
}
var Am, GC;
function EH() {
  if (GC) return Am;
  GC = 1;
  var e = Ws(), t = ho();
  function r(o) {
    return e(o, t(o));
  }
  return Am = r, Am;
}
var Tm, YC;
function CH() {
  if (YC) return Tm;
  YC = 1;
  var e = CT(), t = LA(), r = HA(), o = DA(), s = UA(), a = Us(), l = nt(), u = mT(), f = vi(), d = Hs(), h = Zt(), p = SH(), m = Gs(), w = kT(), E = EH();
  function y(x, S, C, _, k, R, A) {
    var T = w(x, C), O = w(S, C), q = A.get(O);
    if (q) {
      e(x, C, q);
      return;
    }
    var U = R ? R(T, O, C + "", x, S, A) : void 0, j = U === void 0;
    if (j) {
      var V = l(O), X = !V && f(O), L = !V && !X && m(O);
      U = O, V || X || L ? l(T) ? U = T : u(T) ? U = o(T) : X ? (j = !1, U = t(O, !0)) : L ? (j = !1, U = r(O, !0)) : U = [] : p(O) || a(O) ? (U = T, a(T) ? U = E(T) : (!h(T) || d(T)) && (U = s(O))) : j = !1;
    }
    j && (A.set(O, U), k(U, O, _, R, A), A.delete(O)), e(x, C, U);
  }
  return Tm = y, Tm;
}
var Im, KC;
function kH() {
  if (KC) return Im;
  KC = 1;
  var e = Tu(), t = CT(), r = Yy(), o = CH(), s = Zt(), a = ho(), l = kT();
  function u(f, d, h, p, m) {
    f !== d && r(d, function(w, E) {
      if (m || (m = new e()), s(w))
        o(f, d, E, h, u, p, m);
      else {
        var y = p ? p(l(f, E), w, E + "", f, d, m) : void 0;
        y === void 0 && (y = w), t(f, E, y);
      }
    }, a);
  }
  return Im = u, Im;
}
var Mm, XC;
function NH() {
  if (XC) return Mm;
  XC = 1;
  var e = Bu(), t = Vu();
  function r(o) {
    return e(function(s, a) {
      var l = -1, u = a.length, f = u > 1 ? a[u - 1] : void 0, d = u > 2 ? a[2] : void 0;
      for (f = o.length > 3 && typeof f == "function" ? (u--, f) : void 0, d && t(a[0], a[1], d) && (f = u < 3 ? void 0 : f, u = 1), s = Object(s); ++l < u; ) {
        var h = a[l];
        h && o(s, h, l, f);
      }
      return s;
    });
  }
  return Mm = r, Mm;
}
var Om, QC;
function RH() {
  if (QC) return Om;
  QC = 1;
  var e = kH(), t = NH(), r = t(function(o, s, a) {
    e(o, s, a);
  });
  return Om = r, Om;
}
var Lm, ZC;
function NT() {
  if (ZC) return Lm;
  ZC = 1;
  function e(t, r) {
    return t < r;
  }
  return Lm = e, Lm;
}
var Dm, JC;
function PH() {
  if (JC) return Dm;
  JC = 1;
  var e = e0(), t = NT(), r = po();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return Dm = o, Dm;
}
var qm, ek;
function AH() {
  if (ek) return qm;
  ek = 1;
  var e = e0(), t = Jn(), r = NT();
  function o(s, a) {
    return s && s.length ? e(s, t(a, 2), r) : void 0;
  }
  return qm = o, qm;
}
var jm, tk;
function TH() {
  if (tk) return jm;
  tk = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return jm = t, jm;
}
var zm, nk;
function IH() {
  if (nk) return zm;
  nk = 1;
  var e = Mu(), t = Fu(), r = Ou(), o = Zt(), s = Ys();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, p = u.length, m = p - 1, w = l; w != null && ++h < p; ) {
      var E = s(u[h]), y = f;
      if (E === "__proto__" || E === "constructor" || E === "prototype")
        return l;
      if (h != m) {
        var x = w[E];
        y = d ? d(x, E, w) : void 0, y === void 0 && (y = o(x) ? x : r(u[h + 1]) ? [] : {});
      }
      e(w, E, y), w = w[E];
    }
    return l;
  }
  return zm = a, zm;
}
var Fm, rk;
function MH() {
  if (rk) return Fm;
  rk = 1;
  var e = $u(), t = IH(), r = Fu();
  function o(s, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(s, h);
      l(p, h) && t(d, r(h, s), p);
    }
    return d;
  }
  return Fm = o, Fm;
}
var $m, ok;
function OH() {
  if (ok) return $m;
  ok = 1;
  var e = MH(), t = iT();
  function r(o, s) {
    return e(o, s, function(a, l) {
      return t(o, l);
    });
  }
  return $m = r, $m;
}
var Bm, ik;
function LH() {
  if (ik) return Bm;
  ik = 1;
  var e = ET(), t = hT(), r = pT();
  function o(s) {
    return r(t(s, void 0, e), s + "");
  }
  return Bm = o, Bm;
}
var Vm, sk;
function DH() {
  if (sk) return Vm;
  sk = 1;
  var e = OH(), t = LH(), r = t(function(o, s) {
    return o == null ? {} : e(o, s);
  });
  return Vm = r, Vm;
}
var Hm, ak;
function qH() {
  if (ak) return Hm;
  ak = 1;
  var e = Math.ceil, t = Math.max;
  function r(o, s, a, l) {
    for (var u = -1, f = t(e((s - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return Hm = r, Hm;
}
var Wm, lk;
function jH() {
  if (lk) return Wm;
  lk = 1;
  var e = qH(), t = Vu(), r = ST();
  function o(s) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = r(a), l === void 0 ? (l = a, a = 0) : l = r(l), u = u === void 0 ? a < l ? 1 : -1 : r(u), e(a, l, u, s);
    };
  }
  return Wm = o, Wm;
}
var Um, uk;
function zH() {
  if (uk) return Um;
  uk = 1;
  var e = jH(), t = e();
  return Um = t, Um;
}
var Gm, ck;
function FH() {
  if (ck) return Gm;
  ck = 1;
  function e(t, r) {
    var o = t.length;
    for (t.sort(r); o--; )
      t[o] = t[o].value;
    return t;
  }
  return Gm = e, Gm;
}
var Ym, fk;
function $H() {
  if (fk) return Ym;
  fk = 1;
  var e = wi();
  function t(r, o) {
    if (r !== o) {
      var s = r !== void 0, a = r === null, l = r === r, u = e(r), f = o !== void 0, d = o === null, h = o === o, p = e(o);
      if (!d && !p && !u && r > o || u && f && h && !d && !p || a && f && h || !s && h || !l)
        return 1;
      if (!a && !u && !p && r < o || p && s && l && !a && !u || d && s && l || !f && l || !h)
        return -1;
    }
    return 0;
  }
  return Ym = t, Ym;
}
var Km, dk;
function BH() {
  if (dk) return Km;
  dk = 1;
  var e = $H();
  function t(r, o, s) {
    for (var a = -1, l = r.criteria, u = o.criteria, f = l.length, d = s.length; ++a < f; ) {
      var h = e(l[a], u[a]);
      if (h) {
        if (a >= d)
          return h;
        var p = s[a];
        return h * (p == "desc" ? -1 : 1);
      }
    }
    return r.index - o.index;
  }
  return Km = t, Km;
}
var Xm, hk;
function VH() {
  if (hk) return Xm;
  hk = 1;
  var e = zu(), t = $u(), r = Jn(), o = cT(), s = FH(), a = Lu(), l = BH(), u = po(), f = nt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var w = -1;
    p = e(p, a(r));
    var E = o(h, function(y, x, S) {
      var C = e(p, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++w, value: y };
    });
    return s(E, function(y, x) {
      return l(y, x, m);
    });
  }
  return Xm = d, Xm;
}
var Qm, pk;
function HH() {
  if (pk) return Qm;
  pk = 1;
  var e = Zy(), t = VH(), r = Bu(), o = Vu(), s = r(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Qm = s, Qm;
}
var Zm, gk;
function WH() {
  if (gk) return Zm;
  gk = 1;
  var e = rT(), t = 0;
  function r(o) {
    var s = ++t;
    return e(o) + s;
  }
  return Zm = r, Zm;
}
var Jm, mk;
function UH() {
  if (mk) return Jm;
  mk = 1;
  function e(t, r, o) {
    for (var s = -1, a = t.length, l = r.length, u = {}; ++s < a; ) {
      var f = s < l ? r[s] : void 0;
      o(u, t[s], f);
    }
    return u;
  }
  return Jm = e, Jm;
}
var ev, vk;
function GH() {
  if (vk) return ev;
  vk = 1;
  var e = Mu(), t = UH();
  function r(o, s) {
    return t(o || [], s || [], e);
  }
  return ev = r, ev;
}
var tv, yk;
function Be() {
  if (yk) return tv;
  yk = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = {
        cloneDeep: uH(),
        constant: Gy(),
        defaults: cH(),
        each: XA(),
        filter: aT(),
        find: vH(),
        flatten: ET(),
        forEach: KA(),
        forIn: yH(),
        has: lT(),
        isUndefined: uT(),
        last: wH(),
        map: fT(),
        mapValues: xH(),
        max: bH(),
        merge: RH(),
        min: PH(),
        minBy: AH(),
        now: TH(),
        pick: DH(),
        range: zH(),
        reduce: dT(),
        sortBy: HH(),
        uniqueId: WH(),
        values: vT(),
        zipObject: GH()
      };
    } catch {
    }
  return e || (e = window._), tv = e, tv;
}
var nv, wk;
function YH() {
  if (wk) return nv;
  wk = 1, nv = e;
  function e() {
    var o = {};
    o._next = o._prev = o, this._sentinel = o;
  }
  e.prototype.dequeue = function() {
    var o = this._sentinel, s = o._prev;
    if (s !== o)
      return t(s), s;
  }, e.prototype.enqueue = function(o) {
    var s = this._sentinel;
    o._prev && o._next && t(o), o._next = s._next, s._next._prev = o, s._next = o, o._prev = s;
  }, e.prototype.toString = function() {
    for (var o = [], s = this._sentinel, a = s._prev; a !== s; )
      o.push(JSON.stringify(a, r)), a = a._prev;
    return "[" + o.join(", ") + "]";
  };
  function t(o) {
    o._prev._next = o._next, o._next._prev = o._prev, delete o._next, delete o._prev;
  }
  function r(o, s) {
    if (o !== "_next" && o !== "_prev")
      return s;
  }
  return nv;
}
var rv, xk;
function KH() {
  if (xk) return rv;
  xk = 1;
  var e = Be(), t = vn().Graph, r = YH();
  rv = s;
  var o = e.constant(1);
  function s(d, h) {
    if (d.nodeCount() <= 1)
      return [];
    var p = u(d, h || o), m = a(p.graph, p.buckets, p.zeroIdx);
    return e.flatten(e.map(m, function(w) {
      return d.outEdges(w.v, w.w);
    }), !0);
  }
  function a(d, h, p) {
    for (var m = [], w = h[h.length - 1], E = h[0], y; d.nodeCount(); ) {
      for (; y = E.dequeue(); )
        l(d, h, p, y);
      for (; y = w.dequeue(); )
        l(d, h, p, y);
      if (d.nodeCount()) {
        for (var x = h.length - 2; x > 0; --x)
          if (y = h[x].dequeue(), y) {
            m = m.concat(l(d, h, p, y, !0));
            break;
          }
      }
    }
    return m;
  }
  function l(d, h, p, m, w) {
    var E = w ? [] : void 0;
    return e.forEach(d.inEdges(m.v), function(y) {
      var x = d.edge(y), S = d.node(y.v);
      w && E.push({ v: y.v, w: y.w }), S.out -= x, f(h, p, S);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var x = d.edge(y), S = y.w, C = d.node(S);
      C.in -= x, f(h, p, C);
    }), d.removeNode(m.v), E;
  }
  function u(d, h) {
    var p = new t(), m = 0, w = 0;
    e.forEach(d.nodes(), function(x) {
      p.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var S = p.edge(x.v, x.w) || 0, C = h(x), _ = S + C;
      p.setEdge(x.v, x.w, _), w = Math.max(w, p.node(x.v).out += C), m = Math.max(m, p.node(x.w).in += C);
    });
    var E = e.range(w + m + 3).map(function() {
      return new r();
    }), y = m + 1;
    return e.forEach(p.nodes(), function(x) {
      f(E, y, p.node(x));
    }), { graph: p, buckets: E, zeroIdx: y };
  }
  function f(d, h, p) {
    p.out ? p.in ? d[p.out - p.in + h].enqueue(p) : d[d.length - 1].enqueue(p) : d[0].enqueue(p);
  }
  return rv;
}
var ov, _k;
function XH() {
  if (_k) return ov;
  _k = 1;
  var e = Be(), t = KH();
  ov = {
    run: r,
    undo: s
  };
  function r(a) {
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
  function s(a) {
    e.forEach(a.edges(), function(l) {
      var u = a.edge(l);
      if (u.reversed) {
        a.removeEdge(l);
        var f = u.forwardName;
        delete u.reversed, delete u.forwardName, a.setEdge(l.w, l.v, u, f);
      }
    });
  }
  return ov;
}
var iv, bk;
function Pt() {
  if (bk) return iv;
  bk = 1;
  var e = Be(), t = vn().Graph;
  iv = {
    addDummyNode: r,
    simplify: o,
    asNonCompoundGraph: s,
    successorWeights: a,
    predecessorWeights: l,
    intersectRect: u,
    buildLayerMatrix: f,
    normalizeRanks: d,
    removeEmptyRanks: h,
    addBorderNode: p,
    maxRank: m,
    partition: w,
    time: E,
    notime: y
  };
  function r(x, S, C, _) {
    var k;
    do
      k = e.uniqueId(_);
    while (x.hasNode(k));
    return C.dummy = S, x.setNode(k, C), k;
  }
  function o(x) {
    var S = new t().setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      S.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      var _ = S.edge(C.v, C.w) || { weight: 0, minlen: 1 }, k = x.edge(C);
      S.setEdge(C.v, C.w, {
        weight: _.weight + k.weight,
        minlen: Math.max(_.minlen, k.minlen)
      });
    }), S;
  }
  function s(x) {
    var S = new t({ multigraph: x.isMultigraph() }).setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      x.children(C).length || S.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      S.setEdge(C, x.edge(C));
    }), S;
  }
  function a(x) {
    var S = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.outEdges(C), function(k) {
        _[k.w] = (_[k.w] || 0) + x.edge(k).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), S);
  }
  function l(x) {
    var S = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.inEdges(C), function(k) {
        _[k.v] = (_[k.v] || 0) + x.edge(k).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), S);
  }
  function u(x, S) {
    var C = x.x, _ = x.y, k = S.x - C, R = S.y - _, A = x.width / 2, T = x.height / 2;
    if (!k && !R)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, q;
    return Math.abs(R) * A > Math.abs(k) * T ? (R < 0 && (T = -T), O = T * k / R, q = T) : (k < 0 && (A = -A), O = A, q = A * R / k), { x: C + O, y: _ + q };
  }
  function f(x) {
    var S = e.map(e.range(m(x) + 1), function() {
      return [];
    });
    return e.forEach(x.nodes(), function(C) {
      var _ = x.node(C), k = _.rank;
      e.isUndefined(k) || (S[k][_.order] = C);
    }), S;
  }
  function d(x) {
    var S = e.min(e.map(x.nodes(), function(C) {
      return x.node(C).rank;
    }));
    e.forEach(x.nodes(), function(C) {
      var _ = x.node(C);
      e.has(_, "rank") && (_.rank -= S);
    });
  }
  function h(x) {
    var S = e.min(e.map(x.nodes(), function(R) {
      return x.node(R).rank;
    })), C = [];
    e.forEach(x.nodes(), function(R) {
      var A = x.node(R).rank - S;
      C[A] || (C[A] = []), C[A].push(R);
    });
    var _ = 0, k = x.graph().nodeRankFactor;
    e.forEach(C, function(R, A) {
      e.isUndefined(R) && A % k !== 0 ? --_ : _ && e.forEach(R, function(T) {
        x.node(T).rank += _;
      });
    });
  }
  function p(x, S, C, _) {
    var k = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (k.rank = C, k.order = _), r(x, "border", k, S);
  }
  function m(x) {
    return e.max(e.map(x.nodes(), function(S) {
      var C = x.node(S).rank;
      if (!e.isUndefined(C))
        return C;
    }));
  }
  function w(x, S) {
    var C = { lhs: [], rhs: [] };
    return e.forEach(x, function(_) {
      S(_) ? C.lhs.push(_) : C.rhs.push(_);
    }), C;
  }
  function E(x, S) {
    var C = e.now();
    try {
      return S();
    } finally {
      console.log(x + " time: " + (e.now() - C) + "ms");
    }
  }
  function y(x, S) {
    return S();
  }
  return iv;
}
var sv, Sk;
function QH() {
  if (Sk) return sv;
  Sk = 1;
  var e = Be(), t = Pt();
  sv = {
    run: r,
    undo: s
  };
  function r(a) {
    a.graph().dummyChains = [], e.forEach(a.edges(), function(l) {
      o(a, l);
    });
  }
  function o(a, l) {
    var u = l.v, f = a.node(u).rank, d = l.w, h = a.node(d).rank, p = l.name, m = a.edge(l), w = m.labelRank;
    if (h !== f + 1) {
      a.removeEdge(l);
      var E, y, x;
      for (x = 0, ++f; f < h; ++x, ++f)
        m.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: m,
          edgeObj: l,
          rank: f
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === w && (y.width = m.width, y.height = m.height, y.dummy = "edge-label", y.labelpos = m.labelpos), a.setEdge(u, E, { weight: m.weight }, p), x === 0 && a.graph().dummyChains.push(E), u = E;
      a.setEdge(u, d, { weight: m.weight }, p);
    }
  }
  function s(a) {
    e.forEach(a.graph().dummyChains, function(l) {
      var u = a.node(l), f = u.edgeLabel, d;
      for (a.setEdge(u.edgeObj, f); u.dummy; )
        d = a.successors(l)[0], a.removeNode(l), f.points.push({ x: u.x, y: u.y }), u.dummy === "edge-label" && (f.x = u.x, f.y = u.y, f.width = u.width, f.height = u.height), l = d, u = a.node(l);
    });
  }
  return sv;
}
var av, Ek;
function ru() {
  if (Ek) return av;
  Ek = 1;
  var e = Be();
  av = {
    longestPath: t,
    slack: r
  };
  function t(o) {
    var s = {};
    function a(l) {
      var u = o.node(l);
      if (e.has(s, l))
        return u.rank;
      s[l] = !0;
      var f = e.min(e.map(o.outEdges(l), function(d) {
        return a(d.w) - o.edge(d).minlen;
      }));
      return (f === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      f === void 0 || // return value of _.map([]) for Lodash 4
      f === null) && (f = 0), u.rank = f;
    }
    e.forEach(o.sources(), a);
  }
  function r(o, s) {
    return o.node(s.w).rank - o.node(s.v).rank - o.edge(s).minlen;
  }
  return av;
}
var lv, Ck;
function RT() {
  if (Ck) return lv;
  Ck = 1;
  var e = Be(), t = vn().Graph, r = ru().slack;
  lv = o;
  function o(u) {
    var f = new t({ directed: !1 }), d = u.nodes()[0], h = u.nodeCount();
    f.setNode(d, {});
    for (var p, m; s(f, u) < h; )
      p = a(f, u), m = f.hasNode(p.v) ? r(u, p) : -r(u, p), l(f, u, m);
    return f;
  }
  function s(u, f) {
    function d(h) {
      e.forEach(f.nodeEdges(h), function(p) {
        var m = p.v, w = h === m ? p.w : m;
        !u.hasNode(w) && !r(f, p) && (u.setNode(w, {}), u.setEdge(h, w, {}), d(w));
      });
    }
    return e.forEach(u.nodes(), d), u.nodeCount();
  }
  function a(u, f) {
    return e.minBy(f.edges(), function(d) {
      if (u.hasNode(d.v) !== u.hasNode(d.w))
        return r(f, d);
    });
  }
  function l(u, f, d) {
    e.forEach(u.nodes(), function(h) {
      f.node(h).rank += d;
    });
  }
  return lv;
}
var uv, kk;
function ZH() {
  if (kk) return uv;
  kk = 1;
  var e = Be(), t = RT(), r = ru().slack, o = ru().longestPath, s = vn().alg.preorder, a = vn().alg.postorder, l = Pt().simplify;
  uv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = w, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var k = t(_);
    p(k), f(k, _);
    for (var R, A; R = w(k); )
      A = E(k, _, R), y(k, _, R, A);
  }
  function f(_, k) {
    var R = a(_, _.nodes());
    R = R.slice(0, R.length - 1), e.forEach(R, function(A) {
      d(_, k, A);
    });
  }
  function d(_, k, R) {
    var A = _.node(R), T = A.parent;
    _.edge(R, T).cutvalue = h(_, k, R);
  }
  function h(_, k, R) {
    var A = _.node(R), T = A.parent, O = !0, q = k.edge(R, T), U = 0;
    return q || (O = !1, q = k.edge(T, R)), U = q.weight, e.forEach(k.nodeEdges(R), function(j) {
      var V = j.v === R, X = V ? j.w : j.v;
      if (X !== T) {
        var L = V === O, H = k.edge(j).weight;
        if (U += L ? H : -H, S(_, R, X)) {
          var B = _.edge(R, X).cutvalue;
          U += L ? -B : B;
        }
      }
    }), U;
  }
  function p(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), m(_, {}, 1, k);
  }
  function m(_, k, R, A, T) {
    var O = R, q = _.node(A);
    return k[A] = !0, e.forEach(_.neighbors(A), function(U) {
      e.has(k, U) || (R = m(_, k, R, U, A));
    }), q.low = O, q.lim = R++, T ? q.parent = T : delete q.parent, R;
  }
  function w(_) {
    return e.find(_.edges(), function(k) {
      return _.edge(k).cutvalue < 0;
    });
  }
  function E(_, k, R) {
    var A = R.v, T = R.w;
    k.hasEdge(A, T) || (A = R.w, T = R.v);
    var O = _.node(A), q = _.node(T), U = O, j = !1;
    O.lim > q.lim && (U = q, j = !0);
    var V = e.filter(k.edges(), function(X) {
      return j === C(_, _.node(X.v), U) && j !== C(_, _.node(X.w), U);
    });
    return e.minBy(V, function(X) {
      return r(k, X);
    });
  }
  function y(_, k, R, A) {
    var T = R.v, O = R.w;
    _.removeEdge(T, O), _.setEdge(A.v, A.w, {}), p(_), f(_, k), x(_, k);
  }
  function x(_, k) {
    var R = e.find(_.nodes(), function(T) {
      return !k.node(T).parent;
    }), A = s(_, R);
    A = A.slice(1), e.forEach(A, function(T) {
      var O = _.node(T).parent, q = k.edge(T, O), U = !1;
      q || (q = k.edge(O, T), U = !0), k.node(T).rank = k.node(O).rank + (U ? q.minlen : -q.minlen);
    });
  }
  function S(_, k, R) {
    return _.hasEdge(k, R);
  }
  function C(_, k, R) {
    return R.low <= k.lim && k.lim <= R.lim;
  }
  return uv;
}
var cv, Nk;
function JH() {
  if (Nk) return cv;
  Nk = 1;
  var e = ru(), t = e.longestPath, r = RT(), o = ZH();
  cv = s;
  function s(f) {
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
    t(f), r(f);
  }
  function u(f) {
    o(f);
  }
  return cv;
}
var fv, Rk;
function e8() {
  if (Rk) return fv;
  Rk = 1;
  var e = Be();
  fv = t;
  function t(s) {
    var a = o(s);
    e.forEach(s.graph().dummyChains, function(l) {
      for (var u = s.node(l), f = u.edgeObj, d = r(s, a, f.v, f.w), h = d.path, p = d.lca, m = 0, w = h[m], E = !0; l !== f.w; ) {
        if (u = s.node(l), E) {
          for (; (w = h[m]) !== p && s.node(w).maxRank < u.rank; )
            m++;
          w === p && (E = !1);
        }
        if (!E) {
          for (; m < h.length - 1 && s.node(w = h[m + 1]).minRank <= u.rank; )
            m++;
          w = h[m];
        }
        s.setParent(l, w), l = s.successors(l)[0];
      }
    });
  }
  function r(s, a, l, u) {
    var f = [], d = [], h = Math.min(a[l].low, a[u].low), p = Math.max(a[l].lim, a[u].lim), m, w;
    m = l;
    do
      m = s.parent(m), f.push(m);
    while (m && (a[m].low > h || p > a[m].lim));
    for (w = m, m = u; (m = s.parent(m)) !== w; )
      d.push(m);
    return { path: f.concat(d.reverse()), lca: w };
  }
  function o(s) {
    var a = {}, l = 0;
    function u(f) {
      var d = l;
      e.forEach(s.children(f), u), a[f] = { low: d, lim: l++ };
    }
    return e.forEach(s.children(), u), a;
  }
  return fv;
}
var dv, Pk;
function t8() {
  if (Pk) return dv;
  Pk = 1;
  var e = Be(), t = Pt();
  dv = {
    run: r,
    cleanup: l
  };
  function r(u) {
    var f = t.addDummyNode(u, "root", {}, "_root"), d = s(u), h = e.max(e.values(d)) - 1, p = 2 * h + 1;
    u.graph().nestingRoot = f, e.forEach(u.edges(), function(w) {
      u.edge(w).minlen *= p;
    });
    var m = a(u) + 1;
    e.forEach(u.children(), function(w) {
      o(u, f, p, m, h, d, w);
    }), u.graph().nodeRankFactor = p;
  }
  function o(u, f, d, h, p, m, w) {
    var E = u.children(w);
    if (!E.length) {
      w !== f && u.setEdge(f, w, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), S = u.node(w);
    u.setParent(y, w), S.borderTop = y, u.setParent(x, w), S.borderBottom = x, e.forEach(E, function(C) {
      o(u, f, d, h, p, m, C);
      var _ = u.node(C), k = _.borderTop ? _.borderTop : C, R = _.borderBottom ? _.borderBottom : C, A = _.borderTop ? h : 2 * h, T = k !== R ? 1 : p - m[w] + 1;
      u.setEdge(y, k, {
        weight: A,
        minlen: T,
        nestingEdge: !0
      }), u.setEdge(R, x, {
        weight: A,
        minlen: T,
        nestingEdge: !0
      });
    }), u.parent(w) || u.setEdge(f, y, { weight: 0, minlen: p + m[w] });
  }
  function s(u) {
    var f = {};
    function d(h, p) {
      var m = u.children(h);
      m && m.length && e.forEach(m, function(w) {
        d(w, p + 1);
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
  return dv;
}
var hv, Ak;
function n8() {
  if (Ak) return hv;
  Ak = 1;
  var e = Be(), t = Pt();
  hv = r;
  function r(s) {
    function a(l) {
      var u = s.children(l), f = s.node(l);
      if (u.length && e.forEach(u, a), e.has(f, "minRank")) {
        f.borderLeft = [], f.borderRight = [];
        for (var d = f.minRank, h = f.maxRank + 1; d < h; ++d)
          o(s, "borderLeft", "_bl", l, f, d), o(s, "borderRight", "_br", l, f, d);
      }
    }
    e.forEach(s.children(), a);
  }
  function o(s, a, l, u, f, d) {
    var h = { width: 0, height: 0, rank: d, borderType: a }, p = f[a][d - 1], m = t.addDummyNode(s, "border", h, l);
    f[a][d] = m, s.setParent(m, u), p && s.setEdge(p, m, { weight: 1 });
  }
  return hv;
}
var pv, Tk;
function r8() {
  if (Tk) return pv;
  Tk = 1;
  var e = Be();
  pv = {
    adjust: t,
    undo: r
  };
  function t(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "lr" || h === "rl") && o(d);
  }
  function r(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "bt" || h === "rl") && a(d), (h === "lr" || h === "rl") && (u(d), o(d));
  }
  function o(d) {
    e.forEach(d.nodes(), function(h) {
      s(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      s(d.edge(h));
    });
  }
  function s(d) {
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
  return pv;
}
var gv, Ik;
function o8() {
  if (Ik) return gv;
  Ik = 1;
  var e = Be();
  gv = t;
  function t(r) {
    var o = {}, s = e.filter(r.nodes(), function(d) {
      return !r.children(d).length;
    }), a = e.max(e.map(s, function(d) {
      return r.node(d).rank;
    })), l = e.map(e.range(a + 1), function() {
      return [];
    });
    function u(d) {
      if (!e.has(o, d)) {
        o[d] = !0;
        var h = r.node(d);
        l[h.rank].push(d), e.forEach(r.successors(d), u);
      }
    }
    var f = e.sortBy(s, function(d) {
      return r.node(d).rank;
    });
    return e.forEach(f, u), l;
  }
  return gv;
}
var mv, Mk;
function i8() {
  if (Mk) return mv;
  Mk = 1;
  var e = Be();
  mv = t;
  function t(o, s) {
    for (var a = 0, l = 1; l < s.length; ++l)
      a += r(o, s[l - 1], s[l]);
    return a;
  }
  function r(o, s, a) {
    for (var l = e.zipObject(
      a,
      e.map(a, function(m, w) {
        return w;
      })
    ), u = e.flatten(e.map(s, function(m) {
      return e.sortBy(e.map(o.outEdges(m), function(w) {
        return { pos: l[w.w], weight: o.edge(w).weight };
      }), "pos");
    }), !0), f = 1; f < a.length; ) f <<= 1;
    var d = 2 * f - 1;
    f -= 1;
    var h = e.map(new Array(d), function() {
      return 0;
    }), p = 0;
    return e.forEach(u.forEach(function(m) {
      var w = m.pos + f;
      h[w] += m.weight;
      for (var E = 0; w > 0; )
        w % 2 && (E += h[w + 1]), w = w - 1 >> 1, h[w] += m.weight;
      p += m.weight * E;
    })), p;
  }
  return mv;
}
var vv, Ok;
function s8() {
  if (Ok) return vv;
  Ok = 1;
  var e = Be();
  vv = t;
  function t(r, o) {
    return e.map(o, function(s) {
      var a = r.inEdges(s);
      if (a.length) {
        var l = e.reduce(a, function(u, f) {
          var d = r.edge(f), h = r.node(f.v);
          return {
            sum: u.sum + d.weight * h.order,
            weight: u.weight + d.weight
          };
        }, { sum: 0, weight: 0 });
        return {
          v: s,
          barycenter: l.sum / l.weight,
          weight: l.weight
        };
      } else
        return { v: s };
    });
  }
  return vv;
}
var yv, Lk;
function a8() {
  if (Lk) return yv;
  Lk = 1;
  var e = Be();
  yv = t;
  function t(s, a) {
    var l = {};
    e.forEach(s, function(f, d) {
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
    return r(u);
  }
  function r(s) {
    var a = [];
    function l(d) {
      return function(h) {
        h.merged || (e.isUndefined(h.barycenter) || e.isUndefined(d.barycenter) || h.barycenter >= d.barycenter) && o(d, h);
      };
    }
    function u(d) {
      return function(h) {
        h.in.push(d), --h.indegree === 0 && s.push(h);
      };
    }
    for (; s.length; ) {
      var f = s.pop();
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
  function o(s, a) {
    var l = 0, u = 0;
    s.weight && (l += s.barycenter * s.weight, u += s.weight), a.weight && (l += a.barycenter * a.weight, u += a.weight), s.vs = a.vs.concat(s.vs), s.barycenter = l / u, s.weight = u, s.i = Math.min(a.i, s.i), a.merged = !0;
  }
  return yv;
}
var wv, Dk;
function l8() {
  if (Dk) return wv;
  Dk = 1;
  var e = Be(), t = Pt();
  wv = r;
  function r(a, l) {
    var u = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = u.lhs, d = e.sortBy(u.rhs, function(y) {
      return -y.i;
    }), h = [], p = 0, m = 0, w = 0;
    f.sort(s(!!l)), w = o(h, d, w), e.forEach(f, function(y) {
      w += y.vs.length, h.push(y.vs), p += y.barycenter * y.weight, m += y.weight, w = o(h, d, w);
    });
    var E = { vs: e.flatten(h, !0) };
    return m && (E.barycenter = p / m, E.weight = m), E;
  }
  function o(a, l, u) {
    for (var f; l.length && (f = e.last(l)).i <= u; )
      l.pop(), a.push(f.vs), u++;
    return u;
  }
  function s(a) {
    return function(l, u) {
      return l.barycenter < u.barycenter ? -1 : l.barycenter > u.barycenter ? 1 : a ? u.i - l.i : l.i - u.i;
    };
  }
  return wv;
}
var xv, qk;
function u8() {
  if (qk) return xv;
  qk = 1;
  var e = Be(), t = s8(), r = a8(), o = l8();
  xv = s;
  function s(u, f, d, h) {
    var p = u.children(f), m = u.node(f), w = m ? m.borderLeft : void 0, E = m ? m.borderRight : void 0, y = {};
    w && (p = e.filter(p, function(R) {
      return R !== w && R !== E;
    }));
    var x = t(u, p);
    e.forEach(x, function(R) {
      if (u.children(R.v).length) {
        var A = s(u, R.v, d, h);
        y[R.v] = A, e.has(A, "barycenter") && l(R, A);
      }
    });
    var S = r(x, d);
    a(S, y);
    var C = o(S, h);
    if (w && (C.vs = e.flatten([w, C.vs, E], !0), u.predecessors(w).length)) {
      var _ = u.node(u.predecessors(w)[0]), k = u.node(u.predecessors(E)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + _.order + k.order) / (C.weight + 2), C.weight += 2;
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
  return xv;
}
var _v, jk;
function c8() {
  if (jk) return _v;
  jk = 1;
  var e = Be(), t = vn().Graph;
  _v = r;
  function r(s, a, l) {
    var u = o(s), f = new t({ compound: !0 }).setGraph({ root: u }).setDefaultNodeLabel(function(d) {
      return s.node(d);
    });
    return e.forEach(s.nodes(), function(d) {
      var h = s.node(d), p = s.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, p || u), e.forEach(s[l](d), function(m) {
        var w = m.v === d ? m.w : m.v, E = f.edge(w, d), y = e.isUndefined(E) ? 0 : E.weight;
        f.setEdge(w, d, { weight: s.edge(m).weight + y });
      }), e.has(h, "minRank") && f.setNode(d, {
        borderLeft: h.borderLeft[a],
        borderRight: h.borderRight[a]
      }));
    }), f;
  }
  function o(s) {
    for (var a; s.hasNode(a = e.uniqueId("_root")); ) ;
    return a;
  }
  return _v;
}
var bv, zk;
function f8() {
  if (zk) return bv;
  zk = 1;
  var e = Be();
  bv = t;
  function t(r, o, s) {
    var a = {}, l;
    e.forEach(s, function(u) {
      for (var f = r.parent(u), d, h; f; ) {
        if (d = r.parent(f), d ? (h = a[d], a[d] = f) : (h = l, l = f), h && h !== f) {
          o.setEdge(h, f);
          return;
        }
        f = d;
      }
    });
  }
  return bv;
}
var Sv, Fk;
function d8() {
  if (Fk) return Sv;
  Fk = 1;
  var e = Be(), t = o8(), r = i8(), o = u8(), s = c8(), a = f8(), l = vn().Graph, u = Pt();
  Sv = f;
  function f(m) {
    var w = u.maxRank(m), E = d(m, e.range(1, w + 1), "inEdges"), y = d(m, e.range(w - 1, -1, -1), "outEdges"), x = t(m);
    p(m, x);
    for (var S = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = u.buildLayerMatrix(m);
      var R = r(m, x);
      R < S && (k = 0, C = e.cloneDeep(x), S = R);
    }
    p(m, C);
  }
  function d(m, w, E) {
    return e.map(w, function(y) {
      return s(m, y, E);
    });
  }
  function h(m, w) {
    var E = new l();
    e.forEach(m, function(y) {
      var x = y.graph().root, S = o(y, x, E, w);
      e.forEach(S.vs, function(C, _) {
        y.node(C).order = _;
      }), a(y, E, S.vs);
    });
  }
  function p(m, w) {
    e.forEach(w, function(E) {
      e.forEach(E, function(y, x) {
        m.node(y).order = x;
      });
    });
  }
  return Sv;
}
var Ev, $k;
function h8() {
  if ($k) return Ev;
  $k = 1;
  var e = Be(), t = vn().Graph, r = Pt();
  Ev = {
    positionX: E,
    findType1Conflicts: o,
    findType2Conflicts: s,
    addConflict: l,
    hasConflict: u,
    verticalAlignment: f,
    horizontalCompaction: d,
    alignCoordinates: m,
    findSmallestWidthAlignment: p,
    balance: w
  };
  function o(S, C) {
    var _ = {};
    function k(R, A) {
      var T = 0, O = 0, q = R.length, U = e.last(A);
      return e.forEach(A, function(j, V) {
        var X = a(S, j), L = X ? S.node(X).order : q;
        (X || j === U) && (e.forEach(A.slice(O, V + 1), function(H) {
          e.forEach(S.predecessors(H), function(B) {
            var Y = S.node(B), M = Y.order;
            (M < T || L < M) && !(Y.dummy && S.node(H).dummy) && l(_, B, H);
          });
        }), O = V + 1, T = L);
      }), A;
    }
    return e.reduce(C, k), _;
  }
  function s(S, C) {
    var _ = {};
    function k(A, T, O, q, U) {
      var j;
      e.forEach(e.range(T, O), function(V) {
        j = A[V], S.node(j).dummy && e.forEach(S.predecessors(j), function(X) {
          var L = S.node(X);
          L.dummy && (L.order < q || L.order > U) && l(_, X, j);
        });
      });
    }
    function R(A, T) {
      var O = -1, q, U = 0;
      return e.forEach(T, function(j, V) {
        if (S.node(j).dummy === "border") {
          var X = S.predecessors(j);
          X.length && (q = S.node(X[0]).order, k(T, U, V, O, q), U = V, O = q);
        }
        k(T, U, T.length, q, A.length);
      }), T;
    }
    return e.reduce(C, R), _;
  }
  function a(S, C) {
    if (S.node(C).dummy)
      return e.find(S.predecessors(C), function(_) {
        return S.node(_).dummy;
      });
  }
  function l(S, C, _) {
    if (C > _) {
      var k = C;
      C = _, _ = k;
    }
    var R = S[C];
    R || (S[C] = R = {}), R[_] = !0;
  }
  function u(S, C, _) {
    if (C > _) {
      var k = C;
      C = _, _ = k;
    }
    return e.has(S[C], _);
  }
  function f(S, C, _, k) {
    var R = {}, A = {}, T = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(q, U) {
        R[q] = q, A[q] = q, T[q] = U;
      });
    }), e.forEach(C, function(O) {
      var q = -1;
      e.forEach(O, function(U) {
        var j = k(U);
        if (j.length) {
          j = e.sortBy(j, function(B) {
            return T[B];
          });
          for (var V = (j.length - 1) / 2, X = Math.floor(V), L = Math.ceil(V); X <= L; ++X) {
            var H = j[X];
            A[U] === U && q < T[H] && !u(_, U, H) && (A[H] = U, A[U] = R[U] = R[H], q = T[H]);
          }
        }
      });
    }), { root: R, align: A };
  }
  function d(S, C, _, k, R) {
    var A = {}, T = h(S, C, _, R), O = R ? "borderLeft" : "borderRight";
    function q(V, X) {
      for (var L = T.nodes(), H = L.pop(), B = {}; H; )
        B[H] ? V(H) : (B[H] = !0, L.push(H), L = L.concat(X(H))), H = L.pop();
    }
    function U(V) {
      A[V] = T.inEdges(V).reduce(function(X, L) {
        return Math.max(X, A[L.v] + T.edge(L));
      }, 0);
    }
    function j(V) {
      var X = T.outEdges(V).reduce(function(H, B) {
        return Math.min(H, A[B.w] - T.edge(B));
      }, Number.POSITIVE_INFINITY), L = S.node(V);
      X !== Number.POSITIVE_INFINITY && L.borderType !== O && (A[V] = Math.max(A[V], X));
    }
    return q(U, T.predecessors.bind(T)), q(j, T.successors.bind(T)), e.forEach(k, function(V) {
      A[V] = A[_[V]];
    }), A;
  }
  function h(S, C, _, k) {
    var R = new t(), A = S.graph(), T = y(A.nodesep, A.edgesep, k);
    return e.forEach(C, function(O) {
      var q;
      e.forEach(O, function(U) {
        var j = _[U];
        if (R.setNode(j), q) {
          var V = _[q], X = R.edge(V, j);
          R.setEdge(V, j, Math.max(T(S, U, q), X || 0));
        }
        q = U;
      });
    }), R;
  }
  function p(S, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, R = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(A, T) {
        var O = x(S, T) / 2;
        k = Math.max(A + O, k), R = Math.min(A - O, R);
      }), k - R;
    });
  }
  function m(S, C) {
    var _ = e.values(C), k = e.min(_), R = e.max(_);
    e.forEach(["u", "d"], function(A) {
      e.forEach(["l", "r"], function(T) {
        var O = A + T, q = S[O], U;
        if (q !== C) {
          var j = e.values(q);
          U = T === "l" ? k - e.min(j) : R - e.max(j), U && (S[O] = e.mapValues(q, function(V) {
            return V + U;
          }));
        }
      });
    });
  }
  function w(S, C) {
    return e.mapValues(S.ul, function(_, k) {
      if (C)
        return S[C.toLowerCase()][k];
      var R = e.sortBy(e.map(S, k));
      return (R[1] + R[2]) / 2;
    });
  }
  function E(S) {
    var C = r.buildLayerMatrix(S), _ = e.merge(
      o(S, C),
      s(S, C)
    ), k = {}, R;
    e.forEach(["u", "d"], function(T) {
      R = T === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (R = e.map(R, function(V) {
          return e.values(V).reverse();
        }));
        var q = (T === "u" ? S.predecessors : S.successors).bind(S), U = f(S, R, _, q), j = d(
          S,
          R,
          U.root,
          U.align,
          O === "r"
        );
        O === "r" && (j = e.mapValues(j, function(V) {
          return -V;
        })), k[T + O] = j;
      });
    });
    var A = p(S, k);
    return m(k, A), w(k, S.graph().align);
  }
  function y(S, C, _) {
    return function(k, R, A) {
      var T = k.node(R), O = k.node(A), q = 0, U;
      if (q += T.width / 2, e.has(T, "labelpos"))
        switch (T.labelpos.toLowerCase()) {
          case "l":
            U = -T.width / 2;
            break;
          case "r":
            U = T.width / 2;
            break;
        }
      if (U && (q += _ ? U : -U), U = 0, q += (T.dummy ? C : S) / 2, q += (O.dummy ? C : S) / 2, q += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            U = O.width / 2;
            break;
          case "r":
            U = -O.width / 2;
            break;
        }
      return U && (q += _ ? U : -U), U = 0, q;
    };
  }
  function x(S, C) {
    return S.node(C).width;
  }
  return Ev;
}
var Cv, Bk;
function p8() {
  if (Bk) return Cv;
  Bk = 1;
  var e = Be(), t = Pt(), r = h8().positionX;
  Cv = o;
  function o(a) {
    a = t.asNonCompoundGraph(a), s(a), e.forEach(r(a), function(l, u) {
      a.node(u).x = l;
    });
  }
  function s(a) {
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
  return Cv;
}
var kv, Vk;
function g8() {
  if (Vk) return kv;
  Vk = 1;
  var e = Be(), t = XH(), r = QH(), o = JH(), s = Pt().normalizeRanks, a = e8(), l = Pt().removeEmptyRanks, u = t8(), f = n8(), d = r8(), h = d8(), p = p8(), m = Pt(), w = vn().Graph;
  kv = E;
  function E($, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var K = ee("  buildLayoutGraph", function() {
        return q($);
      });
      ee("  runLayout", function() {
        y(K, ee);
      }), ee("  updateInputGraph", function() {
        x($, K);
      });
    });
  }
  function y($, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      U($);
    }), Z("    removeSelfEdges", function() {
      z($);
    }), Z("    acyclic", function() {
      t.run($);
    }), Z("    nestingGraph.run", function() {
      u.run($);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph($));
    }), Z("    injectEdgeLabelProxies", function() {
      j($);
    }), Z("    removeEmptyRanks", function() {
      l($);
    }), Z("    nestingGraph.cleanup", function() {
      u.cleanup($);
    }), Z("    normalizeRanks", function() {
      s($);
    }), Z("    assignRankMinMax", function() {
      V($);
    }), Z("    removeEdgeLabelProxies", function() {
      X($);
    }), Z("    normalize.run", function() {
      r.run($);
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
      D($);
    }), Z("    removeBorderNodes", function() {
      M($);
    }), Z("    normalize.undo", function() {
      r.undo($);
    }), Z("    fixupEdgeLabelCoords", function() {
      B($);
    }), Z("    undoCoordinateSystem", function() {
      d.undo($);
    }), Z("    translateGraph", function() {
      L($);
    }), Z("    assignNodeIntersects", function() {
      H($);
    }), Z("    reversePoints", function() {
      Y($);
    }), Z("    acyclic.undo", function() {
      t.undo($);
    });
  }
  function x($, Z) {
    e.forEach($.nodes(), function(ee) {
      var K = $.node(ee), te = Z.node(ee);
      K && (K.x = te.x, K.y = te.y, Z.children(ee).length && (K.width = te.width, K.height = te.height));
    }), e.forEach($.edges(), function(ee) {
      var K = $.edge(ee), te = Z.edge(ee);
      K.points = te.points, e.has(te, "x") && (K.x = te.x, K.y = te.y);
    }), $.graph().width = Z.graph().width, $.graph().height = Z.graph().height;
  }
  var S = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], k = ["width", "height"], R = { width: 0, height: 0 }, A = ["minlen", "weight", "width", "height", "labeloffset"], T = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function q($) {
    var Z = new w({ multigraph: !0, compound: !0 }), ee = ie($.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      W(ee, S),
      e.pick(ee, _)
    )), e.forEach($.nodes(), function(K) {
      var te = ie($.node(K));
      Z.setNode(K, e.defaults(W(te, k), R)), Z.setParent(K, $.parent(K));
    }), e.forEach($.edges(), function(K) {
      var te = ie($.edge(K));
      Z.setEdge(K, e.merge(
        {},
        T,
        W(te, A),
        e.pick(te, O)
      ));
    }), Z;
  }
  function U($) {
    var Z = $.graph();
    Z.ranksep /= 2, e.forEach($.edges(), function(ee) {
      var K = $.edge(ee);
      K.minlen *= 2, K.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? K.width += K.labeloffset : K.height += K.labeloffset);
    });
  }
  function j($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z);
      if (ee.width && ee.height) {
        var K = $.node(Z.v), te = $.node(Z.w), se = { rank: (te.rank - K.rank) / 2 + K.rank, e: Z };
        m.addDummyNode($, "edge-proxy", se, "_ep");
      }
    });
  }
  function V($) {
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
  function H($) {
    e.forEach($.edges(), function(Z) {
      var ee = $.edge(Z), K = $.node(Z.v), te = $.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = K), ee.points.unshift(m.intersectRect(K, se)), ee.points.push(m.intersectRect(te, ae));
    });
  }
  function B($) {
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
  function D($) {
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
  function W($, Z) {
    return e.mapValues(e.pick($, Z), Number);
  }
  function ie($) {
    var Z = {};
    return e.forEach($, function(ee, K) {
      Z[K.toLowerCase()] = ee;
    }), Z;
  }
  return kv;
}
var Nv, Hk;
function m8() {
  if (Hk) return Nv;
  Hk = 1;
  var e = Be(), t = Pt(), r = vn().Graph;
  Nv = {
    debugOrdering: o
  };
  function o(s) {
    var a = t.buildLayerMatrix(s), l = new r({ compound: !0, multigraph: !0 }).setGraph({});
    return e.forEach(s.nodes(), function(u) {
      l.setNode(u, { label: u }), l.setParent(u, "layer" + s.node(u).rank);
    }), e.forEach(s.edges(), function(u) {
      l.setEdge(u.v, u.w, {}, u.name);
    }), e.forEach(a, function(u, f) {
      var d = "layer" + f;
      l.setNode(d, { rank: "same" }), e.reduce(u, function(h, p) {
        return l.setEdge(h, p, { style: "invis" }), p;
      });
    }), l;
  }
  return Nv;
}
var Rv, Wk;
function v8() {
  return Wk || (Wk = 1, Rv = "0.8.5"), Rv;
}
var Pv, Uk;
function y8() {
  return Uk || (Uk = 1, Pv = {
    graphlib: vn(),
    layout: g8(),
    debug: m8(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: v8()
  }), Pv;
}
y8();
console.warn(
  "JsonSchemaNodeWidget: This widget is deprecated and maintained for backward compatibility only. Please migrate to using grid-based node definitions with pynodewidget.grid_layouts helpers. See documentation for migration guide."
);
function w8() {
  const [e] = Bf("id"), [t] = Bf("data"), [r] = Bf("selected"), o = e ?? "json-schema-node", s = t ?? {}, a = r ?? !1, l = N.useMemo(() => {
    try {
      return Dy.buildComponent(s);
    } catch (f) {
      return console.error("Failed to build node component:", f), () => /* @__PURE__ */ I.jsxs("div", { style: { padding: "10px", border: "1px solid red", borderRadius: "4px" }, children: [
        /* @__PURE__ */ I.jsx("strong", { children: "Error building node:" }),
        /* @__PURE__ */ I.jsx("pre", { children: String(f) })
      ] });
    }
  }, [s]), [, u] = N.useState({});
  return /* @__PURE__ */ I.jsx(AR, { children: /* @__PURE__ */ I.jsx(PA.Provider, { value: u, children: /* @__PURE__ */ I.jsx("div", { style: { padding: "10px" }, children: /* @__PURE__ */ I.jsx(
    l,
    {
      id: o,
      data: s,
      selected: a,
      type: "json-schema-node",
      dragging: !1,
      zIndex: 0,
      selectable: !0,
      deletable: !0,
      draggable: !0,
      isConnectable: !0,
      positionAbsoluteX: 0,
      positionAbsoluteY: 0
    }
  ) }) }) });
}
const x8 = _2(w8), b8 = { render: x8 };
export {
  b8 as default
};
//# sourceMappingURL=json_schema_node_entry.js.map
