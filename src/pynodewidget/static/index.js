var W2 = Object.defineProperty;
var U2 = (e, t, n) => t in e ? W2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rl = (e, t, n) => U2(e, typeof t != "symbol" ? t + "" : t, n);
function G2(e, t) {
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
var Nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cd = { exports: {} }, Es = {}, fd = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1;
function Y2() {
  if (s1) return Ie;
  s1 = 1;
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
  function G(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function F(D) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(ie) {
      return U[ie];
    });
  }
  var V = /\/+/g;
  function W(D, U) {
    return typeof D == "object" && D !== null && D.key != null ? F("" + D.key) : U.toString(36);
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
    })) : Z != null && (G(Z) && (Z = j(Z, ie + (!Z.key || X && X.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + D)), U.push(Z)), 1;
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
  var Y = { current: null }, M = { transition: null }, z = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
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
    if (!G(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ie.Component = x, Ie.Fragment = n, Ie.Profiler = i, Ie.PureComponent = C, Ie.StrictMode = o, Ie.Suspense = f, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, Ie.act = Q, Ie.cloneElement = function(D, U, ie) {
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
  }, Ie.isValidElement = G, Ie.lazy = function(D) {
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
    return Y.current.useCallback(D, U);
  }, Ie.useContext = function(D) {
    return Y.current.useContext(D);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(D) {
    return Y.current.useDeferredValue(D);
  }, Ie.useEffect = function(D, U) {
    return Y.current.useEffect(D, U);
  }, Ie.useId = function() {
    return Y.current.useId();
  }, Ie.useImperativeHandle = function(D, U, ie) {
    return Y.current.useImperativeHandle(D, U, ie);
  }, Ie.useInsertionEffect = function(D, U) {
    return Y.current.useInsertionEffect(D, U);
  }, Ie.useLayoutEffect = function(D, U) {
    return Y.current.useLayoutEffect(D, U);
  }, Ie.useMemo = function(D, U) {
    return Y.current.useMemo(D, U);
  }, Ie.useReducer = function(D, U, ie) {
    return Y.current.useReducer(D, U, ie);
  }, Ie.useRef = function(D) {
    return Y.current.useRef(D);
  }, Ie.useState = function(D) {
    return Y.current.useState(D);
  }, Ie.useSyncExternalStore = function(D, U, ie) {
    return Y.current.useSyncExternalStore(D, U, ie);
  }, Ie.useTransition = function() {
    return Y.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var a1;
function Qs() {
  return a1 || (a1 = 1, fd.exports = Y2()), fd.exports;
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
var l1;
function K2() {
  if (l1) return Es;
  l1 = 1;
  var e = Qs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return Es.Fragment = n, Es.jsx = l, Es.jsxs = l, Es;
}
var u1;
function X2() {
  return u1 || (u1 = 1, cd.exports = K2()), cd.exports;
}
var N = X2(), k = Qs();
const qt = /* @__PURE__ */ Cu(k), Ay = /* @__PURE__ */ G2({
  __proto__: null,
  default: qt
}, [k]);
var Pl = {}, dd = { exports: {} }, Rt = {}, hd = { exports: {} }, pd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function Q2() {
  return c1 || (c1 = 1, (function(e) {
    function t(M, z) {
      var Q = M.length;
      M.push(z);
      e: for (; 0 < Q; ) {
        var D = Q - 1 >>> 1, U = M[D];
        if (0 < i(U, z)) M[D] = z, M[Q] = U, Q = D;
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
        e: for (var D = 0, U = M.length, ie = U >>> 1; D < ie; ) {
          var B = 2 * (D + 1) - 1, Z = M[B], ee = B + 1, X = M[ee];
          if (0 > i(Z, Q)) ee < U && 0 > i(X, Z) ? (M[D] = X, M[ee] = Q, D = ee) : (M[D] = Z, M[B] = Q, D = B);
          else if (ee < U && 0 > i(X, Q)) M[D] = X, M[ee] = Q, D = ee;
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
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, S = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(M) {
      for (var z = n(d); z !== null; ) {
        if (z.callback === null) o(d);
        else if (z.startTime <= M) o(d), z.sortIndex = z.expirationTime, t(f, z);
        else break;
        z = n(d);
      }
    }
    function R(M) {
      if (y = !1, b(M), !S) if (n(f) !== null) S = !0, q(P);
      else {
        var z = n(d);
        z !== null && Y(R, z.startTime - M);
      }
    }
    function P(M, z) {
      S = !1, y && (y = !1, _(O), O = -1), v = !0;
      var Q = m;
      try {
        for (b(z), p = n(f); p !== null && (!(p.expirationTime > z) || M && !F()); ) {
          var D = p.callback;
          if (typeof D == "function") {
            p.callback = null, m = p.priorityLevel;
            var U = D(p.expirationTime <= z);
            z = e.unstable_now(), typeof U == "function" ? p.callback = U : p === n(f) && o(f), b(z);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var B = n(d);
          B !== null && Y(R, B.startTime - z), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, v = !1;
      }
    }
    var T = !1, A = null, O = -1, j = 5, G = -1;
    function F() {
      return !(e.unstable_now() - G < j);
    }
    function V() {
      if (A !== null) {
        var M = e.unstable_now();
        G = M;
        var z = !0;
        try {
          z = A(!0, M);
        } finally {
          z ? W() : (T = !1, A = null);
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
    function Y(M, z) {
      O = x(function() {
        M(e.unstable_now());
      }, z);
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
      return U = Q + U, M = { id: h++, callback: z, priorityLevel: M, startTime: Q, expirationTime: U, sortIndex: -1 }, Q > D ? (M.sortIndex = Q, t(d, M), n(f) === null && M === n(d) && (y ? (_(O), O = -1) : y = !0, Y(R, Q - D))) : (M.sortIndex = U, t(f, M), S || v || (S = !0, q(P))), M;
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(M) {
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
  })(pd)), pd;
}
var f1;
function Z2() {
  return f1 || (f1 = 1, hd.exports = Q2()), hd.exports;
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
var d1;
function J2() {
  if (d1) return Rt;
  d1 = 1;
  var e = Qs(), t = Z2();
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
  var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), F = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function z(r) {
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
      case F:
        return (r.displayName || "Context") + ".Consumer";
      case G:
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
  var vc = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Li(r, s) {
    if (s) {
      if (vc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
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
  function ha(r) {
    if (r = us(r)) {
      if (typeof Fi != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = Ba(s), Fi(r.stateNode, r.type, s));
    }
  }
  function pa(r) {
    or ? ir ? ir.push(r) : ir = [r] : or = r;
  }
  function ga() {
    if (or) {
      var r = or, s = ir;
      if (ir = or = null, ha(r), s) for (r = 0; r < s.length; r++) ha(s[r]);
    }
  }
  function ma(r, s) {
    return r(s);
  }
  function va() {
  }
  var zi = !1;
  function ya(r, s, c) {
    if (zi) return r(s, c);
    zi = !0;
    try {
      return ma(r, s, c);
    } finally {
      zi = !1, (or !== null || ir !== null) && (va(), ga());
    }
  }
  function zr(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = Ba(c);
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
    var $r = {};
    Object.defineProperty($r, "passive", { get: function() {
      $i = !0;
    } }), window.addEventListener("test", $r, $r), window.removeEventListener("test", $r, $r);
  } catch {
    $i = !1;
  }
  function yc(r, s, c, g, w, E, I, $, K) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Br = !1, Co = null, ko = !1, Bi = null, wc = { onError: function(r) {
    Br = !0, Co = r;
  } };
  function xc(r, s, c, g, w, E, I, $, K) {
    Br = !1, Co = null, yc.apply(wc, arguments);
  }
  function bc(r, s, c, g, w, E, I, $, K) {
    if (xc.apply(this, arguments), Br) {
      if (Br) {
        var oe = Co;
        Br = !1, Co = null;
      } else throw Error(n(198));
      ko || (ko = !0, Bi = oe);
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
  function _c(r) {
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
  function wa(r) {
    return r = _c(r), r !== null ? xa(r) : null;
  }
  function xa(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = xa(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var ba = t.unstable_scheduleCallback, _a = t.unstable_cancelCallback, Sc = t.unstable_shouldYield, Sa = t.unstable_requestPaint, Ye = t.unstable_now, Ec = t.unstable_getCurrentPriorityLevel, Wi = t.unstable_ImmediatePriority, Ea = t.unstable_UserBlockingPriority, Ro = t.unstable_NormalPriority, Cc = t.unstable_LowPriority, Ca = t.unstable_IdlePriority, Vr = null, Yt = null;
  function kc(r) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Vr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Pc, Rc = Math.log, Nc = Math.LN2;
  function Pc(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Rc(r) / Nc | 0) | 0;
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
      var $ = I & ~w;
      $ !== 0 ? g = En($) : (E &= I, E !== 0 && (g = En(E)));
    } else I = c & ~w, I !== 0 ? g = En(I) : E !== 0 && (g = En(E));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & w) === 0 && (w = g & -g, E = s & -s, w >= E || w === 16 && (E & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - At(s), w = 1 << c, g |= r[c], s &= ~w;
    return g;
  }
  function Tc(r, s) {
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
  function Ic(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, w = r.expirationTimes, E = r.pendingLanes; 0 < E; ) {
      var I = 31 - At(E), $ = 1 << I, K = w[I];
      K === -1 ? (($ & c) === 0 || ($ & g) !== 0) && (w[I] = Tc($, s)) : K <= s && (r.expiredLanes |= $), E &= ~$;
    }
  }
  function Hr(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function ka() {
    var r = No;
    return No <<= 1, (No & 4194240) === 0 && (No = 64), r;
  }
  function Ui(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function sr(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - At(s), r[s] = c;
  }
  function dM(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var w = 31 - At(c), E = 1 << w;
      s[w] = 0, g[w] = -1, r[w] = -1, c &= ~E;
    }
  }
  function Ac(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - At(c), w = 1 << g;
      w & s | r[g] & s && (r[g] |= s), c &= ~w;
    }
  }
  var qe = 0;
  function q0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var F0, Mc, z0, $0, B0, Oc = !1, Ra = [], ar = null, lr = null, ur = null, Gi = /* @__PURE__ */ new Map(), Yi = /* @__PURE__ */ new Map(), cr = [], hM = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function V0(r, s) {
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
        Yi.delete(s.pointerId);
    }
  }
  function Ki(r, s, c, g, w, E) {
    return r === null || r.nativeEvent !== E ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: E, targetContainers: [w] }, s !== null && (s = us(s), s !== null && Mc(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, w !== null && s.indexOf(w) === -1 && s.push(w), r);
  }
  function pM(r, s, c, g, w) {
    switch (s) {
      case "focusin":
        return ar = Ki(ar, r, s, c, g, w), !0;
      case "dragenter":
        return lr = Ki(lr, r, s, c, g, w), !0;
      case "mouseover":
        return ur = Ki(ur, r, s, c, g, w), !0;
      case "pointerover":
        var E = w.pointerId;
        return Gi.set(E, Ki(Gi.get(E) || null, r, s, c, g, w)), !0;
      case "gotpointercapture":
        return E = w.pointerId, Yi.set(E, Ki(Yi.get(E) || null, r, s, c, g, w)), !0;
    }
    return !1;
  }
  function H0(r) {
    var s = Wr(r.target);
    if (s !== null) {
      var c = Sn(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = Vi(c), s !== null) {
            r.blockedOn = s, B0(r.priority, function() {
              z0(c);
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
  function Na(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var c = Dc(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        ji = g, c.target.dispatchEvent(g), ji = null;
      } else return s = us(c), s !== null && Mc(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function W0(r, s, c) {
    Na(r) && c.delete(s);
  }
  function gM() {
    Oc = !1, ar !== null && Na(ar) && (ar = null), lr !== null && Na(lr) && (lr = null), ur !== null && Na(ur) && (ur = null), Gi.forEach(W0), Yi.forEach(W0);
  }
  function Xi(r, s) {
    r.blockedOn === s && (r.blockedOn = null, Oc || (Oc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, gM)));
  }
  function Qi(r) {
    function s(w) {
      return Xi(w, r);
    }
    if (0 < Ra.length) {
      Xi(Ra[0], r);
      for (var c = 1; c < Ra.length; c++) {
        var g = Ra[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (ar !== null && Xi(ar, r), lr !== null && Xi(lr, r), ur !== null && Xi(ur, r), Gi.forEach(s), Yi.forEach(s), c = 0; c < cr.length; c++) g = cr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < cr.length && (c = cr[0], c.blockedOn === null); ) H0(c), c.blockedOn === null && cr.shift();
  }
  var Io = R.ReactCurrentBatchConfig, Pa = !0;
  function mM(r, s, c, g) {
    var w = qe, E = Io.transition;
    Io.transition = null;
    try {
      qe = 1, Lc(r, s, c, g);
    } finally {
      qe = w, Io.transition = E;
    }
  }
  function vM(r, s, c, g) {
    var w = qe, E = Io.transition;
    Io.transition = null;
    try {
      qe = 4, Lc(r, s, c, g);
    } finally {
      qe = w, Io.transition = E;
    }
  }
  function Lc(r, s, c, g) {
    if (Pa) {
      var w = Dc(r, s, c, g);
      if (w === null) Jc(r, s, g, Ta, c), V0(r, g);
      else if (pM(w, r, s, c, g)) g.stopPropagation();
      else if (V0(r, g), s & 4 && -1 < hM.indexOf(r)) {
        for (; w !== null; ) {
          var E = us(w);
          if (E !== null && F0(E), E = Dc(r, s, c, g), E === null && Jc(r, s, g, Ta, c), E === w) break;
          w = E;
        }
        w !== null && g.stopPropagation();
      } else Jc(r, s, g, null, c);
    }
  }
  var Ta = null;
  function Dc(r, s, c, g) {
    if (Ta = null, r = qi(g), r = Wr(r), r !== null) if (s = Sn(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = Vi(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return Ta = r, null;
  }
  function U0(r) {
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
        switch (Ec()) {
          case Wi:
            return 1;
          case Ea:
            return 4;
          case Ro:
          case Cc:
            return 16;
          case Ca:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fr = null, jc = null, Ia = null;
  function G0() {
    if (Ia) return Ia;
    var r, s = jc, c = s.length, g, w = "value" in fr ? fr.value : fr.textContent, E = w.length;
    for (r = 0; r < c && s[r] === w[r]; r++) ;
    var I = c - r;
    for (g = 1; g <= I && s[c - g] === w[E - g]; g++) ;
    return Ia = w.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Aa(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Ma() {
    return !0;
  }
  function Y0() {
    return !1;
  }
  function Mt(r) {
    function s(c, g, w, E, I) {
      this._reactName = c, this._targetInst = w, this.type = g, this.nativeEvent = E, this.target = I, this.currentTarget = null;
      for (var $ in r) r.hasOwnProperty($) && (c = r[$], this[$] = c ? c(E) : E[$]);
      return this.isDefaultPrevented = (E.defaultPrevented != null ? E.defaultPrevented : E.returnValue === !1) ? Ma : Y0, this.isPropagationStopped = Y0, this;
    }
    return Q(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Ma);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Ma);
    }, persist: function() {
    }, isPersistent: Ma }), s;
  }
  var Ao = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qc = Mt(Ao), Zi = Q({}, Ao, { view: 0, detail: 0 }), yM = Mt(Zi), Fc, zc, Ji, Oa = Q({}, Zi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Ji && (Ji && r.type === "mousemove" ? (Fc = r.screenX - Ji.screenX, zc = r.screenY - Ji.screenY) : zc = Fc = 0, Ji = r), Fc);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : zc;
  } }), K0 = Mt(Oa), wM = Q({}, Oa, { dataTransfer: 0 }), xM = Mt(wM), bM = Q({}, Zi, { relatedTarget: 0 }), $c = Mt(bM), _M = Q({}, Ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), SM = Mt(_M), EM = Q({}, Ao, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), CM = Mt(EM), kM = Q({}, Ao, { data: 0 }), X0 = Mt(kM), RM = {
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
  }, NM = {
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
  }, PM = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function TM(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = PM[r]) ? !!s[r] : !1;
  }
  function Bc() {
    return TM;
  }
  var IM = Q({}, Zi, { key: function(r) {
    if (r.key) {
      var s = RM[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Aa(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? NM[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bc, charCode: function(r) {
    return r.type === "keypress" ? Aa(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Aa(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), AM = Mt(IM), MM = Q({}, Oa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Q0 = Mt(MM), OM = Q({}, Zi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bc }), LM = Mt(OM), DM = Q({}, Ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jM = Mt(DM), qM = Q({}, Oa, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), FM = Mt(qM), zM = [9, 13, 27, 32], Vc = u && "CompositionEvent" in window, es = null;
  u && "documentMode" in document && (es = document.documentMode);
  var $M = u && "TextEvent" in window && !es, Z0 = u && (!Vc || es && 8 < es && 11 >= es), J0 = " ", ew = !1;
  function tw(r, s) {
    switch (r) {
      case "keyup":
        return zM.indexOf(s.keyCode) !== -1;
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
  function nw(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Mo = !1;
  function BM(r, s) {
    switch (r) {
      case "compositionend":
        return nw(s);
      case "keypress":
        return s.which !== 32 ? null : (ew = !0, J0);
      case "textInput":
        return r = s.data, r === J0 && ew ? null : r;
      default:
        return null;
    }
  }
  function VM(r, s) {
    if (Mo) return r === "compositionend" || !Vc && tw(r, s) ? (r = G0(), Ia = jc = fr = null, Mo = !1, r) : null;
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
        return Z0 && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var HM = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function rw(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!HM[r.type] : s === "textarea";
  }
  function ow(r, s, c, g) {
    pa(g), s = Fa(s, "onChange"), 0 < s.length && (c = new qc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var ts = null, ns = null;
  function WM(r) {
    _w(r, 0);
  }
  function La(r) {
    var s = qo(r);
    if (de(s)) return r;
  }
  function UM(r, s) {
    if (r === "change") return s;
  }
  var iw = !1;
  if (u) {
    var Hc;
    if (u) {
      var Wc = "oninput" in document;
      if (!Wc) {
        var sw = document.createElement("div");
        sw.setAttribute("oninput", "return;"), Wc = typeof sw.oninput == "function";
      }
      Hc = Wc;
    } else Hc = !1;
    iw = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function aw() {
    ts && (ts.detachEvent("onpropertychange", lw), ns = ts = null);
  }
  function lw(r) {
    if (r.propertyName === "value" && La(ns)) {
      var s = [];
      ow(s, ns, r, qi(r)), ya(WM, s);
    }
  }
  function GM(r, s, c) {
    r === "focusin" ? (aw(), ts = s, ns = c, ts.attachEvent("onpropertychange", lw)) : r === "focusout" && aw();
  }
  function YM(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return La(ns);
  }
  function KM(r, s) {
    if (r === "click") return La(s);
  }
  function XM(r, s) {
    if (r === "input" || r === "change") return La(s);
  }
  function QM(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var sn = typeof Object.is == "function" ? Object.is : QM;
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
  function uw(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function cw(r, s) {
    var c = uw(r);
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
      c = uw(c);
    }
  }
  function fw(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? fw(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function dw() {
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
  function Uc(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function ZM(r) {
    var s = dw(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && fw(c.ownerDocument.documentElement, c)) {
      if (g !== null && Uc(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var w = c.textContent.length, E = Math.min(g.start, w);
          g = g.end === void 0 ? E : Math.min(g.end, w), !r.extend && E > g && (w = g, g = E, E = w), w = cw(c, E);
          var I = cw(
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
  var JM = u && "documentMode" in document && 11 >= document.documentMode, Oo = null, Gc = null, os = null, Yc = !1;
  function hw(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Yc || Oo == null || Oo !== pe(g) || (g = Oo, "selectionStart" in g && Uc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), os && rs(os, g) || (os = g, g = Fa(Gc, "onSelect"), 0 < g.length && (s = new qc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = Oo)));
  }
  function Da(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var Lo = { animationend: Da("Animation", "AnimationEnd"), animationiteration: Da("Animation", "AnimationIteration"), animationstart: Da("Animation", "AnimationStart"), transitionend: Da("Transition", "TransitionEnd") }, Kc = {}, pw = {};
  u && (pw = document.createElement("div").style, "AnimationEvent" in window || (delete Lo.animationend.animation, delete Lo.animationiteration.animation, delete Lo.animationstart.animation), "TransitionEvent" in window || delete Lo.transitionend.transition);
  function ja(r) {
    if (Kc[r]) return Kc[r];
    if (!Lo[r]) return r;
    var s = Lo[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in pw) return Kc[r] = s[c];
    return r;
  }
  var gw = ja("animationend"), mw = ja("animationiteration"), vw = ja("animationstart"), yw = ja("transitionend"), ww = /* @__PURE__ */ new Map(), xw = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function dr(r, s) {
    ww.set(r, s), a(s, [r]);
  }
  for (var Xc = 0; Xc < xw.length; Xc++) {
    var Qc = xw[Xc], e2 = Qc.toLowerCase(), t2 = Qc[0].toUpperCase() + Qc.slice(1);
    dr(e2, "on" + t2);
  }
  dr(gw, "onAnimationEnd"), dr(mw, "onAnimationIteration"), dr(vw, "onAnimationStart"), dr("dblclick", "onDoubleClick"), dr("focusin", "onFocus"), dr("focusout", "onBlur"), dr(yw, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), n2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function bw(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, bc(g, s, void 0, r), r.currentTarget = null;
  }
  function _w(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], w = g.event;
      g = g.listeners;
      e: {
        var E = void 0;
        if (s) for (var I = g.length - 1; 0 <= I; I--) {
          var $ = g[I], K = $.instance, oe = $.currentTarget;
          if ($ = $.listener, K !== E && w.isPropagationStopped()) break e;
          bw(w, $, oe), E = K;
        }
        else for (I = 0; I < g.length; I++) {
          if ($ = g[I], K = $.instance, oe = $.currentTarget, $ = $.listener, K !== E && w.isPropagationStopped()) break e;
          bw(w, $, oe), E = K;
        }
      }
    }
    if (ko) throw r = Bi, ko = !1, Bi = null, r;
  }
  function ze(r, s) {
    var c = s[sf];
    c === void 0 && (c = s[sf] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (Sw(s, r, 2, !1), c.add(g));
  }
  function Zc(r, s, c) {
    var g = 0;
    s && (g |= 4), Sw(c, r, g, s);
  }
  var qa = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(r) {
    if (!r[qa]) {
      r[qa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (n2.has(c) || Zc(c, !1, r), Zc(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[qa] || (s[qa] = !0, Zc("selectionchange", !1, s));
    }
  }
  function Sw(r, s, c, g) {
    switch (U0(s)) {
      case 1:
        var w = mM;
        break;
      case 4:
        w = vM;
        break;
      default:
        w = Lc;
    }
    c = w.bind(null, s, c, r), w = void 0, !$i || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (w = !0), g ? w !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: w }) : r.addEventListener(s, c, !0) : w !== void 0 ? r.addEventListener(s, c, { passive: w }) : r.addEventListener(s, c, !1);
  }
  function Jc(r, s, c, g, w) {
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
          if (I = Wr($), I === null) return;
          if (K = I.tag, K === 5 || K === 6) {
            g = E = I;
            continue e;
          }
          $ = $.parentNode;
        }
      }
      g = g.return;
    }
    ya(function() {
      var oe = E, ue = qi(c), fe = [];
      e: {
        var le = ww.get(r);
        if (le !== void 0) {
          var ge = qc, we = r;
          switch (r) {
            case "keypress":
              if (Aa(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = AM;
              break;
            case "focusin":
              we = "focus", ge = $c;
              break;
            case "focusout":
              we = "blur", ge = $c;
              break;
            case "beforeblur":
            case "afterblur":
              ge = $c;
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
              ge = K0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = xM;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = LM;
              break;
            case gw:
            case mw:
            case vw:
              ge = SM;
              break;
            case yw:
              ge = jM;
              break;
            case "scroll":
              ge = yM;
              break;
            case "wheel":
              ge = FM;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = CM;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = Q0;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = zr(J, ne), he != null && Se.push(as(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== ji && (we = c.relatedTarget || c.fromElement) && (Wr(we) || we[$n])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Wr(we) : null, we !== null && (et = Sn(we), we !== et || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = K0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = Q0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : qo(ge), re = we == null ? le : qo(we), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Wr(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && we) t: {
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
            ge !== null && Ew(fe, le, ge, Se, !1), we !== null && et !== null && Ew(fe, et, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? qo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = UM;
          else if (rw(le)) if (iw) Ce = XM;
          else {
            Ce = YM;
            var ke = GM;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = KM);
          if (Ce && (Ce = Ce(r, oe))) {
            ow(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? qo(oe) : window, r) {
          case "focusin":
            (rw(ke) || ke.contentEditable === "true") && (Oo = ke, Gc = oe, os = null);
            break;
          case "focusout":
            os = Gc = Oo = null;
            break;
          case "mousedown":
            Yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yc = !1, hw(fe, c, ue);
            break;
          case "selectionchange":
            if (JM) break;
          case "keydown":
          case "keyup":
            hw(fe, c, ue);
        }
        var Re;
        if (Vc) e: {
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
        else Mo ? tw(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Z0 && c.locale !== "ko" && (Mo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Mo && (Re = G0()) : (fr = ue, jc = "value" in fr ? fr.value : fr.textContent, Mo = !0)), ke = Fa(oe, Pe), 0 < ke.length && (Pe = new X0(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = nw(c), Re !== null && (Pe.data = Re)))), (Re = $M ? BM(r, c) : VM(r, c)) && (oe = Fa(oe, "onBeforeInput"), 0 < oe.length && (ue = new X0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Re));
      }
      _w(fe, s);
    });
  }
  function as(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function Fa(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var w = r, E = w.stateNode;
      w.tag === 5 && E !== null && (w = E, E = zr(r, c), E != null && g.unshift(as(r, E, w)), E = zr(r, s), E != null && g.push(as(r, E, w))), r = r.return;
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
  function Ew(r, s, c, g, w) {
    for (var E = s._reactName, I = []; c !== null && c !== g; ) {
      var $ = c, K = $.alternate, oe = $.stateNode;
      if (K !== null && K === g) break;
      $.tag === 5 && oe !== null && ($ = oe, w ? (K = zr(c, E), K != null && I.unshift(as(c, K, $))) : w || (K = zr(c, E), K != null && I.push(as(c, K, $)))), c = c.return;
    }
    I.length !== 0 && r.push({ event: s, listeners: I });
  }
  var r2 = /\r\n?/g, o2 = /\u0000|\uFFFD/g;
  function Cw(r) {
    return (typeof r == "string" ? r : "" + r).replace(r2, `
`).replace(o2, "");
  }
  function za(r, s, c) {
    if (s = Cw(s), Cw(r) !== s && c) throw Error(n(425));
  }
  function $a() {
  }
  var ef = null, tf = null;
  function nf(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var rf = typeof setTimeout == "function" ? setTimeout : void 0, i2 = typeof clearTimeout == "function" ? clearTimeout : void 0, kw = typeof Promise == "function" ? Promise : void 0, s2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kw < "u" ? function(r) {
    return kw.resolve(null).then(r).catch(a2);
  } : rf;
  function a2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function of(r, s) {
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
  function Rw(r) {
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
  var jo = Math.random().toString(36).slice(2), Cn = "__reactFiber$" + jo, ls = "__reactProps$" + jo, $n = "__reactContainer$" + jo, sf = "__reactEvents$" + jo, l2 = "__reactListeners$" + jo, u2 = "__reactHandles$" + jo;
  function Wr(r) {
    var s = r[Cn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[$n] || c[Cn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = Rw(r); r !== null; ) {
          if (c = r[Cn]) return c;
          r = Rw(r);
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
  function qo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function Ba(r) {
    return r[ls] || null;
  }
  var af = [], Fo = -1;
  function pr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > Fo || (r.current = af[Fo], af[Fo] = null, Fo--);
  }
  function Fe(r, s) {
    Fo++, af[Fo] = r.current, r.current = s;
  }
  var gr = {}, pt = pr(gr), _t = pr(!1), Ur = gr;
  function zo(r, s) {
    var c = r.type.contextTypes;
    if (!c) return gr;
    var g = r.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
    var w = {}, E;
    for (E in c) w[E] = s[E];
    return g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = s, r.__reactInternalMemoizedMaskedChildContext = w), w;
  }
  function St(r) {
    return r = r.childContextTypes, r != null;
  }
  function Va() {
    $e(_t), $e(pt);
  }
  function Nw(r, s, c) {
    if (pt.current !== gr) throw Error(n(168));
    Fe(pt, s), Fe(_t, c);
  }
  function Pw(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var w in g) if (!(w in s)) throw Error(n(108, X(r) || "Unknown", w));
    return Q({}, c, g);
  }
  function Ha(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || gr, Ur = pt.current, Fe(pt, r), Fe(_t, _t.current), !0;
  }
  function Tw(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = Pw(r, s, Ur), g.__reactInternalMemoizedMergedChildContext = r, $e(_t), $e(pt), Fe(pt, r)) : $e(_t), Fe(_t, c);
  }
  var Bn = null, Wa = !1, lf = !1;
  function Iw(r) {
    Bn === null ? Bn = [r] : Bn.push(r);
  }
  function c2(r) {
    Wa = !0, Iw(r);
  }
  function mr() {
    if (!lf && Bn !== null) {
      lf = !0;
      var r = 0, s = qe;
      try {
        var c = Bn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Bn = null, Wa = !1;
      } catch (w) {
        throw Bn !== null && (Bn = Bn.slice(r + 1)), ba(Wi, mr), w;
      } finally {
        qe = s, lf = !1;
      }
    }
    return null;
  }
  var $o = [], Bo = 0, Ua = null, Ga = 0, Kt = [], Xt = 0, Gr = null, Vn = 1, Hn = "";
  function Yr(r, s) {
    $o[Bo++] = Ga, $o[Bo++] = Ua, Ua = r, Ga = s;
  }
  function Aw(r, s, c) {
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
  function uf(r) {
    r.return !== null && (Yr(r, 1), Aw(r, 1, 0));
  }
  function cf(r) {
    for (; r === Ua; ) Ua = $o[--Bo], $o[Bo] = null, Ga = $o[--Bo], $o[Bo] = null;
    for (; r === Gr; ) Gr = Kt[--Xt], Kt[Xt] = null, Hn = Kt[--Xt], Kt[Xt] = null, Vn = Kt[--Xt], Kt[Xt] = null;
  }
  var Ot = null, Lt = null, Ve = !1, an = null;
  function Mw(r, s) {
    var c = en(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function Ow(r, s) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return s = s.nodeType !== 1 || c.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (r.stateNode = s, Ot = r, Lt = hr(s.firstChild), !0) : !1;
      case 6:
        return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (r.stateNode = s, Ot = r, Lt = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (c = Gr !== null ? { id: Vn, overflow: Hn } : null, r.memoizedState = { dehydrated: s, treeContext: c, retryLane: 1073741824 }, c = en(18, null, null, 0), c.stateNode = s, c.return = r, r.child = c, Ot = r, Lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ff(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function df(r) {
    if (Ve) {
      var s = Lt;
      if (s) {
        var c = s;
        if (!Ow(r, s)) {
          if (ff(r)) throw Error(n(418));
          s = hr(c.nextSibling);
          var g = Ot;
          s && Ow(r, s) ? Mw(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Ot = r);
        }
      } else {
        if (ff(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Ot = r;
      }
    }
  }
  function Lw(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Ot = r;
  }
  function Ya(r) {
    if (r !== Ot) return !1;
    if (!Ve) return Lw(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !nf(r.type, r.memoizedProps)), s && (s = Lt)) {
      if (ff(r)) throw Dw(), Error(n(418));
      for (; s; ) Mw(r, s), s = hr(s.nextSibling);
    }
    if (Lw(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
      e: {
        for (r = r.nextSibling, s = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data;
            if (c === "/$") {
              if (s === 0) {
                Lt = hr(r.nextSibling);
                break e;
              }
              s--;
            } else c !== "$" && c !== "$!" && c !== "$?" || s++;
          }
          r = r.nextSibling;
        }
        Lt = null;
      }
    } else Lt = Ot ? hr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function Dw() {
    for (var r = Lt; r; ) r = hr(r.nextSibling);
  }
  function Vo() {
    Lt = Ot = null, Ve = !1;
  }
  function hf(r) {
    an === null ? an = [r] : an.push(r);
  }
  var f2 = R.ReactCurrentBatchConfig;
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
  function Ka(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function jw(r) {
    var s = r._init;
    return s(r._payload);
  }
  function qw(r) {
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
      return J === null || J.tag !== 6 ? (J = od(re, ne.mode, he), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function K(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && jw(Ce) === J.type) ? (he = w(J, re.props), he.ref = cs(ne, J, re), he.return = ne, he) : (he = wl(re.type, re.key, re.props, null, ne.mode, he), he.ref = cs(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = id(re, ne.mode, he), J.return = ne, J) : (J = w(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = no(re, ne.mode, he, Ce), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = od("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = wl(J.type, J.key, J.props, null, ne.mode, re), re.ref = cs(ne, null, J), re.return = ne, re;
          case T:
            return J = id(J, ne.mode, re), J.return = ne, J;
          case q:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Vt(J) || z(J)) return J = no(J, ne.mode, re, null), J.return = ne, J;
        Ka(ne, J);
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
        if (Vt(re) || z(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Ka(ne, re);
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
        if (Vt(he) || z(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Ka(J, he);
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
      var Ce = z(re);
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
      return r && Re.forEach(function(H2) {
        return s(ne, H2);
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
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && jw(Ce) === ke.type) {
                    c(ne, ke.sibling), J = w(ke, re.props), J.ref = cs(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = no(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = wl(re.type, re.key, re.props, null, ne.mode, he), he.ref = cs(ne, J, re), he.return = ne, ne = he);
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
              J = id(re, ne.mode, he), J.return = ne, ne = J;
            }
            return I(ne);
          case q:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Vt(re)) return we(ne, J, re, he);
        if (z(re)) return Se(ne, J, re, he);
        Ka(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = w(J, re), J.return = ne, ne = J) : (c(ne, J), J = od(re, ne.mode, he), J.return = ne, ne = J), I(ne)) : c(ne, J);
    }
    return et;
  }
  var Ho = qw(!0), Fw = qw(!1), Xa = pr(null), Qa = null, Wo = null, pf = null;
  function gf() {
    pf = Wo = Qa = null;
  }
  function mf(r) {
    var s = Xa.current;
    $e(Xa), r._currentValue = s;
  }
  function vf(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Uo(r, s) {
    Qa = r, pf = Wo = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Qt(r) {
    var s = r._currentValue;
    if (pf !== r) if (r = { context: r, memoizedValue: s, next: null }, Wo === null) {
      if (Qa === null) throw Error(n(308));
      Wo = r, Qa.dependencies = { lanes: 0, firstContext: r };
    } else Wo = Wo.next = r;
    return s;
  }
  var Kr = null;
  function yf(r) {
    Kr === null ? Kr = [r] : Kr.push(r);
  }
  function zw(r, s, c, g) {
    var w = s.interleaved;
    return w === null ? (c.next = c, yf(s)) : (c.next = w.next, w.next = c), s.interleaved = c, Wn(r, g);
  }
  function Wn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var vr = !1;
  function wf(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $w(r, s) {
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
    return w = g.interleaved, w === null ? (s.next = s, yf(g)) : (s.next = w.next, w.next = s), g.interleaved = s, Wn(r, c);
  }
  function Za(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ac(r, c);
    }
  }
  function Bw(r, s) {
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
  function Ja(r, s, c, g) {
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
                fe = Q({}, fe, le);
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
      Zr |= I, r.lanes = I, r.memoizedState = fe;
    }
  }
  function Vw(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], w = g.callback;
      if (w !== null) {
        if (g.callback = null, g = c, typeof w != "function") throw Error(n(191, w));
        w.call(g);
      }
    }
  }
  var fs = {}, kn = pr(fs), ds = pr(fs), hs = pr(fs);
  function Xr(r) {
    if (r === fs) throw Error(n(174));
    return r;
  }
  function xf(r, s) {
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
  function Go() {
    $e(kn), $e(ds), $e(hs);
  }
  function Hw(r) {
    Xr(hs.current);
    var s = Xr(kn.current), c = Wt(s, r.type);
    s !== c && (Fe(ds, r), Fe(kn, c));
  }
  function bf(r) {
    ds.current === r && ($e(kn), $e(ds));
  }
  var Ke = pr(0);
  function el(r) {
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
  var _f = [];
  function Sf() {
    for (var r = 0; r < _f.length; r++) _f[r]._workInProgressVersionPrimary = null;
    _f.length = 0;
  }
  var tl = R.ReactCurrentDispatcher, Ef = R.ReactCurrentBatchConfig, Qr = 0, Xe = null, ot = null, lt = null, nl = !1, ps = !1, gs = 0, d2 = 0;
  function gt() {
    throw Error(n(321));
  }
  function Cf(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!sn(r[c], s[c])) return !1;
    return !0;
  }
  function kf(r, s, c, g, w, E) {
    if (Qr = E, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, tl.current = r === null || r.memoizedState === null ? m2 : v2, r = c(g, w), ps) {
      E = 0;
      do {
        if (ps = !1, gs = 0, 25 <= E) throw Error(n(301));
        E += 1, lt = ot = null, s.updateQueue = null, tl.current = y2, r = c(g, w);
      } while (ps);
    }
    if (tl.current = il, s = ot !== null && ot.next !== null, Qr = 0, lt = ot = Xe = null, nl = !1, s) throw Error(n(300));
    return r;
  }
  function Rf() {
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
  function Nf(r) {
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
        if ((Qr & ue) === ue) K !== null && (K = K.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          K === null ? ($ = K = fe, I = g) : K = K.next = fe, Xe.lanes |= ue, Zr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== E);
      K === null ? I = g : K.next = $, sn(g, s.memoizedState) || (Et = !0), s.memoizedState = g, s.baseState = I, s.baseQueue = K, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      w = r;
      do
        E = w.lane, Xe.lanes |= E, Zr |= E, w = w.next;
      while (w !== r);
    } else w === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function Pf(r) {
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
  function Ww() {
  }
  function Uw(r, s) {
    var c = Xe, g = Zt(), w = s(), E = !sn(g.memoizedState, w);
    if (E && (g.memoizedState = w, Et = !0), g = g.queue, Tf(Kw.bind(null, c, g, r), [r]), g.getSnapshot !== s || E || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, vs(9, Yw.bind(null, c, g, w, s), void 0, null), ut === null) throw Error(n(349));
      (Qr & 30) !== 0 || Gw(c, s, w);
    }
    return w;
  }
  function Gw(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function Yw(r, s, c, g) {
    s.value = c, s.getSnapshot = g, Xw(s) && Qw(r);
  }
  function Kw(r, s, c) {
    return c(function() {
      Xw(s) && Qw(r);
    });
  }
  function Xw(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !sn(r, c);
    } catch {
      return !0;
    }
  }
  function Qw(r) {
    var s = Wn(r, 1);
    s !== null && fn(s, r, 1, -1);
  }
  function Zw(r) {
    var s = Rn();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: r }, s.queue = r, r = r.dispatch = g2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function vs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function Jw() {
    return Zt().memoizedState;
  }
  function rl(r, s, c, g) {
    var w = Rn();
    Xe.flags |= r, w.memoizedState = vs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function ol(r, s, c, g) {
    var w = Zt();
    g = g === void 0 ? null : g;
    var E = void 0;
    if (ot !== null) {
      var I = ot.memoizedState;
      if (E = I.destroy, g !== null && Cf(g, I.deps)) {
        w.memoizedState = vs(s, c, E, g);
        return;
      }
    }
    Xe.flags |= r, w.memoizedState = vs(1 | s, c, E, g);
  }
  function ex(r, s) {
    return rl(8390656, 8, r, s);
  }
  function Tf(r, s) {
    return ol(2048, 8, r, s);
  }
  function tx(r, s) {
    return ol(4, 2, r, s);
  }
  function nx(r, s) {
    return ol(4, 4, r, s);
  }
  function rx(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function ox(r, s, c) {
    return c = c != null ? c.concat([r]) : null, ol(4, 4, rx.bind(null, s, r), c);
  }
  function If() {
  }
  function ix(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Cf(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function sx(r, s) {
    var c = Zt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && Cf(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function ax(r, s, c) {
    return (Qr & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (sn(c, s) || (c = ka(), Xe.lanes |= c, Zr |= c, r.baseState = !0), s);
  }
  function h2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = Ef.transition;
    Ef.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, Ef.transition = g;
    }
  }
  function lx() {
    return Zt().memoizedState;
  }
  function p2(r, s, c) {
    var g = _r(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, ux(r)) cx(s, c);
    else if (c = zw(r, s, c, g), c !== null) {
      var w = xt();
      fn(c, r, g, w), fx(c, s, g);
    }
  }
  function g2(r, s, c) {
    var g = _r(r), w = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (ux(r)) cx(s, w);
    else {
      var E = r.alternate;
      if (r.lanes === 0 && (E === null || E.lanes === 0) && (E = s.lastRenderedReducer, E !== null)) try {
        var I = s.lastRenderedState, $ = E(I, c);
        if (w.hasEagerState = !0, w.eagerState = $, sn($, I)) {
          var K = s.interleaved;
          K === null ? (w.next = w, yf(s)) : (w.next = K.next, K.next = w), s.interleaved = w;
          return;
        }
      } catch {
      } finally {
      }
      c = zw(r, s, w, g), c !== null && (w = xt(), fn(c, r, g, w), fx(c, s, g));
    }
  }
  function ux(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function cx(r, s) {
    ps = nl = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function fx(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Ac(r, c);
    }
  }
  var il = { readContext: Qt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, m2 = { readContext: Qt, useCallback: function(r, s) {
    return Rn().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Qt, useEffect: ex, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, rl(
      4194308,
      4,
      rx.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return rl(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return rl(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = Rn();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = Rn();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = p2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = Rn();
    return r = { current: r }, s.memoizedState = r;
  }, useState: Zw, useDebugValue: If, useDeferredValue: function(r) {
    return Rn().memoizedState = r;
  }, useTransition: function() {
    var r = Zw(!1), s = r[0];
    return r = h2.bind(null, r[1]), Rn().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, w = Rn();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Qr & 30) !== 0 || Gw(g, s, c);
    }
    w.memoizedState = c;
    var E = { value: c, getSnapshot: s };
    return w.queue = E, ex(Kw.bind(
      null,
      g,
      E,
      r
    ), [r]), g.flags |= 2048, vs(9, Yw.bind(null, g, E, c, s), void 0, null), c;
  }, useId: function() {
    var r = Rn(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Hn, g = Vn;
      c = (g & ~(1 << 32 - At(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = gs++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = d2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, v2 = {
    readContext: Qt,
    useCallback: ix,
    useContext: Qt,
    useEffect: Tf,
    useImperativeHandle: ox,
    useInsertionEffect: tx,
    useLayoutEffect: nx,
    useMemo: sx,
    useReducer: Nf,
    useRef: Jw,
    useState: function() {
      return Nf(ms);
    },
    useDebugValue: If,
    useDeferredValue: function(r) {
      var s = Zt();
      return ax(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = Nf(ms)[0], s = Zt().memoizedState;
      return [r, s];
    },
    useMutableSource: Ww,
    useSyncExternalStore: Uw,
    useId: lx,
    unstable_isNewReconciler: !1
  }, y2 = { readContext: Qt, useCallback: ix, useContext: Qt, useEffect: Tf, useImperativeHandle: ox, useInsertionEffect: tx, useLayoutEffect: nx, useMemo: sx, useReducer: Pf, useRef: Jw, useState: function() {
    return Pf(ms);
  }, useDebugValue: If, useDeferredValue: function(r) {
    var s = Zt();
    return ot === null ? s.memoizedState = r : ax(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = Pf(ms)[0], s = Zt().memoizedState;
    return [r, s];
  }, useMutableSource: Ww, useSyncExternalStore: Uw, useId: lx, unstable_isNewReconciler: !1 };
  function ln(r, s) {
    if (r && r.defaultProps) {
      s = Q({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function Af(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : Q({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var sl = { isMounted: function(r) {
    return (r = r._reactInternals) ? Sn(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = _r(r), E = Un(g, w);
    E.payload = s, c != null && (E.callback = c), s = yr(r, E, w), s !== null && (fn(s, r, w, g), Za(s, r, w));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = _r(r), E = Un(g, w);
    E.tag = 1, E.payload = s, c != null && (E.callback = c), s = yr(r, E, w), s !== null && (fn(s, r, w, g), Za(s, r, w));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = xt(), g = _r(r), w = Un(c, g);
    w.tag = 2, s != null && (w.callback = s), s = yr(r, w, g), s !== null && (fn(s, r, g, c), Za(s, r, g));
  } };
  function dx(r, s, c, g, w, E, I) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, E, I) : s.prototype && s.prototype.isPureReactComponent ? !rs(c, g) || !rs(w, E) : !0;
  }
  function hx(r, s, c) {
    var g = !1, w = gr, E = s.contextType;
    return typeof E == "object" && E !== null ? E = Qt(E) : (w = St(s) ? Ur : pt.current, g = s.contextTypes, E = (g = g != null) ? zo(r, w) : gr), s = new s(c, E), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = sl, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = w, r.__reactInternalMemoizedMaskedChildContext = E), s;
  }
  function px(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && sl.enqueueReplaceState(s, s.state, null);
  }
  function Mf(r, s, c, g) {
    var w = r.stateNode;
    w.props = c, w.state = r.memoizedState, w.refs = {}, wf(r);
    var E = s.contextType;
    typeof E == "object" && E !== null ? w.context = Qt(E) : (E = St(s) ? Ur : pt.current, w.context = zo(r, E)), w.state = r.memoizedState, E = s.getDerivedStateFromProps, typeof E == "function" && (Af(r, s, E, c), w.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function" || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (s = w.state, typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount(), s !== w.state && sl.enqueueReplaceState(w, w.state, null), Ja(r, c, w, g), w.state = r.memoizedState), typeof w.componentDidMount == "function" && (r.flags |= 4194308);
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
  function Of(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function Lf(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var w2 = typeof WeakMap == "function" ? WeakMap : Map;
  function gx(r, s, c) {
    c = Un(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      hl || (hl = !0, Xf = g), Lf(r, s);
    }, c;
  }
  function mx(r, s, c) {
    c = Un(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var w = s.value;
      c.payload = function() {
        return g(w);
      }, c.callback = function() {
        Lf(r, s);
      };
    }
    var E = r.stateNode;
    return E !== null && typeof E.componentDidCatch == "function" && (c.callback = function() {
      Lf(r, s), typeof g != "function" && (xr === null ? xr = /* @__PURE__ */ new Set([this]) : xr.add(this));
      var I = s.stack;
      this.componentDidCatch(s.value, { componentStack: I !== null ? I : "" });
    }), c;
  }
  function vx(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new w2();
      var w = /* @__PURE__ */ new Set();
      g.set(s, w);
    } else w = g.get(s), w === void 0 && (w = /* @__PURE__ */ new Set(), g.set(s, w));
    w.has(c) || (w.add(c), r = M2.bind(null, r, s, c), s.then(r, r));
  }
  function yx(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function wx(r, s, c, g, w) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Un(-1, 1), s.tag = 2, yr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = w, r);
  }
  var x2 = R.ReactCurrentOwner, Et = !1;
  function wt(r, s, c, g) {
    s.child = r === null ? Fw(s, null, c, g) : Ho(s, r.child, c, g);
  }
  function xx(r, s, c, g, w) {
    c = c.render;
    var E = s.ref;
    return Uo(s, w), g = kf(r, s, c, g, E, w), c = Rf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && c && uf(s), s.flags |= 1, wt(r, s, g, w), s.child);
  }
  function bx(r, s, c, g, w) {
    if (r === null) {
      var E = c.type;
      return typeof E == "function" && !rd(E) && E.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = E, _x(r, s, E, g, w)) : (r = wl(c.type, null, g, s, s.mode, w), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (E = r.child, (r.lanes & w) === 0) {
      var I = E.memoizedProps;
      if (c = c.compare, c = c !== null ? c : rs, c(I, g) && r.ref === s.ref) return Gn(r, s, w);
    }
    return s.flags |= 1, r = Er(E, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function _x(r, s, c, g, w) {
    if (r !== null) {
      var E = r.memoizedProps;
      if (rs(E, g) && r.ref === s.ref) if (Et = !1, s.pendingProps = g = E, (r.lanes & w) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return s.lanes = r.lanes, Gn(r, s, w);
    }
    return Df(r, s, c, g, w);
  }
  function Sx(r, s, c) {
    var g = s.pendingProps, w = g.children, E = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(Xo, Dt), Dt |= c;
    else {
      if ((c & 1073741824) === 0) return r = E !== null ? E.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, Fe(Xo, Dt), Dt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = E !== null ? E.baseLanes : c, Fe(Xo, Dt), Dt |= g;
    }
    else E !== null ? (g = E.baseLanes | c, s.memoizedState = null) : g = c, Fe(Xo, Dt), Dt |= g;
    return wt(r, s, w, c), s.child;
  }
  function Ex(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Df(r, s, c, g, w) {
    var E = St(c) ? Ur : pt.current;
    return E = zo(s, E), Uo(s, w), c = kf(r, s, c, g, E, w), g = Rf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Gn(r, s, w)) : (Ve && g && uf(s), s.flags |= 1, wt(r, s, c, w), s.child);
  }
  function Cx(r, s, c, g, w) {
    if (St(c)) {
      var E = !0;
      Ha(s);
    } else E = !1;
    if (Uo(s, w), s.stateNode === null) ll(r, s), hx(s, c, g), Mf(s, c, g, w), g = !0;
    else if (r === null) {
      var I = s.stateNode, $ = s.memoizedProps;
      I.props = $;
      var K = I.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Qt(oe) : (oe = St(c) ? Ur : pt.current, oe = zo(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof I.getSnapshotBeforeUpdate == "function";
      fe || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || ($ !== g || K !== oe) && px(s, I, g, oe), vr = !1;
      var le = s.memoizedState;
      I.state = le, Ja(s, g, I, w), K = s.memoizedState, $ !== g || le !== K || _t.current || vr ? (typeof ue == "function" && (Af(s, c, ue, g), K = s.memoizedState), ($ = vr || dx(s, c, $, g, le, K, oe)) ? (fe || typeof I.UNSAFE_componentWillMount != "function" && typeof I.componentWillMount != "function" || (typeof I.componentWillMount == "function" && I.componentWillMount(), typeof I.UNSAFE_componentWillMount == "function" && I.UNSAFE_componentWillMount()), typeof I.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = K), I.props = g, I.state = K, I.context = oe, g = $) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      I = s.stateNode, $w(r, s), $ = s.memoizedProps, oe = s.type === s.elementType ? $ : ln(s.type, $), I.props = oe, fe = s.pendingProps, le = I.context, K = c.contextType, typeof K == "object" && K !== null ? K = Qt(K) : (K = St(c) ? Ur : pt.current, K = zo(s, K));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof I.getSnapshotBeforeUpdate == "function") || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || ($ !== fe || le !== K) && px(s, I, g, K), vr = !1, le = s.memoizedState, I.state = le, Ja(s, g, I, w);
      var we = s.memoizedState;
      $ !== fe || le !== we || _t.current || vr ? (typeof ge == "function" && (Af(s, c, ge, g), we = s.memoizedState), (oe = vr || dx(s, c, oe, g, le, we, K) || !1) ? (ue || typeof I.UNSAFE_componentWillUpdate != "function" && typeof I.componentWillUpdate != "function" || (typeof I.componentWillUpdate == "function" && I.componentWillUpdate(g, we, K), typeof I.UNSAFE_componentWillUpdate == "function" && I.UNSAFE_componentWillUpdate(g, we, K)), typeof I.componentDidUpdate == "function" && (s.flags |= 4), typeof I.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof I.componentDidUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = we), I.props = g, I.state = we, I.context = K, g = oe) : (typeof I.componentDidUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || $ === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return jf(r, s, c, g, E, w);
  }
  function jf(r, s, c, g, w, E) {
    Ex(r, s);
    var I = (s.flags & 128) !== 0;
    if (!g && !I) return w && Tw(s, c, !1), Gn(r, s, E);
    g = s.stateNode, x2.current = s;
    var $ = I && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && I ? (s.child = Ho(s, r.child, null, E), s.child = Ho(s, null, $, E)) : wt(r, s, $, E), s.memoizedState = g.state, w && Tw(s, c, !0), s.child;
  }
  function kx(r) {
    var s = r.stateNode;
    s.pendingContext ? Nw(r, s.pendingContext, s.pendingContext !== s.context) : s.context && Nw(r, s.context, !1), xf(r, s.containerInfo);
  }
  function Rx(r, s, c, g, w) {
    return Vo(), hf(w), s.flags |= 256, wt(r, s, c, g), s.child;
  }
  var qf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ff(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Nx(r, s, c) {
    var g = s.pendingProps, w = Ke.current, E = !1, I = (s.flags & 128) !== 0, $;
    if (($ = I) || ($ = r !== null && r.memoizedState === null ? !1 : (w & 2) !== 0), $ ? (E = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (w |= 1), Fe(Ke, w & 1), r === null)
      return df(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (I = g.children, r = g.fallback, E ? (g = s.mode, E = s.child, I = { mode: "hidden", children: I }, (g & 1) === 0 && E !== null ? (E.childLanes = 0, E.pendingProps = I) : E = xl(I, g, 0, null), r = no(r, g, c, null), E.return = s, r.return = s, E.sibling = r, s.child = E, s.child.memoizedState = Ff(c), s.memoizedState = qf, r) : zf(s, I));
    if (w = r.memoizedState, w !== null && ($ = w.dehydrated, $ !== null)) return b2(r, s, I, g, $, w, c);
    if (E) {
      E = g.fallback, I = s.mode, w = r.child, $ = w.sibling;
      var K = { mode: "hidden", children: g.children };
      return (I & 1) === 0 && s.child !== w ? (g = s.child, g.childLanes = 0, g.pendingProps = K, s.deletions = null) : (g = Er(w, K), g.subtreeFlags = w.subtreeFlags & 14680064), $ !== null ? E = Er($, E) : (E = no(E, I, c, null), E.flags |= 2), E.return = s, g.return = s, g.sibling = E, s.child = g, g = E, E = s.child, I = r.child.memoizedState, I = I === null ? Ff(c) : { baseLanes: I.baseLanes | c, cachePool: null, transitions: I.transitions }, E.memoizedState = I, E.childLanes = r.childLanes & ~c, s.memoizedState = qf, g;
    }
    return E = r.child, r = E.sibling, g = Er(E, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function zf(r, s) {
    return s = xl({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function al(r, s, c, g) {
    return g !== null && hf(g), Ho(s, r.child, null, c), r = zf(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function b2(r, s, c, g, w, E, I) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = Of(Error(n(422))), al(r, s, I, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (E = g.fallback, w = s.mode, g = xl({ mode: "visible", children: g.children }, w, 0, null), E = no(E, w, I, null), E.flags |= 2, g.return = s, E.return = s, g.sibling = E, s.child = g, (s.mode & 1) !== 0 && Ho(s, r.child, null, I), s.child.memoizedState = Ff(I), s.memoizedState = qf, E);
    if ((s.mode & 1) === 0) return al(r, s, I, null);
    if (w.data === "$!") {
      if (g = w.nextSibling && w.nextSibling.dataset, g) var $ = g.dgst;
      return g = $, E = Error(n(419)), g = Of(E, g, void 0), al(r, s, I, g);
    }
    if ($ = (I & r.childLanes) !== 0, Et || $) {
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
      return nd(), g = Of(Error(n(421))), al(r, s, I, g);
    }
    return w.data === "$?" ? (s.flags |= 128, s.child = r.child, s = O2.bind(null, r), w._reactRetry = s, null) : (r = E.treeContext, Lt = hr(w.nextSibling), Ot = s, Ve = !0, an = null, r !== null && (Kt[Xt++] = Vn, Kt[Xt++] = Hn, Kt[Xt++] = Gr, Vn = r.id, Hn = r.overflow, Gr = s), s = zf(s, g.children), s.flags |= 4096, s);
  }
  function Px(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), vf(r.return, s, c);
  }
  function $f(r, s, c, g, w) {
    var E = r.memoizedState;
    E === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: w } : (E.isBackwards = s, E.rendering = null, E.renderingStartTime = 0, E.last = g, E.tail = c, E.tailMode = w);
  }
  function Tx(r, s, c) {
    var g = s.pendingProps, w = g.revealOrder, E = g.tail;
    if (wt(r, s, g.children, c), g = Ke.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Px(r, c, s);
        else if (r.tag === 19) Px(r, c, s);
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
        for (c = s.child, w = null; c !== null; ) r = c.alternate, r !== null && el(r) === null && (w = c), c = c.sibling;
        c = w, c === null ? (w = s.child, s.child = null) : (w = c.sibling, c.sibling = null), $f(s, !1, w, c, E);
        break;
      case "backwards":
        for (c = null, w = s.child, s.child = null; w !== null; ) {
          if (r = w.alternate, r !== null && el(r) === null) {
            s.child = w;
            break;
          }
          r = w.sibling, w.sibling = c, c = w, w = r;
        }
        $f(s, !0, c, null, E);
        break;
      case "together":
        $f(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function ll(r, s) {
    (s.mode & 1) === 0 && r !== null && (r.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Gn(r, s, c) {
    if (r !== null && (s.dependencies = r.dependencies), Zr |= s.lanes, (c & s.childLanes) === 0) return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (r = s.child, c = Er(r, r.pendingProps), s.child = c, c.return = s; r.sibling !== null; ) r = r.sibling, c = c.sibling = Er(r, r.pendingProps), c.return = s;
      c.sibling = null;
    }
    return s.child;
  }
  function _2(r, s, c) {
    switch (s.tag) {
      case 3:
        kx(s), Vo();
        break;
      case 5:
        Hw(s);
        break;
      case 1:
        St(s.type) && Ha(s);
        break;
      case 4:
        xf(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, w = s.memoizedProps.value;
        Fe(Xa, g._currentValue), g._currentValue = w;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (Fe(Ke, Ke.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? Nx(r, s, c) : (Fe(Ke, Ke.current & 1), r = Gn(r, s, c), r !== null ? r.sibling : null);
        Fe(Ke, Ke.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return Tx(r, s, c);
          s.flags |= 128;
        }
        if (w = s.memoizedState, w !== null && (w.rendering = null, w.tail = null, w.lastEffect = null), Fe(Ke, Ke.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, Sx(r, s, c);
    }
    return Gn(r, s, c);
  }
  var Ix, Bf, Ax, Mx;
  Ix = function(r, s) {
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
  }, Bf = function() {
  }, Ax = function(r, s, c, g) {
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
          typeof w.onClick != "function" && typeof g.onClick == "function" && (r.onclick = $a);
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
  }, Mx = function(r, s, c, g) {
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
  function mt(r) {
    var s = r.alternate !== null && r.alternate.child === r.child, c = 0, g = 0;
    if (s) for (var w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags & 14680064, g |= w.flags & 14680064, w.return = r, w = w.sibling;
    else for (w = r.child; w !== null; ) c |= w.lanes | w.childLanes, g |= w.subtreeFlags, g |= w.flags, w.return = r, w = w.sibling;
    return r.subtreeFlags |= g, r.childLanes = c, s;
  }
  function S2(r, s, c) {
    var g = s.pendingProps;
    switch (cf(s), s.tag) {
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
        return St(s.type) && Va(), mt(s), null;
      case 3:
        return g = s.stateNode, Go(), $e(_t), $e(pt), Sf(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Ya(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, an !== null && (Jf(an), an = null))), Bf(r, s), mt(s), null;
      case 5:
        bf(s);
        var w = Xr(hs.current);
        if (c = s.type, r !== null && s.stateNode != null) Ax(r, s, c, g, w), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return mt(s), null;
          }
          if (r = Xr(kn.current), Ya(s)) {
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
              I === "children" ? typeof $ == "string" ? g.textContent !== $ && (E.suppressHydrationWarning !== !0 && za(g.textContent, $, r), w = ["children", $]) : typeof $ == "number" && g.textContent !== "" + $ && (E.suppressHydrationWarning !== !0 && za(
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
                typeof E.onClick == "function" && (g.onclick = $a);
            }
            g = w, s.updateQueue = g, g !== null && (s.flags |= 4);
          } else {
            I = w.nodeType === 9 ? w : w.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = on(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = I.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = I.createElement(c, { is: g.is }) : (r = I.createElement(c), c === "select" && (I = r, g.multiple ? I.multiple = !0 : g.size && (I.size = g.size))) : r = I.createElementNS(r, c), r[Cn] = s, r[ls] = g, Ix(r, s, !1, !1), s.stateNode = r;
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
                  r._wrapperState = { wasMultiple: !!g.multiple }, w = Q({}, g, { value: void 0 }), ze("invalid", r);
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
                  typeof w.onClick == "function" && (r.onclick = $a);
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
        if (r && s.stateNode != null) Mx(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Xr(hs.current), Xr(kn.current), Ya(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[Cn] = s, (E = g.nodeValue !== c) && (r = Ot, r !== null)) switch (r.tag) {
              case 3:
                za(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && za(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            E && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[Cn] = s, s.stateNode = g;
        }
        return mt(s), null;
      case 13:
        if ($e(Ke), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Lt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Dw(), Vo(), s.flags |= 98560, E = !1;
          else if (E = Ya(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!E) throw Error(n(318));
              if (E = s.memoizedState, E = E !== null ? E.dehydrated : null, !E) throw Error(n(317));
              E[Cn] = s;
            } else Vo(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            mt(s), E = !1;
          } else an !== null && (Jf(an), an = null), E = !0;
          if (!E) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ke.current & 1) !== 0 ? it === 0 && (it = 3) : nd())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
      case 4:
        return Go(), Bf(r, s), r === null && ss(s.stateNode.containerInfo), mt(s), null;
      case 10:
        return mf(s.type._context), mt(s), null;
      case 17:
        return St(s.type) && Va(), mt(s), null;
      case 19:
        if ($e(Ke), E = s.memoizedState, E === null) return mt(s), null;
        if (g = (s.flags & 128) !== 0, I = E.rendering, I === null) if (g) ys(E, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (I = el(r), I !== null) {
              for (s.flags |= 128, ys(E, !1), g = I.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) E = c, r = g, E.flags &= 14680066, I = E.alternate, I === null ? (E.childLanes = 0, E.lanes = r, E.child = null, E.subtreeFlags = 0, E.memoizedProps = null, E.memoizedState = null, E.updateQueue = null, E.dependencies = null, E.stateNode = null) : (E.childLanes = I.childLanes, E.lanes = I.lanes, E.child = I.child, E.subtreeFlags = 0, E.deletions = null, E.memoizedProps = I.memoizedProps, E.memoizedState = I.memoizedState, E.updateQueue = I.updateQueue, E.type = I.type, r = I.dependencies, E.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return Fe(Ke, Ke.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          E.tail !== null && Ye() > Qo && (s.flags |= 128, g = !0, ys(E, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = el(I), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), ys(E, !0), E.tail === null && E.tailMode === "hidden" && !I.alternate && !Ve) return mt(s), null;
          } else 2 * Ye() - E.renderingStartTime > Qo && c !== 1073741824 && (s.flags |= 128, g = !0, ys(E, !1), s.lanes = 4194304);
          E.isBackwards ? (I.sibling = s.child, s.child = I) : (c = E.last, c !== null ? c.sibling = I : s.child = I, E.last = I);
        }
        return E.tail !== null ? (s = E.tail, E.rendering = s, E.tail = s.sibling, E.renderingStartTime = Ye(), s.sibling = null, c = Ke.current, Fe(Ke, g ? c & 1 | 2 : c & 1), s) : (mt(s), null);
      case 22:
      case 23:
        return td(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (Dt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function E2(r, s) {
    switch (cf(s), s.tag) {
      case 1:
        return St(s.type) && Va(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Go(), $e(_t), $e(pt), Sf(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return bf(s), null;
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
        return mf(s.type._context), null;
      case 22:
      case 23:
        return td(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ul = !1, vt = !1, C2 = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Ko(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function Vf(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var Ox = !1;
  function k2(r, s) {
    if (ef = Pa, r = dw(), Uc(r)) {
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
    for (tf = { focusedElem: r, selectionRange: c }, Pa = !1, ve = s; ve !== null; ) if (s = ve, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ve = r;
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
    return we = Ox, Ox = !1, we;
  }
  function ws(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var w = g = g.next;
      do {
        if ((w.tag & r) === r) {
          var E = w.destroy;
          w.destroy = void 0, E !== void 0 && Vf(s, c, E);
        }
        w = w.next;
      } while (w !== g);
    }
  }
  function cl(r, s) {
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
  function Hf(r) {
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
  function Lx(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, Lx(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[Cn], delete s[ls], delete s[sf], delete s[l2], delete s[u2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Dx(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function jx(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Dx(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Wf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.nodeType === 8 ? c.parentNode.insertBefore(r, s) : c.insertBefore(r, s) : (c.nodeType === 8 ? (s = c.parentNode, s.insertBefore(r, c)) : (s = c, s.appendChild(r)), c = c._reactRootContainer, c != null || s.onclick !== null || (s.onclick = $a));
    else if (g !== 4 && (r = r.child, r !== null)) for (Wf(r, s, c), r = r.sibling; r !== null; ) Wf(r, s, c), r = r.sibling;
  }
  function Uf(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for (Uf(r, s, c), r = r.sibling; r !== null; ) Uf(r, s, c), r = r.sibling;
  }
  var ft = null, un = !1;
  function wr(r, s, c) {
    for (c = c.child; c !== null; ) qx(r, s, c), c = c.sibling;
  }
  function qx(r, s, c) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Vr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Ko(c, s);
      case 6:
        var g = ft, w = un;
        ft = null, wr(r, s, c), ft = g, un = w, ft !== null && (un ? (r = ft, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (un ? (r = ft, c = c.stateNode, r.nodeType === 8 ? of(r.parentNode, c) : r.nodeType === 1 && of(r, c), Qi(r)) : of(ft, c.stateNode));
        break;
      case 4:
        g = ft, w = un, ft = c.stateNode.containerInfo, un = !0, wr(r, s, c), ft = g, un = w;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          w = g = g.next;
          do {
            var E = w, I = E.destroy;
            E = E.tag, I !== void 0 && ((E & 2) !== 0 || (E & 4) !== 0) && Vf(c, s, I), w = w.next;
          } while (w !== g);
        }
        wr(r, s, c);
        break;
      case 1:
        if (!vt && (Ko(c, s), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
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
        c.mode & 1 ? (vt = (g = vt) || c.memoizedState !== null, wr(r, s, c), vt = g) : wr(r, s, c);
        break;
      default:
        wr(r, s, c);
    }
  }
  function Fx(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new C2()), s.forEach(function(g) {
        var w = L2.bind(null, r, g);
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
              ft = $.stateNode, un = !1;
              break e;
            case 3:
              ft = $.stateNode.containerInfo, un = !0;
              break e;
            case 4:
              ft = $.stateNode.containerInfo, un = !0;
              break e;
          }
          $ = $.return;
        }
        if (ft === null) throw Error(n(160));
        qx(E, I, w), ft = null, un = !1;
        var K = w.alternate;
        K !== null && (K.return = null), w.return = null;
      } catch (oe) {
        Ze(w, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) zx(s, r), s = s.sibling;
  }
  function zx(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (cn(s, r), Nn(r), g & 4) {
          try {
            ws(3, r, r.return), cl(3, r);
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
          var E = r.memoizedProps, I = c !== null ? c.memoizedProps : E, $ = r.type, K = r.updateQueue;
          if (r.updateQueue = null, K !== null) try {
            $ === "input" && E.type === "radio" && E.name != null && Ne(w, E), Di($, I);
            var oe = Di($, E);
            for (I = 0; I < K.length; I += 2) {
              var ue = K[I], fe = K[I + 1];
              ue === "style" ? Gt(w, fe) : ue === "dangerouslySetInnerHTML" ? Fr(w, fe) : ue === "children" ? Ut(w, fe) : b(w, ue, fe, oe);
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
                ge != null ? ht(w, !!E.multiple, ge, !1) : le !== !!E.multiple && (E.defaultValue != null ? ht(
                  w,
                  !!E.multiple,
                  E.defaultValue,
                  !0
                ) : ht(w, !!E.multiple, E.multiple ? [] : "", !1));
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
        cn(s, r), Nn(r), w = r.child, w.flags & 8192 && (E = w.memoizedState !== null, w.stateNode.isHidden = E, !E || w.alternate !== null && w.alternate.memoizedState !== null || (Kf = Ye())), g & 4 && Fx(r);
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
                  ws(4, le, le.return);
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
                    Vx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : Vx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  w = fe.stateNode, oe ? (E = w.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none") : ($ = fe.stateNode, K = fe.memoizedProps.style, I = K != null && K.hasOwnProperty("display") ? K.display : null, $.style.display = It("display", I));
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
        cn(s, r), Nn(r), g & 4 && Fx(r);
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
            if (Dx(c)) {
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
            var E = jx(r);
            Uf(r, E, w);
            break;
          case 3:
          case 4:
            var I = g.stateNode.containerInfo, $ = jx(r);
            Wf(r, $, I);
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
  function R2(r, s, c) {
    ve = r, $x(r);
  }
  function $x(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ve !== null; ) {
      var w = ve, E = w.child;
      if (w.tag === 22 && g) {
        var I = w.memoizedState !== null || ul;
        if (!I) {
          var $ = w.alternate, K = $ !== null && $.memoizedState !== null || vt;
          $ = ul;
          var oe = vt;
          if (ul = I, (vt = K) && !oe) for (ve = w; ve !== null; ) I = ve, K = I.child, I.tag === 22 && I.memoizedState !== null ? Hx(w) : K !== null ? (K.return = I, ve = K) : Hx(w);
          for (; E !== null; ) ve = E, $x(E), E = E.sibling;
          ve = w, ul = $, vt = oe;
        }
        Bx(r);
      } else (w.subtreeFlags & 8772) !== 0 && E !== null ? (E.return = w, ve = E) : Bx(r);
    }
  }
  function Bx(r) {
    for (; ve !== null; ) {
      var s = ve;
      if ((s.flags & 8772) !== 0) {
        var c = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              vt || cl(5, s);
              break;
            case 1:
              var g = s.stateNode;
              if (s.flags & 4 && !vt) if (c === null) g.componentDidMount();
              else {
                var w = s.elementType === s.type ? c.memoizedProps : ln(s.type, c.memoizedProps);
                g.componentDidUpdate(w, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var E = s.updateQueue;
              E !== null && Vw(s, E, g);
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
                Vw(s, I, c);
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
          vt || s.flags & 512 && Hf(s);
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
  function Vx(r) {
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
  function Hx(r) {
    for (; ve !== null; ) {
      var s = ve;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var c = s.return;
            try {
              cl(4, s);
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
              Hf(s);
            } catch (K) {
              Ze(s, E, K);
            }
            break;
          case 5:
            var I = s.return;
            try {
              Hf(s);
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
  var N2 = Math.ceil, fl = R.ReactCurrentDispatcher, Gf = R.ReactCurrentOwner, Jt = R.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, dt = 0, Dt = 0, Xo = pr(0), it = 0, xs = null, Zr = 0, dl = 0, Yf = 0, bs = null, Ct = null, Kf = 0, Qo = 1 / 0, Yn = null, hl = !1, Xf = null, xr = null, pl = !1, br = null, gl = 0, _s = 0, Qf = null, ml = -1, vl = 0;
  function xt() {
    return (Oe & 6) !== 0 ? Ye() : ml !== -1 ? ml : ml = Ye();
  }
  function _r(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && dt !== 0 ? dt & -dt : f2.transition !== null ? (vl === 0 && (vl = ka()), vl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : U0(r.type)), r);
  }
  function fn(r, s, c, g) {
    if (50 < _s) throw _s = 0, Qf = null, Error(n(185));
    sr(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (dl |= c), it === 4 && Sr(r, dt)), kt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Qo = Ye() + 500, Wa && mr()));
  }
  function kt(r, s) {
    var c = r.callbackNode;
    Ic(r, s);
    var g = To(r, r === ut ? dt : 0);
    if (g === 0) c !== null && _a(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && _a(c), s === 1) r.tag === 0 ? c2(Ux.bind(null, r)) : Iw(Ux.bind(null, r)), s2(function() {
        (Oe & 6) === 0 && mr();
      }), c = null;
      else {
        switch (q0(g)) {
          case 1:
            c = Wi;
            break;
          case 4:
            c = Ea;
            break;
          case 16:
            c = Ro;
            break;
          case 536870912:
            c = Ca;
            break;
          default:
            c = Ro;
        }
        c = e1(c, Wx.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function Wx(r, s) {
    if (ml = -1, vl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Zo() && r.callbackNode !== c) return null;
    var g = To(r, r === ut ? dt : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = yl(r, g);
    else {
      s = g;
      var w = Oe;
      Oe |= 2;
      var E = Yx();
      (ut !== r || dt !== s) && (Yn = null, Qo = Ye() + 500, eo(r, s));
      do
        try {
          I2();
          break;
        } catch ($) {
          Gx(r, $);
        }
      while (!0);
      gf(), fl.current = E, Oe = w, tt !== null ? s = 0 : (ut = null, dt = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (w = Hr(r), w !== 0 && (g = w, s = Zf(r, w))), s === 1) throw c = xs, eo(r, 0), Sr(r, g), kt(r, Ye()), c;
      if (s === 6) Sr(r, g);
      else {
        if (w = r.current.alternate, (g & 30) === 0 && !P2(w) && (s = yl(r, g), s === 2 && (E = Hr(r), E !== 0 && (g = E, s = Zf(r, E))), s === 1)) throw c = xs, eo(r, 0), Sr(r, g), kt(r, Ye()), c;
        switch (r.finishedWork = w, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            to(r, Ct, Yn);
            break;
          case 3:
            if (Sr(r, g), (g & 130023424) === g && (s = Kf + 500 - Ye(), 10 < s)) {
              if (To(r, 0) !== 0) break;
              if (w = r.suspendedLanes, (w & g) !== g) {
                xt(), r.pingedLanes |= r.suspendedLanes & w;
                break;
              }
              r.timeoutHandle = rf(to.bind(null, r, Ct, Yn), s);
              break;
            }
            to(r, Ct, Yn);
            break;
          case 4:
            if (Sr(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, w = -1; 0 < g; ) {
              var I = 31 - At(g);
              E = 1 << I, I = s[I], I > w && (w = I), g &= ~E;
            }
            if (g = w, g = Ye() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * N2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = rf(to.bind(null, r, Ct, Yn), g);
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
    return kt(r, Ye()), r.callbackNode === c ? Wx.bind(null, r) : null;
  }
  function Zf(r, s) {
    var c = bs;
    return r.current.memoizedState.isDehydrated && (eo(r, s).flags |= 256), r = yl(r, s), r !== 2 && (s = Ct, Ct = c, s !== null && Jf(s)), r;
  }
  function Jf(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function P2(r) {
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
    for (s &= ~Yf, s &= ~dl, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - At(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function Ux(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    Zo();
    var s = To(r, 0);
    if ((s & 1) === 0) return kt(r, Ye()), null;
    var c = yl(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = Hr(r);
      g !== 0 && (s = g, c = Zf(r, g));
    }
    if (c === 1) throw c = xs, eo(r, 0), Sr(r, s), kt(r, Ye()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, to(r, Ct, Yn), kt(r, Ye()), null;
  }
  function ed(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Qo = Ye() + 500, Wa && mr());
    }
  }
  function Jr(r) {
    br !== null && br.tag === 0 && (Oe & 6) === 0 && Zo();
    var s = Oe;
    Oe |= 1;
    var c = Jt.transition, g = qe;
    try {
      if (Jt.transition = null, qe = 1, r) return r();
    } finally {
      qe = g, Jt.transition = c, Oe = s, (Oe & 6) === 0 && mr();
    }
  }
  function td() {
    Dt = Xo.current, $e(Xo);
  }
  function eo(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, i2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (cf(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && Va();
          break;
        case 3:
          Go(), $e(_t), $e(pt), Sf();
          break;
        case 5:
          bf(g);
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
          mf(g.type._context);
          break;
        case 22:
        case 23:
          td();
      }
      c = c.return;
    }
    if (ut = r, tt = r = Er(r.current, null), dt = Dt = s, it = 0, xs = null, Yf = dl = Zr = 0, Ct = bs = null, Kr !== null) {
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
  function Gx(r, s) {
    do {
      var c = tt;
      try {
        if (gf(), tl.current = il, nl) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var w = g.queue;
            w !== null && (w.pending = null), g = g.next;
          }
          nl = !1;
        }
        if (Qr = 0, lt = ot = Xe = null, ps = !1, gs = 0, Gf.current = null, c === null || c.return === null) {
          it = 1, xs = s, tt = null;
          break;
        }
        e: {
          var E = r, I = c.return, $ = c, K = s;
          if (s = dt, $.flags |= 32768, K !== null && typeof K == "object" && typeof K.then == "function") {
            var oe = K, ue = $, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = yx(I);
            if (ge !== null) {
              ge.flags &= -257, wx(ge, I, $, E, s), ge.mode & 1 && vx(E, oe, s), s = ge, K = oe;
              var we = s.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(K), s.updateQueue = Se;
              } else we.add(K);
              break e;
            } else {
              if ((s & 1) === 0) {
                vx(E, oe, s), nd();
                break e;
              }
              K = Error(n(426));
            }
          } else if (Ve && $.mode & 1) {
            var et = yx(I);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), wx(et, I, $, E, s), hf(Yo(K, $));
              break e;
            }
          }
          E = K = Yo(K, $), it !== 4 && (it = 2), bs === null ? bs = [E] : bs.push(E), E = I;
          do {
            switch (E.tag) {
              case 3:
                E.flags |= 65536, s &= -s, E.lanes |= s;
                var ne = gx(E, K, s);
                Bw(E, ne);
                break e;
              case 1:
                $ = K;
                var J = E.type, re = E.stateNode;
                if ((E.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (xr === null || !xr.has(re)))) {
                  E.flags |= 65536, s &= -s, E.lanes |= s;
                  var he = mx(E, $, s);
                  Bw(E, he);
                  break e;
                }
            }
            E = E.return;
          } while (E !== null);
        }
        Xx(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yx() {
    var r = fl.current;
    return fl.current = il, r === null ? il : r;
  }
  function nd() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Zr & 268435455) === 0 && (dl & 268435455) === 0 || Sr(ut, dt);
  }
  function yl(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = Yx();
    (ut !== r || dt !== s) && (Yn = null, eo(r, s));
    do
      try {
        T2();
        break;
      } catch (w) {
        Gx(r, w);
      }
    while (!0);
    if (gf(), Oe = c, fl.current = g, tt !== null) throw Error(n(261));
    return ut = null, dt = 0, it;
  }
  function T2() {
    for (; tt !== null; ) Kx(tt);
  }
  function I2() {
    for (; tt !== null && !Sc(); ) Kx(tt);
  }
  function Kx(r) {
    var s = Jx(r.alternate, r, Dt);
    r.memoizedProps = r.pendingProps, s === null ? Xx(r) : tt = s, Gf.current = null;
  }
  function Xx(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = S2(c, s, Dt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = E2(c, s), c !== null) {
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
      Jt.transition = null, qe = 1, A2(r, s, c, g);
    } finally {
      Jt.transition = w, qe = g;
    }
    return null;
  }
  function A2(r, s, c, g) {
    do
      Zo();
    while (br !== null);
    if ((Oe & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var w = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var E = c.lanes | c.childLanes;
    if (dM(r, E), r === ut && (tt = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || pl || (pl = !0, e1(Ro, function() {
      return Zo(), null;
    })), E = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || E) {
      E = Jt.transition, Jt.transition = null;
      var I = qe;
      qe = 1;
      var $ = Oe;
      Oe |= 4, Gf.current = null, k2(r, c), zx(c, r), ZM(tf), Pa = !!ef, tf = ef = null, r.current = c, R2(c), Sa(), Oe = $, qe = I, Jt.transition = E;
    } else r.current = c;
    if (pl && (pl = !1, br = r, gl = w), E = r.pendingLanes, E === 0 && (xr = null), kc(c.stateNode), kt(r, Ye()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) w = s[c], g(w.value, { componentStack: w.stack, digest: w.digest });
    if (hl) throw hl = !1, r = Xf, Xf = null, r;
    return (gl & 1) !== 0 && r.tag !== 0 && Zo(), E = r.pendingLanes, (E & 1) !== 0 ? r === Qf ? _s++ : (_s = 0, Qf = r) : _s = 0, mr(), null;
  }
  function Zo() {
    if (br !== null) {
      var r = q0(gl), s = Jt.transition, c = qe;
      try {
        if (Jt.transition = null, qe = 16 > r ? 16 : r, br === null) var g = !1;
        else {
          if (r = br, br = null, gl = 0, (Oe & 6) !== 0) throw Error(n(331));
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
                      if (Lx(ue), ue === oe) {
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
                    cl(9, $);
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
          if (Oe = w, mr(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
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
  function Qx(r, s, c) {
    s = Yo(c, s), s = gx(r, s, 1), r = yr(r, s, 1), s = xt(), r !== null && (sr(r, 1, s), kt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) Qx(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        Qx(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (xr === null || !xr.has(g))) {
          r = Yo(c, r), r = mx(s, r, 1), s = yr(s, r, 1), r = xt(), s !== null && (sr(s, 1, r), kt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function M2(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = xt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ye() - Kf ? eo(r, 0) : Yf |= c), kt(r, s);
  }
  function Zx(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Po, Po <<= 1, (Po & 130023424) === 0 && (Po = 4194304)));
    var c = xt();
    r = Wn(r, s), r !== null && (sr(r, s, c), kt(r, c));
  }
  function O2(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), Zx(r, c);
  }
  function L2(r, s) {
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
    g !== null && g.delete(s), Zx(r, c);
  }
  var Jx;
  Jx = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || _t.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Et = !1, _2(r, s, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, Ve && (s.flags & 1048576) !== 0 && Aw(s, Ga, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        ll(r, s), r = s.pendingProps;
        var w = zo(s, pt.current);
        Uo(s, c), w = kf(null, s, g, r, w, c);
        var E = Rf();
        return s.flags |= 1, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, St(g) ? (E = !0, Ha(s)) : E = !1, s.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, wf(s), w.updater = sl, s.stateNode = w, w._reactInternals = s, Mf(s, g, r, c), s = jf(null, s, g, !0, E, c)) : (s.tag = 0, Ve && E && uf(s), wt(null, s, w, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (ll(r, s), r = s.pendingProps, w = g._init, g = w(g._payload), s.type = g, w = s.tag = j2(g), r = ln(g, r), w) {
            case 0:
              s = Df(null, s, g, r, c);
              break e;
            case 1:
              s = Cx(null, s, g, r, c);
              break e;
            case 11:
              s = xx(null, s, g, r, c);
              break e;
            case 14:
              s = bx(null, s, g, ln(g.type, r), c);
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
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Df(r, s, g, w, c);
      case 1:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), Cx(r, s, g, w, c);
      case 3:
        e: {
          if (kx(s), r === null) throw Error(n(387));
          g = s.pendingProps, E = s.memoizedState, w = E.element, $w(r, s), Ja(s, g, null, c);
          var I = s.memoizedState;
          if (g = I.element, E.isDehydrated) if (E = { element: g, isDehydrated: !1, cache: I.cache, pendingSuspenseBoundaries: I.pendingSuspenseBoundaries, transitions: I.transitions }, s.updateQueue.baseState = E, s.memoizedState = E, s.flags & 256) {
            w = Yo(Error(n(423)), s), s = Rx(r, s, g, c, w);
            break e;
          } else if (g !== w) {
            w = Yo(Error(n(424)), s), s = Rx(r, s, g, c, w);
            break e;
          } else for (Lt = hr(s.stateNode.containerInfo.firstChild), Ot = s, Ve = !0, an = null, c = Fw(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
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
        return Hw(s), r === null && df(s), g = s.type, w = s.pendingProps, E = r !== null ? r.memoizedProps : null, I = w.children, nf(g, w) ? I = null : E !== null && nf(g, E) && (s.flags |= 32), Ex(r, s), wt(r, s, I, c), s.child;
      case 6:
        return r === null && df(s), null;
      case 13:
        return Nx(r, s, c);
      case 4:
        return xf(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Ho(s, null, g, c) : wt(r, s, g, c), s.child;
      case 11:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), xx(r, s, g, w, c);
      case 7:
        return wt(r, s, s.pendingProps, c), s.child;
      case 8:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, w = s.pendingProps, E = s.memoizedProps, I = w.value, Fe(Xa, g._currentValue), g._currentValue = I, E !== null) if (sn(E.value, I)) {
            if (E.children === w.children && !_t.current) {
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
                  E.lanes |= c, K = E.alternate, K !== null && (K.lanes |= c), vf(
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
              I.lanes |= c, $ = I.alternate, $ !== null && ($.lanes |= c), vf(I, c, s), I = E.sibling;
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
        return g = s.type, w = ln(g, s.pendingProps), w = ln(g.type, w), bx(r, s, g, w, c);
      case 15:
        return _x(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : ln(g, w), ll(r, s), s.tag = 1, St(g) ? (r = !0, Ha(s)) : r = !1, Uo(s, c), hx(s, g, w), Mf(s, g, w, c), jf(null, s, g, !0, r, c);
      case 19:
        return Tx(r, s, c);
      case 22:
        return Sx(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function e1(r, s) {
    return ba(r, s);
  }
  function D2(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(r, s, c, g) {
    return new D2(r, s, c, g);
  }
  function rd(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function j2(r) {
    if (typeof r == "function") return rd(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === V) return 11;
      if (r === H) return 14;
    }
    return 2;
  }
  function Er(r, s) {
    var c = r.alternate;
    return c === null ? (c = en(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function wl(r, s, c, g, w, E) {
    var I = 2;
    if (g = r, typeof r == "function") rd(r) && (I = 1);
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
      case Y:
        return xl(c, w, E, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case G:
            I = 10;
            break e;
          case F:
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
  function xl(r, s, c, g) {
    return r = en(22, r, g, s), r.elementType = Y, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function od(r, s, c) {
    return r = en(6, r, null, s), r.lanes = c, r;
  }
  function id(r, s, c) {
    return s = en(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function q2(r, s, c, g, w) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ui(0), this.expirationTimes = Ui(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ui(0), this.identifierPrefix = g, this.onRecoverableError = w, this.mutableSourceEagerHydrationData = null;
  }
  function sd(r, s, c, g, w, E, I, $, K) {
    return r = new q2(r, s, c, $, K), s === 1 ? (s = 1, E === !0 && (s |= 8)) : s = 0, E = en(3, null, null, s), r.current = E, E.stateNode = r, E.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wf(E), r;
  }
  function F2(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function t1(r) {
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
      if (St(c)) return Pw(r, c, s);
    }
    return s;
  }
  function n1(r, s, c, g, w, E, I, $, K) {
    return r = sd(c, g, !0, r, w, E, I, $, K), r.context = t1(null), c = r.current, g = xt(), w = _r(c), E = Un(g, w), E.callback = s ?? null, yr(c, E, w), r.current.lanes = w, sr(r, w, g), kt(r, g), r;
  }
  function bl(r, s, c, g) {
    var w = s.current, E = xt(), I = _r(w);
    return c = t1(c), s.context === null ? s.context = c : s.pendingContext = c, s = Un(E, I), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = yr(w, s, I), r !== null && (fn(r, w, I, E), Za(r, w, I)), I;
  }
  function _l(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function r1(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function ad(r, s) {
    r1(r, s), (r = r.alternate) && r1(r, s);
  }
  function z2() {
    return null;
  }
  var o1 = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function ld(r) {
    this._internalRoot = r;
  }
  Sl.prototype.render = ld.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    bl(r, s, null, null);
  }, Sl.prototype.unmount = ld.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      Jr(function() {
        bl(null, r, null, null);
      }), s[$n] = null;
    }
  };
  function Sl(r) {
    this._internalRoot = r;
  }
  Sl.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = $0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < cr.length && s !== 0 && s < cr[c].priority; c++) ;
      cr.splice(c, 0, r), c === 0 && H0(r);
    }
  };
  function ud(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function El(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function i1() {
  }
  function $2(r, s, c, g, w) {
    if (w) {
      if (typeof g == "function") {
        var E = g;
        g = function() {
          var oe = _l(I);
          E.call(oe);
        };
      }
      var I = n1(s, g, r, 0, null, !1, !1, "", i1);
      return r._reactRootContainer = I, r[$n] = I.current, ss(r.nodeType === 8 ? r.parentNode : r), Jr(), I;
    }
    for (; w = r.lastChild; ) r.removeChild(w);
    if (typeof g == "function") {
      var $ = g;
      g = function() {
        var oe = _l(K);
        $.call(oe);
      };
    }
    var K = sd(r, 0, !1, null, null, !1, !1, "", i1);
    return r._reactRootContainer = K, r[$n] = K.current, ss(r.nodeType === 8 ? r.parentNode : r), Jr(function() {
      bl(s, K, c, g);
    }), K;
  }
  function Cl(r, s, c, g, w) {
    var E = c._reactRootContainer;
    if (E) {
      var I = E;
      if (typeof w == "function") {
        var $ = w;
        w = function() {
          var K = _l(I);
          $.call(K);
        };
      }
      bl(s, I, r, w);
    } else I = $2(c, s, r, w, g);
    return _l(I);
  }
  F0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = En(s.pendingLanes);
          c !== 0 && (Ac(s, c | 1), kt(s, Ye()), (Oe & 6) === 0 && (Qo = Ye() + 500, mr()));
        }
        break;
      case 13:
        Jr(function() {
          var g = Wn(r, 1);
          if (g !== null) {
            var w = xt();
            fn(g, r, 1, w);
          }
        }), ad(r, 1);
    }
  }, Mc = function(r) {
    if (r.tag === 13) {
      var s = Wn(r, 134217728);
      if (s !== null) {
        var c = xt();
        fn(s, r, 134217728, c);
      }
      ad(r, 134217728);
    }
  }, z0 = function(r) {
    if (r.tag === 13) {
      var s = _r(r), c = Wn(r, s);
      if (c !== null) {
        var g = xt();
        fn(c, r, s, g);
      }
      ad(r, s);
    }
  }, $0 = function() {
    return qe;
  }, B0 = function(r, s) {
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
              var w = Ba(g);
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
  }, ma = ed, va = Jr;
  var B2 = { usingClientEntryPoint: !1, Events: [us, qo, Ba, pa, ga, ed] }, Ss = { findFiberByHostInstance: Wr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, V2 = { bundleType: Ss.bundleType, version: Ss.version, rendererPackageName: Ss.rendererPackageName, rendererConfig: Ss.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: R.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = wa(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: Ss.findFiberByHostInstance || z2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kl.isDisabled && kl.supportsFiber) try {
      Vr = kl.inject(V2), Yt = kl;
    } catch {
    }
  }
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B2, Rt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ud(s)) throw Error(n(200));
    return F2(r, s, null, c);
  }, Rt.createRoot = function(r, s) {
    if (!ud(r)) throw Error(n(299));
    var c = !1, g = "", w = o1;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), s = sd(r, 1, !1, null, null, c, !1, g, w), r[$n] = s.current, ss(r.nodeType === 8 ? r.parentNode : r), new ld(s);
  }, Rt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = wa(s), r = r === null ? null : r.stateNode, r;
  }, Rt.flushSync = function(r) {
    return Jr(r);
  }, Rt.hydrate = function(r, s, c) {
    if (!El(s)) throw Error(n(200));
    return Cl(null, r, s, !0, c);
  }, Rt.hydrateRoot = function(r, s, c) {
    if (!ud(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, w = !1, E = "", I = o1;
    if (c != null && (c.unstable_strictMode === !0 && (w = !0), c.identifierPrefix !== void 0 && (E = c.identifierPrefix), c.onRecoverableError !== void 0 && (I = c.onRecoverableError)), s = n1(s, null, r, 1, c ?? null, w, !1, E, I), r[$n] = s.current, ss(r), g) for (r = 0; r < g.length; r++) c = g[r], w = c._getVersion, w = w(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, w] : s.mutableSourceEagerHydrationData.push(
      c,
      w
    );
    return new Sl(s);
  }, Rt.render = function(r, s, c) {
    if (!El(s)) throw Error(n(200));
    return Cl(null, r, s, !1, c);
  }, Rt.unmountComponentAtNode = function(r) {
    if (!El(r)) throw Error(n(40));
    return r._reactRootContainer ? (Jr(function() {
      Cl(null, null, r, !1, function() {
        r._reactRootContainer = null, r[$n] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = ed, Rt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!El(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return Cl(r, s, c, !1, g);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
}
var h1;
function zR() {
  if (h1) return dd.exports;
  h1 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), dd.exports = J2(), dd.exports;
}
var p1;
function eO() {
  if (p1) return Pl;
  p1 = 1;
  var e = zR();
  return Pl.createRoot = e.createRoot, Pl.hydrateRoot = e.hydrateRoot, Pl;
}
var tO = eO();
let $R = k.createContext(
  /** @type {any} */
  null
);
function nO() {
  let e = k.useContext($R);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function rO() {
  return nO().model;
}
function ro(e) {
  let t = rO(), n = k.useSyncExternalStore(
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
function oO(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = tO.createRoot(t);
    return i.render(
      k.createElement(
        k.StrictMode,
        null,
        k.createElement(
          $R.Provider,
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
var iO = { value: () => {
} };
function ku() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Gl(n);
}
function Gl(e) {
  this._ = e;
}
function sO(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Gl.prototype = ku.prototype = {
  constructor: Gl,
  on: function(e, t) {
    var n = this._, o = sO(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = aO(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = g1(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = g1(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Gl(e);
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
function aO(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function g1(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = iO, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var oy = "http://www.w3.org/1999/xhtml";
const m1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: oy,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ru(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), m1.hasOwnProperty(t) ? { space: m1[t], local: e } : e;
}
function lO(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === oy && t.documentElement.namespaceURI === oy ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function uO(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function BR(e) {
  var t = Ru(e);
  return (t.local ? uO : lO)(t);
}
function cO() {
}
function My(e) {
  return e == null ? cO : function() {
    return this.querySelector(e);
  };
}
function fO(e) {
  typeof e != "function" && (e = My(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new Bt(o, this._parents);
}
function dO(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function hO() {
  return [];
}
function VR(e) {
  return e == null ? hO : function() {
    return this.querySelectorAll(e);
  };
}
function pO(e) {
  return function() {
    return dO(e.apply(this, arguments));
  };
}
function gO(e) {
  typeof e == "function" ? e = pO(e) : e = VR(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new Bt(o, i);
}
function HR(e) {
  return function() {
    return this.matches(e);
  };
}
function WR(e) {
  return function(t) {
    return t.matches(e);
  };
}
var mO = Array.prototype.find;
function vO(e) {
  return function() {
    return mO.call(this.children, e);
  };
}
function yO() {
  return this.firstElementChild;
}
function wO(e) {
  return this.select(e == null ? yO : vO(typeof e == "function" ? e : WR(e)));
}
var xO = Array.prototype.filter;
function bO() {
  return Array.from(this.children);
}
function _O(e) {
  return function() {
    return xO.call(this.children, e);
  };
}
function SO(e) {
  return this.selectAll(e == null ? bO : _O(typeof e == "function" ? e : WR(e)));
}
function EO(e) {
  typeof e != "function" && (e = HR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Bt(o, this._parents);
}
function UR(e) {
  return new Array(e.length);
}
function CO() {
  return new Bt(this._enter || this._groups.map(UR), this._parents);
}
function tu(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
tu.prototype = {
  constructor: tu,
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
function kO(e) {
  return function() {
    return e;
  };
}
function RO(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new tu(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function NO(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new tu(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function PO(e) {
  return e.__data__;
}
function TO(e, t) {
  if (!arguments.length) return Array.from(this, PO);
  var n = t ? NO : RO, o = this._parents, i = this._groups;
  typeof e != "function" && (e = kO(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = IO(e.call(h, h && h.__data__, d, o)), S = v.length, y = u[d] = new Array(S), x = l[d] = new Array(S), _ = f[d] = new Array(m);
    n(h, p, y, x, _, v, t);
    for (var C = 0, b = 0, R, P; C < S; ++C)
      if (R = y[C]) {
        for (C >= b && (b = C + 1); !(P = x[b]) && ++b < S; ) ;
        R._next = P || null;
      }
  }
  return l = new Bt(l, o), l._enter = u, l._exit = f, l;
}
function IO(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function AO() {
  return new Bt(this._exit || this._groups.map(UR), this._parents);
}
function MO(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function OO(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, S = 0; S < p; ++S)
      (v = d[S] || h[S]) && (m[S] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new Bt(u, this._parents);
}
function LO() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function DO(e) {
  e || (e = jO);
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
function jO(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qO() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function FO() {
  return Array.from(this);
}
function zO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function $O() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function BO() {
  return !this.node();
}
function VO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function HO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function WO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function UO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function GO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function YO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function KO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function XO(e, t) {
  var n = Ru(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? WO : HO : typeof t == "function" ? n.local ? KO : YO : n.local ? GO : UO)(n, t));
}
function GR(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function QO(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ZO(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function JO(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function eL(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? QO : typeof t == "function" ? JO : ZO)(e, t, n ?? "")) : hi(this.node(), e);
}
function hi(e, t) {
  return e.style.getPropertyValue(t) || GR(e).getComputedStyle(e, null).getPropertyValue(t);
}
function tL(e) {
  return function() {
    delete this[e];
  };
}
function nL(e, t) {
  return function() {
    this[e] = t;
  };
}
function rL(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function oL(e, t) {
  return arguments.length > 1 ? this.each((t == null ? tL : typeof t == "function" ? rL : nL)(e, t)) : this.node()[e];
}
function YR(e) {
  return e.trim().split(/^|\s+/);
}
function Oy(e) {
  return e.classList || new KR(e);
}
function KR(e) {
  this._node = e, this._names = YR(e.getAttribute("class") || "");
}
KR.prototype = {
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
function XR(e, t) {
  for (var n = Oy(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function QR(e, t) {
  for (var n = Oy(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function iL(e) {
  return function() {
    XR(this, e);
  };
}
function sL(e) {
  return function() {
    QR(this, e);
  };
}
function aL(e, t) {
  return function() {
    (t.apply(this, arguments) ? XR : QR)(this, e);
  };
}
function lL(e, t) {
  var n = YR(e + "");
  if (arguments.length < 2) {
    for (var o = Oy(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? aL : t ? iL : sL)(n, t));
}
function uL() {
  this.textContent = "";
}
function cL(e) {
  return function() {
    this.textContent = e;
  };
}
function fL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function dL(e) {
  return arguments.length ? this.each(e == null ? uL : (typeof e == "function" ? fL : cL)(e)) : this.node().textContent;
}
function hL() {
  this.innerHTML = "";
}
function pL(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gL(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function mL(e) {
  return arguments.length ? this.each(e == null ? hL : (typeof e == "function" ? gL : pL)(e)) : this.node().innerHTML;
}
function vL() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yL() {
  return this.each(vL);
}
function wL() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xL() {
  return this.each(wL);
}
function bL(e) {
  var t = typeof e == "function" ? e : BR(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function _L() {
  return null;
}
function SL(e, t) {
  var n = typeof e == "function" ? e : BR(e), o = t == null ? _L : typeof t == "function" ? t : My(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function EL() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function CL() {
  return this.each(EL);
}
function kL() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function RL() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function NL(e) {
  return this.select(e ? RL : kL);
}
function PL(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function TL(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function IL(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function AL(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function ML(e, t, n) {
  return function() {
    var o = this.__on, i, a = TL(t);
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
function OL(e, t, n) {
  var o = IL(e + ""), i, a = o.length, l;
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
  for (u = t ? ML : AL, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function ZR(e, t, n) {
  var o = GR(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function LL(e, t) {
  return function() {
    return ZR(this, e, t);
  };
}
function DL(e, t) {
  return function() {
    return ZR(this, e, t.apply(this, arguments));
  };
}
function jL(e, t) {
  return this.each((typeof t == "function" ? DL : LL)(e, t));
}
function* qL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var JR = [null];
function Bt(e, t) {
  this._groups = e, this._parents = t;
}
function Zs() {
  return new Bt([[document.documentElement]], JR);
}
function FL() {
  return this;
}
Bt.prototype = Zs.prototype = {
  constructor: Bt,
  select: fO,
  selectAll: gO,
  selectChild: wO,
  selectChildren: SO,
  filter: EO,
  data: TO,
  enter: CO,
  exit: AO,
  join: MO,
  merge: OO,
  selection: FL,
  order: LO,
  sort: DO,
  call: qO,
  nodes: FO,
  node: zO,
  size: $O,
  empty: BO,
  each: VO,
  attr: XO,
  style: eL,
  property: oL,
  classed: lL,
  text: dL,
  html: mL,
  raise: yL,
  lower: xL,
  append: bL,
  insert: SL,
  remove: CL,
  clone: NL,
  datum: PL,
  on: OL,
  dispatch: jL,
  [Symbol.iterator]: qL
};
function zt(e) {
  return typeof e == "string" ? new Bt([[document.querySelector(e)]], [document.documentElement]) : new Bt([[e]], JR);
}
function zL(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function hn(e, t) {
  if (e = zL(e), t === void 0 && (t = e.currentTarget), t) {
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
const $L = { passive: !1 }, Ds = { capture: !0, passive: !1 };
function gd(e) {
  e.stopImmediatePropagation();
}
function li(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function eN(e) {
  var t = e.document.documentElement, n = zt(e).on("dragstart.drag", li, Ds);
  "onselectstart" in t ? n.on("selectstart.drag", li, Ds) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function tN(e, t) {
  var n = e.document.documentElement, o = zt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", li, Ds), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Tl = (e) => () => e;
function iy(e, {
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
iy.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function BL(e) {
  return !e.ctrlKey && !e.button;
}
function VL() {
  return this.parentNode;
}
function HL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function WL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function nN() {
  var e = BL, t = VL, n = HL, o = WL, i = {}, a = ku("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(R) {
    R.on("mousedown.drag", v).filter(o).on("touchstart.drag", x).on("touchmove.drag", _, $L).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(R, P) {
    if (!(h || !e.call(this, R, P))) {
      var T = b(this, t.call(this, R, P), R, P, "mouse");
      T && (zt(R.view).on("mousemove.drag", S, Ds).on("mouseup.drag", y, Ds), eN(R.view), gd(R), d = !1, u = R.clientX, f = R.clientY, T("start", R));
    }
  }
  function S(R) {
    if (li(R), !d) {
      var P = R.clientX - u, T = R.clientY - f;
      d = P * P + T * T > p;
    }
    i.mouse("drag", R);
  }
  function y(R) {
    zt(R.view).on("mousemove.drag mouseup.drag", null), tN(R.view, d), li(R), i.mouse("end", R);
  }
  function x(R, P) {
    if (e.call(this, R, P)) {
      var T = R.changedTouches, A = t.call(this, R, P), O = T.length, j, G;
      for (j = 0; j < O; ++j)
        (G = b(this, A, R, P, T[j].identifier, T[j])) && (gd(R), G("start", R, T[j]));
    }
  }
  function _(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (li(R), O("drag", R, P[A]));
  }
  function C(R) {
    var P = R.changedTouches, T = P.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (gd(R), O("end", R, P[A]));
  }
  function b(R, P, T, A, O, j) {
    var G = a.copy(), F = hn(j || T, P), V, W, L;
    if ((L = n.call(R, new iy("beforestart", {
      sourceEvent: T,
      target: m,
      identifier: O,
      active: l,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return V = L.x - F[0] || 0, W = L.y - F[1] || 0, function H(q, Y, M) {
        var z = F, Q;
        switch (q) {
          case "start":
            i[O] = H, Q = l++;
            break;
          case "end":
            delete i[O], --l;
          // falls through
          case "drag":
            F = hn(M || Y, P), Q = l;
            break;
        }
        G.call(
          q,
          R,
          new iy(q, {
            sourceEvent: Y,
            subject: L,
            target: m,
            identifier: O,
            active: Q,
            x: F[0] + V,
            y: F[1] + W,
            dx: F[0] - z[0],
            dy: F[1] - z[1],
            dispatch: G
          }),
          A
        );
      };
  }
  return m.filter = function(R) {
    return arguments.length ? (e = typeof R == "function" ? R : Tl(!!R), m) : e;
  }, m.container = function(R) {
    return arguments.length ? (t = typeof R == "function" ? R : Tl(R), m) : t;
  }, m.subject = function(R) {
    return arguments.length ? (n = typeof R == "function" ? R : Tl(R), m) : n;
  }, m.touchable = function(R) {
    return arguments.length ? (o = typeof R == "function" ? R : Tl(!!R), m) : o;
  }, m.on = function() {
    var R = a.on.apply(a, arguments);
    return R === a ? m : R;
  }, m.clickDistance = function(R) {
    return arguments.length ? (p = (R = +R) * R, m) : Math.sqrt(p);
  }, m;
}
function Ly(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function rN(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function Js() {
}
var js = 0.7, nu = 1 / js, ui = "\\s*([+-]?\\d+)\\s*", qs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", An = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", UL = /^#([0-9a-f]{3,8})$/, GL = new RegExp(`^rgb\\(${ui},${ui},${ui}\\)$`), YL = new RegExp(`^rgb\\(${An},${An},${An}\\)$`), KL = new RegExp(`^rgba\\(${ui},${ui},${ui},${qs}\\)$`), XL = new RegExp(`^rgba\\(${An},${An},${An},${qs}\\)$`), QL = new RegExp(`^hsl\\(${qs},${An},${An}\\)$`), ZL = new RegExp(`^hsla\\(${qs},${An},${An},${qs}\\)$`), v1 = {
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
Ly(Js, co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: y1,
  // Deprecated! Use color.formatHex.
  formatHex: y1,
  formatHex8: JL,
  formatHsl: eD,
  formatRgb: w1,
  toString: w1
});
function y1() {
  return this.rgb().formatHex();
}
function JL() {
  return this.rgb().formatHex8();
}
function eD() {
  return oN(this).formatHsl();
}
function w1() {
  return this.rgb().formatRgb();
}
function co(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = UL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? x1(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Il(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Il(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = GL.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = YL.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = KL.exec(e)) ? Il(t[1], t[2], t[3], t[4]) : (t = XL.exec(e)) ? Il(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = QL.exec(e)) ? S1(t[1], t[2] / 100, t[3] / 100, 1) : (t = ZL.exec(e)) ? S1(t[1], t[2] / 100, t[3] / 100, t[4]) : v1.hasOwnProperty(e) ? x1(v1[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function x1(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Il(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Nt(e, t, n, o);
}
function tD(e) {
  return e instanceof Js || (e = co(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function sy(e, t, n, o) {
  return arguments.length === 1 ? tD(e) : new Nt(e, t, n, o ?? 1);
}
function Nt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Ly(Nt, sy, rN(Js, {
  brighter(e) {
    return e = e == null ? nu : Math.pow(nu, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? js : Math.pow(js, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(ao(this.r), ao(this.g), ao(this.b), ru(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: b1,
  // Deprecated! Use color.formatHex.
  formatHex: b1,
  formatHex8: nD,
  formatRgb: _1,
  toString: _1
}));
function b1() {
  return `#${so(this.r)}${so(this.g)}${so(this.b)}`;
}
function nD() {
  return `#${so(this.r)}${so(this.g)}${so(this.b)}${so((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _1() {
  const e = ru(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ao(this.r)}, ${ao(this.g)}, ${ao(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ru(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ao(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function so(e) {
  return e = ao(e), (e < 16 ? "0" : "") + e.toString(16);
}
function S1(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new pn(e, t, n, o);
}
function oN(e) {
  if (e instanceof pn) return new pn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Js || (e = co(e)), !e) return new pn();
  if (e instanceof pn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new pn(l, u, f, e.opacity);
}
function rD(e, t, n, o) {
  return arguments.length === 1 ? oN(e) : new pn(e, t, n, o ?? 1);
}
function pn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Ly(pn, rD, rN(Js, {
  brighter(e) {
    return e = e == null ? nu : Math.pow(nu, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? js : Math.pow(js, e), new pn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Nt(
      md(e >= 240 ? e - 240 : e + 120, i, o),
      md(e, i, o),
      md(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new pn(E1(this.h), Al(this.s), Al(this.l), ru(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ru(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${E1(this.h)}, ${Al(this.s) * 100}%, ${Al(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function E1(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Al(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function md(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Dy = (e) => () => e;
function oD(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function iD(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function sD(e) {
  return (e = +e) == 1 ? iN : function(t, n) {
    return n - t ? iD(t, n, e) : Dy(isNaN(t) ? n : t);
  };
}
function iN(e, t) {
  var n = t - e;
  return n ? oD(e, n) : Dy(isNaN(e) ? t : e);
}
const ou = (function e(t) {
  var n = sD(t);
  function o(i, a) {
    var l = n((i = sy(i)).r, (a = sy(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = iN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function aD(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function lD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function uD(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = Os(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function cD(e, t) {
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
function fD(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Os(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var ay = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vd = new RegExp(ay.source, "g");
function dD(e) {
  return function() {
    return e;
  };
}
function hD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function sN(e, t) {
  var n = ay.lastIndex = vd.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = ay.exec(e)) && (i = vd.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Pn(o, i) })), n = vd.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? hD(f[0].x) : dD(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function Os(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? Dy(t) : (n === "number" ? Pn : n === "string" ? (o = co(t)) ? (t = o, ou) : sN : t instanceof co ? ou : t instanceof Date ? cD : lD(t) ? aD : Array.isArray(t) ? uD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? fD : Pn)(e, t);
}
var C1 = 180 / Math.PI, ly = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function aN(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * C1,
    skewX: Math.atan(f) * C1,
    scaleX: l,
    scaleY: u
  };
}
var Ml;
function pD(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ly : aN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gD(e) {
  return e == null || (Ml || (Ml = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ml.setAttribute("transform", e), !(e = Ml.transform.baseVal.consolidate())) ? ly : (e = e.matrix, aN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function lN(e, t, n, o) {
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
var mD = lN(pD, "px, ", "px)", "deg)"), vD = lN(gD, ", ", ")", ")"), yD = 1e-12;
function k1(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wD(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function xD(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Yl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, S = p - f, y = v * v + S * S, x, _;
    if (y < yD)
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
        var O = A * _, j = k1(P), G = d / (n * C) * (j * xD(t * O + P) - wD(P));
        return [
          u + G * v,
          f + G * S,
          d * j / k1(t * O + P)
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
var pi = 0, Ns = 0, Cs = 0, uN = 1e3, iu, Ps, su = 0, fo = 0, Nu = 0, Fs = typeof performance == "object" && performance.now ? performance : Date, cN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function jy() {
  return fo || (cN(bD), fo = Fs.now() + Nu);
}
function bD() {
  fo = 0;
}
function au() {
  this._call = this._time = this._next = null;
}
au.prototype = fN.prototype = {
  constructor: au,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? jy() : +n) + (t == null ? 0 : +t), !this._next && Ps !== this && (Ps ? Ps._next = this : iu = this, Ps = this), this._call = e, this._time = n, uy();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, uy());
  }
};
function fN(e, t, n) {
  var o = new au();
  return o.restart(e, t, n), o;
}
function _D() {
  jy(), ++pi;
  for (var e = iu, t; e; )
    (t = fo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pi;
}
function R1() {
  fo = (su = Fs.now()) + Nu, pi = Ns = 0;
  try {
    _D();
  } finally {
    pi = 0, ED(), fo = 0;
  }
}
function SD() {
  var e = Fs.now(), t = e - su;
  t > uN && (Nu -= t, su = e);
}
function ED() {
  for (var e, t = iu, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : iu = n);
  Ps = e, uy(o);
}
function uy(e) {
  if (!pi) {
    Ns && (Ns = clearTimeout(Ns));
    var t = e - fo;
    t > 24 ? (e < 1 / 0 && (Ns = setTimeout(R1, e - Fs.now() - Nu)), Cs && (Cs = clearInterval(Cs))) : (Cs || (su = Fs.now(), Cs = setInterval(SD, uN)), pi = 1, cN(R1));
  }
}
function N1(e, t, n) {
  var o = new au();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var CD = ku("start", "end", "cancel", "interrupt"), kD = [], dN = 0, P1 = 1, cy = 2, Kl = 3, T1 = 4, fy = 5, Xl = 6;
function Pu(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  RD(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: CD,
    tween: kD,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: dN
  });
}
function qy(e, t) {
  var n = xn(e, t);
  if (n.state > dN) throw new Error("too late; already scheduled");
  return n;
}
function Dn(e, t) {
  var n = xn(e, t);
  if (n.state > Kl) throw new Error("too late; already running");
  return n;
}
function xn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function RD(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = fN(a, 0, n.time);
  function a(d) {
    n.state = P1, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== P1) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Kl) return N1(l);
        v.state === T1 ? (v.state = Xl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Xl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (N1(function() {
      n.state === Kl && (n.state = T1, n.timer.restart(u, n.delay, n.time), u(d));
    }), n.state = cy, n.on.call("start", e, e.__data__, n.index, n.group), n.state === cy) {
      for (n.state = Kl, i = new Array(m = n.tween.length), h = 0, p = -1; h < m; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = v);
      i.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = fy, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(e, h);
    n.state === fy && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Xl, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Ql(e, t) {
  var n = e.__transition, o, i, a = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        a = !1;
        continue;
      }
      i = o.state > cy && o.state < fy, o.state = Xl, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    a && delete e.__transition;
  }
}
function ND(e) {
  return this.each(function() {
    Ql(this, e);
  });
}
function PD(e, t) {
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
function TD(e, t, n) {
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
function ID(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = xn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? PD : TD)(n, e, t));
}
function Fy(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = Dn(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return xn(i, o).value[t];
  };
}
function hN(e, t) {
  var n;
  return (typeof t == "number" ? Pn : t instanceof co ? ou : (n = co(t)) ? (t = n, ou) : sN)(e, t);
}
function AD(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function MD(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function OD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function LD(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function DD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function jD(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function qD(e, t) {
  var n = Ru(e), o = n === "transform" ? vD : hN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? jD : DD)(n, o, Fy(this, "attr." + e, t)) : t == null ? (n.local ? MD : AD)(n) : (n.local ? LD : OD)(n, o, t));
}
function FD(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function zD(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function $D(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && zD(e, a)), n;
  }
  return i._value = t, i;
}
function BD(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && FD(e, a)), n;
  }
  return i._value = t, i;
}
function VD(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = Ru(e);
  return this.tween(n, (o.local ? $D : BD)(o, t));
}
function HD(e, t) {
  return function() {
    qy(this, e).delay = +t.apply(this, arguments);
  };
}
function WD(e, t) {
  return t = +t, function() {
    qy(this, e).delay = t;
  };
}
function UD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? HD : WD)(t, e)) : xn(this.node(), t).delay;
}
function GD(e, t) {
  return function() {
    Dn(this, e).duration = +t.apply(this, arguments);
  };
}
function YD(e, t) {
  return t = +t, function() {
    Dn(this, e).duration = t;
  };
}
function KD(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? GD : YD)(t, e)) : xn(this.node(), t).duration;
}
function XD(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Dn(this, e).ease = t;
  };
}
function QD(e) {
  var t = this._id;
  return arguments.length ? this.each(XD(t, e)) : xn(this.node(), t).ease;
}
function ZD(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Dn(this, e).ease = n;
  };
}
function JD(e) {
  if (typeof e != "function") throw new Error();
  return this.each(ZD(this._id, e));
}
function ej(e) {
  typeof e != "function" && (e = HR(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Zn(o, this._parents, this._name, this._id);
}
function tj(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Zn(l, this._parents, this._name, this._id);
}
function nj(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function rj(e, t, n) {
  var o, i, a = nj(t) ? qy : Dn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function oj(e, t) {
  var n = this._id;
  return arguments.length < 2 ? xn(this.node(), n).on.on(e) : this.each(rj(n, e, t));
}
function ij(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function sj() {
  return this.on("end.remove", ij(this._id));
}
function aj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = My(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, Pu(d[m], t, n, m, d, xn(h, n)));
  return new Zn(a, this._parents, t, n);
}
function lj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = VR(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, S = xn(h, n), y = 0, x = m.length; y < x; ++y)
          (v = m[y]) && Pu(v, t, n, y, m, S);
        a.push(m), l.push(h);
      }
  return new Zn(a, l, t, n);
}
var uj = Zs.prototype.constructor;
function cj() {
  return new uj(this._groups, this._parents);
}
function fj(e, t) {
  var n, o, i;
  return function() {
    var a = hi(this, e), l = (this.style.removeProperty(e), hi(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function pN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function dj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = hi(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function hj(e, t, n) {
  var o, i, a;
  return function() {
    var l = hi(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), hi(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function pj(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Dn(this, e), d = f.on, h = f.value[a] == null ? u || (u = pN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function gj(e, t, n) {
  var o = (e += "") == "transform" ? mD : hN;
  return t == null ? this.styleTween(e, fj(e, o)).on("end.style." + e, pN(e)) : typeof t == "function" ? this.styleTween(e, hj(e, o, Fy(this, "style." + e, t))).each(pj(this._id, e)) : this.styleTween(e, dj(e, o, t), n).on("end.style." + e, null);
}
function mj(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function vj(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && mj(e, l, n)), o;
  }
  return a._value = t, a;
}
function yj(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, vj(e, t, n ?? ""));
}
function wj(e) {
  return function() {
    this.textContent = e;
  };
}
function xj(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function bj(e) {
  return this.tween("text", typeof e == "function" ? xj(Fy(this, "text", e)) : wj(e == null ? "" : e + ""));
}
function _j(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Sj(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && _j(i)), t;
  }
  return o._value = e, o;
}
function Ej(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Sj(e));
}
function Cj() {
  for (var e = this._name, t = this._id, n = gN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = xn(f, t);
        Pu(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Zn(o, this._parents, e, n);
}
function kj() {
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
var Rj = 0;
function Zn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function gN() {
  return ++Rj;
}
var Kn = Zs.prototype;
Zn.prototype = {
  constructor: Zn,
  select: aj,
  selectAll: lj,
  selectChild: Kn.selectChild,
  selectChildren: Kn.selectChildren,
  filter: ej,
  merge: tj,
  selection: cj,
  transition: Cj,
  call: Kn.call,
  nodes: Kn.nodes,
  node: Kn.node,
  size: Kn.size,
  empty: Kn.empty,
  each: Kn.each,
  on: oj,
  attr: qD,
  attrTween: VD,
  style: gj,
  styleTween: yj,
  text: bj,
  textTween: Ej,
  remove: sj,
  tween: ID,
  delay: UD,
  duration: KD,
  ease: QD,
  easeVarying: JD,
  end: kj,
  [Symbol.iterator]: Kn[Symbol.iterator]
};
function Nj(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Pj = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nj
};
function Tj(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ij(e) {
  var t, n;
  e instanceof Zn ? (t = e._id, e = e._name) : (t = gN(), (n = Pj).time = jy(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && Pu(f, e, t, d, l, n || Tj(f, t));
  return new Zn(o, this._parents, e, t);
}
Zs.prototype.interrupt = ND;
Zs.prototype.transition = Ij;
const Ol = (e) => () => e;
function Aj(e, {
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
var Tu = new Qn(1, 0, 0);
mN.prototype = Qn.prototype;
function mN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Tu;
  return e.__zoom;
}
function yd(e) {
  e.stopImmediatePropagation();
}
function ks(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Mj(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Oj() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function I1() {
  return this.__zoom || Tu;
}
function Lj(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Dj() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function jj(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function vN() {
  var e = Mj, t = Oj, n = jj, o = Lj, i = Dj, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Yl, d = ku("start", "zoom", "end"), h, p, m, v = 500, S = 150, y = 0, x = 10;
  function _(L) {
    L.property("__zoom", I1).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", j).on("dblclick.zoom", G).filter(i).on("touchstart.zoom", F).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", W).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(L, H, q, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", I1), L !== M ? P(L, H, q, Y) : M.interrupt().each(function() {
      T(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, _.scaleBy = function(L, H, q, Y) {
    _.scaleTo(L, function() {
      var M = this.__zoom.k, z = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * z;
    }, q, Y);
  }, _.scaleTo = function(L, H, q, Y) {
    _.transform(L, function() {
      var M = t.apply(this, arguments), z = this.__zoom, Q = q == null ? R(M) : typeof q == "function" ? q.apply(this, arguments) : q, D = z.invert(Q), U = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(b(C(z, U), Q, D), M, l);
    }, q, Y);
  }, _.translateBy = function(L, H, q, Y) {
    _.transform(L, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof q == "function" ? q.apply(this, arguments) : q
      ), t.apply(this, arguments), l);
    }, null, Y);
  }, _.translateTo = function(L, H, q, Y, M) {
    _.transform(L, function() {
      var z = t.apply(this, arguments), Q = this.__zoom, D = Y == null ? R(z) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return n(Tu.translate(D[0], D[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof q == "function" ? -q.apply(this, arguments) : -q
      ), z, l);
    }, Y, M);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Qn(H, L.x, L.y);
  }
  function b(L, H, q) {
    var Y = H[0] - q[0] * L.k, M = H[1] - q[1] * L.k;
    return Y === L.x && M === L.y ? L : new Qn(L.k, Y, M);
  }
  function R(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function P(L, H, q, Y) {
    L.on("start.zoom", function() {
      T(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, z = arguments, Q = T(M, z).event(Y), D = t.apply(M, z), U = q == null ? R(D) : typeof q == "function" ? q.apply(M, z) : q, ie = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), B = M.__zoom, Z = typeof H == "function" ? H.apply(M, z) : H, ee = f(B.invert(U).concat(ie / B.k), Z.invert(U).concat(ie / Z.k));
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
        new Aj(L, {
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
    var q = T(this, H).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), z = hn(L);
    if (q.wheel)
      (q.mouse[0][0] !== z[0] || q.mouse[0][1] !== z[1]) && (q.mouse[1] = Y.invert(q.mouse[0] = z)), clearTimeout(q.wheel);
    else {
      if (Y.k === M) return;
      q.mouse = [z, Y.invert(z)], Ql(this), q.start();
    }
    ks(L), q.wheel = setTimeout(Q, S), q.zoom("mouse", n(b(C(Y, M), q.mouse[0], q.mouse[1]), q.extent, l));
    function Q() {
      q.wheel = null, q.end();
    }
  }
  function j(L, ...H) {
    if (m || !e.apply(this, arguments)) return;
    var q = L.currentTarget, Y = T(this, H, !0).event(L), M = zt(L.view).on("mousemove.zoom", U, !0).on("mouseup.zoom", ie, !0), z = hn(L, q), Q = L.clientX, D = L.clientY;
    eN(L.view), yd(L), Y.mouse = [z, this.__zoom.invert(z)], Ql(this), Y.start();
    function U(B) {
      if (ks(B), !Y.moved) {
        var Z = B.clientX - Q, ee = B.clientY - D;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event(B).zoom("mouse", n(b(Y.that.__zoom, Y.mouse[0] = hn(B, q), Y.mouse[1]), Y.extent, l));
    }
    function ie(B) {
      M.on("mousemove.zoom mouseup.zoom", null), tN(B.view, Y.moved), ks(B), Y.event(B).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom, Y = hn(L.changedTouches ? L.changedTouches[0] : L, this), M = q.invert(Y), z = q.k * (L.shiftKey ? 0.5 : 2), Q = n(b(C(q, z), Y, M), t.apply(this, H), l);
      ks(L), u > 0 ? zt(this).transition().duration(u).call(P, Q, Y, L) : zt(this).call(_.transform, Q, Y, L);
    }
  }
  function F(L, ...H) {
    if (e.apply(this, arguments)) {
      var q = L.touches, Y = q.length, M = T(this, H, L.changedTouches.length === Y).event(L), z, Q, D, U;
      for (yd(L), Q = 0; Q < Y; ++Q)
        D = q[Q], U = hn(D, this), U = [U, this.__zoom.invert(U), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== U[2] && (M.touch1 = U, M.taps = 0) : (M.touch0 = U, z = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), z && (M.taps < 2 && (p = U[0], h = setTimeout(function() {
        h = null;
      }, v)), Ql(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var q = T(this, H).event(L), Y = L.changedTouches, M = Y.length, z, Q, D, U;
      for (ks(L), z = 0; z < M; ++z)
        Q = Y[z], D = hn(Q, this), q.touch0 && q.touch0[2] === Q.identifier ? q.touch0[0] = D : q.touch1 && q.touch1[2] === Q.identifier && (q.touch1[0] = D);
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
      var q = T(this, H).event(L), Y = L.changedTouches, M = Y.length, z, Q;
      for (yd(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), z = 0; z < M; ++z)
        Q = Y[z], q.touch0 && q.touch0[2] === Q.identifier ? delete q.touch0 : q.touch1 && q.touch1[2] === Q.identifier && delete q.touch1;
      if (q.touch1 && !q.touch0 && (q.touch0 = q.touch1, delete q.touch1), q.touch0) q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (q.end(), q.taps === 2 && (Q = hn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < x)) {
        var D = zt(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : Ol(+L), _) : o;
  }, _.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : Ol(!!L), _) : e;
  }, _.touchable = function(L) {
    return arguments.length ? (i = typeof L == "function" ? L : Ol(!!L), _) : i;
  }, _.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : Ol([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), _) : t;
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
}, zs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], yN = ["Enter", " ", "Escape"], wN = {
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
var gi;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(gi || (gi = {}));
var lo;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(lo || (lo = {}));
var $s;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})($s || ($s = {}));
const xN = {
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
var lu;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(lu || (lu = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const A1 = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function bN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const _N = (e) => "id" in e && "source" in e && "target" in e, qj = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), zy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), ea = (e, t = [0, 0]) => {
  const { width: n, height: o } = tr(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, Fj = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : zy(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? uu(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Iu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Au(n);
}, ta = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Iu(n, uu(i)), o = !0);
  }), o ? Au(n) : { x: 0, y: 0, width: 0, height: 0 };
}, $y = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...ra(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, S = h.height ?? d.height ?? d.initialHeight ?? null, y = Bs(u, vi(d)), x = (v ?? 0) * (S ?? 0), _ = a && y > 0;
    (!d.internals.handleBounds || _ || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, zj = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function $j(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function Bj({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = $j(e, l), f = ta(u), d = By(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function SN({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
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
  else u && yi(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = yi(p) ? ho(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", On.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function Vj({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), S = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || S) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = zj(l, f);
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
const mi = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ho = (e = { x: 0, y: 0 }, t, n) => ({
  x: mi(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: mi(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function EN(e, t, n) {
  const { width: o, height: i } = tr(n), { x: a, y: l } = n.internals.positionAbsolute;
  return ho(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const M1 = (e, t, n) => e < t ? mi(Math.abs(e - t), 1, t) / t : e > n ? -mi(Math.abs(e - n), 1, t) / t : 0, CN = (e, t, n = 15, o = 40) => {
  const i = M1(e.x, o, t.width - o) * n, a = M1(e.y, o, t.height - o) * n;
  return [i, a];
}, Iu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), dy = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Au = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), vi = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = zy(e) ? e.internals.positionAbsolute : ea(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, uu = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = zy(e) ? e.internals.positionAbsolute : ea(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, kN = (e, t) => Au(Iu(dy(e), dy(t))), Bs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, O1 = (e) => gn(e.width) && gn(e.height) && gn(e.x) && gn(e.y), gn = (e) => !isNaN(e) && isFinite(e), Hj = (e, t) => {
}, na = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ra = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? na(u, l) : u;
}, cu = ({ x: e, y: t }, [n, o, i]) => ({
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
function Wj(e, t, n) {
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
function Uj(e, t, n, o, i, a) {
  const { x: l, y: u } = cu(e, [t, n, o]), { x: f, y: d } = cu({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const By = (e, t, n, o, i, a) => {
  const l = Wj(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = mi(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, S = n / 2 - m * h, y = Uj(e, v, S, h, t, n), x = {
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
function yi(e) {
  return e != null && e !== "parent";
}
function tr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function RN(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function NN(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function L1(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Gj() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function Yj(e) {
  return { ...wN, ...e || {} };
}
function Ls(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = mn(e), u = ra({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? na(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const Vy = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), PN = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Kj = ["INPUT", "SELECT", "TEXTAREA"];
function TN(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Kj.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const IN = (e) => "clientX" in e, mn = (e, t) => {
  var a, l;
  const n = IN(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, D1 = (e, t, n, o, i) => {
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
      ...Vy(l)
    };
  });
};
function AN({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Ll(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function j1({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - Ll(t - o, a), n];
    case ye.Right:
      return [t + Ll(o - t, a), n];
    case ye.Top:
      return [t, n - Ll(n - i, a)];
    case ye.Bottom:
      return [t, n + Ll(i - n, a)];
  }
}
function MN({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = j1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = j1({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, S] = AN({
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
function ON({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function Xj({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function Qj({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Iu(uu(e), uu(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return Bs(l, Au(a)) > 0;
}
const Zj = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, Jj = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), LN = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return _N(e) ? n = { ...e } : n = {
    ...e,
    id: Zj(e)
  }, Jj(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function DN({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = ON({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const q1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, eq = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, F1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function tq({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: o = ye.Top, center: i, offset: a, stepPosition: l }) {
  const u = q1[t], f = q1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = eq({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let S = [], y, x;
  const _ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , b, R] = ON({
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
    const O = { x: d.x + _.x, y: d.y + _.y }, j = { x: h.x + C.x, y: h.y + C.y }, G = Math.max(Math.abs(O.x - S[0].x), Math.abs(j.x - S[0].x)), F = Math.max(Math.abs(O.y - S[0].y), Math.abs(j.y - S[0].y));
    G >= F ? (y = (O.x + j.x) / 2, x = S[0].y) : (y = S[0].x, x = (O.y + j.y) / 2);
  }
  return [[
    e,
    { x: d.x + _.x, y: d.y + _.y },
    ...S,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, x, b, R];
}
function nq(e, t, n, o) {
  const i = Math.min(F1(e, t) / 2, F1(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function hy({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, S, y] = tq({
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
    return b > 0 && b < p.length - 1 ? R = nq(p[b - 1], C, p[b + 1], l) : R = `${b === 0 ? "M" : "L"}${C.x} ${C.y}`, _ += R, _;
  }, ""), m, v, S, y];
}
function z1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function rq(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!z1(t) || !z1(n))
    return null;
  const o = t.internals.handleBounds || $1(t.handles), i = n.internals.handleBounds || $1(n.handles), a = B1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = B1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === gi.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
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
function $1(e) {
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
function B1(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function py(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function oq(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = py(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const jN = 1e3, iq = 10, Hy = {
  nodeOrigin: [0, 0],
  nodeExtent: zs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, sq = {
  ...Hy,
  checkEquality: !0
};
function Wy(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function aq(e, t, n) {
  const o = Wy(Hy, n);
  for (const i of e.values())
    if (i.parentId)
      Uy(i, e, t, o);
    else {
      const a = ea(i, o.nodeOrigin), l = yi(i.extent) ? i.extent : o.nodeExtent, u = ho(a, l, tr(i));
      i.internals.positionAbsolute = u;
    }
}
function lq(e, t) {
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
function gy(e, t, n, o) {
  var d, h;
  const i = Wy(sq, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? jN : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = ea(p, i.nodeOrigin), S = yi(p.extent) ? p.extent : i.nodeExtent, y = ho(v, S, tr(p));
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
          handleBounds: lq(p, m),
          z: qN(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && Uy(m, t, n, o, a);
  }
  return l;
}
function uq(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Uy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = Wy(Hy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  uq(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * iq), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? jN : 0, { x: p, y: m, z: v } = cq(e, d, l, u, h), { positionAbsolute: S } = e.internals, y = p !== S.x || m !== S.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : S,
      z: v
    }
  });
}
function qN(e, t) {
  return (gn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function cq(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = tr(e), f = ea(e, n), d = yi(e.extent) ? ho(f, e.extent, u) : f;
  let h = ho({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = EN(h, u, t));
  const p = qN(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function Gy(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? vi(f), h = kN(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var b;
    const h = f.internals.positionAbsolute, p = tr(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, S = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), x = Math.max(p.height, Math.round(u.height)), _ = (y - p.width) * m[0], C = (x - p.height) * m[1];
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
function fq(e, t, n, o, i, a) {
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
    const S = Vy(m.nodeElement), y = v.measured.width !== S.width || v.measured.height !== S.height;
    if (!!(S.width && S.height && (y || !v.internals.handleBounds || m.force))) {
      const _ = m.nodeElement.getBoundingClientRect(), C = yi(v.extent) ? v.extent : a;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = EN(b, S, t.get(v.parentId)) : C && (b = ho(b, C, S));
      const R = {
        ...v,
        measured: S,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: D1("source", m.nodeElement, _, h, v.id),
            target: D1("target", m.nodeElement, _, h, v.id)
          }
        }
      };
      t.set(v.id, R), v.parentId && Uy(R, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: S
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: vi(R, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = Gy(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function dq({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
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
function V1(e, t, n, o, i, a) {
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
function FN(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: i, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: i, target: a, sourceHandle: l, targetHandle: u }, d = `${i}-${l}--${a}-${u}`, h = `${a}-${u}--${i}-${l}`;
    V1("source", f, h, e, i, l), V1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function zN(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : zN(n, t) : !1;
}
function H1(e, t, n) {
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
function hq(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !zN(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function wd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
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
function pq({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const a = {
    x: n - i.distance.x,
    y: o - i.distance.y
  }, l = na(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function gq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, S = !1, y = null;
  function x({ noDragClassName: C, handleSelector: b, domNode: R, isSelectable: P, nodeId: T, nodeClickDistance: A = 0 }) {
    m = zt(R);
    function O({ x: V, y: W }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: q, snapToGrid: Y, nodeOrigin: M, onNodeDrag: z, onSelectionDrag: Q, onError: D, updateNodePositions: U } = t();
      a = { x: V, y: W };
      let ie = !1;
      const B = u.size > 1, Z = B && H ? dy(ta(u)) : null, ee = B && Y ? pq({
        dragItems: u,
        snapGrid: q,
        x: V,
        y: W
      }) : null;
      for (const [X, te] of u) {
        if (!L.has(X))
          continue;
        let se = { x: V - te.distance.x, y: W - te.distance.y };
        Y && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : na(se, q));
        let ae = null;
        if (B && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, _e = pe.x - Z.x + H[0][0], me = pe.x + te.measured.width - Z.x2 + H[1][0], Ne = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [_e, Ne],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = SN({
          nodeId: X,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: D
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (S = S || ie, !!ie && (U(u, !0), y && (o || z || !T && Q))) {
        const [X, te] = wd({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, X, te), z == null || z(y, X, te), T || Q == null || Q(y, te);
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
      const [q, Y] = CN(d, h, L);
      (q !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - q / V[2], a.y = (a.y ?? 0) - Y / V[2], await W({ x: q, y: Y }) && O(a)), l = requestAnimationFrame(j);
    }
    function G(V) {
      var B;
      const { nodeLookup: W, multiSelectionActive: L, nodesDraggable: H, transform: q, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: z, onNodeDragStart: Q, onSelectionDragStart: D, unselectNodesAndEdges: U } = t();
      p = !0, (!z || !P) && !L && T && ((B = W.get(T)) != null && B.selected || U()), P && z && T && (e == null || e(T));
      const ie = Ls(V.sourceEvent, { transform: q, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = hq(W, H, ie, T), u.size > 0 && (n || Q || !T && D)) {
        const [Z, ee] = wd({
          nodeId: T,
          dragItems: u,
          nodeLookup: W
        });
        n == null || n(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || D == null || D(V.sourceEvent, ee);
      }
    }
    const F = nN().clickDistance(A).on("start", (V) => {
      const { domNode: W, nodeDragThreshold: L, transform: H, snapGrid: q, snapToGrid: Y } = t();
      h = (W == null ? void 0 : W.getBoundingClientRect()) || null, v = !1, S = !1, y = V.sourceEvent, L === 0 && G(V), a = Ls(V.sourceEvent, { transform: H, snapGrid: q, snapToGrid: Y, containerBounds: h }), d = mn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: W, transform: L, snapGrid: H, snapToGrid: q, nodeDragThreshold: Y, nodeLookup: M } = t(), z = Ls(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: q, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (v = !0), !v) {
        if (!f && W && p && (f = !0, j()), !p) {
          const Q = mn(V.sourceEvent, h), D = Q.x - d.x, U = Q.y - d.y;
          Math.sqrt(D * D + U * U) > Y && G(V);
        }
        (a.x !== z.xSnapped || a.y !== z.ySnapped) && u && p && (d = mn(V.sourceEvent, h), O(z));
      }
    }).on("end", (V) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: W, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: q } = t();
        if (S && (L(u, !1), S = !1), i || H || !T && q) {
          const [Y, M] = wd({
            nodeId: T,
            dragItems: u,
            nodeLookup: W,
            dragging: !1
          });
          i == null || i(V.sourceEvent, u, Y, M), H == null || H(V.sourceEvent, Y, M), T || q == null || q(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const W = V.target;
      return !V.button && (!C || !H1(W, `.${C}`, R)) && (!b || H1(W, b, R));
    });
    m.call(F);
  }
  function _() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: _
  };
}
function mq(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Bs(i, vi(a)) > 0 && o.push(a);
  return o;
}
const vq = 250;
function yq(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = mq(e, n, t + vq);
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
function $N(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Hs(l, f, f.position, !0) } : f;
}
function BN(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function wq(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const VN = () => !0;
function xq(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: S, onConnect: y, onConnectEnd: x, isValidConnection: _ = VN, onReconnectEnd: C, updateConnection: b, getTransform: R, getFromHandle: P, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const j = PN(e.target);
  let G = 0, F;
  const { x: V, y: W } = mn(e), L = BN(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let q = !1;
  if (!H || !L)
    return;
  const Y = $N(i, L, o, f, t);
  if (!Y)
    return;
  let M = mn(e, H), z = !1, Q = null, D = !1, U = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = CN(M, H, T);
    m({ x: ce, y: de }), G = requestAnimationFrame(ie);
  }
  const B = {
    ...Y,
    nodeId: i,
    type: L,
    position: Y.position
  }, Z = f.get(i);
  let X = {
    inProgress: !0,
    isValid: null,
    from: Hs(Z, B, ye.Left, !0),
    fromHandle: B,
    fromPosition: B.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: A1[B.position],
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
    M = mn(ce, H), F = yq(ra(M, de, !1, [1, 1]), n, f, B), z || (ie(), z = !0);
    const pe = HN(ce, {
      handle: F,
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
    U = pe.handleDomNode, Q = pe.connection, D = wq(!!F, pe.isValid);
    const _e = {
      // from stays the same
      ...X,
      isValid: D,
      to: pe.toHandle && D ? cu({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: D && pe.toHandle ? pe.toHandle.position : A1[B.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    b(_e), X = _e;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (q) {
        (F || U) && Q && D && (y == null || y(Q));
        const { inProgress: de, ...pe } = X, _e = {
          ...pe,
          toPosition: X.toHandle ? X.toPosition : null
        };
        x == null || x(ce, _e), a && (C == null || C(ce, _e));
      }
      v(), cancelAnimationFrame(G), z = !1, D = !1, Q = null, U = null, j.removeEventListener("mousemove", se), j.removeEventListener("mouseup", ae), j.removeEventListener("touchmove", se), j.removeEventListener("touchend", ae);
    }
  }
  j.addEventListener("mousemove", se), j.addEventListener("mouseup", ae), j.addEventListener("touchmove", se), j.addEventListener("touchend", ae);
}
function HN(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = VN, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: S } = mn(e), y = l.elementFromPoint(v, S), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = BN(void 0, x), b = x.getAttribute("data-nodeid"), R = x.getAttribute("data-handleid"), P = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!b || !C)
      return _;
    const A = {
      source: p ? b : o,
      sourceHandle: p ? R : i,
      target: p ? o : b,
      targetHandle: p ? i : R
    };
    _.connection = A;
    const j = P && T && (n === gi.Strict ? p && C === "source" || !p && C === "target" : b !== o || R !== i);
    _.isValid = j && d(A), _.toHandle = $N(b, C, R, h, n, !0);
  }
  return _;
}
const my = {
  onPointerDown: xq,
  isValid: HN
};
function bq({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = zt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const S = (b) => {
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const R = n(), P = b.sourceEvent.ctrlKey && Vs() ? 10 : 1, T = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = R[2] * Math.pow(2, T * P);
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
    }, C = vN().on("start", x).on("zoom", p ? _ : null).on("zoom.wheel", m ? S : null);
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
const Mu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), xd = ({ x: e, y: t, zoom: n }) => Tu.translate(e, t).scale(n), si = (e, t) => e.target.closest(`.${t}`), WN = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), _q = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, bd = (e, t = 0, n = _q, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, UN = (e) => {
  const t = e.ctrlKey && Vs() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Sq({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (si(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = hn(h), _ = UN(h), C = p * Math.pow(2, _);
      o.scaleTo(n, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === lo.Vertical ? 0 : h.deltaX * m, S = i === lo.Horizontal ? 0 : h.deltaY * m;
    !Vs() && h.shiftKey && i !== lo.Vertical && (v = h.deltaY * m, S = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(S / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Mu(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function Eq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = si(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function Cq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = Mu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function kq({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && WN(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, Mu(a.transform)));
  };
}
function Rq({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && WN(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = Mu(l.transform);
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
function Nq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var x;
    const m = e || t, v = n && p.ctrlKey, S = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (si(p, `${d}-flow__node`) || si(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !i && !a && !n || l || h && !S || si(p, u) && S || si(p, f) && (!S || i && S && !e) || !n && p.ctrlKey && S)
      return !1;
    if (!n && p.type === "touchstart" && ((x = p.touches) == null ? void 0 : x.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !i && !v && S || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || S) && y;
  };
}
function Pq({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = vN().scaleExtent([t, n]).translateExtent(o), m = zt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: mi(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), S = m.on("dblclick.zoom");
  p.wheelDelta(UN);
  function y(F, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Os : Yl).transform(bd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), F);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: F, noPanClassName: V, onPaneContextMenu: W, userSelectionActive: L, panOnScroll: H, panOnDrag: q, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: Q, zoomOnScroll: D, zoomOnDoubleClick: U, zoomActivationKeyPressed: ie, lib: B, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: X, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && _();
    const se = H && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !gn(X) || X < 0 ? 0 : X);
    const ae = se ? Sq({
      zoomPanValues: d,
      noWheelClassName: F,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: Y,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : Eq({
      noWheelClassName: F,
      preventScrolling: z,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Cq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = kq({
        zoomPanValues: d,
        panOnDrag: q,
        onPaneContextMenu: !!W,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const _e = Rq({
        zoomPanValues: d,
        panOnDrag: q,
        panOnScroll: H,
        onPaneContextMenu: W,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", _e);
    }
    const ce = Nq({
      zoomActivationKeyPressed: ie,
      panOnDrag: q,
      zoomOnScroll: D,
      panOnScroll: H,
      zoomOnDoubleClick: U,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: V,
      noWheelClassName: F,
      lib: B,
      connectionInProgress: ee
    });
    p.filter(ce), U ? m.on("dblclick.zoom", S) : m.on("dblclick.zoom", null);
  }
  function _() {
    p.on("zoom", null);
  }
  async function C(F, V, W) {
    const L = xd(F), H = p == null ? void 0 : p.constrain()(L, V, W);
    return H && await y(H), new Promise((q) => q(H));
  }
  async function b(F, V) {
    const W = xd(F);
    return await y(W, V), new Promise((L) => L(W));
  }
  function R(F) {
    if (m) {
      const V = xd(F), W = m.property("__zoom");
      (W.k !== F.zoom || W.x !== F.x || W.y !== F.y) && (p == null || p.transform(m, V, null, { sync: !0 }));
    }
  }
  function P() {
    const F = m ? mN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: F.x, y: F.y, zoom: F.k };
  }
  function T(F, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Os : Yl).scaleTo(bd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), F);
    }) : Promise.resolve(!1);
  }
  function A(F, V) {
    return m ? new Promise((W) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Os : Yl).scaleBy(bd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => W(!0)), F);
    }) : Promise.resolve(!1);
  }
  function O(F) {
    p == null || p.scaleExtent(F);
  }
  function j(F) {
    p == null || p.translateExtent(F);
  }
  function G(F) {
    const V = !gn(F) || F < 0 ? 0 : F;
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
    setClickDistance: G
  };
}
var wi;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(wi || (wi = {}));
function Tq({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function W1(e) {
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
function Dl(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function U1(e, t) {
  return e ? !t : t;
}
function Iq(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: S } = n, { minWidth: y, maxWidth: x, minHeight: _, maxHeight: C } = o, { x: b, y: R, width: P, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? v - e.pointerX : 0), j = Math.floor(p ? S - e.pointerY : 0);
  const G = P + (f ? -O : O), F = T + (d ? -j : j), V = -a[0] * P, W = -a[1] * T;
  let L = Dl(G, y, x), H = Dl(F, _, C);
  if (l) {
    let M = 0, z = 0;
    f && O < 0 ? M = kr(b + O + V, l[0][0]) : !f && O > 0 && (M = Rr(b + G + V, l[1][0])), d && j < 0 ? z = kr(R + j + W, l[0][1]) : !d && j > 0 && (z = Rr(R + F + W, l[1][1])), L = Math.max(L, M), H = Math.max(H, z);
  }
  if (u) {
    let M = 0, z = 0;
    f && O > 0 ? M = Rr(b + O, u[0][0]) : !f && O < 0 && (M = kr(b + G, u[1][0])), d && j > 0 ? z = Rr(R + j, u[0][1]) : !d && j < 0 && (z = kr(R + F, u[1][1])), L = Math.max(L, M), H = Math.max(H, z);
  }
  if (i) {
    if (h) {
      const M = Dl(G / A, _, C) * A;
      if (L = Math.max(L, M), l) {
        let z = 0;
        !f && !d || f && !d && m ? z = Rr(R + W + G / A, l[1][1]) * A : z = kr(R + W + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, z);
      }
      if (u) {
        let z = 0;
        !f && !d || f && !d && m ? z = kr(R + G / A, u[1][1]) * A : z = Rr(R + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, z);
      }
    }
    if (p) {
      const M = Dl(F * A, y, x) / A;
      if (H = Math.max(H, M), l) {
        let z = 0;
        !f && !d || d && !f && m ? z = Rr(b + F * A + V, l[1][0]) / A : z = kr(b + (d ? j : -j) * A + V, l[0][0]) / A, H = Math.max(H, z);
      }
      if (u) {
        let z = 0;
        !f && !d || d && !f && m ? z = kr(b + F * A, u[1][0]) / A : z = Rr(b + (d ? j : -j) * A, u[0][0]) / A, H = Math.max(H, z);
      }
    }
  }
  j = j + (j < 0 ? H : -H), O = O + (O < 0 ? L : -L), i && (m ? G > F * A ? j = (U1(f, d) ? -O : O) / A : O = (U1(f, d) ? -j : j) * A : h ? (j = O / A, d = f) : (O = j * A, f = d));
  const q = f ? b + O : b, Y = d ? R + j : R;
  return {
    width: P + (f ? -O : O),
    height: T + (d ? -j : j),
    x: a[0] * O * (f ? -1 : 1) + q,
    y: a[1] * j * (d ? -1 : 1) + Y
  };
}
const GN = { width: 0, height: 0, x: 0, y: 0 }, Aq = {
  ...GN,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Mq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Oq(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function Lq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = zt(e);
  let l = {
    controlDirection: W1("bottom-right"),
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
    let _ = { ...GN }, C = { ...Aq };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: W1(d)
    };
    let b, R = null, P = [], T, A, O, j = !1;
    const G = nN().on("start", (F) => {
      const { nodeLookup: V, transform: W, snapGrid: L, snapToGrid: H, nodeOrigin: q, paneDomNode: Y } = n();
      if (b = V.get(t), !b)
        return;
      R = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: z } = Ls(F.sourceEvent, {
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
        pointerY: z,
        aspectRatio: _.width / _.height
      }, T = void 0, b.parentId && (b.extent === "parent" || b.expandParent) && (T = V.get(b.parentId), A = T && b.extent === "parent" ? Mq(T) : void 0), P = [], O = void 0;
      for (const [Q, D] of V)
        if (D.parentId === t && (P.push({
          id: Q,
          position: { ...D.position },
          extent: D.extent
        }), D.extent === "parent" || D.expandParent)) {
          const U = Oq(D, b, D.origin ?? q);
          O ? O = [
            [Math.min(U[0][0], O[0][0]), Math.min(U[0][1], O[0][1])],
            [Math.max(U[1][0], O[1][0]), Math.max(U[1][1], O[1][1])]
          ] : O = U;
        }
      v == null || v(F, { ..._ });
    }).on("drag", (F) => {
      const { transform: V, snapGrid: W, snapToGrid: L, nodeOrigin: H } = n(), q = Ls(F.sourceEvent, {
        transform: V,
        snapGrid: W,
        snapToGrid: L,
        containerBounds: R
      }), Y = [];
      if (!b)
        return;
      const { x: M, y: z, width: Q, height: D } = _, U = {}, ie = b.origin ?? H, { width: B, height: Z, x: ee, y: X } = Iq(C, l.controlDirection, q, l.boundaries, l.keepAspectRatio, ie, A, O), te = B !== Q, se = Z !== D, ae = ee !== M && te, ce = X !== z && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (U.x = ae ? ee : _.x, U.y = ce ? X : _.y, _.x = U.x, _.y = U.y, P.length > 0)) {
        const me = ee - M, Ne = X - z;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * (B - Q),
            y: Ee.position.y - Ne + ie[1] * (Z - D)
          }, Y.push(Ee);
      }
      if ((te || se) && (U.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? B : _.width, U.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : _.height, _.width = U.width, _.height = U.height), T && b.expandParent) {
        const me = ie[0] * (U.width ?? 0);
        U.x && U.x < me && (_.x = me, C.x = C.x - (U.x - me));
        const Ne = ie[1] * (U.height ?? 0);
        U.y && U.y < Ne && (_.y = Ne, C.y = C.y - (U.y - Ne));
      }
      const de = Tq({
        width: _.width,
        prevWidth: Q,
        height: _.height,
        prevHeight: D,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ..._, direction: de };
      (x == null ? void 0 : x(F, pe)) !== !1 && (j = !0, S == null || S(F, pe), o(U, Y));
    }).on("end", (F) => {
      j && (y == null || y(F, { ..._ }), i == null || i({ ..._ }), j = !1);
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
var _d = { exports: {} }, Sd = {}, Ed = { exports: {} }, Cd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function Dq() {
  if (G1) return Cd;
  G1 = 1;
  var e = Qs();
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
  return Cd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Cd;
}
var Y1;
function jq() {
  return Y1 || (Y1 = 1, Ed.exports = Dq()), Ed.exports;
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
var K1;
function qq() {
  if (K1) return Sd;
  K1 = 1;
  var e = Qs(), t = jq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Sd.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
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
  }, Sd;
}
var X1;
function Fq() {
  return X1 || (X1 = 1, _d.exports = qq()), _d.exports;
}
var zq = Fq();
const $q = /* @__PURE__ */ Cu(zq), Bq = {}, Q1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((S) => S(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (Bq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, Vq = (e) => e ? Q1(e) : Q1, { useDebugValue: Hq } = qt, { useSyncExternalStoreWithSelector: Wq } = $q, Uq = (e) => e;
function YN(e, t = Uq, n) {
  const o = Wq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Hq(o), o;
}
const Z1 = (e, t) => {
  const n = Vq(e), o = (i, a = t) => YN(n, i, a);
  return Object.assign(o, n), o;
}, Gq = (e, t) => e ? Z1(e, t) : Z1;
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
var oa = zR();
const Yq = /* @__PURE__ */ Cu(oa), Ou = k.createContext(null), Kq = Ou.Provider, KN = On.error001();
function Ae(e, t) {
  const n = k.useContext(Ou);
  if (n === null)
    throw new Error(KN);
  return YN(n, e, t);
}
function He() {
  const e = k.useContext(Ou);
  if (e === null)
    throw new Error(KN);
  return k.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const J1 = { display: "none" }, Xq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, XN = "react-flow__node-desc", QN = "react-flow__edge-desc", Qq = "react-flow__aria-live", Zq = (e) => e.ariaLiveMessage, Jq = (e) => e.ariaLabelConfig;
function eF({ rfId: e }) {
  const t = Ae(Zq);
  return N.jsx("div", { id: `${Qq}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Xq, children: t });
}
function tF({ rfId: e, disableKeyboardA11y: t }) {
  const n = Ae(Jq);
  return N.jsxs(N.Fragment, { children: [N.jsx("div", { id: `${XN}-${e}`, style: J1, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), N.jsx("div", { id: `${QN}-${e}`, style: J1, children: n["edge.a11yDescription.default"] }), !t && N.jsx(eF, { rfId: e })] });
}
const ia = k.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return N.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
ia.displayName = "Panel";
function nF({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : N.jsx(ia, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: N.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const rF = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, jl = (e) => e.id;
function oF(e, t) {
  return Qe(e.selectedNodes.map(jl), t.selectedNodes.map(jl)) && Qe(e.selectedEdges.map(jl), t.selectedEdges.map(jl));
}
function iF({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Ae(rF, oF);
  return k.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const sF = (e) => !!e.onSelectionChangeHandlers;
function aF({ onSelectionChange: e }) {
  const t = Ae(sF);
  return e || t ? N.jsx(iF, { onSelectionChange: e }) : null;
}
const ZN = [0, 0], lF = { x: 0, y: 0, zoom: 1 }, uF = [
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
], eb = [...uF, "rfId"], cF = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), tb = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: zs,
  nodeOrigin: ZN,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function fF(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ae(cF, Qe), d = He();
  k.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = tb, u();
  }), []);
  const h = k.useRef(tb);
  return k.useEffect(
    () => {
      for (const p of eb) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: Yj(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    eb.map((p) => e[p])
  ), null;
}
function nb() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function dF(e) {
  var o;
  const [t, n] = k.useState(e === "system" ? null : e);
  return k.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = nb(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = nb()) != null && o.matches ? "dark" : "light";
}
const rb = typeof document < "u" ? document : null;
function Ws(e = null, t = { target: rb, actInsideInputWithModifier: !0 }) {
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
    const f = (t == null ? void 0 : t.target) ?? rb, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var x, _;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && TN(v))
          return !1;
        const y = ib(v.code, u);
        if (a.current.add(v[y]), ob(l, a.current, !1)) {
          const C = ((_ = (x = v.composedPath) == null ? void 0 : x.call(v)) == null ? void 0 : _[0]) || v.target, b = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !b) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const S = ib(v.code, u);
        ob(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[S]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function ob(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function ib(e, t) {
  return t.includes(e) ? "code" : "key";
}
const hF = () => {
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
      const { width: o, height: i, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = By(t, o, i, a, l, (n == null ? void 0 : n.padding) ?? 0.1);
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
      return ra(d, o, p, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: i, y: a } = o.getBoundingClientRect(), l = cu(t, n);
      return {
        x: l.x + i,
        y: l.y + a
      };
    }
  }), []);
};
function JN(e, t) {
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
      pF(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function pF(e, t) {
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
function eP(e, t) {
  return JN(e, t);
}
function tP(e, t) {
  return JN(e, t);
}
function io(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function ai(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, a] of e) {
    const l = t.has(i);
    !(a.selected === void 0 && !l) && a.selected !== l && (n && (a.selected = l), o.push(io(a.id, l)));
  }
  return o;
}
function sb({ items: e = [], lookup: t }) {
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
function ab(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const lb = (e) => qj(e), gF = (e) => _N(e);
function nP(e) {
  return k.forwardRef(e);
}
const mF = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function ub(e) {
  const [t, n] = k.useState(BigInt(0)), [o] = k.useState(() => vF(() => n((i) => i + BigInt(1))));
  return mF(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function vF(e) {
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
const rP = k.createContext(null);
function yF({ children: e }) {
  const t = He(), n = k.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let S = f;
    for (const x of u)
      S = typeof x == "function" ? x(S) : x;
    const y = sb({
      items: S,
      lookup: m
    });
    h && d(S), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: _, setNodes: C } = t.getState();
      x && C(_);
    });
  }, []), o = ub(n), i = k.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const S of u)
      v = typeof S == "function" ? S(v) : S;
    h ? d(v) : p && p(sb({
      items: v,
      lookup: m
    }));
  }, []), a = ub(i), l = k.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return N.jsx(rP.Provider, { value: l, children: e });
}
function wF() {
  const e = k.useContext(rP);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const xF = (e) => !!e.panZoom;
function Yy() {
  const e = hF(), t = He(), n = wF(), o = Ae(xF), i = k.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var _, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), S = lb(p) ? p : m.get(p.id), y = S.parentId ? NN(S.position, S.measured, S.parentId, m, v) : S.position, x = {
        ...S,
        position: y,
        width: ((_ = S.measured) == null ? void 0 : _.width) ?? S.width,
        height: ((C = S.measured) == null ? void 0 : C.height) ?? S.height
      };
      return vi(x);
    }, d = (p, m, v = { replace: !1 }) => {
      l((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && lb(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((S) => S.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && gF(x) ? x : { ...y, ...x };
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
        const { nodes: v, edges: S, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: _, triggerEdgeChanges: C, onDelete: b, onBeforeDelete: R } = t.getState(), { nodes: P, edges: T } = await Vj({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: S,
          onBeforeDelete: R
        }), A = T.length > 0, O = P.length > 0;
        if (A) {
          const j = T.map(ab);
          x == null || x(T), C(j);
        }
        if (O) {
          const j = P.map(ab);
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
        const S = O1(p), y = S ? p : f(p), x = v !== void 0;
        return y ? (v || t.getState().nodes).filter((_) => {
          const C = t.getState().nodeLookup.get(_.id);
          if (C && !S && (_.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const b = vi(x ? _ : C), R = Bs(b, y);
          return m && R > 0 || R >= b.width * b.height || R >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = O1(p) ? p : f(p);
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
        return Fj(p, { nodeLookup: m, nodeOrigin: v });
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
        const m = t.getState().fitViewResolver ?? Gj();
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
const cb = (e) => e.selected, bF = typeof window < "u" ? window : void 0;
function _F({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = Yy(), i = Ws(e, { actInsideInputWithModifier: !1 }), a = Ws(t, { target: bF });
  k.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(cb), edges: l.filter(cb) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), k.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function SF(e) {
  const t = He();
  k.useEffect(() => {
    const n = () => {
      var i, a, l, u;
      if (!e.current || !(((a = (i = e.current).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return !1;
      const o = Vy(e.current);
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
const Lu = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, EF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function CF({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = lo.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: S, noWheelClassName: y, noPanClassName: x, onViewportChange: _, isControlledViewport: C, paneClickDistance: b, selectionOnDrag: R }) {
  const P = He(), T = k.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: j } = Ae(EF, Qe), G = Ws(m), F = k.useRef();
  SF(T);
  const V = k.useCallback((W) => {
    _ == null || _({ x: W[0], y: W[1], zoom: W[2] }), C || P.setState({ transform: W });
  }, [_, C]);
  return k.useEffect(() => {
    if (T.current) {
      F.current = Pq({
        domNode: T.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (q) => P.setState({ paneDragging: q }),
        onPanZoomStart: (q, Y) => {
          const { onViewportChangeStart: M, onMoveStart: z } = P.getState();
          z == null || z(q, Y), M == null || M(Y);
        },
        onPanZoom: (q, Y) => {
          const { onViewportChange: M, onMove: z } = P.getState();
          z == null || z(q, Y), M == null || M(Y);
        },
        onPanZoomEnd: (q, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: z } = P.getState();
          z == null || z(q, Y), M == null || M(Y);
        }
      });
      const { x: W, y: L, zoom: H } = F.current.getViewport();
      return P.setState({
        panZoom: F.current,
        transform: [W, L, H],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var q;
        (q = F.current) == null || q.destroy();
      };
    }
  }, []), k.useEffect(() => {
    var W;
    (W = F.current) == null || W.update({
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
    G,
    v,
    x,
    A,
    y,
    O,
    V,
    j,
    R,
    b
  ]), N.jsx("div", { className: "react-flow__renderer", ref: T, style: Lu, children: S });
}
const kF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function RF() {
  const { userSelectionActive: e, userSelectionRect: t } = Ae(kF, Qe);
  return e && t ? N.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const kd = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, NF = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function PF({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = $s.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: S }) {
  const y = He(), { userSelectionActive: x, elementsSelectable: _, dragging: C, connectionInProgress: b } = Ae(NF, Qe), R = _ && (e || x), P = k.useRef(null), T = k.useRef(), A = k.useRef(/* @__PURE__ */ new Set()), O = k.useRef(/* @__PURE__ */ new Set()), j = k.useRef(!1), G = (M) => {
    if (j.current || b) {
      j.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, F = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, V = h ? (M) => h(M) : void 0, W = (M) => {
    j.current && (M.stopPropagation(), j.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: z } = y.getState();
    if (T.current = z == null ? void 0 : z.getBoundingClientRect(), !T.current)
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
    const { userSelectionRect: z, transform: Q, nodeLookup: D, edgeLookup: U, connectionLookup: ie, triggerNodeChanges: B, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: X } = y.getState();
    if (!T.current || !z)
      return;
    const { x: te, y: se } = mn(M.nativeEvent, T.current), { startX: ae, startY: ce } = z;
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
    A.current = new Set($y(D, de, Q, n === $s.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = U.get(Je);
          Ue && (Ue.selectable ?? me) && O.current.add(Je);
        }
    }
    if (!L1(pe, A.current)) {
      const Ne = ai(D, A.current, !0);
      B(Ne);
    }
    if (!L1(_e, O.current)) {
      const Ne = ai(U, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, q = (M) => {
    var z, Q;
    M.button === 0 && ((Q = (z = M.target) == null ? void 0 : z.releasePointerCapture) == null || Q.call(z, M.pointerId), !x && M.target === P.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), j.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return N.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: R ? void 0 : kd(G, P), onContextMenu: kd(F, P), onWheel: kd(V, P), onPointerEnter: R ? void 0 : p, onPointerMove: R ? H : m, onPointerUp: R ? q : void 0, onPointerDownCapture: R ? L : void 0, onClickCapture: R ? W : void 0, onPointerLeave: v, ref: P, style: Lu, children: [S, N.jsx(RF, {})] });
}
function vy({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
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
function oP({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = k.useState(!1), h = k.useRef();
  return k.useEffect(() => {
    h.current = gq({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        vy({
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
const TF = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function iP() {
  const e = He();
  return k.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = TF(l), v = i ? a[0] : 5, S = i ? a[1] : 5, y = n.direction.x * v * n.factor, x = n.direction.y * S * n.factor;
    for (const [, _] of d) {
      if (!m(_))
        continue;
      let C = {
        x: _.internals.positionAbsolute.x + y,
        y: _.internals.positionAbsolute.y + x
      };
      i && (C = na(C, a));
      const { position: b, positionAbsolute: R } = SN({
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
const Ky = k.createContext(null), IF = Ky.Provider;
Ky.Consumer;
const sP = () => k.useContext(Ky), AF = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), MF = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === gi.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function OF({ type: e = "source", position: t = ye.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var H, q;
  const S = l || null, y = e === "target", x = He(), _ = sP(), { connectOnClick: C, noPanClassName: b, rfId: R } = Ae(AF, Qe), { connectingFrom: P, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: j, clickConnectionInProcess: G, valid: F } = Ae(MF(_, S, e), Qe);
  _ || (q = (H = x.getState()).onError) == null || q.call(H, "010", On.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: M, onConnect: z, hasDefaultEdges: Q } = x.getState(), D = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: U, setEdges: ie } = x.getState();
      ie(LN(D, U));
    }
    z == null || z(D), u == null || u(D);
  }, W = (Y) => {
    if (!_)
      return;
    const M = IN(Y.nativeEvent);
    if (i && (M && Y.button === 0 || !M)) {
      const z = x.getState();
      my.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: z.autoPanOnConnect,
        connectionMode: z.connectionMode,
        connectionRadius: z.connectionRadius,
        domNode: z.domNode,
        nodeLookup: z.nodeLookup,
        lib: z.lib,
        isTarget: y,
        handleId: S,
        nodeId: _,
        flowId: z.rfId,
        panBy: z.panBy,
        cancelConnection: z.cancelConnection,
        onConnectStart: z.onConnectStart,
        onConnectEnd: z.onConnectEnd,
        updateConnection: z.updateConnection,
        onConnect: V,
        isValidConnection: n || z.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: z.autoPanSpeed,
        dragThreshold: z.connectionDragThreshold
      });
    }
    M ? h == null || h(Y) : p == null || p(Y);
  }, L = (Y) => {
    const { onClickConnectStart: M, onClickConnectEnd: z, connectionClickStartHandle: Q, connectionMode: D, isValidConnection: U, lib: ie, rfId: B, nodeLookup: Z, connection: ee } = x.getState();
    if (!_ || !Q && !i)
      return;
    if (!Q) {
      M == null || M(Y.nativeEvent, { nodeId: _, handleId: S, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: _, type: e, id: S } });
      return;
    }
    const X = PN(Y.target), te = n || U, { connection: se, isValid: ae } = my.isValid(Y.nativeEvent, {
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
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, z == null || z(Y, ce), x.setState({ connectionClickStartHandle: null });
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
      valid: F,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!j || O) && (j || G ? a : i)
    }
  ]), onMouseDown: W, onTouchStart: W, onClick: C ? L : void 0, ref: v, ...m, children: f });
}
const Us = k.memo(nP(OF));
function LF({ data: e, isConnectable: t, sourcePosition: n = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [e == null ? void 0 : e.label, N.jsx(Us, { type: "source", position: n, isConnectable: t })] });
}
function DF({ data: e, isConnectable: t, targetPosition: n = ye.Top, sourcePosition: o = ye.Bottom }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Us, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, N.jsx(Us, { type: "source", position: o, isConnectable: t })] });
}
function jF() {
  return null;
}
function qF({ data: e, isConnectable: t, targetPosition: n = ye.Top }) {
  return N.jsxs(N.Fragment, { children: [N.jsx(Us, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const fu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, fb = {
  input: LF,
  default: DF,
  output: qF,
  group: jF
};
function FF(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const zF = (e) => {
  const { width: t, height: n, x: o, y: i } = ta(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: gn(t) ? t : null,
    height: gn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function $F({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Ae(zF, Qe), f = iP(), d = k.useRef(null);
  if (k.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), oP({
    nodeRef: d
  }), u || !i || !a)
    return null;
  const h = e ? (m) => {
    const v = o.getState().nodes.filter((S) => S.selected);
    e(m, v);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(fu, m.key) && (m.preventDefault(), f({
      direction: fu[m.key],
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
const db = typeof window < "u" ? window : void 0, BF = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function aP({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: S, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: R, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: j, translateExtent: G, minZoom: F, maxZoom: V, preventScrolling: W, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: q, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: z }) {
  const { nodesSelectionActive: Q, userSelectionActive: D } = Ae(BF), U = Ws(d, { target: db }), ie = Ws(y, { target: db }), B = ie || O, Z = ie || R, ee = h && B !== !0, X = U || D || ee;
  return _F({ deleteKeyCode: f, multiSelectionKeyCode: S }), N.jsx(CF, { onPaneContextMenu: a, elementsSelectable: _, zoomOnScroll: C, zoomOnPinch: b, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !U && B, defaultViewport: j, translateExtent: G, minZoom: F, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: W, noWheelClassName: H, noPanClassName: q, onViewportChange: M, isControlledViewport: z, paneClickDistance: u, selectionOnDrag: ee, children: N.jsxs(PF, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: B, isSelecting: !!X, selectionMode: p, selectionKeyPressed: U, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && N.jsx($F, { onSelectionContextMenu: L, noPanClassName: q, disableKeyboardA11y: Y })] }) });
}
aP.displayName = "FlowRenderer";
const VF = k.memo(aP), HF = (e) => (t) => e ? $y(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function WF(e) {
  return Ae(k.useCallback(HF(e), [e]), Qe);
}
const UF = (e) => e.updateNodeInternals;
function GF() {
  const e = Ae(UF), [t] = k.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function YF({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
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
function KF({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: S, rfId: y, nodeTypes: x, nodeClickDistance: _, onError: C }) {
  const { node: b, internals: R, isParent: P } = Ae((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let T = b.type || "default", A = (x == null ? void 0 : x[T]) || fb[T];
  A === void 0 && (C == null || C("003", On.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || fb.default);
  const O = !!(b.draggable || u && typeof b.draggable > "u"), j = !!(b.selectable || f && typeof b.selectable > "u"), G = !!(b.connectable || d && typeof b.connectable > "u"), F = !!(b.focusable || h && typeof b.focusable > "u"), V = He(), W = RN(b), L = YF({ node: b, nodeType: T, hasDimensions: W, resizeObserver: p }), H = oP({
    nodeRef: L,
    disabled: b.hidden || !O,
    noDragClassName: m,
    handleSelector: b.dragHandle,
    nodeId: e,
    isSelectable: j,
    nodeClickDistance: _
  }), q = iP();
  if (b.hidden)
    return null;
  const Y = tr(b), M = FF(b), z = j || O || t || n || o || i, Q = n ? (te) => n(te, { ...R.userNode }) : void 0, D = o ? (te) => o(te, { ...R.userNode }) : void 0, U = i ? (te) => i(te, { ...R.userNode }) : void 0, ie = a ? (te) => a(te, { ...R.userNode }) : void 0, B = l ? (te) => l(te, { ...R.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    j && (!se || !O || ae > 0) && vy({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...R.userNode });
  }, ee = (te) => {
    if (!(TN(te.nativeEvent) || S)) {
      if (yN.includes(te.key) && j) {
        const se = te.key === "Escape";
        vy({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && b.selected && Object.prototype.hasOwnProperty.call(fu, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~R.positionAbsolute.x,
            y: ~~R.positionAbsolute.y
          })
        }), q({
          direction: fu[te.key],
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
    $y(/* @__PURE__ */ new Map([[e, b]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(b.position.x + Y.width / 2, b.position.y + Y.height / 2, {
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
    pointerEvents: z ? "all" : "none",
    visibility: W ? "visible" : "hidden",
    ...b.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: D, onMouseLeave: U, onContextMenu: ie, onClick: Z, onDoubleClick: B, onKeyDown: F ? ee : void 0, tabIndex: F ? 0 : void 0, onFocus: F ? X : void 0, role: b.ariaRole ?? (F ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": S ? void 0 : `${XN}-${y}`, "aria-label": b.ariaLabel, ...b.domAttributes, children: N.jsx(IF, { value: e, children: N.jsx(A, { id: e, data: b.data, type: T, positionAbsoluteX: R.positionAbsolute.x, positionAbsoluteY: R.positionAbsolute.y, selected: b.selected ?? !1, selectable: j, draggable: O, deletable: b.deletable ?? !0, isConnectable: G, sourcePosition: b.sourcePosition, targetPosition: b.targetPosition, dragging: H, dragHandle: b.dragHandle, zIndex: R.z, parentId: b.parentId, ...Y }) }) });
}
var XF = k.memo(KF);
const QF = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function lP(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Ae(QF, Qe), l = WF(e.onlyRenderVisibleElements), u = GF();
  return N.jsx("div", { className: "react-flow__nodes", style: Lu, children: l.map((f) => (
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
    N.jsx(XF, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
lP.displayName = "NodeRenderer";
const ZF = k.memo(lP);
function JF(e) {
  return Ae(k.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && Qj({
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
const e3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return N.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, t3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return N.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, hb = {
  [lu.Arrow]: e3,
  [lu.ArrowClosed]: t3
};
function n3(e) {
  const t = He();
  return k.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(hb, e) ? hb[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", On.error009(e)), null);
  }, [e]);
}
const r3 = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = n3(t);
  return f ? N.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: N.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, uP = ({ defaultColor: e, rfId: t }) => {
  const n = Ae((a) => a.edges), o = Ae((a) => a.defaultEdgeOptions), i = k.useMemo(() => oq(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? N.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: N.jsx("defs", { children: i.map((a) => N.jsx(r3, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
uP.displayName = "MarkerDefinitions";
var o3 = k.memo(uP);
function cP({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
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
cP.displayName = "EdgeText";
const i3 = k.memo(cP);
function Du({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return N.jsxs(N.Fragment, { children: [N.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? N.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && gn(t) && gn(n) ? N.jsx(i3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function pb({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function fP({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top }) {
  const [l, u] = pb({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = pb({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = AN({
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
function dP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: _ }) => {
    const [C, b, R] = fP({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return N.jsx(Du, { id: P, path: C, labelX: b, labelY: R, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: _ });
  });
}
const s3 = dP({ isInternal: !1 }), hP = dP({ isInternal: !0 });
s3.displayName = "SimpleBezierEdge";
hP.displayName = "SimpleBezierEdgeInternal";
function pP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = ye.Bottom, targetPosition: S = ye.Top, markerEnd: y, markerStart: x, pathOptions: _, interactionWidth: C }) => {
    const [b, R, P] = hy({
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
    return N.jsx(Du, { id: T, path: b, labelX: R, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const gP = pP({ isInternal: !1 }), mP = pP({ isInternal: !0 });
gP.displayName = "SmoothStepEdge";
mP.displayName = "SmoothStepEdgeInternal";
function vP(e) {
  return k.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return N.jsx(gP, { ...n, id: o, pathOptions: k.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const a3 = vP({ isInternal: !1 }), yP = vP({ isInternal: !0 });
a3.displayName = "StepEdge";
yP.displayName = "StepEdgeInternal";
function wP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y }) => {
    const [x, _, C] = DN({ sourceX: n, sourceY: o, targetX: i, targetY: a }), b = e.isInternal ? void 0 : t;
    return N.jsx(Du, { id: b, path: x, labelX: _, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: S, interactionWidth: y });
  });
}
const l3 = wP({ isInternal: !1 }), xP = wP({ isInternal: !0 });
l3.displayName = "StraightEdge";
xP.displayName = "StraightEdgeInternal";
function bP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, pathOptions: _, interactionWidth: C }) => {
    const [b, R, P] = MN({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: _ == null ? void 0 : _.curvature
    }), T = e.isInternal ? void 0 : t;
    return N.jsx(Du, { id: T, path: b, labelX: R, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: S, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const u3 = bP({ isInternal: !1 }), _P = bP({ isInternal: !0 });
u3.displayName = "BezierEdge";
_P.displayName = "BezierEdgeInternal";
const gb = {
  default: _P,
  straight: xP,
  step: yP,
  smoothstep: mP,
  simplebezier: hP
}, mb = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, c3 = (e, t, n) => n === ye.Left ? e - t : n === ye.Right ? e + t : e, f3 = (e, t, n) => n === ye.Top ? e - t : n === ye.Bottom ? e + t : e, vb = "react-flow__edgeupdater";
function yb({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return N.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([vb, `${vb}-${u}`]), cx: c3(t, o, e), cy: f3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function d3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const S = He(), y = (R, P) => {
    if (R.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: j, connectionRadius: G, lib: F, onConnectStart: V, onConnectEnd: W, cancelConnection: L, nodeLookup: H, rfId: q, panBy: Y, updateConnection: M } = S.getState(), z = P.type === "target", Q = (ie, B) => {
      m(!1), p == null || p(ie, n, P.type, B);
    }, D = (ie) => d == null ? void 0 : d(n, ie), U = (ie, B) => {
      m(!0), h == null || h(R, n, P.type), V == null || V(ie, B);
    };
    my.onPointerDown(R.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: j,
      connectionRadius: G,
      domNode: A,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: H,
      isTarget: z,
      edgeUpdaterType: P.type,
      lib: F,
      flowId: q,
      cancelConnection: L,
      panBy: Y,
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
  return N.jsxs(N.Fragment, { children: [(e === !0 || e === "source") && N.jsx(yb, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: b, type: "source" }), (e === !0 || e === "target") && N.jsx(yb, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: _, onMouseEnter: C, onMouseOut: b, type: "target" })] });
}
function h3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: S, edgeTypes: y, noPanClassName: x, onError: _, disableKeyboardA11y: C }) {
  let b = Ae((de) => de.edgeLookup.get(e));
  const R = Ae((de) => de.defaultEdgeOptions);
  b = R ? { ...R, ...b } : b;
  let P = b.type || "default", T = (y == null ? void 0 : y[P]) || gb[P];
  T === void 0 && (_ == null || _("011", On.error011(P)), P = "default", T = (y == null ? void 0 : y.default) || gb.default);
  const A = !!(b.focusable || t && typeof b.focusable > "u"), O = typeof p < "u" && (b.reconnectable || n && typeof b.reconnectable > "u"), j = !!(b.selectable || o && typeof b.selectable > "u"), G = k.useRef(null), [F, V] = k.useState(!1), [W, L] = k.useState(!1), H = He(), { zIndex: q, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: U } = Ae(k.useCallback((de) => {
    const pe = de.nodeLookup.get(b.source), _e = de.nodeLookup.get(b.target);
    if (!pe || !_e)
      return {
        zIndex: b.zIndex,
        ...mb
      };
    const me = rq({
      id: e,
      sourceNode: pe,
      targetNode: _e,
      sourceHandle: b.sourceHandle || null,
      targetHandle: b.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: _
    });
    return {
      zIndex: Xj({
        selected: b.selected,
        zIndex: b.zIndex,
        sourceNode: pe,
        targetNode: _e,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || mb
    };
  }, [b.source, b.target, b.sourceHandle, b.targetHandle, b.selected, b.zIndex]), Qe), ie = k.useMemo(() => b.markerStart ? `url('#${py(b.markerStart, S)}')` : void 0, [b.markerStart, S]), B = k.useMemo(() => b.markerEnd ? `url('#${py(b.markerEnd, S)}')` : void 0, [b.markerEnd, S]);
  if (b.hidden || Y === null || M === null || z === null || Q === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: _e, multiSelectionActive: me } = H.getState();
    j && (H.setState({ nodesSelectionActive: !1 }), b.selected && me ? (_e({ nodes: [], edges: [b] }), (Ne = G.current) == null || Ne.blur()) : pe([e])), i && i(de, b);
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
    if (!C && yN.includes(de.key) && j) {
      const { unselectNodesAndEdges: _e, addSelectedEdges: me } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), _e({ edges: [b] })) : me([e]);
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
      updating: F,
      selectable: j
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: X, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: b.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": b.ariaLabel === null ? void 0 : b.ariaLabel || `Edge from ${b.source} to ${b.target}`, "aria-describedby": A ? `${QN}-${S}` : void 0, ref: G, ...b.domAttributes, children: [!W && N.jsx(T, { id: e, source: b.source, target: b.target, type: b.type, selected: b.selected, animated: b.animated, selectable: j, deletable: b.deletable ?? !0, label: b.label, labelStyle: b.labelStyle, labelShowBg: b.labelShowBg, labelBgStyle: b.labelBgStyle, labelBgPadding: b.labelBgPadding, labelBgBorderRadius: b.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: U, data: b.data, style: b.style, sourceHandleId: b.sourceHandle, targetHandleId: b.targetHandle, markerStart: ie, markerEnd: B, pathOptions: "pathOptions" in b ? b.pathOptions : void 0, interactionWidth: b.interactionWidth }), O && N.jsx(d3, { edge: b, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: Y, sourceY: M, targetX: z, targetY: Q, sourcePosition: D, targetPosition: U, setUpdateHover: V, setReconnecting: L })] }) });
}
var p3 = k.memo(h3);
const g3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function SP({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: _, elementsSelectable: C, onError: b } = Ae(g3, Qe), R = JF(t);
  return N.jsxs("div", { className: "react-flow__edges", children: [N.jsx(o3, { defaultColor: e, rfId: n }), R.map((P) => N.jsx(p3, { id: P, edgesFocusable: x, edgesReconnectable: _, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: S, rfId: n, onError: b, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
SP.displayName = "EdgeRenderer";
const m3 = k.memo(SP), v3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function y3({ children: e }) {
  const t = Ae(v3);
  return N.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function w3(e) {
  const t = Yy(), n = k.useRef(!1);
  k.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const x3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function b3(e) {
  const t = Ae(x3), n = He();
  return k.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function _3(e) {
  return e.connection.inProgress ? { ...e.connection, to: ra(e.connection.to, e.transform) } : { ...e.connection };
}
function S3(e) {
  return _3;
}
function E3(e) {
  const t = S3();
  return Ae(t, Qe);
}
const C3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function k3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Ae(C3, Qe);
  return !(a && i && f) ? null : N.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: N.jsx("g", { className: nt(["react-flow__connection", bN(u)]), children: N.jsx(EP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const EP = ({ style: e, type: t = Tr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = E3();
  if (!i)
    return;
  if (n)
    return N.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: bN(o), toNode: h, toHandle: p, pointer: v });
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
      [S] = MN(y);
      break;
    case Tr.SimpleBezier:
      [S] = fP(y);
      break;
    case Tr.Step:
      [S] = hy({
        ...y,
        borderRadius: 0
      });
      break;
    case Tr.SmoothStep:
      [S] = hy(y);
      break;
    default:
      [S] = DN(y);
  }
  return N.jsx("path", { d: S, fill: "none", className: "react-flow__connection-path", style: e });
};
EP.displayName = "ConnectionLine";
const R3 = {};
function wb(e = R3) {
  k.useRef(e), He(), k.useEffect(() => {
  }, [e]);
}
function N3() {
  He(), k.useRef(!1), k.useEffect(() => {
  }, []);
}
function CP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: S, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: _, selectionKeyCode: C, selectionOnDrag: b, selectionMode: R, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: j, elementsSelectable: G, defaultViewport: F, translateExtent: V, minZoom: W, maxZoom: L, preventScrolling: H, defaultMarkerColor: q, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: D, zoomOnDoubleClick: U, panOnDrag: ie, onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Vt, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht, viewport: on, onViewportChange: Wt }) {
  return wb(e), wb(t), N3(), w3(n), b3(on), N.jsx(VF, { onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: b, selectionMode: R, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: U, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: D, panOnDrag: ie, defaultViewport: F, translateExtent: V, minZoom: W, maxZoom: L, onSelectionContextMenu: p, preventScrolling: H, noDragClassName: Vt, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Wt, isControlledViewport: !!on, children: N.jsxs(y3, { children: [N.jsx(m3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: j, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: me, reconnectRadius: Ne, defaultMarkerColor: q, noPanClassName: at, disableKeyboardA11y: Ge, rfId: Ht }), N.jsx(k3, { style: y, type: S, component: x, containerStyle: _ }), N.jsx("div", { className: "react-flow__edgelabel-renderer" }), N.jsx(ZF, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: j, noPanClassName: at, noDragClassName: Vt, disableKeyboardA11y: Ge, nodeExtent: rn, rfId: Ht }), N.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
CP.displayName = "GraphView";
const P3 = k.memo(CP), xb = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], _ = n ?? e ?? [], C = h ?? [0, 0], b = p ?? zs;
  FN(S, y, x);
  const R = gy(_, m, v, {
    nodeOrigin: C,
    nodeExtent: b,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const T = ta(m, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: j } = By(T, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
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
    translateExtent: zs,
    nodeExtent: b,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: gi.Strict,
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
    connection: { ...xN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Hj,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: wN
  };
}, T3 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => Gq((m, v) => {
  async function S() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: _, fitViewResolver: C, width: b, height: R, minZoom: P, maxZoom: T } = v();
    x && (await Bj({
      nodes: y,
      width: b,
      height: R,
      panZoom: x,
      minZoom: P,
      maxZoom: T
    }, _), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...xb({
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
      const { nodeLookup: x, parentLookup: _, nodeOrigin: C, elevateNodesOnSelect: b, fitViewQueued: R } = v(), P = gy(y, x, _, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: b,
        checkEquality: !0
      });
      R && P ? (S(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: _ } = v();
      FN(x, _, y), m({ edges: y });
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
      const { triggerNodeChanges: x, nodeLookup: _, parentLookup: C, domNode: b, nodeOrigin: R, nodeExtent: P, debug: T, fitViewQueued: A } = v(), { changes: O, updatedInternals: j } = fq(y, _, C, b, R, P);
      j && (aq(_, C, { nodeOrigin: R, nodeExtent: P }), A ? (S(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
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
        const { parentLookup: P, nodeOrigin: T } = v(), A = Gy(_, b, P, T);
        C.push(...A);
      }
      R(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: _, nodes: C, hasDefaultNodes: b, debug: R } = v();
      if (y != null && y.length) {
        if (b) {
          const P = eP(y, C);
          _(P);
        }
        R && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: _, edges: C, hasDefaultEdges: b, debug: R } = v();
      if (y != null && y.length) {
        if (b) {
          const P = tP(y, C);
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
      b(ai(C, /* @__PURE__ */ new Set([...y]), !0)), R(ai(_));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: _, nodeLookup: C, triggerNodeChanges: b, triggerEdgeChanges: R } = v();
      if (x) {
        const P = y.map((T) => io(T, !0));
        R(P);
        return;
      }
      R(ai(_, /* @__PURE__ */ new Set([...y]))), b(ai(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: _, nodes: C, nodeLookup: b, triggerNodeChanges: R, triggerEdgeChanges: P } = v(), T = y || C, A = x || _, O = T.map((G) => {
        const F = b.get(G.id);
        return F && (F.selected = !1), io(G.id, !1);
      }), j = A.map((G) => io(G.id, !1));
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
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (gy(x, _, C, {
        nodeOrigin: b,
        nodeExtent: y,
        elevateNodesOnSelect: R,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: _, height: C, panZoom: b, translateExtent: R } = v();
      return dq({ delta: y, panZoom: b, transform: x, translateExtent: R, width: _, height: C });
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
        connection: { ...xN }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...xb() })
  };
}, Object.is);
function kP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = k.useState(() => T3({
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
  return N.jsx(Kq, { value: v, children: N.jsx(yF, { children: m }) });
}
function I3({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return k.useContext(Ou) ? N.jsx(N.Fragment, { children: e }) : N.jsx(kP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const A3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function M3({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: _, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onNodesDelete: G, onEdgesDelete: F, onDelete: V, onSelectionChange: W, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: q, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onBeforeDelete: Q, connectionMode: D, connectionLineType: U = Tr.Bezier, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: X = "Shift", selectionOnDrag: te = !1, selectionMode: se = $s.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Vs() ? "Meta" : "Control", zoomActivationKeyCode: de = Vs() ? "Meta" : "Control", snapToGrid: pe, snapGrid: _e, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, nodeOrigin: ht = ZN, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn = !0, defaultViewport: Ht = lF, minZoom: on = 0.5, maxZoom: Wt = 2, translateExtent: bt = zs, preventScrolling: Fr = !0, nodeExtent: Ut, defaultMarkerColor: zn = "#b1b1b7", zoomOnScroll: Eo = !0, zoomOnPinch: It = !0, panOnScroll: Gt = !1, panOnScrollSpeed: vc = 0.5, panOnScrollMode: Li = lo.Free, zoomOnDoubleClick: Di = !0, panOnDrag: ji = !0, onPaneClick: qi, onPaneMouseEnter: Fi, onPaneMouseMove: or, onPaneMouseLeave: ir, onPaneScroll: ha, onPaneContextMenu: pa, paneClickDistance: ga = 1, nodeClickDistance: ma = 0, children: va, onReconnect: zi, onReconnectStart: ya, onReconnectEnd: zr, onEdgeContextMenu: $i, onEdgeDoubleClick: $r, onEdgeMouseEnter: yc, onEdgeMouseMove: Br, onEdgeMouseLeave: Co, reconnectRadius: ko = 10, onNodesChange: Bi, onEdgesChange: wc, noDragClassName: xc = "nodrag", noWheelClassName: bc = "nowheel", noPanClassName: Sn = "nopan", fitView: Vi, fitViewOptions: Hi, connectOnClick: _c, attributionPosition: wa, proOptions: xa, defaultEdgeOptions: ba, elevateNodesOnSelect: _a, elevateEdgesOnSelect: Sc, disableKeyboardA11y: Sa = !1, autoPanOnConnect: Ye, autoPanOnNodeDrag: Ec, autoPanSpeed: Wi, connectionRadius: Ea, isValidConnection: Ro, onError: Cc, style: Ca, id: Vr, nodeDragThreshold: Yt, connectionDragThreshold: kc, viewport: At, onViewportChange: Rc, width: Nc, height: Pc, colorMode: No = "light", debug: Po, onScroll: En, ariaLabelConfig: To, ...Tc }, Ic) {
  const Hr = Vr || "1", ka = dF(No), Ui = k.useCallback((sr) => {
    sr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), En == null || En(sr);
  }, [En]);
  return N.jsx("div", { "data-testid": "rf__wrapper", ...Tc, onScroll: Ui, style: { ...Ca, ...A3 }, ref: Ic, className: nt(["react-flow", i, ka]), id: Vr, role: "application", children: N.jsxs(I3, { nodes: e, edges: t, width: Nc, height: Pc, fitView: Vi, fitViewOptions: Hi, minZoom: on, maxZoom: Wt, nodeOrigin: ht, nodeExtent: Ut, children: [N.jsx(P3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: b, onNodeMouseLeave: R, onNodeContextMenu: P, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: U, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, selectionKeyCode: X, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: Ht, translateExtent: bt, minZoom: on, maxZoom: Wt, preventScrolling: Fr, zoomOnScroll: Eo, zoomOnPinch: It, zoomOnDoubleClick: Di, panOnScroll: Gt, panOnScrollSpeed: vc, panOnScrollMode: Li, panOnDrag: ji, onPaneClick: qi, onPaneMouseEnter: Fi, onPaneMouseMove: or, onPaneMouseLeave: ir, onPaneScroll: ha, onPaneContextMenu: pa, paneClickDistance: ga, nodeClickDistance: ma, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: z, onReconnect: zi, onReconnectStart: ya, onReconnectEnd: zr, onEdgeContextMenu: $i, onEdgeDoubleClick: $r, onEdgeMouseEnter: yc, onEdgeMouseMove: Br, onEdgeMouseLeave: Co, reconnectRadius: ko, defaultMarkerColor: zn, noDragClassName: xc, noWheelClassName: bc, noPanClassName: Sn, rfId: Hr, disableKeyboardA11y: Sa, nodeExtent: Ut, viewport: At, onViewportChange: Rc }), N.jsx(fF, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: S, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: _, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Vt, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: rn, elevateNodesOnSelect: _a, elevateEdgesOnSelect: Sc, minZoom: on, maxZoom: Wt, nodeExtent: Ut, onNodesChange: Bi, onEdgesChange: wc, snapToGrid: pe, snapGrid: _e, connectionMode: D, translateExtent: bt, connectOnClick: _c, defaultEdgeOptions: ba, fitView: Vi, fitViewOptions: Hi, onNodesDelete: G, onEdgesDelete: F, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: j, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: q, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: Sn, nodeOrigin: ht, rfId: Hr, autoPanOnConnect: Ye, autoPanOnNodeDrag: Ec, autoPanSpeed: Wi, onError: Cc, connectionRadius: Ea, isValidConnection: Ro, selectNodesOnDrag: Ne, nodeDragThreshold: Yt, connectionDragThreshold: kc, onBeforeDelete: Q, debug: Po, ariaLabelConfig: To }), N.jsx(aF, { onSelectionChange: W }), va, N.jsx(nF, { proOptions: xa, position: wa }), N.jsx(tF, { rfId: Hr, disableKeyboardA11y: Sa })] }) });
}
var O3 = nP(M3);
function L3({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return N.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function D3({ radius: e, className: t }) {
  return N.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Ir;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ir || (Ir = {}));
const j3 = {
  [Ir.Dots]: 1,
  [Ir.Lines]: 1,
  [Ir.Cross]: 6
}, q3 = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function RP({
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
  const p = k.useRef(null), { transform: m, patternId: v } = Ae(q3, Qe), S = o || j3[t], y = t === Ir.Dots, x = t === Ir.Cross, _ = Array.isArray(n) ? n : [n, n], C = [_[0] * m[2] || 1, _[1] * m[2] || 1], b = S * m[2], R = Array.isArray(a) ? a : [a, a], P = x ? [b, b] : C, T = [
    R[0] * m[2] || 1 + P[0] / 2,
    R[1] * m[2] || 1 + P[1] / 2
  ], A = `${v}${e || ""}`;
  return N.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...Lu,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [N.jsx("pattern", { id: A, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? N.jsx(D3, { radius: b / 2, className: h }) : N.jsx(L3, { dimensions: P, lineWidth: i, variant: t, className: h }) }), N.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
RP.displayName = "Background";
const F3 = k.memo(RP);
function z3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: N.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function $3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: N.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function B3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: N.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function V3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function H3() {
  return N.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function ql({ children: e, className: t, ...n }) {
  return N.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const W3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function NP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const S = He(), { isInteractive: y, minZoomReached: x, maxZoomReached: _, ariaLabelConfig: C } = Ae(W3, Qe), { zoomIn: b, zoomOut: R, fitView: P } = Yy(), T = () => {
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
  }, G = m === "horizontal" ? "horizontal" : "vertical";
  return N.jsxs(ia, { className: nt(["react-flow__controls", G, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && N.jsxs(N.Fragment, { children: [N.jsx(ql, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: _, children: N.jsx(z3, {}) }), N.jsx(ql, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: N.jsx($3, {}) })] }), n && N.jsx(ql, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: N.jsx(B3, {}) }), o && N.jsx(ql, { className: "react-flow__controls-interactive", onClick: j, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? N.jsx(H3, {}) : N.jsx(V3, {}) }), h] });
}
NP.displayName = "Controls";
const U3 = k.memo(NP);
function G3({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: S, backgroundColor: y } = a || {}, x = l || S || y;
  return N.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (_) => v(_, e) : void 0 });
}
const Y3 = k.memo(G3), K3 = (e) => e.nodes.map((t) => t.id), Rd = (e) => e instanceof Function ? e : () => e;
function X3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = Y3,
  onClick: l
}) {
  const u = Ae(K3, Qe), f = Rd(t), d = Rd(e), h = Rd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return N.jsx(N.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    N.jsx(Z3, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function Q3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Ae((S) => {
    const { internals: y } = S.nodeLookup.get(e), x = y.userNode, { x: _, y: C } = y.positionAbsolute, { width: b, height: R } = tr(x);
    return {
      node: x,
      x: _,
      y: C,
      width: b,
      height: R
    };
  }, Qe);
  return !d || d.hidden || !RN(d) ? null : N.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const Z3 = k.memo(Q3);
var J3 = k.memo(X3);
const ez = 200, tz = 150, nz = (e) => !e.hidden, rz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? kN(ta(e.nodeLookup, { filter: nz }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, oz = "react-flow__minimap-desc";
function PP({
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
  const P = He(), T = k.useRef(null), { boundingRect: A, viewBB: O, rfId: j, panZoom: G, translateExtent: F, flowWidth: V, flowHeight: W, ariaLabelConfig: L } = Ae(rz, Qe), H = (e == null ? void 0 : e.width) ?? ez, q = (e == null ? void 0 : e.height) ?? tz, Y = A.width / H, M = A.height / q, z = Math.max(Y, M), Q = z * H, D = z * q, U = R * z, ie = A.x - (Q - A.width) / 2 - U, B = A.y - (D - A.height) / 2 - U, Z = Q + U * 2, ee = D + U * 2, X = `${oz}-${j}`, te = k.useRef(0), se = k.useRef();
  te.current = z, k.useEffect(() => {
    if (T.current && G)
      return se.current = bq({
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
      translateExtent: F,
      width: V,
      height: W,
      inversePan: C,
      pannable: y,
      zoomStep: b,
      zoomable: x
    });
  }, [y, x, C, b, F, V, W]);
  const ae = v ? (pe) => {
    var Ne;
    const [_e, me] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    v(pe, { x: _e, y: me });
  } : void 0, ce = S ? k.useCallback((pe, _e) => {
    const me = P.getState().nodeLookup.get(_e).internals.userNode;
    S(pe, me);
  }, []) : void 0, de = _ ?? L["minimap.ariaLabel"];
  return N.jsx(ia, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * z : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: N.jsxs("svg", { width: H, height: q, viewBox: `${ie} ${B} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": X, ref: T, onClick: ae, children: [de && N.jsx("title", { id: X, children: de }), N.jsx(J3, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), N.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - U},${B - U}h${Z + U * 2}v${ee + U * 2}h${-Z - U * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
PP.displayName = "MiniMap";
k.memo(PP);
const iz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, sz = {
  [wi.Line]: "right",
  [wi.Handle]: "bottom-right"
};
function az({ nodeId: e, position: t, variant: n = wi.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: S, onResizeStart: y, onResize: x, onResizeEnd: _ }) {
  const C = sP(), b = typeof e == "string" ? e : C, R = He(), P = k.useRef(null), T = n === wi.Handle, A = Ae(k.useCallback(iz(T && v), [T, v]), Qe), O = k.useRef(null), j = t ?? sz[n];
  k.useEffect(() => {
    if (!(!P.current || !b))
      return O.current || (O.current = Lq({
        domNode: P.current,
        nodeId: b,
        getStoreItems: () => {
          const { nodeLookup: F, transform: V, snapGrid: W, snapToGrid: L, nodeOrigin: H, domNode: q } = R.getState();
          return {
            nodeLookup: F,
            transform: V,
            snapGrid: W,
            snapToGrid: L,
            nodeOrigin: H,
            paneDomNode: q
          };
        },
        onChange: (F, V) => {
          const { triggerNodeChanges: W, nodeLookup: L, parentLookup: H, nodeOrigin: q } = R.getState(), Y = [], M = { x: F.x, y: F.y }, z = L.get(b);
          if (z && z.expandParent && z.parentId) {
            const Q = z.origin ?? q, D = F.width ?? z.measured.width ?? 0, U = F.height ?? z.measured.height ?? 0, ie = {
              id: z.id,
              parentId: z.parentId,
              rect: {
                width: D,
                height: U,
                ...NN({
                  x: F.x ?? z.position.x,
                  y: F.y ?? z.position.y
                }, { width: D, height: U }, z.parentId, L, Q)
              }
            }, B = Gy([ie], L, H, q);
            Y.push(...B), M.x = F.x ? Math.max(Q[0] * D, F.x) : void 0, M.y = F.y ? Math.max(Q[1] * U, F.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: b,
              type: "position",
              position: { ...M }
            };
            Y.push(Q);
          }
          if (F.width !== void 0 && F.height !== void 0) {
            const D = {
              id: b,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: F.width,
                height: F.height
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
          W(Y);
        },
        onEnd: ({ width: F, height: V }) => {
          const W = {
            id: b,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: F,
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
        var F;
        (F = O.current) == null || F.destroy();
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
  const G = j.split("-");
  return N.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, n, o]), ref: P, style: {
    ...i,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
k.memo(az);
function TP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = TP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function IP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = TP(e)) && (o && (o += " "), o += t);
  return o;
}
const lz = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, uz = (e, t) => ({
  classGroupId: e,
  validator: t
}), AP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), du = "-", bb = [], cz = "arbitrary..", fz = (e) => {
  const t = hz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return dz(l);
      const u = l.split(du), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return MP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? lz(d, f) : f : d || bb;
      }
      return n[l] || bb;
    }
  };
}, MP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = MP(e, t + 1, a);
    if (d) return d;
  }
  const l = n.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(du) : e.slice(t).join(du), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, dz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? cz + o : void 0;
})(), hz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return pz(n, t);
}, pz = (e, t) => {
  const n = AP();
  for (const o in e) {
    const i = e[o];
    Xy(i, n, o, t);
  }
  return n;
}, Xy = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    gz(l, t, n, o);
  }
}, gz = (e, t, n, o) => {
  if (typeof e == "string") {
    mz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    vz(e, t, n, o);
    return;
  }
  yz(e, t, n, o);
}, mz = (e, t, n) => {
  const o = e === "" ? t : OP(t, e);
  o.classGroupId = n;
}, vz = (e, t, n, o) => {
  if (wz(e)) {
    Xy(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(uz(n, e));
}, yz = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    Xy(f, OP(t, u), n, o);
  }
}, OP = (e, t) => {
  let n = e;
  const o = t.split(du), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = AP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, wz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, xz = (e) => {
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
}, yy = "!", _b = ":", bz = [], Sb = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), _z = (e) => {
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
        if (x === _b) {
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
    p.endsWith(yy) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(yy) && (m = p.slice(1), v = !0)
    );
    const S = d && d > f ? d - f : void 0;
    return Sb(a, v, m, S);
  };
  if (t) {
    const i = t + _b, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : Sb(bz, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, Sz = (e) => {
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
}, Ez = (e) => ({
  cache: xz(e.cacheSize),
  parseClassName: _z(e),
  sortModifiers: Sz(e),
  ...fz(e)
}), Cz = /\s+/, kz = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(Cz);
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
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), b = v ? C + yy : C, R = b + _;
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
}, Rz = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = LP(n)) && (i && (i += " "), i += o);
  return i;
}, LP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = LP(e[o])) && (n && (n += " "), n += t);
  return n;
}, Nz = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = Ez(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = kz(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(Rz(...f));
}, Pz = [], st = (e) => {
  const t = (n) => n[e] || Pz;
  return t.isThemeGetter = !0, t;
}, DP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Tz = /^\d+\/\d+$/, Iz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Az = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Oz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ei = (e) => Tz.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Nr = (e) => !!e && Number.isInteger(Number(e)), Nd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Xn = (e) => Iz.test(e), Dz = () => !0, jz = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Az.test(e) && !Mz.test(e)
), qP = () => !1, qz = (e) => Oz.test(e), Fz = (e) => Lz.test(e), zz = (e) => !xe(e) && !be(e), $z = (e) => _i(e, $P, qP), xe = (e) => DP.test(e), oo = (e) => _i(e, BP, jz), Pd = (e) => _i(e, Uz, Te), Eb = (e) => _i(e, FP, qP), Bz = (e) => _i(e, zP, Fz), Fl = (e) => _i(e, VP, qz), be = (e) => jP.test(e), Rs = (e) => Si(e, BP), Vz = (e) => Si(e, Gz), Cb = (e) => Si(e, FP), Hz = (e) => Si(e, $P), Wz = (e) => Si(e, zP), zl = (e) => Si(e, VP, !0), _i = (e, t, n) => {
  const o = DP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, Si = (e, t, n = !1) => {
  const o = jP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, FP = (e) => e === "position" || e === "percentage", zP = (e) => e === "image" || e === "url", $P = (e) => e === "length" || e === "size" || e === "bg-size", BP = (e) => e === "length", Uz = (e) => e === "number", Gz = (e) => e === "family-name", VP = (e) => e === "shadow", Yz = () => {
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
  ], P = () => [...R(), be, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [be, xe, f], j = () => [ei, "full", "auto", ...O()], G = () => [Nr, "none", "subgrid", be, xe], F = () => ["auto", {
    span: ["full", Nr, be, xe]
  }, Nr, be, xe], V = () => [Nr, "auto", be, xe], W = () => ["auto", "min", "max", "fr", be, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...O()], Y = () => [ei, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, be, xe], z = () => [...R(), Cb, Eb, {
    position: [be, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", Hz, $z, {
    size: [be, xe]
  }], U = () => [Nd, Rs, oo], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    be,
    xe
  ], B = () => ["", Te, Rs, oo], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [Te, Nd, Cb, Eb], te = () => [
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
      color: [Dz],
      container: [Xn],
      "drop-shadow": [Xn],
      ease: ["in", "out", "in-out"],
      font: [zz],
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
        col: F()
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
        "grid-rows": G()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
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
        text: ["base", n, Rs, oo]
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
        font: [o, be, Pd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Nd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Vz, xe, t]
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
        "line-clamp": [Te, "none", be, Pd]
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
          }, Nr, be, xe],
          radial: ["", be, xe],
          conic: [Nr, be, xe]
        }, Wz, Bz]
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
        outline: ["", Te, Rs, oo]
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
          zl,
          Fl
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
        "inset-shadow": ["none", p, zl, Fl]
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
        "text-shadow": ["none", m, zl, Fl]
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
          zl,
          Fl
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
        stroke: [Te, Rs, oo, Pd]
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
}, Kz = /* @__PURE__ */ Nz(Yz);
function Me(...e) {
  return Kz(IP(e));
}
function ju(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(ju, { type: f, position: d, id: u.id });
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
const Xz = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function HP(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? ye.Left : ye.Right, m = d.label + (d.required ? " *" : "");
    return /* @__PURE__ */ N.jsx(HP, { type: h, position: p, id: d.id, title: m });
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
        Xz[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ N.jsx(
          ju,
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
const Qz = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function WP(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? ye.Left : ye.Right;
    return /* @__PURE__ */ N.jsx(WP, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ N.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ N.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: n = ye.Bottom,
    children: o,
    ...i
  } = e, a = Qz[n || ye.Bottom], l = n === ye.Top || n === ye.Bottom;
  return /* @__PURE__ */ N.jsx(ju, { position: n, id: i.id, ...i, children: t && /* @__PURE__ */ N.jsxs(
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
function hu({ className: e, type: t, ...n }) {
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
const UP = qt.createContext(null);
function Ei() {
  return qt.useContext(UP);
}
function Zz(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function Jz(e) {
  var a;
  if ("component" in e) {
    const { component: l, onValueChange: u } = e, f = Ei(), d = ((a = f == null ? void 0 : f.nodeData.values) == null ? void 0 : a[l.id]) ?? l.value ?? "", h = l.label ?? Zz(l.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-text-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: h }),
      /* @__PURE__ */ N.jsx(
        hu,
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
    hu,
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
function e$(e) {
  let t = e.replace(/[_-]/g, " ");
  return t = t.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), " "), t = t.split(" ").map(
    (n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
  ).join(" "), t;
}
function t$(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = Ei(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? 0, p = u.label ?? e$(u.id);
    return /* @__PURE__ */ N.jsxs("div", { className: "component-number-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: p }),
      /* @__PURE__ */ N.jsx(
        hu,
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
    hu,
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
function kb(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ci(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = kb(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : kb(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return k.useCallback(Ci(...e), e);
}
function n$(e, t) {
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
  return i.scopeName = e, [o, r$(i, ...t)];
}
function r$(...e) {
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
}, o$ = Ay[" useInsertionEffect ".trim().toString()] || yt;
function Gs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = i$({
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
        const m = s$(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function i$({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = k.useState(e), i = k.useRef(n), a = k.useRef(t);
  return o$(() => {
    a.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function s$(e) {
  return typeof e == "function";
}
function GP(e) {
  const t = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function YP(e) {
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
function a$(e, t) {
  return k.useReducer((n, o) => t[n][o] ?? n, e);
}
var wo = (e) => {
  const { present: t, children: n } = e, o = l$(t), i = typeof n == "function" ? n({ present: o.isPresent }) : k.Children.only(n), a = Be(o.ref, u$(i));
  return typeof n == "function" || o.isPresent ? k.cloneElement(i, { ref: a }) : null;
};
wo.displayName = "Presence";
function l$(e) {
  const [t, n] = k.useState(), o = k.useRef(null), i = k.useRef(e), a = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = a$(l, {
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
    const d = $l(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = $l(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = $l(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = $l(o.current));
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
function $l(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function u$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function c$(e) {
  const t = /* @__PURE__ */ f$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(h$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function f$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = g$(i), u = p$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var d$ = Symbol("radix.slottable");
function h$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === d$;
}
function p$(e, t) {
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
function g$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var m$ = [
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
], je = m$.reduce((e, t) => {
  const n = /* @__PURE__ */ c$(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function v$(e, t) {
  e && oa.flushSync(() => e.dispatchEvent(t));
}
var qu = "Checkbox", [y$] = ki(qu), [w$, Qy] = y$(qu);
function x$(e) {
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
  } = e, [m, v] = Gs({
    prop: n,
    defaultProp: i ?? !1,
    onChange: f,
    caller: qu
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
    defaultChecked: Ar(i) ? !1 : i,
    isFormControl: b,
    bubbleInput: x,
    setBubbleInput: _
  };
  return /* @__PURE__ */ N.jsx(
    w$,
    {
      scope: t,
      ...R,
      children: b$(p) ? p(R) : o
    }
  );
}
var KP = "CheckboxTrigger", XP = k.forwardRef(
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
    } = Qy(KP, e), y = Be(i, h), x = k.useRef(f);
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
        "aria-checked": Ar(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": nT(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Le(t, (_) => {
          _.key === "Enter" && _.preventDefault();
        }),
        onClick: Le(n, (_) => {
          p((C) => Ar(C) ? !0 : !C), S && v && (m.current = _.isPropagationStopped(), m.current || _.stopPropagation());
        })
      }
    );
  }
);
XP.displayName = KP;
var QP = k.forwardRef(
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
      x$,
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
            XP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ N.jsx(
            tT,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
QP.displayName = qu;
var ZP = "CheckboxIndicator", JP = k.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = Qy(ZP, n);
    return /* @__PURE__ */ N.jsx(
      wo,
      {
        present: o || Ar(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ N.jsx(
          je.span,
          {
            "data-state": nT(a.checked),
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
JP.displayName = ZP;
var eT = "CheckboxBubbleInput", tT = k.forwardRef(
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
    } = Qy(eT, e), S = Be(n, v), y = GP(a), x = YP(o);
    k.useEffect(() => {
      const C = m;
      if (!C) return;
      const b = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, T = !i.current;
      if (y !== a && P) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Ar(a), P.call(C, Ar(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [m, y, a, i]);
    const _ = k.useRef(Ar(a) ? !1 : a);
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
tT.displayName = eT;
function b$(e) {
  return typeof e == "function";
}
function Ar(e) {
  return e === "indeterminate";
}
function nT(e) {
  return Ar(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), S$ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Rb = (e) => {
  const t = S$(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, rT = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), E$ = (e) => {
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
var C$ = {
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
const k$ = k.forwardRef(
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
      ...C$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: rT("lucide", i),
      ...!a && !E$(u) && { "aria-hidden": "true" },
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
    ({ className: o, ...i }, a) => k.createElement(k$, {
      ref: a,
      iconNode: t,
      className: rT(
        `lucide-${_$(Rb(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = Rb(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R$ = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], N$ = jn("arrow-down-wide-narrow", R$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P$ = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], T$ = jn("arrow-right-from-line", P$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I$ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], oT = jn("check", I$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], iT = jn("chevron-down", A$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], O$ = jn("chevron-up", M$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L$ = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], D$ = jn("download", L$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j$ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], q$ = jn("panel-left", j$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F$ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], z$ = jn("plus", F$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $$ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], B$ = jn("trash-2", $$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V$ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], H$ = jn("x", V$);
function Nb({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    QP,
    {
      "data-slot": "checkbox",
      className: Me(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(
        JP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ N.jsx(oT, { className: "size-3.5" })
        }
      )
    }
  );
}
function W$(e) {
  var i;
  if ("component" in e) {
    const { component: a, onValueChange: l } = e, u = Ei(), f = ((i = u == null ? void 0 : u.nodeData.values) == null ? void 0 : i[a.id]) ?? a.value ?? !1;
    return /* @__PURE__ */ N.jsxs("div", { className: "component-bool-field w-full flex items-center gap-2", children: [
      /* @__PURE__ */ N.jsx(
        Nb,
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
    Nb,
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
function Pb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function Tb(e) {
  const t = /* @__PURE__ */ U$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(Y$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function U$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = X$(i), u = K$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var G$ = Symbol("radix.slottable");
function Y$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === G$;
}
function K$(e, t) {
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
function X$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Q$(e) {
  const t = e + "CollectionProvider", [n, o] = ki(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: _ } = y, C = qt.useRef(null), b = qt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.jsx(i, { scope: x, itemMap: b, collectionRef: C, children: _ });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ Tb(u), d = qt.forwardRef(
    (y, x) => {
      const { scope: _, children: C } = y, b = a(u, _), R = Be(x, b.collectionRef);
      return /* @__PURE__ */ N.jsx(f, { ref: R, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Tb(h), v = qt.forwardRef(
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
var Z$ = k.createContext(void 0);
function J$(e) {
  const t = k.useContext(Z$);
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
function e4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e);
  k.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var t4 = "DismissableLayer", wy = "dismissableLayer.update", n4 = "dismissableLayer.pointerDownOutside", r4 = "dismissableLayer.focusOutside", Ib, sT = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fu = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = k.useContext(sT), [h, p] = k.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = k.useState({}), S = Be(t, (A) => p(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), _ = y.indexOf(x), C = h ? y.indexOf(h) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, R = C >= _, P = s4((A) => {
      const O = A.target, j = [...d.branches].some((G) => G.contains(O));
      !R || j || (i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m), T = a4((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m);
    return e4((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, m), k.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ib = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), Ab(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ib);
        };
    }, [h, m, n, d]), k.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), Ab());
    }, [h, d]), k.useEffect(() => {
      const A = () => v({});
      return document.addEventListener(wy, A), () => document.removeEventListener(wy, A);
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
Fu.displayName = t4;
var o4 = "DismissableLayerBranch", i4 = k.forwardRef((e, t) => {
  const n = k.useContext(sT), o = k.useRef(null), i = Be(t, o);
  return k.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ N.jsx(je.div, { ...e, ref: i });
});
i4.displayName = o4;
function s4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e), o = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          aT(
            n4,
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
function a4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = po(e), o = k.useRef(!1);
  return k.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && aT(r4, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Ab() {
  const e = new CustomEvent(wy);
  document.dispatchEvent(e);
}
function aT(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? v$(i, a) : i.dispatchEvent(a);
}
var Td = 0;
function lT() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Mb()), document.body.insertAdjacentElement("beforeend", e[1] ?? Mb()), Td++, () => {
      Td === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Td--;
    };
  }, []);
}
function Mb() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Id = "focusScope.autoFocusOnMount", Ad = "focusScope.autoFocusOnUnmount", Ob = { bubbles: !1, cancelable: !0 }, l4 = "FocusScope", Zy = k.forwardRef((e, t) => {
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
        u.contains(R) ? p.current = R : Pr(p.current, { select: !0 });
      }, x = function(b) {
        if (v.paused || !u) return;
        const R = b.relatedTarget;
        R !== null && (u.contains(R) || Pr(p.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const P of b)
            P.removedNodes.length > 0 && Pr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(_);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, v.paused]), k.useEffect(() => {
    if (u) {
      Db.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const _ = new CustomEvent(Id, Ob);
        u.addEventListener(Id, d), u.dispatchEvent(_), _.defaultPrevented || (u4(p4(uT(u)), { select: !0 }), document.activeElement === y && Pr(u));
      }
      return () => {
        u.removeEventListener(Id, d), setTimeout(() => {
          const _ = new CustomEvent(Ad, Ob);
          u.addEventListener(Ad, h), u.dispatchEvent(_), _.defaultPrevented || Pr(y ?? document.body, { select: !0 }), u.removeEventListener(Ad, h), Db.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const S = k.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, _ = document.activeElement;
      if (x && _) {
        const C = y.currentTarget, [b, R] = c4(C);
        b && R ? !y.shiftKey && _ === R ? (y.preventDefault(), n && Pr(b, { select: !0 })) : y.shiftKey && _ === b && (y.preventDefault(), n && Pr(R, { select: !0 })) : _ === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ N.jsx(je.div, { tabIndex: -1, ...l, ref: m, onKeyDown: S });
});
Zy.displayName = l4;
function u4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Pr(o, { select: t }), document.activeElement !== n) return;
}
function c4(e) {
  const t = uT(e), n = Lb(t, e), o = Lb(t.reverse(), e);
  return [n, o];
}
function uT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Lb(e, t) {
  for (const n of e)
    if (!f4(n, { upTo: t })) return n;
}
function f4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function d4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && d4(e) && t && e.select();
  }
}
var Db = h4();
function h4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = jb(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = jb(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function jb(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function p4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var g4 = Ay[" useId ".trim().toString()] || (() => {
}), m4 = 0;
function uo(e) {
  const [t, n] = k.useState(g4());
  return yt(() => {
    n((o) => o ?? String(m4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const v4 = ["top", "right", "bottom", "left"], Or = Math.min, Ft = Math.max, pu = Math.round, Bl = Math.floor, Mn = (e) => ({
  x: e,
  y: e
}), y4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, w4 = {
  start: "end",
  end: "start"
};
function xy(e, t, n) {
  return Ft(e, Or(t, n));
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
function Jy(e) {
  return e === "x" ? "y" : "x";
}
function e0(e) {
  return e === "y" ? "height" : "width";
}
const x4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function In(e) {
  return x4.has(er(e)) ? "y" : "x";
}
function t0(e) {
  return Jy(In(e));
}
function b4(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ri(e), i = t0(e), a = e0(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = gu(l)), [l, gu(l)];
}
function _4(e) {
  const t = gu(e);
  return [by(e), t, by(t)];
}
function by(e) {
  return e.replace(/start|end/g, (t) => w4[t]);
}
const qb = ["left", "right"], Fb = ["right", "left"], S4 = ["top", "bottom"], E4 = ["bottom", "top"];
function C4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Fb : qb : t ? qb : Fb;
    case "left":
    case "right":
      return t ? S4 : E4;
    default:
      return [];
  }
}
function k4(e, t, n, o) {
  const i = Ri(e);
  let a = C4(er(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(by)))), a;
}
function gu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => y4[t]);
}
function R4(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cT(e) {
  return typeof e != "number" ? R4(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mu(e) {
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
function zb(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = In(t), l = t0(t), u = e0(l), f = er(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
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
const N4 = async (e, t, n) => {
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
  } = zb(d, o, f), m = o, v = {}, S = 0;
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
    } = zb(d, m, f)), y = -1);
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
  } = Jn(t, e), S = cT(v), x = u[m ? p === "floating" ? "reference" : "floating" : p], _ = mu(await a.getClippingRect({
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
  }, P = mu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const P4 = (e) => ({
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
    const p = cT(h), m = {
      x: n,
      y: o
    }, v = t0(i), S = e0(v), y = await l.getDimensions(d), x = v === "y", _ = x ? "top" : "left", C = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", R = a.reference[S] + a.reference[v] - m[v] - a.floating[S], P = m[v] - a.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[b] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[b] || a.floating[S]);
    const O = R / 2 - P / 2, j = A / 2 - y[S] / 2 - 1, G = Or(p[_], j), F = Or(p[C], j), V = G, W = A - y[S] - F, L = A / 2 - y[S] / 2 + O, H = xy(V, L, W), q = !f.arrow && Ri(i) != null && L !== H && a.reference[S] / 2 - (L < V ? G : F) - y[S] / 2 < 0, Y = q ? L < V ? L - V : L - W : 0;
    return {
      [v]: m[v] + Y,
      data: {
        [v]: H,
        centerOffset: L - H - Y,
        ...q && {
          alignmentOffset: Y
        }
      },
      reset: q
    };
  }
}), T4 = function(e) {
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
      const _ = er(i), C = In(u), b = er(u) === u, R = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (b || !y ? [gu(u)] : _4(u)), T = S !== "none";
      !m && T && P.push(...k4(u, y, S, R));
      const A = [u, ...P], O = await Ys(t, x), j = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && j.push(O[_]), p) {
        const L = b4(i, l, R);
        j.push(O[L[0]], O[L[1]]);
      }
      if (G = [...G, {
        placement: i,
        overflows: j
      }], !j.every((L) => L <= 0)) {
        var F, V;
        const L = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, H = A[L];
        if (H && (!(p === "alignment" ? C !== In(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        G.every((M) => In(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: G
            },
            reset: {
              placement: H
            }
          };
        let q = (V = G.filter((Y) => Y.overflows[0] <= 0).sort((Y, M) => Y.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var W;
              const Y = (W = G.filter((M) => {
                if (T) {
                  const z = In(M.placement);
                  return z === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, Q) => z + Q, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : W[0];
              Y && (q = Y);
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
function $b(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Bb(e) {
  return v4.some((t) => e[t] >= 0);
}
const I4 = function(e) {
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
          }), l = $b(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Bb(l)
            }
          };
        }
        case "escaped": {
          const a = await Ys(t, {
            ...i,
            altBoundary: !0
          }), l = $b(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Bb(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, fT = /* @__PURE__ */ new Set(["left", "top"]);
async function A4(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = er(n), u = Ri(n), f = In(n) === "y", d = fT.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Jn(t, e);
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
const M4 = function(e) {
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
      } = t, f = await A4(t, e);
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
}, O4 = function(e) {
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
      } = Jn(e, t), d = {
        x: n,
        y: o
      }, h = await Ys(t, f), p = In(er(i)), m = Jy(p);
      let v = d[m], S = d[p];
      if (a) {
        const x = m === "y" ? "top" : "left", _ = m === "y" ? "bottom" : "right", C = v + h[x], b = v - h[_];
        v = xy(C, v, b);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", C = S + h[x], b = S - h[_];
        S = xy(C, S, b);
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
}, L4 = function(e) {
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
      }, p = In(i), m = Jy(p);
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
        const b = m === "y" ? "height" : "width", R = a.reference[m] - a.floating[b] + x.mainAxis, P = a.reference[m] + a.reference[b] - x.mainAxis;
        v < R ? v = R : v > P && (v = P);
      }
      if (d) {
        var _, C;
        const b = m === "y" ? "width" : "height", R = fT.has(er(i)), P = a.reference[p] - a.floating[b] + (R && ((_ = l.offset) == null ? void 0 : _[p]) || 0) + (R ? 0 : x.crossAxis), T = a.reference[p] + a.reference[b] + (R ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (R ? x.crossAxis : 0);
        S < P ? S = P : S > T && (S = T);
      }
      return {
        [m]: v,
        [p]: S
      };
    }
  };
}, D4 = function(e) {
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
      let x, _;
      p === "top" || p === "bottom" ? (x = p, _ = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, b = S - h.left - h.right, R = Or(y - h[x], C), P = Or(S - h[_], b), T = !t.middlewareData.shift;
      let A = R, O = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = b), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !m) {
        const G = Ft(h.left, 0), F = Ft(h.right, 0), V = Ft(h.top, 0), W = Ft(h.bottom, 0);
        v ? O = S - 2 * (G !== 0 || F !== 0 ? G + F : Ft(h.left, h.right)) : A = y - 2 * (V !== 0 || W !== 0 ? V + W : Ft(h.top, h.bottom));
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
function zu() {
  return typeof window < "u";
}
function Ni(e) {
  return dT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  var t;
  return (t = (dT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dT(e) {
  return zu() ? e instanceof Node || e instanceof $t(e).Node : !1;
}
function vn(e) {
  return zu() ? e instanceof Element || e instanceof $t(e).Element : !1;
}
function Ln(e) {
  return zu() ? e instanceof HTMLElement || e instanceof $t(e).HTMLElement : !1;
}
function Vb(e) {
  return !zu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
const j4 = /* @__PURE__ */ new Set(["inline", "contents"]);
function sa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !j4.has(i);
}
const q4 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function F4(e) {
  return q4.has(Ni(e));
}
const z4 = [":popover-open", ":modal"];
function $u(e) {
  return z4.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const $4 = ["transform", "translate", "scale", "rotate", "perspective"], B4 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], V4 = ["paint", "layout", "strict", "content"];
function n0(e) {
  const t = r0(), n = vn(e) ? yn(e) : e;
  return $4.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || B4.some((o) => (n.willChange || "").includes(o)) || V4.some((o) => (n.contain || "").includes(o));
}
function H4(e) {
  let t = Lr(e);
  for (; Ln(t) && !xi(t); ) {
    if (n0(t))
      return t;
    if ($u(t))
      return null;
    t = Lr(t);
  }
  return null;
}
function r0() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const W4 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xi(e) {
  return W4.has(Ni(e));
}
function yn(e) {
  return $t(e).getComputedStyle(e);
}
function Bu(e) {
  return vn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Lr(e) {
  if (Ni(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Vb(e) && e.host || // Fallback.
    qn(e)
  );
  return Vb(t) ? t.host : t;
}
function hT(e) {
  const t = Lr(e);
  return xi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && sa(t) ? t : hT(t);
}
function Ks(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = hT(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = $t(i);
  if (a) {
    const u = _y(l);
    return t.concat(l, l.visualViewport || [], sa(i) ? i : [], u && n ? Ks(u) : []);
  }
  return t.concat(i, Ks(i, [], n));
}
function _y(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pT(e) {
  const t = yn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Ln(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = pu(n) !== a || pu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function o0(e) {
  return vn(e) ? e : e.contextElement;
}
function ci(e) {
  const t = o0(e);
  if (!Ln(t))
    return Mn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = pT(t);
  let l = (a ? pu(n.width) : n.width) / o, u = (a ? pu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const U4 = /* @__PURE__ */ Mn(0);
function gT(e) {
  const t = $t(e);
  return !r0() || !t.visualViewport ? U4 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function G4(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function go(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = o0(e);
  let l = Mn(1);
  t && (o ? vn(o) && (l = ci(o)) : l = ci(e));
  const u = G4(a, n, o) ? gT(a) : Mn(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = $t(a), v = o && vn(o) ? $t(o) : o;
    let S = m, y = _y(S);
    for (; y && o && v !== S; ) {
      const x = ci(y), _ = y.getBoundingClientRect(), C = yn(y), b = _.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, R = _.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, p *= x.y, f += b, d += R, S = $t(y), y = _y(S);
    }
  }
  return mu({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Vu(e, t) {
  const n = Bu(e).scrollLeft;
  return t ? t.left + n : go(qn(e)).left + n;
}
function mT(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Vu(e, n), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Y4(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const a = i === "fixed", l = qn(o), u = t ? $u(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Mn(1);
  const h = Mn(0), p = Ln(o);
  if ((p || !p && !a) && ((Ni(o) !== "body" || sa(l)) && (f = Bu(o)), Ln(o))) {
    const v = go(o);
    d = ci(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? mT(l, f) : Mn(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function K4(e) {
  return Array.from(e.getClientRects());
}
function X4(e) {
  const t = qn(e), n = Bu(e), o = e.ownerDocument.body, i = Ft(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = Ft(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Vu(e);
  const u = -n.scrollTop;
  return yn(o).direction === "rtl" && (l += Ft(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const Hb = 25;
function Q4(e, t) {
  const n = $t(e), o = qn(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = r0();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Vu(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, S = Math.abs(o.clientWidth - p.clientWidth - v);
    S <= Hb && (a -= S);
  } else d <= Hb && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const Z4 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function J4(e, t) {
  const n = go(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ln(e) ? ci(e) : Mn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function Wb(e, t, n) {
  let o;
  if (t === "viewport")
    o = Q4(e, n);
  else if (t === "document")
    o = X4(qn(e));
  else if (vn(t))
    o = J4(t, n);
  else {
    const i = gT(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return mu(o);
}
function vT(e, t) {
  const n = Lr(e);
  return n === t || !vn(n) || xi(n) ? !1 : yn(n).position === "fixed" || vT(n, t);
}
function eB(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ks(e, [], !1).filter((u) => vn(u) && Ni(u) !== "body"), i = null;
  const a = yn(e).position === "fixed";
  let l = a ? Lr(e) : e;
  for (; vn(l) && !xi(l); ) {
    const u = yn(l), f = n0(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && Z4.has(i.position) || sa(l) && !f && vT(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Lr(l);
  }
  return t.set(e, o), o;
}
function tB(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? $u(t) ? [] : eB(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = Wb(t, h, i);
    return d.top = Ft(p.top, d.top), d.right = Or(p.right, d.right), d.bottom = Or(p.bottom, d.bottom), d.left = Ft(p.left, d.left), d;
  }, Wb(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function nB(e) {
  const {
    width: t,
    height: n
  } = pT(e);
  return {
    width: t,
    height: n
  };
}
function rB(e, t, n) {
  const o = Ln(t), i = qn(t), a = n === "fixed", l = go(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Mn(0);
  function d() {
    f.x = Vu(i);
  }
  if (o || !o && !a)
    if ((Ni(t) !== "body" || sa(i)) && (u = Bu(t)), o) {
      const v = go(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? mT(i, u) : Mn(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Md(e) {
  return yn(e).position === "static";
}
function Ub(e, t) {
  if (!Ln(e) || yn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qn(e) === n && (n = n.ownerDocument.body), n;
}
function yT(e, t) {
  const n = $t(e);
  if ($u(e))
    return n;
  if (!Ln(e)) {
    let i = Lr(e);
    for (; i && !xi(i); ) {
      if (vn(i) && !Md(i))
        return i;
      i = Lr(i);
    }
    return n;
  }
  let o = Ub(e, t);
  for (; o && F4(o) && Md(o); )
    o = Ub(o, t);
  return o && xi(o) && Md(o) && !n0(o) ? n : o || H4(e) || n;
}
const oB = async function(e) {
  const t = this.getOffsetParent || yT, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: rB(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function iB(e) {
  return yn(e).direction === "rtl";
}
const sB = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Y4,
  getDocumentElement: qn,
  getClippingRect: tB,
  getOffsetParent: yT,
  getElementRects: oB,
  getClientRects: K4,
  getDimensions: nB,
  getScale: ci,
  isElement: vn,
  isRTL: iB
};
function wT(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function aB(e, t) {
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
    const S = Bl(p), y = Bl(i.clientWidth - (h + m)), x = Bl(i.clientHeight - (p + v)), _ = Bl(h), b = {
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
      A === 1 && !wT(d, e.getBoundingClientRect()) && l(), R = !1;
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
function lB(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = o0(e), h = i || a ? [...d ? Ks(d) : [], ...Ks(t)] : [];
  h.forEach((_) => {
    i && _.addEventListener("scroll", n, {
      passive: !0
    }), a && _.addEventListener("resize", n);
  });
  const p = d && u ? aB(d, n) : null;
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
    y && !wT(y, _) && n(), y = _, S = requestAnimationFrame(x);
  }
  return n(), () => {
    var _;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (_ = v) == null || _.disconnect(), v = null, f && cancelAnimationFrame(S);
  };
}
const uB = M4, cB = O4, fB = T4, dB = D4, hB = I4, Gb = P4, pB = L4, gB = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: sB,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return N4(e, t, {
    ...i,
    platform: a
  });
};
var mB = typeof document < "u", vB = function() {
}, Zl = mB ? k.useLayoutEffect : vB;
function vu(e, t) {
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
        if (!vu(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !vu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function xT(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yb(e, t) {
  const n = xT(e);
  return Math.round(t * n) / n;
}
function Od(e) {
  const t = k.useRef(e);
  return Zl(() => {
    t.current = e;
  }), t;
}
function yB(e) {
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
  vu(m, o) || v(o);
  const [S, y] = k.useState(null), [x, _] = k.useState(null), C = k.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), b = k.useCallback((M) => {
    M !== A.current && (A.current = M, _(M));
  }, []), R = a || S, P = l || x, T = k.useRef(null), A = k.useRef(null), O = k.useRef(h), j = f != null, G = Od(f), F = Od(i), V = Od(d), W = k.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    F.current && (M.platform = F.current), gB(T.current, A.current, M).then((z) => {
      const Q = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !vu(O.current, Q) && (O.current = Q, oa.flushSync(() => {
        p(Q);
      }));
    });
  }, [m, t, n, F, V]);
  Zl(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = k.useRef(!1);
  Zl(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Zl(() => {
    if (R && (T.current = R), P && (A.current = P), R && P) {
      if (G.current)
        return G.current(R, P, W);
      W();
    }
  }, [R, P, W, G, j]);
  const H = k.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: b
  }), [C, b]), q = k.useMemo(() => ({
    reference: R,
    floating: P
  }), [R, P]), Y = k.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return M;
    const z = Yb(q.floating, h.x), Q = Yb(q.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + z + "px, " + Q + "px)",
      ...xT(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: Q
    };
  }, [n, u, q.floating, h.x, h.y]);
  return k.useMemo(() => ({
    ...h,
    update: W,
    refs: H,
    elements: q,
    floatingStyles: Y
  }), [h, W, H, q, Y]);
}
const wB = (e) => {
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
      return o && t(o) ? o.current != null ? Gb({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? Gb({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, xB = (e, t) => ({
  ...uB(e),
  options: [e, t]
}), bB = (e, t) => ({
  ...cB(e),
  options: [e, t]
}), _B = (e, t) => ({
  ...pB(e),
  options: [e, t]
}), SB = (e, t) => ({
  ...fB(e),
  options: [e, t]
}), EB = (e, t) => ({
  ...dB(e),
  options: [e, t]
}), CB = (e, t) => ({
  ...hB(e),
  options: [e, t]
}), kB = (e, t) => ({
  ...wB(e),
  options: [e, t]
});
var RB = "Arrow", bT = k.forwardRef((e, t) => {
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
bT.displayName = RB;
var NB = bT, i0 = "Popper", [_T, Hu] = ki(i0), [PB, ST] = _T(i0), ET = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = k.useState(null);
  return /* @__PURE__ */ N.jsx(PB, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
ET.displayName = i0;
var CT = "PopperAnchor", kT = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = ST(CT, n), l = k.useRef(null), u = Be(t, l), f = k.useRef(null);
    return k.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ N.jsx(je.div, { ...i, ref: u });
  }
);
kT.displayName = CT;
var s0 = "PopperContent", [TB, IB] = _T(s0), RT = k.forwardRef(
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
    } = e, x = ST(s0, n), [_, C] = k.useState(null), b = Be(t, (pe) => C(pe)), [R, P] = k.useState(null), T = YP(R), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, j = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, F = Array.isArray(d) ? d : [d], V = F.length > 0, W = {
      padding: G,
      boundary: F.filter(MB),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: q, isPositioned: Y, middlewareData: M } = yB({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...pe) => lB(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        xB({ mainAxis: i + O, alignmentAxis: l }),
        f && bB({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? _B() : void 0,
          ...W
        }),
        f && SB({ ...W }),
        EB({
          ...W,
          apply: ({ elements: pe, rects: _e, availableWidth: me, availableHeight: Ne }) => {
            const { width: Ee, height: Je } = _e.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${me}px`), Ue.setProperty("--radix-popper-available-height", `${Ne}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        R && kB({ element: R, padding: u }),
        OB({ arrowWidth: A, arrowHeight: O }),
        m && CB({ strategy: "referenceHidden", ...W })
      ]
    }), [z, Q] = TT(q), D = po(S);
    yt(() => {
      Y && (D == null || D());
    }, [Y, D]);
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
        children: /* @__PURE__ */ N.jsx(
          TB,
          {
            scope: n,
            placedSide: z,
            onArrowChange: P,
            arrowX: U,
            arrowY: ie,
            shouldHideArrow: B,
            children: /* @__PURE__ */ N.jsx(
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
RT.displayName = s0;
var NT = "PopperArrow", AB = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, PT = k.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = IB(NT, o), l = AB[a.placedSide];
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
          NB,
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
PT.displayName = NT;
function MB(e) {
  return e !== null;
}
var OB = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, _, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = TT(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((_ = i.arrow) == null ? void 0 : _.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let S = "", y = "";
    return d === "bottom" ? (S = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (S = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (S = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (S = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: S, y } };
  }
});
function TT(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var IT = ET, AT = kT, MT = RT, OT = PT, LB = "Portal", Wu = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = k.useState(!1);
  yt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Yq.createPortal(/* @__PURE__ */ N.jsx(je.div, { ...o, ref: t }), l) : null;
});
Wu.displayName = LB;
// @__NO_SIDE_EFFECTS__
function DB(e) {
  const t = /* @__PURE__ */ jB(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(FB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function jB(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = $B(i), u = zB(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qB = Symbol("radix.slottable");
function FB(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qB;
}
function zB(e, t) {
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
function $B(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var LT = Object.freeze({
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
}), BB = "VisuallyHidden", DT = k.forwardRef(
  (e, t) => /* @__PURE__ */ N.jsx(
    je.span,
    {
      ...e,
      ref: t,
      style: { ...LT, ...e.style }
    }
  )
);
DT.displayName = BB;
var VB = DT, HB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ti = /* @__PURE__ */ new WeakMap(), Vl = /* @__PURE__ */ new WeakMap(), Hl = {}, Ld = 0, jT = function(e) {
  return e && (e.host || jT(e.parentNode));
}, WB = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = jT(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, UB = function(e, t, n, o) {
  var i = WB(t, Array.isArray(e) ? e : [e]);
  Hl[n] || (Hl[n] = /* @__PURE__ */ new WeakMap());
  var a = Hl[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(p) {
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
          ti.set(m, y), a.set(m, x), l.push(m), y === 1 && S && Vl.set(m, !0), x === 1 && m.setAttribute(n, "true"), S || m.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", m, _);
        }
    });
  };
  return h(t), u.clear(), Ld++, function() {
    l.forEach(function(p) {
      var m = ti.get(p) - 1, v = a.get(p) - 1;
      ti.set(p, m), a.set(p, v), m || (Vl.has(p) || p.removeAttribute(o), Vl.delete(p)), v || p.removeAttribute(n);
    }), Ld--, Ld || (ti = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Vl = /* @__PURE__ */ new WeakMap(), Hl = {});
  };
}, qT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = HB(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), UB(o, i, n, "aria-hidden")) : function() {
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
function FT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function GB(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Jl = "right-scroll-bar-position", eu = "width-before-scroll-bar", YB = "with-scroll-bars-hidden", KB = "--removed-body-scroll-bar-size";
function Dd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function XB(e, t) {
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
var QB = typeof window < "u" ? k.useLayoutEffect : k.useEffect, Kb = /* @__PURE__ */ new WeakMap();
function ZB(e, t) {
  var n = XB(null, function(o) {
    return e.forEach(function(i) {
      return Dd(i, o);
    });
  });
  return QB(function() {
    var o = Kb.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Dd(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Dd(u, l);
      });
    }
    Kb.set(n, e);
  }, [e]), n;
}
function JB(e) {
  return e;
}
function e5(e, t) {
  t === void 0 && (t = JB);
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
function t5(e) {
  e === void 0 && (e = {});
  var t = e5(null);
  return t.options = Tn({ async: !0, ssr: !1 }, e), t;
}
var zT = function(e) {
  var t = e.sideCar, n = FT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return k.createElement(o, Tn({}, n));
};
zT.isSideCarExport = !0;
function n5(e, t) {
  return e.useMedium(t), zT;
}
var $T = t5(), jd = function() {
}, Uu = k.forwardRef(function(e, t) {
  var n = k.useRef(null), o = k.useState({
    onScrollCapture: jd,
    onWheelCapture: jd,
    onTouchMoveCapture: jd
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, S = e.noIsolation, y = e.inert, x = e.allowPinchZoom, _ = e.as, C = _ === void 0 ? "div" : _, b = e.gapMode, R = FT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, T = ZB([n, t]), A = Tn(Tn({}, R), i);
  return k.createElement(
    k.Fragment,
    null,
    h && k.createElement(P, { sideCar: $T, removeScrollBar: d, shards: p, noRelative: v, noIsolation: S, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: b }),
    l ? k.cloneElement(k.Children.only(u), Tn(Tn({}, A), { ref: T })) : k.createElement(C, Tn({}, A, { className: f, ref: T }), u)
  );
});
Uu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Uu.classNames = {
  fullWidth: eu,
  zeroRight: Jl
};
var r5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function o5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = r5();
  return t && e.setAttribute("nonce", t), e;
}
function i5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function s5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var a5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = o5()) && (i5(t, n), s5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, l5 = function() {
  var e = a5();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, BT = function() {
  var e = l5(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, u5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, qd = function(e) {
  return parseInt(e || "", 10) || 0;
}, c5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [qd(n), qd(o), qd(i)];
}, f5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return u5;
  var t = c5(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, d5 = BT(), fi = "data-scroll-locked", h5 = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(YB, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(fi, `] {
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
  
  .`).concat(Jl, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(eu, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Jl, " .").concat(Jl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(eu, " .").concat(eu, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(fi, `] {
    `).concat(KB, ": ").concat(u, `px;
  }
`);
}, Xb = function() {
  var e = parseInt(document.body.getAttribute(fi) || "0", 10);
  return isFinite(e) ? e : 0;
}, p5 = function() {
  k.useEffect(function() {
    return document.body.setAttribute(fi, (Xb() + 1).toString()), function() {
      var e = Xb() - 1;
      e <= 0 ? document.body.removeAttribute(fi) : document.body.setAttribute(fi, e.toString());
    };
  }, []);
}, g5 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  p5();
  var a = k.useMemo(function() {
    return f5(i);
  }, [i]);
  return k.createElement(d5, { styles: h5(a, !t, i, n ? "" : "!important") });
}, Sy = !1;
if (typeof window < "u")
  try {
    var Wl = Object.defineProperty({}, "passive", {
      get: function() {
        return Sy = !0, !0;
      }
    });
    window.addEventListener("test", Wl, Wl), window.removeEventListener("test", Wl, Wl);
  } catch {
    Sy = !1;
  }
var ni = Sy ? { passive: !1 } : !1, m5 = function(e) {
  return e.tagName === "TEXTAREA";
}, VT = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !m5(e) && n[t] === "visible")
  );
}, v5 = function(e) {
  return VT(e, "overflowY");
}, y5 = function(e) {
  return VT(e, "overflowX");
}, Qb = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = HT(e, o);
    if (i) {
      var a = WT(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, w5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, x5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, HT = function(e, t) {
  return e === "v" ? v5(t) : y5(t);
}, WT = function(e, t) {
  return e === "v" ? w5(t) : x5(t);
}, b5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, _5 = function(e, t, n, o, i) {
  var a = b5(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = WT(e, u), S = v[0], y = v[1], x = v[2], _ = y - x - a * S;
    (S || _) && HT(e, u) && (p += _, m += S);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Ul = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zb = function(e) {
  return [e.deltaX, e.deltaY];
}, Jb = function(e) {
  return e && "current" in e ? e.current : e;
}, S5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, E5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, C5 = 0, ri = [];
function k5(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), o = k.useRef(), i = k.useState(C5++)[0], a = k.useState(BT)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = GB([e.lockRef.current], (e.shards || []).map(Jb), !0).filter(Boolean);
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
    var _ = Ul(y), C = n.current, b = "deltaX" in y ? y.deltaX : C[0] - _[0], R = "deltaY" in y ? y.deltaY : C[1] - _[1], P, T = y.target, A = Math.abs(b) > Math.abs(R) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = window.getSelection(), j = O && O.anchorNode, G = j ? j === T || j.contains(T) : !1;
    if (G)
      return !1;
    var F = Qb(A, T);
    if (!F)
      return !0;
    if (F ? P = A : (P = A === "v" ? "h" : "v", F = Qb(A, T)), !F)
      return !1;
    if (!o.current && "changedTouches" in y && (b || R) && (o.current = P), !P)
      return !0;
    var V = o.current || P;
    return _5(V, x, y, V === "h" ? b : R);
  }, []), f = k.useCallback(function(y) {
    var x = y;
    if (!(!ri.length || ri[ri.length - 1] !== a)) {
      var _ = "deltaY" in x ? Zb(x) : Ul(x), C = t.current.filter(function(P) {
        return P.name === x.type && (P.target === x.target || x.target === P.shadowParent) && S5(P.delta, _);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var b = (l.current.shards || []).map(Jb).filter(Boolean).filter(function(P) {
          return P.contains(x.target);
        }), R = b.length > 0 ? u(x, b[0]) : !l.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = k.useCallback(function(y, x, _, C) {
    var b = { name: y, delta: x, target: _, should: C, shadowParent: R5(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== b;
      });
    }, 1);
  }, []), h = k.useCallback(function(y) {
    n.current = Ul(y), o.current = void 0;
  }, []), p = k.useCallback(function(y) {
    d(y.type, Zb(y), y.target, u(y, e.lockRef.current));
  }, []), m = k.useCallback(function(y) {
    d(y.type, Ul(y), y.target, u(y, e.lockRef.current));
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
    S ? k.createElement(a, { styles: E5(i) }) : null,
    v ? k.createElement(g5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function R5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const N5 = n5($T, k5);
var a0 = k.forwardRef(function(e, t) {
  return k.createElement(Uu, Tn({}, e, { ref: t, sideCar: N5 }));
});
a0.classNames = Uu.classNames;
var P5 = [" ", "Enter", "ArrowUp", "ArrowDown"], T5 = [" ", "Enter"], mo = "Select", [Gu, Yu, I5] = Q$(mo), [Pi] = ki(mo, [
  I5,
  Hu
]), Ku = Hu(), [A5, Dr] = Pi(mo), [M5, O5] = Pi(mo), UT = (e) => {
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
  } = e, y = Ku(t), [x, _] = k.useState(null), [C, b] = k.useState(null), [R, P] = k.useState(!1), T = J$(d), [A, O] = Gs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: mo
  }), [j, G] = Gs({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: mo
  }), F = k.useRef(null), V = x ? S || !!x.closest("form") : !0, [W, L] = k.useState(/* @__PURE__ */ new Set()), H = Array.from(W).map((q) => q.props.value).join(";");
  return /* @__PURE__ */ N.jsx(IT, { ...y, children: /* @__PURE__ */ N.jsxs(
    A5,
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
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: F,
      disabled: m,
      children: [
        /* @__PURE__ */ N.jsx(Gu.Provider, { scope: t, children: /* @__PURE__ */ N.jsx(
          M5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: k.useCallback((q) => {
              L((Y) => new Set(Y).add(q));
            }, []),
            onNativeOptionRemove: k.useCallback((q) => {
              L((Y) => {
                const M = new Set(Y);
                return M.delete(q), M;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ N.jsxs(
          pI,
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
              Array.from(W)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
UT.displayName = mo;
var GT = "SelectTrigger", YT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Ku(n), l = Dr(GT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = Yu(n), h = k.useRef("touch"), [p, m, v] = mI((y) => {
      const x = d().filter((b) => !b.disabled), _ = x.find((b) => b.value === l.value), C = vI(x, y, _);
      C !== void 0 && l.onValueChange(C.value);
    }), S = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ N.jsx(AT, { asChild: !0, ...a, children: /* @__PURE__ */ N.jsx(
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
        "data-placeholder": gI(l.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && P5.includes(y.key) && (S(), y.preventDefault());
        })
      }
    ) });
  }
);
YT.displayName = GT;
var KT = "SelectValue", XT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = Dr(KT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ N.jsx(
      je.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: gI(f.value) ? /* @__PURE__ */ N.jsx(N.Fragment, { children: l }) : a
      }
    );
  }
);
XT.displayName = KT;
var L5 = "SelectIcon", QT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
QT.displayName = L5;
var D5 = "SelectPortal", ZT = (e) => /* @__PURE__ */ N.jsx(Wu, { asChild: !0, ...e });
ZT.displayName = D5;
var vo = "SelectContent", JT = k.forwardRef(
  (e, t) => {
    const n = Dr(vo, e.__scopeSelect), [o, i] = k.useState();
    if (yt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? oa.createPortal(
        /* @__PURE__ */ N.jsx(eI, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx(Gu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ N.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ N.jsx(tI, { ...e, ref: t });
  }
);
JT.displayName = vo;
var dn = 10, [eI, jr] = Pi(vo), j5 = "SelectContentImpl", q5 = /* @__PURE__ */ DB("SelectContent.RemoveScroll"), tI = k.forwardRef(
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
    } = e, C = Dr(vo, n), [b, R] = k.useState(null), [P, T] = k.useState(null), A = Be(t, (X) => R(X)), [O, j] = k.useState(null), [G, F] = k.useState(
      null
    ), V = Yu(n), [W, L] = k.useState(!1), H = k.useRef(!1);
    k.useEffect(() => {
      if (b) return qT(b);
    }, [b]), lT();
    const q = k.useCallback(
      (X) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of X)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, P]
    ), Y = k.useCallback(
      () => q([O, b]),
      [q, O, b]
    );
    k.useEffect(() => {
      W && Y();
    }, [W, Y]);
    const { onOpenChange: M, triggerPointerDownPosRef: z } = C;
    k.useEffect(() => {
      if (b) {
        let X = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          X = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = z.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = z.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          X.x <= 10 && X.y <= 10 ? ae.preventDefault() : b.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, M, z]), k.useEffect(() => {
      const X = () => M(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [M]);
    const [Q, D] = mI((X) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = vI(te, X, se);
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
        (C.value !== void 0 && C.value === te || ae) && F(X);
      },
      [C.value]
    ), Z = o === "popper" ? Ey : nI, ee = Z === Ey ? {
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
      eI,
      {
        scope: n,
        content: b,
        viewport: P,
        onViewportChange: T,
        itemRefCallback: U,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: B,
        focusSelectedItem: Y,
        selectedItemText: G,
        position: o,
        isPositioned: W,
        searchRef: Q,
        children: /* @__PURE__ */ N.jsx(a0, { as: q5, allowPinchZoom: !0, children: /* @__PURE__ */ N.jsx(
          Zy,
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
              Fu,
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
tI.displayName = j5;
var F5 = "SelectItemAlignedPosition", nI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = Dr(vo, n), l = jr(vo, n), [u, f] = k.useState(null), [d, h] = k.useState(null), p = Be(t, (A) => h(A)), m = Yu(n), v = k.useRef(!1), S = k.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: _, focusSelectedItem: C } = l, b = k.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && _) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), j = a.valueNode.getBoundingClientRect(), G = _.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = j.left - ce, pe = A.left - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = Pb(de, [
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
        const ce = O.right - G.right, de = window.innerWidth - j.right - ce, pe = window.innerWidth - A.right - de, _e = A.width + pe, me = Math.max(_e, O.width), Ne = window.innerWidth - dn, Ee = Pb(de, [
          dn,
          Math.max(dn, Ne - me)
        ]);
        u.style.minWidth = _e + "px", u.style.right = Ee + "px";
      }
      const F = m(), V = window.innerHeight - dn * 2, W = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), q = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), z = H + q + W + M + Y, Q = Math.min(x.offsetHeight * 5, z), D = window.getComputedStyle(y), U = parseInt(D.paddingTop, 10), ie = parseInt(D.paddingBottom, 10), B = A.top + A.height / 2 - dn, Z = V - B, ee = x.offsetHeight / 2, X = x.offsetTop + ee, te = H + q + X, se = z - te;
      if (te <= B) {
        const ce = F.length > 0 && x === F[F.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + Y
        ), _e = te + pe;
        u.style.height = _e + "px";
      } else {
        const ce = F.length > 0 && x === F[0].ref.current;
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
    $5,
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
nI.displayName = F5;
var z5 = "SelectPopperPosition", Ey = k.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = dn,
    ...a
  } = e, l = Ku(n);
  return /* @__PURE__ */ N.jsx(
    MT,
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
Ey.displayName = z5;
var [$5, l0] = Pi(vo, {}), Cy = "SelectViewport", rI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = jr(Cy, n), l = l0(Cy, n), u = Be(t, a.onViewportChange), f = k.useRef(0);
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
      /* @__PURE__ */ N.jsx(Gu.Slot, { scope: n, children: /* @__PURE__ */ N.jsx(
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
rI.displayName = Cy;
var oI = "SelectGroup", [B5, V5] = Pi(oI), H5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = uo();
    return /* @__PURE__ */ N.jsx(B5, { scope: n, id: i, children: /* @__PURE__ */ N.jsx(je.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
H5.displayName = oI;
var iI = "SelectLabel", W5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = V5(iI, n);
    return /* @__PURE__ */ N.jsx(je.div, { id: i.id, ...o, ref: t });
  }
);
W5.displayName = iI;
var yu = "SelectItem", [U5, sI] = Pi(yu), aI = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = Dr(yu, n), f = jr(yu, n), d = u.value === o, [h, p] = k.useState(a ?? ""), [m, v] = k.useState(!1), S = Be(
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
      U5,
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
          Gu.ItemSlot,
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
                  ((R = f.searchRef) == null ? void 0 : R.current) !== "" && C.key === " " || (T5.includes(C.key) && _(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
aI.displayName = yu;
var Ts = "SelectItemText", lI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = Dr(Ts, n), u = jr(Ts, n), f = sI(Ts, n), d = O5(Ts, n), [h, p] = k.useState(null), m = Be(
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
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? oa.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
lI.displayName = Ts;
var uI = "SelectItemIndicator", cI = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return sI(uI, n).isSelected ? /* @__PURE__ */ N.jsx(je.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
cI.displayName = uI;
var ky = "SelectScrollUpButton", fI = k.forwardRef((e, t) => {
  const n = jr(ky, e.__scopeSelect), o = l0(ky, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    hI,
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
fI.displayName = ky;
var Ry = "SelectScrollDownButton", dI = k.forwardRef((e, t) => {
  const n = jr(Ry, e.__scopeSelect), o = l0(Ry, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    hI,
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
dI.displayName = Ry;
var hI = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = jr("SelectScrollButton", n), l = k.useRef(null), u = Yu(n), f = k.useCallback(() => {
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
}), G5 = "SelectSeparator", Y5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ N.jsx(je.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Y5.displayName = G5;
var Ny = "SelectArrow", K5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Ku(n), a = Dr(Ny, n), l = jr(Ny, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ N.jsx(OT, { ...i, ...o, ref: t }) : null;
  }
);
K5.displayName = Ny;
var X5 = "SelectBubbleInput", pI = k.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = k.useRef(null), a = Be(o, i), l = GP(t);
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
        style: { ...LT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
pI.displayName = X5;
function gI(e) {
  return e === "" || e === void 0;
}
function mI(e) {
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
function vI(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = Q5(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function Q5(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Z5 = UT, J5 = YT, eV = XT, tV = QT, nV = ZT, rV = JT, oV = rI, iV = aI, sV = lI, aV = cI, lV = fI, uV = dI;
function e_({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(Z5, { "data-slot": "select", ...e });
}
function t_({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(eV, { "data-slot": "select-value", ...e });
}
function n_({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(
    J5,
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
        /* @__PURE__ */ N.jsx(tV, { asChild: !0, children: /* @__PURE__ */ N.jsx(iT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function r_({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ N.jsx(nV, { children: /* @__PURE__ */ N.jsxs(
    rV,
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
        /* @__PURE__ */ N.jsx(cV, {}),
        /* @__PURE__ */ N.jsx(
          oV,
          {
            className: Me(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ N.jsx(fV, {})
      ]
    }
  ) });
}
function o_({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsxs(
    iV,
    {
      "data-slot": "select-item",
      className: Me(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ N.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ N.jsx(aV, { children: /* @__PURE__ */ N.jsx(oT, { className: "size-4" }) }) }),
        /* @__PURE__ */ N.jsx(sV, { children: t })
      ]
    }
  );
}
function cV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    lV,
    {
      "data-slot": "select-scroll-up-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(O$, { className: "size-4" })
    }
  );
}
function fV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    uV,
    {
      "data-slot": "select-scroll-down-button",
      className: Me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ N.jsx(iT, { className: "size-4" })
    }
  );
}
function dV(e) {
  var l;
  if ("component" in e) {
    const { component: u, onValueChange: f } = e, d = Ei(), h = ((l = d == null ? void 0 : d.nodeData.values) == null ? void 0 : l[u.id]) ?? u.value ?? "";
    return /* @__PURE__ */ N.jsxs("div", { className: "component-select-field w-full flex flex-col gap-1", children: [
      /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: u.label }),
      /* @__PURE__ */ N.jsxs(e_, { value: h, onValueChange: (p) => f == null ? void 0 : f(u.id, p), children: [
        /* @__PURE__ */ N.jsx(
          n_,
          {
            className: "h-8 text-xs w-full",
            onMouseDown: (p) => p.stopPropagation(),
            onPointerDown: (p) => p.stopPropagation(),
            "aria-label": u.label,
            children: /* @__PURE__ */ N.jsx(t_, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ N.jsx(r_, { children: (u.options || []).map((p) => /* @__PURE__ */ N.jsx(o_, { value: p, className: "text-xs", children: p }, p)) })
      ] })
    ] });
  }
  const { value: t, options: n, onChange: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ N.jsxs(e_, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ N.jsx(
      n_,
      {
        className: "h-8 text-xs",
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ N.jsx(t_, { placeholder: i })
      }
    ),
    /* @__PURE__ */ N.jsx(r_, { children: n.map((u) => /* @__PURE__ */ N.jsx(o_, { value: u, className: "text-xs", children: u }, u)) })
  ] });
}
function hV(e, t = []) {
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
  return i.scopeName = e, [o, pV(i, ...t)];
}
function pV(...e) {
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
var gV = Symbol.for("react.lazy"), wu = Ay[" use ".trim().toString()];
function mV(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function yI(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === gV && "_payload" in e && mV(e._payload);
}
// @__NO_SIDE_EFFECTS__
function wI(e) {
  const t = /* @__PURE__ */ vV(e), n = k.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    yI(a) && typeof wu == "function" && (a = wu(a._payload));
    const u = k.Children.toArray(a), f = u.find(wV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var xI = /* @__PURE__ */ wI("Slot");
// @__NO_SIDE_EFFECTS__
function vV(e) {
  const t = k.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (yI(i) && typeof wu == "function" && (i = wu(i._payload)), k.isValidElement(i)) {
      const l = bV(i), u = xV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var yV = Symbol("radix.slottable");
function wV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yV;
}
function xV(e, t) {
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
var _V = [
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
], bI = _V.reduce((e, t) => {
  const n = /* @__PURE__ */ wI(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), u0 = "Progress", c0 = 100, [SV] = hV(u0), [EV, CV] = SV(u0), _I = k.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: i,
      getValueLabel: a = kV,
      ...l
    } = e;
    (i || i === 0) && !i_(i) && console.error(RV(`${i}`, "Progress"));
    const u = i_(i) ? i : c0;
    o !== null && !s_(o, u) && console.error(NV(`${o}`, "Progress"));
    const f = s_(o, u) ? o : null, d = xu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ N.jsx(EV, { scope: n, value: f, max: u, children: /* @__PURE__ */ N.jsx(
      bI.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": xu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": CI(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
_I.displayName = u0;
var SI = "ProgressIndicator", EI = k.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, i = CV(SI, n);
    return /* @__PURE__ */ N.jsx(
      bI.div,
      {
        "data-state": CI(i.value, i.max),
        "data-value": i.value ?? void 0,
        "data-max": i.max,
        ...o,
        ref: t
      }
    );
  }
);
EI.displayName = SI;
function kV(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function CI(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function xu(e) {
  return typeof e == "number";
}
function i_(e) {
  return xu(e) && !isNaN(e) && e > 0;
}
function s_(e, t) {
  return xu(e) && !isNaN(e) && e <= t && e >= 0;
}
function RV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${c0}\`.`;
}
function NV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${c0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var PV = _I, TV = EI;
function a_({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ N.jsx(
    PV,
    {
      "data-slot": "progress",
      className: Me(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ N.jsx(
        TV,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function IV(e) {
  var u;
  if ("component" in e) {
    const { component: f } = e, d = Ei(), h = ((u = d == null ? void 0 : d.nodeData.values) == null ? void 0 : u[f.id]) ?? f.value ?? 0, p = f.max ?? 100, m = f.min ?? 0, v = Math.min(100, Math.max(0, (h - m) / (p - m) * 100));
    return /* @__PURE__ */ N.jsxs("div", { className: "component-progress-field space-y-1.5", children: [
      f.label && /* @__PURE__ */ N.jsx("label", { className: "text-xs text-gray-600", children: f.label }),
      /* @__PURE__ */ N.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-muted-foreground", children: "Progress" }),
        /* @__PURE__ */ N.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
          Math.round(v),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ N.jsx(a_, { value: v, className: "h-2" })
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
    /* @__PURE__ */ N.jsx(a_, { value: l, className: "h-2" })
  ] });
}
function AV({ component: e }) {
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
function MV({ component: e }) {
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
const l_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u_ = IP, kI = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return u_(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = l_(h) || l_(p);
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
  return u_(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, OV = kI(
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
function di({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? xI : "button";
  return /* @__PURE__ */ N.jsx(
    a,
    {
      "data-slot": "button",
      className: Me(OV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function LV({ component: e, onValueChange: t }) {
  var a;
  const n = Ei(), o = ((a = n == null ? void 0 : n.nodeData.values) == null ? void 0 : a[e.id]) ?? e.value ?? 0, i = () => {
    const l = o + 1;
    t == null || t(e.id, l);
  };
  return /* @__PURE__ */ N.jsx(
    di,
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
function DV({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function jV({ component: e }) {
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
function qV({
  cell: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = e.layout || { type: "flex", direction: "column" }, i = FV(e), a = zV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell", style: i, children: /* @__PURE__ */ N.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => /* @__PURE__ */ N.jsx(
    RI,
    {
      component: l,
      nodeId: t,
      onValueChange: n
    },
    l.id
  )) }) });
}
function FV(e) {
  const t = e.coordinates.row_span || 1, n = e.coordinates.col_span || 1;
  return {
    gridRow: `${e.coordinates.row} / span ${t}`,
    gridColumn: `${e.coordinates.col} / span ${n}`
  };
}
function zV(e) {
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
function $V({
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
        qV,
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
function RI({ component: e, nodeId: t, onValueChange: n }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ N.jsx(ju, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ N.jsx(HP, { component: e });
    case "button-handle":
      return /* @__PURE__ */ N.jsx(WP, { component: e });
    case "text":
      return /* @__PURE__ */ N.jsx(Jz, { component: e, onValueChange: n });
    case "number":
      return /* @__PURE__ */ N.jsx(t$, { component: e, onValueChange: n });
    case "bool":
      return /* @__PURE__ */ N.jsx(W$, { component: e, onValueChange: n });
    case "select":
      return /* @__PURE__ */ N.jsx(dV, { component: e, onValueChange: n });
    case "progress":
      return /* @__PURE__ */ N.jsx(IV, { component: e, onValueChange: n });
    case "header":
      return /* @__PURE__ */ N.jsx(AV, { component: e });
    case "footer":
      return /* @__PURE__ */ N.jsx(MV, { component: e });
    case "button":
      return /* @__PURE__ */ N.jsx(LV, { component: e, onValueChange: n });
    case "divider":
      return /* @__PURE__ */ N.jsx(DV, { component: e });
    case "spacer":
      return /* @__PURE__ */ N.jsx(jV, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ N.jsx($V, { component: e, nodeId: t, onValueChange: n });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function BV({ grid: e, nodeId: t, onValueChange: n }) {
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
        VV,
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
function VV({ cell: e, nodeId: t, onValueChange: n }) {
  const o = e.layout || { type: "flex", direction: "column" }, i = HV(o);
  return /* @__PURE__ */ N.jsx("div", { className: "grid-cell-content", style: i, children: e.components.map((a) => /* @__PURE__ */ N.jsx(
    RI,
    {
      component: a,
      nodeId: t,
      onValueChange: n
    },
    a.id
  )) });
}
function HV(e) {
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
function NI({ className: e, ...t }) {
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
class f0 {
  constructor(t, n, o = "Node") {
    Rl(this, "grid");
    Rl(this, "style");
    Rl(this, "label");
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
      const f = l, d = OG(), h = k.useCallback((v, S) => {
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
        NI,
        {
          className: Me(
            o.className,
            u && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: o.style,
          children: /* @__PURE__ */ N.jsx(UP.Provider, { value: m, children: /* @__PURE__ */ N.jsx(
            BV,
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
    return new f0(t, n, o).buildComponent();
  }
}
function WV(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = f0.buildComponent(
        n.definition.grid,
        n.definition.style,
        n.label
      );
    } catch (o) {
      throw typeof process.env.VITEST > "u" && console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
const Fd = 768;
function UV() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Fd - 1}px)`), o = () => {
      t(window.innerWidth < Fd);
    };
    return n.addEventListener("change", o), t(window.innerWidth < Fd), () => n.removeEventListener("change", o);
  }, []), !!e;
}
// @__NO_SIDE_EFFECTS__
function GV(e) {
  const t = /* @__PURE__ */ YV(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(XV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ N.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function YV(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = ZV(i), u = QV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? Ci(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var KV = Symbol("radix.slottable");
function XV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === KV;
}
function QV(e, t) {
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
function ZV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Xu = "Dialog", [PI] = ki(Xu), [JV, bn] = PI(Xu), TI = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, u = k.useRef(null), f = k.useRef(null), [d, h] = Gs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Xu
  });
  return /* @__PURE__ */ N.jsx(
    JV,
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
TI.displayName = Xu;
var II = "DialogTrigger", eH = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(II, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ N.jsx(
      je.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": p0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
eH.displayName = II;
var d0 = "DialogPortal", [tH, AI] = PI(d0, {
  forceMount: void 0
}), MI = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = bn(d0, t);
  return /* @__PURE__ */ N.jsx(tH, { scope: t, forceMount: n, children: k.Children.map(o, (l) => /* @__PURE__ */ N.jsx(wo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Wu, { asChild: !0, container: i, children: l }) })) });
};
MI.displayName = d0;
var bu = "DialogOverlay", OI = k.forwardRef(
  (e, t) => {
    const n = AI(bu, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(bu, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ N.jsx(wo, { present: o || a.open, children: /* @__PURE__ */ N.jsx(rH, { ...i, ref: t }) }) : null;
  }
);
OI.displayName = bu;
var nH = /* @__PURE__ */ GV("DialogOverlay.RemoveScroll"), rH = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(bu, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ N.jsx(a0, { as: nH, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ N.jsx(
        je.div,
        {
          "data-state": p0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), yo = "DialogContent", LI = k.forwardRef(
  (e, t) => {
    const n = AI(yo, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = bn(yo, e.__scopeDialog);
    return /* @__PURE__ */ N.jsx(wo, { present: o || a.open, children: a.modal ? /* @__PURE__ */ N.jsx(oH, { ...i, ref: t }) : /* @__PURE__ */ N.jsx(iH, { ...i, ref: t }) });
  }
);
LI.displayName = yo;
var oH = k.forwardRef(
  (e, t) => {
    const n = bn(yo, e.__scopeDialog), o = k.useRef(null), i = Be(t, n.contentRef, o);
    return k.useEffect(() => {
      const a = o.current;
      if (a) return qT(a);
    }, []), /* @__PURE__ */ N.jsx(
      DI,
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
), iH = k.forwardRef(
  (e, t) => {
    const n = bn(yo, e.__scopeDialog), o = k.useRef(!1), i = k.useRef(!1);
    return /* @__PURE__ */ N.jsx(
      DI,
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
), DI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = bn(yo, n), f = k.useRef(null), d = Be(t, f);
    return lT(), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Zy,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ N.jsx(
            Fu,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": p0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
        /* @__PURE__ */ N.jsx(sH, { titleId: u.titleId }),
        /* @__PURE__ */ N.jsx(lH, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), h0 = "DialogTitle", jI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(h0, n);
    return /* @__PURE__ */ N.jsx(je.h2, { id: i.titleId, ...o, ref: t });
  }
);
jI.displayName = h0;
var qI = "DialogDescription", FI = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(qI, n);
    return /* @__PURE__ */ N.jsx(je.p, { id: i.descriptionId, ...o, ref: t });
  }
);
FI.displayName = qI;
var zI = "DialogClose", $I = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = bn(zI, n);
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
$I.displayName = zI;
function p0(e) {
  return e ? "open" : "closed";
}
var BI = "DialogTitleWarning", [qG, VI] = n$(BI, {
  contentName: yo,
  titleName: h0,
  docsSlug: "dialog"
}), sH = ({ titleId: e }) => {
  const t = VI(BI), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, aH = "DialogDescriptionWarning", lH = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${VI(aH).contentName}}.`;
  return k.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, uH = TI, cH = MI, fH = OI, dH = LI, hH = jI, pH = FI, gH = $I;
function mH({ ...e }) {
  return /* @__PURE__ */ N.jsx(uH, { "data-slot": "sheet", ...e });
}
function vH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(cH, { "data-slot": "sheet-portal", ...e });
}
function yH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    fH,
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
function wH({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ N.jsxs(vH, { children: [
    /* @__PURE__ */ N.jsx(yH, {}),
    /* @__PURE__ */ N.jsxs(
      dH,
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
          /* @__PURE__ */ N.jsxs(gH, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ N.jsx(H$, { className: "size-4" }),
            /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function xH({ className: e, ...t }) {
  return /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Me("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function bH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    hH,
    {
      "data-slot": "sheet-title",
      className: Me("text-foreground font-semibold", e),
      ...t
    }
  );
}
function _H({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    pH,
    {
      "data-slot": "sheet-description",
      className: Me("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var SH = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function EH(e) {
  const t = ({ children: n }) => /* @__PURE__ */ N.jsx(N.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = SH, t;
}
var [Qu] = ki("Tooltip", [
  Hu
]), Zu = Hu(), HI = "TooltipProvider", CH = 700, Py = "tooltip.open", [kH, g0] = Qu(HI), WI = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = CH,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = k.useRef(!0), u = k.useRef(!1), f = k.useRef(0);
  return k.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ N.jsx(
    kH,
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
WI.displayName = HI;
var Xs = "Tooltip", [RH, aa] = Qu(Xs), UI = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = g0(Xs, e.__scopeTooltip), d = Zu(t), [h, p] = k.useState(null), m = uo(), v = k.useRef(0), S = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, x = k.useRef(!1), [_, C] = Gs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (A) => {
      A ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Py))) : f.onClose(), a == null || a(A);
    },
    caller: Xs
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
  }, []), /* @__PURE__ */ N.jsx(IT, { ...d, children: /* @__PURE__ */ N.jsx(
    RH,
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
UI.displayName = Xs;
var Ty = "TooltipTrigger", GI = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = aa(Ty, n), a = g0(Ty, n), l = Zu(n), u = k.useRef(null), f = Be(t, u, i.onTriggerChange), d = k.useRef(!1), h = k.useRef(!1), p = k.useCallback(() => d.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ N.jsx(AT, { asChild: !0, ...l, children: /* @__PURE__ */ N.jsx(
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
GI.displayName = Ty;
var m0 = "TooltipPortal", [NH, PH] = Qu(m0, {
  forceMount: void 0
}), YI = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = aa(m0, t);
  return /* @__PURE__ */ N.jsx(NH, { scope: t, forceMount: n, children: /* @__PURE__ */ N.jsx(wo, { present: n || a.open, children: /* @__PURE__ */ N.jsx(Wu, { asChild: !0, container: i, children: o }) }) });
};
YI.displayName = m0;
var bi = "TooltipContent", KI = k.forwardRef(
  (e, t) => {
    const n = PH(bi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = aa(bi, e.__scopeTooltip);
    return /* @__PURE__ */ N.jsx(wo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ N.jsx(XI, { side: i, ...a, ref: t }) : /* @__PURE__ */ N.jsx(TH, { side: i, ...a, ref: t }) });
  }
), TH = k.forwardRef((e, t) => {
  const n = aa(bi, e.__scopeTooltip), o = g0(bi, e.__scopeTooltip), i = k.useRef(null), a = Be(t, i), [l, u] = k.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = k.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = k.useCallback(
    (S, y) => {
      const x = S.currentTarget, _ = { x: S.clientX, y: S.clientY }, C = OH(_, x.getBoundingClientRect()), b = LH(_, C), R = DH(y.getBoundingClientRect()), P = qH([...b, ...R]);
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
        const x = y.target, _ = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(x)) || (h == null ? void 0 : h.contains(x)), b = !jH(_, l);
        C ? m() : b && (m(), d());
      };
      return document.addEventListener("pointermove", S), () => document.removeEventListener("pointermove", S);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ N.jsx(XI, { ...e, ref: a });
}), [IH, AH] = Qu(Xs, { isInside: !1 }), MH = /* @__PURE__ */ EH("TooltipContent"), XI = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = aa(bi, n), d = Zu(n), { onClose: h } = f;
    return k.useEffect(() => (document.addEventListener(Py, h), () => document.removeEventListener(Py, h)), [h]), k.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ N.jsx(
      Fu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ N.jsxs(
          MT,
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
              /* @__PURE__ */ N.jsx(MH, { children: o }),
              /* @__PURE__ */ N.jsx(IH, { scope: n, isInside: !0, children: /* @__PURE__ */ N.jsx(VB, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
KI.displayName = bi;
var QI = "TooltipArrow", ZI = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = Zu(n);
    return AH(
      QI,
      n
    ).isInside ? null : /* @__PURE__ */ N.jsx(OT, { ...i, ...o, ref: t });
  }
);
ZI.displayName = QI;
function OH(e, t) {
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
function LH(e, t, n = 5) {
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
function DH(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function jH(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function qH(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), FH(t);
}
function FH(e) {
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
var zH = WI, $H = UI, BH = GI, VH = YI, HH = KI, WH = ZI;
function JI({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(
    zH,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function UH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(JI, { children: /* @__PURE__ */ N.jsx($H, { "data-slot": "tooltip", ...e }) });
}
function GH({
  ...e
}) {
  return /* @__PURE__ */ N.jsx(BH, { "data-slot": "tooltip-trigger", ...e });
}
function YH({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ N.jsx(VH, { children: /* @__PURE__ */ N.jsxs(
    HH,
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
        /* @__PURE__ */ N.jsx(WH, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const KH = "sidebar_state", XH = 3600 * 24 * 7, QH = "16rem", ZH = "18rem", JH = "3rem", e8 = "b", eA = k.createContext(null);
function v0() {
  const e = k.useContext(eA);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function t8({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = UV(), [f, d] = k.useState(!1), [h, p] = k.useState(e), m = t ?? h, v = k.useCallback(
    (_) => {
      const C = typeof _ == "function" ? _(m) : _;
      n ? n(C) : p(C), document.cookie = `${KH}=${C}; path=/; max-age=${XH}`;
    },
    [n, m]
  ), S = k.useCallback(() => u ? d((_) => !_) : v((_) => !_), [u, v, d]);
  k.useEffect(() => {
    const _ = (C) => {
      C.key === e8 && (C.metaKey || C.ctrlKey) && (C.preventDefault(), S());
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
  return /* @__PURE__ */ N.jsx(eA.Provider, { value: x, children: /* @__PURE__ */ N.jsx(JI, { delayDuration: 0, children: /* @__PURE__ */ N.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": QH,
        "--sidebar-width-icon": JH,
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
function n8({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = v0();
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
  ) : l ? /* @__PURE__ */ N.jsx(mH, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ N.jsxs(
    wH,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": ZH
      },
      side: e,
      children: [
        /* @__PURE__ */ N.jsxs(xH, { className: "sr-only", children: [
          /* @__PURE__ */ N.jsx(bH, { children: "Sidebar" }),
          /* @__PURE__ */ N.jsx(_H, { children: "Displays the mobile sidebar." })
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
function r8({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = v0();
  return /* @__PURE__ */ N.jsxs(
    di,
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
        /* @__PURE__ */ N.jsx(q$, {}),
        /* @__PURE__ */ N.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function o8({ className: e, ...t }) {
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
function i8({ className: e, ...t }) {
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
function s8({ className: e, ...t }) {
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
function a8({
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
function l8({ className: e, ...t }) {
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
function u8({ className: e, ...t }) {
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
const c8 = kI(
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
function f8({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? xI : "button", { isMobile: f, state: d } = v0(), h = /* @__PURE__ */ N.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Me(c8({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ N.jsxs(UH, { children: [
    /* @__PURE__ */ N.jsx(GH, { asChild: !0, children: h }),
    /* @__PURE__ */ N.jsx(
      YH,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function d8({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ N.jsx(i8, { children: /* @__PURE__ */ N.jsx(s8, { children: /* @__PURE__ */ N.jsx(a8, { children: /* @__PURE__ */ N.jsx(l8, { children: t.map((n, o) => /* @__PURE__ */ N.jsx(u8, { children: /* @__PURE__ */ N.jsxs(
    f8,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ N.jsx(z$, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ N.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function h8({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ N.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ N.jsxs(di, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ N.jsx(D$, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ N.jsxs(di, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(N$, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ N.jsxs(di, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ N.jsx(T$, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function p8({ x: e, y: t, onDelete: n, onClose: o }) {
  return qt.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ N.jsx(
    NI,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ N.jsxs(
        di,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ N.jsx(B$, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function g8({
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
      O3,
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
          /* @__PURE__ */ N.jsx(F3, {}),
          /* @__PURE__ */ N.jsx(U3, {}),
          /* @__PURE__ */ N.jsx(ia, { position: "top-right", children: /* @__PURE__ */ N.jsx(
            h8,
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
      p8,
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
function y0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zd, c_;
function m8() {
  if (c_) return zd;
  c_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return zd = e, zd;
}
var $d, f_;
function Ti() {
  if (f_) return $d;
  f_ = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return $d = e, $d;
}
var Bd, d_;
function Ju() {
  if (d_) return Bd;
  d_ = 1;
  var e = Ti();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return Bd = t, Bd;
}
var Vd, h_;
function v8() {
  if (h_) return Vd;
  h_ = 1;
  var e = Ju(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return Vd = o, Vd;
}
var Hd, p_;
function y8() {
  if (p_) return Hd;
  p_ = 1;
  var e = Ju();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return Hd = t, Hd;
}
var Wd, g_;
function w8() {
  if (g_) return Wd;
  g_ = 1;
  var e = Ju();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Wd = t, Wd;
}
var Ud, m_;
function x8() {
  if (m_) return Ud;
  m_ = 1;
  var e = Ju();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return Ud = t, Ud;
}
var Gd, v_;
function ec() {
  if (v_) return Gd;
  v_ = 1;
  var e = m8(), t = v8(), n = y8(), o = w8(), i = x8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Gd = a, Gd;
}
var Yd, y_;
function b8() {
  if (y_) return Yd;
  y_ = 1;
  var e = ec();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Yd = t, Yd;
}
var Kd, w_;
function _8() {
  if (w_) return Kd;
  w_ = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return Kd = e, Kd;
}
var Xd, x_;
function S8() {
  if (x_) return Xd;
  x_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Xd = e, Xd;
}
var Qd, b_;
function E8() {
  if (b_) return Qd;
  b_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Qd = e, Qd;
}
var Zd, __;
function tA() {
  if (__) return Zd;
  __ = 1;
  var e = typeof Nl == "object" && Nl && Nl.Object === Object && Nl;
  return Zd = e, Zd;
}
var Jd, S_;
function _n() {
  if (S_) return Jd;
  S_ = 1;
  var e = tA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Jd = n, Jd;
}
var eh, E_;
function Ii() {
  if (E_) return eh;
  E_ = 1;
  var e = _n(), t = e.Symbol;
  return eh = t, eh;
}
var th, C_;
function C8() {
  if (C_) return th;
  C_ = 1;
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
  return th = a, th;
}
var nh, k_;
function k8() {
  if (k_) return nh;
  k_ = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return nh = n, nh;
}
var rh, R_;
function xo() {
  if (R_) return rh;
  R_ = 1;
  var e = Ii(), t = C8(), n = k8(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return rh = l, rh;
}
var oh, N_;
function tn() {
  if (N_) return oh;
  N_ = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return oh = e, oh;
}
var ih, P_;
function la() {
  if (P_) return ih;
  P_ = 1;
  var e = xo(), t = tn(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return ih = l, ih;
}
var sh, T_;
function R8() {
  if (T_) return sh;
  T_ = 1;
  var e = _n(), t = e["__core-js_shared__"];
  return sh = t, sh;
}
var ah, I_;
function N8() {
  if (I_) return ah;
  I_ = 1;
  var e = R8(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return ah = n, ah;
}
var lh, A_;
function nA() {
  if (A_) return lh;
  A_ = 1;
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
  return lh = n, lh;
}
var uh, M_;
function P8() {
  if (M_) return uh;
  M_ = 1;
  var e = la(), t = N8(), n = tn(), o = nA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!n(m) || t(m))
      return !1;
    var v = e(m) ? h : a;
    return v.test(o(m));
  }
  return uh = p, uh;
}
var ch, O_;
function T8() {
  if (O_) return ch;
  O_ = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return ch = e, ch;
}
var fh, L_;
function bo() {
  if (L_) return fh;
  L_ = 1;
  var e = P8(), t = T8();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return fh = n, fh;
}
var dh, D_;
function w0() {
  if (D_) return dh;
  D_ = 1;
  var e = bo(), t = _n(), n = e(t, "Map");
  return dh = n, dh;
}
var hh, j_;
function tc() {
  if (j_) return hh;
  j_ = 1;
  var e = bo(), t = e(Object, "create");
  return hh = t, hh;
}
var ph, q_;
function I8() {
  if (q_) return ph;
  q_ = 1;
  var e = tc();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return ph = t, ph;
}
var gh, F_;
function A8() {
  if (F_) return gh;
  F_ = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return gh = e, gh;
}
var mh, z_;
function M8() {
  if (z_) return mh;
  z_ = 1;
  var e = tc(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return mh = i, mh;
}
var vh, $_;
function O8() {
  if ($_) return vh;
  $_ = 1;
  var e = tc(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return vh = o, vh;
}
var yh, B_;
function L8() {
  if (B_) return yh;
  B_ = 1;
  var e = tc(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return yh = n, yh;
}
var wh, V_;
function D8() {
  if (V_) return wh;
  V_ = 1;
  var e = I8(), t = A8(), n = M8(), o = O8(), i = L8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, wh = a, wh;
}
var xh, H_;
function j8() {
  if (H_) return xh;
  H_ = 1;
  var e = D8(), t = ec(), n = w0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return xh = o, xh;
}
var bh, W_;
function q8() {
  if (W_) return bh;
  W_ = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return bh = e, bh;
}
var _h, U_;
function nc() {
  if (U_) return _h;
  U_ = 1;
  var e = q8();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return _h = t, _h;
}
var Sh, G_;
function F8() {
  if (G_) return Sh;
  G_ = 1;
  var e = nc();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return Sh = t, Sh;
}
var Eh, Y_;
function z8() {
  if (Y_) return Eh;
  Y_ = 1;
  var e = nc();
  function t(n) {
    return e(this, n).get(n);
  }
  return Eh = t, Eh;
}
var Ch, K_;
function $8() {
  if (K_) return Ch;
  K_ = 1;
  var e = nc();
  function t(n) {
    return e(this, n).has(n);
  }
  return Ch = t, Ch;
}
var kh, X_;
function B8() {
  if (X_) return kh;
  X_ = 1;
  var e = nc();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return kh = t, kh;
}
var Rh, Q_;
function x0() {
  if (Q_) return Rh;
  Q_ = 1;
  var e = j8(), t = F8(), n = z8(), o = $8(), i = B8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Rh = a, Rh;
}
var Nh, Z_;
function V8() {
  if (Z_) return Nh;
  Z_ = 1;
  var e = ec(), t = w0(), n = x0(), o = 200;
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
  return Nh = i, Nh;
}
var Ph, J_;
function rc() {
  if (J_) return Ph;
  J_ = 1;
  var e = ec(), t = b8(), n = _8(), o = S8(), i = E8(), a = V8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, Ph = l, Ph;
}
var Th, eS;
function b0() {
  if (eS) return Th;
  eS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return Th = e, Th;
}
var Ih, tS;
function rA() {
  if (tS) return Ih;
  tS = 1;
  var e = bo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Ih = t, Ih;
}
var Ah, nS;
function oc() {
  if (nS) return Ah;
  nS = 1;
  var e = rA();
  function t(n, o, i) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[o] = i;
  }
  return Ah = t, Ah;
}
var Mh, rS;
function ic() {
  if (rS) return Mh;
  rS = 1;
  var e = oc(), t = Ti(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Mh = i, Mh;
}
var Oh, oS;
function ua() {
  if (oS) return Oh;
  oS = 1;
  var e = ic(), t = oc();
  function n(o, i, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = i.length; ++f < d; ) {
      var h = i[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return Oh = n, Oh;
}
var Lh, iS;
function H8() {
  if (iS) return Lh;
  iS = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return Lh = e, Lh;
}
var Dh, sS;
function Fn() {
  if (sS) return Dh;
  sS = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Dh = e, Dh;
}
var jh, aS;
function W8() {
  if (aS) return jh;
  aS = 1;
  var e = xo(), t = Fn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return jh = o, jh;
}
var qh, lS;
function ca() {
  if (lS) return qh;
  lS = 1;
  var e = W8(), t = Fn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return qh = a, qh;
}
var Fh, uS;
function rt() {
  if (uS) return Fh;
  uS = 1;
  var e = Array.isArray;
  return Fh = e, Fh;
}
var Is = { exports: {} }, zh, cS;
function U8() {
  if (cS) return zh;
  cS = 1;
  function e() {
    return !1;
  }
  return zh = e, zh;
}
Is.exports;
var fS;
function Ai() {
  return fS || (fS = 1, (function(e, t) {
    var n = _n(), o = U8(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(Is, Is.exports)), Is.exports;
}
var $h, dS;
function sc() {
  if (dS) return $h;
  dS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return $h = n, $h;
}
var Bh, hS;
function _0() {
  if (hS) return Bh;
  hS = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Bh = t, Bh;
}
var Vh, pS;
function G8() {
  if (pS) return Vh;
  pS = 1;
  var e = xo(), t = _0(), n = Fn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", S = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", _ = "[object DataView]", C = "[object Float32Array]", b = "[object Float64Array]", R = "[object Int8Array]", P = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", j = "[object Uint16Array]", G = "[object Uint32Array]", F = {};
  F[C] = F[b] = F[R] = F[P] = F[T] = F[A] = F[O] = F[j] = F[G] = !0, F[o] = F[i] = F[x] = F[a] = F[_] = F[l] = F[u] = F[f] = F[d] = F[h] = F[p] = F[m] = F[v] = F[S] = F[y] = !1;
  function V(W) {
    return n(W) && t(W.length) && !!F[e(W)];
  }
  return Vh = V, Vh;
}
var Hh, gS;
function ac() {
  if (gS) return Hh;
  gS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Hh = e, Hh;
}
var As = { exports: {} };
As.exports;
var mS;
function S0() {
  return mS || (mS = 1, (function(e, t) {
    var n = tA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(As, As.exports)), As.exports;
}
var Wh, vS;
function fa() {
  if (vS) return Wh;
  vS = 1;
  var e = G8(), t = ac(), n = S0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return Wh = i, Wh;
}
var Uh, yS;
function oA() {
  if (yS) return Uh;
  yS = 1;
  var e = H8(), t = ca(), n = rt(), o = Ai(), i = sc(), a = fa(), l = Object.prototype, u = l.hasOwnProperty;
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
  return Uh = f, Uh;
}
var Gh, wS;
function lc() {
  if (wS) return Gh;
  wS = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return Gh = t, Gh;
}
var Yh, xS;
function iA() {
  if (xS) return Yh;
  xS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Yh = e, Yh;
}
var Kh, bS;
function Y8() {
  if (bS) return Kh;
  bS = 1;
  var e = iA(), t = e(Object.keys, Object);
  return Kh = t, Kh;
}
var Xh, _S;
function E0() {
  if (_S) return Xh;
  _S = 1;
  var e = lc(), t = Y8(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Xh = i, Xh;
}
var Qh, SS;
function nr() {
  if (SS) return Qh;
  SS = 1;
  var e = la(), t = _0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Qh = n, Qh;
}
var Zh, ES;
function qr() {
  if (ES) return Zh;
  ES = 1;
  var e = oA(), t = E0(), n = nr();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return Zh = o, Zh;
}
var Jh, CS;
function K8() {
  if (CS) return Jh;
  CS = 1;
  var e = ua(), t = qr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Jh = n, Jh;
}
var ep, kS;
function X8() {
  if (kS) return ep;
  kS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return ep = e, ep;
}
var tp, RS;
function Q8() {
  if (RS) return tp;
  RS = 1;
  var e = tn(), t = lc(), n = X8(), o = Object.prototype, i = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return n(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !i.call(l, d)) || f.push(d);
    return f;
  }
  return tp = a, tp;
}
var np, NS;
function _o() {
  if (NS) return np;
  NS = 1;
  var e = oA(), t = Q8(), n = nr();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return np = o, np;
}
var rp, PS;
function Z8() {
  if (PS) return rp;
  PS = 1;
  var e = ua(), t = _o();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return rp = n, rp;
}
var Ms = { exports: {} };
Ms.exports;
var TS;
function sA() {
  return TS || (TS = 1, (function(e, t) {
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
var op, IS;
function aA() {
  if (IS) return op;
  IS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return op = e, op;
}
var ip, AS;
function lA() {
  if (AS) return ip;
  AS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return ip = e, ip;
}
var sp, MS;
function uA() {
  if (MS) return sp;
  MS = 1;
  function e() {
    return [];
  }
  return sp = e, sp;
}
var ap, OS;
function C0() {
  if (OS) return ap;
  OS = 1;
  var e = lA(), t = uA(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return ap = a, ap;
}
var lp, LS;
function J8() {
  if (LS) return lp;
  LS = 1;
  var e = ua(), t = C0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return lp = n, lp;
}
var up, DS;
function k0() {
  if (DS) return up;
  DS = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return up = e, up;
}
var cp, jS;
function uc() {
  if (jS) return cp;
  jS = 1;
  var e = iA(), t = e(Object.getPrototypeOf, Object);
  return cp = t, cp;
}
var fp, qS;
function cA() {
  if (qS) return fp;
  qS = 1;
  var e = k0(), t = uc(), n = C0(), o = uA(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return fp = a, fp;
}
var dp, FS;
function e6() {
  if (FS) return dp;
  FS = 1;
  var e = ua(), t = cA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return dp = n, dp;
}
var hp, zS;
function fA() {
  if (zS) return hp;
  zS = 1;
  var e = k0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return hp = n, hp;
}
var pp, $S;
function dA() {
  if ($S) return pp;
  $S = 1;
  var e = fA(), t = C0(), n = qr();
  function o(i) {
    return e(i, n, t);
  }
  return pp = o, pp;
}
var gp, BS;
function t6() {
  if (BS) return gp;
  BS = 1;
  var e = fA(), t = cA(), n = _o();
  function o(i) {
    return e(i, n, t);
  }
  return gp = o, gp;
}
var mp, VS;
function n6() {
  if (VS) return mp;
  VS = 1;
  var e = bo(), t = _n(), n = e(t, "DataView");
  return mp = n, mp;
}
var vp, HS;
function r6() {
  if (HS) return vp;
  HS = 1;
  var e = bo(), t = _n(), n = e(t, "Promise");
  return vp = n, vp;
}
var yp, WS;
function hA() {
  if (WS) return yp;
  WS = 1;
  var e = bo(), t = _n(), n = e(t, "Set");
  return yp = n, yp;
}
var wp, US;
function o6() {
  if (US) return wp;
  US = 1;
  var e = bo(), t = _n(), n = e(t, "WeakMap");
  return wp = n, wp;
}
var xp, GS;
function Mi() {
  if (GS) return xp;
  GS = 1;
  var e = n6(), t = w0(), n = r6(), o = hA(), i = o6(), a = xo(), l = nA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), S = l(t), y = l(n), x = l(o), _ = l(i), C = a;
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
  }), xp = C, xp;
}
var bp, YS;
function i6() {
  if (YS) return bp;
  YS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return bp = n, bp;
}
var _p, KS;
function pA() {
  if (KS) return _p;
  KS = 1;
  var e = _n(), t = e.Uint8Array;
  return _p = t, _p;
}
var Sp, XS;
function R0() {
  if (XS) return Sp;
  XS = 1;
  var e = pA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return Sp = t, Sp;
}
var Ep, QS;
function s6() {
  if (QS) return Ep;
  QS = 1;
  var e = R0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return Ep = t, Ep;
}
var Cp, ZS;
function a6() {
  if (ZS) return Cp;
  ZS = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return Cp = t, Cp;
}
var kp, JS;
function l6() {
  if (JS) return kp;
  JS = 1;
  var e = Ii(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return kp = o, kp;
}
var Rp, eE;
function gA() {
  if (eE) return Rp;
  eE = 1;
  var e = R0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return Rp = t, Rp;
}
var Np, tE;
function u6() {
  if (tE) return Np;
  tE = 1;
  var e = R0(), t = s6(), n = a6(), o = l6(), i = gA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", S = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", _ = "[object Int8Array]", C = "[object Int16Array]", b = "[object Int32Array]", R = "[object Uint8Array]", P = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(j, G, F) {
    var V = j.constructor;
    switch (G) {
      case v:
        return e(j);
      case a:
      case l:
        return new V(+j);
      case S:
        return t(j, F);
      case y:
      case x:
      case _:
      case C:
      case b:
      case R:
      case P:
      case T:
      case A:
        return i(j, F);
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
  return Np = O, Np;
}
var Pp, nE;
function mA() {
  if (nE) return Pp;
  nE = 1;
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
  return Pp = n, Pp;
}
var Tp, rE;
function vA() {
  if (rE) return Tp;
  rE = 1;
  var e = mA(), t = uc(), n = lc();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return Tp = o, Tp;
}
var Ip, oE;
function c6() {
  if (oE) return Ip;
  oE = 1;
  var e = Mi(), t = Fn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Ip = o, Ip;
}
var Ap, iE;
function f6() {
  if (iE) return Ap;
  iE = 1;
  var e = c6(), t = ac(), n = S0(), o = n && n.isMap, i = o ? t(o) : e;
  return Ap = i, Ap;
}
var Mp, sE;
function d6() {
  if (sE) return Mp;
  sE = 1;
  var e = Mi(), t = Fn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Mp = o, Mp;
}
var Op, aE;
function h6() {
  if (aE) return Op;
  aE = 1;
  var e = d6(), t = ac(), n = S0(), o = n && n.isSet, i = o ? t(o) : e;
  return Op = i, Op;
}
var Lp, lE;
function yA() {
  if (lE) return Lp;
  lE = 1;
  var e = rc(), t = b0(), n = ic(), o = K8(), i = Z8(), a = sA(), l = aA(), u = J8(), f = e6(), d = dA(), h = t6(), p = Mi(), m = i6(), v = u6(), S = vA(), y = rt(), x = Ai(), _ = f6(), C = tn(), b = h6(), R = qr(), P = _o(), T = 1, A = 2, O = 4, j = "[object Arguments]", G = "[object Array]", F = "[object Boolean]", V = "[object Date]", W = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", q = "[object Map]", Y = "[object Number]", M = "[object Object]", z = "[object RegExp]", Q = "[object Set]", D = "[object String]", U = "[object Symbol]", ie = "[object WeakMap]", B = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", X = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", _e = "[object Uint32Array]", me = {};
  me[j] = me[G] = me[B] = me[Z] = me[F] = me[V] = me[ee] = me[X] = me[te] = me[se] = me[ae] = me[q] = me[Y] = me[M] = me[z] = me[Q] = me[D] = me[U] = me[ce] = me[de] = me[pe] = me[_e] = !0, me[W] = me[L] = me[ie] = !1;
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
  return Lp = Ne, Lp;
}
var Dp, uE;
function p6() {
  if (uE) return Dp;
  uE = 1;
  var e = yA(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return Dp = n, Dp;
}
var jp, cE;
function N0() {
  if (cE) return jp;
  cE = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return jp = e, jp;
}
var qp, fE;
function g6() {
  if (fE) return qp;
  fE = 1;
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
  return qp = e, qp;
}
var Fp, dE;
function P0() {
  if (dE) return Fp;
  dE = 1;
  var e = g6(), t = e();
  return Fp = t, Fp;
}
var zp, hE;
function T0() {
  if (hE) return zp;
  hE = 1;
  var e = P0(), t = qr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return zp = n, zp;
}
var $p, pE;
function m6() {
  if (pE) return $p;
  pE = 1;
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
  return $p = t, $p;
}
var Bp, gE;
function cc() {
  if (gE) return Bp;
  gE = 1;
  var e = T0(), t = m6(), n = t(e);
  return Bp = n, Bp;
}
var Vp, mE;
function So() {
  if (mE) return Vp;
  mE = 1;
  function e(t) {
    return t;
  }
  return Vp = e, Vp;
}
var Hp, vE;
function wA() {
  if (vE) return Hp;
  vE = 1;
  var e = So();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return Hp = t, Hp;
}
var Wp, yE;
function xA() {
  if (yE) return Wp;
  yE = 1;
  var e = b0(), t = cc(), n = wA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return Wp = i, Wp;
}
var Up, wE;
function bA() {
  return wE || (wE = 1, Up = xA()), Up;
}
var Gp, xE;
function v6() {
  if (xE) return Gp;
  xE = 1;
  var e = cc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return Gp = t, Gp;
}
var Yp, bE;
function y6() {
  if (bE) return Yp;
  bE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Yp = t, Yp;
}
var Kp, _E;
function w6() {
  if (_E) return Kp;
  _E = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Kp = e, Kp;
}
var Xp, SE;
function _A() {
  if (SE) return Xp;
  SE = 1;
  var e = x0(), t = y6(), n = w6();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Xp = o, Xp;
}
var Qp, EE;
function x6() {
  if (EE) return Qp;
  EE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Qp = e, Qp;
}
var Zp, CE;
function SA() {
  if (CE) return Zp;
  CE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Zp = e, Zp;
}
var Jp, kE;
function EA() {
  if (kE) return Jp;
  kE = 1;
  var e = _A(), t = x6(), n = SA(), o = 1, i = 2;
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
  return Jp = a, Jp;
}
var eg, RE;
function b6() {
  if (RE) return eg;
  RE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return eg = e, eg;
}
var tg, NE;
function I0() {
  if (NE) return tg;
  NE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return tg = e, tg;
}
var ng, PE;
function _6() {
  if (PE) return ng;
  PE = 1;
  var e = Ii(), t = pA(), n = Ti(), o = EA(), i = b6(), a = I0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", S = "[object Set]", y = "[object String]", x = "[object Symbol]", _ = "[object ArrayBuffer]", C = "[object DataView]", b = e ? e.prototype : void 0, R = b ? b.valueOf : void 0;
  function P(T, A, O, j, G, F, V) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case _:
        return !(T.byteLength != A.byteLength || !F(new t(T), new t(A)));
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
        var q = o(W(T), W(A), j, G, F, V);
        return V.delete(T), q;
      case x:
        if (R)
          return R.call(T) == R.call(A);
    }
    return !1;
  }
  return ng = P, ng;
}
var rg, TE;
function S6() {
  if (TE) return rg;
  TE = 1;
  var e = dA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
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
      var j = a.constructor, G = l.constructor;
      j != G && "constructor" in a && "constructor" in l && !(typeof j == "function" && j instanceof j && typeof G == "function" && G instanceof G) && (R = !1);
    }
    return h.delete(a), h.delete(l), R;
  }
  return rg = i, rg;
}
var og, IE;
function E6() {
  if (IE) return og;
  IE = 1;
  var e = rc(), t = EA(), n = _6(), o = S6(), i = Mi(), a = rt(), l = Ai(), u = fa(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function S(y, x, _, C, b, R) {
    var P = a(y), T = a(x), A = P ? h : i(y), O = T ? h : i(x);
    A = A == d ? p : A, O = O == d ? p : O;
    var j = A == p, G = O == p, F = A == O;
    if (F && l(y)) {
      if (!l(x))
        return !1;
      P = !0, j = !1;
    }
    if (F && !j)
      return R || (R = new e()), P || u(y) ? t(y, x, _, C, b, R) : n(y, x, A, _, C, b, R);
    if (!(_ & f)) {
      var V = j && v.call(y, "__wrapped__"), W = G && v.call(x, "__wrapped__");
      if (V || W) {
        var L = V ? y.value() : y, H = W ? x.value() : x;
        return R || (R = new e()), b(L, H, _, C, R);
      }
    }
    return F ? (R || (R = new e()), o(y, x, _, C, b, R)) : !1;
  }
  return og = S, og;
}
var ig, AE;
function CA() {
  if (AE) return ig;
  AE = 1;
  var e = E6(), t = Fn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return ig = n, ig;
}
var sg, ME;
function C6() {
  if (ME) return sg;
  ME = 1;
  var e = rc(), t = CA(), n = 1, o = 2;
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
  return sg = i, sg;
}
var ag, OE;
function kA() {
  if (OE) return ag;
  OE = 1;
  var e = tn();
  function t(n) {
    return n === n && !e(n);
  }
  return ag = t, ag;
}
var lg, LE;
function k6() {
  if (LE) return lg;
  LE = 1;
  var e = kA(), t = qr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return lg = n, lg;
}
var ug, DE;
function RA() {
  if (DE) return ug;
  DE = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return ug = e, ug;
}
var cg, jE;
function R6() {
  if (jE) return cg;
  jE = 1;
  var e = C6(), t = k6(), n = RA();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return cg = o, cg;
}
var fg, qE;
function Oi() {
  if (qE) return fg;
  qE = 1;
  var e = xo(), t = Fn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return fg = o, fg;
}
var dg, FE;
function A0() {
  if (FE) return dg;
  FE = 1;
  var e = rt(), t = Oi(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return dg = i, dg;
}
var hg, zE;
function N6() {
  if (zE) return hg;
  zE = 1;
  var e = x0(), t = "Expected a function";
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
  return n.Cache = e, hg = n, hg;
}
var pg, $E;
function P6() {
  if ($E) return pg;
  $E = 1;
  var e = N6(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return pg = n, pg;
}
var gg, BE;
function T6() {
  if (BE) return gg;
  BE = 1;
  var e = P6(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return gg = o, gg;
}
var mg, VE;
function fc() {
  if (VE) return mg;
  VE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return mg = e, mg;
}
var vg, HE;
function I6() {
  if (HE) return vg;
  HE = 1;
  var e = Ii(), t = fc(), n = rt(), o = Oi(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
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
  return vg = l, vg;
}
var yg, WE;
function NA() {
  if (WE) return yg;
  WE = 1;
  var e = I6();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return yg = t, yg;
}
var wg, UE;
function dc() {
  if (UE) return wg;
  UE = 1;
  var e = rt(), t = A0(), n = T6(), o = NA();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return wg = i, wg;
}
var xg, GE;
function da() {
  if (GE) return xg;
  GE = 1;
  var e = Oi();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return xg = t, xg;
}
var bg, YE;
function hc() {
  if (YE) return bg;
  YE = 1;
  var e = dc(), t = da();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return bg = n, bg;
}
var _g, KE;
function A6() {
  if (KE) return _g;
  KE = 1;
  var e = hc();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return _g = t, _g;
}
var Sg, XE;
function M6() {
  if (XE) return Sg;
  XE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Sg = e, Sg;
}
var Eg, QE;
function PA() {
  if (QE) return Eg;
  QE = 1;
  var e = dc(), t = ca(), n = rt(), o = sc(), i = _0(), a = da();
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
  return Eg = l, Eg;
}
var Cg, ZE;
function TA() {
  if (ZE) return Cg;
  ZE = 1;
  var e = M6(), t = PA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Cg = n, Cg;
}
var kg, JE;
function O6() {
  if (JE) return kg;
  JE = 1;
  var e = CA(), t = A6(), n = TA(), o = A0(), i = kA(), a = RA(), l = da(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return kg = d, kg;
}
var Rg, eC;
function IA() {
  if (eC) return Rg;
  eC = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Rg = e, Rg;
}
var Ng, tC;
function L6() {
  if (tC) return Ng;
  tC = 1;
  var e = hc();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return Ng = t, Ng;
}
var Pg, nC;
function D6() {
  if (nC) return Pg;
  nC = 1;
  var e = IA(), t = L6(), n = A0(), o = da();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return Pg = i, Pg;
}
var Tg, rC;
function rr() {
  if (rC) return Tg;
  rC = 1;
  var e = R6(), t = O6(), n = So(), o = rt(), i = D6();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return Tg = a, Tg;
}
var Ig, oC;
function AA() {
  if (oC) return Ig;
  oC = 1;
  var e = lA(), t = v6(), n = rr(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return Ig = i, Ig;
}
var Ag, iC;
function j6() {
  if (iC) return Ag;
  iC = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Ag = n, Ag;
}
var Mg, sC;
function MA() {
  if (sC) return Mg;
  sC = 1;
  var e = j6(), t = PA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Mg = n, Mg;
}
var Og, aC;
function q6() {
  if (aC) return Og;
  aC = 1;
  var e = E0(), t = Mi(), n = ca(), o = rt(), i = nr(), a = Ai(), l = lc(), u = fa(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
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
  return Og = m, Og;
}
var Lg, lC;
function OA() {
  if (lC) return Lg;
  lC = 1;
  function e(t) {
    return t === void 0;
  }
  return Lg = e, Lg;
}
var Dg, uC;
function LA() {
  if (uC) return Dg;
  uC = 1;
  var e = cc(), t = nr();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return Dg = n, Dg;
}
var jg, cC;
function DA() {
  if (cC) return jg;
  cC = 1;
  var e = fc(), t = rr(), n = LA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return jg = i, jg;
}
var qg, fC;
function F6() {
  if (fC) return qg;
  fC = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return qg = e, qg;
}
var Fg, dC;
function z6() {
  if (dC) return Fg;
  dC = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return Fg = e, Fg;
}
var zg, hC;
function jA() {
  if (hC) return zg;
  hC = 1;
  var e = F6(), t = cc(), n = rr(), o = z6(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return zg = a, zg;
}
var $g, pC;
function $6() {
  if (pC) return $g;
  pC = 1;
  var e = xo(), t = rt(), n = Fn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return $g = i, $g;
}
var Bg, gC;
function B6() {
  if (gC) return Bg;
  gC = 1;
  var e = IA(), t = e("length");
  return Bg = t, Bg;
}
var Vg, mC;
function V6() {
  if (mC) return Vg;
  mC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return Vg = f, Vg;
}
var Hg, vC;
function H6() {
  if (vC) return Hg;
  vC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", S = d + "?", y = "[" + a + "]?", x = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + S + ")*", _ = y + S + x, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", b = RegExp(f + "(?=" + f + ")|" + C + _, "g");
  function R(P) {
    for (var T = b.lastIndex = 0; b.test(P); )
      ++T;
    return T;
  }
  return Hg = R, Hg;
}
var Wg, yC;
function W6() {
  if (yC) return Wg;
  yC = 1;
  var e = B6(), t = V6(), n = H6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return Wg = o, Wg;
}
var Ug, wC;
function U6() {
  if (wC) return Ug;
  wC = 1;
  var e = E0(), t = Mi(), n = nr(), o = $6(), i = W6(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? i(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return Ug = u, Ug;
}
var Gg, xC;
function G6() {
  if (xC) return Gg;
  xC = 1;
  var e = b0(), t = mA(), n = T0(), o = rr(), i = uc(), a = rt(), l = Ai(), u = la(), f = tn(), d = fa();
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
  return Gg = h, Gg;
}
var Yg, bC;
function Y6() {
  if (bC) return Yg;
  bC = 1;
  var e = Ii(), t = ca(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Yg = i, Yg;
}
var Kg, _C;
function M0() {
  if (_C) return Kg;
  _C = 1;
  var e = k0(), t = Y6();
  function n(o, i, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      i > 0 && a(h) ? i > 1 ? n(h, i - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return Kg = n, Kg;
}
var Xg, SC;
function K6() {
  if (SC) return Xg;
  SC = 1;
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
  return Xg = e, Xg;
}
var Qg, EC;
function qA() {
  if (EC) return Qg;
  EC = 1;
  var e = K6(), t = Math.max;
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
  return Qg = n, Qg;
}
var Zg, CC;
function X6() {
  if (CC) return Zg;
  CC = 1;
  var e = N0(), t = rA(), n = So(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Zg = o, Zg;
}
var Jg, kC;
function Q6() {
  if (kC) return Jg;
  kC = 1;
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
  return Jg = o, Jg;
}
var em, RC;
function FA() {
  if (RC) return em;
  RC = 1;
  var e = X6(), t = Q6(), n = t(e);
  return em = n, em;
}
var tm, NC;
function pc() {
  if (NC) return tm;
  NC = 1;
  var e = So(), t = qA(), n = FA();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return tm = o, tm;
}
var nm, PC;
function zA() {
  if (PC) return nm;
  PC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return nm = e, nm;
}
var rm, TC;
function Z6() {
  if (TC) return rm;
  TC = 1;
  function e(t) {
    return t !== t;
  }
  return rm = e, rm;
}
var om, IC;
function J6() {
  if (IC) return om;
  IC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return om = e, om;
}
var im, AC;
function eW() {
  if (AC) return im;
  AC = 1;
  var e = zA(), t = Z6(), n = J6();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return im = o, im;
}
var sm, MC;
function tW() {
  if (MC) return sm;
  MC = 1;
  var e = eW();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return sm = t, sm;
}
var am, OC;
function nW() {
  if (OC) return am;
  OC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return am = e, am;
}
var lm, LC;
function rW() {
  if (LC) return lm;
  LC = 1;
  function e() {
  }
  return lm = e, lm;
}
var um, DC;
function oW() {
  if (DC) return um;
  DC = 1;
  var e = hA(), t = rW(), n = I0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return um = i, um;
}
var cm, jC;
function iW() {
  if (jC) return cm;
  jC = 1;
  var e = _A(), t = tW(), n = nW(), o = SA(), i = oW(), a = I0(), l = 200;
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
  return cm = u, cm;
}
var fm, qC;
function $A() {
  if (qC) return fm;
  qC = 1;
  var e = nr(), t = Fn();
  function n(o) {
    return t(o) && e(o);
  }
  return fm = n, fm;
}
var dm, FC;
function sW() {
  if (FC) return dm;
  FC = 1;
  var e = M0(), t = pc(), n = iW(), o = $A(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return dm = i, dm;
}
var hm, zC;
function aW() {
  if (zC) return hm;
  zC = 1;
  var e = fc();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return hm = t, hm;
}
var pm, $C;
function BA() {
  if ($C) return pm;
  $C = 1;
  var e = aW(), t = qr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return pm = n, pm;
}
var gm, BC;
function nn() {
  if (BC) return gm;
  BC = 1;
  var e;
  if (typeof y0 == "function")
    try {
      e = {
        clone: p6(),
        constant: N0(),
        each: bA(),
        filter: AA(),
        has: MA(),
        isArray: rt(),
        isEmpty: q6(),
        isFunction: la(),
        isUndefined: OA(),
        keys: qr(),
        map: DA(),
        reduce: jA(),
        size: U6(),
        transform: G6(),
        union: sW(),
        values: BA()
      };
    } catch {
    }
  return e || (e = window._), gm = e, gm;
}
var mm, VC;
function O0() {
  if (VC) return mm;
  VC = 1;
  var e = nn();
  mm = i;
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
  return mm;
}
var vm, HC;
function lW() {
  return HC || (HC = 1, vm = "2.1.8"), vm;
}
var ym, WC;
function uW() {
  return WC || (WC = 1, ym = {
    Graph: O0(),
    version: lW()
  }), ym;
}
var wm, UC;
function cW() {
  if (UC) return wm;
  UC = 1;
  var e = nn(), t = O0();
  wm = {
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
  return wm;
}
var xm, GC;
function fW() {
  if (GC) return xm;
  GC = 1;
  var e = nn();
  xm = t;
  function t(n) {
    var o = {}, i = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(n.successors(u), l), e.each(n.predecessors(u), l));
    }
    return e.each(n.nodes(), function(u) {
      a = [], l(u), a.length && i.push(a);
    }), i;
  }
  return xm;
}
var bm, YC;
function VA() {
  if (YC) return bm;
  YC = 1;
  var e = nn();
  bm = t;
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
  }, bm;
}
var _m, KC;
function HA() {
  if (KC) return _m;
  KC = 1;
  var e = nn(), t = VA();
  _m = o;
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
  return _m;
}
var Sm, XC;
function dW() {
  if (XC) return Sm;
  XC = 1;
  var e = HA(), t = nn();
  Sm = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return Sm;
}
var Em, QC;
function WA() {
  if (QC) return Em;
  QC = 1;
  var e = nn();
  Em = t;
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
  return Em;
}
var Cm, ZC;
function hW() {
  if (ZC) return Cm;
  ZC = 1;
  var e = nn(), t = WA();
  Cm = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return Cm;
}
var km, JC;
function pW() {
  if (JC) return km;
  JC = 1;
  var e = nn();
  km = n;
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
  return km;
}
var Rm, ek;
function UA() {
  if (ek) return Rm;
  ek = 1;
  var e = nn();
  Rm = t, t.CycleException = n;
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
  return n.prototype = new Error(), Rm;
}
var Nm, tk;
function gW() {
  if (tk) return Nm;
  tk = 1;
  var e = UA();
  Nm = t;
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
  return Nm;
}
var Pm, nk;
function GA() {
  if (nk) return Pm;
  nk = 1;
  var e = nn();
  Pm = t;
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
  return Pm;
}
var Tm, rk;
function mW() {
  if (rk) return Tm;
  rk = 1;
  var e = GA();
  Tm = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return Tm;
}
var Im, ok;
function vW() {
  if (ok) return Im;
  ok = 1;
  var e = GA();
  Im = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return Im;
}
var Am, ik;
function yW() {
  if (ik) return Am;
  ik = 1;
  var e = nn(), t = O0(), n = VA();
  Am = o;
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
  return Am;
}
var Mm, sk;
function wW() {
  return sk || (sk = 1, Mm = {
    components: fW(),
    dijkstra: HA(),
    dijkstraAll: dW(),
    findCycles: hW(),
    floydWarshall: pW(),
    isAcyclic: gW(),
    postorder: mW(),
    preorder: vW(),
    prim: yW(),
    tarjan: WA(),
    topsort: UA()
  }), Mm;
}
var Om, ak;
function xW() {
  if (ak) return Om;
  ak = 1;
  var e = uW();
  return Om = {
    Graph: e.Graph,
    json: cW(),
    alg: wW(),
    version: e.version
  }, Om;
}
var Lm, lk;
function wn() {
  if (lk) return Lm;
  lk = 1;
  var e;
  if (typeof y0 == "function")
    try {
      e = xW();
    } catch {
    }
  return e || (e = window.graphlib), Lm = e, Lm;
}
var Dm, uk;
function bW() {
  if (uk) return Dm;
  uk = 1;
  var e = yA(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return Dm = o, Dm;
}
var jm, ck;
function gc() {
  if (ck) return jm;
  ck = 1;
  var e = Ti(), t = nr(), n = sc(), o = tn();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return jm = i, jm;
}
var qm, fk;
function _W() {
  if (fk) return qm;
  fk = 1;
  var e = pc(), t = Ti(), n = gc(), o = _o(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), S = -1, y = v.length; ++S < y; ) {
        var x = v[S], _ = u[x];
        (_ === void 0 || t(_, i[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return qm = l, qm;
}
var Fm, dk;
function SW() {
  if (dk) return Fm;
  dk = 1;
  var e = rr(), t = nr(), n = qr();
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
  return Fm = o, Fm;
}
var zm, hk;
function EW() {
  if (hk) return zm;
  hk = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return zm = t, zm;
}
var $m, pk;
function CW() {
  if (pk) return $m;
  pk = 1;
  var e = EW(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return $m = n, $m;
}
var Bm, gk;
function kW() {
  if (gk) return Bm;
  gk = 1;
  var e = CW(), t = tn(), n = Oi(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
  return Bm = f, Bm;
}
var Vm, mk;
function YA() {
  if (mk) return Vm;
  mk = 1;
  var e = kW(), t = 1 / 0, n = 17976931348623157e292;
  function o(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * n;
    }
    return i === i ? i : 0;
  }
  return Vm = o, Vm;
}
var Hm, vk;
function RW() {
  if (vk) return Hm;
  vk = 1;
  var e = YA();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return Hm = t, Hm;
}
var Wm, yk;
function NW() {
  if (yk) return Wm;
  yk = 1;
  var e = zA(), t = rr(), n = RW(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return Wm = i, Wm;
}
var Um, wk;
function PW() {
  if (wk) return Um;
  wk = 1;
  var e = SW(), t = NW(), n = e(t);
  return Um = n, Um;
}
var Gm, xk;
function KA() {
  if (xk) return Gm;
  xk = 1;
  var e = M0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return Gm = t, Gm;
}
var Ym, bk;
function TW() {
  if (bk) return Ym;
  bk = 1;
  var e = P0(), t = wA(), n = _o();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Ym = o, Ym;
}
var Km, _k;
function IW() {
  if (_k) return Km;
  _k = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Km = e, Km;
}
var Xm, Sk;
function AW() {
  if (Sk) return Xm;
  Sk = 1;
  var e = oc(), t = T0(), n = rr();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Xm = o, Xm;
}
var Qm, Ek;
function L0() {
  if (Ek) return Qm;
  Ek = 1;
  var e = Oi();
  function t(n, o, i) {
    for (var a = -1, l = n.length; ++a < l; ) {
      var u = n[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : i(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Qm = t, Qm;
}
var Zm, Ck;
function MW() {
  if (Ck) return Zm;
  Ck = 1;
  function e(t, n) {
    return t > n;
  }
  return Zm = e, Zm;
}
var Jm, kk;
function OW() {
  if (kk) return Jm;
  kk = 1;
  var e = L0(), t = MW(), n = So();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Jm = o, Jm;
}
var ev, Rk;
function XA() {
  if (Rk) return ev;
  Rk = 1;
  var e = oc(), t = Ti();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return ev = n, ev;
}
var tv, Nk;
function LW() {
  if (Nk) return tv;
  Nk = 1;
  var e = xo(), t = uc(), n = Fn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return tv = d, tv;
}
var nv, Pk;
function QA() {
  if (Pk) return nv;
  Pk = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return nv = e, nv;
}
var rv, Tk;
function DW() {
  if (Tk) return rv;
  Tk = 1;
  var e = ua(), t = _o();
  function n(o) {
    return e(o, t(o));
  }
  return rv = n, rv;
}
var ov, Ik;
function jW() {
  if (Ik) return ov;
  Ik = 1;
  var e = XA(), t = sA(), n = gA(), o = aA(), i = vA(), a = ca(), l = rt(), u = $A(), f = Ai(), d = la(), h = tn(), p = LW(), m = fa(), v = QA(), S = DW();
  function y(x, _, C, b, R, P, T) {
    var A = v(x, C), O = v(_, C), j = T.get(O);
    if (j) {
      e(x, C, j);
      return;
    }
    var G = P ? P(A, O, C + "", x, _, T) : void 0, F = G === void 0;
    if (F) {
      var V = l(O), W = !V && f(O), L = !V && !W && m(O);
      G = O, V || W || L ? l(A) ? G = A : u(A) ? G = o(A) : W ? (F = !1, G = t(O, !0)) : L ? (F = !1, G = n(O, !0)) : G = [] : p(O) || a(O) ? (G = A, a(A) ? G = S(A) : (!h(A) || d(A)) && (G = i(O))) : F = !1;
    }
    F && (T.set(O, G), R(G, O, b, P, T), T.delete(O)), e(x, C, G);
  }
  return ov = y, ov;
}
var iv, Ak;
function qW() {
  if (Ak) return iv;
  Ak = 1;
  var e = rc(), t = XA(), n = P0(), o = jW(), i = tn(), a = _o(), l = QA();
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
  return iv = u, iv;
}
var sv, Mk;
function FW() {
  if (Mk) return sv;
  Mk = 1;
  var e = pc(), t = gc();
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
  return sv = n, sv;
}
var av, Ok;
function zW() {
  if (Ok) return av;
  Ok = 1;
  var e = qW(), t = FW(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return av = n, av;
}
var lv, Lk;
function ZA() {
  if (Lk) return lv;
  Lk = 1;
  function e(t, n) {
    return t < n;
  }
  return lv = e, lv;
}
var uv, Dk;
function $W() {
  if (Dk) return uv;
  Dk = 1;
  var e = L0(), t = ZA(), n = So();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return uv = o, uv;
}
var cv, jk;
function BW() {
  if (jk) return cv;
  jk = 1;
  var e = L0(), t = rr(), n = ZA();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return cv = o, cv;
}
var fv, qk;
function VW() {
  if (qk) return fv;
  qk = 1;
  var e = _n(), t = function() {
    return e.Date.now();
  };
  return fv = t, fv;
}
var dv, Fk;
function HW() {
  if (Fk) return dv;
  Fk = 1;
  var e = ic(), t = dc(), n = sc(), o = tn(), i = da();
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
  return dv = a, dv;
}
var hv, zk;
function WW() {
  if (zk) return hv;
  zk = 1;
  var e = hc(), t = HW(), n = dc();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return hv = o, hv;
}
var pv, $k;
function UW() {
  if ($k) return pv;
  $k = 1;
  var e = WW(), t = TA();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return pv = n, pv;
}
var gv, Bk;
function GW() {
  if (Bk) return gv;
  Bk = 1;
  var e = KA(), t = qA(), n = FA();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return gv = o, gv;
}
var mv, Vk;
function YW() {
  if (Vk) return mv;
  Vk = 1;
  var e = UW(), t = GW(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return mv = n, mv;
}
var vv, Hk;
function KW() {
  if (Hk) return vv;
  Hk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return vv = n, vv;
}
var yv, Wk;
function XW() {
  if (Wk) return yv;
  Wk = 1;
  var e = KW(), t = gc(), n = YA();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return yv = o, yv;
}
var wv, Uk;
function QW() {
  if (Uk) return wv;
  Uk = 1;
  var e = XW(), t = e();
  return wv = t, wv;
}
var xv, Gk;
function ZW() {
  if (Gk) return xv;
  Gk = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return xv = e, xv;
}
var bv, Yk;
function JW() {
  if (Yk) return bv;
  Yk = 1;
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
  return bv = t, bv;
}
var _v, Kk;
function eU() {
  if (Kk) return _v;
  Kk = 1;
  var e = JW();
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
  return _v = t, _v;
}
var Sv, Xk;
function tU() {
  if (Xk) return Sv;
  Xk = 1;
  var e = fc(), t = hc(), n = rr(), o = LA(), i = ZW(), a = ac(), l = eU(), u = So(), f = rt();
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
  return Sv = d, Sv;
}
var Ev, Qk;
function nU() {
  if (Qk) return Ev;
  Qk = 1;
  var e = M0(), t = tU(), n = pc(), o = gc(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Ev = i, Ev;
}
var Cv, Zk;
function rU() {
  if (Zk) return Cv;
  Zk = 1;
  var e = NA(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return Cv = n, Cv;
}
var kv, Jk;
function oU() {
  if (Jk) return kv;
  Jk = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return kv = e, kv;
}
var Rv, eR;
function iU() {
  if (eR) return Rv;
  eR = 1;
  var e = ic(), t = oU();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return Rv = n, Rv;
}
var Nv, tR;
function We() {
  if (tR) return Nv;
  tR = 1;
  var e;
  if (typeof y0 == "function")
    try {
      e = {
        cloneDeep: bW(),
        constant: N0(),
        defaults: _W(),
        each: bA(),
        filter: AA(),
        find: PW(),
        flatten: KA(),
        forEach: xA(),
        forIn: TW(),
        has: MA(),
        isUndefined: OA(),
        last: IW(),
        map: DA(),
        mapValues: AW(),
        max: OW(),
        merge: zW(),
        min: $W(),
        minBy: BW(),
        now: VW(),
        pick: YW(),
        range: QW(),
        reduce: jA(),
        sortBy: nU(),
        uniqueId: rU(),
        values: BA(),
        zipObject: iU()
      };
    } catch {
    }
  return e || (e = window._), Nv = e, Nv;
}
var Pv, nR;
function sU() {
  if (nR) return Pv;
  nR = 1, Pv = e;
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
  return Pv;
}
var Tv, rR;
function aU() {
  if (rR) return Tv;
  rR = 1;
  var e = We(), t = wn().Graph, n = sU();
  Tv = i;
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
  return Tv;
}
var Iv, oR;
function lU() {
  if (oR) return Iv;
  oR = 1;
  var e = We(), t = aU();
  Iv = {
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
  return Iv;
}
var Av, iR;
function Pt() {
  if (iR) return Av;
  iR = 1;
  var e = We(), t = wn().Graph;
  Av = {
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
  return Av;
}
var Mv, sR;
function uU() {
  if (sR) return Mv;
  sR = 1;
  var e = We(), t = Pt();
  Mv = {
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
  return Mv;
}
var Ov, aR;
function _u() {
  if (aR) return Ov;
  aR = 1;
  var e = We();
  Ov = {
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
  return Ov;
}
var Lv, lR;
function JA() {
  if (lR) return Lv;
  lR = 1;
  var e = We(), t = wn().Graph, n = _u().slack;
  Lv = o;
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
  return Lv;
}
var Dv, uR;
function cU() {
  if (uR) return Dv;
  uR = 1;
  var e = We(), t = JA(), n = _u().slack, o = _u().longestPath, i = wn().alg.preorder, a = wn().alg.postorder, l = Pt().simplify;
  Dv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = S, u.exchangeEdges = y;
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
    var T = b.node(P), A = T.parent, O = !0, j = R.edge(P, A), G = 0;
    return j || (O = !1, j = R.edge(A, P)), G = j.weight, e.forEach(R.nodeEdges(P), function(F) {
      var V = F.v === P, W = V ? F.w : F.v;
      if (W !== A) {
        var L = V === O, H = R.edge(F).weight;
        if (G += L ? H : -H, _(b, P, W)) {
          var q = b.edge(P, W).cutvalue;
          G += L ? -q : q;
        }
      }
    }), G;
  }
  function p(b, R) {
    arguments.length < 2 && (R = b.nodes()[0]), m(b, {}, 1, R);
  }
  function m(b, R, P, T, A) {
    var O = P, j = b.node(T);
    return R[T] = !0, e.forEach(b.neighbors(T), function(G) {
      e.has(R, G) || (P = m(b, R, P, G, T));
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
    var O = b.node(T), j = b.node(A), G = O, F = !1;
    O.lim > j.lim && (G = j, F = !0);
    var V = e.filter(R.edges(), function(W) {
      return F === C(b, b.node(W.v), G) && F !== C(b, b.node(W.w), G);
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
      var O = b.node(A).parent, j = R.edge(A, O), G = !1;
      j || (j = R.edge(O, A), G = !0), R.node(A).rank = R.node(O).rank + (G ? j.minlen : -j.minlen);
    });
  }
  function _(b, R, P) {
    return b.hasEdge(R, P);
  }
  function C(b, R, P) {
    return P.low <= R.lim && R.lim <= P.lim;
  }
  return Dv;
}
var jv, cR;
function fU() {
  if (cR) return jv;
  cR = 1;
  var e = _u(), t = e.longestPath, n = JA(), o = cU();
  jv = i;
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
  return jv;
}
var qv, fR;
function dU() {
  if (fR) return qv;
  fR = 1;
  var e = We();
  qv = t;
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
  return qv;
}
var Fv, dR;
function hU() {
  if (dR) return Fv;
  dR = 1;
  var e = We(), t = Pt();
  Fv = {
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
  return Fv;
}
var zv, hR;
function pU() {
  if (hR) return zv;
  hR = 1;
  var e = We(), t = Pt();
  zv = n;
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
  return zv;
}
var $v, pR;
function gU() {
  if (pR) return $v;
  pR = 1;
  var e = We();
  $v = {
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
  return $v;
}
var Bv, gR;
function mU() {
  if (gR) return Bv;
  gR = 1;
  var e = We();
  Bv = t;
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
  return Bv;
}
var Vv, mR;
function vU() {
  if (mR) return Vv;
  mR = 1;
  var e = We();
  Vv = t;
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
  return Vv;
}
var Hv, vR;
function yU() {
  if (vR) return Hv;
  vR = 1;
  var e = We();
  Hv = t;
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
  return Hv;
}
var Wv, yR;
function wU() {
  if (yR) return Wv;
  yR = 1;
  var e = We();
  Wv = t;
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
  return Wv;
}
var Uv, wR;
function xU() {
  if (wR) return Uv;
  wR = 1;
  var e = We(), t = Pt();
  Uv = n;
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
  return Uv;
}
var Gv, xR;
function bU() {
  if (xR) return Gv;
  xR = 1;
  var e = We(), t = yU(), n = wU(), o = xU();
  Gv = i;
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
  return Gv;
}
var Yv, bR;
function _U() {
  if (bR) return Yv;
  bR = 1;
  var e = We(), t = wn().Graph;
  Yv = n;
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
  return Yv;
}
var Kv, _R;
function SU() {
  if (_R) return Kv;
  _R = 1;
  var e = We();
  Kv = t;
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
  return Kv;
}
var Xv, SR;
function EU() {
  if (SR) return Xv;
  SR = 1;
  var e = We(), t = mU(), n = vU(), o = bU(), i = _U(), a = SU(), l = wn().Graph, u = Pt();
  Xv = f;
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
  return Xv;
}
var Qv, ER;
function CU() {
  if (ER) return Qv;
  ER = 1;
  var e = We(), t = wn().Graph, n = Pt();
  Qv = {
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
      var A = 0, O = 0, j = P.length, G = e.last(T);
      return e.forEach(T, function(F, V) {
        var W = a(_, F), L = W ? _.node(W).order : j;
        (W || F === G) && (e.forEach(T.slice(O, V + 1), function(H) {
          e.forEach(_.predecessors(H), function(q) {
            var Y = _.node(q), M = Y.order;
            (M < A || L < M) && !(Y.dummy && _.node(H).dummy) && l(b, q, H);
          });
        }), O = V + 1, A = L);
      }), T;
    }
    return e.reduce(C, R), b;
  }
  function i(_, C) {
    var b = {};
    function R(T, A, O, j, G) {
      var F;
      e.forEach(e.range(A, O), function(V) {
        F = T[V], _.node(F).dummy && e.forEach(_.predecessors(F), function(W) {
          var L = _.node(W);
          L.dummy && (L.order < j || L.order > G) && l(b, W, F);
        });
      });
    }
    function P(T, A) {
      var O = -1, j, G = 0;
      return e.forEach(A, function(F, V) {
        if (_.node(F).dummy === "border") {
          var W = _.predecessors(F);
          W.length && (j = _.node(W[0]).order, R(A, G, V, O, j), G = V, O = j);
        }
        R(A, G, A.length, j, T.length);
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
      e.forEach(O, function(j, G) {
        P[j] = j, T[j] = j, A[j] = G;
      });
    }), e.forEach(C, function(O) {
      var j = -1;
      e.forEach(O, function(G) {
        var F = R(G);
        if (F.length) {
          F = e.sortBy(F, function(q) {
            return A[q];
          });
          for (var V = (F.length - 1) / 2, W = Math.floor(V), L = Math.ceil(V); W <= L; ++W) {
            var H = F[W];
            T[G] === G && j < A[H] && !u(b, G, H) && (T[H] = G, T[G] = P[G] = P[H], j = A[H]);
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
    function G(V) {
      T[V] = A.inEdges(V).reduce(function(W, L) {
        return Math.max(W, T[L.v] + A.edge(L));
      }, 0);
    }
    function F(V) {
      var W = A.outEdges(V).reduce(function(H, q) {
        return Math.min(H, T[q.w] - A.edge(q));
      }, Number.POSITIVE_INFINITY), L = _.node(V);
      W !== Number.POSITIVE_INFINITY && L.borderType !== O && (T[V] = Math.max(T[V], W));
    }
    return j(G, A.predecessors.bind(A)), j(F, A.successors.bind(A)), e.forEach(R, function(V) {
      T[V] = T[b[V]];
    }), T;
  }
  function h(_, C, b, R) {
    var P = new t(), T = _.graph(), A = y(T.nodesep, T.edgesep, R);
    return e.forEach(C, function(O) {
      var j;
      e.forEach(O, function(G) {
        var F = b[G];
        if (P.setNode(F), j) {
          var V = b[j], W = P.edge(V, F);
          P.setEdge(V, F, Math.max(A(_, G, j), W || 0));
        }
        j = G;
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
        var O = T + A, j = _[O], G;
        if (j !== C) {
          var F = e.values(j);
          G = A === "l" ? R - e.min(F) : P - e.max(F), G && (_[O] = e.mapValues(j, function(V) {
            return V + G;
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
        var j = (A === "u" ? _.predecessors : _.successors).bind(_), G = f(_, P, b, j), F = d(
          _,
          P,
          G.root,
          G.align,
          O === "r"
        );
        O === "r" && (F = e.mapValues(F, function(V) {
          return -V;
        })), R[A + O] = F;
      });
    });
    var T = p(_, R);
    return m(R, T), v(R, _.graph().align);
  }
  function y(_, C, b) {
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
      if (G && (j += b ? G : -G), G = 0, j += (A.dummy ? C : _) / 2, j += (O.dummy ? C : _) / 2, j += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            G = O.width / 2;
            break;
          case "r":
            G = -O.width / 2;
            break;
        }
      return G && (j += b ? G : -G), G = 0, j;
    };
  }
  function x(_, C) {
    return _.node(C).width;
  }
  return Qv;
}
var Zv, CR;
function kU() {
  if (CR) return Zv;
  CR = 1;
  var e = We(), t = Pt(), n = CU().positionX;
  Zv = o;
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
  return Zv;
}
var Jv, kR;
function RU() {
  if (kR) return Jv;
  kR = 1;
  var e = We(), t = lU(), n = uU(), o = fU(), i = Pt().normalizeRanks, a = dU(), l = Pt().removeEmptyRanks, u = hU(), f = pU(), d = gU(), h = EU(), p = kU(), m = Pt(), v = wn().Graph;
  Jv = S;
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
      G(B);
    }), Z("    removeSelfEdges", function() {
      z(B);
    }), Z("    acyclic", function() {
      t.run(B);
    }), Z("    nestingGraph.run", function() {
      u.run(B);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph(B));
    }), Z("    injectEdgeLabelProxies", function() {
      F(B);
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
      Y(B);
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
  function G(B) {
    var Z = B.graph();
    Z.ranksep /= 2, e.forEach(B.edges(), function(ee) {
      var X = B.edge(ee);
      X.minlen *= 2, X.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? X.width += X.labeloffset : X.height += X.labeloffset);
    });
  }
  function F(B) {
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
  function Y(B) {
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
  function z(B) {
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
  return Jv;
}
var ey, RR;
function NU() {
  if (RR) return ey;
  RR = 1;
  var e = We(), t = Pt(), n = wn().Graph;
  ey = {
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
  return ey;
}
var ty, NR;
function PU() {
  return NR || (NR = 1, ty = "0.8.5"), ty;
}
var ny, PR;
function TU() {
  return PR || (PR = 1, ny = {
    graphlib: wn(),
    layout: RU(),
    debug: NU(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: PU()
  }), ny;
}
var IU = TU();
const TR = /* @__PURE__ */ Cu(IU), AU = 250, MU = 200, OU = 120, LU = 180;
function IR(e) {
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
    width: e.width || AU,
    height: Math.max(MU, a)
  };
}
function DU(e, t, n = "TB") {
  const o = new TR.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: OU,
    ranksep: LU
  }), e.forEach((a) => {
    const { width: l, height: u } = IR(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), TR.layout(o), { nodes: e.map((a) => {
    const l = o.node(a.id), { width: u, height: f } = IR(a);
    return {
      ...a,
      position: {
        x: l.x - u / 2,
        y: l.y - f / 2
      }
    };
  }), edges: t };
}
function jU(e, t, n) {
  return { onLayout: k.useCallback(
    (i) => {
      const { nodes: a } = DU(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function qU(e, t) {
  return { exportToJSON: k.useCallback(() => {
    const i = JSON.stringify({
      nodes: e,
      edges: t
    }, null, 2), a = new Blob([i], { type: "application/json" }), l = URL.createObjectURL(a), u = document.createElement("a");
    u.href = l, u.download = "nodeflow-data.json", u.click(), URL.revokeObjectURL(l);
  }, [e, t]) };
}
function FU(e, t) {
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
function zU(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), o = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(o), n.body.appendChild(i), t && (o.href = t), i.href = e, i.href;
}
const $U = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Mr(e) {
  const t = [];
  for (let n = 0, o = e.length; n < o; n++)
    t.push(e[n]);
  return t;
}
let oi = null;
function eM(e = {}) {
  return oi || (e.includeStyleProperties ? (oi = e.includeStyleProperties, oi) : (oi = Mr(window.getComputedStyle(document.documentElement)), oi));
}
function Su(e, t) {
  const o = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return o ? parseFloat(o.replace("px", "")) : 0;
}
function BU(e) {
  const t = Su(e, "border-left-width"), n = Su(e, "border-right-width");
  return e.clientWidth + t + n;
}
function VU(e) {
  const t = Su(e, "border-top-width"), n = Su(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function tM(e, t = {}) {
  const n = t.width || BU(e), o = t.height || VU(e);
  return { width: n, height: o };
}
function HU() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const jt = 16384;
function WU(e) {
  (e.width > jt || e.height > jt) && (e.width > jt && e.height > jt ? e.width > e.height ? (e.height *= jt / e.width, e.width = jt) : (e.width *= jt / e.height, e.height = jt) : e.width > jt ? (e.height *= jt / e.width, e.width = jt) : (e.width *= jt / e.height, e.height = jt));
}
function Eu(e) {
  return new Promise((t, n) => {
    const o = new Image();
    o.onload = () => {
      o.decode().then(() => {
        requestAnimationFrame(() => t(o));
      });
    }, o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = e;
  });
}
async function UU(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function GU(e, t, n) {
  const o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), UU(i);
}
const Tt = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || Tt(n, t);
};
function YU(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function KU(e, t) {
  return eM(t).map((n) => {
    const o = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${o}${i ? " !important" : ""};`;
  }).join(" ");
}
function XU(e, t, n, o) {
  const i = `.${e}:${t}`, a = n.cssText ? YU(n) : KU(n, o);
  return document.createTextNode(`${i}{${a}}`);
}
function AR(e, t, n, o) {
  const i = window.getComputedStyle(e, n), a = i.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const l = $U();
  try {
    t.className = `${t.className} ${l}`;
  } catch {
    return;
  }
  const u = document.createElement("style");
  u.appendChild(XU(l, n, i, o)), t.appendChild(u);
}
function QU(e, t, n) {
  AR(e, t, ":before", n), AR(e, t, ":after", n);
}
const MR = "application/font-woff", OR = "image/jpeg", ZU = {
  woff: MR,
  woff2: MR,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: OR,
  jpeg: OR,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function JU(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function D0(e) {
  const t = JU(e).toLowerCase();
  return ZU[t] || "";
}
function eG(e) {
  return e.split(/,/)[1];
}
function Iy(e) {
  return e.search(/^(data:)/) !== -1;
}
function tG(e, t) {
  return `data:${t};base64,${e}`;
}
async function nM(e, t, n) {
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
const ry = {};
function nG(e, t, n) {
  let o = e.replace(/\?.*/, "");
  return n && (o = e), /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")), t ? `[${t}]${o}` : o;
}
async function j0(e, t, n) {
  const o = nG(e, t, n.includeQueryParams);
  if (ry[o] != null)
    return ry[o];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const a = await nM(e, n.fetchRequestInit, ({ res: l, result: u }) => (t || (t = l.headers.get("Content-Type") || ""), eG(u)));
    i = tG(a, t);
  } catch (a) {
    i = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${e}`;
    a && (l = typeof a == "string" ? a : a.message), l && console.warn(l);
  }
  return ry[o] = i, i;
}
async function rG(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : Eu(t);
}
async function oG(e, t) {
  if (e.currentSrc) {
    const a = document.createElement("canvas"), l = a.getContext("2d");
    a.width = e.clientWidth, a.height = e.clientHeight, l == null || l.drawImage(e, 0, 0, a.width, a.height);
    const u = a.toDataURL();
    return Eu(u);
  }
  const n = e.poster, o = D0(n), i = await j0(n, o, t);
  return Eu(i);
}
async function iG(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await mc(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function sG(e, t) {
  return Tt(e, HTMLCanvasElement) ? rG(e) : Tt(e, HTMLVideoElement) ? oG(e, t) : Tt(e, HTMLIFrameElement) ? iG(e, t) : e.cloneNode(rM(e));
}
const aG = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", rM = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function lG(e, t, n) {
  var o, i;
  if (rM(t))
    return t;
  let a = [];
  return aG(e) && e.assignedNodes ? a = Mr(e.assignedNodes()) : Tt(e, HTMLIFrameElement) && (!((o = e.contentDocument) === null || o === void 0) && o.body) ? a = Mr(e.contentDocument.body.childNodes) : a = Mr(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), a.length === 0 || Tt(e, HTMLVideoElement) || await a.reduce((l, u) => l.then(() => mc(u, n)).then((f) => {
    f && t.appendChild(f);
  }), Promise.resolve()), t;
}
function uG(e, t, n) {
  const o = t.style;
  if (!o)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (o.cssText = i.cssText, o.transformOrigin = i.transformOrigin) : eM(n).forEach((a) => {
    let l = i.getPropertyValue(a);
    a === "font-size" && l.endsWith("px") && (l = `${Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1}px`), Tt(e, HTMLIFrameElement) && a === "display" && l === "inline" && (l = "block"), a === "d" && t.getAttribute("d") && (l = `path(${t.getAttribute("d")})`), o.setProperty(a, l, i.getPropertyPriority(a));
  });
}
function cG(e, t) {
  Tt(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Tt(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function fG(e, t) {
  if (Tt(e, HTMLSelectElement)) {
    const o = Array.from(t.children).find((i) => e.value === i.getAttribute("value"));
    o && o.setAttribute("selected", "");
  }
}
function dG(e, t, n) {
  return Tt(t, Element) && (uG(e, t, n), QU(e, t, n), cG(e, t), fG(e, t)), t;
}
async function hG(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const o = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a].getAttribute("xlink:href");
    if (u) {
      const f = e.querySelector(u), d = document.querySelector(u);
      !f && d && !o[u] && (o[u] = await mc(d, t, !0));
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
async function mc(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((o) => sG(o, t)).then((o) => lG(e, o, t)).then((o) => dG(e, o, t)).then((o) => hG(o, t));
}
const oM = /url\((['"]?)([^'"]+?)\1\)/g, pG = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, gG = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function mG(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function vG(e) {
  const t = [];
  return e.replace(oM, (n, o, i) => (t.push(i), n)), t.filter((n) => !Iy(n));
}
async function yG(e, t, n, o, i) {
  try {
    const a = n ? zU(t, n) : t, l = D0(t);
    let u;
    return i || (u = await j0(a, l, o)), e.replace(mG(t), `$1${u}$3`);
  } catch {
  }
  return e;
}
function wG(e, { preferredFontFormat: t }) {
  return t ? e.replace(gG, (n) => {
    for (; ; ) {
      const [o, , i] = pG.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${o};`;
    }
  }) : e;
}
function iM(e) {
  return e.search(oM) !== -1;
}
async function sM(e, t, n) {
  if (!iM(e))
    return e;
  const o = wG(e, n);
  return vG(o).reduce((a, l) => a.then((u) => yG(u, l, t, n)), Promise.resolve(o));
}
async function ii(e, t, n) {
  var o;
  const i = (o = t.style) === null || o === void 0 ? void 0 : o.getPropertyValue(e);
  if (i) {
    const a = await sM(i, null, n);
    return t.style.setProperty(e, a, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function xG(e, t) {
  await ii("background", e, t) || await ii("background-image", e, t), await ii("mask", e, t) || await ii("-webkit-mask", e, t) || await ii("mask-image", e, t) || await ii("-webkit-mask-image", e, t);
}
async function bG(e, t) {
  const n = Tt(e, HTMLImageElement);
  if (!(n && !Iy(e.src)) && !(Tt(e, SVGImageElement) && !Iy(e.href.baseVal)))
    return;
  const o = n ? e.src : e.href.baseVal, i = await j0(o, D0(o), t);
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
async function _G(e, t) {
  const o = Mr(e.childNodes).map((i) => aM(i, t));
  await Promise.all(o).then(() => e);
}
async function aM(e, t) {
  Tt(e, Element) && (await xG(e, t), await bG(e, t), await _G(e, t));
}
function SG(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const o = t.style;
  return o != null && Object.keys(o).forEach((i) => {
    n[i] = o[i];
  }), e;
}
const LR = {};
async function DR(e) {
  let t = LR[e];
  if (t != null)
    return t;
  const o = await (await fetch(e)).text();
  return t = { url: e, cssText: o }, LR[e] = t, t;
}
async function jR(e, t) {
  let n = e.cssText;
  const o = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let u = l.replace(o, "$1");
    return u.startsWith("https://") || (u = new URL(u, e.url).href), nM(u, t.fetchRequestInit, ({ result: f }) => (n = n.replace(l, `url(${f})`), [l, f]));
  });
  return Promise.all(a).then(() => n);
}
function qR(e) {
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
async function EG(e, t) {
  const n = [], o = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Mr(i.cssRules || []).forEach((a, l) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let u = l + 1;
            const f = a.href, d = DR(f).then((h) => jR(h, t)).then((h) => qR(h).forEach((p) => {
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
        i.href != null && o.push(DR(i.href).then((u) => jR(u, t)).then((u) => qR(u).forEach((f) => {
          l.insertRule(f, l.cssRules.length);
        })).catch((u) => {
          console.error("Error loading remote stylesheet", u);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(o).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Mr(i.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${i.href}`, a);
      }
  }), n));
}
function CG(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => iM(t.style.getPropertyValue("src")));
}
async function kG(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Mr(e.ownerDocument.styleSheets), o = await EG(n, t);
  return CG(o);
}
function lM(e) {
  return e.trim().replace(/["']/g, "");
}
function RG(e) {
  const t = /* @__PURE__ */ new Set();
  function n(o) {
    (o.style.fontFamily || getComputedStyle(o).fontFamily).split(",").forEach((a) => {
      t.add(lM(a));
    }), Array.from(o.children).forEach((a) => {
      a instanceof HTMLElement && n(a);
    });
  }
  return n(e), t;
}
async function NG(e, t) {
  const n = await kG(e, t), o = RG(e);
  return (await Promise.all(n.filter((a) => o.has(lM(a.style.fontFamily))).map((a) => {
    const l = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return sM(a.cssText, l, t);
  }))).join(`
`);
}
async function PG(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await NG(e, t);
  if (n) {
    const o = document.createElement("style"), i = document.createTextNode(n);
    o.appendChild(i), e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o);
  }
}
async function TG(e, t = {}) {
  const { width: n, height: o } = tM(e, t), i = await mc(e, t, !0);
  return await PG(i, t), await aM(i, t), SG(i, t), await GU(i, n, o);
}
async function uM(e, t = {}) {
  const { width: n, height: o } = tM(e, t), i = await TG(e, t), a = await Eu(i), l = document.createElement("canvas"), u = l.getContext("2d"), f = t.pixelRatio || HU(), d = t.canvasWidth || n, h = t.canvasHeight || o;
  return l.width = d * f, l.height = h * f, t.skipAutoScale || WU(l), l.style.width = `${d}`, l.style.height = `${h}`, t.backgroundColor && (u.fillStyle = t.backgroundColor, u.fillRect(0, 0, l.width, l.height)), u.drawImage(a, 0, 0, l.width, l.height), l;
}
async function FR(e, t = {}) {
  return (await uM(e, t)).toDataURL();
}
async function IG(e, t = {}) {
  return (await uM(e, t)).toDataURL("image/jpeg", t.quality || 1);
}
function AG(e, t, n) {
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
          jpeg: IG,
          png: FR
        }[a.format] || FR)(d, h).then((v) => {
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
const cM = k.createContext(null), fM = k.createContext(null), MG = () => {
  const e = k.useContext(cM);
  if (!e)
    throw new Error("useSetNodesDict must be used within SetNodesDictContext.Provider");
  return e;
}, OG = () => {
  const e = k.useContext(fM);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
}, FG = MG;
function LG() {
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
        const H = Object.values(L), q = eP(W, H), Y = {};
        return q.forEach((M) => {
          Y[M.id] = M;
        }), Y;
      });
    },
    [t]
  ), y = k.useCallback(
    (W) => {
      o((L) => tP(W, L));
    },
    [o]
  ), x = k.useMemo(() => WV(i), [i]), _ = k.useCallback(
    (W) => {
      o((L) => LN(W, L));
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
  ), { exportToJSON: b } = qU(p, n), R = k.useCallback((W) => {
    d(W);
  }, [d]);
  AG(f, h, R);
  const P = k.useCallback((W) => {
    t((L) => {
      const H = Object.values(L), q = typeof W == "function" ? W(H) : W, Y = {};
      return q.forEach((M) => {
        Y[M.id] = M;
      }), Y;
    });
  }, [t]), { onLayout: T } = jU(p, n, P), {
    contextMenu: A,
    onNodeContextMenu: O,
    onEdgeContextMenu: j,
    onPaneClick: G,
    onDelete: F,
    closeContextMenu: V
  } = FU(P, o);
  return /* @__PURE__ */ N.jsx("div", { ref: h, style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ N.jsx(cM.Provider, { value: t, children: /* @__PURE__ */ N.jsx(fM.Provider, { value: u, children: /* @__PURE__ */ N.jsx(kP, { children: /* @__PURE__ */ N.jsxs(t8, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ N.jsxs(n8, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ N.jsxs(o8, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ N.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ N.jsx(r8, {})
      ] }),
      /* @__PURE__ */ N.jsx(d8, { onAddNode: C, templates: i })
    ] }),
    /* @__PURE__ */ N.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ N.jsx(
      g8,
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
        onPaneClick: G,
        contextMenu: A,
        onDelete: F,
        onCloseContextMenu: V,
        onExport: b,
        onLayoutVertical: () => T("TB"),
        onLayoutHorizontal: () => T("LR")
      }
    ) })
  ] }) }) }) }) });
}
const DG = oO(LG), zG = { render: DG };
export {
  ju as BaseHandle,
  WP as ButtonHandle,
  HP as LabeledHandle,
  f0 as NodeComponentBuilder,
  UP as NodeDataContext,
  fM as SetNodeValuesContext,
  cM as SetNodesDictContext,
  WV as buildNodeTypes,
  zG as default,
  DG as render,
  Ei as useNodeDataContext,
  OG as useSetNodeValues,
  FG as useSetNodes,
  MG as useSetNodesDict
};
//# sourceMappingURL=index.js.map
