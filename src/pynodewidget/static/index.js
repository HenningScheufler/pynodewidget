var K2 = Object.defineProperty;
var Y2 = (e, t, n) => t in e ? K2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Nl = (e, t, n) => Y2(e, typeof t != "symbol" ? t + "" : t, n);
function X2(e, t) {
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
var Pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dd = { exports: {} }, Es = {}, hd = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pb;
function Q2() {
  if (pb) return Ie;
  pb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.iterator;
  function m(D) {
    return D === null || typeof D != "object" ? null : (D = p && D[p] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, y = {};
  function x(D, W, ie) {
    this.props = D, this.context = W, this.refs = y, this.updater = ie || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(D, W) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, W, "setState");
  }, x.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function b() {
  }
  b.prototype = x.prototype;
  function C(D, W, ie) {
    this.props = D, this.context = W, this.refs = y, this.updater = ie || v;
  }
  var _ = C.prototype = new b();
  _.constructor = C, S(_, x.prototype), _.isPureReactComponent = !0;
  var R = Array.isArray, P = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(D, W, ie) {
    var V, Z = {}, ee = null, Y = null;
    if (W != null) for (V in W.ref !== void 0 && (Y = W.ref), W.key !== void 0 && (ee = "" + W.key), W) P.call(W, V) && !A.hasOwnProperty(V) && (Z[V] = W[V]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (D && D.defaultProps) for (V in te = D.defaultProps, te) Z[V] === void 0 && (Z[V] = te[V]);
    return { $$typeof: e, type: D, key: ee, ref: Y, props: Z, _owner: T.current };
  }
  function j(D, W) {
    return { $$typeof: e, type: D.type, key: W, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function G(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function z(D) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var H = /\/+/g;
  function Q(D, W) {
    return typeof D == "object" && D !== null && D.key != null ? z("" + D.key) : W.toString(36);
  }
  function L(D, W, ie, V, Z) {
    var ee = typeof D;
    (ee === "undefined" || ee === "boolean") && (D = null);
    var Y = !1;
    if (D === null) Y = !0;
    else switch (ee) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case e:
          case t:
            Y = !0;
        }
    }
    if (Y) return Y = D, Z = Z(Y), D = V === "" ? "." + Q(Y, 0) : V, R(Z) ? (ie = "", D != null && (ie = D.replace(H, "$&/") + "/"), L(Z, W, ie, "", function(ae) {
      return ae;
    })) : Z != null && (G(Z) && (Z = j(Z, ie + (!Z.key || Y && Y.key === Z.key ? "" : ("" + Z.key).replace(H, "$&/") + "/") + D)), W.push(Z)), 1;
    if (Y = 0, V = V === "" ? "." : V + ":", R(D)) for (var te = 0; te < D.length; te++) {
      ee = D[te];
      var se = V + Q(ee, te);
      Y += L(ee, W, ie, se, Z);
    }
    else if (se = m(D), typeof se == "function") for (D = se.call(D), te = 0; !(ee = D.next()).done; ) ee = ee.value, se = V + Q(ee, te++), Y += L(ee, W, ie, se, Z);
    else if (ee === "object") throw W = String(D), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function B(D, W, ie) {
    if (D == null) return D;
    var V = [], Z = 0;
    return L(D, V, "", "", function(ee) {
      return W.call(ie, ee, Z++);
    }), V;
  }
  function q(D) {
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
  var U = { current: null }, M = { transition: null }, F = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: B, forEach: function(D, W, ie) {
    B(D, function() {
      W.apply(this, arguments);
    }, ie);
  }, count: function(D) {
    var W = 0;
    return B(D, function() {
      W++;
    }), W;
  }, toArray: function(D) {
    return B(D, function(W) {
      return W;
    }) || [];
  }, only: function(D) {
    if (!G(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ie.Component = x, Ie.Fragment = n, Ie.Profiler = i, Ie.PureComponent = C, Ie.StrictMode = o, Ie.Suspense = f, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, Ie.act = X, Ie.cloneElement = function(D, W, ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var V = S({}, D.props), Z = D.key, ee = D.ref, Y = D._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, Y = T.current), W.key !== void 0 && (Z = "" + W.key), D.type && D.type.defaultProps) var te = D.type.defaultProps;
      for (se in W) P.call(W, se) && !A.hasOwnProperty(se) && (V[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) V.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      V.children = te;
    }
    return { $$typeof: e, type: D.type, key: Z, ref: ee, props: V, _owner: Y };
  }, Ie.createContext = function(D) {
    return D = { $$typeof: l, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: a, _context: D }, D.Consumer = D;
  }, Ie.createElement = O, Ie.createFactory = function(D) {
    var W = O.bind(null, D);
    return W.type = D, W;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(D) {
    return { $$typeof: u, render: D };
  }, Ie.isValidElement = G, Ie.lazy = function(D) {
    return { $$typeof: h, _payload: { _status: -1, _result: D }, _init: q };
  }, Ie.memo = function(D, W) {
    return { $$typeof: d, type: D, compare: W === void 0 ? null : W };
  }, Ie.startTransition = function(D) {
    var W = M.transition;
    M.transition = {};
    try {
      D();
    } finally {
      M.transition = W;
    }
  }, Ie.unstable_act = X, Ie.useCallback = function(D, W) {
    return U.current.useCallback(D, W);
  }, Ie.useContext = function(D) {
    return U.current.useContext(D);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(D) {
    return U.current.useDeferredValue(D);
  }, Ie.useEffect = function(D, W) {
    return U.current.useEffect(D, W);
  }, Ie.useId = function() {
    return U.current.useId();
  }, Ie.useImperativeHandle = function(D, W, ie) {
    return U.current.useImperativeHandle(D, W, ie);
  }, Ie.useInsertionEffect = function(D, W) {
    return U.current.useInsertionEffect(D, W);
  }, Ie.useLayoutEffect = function(D, W) {
    return U.current.useLayoutEffect(D, W);
  }, Ie.useMemo = function(D, W) {
    return U.current.useMemo(D, W);
  }, Ie.useReducer = function(D, W, ie) {
    return U.current.useReducer(D, W, ie);
  }, Ie.useRef = function(D) {
    return U.current.useRef(D);
  }, Ie.useState = function(D) {
    return U.current.useState(D);
  }, Ie.useSyncExternalStore = function(D, W, ie) {
    return U.current.useSyncExternalStore(D, W, ie);
  }, Ie.useTransition = function() {
    return U.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var gb;
function Zs() {
  return gb || (gb = 1, hd.exports = Q2()), hd.exports;
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
var mb;
function Z2() {
  if (mb) return Es;
  mb = 1;
  var e = Zs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return Es.Fragment = n, Es.jsx = l, Es.jsxs = l, Es;
}
var vb;
function J2() {
  return vb || (vb = 1, dd.exports = Z2()), dd.exports;
}
var N = J2(), k = Zs();
const ft = /* @__PURE__ */ ku(k), Fy = /* @__PURE__ */ X2({
  __proto__: null,
  default: ft
}, [k]);
var Tl = {}, pd = { exports: {} }, Nt = {}, gd = { exports: {} }, md = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yb;
function eO() {
  return yb || (yb = 1, (function(e) {
    function t(M, F) {
      var X = M.length;
      M.push(F);
      e: for (; 0 < X; ) {
        var D = X - 1 >>> 1, W = M[D];
        if (0 < i(W, F)) M[D] = F, M[X] = W, X = D;
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var F = M[0], X = M.pop();
      if (X !== F) {
        M[0] = X;
        e: for (var D = 0, W = M.length, ie = W >>> 1; D < ie; ) {
          var V = 2 * (D + 1) - 1, Z = M[V], ee = V + 1, Y = M[ee];
          if (0 > i(Z, X)) ee < W && 0 > i(Y, Z) ? (M[D] = Y, M[ee] = X, D = ee) : (M[D] = Z, M[V] = X, D = V);
          else if (ee < W && 0 > i(Y, X)) M[D] = Y, M[ee] = X, D = ee;
          else break e;
        }
      }
      return F;
    }
    function i(M, F) {
      var X = M.sortIndex - F.sortIndex;
      return X !== 0 ? X : M.id - F.id;
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
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, S = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var F = n(d); F !== null; ) {
        if (F.callback === null) o(d);
        else if (F.startTime <= M) o(d), F.sortIndex = F.expirationTime, t(f, F);
        else break;
        F = n(d);
      }
    }
    function R(M) {
      if (y = !1, _(M), !S) if (n(f) !== null) S = !0, q(P);
      else {
        var F = n(d);
        F !== null && U(R, F.startTime - M);
      }
    }
    function P(M, F) {
      S = !1, y && (y = !1, b(O), O = -1), v = !0;
      var X = m;
      try {
        for (_(F), p = n(f); p !== null && (!(p.expirationTime > F) || M && !z()); ) {
          var D = p.callback;
          if (typeof D == "function") {
            p.callback = null, m = p.priorityLevel;
            var W = D(p.expirationTime <= F);
            F = e.unstable_now(), typeof W == "function" ? p.callback = W : p === n(f) && o(f), _(F);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var V = n(d);
          V !== null && U(R, V.startTime - F), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = X, v = !1;
      }
    }
    var T = !1, A = null, O = -1, j = 5, G = -1;
    function z() {
      return !(e.unstable_now() - G < j);
    }
    function H() {
      if (A !== null) {
        var M = e.unstable_now();
        G = M;
        var F = !0;
        try {
          F = A(!0, M);
        } finally {
          F ? Q() : (T = !1, A = null);
        }
      } else T = !1;
    }
    var Q;
    if (typeof C == "function") Q = function() {
      C(H);
    };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), B = L.port2;
      L.port1.onmessage = H, Q = function() {
        B.postMessage(null);
      };
    } else Q = function() {
      x(H, 0);
    };
    function q(M) {
      A = M, T || (T = !0, Q());
    }
    function U(M, F) {
      O = x(function() {
        M(e.unstable_now());
      }, F);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      S || v || (S = !0, q(P));
    }, e.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < M ? Math.floor(1e3 / M) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(f);
    }, e.unstable_next = function(M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = m;
      }
      var X = m;
      m = F;
      try {
        return M();
      } finally {
        m = X;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(M, F) {
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
      var X = m;
      m = M;
      try {
        return F();
      } finally {
        m = X;
      }
    }, e.unstable_scheduleCallback = function(M, F, X) {
      var D = e.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? D + X : D) : X = D, M) {
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
      return W = X + W, M = { id: h++, callback: F, priorityLevel: M, startTime: X, expirationTime: W, sortIndex: -1 }, X > D ? (M.sortIndex = X, t(d, M), n(f) === null && M === n(d) && (y ? (b(O), O = -1) : y = !0, U(R, X - D))) : (M.sortIndex = W, t(f, M), S || v || (S = !0, q(P))), M;
    }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(M) {
      var F = m;
      return function() {
        var X = m;
        m = F;
        try {
          return M.apply(this, arguments);
        } finally {
          m = X;
        }
      };
    };
  })(md)), md;
}
var wb;
function tO() {
  return wb || (wb = 1, gd.exports = eO()), gd.exports;
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
var xb;
function nO() {
  if (xb) return Nt;
  xb = 1;
  var e = Zs(), t = tO();
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
  function S(r, s, c, g) {
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
  function y(r, s, c, g, w, E, I) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = w, this.mustUseProperty = c, this.propertyName = r, this.type = s, this.sanitizeURL = E, this.removeEmptyString = I;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    x[r] = new y(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var s = r[0];
    x[s] = new y(s, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    x[r] = new y(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    x[r] = new y(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    x[r] = new y(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    x[r] = new y(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    x[r] = new y(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    x[r] = new y(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    x[r] = new y(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var s = r.replace(
      b,
      C
    );
    x[s] = new y(s, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var s = r.replace(b, C);
    x[s] = new y(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var s = r.replace(b, C);
    x[s] = new y(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  function _(r, s, c, g) {
    var w = x.hasOwnProperty(s) ? x[s] : null;
    (w !== null ? w.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (S(s, c, w, g) && (c = null), g || w === null ? m(s) && (c === null ? r.removeAttribute(s) : r.setAttribute(s, "" + c)) : w.mustUseProperty ? r[w.propertyName] = c === null ? w.type === 3 ? !1 : "" : c : (s = w.attributeName, g = w.attributeNamespace, c === null ? r.removeAttribute(s) : (w = w.type, c = w === 3 || w === 4 && c === !0 ? "" : "" + c, g ? r.setAttributeNS(g, s, c) : r.setAttribute(s, c))));
  }
  var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), z = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function F(r) {
    return r === null || typeof r != "object" ? null : (r = M && r[M] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var X = Object.assign, D;
  function W(r) {
    if (D === void 0) try {
      throw Error();
    } catch (c) {
      var s = c.stack.trim().match(/\n( *(at )?)/);
      D = s && s[1] || "";
    }
    return `
` + D + r;
  }
  var ie = !1;
  function V(r, s) {
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
        for (var w = oe.stack.split(`
`), E = g.stack.split(`
`), I = w.length - 1, $ = E.length - 1; 1 <= I && 0 <= $ && w[I] !== E[$]; ) $--;
        for (; 1 <= I && 0 <= $; I--, $--) if (w[I] !== E[$]) {
          if (I !== 1 || $ !== 1)
            do
              if (I--, $--, 0 > $ || w[I] !== E[$]) {
                var K = `
` + w[I].replace(" at new ", " at ");
                return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
              }
            while (1 <= I && 0 <= $);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = c;
    }
    return (r = r ? r.displayName || r.name : "") ? W(r) : "";
  }
  function Z(r) {
    switch (r.tag) {
      case 5:
        return W(r.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = V(r.type, !1), r;
      case 11:
        return r = V(r.type.render, !1), r;
      case 1:
        return r = V(r.type, !0), r;
      default:
        return "";
    }
  }
  function ee(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case A:
        return "Fragment";
      case T:
        return "Portal";
      case j:
        return "Profiler";
      case O:
        return "StrictMode";
      case Q:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case z:
        return (r.displayName || "Context") + ".Consumer";
      case G:
        return (r._context.displayName || "Context") + ".Provider";
      case H:
        var s = r.render;
        return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case B:
        return s = r.displayName || null, s !== null ? s : ee(r.type) || "Memo";
      case q:
        s = r._payload, r = r._init;
        try {
          return ee(r(s));
        } catch {
        }
    }
    return null;
  }
  function Y(r) {
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
      var w = c.get, E = c.set;
      return Object.defineProperty(r, s, { configurable: !0, get: function() {
        return w.call(this);
      }, set: function(I) {
        g = "" + I, E.call(this, I);
      } }), Object.defineProperty(r, s, { enumerable: c.enumerable }), { getValue: function() {
        return g;
      }, setValue: function(I) {
        g = "" + I;
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
  function _e(r, s) {
    var c = s.checked;
    return X({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? r._wrapperState.initialChecked });
  }
  function me(r, s) {
    var c = s.defaultValue == null ? "" : s.defaultValue, g = s.checked != null ? s.checked : s.defaultChecked;
    c = te(s.value != null ? s.value : c), r._wrapperState = { initialChecked: g, initialValue: c, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
  }
  function Ne(r, s) {
    s = s.checked, s != null && _(r, "checked", s, !1);
  }
  function Ee(r, s) {
    Ne(r, s);
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
  var Vt = Array.isArray;
  function pt(r, s, c, g) {
    if (r = r.options, s) {
      s = {};
      for (var w = 0; w < c.length; w++) s["$" + c[w]] = !0;
      for (c = 0; c < r.length; c++) w = s.hasOwnProperty("$" + r[c].value), r[c].selected !== w && (r[c].selected = w), w && g && (r[c].defaultSelected = !0);
    } else {
      for (c = "" + te(c), s = null, w = 0; w < r.length; w++) {
        if (r[w].value === c) {
          r[w].selected = !0, g && (r[w].defaultSelected = !0);
          return;
        }
        s !== null || r[w].disabled || (s = r[w]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function at(r, s) {
    if (s.dangerouslySetInnerHTML != null) throw Error(n(91));
    return X({}, s, { value: void 0, defaultValue: void 0, children: "" + r._wrapperState.initialValue });
  }
  function Ge(r, s) {
    var c = s.value;
    if (c == null) {
      if (c = s.children, s = s.defaultValue, c != null) {
        if (s != null) throw Error(n(92));
        if (Vt(c)) {
          if (1 < c.length) throw Error(n(93));
          c = c[0];
        }
        s = c;
      }
      s == null && (s = ""), c = s;
    }
    r._wrapperState = { initialValue: te(c) };
  }
  function rn(r, s) {
    var c = te(s.value), g = te(s.defaultValue);
    c != null && (c = "" + c, c !== r.value && (r.value = c), s.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c)), g != null && (r.defaultValue = "" + g);
  }
  function Ht(r) {
    var s = r.textContent;
    s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s);
  }
  function on(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Wt(r, s) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? on(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var _t, zr = (function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, c, g, w) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(s, c, g, w);
      });
    } : r;
  })(function(r, s) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = s;
    else {
      for (_t = _t || document.createElement("div"), _t.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = _t.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; s.firstChild; ) r.appendChild(s.firstChild);
    }
  });
  function Ut(r, s) {
    if (s) {
      var c = r.firstChild;
      if (c && c === r.lastChild && c.nodeType === 3) {
        c.nodeValue = s;
        return;
      }
    }
    r.textContent = s;
  }
  var zn = {
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
  }, ko = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zn).forEach(function(r) {
    ko.forEach(function(s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1), zn[s] = zn[r];
    });
  });
  function At(r, s, c) {
    return s == null || typeof s == "boolean" || s === "" ? "" : c || typeof s != "number" || s === 0 || zn.hasOwnProperty(r) && zn[r] ? ("" + s).trim() : s + "px";
  }
  function Gt(r, s) {
    r = r.style;
    for (var c in s) if (s.hasOwnProperty(c)) {
      var g = c.indexOf("--") === 0, w = At(c, s[c], g);
      c === "float" && (c = "cssFloat"), g ? r.setProperty(c, w) : r[c] = w;
    }
  }
  var wc = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Li(r, s) {
    if (s) {
      if (wc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function Di(r, s) {
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
  var ji = null;
  function qi(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Fi = null, or = null, ir = null;
  function pa(r) {
    if (r = us(r)) {
      if (typeof Fi != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = Va(s), Fi(r.stateNode, r.type, s));
    }
  }
  function ga(r) {
    or ? ir ? ir.push(r) : ir = [r] : or = r;
  }
  function ma() {
    if (or) {
      var r = or, s = ir;
      if (ir = or = null, pa(r), s) for (r = 0; r < s.length; r++) pa(s[r]);
    }
  }
  function va(r, s) {
    return r(s);
  }
  function ya() {
  }
  var zi = !1;
  function wa(r, s, c) {
    if (zi) return r(s, c);
    zi = !0;
    try {
      return va(r, s, c);
    } finally {
      zi = !1, (or !== null || ir !== null) && (ya(), ma());
    }
  }
  function $r(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = Va(c);
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
  var $i = !1;
  if (u) try {
    var Br = {};
    Object.defineProperty(Br, "passive", { get: function() {
      $i = !0;
    } }), window.addEventListener("test", Br, Br), window.removeEventListener("test", Br, Br);
  } catch {
    $i = !1;
  }
  function xc(r, s, c, g, w, E, I, $, K) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Vr = !1, Ro = null, No = !1, Bi = null, bc = { onError: function(r) {
    Vr = !0, Ro = r;
  } };
  function _c(r, s, c, g, w, E, I, $, K) {
    Vr = !1, Ro = null, xc.apply(bc, arguments);
  }
  function Sc(r, s, c, g, w, E, I, $, K) {
    if (_c.apply(this, arguments), Vr) {
      if (Vr) {
        var oe = Ro;
        Vr = !1, Ro = null;
      } else throw Error(n(198));
      No || (No = !0, Bi = oe);
    }
  }
  function Sn(r) {
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
  function Vi(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (s === null && (r = r.alternate, r !== null && (s = r.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function Hi(r) {
    if (Sn(r) !== r) throw Error(n(188));
  }
  function Ec(r) {
    var s = r.alternate;
    if (!s) {
      if (s = Sn(r), s === null) throw Error(n(188));
      return s !== r ? null : r;
    }
    for (var c = r, g = s; ; ) {
      var w = c.return;
      if (w === null) break;
      var E = w.alternate;
      if (E === null) {
        if (g = w.return, g !== null) {
          c = g;
          continue;
        }
        break;
      }
      if (w.child === E.child) {
        for (E = w.child; E; ) {
          if (E === c) return Hi(w), r;
          if (E === g) return Hi(w), s;
          E = E.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== g.return) c = w, g = E;
      else {
        for (var I = !1, $ = w.child; $; ) {
          if ($ === c) {
            I = !0, c = w, g = E;
            break;
          }
          if ($ === g) {
            I = !0, g = w, c = E;
            break;
          }
          $ = $.sibling;
        }
        if (!I) {
          for ($ = E.child; $; ) {
            if ($ === c) {
              I = !0, c = E, g = w;
              break;
            }
            if ($ === g) {
              I = !0, g = E, c = w;
              break;
            }
            $ = $.sibling;
          }
          if (!I) throw Error(n(189));
        }
      }
      if (c.alternate !== g) throw Error(n(190));
    }
    if (c.tag !== 3) throw Error(n(188));
    return c.stateNode.current === c ? r : s;
  }
  function xa(r) {
    return r = Ec(r), r !== null ? ba(r) : null;
  }
  function ba(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = ba(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var _a = t.unstable_scheduleCallback, Sa = t.unstable_cancelCallback, Cc = t.unstable_shouldYield, Ea = t.unstable_requestPaint, Ke = t.unstable_now, kc = t.unstable_getCurrentPriorityLevel, Wi = t.unstable_ImmediatePriority, Ca = t.unstable_UserBlockingPriority, Po = t.unstable_NormalPriority, Rc = t.unstable_LowPriority, ka = t.unstable_IdlePriority, Hr = null, Kt = null;
  function Nc(r) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(Hr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : Ic, Pc = Math.log, Tc = Math.LN2;
  function Ic(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Pc(r) / Tc | 0) | 0;
  }
  var To = 64, Io = 4194304;
  function En(r) {
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
  function Ao(r, s) {
    var c = r.pendingLanes;
    if (c === 0) return 0;
    var g = 0, w = r.suspendedLanes, E = r.pingedLanes, I = c & 268435455;
    if (I !== 0) {
      var $ = I & ~w;
      $ !== 0 ? g = En($) : (E &= I, E !== 0 && (g = En(E)));
    } else I = c & ~w, I !== 0 ? g = En(I) : E !== 0 && (g = En(E));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & w) === 0 && (w = g & -g, E = s & -s, w >= E || w === 16 && (E & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - Mt(s), w = 1 << c, g |= r[c], s &= ~w;
    return g;
  }
  function Ac(r, s) {
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
  function Mc(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, w = r.expirationTimes, E = r.pendingLanes; 0 < E; ) {
      var I = 31 - Mt(E), $ = 1 << I, K = w[I];
      K === -1 ? (($ & c) === 0 || ($ & g) !== 0) && (w[I] = Ac($, s)) : K <= s && (r.expiredLanes |= $), E &= ~$;
    }
  }
  function Wr(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function Ra() {
    var r = To;
    return To <<= 1, (To & 4194240) === 0 && (To = 64), r;
  }
  function Ui(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function sr(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - Mt(s), r[s] = c;
  }
  function gM(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var w = 31 - Mt(c), E = 1 << w;
      s[w] = 0, g[w] = -1, r[w] = -1, c &= ~E;
    }
  }
  function Oc(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - Mt(c), w = 1 << g;
      w & s | r[g] & s && (r[g] |= s), c &= ~w;
    }
  }
  var qe = 0;
  function U0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var G0, Lc, K0, Y0, X0, Dc = !1, Na = [], ar = null, lr = null, ur = null, Gi = /* @__PURE__ */ new Map(), Ki = /* @__PURE__ */ new Map(), cr = [], mM = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Q0(r, s) {
    switch (r) {
      case "focusin":
      case "focusout":
        ar = null;
        break;
      case "dragenter":
      case "dragleave":
        lr = null;
        break;
      case "mouseover":
      case "mouseout":
        ur = null;
        break;
      case "pointerover":
      case "pointerout":
        Gi.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ki.delete(s.pointerId);
    }
  }
  function Yi(r, s, c, g, w, E) {
    return r === null || r.nativeEvent !== E ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: E, targetContainers: [w] }, s !== null && (s = us(s), s !== null && Lc(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, w !== null && s.indexOf(w) === -1 && s.push(w), r);
  }
  function vM(r, s, c, g, w) {
    switch (s) {
      case "focusin":
        return ar = Yi(ar, r, s, c, g, w), !0;
      case "dragenter":
        return lr = Yi(lr, r, s, c, g, w), !0;
      case "mouseover":
        return ur = Yi(ur, r, s, c, g, w), !0;
      case "pointerover":
        var E = w.pointerId;
        return Gi.set(E, Yi(Gi.get(E) || null, r, s, c, g, w)), !0;
      case "gotpointercapture":
        return E = w.pointerId, Ki.set(E, Yi(Ki.get(E) || null, r, s, c, g, w)), !0;
    }
    return !1;
  }
  function Z0(r) {
    var s = Ur(r.target);
    if (s !== null) {
      var c = Sn(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = Vi(c), s !== null) {
            r.blockedOn = s, X0(r.priority, function() {
              K0(c);
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
  function Pa(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var c = qc(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        ji = g, c.target.dispatchEvent(g), ji = null;
      } else return s = us(c), s !== null && Lc(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function J0(r, s, c) {
    Pa(r) && c.delete(s);
  }
  function yM() {
    Dc = !1, ar !== null && Pa(ar) && (ar = null), lr !== null && Pa(lr) && (lr = null), ur !== null && Pa(ur) && (ur = null), Gi.forEach(J0), Ki.forEach(J0);
  }
  function Xi(r, s) {
    r.blockedOn === s && (r.blockedOn = null, Dc || (Dc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, yM)));
  }
  function Qi(r) {
    function s(w) {
      return Xi(w, r);
    }
    if (0 < Na.length) {
      Xi(Na[0], r);
      for (var c = 1; c < Na.length; c++) {
        var g = Na[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (ar !== null && Xi(ar, r), lr !== null && Xi(lr, r), ur !== null && Xi(ur, r), Gi.forEach(s), Ki.forEach(s), c = 0; c < cr.length; c++) g = cr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < cr.length && (c = cr[0], c.blockedOn === null); ) Z0(c), c.blockedOn === null && cr.shift();
  }
  var Mo = R.ReactCurrentBatchConfig, Ta = !0;
  function wM(r, s, c, g) {
    var w = qe, E = Mo.transition;
    Mo.transition = null;
    try {
      qe = 1, jc(r, s, c, g);
    } finally {
      qe = w, Mo.transition = E;
    }
  }
  function xM(r, s, c, g) {
    var w = qe, E = Mo.transition;
    Mo.transition = null;
    try {
      qe = 4, jc(r, s, c, g);
    } finally {
      qe = w, Mo.transition = E;
    }
  }
  function jc(r, s, c, g) {
    if (Ta) {
      var w = qc(r, s, c, g);
      if (w === null) tf(r, s, g, Ia, c), Q0(r, g);
      else if (vM(w, r, s, c, g)) g.stopPropagation();
      else if (Q0(r, g), s & 4 && -1 < mM.indexOf(r)) {
        for (; w !== null; ) {
          var E = us(w);
          if (E !== null && G0(E), E = qc(r, s, c, g), E === null && tf(r, s, g, Ia, c), E === w) break;
          w = E;
        }
        w !== null && g.stopPropagation();
      } else tf(r, s, g, null, c);
    }
  }
  var Ia = null;
  function qc(r, s, c, g) {
    if (Ia = null, r = qi(g), r = Ur(r), r !== null) if (s = Sn(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = Vi(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return Ia = r, null;
  }
  function ew(r) {
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
        switch (kc()) {
          case Wi:
            return 1;
          case Ca:
            return 4;
          case Po:
          case Rc:
            return 16;
          case ka:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fr = null, Fc = null, Aa = null;
  function tw() {
    if (Aa) return Aa;
    var r, s = Fc, c = s.length, g, w = "value" in fr ? fr.value : fr.textContent, E = w.length;
    for (r = 0; r < c && s[r] === w[r]; r++) ;
    var I = c - r;
    for (g = 1; g <= I && s[c - g] === w[E - g]; g++) ;
    return Aa = w.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Ma(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Oa() {
    return !0;
  }
  function nw() {
    return !1;
  }
  function Ot(r) {
    function s(c, g, w, E, I) {
      this._reactName = c, this._targetInst = w, this.type = g, this.nativeEvent = E, this.target = I, this.currentTarget = null;
      for (var $ in r) r.hasOwnProperty($) && (c = r[$], this[$] = c ? c(E) : E[$]);
      return this.isDefaultPrevented = (E.defaultPrevented != null ? E.defaultPrevented : E.returnValue === !1) ? Oa : nw, this.isPropagationStopped = nw, this;
    }
    return X(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Oa);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Oa);
    }, persist: function() {
    }, isPersistent: Oa }), s;
  }
  var Oo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, zc = Ot(Oo), Zi = X({}, Oo, { view: 0, detail: 0 }), bM = Ot(Zi), $c, Bc, Ji, La = X({}, Zi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Ji && (Ji && r.type === "mousemove" ? ($c = r.screenX - Ji.screenX, Bc = r.screenY - Ji.screenY) : Bc = $c = 0, Ji = r), $c);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : Bc;
  } }), rw = Ot(La), _M = X({}, La, { dataTransfer: 0 }), SM = Ot(_M), EM = X({}, Zi, { relatedTarget: 0 }), Vc = Ot(EM), CM = X({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kM = Ot(CM), RM = X({}, Oo, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), NM = Ot(RM), PM = X({}, Oo, { data: 0 }), ow = Ot(PM), TM = {
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
  }, IM = {
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
  }, AM = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function MM(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = AM[r]) ? !!s[r] : !1;
  }
  function Hc() {
    return MM;
  }
  var OM = X({}, Zi, { key: function(r) {
    if (r.key) {
      var s = TM[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Ma(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? IM[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hc, charCode: function(r) {
    return r.type === "keypress" ? Ma(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Ma(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), LM = Ot(OM), DM = X({}, La, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iw = Ot(DM), jM = X({}, Zi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hc }), qM = Ot(jM), FM = X({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zM = Ot(FM), $M = X({}, La, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), BM = Ot($M), VM = [9, 13, 27, 32], Wc = u && "CompositionEvent" in window, es = null;
  u && "documentMode" in document && (es = document.documentMode);
  var HM = u && "TextEvent" in window && !es, sw = u && (!Wc || es && 8 < es && 11 >= es), aw = " ", lw = !1;
  function uw(r, s) {
    switch (r) {
      case "keyup":
        return VM.indexOf(s.keyCode) !== -1;
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
  function cw(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Lo = !1;
  function WM(r, s) {
    switch (r) {
      case "compositionend":
        return cw(s);
      case "keypress":
        return s.which !== 32 ? null : (lw = !0, aw);
      case "textInput":
        return r = s.data, r === aw && lw ? null : r;
      default:
        return null;
    }
  }
  function UM(r, s) {
    if (Lo) return r === "compositionend" || !Wc && uw(r, s) ? (r = tw(), Aa = Fc = fr = null, Lo = !1, r) : null;
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
        return sw && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var GM = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fw(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!GM[r.type] : s === "textarea";
  }
  function dw(r, s, c, g) {
    ga(g), s = za(s, "onChange"), 0 < s.length && (c = new zc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var ts = null, ns = null;
  function KM(r) {
    Tw(r, 0);
  }
  function Da(r) {
    var s = zo(r);
    if (de(s)) return r;
  }
  function YM(r, s) {
    if (r === "change") return s;
  }
  var hw = !1;
  if (u) {
    var Uc;
    if (u) {
      var Gc = "oninput" in document;
      if (!Gc) {
        var pw = document.createElement("div");
        pw.setAttribute("oninput", "return;"), Gc = typeof pw.oninput == "function";
      }
      Uc = Gc;
    } else Uc = !1;
    hw = Uc && (!document.documentMode || 9 < document.documentMode);
  }
  function gw() {
    ts && (ts.detachEvent("onpropertychange", mw), ns = ts = null);
  }
  function mw(r) {
    if (r.propertyName === "value" && Da(ns)) {
      var s = [];
      dw(s, ns, r, qi(r)), wa(KM, s);
    }
  }
  function XM(r, s, c) {
    r === "focusin" ? (gw(), ts = s, ns = c, ts.attachEvent("onpropertychange", mw)) : r === "focusout" && gw();
  }
  function QM(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Da(ns);
  }
  function ZM(r, s) {
    if (r === "click") return Da(s);
  }
  function JM(r, s) {
    if (r === "input" || r === "change") return Da(s);
  }
  function e2(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var sn = typeof Object.is == "function" ? Object.is : e2;
  function rs(r, s) {
    if (sn(r, s)) return !0;
    if (typeof r != "object" || r === null || typeof s != "object" || s === null) return !1;
    var c = Object.keys(r), g = Object.keys(s);
    if (c.length !== g.length) return !1;
    for (g = 0; g < c.length; g++) {
      var w = c[g];
      if (!f.call(s, w) || !sn(r[w], s[w])) return !1;
    }
    return !0;
  }
  function vw(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function yw(r, s) {
    var c = vw(r);
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
      c = vw(c);
    }
  }
  function ww(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? ww(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function xw() {
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
  function Kc(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function t2(r) {
    var s = xw(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && ww(c.ownerDocument.documentElement, c)) {
      if (g !== null && Kc(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var w = c.textContent.length, E = Math.min(g.start, w);
          g = g.end === void 0 ? E : Math.min(g.end, w), !r.extend && E > g && (w = g, g = E, E = w), w = yw(c, E);
          var I = yw(
            c,
            g
          );
          w && I && (r.rangeCount !== 1 || r.anchorNode !== w.node || r.anchorOffset !== w.offset || r.focusNode !== I.node || r.focusOffset !== I.offset) && (s = s.createRange(), s.setStart(w.node, w.offset), r.removeAllRanges(), E > g ? (r.addRange(s), r.extend(I.node, I.offset)) : (s.setEnd(I.node, I.offset), r.addRange(s)));
        }
      }
      for (s = [], r = c; r = r.parentNode; ) r.nodeType === 1 && s.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < s.length; c++) r = s[c], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var n2 = u && "documentMode" in document && 11 >= document.documentMode, Do = null, Yc = null, os = null, Xc = !1;
  function bw(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Xc || Do == null || Do !== pe(g) || (g = Do, "selectionStart" in g && Kc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), os && rs(os, g) || (os = g, g = za(Yc, "onSelect"), 0 < g.length && (s = new zc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = Do)));
  }
  function ja(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var jo = { animationend: ja("Animation", "AnimationEnd"), animationiteration: ja("Animation", "AnimationIteration"), animationstart: ja("Animation", "AnimationStart"), transitionend: ja("Transition", "TransitionEnd") }, Qc = {}, _w = {};
  u && (_w = document.createElement("div").style, "AnimationEvent" in window || (delete jo.animationend.animation, delete jo.animationiteration.animation, delete jo.animationstart.animation), "TransitionEvent" in window || delete jo.transitionend.transition);
  function qa(r) {
    if (Qc[r]) return Qc[r];
    if (!jo[r]) return r;
    var s = jo[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in _w) return Qc[r] = s[c];
    return r;
  }
  var Sw = qa("animationend"), Ew = qa("animationiteration"), Cw = qa("animationstart"), kw = qa("transitionend"), Rw = /* @__PURE__ */ new Map(), Nw = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function dr(r, s) {
    Rw.set(r, s), a(s, [r]);
  }
  for (var Zc = 0; Zc < Nw.length; Zc++) {
    var Jc = Nw[Zc], r2 = Jc.toLowerCase(), o2 = Jc[0].toUpperCase() + Jc.slice(1);
    dr(r2, "on" + o2);
  }
  dr(Sw, "onAnimationEnd"), dr(Ew, "onAnimationIteration"), dr(Cw, "onAnimationStart"), dr("dblclick", "onDoubleClick"), dr("focusin", "onFocus"), dr("focusout", "onBlur"), dr(kw, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), i2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Pw(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, Sc(g, s, void 0, r), r.currentTarget = null;
  }
  function Tw(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], w = g.event;
      g = g.listeners;
      e: {
        var E = void 0;
        if (s) for (var I = g.length - 1; 0 <= I; I--) {
          var $ = g[I], K = $.instance, oe = $.currentTarget;
          if ($ = $.listener, K !== E && w.isPropagationStopped()) break e;
          Pw(w, $, oe), E = K;
        }
        else for (I = 0; I < g.length; I++) {
          if ($ = g[I], K = $.instance, oe = $.currentTarget, $ = $.listener, K !== E && w.isPropagationStopped()) break e;
          Pw(w, $, oe), E = K;
        }
      }
    }
    if (No) throw r = Bi, No = !1, Bi = null, r;
  }
  function ze(r, s) {
    var c = s[lf];
    c === void 0 && (c = s[lf] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (Iw(s, r, 2, !1), c.add(g));
  }
  function ef(r, s, c) {
    var g = 0;
    s && (g |= 4), Iw(c, r, g, s);
  }
  var Fa = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(r) {
    if (!r[Fa]) {
      r[Fa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (i2.has(c) || ef(c, !1, r), ef(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[Fa] || (s[Fa] = !0, ef("selectionchange", !1, s));
    }
  }
  function Iw(r, s, c, g) {
    switch (ew(s)) {
      case 1:
        var w = wM;
        break;
      case 4:
        w = xM;
        break;
      default:
        w = jc;
    }
    c = w.bind(null, s, c, r), w = void 0, !$i || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (w = !0), g ? w !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: w }) : r.addEventListener(s, c, !0) : w !== void 0 ? r.addEventListener(s, c, { passive: w }) : r.addEventListener(s, c, !1);
  }
  function tf(r, s, c, g, w) {
    var E = g;
    if ((s & 1) === 0 && (s & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var I = g.tag;
      if (I === 3 || I === 4) {
        var $ = g.stateNode.containerInfo;
        if ($ === w || $.nodeType === 8 && $.parentNode === w) break;
        if (I === 4) for (I = g.return; I !== null; ) {
          var K = I.tag;
          if ((K === 3 || K === 4) && (K = I.stateNode.containerInfo, K === w || K.nodeType === 8 && K.parentNode === w)) return;
          I = I.return;
        }
        for (; $ !== null; ) {
          if (I = Ur($), I === null) return;
          if (K = I.tag, K === 5 || K === 6) {
            g = E = I;
            continue e;
          }
          $ = $.parentNode;
        }
      }
      g = g.return;
    }
    wa(function() {
      var oe = E, ue = qi(c), fe = [];
      e: {
        var le = Rw.get(r);
        if (le !== void 0) {
          var ge = zc, we = r;
          switch (r) {
            case "keypress":
              if (Ma(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = LM;
              break;
            case "focusin":
              we = "focus", ge = Vc;
              break;
            case "focusout":
              we = "blur", ge = Vc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = Vc;
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
              ge = rw;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = SM;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = qM;
              break;
            case Sw:
            case Ew:
            case Cw:
              ge = kM;
              break;
            case kw:
              ge = zM;
              break;
            case "scroll":
              ge = bM;
              break;
            case "wheel":
              ge = BM;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = NM;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = iw;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = $r(J, ne), he != null && Se.push(as(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== ji && (we = c.relatedTarget || c.fromElement) && (Ur(we) || we[$n])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Ur(we) : null, we !== null && (et = Sn(we), we !== et || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = rw, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = iw, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : zo(ge), re = we == null ? le : zo(we), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Ur(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && we) t: {
              for (Se = ge, ne = we, J = 0, re = Se; re; re = qo(re)) J++;
              for (re = 0, he = ne; he; he = qo(he)) re++;
              for (; 0 < J - re; ) Se = qo(Se), J--;
              for (; 0 < re - J; ) ne = qo(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = qo(Se), ne = qo(ne);
              }
              Se = null;
            }
            else Se = null;
            ge !== null && Aw(fe, le, ge, Se, !1), we !== null && et !== null && Aw(fe, et, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? zo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = YM;
          else if (fw(le)) if (hw) Ce = JM;
          else {
            Ce = QM;
            var ke = XM;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = ZM);
          if (Ce && (Ce = Ce(r, oe))) {
            dw(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? zo(oe) : window, r) {
          case "focusin":
            (fw(ke) || ke.contentEditable === "true") && (Do = ke, Yc = oe, os = null);
            break;
          case "focusout":
            os = Yc = Do = null;
            break;
          case "mousedown":
            Xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xc = !1, bw(fe, c, ue);
            break;
          case "selectionchange":
            if (n2) break;
          case "keydown":
          case "keyup":
            bw(fe, c, ue);
        }
        var Re;
        if (Wc) e: {
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
        else Lo ? uw(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (sw && c.locale !== "ko" && (Lo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Lo && (Re = tw()) : (fr = ue, Fc = "value" in fr ? fr.value : fr.textContent, Lo = !0)), ke = za(oe, Pe), 0 < ke.length && (Pe = new ow(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = cw(c), Re !== null && (Pe.data = Re)))), (Re = HM ? WM(r, c) : UM(r, c)) && (oe = za(oe, "onBeforeInput"), 0 < oe.length && (ue = new ow("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Re));
      }
      Tw(fe, s);
    });
  }
  function as(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function za(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var w = r, E = w.stateNode;
      w.tag === 5 && E !== null && (w = E, E = $r(r, c), E != null && g.unshift(as(r, E, w)), E = $r(r, s), E != null && g.push(as(r, E, w))), r = r.return;
    }
    return g;
  }
  function qo(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Aw(r, s, c, g, w) {
    for (var E = s._reactName, I = []; c !== null && c !== g; ) {
      var $ = c, K = $.alternate, oe = $.stateNode;
      if (K !== null && K === g) break;
      $.tag === 5 && oe !== null && ($ = oe, w ? (K = $r(c, E), K != null && I.unshift(as(c, K, $))) : w || (K = $r(c, E), K != null && I.push(as(c, K, $)))), c = c.return;
    }
    I.length !== 0 && r.push({ event: s, listeners: I });
  }
  var s2 = /\r\n?/g, a2 = /\u0000|\uFFFD/g;
  function Mw(r) {
    return (typeof r == "string" ? r : "" + r).replace(s2, `
`).replace(a2, "");
  }
  function $a(r, s, c) {
    if (s = Mw(s), Mw(r) !== s && c) throw Error(n(425));
  }
  function Ba() {
  }
  var nf = null, rf = null;
  function of(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var sf = typeof setTimeout == "function" ? setTimeout : void 0, l2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ow = typeof Promise == "function" ? Promise : void 0, u2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ow < "u" ? function(r) {
    return Ow.resolve(null).then(r).catch(c2);
  } : sf;
  function c2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function af(r, s) {
    var c = s, g = 0;
    do {
      var w = c.nextSibling;
      if (r.removeChild(c), w && w.nodeType === 8) if (c = w.data, c === "/$") {
        if (g === 0) {
          r.removeChild(w), Qi(s);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = w;
    } while (c);
    Qi(s);
  }
  function hr(r) {
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
  function Lw(r) {
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
  var Fo = Math.random().toString(36).slice(2), Cn = "__reactFiber$" + Fo, ls = "__reactProps$" + Fo, $n = "__reactContainer$" + Fo, lf = "__reactEvents$" + Fo, f2 = "__reactListeners$" + Fo, d2 = "__reactHandles$" + Fo;
  function Ur(r) {
    var s = r[Cn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[$n] || c[Cn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = Lw(r); r !== null; ) {
          if (c = r[Cn]) return c;
          r = Lw(r);
        }
        return s;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function us(r) {
    return r = r[Cn] || r[$n], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function zo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function Va(r) {
    return r[ls] || null;
  }
  var uf = [], $o = -1;
  function pr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > $o || (r.current = uf[$o], uf[$o] = null, $o--);
  }
  function Fe(r, s) {
    $o++, uf[$o] = r.current, r.current = s;
  }
  var gr = {}, gt = pr(gr), St = pr(!1), Gr = gr;
  function Bo(r, s) {
    var c = r.type.contextTypes;
    if (!c) return gr;
    var g = r.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
    var w = {}, E;
    for (E in c) w[E] = s[E];
    return g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = s, r.__reactInternalMemoizedMaskedChildContext = w), w;
  }
  function Et(r) {
    return r = r.childContextTypes, r != null;
  }
  function Ha() {
    $e(St), $e(gt);
  }
  function Dw(r, s, c) {
    if (gt.current !== gr) throw Error(n(168));
    Fe(gt, s), Fe(St, c);
  }
  function jw(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var w in g) if (!(w in s)) throw Error(n(108, Y(r) || "Unknown", w));
    return X({}, c, g);
  }
  function Wa(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || gr, Gr = gt.current, Fe(gt, r), Fe(St, St.current), !0;
  }
  function qw(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = jw(r, s, Gr), g.__reactInternalMemoizedMergedChildContext = r, $e(St), $e(gt), Fe(gt, r)) : $e(St), Fe(St, c);
  }
  var Bn = null, Ua = !1, cf = !1;
  function Fw(r) {
    Bn === null ? Bn = [r] : Bn.push(r);
  }
  function h2(r) {
    Ua = !0, Fw(r);
  }
  function mr() {
    if (!cf && Bn !== null) {
      cf = !0;
      var r = 0, s = qe;
      try {
        var c = Bn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Bn = null, Ua = !1;
      } catch (w) {
        throw Bn !== null && (Bn = Bn.slice(r + 1)), _a(Wi, mr), w;
      } finally {
        qe = s, cf = !1;
      }
    }
    return null;
  }
  var Vo = [], Ho = 0, Ga = null, Ka = 0, Yt = [], Xt = 0, Kr = null, Vn = 1, Hn = "";
  function Yr(r, s) {
    Vo[Ho++] = Ka, Vo[Ho++] = Ga, Ga = r, Ka = s;
  }
  function zw(r, s, c) {
    Yt[Xt++] = Vn, Yt[Xt++] = Hn, Yt[Xt++] = Kr, Kr = r;
    var g = Vn;
    r = Hn;
    var w = 32 - Mt(g) - 1;
    g &= ~(1 << w), c += 1;
    var E = 32 - Mt(s) + w;
    if (30 < E) {
      var I = w - w % 5;
      E = (g & (1 << I) - 1).toString(32), g >>= I, w -= I, Vn = 1 << 32 - Mt(s) + w | c << w | g, Hn = E + r;
    } else Vn = 1 << E | c << w | g, Hn = r;
  }
  function ff(r) {
    r.return !== null && (Yr(r, 1), zw(r, 1, 0));
  }
  function df(r) {
    for (; r === Ga; ) Ga = Vo[--Ho], Vo[Ho] = null, Ka = Vo[--Ho], Vo[Ho] = null;
    for (; r === Kr; ) Kr = Yt[--Xt], Yt[Xt] = null, Hn = Yt[--Xt], Yt[Xt] = null, Vn = Yt[--Xt], Yt[Xt] = null;
  }
  var Lt = null, Dt = null, Ve = !1, an = null;
  function $w(r, s) {
    var c = en(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function Bw(r, s) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return s = s.nodeType !== 1 || c.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (r.stateNode = s, Lt = r, Dt = hr(s.firstChild), !0) : !1;
      case 6:
        return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (r.stateNode = s, Lt = r, Dt = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (c = Kr !== null ? { id: Vn, overflow: Hn } : null, r.memoizedState = { dehydrated: s, treeContext: c, retryLane: 1073741824 }, c = en(18, null, null, 0), c.stateNode = s, c.return = r, r.child = c, Lt = r, Dt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function pf(r) {
    if (Ve) {
      var s = Dt;
      if (s) {
        var c = s;
        if (!Bw(r, s)) {
          if (hf(r)) throw Error(n(418));
          s = hr(c.nextSibling);
          var g = Lt;
          s && Bw(r, s) ? $w(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Lt = r);
        }
      } else {
        if (hf(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Lt = r;
      }
    }
  }
  function Vw(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Lt = r;
  }
  function Ya(r) {
    if (r !== Lt) return !1;
    if (!Ve) return Vw(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !of(r.type, r.memoizedProps)), s && (s = Dt)) {
      if (hf(r)) throw Hw(), Error(n(418));
      for (; s; ) $w(r, s), s = hr(s.nextSibling);
    }
    if (Vw(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
      e: {
        for (r = r.nextSibling, s = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data;
            if (c === "/$") {
              if (s === 0) {
                Dt = hr(r.nextSibling);
                break e;
              }
              s--;
            } else c !== "$" && c !== "$!" && c !== "$?" || s++;
          }
          r = r.nextSibling;
        }
        Dt = null;
      }
    } else Dt = Lt ? hr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function Hw() {
    for (var r = Dt; r; ) r = hr(r.nextSibling);
  }
  function Wo() {
    Dt = Lt = null, Ve = !1;
  }
  function gf(r) {
    an === null ? an = [r] : an.push(r);
  }
  var p2 = R.ReactCurrentBatchConfig;
  function cs(r, s, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(n(147, r));
        var w = g, E = "" + r;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === E ? s.ref : (s = function(I) {
          var $ = w.refs;
          I === null ? delete $[E] : $[E] = I;
        }, s._stringRef = E, s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Xa(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Ww(r) {
    var s = r._init;
    return s(r._payload);
  }
  function Uw(r) {
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
    function w(ne, J) {
      return ne = Er(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function E(ne, J, re) {
      return ne.index = re, r ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function I(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function $(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = sd(re, ne.mode, he), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function K(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Ww(Ce) === J.type) ? (he = w(J, re.props), he.ref = cs(ne, J, re), he.return = ne, he) : (he = xl(re.type, re.key, re.props, null, ne.mode, he), he.ref = cs(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = ad(re, ne.mode, he), J.return = ne, J) : (J = w(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = ro(re, ne.mode, he, Ce), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = sd("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = xl(J.type, J.key, J.props, null, ne.mode, re), re.ref = cs(ne, null, J), re.return = ne, re;
          case T:
            return J = ad(J, ne.mode, re), J.return = ne, J;
          case q:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Vt(J) || F(J)) return J = ro(J, ne.mode, re, null), J.return = ne, J;
        Xa(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : $(ne, J, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case P:
            return re.key === Ce ? K(ne, J, re, he) : null;
          case T:
            return re.key === Ce ? oe(ne, J, re, he) : null;
          case q:
            return Ce = re._init, le(
              ne,
              J,
              Ce(re._payload),
              he
            );
        }
        if (Vt(re) || F(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Xa(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, $(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case P:
            return ne = ne.get(he.key === null ? re : he.key) || null, K(J, ne, he, Ce);
          case T:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case q:
            var ke = he._init;
            return ge(ne, J, re, ke(he._payload), Ce);
        }
        if (Vt(he) || F(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Xa(J, he);
      }
      return null;
    }
    function we(ne, J, re, he) {
      for (var Ce = null, ke = null, Re = J, Pe = J = 0, ct = null; Re !== null && Pe < re.length; Pe++) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var De = le(ne, Re, re[Pe], he);
        if (De === null) {
          Re === null && (Re = ct);
          break;
        }
        r && Re && De.alternate === null && s(ne, Re), J = E(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De, Re = ct;
      }
      if (Pe === re.length) return c(ne, Re), Ve && Yr(ne, Pe), Ce;
      if (Re === null) {
        for (; Pe < re.length; Pe++) Re = fe(ne, re[Pe], he), Re !== null && (J = E(Re, J, Pe), ke === null ? Ce = Re : ke.sibling = Re, ke = Re);
        return Ve && Yr(ne, Pe), Ce;
      }
      for (Re = g(ne, Re); Pe < re.length; Pe++) ct = ge(Re, ne, Pe, re[Pe], he), ct !== null && (r && ct.alternate !== null && Re.delete(ct.key === null ? Pe : ct.key), J = E(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return r && Re.forEach(function(Cr) {
        return s(ne, Cr);
      }), Ve && Yr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = F(re);
      if (typeof Ce != "function") throw Error(n(150));
      if (re = Ce.call(re), re == null) throw Error(n(151));
      for (var ke = Ce = null, Re = J, Pe = J = 0, ct = null, De = re.next(); Re !== null && !De.done; Pe++, De = re.next()) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var Cr = le(ne, Re, De.value, he);
        if (Cr === null) {
          Re === null && (Re = ct);
          break;
        }
        r && Re && Cr.alternate === null && s(ne, Re), J = E(Cr, J, Pe), ke === null ? Ce = Cr : ke.sibling = Cr, ke = Cr, Re = ct;
      }
      if (De.done) return c(
        ne,
        Re
      ), Ve && Yr(ne, Pe), Ce;
      if (Re === null) {
        for (; !De.done; Pe++, De = re.next()) De = fe(ne, De.value, he), De !== null && (J = E(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De);
        return Ve && Yr(ne, Pe), Ce;
      }
      for (Re = g(ne, Re); !De.done; Pe++, De = re.next()) De = ge(Re, ne, Pe, De.value, he), De !== null && (r && De.alternate !== null && Re.delete(De.key === null ? Pe : De.key), J = E(De, J, Pe), ke === null ? Ce = De : ke.sibling = De, ke = De);
      return r && Re.forEach(function(G2) {
        return s(ne, G2);
      }), Ve && Yr(ne, Pe), Ce;
    }
    function et(ne, J, re, he) {
      if (typeof re == "object" && re !== null && re.type === A && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case P:
            e: {
              for (var Ce = re.key, ke = J; ke !== null; ) {
                if (ke.key === Ce) {
                  if (Ce = re.type, Ce === A) {
                    if (ke.tag === 7) {
                      c(ne, ke.sibling), J = w(ke, re.props.children), J.return = ne, ne = J;
                      break e;
                    }
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Ww(Ce) === ke.type) {
                    c(ne, ke.sibling), J = w(ke, re.props), J.ref = cs(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = ro(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = xl(re.type, re.key, re.props, null, ne.mode, he), he.ref = cs(ne, J, re), he.return = ne, ne = he);
            }
            return I(ne);
          case T:
            e: {
              for (ke = re.key; J !== null; ) {
                if (J.key === ke) if (J.tag === 4 && J.stateNode.containerInfo === re.containerInfo && J.stateNode.implementation === re.implementation) {
                  c(ne, J.sibling), J = w(J, re.children || []), J.return = ne, ne = J;
                  break e;
                } else {
                  c(ne, J);
                  break;
                }
                else s(ne, J);
                J = J.sibling;
              }
              J = ad(re, ne.mode, he), J.return = ne, ne = J;
            }
            return I(ne);
          case q:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Vt(re)) return we(ne, J, re, he);
        if (F(re)) return Se(ne, J, re, he);
        Xa(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = w(J, re), J.return = ne, ne = J) : (c(ne, J), J = sd(re, ne.mode, he), J.return = ne, ne = J), I(ne)) : c(ne, J);
    }
    return et;
  }
  var Uo = Uw(!0), Gw = Uw(!1), Qa = pr(null), Za = null, Go = null, mf = null;
  function vf() {
    mf = Go = Za = null;
  }
  function yf(r) {
    var s = Qa.current;
    $e(Qa), r._currentValue = s;
  }
  function wf(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Ko(r, s) {
    Za = r, mf = Go = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Ct = !0), r.firstContext = null);
  }
  function Qt(r) {
    var s = r._currentValue;
    if (mf !== r) if (r = { context: r, memoizedValue: s, next: null }, Go === null) {
      if (Za === null) throw Error(n(308));
      Go = r, Za.dependencies = { lanes: 0, firstContext: r };
    } else Go = Go.next = r;
    return s;
  }
  var Xr = null;
  function xf(r) {
    Xr === null ? Xr = [r] : Xr.push(r);
  }
  function Kw(r, s, c, g) {
    var w = s.interleaved;
    return w === null ? (c.next = c, xf(s)) : (c.next = w.next, w.next = c), s.interleaved = c, Wn(r, g);
  }
  function Wn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var vr = !1;
  function bf(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yw(r, s) {
    r = r.updateQueue, s.updateQueue === r && (s.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
  }
  function Un(r, s) {
    return { eventTime: r, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function yr(r, s, c) {
    var g = r.updateQueue;
    if (g === null) return null;
    if (g = g.shared, (Oe & 2) !== 0) {
      var w = g.pending;
      return w === null ? s.next = s : (s.next = w.next, w.next = s), g.pending = s, Wn(r, c);
    }
    return w = g.interleaved, w === null ? (s.next = s, xf(g)) : (s.next = w.next, w.next = s), g.interleaved = s, Wn(r, c);
  }
  function Ja(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Oc(r, c);
    }
  }
  function Xw(r, s) {
    var c = r.updateQueue, g = r.alternate;
    if (g !== null && (g = g.updateQueue, c === g)) {
      var w = null, E = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var I = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          E === null ? w = E = I : E = E.next = I, c = c.next;
        } while (c !== null);
        E === null ? w = E = s : E = E.next = s;
      } else w = E = s;
      c = { baseState: g.baseState, firstBaseUpdate: w, lastBaseUpdate: E, shared: g.shared, effects: g.effects }, r.updateQueue = c;
      return;
    }
    r = c.lastBaseUpdate, r === null ? c.firstBaseUpdate = s : r.next = s, c.lastBaseUpdate = s;
  }
  function el(r, s, c, g) {
    var w = r.updateQueue;
    vr = !1;
    var E = w.firstBaseUpdate, I = w.lastBaseUpdate, $ = w.shared.pending;
    if ($ !== null) {
      w.shared.pending = null;
      var K = $, oe = K.next;
      K.next = null, I === null ? E = oe : I.next = oe, I = K;
      var ue = r.alternate;
      ue !== null && (ue = ue.updateQueue, $ = ue.lastBaseUpdate, $ !== I && ($ === null ? ue.firstBaseUpdate = oe : $.next = oe, ue.lastBaseUpdate = K));
    }
    if (E !== null) {
      var fe = w.baseState;
      I = 0, ue = oe = K = null, $ = E;
      do {
        var le = $.lane, ge = $.eventTime;
        if ((g & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: ge,
            lane: 0,
            tag: $.tag,
            payload: $.payload,
            callback: $.callback,
            next: null
          });
          e: {
            var we = r, Se = $;
            switch (le = s, ge = c, Se.tag) {
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
                fe = X({}, fe, le);
                break e;
              case 2:
                vr = !0;
            }
          }
          $.callback !== null && $.lane !== 0 && (r.flags |= 64, le = w.effects, le === null ? w.effects = [$] : le.push($));
        } else ge = { eventTime: ge, lane: le, tag: $.tag, payload: $.payload, callback: $.callback, next: null }, ue === null ? (oe = ue = ge, K = fe) : ue = ue.next = ge, I |= le;
        if ($ = $.next, $ === null) {
          if ($ = w.shared.pending, $ === null) break;
          le = $, $ = le.next, le.next = null, w.lastBaseUpdate = le, w.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (K = fe), w.baseState = K, w.firstBaseUpdate = oe, w.lastBaseUpdate = ue, s = w.shared.interleaved, s !== null) {
        w = s;
        do
          I |= w.lane, w = w.next;
        while (w !== s);
      } else E === null && (w.shared.lanes = 0);
      Jr |= I, r.lanes = I, r.memoizedState = fe;
    }
  }
  function Qw(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], w = g.callback;
      if (w !== null) {
        if (g.callback = null, g = c, typeof w != "function") throw Error(n(191, w));
        w.call(g);
      }
    }
  }
  var fs = {}, kn = pr(fs), ds = pr(fs), hs = pr(fs);
  function Qr(r) {
    if (r === fs) throw Error(n(174));
    return r;
  }
  function _f(r, s) {
    switch (Fe(hs, s), Fe(ds, r), Fe(kn, fs), r = s.nodeType, r) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Wt(null, "");
        break;
      default:
        r = r === 8 ? s.parentNode : s, s = r.namespaceURI || null, r = r.tagName, s = Wt(s, r);
    }
    $e(kn), Fe(kn, s);
  }
  function Yo() {
    $e(kn), $e(ds), $e(hs);
  }
  function Zw(r) {
    Qr(hs.current);
    var s = Qr(kn.current), c = Wt(s, r.type);
    s !== c && (Fe(ds, r), Fe(kn, c));
  }
  function Sf(r) {
    ds.current === r && ($e(kn), $e(ds));
  }
  var Ye = pr(0);
  function tl(r) {
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
  var Ef = [];
  function Cf() {
    for (var r = 0; r < Ef.length; r++) Ef[r]._workInProgressVersionPrimary = null;
    Ef.length = 0;
  }
  var nl = R.ReactCurrentDispatcher, kf = R.ReactCurrentBatchConfig, Zr = 0, Xe = null, ot = null, lt = null, rl = !1, ps = !1, gs = 0, g2 = 0;
  function mt() {
    throw Error(n(321));
  }
  function Rf(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!sn(r[c], s[c])) return !1;
    return !0;
  }
  function Nf(r, s, c, g, w, E) {
    if (Zr = E, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, nl.current = r === null || r.memoizedState === null ? w2 : x2, r = c(g, w), ps) {
      E = 0;
      do {
        if (ps = !1, gs = 0, 25 <= E) throw Error(n(301));
        E += 1, lt = ot = null, s.updateQueue = null, nl.current = b2, r = c(g, w);
      } while (ps);
    }
    if (nl.current = sl, s = ot !== null && ot.next !== null, Zr = 0, lt = ot = Xe = null, rl = !1, s) throw Error(n(300));
    return r;
  }
  function Pf() {
    var r = gs !== 0;
    return gs = 0, r;
  }
  function Rn() {
    var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Xe.memoizedState = lt = r : lt = lt.next = r, lt;
  }
  function Zt() {
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
  function ms(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function Tf(r) {
    var s = Zt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = ot, w = g.baseQueue, E = c.pending;
    if (E !== null) {
      if (w !== null) {
        var I = w.next;
        w.next = E.next, E.next = I;
      }
      g.baseQueue = w = E, c.pending = null;
    }
    if (w !== null) {
      E = w.next, g = g.baseState;
      var $ = I = null, K = null, oe = E;
      do {
        var ue = oe.lane;
        if ((Zr & ue) === ue) K !== null && (K = K.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          K === null ? ($ = K = fe, I = g) : K = K.next = fe, Xe.lanes |= ue, Jr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== E);
      K === null ? I = g : K.next = $, sn(g, s.memoizedState) || (Ct = !0), s.memoizedState = g, s.baseState = I, s.baseQueue = K, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      w = r;
      do
        E = w.lane, Xe.lanes |= E, Jr |= E, w = w.next;
      while (w !== r);
    } else w === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function If(r) {
    var s = Zt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = c.dispatch, w = c.pending, E = s.memoizedState;
    if (w !== null) {
      c.pending = null;
      var I = w = w.next;
      do
        E = r(E, I.action), I = I.next;
      while (I !== w);
      sn(E, s.memoizedState) || (Ct = !0), s.memoizedState = E, s.baseQueue === null && (s.baseState = E), c.lastRenderedState = E;
    }
    return [E, g];
  }
  function Jw() {
  }
  function ex(r, s) {
    var c = Xe, g = Zt(), w = s(), E = !sn(g.memoizedState, w);
    if (E && (g.memoizedState = w, Ct = !0), g = g.queue, Af(rx.bind(null, c, g, r), [r]), g.getSnapshot !== s || E || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, vs(9, nx.bind(null, c, g, w, s), void 0, null), ut === null) throw Error(n(349));
      (Zr & 30) !== 0 || tx(c, s, w);
    }
    return w;
  }
  function tx(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function nx(r, s, c, g) {
    s.value = c, s.getSnapshot = g, ox(s) && ix(r);
  }
  function rx(r, s, c) {
    return c(function() {
      ox(s) && ix(r);
    });
  }
  function ox(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !sn(r, c);
    } catch {
      return !0;
    }
  }
  function ix(r) {
    var s = Wn(r, 1);
    s !== null && fn(s, r, 1, -1);
  }
  function sx(r) {
    var s = Rn();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: r }, s.queue = r, r = r.dispatch = y2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function vs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function ax() {
    return Zt().memoizedState;
  }
  function ol(r, s, c, g) {
    var w = Rn();
    Xe.flags |= r, w.memoizedState = vs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function il(r, s, c, g) {
    var w = Zt();
    g = g === void 0 ? null : g;
    var E = void 0;
    if (ot !== null) {
      var I = ot.memoizedState;
      if (E = I.destroy, g !== null && Rf(g, I.deps)) {
        w.memoizedState = vs(s, c, E, g);
        return;
      }
    }
    Xe.flags |= r, w.memoizedState = vs(1 | s, c, E, g);
  }
  function lx(r, s) {
    return ol(8390656, 8, r, s);
  }
  function Af(r, s) {
    return il(2048, 8, r, s);
  }
  function ux(r, s) {
    return il(4, 2, r, s);
  }
  function cx(r, s) {
    return il(4, 4, r, s);
  }
  function fx(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function dx(r, s, c) {
    return c = c != null ? c.concat([r]) : null, il(4, 4, fx.bind(null, s, r), c);
  }
  function Mf() {
  }
  function hx(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Rf(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function px(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Rf(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function gx(r, s, c) {
    return (Zr & 21) === 0 ? (r.baseState && (r.baseState = !1, Ct = !0), r.memoizedState = c) : (sn(c, s) || (c = Ra(), Xe.lanes |= c, Jr |= c, r.baseState = !0), s);
  }
  function m2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = kf.transition;
    kf.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, kf.transition = g;
    }
  }
  function mx() {
    return Zt().memoizedState;
  }
  function v2(r, s, c) {
    var g = _r(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, vx(r)) yx(s, c);
    else if (c = Kw(r, s, c, g), c !== null) {
      var w = bt();
      fn(c, r, g, w), wx(c, s, g);
    }
  }
  function y2(r, s, c) {
    var g = _r(r), w = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (vx(r)) yx(s, w);
    else {
      var E = r.alternate;
      if (r.lanes === 0 && (E === null || E.lanes === 0) && (E = s.lastRenderedReducer, E !== null)) try {
        var I = s.lastRenderedState, $ = E(I, c);
        if (w.hasEagerState = !0, w.eagerState = $, sn($, I)) {
          var K = s.interleaved;
          K === null ? (w.next = w, xf(s)) : (w.next = K.next, K.next = w), s.interleaved = w;
          return;
        }
      } catch {
      } finally {
      }
      c = Kw(r, s, w, g), c !== null && (w = bt(), fn(c, r, g, w), wx(c, s, g));
    }
  }
  function vx(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function yx(r, s) {
    ps = rl = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function wx(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Oc(r, c);
    }
  }
  var sl = { readContext: Qt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, w2 = { readContext: Qt, useCallback: function(r, s) {
    return Rn().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Qt, useEffect: lx, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, ol(
      4194308,
      4,
      fx.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return ol(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return ol(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = Rn();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = Rn();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = v2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = Rn();
    return r = { current: r }, s.memoizedState = r;
  }, useState: sx, useDebugValue: Mf, useDeferredValue: function(r) {
    return Rn().memoizedState = r;
  }, useTransition: function() {
    var r = sx(!1), s = r[0];
    return r = m2.bind(null, r[1]), Rn().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, w = Rn();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Zr & 30) !== 0 || tx(g, s, c);
    }
    w.memoizedState = c;
    var E = { value: c, getSnapshot: s };
    return w.queue = E, lx(rx.bind(
      null,
      g,
      E,
      r
    ), [r]), g.flags |= 2048, vs(9, nx.bind(null, g, E, c, s), void 0, null), c;
  }, useId: function() {
    var r = Rn(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Hn, g = Vn;
      c = (g & ~(1 << 32 - Mt(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = gs++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = g2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, x2 = {
    readContext: Qt,
    useCallback: hx,
    useContext: Qt,
    useEffect: Af,
    useImperativeHandle: dx,
    useInsertionEffect: ux,
    useLayoutEffect: cx,
    useMemo: px,
    useReducer: Tf,
    useRef: ax,
    useState: function() {
      return Tf(ms);
    },
    useDebugValue: Mf,
    useDeferredValue: function(r) {
      var s = Zt();
      return gx(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = Tf(ms)[0], s = Zt().memoizedState;
      return [r, s];
    },
    useMutableSource: Jw,
    useSyncExternalStore: ex,
    useId: mx,
    unstable_isNewReconciler: !1
  }, b2 = { readContext: Qt, useCallback: hx, useContext: Qt, useEffect: Af, useImperativeHandle: dx, useInsertionEffect: ux, useLayoutEffect: cx, useMemo: px, useReducer: If, useRef: ax, useState: function() {
    return If(ms);
  }, useDebugValue: Mf, useDeferredValue: function(r) {
    var s = Zt();
    return ot === null ? s.memoizedState = r : gx(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = If(ms)[0], s = Zt().memoizedState;
    return [r, s];
  }, useMutableSource: Jw, useSyncExternalStore: ex, useId: mx, unstable_isNewReconciler: !1 };
  function ln(r, s) {
    if (r && r.defaultProps) {
      s = X({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function Of(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : X({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var al = { isMounted: function(r) {
    return (r = r._reactInternals) ? Sn(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = bt(), w = _r(r), E = Un(g, w);
    E.payload = s, c != null && (E.callback = c), s = yr(r, E, w), s !== null && (fn(s, r, w, g), Ja(s, r, w));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = bt(), w = _r(r), E = Un(g, w);
    E.tag = 1, E.payload = s, c != null && (E.callback = c), s = yr(r, E, w), s !== null && (fn(s, r, w, g), Ja(s, r, w));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = bt(), g = _r(r), w = Un(c, g);
    w.tag = 2, s != null && (w.callback = s), s = yr(r, w, g), s !== null && (fn(s, r, g, c), Ja(s, r, g));
  } };
  function xx(r, s, c, g, w, E, I) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, E, I) : s.prototype && s.prototype.isPureReactComponent ? !rs(c, g) || !rs(w, E) : !0;
  }
  function bx(r, s, c) {
    var g = !1, w = gr, E = s.contextType;
    return typeof E == "object" && E !== null ? E = Qt(E) : (w = Et(s) ? Gr : gt.current, g = s.contextTypes, E = (g = g != null) ? Bo(r, w) : gr), s = new s(c, E), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = al, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = w, r.__reactInternalMemoizedMaskedChildContext = E), s;
  }
  function _x(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && al.enqueueReplaceState(s, s.state, null);
  }
  function Lf(r, s, c, g) {
    var w = r.stateNode;
    w.props = c, w.state = r.memoizedState, w.refs = {}, bf(r);
    var E = s.contextType;
    typeof E == "object" && E !== null ? w.context = Qt(E) : (E = Et(s) ? Gr : gt.current, w.context = Bo(r, E)), w.state = r.memoizedState, E = s.getDerivedStateFromProps, typeof E == "function" && (Of(r, s, E, c), w.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function" || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (s = w.state, typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount(), s !== w.state && al.enqueueReplaceState(w, w.state, null), el(r, c, w, g), w.state = r.memoizedState), typeof w.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function Xo(r, s) {
    try {
      var c = "", g = s;
      do
        c += Z(g), g = g.return;
      while (g);
      var w = c;
    } catch (E) {
      w = `
Error generating stack: ` + E.message + `
` + E.stack;
    }
    return { value: r, source: s, stack: w, digest: null };
  }
  function Df(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function jf(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var _2 = typeof WeakMap == "function" ? WeakMap : Map;
  function Sx(r, s, c) {
    c = Un(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      pl || (pl = !0, Zf = g), jf(r, s);
    }, c;
  }
  function Ex(r, s, c) {
    c = Un(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var w = s.value;
      c.payload = function() {
        return g(w);
      }, c.callback = function() {
        jf(r, s);
      };
    }
    var E = r.stateNode;
    return E !== null && typeof E.componentDidCatch == "function" && (c.callback = function() {
      jf(r, s), typeof g != "function" && (xr === null ? xr = /* @__PURE__ */ new Set([this]) : xr.add(this));
      var I = s.stack;
      this.componentDidCatch(s.value, { componentStack: I !== null ? I : "" });
    }), c;
  }
  function Cx(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new _2();
      var w = /* @__PURE__ */ new Set();
      g.set(s, w);
    } else w = g.get(s), w === void 0 && (w = /* @__PURE__ */ new Set(), g.set(s, w));
    w.has(c) || (w.add(c), r = D2.bind(null, r, s, c), s.then(r, r));
  }
  function kx(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Rx(r, s, c, g, w) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Un(-1, 1), s.tag = 2, yr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = w, r);
  }
  var S2 = R.ReactCurrentOwner, Ct = !1;
  function xt(r, s, c, g) {
    s.child = r === null ? Gw(s, null, c, g) : Uo(s, r.child, c, g);
  }
  function Nx(r, s, c, g, w) {
    c = c.render;
    var E = s.ref;
    return Ko(s, w), g = Nf(r, s, c, g, E, w), c = Pf(), r !== null && !Ct ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && c && ff(s), s.flags |= 1, xt(r, s, g, w), s.child);
  }
  function Px(r, s, c, g, w) {
    if (r === null) {
      var E = c.type;
      return typeof E == "function" && !id(E) && E.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = E, Tx(r, s, E, g, w)) : (r = xl(c.type, null, g, s, s.mode, w), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (E = r.child, (r.lanes & w) === 0) {
      var I = E.memoizedProps;
      if (c = c.compare, c = c !== null ? c : rs, c(I, g) && r.ref === s.ref) return Gn(r, s, w);
    }
    return s.flags |= 1, r = Er(E, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function Tx(r, s, c, g, w) {
    if (r !== null) {
      var E = r.memoizedProps;
      if (rs(E, g) && r.ref === s.ref) if (Ct = !1, s.pendingProps = g = E, (r.lanes & w) !== 0) (r.flags & 131072) !== 0 && (Ct = !0);
      else return s.lanes = r.lanes, Gn(r, s, w);
    }
    return qf(r, s, c, g, w);
  }
  function Ix(r, s, c) {
    var g = s.pendingProps, w = g.children, E = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(Zo, jt), jt |= c;
    else {
      if ((c & 1073741824) === 0) return r = E !== null ? E.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, Fe(Zo, jt), jt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = E !== null ? E.baseLanes : c, Fe(Zo, jt), jt |= g;
    }
    else E !== null ? (g = E.baseLanes | c, s.memoizedState = null) : g = c, Fe(Zo, jt), jt |= g;
    return xt(r, s, w, c), s.child;
  }
  function Ax(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function qf(r, s, c, g, w) {
    var E = Et(c) ? Gr : gt.current;
    return E = Bo(s, E), Ko(s, w), c = Nf(r, s, c, g, E, w), g = Pf(), r !== null && !Ct ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && g && ff(s), s.flags |= 1, xt(r, s, c, w), s.child);
  }
  function Mx(r, s, c, g, w) {
    if (Et(c)) {
      var E = !0;
      Wa(s);
    } else E = !1;
    if (Ko(s, w), s.stateNode === null) ul(r, s), bx(s, c, g), Lf(s, c, g, w), g = !0;
    else if (r === null) {
      var I = s.stateNode, $ = s.memoizedProps;
      I.props = $;
      var K = I.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Qt(oe) : (oe = Et(c) ? Gr : gt.current, oe = Bo(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof I.getSnapshotBeforeUpdate == "function";
      fe || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || ($ !== g || K !== oe) && _x(s, I, g, oe), vr = !1;
      var le = s.memoizedState;
      I.state = le, el(s, g, I, w), K = s.memoizedState, $ !== g || le !== K || St.current || vr ? (typeof ue == "function" && (Of(s, c, ue, g), K = s.memoizedState), ($ = vr || xx(s, c, $, g, le, K, oe)) ? (fe || typeof I.UNSAFE_componentWillMount != "function" && typeof I.componentWillMount != "function" || (typeof I.componentWillMount == "function" && I.componentWillMount(), typeof I.UNSAFE_componentWillMount == "function" && I.UNSAFE_componentWillMount()), typeof I.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = K), I.props = g, I.state = K, I.context = oe, g = $) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      I = s.stateNode, Yw(r, s), $ = s.memoizedProps, oe = s.type === s.elementType ? $ : ln(s.type, $), I.props = oe, fe = s.pendingProps, le = I.context, K = c.contextType, typeof K == "object" && K !== null ? K = Qt(K) : (K = Et(c) ? Gr : gt.current, K = Bo(s, K));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof I.getSnapshotBeforeUpdate == "function") || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || ($ !== fe || le !== K) && _x(s, I, g, K), vr = !1, le = s.memoizedState, I.state = le, el(s, g, I, w);
      var we = s.memoizedState;
      $ !== fe || le !== we || St.current || vr ? (typeof ge == "function" && (Of(s, c, ge, g), we = s.memoizedState), (oe = vr || xx(s, c, oe, g, le, we, K) || !1) ? (ue || typeof I.UNSAFE_componentWillUpdate != "function" && typeof I.componentWillUpdate != "function" || (typeof I.componentWillUpdate == "function" && I.componentWillUpdate(g, we, K), typeof I.UNSAFE_componentWillUpdate == "function" && I.UNSAFE_componentWillUpdate(g, we, K)), typeof I.componentDidUpdate == "function" && (s.flags |= 4), typeof I.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof I.componentDidUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = we), I.props = g, I.state = we, I.context = K, g = oe) : (typeof I.componentDidUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return Ff(r, s, c, g, E, w);
  }
  function Ff(r, s, c, g, w, E) {
    Ax(r, s);
    var I = (s.flags & 128) !== 0;
    if (!g && !I) return w && qw(s, c, !1), Gn(r, s, E);
    g = s.stateNode, S2.current = s;
    var $ = I && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && I ? (s.child = Uo(s, r.child, null, E), s.child = Uo(s, null, $, E)) : xt(r, s, $, E), s.memoizedState = g.state, w && qw(s, c, !0), s.child;
  }
  function Ox(r) {
    var s = r.stateNode;
    s.pendingContext ? Dw(r, s.pendingContext, s.pendingContext !== s.context) : s.context && Dw(r, s.context, !1), _f(r, s.containerInfo);
  }
  function Lx(r, s, c, g, w) {
    return Wo(), gf(w), s.flags |= 256, xt(r, s, c, g), s.child;
  }
  var zf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $f(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Dx(r, s, c) {
    var g = s.pendingProps, w = Ye.current, E = !1, I = (s.flags & 128) !== 0, $;
    if (($ = I) || ($ = r !== null && r.memoizedState === null ? !1 : (w & 2) !== 0), $ ? (E = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (w |= 1), Fe(Ye, w & 1), r === null)
      return pf(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (I = g.children, r = g.fallback, E ? (g = s.mode, E = s.child, I = { mode: "hidden", children: I }, (g & 1) === 0 && E !== null ? (E.childLanes = 0, E.pendingProps = I) : E = bl(I, g, 0, null), r = ro(r, g, c, null), E.return = s, r.return = s, E.sibling = r, s.child = E, s.child.memoizedState = $f(c), s.memoizedState = zf, r) : Bf(s, I));
    if (w = r.memoizedState, w !== null && ($ = w.dehydrated, $ !== null)) return E2(r, s, I, g, $, w, c);
    if (E) {
      E = g.fallback, I = s.mode, w = r.child, $ = w.sibling;
      var K = { mode: "hidden", children: g.children };
      return (I & 1) === 0 && s.child !== w ? (g = s.child, g.childLanes = 0, g.pendingProps = K, s.deletions = null) : (g = Er(w, K), g.subtreeFlags = w.subtreeFlags & 14680064), $ !== null ? E = Er($, E) : (E = ro(E, I, c, null), E.flags |= 2), E.return = s, g.return = s, g.sibling = E, s.child = g, g = E, E = s.child, I = r.child.memoizedState, I = I === null ? $f(c) : { baseLanes: I.baseLanes | c, cachePool: null, transitions: I.transitions }, E.memoizedState = I, E.childLanes = r.childLanes & ~c, s.memoizedState = zf, g;
    }
    return E = r.child, r = E.sibling, g = Er(E, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function Bf(r, s) {
    return s = bl({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function ll(r, s, c, g) {
    return g !== null && gf(g), Uo(s, r.child, null, c), r = Bf(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function E2(r, s, c, g, w, E, I) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = Df(Error(n(422))), ll(r, s, I, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (E = g.fallback, w = s.mode, g = bl({ mode: "visible", children: g.children }, w, 0, null), E = ro(E, w, I, null), E.flags |= 2, g.return = s, E.return = s, g.sibling = E, s.child = g, (s.mode & 1) !== 0 && Uo(s, r.child, null, I), s.child.memoizedState = $f(I), s.memoizedState = zf, E);
    if ((s.mode & 1) === 0) return ll(r, s, I, null);
    if (w.data === "$!") {
      if (g = w.nextSibling && w.nextSibling.dataset, g) var $ = g.dgst;
      return g = $, E = Error(n(419)), g = Df(E, g, void 0), ll(r, s, I, g);
    }
    if ($ = (I & r.childLanes) !== 0, Ct || $) {
      if (g = ut, g !== null) {
        switch (I & -I) {
          case 4:
            w = 2;
            break;
          case 16:
            w = 8;
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
            w = 32;
            break;
          case 536870912:
            w = 268435456;
            break;
          default:
            w = 0;
        }
        w = (w & (g.suspendedLanes | I)) !== 0 ? 0 : w, w !== 0 && w !== E.retryLane && (E.retryLane = w, Wn(r, w), fn(g, r, w, -1));
      }
      return od(), g = Df(Error(n(421))), ll(r, s, I, g);
    }
    return w.data === "$?" ? (s.flags |= 128, s.child = r.child, s = j2.bind(null, r), w._reactRetry = s, null) : (r = E.treeContext, Dt = hr(w.nextSibling), Lt = s, Ve = !0, an = null, r !== null && (Yt[Xt++] = Vn, Yt[Xt++] = Hn, Yt[Xt++] = Kr, Vn = r.id, Hn = r.overflow, Kr = s), s = Bf(s, g.children), s.flags |= 4096, s);
  }
  function jx(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), wf(r.return, s, c);
  }
  function Vf(r, s, c, g, w) {
    var E = r.memoizedState;
    E === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: w } : (E.isBackwards = s, E.rendering = null, E.renderingStartTime = 0, E.last = g, E.tail = c, E.tailMode = w);
  }
  function qx(r, s, c) {
    var g = s.pendingProps, w = g.revealOrder, E = g.tail;
    if (xt(r, s, g.children, c), g = Ye.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && jx(r, c, s);
        else if (r.tag === 19) jx(r, c, s);
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
    if (Fe(Ye, g), (s.mode & 1) === 0) s.memoizedState = null;
    else switch (w) {
      case "forwards":
        for (c = s.child, w = null; c !== null; ) r = c.alternate, r !== null && tl(r) === null && (w = c), c = c.sibling;
        c = w, c === null ? (w = s.child, s.child = null) : (w = c.sibling, c.sibling = null), Vf(s, !1, w, c, E);
        break;
      case "backwards":
        for (c = null, w = s.child, s.child = null; w !== null; ) {
          if (r = w.alternate, r !== null && tl(r) === null) {
            s.child = w;
            break;
          }
          r = w.sibling, w.sibling = c, c = w, w = r;
        }
        Vf(s, !0, c, null, E);
        break;
      case "together":
        Vf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function ul(r, s) {
    (s.mode & 1) === 0 && r !== null && (r.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Gn(r, s, c) {
    if (r !== null && (s.dependencies = r.dependencies), Jr |= s.lanes, (c & s.childLanes) === 0) return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (r = s.child, c = Er(r, r.pendingProps), s.child = c, c.return = s; r.sibling !== null; ) r = r.sibling, c = c.sibling = Er(r, r.pendingProps), c.return = s;
      c.sibling = null;
    }
    return s.child;
  }
  function C2(r, s, c) {
    switch (s.tag) {
      case 3:
        Ox(s), Wo();
        break;
      case 5:
        Zw(s);
        break;
      case 1:
        Et(s.type) && Wa(s);
        break;
      case 4:
        _f(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, w = s.memoizedProps.value;
        Fe(Qa, g._currentValue), g._currentValue = w;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (Fe(Ye, Ye.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? Dx(r, s, c) : (Fe(Ye, Ye.current & 1), r = Gn(r, s, c), r !== null ? r.sibling : null);
        Fe(Ye, Ye.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return qx(r, s, c);
          s.flags |= 128;
        }
        if (w = s.memoizedState, w !== null && (w.rendering = null, w.tail = null, w.lastEffect = null), Fe(Ye, Ye.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, Ix(r, s, c);
    }
    return Gn(r, s, c);
  }
  var Fx, Hf, zx, $x;
  Fx = function(r, s) {
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
  }, Hf = function() {
  }, zx = function(r, s, c, g) {
    var w = r.memoizedProps;
    if (w !== g) {
      r = s.stateNode, Qr(kn.current);
      var E = null;
      switch (c) {
        case "input":
          w = _e(r, w), g = _e(r, g), E = [];
          break;
        case "select":
          w = X({}, w, { value: void 0 }), g = X({}, g, { value: void 0 }), E = [];
          break;
        case "textarea":
          w = at(r, w), g = at(r, g), E = [];
          break;
        default:
          typeof w.onClick != "function" && typeof g.onClick == "function" && (r.onclick = Ba);
      }
      Li(c, g);
      var I;
      c = null;
      for (oe in w) if (!g.hasOwnProperty(oe) && w.hasOwnProperty(oe) && w[oe] != null) if (oe === "style") {
        var $ = w[oe];
        for (I in $) $.hasOwnProperty(I) && (c || (c = {}), c[I] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (i.hasOwnProperty(oe) ? E || (E = []) : (E = E || []).push(oe, null));
      for (oe in g) {
        var K = g[oe];
        if ($ = w != null ? w[oe] : void 0, g.hasOwnProperty(oe) && K !== $ && (K != null || $ != null)) if (oe === "style") if ($) {
          for (I in $) !$.hasOwnProperty(I) || K && K.hasOwnProperty(I) || (c || (c = {}), c[I] = "");
          for (I in K) K.hasOwnProperty(I) && $[I] !== K[I] && (c || (c = {}), c[I] = K[I]);
        } else c || (E || (E = []), E.push(
          oe,
          c
        )), c = K;
        else oe === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, $ = $ ? $.__html : void 0, K != null && $ !== K && (E = E || []).push(oe, K)) : oe === "children" ? typeof K != "string" && typeof K != "number" || (E = E || []).push(oe, "" + K) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (i.hasOwnProperty(oe) ? (K != null && oe === "onScroll" && ze("scroll", r), E || $ === K || (E = [])) : (E = E || []).push(oe, K));
      }
      c && (E = E || []).push("style", c);
      var oe = E;
      (s.updateQueue = oe) && (s.flags |= 4);
    }
  }, $x = function(r, s, c, g) {
    c !== g && (s.flags |= 4);
  };
  function ys(r, s) {
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
  function vt(r) {
    var s = r.alternate !== null && r.alternate.child === r.child, c = 0, g = 0;
    if (s) for (var w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags & 14680064, g |= w.flags & 14680064, w.return = r, w = w.sibling;
    else for (w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags, g |= w.flags, w.return = r, w = w.sibling;
    return r.subtreeFlags |= g, r.childLanes = c, s;
  }
  function k2(r, s, c) {
    var g = s.pendingProps;
    switch (df(s), s.tag) {
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
        return vt(s), null;
      case 1:
        return Et(s.type) && Ha(), vt(s), null;
      case 3:
        return g = s.stateNode, Yo(), $e(St), $e(gt), Cf(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Ya(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, an !== null && (td(an), an = null))), Hf(r, s), vt(s), null;
      case 5:
        Sf(s);
        var w = Qr(hs.current);
        if (c = s.type, r !== null && s.stateNode != null) zx(r, s, c, g, w), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return vt(s), null;
          }
          if (r = Qr(kn.current), Ya(s)) {
            g = s.stateNode, c = s.type;
            var E = s.memoizedProps;
            switch (g[Cn] = s, g[ls] = E, r = (s.mode & 1) !== 0, c) {
              case "dialog":
                ze("cancel", g), ze("close", g);
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", g);
                break;
              case "video":
              case "audio":
                for (w = 0; w < is.length; w++) ze(is[w], g);
                break;
              case "source":
                ze("error", g);
                break;
              case "img":
              case "image":
              case "link":
                ze(
                  "error",
                  g
                ), ze("load", g);
                break;
              case "details":
                ze("toggle", g);
                break;
              case "input":
                me(g, E), ze("invalid", g);
                break;
              case "select":
                g._wrapperState = { wasMultiple: !!E.multiple }, ze("invalid", g);
                break;
              case "textarea":
                Ge(g, E), ze("invalid", g);
            }
            Li(c, E), w = null;
            for (var I in E) if (E.hasOwnProperty(I)) {
              var $ = E[I];
              I === "children" ? typeof $ == "string" ? g.textContent !== $ && (E.suppressHydrationWarning !== !0 && $a(g.textContent, $, r), w = ["children", $]) : typeof $ == "number" && g.textContent !== "" + $ && (E.suppressHydrationWarning !== !0 && $a(
                g.textContent,
                $,
                r
              ), w = ["children", "" + $]) : i.hasOwnProperty(I) && $ != null && I === "onScroll" && ze("scroll", g);
            }
            switch (c) {
              case "input":
                ce(g), Je(g, E, !0);
                break;
              case "textarea":
                ce(g), Ht(g);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof E.onClick == "function" && (g.onclick = Ba);
            }
            g = w, s.updateQueue = g, g !== null && (s.flags |= 4);
          } else {
            I = w.nodeType === 9 ? w : w.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = on(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = I.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = I.createElement(c, { is: g.is }) : (r = I.createElement(c), c === "select" && (I = r, g.multiple ? I.multiple = !0 : g.size && (I.size = g.size))) : r = I.createElementNS(r, c), r[Cn] = s, r[ls] = g, Fx(r, s, !1, !1), s.stateNode = r;
            e: {
              switch (I = Di(c, g), c) {
                case "dialog":
                  ze("cancel", r), ze("close", r), w = g;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ze("load", r), w = g;
                  break;
                case "video":
                case "audio":
                  for (w = 0; w < is.length; w++) ze(is[w], r);
                  w = g;
                  break;
                case "source":
                  ze("error", r), w = g;
                  break;
                case "img":
                case "image":
                case "link":
                  ze(
                    "error",
                    r
                  ), ze("load", r), w = g;
                  break;
                case "details":
                  ze("toggle", r), w = g;
                  break;
                case "input":
                  me(r, g), w = _e(r, g), ze("invalid", r);
                  break;
                case "option":
                  w = g;
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!g.multiple }, w = X({}, g, { value: void 0 }), ze("invalid", r);
                  break;
                case "textarea":
                  Ge(r, g), w = at(r, g), ze("invalid", r);
                  break;
                default:
                  w = g;
              }
              Li(c, w), $ = w;
              for (E in $) if ($.hasOwnProperty(E)) {
                var K = $[E];
                E === "style" ? Gt(r, K) : E === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, K != null && zr(r, K)) : E === "children" ? typeof K == "string" ? (c !== "textarea" || K !== "") && Ut(r, K) : typeof K == "number" && Ut(r, "" + K) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (i.hasOwnProperty(E) ? K != null && E === "onScroll" && ze("scroll", r) : K != null && _(r, E, K, I));
              }
              switch (c) {
                case "input":
                  ce(r), Je(r, g, !1);
                  break;
                case "textarea":
                  ce(r), Ht(r);
                  break;
                case "option":
                  g.value != null && r.setAttribute("value", "" + te(g.value));
                  break;
                case "select":
                  r.multiple = !!g.multiple, E = g.value, E != null ? pt(r, !!g.multiple, E, !1) : g.defaultValue != null && pt(
                    r,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof w.onClick == "function" && (r.onclick = Ba);
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
        return vt(s), null;
      case 6:
        if (r && s.stateNode != null) $x(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Qr(hs.current), Qr(kn.current), Ya(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[Cn] = s, (E = g.nodeValue !== c) && (r = Lt, r !== null)) switch (r.tag) {
              case 3:
                $a(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && $a(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            E && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[Cn] = s, s.stateNode = g;
        }
        return vt(s), null;
      case 13:
        if ($e(Ye), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Dt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Hw(), Wo(), s.flags |= 98560, E = !1;
          else if (E = Ya(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!E) throw Error(n(318));
              if (E = s.memoizedState, E = E !== null ? E.dehydrated : null, !E) throw Error(n(317));
              E[Cn] = s;
            } else Wo(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            vt(s), E = !1;
          } else an !== null && (td(an), an = null), E = !0;
          if (!E) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ye.current & 1) !== 0 ? it === 0 && (it = 3) : od())), s.updateQueue !== null && (s.flags |= 4), vt(s), null);
      case 4:
        return Yo(), Hf(r, s), r === null && ss(s.stateNode.containerInfo), vt(s), null;
      case 10:
        return yf(s.type._context), vt(s), null;
      case 17:
        return Et(s.type) && Ha(), vt(s), null;
      case 19:
        if ($e(Ye), E = s.memoizedState, E === null) return vt(s), null;
        if (g = (s.flags & 128) !== 0, I = E.rendering, I === null) if (g) ys(E, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (I = tl(r), I !== null) {
              for (s.flags |= 128, ys(E, !1), g = I.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) E = c, r = g, E.flags &= 14680066, I = E.alternate, I === null ? (E.childLanes = 0, E.lanes = r, E.child = null, E.subtreeFlags = 0, E.memoizedProps = null, E.memoizedState = null, E.updateQueue = null, E.dependencies = null, E.stateNode = null) : (E.childLanes = I.childLanes, E.lanes = I.lanes, E.child = I.child, E.subtreeFlags = 0, E.deletions = null, E.memoizedProps = I.memoizedProps, E.memoizedState = I.memoizedState, E.updateQueue = I.updateQueue, E.type = I.type, r = I.dependencies, E.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return Fe(Ye, Ye.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          E.tail !== null && Ke() > Jo && (s.flags |= 128, g = !0, ys(E, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = tl(I), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), ys(E, !0), E.tail === null && E.tailMode === "hidden" && !I.alternate && !Ve) return vt(s), null;
          } else 2 * Ke() - E.renderingStartTime > Jo && c !== 1073741824 && (s.flags |= 128, g = !0, ys(E, !1), s.lanes = 4194304);
          E.isBackwards ? (I.sibling = s.child, s.child = I) : (c = E.last, c !== null ? c.sibling = I : s.child = I, E.last = I);
        }
        return E.tail !== null ? (s = E.tail, E.rendering = s, E.tail = s.sibling, E.renderingStartTime = Ke(), s.sibling = null, c = Ye.current, Fe(Ye, g ? c & 1 | 2 : c & 1), s) : (vt(s), null);
      case 22:
      case 23:
        return rd(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (jt & 1073741824) !== 0 && (vt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : vt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function R2(r, s) {
    switch (df(s), s.tag) {
      case 1:
        return Et(s.type) && Ha(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Yo(), $e(St), $e(gt), Cf(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return Sf(s), null;
      case 13:
        if ($e(Ye), r = s.memoizedState, r !== null && r.dehydrated !== null) {
          if (s.alternate === null) throw Error(n(340));
          Wo();
        }
        return r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 19:
        return $e(Ye), null;
      case 4:
        return Yo(), null;
      case 10:
        return yf(s.type._context), null;
      case 22:
      case 23:
        return rd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1, yt = !1, N2 = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Qo(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function Wf(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var Bx = !1;
  function P2(r, s) {
    if (nf = Ta, r = xw(), Kc(r)) {
      if ("selectionStart" in r) var c = { start: r.selectionStart, end: r.selectionEnd };
      else e: {
        c = (c = r.ownerDocument) && c.defaultView || window;
        var g = c.getSelection && c.getSelection();
        if (g && g.rangeCount !== 0) {
          c = g.anchorNode;
          var w = g.anchorOffset, E = g.focusNode;
          g = g.focusOffset;
          try {
            c.nodeType, E.nodeType;
          } catch {
            c = null;
            break e;
          }
          var I = 0, $ = -1, K = -1, oe = 0, ue = 0, fe = r, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || w !== 0 && fe.nodeType !== 3 || ($ = I + w), fe !== E || g !== 0 && fe.nodeType !== 3 || (K = I + g), fe.nodeType === 3 && (I += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === r) break t;
              if (le === c && ++oe === w && ($ = I), le === E && ++ue === g && (K = I), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = $ === -1 || K === -1 ? null : { start: $, end: K };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (rf = { focusedElem: r, selectionRange: c }, Ta = !1, ve = s; ve !== null; ) if (s = ve, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ve = r;
    else for (; ve !== null; ) {
      s = ve;
      try {
        var we = s.alternate;
        if ((s.flags & 1024) !== 0) switch (s.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (we !== null) {
              var Se = we.memoizedProps, et = we.memoizedState, ne = s.stateNode, J = ne.getSnapshotBeforeUpdate(s.elementType === s.type ? Se : ln(s.type, Se), et);
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
    return we = Bx, Bx = !1, we;
  }
  function ws(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var w = g = g.next;
      do {
        if ((w.tag & r) === r) {
          var E = w.destroy;
          w.destroy = void 0, E !== void 0 && Wf(s, c, E);
        }
        w = w.next;
      } while (w !== g);
    }
  }
  function fl(r, s) {
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
  function Uf(r) {
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
  function Vx(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, Vx(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[Cn], delete s[ls], delete s[lf], delete s[f2], delete s[d2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Hx(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Wx(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Hx(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Gf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.nodeType === 8 ? c.parentNode.insertBefore(r, s) : c.insertBefore(r, s) : (c.nodeType === 8 ? (s = c.parentNode, s.insertBefore(r, c)) : (s = c, s.appendChild(r)), c = c._reactRootContainer, c != null || s.onclick !== null || (s.onclick = Ba));
    else if (g !== 4 && (r = r.child, r !== null)) for (Gf(r, s, c), r = r.sibling; r !== null; ) Gf(r, s, c), r = r.sibling;
  }
  function Kf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for (Kf(r, s, c), r = r.sibling; r !== null; ) Kf(r, s, c), r = r.sibling;
  }
  var dt = null, un = !1;
  function wr(r, s, c) {
    for (c = c.child; c !== null; ) Ux(r, s, c), c = c.sibling;
  }
  function Ux(r, s, c) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(Hr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        yt || Qo(c, s);
      case 6:
        var g = dt, w = un;
        dt = null, wr(r, s, c), dt = g, un = w, dt !== null && (un ? (r = dt, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : dt.removeChild(c.stateNode));
        break;
      case 18:
        dt !== null && (un ? (r = dt, c = c.stateNode, r.nodeType === 8 ? af(r.parentNode, c) : r.nodeType === 1 && af(r, c), Qi(r)) : af(dt, c.stateNode));
        break;
      case 4:
        g = dt, w = un, dt = c.stateNode.containerInfo, un = !0, wr(r, s, c), dt = g, un = w;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          w = g = g.next;
          do {
            var E = w, I = E.destroy;
            E = E.tag, I !== void 0 && ((E & 2) !== 0 || (E & 4) !== 0) && Wf(c, s, I), w = w.next;
          } while (w !== g);
        }
        wr(r, s, c);
        break;
      case 1:
        if (!yt && (Qo(c, s), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
          g.props = c.memoizedProps, g.state = c.memoizedState, g.componentWillUnmount();
        } catch ($) {
          Ze(c, s, $);
        }
        wr(r, s, c);
        break;
      case 21:
        wr(r, s, c);
        break;
      case 22:
        c.mode & 1 ? (yt = (g = yt) || c.memoizedState !== null, wr(r, s, c), yt = g) : wr(r, s, c);
        break;
      default:
        wr(r, s, c);
    }
  }
  function Gx(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new N2()), s.forEach(function(g) {
        var w = q2.bind(null, r, g);
        c.has(g) || (c.add(g), g.then(w, w));
      });
    }
  }
  function cn(r, s) {
    var c = s.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var w = c[g];
      try {
        var E = r, I = s, $ = I;
        e: for (; $ !== null; ) {
          switch ($.tag) {
            case 5:
              dt = $.stateNode, un = !1;
              break e;
            case 3:
              dt = $.stateNode.containerInfo, un = !0;
              break e;
            case 4:
              dt = $.stateNode.containerInfo, un = !0;
              break e;
          }
          $ = $.return;
        }
        if (dt === null) throw Error(n(160));
        Ux(E, I, w), dt = null, un = !1;
        var K = w.alternate;
        K !== null && (K.return = null), w.return = null;
      } catch (oe) {
        Ze(w, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Kx(s, r), s = s.sibling;
  }
  function Kx(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (cn(s, r), Nn(r), g & 4) {
          try {
            ws(3, r, r.return), fl(3, r);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
          try {
            ws(5, r, r.return);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 1:
        cn(s, r), Nn(r), g & 512 && c !== null && Qo(c, c.return);
        break;
      case 5:
        if (cn(s, r), Nn(r), g & 512 && c !== null && Qo(c, c.return), r.flags & 32) {
          var w = r.stateNode;
          try {
            Ut(w, "");
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        if (g & 4 && (w = r.stateNode, w != null)) {
          var E = r.memoizedProps, I = c !== null ? c.memoizedProps : E, $ = r.type, K = r.updateQueue;
          if (r.updateQueue = null, K !== null) try {
            $ === "input" && E.type === "radio" && E.name != null && Ne(w, E), Di($, I);
            var oe = Di($, E);
            for (I = 0; I < K.length; I += 2) {
              var ue = K[I], fe = K[I + 1];
              ue === "style" ? Gt(w, fe) : ue === "dangerouslySetInnerHTML" ? zr(w, fe) : ue === "children" ? Ut(w, fe) : _(w, ue, fe, oe);
            }
            switch ($) {
              case "input":
                Ee(w, E);
                break;
              case "textarea":
                rn(w, E);
                break;
              case "select":
                var le = w._wrapperState.wasMultiple;
                w._wrapperState.wasMultiple = !!E.multiple;
                var ge = E.value;
                ge != null ? pt(w, !!E.multiple, ge, !1) : le !== !!E.multiple && (E.defaultValue != null ? pt(
                  w,
                  !!E.multiple,
                  E.defaultValue,
                  !0
                ) : pt(w, !!E.multiple, E.multiple ? [] : "", !1));
            }
            w[ls] = E;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 6:
        if (cn(s, r), Nn(r), g & 4) {
          if (r.stateNode === null) throw Error(n(162));
          w = r.stateNode, E = r.memoizedProps;
          try {
            w.nodeValue = E;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 3:
        if (cn(s, r), Nn(r), g & 4 && c !== null && c.memoizedState.isDehydrated) try {
          Qi(s.containerInfo);
        } catch (Se) {
          Ze(r, r.return, Se);
        }
        break;
      case 4:
        cn(s, r), Nn(r);
        break;
      case 13:
        cn(s, r), Nn(r), w = r.child, w.flags & 8192 && (E = w.memoizedState !== null, w.stateNode.isHidden = E, !E || w.alternate !== null && w.alternate.memoizedState !== null || (Qf = Ke())), g & 4 && Gx(r);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, r.mode & 1 ? (yt = (oe = yt) || ue, cn(s, r), yt = oe) : cn(s, r), Nn(r), g & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !ue && (r.mode & 1) !== 0) for (ve = r, ue = r.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ws(4, le, le.return);
                  break;
                case 1:
                  Qo(le, le.return);
                  var we = le.stateNode;
                  if (typeof we.componentWillUnmount == "function") {
                    g = le, c = le.return;
                    try {
                      s = g, we.props = s.memoizedProps, we.state = s.memoizedState, we.componentWillUnmount();
                    } catch (Se) {
                      Ze(g, c, Se);
                    }
                  }
                  break;
                case 5:
                  Qo(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Qx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : Qx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  w = fe.stateNode, oe ? (E = w.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none") : ($ = fe.stateNode, K = fe.memoizedProps.style, I = K != null && K.hasOwnProperty("display") ? K.display : null, $.style.display = At("display", I));
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
        cn(s, r), Nn(r), g & 4 && Gx(r);
        break;
      case 21:
        break;
      default:
        cn(
          s,
          r
        ), Nn(r);
    }
  }
  function Nn(r) {
    var s = r.flags;
    if (s & 2) {
      try {
        e: {
          for (var c = r.return; c !== null; ) {
            if (Hx(c)) {
              var g = c;
              break e;
            }
            c = c.return;
          }
          throw Error(n(160));
        }
        switch (g.tag) {
          case 5:
            var w = g.stateNode;
            g.flags & 32 && (Ut(w, ""), g.flags &= -33);
            var E = Wx(r);
            Kf(r, E, w);
            break;
          case 3:
          case 4:
            var I = g.stateNode.containerInfo, $ = Wx(r);
            Gf(r, $, I);
            break;
          default:
            throw Error(n(161));
        }
      } catch (K) {
        Ze(r, r.return, K);
      }
      r.flags &= -3;
    }
    s & 4096 && (r.flags &= -4097);
  }
  function T2(r, s, c) {
    ve = r, Yx(r);
  }
  function Yx(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ve !== null; ) {
      var w = ve, E = w.child;
      if (w.tag === 22 && g) {
        var I = w.memoizedState !== null || cl;
        if (!I) {
          var $ = w.alternate, K = $ !== null && $.memoizedState !== null || yt;
          $ = cl;
          var oe = yt;
          if (cl = I, (yt = K) && !oe) for (ve = w; ve !== null; ) I = ve, K = I.child, I.tag === 22 && I.memoizedState !== null ? Zx(w) : K !== null ? (K.return = I, ve = K) : Zx(w);
          for (; E !== null; ) ve = E, Yx(E), E = E.sibling;
          ve = w, cl = $, yt = oe;
        }
        Xx(r);
      } else (w.subtreeFlags & 8772) !== 0 && E !== null ? (E.return = w, ve = E) : Xx(r);
    }
  }
  function Xx(r) {
    for (; ve !== null; ) {
      var s = ve;
      if ((s.flags & 8772) !== 0) {
        var c = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              yt || fl(5, s);
              break;
            case 1:
              var g = s.stateNode;
              if (s.flags & 4 && !yt) if (c === null) g.componentDidMount();
              else {
                var w = s.elementType === s.type ? c.memoizedProps : ln(s.type, c.memoizedProps);
                g.componentDidUpdate(w, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var E = s.updateQueue;
              E !== null && Qw(s, E, g);
              break;
            case 3:
              var I = s.updateQueue;
              if (I !== null) {
                if (c = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    c = s.child.stateNode;
                    break;
                  case 1:
                    c = s.child.stateNode;
                }
                Qw(s, I, c);
              }
              break;
            case 5:
              var $ = s.stateNode;
              if (c === null && s.flags & 4) {
                c = $;
                var K = s.memoizedProps;
                switch (s.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    K.autoFocus && c.focus();
                    break;
                  case "img":
                    K.src && (c.src = K.src);
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
                    fe !== null && Qi(fe);
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
          yt || s.flags & 512 && Uf(s);
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
  function Qx(r) {
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
  function Zx(r) {
    for (; ve !== null; ) {
      var s = ve;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var c = s.return;
            try {
              fl(4, s);
            } catch (K) {
              Ze(s, c, K);
            }
            break;
          case 1:
            var g = s.stateNode;
            if (typeof g.componentDidMount == "function") {
              var w = s.return;
              try {
                g.componentDidMount();
              } catch (K) {
                Ze(s, w, K);
              }
            }
            var E = s.return;
            try {
              Uf(s);
            } catch (K) {
              Ze(s, E, K);
            }
            break;
          case 5:
            var I = s.return;
            try {
              Uf(s);
            } catch (K) {
              Ze(s, I, K);
            }
        }
      } catch (K) {
        Ze(s, s.return, K);
      }
      if (s === r) {
        ve = null;
        break;
      }
      var $ = s.sibling;
      if ($ !== null) {
        $.return = s.return, ve = $;
        break;
      }
      ve = s.return;
    }
  }
  var I2 = Math.ceil, dl = R.ReactCurrentDispatcher, Yf = R.ReactCurrentOwner, Jt = R.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, ht = 0, jt = 0, Zo = pr(0), it = 0, xs = null, Jr = 0, hl = 0, Xf = 0, bs = null, kt = null, Qf = 0, Jo = 1 / 0, Kn = null, pl = !1, Zf = null, xr = null, gl = !1, br = null, ml = 0, _s = 0, Jf = null, vl = -1, yl = 0;
  function bt() {
    return (Oe & 6) !== 0 ? Ke() : vl !== -1 ? vl : vl = Ke();
  }
  function _r(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && ht !== 0 ? ht & -ht : p2.transition !== null ? (yl === 0 && (yl = Ra()), yl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : ew(r.type)), r);
  }
  function fn(r, s, c, g) {
    if (50 < _s) throw _s = 0, Jf = null, Error(n(185));
    sr(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (hl |= c), it === 4 && Sr(r, ht)), Rt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Jo = Ke() + 500, Ua && mr()));
  }
  function Rt(r, s) {
    var c = r.callbackNode;
    Mc(r, s);
    var g = Ao(r, r === ut ? ht : 0);
    if (g === 0) c !== null && Sa(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && Sa(c), s === 1) r.tag === 0 ? h2(eb.bind(null, r)) : Fw(eb.bind(null, r)), u2(function() {
        (Oe & 6) === 0 && mr();
      }), c = null;
      else {
        switch (U0(g)) {
          case 1:
            c = Wi;
            break;
          case 4:
            c = Ca;
            break;
          case 16:
            c = Po;
            break;
          case 536870912:
            c = ka;
            break;
          default:
            c = Po;
        }
        c = lb(c, Jx.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function Jx(r, s) {
    if (vl = -1, yl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (ei() && r.callbackNode !== c) return null;
    var g = Ao(r, r === ut ? ht : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = wl(r, g);
    else {
      s = g;
      var w = Oe;
      Oe |= 2;
      var E = nb();
      (ut !== r || ht !== s) && (Kn = null, Jo = Ke() + 500, to(r, s));
      do
        try {
          O2();
          break;
        } catch ($) {
          tb(r, $);
        }
      while (!0);
      vf(), dl.current = E, Oe = w, tt !== null ? s = 0 : (ut = null, ht = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (w = Wr(r), w !== 0 && (g = w, s = ed(r, w))), s === 1) throw c = xs, to(r, 0), Sr(r, g), Rt(r, Ke()), c;
      if (s === 6) Sr(r, g);
      else {
        if (w = r.current.alternate, (g & 30) === 0 && !A2(w) && (s = wl(r, g), s === 2 && (E = Wr(r), E !== 0 && (g = E, s = ed(r, E))), s === 1)) throw c = xs, to(r, 0), Sr(r, g), Rt(r, Ke()), c;
        switch (r.finishedWork = w, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            no(r, kt, Kn);
            break;
          case 3:
            if (Sr(r, g), (g & 130023424) === g && (s = Qf + 500 - Ke(), 10 < s)) {
              if (Ao(r, 0) !== 0) break;
              if (w = r.suspendedLanes, (w & g) !== g) {
                bt(), r.pingedLanes |= r.suspendedLanes & w;
                break;
              }
              r.timeoutHandle = sf(no.bind(null, r, kt, Kn), s);
              break;
            }
            no(r, kt, Kn);
            break;
          case 4:
            if (Sr(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, w = -1; 0 < g; ) {
              var I = 31 - Mt(g);
              E = 1 << I, I = s[I], I > w && (w = I), g &= ~E;
            }
            if (g = w, g = Ke() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * I2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = sf(no.bind(null, r, kt, Kn), g);
              break;
            }
            no(r, kt, Kn);
            break;
          case 5:
            no(r, kt, Kn);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return Rt(r, Ke()), r.callbackNode === c ? Jx.bind(null, r) : null;
  }
  function ed(r, s) {
    var c = bs;
    return r.current.memoizedState.isDehydrated && (to(r, s).flags |= 256), r = wl(r, s), r !== 2 && (s = kt, kt = c, s !== null && td(s)), r;
  }
  function td(r) {
    kt === null ? kt = r : kt.push.apply(kt, r);
  }
  function A2(r) {
    for (var s = r; ; ) {
      if (s.flags & 16384) {
        var c = s.updateQueue;
        if (c !== null && (c = c.stores, c !== null)) for (var g = 0; g < c.length; g++) {
          var w = c[g], E = w.getSnapshot;
          w = w.value;
          try {
            if (!sn(E(), w)) return !1;
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
  function Sr(r, s) {
    for (s &= ~Xf, s &= ~hl, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - Mt(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function eb(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    ei();
    var s = Ao(r, 0);
    if ((s & 1) === 0) return Rt(r, Ke()), null;
    var c = wl(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = Wr(r);
      g !== 0 && (s = g, c = ed(r, g));
    }
    if (c === 1) throw c = xs, to(r, 0), Sr(r, s), Rt(r, Ke()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, no(r, kt, Kn), Rt(r, Ke()), null;
  }
  function nd(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Jo = Ke() + 500, Ua && mr());
    }
  }
  function eo(r) {
    br !== null && br.tag === 0 && (Oe & 6) === 0 && ei();
    var s = Oe;
    Oe |= 1;
    var c = Jt.transition, g = qe;
    try {
      if (Jt.transition = null, qe = 1, r) return r();
    } finally {
      qe = g, Jt.transition = c, Oe = s, (Oe & 6) === 0 && mr();
    }
  }
  function rd() {
    jt = Zo.current, $e(Zo);
  }
  function to(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, l2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (df(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && Ha();
          break;
        case 3:
          Yo(), $e(St), $e(gt), Cf();
          break;
        case 5:
          Sf(g);
          break;
        case 4:
          Yo();
          break;
        case 13:
          $e(Ye);
          break;
        case 19:
          $e(Ye);
          break;
        case 10:
          yf(g.type._context);
          break;
        case 22:
        case 23:
          rd();
      }
      c = c.return;
    }
    if (ut = r, tt = r = Er(r.current, null), ht = jt = s, it = 0, xs = null, Xf = hl = Jr = 0, kt = bs = null, Xr !== null) {
      for (s = 0; s < Xr.length; s++) if (c = Xr[s], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var w = g.next, E = c.pending;
        if (E !== null) {
          var I = E.next;
          E.next = w, g.next = I;
        }
        c.pending = g;
      }
      Xr = null;
    }
    return r;
  }
  function tb(r, s) {
    do {
      var c = tt;
      try {
        if (vf(), nl.current = sl, rl) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var w = g.queue;
            w !== null && (w.pending = null), g = g.next;
          }
          rl = !1;
        }
        if (Zr = 0, lt = ot = Xe = null, ps = !1, gs = 0, Yf.current = null, c === null || c.return === null) {
          it = 1, xs = s, tt = null;
          break;
        }
        e: {
          var E = r, I = c.return, $ = c, K = s;
          if (s = ht, $.flags |= 32768, K !== null && typeof K == "object" && typeof K.then == "function") {
            var oe = K, ue = $, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = kx(I);
            if (ge !== null) {
              ge.flags &= -257, Rx(ge, I, $, E, s), ge.mode & 1 && Cx(E, oe, s), s = ge, K = oe;
              var we = s.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(K), s.updateQueue = Se;
              } else we.add(K);
              break e;
            } else {
              if ((s & 1) === 0) {
                Cx(E, oe, s), od();
                break e;
              }
              K = Error(n(426));
            }
          } else if (Ve && $.mode & 1) {
            var et = kx(I);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), Rx(et, I, $, E, s), gf(Xo(K, $));
              break e;
            }
          }
          E = K = Xo(K, $), it !== 4 && (it = 2), bs === null ? bs = [E] : bs.push(E), E = I;
          do {
            switch (E.tag) {
              case 3:
                E.flags |= 65536, s &= -s, E.lanes |= s;
                var ne = Sx(E, K, s);
                Xw(E, ne);
                break e;
              case 1:
                $ = K;
                var J = E.type, re = E.stateNode;
                if ((E.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (xr === null || !xr.has(re)))) {
                  E.flags |= 65536, s &= -s, E.lanes |= s;
                  var he = Ex(E, $, s);
                  Xw(E, he);
                  break e;
                }
            }
            E = E.return;
          } while (E !== null);
        }
        ob(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nb() {
    var r = dl.current;
    return dl.current = sl, r === null ? sl : r;
  }
  function od() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Jr & 268435455) === 0 && (hl & 268435455) === 0 || Sr(ut, ht);
  }
  function wl(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = nb();
    (ut !== r || ht !== s) && (Kn = null, to(r, s));
    do
      try {
        M2();
        break;
      } catch (w) {
        tb(r, w);
      }
    while (!0);
    if (vf(), Oe = c, dl.current = g, tt !== null) throw Error(n(261));
    return ut = null, ht = 0, it;
  }
  function M2() {
    for (; tt !== null; ) rb(tt);
  }
  function O2() {
    for (; tt !== null && !Cc(); ) rb(tt);
  }
  function rb(r) {
    var s = ab(r.alternate, r, jt);
    r.memoizedProps = r.pendingProps, s === null ? ob(r) : tt = s, Yf.current = null;
  }
  function ob(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = k2(c, s, jt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = R2(c, s), c !== null) {
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
  function no(r, s, c) {
    var g = qe, w = Jt.transition;
    try {
      Jt.transition = null, qe = 1, L2(r, s, c, g);
    } finally {
      Jt.transition = w, qe = g;
    }
    return null;
  }
  function L2(r, s, c, g) {
    do
      ei();
    while (br !== null);
    if ((Oe & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var w = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var E = c.lanes | c.childLanes;
    if (gM(r, E), r === ut && (tt = ut = null, ht = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || gl || (gl = !0, lb(Po, function() {
      return ei(), null;
    })), E = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || E) {
      E = Jt.transition, Jt.transition = null;
      var I = qe;
      qe = 1;
      var $ = Oe;
      Oe |= 4, Yf.current = null, P2(r, c), Kx(c, r), t2(rf), Ta = !!nf, rf = nf = null, r.current = c, T2(c), Ea(), Oe = $, qe = I, Jt.transition = E;
    } else r.current = c;
    if (gl && (gl = !1, br = r, ml = w), E = r.pendingLanes, E === 0 && (xr = null), Nc(c.stateNode), Rt(r, Ke()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) w = s[c], g(w.value, { componentStack: w.stack, digest: w.digest });
    if (pl) throw pl = !1, r = Zf, Zf = null, r;
    return (ml & 1) !== 0 && r.tag !== 0 && ei(), E = r.pendingLanes, (E & 1) !== 0 ? r === Jf ? _s++ : (_s = 0, Jf = r) : _s = 0, mr(), null;
  }
  function ei() {
    if (br !== null) {
      var r = U0(ml), s = Jt.transition, c = qe;
      try {
        if (Jt.transition = null, qe = 16 > r ? 16 : r, br === null) var g = !1;
        else {
          if (r = br, br = null, ml = 0, (Oe & 6) !== 0) throw Error(n(331));
          var w = Oe;
          for (Oe |= 4, ve = r.current; ve !== null; ) {
            var E = ve, I = E.child;
            if ((ve.flags & 16) !== 0) {
              var $ = E.deletions;
              if ($ !== null) {
                for (var K = 0; K < $.length; K++) {
                  var oe = $[K];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, ue, E);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, ge = ue.return;
                      if (Vx(ue), ue === oe) {
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
                var we = E.alternate;
                if (we !== null) {
                  var Se = we.child;
                  if (Se !== null) {
                    we.child = null;
                    do {
                      var et = Se.sibling;
                      Se.sibling = null, Se = et;
                    } while (Se !== null);
                  }
                }
                ve = E;
              }
            }
            if ((E.subtreeFlags & 2064) !== 0 && I !== null) I.return = E, ve = I;
            else e: for (; ve !== null; ) {
              if (E = ve, (E.flags & 2048) !== 0) switch (E.tag) {
                case 0:
                case 11:
                case 15:
                  ws(9, E, E.return);
              }
              var ne = E.sibling;
              if (ne !== null) {
                ne.return = E.return, ve = ne;
                break e;
              }
              ve = E.return;
            }
          }
          var J = r.current;
          for (ve = J; ve !== null; ) {
            I = ve;
            var re = I.child;
            if ((I.subtreeFlags & 2064) !== 0 && re !== null) re.return = I, ve = re;
            else e: for (I = J; ve !== null; ) {
              if ($ = ve, ($.flags & 2048) !== 0) try {
                switch ($.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fl(9, $);
                }
              } catch (Ce) {
                Ze($, $.return, Ce);
              }
              if ($ === I) {
                ve = null;
                break e;
              }
              var he = $.sibling;
              if (he !== null) {
                he.return = $.return, ve = he;
                break e;
              }
              ve = $.return;
            }
          }
          if (Oe = w, mr(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(Hr, r);
          } catch {
          }
          g = !0;
        }
        return g;
      } finally {
        qe = c, Jt.transition = s;
      }
    }
    return !1;
  }
  function ib(r, s, c) {
    s = Xo(c, s), s = Sx(r, s, 1), r = yr(r, s, 1), s = bt(), r !== null && (sr(r, 1, s), Rt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) ib(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        ib(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (xr === null || !xr.has(g))) {
          r = Xo(c, r), r = Ex(s, r, 1), s = yr(s, r, 1), r = bt(), s !== null && (sr(s, 1, r), Rt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function D2(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = bt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (ht & c) === c && (it === 4 || it === 3 && (ht & 130023424) === ht && 500 > Ke() - Qf ? to(r, 0) : Xf |= c), Rt(r, s);
  }
  function sb(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Io, Io <<= 1, (Io & 130023424) === 0 && (Io = 4194304)));
    var c = bt();
    r = Wn(r, s), r !== null && (sr(r, s, c), Rt(r, c));
  }
  function j2(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), sb(r, c);
  }
  function q2(r, s) {
    var c = 0;
    switch (r.tag) {
      case 13:
        var g = r.stateNode, w = r.memoizedState;
        w !== null && (c = w.retryLane);
        break;
      case 19:
        g = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    g !== null && g.delete(s), sb(r, c);
  }
  var ab;
  ab = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || St.current) Ct = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Ct = !1, C2(r, s, c);
      Ct = (r.flags & 131072) !== 0;
    }
    else Ct = !1, Ve && (s.flags & 1048576) !== 0 && zw(s, Ka, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        ul(r, s), r = s.pendingProps;
        var w = Bo(s, gt.current);
        Ko(s, c), w = Nf(null, s, g, r, w, c);
        var E = Pf();
        return s.flags |= 1, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Et(g) ? (E = !0, Wa(s)) : E = !1, s.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, bf(s), w.updater = al, s.stateNode = w, w._reactInternals = s, Lf(s, g, r, c), s = Ff(null, s, g, !0, E, c)) : (s.tag = 0, Ve && E && ff(s), xt(null, s, w, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (ul(r, s), r = s.pendingProps, w = g._init, g = w(g._payload), s.type = g, w = s.tag = z2(g), r = ln(g, r), w) {
            case 0:
              s = qf(null, s, g, r, c);
              break e;
            case 1:
              s = Mx(null, s, g, r, c);
              break e;
            case 11:
              s = Nx(null, s, g, r, c);
              break e;
            case 14:
              s = Px(null, s, g, ln(g.type, r), c);
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
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), qf(r, s, g, w, c);
      case 1:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Mx(r, s, g, w, c);
      case 3:
        e: {
          if (Ox(s), r === null) throw Error(n(387));
          g = s.pendingProps, E = s.memoizedState, w = E.element, Yw(r, s), el(s, g, null, c);
          var I = s.memoizedState;
          if (g = I.element, E.isDehydrated) if (E = { element: g, isDehydrated: !1, cache: I.cache, pendingSuspenseBoundaries: I.pendingSuspenseBoundaries, transitions: I.transitions }, s.updateQueue.baseState = E, s.memoizedState = E, s.flags & 256) {
            w = Xo(Error(n(423)), s), s = Lx(r, s, g, c, w);
            break e;
          } else if (g !== w) {
            w = Xo(Error(n(424)), s), s = Lx(r, s, g, c, w);
            break e;
          } else for (Dt = hr(s.stateNode.containerInfo.firstChild), Lt = s, Ve = !0, an = null, c = Gw(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Wo(), g === w) {
              s = Gn(r, s, c);
              break e;
            }
            xt(r, s, g, c);
          }
          s = s.child;
        }
        return s;
      case 5:
        return Zw(s), r === null && pf(s), g = s.type, w = s.pendingProps, E = r !== null ? r.memoizedProps : null, I = w.children, of(g, w) ? I = null : E !== null && of(g, E) && (s.flags |= 32), Ax(r, s), xt(r, s, I, c), s.child;
      case 6:
        return r === null && pf(s), null;
      case 13:
        return Dx(r, s, c);
      case 4:
        return _f(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Uo(s, null, g, c) : xt(r, s, g, c), s.child;
      case 11:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Nx(r, s, g, w, c);
      case 7:
        return xt(r, s, s.pendingProps, c), s.child;
      case 8:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, w = s.pendingProps, E = s.memoizedProps, I = w.value, Fe(Qa, g._currentValue), g._currentValue = I, E !== null) if (sn(E.value, I)) {
            if (E.children === w.children && !St.current) {
              s = Gn(r, s, c);
              break e;
            }
          } else for (E = s.child, E !== null && (E.return = s); E !== null; ) {
            var $ = E.dependencies;
            if ($ !== null) {
              I = E.child;
              for (var K = $.firstContext; K !== null; ) {
                if (K.context === g) {
                  if (E.tag === 1) {
                    K = Un(-1, c & -c), K.tag = 2;
                    var oe = E.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? K.next = K : (K.next = ue.next, ue.next = K), oe.pending = K;
                    }
                  }
                  E.lanes |= c, K = E.alternate, K !== null && (K.lanes |= c), wf(
                    E.return,
                    c,
                    s
                  ), $.lanes |= c;
                  break;
                }
                K = K.next;
              }
            } else if (E.tag === 10) I = E.type === s.type ? null : E.child;
            else if (E.tag === 18) {
              if (I = E.return, I === null) throw Error(n(341));
              I.lanes |= c, $ = I.alternate, $ !== null && ($.lanes |= c), wf(I, c, s), I = E.sibling;
            } else I = E.child;
            if (I !== null) I.return = E;
            else for (I = E; I !== null; ) {
              if (I === s) {
                I = null;
                break;
              }
              if (E = I.sibling, E !== null) {
                E.return = I.return, I = E;
                break;
              }
              I = I.return;
            }
            E = I;
          }
          xt(r, s, w.children, c), s = s.child;
        }
        return s;
      case 9:
        return w = s.type, g = s.pendingProps.children, Ko(s, c), w = Qt(w), g = g(w), s.flags |= 1, xt(r, s, g, c), s.child;
      case 14:
        return g = s.type, w = ln(g, s.pendingProps), w = ln(g.type, w), Px(r, s, g, w, c);
      case 15:
        return Tx(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), ul(r, s), s.tag = 1, Et(g) ? (r = !0, Wa(s)) : r = !1, Ko(s, c), bx(s, g, w), Lf(s, g, w, c), Ff(null, s, g, !0, r, c);
      case 19:
        return qx(r, s, c);
      case 22:
        return Ix(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function lb(r, s) {
    return _a(r, s);
  }
  function F2(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(r, s, c, g) {
    return new F2(r, s, c, g);
  }
  function id(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function z2(r) {
    if (typeof r == "function") return id(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === H) return 11;
      if (r === B) return 14;
    }
    return 2;
  }
  function Er(r, s) {
    var c = r.alternate;
    return c === null ? (c = en(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function xl(r, s, c, g, w, E) {
    var I = 2;
    if (g = r, typeof r == "function") id(r) && (I = 1);
    else if (typeof r == "string") I = 5;
    else e: switch (r) {
      case A:
        return ro(c.children, w, E, s);
      case O:
        I = 8, w |= 8;
        break;
      case j:
        return r = en(12, c, s, w | 2), r.elementType = j, r.lanes = E, r;
      case Q:
        return r = en(13, c, s, w), r.elementType = Q, r.lanes = E, r;
      case L:
        return r = en(19, c, s, w), r.elementType = L, r.lanes = E, r;
      case U:
        return bl(c, w, E, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case G:
            I = 10;
            break e;
          case z:
            I = 9;
            break e;
          case H:
            I = 11;
            break e;
          case B:
            I = 14;
            break e;
          case q:
            I = 16, g = null;
            break e;
        }
        throw Error(n(130, r == null ? r : typeof r, ""));
    }
    return s = en(I, c, s, w), s.elementType = r, s.type = g, s.lanes = E, s;
  }
  function ro(r, s, c, g) {
    return r = en(7, r, g, s), r.lanes = c, r;
  }
  function bl(r, s, c, g) {
    return r = en(22, r, g, s), r.elementType = U, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function sd(r, s, c) {
    return r = en(6, r, null, s), r.lanes = c, r;
  }
  function ad(r, s, c) {
    return s = en(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function $2(r, s, c, g, w) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ui(0), this.expirationTimes = Ui(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ui(0), this.identifierPrefix = g, this.onRecoverableError = w, this.mutableSourceEagerHydrationData = null;
  }
  function ld(r, s, c, g, w, E, I, $, K) {
    return r = new $2(r, s, c, $, K), s === 1 ? (s = 1, E === !0 && (s |= 8)) : s = 0, E = en(3, null, null, s), r.current = E, E.stateNode = r, E.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bf(E), r;
  }
  function B2(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function ub(r) {
    if (!r) return gr;
    r = r._reactInternals;
    e: {
      if (Sn(r) !== r || r.tag !== 1) throw Error(n(170));
      var s = r;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (Et(s.type)) {
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
      if (Et(c)) return jw(r, c, s);
    }
    return s;
  }
  function cb(r, s, c, g, w, E, I, $, K) {
    return r = ld(c, g, !0, r, w, E, I, $, K), r.context = ub(null), c = r.current, g = bt(), w = _r(c), E = Un(g, w), E.callback = s ?? null, yr(c, E, w), r.current.lanes = w, sr(r, w, g), Rt(r, g), r;
  }
  function _l(r, s, c, g) {
    var w = s.current, E = bt(), I = _r(w);
    return c = ub(c), s.context === null ? s.context = c : s.pendingContext = c, s = Un(E, I), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = yr(w, s, I), r !== null && (fn(r, w, I, E), Ja(r, w, I)), I;
  }
  function Sl(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function fb(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function ud(r, s) {
    fb(r, s), (r = r.alternate) && fb(r, s);
  }
  function V2() {
    return null;
  }
  var db = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function cd(r) {
    this._internalRoot = r;
  }
  El.prototype.render = cd.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    _l(r, s, null, null);
  }, El.prototype.unmount = cd.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      eo(function() {
        _l(null, r, null, null);
      }), s[$n] = null;
    }
  };
  function El(r) {
    this._internalRoot = r;
  }
  El.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = Y0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < cr.length && s !== 0 && s < cr[c].priority; c++) ;
      cr.splice(c, 0, r), c === 0 && Z0(r);
    }
  };
  function fd(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Cl(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function hb() {
  }
  function H2(r, s, c, g, w) {
    if (w) {
      if (typeof g == "function") {
        var E = g;
        g = function() {
          var oe = Sl(I);
          E.call(oe);
        };
      }
      var I = cb(s, g, r, 0, null, !1, !1, "", hb);
      return r._reactRootContainer = I, r[$n] = I.current, ss(r.nodeType === 8 ? r.parentNode : r), eo(), I;
    }
    for (; w = r.lastChild; ) r.removeChild(w);
    if (typeof g == "function") {
      var $ = g;
      g = function() {
        var oe = Sl(K);
        $.call(oe);
      };
    }
    var K = ld(r, 0, !1, null, null, !1, !1, "", hb);
    return r._reactRootContainer = K, r[$n] = K.current, ss(r.nodeType === 8 ? r.parentNode : r), eo(function() {
      _l(s, K, c, g);
    }), K;
  }
  function kl(r, s, c, g, w) {
    var E = c._reactRootContainer;
    if (E) {
      var I = E;
      if (typeof w == "function") {
        var $ = w;
        w = function() {
          var K = Sl(I);
          $.call(K);
        };
      }
      _l(s, I, r, w);
    } else I = H2(c, s, r, w, g);
    return Sl(I);
  }
  G0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = En(s.pendingLanes);
          c !== 0 && (Oc(s, c | 1), Rt(s, Ke()), (Oe & 6) === 0 && (Jo = Ke() + 500, mr()));
        }
        break;
      case 13:
        eo(function() {
          var g = Wn(r, 1);
          if (g !== null) {
            var w = bt();
            fn(g, r, 1, w);
          }
        }), ud(r, 1);
    }
  }, Lc = function(r) {
    if (r.tag === 13) {
      var s = Wn(r, 134217728);
      if (s !== null) {
        var c = bt();
        fn(s, r, 134217728, c);
      }
      ud(r, 134217728);
    }
  }, K0 = function(r) {
    if (r.tag === 13) {
      var s = _r(r), c = Wn(r, s);
      if (c !== null) {
        var g = bt();
        fn(c, r, s, g);
      }
      ud(r, s);
    }
  }, Y0 = function() {
    return qe;
  }, X0 = function(r, s) {
    var c = qe;
    try {
      return qe = r, s();
    } finally {
      qe = c;
    }
  }, Fi = function(r, s, c) {
    switch (s) {
      case "input":
        if (Ee(r, c), s = c.name, c.type === "radio" && s != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < c.length; s++) {
            var g = c[s];
            if (g !== r && g.form === r.form) {
              var w = Va(g);
              if (!w) throw Error(n(90));
              de(g), Ee(g, w);
            }
          }
        }
        break;
      case "textarea":
        rn(r, c);
        break;
      case "select":
        s = c.value, s != null && pt(r, !!c.multiple, s, !1);
    }
  }, va = nd, ya = eo;
  var W2 = { usingClientEntryPoint: !1, Events: [us, zo, Va, ga, ma, nd] }, Ss = { findFiberByHostInstance: Ur, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, U2 = { bundleType: Ss.bundleType, version: Ss.version, rendererPackageName: Ss.rendererPackageName, rendererConfig: Ss.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: R.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = xa(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: Ss.findFiberByHostInstance || V2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber) try {
      Hr = Rl.inject(U2), Kt = Rl;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2, Nt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fd(s)) throw Error(n(200));
    return B2(r, s, null, c);
  }, Nt.createRoot = function(r, s) {
    if (!fd(r)) throw Error(n(299));
    var c = !1, g = "", w = db;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), s = ld(r, 1, !1, null, null, c, !1, g, w), r[$n] = s.current, ss(r.nodeType === 8 ? r.parentNode : r), new cd(s);
  }, Nt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = xa(s), r = r === null ? null : r.stateNode, r;
  }, Nt.flushSync = function(r) {
    return eo(r);
  }, Nt.hydrate = function(r, s, c) {
    if (!Cl(s)) throw Error(n(200));
    return kl(null, r, s, !0, c);
  }, Nt.hydrateRoot = function(r, s, c) {
    if (!fd(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, w = !1, E = "", I = db;
    if (c != null && (c.unstable_strictMode === !0 && (w = !0), c.identifierPrefix !== void 0 && (E = c.identifierPrefix), c.onRecoverableError !== void 0 && (I = c.onRecoverableError)), s = cb(s, null, r, 1, c ?? null, w, !1, E, I), r[$n] = s.current, ss(r), g) for (r = 0; r < g.length; r++) c = g[r], w = c._getVersion, w = w(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, w] : s.mutableSourceEagerHydrationData.push(
      c,
      w
    );
    return new El(s);
  }, Nt.render = function(r, s, c) {
    if (!Cl(s)) throw Error(n(200));
    return kl(null, r, s, !1, c);
  }, Nt.unmountComponentAtNode = function(r) {
    if (!Cl(r)) throw Error(n(40));
    return r._reactRootContainer ? (eo(function() {
      kl(null, null, r, !1, function() {
        r._reactRootContainer = null, r[$n] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = nd, Nt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!Cl(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return kl(r, s, c, !1, g);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var bb;
function VR() {
  if (bb) return pd.exports;
  bb = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), pd.exports = nO(), pd.exports;
}
var _b;
function rO() {
  if (_b) return Tl;
  _b = 1;
  var e = VR();
  return Tl.createRoot = e.createRoot, Tl.hydrateRoot = e.hydrateRoot, Tl;
}
var oO = rO();
let HR = k.createContext(
  /** @type {any} */
  null
);
function iO() {
  let e = k.useContext(HR);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function sO() {
  return iO().model;
}
function oo(e) {
  let t = sO(), n = k.useSyncExternalStore(
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
function aO(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = oO.createRoot(t);
    return i.render(
      k.createElement(
        k.StrictMode,
        null,
        k.createElement(
          HR.Provider,
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
var lO = { value: () => {
} };
function Ru() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Yl(n);
}
function Yl(e) {
  this._ = e;
}
function uO(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Yl.prototype = Ru.prototype = {
  constructor: Yl,
  on: function(e, t) {
    var n = this._, o = uO(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = cO(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = Sb(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Sb(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Yl(e);
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
function cO(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Sb(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = lO, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var sy = "http://www.w3.org/1999/xhtml";
const Eb = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: sy,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Nu(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Eb.hasOwnProperty(t) ? { space: Eb[t], local: e } : e;
}
function fO(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === sy && t.documentElement.namespaceURI === sy ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function dO(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function WR(e) {
  var t = Nu(e);
  return (t.local ? dO : fO)(t);
}
function hO() {
}
function zy(e) {
  return e == null ? hO : function() {
    return this.querySelector(e);
  };
}
function pO(e) {
  typeof e != "function" && (e = zy(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new Bt(o, this._parents);
}
function gO(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function mO() {
  return [];
}
function UR(e) {
  return e == null ? mO : function() {
    return this.querySelectorAll(e);
  };
}
function vO(e) {
  return function() {
    return gO(e.apply(this, arguments));
  };
}
function yO(e) {
  typeof e == "function" ? e = vO(e) : e = UR(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new Bt(o, i);
}
function GR(e) {
  return function() {
    return this.matches(e);
  };
}
function KR(e) {
  return function(t) {
    return t.matches(e);
  };
}
var wO = Array.prototype.find;
function xO(e) {
  return function() {
    return wO.call(this.children, e);
  };
}
function bO() {
  return this.firstElementChild;
}
function _O(e) {
  return this.select(e == null ? bO : xO(typeof e == "function" ? e : KR(e)));
}
var SO = Array.prototype.filter;
function EO() {
  return Array.from(this.children);
}
function CO(e) {
  return function() {
    return SO.call(this.children, e);
  };
}
function kO(e) {
  return this.selectAll(e == null ? EO : CO(typeof e == "function" ? e : KR(e)));
}
function RO(e) {
  typeof e != "function" && (e = GR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Bt(o, this._parents);
}
function YR(e) {
  return new Array(e.length);
}
function NO() {
  return new Bt(this._enter || this._groups.map(YR), this._parents);
}
function ru(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ru.prototype = {
  constructor: ru,
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
function PO(e) {
  return function() {
    return e;
  };
}
function TO(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new ru(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function IO(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new ru(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function AO(e) {
  return e.__data__;
}
function MO(e, t) {
  if (!arguments.length) return Array.from(this, AO);
  var n = t ? IO : TO, o = this._parents, i = this._groups;
  typeof e != "function" && (e = PO(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = OO(e.call(h, h && h.__data__, d, o)), S = v.length, y = u[d] = new Array(S), x = l[d] = new Array(S), b = f[d] = new Array(m);
    n(h, p, y, x, b, v, t);
    for (var C = 0, _ = 0, R, P; C < S; ++C)
      if (R = y[C]) {
        for (C >= _ && (_ = C + 1); !(P = x[_]) && ++_ < S; ) ;
        R._next = P || null;
      }
  }
  return l = new Bt(l, o), l._enter = u, l._exit = f, l;
}
function OO(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function LO() {
  return new Bt(this._exit || this._groups.map(YR), this._parents);
}
function DO(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function jO(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, S = 0; S < p; ++S)
      (v = d[S] || h[S]) && (m[S] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new Bt(u, this._parents);
}
function qO() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function FO(e) {
  e || (e = zO);
  function t(p, m) {
    return p && m ? e(p.__data__, m.__data__) : !p - !m;
  }
  for (var n = this._groups, o = n.length, i = new Array(o), a = 0; a < o; ++a) {
    for (var l = n[a], u = l.length, f = i[a] = new Array(u), d, h = 0; h < u; ++h)
      (d = l[h]) && (f[h] = d);
    f.sort(t);
  }
  return new Bt(i, this._parents).order();
}
function zO(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $O() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function BO() {
  return Array.from(this);
}
function VO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function HO() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function WO() {
  return !this.node();
}
function UO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function GO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function KO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function YO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function XO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function QO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ZO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function JO(e, t) {
  var n = Nu(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? KO : GO : typeof t == "function" ? n.local ? ZO : QO : n.local ? XO : YO)(n, t));
}
function XR(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function eL(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tL(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function nL(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function rL(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? eL : typeof t == "function" ? nL : tL)(e, t, n ?? "")) : pi(this.node(), e);
}
function pi(e, t) {
  return e.style.getPropertyValue(t) || XR(e).getComputedStyle(e, null).getPropertyValue(t);
}
function oL(e) {
  return function() {
    delete this[e];
  };
}
function iL(e, t) {
  return function() {
    this[e] = t;
  };
}
function sL(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function aL(e, t) {
  return arguments.length > 1 ? this.each((t == null ? oL : typeof t == "function" ? sL : iL)(e, t)) : this.node()[e];
}
function QR(e) {
  return e.trim().split(/^|\s+/);
}
function $y(e) {
  return e.classList || new ZR(e);
}
function ZR(e) {
  this._node = e, this._names = QR(e.getAttribute("class") || "");
}
ZR.prototype = {
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
function JR(e, t) {
  for (var n = $y(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function eN(e, t) {
  for (var n = $y(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function lL(e) {
  return function() {
    JR(this, e);
  };
}
function uL(e) {
  return function() {
    eN(this, e);
  };
}
function cL(e, t) {
  return function() {
    (t.apply(this, arguments) ? JR : eN)(this, e);
  };
}
function fL(e, t) {
  var n = QR(e + "");
  if (arguments.length < 2) {
    for (var o = $y(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? cL : t ? lL : uL)(n, t));
}
function dL() {
  this.textContent = "";
}
function hL(e) {
  return function() {
    this.textContent = e;
  };
}
function pL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function gL(e) {
  return arguments.length ? this.each(e == null ? dL : (typeof e == "function" ? pL : hL)(e)) : this.node().textContent;
}
function mL() {
  this.innerHTML = "";
}
function vL(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wL(e) {
  return arguments.length ? this.each(e == null ? mL : (typeof e == "function" ? yL : vL)(e)) : this.node().innerHTML;
}
function xL() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function bL() {
  return this.each(xL);
}
function _L() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function SL() {
  return this.each(_L);
}
function EL(e) {
  var t = typeof e == "function" ? e : WR(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function CL() {
  return null;
}
function kL(e, t) {
  var n = typeof e == "function" ? e : WR(e), o = t == null ? CL : typeof t == "function" ? t : zy(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function RL() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function NL() {
  return this.each(RL);
}
function PL() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function TL() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function IL(e) {
  return this.select(e ? TL : PL);
}
function AL(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ML(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function OL(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function LL(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function DL(e, t, n) {
  return function() {
    var o = this.__on, i, a = ML(t);
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
function jL(e, t, n) {
  var o = OL(e + ""), i, a = o.length, l;
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
  for (u = t ? DL : LL, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function tN(e, t, n) {
  var o = XR(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function qL(e, t) {
  return function() {
    return tN(this, e, t);
  };
}
function FL(e, t) {
  return function() {
    return tN(this, e, t.apply(this, arguments));
  };
}
function zL(e, t) {
  return this.each((typeof t == "function" ? FL : qL)(e, t));
}
function* $L() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var nN = [null];
function Bt(e, t) {
  this._groups = e, this._parents = t;
}
function Js() {
  return new Bt([[document.documentElement]], nN);
}
function BL() {
  return this;
}
Bt.prototype = Js.prototype = {
  constructor: Bt,
  select: pO,
  selectAll: yO,
  selectChild: _O,
  selectChildren: kO,
  filter: RO,
  data: MO,
  enter: NO,
  exit: LO,
  join: DO,
  merge: jO,
  selection: BL,
  order: qO,
  sort: FO,
  call: $O,
  nodes: BO,
  node: VO,
  size: HO,
  empty: WO,
  each: UO,
  attr: JO,
  style: rL,
  property: aL,
  classed: fL,
  text: gL,
  html: wL,
  raise: bL,
  lower: SL,
  append: EL,
  insert: kL,
  remove: NL,
  clone: IL,
  datum: AL,
  on: jL,
  dispatch: zL,
  [Symbol.iterator]: $L
};
function zt(e) {
  return typeof e == "string" ? new Bt([[document.querySelector(e)]], [document.documentElement]) : new Bt([[e]], nN);
}
function VL(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function hn(e, t) {
  if (e = VL(e), t === void 0 && (t = e.currentTarget), t) {
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
const HL = { passive: !1 }, Ds = { capture: !0, passive: !1 };
function vd(e) {
  e.stopImmediatePropagation();
}
function ci(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function rN(e) {
  var t = e.document.documentElement, n = zt(e).on("dragstart.drag", ci, Ds);
  "onselectstart" in t ? n.on("selectstart.drag", ci, Ds) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function oN(e, t) {
  var n = e.document.documentElement, o = zt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", ci, Ds), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Il = (e) => () => e;
function ay(e, {
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
ay.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function WL(e) {
  return !e.ctrlKey && !e.button;
}
function UL() {
  return this.parentNode;
}
function GL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function KL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function iN() {
  var e = WL, t = UL, n = GL, o = KL, i = {}, a = Ru("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(R) {
    R.on("mousedown.drag", v).filter(o).on("touchstart.drag", x).on("touchmove.drag", b, HL).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(R, P) {
    if (!(h || !e.call(this, R, P))) {
      var T = _(this, t.call(this, R, P), R, P, "mouse");
      T && (zt(R.view).on("mousemove.drag", S, Ds).on("mouseup.drag", y, Ds), rN(R.view), vd(R), d = !1, u = R.clientX, f = R.clientY, T("start", R));
    }
  }
  function S(R) {
    if (ci(R), !d) {
      var P = R.clientX - u, T = R.clientY - f;
      d = P * P + T * T > p;
    }
    i.mouse("drag", R);
  }
  function y(R) {
    zt(R.view).on("mousemove.drag mouseup.drag", null), oN(R.view, d), ci(R), i.mouse("end", R);
  }
  function x(R, P) {
    if (e.call(this, R, P)) {
      var T = R.changedTouches, A = t.call(this, R, P), O = T.length, j, G;
      for (j = 0; j < O; ++j)
        (G = _(this, A, R, P, T[j].identifier, T[j])) && (vd(R), G("start", R, T[j]));
    }
  }
  function b(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (ci(R), O("drag", R, P[A]));
  }
  function C(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (vd(R), O("end", R, P[A]));
  }
  function _(R, P, T, A, O, j) {
    var G = a.copy(), z = hn(j || T, P), H, Q, L;
    if ((L = n.call(R, new ay("beforestart", {
      sourceEvent: T,
      target: m,
      identifier: O,
      active: l,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return H = L.x - z[0] || 0, Q = L.y - z[1] || 0, function B(q, U, M) {
        var F = z, X;
        switch (q) {
          case "start":
            i[O] = B, X = l++;
            break;
          case "end":
            delete i[O], --l;
          // falls through
          case "drag":
            z = hn(M || U, P), X = l;
            break;
        }
        G.call(
          q,
          R,
          new ay(q, {
            sourceEvent: U,
            subject: L,
            target: m,
            identifier: O,
            active: X,
            x: z[0] + H,
            y: z[1] + Q,
            dx: z[0] - F[0],
            dy: z[1] - F[1],
            dispatch: G
          }),
          A
        );
      };
  }
  return m.filter = function(R) {
    return arguments.length ? (e = typeof R == "function" ? R : Il(!!R), m) : e;
  }, m.container = function(R) {
    return arguments.length ? (t = typeof R == "function" ? R : Il(R), m) : t;
  }, m.subject = function(R) {
    return arguments.length ? (n = typeof R == "function" ? R : Il(R), m) : n;
  }, m.touchable = function(R) {
    return arguments.length ? (o = typeof R == "function" ? R : Il(!!R), m) : o;
  }, m.on = function() {
    var R = a.on.apply(a, arguments);
    return R === a ? m : R;
  }, m.clickDistance = function(R) {
    return arguments.length ? (p = (R = +R) * R, m) : Math.sqrt(p);
  }, m;
}
function By(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function sN(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function ea() {
}
var js = 0.7, ou = 1 / js, fi = "\\s*([+-]?\\d+)\\s*", qs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", An = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", YL = /^#([0-9a-f]{3,8})$/, XL = new RegExp(`^rgb\\(${fi},${fi},${fi}\\)$`), QL = new RegExp(`^rgb\\(${An},${An},${An}\\)$`), ZL = new RegExp(`^rgba\\(${fi},${fi},${fi},${qs}\\)$`), JL = new RegExp(`^rgba\\(${An},${An},${An},${qs}\\)$`), eD = new RegExp(`^hsl\\(${qs},${An},${An}\\)$`), tD = new RegExp(`^hsla\\(${qs},${An},${An},${qs}\\)$`), Cb = {
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
By(ea, fo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: kb,
  // Deprecated! Use color.formatHex.
  formatHex: kb,
  formatHex8: nD,
  formatHsl: rD,
  formatRgb: Rb,
  toString: Rb
});
function kb() {
  return this.rgb().formatHex();
}
function nD() {
  return this.rgb().formatHex8();
}
function rD() {
  return aN(this).formatHsl();
}
function Rb() {
  return this.rgb().formatRgb();
}
function fo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = YL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Nb(t) : n === 3 ? new Pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Al(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Al(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = XL.exec(e)) ? new Pt(t[1], t[2], t[3], 1) : (t = QL.exec(e)) ? new Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ZL.exec(e)) ? Al(t[1], t[2], t[3], t[4]) : (t = JL.exec(e)) ? Al(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eD.exec(e)) ? Ib(t[1], t[2] / 100, t[3] / 100, 1) : (t = tD.exec(e)) ? Ib(t[1], t[2] / 100, t[3] / 100, t[4]) : Cb.hasOwnProperty(e) ? Nb(Cb[e]) : e === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function Nb(e) {
  return new Pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Al(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Pt(e, t, n, o);
}
function oD(e) {
  return e instanceof ea || (e = fo(e)), e ? (e = e.rgb(), new Pt(e.r, e.g, e.b, e.opacity)) : new Pt();
}
function ly(e, t, n, o) {
  return arguments.length === 1 ? oD(e) : new Pt(e, t, n, o ?? 1);
}
function Pt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
By(Pt, ly, sN(ea, {
  brighter(e) {
    return e = e == null ? ou : Math.pow(ou, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? js : Math.pow(js, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(lo(this.r), lo(this.g), lo(this.b), iu(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pb,
  // Deprecated! Use color.formatHex.
  formatHex: Pb,
  formatHex8: iD,
  formatRgb: Tb,
  toString: Tb
}));
function Pb() {
  return `#${ao(this.r)}${ao(this.g)}${ao(this.b)}`;
}
function iD() {
  return `#${ao(this.r)}${ao(this.g)}${ao(this.b)}${ao((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Tb() {
  const e = iu(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lo(this.r)}, ${lo(this.g)}, ${lo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function iu(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ao(e) {
  return e = lo(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ib(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new pn(e, t, n, o);
}
function aN(e) {
  if (e instanceof pn) return new pn(e.h, e.s, e.l, e.opacity);
  if (e instanceof ea || (e = fo(e)), !e) return new pn();
  if (e instanceof pn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new pn(l, u, f, e.opacity);
}
function sD(e, t, n, o) {
  return arguments.length === 1 ? aN(e) : new pn(e, t, n, o ?? 1);
}
function pn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
By(pn, sD, sN(ea, {
  brighter(e) {
    return e = e == null ? ou : Math.pow(ou, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? js : Math.pow(js, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Pt(
      yd(e >= 240 ? e - 240 : e + 120, i, o),
      yd(e, i, o),
      yd(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new pn(Ab(this.h), Ml(this.s), Ml(this.l), iu(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = iu(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ab(this.h)}, ${Ml(this.s) * 100}%, ${Ml(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ab(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ml(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function yd(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Vy = (e) => () => e;
function aD(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function lD(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function uD(e) {
  return (e = +e) == 1 ? lN : function(t, n) {
    return n - t ? lD(t, n, e) : Vy(isNaN(t) ? n : t);
  };
}
function lN(e, t) {
  var n = t - e;
  return n ? aD(e, n) : Vy(isNaN(e) ? t : e);
}
const su = (function e(t) {
  var n = uD(t);
  function o(i, a) {
    var l = n((i = ly(i)).r, (a = ly(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = lN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function cD(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function fD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function dD(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = Os(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function hD(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return n.setTime(e * (1 - o) + t * o), n;
  };
}
function Pn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function pD(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Os(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var uy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wd = new RegExp(uy.source, "g");
function gD(e) {
  return function() {
    return e;
  };
}
function mD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function uN(e, t) {
  var n = uy.lastIndex = wd.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = uy.exec(e)) && (i = wd.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Pn(o, i) })), n = wd.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? mD(f[0].x) : gD(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function Os(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? Vy(t) : (n === "number" ? Pn : n === "string" ? (o = fo(t)) ? (t = o, su) : uN : t instanceof fo ? su : t instanceof Date ? hD : fD(t) ? cD : Array.isArray(t) ? dD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? pD : Pn)(e, t);
}
var Mb = 180 / Math.PI, cy = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function cN(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * Mb,
    skewX: Math.atan(f) * Mb,
    scaleX: l,
    scaleY: u
  };
}
var Ol;
function vD(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? cy : cN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function yD(e) {
  return e == null || (Ol || (Ol = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ol.setAttribute("transform", e), !(e = Ol.transform.baseVal.consolidate())) ? cy : (e = e.matrix, cN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fN(e, t, n, o) {
  function i(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, p, m, v, S) {
    if (d !== p || h !== m) {
      var y = v.push("translate(", null, t, null, n);
      S.push({ i: y - 4, x: Pn(d, p) }, { i: y - 2, x: Pn(h, m) });
    } else (p || m) && v.push("translate(" + p + t + m + n);
  }
  function l(d, h, p, m) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), m.push({ i: p.push(i(p) + "rotate(", null, o) - 2, x: Pn(d, h) })) : h && p.push(i(p) + "rotate(" + h + o);
  }
  function u(d, h, p, m) {
    d !== h ? m.push({ i: p.push(i(p) + "skewX(", null, o) - 2, x: Pn(d, h) }) : h && p.push(i(p) + "skewX(" + h + o);
  }
  function f(d, h, p, m, v, S) {
    if (d !== p || h !== m) {
      var y = v.push(i(v) + "scale(", null, ",", null, ")");
      S.push({ i: y - 4, x: Pn(d, p) }, { i: y - 2, x: Pn(h, m) });
    } else (p !== 1 || m !== 1) && v.push(i(v) + "scale(" + p + "," + m + ")");
  }
  return function(d, h) {
    var p = [], m = [];
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, p, m), l(d.rotate, h.rotate, p, m), u(d.skewX, h.skewX, p, m), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, p, m), d = h = null, function(v) {
      for (var S = -1, y = m.length, x; ++S < y; ) p[(x = m[S]).i] = x.x(v);
      return p.join("");
    };
  };
}
var wD = fN(vD, "px, ", "px)", "deg)"), xD = fN(yD, ", ", ")", ")"), bD = 1e-12;
function Ob(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function _D(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function SD(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Xl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, S = p - f, y = v * v + S * S, x, b;
    if (y < bD)
      b = Math.log(m / d) / t, x = function(A) {
        return [
          u + A * v,
          f + A * S,
          d * Math.exp(t * A * b)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (m * m - d * d + o * y) / (2 * d * n * C), R = (m * m - d * d - o * y) / (2 * m * n * C), P = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(R * R + 1) - R);
      b = (T - P) / t, x = function(A) {
        var O = A * b, j = Ob(P), G = d / (n * C) * (j * SD(t * O + P) - _D(P));
        return [
          u + G * v,
          f + G * S,
          d * j / Ob(t * O + P)
        ];
      };
    }
    return x.duration = b * 1e3 * t / Math.SQRT2, x;
  }
  return i.rho = function(a) {
    var l = Math.max(1e-3, +a), u = l * l, f = u * u;
    return e(l, u, f);
  }, i;
})(Math.SQRT2, 2, 4);
var gi = 0, Ns = 0, Cs = 0, dN = 1e3, au, Ps, lu = 0, ho = 0, Pu = 0, Fs = typeof performance == "object" && performance.now ? performance : Date, hN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hy() {
  return ho || (hN(ED), ho = Fs.now() + Pu);
}
function ED() {
  ho = 0;
}
function uu() {
  this._call = this._time = this._next = null;
}
uu.prototype = pN.prototype = {
  constructor: uu,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hy() : +n) + (t == null ? 0 : +t), !this._next && Ps !== this && (Ps ? Ps._next = this : au = this, Ps = this), this._call = e, this._time = n, fy();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, fy());
  }
};
function pN(e, t, n) {
  var o = new uu();
  return o.restart(e, t, n), o;
}
function CD() {
  Hy(), ++gi;
  for (var e = au, t; e; )
    (t = ho - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --gi;
}
function Lb() {
  ho = (lu = Fs.now()) + Pu, gi = Ns = 0;
  try {
    CD();
  } finally {
    gi = 0, RD(), ho = 0;
  }
}
function kD() {
  var e = Fs.now(), t = e - lu;
  t > dN && (Pu -= t, lu = e);
}
function RD() {
  for (var e, t = au, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : au = n);
  Ps = e, fy(o);
}
function fy(e) {
  if (!gi) {
    Ns && (Ns = clearTimeout(Ns));
    var t = e - ho;
    t > 24 ? (e < 1 / 0 && (Ns = setTimeout(Lb, e - Fs.now() - Pu)), Cs && (Cs = clearInterval(Cs))) : (Cs || (lu = Fs.now(), Cs = setInterval(kD, dN)), gi = 1, hN(Lb));
  }
}
function Db(e, t, n) {
  var o = new uu();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var ND = Ru("start", "end", "cancel", "interrupt"), PD = [], gN = 0, jb = 1, dy = 2, Ql = 3, qb = 4, hy = 5, Zl = 6;
function Tu(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  TD(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ND,
    tween: PD,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: gN
  });
}
function Wy(e, t) {
  var n = xn(e, t);
  if (n.state > gN) throw new Error("too late; already scheduled");
  return n;
}
function Dn(e, t) {
  var n = xn(e, t);
  if (n.state > Ql) throw new Error("too late; already running");
  return n;
}
function xn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function TD(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = pN(a, 0, n.time);
  function a(d) {
    n.state = jb, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== jb) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Ql) return Db(l);
        v.state === qb ? (v.state = Zl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Zl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (Db(function() {
      n.state === Ql && (n.state = qb, n.timer.restart(u, n.delay, n.time), u(d));
    }), n.state = dy, n.on.call("start", e, e.__data__, n.index, n.group), n.state === dy) {
      for (n.state = Ql, i = new Array(m = n.tween.length), h = 0, p = -1; h < m; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = v);
      i.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = hy, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(e, h);
    n.state === hy && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Zl, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Jl(e, t) {
  var n = e.__transition, o, i, a = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        a = !1;
        continue;
      }
      i = o.state > dy && o.state < hy, o.state = Zl, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    a && delete e.__transition;
  }
}
function ID(e) {
  return this.each(function() {
    Jl(this, e);
  });
}
function AD(e, t) {
  var n, o;
  return function() {
    var i = Dn(this, e), a = i.tween;
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
function MD(e, t, n) {
  var o, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = Dn(this, e), l = a.tween;
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
function OD(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = xn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? AD : MD)(n, e, t));
}
function Uy(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = Dn(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return xn(i, o).value[t];
  };
}
function mN(e, t) {
  var n;
  return (typeof t == "number" ? Pn : t instanceof fo ? su : (n = fo(t)) ? (t = n, su) : uN)(e, t);
}
function LD(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function DD(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function jD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function qD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function FD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function zD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function $D(e, t) {
  var n = Nu(e), o = n === "transform" ? xD : mN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zD : FD)(n, o, Uy(this, "attr." + e, t)) : t == null ? (n.local ? DD : LD)(n) : (n.local ? qD : jD)(n, o, t));
}
function BD(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function VD(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function HD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && VD(e, a)), n;
  }
  return i._value = t, i;
}
function WD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && BD(e, a)), n;
  }
  return i._value = t, i;
}
function UD(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = Nu(e);
  return this.tween(n, (o.local ? HD : WD)(o, t));
}
function GD(e, t) {
  return function() {
    Wy(this, e).delay = +t.apply(this, arguments);
  };
}
function KD(e, t) {
  return t = +t, function() {
    Wy(this, e).delay = t;
  };
}
function YD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? GD : KD)(t, e)) : xn(this.node(), t).delay;
}
function XD(e, t) {
  return function() {
    Dn(this, e).duration = +t.apply(this, arguments);
  };
}
function QD(e, t) {
  return t = +t, function() {
    Dn(this, e).duration = t;
  };
}
function ZD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? XD : QD)(t, e)) : xn(this.node(), t).duration;
}
function JD(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Dn(this, e).ease = t;
  };
}
function ej(e) {
  var t = this._id;
  return arguments.length ? this.each(JD(t, e)) : xn(this.node(), t).ease;
}
function tj(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Dn(this, e).ease = n;
  };
}
function nj(e) {
  if (typeof e != "function") throw new Error();
  return this.each(tj(this._id, e));
}
function rj(e) {
  typeof e != "function" && (e = GR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Zn(o, this._parents, this._name, this._id);
}
function oj(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Zn(l, this._parents, this._name, this._id);
}
function ij(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function sj(e, t, n) {
  var o, i, a = ij(t) ? Wy : Dn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function aj(e, t) {
  var n = this._id;
  return arguments.length < 2 ? xn(this.node(), n).on.on(e) : this.each(sj(n, e, t));
}
function lj(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function uj() {
  return this.on("end.remove", lj(this._id));
}
function cj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = zy(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, Tu(d[m], t, n, m, d, xn(h, n)));
  return new Zn(a, this._parents, t, n);
}
function fj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = UR(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, S = xn(h, n), y = 0, x = m.length; y < x; ++y)
          (v = m[y]) && Tu(v, t, n, y, m, S);
        a.push(m), l.push(h);
      }
  return new Zn(a, l, t, n);
}
var dj = Js.prototype.constructor;
function hj() {
  return new dj(this._groups, this._parents);
}
function pj(e, t) {
  var n, o, i;
  return function() {
    var a = pi(this, e), l = (this.style.removeProperty(e), pi(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function vN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = pi(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function mj(e, t, n) {
  var o, i, a;
  return function() {
    var l = pi(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), pi(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function vj(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Dn(this, e), d = f.on, h = f.value[a] == null ? u || (u = vN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function yj(e, t, n) {
  var o = (e += "") == "transform" ? wD : mN;
  return t == null ? this.styleTween(e, pj(e, o)).on("end.style." + e, vN(e)) : typeof t == "function" ? this.styleTween(e, mj(e, o, Uy(this, "style." + e, t))).each(vj(this._id, e)) : this.styleTween(e, gj(e, o, t), n).on("end.style." + e, null);
}
function wj(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function xj(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && wj(e, l, n)), o;
  }
  return a._value = t, a;
}
function bj(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, xj(e, t, n ?? ""));
}
function _j(e) {
  return function() {
    this.textContent = e;
  };
}
function Sj(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Ej(e) {
  return this.tween("text", typeof e == "function" ? Sj(Uy(this, "text", e)) : _j(e == null ? "" : e + ""));
}
function Cj(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function kj(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Cj(i)), t;
  }
  return o._value = e, o;
}
function Rj(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, kj(e));
}
function Nj() {
  for (var e = this._name, t = this._id, n = yN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = xn(f, t);
        Tu(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Zn(o, this._parents, e, n);
}
function Pj() {
  var e, t, n = this, o = n._id, i = n.size();
  return new Promise(function(a, l) {
    var u = { value: l }, f = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var d = Dn(this, o), h = d.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(u), t._.interrupt.push(u), t._.end.push(f)), d.on = t;
    }), i === 0 && a();
  });
}
var Tj = 0;
function Zn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function yN() {
  return ++Tj;
}
var Yn = Js.prototype;
Zn.prototype = {
  constructor: Zn,
  select: cj,
  selectAll: fj,
  selectChild: Yn.selectChild,
  selectChildren: Yn.selectChildren,
  filter: rj,
  merge: oj,
  selection: hj,
  transition: Nj,
  call: Yn.call,
  nodes: Yn.nodes,
  node: Yn.node,
  size: Yn.size,
  empty: Yn.empty,
  each: Yn.each,
  on: aj,
  attr: $D,
  attrTween: UD,
  style: yj,
  styleTween: bj,
  text: Ej,
  textTween: Rj,
  remove: uj,
  tween: OD,
  delay: YD,
  duration: ZD,
  ease: ej,
  easeVarying: nj,
  end: Pj,
  [Symbol.iterator]: Yn[Symbol.iterator]
};
function Ij(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Aj = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ij
};
function Mj(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Oj(e) {
  var t, n;
  e instanceof Zn ? (t = e._id, e = e._name) : (t = yN(), (n = Aj).time = Hy(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && Tu(f, e, t, d, l, n || Mj(f, t));
  return new Zn(o, this._parents, e, t);
}
Js.prototype.interrupt = ID;
Js.prototype.transition = Oj;
const Ll = (e) => () => e;
function Lj(e, {
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
function Qn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Qn.prototype = {
  constructor: Qn,
  scale: function(e) {
    return e === 1 ? this : new Qn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Qn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Iu = new Qn(1, 0, 0);
wN.prototype = Qn.prototype;
function wN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Iu;
  return e.__zoom;
}
function xd(e) {
  e.stopImmediatePropagation();
}
function ks(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Dj(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function jj() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Fb() {
  return this.__zoom || Iu;
}
function qj(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Fj() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function zj(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function xN() {
  var e = Dj, t = jj, n = zj, o = qj, i = Fj, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Xl, d = Ru("start", "zoom", "end"), h, p, m, v = 500, S = 150, y = 0, x = 10;
  function b(L) {
    L.property("__zoom", Fb).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", j).on("dblclick.zoom", G).filter(i).on("touchstart.zoom", z).on("touchmove.zoom", H).on("touchend.zoom touchcancel.zoom", Q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(L, B, q, U) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Fb), L !== M ? P(L, B, q, U) : M.interrupt().each(function() {
      T(this, arguments).event(U).start().zoom(null, typeof B == "function" ? B.apply(this, arguments) : B).end();
    });
  }, b.scaleBy = function(L, B, q, U) {
    b.scaleTo(L, function() {
      var M = this.__zoom.k, F = typeof B == "function" ? B.apply(this, arguments) : B;
      return M * F;
    }, q, U);
  }, b.scaleTo = function(L, B, q, U) {
    b.transform(L, function() {
      var M = t.apply(this, arguments), F = this.__zoom, X = q == null ? R(M) : typeof q == "function" ? q.apply(this, arguments) : q, D = F.invert(X), W = typeof B == "function" ? B.apply(this, arguments) : B;
      return n(_(C(F, W), X, D), M, l);
    }, q, U);
  }, b.translateBy = function(L, B, q, U) {
    b.transform(L, function() {
      return n(this.__zoom.translate(
        typeof B == "function" ? B.apply(this, arguments) : B,
        typeof q == "function" ? q.apply(this, arguments) : q
      ), t.apply(this, arguments), l);
    }, null, U);
  }, b.translateTo = function(L, B, q, U, M) {
    b.transform(L, function() {
      var F = t.apply(this, arguments), X = this.__zoom, D = U == null ? R(F) : typeof U == "function" ? U.apply(this, arguments) : U;
      return n(Iu.translate(D[0], D[1]).scale(X.k).translate(
        typeof B == "function" ? -B.apply(this, arguments) : -B,
        typeof q == "function" ? -q.apply(this, arguments) : -q
      ), F, l);
    }, U, M);
  };
  function C(L, B) {
    return B = Math.max(a[0], Math.min(a[1], B)), B === L.k ? L : new Qn(B, L.x, L.y);
  }
  function _(L, B, q) {
    var U = B[0] - q[0] * L.k, M = B[1] - q[1] * L.k;
    return U === L.x && M === L.y ? L : new Qn(L.k, U, M);
  }
  function R(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function P(L, B, q, U) {
    L.on("start.zoom", function() {
      T(this, arguments).event(U).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(U).end();
    }).tween("zoom", function() {
      var M = this, F = arguments, X = T(M, F).event(U), D = t.apply(M, F), W = q == null ? R(D) : typeof q == "function" ? q.apply(M, F) : q, ie = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), V = M.__zoom, Z = typeof B == "function" ? B.apply(M, F) : B, ee = f(V.invert(W).concat(ie / V.k), Z.invert(W).concat(ie / Z.k));
      return function(Y) {
        if (Y === 1) Y = Z;
        else {
          var te = ee(Y), se = ie / te[2];
          Y = new Qn(se, W[0] - te[0] * se, W[1] - te[1] * se);
        }
        X.zoom(null, Y);
      };
    });
  }
  function T(L, B, q) {
    return !q && L.__zooming || new A(L, B);
  }
  function A(L, B) {
    this.that = L, this.args = B, this.active = 0, this.sourceEvent = null, this.extent = t.apply(L, B), this.taps = 0;
  }
  A.prototype = {
    event: function(L) {
      return L && (this.sourceEvent = L), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(L, B) {
      return this.mouse && L !== "mouse" && (this.mouse[1] = B.invert(this.mouse[0])), this.touch0 && L !== "touch" && (this.touch0[1] = B.invert(this.touch0[0])), this.touch1 && L !== "touch" && (this.touch1[1] = B.invert(this.touch1[0])), this.that.__zoom = B, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(L) {
      var B = zt(this.that).datum();
      d.call(
        L,
        this.that,
        new Lj(L, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: d
        }),
        B
      );
    }
  };
  function O(L, ...B) {
    if (!e.apply(this, arguments)) return;
    var q = T(this, B).event(L), U = this.__zoom, M = Math.max(a[0], Math.min(a[1], U.k * Math.pow(2, o.apply(this, arguments)))), F = hn(L);
    if (q.wheel)
      (q.mouse[0][0] !== F[0] || q.mouse[0][1] !== F[1]) && (q.mouse[1] = U.invert(q.mouse[0] = F)), clearTimeout(q.wheel);
    else {
      if (U.k === M) return;
      q.mouse = [F, U.invert(F)], Jl(this), q.start();
    }
    ks(L), q.wheel = setTimeout(X, S), q.zoom("mouse", n(_(C(U, M), q.mouse[0], q.mouse[1]), q.extent, l));
    function X() {
      q.wheel = null, q.end();
    }
  }
  function j(L, ...B) {
    if (m || !e.apply(this, arguments)) return;
    var q = L.currentTarget, U = T(this, B, !0).event(L), M = zt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), F = hn(L, q), X = L.clientX, D = L.clientY;
    rN(L.view), xd(L), U.mouse = [F, this.__zoom.invert(F)], Jl(this), U.start();
    function W(V) {
      if (ks(V), !U.moved) {
        var Z = V.clientX - X, ee = V.clientY - D;
        U.moved = Z * Z + ee * ee > y;
      }
      U.event(V).zoom("mouse", n(_(U.that.__zoom, U.mouse[0] = hn(V, q), U.mouse[1]), U.extent, l));
    }
    function ie(V) {
      M.on("mousemove.zoom mouseup.zoom", null), oN(V.view, U.moved), ks(V), U.event(V).end();
    }
  }
  function G(L, ...B) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom, U = hn(L.changedTouches ? L.changedTouches[0] : L, this), M = q.invert(U), F = q.k * (L.shiftKey ? 0.5 : 2), X = n(_(C(q, F), U, M), t.apply(this, B), l);
      ks(L), u > 0 ? zt(this).transition().duration(u).call(P, X, U, L) : zt(this).call(b.transform, X, U, L);
    }
  }
  function z(L, ...B) {
    if (e.apply(this, arguments)) {
      var q = L.touches, U = q.length, M = T(this, B, L.changedTouches.length === U).event(L), F, X, D, W;
      for (xd(L), X = 0; X < U; ++X)
        D = q[X], W = hn(D, this), W = [W, this.__zoom.invert(W), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, F = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), F && (M.taps < 2 && (p = W[0], h = setTimeout(function() {
        h = null;
      }, v)), Jl(this), M.start());
    }
  }
  function H(L, ...B) {
    if (this.__zooming) {
      var q = T(this, B).event(L), U = L.changedTouches, M = U.length, F, X, D, W;
      for (ks(L), F = 0; F < M; ++F)
        X = U[F], D = hn(X, this), q.touch0 && q.touch0[2] === X.identifier ? q.touch0[0] = D : q.touch1 && q.touch1[2] === X.identifier && (q.touch1[0] = D);
      if (X = q.that.__zoom, q.touch1) {
        var ie = q.touch0[0], V = q.touch0[1], Z = q.touch1[0], ee = q.touch1[1], Y = (Y = Z[0] - ie[0]) * Y + (Y = Z[1] - ie[1]) * Y, te = (te = ee[0] - V[0]) * te + (te = ee[1] - V[1]) * te;
        X = C(X, Math.sqrt(Y / te)), D = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [(V[0] + ee[0]) / 2, (V[1] + ee[1]) / 2];
      } else if (q.touch0) D = q.touch0[0], W = q.touch0[1];
      else return;
      q.zoom("touch", n(_(X, D, W), q.extent, l));
    }
  }
  function Q(L, ...B) {
    if (this.__zooming) {
      var q = T(this, B).event(L), U = L.changedTouches, M = U.length, F, X;
      for (xd(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), F = 0; F < M; ++F)
        X = U[F], q.touch0 && q.touch0[2] === X.identifier ? delete q.touch0 : q.touch1 && q.touch1[2] === X.identifier && delete q.touch1;
      if (q.touch1 && !q.touch0 && (q.touch0 = q.touch1, delete q.touch1), q.touch0) q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (q.end(), q.taps === 2 && (X = hn(X, this), Math.hypot(p[0] - X[0], p[1] - X[1]) < x)) {
        var D = zt(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : Ll(+L), b) : o;
  }, b.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : Ll(!!L), b) : e;
  }, b.touchable = function(L) {
    return arguments.length ? (i = typeof L == "function" ? L : Ll(!!L), b) : i;
  }, b.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : Ll([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), b) : t;
  }, b.scaleExtent = function(L) {
    return arguments.length ? (a[0] = +L[0], a[1] = +L[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(L) {
    return arguments.length ? (l[0][0] = +L[0][0], l[1][0] = +L[1][0], l[0][1] = +L[0][1], l[1][1] = +L[1][1], b) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, b.constrain = function(L) {
    return arguments.length ? (n = L, b) : n;
  }, b.duration = function(L) {
    return arguments.length ? (u = +L, b) : u;
  }, b.interpolate = function(L) {
    return arguments.length ? (f = L, b) : f;
  }, b.on = function() {
    var L = d.on.apply(d, arguments);
    return L === d ? b : L;
  }, b.clickDistance = function(L) {
    return arguments.length ? (y = (L = +L) * L, b) : Math.sqrt(y);
  }, b.tapDistance = function(L) {
    return arguments.length ? (x = +L, b) : x;
  }, b;
}
const On = {
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
}, zs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], bN = ["Enter", " ", "Escape"], _N = {
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
var mi;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(mi || (mi = {}));
var uo;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(uo || (uo = {}));
var $s;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})($s || ($s = {}));
const SN = {
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
var Tr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tr || (Tr = {}));
var cu;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(cu || (cu = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const zb = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function EN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const CN = (e) => "id" in e && "source" in e && "target" in e, $j = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Gy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ta = (e, t = [0, 0]) => {
  const { width: n, height: o } = tr(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, Bj = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : Gy(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? fu(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Au(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Mu(n);
}, na = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Au(n, fu(i)), o = !0);
  }), o ? Mu(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ky = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...oa(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, S = h.height ?? d.height ?? d.initialHeight ?? null, y = Bs(u, yi(d)), x = (v ?? 0) * (S ?? 0), b = a && y > 0;
    (!d.internals.handleBounds || b || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, Vj = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function Hj(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function Wj({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = Hj(e, l), f = na(u), d = Yy(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function kN({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
  const l = n.get(e), u = l.parentId ? n.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let p = l.extent || i;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", On.error005());
    else {
      const v = u.measured.width, S = u.measured.height;
      v && S && (p = [
        [f, d],
        [f + v, d + S]
      ]);
    }
  else u && wi(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = wi(p) ? po(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", On.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function Uj({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), S = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || S) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = Vj(l, f);
  for (const m of f)
    u.has(m.id) && !h.find((S) => S.id === m.id) && h.push(m);
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
const vi = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), po = (e = { x: 0, y: 0 }, t, n) => ({
  x: vi(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: vi(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function RN(e, t, n) {
  const { width: o, height: i } = tr(n), { x: a, y: l } = n.internals.positionAbsolute;
  return po(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const $b = (e, t, n) => e < t ? vi(Math.abs(e - t), 1, t) / t : e > n ? -vi(Math.abs(e - n), 1, t) / t : 0, NN = (e, t, n = 15, o = 40) => {
  const i = $b(e.x, o, t.width - o) * n, a = $b(e.y, o, t.height - o) * n;
  return [i, a];
}, Au = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), py = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Mu = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), yi = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Gy(e) ? e.internals.positionAbsolute : ta(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, fu = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Gy(e) ? e.internals.positionAbsolute : ta(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, PN = (e, t) => Mu(Au(py(e), py(t))), Bs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, Bb = (e) => gn(e.width) && gn(e.height) && gn(e.x) && gn(e.y), gn = (e) => !isNaN(e) && isFinite(e), Gj = (e, t) => {
}, ra = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), oa = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? ra(u, l) : u;
}, du = ({ x: e, y: t }, [n, o, i]) => ({
  x: e * i + n,
  y: t * i + o
});
function ti(e, t) {
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
function Kj(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = ti(e, n), i = ti(e, t);
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
    const o = ti(e.top ?? e.y ?? 0, n), i = ti(e.bottom ?? e.y ?? 0, n), a = ti(e.left ?? e.x ?? 0, t), l = ti(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: i, left: a, x: a + l, y: o + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Yj(e, t, n, o, i, a) {
  const { x: l, y: u } = du(e, [t, n, o]), { x: f, y: d } = du({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const Yy = (e, t, n, o, i, a) => {
  const l = Kj(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = vi(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, S = n / 2 - m * h, y = Yj(e, v, S, h, t, n), x = {
    left: Math.min(y.left - l.left, 0),
    top: Math.min(y.top - l.top, 0),
    right: Math.min(y.right - l.right, 0),
    bottom: Math.min(y.bottom - l.bottom, 0)
  };
  return {
    x: v - x.left + x.right,
    y: S - x.top + x.bottom,
    zoom: h
  };
}, Vs = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function wi(e) {
  return e != null && e !== "parent";
}
function tr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function TN(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function IN(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function Vb(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Xj() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function Qj(e) {
  return { ..._N, ...e || {} };
}
function Ls(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = mn(e), u = oa({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? ra(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const Xy = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), AN = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Zj = ["INPUT", "SELECT", "TEXTAREA"];
function MN(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Zj.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ON = (e) => "clientX" in e, mn = (e, t) => {
  var a, l;
  const n = ON(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Hb = (e, t, n, o, i) => {
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
      ...Xy(l)
    };
  });
};
function LN({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Dl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Wb({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - Dl(t - o, a), n];
    case ye.Right:
      return [t + Dl(o - t, a), n];
    case ye.Top:
      return [t, n - Dl(n - i, a)];
    case ye.Bottom:
      return [t, n + Dl(i - n, a)];
  }
}
function DN({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = Wb({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = Wb({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, S] = LN({
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
    S
  ];
}
function jN({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function Jj({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function eq({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Au(fu(e), fu(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return Bs(l, Mu(a)) > 0;
}
const tq = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, nq = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), qN = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return CN(e) ? n = { ...e } : n = {
    ...e,
    id: tq(e)
  }, nq(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function FN({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = jN({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const Ub = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, rq = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Gb = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function oq({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: o = ye.Top, center: i, offset: a, stepPosition: l }) {
  const u = Ub[t], f = Ub[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = rq({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let S = [], y, x;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, R] = jN({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (u[m] * f[m] === -1) {
    m === "x" ? (y = i.x ?? d.x + (h.x - d.x) * l, x = i.y ?? (d.y + h.y) / 2) : (y = i.x ?? (d.x + h.x) / 2, x = i.y ?? d.y + (h.y - d.y) * l);
    const T = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], A = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    u[m] === v ? S = m === "x" ? T : A : S = m === "x" ? A : T;
  } else {
    const T = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (m === "x" ? S = u.x === v ? A : T : S = u.y === v ? T : A, t === o) {
      const H = Math.abs(e[m] - n[m]);
      if (H <= a) {
        const Q = Math.min(a - 1, a - H);
        u[m] === v ? b[m] = (d[m] > e[m] ? -1 : 1) * Q : C[m] = (h[m] > n[m] ? -1 : 1) * Q;
      }
    }
    if (t !== o) {
      const H = m === "x" ? "y" : "x", Q = u[m] === f[H], L = d[H] > h[H], B = d[H] < h[H];
      (u[m] === 1 && (!Q && L || Q && B) || u[m] !== 1 && (!Q && B || Q && L)) && (S = m === "x" ? T : A);
    }
    const O = { x: d.x + b.x, y: d.y + b.y }, j = { x: h.x + C.x, y: h.y + C.y }, G = Math.max(Math.abs(O.x - S[0].x), Math.abs(j.x - S[0].x)), z = Math.max(Math.abs(O.y - S[0].y), Math.abs(j.y - S[0].y));
    G >= z ? (y = (O.x + j.x) / 2, x = S[0].y) : (y = S[0].x, x = (O.y + j.y) / 2);
  }
  return [[
    e,
    { x: d.x + b.x, y: d.y + b.y },
    ...S,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, x, _, R];
}
function iq(e, t, n, o) {
  const i = Math.min(Gb(e, t) / 2, Gb(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function gy({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, S, y] = oq({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((b, C, _) => {
    let R = "";
    return _ > 0 && _ < p.length - 1 ? R = iq(p[_ - 1], C, p[_ + 1], l) : R = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, b += R, b;
  }, ""), m, v, S, y];
}
function Kb(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function sq(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!Kb(t) || !Kb(n))
    return null;
  const o = t.internals.handleBounds || Yb(t.handles), i = n.internals.handleBounds || Yb(n.handles), a = Xb((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = Xb(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === mi.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", On.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || ye.Bottom, f = (l == null ? void 0 : l.position) || ye.Top, d = Hs(t, a, u), h = Hs(n, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function Yb(e) {
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
function Hs(e, t, n = ye.Left, o = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? tr(e);
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
function Xb(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function my(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function aq(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = my(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const zN = 1e3, lq = 10, Qy = {
  nodeOrigin: [0, 0],
  nodeExtent: zs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, uq = {
  ...Qy,
  checkEquality: !0
};
function Zy(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function cq(e, t, n) {
  const o = Zy(Qy, n);
  for (const i of e.values())
    if (i.parentId)
      Jy(i, e, t, o);
    else {
      const a = ta(i, o.nodeOrigin), l = wi(i.extent) ? i.extent : o.nodeExtent, u = po(a, l, tr(i));
      i.internals.positionAbsolute = u;
    }
}
function fq(e, t) {
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
function vy(e, t, n, o) {
  var d, h;
  const i = Zy(uq, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? zN : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = ta(p, i.nodeOrigin), S = wi(p.extent) ? p.extent : i.nodeExtent, y = po(v, S, tr(p));
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
          handleBounds: fq(p, m),
          z: $N(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && Jy(m, t, n, o, a);
  }
  return l;
}
function dq(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Jy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = Zy(Qy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  dq(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * lq), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? zN : 0, { x: p, y: m, z: v } = hq(e, d, l, u, h), { positionAbsolute: S } = e.internals, y = p !== S.x || m !== S.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : S,
      z: v
    }
  });
}
function $N(e, t) {
  return (gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function hq(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = tr(e), f = ta(e, n), d = wi(e.extent) ? po(f, e.extent, u) : f;
  let h = po({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = RN(h, u, t));
  const p = $N(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function e0(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? yi(f), h = PN(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, p = tr(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, S = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), x = Math.max(p.height, Math.round(u.height)), b = (y - p.width) * m[0], C = (x - p.height) * m[1];
    (v > 0 || S > 0 || b || C) && (i.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - v + b,
        y: f.position.y - S + C
      }
    }), (_ = n.get(d)) == null || _.forEach((R) => {
      e.some((P) => P.id === R.id) || i.push({
        id: R.id,
        type: "position",
        position: {
          x: R.position.x + v,
          y: R.position.y + S
        }
      });
    })), (p.width < u.width || p.height < u.height || v || S) && i.push({
      id: d,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (v ? m[0] * v - b : 0),
        height: x + (S ? m[1] * S - C : 0)
      }
    });
  }), i;
}
function pq(e, t, n, o, i, a) {
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
    const S = Xy(m.nodeElement), y = v.measured.width !== S.width || v.measured.height !== S.height;
    if (!!(S.width && S.height && (y || !v.internals.handleBounds || m.force))) {
      const b = m.nodeElement.getBoundingClientRect(), C = wi(v.extent) ? v.extent : a;
      let { positionAbsolute: _ } = v.internals;
      v.parentId && v.extent === "parent" ? _ = RN(_, S, t.get(v.parentId)) : C && (_ = po(_, C, S));
      const R = {
        ...v,
        measured: S,
        internals: {
          ...v.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Hb("source", m.nodeElement, b, h, v.id),
            target: Hb("target", m.nodeElement, b, h, v.id)
          }
        }
      };
      t.set(v.id, R), v.parentId && Jy(R, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: S
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: yi(R, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = e0(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function gq({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
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
function Qb(e, t, n, o, i, a) {
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
function BN(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: i, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: i, target: a, sourceHandle: l, targetHandle: u }, d = `${i}-${l}--${a}-${u}`, h = `${a}-${u}--${i}-${l}`;
    Qb("source", f, h, e, i, l), Qb("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function VN(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : VN(n, t) : !1;
}
function Zb(e, t, n) {
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
function mq(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !VN(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function bd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
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
function vq({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const a = {
    x: n - i.distance.x,
    y: o - i.distance.y
  }, l = ra(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function yq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, S = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: R, isSelectable: P, nodeId: T, nodeClickDistance: A = 0 }) {
    m = zt(R);
    function O({ x: H, y: Q }) {
      const { nodeLookup: L, nodeExtent: B, snapGrid: q, snapToGrid: U, nodeOrigin: M, onNodeDrag: F, onSelectionDrag: X, onError: D, updateNodePositions: W } = t();
      a = { x: H, y: Q };
      let ie = !1;
      const V = u.size > 1, Z = V && B ? py(na(u)) : null, ee = V && U ? vq({
        dragItems: u,
        snapGrid: q,
        x: H,
        y: Q
      }) : null;
      for (const [Y, te] of u) {
        if (!L.has(Y))
          continue;
        let se = { x: H - te.distance.x, y: Q - te.distance.y };
        U && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : ra(se, q));
        let ae = null;
        if (V && B && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, _e = pe.x - Z.x + B[0][0], me = pe.x + te.measured.width - Z.x2 + B[1][0], Ne = pe.y - Z.y + B[0][1], Ee = pe.y + te.measured.height - Z.y2 + B[1][1];
          ae = [
            [_e, Ne],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = kN({
          nodeId: Y,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || B,
          nodeOrigin: M,
          onError: D
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (S = S || ie, !!ie && (W(u, !0), y && (o || F || !T && X))) {
        const [Y, te] = bd({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, Y, te), F == null || F(y, Y, te), T || X == null || X(y, te);
      }
    }
    async function j() {
      if (!h)
        return;
      const { transform: H, panBy: Q, autoPanSpeed: L, autoPanOnNodeDrag: B } = t();
      if (!B) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [q, U] = NN(d, h, L);
      (q !== 0 || U !== 0) && (a.x = (a.x ?? 0) - q / H[2], a.y = (a.y ?? 0) - U / H[2], await Q({ x: q, y: U }) && O(a)), l = requestAnimationFrame(j);
    }
    function G(H) {
      var V;
      const { nodeLookup: Q, multiSelectionActive: L, nodesDraggable: B, transform: q, snapGrid: U, snapToGrid: M, selectNodesOnDrag: F, onNodeDragStart: X, onSelectionDragStart: D, unselectNodesAndEdges: W } = t();
      p = !0, (!F || !P) && !L && T && ((V = Q.get(T)) != null && V.selected || W()), P && F && T && (e == null || e(T));
      const ie = Ls(H.sourceEvent, { transform: q, snapGrid: U, snapToGrid: M, containerBounds: h });
      if (a = ie, u = mq(Q, B, ie, T), u.size > 0 && (n || X || !T && D)) {
        const [Z, ee] = bd({
          nodeId: T,
          dragItems: u,
          nodeLookup: Q
        });
        n == null || n(H.sourceEvent, u, Z, ee), X == null || X(H.sourceEvent, Z, ee), T || D == null || D(H.sourceEvent, ee);
      }
    }
    const z = iN().clickDistance(A).on("start", (H) => {
      const { domNode: Q, nodeDragThreshold: L, transform: B, snapGrid: q, snapToGrid: U } = t();
      h = (Q == null ? void 0 : Q.getBoundingClientRect()) || null, v = !1, S = !1, y = H.sourceEvent, L === 0 && G(H), a = Ls(H.sourceEvent, { transform: B, snapGrid: q, snapToGrid: U, containerBounds: h }), d = mn(H.sourceEvent, h);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: Q, transform: L, snapGrid: B, snapToGrid: q, nodeDragThreshold: U, nodeLookup: M } = t(), F = Ls(H.sourceEvent, { transform: L, snapGrid: B, snapToGrid: q, containerBounds: h });
      if (y = H.sourceEvent, (H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (v = !0), !v) {
        if (!f && Q && p && (f = !0, j()), !p) {
          const X = mn(H.sourceEvent, h), D = X.x - d.x, W = X.y - d.y;
          Math.sqrt(D * D + W * W) > U && G(H);
        }
        (a.x !== F.xSnapped || a.y !== F.ySnapped) && u && p && (d = mn(H.sourceEvent, h), O(F));
      }
    }).on("end", (H) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: Q, updateNodePositions: L, onNodeDragStop: B, onSelectionDragStop: q } = t();
        if (S && (L(u, !1), S = !1), i || B || !T && q) {
          const [U, M] = bd({
            nodeId: T,
            dragItems: u,
            nodeLookup: Q,
            dragging: !1
          });
          i == null || i(H.sourceEvent, u, U, M), B == null || B(H.sourceEvent, U, M), T || q == null || q(H.sourceEvent, M);
        }
      }
    }).filter((H) => {
      const Q = H.target;
      return !H.button && (!C || !Zb(Q, `.${C}`, R)) && (!_ || Zb(Q, _, R));
    });
    m.call(z);
  }
  function b() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: b
  };
}
function wq(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Bs(i, yi(a)) > 0 && o.push(a);
  return o;
}
const xq = 250;
function bq(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = wq(e, n, t + xq);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: v } = Hs(d, p, p.position, !0), S = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(v - e.y, 2));
      S > t || (S < a ? (i = [{ ...p, x: m, y: v }], a = S) : S === a && i.push({ ...p, x: m, y: v }));
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
function HN(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Hs(l, f, f.position, !0) } : f;
}
function WN(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function _q(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const UN = () => !0;
function Sq(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: S, onConnect: y, onConnectEnd: x, isValidConnection: b = UN, onReconnectEnd: C, updateConnection: _, getTransform: R, getFromHandle: P, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const j = AN(e.target);
  let G = 0, z;
  const { x: H, y: Q } = mn(e), L = WN(a, O), B = u == null ? void 0 : u.getBoundingClientRect();
  let q = !1;
  if (!B || !L)
    return;
  const U = HN(i, L, o, f, t);
  if (!U)
    return;
  let M = mn(e, B), F = !1, X = null, D = !1, W = null;
  function ie() {
    if (!h || !B)
      return;
    const [ce, de] = NN(M, B, T);
    m({ x: ce, y: de }), G = requestAnimationFrame(ie);
  }
  const V = {
    ...U,
    nodeId: i,
    type: L,
    position: U.position
  }, Z = f.get(i);
  let Y = {
    inProgress: !0,
    isValid: null,
    from: Hs(Z, V, ye.Left, !0),
    fromHandle: V,
    fromPosition: V.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: zb[V.position],
    toNode: null,
    pointer: M
  };
  function te() {
    q = !0, _(Y), S == null || S(e, { nodeId: i, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!q) {
      const { x: me, y: Ne } = mn(ce), Ee = me - H, Je = Ne - Q;
      if (!(Ee * Ee + Je * Je > A * A))
        return;
      te();
    }
    if (!P() || !V) {
      ae(ce);
      return;
    }
    const de = R();
    M = mn(ce, B), z = bq(oa(M, de, !1, [1, 1]), n, f, V), F || (ie(), F = !0);
    const pe = GN(ce, {
      handle: z,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: b,
      doc: j,
      lib: d,
      flowId: p,
      nodeLookup: f
    });
    W = pe.handleDomNode, X = pe.connection, D = _q(!!z, pe.isValid);
    const _e = {
      // from stays the same
      ...Y,
      isValid: D,
      to: pe.toHandle && D ? du({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: D && pe.toHandle ? pe.toHandle.position : zb[V.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(_e), Y = _e;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (q) {
        (z || W) && X && D && (y == null || y(X));
        const { inProgress: de, ...pe } = Y, _e = {
          ...pe,
          toPosition: Y.toHandle ? Y.toPosition : null
        };
        x == null || x(ce, _e), a && (C == null || C(ce, _e));
      }
      v(), cancelAnimationFrame(G), F = !1, D = !1, X = null, W = null, j.removeEventListener("mousemove", se), j.removeEventListener("mouseup", ae), j.removeEventListener("touchmove", se), j.removeEventListener("touchend", ae);
    }
  }
  j.addEventListener("mousemove", se), j.addEventListener("mouseup", ae), j.addEventListener("touchmove", se), j.addEventListener("touchend", ae);
}
function GN(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = UN, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: S } = mn(e), y = l.elementFromPoint(v, S), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, b = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = WN(void 0, x), _ = x.getAttribute("data-nodeid"), R = x.getAttribute("data-handleid"), P = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !C)
      return b;
    const A = {
      source: p ? _ : o,
      sourceHandle: p ? R : i,
      target: p ? o : _,
      targetHandle: p ? i : R
    };
    b.connection = A;
    const j = P && T && (n === mi.Strict ? p && C === "source" || !p && C === "target" : _ !== o || R !== i);
    b.isValid = j && d(A), b.toHandle = HN(_, C, R, h, n, !0);
  }
  return b;
}
const yy = {
  onPointerDown: Sq,
  isValid: GN
};
function Eq({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = zt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const S = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const R = n(), P = _.sourceEvent.ctrlKey && Vs() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = R[2] * Math.pow(2, T * P);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const R = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const A = o() * Math.max(R[2], Math.log(R[2])) * (v ? -1 : 1), O = {
        x: R[0] - T[0] * A,
        y: R[1] - T[1] * A
      }, j = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: R[2]
      }, j, u);
    }, C = xN().on("start", x).on("zoom", p ? b : null).on("zoom.wheel", m ? S : null);
    i.call(C, {});
  }
  function l() {
    i.on("zoom", null);
  }
  return {
    update: a,
    destroy: l,
    pointer: hn
  };
}
const Ou = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), _d = ({ x: e, y: t, zoom: n }) => Iu.translate(e, t).scale(n), li = (e, t) => e.target.closest(`.${t}`), KN = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Cq = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Sd = (e, t = 0, n = Cq, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, YN = (e) => {
  const t = e.ctrlKey && Vs() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function kq({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (li(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = hn(h), b = YN(h), C = p * Math.pow(2, b);
      o.scaleTo(n, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === uo.Vertical ? 0 : h.deltaX * m, S = i === uo.Horizontal ? 0 : h.deltaY * m;
    !Vs() && h.shiftKey && i !== uo.Vertical && (v = h.deltaY * m, S = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(S / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ou(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function Rq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = li(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function Nq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = Ou(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function Pq({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && KN(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, Ou(a.transform)));
  };
}
function Tq({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && KN(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = Ou(l.transform);
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
function Iq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var x;
    const m = e || t, v = n && p.ctrlKey, S = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (li(p, `${d}-flow__node`) || li(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !i && !a && !n || l || h && !S || li(p, u) && S || li(p, f) && (!S || i && S && !e) || !n && p.ctrlKey && S)
      return !1;
    if (!n && p.type === "touchstart" && ((x = p.touches) == null ? void 0 : x.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !i && !v && S || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || S) && y;
  };
}
function Aq({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = xN().scaleExtent([t, n]).translateExtent(o), m = zt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: vi(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), S = m.on("dblclick.zoom");
  p.wheelDelta(YN);
  function y(z, H) {
    return m ? new Promise((Q) => {
      p == null || p.interpolate((H == null ? void 0 : H.interpolate) === "linear" ? Os : Xl).transform(Sd(m, H == null ? void 0 : H.duration, H == null ? void 0 : H.ease, () => Q(!0)), z);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: z, noPanClassName: H, onPaneContextMenu: Q, userSelectionActive: L, panOnScroll: B, panOnDrag: q, panOnScrollMode: U, panOnScrollSpeed: M, preventScrolling: F, zoomOnPinch: X, zoomOnScroll: D, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: V, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: Y, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && b();
    const se = B && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !gn(Y) || Y < 0 ? 0 : Y);
    const ae = se ? kq({
      zoomPanValues: d,
      noWheelClassName: z,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: U,
      panOnScrollSpeed: M,
      zoomOnPinch: X,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : Rq({
      noWheelClassName: z,
      preventScrolling: F,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Nq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = Pq({
        zoomPanValues: d,
        panOnDrag: q,
        onPaneContextMenu: !!Q,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const _e = Tq({
        zoomPanValues: d,
        panOnDrag: q,
        panOnScroll: B,
        onPaneContextMenu: Q,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", _e);
    }
    const ce = Iq({
      zoomActivationKeyPressed: ie,
      panOnDrag: q,
      zoomOnScroll: D,
      panOnScroll: B,
      zoomOnDoubleClick: W,
      zoomOnPinch: X,
      userSelectionActive: L,
      noPanClassName: H,
      noWheelClassName: z,
      lib: V,
      connectionInProgress: ee
    });
    p.filter(ce), W ? m.on("dblclick.zoom", S) : m.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function C(z, H, Q) {
    const L = _d(z), B = p == null ? void 0 : p.constrain()(L, H, Q);
    return B && await y(B), new Promise((q) => q(B));
  }
  async function _(z, H) {
    const Q = _d(z);
    return await y(Q, H), new Promise((L) => L(Q));
  }
  function R(z) {
    if (m) {
      const H = _d(z), Q = m.property("__zoom");
      (Q.k !== z.zoom || Q.x !== z.x || Q.y !== z.y) && (p == null || p.transform(m, H, null, { sync: !0 }));
    }
  }
  function P() {
    const z = m ? wN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function T(z, H) {
    return m ? new Promise((Q) => {
      p == null || p.interpolate((H == null ? void 0 : H.interpolate) === "linear" ? Os : Xl).scaleTo(Sd(m, H == null ? void 0 : H.duration, H == null ? void 0 : H.ease, () => Q(!0)), z);
    }) : Promise.resolve(!1);
  }
  function A(z, H) {
    return m ? new Promise((Q) => {
      p == null || p.interpolate((H == null ? void 0 : H.interpolate) === "linear" ? Os : Xl).scaleBy(Sd(m, H == null ? void 0 : H.duration, H == null ? void 0 : H.ease, () => Q(!0)), z);
    }) : Promise.resolve(!1);
  }
  function O(z) {
    p == null || p.scaleExtent(z);
  }
  function j(z) {
    p == null || p.translateExtent(z);
  }
  function G(z) {
    const H = !gn(z) || z < 0 ? 0 : z;
    p == null || p.clickDistance(H);
  }
  return {
    update: x,
    destroy: b,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: T,
    scaleBy: A,
    setScaleExtent: O,
    setTranslateExtent: j,
    syncViewport: R,
    setClickDistance: G
  };
}
var xi;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(xi || (xi = {}));
function Mq({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function Jb(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), o = e.includes("left"), i = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: o,
    affectsY: i
  };
}
function kr(e, t) {
  return Math.max(0, t - e);
}
function Rr(e, t) {
  return Math.max(0, e - t);
}
function jl(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function e1(e, t) {
  return e ? !t : t;
}
function Oq(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: S } = n, { minWidth: y, maxWidth: x, minHeight: b, maxHeight: C } = o, { x: _, y: R, width: P, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? v - e.pointerX : 0), j = Math.floor(p ? S - e.pointerY : 0);
  const G = P + (f ? -O : O), z = T + (d ? -j : j), H = -a[0] * P, Q = -a[1] * T;
  let L = jl(G, y, x), B = jl(z, b, C);
  if (l) {
    let M = 0, F = 0;
    f && O < 0 ? M = kr(_ + O + H, l[0][0]) : !f && O > 0 && (M = Rr(_ + G + H, l[1][0])), d && j < 0 ? F = kr(R + j + Q, l[0][1]) : !d && j > 0 && (F = Rr(R + z + Q, l[1][1])), L = Math.max(L, M), B = Math.max(B, F);
  }
  if (u) {
    let M = 0, F = 0;
    f && O > 0 ? M = Rr(_ + O, u[0][0]) : !f && O < 0 && (M = kr(_ + G, u[1][0])), d && j > 0 ? F = Rr(R + j, u[0][1]) : !d && j < 0 && (F = kr(R + z, u[1][1])), L = Math.max(L, M), B = Math.max(B, F);
  }
  if (i) {
    if (h) {
      const M = jl(G / A, b, C) * A;
      if (L = Math.max(L, M), l) {
        let F = 0;
        !f && !d || f && !d && m ? F = Rr(R + Q + G / A, l[1][1]) * A : F = kr(R + Q + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, F);
      }
      if (u) {
        let F = 0;
        !f && !d || f && !d && m ? F = kr(R + G / A, u[1][1]) * A : F = Rr(R + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, F);
      }
    }
    if (p) {
      const M = jl(z * A, y, x) / A;
      if (B = Math.max(B, M), l) {
        let F = 0;
        !f && !d || d && !f && m ? F = Rr(_ + z * A + H, l[1][0]) / A : F = kr(_ + (d ? j : -j) * A + H, l[0][0]) / A, B = Math.max(B, F);
      }
      if (u) {
        let F = 0;
        !f && !d || d && !f && m ? F = kr(_ + z * A, u[1][0]) / A : F = Rr(_ + (d ? j : -j) * A, u[0][0]) / A, B = Math.max(B, F);
      }
    }
  }
  j = j + (j < 0 ? B : -B), O = O + (O < 0 ? L : -L), i && (m ? G > z * A ? j = (e1(f, d) ? -O : O) / A : O = (e1(f, d) ? -j : j) * A : h ? (j = O / A, d = f) : (O = j * A, f = d));
  const q = f ? _ + O : _, U = d ? R + j : R;
  return {
    width: P + (f ? -O : O),
    height: T + (d ? -j : j),
    x: a[0] * O * (f ? -1 : 1) + q,
    y: a[1] * j * (d ? -1 : 1) + U
  };
}
const XN = { width: 0, height: 0, x: 0, y: 0 }, Lq = {
  ...XN,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Dq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function jq(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function qq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = zt(e);
  let l = {
    controlDirection: Jb("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: p, resizeDirection: m, onResizeStart: v, onResize: S, onResizeEnd: y, shouldResize: x }) {
    let b = { ...XN }, C = { ...Lq };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: Jb(d)
    };
    let _, R = null, P = [], T, A, O, j = !1;
    const G = iN().on("start", (z) => {
      const { nodeLookup: H, transform: Q, snapGrid: L, snapToGrid: B, nodeOrigin: q, paneDomNode: U } = n();
      if (_ = H.get(t), !_)
        return;
      R = (U == null ? void 0 : U.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: F } = Ls(z.sourceEvent, {
        transform: Q,
        snapGrid: L,
        snapToGrid: B,
        containerBounds: R
      });
      b = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, C = {
        ...b,
        pointerX: M,
        pointerY: F,
        aspectRatio: b.width / b.height
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = H.get(_.parentId), A = T && _.extent === "parent" ? Dq(T) : void 0), P = [], O = void 0;
      for (const [X, D] of H)
        if (D.parentId === t && (P.push({
          id: X,
          position: { ...D.position },
          extent: D.extent
        }), D.extent === "parent" || D.expandParent)) {
          const W = jq(D, _, D.origin ?? q);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      v == null || v(z, { ...b });
    }).on("drag", (z) => {
      const { transform: H, snapGrid: Q, snapToGrid: L, nodeOrigin: B } = n(), q = Ls(z.sourceEvent, {
        transform: H,
        snapGrid: Q,
        snapToGrid: L,
        containerBounds: R
      }), U = [];
      if (!_)
        return;
      const { x: M, y: F, width: X, height: D } = b, W = {}, ie = _.origin ?? B, { width: V, height: Z, x: ee, y: Y } = Oq(C, l.controlDirection, q, l.boundaries, l.keepAspectRatio, ie, A, O), te = V !== X, se = Z !== D, ae = ee !== M && te, ce = Y !== F && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : b.x, W.y = ce ? Y : b.y, b.x = W.x, b.y = W.y, P.length > 0)) {
        const me = ee - M, Ne = Y - F;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * (V - X),
            y: Ee.position.y - Ne + ie[1] * (Z - D)
          }, U.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? V : b.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : b.height, b.width = W.width, b.height = W.height), T && _.expandParent) {
        const me = ie[0] * (W.width ?? 0);
        W.x && W.x < me && (b.x = me, C.x = C.x - (W.x - me));
        const Ne = ie[1] * (W.height ?? 0);
        W.y && W.y < Ne && (b.y = Ne, C.y = C.y - (W.y - Ne));
      }
      const de = Mq({
        width: b.width,
        prevWidth: X,
        height: b.height,
        prevHeight: D,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ...b, direction: de };
      (x == null ? void 0 : x(z, pe)) !== !1 && (j = !0, S == null || S(z, pe), o(W, U));
    }).on("end", (z) => {
      j && (y == null || y(z, { ...b }), i == null || i({ ...b }), j = !1);
    });
    a.call(G);
  }
  function f() {
    a.on(".drag", null);
  }
  return {
    update: u,
    destroy: f
  };
}
var Ed = { exports: {} }, Cd = {}, kd = { exports: {} }, Rd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function Fq() {
  if (t1) return Rd;
  t1 = 1;
  var e = Zs();
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, i = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(p, m) {
    var v = m(), S = o({ inst: { value: v, getSnapshot: m } }), y = S[0].inst, x = S[1];
    return a(
      function() {
        y.value = v, y.getSnapshot = m, f(y) && x({ inst: y });
      },
      [p, v, m]
    ), i(
      function() {
        return f(y) && x({ inst: y }), p(function() {
          f(y) && x({ inst: y });
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
  return Rd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Rd;
}
var n1;
function zq() {
  return n1 || (n1 = 1, kd.exports = Fq()), kd.exports;
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
var r1;
function $q() {
  if (r1) return Cd;
  r1 = 1;
  var e = Zs(), t = zq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Cd.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
    var S = a(null);
    if (S.current === null) {
      var y = { hasValue: !1, value: null };
      S.current = y;
    } else y = S.current;
    S = u(
      function() {
        function b(T) {
          if (!C) {
            if (C = !0, _ = T, T = m(T), v !== void 0 && y.hasValue) {
              var A = y.value;
              if (v(A, T))
                return R = A;
            }
            return R = T;
          }
          if (A = R, o(_, T)) return A;
          var O = m(T);
          return v !== void 0 && v(A, O) ? (_ = T, A) : (_ = T, R = O);
        }
        var C = !1, _, R, P = p === void 0 ? null : p;
        return [
          function() {
            return b(h());
          },
          P === null ? void 0 : function() {
            return b(P());
          }
        ];
      },
      [h, p, m, v]
    );
    var x = i(d, S[0], S[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, Cd;
}
var o1;
function Bq() {
  return o1 || (o1 = 1, Ed.exports = $q()), Ed.exports;
}
var Vq = Bq();
const Hq = /* @__PURE__ */ ku(Vq), Wq = {}, i1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((S) => S(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (Wq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, Uq = (e) => e ? i1(e) : i1, { useDebugValue: Gq } = ft, { useSyncExternalStoreWithSelector: Kq } = Hq, Yq = (e) => e;
function QN(e, t = Yq, n) {
  const o = Kq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Gq(o), o;
}
const s1 = (e, t) => {
  const n = Uq(e), o = (i, a = t) => QN(n, i, a);
  return Object.assign(o, n), o;
}, Xq = (e, t) => e ? s1(e, t) : s1;
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
var ia = VR();
const Qq = /* @__PURE__ */ ku(ia), Lu = k.createContext(null), Zq = Lu.Provider, ZN = On.error001();
function Ae(e, t) {
  const n = k.useContext(Lu);
  if (n === null)
    throw new Error(ZN);
  return QN(n, e, t);
}
function He() {
  const e = k.useContext(Lu);
  if (e === null)
    throw new Error(ZN);
  return k.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const a1 = { display: "none" }, Jq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, JN = "react-flow__node-desc", eP = "react-flow__edge-desc", eF = "react-flow__aria-live", tF = (e) => e.ariaLiveMessage, nF = (e) => e.ariaLabelConfig;
function rF({ rfId: e }) {
  const t = Ae(tF);
  return N.jsx("div", { id: `${eF}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Jq, children: t });
}
function oF({ rfId: e, disableKeyboardA11y: t }) {
  const n = Ae(nF);
  return N.jsxs(N.Fragment, { children: [N.jsx("div", { id: `${JN}-${e}`, style: a1, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), N.jsx("div", { id: `${eP}-${e}`, style: a1, children: n["edge.a11yDescription.default"] }), !t && N.jsx(rF, { rfId: e })] });
}
const sa = k.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return N.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
sa.displayName = "Panel";
function iF({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : N.jsx(sa, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: N.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const sF = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, ql = (e) => e.id;
function aF(e, t) {
  return Qe(e.selectedNodes.map(ql), t.selectedNodes.map(ql)) && Qe(e.selectedEdges.map(ql), t.selectedEdges.map(ql));
}
function lF({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Ae(sF, aF);
  return k.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const uF = (e) => !!e.onSelectionChangeHandlers;
function cF({ onSelectionChange: e }) {
  const t = Ae(uF);
  return e || t ? N.jsx(lF, { onSelectionChange: e }) : null;
}
const tP = [0, 0], fF = { x: 0, y: 0, zoom: 1 }, dF = [
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
], l1 = [...dF, "rfId"], hF = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), u1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: zs,
  nodeOrigin: tP,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function pF(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ae(hF, Qe), d = He();
  k.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = u1, u();
  }), []);
  const h = k.useRef(u1);
  return k.useEffect(
    () => {
      for (const p of l1) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: Qj(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    l1.map((p) => e[p])
  ), null;
}
function c1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function gF(e) {
  var o;
  const [t, n] = k.useState(e === "system" ? null : e);
  return k.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = c1(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = c1()) != null && o.matches ? "dark" : "light";
}
const f1 = typeof document < "u" ? document : null;
function Ws(e = null, t = { target: f1, actInsideInputWithModifier: !0 }) {
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
    const f = (t == null ? void 0 : t.target) ?? f1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var x, b;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && MN(v))
          return !1;
        const y = h1(v.code, u);
        if (a.current.add(v[y]), d1(l, a.current, !1)) {
          const C = ((b = (x = v.composedPath) == null ? void 0 : x.call(v)) == null ? void 0 : b[0]) || v.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !_) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const S = h1(v.code, u);
        d1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[S]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function d1(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function h1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const mF = () => {
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
      const { width: o, height: i, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = Yy(t, o, i, a, l, (n == null ? void 0 : n.padding) ?? 0.1);
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
      return oa(d, o, p, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: i, y: a } = o.getBoundingClientRect(), l = du(t, n);
      return {
        x: l.x + i,
        y: l.y + a
      };
    }
  }), []);
};
function nP(e, t) {
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
      vF(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function vF(e, t) {
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
function rP(e, t) {
  return nP(e, t);
}
function oP(e, t) {
  return nP(e, t);
}
function so(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function ui(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, a] of e) {
    const l = t.has(i);
    !(a.selected === void 0 && !l) && a.selected !== l && (n && (a.selected = l), o.push(so(a.id, l)));
  }
  return o;
}
function p1({ items: e = [], lookup: t }) {
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
function g1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const m1 = (e) => $j(e), yF = (e) => CN(e);
function iP(e) {
  return k.forwardRef(e);
}
const wF = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function v1(e) {
  const [t, n] = k.useState(BigInt(0)), [o] = k.useState(() => xF(() => n((i) => i + BigInt(1))));
  return wF(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function xF(e) {
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
const sP = k.createContext(null);
function bF({ children: e }) {
  const t = He(), n = k.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let S = f;
    for (const x of u)
      S = typeof x == "function" ? x(S) : x;
    const y = p1({
      items: S,
      lookup: m
    });
    h && d(S), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: b, setNodes: C } = t.getState();
      x && C(b);
    });
  }, []), o = v1(n), i = k.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const S of u)
      v = typeof S == "function" ? S(v) : S;
    h ? d(v) : p && p(p1({
      items: v,
      lookup: m
    }));
  }, []), a = v1(i), l = k.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return N.jsx(sP.Provider, { value: l, children: e });
}
function _F() {
  const e = k.useContext(sP);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const SF = (e) => !!e.panZoom;
function Du() {
  const e = mF(), t = He(), n = _F(), o = Ae(SF), i = k.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var b, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), S = m1(p) ? p : m.get(p.id), y = S.parentId ? IN(S.position, S.measured, S.parentId, m, v) : S.position, x = {
        ...S,
        position: y,
        width: ((b = S.measured) == null ? void 0 : b.width) ?? S.width,
        height: ((C = S.measured) == null ? void 0 : C.height) ?? S.height
      };
      return yi(x);
    }, d = (p, m, v = { replace: !1 }) => {
      l((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && m1(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && yF(x) ? x : { ...y, ...x };
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
        const { nodes: p = [], edges: m = [], transform: v } = t.getState(), [S, y, x] = v;
        return {
          nodes: p.map((b) => ({ ...b })),
          edges: m.map((b) => ({ ...b })),
          viewport: {
            x: S,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: v, edges: S, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: b, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: R } = t.getState(), { nodes: P, edges: T } = await Uj({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: S,
          onBeforeDelete: R
        }), A = T.length > 0, O = P.length > 0;
        if (A) {
          const j = T.map(g1);
          x == null || x(T), C(j);
        }
        if (O) {
          const j = P.map(g1);
          y == null || y(P), b(j);
        }
        return (O || A) && (_ == null || _({ nodes: P, edges: T })), { deletedNodes: P, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, v) => {
        const S = Bb(p), y = S ? p : f(p), x = v !== void 0;
        return y ? (v || t.getState().nodes).filter((b) => {
          const C = t.getState().nodeLookup.get(b.id);
          if (C && !S && (b.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const _ = yi(x ? b : C), R = Bs(_, y);
          return m && R > 0 || R >= _.width * _.height || R >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = Bb(p) ? p : f(p);
        if (!y)
          return !1;
        const x = Bs(y, m);
        return v && x > 0 || x >= m.width * m.height || x >= y.width * y.height;
      },
      updateNode: d,
      updateNodeData: (p, m, v = { replace: !1 }) => {
        d(p, (S) => {
          const y = typeof m == "function" ? m(S) : m;
          return v.replace ? { ...S, data: y } : { ...S, data: { ...S.data, ...y } };
        }, v);
      },
      updateEdge: h,
      updateEdgeData: (p, m, v = { replace: !1 }) => {
        h(p, (S) => {
          const y = typeof m == "function" ? m(S) : m;
          return v.replace ? { ...S, data: y } : { ...S, data: { ...S.data, ...y } };
        }, v);
      },
      getNodesBounds: (p) => {
        const { nodeLookup: m, nodeOrigin: v } = t.getState();
        return Bj(p, { nodeLookup: m, nodeOrigin: v });
      },
      getHandleConnections: ({ type: p, id: m, nodeId: v }) => {
        var S;
        return Array.from(((S = t.getState().connectionLookup.get(`${v}-${p}${m ? `-${m}` : ""}`)) == null ? void 0 : S.values()) ?? []);
      },
      getNodeConnections: ({ type: p, handleId: m, nodeId: v }) => {
        var S;
        return Array.from(((S = t.getState().connectionLookup.get(`${v}${p ? m ? `-${p}-${m}` : `-${p}` : ""}`)) == null ? void 0 : S.values()) ?? []);
      },
      fitView: async (p) => {
        const m = t.getState().fitViewResolver ?? Xj();
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
const y1 = (e) => e.selected, EF = typeof window < "u" ? window : void 0;
function CF({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = Du(), i = Ws(e, { actInsideInputWithModifier: !1 }), a = Ws(t, { target: EF });
  k.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(y1), edges: l.filter(y1) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), k.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function kF(e) {
  const t = He();
  k.useEffect(() => {
    const n = () => {
      var i, a, l, u;
      if (!e.current || !(((a = (i = e.current).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return !1;
      const o = Xy(e.current);
      (o.height === 0 || o.width === 0) && ((u = (l = t.getState()).onError) == null || u.call(l, "004", On.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
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
const ju = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, RF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function NF({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = uo.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: S, noWheelClassName: y, noPanClassName: x, onViewportChange: b, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: R }) {
  const P = He(), T = k.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: j } = Ae(RF, Qe), G = Ws(m), z = k.useRef();
  kF(T);
  const H = k.useCallback((Q) => {
    b == null || b({ x: Q[0], y: Q[1], zoom: Q[2] }), C || P.setState({ transform: Q });
  }, [b, C]);
  return k.useEffect(() => {
    if (T.current) {
      z.current = Aq({
        domNode: T.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (q) => P.setState({ paneDragging: q }),
        onPanZoomStart: (q, U) => {
          const { onViewportChangeStart: M, onMoveStart: F } = P.getState();
          F == null || F(q, U), M == null || M(U);
        },
        onPanZoom: (q, U) => {
          const { onViewportChange: M, onMove: F } = P.getState();
          F == null || F(q, U), M == null || M(U);
        },
        onPanZoomEnd: (q, U) => {
          const { onViewportChangeEnd: M, onMoveEnd: F } = P.getState();
          F == null || F(q, U), M == null || M(U);
        }
      });
      const { x: Q, y: L, zoom: B } = z.current.getViewport();
      return P.setState({
        panZoom: z.current,
        transform: [Q, L, B],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var q;
        (q = z.current) == null || q.destroy();
      };
    }
  }, []), k.useEffect(() => {
    var Q;
    (Q = z.current) == null || Q.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: o,
      panOnScrollSpeed: i,
      panOnScrollMode: a,
      zoomOnDoubleClick: l,
      panOnDrag: u,
      zoomActivationKeyPressed: G,
      preventScrolling: v,
      noPanClassName: x,
      userSelectionActive: A,
      noWheelClassName: y,
      lib: O,
      onTransformChange: H,
      connectionInProgress: j,
      selectionOnDrag: R,
      paneClickDistance: _
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
    G,
    v,
    x,
    A,
    y,
    O,
    H,
    j,
    R,
    _
  ]), N.jsx("div", { className: "react-flow__renderer", ref: T, style: ju, children: S });
}
const PF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function TF() {
  const { userSelectionActive: e, userSelectionRect: t } = Ae(PF, Qe);
  return e && t ? N.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Nd = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, IF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function AF({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = $s.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: S }) {
  const y = He(), { userSelectionActive: x, elementsSelectable: b, dragging: C, connectionInProgress: _ } = Ae(IF, Qe), R = b && (e || x), P = k.useRef(null), T = k.useRef(), A = k.useRef(/* @__PURE__ */ new Set()), O = k.useRef(/* @__PURE__ */ new Set()), j = k.useRef(!1), G = (M) => {
    if (j.current || _) {
      j.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, z = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, H = h ? (M) => h(M) : void 0, Q = (M) => {
    j.current && (M.stopPropagation(), j.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: F } = y.getState();
    if (T.current = F == null ? void 0 : F.getBoundingClientRect(), !T.current)
      return;
    const X = M.target === P.current;
    if (!X && !!M.target.closest(".nokey") || !e || !(a && X || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), j.current = !1;
    const { x: ie, y: V } = mn(M.nativeEvent, T.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ie,
        startY: V,
        x: ie,
        y: V
      }
    }), X || (M.stopPropagation(), M.preventDefault());
  }, B = (M) => {
    const { userSelectionRect: F, transform: X, nodeLookup: D, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: V, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: Y } = y.getState();
    if (!T.current || !F)
      return;
    const { x: te, y: se } = mn(M.nativeEvent, T.current), { startX: ae, startY: ce } = F;
    if (!j.current) {
      const Ne = t ? 0 : i;
      if (Math.hypot(te - ae, se - ce) <= Ne)
        return;
      Y(), l == null || l(M);
    }
    j.current = !0;
    const de = {
      startX: ae,
      startY: ce,
      x: te < ae ? te : ae,
      y: se < ce ? se : ce,
      width: Math.abs(te - ae),
      height: Math.abs(se - ce)
    }, pe = A.current, _e = O.current;
    A.current = new Set(Ky(D, de, X, n === $s.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = W.get(Je);
          Ue && (Ue.selectable ?? me) && O.current.add(Je);
        }
    }
    if (!Vb(pe, A.current)) {
      const Ne = ui(D, A.current, !0);
      V(Ne);
    }
    if (!Vb(_e, O.current)) {
      const Ne = ui(W, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, q = (M) => {
    var F, X;
    M.button === 0 && ((X = (F = M.target) == null ? void 0 : F.releasePointerCapture) == null || X.call(F, M.pointerId), !x && M.target === P.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), j.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, U = o === !0 || Array.isArray(o) && o.includes(0);
  return N.jsxs("div", { className: nt(["react-flow__pane", { draggable: U, dragging: C, selection: e }]), onClick: R ? void 0 : Nd(G, P), onContextMenu: Nd(z, P), onWheel: Nd(H, P), onPointerEnter: R ? void 0 : p, onPointerMove: R ? B : m, onPointerUp: R ? q : void 0, onPointerDownCapture: R ? L : void 0, onClickCapture: R ? Q : void 0, onPointerLeave: v, ref: P, style: ju, children: [S, N.jsx(TF, {})] });
}
function wy({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
  const { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: l, nodeLookup: u, onError: f } = t.getState(), d = u.get(e);
  if (!d) {
    f == null || f("012", On.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), d.selected ? (n || d.selected && l) && (a({ nodes: [d], edges: [] }), requestAnimationFrame(() => {
    var h;
    return (h = o == null ? void 0 : o.current) == null ? void 0 : h.blur();
  })) : i([e]);
}
function aP({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = k.useState(!1), h = k.useRef();
  return k.useEffect(() => {
    h.current = yq({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        wy({
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
const MF = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function lP() {
  const e = He();
  return k.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = MF(l), v = i ? a[0] : 5, S = i ? a[1] : 5, y = n.direction.x * v * n.factor, x = n.direction.y * S * n.factor;
    for (const [, b] of d) {
      if (!m(b))
        continue;
      let C = {
        x: b.internals.positionAbsolute.x + y,
        y: b.internals.positionAbsolute.y + x
      };
      i && (C = ra(C, a));
      const { position: _, positionAbsolute: R } = kN({
        nodeId: b.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      b.position = _, b.internals.positionAbsolute = R, p.set(b.id, b);
    }
    f(p);
  }, []);
}
const t0 = k.createContext(null), OF = t0.Provider;
t0.Consumer;
const uP = () => k.useContext(t0), LF = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), DF = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === mi.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function jF({ type: e = "source", position: t = ye.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var B, q;
  const S = l || null, y = e === "target", x = He(), b = uP(), { connectOnClick: C, noPanClassName: _, rfId: R } = Ae(LF, Qe), { connectingFrom: P, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: j, clickConnectionInProcess: G, valid: z } = Ae(DF(b, S, e), Qe);
  b || (q = (B = x.getState()).onError) == null || q.call(B, "010", On.error010());
  const H = (U) => {
    const { defaultEdgeOptions: M, onConnect: F, hasDefaultEdges: X } = x.getState(), D = {
      ...M,
      ...U
    };
    if (X) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(qN(D, W));
    }
    F == null || F(D), u == null || u(D);
  }, Q = (U) => {
    if (!b)
      return;
    const M = ON(U.nativeEvent);
    if (i && (M && U.button === 0 || !M)) {
      const F = x.getState();
      yy.onPointerDown(U.nativeEvent, {
        handleDomNode: U.currentTarget,
        autoPanOnConnect: F.autoPanOnConnect,
        connectionMode: F.connectionMode,
        connectionRadius: F.connectionRadius,
        domNode: F.domNode,
        nodeLookup: F.nodeLookup,
        lib: F.lib,
        isTarget: y,
        handleId: S,
        nodeId: b,
        flowId: F.rfId,
        panBy: F.panBy,
        cancelConnection: F.cancelConnection,
        onConnectStart: F.onConnectStart,
        onConnectEnd: F.onConnectEnd,
        updateConnection: F.updateConnection,
        onConnect: H,
        isValidConnection: n || F.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: F.autoPanSpeed,
        dragThreshold: F.connectionDragThreshold
      });
    }
    M ? h == null || h(U) : p == null || p(U);
  }, L = (U) => {
    const { onClickConnectStart: M, onClickConnectEnd: F, connectionClickStartHandle: X, connectionMode: D, isValidConnection: W, lib: ie, rfId: V, nodeLookup: Z, connection: ee } = x.getState();
    if (!b || !X && !i)
      return;
    if (!X) {
      M == null || M(U.nativeEvent, { nodeId: b, handleId: S, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: b, type: e, id: S } });
      return;
    }
    const Y = AN(U.target), te = n || W, { connection: se, isValid: ae } = yy.isValid(U.nativeEvent, {
      handle: {
        nodeId: b,
        id: S,
        type: e
      },
      connectionMode: D,
      fromNodeId: X.nodeId,
      fromHandleId: X.id || null,
      fromType: X.type,
      isValidConnection: te,
      flowId: V,
      doc: Y,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && H(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, F == null || F(U, ce), x.setState({ connectionClickStartHandle: null });
  };
  return N.jsx("div", { "data-handleid": S, "data-nodeid": b, "data-handlepos": t, "data-id": `${R}-${b}-${S}-${e}`, className: nt([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    _,
    d,
    {
      source: !y,
      target: y,
      connectable: o,
      connectablestart: i,
      connectableend: a,
      clickconnecting: A,
      connectingfrom: P,
      connectingto: T,
      valid: z,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!j || O) && (j || G ? a : i)
    }
  ]), onMouseDown: Q, onTouchStart: Q, onClick: C ? L : void 0, ref: v, ...m, children: f });
}
const Us = k.memo(iP(jF));
function qF({ data: e, isConnectable: t, sourcePosition: n = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [e == null ? void 0 : e.label, N.jsx(Us, { type: "source", position: n, isConnectable: t })] });
}
function FF({ data: e, isConnectable: t, targetPosition: n = ye.Top, sourcePosition: o = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Us, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, N.jsx(Us, { type: "source", position: o, isConnectable: t })] });
}
function zF() {
  return null;
}
function $F({ data: e, isConnectable: t, targetPosition: n = ye.Top }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Us, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const hu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, w1 = {
  input: qF,
  default: FF,
  output: $F,
  group: zF
};
function BF(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const VF = (e) => {
  const { width: t, height: n, x: o, y: i } = na(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: gn(t) ? t : null,
    height: gn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function HF({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Ae(VF, Qe), f = lP(), d = k.useRef(null);
  if (k.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), aP({
    nodeRef: d
  }), u || !i || !a)
    return null;
  const h = e ? (m) => {
    const v = o.getState().nodes.filter((S) => S.selected);
    e(m, v);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(hu, m.key) && (m.preventDefault(), f({
      direction: hu[m.key],
      factor: m.shiftKey ? 4 : 1
    }));
  };
  return N.jsx("div", { className: nt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: l
  }, children: N.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : p, style: {
    width: i,
    height: a
  } }) });
}
const x1 = typeof window < "u" ? window : void 0, WF = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function cP({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: S, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: R, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: j, translateExtent: G, minZoom: z, maxZoom: H, preventScrolling: Q, onSelectionContextMenu: L, noWheelClassName: B, noPanClassName: q, disableKeyboardA11y: U, onViewportChange: M, isControlledViewport: F }) {
  const { nodesSelectionActive: X, userSelectionActive: D } = Ae(WF), W = Ws(d, { target: x1 }), ie = Ws(y, { target: x1 }), V = ie || O, Z = ie || R, ee = h && V !== !0, Y = W || D || ee;
  return CF({ deleteKeyCode: f, multiSelectionKeyCode: S }), N.jsx(NF, { onPaneContextMenu: a, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !W && V, defaultViewport: j, translateExtent: G, minZoom: z, maxZoom: H, zoomActivationKeyCode: x, preventScrolling: Q, noWheelClassName: B, noPanClassName: q, onViewportChange: M, isControlledViewport: F, paneClickDistance: u, selectionOnDrag: ee, children: N.jsxs(AF, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: V, isSelecting: !!Y, selectionMode: p, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, X && N.jsx(HF, { onSelectionContextMenu: L, noPanClassName: q, disableKeyboardA11y: U })] }) });
}
cP.displayName = "FlowRenderer";
const UF = k.memo(cP), GF = (e) => (t) => e ? Ky(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function KF(e) {
  return Ae(k.useCallback(GF(e), [e]), Qe);
}
const YF = (e) => e.updateNodeInternals;
function XF() {
  const e = Ae(YF), [t] = k.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function QF({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
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
function ZF({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: S, rfId: y, nodeTypes: x, nodeClickDistance: b, onError: C }) {
  const { node: _, internals: R, isParent: P } = Ae((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let T = _.type || "default", A = (x == null ? void 0 : x[T]) || w1[T];
  A === void 0 && (C == null || C("003", On.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || w1.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), j = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), z = !!(_.focusable || h && typeof _.focusable > "u"), H = He(), Q = TN(_), L = QF({ node: _, nodeType: T, hasDimensions: Q, resizeObserver: p }), B = aP({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: m,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: j,
    nodeClickDistance: b
  }), q = lP();
  if (_.hidden)
    return null;
  const U = tr(_), M = BF(_), F = j || O || t || n || o || i, X = n ? (te) => n(te, { ...R.userNode }) : void 0, D = o ? (te) => o(te, { ...R.userNode }) : void 0, W = i ? (te) => i(te, { ...R.userNode }) : void 0, ie = a ? (te) => a(te, { ...R.userNode }) : void 0, V = l ? (te) => l(te, { ...R.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = H.getState();
    j && (!se || !O || ae > 0) && wy({
      id: e,
      store: H,
      nodeRef: L
    }), t && t(te, { ...R.userNode });
  }, ee = (te) => {
    if (!(MN(te.nativeEvent) || S)) {
      if (bN.includes(te.key) && j) {
        const se = te.key === "Escape";
        wy({
          id: e,
          store: H,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(hu, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = H.getState();
        H.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~R.positionAbsolute.x,
            y: ~~R.positionAbsolute.y
          })
        }), q({
          direction: hu[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, Y = () => {
    var _e;
    if (S || !((_e = L.current) != null && _e.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = H.getState();
    if (!ce)
      return;
    Ky(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + U.width / 2, _.position.y + U.height / 2, {
      zoom: te[2]
    });
  };
  return N.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${T}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [v]: O
    },
    _.className,
    {
      selected: _.selected,
      selectable: j,
      parent: P,
      draggable: O,
      dragging: B
    }
  ]), ref: L, style: {
    zIndex: R.z,
    transform: `translate(${R.positionAbsolute.x}px,${R.positionAbsolute.y}px)`,
    pointerEvents: F ? "all" : "none",
    visibility: Q ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: X, onMouseMove: D, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: V, onKeyDown: z ? ee : void 0, tabIndex: z ? 0 : void 0, onFocus: z ? Y : void 0, role: _.ariaRole ?? (z ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": S ? void 0 : `${JN}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: N.jsx(OF, { value: e, children: N.jsx(A, { id: e, data: _.data, type: T, positionAbsoluteX: R.positionAbsolute.x, positionAbsoluteY: R.positionAbsolute.y, selected: _.selected ?? !1, selectable: j, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: B, dragHandle: _.dragHandle, zIndex: R.z, parentId: _.parentId, ...U }) }) });
}
var JF = k.memo(ZF);
const e3 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function fP(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Ae(e3, Qe), l = KF(e.onlyRenderVisibleElements), u = XF();
  return N.jsx("div", { className: "react-flow__nodes", style: ju, children: l.map((f) => (
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
    N.jsx(JF, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
fP.displayName = "NodeRenderer";
const t3 = k.memo(fP);
function n3(e) {
  return Ae(k.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && eq({
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
const r3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return N.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, o3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return N.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, b1 = {
  [cu.Arrow]: r3,
  [cu.ArrowClosed]: o3
};
function i3(e) {
  const t = He();
  return k.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(b1, e) ? b1[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", On.error009(e)), null);
  }, [e]);
}
const s3 = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = i3(t);
  return f ? N.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: N.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, dP = ({ defaultColor: e, rfId: t }) => {
  const n = Ae((a) => a.edges), o = Ae((a) => a.defaultEdgeOptions), i = k.useMemo(() => aq(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? N.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: N.jsx("defs", { children: i.map((a) => N.jsx(s3, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
dP.displayName = "MarkerDefinitions";
var a3 = k.memo(dP);
function hP({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [p, m] = k.useState({ x: 1, y: 0, width: 0, height: 0 }), v = nt(["react-flow__edge-textwrapper", d]), S = k.useRef(null);
  return k.useEffect(() => {
    if (S.current) {
      const y = S.current.getBBox();
      m({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [n]), n ? N.jsxs("g", { transform: `translate(${e - p.width / 2} ${t - p.height / 2})`, className: v, visibility: p.width ? "visible" : "hidden", ...h, children: [i && N.jsx("rect", { width: p.width + 2 * l[0], x: -l[0], y: -l[1], height: p.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), N.jsx("text", { className: "react-flow__edge-text", y: p.height / 2, dy: "0.3em", ref: S, style: o, children: n }), f] }) : null;
}
hP.displayName = "EdgeText";
const l3 = k.memo(hP);
function qu({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return N.jsxs(N.Fragment, { children: [N.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? N.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && gn(t) && gn(n) ? N.jsx(l3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function _1({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function pP({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top }) {
  const [l, u] = _1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = _1({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = LN({
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
function gP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: b }) => {
    const [C, _, R] = pP({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return N.jsx(qu, { id: P, path: C, labelX: _, labelY: R, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: b });
  });
}
const u3 = gP({ isInternal: !1 }), mP = gP({ isInternal: !0 });
u3.displayName = "SimpleBezierEdge";
mP.displayName = "SimpleBezierEdgeInternal";
function vP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = ye.Bottom, targetPosition: S = ye.Top, markerEnd: y, markerStart: x, pathOptions: b, interactionWidth: C }) => {
    const [_, R, P] = gy({
      sourceX: n,
      sourceY: o,
      sourcePosition: v,
      targetX: i,
      targetY: a,
      targetPosition: S,
      borderRadius: b == null ? void 0 : b.borderRadius,
      offset: b == null ? void 0 : b.offset,
      stepPosition: b == null ? void 0 : b.stepPosition
    }), T = e.isInternal ? void 0 : t;
    return N.jsx(qu, { id: T, path: _, labelX: R, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const yP = vP({ isInternal: !1 }), wP = vP({ isInternal: !0 });
yP.displayName = "SmoothStepEdge";
wP.displayName = "SmoothStepEdgeInternal";
function xP(e) {
  return k.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return N.jsx(yP, { ...n, id: o, pathOptions: k.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const c3 = xP({ isInternal: !1 }), bP = xP({ isInternal: !0 });
c3.displayName = "StepEdge";
bP.displayName = "StepEdgeInternal";
function _P(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y }) => {
    const [x, b, C] = FN({ sourceX: n, sourceY: o, targetX: i, targetY: a }), _ = e.isInternal ? void 0 : t;
    return N.jsx(qu, { id: _, path: x, labelX: b, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y });
  });
}
const f3 = _P({ isInternal: !1 }), SP = _P({ isInternal: !0 });
f3.displayName = "StraightEdge";
SP.displayName = "StraightEdgeInternal";
function EP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, pathOptions: b, interactionWidth: C }) => {
    const [_, R, P] = DN({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: b == null ? void 0 : b.curvature
    }), T = e.isInternal ? void 0 : t;
    return N.jsx(qu, { id: T, path: _, labelX: R, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const d3 = EP({ isInternal: !1 }), CP = EP({ isInternal: !0 });
d3.displayName = "BezierEdge";
CP.displayName = "BezierEdgeInternal";
const S1 = {
  default: CP,
  straight: SP,
  step: bP,
  smoothstep: wP,
  simplebezier: mP
}, E1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, h3 = (e, t, n) => n === ye.Left ? e - t : n === ye.Right ? e + t : e, p3 = (e, t, n) => n === ye.Top ? e - t : n === ye.Bottom ? e + t : e, C1 = "react-flow__edgeupdater";
function k1({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return N.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([C1, `${C1}-${u}`]), cx: h3(t, o, e), cy: p3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function g3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const S = He(), y = (R, P) => {
    if (R.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: j, connectionRadius: G, lib: z, onConnectStart: H, onConnectEnd: Q, cancelConnection: L, nodeLookup: B, rfId: q, panBy: U, updateConnection: M } = S.getState(), F = P.type === "target", X = (ie, V) => {
      m(!1), p == null || p(ie, n, P.type, V);
    }, D = (ie) => d == null ? void 0 : d(n, ie), W = (ie, V) => {
      m(!0), h == null || h(R, n, P.type), H == null || H(ie, V);
    };
    yy.onPointerDown(R.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: j,
      connectionRadius: G,
      domNode: A,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: B,
      isTarget: F,
      edgeUpdaterType: P.type,
      lib: z,
      flowId: q,
      cancelConnection: L,
      panBy: U,
      isValidConnection: O,
      onConnect: D,
      onConnectStart: W,
      onConnectEnd: Q,
      onReconnectEnd: X,
      updateConnection: M,
      getTransform: () => S.getState().transform,
      getFromHandle: () => S.getState().connection.fromHandle,
      dragThreshold: S.getState().connectionDragThreshold,
      handleDomNode: R.currentTarget
    });
  }, x = (R) => y(R, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), b = (R) => y(R, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => v(!0), _ = () => v(!1);
  return N.jsxs(N.Fragment, { children: [(e === !0 || e === "source") && N.jsx(k1, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && N.jsx(k1, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: b, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function m3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: S, edgeTypes: y, noPanClassName: x, onError: b, disableKeyboardA11y: C }) {
  let _ = Ae((de) => de.edgeLookup.get(e));
  const R = Ae((de) => de.defaultEdgeOptions);
  _ = R ? { ...R, ..._ } : _;
  let P = _.type || "default", T = (y == null ? void 0 : y[P]) || S1[P];
  T === void 0 && (b == null || b("011", On.error011(P)), P = "default", T = (y == null ? void 0 : y.default) || S1.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof p < "u" && (_.reconnectable || n && typeof _.reconnectable > "u"), j = !!(_.selectable || o && typeof _.selectable > "u"), G = k.useRef(null), [z, H] = k.useState(!1), [Q, L] = k.useState(!1), B = He(), { zIndex: q, sourceX: U, sourceY: M, targetX: F, targetY: X, sourcePosition: D, targetPosition: W } = Ae(k.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), _e = de.nodeLookup.get(_.target);
    if (!pe || !_e)
      return {
        zIndex: _.zIndex,
        ...E1
      };
    const me = sq({
      id: e,
      sourceNode: pe,
      targetNode: _e,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: b
    });
    return {
      zIndex: Jj({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: _e,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || E1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Qe), ie = k.useMemo(() => _.markerStart ? `url('#${my(_.markerStart, S)}')` : void 0, [_.markerStart, S]), V = k.useMemo(() => _.markerEnd ? `url('#${my(_.markerEnd, S)}')` : void 0, [_.markerEnd, S]);
  if (_.hidden || U === null || M === null || F === null || X === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: _e, multiSelectionActive: me } = B.getState();
    j && (B.setState({ nodesSelectionActive: !1 }), _.selected && me ? (_e({ nodes: [], edges: [_] }), (Ne = G.current) == null || Ne.blur()) : pe([e])), i && i(de, _);
  }, ee = a ? (de) => {
    a(de, { ..._ });
  } : void 0, Y = l ? (de) => {
    l(de, { ..._ });
  } : void 0, te = u ? (de) => {
    u(de, { ..._ });
  } : void 0, se = f ? (de) => {
    f(de, { ..._ });
  } : void 0, ae = d ? (de) => {
    d(de, { ..._ });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && bN.includes(de.key) && j) {
      const { unselectNodesAndEdges: _e, addSelectedEdges: me } = B.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), _e({ edges: [_] })) : me([e]);
    }
  };
  return N.jsx("svg", { style: { zIndex: q }, children: N.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${P}`,
    _.className,
    x,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !j && !i,
      updating: z,
      selectable: j
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: Y, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${eP}-${S}` : void 0, ref: G, ..._.domAttributes, children: [!Q && N.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: j, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: U, sourceY: M, targetX: F, targetY: X, sourcePosition: D, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: V, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && N.jsx(g3, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: U, sourceY: M, targetX: F, targetY: X, sourcePosition: D, targetPosition: W, setUpdateHover: H, setReconnecting: L })] }) });
}
var v3 = k.memo(m3);
const y3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function kP({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: b, elementsSelectable: C, onError: _ } = Ae(y3, Qe), R = n3(t);
  return N.jsxs("div", { className: "react-flow__edges", children: [N.jsx(a3, { defaultColor: e, rfId: n }), R.map((P) => N.jsx(v3, { id: P, edgesFocusable: x, edgesReconnectable: b, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, rfId: n, onError: _, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
kP.displayName = "EdgeRenderer";
const w3 = k.memo(kP), x3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function b3({ children: e }) {
  const t = Ae(x3);
  return N.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function _3(e) {
  const t = Du(), n = k.useRef(!1);
  k.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const S3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function E3(e) {
  const t = Ae(S3), n = He();
  return k.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function C3(e) {
  return e.connection.inProgress ? { ...e.connection, to: oa(e.connection.to, e.transform) } : { ...e.connection };
}
function k3(e) {
  return C3;
}
function R3(e) {
  const t = k3();
  return Ae(t, Qe);
}
const N3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function P3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Ae(N3, Qe);
  return !(a && i && f) ? null : N.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: N.jsx("g", { className: nt(["react-flow__connection", EN(u)]), children: N.jsx(RP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const RP = ({ style: e, type: t = Tr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = R3();
  if (!i)
    return;
  if (n)
    return N.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: EN(o), toNode: h, toHandle: p, pointer: v });
  let S = "";
  const y = {
    sourceX: a.x,
    sourceY: a.y,
    sourcePosition: f,
    targetX: d.x,
    targetY: d.y,
    targetPosition: m
  };
  switch (t) {
    case Tr.Bezier:
      [S] = DN(y);
      break;
    case Tr.SimpleBezier:
      [S] = pP(y);
      break;
    case Tr.Step:
      [S] = gy({
        ...y,
        borderRadius: 0
      });
      break;
    case Tr.SmoothStep:
      [S] = gy(y);
      break;
    default:
      [S] = FN(y);
  }
  return N.jsx("path", { d: S, fill: "none", className: "react-flow__connection-path", style: e });
};
RP.displayName = "ConnectionLine";
const T3 = {};
function R1(e = T3) {
  k.useRef(e), He(), k.useEffect(() => {
  }, [e]);
}
function I3() {
  He(), k.useRef(!1), k.useEffect(() => {
  }, []);
}
function NP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: S, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: b, selectionKeyCode: C, selectionOnDrag: _, selectionMode: R, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: j, elementsSelectable: G, defaultViewport: z, translateExtent: H, minZoom: Q, maxZoom: L, preventScrolling: B, defaultMarkerColor: q, zoomOnScroll: U, zoomOnPinch: M, panOnScroll: F, panOnScrollSpeed: X, panOnScrollMode: D, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: V, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: Y, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Vt, noWheelClassName: pt, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht, viewport: on, onViewportChange: Wt }) {
  return R1(e), R1(t), I3(), _3(n), E3(on), N.jsx(UF, { onPaneClick: V, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: Y, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: R, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: U, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: F, panOnScrollSpeed: X, panOnScrollMode: D, panOnDrag: ie, defaultViewport: z, translateExtent: H, minZoom: Q, maxZoom: L, onSelectionContextMenu: p, preventScrolling: B, noDragClassName: Vt, noWheelClassName: pt, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Wt, isControlledViewport: !!on, children: N.jsxs(b3, { children: [N.jsx(w3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: j, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, defaultMarkerColor: q, noPanClassName: at, disableKeyboardA11y: Ge, rfId: Ht }), N.jsx(P3, { style: y, type: S, component: x, containerStyle: b }), N.jsx("div", { className: "react-flow__edgelabel-renderer" }), N.jsx(t3, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: j, noPanClassName: at, noDragClassName: Vt, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht }), N.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
NP.displayName = "GraphView";
const A3 = k.memo(NP), N1 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], b = n ?? e ?? [], C = h ?? [0, 0], _ = p ?? zs;
  BN(S, y, x);
  const R = vy(b, m, v, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const T = na(m, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: j } = Yy(T, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    P = [A, O, j];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: a ?? 0,
    transform: P,
    nodes: b,
    nodesInitialized: R,
    nodeLookup: m,
    parentLookup: v,
    edges: x,
    edgeLookup: y,
    connectionLookup: S,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: o !== void 0,
    panZoom: null,
    minZoom: f,
    maxZoom: d,
    translateExtent: zs,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: mi.Strict,
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
    connection: { ...SN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Gj,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: _N
  };
}, M3 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => Xq((m, v) => {
  async function S() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: b, fitViewResolver: C, width: _, height: R, minZoom: P, maxZoom: T } = v();
    x && (await Wj({
      nodes: y,
      width: _,
      height: R,
      panZoom: x,
      minZoom: P,
      maxZoom: T
    }, b), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...N1({
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
      const { nodeLookup: x, parentLookup: b, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: R } = v(), P = vy(y, x, b, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      R && P ? (S(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: b } = v();
      BN(x, b, y), m({ edges: y });
    },
    setDefaultNodesAndEdges: (y, x) => {
      if (y) {
        const { setNodes: b } = v();
        b(y), m({ hasDefaultNodes: !0 });
      }
      if (x) {
        const { setEdges: b } = v();
        b(x), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: x, nodeLookup: b, parentLookup: C, domNode: _, nodeOrigin: R, nodeExtent: P, debug: T, fitViewQueued: A } = v(), { changes: O, updatedInternals: j } = pq(y, b, C, _, R, P);
      j && (cq(b, C, { nodeOrigin: R, nodeExtent: P }), A ? (S(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const b = [], C = [], { nodeLookup: _, triggerNodeChanges: R } = v();
      for (const [P, T] of y) {
        const A = _.get(P), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (T != null && T.position)), j = {
          id: P,
          type: "position",
          position: O ? {
            x: Math.max(0, T.position.x),
            y: Math.max(0, T.position.y)
          } : T.position,
          dragging: x
        };
        O && A.parentId && b.push({
          id: P,
          parentId: A.parentId,
          rect: {
            ...T.internals.positionAbsolute,
            width: T.measured.width ?? 0,
            height: T.measured.height ?? 0
          }
        }), C.push(j);
      }
      if (b.length > 0) {
        const { parentLookup: P, nodeOrigin: T } = v(), A = e0(b, _, P, T);
        C.push(...A);
      }
      R(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: b, nodes: C, hasDefaultNodes: _, debug: R } = v();
      if (y != null && y.length) {
        if (_) {
          const P = rP(y, C);
          b(P);
        }
        R && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: b, edges: C, hasDefaultEdges: _, debug: R } = v();
      if (y != null && y.length) {
        if (_) {
          const P = oP(y, C);
          b(P);
        }
        R && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: R } = v();
      if (x) {
        const P = y.map((T) => so(T, !0));
        _(P);
        return;
      }
      _(ui(C, /* @__PURE__ */ new Set([...y]), !0)), R(ui(b));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: R } = v();
      if (x) {
        const P = y.map((T) => so(T, !0));
        R(P);
        return;
      }
      R(ui(b, /* @__PURE__ */ new Set([...y]))), _(ui(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: b, nodes: C, nodeLookup: _, triggerNodeChanges: R, triggerEdgeChanges: P } = v(), T = y || C, A = x || b, O = T.map((G) => {
        const z = _.get(G.id);
        return z && (z.selected = !1), so(G.id, !1);
      }), j = A.map((G) => so(G.id, !1));
      R(O), P(j);
    },
    setMinZoom: (y) => {
      const { panZoom: x, maxZoom: b } = v();
      x == null || x.setScaleExtent([y, b]), m({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: x, minZoom: b } = v();
      x == null || x.setScaleExtent([b, y]), m({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var x;
      (x = v().panZoom) == null || x.setTranslateExtent(y), m({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: x, triggerNodeChanges: b, triggerEdgeChanges: C, elementsSelectable: _ } = v();
      if (!_)
        return;
      const R = x.reduce((T, A) => A.selected ? [...T, so(A.id, !1)] : T, []), P = y.reduce((T, A) => A.selected ? [...T, so(A.id, !1)] : T, []);
      b(R), C(P);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: b, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: R, nodeExtent: P } = v();
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (vy(x, b, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: R,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: b, height: C, panZoom: _, translateExtent: R } = v();
      return gq({ delta: y, panZoom: _, transform: x, translateExtent: R, width: b, height: C });
    },
    setCenter: async (y, x, b) => {
      const { width: C, height: _, maxZoom: R, panZoom: P } = v();
      if (!P)
        return Promise.resolve(!1);
      const T = typeof (b == null ? void 0 : b.zoom) < "u" ? b.zoom : R;
      return await P.setViewport({
        x: C / 2 - y * T,
        y: _ / 2 - x * T,
        zoom: T
      }, { duration: b == null ? void 0 : b.duration, ease: b == null ? void 0 : b.ease, interpolate: b == null ? void 0 : b.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...SN }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...N1() })
  };
}, Object.is);
function PP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = k.useState(() => M3({
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
  return N.jsx(Zq, { value: v, children: N.jsx(bF, { children: m }) });
}
function O3({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return k.useContext(Lu) ? N.jsx(N.Fragment, { children: e }) : N.jsx(PP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const L3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function D3({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: b, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onNodesDelete: G, onEdgesDelete: z, onDelete: H, onSelectionChange: Q, onSelectionDragStart: L, onSelectionDrag: B, onSelectionDragStop: q, onSelectionContextMenu: U, onSelectionStart: M, onSelectionEnd: F, onBeforeDelete: X, connectionMode: D, connectionLineType: W = Tr.Bezier, connectionLineStyle: ie, connectionLineComponent: V, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: Y = "Shift", selectionOnDrag: te = !1, selectionMode: se = $s.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Vs() ? "Meta" : "Control", zoomActivationKeyCode: de = Vs() ? "Meta" : "Control", snapToGrid: pe, snapGrid: _e, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, nodeOrigin: pt = tP, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn = !0, defaultViewport: Ht = fF, minZoom: on = 0.5, maxZoom: Wt = 2, translateExtent: _t = zs, preventScrolling: zr = !0, nodeExtent: Ut, defaultMarkerColor: zn = "#b1b1b7", zoomOnScroll: ko = !0, zoomOnPinch: At = !0, panOnScroll: Gt = !1, panOnScrollSpeed: wc = 0.5, panOnScrollMode: Li = uo.Free, zoomOnDoubleClick: Di = !0, panOnDrag: ji = !0, onPaneClick: qi, onPaneMouseEnter: Fi, onPaneMouseMove: or, onPaneMouseLeave: ir, onPaneScroll: pa, onPaneContextMenu: ga, paneClickDistance: ma = 1, nodeClickDistance: va = 0, children: ya, onReconnect: zi, onReconnectStart: wa, onReconnectEnd: $r, onEdgeContextMenu: $i, onEdgeDoubleClick: Br, onEdgeMouseEnter: xc, onEdgeMouseMove: Vr, onEdgeMouseLeave: Ro, reconnectRadius: No = 10, onNodesChange: Bi, onEdgesChange: bc, noDragClassName: _c = "nodrag", noWheelClassName: Sc = "nowheel", noPanClassName: Sn = "nopan", fitView: Vi, fitViewOptions: Hi, connectOnClick: Ec, attributionPosition: xa, proOptions: ba, defaultEdgeOptions: _a, elevateNodesOnSelect: Sa, elevateEdgesOnSelect: Cc, disableKeyboardA11y: Ea = !1, autoPanOnConnect: Ke, autoPanOnNodeDrag: kc, autoPanSpeed: Wi, connectionRadius: Ca, isValidConnection: Po, onError: Rc, style: ka, id: Hr, nodeDragThreshold: Kt, connectionDragThreshold: Nc, viewport: Mt, onViewportChange: Pc, width: Tc, height: Ic, colorMode: To = "light", debug: Io, onScroll: En, ariaLabelConfig: Ao, ...Ac }, Mc) {
  const Wr = Hr || "1", Ra = gF(To), Ui = k.useCallback((sr) => {
    sr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), En == null || En(sr);
  }, [En]);
  return N.jsx("div", { "data-testid": "rf__wrapper", ...Ac, onScroll: Ui, style: { ...ka, ...L3 }, ref: Mc, className: nt(["react-flow", i, Ra]), id: Hr, role: "application", children: N.jsxs(O3, { nodes: e, edges: t, width: Tc, height: Ic, fitView: Vi, fitViewOptions: Hi, minZoom: on, maxZoom: Wt, nodeOrigin: pt, nodeExtent: Ut, children: [N.jsx(A3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: V, connectionLineContainerStyle: Z, selectionKeyCode: Y, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: Ht, translateExtent: _t, minZoom: on, maxZoom: Wt, preventScrolling: zr, zoomOnScroll: ko, zoomOnPinch: At, zoomOnDoubleClick: Di, panOnScroll: Gt, panOnScrollSpeed: wc, panOnScrollMode: Li, panOnDrag: ji, onPaneClick: qi, onPaneMouseEnter: Fi, onPaneMouseMove: or, onPaneMouseLeave: ir, onPaneScroll: pa, onPaneContextMenu: ga, paneClickDistance: ma, nodeClickDistance: va, onSelectionContextMenu: U, onSelectionStart: M, onSelectionEnd: F, onReconnect: zi, onReconnectStart: wa, onReconnectEnd: $r, onEdgeContextMenu: $i, onEdgeDoubleClick: Br, onEdgeMouseEnter: xc, onEdgeMouseMove: Vr, onEdgeMouseLeave: Ro, reconnectRadius: No, defaultMarkerColor: zn, noDragClassName: _c, noWheelClassName: Sc, noPanClassName: Sn, rfId: Wr, disableKeyboardA11y: Ea, nodeExtent: Ut, viewport: Mt, onViewportChange: Pc }), N.jsx(pF, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: b, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn, elevateNodesOnSelect: Sa, elevateEdgesOnSelect: Cc, minZoom: on, maxZoom: Wt, nodeExtent: Ut, onNodesChange: Bi, onEdgesChange: bc, snapToGrid: pe, snapGrid: _e, connectionMode: D, translateExtent: _t, connectOnClick: Ec, defaultEdgeOptions: _a, fitView: Vi, fitViewOptions: Hi, onNodesDelete: G, onEdgesDelete: z, onDelete: H, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onSelectionDrag: B, onSelectionDragStart: L, onSelectionDragStop: q, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: Sn, nodeOrigin: pt, rfId: Wr, autoPanOnConnect: Ke, autoPanOnNodeDrag: kc, autoPanSpeed: Wi, onError: Rc, connectionRadius: Ca, isValidConnection: Po, selectNodesOnDrag: Ne, nodeDragThreshold: Kt, connectionDragThreshold: Nc, onBeforeDelete: X, debug: Io, ariaLabelConfig: Ao }), N.jsx(cF, { onSelectionChange: Q }), ya, N.jsx(iF, { proOptions: ba, position: xa }), N.jsx(oF, { rfId: Wr, disableKeyboardA11y: Ea })] }) });
}
var j3 = iP(D3);
function q3({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return N.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function F3({ radius: e, className: t }) {
  return N.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Ir;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ir || (Ir = {}));
const z3 = {
  [Ir.Dots]: 1,
  [Ir.Lines]: 1,
  [Ir.Cross]: 6
}, $3 = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function TP({
  id: e,
  variant: t = Ir.Dots,
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
  const p = k.useRef(null), { transform: m, patternId: v } = Ae($3, Qe), S = o || z3[t], y = t === Ir.Dots, x = t === Ir.Cross, b = Array.isArray(n) ? n : [n, n], C = [b[0] * m[2] || 1, b[1] * m[2] || 1], _ = S * m[2], R = Array.isArray(a) ? a : [a, a], P = x ? [_, _] : C, T = [
    R[0] * m[2] || 1 + P[0] / 2,
    R[1] * m[2] || 1 + P[1] / 2
  ], A = `${v}${e || ""}`;
  return N.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...ju,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [N.jsx("pattern", { id: A, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? N.jsx(F3, { radius: _ / 2, className: h }) : N.jsx(q3, { dimensions: P, lineWidth: i, variant: t, className: h }) }), N.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
TP.displayName = "Background";
const B3 = k.memo(TP);
function V3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: N.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function H3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: N.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function W3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: N.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function U3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function G3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Fl({ children: e, className: t, ...n }) {
  return N.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const K3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function IP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const S = He(), { isInteractive: y, minZoomReached: x, maxZoomReached: b, ariaLabelConfig: C } = Ae(K3, Qe), { zoomIn: _, zoomOut: R, fitView: P } = Du(), T = () => {
    _(), a == null || a();
  }, A = () => {
    R(), l == null || l();
  }, O = () => {
    P(i), u == null || u();
  }, j = () => {
    S.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, G = m === "horizontal" ? "horizontal" : "vertical";
  return N.jsxs(sa, { className: nt(["react-flow__controls", G, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && N.jsxs(N.Fragment, { children: [N.jsx(Fl, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: b, children: N.jsx(V3, {}) }), N.jsx(Fl, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: N.jsx(H3, {}) })] }), n && N.jsx(Fl, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: N.jsx(W3, {}) }), o && N.jsx(Fl, { className: "react-flow__controls-interactive", onClick: j, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? N.jsx(G3, {}) : N.jsx(U3, {}) }), h] });
}
IP.displayName = "Controls";
const Y3 = k.memo(IP);
function X3({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: S, backgroundColor: y } = a || {}, x = l || S || y;
  return N.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (b) => v(b, e) : void 0 });
}
const Q3 = k.memo(X3), Z3 = (e) => e.nodes.map((t) => t.id), Pd = (e) => e instanceof Function ? e : () => e;
function J3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = Q3,
  onClick: l
}) {
  const u = Ae(Z3, Qe), f = Pd(t), d = Pd(e), h = Pd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return N.jsx(N.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    N.jsx(tz, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function ez({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Ae((S) => {
    const { internals: y } = S.nodeLookup.get(e), x = y.userNode, { x: b, y: C } = y.positionAbsolute, { width: _, height: R } = tr(x);
    return {
      node: x,
      x: b,
      y: C,
      width: _,
      height: R
    };
  }, Qe);
  return !d || d.hidden || !TN(d) ? null : N.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const tz = k.memo(ez);
var nz = k.memo(J3);
const rz = 200, oz = 150, iz = (e) => !e.hidden, sz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? PN(na(e.nodeLookup, { filter: iz }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, az = "react-flow__minimap-desc";
function AP({
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
  onNodeClick: S,
  pannable: y = !1,
  zoomable: x = !1,
  ariaLabel: b,
  inversePan: C,
  zoomStep: _ = 1,
  offsetScale: R = 5
}) {
  const P = He(), T = k.useRef(null), { boundingRect: A, viewBB: O, rfId: j, panZoom: G, translateExtent: z, flowWidth: H, flowHeight: Q, ariaLabelConfig: L } = Ae(sz, Qe), B = (e == null ? void 0 : e.width) ?? rz, q = (e == null ? void 0 : e.height) ?? oz, U = A.width / B, M = A.height / q, F = Math.max(U, M), X = F * B, D = F * q, W = R * F, ie = A.x - (X - A.width) / 2 - W, V = A.y - (D - A.height) / 2 - W, Z = X + W * 2, ee = D + W * 2, Y = `${az}-${j}`, te = k.useRef(0), se = k.useRef();
  te.current = F, k.useEffect(() => {
    if (T.current && G)
      return se.current = Eq({
        domNode: T.current,
        panZoom: G,
        getTransform: () => P.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [G]), k.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: z,
      width: H,
      height: Q,
      inversePan: C,
      pannable: y,
      zoomStep: _,
      zoomable: x
    });
  }, [y, x, C, _, z, H, Q]);
  const ae = v ? (pe) => {
    var Ne;
    const [_e, me] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    v(pe, { x: _e, y: me });
  } : void 0, ce = S ? k.useCallback((pe, _e) => {
    const me = P.getState().nodeLookup.get(_e).internals.userNode;
    S(pe, me);
  }, []) : void 0, de = b ?? L["minimap.ariaLabel"];
  return N.jsx(sa, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * F : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: N.jsxs("svg", { width: B, height: q, viewBox: `${ie} ${V} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Y, ref: T, onClick: ae, children: [de && N.jsx("title", { id: Y, children: de }), N.jsx(nz, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), N.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${V - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
AP.displayName = "MiniMap";
k.memo(AP);
const lz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, uz = {
  [xi.Line]: "right",
  [xi.Handle]: "bottom-right"
};
function cz({ nodeId: e, position: t, variant: n = xi.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: S, onResizeStart: y, onResize: x, onResizeEnd: b }) {
  const C = uP(), _ = typeof e == "string" ? e : C, R = He(), P = k.useRef(null), T = n === xi.Handle, A = Ae(k.useCallback(lz(T && v), [T, v]), Qe), O = k.useRef(null), j = t ?? uz[n];
  k.useEffect(() => {
    if (!(!P.current || !_))
      return O.current || (O.current = qq({
        domNode: P.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: z, transform: H, snapGrid: Q, snapToGrid: L, nodeOrigin: B, domNode: q } = R.getState();
          return {
            nodeLookup: z,
            transform: H,
            snapGrid: Q,
            snapToGrid: L,
            nodeOrigin: B,
            paneDomNode: q
          };
        },
        onChange: (z, H) => {
          const { triggerNodeChanges: Q, nodeLookup: L, parentLookup: B, nodeOrigin: q } = R.getState(), U = [], M = { x: z.x, y: z.y }, F = L.get(_);
          if (F && F.expandParent && F.parentId) {
            const X = F.origin ?? q, D = z.width ?? F.measured.width ?? 0, W = z.height ?? F.measured.height ?? 0, ie = {
              id: F.id,
              parentId: F.parentId,
              rect: {
                width: D,
                height: W,
                ...IN({
                  x: z.x ?? F.position.x,
                  y: z.y ?? F.position.y
                }, { width: D, height: W }, F.parentId, L, X)
              }
            }, V = e0([ie], L, B, q);
            U.push(...V), M.x = z.x ? Math.max(X[0] * D, z.x) : void 0, M.y = z.y ? Math.max(X[1] * W, z.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const X = {
              id: _,
              type: "position",
              position: { ...M }
            };
            U.push(X);
          }
          if (z.width !== void 0 && z.height !== void 0) {
            const D = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: z.width,
                height: z.height
              }
            };
            U.push(D);
          }
          for (const X of H) {
            const D = {
              ...X,
              type: "position"
            };
            U.push(D);
          }
          Q(U);
        },
        onEnd: ({ width: z, height: H }) => {
          const Q = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: z,
              height: H
            }
          };
          R.getState().triggerNodeChanges([Q]);
        }
      })), O.current.update({
        controlPosition: j,
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
        onResizeEnd: b,
        shouldResize: S
      }), () => {
        var z;
        (z = O.current) == null || z.destroy();
      };
  }, [
    j,
    u,
    f,
    d,
    h,
    p,
    y,
    x,
    b,
    S
  ]);
  const G = j.split("-");
  return N.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, n, o]), ref: P, style: {
    ...i,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
k.memo(cz);
function MP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = MP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function OP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = MP(e)) && (o && (o += " "), o += t);
  return o;
}
const fz = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, dz = (e, t) => ({
  classGroupId: e,
  validator: t
}), LP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), pu = "-", P1 = [], hz = "arbitrary..", pz = (e) => {
  const t = mz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return gz(l);
      const u = l.split(pu), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return DP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? fz(d, f) : f : d || P1;
      }
      return n[l] || P1;
    }
  };
}, DP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = DP(e, t + 1, a);
    if (d) return d;
  }
  const l = n.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(pu) : e.slice(t).join(pu), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, gz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? hz + o : void 0;
})(), mz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return vz(n, t);
}, vz = (e, t) => {
  const n = LP();
  for (const o in e) {
    const i = e[o];
    n0(i, n, o, t);
  }
  return n;
}, n0 = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    yz(l, t, n, o);
  }
}, yz = (e, t, n, o) => {
  if (typeof e == "string") {
    wz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    xz(e, t, n, o);
    return;
  }
  bz(e, t, n, o);
}, wz = (e, t, n) => {
  const o = e === "" ? t : jP(t, e);
  o.classGroupId = n;
}, xz = (e, t, n, o) => {
  if (_z(e)) {
    n0(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(dz(n, e));
}, bz = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    n0(f, jP(t, u), n, o);
  }
}, jP = (e, t) => {
  let n = e;
  const o = t.split(pu), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = LP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, _z = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Sz = (e) => {
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
}, xy = "!", T1 = ":", Ez = [], I1 = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), Cz = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (i) => {
    const a = [];
    let l = 0, u = 0, f = 0, d;
    const h = i.length;
    for (let y = 0; y < h; y++) {
      const x = i[y];
      if (l === 0 && u === 0) {
        if (x === T1) {
          a.push(i.slice(f, y)), f = y + 1;
          continue;
        }
        if (x === "/") {
          d = y;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" ? l-- : x === "(" ? u++ : x === ")" && u--;
    }
    const p = a.length === 0 ? i : i.slice(f);
    let m = p, v = !1;
    p.endsWith(xy) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(xy) && (m = p.slice(1), v = !0)
    );
    const S = d && d > f ? d - f : void 0;
    return I1(a, v, m, S);
  };
  if (t) {
    const i = t + T1, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : I1(Ez, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, kz = (e) => {
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
}, Rz = (e) => ({
  cache: Sz(e.cacheSize),
  parseClassName: Cz(e),
  sortModifiers: kz(e),
  ...pz(e)
}), Nz = /\s+/, Pz = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(Nz);
  let f = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const h = u[d], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: S,
      maybePostfixModifierPosition: y
    } = n(h);
    if (p) {
      f = h + (f.length > 0 ? " " + f : f);
      continue;
    }
    let x = !!y, b = o(x ? S.substring(0, y) : S);
    if (!b) {
      if (!x) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (b = o(S), !b) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      x = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), _ = v ? C + xy : C, R = _ + b;
    if (l.indexOf(R) > -1)
      continue;
    l.push(R);
    const P = i(b, x);
    for (let T = 0; T < P.length; ++T) {
      const A = P[T];
      l.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Tz = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = qP(n)) && (i && (i += " "), i += o);
  return i;
}, qP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = qP(e[o])) && (n && (n += " "), n += t);
  return n;
}, Iz = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = Rz(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = Pz(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(Tz(...f));
}, Az = [], st = (e) => {
  const t = (n) => n[e] || Az;
  return t.isThemeGetter = !0, t;
}, FP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mz = /^\d+\/\d+$/, Oz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Lz = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, jz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ni = (e) => Mz.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Nr = (e) => !!e && Number.isInteger(Number(e)), Td = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Xn = (e) => Oz.test(e), Fz = () => !0, zz = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Lz.test(e) && !Dz.test(e)
), $P = () => !1, $z = (e) => jz.test(e), Bz = (e) => qz.test(e), Vz = (e) => !xe(e) && !be(e), Hz = (e) => Si(e, HP, $P), xe = (e) => FP.test(e), io = (e) => Si(e, WP, zz), Id = (e) => Si(e, Yz, Te), A1 = (e) => Si(e, BP, $P), Wz = (e) => Si(e, VP, Bz), zl = (e) => Si(e, UP, $z), be = (e) => zP.test(e), Rs = (e) => Ei(e, WP), Uz = (e) => Ei(e, Xz), M1 = (e) => Ei(e, BP), Gz = (e) => Ei(e, HP), Kz = (e) => Ei(e, VP), $l = (e) => Ei(e, UP, !0), Si = (e, t, n) => {
  const o = FP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, Ei = (e, t, n = !1) => {
  const o = zP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, BP = (e) => e === "position" || e === "percentage", VP = (e) => e === "image" || e === "url", HP = (e) => e === "length" || e === "size" || e === "bg-size", WP = (e) => e === "length", Yz = (e) => e === "number", Xz = (e) => e === "family-name", UP = (e) => e === "shadow", Qz = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), i = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), p = st("inset-shadow"), m = st("text-shadow"), v = st("drop-shadow"), S = st("blur"), y = st("perspective"), x = st("aspect"), b = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
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
  ], P = () => [...R(), be, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [be, xe, f], j = () => [ni, "full", "auto", ...O()], G = () => [Nr, "none", "subgrid", be, xe], z = () => ["auto", {
    span: ["full", Nr, be, xe]
  }, Nr, be, xe], H = () => [Nr, "auto", be, xe], Q = () => ["auto", "min", "max", "fr", be, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...O()], U = () => [ni, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, be, xe], F = () => [...R(), M1, A1, {
    position: [be, xe]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", Gz, Hz, {
    size: [be, xe]
  }], W = () => [Td, Rs, io], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    be,
    xe
  ], V = () => ["", Te, Rs, io], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [Te, Td, M1, A1], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    S,
    be,
    xe
  ], se = () => ["none", Te, be, xe], ae = () => ["none", Te, be, xe], ce = () => [Te, be, xe], de = () => [ni, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Xn],
      breakpoint: [Xn],
      color: [Fz],
      container: [Xn],
      "drop-shadow": [Xn],
      ease: ["in", "out", "in-out"],
      font: [Vz],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Xn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Xn],
      shadow: [Xn],
      spacing: ["px", Te],
      text: [Xn],
      "text-shadow": [Xn],
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
        aspect: ["auto", "square", ni, xe, be, x]
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
        columns: [Te, xe, be, u]
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [Nr, "auto", be, xe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ni, "full", "auto", u, ...O()]
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
        flex: [Te, ni, "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Te, be, xe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Te, be, xe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nr, "first", "last", "none", be, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": G()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": G()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
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
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
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
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
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
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
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
        m: q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
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
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...U()]
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
          ...U()
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
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Rs, io]
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
        font: [o, be, Id]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Td, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Uz, xe, t]
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
        tracking: [i, be, xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Te, "none", be, Id]
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
        "list-image": ["none", be, xe]
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
        list: ["disc", "decimal", "none", be, xe]
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
        decoration: [Te, "from-font", "auto", be, io]
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
        "underline-offset": [Te, "auto", be, xe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, xe]
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
        content: ["none", be, xe]
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
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: X()
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
          }, Nr, be, xe],
          radial: ["", be, xe],
          conic: [Nr, be, xe]
        }, Kz, Wz]
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
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        "outline-offset": [Te, be, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Te, Rs, io]
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
          $l,
          zl
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
        "inset-shadow": ["none", p, $l, zl]
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
        ring: V()
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
        "ring-offset": [Te, io]
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
        "inset-ring": V()
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
        "text-shadow": ["none", m, $l, zl]
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
        opacity: [Te, be, xe]
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
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Y()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Y()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Y()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Y()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Y()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Y()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Y()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [be, xe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Y()
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
        "mask-radial-at": R()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Te]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Y()
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
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: X()
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
        mask: ["none", be, xe]
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
          be,
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
        brightness: [Te, be, xe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Te, be, xe]
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
          $l,
          zl
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
        grayscale: ["", Te, be, xe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Te, be, xe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Te, be, xe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Te, be, xe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Te, be, xe]
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
          be,
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
        "backdrop-brightness": [Te, be, xe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Te, be, xe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Te, be, xe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Te, be, xe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Te, be, xe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Te, be, xe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Te, be, xe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Te, be, xe]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, xe]
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
        duration: [Te, "initial", be, xe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, be, xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Te, be, xe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, be, xe]
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
        perspective: [y, be, xe]
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
        transform: [be, xe, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, xe]
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
        "will-change": ["auto", "scroll", "contents", "transform", be, xe]
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
        stroke: [Te, Rs, io, Id]
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
}, Zz = /* @__PURE__ */ Iz(Qz);
function Me(...e) {
  return Zz(OP(e));
}
function Fu(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(Fu, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: n,
    style: o,
    ...i
  } = e, [a, l] = k.useState(!1);
  return /* @__PURE__ */ N.jsx(
    Us,
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
function Jz(e, t) {
  for (const n of (e == null ? void 0 : e.cells) || [])
    for (const o of (n == null ? void 0 : n.components) || [])
      typeof (o == null ? void 0 : o.type) == "string" && o.type.endsWith("-handle") && o.id && (t[o.id] = o.dataType ?? null);
}
function e$(e) {
  var n;
  const t = {};
  for (const o of e || []) {
    const i = {};
    Jz((n = o == null ? void 0 : o.definition) == null ? void 0 : n.grid, i), t[o.type] = i;
  }
  return t;
}
function t$(e, t) {
  return (n) => {
    var u, f, d, h;
    const o = n.source ? (u = e == null ? void 0 : e[n.source]) == null ? void 0 : u.type : void 0, i = n.target ? (f = e == null ? void 0 : e[n.target]) == null ? void 0 : f.type : void 0, a = o && n.sourceHandle ? (d = t[o]) == null ? void 0 : d[n.sourceHandle] : void 0, l = i && n.targetHandle ? (h = t[i]) == null ? void 0 : h[n.targetHandle] : void 0;
    return a == null || l == null ? !0 : a === l;
  };
}
function n$(e) {
  if (!e) return;
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = (t * 31 + e.charCodeAt(n)) % 360;
  return `hsl(${t} 65% 45%)`;
}
const r$ = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function GP(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? ye.Left : ye.Right, m = d.label + (d.required ? " *" : ""), v = n$(d.dataType), S = v ? { backgroundColor: v, borderColor: v } : void 0;
    return /* @__PURE__ */ N.jsx(
      GP,
      {
        type: h,
        position: p,
        id: d.id,
        title: m,
        style: S
      }
    );
  }
  const {
    className: t,
    labelClassName: n,
    handleClassName: o,
    title: i,
    position: a,
    ...l
  } = e, { ref: u, ...f } = l;
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      title: i,
      className: Me(
        "relative flex items-center",
        r$[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ N.jsx(
          Fu,
          {
            position: a,
            className: o,
            ...f
          }
        ),
        /* @__PURE__ */ N.jsx("label", { className: Me("text-foreground px-3", n), children: i })
      ]
    }
  );
}
const o$ = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function KP(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(KP, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ N.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ N.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: n = ye.Bottom,
    children: o,
    ...i
  } = e, a = o$[n || ye.Bottom], l = n === ye.Top || n === ye.Bottom;
  return /* @__PURE__ */ N.jsx(Fu, { position: n, id: i.id, ...i, children: t && /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: `absolute flex items-center ${a} pointer-events-none`,
      children: [
        /* @__PURE__ */ N.jsx(
          "div",
          {
            className: `bg-gray-300 ${l ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ N.jsx("div", { className: "nodrag nopan pointer-events-auto", children: o })
      ]
    }
  ) });
}
function Gs({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ N.jsx(
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
const r0 = ft.createContext(null);
function xo() {
  return ft.useContext(r0);
}
function i$(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function s$(e) {
  var a;
  if ("component" in e) {
    const { component: l, onValueChange: u } = e, f = xo(), d = ((a = f == null ? void 0 : f.nodeData.values) == null ? void 0 : a[l.id]) ?? l.value ?? "", h = l.label ?? i$(l.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-text-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: h }),
      /* @__PURE__ */ N.jsx(
        Gs,
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
  const { value: t, onChange: n, placeholder: o, label: i } = e;
  return /* @__PURE__ */ N.jsx(
    Gs,
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
function a$(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function l$(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = xo(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? 0, p = u.label ?? a$(u.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-number-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: p }),
      /* @__PURE__ */ N.jsx(
        Gs,
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
  const { value: t, onChange: n, isInteger: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ N.jsx(
    Gs,
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
function O1(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ci(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = O1(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : O1(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return k.useCallback(Ci(...e), e);
}
function u$(e, t) {
  const n = k.createContext(t), o = (a) => {
    const { children: l, ...u } = a, f = k.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ N.jsx(n.Provider, { value: f, children: l });
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
function ki(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l), f = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: m, children: v, ...S } = p, y = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[f]) || u, x = k.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ N.jsx(y.Provider, { value: x, children: v });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, S = k.useContext(v);
      if (S) return S;
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
  return i.scopeName = e, [o, c$(i, ...t)];
}
function c$(...e) {
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
var wt = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {
}, f$ = Fy[" useInsertionEffect ".trim().toString()] || wt;
function Ks({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = d$({
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
        const m = h$(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function d$({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = k.useState(e), i = k.useRef(n), a = k.useRef(t);
  return f$(() => {
    a.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function h$(e) {
  return typeof e == "function";
}
function YP(e) {
  const t = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function XP(e) {
  const [t, n] = k.useState(void 0);
  return wt(() => {
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
function p$(e, t) {
  return k.useReducer((n, o) => t[n][o] ?? n, e);
}
var bo = (e) => {
  const { present: t, children: n } = e, o = g$(t), i = typeof n == "function" ? n({ present: o.isPresent }) : k.Children.only(n), a = Be(o.ref, m$(i));
  return typeof n == "function" || o.isPresent ? k.cloneElement(i, { ref: a }) : null;
};
bo.displayName = "Presence";
function g$(e) {
  const [t, n] = k.useState(), o = k.useRef(null), i = k.useRef(e), a = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = p$(l, {
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
    const d = Bl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), wt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = Bl(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), wt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = Bl(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Bl(o.current));
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
function Bl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function m$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function v$(e) {
  const t = /* @__PURE__ */ y$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(x$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function y$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = _$(i), u = b$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var w$ = Symbol("radix.slottable");
function x$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === w$;
}
function b$(e, t) {
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
function _$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var S$ = [
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
], je = S$.reduce((e, t) => {
  const n = /* @__PURE__ */ v$(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function E$(e, t) {
  e && ia.flushSync(() => e.dispatchEvent(t));
}
var zu = "Checkbox", [C$] = ki(zu), [k$, o0] = C$(zu);
function R$(e) {
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
  } = e, [m, v] = Ks({
    prop: n,
    defaultProp: i ?? !1,
    onChange: f,
    caller: zu
  }), [S, y] = k.useState(null), [x, b] = k.useState(null), C = k.useRef(!1), _ = S ? !!l || !!S.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), R = {
    checked: m,
    disabled: a,
    setChecked: v,
    control: S,
    setControl: y,
    name: u,
    form: l,
    value: h,
    hasConsumerStoppedPropagationRef: C,
    required: d,
    defaultChecked: Ar(i) ? !1 : i,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: b
  };
  return /* @__PURE__ */ N.jsx(
    k$,
    {
      scope: t,
      ...R,
      children: N$(p) ? p(R) : o
    }
  );
}
var QP = "CheckboxTrigger", ZP = k.forwardRef(
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
      bubbleInput: S
    } = o0(QP, e), y = Be(i, h), x = k.useRef(f);
    return k.useEffect(() => {
      const b = a == null ? void 0 : a.form;
      if (b) {
        const C = () => p(x.current);
        return b.addEventListener("reset", C), () => b.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ N.jsx(
      je.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ar(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": oT(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Le(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: Le(n, (b) => {
          p((C) => Ar(C) ? !0 : !C), S && v && (m.current = b.isPropagationStopped(), m.current || b.stopPropagation());
        })
      }
    );
  }
);
ZP.displayName = QP;
var JP = k.forwardRef(
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
    return /* @__PURE__ */ N.jsx(
      R$,
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
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx(
            ZP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ N.jsx(
            rT,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
JP.displayName = zu;
var eT = "CheckboxIndicator", tT = k.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = o0(eT, n);
    return /* @__PURE__ */ N.jsx(
      bo,
      {
        present: o || Ar(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ N.jsx(
          je.span,
          {
            "data-state": oT(a.checked),
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
tT.displayName = eT;
var nT = "CheckboxBubbleInput", rT = k.forwardRef(
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
    } = o0(nT, e), S = Be(n, v), y = YP(a), x = XP(o);
    k.useEffect(() => {
      const C = m;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !i.current;
      if (y !== a && P) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Ar(a), P.call(C, Ar(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [m, y, a, i]);
    const b = k.useRef(Ar(a) ? !1 : a);
    return /* @__PURE__ */ N.jsx(
      je.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? b.current,
        required: u,
        disabled: f,
        name: d,
        value: h,
        form: p,
        ...t,
        tabIndex: -1,
        ref: S,
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
rT.displayName = nT;
function N$(e) {
  return typeof e == "function";
}
function Ar(e) {
  return e === "indeterminate";
}
function oT(e) {
  return Ar(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), T$ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), L1 = (e) => {
  const t = T$(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, iT = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), I$ = (e) => {
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
var A$ = {
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
const M$ = k.forwardRef(
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
      ...A$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: iT("lucide", i),
      ...!a && !I$(u) && { "aria-hidden": "true" },
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
const jn = (e, t) => {
  const n = k.forwardRef(
    ({ className: o, ...i }, a) => k.createElement(M$, {
      ref: a,
      iconNode: t,
      className: iT(
        `lucide-${P$(L1(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = L1(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O$ = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], L$ = jn("arrow-down-wide-narrow", O$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D$ = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], j$ = jn("arrow-right-from-line", D$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q$ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sT = jn("check", q$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], aT = jn("chevron-down", F$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $$ = jn("chevron-up", z$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B$ = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], V$ = jn("download", B$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H$ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], W$ = jn("panel-left", H$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U$ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], lT = jn("plus", U$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G$ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], uT = jn("trash-2", G$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Y$ = jn("x", K$);
function D1({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    JP,
    {
      "data-slot": "checkbox",
      className: Me(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(
        tT,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ N.jsx(sT, { className: "size-3.5" })
        }
      )
    }
  );
}
function X$(e) {
  var i;
  if ("component" in e) {
    const { component: a, onValueChange: l } = e, u = xo(), f = ((i = u == null ? void 0 : u.nodeData.values) == null ? void 0 : i[a.id]) ?? a.value ?? !1;
    return /* @__PURE__ */ N.jsxs("div", { className: "component-bool-field w-full flex items-center gap-2", children: [
      /* @__PURE__ */ N.jsx(
        D1,
        {
          checked: f,
          onCheckedChange: (d) => l == null ? void 0 : l(a.id, d === !0),
          onMouseDown: (d) => d.stopPropagation(),
          onPointerDown: (d) => d.stopPropagation(),
          "aria-label": a.label,
          className: "h-4 w-4"
        }
      ),
      /* @__PURE__ */ N.jsx("label", { className: "text-sm text-gray-700", children: a.label })
    ] });
  }
  const { value: t, onChange: n, label: o } = e;
  return /* @__PURE__ */ N.jsx(
    D1,
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
function j1(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function q1(e) {
  const t = /* @__PURE__ */ Q$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(J$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Q$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = t4(i), u = e4(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Z$ = Symbol("radix.slottable");
function J$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Z$;
}
function e4(e, t) {
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
function t4(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function n4(e) {
  const t = e + "CollectionProvider", [n, o] = ki(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: b } = y, C = ft.useRef(null), _ = ft.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.jsx(i, { scope: x, itemMap: _, collectionRef: C, children: b });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ q1(u), d = ft.forwardRef(
    (y, x) => {
      const { scope: b, children: C } = y, _ = a(u, b), R = Be(x, _.collectionRef);
      return /* @__PURE__ */ N.jsx(f, { ref: R, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ q1(h), v = ft.forwardRef(
    (y, x) => {
      const { scope: b, children: C, ..._ } = y, R = ft.useRef(null), P = Be(x, R), T = a(h, b);
      return ft.useEffect(() => (T.itemMap.set(R, { ref: R, ..._ }), () => void T.itemMap.delete(R))), /* @__PURE__ */ N.jsx(m, { [p]: "", ref: P, children: C });
    }
  );
  v.displayName = h;
  function S(y) {
    const x = a(e + "CollectionConsumer", y);
    return ft.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (T, A) => _.indexOf(T.ref.current) - _.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    S,
    o
  ];
}
var r4 = k.createContext(void 0);
function o4(e) {
  const t = k.useContext(r4);
  return e || t || "ltr";
}
function go(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function i4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = go(e);
  k.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var s4 = "DismissableLayer", by = "dismissableLayer.update", a4 = "dismissableLayer.pointerDownOutside", l4 = "dismissableLayer.focusOutside", F1, cT = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $u = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = k.useContext(cT), [h, p] = k.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = k.useState({}), S = Be(t, (A) => p(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, R = C >= b, P = f4((A) => {
      const O = A.target, j = [...d.branches].some((G) => G.contains(O));
      !R || j || (i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m), T = d4((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m);
    return i4((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, m), k.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (F1 = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), z1(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = F1);
        };
    }, [h, m, n, d]), k.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), z1());
    }, [h, d]), k.useEffect(() => {
      const A = () => v({});
      return document.addEventListener(by, A), () => document.removeEventListener(by, A);
    }, []), /* @__PURE__ */ N.jsx(
      je.div,
      {
        ...f,
        ref: S,
        style: {
          pointerEvents: _ ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Le(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Le(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Le(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
$u.displayName = s4;
var u4 = "DismissableLayerBranch", c4 = k.forwardRef((e, t) => {
  const n = k.useContext(cT), o = k.useRef(null), i = Be(t, o);
  return k.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ N.jsx(je.div, { ...e, ref: i });
});
c4.displayName = u4;
function f4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = go(e), o = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          fT(
            a4,
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
function d4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = go(e), o = k.useRef(!1);
  return k.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && fT(l4, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function z1() {
  const e = new CustomEvent(by);
  document.dispatchEvent(e);
}
function fT(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? E$(i, a) : i.dispatchEvent(a);
}
var Ad = 0;
function dT() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $1()), document.body.insertAdjacentElement("beforeend", e[1] ?? $1()), Ad++, () => {
      Ad === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ad--;
    };
  }, []);
}
function $1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Md = "focusScope.autoFocusOnMount", Od = "focusScope.autoFocusOnUnmount", B1 = { bubbles: !1, cancelable: !0 }, h4 = "FocusScope", i0 = k.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = k.useState(null), d = go(i), h = go(a), p = k.useRef(null), m = Be(t, (y) => f(y)), v = k.useRef({
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
      let y = function(_) {
        if (v.paused || !u) return;
        const R = _.target;
        u.contains(R) ? p.current = R : Pr(p.current, { select: !0 });
      }, x = function(_) {
        if (v.paused || !u) return;
        const R = _.relatedTarget;
        R !== null && (u.contains(R) || Pr(p.current, { select: !0 }));
      }, b = function(_) {
        if (document.activeElement === document.body)
          for (const P of _)
            P.removedNodes.length > 0 && Pr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(b);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, v.paused]), k.useEffect(() => {
    if (u) {
      H1.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const b = new CustomEvent(Md, B1);
        u.addEventListener(Md, d), u.dispatchEvent(b), b.defaultPrevented || (p4(w4(hT(u)), { select: !0 }), document.activeElement === y && Pr(u));
      }
      return () => {
        u.removeEventListener(Md, d), setTimeout(() => {
          const b = new CustomEvent(Od, B1);
          u.addEventListener(Od, h), u.dispatchEvent(b), b.defaultPrevented || Pr(y ?? document.body, { select: !0 }), u.removeEventListener(Od, h), H1.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const S = k.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, b = document.activeElement;
      if (x && b) {
        const C = y.currentTarget, [_, R] = g4(C);
        _ && R ? !y.shiftKey && b === R ? (y.preventDefault(), n && Pr(_, { select: !0 })) : y.shiftKey && b === _ && (y.preventDefault(), n && Pr(R, { select: !0 })) : b === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ N.jsx(je.div, { tabIndex: -1, ...l, ref: m, onKeyDown: S });
});
i0.displayName = h4;
function p4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Pr(o, { select: t }), document.activeElement !== n) return;
}
function g4(e) {
  const t = hT(e), n = V1(t, e), o = V1(t.reverse(), e);
  return [n, o];
}
function hT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function V1(e, t) {
  for (const n of e)
    if (!m4(n, { upTo: t })) return n;
}
function m4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function v4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && v4(e) && t && e.select();
  }
}
var H1 = y4();
function y4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = W1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = W1(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function W1(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function w4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var x4 = Fy[" useId ".trim().toString()] || (() => {
}), b4 = 0;
function co(e) {
  const [t, n] = k.useState(x4());
  return wt(() => {
    n((o) => o ?? String(b4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const _4 = ["top", "right", "bottom", "left"], Lr = Math.min, Ft = Math.max, gu = Math.round, Vl = Math.floor, Mn = (e) => ({
  x: e,
  y: e
}), S4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, E4 = {
  start: "end",
  end: "start"
};
function _y(e, t, n) {
  return Ft(e, Lr(t, n));
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function er(e) {
  return e.split("-")[0];
}
function Ri(e) {
  return e.split("-")[1];
}
function s0(e) {
  return e === "x" ? "y" : "x";
}
function a0(e) {
  return e === "y" ? "height" : "width";
}
const C4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function In(e) {
  return C4.has(er(e)) ? "y" : "x";
}
function l0(e) {
  return s0(In(e));
}
function k4(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ri(e), i = l0(e), a = a0(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = mu(l)), [l, mu(l)];
}
function R4(e) {
  const t = mu(e);
  return [Sy(e), t, Sy(t)];
}
function Sy(e) {
  return e.replace(/start|end/g, (t) => E4[t]);
}
const U1 = ["left", "right"], G1 = ["right", "left"], N4 = ["top", "bottom"], P4 = ["bottom", "top"];
function T4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? G1 : U1 : t ? U1 : G1;
    case "left":
    case "right":
      return t ? N4 : P4;
    default:
      return [];
  }
}
function I4(e, t, n, o) {
  const i = Ri(e);
  let a = T4(er(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(Sy)))), a;
}
function mu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => S4[t]);
}
function A4(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function pT(e) {
  return typeof e != "number" ? A4(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vu(e) {
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
function K1(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = In(t), l = l0(t), u = a0(l), f = er(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
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
  switch (Ri(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const M4 = async (e, t, n) => {
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
  } = K1(d, o, f), m = o, v = {}, S = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: x,
      fn: b
    } = u[y], {
      x: C,
      y: _,
      data: R,
      reset: P
    } = await b({
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
    h = C ?? h, p = _ ?? p, v = {
      ...v,
      [x]: {
        ...v[x],
        ...R
      }
    }, P && S <= 50 && (S++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (d = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: h,
      y: p
    } = K1(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: i,
    middlewareData: v
  };
};
async function Ys(e, t) {
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
  } = Jn(t, e), S = pT(v), x = u[m ? p === "floating" ? "reference" : "floating" : p], b = vu(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), R = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = vu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: _,
    strategy: f
  }) : C);
  return {
    top: (b.top - P.top + S.top) / R.y,
    bottom: (P.bottom - b.bottom + S.bottom) / R.y,
    left: (b.left - P.left + S.left) / R.x,
    right: (P.right - b.right + S.right) / R.x
  };
}
const O4 = (e) => ({
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
    } = Jn(e, t) || {};
    if (d == null)
      return {};
    const p = pT(h), m = {
      x: n,
      y: o
    }, v = l0(i), S = a0(v), y = await l.getDimensions(d), x = v === "y", b = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", R = a.reference[S] + a.reference[v] - m[v] - a.floating[S], P = m[v] - a.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[_] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[_] || a.floating[S]);
    const O = R / 2 - P / 2, j = A / 2 - y[S] / 2 - 1, G = Lr(p[b], j), z = Lr(p[C], j), H = G, Q = A - y[S] - z, L = A / 2 - y[S] / 2 + O, B = _y(H, L, Q), q = !f.arrow && Ri(i) != null && L !== B && a.reference[S] / 2 - (L < H ? G : z) - y[S] / 2 < 0, U = q ? L < H ? L - H : L - Q : 0;
    return {
      [v]: m[v] + U,
      data: {
        [v]: B,
        centerOffset: L - B - U,
        ...q && {
          alignmentOffset: U
        }
      },
      reset: q
    };
  }
}), L4 = function(e) {
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
        fallbackAxisSideDirection: S = "none",
        flipAlignment: y = !0,
        ...x
      } = Jn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = er(i), C = In(u), _ = er(u) === u, R = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (_ || !y ? [mu(u)] : R4(u)), T = S !== "none";
      !m && T && P.push(...I4(u, y, S, R));
      const A = [u, ...P], O = await Ys(t, x), j = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && j.push(O[b]), p) {
        const L = k4(i, l, R);
        j.push(O[L[0]], O[L[1]]);
      }
      if (G = [...G, {
        placement: i,
        overflows: j
      }], !j.every((L) => L <= 0)) {
        var z, H;
        const L = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1, B = A[L];
        if (B && (!(p === "alignment" ? C !== In(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        G.every((M) => In(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: G
            },
            reset: {
              placement: B
            }
          };
        let q = (H = G.filter((U) => U.overflows[0] <= 0).sort((U, M) => U.overflows[1] - M.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var Q;
              const U = (Q = G.filter((M) => {
                if (T) {
                  const F = In(M.placement);
                  return F === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, X) => F + X, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : Q[0];
              U && (q = U);
              break;
            }
            case "initialPlacement":
              q = u;
              break;
          }
        if (i !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function Y1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function X1(e) {
  return _4.some((t) => e[t] >= 0);
}
const D4 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = Jn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Ys(t, {
            ...i,
            elementContext: "reference"
          }), l = Y1(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: X1(l)
            }
          };
        }
        case "escaped": {
          const a = await Ys(t, {
            ...i,
            altBoundary: !0
          }), l = Y1(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: X1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gT = /* @__PURE__ */ new Set(["left", "top"]);
async function j4(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = er(n), u = Ri(n), f = In(n) === "y", d = gT.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Jn(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: S
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return u && typeof S == "number" && (v = u === "end" ? S * -1 : S), f ? {
    x: v * h,
    y: m * d
  } : {
    x: m * d,
    y: v * h
  };
}
const q4 = function(e) {
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
      } = t, f = await j4(t, e);
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
}, F4 = function(e) {
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
          fn: (x) => {
            let {
              x: b,
              y: C
            } = x;
            return {
              x: b,
              y: C
            };
          }
        },
        ...f
      } = Jn(e, t), d = {
        x: n,
        y: o
      }, h = await Ys(t, f), p = In(er(i)), m = s0(p);
      let v = d[m], S = d[p];
      if (a) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", C = v + h[x], _ = v - h[b];
        v = _y(C, v, _);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = S + h[x], _ = S - h[b];
        S = _y(C, S, _);
      }
      const y = u.fn({
        ...t,
        [m]: v,
        [p]: S
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
}, z4 = function(e) {
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
      } = Jn(e, t), h = {
        x: n,
        y: o
      }, p = In(i), m = s0(p);
      let v = h[m], S = h[p];
      const y = Jn(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const _ = m === "y" ? "height" : "width", R = a.reference[m] - a.floating[_] + x.mainAxis, P = a.reference[m] + a.reference[_] - x.mainAxis;
        v < R ? v = R : v > P && (v = P);
      }
      if (d) {
        var b, C;
        const _ = m === "y" ? "width" : "height", R = gT.has(er(i)), P = a.reference[p] - a.floating[_] + (R && ((b = l.offset) == null ? void 0 : b[p]) || 0) + (R ? 0 : x.crossAxis), T = a.reference[p] + a.reference[_] + (R ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (R ? x.crossAxis : 0);
        S < P ? S = P : S > T && (S = T);
      }
      return {
        [m]: v,
        [p]: S
      };
    }
  };
}, $4 = function(e) {
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
      } = Jn(e, t), h = await Ys(t, d), p = er(i), m = Ri(i), v = In(i) === "y", {
        width: S,
        height: y
      } = a.floating;
      let x, b;
      p === "top" || p === "bottom" ? (x = p, b = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (b = p, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = S - h.left - h.right, R = Lr(y - h[x], C), P = Lr(S - h[b], _), T = !t.middlewareData.shift;
      let A = R, O = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !m) {
        const G = Ft(h.left, 0), z = Ft(h.right, 0), H = Ft(h.top, 0), Q = Ft(h.bottom, 0);
        v ? O = S - 2 * (G !== 0 || z !== 0 ? G + z : Ft(h.left, h.right)) : A = y - 2 * (H !== 0 || Q !== 0 ? H + Q : Ft(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: O,
        availableHeight: A
      });
      const j = await l.getDimensions(u.floating);
      return S !== j.width || y !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Bu() {
  return typeof window < "u";
}
function Ni(e) {
  return mT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  var t;
  return (t = (mT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mT(e) {
  return Bu() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function vn(e) {
  return Bu() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Ln(e) {
  return Bu() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function Q1(e) {
  return !Bu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const B4 = /* @__PURE__ */ new Set(["inline", "contents"]);
function aa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !B4.has(i);
}
const V4 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function H4(e) {
  return V4.has(Ni(e));
}
const W4 = [":popover-open", ":modal"];
function Vu(e) {
  return W4.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const U4 = ["transform", "translate", "scale", "rotate", "perspective"], G4 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], K4 = ["paint", "layout", "strict", "content"];
function u0(e) {
  const t = c0(), n = vn(e) ? yn(e) : e;
  return U4.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || G4.some((o) => (n.willChange || "").includes(o)) || K4.some((o) => (n.contain || "").includes(o));
}
function Y4(e) {
  let t = Dr(e);
  for (; Ln(t) && !bi(t); ) {
    if (u0(t))
      return t;
    if (Vu(t))
      return null;
    t = Dr(t);
  }
  return null;
}
function c0() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const X4 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function bi(e) {
  return X4.has(Ni(e));
}
function yn(e) {
  return $t(e).getComputedStyle(e);
}
function Hu(e) {
  return vn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Dr(e) {
  if (Ni(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Q1(e) && e.host || // Fallback.
    qn(e)
  );
  return Q1(t) ? t.host : t;
}
function vT(e) {
  const t = Dr(e);
  return bi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && aa(t) ? t : vT(t);
}
function Xs(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = vT(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = $t(i);
  if (a) {
    const u = Ey(l);
    return t.concat(l, l.visualViewport || [], aa(i) ? i : [], u && n ? Xs(u) : []);
  }
  return t.concat(i, Xs(i, [], n));
}
function Ey(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yT(e) {
  const t = yn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Ln(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = gu(n) !== a || gu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function f0(e) {
  return vn(e) ? e : e.contextElement;
}
function di(e) {
  const t = f0(e);
  if (!Ln(t))
    return Mn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = yT(t);
  let l = (a ? gu(n.width) : n.width) / o, u = (a ? gu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const Q4 = /* @__PURE__ */ Mn(0);
function wT(e) {
  const t = $t(e);
  return !c0() || !t.visualViewport ? Q4 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Z4(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function mo(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = f0(e);
  let l = Mn(1);
  t && (o ? vn(o) && (l = di(o)) : l = di(e));
  const u = Z4(a, n, o) ? wT(a) : Mn(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = $t(a), v = o && vn(o) ? $t(o) : o;
    let S = m, y = Ey(S);
    for (; y && o && v !== S; ) {
      const x = di(y), b = y.getBoundingClientRect(), C = yn(y), _ = b.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, R = b.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, p *= x.y, f += _, d += R, S = $t(y), y = Ey(S);
    }
  }
  return vu({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Wu(e, t) {
  const n = Hu(e).scrollLeft;
  return t ? t.left + n : mo(qn(e)).left + n;
}
function xT(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Wu(e, n), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function J4(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const a = i === "fixed", l = qn(o), u = t ? Vu(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Mn(1);
  const h = Mn(0), p = Ln(o);
  if ((p || !p && !a) && ((Ni(o) !== "body" || aa(l)) && (f = Hu(o)), Ln(o))) {
    const v = mo(o);
    d = di(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? xT(l, f) : Mn(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function eB(e) {
  return Array.from(e.getClientRects());
}
function tB(e) {
  const t = qn(e), n = Hu(e), o = e.ownerDocument.body, i = Ft(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Ft(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Wu(e);
  const u = -n.scrollTop;
  return yn(o).direction === "rtl" && (l += Ft(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const Z1 = 25;
function nB(e, t) {
  const n = $t(e), o = qn(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = c0();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Wu(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, S = Math.abs(o.clientWidth - p.clientWidth - v);
    S <= Z1 && (a -= S);
  } else d <= Z1 && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const rB = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function oB(e, t) {
  const n = mo(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ln(e) ? di(e) : Mn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function J1(e, t, n) {
  let o;
  if (t === "viewport")
    o = nB(e, n);
  else if (t === "document")
    o = tB(qn(e));
  else if (vn(t))
    o = oB(t, n);
  else {
    const i = wT(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return vu(o);
}
function bT(e, t) {
  const n = Dr(e);
  return n === t || !vn(n) || bi(n) ? !1 : yn(n).position === "fixed" || bT(n, t);
}
function iB(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Xs(e, [], !1).filter((u) => vn(u) && Ni(u) !== "body"), i = null;
  const a = yn(e).position === "fixed";
  let l = a ? Dr(e) : e;
  for (; vn(l) && !bi(l); ) {
    const u = yn(l), f = u0(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && rB.has(i.position) || aa(l) && !f && bT(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Dr(l);
  }
  return t.set(e, o), o;
}
function sB(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Vu(t) ? [] : iB(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = J1(t, h, i);
    return d.top = Ft(p.top, d.top), d.right = Lr(p.right, d.right), d.bottom = Lr(p.bottom, d.bottom), d.left = Ft(p.left, d.left), d;
  }, J1(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function aB(e) {
  const {
    width: t,
    height: n
  } = yT(e);
  return {
    width: t,
    height: n
  };
}
function lB(e, t, n) {
  const o = Ln(t), i = qn(t), a = n === "fixed", l = mo(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Mn(0);
  function d() {
    f.x = Wu(i);
  }
  if (o || !o && !a)
    if ((Ni(t) !== "body" || aa(i)) && (u = Hu(t)), o) {
      const v = mo(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? xT(i, u) : Mn(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Ld(e) {
  return yn(e).position === "static";
}
function e_(e, t) {
  if (!Ln(e) || yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qn(e) === n && (n = n.ownerDocument.body), n;
}
function _T(e, t) {
  const n = $t(e);
  if (Vu(e))
    return n;
  if (!Ln(e)) {
    let i = Dr(e);
    for (; i && !bi(i); ) {
      if (vn(i) && !Ld(i))
        return i;
      i = Dr(i);
    }
    return n;
  }
  let o = e_(e, t);
  for (; o && H4(o) && Ld(o); )
    o = e_(o, t);
  return o && bi(o) && Ld(o) && !u0(o) ? n : o || Y4(e) || n;
}
const uB = async function(e) {
  const t = this.getOffsetParent || _T, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: lB(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function cB(e) {
  return yn(e).direction === "rtl";
}
const fB = {
  convertOffsetParentRelativeRectToViewportRelativeRect: J4,
  getDocumentElement: qn,
  getClippingRect: sB,
  getOffsetParent: _T,
  getElementRects: uB,
  getClientRects: eB,
  getDimensions: aB,
  getScale: di,
  isElement: vn,
  isRTL: cB
};
function ST(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function dB(e, t) {
  let n = null, o;
  const i = qn(e);
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
    const S = Vl(p), y = Vl(i.clientWidth - (h + m)), x = Vl(i.clientHeight - (p + v)), b = Vl(h), _ = {
      rootMargin: -S + "px " + -y + "px " + -x + "px " + -b + "px",
      threshold: Ft(0, Lr(1, f)) || 1
    };
    let R = !0;
    function P(T) {
      const A = T[0].intersectionRatio;
      if (A !== f) {
        if (!R)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !ST(d, e.getBoundingClientRect()) && l(), R = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ..._,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, _);
    }
    n.observe(e);
  }
  return l(!0), a;
}
function hB(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = f0(e), h = i || a ? [...d ? Xs(d) : [], ...Xs(t)] : [];
  h.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const p = d && u ? dB(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = v) == null || _.observe(t);
    })), n();
  }), d && !f && v.observe(d), v.observe(t));
  let S, y = f ? mo(e) : null;
  f && x();
  function x() {
    const b = mo(e);
    y && !ST(y, b) && n(), y = b, S = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (b = v) == null || b.disconnect(), v = null, f && cancelAnimationFrame(S);
  };
}
const pB = q4, gB = F4, mB = L4, vB = $4, yB = D4, t_ = O4, wB = z4, xB = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: fB,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return M4(e, t, {
    ...i,
    platform: a
  });
};
var bB = typeof document < "u", _B = function() {
}, eu = bB ? k.useLayoutEffect : _B;
function yu(e, t) {
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
        if (!yu(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !yu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ET(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function n_(e, t) {
  const n = ET(e);
  return Math.round(t * n) / n;
}
function Dd(e) {
  const t = k.useRef(e);
  return eu(() => {
    t.current = e;
  }), t;
}
function SB(e) {
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
  yu(m, o) || v(o);
  const [S, y] = k.useState(null), [x, b] = k.useState(null), C = k.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), _ = k.useCallback((M) => {
    M !== A.current && (A.current = M, b(M));
  }, []), R = a || S, P = l || x, T = k.useRef(null), A = k.useRef(null), O = k.useRef(h), j = f != null, G = Dd(f), z = Dd(i), H = Dd(d), Q = k.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    z.current && (M.platform = z.current), xB(T.current, A.current, M).then((F) => {
      const X = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      L.current && !yu(O.current, X) && (O.current = X, ia.flushSync(() => {
        p(X);
      }));
    });
  }, [m, t, n, z, H]);
  eu(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = k.useRef(!1);
  eu(() => (L.current = !0, () => {
    L.current = !1;
  }), []), eu(() => {
    if (R && (T.current = R), P && (A.current = P), R && P) {
      if (G.current)
        return G.current(R, P, Q);
      Q();
    }
  }, [R, P, Q, G, j]);
  const B = k.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: _
  }), [C, _]), q = k.useMemo(() => ({
    reference: R,
    floating: P
  }), [R, P]), U = k.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return M;
    const F = n_(q.floating, h.x), X = n_(q.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + F + "px, " + X + "px)",
      ...ET(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: X
    };
  }, [n, u, q.floating, h.x, h.y]);
  return k.useMemo(() => ({
    ...h,
    update: Q,
    refs: B,
    elements: q,
    floatingStyles: U
  }), [h, Q, B, q, U]);
}
const EB = (e) => {
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
      return o && t(o) ? o.current != null ? t_({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? t_({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, CB = (e, t) => ({
  ...pB(e),
  options: [e, t]
}), kB = (e, t) => ({
  ...gB(e),
  options: [e, t]
}), RB = (e, t) => ({
  ...wB(e),
  options: [e, t]
}), NB = (e, t) => ({
  ...mB(e),
  options: [e, t]
}), PB = (e, t) => ({
  ...vB(e),
  options: [e, t]
}), TB = (e, t) => ({
  ...yB(e),
  options: [e, t]
}), IB = (e, t) => ({
  ...EB(e),
  options: [e, t]
});
var AB = "Arrow", CT = k.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ N.jsx(
    je.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ N.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
CT.displayName = AB;
var MB = CT, d0 = "Popper", [kT, Uu] = ki(d0), [OB, RT] = kT(d0), NT = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = k.useState(null);
  return /* @__PURE__ */ N.jsx(OB, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
NT.displayName = d0;
var PT = "PopperAnchor", TT = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = RT(PT, n), l = k.useRef(null), u = Be(t, l), f = k.useRef(null);
    return k.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ N.jsx(je.div, { ...i, ref: u });
  }
);
TT.displayName = PT;
var h0 = "PopperContent", [LB, DB] = kT(h0), IT = k.forwardRef(
  (e, t) => {
    var Y, te, se, ae, ce, de;
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
      onPlaced: S,
      ...y
    } = e, x = RT(h0, n), [b, C] = k.useState(null), _ = Be(t, (pe) => C(pe)), [R, P] = k.useState(null), T = XP(R), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, j = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, z = Array.isArray(d) ? d : [d], H = z.length > 0, Q = {
      padding: G,
      boundary: z.filter(qB),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: L, floatingStyles: B, placement: q, isPositioned: U, middlewareData: M } = SB({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...pe) => hB(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        CB({ mainAxis: i + O, alignmentAxis: l }),
        f && kB({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? RB() : void 0,
          ...Q
        }),
        f && NB({ ...Q }),
        PB({
          ...Q,
          apply: ({ elements: pe, rects: _e, availableWidth: me, availableHeight: Ne }) => {
            const { width: Ee, height: Je } = _e.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${me}px`), Ue.setProperty("--radix-popper-available-height", `${Ne}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        R && IB({ element: R, padding: u }),
        FB({ arrowWidth: A, arrowHeight: O }),
        m && TB({ strategy: "referenceHidden", ...Q })
      ]
    }), [F, X] = OT(q), D = go(S);
    wt(() => {
      U && (D == null || D());
    }, [U, D]);
    const W = (Y = M.arrow) == null ? void 0 : Y.x, ie = (te = M.arrow) == null ? void 0 : te.y, V = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = k.useState();
    return wt(() => {
      b && ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: U ? B.transform : "translate(0, -200%)",
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
        children: /* @__PURE__ */ N.jsx(
          LB,
          {
            scope: n,
            placedSide: F,
            onArrowChange: P,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: V,
            children: /* @__PURE__ */ N.jsx(
              je.div,
              {
                "data-side": F,
                "data-align": X,
                ...y,
                ref: _,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
IT.displayName = h0;
var AT = "PopperArrow", jB = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, MT = k.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = DB(AT, o), l = jB[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ N.jsx(
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
        children: /* @__PURE__ */ N.jsx(
          MB,
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
MT.displayName = AT;
function qB(e) {
  return e !== null;
}
var FB = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, b, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = OT(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let S = "", y = "";
    return d === "bottom" ? (S = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (S = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (S = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (S = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: S, y } };
  }
});
function OT(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var LT = NT, DT = TT, jT = IT, qT = MT, zB = "Portal", Gu = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = k.useState(!1);
  wt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Qq.createPortal(/* @__PURE__ */ N.jsx(je.div, { ...o, ref: t }), l) : null;
});
Gu.displayName = zB;
// @__NO_SIDE_EFFECTS__
function $B(e) {
  const t = /* @__PURE__ */ BB(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(HB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function BB(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = UB(i), u = WB(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var VB = Symbol("radix.slottable");
function HB(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === VB;
}
function WB(e, t) {
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
function UB(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var FT = Object.freeze({
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
}), GB = "VisuallyHidden", zT = k.forwardRef(
  (e, t) => /* @__PURE__ */ N.jsx(
    je.span,
    {
      ...e,
      ref: t,
      style: { ...FT, ...e.style }
    }
  )
);
zT.displayName = GB;
var KB = zT, YB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ri = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Wl = {}, jd = 0, $T = function(e) {
  return e && (e.host || $T(e.parentNode));
}, XB = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = $T(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, QB = function(e, t, n, o) {
  var i = XB(t, Array.isArray(e) ? e : [e]);
  Wl[n] || (Wl[n] = /* @__PURE__ */ new WeakMap());
  var a = Wl[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(p) {
    !p || u.has(p) || (u.add(p), d(p.parentNode));
  };
  i.forEach(d);
  var h = function(p) {
    !p || f.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var v = m.getAttribute(o), S = v !== null && v !== "false", y = (ri.get(m) || 0) + 1, x = (a.get(m) || 0) + 1;
          ri.set(m, y), a.set(m, x), l.push(m), y === 1 && S && Hl.set(m, !0), x === 1 && m.setAttribute(n, "true"), S || m.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return h(t), u.clear(), jd++, function() {
    l.forEach(function(p) {
      var m = ri.get(p) - 1, v = a.get(p) - 1;
      ri.set(p, m), a.set(p, v), m || (Hl.has(p) || p.removeAttribute(o), Hl.delete(p)), v || p.removeAttribute(n);
    }), jd--, jd || (ri = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Wl = {});
  };
}, BT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = YB(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), QB(o, i, n, "aria-hidden")) : function() {
    return null;
  };
}, Tn = function() {
  return Tn = Object.assign || function(t) {
    for (var n, o = 1, i = arguments.length; o < i; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Tn.apply(this, arguments);
};
function VT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function ZB(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var tu = "right-scroll-bar-position", nu = "width-before-scroll-bar", JB = "with-scroll-bars-hidden", e5 = "--removed-body-scroll-bar-size";
function qd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function t5(e, t) {
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
var n5 = typeof window < "u" ? k.useLayoutEffect : k.useEffect, r_ = /* @__PURE__ */ new WeakMap();
function r5(e, t) {
  var n = t5(null, function(o) {
    return e.forEach(function(i) {
      return qd(i, o);
    });
  });
  return n5(function() {
    var o = r_.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || qd(u, null);
      }), a.forEach(function(u) {
        i.has(u) || qd(u, l);
      });
    }
    r_.set(n, e);
  }, [e]), n;
}
function o5(e) {
  return e;
}
function i5(e, t) {
  t === void 0 && (t = o5);
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
function s5(e) {
  e === void 0 && (e = {});
  var t = i5(null);
  return t.options = Tn({ async: !0, ssr: !1 }, e), t;
}
var HT = function(e) {
  var t = e.sideCar, n = VT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return k.createElement(o, Tn({}, n));
};
HT.isSideCarExport = !0;
function a5(e, t) {
  return e.useMedium(t), HT;
}
var WT = s5(), Fd = function() {
}, Ku = k.forwardRef(function(e, t) {
  var n = k.useRef(null), o = k.useState({
    onScrollCapture: Fd,
    onWheelCapture: Fd,
    onTouchMoveCapture: Fd
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, S = e.noIsolation, y = e.inert, x = e.allowPinchZoom, b = e.as, C = b === void 0 ? "div" : b, _ = e.gapMode, R = VT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, T = r5([n, t]), A = Tn(Tn({}, R), i);
  return k.createElement(
    k.Fragment,
    null,
    h && k.createElement(P, { sideCar: WT, removeScrollBar: d, shards: p, noRelative: v, noIsolation: S, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: _ }),
    l ? k.cloneElement(k.Children.only(u), Tn(Tn({}, A), { ref: T })) : k.createElement(C, Tn({}, A, { className: f, ref: T }), u)
  );
});
Ku.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ku.classNames = {
  fullWidth: nu,
  zeroRight: tu
};
var l5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function u5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = l5();
  return t && e.setAttribute("nonce", t), e;
}
function c5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function f5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var d5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = u5()) && (c5(t, n), f5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, h5 = function() {
  var e = d5();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, UT = function() {
  var e = h5(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, p5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zd = function(e) {
  return parseInt(e || "", 10) || 0;
}, g5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zd(n), zd(o), zd(i)];
}, m5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return p5;
  var t = g5(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, v5 = UT(), hi = "data-scroll-locked", y5 = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(JB, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(hi, `] {
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
  
  .`).concat(tu, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(nu, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(tu, " .").concat(tu, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(nu, " .").concat(nu, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(hi, `] {
    `).concat(e5, ": ").concat(u, `px;
  }
`);
}, o_ = function() {
  var e = parseInt(document.body.getAttribute(hi) || "0", 10);
  return isFinite(e) ? e : 0;
}, w5 = function() {
  k.useEffect(function() {
    return document.body.setAttribute(hi, (o_() + 1).toString()), function() {
      var e = o_() - 1;
      e <= 0 ? document.body.removeAttribute(hi) : document.body.setAttribute(hi, e.toString());
    };
  }, []);
}, x5 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  w5();
  var a = k.useMemo(function() {
    return m5(i);
  }, [i]);
  return k.createElement(v5, { styles: y5(a, !t, i, n ? "" : "!important") });
}, Cy = !1;
if (typeof window < "u")
  try {
    var Ul = Object.defineProperty({}, "passive", {
      get: function() {
        return Cy = !0, !0;
      }
    });
    window.addEventListener("test", Ul, Ul), window.removeEventListener("test", Ul, Ul);
  } catch {
    Cy = !1;
  }
var oi = Cy ? { passive: !1 } : !1, b5 = function(e) {
  return e.tagName === "TEXTAREA";
}, GT = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !b5(e) && n[t] === "visible")
  );
}, _5 = function(e) {
  return GT(e, "overflowY");
}, S5 = function(e) {
  return GT(e, "overflowX");
}, i_ = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = KT(e, o);
    if (i) {
      var a = YT(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, E5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, C5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, KT = function(e, t) {
  return e === "v" ? _5(t) : S5(t);
}, YT = function(e, t) {
  return e === "v" ? E5(t) : C5(t);
}, k5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, R5 = function(e, t, n, o, i) {
  var a = k5(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = YT(e, u), S = v[0], y = v[1], x = v[2], b = y - x - a * S;
    (S || b) && KT(e, u) && (p += b, m += S);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Gl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, s_ = function(e) {
  return [e.deltaX, e.deltaY];
}, a_ = function(e) {
  return e && "current" in e ? e.current : e;
}, N5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, P5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, T5 = 0, ii = [];
function I5(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), o = k.useRef(), i = k.useState(T5++)[0], a = k.useState(UT)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = ZB([e.lockRef.current], (e.shards || []).map(a_), !0).filter(Boolean);
      return y.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = k.useCallback(function(y, x) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !l.current.allowPinchZoom;
    var b = Gl(y), C = n.current, _ = "deltaX" in y ? y.deltaX : C[0] - b[0], R = "deltaY" in y ? y.deltaY : C[1] - b[1], P, T = y.target, A = Math.abs(_) > Math.abs(R) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = window.getSelection(), j = O && O.anchorNode, G = j ? j === T || j.contains(T) : !1;
    if (G)
      return !1;
    var z = i_(A, T);
    if (!z)
      return !0;
    if (z ? P = A : (P = A === "v" ? "h" : "v", z = i_(A, T)), !z)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || R) && (o.current = P), !P)
      return !0;
    var H = o.current || P;
    return R5(H, x, y, H === "h" ? _ : R);
  }, []), f = k.useCallback(function(y) {
    var x = y;
    if (!(!ii.length || ii[ii.length - 1] !== a)) {
      var b = "deltaY" in x ? s_(x) : Gl(x), C = t.current.filter(function(P) {
        return P.name === x.type && (P.target === x.target || x.target === P.shadowParent) && N5(P.delta, b);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(a_).filter(Boolean).filter(function(P) {
          return P.contains(x.target);
        }), R = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = k.useCallback(function(y, x, b, C) {
    var _ = { name: y, delta: x, target: b, should: C, shadowParent: A5(b) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== _;
      });
    }, 1);
  }, []), h = k.useCallback(function(y) {
    n.current = Gl(y), o.current = void 0;
  }, []), p = k.useCallback(function(y) {
    d(y.type, s_(y), y.target, u(y, e.lockRef.current));
  }, []), m = k.useCallback(function(y) {
    d(y.type, Gl(y), y.target, u(y, e.lockRef.current));
  }, []);
  k.useEffect(function() {
    return ii.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", f, oi), document.addEventListener("touchmove", f, oi), document.addEventListener("touchstart", h, oi), function() {
      ii = ii.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, oi), document.removeEventListener("touchmove", f, oi), document.removeEventListener("touchstart", h, oi);
    };
  }, []);
  var v = e.removeScrollBar, S = e.inert;
  return k.createElement(
    k.Fragment,
    null,
    S ? k.createElement(a, { styles: P5(i) }) : null,
    v ? k.createElement(x5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function A5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const M5 = a5(WT, I5);
var p0 = k.forwardRef(function(e, t) {
  return k.createElement(Ku, Tn({}, e, { ref: t, sideCar: M5 }));
});
p0.classNames = Ku.classNames;
var O5 = [" ", "Enter", "ArrowUp", "ArrowDown"], L5 = [" ", "Enter"], vo = "Select", [Yu, Xu, D5] = n4(vo), [Pi] = ki(vo, [
  D5,
  Uu
]), Qu = Uu(), [j5, jr] = Pi(vo), [q5, F5] = Pi(vo), XT = (e) => {
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
    form: S
  } = e, y = Qu(t), [x, b] = k.useState(null), [C, _] = k.useState(null), [R, P] = k.useState(!1), T = o4(d), [A, O] = Ks({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: vo
  }), [j, G] = Ks({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: vo
  }), z = k.useRef(null), H = x ? S || !!x.closest("form") : !0, [Q, L] = k.useState(/* @__PURE__ */ new Set()), B = Array.from(Q).map((q) => q.props.value).join(";");
  return /* @__PURE__ */ N.jsx(LT, { ...y, children: /* @__PURE__ */ N.jsxs(
    j5,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: b,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: R,
      onValueNodeHasChildrenChange: P,
      contentId: co(),
      value: j,
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: z,
      disabled: m,
      children: [
        /* @__PURE__ */ N.jsx(Yu.Provider, { scope: t, children: /* @__PURE__ */ N.jsx(
          q5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: k.useCallback((q) => {
              L((U) => new Set(U).add(q));
            }, []),
            onNativeOptionRemove: k.useCallback((q) => {
              L((U) => {
                const M = new Set(U);
                return M.delete(q), M;
              });
            }, []),
            children: n
          }
        ) }),
        H ? /* @__PURE__ */ N.jsxs(
          yI,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: j,
            onChange: (q) => G(q.target.value),
            disabled: m,
            form: S,
            children: [
              j === void 0 ? /* @__PURE__ */ N.jsx("option", { value: "" }) : null,
              Array.from(Q)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
XT.displayName = vo;
var QT = "SelectTrigger", ZT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Qu(n), l = jr(QT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = Xu(n), h = k.useRef("touch"), [p, m, v] = xI((y) => {
      const x = d().filter((_) => !_.disabled), b = x.find((_) => _.value === l.value), C = bI(x, y, b);
      C !== void 0 && l.onValueChange(C.value);
    }), S = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ N.jsx(DT, { asChild: !0, ...a, children: /* @__PURE__ */ N.jsx(
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
        "data-placeholder": wI(l.value) ? "" : void 0,
        ...i,
        ref: f,
        onClick: Le(i.onClick, (y) => {
          y.currentTarget.focus(), h.current !== "mouse" && S(y);
        }),
        onPointerDown: Le(i.onPointerDown, (y) => {
          h.current = y.pointerType;
          const x = y.target;
          x.hasPointerCapture(y.pointerId) && x.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (S(y), y.preventDefault());
        }),
        onKeyDown: Le(i.onKeyDown, (y) => {
          const x = p.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && O5.includes(y.key) && (S(), y.preventDefault());
        })
      }
    ) });
  }
);
ZT.displayName = QT;
var JT = "SelectValue", eI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = jr(JT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return wt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ N.jsx(
      je.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: wI(f.value) ? /* @__PURE__ */ N.jsx(N.Fragment, { children: l }) : a
      }
    );
  }
);
eI.displayName = JT;
var z5 = "SelectIcon", tI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
tI.displayName = z5;
var $5 = "SelectPortal", nI = (e) => /* @__PURE__ */ N.jsx(Gu, { asChild: !0, ...e });
nI.displayName = $5;
var yo = "SelectContent", rI = k.forwardRef(
  (e, t) => {
    const n = jr(yo, e.__scopeSelect), [o, i] = k.useState();
    if (wt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? ia.createPortal(
        /* @__PURE__ */ N.jsx(oI, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx(Yu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ N.jsx(iI, { ...e, ref: t });
  }
);
rI.displayName = yo;
var dn = 10, [oI, qr] = Pi(yo), B5 = "SelectContentImpl", V5 = /* @__PURE__ */ $B("SelectContent.RemoveScroll"), iI = k.forwardRef(
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
      sticky: S,
      hideWhenDetached: y,
      avoidCollisions: x,
      //
      ...b
    } = e, C = jr(yo, n), [_, R] = k.useState(null), [P, T] = k.useState(null), A = Be(t, (Y) => R(Y)), [O, j] = k.useState(null), [G, z] = k.useState(
      null
    ), H = Xu(n), [Q, L] = k.useState(!1), B = k.useRef(!1);
    k.useEffect(() => {
      if (_) return BT(_);
    }, [_]), dT();
    const q = k.useCallback(
      (Y) => {
        const [te, ...se] = H().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of Y)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [H, P]
    ), U = k.useCallback(
      () => q([O, _]),
      [q, O, _]
    );
    k.useEffect(() => {
      Q && U();
    }, [Q, U]);
    const { onOpenChange: M, triggerPointerDownPosRef: F } = C;
    k.useEffect(() => {
      if (_) {
        let Y = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          Y = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = F.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = F.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          Y.x <= 10 && Y.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, F]), k.useEffect(() => {
      const Y = () => M(!1);
      return window.addEventListener("blur", Y), window.addEventListener("resize", Y), () => {
        window.removeEventListener("blur", Y), window.removeEventListener("resize", Y);
      };
    }, [M]);
    const [X, D] = xI((Y) => {
      const te = H().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = bI(te, Y, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), W = k.useCallback(
      (Y, te, se) => {
        const ae = !B.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (j(Y), ae && (B.current = !0));
      },
      [C.value]
    ), ie = k.useCallback(() => _ == null ? void 0 : _.focus(), [_]), V = k.useCallback(
      (Y, te, se) => {
        const ae = !B.current && !se;
        (C.value !== void 0 && C.value === te || ae) && z(Y);
      },
      [C.value]
    ), Z = o === "popper" ? ky : sI, ee = Z === ky ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: S,
      hideWhenDetached: y,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ N.jsx(
      oI,
      {
        scope: n,
        content: _,
        viewport: P,
        onViewportChange: T,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: V,
        focusSelectedItem: U,
        selectedItemText: G,
        position: o,
        isPositioned: Q,
        searchRef: X,
        children: /* @__PURE__ */ N.jsx(p0, { as: V5, allowPinchZoom: !0, children: /* @__PURE__ */ N.jsx(
          i0,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (Y) => {
              Y.preventDefault();
            },
            onUnmountAutoFocus: Le(i, (Y) => {
              var te;
              (te = C.trigger) == null || te.focus({ preventScroll: !0 }), Y.preventDefault();
            }),
            children: /* @__PURE__ */ N.jsx(
              $u,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (Y) => Y.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ N.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (Y) => Y.preventDefault(),
                    ...b,
                    ...ee,
                    onPlaced: () => L(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Le(b.onKeyDown, (Y) => {
                      const te = Y.ctrlKey || Y.altKey || Y.metaKey;
                      if (Y.key === "Tab" && Y.preventDefault(), !te && Y.key.length === 1 && D(Y.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Y.key)) {
                        let ae = H().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(Y.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Y.key)) {
                          const ce = Y.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => q(ae)), Y.preventDefault();
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
iI.displayName = B5;
var H5 = "SelectItemAlignedPosition", sI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = jr(yo, n), l = qr(yo, n), [u, f] = k.useState(null), [d, h] = k.useState(null), p = Be(t, (A) => h(A)), m = Xu(n), v = k.useRef(!1), S = k.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: b, focusSelectedItem: C } = l, _ = k.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && b) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), j = a.valueNode.getBoundingClientRect(), G = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = j.left - ce, pe = A.left - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = j1(de, [
          dn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(dn, Ne - me)
        ]);
        u.style.minWidth = _e + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - G.right, de = window.innerWidth - j.right - ce, pe = window.innerWidth - A.right - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = j1(de, [
          dn,
          Math.max(dn, Ne - me)
        ]);
        u.style.minWidth = _e + "px", u.style.right = Ee + "px";
      }
      const z = m(), H = window.innerHeight - dn * 2, Q = y.scrollHeight, L = window.getComputedStyle(d), B = parseInt(L.borderTopWidth, 10), q = parseInt(L.paddingTop, 10), U = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), F = B + q + Q + M + U, X = Math.min(x.offsetHeight * 5, F), D = window.getComputedStyle(y), W = parseInt(D.paddingTop, 10), ie = parseInt(D.paddingBottom, 10), V = A.top + A.height / 2 - dn, Z = H - V, ee = x.offsetHeight / 2, Y = x.offsetTop + ee, te = B + q + Y, se = F - te;
      if (te <= V) {
        const ce = z.length > 0 && x === z[z.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + U
        ), _e = te + pe;
        u.style.height = _e + "px";
      } else {
        const ce = z.length > 0 && x === z[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          V,
          B + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? W : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - V + y.offsetTop;
      }
      u.style.margin = `${dn}px 0`, u.style.minHeight = X + "px", u.style.maxHeight = H + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    u,
    d,
    y,
    x,
    b,
    a.dir,
    o
  ]);
  wt(() => _(), [_]);
  const [R, P] = k.useState();
  wt(() => {
    d && P(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = k.useCallback(
    (A) => {
      A && S.current === !0 && (_(), C == null || C(), S.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ N.jsx(
    U5,
    {
      scope: n,
      contentWrapper: u,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ N.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: R
          },
          children: /* @__PURE__ */ N.jsx(
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
sI.displayName = H5;
var W5 = "SelectPopperPosition", ky = k.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = dn,
    ...a
  } = e, l = Qu(n);
  return /* @__PURE__ */ N.jsx(
    jT,
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
ky.displayName = W5;
var [U5, g0] = Pi(yo, {}), Ry = "SelectViewport", aI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = qr(Ry, n), l = g0(Ry, n), u = Be(t, a.onViewportChange), f = k.useRef(0);
    return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ N.jsx(Yu.Slot, { scope: n, children: /* @__PURE__ */ N.jsx(
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
                const S = window.innerHeight - dn * 2, y = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), b = Math.max(y, x);
                if (b < S) {
                  const C = b + v, _ = Math.min(S, C), R = C - _;
                  p.style.height = _ + "px", p.style.bottom === "0px" && (h.scrollTop = R > 0 ? R : 0, p.style.justifyContent = "flex-end");
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
aI.displayName = Ry;
var lI = "SelectGroup", [G5, K5] = Pi(lI), Y5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = co();
    return /* @__PURE__ */ N.jsx(G5, { scope: n, id: i, children: /* @__PURE__ */ N.jsx(je.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
Y5.displayName = lI;
var uI = "SelectLabel", X5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = K5(uI, n);
    return /* @__PURE__ */ N.jsx(je.div, { id: i.id, ...o, ref: t });
  }
);
X5.displayName = uI;
var wu = "SelectItem", [Q5, cI] = Pi(wu), fI = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = jr(wu, n), f = qr(wu, n), d = u.value === o, [h, p] = k.useState(a ?? ""), [m, v] = k.useState(!1), S = Be(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, i);
      }
    ), y = co(), x = k.useRef("touch"), b = () => {
      i || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ N.jsx(
      Q5,
      {
        scope: n,
        value: o,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: k.useCallback((C) => {
          p((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ N.jsx(
          Yu.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: i,
            textValue: h,
            children: /* @__PURE__ */ N.jsx(
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
                ref: S,
                onFocus: Le(l.onFocus, () => v(!0)),
                onBlur: Le(l.onBlur, () => v(!1)),
                onClick: Le(l.onClick, () => {
                  x.current !== "mouse" && b();
                }),
                onPointerUp: Le(l.onPointerUp, () => {
                  x.current === "mouse" && b();
                }),
                onPointerDown: Le(l.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: Le(l.onPointerMove, (C) => {
                  var _;
                  x.current = C.pointerType, i ? (_ = f.onItemLeave) == null || _.call(f) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Le(l.onPointerLeave, (C) => {
                  var _;
                  C.currentTarget === document.activeElement && ((_ = f.onItemLeave) == null || _.call(f));
                }),
                onKeyDown: Le(l.onKeyDown, (C) => {
                  var R;
                  ((R = f.searchRef) == null ? void 0 : R.current) !== "" && C.key === " " || (L5.includes(C.key) && b(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
fI.displayName = wu;
var Ts = "SelectItemText", dI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = jr(Ts, n), u = qr(Ts, n), f = cI(Ts, n), d = F5(Ts, n), [h, p] = k.useState(null), m = Be(
      t,
      (b) => p(b),
      f.onItemTextChange,
      (b) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, b, f.value, f.disabled);
      }
    ), v = h == null ? void 0 : h.textContent, S = k.useMemo(
      () => /* @__PURE__ */ N.jsx("option", { value: f.value, disabled: f.disabled, children: v }, f.value),
      [f.disabled, f.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return wt(() => (y(S), () => x(S)), [y, x, S]), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(je.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ia.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
dI.displayName = Ts;
var hI = "SelectItemIndicator", pI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return cI(hI, n).isSelected ? /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
pI.displayName = hI;
var Ny = "SelectScrollUpButton", gI = k.forwardRef((e, t) => {
  const n = qr(Ny, e.__scopeSelect), o = g0(Ny, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return wt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollTop > 0;
        a(d);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ N.jsx(
    vI,
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
gI.displayName = Ny;
var Py = "SelectScrollDownButton", mI = k.forwardRef((e, t) => {
  const n = qr(Py, e.__scopeSelect), o = g0(Py, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return wt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollHeight - f.clientHeight, h = Math.ceil(f.scrollTop) < d;
        a(h);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ N.jsx(
    vI,
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
mI.displayName = Py;
var vI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = qr("SelectScrollButton", n), l = k.useRef(null), u = Xu(n), f = k.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return k.useEffect(() => () => f(), [f]), wt(() => {
    var h;
    const d = u().find((p) => p.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ N.jsx(
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
}), Z5 = "SelectSeparator", J5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ N.jsx(je.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
J5.displayName = Z5;
var Ty = "SelectArrow", eV = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Qu(n), a = jr(Ty, n), l = qr(Ty, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ N.jsx(qT, { ...i, ...o, ref: t }) : null;
  }
);
eV.displayName = Ty;
var tV = "SelectBubbleInput", yI = k.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = k.useRef(null), a = Be(o, i), l = YP(t);
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
    }, [l, t]), /* @__PURE__ */ N.jsx(
      je.select,
      {
        ...n,
        style: { ...FT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
yI.displayName = tV;
function wI(e) {
  return e === "" || e === void 0;
}
function xI(e) {
  const t = go(e), n = k.useRef(""), o = k.useRef(0), i = k.useCallback(
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
function bI(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = nV(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function nV(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var rV = XT, oV = ZT, iV = eI, sV = tI, aV = nI, lV = rI, uV = aI, cV = fI, fV = dI, dV = pI, hV = gI, pV = mI;
function Iy({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(rV, { "data-slot": "select", ...e });
}
function Ay({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(iV, { "data-slot": "select-value", ...e });
}
function My({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(
    oV,
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
        /* @__PURE__ */ N.jsx(sV, { asChild: !0, children: /* @__PURE__ */ N.jsx(aT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Oy({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ N.jsx(aV, { children: /* @__PURE__ */ N.jsxs(
    lV,
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
        /* @__PURE__ */ N.jsx(gV, {}),
        /* @__PURE__ */ N.jsx(
          uV,
          {
            className: Me(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ N.jsx(mV, {})
      ]
    }
  ) });
}
function Ly({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsxs(
    cV,
    {
      "data-slot": "select-item",
      className: Me(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ N.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ N.jsx(dV, { children: /* @__PURE__ */ N.jsx(sT, { className: "size-4" }) }) }),
        /* @__PURE__ */ N.jsx(fV, { children: t })
      ]
    }
  );
}
function gV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    hV,
    {
      "data-slot": "select-scroll-up-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx($$, { className: "size-4" })
    }
  );
}
function mV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    pV,
    {
      "data-slot": "select-scroll-down-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(aT, { className: "size-4" })
    }
  );
}
function vV(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = xo(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? "";
    return /* @__PURE__ */ N.jsxs("div", { className: "component-select-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: u.label }),
      /* @__PURE__ */ N.jsxs(Iy, { value: h, onValueChange: (p) => f == null ? void 0 : f(u.id, p), children: [
        /* @__PURE__ */ N.jsx(
          My,
          {
            className: "h-8 text-xs w-full",
            onMouseDown: (p) => p.stopPropagation(),
            onPointerDown: (p) => p.stopPropagation(),
            "aria-label": u.label,
            children: /* @__PURE__ */ N.jsx(Ay, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ N.jsx(Oy, { children: (u.options || []).map((p) => /* @__PURE__ */ N.jsx(Ly, { value: p, className: "text-xs", children: p }, p)) })
      ] })
    ] });
  }
  const { value: t, options: n, onChange: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ N.jsxs(Iy, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ N.jsx(
      My,
      {
        className: "h-8 text-xs",
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ N.jsx(Ay, { placeholder: i })
      }
    ),
    /* @__PURE__ */ N.jsx(Oy, { children: n.map((u) => /* @__PURE__ */ N.jsx(Ly, { value: u, className: "text-xs", children: u }, u)) })
  ] });
}
function yV(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l);
    u.displayName = a + "Context";
    const f = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: m, children: v, ...S } = p, y = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[f]) || u, x = k.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ N.jsx(y.Provider, { value: x, children: v });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, S = k.useContext(v);
      if (S) return S;
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
  return i.scopeName = e, [o, wV(i, ...t)];
}
function wV(...e) {
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
var xV = Symbol.for("react.lazy"), xu = Fy[" use ".trim().toString()];
function bV(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _I(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === xV && "_payload" in e && bV(e._payload);
}
// @__NO_SIDE_EFFECTS__
function SI(e) {
  const t = /* @__PURE__ */ _V(e), n = k.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    _I(a) && typeof xu == "function" && (a = xu(a._payload));
    const u = k.Children.toArray(a), f = u.find(EV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var EI = /* @__PURE__ */ SI("Slot");
// @__NO_SIDE_EFFECTS__
function _V(e) {
  const t = k.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (_I(i) && typeof xu == "function" && (i = xu(i._payload)), k.isValidElement(i)) {
      const l = kV(i), u = CV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var SV = Symbol("radix.slottable");
function EV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SV;
}
function CV(e, t) {
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
function kV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var RV = [
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
], CI = RV.reduce((e, t) => {
  const n = /* @__PURE__ */ SI(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), m0 = "Progress", v0 = 100, [NV] = yV(m0), [PV, TV] = NV(m0), kI = k.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: i,
      getValueLabel: a = IV,
      ...l
    } = e;
    (i || i === 0) && !l_(i) && console.error(AV(`${i}`, "Progress"));
    const u = l_(i) ? i : v0;
    o !== null && !u_(o, u) && console.error(MV(`${o}`, "Progress"));
    const f = u_(o, u) ? o : null, d = bu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ N.jsx(PV, { scope: n, value: f, max: u, children: /* @__PURE__ */ N.jsx(
      CI.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": bu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": PI(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
kI.displayName = m0;
var RI = "ProgressIndicator", NI = k.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, i = TV(RI, n);
    return /* @__PURE__ */ N.jsx(
      CI.div,
      {
        "data-state": PI(i.value, i.max),
        "data-value": i.value ?? void 0,
        "data-max": i.max,
        ...o,
        ref: t
      }
    );
  }
);
NI.displayName = RI;
function IV(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function PI(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function bu(e) {
  return typeof e == "number";
}
function l_(e) {
  return bu(e) && !isNaN(e) && e > 0;
}
function u_(e, t) {
  return bu(e) && !isNaN(e) && e <= t && e >= 0;
}
function AV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v0}\`.`;
}
function MV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var OV = kI, LV = NI;
function c_({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsx(
    OV,
    {
      "data-slot": "progress",
      className: Me(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ N.jsx(
        LV,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function DV(e) {
  var u;
  if ("component" in e) {
    const { component: f } = e, d = xo(), h = ((u = d == null ? void 0 : d.nodeData.values) == null ? void 0 : u[f.id]) ?? f.value ?? 0, p = f.max ?? 100, m = f.min ?? 0, v = Math.min(100, Math.max(0, (h - m) / (p - m) * 100));
    return /* @__PURE__ */ N.jsxs("div", { className: "component-progress-field space-y-1.5", children: [
      f.label && /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: f.label }),
      /* @__PURE__ */ N.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ N.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
          Math.round(v),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ N.jsx(c_, { value: v, className: "h-2" })
    ] });
  }
  const { value: t, onChange: n, label: o, min: i = 0, max: a = 100 } = e, l = Math.min(100, Math.max(0, (t - i) / (a - i) * 100));
  return /* @__PURE__ */ N.jsxs("div", { className: "space-y-1.5", children: [
    o && /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: o }),
    /* @__PURE__ */ N.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ N.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
      /* @__PURE__ */ N.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ N.jsx(c_, { value: l, className: "h-2" })
  ] });
}
function jV({ component: e }) {
  return /* @__PURE__ */ N.jsxs(
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
        e.icon && /* @__PURE__ */ N.jsx("span", { children: e.icon }),
        /* @__PURE__ */ N.jsx("span", { children: e.label })
      ]
    }
  );
}
function qV({ component: e }) {
  return /* @__PURE__ */ N.jsx(
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
const f_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, d_ = OP, TI = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return d_(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = f_(h) || f_(p);
    return i[d][m];
  }), u = n && Object.entries(n).reduce((d, h) => {
    let [p, m] = h;
    return m === void 0 || (d[p] = m), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: p, className: m, ...v } = h;
    return Object.entries(v).every((S) => {
      let [y, x] = S;
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
  return d_(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, FV = TI(
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
function Mr({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? EI : "button";
  return /* @__PURE__ */ N.jsx(
    a,
    {
      "data-slot": "button",
      className: Me(FV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function zV({ component: e, onValueChange: t }) {
  var a;
  const n = xo(), o = ((a = n == null ? void 0 : n.nodeData.values) == null ? void 0 : a[e.id]) ?? e.value ?? 0, i = () => {
    const l = o + 1;
    t == null || t(e.id, l);
  };
  return /* @__PURE__ */ N.jsx(
    Mr,
    {
      variant: e.variant || "default",
      size: e.size || "default",
      disabled: e.disabled || !1,
      onClick: i,
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
function $V({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function BV({ component: e }) {
  return /* @__PURE__ */ N.jsx(
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
function VV({
  cell: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = e.layout || { type: "flex", direction: "column" }, i = HV(e), a = WV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell", style: i, children: /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => /* @__PURE__ */ N.jsx(
    y0,
    {
      component: l,
      nodeId: t,
      onValueChange: n
    },
    l.id
  )) }) });
}
function HV(e) {
  const t = e.coordinates.row_span || 1, n = e.coordinates.col_span || 1;
  return {
    gridRow: `${e.coordinates.row} / span ${t}`,
    gridColumn: `${e.coordinates.col} / span ${n}`
  };
}
function WV(e) {
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
function UV({
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
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      className: `nested-grid ${e.className || ""}`,
      style: o,
      children: e.cells.map((i) => /* @__PURE__ */ N.jsx(
        VV,
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
const Kl = {
  onMouseDown: (e) => e.stopPropagation(),
  onPointerDown: (e) => e.stopPropagation()
};
function GV(e, t) {
  let n = `${e}-copy`, o = 2;
  for (; t.includes(n); )
    n = `${e}-copy${o++}`;
  return n;
}
function KV({
  component: e,
  nodeId: t,
  onValueChange: n
}) {
  var y;
  const o = xo(), i = ((y = o == null ? void 0 : o.nodeData.values) == null ? void 0 : y[e.id]) ?? e.value ?? { selected: "", entries: {} }, a = Object.keys(i.entries), l = i.selected in i.entries ? i.selected : a[0] ?? "", u = ft.useCallback(
    (x) => n == null ? void 0 : n(e.id, x),
    [e.id, n]
  ), [f, d] = ft.useState(l);
  ft.useEffect(() => d(l), [l]);
  const h = () => {
    const x = f.trim();
    if (!x || x === l || x in i.entries) {
      d(l);
      return;
    }
    const b = {};
    for (const [C, _] of Object.entries(i.entries))
      b[C === l ? x : C] = _;
    u({ selected: x, entries: b });
  }, p = () => {
    const x = GV(l || "entry", a);
    u({
      selected: x,
      entries: { ...i.entries, [x]: { ...i.entries[l] } }
    });
  }, m = () => {
    if (a.length <= 1) return;
    const x = { ...i.entries };
    delete x[l], u({ selected: Object.keys(x)[0] ?? "", entries: x });
  }, v = ft.useCallback(
    (x, b) => {
      u({
        ...i,
        selected: l,
        entries: {
          ...i.entries,
          [l]: {
            ...i.entries[l],
            [x]: b
          }
        }
      });
    },
    [u, i, l]
  ), S = ft.useMemo(
    () => ({
      nodeId: t,
      nodeData: {
        label: e.label ?? e.id,
        grid: { rows: [], columns: [], cells: [] },
        ...o ? o.nodeData : {},
        values: i.entries[l] ?? {}
      },
      onValueChange: v
    }),
    [o, t, e.label, e.id, i, l, v]
  );
  return /* @__PURE__ */ N.jsxs("div", { className: "component-entry-group nodrag w-full flex flex-col gap-2", children: [
    e.label && /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: e.label }),
    /* @__PURE__ */ N.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ N.jsxs(
        Iy,
        {
          value: l,
          onValueChange: (x) => u({ ...i, selected: x }),
          children: [
            /* @__PURE__ */ N.jsx(
              My,
              {
                className: "h-8 text-xs flex-1",
                ...Kl,
                "aria-label": e.label ?? e.id,
                children: /* @__PURE__ */ N.jsx(Ay, { placeholder: "Select entry..." })
              }
            ),
            /* @__PURE__ */ N.jsx(Oy, { children: a.map((x) => /* @__PURE__ */ N.jsx(Ly, { value: x, className: "text-xs", children: x }, x)) })
          ]
        }
      ),
      /* @__PURE__ */ N.jsx(
        Mr,
        {
          variant: "outline",
          size: "icon",
          className: "h-8 w-8 shrink-0",
          ...Kl,
          onClick: p,
          "aria-label": "Add entry",
          children: /* @__PURE__ */ N.jsx(lT, { className: "h-3 w-3" })
        }
      ),
      /* @__PURE__ */ N.jsx(
        Mr,
        {
          variant: "outline",
          size: "icon",
          className: "h-8 w-8 shrink-0",
          ...Kl,
          onClick: m,
          disabled: a.length <= 1,
          "aria-label": "Delete entry",
          children: /* @__PURE__ */ N.jsx(uT, { className: "h-3 w-3" })
        }
      )
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: "name" }),
      /* @__PURE__ */ N.jsx(
        Gs,
        {
          type: "text",
          value: f,
          onChange: (x) => d(x.target.value),
          onBlur: h,
          onKeyDown: (x) => {
            x.key === "Enter" && (x.preventDefault(), x.target.blur());
          },
          ...Kl,
          "aria-label": "Entry name",
          className: "h-8 text-xs w-full"
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(r0.Provider, { value: S, children: /* @__PURE__ */ N.jsx("div", { className: "flex flex-col gap-2", children: e.fields.map((x) => /* @__PURE__ */ N.jsx(
      y0,
      {
        component: x,
        nodeId: t,
        onValueChange: v
      },
      x.id
    )) }, l) })
  ] });
}
function y0({ component: e, nodeId: t, onValueChange: n }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ N.jsx(Fu, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ N.jsx(GP, { component: e });
    case "button-handle":
      return /* @__PURE__ */ N.jsx(KP, { component: e });
    case "text":
      return /* @__PURE__ */ N.jsx(s$, { component: e, onValueChange: n });
    case "number":
      return /* @__PURE__ */ N.jsx(l$, { component: e, onValueChange: n });
    case "bool":
      return /* @__PURE__ */ N.jsx(X$, { component: e, onValueChange: n });
    case "select":
      return /* @__PURE__ */ N.jsx(vV, { component: e, onValueChange: n });
    case "progress":
      return /* @__PURE__ */ N.jsx(DV, { component: e, onValueChange: n });
    case "header":
      return /* @__PURE__ */ N.jsx(jV, { component: e });
    case "footer":
      return /* @__PURE__ */ N.jsx(qV, { component: e });
    case "button":
      return /* @__PURE__ */ N.jsx(zV, { component: e, onValueChange: n });
    case "divider":
      return /* @__PURE__ */ N.jsx($V, { component: e });
    case "spacer":
      return /* @__PURE__ */ N.jsx(BV, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ N.jsx(UV, { component: e, nodeId: t, onValueChange: n });
    case "entry-group":
      return /* @__PURE__ */ N.jsx(KV, { component: e, nodeId: t, onValueChange: n });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function YV({ grid: e, nodeId: t, onValueChange: n }) {
  const o = {
    display: "grid",
    gridTemplateRows: e.rows.join(" "),
    gridTemplateColumns: e.columns.join(" "),
    gap: e.gap || "8px",
    width: "100%",
    height: "100%"
  };
  return /* @__PURE__ */ N.jsx("div", { className: "node-grid", style: o, children: e.cells.map((i) => /* @__PURE__ */ N.jsx(
    "div",
    {
      className: "grid-cell",
      style: {
        gridRow: `${i.coordinates.row} / span ${i.coordinates.row_span || 1}`,
        gridColumn: `${i.coordinates.col} / span ${i.coordinates.col_span || 1}`
      },
      children: /* @__PURE__ */ N.jsx(
        XV,
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
function XV({ cell: e, nodeId: t, onValueChange: n }) {
  const o = e.layout || { type: "flex", direction: "column" }, i = QV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "grid-cell-content", style: i, children: e.components.map((a) => /* @__PURE__ */ N.jsx(
    y0,
    {
      component: a,
      nodeId: t,
      onValueChange: n
    },
    a.id
  )) });
}
function QV(e) {
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
function II({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
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
const AI = k.createContext(null), MI = k.createContext(null), ZV = () => {
  const e = k.useContext(AI);
  if (!e)
    throw new Error("useSetNodesDict must be used within SetNodesDictContext.Provider");
  return e;
}, JV = () => {
  const e = k.useContext(MI);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
class w0 {
  constructor(t, n, o = "Node") {
    Nl(this, "grid");
    Nl(this, "style");
    Nl(this, "label");
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
      const f = l, d = JV(), h = k.useCallback((v, S) => {
        d((y) => ({
          ...y,
          [a]: { ...y[a], [v]: S }
        }));
      }, [a, d]), p = f.grid || t, m = k.useMemo(() => ({
        nodeId: a,
        nodeData: f || { label: n, grid: t, values: {} },
        onValueChange: h
      }), [a, f, h]);
      return /* @__PURE__ */ N.jsx(
        II,
        {
          className: Me(
            o.className,
            u && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: o.style,
          children: /* @__PURE__ */ N.jsx(r0.Provider, { value: m, children: /* @__PURE__ */ N.jsx(
            YV,
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
    return new w0(t, n, o).buildComponent();
  }
}
function eH(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = w0.buildComponent(
        n.definition.grid,
        n.definition.style,
        n.label
      );
    } catch (o) {
      throw typeof process.env.VITEST > "u" && console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
const $d = 768;
function tH() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${$d - 1}px)`), o = () => {
      t(window.innerWidth < $d);
    };
    return n.addEventListener("change", o), t(window.innerWidth < $d), () => n.removeEventListener("change", o);
  }, []), !!e;
}
// @__NO_SIDE_EFFECTS__
function nH(e) {
  const t = /* @__PURE__ */ rH(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(iH);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function rH(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = aH(i), u = sH(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var oH = Symbol("radix.slottable");
function iH(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oH;
}
function sH(e, t) {
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
function aH(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zu = "Dialog", [OI] = ki(Zu), [lH, bn] = OI(Zu), LI = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, u = k.useRef(null), f = k.useRef(null), [d, h] = Ks({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Zu
  });
  return /* @__PURE__ */ N.jsx(
    lH,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: co(),
      titleId: co(),
      descriptionId: co(),
      open: d,
      onOpenChange: h,
      onOpenToggle: k.useCallback(() => h((p) => !p), [h]),
      modal: l,
      children: n
    }
  );
};
LI.displayName = Zu;
var DI = "DialogTrigger", uH = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(DI, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ N.jsx(
      je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": _0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
uH.displayName = DI;
var x0 = "DialogPortal", [cH, jI] = OI(x0, {
  forceMount: void 0
}), qI = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = bn(x0, t);
  return /* @__PURE__ */ N.jsx(cH, { scope: t, forceMount: n, children: k.Children.map(o, (l) => /* @__PURE__ */ N.jsx(bo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Gu, { asChild: !0, container: i, children: l }) })) });
};
qI.displayName = x0;
var _u = "DialogOverlay", FI = k.forwardRef(
  (e, t) => {
    const n = jI(_u, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(_u, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ N.jsx(bo, { present: o || a.open, children: /* @__PURE__ */ N.jsx(dH, { ...i, ref: t }) }) : null;
  }
);
FI.displayName = _u;
var fH = /* @__PURE__ */ nH("DialogOverlay.RemoveScroll"), dH = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(_u, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ N.jsx(p0, { as: fH, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ N.jsx(
        je.div,
        {
          "data-state": _0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), wo = "DialogContent", zI = k.forwardRef(
  (e, t) => {
    const n = jI(wo, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(wo, e.__scopeDialog);
    return /* @__PURE__ */ N.jsx(bo, { present: o || a.open, children: a.modal ? /* @__PURE__ */ N.jsx(hH, { ...i, ref: t }) : /* @__PURE__ */ N.jsx(pH, { ...i, ref: t }) });
  }
);
zI.displayName = wo;
var hH = k.forwardRef(
  (e, t) => {
    const n = bn(wo, e.__scopeDialog), o = k.useRef(null), i = Be(t, n.contentRef, o);
    return k.useEffect(() => {
      const a = o.current;
      if (a) return BT(a);
    }, []), /* @__PURE__ */ N.jsx(
      $I,
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
), pH = k.forwardRef(
  (e, t) => {
    const n = bn(wo, e.__scopeDialog), o = k.useRef(!1), i = k.useRef(!1);
    return /* @__PURE__ */ N.jsx(
      $I,
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
), $I = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = bn(wo, n), f = k.useRef(null), d = Be(t, f);
    return dT(), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        i0,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ N.jsx(
            $u,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": _0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
        /* @__PURE__ */ N.jsx(gH, { titleId: u.titleId }),
        /* @__PURE__ */ N.jsx(vH, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), b0 = "DialogTitle", BI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(b0, n);
    return /* @__PURE__ */ N.jsx(je.h2, { id: i.titleId, ...o, ref: t });
  }
);
BI.displayName = b0;
var VI = "DialogDescription", HI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(VI, n);
    return /* @__PURE__ */ N.jsx(je.p, { id: i.descriptionId, ...o, ref: t });
  }
);
HI.displayName = VI;
var WI = "DialogClose", UI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(WI, n);
    return /* @__PURE__ */ N.jsx(
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
UI.displayName = WI;
function _0(e) {
  return e ? "open" : "closed";
}
var GI = "DialogTitleWarning", [WG, KI] = u$(GI, {
  contentName: wo,
  titleName: b0,
  docsSlug: "dialog"
}), gH = ({ titleId: e }) => {
  const t = KI(GI), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, mH = "DialogDescriptionWarning", vH = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${KI(mH).contentName}}.`;
  return k.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, yH = LI, wH = qI, xH = FI, bH = zI, _H = BI, SH = HI, EH = UI;
function CH({ ...e }) {
  return /* @__PURE__ */ N.jsx(yH, { "data-slot": "sheet", ...e });
}
function kH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(wH, { "data-slot": "sheet-portal", ...e });
}
function RH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    xH,
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
function NH({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(kH, { children: [
    /* @__PURE__ */ N.jsx(RH, {}),
    /* @__PURE__ */ N.jsxs(
      bH,
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
          /* @__PURE__ */ N.jsxs(EH, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ N.jsx(Y$, { className: "size-4" }),
            /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function PH({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Me("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function TH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    _H,
    {
      "data-slot": "sheet-title",
      className: Me("text-foreground font-semibold", e),
      ...t
    }
  );
}
function IH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    SH,
    {
      "data-slot": "sheet-description",
      className: Me("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var AH = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function MH(e) {
  const t = ({ children: n }) => /* @__PURE__ */ N.jsx(N.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = AH, t;
}
var [Ju] = ki("Tooltip", [
  Uu
]), ec = Uu(), YI = "TooltipProvider", OH = 700, Dy = "tooltip.open", [LH, S0] = Ju(YI), XI = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = OH,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = k.useRef(!0), u = k.useRef(!1), f = k.useRef(0);
  return k.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ N.jsx(
    LH,
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
XI.displayName = YI;
var Qs = "Tooltip", [DH, la] = Ju(Qs), QI = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = S0(Qs, e.__scopeTooltip), d = ec(t), [h, p] = k.useState(null), m = co(), v = k.useRef(0), S = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, x = k.useRef(!1), [b, C] = Ks({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (A) => {
      A ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Dy))) : f.onClose(), a == null || a(A);
    },
    caller: Qs
  }), _ = k.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), R = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, x.current = !1, C(!0);
  }, [C]), P = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), T = k.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      x.current = !0, C(!0), v.current = 0;
    }, y);
  }, [y, C]);
  return k.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ N.jsx(LT, { ...d, children: /* @__PURE__ */ N.jsx(
    DH,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: _,
      trigger: h,
      onTriggerChange: p,
      onTriggerEnter: k.useCallback(() => {
        f.isOpenDelayedRef.current ? T() : R();
      }, [f.isOpenDelayedRef, T, R]),
      onTriggerLeave: k.useCallback(() => {
        S ? P() : (window.clearTimeout(v.current), v.current = 0);
      }, [P, S]),
      onOpen: R,
      onClose: P,
      disableHoverableContent: S,
      children: n
    }
  ) });
};
QI.displayName = Qs;
var jy = "TooltipTrigger", ZI = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = la(jy, n), a = S0(jy, n), l = ec(n), u = k.useRef(null), f = Be(t, u, i.onTriggerChange), d = k.useRef(!1), h = k.useRef(!1), p = k.useCallback(() => d.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ N.jsx(DT, { asChild: !0, ...l, children: /* @__PURE__ */ N.jsx(
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
ZI.displayName = jy;
var E0 = "TooltipPortal", [jH, qH] = Ju(E0, {
  forceMount: void 0
}), JI = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = la(E0, t);
  return /* @__PURE__ */ N.jsx(jH, { scope: t, forceMount: n, children: /* @__PURE__ */ N.jsx(bo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Gu, { asChild: !0, container: i, children: o }) }) });
};
JI.displayName = E0;
var _i = "TooltipContent", eA = k.forwardRef(
  (e, t) => {
    const n = qH(_i, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = la(_i, e.__scopeTooltip);
    return /* @__PURE__ */ N.jsx(bo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ N.jsx(tA, { side: i, ...a, ref: t }) : /* @__PURE__ */ N.jsx(FH, { side: i, ...a, ref: t }) });
  }
), FH = k.forwardRef((e, t) => {
  const n = la(_i, e.__scopeTooltip), o = S0(_i, e.__scopeTooltip), i = k.useRef(null), a = Be(t, i), [l, u] = k.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = k.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = k.useCallback(
    (S, y) => {
      const x = S.currentTarget, b = { x: S.clientX, y: S.clientY }, C = VH(b, x.getBoundingClientRect()), _ = HH(b, C), R = WH(y.getBoundingClientRect()), P = GH([..._, ...R]);
      u(P), p(!0);
    },
    [p]
  );
  return k.useEffect(() => () => m(), [m]), k.useEffect(() => {
    if (f && h) {
      const S = (x) => v(x, h), y = (x) => v(x, f);
      return f.addEventListener("pointerleave", S), h.addEventListener("pointerleave", y), () => {
        f.removeEventListener("pointerleave", S), h.removeEventListener("pointerleave", y);
      };
    }
  }, [f, h, v, m]), k.useEffect(() => {
    if (l) {
      const S = (y) => {
        const x = y.target, b = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(x)) || (h == null ? void 0 : h.contains(x)), _ = !UH(b, l);
        C ? m() : _ && (m(), d());
      };
      return document.addEventListener("pointermove", S), () => document.removeEventListener("pointermove", S);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ N.jsx(tA, { ...e, ref: a });
}), [zH, $H] = Ju(Qs, { isInside: !1 }), BH = /* @__PURE__ */ MH("TooltipContent"), tA = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = la(_i, n), d = ec(n), { onClose: h } = f;
    return k.useEffect(() => (document.addEventListener(Dy, h), () => document.removeEventListener(Dy, h)), [h]), k.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ N.jsx(
      $u,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ N.jsxs(
          jT,
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
              /* @__PURE__ */ N.jsx(BH, { children: o }),
              /* @__PURE__ */ N.jsx(zH, { scope: n, isInside: !0, children: /* @__PURE__ */ N.jsx(KB, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
eA.displayName = _i;
var nA = "TooltipArrow", rA = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = ec(n);
    return $H(
      nA,
      n
    ).isInside ? null : /* @__PURE__ */ N.jsx(qT, { ...i, ...o, ref: t });
  }
);
rA.displayName = nA;
function VH(e, t) {
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
function HH(e, t, n = 5) {
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
function WH(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function UH(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function GH(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), KH(t);
}
function KH(e) {
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
var YH = XI, XH = QI, QH = ZI, ZH = JI, JH = eA, e8 = rA;
function oA({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    YH,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function t8({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(oA, { children: /* @__PURE__ */ N.jsx(XH, { "data-slot": "tooltip", ...e }) });
}
function n8({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(QH, { "data-slot": "tooltip-trigger", ...e });
}
function r8({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsx(ZH, { children: /* @__PURE__ */ N.jsxs(
    JH,
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
        /* @__PURE__ */ N.jsx(e8, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const o8 = "sidebar_state", i8 = 3600 * 24 * 7, s8 = "16rem", a8 = "18rem", l8 = "3rem", u8 = "b", iA = k.createContext(null);
function C0() {
  const e = k.useContext(iA);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function c8({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = tH(), [f, d] = k.useState(!1), [h, p] = k.useState(e), m = t ?? h, v = k.useCallback(
    (b) => {
      const C = typeof b == "function" ? b(m) : b;
      n ? n(C) : p(C), document.cookie = `${o8}=${C}; path=/; max-age=${i8}`;
    },
    [n, m]
  ), S = k.useCallback(() => u ? d((b) => !b) : v((b) => !b), [u, v, d]);
  k.useEffect(() => {
    const b = (C) => {
      C.key === u8 && (C.metaKey || C.ctrlKey) && (C.preventDefault(), S());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [S]);
  const y = m ? "expanded" : "collapsed", x = k.useMemo(
    () => ({
      state: y,
      open: m,
      setOpen: v,
      isMobile: u,
      openMobile: f,
      setOpenMobile: d,
      toggleSidebar: S
    }),
    [y, m, v, u, f, d, S]
  );
  return /* @__PURE__ */ N.jsx(iA.Provider, { value: x, children: /* @__PURE__ */ N.jsx(oA, { delayDuration: 0, children: /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": s8,
        "--sidebar-width-icon": l8,
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
function f8({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = C0();
  return n === "none" ? /* @__PURE__ */ N.jsx(
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
  ) : l ? /* @__PURE__ */ N.jsx(CH, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ N.jsxs(
    NH,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": a8
      },
      side: e,
      children: [
        /* @__PURE__ */ N.jsxs(PH, { className: "sr-only", children: [
          /* @__PURE__ */ N.jsx(TH, { children: "Sidebar" }),
          /* @__PURE__ */ N.jsx(IH, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ N.jsx(
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
        /* @__PURE__ */ N.jsx(
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
            children: /* @__PURE__ */ N.jsx(
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
function d8({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = C0();
  return /* @__PURE__ */ N.jsxs(
    Mr,
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
        /* @__PURE__ */ N.jsx(W$, {}),
        /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function h8({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Me("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function p8({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
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
function g8({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Me("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function m8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: Me("w-full text-sm", e),
      ...t
    }
  );
}
function v8({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: Me("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function y8({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Me("group/menu-item relative", e),
      ...t
    }
  );
}
const w8 = TI(
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
function x8({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? EI : "button", { isMobile: f, state: d } = C0(), h = /* @__PURE__ */ N.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Me(w8({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ N.jsxs(t8, { children: [
    /* @__PURE__ */ N.jsx(n8, { asChild: !0, children: h }),
    /* @__PURE__ */ N.jsx(
      r8,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function b8({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ N.jsx(p8, { children: /* @__PURE__ */ N.jsx(g8, { children: /* @__PURE__ */ N.jsx(m8, { children: /* @__PURE__ */ N.jsx(v8, { children: t.map((n, o) => /* @__PURE__ */ N.jsx(y8, { children: /* @__PURE__ */ N.jsxs(
    x8,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ N.jsx(lT, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ N.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function _8({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ N.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ N.jsxs(Mr, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ N.jsx(V$, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ N.jsxs(Mr, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(L$, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ N.jsxs(Mr, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(j$, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function S8({ x: e, y: t, onDelete: n, onClose: o }) {
  return ft.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ N.jsx(
    II,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ N.jsxs(
        Mr,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ N.jsx(uT, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function E8({
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
  onLayoutVertical: S,
  onLayoutHorizontal: y,
  isValidConnection: x
}) {
  const { fitView: b } = Du(), C = k.useRef(!1);
  return k.useEffect(() => {
    if (C.current || e.length === 0) return;
    C.current = !0;
    const _ = setTimeout(() => {
      b({ padding: 0.2, duration: 0 });
    }, 300);
    return () => clearTimeout(_);
  }, [e, b]), /* @__PURE__ */ N.jsxs("div", { style: { width: "100%", height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ N.jsxs(
      j3,
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
        isValidConnection: x,
        fitView: !0,
        nodesDraggable: !0,
        nodesConnectable: !0,
        elementsSelectable: !0,
        minZoom: 0.1,
        maxZoom: 2,
        children: [
          /* @__PURE__ */ N.jsx(B3, {}),
          /* @__PURE__ */ N.jsx(Y3, {}),
          /* @__PURE__ */ N.jsx(sa, { position: "top-right", children: /* @__PURE__ */ N.jsx(
            _8,
            {
              onExport: v,
              onLayoutVertical: S,
              onLayoutHorizontal: y
            }
          ) })
        ]
      }
    ),
    h && /* @__PURE__ */ N.jsx(
      S8,
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
function k0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bd, h_;
function C8() {
  if (h_) return Bd;
  h_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Bd = e, Bd;
}
var Vd, p_;
function Ti() {
  if (p_) return Vd;
  p_ = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Vd = e, Vd;
}
var Hd, g_;
function tc() {
  if (g_) return Hd;
  g_ = 1;
  var e = Ti();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return Hd = t, Hd;
}
var Wd, m_;
function k8() {
  if (m_) return Wd;
  m_ = 1;
  var e = tc(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return Wd = o, Wd;
}
var Ud, v_;
function R8() {
  if (v_) return Ud;
  v_ = 1;
  var e = tc();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return Ud = t, Ud;
}
var Gd, y_;
function N8() {
  if (y_) return Gd;
  y_ = 1;
  var e = tc();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Gd = t, Gd;
}
var Kd, w_;
function P8() {
  if (w_) return Kd;
  w_ = 1;
  var e = tc();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return Kd = t, Kd;
}
var Yd, x_;
function nc() {
  if (x_) return Yd;
  x_ = 1;
  var e = C8(), t = k8(), n = R8(), o = N8(), i = P8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Yd = a, Yd;
}
var Xd, b_;
function T8() {
  if (b_) return Xd;
  b_ = 1;
  var e = nc();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Xd = t, Xd;
}
var Qd, __;
function I8() {
  if (__) return Qd;
  __ = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return Qd = e, Qd;
}
var Zd, S_;
function A8() {
  if (S_) return Zd;
  S_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Zd = e, Zd;
}
var Jd, E_;
function M8() {
  if (E_) return Jd;
  E_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Jd = e, Jd;
}
var eh, C_;
function sA() {
  if (C_) return eh;
  C_ = 1;
  var e = typeof Pl == "object" && Pl && Pl.Object === Object && Pl;
  return eh = e, eh;
}
var th, k_;
function _n() {
  if (k_) return th;
  k_ = 1;
  var e = sA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return th = n, th;
}
var nh, R_;
function Ii() {
  if (R_) return nh;
  R_ = 1;
  var e = _n(), t = e.Symbol;
  return nh = t, nh;
}
var rh, N_;
function O8() {
  if (N_) return rh;
  N_ = 1;
  var e = Ii(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, i = e ? e.toStringTag : void 0;
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
  return rh = a, rh;
}
var oh, P_;
function L8() {
  if (P_) return oh;
  P_ = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return oh = n, oh;
}
var ih, T_;
function _o() {
  if (T_) return ih;
  T_ = 1;
  var e = Ii(), t = O8(), n = L8(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return ih = l, ih;
}
var sh, I_;
function tn() {
  if (I_) return sh;
  I_ = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return sh = e, sh;
}
var ah, A_;
function ua() {
  if (A_) return ah;
  A_ = 1;
  var e = _o(), t = tn(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return ah = l, ah;
}
var lh, M_;
function D8() {
  if (M_) return lh;
  M_ = 1;
  var e = _n(), t = e["__core-js_shared__"];
  return lh = t, lh;
}
var uh, O_;
function j8() {
  if (O_) return uh;
  O_ = 1;
  var e = D8(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return uh = n, uh;
}
var ch, L_;
function aA() {
  if (L_) return ch;
  L_ = 1;
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
  return ch = n, ch;
}
var fh, D_;
function q8() {
  if (D_) return fh;
  D_ = 1;
  var e = ua(), t = j8(), n = tn(), o = aA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!n(m) || t(m))
      return !1;
    var v = e(m) ? h : a;
    return v.test(o(m));
  }
  return fh = p, fh;
}
var dh, j_;
function F8() {
  if (j_) return dh;
  j_ = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return dh = e, dh;
}
var hh, q_;
function So() {
  if (q_) return hh;
  q_ = 1;
  var e = q8(), t = F8();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return hh = n, hh;
}
var ph, F_;
function R0() {
  if (F_) return ph;
  F_ = 1;
  var e = So(), t = _n(), n = e(t, "Map");
  return ph = n, ph;
}
var gh, z_;
function rc() {
  if (z_) return gh;
  z_ = 1;
  var e = So(), t = e(Object, "create");
  return gh = t, gh;
}
var mh, $_;
function z8() {
  if ($_) return mh;
  $_ = 1;
  var e = rc();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return mh = t, mh;
}
var vh, B_;
function $8() {
  if (B_) return vh;
  B_ = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return vh = e, vh;
}
var yh, V_;
function B8() {
  if (V_) return yh;
  V_ = 1;
  var e = rc(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return yh = i, yh;
}
var wh, H_;
function V8() {
  if (H_) return wh;
  H_ = 1;
  var e = rc(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return wh = o, wh;
}
var xh, W_;
function H8() {
  if (W_) return xh;
  W_ = 1;
  var e = rc(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return xh = n, xh;
}
var bh, U_;
function W8() {
  if (U_) return bh;
  U_ = 1;
  var e = z8(), t = $8(), n = B8(), o = V8(), i = H8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, bh = a, bh;
}
var _h, G_;
function U8() {
  if (G_) return _h;
  G_ = 1;
  var e = W8(), t = nc(), n = R0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return _h = o, _h;
}
var Sh, K_;
function G8() {
  if (K_) return Sh;
  K_ = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Sh = e, Sh;
}
var Eh, Y_;
function oc() {
  if (Y_) return Eh;
  Y_ = 1;
  var e = G8();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return Eh = t, Eh;
}
var Ch, X_;
function K8() {
  if (X_) return Ch;
  X_ = 1;
  var e = oc();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return Ch = t, Ch;
}
var kh, Q_;
function Y8() {
  if (Q_) return kh;
  Q_ = 1;
  var e = oc();
  function t(n) {
    return e(this, n).get(n);
  }
  return kh = t, kh;
}
var Rh, Z_;
function X8() {
  if (Z_) return Rh;
  Z_ = 1;
  var e = oc();
  function t(n) {
    return e(this, n).has(n);
  }
  return Rh = t, Rh;
}
var Nh, J_;
function Q8() {
  if (J_) return Nh;
  J_ = 1;
  var e = oc();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return Nh = t, Nh;
}
var Ph, eS;
function N0() {
  if (eS) return Ph;
  eS = 1;
  var e = U8(), t = K8(), n = Y8(), o = X8(), i = Q8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Ph = a, Ph;
}
var Th, tS;
function Z8() {
  if (tS) return Th;
  tS = 1;
  var e = nc(), t = R0(), n = N0(), o = 200;
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
  return Th = i, Th;
}
var Ih, nS;
function ic() {
  if (nS) return Ih;
  nS = 1;
  var e = nc(), t = T8(), n = I8(), o = A8(), i = M8(), a = Z8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, Ih = l, Ih;
}
var Ah, rS;
function P0() {
  if (rS) return Ah;
  rS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return Ah = e, Ah;
}
var Mh, oS;
function lA() {
  if (oS) return Mh;
  oS = 1;
  var e = So(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Mh = t, Mh;
}
var Oh, iS;
function sc() {
  if (iS) return Oh;
  iS = 1;
  var e = lA();
  function t(n, o, i) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[o] = i;
  }
  return Oh = t, Oh;
}
var Lh, sS;
function ac() {
  if (sS) return Lh;
  sS = 1;
  var e = sc(), t = Ti(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Lh = i, Lh;
}
var Dh, aS;
function ca() {
  if (aS) return Dh;
  aS = 1;
  var e = ac(), t = sc();
  function n(o, i, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = i.length; ++f < d; ) {
      var h = i[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return Dh = n, Dh;
}
var jh, lS;
function J8() {
  if (lS) return jh;
  lS = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return jh = e, jh;
}
var qh, uS;
function Fn() {
  if (uS) return qh;
  uS = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return qh = e, qh;
}
var Fh, cS;
function e6() {
  if (cS) return Fh;
  cS = 1;
  var e = _o(), t = Fn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Fh = o, Fh;
}
var zh, fS;
function fa() {
  if (fS) return zh;
  fS = 1;
  var e = e6(), t = Fn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return zh = a, zh;
}
var $h, dS;
function rt() {
  if (dS) return $h;
  dS = 1;
  var e = Array.isArray;
  return $h = e, $h;
}
var Is = { exports: {} }, Bh, hS;
function t6() {
  if (hS) return Bh;
  hS = 1;
  function e() {
    return !1;
  }
  return Bh = e, Bh;
}
Is.exports;
var pS;
function Ai() {
  return pS || (pS = 1, (function(e, t) {
    var n = _n(), o = t6(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(Is, Is.exports)), Is.exports;
}
var Vh, gS;
function lc() {
  if (gS) return Vh;
  gS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return Vh = n, Vh;
}
var Hh, mS;
function T0() {
  if (mS) return Hh;
  mS = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Hh = t, Hh;
}
var Wh, vS;
function n6() {
  if (vS) return Wh;
  vS = 1;
  var e = _o(), t = T0(), n = Fn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", S = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", b = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", R = "[object Int8Array]", P = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", j = "[object Uint16Array]", G = "[object Uint32Array]", z = {};
  z[C] = z[_] = z[R] = z[P] = z[T] = z[A] = z[O] = z[j] = z[G] = !0, z[o] = z[i] = z[x] = z[a] = z[b] = z[l] = z[u] = z[f] = z[d] = z[h] = z[p] = z[m] = z[v] = z[S] = z[y] = !1;
  function H(Q) {
    return n(Q) && t(Q.length) && !!z[e(Q)];
  }
  return Wh = H, Wh;
}
var Uh, yS;
function uc() {
  if (yS) return Uh;
  yS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Uh = e, Uh;
}
var As = { exports: {} };
As.exports;
var wS;
function I0() {
  return wS || (wS = 1, (function(e, t) {
    var n = sA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(As, As.exports)), As.exports;
}
var Gh, xS;
function da() {
  if (xS) return Gh;
  xS = 1;
  var e = n6(), t = uc(), n = I0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return Gh = i, Gh;
}
var Kh, bS;
function uA() {
  if (bS) return Kh;
  bS = 1;
  var e = J8(), t = fa(), n = rt(), o = Ai(), i = lc(), a = da(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = n(d), m = !p && t(d), v = !p && !m && o(d), S = !p && !m && !v && a(d), y = p || m || v || S, x = y ? e(d.length, String) : [], b = x.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      S && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      i(C, b))) && x.push(C);
    return x;
  }
  return Kh = f, Kh;
}
var Yh, _S;
function cc() {
  if (_S) return Yh;
  _S = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return Yh = t, Yh;
}
var Xh, SS;
function cA() {
  if (SS) return Xh;
  SS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Xh = e, Xh;
}
var Qh, ES;
function r6() {
  if (ES) return Qh;
  ES = 1;
  var e = cA(), t = e(Object.keys, Object);
  return Qh = t, Qh;
}
var Zh, CS;
function A0() {
  if (CS) return Zh;
  CS = 1;
  var e = cc(), t = r6(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Zh = i, Zh;
}
var Jh, kS;
function nr() {
  if (kS) return Jh;
  kS = 1;
  var e = ua(), t = T0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Jh = n, Jh;
}
var ep, RS;
function Fr() {
  if (RS) return ep;
  RS = 1;
  var e = uA(), t = A0(), n = nr();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return ep = o, ep;
}
var tp, NS;
function o6() {
  if (NS) return tp;
  NS = 1;
  var e = ca(), t = Fr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return tp = n, tp;
}
var np, PS;
function i6() {
  if (PS) return np;
  PS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return np = e, np;
}
var rp, TS;
function s6() {
  if (TS) return rp;
  TS = 1;
  var e = tn(), t = cc(), n = i6(), o = Object.prototype, i = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return n(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !i.call(l, d)) || f.push(d);
    return f;
  }
  return rp = a, rp;
}
var op, IS;
function Eo() {
  if (IS) return op;
  IS = 1;
  var e = uA(), t = s6(), n = nr();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return op = o, op;
}
var ip, AS;
function a6() {
  if (AS) return ip;
  AS = 1;
  var e = ca(), t = Eo();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return ip = n, ip;
}
var Ms = { exports: {} };
Ms.exports;
var MS;
function fA() {
  return MS || (MS = 1, (function(e, t) {
    var n = _n(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var p = d.length, m = u ? u(p) : new d.constructor(p);
      return d.copy(m), m;
    }
    e.exports = f;
  })(Ms, Ms.exports)), Ms.exports;
}
var sp, OS;
function dA() {
  if (OS) return sp;
  OS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return sp = e, sp;
}
var ap, LS;
function hA() {
  if (LS) return ap;
  LS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return ap = e, ap;
}
var lp, DS;
function pA() {
  if (DS) return lp;
  DS = 1;
  function e() {
    return [];
  }
  return lp = e, lp;
}
var up, jS;
function M0() {
  if (jS) return up;
  jS = 1;
  var e = hA(), t = pA(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return up = a, up;
}
var cp, qS;
function l6() {
  if (qS) return cp;
  qS = 1;
  var e = ca(), t = M0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return cp = n, cp;
}
var fp, FS;
function O0() {
  if (FS) return fp;
  FS = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return fp = e, fp;
}
var dp, zS;
function fc() {
  if (zS) return dp;
  zS = 1;
  var e = cA(), t = e(Object.getPrototypeOf, Object);
  return dp = t, dp;
}
var hp, $S;
function gA() {
  if ($S) return hp;
  $S = 1;
  var e = O0(), t = fc(), n = M0(), o = pA(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return hp = a, hp;
}
var pp, BS;
function u6() {
  if (BS) return pp;
  BS = 1;
  var e = ca(), t = gA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return pp = n, pp;
}
var gp, VS;
function mA() {
  if (VS) return gp;
  VS = 1;
  var e = O0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return gp = n, gp;
}
var mp, HS;
function vA() {
  if (HS) return mp;
  HS = 1;
  var e = mA(), t = M0(), n = Fr();
  function o(i) {
    return e(i, n, t);
  }
  return mp = o, mp;
}
var vp, WS;
function c6() {
  if (WS) return vp;
  WS = 1;
  var e = mA(), t = gA(), n = Eo();
  function o(i) {
    return e(i, n, t);
  }
  return vp = o, vp;
}
var yp, US;
function f6() {
  if (US) return yp;
  US = 1;
  var e = So(), t = _n(), n = e(t, "DataView");
  return yp = n, yp;
}
var wp, GS;
function d6() {
  if (GS) return wp;
  GS = 1;
  var e = So(), t = _n(), n = e(t, "Promise");
  return wp = n, wp;
}
var xp, KS;
function yA() {
  if (KS) return xp;
  KS = 1;
  var e = So(), t = _n(), n = e(t, "Set");
  return xp = n, xp;
}
var bp, YS;
function h6() {
  if (YS) return bp;
  YS = 1;
  var e = So(), t = _n(), n = e(t, "WeakMap");
  return bp = n, bp;
}
var _p, XS;
function Mi() {
  if (XS) return _p;
  XS = 1;
  var e = f6(), t = R0(), n = d6(), o = yA(), i = h6(), a = _o(), l = aA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), S = l(t), y = l(n), x = l(o), b = l(i), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || n && C(n.resolve()) != d || o && C(new o()) != h || i && C(new i()) != p) && (C = function(_) {
    var R = a(_), P = R == f ? _.constructor : void 0, T = P ? l(P) : "";
    if (T)
      switch (T) {
        case v:
          return m;
        case S:
          return u;
        case y:
          return d;
        case x:
          return h;
        case b:
          return p;
      }
    return R;
  }), _p = C, _p;
}
var Sp, QS;
function p6() {
  if (QS) return Sp;
  QS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Sp = n, Sp;
}
var Ep, ZS;
function wA() {
  if (ZS) return Ep;
  ZS = 1;
  var e = _n(), t = e.Uint8Array;
  return Ep = t, Ep;
}
var Cp, JS;
function L0() {
  if (JS) return Cp;
  JS = 1;
  var e = wA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return Cp = t, Cp;
}
var kp, eE;
function g6() {
  if (eE) return kp;
  eE = 1;
  var e = L0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return kp = t, kp;
}
var Rp, tE;
function m6() {
  if (tE) return Rp;
  tE = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return Rp = t, Rp;
}
var Np, nE;
function v6() {
  if (nE) return Np;
  nE = 1;
  var e = Ii(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return Np = o, Np;
}
var Pp, rE;
function xA() {
  if (rE) return Pp;
  rE = 1;
  var e = L0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return Pp = t, Pp;
}
var Tp, oE;
function y6() {
  if (oE) return Tp;
  oE = 1;
  var e = L0(), t = g6(), n = m6(), o = v6(), i = xA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", S = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", b = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", R = "[object Uint8Array]", P = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(j, G, z) {
    var H = j.constructor;
    switch (G) {
      case v:
        return e(j);
      case a:
      case l:
        return new H(+j);
      case S:
        return t(j, z);
      case y:
      case x:
      case b:
      case C:
      case _:
      case R:
      case P:
      case T:
      case A:
        return i(j, z);
      case u:
        return new H();
      case f:
      case p:
        return new H(j);
      case d:
        return n(j);
      case h:
        return new H();
      case m:
        return o(j);
    }
  }
  return Tp = O, Tp;
}
var Ip, iE;
function bA() {
  if (iE) return Ip;
  iE = 1;
  var e = tn(), t = Object.create, n = /* @__PURE__ */ (function() {
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
  return Ip = n, Ip;
}
var Ap, sE;
function _A() {
  if (sE) return Ap;
  sE = 1;
  var e = bA(), t = fc(), n = cc();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return Ap = o, Ap;
}
var Mp, aE;
function w6() {
  if (aE) return Mp;
  aE = 1;
  var e = Mi(), t = Fn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Mp = o, Mp;
}
var Op, lE;
function x6() {
  if (lE) return Op;
  lE = 1;
  var e = w6(), t = uc(), n = I0(), o = n && n.isMap, i = o ? t(o) : e;
  return Op = i, Op;
}
var Lp, uE;
function b6() {
  if (uE) return Lp;
  uE = 1;
  var e = Mi(), t = Fn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Lp = o, Lp;
}
var Dp, cE;
function _6() {
  if (cE) return Dp;
  cE = 1;
  var e = b6(), t = uc(), n = I0(), o = n && n.isSet, i = o ? t(o) : e;
  return Dp = i, Dp;
}
var jp, fE;
function SA() {
  if (fE) return jp;
  fE = 1;
  var e = ic(), t = P0(), n = ac(), o = o6(), i = a6(), a = fA(), l = dA(), u = l6(), f = u6(), d = vA(), h = c6(), p = Mi(), m = p6(), v = y6(), S = _A(), y = rt(), x = Ai(), b = x6(), C = tn(), _ = _6(), R = Fr(), P = Eo(), T = 1, A = 2, O = 4, j = "[object Arguments]", G = "[object Array]", z = "[object Boolean]", H = "[object Date]", Q = "[object Error]", L = "[object Function]", B = "[object GeneratorFunction]", q = "[object Map]", U = "[object Number]", M = "[object Object]", F = "[object RegExp]", X = "[object Set]", D = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", V = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", Y = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", _e = "[object Uint32Array]", me = {};
  me[j] = me[G] = me[V] = me[Z] = me[z] = me[H] = me[ee] = me[Y] = me[te] = me[se] = me[ae] = me[q] = me[U] = me[M] = me[F] = me[X] = me[D] = me[W] = me[ce] = me[de] = me[pe] = me[_e] = !0, me[Q] = me[L] = me[ie] = !1;
  function Ne(Ee, Je, Ue, Vt, pt, at) {
    var Ge, rn = Je & T, Ht = Je & A, on = Je & O;
    if (Ue && (Ge = pt ? Ue(Ee, Vt, pt, at) : Ue(Ee)), Ge !== void 0)
      return Ge;
    if (!C(Ee))
      return Ee;
    var Wt = y(Ee);
    if (Wt) {
      if (Ge = m(Ee), !rn)
        return l(Ee, Ge);
    } else {
      var _t = p(Ee), zr = _t == L || _t == B;
      if (x(Ee))
        return a(Ee, rn);
      if (_t == M || _t == j || zr && !pt) {
        if (Ge = Ht || zr ? {} : S(Ee), !rn)
          return Ht ? f(Ee, i(Ge, Ee)) : u(Ee, o(Ge, Ee));
      } else {
        if (!me[_t])
          return pt ? Ee : {};
        Ge = v(Ee, _t, rn);
      }
    }
    at || (at = new e());
    var Ut = at.get(Ee);
    if (Ut)
      return Ut;
    at.set(Ee, Ge), _(Ee) ? Ee.forEach(function(At) {
      Ge.add(Ne(At, Je, Ue, At, Ee, at));
    }) : b(Ee) && Ee.forEach(function(At, Gt) {
      Ge.set(Gt, Ne(At, Je, Ue, Gt, Ee, at));
    });
    var zn = on ? Ht ? h : d : Ht ? P : R, ko = Wt ? void 0 : zn(Ee);
    return t(ko || Ee, function(At, Gt) {
      ko && (Gt = At, At = Ee[Gt]), n(Ge, Gt, Ne(At, Je, Ue, Gt, Ee, at));
    }), Ge;
  }
  return jp = Ne, jp;
}
var qp, dE;
function S6() {
  if (dE) return qp;
  dE = 1;
  var e = SA(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return qp = n, qp;
}
var Fp, hE;
function D0() {
  if (hE) return Fp;
  hE = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Fp = e, Fp;
}
var zp, pE;
function E6() {
  if (pE) return zp;
  pE = 1;
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
  return zp = e, zp;
}
var $p, gE;
function j0() {
  if (gE) return $p;
  gE = 1;
  var e = E6(), t = e();
  return $p = t, $p;
}
var Bp, mE;
function q0() {
  if (mE) return Bp;
  mE = 1;
  var e = j0(), t = Fr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return Bp = n, Bp;
}
var Vp, vE;
function C6() {
  if (vE) return Vp;
  vE = 1;
  var e = nr();
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
  return Vp = t, Vp;
}
var Hp, yE;
function dc() {
  if (yE) return Hp;
  yE = 1;
  var e = q0(), t = C6(), n = t(e);
  return Hp = n, Hp;
}
var Wp, wE;
function Co() {
  if (wE) return Wp;
  wE = 1;
  function e(t) {
    return t;
  }
  return Wp = e, Wp;
}
var Up, xE;
function EA() {
  if (xE) return Up;
  xE = 1;
  var e = Co();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return Up = t, Up;
}
var Gp, bE;
function CA() {
  if (bE) return Gp;
  bE = 1;
  var e = P0(), t = dc(), n = EA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return Gp = i, Gp;
}
var Kp, _E;
function kA() {
  return _E || (_E = 1, Kp = CA()), Kp;
}
var Yp, SE;
function k6() {
  if (SE) return Yp;
  SE = 1;
  var e = dc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return Yp = t, Yp;
}
var Xp, EE;
function R6() {
  if (EE) return Xp;
  EE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Xp = t, Xp;
}
var Qp, CE;
function N6() {
  if (CE) return Qp;
  CE = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Qp = e, Qp;
}
var Zp, kE;
function RA() {
  if (kE) return Zp;
  kE = 1;
  var e = N0(), t = R6(), n = N6();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Zp = o, Zp;
}
var Jp, RE;
function P6() {
  if (RE) return Jp;
  RE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Jp = e, Jp;
}
var eg, NE;
function NA() {
  if (NE) return eg;
  NE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return eg = e, eg;
}
var tg, PE;
function PA() {
  if (PE) return tg;
  PE = 1;
  var e = RA(), t = P6(), n = NA(), o = 1, i = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, v = l.length, S = u.length;
    if (v != S && !(m && S > v))
      return !1;
    var y = p.get(l), x = p.get(u);
    if (y && x)
      return y == u && x == l;
    var b = -1, C = !0, _ = f & i ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++b < v; ) {
      var R = l[b], P = u[b];
      if (d)
        var T = m ? d(P, R, b, u, l, p) : d(R, P, b, l, u, p);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(A, O) {
          if (!n(_, O) && (R === A || h(R, A, f, d, p)))
            return _.push(O);
        })) {
          C = !1;
          break;
        }
      } else if (!(R === P || h(R, P, f, d, p))) {
        C = !1;
        break;
      }
    }
    return p.delete(l), p.delete(u), C;
  }
  return tg = a, tg;
}
var ng, TE;
function T6() {
  if (TE) return ng;
  TE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return ng = e, ng;
}
var rg, IE;
function F0() {
  if (IE) return rg;
  IE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return rg = e, rg;
}
var og, AE;
function I6() {
  if (AE) return og;
  AE = 1;
  var e = Ii(), t = wA(), n = Ti(), o = PA(), i = T6(), a = F0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", S = "[object Set]", y = "[object String]", x = "[object Symbol]", b = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, R = _ ? _.valueOf : void 0;
  function P(T, A, O, j, G, z, H) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case b:
        return !(T.byteLength != A.byteLength || !z(new t(T), new t(A)));
      case f:
      case d:
      case m:
        return n(+T, +A);
      case h:
        return T.name == A.name && T.message == A.message;
      case v:
      case y:
        return T == A + "";
      case p:
        var Q = i;
      case S:
        var L = j & l;
        if (Q || (Q = a), T.size != A.size && !L)
          return !1;
        var B = H.get(T);
        if (B)
          return B == A;
        j |= u, H.set(T, A);
        var q = o(Q(T), Q(A), j, G, z, H);
        return H.delete(T), q;
      case x:
        if (R)
          return R.call(T) == R.call(A);
    }
    return !1;
  }
  return og = P, og;
}
var ig, ME;
function A6() {
  if (ME) return ig;
  ME = 1;
  var e = vA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u, f, d, h) {
    var p = u & t, m = e(a), v = m.length, S = e(l), y = S.length;
    if (v != y && !p)
      return !1;
    for (var x = v; x--; ) {
      var b = m[x];
      if (!(p ? b in l : o.call(l, b)))
        return !1;
    }
    var C = h.get(a), _ = h.get(l);
    if (C && _)
      return C == l && _ == a;
    var R = !0;
    h.set(a, l), h.set(l, a);
    for (var P = p; ++x < v; ) {
      b = m[x];
      var T = a[b], A = l[b];
      if (f)
        var O = p ? f(A, T, b, l, a, h) : f(T, A, b, a, l, h);
      if (!(O === void 0 ? T === A || d(T, A, u, f, h) : O)) {
        R = !1;
        break;
      }
      P || (P = b == "constructor");
    }
    if (R && !P) {
      var j = a.constructor, G = l.constructor;
      j != G && "constructor" in a && "constructor" in l && !(typeof j == "function" && j instanceof j && typeof G == "function" && G instanceof G) && (R = !1);
    }
    return h.delete(a), h.delete(l), R;
  }
  return ig = i, ig;
}
var sg, OE;
function M6() {
  if (OE) return sg;
  OE = 1;
  var e = ic(), t = PA(), n = I6(), o = A6(), i = Mi(), a = rt(), l = Ai(), u = da(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function S(y, x, b, C, _, R) {
    var P = a(y), T = a(x), A = P ? h : i(y), O = T ? h : i(x);
    A = A == d ? p : A, O = O == d ? p : O;
    var j = A == p, G = O == p, z = A == O;
    if (z && l(y)) {
      if (!l(x))
        return !1;
      P = !0, j = !1;
    }
    if (z && !j)
      return R || (R = new e()), P || u(y) ? t(y, x, b, C, _, R) : n(y, x, A, b, C, _, R);
    if (!(b & f)) {
      var H = j && v.call(y, "__wrapped__"), Q = G && v.call(x, "__wrapped__");
      if (H || Q) {
        var L = H ? y.value() : y, B = Q ? x.value() : x;
        return R || (R = new e()), _(L, B, b, C, R);
      }
    }
    return z ? (R || (R = new e()), o(y, x, b, C, _, R)) : !1;
  }
  return sg = S, sg;
}
var ag, LE;
function TA() {
  if (LE) return ag;
  LE = 1;
  var e = M6(), t = Fn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return ag = n, ag;
}
var lg, DE;
function O6() {
  if (DE) return lg;
  DE = 1;
  var e = ic(), t = TA(), n = 1, o = 2;
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
      var v = m[0], S = a[v], y = m[1];
      if (p && m[2]) {
        if (S === void 0 && !(v in a))
          return !1;
      } else {
        var x = new e();
        if (f)
          var b = f(S, y, v, a, l, x);
        if (!(b === void 0 ? t(y, S, n | o, f, x) : b))
          return !1;
      }
    }
    return !0;
  }
  return lg = i, lg;
}
var ug, jE;
function IA() {
  if (jE) return ug;
  jE = 1;
  var e = tn();
  function t(n) {
    return n === n && !e(n);
  }
  return ug = t, ug;
}
var cg, qE;
function L6() {
  if (qE) return cg;
  qE = 1;
  var e = IA(), t = Fr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return cg = n, cg;
}
var fg, FE;
function AA() {
  if (FE) return fg;
  FE = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return fg = e, fg;
}
var dg, zE;
function D6() {
  if (zE) return dg;
  zE = 1;
  var e = O6(), t = L6(), n = AA();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return dg = o, dg;
}
var hg, $E;
function Oi() {
  if ($E) return hg;
  $E = 1;
  var e = _o(), t = Fn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return hg = o, hg;
}
var pg, BE;
function z0() {
  if (BE) return pg;
  BE = 1;
  var e = rt(), t = Oi(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return pg = i, pg;
}
var gg, VE;
function j6() {
  if (VE) return gg;
  VE = 1;
  var e = N0(), t = "Expected a function";
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
  return n.Cache = e, gg = n, gg;
}
var mg, HE;
function q6() {
  if (HE) return mg;
  HE = 1;
  var e = j6(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return mg = n, mg;
}
var vg, WE;
function F6() {
  if (WE) return vg;
  WE = 1;
  var e = q6(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return vg = o, vg;
}
var yg, UE;
function hc() {
  if (UE) return yg;
  UE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return yg = e, yg;
}
var wg, GE;
function z6() {
  if (GE) return wg;
  GE = 1;
  var e = Ii(), t = hc(), n = rt(), o = Oi(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
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
  return wg = l, wg;
}
var xg, KE;
function MA() {
  if (KE) return xg;
  KE = 1;
  var e = z6();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return xg = t, xg;
}
var bg, YE;
function pc() {
  if (YE) return bg;
  YE = 1;
  var e = rt(), t = z0(), n = F6(), o = MA();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return bg = i, bg;
}
var _g, XE;
function ha() {
  if (XE) return _g;
  XE = 1;
  var e = Oi();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return _g = t, _g;
}
var Sg, QE;
function gc() {
  if (QE) return Sg;
  QE = 1;
  var e = pc(), t = ha();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return Sg = n, Sg;
}
var Eg, ZE;
function $6() {
  if (ZE) return Eg;
  ZE = 1;
  var e = gc();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return Eg = t, Eg;
}
var Cg, JE;
function B6() {
  if (JE) return Cg;
  JE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Cg = e, Cg;
}
var kg, eC;
function OA() {
  if (eC) return kg;
  eC = 1;
  var e = pc(), t = fa(), n = rt(), o = lc(), i = T0(), a = ha();
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
  return kg = l, kg;
}
var Rg, tC;
function LA() {
  if (tC) return Rg;
  tC = 1;
  var e = B6(), t = OA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Rg = n, Rg;
}
var Ng, nC;
function V6() {
  if (nC) return Ng;
  nC = 1;
  var e = TA(), t = $6(), n = LA(), o = z0(), i = IA(), a = AA(), l = ha(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return Ng = d, Ng;
}
var Pg, rC;
function DA() {
  if (rC) return Pg;
  rC = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Pg = e, Pg;
}
var Tg, oC;
function H6() {
  if (oC) return Tg;
  oC = 1;
  var e = gc();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return Tg = t, Tg;
}
var Ig, iC;
function W6() {
  if (iC) return Ig;
  iC = 1;
  var e = DA(), t = H6(), n = z0(), o = ha();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return Ig = i, Ig;
}
var Ag, sC;
function rr() {
  if (sC) return Ag;
  sC = 1;
  var e = D6(), t = V6(), n = Co(), o = rt(), i = W6();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return Ag = a, Ag;
}
var Mg, aC;
function jA() {
  if (aC) return Mg;
  aC = 1;
  var e = hA(), t = k6(), n = rr(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return Mg = i, Mg;
}
var Og, lC;
function U6() {
  if (lC) return Og;
  lC = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Og = n, Og;
}
var Lg, uC;
function qA() {
  if (uC) return Lg;
  uC = 1;
  var e = U6(), t = OA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Lg = n, Lg;
}
var Dg, cC;
function G6() {
  if (cC) return Dg;
  cC = 1;
  var e = A0(), t = Mi(), n = fa(), o = rt(), i = nr(), a = Ai(), l = cc(), u = da(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
  function m(v) {
    if (v == null)
      return !0;
    if (i(v) && (o(v) || typeof v == "string" || typeof v.splice == "function" || a(v) || u(v) || n(v)))
      return !v.length;
    var S = t(v);
    if (S == f || S == d)
      return !v.size;
    if (l(v))
      return !e(v).length;
    for (var y in v)
      if (p.call(v, y))
        return !1;
    return !0;
  }
  return Dg = m, Dg;
}
var jg, fC;
function FA() {
  if (fC) return jg;
  fC = 1;
  function e(t) {
    return t === void 0;
  }
  return jg = e, jg;
}
var qg, dC;
function zA() {
  if (dC) return qg;
  dC = 1;
  var e = dc(), t = nr();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return qg = n, qg;
}
var Fg, hC;
function $A() {
  if (hC) return Fg;
  hC = 1;
  var e = hc(), t = rr(), n = zA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return Fg = i, Fg;
}
var zg, pC;
function K6() {
  if (pC) return zg;
  pC = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return zg = e, zg;
}
var $g, gC;
function Y6() {
  if (gC) return $g;
  gC = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return $g = e, $g;
}
var Bg, mC;
function BA() {
  if (mC) return Bg;
  mC = 1;
  var e = K6(), t = dc(), n = rr(), o = Y6(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return Bg = a, Bg;
}
var Vg, vC;
function X6() {
  if (vC) return Vg;
  vC = 1;
  var e = _o(), t = rt(), n = Fn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return Vg = i, Vg;
}
var Hg, yC;
function Q6() {
  if (yC) return Hg;
  yC = 1;
  var e = DA(), t = e("length");
  return Hg = t, Hg;
}
var Wg, wC;
function Z6() {
  if (wC) return Wg;
  wC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return Wg = f, Wg;
}
var Ug, xC;
function J6() {
  if (xC) return Ug;
  xC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", S = d + "?", y = "[" + a + "]?", x = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + S + ")*", b = y + S + x, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + b, "g");
  function R(P) {
    for (var T = _.lastIndex = 0; _.test(P); )
      ++T;
    return T;
  }
  return Ug = R, Ug;
}
var Gg, bC;
function eW() {
  if (bC) return Gg;
  bC = 1;
  var e = Q6(), t = Z6(), n = J6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return Gg = o, Gg;
}
var Kg, _C;
function tW() {
  if (_C) return Kg;
  _C = 1;
  var e = A0(), t = Mi(), n = nr(), o = X6(), i = eW(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? i(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return Kg = u, Kg;
}
var Yg, SC;
function nW() {
  if (SC) return Yg;
  SC = 1;
  var e = P0(), t = bA(), n = q0(), o = rr(), i = fc(), a = rt(), l = Ai(), u = ua(), f = tn(), d = da();
  function h(p, m, v) {
    var S = a(p), y = S || l(p) || d(p);
    if (m = o(m, 4), v == null) {
      var x = p && p.constructor;
      y ? v = S ? new x() : [] : f(p) ? v = u(x) ? t(i(p)) : {} : v = {};
    }
    return (y ? e : n)(p, function(b, C, _) {
      return m(v, b, C, _);
    }), v;
  }
  return Yg = h, Yg;
}
var Xg, EC;
function rW() {
  if (EC) return Xg;
  EC = 1;
  var e = Ii(), t = fa(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Xg = i, Xg;
}
var Qg, CC;
function $0() {
  if (CC) return Qg;
  CC = 1;
  var e = O0(), t = rW();
  function n(o, i, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      i > 0 && a(h) ? i > 1 ? n(h, i - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return Qg = n, Qg;
}
var Zg, kC;
function oW() {
  if (kC) return Zg;
  kC = 1;
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
  return Zg = e, Zg;
}
var Jg, RC;
function VA() {
  if (RC) return Jg;
  RC = 1;
  var e = oW(), t = Math.max;
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
  return Jg = n, Jg;
}
var em, NC;
function iW() {
  if (NC) return em;
  NC = 1;
  var e = D0(), t = lA(), n = Co(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return em = o, em;
}
var tm, PC;
function sW() {
  if (PC) return tm;
  PC = 1;
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
  return tm = o, tm;
}
var nm, TC;
function HA() {
  if (TC) return nm;
  TC = 1;
  var e = iW(), t = sW(), n = t(e);
  return nm = n, nm;
}
var rm, IC;
function mc() {
  if (IC) return rm;
  IC = 1;
  var e = Co(), t = VA(), n = HA();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return rm = o, rm;
}
var om, AC;
function WA() {
  if (AC) return om;
  AC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return om = e, om;
}
var im, MC;
function aW() {
  if (MC) return im;
  MC = 1;
  function e(t) {
    return t !== t;
  }
  return im = e, im;
}
var sm, OC;
function lW() {
  if (OC) return sm;
  OC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return sm = e, sm;
}
var am, LC;
function uW() {
  if (LC) return am;
  LC = 1;
  var e = WA(), t = aW(), n = lW();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return am = o, am;
}
var lm, DC;
function cW() {
  if (DC) return lm;
  DC = 1;
  var e = uW();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return lm = t, lm;
}
var um, jC;
function fW() {
  if (jC) return um;
  jC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return um = e, um;
}
var cm, qC;
function dW() {
  if (qC) return cm;
  qC = 1;
  function e() {
  }
  return cm = e, cm;
}
var fm, FC;
function hW() {
  if (FC) return fm;
  FC = 1;
  var e = yA(), t = dW(), n = F0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return fm = i, fm;
}
var dm, zC;
function pW() {
  if (zC) return dm;
  zC = 1;
  var e = RA(), t = cW(), n = fW(), o = NA(), i = hW(), a = F0(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, v = f.length, S = !0, y = [], x = y;
    if (h)
      S = !1, m = n;
    else if (v >= l) {
      var b = d ? null : i(f);
      if (b)
        return a(b);
      S = !1, m = o, x = new e();
    } else
      x = d ? [] : y;
    e:
      for (; ++p < v; ) {
        var C = f[p], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, S && _ === _) {
          for (var R = x.length; R--; )
            if (x[R] === _)
              continue e;
          d && x.push(_), y.push(C);
        } else m(x, _, h) || (x !== y && x.push(_), y.push(C));
      }
    return y;
  }
  return dm = u, dm;
}
var hm, $C;
function UA() {
  if ($C) return hm;
  $C = 1;
  var e = nr(), t = Fn();
  function n(o) {
    return t(o) && e(o);
  }
  return hm = n, hm;
}
var pm, BC;
function gW() {
  if (BC) return pm;
  BC = 1;
  var e = $0(), t = mc(), n = pW(), o = UA(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return pm = i, pm;
}
var gm, VC;
function mW() {
  if (VC) return gm;
  VC = 1;
  var e = hc();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return gm = t, gm;
}
var mm, HC;
function GA() {
  if (HC) return mm;
  HC = 1;
  var e = mW(), t = Fr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return mm = n, mm;
}
var vm, WC;
function nn() {
  if (WC) return vm;
  WC = 1;
  var e;
  if (typeof k0 == "function")
    try {
      e = {
        clone: S6(),
        constant: D0(),
        each: kA(),
        filter: jA(),
        has: qA(),
        isArray: rt(),
        isEmpty: G6(),
        isFunction: ua(),
        isUndefined: FA(),
        keys: Fr(),
        map: $A(),
        reduce: BA(),
        size: tW(),
        transform: nW(),
        union: gW(),
        values: GA()
      };
    } catch {
    }
  return e || (e = window._), vm = e, vm;
}
var ym, UC;
function B0() {
  if (UC) return ym;
  UC = 1;
  var e = nn();
  ym = i;
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
    return e.each(h, function(S) {
      m.length > 1 ? v.setNode(S, p) : v.setNode(S);
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
    e.each(this._nodes, function(y, x) {
      h(x) && p.setNode(x, y);
    }), e.each(this._edgeObjs, function(y) {
      p.hasNode(y.v) && p.hasNode(y.w) && p.setEdge(y, m.edge(y));
    });
    var v = {};
    function S(y) {
      var x = m.parent(y);
      return x === void 0 || p.hasNode(x) ? (v[y] = x, x) : x in v ? v[x] : S(x);
    }
    return this._isCompound && e.each(p.nodes(), function(y) {
      p.setParent(y, S(y));
    }), p;
  }, i.prototype.setDefaultEdgeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultEdgeLabelFn = h, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, i.prototype.setPath = function(h, p) {
    var m = this, v = arguments;
    return e.reduce(h, function(S, y) {
      return v.length > 1 ? m.setEdge(S, y, p) : m.setEdge(S, y), y;
    }), this;
  }, i.prototype.setEdge = function() {
    var h, p, m, v, S = !1, y = arguments[0];
    typeof y == "object" && y !== null && "v" in y ? (h = y.v, p = y.w, m = y.name, arguments.length === 2 && (v = arguments[1], S = !0)) : (h = y, p = arguments[1], m = arguments[3], arguments.length > 2 && (v = arguments[2], S = !0)), h = "" + h, p = "" + p, e.isUndefined(m) || (m = "" + m);
    var x = u(this._isDirected, h, p, m);
    if (e.has(this._edgeLabels, x))
      return S && (this._edgeLabels[x] = v), this;
    if (!e.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(p), this._edgeLabels[x] = S ? v : this._defaultEdgeLabelFn(h, p, m);
    var b = f(this._isDirected, h, p, m);
    return h = b.v, p = b.w, Object.freeze(b), this._edgeObjs[x] = b, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][x] = b, this._out[h][x] = b, this._edgeCount++, this;
  }, i.prototype.edge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return this._edgeLabels[v];
  }, i.prototype.hasEdge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m);
    return e.has(this._edgeLabels, v);
  }, i.prototype.removeEdge = function(h, p, m) {
    var v = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, p, m), S = this._edgeObjs[v];
    return S && (h = S.v, p = S.w, delete this._edgeLabels[v], delete this._edgeObjs[v], l(this._preds[p], h), l(this._sucs[h], p), delete this._in[p][v], delete this._out[h][v], this._edgeCount--), this;
  }, i.prototype.inEdges = function(h, p) {
    var m = this._in[h];
    if (m) {
      var v = e.values(m);
      return p ? e.filter(v, function(S) {
        return S.v === p;
      }) : v;
    }
  }, i.prototype.outEdges = function(h, p) {
    var m = this._out[h];
    if (m) {
      var v = e.values(m);
      return p ? e.filter(v, function(S) {
        return S.w === p;
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
    var S = "" + p, y = "" + m;
    if (!h && S > y) {
      var x = S;
      S = y, y = x;
    }
    return S + o + y + o + (e.isUndefined(v) ? t : v);
  }
  function f(h, p, m, v) {
    var S = "" + p, y = "" + m;
    if (!h && S > y) {
      var x = S;
      S = y, y = x;
    }
    var b = { v: S, w: y };
    return v && (b.name = v), b;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return ym;
}
var wm, GC;
function vW() {
  return GC || (GC = 1, wm = "2.1.8"), wm;
}
var xm, KC;
function yW() {
  return KC || (KC = 1, xm = {
    Graph: B0(),
    version: vW()
  }), xm;
}
var bm, YC;
function wW() {
  if (YC) return bm;
  YC = 1;
  var e = nn(), t = B0();
  bm = {
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
  return bm;
}
var _m, XC;
function xW() {
  if (XC) return _m;
  XC = 1;
  var e = nn();
  _m = t;
  function t(n) {
    var o = {}, i = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(n.successors(u), l), e.each(n.predecessors(u), l));
    }
    return e.each(n.nodes(), function(u) {
      a = [], l(u), a.length && i.push(a);
    }), i;
  }
  return _m;
}
var Sm, QC;
function KA() {
  if (QC) return Sm;
  QC = 1;
  var e = nn();
  Sm = t;
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
  }, Sm;
}
var Em, ZC;
function YA() {
  if (ZC) return Em;
  ZC = 1;
  var e = nn(), t = KA();
  Em = o;
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
    var d = {}, h = new t(), p, m, v = function(S) {
      var y = S.v !== p ? S.v : S.w, x = d[y], b = u(S), C = m.distance + b;
      if (b < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + S + " Weight: " + b);
      C < x.distance && (x.distance = C, x.predecessor = p, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(S) {
      var y = S === l ? 0 : Number.POSITIVE_INFINITY;
      d[S] = { distance: y }, h.add(S, y);
    }); h.size() > 0 && (p = h.removeMin(), m = d[p], m.distance !== Number.POSITIVE_INFINITY); )
      f(p).forEach(v);
    return d;
  }
  return Em;
}
var Cm, JC;
function bW() {
  if (JC) return Cm;
  JC = 1;
  var e = YA(), t = nn();
  Cm = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return Cm;
}
var km, ek;
function XA() {
  if (ek) return km;
  ek = 1;
  var e = nn();
  km = t;
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
  return km;
}
var Rm, tk;
function _W() {
  if (tk) return Rm;
  tk = 1;
  var e = nn(), t = XA();
  Rm = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return Rm;
}
var Nm, nk;
function SW() {
  if (nk) return Nm;
  nk = 1;
  var e = nn();
  Nm = n;
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
          var S = m[d], y = h[v], x = m[v], b = S.distance + y.distance;
          b < x.distance && (x.distance = b, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return Nm;
}
var Pm, rk;
function QA() {
  if (rk) return Pm;
  rk = 1;
  var e = nn();
  Pm = t, t.CycleException = n;
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
  return n.prototype = new Error(), Pm;
}
var Tm, ok;
function EW() {
  if (ok) return Tm;
  ok = 1;
  var e = QA();
  Tm = t;
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
  return Tm;
}
var Im, ik;
function ZA() {
  if (ik) return Im;
  ik = 1;
  var e = nn();
  Im = t;
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
  return Im;
}
var Am, sk;
function CW() {
  if (sk) return Am;
  sk = 1;
  var e = ZA();
  Am = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return Am;
}
var Mm, ak;
function kW() {
  if (ak) return Mm;
  ak = 1;
  var e = ZA();
  Mm = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return Mm;
}
var Om, lk;
function RW() {
  if (lk) return Om;
  lk = 1;
  var e = nn(), t = B0(), n = KA();
  Om = o;
  function o(i, a) {
    var l = new t(), u = {}, f = new n(), d;
    function h(m) {
      var v = m.v === d ? m.w : m.v, S = f.priority(v);
      if (S !== void 0) {
        var y = a(m);
        y < S && (u[v] = d, f.decrease(v, y));
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
  return Om;
}
var Lm, uk;
function NW() {
  return uk || (uk = 1, Lm = {
    components: xW(),
    dijkstra: YA(),
    dijkstraAll: bW(),
    findCycles: _W(),
    floydWarshall: SW(),
    isAcyclic: EW(),
    postorder: CW(),
    preorder: kW(),
    prim: RW(),
    tarjan: XA(),
    topsort: QA()
  }), Lm;
}
var Dm, ck;
function PW() {
  if (ck) return Dm;
  ck = 1;
  var e = yW();
  return Dm = {
    Graph: e.Graph,
    json: wW(),
    alg: NW(),
    version: e.version
  }, Dm;
}
var jm, fk;
function wn() {
  if (fk) return jm;
  fk = 1;
  var e;
  if (typeof k0 == "function")
    try {
      e = PW();
    } catch {
    }
  return e || (e = window.graphlib), jm = e, jm;
}
var qm, dk;
function TW() {
  if (dk) return qm;
  dk = 1;
  var e = SA(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return qm = o, qm;
}
var Fm, hk;
function vc() {
  if (hk) return Fm;
  hk = 1;
  var e = Ti(), t = nr(), n = lc(), o = tn();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return Fm = i, Fm;
}
var zm, pk;
function IW() {
  if (pk) return zm;
  pk = 1;
  var e = mc(), t = Ti(), n = vc(), o = Eo(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), S = -1, y = v.length; ++S < y; ) {
        var x = v[S], b = u[x];
        (b === void 0 || t(b, i[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return zm = l, zm;
}
var $m, gk;
function AW() {
  if (gk) return $m;
  gk = 1;
  var e = rr(), t = nr(), n = Fr();
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
  return $m = o, $m;
}
var Bm, mk;
function MW() {
  if (mk) return Bm;
  mk = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return Bm = t, Bm;
}
var Vm, vk;
function OW() {
  if (vk) return Vm;
  vk = 1;
  var e = MW(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return Vm = n, Vm;
}
var Hm, yk;
function LW() {
  if (yk) return Hm;
  yk = 1;
  var e = OW(), t = tn(), n = Oi(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
  return Hm = f, Hm;
}
var Wm, wk;
function JA() {
  if (wk) return Wm;
  wk = 1;
  var e = LW(), t = 1 / 0, n = 17976931348623157e292;
  function o(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * n;
    }
    return i === i ? i : 0;
  }
  return Wm = o, Wm;
}
var Um, xk;
function DW() {
  if (xk) return Um;
  xk = 1;
  var e = JA();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return Um = t, Um;
}
var Gm, bk;
function jW() {
  if (bk) return Gm;
  bk = 1;
  var e = WA(), t = rr(), n = DW(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return Gm = i, Gm;
}
var Km, _k;
function qW() {
  if (_k) return Km;
  _k = 1;
  var e = AW(), t = jW(), n = e(t);
  return Km = n, Km;
}
var Ym, Sk;
function eM() {
  if (Sk) return Ym;
  Sk = 1;
  var e = $0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return Ym = t, Ym;
}
var Xm, Ek;
function FW() {
  if (Ek) return Xm;
  Ek = 1;
  var e = j0(), t = EA(), n = Eo();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Xm = o, Xm;
}
var Qm, Ck;
function zW() {
  if (Ck) return Qm;
  Ck = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Qm = e, Qm;
}
var Zm, kk;
function $W() {
  if (kk) return Zm;
  kk = 1;
  var e = sc(), t = q0(), n = rr();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Zm = o, Zm;
}
var Jm, Rk;
function V0() {
  if (Rk) return Jm;
  Rk = 1;
  var e = Oi();
  function t(n, o, i) {
    for (var a = -1, l = n.length; ++a < l; ) {
      var u = n[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : i(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Jm = t, Jm;
}
var ev, Nk;
function BW() {
  if (Nk) return ev;
  Nk = 1;
  function e(t, n) {
    return t > n;
  }
  return ev = e, ev;
}
var tv, Pk;
function VW() {
  if (Pk) return tv;
  Pk = 1;
  var e = V0(), t = BW(), n = Co();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return tv = o, tv;
}
var nv, Tk;
function tM() {
  if (Tk) return nv;
  Tk = 1;
  var e = sc(), t = Ti();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return nv = n, nv;
}
var rv, Ik;
function HW() {
  if (Ik) return rv;
  Ik = 1;
  var e = _o(), t = fc(), n = Fn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return rv = d, rv;
}
var ov, Ak;
function nM() {
  if (Ak) return ov;
  Ak = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return ov = e, ov;
}
var iv, Mk;
function WW() {
  if (Mk) return iv;
  Mk = 1;
  var e = ca(), t = Eo();
  function n(o) {
    return e(o, t(o));
  }
  return iv = n, iv;
}
var sv, Ok;
function UW() {
  if (Ok) return sv;
  Ok = 1;
  var e = tM(), t = fA(), n = xA(), o = dA(), i = _A(), a = fa(), l = rt(), u = UA(), f = Ai(), d = ua(), h = tn(), p = HW(), m = da(), v = nM(), S = WW();
  function y(x, b, C, _, R, P, T) {
    var A = v(x, C), O = v(b, C), j = T.get(O);
    if (j) {
      e(x, C, j);
      return;
    }
    var G = P ? P(A, O, C + "", x, b, T) : void 0, z = G === void 0;
    if (z) {
      var H = l(O), Q = !H && f(O), L = !H && !Q && m(O);
      G = O, H || Q || L ? l(A) ? G = A : u(A) ? G = o(A) : Q ? (z = !1, G = t(O, !0)) : L ? (z = !1, G = n(O, !0)) : G = [] : p(O) || a(O) ? (G = A, a(A) ? G = S(A) : (!h(A) || d(A)) && (G = i(O))) : z = !1;
    }
    z && (T.set(O, G), R(G, O, _, P, T), T.delete(O)), e(x, C, G);
  }
  return sv = y, sv;
}
var av, Lk;
function GW() {
  if (Lk) return av;
  Lk = 1;
  var e = ic(), t = tM(), n = j0(), o = UW(), i = tn(), a = Eo(), l = nM();
  function u(f, d, h, p, m) {
    f !== d && n(d, function(v, S) {
      if (m || (m = new e()), i(v))
        o(f, d, S, h, u, p, m);
      else {
        var y = p ? p(l(f, S), v, S + "", f, d, m) : void 0;
        y === void 0 && (y = v), t(f, S, y);
      }
    }, a);
  }
  return av = u, av;
}
var lv, Dk;
function KW() {
  if (Dk) return lv;
  Dk = 1;
  var e = mc(), t = vc();
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
  return lv = n, lv;
}
var uv, jk;
function YW() {
  if (jk) return uv;
  jk = 1;
  var e = GW(), t = KW(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return uv = n, uv;
}
var cv, qk;
function rM() {
  if (qk) return cv;
  qk = 1;
  function e(t, n) {
    return t < n;
  }
  return cv = e, cv;
}
var fv, Fk;
function XW() {
  if (Fk) return fv;
  Fk = 1;
  var e = V0(), t = rM(), n = Co();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return fv = o, fv;
}
var dv, zk;
function QW() {
  if (zk) return dv;
  zk = 1;
  var e = V0(), t = rr(), n = rM();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return dv = o, dv;
}
var hv, $k;
function ZW() {
  if ($k) return hv;
  $k = 1;
  var e = _n(), t = function() {
    return e.Date.now();
  };
  return hv = t, hv;
}
var pv, Bk;
function JW() {
  if (Bk) return pv;
  Bk = 1;
  var e = ac(), t = pc(), n = lc(), o = tn(), i = ha();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, p = u.length, m = p - 1, v = l; v != null && ++h < p; ) {
      var S = i(u[h]), y = f;
      if (S === "__proto__" || S === "constructor" || S === "prototype")
        return l;
      if (h != m) {
        var x = v[S];
        y = d ? d(x, S, v) : void 0, y === void 0 && (y = o(x) ? x : n(u[h + 1]) ? [] : {});
      }
      e(v, S, y), v = v[S];
    }
    return l;
  }
  return pv = a, pv;
}
var gv, Vk;
function eU() {
  if (Vk) return gv;
  Vk = 1;
  var e = gc(), t = JW(), n = pc();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return gv = o, gv;
}
var mv, Hk;
function tU() {
  if (Hk) return mv;
  Hk = 1;
  var e = eU(), t = LA();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return mv = n, mv;
}
var vv, Wk;
function nU() {
  if (Wk) return vv;
  Wk = 1;
  var e = eM(), t = VA(), n = HA();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return vv = o, vv;
}
var yv, Uk;
function rU() {
  if (Uk) return yv;
  Uk = 1;
  var e = tU(), t = nU(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return yv = n, yv;
}
var wv, Gk;
function oU() {
  if (Gk) return wv;
  Gk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return wv = n, wv;
}
var xv, Kk;
function iU() {
  if (Kk) return xv;
  Kk = 1;
  var e = oU(), t = vc(), n = JA();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return xv = o, xv;
}
var bv, Yk;
function sU() {
  if (Yk) return bv;
  Yk = 1;
  var e = iU(), t = e();
  return bv = t, bv;
}
var _v, Xk;
function aU() {
  if (Xk) return _v;
  Xk = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return _v = e, _v;
}
var Sv, Qk;
function lU() {
  if (Qk) return Sv;
  Qk = 1;
  var e = Oi();
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
  return Sv = t, Sv;
}
var Ev, Zk;
function uU() {
  if (Zk) return Ev;
  Zk = 1;
  var e = lU();
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
  return Ev = t, Ev;
}
var Cv, Jk;
function cU() {
  if (Jk) return Cv;
  Jk = 1;
  var e = hc(), t = gc(), n = rr(), o = zA(), i = aU(), a = uc(), l = uU(), u = Co(), f = rt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var v = -1;
    p = e(p, a(n));
    var S = o(h, function(y, x, b) {
      var C = e(p, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++v, value: y };
    });
    return i(S, function(y, x) {
      return l(y, x, m);
    });
  }
  return Cv = d, Cv;
}
var kv, eR;
function fU() {
  if (eR) return kv;
  eR = 1;
  var e = $0(), t = cU(), n = mc(), o = vc(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return kv = i, kv;
}
var Rv, tR;
function dU() {
  if (tR) return Rv;
  tR = 1;
  var e = MA(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return Rv = n, Rv;
}
var Nv, nR;
function hU() {
  if (nR) return Nv;
  nR = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return Nv = e, Nv;
}
var Pv, rR;
function pU() {
  if (rR) return Pv;
  rR = 1;
  var e = ac(), t = hU();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return Pv = n, Pv;
}
var Tv, oR;
function We() {
  if (oR) return Tv;
  oR = 1;
  var e;
  if (typeof k0 == "function")
    try {
      e = {
        cloneDeep: TW(),
        constant: D0(),
        defaults: IW(),
        each: kA(),
        filter: jA(),
        find: qW(),
        flatten: eM(),
        forEach: CA(),
        forIn: FW(),
        has: qA(),
        isUndefined: FA(),
        last: zW(),
        map: $A(),
        mapValues: $W(),
        max: VW(),
        merge: YW(),
        min: XW(),
        minBy: QW(),
        now: ZW(),
        pick: rU(),
        range: sU(),
        reduce: BA(),
        sortBy: fU(),
        uniqueId: dU(),
        values: GA(),
        zipObject: pU()
      };
    } catch {
    }
  return e || (e = window._), Tv = e, Tv;
}
var Iv, iR;
function gU() {
  if (iR) return Iv;
  iR = 1, Iv = e;
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
  return Iv;
}
var Av, sR;
function mU() {
  if (sR) return Av;
  sR = 1;
  var e = We(), t = wn().Graph, n = gU();
  Av = i;
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
    for (var m = [], v = h[h.length - 1], S = h[0], y; d.nodeCount(); ) {
      for (; y = S.dequeue(); )
        l(d, h, p, y);
      for (; y = v.dequeue(); )
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
  function l(d, h, p, m, v) {
    var S = v ? [] : void 0;
    return e.forEach(d.inEdges(m.v), function(y) {
      var x = d.edge(y), b = d.node(y.v);
      v && S.push({ v: y.v, w: y.w }), b.out -= x, f(h, p, b);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var x = d.edge(y), b = y.w, C = d.node(b);
      C.in -= x, f(h, p, C);
    }), d.removeNode(m.v), S;
  }
  function u(d, h) {
    var p = new t(), m = 0, v = 0;
    e.forEach(d.nodes(), function(x) {
      p.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var b = p.edge(x.v, x.w) || 0, C = h(x), _ = b + C;
      p.setEdge(x.v, x.w, _), v = Math.max(v, p.node(x.v).out += C), m = Math.max(m, p.node(x.w).in += C);
    });
    var S = e.range(v + m + 3).map(function() {
      return new n();
    }), y = m + 1;
    return e.forEach(p.nodes(), function(x) {
      f(S, y, p.node(x));
    }), { graph: p, buckets: S, zeroIdx: y };
  }
  function f(d, h, p) {
    p.out ? p.in ? d[p.out - p.in + h].enqueue(p) : d[d.length - 1].enqueue(p) : d[0].enqueue(p);
  }
  return Av;
}
var Mv, aR;
function vU() {
  if (aR) return Mv;
  aR = 1;
  var e = We(), t = mU();
  Mv = {
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
  return Mv;
}
var Ov, lR;
function Tt() {
  if (lR) return Ov;
  lR = 1;
  var e = We(), t = wn().Graph;
  Ov = {
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
    time: S,
    notime: y
  };
  function n(x, b, C, _) {
    var R;
    do
      R = e.uniqueId(_);
    while (x.hasNode(R));
    return C.dummy = b, x.setNode(R, C), R;
  }
  function o(x) {
    var b = new t().setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      b.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      var _ = b.edge(C.v, C.w) || { weight: 0, minlen: 1 }, R = x.edge(C);
      b.setEdge(C.v, C.w, {
        weight: _.weight + R.weight,
        minlen: Math.max(_.minlen, R.minlen)
      });
    }), b;
  }
  function i(x) {
    var b = new t({ multigraph: x.isMultigraph() }).setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      x.children(C).length || b.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      b.setEdge(C, x.edge(C));
    }), b;
  }
  function a(x) {
    var b = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.outEdges(C), function(R) {
        _[R.w] = (_[R.w] || 0) + x.edge(R).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), b);
  }
  function l(x) {
    var b = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.inEdges(C), function(R) {
        _[R.v] = (_[R.v] || 0) + x.edge(R).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), b);
  }
  function u(x, b) {
    var C = x.x, _ = x.y, R = b.x - C, P = b.y - _, T = x.width / 2, A = x.height / 2;
    if (!R && !P)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, j;
    return Math.abs(P) * T > Math.abs(R) * A ? (P < 0 && (A = -A), O = A * R / P, j = A) : (R < 0 && (T = -T), O = T, j = T * P / R), { x: C + O, y: _ + j };
  }
  function f(x) {
    var b = e.map(e.range(m(x) + 1), function() {
      return [];
    });
    return e.forEach(x.nodes(), function(C) {
      var _ = x.node(C), R = _.rank;
      e.isUndefined(R) || (b[R][_.order] = C);
    }), b;
  }
  function d(x) {
    var b = e.min(e.map(x.nodes(), function(C) {
      return x.node(C).rank;
    }));
    e.forEach(x.nodes(), function(C) {
      var _ = x.node(C);
      e.has(_, "rank") && (_.rank -= b);
    });
  }
  function h(x) {
    var b = e.min(e.map(x.nodes(), function(P) {
      return x.node(P).rank;
    })), C = [];
    e.forEach(x.nodes(), function(P) {
      var T = x.node(P).rank - b;
      C[T] || (C[T] = []), C[T].push(P);
    });
    var _ = 0, R = x.graph().nodeRankFactor;
    e.forEach(C, function(P, T) {
      e.isUndefined(P) && T % R !== 0 ? --_ : _ && e.forEach(P, function(A) {
        x.node(A).rank += _;
      });
    });
  }
  function p(x, b, C, _) {
    var R = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (R.rank = C, R.order = _), n(x, "border", R, b);
  }
  function m(x) {
    return e.max(e.map(x.nodes(), function(b) {
      var C = x.node(b).rank;
      if (!e.isUndefined(C))
        return C;
    }));
  }
  function v(x, b) {
    var C = { lhs: [], rhs: [] };
    return e.forEach(x, function(_) {
      b(_) ? C.lhs.push(_) : C.rhs.push(_);
    }), C;
  }
  function S(x, b) {
    var C = e.now();
    try {
      return b();
    } finally {
      console.log(x + " time: " + (e.now() - C) + "ms");
    }
  }
  function y(x, b) {
    return b();
  }
  return Ov;
}
var Lv, uR;
function yU() {
  if (uR) return Lv;
  uR = 1;
  var e = We(), t = Tt();
  Lv = {
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
      var S, y, x;
      for (x = 0, ++f; f < h; ++x, ++f)
        m.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: m,
          edgeObj: l,
          rank: f
        }, S = t.addDummyNode(a, "edge", y, "_d"), f === v && (y.width = m.width, y.height = m.height, y.dummy = "edge-label", y.labelpos = m.labelpos), a.setEdge(u, S, { weight: m.weight }, p), x === 0 && a.graph().dummyChains.push(S), u = S;
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
  return Lv;
}
var Dv, cR;
function Su() {
  if (cR) return Dv;
  cR = 1;
  var e = We();
  Dv = {
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
  return Dv;
}
var jv, fR;
function oM() {
  if (fR) return jv;
  fR = 1;
  var e = We(), t = wn().Graph, n = Su().slack;
  jv = o;
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
  return jv;
}
var qv, dR;
function wU() {
  if (dR) return qv;
  dR = 1;
  var e = We(), t = oM(), n = Su().slack, o = Su().longestPath, i = wn().alg.preorder, a = wn().alg.postorder, l = Tt().simplify;
  qv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = S, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var R = t(_);
    p(R), f(R, _);
    for (var P, T; P = v(R); )
      T = S(R, _, P), y(R, _, P, T);
  }
  function f(_, R) {
    var P = a(_, _.nodes());
    P = P.slice(0, P.length - 1), e.forEach(P, function(T) {
      d(_, R, T);
    });
  }
  function d(_, R, P) {
    var T = _.node(P), A = T.parent;
    _.edge(P, A).cutvalue = h(_, R, P);
  }
  function h(_, R, P) {
    var T = _.node(P), A = T.parent, O = !0, j = R.edge(P, A), G = 0;
    return j || (O = !1, j = R.edge(A, P)), G = j.weight, e.forEach(R.nodeEdges(P), function(z) {
      var H = z.v === P, Q = H ? z.w : z.v;
      if (Q !== A) {
        var L = H === O, B = R.edge(z).weight;
        if (G += L ? B : -B, b(_, P, Q)) {
          var q = _.edge(P, Q).cutvalue;
          G += L ? -q : q;
        }
      }
    }), G;
  }
  function p(_, R) {
    arguments.length < 2 && (R = _.nodes()[0]), m(_, {}, 1, R);
  }
  function m(_, R, P, T, A) {
    var O = P, j = _.node(T);
    return R[T] = !0, e.forEach(_.neighbors(T), function(G) {
      e.has(R, G) || (P = m(_, R, P, G, T));
    }), j.low = O, j.lim = P++, A ? j.parent = A : delete j.parent, P;
  }
  function v(_) {
    return e.find(_.edges(), function(R) {
      return _.edge(R).cutvalue < 0;
    });
  }
  function S(_, R, P) {
    var T = P.v, A = P.w;
    R.hasEdge(T, A) || (T = P.w, A = P.v);
    var O = _.node(T), j = _.node(A), G = O, z = !1;
    O.lim > j.lim && (G = j, z = !0);
    var H = e.filter(R.edges(), function(Q) {
      return z === C(_, _.node(Q.v), G) && z !== C(_, _.node(Q.w), G);
    });
    return e.minBy(H, function(Q) {
      return n(R, Q);
    });
  }
  function y(_, R, P, T) {
    var A = P.v, O = P.w;
    _.removeEdge(A, O), _.setEdge(T.v, T.w, {}), p(_), f(_, R), x(_, R);
  }
  function x(_, R) {
    var P = e.find(_.nodes(), function(A) {
      return !R.node(A).parent;
    }), T = i(_, P);
    T = T.slice(1), e.forEach(T, function(A) {
      var O = _.node(A).parent, j = R.edge(A, O), G = !1;
      j || (j = R.edge(O, A), G = !0), R.node(A).rank = R.node(O).rank + (G ? j.minlen : -j.minlen);
    });
  }
  function b(_, R, P) {
    return _.hasEdge(R, P);
  }
  function C(_, R, P) {
    return P.low <= R.lim && R.lim <= P.lim;
  }
  return qv;
}
var Fv, hR;
function xU() {
  if (hR) return Fv;
  hR = 1;
  var e = Su(), t = e.longestPath, n = oM(), o = wU();
  Fv = i;
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
  return Fv;
}
var zv, pR;
function bU() {
  if (pR) return zv;
  pR = 1;
  var e = We();
  zv = t;
  function t(i) {
    var a = o(i);
    e.forEach(i.graph().dummyChains, function(l) {
      for (var u = i.node(l), f = u.edgeObj, d = n(i, a, f.v, f.w), h = d.path, p = d.lca, m = 0, v = h[m], S = !0; l !== f.w; ) {
        if (u = i.node(l), S) {
          for (; (v = h[m]) !== p && i.node(v).maxRank < u.rank; )
            m++;
          v === p && (S = !1);
        }
        if (!S) {
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
  return zv;
}
var $v, gR;
function _U() {
  if (gR) return $v;
  gR = 1;
  var e = We(), t = Tt();
  $v = {
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
    var S = u.children(v);
    if (!S.length) {
      v !== f && u.setEdge(f, v, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), b = u.node(v);
    u.setParent(y, v), b.borderTop = y, u.setParent(x, v), b.borderBottom = x, e.forEach(S, function(C) {
      o(u, f, d, h, p, m, C);
      var _ = u.node(C), R = _.borderTop ? _.borderTop : C, P = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, A = R !== P ? 1 : p - m[v] + 1;
      u.setEdge(y, R, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      }), u.setEdge(P, x, {
        weight: T,
        minlen: A,
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
  return $v;
}
var Bv, mR;
function SU() {
  if (mR) return Bv;
  mR = 1;
  var e = We(), t = Tt();
  Bv = n;
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
  return Bv;
}
var Vv, vR;
function EU() {
  if (vR) return Vv;
  vR = 1;
  var e = We();
  Vv = {
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
  return Vv;
}
var Hv, yR;
function CU() {
  if (yR) return Hv;
  yR = 1;
  var e = We();
  Hv = t;
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
  return Hv;
}
var Wv, wR;
function kU() {
  if (wR) return Wv;
  wR = 1;
  var e = We();
  Wv = t;
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
      for (var S = 0; v > 0; )
        v % 2 && (S += h[v + 1]), v = v - 1 >> 1, h[v] += m.weight;
      p += m.weight * S;
    })), p;
  }
  return Wv;
}
var Uv, xR;
function RU() {
  if (xR) return Uv;
  xR = 1;
  var e = We();
  Uv = t;
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
  return Uv;
}
var Gv, bR;
function NU() {
  if (bR) return Gv;
  bR = 1;
  var e = We();
  Gv = t;
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
  return Gv;
}
var Kv, _R;
function PU() {
  if (_R) return Kv;
  _R = 1;
  var e = We(), t = Tt();
  Kv = n;
  function n(a, l) {
    var u = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = u.lhs, d = e.sortBy(u.rhs, function(y) {
      return -y.i;
    }), h = [], p = 0, m = 0, v = 0;
    f.sort(i(!!l)), v = o(h, d, v), e.forEach(f, function(y) {
      v += y.vs.length, h.push(y.vs), p += y.barycenter * y.weight, m += y.weight, v = o(h, d, v);
    });
    var S = { vs: e.flatten(h, !0) };
    return m && (S.barycenter = p / m, S.weight = m), S;
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
  return Kv;
}
var Yv, SR;
function TU() {
  if (SR) return Yv;
  SR = 1;
  var e = We(), t = RU(), n = NU(), o = PU();
  Yv = i;
  function i(u, f, d, h) {
    var p = u.children(f), m = u.node(f), v = m ? m.borderLeft : void 0, S = m ? m.borderRight : void 0, y = {};
    v && (p = e.filter(p, function(P) {
      return P !== v && P !== S;
    }));
    var x = t(u, p);
    e.forEach(x, function(P) {
      if (u.children(P.v).length) {
        var T = i(u, P.v, d, h);
        y[P.v] = T, e.has(T, "barycenter") && l(P, T);
      }
    });
    var b = n(x, d);
    a(b, y);
    var C = o(b, h);
    if (v && (C.vs = e.flatten([v, C.vs, S], !0), u.predecessors(v).length)) {
      var _ = u.node(u.predecessors(v)[0]), R = u.node(u.predecessors(S)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + _.order + R.order) / (C.weight + 2), C.weight += 2;
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
  return Yv;
}
var Xv, ER;
function IU() {
  if (ER) return Xv;
  ER = 1;
  var e = We(), t = wn().Graph;
  Xv = n;
  function n(i, a, l) {
    var u = o(i), f = new t({ compound: !0 }).setGraph({ root: u }).setDefaultNodeLabel(function(d) {
      return i.node(d);
    });
    return e.forEach(i.nodes(), function(d) {
      var h = i.node(d), p = i.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, p || u), e.forEach(i[l](d), function(m) {
        var v = m.v === d ? m.w : m.v, S = f.edge(v, d), y = e.isUndefined(S) ? 0 : S.weight;
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
  return Xv;
}
var Qv, CR;
function AU() {
  if (CR) return Qv;
  CR = 1;
  var e = We();
  Qv = t;
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
  return Qv;
}
var Zv, kR;
function MU() {
  if (kR) return Zv;
  kR = 1;
  var e = We(), t = CU(), n = kU(), o = TU(), i = IU(), a = AU(), l = wn().Graph, u = Tt();
  Zv = f;
  function f(m) {
    var v = u.maxRank(m), S = d(m, e.range(1, v + 1), "inEdges"), y = d(m, e.range(v - 1, -1, -1), "outEdges"), x = t(m);
    p(m, x);
    for (var b = Number.POSITIVE_INFINITY, C, _ = 0, R = 0; R < 4; ++_, ++R) {
      h(_ % 2 ? S : y, _ % 4 >= 2), x = u.buildLayerMatrix(m);
      var P = n(m, x);
      P < b && (R = 0, C = e.cloneDeep(x), b = P);
    }
    p(m, C);
  }
  function d(m, v, S) {
    return e.map(v, function(y) {
      return i(m, y, S);
    });
  }
  function h(m, v) {
    var S = new l();
    e.forEach(m, function(y) {
      var x = y.graph().root, b = o(y, x, S, v);
      e.forEach(b.vs, function(C, _) {
        y.node(C).order = _;
      }), a(y, S, b.vs);
    });
  }
  function p(m, v) {
    e.forEach(v, function(S) {
      e.forEach(S, function(y, x) {
        m.node(y).order = x;
      });
    });
  }
  return Zv;
}
var Jv, RR;
function OU() {
  if (RR) return Jv;
  RR = 1;
  var e = We(), t = wn().Graph, n = Tt();
  Jv = {
    positionX: S,
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
  function o(b, C) {
    var _ = {};
    function R(P, T) {
      var A = 0, O = 0, j = P.length, G = e.last(T);
      return e.forEach(T, function(z, H) {
        var Q = a(b, z), L = Q ? b.node(Q).order : j;
        (Q || z === G) && (e.forEach(T.slice(O, H + 1), function(B) {
          e.forEach(b.predecessors(B), function(q) {
            var U = b.node(q), M = U.order;
            (M < A || L < M) && !(U.dummy && b.node(B).dummy) && l(_, q, B);
          });
        }), O = H + 1, A = L);
      }), T;
    }
    return e.reduce(C, R), _;
  }
  function i(b, C) {
    var _ = {};
    function R(T, A, O, j, G) {
      var z;
      e.forEach(e.range(A, O), function(H) {
        z = T[H], b.node(z).dummy && e.forEach(b.predecessors(z), function(Q) {
          var L = b.node(Q);
          L.dummy && (L.order < j || L.order > G) && l(_, Q, z);
        });
      });
    }
    function P(T, A) {
      var O = -1, j, G = 0;
      return e.forEach(A, function(z, H) {
        if (b.node(z).dummy === "border") {
          var Q = b.predecessors(z);
          Q.length && (j = b.node(Q[0]).order, R(A, G, H, O, j), G = H, O = j);
        }
        R(A, G, A.length, j, T.length);
      }), A;
    }
    return e.reduce(C, P), _;
  }
  function a(b, C) {
    if (b.node(C).dummy)
      return e.find(b.predecessors(C), function(_) {
        return b.node(_).dummy;
      });
  }
  function l(b, C, _) {
    if (C > _) {
      var R = C;
      C = _, _ = R;
    }
    var P = b[C];
    P || (b[C] = P = {}), P[_] = !0;
  }
  function u(b, C, _) {
    if (C > _) {
      var R = C;
      C = _, _ = R;
    }
    return e.has(b[C], _);
  }
  function f(b, C, _, R) {
    var P = {}, T = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(j, G) {
        P[j] = j, T[j] = j, A[j] = G;
      });
    }), e.forEach(C, function(O) {
      var j = -1;
      e.forEach(O, function(G) {
        var z = R(G);
        if (z.length) {
          z = e.sortBy(z, function(q) {
            return A[q];
          });
          for (var H = (z.length - 1) / 2, Q = Math.floor(H), L = Math.ceil(H); Q <= L; ++Q) {
            var B = z[Q];
            T[G] === G && j < A[B] && !u(_, G, B) && (T[B] = G, T[G] = P[G] = P[B], j = A[B]);
          }
        }
      });
    }), { root: P, align: T };
  }
  function d(b, C, _, R, P) {
    var T = {}, A = h(b, C, _, P), O = P ? "borderLeft" : "borderRight";
    function j(H, Q) {
      for (var L = A.nodes(), B = L.pop(), q = {}; B; )
        q[B] ? H(B) : (q[B] = !0, L.push(B), L = L.concat(Q(B))), B = L.pop();
    }
    function G(H) {
      T[H] = A.inEdges(H).reduce(function(Q, L) {
        return Math.max(Q, T[L.v] + A.edge(L));
      }, 0);
    }
    function z(H) {
      var Q = A.outEdges(H).reduce(function(B, q) {
        return Math.min(B, T[q.w] - A.edge(q));
      }, Number.POSITIVE_INFINITY), L = b.node(H);
      Q !== Number.POSITIVE_INFINITY && L.borderType !== O && (T[H] = Math.max(T[H], Q));
    }
    return j(G, A.predecessors.bind(A)), j(z, A.successors.bind(A)), e.forEach(R, function(H) {
      T[H] = T[_[H]];
    }), T;
  }
  function h(b, C, _, R) {
    var P = new t(), T = b.graph(), A = y(T.nodesep, T.edgesep, R);
    return e.forEach(C, function(O) {
      var j;
      e.forEach(O, function(G) {
        var z = _[G];
        if (P.setNode(z), j) {
          var H = _[j], Q = P.edge(H, z);
          P.setEdge(H, z, Math.max(A(b, G, j), Q || 0));
        }
        j = G;
      });
    }), P;
  }
  function p(b, C) {
    return e.minBy(e.values(C), function(_) {
      var R = Number.NEGATIVE_INFINITY, P = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, A) {
        var O = x(b, A) / 2;
        R = Math.max(T + O, R), P = Math.min(T - O, P);
      }), R - P;
    });
  }
  function m(b, C) {
    var _ = e.values(C), R = e.min(_), P = e.max(_);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(A) {
        var O = T + A, j = b[O], G;
        if (j !== C) {
          var z = e.values(j);
          G = A === "l" ? R - e.min(z) : P - e.max(z), G && (b[O] = e.mapValues(j, function(H) {
            return H + G;
          }));
        }
      });
    });
  }
  function v(b, C) {
    return e.mapValues(b.ul, function(_, R) {
      if (C)
        return b[C.toLowerCase()][R];
      var P = e.sortBy(e.map(b, R));
      return (P[1] + P[2]) / 2;
    });
  }
  function S(b) {
    var C = n.buildLayerMatrix(b), _ = e.merge(
      o(b, C),
      i(b, C)
    ), R = {}, P;
    e.forEach(["u", "d"], function(A) {
      P = A === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (P = e.map(P, function(H) {
          return e.values(H).reverse();
        }));
        var j = (A === "u" ? b.predecessors : b.successors).bind(b), G = f(b, P, _, j), z = d(
          b,
          P,
          G.root,
          G.align,
          O === "r"
        );
        O === "r" && (z = e.mapValues(z, function(H) {
          return -H;
        })), R[A + O] = z;
      });
    });
    var T = p(b, R);
    return m(R, T), v(R, b.graph().align);
  }
  function y(b, C, _) {
    return function(R, P, T) {
      var A = R.node(P), O = R.node(T), j = 0, G;
      if (j += A.width / 2, e.has(A, "labelpos"))
        switch (A.labelpos.toLowerCase()) {
          case "l":
            G = -A.width / 2;
            break;
          case "r":
            G = A.width / 2;
            break;
        }
      if (G && (j += _ ? G : -G), G = 0, j += (A.dummy ? C : b) / 2, j += (O.dummy ? C : b) / 2, j += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            G = O.width / 2;
            break;
          case "r":
            G = -O.width / 2;
            break;
        }
      return G && (j += _ ? G : -G), G = 0, j;
    };
  }
  function x(b, C) {
    return b.node(C).width;
  }
  return Jv;
}
var ey, NR;
function LU() {
  if (NR) return ey;
  NR = 1;
  var e = We(), t = Tt(), n = OU().positionX;
  ey = o;
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
  return ey;
}
var ty, PR;
function DU() {
  if (PR) return ty;
  PR = 1;
  var e = We(), t = vU(), n = yU(), o = xU(), i = Tt().normalizeRanks, a = bU(), l = Tt().removeEmptyRanks, u = _U(), f = SU(), d = EU(), h = MU(), p = LU(), m = Tt(), v = wn().Graph;
  ty = S;
  function S(V, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var Y = ee("  buildLayoutGraph", function() {
        return j(V);
      });
      ee("  runLayout", function() {
        y(Y, ee);
      }), ee("  updateInputGraph", function() {
        x(V, Y);
      });
    });
  }
  function y(V, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      G(V);
    }), Z("    removeSelfEdges", function() {
      F(V);
    }), Z("    acyclic", function() {
      t.run(V);
    }), Z("    nestingGraph.run", function() {
      u.run(V);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph(V));
    }), Z("    injectEdgeLabelProxies", function() {
      z(V);
    }), Z("    removeEmptyRanks", function() {
      l(V);
    }), Z("    nestingGraph.cleanup", function() {
      u.cleanup(V);
    }), Z("    normalizeRanks", function() {
      i(V);
    }), Z("    assignRankMinMax", function() {
      H(V);
    }), Z("    removeEdgeLabelProxies", function() {
      Q(V);
    }), Z("    normalize.run", function() {
      n.run(V);
    }), Z("    parentDummyChains", function() {
      a(V);
    }), Z("    addBorderSegments", function() {
      f(V);
    }), Z("    order", function() {
      h(V);
    }), Z("    insertSelfEdges", function() {
      X(V);
    }), Z("    adjustCoordinateSystem", function() {
      d.adjust(V);
    }), Z("    position", function() {
      p(V);
    }), Z("    positionSelfEdges", function() {
      D(V);
    }), Z("    removeBorderNodes", function() {
      M(V);
    }), Z("    normalize.undo", function() {
      n.undo(V);
    }), Z("    fixupEdgeLabelCoords", function() {
      q(V);
    }), Z("    undoCoordinateSystem", function() {
      d.undo(V);
    }), Z("    translateGraph", function() {
      L(V);
    }), Z("    assignNodeIntersects", function() {
      B(V);
    }), Z("    reversePoints", function() {
      U(V);
    }), Z("    acyclic.undo", function() {
      t.undo(V);
    });
  }
  function x(V, Z) {
    e.forEach(V.nodes(), function(ee) {
      var Y = V.node(ee), te = Z.node(ee);
      Y && (Y.x = te.x, Y.y = te.y, Z.children(ee).length && (Y.width = te.width, Y.height = te.height));
    }), e.forEach(V.edges(), function(ee) {
      var Y = V.edge(ee), te = Z.edge(ee);
      Y.points = te.points, e.has(te, "x") && (Y.x = te.x, Y.y = te.y);
    }), V.graph().width = Z.graph().width, V.graph().height = Z.graph().height;
  }
  var b = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], R = ["width", "height"], P = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], A = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function j(V) {
    var Z = new v({ multigraph: !0, compound: !0 }), ee = ie(V.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      W(ee, b),
      e.pick(ee, _)
    )), e.forEach(V.nodes(), function(Y) {
      var te = ie(V.node(Y));
      Z.setNode(Y, e.defaults(W(te, R), P)), Z.setParent(Y, V.parent(Y));
    }), e.forEach(V.edges(), function(Y) {
      var te = ie(V.edge(Y));
      Z.setEdge(Y, e.merge(
        {},
        A,
        W(te, T),
        e.pick(te, O)
      ));
    }), Z;
  }
  function G(V) {
    var Z = V.graph();
    Z.ranksep /= 2, e.forEach(V.edges(), function(ee) {
      var Y = V.edge(ee);
      Y.minlen *= 2, Y.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? Y.width += Y.labeloffset : Y.height += Y.labeloffset);
    });
  }
  function z(V) {
    e.forEach(V.edges(), function(Z) {
      var ee = V.edge(Z);
      if (ee.width && ee.height) {
        var Y = V.node(Z.v), te = V.node(Z.w), se = { rank: (te.rank - Y.rank) / 2 + Y.rank, e: Z };
        m.addDummyNode(V, "edge-proxy", se, "_ep");
      }
    });
  }
  function H(V) {
    var Z = 0;
    e.forEach(V.nodes(), function(ee) {
      var Y = V.node(ee);
      Y.borderTop && (Y.minRank = V.node(Y.borderTop).rank, Y.maxRank = V.node(Y.borderBottom).rank, Z = e.max(Z, Y.maxRank));
    }), V.graph().maxRank = Z;
  }
  function Q(V) {
    e.forEach(V.nodes(), function(Z) {
      var ee = V.node(Z);
      ee.dummy === "edge-proxy" && (V.edge(ee.e).labelRank = ee.rank, V.removeNode(Z));
    });
  }
  function L(V) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, Y = Number.POSITIVE_INFINITY, te = 0, se = V.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var _e = pe.x, me = pe.y, Ne = pe.width, Ee = pe.height;
      Z = Math.min(Z, _e - Ne / 2), ee = Math.max(ee, _e + Ne / 2), Y = Math.min(Y, me - Ee / 2), te = Math.max(te, me + Ee / 2);
    }
    e.forEach(V.nodes(), function(pe) {
      de(V.node(pe));
    }), e.forEach(V.edges(), function(pe) {
      var _e = V.edge(pe);
      e.has(_e, "x") && de(_e);
    }), Z -= ae, Y -= ce, e.forEach(V.nodes(), function(pe) {
      var _e = V.node(pe);
      _e.x -= Z, _e.y -= Y;
    }), e.forEach(V.edges(), function(pe) {
      var _e = V.edge(pe);
      e.forEach(_e.points, function(me) {
        me.x -= Z, me.y -= Y;
      }), e.has(_e, "x") && (_e.x -= Z), e.has(_e, "y") && (_e.y -= Y);
    }), se.width = ee - Z + ae, se.height = te - Y + ce;
  }
  function B(V) {
    e.forEach(V.edges(), function(Z) {
      var ee = V.edge(Z), Y = V.node(Z.v), te = V.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = Y), ee.points.unshift(m.intersectRect(Y, se)), ee.points.push(m.intersectRect(te, ae));
    });
  }
  function q(V) {
    e.forEach(V.edges(), function(Z) {
      var ee = V.edge(Z);
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
  function U(V) {
    e.forEach(V.edges(), function(Z) {
      var ee = V.edge(Z);
      ee.reversed && ee.points.reverse();
    });
  }
  function M(V) {
    e.forEach(V.nodes(), function(Z) {
      if (V.children(Z).length) {
        var ee = V.node(Z), Y = V.node(ee.borderTop), te = V.node(ee.borderBottom), se = V.node(e.last(ee.borderLeft)), ae = V.node(e.last(ee.borderRight));
        ee.width = Math.abs(ae.x - se.x), ee.height = Math.abs(te.y - Y.y), ee.x = se.x + ee.width / 2, ee.y = Y.y + ee.height / 2;
      }
    }), e.forEach(V.nodes(), function(Z) {
      V.node(Z).dummy === "border" && V.removeNode(Z);
    });
  }
  function F(V) {
    e.forEach(V.edges(), function(Z) {
      if (Z.v === Z.w) {
        var ee = V.node(Z.v);
        ee.selfEdges || (ee.selfEdges = []), ee.selfEdges.push({ e: Z, label: V.edge(Z) }), V.removeEdge(Z);
      }
    });
  }
  function X(V) {
    var Z = m.buildLayerMatrix(V);
    e.forEach(Z, function(ee) {
      var Y = 0;
      e.forEach(ee, function(te, se) {
        var ae = V.node(te);
        ae.order = se + Y, e.forEach(ae.selfEdges, function(ce) {
          m.addDummyNode(V, "selfedge", {
            width: ce.label.width,
            height: ce.label.height,
            rank: ae.rank,
            order: se + ++Y,
            e: ce.e,
            label: ce.label
          }, "_se");
        }), delete ae.selfEdges;
      });
    });
  }
  function D(V) {
    e.forEach(V.nodes(), function(Z) {
      var ee = V.node(Z);
      if (ee.dummy === "selfedge") {
        var Y = V.node(ee.e.v), te = Y.x + Y.width / 2, se = Y.y, ae = ee.x - te, ce = Y.height / 2;
        V.setEdge(ee.e, ee.label), V.removeNode(Z), ee.label.points = [
          { x: te + 2 * ae / 3, y: se - ce },
          { x: te + 5 * ae / 6, y: se - ce },
          { x: te + ae, y: se },
          { x: te + 5 * ae / 6, y: se + ce },
          { x: te + 2 * ae / 3, y: se + ce }
        ], ee.label.x = ee.x, ee.label.y = ee.y;
      }
    });
  }
  function W(V, Z) {
    return e.mapValues(e.pick(V, Z), Number);
  }
  function ie(V) {
    var Z = {};
    return e.forEach(V, function(ee, Y) {
      Z[Y.toLowerCase()] = ee;
    }), Z;
  }
  return ty;
}
var ny, TR;
function jU() {
  if (TR) return ny;
  TR = 1;
  var e = We(), t = Tt(), n = wn().Graph;
  ny = {
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
  return ny;
}
var ry, IR;
function qU() {
  return IR || (IR = 1, ry = "0.8.5"), ry;
}
var oy, AR;
function FU() {
  return AR || (AR = 1, oy = {
    graphlib: wn(),
    layout: DU(),
    debug: jU(),
    util: {
      time: Tt().time,
      notime: Tt().notime
    },
    version: qU()
  }), oy;
}
var zU = FU();
const MR = /* @__PURE__ */ ku(zU), $U = 250, BU = 200, VU = 120, HU = 180;
function OR(e) {
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
    width: e.width || $U,
    height: Math.max(BU, a)
  };
}
function WU(e, t, n = "TB") {
  const o = new MR.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: VU,
    ranksep: HU
  }), e.forEach((a) => {
    const { width: l, height: u } = OR(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), MR.layout(o), { nodes: e.map((a) => {
    const l = o.node(a.id), { width: u, height: f } = OR(a);
    return {
      ...a,
      position: {
        x: l.x - u / 2,
        y: l.y - f / 2
      }
    };
  }), edges: t };
}
function UU(e, t, n) {
  return { onLayout: k.useCallback(
    (i) => {
      const { nodes: a } = WU(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function GU(e, t, n) {
  return { exportToJSON: k.useCallback(() => {
    const a = JSON.stringify({
      nodes: e,
      edges: t,
      nodeValues: n || {}
    }, null, 2), l = new Blob([a], { type: "application/json" }), u = URL.createObjectURL(l), f = document.createElement("a");
    f.href = u, f.download = "nodeflow-data.json", f.click(), URL.revokeObjectURL(u);
  }, [e, t, n]) };
}
function KU(e, t) {
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
function YU(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), o = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(o), n.body.appendChild(i), t && (o.href = t), i.href = e, i.href;
}
const XU = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Or(e) {
  const t = [];
  for (let n = 0, o = e.length; n < o; n++)
    t.push(e[n]);
  return t;
}
let si = null;
function iM(e = {}) {
  return si || (e.includeStyleProperties ? (si = e.includeStyleProperties, si) : (si = Or(window.getComputedStyle(document.documentElement)), si));
}
function Eu(e, t) {
  const o = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return o ? parseFloat(o.replace("px", "")) : 0;
}
function QU(e) {
  const t = Eu(e, "border-left-width"), n = Eu(e, "border-right-width");
  return e.clientWidth + t + n;
}
function ZU(e) {
  const t = Eu(e, "border-top-width"), n = Eu(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function sM(e, t = {}) {
  const n = t.width || QU(e), o = t.height || ZU(e);
  return { width: n, height: o };
}
function JU() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const qt = 16384;
function eG(e) {
  (e.width > qt || e.height > qt) && (e.width > qt && e.height > qt ? e.width > e.height ? (e.height *= qt / e.width, e.width = qt) : (e.width *= qt / e.height, e.height = qt) : e.width > qt ? (e.height *= qt / e.width, e.width = qt) : (e.width *= qt / e.height, e.height = qt));
}
function Cu(e) {
  return new Promise((t, n) => {
    const o = new Image();
    o.onload = () => {
      o.decode().then(() => {
        requestAnimationFrame(() => t(o));
      });
    }, o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = e;
  });
}
async function tG(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function nG(e, t, n) {
  const o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), tG(i);
}
const It = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || It(n, t);
};
function rG(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function oG(e, t) {
  return iM(t).map((n) => {
    const o = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${o}${i ? " !important" : ""};`;
  }).join(" ");
}
function iG(e, t, n, o) {
  const i = `.${e}:${t}`, a = n.cssText ? rG(n) : oG(n, o);
  return document.createTextNode(`${i}{${a}}`);
}
function LR(e, t, n, o) {
  const i = window.getComputedStyle(e, n), a = i.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const l = XU();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const u = document.createElement("style");
  u.appendChild(iG(l, n, i, o)), t.appendChild(u);
}
function sG(e, t, n) {
  LR(e, t, ":before", n), LR(e, t, ":after", n);
}
const DR = "application/font-woff", jR = "image/jpeg", aG = {
  woff: DR,
  woff2: DR,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: jR,
  jpeg: jR,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function lG(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function H0(e) {
  const t = lG(e).toLowerCase();
  return aG[t] || "";
}
function uG(e) {
  return e.split(/,/)[1];
}
function qy(e) {
  return e.search(/^(data:)/) !== -1;
}
function cG(e, t) {
  return `data:${t};base64,${e}`;
}
async function aM(e, t, n) {
  const o = await fetch(e, t);
  if (o.status === 404)
    throw new Error(`Resource "${o.url}" not found`);
  const i = await o.blob();
  return new Promise((a, l) => {
    const u = new FileReader();
    u.onerror = l, u.onloadend = () => {
      try {
        a(n({ res: o, result: u.result }));
      } catch (f) {
        l(f);
      }
    }, u.readAsDataURL(i);
  });
}
const iy = {};
function fG(e, t, n) {
  let o = e.replace(/\?.*/, "");
  return n && (o = e), /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")), t ? `[${t}]${o}` : o;
}
async function W0(e, t, n) {
  const o = fG(e, t, n.includeQueryParams);
  if (iy[o] != null)
    return iy[o];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const a = await aM(e, n.fetchRequestInit, ({ res: l, result: u }) => (t || (t = l.headers.get("Content-Type") || ""), uG(u)));
    i = cG(a, t);
  } catch (a) {
    i = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    a && (l = typeof a == "string" ? a : a.message), l && console.warn(l);
  }
  return iy[o] = i, i;
}
async function dG(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Cu(t);
}
async function hG(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), l = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, l == null || l.drawImage(e, 0, 0, a.width, a.height);
    const u = a.toDataURL();
    return Cu(u);
  }
  const n = e.poster, o = H0(n), i = await W0(n, o, t);
  return Cu(i);
}
async function pG(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await yc(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function gG(e, t) {
  return It(e, HTMLCanvasElement) ? dG(e) : It(e, HTMLVideoElement) ? hG(e, t) : It(e, HTMLIFrameElement) ? pG(e, t) : e.cloneNode(lM(e));
}
const mG = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", lM = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function vG(e, t, n) {
  var o, i;
  if (lM(t))
    return t;
  let a = [];
  return mG(e) && e.assignedNodes ? a = Or(e.assignedNodes()) : It(e, HTMLIFrameElement) && (!((o = e.contentDocument) === null || o === void 0) && o.body) ? a = Or(e.contentDocument.body.childNodes) : a = Or(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), a.length === 0 || It(e, HTMLVideoElement) || await a.reduce((l, u) => l.then(() => yc(u, n)).then((f) => {
    f && t.appendChild(f);
  }), Promise.resolve()), t;
}
function yG(e, t, n) {
  const o = t.style;
  if (!o)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (o.cssText = i.cssText, o.transformOrigin = i.transformOrigin) : iM(n).forEach((a) => {
    let l = i.getPropertyValue(a);
    a === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), It(e, HTMLIFrameElement) && a === "display" && l === "inline" && (l = "block"), a === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), o.setProperty(a, l, i.getPropertyPriority(a));
  });
}
function wG(e, t) {
  It(e, HTMLTextAreaElement) && (t.innerHTML = e.value), It(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function xG(e, t) {
  if (It(e, HTMLSelectElement)) {
    const o = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    o && o.setAttribute("selected", "");
  }
}
function bG(e, t, n) {
  return It(t, Element) && (yG(e, t, n), sG(e, t, n), wG(e, t), xG(e, t)), t;
}
async function _G(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a].getAttribute("xlink:href");
    if (u) {
      const f = e.querySelector(u), d = document.querySelector(u);
      !f && d && !o[u] && (o[u] = await yc(d, t, !0));
    }
  }
  const i = Object.values(o);
  if (i.length) {
    const a = "http://www.w3.org/1999/xhtml", l = document.createElementNS(a, "svg");
    l.setAttribute("xmlns", a), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const u = document.createElementNS(a, "defs");
    l.appendChild(u);
    for (let f = 0; f < i.length; f++)
      u.appendChild(i[f]);
    e.appendChild(l);
  }
  return e;
}
async function yc(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((o) => gG(o, t)).then((o) => vG(e, o, t)).then((o) => bG(e, o, t)).then((o) => _G(o, t));
}
const uM = /url\((['"]?)([^'"]+?)\1\)/g, SG = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, EG = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function CG(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function kG(e) {
  const t = [];
  return e.replace(uM, (n, o, i) => (t.push(i), n)), t.filter((n) => !qy(n));
}
async function RG(e, t, n, o, i) {
  try {
    const a = n ? YU(t, n) : t, l = H0(t);
    let u;
    return i || (u = await W0(a, l, o)), e.replace(CG(t), `$1${u}$3`);
  } catch {
  }
  return e;
}
function NG(e, { preferredFontFormat: t }) {
  return t ? e.replace(EG, (n) => {
    for (; ; ) {
      const [o, , i] = SG.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${o};`;
    }
  }) : e;
}
function cM(e) {
  return e.search(uM) !== -1;
}
async function fM(e, t, n) {
  if (!cM(e))
    return e;
  const o = NG(e, n);
  return kG(o).reduce((a, l) => a.then((u) => RG(u, l, t, n)), Promise.resolve(o));
}
async function ai(e, t, n) {
  var o;
  const i = (o = t.style) === null || o === void 0 ? void 0 : o.getPropertyValue(e);
  if (i) {
    const a = await fM(i, null, n);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function PG(e, t) {
  await ai("background", e, t) || await ai("background-image", e, t), await ai("mask", e, t) || await ai("-webkit-mask", e, t) || await ai("mask-image", e, t) || await ai("-webkit-mask-image", e, t);
}
async function TG(e, t) {
  const n = It(e, HTMLImageElement);
  if (!(n && !qy(e.src)) && !(It(e, SVGImageElement) && !qy(e.href.baseVal)))
    return;
  const o = n ? e.src : e.href.baseVal, i = await W0(o, H0(o), t);
  await new Promise((a, l) => {
    e.onload = a, e.onerror = t.onImageErrorHandler ? (...f) => {
      try {
        a(t.onImageErrorHandler(...f));
      } catch (d) {
        l(d);
      }
    } : l;
    const u = e;
    u.decode && (u.decode = a), u.loading === "lazy" && (u.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function IG(e, t) {
  const o = Or(e.childNodes).map((i) => dM(i, t));
  await Promise.all(o).then(() => e);
}
async function dM(e, t) {
  It(e, Element) && (await PG(e, t), await TG(e, t), await IG(e, t));
}
function AG(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const o = t.style;
  return o != null && Object.keys(o).forEach((i) => {
    n[i] = o[i];
  }), e;
}
const qR = {};
async function FR(e) {
  let t = qR[e];
  if (t != null)
    return t;
  const o = await (await fetch(e)).text();
  return t = { url: e, cssText: o }, qR[e] = t, t;
}
async function zR(e, t) {
  let n = e.cssText;
  const o = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let u = l.replace(o, "$1");
    return u.startsWith("https://") || (u = new URL(u, e.url).href), aM(u, t.fetchRequestInit, ({ result: f }) => (n = n.replace(l, `url(${f})`), [l, f]));
  });
  return Promise.all(a).then(() => n);
}
function $R(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let o = e.replace(n, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const f = i.exec(o);
    if (f === null)
      break;
    t.push(f[0]);
  }
  o = o.replace(i, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", u = new RegExp(l, "gi");
  for (; ; ) {
    let f = a.exec(o);
    if (f === null) {
      if (f = u.exec(o), f === null)
        break;
      a.lastIndex = u.lastIndex;
    } else
      u.lastIndex = a.lastIndex;
    t.push(f[0]);
  }
  return t;
}
async function MG(e, t) {
  const n = [], o = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Or(i.cssRules || []).forEach((a, l) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let u = l + 1;
            const f = a.href, d = FR(f).then((h) => zR(h, t)).then((h) => $R(h).forEach((p) => {
              try {
                i.insertRule(p, p.startsWith("@import") ? u += 1 : i.cssRules.length);
              } catch (m) {
                console.error("Error inserting rule from remote css", {
                  rule: p,
                  error: m
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            o.push(d);
          }
        });
      } catch (a) {
        const l = e.find((u) => u.href == null) || document.styleSheets[0];
        i.href != null && o.push(FR(i.href).then((u) => zR(u, t)).then((u) => $R(u).forEach((f) => {
          l.insertRule(f, l.cssRules.length);
        })).catch((u) => {
          console.error("Error loading remote stylesheet", u);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(o).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Or(i.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${i.href}`, a);
      }
  }), n));
}
function OG(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => cM(t.style.getPropertyValue("src")));
}
async function LG(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Or(e.ownerDocument.styleSheets), o = await MG(n, t);
  return OG(o);
}
function hM(e) {
  return e.trim().replace(/["']/g, "");
}
function DG(e) {
  const t = /* @__PURE__ */ new Set();
  function n(o) {
    (o.style.fontFamily || getComputedStyle(o).fontFamily).split(",").forEach((a) => {
      t.add(hM(a));
    }), Array.from(o.children).forEach((a) => {
      a instanceof HTMLElement && n(a);
    });
  }
  return n(e), t;
}
async function jG(e, t) {
  const n = await LG(e, t), o = DG(e);
  return (await Promise.all(n.filter((a) => o.has(hM(a.style.fontFamily))).map((a) => {
    const l = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return fM(a.cssText, l, t);
  }))).join(`
`);
}
async function qG(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await jG(e, t);
  if (n) {
    const o = document.createElement("style"), i = document.createTextNode(n);
    o.appendChild(i), e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o);
  }
}
async function FG(e, t = {}) {
  const { width: n, height: o } = sM(e, t), i = await yc(e, t, !0);
  return await qG(i, t), await dM(i, t), AG(i, t), await nG(i, n, o);
}
async function pM(e, t = {}) {
  const { width: n, height: o } = sM(e, t), i = await FG(e, t), a = await Cu(i), l = document.createElement("canvas"), u = l.getContext("2d"), f = t.pixelRatio || JU(), d = t.canvasWidth || n, h = t.canvasHeight || o;
  return l.width = d * f, l.height = h * f, t.skipAutoScale || eG(l), l.style.width = `${d}`, l.style.height = `${h}`, t.backgroundColor && (u.fillStyle = t.backgroundColor, u.fillRect(0, 0, l.width, l.height)), u.drawImage(a, 0, 0, l.width, l.height), l;
}
async function BR(e, t = {}) {
  return (await pM(e, t)).toDataURL();
}
async function zG(e, t = {}) {
  return (await pM(e, t)).toDataURL("image/jpeg", t.quality || 1);
}
function $G(e, t, n) {
  const o = ft.useRef(0);
  k.useEffect(() => {
    (Array.isArray(e) ? e : e ? [e] : []).forEach((a) => {
      if (!(a != null && a.exportId) || a.exportId <= o.current)
        return;
      o.current = a.exportId;
      const l = (f) => {
        let d = null;
        if (t != null && t.current) {
          const v = t.current.querySelector(".react-flow");
          v ? d = v : (t.current.classList.contains("react-flow"), d = t.current);
        }
        if (d || (d = document.querySelector(".react-flow")), !d) {
          const v = document.querySelector(".react-flow__viewport");
          if (v) {
            let S = v.parentElement;
            for (; S; ) {
              if (S.classList.contains("react-flow") || S.style.width === "100%") {
                d = S;
                break;
              }
              if (S = S.parentElement, !S || S.tagName === "BODY") break;
            }
          }
        }
        if (!d) {
          const v = document.querySelectorAll("div");
          for (let S = 0; S < v.length; S++) {
            const y = v[S];
            if (y.querySelector(".react-flow__viewport")) {
              d = y;
              break;
            }
          }
        }
        if (!d && f > 0) {
          setTimeout(() => l(f - 1), 500);
          return;
        }
        if (!d) {
          console.error("ReactFlow container not found. Make sure the widget is displayed in the browser.");
          return;
        }
        const h = {
          cacheBust: !0,
          pixelRatio: a.pixelRatio || 2,
          quality: a.quality || 1,
          // Filter out UI controls and panels from the export
          filter: (v) => ![
            "react-flow__controls",
            "react-flow__panel",
            "react-flow__attribution",
            "react-flow__minimap"
          ].some(
            (y) => {
              var x;
              return (x = v.classList) == null ? void 0 : x.contains(y);
            }
          )
        };
        ({
          jpeg: zG,
          png: BR
        }[a.format] || BR)(d, h).then((v) => {
          if (a.saveToFile && n) {
            const S = `${v}|exportId=${a.exportId}`;
            n(S);
          }
          if (a.browserDownload) {
            const S = document.createElement("a");
            S.download = a.filename, S.href = v, S.click(), console.log(`✓ Browser download triggered - check your browser's download folder for ${a.filename}`);
          }
          a.saveToFile && !a.browserDownload && console.log(`✓ Image data sent to Python for saving to ${a.filename}`);
        }).catch((v) => {
          console.error("Image export failed:", v);
        });
      }, u = setTimeout(() => l(5), 300);
      return () => clearTimeout(u);
    });
  }, [e]);
}
const UG = ZV;
function BG() {
  const [e, t] = oo("nodes"), [n, o] = oo("edges"), [i] = oo("node_templates"), [a] = oo("height"), [l, u] = oo("node_values"), [f] = oo("_export_image_trigger"), [, d] = oo("_export_image_data"), h = k.useRef(null), p = k.useMemo(() => Object.values(e || {}), [e]), m = k.useMemo(() => {
    const B = /* @__PURE__ */ new Map();
    return i.forEach((q) => {
      B.set(q.type, q);
    }), B;
  }, [i]), v = k.useMemo(() => !l || Object.keys(l).length === 0 ? p : p.map((B) => {
    const q = m.get(B.type), U = l[B.id] || {};
    return q ? {
      ...B,
      data: {
        ...B.data,
        label: q.label,
        // Template label
        ...q.definition,
        // Visual structure (grid, style)
        values: U
        // Instance values (from node_values)
      }
    } : (console.warn(`Template not found for node type: ${B.type}`), B);
  }), [p, m, l]), S = k.useCallback(
    (B) => {
      t((q) => {
        const U = Object.values(q), M = rP(B, U), F = {};
        return M.forEach((X) => {
          F[X.id] = X;
        }), F;
      });
    },
    [t]
  ), y = k.useCallback(
    (B) => {
      o((q) => oP(B, q));
    },
    [o]
  ), x = k.useMemo(() => eH(i), [i]), b = k.useCallback(
    (B) => {
      o((q) => qN(B, q));
    },
    [o]
  ), C = k.useMemo(
    () => e$(i),
    [i]
  ), _ = k.useCallback(
    (B) => t$(e, C)(B),
    [e, C]
  ), R = k.useCallback(
    (B) => {
      const q = `node-${Date.now()}`, U = {
        id: q,
        type: B.type,
        position: { x: 100, y: 100 },
        data: {}
        // Empty data - all config in template
      };
      t((M) => ({
        ...M,
        [q]: U
      })), B.defaultValues && Object.keys(B.defaultValues).length > 0 && u((M) => ({
        ...M,
        [q]: { ...B.defaultValues }
      }));
    },
    [t, u]
  ), { exportToJSON: P } = GU(p, n, l), T = k.useCallback((B) => {
    d(B);
  }, [d]);
  $G(f, h, T);
  const A = k.useCallback((B) => {
    t((q) => {
      const U = Object.values(q), M = typeof B == "function" ? B(U) : B, F = {};
      return M.forEach((X) => {
        F[X.id] = X;
      }), F;
    });
  }, [t]), { onLayout: O } = UU(p, n, A), {
    contextMenu: j,
    onNodeContextMenu: G,
    onEdgeContextMenu: z,
    onPaneClick: H,
    onDelete: Q,
    closeContextMenu: L
  } = KU(A, o);
  return /* @__PURE__ */ N.jsx("div", { ref: h, style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ N.jsx(AI.Provider, { value: t, children: /* @__PURE__ */ N.jsx(MI.Provider, { value: u, children: /* @__PURE__ */ N.jsx(PP, { children: /* @__PURE__ */ N.jsxs(c8, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ N.jsxs(f8, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ N.jsxs(h8, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ N.jsx(d8, {})
      ] }),
      /* @__PURE__ */ N.jsx(b8, { onAddNode: R, templates: i })
    ] }),
    /* @__PURE__ */ N.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ N.jsx(
      E8,
      {
        nodes: v,
        edges: n,
        nodeTypes: x,
        height: a,
        onNodesChange: S,
        onEdgesChange: y,
        onConnect: b,
        isValidConnection: _,
        onNodeContextMenu: G,
        onEdgeContextMenu: z,
        onPaneClick: H,
        contextMenu: j,
        onDelete: Q,
        onCloseContextMenu: L,
        onExport: P,
        onLayoutVertical: () => O("TB"),
        onLayoutHorizontal: () => O("LR")
      }
    ) })
  ] }) }) }) }) });
}
const VG = aO(BG), GG = { render: VG };
export {
  Fu as BaseHandle,
  KP as ButtonHandle,
  KV as EntryGroupComponent,
  GP as LabeledHandle,
  w0 as NodeComponentBuilder,
  r0 as NodeDataContext,
  MI as SetNodeValuesContext,
  AI as SetNodesDictContext,
  eH as buildNodeTypes,
  GG as default,
  VG as render,
  xo as useNodeDataContext,
  JV as useSetNodeValues,
  UG as useSetNodes,
  ZV as useSetNodesDict
};
//# sourceMappingURL=index.js.map
