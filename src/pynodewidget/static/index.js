var $2 = Object.defineProperty;
var B2 = (e, t, n) => t in e ? $2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Cl = (e, t, n) => B2(e, typeof t != "symbol" ? t + "" : t, n);
function V2(e, t) {
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
var kl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Eu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ud = { exports: {} }, _s = {}, cd = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function H2() {
  if (ib) return Ie;
  ib = 1;
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
  function x(D, U, ie) {
    this.props = D, this.context = U, this.refs = y, this.updater = ie || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(D, U) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, U, "setState");
  }, x.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function _() {
  }
  _.prototype = x.prototype;
  function C(D, U, ie) {
    this.props = D, this.context = U, this.refs = y, this.updater = ie || v;
  }
  var b = C.prototype = new _();
  b.constructor = C, S(b, x.prototype), b.isPureReactComponent = !0;
  var R = Array.isArray, P = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(D, U, ie) {
    var B, Z = {}, ee = null, X = null;
    if (U != null) for (B in U.ref !== void 0 && (X = U.ref), U.key !== void 0 && (ee = "" + U.key), U) P.call(U, B) && !A.hasOwnProperty(B) && (Z[B] = U[B]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (D && D.defaultProps) for (B in te = D.defaultProps, te) Z[B] === void 0 && (Z[B] = te[B]);
    return { $$typeof: e, type: D, key: ee, ref: X, props: Z, _owner: T.current };
  }
  function j(D, U) {
    return { $$typeof: e, type: D.type, key: U, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function Y(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function $(D) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(ie) {
      return U[ie];
    });
  }
  var V = /\/+/g;
  function W(D, U) {
    return typeof D == "object" && D !== null && D.key != null ? $("" + D.key) : U.toString(36);
  }
  function L(D, U, ie, B, Z) {
    var ee = typeof D;
    (ee === "undefined" || ee === "boolean") && (D = null);
    var X = !1;
    if (D === null) X = !0;
    else switch (ee) {
      case "string":
      case "number":
        X = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case e:
          case t:
            X = !0;
        }
    }
    if (X) return X = D, Z = Z(X), D = B === "" ? "." + W(X, 0) : B, R(Z) ? (ie = "", D != null && (ie = D.replace(V, "$&/") + "/"), L(Z, U, ie, "", function(ae) {
      return ae;
    })) : Z != null && (Y(Z) && (Z = j(Z, ie + (!Z.key || X && X.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + D)), U.push(Z)), 1;
    if (X = 0, B = B === "" ? "." : B + ":", R(D)) for (var te = 0; te < D.length; te++) {
      ee = D[te];
      var se = B + W(ee, te);
      X += L(ee, U, ie, se, Z);
    }
    else if (se = m(D), typeof se == "function") for (D = se.call(D), te = 0; !(ee = D.next()).done; ) ee = ee.value, se = B + W(ee, te++), X += L(ee, U, ie, se, Z);
    else if (ee === "object") throw U = String(D), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return X;
  }
  function H(D, U, ie) {
    if (D == null) return D;
    var B = [], Z = 0;
    return L(D, B, "", "", function(ee) {
      return U.call(ie, ee, Z++);
    }), B;
  }
  function q(D) {
    if (D._status === -1) {
      var U = D._result;
      U = U(), U.then(function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = ie);
      }, function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = ie);
      }), D._status === -1 && (D._status = 0, D._result = U);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var G = { current: null }, M = { transition: null }, F = { ReactCurrentDispatcher: G, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: H, forEach: function(D, U, ie) {
    H(D, function() {
      U.apply(this, arguments);
    }, ie);
  }, count: function(D) {
    var U = 0;
    return H(D, function() {
      U++;
    }), U;
  }, toArray: function(D) {
    return H(D, function(U) {
      return U;
    }) || [];
  }, only: function(D) {
    if (!Y(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ie.Component = x, Ie.Fragment = n, Ie.Profiler = i, Ie.PureComponent = C, Ie.StrictMode = o, Ie.Suspense = f, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, Ie.act = Q, Ie.cloneElement = function(D, U, ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var B = S({}, D.props), Z = D.key, ee = D.ref, X = D._owner;
    if (U != null) {
      if (U.ref !== void 0 && (ee = U.ref, X = T.current), U.key !== void 0 && (Z = "" + U.key), D.type && D.type.defaultProps) var te = D.type.defaultProps;
      for (se in U) P.call(U, se) && !A.hasOwnProperty(se) && (B[se] = U[se] === void 0 && te !== void 0 ? te[se] : U[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) B.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      B.children = te;
    }
    return { $$typeof: e, type: D.type, key: Z, ref: ee, props: B, _owner: X };
  }, Ie.createContext = function(D) {
    return D = { $$typeof: l, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: a, _context: D }, D.Consumer = D;
  }, Ie.createElement = O, Ie.createFactory = function(D) {
    var U = O.bind(null, D);
    return U.type = D, U;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(D) {
    return { $$typeof: u, render: D };
  }, Ie.isValidElement = Y, Ie.lazy = function(D) {
    return { $$typeof: h, _payload: { _status: -1, _result: D }, _init: q };
  }, Ie.memo = function(D, U) {
    return { $$typeof: d, type: D, compare: U === void 0 ? null : U };
  }, Ie.startTransition = function(D) {
    var U = M.transition;
    M.transition = {};
    try {
      D();
    } finally {
      M.transition = U;
    }
  }, Ie.unstable_act = Q, Ie.useCallback = function(D, U) {
    return G.current.useCallback(D, U);
  }, Ie.useContext = function(D) {
    return G.current.useContext(D);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(D) {
    return G.current.useDeferredValue(D);
  }, Ie.useEffect = function(D, U) {
    return G.current.useEffect(D, U);
  }, Ie.useId = function() {
    return G.current.useId();
  }, Ie.useImperativeHandle = function(D, U, ie) {
    return G.current.useImperativeHandle(D, U, ie);
  }, Ie.useInsertionEffect = function(D, U) {
    return G.current.useInsertionEffect(D, U);
  }, Ie.useLayoutEffect = function(D, U) {
    return G.current.useLayoutEffect(D, U);
  }, Ie.useMemo = function(D, U) {
    return G.current.useMemo(D, U);
  }, Ie.useReducer = function(D, U, ie) {
    return G.current.useReducer(D, U, ie);
  }, Ie.useRef = function(D) {
    return G.current.useRef(D);
  }, Ie.useState = function(D) {
    return G.current.useState(D);
  }, Ie.useSyncExternalStore = function(D, U, ie) {
    return G.current.useSyncExternalStore(D, U, ie);
  }, Ie.useTransition = function() {
    return G.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var sb;
function Ks() {
  return sb || (sb = 1, cd.exports = H2()), cd.exports;
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
var ab;
function W2() {
  if (ab) return _s;
  ab = 1;
  var e = Ks(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return _s.Fragment = n, _s.jsx = l, _s.jsxs = l, _s;
}
var lb;
function U2() {
  return lb || (lb = 1, ud.exports = W2()), ud.exports;
}
var N = U2(), k = Ks();
const qt = /* @__PURE__ */ Eu(k), Iy = /* @__PURE__ */ V2({
  __proto__: null,
  default: qt
}, [k]);
var Rl = {}, fd = { exports: {} }, Rt = {}, dd = { exports: {} }, hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ub;
function G2() {
  return ub || (ub = 1, (function(e) {
    function t(M, F) {
      var Q = M.length;
      M.push(F);
      e: for (; 0 < Q; ) {
        var D = Q - 1 >>> 1, U = M[D];
        if (0 < i(U, F)) M[D] = F, M[Q] = U, Q = D;
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var F = M[0], Q = M.pop();
      if (Q !== F) {
        M[0] = Q;
        e: for (var D = 0, U = M.length, ie = U >>> 1; D < ie; ) {
          var B = 2 * (D + 1) - 1, Z = M[B], ee = B + 1, X = M[ee];
          if (0 > i(Z, Q)) ee < U && 0 > i(X, Z) ? (M[D] = X, M[ee] = Q, D = ee) : (M[D] = Z, M[B] = Q, D = B);
          else if (ee < U && 0 > i(X, Q)) M[D] = X, M[ee] = Q, D = ee;
          else break e;
        }
      }
      return F;
    }
    function i(M, F) {
      var Q = M.sortIndex - F.sortIndex;
      return Q !== 0 ? Q : M.id - F.id;
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
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, S = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(M) {
      for (var F = n(d); F !== null; ) {
        if (F.callback === null) o(d);
        else if (F.startTime <= M) o(d), F.sortIndex = F.expirationTime, t(f, F);
        else break;
        F = n(d);
      }
    }
    function R(M) {
      if (y = !1, b(M), !S) if (n(f) !== null) S = !0, q(P);
      else {
        var F = n(d);
        F !== null && G(R, F.startTime - M);
      }
    }
    function P(M, F) {
      S = !1, y && (y = !1, _(O), O = -1), v = !0;
      var Q = m;
      try {
        for (b(F), p = n(f); p !== null && (!(p.expirationTime > F) || M && !$()); ) {
          var D = p.callback;
          if (typeof D == "function") {
            p.callback = null, m = p.priorityLevel;
            var U = D(p.expirationTime <= F);
            F = e.unstable_now(), typeof U == "function" ? p.callback = U : p === n(f) && o(f), b(F);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var B = n(d);
          B !== null && G(R, B.startTime - F), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, v = !1;
      }
    }
    var T = !1, A = null, O = -1, j = 5, Y = -1;
    function $() {
      return !(e.unstable_now() - Y < j);
    }
    function V() {
      if (A !== null) {
        var M = e.unstable_now();
        Y = M;
        var F = !0;
        try {
          F = A(!0, M);
        } finally {
          F ? W() : (T = !1, A = null);
        }
      } else T = !1;
    }
    var W;
    if (typeof C == "function") W = function() {
      C(V);
    };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), H = L.port2;
      L.port1.onmessage = V, W = function() {
        H.postMessage(null);
      };
    } else W = function() {
      x(V, 0);
    };
    function q(M) {
      A = M, T || (T = !0, W());
    }
    function G(M, F) {
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
      var Q = m;
      m = F;
      try {
        return M();
      } finally {
        m = Q;
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
      var Q = m;
      m = M;
      try {
        return F();
      } finally {
        m = Q;
      }
    }, e.unstable_scheduleCallback = function(M, F, Q) {
      var D = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? D + Q : D) : Q = D, M) {
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
      return U = Q + U, M = { id: h++, callback: F, priorityLevel: M, startTime: Q, expirationTime: U, sortIndex: -1 }, Q > D ? (M.sortIndex = Q, t(d, M), n(f) === null && M === n(d) && (y ? (_(O), O = -1) : y = !0, G(R, Q - D))) : (M.sortIndex = U, t(f, M), S || v || (S = !0, q(P))), M;
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
      var F = m;
      return function() {
        var Q = m;
        m = F;
        try {
          return M.apply(this, arguments);
        } finally {
          m = Q;
        }
      };
    };
  })(hd)), hd;
}
var cb;
function Y2() {
  return cb || (cb = 1, dd.exports = G2()), dd.exports;
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
var fb;
function K2() {
  if (fb) return Rt;
  fb = 1;
  var e = Ks(), t = Y2();
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
  var _ = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var s = r.replace(
      _,
      C
    );
    x[s] = new y(s, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var s = r.replace(_, C);
    x[s] = new y(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var s = r.replace(_, C);
    x[s] = new y(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  function b(r, s, c, g) {
    var w = x.hasOwnProperty(s) ? x[s] : null;
    (w !== null ? w.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (S(s, c, w, g) && (c = null), g || w === null ? m(s) && (c === null ? r.removeAttribute(s) : r.setAttribute(s, "" + c)) : w.mustUseProperty ? r[w.propertyName] = c === null ? w.type === 3 ? !1 : "" : c : (s = w.attributeName, g = w.attributeNamespace, c === null ? r.removeAttribute(s) : (w = w.type, c = w === 3 || w === 4 && c === !0 ? "" : "" + c, g ? r.setAttributeNS(g, s, c) : r.setAttribute(s, c))));
  }
  var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), $ = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function F(r) {
    return r === null || typeof r != "object" ? null : (r = M && r[M] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = Object.assign, D;
  function U(r) {
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
  function B(r, s) {
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
`), I = w.length - 1, z = E.length - 1; 1 <= I && 0 <= z && w[I] !== E[z]; ) z--;
        for (; 1 <= I && 0 <= z; I--, z--) if (w[I] !== E[z]) {
          if (I !== 1 || z !== 1)
            do
              if (I--, z--, 0 > z || w[I] !== E[z]) {
                var K = `
` + w[I].replace(" at new ", " at ");
                return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
              }
            while (1 <= I && 0 <= z);
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
        return r = B(r.type, !1), r;
      case 11:
        return r = B(r.type.render, !1), r;
      case 1:
        return r = B(r.type, !0), r;
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
      case W:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case $:
        return (r.displayName || "Context") + ".Consumer";
      case Y:
        return (r._context.displayName || "Context") + ".Provider";
      case V:
        var s = r.render;
        return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case H:
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
  function X(r) {
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
    return Q({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? r._wrapperState.initialChecked });
  }
  function me(r, s) {
    var c = s.defaultValue == null ? "" : s.defaultValue, g = s.checked != null ? s.checked : s.defaultChecked;
    c = te(s.value != null ? s.value : c), r._wrapperState = { initialChecked: g, initialValue: c, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
  }
  function Ne(r, s) {
    s = s.checked, s != null && b(r, "checked", s, !1);
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
  function ht(r, s, c, g) {
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
    return Q({}, s, { value: void 0, defaultValue: void 0, children: "" + r._wrapperState.initialValue });
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
  var bt, Fr = (function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, c, g, w) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(s, c, g, w);
      });
    } : r;
  })(function(r, s) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = s;
    else {
      for (bt = bt || document.createElement("div"), bt.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = bt.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
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
  }, Eo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zn).forEach(function(r) {
    Eo.forEach(function(s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1), zn[s] = zn[r];
    });
  });
  function It(r, s, c) {
    return s == null || typeof s == "boolean" || s === "" ? "" : c || typeof s != "number" || s === 0 || zn.hasOwnProperty(r) && zn[r] ? ("" + s).trim() : s + "px";
  }
  function Gt(r, s) {
    r = r.style;
    for (var c in s) if (s.hasOwnProperty(c)) {
      var g = c.indexOf("--") === 0, w = It(c, s[c], g);
      c === "float" && (c = "cssFloat"), g ? r.setProperty(c, w) : r[c] = w;
    }
  }
  var mc = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mi(r, s) {
    if (s) {
      if (mc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function Oi(r, s) {
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
  var Li = null;
  function Di(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var ji = null, ir = null, sr = null;
  function fa(r) {
    if (r = as(r)) {
      if (typeof ji != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = za(s), ji(r.stateNode, r.type, s));
    }
  }
  function da(r) {
    ir ? sr ? sr.push(r) : sr = [r] : ir = r;
  }
  function ha() {
    if (ir) {
      var r = ir, s = sr;
      if (sr = ir = null, fa(r), s) for (r = 0; r < s.length; r++) fa(s[r]);
    }
  }
  function pa(r, s) {
    return r(s);
  }
  function ga() {
  }
  var qi = !1;
  function ma(r, s, c) {
    if (qi) return r(s, c);
    qi = !0;
    try {
      return pa(r, s, c);
    } finally {
      qi = !1, (ir !== null || sr !== null) && (ga(), ha());
    }
  }
  function zr(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = za(c);
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
  var Fi = !1;
  if (u) try {
    var $r = {};
    Object.defineProperty($r, "passive", { get: function() {
      Fi = !0;
    } }), window.addEventListener("test", $r, $r), window.removeEventListener("test", $r, $r);
  } catch {
    Fi = !1;
  }
  function vc(r, s, c, g, w, E, I, z, K) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Br = !1, Co = null, ko = !1, zi = null, yc = { onError: function(r) {
    Br = !0, Co = r;
  } };
  function wc(r, s, c, g, w, E, I, z, K) {
    Br = !1, Co = null, vc.apply(yc, arguments);
  }
  function xc(r, s, c, g, w, E, I, z, K) {
    if (wc.apply(this, arguments), Br) {
      if (Br) {
        var oe = Co;
        Br = !1, Co = null;
      } else throw Error(n(198));
      ko || (ko = !0, zi = oe);
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
  function $i(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (s === null && (r = r.alternate, r !== null && (s = r.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function Bi(r) {
    if (Sn(r) !== r) throw Error(n(188));
  }
  function bc(r) {
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
          if (E === c) return Bi(w), r;
          if (E === g) return Bi(w), s;
          E = E.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== g.return) c = w, g = E;
      else {
        for (var I = !1, z = w.child; z; ) {
          if (z === c) {
            I = !0, c = w, g = E;
            break;
          }
          if (z === g) {
            I = !0, g = w, c = E;
            break;
          }
          z = z.sibling;
        }
        if (!I) {
          for (z = E.child; z; ) {
            if (z === c) {
              I = !0, c = E, g = w;
              break;
            }
            if (z === g) {
              I = !0, g = E, c = w;
              break;
            }
            z = z.sibling;
          }
          if (!I) throw Error(n(189));
        }
      }
      if (c.alternate !== g) throw Error(n(190));
    }
    if (c.tag !== 3) throw Error(n(188));
    return c.stateNode.current === c ? r : s;
  }
  function va(r) {
    return r = bc(r), r !== null ? ya(r) : null;
  }
  function ya(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = ya(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var wa = t.unstable_scheduleCallback, xa = t.unstable_cancelCallback, _c = t.unstable_shouldYield, ba = t.unstable_requestPaint, Ye = t.unstable_now, Sc = t.unstable_getCurrentPriorityLevel, Vi = t.unstable_ImmediatePriority, _a = t.unstable_UserBlockingPriority, Ro = t.unstable_NormalPriority, Ec = t.unstable_LowPriority, Sa = t.unstable_IdlePriority, Vr = null, Yt = null;
  function Cc(r) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Vr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Nc, kc = Math.log, Rc = Math.LN2;
  function Nc(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (kc(r) / Rc | 0) | 0;
  }
  var No = 64, Po = 4194304;
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
  function To(r, s) {
    var c = r.pendingLanes;
    if (c === 0) return 0;
    var g = 0, w = r.suspendedLanes, E = r.pingedLanes, I = c & 268435455;
    if (I !== 0) {
      var z = I & ~w;
      z !== 0 ? g = En(z) : (E &= I, E !== 0 && (g = En(E)));
    } else I = c & ~w, I !== 0 ? g = En(I) : E !== 0 && (g = En(E));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & w) === 0 && (w = g & -g, E = s & -s, w >= E || w === 16 && (E & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - At(s), w = 1 << c, g |= r[c], s &= ~w;
    return g;
  }
  function Pc(r, s) {
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
  function Tc(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, w = r.expirationTimes, E = r.pendingLanes; 0 < E; ) {
      var I = 31 - At(E), z = 1 << I, K = w[I];
      K === -1 ? ((z & c) === 0 || (z & g) !== 0) && (w[I] = Pc(z, s)) : K <= s && (r.expiredLanes |= z), E &= ~z;
    }
  }
  function Hr(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function Ea() {
    var r = No;
    return No <<= 1, (No & 4194240) === 0 && (No = 64), r;
  }
  function Hi(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function ar(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - At(s), r[s] = c;
  }
  function lM(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var w = 31 - At(c), E = 1 << w;
      s[w] = 0, g[w] = -1, r[w] = -1, c &= ~E;
    }
  }
  function Ic(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - At(c), w = 1 << g;
      w & s | r[g] & s && (r[g] |= s), c &= ~w;
    }
  }
  var qe = 0;
  function j0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var q0, Ac, F0, z0, $0, Mc = !1, Ca = [], lr = null, ur = null, cr = null, Wi = /* @__PURE__ */ new Map(), Ui = /* @__PURE__ */ new Map(), fr = [], uM = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function B0(r, s) {
    switch (r) {
      case "focusin":
      case "focusout":
        lr = null;
        break;
      case "dragenter":
      case "dragleave":
        ur = null;
        break;
      case "mouseover":
      case "mouseout":
        cr = null;
        break;
      case "pointerover":
      case "pointerout":
        Wi.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ui.delete(s.pointerId);
    }
  }
  function Gi(r, s, c, g, w, E) {
    return r === null || r.nativeEvent !== E ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: E, targetContainers: [w] }, s !== null && (s = as(s), s !== null && Ac(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, w !== null && s.indexOf(w) === -1 && s.push(w), r);
  }
  function cM(r, s, c, g, w) {
    switch (s) {
      case "focusin":
        return lr = Gi(lr, r, s, c, g, w), !0;
      case "dragenter":
        return ur = Gi(ur, r, s, c, g, w), !0;
      case "mouseover":
        return cr = Gi(cr, r, s, c, g, w), !0;
      case "pointerover":
        var E = w.pointerId;
        return Wi.set(E, Gi(Wi.get(E) || null, r, s, c, g, w)), !0;
      case "gotpointercapture":
        return E = w.pointerId, Ui.set(E, Gi(Ui.get(E) || null, r, s, c, g, w)), !0;
    }
    return !1;
  }
  function V0(r) {
    var s = Wr(r.target);
    if (s !== null) {
      var c = Sn(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = $i(c), s !== null) {
            r.blockedOn = s, $0(r.priority, function() {
              F0(c);
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
  function ka(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var c = Lc(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        Li = g, c.target.dispatchEvent(g), Li = null;
      } else return s = as(c), s !== null && Ac(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function H0(r, s, c) {
    ka(r) && c.delete(s);
  }
  function fM() {
    Mc = !1, lr !== null && ka(lr) && (lr = null), ur !== null && ka(ur) && (ur = null), cr !== null && ka(cr) && (cr = null), Wi.forEach(H0), Ui.forEach(H0);
  }
  function Yi(r, s) {
    r.blockedOn === s && (r.blockedOn = null, Mc || (Mc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, fM)));
  }
  function Ki(r) {
    function s(w) {
      return Yi(w, r);
    }
    if (0 < Ca.length) {
      Yi(Ca[0], r);
      for (var c = 1; c < Ca.length; c++) {
        var g = Ca[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (lr !== null && Yi(lr, r), ur !== null && Yi(ur, r), cr !== null && Yi(cr, r), Wi.forEach(s), Ui.forEach(s), c = 0; c < fr.length; c++) g = fr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < fr.length && (c = fr[0], c.blockedOn === null); ) V0(c), c.blockedOn === null && fr.shift();
  }
  var Io = R.ReactCurrentBatchConfig, Ra = !0;
  function dM(r, s, c, g) {
    var w = qe, E = Io.transition;
    Io.transition = null;
    try {
      qe = 1, Oc(r, s, c, g);
    } finally {
      qe = w, Io.transition = E;
    }
  }
  function hM(r, s, c, g) {
    var w = qe, E = Io.transition;
    Io.transition = null;
    try {
      qe = 4, Oc(r, s, c, g);
    } finally {
      qe = w, Io.transition = E;
    }
  }
  function Oc(r, s, c, g) {
    if (Ra) {
      var w = Lc(r, s, c, g);
      if (w === null) Zc(r, s, g, Na, c), B0(r, g);
      else if (cM(w, r, s, c, g)) g.stopPropagation();
      else if (B0(r, g), s & 4 && -1 < uM.indexOf(r)) {
        for (; w !== null; ) {
          var E = as(w);
          if (E !== null && q0(E), E = Lc(r, s, c, g), E === null && Zc(r, s, g, Na, c), E === w) break;
          w = E;
        }
        w !== null && g.stopPropagation();
      } else Zc(r, s, g, null, c);
    }
  }
  var Na = null;
  function Lc(r, s, c, g) {
    if (Na = null, r = Di(g), r = Wr(r), r !== null) if (s = Sn(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = $i(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return Na = r, null;
  }
  function W0(r) {
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
        switch (Sc()) {
          case Vi:
            return 1;
          case _a:
            return 4;
          case Ro:
          case Ec:
            return 16;
          case Sa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dr = null, Dc = null, Pa = null;
  function U0() {
    if (Pa) return Pa;
    var r, s = Dc, c = s.length, g, w = "value" in dr ? dr.value : dr.textContent, E = w.length;
    for (r = 0; r < c && s[r] === w[r]; r++) ;
    var I = c - r;
    for (g = 1; g <= I && s[c - g] === w[E - g]; g++) ;
    return Pa = w.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Ta(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Ia() {
    return !0;
  }
  function G0() {
    return !1;
  }
  function Mt(r) {
    function s(c, g, w, E, I) {
      this._reactName = c, this._targetInst = w, this.type = g, this.nativeEvent = E, this.target = I, this.currentTarget = null;
      for (var z in r) r.hasOwnProperty(z) && (c = r[z], this[z] = c ? c(E) : E[z]);
      return this.isDefaultPrevented = (E.defaultPrevented != null ? E.defaultPrevented : E.returnValue === !1) ? Ia : G0, this.isPropagationStopped = G0, this;
    }
    return Q(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Ia);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Ia);
    }, persist: function() {
    }, isPersistent: Ia }), s;
  }
  var Ao = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, jc = Mt(Ao), Xi = Q({}, Ao, { view: 0, detail: 0 }), pM = Mt(Xi), qc, Fc, Qi, Aa = Q({}, Xi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $c, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Qi && (Qi && r.type === "mousemove" ? (qc = r.screenX - Qi.screenX, Fc = r.screenY - Qi.screenY) : Fc = qc = 0, Qi = r), qc);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : Fc;
  } }), Y0 = Mt(Aa), gM = Q({}, Aa, { dataTransfer: 0 }), mM = Mt(gM), vM = Q({}, Xi, { relatedTarget: 0 }), zc = Mt(vM), yM = Q({}, Ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wM = Mt(yM), xM = Q({}, Ao, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), bM = Mt(xM), _M = Q({}, Ao, { data: 0 }), K0 = Mt(_M), SM = {
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
  }, EM = {
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
  }, CM = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kM(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = CM[r]) ? !!s[r] : !1;
  }
  function $c() {
    return kM;
  }
  var RM = Q({}, Xi, { key: function(r) {
    if (r.key) {
      var s = SM[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Ta(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? EM[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $c, charCode: function(r) {
    return r.type === "keypress" ? Ta(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Ta(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), NM = Mt(RM), PM = Q({}, Aa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), X0 = Mt(PM), TM = Q({}, Xi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $c }), IM = Mt(TM), AM = Q({}, Ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), MM = Mt(AM), OM = Q({}, Aa, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), LM = Mt(OM), DM = [9, 13, 27, 32], Bc = u && "CompositionEvent" in window, Zi = null;
  u && "documentMode" in document && (Zi = document.documentMode);
  var jM = u && "TextEvent" in window && !Zi, Q0 = u && (!Bc || Zi && 8 < Zi && 11 >= Zi), Z0 = " ", J0 = !1;
  function ew(r, s) {
    switch (r) {
      case "keyup":
        return DM.indexOf(s.keyCode) !== -1;
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
  function tw(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Mo = !1;
  function qM(r, s) {
    switch (r) {
      case "compositionend":
        return tw(s);
      case "keypress":
        return s.which !== 32 ? null : (J0 = !0, Z0);
      case "textInput":
        return r = s.data, r === Z0 && J0 ? null : r;
      default:
        return null;
    }
  }
  function FM(r, s) {
    if (Mo) return r === "compositionend" || !Bc && ew(r, s) ? (r = U0(), Pa = Dc = dr = null, Mo = !1, r) : null;
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
        return Q0 && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var zM = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nw(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!zM[r.type] : s === "textarea";
  }
  function rw(r, s, c, g) {
    da(g), s = ja(s, "onChange"), 0 < s.length && (c = new jc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var Ji = null, es = null;
  function $M(r) {
    bw(r, 0);
  }
  function Ma(r) {
    var s = qo(r);
    if (de(s)) return r;
  }
  function BM(r, s) {
    if (r === "change") return s;
  }
  var ow = !1;
  if (u) {
    var Vc;
    if (u) {
      var Hc = "oninput" in document;
      if (!Hc) {
        var iw = document.createElement("div");
        iw.setAttribute("oninput", "return;"), Hc = typeof iw.oninput == "function";
      }
      Vc = Hc;
    } else Vc = !1;
    ow = Vc && (!document.documentMode || 9 < document.documentMode);
  }
  function sw() {
    Ji && (Ji.detachEvent("onpropertychange", aw), es = Ji = null);
  }
  function aw(r) {
    if (r.propertyName === "value" && Ma(es)) {
      var s = [];
      rw(s, es, r, Di(r)), ma($M, s);
    }
  }
  function VM(r, s, c) {
    r === "focusin" ? (sw(), Ji = s, es = c, Ji.attachEvent("onpropertychange", aw)) : r === "focusout" && sw();
  }
  function HM(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Ma(es);
  }
  function WM(r, s) {
    if (r === "click") return Ma(s);
  }
  function UM(r, s) {
    if (r === "input" || r === "change") return Ma(s);
  }
  function GM(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var sn = typeof Object.is == "function" ? Object.is : GM;
  function ts(r, s) {
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
  function lw(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function uw(r, s) {
    var c = lw(r);
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
      c = lw(c);
    }
  }
  function cw(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? cw(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function fw() {
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
  function Wc(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function YM(r) {
    var s = fw(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && cw(c.ownerDocument.documentElement, c)) {
      if (g !== null && Wc(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var w = c.textContent.length, E = Math.min(g.start, w);
          g = g.end === void 0 ? E : Math.min(g.end, w), !r.extend && E > g && (w = g, g = E, E = w), w = uw(c, E);
          var I = uw(
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
  var KM = u && "documentMode" in document && 11 >= document.documentMode, Oo = null, Uc = null, ns = null, Gc = !1;
  function dw(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Gc || Oo == null || Oo !== pe(g) || (g = Oo, "selectionStart" in g && Wc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), ns && ts(ns, g) || (ns = g, g = ja(Uc, "onSelect"), 0 < g.length && (s = new jc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = Oo)));
  }
  function Oa(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var Lo = { animationend: Oa("Animation", "AnimationEnd"), animationiteration: Oa("Animation", "AnimationIteration"), animationstart: Oa("Animation", "AnimationStart"), transitionend: Oa("Transition", "TransitionEnd") }, Yc = {}, hw = {};
  u && (hw = document.createElement("div").style, "AnimationEvent" in window || (delete Lo.animationend.animation, delete Lo.animationiteration.animation, delete Lo.animationstart.animation), "TransitionEvent" in window || delete Lo.transitionend.transition);
  function La(r) {
    if (Yc[r]) return Yc[r];
    if (!Lo[r]) return r;
    var s = Lo[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in hw) return Yc[r] = s[c];
    return r;
  }
  var pw = La("animationend"), gw = La("animationiteration"), mw = La("animationstart"), vw = La("transitionend"), yw = /* @__PURE__ */ new Map(), ww = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hr(r, s) {
    yw.set(r, s), a(s, [r]);
  }
  for (var Kc = 0; Kc < ww.length; Kc++) {
    var Xc = ww[Kc], XM = Xc.toLowerCase(), QM = Xc[0].toUpperCase() + Xc.slice(1);
    hr(XM, "on" + QM);
  }
  hr(pw, "onAnimationEnd"), hr(gw, "onAnimationIteration"), hr(mw, "onAnimationStart"), hr("dblclick", "onDoubleClick"), hr("focusin", "onFocus"), hr("focusout", "onBlur"), hr(vw, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ZM = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function xw(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, xc(g, s, void 0, r), r.currentTarget = null;
  }
  function bw(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], w = g.event;
      g = g.listeners;
      e: {
        var E = void 0;
        if (s) for (var I = g.length - 1; 0 <= I; I--) {
          var z = g[I], K = z.instance, oe = z.currentTarget;
          if (z = z.listener, K !== E && w.isPropagationStopped()) break e;
          xw(w, z, oe), E = K;
        }
        else for (I = 0; I < g.length; I++) {
          if (z = g[I], K = z.instance, oe = z.currentTarget, z = z.listener, K !== E && w.isPropagationStopped()) break e;
          xw(w, z, oe), E = K;
        }
      }
    }
    if (ko) throw r = zi, ko = !1, zi = null, r;
  }
  function ze(r, s) {
    var c = s[of];
    c === void 0 && (c = s[of] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (_w(s, r, 2, !1), c.add(g));
  }
  function Qc(r, s, c) {
    var g = 0;
    s && (g |= 4), _w(c, r, g, s);
  }
  var Da = "_reactListening" + Math.random().toString(36).slice(2);
  function os(r) {
    if (!r[Da]) {
      r[Da] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (ZM.has(c) || Qc(c, !1, r), Qc(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[Da] || (s[Da] = !0, Qc("selectionchange", !1, s));
    }
  }
  function _w(r, s, c, g) {
    switch (W0(s)) {
      case 1:
        var w = dM;
        break;
      case 4:
        w = hM;
        break;
      default:
        w = Oc;
    }
    c = w.bind(null, s, c, r), w = void 0, !Fi || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (w = !0), g ? w !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: w }) : r.addEventListener(s, c, !0) : w !== void 0 ? r.addEventListener(s, c, { passive: w }) : r.addEventListener(s, c, !1);
  }
  function Zc(r, s, c, g, w) {
    var E = g;
    if ((s & 1) === 0 && (s & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var I = g.tag;
      if (I === 3 || I === 4) {
        var z = g.stateNode.containerInfo;
        if (z === w || z.nodeType === 8 && z.parentNode === w) break;
        if (I === 4) for (I = g.return; I !== null; ) {
          var K = I.tag;
          if ((K === 3 || K === 4) && (K = I.stateNode.containerInfo, K === w || K.nodeType === 8 && K.parentNode === w)) return;
          I = I.return;
        }
        for (; z !== null; ) {
          if (I = Wr(z), I === null) return;
          if (K = I.tag, K === 5 || K === 6) {
            g = E = I;
            continue e;
          }
          z = z.parentNode;
        }
      }
      g = g.return;
    }
    ma(function() {
      var oe = E, ue = Di(c), fe = [];
      e: {
        var le = yw.get(r);
        if (le !== void 0) {
          var ge = jc, we = r;
          switch (r) {
            case "keypress":
              if (Ta(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = NM;
              break;
            case "focusin":
              we = "focus", ge = zc;
              break;
            case "focusout":
              we = "blur", ge = zc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = zc;
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
              ge = Y0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = mM;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = IM;
              break;
            case pw:
            case gw:
            case mw:
              ge = wM;
              break;
            case vw:
              ge = MM;
              break;
            case "scroll":
              ge = pM;
              break;
            case "wheel":
              ge = LM;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = bM;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = X0;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = zr(J, ne), he != null && Se.push(is(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== Li && (we = c.relatedTarget || c.fromElement) && (Wr(we) || we[$n])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Wr(we) : null, we !== null && (et = Sn(we), we !== et || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = Y0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = X0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : qo(ge), re = we == null ? le : qo(we), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Wr(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && we) t: {
              for (Se = ge, ne = we, J = 0, re = Se; re; re = Do(re)) J++;
              for (re = 0, he = ne; he; he = Do(he)) re++;
              for (; 0 < J - re; ) Se = Do(Se), J--;
              for (; 0 < re - J; ) ne = Do(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = Do(Se), ne = Do(ne);
              }
              Se = null;
            }
            else Se = null;
            ge !== null && Sw(fe, le, ge, Se, !1), we !== null && et !== null && Sw(fe, et, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? qo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = BM;
          else if (nw(le)) if (ow) Ce = UM;
          else {
            Ce = HM;
            var ke = VM;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = WM);
          if (Ce && (Ce = Ce(r, oe))) {
            rw(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? qo(oe) : window, r) {
          case "focusin":
            (nw(ke) || ke.contentEditable === "true") && (Oo = ke, Uc = oe, ns = null);
            break;
          case "focusout":
            ns = Uc = Oo = null;
            break;
          case "mousedown":
            Gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gc = !1, dw(fe, c, ue);
            break;
          case "selectionchange":
            if (KM) break;
          case "keydown":
          case "keyup":
            dw(fe, c, ue);
        }
        var Re;
        if (Bc) e: {
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
        else Mo ? ew(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Q0 && c.locale !== "ko" && (Mo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Mo && (Re = U0()) : (dr = ue, Dc = "value" in dr ? dr.value : dr.textContent, Mo = !0)), ke = ja(oe, Pe), 0 < ke.length && (Pe = new K0(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = tw(c), Re !== null && (Pe.data = Re)))), (Re = jM ? qM(r, c) : FM(r, c)) && (oe = ja(oe, "onBeforeInput"), 0 < oe.length && (ue = new K0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Re));
      }
      bw(fe, s);
    });
  }
  function is(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function ja(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var w = r, E = w.stateNode;
      w.tag === 5 && E !== null && (w = E, E = zr(r, c), E != null && g.unshift(is(r, E, w)), E = zr(r, s), E != null && g.push(is(r, E, w))), r = r.return;
    }
    return g;
  }
  function Do(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Sw(r, s, c, g, w) {
    for (var E = s._reactName, I = []; c !== null && c !== g; ) {
      var z = c, K = z.alternate, oe = z.stateNode;
      if (K !== null && K === g) break;
      z.tag === 5 && oe !== null && (z = oe, w ? (K = zr(c, E), K != null && I.unshift(is(c, K, z))) : w || (K = zr(c, E), K != null && I.push(is(c, K, z)))), c = c.return;
    }
    I.length !== 0 && r.push({ event: s, listeners: I });
  }
  var JM = /\r\n?/g, e2 = /\u0000|\uFFFD/g;
  function Ew(r) {
    return (typeof r == "string" ? r : "" + r).replace(JM, `
`).replace(e2, "");
  }
  function qa(r, s, c) {
    if (s = Ew(s), Ew(r) !== s && c) throw Error(n(425));
  }
  function Fa() {
  }
  var Jc = null, ef = null;
  function tf(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var nf = typeof setTimeout == "function" ? setTimeout : void 0, t2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Cw = typeof Promise == "function" ? Promise : void 0, n2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cw < "u" ? function(r) {
    return Cw.resolve(null).then(r).catch(r2);
  } : nf;
  function r2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function rf(r, s) {
    var c = s, g = 0;
    do {
      var w = c.nextSibling;
      if (r.removeChild(c), w && w.nodeType === 8) if (c = w.data, c === "/$") {
        if (g === 0) {
          r.removeChild(w), Ki(s);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = w;
    } while (c);
    Ki(s);
  }
  function pr(r) {
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
  function kw(r) {
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
  var jo = Math.random().toString(36).slice(2), Cn = "__reactFiber$" + jo, ss = "__reactProps$" + jo, $n = "__reactContainer$" + jo, of = "__reactEvents$" + jo, o2 = "__reactListeners$" + jo, i2 = "__reactHandles$" + jo;
  function Wr(r) {
    var s = r[Cn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[$n] || c[Cn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = kw(r); r !== null; ) {
          if (c = r[Cn]) return c;
          r = kw(r);
        }
        return s;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function as(r) {
    return r = r[Cn] || r[$n], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function qo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function za(r) {
    return r[ss] || null;
  }
  var sf = [], Fo = -1;
  function gr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > Fo || (r.current = sf[Fo], sf[Fo] = null, Fo--);
  }
  function Fe(r, s) {
    Fo++, sf[Fo] = r.current, r.current = s;
  }
  var mr = {}, pt = gr(mr), _t = gr(!1), Ur = mr;
  function zo(r, s) {
    var c = r.type.contextTypes;
    if (!c) return mr;
    var g = r.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
    var w = {}, E;
    for (E in c) w[E] = s[E];
    return g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = s, r.__reactInternalMemoizedMaskedChildContext = w), w;
  }
  function St(r) {
    return r = r.childContextTypes, r != null;
  }
  function $a() {
    $e(_t), $e(pt);
  }
  function Rw(r, s, c) {
    if (pt.current !== mr) throw Error(n(168));
    Fe(pt, s), Fe(_t, c);
  }
  function Nw(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var w in g) if (!(w in s)) throw Error(n(108, X(r) || "Unknown", w));
    return Q({}, c, g);
  }
  function Ba(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || mr, Ur = pt.current, Fe(pt, r), Fe(_t, _t.current), !0;
  }
  function Pw(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = Nw(r, s, Ur), g.__reactInternalMemoizedMergedChildContext = r, $e(_t), $e(pt), Fe(pt, r)) : $e(_t), Fe(_t, c);
  }
  var Bn = null, Va = !1, af = !1;
  function Tw(r) {
    Bn === null ? Bn = [r] : Bn.push(r);
  }
  function s2(r) {
    Va = !0, Tw(r);
  }
  function vr() {
    if (!af && Bn !== null) {
      af = !0;
      var r = 0, s = qe;
      try {
        var c = Bn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Bn = null, Va = !1;
      } catch (w) {
        throw Bn !== null && (Bn = Bn.slice(r + 1)), wa(Vi, vr), w;
      } finally {
        qe = s, af = !1;
      }
    }
    return null;
  }
  var $o = [], Bo = 0, Ha = null, Wa = 0, Kt = [], Xt = 0, Gr = null, Vn = 1, Hn = "";
  function Yr(r, s) {
    $o[Bo++] = Wa, $o[Bo++] = Ha, Ha = r, Wa = s;
  }
  function Iw(r, s, c) {
    Kt[Xt++] = Vn, Kt[Xt++] = Hn, Kt[Xt++] = Gr, Gr = r;
    var g = Vn;
    r = Hn;
    var w = 32 - At(g) - 1;
    g &= ~(1 << w), c += 1;
    var E = 32 - At(s) + w;
    if (30 < E) {
      var I = w - w % 5;
      E = (g & (1 << I) - 1).toString(32), g >>= I, w -= I, Vn = 1 << 32 - At(s) + w | c << w | g, Hn = E + r;
    } else Vn = 1 << E | c << w | g, Hn = r;
  }
  function lf(r) {
    r.return !== null && (Yr(r, 1), Iw(r, 1, 0));
  }
  function uf(r) {
    for (; r === Ha; ) Ha = $o[--Bo], $o[Bo] = null, Wa = $o[--Bo], $o[Bo] = null;
    for (; r === Gr; ) Gr = Kt[--Xt], Kt[Xt] = null, Hn = Kt[--Xt], Kt[Xt] = null, Vn = Kt[--Xt], Kt[Xt] = null;
  }
  var Ot = null, Lt = null, Ve = !1, an = null;
  function Aw(r, s) {
    var c = en(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function Mw(r, s) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return s = s.nodeType !== 1 || c.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (r.stateNode = s, Ot = r, Lt = pr(s.firstChild), !0) : !1;
      case 6:
        return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (r.stateNode = s, Ot = r, Lt = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (c = Gr !== null ? { id: Vn, overflow: Hn } : null, r.memoizedState = { dehydrated: s, treeContext: c, retryLane: 1073741824 }, c = en(18, null, null, 0), c.stateNode = s, c.return = r, r.child = c, Ot = r, Lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function ff(r) {
    if (Ve) {
      var s = Lt;
      if (s) {
        var c = s;
        if (!Mw(r, s)) {
          if (cf(r)) throw Error(n(418));
          s = pr(c.nextSibling);
          var g = Ot;
          s && Mw(r, s) ? Aw(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Ot = r);
        }
      } else {
        if (cf(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Ot = r;
      }
    }
  }
  function Ow(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Ot = r;
  }
  function Ua(r) {
    if (r !== Ot) return !1;
    if (!Ve) return Ow(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !tf(r.type, r.memoizedProps)), s && (s = Lt)) {
      if (cf(r)) throw Lw(), Error(n(418));
      for (; s; ) Aw(r, s), s = pr(s.nextSibling);
    }
    if (Ow(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
      e: {
        for (r = r.nextSibling, s = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data;
            if (c === "/$") {
              if (s === 0) {
                Lt = pr(r.nextSibling);
                break e;
              }
              s--;
            } else c !== "$" && c !== "$!" && c !== "$?" || s++;
          }
          r = r.nextSibling;
        }
        Lt = null;
      }
    } else Lt = Ot ? pr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function Lw() {
    for (var r = Lt; r; ) r = pr(r.nextSibling);
  }
  function Vo() {
    Lt = Ot = null, Ve = !1;
  }
  function df(r) {
    an === null ? an = [r] : an.push(r);
  }
  var a2 = R.ReactCurrentBatchConfig;
  function ls(r, s, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(n(147, r));
        var w = g, E = "" + r;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === E ? s.ref : (s = function(I) {
          var z = w.refs;
          I === null ? delete z[E] : z[E] = I;
        }, s._stringRef = E, s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Ga(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Dw(r) {
    var s = r._init;
    return s(r._payload);
  }
  function jw(r) {
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
      return ne = Cr(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function E(ne, J, re) {
      return ne.index = re, r ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function I(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function z(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = rd(re, ne.mode, he), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function K(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Dw(Ce) === J.type) ? (he = w(J, re.props), he.ref = ls(ne, J, re), he.return = ne, he) : (he = vl(re.type, re.key, re.props, null, ne.mode, he), he.ref = ls(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = od(re, ne.mode, he), J.return = ne, J) : (J = w(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = no(re, ne.mode, he, Ce), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = rd("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = vl(J.type, J.key, J.props, null, ne.mode, re), re.ref = ls(ne, null, J), re.return = ne, re;
          case T:
            return J = od(J, ne.mode, re), J.return = ne, J;
          case q:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Vt(J) || F(J)) return J = no(J, ne.mode, re, null), J.return = ne, J;
        Ga(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : z(ne, J, "" + re, he);
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
        Ga(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, z(J, ne, "" + he, Ce);
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
        Ga(J, he);
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
      return r && Re.forEach(function(kr) {
        return s(ne, kr);
      }), Ve && Yr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = F(re);
      if (typeof Ce != "function") throw Error(n(150));
      if (re = Ce.call(re), re == null) throw Error(n(151));
      for (var ke = Ce = null, Re = J, Pe = J = 0, ct = null, De = re.next(); Re !== null && !De.done; Pe++, De = re.next()) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var kr = le(ne, Re, De.value, he);
        if (kr === null) {
          Re === null && (Re = ct);
          break;
        }
        r && Re && kr.alternate === null && s(ne, Re), J = E(kr, J, Pe), ke === null ? Ce = kr : ke.sibling = kr, ke = kr, Re = ct;
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
      return r && Re.forEach(function(z2) {
        return s(ne, z2);
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
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Dw(Ce) === ke.type) {
                    c(ne, ke.sibling), J = w(ke, re.props), J.ref = ls(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = no(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = vl(re.type, re.key, re.props, null, ne.mode, he), he.ref = ls(ne, J, re), he.return = ne, ne = he);
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
              J = od(re, ne.mode, he), J.return = ne, ne = J;
            }
            return I(ne);
          case q:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Vt(re)) return we(ne, J, re, he);
        if (F(re)) return Se(ne, J, re, he);
        Ga(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = w(J, re), J.return = ne, ne = J) : (c(ne, J), J = rd(re, ne.mode, he), J.return = ne, ne = J), I(ne)) : c(ne, J);
    }
    return et;
  }
  var Ho = jw(!0), qw = jw(!1), Ya = gr(null), Ka = null, Wo = null, hf = null;
  function pf() {
    hf = Wo = Ka = null;
  }
  function gf(r) {
    var s = Ya.current;
    $e(Ya), r._currentValue = s;
  }
  function mf(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Uo(r, s) {
    Ka = r, hf = Wo = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Qt(r) {
    var s = r._currentValue;
    if (hf !== r) if (r = { context: r, memoizedValue: s, next: null }, Wo === null) {
      if (Ka === null) throw Error(n(308));
      Wo = r, Ka.dependencies = { lanes: 0, firstContext: r };
    } else Wo = Wo.next = r;
    return s;
  }
  var Kr = null;
  function vf(r) {
    Kr === null ? Kr = [r] : Kr.push(r);
  }
  function Fw(r, s, c, g) {
    var w = s.interleaved;
    return w === null ? (c.next = c, vf(s)) : (c.next = w.next, w.next = c), s.interleaved = c, Wn(r, g);
  }
  function Wn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var yr = !1;
  function yf(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zw(r, s) {
    r = r.updateQueue, s.updateQueue === r && (s.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
  }
  function Un(r, s) {
    return { eventTime: r, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function wr(r, s, c) {
    var g = r.updateQueue;
    if (g === null) return null;
    if (g = g.shared, (Oe & 2) !== 0) {
      var w = g.pending;
      return w === null ? s.next = s : (s.next = w.next, w.next = s), g.pending = s, Wn(r, c);
    }
    return w = g.interleaved, w === null ? (s.next = s, vf(g)) : (s.next = w.next, w.next = s), g.interleaved = s, Wn(r, c);
  }
  function Xa(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ic(r, c);
    }
  }
  function $w(r, s) {
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
  function Qa(r, s, c, g) {
    var w = r.updateQueue;
    yr = !1;
    var E = w.firstBaseUpdate, I = w.lastBaseUpdate, z = w.shared.pending;
    if (z !== null) {
      w.shared.pending = null;
      var K = z, oe = K.next;
      K.next = null, I === null ? E = oe : I.next = oe, I = K;
      var ue = r.alternate;
      ue !== null && (ue = ue.updateQueue, z = ue.lastBaseUpdate, z !== I && (z === null ? ue.firstBaseUpdate = oe : z.next = oe, ue.lastBaseUpdate = K));
    }
    if (E !== null) {
      var fe = w.baseState;
      I = 0, ue = oe = K = null, z = E;
      do {
        var le = z.lane, ge = z.eventTime;
        if ((g & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: ge,
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          e: {
            var we = r, Se = z;
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
                fe = Q({}, fe, le);
                break e;
              case 2:
                yr = !0;
            }
          }
          z.callback !== null && z.lane !== 0 && (r.flags |= 64, le = w.effects, le === null ? w.effects = [z] : le.push(z));
        } else ge = { eventTime: ge, lane: le, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ue === null ? (oe = ue = ge, K = fe) : ue = ue.next = ge, I |= le;
        if (z = z.next, z === null) {
          if (z = w.shared.pending, z === null) break;
          le = z, z = le.next, le.next = null, w.lastBaseUpdate = le, w.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (K = fe), w.baseState = K, w.firstBaseUpdate = oe, w.lastBaseUpdate = ue, s = w.shared.interleaved, s !== null) {
        w = s;
        do
          I |= w.lane, w = w.next;
        while (w !== s);
      } else E === null && (w.shared.lanes = 0);
      Zr |= I, r.lanes = I, r.memoizedState = fe;
    }
  }
  function Bw(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], w = g.callback;
      if (w !== null) {
        if (g.callback = null, g = c, typeof w != "function") throw Error(n(191, w));
        w.call(g);
      }
    }
  }
  var us = {}, kn = gr(us), cs = gr(us), fs = gr(us);
  function Xr(r) {
    if (r === us) throw Error(n(174));
    return r;
  }
  function wf(r, s) {
    switch (Fe(fs, s), Fe(cs, r), Fe(kn, us), r = s.nodeType, r) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Wt(null, "");
        break;
      default:
        r = r === 8 ? s.parentNode : s, s = r.namespaceURI || null, r = r.tagName, s = Wt(s, r);
    }
    $e(kn), Fe(kn, s);
  }
  function Go() {
    $e(kn), $e(cs), $e(fs);
  }
  function Vw(r) {
    Xr(fs.current);
    var s = Xr(kn.current), c = Wt(s, r.type);
    s !== c && (Fe(cs, r), Fe(kn, c));
  }
  function xf(r) {
    cs.current === r && ($e(kn), $e(cs));
  }
  var Ke = gr(0);
  function Za(r) {
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
  var bf = [];
  function _f() {
    for (var r = 0; r < bf.length; r++) bf[r]._workInProgressVersionPrimary = null;
    bf.length = 0;
  }
  var Ja = R.ReactCurrentDispatcher, Sf = R.ReactCurrentBatchConfig, Qr = 0, Xe = null, ot = null, lt = null, el = !1, ds = !1, hs = 0, l2 = 0;
  function gt() {
    throw Error(n(321));
  }
  function Ef(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!sn(r[c], s[c])) return !1;
    return !0;
  }
  function Cf(r, s, c, g, w, E) {
    if (Qr = E, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Ja.current = r === null || r.memoizedState === null ? d2 : h2, r = c(g, w), ds) {
      E = 0;
      do {
        if (ds = !1, hs = 0, 25 <= E) throw Error(n(301));
        E += 1, lt = ot = null, s.updateQueue = null, Ja.current = p2, r = c(g, w);
      } while (ds);
    }
    if (Ja.current = rl, s = ot !== null && ot.next !== null, Qr = 0, lt = ot = Xe = null, el = !1, s) throw Error(n(300));
    return r;
  }
  function kf() {
    var r = hs !== 0;
    return hs = 0, r;
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
  function ps(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function Rf(r) {
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
      var z = I = null, K = null, oe = E;
      do {
        var ue = oe.lane;
        if ((Qr & ue) === ue) K !== null && (K = K.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          K === null ? (z = K = fe, I = g) : K = K.next = fe, Xe.lanes |= ue, Zr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== E);
      K === null ? I = g : K.next = z, sn(g, s.memoizedState) || (Et = !0), s.memoizedState = g, s.baseState = I, s.baseQueue = K, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      w = r;
      do
        E = w.lane, Xe.lanes |= E, Zr |= E, w = w.next;
      while (w !== r);
    } else w === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function Nf(r) {
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
      sn(E, s.memoizedState) || (Et = !0), s.memoizedState = E, s.baseQueue === null && (s.baseState = E), c.lastRenderedState = E;
    }
    return [E, g];
  }
  function Hw() {
  }
  function Ww(r, s) {
    var c = Xe, g = Zt(), w = s(), E = !sn(g.memoizedState, w);
    if (E && (g.memoizedState = w, Et = !0), g = g.queue, Pf(Yw.bind(null, c, g, r), [r]), g.getSnapshot !== s || E || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, gs(9, Gw.bind(null, c, g, w, s), void 0, null), ut === null) throw Error(n(349));
      (Qr & 30) !== 0 || Uw(c, s, w);
    }
    return w;
  }
  function Uw(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function Gw(r, s, c, g) {
    s.value = c, s.getSnapshot = g, Kw(s) && Xw(r);
  }
  function Yw(r, s, c) {
    return c(function() {
      Kw(s) && Xw(r);
    });
  }
  function Kw(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !sn(r, c);
    } catch {
      return !0;
    }
  }
  function Xw(r) {
    var s = Wn(r, 1);
    s !== null && fn(s, r, 1, -1);
  }
  function Qw(r) {
    var s = Rn();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: r }, s.queue = r, r = r.dispatch = f2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function gs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function Zw() {
    return Zt().memoizedState;
  }
  function tl(r, s, c, g) {
    var w = Rn();
    Xe.flags |= r, w.memoizedState = gs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function nl(r, s, c, g) {
    var w = Zt();
    g = g === void 0 ? null : g;
    var E = void 0;
    if (ot !== null) {
      var I = ot.memoizedState;
      if (E = I.destroy, g !== null && Ef(g, I.deps)) {
        w.memoizedState = gs(s, c, E, g);
        return;
      }
    }
    Xe.flags |= r, w.memoizedState = gs(1 | s, c, E, g);
  }
  function Jw(r, s) {
    return tl(8390656, 8, r, s);
  }
  function Pf(r, s) {
    return nl(2048, 8, r, s);
  }
  function ex(r, s) {
    return nl(4, 2, r, s);
  }
  function tx(r, s) {
    return nl(4, 4, r, s);
  }
  function nx(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function rx(r, s, c) {
    return c = c != null ? c.concat([r]) : null, nl(4, 4, nx.bind(null, s, r), c);
  }
  function Tf() {
  }
  function ox(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Ef(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function ix(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Ef(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function sx(r, s, c) {
    return (Qr & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (sn(c, s) || (c = Ea(), Xe.lanes |= c, Zr |= c, r.baseState = !0), s);
  }
  function u2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = Sf.transition;
    Sf.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, Sf.transition = g;
    }
  }
  function ax() {
    return Zt().memoizedState;
  }
  function c2(r, s, c) {
    var g = Sr(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, lx(r)) ux(s, c);
    else if (c = Fw(r, s, c, g), c !== null) {
      var w = xt();
      fn(c, r, g, w), cx(c, s, g);
    }
  }
  function f2(r, s, c) {
    var g = Sr(r), w = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (lx(r)) ux(s, w);
    else {
      var E = r.alternate;
      if (r.lanes === 0 && (E === null || E.lanes === 0) && (E = s.lastRenderedReducer, E !== null)) try {
        var I = s.lastRenderedState, z = E(I, c);
        if (w.hasEagerState = !0, w.eagerState = z, sn(z, I)) {
          var K = s.interleaved;
          K === null ? (w.next = w, vf(s)) : (w.next = K.next, K.next = w), s.interleaved = w;
          return;
        }
      } catch {
      } finally {
      }
      c = Fw(r, s, w, g), c !== null && (w = xt(), fn(c, r, g, w), cx(c, s, g));
    }
  }
  function lx(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function ux(r, s) {
    ds = el = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function cx(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ic(r, c);
    }
  }
  var rl = { readContext: Qt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, d2 = { readContext: Qt, useCallback: function(r, s) {
    return Rn().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Qt, useEffect: Jw, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, tl(
      4194308,
      4,
      nx.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return tl(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return tl(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = Rn();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = Rn();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = c2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = Rn();
    return r = { current: r }, s.memoizedState = r;
  }, useState: Qw, useDebugValue: Tf, useDeferredValue: function(r) {
    return Rn().memoizedState = r;
  }, useTransition: function() {
    var r = Qw(!1), s = r[0];
    return r = u2.bind(null, r[1]), Rn().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, w = Rn();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Qr & 30) !== 0 || Uw(g, s, c);
    }
    w.memoizedState = c;
    var E = { value: c, getSnapshot: s };
    return w.queue = E, Jw(Yw.bind(
      null,
      g,
      E,
      r
    ), [r]), g.flags |= 2048, gs(9, Gw.bind(null, g, E, c, s), void 0, null), c;
  }, useId: function() {
    var r = Rn(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Hn, g = Vn;
      c = (g & ~(1 << 32 - At(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = hs++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = l2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, h2 = {
    readContext: Qt,
    useCallback: ox,
    useContext: Qt,
    useEffect: Pf,
    useImperativeHandle: rx,
    useInsertionEffect: ex,
    useLayoutEffect: tx,
    useMemo: ix,
    useReducer: Rf,
    useRef: Zw,
    useState: function() {
      return Rf(ps);
    },
    useDebugValue: Tf,
    useDeferredValue: function(r) {
      var s = Zt();
      return sx(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = Rf(ps)[0], s = Zt().memoizedState;
      return [r, s];
    },
    useMutableSource: Hw,
    useSyncExternalStore: Ww,
    useId: ax,
    unstable_isNewReconciler: !1
  }, p2 = { readContext: Qt, useCallback: ox, useContext: Qt, useEffect: Pf, useImperativeHandle: rx, useInsertionEffect: ex, useLayoutEffect: tx, useMemo: ix, useReducer: Nf, useRef: Zw, useState: function() {
    return Nf(ps);
  }, useDebugValue: Tf, useDeferredValue: function(r) {
    var s = Zt();
    return ot === null ? s.memoizedState = r : sx(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = Nf(ps)[0], s = Zt().memoizedState;
    return [r, s];
  }, useMutableSource: Hw, useSyncExternalStore: Ww, useId: ax, unstable_isNewReconciler: !1 };
  function ln(r, s) {
    if (r && r.defaultProps) {
      s = Q({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function If(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : Q({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var ol = { isMounted: function(r) {
    return (r = r._reactInternals) ? Sn(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = Sr(r), E = Un(g, w);
    E.payload = s, c != null && (E.callback = c), s = wr(r, E, w), s !== null && (fn(s, r, w, g), Xa(s, r, w));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = Sr(r), E = Un(g, w);
    E.tag = 1, E.payload = s, c != null && (E.callback = c), s = wr(r, E, w), s !== null && (fn(s, r, w, g), Xa(s, r, w));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = xt(), g = Sr(r), w = Un(c, g);
    w.tag = 2, s != null && (w.callback = s), s = wr(r, w, g), s !== null && (fn(s, r, g, c), Xa(s, r, g));
  } };
  function fx(r, s, c, g, w, E, I) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, E, I) : s.prototype && s.prototype.isPureReactComponent ? !ts(c, g) || !ts(w, E) : !0;
  }
  function dx(r, s, c) {
    var g = !1, w = mr, E = s.contextType;
    return typeof E == "object" && E !== null ? E = Qt(E) : (w = St(s) ? Ur : pt.current, g = s.contextTypes, E = (g = g != null) ? zo(r, w) : mr), s = new s(c, E), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ol, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = w, r.__reactInternalMemoizedMaskedChildContext = E), s;
  }
  function hx(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && ol.enqueueReplaceState(s, s.state, null);
  }
  function Af(r, s, c, g) {
    var w = r.stateNode;
    w.props = c, w.state = r.memoizedState, w.refs = {}, yf(r);
    var E = s.contextType;
    typeof E == "object" && E !== null ? w.context = Qt(E) : (E = St(s) ? Ur : pt.current, w.context = zo(r, E)), w.state = r.memoizedState, E = s.getDerivedStateFromProps, typeof E == "function" && (If(r, s, E, c), w.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function" || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (s = w.state, typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount(), s !== w.state && ol.enqueueReplaceState(w, w.state, null), Qa(r, c, w, g), w.state = r.memoizedState), typeof w.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function Yo(r, s) {
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
  function Mf(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function Of(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var g2 = typeof WeakMap == "function" ? WeakMap : Map;
  function px(r, s, c) {
    c = Un(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      fl || (fl = !0, Kf = g), Of(r, s);
    }, c;
  }
  function gx(r, s, c) {
    c = Un(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var w = s.value;
      c.payload = function() {
        return g(w);
      }, c.callback = function() {
        Of(r, s);
      };
    }
    var E = r.stateNode;
    return E !== null && typeof E.componentDidCatch == "function" && (c.callback = function() {
      Of(r, s), typeof g != "function" && (br === null ? br = /* @__PURE__ */ new Set([this]) : br.add(this));
      var I = s.stack;
      this.componentDidCatch(s.value, { componentStack: I !== null ? I : "" });
    }), c;
  }
  function mx(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new g2();
      var w = /* @__PURE__ */ new Set();
      g.set(s, w);
    } else w = g.get(s), w === void 0 && (w = /* @__PURE__ */ new Set(), g.set(s, w));
    w.has(c) || (w.add(c), r = P2.bind(null, r, s, c), s.then(r, r));
  }
  function vx(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function yx(r, s, c, g, w) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Un(-1, 1), s.tag = 2, wr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = w, r);
  }
  var m2 = R.ReactCurrentOwner, Et = !1;
  function wt(r, s, c, g) {
    s.child = r === null ? qw(s, null, c, g) : Ho(s, r.child, c, g);
  }
  function wx(r, s, c, g, w) {
    c = c.render;
    var E = s.ref;
    return Uo(s, w), g = Cf(r, s, c, g, E, w), c = kf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && c && lf(s), s.flags |= 1, wt(r, s, g, w), s.child);
  }
  function xx(r, s, c, g, w) {
    if (r === null) {
      var E = c.type;
      return typeof E == "function" && !nd(E) && E.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = E, bx(r, s, E, g, w)) : (r = vl(c.type, null, g, s, s.mode, w), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (E = r.child, (r.lanes & w) === 0) {
      var I = E.memoizedProps;
      if (c = c.compare, c = c !== null ? c : ts, c(I, g) && r.ref === s.ref) return Gn(r, s, w);
    }
    return s.flags |= 1, r = Cr(E, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function bx(r, s, c, g, w) {
    if (r !== null) {
      var E = r.memoizedProps;
      if (ts(E, g) && r.ref === s.ref) if (Et = !1, s.pendingProps = g = E, (r.lanes & w) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return s.lanes = r.lanes, Gn(r, s, w);
    }
    return Lf(r, s, c, g, w);
  }
  function _x(r, s, c) {
    var g = s.pendingProps, w = g.children, E = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(Xo, Dt), Dt |= c;
    else {
      if ((c & 1073741824) === 0) return r = E !== null ? E.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, Fe(Xo, Dt), Dt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = E !== null ? E.baseLanes : c, Fe(Xo, Dt), Dt |= g;
    }
    else E !== null ? (g = E.baseLanes | c, s.memoizedState = null) : g = c, Fe(Xo, Dt), Dt |= g;
    return wt(r, s, w, c), s.child;
  }
  function Sx(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Lf(r, s, c, g, w) {
    var E = St(c) ? Ur : pt.current;
    return E = zo(s, E), Uo(s, w), c = Cf(r, s, c, g, E, w), g = kf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && g && lf(s), s.flags |= 1, wt(r, s, c, w), s.child);
  }
  function Ex(r, s, c, g, w) {
    if (St(c)) {
      var E = !0;
      Ba(s);
    } else E = !1;
    if (Uo(s, w), s.stateNode === null) sl(r, s), dx(s, c, g), Af(s, c, g, w), g = !0;
    else if (r === null) {
      var I = s.stateNode, z = s.memoizedProps;
      I.props = z;
      var K = I.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Qt(oe) : (oe = St(c) ? Ur : pt.current, oe = zo(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof I.getSnapshotBeforeUpdate == "function";
      fe || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (z !== g || K !== oe) && hx(s, I, g, oe), yr = !1;
      var le = s.memoizedState;
      I.state = le, Qa(s, g, I, w), K = s.memoizedState, z !== g || le !== K || _t.current || yr ? (typeof ue == "function" && (If(s, c, ue, g), K = s.memoizedState), (z = yr || fx(s, c, z, g, le, K, oe)) ? (fe || typeof I.UNSAFE_componentWillMount != "function" && typeof I.componentWillMount != "function" || (typeof I.componentWillMount == "function" && I.componentWillMount(), typeof I.UNSAFE_componentWillMount == "function" && I.UNSAFE_componentWillMount()), typeof I.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = K), I.props = g, I.state = K, I.context = oe, g = z) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      I = s.stateNode, zw(r, s), z = s.memoizedProps, oe = s.type === s.elementType ? z : ln(s.type, z), I.props = oe, fe = s.pendingProps, le = I.context, K = c.contextType, typeof K == "object" && K !== null ? K = Qt(K) : (K = St(c) ? Ur : pt.current, K = zo(s, K));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof I.getSnapshotBeforeUpdate == "function") || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (z !== fe || le !== K) && hx(s, I, g, K), yr = !1, le = s.memoizedState, I.state = le, Qa(s, g, I, w);
      var we = s.memoizedState;
      z !== fe || le !== we || _t.current || yr ? (typeof ge == "function" && (If(s, c, ge, g), we = s.memoizedState), (oe = yr || fx(s, c, oe, g, le, we, K) || !1) ? (ue || typeof I.UNSAFE_componentWillUpdate != "function" && typeof I.componentWillUpdate != "function" || (typeof I.componentWillUpdate == "function" && I.componentWillUpdate(g, we, K), typeof I.UNSAFE_componentWillUpdate == "function" && I.UNSAFE_componentWillUpdate(g, we, K)), typeof I.componentDidUpdate == "function" && (s.flags |= 4), typeof I.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof I.componentDidUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = we), I.props = g, I.state = we, I.context = K, g = oe) : (typeof I.componentDidUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return Df(r, s, c, g, E, w);
  }
  function Df(r, s, c, g, w, E) {
    Sx(r, s);
    var I = (s.flags & 128) !== 0;
    if (!g && !I) return w && Pw(s, c, !1), Gn(r, s, E);
    g = s.stateNode, m2.current = s;
    var z = I && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && I ? (s.child = Ho(s, r.child, null, E), s.child = Ho(s, null, z, E)) : wt(r, s, z, E), s.memoizedState = g.state, w && Pw(s, c, !0), s.child;
  }
  function Cx(r) {
    var s = r.stateNode;
    s.pendingContext ? Rw(r, s.pendingContext, s.pendingContext !== s.context) : s.context && Rw(r, s.context, !1), wf(r, s.containerInfo);
  }
  function kx(r, s, c, g, w) {
    return Vo(), df(w), s.flags |= 256, wt(r, s, c, g), s.child;
  }
  var jf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qf(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Rx(r, s, c) {
    var g = s.pendingProps, w = Ke.current, E = !1, I = (s.flags & 128) !== 0, z;
    if ((z = I) || (z = r !== null && r.memoizedState === null ? !1 : (w & 2) !== 0), z ? (E = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (w |= 1), Fe(Ke, w & 1), r === null)
      return ff(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (I = g.children, r = g.fallback, E ? (g = s.mode, E = s.child, I = { mode: "hidden", children: I }, (g & 1) === 0 && E !== null ? (E.childLanes = 0, E.pendingProps = I) : E = yl(I, g, 0, null), r = no(r, g, c, null), E.return = s, r.return = s, E.sibling = r, s.child = E, s.child.memoizedState = qf(c), s.memoizedState = jf, r) : Ff(s, I));
    if (w = r.memoizedState, w !== null && (z = w.dehydrated, z !== null)) return v2(r, s, I, g, z, w, c);
    if (E) {
      E = g.fallback, I = s.mode, w = r.child, z = w.sibling;
      var K = { mode: "hidden", children: g.children };
      return (I & 1) === 0 && s.child !== w ? (g = s.child, g.childLanes = 0, g.pendingProps = K, s.deletions = null) : (g = Cr(w, K), g.subtreeFlags = w.subtreeFlags & 14680064), z !== null ? E = Cr(z, E) : (E = no(E, I, c, null), E.flags |= 2), E.return = s, g.return = s, g.sibling = E, s.child = g, g = E, E = s.child, I = r.child.memoizedState, I = I === null ? qf(c) : { baseLanes: I.baseLanes | c, cachePool: null, transitions: I.transitions }, E.memoizedState = I, E.childLanes = r.childLanes & ~c, s.memoizedState = jf, g;
    }
    return E = r.child, r = E.sibling, g = Cr(E, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function Ff(r, s) {
    return s = yl({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function il(r, s, c, g) {
    return g !== null && df(g), Ho(s, r.child, null, c), r = Ff(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function v2(r, s, c, g, w, E, I) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = Mf(Error(n(422))), il(r, s, I, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (E = g.fallback, w = s.mode, g = yl({ mode: "visible", children: g.children }, w, 0, null), E = no(E, w, I, null), E.flags |= 2, g.return = s, E.return = s, g.sibling = E, s.child = g, (s.mode & 1) !== 0 && Ho(s, r.child, null, I), s.child.memoizedState = qf(I), s.memoizedState = jf, E);
    if ((s.mode & 1) === 0) return il(r, s, I, null);
    if (w.data === "$!") {
      if (g = w.nextSibling && w.nextSibling.dataset, g) var z = g.dgst;
      return g = z, E = Error(n(419)), g = Mf(E, g, void 0), il(r, s, I, g);
    }
    if (z = (I & r.childLanes) !== 0, Et || z) {
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
      return td(), g = Mf(Error(n(421))), il(r, s, I, g);
    }
    return w.data === "$?" ? (s.flags |= 128, s.child = r.child, s = T2.bind(null, r), w._reactRetry = s, null) : (r = E.treeContext, Lt = pr(w.nextSibling), Ot = s, Ve = !0, an = null, r !== null && (Kt[Xt++] = Vn, Kt[Xt++] = Hn, Kt[Xt++] = Gr, Vn = r.id, Hn = r.overflow, Gr = s), s = Ff(s, g.children), s.flags |= 4096, s);
  }
  function Nx(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), mf(r.return, s, c);
  }
  function zf(r, s, c, g, w) {
    var E = r.memoizedState;
    E === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: w } : (E.isBackwards = s, E.rendering = null, E.renderingStartTime = 0, E.last = g, E.tail = c, E.tailMode = w);
  }
  function Px(r, s, c) {
    var g = s.pendingProps, w = g.revealOrder, E = g.tail;
    if (wt(r, s, g.children, c), g = Ke.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Nx(r, c, s);
        else if (r.tag === 19) Nx(r, c, s);
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
    if (Fe(Ke, g), (s.mode & 1) === 0) s.memoizedState = null;
    else switch (w) {
      case "forwards":
        for (c = s.child, w = null; c !== null; ) r = c.alternate, r !== null && Za(r) === null && (w = c), c = c.sibling;
        c = w, c === null ? (w = s.child, s.child = null) : (w = c.sibling, c.sibling = null), zf(s, !1, w, c, E);
        break;
      case "backwards":
        for (c = null, w = s.child, s.child = null; w !== null; ) {
          if (r = w.alternate, r !== null && Za(r) === null) {
            s.child = w;
            break;
          }
          r = w.sibling, w.sibling = c, c = w, w = r;
        }
        zf(s, !0, c, null, E);
        break;
      case "together":
        zf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function sl(r, s) {
    (s.mode & 1) === 0 && r !== null && (r.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Gn(r, s, c) {
    if (r !== null && (s.dependencies = r.dependencies), Zr |= s.lanes, (c & s.childLanes) === 0) return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (r = s.child, c = Cr(r, r.pendingProps), s.child = c, c.return = s; r.sibling !== null; ) r = r.sibling, c = c.sibling = Cr(r, r.pendingProps), c.return = s;
      c.sibling = null;
    }
    return s.child;
  }
  function y2(r, s, c) {
    switch (s.tag) {
      case 3:
        Cx(s), Vo();
        break;
      case 5:
        Vw(s);
        break;
      case 1:
        St(s.type) && Ba(s);
        break;
      case 4:
        wf(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, w = s.memoizedProps.value;
        Fe(Ya, g._currentValue), g._currentValue = w;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (Fe(Ke, Ke.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? Rx(r, s, c) : (Fe(Ke, Ke.current & 1), r = Gn(r, s, c), r !== null ? r.sibling : null);
        Fe(Ke, Ke.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return Px(r, s, c);
          s.flags |= 128;
        }
        if (w = s.memoizedState, w !== null && (w.rendering = null, w.tail = null, w.lastEffect = null), Fe(Ke, Ke.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, _x(r, s, c);
    }
    return Gn(r, s, c);
  }
  var Tx, $f, Ix, Ax;
  Tx = function(r, s) {
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
  }, $f = function() {
  }, Ix = function(r, s, c, g) {
    var w = r.memoizedProps;
    if (w !== g) {
      r = s.stateNode, Xr(kn.current);
      var E = null;
      switch (c) {
        case "input":
          w = _e(r, w), g = _e(r, g), E = [];
          break;
        case "select":
          w = Q({}, w, { value: void 0 }), g = Q({}, g, { value: void 0 }), E = [];
          break;
        case "textarea":
          w = at(r, w), g = at(r, g), E = [];
          break;
        default:
          typeof w.onClick != "function" && typeof g.onClick == "function" && (r.onclick = Fa);
      }
      Mi(c, g);
      var I;
      c = null;
      for (oe in w) if (!g.hasOwnProperty(oe) && w.hasOwnProperty(oe) && w[oe] != null) if (oe === "style") {
        var z = w[oe];
        for (I in z) z.hasOwnProperty(I) && (c || (c = {}), c[I] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (i.hasOwnProperty(oe) ? E || (E = []) : (E = E || []).push(oe, null));
      for (oe in g) {
        var K = g[oe];
        if (z = w != null ? w[oe] : void 0, g.hasOwnProperty(oe) && K !== z && (K != null || z != null)) if (oe === "style") if (z) {
          for (I in z) !z.hasOwnProperty(I) || K && K.hasOwnProperty(I) || (c || (c = {}), c[I] = "");
          for (I in K) K.hasOwnProperty(I) && z[I] !== K[I] && (c || (c = {}), c[I] = K[I]);
        } else c || (E || (E = []), E.push(
          oe,
          c
        )), c = K;
        else oe === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, z = z ? z.__html : void 0, K != null && z !== K && (E = E || []).push(oe, K)) : oe === "children" ? typeof K != "string" && typeof K != "number" || (E = E || []).push(oe, "" + K) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (i.hasOwnProperty(oe) ? (K != null && oe === "onScroll" && ze("scroll", r), E || z === K || (E = [])) : (E = E || []).push(oe, K));
      }
      c && (E = E || []).push("style", c);
      var oe = E;
      (s.updateQueue = oe) && (s.flags |= 4);
    }
  }, Ax = function(r, s, c, g) {
    c !== g && (s.flags |= 4);
  };
  function ms(r, s) {
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
    if (s) for (var w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags & 14680064, g |= w.flags & 14680064, w.return = r, w = w.sibling;
    else for (w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags, g |= w.flags, w.return = r, w = w.sibling;
    return r.subtreeFlags |= g, r.childLanes = c, s;
  }
  function w2(r, s, c) {
    var g = s.pendingProps;
    switch (uf(s), s.tag) {
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
        return St(s.type) && $a(), mt(s), null;
      case 3:
        return g = s.stateNode, Go(), $e(_t), $e(pt), _f(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Ua(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, an !== null && (Zf(an), an = null))), $f(r, s), mt(s), null;
      case 5:
        xf(s);
        var w = Xr(fs.current);
        if (c = s.type, r !== null && s.stateNode != null) Ix(r, s, c, g, w), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return mt(s), null;
          }
          if (r = Xr(kn.current), Ua(s)) {
            g = s.stateNode, c = s.type;
            var E = s.memoizedProps;
            switch (g[Cn] = s, g[ss] = E, r = (s.mode & 1) !== 0, c) {
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
                for (w = 0; w < rs.length; w++) ze(rs[w], g);
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
            Mi(c, E), w = null;
            for (var I in E) if (E.hasOwnProperty(I)) {
              var z = E[I];
              I === "children" ? typeof z == "string" ? g.textContent !== z && (E.suppressHydrationWarning !== !0 && qa(g.textContent, z, r), w = ["children", z]) : typeof z == "number" && g.textContent !== "" + z && (E.suppressHydrationWarning !== !0 && qa(
                g.textContent,
                z,
                r
              ), w = ["children", "" + z]) : i.hasOwnProperty(I) && z != null && I === "onScroll" && ze("scroll", g);
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
                typeof E.onClick == "function" && (g.onclick = Fa);
            }
            g = w, s.updateQueue = g, g !== null && (s.flags |= 4);
          } else {
            I = w.nodeType === 9 ? w : w.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = on(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = I.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = I.createElement(c, { is: g.is }) : (r = I.createElement(c), c === "select" && (I = r, g.multiple ? I.multiple = !0 : g.size && (I.size = g.size))) : r = I.createElementNS(r, c), r[Cn] = s, r[ss] = g, Tx(r, s, !1, !1), s.stateNode = r;
            e: {
              switch (I = Oi(c, g), c) {
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
                  for (w = 0; w < rs.length; w++) ze(rs[w], r);
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
                  r._wrapperState = { wasMultiple: !!g.multiple }, w = Q({}, g, { value: void 0 }), ze("invalid", r);
                  break;
                case "textarea":
                  Ge(r, g), w = at(r, g), ze("invalid", r);
                  break;
                default:
                  w = g;
              }
              Mi(c, w), z = w;
              for (E in z) if (z.hasOwnProperty(E)) {
                var K = z[E];
                E === "style" ? Gt(r, K) : E === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, K != null && Fr(r, K)) : E === "children" ? typeof K == "string" ? (c !== "textarea" || K !== "") && Ut(r, K) : typeof K == "number" && Ut(r, "" + K) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (i.hasOwnProperty(E) ? K != null && E === "onScroll" && ze("scroll", r) : K != null && b(r, E, K, I));
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
                  r.multiple = !!g.multiple, E = g.value, E != null ? ht(r, !!g.multiple, E, !1) : g.defaultValue != null && ht(
                    r,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof w.onClick == "function" && (r.onclick = Fa);
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
        if (r && s.stateNode != null) Ax(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Xr(fs.current), Xr(kn.current), Ua(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[Cn] = s, (E = g.nodeValue !== c) && (r = Ot, r !== null)) switch (r.tag) {
              case 3:
                qa(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && qa(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            E && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[Cn] = s, s.stateNode = g;
        }
        return mt(s), null;
      case 13:
        if ($e(Ke), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Lt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Lw(), Vo(), s.flags |= 98560, E = !1;
          else if (E = Ua(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!E) throw Error(n(318));
              if (E = s.memoizedState, E = E !== null ? E.dehydrated : null, !E) throw Error(n(317));
              E[Cn] = s;
            } else Vo(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            mt(s), E = !1;
          } else an !== null && (Zf(an), an = null), E = !0;
          if (!E) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ke.current & 1) !== 0 ? it === 0 && (it = 3) : td())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
      case 4:
        return Go(), $f(r, s), r === null && os(s.stateNode.containerInfo), mt(s), null;
      case 10:
        return gf(s.type._context), mt(s), null;
      case 17:
        return St(s.type) && $a(), mt(s), null;
      case 19:
        if ($e(Ke), E = s.memoizedState, E === null) return mt(s), null;
        if (g = (s.flags & 128) !== 0, I = E.rendering, I === null) if (g) ms(E, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (I = Za(r), I !== null) {
              for (s.flags |= 128, ms(E, !1), g = I.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) E = c, r = g, E.flags &= 14680066, I = E.alternate, I === null ? (E.childLanes = 0, E.lanes = r, E.child = null, E.subtreeFlags = 0, E.memoizedProps = null, E.memoizedState = null, E.updateQueue = null, E.dependencies = null, E.stateNode = null) : (E.childLanes = I.childLanes, E.lanes = I.lanes, E.child = I.child, E.subtreeFlags = 0, E.deletions = null, E.memoizedProps = I.memoizedProps, E.memoizedState = I.memoizedState, E.updateQueue = I.updateQueue, E.type = I.type, r = I.dependencies, E.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return Fe(Ke, Ke.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          E.tail !== null && Ye() > Qo && (s.flags |= 128, g = !0, ms(E, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = Za(I), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), ms(E, !0), E.tail === null && E.tailMode === "hidden" && !I.alternate && !Ve) return mt(s), null;
          } else 2 * Ye() - E.renderingStartTime > Qo && c !== 1073741824 && (s.flags |= 128, g = !0, ms(E, !1), s.lanes = 4194304);
          E.isBackwards ? (I.sibling = s.child, s.child = I) : (c = E.last, c !== null ? c.sibling = I : s.child = I, E.last = I);
        }
        return E.tail !== null ? (s = E.tail, E.rendering = s, E.tail = s.sibling, E.renderingStartTime = Ye(), s.sibling = null, c = Ke.current, Fe(Ke, g ? c & 1 | 2 : c & 1), s) : (mt(s), null);
      case 22:
      case 23:
        return ed(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (Dt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function x2(r, s) {
    switch (uf(s), s.tag) {
      case 1:
        return St(s.type) && $a(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Go(), $e(_t), $e(pt), _f(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return xf(s), null;
      case 13:
        if ($e(Ke), r = s.memoizedState, r !== null && r.dehydrated !== null) {
          if (s.alternate === null) throw Error(n(340));
          Vo();
        }
        return r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 19:
        return $e(Ke), null;
      case 4:
        return Go(), null;
      case 10:
        return gf(s.type._context), null;
      case 22:
      case 23:
        return ed(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var al = !1, vt = !1, b2 = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Ko(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function Bf(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var Mx = !1;
  function _2(r, s) {
    if (Jc = Ra, r = fw(), Wc(r)) {
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
          var I = 0, z = -1, K = -1, oe = 0, ue = 0, fe = r, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || w !== 0 && fe.nodeType !== 3 || (z = I + w), fe !== E || g !== 0 && fe.nodeType !== 3 || (K = I + g), fe.nodeType === 3 && (I += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === r) break t;
              if (le === c && ++oe === w && (z = I), le === E && ++ue === g && (K = I), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = z === -1 || K === -1 ? null : { start: z, end: K };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (ef = { focusedElem: r, selectionRange: c }, Ra = !1, ve = s; ve !== null; ) if (s = ve, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ve = r;
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
    return we = Mx, Mx = !1, we;
  }
  function vs(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var w = g = g.next;
      do {
        if ((w.tag & r) === r) {
          var E = w.destroy;
          w.destroy = void 0, E !== void 0 && Bf(s, c, E);
        }
        w = w.next;
      } while (w !== g);
    }
  }
  function ll(r, s) {
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
  function Vf(r) {
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
  function Ox(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, Ox(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[Cn], delete s[ss], delete s[of], delete s[o2], delete s[i2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Lx(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Dx(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Lx(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Hf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.nodeType === 8 ? c.parentNode.insertBefore(r, s) : c.insertBefore(r, s) : (c.nodeType === 8 ? (s = c.parentNode, s.insertBefore(r, c)) : (s = c, s.appendChild(r)), c = c._reactRootContainer, c != null || s.onclick !== null || (s.onclick = Fa));
    else if (g !== 4 && (r = r.child, r !== null)) for (Hf(r, s, c), r = r.sibling; r !== null; ) Hf(r, s, c), r = r.sibling;
  }
  function Wf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for (Wf(r, s, c), r = r.sibling; r !== null; ) Wf(r, s, c), r = r.sibling;
  }
  var ft = null, un = !1;
  function xr(r, s, c) {
    for (c = c.child; c !== null; ) jx(r, s, c), c = c.sibling;
  }
  function jx(r, s, c) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Vr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Ko(c, s);
      case 6:
        var g = ft, w = un;
        ft = null, xr(r, s, c), ft = g, un = w, ft !== null && (un ? (r = ft, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (un ? (r = ft, c = c.stateNode, r.nodeType === 8 ? rf(r.parentNode, c) : r.nodeType === 1 && rf(r, c), Ki(r)) : rf(ft, c.stateNode));
        break;
      case 4:
        g = ft, w = un, ft = c.stateNode.containerInfo, un = !0, xr(r, s, c), ft = g, un = w;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          w = g = g.next;
          do {
            var E = w, I = E.destroy;
            E = E.tag, I !== void 0 && ((E & 2) !== 0 || (E & 4) !== 0) && Bf(c, s, I), w = w.next;
          } while (w !== g);
        }
        xr(r, s, c);
        break;
      case 1:
        if (!vt && (Ko(c, s), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
          g.props = c.memoizedProps, g.state = c.memoizedState, g.componentWillUnmount();
        } catch (z) {
          Ze(c, s, z);
        }
        xr(r, s, c);
        break;
      case 21:
        xr(r, s, c);
        break;
      case 22:
        c.mode & 1 ? (vt = (g = vt) || c.memoizedState !== null, xr(r, s, c), vt = g) : xr(r, s, c);
        break;
      default:
        xr(r, s, c);
    }
  }
  function qx(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new b2()), s.forEach(function(g) {
        var w = I2.bind(null, r, g);
        c.has(g) || (c.add(g), g.then(w, w));
      });
    }
  }
  function cn(r, s) {
    var c = s.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var w = c[g];
      try {
        var E = r, I = s, z = I;
        e: for (; z !== null; ) {
          switch (z.tag) {
            case 5:
              ft = z.stateNode, un = !1;
              break e;
            case 3:
              ft = z.stateNode.containerInfo, un = !0;
              break e;
            case 4:
              ft = z.stateNode.containerInfo, un = !0;
              break e;
          }
          z = z.return;
        }
        if (ft === null) throw Error(n(160));
        jx(E, I, w), ft = null, un = !1;
        var K = w.alternate;
        K !== null && (K.return = null), w.return = null;
      } catch (oe) {
        Ze(w, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Fx(s, r), s = s.sibling;
  }
  function Fx(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (cn(s, r), Nn(r), g & 4) {
          try {
            vs(3, r, r.return), ll(3, r);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
          try {
            vs(5, r, r.return);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 1:
        cn(s, r), Nn(r), g & 512 && c !== null && Ko(c, c.return);
        break;
      case 5:
        if (cn(s, r), Nn(r), g & 512 && c !== null && Ko(c, c.return), r.flags & 32) {
          var w = r.stateNode;
          try {
            Ut(w, "");
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        if (g & 4 && (w = r.stateNode, w != null)) {
          var E = r.memoizedProps, I = c !== null ? c.memoizedProps : E, z = r.type, K = r.updateQueue;
          if (r.updateQueue = null, K !== null) try {
            z === "input" && E.type === "radio" && E.name != null && Ne(w, E), Oi(z, I);
            var oe = Oi(z, E);
            for (I = 0; I < K.length; I += 2) {
              var ue = K[I], fe = K[I + 1];
              ue === "style" ? Gt(w, fe) : ue === "dangerouslySetInnerHTML" ? Fr(w, fe) : ue === "children" ? Ut(w, fe) : b(w, ue, fe, oe);
            }
            switch (z) {
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
                ge != null ? ht(w, !!E.multiple, ge, !1) : le !== !!E.multiple && (E.defaultValue != null ? ht(
                  w,
                  !!E.multiple,
                  E.defaultValue,
                  !0
                ) : ht(w, !!E.multiple, E.multiple ? [] : "", !1));
            }
            w[ss] = E;
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
          Ki(s.containerInfo);
        } catch (Se) {
          Ze(r, r.return, Se);
        }
        break;
      case 4:
        cn(s, r), Nn(r);
        break;
      case 13:
        cn(s, r), Nn(r), w = r.child, w.flags & 8192 && (E = w.memoizedState !== null, w.stateNode.isHidden = E, !E || w.alternate !== null && w.alternate.memoizedState !== null || (Yf = Ye())), g & 4 && qx(r);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, r.mode & 1 ? (vt = (oe = vt) || ue, cn(s, r), vt = oe) : cn(s, r), Nn(r), g & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !ue && (r.mode & 1) !== 0) for (ve = r, ue = r.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vs(4, le, le.return);
                  break;
                case 1:
                  Ko(le, le.return);
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
                  Ko(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Bx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : Bx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  w = fe.stateNode, oe ? (E = w.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none") : (z = fe.stateNode, K = fe.memoizedProps.style, I = K != null && K.hasOwnProperty("display") ? K.display : null, z.style.display = It("display", I));
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
        cn(s, r), Nn(r), g & 4 && qx(r);
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
            if (Lx(c)) {
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
            var E = Dx(r);
            Wf(r, E, w);
            break;
          case 3:
          case 4:
            var I = g.stateNode.containerInfo, z = Dx(r);
            Hf(r, z, I);
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
  function S2(r, s, c) {
    ve = r, zx(r);
  }
  function zx(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ve !== null; ) {
      var w = ve, E = w.child;
      if (w.tag === 22 && g) {
        var I = w.memoizedState !== null || al;
        if (!I) {
          var z = w.alternate, K = z !== null && z.memoizedState !== null || vt;
          z = al;
          var oe = vt;
          if (al = I, (vt = K) && !oe) for (ve = w; ve !== null; ) I = ve, K = I.child, I.tag === 22 && I.memoizedState !== null ? Vx(w) : K !== null ? (K.return = I, ve = K) : Vx(w);
          for (; E !== null; ) ve = E, zx(E), E = E.sibling;
          ve = w, al = z, vt = oe;
        }
        $x(r);
      } else (w.subtreeFlags & 8772) !== 0 && E !== null ? (E.return = w, ve = E) : $x(r);
    }
  }
  function $x(r) {
    for (; ve !== null; ) {
      var s = ve;
      if ((s.flags & 8772) !== 0) {
        var c = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              vt || ll(5, s);
              break;
            case 1:
              var g = s.stateNode;
              if (s.flags & 4 && !vt) if (c === null) g.componentDidMount();
              else {
                var w = s.elementType === s.type ? c.memoizedProps : ln(s.type, c.memoizedProps);
                g.componentDidUpdate(w, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var E = s.updateQueue;
              E !== null && Bw(s, E, g);
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
                Bw(s, I, c);
              }
              break;
            case 5:
              var z = s.stateNode;
              if (c === null && s.flags & 4) {
                c = z;
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
                    fe !== null && Ki(fe);
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
          vt || s.flags & 512 && Vf(s);
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
  function Bx(r) {
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
  function Vx(r) {
    for (; ve !== null; ) {
      var s = ve;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var c = s.return;
            try {
              ll(4, s);
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
              Vf(s);
            } catch (K) {
              Ze(s, E, K);
            }
            break;
          case 5:
            var I = s.return;
            try {
              Vf(s);
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
      var z = s.sibling;
      if (z !== null) {
        z.return = s.return, ve = z;
        break;
      }
      ve = s.return;
    }
  }
  var E2 = Math.ceil, ul = R.ReactCurrentDispatcher, Uf = R.ReactCurrentOwner, Jt = R.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, dt = 0, Dt = 0, Xo = gr(0), it = 0, ys = null, Zr = 0, cl = 0, Gf = 0, ws = null, Ct = null, Yf = 0, Qo = 1 / 0, Yn = null, fl = !1, Kf = null, br = null, dl = !1, _r = null, hl = 0, xs = 0, Xf = null, pl = -1, gl = 0;
  function xt() {
    return (Oe & 6) !== 0 ? Ye() : pl !== -1 ? pl : pl = Ye();
  }
  function Sr(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && dt !== 0 ? dt & -dt : a2.transition !== null ? (gl === 0 && (gl = Ea()), gl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : W0(r.type)), r);
  }
  function fn(r, s, c, g) {
    if (50 < xs) throw xs = 0, Xf = null, Error(n(185));
    ar(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (cl |= c), it === 4 && Er(r, dt)), kt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Qo = Ye() + 500, Va && vr()));
  }
  function kt(r, s) {
    var c = r.callbackNode;
    Tc(r, s);
    var g = To(r, r === ut ? dt : 0);
    if (g === 0) c !== null && xa(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && xa(c), s === 1) r.tag === 0 ? s2(Wx.bind(null, r)) : Tw(Wx.bind(null, r)), n2(function() {
        (Oe & 6) === 0 && vr();
      }), c = null;
      else {
        switch (j0(g)) {
          case 1:
            c = Vi;
            break;
          case 4:
            c = _a;
            break;
          case 16:
            c = Ro;
            break;
          case 536870912:
            c = Sa;
            break;
          default:
            c = Ro;
        }
        c = Jx(c, Hx.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function Hx(r, s) {
    if (pl = -1, gl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Zo() && r.callbackNode !== c) return null;
    var g = To(r, r === ut ? dt : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = ml(r, g);
    else {
      s = g;
      var w = Oe;
      Oe |= 2;
      var E = Gx();
      (ut !== r || dt !== s) && (Yn = null, Qo = Ye() + 500, eo(r, s));
      do
        try {
          R2();
          break;
        } catch (z) {
          Ux(r, z);
        }
      while (!0);
      pf(), ul.current = E, Oe = w, tt !== null ? s = 0 : (ut = null, dt = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (w = Hr(r), w !== 0 && (g = w, s = Qf(r, w))), s === 1) throw c = ys, eo(r, 0), Er(r, g), kt(r, Ye()), c;
      if (s === 6) Er(r, g);
      else {
        if (w = r.current.alternate, (g & 30) === 0 && !C2(w) && (s = ml(r, g), s === 2 && (E = Hr(r), E !== 0 && (g = E, s = Qf(r, E))), s === 1)) throw c = ys, eo(r, 0), Er(r, g), kt(r, Ye()), c;
        switch (r.finishedWork = w, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            to(r, Ct, Yn);
            break;
          case 3:
            if (Er(r, g), (g & 130023424) === g && (s = Yf + 500 - Ye(), 10 < s)) {
              if (To(r, 0) !== 0) break;
              if (w = r.suspendedLanes, (w & g) !== g) {
                xt(), r.pingedLanes |= r.suspendedLanes & w;
                break;
              }
              r.timeoutHandle = nf(to.bind(null, r, Ct, Yn), s);
              break;
            }
            to(r, Ct, Yn);
            break;
          case 4:
            if (Er(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, w = -1; 0 < g; ) {
              var I = 31 - At(g);
              E = 1 << I, I = s[I], I > w && (w = I), g &= ~E;
            }
            if (g = w, g = Ye() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * E2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = nf(to.bind(null, r, Ct, Yn), g);
              break;
            }
            to(r, Ct, Yn);
            break;
          case 5:
            to(r, Ct, Yn);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return kt(r, Ye()), r.callbackNode === c ? Hx.bind(null, r) : null;
  }
  function Qf(r, s) {
    var c = ws;
    return r.current.memoizedState.isDehydrated && (eo(r, s).flags |= 256), r = ml(r, s), r !== 2 && (s = Ct, Ct = c, s !== null && Zf(s)), r;
  }
  function Zf(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function C2(r) {
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
  function Er(r, s) {
    for (s &= ~Gf, s &= ~cl, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - At(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function Wx(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    Zo();
    var s = To(r, 0);
    if ((s & 1) === 0) return kt(r, Ye()), null;
    var c = ml(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = Hr(r);
      g !== 0 && (s = g, c = Qf(r, g));
    }
    if (c === 1) throw c = ys, eo(r, 0), Er(r, s), kt(r, Ye()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, to(r, Ct, Yn), kt(r, Ye()), null;
  }
  function Jf(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Qo = Ye() + 500, Va && vr());
    }
  }
  function Jr(r) {
    _r !== null && _r.tag === 0 && (Oe & 6) === 0 && Zo();
    var s = Oe;
    Oe |= 1;
    var c = Jt.transition, g = qe;
    try {
      if (Jt.transition = null, qe = 1, r) return r();
    } finally {
      qe = g, Jt.transition = c, Oe = s, (Oe & 6) === 0 && vr();
    }
  }
  function ed() {
    Dt = Xo.current, $e(Xo);
  }
  function eo(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, t2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (uf(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && $a();
          break;
        case 3:
          Go(), $e(_t), $e(pt), _f();
          break;
        case 5:
          xf(g);
          break;
        case 4:
          Go();
          break;
        case 13:
          $e(Ke);
          break;
        case 19:
          $e(Ke);
          break;
        case 10:
          gf(g.type._context);
          break;
        case 22:
        case 23:
          ed();
      }
      c = c.return;
    }
    if (ut = r, tt = r = Cr(r.current, null), dt = Dt = s, it = 0, ys = null, Gf = cl = Zr = 0, Ct = ws = null, Kr !== null) {
      for (s = 0; s < Kr.length; s++) if (c = Kr[s], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var w = g.next, E = c.pending;
        if (E !== null) {
          var I = E.next;
          E.next = w, g.next = I;
        }
        c.pending = g;
      }
      Kr = null;
    }
    return r;
  }
  function Ux(r, s) {
    do {
      var c = tt;
      try {
        if (pf(), Ja.current = rl, el) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var w = g.queue;
            w !== null && (w.pending = null), g = g.next;
          }
          el = !1;
        }
        if (Qr = 0, lt = ot = Xe = null, ds = !1, hs = 0, Uf.current = null, c === null || c.return === null) {
          it = 1, ys = s, tt = null;
          break;
        }
        e: {
          var E = r, I = c.return, z = c, K = s;
          if (s = dt, z.flags |= 32768, K !== null && typeof K == "object" && typeof K.then == "function") {
            var oe = K, ue = z, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = vx(I);
            if (ge !== null) {
              ge.flags &= -257, yx(ge, I, z, E, s), ge.mode & 1 && mx(E, oe, s), s = ge, K = oe;
              var we = s.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(K), s.updateQueue = Se;
              } else we.add(K);
              break e;
            } else {
              if ((s & 1) === 0) {
                mx(E, oe, s), td();
                break e;
              }
              K = Error(n(426));
            }
          } else if (Ve && z.mode & 1) {
            var et = vx(I);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), yx(et, I, z, E, s), df(Yo(K, z));
              break e;
            }
          }
          E = K = Yo(K, z), it !== 4 && (it = 2), ws === null ? ws = [E] : ws.push(E), E = I;
          do {
            switch (E.tag) {
              case 3:
                E.flags |= 65536, s &= -s, E.lanes |= s;
                var ne = px(E, K, s);
                $w(E, ne);
                break e;
              case 1:
                z = K;
                var J = E.type, re = E.stateNode;
                if ((E.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (br === null || !br.has(re)))) {
                  E.flags |= 65536, s &= -s, E.lanes |= s;
                  var he = gx(E, z, s);
                  $w(E, he);
                  break e;
                }
            }
            E = E.return;
          } while (E !== null);
        }
        Kx(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gx() {
    var r = ul.current;
    return ul.current = rl, r === null ? rl : r;
  }
  function td() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Zr & 268435455) === 0 && (cl & 268435455) === 0 || Er(ut, dt);
  }
  function ml(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = Gx();
    (ut !== r || dt !== s) && (Yn = null, eo(r, s));
    do
      try {
        k2();
        break;
      } catch (w) {
        Ux(r, w);
      }
    while (!0);
    if (pf(), Oe = c, ul.current = g, tt !== null) throw Error(n(261));
    return ut = null, dt = 0, it;
  }
  function k2() {
    for (; tt !== null; ) Yx(tt);
  }
  function R2() {
    for (; tt !== null && !_c(); ) Yx(tt);
  }
  function Yx(r) {
    var s = Zx(r.alternate, r, Dt);
    r.memoizedProps = r.pendingProps, s === null ? Kx(r) : tt = s, Uf.current = null;
  }
  function Kx(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = w2(c, s, Dt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = x2(c, s), c !== null) {
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
  function to(r, s, c) {
    var g = qe, w = Jt.transition;
    try {
      Jt.transition = null, qe = 1, N2(r, s, c, g);
    } finally {
      Jt.transition = w, qe = g;
    }
    return null;
  }
  function N2(r, s, c, g) {
    do
      Zo();
    while (_r !== null);
    if ((Oe & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var w = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var E = c.lanes | c.childLanes;
    if (lM(r, E), r === ut && (tt = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || dl || (dl = !0, Jx(Ro, function() {
      return Zo(), null;
    })), E = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || E) {
      E = Jt.transition, Jt.transition = null;
      var I = qe;
      qe = 1;
      var z = Oe;
      Oe |= 4, Uf.current = null, _2(r, c), Fx(c, r), YM(ef), Ra = !!Jc, ef = Jc = null, r.current = c, S2(c), ba(), Oe = z, qe = I, Jt.transition = E;
    } else r.current = c;
    if (dl && (dl = !1, _r = r, hl = w), E = r.pendingLanes, E === 0 && (br = null), Cc(c.stateNode), kt(r, Ye()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) w = s[c], g(w.value, { componentStack: w.stack, digest: w.digest });
    if (fl) throw fl = !1, r = Kf, Kf = null, r;
    return (hl & 1) !== 0 && r.tag !== 0 && Zo(), E = r.pendingLanes, (E & 1) !== 0 ? r === Xf ? xs++ : (xs = 0, Xf = r) : xs = 0, vr(), null;
  }
  function Zo() {
    if (_r !== null) {
      var r = j0(hl), s = Jt.transition, c = qe;
      try {
        if (Jt.transition = null, qe = 16 > r ? 16 : r, _r === null) var g = !1;
        else {
          if (r = _r, _r = null, hl = 0, (Oe & 6) !== 0) throw Error(n(331));
          var w = Oe;
          for (Oe |= 4, ve = r.current; ve !== null; ) {
            var E = ve, I = E.child;
            if ((ve.flags & 16) !== 0) {
              var z = E.deletions;
              if (z !== null) {
                for (var K = 0; K < z.length; K++) {
                  var oe = z[K];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vs(8, ue, E);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, ge = ue.return;
                      if (Ox(ue), ue === oe) {
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
                  vs(9, E, E.return);
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
              if (z = ve, (z.flags & 2048) !== 0) try {
                switch (z.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ll(9, z);
                }
              } catch (Ce) {
                Ze(z, z.return, Ce);
              }
              if (z === I) {
                ve = null;
                break e;
              }
              var he = z.sibling;
              if (he !== null) {
                he.return = z.return, ve = he;
                break e;
              }
              ve = z.return;
            }
          }
          if (Oe = w, vr(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
            Yt.onPostCommitFiberRoot(Vr, r);
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
  function Xx(r, s, c) {
    s = Yo(c, s), s = px(r, s, 1), r = wr(r, s, 1), s = xt(), r !== null && (ar(r, 1, s), kt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) Xx(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        Xx(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (br === null || !br.has(g))) {
          r = Yo(c, r), r = gx(s, r, 1), s = wr(s, r, 1), r = xt(), s !== null && (ar(s, 1, r), kt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function P2(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = xt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ye() - Yf ? eo(r, 0) : Gf |= c), kt(r, s);
  }
  function Qx(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Po, Po <<= 1, (Po & 130023424) === 0 && (Po = 4194304)));
    var c = xt();
    r = Wn(r, s), r !== null && (ar(r, s, c), kt(r, c));
  }
  function T2(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), Qx(r, c);
  }
  function I2(r, s) {
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
    g !== null && g.delete(s), Qx(r, c);
  }
  var Zx;
  Zx = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || _t.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Et = !1, y2(r, s, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, Ve && (s.flags & 1048576) !== 0 && Iw(s, Wa, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        sl(r, s), r = s.pendingProps;
        var w = zo(s, pt.current);
        Uo(s, c), w = Cf(null, s, g, r, w, c);
        var E = kf();
        return s.flags |= 1, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, St(g) ? (E = !0, Ba(s)) : E = !1, s.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, yf(s), w.updater = ol, s.stateNode = w, w._reactInternals = s, Af(s, g, r, c), s = Df(null, s, g, !0, E, c)) : (s.tag = 0, Ve && E && lf(s), wt(null, s, w, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (sl(r, s), r = s.pendingProps, w = g._init, g = w(g._payload), s.type = g, w = s.tag = M2(g), r = ln(g, r), w) {
            case 0:
              s = Lf(null, s, g, r, c);
              break e;
            case 1:
              s = Ex(null, s, g, r, c);
              break e;
            case 11:
              s = wx(null, s, g, r, c);
              break e;
            case 14:
              s = xx(null, s, g, ln(g.type, r), c);
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
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Lf(r, s, g, w, c);
      case 1:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Ex(r, s, g, w, c);
      case 3:
        e: {
          if (Cx(s), r === null) throw Error(n(387));
          g = s.pendingProps, E = s.memoizedState, w = E.element, zw(r, s), Qa(s, g, null, c);
          var I = s.memoizedState;
          if (g = I.element, E.isDehydrated) if (E = { element: g, isDehydrated: !1, cache: I.cache, pendingSuspenseBoundaries: I.pendingSuspenseBoundaries, transitions: I.transitions }, s.updateQueue.baseState = E, s.memoizedState = E, s.flags & 256) {
            w = Yo(Error(n(423)), s), s = kx(r, s, g, c, w);
            break e;
          } else if (g !== w) {
            w = Yo(Error(n(424)), s), s = kx(r, s, g, c, w);
            break e;
          } else for (Lt = pr(s.stateNode.containerInfo.firstChild), Ot = s, Ve = !0, an = null, c = qw(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Vo(), g === w) {
              s = Gn(r, s, c);
              break e;
            }
            wt(r, s, g, c);
          }
          s = s.child;
        }
        return s;
      case 5:
        return Vw(s), r === null && ff(s), g = s.type, w = s.pendingProps, E = r !== null ? r.memoizedProps : null, I = w.children, tf(g, w) ? I = null : E !== null && tf(g, E) && (s.flags |= 32), Sx(r, s), wt(r, s, I, c), s.child;
      case 6:
        return r === null && ff(s), null;
      case 13:
        return Rx(r, s, c);
      case 4:
        return wf(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Ho(s, null, g, c) : wt(r, s, g, c), s.child;
      case 11:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), wx(r, s, g, w, c);
      case 7:
        return wt(r, s, s.pendingProps, c), s.child;
      case 8:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, w = s.pendingProps, E = s.memoizedProps, I = w.value, Fe(Ya, g._currentValue), g._currentValue = I, E !== null) if (sn(E.value, I)) {
            if (E.children === w.children && !_t.current) {
              s = Gn(r, s, c);
              break e;
            }
          } else for (E = s.child, E !== null && (E.return = s); E !== null; ) {
            var z = E.dependencies;
            if (z !== null) {
              I = E.child;
              for (var K = z.firstContext; K !== null; ) {
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
                  E.lanes |= c, K = E.alternate, K !== null && (K.lanes |= c), mf(
                    E.return,
                    c,
                    s
                  ), z.lanes |= c;
                  break;
                }
                K = K.next;
              }
            } else if (E.tag === 10) I = E.type === s.type ? null : E.child;
            else if (E.tag === 18) {
              if (I = E.return, I === null) throw Error(n(341));
              I.lanes |= c, z = I.alternate, z !== null && (z.lanes |= c), mf(I, c, s), I = E.sibling;
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
          wt(r, s, w.children, c), s = s.child;
        }
        return s;
      case 9:
        return w = s.type, g = s.pendingProps.children, Uo(s, c), w = Qt(w), g = g(w), s.flags |= 1, wt(r, s, g, c), s.child;
      case 14:
        return g = s.type, w = ln(g, s.pendingProps), w = ln(g.type, w), xx(r, s, g, w, c);
      case 15:
        return bx(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), sl(r, s), s.tag = 1, St(g) ? (r = !0, Ba(s)) : r = !1, Uo(s, c), dx(s, g, w), Af(s, g, w, c), Df(null, s, g, !0, r, c);
      case 19:
        return Px(r, s, c);
      case 22:
        return _x(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function Jx(r, s) {
    return wa(r, s);
  }
  function A2(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(r, s, c, g) {
    return new A2(r, s, c, g);
  }
  function nd(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function M2(r) {
    if (typeof r == "function") return nd(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === V) return 11;
      if (r === H) return 14;
    }
    return 2;
  }
  function Cr(r, s) {
    var c = r.alternate;
    return c === null ? (c = en(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function vl(r, s, c, g, w, E) {
    var I = 2;
    if (g = r, typeof r == "function") nd(r) && (I = 1);
    else if (typeof r == "string") I = 5;
    else e: switch (r) {
      case A:
        return no(c.children, w, E, s);
      case O:
        I = 8, w |= 8;
        break;
      case j:
        return r = en(12, c, s, w | 2), r.elementType = j, r.lanes = E, r;
      case W:
        return r = en(13, c, s, w), r.elementType = W, r.lanes = E, r;
      case L:
        return r = en(19, c, s, w), r.elementType = L, r.lanes = E, r;
      case G:
        return yl(c, w, E, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case Y:
            I = 10;
            break e;
          case $:
            I = 9;
            break e;
          case V:
            I = 11;
            break e;
          case H:
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
  function no(r, s, c, g) {
    return r = en(7, r, g, s), r.lanes = c, r;
  }
  function yl(r, s, c, g) {
    return r = en(22, r, g, s), r.elementType = G, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function rd(r, s, c) {
    return r = en(6, r, null, s), r.lanes = c, r;
  }
  function od(r, s, c) {
    return s = en(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function O2(r, s, c, g, w) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hi(0), this.expirationTimes = Hi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hi(0), this.identifierPrefix = g, this.onRecoverableError = w, this.mutableSourceEagerHydrationData = null;
  }
  function id(r, s, c, g, w, E, I, z, K) {
    return r = new O2(r, s, c, z, K), s === 1 ? (s = 1, E === !0 && (s |= 8)) : s = 0, E = en(3, null, null, s), r.current = E, E.stateNode = r, E.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yf(E), r;
  }
  function L2(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function eb(r) {
    if (!r) return mr;
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
      if (St(c)) return Nw(r, c, s);
    }
    return s;
  }
  function tb(r, s, c, g, w, E, I, z, K) {
    return r = id(c, g, !0, r, w, E, I, z, K), r.context = eb(null), c = r.current, g = xt(), w = Sr(c), E = Un(g, w), E.callback = s ?? null, wr(c, E, w), r.current.lanes = w, ar(r, w, g), kt(r, g), r;
  }
  function wl(r, s, c, g) {
    var w = s.current, E = xt(), I = Sr(w);
    return c = eb(c), s.context === null ? s.context = c : s.pendingContext = c, s = Un(E, I), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = wr(w, s, I), r !== null && (fn(r, w, I, E), Xa(r, w, I)), I;
  }
  function xl(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function nb(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function sd(r, s) {
    nb(r, s), (r = r.alternate) && nb(r, s);
  }
  function D2() {
    return null;
  }
  var rb = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function ad(r) {
    this._internalRoot = r;
  }
  bl.prototype.render = ad.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    wl(r, s, null, null);
  }, bl.prototype.unmount = ad.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      Jr(function() {
        wl(null, r, null, null);
      }), s[$n] = null;
    }
  };
  function bl(r) {
    this._internalRoot = r;
  }
  bl.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = z0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < fr.length && s !== 0 && s < fr[c].priority; c++) ;
      fr.splice(c, 0, r), c === 0 && V0(r);
    }
  };
  function ld(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function _l(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function ob() {
  }
  function j2(r, s, c, g, w) {
    if (w) {
      if (typeof g == "function") {
        var E = g;
        g = function() {
          var oe = xl(I);
          E.call(oe);
        };
      }
      var I = tb(s, g, r, 0, null, !1, !1, "", ob);
      return r._reactRootContainer = I, r[$n] = I.current, os(r.nodeType === 8 ? r.parentNode : r), Jr(), I;
    }
    for (; w = r.lastChild; ) r.removeChild(w);
    if (typeof g == "function") {
      var z = g;
      g = function() {
        var oe = xl(K);
        z.call(oe);
      };
    }
    var K = id(r, 0, !1, null, null, !1, !1, "", ob);
    return r._reactRootContainer = K, r[$n] = K.current, os(r.nodeType === 8 ? r.parentNode : r), Jr(function() {
      wl(s, K, c, g);
    }), K;
  }
  function Sl(r, s, c, g, w) {
    var E = c._reactRootContainer;
    if (E) {
      var I = E;
      if (typeof w == "function") {
        var z = w;
        w = function() {
          var K = xl(I);
          z.call(K);
        };
      }
      wl(s, I, r, w);
    } else I = j2(c, s, r, w, g);
    return xl(I);
  }
  q0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = En(s.pendingLanes);
          c !== 0 && (Ic(s, c | 1), kt(s, Ye()), (Oe & 6) === 0 && (Qo = Ye() + 500, vr()));
        }
        break;
      case 13:
        Jr(function() {
          var g = Wn(r, 1);
          if (g !== null) {
            var w = xt();
            fn(g, r, 1, w);
          }
        }), sd(r, 1);
    }
  }, Ac = function(r) {
    if (r.tag === 13) {
      var s = Wn(r, 134217728);
      if (s !== null) {
        var c = xt();
        fn(s, r, 134217728, c);
      }
      sd(r, 134217728);
    }
  }, F0 = function(r) {
    if (r.tag === 13) {
      var s = Sr(r), c = Wn(r, s);
      if (c !== null) {
        var g = xt();
        fn(c, r, s, g);
      }
      sd(r, s);
    }
  }, z0 = function() {
    return qe;
  }, $0 = function(r, s) {
    var c = qe;
    try {
      return qe = r, s();
    } finally {
      qe = c;
    }
  }, ji = function(r, s, c) {
    switch (s) {
      case "input":
        if (Ee(r, c), s = c.name, c.type === "radio" && s != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < c.length; s++) {
            var g = c[s];
            if (g !== r && g.form === r.form) {
              var w = za(g);
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
        s = c.value, s != null && ht(r, !!c.multiple, s, !1);
    }
  }, pa = Jf, ga = Jr;
  var q2 = { usingClientEntryPoint: !1, Events: [as, qo, za, da, ha, Jf] }, bs = { findFiberByHostInstance: Wr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, F2 = { bundleType: bs.bundleType, version: bs.version, rendererPackageName: bs.rendererPackageName, rendererConfig: bs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: R.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = va(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: bs.findFiberByHostInstance || D2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!El.isDisabled && El.supportsFiber) try {
      Vr = El.inject(F2), Yt = El;
    } catch {
    }
  }
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q2, Rt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ld(s)) throw Error(n(200));
    return L2(r, s, null, c);
  }, Rt.createRoot = function(r, s) {
    if (!ld(r)) throw Error(n(299));
    var c = !1, g = "", w = rb;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), s = id(r, 1, !1, null, null, c, !1, g, w), r[$n] = s.current, os(r.nodeType === 8 ? r.parentNode : r), new ad(s);
  }, Rt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = va(s), r = r === null ? null : r.stateNode, r;
  }, Rt.flushSync = function(r) {
    return Jr(r);
  }, Rt.hydrate = function(r, s, c) {
    if (!_l(s)) throw Error(n(200));
    return Sl(null, r, s, !0, c);
  }, Rt.hydrateRoot = function(r, s, c) {
    if (!ld(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, w = !1, E = "", I = rb;
    if (c != null && (c.unstable_strictMode === !0 && (w = !0), c.identifierPrefix !== void 0 && (E = c.identifierPrefix), c.onRecoverableError !== void 0 && (I = c.onRecoverableError)), s = tb(s, null, r, 1, c ?? null, w, !1, E, I), r[$n] = s.current, os(r), g) for (r = 0; r < g.length; r++) c = g[r], w = c._getVersion, w = w(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, w] : s.mutableSourceEagerHydrationData.push(
      c,
      w
    );
    return new bl(s);
  }, Rt.render = function(r, s, c) {
    if (!_l(s)) throw Error(n(200));
    return Sl(null, r, s, !1, c);
  }, Rt.unmountComponentAtNode = function(r) {
    if (!_l(r)) throw Error(n(40));
    return r._reactRootContainer ? (Jr(function() {
      Sl(null, null, r, !1, function() {
        r._reactRootContainer = null, r[$n] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = Jf, Rt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!_l(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return Sl(r, s, c, !1, g);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
}
var db;
function FR() {
  if (db) return fd.exports;
  db = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), fd.exports = K2(), fd.exports;
}
var hb;
function X2() {
  if (hb) return Rl;
  hb = 1;
  var e = FR();
  return Rl.createRoot = e.createRoot, Rl.hydrateRoot = e.hydrateRoot, Rl;
}
var Q2 = X2();
let zR = k.createContext(
  /** @type {any} */
  null
);
function Z2() {
  let e = k.useContext(zR);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function J2() {
  return Z2().model;
}
function ro(e) {
  let t = J2(), n = k.useSyncExternalStore(
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
function eO(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = Q2.createRoot(t);
    return i.render(
      k.createElement(
        k.StrictMode,
        null,
        k.createElement(
          zR.Provider,
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
var tO = { value: () => {
} };
function Cu() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Ul(n);
}
function Ul(e) {
  this._ = e;
}
function nO(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Ul.prototype = Cu.prototype = {
  constructor: Ul,
  on: function(e, t) {
    var n = this._, o = nO(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = rO(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = pb(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = pb(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ul(e);
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
function rO(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function pb(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = tO, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ry = "http://www.w3.org/1999/xhtml";
const gb = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ry,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ku(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), gb.hasOwnProperty(t) ? { space: gb[t], local: e } : e;
}
function oO(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ry && t.documentElement.namespaceURI === ry ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function iO(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function $R(e) {
  var t = ku(e);
  return (t.local ? iO : oO)(t);
}
function sO() {
}
function Ay(e) {
  return e == null ? sO : function() {
    return this.querySelector(e);
  };
}
function aO(e) {
  typeof e != "function" && (e = Ay(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new Bt(o, this._parents);
}
function lO(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function uO() {
  return [];
}
function BR(e) {
  return e == null ? uO : function() {
    return this.querySelectorAll(e);
  };
}
function cO(e) {
  return function() {
    return lO(e.apply(this, arguments));
  };
}
function fO(e) {
  typeof e == "function" ? e = cO(e) : e = BR(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new Bt(o, i);
}
function VR(e) {
  return function() {
    return this.matches(e);
  };
}
function HR(e) {
  return function(t) {
    return t.matches(e);
  };
}
var dO = Array.prototype.find;
function hO(e) {
  return function() {
    return dO.call(this.children, e);
  };
}
function pO() {
  return this.firstElementChild;
}
function gO(e) {
  return this.select(e == null ? pO : hO(typeof e == "function" ? e : HR(e)));
}
var mO = Array.prototype.filter;
function vO() {
  return Array.from(this.children);
}
function yO(e) {
  return function() {
    return mO.call(this.children, e);
  };
}
function wO(e) {
  return this.selectAll(e == null ? vO : yO(typeof e == "function" ? e : HR(e)));
}
function xO(e) {
  typeof e != "function" && (e = VR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Bt(o, this._parents);
}
function WR(e) {
  return new Array(e.length);
}
function bO() {
  return new Bt(this._enter || this._groups.map(WR), this._parents);
}
function eu(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
eu.prototype = {
  constructor: eu,
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
function _O(e) {
  return function() {
    return e;
  };
}
function SO(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new eu(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function EO(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new eu(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function CO(e) {
  return e.__data__;
}
function kO(e, t) {
  if (!arguments.length) return Array.from(this, CO);
  var n = t ? EO : SO, o = this._parents, i = this._groups;
  typeof e != "function" && (e = _O(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = RO(e.call(h, h && h.__data__, d, o)), S = v.length, y = u[d] = new Array(S), x = l[d] = new Array(S), _ = f[d] = new Array(m);
    n(h, p, y, x, _, v, t);
    for (var C = 0, b = 0, R, P; C < S; ++C)
      if (R = y[C]) {
        for (C >= b && (b = C + 1); !(P = x[b]) && ++b < S; ) ;
        R._next = P || null;
      }
  }
  return l = new Bt(l, o), l._enter = u, l._exit = f, l;
}
function RO(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function NO() {
  return new Bt(this._exit || this._groups.map(WR), this._parents);
}
function PO(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function TO(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, S = 0; S < p; ++S)
      (v = d[S] || h[S]) && (m[S] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new Bt(u, this._parents);
}
function IO() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function AO(e) {
  e || (e = MO);
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
function MO(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function OO() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function LO() {
  return Array.from(this);
}
function DO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function jO() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function qO() {
  return !this.node();
}
function FO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function zO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function $O(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function BO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function VO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function HO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function WO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function UO(e, t) {
  var n = ku(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? $O : zO : typeof t == "function" ? n.local ? WO : HO : n.local ? VO : BO)(n, t));
}
function UR(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function GO(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function YO(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function KO(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function XO(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? GO : typeof t == "function" ? KO : YO)(e, t, n ?? "")) : fi(this.node(), e);
}
function fi(e, t) {
  return e.style.getPropertyValue(t) || UR(e).getComputedStyle(e, null).getPropertyValue(t);
}
function QO(e) {
  return function() {
    delete this[e];
  };
}
function ZO(e, t) {
  return function() {
    this[e] = t;
  };
}
function JO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function eL(e, t) {
  return arguments.length > 1 ? this.each((t == null ? QO : typeof t == "function" ? JO : ZO)(e, t)) : this.node()[e];
}
function GR(e) {
  return e.trim().split(/^|\s+/);
}
function My(e) {
  return e.classList || new YR(e);
}
function YR(e) {
  this._node = e, this._names = GR(e.getAttribute("class") || "");
}
YR.prototype = {
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
function KR(e, t) {
  for (var n = My(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function XR(e, t) {
  for (var n = My(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function tL(e) {
  return function() {
    KR(this, e);
  };
}
function nL(e) {
  return function() {
    XR(this, e);
  };
}
function rL(e, t) {
  return function() {
    (t.apply(this, arguments) ? KR : XR)(this, e);
  };
}
function oL(e, t) {
  var n = GR(e + "");
  if (arguments.length < 2) {
    for (var o = My(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? rL : t ? tL : nL)(n, t));
}
function iL() {
  this.textContent = "";
}
function sL(e) {
  return function() {
    this.textContent = e;
  };
}
function aL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function lL(e) {
  return arguments.length ? this.each(e == null ? iL : (typeof e == "function" ? aL : sL)(e)) : this.node().textContent;
}
function uL() {
  this.innerHTML = "";
}
function cL(e) {
  return function() {
    this.innerHTML = e;
  };
}
function fL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function dL(e) {
  return arguments.length ? this.each(e == null ? uL : (typeof e == "function" ? fL : cL)(e)) : this.node().innerHTML;
}
function hL() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function pL() {
  return this.each(hL);
}
function gL() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function mL() {
  return this.each(gL);
}
function vL(e) {
  var t = typeof e == "function" ? e : $R(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function yL() {
  return null;
}
function wL(e, t) {
  var n = typeof e == "function" ? e : $R(e), o = t == null ? yL : typeof t == "function" ? t : Ay(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function xL() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bL() {
  return this.each(xL);
}
function _L() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function SL() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function EL(e) {
  return this.select(e ? SL : _L);
}
function CL(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function kL(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function RL(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function NL(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function PL(e, t, n) {
  return function() {
    var o = this.__on, i, a = kL(t);
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
function TL(e, t, n) {
  var o = RL(e + ""), i, a = o.length, l;
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
  for (u = t ? PL : NL, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function QR(e, t, n) {
  var o = UR(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function IL(e, t) {
  return function() {
    return QR(this, e, t);
  };
}
function AL(e, t) {
  return function() {
    return QR(this, e, t.apply(this, arguments));
  };
}
function ML(e, t) {
  return this.each((typeof t == "function" ? AL : IL)(e, t));
}
function* OL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var ZR = [null];
function Bt(e, t) {
  this._groups = e, this._parents = t;
}
function Xs() {
  return new Bt([[document.documentElement]], ZR);
}
function LL() {
  return this;
}
Bt.prototype = Xs.prototype = {
  constructor: Bt,
  select: aO,
  selectAll: fO,
  selectChild: gO,
  selectChildren: wO,
  filter: xO,
  data: kO,
  enter: bO,
  exit: NO,
  join: PO,
  merge: TO,
  selection: LL,
  order: IO,
  sort: AO,
  call: OO,
  nodes: LO,
  node: DO,
  size: jO,
  empty: qO,
  each: FO,
  attr: UO,
  style: XO,
  property: eL,
  classed: oL,
  text: lL,
  html: dL,
  raise: pL,
  lower: mL,
  append: vL,
  insert: wL,
  remove: bL,
  clone: EL,
  datum: CL,
  on: TL,
  dispatch: ML,
  [Symbol.iterator]: OL
};
function zt(e) {
  return typeof e == "string" ? new Bt([[document.querySelector(e)]], [document.documentElement]) : new Bt([[e]], ZR);
}
function DL(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function hn(e, t) {
  if (e = DL(e), t === void 0 && (t = e.currentTarget), t) {
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
const jL = { passive: !1 }, Os = { capture: !0, passive: !1 };
function pd(e) {
  e.stopImmediatePropagation();
}
function si(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function JR(e) {
  var t = e.document.documentElement, n = zt(e).on("dragstart.drag", si, Os);
  "onselectstart" in t ? n.on("selectstart.drag", si, Os) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function eN(e, t) {
  var n = e.document.documentElement, o = zt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", si, Os), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Nl = (e) => () => e;
function oy(e, {
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
oy.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function qL(e) {
  return !e.ctrlKey && !e.button;
}
function FL() {
  return this.parentNode;
}
function zL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function $L() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tN() {
  var e = qL, t = FL, n = zL, o = $L, i = {}, a = Cu("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(R) {
    R.on("mousedown.drag", v).filter(o).on("touchstart.drag", x).on("touchmove.drag", _, jL).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(R, P) {
    if (!(h || !e.call(this, R, P))) {
      var T = b(this, t.call(this, R, P), R, P, "mouse");
      T && (zt(R.view).on("mousemove.drag", S, Os).on("mouseup.drag", y, Os), JR(R.view), pd(R), d = !1, u = R.clientX, f = R.clientY, T("start", R));
    }
  }
  function S(R) {
    if (si(R), !d) {
      var P = R.clientX - u, T = R.clientY - f;
      d = P * P + T * T > p;
    }
    i.mouse("drag", R);
  }
  function y(R) {
    zt(R.view).on("mousemove.drag mouseup.drag", null), eN(R.view, d), si(R), i.mouse("end", R);
  }
  function x(R, P) {
    if (e.call(this, R, P)) {
      var T = R.changedTouches, A = t.call(this, R, P), O = T.length, j, Y;
      for (j = 0; j < O; ++j)
        (Y = b(this, A, R, P, T[j].identifier, T[j])) && (pd(R), Y("start", R, T[j]));
    }
  }
  function _(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (si(R), O("drag", R, P[A]));
  }
  function C(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (pd(R), O("end", R, P[A]));
  }
  function b(R, P, T, A, O, j) {
    var Y = a.copy(), $ = hn(j || T, P), V, W, L;
    if ((L = n.call(R, new oy("beforestart", {
      sourceEvent: T,
      target: m,
      identifier: O,
      active: l,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), A)) != null)
      return V = L.x - $[0] || 0, W = L.y - $[1] || 0, function H(q, G, M) {
        var F = $, Q;
        switch (q) {
          case "start":
            i[O] = H, Q = l++;
            break;
          case "end":
            delete i[O], --l;
          // falls through
          case "drag":
            $ = hn(M || G, P), Q = l;
            break;
        }
        Y.call(
          q,
          R,
          new oy(q, {
            sourceEvent: G,
            subject: L,
            target: m,
            identifier: O,
            active: Q,
            x: $[0] + V,
            y: $[1] + W,
            dx: $[0] - F[0],
            dy: $[1] - F[1],
            dispatch: Y
          }),
          A
        );
      };
  }
  return m.filter = function(R) {
    return arguments.length ? (e = typeof R == "function" ? R : Nl(!!R), m) : e;
  }, m.container = function(R) {
    return arguments.length ? (t = typeof R == "function" ? R : Nl(R), m) : t;
  }, m.subject = function(R) {
    return arguments.length ? (n = typeof R == "function" ? R : Nl(R), m) : n;
  }, m.touchable = function(R) {
    return arguments.length ? (o = typeof R == "function" ? R : Nl(!!R), m) : o;
  }, m.on = function() {
    var R = a.on.apply(a, arguments);
    return R === a ? m : R;
  }, m.clickDistance = function(R) {
    return arguments.length ? (p = (R = +R) * R, m) : Math.sqrt(p);
  }, m;
}
function Oy(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function nN(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function Qs() {
}
var Ls = 0.7, tu = 1 / Ls, ai = "\\s*([+-]?\\d+)\\s*", Ds = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", An = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", BL = /^#([0-9a-f]{3,8})$/, VL = new RegExp(`^rgb\\(${ai},${ai},${ai}\\)$`), HL = new RegExp(`^rgb\\(${An},${An},${An}\\)$`), WL = new RegExp(`^rgba\\(${ai},${ai},${ai},${Ds}\\)$`), UL = new RegExp(`^rgba\\(${An},${An},${An},${Ds}\\)$`), GL = new RegExp(`^hsl\\(${Ds},${An},${An}\\)$`), YL = new RegExp(`^hsla\\(${Ds},${An},${An},${Ds}\\)$`), mb = {
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
Oy(Qs, co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vb,
  // Deprecated! Use color.formatHex.
  formatHex: vb,
  formatHex8: KL,
  formatHsl: XL,
  formatRgb: yb,
  toString: yb
});
function vb() {
  return this.rgb().formatHex();
}
function KL() {
  return this.rgb().formatHex8();
}
function XL() {
  return rN(this).formatHsl();
}
function yb() {
  return this.rgb().formatRgb();
}
function co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = BL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? wb(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Pl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Pl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = VL.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = HL.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = WL.exec(e)) ? Pl(t[1], t[2], t[3], t[4]) : (t = UL.exec(e)) ? Pl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = GL.exec(e)) ? _b(t[1], t[2] / 100, t[3] / 100, 1) : (t = YL.exec(e)) ? _b(t[1], t[2] / 100, t[3] / 100, t[4]) : mb.hasOwnProperty(e) ? wb(mb[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function wb(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Pl(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Nt(e, t, n, o);
}
function QL(e) {
  return e instanceof Qs || (e = co(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function iy(e, t, n, o) {
  return arguments.length === 1 ? QL(e) : new Nt(e, t, n, o ?? 1);
}
function Nt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Oy(Nt, iy, nN(Qs, {
  brighter(e) {
    return e = e == null ? tu : Math.pow(tu, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ls : Math.pow(Ls, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(ao(this.r), ao(this.g), ao(this.b), nu(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xb,
  // Deprecated! Use color.formatHex.
  formatHex: xb,
  formatHex8: ZL,
  formatRgb: bb,
  toString: bb
}));
function xb() {
  return `#${so(this.r)}${so(this.g)}${so(this.b)}`;
}
function ZL() {
  return `#${so(this.r)}${so(this.g)}${so(this.b)}${so((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bb() {
  const e = nu(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ao(this.r)}, ${ao(this.g)}, ${ao(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function nu(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ao(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function so(e) {
  return e = ao(e), (e < 16 ? "0" : "") + e.toString(16);
}
function _b(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new pn(e, t, n, o);
}
function rN(e) {
  if (e instanceof pn) return new pn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qs || (e = co(e)), !e) return new pn();
  if (e instanceof pn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new pn(l, u, f, e.opacity);
}
function JL(e, t, n, o) {
  return arguments.length === 1 ? rN(e) : new pn(e, t, n, o ?? 1);
}
function pn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Oy(pn, JL, nN(Qs, {
  brighter(e) {
    return e = e == null ? tu : Math.pow(tu, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ls : Math.pow(Ls, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Nt(
      gd(e >= 240 ? e - 240 : e + 120, i, o),
      gd(e, i, o),
      gd(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new pn(Sb(this.h), Tl(this.s), Tl(this.l), nu(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = nu(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Sb(this.h)}, ${Tl(this.s) * 100}%, ${Tl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Sb(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Tl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function gd(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ly = (e) => () => e;
function eD(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function tD(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function nD(e) {
  return (e = +e) == 1 ? oN : function(t, n) {
    return n - t ? tD(t, n, e) : Ly(isNaN(t) ? n : t);
  };
}
function oN(e, t) {
  var n = t - e;
  return n ? eD(e, n) : Ly(isNaN(e) ? t : e);
}
const ru = (function e(t) {
  var n = nD(t);
  function o(i, a) {
    var l = n((i = iy(i)).r, (a = iy(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = oN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function rD(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function oD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function iD(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = As(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function sD(e, t) {
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
function aD(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = As(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var sy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, md = new RegExp(sy.source, "g");
function lD(e) {
  return function() {
    return e;
  };
}
function uD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function iN(e, t) {
  var n = sy.lastIndex = md.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = sy.exec(e)) && (i = md.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Pn(o, i) })), n = md.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? uD(f[0].x) : lD(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function As(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? Ly(t) : (n === "number" ? Pn : n === "string" ? (o = co(t)) ? (t = o, ru) : iN : t instanceof co ? ru : t instanceof Date ? sD : oD(t) ? rD : Array.isArray(t) ? iD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? aD : Pn)(e, t);
}
var Eb = 180 / Math.PI, ay = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function sN(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * Eb,
    skewX: Math.atan(f) * Eb,
    scaleX: l,
    scaleY: u
  };
}
var Il;
function cD(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ay : sN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function fD(e) {
  return e == null || (Il || (Il = document.createElementNS("http://www.w3.org/2000/svg", "g")), Il.setAttribute("transform", e), !(e = Il.transform.baseVal.consolidate())) ? ay : (e = e.matrix, sN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function aN(e, t, n, o) {
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
var dD = aN(cD, "px, ", "px)", "deg)"), hD = aN(fD, ", ", ")", ")"), pD = 1e-12;
function Cb(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function gD(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function mD(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Gl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, S = p - f, y = v * v + S * S, x, _;
    if (y < pD)
      _ = Math.log(m / d) / t, x = function(A) {
        return [
          u + A * v,
          f + A * S,
          d * Math.exp(t * A * _)
        ];
      };
    else {
      var C = Math.sqrt(y), b = (m * m - d * d + o * y) / (2 * d * n * C), R = (m * m - d * d - o * y) / (2 * m * n * C), P = Math.log(Math.sqrt(b * b + 1) - b), T = Math.log(Math.sqrt(R * R + 1) - R);
      _ = (T - P) / t, x = function(A) {
        var O = A * _, j = Cb(P), Y = d / (n * C) * (j * mD(t * O + P) - gD(P));
        return [
          u + Y * v,
          f + Y * S,
          d * j / Cb(t * O + P)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return i.rho = function(a) {
    var l = Math.max(1e-3, +a), u = l * l, f = u * u;
    return e(l, u, f);
  }, i;
})(Math.SQRT2, 2, 4);
var di = 0, ks = 0, Ss = 0, lN = 1e3, ou, Rs, iu = 0, fo = 0, Ru = 0, js = typeof performance == "object" && performance.now ? performance : Date, uN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Dy() {
  return fo || (uN(vD), fo = js.now() + Ru);
}
function vD() {
  fo = 0;
}
function su() {
  this._call = this._time = this._next = null;
}
su.prototype = cN.prototype = {
  constructor: su,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Dy() : +n) + (t == null ? 0 : +t), !this._next && Rs !== this && (Rs ? Rs._next = this : ou = this, Rs = this), this._call = e, this._time = n, ly();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ly());
  }
};
function cN(e, t, n) {
  var o = new su();
  return o.restart(e, t, n), o;
}
function yD() {
  Dy(), ++di;
  for (var e = ou, t; e; )
    (t = fo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --di;
}
function kb() {
  fo = (iu = js.now()) + Ru, di = ks = 0;
  try {
    yD();
  } finally {
    di = 0, xD(), fo = 0;
  }
}
function wD() {
  var e = js.now(), t = e - iu;
  t > lN && (Ru -= t, iu = e);
}
function xD() {
  for (var e, t = ou, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ou = n);
  Rs = e, ly(o);
}
function ly(e) {
  if (!di) {
    ks && (ks = clearTimeout(ks));
    var t = e - fo;
    t > 24 ? (e < 1 / 0 && (ks = setTimeout(kb, e - js.now() - Ru)), Ss && (Ss = clearInterval(Ss))) : (Ss || (iu = js.now(), Ss = setInterval(wD, lN)), di = 1, uN(kb));
  }
}
function Rb(e, t, n) {
  var o = new su();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var bD = Cu("start", "end", "cancel", "interrupt"), _D = [], fN = 0, Nb = 1, uy = 2, Yl = 3, Pb = 4, cy = 5, Kl = 6;
function Nu(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  SD(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: bD,
    tween: _D,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: fN
  });
}
function jy(e, t) {
  var n = xn(e, t);
  if (n.state > fN) throw new Error("too late; already scheduled");
  return n;
}
function Dn(e, t) {
  var n = xn(e, t);
  if (n.state > Yl) throw new Error("too late; already running");
  return n;
}
function xn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function SD(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = cN(a, 0, n.time);
  function a(d) {
    n.state = Nb, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== Nb) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Yl) return Rb(l);
        v.state === Pb ? (v.state = Kl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Kl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (Rb(function() {
      n.state === Yl && (n.state = Pb, n.timer.restart(u, n.delay, n.time), u(d));
    }), n.state = uy, n.on.call("start", e, e.__data__, n.index, n.group), n.state === uy) {
      for (n.state = Yl, i = new Array(m = n.tween.length), h = 0, p = -1; h < m; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = v);
      i.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = cy, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(e, h);
    n.state === cy && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Kl, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Xl(e, t) {
  var n = e.__transition, o, i, a = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        a = !1;
        continue;
      }
      i = o.state > uy && o.state < cy, o.state = Kl, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    a && delete e.__transition;
  }
}
function ED(e) {
  return this.each(function() {
    Xl(this, e);
  });
}
function CD(e, t) {
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
function kD(e, t, n) {
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
function RD(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = xn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? CD : kD)(n, e, t));
}
function qy(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = Dn(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return xn(i, o).value[t];
  };
}
function dN(e, t) {
  var n;
  return (typeof t == "number" ? Pn : t instanceof co ? ru : (n = co(t)) ? (t = n, ru) : iN)(e, t);
}
function ND(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function PD(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function TD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function ID(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function AD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function MD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function OD(e, t) {
  var n = ku(e), o = n === "transform" ? hD : dN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? MD : AD)(n, o, qy(this, "attr." + e, t)) : t == null ? (n.local ? PD : ND)(n) : (n.local ? ID : TD)(n, o, t));
}
function LD(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function DD(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function jD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && DD(e, a)), n;
  }
  return i._value = t, i;
}
function qD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && LD(e, a)), n;
  }
  return i._value = t, i;
}
function FD(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = ku(e);
  return this.tween(n, (o.local ? jD : qD)(o, t));
}
function zD(e, t) {
  return function() {
    jy(this, e).delay = +t.apply(this, arguments);
  };
}
function $D(e, t) {
  return t = +t, function() {
    jy(this, e).delay = t;
  };
}
function BD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zD : $D)(t, e)) : xn(this.node(), t).delay;
}
function VD(e, t) {
  return function() {
    Dn(this, e).duration = +t.apply(this, arguments);
  };
}
function HD(e, t) {
  return t = +t, function() {
    Dn(this, e).duration = t;
  };
}
function WD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? VD : HD)(t, e)) : xn(this.node(), t).duration;
}
function UD(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Dn(this, e).ease = t;
  };
}
function GD(e) {
  var t = this._id;
  return arguments.length ? this.each(UD(t, e)) : xn(this.node(), t).ease;
}
function YD(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Dn(this, e).ease = n;
  };
}
function KD(e) {
  if (typeof e != "function") throw new Error();
  return this.each(YD(this._id, e));
}
function XD(e) {
  typeof e != "function" && (e = VR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Jn(o, this._parents, this._name, this._id);
}
function QD(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Jn(l, this._parents, this._name, this._id);
}
function ZD(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function JD(e, t, n) {
  var o, i, a = ZD(t) ? jy : Dn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function ej(e, t) {
  var n = this._id;
  return arguments.length < 2 ? xn(this.node(), n).on.on(e) : this.each(JD(n, e, t));
}
function tj(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function nj() {
  return this.on("end.remove", tj(this._id));
}
function rj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ay(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, Nu(d[m], t, n, m, d, xn(h, n)));
  return new Jn(a, this._parents, t, n);
}
function oj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = BR(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, S = xn(h, n), y = 0, x = m.length; y < x; ++y)
          (v = m[y]) && Nu(v, t, n, y, m, S);
        a.push(m), l.push(h);
      }
  return new Jn(a, l, t, n);
}
var ij = Xs.prototype.constructor;
function sj() {
  return new ij(this._groups, this._parents);
}
function aj(e, t) {
  var n, o, i;
  return function() {
    var a = fi(this, e), l = (this.style.removeProperty(e), fi(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function hN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function lj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = fi(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function uj(e, t, n) {
  var o, i, a;
  return function() {
    var l = fi(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), fi(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function cj(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Dn(this, e), d = f.on, h = f.value[a] == null ? u || (u = hN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function fj(e, t, n) {
  var o = (e += "") == "transform" ? dD : dN;
  return t == null ? this.styleTween(e, aj(e, o)).on("end.style." + e, hN(e)) : typeof t == "function" ? this.styleTween(e, uj(e, o, qy(this, "style." + e, t))).each(cj(this._id, e)) : this.styleTween(e, lj(e, o, t), n).on("end.style." + e, null);
}
function dj(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function hj(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && dj(e, l, n)), o;
  }
  return a._value = t, a;
}
function pj(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, hj(e, t, n ?? ""));
}
function gj(e) {
  return function() {
    this.textContent = e;
  };
}
function mj(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function vj(e) {
  return this.tween("text", typeof e == "function" ? mj(qy(this, "text", e)) : gj(e == null ? "" : e + ""));
}
function yj(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function wj(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && yj(i)), t;
  }
  return o._value = e, o;
}
function xj(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, wj(e));
}
function bj() {
  for (var e = this._name, t = this._id, n = pN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = xn(f, t);
        Nu(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Jn(o, this._parents, e, n);
}
function _j() {
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
var Sj = 0;
function Jn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function pN() {
  return ++Sj;
}
var Kn = Xs.prototype;
Jn.prototype = {
  constructor: Jn,
  select: rj,
  selectAll: oj,
  selectChild: Kn.selectChild,
  selectChildren: Kn.selectChildren,
  filter: XD,
  merge: QD,
  selection: sj,
  transition: bj,
  call: Kn.call,
  nodes: Kn.nodes,
  node: Kn.node,
  size: Kn.size,
  empty: Kn.empty,
  each: Kn.each,
  on: ej,
  attr: OD,
  attrTween: FD,
  style: fj,
  styleTween: pj,
  text: vj,
  textTween: xj,
  remove: nj,
  tween: RD,
  delay: BD,
  duration: WD,
  ease: GD,
  easeVarying: KD,
  end: _j,
  [Symbol.iterator]: Kn[Symbol.iterator]
};
function Ej(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Cj = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ej
};
function kj(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Rj(e) {
  var t, n;
  e instanceof Jn ? (t = e._id, e = e._name) : (t = pN(), (n = Cj).time = Dy(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && Nu(f, e, t, d, l, n || kj(f, t));
  return new Jn(o, this._parents, e, t);
}
Xs.prototype.interrupt = ED;
Xs.prototype.transition = Rj;
const Al = (e) => () => e;
function Nj(e, {
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
var Pu = new Qn(1, 0, 0);
gN.prototype = Qn.prototype;
function gN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Pu;
  return e.__zoom;
}
function vd(e) {
  e.stopImmediatePropagation();
}
function Es(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pj(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Tj() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Tb() {
  return this.__zoom || Pu;
}
function Ij(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Aj() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mj(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function mN() {
  var e = Pj, t = Tj, n = Mj, o = Ij, i = Aj, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Gl, d = Cu("start", "zoom", "end"), h, p, m, v = 500, S = 150, y = 0, x = 10;
  function _(L) {
    L.property("__zoom", Tb).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", j).on("dblclick.zoom", Y).filter(i).on("touchstart.zoom", $).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", W).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(L, H, q, G) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Tb), L !== M ? P(L, H, q, G) : M.interrupt().each(function() {
      T(this, arguments).event(G).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, _.scaleBy = function(L, H, q, G) {
    _.scaleTo(L, function() {
      var M = this.__zoom.k, F = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * F;
    }, q, G);
  }, _.scaleTo = function(L, H, q, G) {
    _.transform(L, function() {
      var M = t.apply(this, arguments), F = this.__zoom, Q = q == null ? R(M) : typeof q == "function" ? q.apply(this, arguments) : q, D = F.invert(Q), U = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(b(C(F, U), Q, D), M, l);
    }, q, G);
  }, _.translateBy = function(L, H, q, G) {
    _.transform(L, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof q == "function" ? q.apply(this, arguments) : q
      ), t.apply(this, arguments), l);
    }, null, G);
  }, _.translateTo = function(L, H, q, G, M) {
    _.transform(L, function() {
      var F = t.apply(this, arguments), Q = this.__zoom, D = G == null ? R(F) : typeof G == "function" ? G.apply(this, arguments) : G;
      return n(Pu.translate(D[0], D[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof q == "function" ? -q.apply(this, arguments) : -q
      ), F, l);
    }, G, M);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Qn(H, L.x, L.y);
  }
  function b(L, H, q) {
    var G = H[0] - q[0] * L.k, M = H[1] - q[1] * L.k;
    return G === L.x && M === L.y ? L : new Qn(L.k, G, M);
  }
  function R(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function P(L, H, q, G) {
    L.on("start.zoom", function() {
      T(this, arguments).event(G).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(G).end();
    }).tween("zoom", function() {
      var M = this, F = arguments, Q = T(M, F).event(G), D = t.apply(M, F), U = q == null ? R(D) : typeof q == "function" ? q.apply(M, F) : q, ie = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), B = M.__zoom, Z = typeof H == "function" ? H.apply(M, F) : H, ee = f(B.invert(U).concat(ie / B.k), Z.invert(U).concat(ie / Z.k));
      return function(X) {
        if (X === 1) X = Z;
        else {
          var te = ee(X), se = ie / te[2];
          X = new Qn(se, U[0] - te[0] * se, U[1] - te[1] * se);
        }
        Q.zoom(null, X);
      };
    });
  }
  function T(L, H, q) {
    return !q && L.__zooming || new A(L, H);
  }
  function A(L, H) {
    this.that = L, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(L, H), this.taps = 0;
  }
  A.prototype = {
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
      var H = zt(this.that).datum();
      d.call(
        L,
        this.that,
        new Nj(L, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: d
        }),
        H
      );
    }
  };
  function O(L, ...H) {
    if (!e.apply(this, arguments)) return;
    var q = T(this, H).event(L), G = this.__zoom, M = Math.max(a[0], Math.min(a[1], G.k * Math.pow(2, o.apply(this, arguments)))), F = hn(L);
    if (q.wheel)
      (q.mouse[0][0] !== F[0] || q.mouse[0][1] !== F[1]) && (q.mouse[1] = G.invert(q.mouse[0] = F)), clearTimeout(q.wheel);
    else {
      if (G.k === M) return;
      q.mouse = [F, G.invert(F)], Xl(this), q.start();
    }
    Es(L), q.wheel = setTimeout(Q, S), q.zoom("mouse", n(b(C(G, M), q.mouse[0], q.mouse[1]), q.extent, l));
    function Q() {
      q.wheel = null, q.end();
    }
  }
  function j(L, ...H) {
    if (m || !e.apply(this, arguments)) return;
    var q = L.currentTarget, G = T(this, H, !0).event(L), M = zt(L.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", ie, !0), F = hn(L, q), Q = L.clientX, D = L.clientY;
    JR(L.view), vd(L), G.mouse = [F, this.__zoom.invert(F)], Xl(this), G.start();
    function U(B) {
      if (Es(B), !G.moved) {
        var Z = B.clientX - Q, ee = B.clientY - D;
        G.moved = Z * Z + ee * ee > y;
      }
      G.event(B).zoom("mouse", n(b(G.that.__zoom, G.mouse[0] = hn(B, q), G.mouse[1]), G.extent, l));
    }
    function ie(B) {
      M.on("mousemove.zoom mouseup.zoom", null), eN(B.view, G.moved), Es(B), G.event(B).end();
    }
  }
  function Y(L, ...H) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom, G = hn(L.changedTouches ? L.changedTouches[0] : L, this), M = q.invert(G), F = q.k * (L.shiftKey ? 0.5 : 2), Q = n(b(C(q, F), G, M), t.apply(this, H), l);
      Es(L), u > 0 ? zt(this).transition().duration(u).call(P, Q, G, L) : zt(this).call(_.transform, Q, G, L);
    }
  }
  function $(L, ...H) {
    if (e.apply(this, arguments)) {
      var q = L.touches, G = q.length, M = T(this, H, L.changedTouches.length === G).event(L), F, Q, D, U;
      for (vd(L), Q = 0; Q < G; ++Q)
        D = q[Q], U = hn(D, this), U = [U, this.__zoom.invert(U), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== U[2] && (M.touch1 = U, M.taps = 0) : (M.touch0 = U, F = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), F && (M.taps < 2 && (p = U[0], h = setTimeout(function() {
        h = null;
      }, v)), Xl(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var q = T(this, H).event(L), G = L.changedTouches, M = G.length, F, Q, D, U;
      for (Es(L), F = 0; F < M; ++F)
        Q = G[F], D = hn(Q, this), q.touch0 && q.touch0[2] === Q.identifier ? q.touch0[0] = D : q.touch1 && q.touch1[2] === Q.identifier && (q.touch1[0] = D);
      if (Q = q.that.__zoom, q.touch1) {
        var ie = q.touch0[0], B = q.touch0[1], Z = q.touch1[0], ee = q.touch1[1], X = (X = Z[0] - ie[0]) * X + (X = Z[1] - ie[1]) * X, te = (te = ee[0] - B[0]) * te + (te = ee[1] - B[1]) * te;
        Q = C(Q, Math.sqrt(X / te)), D = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], U = [(B[0] + ee[0]) / 2, (B[1] + ee[1]) / 2];
      } else if (q.touch0) D = q.touch0[0], U = q.touch0[1];
      else return;
      q.zoom("touch", n(b(Q, D, U), q.extent, l));
    }
  }
  function W(L, ...H) {
    if (this.__zooming) {
      var q = T(this, H).event(L), G = L.changedTouches, M = G.length, F, Q;
      for (vd(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), F = 0; F < M; ++F)
        Q = G[F], q.touch0 && q.touch0[2] === Q.identifier ? delete q.touch0 : q.touch1 && q.touch1[2] === Q.identifier && delete q.touch1;
      if (q.touch1 && !q.touch0 && (q.touch0 = q.touch1, delete q.touch1), q.touch0) q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (q.end(), q.taps === 2 && (Q = hn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < x)) {
        var D = zt(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : Al(+L), _) : o;
  }, _.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : Al(!!L), _) : e;
  }, _.touchable = function(L) {
    return arguments.length ? (i = typeof L == "function" ? L : Al(!!L), _) : i;
  }, _.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : Al([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), _) : t;
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
    return arguments.length ? (x = +L, _) : x;
  }, _;
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
}, qs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], vN = ["Enter", " ", "Escape"], yN = {
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
var hi;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(hi || (hi = {}));
var lo;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(lo || (lo = {}));
var Fs;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Fs || (Fs = {}));
const wN = {
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
var Ir;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Ir || (Ir = {}));
var au;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(au || (au = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Ib = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function xN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const bN = (e) => "id" in e && "source" in e && "target" in e, Oj = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Fy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Zs = (e, t = [0, 0]) => {
  const { width: n, height: o } = nr(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, Lj = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : Fy(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? lu(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Tu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Iu(n);
}, Js = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Tu(n, lu(i)), o = !0);
  }), o ? Iu(n) : { x: 0, y: 0, width: 0, height: 0 };
}, zy = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...ta(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, S = h.height ?? d.height ?? d.initialHeight ?? null, y = zs(u, gi(d)), x = (v ?? 0) * (S ?? 0), _ = a && y > 0;
    (!d.internals.handleBounds || _ || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, Dj = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function jj(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function qj({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = jj(e, l), f = Js(u), d = $y(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function _N({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
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
  else u && mi(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = mi(p) ? ho(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", On.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function Fj({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), S = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || S) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = Dj(l, f);
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
const pi = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ho = (e = { x: 0, y: 0 }, t, n) => ({
  x: pi(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: pi(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function SN(e, t, n) {
  const { width: o, height: i } = nr(n), { x: a, y: l } = n.internals.positionAbsolute;
  return ho(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const Ab = (e, t, n) => e < t ? pi(Math.abs(e - t), 1, t) / t : e > n ? -pi(Math.abs(e - n), 1, t) / t : 0, EN = (e, t, n = 15, o = 40) => {
  const i = Ab(e.x, o, t.width - o) * n, a = Ab(e.y, o, t.height - o) * n;
  return [i, a];
}, Tu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), fy = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Iu = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), gi = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Fy(e) ? e.internals.positionAbsolute : Zs(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, lu = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Fy(e) ? e.internals.positionAbsolute : Zs(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, CN = (e, t) => Iu(Tu(fy(e), fy(t))), zs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, Mb = (e) => gn(e.width) && gn(e.height) && gn(e.x) && gn(e.y), gn = (e) => !isNaN(e) && isFinite(e), zj = (e, t) => {
}, ea = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ta = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? ea(u, l) : u;
}, uu = ({ x: e, y: t }, [n, o, i]) => ({
  x: e * i + n,
  y: t * i + o
});
function Jo(e, t) {
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
function $j(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Jo(e, n), i = Jo(e, t);
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
    const o = Jo(e.top ?? e.y ?? 0, n), i = Jo(e.bottom ?? e.y ?? 0, n), a = Jo(e.left ?? e.x ?? 0, t), l = Jo(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: i, left: a, x: a + l, y: o + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Bj(e, t, n, o, i, a) {
  const { x: l, y: u } = uu(e, [t, n, o]), { x: f, y: d } = uu({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const $y = (e, t, n, o, i, a) => {
  const l = $j(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = pi(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, S = n / 2 - m * h, y = Bj(e, v, S, h, t, n), x = {
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
}, $s = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function mi(e) {
  return e != null && e !== "parent";
}
function nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function kN(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function RN(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function Ob(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Vj() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function Hj(e) {
  return { ...yN, ...e || {} };
}
function Ms(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = mn(e), u = ta({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? ea(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const By = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), NN = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Wj = ["INPUT", "SELECT", "TEXTAREA"];
function PN(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Wj.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const TN = (e) => "clientX" in e, mn = (e, t) => {
  var a, l;
  const n = TN(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Lb = (e, t, n, o, i) => {
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
      ...By(l)
    };
  });
};
function IN({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Ml(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Db({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - Ml(t - o, a), n];
    case ye.Right:
      return [t + Ml(o - t, a), n];
    case ye.Top:
      return [t, n - Ml(n - i, a)];
    case ye.Bottom:
      return [t, n + Ml(i - n, a)];
  }
}
function AN({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = Db({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = Db({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, S] = IN({
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
function MN({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function Uj({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function Gj({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Tu(lu(e), lu(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return zs(l, Iu(a)) > 0;
}
const Yj = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, Kj = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), ON = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return bN(e) ? n = { ...e } : n = {
    ...e,
    id: Yj(e)
  }, Kj(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function LN({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = MN({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const jb = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, Xj = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, qb = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Qj({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: o = ye.Top, center: i, offset: a, stepPosition: l }) {
  const u = jb[t], f = jb[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = Xj({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let S = [], y, x;
  const _ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , b, R] = MN({
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
      const V = Math.abs(e[m] - n[m]);
      if (V <= a) {
        const W = Math.min(a - 1, a - V);
        u[m] === v ? _[m] = (d[m] > e[m] ? -1 : 1) * W : C[m] = (h[m] > n[m] ? -1 : 1) * W;
      }
    }
    if (t !== o) {
      const V = m === "x" ? "y" : "x", W = u[m] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[m] === 1 && (!W && L || W && H) || u[m] !== 1 && (!W && H || W && L)) && (S = m === "x" ? T : A);
    }
    const O = { x: d.x + _.x, y: d.y + _.y }, j = { x: h.x + C.x, y: h.y + C.y }, Y = Math.max(Math.abs(O.x - S[0].x), Math.abs(j.x - S[0].x)), $ = Math.max(Math.abs(O.y - S[0].y), Math.abs(j.y - S[0].y));
    Y >= $ ? (y = (O.x + j.x) / 2, x = S[0].y) : (y = S[0].x, x = (O.y + j.y) / 2);
  }
  return [[
    e,
    { x: d.x + _.x, y: d.y + _.y },
    ...S,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, x, b, R];
}
function Zj(e, t, n, o) {
  const i = Math.min(qb(e, t) / 2, qb(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function dy({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, S, y] = Qj({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((_, C, b) => {
    let R = "";
    return b > 0 && b < p.length - 1 ? R = Zj(p[b - 1], C, p[b + 1], l) : R = `${b === 0 ? "M" : "L"}${C.x} ${C.y}`, _ += R, _;
  }, ""), m, v, S, y];
}
function Fb(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Jj(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!Fb(t) || !Fb(n))
    return null;
  const o = t.internals.handleBounds || zb(t.handles), i = n.internals.handleBounds || zb(n.handles), a = $b((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = $b(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === hi.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", On.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || ye.Bottom, f = (l == null ? void 0 : l.position) || ye.Top, d = Bs(t, a, u), h = Bs(n, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function zb(e) {
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
function Bs(e, t, n = ye.Left, o = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? nr(e);
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
function $b(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function hy(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function eq(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = hy(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const DN = 1e3, tq = 10, Vy = {
  nodeOrigin: [0, 0],
  nodeExtent: qs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, nq = {
  ...Vy,
  checkEquality: !0
};
function Hy(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function rq(e, t, n) {
  const o = Hy(Vy, n);
  for (const i of e.values())
    if (i.parentId)
      Wy(i, e, t, o);
    else {
      const a = Zs(i, o.nodeOrigin), l = mi(i.extent) ? i.extent : o.nodeExtent, u = ho(a, l, nr(i));
      i.internals.positionAbsolute = u;
    }
}
function oq(e, t) {
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
function py(e, t, n, o) {
  var d, h;
  const i = Hy(nq, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? DN : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = Zs(p, i.nodeOrigin), S = mi(p.extent) ? p.extent : i.nodeExtent, y = ho(v, S, nr(p));
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
          handleBounds: oq(p, m),
          z: jN(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && Wy(m, t, n, o, a);
  }
  return l;
}
function iq(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Wy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = Hy(Vy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  iq(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * tq), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? DN : 0, { x: p, y: m, z: v } = sq(e, d, l, u, h), { positionAbsolute: S } = e.internals, y = p !== S.x || m !== S.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : S,
      z: v
    }
  });
}
function jN(e, t) {
  return (gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function sq(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = nr(e), f = Zs(e, n), d = mi(e.extent) ? ho(f, e.extent, u) : f;
  let h = ho({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = SN(h, u, t));
  const p = jN(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function Uy(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? gi(f), h = CN(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var b;
    const h = f.internals.positionAbsolute, p = nr(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, S = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), x = Math.max(p.height, Math.round(u.height)), _ = (y - p.width) * m[0], C = (x - p.height) * m[1];
    (v > 0 || S > 0 || _ || C) && (i.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - v + _,
        y: f.position.y - S + C
      }
    }), (b = n.get(d)) == null || b.forEach((R) => {
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
        width: y + (v ? m[0] * v - _ : 0),
        height: x + (S ? m[1] * S - C : 0)
      }
    });
  }), i;
}
function aq(e, t, n, o, i, a) {
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
    const S = By(m.nodeElement), y = v.measured.width !== S.width || v.measured.height !== S.height;
    if (!!(S.width && S.height && (y || !v.internals.handleBounds || m.force))) {
      const _ = m.nodeElement.getBoundingClientRect(), C = mi(v.extent) ? v.extent : a;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = SN(b, S, t.get(v.parentId)) : C && (b = ho(b, C, S));
      const R = {
        ...v,
        measured: S,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: Lb("source", m.nodeElement, _, h, v.id),
            target: Lb("target", m.nodeElement, _, h, v.id)
          }
        }
      };
      t.set(v.id, R), v.parentId && Wy(R, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: S
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: gi(R, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = Uy(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function lq({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
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
function Bb(e, t, n, o, i, a) {
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
function qN(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: i, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: i, target: a, sourceHandle: l, targetHandle: u }, d = `${i}-${l}--${a}-${u}`, h = `${a}-${u}--${i}-${l}`;
    Bb("source", f, h, e, i, l), Bb("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function FN(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : FN(n, t) : !1;
}
function Vb(e, t, n) {
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
function uq(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !FN(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function yd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
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
function cq({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const a = {
    x: n - i.distance.x,
    y: o - i.distance.y
  }, l = ea(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function fq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, S = !1, y = null;
  function x({ noDragClassName: C, handleSelector: b, domNode: R, isSelectable: P, nodeId: T, nodeClickDistance: A = 0 }) {
    m = zt(R);
    function O({ x: V, y: W }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: q, snapToGrid: G, nodeOrigin: M, onNodeDrag: F, onSelectionDrag: Q, onError: D, updateNodePositions: U } = t();
      a = { x: V, y: W };
      let ie = !1;
      const B = u.size > 1, Z = B && H ? fy(Js(u)) : null, ee = B && G ? cq({
        dragItems: u,
        snapGrid: q,
        x: V,
        y: W
      }) : null;
      for (const [X, te] of u) {
        if (!L.has(X))
          continue;
        let se = { x: V - te.distance.x, y: W - te.distance.y };
        G && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : ea(se, q));
        let ae = null;
        if (B && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, _e = pe.x - Z.x + H[0][0], me = pe.x + te.measured.width - Z.x2 + H[1][0], Ne = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [_e, Ne],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = _N({
          nodeId: X,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: D
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (S = S || ie, !!ie && (U(u, !0), y && (o || F || !T && Q))) {
        const [X, te] = yd({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, X, te), F == null || F(y, X, te), T || Q == null || Q(y, te);
      }
    }
    async function j() {
      if (!h)
        return;
      const { transform: V, panBy: W, autoPanSpeed: L, autoPanOnNodeDrag: H } = t();
      if (!H) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [q, G] = EN(d, h, L);
      (q !== 0 || G !== 0) && (a.x = (a.x ?? 0) - q / V[2], a.y = (a.y ?? 0) - G / V[2], await W({ x: q, y: G }) && O(a)), l = requestAnimationFrame(j);
    }
    function Y(V) {
      var B;
      const { nodeLookup: W, multiSelectionActive: L, nodesDraggable: H, transform: q, snapGrid: G, snapToGrid: M, selectNodesOnDrag: F, onNodeDragStart: Q, onSelectionDragStart: D, unselectNodesAndEdges: U } = t();
      p = !0, (!F || !P) && !L && T && ((B = W.get(T)) != null && B.selected || U()), P && F && T && (e == null || e(T));
      const ie = Ms(V.sourceEvent, { transform: q, snapGrid: G, snapToGrid: M, containerBounds: h });
      if (a = ie, u = uq(W, H, ie, T), u.size > 0 && (n || Q || !T && D)) {
        const [Z, ee] = yd({
          nodeId: T,
          dragItems: u,
          nodeLookup: W
        });
        n == null || n(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || D == null || D(V.sourceEvent, ee);
      }
    }
    const $ = tN().clickDistance(A).on("start", (V) => {
      const { domNode: W, nodeDragThreshold: L, transform: H, snapGrid: q, snapToGrid: G } = t();
      h = (W == null ? void 0 : W.getBoundingClientRect()) || null, v = !1, S = !1, y = V.sourceEvent, L === 0 && Y(V), a = Ms(V.sourceEvent, { transform: H, snapGrid: q, snapToGrid: G, containerBounds: h }), d = mn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: W, transform: L, snapGrid: H, snapToGrid: q, nodeDragThreshold: G, nodeLookup: M } = t(), F = Ms(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: q, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (v = !0), !v) {
        if (!f && W && p && (f = !0, j()), !p) {
          const Q = mn(V.sourceEvent, h), D = Q.x - d.x, U = Q.y - d.y;
          Math.sqrt(D * D + U * U) > G && Y(V);
        }
        (a.x !== F.xSnapped || a.y !== F.ySnapped) && u && p && (d = mn(V.sourceEvent, h), O(F));
      }
    }).on("end", (V) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: W, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: q } = t();
        if (S && (L(u, !1), S = !1), i || H || !T && q) {
          const [G, M] = yd({
            nodeId: T,
            dragItems: u,
            nodeLookup: W,
            dragging: !1
          });
          i == null || i(V.sourceEvent, u, G, M), H == null || H(V.sourceEvent, G, M), T || q == null || q(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const W = V.target;
      return !V.button && (!C || !Vb(W, `.${C}`, R)) && (!b || Vb(W, b, R));
    });
    m.call($);
  }
  function _() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: _
  };
}
function dq(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    zs(i, gi(a)) > 0 && o.push(a);
  return o;
}
const hq = 250;
function pq(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = dq(e, n, t + hq);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: v } = Bs(d, p, p.position, !0), S = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(v - e.y, 2));
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
function zN(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Bs(l, f, f.position, !0) } : f;
}
function $N(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function gq(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const BN = () => !0;
function mq(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: S, onConnect: y, onConnectEnd: x, isValidConnection: _ = BN, onReconnectEnd: C, updateConnection: b, getTransform: R, getFromHandle: P, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const j = NN(e.target);
  let Y = 0, $;
  const { x: V, y: W } = mn(e), L = $N(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let q = !1;
  if (!H || !L)
    return;
  const G = zN(i, L, o, f, t);
  if (!G)
    return;
  let M = mn(e, H), F = !1, Q = null, D = !1, U = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = EN(M, H, T);
    m({ x: ce, y: de }), Y = requestAnimationFrame(ie);
  }
  const B = {
    ...G,
    nodeId: i,
    type: L,
    position: G.position
  }, Z = f.get(i);
  let X = {
    inProgress: !0,
    isValid: null,
    from: Bs(Z, B, ye.Left, !0),
    fromHandle: B,
    fromPosition: B.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: Ib[B.position],
    toNode: null,
    pointer: M
  };
  function te() {
    q = !0, b(X), S == null || S(e, { nodeId: i, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!q) {
      const { x: me, y: Ne } = mn(ce), Ee = me - V, Je = Ne - W;
      if (!(Ee * Ee + Je * Je > A * A))
        return;
      te();
    }
    if (!P() || !B) {
      ae(ce);
      return;
    }
    const de = R();
    M = mn(ce, H), $ = pq(ta(M, de, !1, [1, 1]), n, f, B), F || (ie(), F = !0);
    const pe = VN(ce, {
      handle: $,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: _,
      doc: j,
      lib: d,
      flowId: p,
      nodeLookup: f
    });
    U = pe.handleDomNode, Q = pe.connection, D = gq(!!$, pe.isValid);
    const _e = {
      // from stays the same
      ...X,
      isValid: D,
      to: pe.toHandle && D ? uu({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: D && pe.toHandle ? pe.toHandle.position : Ib[B.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    b(_e), X = _e;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (q) {
        ($ || U) && Q && D && (y == null || y(Q));
        const { inProgress: de, ...pe } = X, _e = {
          ...pe,
          toPosition: X.toHandle ? X.toPosition : null
        };
        x == null || x(ce, _e), a && (C == null || C(ce, _e));
      }
      v(), cancelAnimationFrame(Y), F = !1, D = !1, Q = null, U = null, j.removeEventListener("mousemove", se), j.removeEventListener("mouseup", ae), j.removeEventListener("touchmove", se), j.removeEventListener("touchend", ae);
    }
  }
  j.addEventListener("mousemove", se), j.addEventListener("mouseup", ae), j.addEventListener("touchmove", se), j.addEventListener("touchend", ae);
}
function VN(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = BN, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: S } = mn(e), y = l.elementFromPoint(v, S), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = $N(void 0, x), b = x.getAttribute("data-nodeid"), R = x.getAttribute("data-handleid"), P = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!b || !C)
      return _;
    const A = {
      source: p ? b : o,
      sourceHandle: p ? R : i,
      target: p ? o : b,
      targetHandle: p ? i : R
    };
    _.connection = A;
    const j = P && T && (n === hi.Strict ? p && C === "source" || !p && C === "target" : b !== o || R !== i);
    _.isValid = j && d(A), _.toHandle = zN(b, C, R, h, n, !0);
  }
  return _;
}
const gy = {
  onPointerDown: mq,
  isValid: VN
};
function vq({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = zt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const S = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const R = n(), P = b.sourceEvent.ctrlKey && $s() ? 10 : 1, T = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = R[2] * Math.pow(2, T * P);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const x = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (y = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, _ = (b) => {
      const R = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
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
    }, C = mN().on("start", x).on("zoom", p ? _ : null).on("zoom.wheel", m ? S : null);
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
const Au = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), wd = ({ x: e, y: t, zoom: n }) => Pu.translate(e, t).scale(n), oi = (e, t) => e.target.closest(`.${t}`), HN = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), yq = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, xd = (e, t = 0, n = yq, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, WN = (e) => {
  const t = e.ctrlKey && $s() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function wq({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (oi(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = hn(h), _ = WN(h), C = p * Math.pow(2, _);
      o.scaleTo(n, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === lo.Vertical ? 0 : h.deltaX * m, S = i === lo.Horizontal ? 0 : h.deltaY * m;
    !$s() && h.shiftKey && i !== lo.Vertical && (v = h.deltaY * m, S = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(S / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Au(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function xq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = oi(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function bq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = Au(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function _q({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && HN(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, Au(a.transform)));
  };
}
function Sq({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && HN(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = Au(l.transform);
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
function Eq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var x;
    const m = e || t, v = n && p.ctrlKey, S = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (oi(p, `${d}-flow__node`) || oi(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !i && !a && !n || l || h && !S || oi(p, u) && S || oi(p, f) && (!S || i && S && !e) || !n && p.ctrlKey && S)
      return !1;
    if (!n && p.type === "touchstart" && ((x = p.touches) == null ? void 0 : x.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !i && !v && S || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || S) && y;
  };
}
function Cq({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = mN().scaleExtent([t, n]).translateExtent(o), m = zt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: pi(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), S = m.on("dblclick.zoom");
  p.wheelDelta(WN);
  function y($, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Gl).transform(xd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), $);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: $, noPanClassName: V, onPaneContextMenu: W, userSelectionActive: L, panOnScroll: H, panOnDrag: q, panOnScrollMode: G, panOnScrollSpeed: M, preventScrolling: F, zoomOnPinch: Q, zoomOnScroll: D, zoomOnDoubleClick: U, zoomActivationKeyPressed: ie, lib: B, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: X, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && _();
    const se = H && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !gn(X) || X < 0 ? 0 : X);
    const ae = se ? wq({
      zoomPanValues: d,
      noWheelClassName: $,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: G,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : xq({
      noWheelClassName: $,
      preventScrolling: F,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = bq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = _q({
        zoomPanValues: d,
        panOnDrag: q,
        onPaneContextMenu: !!W,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const _e = Sq({
        zoomPanValues: d,
        panOnDrag: q,
        panOnScroll: H,
        onPaneContextMenu: W,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", _e);
    }
    const ce = Eq({
      zoomActivationKeyPressed: ie,
      panOnDrag: q,
      zoomOnScroll: D,
      panOnScroll: H,
      zoomOnDoubleClick: U,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: V,
      noWheelClassName: $,
      lib: B,
      connectionInProgress: ee
    });
    p.filter(ce), U ? m.on("dblclick.zoom", S) : m.on("dblclick.zoom", null);
  }
  function _() {
    p.on("zoom", null);
  }
  async function C($, V, W) {
    const L = wd($), H = p == null ? void 0 : p.constrain()(L, V, W);
    return H && await y(H), new Promise((q) => q(H));
  }
  async function b($, V) {
    const W = wd($);
    return await y(W, V), new Promise((L) => L(W));
  }
  function R($) {
    if (m) {
      const V = wd($), W = m.property("__zoom");
      (W.k !== $.zoom || W.x !== $.x || W.y !== $.y) && (p == null || p.transform(m, V, null, { sync: !0 }));
    }
  }
  function P() {
    const $ = m ? gN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: $.x, y: $.y, zoom: $.k };
  }
  function T($, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Gl).scaleTo(xd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), $);
    }) : Promise.resolve(!1);
  }
  function A($, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Gl).scaleBy(xd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), $);
    }) : Promise.resolve(!1);
  }
  function O($) {
    p == null || p.scaleExtent($);
  }
  function j($) {
    p == null || p.translateExtent($);
  }
  function Y($) {
    const V = !gn($) || $ < 0 ? 0 : $;
    p == null || p.clickDistance(V);
  }
  return {
    update: x,
    destroy: _,
    setViewport: b,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: T,
    scaleBy: A,
    setScaleExtent: O,
    setTranslateExtent: j,
    syncViewport: R,
    setClickDistance: Y
  };
}
var vi;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(vi || (vi = {}));
function kq({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function Hb(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), o = e.includes("left"), i = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: o,
    affectsY: i
  };
}
function Rr(e, t) {
  return Math.max(0, t - e);
}
function Nr(e, t) {
  return Math.max(0, e - t);
}
function Ol(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Wb(e, t) {
  return e ? !t : t;
}
function Rq(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: S } = n, { minWidth: y, maxWidth: x, minHeight: _, maxHeight: C } = o, { x: b, y: R, width: P, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? v - e.pointerX : 0), j = Math.floor(p ? S - e.pointerY : 0);
  const Y = P + (f ? -O : O), $ = T + (d ? -j : j), V = -a[0] * P, W = -a[1] * T;
  let L = Ol(Y, y, x), H = Ol($, _, C);
  if (l) {
    let M = 0, F = 0;
    f && O < 0 ? M = Rr(b + O + V, l[0][0]) : !f && O > 0 && (M = Nr(b + Y + V, l[1][0])), d && j < 0 ? F = Rr(R + j + W, l[0][1]) : !d && j > 0 && (F = Nr(R + $ + W, l[1][1])), L = Math.max(L, M), H = Math.max(H, F);
  }
  if (u) {
    let M = 0, F = 0;
    f && O > 0 ? M = Nr(b + O, u[0][0]) : !f && O < 0 && (M = Rr(b + Y, u[1][0])), d && j > 0 ? F = Nr(R + j, u[0][1]) : !d && j < 0 && (F = Rr(R + $, u[1][1])), L = Math.max(L, M), H = Math.max(H, F);
  }
  if (i) {
    if (h) {
      const M = Ol(Y / A, _, C) * A;
      if (L = Math.max(L, M), l) {
        let F = 0;
        !f && !d || f && !d && m ? F = Nr(R + W + Y / A, l[1][1]) * A : F = Rr(R + W + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, F);
      }
      if (u) {
        let F = 0;
        !f && !d || f && !d && m ? F = Rr(R + Y / A, u[1][1]) * A : F = Nr(R + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, F);
      }
    }
    if (p) {
      const M = Ol($ * A, y, x) / A;
      if (H = Math.max(H, M), l) {
        let F = 0;
        !f && !d || d && !f && m ? F = Nr(b + $ * A + V, l[1][0]) / A : F = Rr(b + (d ? j : -j) * A + V, l[0][0]) / A, H = Math.max(H, F);
      }
      if (u) {
        let F = 0;
        !f && !d || d && !f && m ? F = Rr(b + $ * A, u[1][0]) / A : F = Nr(b + (d ? j : -j) * A, u[0][0]) / A, H = Math.max(H, F);
      }
    }
  }
  j = j + (j < 0 ? H : -H), O = O + (O < 0 ? L : -L), i && (m ? Y > $ * A ? j = (Wb(f, d) ? -O : O) / A : O = (Wb(f, d) ? -j : j) * A : h ? (j = O / A, d = f) : (O = j * A, f = d));
  const q = f ? b + O : b, G = d ? R + j : R;
  return {
    width: P + (f ? -O : O),
    height: T + (d ? -j : j),
    x: a[0] * O * (f ? -1 : 1) + q,
    y: a[1] * j * (d ? -1 : 1) + G
  };
}
const UN = { width: 0, height: 0, x: 0, y: 0 }, Nq = {
  ...UN,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Pq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Tq(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function Iq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = zt(e);
  let l = {
    controlDirection: Hb("bottom-right"),
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
    let _ = { ...UN }, C = { ...Nq };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: Hb(d)
    };
    let b, R = null, P = [], T, A, O, j = !1;
    const Y = tN().on("start", ($) => {
      const { nodeLookup: V, transform: W, snapGrid: L, snapToGrid: H, nodeOrigin: q, paneDomNode: G } = n();
      if (b = V.get(t), !b)
        return;
      R = (G == null ? void 0 : G.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: F } = Ms($.sourceEvent, {
        transform: W,
        snapGrid: L,
        snapToGrid: H,
        containerBounds: R
      });
      _ = {
        width: b.measured.width ?? 0,
        height: b.measured.height ?? 0,
        x: b.position.x ?? 0,
        y: b.position.y ?? 0
      }, C = {
        ..._,
        pointerX: M,
        pointerY: F,
        aspectRatio: _.width / _.height
      }, T = void 0, b.parentId && (b.extent === "parent" || b.expandParent) && (T = V.get(b.parentId), A = T && b.extent === "parent" ? Pq(T) : void 0), P = [], O = void 0;
      for (const [Q, D] of V)
        if (D.parentId === t && (P.push({
          id: Q,
          position: { ...D.position },
          extent: D.extent
        }), D.extent === "parent" || D.expandParent)) {
          const U = Tq(D, b, D.origin ?? q);
          O ? O = [
            [Math.min(U[0][0], O[0][0]), Math.min(U[0][1], O[0][1])],
            [Math.max(U[1][0], O[1][0]), Math.max(U[1][1], O[1][1])]
          ] : O = U;
        }
      v == null || v($, { ..._ });
    }).on("drag", ($) => {
      const { transform: V, snapGrid: W, snapToGrid: L, nodeOrigin: H } = n(), q = Ms($.sourceEvent, {
        transform: V,
        snapGrid: W,
        snapToGrid: L,
        containerBounds: R
      }), G = [];
      if (!b)
        return;
      const { x: M, y: F, width: Q, height: D } = _, U = {}, ie = b.origin ?? H, { width: B, height: Z, x: ee, y: X } = Rq(C, l.controlDirection, q, l.boundaries, l.keepAspectRatio, ie, A, O), te = B !== Q, se = Z !== D, ae = ee !== M && te, ce = X !== F && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (U.x = ae ? ee : _.x, U.y = ce ? X : _.y, _.x = U.x, _.y = U.y, P.length > 0)) {
        const me = ee - M, Ne = X - F;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * (B - Q),
            y: Ee.position.y - Ne + ie[1] * (Z - D)
          }, G.push(Ee);
      }
      if ((te || se) && (U.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? B : _.width, U.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : _.height, _.width = U.width, _.height = U.height), T && b.expandParent) {
        const me = ie[0] * (U.width ?? 0);
        U.x && U.x < me && (_.x = me, C.x = C.x - (U.x - me));
        const Ne = ie[1] * (U.height ?? 0);
        U.y && U.y < Ne && (_.y = Ne, C.y = C.y - (U.y - Ne));
      }
      const de = kq({
        width: _.width,
        prevWidth: Q,
        height: _.height,
        prevHeight: D,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ..._, direction: de };
      (x == null ? void 0 : x($, pe)) !== !1 && (j = !0, S == null || S($, pe), o(U, G));
    }).on("end", ($) => {
      j && (y == null || y($, { ..._ }), i == null || i({ ..._ }), j = !1);
    });
    a.call(Y);
  }
  function f() {
    a.on(".drag", null);
  }
  return {
    update: u,
    destroy: f
  };
}
var bd = { exports: {} }, _d = {}, Sd = { exports: {} }, Ed = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function Aq() {
  if (Ub) return Ed;
  Ub = 1;
  var e = Ks();
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
  return Ed.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Ed;
}
var Gb;
function Mq() {
  return Gb || (Gb = 1, Sd.exports = Aq()), Sd.exports;
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
var Yb;
function Oq() {
  if (Yb) return _d;
  Yb = 1;
  var e = Ks(), t = Mq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return _d.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
    var S = a(null);
    if (S.current === null) {
      var y = { hasValue: !1, value: null };
      S.current = y;
    } else y = S.current;
    S = u(
      function() {
        function _(T) {
          if (!C) {
            if (C = !0, b = T, T = m(T), v !== void 0 && y.hasValue) {
              var A = y.value;
              if (v(A, T))
                return R = A;
            }
            return R = T;
          }
          if (A = R, o(b, T)) return A;
          var O = m(T);
          return v !== void 0 && v(A, O) ? (b = T, A) : (b = T, R = O);
        }
        var C = !1, b, R, P = p === void 0 ? null : p;
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
    var x = i(d, S[0], S[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, _d;
}
var Kb;
function Lq() {
  return Kb || (Kb = 1, bd.exports = Oq()), bd.exports;
}
var Dq = Lq();
const jq = /* @__PURE__ */ Eu(Dq), qq = {}, Xb = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((S) => S(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (qq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, Fq = (e) => e ? Xb(e) : Xb, { useDebugValue: zq } = qt, { useSyncExternalStoreWithSelector: $q } = jq, Bq = (e) => e;
function GN(e, t = Bq, n) {
  const o = $q(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return zq(o), o;
}
const Qb = (e, t) => {
  const n = Fq(e), o = (i, a = t) => GN(n, i, a);
  return Object.assign(o, n), o;
}, Vq = (e, t) => e ? Qb(e, t) : Qb;
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
var na = FR();
const Hq = /* @__PURE__ */ Eu(na), Mu = k.createContext(null), Wq = Mu.Provider, YN = On.error001();
function Ae(e, t) {
  const n = k.useContext(Mu);
  if (n === null)
    throw new Error(YN);
  return GN(n, e, t);
}
function He() {
  const e = k.useContext(Mu);
  if (e === null)
    throw new Error(YN);
  return k.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Zb = { display: "none" }, Uq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, KN = "react-flow__node-desc", XN = "react-flow__edge-desc", Gq = "react-flow__aria-live", Yq = (e) => e.ariaLiveMessage, Kq = (e) => e.ariaLabelConfig;
function Xq({ rfId: e }) {
  const t = Ae(Yq);
  return N.jsx("div", { id: `${Gq}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Uq, children: t });
}
function Qq({ rfId: e, disableKeyboardA11y: t }) {
  const n = Ae(Kq);
  return N.jsxs(N.Fragment, { children: [N.jsx("div", { id: `${KN}-${e}`, style: Zb, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), N.jsx("div", { id: `${XN}-${e}`, style: Zb, children: n["edge.a11yDescription.default"] }), !t && N.jsx(Xq, { rfId: e })] });
}
const ra = k.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return N.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
ra.displayName = "Panel";
function Zq({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : N.jsx(ra, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: N.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Jq = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Ll = (e) => e.id;
function eF(e, t) {
  return Qe(e.selectedNodes.map(Ll), t.selectedNodes.map(Ll)) && Qe(e.selectedEdges.map(Ll), t.selectedEdges.map(Ll));
}
function tF({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Ae(Jq, eF);
  return k.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const nF = (e) => !!e.onSelectionChangeHandlers;
function rF({ onSelectionChange: e }) {
  const t = Ae(nF);
  return e || t ? N.jsx(tF, { onSelectionChange: e }) : null;
}
const QN = [0, 0], oF = { x: 0, y: 0, zoom: 1 }, iF = [
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
], Jb = [...iF, "rfId"], sF = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), e_ = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: qs,
  nodeOrigin: QN,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function aF(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ae(sF, Qe), d = He();
  k.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = e_, u();
  }), []);
  const h = k.useRef(e_);
  return k.useEffect(
    () => {
      for (const p of Jb) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: Hj(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Jb.map((p) => e[p])
  ), null;
}
function t_() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function lF(e) {
  var o;
  const [t, n] = k.useState(e === "system" ? null : e);
  return k.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = t_(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = t_()) != null && o.matches ? "dark" : "light";
}
const n_ = typeof document < "u" ? document : null;
function Vs(e = null, t = { target: n_, actInsideInputWithModifier: !0 }) {
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
    const f = (t == null ? void 0 : t.target) ?? n_, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var x, _;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && PN(v))
          return !1;
        const y = o_(v.code, u);
        if (a.current.add(v[y]), r_(l, a.current, !1)) {
          const C = ((_ = (x = v.composedPath) == null ? void 0 : x.call(v)) == null ? void 0 : _[0]) || v.target, b = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !b) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const S = o_(v.code, u);
        r_(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[S]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function r_(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function o_(e, t) {
  return t.includes(e) ? "code" : "key";
}
const uF = () => {
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
      const { width: o, height: i, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = $y(t, o, i, a, l, (n == null ? void 0 : n.padding) ?? 0.1);
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
      return ta(d, o, p, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: i, y: a } = o.getBoundingClientRect(), l = uu(t, n);
      return {
        x: l.x + i,
        y: l.y + a
      };
    }
  }), []);
};
function ZN(e, t) {
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
      cF(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function cF(e, t) {
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
function JN(e, t) {
  return ZN(e, t);
}
function eP(e, t) {
  return ZN(e, t);
}
function io(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function ii(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, a] of e) {
    const l = t.has(i);
    !(a.selected === void 0 && !l) && a.selected !== l && (n && (a.selected = l), o.push(io(a.id, l)));
  }
  return o;
}
function i_({ items: e = [], lookup: t }) {
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
function s_(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const a_ = (e) => Oj(e), fF = (e) => bN(e);
function tP(e) {
  return k.forwardRef(e);
}
const dF = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function l_(e) {
  const [t, n] = k.useState(BigInt(0)), [o] = k.useState(() => hF(() => n((i) => i + BigInt(1))));
  return dF(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function hF(e) {
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
const nP = k.createContext(null);
function pF({ children: e }) {
  const t = He(), n = k.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let S = f;
    for (const x of u)
      S = typeof x == "function" ? x(S) : x;
    const y = i_({
      items: S,
      lookup: m
    });
    h && d(S), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: _, setNodes: C } = t.getState();
      x && C(_);
    });
  }, []), o = l_(n), i = k.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const S of u)
      v = typeof S == "function" ? S(v) : S;
    h ? d(v) : p && p(i_({
      items: v,
      lookup: m
    }));
  }, []), a = l_(i), l = k.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return N.jsx(nP.Provider, { value: l, children: e });
}
function gF() {
  const e = k.useContext(nP);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const mF = (e) => !!e.panZoom;
function Gy() {
  const e = uF(), t = He(), n = gF(), o = Ae(mF), i = k.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var _, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), S = a_(p) ? p : m.get(p.id), y = S.parentId ? RN(S.position, S.measured, S.parentId, m, v) : S.position, x = {
        ...S,
        position: y,
        width: ((_ = S.measured) == null ? void 0 : _.width) ?? S.width,
        height: ((C = S.measured) == null ? void 0 : C.height) ?? S.height
      };
      return gi(x);
    }, d = (p, m, v = { replace: !1 }) => {
      l((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && a_(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && fF(x) ? x : { ...y, ...x };
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
          nodes: p.map((_) => ({ ..._ })),
          edges: m.map((_) => ({ ..._ })),
          viewport: {
            x: S,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: v, edges: S, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: _, triggerEdgeChanges: C, onDelete: b, onBeforeDelete: R } = t.getState(), { nodes: P, edges: T } = await Fj({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: S,
          onBeforeDelete: R
        }), A = T.length > 0, O = P.length > 0;
        if (A) {
          const j = T.map(s_);
          x == null || x(T), C(j);
        }
        if (O) {
          const j = P.map(s_);
          y == null || y(P), _(j);
        }
        return (O || A) && (b == null || b({ nodes: P, edges: T })), { deletedNodes: P, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, v) => {
        const S = Mb(p), y = S ? p : f(p), x = v !== void 0;
        return y ? (v || t.getState().nodes).filter((_) => {
          const C = t.getState().nodeLookup.get(_.id);
          if (C && !S && (_.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const b = gi(x ? _ : C), R = zs(b, y);
          return m && R > 0 || R >= b.width * b.height || R >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = Mb(p) ? p : f(p);
        if (!y)
          return !1;
        const x = zs(y, m);
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
        return Lj(p, { nodeLookup: m, nodeOrigin: v });
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
        const m = t.getState().fitViewResolver ?? Vj();
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
const u_ = (e) => e.selected, vF = typeof window < "u" ? window : void 0;
function yF({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = Gy(), i = Vs(e, { actInsideInputWithModifier: !1 }), a = Vs(t, { target: vF });
  k.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(u_), edges: l.filter(u_) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), k.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function wF(e) {
  const t = He();
  k.useEffect(() => {
    const n = () => {
      var i, a, l, u;
      if (!e.current || !(((a = (i = e.current).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return !1;
      const o = By(e.current);
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
const Ou = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, xF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function bF({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = lo.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: S, noWheelClassName: y, noPanClassName: x, onViewportChange: _, isControlledViewport: C, paneClickDistance: b, selectionOnDrag: R }) {
  const P = He(), T = k.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: j } = Ae(xF, Qe), Y = Vs(m), $ = k.useRef();
  wF(T);
  const V = k.useCallback((W) => {
    _ == null || _({ x: W[0], y: W[1], zoom: W[2] }), C || P.setState({ transform: W });
  }, [_, C]);
  return k.useEffect(() => {
    if (T.current) {
      $.current = Cq({
        domNode: T.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (q) => P.setState({ paneDragging: q }),
        onPanZoomStart: (q, G) => {
          const { onViewportChangeStart: M, onMoveStart: F } = P.getState();
          F == null || F(q, G), M == null || M(G);
        },
        onPanZoom: (q, G) => {
          const { onViewportChange: M, onMove: F } = P.getState();
          F == null || F(q, G), M == null || M(G);
        },
        onPanZoomEnd: (q, G) => {
          const { onViewportChangeEnd: M, onMoveEnd: F } = P.getState();
          F == null || F(q, G), M == null || M(G);
        }
      });
      const { x: W, y: L, zoom: H } = $.current.getViewport();
      return P.setState({
        panZoom: $.current,
        transform: [W, L, H],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var q;
        (q = $.current) == null || q.destroy();
      };
    }
  }, []), k.useEffect(() => {
    var W;
    (W = $.current) == null || W.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: o,
      panOnScrollSpeed: i,
      panOnScrollMode: a,
      zoomOnDoubleClick: l,
      panOnDrag: u,
      zoomActivationKeyPressed: Y,
      preventScrolling: v,
      noPanClassName: x,
      userSelectionActive: A,
      noWheelClassName: y,
      lib: O,
      onTransformChange: V,
      connectionInProgress: j,
      selectionOnDrag: R,
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
    Y,
    v,
    x,
    A,
    y,
    O,
    V,
    j,
    R,
    b
  ]), N.jsx("div", { className: "react-flow__renderer", ref: T, style: Ou, children: S });
}
const _F = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function SF() {
  const { userSelectionActive: e, userSelectionRect: t } = Ae(_F, Qe);
  return e && t ? N.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Cd = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, EF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function CF({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Fs.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: S }) {
  const y = He(), { userSelectionActive: x, elementsSelectable: _, dragging: C, connectionInProgress: b } = Ae(EF, Qe), R = _ && (e || x), P = k.useRef(null), T = k.useRef(), A = k.useRef(/* @__PURE__ */ new Set()), O = k.useRef(/* @__PURE__ */ new Set()), j = k.useRef(!1), Y = (M) => {
    if (j.current || b) {
      j.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, $ = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, V = h ? (M) => h(M) : void 0, W = (M) => {
    j.current && (M.stopPropagation(), j.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: F } = y.getState();
    if (T.current = F == null ? void 0 : F.getBoundingClientRect(), !T.current)
      return;
    const Q = M.target === P.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), j.current = !1;
    const { x: ie, y: B } = mn(M.nativeEvent, T.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ie,
        startY: B,
        x: ie,
        y: B
      }
    }), Q || (M.stopPropagation(), M.preventDefault());
  }, H = (M) => {
    const { userSelectionRect: F, transform: Q, nodeLookup: D, edgeLookup: U, connectionLookup: ie, triggerNodeChanges: B, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: X } = y.getState();
    if (!T.current || !F)
      return;
    const { x: te, y: se } = mn(M.nativeEvent, T.current), { startX: ae, startY: ce } = F;
    if (!j.current) {
      const Ne = t ? 0 : i;
      if (Math.hypot(te - ae, se - ce) <= Ne)
        return;
      X(), l == null || l(M);
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
    A.current = new Set(zy(D, de, Q, n === Fs.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = U.get(Je);
          Ue && (Ue.selectable ?? me) && O.current.add(Je);
        }
    }
    if (!Ob(pe, A.current)) {
      const Ne = ii(D, A.current, !0);
      B(Ne);
    }
    if (!Ob(_e, O.current)) {
      const Ne = ii(U, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, q = (M) => {
    var F, Q;
    M.button === 0 && ((Q = (F = M.target) == null ? void 0 : F.releasePointerCapture) == null || Q.call(F, M.pointerId), !x && M.target === P.current && y.getState().userSelectionRect && (Y == null || Y(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), j.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, G = o === !0 || Array.isArray(o) && o.includes(0);
  return N.jsxs("div", { className: nt(["react-flow__pane", { draggable: G, dragging: C, selection: e }]), onClick: R ? void 0 : Cd(Y, P), onContextMenu: Cd($, P), onWheel: Cd(V, P), onPointerEnter: R ? void 0 : p, onPointerMove: R ? H : m, onPointerUp: R ? q : void 0, onPointerDownCapture: R ? L : void 0, onClickCapture: R ? W : void 0, onPointerLeave: v, ref: P, style: Ou, children: [S, N.jsx(SF, {})] });
}
function my({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
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
function rP({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = k.useState(!1), h = k.useRef();
  return k.useEffect(() => {
    h.current = fq({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        my({
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
const kF = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function oP() {
  const e = He();
  return k.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = kF(l), v = i ? a[0] : 5, S = i ? a[1] : 5, y = n.direction.x * v * n.factor, x = n.direction.y * S * n.factor;
    for (const [, _] of d) {
      if (!m(_))
        continue;
      let C = {
        x: _.internals.positionAbsolute.x + y,
        y: _.internals.positionAbsolute.y + x
      };
      i && (C = ea(C, a));
      const { position: b, positionAbsolute: R } = _N({
        nodeId: _.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      _.position = b, _.internals.positionAbsolute = R, p.set(_.id, _);
    }
    f(p);
  }, []);
}
const Yy = k.createContext(null), RF = Yy.Provider;
Yy.Consumer;
const iP = () => k.useContext(Yy), NF = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), PF = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === hi.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function TF({ type: e = "source", position: t = ye.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var H, q;
  const S = l || null, y = e === "target", x = He(), _ = iP(), { connectOnClick: C, noPanClassName: b, rfId: R } = Ae(NF, Qe), { connectingFrom: P, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: j, clickConnectionInProcess: Y, valid: $ } = Ae(PF(_, S, e), Qe);
  _ || (q = (H = x.getState()).onError) == null || q.call(H, "010", On.error010());
  const V = (G) => {
    const { defaultEdgeOptions: M, onConnect: F, hasDefaultEdges: Q } = x.getState(), D = {
      ...M,
      ...G
    };
    if (Q) {
      const { edges: U, setEdges: ie } = x.getState();
      ie(ON(D, U));
    }
    F == null || F(D), u == null || u(D);
  }, W = (G) => {
    if (!_)
      return;
    const M = TN(G.nativeEvent);
    if (i && (M && G.button === 0 || !M)) {
      const F = x.getState();
      gy.onPointerDown(G.nativeEvent, {
        handleDomNode: G.currentTarget,
        autoPanOnConnect: F.autoPanOnConnect,
        connectionMode: F.connectionMode,
        connectionRadius: F.connectionRadius,
        domNode: F.domNode,
        nodeLookup: F.nodeLookup,
        lib: F.lib,
        isTarget: y,
        handleId: S,
        nodeId: _,
        flowId: F.rfId,
        panBy: F.panBy,
        cancelConnection: F.cancelConnection,
        onConnectStart: F.onConnectStart,
        onConnectEnd: F.onConnectEnd,
        updateConnection: F.updateConnection,
        onConnect: V,
        isValidConnection: n || F.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: F.autoPanSpeed,
        dragThreshold: F.connectionDragThreshold
      });
    }
    M ? h == null || h(G) : p == null || p(G);
  }, L = (G) => {
    const { onClickConnectStart: M, onClickConnectEnd: F, connectionClickStartHandle: Q, connectionMode: D, isValidConnection: U, lib: ie, rfId: B, nodeLookup: Z, connection: ee } = x.getState();
    if (!_ || !Q && !i)
      return;
    if (!Q) {
      M == null || M(G.nativeEvent, { nodeId: _, handleId: S, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: _, type: e, id: S } });
      return;
    }
    const X = NN(G.target), te = n || U, { connection: se, isValid: ae } = gy.isValid(G.nativeEvent, {
      handle: {
        nodeId: _,
        id: S,
        type: e
      },
      connectionMode: D,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id || null,
      fromType: Q.type,
      isValidConnection: te,
      flowId: B,
      doc: X,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && V(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, F == null || F(G, ce), x.setState({ connectionClickStartHandle: null });
  };
  return N.jsx("div", { "data-handleid": S, "data-nodeid": _, "data-handlepos": t, "data-id": `${R}-${_}-${S}-${e}`, className: nt([
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
      clickconnecting: A,
      connectingfrom: P,
      connectingto: T,
      valid: $,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!j || O) && (j || Y ? a : i)
    }
  ]), onMouseDown: W, onTouchStart: W, onClick: C ? L : void 0, ref: v, ...m, children: f });
}
const Hs = k.memo(tP(TF));
function IF({ data: e, isConnectable: t, sourcePosition: n = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [e == null ? void 0 : e.label, N.jsx(Hs, { type: "source", position: n, isConnectable: t })] });
}
function AF({ data: e, isConnectable: t, targetPosition: n = ye.Top, sourcePosition: o = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Hs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, N.jsx(Hs, { type: "source", position: o, isConnectable: t })] });
}
function MF() {
  return null;
}
function OF({ data: e, isConnectable: t, targetPosition: n = ye.Top }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Hs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const cu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, c_ = {
  input: IF,
  default: AF,
  output: OF,
  group: MF
};
function LF(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const DF = (e) => {
  const { width: t, height: n, x: o, y: i } = Js(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: gn(t) ? t : null,
    height: gn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function jF({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Ae(DF, Qe), f = oP(), d = k.useRef(null);
  if (k.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), rP({
    nodeRef: d
  }), u || !i || !a)
    return null;
  const h = e ? (m) => {
    const v = o.getState().nodes.filter((S) => S.selected);
    e(m, v);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(cu, m.key) && (m.preventDefault(), f({
      direction: cu[m.key],
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
const f_ = typeof window < "u" ? window : void 0, qF = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function sP({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: S, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: R, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: j, translateExtent: Y, minZoom: $, maxZoom: V, preventScrolling: W, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: q, disableKeyboardA11y: G, onViewportChange: M, isControlledViewport: F }) {
  const { nodesSelectionActive: Q, userSelectionActive: D } = Ae(qF), U = Vs(d, { target: f_ }), ie = Vs(y, { target: f_ }), B = ie || O, Z = ie || R, ee = h && B !== !0, X = U || D || ee;
  return yF({ deleteKeyCode: f, multiSelectionKeyCode: S }), N.jsx(bF, { onPaneContextMenu: a, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !U && B, defaultViewport: j, translateExtent: Y, minZoom: $, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: W, noWheelClassName: H, noPanClassName: q, onViewportChange: M, isControlledViewport: F, paneClickDistance: u, selectionOnDrag: ee, children: N.jsxs(CF, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: B, isSelecting: !!X, selectionMode: p, selectionKeyPressed: U, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && N.jsx(jF, { onSelectionContextMenu: L, noPanClassName: q, disableKeyboardA11y: G })] }) });
}
sP.displayName = "FlowRenderer";
const FF = k.memo(sP), zF = (e) => (t) => e ? zy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function $F(e) {
  return Ae(k.useCallback(zF(e), [e]), Qe);
}
const BF = (e) => e.updateNodeInternals;
function VF() {
  const e = Ae(BF), [t] = k.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function HF({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
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
function WF({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: S, rfId: y, nodeTypes: x, nodeClickDistance: _, onError: C }) {
  const { node: b, internals: R, isParent: P } = Ae((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let T = b.type || "default", A = (x == null ? void 0 : x[T]) || c_[T];
  A === void 0 && (C == null || C("003", On.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || c_.default);
  const O = !!(b.draggable || u && typeof b.draggable > "u"), j = !!(b.selectable || f && typeof b.selectable > "u"), Y = !!(b.connectable || d && typeof b.connectable > "u"), $ = !!(b.focusable || h && typeof b.focusable > "u"), V = He(), W = kN(b), L = HF({ node: b, nodeType: T, hasDimensions: W, resizeObserver: p }), H = rP({
    nodeRef: L,
    disabled: b.hidden || !O,
    noDragClassName: m,
    handleSelector: b.dragHandle,
    nodeId: e,
    isSelectable: j,
    nodeClickDistance: _
  }), q = oP();
  if (b.hidden)
    return null;
  const G = nr(b), M = LF(b), F = j || O || t || n || o || i, Q = n ? (te) => n(te, { ...R.userNode }) : void 0, D = o ? (te) => o(te, { ...R.userNode }) : void 0, U = i ? (te) => i(te, { ...R.userNode }) : void 0, ie = a ? (te) => a(te, { ...R.userNode }) : void 0, B = l ? (te) => l(te, { ...R.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    j && (!se || !O || ae > 0) && my({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...R.userNode });
  }, ee = (te) => {
    if (!(PN(te.nativeEvent) || S)) {
      if (vN.includes(te.key) && j) {
        const se = te.key === "Escape";
        my({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && b.selected && Object.prototype.hasOwnProperty.call(cu, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~R.positionAbsolute.x,
            y: ~~R.positionAbsolute.y
          })
        }), q({
          direction: cu[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, X = () => {
    var _e;
    if (S || !((_e = L.current) != null && _e.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = V.getState();
    if (!ce)
      return;
    zy(/* @__PURE__ */ new Map([[e, b]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(b.position.x + G.width / 2, b.position.y + G.height / 2, {
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
    b.className,
    {
      selected: b.selected,
      selectable: j,
      parent: P,
      draggable: O,
      dragging: H
    }
  ]), ref: L, style: {
    zIndex: R.z,
    transform: `translate(${R.positionAbsolute.x}px,${R.positionAbsolute.y}px)`,
    pointerEvents: F ? "all" : "none",
    visibility: W ? "visible" : "hidden",
    ...b.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: D, onMouseLeave: U, onContextMenu: ie, onClick: Z, onDoubleClick: B, onKeyDown: $ ? ee : void 0, tabIndex: $ ? 0 : void 0, onFocus: $ ? X : void 0, role: b.ariaRole ?? ($ ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": S ? void 0 : `${KN}-${y}`, "aria-label": b.ariaLabel, ...b.domAttributes, children: N.jsx(RF, { value: e, children: N.jsx(A, { id: e, data: b.data, type: T, positionAbsoluteX: R.positionAbsolute.x, positionAbsoluteY: R.positionAbsolute.y, selected: b.selected ?? !1, selectable: j, draggable: O, deletable: b.deletable ?? !0, isConnectable: Y, sourcePosition: b.sourcePosition, targetPosition: b.targetPosition, dragging: H, dragHandle: b.dragHandle, zIndex: R.z, parentId: b.parentId, ...G }) }) });
}
var UF = k.memo(WF);
const GF = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function aP(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Ae(GF, Qe), l = $F(e.onlyRenderVisibleElements), u = VF();
  return N.jsx("div", { className: "react-flow__nodes", style: Ou, children: l.map((f) => (
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
    N.jsx(UF, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
aP.displayName = "NodeRenderer";
const YF = k.memo(aP);
function KF(e) {
  return Ae(k.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && Gj({
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
const XF = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return N.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, QF = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return N.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, d_ = {
  [au.Arrow]: XF,
  [au.ArrowClosed]: QF
};
function ZF(e) {
  const t = He();
  return k.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(d_, e) ? d_[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", On.error009(e)), null);
  }, [e]);
}
const JF = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = ZF(t);
  return f ? N.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: N.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, lP = ({ defaultColor: e, rfId: t }) => {
  const n = Ae((a) => a.edges), o = Ae((a) => a.defaultEdgeOptions), i = k.useMemo(() => eq(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? N.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: N.jsx("defs", { children: i.map((a) => N.jsx(JF, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
lP.displayName = "MarkerDefinitions";
var e3 = k.memo(lP);
function uP({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
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
uP.displayName = "EdgeText";
const t3 = k.memo(uP);
function Lu({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return N.jsxs(N.Fragment, { children: [N.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? N.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && gn(t) && gn(n) ? N.jsx(t3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function h_({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function cP({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top }) {
  const [l, u] = h_({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = h_({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = IN({
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
function fP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: _ }) => {
    const [C, b, R] = cP({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return N.jsx(Lu, { id: P, path: C, labelX: b, labelY: R, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: _ });
  });
}
const n3 = fP({ isInternal: !1 }), dP = fP({ isInternal: !0 });
n3.displayName = "SimpleBezierEdge";
dP.displayName = "SimpleBezierEdgeInternal";
function hP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = ye.Bottom, targetPosition: S = ye.Top, markerEnd: y, markerStart: x, pathOptions: _, interactionWidth: C }) => {
    const [b, R, P] = dy({
      sourceX: n,
      sourceY: o,
      sourcePosition: v,
      targetX: i,
      targetY: a,
      targetPosition: S,
      borderRadius: _ == null ? void 0 : _.borderRadius,
      offset: _ == null ? void 0 : _.offset,
      stepPosition: _ == null ? void 0 : _.stepPosition
    }), T = e.isInternal ? void 0 : t;
    return N.jsx(Lu, { id: T, path: b, labelX: R, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const pP = hP({ isInternal: !1 }), gP = hP({ isInternal: !0 });
pP.displayName = "SmoothStepEdge";
gP.displayName = "SmoothStepEdgeInternal";
function mP(e) {
  return k.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return N.jsx(pP, { ...n, id: o, pathOptions: k.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const r3 = mP({ isInternal: !1 }), vP = mP({ isInternal: !0 });
r3.displayName = "StepEdge";
vP.displayName = "StepEdgeInternal";
function yP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y }) => {
    const [x, _, C] = LN({ sourceX: n, sourceY: o, targetX: i, targetY: a }), b = e.isInternal ? void 0 : t;
    return N.jsx(Lu, { id: b, path: x, labelX: _, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y });
  });
}
const o3 = yP({ isInternal: !1 }), wP = yP({ isInternal: !0 });
o3.displayName = "StraightEdge";
wP.displayName = "StraightEdgeInternal";
function xP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, pathOptions: _, interactionWidth: C }) => {
    const [b, R, P] = AN({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: _ == null ? void 0 : _.curvature
    }), T = e.isInternal ? void 0 : t;
    return N.jsx(Lu, { id: T, path: b, labelX: R, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const i3 = xP({ isInternal: !1 }), bP = xP({ isInternal: !0 });
i3.displayName = "BezierEdge";
bP.displayName = "BezierEdgeInternal";
const p_ = {
  default: bP,
  straight: wP,
  step: vP,
  smoothstep: gP,
  simplebezier: dP
}, g_ = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, s3 = (e, t, n) => n === ye.Left ? e - t : n === ye.Right ? e + t : e, a3 = (e, t, n) => n === ye.Top ? e - t : n === ye.Bottom ? e + t : e, m_ = "react-flow__edgeupdater";
function v_({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return N.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([m_, `${m_}-${u}`]), cx: s3(t, o, e), cy: a3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function l3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const S = He(), y = (R, P) => {
    if (R.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: j, connectionRadius: Y, lib: $, onConnectStart: V, onConnectEnd: W, cancelConnection: L, nodeLookup: H, rfId: q, panBy: G, updateConnection: M } = S.getState(), F = P.type === "target", Q = (ie, B) => {
      m(!1), p == null || p(ie, n, P.type, B);
    }, D = (ie) => d == null ? void 0 : d(n, ie), U = (ie, B) => {
      m(!0), h == null || h(R, n, P.type), V == null || V(ie, B);
    };
    gy.onPointerDown(R.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: j,
      connectionRadius: Y,
      domNode: A,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: H,
      isTarget: F,
      edgeUpdaterType: P.type,
      lib: $,
      flowId: q,
      cancelConnection: L,
      panBy: G,
      isValidConnection: O,
      onConnect: D,
      onConnectStart: U,
      onConnectEnd: W,
      onReconnectEnd: Q,
      updateConnection: M,
      getTransform: () => S.getState().transform,
      getFromHandle: () => S.getState().connection.fromHandle,
      dragThreshold: S.getState().connectionDragThreshold,
      handleDomNode: R.currentTarget
    });
  }, x = (R) => y(R, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), _ = (R) => y(R, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => v(!0), b = () => v(!1);
  return N.jsxs(N.Fragment, { children: [(e === !0 || e === "source") && N.jsx(v_, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: b, type: "source" }), (e === !0 || e === "target") && N.jsx(v_, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: _, onMouseEnter: C, onMouseOut: b, type: "target" })] });
}
function u3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: S, edgeTypes: y, noPanClassName: x, onError: _, disableKeyboardA11y: C }) {
  let b = Ae((de) => de.edgeLookup.get(e));
  const R = Ae((de) => de.defaultEdgeOptions);
  b = R ? { ...R, ...b } : b;
  let P = b.type || "default", T = (y == null ? void 0 : y[P]) || p_[P];
  T === void 0 && (_ == null || _("011", On.error011(P)), P = "default", T = (y == null ? void 0 : y.default) || p_.default);
  const A = !!(b.focusable || t && typeof b.focusable > "u"), O = typeof p < "u" && (b.reconnectable || n && typeof b.reconnectable > "u"), j = !!(b.selectable || o && typeof b.selectable > "u"), Y = k.useRef(null), [$, V] = k.useState(!1), [W, L] = k.useState(!1), H = He(), { zIndex: q, sourceX: G, sourceY: M, targetX: F, targetY: Q, sourcePosition: D, targetPosition: U } = Ae(k.useCallback((de) => {
    const pe = de.nodeLookup.get(b.source), _e = de.nodeLookup.get(b.target);
    if (!pe || !_e)
      return {
        zIndex: b.zIndex,
        ...g_
      };
    const me = Jj({
      id: e,
      sourceNode: pe,
      targetNode: _e,
      sourceHandle: b.sourceHandle || null,
      targetHandle: b.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: _
    });
    return {
      zIndex: Uj({
        selected: b.selected,
        zIndex: b.zIndex,
        sourceNode: pe,
        targetNode: _e,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || g_
    };
  }, [b.source, b.target, b.sourceHandle, b.targetHandle, b.selected, b.zIndex]), Qe), ie = k.useMemo(() => b.markerStart ? `url('#${hy(b.markerStart, S)}')` : void 0, [b.markerStart, S]), B = k.useMemo(() => b.markerEnd ? `url('#${hy(b.markerEnd, S)}')` : void 0, [b.markerEnd, S]);
  if (b.hidden || G === null || M === null || F === null || Q === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: _e, multiSelectionActive: me } = H.getState();
    j && (H.setState({ nodesSelectionActive: !1 }), b.selected && me ? (_e({ nodes: [], edges: [b] }), (Ne = Y.current) == null || Ne.blur()) : pe([e])), i && i(de, b);
  }, ee = a ? (de) => {
    a(de, { ...b });
  } : void 0, X = l ? (de) => {
    l(de, { ...b });
  } : void 0, te = u ? (de) => {
    u(de, { ...b });
  } : void 0, se = f ? (de) => {
    f(de, { ...b });
  } : void 0, ae = d ? (de) => {
    d(de, { ...b });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && vN.includes(de.key) && j) {
      const { unselectNodesAndEdges: _e, addSelectedEdges: me } = H.getState();
      de.key === "Escape" ? ((pe = Y.current) == null || pe.blur(), _e({ edges: [b] })) : me([e]);
    }
  };
  return N.jsx("svg", { style: { zIndex: q }, children: N.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${P}`,
    b.className,
    x,
    {
      selected: b.selected,
      animated: b.animated,
      inactive: !j && !i,
      updating: $,
      selectable: j
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: X, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: b.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": b.ariaLabel === null ? void 0 : b.ariaLabel || `Edge from ${b.source} to ${b.target}`, "aria-describedby": A ? `${XN}-${S}` : void 0, ref: Y, ...b.domAttributes, children: [!W && N.jsx(T, { id: e, source: b.source, target: b.target, type: b.type, selected: b.selected, animated: b.animated, selectable: j, deletable: b.deletable ?? !0, label: b.label, labelStyle: b.labelStyle, labelShowBg: b.labelShowBg, labelBgStyle: b.labelBgStyle, labelBgPadding: b.labelBgPadding, labelBgBorderRadius: b.labelBgBorderRadius, sourceX: G, sourceY: M, targetX: F, targetY: Q, sourcePosition: D, targetPosition: U, data: b.data, style: b.style, sourceHandleId: b.sourceHandle, targetHandleId: b.targetHandle, markerStart: ie, markerEnd: B, pathOptions: "pathOptions" in b ? b.pathOptions : void 0, interactionWidth: b.interactionWidth }), O && N.jsx(l3, { edge: b, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: G, sourceY: M, targetX: F, targetY: Q, sourcePosition: D, targetPosition: U, setUpdateHover: V, setReconnecting: L })] }) });
}
var c3 = k.memo(u3);
const f3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function _P({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: _, elementsSelectable: C, onError: b } = Ae(f3, Qe), R = KF(t);
  return N.jsxs("div", { className: "react-flow__edges", children: [N.jsx(e3, { defaultColor: e, rfId: n }), R.map((P) => N.jsx(c3, { id: P, edgesFocusable: x, edgesReconnectable: _, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, rfId: n, onError: b, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
_P.displayName = "EdgeRenderer";
const d3 = k.memo(_P), h3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function p3({ children: e }) {
  const t = Ae(h3);
  return N.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function g3(e) {
  const t = Gy(), n = k.useRef(!1);
  k.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const m3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function v3(e) {
  const t = Ae(m3), n = He();
  return k.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function y3(e) {
  return e.connection.inProgress ? { ...e.connection, to: ta(e.connection.to, e.transform) } : { ...e.connection };
}
function w3(e) {
  return y3;
}
function x3(e) {
  const t = w3();
  return Ae(t, Qe);
}
const b3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function _3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Ae(b3, Qe);
  return !(a && i && f) ? null : N.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: N.jsx("g", { className: nt(["react-flow__connection", xN(u)]), children: N.jsx(SP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const SP = ({ style: e, type: t = Ir.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = x3();
  if (!i)
    return;
  if (n)
    return N.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: xN(o), toNode: h, toHandle: p, pointer: v });
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
    case Ir.Bezier:
      [S] = AN(y);
      break;
    case Ir.SimpleBezier:
      [S] = cP(y);
      break;
    case Ir.Step:
      [S] = dy({
        ...y,
        borderRadius: 0
      });
      break;
    case Ir.SmoothStep:
      [S] = dy(y);
      break;
    default:
      [S] = LN(y);
  }
  return N.jsx("path", { d: S, fill: "none", className: "react-flow__connection-path", style: e });
};
SP.displayName = "ConnectionLine";
const S3 = {};
function y_(e = S3) {
  k.useRef(e), He(), k.useEffect(() => {
  }, [e]);
}
function E3() {
  He(), k.useRef(!1), k.useEffect(() => {
  }, []);
}
function EP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: S, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: _, selectionKeyCode: C, selectionOnDrag: b, selectionMode: R, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: j, elementsSelectable: Y, defaultViewport: $, translateExtent: V, minZoom: W, maxZoom: L, preventScrolling: H, defaultMarkerColor: q, zoomOnScroll: G, zoomOnPinch: M, panOnScroll: F, panOnScrollSpeed: Q, panOnScrollMode: D, zoomOnDoubleClick: U, panOnDrag: ie, onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Vt, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht, viewport: on, onViewportChange: Wt }) {
  return y_(e), y_(t), E3(), g3(n), v3(on), N.jsx(FF, { onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: b, selectionMode: R, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: Y, zoomOnScroll: G, zoomOnPinch: M, zoomOnDoubleClick: U, panOnScroll: F, panOnScrollSpeed: Q, panOnScrollMode: D, panOnDrag: ie, defaultViewport: $, translateExtent: V, minZoom: W, maxZoom: L, onSelectionContextMenu: p, preventScrolling: H, noDragClassName: Vt, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Wt, isControlledViewport: !!on, children: N.jsxs(p3, { children: [N.jsx(d3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: j, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, defaultMarkerColor: q, noPanClassName: at, disableKeyboardA11y: Ge, rfId: Ht }), N.jsx(_3, { style: y, type: S, component: x, containerStyle: _ }), N.jsx("div", { className: "react-flow__edgelabel-renderer" }), N.jsx(YF, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: j, noPanClassName: at, noDragClassName: Vt, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht }), N.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
EP.displayName = "GraphView";
const C3 = k.memo(EP), w_ = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], _ = n ?? e ?? [], C = h ?? [0, 0], b = p ?? qs;
  qN(S, y, x);
  const R = py(_, m, v, {
    nodeOrigin: C,
    nodeExtent: b,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const T = Js(m, {
      filter: (Y) => !!((Y.width || Y.initialWidth) && (Y.height || Y.initialHeight))
    }), { x: A, y: O, zoom: j } = $y(T, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    P = [A, O, j];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: a ?? 0,
    transform: P,
    nodes: _,
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
    translateExtent: qs,
    nodeExtent: b,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: hi.Strict,
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
    connection: { ...wN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: zj,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: yN
  };
}, k3 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => Vq((m, v) => {
  async function S() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: _, fitViewResolver: C, width: b, height: R, minZoom: P, maxZoom: T } = v();
    x && (await qj({
      nodes: y,
      width: b,
      height: R,
      panZoom: x,
      minZoom: P,
      maxZoom: T
    }, _), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...w_({
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
      const { nodeLookup: x, parentLookup: _, nodeOrigin: C, elevateNodesOnSelect: b, fitViewQueued: R } = v(), P = py(y, x, _, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: b,
        checkEquality: !0
      });
      R && P ? (S(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: _ } = v();
      qN(x, _, y), m({ edges: y });
    },
    setDefaultNodesAndEdges: (y, x) => {
      if (y) {
        const { setNodes: _ } = v();
        _(y), m({ hasDefaultNodes: !0 });
      }
      if (x) {
        const { setEdges: _ } = v();
        _(x), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: x, nodeLookup: _, parentLookup: C, domNode: b, nodeOrigin: R, nodeExtent: P, debug: T, fitViewQueued: A } = v(), { changes: O, updatedInternals: j } = aq(y, _, C, b, R, P);
      j && (rq(_, C, { nodeOrigin: R, nodeExtent: P }), A ? (S(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const _ = [], C = [], { nodeLookup: b, triggerNodeChanges: R } = v();
      for (const [P, T] of y) {
        const A = b.get(P), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (T != null && T.position)), j = {
          id: P,
          type: "position",
          position: O ? {
            x: Math.max(0, T.position.x),
            y: Math.max(0, T.position.y)
          } : T.position,
          dragging: x
        };
        O && A.parentId && _.push({
          id: P,
          parentId: A.parentId,
          rect: {
            ...T.internals.positionAbsolute,
            width: T.measured.width ?? 0,
            height: T.measured.height ?? 0
          }
        }), C.push(j);
      }
      if (_.length > 0) {
        const { parentLookup: P, nodeOrigin: T } = v(), A = Uy(_, b, P, T);
        C.push(...A);
      }
      R(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: _, nodes: C, hasDefaultNodes: b, debug: R } = v();
      if (y != null && y.length) {
        if (b) {
          const P = JN(y, C);
          _(P);
        }
        R && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: _, edges: C, hasDefaultEdges: b, debug: R } = v();
      if (y != null && y.length) {
        if (b) {
          const P = eP(y, C);
          _(P);
        }
        R && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: _, nodeLookup: C, triggerNodeChanges: b, triggerEdgeChanges: R } = v();
      if (x) {
        const P = y.map((T) => io(T, !0));
        b(P);
        return;
      }
      b(ii(C, /* @__PURE__ */ new Set([...y]), !0)), R(ii(_));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: _, nodeLookup: C, triggerNodeChanges: b, triggerEdgeChanges: R } = v();
      if (x) {
        const P = y.map((T) => io(T, !0));
        R(P);
        return;
      }
      R(ii(_, /* @__PURE__ */ new Set([...y]))), b(ii(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: _, nodes: C, nodeLookup: b, triggerNodeChanges: R, triggerEdgeChanges: P } = v(), T = y || C, A = x || _, O = T.map((Y) => {
        const $ = b.get(Y.id);
        return $ && ($.selected = !1), io(Y.id, !1);
      }), j = A.map((Y) => io(Y.id, !1));
      R(O), P(j);
    },
    setMinZoom: (y) => {
      const { panZoom: x, maxZoom: _ } = v();
      x == null || x.setScaleExtent([y, _]), m({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: x, minZoom: _ } = v();
      x == null || x.setScaleExtent([_, y]), m({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var x;
      (x = v().panZoom) == null || x.setTranslateExtent(y), m({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: x, triggerNodeChanges: _, triggerEdgeChanges: C, elementsSelectable: b } = v();
      if (!b)
        return;
      const R = x.reduce((T, A) => A.selected ? [...T, io(A.id, !1)] : T, []), P = y.reduce((T, A) => A.selected ? [...T, io(A.id, !1)] : T, []);
      _(R), C(P);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: _, parentLookup: C, nodeOrigin: b, elevateNodesOnSelect: R, nodeExtent: P } = v();
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (py(x, _, C, {
        nodeOrigin: b,
        nodeExtent: y,
        elevateNodesOnSelect: R,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: _, height: C, panZoom: b, translateExtent: R } = v();
      return lq({ delta: y, panZoom: b, transform: x, translateExtent: R, width: _, height: C });
    },
    setCenter: async (y, x, _) => {
      const { width: C, height: b, maxZoom: R, panZoom: P } = v();
      if (!P)
        return Promise.resolve(!1);
      const T = typeof (_ == null ? void 0 : _.zoom) < "u" ? _.zoom : R;
      return await P.setViewport({
        x: C / 2 - y * T,
        y: b / 2 - x * T,
        zoom: T
      }, { duration: _ == null ? void 0 : _.duration, ease: _ == null ? void 0 : _.ease, interpolate: _ == null ? void 0 : _.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...wN }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...w_() })
  };
}, Object.is);
function CP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = k.useState(() => k3({
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
  return N.jsx(Wq, { value: v, children: N.jsx(pF, { children: m }) });
}
function R3({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return k.useContext(Mu) ? N.jsx(N.Fragment, { children: e }) : N.jsx(CP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const N3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function P3({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: _, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onNodesDelete: Y, onEdgesDelete: $, onDelete: V, onSelectionChange: W, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: q, onSelectionContextMenu: G, onSelectionStart: M, onSelectionEnd: F, onBeforeDelete: Q, connectionMode: D, connectionLineType: U = Ir.Bezier, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: X = "Shift", selectionOnDrag: te = !1, selectionMode: se = Fs.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = $s() ? "Meta" : "Control", zoomActivationKeyCode: de = $s() ? "Meta" : "Control", snapToGrid: pe, snapGrid: _e, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, nodeOrigin: ht = QN, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn = !0, defaultViewport: Ht = oF, minZoom: on = 0.5, maxZoom: Wt = 2, translateExtent: bt = qs, preventScrolling: Fr = !0, nodeExtent: Ut, defaultMarkerColor: zn = "#b1b1b7", zoomOnScroll: Eo = !0, zoomOnPinch: It = !0, panOnScroll: Gt = !1, panOnScrollSpeed: mc = 0.5, panOnScrollMode: Mi = lo.Free, zoomOnDoubleClick: Oi = !0, panOnDrag: Li = !0, onPaneClick: Di, onPaneMouseEnter: ji, onPaneMouseMove: ir, onPaneMouseLeave: sr, onPaneScroll: fa, onPaneContextMenu: da, paneClickDistance: ha = 1, nodeClickDistance: pa = 0, children: ga, onReconnect: qi, onReconnectStart: ma, onReconnectEnd: zr, onEdgeContextMenu: Fi, onEdgeDoubleClick: $r, onEdgeMouseEnter: vc, onEdgeMouseMove: Br, onEdgeMouseLeave: Co, reconnectRadius: ko = 10, onNodesChange: zi, onEdgesChange: yc, noDragClassName: wc = "nodrag", noWheelClassName: xc = "nowheel", noPanClassName: Sn = "nopan", fitView: $i, fitViewOptions: Bi, connectOnClick: bc, attributionPosition: va, proOptions: ya, defaultEdgeOptions: wa, elevateNodesOnSelect: xa, elevateEdgesOnSelect: _c, disableKeyboardA11y: ba = !1, autoPanOnConnect: Ye, autoPanOnNodeDrag: Sc, autoPanSpeed: Vi, connectionRadius: _a, isValidConnection: Ro, onError: Ec, style: Sa, id: Vr, nodeDragThreshold: Yt, connectionDragThreshold: Cc, viewport: At, onViewportChange: kc, width: Rc, height: Nc, colorMode: No = "light", debug: Po, onScroll: En, ariaLabelConfig: To, ...Pc }, Tc) {
  const Hr = Vr || "1", Ea = lF(No), Hi = k.useCallback((ar) => {
    ar.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), En == null || En(ar);
  }, [En]);
  return N.jsx("div", { "data-testid": "rf__wrapper", ...Pc, onScroll: Hi, style: { ...Sa, ...N3 }, ref: Tc, className: nt(["react-flow", i, Ea]), id: Vr, role: "application", children: N.jsxs(R3, { nodes: e, edges: t, width: Rc, height: Nc, fitView: $i, fitViewOptions: Bi, minZoom: on, maxZoom: Wt, nodeOrigin: ht, nodeExtent: Ut, children: [N.jsx(C3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: U, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, selectionKeyCode: X, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: Ht, translateExtent: bt, minZoom: on, maxZoom: Wt, preventScrolling: Fr, zoomOnScroll: Eo, zoomOnPinch: It, zoomOnDoubleClick: Oi, panOnScroll: Gt, panOnScrollSpeed: mc, panOnScrollMode: Mi, panOnDrag: Li, onPaneClick: Di, onPaneMouseEnter: ji, onPaneMouseMove: ir, onPaneMouseLeave: sr, onPaneScroll: fa, onPaneContextMenu: da, paneClickDistance: ha, nodeClickDistance: pa, onSelectionContextMenu: G, onSelectionStart: M, onSelectionEnd: F, onReconnect: qi, onReconnectStart: ma, onReconnectEnd: zr, onEdgeContextMenu: Fi, onEdgeDoubleClick: $r, onEdgeMouseEnter: vc, onEdgeMouseMove: Br, onEdgeMouseLeave: Co, reconnectRadius: ko, defaultMarkerColor: zn, noDragClassName: wc, noWheelClassName: xc, noPanClassName: Sn, rfId: Hr, disableKeyboardA11y: ba, nodeExtent: Ut, viewport: At, onViewportChange: kc }), N.jsx(aF, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: _, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn, elevateNodesOnSelect: xa, elevateEdgesOnSelect: _c, minZoom: on, maxZoom: Wt, nodeExtent: Ut, onNodesChange: zi, onEdgesChange: yc, snapToGrid: pe, snapGrid: _e, connectionMode: D, translateExtent: bt, connectOnClick: bc, defaultEdgeOptions: wa, fitView: $i, fitViewOptions: Bi, onNodesDelete: Y, onEdgesDelete: $, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: q, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: Sn, nodeOrigin: ht, rfId: Hr, autoPanOnConnect: Ye, autoPanOnNodeDrag: Sc, autoPanSpeed: Vi, onError: Ec, connectionRadius: _a, isValidConnection: Ro, selectNodesOnDrag: Ne, nodeDragThreshold: Yt, connectionDragThreshold: Cc, onBeforeDelete: Q, debug: Po, ariaLabelConfig: To }), N.jsx(rF, { onSelectionChange: W }), ga, N.jsx(Zq, { proOptions: ya, position: va }), N.jsx(Qq, { rfId: Hr, disableKeyboardA11y: ba })] }) });
}
var T3 = tP(P3);
function I3({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return N.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function A3({ radius: e, className: t }) {
  return N.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Ar;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ar || (Ar = {}));
const M3 = {
  [Ar.Dots]: 1,
  [Ar.Lines]: 1,
  [Ar.Cross]: 6
}, O3 = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function kP({
  id: e,
  variant: t = Ar.Dots,
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
  const p = k.useRef(null), { transform: m, patternId: v } = Ae(O3, Qe), S = o || M3[t], y = t === Ar.Dots, x = t === Ar.Cross, _ = Array.isArray(n) ? n : [n, n], C = [_[0] * m[2] || 1, _[1] * m[2] || 1], b = S * m[2], R = Array.isArray(a) ? a : [a, a], P = x ? [b, b] : C, T = [
    R[0] * m[2] || 1 + P[0] / 2,
    R[1] * m[2] || 1 + P[1] / 2
  ], A = `${v}${e || ""}`;
  return N.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...Ou,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [N.jsx("pattern", { id: A, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? N.jsx(A3, { radius: b / 2, className: h }) : N.jsx(I3, { dimensions: P, lineWidth: i, variant: t, className: h }) }), N.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
kP.displayName = "Background";
const L3 = k.memo(kP);
function D3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: N.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function j3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: N.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function q3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: N.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function F3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function z3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Dl({ children: e, className: t, ...n }) {
  return N.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const $3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function RP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const S = He(), { isInteractive: y, minZoomReached: x, maxZoomReached: _, ariaLabelConfig: C } = Ae($3, Qe), { zoomIn: b, zoomOut: R, fitView: P } = Gy(), T = () => {
    b(), a == null || a();
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
  }, Y = m === "horizontal" ? "horizontal" : "vertical";
  return N.jsxs(ra, { className: nt(["react-flow__controls", Y, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && N.jsxs(N.Fragment, { children: [N.jsx(Dl, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: _, children: N.jsx(D3, {}) }), N.jsx(Dl, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: N.jsx(j3, {}) })] }), n && N.jsx(Dl, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: N.jsx(q3, {}) }), o && N.jsx(Dl, { className: "react-flow__controls-interactive", onClick: j, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? N.jsx(z3, {}) : N.jsx(F3, {}) }), h] });
}
RP.displayName = "Controls";
const B3 = k.memo(RP);
function V3({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: S, backgroundColor: y } = a || {}, x = l || S || y;
  return N.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (_) => v(_, e) : void 0 });
}
const H3 = k.memo(V3), W3 = (e) => e.nodes.map((t) => t.id), kd = (e) => e instanceof Function ? e : () => e;
function U3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = H3,
  onClick: l
}) {
  const u = Ae(W3, Qe), f = kd(t), d = kd(e), h = kd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return N.jsx(N.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    N.jsx(Y3, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function G3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Ae((S) => {
    const { internals: y } = S.nodeLookup.get(e), x = y.userNode, { x: _, y: C } = y.positionAbsolute, { width: b, height: R } = nr(x);
    return {
      node: x,
      x: _,
      y: C,
      width: b,
      height: R
    };
  }, Qe);
  return !d || d.hidden || !kN(d) ? null : N.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const Y3 = k.memo(G3);
var K3 = k.memo(U3);
const X3 = 200, Q3 = 150, Z3 = (e) => !e.hidden, J3 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? CN(Js(e.nodeLookup, { filter: Z3 }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, ez = "react-flow__minimap-desc";
function NP({
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
  ariaLabel: _,
  inversePan: C,
  zoomStep: b = 1,
  offsetScale: R = 5
}) {
  const P = He(), T = k.useRef(null), { boundingRect: A, viewBB: O, rfId: j, panZoom: Y, translateExtent: $, flowWidth: V, flowHeight: W, ariaLabelConfig: L } = Ae(J3, Qe), H = (e == null ? void 0 : e.width) ?? X3, q = (e == null ? void 0 : e.height) ?? Q3, G = A.width / H, M = A.height / q, F = Math.max(G, M), Q = F * H, D = F * q, U = R * F, ie = A.x - (Q - A.width) / 2 - U, B = A.y - (D - A.height) / 2 - U, Z = Q + U * 2, ee = D + U * 2, X = `${ez}-${j}`, te = k.useRef(0), se = k.useRef();
  te.current = F, k.useEffect(() => {
    if (T.current && Y)
      return se.current = vq({
        domNode: T.current,
        panZoom: Y,
        getTransform: () => P.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [Y]), k.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: $,
      width: V,
      height: W,
      inversePan: C,
      pannable: y,
      zoomStep: b,
      zoomable: x
    });
  }, [y, x, C, b, $, V, W]);
  const ae = v ? (pe) => {
    var Ne;
    const [_e, me] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    v(pe, { x: _e, y: me });
  } : void 0, ce = S ? k.useCallback((pe, _e) => {
    const me = P.getState().nodeLookup.get(_e).internals.userNode;
    S(pe, me);
  }, []) : void 0, de = _ ?? L["minimap.ariaLabel"];
  return N.jsx(ra, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * F : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: N.jsxs("svg", { width: H, height: q, viewBox: `${ie} ${B} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": X, ref: T, onClick: ae, children: [de && N.jsx("title", { id: X, children: de }), N.jsx(K3, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), N.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - U},${B - U}h${Z + U * 2}v${ee + U * 2}h${-Z - U * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
NP.displayName = "MiniMap";
k.memo(NP);
const tz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, nz = {
  [vi.Line]: "right",
  [vi.Handle]: "bottom-right"
};
function rz({ nodeId: e, position: t, variant: n = vi.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: S, onResizeStart: y, onResize: x, onResizeEnd: _ }) {
  const C = iP(), b = typeof e == "string" ? e : C, R = He(), P = k.useRef(null), T = n === vi.Handle, A = Ae(k.useCallback(tz(T && v), [T, v]), Qe), O = k.useRef(null), j = t ?? nz[n];
  k.useEffect(() => {
    if (!(!P.current || !b))
      return O.current || (O.current = Iq({
        domNode: P.current,
        nodeId: b,
        getStoreItems: () => {
          const { nodeLookup: $, transform: V, snapGrid: W, snapToGrid: L, nodeOrigin: H, domNode: q } = R.getState();
          return {
            nodeLookup: $,
            transform: V,
            snapGrid: W,
            snapToGrid: L,
            nodeOrigin: H,
            paneDomNode: q
          };
        },
        onChange: ($, V) => {
          const { triggerNodeChanges: W, nodeLookup: L, parentLookup: H, nodeOrigin: q } = R.getState(), G = [], M = { x: $.x, y: $.y }, F = L.get(b);
          if (F && F.expandParent && F.parentId) {
            const Q = F.origin ?? q, D = $.width ?? F.measured.width ?? 0, U = $.height ?? F.measured.height ?? 0, ie = {
              id: F.id,
              parentId: F.parentId,
              rect: {
                width: D,
                height: U,
                ...RN({
                  x: $.x ?? F.position.x,
                  y: $.y ?? F.position.y
                }, { width: D, height: U }, F.parentId, L, Q)
              }
            }, B = Uy([ie], L, H, q);
            G.push(...B), M.x = $.x ? Math.max(Q[0] * D, $.x) : void 0, M.y = $.y ? Math.max(Q[1] * U, $.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: b,
              type: "position",
              position: { ...M }
            };
            G.push(Q);
          }
          if ($.width !== void 0 && $.height !== void 0) {
            const D = {
              id: b,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: $.width,
                height: $.height
              }
            };
            G.push(D);
          }
          for (const Q of V) {
            const D = {
              ...Q,
              type: "position"
            };
            G.push(D);
          }
          W(G);
        },
        onEnd: ({ width: $, height: V }) => {
          const W = {
            id: b,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: $,
              height: V
            }
          };
          R.getState().triggerNodeChanges([W]);
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
        onResizeEnd: _,
        shouldResize: S
      }), () => {
        var $;
        ($ = O.current) == null || $.destroy();
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
    _,
    S
  ]);
  const Y = j.split("-");
  return N.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...Y, n, o]), ref: P, style: {
    ...i,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
k.memo(rz);
function PP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = PP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function TP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = PP(e)) && (o && (o += " "), o += t);
  return o;
}
const oz = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, iz = (e, t) => ({
  classGroupId: e,
  validator: t
}), IP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), fu = "-", x_ = [], sz = "arbitrary..", az = (e) => {
  const t = uz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return lz(l);
      const u = l.split(fu), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return AP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? oz(d, f) : f : d || x_;
      }
      return n[l] || x_;
    }
  };
}, AP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = AP(e, t + 1, a);
    if (d) return d;
  }
  const l = n.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(fu) : e.slice(t).join(fu), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, lz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? sz + o : void 0;
})(), uz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return cz(n, t);
}, cz = (e, t) => {
  const n = IP();
  for (const o in e) {
    const i = e[o];
    Ky(i, n, o, t);
  }
  return n;
}, Ky = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    fz(l, t, n, o);
  }
}, fz = (e, t, n, o) => {
  if (typeof e == "string") {
    dz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    hz(e, t, n, o);
    return;
  }
  pz(e, t, n, o);
}, dz = (e, t, n) => {
  const o = e === "" ? t : MP(t, e);
  o.classGroupId = n;
}, hz = (e, t, n, o) => {
  if (gz(e)) {
    Ky(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(iz(n, e));
}, pz = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    Ky(f, MP(t, u), n, o);
  }
}, MP = (e, t) => {
  let n = e;
  const o = t.split(fu), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = IP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, gz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, mz = (e) => {
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
}, vy = "!", b_ = ":", vz = [], __ = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), yz = (e) => {
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
        if (x === b_) {
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
    p.endsWith(vy) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(vy) && (m = p.slice(1), v = !0)
    );
    const S = d && d > f ? d - f : void 0;
    return __(a, v, m, S);
  };
  if (t) {
    const i = t + b_, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : __(vz, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, wz = (e) => {
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
}, xz = (e) => ({
  cache: mz(e.cacheSize),
  parseClassName: yz(e),
  sortModifiers: wz(e),
  ...az(e)
}), bz = /\s+/, _z = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(bz);
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
    let x = !!y, _ = o(x ? S.substring(0, y) : S);
    if (!_) {
      if (!x) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (_ = o(S), !_) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      x = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), b = v ? C + vy : C, R = b + _;
    if (l.indexOf(R) > -1)
      continue;
    l.push(R);
    const P = i(_, x);
    for (let T = 0; T < P.length; ++T) {
      const A = P[T];
      l.push(b + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Sz = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = OP(n)) && (i && (i += " "), i += o);
  return i;
}, OP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = OP(e[o])) && (n && (n += " "), n += t);
  return n;
}, Ez = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = xz(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = _z(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(Sz(...f));
}, Cz = [], st = (e) => {
  const t = (n) => n[e] || Cz;
  return t.isThemeGetter = !0, t;
}, LP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, DP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, kz = /^\d+\/\d+$/, Rz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nz = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Tz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Iz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ei = (e) => kz.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Pr = (e) => !!e && Number.isInteger(Number(e)), Rd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Xn = (e) => Rz.test(e), Az = () => !0, Mz = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nz.test(e) && !Pz.test(e)
), jP = () => !1, Oz = (e) => Tz.test(e), Lz = (e) => Iz.test(e), Dz = (e) => !xe(e) && !be(e), jz = (e) => xi(e, zP, jP), xe = (e) => LP.test(e), oo = (e) => xi(e, $P, Mz), Nd = (e) => xi(e, Bz, Te), S_ = (e) => xi(e, qP, jP), qz = (e) => xi(e, FP, Lz), jl = (e) => xi(e, BP, Oz), be = (e) => DP.test(e), Cs = (e) => bi(e, $P), Fz = (e) => bi(e, Vz), E_ = (e) => bi(e, qP), zz = (e) => bi(e, zP), $z = (e) => bi(e, FP), ql = (e) => bi(e, BP, !0), xi = (e, t, n) => {
  const o = LP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, bi = (e, t, n = !1) => {
  const o = DP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, qP = (e) => e === "position" || e === "percentage", FP = (e) => e === "image" || e === "url", zP = (e) => e === "length" || e === "size" || e === "bg-size", $P = (e) => e === "length", Bz = (e) => e === "number", Vz = (e) => e === "family-name", BP = (e) => e === "shadow", Hz = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), i = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), p = st("inset-shadow"), m = st("text-shadow"), v = st("drop-shadow"), S = st("blur"), y = st("perspective"), x = st("aspect"), _ = st("ease"), C = st("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
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
  ], P = () => [...R(), be, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [be, xe, f], j = () => [ei, "full", "auto", ...O()], Y = () => [Pr, "none", "subgrid", be, xe], $ = () => ["auto", {
    span: ["full", Pr, be, xe]
  }, Pr, be, xe], V = () => [Pr, "auto", be, xe], W = () => ["auto", "min", "max", "fr", be, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...O()], G = () => [ei, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, be, xe], F = () => [...R(), E_, S_, {
    position: [be, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", zz, jz, {
    size: [be, xe]
  }], U = () => [Rd, Cs, oo], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    be,
    xe
  ], B = () => ["", Te, Cs, oo], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [Te, Rd, E_, S_], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    S,
    be,
    xe
  ], se = () => ["none", Te, be, xe], ae = () => ["none", Te, be, xe], ce = () => [Te, be, xe], de = () => [ei, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Xn],
      breakpoint: [Xn],
      color: [Az],
      container: [Xn],
      "drop-shadow": [Xn],
      ease: ["in", "out", "in-out"],
      font: [Dz],
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
        aspect: ["auto", "square", ei, xe, be, x]
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
        z: [Pr, "auto", be, xe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ei, "full", "auto", u, ...O()]
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
        flex: [Te, ei, "auto", "initial", "none", xe]
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
        order: [Pr, "first", "last", "none", be, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
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
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
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
        size: G()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...G()]
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
          ...G()
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
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Cs, oo]
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
        font: [o, be, Nd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Rd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Fz, xe, t]
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
        "line-clamp": [Te, "none", be, Nd]
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
        decoration: [Te, "from-font", "auto", be, oo]
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
          }, Pr, be, xe],
          radial: ["", be, xe],
          conic: [Pr, be, xe]
        }, $z, qz]
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
        border: B()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
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
        "divide-y": B()
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
        outline: ["", Te, Cs, oo]
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
          ql,
          jl
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
        "inset-shadow": ["none", p, ql, jl]
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
        ring: B()
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
        "ring-offset": [Te, oo]
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
        "inset-ring": B()
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
        "text-shadow": ["none", m, ql, jl]
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
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": X()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": X()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": X()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": X()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": X()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": X()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": X()
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
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": X()
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
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": X()
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
          ql,
          jl
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
        ease: ["linear", "initial", _, be, xe]
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
        stroke: [Te, Cs, oo, Nd]
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
}, Wz = /* @__PURE__ */ Ez(Hz);
function Me(...e) {
  return Wz(TP(e));
}
function Du(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(Du, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: n,
    style: o,
    ...i
  } = e, [a, l] = k.useState(!1);
  return /* @__PURE__ */ N.jsx(
    Hs,
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
const Uz = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function VP(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? ye.Left : ye.Right, m = d.label + (d.required ? " *" : "");
    return /* @__PURE__ */ N.jsx(VP, { type: h, position: p, id: d.id, title: m });
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
        Uz[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ N.jsx(
          Du,
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
const Gz = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function HP(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(HP, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ N.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ N.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: n = ye.Bottom,
    children: o,
    ...i
  } = e, a = Gz[n || ye.Bottom], l = n === ye.Top || n === ye.Bottom;
  return /* @__PURE__ */ N.jsx(Du, { position: n, id: i.id, ...i, children: t && /* @__PURE__ */ N.jsxs(
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
function du({ className: e, type: t, ...n }) {
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
const WP = qt.createContext(null);
function _i() {
  return qt.useContext(WP);
}
function Yz(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function Kz(e) {
  var a;
  if ("component" in e) {
    const { component: l, onValueChange: u } = e, f = _i(), d = ((a = f == null ? void 0 : f.nodeData.values) == null ? void 0 : a[l.id]) ?? l.value ?? "", h = l.label ?? Yz(l.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-text-field", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600 mb-1", children: h }),
      /* @__PURE__ */ N.jsx(
        du,
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
  return /* @__PURE__ */ N.jsx(
    du,
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
function Xz(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function Qz(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = _i(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? 0, p = u.label ?? Xz(u.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-number-field", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600 mb-1", children: p }),
      /* @__PURE__ */ N.jsx(
        du,
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
  return /* @__PURE__ */ N.jsx(
    du,
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
function C_(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Si(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = C_(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : C_(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return k.useCallback(Si(...e), e);
}
function Zz(e, t) {
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
function Ei(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l), f = n.length;
    n = [...n, l];
    const d = (p) => {
      var _;
      const { scope: m, children: v, ...S } = p, y = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[f]) || u, x = k.useMemo(() => S, Object.values(S));
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
  return i.scopeName = e, [o, Jz(i, ...t)];
}
function Jz(...e) {
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
}, e$ = Iy[" useInsertionEffect ".trim().toString()] || yt;
function Ws({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = t$({
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
        const m = n$(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function t$({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = k.useState(e), i = k.useRef(n), a = k.useRef(t);
  return e$(() => {
    a.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function n$(e) {
  return typeof e == "function";
}
function UP(e) {
  const t = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function GP(e) {
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
function r$(e, t) {
  return k.useReducer((n, o) => t[n][o] ?? n, e);
}
var wo = (e) => {
  const { present: t, children: n } = e, o = o$(t), i = typeof n == "function" ? n({ present: o.isPresent }) : k.Children.only(n), a = Be(o.ref, i$(i));
  return typeof n == "function" || o.isPresent ? k.cloneElement(i, { ref: a }) : null;
};
wo.displayName = "Presence";
function o$(e) {
  const [t, n] = k.useState(), o = k.useRef(null), i = k.useRef(e), a = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = r$(l, {
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
    const d = Fl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = Fl(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = Fl(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Fl(o.current));
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
function Fl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function i$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function s$(e) {
  const t = /* @__PURE__ */ a$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(u$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function a$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = f$(i), u = c$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Si(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var l$ = Symbol("radix.slottable");
function u$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === l$;
}
function c$(e, t) {
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
function f$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var d$ = [
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
], je = d$.reduce((e, t) => {
  const n = /* @__PURE__ */ s$(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function h$(e, t) {
  e && na.flushSync(() => e.dispatchEvent(t));
}
var ju = "Checkbox", [p$] = Ei(ju), [g$, Xy] = p$(ju);
function m$(e) {
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
  } = e, [m, v] = Ws({
    prop: n,
    defaultProp: i ?? !1,
    onChange: f,
    caller: ju
  }), [S, y] = k.useState(null), [x, _] = k.useState(null), C = k.useRef(!1), b = S ? !!l || !!S.closest("form") : (
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
    defaultChecked: Mr(i) ? !1 : i,
    isFormControl: b,
    bubbleInput: x,
    setBubbleInput: _
  };
  return /* @__PURE__ */ N.jsx(
    g$,
    {
      scope: t,
      ...R,
      children: v$(p) ? p(R) : o
    }
  );
}
var YP = "CheckboxTrigger", KP = k.forwardRef(
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
    } = Xy(YP, e), y = Be(i, h), x = k.useRef(f);
    return k.useEffect(() => {
      const _ = a == null ? void 0 : a.form;
      if (_) {
        const C = () => p(x.current);
        return _.addEventListener("reset", C), () => _.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ N.jsx(
      je.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Mr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": tT(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Le(t, (_) => {
          _.key === "Enter" && _.preventDefault();
        }),
        onClick: Le(n, (_) => {
          p((C) => Mr(C) ? !0 : !C), S && v && (m.current = _.isPropagationStopped(), m.current || _.stopPropagation());
        })
      }
    );
  }
);
KP.displayName = YP;
var XP = k.forwardRef(
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
      m$,
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
            KP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ N.jsx(
            eT,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
XP.displayName = ju;
var QP = "CheckboxIndicator", ZP = k.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = Xy(QP, n);
    return /* @__PURE__ */ N.jsx(
      wo,
      {
        present: o || Mr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ N.jsx(
          je.span,
          {
            "data-state": tT(a.checked),
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
ZP.displayName = QP;
var JP = "CheckboxBubbleInput", eT = k.forwardRef(
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
    } = Xy(JP, e), S = Be(n, v), y = UP(a), x = GP(o);
    k.useEffect(() => {
      const C = m;
      if (!C) return;
      const b = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, T = !i.current;
      if (y !== a && P) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Mr(a), P.call(C, Mr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [m, y, a, i]);
    const _ = k.useRef(Mr(a) ? !1 : a);
    return /* @__PURE__ */ N.jsx(
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
eT.displayName = JP;
function v$(e) {
  return typeof e == "function";
}
function Mr(e) {
  return e === "indeterminate";
}
function tT(e) {
  return Mr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), w$ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), k_ = (e) => {
  const t = w$(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, nT = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), x$ = (e) => {
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
var b$ = {
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
const _$ = k.forwardRef(
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
      ...b$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: nT("lucide", i),
      ...!a && !x$(u) && { "aria-hidden": "true" },
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
    ({ className: o, ...i }, a) => k.createElement(_$, {
      ref: a,
      iconNode: t,
      className: nT(
        `lucide-${y$(k_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = k_(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S$ = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], E$ = jn("arrow-down-wide-narrow", S$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C$ = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], k$ = jn("arrow-right-from-line", C$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R$ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], rT = jn("check", R$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], oT = jn("chevron-down", N$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], T$ = jn("chevron-up", P$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I$ = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], A$ = jn("download", I$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M$ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], O$ = jn("panel-left", M$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L$ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], D$ = jn("plus", L$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j$ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], q$ = jn("trash-2", j$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], z$ = jn("x", F$);
function R_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    XP,
    {
      "data-slot": "checkbox",
      className: Me(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(
        ZP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ N.jsx(rT, { className: "size-3.5" })
        }
      )
    }
  );
}
function $$(e) {
  var i;
  if ("component" in e) {
    const { component: a, onValueChange: l } = e, u = _i(), f = ((i = u == null ? void 0 : u.nodeData.values) == null ? void 0 : i[a.id]) ?? a.value ?? !1;
    return /* @__PURE__ */ N.jsxs("div", { className: "component-bool-field flex items-center gap-2", children: [
      /* @__PURE__ */ N.jsx(
        R_,
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
    R_,
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
function N_(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function P_(e) {
  const t = /* @__PURE__ */ B$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(H$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function B$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = U$(i), u = W$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Si(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var V$ = Symbol("radix.slottable");
function H$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === V$;
}
function W$(e, t) {
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
function U$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function G$(e) {
  const t = e + "CollectionProvider", [n, o] = Ei(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: _ } = y, C = qt.useRef(null), b = qt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.jsx(i, { scope: x, itemMap: b, collectionRef: C, children: _ });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ P_(u), d = qt.forwardRef(
    (y, x) => {
      const { scope: _, children: C } = y, b = a(u, _), R = Be(x, b.collectionRef);
      return /* @__PURE__ */ N.jsx(f, { ref: R, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ P_(h), v = qt.forwardRef(
    (y, x) => {
      const { scope: _, children: C, ...b } = y, R = qt.useRef(null), P = Be(x, R), T = a(h, _);
      return qt.useEffect(() => (T.itemMap.set(R, { ref: R, ...b }), () => void T.itemMap.delete(R))), /* @__PURE__ */ N.jsx(m, { [p]: "", ref: P, children: C });
    }
  );
  v.displayName = h;
  function S(y) {
    const x = a(e + "CollectionConsumer", y);
    return qt.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const b = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (T, A) => b.indexOf(T.ref.current) - b.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    S,
    o
  ];
}
var Y$ = k.createContext(void 0);
function K$(e) {
  const t = k.useContext(Y$);
  return e || t || "ltr";
}
function po(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function X$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e);
  k.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Q$ = "DismissableLayer", yy = "dismissableLayer.update", Z$ = "dismissableLayer.pointerDownOutside", J$ = "dismissableLayer.focusOutside", T_, iT = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), qu = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = k.useContext(iT), [h, p] = k.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = k.useState({}), S = Be(t, (A) => p(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), _ = y.indexOf(x), C = h ? y.indexOf(h) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, R = C >= _, P = n4((A) => {
      const O = A.target, j = [...d.branches].some((Y) => Y.contains(O));
      !R || j || (i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m), T = r4((A) => {
      const O = A.target;
      [...d.branches].some((Y) => Y.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m);
    return X$((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, m), k.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (T_ = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), I_(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = T_);
        };
    }, [h, m, n, d]), k.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), I_());
    }, [h, d]), k.useEffect(() => {
      const A = () => v({});
      return document.addEventListener(yy, A), () => document.removeEventListener(yy, A);
    }, []), /* @__PURE__ */ N.jsx(
      je.div,
      {
        ...f,
        ref: S,
        style: {
          pointerEvents: b ? R ? "auto" : "none" : void 0,
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
qu.displayName = Q$;
var e4 = "DismissableLayerBranch", t4 = k.forwardRef((e, t) => {
  const n = k.useContext(iT), o = k.useRef(null), i = Be(t, o);
  return k.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ N.jsx(je.div, { ...e, ref: i });
});
t4.displayName = e4;
function n4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e), o = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          sT(
            Z$,
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
function r4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e), o = k.useRef(!1);
  return k.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && sT(J$, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function I_() {
  const e = new CustomEvent(yy);
  document.dispatchEvent(e);
}
function sT(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? h$(i, a) : i.dispatchEvent(a);
}
var Pd = 0;
function aT() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? A_()), document.body.insertAdjacentElement("beforeend", e[1] ?? A_()), Pd++, () => {
      Pd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Pd--;
    };
  }, []);
}
function A_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Td = "focusScope.autoFocusOnMount", Id = "focusScope.autoFocusOnUnmount", M_ = { bubbles: !1, cancelable: !0 }, o4 = "FocusScope", Qy = k.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = k.useState(null), d = po(i), h = po(a), p = k.useRef(null), m = Be(t, (y) => f(y)), v = k.useRef({
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
        const R = b.target;
        u.contains(R) ? p.current = R : Tr(p.current, { select: !0 });
      }, x = function(b) {
        if (v.paused || !u) return;
        const R = b.relatedTarget;
        R !== null && (u.contains(R) || Tr(p.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const P of b)
            P.removedNodes.length > 0 && Tr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(_);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, v.paused]), k.useEffect(() => {
    if (u) {
      L_.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const _ = new CustomEvent(Td, M_);
        u.addEventListener(Td, d), u.dispatchEvent(_), _.defaultPrevented || (i4(c4(lT(u)), { select: !0 }), document.activeElement === y && Tr(u));
      }
      return () => {
        u.removeEventListener(Td, d), setTimeout(() => {
          const _ = new CustomEvent(Id, M_);
          u.addEventListener(Id, h), u.dispatchEvent(_), _.defaultPrevented || Tr(y ?? document.body, { select: !0 }), u.removeEventListener(Id, h), L_.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const S = k.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, _ = document.activeElement;
      if (x && _) {
        const C = y.currentTarget, [b, R] = s4(C);
        b && R ? !y.shiftKey && _ === R ? (y.preventDefault(), n && Tr(b, { select: !0 })) : y.shiftKey && _ === b && (y.preventDefault(), n && Tr(R, { select: !0 })) : _ === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ N.jsx(je.div, { tabIndex: -1, ...l, ref: m, onKeyDown: S });
});
Qy.displayName = o4;
function i4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Tr(o, { select: t }), document.activeElement !== n) return;
}
function s4(e) {
  const t = lT(e), n = O_(t, e), o = O_(t.reverse(), e);
  return [n, o];
}
function lT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function O_(e, t) {
  for (const n of e)
    if (!a4(n, { upTo: t })) return n;
}
function a4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function l4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Tr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && l4(e) && t && e.select();
  }
}
var L_ = u4();
function u4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = D_(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = D_(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function D_(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function c4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var f4 = Iy[" useId ".trim().toString()] || (() => {
}), d4 = 0;
function uo(e) {
  const [t, n] = k.useState(f4());
  return yt(() => {
    n((o) => o ?? String(d4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const h4 = ["top", "right", "bottom", "left"], Or = Math.min, Ft = Math.max, hu = Math.round, zl = Math.floor, Mn = (e) => ({
  x: e,
  y: e
}), p4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, g4 = {
  start: "end",
  end: "start"
};
function wy(e, t, n) {
  return Ft(e, Or(t, n));
}
function er(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tr(e) {
  return e.split("-")[0];
}
function Ci(e) {
  return e.split("-")[1];
}
function Zy(e) {
  return e === "x" ? "y" : "x";
}
function Jy(e) {
  return e === "y" ? "height" : "width";
}
const m4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function In(e) {
  return m4.has(tr(e)) ? "y" : "x";
}
function e0(e) {
  return Zy(In(e));
}
function v4(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ci(e), i = e0(e), a = Jy(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = pu(l)), [l, pu(l)];
}
function y4(e) {
  const t = pu(e);
  return [xy(e), t, xy(t)];
}
function xy(e) {
  return e.replace(/start|end/g, (t) => g4[t]);
}
const j_ = ["left", "right"], q_ = ["right", "left"], w4 = ["top", "bottom"], x4 = ["bottom", "top"];
function b4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? q_ : j_ : t ? j_ : q_;
    case "left":
    case "right":
      return t ? w4 : x4;
    default:
      return [];
  }
}
function _4(e, t, n, o) {
  const i = Ci(e);
  let a = b4(tr(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(xy)))), a;
}
function pu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => p4[t]);
}
function S4(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function uT(e) {
  return typeof e != "number" ? S4(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function gu(e) {
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
function F_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = In(t), l = e0(t), u = Jy(l), f = tr(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
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
  switch (Ci(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const E4 = async (e, t, n) => {
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
  } = F_(d, o, f), m = o, v = {}, S = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: x,
      fn: _
    } = u[y], {
      x: C,
      y: b,
      data: R,
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
    } = F_(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: i,
    middlewareData: v
  };
};
async function Us(e, t) {
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
  } = er(t, e), S = uT(v), x = u[m ? p === "floating" ? "reference" : "floating" : p], _ = gu(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), R = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = gu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: b,
    strategy: f
  }) : C);
  return {
    top: (_.top - P.top + S.top) / R.y,
    bottom: (P.bottom - _.bottom + S.bottom) / R.y,
    left: (_.left - P.left + S.left) / R.x,
    right: (P.right - _.right + S.right) / R.x
  };
}
const C4 = (e) => ({
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
    } = er(e, t) || {};
    if (d == null)
      return {};
    const p = uT(h), m = {
      x: n,
      y: o
    }, v = e0(i), S = Jy(v), y = await l.getDimensions(d), x = v === "y", _ = x ? "top" : "left", C = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", R = a.reference[S] + a.reference[v] - m[v] - a.floating[S], P = m[v] - a.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[b] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[b] || a.floating[S]);
    const O = R / 2 - P / 2, j = A / 2 - y[S] / 2 - 1, Y = Or(p[_], j), $ = Or(p[C], j), V = Y, W = A - y[S] - $, L = A / 2 - y[S] / 2 + O, H = wy(V, L, W), q = !f.arrow && Ci(i) != null && L !== H && a.reference[S] / 2 - (L < V ? Y : $) - y[S] / 2 < 0, G = q ? L < V ? L - V : L - W : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: H,
        centerOffset: L - H - G,
        ...q && {
          alignmentOffset: G
        }
      },
      reset: q
    };
  }
}), k4 = function(e) {
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
      } = er(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const _ = tr(i), C = In(u), b = tr(u) === u, R = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (b || !y ? [pu(u)] : y4(u)), T = S !== "none";
      !m && T && P.push(..._4(u, y, S, R));
      const A = [u, ...P], O = await Us(t, x), j = [];
      let Y = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && j.push(O[_]), p) {
        const L = v4(i, l, R);
        j.push(O[L[0]], O[L[1]]);
      }
      if (Y = [...Y, {
        placement: i,
        overflows: j
      }], !j.every((L) => L <= 0)) {
        var $, V;
        const L = ((($ = a.flip) == null ? void 0 : $.index) || 0) + 1, H = A[L];
        if (H && (!(p === "alignment" ? C !== In(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((M) => In(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: Y
            },
            reset: {
              placement: H
            }
          };
        let q = (V = Y.filter((G) => G.overflows[0] <= 0).sort((G, M) => G.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var W;
              const G = (W = Y.filter((M) => {
                if (T) {
                  const F = In(M.placement);
                  return F === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, Q) => F + Q, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : W[0];
              G && (q = G);
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
function z_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $_(e) {
  return h4.some((t) => e[t] >= 0);
}
const R4 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = er(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Us(t, {
            ...i,
            elementContext: "reference"
          }), l = z_(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: $_(l)
            }
          };
        }
        case "escaped": {
          const a = await Us(t, {
            ...i,
            altBoundary: !0
          }), l = z_(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: $_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cT = /* @__PURE__ */ new Set(["left", "top"]);
async function N4(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = tr(n), u = Ci(n), f = In(n) === "y", d = cT.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = er(t, e);
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
const P4 = function(e) {
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
      } = t, f = await N4(t, e);
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
}, T4 = function(e) {
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
              x: _,
              y: C
            } = x;
            return {
              x: _,
              y: C
            };
          }
        },
        ...f
      } = er(e, t), d = {
        x: n,
        y: o
      }, h = await Us(t, f), p = In(tr(i)), m = Zy(p);
      let v = d[m], S = d[p];
      if (a) {
        const x = m === "y" ? "top" : "left", _ = m === "y" ? "bottom" : "right", C = v + h[x], b = v - h[_];
        v = wy(C, v, b);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", C = S + h[x], b = S - h[_];
        S = wy(C, S, b);
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
}, I4 = function(e) {
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
      } = er(e, t), h = {
        x: n,
        y: o
      }, p = In(i), m = Zy(p);
      let v = h[m], S = h[p];
      const y = er(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const b = m === "y" ? "height" : "width", R = a.reference[m] - a.floating[b] + x.mainAxis, P = a.reference[m] + a.reference[b] - x.mainAxis;
        v < R ? v = R : v > P && (v = P);
      }
      if (d) {
        var _, C;
        const b = m === "y" ? "width" : "height", R = cT.has(tr(i)), P = a.reference[p] - a.floating[b] + (R && ((_ = l.offset) == null ? void 0 : _[p]) || 0) + (R ? 0 : x.crossAxis), T = a.reference[p] + a.reference[b] + (R ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (R ? x.crossAxis : 0);
        S < P ? S = P : S > T && (S = T);
      }
      return {
        [m]: v,
        [p]: S
      };
    }
  };
}, A4 = function(e) {
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
      } = er(e, t), h = await Us(t, d), p = tr(i), m = Ci(i), v = In(i) === "y", {
        width: S,
        height: y
      } = a.floating;
      let x, _;
      p === "top" || p === "bottom" ? (x = p, _ = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, b = S - h.left - h.right, R = Or(y - h[x], C), P = Or(S - h[_], b), T = !t.middlewareData.shift;
      let A = R, O = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = b), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !m) {
        const Y = Ft(h.left, 0), $ = Ft(h.right, 0), V = Ft(h.top, 0), W = Ft(h.bottom, 0);
        v ? O = S - 2 * (Y !== 0 || $ !== 0 ? Y + $ : Ft(h.left, h.right)) : A = y - 2 * (V !== 0 || W !== 0 ? V + W : Ft(h.top, h.bottom));
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
function Fu() {
  return typeof window < "u";
}
function ki(e) {
  return fT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  var t;
  return (t = (fT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fT(e) {
  return Fu() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function vn(e) {
  return Fu() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Ln(e) {
  return Fu() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function B_(e) {
  return !Fu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const M4 = /* @__PURE__ */ new Set(["inline", "contents"]);
function oa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !M4.has(i);
}
const O4 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function L4(e) {
  return O4.has(ki(e));
}
const D4 = [":popover-open", ":modal"];
function zu(e) {
  return D4.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const j4 = ["transform", "translate", "scale", "rotate", "perspective"], q4 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], F4 = ["paint", "layout", "strict", "content"];
function t0(e) {
  const t = n0(), n = vn(e) ? yn(e) : e;
  return j4.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || q4.some((o) => (n.willChange || "").includes(o)) || F4.some((o) => (n.contain || "").includes(o));
}
function z4(e) {
  let t = Lr(e);
  for (; Ln(t) && !yi(t); ) {
    if (t0(t))
      return t;
    if (zu(t))
      return null;
    t = Lr(t);
  }
  return null;
}
function n0() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const $4 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function yi(e) {
  return $4.has(ki(e));
}
function yn(e) {
  return $t(e).getComputedStyle(e);
}
function $u(e) {
  return vn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Lr(e) {
  if (ki(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    B_(e) && e.host || // Fallback.
    qn(e)
  );
  return B_(t) ? t.host : t;
}
function dT(e) {
  const t = Lr(e);
  return yi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && oa(t) ? t : dT(t);
}
function Gs(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = dT(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = $t(i);
  if (a) {
    const u = by(l);
    return t.concat(l, l.visualViewport || [], oa(i) ? i : [], u && n ? Gs(u) : []);
  }
  return t.concat(i, Gs(i, [], n));
}
function by(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hT(e) {
  const t = yn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Ln(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = hu(n) !== a || hu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function r0(e) {
  return vn(e) ? e : e.contextElement;
}
function li(e) {
  const t = r0(e);
  if (!Ln(t))
    return Mn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = hT(t);
  let l = (a ? hu(n.width) : n.width) / o, u = (a ? hu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const B4 = /* @__PURE__ */ Mn(0);
function pT(e) {
  const t = $t(e);
  return !n0() || !t.visualViewport ? B4 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V4(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function go(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = r0(e);
  let l = Mn(1);
  t && (o ? vn(o) && (l = li(o)) : l = li(e));
  const u = V4(a, n, o) ? pT(a) : Mn(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = $t(a), v = o && vn(o) ? $t(o) : o;
    let S = m, y = by(S);
    for (; y && o && v !== S; ) {
      const x = li(y), _ = y.getBoundingClientRect(), C = yn(y), b = _.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, R = _.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, p *= x.y, f += b, d += R, S = $t(y), y = by(S);
    }
  }
  return gu({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Bu(e, t) {
  const n = $u(e).scrollLeft;
  return t ? t.left + n : go(qn(e)).left + n;
}
function gT(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Bu(e, n), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function H4(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const a = i === "fixed", l = qn(o), u = t ? zu(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Mn(1);
  const h = Mn(0), p = Ln(o);
  if ((p || !p && !a) && ((ki(o) !== "body" || oa(l)) && (f = $u(o)), Ln(o))) {
    const v = go(o);
    d = li(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? gT(l, f) : Mn(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function W4(e) {
  return Array.from(e.getClientRects());
}
function U4(e) {
  const t = qn(e), n = $u(e), o = e.ownerDocument.body, i = Ft(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Ft(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Bu(e);
  const u = -n.scrollTop;
  return yn(o).direction === "rtl" && (l += Ft(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const V_ = 25;
function G4(e, t) {
  const n = $t(e), o = qn(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = n0();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Bu(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, S = Math.abs(o.clientWidth - p.clientWidth - v);
    S <= V_ && (a -= S);
  } else d <= V_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const Y4 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function K4(e, t) {
  const n = go(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ln(e) ? li(e) : Mn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function H_(e, t, n) {
  let o;
  if (t === "viewport")
    o = G4(e, n);
  else if (t === "document")
    o = U4(qn(e));
  else if (vn(t))
    o = K4(t, n);
  else {
    const i = pT(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return gu(o);
}
function mT(e, t) {
  const n = Lr(e);
  return n === t || !vn(n) || yi(n) ? !1 : yn(n).position === "fixed" || mT(n, t);
}
function X4(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Gs(e, [], !1).filter((u) => vn(u) && ki(u) !== "body"), i = null;
  const a = yn(e).position === "fixed";
  let l = a ? Lr(e) : e;
  for (; vn(l) && !yi(l); ) {
    const u = yn(l), f = t0(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && Y4.has(i.position) || oa(l) && !f && mT(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Lr(l);
  }
  return t.set(e, o), o;
}
function Q4(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? zu(t) ? [] : X4(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = H_(t, h, i);
    return d.top = Ft(p.top, d.top), d.right = Or(p.right, d.right), d.bottom = Or(p.bottom, d.bottom), d.left = Ft(p.left, d.left), d;
  }, H_(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function Z4(e) {
  const {
    width: t,
    height: n
  } = hT(e);
  return {
    width: t,
    height: n
  };
}
function J4(e, t, n) {
  const o = Ln(t), i = qn(t), a = n === "fixed", l = go(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Mn(0);
  function d() {
    f.x = Bu(i);
  }
  if (o || !o && !a)
    if ((ki(t) !== "body" || oa(i)) && (u = $u(t)), o) {
      const v = go(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? gT(i, u) : Mn(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Ad(e) {
  return yn(e).position === "static";
}
function W_(e, t) {
  if (!Ln(e) || yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qn(e) === n && (n = n.ownerDocument.body), n;
}
function vT(e, t) {
  const n = $t(e);
  if (zu(e))
    return n;
  if (!Ln(e)) {
    let i = Lr(e);
    for (; i && !yi(i); ) {
      if (vn(i) && !Ad(i))
        return i;
      i = Lr(i);
    }
    return n;
  }
  let o = W_(e, t);
  for (; o && L4(o) && Ad(o); )
    o = W_(o, t);
  return o && yi(o) && Ad(o) && !t0(o) ? n : o || z4(e) || n;
}
const eB = async function(e) {
  const t = this.getOffsetParent || vT, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: J4(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function tB(e) {
  return yn(e).direction === "rtl";
}
const nB = {
  convertOffsetParentRelativeRectToViewportRelativeRect: H4,
  getDocumentElement: qn,
  getClippingRect: Q4,
  getOffsetParent: vT,
  getElementRects: eB,
  getClientRects: W4,
  getDimensions: Z4,
  getScale: li,
  isElement: vn,
  isRTL: tB
};
function yT(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function rB(e, t) {
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
    const S = zl(p), y = zl(i.clientWidth - (h + m)), x = zl(i.clientHeight - (p + v)), _ = zl(h), b = {
      rootMargin: -S + "px " + -y + "px " + -x + "px " + -_ + "px",
      threshold: Ft(0, Or(1, f)) || 1
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
      A === 1 && !yT(d, e.getBoundingClientRect()) && l(), R = !1;
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
function oB(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = r0(e), h = i || a ? [...d ? Gs(d) : [], ...Gs(t)] : [];
  h.forEach((_) => {
    i && _.addEventListener("scroll", n, {
      passive: !0
    }), a && _.addEventListener("resize", n);
  });
  const p = d && u ? rB(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((_) => {
    let [C] = _;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(t);
    })), n();
  }), d && !f && v.observe(d), v.observe(t));
  let S, y = f ? go(e) : null;
  f && x();
  function x() {
    const _ = go(e);
    y && !yT(y, _) && n(), y = _, S = requestAnimationFrame(x);
  }
  return n(), () => {
    var _;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (_ = v) == null || _.disconnect(), v = null, f && cancelAnimationFrame(S);
  };
}
const iB = P4, sB = T4, aB = k4, lB = A4, uB = R4, U_ = C4, cB = I4, fB = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: nB,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return E4(e, t, {
    ...i,
    platform: a
  });
};
var dB = typeof document < "u", hB = function() {
}, Ql = dB ? k.useLayoutEffect : hB;
function mu(e, t) {
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
        if (!mu(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !mu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wT(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function G_(e, t) {
  const n = wT(e);
  return Math.round(t * n) / n;
}
function Md(e) {
  const t = k.useRef(e);
  return Ql(() => {
    t.current = e;
  }), t;
}
function pB(e) {
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
  mu(m, o) || v(o);
  const [S, y] = k.useState(null), [x, _] = k.useState(null), C = k.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), b = k.useCallback((M) => {
    M !== A.current && (A.current = M, _(M));
  }, []), R = a || S, P = l || x, T = k.useRef(null), A = k.useRef(null), O = k.useRef(h), j = f != null, Y = Md(f), $ = Md(i), V = Md(d), W = k.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    $.current && (M.platform = $.current), fB(T.current, A.current, M).then((F) => {
      const Q = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !mu(O.current, Q) && (O.current = Q, na.flushSync(() => {
        p(Q);
      }));
    });
  }, [m, t, n, $, V]);
  Ql(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = k.useRef(!1);
  Ql(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Ql(() => {
    if (R && (T.current = R), P && (A.current = P), R && P) {
      if (Y.current)
        return Y.current(R, P, W);
      W();
    }
  }, [R, P, W, Y, j]);
  const H = k.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: b
  }), [C, b]), q = k.useMemo(() => ({
    reference: R,
    floating: P
  }), [R, P]), G = k.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return M;
    const F = G_(q.floating, h.x), Q = G_(q.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + F + "px, " + Q + "px)",
      ...wT(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: Q
    };
  }, [n, u, q.floating, h.x, h.y]);
  return k.useMemo(() => ({
    ...h,
    update: W,
    refs: H,
    elements: q,
    floatingStyles: G
  }), [h, W, H, q, G]);
}
const gB = (e) => {
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
      return o && t(o) ? o.current != null ? U_({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? U_({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, mB = (e, t) => ({
  ...iB(e),
  options: [e, t]
}), vB = (e, t) => ({
  ...sB(e),
  options: [e, t]
}), yB = (e, t) => ({
  ...cB(e),
  options: [e, t]
}), wB = (e, t) => ({
  ...aB(e),
  options: [e, t]
}), xB = (e, t) => ({
  ...lB(e),
  options: [e, t]
}), bB = (e, t) => ({
  ...uB(e),
  options: [e, t]
}), _B = (e, t) => ({
  ...gB(e),
  options: [e, t]
});
var SB = "Arrow", xT = k.forwardRef((e, t) => {
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
xT.displayName = SB;
var EB = xT, o0 = "Popper", [bT, Vu] = Ei(o0), [CB, _T] = bT(o0), ST = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = k.useState(null);
  return /* @__PURE__ */ N.jsx(CB, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
ST.displayName = o0;
var ET = "PopperAnchor", CT = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = _T(ET, n), l = k.useRef(null), u = Be(t, l), f = k.useRef(null);
    return k.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ N.jsx(je.div, { ...i, ref: u });
  }
);
CT.displayName = ET;
var i0 = "PopperContent", [kB, RB] = bT(i0), kT = k.forwardRef(
  (e, t) => {
    var X, te, se, ae, ce, de;
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
    } = e, x = _T(i0, n), [_, C] = k.useState(null), b = Be(t, (pe) => C(pe)), [R, P] = k.useState(null), T = GP(R), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, j = o + (a !== "center" ? "-" + a : ""), Y = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, $ = Array.isArray(d) ? d : [d], V = $.length > 0, W = {
      padding: Y,
      boundary: $.filter(PB),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: q, isPositioned: G, middlewareData: M } = pB({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...pe) => oB(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        mB({ mainAxis: i + O, alignmentAxis: l }),
        f && vB({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? yB() : void 0,
          ...W
        }),
        f && wB({ ...W }),
        xB({
          ...W,
          apply: ({ elements: pe, rects: _e, availableWidth: me, availableHeight: Ne }) => {
            const { width: Ee, height: Je } = _e.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${me}px`), Ue.setProperty("--radix-popper-available-height", `${Ne}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        R && _B({ element: R, padding: u }),
        TB({ arrowWidth: A, arrowHeight: O }),
        m && bB({ strategy: "referenceHidden", ...W })
      ]
    }), [F, Q] = PT(q), D = po(S);
    yt(() => {
      G && (D == null || D());
    }, [G, D]);
    const U = (X = M.arrow) == null ? void 0 : X.x, ie = (te = M.arrow) == null ? void 0 : te.y, B = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = k.useState();
    return yt(() => {
      _ && ee(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ N.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: G ? H.transform : "translate(0, -200%)",
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
          kB,
          {
            scope: n,
            placedSide: F,
            onArrowChange: P,
            arrowX: U,
            arrowY: ie,
            shouldHideArrow: B,
            children: /* @__PURE__ */ N.jsx(
              je.div,
              {
                "data-side": F,
                "data-align": Q,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
kT.displayName = i0;
var RT = "PopperArrow", NB = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, NT = k.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = RB(RT, o), l = NB[a.placedSide];
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
          EB,
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
NT.displayName = RT;
function PB(e) {
  return e !== null;
}
var TB = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, _, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = PT(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((_ = i.arrow) == null ? void 0 : _.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let S = "", y = "";
    return d === "bottom" ? (S = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (S = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (S = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (S = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: S, y } };
  }
});
function PT(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var TT = ST, IT = CT, AT = kT, MT = NT, IB = "Portal", Hu = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = k.useState(!1);
  yt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Hq.createPortal(/* @__PURE__ */ N.jsx(je.div, { ...o, ref: t }), l) : null;
});
Hu.displayName = IB;
// @__NO_SIDE_EFFECTS__
function AB(e) {
  const t = /* @__PURE__ */ MB(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(LB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function MB(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = jB(i), u = DB(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Si(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var OB = Symbol("radix.slottable");
function LB(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === OB;
}
function DB(e, t) {
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
function jB(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var OT = Object.freeze({
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
}), qB = "VisuallyHidden", LT = k.forwardRef(
  (e, t) => /* @__PURE__ */ N.jsx(
    je.span,
    {
      ...e,
      ref: t,
      style: { ...OT, ...e.style }
    }
  )
);
LT.displayName = qB;
var FB = LT, zB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ti = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), Bl = {}, Od = 0, DT = function(e) {
  return e && (e.host || DT(e.parentNode));
}, $B = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = DT(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, BB = function(e, t, n, o) {
  var i = $B(t, Array.isArray(e) ? e : [e]);
  Bl[n] || (Bl[n] = /* @__PURE__ */ new WeakMap());
  var a = Bl[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(p) {
    !p || u.has(p) || (u.add(p), d(p.parentNode));
  };
  i.forEach(d);
  var h = function(p) {
    !p || f.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var v = m.getAttribute(o), S = v !== null && v !== "false", y = (ti.get(m) || 0) + 1, x = (a.get(m) || 0) + 1;
          ti.set(m, y), a.set(m, x), l.push(m), y === 1 && S && $l.set(m, !0), x === 1 && m.setAttribute(n, "true"), S || m.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", m, _);
        }
    });
  };
  return h(t), u.clear(), Od++, function() {
    l.forEach(function(p) {
      var m = ti.get(p) - 1, v = a.get(p) - 1;
      ti.set(p, m), a.set(p, v), m || ($l.has(p) || p.removeAttribute(o), $l.delete(p)), v || p.removeAttribute(n);
    }), Od--, Od || (ti = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), Bl = {});
  };
}, jT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = zB(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), BB(o, i, n, "aria-hidden")) : function() {
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
function qT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function VB(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Zl = "right-scroll-bar-position", Jl = "width-before-scroll-bar", HB = "with-scroll-bars-hidden", WB = "--removed-body-scroll-bar-size";
function Ld(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function UB(e, t) {
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
var GB = typeof window < "u" ? k.useLayoutEffect : k.useEffect, Y_ = /* @__PURE__ */ new WeakMap();
function YB(e, t) {
  var n = UB(null, function(o) {
    return e.forEach(function(i) {
      return Ld(i, o);
    });
  });
  return GB(function() {
    var o = Y_.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Ld(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Ld(u, l);
      });
    }
    Y_.set(n, e);
  }, [e]), n;
}
function KB(e) {
  return e;
}
function XB(e, t) {
  t === void 0 && (t = KB);
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
function QB(e) {
  e === void 0 && (e = {});
  var t = XB(null);
  return t.options = Tn({ async: !0, ssr: !1 }, e), t;
}
var FT = function(e) {
  var t = e.sideCar, n = qT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return k.createElement(o, Tn({}, n));
};
FT.isSideCarExport = !0;
function ZB(e, t) {
  return e.useMedium(t), FT;
}
var zT = QB(), Dd = function() {
}, Wu = k.forwardRef(function(e, t) {
  var n = k.useRef(null), o = k.useState({
    onScrollCapture: Dd,
    onWheelCapture: Dd,
    onTouchMoveCapture: Dd
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, S = e.noIsolation, y = e.inert, x = e.allowPinchZoom, _ = e.as, C = _ === void 0 ? "div" : _, b = e.gapMode, R = qT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, T = YB([n, t]), A = Tn(Tn({}, R), i);
  return k.createElement(
    k.Fragment,
    null,
    h && k.createElement(P, { sideCar: zT, removeScrollBar: d, shards: p, noRelative: v, noIsolation: S, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: b }),
    l ? k.cloneElement(k.Children.only(u), Tn(Tn({}, A), { ref: T })) : k.createElement(C, Tn({}, A, { className: f, ref: T }), u)
  );
});
Wu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wu.classNames = {
  fullWidth: Jl,
  zeroRight: Zl
};
var JB = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function e5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = JB();
  return t && e.setAttribute("nonce", t), e;
}
function t5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function n5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var r5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = e5()) && (t5(t, n), n5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, o5 = function() {
  var e = r5();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $T = function() {
  var e = o5(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, i5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jd = function(e) {
  return parseInt(e || "", 10) || 0;
}, s5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jd(n), jd(o), jd(i)];
}, a5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return i5;
  var t = s5(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, l5 = $T(), ui = "data-scroll-locked", u5 = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(HB, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ui, `] {
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
  
  .`).concat(Zl, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Jl, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Zl, " .").concat(Zl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Jl, " .").concat(Jl, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ui, `] {
    `).concat(WB, ": ").concat(u, `px;
  }
`);
}, K_ = function() {
  var e = parseInt(document.body.getAttribute(ui) || "0", 10);
  return isFinite(e) ? e : 0;
}, c5 = function() {
  k.useEffect(function() {
    return document.body.setAttribute(ui, (K_() + 1).toString()), function() {
      var e = K_() - 1;
      e <= 0 ? document.body.removeAttribute(ui) : document.body.setAttribute(ui, e.toString());
    };
  }, []);
}, f5 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  c5();
  var a = k.useMemo(function() {
    return a5(i);
  }, [i]);
  return k.createElement(l5, { styles: u5(a, !t, i, n ? "" : "!important") });
}, _y = !1;
if (typeof window < "u")
  try {
    var Vl = Object.defineProperty({}, "passive", {
      get: function() {
        return _y = !0, !0;
      }
    });
    window.addEventListener("test", Vl, Vl), window.removeEventListener("test", Vl, Vl);
  } catch {
    _y = !1;
  }
var ni = _y ? { passive: !1 } : !1, d5 = function(e) {
  return e.tagName === "TEXTAREA";
}, BT = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !d5(e) && n[t] === "visible")
  );
}, h5 = function(e) {
  return BT(e, "overflowY");
}, p5 = function(e) {
  return BT(e, "overflowX");
}, X_ = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = VT(e, o);
    if (i) {
      var a = HT(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, g5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, m5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, VT = function(e, t) {
  return e === "v" ? h5(t) : p5(t);
}, HT = function(e, t) {
  return e === "v" ? g5(t) : m5(t);
}, v5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, y5 = function(e, t, n, o, i) {
  var a = v5(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = HT(e, u), S = v[0], y = v[1], x = v[2], _ = y - x - a * S;
    (S || _) && VT(e, u) && (p += _, m += S);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Hl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Q_ = function(e) {
  return [e.deltaX, e.deltaY];
}, Z_ = function(e) {
  return e && "current" in e ? e.current : e;
}, w5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, x5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, b5 = 0, ri = [];
function _5(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), o = k.useRef(), i = k.useState(b5++)[0], a = k.useState($T)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = VB([e.lockRef.current], (e.shards || []).map(Z_), !0).filter(Boolean);
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
    var _ = Hl(y), C = n.current, b = "deltaX" in y ? y.deltaX : C[0] - _[0], R = "deltaY" in y ? y.deltaY : C[1] - _[1], P, T = y.target, A = Math.abs(b) > Math.abs(R) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = X_(A, T);
    if (!O)
      return !0;
    if (O ? P = A : (P = A === "v" ? "h" : "v", O = X_(A, T)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (b || R) && (o.current = P), !P)
      return !0;
    var j = o.current || P;
    return y5(j, x, y, j === "h" ? b : R);
  }, []), f = k.useCallback(function(y) {
    var x = y;
    if (!(!ri.length || ri[ri.length - 1] !== a)) {
      var _ = "deltaY" in x ? Q_(x) : Hl(x), C = t.current.filter(function(P) {
        return P.name === x.type && (P.target === x.target || x.target === P.shadowParent) && w5(P.delta, _);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var b = (l.current.shards || []).map(Z_).filter(Boolean).filter(function(P) {
          return P.contains(x.target);
        }), R = b.length > 0 ? u(x, b[0]) : !l.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = k.useCallback(function(y, x, _, C) {
    var b = { name: y, delta: x, target: _, should: C, shadowParent: S5(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== b;
      });
    }, 1);
  }, []), h = k.useCallback(function(y) {
    n.current = Hl(y), o.current = void 0;
  }, []), p = k.useCallback(function(y) {
    d(y.type, Q_(y), y.target, u(y, e.lockRef.current));
  }, []), m = k.useCallback(function(y) {
    d(y.type, Hl(y), y.target, u(y, e.lockRef.current));
  }, []);
  k.useEffect(function() {
    return ri.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", f, ni), document.addEventListener("touchmove", f, ni), document.addEventListener("touchstart", h, ni), function() {
      ri = ri.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, ni), document.removeEventListener("touchmove", f, ni), document.removeEventListener("touchstart", h, ni);
    };
  }, []);
  var v = e.removeScrollBar, S = e.inert;
  return k.createElement(
    k.Fragment,
    null,
    S ? k.createElement(a, { styles: x5(i) }) : null,
    v ? k.createElement(f5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function S5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const E5 = ZB(zT, _5);
var s0 = k.forwardRef(function(e, t) {
  return k.createElement(Wu, Tn({}, e, { ref: t, sideCar: E5 }));
});
s0.classNames = Wu.classNames;
var C5 = [" ", "Enter", "ArrowUp", "ArrowDown"], k5 = [" ", "Enter"], mo = "Select", [Uu, Gu, R5] = G$(mo), [Ri] = Ei(mo, [
  R5,
  Vu
]), Yu = Vu(), [N5, Dr] = Ri(mo), [P5, T5] = Ri(mo), WT = (e) => {
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
  } = e, y = Yu(t), [x, _] = k.useState(null), [C, b] = k.useState(null), [R, P] = k.useState(!1), T = K$(d), [A, O] = Ws({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: mo
  }), [j, Y] = Ws({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: mo
  }), $ = k.useRef(null), V = x ? S || !!x.closest("form") : !0, [W, L] = k.useState(/* @__PURE__ */ new Set()), H = Array.from(W).map((q) => q.props.value).join(";");
  return /* @__PURE__ */ N.jsx(TT, { ...y, children: /* @__PURE__ */ N.jsxs(
    N5,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: _,
      valueNode: C,
      onValueNodeChange: b,
      valueNodeHasChildren: R,
      onValueNodeHasChildrenChange: P,
      contentId: uo(),
      value: j,
      onValueChange: Y,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: $,
      disabled: m,
      children: [
        /* @__PURE__ */ N.jsx(Uu.Provider, { scope: t, children: /* @__PURE__ */ N.jsx(
          P5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: k.useCallback((q) => {
              L((G) => new Set(G).add(q));
            }, []),
            onNativeOptionRemove: k.useCallback((q) => {
              L((G) => {
                const M = new Set(G);
                return M.delete(q), M;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ N.jsxs(
          hI,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: j,
            onChange: (q) => Y(q.target.value),
            disabled: m,
            form: S,
            children: [
              j === void 0 ? /* @__PURE__ */ N.jsx("option", { value: "" }) : null,
              Array.from(W)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
WT.displayName = mo;
var UT = "SelectTrigger", GT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Yu(n), l = Dr(UT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = Gu(n), h = k.useRef("touch"), [p, m, v] = gI((y) => {
      const x = d().filter((b) => !b.disabled), _ = x.find((b) => b.value === l.value), C = mI(x, y, _);
      C !== void 0 && l.onValueChange(C.value);
    }), S = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ N.jsx(IT, { asChild: !0, ...a, children: /* @__PURE__ */ N.jsx(
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
        "data-placeholder": pI(l.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && C5.includes(y.key) && (S(), y.preventDefault());
        })
      }
    ) });
  }
);
GT.displayName = UT;
var YT = "SelectValue", KT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = Dr(YT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ N.jsx(
      je.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: pI(f.value) ? /* @__PURE__ */ N.jsx(N.Fragment, { children: l }) : a
      }
    );
  }
);
KT.displayName = YT;
var I5 = "SelectIcon", XT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
XT.displayName = I5;
var A5 = "SelectPortal", QT = (e) => /* @__PURE__ */ N.jsx(Hu, { asChild: !0, ...e });
QT.displayName = A5;
var vo = "SelectContent", ZT = k.forwardRef(
  (e, t) => {
    const n = Dr(vo, e.__scopeSelect), [o, i] = k.useState();
    if (yt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? na.createPortal(
        /* @__PURE__ */ N.jsx(JT, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx(Uu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ N.jsx(eI, { ...e, ref: t });
  }
);
ZT.displayName = vo;
var dn = 10, [JT, jr] = Ri(vo), M5 = "SelectContentImpl", O5 = /* @__PURE__ */ AB("SelectContent.RemoveScroll"), eI = k.forwardRef(
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
      ..._
    } = e, C = Dr(vo, n), [b, R] = k.useState(null), [P, T] = k.useState(null), A = Be(t, (X) => R(X)), [O, j] = k.useState(null), [Y, $] = k.useState(
      null
    ), V = Gu(n), [W, L] = k.useState(!1), H = k.useRef(!1);
    k.useEffect(() => {
      if (b) return jT(b);
    }, [b]), aT();
    const q = k.useCallback(
      (X) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of X)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, P]
    ), G = k.useCallback(
      () => q([O, b]),
      [q, O, b]
    );
    k.useEffect(() => {
      W && G();
    }, [W, G]);
    const { onOpenChange: M, triggerPointerDownPosRef: F } = C;
    k.useEffect(() => {
      if (b) {
        let X = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          X = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = F.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = F.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          X.x <= 10 && X.y <= 10 ? ae.preventDefault() : b.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, M, F]), k.useEffect(() => {
      const X = () => M(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [M]);
    const [Q, D] = gI((X) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = mI(te, X, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), U = k.useCallback(
      (X, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (j(X), ae && (H.current = !0));
      },
      [C.value]
    ), ie = k.useCallback(() => b == null ? void 0 : b.focus(), [b]), B = k.useCallback(
      (X, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && $(X);
      },
      [C.value]
    ), Z = o === "popper" ? Sy : tI, ee = Z === Sy ? {
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
      JT,
      {
        scope: n,
        content: b,
        viewport: P,
        onViewportChange: T,
        itemRefCallback: U,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: B,
        focusSelectedItem: G,
        selectedItemText: Y,
        position: o,
        isPositioned: W,
        searchRef: Q,
        children: /* @__PURE__ */ N.jsx(s0, { as: O5, allowPinchZoom: !0, children: /* @__PURE__ */ N.jsx(
          Qy,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (X) => {
              X.preventDefault();
            },
            onUnmountAutoFocus: Le(i, (X) => {
              var te;
              (te = C.trigger) == null || te.focus({ preventScroll: !0 }), X.preventDefault();
            }),
            children: /* @__PURE__ */ N.jsx(
              qu,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ N.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (X) => X.preventDefault(),
                    ..._,
                    ...ee,
                    onPlaced: () => L(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: Le(_.onKeyDown, (X) => {
                      const te = X.ctrlKey || X.altKey || X.metaKey;
                      if (X.key === "Tab" && X.preventDefault(), !te && X.key.length === 1 && D(X.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) {
                        let ae = V().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(X.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(X.key)) {
                          const ce = X.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => q(ae)), X.preventDefault();
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
eI.displayName = M5;
var L5 = "SelectItemAlignedPosition", tI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = Dr(vo, n), l = jr(vo, n), [u, f] = k.useState(null), [d, h] = k.useState(null), p = Be(t, (A) => h(A)), m = Gu(n), v = k.useRef(!1), S = k.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: _, focusSelectedItem: C } = l, b = k.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && _) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), j = a.valueNode.getBoundingClientRect(), Y = _.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = Y.left - O.left, de = j.left - ce, pe = A.left - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = N_(de, [
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
        const ce = O.right - Y.right, de = window.innerWidth - j.right - ce, pe = window.innerWidth - A.right - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = N_(de, [
          dn,
          Math.max(dn, Ne - me)
        ]);
        u.style.minWidth = _e + "px", u.style.right = Ee + "px";
      }
      const $ = m(), V = window.innerHeight - dn * 2, W = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), q = parseInt(L.paddingTop, 10), G = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), F = H + q + W + M + G, Q = Math.min(x.offsetHeight * 5, F), D = window.getComputedStyle(y), U = parseInt(D.paddingTop, 10), ie = parseInt(D.paddingBottom, 10), B = A.top + A.height / 2 - dn, Z = V - B, ee = x.offsetHeight / 2, X = x.offsetTop + ee, te = H + q + X, se = F - te;
      if (te <= B) {
        const ce = $.length > 0 && x === $[$.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + G
        ), _e = te + pe;
        u.style.height = _e + "px";
      } else {
        const ce = $.length > 0 && x === $[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          B,
          H + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? U : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - B + y.offsetTop;
      }
      u.style.margin = `${dn}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    u,
    d,
    y,
    x,
    _,
    a.dir,
    o
  ]);
  yt(() => b(), [b]);
  const [R, P] = k.useState();
  yt(() => {
    d && P(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = k.useCallback(
    (A) => {
      A && S.current === !0 && (b(), C == null || C(), S.current = !1);
    },
    [b, C]
  );
  return /* @__PURE__ */ N.jsx(
    j5,
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
tI.displayName = L5;
var D5 = "SelectPopperPosition", Sy = k.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = dn,
    ...a
  } = e, l = Yu(n);
  return /* @__PURE__ */ N.jsx(
    AT,
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
Sy.displayName = D5;
var [j5, a0] = Ri(vo, {}), Ey = "SelectViewport", nI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = jr(Ey, n), l = a0(Ey, n), u = Be(t, a.onViewportChange), f = k.useRef(0);
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
      /* @__PURE__ */ N.jsx(Uu.Slot, { scope: n, children: /* @__PURE__ */ N.jsx(
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
                const S = window.innerHeight - dn * 2, y = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), _ = Math.max(y, x);
                if (_ < S) {
                  const C = _ + v, b = Math.min(S, C), R = C - b;
                  p.style.height = b + "px", p.style.bottom === "0px" && (h.scrollTop = R > 0 ? R : 0, p.style.justifyContent = "flex-end");
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
nI.displayName = Ey;
var rI = "SelectGroup", [q5, F5] = Ri(rI), z5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = uo();
    return /* @__PURE__ */ N.jsx(q5, { scope: n, id: i, children: /* @__PURE__ */ N.jsx(je.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
z5.displayName = rI;
var oI = "SelectLabel", $5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = F5(oI, n);
    return /* @__PURE__ */ N.jsx(je.div, { id: i.id, ...o, ref: t });
  }
);
$5.displayName = oI;
var vu = "SelectItem", [B5, iI] = Ri(vu), sI = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = Dr(vu, n), f = jr(vu, n), d = u.value === o, [h, p] = k.useState(a ?? ""), [m, v] = k.useState(!1), S = Be(
      t,
      (C) => {
        var b;
        return (b = f.itemRefCallback) == null ? void 0 : b.call(f, C, o, i);
      }
    ), y = uo(), x = k.useRef("touch"), _ = () => {
      i || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ N.jsx(
      B5,
      {
        scope: n,
        value: o,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: k.useCallback((C) => {
          p((b) => b || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ N.jsx(
          Uu.ItemSlot,
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
                  x.current !== "mouse" && _();
                }),
                onPointerUp: Le(l.onPointerUp, () => {
                  x.current === "mouse" && _();
                }),
                onPointerDown: Le(l.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: Le(l.onPointerMove, (C) => {
                  var b;
                  x.current = C.pointerType, i ? (b = f.onItemLeave) == null || b.call(f) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Le(l.onPointerLeave, (C) => {
                  var b;
                  C.currentTarget === document.activeElement && ((b = f.onItemLeave) == null || b.call(f));
                }),
                onKeyDown: Le(l.onKeyDown, (C) => {
                  var R;
                  ((R = f.searchRef) == null ? void 0 : R.current) !== "" && C.key === " " || (k5.includes(C.key) && _(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
sI.displayName = vu;
var Ns = "SelectItemText", aI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = Dr(Ns, n), u = jr(Ns, n), f = iI(Ns, n), d = T5(Ns, n), [h, p] = k.useState(null), m = Be(
      t,
      (_) => p(_),
      f.onItemTextChange,
      (_) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, _, f.value, f.disabled);
      }
    ), v = h == null ? void 0 : h.textContent, S = k.useMemo(
      () => /* @__PURE__ */ N.jsx("option", { value: f.value, disabled: f.disabled, children: v }, f.value),
      [f.disabled, f.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return yt(() => (y(S), () => x(S)), [y, x, S]), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(je.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? na.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
aI.displayName = Ns;
var lI = "SelectItemIndicator", uI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return iI(lI, n).isSelected ? /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
uI.displayName = lI;
var Cy = "SelectScrollUpButton", cI = k.forwardRef((e, t) => {
  const n = jr(Cy, e.__scopeSelect), o = a0(Cy, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollTop > 0;
        a(d);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ N.jsx(
    dI,
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
cI.displayName = Cy;
var ky = "SelectScrollDownButton", fI = k.forwardRef((e, t) => {
  const n = jr(ky, e.__scopeSelect), o = a0(ky, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const d = f.scrollHeight - f.clientHeight, h = Math.ceil(f.scrollTop) < d;
        a(h);
      };
      const f = n.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ N.jsx(
    dI,
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
fI.displayName = ky;
var dI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = jr("SelectScrollButton", n), l = k.useRef(null), u = Gu(n), f = k.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return k.useEffect(() => () => f(), [f]), yt(() => {
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
}), V5 = "SelectSeparator", H5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ N.jsx(je.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
H5.displayName = V5;
var Ry = "SelectArrow", W5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Yu(n), a = Dr(Ry, n), l = jr(Ry, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ N.jsx(MT, { ...i, ...o, ref: t }) : null;
  }
);
W5.displayName = Ry;
var U5 = "SelectBubbleInput", hI = k.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = k.useRef(null), a = Be(o, i), l = UP(t);
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
        style: { ...OT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
hI.displayName = U5;
function pI(e) {
  return e === "" || e === void 0;
}
function gI(e) {
  const t = po(e), n = k.useRef(""), o = k.useRef(0), i = k.useCallback(
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
function mI(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = G5(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function G5(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Y5 = WT, K5 = GT, X5 = KT, Q5 = XT, Z5 = QT, J5 = ZT, eV = nI, tV = sI, nV = aI, rV = uI, oV = cI, iV = fI;
function J_({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(Y5, { "data-slot": "select", ...e });
}
function e1({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(X5, { "data-slot": "select-value", ...e });
}
function t1({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(
    K5,
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
        /* @__PURE__ */ N.jsx(Q5, { asChild: !0, children: /* @__PURE__ */ N.jsx(oT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function n1({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ N.jsx(Z5, { children: /* @__PURE__ */ N.jsxs(
    J5,
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
        /* @__PURE__ */ N.jsx(sV, {}),
        /* @__PURE__ */ N.jsx(
          eV,
          {
            className: Me(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ N.jsx(aV, {})
      ]
    }
  ) });
}
function r1({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsxs(
    tV,
    {
      "data-slot": "select-item",
      className: Me(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ N.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ N.jsx(rV, { children: /* @__PURE__ */ N.jsx(rT, { className: "size-4" }) }) }),
        /* @__PURE__ */ N.jsx(nV, { children: t })
      ]
    }
  );
}
function sV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    oV,
    {
      "data-slot": "select-scroll-up-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(T$, { className: "size-4" })
    }
  );
}
function aV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    iV,
    {
      "data-slot": "select-scroll-down-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(oT, { className: "size-4" })
    }
  );
}
function lV(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = _i(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? "";
    return /* @__PURE__ */ N.jsxs("div", { className: "component-select-field", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600 mb-1", children: u.label }),
      /* @__PURE__ */ N.jsxs(J_, { value: h, onValueChange: (p) => f == null ? void 0 : f(u.id, p), children: [
        /* @__PURE__ */ N.jsx(
          t1,
          {
            className: "h-8 text-xs",
            onMouseDown: (p) => p.stopPropagation(),
            onPointerDown: (p) => p.stopPropagation(),
            "aria-label": u.label,
            children: /* @__PURE__ */ N.jsx(e1, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ N.jsx(n1, { children: (u.options || []).map((p) => /* @__PURE__ */ N.jsx(r1, { value: p, className: "text-xs", children: p }, p)) })
      ] })
    ] });
  }
  const { value: t, options: n, onChange: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ N.jsxs(J_, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ N.jsx(
      t1,
      {
        className: "h-8 text-xs",
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ N.jsx(e1, { placeholder: i })
      }
    ),
    /* @__PURE__ */ N.jsx(n1, { children: n.map((u) => /* @__PURE__ */ N.jsx(r1, { value: u, className: "text-xs", children: u }, u)) })
  ] });
}
function uV(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l);
    u.displayName = a + "Context";
    const f = n.length;
    n = [...n, l];
    const d = (p) => {
      var _;
      const { scope: m, children: v, ...S } = p, y = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[f]) || u, x = k.useMemo(() => S, Object.values(S));
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
  return i.scopeName = e, [o, cV(i, ...t)];
}
function cV(...e) {
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
var fV = Symbol.for("react.lazy"), yu = Iy[" use ".trim().toString()];
function dV(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function vI(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === fV && "_payload" in e && dV(e._payload);
}
// @__NO_SIDE_EFFECTS__
function yI(e) {
  const t = /* @__PURE__ */ hV(e), n = k.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    vI(a) && typeof yu == "function" && (a = yu(a._payload));
    const u = k.Children.toArray(a), f = u.find(gV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var wI = /* @__PURE__ */ yI("Slot");
// @__NO_SIDE_EFFECTS__
function hV(e) {
  const t = k.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (vI(i) && typeof yu == "function" && (i = yu(i._payload)), k.isValidElement(i)) {
      const l = vV(i), u = mV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Si(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pV = Symbol("radix.slottable");
function gV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pV;
}
function mV(e, t) {
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
function vV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yV = [
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
], xI = yV.reduce((e, t) => {
  const n = /* @__PURE__ */ yI(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), l0 = "Progress", u0 = 100, [wV] = uV(l0), [xV, bV] = wV(l0), bI = k.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: i,
      getValueLabel: a = _V,
      ...l
    } = e;
    (i || i === 0) && !o1(i) && console.error(SV(`${i}`, "Progress"));
    const u = o1(i) ? i : u0;
    o !== null && !i1(o, u) && console.error(EV(`${o}`, "Progress"));
    const f = i1(o, u) ? o : null, d = wu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ N.jsx(xV, { scope: n, value: f, max: u, children: /* @__PURE__ */ N.jsx(
      xI.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": wu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": EI(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
bI.displayName = l0;
var _I = "ProgressIndicator", SI = k.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, i = bV(_I, n);
    return /* @__PURE__ */ N.jsx(
      xI.div,
      {
        "data-state": EI(i.value, i.max),
        "data-value": i.value ?? void 0,
        "data-max": i.max,
        ...o,
        ref: t
      }
    );
  }
);
SI.displayName = _I;
function _V(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function EI(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function wu(e) {
  return typeof e == "number";
}
function o1(e) {
  return wu(e) && !isNaN(e) && e > 0;
}
function i1(e, t) {
  return wu(e) && !isNaN(e) && e <= t && e >= 0;
}
function SV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${u0}\`.`;
}
function EV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${u0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var CV = bI, kV = SI;
function s1({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsx(
    CV,
    {
      "data-slot": "progress",
      className: Me(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ N.jsx(
        kV,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function RV(e) {
  var u;
  if ("component" in e) {
    const { component: f } = e, d = _i(), h = ((u = d == null ? void 0 : d.nodeData.values) == null ? void 0 : u[f.id]) ?? f.value ?? 0, p = f.max ?? 100, m = f.min ?? 0, v = Math.min(100, Math.max(0, (h - m) / (p - m) * 100));
    return /* @__PURE__ */ N.jsxs("div", { className: "component-progress-field space-y-1.5", children: [
      f.label && /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: f.label }),
      /* @__PURE__ */ N.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ N.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
          Math.round(v),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ N.jsx(s1, { value: v, className: "h-2" })
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
    /* @__PURE__ */ N.jsx(s1, { value: l, className: "h-2" })
  ] });
}
function NV({ component: e }) {
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: "component-header px-3 py-2 font-semibold flex items-center gap-2",
      style: {
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
function PV({ component: e }) {
  return /* @__PURE__ */ N.jsx(
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
const a1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, l1 = TP, CI = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return l1(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = a1(h) || a1(p);
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
  return l1(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, TV = CI(
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
function ci({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? wI : "button";
  return /* @__PURE__ */ N.jsx(
    a,
    {
      "data-slot": "button",
      className: Me(TV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function IV({ component: e, onValueChange: t }) {
  var a;
  const n = _i(), o = ((a = n == null ? void 0 : n.nodeData.values) == null ? void 0 : a[e.id]) ?? e.value ?? 0, i = () => {
    const l = o + 1;
    t == null || t(e.id, l);
  };
  return /* @__PURE__ */ N.jsx(
    ci,
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
function AV({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function MV({ component: e }) {
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
function OV({
  cell: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = e.layout || { type: "flex", direction: "column" }, i = LV(e), a = DV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell", style: i, children: /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => /* @__PURE__ */ N.jsx(
    kI,
    {
      component: l,
      nodeId: t,
      onValueChange: n
    },
    l.id
  )) }) });
}
function LV(e) {
  return {
    gridRow: `${e.coordinates.row} / span ${e.coordinates.row_span || 1}`,
    gridColumn: `${e.coordinates.col} / span ${e.coordinates.col_span || 1}`
  };
}
function DV(e) {
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
function jV({
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
        OV,
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
function kI({ component: e, nodeId: t, onValueChange: n }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ N.jsx(Du, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ N.jsx(VP, { component: e });
    case "button-handle":
      return /* @__PURE__ */ N.jsx(HP, { component: e });
    case "text":
      return /* @__PURE__ */ N.jsx(Kz, { component: e, onValueChange: n });
    case "number":
      return /* @__PURE__ */ N.jsx(Qz, { component: e, onValueChange: n });
    case "bool":
      return /* @__PURE__ */ N.jsx($$, { component: e, onValueChange: n });
    case "select":
      return /* @__PURE__ */ N.jsx(lV, { component: e, onValueChange: n });
    case "progress":
      return /* @__PURE__ */ N.jsx(RV, { component: e, onValueChange: n });
    case "header":
      return /* @__PURE__ */ N.jsx(NV, { component: e });
    case "footer":
      return /* @__PURE__ */ N.jsx(PV, { component: e });
    case "button":
      return /* @__PURE__ */ N.jsx(IV, { component: e, onValueChange: n });
    case "divider":
      return /* @__PURE__ */ N.jsx(AV, { component: e });
    case "spacer":
      return /* @__PURE__ */ N.jsx(MV, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ N.jsx(jV, { component: e, nodeId: t, onValueChange: n });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function qV({ grid: e, nodeId: t, onValueChange: n }) {
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
        FV,
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
function FV({ cell: e, nodeId: t, onValueChange: n }) {
  const o = e.layout || { type: "flex", direction: "column" }, i = zV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "grid-cell-content", style: i, children: e.components.map((a) => /* @__PURE__ */ N.jsx(
    kI,
    {
      component: a,
      nodeId: t,
      onValueChange: n
    },
    a.id
  )) });
}
function zV(e) {
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
function RI({ className: e, ...t }) {
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
class c0 {
  constructor(t, n, o = "Node") {
    Cl(this, "grid");
    Cl(this, "style");
    Cl(this, "label");
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
      const f = l, d = PG(), h = k.useCallback((v, S) => {
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
        RI,
        {
          className: Me(
            o.className,
            u && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: o.style,
          children: /* @__PURE__ */ N.jsx(WP.Provider, { value: m, children: /* @__PURE__ */ N.jsx(
            qV,
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
    return new c0(t, n, o).buildComponent();
  }
}
function $V(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = c0.buildComponent(
        n.definition.grid,
        n.definition.style,
        n.label
      );
    } catch (o) {
      throw typeof process.env.VITEST > "u" && console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
const qd = 768;
function BV() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${qd - 1}px)`), o = () => {
      t(window.innerWidth < qd);
    };
    return n.addEventListener("change", o), t(window.innerWidth < qd), () => n.removeEventListener("change", o);
  }, []), !!e;
}
// @__NO_SIDE_EFFECTS__
function VV(e) {
  const t = /* @__PURE__ */ HV(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(UV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function HV(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = YV(i), u = GV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Si(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var WV = Symbol("radix.slottable");
function UV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === WV;
}
function GV(e, t) {
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
function YV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ku = "Dialog", [NI] = Ei(Ku), [KV, bn] = NI(Ku), PI = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, u = k.useRef(null), f = k.useRef(null), [d, h] = Ws({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Ku
  });
  return /* @__PURE__ */ N.jsx(
    KV,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: uo(),
      titleId: uo(),
      descriptionId: uo(),
      open: d,
      onOpenChange: h,
      onOpenToggle: k.useCallback(() => h((p) => !p), [h]),
      modal: l,
      children: n
    }
  );
};
PI.displayName = Ku;
var TI = "DialogTrigger", XV = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(TI, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ N.jsx(
      je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": h0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
XV.displayName = TI;
var f0 = "DialogPortal", [QV, II] = NI(f0, {
  forceMount: void 0
}), AI = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = bn(f0, t);
  return /* @__PURE__ */ N.jsx(QV, { scope: t, forceMount: n, children: k.Children.map(o, (l) => /* @__PURE__ */ N.jsx(wo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Hu, { asChild: !0, container: i, children: l }) })) });
};
AI.displayName = f0;
var xu = "DialogOverlay", MI = k.forwardRef(
  (e, t) => {
    const n = II(xu, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(xu, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ N.jsx(wo, { present: o || a.open, children: /* @__PURE__ */ N.jsx(JV, { ...i, ref: t }) }) : null;
  }
);
MI.displayName = xu;
var ZV = /* @__PURE__ */ VV("DialogOverlay.RemoveScroll"), JV = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(xu, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ N.jsx(s0, { as: ZV, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ N.jsx(
        je.div,
        {
          "data-state": h0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), yo = "DialogContent", OI = k.forwardRef(
  (e, t) => {
    const n = II(yo, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(yo, e.__scopeDialog);
    return /* @__PURE__ */ N.jsx(wo, { present: o || a.open, children: a.modal ? /* @__PURE__ */ N.jsx(eH, { ...i, ref: t }) : /* @__PURE__ */ N.jsx(tH, { ...i, ref: t }) });
  }
);
OI.displayName = yo;
var eH = k.forwardRef(
  (e, t) => {
    const n = bn(yo, e.__scopeDialog), o = k.useRef(null), i = Be(t, n.contentRef, o);
    return k.useEffect(() => {
      const a = o.current;
      if (a) return jT(a);
    }, []), /* @__PURE__ */ N.jsx(
      LI,
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
), tH = k.forwardRef(
  (e, t) => {
    const n = bn(yo, e.__scopeDialog), o = k.useRef(!1), i = k.useRef(!1);
    return /* @__PURE__ */ N.jsx(
      LI,
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
), LI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = bn(yo, n), f = k.useRef(null), d = Be(t, f);
    return aT(), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Qy,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ N.jsx(
            qu,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": h0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
        /* @__PURE__ */ N.jsx(nH, { titleId: u.titleId }),
        /* @__PURE__ */ N.jsx(oH, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), d0 = "DialogTitle", DI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(d0, n);
    return /* @__PURE__ */ N.jsx(je.h2, { id: i.titleId, ...o, ref: t });
  }
);
DI.displayName = d0;
var jI = "DialogDescription", qI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(jI, n);
    return /* @__PURE__ */ N.jsx(je.p, { id: i.descriptionId, ...o, ref: t });
  }
);
qI.displayName = jI;
var FI = "DialogClose", zI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(FI, n);
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
zI.displayName = FI;
function h0(e) {
  return e ? "open" : "closed";
}
var $I = "DialogTitleWarning", [MG, BI] = Zz($I, {
  contentName: yo,
  titleName: d0,
  docsSlug: "dialog"
}), nH = ({ titleId: e }) => {
  const t = BI($I), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, rH = "DialogDescriptionWarning", oH = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${BI(rH).contentName}}.`;
  return k.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, iH = PI, sH = AI, aH = MI, lH = OI, uH = DI, cH = qI, fH = zI;
function dH({ ...e }) {
  return /* @__PURE__ */ N.jsx(iH, { "data-slot": "sheet", ...e });
}
function hH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(sH, { "data-slot": "sheet-portal", ...e });
}
function pH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    aH,
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
function gH({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(hH, { children: [
    /* @__PURE__ */ N.jsx(pH, {}),
    /* @__PURE__ */ N.jsxs(
      lH,
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
          /* @__PURE__ */ N.jsxs(fH, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ N.jsx(z$, { className: "size-4" }),
            /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function mH({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Me("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function vH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    uH,
    {
      "data-slot": "sheet-title",
      className: Me("text-foreground font-semibold", e),
      ...t
    }
  );
}
function yH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    cH,
    {
      "data-slot": "sheet-description",
      className: Me("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var wH = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function xH(e) {
  const t = ({ children: n }) => /* @__PURE__ */ N.jsx(N.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = wH, t;
}
var [Xu] = Ei("Tooltip", [
  Vu
]), Qu = Vu(), VI = "TooltipProvider", bH = 700, Ny = "tooltip.open", [_H, p0] = Xu(VI), HI = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = bH,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = k.useRef(!0), u = k.useRef(!1), f = k.useRef(0);
  return k.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ N.jsx(
    _H,
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
HI.displayName = VI;
var Ys = "Tooltip", [SH, ia] = Xu(Ys), WI = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = p0(Ys, e.__scopeTooltip), d = Qu(t), [h, p] = k.useState(null), m = uo(), v = k.useRef(0), S = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, x = k.useRef(!1), [_, C] = Ws({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (A) => {
      A ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Ny))) : f.onClose(), a == null || a(A);
    },
    caller: Ys
  }), b = k.useMemo(() => _ ? x.current ? "delayed-open" : "instant-open" : "closed", [_]), R = k.useCallback(() => {
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
  }, []), /* @__PURE__ */ N.jsx(TT, { ...d, children: /* @__PURE__ */ N.jsx(
    SH,
    {
      scope: t,
      contentId: m,
      open: _,
      stateAttribute: b,
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
WI.displayName = Ys;
var Py = "TooltipTrigger", UI = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = ia(Py, n), a = p0(Py, n), l = Qu(n), u = k.useRef(null), f = Be(t, u, i.onTriggerChange), d = k.useRef(!1), h = k.useRef(!1), p = k.useCallback(() => d.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ N.jsx(IT, { asChild: !0, ...l, children: /* @__PURE__ */ N.jsx(
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
UI.displayName = Py;
var g0 = "TooltipPortal", [EH, CH] = Xu(g0, {
  forceMount: void 0
}), GI = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = ia(g0, t);
  return /* @__PURE__ */ N.jsx(EH, { scope: t, forceMount: n, children: /* @__PURE__ */ N.jsx(wo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Hu, { asChild: !0, container: i, children: o }) }) });
};
GI.displayName = g0;
var wi = "TooltipContent", YI = k.forwardRef(
  (e, t) => {
    const n = CH(wi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = ia(wi, e.__scopeTooltip);
    return /* @__PURE__ */ N.jsx(wo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ N.jsx(KI, { side: i, ...a, ref: t }) : /* @__PURE__ */ N.jsx(kH, { side: i, ...a, ref: t }) });
  }
), kH = k.forwardRef((e, t) => {
  const n = ia(wi, e.__scopeTooltip), o = p0(wi, e.__scopeTooltip), i = k.useRef(null), a = Be(t, i), [l, u] = k.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = k.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = k.useCallback(
    (S, y) => {
      const x = S.currentTarget, _ = { x: S.clientX, y: S.clientY }, C = TH(_, x.getBoundingClientRect()), b = IH(_, C), R = AH(y.getBoundingClientRect()), P = OH([...b, ...R]);
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
        const x = y.target, _ = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(x)) || (h == null ? void 0 : h.contains(x)), b = !MH(_, l);
        C ? m() : b && (m(), d());
      };
      return document.addEventListener("pointermove", S), () => document.removeEventListener("pointermove", S);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ N.jsx(KI, { ...e, ref: a });
}), [RH, NH] = Xu(Ys, { isInside: !1 }), PH = /* @__PURE__ */ xH("TooltipContent"), KI = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = ia(wi, n), d = Qu(n), { onClose: h } = f;
    return k.useEffect(() => (document.addEventListener(Ny, h), () => document.removeEventListener(Ny, h)), [h]), k.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ N.jsx(
      qu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ N.jsxs(
          AT,
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
              /* @__PURE__ */ N.jsx(PH, { children: o }),
              /* @__PURE__ */ N.jsx(RH, { scope: n, isInside: !0, children: /* @__PURE__ */ N.jsx(FB, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
YI.displayName = wi;
var XI = "TooltipArrow", QI = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = Qu(n);
    return NH(
      XI,
      n
    ).isInside ? null : /* @__PURE__ */ N.jsx(MT, { ...i, ...o, ref: t });
  }
);
QI.displayName = XI;
function TH(e, t) {
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
function IH(e, t, n = 5) {
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
function AH(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function MH(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function OH(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), LH(t);
}
function LH(e) {
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
var DH = HI, jH = WI, qH = UI, FH = GI, zH = YI, $H = QI;
function ZI({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    DH,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function BH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(ZI, { children: /* @__PURE__ */ N.jsx(jH, { "data-slot": "tooltip", ...e }) });
}
function VH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(qH, { "data-slot": "tooltip-trigger", ...e });
}
function HH({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsx(FH, { children: /* @__PURE__ */ N.jsxs(
    zH,
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
        /* @__PURE__ */ N.jsx($H, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const WH = "sidebar_state", UH = 3600 * 24 * 7, GH = "16rem", YH = "18rem", KH = "3rem", XH = "b", JI = k.createContext(null);
function m0() {
  const e = k.useContext(JI);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function QH({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = BV(), [f, d] = k.useState(!1), [h, p] = k.useState(e), m = t ?? h, v = k.useCallback(
    (_) => {
      const C = typeof _ == "function" ? _(m) : _;
      n ? n(C) : p(C), document.cookie = `${WH}=${C}; path=/; max-age=${UH}`;
    },
    [n, m]
  ), S = k.useCallback(() => u ? d((_) => !_) : v((_) => !_), [u, v, d]);
  k.useEffect(() => {
    const _ = (C) => {
      C.key === XH && (C.metaKey || C.ctrlKey) && (C.preventDefault(), S());
    };
    return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
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
  return /* @__PURE__ */ N.jsx(JI.Provider, { value: x, children: /* @__PURE__ */ N.jsx(ZI, { delayDuration: 0, children: /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": GH,
        "--sidebar-width-icon": KH,
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
function ZH({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = m0();
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
  ) : l ? /* @__PURE__ */ N.jsx(dH, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ N.jsxs(
    gH,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": YH
      },
      side: e,
      children: [
        /* @__PURE__ */ N.jsxs(mH, { className: "sr-only", children: [
          /* @__PURE__ */ N.jsx(vH, { children: "Sidebar" }),
          /* @__PURE__ */ N.jsx(yH, { children: "Displays the mobile sidebar." })
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
function JH({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = m0();
  return /* @__PURE__ */ N.jsxs(
    ci,
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
        /* @__PURE__ */ N.jsx(O$, {}),
        /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function e8({ className: e, ...t }) {
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
function t8({ className: e, ...t }) {
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
function n8({ className: e, ...t }) {
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
function r8({
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
function o8({ className: e, ...t }) {
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
function i8({ className: e, ...t }) {
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
const s8 = CI(
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
function a8({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? wI : "button", { isMobile: f, state: d } = m0(), h = /* @__PURE__ */ N.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Me(s8({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ N.jsxs(BH, { children: [
    /* @__PURE__ */ N.jsx(VH, { asChild: !0, children: h }),
    /* @__PURE__ */ N.jsx(
      HH,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function l8({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ N.jsx(t8, { children: /* @__PURE__ */ N.jsx(n8, { children: /* @__PURE__ */ N.jsx(r8, { children: /* @__PURE__ */ N.jsx(o8, { children: t.map((n, o) => /* @__PURE__ */ N.jsx(i8, { children: /* @__PURE__ */ N.jsxs(
    a8,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ N.jsx(D$, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ N.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function u8({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ N.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ N.jsxs(ci, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ N.jsx(A$, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ N.jsxs(ci, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(E$, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ N.jsxs(ci, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(k$, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function c8({ x: e, y: t, onDelete: n, onClose: o }) {
  return qt.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ N.jsx(
    RI,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ N.jsxs(
        ci,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ N.jsx(q$, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function f8({
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
  onLayoutHorizontal: y
}) {
  return /* @__PURE__ */ N.jsxs("div", { style: { width: "100%", height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ N.jsxs(
      T3,
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
          /* @__PURE__ */ N.jsx(L3, {}),
          /* @__PURE__ */ N.jsx(B3, {}),
          /* @__PURE__ */ N.jsx(ra, { position: "top-right", children: /* @__PURE__ */ N.jsx(
            u8,
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
      c8,
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
function v0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Fd, u1;
function d8() {
  if (u1) return Fd;
  u1 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Fd = e, Fd;
}
var zd, c1;
function Ni() {
  if (c1) return zd;
  c1 = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return zd = e, zd;
}
var $d, f1;
function Zu() {
  if (f1) return $d;
  f1 = 1;
  var e = Ni();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return $d = t, $d;
}
var Bd, d1;
function h8() {
  if (d1) return Bd;
  d1 = 1;
  var e = Zu(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return Bd = o, Bd;
}
var Vd, h1;
function p8() {
  if (h1) return Vd;
  h1 = 1;
  var e = Zu();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return Vd = t, Vd;
}
var Hd, p1;
function g8() {
  if (p1) return Hd;
  p1 = 1;
  var e = Zu();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Hd = t, Hd;
}
var Wd, g1;
function m8() {
  if (g1) return Wd;
  g1 = 1;
  var e = Zu();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return Wd = t, Wd;
}
var Ud, m1;
function Ju() {
  if (m1) return Ud;
  m1 = 1;
  var e = d8(), t = h8(), n = p8(), o = g8(), i = m8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Ud = a, Ud;
}
var Gd, v1;
function v8() {
  if (v1) return Gd;
  v1 = 1;
  var e = Ju();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Gd = t, Gd;
}
var Yd, y1;
function y8() {
  if (y1) return Yd;
  y1 = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return Yd = e, Yd;
}
var Kd, w1;
function w8() {
  if (w1) return Kd;
  w1 = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Kd = e, Kd;
}
var Xd, x1;
function x8() {
  if (x1) return Xd;
  x1 = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Xd = e, Xd;
}
var Qd, b1;
function eA() {
  if (b1) return Qd;
  b1 = 1;
  var e = typeof kl == "object" && kl && kl.Object === Object && kl;
  return Qd = e, Qd;
}
var Zd, _1;
function _n() {
  if (_1) return Zd;
  _1 = 1;
  var e = eA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Zd = n, Zd;
}
var Jd, S1;
function Pi() {
  if (S1) return Jd;
  S1 = 1;
  var e = _n(), t = e.Symbol;
  return Jd = t, Jd;
}
var eh, E1;
function b8() {
  if (E1) return eh;
  E1 = 1;
  var e = Pi(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, i = e ? e.toStringTag : void 0;
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
  return eh = a, eh;
}
var th, C1;
function _8() {
  if (C1) return th;
  C1 = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return th = n, th;
}
var nh, k1;
function xo() {
  if (k1) return nh;
  k1 = 1;
  var e = Pi(), t = b8(), n = _8(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return nh = l, nh;
}
var rh, R1;
function tn() {
  if (R1) return rh;
  R1 = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return rh = e, rh;
}
var oh, N1;
function sa() {
  if (N1) return oh;
  N1 = 1;
  var e = xo(), t = tn(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return oh = l, oh;
}
var ih, P1;
function S8() {
  if (P1) return ih;
  P1 = 1;
  var e = _n(), t = e["__core-js_shared__"];
  return ih = t, ih;
}
var sh, T1;
function E8() {
  if (T1) return sh;
  T1 = 1;
  var e = S8(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return sh = n, sh;
}
var ah, I1;
function tA() {
  if (I1) return ah;
  I1 = 1;
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
  return ah = n, ah;
}
var lh, A1;
function C8() {
  if (A1) return lh;
  A1 = 1;
  var e = sa(), t = E8(), n = tn(), o = tA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!n(m) || t(m))
      return !1;
    var v = e(m) ? h : a;
    return v.test(o(m));
  }
  return lh = p, lh;
}
var uh, M1;
function k8() {
  if (M1) return uh;
  M1 = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return uh = e, uh;
}
var ch, O1;
function bo() {
  if (O1) return ch;
  O1 = 1;
  var e = C8(), t = k8();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return ch = n, ch;
}
var fh, L1;
function y0() {
  if (L1) return fh;
  L1 = 1;
  var e = bo(), t = _n(), n = e(t, "Map");
  return fh = n, fh;
}
var dh, D1;
function ec() {
  if (D1) return dh;
  D1 = 1;
  var e = bo(), t = e(Object, "create");
  return dh = t, dh;
}
var hh, j1;
function R8() {
  if (j1) return hh;
  j1 = 1;
  var e = ec();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return hh = t, hh;
}
var ph, q1;
function N8() {
  if (q1) return ph;
  q1 = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ph = e, ph;
}
var gh, F1;
function P8() {
  if (F1) return gh;
  F1 = 1;
  var e = ec(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return gh = i, gh;
}
var mh, z1;
function T8() {
  if (z1) return mh;
  z1 = 1;
  var e = ec(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return mh = o, mh;
}
var vh, $1;
function I8() {
  if ($1) return vh;
  $1 = 1;
  var e = ec(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return vh = n, vh;
}
var yh, B1;
function A8() {
  if (B1) return yh;
  B1 = 1;
  var e = R8(), t = N8(), n = P8(), o = T8(), i = I8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, yh = a, yh;
}
var wh, V1;
function M8() {
  if (V1) return wh;
  V1 = 1;
  var e = A8(), t = Ju(), n = y0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return wh = o, wh;
}
var xh, H1;
function O8() {
  if (H1) return xh;
  H1 = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return xh = e, xh;
}
var bh, W1;
function tc() {
  if (W1) return bh;
  W1 = 1;
  var e = O8();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return bh = t, bh;
}
var _h, U1;
function L8() {
  if (U1) return _h;
  U1 = 1;
  var e = tc();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return _h = t, _h;
}
var Sh, G1;
function D8() {
  if (G1) return Sh;
  G1 = 1;
  var e = tc();
  function t(n) {
    return e(this, n).get(n);
  }
  return Sh = t, Sh;
}
var Eh, Y1;
function j8() {
  if (Y1) return Eh;
  Y1 = 1;
  var e = tc();
  function t(n) {
    return e(this, n).has(n);
  }
  return Eh = t, Eh;
}
var Ch, K1;
function q8() {
  if (K1) return Ch;
  K1 = 1;
  var e = tc();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return Ch = t, Ch;
}
var kh, X1;
function w0() {
  if (X1) return kh;
  X1 = 1;
  var e = M8(), t = L8(), n = D8(), o = j8(), i = q8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, kh = a, kh;
}
var Rh, Q1;
function F8() {
  if (Q1) return Rh;
  Q1 = 1;
  var e = Ju(), t = y0(), n = w0(), o = 200;
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
  return Rh = i, Rh;
}
var Nh, Z1;
function nc() {
  if (Z1) return Nh;
  Z1 = 1;
  var e = Ju(), t = v8(), n = y8(), o = w8(), i = x8(), a = F8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, Nh = l, Nh;
}
var Ph, J1;
function x0() {
  if (J1) return Ph;
  J1 = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return Ph = e, Ph;
}
var Th, eS;
function nA() {
  if (eS) return Th;
  eS = 1;
  var e = bo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Th = t, Th;
}
var Ih, tS;
function rc() {
  if (tS) return Ih;
  tS = 1;
  var e = nA();
  function t(n, o, i) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[o] = i;
  }
  return Ih = t, Ih;
}
var Ah, nS;
function oc() {
  if (nS) return Ah;
  nS = 1;
  var e = rc(), t = Ni(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Ah = i, Ah;
}
var Mh, rS;
function aa() {
  if (rS) return Mh;
  rS = 1;
  var e = oc(), t = rc();
  function n(o, i, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = i.length; ++f < d; ) {
      var h = i[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return Mh = n, Mh;
}
var Oh, oS;
function z8() {
  if (oS) return Oh;
  oS = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return Oh = e, Oh;
}
var Lh, iS;
function Fn() {
  if (iS) return Lh;
  iS = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Lh = e, Lh;
}
var Dh, sS;
function $8() {
  if (sS) return Dh;
  sS = 1;
  var e = xo(), t = Fn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Dh = o, Dh;
}
var jh, aS;
function la() {
  if (aS) return jh;
  aS = 1;
  var e = $8(), t = Fn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return jh = a, jh;
}
var qh, lS;
function rt() {
  if (lS) return qh;
  lS = 1;
  var e = Array.isArray;
  return qh = e, qh;
}
var Ps = { exports: {} }, Fh, uS;
function B8() {
  if (uS) return Fh;
  uS = 1;
  function e() {
    return !1;
  }
  return Fh = e, Fh;
}
Ps.exports;
var cS;
function Ti() {
  return cS || (cS = 1, (function(e, t) {
    var n = _n(), o = B8(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(Ps, Ps.exports)), Ps.exports;
}
var zh, fS;
function ic() {
  if (fS) return zh;
  fS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return zh = n, zh;
}
var $h, dS;
function b0() {
  if (dS) return $h;
  dS = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return $h = t, $h;
}
var Bh, hS;
function V8() {
  if (hS) return Bh;
  hS = 1;
  var e = xo(), t = b0(), n = Fn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", S = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", _ = "[object DataView]", C = "[object Float32Array]", b = "[object Float64Array]", R = "[object Int8Array]", P = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", j = "[object Uint16Array]", Y = "[object Uint32Array]", $ = {};
  $[C] = $[b] = $[R] = $[P] = $[T] = $[A] = $[O] = $[j] = $[Y] = !0, $[o] = $[i] = $[x] = $[a] = $[_] = $[l] = $[u] = $[f] = $[d] = $[h] = $[p] = $[m] = $[v] = $[S] = $[y] = !1;
  function V(W) {
    return n(W) && t(W.length) && !!$[e(W)];
  }
  return Bh = V, Bh;
}
var Vh, pS;
function sc() {
  if (pS) return Vh;
  pS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Vh = e, Vh;
}
var Ts = { exports: {} };
Ts.exports;
var gS;
function _0() {
  return gS || (gS = 1, (function(e, t) {
    var n = eA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Ts, Ts.exports)), Ts.exports;
}
var Hh, mS;
function ua() {
  if (mS) return Hh;
  mS = 1;
  var e = V8(), t = sc(), n = _0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return Hh = i, Hh;
}
var Wh, vS;
function rA() {
  if (vS) return Wh;
  vS = 1;
  var e = z8(), t = la(), n = rt(), o = Ti(), i = ic(), a = ua(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = n(d), m = !p && t(d), v = !p && !m && o(d), S = !p && !m && !v && a(d), y = p || m || v || S, x = y ? e(d.length, String) : [], _ = x.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      S && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      i(C, _))) && x.push(C);
    return x;
  }
  return Wh = f, Wh;
}
var Uh, yS;
function ac() {
  if (yS) return Uh;
  yS = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return Uh = t, Uh;
}
var Gh, wS;
function oA() {
  if (wS) return Gh;
  wS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Gh = e, Gh;
}
var Yh, xS;
function H8() {
  if (xS) return Yh;
  xS = 1;
  var e = oA(), t = e(Object.keys, Object);
  return Yh = t, Yh;
}
var Kh, bS;
function S0() {
  if (bS) return Kh;
  bS = 1;
  var e = ac(), t = H8(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Kh = i, Kh;
}
var Xh, _S;
function rr() {
  if (_S) return Xh;
  _S = 1;
  var e = sa(), t = b0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Xh = n, Xh;
}
var Qh, SS;
function qr() {
  if (SS) return Qh;
  SS = 1;
  var e = rA(), t = S0(), n = rr();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return Qh = o, Qh;
}
var Zh, ES;
function W8() {
  if (ES) return Zh;
  ES = 1;
  var e = aa(), t = qr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Zh = n, Zh;
}
var Jh, CS;
function U8() {
  if (CS) return Jh;
  CS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return Jh = e, Jh;
}
var ep, kS;
function G8() {
  if (kS) return ep;
  kS = 1;
  var e = tn(), t = ac(), n = U8(), o = Object.prototype, i = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return n(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !i.call(l, d)) || f.push(d);
    return f;
  }
  return ep = a, ep;
}
var tp, RS;
function _o() {
  if (RS) return tp;
  RS = 1;
  var e = rA(), t = G8(), n = rr();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return tp = o, tp;
}
var np, NS;
function Y8() {
  if (NS) return np;
  NS = 1;
  var e = aa(), t = _o();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return np = n, np;
}
var Is = { exports: {} };
Is.exports;
var PS;
function iA() {
  return PS || (PS = 1, (function(e, t) {
    var n = _n(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var p = d.length, m = u ? u(p) : new d.constructor(p);
      return d.copy(m), m;
    }
    e.exports = f;
  })(Is, Is.exports)), Is.exports;
}
var rp, TS;
function sA() {
  if (TS) return rp;
  TS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return rp = e, rp;
}
var op, IS;
function aA() {
  if (IS) return op;
  IS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return op = e, op;
}
var ip, AS;
function lA() {
  if (AS) return ip;
  AS = 1;
  function e() {
    return [];
  }
  return ip = e, ip;
}
var sp, MS;
function E0() {
  if (MS) return sp;
  MS = 1;
  var e = aA(), t = lA(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return sp = a, sp;
}
var ap, OS;
function K8() {
  if (OS) return ap;
  OS = 1;
  var e = aa(), t = E0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return ap = n, ap;
}
var lp, LS;
function C0() {
  if (LS) return lp;
  LS = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return lp = e, lp;
}
var up, DS;
function lc() {
  if (DS) return up;
  DS = 1;
  var e = oA(), t = e(Object.getPrototypeOf, Object);
  return up = t, up;
}
var cp, jS;
function uA() {
  if (jS) return cp;
  jS = 1;
  var e = C0(), t = lc(), n = E0(), o = lA(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return cp = a, cp;
}
var fp, qS;
function X8() {
  if (qS) return fp;
  qS = 1;
  var e = aa(), t = uA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return fp = n, fp;
}
var dp, FS;
function cA() {
  if (FS) return dp;
  FS = 1;
  var e = C0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return dp = n, dp;
}
var hp, zS;
function fA() {
  if (zS) return hp;
  zS = 1;
  var e = cA(), t = E0(), n = qr();
  function o(i) {
    return e(i, n, t);
  }
  return hp = o, hp;
}
var pp, $S;
function Q8() {
  if ($S) return pp;
  $S = 1;
  var e = cA(), t = uA(), n = _o();
  function o(i) {
    return e(i, n, t);
  }
  return pp = o, pp;
}
var gp, BS;
function Z8() {
  if (BS) return gp;
  BS = 1;
  var e = bo(), t = _n(), n = e(t, "DataView");
  return gp = n, gp;
}
var mp, VS;
function J8() {
  if (VS) return mp;
  VS = 1;
  var e = bo(), t = _n(), n = e(t, "Promise");
  return mp = n, mp;
}
var vp, HS;
function dA() {
  if (HS) return vp;
  HS = 1;
  var e = bo(), t = _n(), n = e(t, "Set");
  return vp = n, vp;
}
var yp, WS;
function e6() {
  if (WS) return yp;
  WS = 1;
  var e = bo(), t = _n(), n = e(t, "WeakMap");
  return yp = n, yp;
}
var wp, US;
function Ii() {
  if (US) return wp;
  US = 1;
  var e = Z8(), t = y0(), n = J8(), o = dA(), i = e6(), a = xo(), l = tA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), S = l(t), y = l(n), x = l(o), _ = l(i), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || n && C(n.resolve()) != d || o && C(new o()) != h || i && C(new i()) != p) && (C = function(b) {
    var R = a(b), P = R == f ? b.constructor : void 0, T = P ? l(P) : "";
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
        case _:
          return p;
      }
    return R;
  }), wp = C, wp;
}
var xp, GS;
function t6() {
  if (GS) return xp;
  GS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return xp = n, xp;
}
var bp, YS;
function hA() {
  if (YS) return bp;
  YS = 1;
  var e = _n(), t = e.Uint8Array;
  return bp = t, bp;
}
var _p, KS;
function k0() {
  if (KS) return _p;
  KS = 1;
  var e = hA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return _p = t, _p;
}
var Sp, XS;
function n6() {
  if (XS) return Sp;
  XS = 1;
  var e = k0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return Sp = t, Sp;
}
var Ep, QS;
function r6() {
  if (QS) return Ep;
  QS = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return Ep = t, Ep;
}
var Cp, ZS;
function o6() {
  if (ZS) return Cp;
  ZS = 1;
  var e = Pi(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return Cp = o, Cp;
}
var kp, JS;
function pA() {
  if (JS) return kp;
  JS = 1;
  var e = k0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return kp = t, kp;
}
var Rp, eE;
function i6() {
  if (eE) return Rp;
  eE = 1;
  var e = k0(), t = n6(), n = r6(), o = o6(), i = pA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", S = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", _ = "[object Int8Array]", C = "[object Int16Array]", b = "[object Int32Array]", R = "[object Uint8Array]", P = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(j, Y, $) {
    var V = j.constructor;
    switch (Y) {
      case v:
        return e(j);
      case a:
      case l:
        return new V(+j);
      case S:
        return t(j, $);
      case y:
      case x:
      case _:
      case C:
      case b:
      case R:
      case P:
      case T:
      case A:
        return i(j, $);
      case u:
        return new V();
      case f:
      case p:
        return new V(j);
      case d:
        return n(j);
      case h:
        return new V();
      case m:
        return o(j);
    }
  }
  return Rp = O, Rp;
}
var Np, tE;
function gA() {
  if (tE) return Np;
  tE = 1;
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
  return Np = n, Np;
}
var Pp, nE;
function mA() {
  if (nE) return Pp;
  nE = 1;
  var e = gA(), t = lc(), n = ac();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return Pp = o, Pp;
}
var Tp, rE;
function s6() {
  if (rE) return Tp;
  rE = 1;
  var e = Ii(), t = Fn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Tp = o, Tp;
}
var Ip, oE;
function a6() {
  if (oE) return Ip;
  oE = 1;
  var e = s6(), t = sc(), n = _0(), o = n && n.isMap, i = o ? t(o) : e;
  return Ip = i, Ip;
}
var Ap, iE;
function l6() {
  if (iE) return Ap;
  iE = 1;
  var e = Ii(), t = Fn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Ap = o, Ap;
}
var Mp, sE;
function u6() {
  if (sE) return Mp;
  sE = 1;
  var e = l6(), t = sc(), n = _0(), o = n && n.isSet, i = o ? t(o) : e;
  return Mp = i, Mp;
}
var Op, aE;
function vA() {
  if (aE) return Op;
  aE = 1;
  var e = nc(), t = x0(), n = oc(), o = W8(), i = Y8(), a = iA(), l = sA(), u = K8(), f = X8(), d = fA(), h = Q8(), p = Ii(), m = t6(), v = i6(), S = mA(), y = rt(), x = Ti(), _ = a6(), C = tn(), b = u6(), R = qr(), P = _o(), T = 1, A = 2, O = 4, j = "[object Arguments]", Y = "[object Array]", $ = "[object Boolean]", V = "[object Date]", W = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", q = "[object Map]", G = "[object Number]", M = "[object Object]", F = "[object RegExp]", Q = "[object Set]", D = "[object String]", U = "[object Symbol]", ie = "[object WeakMap]", B = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", X = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", _e = "[object Uint32Array]", me = {};
  me[j] = me[Y] = me[B] = me[Z] = me[$] = me[V] = me[ee] = me[X] = me[te] = me[se] = me[ae] = me[q] = me[G] = me[M] = me[F] = me[Q] = me[D] = me[U] = me[ce] = me[de] = me[pe] = me[_e] = !0, me[W] = me[L] = me[ie] = !1;
  function Ne(Ee, Je, Ue, Vt, ht, at) {
    var Ge, rn = Je & T, Ht = Je & A, on = Je & O;
    if (Ue && (Ge = ht ? Ue(Ee, Vt, ht, at) : Ue(Ee)), Ge !== void 0)
      return Ge;
    if (!C(Ee))
      return Ee;
    var Wt = y(Ee);
    if (Wt) {
      if (Ge = m(Ee), !rn)
        return l(Ee, Ge);
    } else {
      var bt = p(Ee), Fr = bt == L || bt == H;
      if (x(Ee))
        return a(Ee, rn);
      if (bt == M || bt == j || Fr && !ht) {
        if (Ge = Ht || Fr ? {} : S(Ee), !rn)
          return Ht ? f(Ee, i(Ge, Ee)) : u(Ee, o(Ge, Ee));
      } else {
        if (!me[bt])
          return ht ? Ee : {};
        Ge = v(Ee, bt, rn);
      }
    }
    at || (at = new e());
    var Ut = at.get(Ee);
    if (Ut)
      return Ut;
    at.set(Ee, Ge), b(Ee) ? Ee.forEach(function(It) {
      Ge.add(Ne(It, Je, Ue, It, Ee, at));
    }) : _(Ee) && Ee.forEach(function(It, Gt) {
      Ge.set(Gt, Ne(It, Je, Ue, Gt, Ee, at));
    });
    var zn = on ? Ht ? h : d : Ht ? P : R, Eo = Wt ? void 0 : zn(Ee);
    return t(Eo || Ee, function(It, Gt) {
      Eo && (Gt = It, It = Ee[Gt]), n(Ge, Gt, Ne(It, Je, Ue, Gt, Ee, at));
    }), Ge;
  }
  return Op = Ne, Op;
}
var Lp, lE;
function c6() {
  if (lE) return Lp;
  lE = 1;
  var e = vA(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return Lp = n, Lp;
}
var Dp, uE;
function R0() {
  if (uE) return Dp;
  uE = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Dp = e, Dp;
}
var jp, cE;
function f6() {
  if (cE) return jp;
  cE = 1;
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
  return jp = e, jp;
}
var qp, fE;
function N0() {
  if (fE) return qp;
  fE = 1;
  var e = f6(), t = e();
  return qp = t, qp;
}
var Fp, dE;
function P0() {
  if (dE) return Fp;
  dE = 1;
  var e = N0(), t = qr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return Fp = n, Fp;
}
var zp, hE;
function d6() {
  if (hE) return zp;
  hE = 1;
  var e = rr();
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
  return zp = t, zp;
}
var $p, pE;
function uc() {
  if (pE) return $p;
  pE = 1;
  var e = P0(), t = d6(), n = t(e);
  return $p = n, $p;
}
var Bp, gE;
function So() {
  if (gE) return Bp;
  gE = 1;
  function e(t) {
    return t;
  }
  return Bp = e, Bp;
}
var Vp, mE;
function yA() {
  if (mE) return Vp;
  mE = 1;
  var e = So();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return Vp = t, Vp;
}
var Hp, vE;
function wA() {
  if (vE) return Hp;
  vE = 1;
  var e = x0(), t = uc(), n = yA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return Hp = i, Hp;
}
var Wp, yE;
function xA() {
  return yE || (yE = 1, Wp = wA()), Wp;
}
var Up, wE;
function h6() {
  if (wE) return Up;
  wE = 1;
  var e = uc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return Up = t, Up;
}
var Gp, xE;
function p6() {
  if (xE) return Gp;
  xE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Gp = t, Gp;
}
var Yp, bE;
function g6() {
  if (bE) return Yp;
  bE = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Yp = e, Yp;
}
var Kp, _E;
function bA() {
  if (_E) return Kp;
  _E = 1;
  var e = w0(), t = p6(), n = g6();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Kp = o, Kp;
}
var Xp, SE;
function m6() {
  if (SE) return Xp;
  SE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Xp = e, Xp;
}
var Qp, EE;
function _A() {
  if (EE) return Qp;
  EE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Qp = e, Qp;
}
var Zp, CE;
function SA() {
  if (CE) return Zp;
  CE = 1;
  var e = bA(), t = m6(), n = _A(), o = 1, i = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, v = l.length, S = u.length;
    if (v != S && !(m && S > v))
      return !1;
    var y = p.get(l), x = p.get(u);
    if (y && x)
      return y == u && x == l;
    var _ = -1, C = !0, b = f & i ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++_ < v; ) {
      var R = l[_], P = u[_];
      if (d)
        var T = m ? d(P, R, _, u, l, p) : d(R, P, _, l, u, p);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (b) {
        if (!t(u, function(A, O) {
          if (!n(b, O) && (R === A || h(R, A, f, d, p)))
            return b.push(O);
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
  return Zp = a, Zp;
}
var Jp, kE;
function v6() {
  if (kE) return Jp;
  kE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return Jp = e, Jp;
}
var eg, RE;
function T0() {
  if (RE) return eg;
  RE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return eg = e, eg;
}
var tg, NE;
function y6() {
  if (NE) return tg;
  NE = 1;
  var e = Pi(), t = hA(), n = Ni(), o = SA(), i = v6(), a = T0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", S = "[object Set]", y = "[object String]", x = "[object Symbol]", _ = "[object ArrayBuffer]", C = "[object DataView]", b = e ? e.prototype : void 0, R = b ? b.valueOf : void 0;
  function P(T, A, O, j, Y, $, V) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case _:
        return !(T.byteLength != A.byteLength || !$(new t(T), new t(A)));
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
        var W = i;
      case S:
        var L = j & l;
        if (W || (W = a), T.size != A.size && !L)
          return !1;
        var H = V.get(T);
        if (H)
          return H == A;
        j |= u, V.set(T, A);
        var q = o(W(T), W(A), j, Y, $, V);
        return V.delete(T), q;
      case x:
        if (R)
          return R.call(T) == R.call(A);
    }
    return !1;
  }
  return tg = P, tg;
}
var ng, PE;
function w6() {
  if (PE) return ng;
  PE = 1;
  var e = fA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u, f, d, h) {
    var p = u & t, m = e(a), v = m.length, S = e(l), y = S.length;
    if (v != y && !p)
      return !1;
    for (var x = v; x--; ) {
      var _ = m[x];
      if (!(p ? _ in l : o.call(l, _)))
        return !1;
    }
    var C = h.get(a), b = h.get(l);
    if (C && b)
      return C == l && b == a;
    var R = !0;
    h.set(a, l), h.set(l, a);
    for (var P = p; ++x < v; ) {
      _ = m[x];
      var T = a[_], A = l[_];
      if (f)
        var O = p ? f(A, T, _, l, a, h) : f(T, A, _, a, l, h);
      if (!(O === void 0 ? T === A || d(T, A, u, f, h) : O)) {
        R = !1;
        break;
      }
      P || (P = _ == "constructor");
    }
    if (R && !P) {
      var j = a.constructor, Y = l.constructor;
      j != Y && "constructor" in a && "constructor" in l && !(typeof j == "function" && j instanceof j && typeof Y == "function" && Y instanceof Y) && (R = !1);
    }
    return h.delete(a), h.delete(l), R;
  }
  return ng = i, ng;
}
var rg, TE;
function x6() {
  if (TE) return rg;
  TE = 1;
  var e = nc(), t = SA(), n = y6(), o = w6(), i = Ii(), a = rt(), l = Ti(), u = ua(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function S(y, x, _, C, b, R) {
    var P = a(y), T = a(x), A = P ? h : i(y), O = T ? h : i(x);
    A = A == d ? p : A, O = O == d ? p : O;
    var j = A == p, Y = O == p, $ = A == O;
    if ($ && l(y)) {
      if (!l(x))
        return !1;
      P = !0, j = !1;
    }
    if ($ && !j)
      return R || (R = new e()), P || u(y) ? t(y, x, _, C, b, R) : n(y, x, A, _, C, b, R);
    if (!(_ & f)) {
      var V = j && v.call(y, "__wrapped__"), W = Y && v.call(x, "__wrapped__");
      if (V || W) {
        var L = V ? y.value() : y, H = W ? x.value() : x;
        return R || (R = new e()), b(L, H, _, C, R);
      }
    }
    return $ ? (R || (R = new e()), o(y, x, _, C, b, R)) : !1;
  }
  return rg = S, rg;
}
var og, IE;
function EA() {
  if (IE) return og;
  IE = 1;
  var e = x6(), t = Fn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return og = n, og;
}
var ig, AE;
function b6() {
  if (AE) return ig;
  AE = 1;
  var e = nc(), t = EA(), n = 1, o = 2;
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
          var _ = f(S, y, v, a, l, x);
        if (!(_ === void 0 ? t(y, S, n | o, f, x) : _))
          return !1;
      }
    }
    return !0;
  }
  return ig = i, ig;
}
var sg, ME;
function CA() {
  if (ME) return sg;
  ME = 1;
  var e = tn();
  function t(n) {
    return n === n && !e(n);
  }
  return sg = t, sg;
}
var ag, OE;
function _6() {
  if (OE) return ag;
  OE = 1;
  var e = CA(), t = qr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return ag = n, ag;
}
var lg, LE;
function kA() {
  if (LE) return lg;
  LE = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return lg = e, lg;
}
var ug, DE;
function S6() {
  if (DE) return ug;
  DE = 1;
  var e = b6(), t = _6(), n = kA();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return ug = o, ug;
}
var cg, jE;
function Ai() {
  if (jE) return cg;
  jE = 1;
  var e = xo(), t = Fn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return cg = o, cg;
}
var fg, qE;
function I0() {
  if (qE) return fg;
  qE = 1;
  var e = rt(), t = Ai(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return fg = i, fg;
}
var dg, FE;
function E6() {
  if (FE) return dg;
  FE = 1;
  var e = w0(), t = "Expected a function";
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
  return n.Cache = e, dg = n, dg;
}
var hg, zE;
function C6() {
  if (zE) return hg;
  zE = 1;
  var e = E6(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return hg = n, hg;
}
var pg, $E;
function k6() {
  if ($E) return pg;
  $E = 1;
  var e = C6(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return pg = o, pg;
}
var gg, BE;
function cc() {
  if (BE) return gg;
  BE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return gg = e, gg;
}
var mg, VE;
function R6() {
  if (VE) return mg;
  VE = 1;
  var e = Pi(), t = cc(), n = rt(), o = Ai(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
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
  return mg = l, mg;
}
var vg, HE;
function RA() {
  if (HE) return vg;
  HE = 1;
  var e = R6();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return vg = t, vg;
}
var yg, WE;
function fc() {
  if (WE) return yg;
  WE = 1;
  var e = rt(), t = I0(), n = k6(), o = RA();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return yg = i, yg;
}
var wg, UE;
function ca() {
  if (UE) return wg;
  UE = 1;
  var e = Ai();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return wg = t, wg;
}
var xg, GE;
function dc() {
  if (GE) return xg;
  GE = 1;
  var e = fc(), t = ca();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return xg = n, xg;
}
var bg, YE;
function N6() {
  if (YE) return bg;
  YE = 1;
  var e = dc();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return bg = t, bg;
}
var _g, KE;
function P6() {
  if (KE) return _g;
  KE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return _g = e, _g;
}
var Sg, XE;
function NA() {
  if (XE) return Sg;
  XE = 1;
  var e = fc(), t = la(), n = rt(), o = ic(), i = b0(), a = ca();
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
  return Sg = l, Sg;
}
var Eg, QE;
function PA() {
  if (QE) return Eg;
  QE = 1;
  var e = P6(), t = NA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Eg = n, Eg;
}
var Cg, ZE;
function T6() {
  if (ZE) return Cg;
  ZE = 1;
  var e = EA(), t = N6(), n = PA(), o = I0(), i = CA(), a = kA(), l = ca(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return Cg = d, Cg;
}
var kg, JE;
function TA() {
  if (JE) return kg;
  JE = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return kg = e, kg;
}
var Rg, eC;
function I6() {
  if (eC) return Rg;
  eC = 1;
  var e = dc();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return Rg = t, Rg;
}
var Ng, tC;
function A6() {
  if (tC) return Ng;
  tC = 1;
  var e = TA(), t = I6(), n = I0(), o = ca();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return Ng = i, Ng;
}
var Pg, nC;
function or() {
  if (nC) return Pg;
  nC = 1;
  var e = S6(), t = T6(), n = So(), o = rt(), i = A6();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return Pg = a, Pg;
}
var Tg, rC;
function IA() {
  if (rC) return Tg;
  rC = 1;
  var e = aA(), t = h6(), n = or(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return Tg = i, Tg;
}
var Ig, oC;
function M6() {
  if (oC) return Ig;
  oC = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Ig = n, Ig;
}
var Ag, iC;
function AA() {
  if (iC) return Ag;
  iC = 1;
  var e = M6(), t = NA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Ag = n, Ag;
}
var Mg, sC;
function O6() {
  if (sC) return Mg;
  sC = 1;
  var e = S0(), t = Ii(), n = la(), o = rt(), i = rr(), a = Ti(), l = ac(), u = ua(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
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
  return Mg = m, Mg;
}
var Og, aC;
function MA() {
  if (aC) return Og;
  aC = 1;
  function e(t) {
    return t === void 0;
  }
  return Og = e, Og;
}
var Lg, lC;
function OA() {
  if (lC) return Lg;
  lC = 1;
  var e = uc(), t = rr();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return Lg = n, Lg;
}
var Dg, uC;
function LA() {
  if (uC) return Dg;
  uC = 1;
  var e = cc(), t = or(), n = OA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return Dg = i, Dg;
}
var jg, cC;
function L6() {
  if (cC) return jg;
  cC = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return jg = e, jg;
}
var qg, fC;
function D6() {
  if (fC) return qg;
  fC = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return qg = e, qg;
}
var Fg, dC;
function DA() {
  if (dC) return Fg;
  dC = 1;
  var e = L6(), t = uc(), n = or(), o = D6(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return Fg = a, Fg;
}
var zg, hC;
function j6() {
  if (hC) return zg;
  hC = 1;
  var e = xo(), t = rt(), n = Fn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return zg = i, zg;
}
var $g, pC;
function q6() {
  if (pC) return $g;
  pC = 1;
  var e = TA(), t = e("length");
  return $g = t, $g;
}
var Bg, gC;
function F6() {
  if (gC) return Bg;
  gC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return Bg = f, Bg;
}
var Vg, mC;
function z6() {
  if (mC) return Vg;
  mC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", S = d + "?", y = "[" + a + "]?", x = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + S + ")*", _ = y + S + x, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", b = RegExp(f + "(?=" + f + ")|" + C + _, "g");
  function R(P) {
    for (var T = b.lastIndex = 0; b.test(P); )
      ++T;
    return T;
  }
  return Vg = R, Vg;
}
var Hg, vC;
function $6() {
  if (vC) return Hg;
  vC = 1;
  var e = q6(), t = F6(), n = z6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return Hg = o, Hg;
}
var Wg, yC;
function B6() {
  if (yC) return Wg;
  yC = 1;
  var e = S0(), t = Ii(), n = rr(), o = j6(), i = $6(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? i(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return Wg = u, Wg;
}
var Ug, wC;
function V6() {
  if (wC) return Ug;
  wC = 1;
  var e = x0(), t = gA(), n = P0(), o = or(), i = lc(), a = rt(), l = Ti(), u = sa(), f = tn(), d = ua();
  function h(p, m, v) {
    var S = a(p), y = S || l(p) || d(p);
    if (m = o(m, 4), v == null) {
      var x = p && p.constructor;
      y ? v = S ? new x() : [] : f(p) ? v = u(x) ? t(i(p)) : {} : v = {};
    }
    return (y ? e : n)(p, function(_, C, b) {
      return m(v, _, C, b);
    }), v;
  }
  return Ug = h, Ug;
}
var Gg, xC;
function H6() {
  if (xC) return Gg;
  xC = 1;
  var e = Pi(), t = la(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Gg = i, Gg;
}
var Yg, bC;
function A0() {
  if (bC) return Yg;
  bC = 1;
  var e = C0(), t = H6();
  function n(o, i, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      i > 0 && a(h) ? i > 1 ? n(h, i - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return Yg = n, Yg;
}
var Kg, _C;
function W6() {
  if (_C) return Kg;
  _C = 1;
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
  return Kg = e, Kg;
}
var Xg, SC;
function jA() {
  if (SC) return Xg;
  SC = 1;
  var e = W6(), t = Math.max;
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
  return Xg = n, Xg;
}
var Qg, EC;
function U6() {
  if (EC) return Qg;
  EC = 1;
  var e = R0(), t = nA(), n = So(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Qg = o, Qg;
}
var Zg, CC;
function G6() {
  if (CC) return Zg;
  CC = 1;
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
  return Zg = o, Zg;
}
var Jg, kC;
function qA() {
  if (kC) return Jg;
  kC = 1;
  var e = U6(), t = G6(), n = t(e);
  return Jg = n, Jg;
}
var em, RC;
function hc() {
  if (RC) return em;
  RC = 1;
  var e = So(), t = jA(), n = qA();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return em = o, em;
}
var tm, NC;
function FA() {
  if (NC) return tm;
  NC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return tm = e, tm;
}
var nm, PC;
function Y6() {
  if (PC) return nm;
  PC = 1;
  function e(t) {
    return t !== t;
  }
  return nm = e, nm;
}
var rm, TC;
function K6() {
  if (TC) return rm;
  TC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return rm = e, rm;
}
var om, IC;
function X6() {
  if (IC) return om;
  IC = 1;
  var e = FA(), t = Y6(), n = K6();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return om = o, om;
}
var im, AC;
function Q6() {
  if (AC) return im;
  AC = 1;
  var e = X6();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return im = t, im;
}
var sm, MC;
function Z6() {
  if (MC) return sm;
  MC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return sm = e, sm;
}
var am, OC;
function J6() {
  if (OC) return am;
  OC = 1;
  function e() {
  }
  return am = e, am;
}
var lm, LC;
function eW() {
  if (LC) return lm;
  LC = 1;
  var e = dA(), t = J6(), n = T0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return lm = i, lm;
}
var um, DC;
function tW() {
  if (DC) return um;
  DC = 1;
  var e = bA(), t = Q6(), n = Z6(), o = _A(), i = eW(), a = T0(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, v = f.length, S = !0, y = [], x = y;
    if (h)
      S = !1, m = n;
    else if (v >= l) {
      var _ = d ? null : i(f);
      if (_)
        return a(_);
      S = !1, m = o, x = new e();
    } else
      x = d ? [] : y;
    e:
      for (; ++p < v; ) {
        var C = f[p], b = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, S && b === b) {
          for (var R = x.length; R--; )
            if (x[R] === b)
              continue e;
          d && x.push(b), y.push(C);
        } else m(x, b, h) || (x !== y && x.push(b), y.push(C));
      }
    return y;
  }
  return um = u, um;
}
var cm, jC;
function zA() {
  if (jC) return cm;
  jC = 1;
  var e = rr(), t = Fn();
  function n(o) {
    return t(o) && e(o);
  }
  return cm = n, cm;
}
var fm, qC;
function nW() {
  if (qC) return fm;
  qC = 1;
  var e = A0(), t = hc(), n = tW(), o = zA(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return fm = i, fm;
}
var dm, FC;
function rW() {
  if (FC) return dm;
  FC = 1;
  var e = cc();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return dm = t, dm;
}
var hm, zC;
function $A() {
  if (zC) return hm;
  zC = 1;
  var e = rW(), t = qr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return hm = n, hm;
}
var pm, $C;
function nn() {
  if ($C) return pm;
  $C = 1;
  var e;
  if (typeof v0 == "function")
    try {
      e = {
        clone: c6(),
        constant: R0(),
        each: xA(),
        filter: IA(),
        has: AA(),
        isArray: rt(),
        isEmpty: O6(),
        isFunction: sa(),
        isUndefined: MA(),
        keys: qr(),
        map: LA(),
        reduce: DA(),
        size: B6(),
        transform: V6(),
        union: nW(),
        values: $A()
      };
    } catch {
    }
  return e || (e = window._), pm = e, pm;
}
var gm, BC;
function M0() {
  if (BC) return gm;
  BC = 1;
  var e = nn();
  gm = i;
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
    var _ = f(this._isDirected, h, p, m);
    return h = _.v, p = _.w, Object.freeze(_), this._edgeObjs[x] = _, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][x] = _, this._out[h][x] = _, this._edgeCount++, this;
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
    var _ = { v: S, w: y };
    return v && (_.name = v), _;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return gm;
}
var mm, VC;
function oW() {
  return VC || (VC = 1, mm = "2.1.8"), mm;
}
var vm, HC;
function iW() {
  return HC || (HC = 1, vm = {
    Graph: M0(),
    version: oW()
  }), vm;
}
var ym, WC;
function sW() {
  if (WC) return ym;
  WC = 1;
  var e = nn(), t = M0();
  ym = {
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
  return ym;
}
var wm, UC;
function aW() {
  if (UC) return wm;
  UC = 1;
  var e = nn();
  wm = t;
  function t(n) {
    var o = {}, i = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(n.successors(u), l), e.each(n.predecessors(u), l));
    }
    return e.each(n.nodes(), function(u) {
      a = [], l(u), a.length && i.push(a);
    }), i;
  }
  return wm;
}
var xm, GC;
function BA() {
  if (GC) return xm;
  GC = 1;
  var e = nn();
  xm = t;
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
  }, xm;
}
var bm, YC;
function VA() {
  if (YC) return bm;
  YC = 1;
  var e = nn(), t = BA();
  bm = o;
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
      var y = S.v !== p ? S.v : S.w, x = d[y], _ = u(S), C = m.distance + _;
      if (_ < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + S + " Weight: " + _);
      C < x.distance && (x.distance = C, x.predecessor = p, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(S) {
      var y = S === l ? 0 : Number.POSITIVE_INFINITY;
      d[S] = { distance: y }, h.add(S, y);
    }); h.size() > 0 && (p = h.removeMin(), m = d[p], m.distance !== Number.POSITIVE_INFINITY); )
      f(p).forEach(v);
    return d;
  }
  return bm;
}
var _m, KC;
function lW() {
  if (KC) return _m;
  KC = 1;
  var e = VA(), t = nn();
  _m = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return _m;
}
var Sm, XC;
function HA() {
  if (XC) return Sm;
  XC = 1;
  var e = nn();
  Sm = t;
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
  return Sm;
}
var Em, QC;
function uW() {
  if (QC) return Em;
  QC = 1;
  var e = nn(), t = HA();
  Em = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return Em;
}
var Cm, ZC;
function cW() {
  if (ZC) return Cm;
  ZC = 1;
  var e = nn();
  Cm = n;
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
          var S = m[d], y = h[v], x = m[v], _ = S.distance + y.distance;
          _ < x.distance && (x.distance = _, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return Cm;
}
var km, JC;
function WA() {
  if (JC) return km;
  JC = 1;
  var e = nn();
  km = t, t.CycleException = n;
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
  return n.prototype = new Error(), km;
}
var Rm, ek;
function fW() {
  if (ek) return Rm;
  ek = 1;
  var e = WA();
  Rm = t;
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
  return Rm;
}
var Nm, tk;
function UA() {
  if (tk) return Nm;
  tk = 1;
  var e = nn();
  Nm = t;
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
  return Nm;
}
var Pm, nk;
function dW() {
  if (nk) return Pm;
  nk = 1;
  var e = UA();
  Pm = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return Pm;
}
var Tm, rk;
function hW() {
  if (rk) return Tm;
  rk = 1;
  var e = UA();
  Tm = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return Tm;
}
var Im, ok;
function pW() {
  if (ok) return Im;
  ok = 1;
  var e = nn(), t = M0(), n = BA();
  Im = o;
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
  return Im;
}
var Am, ik;
function gW() {
  return ik || (ik = 1, Am = {
    components: aW(),
    dijkstra: VA(),
    dijkstraAll: lW(),
    findCycles: uW(),
    floydWarshall: cW(),
    isAcyclic: fW(),
    postorder: dW(),
    preorder: hW(),
    prim: pW(),
    tarjan: HA(),
    topsort: WA()
  }), Am;
}
var Mm, sk;
function mW() {
  if (sk) return Mm;
  sk = 1;
  var e = iW();
  return Mm = {
    Graph: e.Graph,
    json: sW(),
    alg: gW(),
    version: e.version
  }, Mm;
}
var Om, ak;
function wn() {
  if (ak) return Om;
  ak = 1;
  var e;
  if (typeof v0 == "function")
    try {
      e = mW();
    } catch {
    }
  return e || (e = window.graphlib), Om = e, Om;
}
var Lm, lk;
function vW() {
  if (lk) return Lm;
  lk = 1;
  var e = vA(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return Lm = o, Lm;
}
var Dm, uk;
function pc() {
  if (uk) return Dm;
  uk = 1;
  var e = Ni(), t = rr(), n = ic(), o = tn();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return Dm = i, Dm;
}
var jm, ck;
function yW() {
  if (ck) return jm;
  ck = 1;
  var e = hc(), t = Ni(), n = pc(), o = _o(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), S = -1, y = v.length; ++S < y; ) {
        var x = v[S], _ = u[x];
        (_ === void 0 || t(_, i[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return jm = l, jm;
}
var qm, fk;
function wW() {
  if (fk) return qm;
  fk = 1;
  var e = or(), t = rr(), n = qr();
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
  return qm = o, qm;
}
var Fm, dk;
function xW() {
  if (dk) return Fm;
  dk = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return Fm = t, Fm;
}
var zm, hk;
function bW() {
  if (hk) return zm;
  hk = 1;
  var e = xW(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return zm = n, zm;
}
var $m, pk;
function _W() {
  if (pk) return $m;
  pk = 1;
  var e = bW(), t = tn(), n = Ai(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
  return $m = f, $m;
}
var Bm, gk;
function GA() {
  if (gk) return Bm;
  gk = 1;
  var e = _W(), t = 1 / 0, n = 17976931348623157e292;
  function o(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * n;
    }
    return i === i ? i : 0;
  }
  return Bm = o, Bm;
}
var Vm, mk;
function SW() {
  if (mk) return Vm;
  mk = 1;
  var e = GA();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return Vm = t, Vm;
}
var Hm, vk;
function EW() {
  if (vk) return Hm;
  vk = 1;
  var e = FA(), t = or(), n = SW(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return Hm = i, Hm;
}
var Wm, yk;
function CW() {
  if (yk) return Wm;
  yk = 1;
  var e = wW(), t = EW(), n = e(t);
  return Wm = n, Wm;
}
var Um, wk;
function YA() {
  if (wk) return Um;
  wk = 1;
  var e = A0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return Um = t, Um;
}
var Gm, xk;
function kW() {
  if (xk) return Gm;
  xk = 1;
  var e = N0(), t = yA(), n = _o();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Gm = o, Gm;
}
var Ym, bk;
function RW() {
  if (bk) return Ym;
  bk = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Ym = e, Ym;
}
var Km, _k;
function NW() {
  if (_k) return Km;
  _k = 1;
  var e = rc(), t = P0(), n = or();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Km = o, Km;
}
var Xm, Sk;
function O0() {
  if (Sk) return Xm;
  Sk = 1;
  var e = Ai();
  function t(n, o, i) {
    for (var a = -1, l = n.length; ++a < l; ) {
      var u = n[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : i(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Xm = t, Xm;
}
var Qm, Ek;
function PW() {
  if (Ek) return Qm;
  Ek = 1;
  function e(t, n) {
    return t > n;
  }
  return Qm = e, Qm;
}
var Zm, Ck;
function TW() {
  if (Ck) return Zm;
  Ck = 1;
  var e = O0(), t = PW(), n = So();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Zm = o, Zm;
}
var Jm, kk;
function KA() {
  if (kk) return Jm;
  kk = 1;
  var e = rc(), t = Ni();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return Jm = n, Jm;
}
var ev, Rk;
function IW() {
  if (Rk) return ev;
  Rk = 1;
  var e = xo(), t = lc(), n = Fn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return ev = d, ev;
}
var tv, Nk;
function XA() {
  if (Nk) return tv;
  Nk = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return tv = e, tv;
}
var nv, Pk;
function AW() {
  if (Pk) return nv;
  Pk = 1;
  var e = aa(), t = _o();
  function n(o) {
    return e(o, t(o));
  }
  return nv = n, nv;
}
var rv, Tk;
function MW() {
  if (Tk) return rv;
  Tk = 1;
  var e = KA(), t = iA(), n = pA(), o = sA(), i = mA(), a = la(), l = rt(), u = zA(), f = Ti(), d = sa(), h = tn(), p = IW(), m = ua(), v = XA(), S = AW();
  function y(x, _, C, b, R, P, T) {
    var A = v(x, C), O = v(_, C), j = T.get(O);
    if (j) {
      e(x, C, j);
      return;
    }
    var Y = P ? P(A, O, C + "", x, _, T) : void 0, $ = Y === void 0;
    if ($) {
      var V = l(O), W = !V && f(O), L = !V && !W && m(O);
      Y = O, V || W || L ? l(A) ? Y = A : u(A) ? Y = o(A) : W ? ($ = !1, Y = t(O, !0)) : L ? ($ = !1, Y = n(O, !0)) : Y = [] : p(O) || a(O) ? (Y = A, a(A) ? Y = S(A) : (!h(A) || d(A)) && (Y = i(O))) : $ = !1;
    }
    $ && (T.set(O, Y), R(Y, O, b, P, T), T.delete(O)), e(x, C, Y);
  }
  return rv = y, rv;
}
var ov, Ik;
function OW() {
  if (Ik) return ov;
  Ik = 1;
  var e = nc(), t = KA(), n = N0(), o = MW(), i = tn(), a = _o(), l = XA();
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
  return ov = u, ov;
}
var iv, Ak;
function LW() {
  if (Ak) return iv;
  Ak = 1;
  var e = hc(), t = pc();
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
  return iv = n, iv;
}
var sv, Mk;
function DW() {
  if (Mk) return sv;
  Mk = 1;
  var e = OW(), t = LW(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return sv = n, sv;
}
var av, Ok;
function QA() {
  if (Ok) return av;
  Ok = 1;
  function e(t, n) {
    return t < n;
  }
  return av = e, av;
}
var lv, Lk;
function jW() {
  if (Lk) return lv;
  Lk = 1;
  var e = O0(), t = QA(), n = So();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return lv = o, lv;
}
var uv, Dk;
function qW() {
  if (Dk) return uv;
  Dk = 1;
  var e = O0(), t = or(), n = QA();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return uv = o, uv;
}
var cv, jk;
function FW() {
  if (jk) return cv;
  jk = 1;
  var e = _n(), t = function() {
    return e.Date.now();
  };
  return cv = t, cv;
}
var fv, qk;
function zW() {
  if (qk) return fv;
  qk = 1;
  var e = oc(), t = fc(), n = ic(), o = tn(), i = ca();
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
  return fv = a, fv;
}
var dv, Fk;
function $W() {
  if (Fk) return dv;
  Fk = 1;
  var e = dc(), t = zW(), n = fc();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return dv = o, dv;
}
var hv, zk;
function BW() {
  if (zk) return hv;
  zk = 1;
  var e = $W(), t = PA();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return hv = n, hv;
}
var pv, $k;
function VW() {
  if ($k) return pv;
  $k = 1;
  var e = YA(), t = jA(), n = qA();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return pv = o, pv;
}
var gv, Bk;
function HW() {
  if (Bk) return gv;
  Bk = 1;
  var e = BW(), t = VW(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return gv = n, gv;
}
var mv, Vk;
function WW() {
  if (Vk) return mv;
  Vk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return mv = n, mv;
}
var vv, Hk;
function UW() {
  if (Hk) return vv;
  Hk = 1;
  var e = WW(), t = pc(), n = GA();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return vv = o, vv;
}
var yv, Wk;
function GW() {
  if (Wk) return yv;
  Wk = 1;
  var e = UW(), t = e();
  return yv = t, yv;
}
var wv, Uk;
function YW() {
  if (Uk) return wv;
  Uk = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return wv = e, wv;
}
var xv, Gk;
function KW() {
  if (Gk) return xv;
  Gk = 1;
  var e = Ai();
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
  return xv = t, xv;
}
var bv, Yk;
function XW() {
  if (Yk) return bv;
  Yk = 1;
  var e = KW();
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
  return bv = t, bv;
}
var _v, Kk;
function QW() {
  if (Kk) return _v;
  Kk = 1;
  var e = cc(), t = dc(), n = or(), o = OA(), i = YW(), a = sc(), l = XW(), u = So(), f = rt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var v = -1;
    p = e(p, a(n));
    var S = o(h, function(y, x, _) {
      var C = e(p, function(b) {
        return b(y);
      });
      return { criteria: C, index: ++v, value: y };
    });
    return i(S, function(y, x) {
      return l(y, x, m);
    });
  }
  return _v = d, _v;
}
var Sv, Xk;
function ZW() {
  if (Xk) return Sv;
  Xk = 1;
  var e = A0(), t = QW(), n = hc(), o = pc(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Sv = i, Sv;
}
var Ev, Qk;
function JW() {
  if (Qk) return Ev;
  Qk = 1;
  var e = RA(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return Ev = n, Ev;
}
var Cv, Zk;
function eU() {
  if (Zk) return Cv;
  Zk = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return Cv = e, Cv;
}
var kv, Jk;
function tU() {
  if (Jk) return kv;
  Jk = 1;
  var e = oc(), t = eU();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return kv = n, kv;
}
var Rv, eR;
function We() {
  if (eR) return Rv;
  eR = 1;
  var e;
  if (typeof v0 == "function")
    try {
      e = {
        cloneDeep: vW(),
        constant: R0(),
        defaults: yW(),
        each: xA(),
        filter: IA(),
        find: CW(),
        flatten: YA(),
        forEach: wA(),
        forIn: kW(),
        has: AA(),
        isUndefined: MA(),
        last: RW(),
        map: LA(),
        mapValues: NW(),
        max: TW(),
        merge: DW(),
        min: jW(),
        minBy: qW(),
        now: FW(),
        pick: HW(),
        range: GW(),
        reduce: DA(),
        sortBy: ZW(),
        uniqueId: JW(),
        values: $A(),
        zipObject: tU()
      };
    } catch {
    }
  return e || (e = window._), Rv = e, Rv;
}
var Nv, tR;
function nU() {
  if (tR) return Nv;
  tR = 1, Nv = e;
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
  return Nv;
}
var Pv, nR;
function rU() {
  if (nR) return Pv;
  nR = 1;
  var e = We(), t = wn().Graph, n = nU();
  Pv = i;
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
      var x = d.edge(y), _ = d.node(y.v);
      v && S.push({ v: y.v, w: y.w }), _.out -= x, f(h, p, _);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var x = d.edge(y), _ = y.w, C = d.node(_);
      C.in -= x, f(h, p, C);
    }), d.removeNode(m.v), S;
  }
  function u(d, h) {
    var p = new t(), m = 0, v = 0;
    e.forEach(d.nodes(), function(x) {
      p.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var _ = p.edge(x.v, x.w) || 0, C = h(x), b = _ + C;
      p.setEdge(x.v, x.w, b), v = Math.max(v, p.node(x.v).out += C), m = Math.max(m, p.node(x.w).in += C);
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
  return Pv;
}
var Tv, rR;
function oU() {
  if (rR) return Tv;
  rR = 1;
  var e = We(), t = rU();
  Tv = {
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
  return Tv;
}
var Iv, oR;
function Pt() {
  if (oR) return Iv;
  oR = 1;
  var e = We(), t = wn().Graph;
  Iv = {
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
  function n(x, _, C, b) {
    var R;
    do
      R = e.uniqueId(b);
    while (x.hasNode(R));
    return C.dummy = _, x.setNode(R, C), R;
  }
  function o(x) {
    var _ = new t().setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      _.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      var b = _.edge(C.v, C.w) || { weight: 0, minlen: 1 }, R = x.edge(C);
      _.setEdge(C.v, C.w, {
        weight: b.weight + R.weight,
        minlen: Math.max(b.minlen, R.minlen)
      });
    }), _;
  }
  function i(x) {
    var _ = new t({ multigraph: x.isMultigraph() }).setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      x.children(C).length || _.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      _.setEdge(C, x.edge(C));
    }), _;
  }
  function a(x) {
    var _ = e.map(x.nodes(), function(C) {
      var b = {};
      return e.forEach(x.outEdges(C), function(R) {
        b[R.w] = (b[R.w] || 0) + x.edge(R).weight;
      }), b;
    });
    return e.zipObject(x.nodes(), _);
  }
  function l(x) {
    var _ = e.map(x.nodes(), function(C) {
      var b = {};
      return e.forEach(x.inEdges(C), function(R) {
        b[R.v] = (b[R.v] || 0) + x.edge(R).weight;
      }), b;
    });
    return e.zipObject(x.nodes(), _);
  }
  function u(x, _) {
    var C = x.x, b = x.y, R = _.x - C, P = _.y - b, T = x.width / 2, A = x.height / 2;
    if (!R && !P)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, j;
    return Math.abs(P) * T > Math.abs(R) * A ? (P < 0 && (A = -A), O = A * R / P, j = A) : (R < 0 && (T = -T), O = T, j = T * P / R), { x: C + O, y: b + j };
  }
  function f(x) {
    var _ = e.map(e.range(m(x) + 1), function() {
      return [];
    });
    return e.forEach(x.nodes(), function(C) {
      var b = x.node(C), R = b.rank;
      e.isUndefined(R) || (_[R][b.order] = C);
    }), _;
  }
  function d(x) {
    var _ = e.min(e.map(x.nodes(), function(C) {
      return x.node(C).rank;
    }));
    e.forEach(x.nodes(), function(C) {
      var b = x.node(C);
      e.has(b, "rank") && (b.rank -= _);
    });
  }
  function h(x) {
    var _ = e.min(e.map(x.nodes(), function(P) {
      return x.node(P).rank;
    })), C = [];
    e.forEach(x.nodes(), function(P) {
      var T = x.node(P).rank - _;
      C[T] || (C[T] = []), C[T].push(P);
    });
    var b = 0, R = x.graph().nodeRankFactor;
    e.forEach(C, function(P, T) {
      e.isUndefined(P) && T % R !== 0 ? --b : b && e.forEach(P, function(A) {
        x.node(A).rank += b;
      });
    });
  }
  function p(x, _, C, b) {
    var R = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (R.rank = C, R.order = b), n(x, "border", R, _);
  }
  function m(x) {
    return e.max(e.map(x.nodes(), function(_) {
      var C = x.node(_).rank;
      if (!e.isUndefined(C))
        return C;
    }));
  }
  function v(x, _) {
    var C = { lhs: [], rhs: [] };
    return e.forEach(x, function(b) {
      _(b) ? C.lhs.push(b) : C.rhs.push(b);
    }), C;
  }
  function S(x, _) {
    var C = e.now();
    try {
      return _();
    } finally {
      console.log(x + " time: " + (e.now() - C) + "ms");
    }
  }
  function y(x, _) {
    return _();
  }
  return Iv;
}
var Av, iR;
function iU() {
  if (iR) return Av;
  iR = 1;
  var e = We(), t = Pt();
  Av = {
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
  return Av;
}
var Mv, sR;
function bu() {
  if (sR) return Mv;
  sR = 1;
  var e = We();
  Mv = {
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
  return Mv;
}
var Ov, aR;
function ZA() {
  if (aR) return Ov;
  aR = 1;
  var e = We(), t = wn().Graph, n = bu().slack;
  Ov = o;
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
  return Ov;
}
var Lv, lR;
function sU() {
  if (lR) return Lv;
  lR = 1;
  var e = We(), t = ZA(), n = bu().slack, o = bu().longestPath, i = wn().alg.preorder, a = wn().alg.postorder, l = Pt().simplify;
  Lv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = S, u.exchangeEdges = y;
  function u(b) {
    b = l(b), o(b);
    var R = t(b);
    p(R), f(R, b);
    for (var P, T; P = v(R); )
      T = S(R, b, P), y(R, b, P, T);
  }
  function f(b, R) {
    var P = a(b, b.nodes());
    P = P.slice(0, P.length - 1), e.forEach(P, function(T) {
      d(b, R, T);
    });
  }
  function d(b, R, P) {
    var T = b.node(P), A = T.parent;
    b.edge(P, A).cutvalue = h(b, R, P);
  }
  function h(b, R, P) {
    var T = b.node(P), A = T.parent, O = !0, j = R.edge(P, A), Y = 0;
    return j || (O = !1, j = R.edge(A, P)), Y = j.weight, e.forEach(R.nodeEdges(P), function($) {
      var V = $.v === P, W = V ? $.w : $.v;
      if (W !== A) {
        var L = V === O, H = R.edge($).weight;
        if (Y += L ? H : -H, _(b, P, W)) {
          var q = b.edge(P, W).cutvalue;
          Y += L ? -q : q;
        }
      }
    }), Y;
  }
  function p(b, R) {
    arguments.length < 2 && (R = b.nodes()[0]), m(b, {}, 1, R);
  }
  function m(b, R, P, T, A) {
    var O = P, j = b.node(T);
    return R[T] = !0, e.forEach(b.neighbors(T), function(Y) {
      e.has(R, Y) || (P = m(b, R, P, Y, T));
    }), j.low = O, j.lim = P++, A ? j.parent = A : delete j.parent, P;
  }
  function v(b) {
    return e.find(b.edges(), function(R) {
      return b.edge(R).cutvalue < 0;
    });
  }
  function S(b, R, P) {
    var T = P.v, A = P.w;
    R.hasEdge(T, A) || (T = P.w, A = P.v);
    var O = b.node(T), j = b.node(A), Y = O, $ = !1;
    O.lim > j.lim && (Y = j, $ = !0);
    var V = e.filter(R.edges(), function(W) {
      return $ === C(b, b.node(W.v), Y) && $ !== C(b, b.node(W.w), Y);
    });
    return e.minBy(V, function(W) {
      return n(R, W);
    });
  }
  function y(b, R, P, T) {
    var A = P.v, O = P.w;
    b.removeEdge(A, O), b.setEdge(T.v, T.w, {}), p(b), f(b, R), x(b, R);
  }
  function x(b, R) {
    var P = e.find(b.nodes(), function(A) {
      return !R.node(A).parent;
    }), T = i(b, P);
    T = T.slice(1), e.forEach(T, function(A) {
      var O = b.node(A).parent, j = R.edge(A, O), Y = !1;
      j || (j = R.edge(O, A), Y = !0), R.node(A).rank = R.node(O).rank + (Y ? j.minlen : -j.minlen);
    });
  }
  function _(b, R, P) {
    return b.hasEdge(R, P);
  }
  function C(b, R, P) {
    return P.low <= R.lim && R.lim <= P.lim;
  }
  return Lv;
}
var Dv, uR;
function aU() {
  if (uR) return Dv;
  uR = 1;
  var e = bu(), t = e.longestPath, n = ZA(), o = sU();
  Dv = i;
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
  return Dv;
}
var jv, cR;
function lU() {
  if (cR) return jv;
  cR = 1;
  var e = We();
  jv = t;
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
  return jv;
}
var qv, fR;
function uU() {
  if (fR) return qv;
  fR = 1;
  var e = We(), t = Pt();
  qv = {
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
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), _ = u.node(v);
    u.setParent(y, v), _.borderTop = y, u.setParent(x, v), _.borderBottom = x, e.forEach(S, function(C) {
      o(u, f, d, h, p, m, C);
      var b = u.node(C), R = b.borderTop ? b.borderTop : C, P = b.borderBottom ? b.borderBottom : C, T = b.borderTop ? h : 2 * h, A = R !== P ? 1 : p - m[v] + 1;
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
  return qv;
}
var Fv, dR;
function cU() {
  if (dR) return Fv;
  dR = 1;
  var e = We(), t = Pt();
  Fv = n;
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
  return Fv;
}
var zv, hR;
function fU() {
  if (hR) return zv;
  hR = 1;
  var e = We();
  zv = {
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
  return zv;
}
var $v, pR;
function dU() {
  if (pR) return $v;
  pR = 1;
  var e = We();
  $v = t;
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
  return $v;
}
var Bv, gR;
function hU() {
  if (gR) return Bv;
  gR = 1;
  var e = We();
  Bv = t;
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
  return Bv;
}
var Vv, mR;
function pU() {
  if (mR) return Vv;
  mR = 1;
  var e = We();
  Vv = t;
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
  return Vv;
}
var Hv, vR;
function gU() {
  if (vR) return Hv;
  vR = 1;
  var e = We();
  Hv = t;
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
  return Hv;
}
var Wv, yR;
function mU() {
  if (yR) return Wv;
  yR = 1;
  var e = We(), t = Pt();
  Wv = n;
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
  return Wv;
}
var Uv, wR;
function vU() {
  if (wR) return Uv;
  wR = 1;
  var e = We(), t = pU(), n = gU(), o = mU();
  Uv = i;
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
    var _ = n(x, d);
    a(_, y);
    var C = o(_, h);
    if (v && (C.vs = e.flatten([v, C.vs, S], !0), u.predecessors(v).length)) {
      var b = u.node(u.predecessors(v)[0]), R = u.node(u.predecessors(S)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + b.order + R.order) / (C.weight + 2), C.weight += 2;
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
  return Uv;
}
var Gv, xR;
function yU() {
  if (xR) return Gv;
  xR = 1;
  var e = We(), t = wn().Graph;
  Gv = n;
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
  return Gv;
}
var Yv, bR;
function wU() {
  if (bR) return Yv;
  bR = 1;
  var e = We();
  Yv = t;
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
  return Yv;
}
var Kv, _R;
function xU() {
  if (_R) return Kv;
  _R = 1;
  var e = We(), t = dU(), n = hU(), o = vU(), i = yU(), a = wU(), l = wn().Graph, u = Pt();
  Kv = f;
  function f(m) {
    var v = u.maxRank(m), S = d(m, e.range(1, v + 1), "inEdges"), y = d(m, e.range(v - 1, -1, -1), "outEdges"), x = t(m);
    p(m, x);
    for (var _ = Number.POSITIVE_INFINITY, C, b = 0, R = 0; R < 4; ++b, ++R) {
      h(b % 2 ? S : y, b % 4 >= 2), x = u.buildLayerMatrix(m);
      var P = n(m, x);
      P < _ && (R = 0, C = e.cloneDeep(x), _ = P);
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
      var x = y.graph().root, _ = o(y, x, S, v);
      e.forEach(_.vs, function(C, b) {
        y.node(C).order = b;
      }), a(y, S, _.vs);
    });
  }
  function p(m, v) {
    e.forEach(v, function(S) {
      e.forEach(S, function(y, x) {
        m.node(y).order = x;
      });
    });
  }
  return Kv;
}
var Xv, SR;
function bU() {
  if (SR) return Xv;
  SR = 1;
  var e = We(), t = wn().Graph, n = Pt();
  Xv = {
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
  function o(_, C) {
    var b = {};
    function R(P, T) {
      var A = 0, O = 0, j = P.length, Y = e.last(T);
      return e.forEach(T, function($, V) {
        var W = a(_, $), L = W ? _.node(W).order : j;
        (W || $ === Y) && (e.forEach(T.slice(O, V + 1), function(H) {
          e.forEach(_.predecessors(H), function(q) {
            var G = _.node(q), M = G.order;
            (M < A || L < M) && !(G.dummy && _.node(H).dummy) && l(b, q, H);
          });
        }), O = V + 1, A = L);
      }), T;
    }
    return e.reduce(C, R), b;
  }
  function i(_, C) {
    var b = {};
    function R(T, A, O, j, Y) {
      var $;
      e.forEach(e.range(A, O), function(V) {
        $ = T[V], _.node($).dummy && e.forEach(_.predecessors($), function(W) {
          var L = _.node(W);
          L.dummy && (L.order < j || L.order > Y) && l(b, W, $);
        });
      });
    }
    function P(T, A) {
      var O = -1, j, Y = 0;
      return e.forEach(A, function($, V) {
        if (_.node($).dummy === "border") {
          var W = _.predecessors($);
          W.length && (j = _.node(W[0]).order, R(A, Y, V, O, j), Y = V, O = j);
        }
        R(A, Y, A.length, j, T.length);
      }), A;
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
      var R = C;
      C = b, b = R;
    }
    var P = _[C];
    P || (_[C] = P = {}), P[b] = !0;
  }
  function u(_, C, b) {
    if (C > b) {
      var R = C;
      C = b, b = R;
    }
    return e.has(_[C], b);
  }
  function f(_, C, b, R) {
    var P = {}, T = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(j, Y) {
        P[j] = j, T[j] = j, A[j] = Y;
      });
    }), e.forEach(C, function(O) {
      var j = -1;
      e.forEach(O, function(Y) {
        var $ = R(Y);
        if ($.length) {
          $ = e.sortBy($, function(q) {
            return A[q];
          });
          for (var V = ($.length - 1) / 2, W = Math.floor(V), L = Math.ceil(V); W <= L; ++W) {
            var H = $[W];
            T[Y] === Y && j < A[H] && !u(b, Y, H) && (T[H] = Y, T[Y] = P[Y] = P[H], j = A[H]);
          }
        }
      });
    }), { root: P, align: T };
  }
  function d(_, C, b, R, P) {
    var T = {}, A = h(_, C, b, P), O = P ? "borderLeft" : "borderRight";
    function j(V, W) {
      for (var L = A.nodes(), H = L.pop(), q = {}; H; )
        q[H] ? V(H) : (q[H] = !0, L.push(H), L = L.concat(W(H))), H = L.pop();
    }
    function Y(V) {
      T[V] = A.inEdges(V).reduce(function(W, L) {
        return Math.max(W, T[L.v] + A.edge(L));
      }, 0);
    }
    function $(V) {
      var W = A.outEdges(V).reduce(function(H, q) {
        return Math.min(H, T[q.w] - A.edge(q));
      }, Number.POSITIVE_INFINITY), L = _.node(V);
      W !== Number.POSITIVE_INFINITY && L.borderType !== O && (T[V] = Math.max(T[V], W));
    }
    return j(Y, A.predecessors.bind(A)), j($, A.successors.bind(A)), e.forEach(R, function(V) {
      T[V] = T[b[V]];
    }), T;
  }
  function h(_, C, b, R) {
    var P = new t(), T = _.graph(), A = y(T.nodesep, T.edgesep, R);
    return e.forEach(C, function(O) {
      var j;
      e.forEach(O, function(Y) {
        var $ = b[Y];
        if (P.setNode($), j) {
          var V = b[j], W = P.edge(V, $);
          P.setEdge(V, $, Math.max(A(_, Y, j), W || 0));
        }
        j = Y;
      });
    }), P;
  }
  function p(_, C) {
    return e.minBy(e.values(C), function(b) {
      var R = Number.NEGATIVE_INFINITY, P = Number.POSITIVE_INFINITY;
      return e.forIn(b, function(T, A) {
        var O = x(_, A) / 2;
        R = Math.max(T + O, R), P = Math.min(T - O, P);
      }), R - P;
    });
  }
  function m(_, C) {
    var b = e.values(C), R = e.min(b), P = e.max(b);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(A) {
        var O = T + A, j = _[O], Y;
        if (j !== C) {
          var $ = e.values(j);
          Y = A === "l" ? R - e.min($) : P - e.max($), Y && (_[O] = e.mapValues(j, function(V) {
            return V + Y;
          }));
        }
      });
    });
  }
  function v(_, C) {
    return e.mapValues(_.ul, function(b, R) {
      if (C)
        return _[C.toLowerCase()][R];
      var P = e.sortBy(e.map(_, R));
      return (P[1] + P[2]) / 2;
    });
  }
  function S(_) {
    var C = n.buildLayerMatrix(_), b = e.merge(
      o(_, C),
      i(_, C)
    ), R = {}, P;
    e.forEach(["u", "d"], function(A) {
      P = A === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (P = e.map(P, function(V) {
          return e.values(V).reverse();
        }));
        var j = (A === "u" ? _.predecessors : _.successors).bind(_), Y = f(_, P, b, j), $ = d(
          _,
          P,
          Y.root,
          Y.align,
          O === "r"
        );
        O === "r" && ($ = e.mapValues($, function(V) {
          return -V;
        })), R[A + O] = $;
      });
    });
    var T = p(_, R);
    return m(R, T), v(R, _.graph().align);
  }
  function y(_, C, b) {
    return function(R, P, T) {
      var A = R.node(P), O = R.node(T), j = 0, Y;
      if (j += A.width / 2, e.has(A, "labelpos"))
        switch (A.labelpos.toLowerCase()) {
          case "l":
            Y = -A.width / 2;
            break;
          case "r":
            Y = A.width / 2;
            break;
        }
      if (Y && (j += b ? Y : -Y), Y = 0, j += (A.dummy ? C : _) / 2, j += (O.dummy ? C : _) / 2, j += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            Y = O.width / 2;
            break;
          case "r":
            Y = -O.width / 2;
            break;
        }
      return Y && (j += b ? Y : -Y), Y = 0, j;
    };
  }
  function x(_, C) {
    return _.node(C).width;
  }
  return Xv;
}
var Qv, ER;
function _U() {
  if (ER) return Qv;
  ER = 1;
  var e = We(), t = Pt(), n = bU().positionX;
  Qv = o;
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
  return Qv;
}
var Zv, CR;
function SU() {
  if (CR) return Zv;
  CR = 1;
  var e = We(), t = oU(), n = iU(), o = aU(), i = Pt().normalizeRanks, a = lU(), l = Pt().removeEmptyRanks, u = uU(), f = cU(), d = fU(), h = xU(), p = _U(), m = Pt(), v = wn().Graph;
  Zv = S;
  function S(B, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var X = ee("  buildLayoutGraph", function() {
        return j(B);
      });
      ee("  runLayout", function() {
        y(X, ee);
      }), ee("  updateInputGraph", function() {
        x(B, X);
      });
    });
  }
  function y(B, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      Y(B);
    }), Z("    removeSelfEdges", function() {
      F(B);
    }), Z("    acyclic", function() {
      t.run(B);
    }), Z("    nestingGraph.run", function() {
      u.run(B);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph(B));
    }), Z("    injectEdgeLabelProxies", function() {
      $(B);
    }), Z("    removeEmptyRanks", function() {
      l(B);
    }), Z("    nestingGraph.cleanup", function() {
      u.cleanup(B);
    }), Z("    normalizeRanks", function() {
      i(B);
    }), Z("    assignRankMinMax", function() {
      V(B);
    }), Z("    removeEdgeLabelProxies", function() {
      W(B);
    }), Z("    normalize.run", function() {
      n.run(B);
    }), Z("    parentDummyChains", function() {
      a(B);
    }), Z("    addBorderSegments", function() {
      f(B);
    }), Z("    order", function() {
      h(B);
    }), Z("    insertSelfEdges", function() {
      Q(B);
    }), Z("    adjustCoordinateSystem", function() {
      d.adjust(B);
    }), Z("    position", function() {
      p(B);
    }), Z("    positionSelfEdges", function() {
      D(B);
    }), Z("    removeBorderNodes", function() {
      M(B);
    }), Z("    normalize.undo", function() {
      n.undo(B);
    }), Z("    fixupEdgeLabelCoords", function() {
      q(B);
    }), Z("    undoCoordinateSystem", function() {
      d.undo(B);
    }), Z("    translateGraph", function() {
      L(B);
    }), Z("    assignNodeIntersects", function() {
      H(B);
    }), Z("    reversePoints", function() {
      G(B);
    }), Z("    acyclic.undo", function() {
      t.undo(B);
    });
  }
  function x(B, Z) {
    e.forEach(B.nodes(), function(ee) {
      var X = B.node(ee), te = Z.node(ee);
      X && (X.x = te.x, X.y = te.y, Z.children(ee).length && (X.width = te.width, X.height = te.height));
    }), e.forEach(B.edges(), function(ee) {
      var X = B.edge(ee), te = Z.edge(ee);
      X.points = te.points, e.has(te, "x") && (X.x = te.x, X.y = te.y);
    }), B.graph().width = Z.graph().width, B.graph().height = Z.graph().height;
  }
  var _ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, b = ["acyclicer", "ranker", "rankdir", "align"], R = ["width", "height"], P = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], A = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function j(B) {
    var Z = new v({ multigraph: !0, compound: !0 }), ee = ie(B.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      U(ee, _),
      e.pick(ee, b)
    )), e.forEach(B.nodes(), function(X) {
      var te = ie(B.node(X));
      Z.setNode(X, e.defaults(U(te, R), P)), Z.setParent(X, B.parent(X));
    }), e.forEach(B.edges(), function(X) {
      var te = ie(B.edge(X));
      Z.setEdge(X, e.merge(
        {},
        A,
        U(te, T),
        e.pick(te, O)
      ));
    }), Z;
  }
  function Y(B) {
    var Z = B.graph();
    Z.ranksep /= 2, e.forEach(B.edges(), function(ee) {
      var X = B.edge(ee);
      X.minlen *= 2, X.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? X.width += X.labeloffset : X.height += X.labeloffset);
    });
  }
  function $(B) {
    e.forEach(B.edges(), function(Z) {
      var ee = B.edge(Z);
      if (ee.width && ee.height) {
        var X = B.node(Z.v), te = B.node(Z.w), se = { rank: (te.rank - X.rank) / 2 + X.rank, e: Z };
        m.addDummyNode(B, "edge-proxy", se, "_ep");
      }
    });
  }
  function V(B) {
    var Z = 0;
    e.forEach(B.nodes(), function(ee) {
      var X = B.node(ee);
      X.borderTop && (X.minRank = B.node(X.borderTop).rank, X.maxRank = B.node(X.borderBottom).rank, Z = e.max(Z, X.maxRank));
    }), B.graph().maxRank = Z;
  }
  function W(B) {
    e.forEach(B.nodes(), function(Z) {
      var ee = B.node(Z);
      ee.dummy === "edge-proxy" && (B.edge(ee.e).labelRank = ee.rank, B.removeNode(Z));
    });
  }
  function L(B) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, X = Number.POSITIVE_INFINITY, te = 0, se = B.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var _e = pe.x, me = pe.y, Ne = pe.width, Ee = pe.height;
      Z = Math.min(Z, _e - Ne / 2), ee = Math.max(ee, _e + Ne / 2), X = Math.min(X, me - Ee / 2), te = Math.max(te, me + Ee / 2);
    }
    e.forEach(B.nodes(), function(pe) {
      de(B.node(pe));
    }), e.forEach(B.edges(), function(pe) {
      var _e = B.edge(pe);
      e.has(_e, "x") && de(_e);
    }), Z -= ae, X -= ce, e.forEach(B.nodes(), function(pe) {
      var _e = B.node(pe);
      _e.x -= Z, _e.y -= X;
    }), e.forEach(B.edges(), function(pe) {
      var _e = B.edge(pe);
      e.forEach(_e.points, function(me) {
        me.x -= Z, me.y -= X;
      }), e.has(_e, "x") && (_e.x -= Z), e.has(_e, "y") && (_e.y -= X);
    }), se.width = ee - Z + ae, se.height = te - X + ce;
  }
  function H(B) {
    e.forEach(B.edges(), function(Z) {
      var ee = B.edge(Z), X = B.node(Z.v), te = B.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = X), ee.points.unshift(m.intersectRect(X, se)), ee.points.push(m.intersectRect(te, ae));
    });
  }
  function q(B) {
    e.forEach(B.edges(), function(Z) {
      var ee = B.edge(Z);
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
  function G(B) {
    e.forEach(B.edges(), function(Z) {
      var ee = B.edge(Z);
      ee.reversed && ee.points.reverse();
    });
  }
  function M(B) {
    e.forEach(B.nodes(), function(Z) {
      if (B.children(Z).length) {
        var ee = B.node(Z), X = B.node(ee.borderTop), te = B.node(ee.borderBottom), se = B.node(e.last(ee.borderLeft)), ae = B.node(e.last(ee.borderRight));
        ee.width = Math.abs(ae.x - se.x), ee.height = Math.abs(te.y - X.y), ee.x = se.x + ee.width / 2, ee.y = X.y + ee.height / 2;
      }
    }), e.forEach(B.nodes(), function(Z) {
      B.node(Z).dummy === "border" && B.removeNode(Z);
    });
  }
  function F(B) {
    e.forEach(B.edges(), function(Z) {
      if (Z.v === Z.w) {
        var ee = B.node(Z.v);
        ee.selfEdges || (ee.selfEdges = []), ee.selfEdges.push({ e: Z, label: B.edge(Z) }), B.removeEdge(Z);
      }
    });
  }
  function Q(B) {
    var Z = m.buildLayerMatrix(B);
    e.forEach(Z, function(ee) {
      var X = 0;
      e.forEach(ee, function(te, se) {
        var ae = B.node(te);
        ae.order = se + X, e.forEach(ae.selfEdges, function(ce) {
          m.addDummyNode(B, "selfedge", {
            width: ce.label.width,
            height: ce.label.height,
            rank: ae.rank,
            order: se + ++X,
            e: ce.e,
            label: ce.label
          }, "_se");
        }), delete ae.selfEdges;
      });
    });
  }
  function D(B) {
    e.forEach(B.nodes(), function(Z) {
      var ee = B.node(Z);
      if (ee.dummy === "selfedge") {
        var X = B.node(ee.e.v), te = X.x + X.width / 2, se = X.y, ae = ee.x - te, ce = X.height / 2;
        B.setEdge(ee.e, ee.label), B.removeNode(Z), ee.label.points = [
          { x: te + 2 * ae / 3, y: se - ce },
          { x: te + 5 * ae / 6, y: se - ce },
          { x: te + ae, y: se },
          { x: te + 5 * ae / 6, y: se + ce },
          { x: te + 2 * ae / 3, y: se + ce }
        ], ee.label.x = ee.x, ee.label.y = ee.y;
      }
    });
  }
  function U(B, Z) {
    return e.mapValues(e.pick(B, Z), Number);
  }
  function ie(B) {
    var Z = {};
    return e.forEach(B, function(ee, X) {
      Z[X.toLowerCase()] = ee;
    }), Z;
  }
  return Zv;
}
var Jv, kR;
function EU() {
  if (kR) return Jv;
  kR = 1;
  var e = We(), t = Pt(), n = wn().Graph;
  Jv = {
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
  return Jv;
}
var ey, RR;
function CU() {
  return RR || (RR = 1, ey = "0.8.5"), ey;
}
var ty, NR;
function kU() {
  return NR || (NR = 1, ty = {
    graphlib: wn(),
    layout: SU(),
    debug: EU(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: CU()
  }), ty;
}
var RU = kU();
const PR = /* @__PURE__ */ Eu(RU), NU = 250, PU = 200, TU = 120, IU = 180;
function TR(e) {
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
    width: e.width || NU,
    height: Math.max(PU, a)
  };
}
function AU(e, t, n = "TB") {
  const o = new PR.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: TU,
    ranksep: IU
  }), e.forEach((a) => {
    const { width: l, height: u } = TR(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), PR.layout(o), { nodes: e.map((a) => {
    const l = o.node(a.id), { width: u, height: f } = TR(a);
    return {
      ...a,
      position: {
        x: l.x - u / 2,
        y: l.y - f / 2
      }
    };
  }), edges: t };
}
function MU(e, t, n) {
  return { onLayout: k.useCallback(
    (i) => {
      const { nodes: a } = AU(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function OU(e, t) {
  return { exportToJSON: k.useCallback(() => {
    const i = JSON.stringify({
      nodes: e,
      edges: t
    }, null, 2), a = new Blob([i], { type: "application/json" }), l = URL.createObjectURL(a), u = document.createElement("a");
    u.href = l, u.download = "nodeflow-data.json", u.click(), URL.revokeObjectURL(l);
  }, [e, t]) };
}
function LU(e, t) {
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
function DU(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), o = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(o), n.body.appendChild(i), t && (o.href = t), i.href = e, i.href;
}
const jU = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Zn(e) {
  const t = [];
  for (let n = 0, o = e.length; n < o; n++)
    t.push(e[n]);
  return t;
}
function _u(e, t) {
  const o = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return o ? parseFloat(o.replace("px", "")) : 0;
}
function qU(e) {
  const t = _u(e, "border-left-width"), n = _u(e, "border-right-width");
  return e.clientWidth + t + n;
}
function FU(e) {
  const t = _u(e, "border-top-width"), n = _u(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function JA(e, t = {}) {
  const n = t.width || qU(e), o = t.height || FU(e);
  return { width: n, height: o };
}
function zU() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const jt = 16384;
function $U(e) {
  (e.width > jt || e.height > jt) && (e.width > jt && e.height > jt ? e.width > e.height ? (e.height *= jt / e.width, e.width = jt) : (e.width *= jt / e.height, e.height = jt) : e.width > jt ? (e.height *= jt / e.width, e.width = jt) : (e.width *= jt / e.height, e.height = jt));
}
function Su(e) {
  return new Promise((t, n) => {
    const o = new Image();
    o.decode = () => t(o), o.onload = () => t(o), o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = e;
  });
}
async function BU(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function VU(e, t, n) {
  const o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), BU(i);
}
const Tt = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || Tt(n, t);
};
function HU(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function WU(e) {
  return Zn(e).map((t) => {
    const n = e.getPropertyValue(t), o = e.getPropertyPriority(t);
    return `${t}: ${n}${o ? " !important" : ""};`;
  }).join(" ");
}
function UU(e, t, n) {
  const o = `.${e}:${t}`, i = n.cssText ? HU(n) : WU(n);
  return document.createTextNode(`${o}{${i}}`);
}
function IR(e, t, n) {
  const o = window.getComputedStyle(e, n), i = o.getPropertyValue("content");
  if (i === "" || i === "none")
    return;
  const a = jU();
  try {
    t.className = `${t.className} ${a}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(UU(a, n, o)), t.appendChild(l);
}
function GU(e, t) {
  IR(e, t, ":before"), IR(e, t, ":after");
}
const AR = "application/font-woff", MR = "image/jpeg", YU = {
  woff: AR,
  woff2: AR,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: MR,
  jpeg: MR,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function KU(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function L0(e) {
  const t = KU(e).toLowerCase();
  return YU[t] || "";
}
function XU(e) {
  return e.split(/,/)[1];
}
function Ty(e) {
  return e.search(/^(data:)/) !== -1;
}
function QU(e, t) {
  return `data:${t};base64,${e}`;
}
async function eM(e, t, n) {
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
const ny = {};
function ZU(e, t, n) {
  let o = e.replace(/\?.*/, "");
  return n && (o = e), /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")), t ? `[${t}]${o}` : o;
}
async function D0(e, t, n) {
  const o = ZU(e, t, n.includeQueryParams);
  if (ny[o] != null)
    return ny[o];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const a = await eM(e, n.fetchRequestInit, ({ res: l, result: u }) => (t || (t = l.headers.get("Content-Type") || ""), XU(u)));
    i = QU(a, t);
  } catch (a) {
    i = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    a && (l = typeof a == "string" ? a : a.message), l && console.warn(l);
  }
  return ny[o] = i, i;
}
async function JU(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Su(t);
}
async function eG(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), l = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, l == null || l.drawImage(e, 0, 0, a.width, a.height);
    const u = a.toDataURL();
    return Su(u);
  }
  const n = e.poster, o = L0(n), i = await D0(n, o, t);
  return Su(i);
}
async function tG(e) {
  var t;
  try {
    if (!((t = e == null ? void 0 : e.contentDocument) === null || t === void 0) && t.body)
      return await gc(e.contentDocument.body, {}, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function nG(e, t) {
  return Tt(e, HTMLCanvasElement) ? JU(e) : Tt(e, HTMLVideoElement) ? eG(e, t) : Tt(e, HTMLIFrameElement) ? tG(e) : e.cloneNode(!1);
}
const rG = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT";
async function oG(e, t, n) {
  var o, i;
  let a = [];
  return rG(e) && e.assignedNodes ? a = Zn(e.assignedNodes()) : Tt(e, HTMLIFrameElement) && (!((o = e.contentDocument) === null || o === void 0) && o.body) ? a = Zn(e.contentDocument.body.childNodes) : a = Zn(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), a.length === 0 || Tt(e, HTMLVideoElement) || await a.reduce((l, u) => l.then(() => gc(u, n)).then((f) => {
    f && t.appendChild(f);
  }), Promise.resolve()), t;
}
function iG(e, t) {
  const n = t.style;
  if (!n)
    return;
  const o = window.getComputedStyle(e);
  o.cssText ? (n.cssText = o.cssText, n.transformOrigin = o.transformOrigin) : Zn(o).forEach((i) => {
    let a = o.getPropertyValue(i);
    i === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), Tt(e, HTMLIFrameElement) && i === "display" && a === "inline" && (a = "block"), i === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), n.setProperty(i, a, o.getPropertyPriority(i));
  });
}
function sG(e, t) {
  Tt(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Tt(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function aG(e, t) {
  if (Tt(e, HTMLSelectElement)) {
    const o = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    o && o.setAttribute("selected", "");
  }
}
function lG(e, t) {
  return Tt(t, Element) && (iG(e, t), GU(e, t), sG(e, t), aG(e, t)), t;
}
async function uG(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a].getAttribute("xlink:href");
    if (u) {
      const f = e.querySelector(u), d = document.querySelector(u);
      !f && d && !o[u] && (o[u] = await gc(d, t, !0));
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
async function gc(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((o) => nG(o, t)).then((o) => oG(e, o, t)).then((o) => lG(e, o)).then((o) => uG(o, t));
}
const tM = /url\((['"]?)([^'"]+?)\1\)/g, cG = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, fG = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function dG(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function hG(e) {
  const t = [];
  return e.replace(tM, (n, o, i) => (t.push(i), n)), t.filter((n) => !Ty(n));
}
async function pG(e, t, n, o, i) {
  try {
    const a = n ? DU(t, n) : t, l = L0(t);
    let u;
    return i || (u = await D0(a, l, o)), e.replace(dG(t), `$1${u}$3`);
  } catch {
  }
  return e;
}
function gG(e, { preferredFontFormat: t }) {
  return t ? e.replace(fG, (n) => {
    for (; ; ) {
      const [o, , i] = cG.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${o};`;
    }
  }) : e;
}
function nM(e) {
  return e.search(tM) !== -1;
}
async function rM(e, t, n) {
  if (!nM(e))
    return e;
  const o = gG(e, n);
  return hG(o).reduce((a, l) => a.then((u) => pG(u, l, t, n)), Promise.resolve(o));
}
async function Wl(e, t, n) {
  var o;
  const i = (o = t.style) === null || o === void 0 ? void 0 : o.getPropertyValue(e);
  if (i) {
    const a = await rM(i, null, n);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function mG(e, t) {
  await Wl("background", e, t) || await Wl("background-image", e, t), await Wl("mask", e, t) || await Wl("mask-image", e, t);
}
async function vG(e, t) {
  const n = Tt(e, HTMLImageElement);
  if (!(n && !Ty(e.src)) && !(Tt(e, SVGImageElement) && !Ty(e.href.baseVal)))
    return;
  const o = n ? e.src : e.href.baseVal, i = await D0(o, L0(o), t);
  await new Promise((a, l) => {
    e.onload = a, e.onerror = l;
    const u = e;
    u.decode && (u.decode = a), u.loading === "lazy" && (u.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function yG(e, t) {
  const o = Zn(e.childNodes).map((i) => oM(i, t));
  await Promise.all(o).then(() => e);
}
async function oM(e, t) {
  Tt(e, Element) && (await mG(e, t), await vG(e, t), await yG(e, t));
}
function wG(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const o = t.style;
  return o != null && Object.keys(o).forEach((i) => {
    n[i] = o[i];
  }), e;
}
const OR = {};
async function LR(e) {
  let t = OR[e];
  if (t != null)
    return t;
  const o = await (await fetch(e)).text();
  return t = { url: e, cssText: o }, OR[e] = t, t;
}
async function DR(e, t) {
  let n = e.cssText;
  const o = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let u = l.replace(o, "$1");
    return u.startsWith("https://") || (u = new URL(u, e.url).href), eM(u, t.fetchRequestInit, ({ result: f }) => (n = n.replace(l, `url(${f})`), [l, f]));
  });
  return Promise.all(a).then(() => n);
}
function jR(e) {
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
async function xG(e, t) {
  const n = [], o = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Zn(i.cssRules || []).forEach((a, l) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let u = l + 1;
            const f = a.href, d = LR(f).then((h) => DR(h, t)).then((h) => jR(h).forEach((p) => {
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
        i.href != null && o.push(LR(i.href).then((u) => DR(u, t)).then((u) => jR(u).forEach((f) => {
          l.insertRule(f, i.cssRules.length);
        })).catch((u) => {
          console.error("Error loading remote stylesheet", u);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(o).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Zn(i.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${i.href}`, a);
      }
  }), n));
}
function bG(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => nM(t.style.getPropertyValue("src")));
}
async function _G(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Zn(e.ownerDocument.styleSheets), o = await xG(n, t);
  return bG(o);
}
async function SG(e, t) {
  const n = await _G(e, t);
  return (await Promise.all(n.map((i) => {
    const a = i.parentStyleSheet ? i.parentStyleSheet.href : null;
    return rM(i.cssText, a, t);
  }))).join(`
`);
}
async function EG(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await SG(e, t);
  if (n) {
    const o = document.createElement("style"), i = document.createTextNode(n);
    o.appendChild(i), e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o);
  }
}
async function CG(e, t = {}) {
  const { width: n, height: o } = JA(e, t), i = await gc(e, t, !0);
  return await EG(i, t), await oM(i, t), wG(i, t), await VU(i, n, o);
}
async function iM(e, t = {}) {
  const { width: n, height: o } = JA(e, t), i = await CG(e, t), a = await Su(i), l = document.createElement("canvas"), u = l.getContext("2d"), f = t.pixelRatio || zU(), d = t.canvasWidth || n, h = t.canvasHeight || o;
  return l.width = d * f, l.height = h * f, t.skipAutoScale || $U(l), l.style.width = `${d}`, l.style.height = `${h}`, t.backgroundColor && (u.fillStyle = t.backgroundColor, u.fillRect(0, 0, l.width, l.height)), u.drawImage(a, 0, 0, l.width, l.height), l;
}
async function qR(e, t = {}) {
  return (await iM(e, t)).toDataURL();
}
async function kG(e, t = {}) {
  return (await iM(e, t)).toDataURL("image/jpeg", t.quality || 1);
}
function RG(e, t, n) {
  const o = qt.useRef(0);
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
          jpeg: kG,
          png: qR
        }[a.format] || qR)(d, h).then((v) => {
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
const sM = k.createContext(null), aM = k.createContext(null), NG = () => {
  const e = k.useContext(sM);
  if (!e)
    throw new Error("useSetNodesDict must be used within SetNodesDictContext.Provider");
  return e;
}, PG = () => {
  const e = k.useContext(aM);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
}, OG = NG;
function TG() {
  const [e, t] = ro("nodes"), [n, o] = ro("edges"), [i] = ro("node_templates"), [a] = ro("height"), [l, u] = ro("node_values"), [f] = ro("_export_image_trigger"), [, d] = ro("_export_image_data"), h = k.useRef(null), p = k.useMemo(() => Object.values(e || {}), [e]), m = k.useMemo(() => {
    const W = /* @__PURE__ */ new Map();
    return i.forEach((L) => {
      W.set(L.type, L);
    }), W;
  }, [i]), v = k.useMemo(() => !l || Object.keys(l).length === 0 ? p : p.map((W) => {
    const L = m.get(W.type), H = l[W.id] || {};
    return L ? {
      ...W,
      data: {
        ...W.data,
        label: L.label,
        // Template label
        ...L.definition,
        // Visual structure (grid, style)
        values: H
        // Instance values (from node_values)
      }
    } : (console.warn(`Template not found for node type: ${W.type}`), W);
  }), [p, m, l]), S = k.useCallback(
    (W) => {
      t((L) => {
        const H = Object.values(L), q = JN(W, H), G = {};
        return q.forEach((M) => {
          G[M.id] = M;
        }), G;
      });
    },
    [t]
  ), y = k.useCallback(
    (W) => {
      o((L) => eP(W, L));
    },
    [o]
  ), x = k.useMemo(() => $V(i), [i]), _ = k.useCallback(
    (W) => {
      o((L) => ON(W, L));
    },
    [o]
  ), C = k.useCallback(
    (W) => {
      const L = `node-${Date.now()}`, H = {
        id: L,
        type: W.type,
        position: { x: 100, y: 100 },
        data: {}
        // Empty data - all config in template
      };
      t((q) => ({
        ...q,
        [L]: H
      })), W.defaultValues && Object.keys(W.defaultValues).length > 0 && u((q) => ({
        ...q,
        [L]: { ...W.defaultValues }
      }));
    },
    [t, u]
  ), { exportToJSON: b } = OU(p, n), R = k.useCallback((W) => {
    d(W);
  }, [d]);
  RG(f, h, R);
  const P = k.useCallback((W) => {
    t((L) => {
      const H = Object.values(L), q = typeof W == "function" ? W(H) : W, G = {};
      return q.forEach((M) => {
        G[M.id] = M;
      }), G;
    });
  }, [t]), { onLayout: T } = MU(p, n, P), {
    contextMenu: A,
    onNodeContextMenu: O,
    onEdgeContextMenu: j,
    onPaneClick: Y,
    onDelete: $,
    closeContextMenu: V
  } = LU(P, o);
  return /* @__PURE__ */ N.jsx("div", { ref: h, style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ N.jsx(sM.Provider, { value: t, children: /* @__PURE__ */ N.jsx(aM.Provider, { value: u, children: /* @__PURE__ */ N.jsx(CP, { children: /* @__PURE__ */ N.jsxs(QH, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ N.jsxs(ZH, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ N.jsxs(e8, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ N.jsx(JH, {})
      ] }),
      /* @__PURE__ */ N.jsx(l8, { onAddNode: C, templates: i })
    ] }),
    /* @__PURE__ */ N.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ N.jsx(
      f8,
      {
        nodes: v,
        edges: n,
        nodeTypes: x,
        height: a,
        onNodesChange: S,
        onEdgesChange: y,
        onConnect: _,
        onNodeContextMenu: O,
        onEdgeContextMenu: j,
        onPaneClick: Y,
        contextMenu: A,
        onDelete: $,
        onCloseContextMenu: V,
        onExport: b,
        onLayoutVertical: () => T("TB"),
        onLayoutHorizontal: () => T("LR")
      }
    ) })
  ] }) }) }) }) });
}
const IG = eO(TG), LG = { render: IG };
export {
  Du as BaseHandle,
  HP as ButtonHandle,
  VP as LabeledHandle,
  c0 as NodeComponentBuilder,
  WP as NodeDataContext,
  aM as SetNodeValuesContext,
  sM as SetNodesDictContext,
  $V as buildNodeTypes,
  LG as default,
  IG as render,
  _i as useNodeDataContext,
  PG as useSetNodeValues,
  OG as useSetNodes,
  NG as useSetNodesDict
};
//# sourceMappingURL=index.js.map
